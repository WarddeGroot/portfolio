/* ============================================
   Ward de Groot — Portfolio
   Internationalization (i18n) — EN / NL
   ============================================ */

const translations = {

  // ── Navigation ──────────────────────────────
  'nav.home':           { en: 'Home',         nl: 'Home' },
  'nav.work':           { en: 'My work',      nl: 'Mijn werk' },
  'nav.about':          { en: 'About me',     nl: 'Over mij' },
  'nav.cv':             { en: 'CV',           nl: 'CV' },
  'nav.cta':            { en: 'Get in touch', nl: 'Neem contact op' },

  // ── Footer ──────────────────────────────────
  'footer.prompts':     { en: 'prompts built<br>this portfolio', nl: 'prompts gebruikt voor<br>dit portfolio' },
  'footer.updated':     { en: 'Last updated: April 2026', nl: 'Laatst bijgewerkt: april 2026' },
  'footer.copy':        { en: '&copy; 2026 Ward de Groot', nl: '&copy; 2026 Ward de Groot' },

  // ── Homepage ────────────────────────────────
  'home.title':         { en: 'Ward de Groot — UX / Product Designer', nl: 'Ward de Groot — UX / Product Designer' },
  'home.meta':          { en: 'Portfolio of Ward de Groot — UX / Product Designer who thinks in systems, not just screens.', nl: 'Portfolio van Ward de Groot — UX / Product Designer die denkt in systemen, niet alleen schermen.' },

  // Greeting (set dynamically in main.js)
  'home.greeting.morning':   { en: 'Good morning',   nl: 'Goedemorgen' },
  'home.greeting.afternoon': { en: 'Good afternoon', nl: 'Goedemiddag' },
  'home.greeting.evening':   { en: 'Good evening',   nl: 'Goedenavond' },

  // Hero statements
  'home.hero.1':        { en: 'I go where the problem needs me.', nl: 'Ik sta waar het probleem zit.' },
  'home.hero.2':        { en: 'I think in systems, not just screens.', nl: 'Ik denk in systemen, niet alleen schermen.' },
  'home.hero.3':        { en: 'I leave things better than I found them.', nl: 'Ik laat dingen beter achter dan ik ze vind.' },

  // Hero card
  'home.heroCard.name': { en: 'Ward de Groot', nl: 'Ward de Groot' },
  'home.heroCard.role': { en: 'UX / Product Designer', nl: 'UX / Product Designer' },

  // Tags
  'home.tag.ux':        { en: 'UX design',              nl: 'UX design' },
  'home.tag.ds':        { en: 'Design systems',         nl: 'Design systems' },
  'home.tag.strategy':  { en: 'Strategy',               nl: 'Strategie' },
  'home.tag.ix':        { en: 'Interaction design',     nl: 'Interaction design' },
  'home.tag.proto':     { en: 'Prototyping',            nl: 'Prototyping' },
  'home.tag.data':      { en: 'Data-informed design',   nl: 'Data-informed design' },

  // Section heading
  'home.workHeading':   { en: 'My work', nl: 'Mijn werk' },

  // ── Project cards (shared between home + projects page) ──
  'card.nav.title':     { en: 'Enhancing teachers\' productivity', nl: 'Leerkrachten productiever maken' },
  'card.nav.desc':      { en: 'Redesigning navigation and reducing cognitive load for busy teachers', nl: 'Navigatie herontwerpen en cognitieve belasting verlagen voor drukke leerkrachten' },
  'card.ds.title':      { en: 'Evolving a design system to scale', nl: 'Een design system laten meegroeien' },
  'card.ds.desc':       { en: 'Rethinking Gynzy\'s design system so it could scale from one audience to two — without doubling the work', nl: 'Gynzy\'s design system herdenken zodat het kon meeschalen van één doelgroep naar twee — zonder het werk te verdubbelen' },
  'card.trainer.title': { en: 'From UX vision to an educational trainer', nl: 'Van UX-visie naar een educatieve trainer' },
  'card.trainer.desc':  { en: 'How strategic thinking and ethnographic research led to a scalable platform for independent learning', nl: 'Hoe strategisch denken en etnografisch onderzoek leidden tot een schaalbaar platform voor zelfstandig leren' },
  'card.readMore':      { en: 'Read more', nl: 'Lees meer' },

  // ── Projects page ───────────────────────────
  'projects.title':     { en: 'My Work — Ward de Groot', nl: 'Mijn werk — Ward de Groot' },
  'projects.meta':      { en: 'Selected projects in UX design, product strategy, and design systems by Ward de Groot.', nl: 'Geselecteerde projecten in UX design, productstrategie en design systems door Ward de Groot.' },
  'projects.heading':   { en: 'My work', nl: 'Mijn werk' },
  'projects.subtitle':  { en: 'A selection of projects where I combined research, strategy, and hands-on design to solve real problems for teachers and students.', nl: 'Een selectie projecten waarin ik onderzoek, strategie en hands-on design combineerde om echte problemen voor leerkrachten en leerlingen op te lossen.' },

  // ── About page ──────────────────────────────
  'about.title':        { en: 'About Me — Ward de Groot', nl: 'Over mij — Ward de Groot' },
  'about.meta':         { en: 'About Ward de Groot — UX / Product Designer passionate about crafting meaningful experiences.', nl: 'Over Ward de Groot — UX / Product Designer met passie voor betekenisvolle ervaringen.' },
  'about.heading':      { en: 'About me', nl: 'Over mij' },

  'about.intro.1':      { en: 'I\'m Ward — a UX Designer from Noord-Brabant with a soft spot for complex problems and the people behind them. I studied Industrial Design at Eindhoven University of Technology, where I got hooked on the intersection of psychology, strategy, and technology. That\'s still what drives me today.', nl: 'Ik ben Ward — UX Designer uit Noord-Brabant met een zwak voor complexe problemen en de mensen erachter. Ik heb Industrial Design gestudeerd aan de TU Eindhoven, waar ik gegrepen werd door het snijvlak van psychologie, strategie en technologie. Dat drijft me nog steeds.' },
  'about.intro.2':      { en: 'At <strong style="color: var(--color-text);">Gynzy</strong>, I work on an educational platform used by thousands of teachers and students. My goal is simple: improve their lives every single day. Whether that means facilitating a workshop, diving deep into research data, or quickly prototyping a solution — I adapt to what the situation needs.', nl: 'Bij <strong style="color: var(--color-text);">Gynzy</strong> werk ik aan een educatief platform dat door duizenden leerkrachten en leerlingen wordt gebruikt. Mijn doel is simpel: hun leven elke dag een stukje beter maken. Of dat nou betekent dat ik een workshop faciliteer, diep in onderzoeksdata duik, of snel een oplossing prototype — ik pas me aan op wat de situatie vraagt.' },
  'about.intro.3':      { en: 'Outside of Gynzy, I\'ve co-founded a sustainable wine company, published academic research in dementia care, and spent a research semester in Sydney. I\'m endlessly curious, pretty direct, and always up for a good conversation.', nl: 'Naast Gynzy heb ik een duurzaam wijnbedrijf mede-opgericht, academisch onderzoek gepubliceerd in dementiezorg, en een onderzoekssemester in Sydney doorgebracht. Ik ben eindeloos nieuwsgierig, vrij direct, en altijd in voor een goed gesprek.' },

  'about.howIWork':     { en: 'How I work', nl: 'Hoe ik werk' },

  'about.approach.title': { en: 'Whatever the situation asks for', nl: 'Wat de situatie ook vraagt' },
  'about.approach.desc':  { en: 'I don\'t have a fixed playbook. Some problems need deep research before you touch a single pixel. Others need a quick prototype by tomorrow. I read the room, adapt my approach, and go where the impact is. The one constant: I always start by understanding people.', nl: 'Ik heb geen vast draaiboek. Sommige problemen vragen om diepgaand onderzoek voordat je ook maar één pixel aanraakt. Andere om een snel prototype voor morgen. Ik lees de situatie, pas mijn aanpak aan, en ga waar de impact zit. De enige constante: ik begin altijd bij het begrijpen van mensen.' },

  'about.data.title':    { en: 'Data-informed, not data-driven', nl: 'Data-informed, not data-driven' },
  'about.data.desc':     { en: 'Numbers tell part of the story. I combine quantitative insights with qualitative research — school visits, user interviews, usability tests — to form a complete picture. The best design decisions happen when you let both sides of that story inform each other.', nl: 'Cijfers vertellen een deel van het verhaal. Ik combineer kwantitatieve inzichten met kwalitatief onderzoek — schoolbezoeken, gebruikersinterviews, usability tests — om een compleet beeld te vormen. De beste ontwerpbeslissingen ontstaan wanneer je beide kanten van dat verhaal op elkaar laat inspelen.' },

  'about.nextLevel.title': { en: 'Thinking beyond individual screens', nl: 'Verder denken dan losse schermen' },
  'about.nextLevel.desc':  { en: 'I care about more than individual screens. I think in systems, patterns, and principles that structurally raise the bar for the entire product. Whether it\'s evolving a design system or shaping a UX vision — I want to leave things better than I found them.', nl: 'Ik kijk verder dan losse schermen. Ik denk in systemen, patronen en principes die het hele product structureel naar een hoger niveau tillen. Of het nu gaat om het doorontwikkelen van een design system of het vormgeven van een UX-visie — ik wil dingen beter achterlaten dan ik ze vind.' },

  'about.ai.title':      { en: 'Multiplying impact through AI and strategy', nl: 'Impact vermenigvuldigen met AI en strategie' },
  'about.ai.desc':       { en: 'I use AI to amplify what my team can do — from prototyping ideas that would otherwise take weeks, to actually building components and features in code myself. Combined with a strategic perspective, this lets me create leverage: not just designing solutions, but shipping them.', nl: 'Ik gebruik AI om te versterken wat mijn team kan — van het prototypen van ideeën die anders weken zouden kosten, tot het zelf bouwen van componenten en features in code. Gecombineerd met een strategische blik levert dat iets op wat groter is dan mijn eigen output: niet alleen oplossingen ontwerpen, maar ze ook opleveren.' },

  // ── CV page ─────────────────────────────────
  'cv.title':            { en: 'CV — Ward de Groot', nl: 'CV — Ward de Groot' },
  'cv.meta':             { en: 'Experience and skills of Ward de Groot — UX / Product Designer.', nl: 'Ervaring en vaardigheden van Ward de Groot — UX / Product Designer.' },
  'cv.heading':          { en: 'Curriculum Vitae', nl: 'Curriculum Vitae' },
  'cv.intro':            { en: 'UX / Product Designer with a research-driven approach. I think in systems, ground decisions in psychology, and build what I design. Currently at Gynzy, an educational platform used by thousands.', nl: 'UX / Product Designer met een onderzoeksgedreven aanpak. Ik denk in systemen, onderbouw beslissingen met psychologie, en bouw wat ik ontwerp. Momenteel bij Gynzy, een educatief platform dat door duizenden wordt gebruikt.' },

  // ToC
  'cv.toc.experience':   { en: 'Experience', nl: 'Ervaring' },
  'cv.toc.education':    { en: 'Education', nl: 'Opleiding' },
  'cv.toc.publications': { en: 'Publications', nl: 'Publicaties' },

  // Section headings
  'cv.experience':       { en: 'Experience', nl: 'Ervaring' },
  'cv.education':        { en: 'Education & certificates', nl: 'Opleiding & certificaten' },
  'cv.publications':     { en: 'Publications', nl: 'Publicaties' },

  // Gynzy
  'cv.gynzy.title':      { en: 'UX Designer', nl: 'UX Designer' },
  'cv.gynzy.company':    { en: 'Gynzy — \'s-Hertogenbosch', nl: 'Gynzy — \'s-Hertogenbosch' },
  'cv.gynzy.1':          { en: 'Conducting design research to gather deep insights into user behavior', nl: 'Design research uitvoeren om diepgaand inzicht te krijgen in gebruikersgedrag' },
  'cv.gynzy.2':          { en: 'Translating qualitative and quantitative data into user-friendly interfaces', nl: 'Kwalitatieve en kwantitatieve data vertalen naar gebruiksvriendelijke interfaces' },
  'cv.gynzy.3':          { en: 'Collaborating with subject-matter experts, developers and product owners', nl: 'Samenwerken met vakexperts, developers en product owners' },
  'cv.gynzy.4':          { en: 'Communicating design decisions grounded in psychology', nl: 'Ontwerpbeslissingen communiceren onderbouwd met psychologie' },
  'cv.gynzy.5':          { en: 'Shaping the product\'s UX vision, aligning stakeholders, and influencing the roadmap', nl: 'De UX-visie van het product vormgeven, stakeholders alignen, en de roadmap beïnvloeden' },

  // Vavino
  'cv.vavino.title':     { en: 'Co-founder', nl: 'Mede-oprichter' },
  'cv.vavino.company':   { en: 'Vavino — Reusel', nl: 'Vavino — Reusel' },
  'cv.vavino.1':         { en: 'Made sustainable wines accessible and affordable', nl: 'Duurzame wijnen toegankelijk en betaalbaar gemaakt' },
  'cv.vavino.2':         { en: 'Designed the brand, website, and all online/offline channels', nl: 'Het merk, de website en alle online/offline kanalen ontworpen' },
  'cv.vavino.3':         { en: 'Organized and facilitated wine tastings', nl: 'Wijnproeverijen georganiseerd en gefaciliteerd' },

  // WdG
  'cv.wdg.title':        { en: 'Founder', nl: 'Oprichter' },
  'cv.wdg.1':            { en: 'Market research and design on a project basis', nl: 'Marktonderzoek en design op projectbasis' },
  'cv.wdg.2':            { en: 'Logos and style guides for startups', nl: 'Logo\'s en stijlgidsen voor startups' },
  'cv.wdg.3':            { en: 'User interviews for PhD research', nl: 'Gebruikersinterviews voor promotieonderzoek' },
  'cv.wdg.4':            { en: 'Healthcare demand research for a municipality', nl: 'Zorgvraagonderzoek voor een gemeente' },

  // UTS
  'cv.uts.title':        { en: 'Research Assistant', nl: 'Research Assistant' },
  'cv.uts.1':            { en: 'Supported the Materialising Memories research group', nl: 'De onderzoeksgroep Materialising Memories ondersteund' },
  'cv.uts.2':            { en: 'Organized workshops and evaluated sessions', nl: 'Workshops georganiseerd en sessies geëvalueerd' },
  'cv.uts.3':            { en: 'Created transcriptions', nl: 'Transcripties gemaakt' },

  // Sparckel
  'cv.sparckel.title':   { en: 'Industrial Design Intern', nl: 'Stagiair Industrial Design' },
  'cv.sparckel.company': { en: 'Sparckel — HTC Eindhoven', nl: 'Sparckel — HTC Eindhoven' },
  'cv.sparckel.1':       { en: 'Designed biodynamic light fixtures', nl: 'Biodynamische verlichtingsarmaturen ontworpen' },
  'cv.sparckel.2':       { en: '3D modeling and prototyping', nl: '3D-modelleren en prototypen' },
  'cv.sparckel.3':       { en: 'Rebranded from Vitaallicht to Sparckel', nl: 'Rebranding van Vitaallicht naar Sparckel' },
  'cv.sparckel.4':       { en: 'Conducted user interviews', nl: 'Gebruikersinterviews afgenomen' },

  // Education
  'cv.centercentre.title': { en: 'Craft + Lead a Strategic UX Vision', nl: 'Craft + Lead a Strategic UX Vision' },
  'cv.centercentre.company': { en: 'Center Centre — Online Intensive', nl: 'Center Centre — Online Intensive' },
  'cv.centercentre.1':  { en: 'Establishing strategic UX goals and researching current experiences', nl: 'Strategische UX-doelen bepalen en huidige ervaringen onderzoeken' },
  'cv.centercentre.2':  { en: 'Creating a UX vision and placing it in the product roadmap', nl: 'Een UX-visie creëren en in de productroadmap plaatsen' },
  'cv.centercentre.3':  { en: 'Leading the organization to achieve the vision', nl: 'De organisatie leiden richting het realiseren van de visie' },

  'cv.psychology.title': { en: 'Product Psychology Masterclass', nl: 'Product Psychology Masterclass' },
  'cv.psychology.company': { en: 'Growth.Design — Online', nl: 'Growth.Design — Online' },
  'cv.psychology.1':     { en: 'Applying psychology to build better products', nl: 'Psychologie toepassen om betere producten te bouwen' },
  'cv.psychology.2':     { en: 'Understanding user behavior and finding gaps to improve every experience', nl: 'Gebruikersgedrag begrijpen en kansen vinden om elke ervaring te verbeteren' },
  'cv.psychology.3':     { en: 'Creating good customer journeys and making ethical decisions as a team', nl: 'Goede customer journeys creëren en ethische beslissingen nemen als team' },

  'cv.msc.title':        { en: 'MSc Industrial Design', nl: 'MSc Industrial Design' },
  'cv.msc.company':      { en: 'Eindhoven University of Technology', nl: 'Technische Universiteit Eindhoven' },
  'cv.msc.1':            { en: 'Research semester at the University of Technology Sydney, Australia', nl: 'Onderzoekssemester aan de University of Technology Sydney, Australië' },
  'cv.msc.2':            { en: 'Design and research in dementia care', nl: 'Ontwerp en onderzoek in dementiezorg' },

  'cv.bsc.title':        { en: 'BSc Industrial Design', nl: 'BSc Industrial Design' },
  'cv.bsc.company':      { en: 'Eindhoven University of Technology', nl: 'Technische Universiteit Eindhoven' },
  'cv.bsc.1':            { en: 'Interaction design, user research, and prototyping', nl: 'Interaction design, gebruikersonderzoek en prototyping' },
  'cv.bsc.2':            { en: 'Final project: designing biodynamic lighting for shared spaces', nl: 'Afstudeerproject: biodynamische verlichting ontwerpen voor gedeelde ruimtes' },

  // Publications
  'cv.pub.link':         { en: 'Link to article &rarr;', nl: 'Link naar artikel &rarr;' },

  // ── Case study: Navigation ──────────────────
  'case.nav.title':       { en: 'Enhancing Teachers\' Productivity — Ward de Groot', nl: 'Leerkrachten productiever maken — Ward de Groot' },
  'case.nav.meta':        { en: 'Redesigning navigation and reducing cognitive load to help teachers work faster and feel more in control.', nl: 'Navigatie herontwerpen en cognitieve belasting verlagen zodat leerkrachten sneller werken en meer controle ervaren.' },
  'case.nav.back':        { en: '&larr; Back to all projects', nl: '&larr; Terug naar alle projecten' },
  'case.nav.heading':     { en: 'Enhancing teachers\' productivity', nl: 'Leerkrachten productiever maken' },
  'case.nav.desc':        { en: 'Gynzy\'s icon-only sidebar was confusing teachers and blocking the product from growing. I led a three-phase redesign that cut lesson access from 3 clicks to 1 — and gave the platform room to scale.', nl: 'Gynzy\'s sidebar met alleen iconen was verwarrend voor leerkrachten en blokkeerde de groei van het product. Ik leidde een herontwerp in drie fasen dat lestoegang terugbracht van 3 klikken naar 1 — en het platform ruimte gaf om te groeien.' },

  // Meta
  'case.meta.role':       { en: 'My role', nl: 'Mijn rol' },
  'case.meta.team':       { en: 'The team', nl: 'Het team' },
  'case.meta.duration':   { en: 'Duration', nl: 'Looptijd' },
  'case.nav.role':        { en: 'UX Designer / Researcher', nl: 'UX Designer / Researcher' },
  'case.nav.team':        { en: 'Product owner, 3 developers', nl: 'Product owner, 3 developers' },
  'case.nav.duration':    { en: '&plusmn; 6 months (3 phases)', nl: '&plusmn; 6 maanden (3 fasen)' },

  // ToC
  'case.nav.toc.challenge':      { en: 'The challenge', nl: 'De uitdaging' },
  'case.nav.toc.makingTheCase':  { en: 'Making the case', nl: 'De overtuiging' },
  'case.nav.toc.solution':       { en: 'The solution', nl: 'De oplossing' },
  'case.nav.toc.implementation': { en: 'Implementation', nl: 'Implementatie' },
  'case.nav.toc.results':        { en: 'Results', nl: 'Resultaten' },

  // Section headings
  'case.nav.challenge':      { en: 'The challenge', nl: 'De uitdaging' },
  'case.nav.challenge.1':    { en: 'Navigation was a left sidebar of unlabeled icons — teachers couldn\'t figure out what they meant', nl: 'De navigatie bestond uit een linkerzijbalk met iconen zonder labels — leerkrachten snapten niet wat ze betekenden' },
  'case.nav.challenge.2':    { en: 'The landing page after sign-in wasn\'t even the top icon, causing immediate disorientation', nl: 'De landingspagina na inloggen was niet eens het bovenste icoon, wat direct voor verwarring zorgde' },
  'case.nav.challenge.3':    { en: 'Zero room left to add new features without degrading the experience further', nl: 'Geen ruimte meer om nieuwe features toe te voegen zonder de ervaring verder te verslechteren' },
  'case.nav.challenge.4':    { en: 'Multiple development teams independently flagged the scalability problem', nl: 'Meerdere ontwikkelteams kaarten onafhankelijk van elkaar het schaalbaarheids\u00ADprobleem aan' },
  'case.nav.challenge.5':    { en: 'The Ember and Flutter applications had different scaling behavior across devices', nl: 'De Ember- en Flutter-applicaties schaalde verschillend op uiteenlopende apparaten' },
  'case.nav.challenge.6':    { en: 'Teachers use desktops and interactive whiteboards — cursor and touch input both had to work', nl: 'Leerkrachten gebruiken desktops en interactieve whiteboards — zowel muis- als touchinvoer moest werken' },

  'case.nav.makingTheCase':      { en: 'Making the case', nl: 'De overtuiging' },
  'case.nav.makingTheCase.desc': { en: 'Data alone wasn\'t enough to convince stakeholders. I presented the experience through the eyes of a first-time teacher — walking through the confusion step by step. That shifted the conversation from "is it good enough?" to "this is hurting users."', nl: 'Data alleen was niet genoeg om stakeholders te overtuigen. Ik presenteerde de ervaring door de ogen van een nieuwe leerkracht — stap voor stap door de verwarring. Dat verschoof het gesprek van "is het goed genoeg?" naar "dit schaadt gebruikers."' },
  'case.nav.makingTheCase.caption': { en: 'The slide deck I used to present the case for overhauling navigation.', nl: 'De presentatie waarmee ik het verhaal voor de vernieuwing van de navigatie onderbouwde.' },

  'case.nav.solution':           { en: 'The solution', nl: 'De oplossing' },
  'case.nav.research':           { en: 'Research insights', nl: 'Onderzoeksinzichten' },
  'case.nav.research.1':         { en: 'Amplitude data revealed which features teachers actually used vs. which went untouched', nl: 'Amplitude-data toonde welke features leerkrachten daadwerkelijk gebruikten en welke onaangeraakt bleven' },
  'case.nav.research.2':         { en: 'Card sorting with educational experts showed teachers think about tools very differently from how we\'d organized them', nl: 'Card sorting met onderwijsexperts liet zien dat leerkrachten heel anders over tools nadenken dan hoe wij ze hadden georganiseerd' },
  'case.nav.research.3':         { en: 'Usability testing confirmed that simply relabeling icons wouldn\'t be enough', nl: 'Usability testing bevestigde dat simpelweg iconen hernoemen niet genoeg zou zijn' },
  'case.nav.research.4':         { en: 'Key insight: teachers needed a fundamentally different entry point, not a better toolbar', nl: 'Belangrijkste inzicht: leerkrachten hadden een fundamenteel ander startpunt nodig, geen betere toolbar' },

  'case.nav.constraints':        { en: 'Design constraints', nl: 'Ontwerpbeperkingen' },
  'case.nav.constraints.1':      { en: 'Hover-to-expand menus worked with a mouse but fell apart on whiteboards teachers tap in front of a class', nl: 'Hover-menu\'s werkten met een muis maar vielen uiteen op whiteboards waar leerkrachten voor de klas op tikken' },
  'case.nav.constraints.2':      { en: 'Responsive scaling had to work consistently from small laptops to large interactive displays', nl: 'Responsieve schaling moest consistent werken van kleine laptops tot grote interactieve displays' },
  'case.nav.constraints.3':      { en: 'The Ember\u2192Flutter migration meant reconciling two different rendering behaviors', nl: 'De Ember\u2192Flutter-migratie betekende het verenigen van twee verschillende rendering-systemen' },

  'case.nav.implementation':     { en: 'Implementation', nl: 'Implementatie' },
  'case.nav.implementation.desc': { en: 'The scope was too large for a single release, so I proposed three sequential phases — shipping improvements incrementally while building toward the bigger vision.', nl: 'De scope was te groot voor één release, dus stelde ik drie opeenvolgende fasen voor — stapsgewijs verbeteringen opleveren terwijl we toewerken naar de grotere visie.' },

  'case.nav.phase1':             { en: 'Phase 1 — Clean up & rebuild', nl: 'Fase 1 — Opschonen & herbouwen' },
  'case.nav.phase1.1':           { en: 'Removed non-core features from the sidebar', nl: 'Niet-essentiële features uit de sidebar verwijderd' },
  'case.nav.phase1.2':           { en: 'Rewrote the Ember-based toolbar in Flutter', nl: 'De Ember-toolbar herschreven in Flutter' },
  'case.nav.phase1.3':           { en: 'Reduced clutter and established a maintainable codebase', nl: 'Rommel verminderd en een onderhoudbare codebase opgezet' },
  'case.nav.phase1.caption':     { en: 'The toolbar transition from Ember to Flutter.', nl: 'De toolbar-overgang van Ember naar Flutter.' },

  'case.nav.phase2':             { en: 'Phase 2 — The Start page', nl: 'Fase 2 — De Startpagina' },
  'case.nav.phase2.1':           { en: 'Introduced a dedicated landing page so teachers see their schedule immediately after sign-in', nl: 'Een eigen landingspagina geïntroduceerd zodat leerkrachten direct na inloggen hun rooster zien' },
  'case.nav.phase2.2':           { en: 'Evolved from a promotional first version to a personalized daily hub', nl: 'Geëvolueerd van een promotionele eerste versie naar een gepersonaliseerde dagelijkse hub' },
  'case.nav.phase2.3':           { en: 'Single biggest improvement: opening a lesson went from 3 clicks to 1', nl: 'Grootste verbetering: een les openen ging van 3 klikken naar 1' },

  'case.nav.phase3':             { en: 'Phase 3 — Secondary navigation', nl: 'Fase 3 — Secundaire navigatie' },
  'case.nav.phase3.1':           { en: 'Added a secondary navigation layer — everything lives on the left, giving users a consistent mental model', nl: 'Een secundaire navigatielaag toegevoegd — alles zit links, wat gebruikers een consistent mentaal model geeft' },
  'case.nav.phase3.2':           { en: 'Created room for new features without mixing horizontal and vertical patterns', nl: 'Ruimte gecreëerd voor nieuwe features zonder horizontale en verticale patronen te mengen' },

  'case.nav.results':            { en: 'Results', nl: 'Resultaten' },
  'case.nav.results.1':          { en: 'Lesson access went from 3+ clicks to 1 — multiplied across thousands of teachers using this dozens of times daily', nl: 'Lestoegang ging van 3+ klikken naar 1 — vermenigvuldigd over duizenden leerkrachten die dit tientallen keren per dag doen' },
  'case.nav.results.2':          { en: 'Navigation architecture now scales — new features have a clear home', nl: 'Navigatie-architectuur schaalt nu — nieuwe features hebben een duidelijke plek' },
  'case.nav.results.3':          { en: 'Mixed Ember/Flutter codebase consolidated into Flutter', nl: 'Gemixte Ember/Flutter-codebase geconsolideerd naar Flutter' },
  'case.nav.results.4':          { en: 'Responsive scaling works consistently across all supported devices', nl: 'Responsieve schaling werkt consistent op alle ondersteunde apparaten' },
  'case.nav.results.5':          { en: 'Product team went from "we can\'t add anything" to having room to build', nl: 'Het productteam ging van "we kunnen niks meer toevoegen" naar ruimte om te bouwen' },

  // Image labels — Navigation
  'case.nav.label.before':       { en: 'Before — Icon-only sidebar in Ember', nl: 'Voor — Sidebar met alleen iconen in Ember' },
  'case.nav.label.after':        { en: 'After — Redesigned library navigation', nl: 'Na — Herontworpen bibliotheeknavigatie' },
  'case.nav.label.collapsed':    { en: 'Collapsed — Category icons only', nl: 'Ingeklapt — Alleen categorie-iconen' },
  'case.nav.label.expanded':     { en: 'Expanded — Full category list', nl: 'Uitgeklapt — Volledige categorielijst' },
  'case.nav.label.sidebarCaption': { en: 'Early exploration of the secondary sidebar — a collapsible category menu that could expand in place.', nl: 'Vroege verkenning van de secundaire sidebar — een inklapbaar categoriemenu dat ter plekke uitklapt.' },
  'case.nav.label.startV1':      { en: 'First iteration — Promotional landing page', nl: 'Eerste iteratie — Promotionele landingspagina' },
  'case.nav.label.startLive':    { en: 'Live — Seasonal highlighted content', nl: 'Live — Seizoensgebonden uitgelichte content' },
  'case.nav.label.startFuture':  { en: 'Future — Search bar & secondary nav', nl: 'Toekomst — Zoekbalk & secundaire navigatie' },
  'case.nav.label.lessonFolder': { en: 'Lesson folders — Tree navigation', nl: 'Lesmappen — Boomnavigatie' },
  'case.nav.label.curriculum':   { en: 'Curriculum — Subject hierarchy', nl: 'Curriculum — Vakhiërarchie' },
  'case.nav.label.treeCaption':  { en: 'The secondary navigation in tree-like views — folders and curriculum structures that need hierarchy without leaving the page.', nl: 'De secundaire navigatie in boomstructuren — mappen en curriculumstructuren die hiërarchie nodig hebben zonder de pagina te verlaten.' },

  // Next project
  'case.nextProject':            { en: 'Next project', nl: 'Volgend project' },

  // ── Case study: Design System ───────────────
  'case.ds.title':        { en: 'Evolving a design system to scale — Ward de Groot', nl: 'Een design system laten meegroeien — Ward de Groot' },
  'case.ds.meta':         { en: 'From flat tokens to a scalable alias layer serving both teachers and students.', nl: 'Van platte tokens naar een schaalbare alias-laag voor zowel leerkrachten als leerlingen.' },
  'case.ds.back':         { en: '&larr; Back to all projects', nl: '&larr; Terug naar alle projecten' },
  'case.ds.heading':      { en: 'Evolving a design system to scale', nl: 'Een design system laten meegroeien' },
  'case.ds.desc':         { en: 'Gynzy\'s design system wasn\'t built to serve two audiences. When the product expanded to students, I introduced an alias layer that let one set of components adapt to both contexts automatically.', nl: 'Gynzy\'s design system was niet gebouwd voor twee doelgroepen. Toen het product uitbreidde naar leerlingen, introduceerde ik een alias-laag waarmee één set componenten automatisch meeschaalt naar beide contexten.' },

  'case.ds.role':         { en: 'UX Designer / Researcher', nl: 'UX Designer / Researcher' },
  'case.ds.team':         { en: 'Design & Engineering', nl: 'Design & Engineering' },
  'case.ds.duration':     { en: 'Ongoing', nl: 'Lopend' },

  'case.ds.toc.challenge':      { en: 'The challenge', nl: 'De uitdaging' },
  'case.ds.toc.solution':       { en: 'The solution', nl: 'De oplossing' },
  'case.ds.toc.implementation': { en: 'Implementation', nl: 'Implementatie' },
  'case.ds.toc.results':        { en: 'Results', nl: 'Resultaten' },

  'case.ds.challenge':          { en: 'The challenge', nl: 'De uitdaging' },
  'case.ds.challenge.1':        { en: 'Gynzy\'s design system started in Sketch and was migrated to Figma — but the migration was a straight copy-paste, with no rethinking of structure or naming.', nl: 'Het design system van Gynzy begon in Sketch en werd gemigreerd naar Figma — maar die migratie was een rechttoe-rechtaan kopie, zonder heroverweging van structuur of naamgeving.' },
  'case.ds.challenge.2':        { en: 'The design team refreshed the color palette because the old colors felt dull, but without a token architecture to support it, the update had to be applied manually everywhere.', nl: 'Het designteam vernieuwde het kleurenpalet omdat de oude kleuren saai aanvoelden, maar zonder een token-architectuur om het te ondersteunen moest de update overal handmatig worden doorgevoerd.' },
  'case.ds.challenge.3':        { en: 'Components were being recreated without shared rules — designers built what they needed in the moment, leading to inconsistency across the product.', nl: 'Componenten werden opnieuw gemaakt zonder gedeelde regels — designers bouwden wat ze op dat moment nodig hadden, wat leidde tot inconsistentie door het hele product.' },
  'case.ds.challenge.4':        { en: 'As more work shifted to the student environment, the problem multiplied: every component essentially needed a teacher version and a student version.', nl: 'Naarmate meer werk verschoof naar de leerlingomgeving, vermenigvuldigde het probleem zich: elk component had in feite een leerkracht- en een leerlingversie nodig.' },

  'case.ds.solution':           { en: 'The solution', nl: 'De oplossing' },
  'case.ds.solution.1':         { en: 'When the organization committed to Flutter, the migration created a natural moment to rethink the design system from the ground up.', nl: 'Toen de organisatie koos voor Flutter, creëerde de migratie een natuurlijk moment om het design system vanaf de grond opnieuw te doordenken.' },
  'case.ds.solution.2':         { en: 'Instead of maintaining separate component sets for teachers and students, I introduced an alias layer — a set of semantic tokens that map to different values depending on context.', nl: 'In plaats van aparte componentsets voor leerkrachten en leerlingen te onderhouden, introduceerde ik een alias-laag — een set semantische tokens die naar verschillende waarden verwijzen afhankelijk van de context.' },
  'case.ds.solution.3':         { en: 'The alias layer controls spacing, padding, typography, and sizing — so a single component adapts automatically to the teacher or student environment.', nl: 'De alias-laag regelt spacing, padding, typografie en sizing — zodat één component automatisch meeschaalt naar de leerkracht- of leerlingomgeving.' },
  'case.ds.solution.4':         { en: 'I also prepared the alias structure for whitelabel use, building in variable modes that could support different brand contexts in the future.', nl: 'Ik bereidde de alias-structuur ook voor op whitelabel-gebruik, met variabele modes die in de toekomst verschillende merkcontexten kunnen ondersteunen.' },

  // Image labels — Design System
  'case.ds.label.primitive':     { en: 'Primitive tokens — Raw values, context-unaware', nl: 'Primitive tokens — Ruwe waarden, contextloos' },
  'case.ds.label.alias':         { en: 'Alias tokens — Mapped per context (Teacher / Student)', nl: 'Alias tokens — Gekoppeld per context (Leerkracht / Leerling)' },
  'case.ds.label.tokenCaption':  { en: 'Primitives define raw values. The alias layer maps the same token name to different primitives per context — so components don\'t need to be duplicated.', nl: 'Primitives definiëren ruwe waarden. De alias-laag koppelt dezelfde tokennaam aan verschillende primitives per context — zodat componenten niet gedupliceerd hoeven te worden.' },
  'case.ds.label.teacher':       { en: 'Teacher context', nl: 'Leerkracht-context' },
  'case.ds.label.student':       { en: 'Student context', nl: 'Leerling-context' },
  'case.ds.label.modalCaption':  { en: 'Same component, different context — the alias layer adapts spacing, typography, and sizing for teachers and students without duplicating the component.', nl: 'Hetzelfde component, andere context — de alias-laag past spacing, typografie en sizing aan voor leerkrachten en leerlingen zonder het component te dupliceren.' },

  'case.ds.implementation':      { en: 'Implementation', nl: 'Implementatie' },
  'case.ds.implementation.1':    { en: 'Worked closely with a developer to define how tokens would translate into Flutter\'s theming system.', nl: 'Nauw samengewerkt met een developer om te bepalen hoe tokens vertaald zouden worden naar Flutter\'s theming-systeem.' },
  'case.ds.implementation.2':    { en: 'Rolled out incrementally — migrating components one by one rather than doing a big-bang switch.', nl: 'Stapsgewijs uitgerold — componenten één voor één migreren in plaats van een big-bang switch.' },
  'case.ds.implementation.3':    { en: 'The developer handled the scaling logic between Flutter and the remaining Ember parts of the application.', nl: 'De developer nam de schaallogica voor zijn rekening tussen Flutter en de resterende Ember-onderdelen van de applicatie.' },
  'case.ds.implementation.4':    { en: 'Once AI tooling became available, I could add and update token values and create components more independently — speeding up the process significantly.', nl: 'Zodra AI-tooling beschikbaar werd, kon ik zelfstandiger tokenwaarden toevoegen, bijwerken en componenten aanmaken — wat het proces aanzienlijk versnelde.' },

  'case.ds.results':             { en: 'Results', nl: 'Resultaten' },
  'case.ds.results.1':           { en: 'New components can be created faster because the token structure does the heavy lifting.', nl: 'Nieuwe componenten kunnen sneller worden gemaakt omdat de tokenstructuur het zware werk doet.' },
  'case.ds.results.2':           { en: 'A more consistent experience across teacher and student contexts, built from shared components instead of parallel versions.', nl: 'Een consistentere ervaring in zowel de leerkracht- als leerlingcontext, gebouwd vanuit gedeelde componenten in plaats van parallelle versies.' },
  'case.ds.results.3':           { en: 'The visual language was refreshed — brighter and more intentional — without needing a separate redesign effort.', nl: 'De visuele taal is opgefrist — helderder en bewuster — zonder een apart herontwerptraject.' },
  'case.ds.results.4':           { en: 'The alias layer is future-proof: whitelabel support is built in from the start.', nl: 'De alias-laag is toekomstbestendig: whitelabel-ondersteuning zit er vanaf het begin in.' },

  // Before/After labels
  'case.ds.label.iconsBefore':   { en: 'Before — Bulkier, heavier stroke weight', nl: 'Voor — Lomper, zwaardere lijndikte' },
  'case.ds.label.iconsAfter':    { en: 'After — Lighter, more elegant line work', nl: 'Na — Lichter, eleganter lijnwerk' },
  'case.ds.label.buttonsBefore': { en: 'Before — Outdated inner shadows, minimal roundness, oversized icons', nl: 'Voor — Verouderde binnenschaduwen, minimale ronding, te grote iconen' },
  'case.ds.label.buttonsAfter':  { en: 'After — More roundness, no inner shadows, better icon-text balance', nl: 'Na — Meer ronding, geen binnenschaduwen, betere balans icoon-tekst' },
  'case.ds.label.colorBefore':   { en: 'Before — Limited color range with dull tones', nl: 'Voor — Beperkt kleurbereik met doffe tinten' },
  'case.ds.label.colorAfter':    { en: 'After — Expanded palette with vibrant colors', nl: 'Na — Uitgebreid palet met levendige kleuren' },
  'case.ds.label.owBefore':      { en: 'Before — Orange & yellow lacked vibrancy', nl: 'Voor — Oranje & geel misten levendigheid' },
  'case.ds.label.owAfter':       { en: 'After — Brighter, more playful range', nl: 'Na — Helderder, speelser bereik' },
  'case.ds.label.colorCaption':  { en: 'For a product used by teachers and students, color matters. The old palette felt dull — the refresh brought the vibrancy the product needed.', nl: 'Voor een product dat door leerkrachten en leerlingen wordt gebruikt, doet kleur ertoe. Het oude palet voelde dof — de opfrisbeurt bracht de levendigheid die het product nodig had.' },

  // Standalone challenge labels (shown above the before/after in challenge section)
  'case.ds.label.bulkyIcons':    { en: 'Bulky icon set with heavy stroke weight', nl: 'Lompe iconenset met zware lijndikte' },
  'case.ds.label.oldButtons':    { en: 'Outdated inner shadows, minimal roundness, oversized icons', nl: 'Verouderde binnenschaduwen, minimale ronding, te grote iconen' },
  'case.ds.label.oldColors':     { en: 'Limited color range with dull tones', nl: 'Beperkt kleurbereik met doffe tinten' },

  // ── Case study: Trainer ─────────────────────
  'case.trainer.title':     { en: 'From UX vision to an educational trainer — Ward de Groot', nl: 'Van UX-visie naar een educatieve trainer — Ward de Groot' },
  'case.trainer.meta':      { en: 'How a strategic UX vision and ethnographic research led to a scalable platform for independent learning.', nl: 'Hoe een strategische UX-visie en etnografisch onderzoek leidden tot een schaalbaar platform voor zelfstandig leren.' },
  'case.trainer.back':      { en: '&larr; Back to all projects', nl: '&larr; Terug naar alle projecten' },
  'case.trainer.heading':   { en: 'From UX Vision to an Educational Trainer', nl: 'Van UX-visie naar een educatieve Trainer' },
  'case.trainer.desc':      { en: 'How crafting a strategic UX vision led to the discovery of an unmet need — and the design of a scalable platform for independent learning.', nl: 'Hoe het vormgeven van een strategische UX-visie leidde tot de ontdekking van een onvervulde behoefte — en het ontwerp van een schaalbaar platform voor zelfstandig leren.' },

  'case.trainer.role':      { en: 'UX Designer / Researcher', nl: 'UX Designer / Researcher' },
  'case.trainer.team':      { en: 'Product owner, 3 developers', nl: 'Product owner, 3 developers' },
  'case.trainer.duration':  { en: '&plusmn; 1 year', nl: '&plusmn; 1 jaar' },

  'case.trainer.toc.strategic':  { en: 'Strategic direction', nl: 'Strategische richting' },
  'case.trainer.toc.discovery':  { en: 'The discovery', nl: 'De ontdekking' },
  'case.trainer.toc.foundation': { en: 'The foundation', nl: 'De basis' },
  'case.trainer.toc.scalingUp':  { en: 'Scaling up', nl: 'Opschalen' },
  'case.trainer.toc.results':    { en: 'Results', nl: 'Resultaten' },

  'case.trainer.strategic':      { en: 'Setting the strategic direction', nl: 'De strategische richting bepalen' },
  'case.trainer.strategic.1':    { en: 'Design decisions were being made without enough contact with end users. I pushed for structurally more school visits and user contact — increasing what we called user exposure hours.', nl: 'Ontwerpbeslissingen werden genomen zonder voldoende contact met eindgebruikers. Ik drong aan op structureel meer schoolbezoeken en gebruikerscontact — meer user exposure hours.' },
  'case.trainer.strategic.2':    { en: 'Over the course of a year: 8 school visits I attended personally, team members encouraged to visit schools as well, and structured online conversations — adding up to roughly 70 hours of cumulative user contact.', nl: 'Over de loop van een jaar: 8 schoolbezoeken waar ik persoonlijk bij was, teamleden aangemoedigd om ook scholen te bezoeken, en gestructureerde online gesprekken — opgeteld zo\'n 70 uur cumulatief gebruikerscontact.' },
  'case.trainer.strategic.3':    { en: 'The result was a UX vision, told as a story from the teacher\'s perspective: a future where all current frustrations are resolved. This story was printed and hung in the office, giving the entire team a shared picture of where we were heading.', nl: 'Het resultaat was een UX-visie, verteld als een verhaal vanuit het perspectief van de leerkracht: een toekomst waarin alle huidige frustraties zijn opgelost. Dit verhaal werd geprint en opgehangen op kantoor, zodat het hele team een gedeeld beeld had van waar we naartoe werkten.' },
  'case.trainer.strategic.caption': { en: 'Two spreads from the UX vision story — told from the teacher\'s perspective, painting a future where students learn independently and teachers have time for personal attention.', nl: 'Twee spreads uit het UX-visieverhaal — verteld vanuit het perspectief van de leerkracht, met een toekomstbeeld waarin leerlingen zelfstandig leren en leerkrachten tijd hebben voor persoonlijke aandacht.' },

  'case.trainer.discovery':      { en: 'The discovery', nl: 'De ontdekking' },
  'case.trainer.discovery.1':    { en: 'The school visits revealed something invisible in our own data: teachers were using all kinds of separate practice software alongside Gynzy, especially for recurring learning goals like multiplication tables and verb spelling.', nl: 'De schoolbezoeken onthulden iets dat onzichtbaar was in onze eigen data: leerkrachten gebruikten allerlei losse oefensoftware naast Gynzy, vooral voor terugkerende leerdoelen zoals tafels en werkwoordspelling.' },
  'case.trainer.discovery.2':    { en: 'Students needed a way to practice that was playful and motivating — independently, at their own level — beyond regular exercises.', nl: 'Leerlingen hadden een manier nodig om te oefenen die speels en motiverend was — zelfstandig, op hun eigen niveau — voorbij reguliere oefeningen.' },
  'case.trainer.discovery.3':    { en: 'This insight would never have surfaced from feature requests or usage data alone. It\'s exactly why we do ethnographic research: you have to be in the classroom to see what your data can\'t show you.', nl: 'Dit inzicht was nooit naar boven gekomen uit feature requests of gebruiksdata alleen. Het is precies waarom we etnografisch onderzoek doen: je moet in de klas staan om te ontdekken wat je data je niet kan vertellen.' },

  'case.trainer.foundation':     { en: 'Designing the foundation', nl: 'De basis ontwerpen' },
  'case.trainer.foundation.1':   { en: 'Gynzy already had a popular classroom feature: the Alpaca Race, where the class splits into two teams and races by answering math facts as fast as possible. A proven concept — and a safe bet to develop further.', nl: 'Gynzy had al een populaire klassenfeature: de Alpacarace, waarbij de klas in twee teams splitst en racet door rekensommen zo snel mogelijk te beantwoorden. Een bewezen concept — en een veilige keuze om verder te ontwikkelen.' },
  'case.trainer.foundation.2':   { en: 'The first step was turning this into a single-player variant, so students could also practice independently. Same proven concept, new format.', nl: 'De eerste stap was dit omzetten naar een singleplayer-variant, zodat leerlingen ook zelfstandig konden oefenen. Hetzelfde bewezen concept, nieuw formaat.' },
  'case.trainer.foundation.3':   { en: 'From the start, the architecture was designed to scale along three axes: more interaction types (from multiple choice to fill-in-the-blank and beyond), more learning goals per type, and eventually more subject areas.', nl: 'Vanaf het begin was de architectuur ontworpen om langs drie assen te schalen: meer interactietypen (van meerkeuze tot invullen en verder), meer leerdoelen per type, en uiteindelijk meer vakgebieden.' },
  'case.trainer.foundation.4':   { en: 'Deliberate scope choices: assigning learning goals to students and showing results to teachers were descoped to ship fast.', nl: 'Bewuste scopekeuzes: leerdoelen toewijzen aan leerlingen en resultaten tonen aan leerkrachten werden uit de scope gehaald om snel te kunnen opleveren.' },
  'case.trainer.foundation.5':   { en: 'Everything had to be built in Flutter for the student environment — which the design system wasn\'t prepared for yet. This work ran in parallel with the evolution of the design system.', nl: 'Alles moest gebouwd worden in Flutter voor de leerlingomgeving — waar het design system nog niet op voorbereid was. Dit werk liep parallel met de doorontwikkeling van het design system.' },

  'case.trainer.label.alpaca':   { en: 'Alpaca Trainer — Single-player math facts with multiple choice', nl: 'Alpaca Trainer — Singleplayer rekensommen met meerkeuze' },

  'case.trainer.scalingUp':      { en: 'Scaling up', nl: 'Opschalen' },
  'case.trainer.scalingUp.1':    { en: 'The scalable architecture proved itself quickly. The Alpaca trainer was followed by a penguin-themed variant with largely AI-generated visuals and sounds — same interaction type, different theme, more variety for students.', nl: 'De schaalbare architectuur bewees zichzelf snel. Na de Alpaca-trainer volgde een pinguïn-variant met grotendeels AI-gegenereerde visuals en geluiden — hetzelfde interactietype, ander thema, meer variatie voor leerlingen.' },
  'case.trainer.scalingUp.2':    { en: 'At the same time, a fundamentally different trainer was developed: the Ocean Cleaners. Instead of automatization (tapping the correct answer as fast as possible via multiple choice), this one is about practicing at your own pace, with fill-in-the-blank answers. First application: verb spelling.', nl: 'Tegelijkertijd werd een fundamenteel andere trainer ontwikkeld: de Oceaanopruimers. In plaats van automatiseren (het juiste antwoord zo snel mogelijk aantikken via meerkeuze), gaat deze over oefenen op je eigen tempo, met invulantwoorden. Eerste toepassing: werkwoordspelling.' },
  'case.trainer.scalingUp.3':    { en: 'The Ocean Cleaners introduced new design challenges. The input field had to work on Chromebooks with a physical keyboard and iPads with an on-screen keyboard — leading to a density layer in the design system for adjusting element density per device. Additionally, layouts were designed for narrower screens. Both are ready for implementation.', nl: 'De Oceaanopruimers brachten nieuwe ontwerpuitdagingen. Het invoerveld moest werken op Chromebooks met een fysiek toetsenbord en iPads met een schermtoetsenbord — wat leidde tot een density-laag in het design system voor het aanpassen van elementdichtheid per apparaat. Daarnaast werden lay-outs ontworpen voor smallere schermen. Beide zijn klaar voor implementatie.' },

  'case.trainer.label.penguin':  { en: 'Penguin Race — AI-generated theme, same interaction type', nl: 'Pinguïnrace — AI-gegenereerd thema, hetzelfde interactietype' },
  'case.trainer.label.ocean':    { en: 'Ocean Cleaners — Fill-in-the-blank for verb spelling', nl: 'Oceaanopruimers — Invuloefening voor werkwoordspelling' },

  'case.trainer.results':        { en: 'Results', nl: 'Resultaten' },
  'case.trainer.results.1':      { en: 'Since launch in November 2025, over 130,000 unique students have completed a trainer session.', nl: 'Sinds de lancering in november 2025 hebben meer dan 130.000 unieke leerlingen een trainersessie afgerond.' },
  'case.trainer.results.2':      { en: 'In the busiest week, more than 220,000 trainer sessions were completed.', nl: 'In de drukste week werden meer dan 220.000 trainersessies afgerond.' },
  'case.trainer.results.3':      { en: 'Over 8,000 students use the Trainer as their only form of independent practice — students we wouldn\'t have reached otherwise.', nl: 'Meer dan 8.000 leerlingen gebruiken de Trainer als hun enige vorm van zelfstandig oefenen — leerlingen die we anders niet hadden bereikt.' },
  'case.trainer.results.4':      { en: 'The three trainers prove the scalable setup works: new themes, new interaction types, and new subject areas can be added without rewriting the foundation.', nl: 'De drie trainers bewijzen dat de schaalbare opzet werkt: nieuwe thema\'s, nieuwe interactietypen en nieuwe vakgebieden kunnen worden toegevoegd zonder de basis te herschrijven.' },
  'case.trainer.results.note':   { en: '<strong>Note:</strong> The charts below are based on a 20% sample. The numbers above reflect estimated real-world totals.', nl: '<strong>Let op:</strong> De grafieken hieronder zijn gebaseerd op een steekproef van 20%. De cijfers hierboven zijn geschatte totalen.' },

  'case.trainer.label.totalSessions': { en: 'Total completed trainer sessions (week over week)', nl: 'Totaal voltooide trainersessies (week over week)' },
  'case.trainer.label.uniqueReach':   { en: 'Students using Trainer as their only form of independent practice', nl: 'Leerlingen die Trainer als enige vorm van zelfstandig oefenen gebruiken' },

  // Next project links
  'case.nav.next':        { en: 'Evolving a design system to scale &rarr;', nl: 'Een design system laten meegroeien &rarr;' },
  'case.ds.next':         { en: 'From UX vision to an educational trainer &rarr;', nl: 'Van UX-visie naar een educatieve trainer &rarr;' },
  'case.trainer.next':    { en: 'Enhancing teachers\' productivity &rarr;', nl: 'Leerkrachten productiever maken &rarr;' },
};


