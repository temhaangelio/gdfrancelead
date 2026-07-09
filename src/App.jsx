import { useEffect, useMemo, useState } from "react";
import { AssignmentRulesIcon, AutomationIcon, DashboardIcon, LeadsIcon, PrintIcon, ReviewsIcon } from "./icons.jsx";
import { CURRENT_DEALER } from "./data.jsx";
import DecorativeSidebar from "./DecorativeSidebar.jsx";
import { useTranslation } from "./i18n/LanguageContext.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import AnalysisReportPage from "./pages/AnalysisReportPage.jsx";
import AssignmentRulesPage from "./pages/AssignmentRulesPage.jsx";
import LeadAddPage from "./pages/LeadAddPage.jsx";
import LeadDetailPage from "./pages/LeadDetailPage.jsx";
import LeadImportPage from "./pages/LeadImportPage.jsx";
import LeadsPage from "./pages/LeadsPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import SmsPage from "./pages/SmsPage.jsx";
import SmsLinkDesignPage from "./pages/SmsLinkDesignPage.jsx";
import AutomationPage from "./pages/AutomationPage.jsx";
import UnmatchedLeadsPage from "./pages/UnmatchedLeadsPage.jsx";
import DealerDashboardPage from "./pages/DealerDashboardPage.jsx";
import DealerLeadsPage from "./pages/DealerLeadsPage.jsx";
import DealerLeadDetailPage from "./pages/DealerLeadDetailPage.jsx";
import DealerReviewsPage from "./pages/DealerReviewsPage.jsx";

const adminRoutes = [
  { path: "/analiz", labelKey: "nav.analytics", icon: DashboardIcon },
  { path: "/leadler", labelKey: "nav.leads", icon: LeadsIcon, children: ["/leadler/ekle", "/leadler/import"] },
  { path: "/anketler", labelKey: "nav.reviews", icon: ReviewsIcon },
  { path: "/eslesmeyen-leadler", labelKey: "nav.assignmentPool", icon: AssignmentRulesIcon },
  { path: "/ayarlar", labelKey: "nav.settings", icon: AutomationIcon, children: ["/sms", "/sms-link-tasarimi", "/atama-kurallari"] }
];

const dealerRoutes = [
  { path: "/bayi", labelKey: "nav.panel", icon: DashboardIcon },
  { path: "/bayi/leadler", labelKey: "nav.myLeads", icon: LeadsIcon },
  { path: "/bayi/anketler", labelKey: "nav.myReviews", icon: ReviewsIcon }
];

const pages = {
  "/analiz": DashboardPage,
  "/leadler": LeadsPage,
  "/leadler/ekle": LeadAddPage,
  "/leadler/import": LeadImportPage,
  "/eslesmeyen-leadler": UnmatchedLeadsPage,
  "/atama-kurallari": AssignmentRulesPage,
  "/anketler": ReviewsPage,
  "/sms": SmsPage,
  "/sms-link-tasarimi": SmsLinkDesignPage,
  "/ayarlar": AutomationPage,
  "/bayi": DealerDashboardPage,
  "/bayi/leadler": DealerLeadsPage,
  "/bayi/anketler": DealerReviewsPage
};

function isAdminLeadDetail(pathname) {
  return pathname.startsWith("/leadler/") && !pages[pathname];
}

function isDealerLeadDetail(pathname) {
  return pathname.startsWith("/bayi/leadler/") && !pages[pathname];
}

function normalizePath(pathname) {
  if (isAdminLeadDetail(pathname) || isDealerLeadDetail(pathname)) {
    return pathname;
  }
  return pages[pathname] ? pathname : "/analiz";
}

