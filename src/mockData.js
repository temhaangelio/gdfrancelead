import { CURRENT_DEALER } from "./data.jsx";

function toLeadCode(id) {
  return id.toUpperCase();
}

function reviewStatus(score) {
  if (score <= 2) return "Uyarı";
  if (score === 3) return "Nötr";
  if (score === 4) return "Olumlu";
  return "Olumlu";
}

export const leads = [
  {
    id: "gd-24087",
    name: "A. Dubois",
    email: "adubois@email.fr",
    phone: "+33 6 12 34 56",
    dealer: "MOTOSHOPPING",
    status: "GÖRÜŞÜLÜYOR",
    vehicle: "1",
    postalCode: "59000",
    city: "Lille",
    source: "Web sitesi",
    model: "Model X2",
    dealerDistance: "4.8 km",
    createdAt: "05 Tem 2026 10:24",
    firstContact: "0.8h",
    notes: "Müşteri test sürüşü için hafta sonu uygun olduğunu belirtti.",
    history: [
      { title: "4 Tem 10:05 · Telefon", detail: "Bilgi verildi, teklif gönderildi.", owner: "MOTOSHOPPING / A. Tardieu", tone: "neutral" },
      { title: "Takip · 8 Tem", detail: "test sürüşü planlama", owner: "", tone: "warning" }
    ],
    review: {
      date: "05 Tem 2026 14:32",
      rating: 4,
      status: "Olumlu",
      title: "Test sürüşü öncesi değerlendirme",
      message: "Bayi hızlı dönüş yaptı. Ürün bilgisi yeterliydi, test sürüşü randevusu için tekrar aranmayı bekliyorum."
    }
  },
  {
    id: "gd-24088",
    name: "B. Martin",
    email: "bmartin@gmail.com",
    phone: "+33 7 45 22 10",
    dealer: "MM MOTOS",
    status: "SATIŞ",
    vehicle: "1",
    postalCode: "75009",
    city: "Paris",
    source: "İletişim formu",
    model: "CFMOTO 450NK",
    dealerDistance: "2.1 km",
    createdAt: "05 Tem 2026 11:08",
    firstContact: "1.4h",
    notes: "Satış tamamlandı, memnuniyet SMS'i gönderilecek.",
    history: [
      { title: "5 Tem 11:42 · Telefon", detail: "Müşteri arandı, fiyat ve teslim süresi paylaşıldı.", owner: "MM MOTOS / B. Leroy", tone: "neutral" },
      { title: "Satış · 6 Tem", detail: "kapora alındı, teslim hazırlığı başlatıldı", owner: "", tone: "success" }
    ],
    review: {
      date: "06 Tem 2026 09:15",
      rating: 5,
      status: "Olumlu",
      title: "Satış sonrası memnuniyet anketi",
      message: "Süreç çok hızlı ilerledi. Bayi tüm sorularımı net yanıtladı, teslimat tarihi baştan söylendi."
    }
  },
  {
    id: "gd-24089",
    name: "C. Lefevre",
    email: "clefevre@goeseurope.fr",
    phone: "+33 6 66 98 21",
    dealer: "CHOPARD MOTORCYCLE 21",
    status: "TAKİP",
    vehicle: "0",
    postalCode: "21000",
    city: "Dijon",
    source: "Web sitesi",
    model: "CFMOTO 800MT",
    dealerDistance: "6.3 km",
    createdAt: "04 Tem 2026 16:40",
    firstContact: "2.1h",
    notes: "Finansman seçenekleri hakkında detaylı bilgi istedi.",
    history: [
      { title: "4 Tem 17:05 · E-posta", detail: "Broşür ve fiyat listesi gönderildi.", owner: "CHOPARD / M. Dupont", tone: "neutral" },
      { title: "Takip · 7 Tem", detail: "finansman teklifi bekleniyor", owner: "", tone: "warning" }
    ],
    review: {
      date: "04 Tem 2026 17:05",
      rating: 3,
      status: "Nötr",
      title: "İlk görüşme değerlendirmesi",
      message: "Ürün bilgisi yeterliydi ancak fiyat teklifi için hâlâ dönüş bekliyorum. Genel olarak ilgili bir ekip."
    }
  },
  {
    id: "gd-24090",
    name: "S. Bernard",
    email: "sbernard@gdfrance.fr",
    phone: "",
    dealer: "SUPER BIKE 56",
    status: "YENİ LEAD",
    vehicle: "0",
    postalCode: "56000",
    city: "Vannes",
    source: "İletişim formu",
    model: "Model X2",
    dealerDistance: "3.2 km",
    createdAt: "05 Tem 2026 15:50",
    firstContact: "—",
    notes: "Henüz bayi ile temas kurulmadı, SLA süresi devam ediyor.",
    history: [
      { title: "5 Tem 15:50 · Atama", detail: "Lead posta koduna göre bayiye atandı.", owner: "SUPER BIKE 56", tone: "warning" }
    ],
    review: null
  },
  {
    id: "gd-24091",
    name: "M. Petit",
    email: "mpetit@hotmail.com",
    phone: "0682353604",
    dealer: "Atama bekliyor",
    status: "ATANMADI",
    vehicle: "0",
    postalCode: "62000",
    city: "Arras",
    source: "Web sitesi",
    model: "CFMOTO 450NK",
    dealerDistance: "—",
    createdAt: "05 Tem 2026 08:12",
    firstContact: "—",
    notes: "Posta kodu eşleşmesi bulunamadı, admin ataması bekleniyor.",
    history: [
      { title: "5 Tem 08:12 · Sistem", detail: "Otomatik bayi eşleşmesi başarısız.", owner: "", tone: "warning" }
    ],
    review: null
  },
  {
    id: "gd-24092",
    name: "N. Moreau",
    email: "nmoreau@gmail.com",
    phone: "+33 7 81 77 42",
    dealer: "PISTES CYCLABLES PITHIVIERS",
    status: "TEST SÜRÜŞÜ",
    vehicle: "1",
    postalCode: "45300",
    city: "Pithiviers",
    source: "Web sitesi",
    model: "Model X2",
    dealerDistance: "1.4 km",
    createdAt: "03 Tem 2026 14:20",
    firstContact: "1.0h",
    notes: "Test sürüşü 7 Tem planlandı, müşteri eşiyle birlikte gelecek.",
    history: [
      { title: "3 Tem 15:30 · Telefon", detail: "Randevu oluşturuldu.", owner: "PISTES / J. Morel", tone: "neutral" },
      { title: "Test sürüşü · 7 Tem", detail: "Model X2 deneme sürüşü", owner: "", tone: "warning" }
    ],
    review: {
      date: "07 Tem 2026 11:48",
      rating: 5,
      status: "Olumlu",
      title: "Test sürüşü deneyim anketi",
      message: "Test sürüşü deneyimi mükemmeldi. Personel çok ilgiliydi, aracın tüm özelliklerini tek tek anlattılar."
    }
  },
  {
    id: "gd-24093",
    name: "P. Laurent",
    email: "plaurent@gdfrance.fr",
    phone: "03378131",
    dealer: "MOTOSHOPPING",
    status: "OLUMLU",
    vehicle: "0",
    postalCode: "59100",
    city: "Roubaix",
    source: "İletişim formu",
    model: "CFMOTO 450NK",
    dealerDistance: "5.1 km",
    createdAt: "03 Tem 2026 11:02",
    firstContact: "0.5h",
    notes: "Satın alma kararı verildi, sözleşme imzası bekleniyor.",
    history: [
      { title: "3 Tem 11:30 · Yüz yüze", detail: "Showroom ziyareti, model karşılaştırması yapıldı.", owner: "MOTOSHOPPING / C. Bernard", tone: "neutral" },
      { title: "Olumlu · 5 Tem", detail: "satın alma kararı alındı", owner: "", tone: "success" }
    ],
    review: {
      date: "05 Tem 2026 18:20",
      rating: 4,
      status: "Olumlu",
      title: "Showroom ziyareti anketi",
      message: "Profesyonel bir hizmet aldım. Randevu saatinde küçük bir gecikme oldu ama genel deneyim çok iyiydi."
    }
  },
  {
    id: "gd-24094",
    name: "E. Simon",
    email: "esimon@email.fr",
    phone: "+33 6 43 35 30",
    dealer: "Atama bekliyor",
    status: "ATANMADI",
    vehicle: "0",
    postalCode: "13000",
    city: "Marseille",
    source: "Web sitesi",
    model: "Model X2",
    dealerDistance: "—",
    createdAt: "04 Tem 2026 19:33",
    firstContact: "—",
    notes: "Bölgede uygun bayi aranıyor.",
    history: [
      { title: "4 Tem 19:33 · Sistem", detail: "Manuel bayi ataması için admin bilgilendirildi.", owner: "", tone: "warning" }
    ],
    review: null
  }
];