/* ── i18n Engine ─────────────────────────────── */

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateGreeting(lang);
  updatePageMeta(lang);
  updateLangToggle(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = translations[key];
    if (!t) return;

    const value = t[lang] || t.en;

    // Determine whether to use innerHTML or textContent
    // Use innerHTML if the translation contains HTML tags
    if (value.includes('<') || value.includes('&')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

function updateGreeting(lang) {
  const el = document.getElementById('greeting');
  if (!el) return;

  const hour = new Date().getHours();
  let key;
  if (hour < 12) key = 'home.greeting.morning';
  else if (hour < 18) key = 'home.greeting.afternoon';
  else key = 'home.greeting.evening';

  const t = translations[key];
  if (t) el.textContent = t[lang] || t.en;
}

function updatePageMeta(lang) {
  // Find the page-specific title/meta keys from data attributes on <html> or <body>
  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  const metaKey = document.documentElement.getAttribute('data-i18n-meta');

  if (titleKey && translations[titleKey]) {
    document.title = translations[titleKey][lang] || translations[titleKey].en;
  }

  if (metaKey && translations[metaKey]) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[metaKey][lang] || translations[metaKey].en);
    }
  }
}

function updateLangToggle(lang) {
  // Update the current label
  const current = document.querySelector('.lang-switch__current');
  if (current) current.textContent = lang.toUpperCase();

  // Update active state in dropdown
  document.querySelectorAll('.lang-switch__option').forEach(opt => {
    opt.classList.toggle('lang-switch__option--active', opt.dataset.lang === lang);
  });
}

