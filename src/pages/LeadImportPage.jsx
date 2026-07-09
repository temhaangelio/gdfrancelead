import { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext.jsx";

const importRows = [
  { row: 1, name: "F. Girard", phone: "0542 ...", postalCode: "34720", statusKey: "import.validStatus", type: "valid" },
  { row: 2, name: "G. Lambert", phoneKey: "import.missing", postalCode: "06100", statusKey: "import.missingPhone", type: "error" },
  { row: 3, name: "H. Bernard", phone: "0530 ...", postalCode: "99abc", statusKey: "import.invalidPostal", type: "error" },
  { row: 4, name: "A. Dubois", phone: "0532 ...", postalCode: "34710", statusKey: "import.duplicateRef", type: "duplicate" }
];

const stepKeys = ["import.stepUpload", "import.stepMap", "import.stepValidate", "import.stepResult"];
const stepStates = ["done", "done", "active", "pending"];

function DownloadIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function StepPill({ label, state }) {
  const classes = {
    done: "border-emerald-700 bg-emerald-950/45 text-emerald-200",
    active: "border-gd-blue bg-gd-blue/20 text-white",
    pending: "border-dashed border-zinc-700 bg-transparent text-zinc-500"
  };

  return (
    <span className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2 text-sm font-bold shadow-sm ${classes[state]}`}>
      {label} {state === "done" && <span className="ml-2 text-emerald-400">✓</span>}
    </span>
  );
}

function rowClass(type) {
  if (type === "error") return "bg-red-950/25 text-red-200";
  if (type === "duplicate") return "bg-yellow-950/25 text-yellow-100";
  return "text-zinc-100";
}

export default function LeadImportPage({ navigate }) {
  const { t } = useTranslation();
  const [imported, setImported] = useState(false);

  function importValidRows() {
    setImported(true);
    window.setTimeout(() => setImported(false), 3500);
  }

  return (
    <section className="pt-8">
      <div className="p-0">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between lg:items-center">
          <div className="min-w-0 flex flex-col gap-0">
            <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("import.title")}</h2>
          </div>
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium text-zinc-100 shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg" type="button">
            <DownloadIcon />
            {t("import.template")}
          </button>
        </div>

        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-black p-4 shadow-xl lg:flex-row lg:items-center">
          {stepKeys.map((key, index) => (
            <div key={key} className="flex items-center gap-3">
              <StepPill label={t(key)} state={stepStates[index]} />
              {index < stepKeys.length - 1 && <span className="hidden h-px w-16 bg-zinc-700 lg:block" />}
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-black p-3 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-white">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  <th className="px-3 py-4">{t("import.row")}</th>
                  <th className="px-3 py-4">{t("import.name")}</th>
                  <th className="px-3 py-4">{t("common.phone")}</th>
                  <th className="px-3 py-4">{t("import.postalShort")}</th>
                  <th className="px-3 py-4">{t("import.check")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-xs md:text-sm">
                {importRows.map((item) => (
                  <tr key={item.row} className={rowClass(item.type)}>
                    <td className="px-3 py-5">{item.row}</td>
                    <td className="px-3 py-5">{item.name}</td>
                    <td className={`px-3 py-5 ${item.phoneKey ? "font-bold text-red-300" : ""}`}>
                      {item.phoneKey ? t(item.phoneKey) : item.phone}
                    </td>
                    <td className={`px-3 py-5 ${item.postalCode === "99abc" ? "font-bold text-red-300" : ""}`}>{item.postalCode}</td>
                    <td className={`px-3 py-5 font-bold ${item.type === "valid" ? "text-emerald-400" : item.type === "duplicate" ? "text-gd-yellow" : "text-red-300"}`}>
                      {t(item.statusKey)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-center shadow-xl">
            <strong className="block text-3xl font-bold text-emerald-400">128</strong>
            <span className="mt-2 block text-sm font-medium text-gd-muted">{t("import.valid")}</span>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-center shadow-xl">
            <strong className="block text-3xl font-bold text-red-400">7</strong>
            <span className="mt-2 block text-sm font-medium text-gd-muted">{t("import.errors")}</span>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-center shadow-xl">
            <strong className="block text-3xl font-bold text-gd-yellow">3</strong>
            <span className="mt-2 block text-sm font-medium text-gd-muted">{t("import.duplicates")}</span>
          </article>
        </div>

        {imported && (
          <div className="mt-6 rounded-2xl border border-emerald-800 bg-emerald-950/45 px-4 py-3 text-sm font-medium text-emerald-300">
            {t("import.success")}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-transparent px-6 py-3 font-medium text-zinc-100 shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg" type="button">
            <DownloadIcon />
            {t("import.downloadErrors")}
          </button>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button className="min-h-11 rounded-xl border border-zinc-700 bg-transparent px-6 py-3 font-medium text-zinc-100 shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg" type="button" onClick={() => navigate("/leadler")}>
              {t("common.cancel")}
            </button>
            <button className="min-h-11 rounded-xl border border-gd-blue bg-gd-blue px-6 py-3 font-medium text-gd-page shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg" type="button" onClick={importValidRows}>
              {t("import.importValid")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
