// Le Déclic : départements, tâches qui font perdre du temps, Expert IA qui les reprend.
// Source des métiers et des gestes : fiches Experts du site (projects/yelema-catalogue-experts/state/fiches.json).
window.DECLIC = {
  temps: [
    { id: "t1", label: "Moins d'1 h", heures: 0.5 },
    { id: "t2", label: "1 à 3 h", heures: 2 },
    { id: "t3", label: "3 à 5 h", heures: 4 },
    { id: "t4", label: "5 à 10 h", heures: 7.5 },
    { id: "t5", label: "Plus de 10 h", heures: 12 }
  ],
  // Part du temps déclaré qu'un Expert reprend, hypothèse affichée sur la page.
  partReprise: 0.6,
  logos: {"Gmail": "gmail.svg", "Outlook": "outlook.png", "WhatsApp": "whatsapp.svg", "Notion": "notion.png", "Excel": "excel.png", "Sage": "sage.png", "Odoo": "odoo.svg", "Telegram": "telegram.png", "Facebook": "facebook.png", "Instagram": "instagram.png", "LinkedIn": "linkedin.png", "TikTok": "tiktok.svg", "Canva": "canva.png", "Google Sheets": "sheets.svg", "Power BI": "powerbi.png", "Google Drive": "drive.svg", "Slack": "slack.png", "Teams": "teams.png", "HubSpot": "hubspot.png", "QuickBooks": "quickbooks.png", "Salesforce": "salesforce.png", "Pipedrive": "pipedrive.png", "Zoho": "zoho.svg", "Shopify": "shopify.svg", "WooCommerce": "woocommerce.svg", "Zendesk": "zendesk.svg", "Freshdesk": "freshdesk.png", "SAP": "sap.svg", "Mailchimp": "mailchimp.svg", "YouTube": "youtube.svg", "Meta Business": "facebook.png", "Google Agenda": "googlecalendar.svg", "Calendly": "calendly.svg", "Figma": "figma.svg", "Adobe": "adobe.png", "DocuSign": "docusign.png", "Looker Studio": "looker.svg", "MTN MoMo": "mtn.png", "Orange Money": "orange.svg", "Wave": "wave.png", "Microsoft Dynamics": "dynamics365.png", "Sage Paie": "sage.png"},
  tailles: [
    { id: "xs", label: "Moins de 10 personnes", icone: "user" },
    { id: "s", label: "10 à 49 personnes", icone: "users" },
    { id: "m", label: "50 à 249 personnes", icone: "building-2" },
    { id: "l", label: "250 personnes et plus", icone: "landmark" }
  ],
  secteurs: [
    { label: "Commerce et distribution", icone: "store" }, { label: "Grande consommation", icone: "shopping-basket" },
    { label: "Import, export et négoce", icone: "ship" }, { label: "Banque et microfinance", icone: "landmark" },
    { label: "Assurance", icone: "shield" }, { label: "Industrie et production", icone: "factory" },
    { label: "Agro-industrie et agriculture", icone: "wheat" }, { label: "BTP et immobilier", icone: "hard-hat" },
    { label: "Mines, pétrole et énergie", icone: "zap" }, { label: "Transport et logistique", icone: "truck" },
    { label: "Santé et pharmacie", icone: "heart-pulse" }, { label: "Éducation et formation", icone: "graduation-cap" },
    { label: "Conseil, audit et services", icone: "briefcase" }, { label: "Tech, télécoms et digital", icone: "cpu" },
    { label: "Médias, communication et événementiel", icone: "megaphone" }, { label: "Hôtellerie, restauration et tourisme", icone: "hotel" },
    { label: "Secteur public", icone: "building" }, { label: "ONG et organisations internationales", icone: "heart-handshake" },
    { label: "Autre secteur", icone: "globe", autre: true }
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
    { id: "pilotage", label: "Mieux piloter", icone: "gauge" }, { id: "erreurs", label: "Faire moins d'erreurs", icone: "shield-check" },
    { id: "economies", label: "Faire des économies", icone: "piggy-bank" }
  ],

  // Qui travaille, et où vivent les informations : sert au résultat et à préparer la démo.
  equipes: {
    lieu: [
      { id: "bureau", label: "Surtout au bureau", icone: "building-2" },
      { id: "mixte", label: "Bureau et terrain", icone: "repeat" },
      { id: "terrain", label: "Surtout sur le terrain", icone: "map-pin" }
    ],
    niveaux: [
      { id: "dir", label: "Direction", icone: "crown" },
      { id: "man", label: "Managers et cadres", icone: "briefcase" },
      { id: "emp", label: "Employés et agents", icone: "users" }
    ],
    tranches: ["1 à 5", "6 à 20", "21 à 100", "Plus de 100"]
  },
  infos: {
    lieux: [
      { label: "WhatsApp", logo: "WhatsApp" }, { label: "Emails", logo: "Gmail" }, { label: "Excel et tableurs", logo: "Excel" },
      { label: "Logiciel métier ou ERP", logo: "Sage" }, { label: "Drive ou serveur partagé", logo: "Google Drive" },
      { label: "Papier et classeurs", icone: "file-text" }, { label: "Dans la tête des gens", icone: "brain-circuit" }
    ],
    eparpillement: ["Tout au même endroit", "Deux ou trois endroits", "Un peu partout", "On cherche souvent"],
    whatsapp: ["Pas du tout", "Un peu", "Beaucoup", "Tout passe par WhatsApp"]
  },

  departements: [
    {
      id: "direction", icone: "crown", nom: "Direction générale", expert: "Djénéba", metier: "Chief of Staff", photo: "av-chiefofstaff-sq.jpg",
      outils: ["Gmail", "Outlook", "WhatsApp", "Teams", "Slack", "Notion", "Google Drive", "Excel", "Google Agenda", "Calendly"],
      volume: {"question": "Combien d'emails et de messages recevez-vous par jour ?", "options": ["Moins de 30", "30 à 80", "80 à 150", "Plus de 150"]},
      taches: [
        { id: "d1", label: "Préparer mes rendez-vous et retrouver l'historique", fait: "Djénéba vous prépare un brief par rendez-vous : qui vous voyez, l'historique, l'enjeu et trois questions à poser." },
        { id: "d2", label: "Trier ma boîte mail et mes sollicitations", fait: "Elle trie la boîte de direction chaque matin et prépare les réponses que vous n'avez plus qu'à valider." },
        { id: "d3", label: "Suivre les engagements pris en réunion", fait: "Elle tient le tableau des engagements et relance ceux qui dorment, deux fois par semaine." },
        { id: "d4", label: "Rédiger les comptes rendus et relevés de décisions", fait: "Elle rédige le relevé de décisions : ce qui a été tranché, par qui, et ce qui reste ouvert." },
        { id: "d5", label: "Suivre les démarches administratives (DGI, CEPICI, banques)", fait: "Elle suit les dossiers en cours, sait quelles pièces chaque guichet réclame et vous dit quand relancer." },
        { id: "d6", label: "Préparer le comité de direction et ses supports", fait: "Djénéba rassemble les points de chaque service et prépare l'ordre du jour et le support." },
        { id: "d7", label: "Suivre les dossiers de chaque service", fait: "Elle fait le point chaque semaine avec les responsables et vous remonte ce qui coince." },
        { id: "d8", label: "Répondre aux partenaires, bailleurs et administrations", fait: "Elle prépare les réponses et les pièces ; vous validez avant l'envoi." },
        { id: "d9", label: "Organiser mes déplacements et mon agenda", fait: "Djénéba cale vos rendez-vous, prépare vos déplacements et protège vos plages de travail." },
        { id: "d10", label: "Rédiger discours, notes et courriers officiels", fait: "Elle rédige un premier jet dans votre ton, avec les éléments du dossier, prêt à relire." }
      ]
    },
    {
      id: "commercial", icone: "trending-up", nom: "Commercial et ventes", expert: "Kouassi", metier: "Commercial", photo: "av-kouassi-sq.jpg",
      outils: ["WhatsApp", "Excel", "Gmail", "Outlook", "HubSpot", "Sage", "Odoo", "LinkedIn", "Google Sheets", "Facebook", "Salesforce", "Pipedrive", "Zoho", "Shopify", "WooCommerce"],
      volume: {"question": "Combien de devis envoyez-vous par mois ?", "options": ["Moins de 10", "10 à 50", "50 à 200", "Plus de 200"]},
      taches: [
        { id: "c1", label: "Relancer les devis restés sans réponse", fait: "Kouassi relance chaque devis avec le ton juste, sans harceler, et vous prévient quand un prospect se réveille." },
        { id: "c2", label: "Répondre aux demandes entrantes (WhatsApp, email)", fait: "Il qualifie chaque demande entrante, pose les bonnes questions et vous passe les affaires sérieuses." },
        { id: "c3", label: "Préparer les devis et les propositions", fait: "Il prépare le devis depuis votre catalogue et vos remises autorisées. Rien ne part sans votre accord." },
        { id: "c4", label: "Tenir le suivi des clients et des prospects", fait: "Il tient le registre des demandes : qui a écrit, qui a répondu, où en est chaque affaire." },
        { id: "c5", label: "Faire le reporting commercial de la semaine", fait: "Il vous envoie chaque lundi les affaires chaudes, celles qui coincent et le chiffre de la semaine." },
        { id: "c6", label: "Prospecter et trouver de nouveaux clients", fait: "Kouassi dresse la liste des prospects de votre cible et prépare le premier message." },
        { id: "c7", label: "Préparer les rendez-vous clients", fait: "Avant chaque rendez-vous, il vous donne l'historique du client, ses achats et l'enjeu." },
        { id: "c8", label: "Suivre les commerciaux terrain", fait: "Il recueille les comptes rendus de visite, par écrit ou par vocal, et met le suivi à jour." },
        { id: "c9", label: "Relancer les clients qui n'ont pas racheté", fait: "Kouassi repère les clients inactifs depuis 60 jours et leur propose une offre adaptée." },
        { id: "c10", label: "Répondre aux appels d'offres", fait: "Il prépare le dossier de réponse : pièces, références, mémoire technique et prix à valider." }
      ]
    },
    {
      id: "support", icone: "headset", nom: "Service client", expert: "Awa", metier: "Support et relation client", photo: "av-awa-sq.jpg",
      outils: ["WhatsApp", "Telegram", "Gmail", "Outlook", "Facebook", "Instagram", "Excel", "HubSpot", "Zendesk", "Freshdesk", "Shopify"],
      volume: {"question": "Combien de demandes clients recevez-vous par jour ?", "options": ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"]},
      taches: [
        { id: "s1", label: "Répondre aux mêmes questions tous les jours", fait: "Awa répond en quelques secondes, jour et nuit, aux questions récurrentes de vos clients." },
        { id: "s2", label: "Retrouver une commande, une facture ou un historique", fait: "Elle retrouve la commande ou la facture sans faire attendre le client." },
        { id: "s3", label: "Répondre le soir et le week-end", fait: "Elle répond hors horaires et laisse une note claire à l'équipe du matin." },
        { id: "s4", label: "Traiter les réclamations et les escalader", fait: "Elle trie ce qu'elle traite seule et ce qu'elle escalade, selon vos règles." },
        { id: "s5", label: "Repérer les clients mécontents ou silencieux", fait: "Elle détecte les clients mécontents et prévient un responsable avant qu'ils partent." },
        { id: "s6", label: "Informer les clients sur leurs livraisons", fait: "Awa donne au client l'état de sa commande sans mobiliser l'équipe." },
        { id: "s7", label: "Recueillir les avis et la satisfaction", fait: "Elle sollicite les avis après l'achat et vous résume ce qui revient." },
        { id: "s8", label: "Mettre à jour la FAQ et les réponses types", fait: "Elle repère les nouvelles questions et propose les réponses à ajouter." },
        { id: "s9", label: "Prendre les commandes par message", fait: "Awa prend la commande, vérifie le stock et l'adresse, puis la transmet à l'équipe." },
        { id: "s10", label: "Faire le point des demandes non résolues", fait: "Chaque soir, elle liste les demandes en attente et qui doit répondre." }
      ]
    },
    {
      id: "marketing", icone: "megaphone", nom: "Marketing et communication", expert: "Fatima", metier: "Marketing et contenu", photo: "av-fatima-sq.jpg",
      outils: ["Facebook", "Instagram", "LinkedIn", "TikTok", "Canva", "WhatsApp", "Google Drive", "YouTube", "Mailchimp", "Meta Business"],
      volume: {"question": "Combien de publications par semaine ?", "options": ["0 à 2", "3 à 7", "8 à 20", "Plus de 20"]},
      taches: [
        { id: "m1", label: "Écrire les posts et les newsletters", fait: "Fatima rédige posts et newsletters dans le ton de votre marque, prêts à valider." },
        { id: "m2", label: "Tenir le calendrier de publication", fait: "Elle programme la semaine sur chaque réseau et ajuste selon ce qui marche." },
        { id: "m3", label: "Répondre aux commentaires et messages privés", fait: "Elle trie les commentaires et les messages privés, et répond à ce qui peut l'être." },
        { id: "m4", label: "Préparer un lancement ou une campagne", fait: "Pour un lancement, elle propose un plan de six posts, les textes et une newsletter." },
        { id: "m5", label: "Mesurer ce qui marche sur les réseaux", fait: "Elle suit les résultats et vous dit quoi refaire et quoi arrêter." },
        { id: "m6", label: "Surveiller ce que font les concurrents", fait: "Fatima suit ce que publient vos concurrents et vous en fait le résumé chaque semaine." },
        { id: "m7", label: "Travailler avec les influenceurs et partenaires", fait: "Elle prépare les briefs, suit les publications et mesure les retombées." },
        { id: "m8", label: "Préparer la communication des événements", fait: "Elle rédige textes, invitations et relances pour vos événements." },
        { id: "m9", label: "Rédiger les fiches produits et les pages du site", fait: "Fatima rédige fiches et pages, optimisées pour Google, dans votre ton." },
        { id: "m10", label: "Préparer les campagnes sponsorisées", fait: "Elle propose cibles, budget, textes et visuels, puis suit les résultats." }
      ]
    },
    {
      id: "finance", icone: "wallet", nom: "Finance et comptabilité", expert: "Mamadou", metier: "Finance et comptabilité", photo: "av-mamadou-sq.jpg",
      outils: ["Sage", "Excel", "QuickBooks", "Odoo", "Google Sheets", "Power BI", "Gmail", "SAP", "Perfecto", "Wave", "Orange Money", "MTN MoMo"],
      volume: {"question": "Combien de factures traitez-vous par mois ?", "options": ["Moins de 50", "50 à 200", "200 à 1 000", "Plus de 1 000"]},
      taches: [
        { id: "f1", label: "Relancer les factures impayées", fait: "Mamadou relance les impayés par email et WhatsApp, au bon ton, et vous montre l'état des créances." },
        { id: "f2", label: "Saisir les factures et les pièces comptables", fait: "Il lit vos factures et pièces, propose l'imputation SYSCOHADA, et vous validez." },
        { id: "f3", label: "Préparer la trésorerie et les marges", fait: "Il tient le tableau de trésorerie et de marge, et vous alerte quand un chiffre sort des clous." },
        { id: "f4", label: "Rapprocher la banque et le mobile money", fait: "Il rapproche les relevés bancaires et mobile money avec vos écritures." },
        { id: "f5", label: "Monter un dossier de financement ou bancaire", fait: "Il reconstitue le prévisionnel, prépare le plan de remboursement et livre un dossier propre." },
        { id: "f6", label: "Préparer les déclarations fiscales et la FNE", fait: "Mamadou prépare les éléments des déclarations et vérifie vos factures normalisées." },
        { id: "f7", label: "Contrôler les dépenses et les notes de frais", fait: "Il contrôle les notes de frais et les justificatifs, et signale ce qui manque." },
        { id: "f8", label: "Préparer les états pour la banque ou les actionnaires", fait: "Il prépare les états et leurs commentaires, prêts à partir après votre accord." },
        { id: "f9", label: "Préparer la clôture du mois", fait: "Mamadou prépare la clôture : écritures manquantes, rapprochements et commentaires." },
        { id: "f10", label: "Suivre les échéances fournisseurs", fait: "Il tient l'échéancier fournisseurs et vous propose le plan de paiement de la semaine." }
      ]
    },
    {
      id: "rh", icone: "users", nom: "RH et paie", expert: "Fatou", metier: "RH et paie", photo: "av-fatou-sq.jpg",
      outils: ["Excel", "Google Sheets", "Gmail", "Outlook", "WhatsApp", "Sage", "Teams", "Sage Paie", "SAP"],
      volume: {"question": "Combien de salariés gérez-vous ?", "options": ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"]},
      taches: [
        { id: "r1", label: "Répondre aux questions des salariés (congés, paie)", fait: "Fatou répond aux salariés avec le solde exact et les bons documents, en minutes au lieu de jours." },
        { id: "r2", label: "Préparer la paie et vérifier les calculs CNPS et ITS", fait: "Elle prépare les éléments de paie et vérifie les calculs selon les règles ivoiriennes." },
        { id: "r3", label: "Produire attestations et documents RH", fait: "Elle génère attestations et certificats, les fait valider et les envoie." },
        { id: "r4", label: "Suivre fins de contrat, renouvellements et entretiens", fait: "Elle suit chaque échéance et vous prévient à temps." },
        { id: "r5", label: "Accueillir les nouveaux arrivants", fait: "Elle prépare le parcours d'arrivée, les documents et les premiers repères." },
        { id: "r6", label: "Suivre les congés et les absences", fait: "Fatou tient les soldes à jour et prévient les managers des absences à venir." },
        { id: "r7", label: "Organiser les formations", fait: "Elle recense les besoins, planifie les sessions et suit les présences." },
        { id: "r8", label: "Préparer les entretiens annuels", fait: "Elle prépare les supports et relance managers et salariés." },
        { id: "r9", label: "Tenir les dossiers du personnel à jour", fait: "Fatou vérifie chaque dossier et réclame les pièces qui manquent." },
        { id: "r10", label: "Préparer les déclarations CNPS et les contrôles", fait: "Elle prépare les déclarations et rassemble les pièces en cas de contrôle." }
      ]
    },
    {
      id: "recrutement", icone: "user-search", nom: "Recrutement", expert: "Adjoua", metier: "Recrutement", photo: "av-adjoua-sq.jpg",
      outils: ["LinkedIn", "Gmail", "Outlook", "Excel", "WhatsApp", "Google Sheets", "Teams", "Emploi.ci", "Educarriere"],
      volume: {"question": "Combien de recrutements par an ?", "options": ["Moins de 5", "5 à 20", "20 à 100", "Plus de 100"]},
      taches: [
        { id: "a1", label: "Rédiger et diffuser les offres d'emploi", fait: "Adjoua rédige la fiche de poste et diffuse l'offre sur vos canaux." },
        { id: "a2", label: "Trier les CV", fait: "Elle trie les candidatures, en présélectionne cinq notées et vous dit pourquoi." },
        { id: "a3", label: "Planifier les entretiens et relancer les candidats", fait: "Elle programme les entretiens et suit chaque candidat, relances comprises." },
        { id: "a4", label: "Préparer les guides et grilles d'entretien", fait: "Elle prépare le guide d'entretien et la grille de notation du poste." },
        { id: "a5", label: "Répondre aux candidats non retenus", fait: "Elle répond à chaque candidat, au bon moment et avec le bon ton." },
        { id: "a6", label: "Chercher des profils sur LinkedIn", fait: "Adjoua repère les profils qui correspondent et prépare le message d'approche." },
        { id: "a7", label: "Tenir à jour le vivier de candidats", fait: "Elle garde le vivier vivant et ressort les bons profils au poste suivant." },
        { id: "a8", label: "Préparer les lettres d'offre et l'arrivée", fait: "Elle prépare la lettre d'offre et passe le relais à Fatou pour l'arrivée." },
        { id: "a9", label: "Faire passer et corriger les tests", fait: "Adjoua envoie les tests, les corrige et classe les candidats." },
        { id: "a10", label: "Suivre la période d'essai", fait: "Elle prépare les points d'étape et alerte avant la fin de la période d'essai." }
      ]
    },
    {
      id: "juridique", icone: "scale", nom: "Juridique et conformité", expert: "Ibrahim", metier: "Juridique et conformité", photo: "av-ibrahim-sq.jpg",
      outils: ["Google Drive", "Gmail", "Outlook", "Notion", "Teams", "DocuSign"],
      volume: {"question": "Combien de contrats actifs ?", "options": ["Moins de 20", "20 à 100", "100 à 500", "Plus de 500"]},
      taches: [
        { id: "j1", label: "Relire les contrats reçus", fait: "Ibrahim relit le contrat, pointe les clauses à risque et propose une reformulation." },
        { id: "j2", label: "Rédiger contrats et avenants", fait: "Il rédige contrats commerciaux et de travail à partir de vos modèles." },
        { id: "j3", label: "Suivre les échéances contractuelles et réglementaires", fait: "Il suit chaque échéance et vous prévient avant qu'elle tombe." },
        { id: "j4", label: "Préparer les pièces pour l'administration", fait: "Il prépare les pièces demandées par l'administration, sans oubli." },
        { id: "j5", label: "Répondre aux questions juridiques de l'équipe", fait: "Ibrahim répond aux questions courantes et vous signale ce qui demande un avocat." },
        { id: "j6", label: "Tenir le registre des contrats", fait: "Il tient le registre à jour : parties, montants, échéances et renouvellements." },
        { id: "j7", label: "Suivre la conformité (données personnelles, ARTCI)", fait: "Il suit vos obligations et prépare les déclarations." },
        { id: "j8", label: "Préparer les assemblées et les procès-verbaux", fait: "Il prépare les convocations et les procès-verbaux d'assemblée." },
        { id: "j9", label: "Préparer mises en demeure et relances contentieuses", fait: "Ibrahim rédige la mise en demeure à partir du dossier, prête à signer." },
        { id: "j10", label: "Suivre les marques et la propriété intellectuelle", fait: "Il suit les dépôts OAPI, les renouvellements et les oppositions." }
      ]
    },
    {
      id: "operations", icone: "package", nom: "Opérations, achats et logistique", expert: "Salif", metier: "Opérations et logistique", photo: "av-salif-sq.jpg",
      outils: ["Excel", "Sage", "Odoo", "WhatsApp", "Google Sheets", "Power BI", "SAP", "Zoho", "Microsoft Dynamics"],
      volume: {"question": "Combien de commandes ou de livraisons par mois ?", "options": ["Moins de 100", "100 à 1 000", "1 000 à 10 000", "Plus de 10 000"]},
      taches: [
        { id: "o1", label: "Surveiller les stocks et éviter les ruptures", fait: "Salif surveille les stocks et vous alerte avant la rupture." },
        { id: "o2", label: "Consulter et comparer les fournisseurs", fait: "Il consulte vos fournisseurs et compare les offres à conditions égales." },
        { id: "o3", label: "Préparer les bons de commande", fait: "Il prépare les bons de commande, prêts à valider." },
        { id: "o4", label: "Contrôler les livraisons et les écarts", fait: "Il contrôle les réceptions et signale chaque écart de livraison." },
        { id: "o5", label: "Produire les indicateurs de la semaine", fait: "Il vous envoie les indicateurs clés de la semaine, d'un coup d'œil." },
        { id: "o6", label: "Planifier les tournées et les livraisons", fait: "Salif prépare le planning des tournées et prévient les clients." },
        { id: "o7", label: "Suivre les équipes terrain", fait: "Il recueille les remontées du terrain, par écrit ou par vocal, et signale les écarts." },
        { id: "o8", label: "Suivre les commandes clients en cours", fait: "Il suit chaque commande, de la prise à la livraison." },
        { id: "o9", label: "Faire les inventaires", fait: "Salif prépare l'inventaire, compare avec le système et explique les écarts." },
        { id: "o10", label: "Suivre la maintenance des équipements", fait: "Il tient le planning d'entretien et relance les prestataires." }
      ]
    },
    {
      id: "data", icone: "chart-column", nom: "Données et reporting", expert: "Nadia", metier: "Data et analyse", photo: "av-nadia-sq.jpg",
      outils: ["Excel", "Google Sheets", "Power BI", "Sage", "Odoo", "Notion", "Looker Studio", "SAP"],
      volume: {"question": "Combien de rapports produisez-vous par mois ?", "options": ["Moins de 5", "5 à 20", "20 à 50", "Plus de 50"]},
      taches: [
        { id: "n1", label: "Consolider des fichiers Excel venus de partout", fait: "Nadia consolide vos fichiers et met à jour les tableaux de bord sans ressaisie." },
        { id: "n2", label: "Produire les rapports hebdo et mensuels", fait: "Elle produit vos rapports automatiquement, chaque semaine et chaque mois." },
        { id: "n3", label: "Repérer les écarts et les points de vente qui décrochent", fait: "Elle met en avant les trois alertes qui comptent." },
        { id: "n4", label: "Préparer les chiffres du comité de direction", fait: "Le comité démarre sur des faits : tableau de bord, alertes et prévision à 30 jours." },
        { id: "n5", label: "Nettoyer et dédoublonner les fichiers", fait: "Nadia nettoie vos fichiers : doublons, formats, champs vides." },
        { id: "n6", label: "Répondre aux questions sur les chiffres", fait: "Vous posez la question, Nadia répond avec le chiffre et sa source." },
        { id: "n7", label: "Prévoir les ventes des prochains mois", fait: "Elle projette vos ventes à 30 et 90 jours à partir de votre historique." },
        { id: "n8", label: "Construire un tableau de bord", fait: "Nadia construit le tableau de bord de vos indicateurs, mis à jour tout seul." },
        { id: "n9", label: "Croiser les données de plusieurs outils", fait: "Elle rapproche les chiffres de l'ERP, du CRM et des fichiers Excel." },
        { id: "n10", label: "Analyser la rentabilité par produit ou par client", fait: "Elle vous montre ce qui rapporte, ce qui coûte, et pourquoi." }
      ]
    },
    {
      id: "design", icone: "palette", nom: "Design et supports", expert: "Koffi", metier: "Design et marque", photo: "av-koffi-sq.jpg",
      outils: ["Canva", "Instagram", "Facebook", "Google Drive", "WhatsApp", "TikTok", "Figma", "Adobe"],
      volume: {"question": "Combien de visuels par mois ?", "options": ["Moins de 10", "10 à 30", "30 à 100", "Plus de 100"]},
      taches: [
        { id: "k1", label: "Produire affiches et visuels à la demande", fait: "Koffi produit l'affiche dans votre charte, prête à imprimer." },
        { id: "k2", label: "Décliner un visuel en plusieurs formats", fait: "Il décline une création en post, story, statut WhatsApp et print." },
        { id: "k3", label: "Mettre en forme présentations et documents", fait: "Il met en forme vos présentations et documents aux couleurs de la maison." },
        { id: "k4", label: "Garder la cohérence de la marque", fait: "Il vérifie chaque visuel avant publication." },
        { id: "k5", label: "Préparer les visuels des réseaux sociaux", fait: "Koffi produit les visuels de la semaine, aux bons formats." },
        { id: "k6", label: "Créer les supports commerciaux", fait: "Il met en forme plaquettes, catalogues et fiches produits." },
        { id: "k7", label: "Préparer les supports d'événements", fait: "Il décline kakémonos, badges et visuels d'événement." },
        { id: "k8", label: "Retoucher les photos produits", fait: "Koffi détoure et harmonise vos photos produits." },
        { id: "k9", label: "Créer les supports internes", fait: "Il met en forme notes de service, affiches internes et guides." },
        { id: "k10", label: "Préparer des maquettes de site ou d'application", fait: "Il propose des maquettes cliquables à partir de votre brief." }
      ]
    },
    {
      id: "investissement", icone: "hand-coins", nom: "Investissement", expert: "Alioune", metier: "Investissement", photo: "av-alioune-sq.jpg",
      outils: ["Excel", "Google Drive", "Gmail", "Outlook", "Notion", "Power BI", "DocuSign"],
      volume: {"question": "Combien de dossiers recevez-vous par mois ?", "options": ["Moins de 10", "10 à 50", "50 à 200", "Plus de 200"]},
      taches: [
        { id: "i1", label: "Trier les dossiers entrants", fait: "Alioune note chaque dossier contre votre thèse d'investissement." },
        { id: "i2", label: "Vérifier une data room et ses manques", fait: "Il inventorie les pièces et signale les manques et les incohérences." },
        { id: "i3", label: "Auditer un modèle financier", fait: "Il audite le modèle et prépare les questions à poser à la direction." },
        { id: "i4", label: "Rédiger les notes de comité", fait: "Il livre la note de comité avec les scénarios de valorisation." },
        { id: "i5", label: "Suivre les participations", fait: "Il suit les participations, la trésorerie et les alertes convenues." },
        { id: "i6", label: "Suivre les levées et les deals du marché", fait: "Alioune suit les levées et les opérations de votre secteur." },
        { id: "i7", label: "Préparer les rapports aux investisseurs", fait: "Il prépare le rapport trimestriel à vos investisseurs." },
        { id: "i8", label: "Répondre aux fondateurs non retenus", fait: "Il répond aux fondateurs dont le dossier ne passe pas, avec la raison." },
        { id: "i9", label: "Préparer term sheets et documentation", fait: "Alioune prépare la term sheet et la liste des pièces à partir de vos modèles." },
        { id: "i10", label: "Animer le pipe de deals", fait: "Il tient le pipe à jour et relance chaque dossier au bon moment." }
      ]
    }
  ]
};
