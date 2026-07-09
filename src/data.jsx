export const CURRENT_DEALER = "MOTOSHOPPING";

export const statusStyles = {
  "GÖRÜŞÜLÜYOR": "border-emerald-800 bg-emerald-950/80 text-emerald-500",
  "SATIŞ": "border-emerald-800 bg-emerald-950/80 text-emerald-500",
  "TAKİP": "border-gd-line bg-gd-panel text-gd-muted",
  "YENİ LEAD": "border-sky-900 bg-sky-950/70 text-sky-300",
  "ATANMADI": "border-red-900 bg-red-950/70 text-red-300",
  "TEST SÜRÜŞÜ": "border-yellow-900 bg-yellow-950/70 text-yellow-200",
  "OLUMLU": "border-emerald-800 bg-emerald-950/80 text-emerald-500",
  "OLUMSUZ": "border-red-900 bg-red-950/70 text-red-300"
};

export const dealerOptions = [
  "PISTES CYCLABLES PITHIVIERS",
  "MOTOSHOPPING",
  "SUPER BIKE 56",
  "MM MOTOS",
  "CHOPARD MOTORCYCLE 21",
  "OX ONLINE",
  "LEADER BIKES III",
  "LAF MOTO"
];

export function StarRating({ score, className = "" }) {
  return (
    <span className={`font-bold text-gd-yellow ${className}`}>
      {"★".repeat(score)}
      <span className="text-zinc-600">{"★".repeat(5 - score)}</span>
    </span>
  );
}
