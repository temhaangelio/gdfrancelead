import { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";

const initialRules = [
  { id: 1, range: "34000-34799", primary: "MOTOSHOPPING", backup: "PISTES CYCLABLES PITHIVIERS" },
  { id: 2, range: "06000-06999", primary: "SUPER BIKE 56", backup: "- yok" }
];
const dealerIds = ["MOTOSHOPPING", "PISTES CYCLABLES PITHIVIERS", "SUPER BIKE 56", "MM MOTOS", "CHOPARD MOTORCYCLE 21", "OX ONLINE", "- yok"];

function SelectField({ value, t }) {
  return (
    <select className="min-h-[49.6px] w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-100 shadow-sm outline-none transition-all duration-300 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600" defaultValue={value}>
      {dealerIds.map((dealer) => (
        <option key={dealer} value={dealer}>{dealer === "- yok" ? t("mock.noDealer") : dealer}</option>
      ))}
    </select>
  );
}

function ToggleLine({ label, t, smsDefault = true, emailDefault = false }) {
  const [sms, setSms] = useState(smsDefault);
  const [email, setEmail] = useState(emailDefault);
  const smsState = sms ? t("common.on") : t("common.off");
  const emailState = email ? t("common.on") : t("common.off");

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-black p-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium text-white">{label}</span>
      <div className="flex flex-wrap gap-2">
        <button className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${sms ? "border-emerald-800 bg-emerald-950/70 text-emerald-300" : "border-zinc-700 bg-zinc-900 text-gd-muted"}`} type="button" onClick={() => setSms((current) => !current)}>
          {formatMessage(t("assignmentRules.smsToggle"), { state: smsState })}
        </button>
        <button className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${email ? "border-emerald-800 bg-emerald-950/70 text-emerald-300" : "border-zinc-700 bg-zinc-900 text-gd-muted"}`} type="button" onClick={() => setEmail((current) => !current)}>
          {formatMessage(t("assignmentRules.emailToggle"), { state: emailState })}
        </button>
      </div>
    </div>
  );
}

export default function AssignmentRulesPage({ navigate }) {
  const { t } = useTranslation();
  const [fallbackMode, setFallbackMode] = useState("pool");
  const [rules, setRules] = useState(initialRules);
  const [saved, setSaved] = useState(false);

  function addRule() {
    setRules((currentRules) => [
      ...currentRules,
      {
        id: Date.now(),
        range: "",
        primary: dealerIds[0],
        backup: dealerIds[dealerIds.length - 1]
      }
    ]);
  }

  function saveRules() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3500);
  }

  return (
    <section className="pt-8">
      <div className="p-0">
        <button className="mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate("/ayarlar")}>
          {t("common.backToSettings")}
        </button>
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between lg:items-center">
          <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("assignmentRules.title")}</h2>
        </div>

        <section className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
          <h3 className="text-lg font-bold text-white">{t("assignmentRules.postalMatch")}</h3>
          <div className="mt-5 overflow-x-auto rounded-3xl border border-zinc-800 bg-black p-3 shadow-xl">
            <table className="w-full min-w-[760px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-gd-muted">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  <th className="px-3 py-4">{t("assignmentRules.postalRange")}</th>
                  <th className="px-3 py-4">{t("assignmentRules.primaryDealer")}</th>
                  <th className="px-3 py-4">{t("assignmentRules.backupDealer")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm">
                {rules.map((rule) => (
                  <tr key={rule.id}>
                    <td className="px-3 py-4">
                      <input className="min-h-[49.6px] w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-100 shadow-sm outline-none focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600" defaultValue={rule.range} placeholder="00000-00000" />
                    </td>
                    <td className="px-3 py-4"><SelectField value={rule.primary} t={t} /></td>
                    <td className="px-3 py-4"><SelectField value={rule.backup} t={t} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-4 rounded-xl border border-zinc-700 bg-transparent px-4 py-3 text-sm font-medium text-zinc-100 shadow-md transition hover:bg-zinc-800" type="button" onClick={addRule}>
            {t("assignmentRules.addRule")}
          </button>
        </section>

        <section className="mt-5 rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
          <h3 className="text-lg font-bold text-white">{t("assignmentRules.noMatch")}</h3>
          <div className="mt-5 grid gap-3">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-800 bg-black p-4 text-sm font-medium text-white">
              <input className="h-5 w-5 accent-gd-blue" type="radio" name="fallback" checked={fallbackMode === "pool"} onChange={() => setFallbackMode("pool")} />
              {t("assignmentRules.fallbackPool")}
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-800 bg-black p-4 text-sm font-medium text-white">
              <input className="h-5 w-5 accent-gd-blue" type="radio" name="fallback" checked={fallbackMode === "nearest"} onChange={() => setFallbackMode("nearest")} />
              {t("assignmentRules.fallbackNearest")}
            </label>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
          <h3 className="text-lg font-bold text-white">{t("assignmentRules.notifications")}</h3>
          <div className="mt-5 grid gap-3">
            <ToggleLine label={t("assignmentRules.dealer")} t={t} smsDefault emailDefault />
            <ToggleLine label={t("assignmentRules.customer")} t={t} smsDefault emailDefault={false} />
          </div>
        </section>

        {saved && (
          <div className="mt-5 rounded-2xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-sm font-medium text-emerald-300">
            {t("assignmentRules.saved")}
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button className="min-h-11 rounded-xl border border-black bg-black px-4 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95" type="button" onClick={saveRules}>
            {t("assignmentRules.saveRules")}
          </button>
        </div>
      </div>
    </section>
  );
}
