import { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext.jsx";

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`grid gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-100 ${className}`}>
      <span>{label} {required && <span className="text-gd-red">*</span>}</span>
      {children}
    </label>
  );
}

const inputClass = "min-h-[49.6px] rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium normal-case text-zinc-100 shadow-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-2 focus:ring-zinc-600";

export default function LeadAddPage({ navigate }) {
  const { t } = useTranslation();
  const [saved, setSaved] = useState(false);

  function saveLead() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3500);
  }

  return (
    <section className="pt-8">
      <div className="p-0">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between lg:items-center">
          <div className="min-w-0 flex flex-col gap-0">
            <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("leadAdd.title")}</h2>
          </div>
        </div>

        <form className="mb-6 rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 shadow-xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label={t("leadAdd.fullName")} required>
              <input className={inputClass} placeholder={t("leadAdd.fullName")} />
            </Field>

            <Field label={t("leadAdd.phone")} required>
              <input className={inputClass} placeholder="+33 _ _ _ _ _ _" />
            </Field>

            <Field label={t("leadAdd.status")} required>
              <select className={inputClass} defaultValue="new">
                <option value="new">{t("leadAdd.statusNew")}</option>
                <option value="progress">{t("leadAdd.statusInProgress")}</option>
                <option value="follow">{t("leadAdd.statusFollowUp")}</option>
                <option value="sale">{t("leadAdd.statusSale")}</option>
                <option value="negative">{t("leadAdd.statusNegative")}</option>
              </select>
            </Field>

            <Field label={t("leadAdd.email")}>
              <input className={inputClass} placeholder={t("leadAdd.email")} />
            </Field>

            <Field label={t("leadAdd.sourceChannel")}>
              <select className={inputClass} defaultValue="web">
                <option value="web">{t("leadAdd.sourceWeb")}</option>
                <option value="form">{t("leadAdd.sourceForm")}</option>
                <option value="fair">{t("leadAdd.sourceFair")}</option>
                <option value="import">{t("leadAdd.sourceImport")}</option>
                <option value="manual">{t("leadAdd.sourceManual")}</option>
              </select>
            </Field>

            <Field label={t("common.productModel")}>
              <input className={inputClass} placeholder={t("common.productModel")} />
            </Field>

            <Field label={t("leadAdd.city")}>
              <input className={inputClass} placeholder={t("leadAdd.city")} />
            </Field>

            <Field label={t("common.postalCode")}>
              <input className={inputClass} placeholder={t("common.postalCode")} />
            </Field>

            <Field label={t("leadAdd.address")} className="lg:col-span-2">
              <textarea className={`${inputClass} min-h-[98px] resize-y`} placeholder={t("leadAdd.address")} />
            </Field>

            <Field label={t("leadAdd.notes")} className="lg:col-span-2">
              <textarea className={`${inputClass} min-h-[126px] resize-y`} placeholder={t("leadAdd.notesPlaceholder")} />
            </Field>
          </div>

          <p className="mt-1 text-xs font-medium text-gd-red">{t("leadAdd.notesPrivacy")}</p>
        </form>

        <div className="mb-6 rounded-2xl border-2 border-dashed border-gd-yellow bg-gd-yellow/10 px-4 py-3 text-xs font-medium text-gd-yellow shadow-sm md:text-sm">
          {t("leadAdd.infoBanner")}
        </div>

        {saved && (
          <div className="mb-6 rounded-2xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-sm font-medium text-emerald-300">
            {t("leadAdd.saved")}
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            className="min-h-11 rounded-xl border border-zinc-700 bg-transparent px-4 py-3 font-medium text-zinc-100 shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95"
            type="button"
            onClick={() => navigate("/leadler")}
          >
            {t("common.cancel")}
          </button>
          <button className="min-h-11 rounded-xl border border-black bg-black px-4 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95" type="button" onClick={saveLead}>
            {t("leadAdd.saveAndAssign")}
          </button>
        </div>
      </div>
    </section>
  );
}
