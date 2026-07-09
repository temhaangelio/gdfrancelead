export const PERIOD_MAP = {
  Günlük: "period.daily",
  Haftalık: "period.weekly",
  Aylık: "period.monthly",
  Yıllık: "period.yearly",
  Tümü: "period.all"
};

export const STAT_MAP = {
  "Toplam lead": "stats.totalLeads",
  Atanmamış: "stats.unassigned",
  "Lead → satış": "stats.conversion",
  "Ort. ilk temas": "stats.firstContact",
  "Ort. puan": "stats.avgScore",
  "SLA riski": "stats.slaRisk"
};

export const STAT_DESC_MAP = {
  "Toplam lead": "statsDesc.totalLeads",
  Atanmamış: "statsDesc.unassigned",
  "Lead → satış": "statsDesc.conversion",
  "Ort. ilk temas": "statsDesc.firstContact",
  "Ort. puan": "statsDesc.avgScore",
  "SLA riski": "statsDesc.slaRisk"
};

export const OUTCOME_MAP = {
  Toplam: "outcome.total",
  Olumlu: "outcome.positive",
  Olumsuz: "outcome.negative",
  "Test sürüşü": "outcome.testDrive",
  Takip: "outcome.followUp",
  Satış: "outcome.sale"
};

export const CHANNEL_MAP = {
  Web: "channel.web",
  Form: "channel.form",
  Fuar: "channel.fair",
  Manuel: "channel.manual",
  Import: "channel.import"
};

export const DEALER_RANK_MAP = {
  "En iyi": "dealerRank.best",
  Güçlü: "dealerRank.strong",
  "En kötü": "dealerRank.worst",
  "İyileştirme gerekli": "analysisReport.improvementNeeded"
};

export const STATUS_FILTER_MAP = {
  Tümü: "leads.filterAll",
  "YENİ LEAD": "status.newLead",
  GÖRÜŞÜLÜYOR: "status.inProgress",
  TAKİP: "status.followUp",
  "TEST SÜRÜŞÜ": "status.testDrive",
  OLUMLU: "status.positive",
  SATIŞ: "status.sale",
  ATANMADI: "status.unassigned",
  OLUMSUZ: "status.negative"
};

export const REVIEW_STATUS_MAP = {
  Olumlu: "reviewStatus.positive",
  Nötr: "reviewStatus.neutral",
  Uyarı: "reviewStatus.warning"
};

export const SOURCE_MAP = {
  "Web sitesi": "leadAdd.sourceWeb",
  "İletişim formu": "leadAdd.sourceForm"
};

export const DEALER_LABEL_MAP = {
  "Atama bekliyor": "mock.dealerAwaiting"
};

export const POOL_REASON_MAP = {
  "Posta kodu bölge dışı": "mock.pool.outOfRegion",
  "Eksik/hatalı posta kodu": "mock.pool.badPostal",
  "Mükerrer kayıt kontrolü": "mock.pool.duplicateCheck",
  "Posta kodu kuralı": "mock.pool.postalRule",
  "En yakın bayi": "mock.pool.nearestDealer",
  "Manuel eşleştirme güncellendi": "mock.pool.manualUpdate"
};

export function leadIdKey(leadId) {
  return leadId.replace(/-/g, "").toLowerCase();
}

export function translateWithKey(key, fallback, t) {
  const translated = t(key);
  return translated === key ? fallback : translated;
}

export function translateLeadNote(leadId, fallback, t) {
  return translateWithKey(`mock.notes.${leadIdKey(leadId)}`, fallback, t);
}

export function translateReviewTitle(leadId, fallback, t) {
  return translateWithKey(`mock.reviewTitles.${leadIdKey(leadId)}`, fallback, t);
}

export function translateHistory(leadId, index, field, fallback, t, namespace = "history") {
  return translateWithKey(`mock.${namespace}.${leadIdKey(leadId)}.${index}.${field}`, fallback, t);
}

export function translateSource(source, t) {
  return translateKey(SOURCE_MAP, source, t) || source;
}

export function translateDealerLabel(dealer, t) {
  return translateKey(DEALER_LABEL_MAP, dealer, t) || dealer;
}

export function translatePoolReason(reason, t) {
  return translateKey(POOL_REASON_MAP, reason, t) || reason;
}

export function translateDealerDemo(category, leadId, fallback, t, field) {
  const id = leadIdKey(leadId);
  const key = field
    ? `mock.dealerDemo.${category}.${id}.${field}`
    : `mock.dealerDemo.${category}.${id}`;
  return translateWithKey(key, fallback, t);
}

export function translateLeadDate(leadId, field, fallback, t) {
  return translateWithKey(`mock.dates.${leadIdKey(leadId)}.${field}`, fallback, t);
}

export function reviewCommentKey(leadId) {
  return `reviewComments.${leadId.replace(/-/g, "")}`;
}

export function translateReviewComment(leadId, fallback, t) {
  const key = reviewCommentKey(leadId);
  const translated = t(key);
  return translated === key ? fallback : translated;
}

export function translateKey(map, value, t) {
  const key = map[value];
  return key ? t(key) : value;
}

export function translatePeriod(period, t) {
  return translateKey(PERIOD_MAP, period, t);
}

export function translateStat(label, t) {
  return translateKey(STAT_MAP, label, t);
}

export function translateStatDesc(label, t) {
  return translateKey(STAT_DESC_MAP, label, t);
}

export function translateOutcome(label, t) {
  return translateKey(OUTCOME_MAP, label, t);
}

export function translateChannel(label, t) {
  return translateKey(CHANNEL_MAP, label, t);
}

export function translateDealerRank(rank, t) {
  return translateKey(DEALER_RANK_MAP, rank, t);
}

export function translateStatus(status, t) {
  return translateKey(STATUS_FILTER_MAP, status, t) || status;
}

export function translateReviewStatus(status, t) {
  return translateKey(REVIEW_STATUS_MAP, status, t) || status;
}
