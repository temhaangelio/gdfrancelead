import { CURRENT_DEALER, StarRating, statusStyles } from "../data.jsx";
import { getRecentDealerReviews } from "../mockData.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import { translateDealerDemo, translateLeadDate, translateOutcome, translateReviewComment, translateStatus } from "../i18n/helpers.js";

const statKeys = [
  ["84", "dealer.assignedLeads", ""],
  ["3", "dealer.awaitingContact", "text-sky-300"],
  ["1", "dealer.slaRisk", "text-gd-red"],
  ["%12", "dealer.conversion", ""],
  ["★ 4.8", "dealer.myScore", "text-gd-yellow"]
];

const urgentLeads = [
  { id: "gd-24095", name: "J. Roux", phone: "+33 6 51 20 84", model: "Model X2", assignedAt: "Bugün 14:12", slaLeft: "3s 12dk", risk: false },
  { id: "gd-24096", name: "M. Fournier", phone: "+33 7 22 65 09", model: "CFMOTO 450NK", assignedAt: "Bugün 12:40", slaLeft: "1s 40dk", risk: false },
  { id: "gd-24099", name: "K. Perrin", phone: "+33 6 88 14 37", model: "Model X2", assignedAt: "Bugün 09:05", slaLeft: "38dk", risk: true }
];

const outcomes = [
  { label: "Olumlu", value: 31, color: "bg-emerald-500" },
  { label: "Takip", value: 22, color: "bg-gd-yellow" },
  { label: "Test sürüşü", value: 14, color: "bg-gd-blue" },
  { label: "Satış", value: 10, color: "bg-zinc-100" },
  { label: "Olumsuz", value: 7, color: "bg-gd-red" }
];

const recentReviews = getRecentDealerReviews(CURRENT_DEALER);

const activeLeads = [
  { id: "gd-24087", name: "A. Dubois", status: "GÖRÜŞÜLÜYOR", nextStep: "Test sürüşü randevusu" },
  { id: "gd-24097", name: "L. Girard", status: "TEST SÜRÜŞÜ", nextStep: "Sürüş sonrası arama" },
  { id: "gd-24096", name: "M. Fournier", status: "TAKİP", nextStep: "Fiyat teklifi dönüşü" }
];

export default function DealerDashboardPage({ navigate }) {
  const { t } = useTranslation();
  const maxOutcome = Math.max(...outcomes.map((item) => item.value));

  return (
    <section className="pt-8">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-extrabold">{t("dealer.panel")}</h2>
          <p className="mt-1 text-sm font-medium text-gd-muted">{formatMessage(t("dealer.summaryMonth"), { dealer: CURRENT_DEALER })}</p>
        </div>
        <button
          className="min-h-11 rounded-xl border border-black bg-black px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95"
          type="button"
          onClick={() => navigate("/bayi/leadler")}
        >
          {t("dealer.goToLeads")}
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {statKeys.map(([value, labelKey, color]) => (
          <article key={labelKey} className="rounded-xl border border-gd-line bg-gd-card p-5 text-center shadow-xl">
            <strong className={`block text-2xl font-extrabold ${color}`}>{value}</strong>
            <span className="mt-2 block text-sm font-bold text-gd-muted">{t(labelKey)}</span>
          </article>
        ))}
      </div>

      <section className="mt-5 rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold">{t("dealer.awaitingContactTitle")}</h2>
            <p className="mt-1 text-sm font-medium text-gd-muted">{t("dealer.awaitingContactDesc")}</p>
          </div>
          <span className="rounded-full border border-gd-line bg-gd-panel px-3 py-1 text-xs font-extrabold text-gd-muted">
            {formatMessage(t("dealer.leadCount"), { count: urgentLeads.length })}
          </span>
        </div>
        <div className="mt-5 grid gap-3">
          {urgentLeads.map((lead) => (
            <div
              key={lead.id}
              className={`flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between ${
                lead.risk ? "border-red-900 bg-red-950/25" : "border-gd-line bg-gd-panel"
              }`}
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <strong className="text-base font-bold text-white">{lead.name}</strong>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                    lead.risk ? "border-red-900 bg-red-950/70 text-red-300" : "border-sky-900 bg-sky-950/70 text-sky-300"
                  }`}>
                    {lead.risk
                      ? formatMessage(t("dealer.slaRiskLeft"), {
                          time: translateDealerDemo("urgent", lead.id, lead.slaLeft, t, "slaLeft")
                        })
                      : formatMessage(t("dealer.timeLeft"), {
                          time: translateDealerDemo("urgent", lead.id, lead.slaLeft, t, "slaLeft")
                        })}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-gd-muted">
                  {lead.phone} · {lead.model} · {formatMessage(t("dealer.assignmentAt"), {
                    time: translateDealerDemo("urgent", lead.id, lead.assignedAt, t, "assignedAt")
                  })}
                </p>
              </div>
              <button
                className="shrink-0 rounded-xl border border-black bg-black px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800"
                type="button"
                onClick={() => navigate(`/bayi/leadler/${lead.id}`)}
              >
                {t("dealer.startContact")}
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <section className="rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
          <h2 className="text-lg font-extrabold">{t("dealer.myOutcomes")}</h2>
          <p className="mt-1 text-sm font-medium text-gd-muted">{t("dealer.myOutcomesDesc")}</p>
          <div className="mt-6 grid gap-3">
            {outcomes.map((item) => (
              <div key={item.label} className="grid grid-cols-[110px_1fr_auto] items-center gap-3">
                <span className="text-sm font-medium text-gd-muted">{translateOutcome(item.label, t)}</span>
                <div className="h-3 overflow-hidden rounded-full bg-gd-panel">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${(item.value / maxOutcome) * 100}%` }} />
                </div>
                <span className="text-sm font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-extrabold">{t("dealer.recentReviews")}</h2>
              <p className="mt-1 text-sm font-medium text-gd-muted">{t("dealer.recentReviewsDesc")}</p>
            </div>
            <button className="text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate("/bayi/anketler")}>
              {t("common.all")} →
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            {recentReviews.map((review) => (
              <article key={review.customer} className="rounded-xl border border-gd-line bg-gd-panel p-4">
                <div className="flex items-center justify-between gap-4">
                  <strong className="text-sm font-bold text-white">{review.customer}</strong>
                  <StarRating score={review.score} />
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-gd-muted">
                  {translateReviewComment(review.leadId, review.comment, t)}
                </p>
                <p className="mt-2 text-xs font-medium text-zinc-500">{translateLeadDate(review.leadId, "reviewDate", review.date, t)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-5 rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
        <h2 className="text-lg font-extrabold">{t("dealer.activeConversations")}</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-gd-panel text-sm font-extrabold uppercase tracking-wide text-gd-muted">
              <tr>
                <th className="px-4 py-4">{t("common.customer")}</th>
                <th className="px-4 py-4">{t("common.status")}</th>
                <th className="px-4 py-4">{t("dealer.nextStep")}</th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gd-line text-sm font-bold">
              {activeLeads.map((lead) => (
                <tr key={lead.id} className="cursor-pointer transition hover:bg-gd-panel/70" onClick={() => navigate(`/bayi/leadler/${lead.id}`)}>
                  <td className="px-4 py-4">{lead.name}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${statusStyles[lead.status]}`}>
                      {translateStatus(lead.status, t)}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-medium text-gd-muted">{translateDealerDemo("nextStep", lead.id, lead.nextStep, t)}</td>
                  <td className="px-4 py-4 text-right text-gd-muted">→</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
