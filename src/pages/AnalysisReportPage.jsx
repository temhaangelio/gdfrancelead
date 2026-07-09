import { periodData, statValue } from "../analyticsData.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import {
  translateChannel,
  translateDealerRank,
  translateOutcome,
  translatePeriod,
  translateStat
} from "../i18n/helpers.js";

function ResultDonut({ items, t, locale }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="report-chart mt-4 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
      <div className="relative h-44 w-44 shrink-0">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 180 180" role="img" aria-label={t("analysisReport.donutAria")}>
          <circle cx="90" cy="90" r={radius} fill="none" stroke="#27272a" strokeWidth="22" />
          {items.map((item) => {
            const dash = (item.value / total) * circumference;
            const circle = (
              <circle
                key={item.label}
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth="22"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
              />
            );
            offset += dash;
            return circle;
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-white">{total.toLocaleString(locale)}</span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-gd-muted">{t("outcome.total")}</span>
        </div>
      </div>

      <div className="grid w-full gap-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2">
              <span className="report-dot h-2.5 w-2.5 shrink-0" style={{ backgroundColor: item.color, borderRadius: "9999px" }} />
              <span className="font-medium text-white">{translateOutcome(item.label, t)}</span>
            </span>
            <span className="text-xs font-medium text-gd-muted">{item.value.toLocaleString(locale)} · %{item.percent}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChannelBars({ items, locale, t }) {
  const max = Math.max(...items.map((item) => item.value));

  return (
    <div className="report-chart mt-4 flex h-44 items-end justify-between gap-3">
      {items.map((channel) => (
        <div key={channel.label} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2 text-center">
          <div className="text-xs font-medium leading-4 text-gd-muted">
            <span className="block text-sm font-bold text-white">{channel.value.toLocaleString(locale)}</span>
            %{channel.percent}
          </div>
          <div className="report-track flex h-[120px] items-end rounded-xl bg-gd-panel p-1.5">
            <div className="report-bar w-full rounded-lg transition-all duration-300" style={{ height: `${Math.max(12, Math.round((channel.value / max) * 100))}%`, backgroundColor: "#93c5fd" }} />
          </div>
          <span className="truncate text-xs font-medium text-gd-muted">{translateChannel(channel.label, t)}</span>
        </div>
      ))}
    </div>
  );
}

const rankNotes = {
  emerald: "dealerRank.best",
  sky: "dealerRank.strong",
  red: "analysisReport.improvementNeeded"
};

export default function AnalysisReportPage({ period = "Tümü" }) {
  const { t, locale } = useTranslation();
  const data = periodData[period] || periodData["Tümü"];
  const { stats, totalLeads, channels, outcomes, dealerRows, assignment } = data;

  const bestDealer = dealerRows.reduce((best, dealer) => (dealer.rating > best.rating ? dealer : best), dealerRows[0]);
  const worstDealer = dealerRows.reduce((worst, dealer) => (dealer.rating < worst.rating ? dealer : worst), dealerRows[0]);

  const totalLeadLabel = statValue(stats, "Toplam lead");
  const conversion = statValue(stats, "Lead → satış");
  const firstContact = statValue(stats, "Ort. ilk temas");
  const avgScore = statValue(stats, "Ort. puan").replace("★", "").trim();
  const unmatched = statValue(stats, "Atanmamış");
  const slaRisk = statValue(stats, "SLA riski");
  const salesCount = outcomes.find((item) => item.label === "Satış")?.value ?? 0;
  const assignedRate = totalLeads ? Math.round((assignment.assigned / totalLeads) * 100) : 0;
  const webFormShare = channels
    .filter((channel) => channel.label === "Web" || channel.label === "Form")
    .reduce((sum, channel) => sum + channel.percent, 0);
  const reportDate = new Date().toLocaleDateString(locale, { day: "2-digit", month: "long", year: "numeric" });
  const periodLabel = translatePeriod(period, t);

  const assignmentCards = [
    { labelKey: "dashboard.assigned", value: assignment.assigned, noteKey: "analysisReport.assignedNote", tone: "text-white" },
    { labelKey: "dashboard.pending", value: assignment.pending, noteKey: "analysisReport.pendingNote", tone: "text-gd-yellow" },
    { labelKey: "dashboard.unmatched", value: assignment.unmatched, noteKey: "analysisReport.unmatchedNote", tone: "text-gd-red" }
  ];

  const summaryText = formatMessage(t("dashboard.summaryText"), {
    period: periodLabel,
    assignedRate,
    conversion,
    salesCount,
    firstContact,
    avgScore,
    unmatched,
    slaRisk
  });

  return (
    <section className="pt-8">
      <div className="print-detail rounded-2xl border border-zinc-800 bg-gd-panel p-5 shadow-2xl sm:p-7">
        <div className="print-only items-center justify-between border-b border-zinc-300 pb-3">
          <img className="print-logo" src="/images/logo.png" alt="GD France" />
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">{t("common.systemTitle")}</p>
            <strong className="mt-1 block text-sm font-bold text-zinc-900">{t("report.title")}</strong>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("report.title")}</h2>
            <p className="mt-2 text-sm font-medium text-gd-muted">
              {formatMessage(t("analysisReport.scope"), { period: periodLabel, date: reportDate })}
            </p>
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("analysisReport.executiveSummary")}</h3>
          <p className="mt-4 text-sm font-medium leading-7 text-zinc-100">{summaryText}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-900 bg-emerald-950/30 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">{t("dashboard.strength")}</p>
              <p className="mt-1 text-xs font-medium leading-5 text-zinc-100">
                {formatMessage(t("dashboard.strengthText"), { assignedRate, dealer: bestDealer.name, rating: bestDealer.rating })}
              </p>
            </div>
            <div className="rounded-xl border border-sky-900 bg-sky-950/30 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-sky-300">{t("dashboard.opportunity")}</p>
              <p className="mt-1 text-xs font-medium leading-5 text-zinc-100">
                {formatMessage(t("dashboard.opportunityText"), { share: webFormShare })}
              </p>
            </div>
            <div className="rounded-xl border border-red-900 bg-red-950/30 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-red-300">{t("dashboard.risk")}</p>
              <p className="mt-1 text-xs font-medium leading-5 text-zinc-100">
                {formatMessage(t("dashboard.riskText"), { dealer: worstDealer.name, firstContact: worstDealer.firstContact, conversion: worstDealer.conversion })}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map(([value, label, color]) => (
            <article key={label} className="rounded-xl border border-zinc-800 bg-black p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gd-muted">{translateStat(label, t)}</p>
              <strong className={`mt-2 block text-2xl font-bold ${color || "text-white"}`}>{value}</strong>
            </article>
          ))}
        </section>

        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("analysisReport.channelPerformance")}</h3>
            <ChannelBars items={channels} locale={locale} t={t} />
            <table className="mt-5 w-full text-left text-sm">
              <thead className="border-b border-zinc-800 text-xs uppercase tracking-wider text-gd-muted">
                <tr>
                  <th className="py-3">{t("common.channel")}</th>
                  <th className="py-3">{t("common.leads")}</th>
                  <th className="py-3">{t("common.share")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {channels.map((channel) => (
                  <tr key={channel.label}>
                    <td className="py-3 font-medium text-white">{translateChannel(channel.label, t)}</td>
                    <td className="py-3 text-zinc-100">{channel.value.toLocaleString(locale)}</td>
                    <td className="py-3 text-gd-muted">%{channel.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white">{t("analysisReport.outcomeDistribution")}</h3>
            <ResultDonut items={outcomes} t={t} locale={locale} />
            <table className="mt-5 w-full text-left text-sm">
              <thead className="border-b border-zinc-800 text-xs uppercase tracking-wider text-gd-muted">
                <tr>
                  <th className="py-3">{t("common.result")}</th>
                  <th className="py-3">{t("common.count")}</th>
                  <th className="py-3">{t("common.share")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {outcomes.map((result) => (
                  <tr key={result.label}>
                    <td className="py-3 font-medium text-white">{translateOutcome(result.label, t)}</td>
                    <td className="py-3 text-zinc-100">{result.value.toLocaleString(locale)}</td>
                    <td className="py-3 text-gd-muted">%{result.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <section className="mt-5 rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("dashboard.assignmentStatus")}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {assignmentCards.map((item) => (
              <div key={item.labelKey} className="rounded-xl border border-zinc-800 bg-gd-panel p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gd-muted">{t(item.labelKey)}</p>
                <strong className={`mt-2 block text-2xl font-bold ${item.tone}`}>{item.value.toLocaleString(locale)}</strong>
                <span className="mt-1 block text-xs font-medium text-gd-muted">{t(item.noteKey)}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("dashboard.dealerPerformance")}</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-zinc-800 text-xs uppercase tracking-wider text-gd-muted">
                <tr>
                  <th className="py-3">{t("dashboard.dealer")}</th>
                  <th className="py-3">{t("dashboard.leads")}</th>
                  <th className="py-3">{t("dashboard.firstContactCol")}</th>
                  <th className="py-3">{t("dashboard.conversionCol")}</th>
                  <th className="py-3">{t("dashboard.score")}</th>
                  <th className="py-3">{t("common.noteCol")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {dealerRows.map((dealer) => (
                  <tr key={dealer.name}>
                    <td className="py-3 font-medium text-white">{dealer.name}</td>
                    <td className="py-3 text-zinc-100">{dealer.leads.toLocaleString(locale)}</td>
                    <td className="py-3 text-zinc-100">{dealer.firstContact}</td>
                    <td className="py-3 text-zinc-100">%{dealer.conversion}</td>
                    <td className="py-3 text-gd-yellow">★ {dealer.rating}</td>
                    <td className="py-3 text-gd-muted">
                      {rankNotes[dealer.tone] ? t(rankNotes[dealer.tone]) : translateDealerRank(dealer.rank, t)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-zinc-800 bg-black p-5 shadow-xl">
          <h3 className="text-lg font-bold text-white">{t("analysisReport.recommendedActions")}</h3>
          <ul className="mt-4 grid gap-2 text-sm font-medium leading-6 text-zinc-100">
            <li>{formatMessage(t("analysisReport.action1"), { count: unmatched })}</li>
            <li>{formatMessage(t("analysisReport.action2"), { dealer: worstDealer.name })}</li>
            <li>{formatMessage(t("analysisReport.action3"), { count: slaRisk })}</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
