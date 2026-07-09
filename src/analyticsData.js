export const periods = ["Günlük", "Haftalık", "Aylık", "Yıllık", "Tümü"];

const channelColors = {
  Web: "bg-gd-blue",
  Form: "bg-gd-blue/80",
  Fuar: "bg-gd-blue/65",
  Manuel: "bg-gd-blue/50",
  Import: "bg-gd-blue/40"
};

const outcomeColors = {
  Olumlu: "#22c55e",
  Olumsuz: "#ef4444",
  "Test sürüşü": "#38bdf8",
  Takip: "#f59e0b",
  Satış: "#f4f4f5"
};

function buildChannels(items) {
  const total = items.reduce((sum, [, value]) => sum + value, 0);
  const max = Math.max(...items.map(([, value]) => value));

  return items.map(([label, value]) => ({
    label,
    value,
    percent: total ? Math.round((value / total) * 100) : 0,
    height: `${Math.max(14, Math.round((value / max) * 100))}%`,
    color: channelColors[label]
  }));
}

function buildOutcomes(items) {
  const total = items.reduce((sum, [, value]) => sum + value, 0);

  return items.map(([label, value]) => ({
    label,
    value,
    percent: total ? Math.round((value / total) * 100) : 0,
    color: outcomeColors[label]
  }));
}

