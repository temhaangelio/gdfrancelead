import { useState } from "react";
import { IoPeople, IoAlertCircle, IoTrendingUp, IoTime, IoStar, IoWarning } from "react-icons/io5";
import { periods, periodData, statValue } from "../analyticsData.js";
import FranceDealerMap from "../FranceDealerMap.jsx";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { formatMessage } from "../i18n/translations.js";
import {
  STAT_DESC_MAP,
  translateChannel,
  translateDealerRank,
  translateOutcome,
  translatePeriod,
  translateStat,
  translateStatDesc
} from "../i18n/helpers.js";

const statIcons = {
  "Toplam lead": IoPeople,
  "Atanmamış": IoAlertCircle,
  "Lead → satış": IoTrendingUp,
  "Ort. ilk temas": IoTime,
  "Ort. puan": IoStar,
  "SLA riski": IoWarning
};

function ClockIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-gd-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-gd-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ResultsTabIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 1 1-8.1 5.1" />
      <path d="M12 3v9h9" />
    </svg>
  );
}

function ChannelsTabIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20V8" />
    </svg>
  );
}

function BestDealerIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M5 6H3v2a4 4 0 0 0 4 4" />
      <path d="M19 6h2v2a4 4 0 0 1-4 4" />
    </svg>
  );
}

function FastDealerIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

function RiskDealerIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function AssignedIcon() {
  return (
    <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
      <path d="M16 4h4v4" />
    </svg>
  );
}

