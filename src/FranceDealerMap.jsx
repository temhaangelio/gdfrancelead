import { useEffect, useMemo, useRef, useState } from "react";
import { FRANCE_VIEWBOX, franceDepartments, projectPoint } from "./franceGeo.js";
import { dealerToneColors, mapDealers } from "./franceMapData.js";
import { useTranslation } from "./i18n/LanguageContext.jsx";

function FullscreenIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function ExitFullscreenIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14h3a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H4" />
      <path d="M20 10h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3" />
      <path d="M10 4v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4" />
      <path d="M14 20v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function departmentName(code) {
  const department = franceDepartments.find((dept) => dept.code === code);
  return department ? `${department.name} (${department.code})` : "";
}

const BASE_FILL = "#141417";
const HOVER_FILL = "#27272a";

function regionFill(isHovered) {
  return isHovered ? HOVER_FILL : BASE_FILL;
}

export default function FranceDealerMap({ period = "Tümü", embedded = false }) {
  const { t, locale } = useTranslation();
  const mapShellRef = useRef(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [hoveredDealer, setHoveredDealer] = useState(null);
  const [autoDealer, setAutoDealer] = useState(null);
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const dealers = useMemo(
    () =>
      mapDealers
        .map((dealer) => ({
          ...dealer,
          ...projectPoint(dealer.lat, dealer.lng),
          stats: dealer.metrics[period] || dealer.metrics["Tümü"]
        }))
        .sort((a, b) => b.stats.waiting - a.stats.waiting),
    [period]
  );

  useEffect(() => {
    if (dealers.length === 0 || isMapHovered) return undefined;
    let previousIndex = -1;
    const pickRandom = () => {
      let nextIndex = Math.floor(Math.random() * dealers.length);
      if (dealers.length > 1 && nextIndex === previousIndex) {
        nextIndex = (nextIndex + 1) % dealers.length;
      }
      previousIndex = nextIndex;
      setAutoDealer(dealers[nextIndex]);
    };
    pickRandom();
    const intervalId = setInterval(pickRandom, 2200);
    return () => clearInterval(intervalId);
  }, [dealers, isMapHovered]);

  useEffect(() => {
    const syncFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === mapShellRef.current);
    };
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  async function toggleFullscreen() {
    const node = mapShellRef.current;
    if (!node) return;
    try {
      if (document.fullscreenElement === node) {
        await document.exitFullscreen();
      } else {
        await node.requestFullscreen();
      }
    } catch {
      /* Fullscreen may be blocked by browser policy */
    }
  }

  const activeDealer = isMapHovered ? hoveredDealer : autoDealer;

  return (
    <section className={embedded ? "h-full" : "mt-5"}>
      <div
        ref={mapShellRef}
        className="map-shell relative h-full overflow-hidden rounded-2xl border border-gd-line bg-gd-card p-3 shadow-xl"
        onMouseEnter={() => setIsMapHovered(true)}
        onMouseLeave={() => {
          setIsMapHovered(false);
          setHoveredDealer(null);
          setHoveredRegion(null);
        }}
      >
        <button
          className="absolute right-3 top-3 z-30 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gd-line bg-gd-card/95 text-gd-muted shadow-md transition hover:border-zinc-600 hover:text-white"
          type="button"
          aria-label={isFullscreen ? t("map.exitFullscreen") : t("map.fullscreen")}
          title={isFullscreen ? t("map.exitFullscreen") : t("map.fullscreen")}
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
        </button>

        <div className={`mx-auto ${isFullscreen ? "map-svg-wrap-fullscreen max-w-[min(92vw,1100px)]" : "max-w-[640px]"}`}>
          <svg viewBox={FRANCE_VIEWBOX} className="france-choropleth h-auto w-full" role="img" aria-label={t("map.ariaLabel")}>
            {franceDepartments.map((department, index) => {
              const isHovered = hoveredRegion === department.code;

              return (
                <path
                  key={department.code}
                  d={department.d}
                  className="map-region"
                  fill={regionFill(isHovered)}
                  stroke="#383a44"
                  strokeWidth="0.9"
                  pathLength="1"
                  style={{ "--map-delay": `${Math.min(index * 0.01, 0.72)}s` }}
                  onMouseEnter={() => setHoveredRegion(department.code)}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
              );
            })}
            {dealers.map((dealer) => {
              const color = dealerToneColors[dealer.tone];
              const radius = Math.max(2.8, Math.min(5.2, 2.8 + dealer.stats.waiting / 160));
              const pulseDelay = `${((dealer.departmentCode.charCodeAt(0) + dealer.departmentCode.charCodeAt(1)) % 9) * 0.18}s`;
              const pulseDuration = `${1.7 + (dealer.name.length % 5) * 0.16}s`;

              const isActive = activeDealer?.name === dealer.name;

              return (
                <g
                  key={dealer.name}
                  className={`map-dealer-marker ${isActive ? "map-dealer-active" : ""}`}
                  style={{ "--marker-color": color, "--pulse-delay": pulseDelay, "--pulse-duration": pulseDuration }}
                  onMouseEnter={() => setHoveredDealer(dealer)}
                  onMouseLeave={() => setHoveredDealer(null)}
                >
                  <circle className="map-dealer-pulse" cx={dealer.x} cy={dealer.y} r={radius} fill={color} />
                  <circle className="map-dealer-dot-ring" cx={dealer.x} cy={dealer.y} r={radius + 1.8} fill="#09090b" stroke={color} strokeWidth="1" />
                  <circle className="map-dealer-dot" cx={dealer.x} cy={dealer.y} r={radius} fill={color} />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-gd-line bg-gd-card/90 px-3 py-1.5 text-xs font-bold text-gd-muted">
          {hoveredRegion ? departmentName(hoveredRegion) : t("map.france")}
        </div>

        {activeDealer && (
          <div
            className="pointer-events-none absolute z-20 w-64 -translate-x-1/2 -translate-y-full rounded-xl border bg-gd-card/95 p-3 text-xs shadow-2xl backdrop-blur-sm transition-all duration-500"
            style={{
              borderColor: `${dealerToneColors[activeDealer.tone]}66`,
              left: `${(activeDealer.x / 640) * 100}%`,
              top: `${(activeDealer.y / 611) * 100}%`,
              marginTop: "-14px"
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <strong className="block truncate text-sm font-bold text-white">{activeDealer.name}</strong>
                <span className="mt-0.5 block truncate font-medium text-gd-muted">
                  {activeDealer.city} · {departmentName(activeDealer.departmentCode)}
                </span>
              </div>
              <span
                className="shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold"
                style={{ borderColor: `${dealerToneColors[activeDealer.tone]}66`, color: dealerToneColors[activeDealer.tone] }}
              >
                {t(`dealerTone.${activeDealer.tone}`)}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <span className="rounded-lg border border-gd-line bg-gd-panel p-2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gd-muted">{t("map.waiting")}</span>
                <strong className="mt-0.5 block text-base font-extrabold text-white">{activeDealer.stats.waiting.toLocaleString(locale)}</strong>
              </span>
              <span className="rounded-lg border border-gd-line bg-gd-panel p-2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gd-muted">{t("map.conversion")}</span>
                <strong className="mt-0.5 block text-base font-extrabold text-white">%{activeDealer.stats.conversion}</strong>
              </span>
              <span className="rounded-lg border border-gd-line bg-gd-panel p-2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gd-muted">{t("map.firstContact")}</span>
                <strong className="mt-0.5 block text-base font-extrabold text-white">{activeDealer.stats.firstContact}</strong>
              </span>
              <span className="rounded-lg border border-gd-line bg-gd-panel p-2">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gd-muted">{t("map.score")}</span>
                <strong className="mt-0.5 block text-base font-extrabold text-gd-yellow">★ {activeDealer.stats.rating}</strong>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