/* ── Initialize ──────────────────────────────── */

function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;

  // Apply translations after a tick to ensure components.js has rendered
  requestAnimationFrame(() => {
    applyTranslations(lang);
    updateGreeting(lang);
    updatePageMeta(lang);
    updateLangToggle(lang);
  });

  // Listen for language switcher clicks (delegated, since nav is rendered dynamically)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.lang-switch__trigger');
    const option = e.target.closest('.lang-switch__option');
    const langSwitch = document.querySelector('.lang-switch');

    if (trigger && langSwitch) {
      // Toggle dropdown
      langSwitch.classList.toggle('lang-switch--open');
      trigger.setAttribute('aria-expanded',
        langSwitch.classList.contains('lang-switch--open'));
      return;
    }

    if (option && option.dataset.lang) {
      // Select language
      setLang(option.dataset.lang);
      if (langSwitch) {
        langSwitch.classList.remove('lang-switch--open');
        const trig = langSwitch.querySelector('.lang-switch__trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
      }
      return;
    }

    // Close dropdown when clicking outside
    if (langSwitch && !e.target.closest('.lang-switch')) {
      langSwitch.classList.remove('lang-switch--open');
      const trig = langSwitch.querySelector('.lang-switch__trigger');
      if (trig) trig.setAttribute('aria-expanded', 'false');
    }
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
