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
  'footer.updated':     { en: 'Last updated: October 2026', nl: 'Laatst bijgewerkt: oktober 2026' },
  'footer.copy':        { en: '&copy; 2026 Ward de Groot', nl: '&copy; 2026 Ward de Groot' },

  // ── Homepage ────────────────────────────────
  'home.title':         { en: 'Ward de Groot | UX / Product Designer', nl: 'Ward de Groot | UX / Product Designer' },
  'home.meta':          { en: 'Portfolio of Ward de Groot, a UX / Product Designer who thinks in systems, not just screens.', nl: 'Portfolio van Ward de Groot, UX / Product Designer die denkt in systemen en niet alleen in schermen.' },

  // Greeting (set dynamically in main.js)
  'home.greeting.morning':   { en: 'Good morning',   nl: 'Goedemorgen' },
  'home.greeting.afternoon': { en: 'Good afternoon', nl: 'Goedemiddag' },
  'home.greeting.evening':   { en: 'Good evening',   nl: 'Goedenavond' },

  // Hero statements
  'home.hero.1':        { en: 'I go where the problem needs me.', nl: 'Ik zoek het probleem op, waar het ook zit.' },
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
  'card.ds.desc':       { en: 'Rethinking Gynzy\'s design system so it could scale from one audience to two, without doubling the work', nl: 'Gynzy\'s design system herdenken zodat het kon meegroeien van één doelgroep naar twee, zonder dubbel werk' },
  'card.trainer.title': { en: 'From UX vision to an educational trainer', nl: 'Van UX-visie naar een educatieve trainer' },
  'card.trainer.desc':  { en: 'How strategic thinking and ethnographic research led to a scalable platform for independent learning', nl: 'Hoe strategisch denken en etnografisch onderzoek leidden tot een schaalbaar platform voor zelfstandig leren' },
  'card.onb.title': { en: 'A back-to-school flow that works for teachers and Gynzy', nl: 'Een start van het schooljaar die werkt voor leerkrachten én Gynzy' },
  'card.onb.desc': { en: 'An onboarding that gets teachers ready faster and teaches Gynzy who its users are', nl: 'Een onboarding die leerkrachten sneller klaarzet en Gynzy leert wie zijn gebruikers zijn' },
  'card.readMore':      { en: 'Read more', nl: 'Lees meer' },

  // ── Projects page ───────────────────────────
  'projects.title':     { en: 'My Work | Ward de Groot', nl: 'Mijn werk | Ward de Groot' },
  'projects.meta':      { en: 'Selected projects in UX design, product strategy, and design systems by Ward de Groot.', nl: 'Geselecteerde projecten in UX design, productstrategie en design systems door Ward de Groot.' },
  'projects.heading':   { en: 'My work', nl: 'Mijn werk' },
  'projects.subtitle':  { en: 'A selection of projects where I combined research, strategy, and hands-on design to solve real problems for teachers and students.', nl: 'Een selectie projecten waarin ik onderzoek, strategie en hands-on design combineerde om echte problemen voor leerkrachten en leerlingen op te lossen.' },

  // ── About page ──────────────────────────────
  'about.title':        { en: 'About Me | Ward de Groot', nl: 'Over mij | Ward de Groot' },
  'about.meta':         { en: 'About Ward de Groot: UX / Product Designer passionate about crafting meaningful experiences.', nl: 'Over Ward de Groot: UX / Product Designer met passie voor betekenisvolle ervaringen.' },
  'about.heading':      { en: 'About me', nl: 'Over mij' },

  'about.intro.1':      { en: 'I\'m Ward, a UX Designer from Noord-Brabant with a soft spot for complex problems and the people behind them. I studied Industrial Design at Eindhoven University of Technology, where I got hooked on the intersection of psychology, strategy, and technology. That\'s still what drives me today.', nl: 'Ik ben Ward, UX Designer uit Noord-Brabant met een zwak voor complexe problemen en de mensen erachter. Ik heb Industrial Design gestudeerd aan de TU Eindhoven. Daar raakte ik gegrepen door het snijvlak van psychologie, strategie en technologie, en dat drijft me nog steeds.' },
  'about.intro.2':      { en: 'At <strong style="color: var(--color-text);">Gynzy</strong>, I work on an educational platform used by thousands of teachers and students. My goal is simple: make their day a little better, every day. Sometimes that means facilitating a workshop, sometimes diving deep into research data, sometimes quickly prototyping a solution. I adapt to what the situation needs.', nl: 'Bij <strong style="color: var(--color-text);">Gynzy</strong> werk ik aan een educatief platform dat door duizenden leerkrachten en leerlingen wordt gebruikt. Mijn doel is simpel: hun dag elke keer een stukje beter maken. Soms betekent dat een workshop faciliteren, soms diep in onderzoeksdata duiken en soms snel een oplossing prototypen. Ik pas me aan op wat de situatie vraagt.' },
  'about.intro.3':      { en: 'Outside of Gynzy, I\'ve co-founded a sustainable wine company, published academic research in dementia care, and spent a research semester in Sydney. I\'m endlessly curious, pretty direct, and always up for a good conversation.', nl: 'Naast Gynzy heb ik een duurzaam wijnbedrijf mede-opgericht, academisch onderzoek gepubliceerd in dementiezorg, en een onderzoekssemester in Sydney doorgebracht. Ik ben eindeloos nieuwsgierig, vrij direct, en altijd in voor een goed gesprek.' },

  'about.howIWork':     { en: 'How I work', nl: 'Hoe ik werk' },

  'about.approach.title': { en: 'Whatever the situation asks for', nl: 'Wat de situatie ook vraagt' },
  'about.approach.desc':  { en: 'I don\'t have a fixed playbook. Some problems need deep research before you touch a single pixel. Others need a quick prototype by tomorrow. I read the room, adapt my approach, and go where the impact is. The one constant: I always start by understanding people.', nl: 'Ik heb geen vast draaiboek. Sommige problemen vragen om diepgaand onderzoek voordat je ook maar één pixel aanraakt. Andere om een snel prototype voor morgen. Ik lees de situatie, pas mijn aanpak aan, en ga waar de impact zit. De enige constante: ik begin altijd bij het begrijpen van mensen.' },

  'about.data.title':    { en: 'Data-informed, not data-driven', nl: 'Gevoed door data, niet gestuurd door data' },
  'about.data.desc':     { en: 'Numbers only tell part of the story. That\'s why I combine quantitative insights with qualitative research, like school visits, user interviews, and usability tests. The best design decisions happen when both sides of that story inform each other.', nl: 'Cijfers vertellen maar een deel van het verhaal. Daarom combineer ik kwantitatieve inzichten met kwalitatief onderzoek, zoals schoolbezoeken, gebruikersinterviews en usability tests. De beste ontwerpbeslissingen ontstaan wanneer beide kanten van dat verhaal elkaar versterken.' },

  'about.nextLevel.title': { en: 'Thinking beyond individual screens', nl: 'Verder denken dan losse schermen' },
  'about.nextLevel.desc':  { en: 'I care about more than individual screens. I think in systems, patterns, and principles that structurally raise the bar for the entire product. Whether it\'s evolving a design system or shaping a UX vision, I want to leave things better than I found them.', nl: 'Ik kijk verder dan losse schermen. Ik denk in systemen, patronen en principes die het hele product structureel naar een hoger niveau tillen. Of het nu gaat om het doorontwikkelen van een design system of het vormgeven van een UX-visie: ik wil dingen beter achterlaten dan ik ze aantrof.' },

  'about.ai.title':      { en: 'Multiplying impact through AI and strategy', nl: 'Impact vermenigvuldigen met AI en strategie' },
  'about.ai.desc':       { en: 'I use AI to amplify what my team can do. Ideas that would otherwise take weeks, I now prototype in days, and I build components and features in code myself. Combined with a strategic perspective, that creates leverage: I don\'t just design solutions, I ship them.', nl: 'Ik gebruik AI om te versterken wat mijn team kan. Ideeën die anders weken zouden kosten, prototype ik nu in dagen, en componenten en features bouw ik zelf in code. Samen met een strategische blik levert dat meer op dan mijn eigen output: ik ontwerp oplossingen niet alleen, ik lever ze ook op.' },

  // ── CV page ─────────────────────────────────
  'cv.title':            { en: 'CV | Ward de Groot', nl: 'CV | Ward de Groot' },
  'cv.meta':             { en: 'Experience and skills of Ward de Groot, UX / Product Designer.', nl: 'Ervaring en vaardigheden van Ward de Groot, UX / Product Designer.' },
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
  'cv.gynzy.company':    { en: 'Gynzy · \'s-Hertogenbosch', nl: 'Gynzy · \'s-Hertogenbosch' },
  'cv.gynzy.1':          { en: 'Conducting design research to gather deep insights into user behavior', nl: 'Design research uitvoeren om diepgaand inzicht te krijgen in gebruikersgedrag' },
  'cv.gynzy.2':          { en: 'Translating qualitative and quantitative data into user-friendly interfaces', nl: 'Kwalitatieve en kwantitatieve data vertalen naar gebruiksvriendelijke interfaces' },
  'cv.gynzy.3':          { en: 'Collaborating with subject-matter experts, developers and product owners', nl: 'Samenwerken met vakexperts, developers en product owners' },
  'cv.gynzy.4':          { en: 'Communicating design decisions grounded in psychology', nl: 'Ontwerpbeslissingen communiceren onderbouwd met psychologie' },
  'cv.gynzy.5':          { en: 'Shaping the product\'s UX vision, aligning stakeholders, and influencing the roadmap', nl: 'De UX-visie van het product vormgeven, stakeholders op één lijn brengen en de roadmap beïnvloeden' },

  // Vavino
  'cv.vavino.title':     { en: 'Co-founder', nl: 'Mede-oprichter' },
  'cv.vavino.company':   { en: 'Vavino · Reusel', nl: 'Vavino · Reusel' },
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
  'cv.sparckel.company': { en: 'Sparckel · HTC Eindhoven', nl: 'Sparckel · HTC Eindhoven' },
  'cv.sparckel.1':       { en: 'Designed biodynamic light fixtures', nl: 'Biodynamische verlichtingsarmaturen ontworpen' },
  'cv.sparckel.2':       { en: '3D modeling and prototyping', nl: '3D-modelleren en prototypen' },
  'cv.sparckel.3':       { en: 'Rebranded from Vitaallicht to Sparckel', nl: 'Rebranding van Vitaallicht naar Sparckel' },
  'cv.sparckel.4':       { en: 'Conducted user interviews', nl: 'Gebruikersinterviews afgenomen' },

  // Education
  'cv.centercentre.title': { en: 'Craft + Lead a Strategic UX Vision', nl: 'Craft + Lead a Strategic UX Vision' },
  'cv.centercentre.company': { en: 'Center Centre · Online Intensive', nl: 'Center Centre · Online Intensive' },
  'cv.centercentre.1':  { en: 'Establishing strategic UX goals and researching current experiences', nl: 'Strategische UX-doelen bepalen en huidige ervaringen onderzoeken' },
  'cv.centercentre.2':  { en: 'Creating a UX vision and placing it in the product roadmap', nl: 'Een UX-visie creëren en in de productroadmap plaatsen' },
  'cv.centercentre.3':  { en: 'Leading the organization to achieve the vision', nl: 'De organisatie leiden richting het realiseren van de visie' },

  'cv.psychology.title': { en: 'Product Psychology Masterclass', nl: 'Product Psychology Masterclass' },
  'cv.psychology.company': { en: 'Growth.Design · Online', nl: 'Growth.Design · Online' },
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
  'case.nav.title':       { en: 'Enhancing Teachers\' Productivity | Ward de Groot', nl: 'Leerkrachten productiever maken | Ward de Groot' },
  'case.nav.meta':        { en: 'Redesigning navigation and reducing cognitive load to help teachers work faster and feel more in control.', nl: 'Navigatie herontwerpen en cognitieve belasting verlagen zodat leerkrachten sneller werken en meer controle ervaren.' },
  'case.nav.back':        { en: '&larr; Back to all projects', nl: '&larr; Terug naar alle projecten' },
  'case.nav.heading':     { en: 'Enhancing teachers\' productivity', nl: 'Leerkrachten productiever maken' },
  'case.nav.desc':        { en: 'Gynzy\'s icon-only sidebar was confusing teachers and holding the product back. I led a three-phase redesign that cut lesson access from 3 clicks to 1, and gave the platform room to grow again.', nl: 'Gynzy\'s sidebar met alleen iconen was verwarrend voor leerkrachten en remde de groei van het product. Ik leidde een herontwerp in drie fasen. Een les openen kost nu 1 klik in plaats van 3, en het platform heeft weer ruimte om te groeien.' },

  // Meta
  'case.meta.role':       { en: 'My role', nl: 'Mijn rol' },
  'case.meta.team':       { en: 'The team', nl: 'Het team' },
  'case.meta.duration':   { en: 'Duration', nl: 'Looptijd' },
  'case.nav.role':        { en: 'UX Designer / Researcher', nl: 'UX Designer / Researcher' },
  'case.nav.team':        { en: 'Product owner, 3 developers', nl: 'Product owner, 3 developers' },
  'case.nav.duration':    { en: '&plusmn; 6 months (3 phases)', nl: '&plusmn; 6 maanden (3 fasen)' },

  // ToC
  'case.nav.toc.challenge':      { en: 'The challenge', nl: 'De uitdaging' },
  'case.nav.toc.makingTheCase':  { en: 'Making the case', nl: 'Draagvlak creëren' },
  'case.nav.toc.solution':       { en: 'The solution', nl: 'De oplossing' },
  'case.nav.toc.implementation': { en: 'Implementation', nl: 'Implementatie' },
  'case.nav.toc.results':        { en: 'Results', nl: 'Resultaten' },

  // Section headings
  'case.nav.challenge':      { en: 'The challenge', nl: 'De uitdaging' },
  'case.nav.challenge.1':    { en: 'Navigation was a left sidebar of unlabeled icons. Teachers couldn\'t figure out what they meant', nl: 'De navigatie bestond uit een linkerzijbalk met iconen zonder labels. Leerkrachten snapten niet wat ze betekenden' },
  'case.nav.challenge.2':    { en: 'The landing page after sign-in wasn\'t even the top icon, causing immediate disorientation', nl: 'De landingspagina na inloggen was niet eens het bovenste icoon, wat direct voor verwarring zorgde' },
  'case.nav.challenge.3':    { en: 'Zero room left to add new features without degrading the experience further', nl: 'Geen ruimte meer om nieuwe features toe te voegen zonder de ervaring verder te verslechteren' },
  'case.nav.challenge.4':    { en: 'Multiple development teams independently flagged the scalability problem', nl: 'Meerdere ontwikkelteams liepen los van elkaar tegen hetzelfde schaalbaarheidsprobleem aan' },
  'case.nav.challenge.5':    { en: 'The Ember and Flutter applications had different scaling behavior across devices', nl: 'De Ember- en Flutter-applicaties schaalden verschillend op uiteenlopende apparaten' },
  'case.nav.challenge.6':    { en: 'Teachers use desktops and interactive whiteboards, so both cursor and touch input had to work', nl: 'Leerkrachten gebruiken desktops en digiborden, dus zowel muis als touch moest goed werken' },

  'case.nav.makingTheCase':      { en: 'Making the case', nl: 'Draagvlak creëren' },
  'case.nav.makingTheCase.desc': { en: 'Data alone wasn\'t enough to convince stakeholders. So I presented the experience through the eyes of a first-time teacher, walking through the confusion step by step. That shifted the conversation from "is it good enough?" to "this is hurting users."', nl: 'Data alleen was niet genoeg om stakeholders te overtuigen. Daarom liet ik de ervaring zien door de ogen van een nieuwe leerkracht, die stap voor stap verdwaalt. Dat verschoof het gesprek van "is het goed genoeg?" naar "dit schaadt gebruikers."' },
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
  'case.nav.implementation.desc': { en: 'The scope was too large for a single release. So I proposed three sequential phases, each shipping real improvements while building toward the bigger vision.', nl: 'De scope was te groot voor één release. Daarom stelde ik drie opeenvolgende fasen voor: elke fase levert direct verbetering op en brengt ons dichter bij de grotere visie.' },

  'case.nav.phase1':             { en: 'Phase 1: Clean up & rebuild', nl: 'Fase 1: Opschonen & herbouwen' },
  'case.nav.phase1.1':           { en: 'Removed non-core features from the sidebar', nl: 'Niet-essentiële features uit de sidebar verwijderd' },
  'case.nav.phase1.2':           { en: 'Rewrote the Ember-based toolbar in Flutter', nl: 'De Ember-toolbar herschreven in Flutter' },
  'case.nav.phase1.3':           { en: 'Reduced clutter and established a maintainable codebase', nl: 'Rommel verminderd en een onderhoudbare codebase opgezet' },
  'case.nav.phase1.caption':     { en: 'The toolbar transition from Ember to Flutter.', nl: 'De toolbar-overgang van Ember naar Flutter.' },

  'case.nav.phase2':             { en: 'Phase 2: The start page', nl: 'Fase 2: De startpagina' },
  'case.nav.phase2.1':           { en: 'Introduced a dedicated landing page so teachers see their schedule immediately after sign-in', nl: 'Een eigen landingspagina geïntroduceerd zodat leerkrachten direct na inloggen hun rooster zien' },
  'case.nav.phase2.2':           { en: 'Evolved from a promotional first version to a personalized daily hub', nl: 'Geëvolueerd van een promotionele eerste versie naar een gepersonaliseerde dagelijkse hub' },
  'case.nav.phase2.3':           { en: 'Single biggest improvement: opening a lesson went from 3 clicks to 1', nl: 'Grootste verbetering: een les openen ging van 3 klikken naar 1' },

  'case.nav.phase3':             { en: 'Phase 3: Secondary navigation', nl: 'Fase 3: Secundaire navigatie' },
  'case.nav.phase3.1':           { en: 'Added a secondary navigation layer. Everything lives on the left, giving users a consistent mental model', nl: 'Een secundaire navigatielaag toegevoegd. Alles zit links, wat gebruikers een consistent mentaal model geeft' },
  'case.nav.phase3.2':           { en: 'Created room for new features without mixing horizontal and vertical patterns', nl: 'Ruimte gecreëerd voor nieuwe features zonder horizontale en verticale patronen te mengen' },

  'case.nav.results':            { en: 'Results', nl: 'Resultaten' },
  'case.nav.results.1':          { en: 'Lesson access went from 3+ clicks to 1. Teachers do this dozens of times a day, so it adds up fast across thousands of classrooms', nl: 'Een les openen ging van 3+ klikken naar 1. Leerkrachten doen dit tientallen keren per dag, dus dat tikt flink aan' },
  'case.nav.results.2':          { en: 'The navigation architecture now scales: new features have a clear home', nl: 'De navigatie-architectuur schaalt nu mee: nieuwe features hebben een duidelijke plek' },
  'case.nav.results.3':          { en: 'Mixed Ember/Flutter codebase consolidated into Flutter', nl: 'Gemixte Ember/Flutter-codebase geconsolideerd naar Flutter' },
  'case.nav.results.4':          { en: 'Responsive scaling works consistently across all supported devices', nl: 'Responsieve schaling werkt consistent op alle ondersteunde apparaten' },
  'case.nav.results.5':          { en: 'Product team went from "we can\'t add anything" to having room to build', nl: 'Het productteam ging van "we kunnen niks meer toevoegen" naar ruimte om te bouwen' },

  // Image labels — Navigation
  'case.nav.label.before':       { en: 'Before: icon-only sidebar in Ember', nl: 'Voor: sidebar met alleen iconen in Ember' },
  'case.nav.label.after':        { en: 'After: redesigned library navigation', nl: 'Na: herontworpen bibliotheeknavigatie' },
  'case.nav.label.collapsed':    { en: 'Collapsed: category icons only', nl: 'Ingeklapt: alleen categorie-iconen' },
  'case.nav.label.expanded':     { en: 'Expanded: full category list', nl: 'Uitgeklapt: volledige categorielijst' },
  'case.nav.label.sidebarCaption': { en: 'Early exploration of the secondary sidebar: a collapsible category menu that expands in place.', nl: 'Vroege verkenning van de secundaire sidebar: een inklapbaar categoriemenu dat ter plekke uitklapt.' },
  'case.nav.label.startV1':      { en: 'First iteration: promotional landing page', nl: 'Eerste iteratie: promotionele landingspagina' },
  'case.nav.label.startLive':    { en: 'Live: seasonal highlighted content', nl: 'Live: seizoensgebonden uitgelichte content' },
  'case.nav.label.startFuture':  { en: 'Future: search bar & secondary nav', nl: 'Toekomst: zoekbalk & secundaire navigatie' },
  'case.nav.label.lessonFolder': { en: 'Lesson folders: tree navigation', nl: 'Lesmappen: boomnavigatie' },
  'case.nav.label.curriculum':   { en: 'Curriculum: subject hierarchy', nl: 'Curriculum: vakhiërarchie' },
  'case.nav.label.treeCaption':  { en: 'The secondary navigation as a tree. Folders and curricula need hierarchy without leaving the page.', nl: 'De secundaire navigatie als boomstructuur. Mappen en curricula hebben hiërarchie nodig, zonder dat je de pagina verlaat.' },

  // Next project
  'case.nextProject':            { en: 'Next project', nl: 'Volgend project' },

  // ── Case study: Design System ───────────────
  'case.ds.title':        { en: 'Evolving a design system to scale | Ward de Groot', nl: 'Een design system laten meegroeien | Ward de Groot' },
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
  'case.ds.challenge.1':        { en: 'Gynzy\'s design system started in Sketch and was migrated to Figma. But the migration was a straight copy-paste, with no rethinking of structure or naming.', nl: 'Het design system van Gynzy begon in Sketch en verhuisde naar Figma. Die migratie was alleen een één-op-één kopie, zonder de structuur of naamgeving opnieuw te bekijken.' },
  'case.ds.challenge.2':        { en: 'The design team refreshed the color palette because the old colors felt dull, but without a token architecture to support it, the update had to be applied manually everywhere.', nl: 'Het designteam vernieuwde het kleurenpalet omdat de oude kleuren saai aanvoelden, maar zonder een token-architectuur om het te ondersteunen moest de update overal handmatig worden doorgevoerd.' },
  'case.ds.challenge.3':        { en: 'Components kept being recreated without shared rules. Designers built what they needed in the moment, which led to inconsistency across the product.', nl: 'Componenten werden telkens opnieuw gemaakt zonder gedeelde regels. Designers bouwden wat ze op dat moment nodig hadden, met inconsistentie door het hele product als gevolg.' },
  'case.ds.challenge.4':        { en: 'As more work shifted to the student environment, the problem multiplied: every component essentially needed a teacher version and a student version.', nl: 'Naarmate meer werk verschoof naar de leerlingomgeving, vermenigvuldigde het probleem zich: elk component had in feite een leerkracht- en een leerlingversie nodig.' },

  'case.ds.solution':           { en: 'The solution', nl: 'De oplossing' },
  'case.ds.solution.1':         { en: 'When the organization committed to Flutter, the migration created a natural moment to rethink the design system from the ground up.', nl: 'Toen de organisatie koos voor Flutter, creëerde de migratie een natuurlijk moment om het design system vanaf de grond opnieuw te doordenken.' },
  'case.ds.solution.2':         { en: 'Instead of maintaining separate component sets for teachers and students, I introduced an alias layer: a set of semantic tokens that map to different values depending on context.', nl: 'In plaats van aparte componentsets voor leerkrachten en leerlingen te onderhouden, introduceerde ik een alias-laag: een set semantische tokens die per context naar andere waarden verwijzen.' },
  'case.ds.solution.3':         { en: 'The alias layer controls spacing, padding, typography, and sizing. That way, a single component adapts automatically to the teacher or student environment.', nl: 'De alias-laag regelt spacing, padding, typografie en sizing. Zo schaalt één component automatisch mee naar de leerkracht- of leerlingomgeving.' },
  'case.ds.solution.4':         { en: 'I also prepared the alias structure for whitelabel use, building in variable modes that could support different brand contexts in the future.', nl: 'Ik bereidde de alias-structuur ook voor op whitelabel-gebruik, met variabele modes die in de toekomst verschillende merkcontexten kunnen ondersteunen.' },

  // Image labels — Design System
  'case.ds.label.primitive':     { en: 'Primitive tokens: raw values, context-unaware', nl: 'Primitive tokens: ruwe waarden, zonder context' },
  'case.ds.label.alias':         { en: 'Alias tokens: mapped per context (teacher / student)', nl: 'Alias tokens: gekoppeld per context (leerkracht / leerling)' },
  'case.ds.label.tokenCaption':  { en: 'Primitives define raw values. The alias layer maps the same token name to different primitives per context, so components don\'t need to be duplicated.', nl: 'Primitives definiëren ruwe waarden. De alias-laag koppelt dezelfde tokennaam per context aan andere primitives, zodat componenten niet gedupliceerd hoeven te worden.' },
  'case.ds.label.teacher':       { en: 'Teacher context', nl: 'Leerkracht-context' },
  'case.ds.label.student':       { en: 'Student context', nl: 'Leerling-context' },
  'case.ds.label.modalCaption':  { en: 'Same component, different context. The alias layer adapts spacing, typography, and sizing for teachers and students without duplicating the component.', nl: 'Hetzelfde component in een andere context. De alias-laag past spacing, typografie en sizing aan voor leerkrachten en leerlingen, zonder het component te dupliceren.' },

  'case.ds.implementation':      { en: 'Implementation', nl: 'Implementatie' },
  'case.ds.implementation.1':    { en: 'Worked closely with a developer to define how tokens would translate into Flutter\'s theming system.', nl: 'Nauw samengewerkt met een developer om te bepalen hoe tokens vertaald zouden worden naar Flutter\'s theming-systeem.' },
  'case.ds.implementation.2':    { en: 'Rolled out incrementally: components were migrated one by one instead of in one big-bang switch.', nl: 'Stapsgewijs uitgerold: componenten één voor één gemigreerd in plaats van alles in één keer om te zetten.' },
  'case.ds.implementation.3':    { en: 'The developer handled the scaling logic between Flutter and the remaining Ember parts of the application.', nl: 'De developer nam de schaallogica voor zijn rekening tussen Flutter en de resterende Ember-onderdelen van de applicatie.' },
  'case.ds.implementation.4':    { en: 'Once AI tooling became available, I could add and update token values and create components on my own. That sped up the process significantly.', nl: 'Toen AI-tooling beschikbaar kwam, kon ik zelf tokenwaarden toevoegen en bijwerken en componenten aanmaken. Dat versnelde het proces flink.' },

  'case.ds.results':             { en: 'Results', nl: 'Resultaten' },
  'case.ds.results.1':           { en: 'New components can be created faster because the token structure does the heavy lifting.', nl: 'Nieuwe componenten kunnen sneller worden gemaakt omdat de tokenstructuur het zware werk doet.' },
  'case.ds.results.2':           { en: 'A more consistent experience across teacher and student contexts, built from shared components instead of parallel versions.', nl: 'Een consistentere ervaring in zowel de leerkracht- als leerlingcontext, gebouwd vanuit gedeelde componenten in plaats van parallelle versies.' },
  'case.ds.results.3':           { en: 'The visual language was refreshed, brighter and more intentional, without a separate redesign effort.', nl: 'De visuele taal is opgefrist, helderder en bewuster, zonder apart herontwerptraject.' },
  'case.ds.results.4':           { en: 'The alias layer is future-proof: whitelabel support is built in from the start.', nl: 'De alias-laag is toekomstbestendig: whitelabel-ondersteuning zit er vanaf het begin in.' },

  // Before/After labels
  'case.ds.label.iconsBefore':   { en: 'Before: bulkier, heavier stroke weight', nl: 'Voor: lomper, zwaardere lijndikte' },
  'case.ds.label.iconsAfter':    { en: 'After: lighter, more elegant line work', nl: 'Na: lichter, eleganter lijnwerk' },
  'case.ds.label.buttonsBefore': { en: 'Before: outdated inner shadows, minimal roundness, oversized icons', nl: 'Voor: verouderde binnenschaduwen, minimale ronding, te grote iconen' },
  'case.ds.label.buttonsAfter':  { en: 'After: more roundness, no inner shadows, better icon-text balance', nl: 'Na: meer ronding, geen binnenschaduwen, betere balans tussen icoon en tekst' },
  'case.ds.label.colorBefore':   { en: 'Before: limited color range with dull tones', nl: 'Voor: beperkt kleurbereik met doffe tinten' },
  'case.ds.label.colorAfter':    { en: 'After: expanded palette with vibrant colors', nl: 'Na: uitgebreid palet met levendige kleuren' },
  'case.ds.label.owBefore':      { en: 'Before: orange & yellow lacked vibrancy', nl: 'Voor: oranje & geel misten levendigheid' },
  'case.ds.label.owAfter':       { en: 'After: brighter, more playful range', nl: 'Na: helderder, speelser bereik' },
  'case.ds.label.colorCaption':  { en: 'For a product used by teachers and students, color matters. The old palette felt dull. The refresh brought the vibrancy the product needed.', nl: 'In een product voor leerkrachten én leerlingen doet kleur ertoe. Het oude palet voelde dof aan. De opfrisbeurt bracht de levendigheid die het product nodig had.' },

  // Standalone challenge labels (shown above the before/after in challenge section)
  'case.ds.label.bulkyIcons':    { en: 'Bulky icon set with heavy stroke weight', nl: 'Lompe iconenset met zware lijndikte' },
  'case.ds.label.oldButtons':    { en: 'Outdated inner shadows, minimal roundness, oversized icons', nl: 'Verouderde binnenschaduwen, minimale ronding, te grote iconen' },
  'case.ds.label.oldColors':     { en: 'Limited color range with dull tones', nl: 'Beperkt kleurbereik met doffe tinten' },

  // ── Case study: Trainer ─────────────────────
  'case.trainer.title':     { en: 'From UX vision to an educational trainer | Ward de Groot', nl: 'Van UX-visie naar een educatieve trainer | Ward de Groot' },
  'case.trainer.meta':      { en: 'How a strategic UX vision and ethnographic research led to a scalable platform for independent learning.', nl: 'Hoe een strategische UX-visie en etnografisch onderzoek leidden tot een schaalbaar platform voor zelfstandig leren.' },
  'case.trainer.back':      { en: '&larr; Back to all projects', nl: '&larr; Terug naar alle projecten' },
  'case.trainer.heading':   { en: 'From UX Vision to an Educational Trainer', nl: 'Van UX-visie naar een educatieve Trainer' },
  'case.trainer.desc':      { en: 'How crafting a strategic UX vision uncovered an unmet need, and led to a scalable platform for independent learning.', nl: 'Hoe een strategische UX-visie een onvervulde behoefte blootlegde, en leidde tot een schaalbaar platform voor zelfstandig leren.' },

  'case.trainer.role':      { en: 'UX Designer / Researcher', nl: 'UX Designer / Researcher' },
  'case.trainer.team':      { en: 'Product owner, 3 developers', nl: 'Product owner, 3 developers' },
  'case.trainer.duration':  { en: '&plusmn; 1 year', nl: '&plusmn; 1 jaar' },

  'case.trainer.toc.strategic':  { en: 'Strategic direction', nl: 'Strategische richting' },
  'case.trainer.toc.discovery':  { en: 'The discovery', nl: 'De ontdekking' },
  'case.trainer.toc.foundation': { en: 'The foundation', nl: 'De basis' },
  'case.trainer.toc.scalingUp':  { en: 'Scaling up', nl: 'Opschalen' },
  'case.trainer.toc.results':    { en: 'Results', nl: 'Resultaten' },

  'case.trainer.strategic':      { en: 'Setting the strategic direction', nl: 'De strategische richting bepalen' },
  'case.trainer.strategic.1':    { en: 'Design decisions were being made without enough contact with end users. I pushed for structurally more school visits and user conversations, so the team spent more time with real users.', nl: 'Ontwerpbeslissingen werden genomen zonder genoeg contact met eindgebruikers. Ik drong aan op structureel meer schoolbezoeken en gebruikersgesprekken, zodat het team meer tijd met echte gebruikers doorbracht.' },
  'case.trainer.strategic.2':    { en: 'Over the course of a year, I personally visited 8 schools, encouraged team members to visit schools too, and we ran structured online conversations. Altogether, that added up to roughly 70 hours of user contact.', nl: 'In één jaar tijd bezocht ik zelf 8 scholen, moedigde ik teamleden aan om ook te gaan, en voerden we gestructureerde online gesprekken. Bij elkaar opgeteld was dat zo\'n 70 uur gebruikerscontact.' },
  'case.trainer.strategic.3':    { en: 'The result was a UX vision, told as a story from the teacher\'s perspective: a future where all current frustrations are resolved. This story was printed and hung in the office, giving the entire team a shared picture of where we were heading.', nl: 'Het resultaat was een UX-visie, verteld als een verhaal vanuit het perspectief van de leerkracht: een toekomst waarin alle huidige frustraties zijn opgelost. Dit verhaal werd geprint en opgehangen op kantoor, zodat het hele team een gedeeld beeld had van waar we naartoe werkten.' },
  'case.trainer.strategic.caption': { en: 'Two spreads from the UX vision story. It\'s told from the teacher\'s perspective and paints a future where students learn independently and teachers have time for personal attention.', nl: 'Twee spreads uit het UX-visieverhaal. Het is verteld vanuit de leerkracht en schetst een toekomst waarin leerlingen zelfstandig leren en leerkrachten tijd hebben voor persoonlijke aandacht.' },

  'case.trainer.discovery':      { en: 'The discovery', nl: 'De ontdekking' },
  'case.trainer.discovery.1':    { en: 'The school visits revealed something invisible in our own data: teachers were using all kinds of separate practice software alongside Gynzy, especially for recurring learning goals like multiplication tables and verb spelling.', nl: 'De schoolbezoeken onthulden iets dat onzichtbaar was in onze eigen data: leerkrachten gebruikten allerlei losse oefensoftware naast Gynzy, vooral voor terugkerende leerdoelen zoals tafels en werkwoordspelling.' },
  'case.trainer.discovery.2':    { en: 'Beyond regular exercises, students needed a way to practice that was playful and motivating: independently, at their own level.', nl: 'Leerlingen hadden naast de reguliere oefeningen een manier nodig om speels en gemotiveerd te oefenen: zelfstandig en op hun eigen niveau.' },
  'case.trainer.discovery.3':    { en: 'This insight would never have surfaced from feature requests or usage data alone. It\'s exactly why we do ethnographic research: you have to be in the classroom to see what your data can\'t show you.', nl: 'Dit inzicht was nooit naar boven gekomen uit feature requests of gebruiksdata alleen. Het is precies waarom we etnografisch onderzoek doen: je moet in de klas staan om te ontdekken wat je data je niet kan vertellen.' },

  'case.trainer.foundation':     { en: 'Designing the foundation', nl: 'De basis ontwerpen' },
  'case.trainer.foundation.1':   { en: 'Gynzy already had a popular classroom feature: the Alpaca Race. The class splits into two teams and races by answering math facts as fast as possible. A proven concept, and a safe foundation to build on.', nl: 'Gynzy had al een populaire klassenfeature: de Alpacarace. De klas splitst zich in twee teams en racet tegen elkaar door rekensommen zo snel mogelijk te beantwoorden. Een bewezen concept, en dus een veilige basis om op voort te bouwen.' },
  'case.trainer.foundation.2':   { en: 'The first step was turning this into a single-player variant, so students could also practice independently. Same proven concept, new format.', nl: 'De eerste stap was dit omzetten naar een singleplayer-variant, zodat leerlingen ook zelfstandig konden oefenen. Hetzelfde bewezen concept, nieuw formaat.' },
  'case.trainer.foundation.3':   { en: 'From the start, the architecture was designed to scale along three axes: more interaction types (from multiple choice to fill-in-the-blank and beyond), more learning goals per type, and eventually more subject areas.', nl: 'Vanaf het begin was de architectuur ontworpen om langs drie assen te schalen: meer interactietypen (van meerkeuze tot invullen en verder), meer leerdoelen per type, en uiteindelijk meer vakgebieden.' },
  'case.trainer.foundation.4':   { en: 'Deliberate scope choices: assigning learning goals to students and showing results to teachers were descoped to ship fast.', nl: 'Bewuste scopekeuzes: leerdoelen toewijzen aan leerlingen en resultaten tonen aan leerkrachten werden uit de scope gehaald om snel te kunnen opleveren.' },
  'case.trainer.foundation.5':   { en: 'Everything had to be built in Flutter for the student environment, which the design system wasn\'t ready for yet. So this work ran in parallel with the evolution of the design system.', nl: 'Alles moest in Flutter gebouwd worden voor de leerlingomgeving, en daar was het design system nog niet op voorbereid. Dit werk liep daarom parallel aan de doorontwikkeling van het design system.' },

  'case.trainer.label.alpaca':   { en: 'Alpaca Trainer: single-player math facts with multiple choice', nl: 'Alpaca Trainer: rekensommen met meerkeuze, voor één speler' },

  'case.trainer.scalingUp':      { en: 'Scaling up', nl: 'Opschalen' },
  'case.trainer.scalingUp.1':    { en: 'The scalable architecture proved itself quickly. The Alpaca trainer was followed by a penguin-themed variant with largely AI-generated visuals and sounds. Same interaction type, different theme, more variety for students.', nl: 'De schaalbare architectuur bewees zich snel. Na de Alpaca-trainer volgde een pinguïnvariant met grotendeels AI-gegenereerde beelden en geluiden. Hetzelfde interactietype in een ander thema, voor meer variatie.' },
  'case.trainer.scalingUp.2':    { en: 'At the same time, a fundamentally different trainer was developed: the Ocean Cleaners. Instead of automatization (tapping the correct answer as fast as possible via multiple choice), this one is about practicing at your own pace, with fill-in-the-blank answers. First application: verb spelling.', nl: 'Tegelijkertijd werd een fundamenteel andere trainer ontwikkeld: de Oceaanopruimers. In plaats van automatiseren (het juiste antwoord zo snel mogelijk aantikken via meerkeuze), gaat deze over oefenen op je eigen tempo, met invulantwoorden. Eerste toepassing: werkwoordspelling.' },
  'case.trainer.scalingUp.3':    { en: 'The Ocean Cleaners introduced new design challenges. The input field had to work on Chromebooks with a physical keyboard and on iPads with an on-screen keyboard. That led to a density layer in the design system for adjusting element density per device. I also designed layouts for narrower screens. Both are ready for implementation.', nl: 'De Oceaanopruimers brachten nieuwe ontwerpuitdagingen. Het invoerveld moest werken op Chromebooks met een fysiek toetsenbord én op iPads met een schermtoetsenbord. Dat leidde tot een density-laag in het design system, waarmee de dichtheid van elementen per apparaat te regelen is. Daarnaast ontwierp ik lay-outs voor smallere schermen. Beide zijn klaar voor implementatie.' },

  'case.trainer.label.penguin':  { en: 'Penguin Race: AI-generated theme, same interaction type', nl: 'Pinguïnrace: AI-gegenereerd thema, hetzelfde interactietype' },
  'case.trainer.label.ocean':    { en: 'Ocean Cleaners: fill-in-the-blank for verb spelling', nl: 'Oceaanopruimers: invuloefening voor werkwoordspelling' },

  'case.trainer.results':        { en: 'Results', nl: 'Resultaten' },
  'case.trainer.results.1':      { en: 'Since launch in November 2025, over 130,000 unique students have completed a trainer session.', nl: 'Sinds de lancering in november 2025 hebben meer dan 130.000 unieke leerlingen een trainersessie afgerond.' },
  'case.trainer.results.2':      { en: 'In the busiest week, more than 220,000 trainer sessions were completed.', nl: 'In de drukste week werden meer dan 220.000 trainersessies afgerond.' },
  'case.trainer.results.3':      { en: 'Over 8,000 students use the Trainer as their only form of independent practice. Students we wouldn\'t have reached otherwise.', nl: 'Meer dan 8.000 leerlingen gebruiken de Trainer als enige vorm van zelfstandig oefenen. Die leerlingen hadden we anders niet bereikt.' },
  'case.trainer.results.4':      { en: 'The three trainers prove the scalable setup works: new themes, new interaction types, and new subject areas can be added without rewriting the foundation.', nl: 'De drie trainers bewijzen dat de schaalbare opzet werkt: nieuwe thema\'s, nieuwe interactietypen en nieuwe vakgebieden kunnen worden toegevoegd zonder de basis te herschrijven.' },
  'case.trainer.results.note':   { en: '<strong>Note:</strong> The charts below are based on a 20% sample. The numbers above reflect estimated real-world totals.', nl: '<strong>Let op:</strong> De grafieken hieronder zijn gebaseerd op een steekproef van 20%. De cijfers hierboven zijn geschatte totalen.' },

  'case.trainer.label.totalSessions': { en: 'Total completed trainer sessions (week over week)', nl: 'Totaal voltooide trainersessies (week over week)' },
  'case.trainer.label.uniqueReach':   { en: 'Students using Trainer as their only form of independent practice', nl: 'Leerlingen die Trainer als enige vorm van zelfstandig oefenen gebruiken' },

  // ── Case: Back-to-school onboarding ─────────
  'case.onb.title': { en: 'A back-to-school flow that works for teachers and Gynzy | Ward de Groot', nl: 'Een start van het schooljaar die werkt voor leerkrachten én Gynzy | Ward de Groot' },
  'case.onb.meta': { en: 'An adaptive back-to-school onboarding that gets teachers ready faster and teaches Gynzy who its users are.', nl: 'Een adaptieve onboarding bij de start van het schooljaar die leerkrachten sneller klaarzet en Gynzy leert wie zijn gebruikers zijn.' },
  'case.onb.back':        { en: '&larr; Back to all projects', nl: '&larr; Terug naar alle projecten' },
  'case.onb.heading': { en: 'A back-to-school flow that works for teachers and Gynzy', nl: 'Een start van het schooljaar die werkt voor leerkrachten én Gynzy' },
  'case.onb.desc': { en: 'After the summer, every teacher sets up their tools again. I turned that moment into a short, adaptive onboarding that creates value on both sides. Teachers get ready for the new school year faster: their classes are linked and duplicate accounts merged. Gynzy finally learns who its users are: we now know the grade of 74,000 teachers, and over 40,000 set their teaching method for the first time. The foundation for a more personal product. I also built most of the UI components myself, using AI.', nl: 'Na de zomer richt elke leerkracht zijn tools opnieuw in. Ik maakte van dat moment een korte, adaptieve onboarding met waarde voor twee kanten. Leerkrachten staan sneller klaar voor het nieuwe schooljaar: hun groepen worden gekoppeld en dubbele accounts samengevoegd. Gynzy leert eindelijk wie zijn gebruikers zijn: van 74.000 leerkrachten kennen we nu het leerjaar, en ruim 40.000 stelden voor het eerst hun methode in. Basis voor een persoonlijker product. De meeste UI-componenten bouwde ik zelf, met behulp van AI.' },
  'case.onb.role':        { en: 'UX Designer, UI built with AI', nl: 'UX Designer, UI gebouwd met AI' },
  'case.onb.team':        { en: 'Product owner, 2 developers', nl: 'Product owner, 2 developers' },
  'case.onb.duration':    { en: '&plusmn; 1.5 months', nl: '&plusmn; 1,5 maand' },

  'case.onb.toc.moment':   { en: 'The moment', nl: 'Het moment' },
  'case.onb.toc.goals':    { en: 'The goals', nl: 'De doelen' },
  'case.onb.toc.flow':     { en: 'The flow', nl: 'De flow' },
  'case.onb.toc.building': { en: 'Building with AI', nl: 'Bouwen met AI' },
  'case.onb.toc.results':  { en: 'Results', nl: 'Resultaten' },
  'case.onb.toc.next':     { en: 'Next steps', nl: 'Vervolgstappen' },

  'case.onb.moment':      { en: 'Why the start of the school year matters', nl: 'Waarom de start van het schooljaar zo belangrijk is' },
  'case.onb.moment.1':    { en: 'After the summer break, teachers return to a new class, sometimes a new grade, and set up Gynzy for the rest of the year. It\'s the one moment where almost every teacher is open to configuring things.', nl: 'Na de zomervakantie komen leerkrachten terug bij een nieuwe klas, soms zelfs een nieuw leerjaar, en richten ze Gynzy in voor de rest van het jaar. Het is hét moment waarop bijna elke leerkracht openstaat om dingen in te stellen.' },
  'case.onb.moment.2': { en: 'At the same time, what we knew about our users was often outdated or missing. Teachers often switch grades between school years, and only 6% of teachers had set their math method, 5% their spelling method.', nl: 'Tegelijk was wat we over onze gebruikers wisten vaak verouderd of onvolledig. Leerkrachten wisselen vaak van leerjaar, en maar 6% van de leerkrachten had een rekenmethode ingesteld, 5% een spellingmethode.' },
  'case.onb.moment.3':    { en: 'That made it hard to personalize the Start page, to target new features at the right teachers, and to trust our own data.', nl: 'Daardoor was het lastig om de Startpagina te personaliseren, nieuwe features bij de juiste leerkrachten te krijgen en op onze eigen data te vertrouwen.' },

  'case.onb.goals':       { en: 'The goals', nl: 'De doelen' },
  'case.onb.goals.teachers': { en: 'For teachers', nl: 'Voor leerkrachten' },
  'case.onb.goals.t1': { en: '<strong>A Start page that fits:</strong> by choosing their grades, teachers see content on their Start page that matches the grades they teach', nl: '<strong>Een Startpagina die past:</strong> door hun leerjaren aan te geven, zien leerkrachten op hun Startpagina content die aansluit op de leerjaren die ze lesgeven' },
  'case.onb.goals.t2': { en: '<strong>Suggestions that match their method:</strong> by setting their math and spelling method, teachers get suggestions that fit the method they teach with', nl: '<strong>Suggesties die passen bij hun methode:</strong> door hun reken- en spellingmethode in te stellen, krijgen leerkrachten suggesties die aansluiten op de methode waarmee ze lesgeven' },
  'case.onb.goals.t3': { en: '<strong>All students and groups at once:</strong> with Basispoort connected, teachers instantly have access to all students and groups of their school. That makes it much easier to use the other tools in Gynzy', nl: '<strong>Direct alle leerlingen en groepen:</strong> met een Basispoort-koppeling hebben leerkrachten direct toegang tot alle leerlingen en groepen van de school. Daardoor wordt het veel makkelijker om de andere tools in Gynzy te gebruiken' },
  'case.onb.goals.t4': { en: '<strong>One account:</strong> all their lessons in one place, instead of split across two accounts', nl: '<strong>Eén account:</strong> al hun lessen op één plek, in plaats van verdeeld over twee accounts' },
  'case.onb.goals.gynzy': { en: 'For Gynzy', nl: 'Voor Gynzy' },
  'case.onb.goals.g1': { en: '<strong>Know our users:</strong> which grade teachers teach and which methods they use', nl: '<strong>Onze gebruikers kennen:</strong> welk leerjaar leerkrachten lesgeven en welke methodes ze gebruiken' },
  'case.onb.goals.g2': { en: '<strong>Reach the right teachers:</strong> approach teachers in a more personal way when we launch future features', nl: '<strong>De juiste leerkrachten bereiken:</strong> leerkrachten persoonlijker benaderen bij toekomstige features' },
  'case.onb.goals.g3': { en: '<strong>Better data:</strong> fewer duplicate accounts and more schools connected to Basispoort', nl: '<strong>Betere data:</strong> minder dubbele accounts en meer scholen gekoppeld aan Basispoort' },

  'case.onb.toc.approach': { en: 'The approach', nl: 'De aanpak' },
  'case.onb.approach': { en: 'The approach', nl: 'De aanpak' },
  'case.onb.approach.desc': { en: 'We knew there was a lot to do before the start of the school year. So instead of starting with screens, I started with the question of who we were designing for.', nl: 'We wisten dat er voor de start van het schooljaar veel te doen was. Daarom begon ik niet met schermen, maar met de vraag voor wie we eigenlijk ontwierpen.' },
  'case.onb.data': { en: 'Starting with data', nl: 'Beginnen bij de data' },
  'case.onb.data.1': { en: 'I mapped the segments within the product and looked at which indicators best predict activity in Gynzy', nl: 'Ik bracht de segmenten binnen het product in kaart en keek welke indicatoren activiteit in Gynzy het best voorspellen' },
  'case.onb.data.2': { en: 'Only 6% of teachers had set their math method and 5% their spelling method, after a whole school year of slow growth. Yet exactly that information is essential for personalizing Gynzy, now and in the future', nl: 'Maar 6% van de leerkrachten had een rekenmethode ingesteld en 5% een spellingmethode, na een heel schooljaar van langzame groei. Terwijl juist die informatie onmisbaar is om Gynzy persoonlijker te maken, nu en in de toekomst' },
  'case.onb.data.3': { en: 'In the weeks before the school year starts, teachers already log in to set up all their systems again, Gynzy included. They have the time for it then. If they don\'t do it at that moment, chances are they never will', nl: 'In de weken voordat het schooljaar begint, loggen leerkrachten al in om al hun systemen opnieuw in te richten, Gynzy ook. Dan hebben ze er ook tijd voor. Doen ze het op dat moment niet, dan is de kans groot dat het er nooit meer van komt' },
  'case.onb.segments': { en: 'Choosing who to serve first', nl: 'Kiezen wie we eerst bedienen' },
  'case.onb.segments.1': { en: 'We split users by role (administrator or not), whether they\'re connected to a school, and whether that school has a Basispoort link', nl: 'We deelden gebruikers in op rol (wel of geen beheerder), of ze aan een school gekoppeld zijn, en of die school een Basispoort-koppeling heeft' },
  'case.onb.segments.2': { en: 'Teachers at a school with a Basispoort link turned out to be the most active, and they keep using Gynzy. That made them the most important group to reach', nl: 'Leerkrachten op een school met een Basispoort-koppeling bleken het actiefst, en zij blijven Gynzy gebruiken. Daarmee waren zij de belangrijkste groep om te bereiken' },
  'case.onb.segments.3': { en: 'Next came teachers who had set up a school, but no Basispoort link yet', nl: 'Daarna kwamen leerkrachten die wel een school hadden ingesteld, maar nog geen Basispoort-koppeling' },
  'case.onb.segments.4': { en: 'Teachers without a school were deliberately left out. The flow for adding a school already existed elsewhere, but not yet in Flutter, and we could still point them to it during the year', nl: 'Leerkrachten zonder school lieten we bewust buiten beschouwing. De flow om een school toe te voegen bestond al elders, maar nog niet in Flutter, en we konden ze er gedurende het jaar alsnog naartoe leiden' },
  'case.onb.hard': { en: 'Where it got hard', nl: 'Waar het lastig werd' },
  'case.onb.hard.1': { en: 'Designing the screens was the easy part. The real challenge was untangling all the segments, at the speed the start of the school year demanded', nl: 'De schermen ontwerpen was het makkelijke deel. De echte uitdaging zat in het uitpluizen van alle segmenten, in het tempo dat de start van het schooljaar vroeg' },
  'case.onb.hard.2': { en: 'Merging accounts took the most time. The flow also had to work in another part of the app, so it had to be set up in a scalable way', nl: 'Het samenvoegen van accounts kostte de meeste tijd. De flow moest ook op een andere plek in de applicatie werken, dus hij moest schaalbaar worden opgezet' },
  'case.onb.hard.3': { en: 'The matching logic was tricky: teachers with the same email domain at the same school, or with the same first or last name. We had to tell them apart without leaking other people\'s accounts into the UI', nl: 'De matchinglogica was lastig: leerkrachten met hetzelfde e-maildomein op dezelfde school, of met dezelfde voor- of achternaam. We moesten ze uit elkaar houden zonder accounts van anderen in de UI te tonen' },
  'case.onb.hard.4': { en: 'That flow came with lots of edge cases, and we had to course-correct several times along the way', nl: 'Die flow kende veel edge cases, en we hebben onderweg meerdere keren flink moeten bijsturen' },
  'case.onb.flow':        { en: 'The flow', nl: 'De flow' },
  'case.onb.flow.desc': { en: 'Instead of a long form, I designed a series of short steps. Each one asks a single question, and the flow adapts to the teacher\'s situation: steps without anything to show drop out, and a school without a Basispoort link gets a different step than a school that already has one.', nl: 'In plaats van een lang formulier ontwierp ik een reeks korte stappen. Elke stap stelt één vraag, en de flow past zich aan de situatie van de leerkracht aan: stappen zonder inhoud vallen weg, en een school zonder Basispoort-koppeling krijgt een andere stap dan een school die al gekoppeld is.' },

  'case.onb.step1': { en: '1. Merging duplicate accounts', nl: '1. Dubbele accounts samenvoegen' },
  'case.onb.step1.1':     { en: 'Teachers often switch grades between school years, so we ask again every year instead of relying on old data', nl: 'Leerkrachten wisselen vaak van leerjaar, dus we vragen het elk jaar opnieuw in plaats van op oude data te vertrouwen' },
  'case.onb.step1.2':     { en: 'The grade directly shapes which content we can highlight on the Start page', nl: 'Het leerjaar bepaalt direct welke content we op de Startpagina kunnen uitlichten' },

  'case.onb.rejected': { en: 'A design that didn\'t make it', nl: 'Een ontwerp dat het niet haalde' },
  'case.onb.rejected.desc': { en: 'My first design put one other account side by side with the current one, explained why we thought they belonged together, and let teachers choose: merge, only copy lessons, or keep the accounts apart. Two things changed it. It turned out a teacher could have more than one account to merge, and to save time we decided to always move all lessons. That made the choice unnecessary, so the final version became a simpler list where teachers tick the accounts that are theirs.', nl: 'Mijn eerste ontwerp zette één ander account naast het huidige, legde uit waarom we dachten dat ze bij elkaar hoorden, en liet leerkrachten kiezen: samenvoegen, alleen lessen overzetten, of de accounts apart houden. Twee dingen veranderden dat. Het bleek dat een leerkracht meer dan één account kon hebben om samen te voegen, en om tijd te winnen besloten we altijd alle lessen over te zetten. Daarmee was de keuze overbodig, en werd de uiteindelijke versie een eenvoudigere lijst waarin leerkrachten de accounts aanvinken die van hen zijn.' },
  'case.onb.label.rejected': { en: 'First design: one other account and three choices', nl: 'Eerste ontwerp: één ander account en drie keuzes' },
  'case.onb.step2': { en: '2. Connecting Basispoort', nl: '2. Basispoort koppelen' },
  'case.onb.step2.1':     { en: 'Dutch schools work with a variety of teaching methods. Knowing which one a teacher uses lets us align content and features with their daily lessons', nl: 'Scholen werken met allerlei verschillende methodes. Als we weten welke een leerkracht gebruikt, kunnen we content en features laten aansluiten op de dagelijkse lessen' },
  'case.onb.step2.2':     { en: 'It also tells us which methods matter most to our users, valuable input for the product roadmap', nl: 'Het laat ook zien welke methodes het belangrijkst zijn voor onze gebruikers. Waardevolle input voor de roadmap' },

  'case.onb.step3': { en: '3. Which grades do you teach this year?', nl: '3. Welke leerjaren geef je dit jaar les?' },
  'case.onb.basispoort.what':    { en: 'Basispoort is the platform Dutch primary schools use to connect educational software to their student administration system. Once a school links Gynzy to Basispoort, classes, students and teachers are synced automatically, and everyone can sign in with a single account. Without that link, teachers have to create and maintain classes by hand, which leads to outdated groups and duplicate accounts.', nl: 'Basispoort is het platform waarmee basisscholen hun educatieve software koppelen aan hun leerlingadministratie. Zodra een school Gynzy aan Basispoort koppelt, worden groepen, leerlingen en leerkrachten automatisch gesynchroniseerd en logt iedereen in met één account. Zonder die koppeling moeten leerkrachten groepen handmatig aanmaken en bijhouden. Dat leidt tot verouderde groepen en dubbele accounts.' },
  'case.onb.basispoort.problem': { en: 'The catch: only a school administrator can set up the link. Most teachers aren\'t administrators, so the step had to work differently depending on who you are.', nl: 'Het addertje: alleen een beheerder kan de koppeling leggen. De meeste leerkrachten zijn geen beheerder, dus de stap moest anders werken afhankelijk van wie je bent.' },
  'case.onb.basispoort.admin':   { en: '<strong>Administrators</strong> get a clear explanation of what the link brings them and are nudged to set it up right away', nl: '<strong>Beheerders</strong> krijgen een heldere uitleg over wat de koppeling ze oplevert en worden aangespoord om hem direct te leggen' },
  'case.onb.basispoort.teacher': { en: '<strong>Teachers without admin rights</strong> get a ready-made message for their administrator, explaining why and how to connect Basispoort, with a link to the step-by-step guide. One click copies it, so the teacher doesn\'t have to figure out what to write', nl: '<strong>Leerkrachten zonder beheerrechten</strong> krijgen een kant-en-klaar bericht voor hun beheerder, met uitleg over waarom en hoe je Basispoort koppelt en een link naar het stappenplan. Met één klik is het gekopieerd, zonder dat de leerkracht zelf hoeft te bedenken wat erin moet' },

  'case.onb.step4': { en: '4. Which methods do you use for math and spelling?', nl: '4. Welke methode gebruik je voor rekenen en spelling?' },
  'case.onb.merge.1':     { en: 'Some teachers ended up with two accounts: one created by a sync, and one they had made themselves earlier. Their lessons and settings were split across both', nl: 'Sommige leerkrachten hadden twee accounts: één aangemaakt door een sync en één die ze eerder zelf hadden aangemaakt. Hun lessen en instellingen waren over beide verdeeld' },
  'case.onb.merge.2': { en: 'When we detect possible duplicates, the flow shows them side by side, including how many lessons each account holds. The teacher picks which ones are theirs and confirms each one via email, so nobody can claim someone else\'s account', nl: 'Als we mogelijke dubbele accounts herkennen, toont de flow ze naast elkaar, inclusief het aantal lessen per account. De leerkracht kiest welke van hem zijn en bevestigt elk account via een mail. Zo kan niemand andermans account overnemen' },
  'case.onb.merge.3':     { en: 'For us, every merge means cleaner data and fewer support questions', nl: 'Voor ons betekent elke samenvoeging schonere data en minder supportvragen' },

  'case.onb.step1.3': { en: 'Combination classes are common in Dutch schools, so teachers can pick more than one grade', nl: 'Combinatiegroepen komen veel voor, dus leerkrachten kunnen meerdere leerjaren kiezen' },
  'case.onb.basispoort.benefits': { en: '<strong>Not linked yet?</strong> The step explains in three short points what the link brings: all groups and students in Gynzy automatically, changes visible right away, and no costs', nl: '<strong>Nog niet gekoppeld?</strong> De stap legt in drie korte punten uit wat de koppeling oplevert: automatisch alle groepen en leerlingen in Gynzy, wijzigingen direct zichtbaar, en kosteloos' },
  'case.onb.basispoort.linked': { en: '<strong>Already linked?</strong> Then this step turns into a quick check of the groups we pulled in from Basispoort', nl: '<strong>Al gekoppeld?</strong> Dan wordt deze stap een snelle controle van de groepen die we uit Basispoort hebben opgehaald' },
  'case.onb.label.welcome': { en: 'The starting point: a personal welcome after the summer break', nl: 'Het startpunt: een persoonlijk welkom na de zomervakantie' },
  'case.onb.label.accounts': { en: 'Spotting possible duplicates', nl: 'Mogelijke dubbele accounts herkennen' },
  'case.onb.label.confirm': { en: 'Confirming via email', nl: 'Bevestigen via mail' },
  'case.onb.label.teacherLas': { en: 'Basispoort not linked yet', nl: 'Basispoort nog niet gekoppeld' },
  'case.onb.label.groups': { en: 'Already linked: a quick check of the groups pulled in from Basispoort', nl: 'Al gekoppeld: een snelle controle van de groepen uit Basispoort' },
  'case.onb.label.grade': { en: 'Choosing grades, more than one if needed', nl: 'Leerjaren kiezen, meerdere als dat nodig is' },
  'case.onb.label.methods': { en: 'Setting the math and spelling method', nl: 'De reken- en spellingmethode instellen' },
  'case.onb.label.teacher': { en: 'A ready-made message for the administrator', nl: 'Een kant-en-klaar bericht voor de beheerder' },

  'case.onb.building':      { en: 'Building the UI with AI', nl: 'De UI bouwen met AI' },
  'case.onb.building.desc': { en: 'To take work off the development team\'s plate under that time pressure, I built almost all of the UI components I designed myself, using AI. Instead of handing over designs and waiting for implementation, I could take a component from design to working code and iterate on the real thing.', nl: 'Om het ontwikkelteam onder die tijdsdruk te ontzorgen, bouwde ik bijna alle UI-componenten die ik ontwierp zelf, met behulp van AI. In plaats van ontwerpen over te dragen en op de implementatie te wachten, bracht ik een component zelf van ontwerp naar werkende code en itereerde ik op het echte product.' },
  'case.onb.building.1':    { en: 'Less back-and-forth between design and development, and more developer time for the logic behind the flow', nl: 'Minder heen-en-weer tussen design en development, en meer developertijd voor de logica achter de flow' },
  'case.onb.building.2':    { en: 'Design details ended up in the product as intended, because I built them', nl: 'Ontwerpdetails kwamen in het product zoals bedoeld, omdat ik ze zelf bouwde' },
  'case.onb.building.3':    { en: 'It changed my role: from delivering screens to delivering working components', nl: 'Het veranderde mijn rol: van schermen opleveren naar werkende componenten opleveren' },

  'case.onb.results':       { en: 'Results', nl: 'Resultaten' },
  'case.onb.results.grade': { en: 'Of the 74,000 teachers who saved their grade, 86% set it for the first time or changed it. Only 14% confirmed what was already there. Asking again at the start of every school year pays off.', nl: 'Van de 74.000 leerkrachten die hun leerjaar opsloegen, stelde 86% het voor het eerst in of paste het aan. Maar 14% bevestigde wat er al stond. Opnieuw vragen aan het begin van elk schooljaar loont dus.' },
  'case.onb.results.1':     { en: 'In August and September 2026, more than 86,000 teachers started the onboarding.', nl: 'In augustus en september 2026 startten ruim 86.000 leerkrachten de onboarding.' },
  'case.onb.results.3':     { en: 'More than 58,000 teachers (68%) completed the full flow.', nl: 'Ruim 58.000 leerkrachten (68%) rondden de hele flow af.' },
  'case.onb.results.merge': { en: 'Teachers sent almost 3,700 merge requests. More than 1,200 duplicate accounts have already been merged, and another 2,277 requests are waiting for email confirmation.', nl: 'Leerkrachten verstuurden bijna 3.700 samenvoegverzoeken. Ruim 1.200 dubbele accounts zijn al samengevoegd, en nog 2.277 verzoeken wachten op bevestiging via de mail.' },
  'case.onb.results.4':     { en: 'The three peaks follow the staggered regional summer holidays: every time a region went back to school, thousands of teachers started the flow on the first days. Proof that the timing was right.', nl: 'De drie pieken volgen de zomervakantie per regio: telkens als een regio weer naar school ging, startten duizenden leerkrachten in de eerste dagen de flow. Het bewijs dat de timing klopte.' },
  'case.onb.results.5':     { en: 'The biggest drop-off happens after the grade step. That\'s exactly where the next iteration comes in: letting teachers finish later from their Start page.', nl: 'De grootste uitval zit na de leerjaarstap. Precies daar haakt de volgende iteratie op in: leerkrachten de flow later laten afronden vanaf hun Startpagina.' },
  'case.onb.label.funnel':   { en: 'Number of teachers per step', nl: 'Aantal leerkrachten per stap' },
  'case.onb.label.overTime': { en: 'Teachers starting and completing the onboarding per day', nl: 'Leerkrachten die de onboarding per dag startten en afrondden' },
  'case.onb.label.merge': { en: 'Merge requests: total, still open and accepted', nl: 'Samenvoegverzoeken: totaal, openstaand en geaccepteerd' },
  'case.onb.label.overTimeCaption': { en: 'Three peaks, one for each holiday region returning to school. The dips are weekends.', nl: 'Drie pieken, één per vakantieregio die weer naar school ging. De dalen zijn weekenden.' },

  'case.onb.stat1.n': { en: '86,000', nl: '86.000' },
  'case.onb.stat1.l': { en: 'teachers started the onboarding', nl: 'leerkrachten startten de onboarding' },
  'case.onb.stat2.n': { en: '6% → 41%', nl: '6% → 41%' },
  'case.onb.stat2.l': { en: 'of teachers with a math method set, in six weeks', nl: 'van de leerkrachten met een ingestelde rekenmethode, in zes weken' },
  'case.onb.stat3.n': { en: '74,000', nl: '74.000' },
  'case.onb.stat3.l': { en: 'teachers saved their grade for this school year', nl: 'leerkrachten sloegen hun leerjaar op voor dit schooljaar' },
  'case.onb.stat4.n': { en: '1,200+', nl: '1.200+' },
  'case.onb.stat4.l': { en: 'duplicate accounts merged', nl: 'dubbele accounts samengevoegd' },
  'case.onb.dg.title': { en: 'How the flow adapts to each teacher', nl: 'Hoe de flow zich aanpast aan elke leerkracht' },
  'case.onb.dg.start': { en: 'Welcome back', nl: 'Welkom terug' },
  'case.onb.dg.start.d': { en: 'A personal welcome after the summer break', nl: 'Een persoonlijk welkom na de zomervakantie' },
  'case.onb.dg.s1': { en: 'Merge duplicate accounts', nl: 'Dubbele accounts samenvoegen' },
  'case.onb.dg.s1.d': { en: 'Pick which accounts are yours and confirm via email', nl: 'Kies welke accounts van jou zijn en bevestig via de mail' },
  'case.onb.dg.s1.c': { en: 'Only when possible duplicates are found', nl: 'Alleen als er mogelijke dubbele accounts zijn' },
  'case.onb.dg.s2': { en: 'Depends on the school', nl: 'Afhankelijk van de school' },
  'case.onb.dg.o1.t': { en: 'School with Basispoort', nl: 'School met Basispoort' },
  'case.onb.dg.o1': { en: 'Check your groups', nl: 'Groepen controleren' },
  'case.onb.dg.o1.d': { en: 'Groups and students are already linked', nl: 'Groepen en leerlingen staan al klaar' },
  'case.onb.dg.o2.t': { en: 'School without Basispoort', nl: 'School zonder Basispoort' },
  'case.onb.dg.o2': { en: 'Connect Basispoort', nl: 'Basispoort koppelen' },
  'case.onb.dg.o2.d': { en: 'Administrators connect it, teachers send a ready-made message to their administrator', nl: 'Beheerders leggen de koppeling, leerkrachten sturen een kant-en-klaar bericht naar hun beheerder' },
  'case.onb.dg.o3.t': { en: 'No school', nl: 'Geen school' },
  'case.onb.dg.o3': { en: 'Not in this flow yet', nl: 'Nog niet in deze flow' },
  'case.onb.dg.o3.d': { en: 'Adding a school comes in a next iteration', nl: 'School toevoegen volgt in een volgende iteratie' },
  'case.onb.dg.s3': { en: 'Choose your grades', nl: 'Leerjaren kiezen' },
  'case.onb.dg.s3.d': { en: 'More than one for combination classes', nl: 'Meerdere bij combinatiegroepen' },
  'case.onb.dg.s3.c': { en: 'Only when there are grades to choose from', nl: 'Alleen als er leerjaren te kiezen zijn' },
  'case.onb.dg.s4': { en: 'Set your methods', nl: 'Methodes instellen' },
  'case.onb.dg.s4.d': { en: 'Math and spelling', nl: 'Rekenen en spelling' },
  'case.onb.dg.s4.c': { en: 'Only when there are methods to choose from', nl: 'Alleen als er methodes te kiezen zijn' },
  'case.onb.dg.end': { en: 'A Start page that fits', nl: 'Een Startpagina die past' },
  'case.onb.dg.end.d': { en: 'Content and suggestions based on grade and method', nl: 'Content en suggesties op basis van leerjaar en methode' },
  'case.onb.dg.skip': { en: 'Every step can be skipped. Steps without anything to show drop out automatically.', nl: 'Elke stap is over te slaan. Stappen zonder inhoud vallen automatisch weg.' },
  'case.onb.goals.t5': { en: '<strong>Light and skippable:</strong> the first weeks are busy, so every step is quick and can be skipped', nl: '<strong>Licht en over te slaan:</strong> de eerste weken zijn druk, dus elke stap is snel en kan worden overgeslagen' },
  'case.onb.results.method': { en: 'The share of teachers with a math method set went from 6% to 41% in six weeks, and spelling from 5% to 38%.', nl: 'Het aandeel leerkrachten met een ingestelde rekenmethode ging in zes weken van 6% naar 41%, en spelling van 5% naar 38%.' },
  'case.onb.toc.learned': { en: 'What I learned', nl: 'Wat ik leerde' },
  'case.onb.learned': { en: 'What I learned', nl: 'Wat ik leerde' },
  'case.onb.learned.1': { en: '<strong>Timing beats persuasion.</strong> Asking at the moment teachers are setting things up anyway worked far better than a whole year of optional settings', nl: '<strong>Timing wint het van overtuigen.</strong> Vragen op het moment dat leerkrachten toch al aan het inrichten zijn, werkte veel beter dan een heel jaar optionele instellingen' },
  'case.onb.learned.2': { en: '<strong>Every extra step outside the flow costs completion.</strong> More than 2,200 merge requests are still waiting for email confirmation. Confirming in the flow itself, where possible, is worth exploring', nl: '<strong>Elke stap buiten de flow kost afronding.</strong> Ruim 2.200 samenvoegverzoeken wachten nog op bevestiging via de mail. Bevestigen in de flow zelf, waar dat kan, is het onderzoeken waard' },
  'case.onb.learned.3': { en: '<strong>Skipping shouldn\'t mean missing out.</strong> About a third of the teachers didn\'t finish the flow in those busy first weeks. That\'s why the next iteration lets them finish later from their Start page', nl: '<strong>Overslaan mag niet betekenen dat je iets mist.</strong> Ongeveer een derde van de leerkrachten rondde de flow in die drukke eerste weken niet af. Daarom kunnen ze in de volgende iteratie later afronden vanaf hun Startpagina' },
  'case.onb.learned.4': { en: '<strong>Linking teachers to a school deserves a place in this flow.</strong> A teacher connected to their school gets much more out of Gynzy. There wasn\'t enough time to ask for all the data we wanted in this flow. Adding a school is already possible elsewhere in the product, but some teachers rarely or never end up there. That\'s why it belongs in the next version of this onboarding', nl: '<strong>Koppelen aan een school verdient een plek in deze flow.</strong> Een leerkracht die aan zijn school gekoppeld is, haalt veel meer uit Gynzy. Er was te weinig tijd om alle data die we wilden in deze flow uit te vragen. Een school toevoegen kan elders in het product al, maar sommige leerkrachten komen daar niet of nauwelijks. Daarom hoort het in de volgende versie van deze onboarding' },
  'case.onb.learned.5': { en: '<strong>Building the components myself gave the team room.</strong> Despite a lot of scoping, we delivered more than planned within the time we had. Because I built the components and screens, the developers only had to wire them together, which left them more time to think about how to structure the data and the architecture', nl: '<strong>Zelf componenten bouwen gaf het team ruimte.</strong> Ondanks veel scoping konden we meer opleveren binnen de tijd die we hadden. Omdat ik de componenten en schermen zelf bouwde, hoefden de developers ze alleen nog aan elkaar te knopen. Zo hielden ze meer tijd over om na te denken over de inrichting van de data en de architectuur' },
  'case.onb.next':          { en: 'Next steps', nl: 'Vervolgstappen' },
  'case.onb.next.1':        { en: '<strong>Finish later:</strong> teachers who skip steps can complete them on their Start page, so a busy first week doesn\'t mean missing out', nl: '<strong>Later afronden:</strong> leerkrachten die stappen overslaan, kunnen ze alsnog voltooien op hun Startpagina. Een drukke eerste week betekent dus niet dat ze iets missen' },
  'case.onb.next.2':        { en: '<strong>Add your school:</strong> a new step where teachers can add their school, closing another gap in our data', nl: '<strong>School toevoegen:</strong> een nieuwe stap waarin leerkrachten hun school kunnen toevoegen, zodat er weer een gat in onze data dichtgaat' },

  // Next project links
  'case.nav.next':        { en: 'Evolving a design system to scale &rarr;', nl: 'Een design system laten meegroeien &rarr;' },
  'case.ds.next':         { en: 'From UX vision to an educational trainer &rarr;', nl: 'Van UX-visie naar een educatieve trainer &rarr;' },
  'case.trainer.next': { en: 'A back-to-school flow that works for teachers and Gynzy &rarr;', nl: 'Een start van het schooljaar die werkt voor leerkrachten én Gynzy &rarr;' },
  'case.onb.nextProject': { en: 'Enhancing teachers\' productivity &rarr;', nl: 'Leerkrachten productiever maken &rarr;' },
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
