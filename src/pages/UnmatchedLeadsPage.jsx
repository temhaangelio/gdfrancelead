import { useMemo, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import { translatePoolReason } from "../i18n/helpers.js";

const initialLeadAssignments = [
  { id: "GD-24102", name: "L. Morel", phone: "0551 482 10 22", postalCode: "99120", dealer: "Havuzda", status: "Eşleşmedi", reason: "Posta kodu bölge dışı" },
  { id: "GD-24103", name: "R. Garnier", phone: "0530 118 41 90", postalCode: "063XX", dealer: "Havuzda", status: "Eşleşmedi", reason: "Eksik/hatalı posta kodu" },
  { id: "GD-24104", name: "A. Dubois", phone: "0532 774 92 15", postalCode: "34710", dealer: "Havuzda", status: "Eşleşmedi", reason: "Mükerrer kayıt kontrolü" },
  { id: "GD-24087", name: "Anthony Suarez", phone: "+33615736242", postalCode: "34720", dealer: "PISTES CYCLABLES PITHIVIERS", status: "Atandı", reason: "Posta kodu kuralı" },
  { id: "GD-24088", name: "Hande Kütahyalıgil", phone: "0682353604", postalCode: "34080", dealer: "MOTOSHOPPING", status: "Atandı", reason: "En yakın bayi" },
  { id: "GD-24089", name: "Chloe Zivan", phone: "0682353604", postalCode: "06100", dealer: "SUPER BIKE 56", status: "Atandı", reason: "Posta kodu kuralı" }
];

const dealerOptions = ["PISTES CYCLABLES PITHIVIERS", "MOTOSHOPPING", "SUPER BIKE 56", "MM MOTOS", "CHOPARD MOTORCYCLE 21", "OX ONLINE", "LEADER BIKES III", "LAF MOTO"];

const POOL_STATUS = {
  Atandı: "pool.statusAssigned",
  Eşleşmedi: "pool.statusUnmatched"
};

function translatePoolStatus(status, t) {
  const key = POOL_STATUS[status];
  return key ? t(key) : status;
}

function translateDealerLabel(dealer, t) {
  return dealer === "Havuzda" ? t("pool.inPool") : dealer;
}

export default function UnmatchedLeadsPage({ navigate }) {
  const { t } = useTranslation();
  const [assignments, setAssignments] = useState(initialLeadAssignments);
  const [query, setQuery] = useState("");
  const [selectedDealers, setSelectedDealers] = useState({});
  const [notice, setNotice] = useState("");

  const poolCount = assignments.filter((lead) => lead.status !== "Atandı").length;
  const filteredAssignments = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("tr-TR");
    if (!search) return assignments;
    return assignments.filter((lead) =>
      [lead.id, lead.name, lead.phone, lead.postalCode, lead.dealer, lead.status, lead.reason]
        .join(" ")
        .toLocaleLowerCase("tr-TR")
        .includes(search)
    );
  }, [assignments, query]);

  function updateDealer(leadId) {
    const nextDealer = selectedDealers[leadId];
    if (!nextDealer) {
      setNotice(t("pool.selectDealerFirst"));
      return;
    }

    setAssignments((currentAssignments) => currentAssignments.map((lead) => (
      lead.id === leadId
        ? { ...lead, dealer: nextDealer, status: "Atandı", reason: "Manuel eşleştirme güncellendi" }
        : lead
    )));
    setNotice(formatMessage(t("pool.assignedNotice"), { id: leadId, dealer: nextDealer }));
  }

  return (
    <section className="pt-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between lg:items-center">
        <div>
          <button className="mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate("/analiz")}>
            {t("common.backToAnalytics")}
          </button>
          <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("pool.title")}</h2>
          <p className="mt-2 text-sm font-medium text-gd-muted">{t("pool.subtitle")}</p>
        </div>
        <span className="w-fit rounded-xl border border-gd-yellow bg-gd-yellow/10 px-4 py-3 text-sm font-medium text-gd-yellow">
          {formatMessage(t("pool.poolBadge"), { pool: poolCount, total: assignments.length })}
        </span>
      </div>

      <section className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
        <div className="mb-5 rounded-2xl border-2 border-dashed border-gd-yellow bg-gd-yellow/10 px-4 py-3 text-xs font-medium text-gd-yellow shadow-sm md:text-sm">
          {t("pool.noticeBanner")}
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-black p-3 shadow-xl">
          <div className="mb-3 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3">
            <input
              className="w-full bg-transparent text-sm font-medium text-zinc-100 outline-none placeholder:text-zinc-400"
              placeholder={t("pool.search")}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          {notice && (
            <div className="mb-3 rounded-2xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-sm font-medium text-emerald-300">
              {notice}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-gd-muted">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  <th className="px-3 py-4">{t("common.lead")}</th>
                  <th className="px-3 py-4">{t("common.phone")}</th>
                  <th className="px-3 py-4">{t("common.postalCode")}</th>
                  <th className="px-3 py-4">{t("pool.currentDealer")}</th>
                  <th className="px-3 py-4">{t("common.status")}</th>
                  <th className="px-3 py-4">{t("pool.reason")}</th>
                  <th className="px-3 py-4">{t("pool.newDealer")}</th>
                  <th className="px-3 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm">
                {filteredAssignments.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-3 py-4">
                      <span className="block font-bold text-white">{lead.id}</span>
                      <span className="mt-1 block font-medium text-gd-muted">{lead.name}</span>
                    </td>
                    <td className="px-3 py-4 font-medium text-zinc-100">{lead.phone}</td>
                    <td className="px-3 py-4 font-bold text-gd-yellow">{lead.postalCode}</td>
                    <td className="px-3 py-4 font-medium text-white">{translateDealerLabel(lead.dealer, t)}</td>
                    <td className="px-3 py-4">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                        lead.status === "Atandı" ? "border-emerald-800 bg-emerald-950/70 text-emerald-300" : "border-gd-yellow bg-gd-yellow/10 text-gd-yellow"
                      }`}>
                        {translatePoolStatus(lead.status, t)}
                      </span>
                    </td>
                    <td className="px-3 py-4 font-medium text-gd-muted">{translatePoolReason(lead.reason, t)}</td>
                    <td className="px-3 py-4">
                      <select
                        className="min-h-11 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow-sm outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600"
                        value={selectedDealers[lead.id] ?? (lead.dealer === "Havuzda" ? "" : lead.dealer)}
                        onChange={(event) => setSelectedDealers((current) => ({ ...current, [lead.id]: event.target.value }))}
                      >
                        <option value="">{t("common.selectDealer")}</option>
                        {dealerOptions.map((dealer) => <option key={dealer}>{dealer}</option>)}
                      </select>
                    </td>
                    <td className="px-3 py-4 text-right">
                      <button className="rounded-xl border border-black bg-black px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800" type="button" onClick={() => updateDealer(lead.id)}>
                        {t("common.update")}
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredAssignments.length === 0 && (
                  <tr>
                    <td className="px-3 py-10 text-center text-sm font-medium text-gd-muted" colSpan={8}>
                      {t("pool.noResults")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}