function PendingIcon() {
  return (
    <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function UnmatchedIcon() {
  return (
    <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
      <path d="M5 5v14" />
    </svg>
  );
}

function OutcomeDonut({ outcomes, selectedOutcome, onSelect, t, locale }) {
  const total = outcomes.reduce((sum, item) => sum + item.value, 0);
  const radius = 76;
  const strokeWidth = 18;
  const gap = 4;
  const circumference = 2 * Math.PI * radius;
  const totalGap = gap * outcomes.length;
  const available = circumference - totalGap;

  const selected = selectedOutcome || { label: "Toplam", value: total, color: "#e4e4e7" };
  const selectedPercent = Math.round((selected.value / total) * 100);
  const selectedColor = selectedOutcome?.color || "#a1a1aa";
  const selectedLabel = translateOutcome(selected.label, t);

  let offset = 0;

  return (
    <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8 lg:gap-10">
      <div className="relative h-56 w-56 shrink-0 md:h-64 md:w-64 lg:h-72 lg:w-72">
        <div
          className="pointer-events-none absolute inset-4 rounded-full blur-3xl transition-all duration-500"
          style={{ backgroundColor: `${selectedColor}22` }}
          aria-hidden="true"
        />

        <svg className="donut-reveal relative h-full w-full -rotate-90" viewBox="0 0 200 200" role="img" aria-label={t("dashboard.outcomesDonutAria")}>
          <defs>
            <filter id="outcome-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {outcomes.map((item, index) => (
              <linearGradient key={item.label} id={`outcome-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={item.color} stopOpacity="1" />
                <stop offset="100%" stopColor={item.color} stopOpacity="0.72" />
              </linearGradient>
            ))}
          </defs>

          <circle cx="100" cy="100" r={radius + 16} fill="none" stroke="#27272a" strokeWidth="1" opacity="0.55" />
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#141416" strokeWidth={strokeWidth + 10} opacity="0.9" />

          {outcomes.map((item, index) => {
            const dash = (item.value / total) * available;
            const isSelected = selectedOutcome?.label === item.label;
            const isDimmed = selectedOutcome && !isSelected;
            const segment = (
              <circle
                key={item.label}
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={`url(#outcome-grad-${index})`}
                strokeWidth={isSelected ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                filter={isSelected ? "url(#outcome-glow)" : undefined}
                className="donut-seg cursor-pointer transition-all duration-300"
                style={{ opacity: isDimmed ? 0.38 : 1, animationDelay: `${0.12 + index * 0.09}s` }}
                onClick={() => onSelect(isSelected ? null : item)}
              />
            );
            offset += dash + gap;
            return segment;
          })}
        </svg>

        <button
          type="button"
          className="donut-hub absolute inset-[3.25rem] flex flex-col items-center justify-center rounded-full border border-zinc-700/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-zinc-600 md:inset-[3.75rem] lg:inset-[4.25rem]"
          onClick={() => onSelect(null)}
        >
          <span
            className="text-2xl font-extrabold tabular-nums tracking-tight lg:text-3xl"
            style={{ color: selected.color }}
          >
            {selected.value.toLocaleString(locale)}
          </span>
          <span className="mt-0.5 max-w-[7.5rem] truncate text-[10px] font-extrabold uppercase tracking-[0.12em] text-gd-muted lg:max-w-[8.5rem] lg:text-[11px]">
            {selectedLabel}
          </span>
          <span className="mt-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-0.5 text-[10px] font-bold tabular-nums text-zinc-300">
            %{selectedPercent}
          </span>
        </button>
      </div>

      <div className="grid w-full min-w-0 flex-1 gap-2 sm:max-w-[15rem] md:max-w-[17rem] lg:max-w-xs">
        {outcomes.map((item, index) => {
          const isSelected = selectedOutcome?.label === item.label;
          const percent = Math.round((item.value / total) * 100);

          return (
            <button
              key={item.label}
              className={`group overflow-hidden rounded-lg border text-left transition-all duration-300 ${
                isSelected
                  ? "border-zinc-600 bg-gd-panel shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                  : "border-gd-line bg-gd-card hover:border-zinc-600 hover:bg-gd-panel"
              }`}
              type="button"
              onClick={() => onSelect(isSelected ? null : item)}
            >
              <div className="flex items-center justify-between gap-2 px-2.5 py-2">
                <span className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]"
                    style={{ color: item.color, backgroundColor: item.color }}
                  />
                  <span className={`truncate text-xs font-bold ${isSelected ? "text-white" : "text-zinc-200"}`}>
                    {translateOutcome(item.label, t)}
                  </span>
                </span>
                <span className="shrink-0 text-right text-[11px] font-bold tabular-nums text-gd-muted">
                  {item.value.toLocaleString(locale)} · %{percent}
                </span>
              </div>
              <div className="h-1 bg-zinc-900/80">
                <div
                  className="legend-bar-fill h-full rounded-r-full transition-all duration-500"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: item.color,
                    opacity: isSelected ? 1 : 0.55,
                    animationDelay: `${0.2 + index * 0.09}s`
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardPage({ navigate, period, onPeriodChange }) {
  const { t, locale } = useTranslation();
  const activePeriod = periodData[period] ? period : "Tümü";
  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState("outcomes");
  const data = periodData[activePeriod];
  const { stats, totalLeads, channels, outcomes, dealerRows, assignment } = data;
  const bestDealer = dealerRows.reduce((best, dealer) => (dealer.rating > best.rating ? dealer : best), dealerRows[0]);
  const worstDealer = dealerRows.reduce((worst, dealer) => (dealer.rating < worst.rating ? dealer : worst), dealerRows[0]);
  const fastestDealer = dealerRows.reduce((fastest, dealer) => (dealer.firstContactHours < fastest.firstContactHours ? dealer : fastest), dealerRows[0]);

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

  function handlePeriodChange(nextPeriod) {
    onPeriodChange?.(nextPeriod);
    setSelectedOutcome(null);
  }

  const analysisTabs = [
    { id: "outcomes", labelKey: "dashboard.results", descriptionKey: "dashboard.resultsDesc", icon: ResultsTabIcon },
    { id: "channels", labelKey: "dashboard.channels", descriptionKey: "dashboard.channelsDesc", icon: ChannelsTabIcon }
  ];
  const activeTab = analysisTabs.find((tab) => tab.id === activeAnalysisTab) || analysisTabs[0];

  return (
    <section className="pt-8">
      <div className="w-full">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-auto">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true">
                <ClockIcon />
              </span>
              <select
                className="min-h-11 w-full min-w-[180px] cursor-pointer appearance-none rounded-2xl border border-gd-line bg-gd-card py-2 pl-10 pr-10 text-sm font-extrabold text-white shadow-sm outline-none transition focus:border-gd-blue focus:ring-2 focus:ring-gd-blue/30 sm:w-auto"
                value={activePeriod}
                aria-label={t("period.ariaLabel")}
                onChange={(event) => handlePeriodChange(event.target.value)}
              >
                {periods.map((periodOption) => (
                  <option key={periodOption} value={periodOption}>
                    {translatePeriod(periodOption, t)}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
                <ChevronDownIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-2 xl:items-stretch">
          <FranceDealerMap period={activePeriod} embedded />
          <div className="flex flex-col gap-4">
          <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map(([value, label, color]) => {
            const StatIcon = statIcons[label];
            return (
            <article key={label} className={`relative flex min-h-[150px] flex-col items-center justify-center rounded-xl border p-5 text-center shadow-xl ${label === "Atanmamış" ? "border-red-900 bg-red-950/30" : label === "Ort. puan" ? "border-yellow-900 bg-yellow-950/30" : "border-gd-line bg-gd-card"}`}>
              {StatIcon && (
                <span className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ${color}`}>
                  <StatIcon size={22} />
                </span>
              )}
              <strong className={`block text-[26px] font-extrabold leading-tight ${color}`}>{value}</strong>
              <span className="mt-3 block text-sm font-bold text-gd-muted">{translateStat(label, t)}</span>
              {STAT_DESC_MAP[label] && (
                <div className="group absolute bottom-2 right-2">
                  <button
                    type="button"
                    className="flex h-6 w-6 items-center justify-center rounded-full text-gd-muted transition hover:bg-gd-panel hover:text-white focus:outline-none focus:ring-2 focus:ring-gd-blue/40"
                    aria-label={formatMessage(t("dashboard.whatIs"), { label: translateStat(label, t) })}
                  >
                    <InfoIcon />
                  </button>
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute bottom-full right-0 z-20 mb-2 w-52 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-left text-xs font-medium leading-5 text-zinc-100 opacity-0 shadow-2xl transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    <span className="mb-0.5 block font-bold text-white">{translateStat(label, t)}</span>
                    {translateStatDesc(label, t)}
                  </div>
                </div>
              )}
            </article>
            );
          })}
          </div>

        <section className="flex flex-col rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
          <h2 className="text-lg font-extrabold">{t("dashboard.summary")}</h2>
          <p className="mt-3 text-sm font-medium leading-7 text-zinc-100">
            {formatMessage(t("dashboard.summaryText"), {
              period: translatePeriod(activePeriod, t).toLowerCase(locale),
              assignedRate,
              conversion,
              salesCount: salesCount.toLocaleString(locale),
              firstContact,
              avgScore,
              unmatched,
              slaRisk
            })}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-900 bg-emerald-950/30 p-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">{t("dashboard.strength")}</p>
              <p className="mt-1 text-xs font-medium leading-5 text-zinc-100">
                {formatMessage(t("dashboard.strengthText"), {
                  assignedRate,
                  dealer: bestDealer.name,
                  rating: bestDealer.rating
                })}
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
                {formatMessage(t("dashboard.riskText"), {
                  dealer: worstDealer.name,
                  firstContact: worstDealer.firstContact,
                  conversion: worstDealer.conversion
                })}
              </p>
            </div>
          </div>
        </section>
          </div>
        </div>

        <section className="mt-5 flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-lg font-extrabold">{t(activeTab.labelKey)}</h2>
              <p className="mt-1 text-sm font-semibold text-gd-muted">{t(activeTab.descriptionKey)}</p>
            </div>
            <div className="shrink-0">
              <div className="flex rounded-xl border border-gd-line bg-gd-panel p-1">
                {analysisTabs.map((tab) => {
                  const isActive = activeAnalysisTab === tab.id;
                  const Icon = tab.icon;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      className={`inline-flex min-h-9 items-center gap-2 rounded-lg px-3 text-xs font-extrabold transition sm:px-4 ${
                        isActive ? "bg-zinc-100 text-zinc-950 shadow-sm" : "text-gd-muted hover:bg-gd-card hover:text-white"
                      }`}
                      aria-pressed={isActive}
                      onClick={() => setActiveAnalysisTab(tab.id)}
                    >
                      <Icon />
                      {t(tab.labelKey)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 flex min-h-0 flex-1 items-center justify-center">
            {activeAnalysisTab === "outcomes" && (
              <OutcomeDonut key={activePeriod} outcomes={outcomes} selectedOutcome={selectedOutcome} onSelect={setSelectedOutcome} t={t} locale={locale} />
            )}

            {activeAnalysisTab === "channels" && (
              <div className="flex h-full w-full rounded-xl border border-gd-line bg-gd-panel p-3">
                <div key={activePeriod} className="flex min-h-[220px] w-full items-end justify-between gap-2">
                  {channels.map((channel, index) => (
                    <div key={channel.label} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2 text-center">
                      <div className="min-h-[38px] text-xs font-medium leading-4 text-gd-muted">
                        <span className="block text-sm font-bold text-white">{channel.value}</span>
                        %{channel.percent}
                      </div>
                      <div className="flex h-[150px] items-end rounded-xl bg-gd-card p-1.5">
                        <div className={`channel-bar w-full rounded-lg ${channel.color} shadow-[0_0_18px_rgba(147,197,253,0.16)] transition-all duration-300`} style={{ height: channel.height, animationDelay: `${index * 0.1}s` }} />
                      </div>
                      <span className="truncate text-xs font-medium text-gd-muted">{translateChannel(channel.label, t)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="mt-5 grid grid-cols-1 gap-4">
        <section className="rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-lg font-extrabold">{t("dashboard.dealerPerformance")}</h2>
              <p className="mt-1 text-sm font-medium text-gd-muted">{t("dashboard.dealerPerformanceDesc")}</p>
            </div>
          </div>
          <div className="mt-5 grid auto-rows-fr gap-4 md:grid-cols-3">
            <article className="relative min-h-[104px] rounded-xl border border-emerald-900 bg-emerald-950/35 p-4 pt-5 shadow-sm">
              <p className="absolute -top-2 left-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-900 bg-gd-card px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                <BestDealerIcon />
                {t("dashboard.bestDealer")}
              </p>
              <strong className="block text-lg font-bold text-white">{bestDealer.name}</strong>
              <span className="mt-1 block text-sm font-medium text-emerald-200">★ {bestDealer.rating} · %{bestDealer.conversion} {t("dashboard.conversionRate")}</span>
            </article>
            <article className="relative min-h-[104px] rounded-xl border border-sky-900 bg-sky-950/35 p-4 pt-5 shadow-sm">
              <p className="absolute -top-2 left-3 inline-flex items-center gap-1.5 rounded-full border border-sky-900 bg-gd-card px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-sky-300">
                <FastDealerIcon />
                {t("dashboard.fastestContact")}
              </p>
              <strong className="block text-lg font-bold text-white">{fastestDealer.name}</strong>
              <span className="mt-1 block text-sm font-medium text-sky-200">{fastestDealer.firstContact} {t("dashboard.avgResponse")}</span>
            </article>
            <article className="relative min-h-[104px] rounded-xl border border-red-900 bg-red-950/35 p-4 pt-5 shadow-sm">
              <p className="absolute -top-2 left-3 inline-flex items-center gap-1.5 rounded-full border border-red-900 bg-gd-card px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-red-300">
                <RiskDealerIcon />
                {t("dashboard.worstPerformance")}
              </p>
              <strong className="block text-lg font-bold text-white">{worstDealer.name}</strong>
              <span className="mt-1 block text-sm font-medium text-red-200">★ {worstDealer.rating} · %{worstDealer.conversion} {t("dashboard.conversionRate")}</span>
            </article>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-gd-panel text-sm font-extrabold uppercase tracking-wide text-gd-muted">
                <tr>
                  <th className="px-4 py-4">{t("dashboard.dealer")}</th>
                  <th className="px-4 py-4">{t("dashboard.performance")}</th>
                  <th className="px-4 py-4">{t("dashboard.leads")}</th>
                  <th className="px-4 py-4">{t("dashboard.firstContactCol")}</th>
                  <th className="px-4 py-4">{t("dashboard.conversionCol")}</th>
                  <th className="px-4 py-4">{t("dashboard.score")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gd-line text-sm font-bold">
                {dealerRows.map((dealer) => (
                  <tr key={dealer.name}>
                    <td className="px-4 py-4">
                      {dealer.name}
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                        dealer.tone === "emerald" ? "border-emerald-800 bg-emerald-950/70 text-emerald-300" :
                        dealer.tone === "red" ? "border-red-900 bg-red-950/70 text-red-300" :
                        "border-sky-900 bg-sky-950/70 text-sky-300"
                      }`}>{translateDealerRank(dealer.rank, t)}</span>
                    </td>
                    <td className="px-4 py-4">{dealer.leads}</td>
                    <td className="px-4 py-4">{dealer.firstContact}</td>
                    <td className="px-4 py-4">%{dealer.conversion}</td>
                    <td className="px-4 py-4 text-gd-yellow">★ {dealer.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex h-full flex-col rounded-2xl border border-gd-line bg-gd-card p-5 shadow-xl">
          <h2 className="text-lg font-extrabold">{t("dashboard.assignmentStatus")}</h2>
          <div className="mt-5 grid flex-1 auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex min-h-[108px] flex-col justify-center rounded-xl border border-gd-line bg-gd-panel p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-gd-muted">
                <span className="flex items-center justify-center text-emerald-300">
                  <AssignedIcon />
                </span>
                {t("dashboard.assigned")}
              </p>
              <strong className="mt-2 block text-2xl font-extrabold">{assignment.assigned.toLocaleString(locale)}</strong>
            </div>
            <div className="flex min-h-[108px] flex-col justify-center rounded-xl border border-gd-line bg-gd-panel p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-gd-muted">
                <span className="flex items-center justify-center text-sky-300">
                  <PendingIcon />
                </span>
                {t("dashboard.pending")}
              </p>
              <strong className="mt-2 block text-2xl font-extrabold">{assignment.pending.toLocaleString(locale)}</strong>
            </div>
            <div className="flex min-h-[108px] flex-col justify-center rounded-xl border border-gd-line bg-gd-panel p-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-gd-muted">
                <span className="flex items-center justify-center text-red-300">
                  <UnmatchedIcon />
                </span>
                {t("dashboard.unmatched")}
              </p>
              <strong className="mt-2 block text-2xl font-extrabold text-gd-red">{assignment.unmatched.toLocaleString(locale)}</strong>
            </div>
            <button
              className="flex min-h-[108px] flex-col justify-center rounded-xl border border-dashed border-gd-yellow bg-gd-yellow/10 p-4 text-left text-sm font-medium text-gd-yellow transition hover:bg-gd-yellow/15"
              type="button"
              onClick={() => navigate("/eslesmeyen-leadler")}
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex items-center justify-center text-gd-yellow">
                  <PoolIcon />
                </span>
                {formatMessage(t("dashboard.poolText"), { count: assignment.unmatched.toLocaleString(locale) })}
              </span>
              <span className="mt-1 block text-sm text-yellow-100">{t("dashboard.poolTransfer")}</span>
            </button>
          </div>
        </section>
        </div>
      </div>
    </section>
  );
}
