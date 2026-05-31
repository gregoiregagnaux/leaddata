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
    "nav.company":   { fr: "Cabinet",      en: "Firm" },
    "nav.contact":   { fr: "Contact",      en: "Contact" },
    "nav.cta":       { fr: "Parler à un expert", en: "Talk to an expert" },

    "hero.eyebrow":  { fr: "Conseil — Innovation par la donnée", en: "Consulting — Data-driven innovation" },
    "hero.title":    { html: true,
      fr: "De la donnée<br>naît la <span class=\"accentword\">décision</span>.",
      en: "Where data becomes<br>a <span class=\"accentword\">decision</span>." },
    "hero.lede":     { fr: "Nous transformons vos données en connaissances exploitables — pour anticiper, décider et faire performer vos dispositifs digitaux de nouvelle génération.",
                       en: "We turn your data into actionable knowledge — to anticipate, decide and drive the performance of your next-generation digital systems." },
    "hero.cta1":     { fr: "Voir nos cas d’usage", en: "See our use cases" },
    "hero.cta2":     { fr: "Notre démarche",       en: "Our method" },
    "hero.trust":    { fr: "Cabinet indépendant · Data & IA · Territorialisation de l’information",
                       en: "Independent firm · Data & AI · Spatial intelligence" },
    "hero.s1n": { fr: "10+", en: "10+" },
    "hero.s1l": { fr: "années d’expertise data", en: "years of data expertise" },
    "hero.s2n": { fr: "360°", en: "360°" },
    "hero.s2l": { fr: "du cadrage à l’industrialisation", en: "from framing to production" },
    "hero.s3n": { fr: "100 %", en: "100%" },
    "hero.s3l": { fr: "solutions sur-mesure", en: "bespoke solutions" },

    "mission.eyebrow": { fr: "Notre raison d’être", en: "What we’re here for" },
    "mission.title":   { fr: "Donner du sens à la donnée, et de la donnée à la décision.",
                         en: "Give meaning to data — and decisions to your business." },
    "mission.lede":    { fr: "Cinq leviers que nous activons sur chacune de nos missions.",
                         en: "Five levers we activate on every engagement." },
    "mission.c1t": { fr: "Valoriser", en: "Unlock value" },
    "mission.c1d": { fr: "Transformer la donnée brute en connaissances exploitables.", en: "Turn raw data into actionable knowledge." },
    "mission.c2t": { fr: "Anticiper", en: "Anticipate" },
    "mission.c2d": { fr: "Augmenter les capacités d’analyse pour mieux prédire et anticiper.", en: "Boost analytical power for sharper prediction and foresight." },
    "mission.c3t": { fr: "Performer", en: "Perform" },
    "mission.c3d": { fr: "Améliorer la performance des dispositifs digitaux de nouvelle génération.", en: "Improve the performance of next-generation digital systems." },
    "mission.c4t": { fr: "Construire", en: "Build" },
    "mission.c4d": { fr: "Bâtir les écosystèmes et les cas d’usage adaptés à votre contexte.", en: "Design the ecosystems and use cases that fit your context." },
    "mission.c5t": { fr: "Faire évoluer", en: "Evolve" },
    "mission.c5d": { fr: "Optimiser et faire évoluer vos architectures décisionnelles.", en: "Optimise and evolve your decision-making architectures." },

    "method.eyebrow": { fr: "Notre démarche", en: "Our method" },
    "method.title":   { fr: "Un accompagnement de bout en bout, de l’intuition à l’industrialisation.",
                        en: "End-to-end support, from first intuition to production." },
    "method.lede":    { fr: "Quatre phases, une même exigence : répondre à un besoin métier réel.",
                        en: "Four phases, one constant: solving a real business need." },
    "method.s1p": { fr: "Phase 01 · Cadrage", en: "Phase 01 · Framing" },
    "method.s1t": { fr: "Cadrage & Design Sprint", en: "Framing & Design Sprint" },
    "method.s1d": { fr: "Analyse des métiers concernés, ciblage des besoins et construction des cas d’usage et écosystèmes adaptés.",
                    en: "Analysis of the business lines involved, needs targeting, and design of the right use cases and ecosystems." },
    "method.s2p": { fr: "Phase 02 · POC", en: "Phase 02 · POC" },
    "method.s2t": { fr: "Preuve de concept", en: "Proof of Concept" },
    "method.s2d": { fr: "Étude de faisabilité : le « cerveau » de la solution (état des lieux, modélisation, prédiction, machine learning) et la restitution de l’information.",
                    en: "Feasibility study: the “brain” of the solution (data audit, modelling, prediction, machine learning) and the way information is surfaced." },
    "method.s3p": { fr: "Phase 03 · Build", en: "Phase 03 · Build" },
    "method.s3t": { fr: "Industrialisation", en: "Industrialisation" },
    "method.s3d": { fr: "Développement et mise en production de la solution finale, intégrée à votre système d’information.",
                    en: "Development and production roll-out of the final solution, integrated into your information system." },
    "method.s4p": { fr: "Phase 04 · Adoption", en: "Phase 04 · Adoption" },
    "method.s4t": { fr: "Formation & adoption", en: "Training & adoption" },
    "method.s4d": { fr: "Formation et accompagnement à l’utilisation des outils et des méthodes, pour un usage durable au quotidien.",
                    en: "Training and change support on the tools and methods, for lasting day-to-day adoption." },

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
  sectors: [
    { key: "public",    fr: "Secteur public", en: "Public sector" },
    { key: "retail",    fr: "Retail",         en: "Retail" },
    { key: "industrie", fr: "Industrie",      en: "Industry" },
    { key: "mobilite",  fr: "Mobilité",       en: "Mobility" },
    { key: "assurance", fr: "Assurance",      en: "Insurance" }
  ],
  useCases: [
    {
      id: "logement",
      sector: "public",
      glyph: "map",
      title: { fr: "Cartographie prédictive des besoins en logement", en: "Predictive mapping of housing needs" },
      summary: { fr: "Un modèle territorial pour anticiper la demande et orienter la politique de l’habitat.",
                 en: "A territorial model to anticipate demand and steer housing policy." },
      tags: [ {fr:"Territorialisation",en:"Spatial"}, {fr:"Prédiction",en:"Prediction"}, {fr:"Données publiques",en:"Open data"} ],
      metric: { v: "−30 %", k: { fr: "de délais d’étude", en: "study lead time" } },
      metrics: [
        { v: "−30 %", k: { fr: "délais d’étude", en: "study lead time" } },
        { v: "12", k: { fr: "indicateurs croisés", en: "blended indicators" } },
        { v: "1", k: { fr: "carte décisionnelle", en: "decision map" } }
      ],
      challenge: { fr: "Une collectivité devait prioriser ses investissements logement sans vision consolidée et prospective des besoins à l’échelle des quartiers.",
                   en: "A local authority had to prioritise housing investment without a consolidated, forward-looking view of needs at neighbourhood scale." },
      approach: { fr: "Croisement de données publiques (INSEE, fiscalité, permis) et propriétaires, modélisation prédictive, puis restitution sur une cartographie interactive.",
                  en: "We blended open data (census, tax, permits) with proprietary sources, built a predictive model, and surfaced it on an interactive map." },
      result: { fr: "Des arbitrages plus rapides et défendables, fondés sur une lecture spatiale claire de la demande à 3 ans.",
                en: "Faster, defensible trade-offs grounded in a clear spatial reading of 3-year demand." }
    },
    {
      id: "tournees",
      sector: "public",
      glyph: "route",
      title: { fr: "Optimisation des tournées de collecte", en: "Waste-collection route optimisation" },
      summary: { fr: "Réduire les kilomètres et l’empreinte carbone d’un service de collecte à l’échelle d’une agglomération.",
                 en: "Cut mileage and carbon footprint of a metro-area collection service." },
      tags: [ {fr:"Optimisation",en:"Optimisation"}, {fr:"Opérations",en:"Operations"}, {fr:"Cartographie",en:"Mapping"} ],
      metric: { v: "+18 %", k: { fr: "d’efficacité opérationnelle", en: "operational efficiency" } },
      metrics: [
        { v: "+18 %", k: { fr: "efficacité", en: "efficiency" } },
        { v: "−14 %", k: { fr: "kilomètres parcourus", en: "distance driven" } },
        { v: "−1.2 t", k: { fr: "CO₂ / mois", en: "CO₂ / month" } }
      ],
      challenge: { fr: "Des tournées historiques figées, coûteuses et difficiles à faire évoluer face à l’urbanisation.",
                   en: "Legacy routes, frozen, costly and hard to adapt to urban growth." },
      approach: { fr: "Modélisation du réseau, algorithme d’optimisation sous contraintes (volumes, créneaux, flotte) et simulation de scénarios.",
                  en: "Network modelling, constrained optimisation (volumes, time windows, fleet) and scenario simulation." },
      result: { fr: "Des tournées recalculées, un service plus régulier et des économies réinvesties dans la qualité.",
                en: "Recomputed routes, a steadier service and savings reinvested in quality." }
    },
    {
      id: "ciblage",
      sector: "retail",
      glyph: "target",
      title: { fr: "Ciblage territorial d’une offre commerciale", en: "Spatial targeting of a retail offer" },
      summary: { fr: "Localiser les zones à plus fort potentiel pour un déploiement commercial maîtrisé.",
                 en: "Pinpoint the highest-potential areas for a controlled commercial roll-out." },
      tags: [ {fr:"Géomarketing",en:"Geomarketing"}, {fr:"Données publiques",en:"Open data"}, {fr:"Scoring",en:"Scoring"} ],
      metric: { v: "×2,4", k: { fr: "taux de conversion local", en: "local conversion rate" } },
      metrics: [
        { v: "×2,4", k: { fr: "conversion locale", en: "local conversion" } },
        { v: "9", k: { fr: "variables de potentiel", en: "potential variables" } },
        { v: "Top 5 %", k: { fr: "zones priorisées", en: "areas prioritised" } }
      ],
      challenge: { fr: "Un réseau souhaitait concentrer ses efforts marketing là où le potentiel réel — et non supposé — était le plus fort.",
                   en: "A retail network wanted to focus marketing where real — not assumed — potential was highest." },
      approach: { fr: "Construction d’un score de potentiel par maille géographique, enrichi de données socio-démographiques publiques.",
                  en: "We built a potential score per geographic cell, enriched with public socio-demographic data." },
      result: { fr: "Un déploiement concentré sur les meilleures zones et un coût d’acquisition divisé par deux.",
                en: "A roll-out focused on the best areas and acquisition cost halved." }
    },
    {
      id: "dashboard",
      sector: "industrie",
      glyph: "gauge",
      title: { fr: "Tableau de bord décisionnel temps réel", en: "Real-time decision dashboard" },
      summary: { fr: "Une vue unique et fiable pour piloter la production au fil de l’eau.",
                 en: "A single, reliable view to steer production on the fly." },
      tags: [ {fr:"Data viz",en:"Data viz"}, {fr:"Temps réel",en:"Real time"}, {fr:"Gouvernance",en:"Governance"} ],
      metric: { v: "×5", k: { fr: "rapidité de décision", en: "faster decisions" } },
      metrics: [
        { v: "×5", k: { fr: "rapidité de décision", en: "faster decisions" } },
        { v: "1", k: { fr: "source de vérité", en: "source of truth" } },
        { v: "24/7", k: { fr: "supervision", en: "monitoring" } }
      ],
      challenge: { fr: "Des données dispersées dans plusieurs systèmes, des reportings manuels et des décisions tardives.",
                   en: "Data scattered across systems, manual reporting and late decisions." },
      approach: { fr: "Mise en place d’un S.I. décisionnel dédié, constitution d’indicateurs et interfaces de restitution temps réel.",
                  en: "We set up a dedicated decision-support system, defined KPIs and built real-time delivery interfaces." },
      result: { fr: "Des équipes alignées sur une même réalité chiffrée et des décisions prises en heures, plus en jours.",
                en: "Teams aligned on the same numbers, decisions made in hours rather than days." }
    },
    {
      id: "scoring",
      sector: "assurance",
      glyph: "layers",
      title: { fr: "Enrichissement de données clients par données publiques", en: "Customer data enrichment via open data" },
      summary: { fr: "Affiner la connaissance client et la précision du scoring sans collecter davantage.",
                 en: "Sharpen customer knowledge and scoring precision without collecting more." },
      tags: [ {fr:"Enrichissement",en:"Enrichment"}, {fr:"Machine learning",en:"Machine learning"}, {fr:"Données publiques",en:"Open data"} ],
      metric: { v: "+22 %", k: { fr: "de précision de scoring", en: "scoring precision" } },
      metrics: [
        { v: "+22 %", k: { fr: "précision scoring", en: "scoring precision" } },
        { v: "40+", k: { fr: "variables ajoutées", en: "variables added" } },
        { v: "0", k: { fr: "donnée perso. ajoutée", en: "extra personal data" } }
      ],
      challenge: { fr: "Un modèle de scoring limité par la profondeur des données disponibles en interne.",
                   en: "A scoring model capped by the depth of available in-house data." },
      approach: { fr: "Enrichissement par données publiques territorialisées, sélection de variables et ré-entraînement du modèle.",
                  en: "Enrichment with territorialised open data, feature selection and model retraining." },
      result: { fr: "Un scoring nettement plus précis, dans le respect strict de la donnée personnelle.",
                en: "A markedly sharper score, with strict respect for personal data." }
    },
    {
      id: "mobilite",
      sector: "mobilite",
      glyph: "pulse",
      title: { fr: "Observatoire de la mobilité urbaine", en: "Urban mobility observatory" },
      summary: { fr: "Réunir des sources hétérogènes en un observatoire partagé entre services.",
                 en: "Bring heterogeneous sources together into an observatory shared across departments." },
      tags: [ {fr:"Territorialisation",en:"Spatial"}, {fr:"Data viz",en:"Data viz"}, {fr:"Écosystème",en:"Ecosystem"} ],
      metric: { v: "1", k: { fr: "source pour 12 services", en: "source for 12 teams" } },
      metrics: [
        { v: "12", k: { fr: "services connectés", en: "teams connected" } },
        { v: "6", k: { fr: "sources unifiées", en: "sources unified" } },
        { v: "Live", k: { fr: "cartographie", en: "mapping" } }
      ],
      challenge: { fr: "Chaque service disposait de ses propres chiffres, sans langage commun pour piloter la mobilité.",
                   en: "Each department had its own figures, with no common language to steer mobility." },
      approach: { fr: "Unification des sources, modèle de données partagé et cartographie dynamique accessible à tous.",
                  en: "Source unification, a shared data model and a dynamic map accessible to all." },
      result: { fr: "Un observatoire commun qui aligne les services et fluidifie la décision publique.",
                en: "A shared observatory that aligns departments and smooths public decision-making." }
    }
  ],

  /* placeholder client names for the marquee */
  clients: ["Nordia","Vireo","Atlas Métropole","Helix","Cairn","Méridien","Polaris","Steralis","Onéo","Verdant"]
};
