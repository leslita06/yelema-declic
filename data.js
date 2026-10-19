// Le Déclic : départements, tâches qui font perdre du temps, Expert IA qui les reprend.
// Source des métiers et des gestes : fiches Experts du site (projects/yelema-catalogue-experts/state/fiches.json).
window.DECLIC = {
  temps: [
    { id: "t1", label: "Moins d'1 h", heures: 0.5 },
    { id: "t2", label: "1 à 3 h", heures: 2 },
    { id: "t3", label: "3 à 5 h", heures: 4 },
    { id: "t4", label: "Plus de 5 h", heures: 7 }
  ],
  // Part du temps déclaré qu'un Expert reprend, hypothèse affichée sur la page.
  partReprise: 0.6,
  logos: {"Gmail": "gmail.svg", "Outlook": "outlook.png", "WhatsApp": "whatsapp.svg", "Notion": "notion.png", "Excel": "excel.png", "Sage": "sage.png", "Odoo": "odoo.svg", "Telegram": "telegram.png", "Facebook": "facebook.png", "Instagram": "instagram.png", "LinkedIn": "linkedin.png", "TikTok": "tiktok.svg", "Canva": "canva.png", "Google Sheets": "sheets.svg", "Power BI": "powerbi.png", "Google Drive": "drive.svg", "Slack": "slack.png", "Teams": "teams.png", "HubSpot": "hubspot.png", "QuickBooks": "quickbooks.png"},
  tailles: [
    { id: "xs", label: "Moins de 10 personnes", icone: "user" },
    { id: "s", label: "10 à 49 personnes", icone: "users" },
    { id: "m", label: "50 à 249 personnes", icone: "building-2" },
    { id: "l", label: "250 personnes et plus", icone: "landmark" }
  ],
  secteurs: [
    { label: "Commerce et distribution", icone: "store" }, { label: "Banque, microfinance et assurance", icone: "landmark" },
    { label: "Industrie et production", icone: "factory" }, { label: "Agro-industrie", icone: "wheat" },
    { label: "Transport et logistique", icone: "truck" }, { label: "Santé", icone: "heart-pulse" },
    { label: "Éducation et formation", icone: "graduation-cap" }, { label: "Services professionnels", icone: "briefcase" },
    { label: "Tech et télécoms", icone: "cpu" }, { label: "Hôtellerie et restauration", icone: "hotel" },
    { label: "Secteur public", icone: "landmark" }, { label: "Autre secteur", icone: "globe" }
  ],
  // Trois questions de maturité, inspirées de la grille FFK (vision, données, processus), notées de 0 à 3.
  maturite: [
    { id: "q1", icone: "brain-circuit", question: "Vos équipes utilisent-elles déjà l'IA au travail ?",
      reponses: ["Pas du tout", "Quelques-uns, chacun de son côté", "Régulièrement, sans cadre", "Oui, avec des outils fournis par l'entreprise"] },
    { id: "q2", icone: "database", question: "Où vivent vos données (clients, ventes, factures) ?",
      reponses: ["Dans des cahiers et sur WhatsApp", "Dans des fichiers Excel éparpillés", "Dans un ou deux logiciels", "Centralisées et fiables"] },
    { id: "q3", icone: "workflow", question: "Vos façons de faire sont-elles écrites quelque part ?",
      reponses: ["Elles sont dans la tête des gens", "En partie, souvent périmées", "Les étapes principales, oui", "Oui, et tout le monde les applique"] }
  ],
  niveaux: [
    { min: 0, nom: "Premiers pas", texte: "Un Expert IA vous fait gagner du temps dès la première semaine, sans rien changer à vos outils." },
    { min: 35, nom: "En route", texte: "Vos bases sont là : un Expert IA les met au travail et range ce qui est éparpillé." },
    { min: 60, nom: "Prêt à décoller", texte: "Votre entreprise est prête : deux Experts IA peuvent prendre vos tâches les plus lourdes." },
    { min: 85, nom: "Déjà en avance", texte: "Vous êtes mûrs pour une équipe d'Experts IA branchée sur vos logiciels." }
  ],
  objectifs: [
    { id: "temps", label: "Gagner du temps", icone: "timer" }, { id: "ventes", label: "Vendre plus", icone: "trending-up" },
    { id: "pilotage", label: "Mieux piloter", icone: "gauge" }, { id: "erreurs", label: "Faire moins d'erreurs", icone: "shield-check" }
  ],

  departements: [
    {
      id: "direction", icone: "crown", nom: "Direction générale", expert: "Djénéba", metier: "Chief of Staff", photo: "av-chiefofstaff-sq.jpg",
      outils: ["Gmail", "Outlook", "WhatsApp", "Teams", "Slack", "Notion"],
      taches: [
        { id: "d1", label: "Préparer mes rendez-vous et retrouver l'historique", fait: "Djénéba vous prépare un brief par rendez-vous : qui vous voyez, l'historique, l'enjeu et trois questions à poser." },
        { id: "d2", label: "Trier ma boîte mail et mes sollicitations", fait: "Elle trie la boîte de direction chaque matin et prépare les réponses que vous n'avez plus qu'à valider." },
        { id: "d3", label: "Suivre les engagements pris en réunion", fait: "Elle tient le tableau des engagements et relance ceux qui dorment, deux fois par semaine." },
        { id: "d4", label: "Rédiger les comptes rendus et relevés de décisions", fait: "Elle rédige le relevé de décisions : ce qui a été tranché, par qui, et ce qui reste ouvert." },
        { id: "d5", label: "Suivre les démarches administratives (DGI, CEPICI, banques)", fait: "Elle suit les dossiers en cours, sait quelles pièces chaque guichet réclame et vous dit quand relancer." }
      ]
    },
    {
      id: "commercial", icone: "trending-up", nom: "Commercial et ventes", expert: "Kouassi", metier: "Commercial", photo: "av-kouassi-sq.jpg",
      outils: ["WhatsApp", "Excel", "Gmail", "HubSpot", "Sage", "Odoo"],
      taches: [
        { id: "c1", label: "Relancer les devis restés sans réponse", fait: "Kouassi relance chaque devis avec le ton juste, sans harceler, et vous prévient quand un prospect se réveille." },
        { id: "c2", label: "Répondre aux demandes entrantes (WhatsApp, email)", fait: "Il qualifie chaque demande entrante, pose les bonnes questions et vous passe les affaires sérieuses." },
        { id: "c3", label: "Préparer les devis et les propositions", fait: "Il prépare le devis depuis votre catalogue et vos remises autorisées. Rien ne part sans votre accord." },
        { id: "c4", label: "Tenir le suivi des clients et des prospects", fait: "Il tient le registre des demandes : qui a écrit, qui a répondu, où en est chaque affaire." },
        { id: "c5", label: "Faire le reporting commercial de la semaine", fait: "Il vous envoie chaque lundi les affaires chaudes, celles qui coincent et le chiffre de la semaine." }
      ]
    },
    {
      id: "support", icone: "headset", nom: "Service client", expert: "Awa", metier: "Support et relation client", photo: "av-awa-sq.jpg",
      outils: ["WhatsApp", "Telegram", "Gmail", "Facebook", "Instagram", "Excel"],
      taches: [
        { id: "s1", label: "Répondre aux mêmes questions tous les jours", fait: "Awa répond en quelques secondes, jour et nuit, aux questions récurrentes de vos clients." },
        { id: "s2", label: "Retrouver une commande, une facture ou un historique", fait: "Elle retrouve la commande ou la facture sans faire attendre le client." },
        { id: "s3", label: "Répondre le soir et le week-end", fait: "Elle répond hors horaires et laisse une note claire à l'équipe du matin." },
        { id: "s4", label: "Traiter les réclamations et les escalader", fait: "Elle trie ce qu'elle traite seule et ce qu'elle escalade, selon vos règles." },
        { id: "s5", label: "Repérer les clients mécontents ou silencieux", fait: "Elle détecte les clients mécontents et prévient un responsable avant qu'ils partent." }
      ]
    },
    {
      id: "marketing", icone: "megaphone", nom: "Marketing et communication", expert: "Fatima", metier: "Marketing et contenu", photo: "av-fatima-sq.jpg",
      outils: ["Facebook", "Instagram", "LinkedIn", "TikTok", "Canva", "WhatsApp"],
      taches: [
        { id: "m1", label: "Écrire les posts et les newsletters", fait: "Fatima rédige posts et newsletters dans le ton de votre marque, prêts à valider." },
        { id: "m2", label: "Tenir le calendrier de publication", fait: "Elle programme la semaine sur chaque réseau et ajuste selon ce qui marche." },
        { id: "m3", label: "Répondre aux commentaires et messages privés", fait: "Elle trie les commentaires et les messages privés, et répond à ce qui peut l'être." },
        { id: "m4", label: "Préparer un lancement ou une campagne", fait: "Pour un lancement, elle propose un plan de six posts, les textes et une newsletter." },
        { id: "m5", label: "Mesurer ce qui marche sur les réseaux", fait: "Elle suit les résultats et vous dit quoi refaire et quoi arrêter." }
      ]
    },
    {
      id: "finance", icone: "wallet", nom: "Finance et comptabilité", expert: "Mamadou", metier: "Finance et comptabilité", photo: "av-mamadou-sq.jpg",
      outils: ["Sage", "Excel", "QuickBooks", "Odoo", "Google Sheets"],
      taches: [
        { id: "f1", label: "Relancer les factures impayées", fait: "Mamadou relance les impayés par email et WhatsApp, au bon ton, et vous montre l'état des créances." },
        { id: "f2", label: "Saisir les factures et les pièces comptables", fait: "Il lit vos factures et pièces, propose l'imputation SYSCOHADA, et vous validez." },
        { id: "f3", label: "Préparer la trésorerie et les marges", fait: "Il tient le tableau de trésorerie et de marge, et vous alerte quand un chiffre sort des clous." },
        { id: "f4", label: "Rapprocher la banque et le mobile money", fait: "Il rapproche les relevés bancaires et mobile money avec vos écritures." },
        { id: "f5", label: "Monter un dossier de financement ou bancaire", fait: "Il reconstitue le prévisionnel, prépare le plan de remboursement et livre un dossier propre." }
      ]
    },
    {
      id: "rh", icone: "users", nom: "RH et paie", expert: "Fatou", metier: "RH et paie", photo: "av-fatou-sq.jpg",
      outils: ["Excel", "Google Sheets", "Gmail", "Outlook", "WhatsApp"],
      taches: [
        { id: "r1", label: "Répondre aux questions des salariés (congés, paie)", fait: "Fatou répond aux salariés avec le solde exact et les bons documents, en minutes au lieu de jours." },
        { id: "r2", label: "Préparer la paie et vérifier les calculs CNPS et ITS", fait: "Elle prépare les éléments de paie et vérifie les calculs selon les règles ivoiriennes." },
        { id: "r3", label: "Produire attestations et documents RH", fait: "Elle génère attestations et certificats, les fait valider et les envoie." },
        { id: "r4", label: "Suivre fins de contrat, renouvellements et entretiens", fait: "Elle suit chaque échéance et vous prévient à temps." },
        { id: "r5", label: "Accueillir les nouveaux arrivants", fait: "Elle prépare le parcours d'arrivée, les documents et les premiers repères." }
      ]
    },
    {
      id: "recrutement", icone: "user-search", nom: "Recrutement", expert: "Adjoua", metier: "Recrutement", photo: "av-adjoua-sq.jpg",
      outils: ["LinkedIn", "Gmail", "Outlook", "Excel", "WhatsApp"],
      taches: [
        { id: "a1", label: "Rédiger et diffuser les offres d'emploi", fait: "Adjoua rédige la fiche de poste et diffuse l'offre sur vos canaux." },
        { id: "a2", label: "Trier les CV", fait: "Elle trie les candidatures, en présélectionne cinq notées et vous dit pourquoi." },
        { id: "a3", label: "Planifier les entretiens et relancer les candidats", fait: "Elle programme les entretiens et suit chaque candidat, relances comprises." },
        { id: "a4", label: "Préparer les guides et grilles d'entretien", fait: "Elle prépare le guide d'entretien et la grille de notation du poste." },
        { id: "a5", label: "Répondre aux candidats non retenus", fait: "Elle répond à chaque candidat, au bon moment et avec le bon ton." }
      ]
    },
    {
      id: "juridique", icone: "scale", nom: "Juridique et conformité", expert: "Ibrahim", metier: "Juridique et conformité", photo: "av-ibrahim-sq.jpg",
      outils: ["Google Drive", "Gmail", "Outlook", "Notion"],
      taches: [
        { id: "j1", label: "Relire les contrats reçus", fait: "Ibrahim relit le contrat, pointe les clauses à risque et propose une reformulation." },
        { id: "j2", label: "Rédiger contrats et avenants", fait: "Il rédige contrats commerciaux et de travail à partir de vos modèles." },
        { id: "j3", label: "Suivre les échéances contractuelles et réglementaires", fait: "Il suit chaque échéance et vous prévient avant qu'elle tombe." },
        { id: "j4", label: "Préparer les pièces pour l'administration", fait: "Il prépare les pièces demandées par l'administration, sans oubli." }
      ]
    },
    {
      id: "operations", icone: "package", nom: "Opérations, achats et logistique", expert: "Salif", metier: "Opérations et logistique", photo: "av-salif-sq.jpg",
      outils: ["Excel", "Sage", "Odoo", "WhatsApp", "Google Sheets"],
      taches: [
        { id: "o1", label: "Surveiller les stocks et éviter les ruptures", fait: "Salif surveille les stocks et vous alerte avant la rupture." },
        { id: "o2", label: "Consulter et comparer les fournisseurs", fait: "Il consulte vos fournisseurs et compare les offres à conditions égales." },
        { id: "o3", label: "Préparer les bons de commande", fait: "Il prépare les bons de commande, prêts à valider." },
        { id: "o4", label: "Contrôler les livraisons et les écarts", fait: "Il contrôle les réceptions et signale chaque écart de livraison." },
        { id: "o5", label: "Produire les indicateurs de la semaine", fait: "Il vous envoie les indicateurs clés de la semaine, d'un coup d'œil." }
      ]
    },
    {
      id: "data", icone: "chart-column", nom: "Données et reporting", expert: "Nadia", metier: "Data et analyse", photo: "av-nadia-sq.jpg",
      outils: ["Excel", "Google Sheets", "Power BI", "Sage", "Odoo"],
      taches: [
        { id: "n1", label: "Consolider des fichiers Excel venus de partout", fait: "Nadia consolide vos fichiers et met à jour les tableaux de bord sans ressaisie." },
        { id: "n2", label: "Produire les rapports hebdo et mensuels", fait: "Elle produit vos rapports automatiquement, chaque semaine et chaque mois." },
        { id: "n3", label: "Repérer les écarts et les points de vente qui décrochent", fait: "Elle met en avant les trois alertes qui comptent." },
        { id: "n4", label: "Préparer les chiffres du comité de direction", fait: "Le comité démarre sur des faits : tableau de bord, alertes et prévision à 30 jours." }
      ]
    },
    {
      id: "design", icone: "palette", nom: "Design et supports", expert: "Koffi", metier: "Design et marque", photo: "av-koffi-sq.jpg",
      outils: ["Canva", "Instagram", "Facebook", "Google Drive", "WhatsApp"],
      taches: [
        { id: "k1", label: "Produire affiches et visuels à la demande", fait: "Koffi produit l'affiche dans votre charte, prête à imprimer." },
        { id: "k2", label: "Décliner un visuel en plusieurs formats", fait: "Il décline une création en post, story, statut WhatsApp et print." },
        { id: "k3", label: "Mettre en forme présentations et documents", fait: "Il met en forme vos présentations et documents aux couleurs de la maison." },
        { id: "k4", label: "Garder la cohérence de la marque", fait: "Il vérifie chaque visuel avant publication." }
      ]
    },
    {
      id: "investissement", icone: "hand-coins", nom: "Investissement", expert: "Alioune", metier: "Investissement", photo: "av-alioune-sq.jpg",
      outils: ["Excel", "Google Drive", "Gmail", "Outlook"],
      taches: [
        { id: "i1", label: "Trier les dossiers entrants", fait: "Alioune note chaque dossier contre votre thèse d'investissement." },
        { id: "i2", label: "Vérifier une data room et ses manques", fait: "Il inventorie les pièces et signale les manques et les incohérences." },
        { id: "i3", label: "Auditer un modèle financier", fait: "Il audite le modèle et prépare les questions à poser à la direction." },
        { id: "i4", label: "Rédiger les notes de comité", fait: "Il livre la note de comité avec les scénarios de valorisation." },
        { id: "i5", label: "Suivre les participations", fait: "Il suit les participations, la trésorerie et les alertes convenues." }
      ]
    }
  ]
};
