import { leadDetails } from "../mockData.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import {
  translateDealerLabel,
  translateHistory,
  translateLeadDate,
  translateLeadNote,
  translateReviewComment,
  translateReviewTitle,
  translateSource,
  translateStatus
} from "../i18n/helpers.js";

function InfoCard({ label, value, tone = "default" }) {
  const color = tone === "yellow" ? "text-gd-yellow" : tone === "green" ? "text-emerald-300" : "text-white";

  return (
    <div className="rounded-xl border border-zinc-800 bg-black p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-gd-muted">{label}</p>
      <p className={`mt-2 text-sm font-medium ${color}`}>{value}</p>
    </div>
  );
}

function TimelineDot({ tone }) {
  const color = tone === "warning" ? "border-gd-yellow bg-gd-yellow/20" : tone === "success" ? "border-emerald-500 bg-emerald-500/20" : "border-zinc-300 bg-black";

  return <span className={`relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full border-2 ${color}`} />;
}

export default function LeadDetailPage({ navigate, fromPath }) {
  const { t } = useTranslation();
  const leadId = window.location.pathname.split("/").pop();
  const lead = leadDetails[leadId];
  const backTarget = fromPath === "/anketler"
    ? { path: "/anketler", label: t("common.backToReviews") }
    : { path: "/leadler", label: t("common.backToLeads") };

  if (!lead) {
    return (
      <section className="pt-8">
        <div className="rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-2xl sm:p-7">
          <button className="mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate("/leadler")}>
            {t("common.backToLeads")}
          </button>
          <p className="text-sm font-medium text-gd-muted">{t("leadDetail.notFound")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8">
      <div className="print-detail rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-2xl sm:p-7">
        <div className="print-only items-center justify-between border-b border-zinc-300 pb-3">
          <img className="print-logo" src="/images/logo.png" alt="GD France" />
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">{t("common.systemTitle")}</p>
            <strong className="mt-1 block text-sm font-bold text-zinc-900">{t("leadDetail.printTitle")}</strong>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <button className="no-print mb-4 text-sm font-medium text-gd-muted transition hover:text-white" type="button" onClick={() => navigate(backTarget.path)}>
              {backTarget.label}
            </button>
            <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{lead.name}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">{lead.id} · {translateLeadDate(leadId, "createdAt", lead.createdAt, t)}</p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <span className="w-fit rounded-full border border-emerald-800 bg-emerald-950/80 px-4 py-2 text-xs font-bold text-emerald-400">
              {translateStatus(lead.status, t)}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_0.8fr]">
          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("leadDetail.leadInfo")}</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <InfoCard label={t("common.phone")} value={lead.phone} />
              <InfoCard label={t("common.email")} value={lead.email} />
              <InfoCard label={t("common.postalCode")} value={lead.postalCode} />
              <InfoCard label={t("common.city")} value={lead.city} />
              <InfoCard label={t("common.source")} value={translateSource(lead.source, t)} />
              <InfoCard label={t("common.productModel")} value={lead.model} />
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("leadDetail.assignment")}</h3>
            <div className="mt-5 grid gap-4">
              <InfoCard label={t("leadDetail.assignedDealer")} value={translateDealerLabel(lead.dealer, t)} tone="green" />
              <InfoCard label={t("leadDetail.distance")} value={lead.dealerDistance} />
              <InfoCard label={t("leadDetail.firstContact")} value={lead.firstContact} tone="yellow" />
            </div>
            <div className="mt-5 rounded-xl border-2 border-dashed border-gd-yellow bg-gd-yellow/10 px-4 py-3 text-xs font-medium text-gd-yellow md:text-sm">
              {t("leadDetail.assignmentNote")}
            </div>
          </section>
        </div>

        <section className="mt-5 rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("leadDetail.process")}</h3>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <InfoCard label={t("leadDetail.lastActivity")} value={t("leadDetail.lastActivityValue")} />
            <InfoCard label={t("common.result")} value={translateStatus(lead.status, t)} tone="green" />
            <InfoCard label={t("leadDetail.nextStep")} value={t("leadDetail.nextStepValue")} tone="yellow" />
          </div>
          <div className="mt-5 rounded-xl border border-zinc-800 bg-gd-panel p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gd-muted">{t("common.note")}</p>
            <p className="mt-2 text-sm font-medium text-zinc-100">{translateLeadNote(leadId, lead.notes, t)}</p>
          </div>
        </section>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("leadDetail.history")}</h3>
            <div className="mt-5">
              {lead.history.map((item, index) => (
                <div key={`${item.title}-${index}`} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < lead.history.length - 1 && <span className="absolute left-[9px] top-7 h-[calc(100%-1.75rem)] w-px bg-zinc-700" />}
                  <TimelineDot tone={item.tone} />
                  <div className="min-w-0">
                    <p className="text-base font-bold text-white">{translateHistory(leadId, index, "title", item.title, t)}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-100">
                      {translateHistory(leadId, index, "detail", item.detail, t)}
                      {item.owner && <span className="text-gd-muted"> — {item.owner}</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {lead.review ? (
            <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
              <h3 className="text-lg font-bold text-white">{translateReviewTitle(leadId, lead.review.title, t)}</h3>
              <div className="mt-5 rounded-2xl border border-zinc-800 bg-gd-panel p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-gd-muted">{t("leadDetail.ratingGiven")}</span>
                  <span className="text-xl font-bold text-gd-yellow">{"★".repeat(lead.review.rating)}<span className="text-gd-muted">{"★".repeat(5 - lead.review.rating)}</span></span>
                </div>
                <p className="mt-4 text-sm font-medium leading-6 text-zinc-100">
                  {translateReviewComment(leadId, lead.review.message, t)}
                </p>
              </div>
            </section>
          ) : (
            <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
              <h3 className="text-lg font-bold text-white">{t("leadDetail.customerSurvey")}</h3>
              <div className="mt-5 rounded-2xl border border-dashed border-zinc-700 bg-gd-panel p-5">
                <p className="text-sm font-medium text-gd-muted">{t("leadDetail.noSurvey")}</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
