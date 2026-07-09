import { useMemo, useState } from "react";
import { IoDocumentText, IoStar, IoThumbsUp, IoWarning } from "react-icons/io5";
import { StarRating } from "../data.jsx";
import { reviews } from "../mockData.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { translateLeadDate, translateReviewComment, translateReviewStatus } from "../i18n/helpers.js";

export default function ReviewsPage({ navigate }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const totalReviews = reviews.length;
  const averageScore = (reviews.reduce((sum, review) => sum + review.score, 0) / totalReviews).toFixed(1);
  const lowScoreCount = reviews.filter((review) => review.score <= 2).length;
  const positiveCount = reviews.filter((review) => review.score >= 4).length;
  const positiveRate = Math.round((positiveCount / totalReviews) * 100);
  const filteredReviews = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("tr-TR");
    if (!search) return reviews;
    return reviews.filter((review) =>
      [review.leadCode, review.customer, review.dealer, review.status, review.comment]
        .join(" ")
        .toLocaleLowerCase("tr-TR")
        .includes(search)
    );
  }, [query]);

  return (
    <section className="pt-8">
      <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">{t("reviews.title")}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">{t("reviews.subtitle")}</p>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-gd-line bg-gd-card p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gd-muted">{t("reviews.totalReviews")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white"><IoDocumentText size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-white">{totalReviews}</strong>
          </article>
          <article className="rounded-xl border border-gd-line bg-gd-card p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gd-muted">{t("reviews.avgScore")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/15 text-gd-yellow"><IoStar size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-gd-yellow">★ {averageScore}</strong>
          </article>
          <article className="rounded-xl border border-emerald-900 bg-emerald-950/35 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-emerald-200">{t("reviews.positiveRate")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300"><IoThumbsUp size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-emerald-300">%{positiveRate}</strong>
          </article>
          <article className="rounded-xl border border-red-900 bg-red-950/35 p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-red-200">{t("reviews.lowScore")}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/15 text-red-300"><IoWarning size={18} /></span>
            </div>
            <strong className="mt-2 block text-2xl font-extrabold text-red-300">{lowScoreCount}</strong>
          </article>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-black p-3 shadow-xl">
          <div className="mb-3 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3">
            <input
              className="w-full bg-transparent text-sm font-medium text-zinc-100 outline-none placeholder:text-zinc-400"
              placeholder={t("reviews.search")}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left">
              <thead className="text-xs font-bold uppercase tracking-wider text-gd-muted">
                <tr className="border-b border-zinc-800 bg-zinc-950/45">
                  <th className="px-3 py-4">{t("reviews.date")}</th>
                  <th className="px-3 py-4">{t("reviews.leadCustomer")}</th>
                  <th className="px-3 py-4">{t("reviews.dealer")}</th>
                  <th className="px-3 py-4">{t("reviews.score")}</th>
                  <th className="px-3 py-4">{t("reviews.status")}</th>
                  <th className="px-3 py-4">{t("reviews.comment")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm">
                {filteredReviews.map((review) => (
                  <tr
                    key={review.leadId}
                    className="cursor-pointer transition hover:bg-zinc-900/80"
                    onClick={() => navigate(`/leadler/${review.leadId}`)}
                  >
                    <td className="px-3 py-4 font-medium text-zinc-100">{translateLeadDate(review.leadId, "reviewDate", review.date, t)}</td>
                    <td className="px-3 py-4">
                      <span className="block font-bold text-white">{review.leadCode}</span>
                      <span className="mt-1 block font-medium text-gd-muted">{review.customer}</span>
                    </td>
                    <td className="px-3 py-4 font-medium text-white">{review.dealer}</td>
                    <td className="px-3 py-4">
                      <StarRating score={review.score} className="text-base" />
                      <span className="ml-2 text-xs font-medium text-gd-muted">{review.score}/5</span>
                    </td>
                    <td className="px-3 py-4">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                        review.score <= 2 ? "border-red-900 bg-red-950/70 text-red-300" :
                        review.score >= 4 ? "border-emerald-800 bg-emerald-950/70 text-emerald-300" :
                        "border-zinc-700 bg-zinc-900 text-gd-muted"
                      }`}>
                        {translateReviewStatus(review.status, t)}
                      </span>
                    </td>
                    <td className="px-3 py-4 font-medium leading-6 text-gd-muted">
                      {translateReviewComment(review.leadId, review.comment, t)}
                    </td>
                  </tr>
                ))}
                {filteredReviews.length === 0 && (
                  <tr>
                    <td className="px-3 py-10 text-center text-sm font-medium text-gd-muted" colSpan={6}>
                      {t("reviews.noResults")}
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
