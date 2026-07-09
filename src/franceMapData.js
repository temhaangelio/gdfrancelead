export const dealerToneColors = {
  emerald: "#22c55e",
  sky: "#22c55e",
  amber: "#fbbf24",
  red: "#ef4444"
};

export const dealerToneLabels = {
  emerald: "İyi durum",
  sky: "İyi durum",
  amber: "Orta durum",
  red: "Kötü durum"
};

export const mapDealers = [
  {
    name: "MOTOSHOPPING",
    city: "Lille",
    postalCode: "59000",
    departmentCode: "59",
    lat: 50.6329,
    lng: 3.0581,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 6, conversion: 17, rating: 4.9, firstContact: "0.6h" },
      Haftalık: { waiting: 1, leads: 22, conversion: 14, rating: 4.8, firstContact: "0.7h" },
      Aylık: { waiting: 6, leads: 84, conversion: 12, rating: 4.8, firstContact: "0.8h" },
      Yıllık: { waiting: 92, leads: 980, conversion: 11, rating: 4.7, firstContact: "0.9h" },
      Tümü: { waiting: 189, leads: 2060, conversion: 10, rating: 4.6, firstContact: "1.0h" }
    }
  },
  {
    name: "MM MOTOS",
    city: "Paris",
    postalCode: "75009",
    departmentCode: "75",
    lat: 48.8766,
    lng: 2.3376,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 9, rating: 4.4, firstContact: "1.2h" },
      Haftalık: { waiting: 1, leads: 16, conversion: 9, rating: 4.4, firstContact: "1.4h" },
      Aylık: { waiting: 9, leads: 68, conversion: 8, rating: 4.3, firstContact: "1.5h" },
      Yıllık: { waiting: 118, leads: 795, conversion: 8, rating: 4.3, firstContact: "1.6h" },
      Tümü: { waiting: 247, leads: 1620, conversion: 8, rating: 4.3, firstContact: "1.7h" }
    }
  },
  {
    name: "PISTES CYCLABLES PITHIVIERS",
    city: "Pithiviers",
    postalCode: "45300",
    departmentCode: "45",
    lat: 48.1717,
    lng: 2.2531,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 5, conversion: 12, rating: 4.5, firstContact: "1.1h" },
      Haftalık: { waiting: 1, leads: 18, conversion: 10, rating: 4.4, firstContact: "1.3h" },
      Aylık: { waiting: 8, leads: 71, conversion: 9, rating: 4.4, firstContact: "1.4h" },
      Yıllık: { waiting: 117, leads: 842, conversion: 8, rating: 4.3, firstContact: "1.5h" },
      Tümü: { waiting: 236, leads: 1780, conversion: 7, rating: 4.2, firstContact: "1.6h" }
    }
  },
  {
    name: "CHOPARD MOTORCYCLE 21",
    city: "Dijon",
    postalCode: "21000",
    departmentCode: "21",
    lat: 47.322,
    lng: 5.0415,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 0, leads: 2, conversion: 5, rating: 4.0, firstContact: "2.4h" },
      Haftalık: { waiting: 0, leads: 11, conversion: 6, rating: 3.9, firstContact: "2.6h" },
      Aylık: { waiting: 7, leads: 49, conversion: 6, rating: 3.9, firstContact: "2.8h" },
      Yıllık: { waiting: 101, leads: 570, conversion: 5, rating: 3.8, firstContact: "3.0h" },
      Tümü: { waiting: 214, leads: 1440, conversion: 5, rating: 3.8, firstContact: "3.1h" }
    }
  },
  {
    name: "SUPER BIKE 56",
    city: "Vannes",
    postalCode: "56000",
    departmentCode: "56",
    lat: 47.6582,
    lng: -2.7608,
    tone: "red",
    metrics: {
      Günlük: { waiting: 1, leads: 4, conversion: 5, rating: 3.4, firstContact: "4.2h" },
      Haftalık: { waiting: 2, leads: 14, conversion: 5, rating: 3.2, firstContact: "5.1h" },
      Aylık: { waiting: 16, leads: 52, conversion: 4, rating: 3.1, firstContact: "5.9h" },
      Yıllık: { waiting: 186, leads: 610, conversion: 3, rating: 3.0, firstContact: "6.2h" },
      Tümü: { waiting: 372, leads: 1290, conversion: 3, rating: 2.9, firstContact: "6.8h" }
    }
  },
  {
    name: "ATLANTIC MOTORS",
    city: "Nantes",
    postalCode: "44000",
    departmentCode: "44",
    lat: 47.2184,
    lng: -1.5536,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 5, conversion: 13, rating: 4.6, firstContact: "0.9h" },
      Haftalık: { waiting: 1, leads: 19, conversion: 11, rating: 4.5, firstContact: "1.1h" },
      Aylık: { waiting: 7, leads: 76, conversion: 10, rating: 4.5, firstContact: "1.2h" },
      Yıllık: { waiting: 96, leads: 820, conversion: 9, rating: 4.4, firstContact: "1.3h" },
      Tümü: { waiting: 204, leads: 1660, conversion: 9, rating: 4.4, firstContact: "1.4h" }
    }
  },
  {
    name: "RHONE BIKE CENTER",
    city: "Lyon",
    postalCode: "69003",
    departmentCode: "69",
    lat: 45.764,
    lng: 4.8357,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 12, rating: 4.5, firstContact: "1.0h" },
      Haftalık: { waiting: 1, leads: 17, conversion: 10, rating: 4.4, firstContact: "1.2h" },
      Aylık: { waiting: 9, leads: 69, conversion: 9, rating: 4.3, firstContact: "1.5h" },
      Yıllık: { waiting: 110, leads: 760, conversion: 8, rating: 4.2, firstContact: "1.7h" },
      Tümü: { waiting: 228, leads: 1510, conversion: 8, rating: 4.2, firstContact: "1.8h" }
    }
  },
  {
    name: "GARONNE MOTOS",
    city: "Toulouse",
    postalCode: "31000",
    departmentCode: "31",
    lat: 43.6047,
    lng: 1.4442,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 3, conversion: 7, rating: 3.9, firstContact: "2.6h" },
      Haftalık: { waiting: 2, leads: 13, conversion: 7, rating: 3.8, firstContact: "2.9h" },
      Aylık: { waiting: 13, leads: 58, conversion: 6, rating: 3.8, firstContact: "3.1h" },
      Yıllık: { waiting: 132, leads: 650, conversion: 6, rating: 3.7, firstContact: "3.4h" },
      Tümü: { waiting: 266, leads: 1320, conversion: 6, rating: 3.7, firstContact: "3.6h" }
    }
  },
  {
    name: "MEDITERRANEE RIDE",
    city: "Marseille",
    postalCode: "13002",
    departmentCode: "13",
    lat: 43.2965,
    lng: 5.3698,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 4, conversion: 6, rating: 3.8, firstContact: "3.0h" },
      Haftalık: { waiting: 2, leads: 15, conversion: 6, rating: 3.7, firstContact: "3.4h" },
      Aylık: { waiting: 14, leads: 61, conversion: 5, rating: 3.7, firstContact: "3.6h" },
      Yıllık: { waiting: 146, leads: 690, conversion: 5, rating: 3.6, firstContact: "3.9h" },
      Tümü: { waiting: 288, leads: 1380, conversion: 5, rating: 3.6, firstContact: "4.1h" }
    }
  },
  {
    name: "ALSACE MOTO SERVICE",
    city: "Strasbourg",
    postalCode: "67000",
    departmentCode: "67",
    lat: 48.5734,
    lng: 7.7521,
    tone: "red",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 4, rating: 3.2, firstContact: "4.5h" },
      Haftalık: { waiting: 3, leads: 10, conversion: 4, rating: 3.1, firstContact: "5.0h" },
      Aylık: { waiting: 18, leads: 43, conversion: 4, rating: 3.1, firstContact: "5.4h" },
      Yıllık: { waiting: 160, leads: 510, conversion: 3, rating: 3.0, firstContact: "5.9h" },
      Tümü: { waiting: 314, leads: 1080, conversion: 3, rating: 3.0, firstContact: "6.1h" }
    }
  },
  {
    name: "BORDEAUX MOTOR",
    city: "Bordeaux",
    postalCode: "33000",
    departmentCode: "33",
    lat: 44.8378,
    lng: -0.5792,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 11, rating: 4.5, firstContact: "1.0h" },
      Haftalık: { waiting: 1, leads: 15, conversion: 10, rating: 4.4, firstContact: "1.2h" },
      Aylık: { waiting: 8, leads: 62, conversion: 9, rating: 4.3, firstContact: "1.4h" },
      Yıllık: { waiting: 105, leads: 720, conversion: 8, rating: 4.2, firstContact: "1.5h" },
      Tümü: { waiting: 218, leads: 1480, conversion: 8, rating: 4.2, firstContact: "1.6h" }
    }
  },
  {
    name: "AZUR MOTOS",
    city: "Nice",
    postalCode: "06000",
    departmentCode: "06",
    lat: 43.7102,
    lng: 7.262,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 10, rating: 4.4, firstContact: "1.1h" },
      Haftalık: { waiting: 1, leads: 14, conversion: 9, rating: 4.3, firstContact: "1.3h" },
      Aylık: { waiting: 7, leads: 55, conversion: 8, rating: 4.2, firstContact: "1.5h" },
      Yıllık: { waiting: 98, leads: 640, conversion: 7, rating: 4.1, firstContact: "1.7h" },
      Tümü: { waiting: 198, leads: 1240, conversion: 7, rating: 4.1, firstContact: "1.8h" }
    }
  },
  {
    name: "RENNES BIKE",
    city: "Rennes",
    postalCode: "35000",
    departmentCode: "35",
    lat: 48.1173,
    lng: -1.6778,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 5, conversion: 12, rating: 4.6, firstContact: "0.8h" },
      Haftalık: { waiting: 1, leads: 18, conversion: 11, rating: 4.5, firstContact: "1.0h" },
      Aylık: { waiting: 6, leads: 72, conversion: 10, rating: 4.4, firstContact: "1.1h" },
      Yıllık: { waiting: 88, leads: 780, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Tümü: { waiting: 176, leads: 1540, conversion: 9, rating: 4.3, firstContact: "1.3h" }
    }
  },
  {
    name: "MONTPELLIER RIDE",
    city: "Montpellier",
    postalCode: "34000",
    departmentCode: "34",
    lat: 43.6108,
    lng: 3.8767,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 9, rating: 4.3, firstContact: "1.3h" },
      Haftalık: { waiting: 1, leads: 16, conversion: 8, rating: 4.2, firstContact: "1.5h" },
      Aylık: { waiting: 9, leads: 64, conversion: 7, rating: 4.1, firstContact: "1.7h" },
      Yıllık: { waiting: 112, leads: 680, conversion: 7, rating: 4.0, firstContact: "1.9h" },
      Tümü: { waiting: 224, leads: 1360, conversion: 6, rating: 4.0, firstContact: "2.0h" }
    }
  },
  {
    name: "GRENOBLE MOTORS",
    city: "Grenoble",
    postalCode: "38000",
    departmentCode: "38",
    lat: 45.1885,
    lng: 5.7245,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 3, conversion: 7, rating: 3.9, firstContact: "2.2h" },
      Haftalık: { waiting: 2, leads: 12, conversion: 6, rating: 3.8, firstContact: "2.5h" },
      Aylık: { waiting: 11, leads: 51, conversion: 6, rating: 3.7, firstContact: "2.8h" },
      Yıllık: { waiting: 128, leads: 590, conversion: 5, rating: 3.6, firstContact: "3.1h" },
      Tümü: { waiting: 252, leads: 1180, conversion: 5, rating: 3.6, firstContact: "3.3h" }
    }
  },
  {
    name: "NORMANDIE MOTO",
    city: "Rouen",
    postalCode: "76000",
    departmentCode: "76",
    lat: 49.4431,
    lng: 1.0993,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 8, rating: 4.2, firstContact: "1.4h" },
      Haftalık: { waiting: 1, leads: 13, conversion: 7, rating: 4.1, firstContact: "1.6h" },
      Aylık: { waiting: 8, leads: 48, conversion: 7, rating: 4.0, firstContact: "1.8h" },
      Yıllık: { waiting: 94, leads: 520, conversion: 6, rating: 3.9, firstContact: "2.0h" },
      Tümü: { waiting: 186, leads: 980, conversion: 6, rating: 3.9, firstContact: "2.1h" }
    }
  },
  {
    name: "AUVERGNE BIKE",
    city: "Clermont-Ferrand",
    postalCode: "63000",
    departmentCode: "63",
    lat: 45.7772,
    lng: 3.087,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 6, rating: 3.8, firstContact: "2.8h" },
      Haftalık: { waiting: 2, leads: 10, conversion: 6, rating: 3.7, firstContact: "3.0h" },
      Aylık: { waiting: 12, leads: 44, conversion: 5, rating: 3.6, firstContact: "3.3h" },
      Yıllık: { waiting: 138, leads: 480, conversion: 5, rating: 3.5, firstContact: "3.6h" },
      Tümü: { waiting: 268, leads: 920, conversion: 4, rating: 3.5, firstContact: "3.8h" }
    }
  },
  {
    name: "TOURS MOTOR",
    city: "Tours",
    postalCode: "37000",
    departmentCode: "37",
    lat: 47.3941,
    lng: 0.6848,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 10, rating: 4.4, firstContact: "1.0h" },
      Haftalık: { waiting: 1, leads: 15, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Aylık: { waiting: 7, leads: 58, conversion: 8, rating: 4.2, firstContact: "1.4h" },
      Yıllık: { waiting: 90, leads: 610, conversion: 7, rating: 4.1, firstContact: "1.5h" },
      Tümü: { waiting: 182, leads: 1120, conversion: 7, rating: 4.1, firstContact: "1.6h" }
    }
  },
  {
    name: "NORMANDIE COAST",
    city: "Caen",
    postalCode: "14000",
    departmentCode: "14",
    lat: 49.1829,
    lng: -0.3707,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Haftalık: { waiting: 1, leads: 12, conversion: 8, rating: 4.2, firstContact: "1.4h" },
      Aylık: { waiting: 6, leads: 46, conversion: 7, rating: 4.1, firstContact: "1.6h" },
      Yıllık: { waiting: 82, leads: 540, conversion: 7, rating: 4.0, firstContact: "1.7h" },
      Tümü: { waiting: 168, leads: 1020, conversion: 6, rating: 4.0, firstContact: "1.8h" }
    }
  },
  {
    name: "CHAMPAGNE MOTOS",
    city: "Reims",
    postalCode: "51100",
    departmentCode: "51",
    lat: 49.2583,
    lng: 4.0317,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 6, rating: 3.9, firstContact: "2.4h" },
      Haftalık: { waiting: 2, leads: 11, conversion: 6, rating: 3.8, firstContact: "2.7h" },
      Aylık: { waiting: 10, leads: 42, conversion: 5, rating: 3.7, firstContact: "3.0h" },
      Yıllık: { waiting: 122, leads: 460, conversion: 5, rating: 3.6, firstContact: "3.2h" },
      Tümü: { waiting: 242, leads: 880, conversion: 4, rating: 3.6, firstContact: "3.4h" }
    }
  },
  {
    name: "LOIRE MOTOR",
    city: "Angers",
    postalCode: "49000",
    departmentCode: "49",
    lat: 47.4784,
    lng: -0.5632,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 11, rating: 4.5, firstContact: "0.9h" },
      Haftalık: { waiting: 1, leads: 14, conversion: 10, rating: 4.4, firstContact: "1.1h" },
      Aylık: { waiting: 6, leads: 53, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Yıllık: { waiting: 86, leads: 580, conversion: 8, rating: 4.2, firstContact: "1.3h" },
      Tümü: { waiting: 172, leads: 1060, conversion: 8, rating: 4.2, firstContact: "1.4h" }
    }
  },
  {
    name: "PYRENEES RIDE",
    city: "Perpignan",
    postalCode: "66000",
    departmentCode: "66",
    lat: 42.6887,
    lng: 2.8948,
    tone: "red",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 4, rating: 3.3, firstContact: "4.0h" },
      Haftalık: { waiting: 2, leads: 9, conversion: 4, rating: 3.2, firstContact: "4.5h" },
      Aylık: { waiting: 15, leads: 38, conversion: 4, rating: 3.1, firstContact: "4.9h" },
      Yıllık: { waiting: 148, leads: 420, conversion: 3, rating: 3.0, firstContact: "5.2h" },
      Tümü: { waiting: 296, leads: 840, conversion: 3, rating: 2.9, firstContact: "5.5h" }
    }
  },
  {
    name: "LIMOUSIN MOTO",
    city: "Limoges",
    postalCode: "87000",
    departmentCode: "87",
    lat: 45.8336,
    lng: 1.2611,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 5, rating: 3.7, firstContact: "3.2h" },
      Haftalık: { waiting: 2, leads: 8, conversion: 5, rating: 3.6, firstContact: "3.5h" },
      Aylık: { waiting: 11, leads: 35, conversion: 4, rating: 3.5, firstContact: "3.8h" },
      Yıllık: { waiting: 124, leads: 390, conversion: 4, rating: 3.4, firstContact: "4.1h" },
      Tümü: { waiting: 248, leads: 760, conversion: 3, rating: 3.4, firstContact: "4.3h" }
    }
  },
  {
    name: "BRETAGNE MOTORS",
    city: "Brest",
    postalCode: "29200",
    departmentCode: "29",
    lat: 48.3904,
    lng: -4.4861,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 8, rating: 4.1, firstContact: "1.5h" },
      Haftalık: { waiting: 1, leads: 11, conversion: 7, rating: 4.0, firstContact: "1.7h" },
      Aylık: { waiting: 7, leads: 41, conversion: 7, rating: 3.9, firstContact: "1.9h" },
      Yıllık: { waiting: 92, leads: 480, conversion: 6, rating: 3.8, firstContact: "2.1h" },
      Tümü: { waiting: 184, leads: 900, conversion: 6, rating: 3.8, firstContact: "2.2h" }
    }
  },
  {
    name: "LOIRE VALLEY MOTO",
    city: "Orléans",
    postalCode: "45000",
    departmentCode: "45",
    lat: 47.9029,
    lng: 1.9093,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 10, rating: 4.4, firstContact: "1.0h" },
      Haftalık: { waiting: 1, leads: 14, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Aylık: { waiting: 7, leads: 52, conversion: 8, rating: 4.2, firstContact: "1.4h" },
      Yıllık: { waiting: 88, leads: 560, conversion: 7, rating: 4.1, firstContact: "1.5h" },
      Tümü: { waiting: 176, leads: 1040, conversion: 7, rating: 4.1, firstContact: "1.6h" }
    }
  },
  {
    name: "ST-ETIENNE BIKE",
    city: "Saint-Étienne",
    postalCode: "42000",
    departmentCode: "42",
    lat: 45.4397,
    lng: 4.3872,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 6, rating: 3.8, firstContact: "2.6h" },
      Haftalık: { waiting: 2, leads: 10, conversion: 5, rating: 3.7, firstContact: "2.9h" },
      Aylık: { waiting: 12, leads: 40, conversion: 5, rating: 3.6, firstContact: "3.2h" },
      Yıllık: { waiting: 130, leads: 450, conversion: 4, rating: 3.5, firstContact: "3.5h" },
      Tümü: { waiting: 258, leads: 860, conversion: 4, rating: 3.5, firstContact: "3.7h" }
    }
  },
  {
    name: "PICARDIE MOTOS",
    city: "Amiens",
    postalCode: "80000",
    departmentCode: "80",
    lat: 49.8941,
    lng: 2.2958,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 8, rating: 4.2, firstContact: "1.3h" },
      Haftalık: { waiting: 1, leads: 12, conversion: 7, rating: 4.1, firstContact: "1.5h" },
      Aylık: { waiting: 8, leads: 45, conversion: 7, rating: 4.0, firstContact: "1.7h" },
      Yıllık: { waiting: 96, leads: 500, conversion: 6, rating: 3.9, firstContact: "1.9h" },
      Tümü: { waiting: 192, leads: 940, conversion: 6, rating: 3.9, firstContact: "2.0h" }
    }
  },
  {
    name: "FRANCHE-COMTE RIDE",
    city: "Besançon",
    postalCode: "25000",
    departmentCode: "25",
    lat: 47.238,
    lng: 6.0243,
    tone: "red",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 4, rating: 3.2, firstContact: "4.8h" },
      Haftalık: { waiting: 2, leads: 9, conversion: 4, rating: 3.1, firstContact: "5.2h" },
      Aylık: { waiting: 14, leads: 36, conversion: 3, rating: 3.0, firstContact: "5.6h" },
      Yıllık: { waiting: 142, leads: 400, conversion: 3, rating: 2.9, firstContact: "6.0h" },
      Tümü: { waiting: 278, leads: 780, conversion: 3, rating: 2.9, firstContact: "6.2h" }
    }
  },
  {
    name: "LORRAINE MOTOR",
    city: "Nancy",
    postalCode: "54000",
    departmentCode: "54",
    lat: 48.6921,
    lng: 6.1844,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 5, rating: 3.7, firstContact: "3.0h" },
      Haftalık: { waiting: 2, leads: 10, conversion: 5, rating: 3.6, firstContact: "3.3h" },
      Aylık: { waiting: 11, leads: 39, conversion: 4, rating: 3.5, firstContact: "3.6h" },
      Yıllık: { waiting: 126, leads: 430, conversion: 4, rating: 3.4, firstContact: "3.9h" },
      Tümü: { waiting: 248, leads: 820, conversion: 3, rating: 3.4, firstContact: "4.1h" }
    }
  },
  {
    name: "BEARN MOTOS",
    city: "Pau",
    postalCode: "64000",
    departmentCode: "64",
    lat: 43.2951,
    lng: -0.3708,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Haftalık: { waiting: 1, leads: 11, conversion: 8, rating: 4.2, firstContact: "1.4h" },
      Aylık: { waiting: 7, leads: 43, conversion: 7, rating: 4.1, firstContact: "1.6h" },
      Yıllık: { waiting: 90, leads: 490, conversion: 6, rating: 4.0, firstContact: "1.8h" },
      Tümü: { waiting: 180, leads: 920, conversion: 6, rating: 4.0, firstContact: "1.9h" }
    }
  },
  {
    name: "PROVENCE MOTOR",
    city: "Avignon",
    postalCode: "84000",
    departmentCode: "84",
    lat: 43.9493,
    lng: 4.8055,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 10, rating: 4.4, firstContact: "1.1h" },
      Haftalık: { waiting: 1, leads: 14, conversion: 9, rating: 4.3, firstContact: "1.3h" },
      Aylık: { waiting: 8, leads: 56, conversion: 8, rating: 4.2, firstContact: "1.5h" },
      Yıllık: { waiting: 102, leads: 620, conversion: 7, rating: 4.1, firstContact: "1.6h" },
      Tümü: { waiting: 204, leads: 1140, conversion: 7, rating: 4.1, firstContact: "1.7h" }
    }
  },
  {
    name: "POITOU MOTO",
    city: "Poitiers",
    postalCode: "86000",
    departmentCode: "86",
    lat: 46.5802,
    lng: 0.3404,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 8, rating: 4.1, firstContact: "1.4h" },
      Haftalık: { waiting: 1, leads: 12, conversion: 7, rating: 4.0, firstContact: "1.6h" },
      Aylık: { waiting: 7, leads: 44, conversion: 7, rating: 3.9, firstContact: "1.8h" },
      Yıllık: { waiting: 88, leads: 470, conversion: 6, rating: 3.8, firstContact: "2.0h" },
      Tümü: { waiting: 176, leads: 880, conversion: 6, rating: 3.8, firstContact: "2.1h" }
    }
  },
  {
    name: "ALSACE SUD MOTOS",
    city: "Mulhouse",
    postalCode: "68100",
    departmentCode: "68",
    lat: 47.7508,
    lng: 7.3359,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 6, rating: 3.8, firstContact: "2.7h" },
      Haftalık: { waiting: 2, leads: 10, conversion: 5, rating: 3.7, firstContact: "3.0h" },
      Aylık: { waiting: 12, leads: 41, conversion: 5, rating: 3.6, firstContact: "3.3h" },
      Yıllık: { waiting: 134, leads: 440, conversion: 4, rating: 3.5, firstContact: "3.6h" },
      Tümü: { waiting: 262, leads: 840, conversion: 4, rating: 3.5, firstContact: "3.8h" }
    }
  },
  {
    name: "COTE D'AZUR WEST",
    city: "La Rochelle",
    postalCode: "17000",
    departmentCode: "17",
    lat: 46.1603,
    lng: -1.1511,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 10, rating: 4.5, firstContact: "0.9h" },
      Haftalık: { waiting: 1, leads: 13, conversion: 9, rating: 4.4, firstContact: "1.1h" },
      Aylık: { waiting: 6, leads: 50, conversion: 8, rating: 4.3, firstContact: "1.2h" },
      Yıllık: { waiting: 84, leads: 550, conversion: 7, rating: 4.2, firstContact: "1.3h" },
      Tümü: { waiting: 168, leads: 1000, conversion: 7, rating: 4.2, firstContact: "1.4h" }
    }
  },
  {
    name: "NORD COAST MOTO",
    city: "Calais",
    postalCode: "62100",
    departmentCode: "62",
    lat: 50.9513,
    lng: 1.8587,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 9, rating: 4.2, firstContact: "1.2h" },
      Haftalık: { waiting: 1, leads: 12, conversion: 8, rating: 4.1, firstContact: "1.4h" },
      Aylık: { waiting: 7, leads: 47, conversion: 7, rating: 4.0, firstContact: "1.6h" },
      Yıllık: { waiting: 92, leads: 510, conversion: 6, rating: 3.9, firstContact: "1.8h" },
      Tümü: { waiting: 184, leads: 960, conversion: 6, rating: 3.9, firstContact: "1.9h" }
    }
  },
  {
    name: "DROME MOTORS",
    city: "Valence",
    postalCode: "26000",
    departmentCode: "26",
    lat: 44.9334,
    lng: 4.8924,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 6, rating: 3.8, firstContact: "2.5h" },
      Haftalık: { waiting: 2, leads: 10, conversion: 5, rating: 3.7, firstContact: "2.8h" },
      Aylık: { waiting: 11, leads: 40, conversion: 5, rating: 3.6, firstContact: "3.1h" },
      Yıllık: { waiting: 128, leads: 430, conversion: 4, rating: 3.5, firstContact: "3.4h" },
      Tümü: { waiting: 254, leads: 820, conversion: 4, rating: 3.5, firstContact: "3.6h" }
    }
  },
  {
    name: "SAVOIE BIKE",
    city: "Chambéry",
    postalCode: "73000",
    departmentCode: "73",
    lat: 45.5646,
    lng: 5.9178,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 11, rating: 4.5, firstContact: "0.9h" },
      Haftalık: { waiting: 1, leads: 13, conversion: 10, rating: 4.4, firstContact: "1.1h" },
      Aylık: { waiting: 6, leads: 49, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Yıllık: { waiting: 86, leads: 540, conversion: 8, rating: 4.2, firstContact: "1.3h" },
      Tümü: { waiting: 172, leads: 980, conversion: 8, rating: 4.2, firstContact: "1.4h" }
    }
  },
  {
    name: "LORRAINE EST",
    city: "Metz",
    postalCode: "57000",
    departmentCode: "57",
    lat: 49.1193,
    lng: 6.1757,
    tone: "red",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 4, rating: 3.2, firstContact: "4.2h" },
      Haftalık: { waiting: 2, leads: 9, conversion: 4, rating: 3.1, firstContact: "4.7h" },
      Aylık: { waiting: 14, leads: 37, conversion: 3, rating: 3.0, firstContact: "5.1h" },
      Yıllık: { waiting: 140, leads: 410, conversion: 3, rating: 2.9, firstContact: "5.5h" },
      Tümü: { waiting: 276, leads: 800, conversion: 3, rating: 2.9, firstContact: "5.7h" }
    }
  },
  {
    name: "CENTRE LOIRE",
    city: "Blois",
    postalCode: "41000",
    departmentCode: "41",
    lat: 47.5861,
    lng: 1.3359,
    tone: "sky",
    metrics: {
      Günlük: { waiting: 0, leads: 3, conversion: 9, rating: 4.2, firstContact: "1.2h" },
      Haftalık: { waiting: 1, leads: 11, conversion: 8, rating: 4.1, firstContact: "1.4h" },
      Aylık: { waiting: 7, leads: 42, conversion: 7, rating: 4.0, firstContact: "1.6h" },
      Yıllık: { waiting: 88, leads: 460, conversion: 6, rating: 3.9, firstContact: "1.8h" },
      Tümü: { waiting: 176, leads: 860, conversion: 6, rating: 3.9, firstContact: "1.9h" }
    }
  },
  {
    name: "ANNECY MOTORS",
    city: "Annecy",
    postalCode: "74000",
    departmentCode: "74",
    lat: 45.8992,
    lng: 6.1294,
    tone: "emerald",
    metrics: {
      Günlük: { waiting: 0, leads: 4, conversion: 12, rating: 4.6, firstContact: "0.8h" },
      Haftalık: { waiting: 1, leads: 15, conversion: 11, rating: 4.5, firstContact: "1.0h" },
      Aylık: { waiting: 6, leads: 54, conversion: 10, rating: 4.4, firstContact: "1.1h" },
      Yıllık: { waiting: 84, leads: 590, conversion: 9, rating: 4.3, firstContact: "1.2h" },
      Tümü: { waiting: 168, leads: 1080, conversion: 9, rating: 4.3, firstContact: "1.3h" }
    }
  },
  {
    name: "QUIMPER MOTO",
    city: "Quimper",
    postalCode: "29000",
    departmentCode: "29",
    lat: 47.9977,
    lng: -4.0979,
    tone: "amber",
    metrics: {
      Günlük: { waiting: 1, leads: 2, conversion: 5, rating: 3.7, firstContact: "3.1h" },
      Haftalık: { waiting: 2, leads: 9, conversion: 5, rating: 3.6, firstContact: "3.4h" },
      Aylık: { waiting: 11, leads: 36, conversion: 4, rating: 3.5, firstContact: "3.7h" },
      Yıllık: { waiting: 120, leads: 380, conversion: 4, rating: 3.4, firstContact: "4.0h" },
      Tümü: { waiting: 240, leads: 740, conversion: 3, rating: 3.4, firstContact: "4.2h" }
    }
  }
];
