import { useEffect, useState } from "react";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";

const inputClass = "min-h-[49.6px] rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-100 shadow-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-2 focus:ring-zinc-600";

const templateDefs = [
  { id: "dealer-new-lead", titleKey: "sms.tplDealerNew", messageKey: "smsMessages.dealerNewLead" },
  { id: "customer-dealer-info", titleKey: "sms.tplCustomerInfo", messageKey: "smsMessages.customerInfo" },
  { id: "customer-review", titleKey: "sms.tplCustomerReview", messageKey: "smsMessages.customerReview" },
  { id: "dealer-follow-up", titleKey: "sms.tplDealerFollowUp", messageKey: "smsMessages.dealerFollowUp" }
];

const variables = ["{musteri_adi}", "{musteri_telefon}", "{bayi_adi}", "{bayi_telefon}", "{urun}", "{sla_saat}", "{link}"];

const previewValues = {
  "{musteri_adi}": "A. Dubois",
  "{musteri_telefon}": "0532 ....",
  "{bayi_adi}": "MOTOSHOPPING",
  "{bayi_telefon}": "0643353028",
  "{urun}": "Model X2",
  "{sla_saat}": "4",
  "{link}": "gd.app/r/8K42"
};

function buildTemplates(t) {
  return templateDefs.map((def) => ({
    id: def.id,
    titleKey: def.titleKey,
    message: t(def.messageKey)
  }));
}

function renderPreview(message) {
  return variables.reduce((text, variable) => text.replaceAll(variable, previewValues[variable]), message);
}

export default function SmsPage({ navigate }) {
  const { t, language } = useTranslation();
  const [templates, setTemplates] = useState(() => buildTemplates(t));
  const [activeTemplateId, setActiveTemplateId] = useState(templateDefs[0].id);
  const [saved, setSaved] = useState(false);
  const activeTemplate = templates.find((template) => template.id === activeTemplateId) || templates[0];

  useEffect(() => {
    setTemplates(buildTemplates(t));
  }, [language, t]);

  function updateActiveMessage(value) {
    setTemplates((currentTemplates) => currentTemplates.map((template) => (
      template.id === activeTemplateId ? { ...template, message: value } : template
    )));
  }

  function insertVariable(variable) {
    updateActiveMessage(`${activeTemplate.message}${activeTemplate.message.endsWith(" ") ? "" : " "}${variable}`);
  }

  function saveTemplate() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  }

  return (
    <section className="pt-8">
      <button className="mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate("/ayarlar")}>
        {t("common.backToSettings")}
      </button>

      <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold">{t("sms.title")}</h2>
          <p className="mt-2 text-sm font-medium text-gd-muted">{t("sms.subtitle")}</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
          <aside>
            <h3 className="text-lg font-bold text-white">{t("sms.templates")}</h3>
            <div className="mt-5 grid gap-3">
              {templates.map((template) => {
                const isActive = template.id === activeTemplateId;

                return (
                  <button
                    key={template.id}
                    className={`rounded-xl border px-4 py-4 text-left text-sm font-bold shadow-sm transition ${
                      isActive ? "border-gd-blue bg-gd-blue/10 text-white" : "border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                    }`}
                    type="button"
                    onClick={() => setActiveTemplateId(template.id)}
                  >
                    {t(template.titleKey)}
                  </button>
                );
              })}
            </div>
          </aside>

          <section>
            <h3 className="text-lg font-bold text-white">{formatMessage(t("sms.edit"), { title: t(activeTemplate.titleKey) })}</h3>
            <textarea
              className={`${inputClass} mt-5 min-h-[180px] w-full resize-y text-base leading-7`}
              value={activeTemplate.message}
              onChange={(event) => updateActiveMessage(event.target.value)}
            />

            <div className="mt-5 flex flex-wrap gap-3">
              {variables.map((variable) => (
                <button
                  key={variable}
                  className="rounded-xl border border-dashed border-zinc-600 bg-black px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-gd-blue hover:text-white"
                  type="button"
                  onClick={() => insertVariable(variable)}
                >
                  {variable}
                </button>
              ))}
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-bold text-white">{t("sms.preview")}</h3>
              <div className="mt-4 rounded-2xl border border-emerald-900 bg-emerald-950/20 p-5 shadow-sm">
                <p className="text-sm font-medium leading-7 text-zinc-100">{renderPreview(activeTemplate.message)}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="min-h-11 rounded-xl border border-black bg-black px-5 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95" type="button" onClick={saveTemplate}>
                {t("common.save")}
              </button>
            </div>
            {saved && (
              <div className="mt-4 rounded-2xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-sm font-medium text-emerald-300">
                {t("sms.saved")}
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-800 bg-gd-panel p-4 text-sm font-medium leading-6 text-gd-muted shadow-sm">
        <strong className="text-white">{t("sms.flowNote")}</strong> {t("sms.flowDesc")}
      </div>
    </section>
  );
}
