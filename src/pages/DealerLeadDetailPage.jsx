import { useState } from "react";
import { statusStyles } from "../data.jsx";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import { translateDealerDemo, translateHistory, translateLeadDate, translateSource, translateStatus } from "../i18n/helpers.js";

const leadDetails = {
  "gd-24087": {
    id: "GD-24087",
    name: "A. Dubois",
    phone: "+33 6 12 34 56",
    email: "adubois@email.fr",
    postalCode: "59000",
    city: "Lille",
    source: "Web sitesi",
    model: "Model X2",
    status: "GÖRÜŞÜLÜYOR",
    assignedAt: "05 Tem 2026 10:24",
    history: [
      { title: "05 Tem 10:24 · Atama", detail: "Lead posta koduna göre bayinize atandı.", tone: "neutral" },
      { title: "05 Tem 11:05 · Telefon", detail: "Bilgi verildi, teklif gönderildi.", tone: "neutral" },
      { title: "Takip · 8 Tem", detail: "Test sürüşü planlama", tone: "warning" }
    ]
  },
  "gd-24099": {
    id: "GD-24099",
    name: "K. Perrin",
    phone: "+33 6 88 14 37",
    email: "kperrin@email.fr",
    postalCode: "59300",
    city: "Valenciennes",
    source: "İletişim formu",
    model: "Model X2",
    status: "YENİ LEAD",
    assignedAt: "05 Tem 2026 09:05",
    history: [
      { title: "05 Tem 09:05 · Atama", detail: "Lead posta koduna göre bayinize atandı. SLA: 4 saat.", tone: "warning" }
    ]
  }
};

const fallbackLead = {
  id: "GD-24095",
  name: "J. Roux",
  phone: "+33 6 51 20 84",
  email: "jroux@email.fr",
  postalCode: "59100",
  city: "Roubaix",
  source: "Web sitesi",
  model: "Model X2",
  status: "YENİ LEAD",
  assignedAt: "05 Tem 2026 14:12",
  history: [
    { title: "05 Tem 14:12 · Atama", detail: "Lead posta koduna göre bayinize atandı. SLA: 4 saat.", tone: "warning" }
  ]
};

const activityTypeKeys = ["dealer.activityPhone", "dealer.activityEmail", "dealer.activityInPerson", "dealer.activityTestDrive"];
const resultOptions = ["GÖRÜŞÜLÜYOR", "TAKİP", "TEST SÜRÜŞÜ", "OLUMLU", "SATIŞ", "OLUMSUZ"];
const closingStatuses = ["OLUMLU", "SATIŞ", "OLUMSUZ"];

const inputClass = "min-h-[49.6px] w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-100 shadow-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600";

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-black p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-gd-muted">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function TimelineDot({ tone }) {
  const color = tone === "warning" ? "border-gd-yellow bg-gd-yellow/20" : tone === "success" ? "border-emerald-500 bg-emerald-500/20" : "border-zinc-300 bg-black";
  return <span className={`relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full border-2 ${color}`} />;
}