export const leadRows = leads.map((lead) => ({
  id: lead.id,
  name: lead.name,
  email: lead.email,
  phone: lead.phone,
  dealer: lead.dealer,
  status: lead.status,
  vehicle: lead.vehicle
}));

export const leadDetails = Object.fromEntries(
  leads.map((lead) => [
    lead.id,
    {
      id: toLeadCode(lead.id),
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      postalCode: lead.postalCode,
      city: lead.city,
      source: lead.source,
      model: lead.model,
      dealer: lead.dealer,
      dealerDistance: lead.dealerDistance,
      status: lead.status,
      createdAt: lead.createdAt,
      firstContact: lead.firstContact,
      notes: lead.notes,
      history: lead.history,
      review: lead.review
    }
  ])
);

export const reviews = leads
  .filter((lead) => lead.review)
  .map((lead) => ({
    leadId: lead.id,
    leadCode: toLeadCode(lead.id),
    customer: lead.name,
    dealer: lead.dealer,
    date: lead.review.date,
    score: lead.review.rating,
    status: lead.review.status || reviewStatus(lead.review.rating),
    comment: lead.review.message
  }));

export function getDealerReviews(dealer = CURRENT_DEALER) {
  return reviews.filter((review) => {
    const lead = leads.find((item) => item.id === review.leadId);
    return lead?.dealer === dealer;
  });
}

export function getRecentDealerReviews(dealer = CURRENT_DEALER, limit = 2) {
  return getDealerReviews(dealer)
    .slice(0, limit)
    .map((review) => ({
      leadId: review.leadId,
      customer: review.customer,
      date: review.date,
      score: review.score,
      comment: review.comment
    }));
}