export const periodData = {
  Günlük: {
    stats: [
      ["18", "Toplam lead", ""],
      ["2", "Atanmamış", ""],
      ["11.1%", "Lead → satış", ""],
      ["1.4h", "Ort. ilk temas", ""],
      ["★ 4.5", "Ort. puan", "text-gd-yellow"],
      ["1", "SLA riski", "text-red-300"]
    ],
    totalLeads: 18,
    channels: buildChannels([
      ["Web", 8],
      ["Form", 5],
      ["Fuar", 3],
      ["Manuel", 1],
      ["Import", 1]
    ]),
    outcomes: buildOutcomes([
      ["Olumlu", 6],
      ["Olumsuz", 1],
      ["Test sürüşü", 3],
      ["Takip", 5],
      ["Satış", 2]
    ]),
    dealerRows: [
      { name: "MOTOSHOPPING", leads: 6, firstContact: "0.6h", firstContactHours: 0.6, conversion: 17, rating: 4.9, rank: "En iyi", tone: "emerald" },
      { name: "PISTES CYCLABLES PITHIVIERS", leads: 5, firstContact: "1.1h", firstContactHours: 1.1, conversion: 12, rating: 4.5, rank: "Güçlü", tone: "sky" },
      { name: "SUPER BIKE 56", leads: 4, firstContact: "4.2h", firstContactHours: 4.2, conversion: 5, rating: 3.4, rank: "En kötü", tone: "red" }
    ],
    assignment: { assigned: 16, pending: 1, unmatched: 1 }
  },
  Haftalık: {
    stats: [
      ["142", "Toplam lead", ""],
      ["5", "Atanmamış", ""],
      ["9.2%", "Lead → satış", ""],
      ["1.8h", "Ort. ilk temas", ""],
      ["★ 4.3", "Ort. puan", "text-gd-yellow"],
      ["4", "SLA riski", "text-red-300"]
    ],
    totalLeads: 142,
    channels: buildChannels([
      ["Web", 58],
      ["Form", 41],
      ["Fuar", 24],
      ["Manuel", 12],
      ["Import", 7]
    ]),
    outcomes: buildOutcomes([
      ["Olumlu", 48],
      ["Olumsuz", 11],
      ["Test sürüşü", 27],
      ["Takip", 36],
      ["Satış", 18]
    ]),
    dealerRows: [
      { name: "MOTOSHOPPING", leads: 22, firstContact: "0.7h", firstContactHours: 0.7, conversion: 14, rating: 4.8, rank: "En iyi", tone: "emerald" },
      { name: "PISTES CYCLABLES PITHIVIERS", leads: 18, firstContact: "1.3h", firstContactHours: 1.3, conversion: 10, rating: 4.4, rank: "Güçlü", tone: "sky" },
      { name: "SUPER BIKE 56", leads: 14, firstContact: "5.1h", firstContactHours: 5.1, conversion: 5, rating: 3.2, rank: "En kötü", tone: "red" }
    ],
    assignment: { assigned: 134, pending: 5, unmatched: 3 }
  },
  Aylık: {
    stats: [
      ["1,248", "Toplam lead", ""],
      ["12", "Atanmamış", ""],
      ["8.4%", "Lead → satış", ""],
      ["2.1h", "Ort. ilk temas", ""],
      ["★ 4.2", "Ort. puan", "text-gd-yellow"],
      ["11", "SLA riski", "text-red-300"]
    ],
    totalLeads: 1248,
    channels: buildChannels([
      ["Web", 512],
      ["Form", 358],
      ["Fuar", 214],
      ["Manuel", 104],
      ["Import", 60]
    ]),
    outcomes: buildOutcomes([
      ["Olumlu", 426],
      ["Olumsuz", 104],
      ["Test sürüşü", 236],
      ["Takip", 318],
      ["Satış", 164]
    ]),
    dealerRows: [
      { name: "MOTOSHOPPING", leads: 84, firstContact: "0.8h", firstContactHours: 0.8, conversion: 12, rating: 4.8, rank: "En iyi", tone: "emerald" },
      { name: "PISTES CYCLABLES PITHIVIERS", leads: 71, firstContact: "1.4h", firstContactHours: 1.4, conversion: 9, rating: 4.4, rank: "Güçlü", tone: "sky" },
      { name: "SUPER BIKE 56", leads: 52, firstContact: "5.9h", firstContactHours: 5.9, conversion: 4, rating: 3.1, rank: "En kötü", tone: "red" }
    ],
    assignment: { assigned: 1190, pending: 46, unmatched: 12 }
  },
  Yıllık: {
    stats: [
      ["14,820", "Toplam lead", ""],
      ["86", "Atanmamış", ""],
      ["7.6%", "Lead → satış", ""],
      ["2.4h", "Ort. ilk temas", ""],
      ["★ 4.1", "Ort. puan", "text-gd-yellow"],
      ["38", "SLA riski", "text-red-300"]
    ],
    totalLeads: 14820,
    channels: buildChannels([
      ["Web", 6080],
      ["Form", 4250],
      ["Fuar", 2540],
      ["Manuel", 1240],
      ["Import", 710]
    ]),
    outcomes: buildOutcomes([
      ["Olumlu", 5060],
      ["Olumsuz", 1230],
      ["Test sürüşü", 2810],
      ["Takip", 3780],
      ["Satış", 1950]
    ]),
    dealerRows: [
      { name: "MOTOSHOPPING", leads: 980, firstContact: "0.9h", firstContactHours: 0.9, conversion: 11, rating: 4.7, rank: "En iyi", tone: "emerald" },
      { name: "PISTES CYCLABLES PITHIVIERS", leads: 842, firstContact: "1.5h", firstContactHours: 1.5, conversion: 8, rating: 4.3, rank: "Güçlü", tone: "sky" },
      { name: "SUPER BIKE 56", leads: 610, firstContact: "6.2h", firstContactHours: 6.2, conversion: 3, rating: 3.0, rank: "En kötü", tone: "red" }
    ],
    assignment: { assigned: 14120, pending: 614, unmatched: 86 }
  },
  Tümü: {
    stats: [
      ["31,240", "Toplam lead", ""],
      ["142", "Atanmamış", ""],
      ["7.2%", "Lead → satış", ""],
      ["2.6h", "Ort. ilk temas", ""],
      ["★ 4.0", "Ort. puan", "text-gd-yellow"],
      ["52", "SLA riski", "text-red-300"]
    ],
    totalLeads: 31240,
    channels: buildChannels([
      ["Web", 12840],
      ["Form", 8960],
      ["Fuar", 5340],
      ["Manuel", 2620],
      ["Import", 1480]
    ]),
    outcomes: buildOutcomes([
      ["Olumlu", 10680],
      ["Olumsuz", 2590],
      ["Test sürüşü", 5920],
      ["Takip", 7980],
      ["Satış", 4120]
    ]),
    dealerRows: [
      { name: "MOTOSHOPPING", leads: 2060, firstContact: "1.0h", firstContactHours: 1.0, conversion: 10, rating: 4.6, rank: "En iyi", tone: "emerald" },
      { name: "PISTES CYCLABLES PITHIVIERS", leads: 1780, firstContact: "1.6h", firstContactHours: 1.6, conversion: 7, rating: 4.2, rank: "Güçlü", tone: "sky" },
      { name: "SUPER BIKE 56", leads: 1290, firstContact: "6.8h", firstContactHours: 6.8, conversion: 3, rating: 2.9, rank: "En kötü", tone: "red" }
    ],
    assignment: { assigned: 29840, pending: 1258, unmatched: 142 }
  }
};

export function statValue(stats, label) {
  const found = stats.find(([, statLabel]) => statLabel === label);
  return found ? found[0] : "";
}
