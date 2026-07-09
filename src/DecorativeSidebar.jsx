import {
  IoGrid,
  IoBicycle,
  IoStorefront,
  IoPeople,
  IoHelpCircle,
  IoPerson,
  IoPersonAdd,
  IoLogOut,
  IoChevronBack,
  IoNotifications,
  IoShieldCheckmark,
  IoMail,
  IoBuild,
  IoAttach,
  IoSunny
} from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { useTranslation } from "./i18n/LanguageContext.jsx";

const menuItems = [
  {
    labelKey: "sidebar.analysis",
    icon: <IoGrid size={20} />,
    children: [{ labelKey: "sidebar.leads", icon: <IoPersonAdd size={18} />, active: true }]
  },
  { labelKey: "sidebar.sales", icon: <GrCertificate size={20} /> },
  { labelKey: "sidebar.customers", icon: <IoPeople size={20} /> },
  { labelKey: "sidebar.guarantees", icon: <IoShieldCheckmark size={20} /> },
  { labelKey: "sidebar.vehicles", icon: <IoBicycle size={20} /> },
  { labelKey: "sidebar.dealers", icon: <IoStorefront size={20} /> },
  { labelKey: "sidebar.maintenance", icon: <IoBuild size={20} /> },
  { labelKey: "sidebar.surveys", icon: <FaClipboardList size={20} /> },
  { labelKey: "sidebar.notifications", icon: <IoMail size={20} /> },
  { labelKey: "sidebar.users", icon: <IoPeople size={20} /> },
  { labelKey: "sidebar.support", icon: <IoHelpCircle size={20} /> },
  { labelKey: "sidebar.guides", icon: <IoAttach size={20} /> }
];

const languageOptions = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" }
];

export default function DecorativeSidebar() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="no-print sticky top-0 hidden h-screen shrink-0 p-3 lg:block" aria-hidden="true">
      <aside className="relative flex h-full w-60 select-none flex-col rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
        <div className="flex items-center justify-between pl-5 pr-5 pt-5">
          <span className="flex items-center">
            <img src="/images/icon-white.png" alt="GD France" className="h-5 w-auto object-contain" />
          </span>
          <span className="rounded-xl bg-white/5 p-2 text-zinc-400">
            <IoNotifications size={20} />
          </span>
        </div>

        <nav className="mt-8 flex-1 space-y-1 overflow-y-auto px-3">
          {menuItems.map((item) => (
            <div key={item.labelKey}>
              <div className="flex min-h-[44px] items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/10">
                <span className="text-white">{item.icon}</span>
                <span className="block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-medium">
                  {t(item.labelKey)}
                </span>
              </div>
              {item.children && (
                <div className="mt-1 space-y-1">
                  {item.children.map((child) => (
                    <div
                      key={child.labelKey}
                      className={`flex min-h-[40px] items-center gap-3 rounded-xl px-4 py-2.5 text-[15px] font-medium transition-all duration-300 ${
                        child.active
                          ? "border border-yellow-500/40 bg-yellow-500/15 text-gd-yellow shadow-lg"
                          : "text-zinc-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {child.icon}
                      <span className="block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                        {t(child.labelKey)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="relative m-3 rounded-2xl bg-white/10">
          <div className="flex items-center justify-center gap-1.5 p-1 py-2">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`rounded-md px-2 py-1 text-xs font-semibold transition ${
                  language === option.code
                    ? "bg-red-600 text-white shadow-md"
                    : "text-zinc-300 hover:bg-white/20"
                }`}
                onClick={() => setLanguage(option.code)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="m-2 mt-0 flex items-stretch justify-between gap-1 rounded-2xl border border-white/5 bg-white/20 p-2">
            <span className="flex w-full items-center justify-center rounded-xl py-3 text-zinc-300">
              <IoPerson size={28} />
            </span>
            <span className="flex w-full items-center justify-center rounded-xl py-3 text-amber-300">
              <IoSunny size={22} />
            </span>
            <span className="flex w-full items-center justify-center rounded-xl py-3 text-zinc-400">
              <IoLogOut size={22} />
            </span>
          </div>
        </div>

        <span className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900 p-2 text-white shadow-xl">
          <IoChevronBack size={16} />
        </span>
      </aside>
    </div>
  );
}
