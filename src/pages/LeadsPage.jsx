import { useMemo, useState } from "react";
import { IoPeople, IoPersonAdd, IoTrendingUp, IoAlertCircle } from "react-icons/io5";
import { statusStyles } from "../data.jsx";
import { leadRows } from "../mockData.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { translateDealerLabel, translateStatus } from "../i18n/helpers.js";

const statusFilters = ["Tümü", "YENİ LEAD", "GÖRÜŞÜLÜYOR", "TAKİP", "TEST SÜRÜŞÜ", "OLUMLU", "SATIŞ", "ATANMADI"];

function CloudIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 16l-4-4-4 4" />
      <path d="M12 12v9" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      <path d="M16 16l-4-4-4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function SortIcon() {
  return (
    <span className="flex flex-col text-gd-muted">
      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7l3-3 3 3" />
      </svg>
      <svg className="-mt-1 h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5l3 3 3-3" />
      </svg>
    </span>
  );
}

export default function LeadsPage({ navigate }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tümü");

  const filteredRows = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("tr-TR");
    return leadRows.filter((lead) => {
      if (statusFilter !== "Tümü" && lead.status !== statusFilter) return false;
      if (!search) return true;
      return [lead.name, lead.email, lead.phone, lead.dealer, lead.status, lead.vehicle]
        .join(" ")
        .toLocaleLowerCase("tr-TR")
        .includes(search);
    });
  }, [query, statusFilter]);

  const totalLeads = leadRows.length;
  const newLeadCount = leadRows.filter((lead) => lead.status === "YENİ LEAD").length;
  const salesCount = leadRows.filter((lead) => lead.status === "SATIŞ").length;
  const unassignedCount = leadRows.filter((lead) => lead.status === "ATANMADI").length;

  function exportCsv() {
    const headers = [t("leads.name"), t("leads.email"), t("leads.phone"), t("leads.dealer"), t("leads.status"), t("leads.vehicle")];
    const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const lines = [
      headers.join(";"),
      ...filteredRows.map((lead) =>
        [
          lead.name,
          lead.email,
          lead.phone,
          translateDealerLabel(lead.dealer, t),
          translateStatus(lead.status, t),
          lead.vehicle
        ].map(escape).join(";")
      )
    ];
    const blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leadler-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <section className="pt-8">
      <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-2xl sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("leads.title")}</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-gd-panel px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:shadow-lg" type="button" onClick={() => navigate("/leadler/import")}>
              <CloudIcon />
              {t("leads.import")}
            </button>
            <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-gd-panel px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800 hover:shadow-lg" type="button" onClick={exportCsv}>
              <ExportIcon />
              {t("leads.export")}
            </button>
            <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black bg-black px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg" type="button" onClick={() => navigate("/leadler/ekle")}>
              <PlusIcon />
              {t("leads.add")}
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-gd-line bg-gd-card p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gd-muted">{t("leads.totalLeads")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white"><IoPeople size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-white">{totalLeads}</strong>
          </article>
          <article className="rounded-xl border border-sky-900 bg-sky-950/35 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-sky-200">{t("leads.newLead")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300"><IoPersonAdd size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-sky-300">{newLeadCount}</strong>
          </article>
          <article className="rounded-xl border border-emerald-900 bg-emerald-950/35 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-emerald-200">{t("leads.sales")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300"><IoTrendingUp size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-emerald-300">{salesCount}</strong>
          </article>
          <article className="rounded-xl border border-red-900 bg-red-950/35 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-red-200">{t("leads.unassigned")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/15 text-red-300"><IoAlertCircle size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-red-300">{unassignedCount}</strong>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-black p-4 shadow-xl">
          <input
            className="min-h-[49.6px] w-full rounded-xl border border-zinc-700 bg-gd-field px-4 py-3 text-sm font-medium text-white shadow-sm outline-none transition-all duration-300 placeholder:text-gd-muted focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600"
            placeholder={t("leads.search")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {statusFilters.map((status) => (
              <button
                key={status}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                  statusFilter === status
                    ? "border-gd-blue bg-gd-blue/15 text-white"
                    : "border-zinc-700 bg-zinc-900 text-gd-muted hover:text-white"
                }`}
                type="button"
                aria-pressed={statusFilter === status}
                onClick={() => setStatusFilter(status)}
              >
                {translateStatus(status, t)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-black p-3 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-white">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  {[
                    t("leads.name"),
                    t("leads.email"),
                    t("leads.phone"),
                    t("leads.dealer"),
                    t("leads.status"),
                    t("leads.vehicle"),
                    ""
                  ].map((heading) => (
                    <th key={heading || "actions"} className="px-3 py-4">
                      <span className="flex items-center justify-between gap-3">
                        {heading}
                        {heading && <SortIcon />}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-xs text-white md:text-sm">
                {filteredRows.map((lead) => (
                  <tr key={lead.id} className="cursor-pointer transition hover:bg-gd-panel/70" onClick={() => navigate(`/leadler/${lead.id}`)}>
                    <td className="px-3 py-5">{lead.name}</td>
                    <td className="px-3 py-5">{lead.email}</td>
                    <td className="px-3 py-5">{lead.phone || <span className="text-gd-muted">-</span>}</td>
                    <td className="px-3 py-5 text-gd-muted">{translateDealerLabel(lead.dealer, t)}</td>
                    <td className="px-3 py-5">
                      <span className={`inline-flex min-w-32 justify-center rounded-full border px-4 py-2 text-xs font-bold ${statusStyles[lead.status]}`}>
                        {translateStatus(lead.status, t)}
                      </span>
                    </td>
                    <td className="px-3 py-5">
                      <span className={`inline-flex h-9 min-w-14 items-center justify-center rounded-full border px-4 text-sm font-bold ${
                        lead.vehicle === "1" ? "border-sky-200 bg-sky-100 text-gd-panel" : "border-zinc-600 bg-gd-panel text-white"
                      }`}>
                        {lead.vehicle}
                      </span>
                    </td>
                    <td className="px-3 py-5 text-right">
                      <button className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-black text-2xl leading-none text-white transition hover:border-zinc-600" type="button" onClick={(event) => event.stopPropagation()}>⋮</button>
                    </td>
                  </tr>
                ))}
                {filteredRows.length === 0 && (
                  <tr>
                    <td className="px-3 py-10 text-center text-sm font-medium text-gd-muted" colSpan={7}>
                      {t("leads.noResults")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 text-sm font-medium text-gd-muted lg:flex-row lg:items-center lg:justify-between">
          <p>{t("leads.showing")} <span className="font-bold text-white">{filteredRows.length}</span><br />{t("leads.totalRecords")}</p>
          <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-black p-2">
            {["1", "2", "3", "4", "5", "...", "8", "›"].map((page) => (
              <button
                key={page}
                className={`h-8 min-w-10 rounded-full px-3 text-[13px] font-bold uppercase tracking-wider transition ${
                  page === "1" ? "bg-gd-card text-white" : "bg-gd-panel text-gd-muted hover:text-white"
                }`}
                type="button"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
