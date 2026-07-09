import { useState } from "react";
import { AssignmentRulesIcon, SmsIcon } from "../icons.jsx";
import { useTranslation } from "../i18n/LanguageContext.jsx";

const rules = [
  { id: "lead-import", titleKey: "settings.ruleLeadImport", descriptionKey: "settings.ruleLeadImportDesc", enabled: true },
  { id: "assigned", titleKey: "settings.ruleAssigned", descriptionKey: "settings.ruleAssignedDesc", enabled: true },
  { id: "no-contact", titleKey: "settings.ruleNoContact", descriptionKey: "settings.ruleNoContactDesc", enabled: true },
  { id: "low-rating", titleKey: "settings.ruleLowRating", descriptionKey: "settings.ruleLowRatingDesc", enabled: false }
];

const settingsPages = [
  { titleKey: "settings.smsTitle", descriptionKey: "settings.smsDesc", path: "/sms", icon: SmsIcon },
  { titleKey: "settings.reviewPageTitle", descriptionKey: "settings.reviewPageDesc", path: "/sms-link-tasarimi", icon: SmsIcon },
  { titleKey: "settings.rulesTitle", descriptionKey: "settings.rulesDesc", path: "/atama-kurallari", icon: AssignmentRulesIcon }
];

function Switch({ checked, onChange }) {
  return (
    <button
      className={`relative h-8 w-14 rounded-full border shadow-sm transition-all duration-300 ${
        checked ? "border-emerald-800 bg-emerald-500/25" : "border-zinc-700 bg-zinc-900"
      }`}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
    >
      <span
        className={`absolute top-1 h-6 w-6 rounded-full shadow-md transition-all duration-300 ${
          checked ? "left-7 bg-emerald-300" : "left-1 bg-zinc-400"
        }`}
      />
    </button>
  );
}

export default function AutomationPage({ navigate }) {
  const { t } = useTranslation();
  const [automationRules, setAutomationRules] = useState(rules);

  function toggleRule(ruleId) {
    setAutomationRules((currentRules) => currentRules.map((rule) => (
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    )));
  }

  return (
    <section className="pt-8">
      <div className="rounded-2xl bg-gd-card p-6 shadow-xl">
        <h2 className="text-2xl font-extrabold">{t("settings.title")}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {settingsPages.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                className="flex items-start gap-4 rounded-xl border border-gd-line bg-gd-panel p-5 text-left shadow-md transition hover:border-zinc-600 hover:bg-zinc-800"
                type="button"
                onClick={() => navigate(item.path)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-black text-white">
                  <Icon />
                </span>
                <span>
                  <strong className="block text-base font-bold text-white">{t(item.titleKey)}</strong>
                  <span className="mt-2 block text-sm font-medium leading-6 text-gd-muted">{t(item.descriptionKey)}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {automationRules.map((rule) => (
            <div key={rule.id} className="flex items-start justify-between gap-4 rounded-xl border border-gd-line bg-gd-panel p-5">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <strong>{t(rule.titleKey)}</strong>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                    rule.enabled ? "border-emerald-800 bg-emerald-950/70 text-emerald-300" : "border-zinc-700 bg-zinc-900 text-gd-muted"
                  }`}>
                    {rule.enabled ? t("settings.enabled") : t("settings.disabled")}
                  </span>
                </div>
                <p className="mt-2 text-gd-muted">{t(rule.descriptionKey)}</p>
              </div>
              <Switch checked={rule.enabled} onChange={() => toggleRule(rule.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
