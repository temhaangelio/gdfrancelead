import { useMemo, useState } from "react";
import { CURRENT_DEALER, statusStyles } from "../data.jsx";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import { translateDealerDemo, translateStatus } from "../i18n/helpers.js";

const myLeads = [
  { id: "gd-24099", name: "K. Perrin", phone: "+33 6 88 14 37", model: "Model X2", status: "YENİ LEAD", assignedAt: "05 Tem 09:05", lastActivity: "Henüz temas yok" },
  { id: "gd-24095", name: "J. Roux", phone: "+33 6 51 20 84", model: "Model X2", status: "YENİ LEAD", assignedAt: "05 Tem 14:12", lastActivity: "Henüz temas yok" },
  { id: "gd-24087", name: "A. Dubois", phone: "+33 6 12 34 56", model: "Model X2", status: "GÖRÜŞÜLÜYOR", assignedAt: "05 Tem 10:24", lastActivity: "Telefon görüşmesi · teklif gönderildi" },
  { id: "gd-24096", name: "M. Fournier", phone: "+33 7 22 65 09", model: "CFMOTO 450NK", status: "TAKİP", assignedAt: "05 Tem 12:40", lastActivity: "Fiyat teklifi bekleniyor" },
  { id: "gd-24097", name: "L. Girard", phone: "+33 7 60 42 118", model: "Model X2", status: "TEST SÜRÜŞÜ", assignedAt: "04 Tem 16:20", lastActivity: "Test sürüşü 08 Tem planlandı" },
  { id: "gd-24093", name: "P. Laurent", phone: "+33 6 43 35 30", model: "CFMOTO 450NK", status: "OLUMLU", assignedAt: "03 Tem 11:02", lastActivity: "Satın alma kararı bekleniyor" },
  { id: "gd-24098", name: "T. Blanc", phone: "+33 6 09 77 51", model: "Model X2", status: "SATIŞ", assignedAt: "01 Tem 09:48", lastActivity: "Teslimat hazırlığı" }
];

const filterOptions = ["Tümü", "YENİ LEAD", "GÖRÜŞÜLÜYOR", "TAKİP", "TEST SÜRÜŞÜ", "OLUMLU", "SATIŞ"];

export default function DealerLeadsPage({ navigate }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tümü");

  const filteredLeads = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("tr-TR");
    return myLeads.filter((lead) => {
      if (statusFilter !== "Tümü" && lead.status !== statusFilter) return false;
      if (!search) return true;
      return [lead.name, lead.phone, lead.model, lead.status, lead.lastActivity]
        .join(" ")
        .toLocaleLowerCase("tr-TR")
        .includes(search);
    });
  }, [query, statusFilter]);

  return (
    <section className="pt-8">
      <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-2xl sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("dealer.myLeads")}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">{formatMessage(t("dealer.myLeadsSubtitle"), { dealer: CURRENT_DEALER })}</p>
          </div>
          <span className="w-fit rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm font-medium text-zinc-100">
            {formatMessage(t("common.showingCount"), { shown: filteredLeads.length, total: myLeads.length })}
          </span>
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-black p-4 shadow-xl">
          <input
            className="min-h-[49.6px] w-full rounded-xl border border-zinc-700 bg-gd-field px-4 py-3 text-sm font-medium text-white shadow-sm outline-none transition-all duration-300 placeholder:text-gd-muted focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600"
            placeholder={t("dealer.searchMyLeads")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {filterOptions.map((option) => (
              <button
                key={option}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                  statusFilter === option
                    ? "border-gd-blue bg-gd-blue/15 text-white"
                    : "border-zinc-700 bg-zinc-900 text-gd-muted hover:text-white"
                }`}
                type="button"
                aria-pressed={statusFilter === option}
                onClick={() => setStatusFilter(option)}
              >
                {translateStatus(option, t)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-black p-3 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-white">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  <th className="px-3 py-4">{t("common.customer")}</th>
                  <th className="px-3 py-4">{t("common.phone")}</th>
                  <th className="px-3 py-4">{t("common.productModel")}</th>
                  <th className="px-3 py-4">{t("common.status")}</th>
                  <th className="px-3 py-4">{t("common.assignment")}</th>
                  <th className="px-3 py-4">{t("dealer.lastActivity")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-xs text-white md:text-sm">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="cursor-pointer transition hover:bg-gd-panel/70" onClick={() => navigate(`/bayi/leadler/${lead.id}`)}>
                    <td className="px-3 py-5 font-bold">{lead.name}</td>
                    <td className="px-3 py-5">{lead.phone}</td>
                    <td className="px-3 py-5 text-gd-muted">{lead.model}</td>
                    <td className="px-3 py-5">
                      <span className={`inline-flex min-w-32 justify-center rounded-full border px-4 py-2 text-xs font-bold ${statusStyles[lead.status]}`}>
                        {translateStatus(lead.status, t)}
                      </span>
                    </td>
                    <td className="px-3 py-5 text-gd-muted">{translateDealerDemo("assignedAt", lead.id, lead.assignedAt, t)}</td>
                    <td className="px-3 py-5 text-gd-muted">{translateDealerDemo("lastActivity", lead.id, lead.lastActivity, t)}</td>
                  </tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td className="px-3 py-10 text-center text-sm font-medium text-gd-muted" colSpan={6}>
                      {t("dealer.noLeads")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border-2 border-dashed border-gd-yellow bg-gd-yellow/10 px-4 py-3 text-xs font-medium text-gd-yellow md:text-sm">
          {t("dealer.slaBanner")}
        </div>
      </div>
    </section>
  );
}
