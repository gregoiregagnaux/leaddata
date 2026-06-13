/* =========================================================
   LeadData — Content model (bilingual FR/EN)
   Edit this file to manage copy & use cases.
   Future CMS plugs in here: replace LD.useCases with an API feed.
   ========================================================= */
window.LD = {
  /* ---- Interface strings. Keys map to [data-i18n] in the HTML. ---- */
  i18n: {
    "nav.approach":  { fr: "Démarche",     en: "Method" },
    "nav.expertise": { fr: "Savoir-faire", en: "Expertise" },
    "nav.cases":     { fr: "Cas d’usage",  en: "Use cases" },
    "nav.company":   { fr: "Le studio",    en: "Firm" },
    "nav.contact":   { fr: "Contact",      en: "Contact" },
    "nav.cta":       { fr: "Parler à un expert", en: "Talk to an expert" },

    "hero.eyebrow":  { fr: "Studio d’innovation Data & IA", en: "Consulting — Data-driven innovation" },
    "hero.title":    { html: true,
      fr: "Transformer la donnée<br>en produits, outils et <span class=\"accentword\">décisions</span>.",
      en: "Where data becomes<br>a <span class=\"accentword\">decision</span>." },
    "hero.lede":     { fr: "Nous transformons vos données en outils d’aide à la décision, applications métiers et services à valeur ajoutée.",
                       en: "We turn your data into actionable knowledge — to anticipate, decide and drive the performance of your next-generation digital systems." },
    "hero.cta1":     { fr: "Voir nos cas d’usage", en: "See our use cases" },
    "hero.cta2":     { fr: "Notre démarche",       en: "Our method" },
    "hero.trust":    { fr: "Studio indépendant · Data & IA · Territorialisation de l’information",
                       en: "Independent firm · Data & AI · Spatial intelligence" },

    "ticker.label":  { fr: "Nos expertises", en: "Our expertise" },
    "hero.s1n": { fr: "10+", en: "10+" },
    "hero.s1l": { fr: "années d’expertise data", en: "years of data expertise" },
    "hero.s2n": { fr: "360°", en: "360°" },
    "hero.s2l": { fr: "du cadrage à l’industrialisation", en: "from framing to production" },
    "hero.s3n": { fr: "100 %", en: "100%" },
    "hero.s3l": { fr: "solutions sur-mesure", en: "bespoke solutions" },

    "mission.eyebrow": { fr: "Notre raison d’être", en: "What we’re here for" },
    "mission.title":   { fr: "Donner du sens à la donnée.",
                         en: "Give meaning to data — and decisions to your business." },
    "mission.lede":    { fr: "La transformer en produits, outils et décisions, au service de votre croissance — cinq leviers que nous activons sur chacune de nos missions.",
                         en: "Five levers we activate on every engagement." },
    "mission.more":    { fr: "Voir le détail", en: "See details" },
    "mission.c1t": { fr: "Valoriser", en: "Unlock value" },
    "mission.c1d": { fr: "Transformer la donnée brute en connaissances exploitables.", en: "Turn raw data into actionable knowledge." },
    "mission.c1det": { fr: [
      "Identification et qualification des données disponibles et de leurs opportunités de valorisation.",
      "Nettoyage, tri et enrichissement (notamment via l’open data) des données pour en tirer les enseignements les plus pertinents." ] },
    "mission.c2t": { fr: "Anticiper", en: "Anticipate" },
    "mission.c2d": { fr: "Augmenter les capacités d’analyse pour mieux prédire et anticiper.", en: "Boost analytical power for sharper prediction and foresight." },
    "mission.c2det": { fr: [
      "Identification de projets et évaluation amont et aval de leur ROI.",
      "Création de méthodes, d’algorithmes et/ou de solutions sur mesure pour vos problématiques et vos métiers.",
      "Accompagnement méthodologique sur la modélisation et la structuration de SI." ] },
    "mission.c3t": { fr: "Performer", en: "Perform" },
    "mission.c3d": { fr: "Améliorer la performance des dispositifs digitaux de nouvelle génération.", en: "Improve the performance of next-generation digital systems." },
    "mission.c3det": { fr: [
      "Intégration et connexion de ces développements dans vos ERP, CRM et outils métiers.",
      "Pilotage de projets innovants, avec des approches et méthodes éprouvées selon vos problématiques, vos besoins et vos équipes." ] },
    "mission.c4t": { fr: "Construire", en: "Build" },
    "mission.c4d": { fr: "Bâtir les écosystèmes et les cas d’usage adaptés à votre contexte.", en: "Design the ecosystems and use cases that fit your context." },
    "mission.c4det": { fr: [
      "Mise à disposition d’outils, méthodes et architectures décisionnelles pour évaluer, scénariser, objectiver et piloter vos prises de décision.",
      "Visualisation et transmission de l’information — graphiques, tableaux de bord, rapports automatiques, cartographies… — pour rendre vos données compréhensibles et utiles au quotidien des équipes.",
      "Développement d’outils d’échange et de mise à disposition de l’information.",
      "Définition, création, suivi et optimisation de nouveaux indicateurs / KPI." ] },
    "mission.c5t": { fr: "Faire évoluer", en: "Evolve" },
    "mission.c5d": { fr: "Optimiser et faire évoluer vos architectures décisionnelles.", en: "Optimise and evolve your decision-making architectures." },
    "mission.c5det": { fr: [
      "Accompagnement au changement, gouvernance de la donnée et formation : un projet d’innovation par la donnée ne porte ses fruits qu’une fois intégré aux process existants et accepté par les équipes.",
      "Création d’une autonomie décisionnelle, intégrée à la politique de gouvernance de la donnée de l’entreprise." ] },

    "method.eyebrow": { fr: "Notre démarche", en: "Our method" },
    "method.title":   { fr: "Un accompagnement de bout en bout, du besoin à l’industrialisation.",
                        en: "End-to-end support, from first intuition to production." },
    "method.lede":    { fr: "Quatre phases, une même exigence : répondre à un besoin métier réel.",
                        en: "Four phases, one constant: solving a real business need." },
    "method.s1p": { fr: "Cadrage", en: "Framing" },
    "method.s1t": { fr: "Cadrage & Design Sprint", en: "Framing & Design Sprint" },
    "method.s1dur": { fr: "1 à 2 semaines", en: "1–2 weeks" },
    "method.s1d": { fr: "Analyse des métiers concernés, ciblage des besoins et construction des cas d’usage et écosystèmes adaptés.",
                    en: "Analysis of the business lines involved, needs targeting, and design of the right use cases and ecosystems." },
    "method.s1det": { fr: [
      "Échanges avec les acteurs de la chaîne (Métiers et DSI) : modes de fonctionnement, outils utilisés, données associées…" ] },
    "method.s2p": { fr: "Faisabilité & ROI", en: "Feasibility & ROI" },
    "method.s2t": { fr: "Preuve de concept & ROI", en: "Proof of Concept & ROI" },
    "method.s2dur": { fr: "4 à 6 semaines", en: "4–6 weeks" },
    "method.s2d": { fr: "Étude de faisabilité : le « cerveau » de la solution (état des lieux, modélisation, prédiction, machine learning) et la restitution de l’information.",
                    en: "Feasibility study: the “brain” of the solution (data audit, modelling, prediction, machine learning) and the way information is surfaced." },
    "method.s2det": { fr: [
      "Schématisation croisée des processus fonctionnel / Data / S.I.",
      "Recensement des opportunités offertes par l’exploitation de la Data, via cette schématisation croisée.",
      "Évaluation multicritère des opportunités : gisements d’économies (financières et de temps), alignement avec les enjeux métiers et stratégiques, difficulté de développement et de déploiement.",
      "Évaluation de l’incertitude d’atteinte des objectifs." ] },
    "method.s3p": { fr: "Build", en: "Build" },
    "method.s3t": { fr: "Industrialisation & mise en production", en: "Industrialisation & production" },
    "method.s3dur": { fr: "1 à 6 mois", en: "1–6 months" },
    "method.s3d": { fr: "Développement et mise en production de la solution finale, intégrée à votre système d’information.",
                    en: "Development and production roll-out of the final solution, integrated into your information system." },
    "method.s3det": { fr: [
      "Le temps — et donc le prix — de la mission dépendent de la complexité et de l’étendue de la problématique adressée." ] },
    "method.s4p": { fr: "Adoption", en: "Adoption" },
    "method.s4t": { fr: "Formation, adoption & maintenance", en: "Training, adoption & support" },
    "method.s4dur": { fr: "1 mois", en: "1 month" },
    "method.s4d": { fr: "Formation et accompagnement à l’utilisation des outils et des méthodes, pour un usage durable au quotidien de vos équipes.",
                    en: "Training and change support on the tools and methods, for lasting day-to-day adoption." },
    "method.s4det": { fr: [
      "Support technique et assistance dédiée à votre disposition.",
      "Un suivi réactif pour tout ajustement ou question, qui continue de maximiser votre performance dans le temps." ] },

    "distinct.eyebrow": { fr: "Ce qui nous distingue", en: "What sets us apart" },
    "distinct.title":   { fr: "Une signature : le besoin d’abord, la technologie ensuite.",
                          en: "Our signature: the need first, technology second." },
    "distinct.d1t": { fr: "Une approche orientée besoin", en: "A need-first approach" },
    "distinct.d1d": { fr: "Notre expertise s’est construite autour de l’accompagnement et de la planification. La technologie n’est jamais une finalité, seulement un moyen au service de vos métiers.",
                      en: "Our expertise was built around guidance and planning. Technology is never an end in itself — only a means serving your business." },
    "distinct.d2t": { fr: "La territorialisation de l’information", en: "Spatial intelligence" },
    "distinct.d2d": { fr: "Spatialiser l’information est un levier puissant : analyse de phénomènes, ciblage, data visualisation. C’est l’une de nos signatures fortes.",
                      en: "Putting information on the map is a powerful lever: phenomenon analysis, targeting, data visualisation. It’s one of our strongest signatures." },
    "distinct.d3t": { fr: "La maîtrise des données publiques", en: "Mastery of open data" },
    "distinct.d3d": { fr: "Des années à exploiter — et parfois construire — ce gisement de connaissances nous permettent de valoriser, directement ou en enrichissement, son plein potentiel.",
                      en: "Years spent using — and sometimes building — this knowledge base let us harness its full potential, directly or to enrich your own data." },

    "know.eyebrow": { fr: "Notre savoir-faire", en: "Our expertise" },
    "know.title":   { fr: "Un spectre complet de compétences, sur toute la chaîne de la donnée.",
                      en: "A full spectrum of skills, across the entire data chain." },
    "know.k1t": { fr: "Pilotage de projets innovants", en: "Innovation project delivery" },
    "know.k1d": { fr: "Des méthodes agiles éprouvées sur une multitude de projets novateurs, adaptées à vos équipes.",
                  en: "Agile methods proven across many pioneering projects, tailored to your teams." },
    "know.k2t": { fr: "Traitement & modélisation", en: "Processing & modelling" },
    "know.k2d": { fr: "Big Data, machine learning et consulting digital pour des environnements et outils sur-mesure.",
                  en: "Big Data, machine learning and digital consulting for bespoke environments and tools." },
    "know.k3t": { fr: "Visualisation & transmission", en: "Visualisation & delivery" },
    "know.k3d": { fr: "Tableaux de bord, cartographies, rapports automatisés et applications web qui font parler la donnée.",
                  en: "Dashboards, maps, automated reports and web apps that make data speak." },
    "know.k4t": { fr: "Formation & gouvernance", en: "Training & governance" },
    "know.k4d": { fr: "Accompagnement au changement et politique de gouvernance pour ancrer durablement les usages.",
                  en: "Change support and governance to embed new practices for the long run." },
    "know.stackt": { fr: "Une boîte à outils maîtrisée", en: "A toolkit we’ve mastered" },
    "know.stackd": { fr: "Nous sélectionnons la bonne technologie pour chaque problème — jamais l’inverse.",
                     en: "We pick the right technology for each problem — never the other way round." },
    "know.lbl1": { fr: "Données", en: "Databases" },
    "know.lbl2": { fr: "Analyse & modélisation", en: "Analysis & modelling" },
    "know.lbl3": { fr: "Visualisation", en: "Visualisation" },

    "cases.eyebrow": { fr: "Cas d’usage clients", en: "Client use cases" },
    "cases.title":   { fr: "La donnée à l’œuvre, sur le terrain.", en: "Data at work, in the field." },
    "cases.lede":    { fr: "Une sélection de projets — du ciblage territorial à la prédiction opérationnelle.",
                       en: "A selection of projects — from spatial targeting to operational prediction." },
    "cases.all":     { fr: "Tous", en: "All" },
    "cases.more":    { fr: "Lire le cas", en: "Read case" },
    "cases.draft":   { fr: "En construction", en: "In progress" },
    "cases.draftBody": { fr: "Cas client en cours de rédaction — contenu à venir.", en: "Case study in progress — content coming soon." },
    "cases.challenge": { fr: "Le défi", en: "The challenge" },
    "cases.approach":  { fr: "Notre approche", en: "Our approach" },
    "cases.result":    { fr: "Le résultat", en: "The outcome" },

    "clients.title": { fr: "Ils nous font confiance", en: "Trusted by teams who decide with data" },

    "company.eyebrow": { fr: "Le cabinet", en: "The firm" },
    "company.title":   { fr: "Une structure indépendante, à taille humaine, exigeante sur la donnée.",
                         en: "An independent, human-scale firm, uncompromising about data." },
    "company.p1": { fr: "LeadData est né de la conviction qu’un projet data ne porte ses fruits que s’il part d’un besoin métier réel et s’intègre dans les usages quotidiens des équipes.",
                    en: "LeadData was born from one conviction: a data project only bears fruit when it starts from a real business need and fits into teams’ daily routines." },
    "company.p2": { fr: "Nous cultivons une approche artisanale et rigoureuse — proximité, sur-mesure et transmission — au service de la performance de nos clients.",
                    en: "We cultivate a rigorous, craftsmanlike approach — closeness, bespoke work and knowledge transfer — in service of our clients’ performance." },
    "company.f1n": { fr: "2", en: "2" },
    "company.f1l": { fr: "associés fondateurs", en: "founding partners" },
    "company.f2n": { fr: "Public & privé", en: "Public & private" },
    "company.f2l": { fr: "collectivités, industrie, services", en: "public sector, industry, services" },
    "company.f3n": { fr: "France", en: "France" },
    "company.f3l": { fr: "interventions sur tout le territoire", en: "engagements nationwide" },
    "company.team": { fr: "Les associés fondateurs", en: "The founding partners" },
    "member.read": { fr: "Lire le parcours", en: "Read full bio" },

    "m1.name": { fr: "Jacques Dufossé", en: "Jacques Dufossé" },
    "m1.role": { fr: "Cofondateur · Développement & stratégie", en: "Co-founder · Development & strategy" },
    "m1.bio":  { fr: "Plus de 25 ans à la croisée de la planification énergétique territoriale, des politiques publiques climat et de la communication High Tech.",
                 en: "25+ years at the crossroads of territorial energy planning, public climate policy and High-Tech communication." },
    "m1.bioFull": {
      fr: [
        "Jacques a été, pendant une dizaine d’années, directeur du développement d’un bureau d’études spécialisé dans la planification énergétique territoriale et dans la mise en œuvre opérationnelle de politiques publiques de réduction des consommations d’énergie et de lutte contre le changement climatique.",
        "Il a auparavant travaillé durant 15 ans chez INEDIT, agence de communication tout média spécialisée dans l’accompagnement de sociétés High Tech, dont il était gérant fondateur (EDS, Siemens, Unigraphics Solutions, Aveva, Ansys, Air France Industrie, Xerox, Kodak).",
        "Il a par ailleurs été directeur général des éditions Vivendi, éditeur de France Implantations — annuaire traitant de la délocalisation et de l’aménagement du territoire en collaboration avec la DATAR."
      ],
      en: [
        "For about ten years, Jacques was head of development at a consultancy specialised in territorial energy planning and in the operational roll-out of public policies to reduce energy consumption and fight climate change.",
        "Before that, he spent 15 years at INEDIT, a full-media communication agency dedicated to High-Tech companies, where he was founder and managing director (EDS, Siemens, Unigraphics Solutions, Aveva, Ansys, Air France Industrie, Xerox, Kodak).",
        "He was also general manager of Vivendi’s publishing arm, editor of France Implantations — a directory covering relocation and regional planning, in partnership with the DATAR."
      ]
    },
    "m1.orgs": { fr: ["Siemens","Aveva","Ansys","Air France Industrie","DATAR"], en: ["Siemens","Aveva","Ansys","Air France Industrie","DATAR"] },

    "m2.name": { fr: "Jean-Baptiste Biau", en: "Jean-Baptiste Biau" },
    "m2.role": { fr: "Cofondateur · Modélisation & data", en: "Co-founder · Modelling & data" },
    "m2.bio":  { fr: "Ingénieur civil des Mines de Nancy. Dix ans à diriger un pôle Modélisation — ingénieurs, data analysts, SI territorial — pour de grands acteurs de l’énergie et du secteur public.",
                 en: "Mines de Nancy civil engineer. Ten years leading a Modelling division — engineers, data analysts, territorial IS — for major energy and public-sector players." },
    "m2.bioFull": {
      fr: [
        "Ingénieur civil des Mines de Nancy diplômé en 2007, Jean-Baptiste a travaillé pendant près de dix ans dans un bureau d’études qu’il avait rejoint à la fin de ses études.",
        "Il y a accompagné la croissance de l’entreprise, débutant comme chargé d’études pour devenir Coordinateur du pôle Modélisation — composé d’ingénieurs, de data analysts et d’informaticiens en charge du développement des méthodes et outils de modélisation ainsi que du SI territorial interne.",
        "Comme chef puis directeur de projet, il a travaillé pour et avec de nombreuses organisations : ENEDIS, EDF, ENGIE, GRDF, ADEME, Mairie de Paris, régies de distribution d’électricité, ministères, SENELEC, La Poste, Mines ParisTech, CEA…"
      ],
      en: [
        "A Mines de Nancy civil engineer (class of 2007), Jean-Baptiste spent nearly ten years at a consultancy he joined straight out of school.",
        "He supported the firm’s growth, starting as a study engineer and becoming Coordinator of the Modelling division — engineers, data analysts and developers in charge of modelling methods and tools, and of the in-house territorial information system.",
        "As project lead and then project director, he worked for and with many organisations: ENEDIS, EDF, ENGIE, GRDF, ADEME, City of Paris, electricity distribution utilities, ministries, SENELEC, La Poste, Mines ParisTech, CEA…"
      ]
    },
    "m2.orgs": { fr: ["ENEDIS","EDF","ENGIE","GRDF","ADEME","Mairie de Paris","CEA"], en: ["ENEDIS","EDF","ENGIE","GRDF","ADEME","City of Paris","CEA"] },

    "contact.eyebrow": { fr: "Parlons-en", en: "Let’s talk" },
    "contact.title":   { fr: "Un projet de données ? Donnons-lui du sens.", en: "Got a data project? Let’s give it meaning." },
    "contact.p":       { fr: "Décrivez-nous votre besoin. Nous revenons vers vous sous 48 h pour en discuter, sans engagement.",
                         en: "Tell us about your need. We’ll get back to you within 48h to discuss it, no strings attached." },
    "contact.cta":     { fr: "Démarrer la conversation", en: "Start the conversation" },
    "contact.email":   { fr: "contact@leaddata.fr", en: "contact@leaddata.fr" },
    "contact.loc":     { fr: "France · à distance & sur site", en: "France · remote & on-site" },

    "footer.tag": { fr: "La donnée donne naissance à l’information.", en: "Data gives rise to information." },
    "footer.nav": { fr: "Navigation", en: "Navigate" },
    "footer.address": { fr: "Adresse", en: "Address" },
    "footer.legal": { fr: "Mentions légales", en: "Legal notice" },
    "footer.privacy": { fr: "Confidentialité", en: "Privacy" },
    "footer.rights": { fr: "© 2026 LeadData. Tous droits réservés.", en: "© 2026 LeadData. All rights reserved." },
    "footer.made": { fr: "Conçu autour de la donnée.", en: "Designed around data." }
  },

  /* ---- Use cases : the editable content collection (CMS-ready) ---- */
  categories: [
    { key: "predictif",    fr: "Prédictif",       en: "Predictive" },
    { key: "optimisation", fr: "Optimisation",    en: "Optimisation" },
    { key: "outils",       fr: "Outils métiers",  en: "Business tools" },
    { key: "modelisation", fr: "Modélisation",    en: "Modelling" },
    { key: "conseil",      fr: "Conseil & Étude", en: "Advisory & Study" },
    { key: "dataviz",      fr: "Data Viz",        en: "Data Viz" }
  ],

  /* ---- Cas clients réels. draft:true = contenu à construire (slides à venir).
     Champs optionnels gérés par le rendu : summary, tags, metric, metrics, challenge, approach, result. ---- */
  useCases: [
    { id: "saint-gobain", category: "predictif", glyph: "gauge", draft: true, slide: 9,
      title: { fr: "Saint-Gobain", en: "Saint-Gobain" } },
    { id: "enedis-elagage", category: "optimisation", glyph: "route", draft: true, slide: 16,
      title: { fr: "Enedis — Élagage", en: "Enedis — Vegetation management" } },
    { id: "saur-energie", category: "optimisation", glyph: "pulse", draft: true, slide: 21,
      title: { fr: "SAUR — Énergie", en: "SAUR — Energy" } },
    { id: "kalhyge-sdd", category: "optimisation", glyph: "map", draft: true, slide: 20,
      title: { fr: "KALHYGE — Schéma directeur", en: "KALHYGE — Master plan" } },
    { id: "ubaldi-dior-caft", category: "outils", glyph: "layers", draft: true, slide: 10,
      title: { fr: "UBALDI & Dior — CAFT", en: "UBALDI & Dior — CAFT" } },
    { id: "ubaldi-nestor", category: "outils", glyph: "gauge", draft: true, slide: 13,
      title: { fr: "UBALDI — Nestor", en: "UBALDI — Nestor" } },
    { id: "modelabs", category: "outils", glyph: "target", draft: true, slide: "11-12",
      title: { fr: "Modelabs", en: "Modelabs" } },
    { id: "cerema-strateau", category: "modelisation", glyph: "layers", draft: true, slide: 14,
      title: { fr: "CEREMA — STRATEAU", en: "CEREMA — STRATEAU" } },
    { id: "transports-ecolabel", category: "conseil", glyph: "target", draft: true, slide: 18,
      title: { fr: "Min. des Transports — Écolabel", en: "Ministry of Transport — Ecolabel" } },
    { id: "europcar-roadmap", category: "conseil", glyph: "route", draft: true, slide: 22,
      title: { fr: "Europcar — Road Map Data", en: "Europcar — Data Road Map" } },
    { id: "samsung-data", category: "conseil", glyph: "map", draft: true, slide: 19,
      title: { fr: "Samsung — Valorisation Data", en: "Samsung — Data valorisation" } },
    { id: "le-phare-territoires", category: "dataviz", glyph: "pulse", draft: true, slide: 15,
      title: { fr: "Le Phare — Analyses territoriales", en: "Le Phare — Territorial analytics" } }
  ],

  /* placeholder client names for the marquee */
  clients: ["Nordia","Vireo","Atlas Métropole","Helix","Cairn","Méridien","Polaris","Steralis","Onéo","Verdant"],

  /* ---- Bandeau « Nos expertises » (ticker hero→mission). Liste curée : think → build → run. ---- */
  expertise: {
    fr: ["Data","IA","Audit","Roadmap","MVP","Applications métiers","Automatisation","Déploiement","Performance","Maintenance","Scalabilité"]
  }
};
