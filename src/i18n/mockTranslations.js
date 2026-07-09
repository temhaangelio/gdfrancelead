export const mockTranslations = {
  tr: {
    mock: {
      dealerAwaiting: "Atama bekliyor",
      pool: {
        outOfRegion: "Posta kodu bölge dışı",
        badPostal: "Eksik/hatalı posta kodu",
        duplicateCheck: "Mükerrer kayıt kontrolü",
        postalRule: "Posta kodu kuralı",
        nearestDealer: "En yakın bayi",
        manualUpdate: "Manuel eşleştirme güncellendi"
      },
      notes: {
        gd24087: "Müşteri test sürüşü için hafta sonu uygun olduğunu belirtti.",
        gd24088: "Satış tamamlandı, memnuniyet SMS'i gönderilecek.",
        gd24089: "Finansman seçenekleri hakkında detaylı bilgi istedi.",
        gd24090: "Henüz bayi ile temas kurulmadı, SLA süresi devam ediyor.",
        gd24091: "Posta kodu eşleşmesi bulunamadı, admin ataması bekleniyor.",
        gd24092: "Test sürüşü 7 Tem planlandı, müşteri eşiyle birlikte gelecek.",
        gd24093: "Satın alma kararı verildi, sözleşme imzası bekleniyor.",
        gd24094: "Bölgede uygun bayi aranıyor."
      },
      reviewTitles: {
        gd24087: "Test sürüşü öncesi değerlendirme",
        gd24088: "Satış sonrası memnuniyet anketi",
        gd24089: "İlk görüşme değerlendirmesi",
        gd24092: "Test sürüşü deneyim anketi",
        gd24093: "Showroom ziyareti anketi"
      },
      history: {
        gd24087: {
          0: { title: "4 Tem 10:05 · Telefon", detail: "Bilgi verildi, teklif gönderildi." },
          1: { title: "Takip · 8 Tem", detail: "test sürüşü planlama" }
        },
        gd24088: {
          0: { title: "5 Tem 11:42 · Telefon", detail: "Müşteri arandı, fiyat ve teslim süresi paylaşıldı." },
          1: { title: "Satış · 6 Tem", detail: "kapora alındı, teslim hazırlığı başlatıldı" }
        },
        gd24089: {
          0: { title: "4 Tem 17:05 · E-posta", detail: "Broşür ve fiyat listesi gönderildi." },
          1: { title: "Takip · 7 Tem", detail: "finansman teklifi bekleniyor" }
        },
        gd24090: {
          0: { title: "5 Tem 15:50 · Atama", detail: "Lead posta koduna göre bayiye atandı." }
        },
        gd24091: {
          0: { title: "5 Tem 08:12 · Sistem", detail: "Otomatik bayi eşleşmesi başarısız." }
        },
        gd24092: {
          0: { title: "3 Tem 15:30 · Telefon", detail: "Randevu oluşturuldu." },
          1: { title: "Test sürüşü · 7 Tem", detail: "Model X2 deneme sürüşü" }
        },
        gd24093: {
          0: { title: "3 Tem 11:30 · Yüz yüze", detail: "Showroom ziyareti, model karşılaştırması yapıldı." },
          1: { title: "Olumlu · 5 Tem", detail: "satın alma kararı alındı" }
        },
        gd24094: {
          0: { title: "4 Tem 19:33 · Sistem", detail: "Manuel bayi ataması için admin bilgilendirildi." }
        }
      },
      dealerHistory: {
        gd24087: {
          0: { title: "05 Tem 10:24 · Atama", detail: "Lead posta koduna göre bayinize atandı." },
          1: { title: "05 Tem 11:05 · Telefon", detail: "Bilgi verildi, teklif gönderildi." },
          2: { title: "Takip · 8 Tem", detail: "Test sürüşü planlama" }
        },
        gd24099: {
          0: { title: "05 Tem 09:05 · Atama", detail: "Lead posta koduna göre bayinize atandı. SLA: 4 saat." }
        },
        gd24095: {
          0: { title: "05 Tem 14:12 · Atama", detail: "Lead posta koduna göre bayinize atandı. SLA: 4 saat." }
        }
      },
      dealerDemo: {
        lastActivity: {
          gd24099: "Henüz temas yok",
          gd24095: "Henüz temas yok",
          gd24087: "Telefon görüşmesi · teklif gönderildi",
          gd24096: "Fiyat teklifi bekleniyor",
          gd24097: "Test sürüşü 08 Tem planlandı",
          gd24093: "Satın alma kararı bekleniyor",
          gd24098: "Teslimat hazırlığı"
        },
        nextStep: {
          gd24087: "Test sürüşü randevusu",
          gd24097: "Sürüş sonrası arama",
          gd24096: "Fiyat teklifi dönüşü"
        },
        urgent: {
          gd24095: { assignedAt: "Bugün 14:12", slaLeft: "3s 12dk" },
          gd24096: { assignedAt: "Bugün 12:40", slaLeft: "1s 40dk" },
          gd24099: { assignedAt: "Bugün 09:05", slaLeft: "38dk" }
        },
        assignedAt: {
          gd24099: "05 Tem 09:05",
          gd24095: "05 Tem 14:12",
          gd24087: "05 Tem 10:24",
          gd24096: "05 Tem 12:40",
          gd24097: "04 Tem 16:20",
          gd24093: "03 Tem 11:02",
          gd24098: "01 Tem 09:48"
        }
      },
      dates: {
        gd24087: { createdAt: "05 Tem 2026 10:24", reviewDate: "05 Tem 2026 14:32", assignedAt: "05 Tem 2026 10:24" },
        gd24088: { createdAt: "05 Tem 2026 11:08", reviewDate: "06 Tem 2026 09:15" },
        gd24089: { createdAt: "04 Tem 2026 16:40", reviewDate: "04 Tem 2026 17:05" },
        gd24090: { createdAt: "05 Tem 2026 15:50" },
        gd24091: { createdAt: "05 Tem 2026 08:12" },
        gd24092: { createdAt: "03 Tem 2026 14:20", reviewDate: "07 Tem 2026 11:48" },
        gd24093: { createdAt: "03 Tem 2026 11:02", reviewDate: "05 Tem 2026 18:20", assignedAt: "05 Tem 2026 10:24" },
        gd24094: { createdAt: "04 Tem 2026 19:33" },
        gd24099: { assignedAt: "05 Tem 2026 09:05" },
        gd24095: { assignedAt: "05 Tem 2026 14:12" }
      },
      noDealer: "- yok"
    },
    smsMessages: {
      dealerNewLead: "Yeni lead: {musteri_adi}, {musteri_telefon}. Ürün: {urun}. Lütfen {sla_saat} saat içinde iletişime geçin.",
      customerInfo: "Merhaba {musteri_adi}, talebiniz {bayi_adi} bayisine yönlendirildi. Bayi telefonu: {bayi_telefon}.",
      customerReview: "Merhaba {musteri_adi}, {bayi_adi} ile görüşmeniz sonrası deneyiminizi değerlendirmek için linke tıklayın: {link}",
      dealerFollowUp: "{musteri_adi} lead kaydı için takip süresi dolmak üzere. Lütfen görüşme sonucunu güncelleyin."
    },
    smsLinkDefaults: {
      brandLabel: "GD APP",
      titleTemplate: "{bayi} ile deneyiminiz nasıldı?",
      subtitle: "Model X2 talebiniz hk. · 4 Tem",
      noteLabel: "İzlenimleriniz",
      notePlaceholder: "Görüşme izleniminizi yazabilirsiniz.",
      submitText: "Gönder",
      footerText: "Tek kullanımlık link · 15 gün sonra pasifleşir",
      thanksTitle: "Teşekkürler!",
      thanksMessage: "Değerlendirmeniz GD APP ve {bayi}'a iletildi."
    }
  },
  en: {
    mock: {
      dealerAwaiting: "Awaiting assignment",
      pool: {
        outOfRegion: "Postal code out of region",
        badPostal: "Missing/invalid postal code",
        duplicateCheck: "Duplicate record check",
        postalRule: "Postal code rule",
        nearestDealer: "Nearest dealer",
        manualUpdate: "Manual matching updated"
      },
      notes: {
        gd24087: "Customer indicated availability for a test drive on the weekend.",
        gd24088: "Sale completed; satisfaction SMS will be sent.",
        gd24089: "Requested detailed information about financing options.",
        gd24090: "No dealer contact yet; SLA timer running.",
        gd24091: "No postal code match found; awaiting admin assignment.",
        gd24092: "Test drive scheduled for Jul 7; customer will come with spouse.",
        gd24093: "Purchase decision made; awaiting contract signature.",
        gd24094: "Searching for a suitable dealer in the area."
      },
      reviewTitles: {
        gd24087: "Pre-test drive review",
        gd24088: "Post-sale satisfaction survey",
        gd24089: "First meeting review",
        gd24092: "Test drive experience survey",
        gd24093: "Showroom visit survey"
      },
      history: {
        gd24087: {
          0: { title: "Jul 4 10:05 · Phone", detail: "Information provided, quote sent." },
          1: { title: "Follow-up · Jul 8", detail: "test drive scheduling" }
        },
        gd24088: {
          0: { title: "Jul 5 11:42 · Phone", detail: "Customer called; price and delivery time shared." },
          1: { title: "Sale · Jul 6", detail: "deposit received, delivery prep started" }
        },
        gd24089: {
          0: { title: "Jul 4 17:05 · Email", detail: "Brochure and price list sent." },
          1: { title: "Follow-up · Jul 7", detail: "awaiting financing quote" }
        },
        gd24090: {
          0: { title: "Jul 5 15:50 · Assignment", detail: "Lead assigned to dealer by postal code." }
        },
        gd24091: {
          0: { title: "Jul 5 08:12 · System", detail: "Automatic dealer matching failed." }
        },
        gd24092: {
          0: { title: "Jul 3 15:30 · Phone", detail: "Appointment created." },
          1: { title: "Test drive · Jul 7", detail: "Model X2 test drive" }
        },
        gd24093: {
          0: { title: "Jul 3 11:30 · In person", detail: "Showroom visit, model comparison done." },
          1: { title: "Positive · Jul 5", detail: "purchase decision made" }
        },
        gd24094: {
          0: { title: "Jul 4 19:33 · System", detail: "Admin notified for manual dealer assignment." }
        }
      },
      dealerHistory: {
        gd24087: {
          0: { title: "Jul 5 10:24 · Assignment", detail: "Lead assigned to your dealership by postal code." },
          1: { title: "Jul 5 11:05 · Phone", detail: "Information provided, quote sent." },
          2: { title: "Follow-up · Jul 8", detail: "Test drive scheduling" }
        },
        gd24099: {
          0: { title: "Jul 5 09:05 · Assignment", detail: "Lead assigned to your dealership by postal code. SLA: 4 hours." }
        },
        gd24095: {
          0: { title: "Jul 5 14:12 · Assignment", detail: "Lead assigned to your dealership by postal code. SLA: 4 hours." }
        }
      },
      dealerDemo: {
        lastActivity: {
          gd24099: "No contact yet",
          gd24095: "No contact yet",
          gd24087: "Phone call · quote sent",
          gd24096: "Awaiting price quote",
          gd24097: "Test drive scheduled Jul 8",
          gd24093: "Awaiting purchase decision",
          gd24098: "Delivery preparation"
        },
        nextStep: {
          gd24087: "Test drive appointment",
          gd24097: "Post-drive follow-up call",
          gd24096: "Price quote follow-up"
        },
        urgent: {
          gd24095: { assignedAt: "Today 14:12", slaLeft: "3h 12m" },
          gd24096: { assignedAt: "Today 12:40", slaLeft: "1h 40m" },
          gd24099: { assignedAt: "Today 09:05", slaLeft: "38m" }
        },
        assignedAt: {
          gd24099: "Jul 5 09:05",
          gd24095: "Jul 5 14:12",
          gd24087: "Jul 5 10:24",
          gd24096: "Jul 5 12:40",
          gd24097: "Jul 4 16:20",
          gd24093: "Jul 3 11:02",
          gd24098: "Jul 1 09:48"
        }
      },
      dates: {
        gd24087: { createdAt: "Jul 5 2026 10:24", reviewDate: "Jul 5 2026 14:32", assignedAt: "Jul 5 2026 10:24" },
        gd24088: { createdAt: "Jul 5 2026 11:08", reviewDate: "Jul 6 2026 09:15" },
        gd24089: { createdAt: "Jul 4 2026 16:40", reviewDate: "Jul 4 2026 17:05" },
        gd24090: { createdAt: "Jul 5 2026 15:50" },
        gd24091: { createdAt: "Jul 5 2026 08:12" },
        gd24092: { createdAt: "Jul 3 2026 14:20", reviewDate: "Jul 7 2026 11:48" },
        gd24093: { createdAt: "Jul 3 2026 11:02", reviewDate: "Jul 5 2026 18:20", assignedAt: "Jul 5 2026 10:24" },
        gd24094: { createdAt: "Jul 4 2026 19:33" },
        gd24099: { assignedAt: "Jul 5 2026 09:05" },
        gd24095: { assignedAt: "Jul 5 2026 14:12" }
      },
      noDealer: "- none"
    },
    smsMessages: {
      dealerNewLead: "New lead: {musteri_adi}, {musteri_telefon}. Product: {urun}. Please contact within {sla_saat} hours.",
      customerInfo: "Hello {musteri_adi}, your request was routed to {bayi_adi}. Dealer phone: {bayi_telefon}.",
      customerReview: "Hello {musteri_adi}, after your meeting with {bayi_adi}, please rate your experience: {link}",
      dealerFollowUp: "Follow-up period expiring for lead {musteri_adi}. Please update the engagement result."
    },
    smsLinkDefaults: {
      brandLabel: "GD APP",
      titleTemplate: "How was your experience with {bayi}?",
      subtitle: "Regarding your Model X2 request · Jul 4",
      noteLabel: "Your impressions",
      notePlaceholder: "You can write your meeting impressions here.",
      submitText: "Submit",
      footerText: "Single-use link · expires in 15 days",
      thanksTitle: "Thank you!",
      thanksMessage: "Your review was sent to GD APP and {bayi}."
    }
  },
  fr: {
    mock: {
      dealerAwaiting: "En attente d'affectation",
      pool: {
        outOfRegion: "Code postal hors région",
        badPostal: "Code postal manquant/invalide",
        duplicateCheck: "Contrôle doublon",
        postalRule: "Règle code postal",
        nearestDealer: "Concessionnaire le plus proche",
        manualUpdate: "Appariement manuel mis à jour"
      },
      notes: {
        gd24087: "Le client a indiqué être disponible pour un essai le week-end.",
        gd24088: "Vente conclue ; SMS de satisfaction sera envoyé.",
        gd24089: "A demandé des informations détaillées sur le financement.",
        gd24090: "Pas encore de contact concessionnaire ; SLA en cours.",
        gd24091: "Aucune correspondance code postal ; affectation admin attendue.",
        gd24092: "Essai prévu le 7 juil. ; le client viendra avec son conjoint.",
        gd24093: "Décision d'achat prise ; signature du contrat attendue.",
        gd24094: "Recherche d'un concessionnaire adapté dans la région."
      },
      reviewTitles: {
        gd24087: "Évaluation avant essai",
        gd24088: "Enquête satisfaction post-vente",
        gd24089: "Évaluation premier échange",
        gd24092: "Enquête expérience d'essai",
        gd24093: "Enquête visite showroom"
      },
      history: {
        gd24087: {
          0: { title: "4 juil. 10:05 · Téléphone", detail: "Informations fournies, devis envoyé." },
          1: { title: "Suivi · 8 juil.", detail: "planification essai" }
        },
        gd24088: {
          0: { title: "5 juil. 11:42 · Téléphone", detail: "Client appelé ; prix et délai de livraison communiqués." },
          1: { title: "Vente · 6 juil.", detail: "acompte reçu, préparation livraison lancée" }
        },
        gd24089: {
          0: { title: "4 juil. 17:05 · E-mail", detail: "Brochure et grille tarifaire envoyées." },
          1: { title: "Suivi · 7 juil.", detail: "devis financement attendu" }
        },
        gd24090: {
          0: { title: "5 juil. 15:50 · Affectation", detail: "Prospect affecté au concessionnaire par code postal." }
        },
        gd24091: {
          0: { title: "5 juil. 08:12 · Système", detail: "Appariement automatique concessionnaire échoué." }
        },
        gd24092: {
          0: { title: "3 juil. 15:30 · Téléphone", detail: "Rendez-vous créé." },
          1: { title: "Essai · 7 juil.", detail: "Essai Model X2" }
        },
        gd24093: {
          0: { title: "3 juil. 11:30 · En personne", detail: "Visite showroom, comparaison modèles effectuée." },
          1: { title: "Positif · 5 juil.", detail: "décision d'achat prise" }
        },
        gd24094: {
          0: { title: "4 juil. 19:33 · Système", detail: "Admin informé pour affectation manuelle concessionnaire." }
        }
      },
      dealerHistory: {
        gd24087: {
          0: { title: "5 juil. 10:24 · Affectation", detail: "Prospect affecté à votre concession par code postal." },
          1: { title: "5 juil. 11:05 · Téléphone", detail: "Informations fournies, devis envoyé." },
          2: { title: "Suivi · 8 juil.", detail: "Planification essai" }
        },
        gd24099: {
          0: { title: "5 juil. 09:05 · Affectation", detail: "Prospect affecté à votre concession par code postal. SLA : 4 heures." }
        },
        gd24095: {
          0: { title: "5 juil. 14:12 · Affectation", detail: "Prospect affecté à votre concession par code postal. SLA : 4 heures." }
        }
      },
      dealerDemo: {
        lastActivity: {
          gd24099: "Pas encore de contact",
          gd24095: "Pas encore de contact",
          gd24087: "Appel téléphonique · devis envoyé",
          gd24096: "Devis en attente",
          gd24097: "Essai prévu le 8 juil.",
          gd24093: "Décision d'achat en attente",
          gd24098: "Préparation livraison"
        },
        nextStep: {
          gd24087: "Rendez-vous d'essai",
          gd24097: "Appel après essai",
          gd24096: "Relance devis"
        },
        urgent: {
          gd24095: { assignedAt: "Aujourd'hui 14:12", slaLeft: "3h 12min" },
          gd24096: { assignedAt: "Aujourd'hui 12:40", slaLeft: "1h 40min" },
          gd24099: { assignedAt: "Aujourd'hui 09:05", slaLeft: "38min" }
        },
        assignedAt: {
          gd24099: "5 juil. 09:05",
          gd24095: "5 juil. 14:12",
          gd24087: "5 juil. 10:24",
          gd24096: "5 juil. 12:40",
          gd24097: "4 juil. 16:20",
          gd24093: "3 juil. 11:02",
          gd24098: "1 juil. 09:48"
        }
      },
      dates: {
        gd24087: { createdAt: "5 juil. 2026 10:24", reviewDate: "5 juil. 2026 14:32", assignedAt: "5 juil. 2026 10:24" },
        gd24088: { createdAt: "5 juil. 2026 11:08", reviewDate: "6 juil. 2026 09:15" },
        gd24089: { createdAt: "4 juil. 2026 16:40", reviewDate: "4 juil. 2026 17:05" },
        gd24090: { createdAt: "5 juil. 2026 15:50" },
        gd24091: { createdAt: "5 juil. 2026 08:12" },
        gd24092: { createdAt: "3 juil. 2026 14:20", reviewDate: "7 juil. 2026 11:48" },
        gd24093: { createdAt: "3 juil. 2026 11:02", reviewDate: "5 juil. 2026 18:20", assignedAt: "5 juil. 2026 10:24" },
        gd24094: { createdAt: "4 juil. 2026 19:33" },
        gd24099: { assignedAt: "5 juil. 2026 09:05" },
        gd24095: { assignedAt: "5 juil. 2026 14:12" }
      },
      noDealer: "- aucun"
    },
    smsMessages: {
      dealerNewLead: "Nouveau prospect : {musteri_adi}, {musteri_telefon}. Produit : {urun}. Merci de contacter sous {sla_saat} heures.",
      customerInfo: "Bonjour {musteri_adi}, votre demande a été transmise à {bayi_adi}. Tél. concession : {bayi_telefon}.",
      customerReview: "Bonjour {musteri_adi}, après votre échange avec {bayi_adi}, évaluez votre expérience : {link}",
      dealerFollowUp: "Délai de suivi expirant pour le prospect {musteri_adi}. Merci de mettre à jour le résultat."
    },
    smsLinkDefaults: {
      brandLabel: "GD APP",
      titleTemplate: "Comment s'est passée votre expérience avec {bayi} ?",
      subtitle: "Concernant votre demande Model X2 · 4 juil.",
      noteLabel: "Vos impressions",
      notePlaceholder: "Vous pouvez écrire vos impressions ici.",
      submitText: "Envoyer",
      footerText: "Lien à usage unique · expire dans 15 jours",
      thanksTitle: "Merci !",
      thanksMessage: "Votre évaluation a été transmise à GD APP et {bayi}."
    }
  }
};
