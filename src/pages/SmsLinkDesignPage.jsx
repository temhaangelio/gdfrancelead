import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext.jsx";

const inputClass = "min-h-[49.6px] rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-100 shadow-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-2 focus:ring-zinc-600";

function Field({ label, children, className = "" }) {
  return (
    <label className={`grid gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-100 ${className}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function buildDefaults(t) {
  return {
    brandLabel: t("smsLinkDefaults.brandLabel"),
    dealerName: "MOTOSHOPPING",
    titleTemplate: t("smsLinkDefaults.titleTemplate"),
    subtitle: t("smsLinkDefaults.subtitle"),
    noteLabel: t("smsLinkDefaults.noteLabel"),
    notePlaceholder: t("smsLinkDefaults.notePlaceholder"),
    submitText: t("smsLinkDefaults.submitText"),
    footerText: t("smsLinkDefaults.footerText"),
    thanksTitle: t("smsLinkDefaults.thanksTitle"),
    thanksMessage: t("smsLinkDefaults.thanksMessage"),
    accent: "#93c5fd"
  };
}

export default function SmsLinkDesignPage({ navigate }) {
  const { t, language } = useTranslation();
  const [rating, setRating] = useState(4);
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState(() => buildDefaults(t));

  useEffect(() => {
    setSettings(buildDefaults(t));
  }, [language, t]);

  function updateSetting(key, value) {
    setSettings((current) => ({ ...current, [key]: value }));
  }

  const title = settings.titleTemplate.replace("{bayi}", settings.dealerName);
  const thanksMessage = settings.thanksMessage.replace("{bayi}", settings.dealerName);

  function saveDesign() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  }

  return (
    <section className="pt-8">
      <button className="mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate("/ayarlar")}>
        {t("common.backToSettings")}
      </button>

      <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
        <section className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold">{t("smsLink.title")}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">{t("smsLink.subtitle")}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label={t("smsLink.brandLabel")}>
              <input className={inputClass} value={settings.brandLabel} onChange={(event) => updateSetting("brandLabel", event.target.value)} />
            </Field>
            <Field label={t("smsLink.sampleDealer")}>
              <input className={inputClass} value={settings.dealerName} onChange={(event) => updateSetting("dealerName", event.target.value)} />
            </Field>
            <Field label={t("smsLink.titleTemplate")} className="md:col-span-2">
              <input className={inputClass} value={settings.titleTemplate} onChange={(event) => updateSetting("titleTemplate", event.target.value)} />
            </Field>
            <Field label={t("smsLink.subtitleField")} className="md:col-span-2">
              <input className={inputClass} value={settings.subtitle} onChange={(event) => updateSetting("subtitle", event.target.value)} />
            </Field>
            <Field label={t("smsLink.noteLabel")}>
              <input className={inputClass} value={settings.noteLabel} onChange={(event) => updateSetting("noteLabel", event.target.value)} />
            </Field>
            <Field label={t("smsLink.buttonText")}>
              <input className={inputClass} value={settings.submitText} onChange={(event) => updateSetting("submitText", event.target.value)} />
            </Field>
            <Field label={t("smsLink.notePlaceholder")} className="md:col-span-2">
              <input className={inputClass} value={settings.notePlaceholder} onChange={(event) => updateSetting("notePlaceholder", event.target.value)} />
            </Field>
            <Field label={t("smsLink.footerText")}>
              <input className={inputClass} value={settings.footerText} onChange={(event) => updateSetting("footerText", event.target.value)} />
            </Field>
            <Field label={t("smsLink.accentColor")}>
              <input className={`${inputClass} h-[49.6px]`} type="color" value={settings.accent} onChange={(event) => updateSetting("accent", event.target.value)} />
            </Field>
            <Field label={t("smsLink.thanksTitle")}>
              <input className={inputClass} value={settings.thanksTitle} onChange={(event) => updateSetting("thanksTitle", event.target.value)} />
            </Field>
            <Field label={t("smsLink.thanksMessage")}>
              <input className={inputClass} value={settings.thanksMessage} onChange={(event) => updateSetting("thanksMessage", event.target.value)} />
            </Field>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="min-h-11 rounded-xl border border-black bg-black px-5 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95" type="button" onClick={saveDesign}>
              {t("smsLink.saveDesign")}
            </button>
          </div>
          {saved && (
            <div className="mt-4 rounded-2xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-sm font-medium text-emerald-300">
              {t("smsLink.saved")}
            </div>
          )}
        </section>

        <aside className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("smsLink.linkPreview")}</h3>
          <div className="mt-5 rounded-[2rem] border border-zinc-700 bg-black p-4 shadow-2xl">
            <form className="rounded-2xl border border-gd-line bg-gd-card p-6 text-center shadow-xl">
              <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-gd-muted">{settings.brandLabel}</p>
              <h2 className="mt-4 text-xl font-extrabold">{title}</h2>
              <p className="mt-3 text-sm font-semibold text-gd-muted">{settings.subtitle}</p>
              <div className="mt-8 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-4xl transition"
                    style={{ color: star <= rating ? settings.accent : "#71717a" }}
                    type="button"
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <label className="mt-8 block text-left text-sm font-extrabold">
                {settings.noteLabel} <span className="text-gd-muted">{t("common.optional")}</span>
                <textarea className="mt-3 min-h-32 w-full rounded-xl border border-gd-line bg-gd-field px-4 py-3 font-medium outline-none" placeholder={settings.notePlaceholder} />
              </label>
              <button className="mt-5 h-12 w-full rounded-xl px-5 font-extrabold text-gd-page" style={{ backgroundColor: settings.accent }} type="button">
                {settings.submitText}
              </button>
              <p className="mt-5 text-xs font-semibold text-gd-muted">{settings.footerText}</p>
            </form>
          </div>

          <div className="mt-5 rounded-2xl border border-zinc-800 bg-black p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gd-muted">{t("smsLink.afterSubmit")}</p>
            <h4 className="mt-3 text-base font-bold text-white">{settings.thanksTitle}</h4>
            <p className="mt-2 text-sm font-medium leading-6 text-gd-muted">{thanksMessage}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
