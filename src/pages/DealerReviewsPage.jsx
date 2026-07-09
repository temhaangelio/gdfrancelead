import { useMemo, useState } from "react";
import { CURRENT_DEALER, StarRating } from "../data.jsx";
import { getDealerReviews } from "../mockData.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import { translateLeadDate, translateReviewComment } from "../i18n/helpers.js";

const myReviews = getDealerReviews(CURRENT_DEALER);

export default function DealerReviewsPage({ navigate }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const totalReviews = myReviews.length;
  const averageScore = (myReviews.reduce((sum, review) => sum + review.score, 0) / totalReviews).toFixed(1);
  const positiveCount = myReviews.filter((review) => review.score >= 4).length;
  const positiveRate = Math.round((positiveCount / totalReviews) * 100);

  const filteredReviews = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("tr-TR");
    if (!search) return myReviews;
    return myReviews.filter((review) =>
      [review.leadCode, review.customer, review.comment].join(" ").toLocaleLowerCase("tr-TR").includes(search)
    );
  }, [query]);

  return (
    <section className="pt-8">
      <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">{t("dealer.myReviews")}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">{formatMessage(t("dealer.myReviewsSubtitle"), { dealer: CURRENT_DEALER })}</p>
          </div>
          <span className="w-fit rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm font-medium text-zinc-100">
            {formatMessage(t("common.totalRecords"), { count: totalReviews })}
          </span>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-gd-line bg-gd-card p-5 shadow-xl">
            <p className="text-sm font-medium text-gd-muted">{t("dealer.myAvgScore")}</p>
            <strong className="mt-2 block text-2xl font-extrabold text-gd-yellow">★ {averageScore}</strong>
          </article>
          <article className="rounded-xl border border-emerald-900 bg-emerald-950/35 p-5 shadow-xl">
            <p className="text-sm font-medium text-emerald-200">{t("dealer.positiveRate")}</p>
            <strong className="mt-2 block text-2xl font-extrabold text-emerald-300">%{positiveRate}</strong>
          </article>
          <article className="rounded-xl border border-gd-line bg-gd-card p-5 shadow-xl">
            <p className="text-sm font-medium text-gd-muted">{t("dealer.regionAvg")}</p>
            <strong className="mt-2 block text-2xl font-extrabold text-white">★ 4.2</strong>
          </article>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-black p-3 shadow-xl">
          <div className="mb-3 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3">
            <input
              className="w-full bg-transparent text-sm font-medium text-zinc-100 outline-none placeholder:text-zinc-400"
              placeholder={t("dealer.searchReviews")}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-gd-muted">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  <th className="px-3 py-4">{t("reviews.date")}</th>
                  <th className="px-3 py-4">{t("reviews.leadCustomer")}</th>
                  <th className="px-3 py-4">{t("reviews.score")}</th>
                  <th className="px-3 py-4">{t("reviews.comment")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm">
                {filteredReviews.map((review) => (
                  <tr
                    key={review.leadId}
                    className="cursor-pointer transition hover:bg-zinc-900/80"
                    onClick={() => navigate(`/bayi/leadler/${review.leadId}`)}
                  >
                    <td className="px-3 py-4 font-medium text-zinc-100">{translateLeadDate(review.leadId, "reviewDate", review.date, t)}</td>
                    <td className="px-3 py-4">
                      <span className="block font-bold text-white">{review.leadCode}</span>
                      <span className="mt-1 block font-medium text-gd-muted">{review.customer}</span>
                    </td>
                    <td className="px-3 py-4">
                      <StarRating score={review.score} className="text-base" />
                      <span className="ml-2 text-xs font-medium text-gd-muted">{review.score}/5</span>
                    </td>
                    <td className="px-3 py-4 font-medium leading-6 text-gd-muted">
                      {translateReviewComment(review.leadId, review.comment, t)}
                    </td>
                  </tr>
                ))}
                {filteredReviews.length === 0 && (
                  <tr>
                    <td className="px-3 py-10 text-center text-sm font-medium text-gd-muted" colSpan={4}>
                      {t("dealer.noReviews")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