export default function App() {
  const { t, language } = useTranslation();
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));
  const [previousPathname, setPreviousPathname] = useState("");
  const [printingReport, setPrintingReport] = useState(false);
  const [analysisPeriod, setAnalysisPeriod] = useState("Tümü");

  const portalMode = pathname.startsWith("/bayi") ? "bayi" : "admin";
  const routes = portalMode === "bayi" ? dealerRoutes : adminRoutes;

  useEffect(() => {
    document.title = t("app.title");
  }, [t, language]);

  useEffect(() => {
    if (window.location.pathname !== pathname) {
      window.history.replaceState({}, "", pathname);
    }

    const onPopState = () => {
      setPreviousPathname(pathname);
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [pathname]);

  const activeRoute = useMemo(() => {
    const matches = routes.filter(
      (route) => route.path === pathname || route.children?.includes(pathname) || pathname.startsWith(`${route.path}/`)
    );
    return matches.sort((a, b) => b.path.length - a.path.length)[0] || routes[0];
  }, [routes, pathname]);

  const Page = pages[pathname]
    || (isDealerLeadDetail(pathname) ? DealerLeadDetailPage : isAdminLeadDetail(pathname) ? LeadDetailPage : DashboardPage);

  useEffect(() => {
    if (!printingReport) return undefined;

    const handleAfterPrint = () => setPrintingReport(false);
    window.addEventListener("afterprint", handleAfterPrint);
    const timer = window.setTimeout(() => window.print(), 80);

    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
      window.clearTimeout(timer);
    };
  }, [printingReport]);

  function navigate(path) {
    setPreviousPathname(pathname);
    setPathname(path);
    window.history.pushState({}, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchPortal(mode) {
    if (mode !== portalMode) {
      navigate(mode === "bayi" ? "/bayi" : "/analiz");
    }
  }

  return (
    <>
    <div className={`flex min-h-screen bg-gd-page ${printingReport ? "no-print" : ""}`}>
      <DecorativeSidebar />
      <div className="min-w-0 flex-1 p-4">
      <div className="no-print mx-auto mb-4 flex min-w-0 max-w-[1560px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="break-words text-2xl font-bold text-zinc-100 md:text-3xl">{t("app.title")}</h1>
        <div className="flex w-fit rounded-2xl border border-zinc-800 bg-black p-1 shadow-md">
          {["admin", "bayi"].map((mode) => (
            <button
              key={mode}
              className={`min-h-10 rounded-xl px-5 text-sm font-medium capitalize transition-all duration-300 ${
                portalMode === mode ? "bg-zinc-100 text-zinc-950 shadow-sm" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }`}
              type="button"
              onClick={() => switchPortal(mode)}
              aria-pressed={portalMode === mode}
            >
              {t(`app.${mode}`)}
            </button>
          ))}
        </div>
      </div>
      <main className="mx-auto min-w-0 max-w-[1560px] rounded-2xl border border-gd-line bg-gd-shell p-4 shadow-2xl sm:p-6 lg:p-8">
        <nav className="no-print flex items-center gap-2 overflow-x-auto border-b border-gd-line pb-5">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = route.path === activeRoute.path;

            return (
              <button
                key={route.path}
                className="nav-item inline-flex shrink-0 items-center gap-3 rounded-xl border border-gd-line bg-gd-panel px-4 py-3 text-sm font-medium"
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => navigate(route.path)}
              >
                <Icon />
                {t(route.labelKey)}
              </button>
            );
          })}
          {portalMode === "admin" && (
            isAdminLeadDetail(pathname) ? (
              <button
                className="ml-auto inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95"
                type="button"
                onClick={() => window.print()}
              >
                <PrintIcon />
                {t("app.printPdf")}
              </button>
            ) : (
              <button
                className="ml-auto inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-95"
                type="button"
                onClick={() => setPrintingReport(true)}
              >
                <PrintIcon />
                {t("app.print")}
              </button>
            )
          )}
          {portalMode === "bayi" && (
            <span className="ml-auto hidden shrink-0 items-center gap-2 rounded-full border border-gd-line bg-gd-panel px-4 py-2 text-xs font-bold text-gd-muted sm:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {CURRENT_DEALER} · {t("app.dealerView")}
            </span>
          )}
        </nav>

        <Page
          navigate={navigate}
          fromPath={previousPathname}
          period={analysisPeriod}
          onPeriodChange={setAnalysisPeriod}
        />
      </main>
      </div>
    </div>

    {printingReport && (
      <div className="hidden print:block">
        <AnalysisReportPage period={analysisPeriod} />
      </div>
    )}
    </>
  );
}