export default function DealerLeadDetailPage({ navigate, fromPath }) {
  const { t, locale } = useTranslation();
  const leadId = window.location.pathname.split("/").pop();
  const lead = leadDetails[leadId] || fallbackLead;
  const backTarget = fromPath === "/bayi/anketler"
    ? { path: "/bayi/anketler", label: t("common.backToMyReviews") }
    : { path: "/bayi/leadler", label: t("common.backToMyLeads") };

  const [status, setStatus] = useState(lead.status);
  const [history, setHistory] = useState(lead.history);
  const [activityType, setActivityType] = useState(activityTypeKeys[0]);
  const [result, setResult] = useState(lead.status === "YENİ LEAD" ? "GÖRÜŞÜLÜYOR" : lead.status);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  function saveActivity(event) {
    event.preventDefault();
    const now = new Date();
    const timestamp = now.toLocaleDateString(locale, { day: "2-digit", month: "short" }) + " " +
      now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });

    setHistory((current) => [
      ...current,
      {
        title: `${timestamp} · ${t(activityType)}`,
        detail: note.trim() || formatMessage(t("dealer.resultDetail"), { result: translateStatus(result, t) }),
        tone: result === "OLUMSUZ" ? "warning" : closingStatuses.includes(result) ? "success" : "neutral"
      }
    ]);
    setStatus(result);
    setNote("");
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  }

  const isClosed = closingStatuses.includes(status);

  return (
    <section className="pt-8">
      <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-2xl sm:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <button className="mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate(backTarget.path)}>
              {backTarget.label}
            </button>
            <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{lead.name}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">
              {lead.id} · {formatMessage(t("dealer.assignmentLabel"), { time: translateLeadDate(leadId, "assignedAt", lead.assignedAt, t) })}
            </p>
          </div>
          <span className={`w-fit rounded-full border px-4 py-2 text-xs font-bold ${statusStyles[status]}`}>
            {translateStatus(status, t)}
          </span>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_0.8fr]">
          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("dealer.customerInfo")}</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <InfoCard label={t("common.phone")} value={lead.phone} />
              <InfoCard label={t("common.email")} value={lead.email} />
              <InfoCard label={t("common.postalCode")} value={lead.postalCode} />
              <InfoCard label={t("common.city")} value={lead.city} />
              <InfoCard label={t("common.source")} value={translateSource(lead.source, t)} />
              <InfoCard label={t("common.productModel")} value={lead.model} />
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("dealer.saveResult")}</h3>
            <form className="mt-5 grid gap-4" onSubmit={saveActivity}>
              <label className="grid gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-100">
                <span>{t("dealer.activityType")}</span>
                <select className={inputClass} value={activityType} onChange={(event) => setActivityType(event.target.value)}>
                  {activityTypeKeys.map((key) => <option key={key} value={key}>{t(key)}</option>)}
                </select>
              </label>
              <label className="grid gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-100">
                <span>{t("dealer.resultStatus")}</span>
                <select className={inputClass} value={result} onChange={(event) => setResult(event.target.value)}>
                  {resultOptions.map((option) => <option key={option} value={option}>{translateStatus(option, t)}</option>)}
                </select>
              </label>
              <label className="grid gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-100">
                <span>{t("common.note")}</span>
                <textarea
                  className={`${inputClass} min-h-[98px] resize-y normal-case`}
                  placeholder={t("dealer.notePlaceholder")}
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                />
              </label>
              <button className="min-h-11 rounded-xl border border-black bg-black px-4 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95" type="submit">
                {t("dealer.saveActivity")}
              </button>
              {saved && (
                <p className="rounded-xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-xs font-bold text-emerald-300">
                  {t("dealer.activitySaved")}
                </p>
              )}
            </form>
            <div className="mt-5 rounded-xl border-2 border-dashed border-gd-yellow bg-gd-yellow/10 px-4 py-3 text-xs font-medium text-gd-yellow md:text-sm">
              {isClosed ? t("dealer.closedSms") : t("dealer.closeSmsInfo")}
            </div>
          </section>
        </div>

        <section className="mt-5 rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("leadDetail.history")}</h3>
          <div className="mt-5">
            {history.map((item, index) => (
              <div key={`${item.title}-${index}`} className="relative flex gap-4 pb-6 last:pb-0">
                {index < history.length - 1 && <span className="absolute left-[9px] top-7 h-[calc(100%-1.75rem)] w-px bg-zinc-700" />}
                <TimelineDot tone={item.tone} />
                <div className="min-w-0">
                  <p className="text-base font-bold text-white">{translateHistory(leadId, index, "title", item.title, t, "dealerHistory")}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-100">{translateHistory(leadId, index, "detail", item.detail, t, "dealerHistory")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
