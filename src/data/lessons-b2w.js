const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2W = {
  calorie: L(
    'A calorie is a unit for measuring energy in food: calories per 100 g; a low-calorie label. Energy is the physics twin; a joule is the SI unit (already elsewhere). Quote calories from the table, not a diet slogan. Mix-up: calory is a misspelling; colourful. Do not write calorie for a feeling of tiredness.',
    ['Quote calories per 100 g from the table, not a diet slogan.', 'A calorie deficit still needs the kJ line if the paper asks for SI, which is the science-unit sense.'],
    'calories per 100 g; low-calorie. Physics twin: energy / joule. Trap: calory. Food tables, PE, and health. A unit of food energy, not a mood.',
    []
  ),
  camouflage: L(
    'Camouflage is colouring or covering that hides by matching the background: army camouflage; camouflage as a verb. Hide is everyday; disguise is a false appearance. Map camouflage in the predator–prey case. Mix-up: campaign (already in the dictionary); flu. Do not call a bright logo camouflage.',
    ['Map camouflage in the predator–prey case, not a fashion print.', 'The uniform used camouflage in woodland, which is the military-hide sense.'],
    'camouflage + noun; in camouflage; camouflage as a verb. Everyday: hide. Trap: campaign. Biology, history, and design. Hide by matching the background, not a pattern for show.',
    []
  ),
  canopy: L(
    'A canopy is the highest layer of branches and leaves in a forest, or a cloth covering over a bed or door: rainforest canopy; a canopy over the entrance. Crown is the top of one tree; ceiling is indoors. Sample the canopy in the biodiversity enquiry. Mix-up: canapé (a snack); company. Do not write canopy for a single leaf.',
    ['Sample the rainforest canopy in the biodiversity enquiry, not a shop awning.', 'A canopy over the stage featured in the design brief, which is the covering sense.'],
    'rainforest / tree canopy; a canopy over. One tree: crown. Trap: canapé. Geography and biology. Treetop layer, or a covering — specify.',
    []
  ),
  canvas: L(
    'Canvas is strong cloth for tents or sails, or the cloth an artist paints on: a canvas tent; oil on canvas. Canvass (two s) means go door to door for votes. Date the canvas in the gallery source. Mix-up: canvass / cannabis. Do not write canvas for a digital JPEG with no cloth.',
    ['Date the canvas in the gallery source, not a shopping-bag brand.', 'Party workers will canvass the ward, which is the two-s verb — not the cloth.'],
    'oil on canvas; a canvas tent / bag. Verb with two s: canvass (votes). Trap: canvass. Art, history, and design. Strong cloth or a painting surface, not an opinion poll.',
    []
  ),
  canyon: L(
    'A canyon is a deep valley with steep sides, usually carved by a river: a river canyon; canyon walls. Gorge is a close British twin; valley is wider and gentler. Map the canyon on the OS extract. Mix-up: cannon (a gun); canyon as a brand. Do not call a shallow ditch a canyon.',
    ['Map the canyon on the OS extract, not a film title.', 'A gorge is the close UK twin in the same enquiry, which is the steep-valley sense.'],
    'a river canyon; canyon walls / floor. Close: gorge. Wider: valley. Trap: cannon. Geography. A deep steep-sided valley, not a puddle.',
    ['gorge']
  ),
  capitalise: L(
    'To capitalise is to write a letter as a capital, to provide money for a firm, or to take advantage (capitalise on) (British -ise): capitalise a title; capitalise on a finding. Capital is the noun (already in the dictionary). Capitalise on the source, then name the figure. Mix-up: capitol (US building); capitalise vs capitalise as “shout in caps”. Do not shout whole sentences in capitals in a write-up.',
    ['Capitalise on the source, then name the figure; do not shout in capitals.', 'The start-up was capitalised by a grant, which is the provide-money sense.'],
    'capitalise on; capitalise a letter / title; capitalised. Noun: capital. US: capitalize. Trap: capitol. Essays, business, and literacy. Use capitals, fund a firm, or turn something into an advantage — specify.',
    []
  ),
  capsule: L(
    'A capsule is a small case for medicine or seeds, or a spacecraft cabin: a time capsule; a drug capsule. Tablet is a flat pill; cabin is a room. Label the time capsule in the local-history source. Mix-up: capitol; capsize (a boat turns over). Do not write capsule for a whole hospital ward.',
    ['Label the time capsule in the local-history source, not a sweet brand.', 'The crew capsule featured in the space diagram, which is the cabin sense.'],
    'a time / drug / seed capsule; crew capsule. Flat pill: tablet. Trap: capsize. History, science, and health. A small sealed case, or a spacecraft cabin.',
    []
  ),
  captivate: L(
    'To captivate is to attract and hold someone’s attention strongly: captivate an audience; a captivating opening. Capture is to take by force (already in the dictionary); charm is milder. The opening captivated the examiner; the n still had to be named. Mix-up: capture / captive. Do not write captivate for arresting a suspect.',
    ['The opening captivated the examiner; the n still had to be named.', 'A captivating clip is still not a sampling frame, which is the attention sense.'],
    'captivate + person / audience; captivating. Force: capture. Person held: captive. Trap: capture. Literature, media, and orals. Hold attention, not take a fort.',
    []
  ),
  captive: L(
    'A captive is a person or animal that is not free; as an adjective, held and unable to escape: a captive audience; captive-bred. Prisoner is a legal twin; captivity is the state (next entry). Count captive-bred birds in the conservation table. Mix-up: captain (already in the dictionary); captivate. Do not write captive for a willing volunteer.',
    ['Count captive-bred birds in the conservation table, not a film plot.', 'A captive audience still needs consent to film, which is the “cannot leave” sense.'],
    'a captive; captive-bred; a captive audience. State: captivity. Trap: captain / captivate. Biology, news, and media. Held and not free, not a fan who chose to stay.',
    []
  ),
  captivity: L(
    'Captivity is the state of being kept as a prisoner or in a zoo (usually uncountable): in captivity; breeding in captivity. Captive is the person or animal (previous); prison is a building. Breeding in captivity featured in the species-recovery case. Mix-up: capacity (already in the dictionary); capture. Do not write “a captivity” as a countable holiday.',
    ['Breeding in captivity featured in the species-recovery case.', 'Years in captivity featured in the memoir source, which is the prisoner sense.'],
    'in captivity; breeding in captivity. Person/animal: captive. Trap: capacity. Biology, history, and news. The state of being held, not a zoo’s ticket price.',
    []
  ),
  caricature: L(
    'A caricature is a drawing or description that exaggerates features, often to mock: a political caricature; caricature someone as. Cartoon is broader; portrait aims at likeness. The cartoon is a caricature, not a sampling frame. Mix-up: character (already in the dictionary); characterise. Do not call a careful biography a caricature without exaggeration in the source.',
    ['The cartoon is a caricature, not a sampling frame, the media paper said.', 'Do not caricature the opposing view in the evaluation, which is the distort-as-verb sense.'],
    'a caricature of; caricature + someone + as. Broader: cartoon. Trap: character. Media, art, and evaluations. Exaggerated mock portrayal, not a measured profile.',
    []
  ),
  cascade: L(
    'A cascade is a small waterfall, or a sequence of things following one after another: a cascade of errors; cascade as a verb. Waterfall is the everyday twin; chain is a linked sequence. A cascade of errors sank the practical. Mix-up: cassette; crusade. Do not write cascade for one isolated mistake.',
    ['A cascade of errors sank the practical, the methods comment said.', 'Map the cascade on the OS extract, which is the small-waterfall sense.'],
    'a cascade of; cascade + down / into. Everyday: waterfall. Trap: cassette. Geography, methods, and news. A waterfall, or a sequence that follows on — specify.',
    []
  ),
  caste: L(
    'Caste is a hereditary social class, especially in some South Asian societies: a caste system; caste discrimination. Class is broader (already in the dictionary); clan is kin (later). Name caste only if the source uses that term. Mix-up: cast (actors / throw, already in the dictionary); castle. Do not invent a caste hierarchy the extract does not name.',
    ['Name caste only if the source uses that term; do not invent a hierarchy.', 'Caste discrimination featured in the human-rights source, which is the inequality sense.'],
    'a caste system; caste discrimination / group. Broader: class. Trap: cast / castle. History, RS, and citizenship. A hereditary class — match the source’s wording.',
    []
  ),
  casting: L(
    'Casting is the process of choosing actors, or an object shaped in a mould: a casting call; a bronze casting. A cast is the group of actors (already in the dictionary); mould is the hollow shape. Credit the casting, then name the director. Mix-up: costing; castle. Do not write casting for the whole film budget.',
    ['Credit the casting in the media write-up, then name the director.', 'A bronze casting featured in the museum label, which is the moulded-object sense.'],
    'casting call / director; a bronze casting. Group of actors: cast. Trap: costing. Media, art, and design. Choosing actors, or a moulded object — specify.',
    []
  ),
  catastrophic: L(
    'Catastrophic means extremely damaging; causing a catastrophe: a catastrophic flood; catastrophic failure. Catastrophe is the noun (already in the dictionary); tragic is sad (already elsewhere). A catastrophic flood still needs a named date. Mix-up: catalytic; categorical (already in the dictionary). Do not call a missed bus catastrophic in a write-up.',
    ['A catastrophic flood still needs a named date and a discharge figure.', 'Catastrophic failure of the cooling system featured in the case, which is the engineering sense.'],
    'a catastrophic + noun; catastrophically. Noun: catastrophe. Trap: categorical. News, geography, and H&S. Disastrously damaging, not “annoying”.',
    []
  ),
  categorise: L(
    'To categorise is to put people or things into groups according to type (British -ise): categorise land use; categorise responses. Category is the noun (already in the dictionary); classify is a close twin (already elsewhere). Categorise the land use, then give the key. Mix-up: catalogue (already in the dictionary). US: categorize. Do not categorise people on a protected characteristic unless the source and task require it.',
    ['Categorise the land use on the map, then give the key, the geography paper said.', 'Categorise open responses before you graph them, which is the methods sense.'],
    'categorise + noun + as / into. Noun: category. Close: classify. US: categorize. Geography, methods, and science. Sort into types, not a shopping list.',
    ['classify']
  ),
  cathedral: L(
    'A cathedral is the principal church of a diocese, where a bishop has their seat: a medieval cathedral; cathedral city. A church is any Christian building (already in the dictionary); an abbey is a monastery church. Date the cathedral in the medieval enquiry. Mix-up: catholic as an adjective of the Church; cattle. Do not call every large church a cathedral unless the source does.',
    ['Date the cathedral in the medieval enquiry, not a postcard caption.', 'A cathedral city featured in the settlement hierarchy, which is the urban-status sense.'],
    'a cathedral; cathedral city / school. Ordinary building: church. Trap: catholic / cattle. History, RS, and geography. A bishop’s principal church, not every big spire.',
    []
  ),
  causal: L(
    'Causal means relating to a cause, or showing that one thing makes another happen: a causal link; causal relationship. Casual means informal (already in the dictionary) — a classic spelling trap. A causal link still needs a mechanism. Mix-up: casual / because. Do not write causal for “they happened on the same day” (that may be correlation).',
    ['A causal link still needs a mechanism, the methods tutor said.', 'Do not treat a coincidence as causal in the evaluation, which is the correlation trap.'],
    'a causal link / relationship / factor. Trap: casual (informal). Methods, science, and essays. Of cause and effect, not “happened together”.',
    []
  ),
  cautionary: L(
    'Cautionary means giving a warning, especially as a story or example: a cautionary tale; cautionary advice. Caution is the noun/verb (already in the dictionary); cautious is careful (already elsewhere). Treat the case as cautionary, not as proof for every town. Mix-up: cautionary vs cautionary as “the whole law”. Do not write cautionary for a cheerful success story with no warning.',
    ['Treat the case as cautionary, not as proof for every town.', 'A cautionary tale in the PSHE source still needs a named risk, which is the warning sense.'],
    'a cautionary tale / example; cautionary advice. Noun: caution. Trap: cautious as a synonym for the tale. PSHE, news, and evaluations. Meant as a warning, not a universal law.',
    []
  ),
  cavity: L(
    'A cavity is a hole or empty space inside a solid object, a tooth, or the body: a body cavity; a cavity wall. Hole is everyday; vacuum is empty of air. Label the body cavity on the diagram. Mix-up: cave (already in the dictionary); cavalry. Do not write cavity for an open ditch.',
    ['Label the body cavity on the diagram, not a dentist advert.', 'Cavity-wall insulation featured in the energy case, which is the building sense.'],
    'a body / tooth cavity; cavity wall. Everyday: hole. Trap: cave / cavalry. Biology, health, and design. A hollow inside something, not a canyon.',
    []
  ),
  ceasefire: L(
    'A ceasefire is an agreement to stop fighting for a period: declare a ceasefire; a ceasefire deal. Peace is broader and lasting; a truce is a close twin. Date the ceasefire in the conflict source. Mix-up: cease (already in the dictionary) without fire; seizure. Do not write ceasefire for a permanent peace treaty unless the source says so.',
    ['Date the ceasefire in the conflict source, not a slogan on a banner.', 'A temporary ceasefire still needs monitoring in the UN extract, which is the pause sense.'],
    'a ceasefire; declare / break a ceasefire. Close: truce. Broader: peace. Trap: cease alone. News, history, and citizenship. An agreed pause in fighting, not the whole settlement.',
    ['truce']
  ),
  cement: L(
    'Cement is a powder mixed with water to bind building materials; as a verb, to bind, or to make a relationship or deal more definite: cement a deal; cement mix. Concrete is cement plus aggregate (already in the dictionary as concrete). Cement the alliance with a named treaty. Mix-up: cemetery; comment. Do not write cement for loose sand.',
    ['Cement the alliance in the source with a named treaty, not a DIY brand.', 'Quote cement production in the industry case, which is the material sense.'],
    'cement a deal / relationship; cement mix / production. Close material: concrete. Trap: cemetery. Geography, news, and design. Building binder, or make an agreement firmer — specify.',
    []
  ),
  centenary: L(
    'A centenary is the 100th anniversary of an event (British): a centenary exhibition; the centenary of. A century is 100 years (already in the dictionary); anniversary is any yearly mark. The centenary exhibition still needs a founding date. Mix-up: century / centurion. US often: centennial. Do not write centenary for a 50th (that is a jubilee / fiftieth).',
    ['The centenary exhibition still needs a founding date in the caption.', 'The centenary of the Act featured in the history paper, which is the 100-year mark.'],
    'the centenary of; a centenary exhibition / year. 100 years: century. US: centennial. Trap: 50th. History, news, and culture. A 100th anniversary, not any old party.',
    []
  ),
  ceramic: L(
    'Ceramic is clay baked hard as pottery, tiles, or similar; as an adjective, made of that: ceramic finds; a ceramic tile. Pottery is the craft; china is fine tableware. Quote ceramic finds in the dig table. Mix-up: cinematic; cereal (already in the dictionary). Do not write ceramic for unfired wet clay.',
    ['Quote ceramic finds in the dig table, not a kitchen-shop brand.', 'Ceramic tiles featured in the materials table, which is the design sense.'],
    'ceramic finds / tiles; a ceramic + noun. Craft: pottery. Trap: cereal / cinematic. Archaeology, design, and science. Baked clay, not a plastic replica.',
    []
  ),
  ceremonial: L(
    'Ceremonial means connected with a public or religious ceremony, often formal rather than practical: a ceremonial role; ceremonial dress. Ceremony is the noun (already in the dictionary); ceremonial vs actual power is a citizenship trap. A ceremonial role still needs the statute line. Mix-up: cemetery; cereal. Do not call a fire drill ceremonial.',
    ['A ceremonial role still needs the statute line, the citizenship source said.', 'Ceremonial dress featured in the museum label, which is the ritual-clothing sense.'],
    'a ceremonial role / duty / dress. Noun: ceremony. Trap: cemetery. Citizenship, RS, and history. Of formal ceremony, not everyday function.',
    []
  ),
  chant: L(
    'To chant is to repeat a word or phrase rhythmically, or to sing a simple religious melody; as a noun, that song: football chants; chant a slogan. Sing is broader; shout is unstructured. Protesters chanted the demand; the minutes still named the vote. Mix-up: chant vs chat (already in the dictionary); chance. Do not write chant for a one-word cry with no rhythm.',
    ['Protesters chanted the demand; the minutes still named the vote.', 'A plainchant featured in the music extract, which is the religious-melody sense.'],
    'chant + slogan / name; a football chant; chanting. Broader: sing. Trap: chat. News, music, and RS. Repeat in rhythm, not a casual conversation.',
    []
  ),
  charcoal: L(
    'Charcoal is a black carbon material from burnt wood, used for drawing, fuel, or filters (often uncountable): charcoal sketch; activated charcoal. Coal is mined fossil fuel (already in the dictionary); carbon is the element (already elsewhere). Activated charcoal featured in the filtration practical. Mix-up: charcoal vs charred; choral. Do not write charcoal for pencil graphite.',
    ['Activated charcoal featured in the filtration practical, not a barbecue brand.', 'A charcoal study featured in the art brief, which is the drawing sense.'],
    'charcoal sketch / drawing; activated charcoal; charcoal as fuel. Mined fuel: coal. Trap: choral. Science, art, and geography. Burnt-wood carbon, not a pencil lead.',
    []
  ),
  cherish: L(
    'To cherish is to care for something lovingly, or to keep a hope or memory dear: cherish a memory; cherish the archive. Treasure is a close twin; love is broader. Cherish the archive, then cite the box number. Mix-up: perish; cheer. Do not write cherish for a one-off “like” on social media.',
    ['Cherish the archive, then cite the box number, the local-history brief said.', 'They cherished the hope of a recount, which is the keep-dear sense — still name the petition.'],
    'cherish a memory / hope; cherish + person / object. Close: treasure. Trap: perish / cheer. Literature, orals, and history. Hold dear, not a casual like.',
    ['treasure']
  ),
  cholesterol: L(
    'Cholesterol is a fatty substance in blood and cells, often in health reports (usually uncountable): blood cholesterol; cholesterol level. Fat is broader; calorie is food energy (earlier). Quote the cholesterol figure from the table. Mix-up: chloroform; calorie. Do not diagnose a classmate in an essay.',
    ['Quote the cholesterol figure from the table, not a supplement advert.', 'High cholesterol featured in the risk table, which is the health-data sense.'],
    'blood / serum cholesterol; cholesterol level. Broader: fat. Trap: calorie as a synonym. Biology and health. A fatty substance in blood — use the source’s figure.',
    []
  ),
  chorus: L(
    'A chorus is the repeated part of a song, a group of singers, or (in drama) a group that comments on the action: the chorus of a song; a Greek chorus. Choir is a singing group (already in the dictionary); refrain is a close lyric twin. Mark the chorus in the poem. Mix-up: chorus vs chaos (already elsewhere); coarse. Do not write chorus for one solo line.',
    ['Mark the chorus in the poem, not only the first line, the literature paper said.', 'The Greek chorus comments on the action, which is the drama sense.'],
    'the chorus of a song; a chorus of singers; Greek chorus. Close: refrain / choir. Trap: chaos / coarse. Literature, music, and drama. Repeated section, or a commenting group — specify.',
    []
  ),
  chronicle: L(
    'A chronicle is a factual written record of events in order; as a verb, to record them that way: a monastic chronicle; chronicle the campaign. History is the wider subject (already in the dictionary); a diary is personal. The monastic chronicle is a source, not a novel. Mix-up: chronological (next); cynical. Do not write chronicle for a made-up story.',
    ['The monastic chronicle is a source, not a novel, the history brief said.', 'The paper chronicles turnout by ward, which is the record-as-verb sense.'],
    'a chronicle of; chronicle + events. Wider subject: history. Trap: chronological as a synonym for the book. History and journalism. An ordered record, not fiction.',
    []
  ),
  chronological: L(
    'Chronological means arranged in the order in which events happened: chronological order; a chronological account. Chronicle is the record (previous); sequence is broader. Put the reforms in chronological order, then name the statute. Mix-up: chronological vs chronic (already in the dictionary: long-lasting illness); colourful. Do not write chronological for “sorted A–Z”.',
    ['Put the reforms in chronological order, then name the statute.', 'A chronological bibliography is by date, not by author’s surname, which is the time-order sense.'],
    'chronological order / account; chronologically. Record: chronicle. Trap: chronic / colourful. History, literature, and methods. In time order, not alphabetical.',
    []
  ),
  chunk: L(
    'A chunk is a thick piece of something, or a substantial block of text or data: a chunk of bread; a chunk of the transcript. Piece is everyday; fragment is smaller. Quote a chunk of the transcript, then cite the line numbers. Mix-up: chuck; junk. Do not write chunk for a single word.',
    ['Quote a chunk of the transcript, then cite the line numbers.', 'A chunk of funding featured in the budget line, which is the substantial-block sense.'],
    'a chunk of; chunky (adjective). Everyday: piece. Smaller: fragment. Trap: chuck. Methods, food, and ICT. A thick piece or a block of text, not a crumb.',
    []
  ),
  circa: L(
    'Circa means about, used before a date when the exact year is not known (abbreviated c.): circa 1200; c. 1850. Approximately is the essay twin; about is everyday. The pot is circa 1200; do not invent a Tuesday. Mix-up: circus (already in the dictionary); circle. Do not use circa before a precise timetabled hour.',
    ['The pot is circa 1200, the caption said; do not invent a Tuesday.', 'Write c. 1914 in the timeline if the source is approximate, which is the abbreviation sense.'],
    'circa + year; abbreviated c. Everyday: about. Trap: circus. History, archaeology, and captions. About (a date), not “around the building”.',
    []
  ),
  civilise: L(
    'To civilise is to bring a society into a more organised or “developed” way of life (often biased in older sources; British -ise): a civilising mission. Civilisation is the noun (already in the dictionary); civil is of citizens (already elsewhere). Quote who claimed to civilise whom, then evaluate the bias. Mix-up: civilian; civilise as a compliment in a modern essay without scare quotes. US: civilize. Do not repeat imperial language as if it were a fact.',
    ['Quote who claimed to civilise whom, then evaluate the bias, the empire paper said.', 'The source’s “civilising mission” needs inverted commas, which is the bias-alert sense.'],
    'civilise + people / place; a civilising mission. Noun: civilisation. US: civilize. Trap: civilian. History and citizenship. Organised society — check whose voice and bias.',
    []
  ),
  clamour: L(
    'Clamour is a loud confused noise of people, or a noisy public demand (British -our); as a verb, to demand that way: a clamour for; clamour to be heard. Noise is everyday; outcry is a close twin. A clamour for a recount still needs a named petition. Mix-up: clamber (climb awkwardly); glamour. US: clamor. Do not write clamour for a polite written request.',
    ['A clamour for a recount still needs a named petition, the source said.', 'The clamour in the hall was not a sampling frame, which is the loud-noise sense.'],
    'a clamour for; clamour to + verb. Close: outcry. US: clamor. Trap: clamber / glamour. News, citizenship, and literature. Loud noise or a noisy demand (UK -our).',
    ['outcry']
  ),
  clan: L(
    'A clan is a group of families claiming a common ancestor, or an informal close group: a Highland clan; a clan of supporters. Tribe is a different term (already in the dictionary) — match the source. Name the clan as the source names it. Mix-up: clan vs class; Klan (US hate group — do not confuse). Do not write “a clan” if the extract says nation or house.',
    ['Name the clan as the source names it; do not write “tribe” if the extract says clan.', 'A clan of regulars featured in the oral-history tape, which is the informal-group sense.'],
    'a clan; clan chief / system. Match the source: tribe / house / nation. Trap: class / Klan. History, RS, and sociology. A kin group, not a random crowd.',
    []
  ),
  clergy: L(
    'The clergy are people ordained for religious duties, treated as a group (usually with the): the clergy; clergy and laity. A priest, vicar, or imam is an individual; clerical can mean office work (already in the dictionary) — trap. The clergy signed the petition; name the bishop if the source does. Mix-up: clerical (office) / clerk. Do not call every religious believer clergy.',
    ['The clergy signed the petition; name the bishop if the source does.', 'Clergy and laity featured in the parish source, which is the ordained-vs-lay sense.'],
    'the clergy; a member of the clergy; clergy and laity. Office-work trap: clerical. RS, history, and news. Ordained officials as a group, not all worshippers.',
    []
  ),
  climax: L(
    'A climax is the most intense or important point in a story, process, or event: the climax of the novel; reach a climax. Peak is a close twin; anticlimax is a letdown. Mark the climax of the narrative, not the opening hook. Mix-up: climate (already in the dictionary); climb. Do not write climax for the first sentence.',
    ['Mark the climax of the narrative, not the opening hook, the literature paper said.', 'Tensions reached a climax before the vote, which is the process sense.'],
    'the climax of; reach / build to a climax. Close: peak. Trap: climate / climb. Literature, news, and drama. The high point, not the introduction.',
    ['peak']
  ),
  cling: L(
    'To cling is to hold on tightly, or to refuse to give up an idea or hope (cling to): cling to a branch; cling to an outlier. Hold on is everyday; stick is physical. Do not cling to an outlier as if it were the trend. Mix-up: clang; clinic (already in the dictionary). Do not write cling for a light tap.',
    ['Do not cling to an outlier as if it were the trend, the methods tutor said.', 'Ivy clung to the wall in the fieldwork photo, which is the physical-hold sense.'],
    'cling to + noun; cling on. Everyday: hold on. Trap: clang / clinic. Methods, literature, and biology. Hold tightly, or refuse to drop an idea.',
    []
  ),
  clone: L(
    'A clone is an organism or cell that is a genetic copy; as a verb, to make that copy, or (informal) an identical product: a cloned sheep; clone a device. Copy is broader; identical twin is a natural comparison, not a lab clone. The biology paper asks how a clone is produced. Mix-up: clown (already in the dictionary); cologne. Do not write clone for a respectful summary of someone else’s idea without the genetic or product sense.',
    ['The biology paper asks how a clone is produced, not a sci-fi plot.', 'A clone of the app still needs the licence line, which is the product-copy sense.'],
    'a clone of; clone + cell / organism / device; cloned. Broader: copy. Trap: clown. Biology, ICT, and news. A genetic (or informal product) copy, not a twin by birth.',
    []
  ),
  clout: L(
    'Clout is influence or power, especially political or economic (informal in news); also a heavy blow: political clout; union clout. Influence is the formal twin (already elsewhere); power is broader. Union clout featured in the strike source. Mix-up: cloud (already in the dictionary); clot. Do not write clout for a playground slap in a serious news write-up unless the source uses the blow sense.',
    ['Union clout featured in the strike source, not a playground slap.', 'The committee had little clout over funding, which is the influence sense.'],
    'political / union / media clout; have clout. Formal twin: influence. Trap: cloud. News, citizenship, and business. Influence or power, not a weather word.',
    ['influence']
  ),
  clutch: L(
    'To clutch is to hold something tightly; as a noun, the pedal that disconnects a car’s engine, or a tight grip: clutch a statement; the clutch pedal. Grasp is a close twin; grab is sudden. She clutched the witness statement; the minutes still named the vote. Mix-up: crutch; cluster (already in the dictionary). Do not write clutch for a gentle handshake.',
    ['She clutched the witness statement; the minutes still named the vote.', 'Name the clutch in the driving diagram, which is the pedal sense.'],
    'clutch + object; a clutch of (eggs / papers); clutch pedal. Close: grasp. Trap: crutch / cluster. News, driving, and literature. Grip tightly, or a car pedal — specify.',
    []
  ),
  clutter: L(
    'Clutter is a messy collection of things; as a verb, to fill a space with that mess (noun often uncountable): visual clutter; clutter the appendix. Mess is everyday; junk is worthless stuff. Do not clutter the appendix with unread printouts. Mix-up: cluster; clatter. Do not write “a clutter” for a filed archive.',
    ['Do not clutter the appendix with unread printouts, the handbook said.', 'Visual clutter on the slide hid the n, which is the messy-display sense.'],
    'clutter + noun; clutter up; visual clutter. Everyday: mess. Trap: cluster / clatter. Exams, design, and ICT. Messy stuff filling a space, not a catalogue.',
    ['mess']
  ),
  coarse: L(
    'Coarse means rough in texture, rude in language, or (of particles) not fine: coarse sand; coarse language. Course is a programme of study or a route (already in the dictionary) — classic homophone trap. Describe coarse sand in the sediment log. Mix-up: course / cause. Do not write coarse for a university course.',
    ['Describe coarse sand in the sediment log, not a playground insult.', 'Coarse humour in the extract still needs a language comment, which is the vulgar sense.'],
    'coarse sand / grain / language; coarsely. Homophone: course. Trap: cause. Geography, literature, and science. Rough, not fine, or vulgar — not a school course.',
    []
  ),
  coax: L(
    'To coax is to persuade someone gently, or to get something to work with patient effort: coax a witness; coax a machine into life. Persuade is broader (already elsewhere); force is the opposite. Coax a reluctant witness, then quote the line. Mix-up: coax vs coaxial cable; hoax. Do not write coax for a legal order.',
    ['Coax a reluctant witness, then quote the line; do not invent consent.', 'They coaxed the generator into starting, which is the patient-effort sense.'],
    'coax + someone + into / to; coax + machine. Broader: persuade. Trap: hoax / coaxial. Orals, news, and practicals. Gentle persuasion, not a command.',
    ['persuade']
  ),
  cockpit: L(
    'A cockpit is the area in a plane or racing car where the pilot or driver sits: the cockpit; cockpit voice recorder. Cabin is the passenger space; flight deck is a formal twin. Label the cockpit in the design diagram. Mix-up: cocktail (next); pit. Do not write cockpit for the whole aircraft.',
    ['Label the cockpit in the design diagram, not a video-game screenshot.', 'The cockpit voice recorder featured in the inquiry, which is the aviation-safety sense.'],
    'the cockpit; cockpit voice recorder / display. Passengers: cabin. Trap: cocktail. Design, news, and physics. Where the pilot or driver sits, not the aisle.',
    []
  ),
  cocktail: L(
    'A cocktail is a mixed drink, or a mixture of substances, measures, or problems: a cocktail of pollutants; a cocktail of measures. Mixture is the plain twin; blend is similar. A cocktail of pollutants featured in the river case. Mix-up: cockpit (previous); cork. Do not write cocktail for a single pure compound in a results table.',
    ['A cocktail of pollutants featured in the river case, not a bar menu.', 'A cocktail of tax cuts featured in the budget source, which is the mixed-measures sense.'],
    'a cocktail of; cocktail party / dress. Plain twin: mixture. Trap: cockpit. Geography, news, and health. A mixed drink, or a mixture of things — specify.',
    []
  ),
  coexist: L(
    'To coexist is to live or exist together at the same time, especially despite differences: coexist with; peaceful coexistence. Exist is simply to be (already elsewhere); live together is everyday. The groups coexist in the city study; still name the tension. Mix-up: exist / exit. Do not write coexist for two events years apart.',
    ['The groups coexist in the city study; still name the tension in the source.', 'Species coexist in the niche diagram, which is the ecology sense.'],
    'coexist with; coexistence. Everyday: live together. Trap: exist / exit. Geography, RS, and biology. Exist together at the same time, not a sequence.',
    []
  ),
  cognition: L(
    'Cognition is the mental process of knowing, thinking, and understanding (usually uncountable): cognition and memory; social cognition. Cognitive is the adjective (already in the dictionary); thought is everyday. Cognition in the psychology extract is not a synonym for an IQ score. Mix-up: recognition; coalition. Do not write “a cognition” as a countable idea.',
    ['Cognition in the psychology extract is not a synonym for “IQ score”.', 'Social cognition featured in the child-development source, which is the thinking-about-people sense.'],
    'cognition; social / spatial cognition. Adjective: cognitive. Trap: recognition. Psychology and biology. Thinking and knowing as a process, not one test score.',
    []
  ),
  cohort: L(
    'A cohort is a group of people who share an experience or time period, often in research: a birth cohort; the 2010 cohort. Group is everyday; generation is broader. Compare the 2010 birth cohort in the table. Mix-up: court; cohere. Do not write cohort for two friends who sat together once.',
    ['Compare the 2010 birth cohort in the table, not a friendship group.', 'The training cohort sat the same paper, which is the shared-experience sense.'],
    'a birth / year cohort; cohort study. Everyday: group. Trap: court. Psychology, sociology, and methods. A defined research or generation group, not a clique.',
    []
  ),
  coil: L(
    'A coil is a length of wire or rope wound in loops; as a verb, to wind into loops: a coil of wire; coil around. Spring is a close object; loop is one turn. Count turns on the coil in the physics practical. Mix-up: coin (already in the dictionary); coal. Do not write coil for a straight rod.',
    ['Count turns on the coil in the physics practical, not a garden hose.', 'The rope coiled on the deck, which is the verb sense.'],
    'a coil of; coil around / up; electromagnetic coil. Close: loop / spring. Trap: coin / coal. Physics, design, and geography. Wire or rope in loops, or to wind that way.',
    []
  ),
  collate: L(
    'To collate is to collect and arrange information from different sources in a useful order: collate results; collate questionnaires. Collect is gather (already in the dictionary); compile is a close twin (already elsewhere). Collate the questionnaires before you graph them. Mix-up: collide (already in the dictionary); college. Do not write collate for reading one page once.',
    ['Collate the questionnaires before you graph them, the methods brief said.', 'Collate figures from three tables into one, which is the arrange-from-sources sense.'],
    'collate + data / results / sources. Close: compile. Trap: collide / college. Methods, exams, and research. Gather and arrange from several sources, not a single glance.',
    ['compile']
  ),
  collateral: L(
    'Collateral is property pledged as security for a loan; as an adjective, additional and often unintended: collateral damage; loan collateral. Security is the finance twin; extra is too vague. Name the collateral in the loan source; do not skip civilian harm if the extract says collateral damage. Mix-up: lateral; collect. Do not write collateral for the main aim of a policy.',
    ['Name the collateral in the loan source; do not skip civilian harm if the extract says collateral damage.', 'A house as collateral featured in the finance case, which is the security sense.'],
    'loan collateral; collateral damage / effects. Finance twin: security. Trap: lateral. Business, news, and citizenship. Loan security, or additional unintended effects — specify.',
    []
  ),
  colonel: L(
    'A colonel is a senior army officer rank (silent first l; sounds like kernel): Colonel Smith; the colonel’s orders. A major or general is a different rank; kernel is a seed. Name the colonel in the dispatch. Mix-up: colonial (already in the dictionary); kernel. Do not write colonel for a naval captain unless the source uses that army rank.',
    ['Name the colonel in the dispatch, not a film character.', 'The silent l in colonel featured in the spelling test, which is the pronunciation trap.'],
    'Colonel + name; a colonel in the army. Sounds like kernel. Trap: colonial. History, news, and spelling. A senior army rank, not a colony adjective.',
    []
  ),
  colonise: L(
    'To colonise is to take control of another country and send settlers there; in biology, to occupy a habitat (British -ise): colonise an island; bacteria colonise a surface. Colony and colonial are related (already in the dictionary). Map who colonised the island, then evaluate the source. Mix-up: colonel (previous); colon (punctuation). US: colonize. Do not treat colonise as a neutral compliment without the power relation.',
    ['Map who colonised the island in the empire enquiry, then evaluate the source.', 'Pioneer species colonise bare rock, which is the ecology sense.'],
    'colonise + place; colonised by. Nouns: colony / colonialism. US: colonize. Trap: colonel / colon. History, geography, and biology. Settle and control, or occupy a habitat — specify bias in human cases.',
    []
  ),
  colossal: L(
    'Colossal means extremely large: a colossal deficit; colossal damage. Huge and vast are close (vast already in the dictionary); big is weaker. A colossal deficit still needs the £ figure. Mix-up: collosal (misspelling); coalition. Do not write colossal for a small rounding error.',
    ['A colossal deficit still needs the £ figure, the accounts extract said.', 'A colossal statue featured in the archaeology source, which is the physical-size sense.'],
    'a colossal + noun; colossally. Close: huge / vast. Trap: collosal spelling. News, history, and evaluations. Huge, not merely “quite big”.',
    ['huge']
  ),
  coma: L(
    'A coma is a long deep state of unconsciousness caused by injury or illness: in a coma; a diabetic coma. Sleep is ordinary; unconscious is the broader adjective. Quote the coma duration from the case notes. Mix-up: comma (punctuation); comb. Do not write coma for a short faint.',
    ['Quote the coma duration from the case notes, not a soap-opera plot.', 'A comma splice is a grammar fault, which is the punctuation trap — not the medical state.'],
    'in a coma; come out of a coma. Broader: unconscious. Trap: comma. Biology and health. Prolonged unconsciousness, not a nap or a punctuation mark.',
    []
  ),
  combustion: L(
    'Combustion is the process of burning (usually uncountable in science): complete combustion; combustion of methane. Burn is the everyday verb; fire is the event. Write the combustion equation in the practical. Mix-up: combination (already in the dictionary); explosion (a blast, not all burning). Do not write combustion for rusting without the exam’s redox framing.',
    ['Write the combustion equation in the practical, not a bonfire caption.', 'Incomplete combustion produces carbon monoxide, which is the chemistry-trap sense.'],
    'combustion of; complete / incomplete combustion. Everyday verb: burn. Trap: combination. Chemistry and physics. Burning as a chemical process, not a campfire story.',
    []
  ),
  comedian: L(
    'A comedian is a person whose job is to make people laugh, especially on stage or television: a stand-up comedian; comedian and audience. Comedy is the genre (already in the dictionary); comic can be a person or a magazine (later if present). Name the comedian in the satire source, then analyse the target. Mix-up: commander; come. Do not write comedian for a tragic chorus.',
    ['Name the comedian in the satire source, then analyse the target, the media paper said.', 'A comedian’s persona is not a witness statement, which is the performance sense.'],
    'a stand-up / TV comedian. Genre: comedy. Trap: commander. Media and literature. A professional funny performer, not the whole genre.',
    []
  ),
  comet: L(
    'A comet is a body of ice and dust that orbits the sun and may show a tail: a comet’s orbit; comet tail. Asteroid is rockier; meteor is the streak in the sky. Plot the comet’s orbit in the space topic. Mix-up: comment (already in the dictionary); calmest. Do not write comet for a man-made satellite.',
    ['Plot the comet’s orbit in the space topic, not a brand of cleaner.', 'A meteor is the streak; the comet is the icy body, which is the astronomy distinction.'],
    'a comet; comet tail / orbit. Rockier: asteroid. Streak: meteor. Trap: comment. Physics and geography. An icy sun-orbiting body, not a shooting-star name for the whole class.',
    []
  ),
  companion: L(
    'A companion is a person or animal you spend time with, or a book that goes with another: a travelling companion; a companion volume. Friend is everyday; colleague is work (already in the dictionary). A travelling companion featured in the diary source. Mix-up: company (already in the dictionary); comparison. Do not write companion for a whole firm.',
    ['A travelling companion featured in the diary source, not a dating advert.', 'A companion website still needs the URL in the references, which is the matching-resource sense.'],
    'a companion; companion volume / website; companionship. Everyday: friend. Trap: company / comparison. Literature, history, and orals. Someone who accompanies, or a matching book.',
    []
  ),
  complementary: L(
    'Complementary means combining well so that each supplies what the other lacks: complementary sources; complementary colours. Complimentary (next) means free or praising — a classic homophone trap. The two sources are complementary, not copies. Mix-up: complimentary / complete. Do not write complementary for a free ticket.',
    ['The two sources are complementary, not copies, the marker wrote.', 'Complementary colours on the colour wheel featured in the art brief, which is the design sense.'],
    'complementary + noun; complementary colours / skills. Trap: complimentary (free / praise). Art, methods, and essays. Completing each other, not a freebie.',
    []
  ),
  complexion: L(
    'Complexion is the natural colour and appearance of facial skin, or the general character of a situation: a pale complexion; change the complexion of. Colour is broader; complexity is how complicated something is (already in the dictionary). That finding changes the complexion of the argument. Mix-up: complexity / complementary. Do not write complexion for a whole personality test.',
    ['That finding changes the complexion of the argument, the evaluation said.', 'Describe complexion only if the source does; do not stereotype, which is the appearance-sense caution.'],
    'a complexion; change the complexion of. Trap: complexity. Literature, news, and evaluations. Face colour, or the overall character of a situation — specify.',
    []
  ),
  complimentary: L(
    'Complimentary means given free of charge, or expressing praise: a complimentary ticket; complimentary remarks. Complementary (previous) means completing — same sound, different spelling. A complimentary ticket is still a gift, not a sampling frame. Mix-up: complementary / complement. Do not write complimentary for two datasets that fill each other’s gaps.',
    ['A complimentary ticket is still a gift, not a sampling frame.', 'A complimentary review still needs a named critic, which is the praising sense.'],
    'complimentary ticket / copy; complimentary remarks. Trap: complementary (completing). Media, business, and letters. Free, or praising — not “they fit together”.',
    []
  ),
  compute: L(
    'To compute is to calculate an amount or result, especially with a machine or a formal method: compute the mean; computing time. Calculate is the everyday twin (already in the dictionary); computer is the machine (already elsewhere). Compute the mean from the table, then show the working. Mix-up: commute (already in the dictionary); dispute. Do not write compute for a rough guess with no method.',
    ['Compute the mean from the table, then show the working.', 'Compute time on the cluster featured in the methods line, which is the machine sense.'],
    'compute + quantity; computing. Everyday: calculate. Machine: computer. Trap: commute. Maths, ICT, and science. Calculate with a method, not a hunch.',
    ['calculate']
  ),
  conceivable: L(
    'Conceivable means possible to imagine or believe: every conceivable option; barely conceivable. Possible is everyday; conceive is the verb (already in the dictionary). Every conceivable bias still needs a named example. Mix-up: convenient (already in the dictionary); receivable. Do not write conceivable for something already measured as fact.',
    ['Every conceivable bias still needs a named example, the methods tutor said.', 'It is conceivable that the sample was biased, which is the “possible to imagine” sense — still test it.'],
    'conceivable that; every conceivable + noun; conceivably. Verb: conceive. Trap: convenient. Essays and methods. Possible to imagine, not “already proven”.',
    []
  ),
  condense: L(
    'To condense is to make a gas become liquid, or to make a text shorter by keeping the main points: condense the article; water condenses. Summarise is the text twin; evaporate is the opposite in science. Condense the article to 80 words, then keep the named figure. Mix-up: condescend; dense. Do not write condense for adding water to juice (that is dilute).',
    ['Condense the article to 80 words, then keep the named figure.', 'Water vapour condensed on the flask, which is the science sense.'],
    'condense + text; condense (of vapour); condensation. Text twin: summarise. Opposite (science): evaporate. Trap: dilute / condescend. Exams, chemistry, and geography. Shorten a text, or turn vapour to liquid — specify.',
    []
  ),
  condolence: L(
    'Condolence is sympathy expressed when someone has died (often condolences in the plural): a letter of condolence; offer condolences. Sympathy is broader; congratulations is the opposite occasion. The letter of condolence is a source, not a template to invent facts. Mix-up: consolation; condone (already in the dictionary). Do not send condolences for a lottery win.',
    ['The letter of condolence is a source, not a template to invent facts.', 'They offered condolences in the minutes, which is the plural-formula sense.'],
    'a letter of condolence; offer / express condolences. Broader: sympathy. Trap: condone / consolation. News, RS, and letters. Sympathy after a death, not general pity.',
    []
  ),
  confiscate: L(
    'To confiscate is to take something away officially as a punishment or because it is forbidden: confiscate a phone; confiscated goods. Seize is a close twin; steal is a crime by a thief. Staff may confiscate a phone in an exam; log it. Mix-up: confuse (already in the dictionary); contribute. Do not write confiscate for borrowing with permission.',
    ['Staff may confiscate a phone in an exam; log it, the handbook said.', 'Customs confiscated the counterfeit notes, which is the official-seize sense.'],
    'confiscate + object; confiscated. Close: seize. Trap: confuse. Exams, news, and citizenship. Take away officially, not merely “borrow”.',
    ['seize']
  ),
  congregation: L(
    'A congregation is a group of people gathered for worship, or that community: the congregation; a congregation of 200. Audience is for performance; crowd is unstructured. Count the congregation only if the source gives a figure. Mix-up: conjugation; congress (next). Do not write congregation for a football crowd unless the source uses worship language ironically.',
    ['Count the congregation only if the source gives a figure, the RS paper said.', 'The congregation voted on the repair fund, which is the community-decision sense.'],
    'the congregation; a congregation of. Performance group: audience. Trap: congress / conjugation. RS, history, and news. People gathered to worship, not any crowd.',
    []
  ),
  congress: L(
    'A congress is a large formal meeting, or (in some countries) the elected law-making body: a party congress; Congress (US). Conference is a close twin (already in the dictionary); parliament is the UK legislature (already elsewhere). Date the party congress in the source. Mix-up: congregation (previous); progress. Do not write congress for a casual coffee chat.',
    ['Date the party congress in the source, not a travel fair.', 'A bill in Congress featured in the comparative politics extract, which is the legislature sense.'],
    'a party / trade congress; Congress (US). Close: conference. UK legislature: parliament. Trap: congregation. Politics, history, and news. A formal assembly, or a legislature — specify.',
    []
  ),
  conquer: L(
    'To conquer is to take control of a place or people by force, or to overcome a difficulty: conquer a territory; conquer a fear. Defeat is a close twin; invade is to enter by force. Map who conquered the territory, then name the treaty. Mix-up: concur; conquest (next). Do not write conquer for winning a raffle.',
    ['Map who conquered the territory, then name the treaty, the history paper said.', 'She conquered stage fright in the oral, which is the overcome-a-difficulty sense.'],
    'conquer + place / people / fear. Noun: conquest. Close: defeat. Trap: concur. History, PE, and orals. Take by force, or overcome a difficulty — specify.',
    []
  ),
  conquest: L(
    'Conquest is the act of conquering, or land taken by force: the Norman Conquest; a war of conquest. Conquer is the verb (previous); victory is winning a battle. The Norman Conquest still needs a year in the essay. Mix-up: request; contest (already in the dictionary). Do not write conquest for a peaceful election win unless the source is metaphorical.',
    ['The Norman Conquest still needs a year in the essay, the mark scheme said.', 'A war of conquest featured in the empire source, which is the taking-land sense.'],
    'the Norman Conquest; a conquest of; war of conquest. Verb: conquer. Trap: request. History and literature. Taking land by force, or that land.',
    []
  ),
  connotation: L(
    'A connotation is an idea or feeling a word suggests beyond its literal meaning: negative connotations; the connotation of “regime”. Denotation is the literal meaning; implication is a close twin (imply already in the dictionary). Comment on the connotation of “regime” in the extract. Mix-up: annotation; connection (already in the dictionary). Do not write connotation for a dictionary definition alone.',
    ['Comment on the connotation of “regime” in the extract, the language paper said.', 'A positive connotation of “home” featured in the poem, which is the suggested-feeling sense.'],
    'the connotation of; positive / negative connotations. Literal twin: denotation. Trap: annotation / connection. Language papers and literature. Extra suggested meaning, not the dictionary denotation.',
    []
  ),
  consequent: L(
    'Consequent means happening as a result of something (formal): consequent damage; the consequent closures. Consequently is the adverb (already in the dictionary); subsequent means later, not always caused. Flooding and the consequent closures featured in the case. Mix-up: subsequent / consecutive (already in the dictionary). Do not write consequent for “the next day” with no causal link.',
    ['Flooding and the consequent closures featured in the case study.', 'Subsequent is later; consequent is caused, which is the methods distinction.'],
    'consequent + noun; the consequent + noun. Adverb: consequently. Trap: subsequent / consecutive. Essays, news, and geography. Resulting (formal), not merely “later”.',
    []
  ),
  console: L(
    'To console is to comfort someone who is unhappy; as a noun (/ˈkɒnsəʊl/), a panel of controls or a games machine: console a witness; a games console. Comfort is the everyday verb; control panel is the hardware twin. Console the witness in the narrative; do not skip the named loss. Mix-up: consul; counsel (already in the dictionary). Stress: verb kənˈsəʊl, noun ˈkɒnsəʊl.',
    ['Console the witness in the narrative; do not skip the named loss.', 'A games console featured in the media-use survey, which is the machine sense.'],
    'console + someone; a games / control console. Everyday verb: comfort. Trap: counsel / consul. Literature, ICT, and news. Comfort someone, or a control/games unit — stress changes.',
    []
  ),
  contempt: L(
    'Contempt is a strong feeling that someone or something deserves no respect; also a legal offence (contempt of court): treat with contempt; contempt of court. Scorn is a close twin; hate is broader. Contempt of court featured in the reporting restriction. Mix-up: content (already in the dictionary); attempt. Do not write contempt for mild disagreement.',
    ['Contempt of court featured in the reporting restriction, the source said.', 'The tone treats the claim with contempt, which is the scorn sense in the language paper.'],
    'contempt for / of; treat with contempt; contempt of court. Close: scorn. Trap: content / attempt. News, law, and literature. Strong scorn, or a court offence — specify.',
    ['scorn']
  ),
  contend: L(
    'To contend is to compete, or to argue that something is true (contend that): contend that; contend for a title. Argue is everyday; compete is sport/business. Critics contend that the sample is biased; quote them, then judge the n. Mix-up: content; pretend. Do not write contend for a polite suggestion with no argument.',
    ['Critics contend that the sample is biased; quote them, then judge the n.', 'Two clubs contended for the title, which is the compete sense.'],
    'contend that; contend for; contender. Everyday: argue / compete. Trap: content / pretend. Essays, news, and sport. Compete, or argue that (formal).',
    []
  ),
  convene: L(
    'To convene is to arrange a formal meeting, or to come together for one: convene a committee; the inquiry will convene. Call a meeting is everyday; summon is more forceful. The inquiry will convene on Monday; still name the chair. Mix-up: convenient (already in the dictionary); convert. Do not write convene for a chance encounter in a corridor.',
    ['The inquiry will convene on Monday, the notice said; still name the chair.', 'Governors convened after the inspection, which is the hold-a-meeting sense.'],
    'convene a meeting / inquiry; convene on + day. Everyday: call a meeting. Trap: convenient. News, citizenship, and governance. Call or hold a formal meeting, not a chat.',
    []
  ),
  converge: L(
    'To converge is to come together from different directions, or to become more similar: lines converge; views converge. Meet is everyday; diverge is the opposite. The two trend lines converge after 2015. Mix-up: converse (next); convert (already in the dictionary). Do not write converge for two parallel lines that never meet.',
    ['The two trend lines converge after 2015, the graph shows.', 'Protesters converged on the square, which is the come-together sense.'],
    'converge on / with; converging lines. Opposite: diverge. Trap: converse / convert. Maths, geography, and news. Come together, or become more alike.',
    []
  ),
  converse: L(
    'To converse is to talk with someone; as a noun or adjective (/ˈkɒnvɜːs/), the opposite: converse with; the converse claim. Conversation is the noun (already in the dictionary); opposite is everyday. Converse with the interviewee, then log consent; the converse claim still needs a figure. Mix-up: conversely (already in the dictionary); convert; converge (previous). Stress changes between talk and opposite.',
    ['Converse with the interviewee, then log consent; the converse claim still needs a figure.', 'The converse of the statement needs a counter-example, which is the logic sense.'],
    'converse with; the converse (of). Noun of talking: conversation. Adverb: conversely. Trap: convert / converge. Methods, orals, and maths. Talk, or the opposite — specify.',
    []
  ),
  coral: L(
    'Coral is a hard substance built by tiny sea animals, forming reefs; also those animals: coral reef; coral bleaching. Reef is the structure; limestone is the rock type. Map coral bleaching in the climate case. Mix-up: choral; carol. Do not write coral for a plastic necklace brand without the biology.',
    ['Map coral bleaching in the climate case, not a jewellery advert.', 'A coral reef featured in the biodiversity enquiry, which is the ecosystem sense.'],
    'coral reef / bleaching; coral polyp. Structure: reef. Trap: choral / carol. Geography and biology. Reef-building animals or their limestone, not a fashion label.',
    []
  ),
  coronation: L(
    'A coronation is the ceremony of crowning a king or queen: a coronation oath; the coronation of. Crown is the object or the verb (already in the dictionary); inauguration is for a president. Date the coronation in the source. Mix-up: coronary; carnation (a flower). Do not write coronation for a workplace promotion.',
    ['Date the coronation in the source, not a souvenir slogan.', 'The coronation oath featured in the citizenship extract, which is the legal-ceremony sense.'],
    'the coronation of; coronation oath / year. Object/verb: crown. President: inauguration. Trap: carnation. History, RS, and news. Crowning a monarch, not any celebration.',
    []
  ),
  corps: L(
    'A corps is a military unit, or a group organised for a special job (press corps; Peace Corps): the medical corps; a corps of engineers. Sounds like core. Corpse (next) is a dead body — classic trap. The medical corps featured in the dispatch. Mix-up: corpse / core / coarse. Plural often corps (same spelling). Do not write corps for one dead body.',
    ['The medical corps featured in the dispatch; do not write corpse for a living unit.', 'The press corps waited for the briefing, which is the organised-group sense.'],
    'the + adjective + corps; press / diplomatic / medical corps. Sounds like core. Trap: corpse. History, news, and citizenship. An organised body of people (silent ps), not a dead body.',
    []
  ),
  corpse: L(
    'A corpse is a dead body, especially of a person: a preserved corpse; discover a corpse. Body is broader; carcass is usually an animal. The archaeology paper describes a preserved corpse. Mix-up: corps (previous); cores. Do not write corpse for a living military unit, or as a joke about a tired classmate.',
    ['The archaeology paper describes a preserved corpse, not a horror caption.', 'A corpse is not a corps: the silent-p unit is living staff, which is the spelling trap.'],
    'a corpse; a preserved / unidentified corpse. Animal: carcass. Trap: corps. History, archaeology, and news. A dead human body, not a military unit.',
    []
  ),
  corrode: L(
    'To corrode is to destroy metal slowly by chemical action, or to damage something gradually: salt water corrodes; corruption corrodes trust. Rust is a common result; erode is wear by wind/water (already elsewhere as related geography). Salt water corroded the fittings. Mix-up: erode; explode. Do not write corrode for a sudden smash.',
    ['Salt water corroded the fittings, the marine case said.', 'Secrecy corroded trust in the inquiry source, which is the figurative sense.'],
    'corrode + metal; corrosion; corrosive. Geography twin: erode. Trap: explode. Chemistry, geography, and news. Eat away slowly, not a one-blow break.',
    []
  ),
  cosmic: L(
    'Cosmic means relating to the universe; also (informal) extremely large: cosmic rays; cosmic scale. Universe is the noun; astronomical is a close twin. Cosmic rays featured in the physics extract. Mix-up: cosmetic; comic. Do not write cosmic for a large school fete without the universe or a clear metaphor.',
    ['Cosmic rays featured in the physics extract, not a perfume advert.', 'A cosmic error in the informal source still needs a named figure if you mean “huge”.'],
    'cosmic rays / dust / scale. Noun: cosmos / universe. Trap: cosmetic / comic. Physics and literature. Of the universe, not merely “huge” unless the tone is informal.',
    []
  ),
  counteract: L(
    'To counteract is to reduce or prevent the effect of something by causing an opposite effect: counteract the acid; counteract inflation. Counter is related (already in the dictionary); oppose is broader. A buffer is added to counteract the acid. Mix-up: counterfeit (next); contract. Do not write counteract for adding more of the same effect.',
    ['A buffer is added to counteract the acid, the practical said.', 'A levy to counteract emissions featured in the policy source, which is the offset sense.'],
    'counteract + noun; counteracting. Broader: oppose. Trap: counterfeit / contract. Science, economics, and news. Work against an effect, not copy it.',
    []
  ),
  counterfeit: L(
    'Counterfeit means made to look real in order to deceive; as a noun, that fake; as a verb, to make one: a counterfeit note; counterfeit goods. Fake is everyday; forge is a close verb. A counterfeit note still needs the serial in the police source. Mix-up: counteract (previous); counteract as “fight fake”. Do not write counterfeit for a licensed replica the source calls official.',
    ['A counterfeit note still needs the serial in the police source.', 'Counterfeit goods featured in the customs case, which is the fake-to-deceive sense.'],
    'a counterfeit + noun; counterfeit goods; to counterfeit. Everyday: fake. Verb twin: forge. Trap: counteract. News, citizenship, and business. Fake and intended to deceive, not an honest copy.',
    ['fake']
  ),
  coup: L(
    'A coup is a sudden illegal seizure of power, often by the military (a coup d’état); also a strikingly successful act: a military coup; a publicity coup. Sounds like coo. Revolution is broader and popular; election is legal. Date the coup in the politics source. Mix-up: coupe (a car); coop. Do not write coup for a routine cabinet reshuffle the source calls lawful.',
    ['Date the coup in the politics source, not a sports “win”.', 'A publicity coup featured in the media case, which is the striking-success sense.'],
    'a military / palace coup; coup d’état; a publicity coup. Broader: revolution. Trap: coupe / coop. News, history, and politics. A seizure of power, or a dramatic success — specify.',
    []
  ),
  cram: L(
    'To cram is to study intensively just before an exam, or to force too many people or things into a space: cram for a test; cram into a carriage. Revise is the planned twin (already elsewhere); stuff is everyday packing. Do not cram unread titles into the bibliography. Mix-up: cramp; cream (already in the dictionary). Do not write cram for a week of spaced revision.',
    ['Do not cram unread titles into the bibliography, the handbook said.', 'Commuters crammed into the carriage, which is the pack-too-tightly sense.'],
    'cram for + exam; cram + into; last-minute cramming. Planned twin: revise. Trap: cramp / cream. Exams, news, and transport. Last-minute study, or pack too tightly.',
    []
  ),
  crater: L(
    'A crater is a round hole made by an explosion, a meteorite, or a volcano: a lunar crater; crater diameter. Hole is everyday; caldera is a large volcanic collapse. Measure the crater diameter on the moon map. Mix-up: crater vs creator (already in the dictionary); crate. Do not write crater for a shallow puddle.',
    ['Measure the crater diameter on the moon map, not a film still.', 'A bomb crater featured in the war source, which is the explosion sense.'],
    'a crater; crater diameter / rim; lunar / volcanic crater. Everyday: hole. Trap: creator / crate. Geography and physics. A bowl-shaped hole from impact, volcano, or blast.',
    []
  ),
  crave: L(
    'To crave is to want something very strongly, often a food or a feeling: crave sugar; crave attention. Want is weaker; long for is literary. Voters craved a recount; still name the petition. Mix-up: crave vs crave as “carve”; grave. Do not write crave for a mild preference in a questionnaire without strong wording in the source.',
    ['Voters craved a recount, the source said; still name the petition.', 'Patients craved salt in the health extract, which is the physical-desire sense.'],
    'crave + noun; crave to + verb. Noun: craving (next). Weaker: want. Trap: carve / grave. Health, news, and literature. Want very strongly, not a mild like.',
    []
  ),
  craving: L(
    'A craving is a very strong desire for something: a craving for sugar; sugar cravings. Desire is broader; hunger is for food in general. A craving for sugar featured in the health extract. Mix-up: carving; craven. Do not write craving for a scheduled lunch with no intensity.',
    ['A craving for sugar featured in the health extract, not a slogan.', 'A craving for certainty sank the evaluation, which is the figurative-desire sense.'],
    'a craving for; cravings. Verb: crave. Broader: desire. Trap: carving. Health, psychology, and news. A strong desire, often physical, not a routine meal.',
    []
  ),
  credential: L(
    'A credential is a qualification, document, or achievement that shows you can be trusted (often credentials): check credentials; teaching credentials. Qualification is a close twin (already in the dictionary); ID is a document. List credentials in the application, then name the awarding body. Mix-up: creditable; creed. Do not write credential for a rumour of skill with no certificate or record.',
    ['List credentials in the application, then name the awarding body.', 'Press credentials featured at the briefing, which is the pass/document sense.'],
    'credentials; check / present credentials. Close: qualification. Trap: creditable. Jobs, news, and citizenship. Proof you are qualified or genuine, not a vibe.',
    []
  ),
  creature: L(
    'A creature is a living being, especially an animal; also a person of a stated type: a sea creature; a creature of habit. Animal is everyday; being is broader. Name the creature on the classification key. Mix-up: creator (already in the dictionary); creation. Do not write creature for a machine.',
    ['Name the creature on the classification key, not a film monster.', 'A creature of habit in the profile still needs a named routine, which is the person-type sense.'],
    'a creature; sea / mythical creature; a creature of habit. Everyday: animal. Trap: creator. Biology, literature, and orals. A living being, or a type of person — specify.',
    []
  ),
  crop: L(
    'A crop is a plant grown for food or other use, or that harvest; as a verb, to cut short, or (of a problem) to appear (crop up): a staple crop; crop up. Harvest is the gathering; yield is how much (if present elsewhere). Map the staple crop in the food-security case. Mix-up: chop (already in the dictionary); crap. Do not write crop for a wild forest with no farming.',
    ['Map the staple crop in the food-security case, not a hair advert.', 'A problem cropped up in the sampling frame, which is the appear sense.'],
    'a staple / cash crop; crop yield; crop up; crop (hair). Gathering: harvest. Trap: chop. Geography, biology, and news. A farm plant, a harvest, or to cut short / appear.',
    []
  ),
  crude: L(
    'Crude means in a raw unfinished state (crude oil), or rough, simple, or vulgar: crude oil; a crude sketch; crude humour. Raw is a close twin; rude is only the manners sense. Quote crude-oil output in barrels. Mix-up: rude / cruel (already in the dictionary). Do not write crude for a precise calibrated instrument.',
    ['Quote crude-oil output in barrels, not a playground insult.', 'A crude prototype still needs the tolerance, which is the unfinished sense.'],
    'crude oil; a crude + noun; crudely. Close: raw. Trap: rude / cruel. Geography, design, and literature. Raw, rough, or vulgar — specify which.',
    []
  ),
  cruise: L(
    'A cruise is a holiday on a ship that stops at several places; as a verb, to travel smoothly or at a steady speed: a cruise ship; cruise at 50 mph. Voyage is broader; holiday is everyday. Map cruise-ship emissions in the coastal case. Mix-up: crusade (next); bruise. Do not write cruise for a ferry commute unless the source calls it a cruise.',
    ['Map cruise-ship emissions in the coastal case, not a brochure slogan.', 'The aircraft cruised at 35,000 feet, which is the steady-speed sense.'],
    'a cruise; cruise ship / liner; cruise at + speed. Broader: voyage. Trap: crusade. Geography, news, and physics. A ship holiday, or travel at a steady speed.',
    []
  ),
  crusade: L(
    'A crusade is a determined campaign for a cause; historically, a medieval Christian military expedition: a crusade against; the Crusades. Campaign is the modern twin (already in the dictionary); war is broader. The public-health crusade still needs a named statute. Mix-up: cruise (previous); cruse. Do not write crusade for a mild leaflet drop with no sustained effort.',
    ['The public-health crusade still needs a named statute, the source said.', 'The Crusades featured in the medieval enquiry, which is the historical-war sense.'],
    'a crusade against / for; the Crusades. Modern twin: campaign. Trap: cruise. History, news, and citizenship. A determined campaign, or a medieval war — specify.',
    []
  ),
  crush: L(
    'To crush is to press something so hard that it breaks; also to defeat completely, or a crowd pressed together (noun): crush a sample; a crush at the gate. Smash is sudden; squeeze is milder. Do not crush the sample in the press; log the load. Mix-up: crash (already in the dictionary); crust (later). Do not write crush for a gentle fold.',
    ['Do not crush the sample in the press; log the load, the practical said.', 'A crush at the turnstile featured in the H&S source, which is the crowd sense.'],
    'crush + object; a crush; crush a rebellion. Milder: squeeze. Trap: crash / crust. Science, news, and H&S. Press and break, defeat, or a dense crowd — specify.',
    []
  ),
  crunch: L(
    'Crunch is a difficult moment when a decision is needed (the crunch); also a loud crushing sound, or the verb to crush noisily: crunch time; a credit crunch. Crisis is broader (already in the dictionary); crisis vs crunch in finance is a news trap. At the crunch the board still named a figure. Mix-up: crush (previous); brunch. Do not write crunch for a relaxed optional choice.',
    ['At the crunch the board still named a figure, the minutes said.', 'A credit crunch featured in the economics case, which is the finance sense.'],
    'the crunch; crunch time; a credit crunch; crunch (verb). Broader: crisis. Trap: crush / brunch. News, business, and orals. A decisive difficult moment, or a crushing sound.',
    []
  ),
  crust: L(
    'A crust is the hard outer layer of bread, the Earth, or a similar surface: the Earth’s crust; a pastry crust. Crustacean is a related biology word; mantle lies below the crust in Earth science. Label the Earth’s crust on the diagram. Mix-up: crush; trust. Do not write crust for the whole planet.',
    ['Label the Earth’s crust on the diagram, not a sandwich brand.', 'A pastry crust featured in the food-tech practical, which is the bakery sense.'],
    'the Earth’s crust; pastry / bread crust; crustal. Below (Earth): mantle. Trap: crush / trust. Geography, science, and food. A hard outer layer, not the whole loaf or planet.',
    []
  ),
  crystal: L(
    'A crystal is a solid with a regular geometric shape from an ordered arrangement of atoms; also high-quality glass: a crystal lattice; crystal glass. Glass is broader; gem is a cut stone. Sketch the crystal lattice in the chemistry practical. Mix-up: crystal vs chrysalis; pistol. Do not write crystal for a shapeless lump of rock.',
    ['Sketch the crystal lattice in the chemistry practical, not a chandelier advert.', 'Lead crystal featured in the materials table, which is the fine-glass sense.'],
    'a crystal; crystal lattice / structure; crystal glass. Broader: glass. Trap: chrysalis. Chemistry, physics, and design. An ordered solid, or fine glass — specify.',
    []
  ),
  crystallise: L(
    'To crystallise is to form crystals, or (of an idea) to become clear and definite (British -ise): sugar crystallises; an idea crystallised. Crystal is the noun (previous); solidify is broader. The policy crystallised after the vote. Mix-up: crystalise (misspelling); criticise. US: crystallize. Do not write crystallise for a vague hunch that stays vague.',
    ['The policy crystallised after the vote, the minutes said.', 'The salt crystallised on the string, which is the science sense.'],
    'crystallise; crystallised. Noun: crystal. US: crystallize. Trap: crystalise spelling. Chemistry, news, and essays. Form crystals, or become definite (UK -ise).',
    []
  ),
  cubic: L(
    'Cubic means shaped like a cube, or measuring volume (cubic metres): cubic centimetres; a cubic crystal. Cube is the noun; square is two-dimensional. Quote discharge in cubic metres per second. Mix-up: cubicle (next); cute. Do not write cubic for a flat square centimetre.',
    ['Quote discharge in cubic metres per second, the hydrology paper said.', 'A cubic metre of concrete featured in the design spec, which is the volume-unit sense.'],
    'cubic metres / centimetres; cubic capacity; a cubic shape. Noun: cube. 2-D: square. Trap: cubicle. Maths, science, and geography. Cube-shaped, or a unit of volume.',
    []
  ),
  cubicle: L(
    'A cubicle is a small enclosed space, often in an office, changing room, or exam hall: an office cubicle; a toilet cubicle. Booth is a close twin; room is larger. A cubicle is not a sampling frame; still log the seat number. Mix-up: cubic (previous); cub. Do not write cubicle for a whole sports hall.',
    ['A cubicle is not a sampling frame; still log the seat number.', 'Changing cubicles featured in the leisure-centre plan, which is the partitioned-space sense.'],
    'an office / exam / toilet cubicle. Close: booth. Trap: cubic / cub. Design, exams, and H&S. A small partitioned space, not a warehouse.',
    []
  ),
  cue: L(
    'A cue is a signal to begin, in theatre or conversation; also a long stick in snooker or pool: miss a cue; a cue card. Clue is a piece of evidence (already in the dictionary) — classic trap. Queue is a line of people (already elsewhere). Miss the cue in the transcript and the turn-taking analysis collapses. Mix-up: clue / queue. Do not write cue for a mystery hint (that is a clue).',
    ['Miss the cue in the transcript and the turn-taking analysis collapses.', 'A snooker cue featured in the PE source, which is the stick sense.'],
    'a cue; on cue; cue card; snooker cue. Evidence: clue. Line of people: queue. Drama, language, and sport. A signal to start, or a snooker stick — not a clue.',
    []
  ),
  cuisine: L(
    'Cuisine is a style of cooking belonging to a country or region (often uncountable): regional cuisine; French cuisine. Food is everyday; culinary is the adjective (next). Map regional cuisine in the cultural case. Mix-up: cousin (already in the dictionary); quiz. Do not write “a cuisine” for one sandwich.',
    ['Map regional cuisine in the cultural case, not a takeaway slogan.', 'Farm-to-table cuisine featured in the tourism source, which is the style-of-cooking sense.'],
    'regional / national cuisine; cuisine of. Adjective: culinary. Everyday: food. Trap: cousin. Geography, culture, and food tech. A region’s style of cooking, not one meal.',
    []
  ),
  culinary: L(
    'Culinary means connected with cooking or kitchens: culinary tradition; culinary skills. Cuisine is the noun style (previous); cookery is everyday British. A culinary tradition still needs a named dish and a place. Mix-up: cubinary (not a word); cylindrical. Do not write culinary as a noun for “a recipe”.',
    ['A culinary tradition still needs a named dish and a place, the geography paper said.', 'Culinary hygiene featured in the food-tech spec, which is the kitchen-practice sense.'],
    'culinary + noun; culinary skills / tradition / hygiene. Noun style: cuisine. Trap: using culinary as a noun. Food tech, geography, and culture. Of cooking, not the dish itself.',
    []
  ),
  culprit: L(
    'A culprit is a person or thing responsible for a problem or a crime: name the culprit; the main culprit. Offender is a legal twin; cause is broader for things. Name the culprit in the investigation, not a rumour. Mix-up: cult; sculpt. Do not write culprit for a victim.',
    ['Name the culprit in the investigation, not a rumour on social media.', 'Particulates were the main culprit in the air-quality case, which is the thing-to-blame sense.'],
    'the culprit; name / identify the culprit; the main culprit. Legal twin: offender. Trap: cult. News, science, and citizenship. The one to blame, person or thing.',
    []
  ),
  cunning: L(
    'Cunning means clever at getting what you want, especially by tricking people; as a noun, that skill: a cunning plan; low cunning. Clever is broader (already in the dictionary); sly is a close twin. A cunning sampling trick is still malpractice. Mix-up: running; canon. Do not write cunning as a compliment for honest hard work with no trick.',
    ['A cunning sampling trick is still malpractice, the handbook said.', 'The fox’s cunning featured in the fable, which is the literature sense.'],
    'cunning + noun; a cunning plan; cunning as a noun. Broader: clever. Close: sly. Trap: running. Literature, news, and evaluations. Clever in a tricky way, not merely “smart”.',
    ['sly']
  ),
  curb: L(
    'To curb is to control or limit something unwanted; as a noun, that limit: curb emissions; a curb on spending. In UK English the pavement edge is kerb, not curb — classic trap. The levy was meant to curb emissions. Mix-up: kerb / curve (later). Do not write curb for the stone edge of a UK pavement.',
    ['The levy was meant to curb emissions, the policy source said.', 'A curb on overtime featured in the budget, which is the limit-as-noun sense.'],
    'curb + noun; a curb on. UK pavement edge: kerb. Trap: curve. News, economics, and citizenship. Limit or restrain, not the UK kerb stone.',
    []
  ),
  cursor: L(
    'A cursor is the moving marker on a computer screen that shows where you are typing or clicking: the cursor; cursor position. Pointer is a close twin for the mouse arrow; caret is the text insertion mark. Describe where the cursor was in the usability test. Mix-up: curator (already in the dictionary); curse. Do not write cursor for a paper bookmark.',
    ['Describe where the cursor was in the usability test, not a brand of mouse.', 'The blinking cursor showed the insertion point, which is the text-marker sense.'],
    'the cursor; move / click with the cursor; cursor position. Close: pointer. Trap: curator / curse. ICT and design. The on-screen marker, not a museum curator.',
    []
  ),
  curve: L(
    'A curve is a smoothly bending line; as a verb, to bend that way; also a graph line: a learning curve; the curve on the graph. Bend is everyday; line can be straight. Describe the curve on the graph, not a single point. Mix-up: curb (previous); carve. Do not write curve for a single plotted point.',
    ['Describe the curve on the graph, not a single point, the science paper said.', 'A steep learning curve featured in the training source, which is the figurative sense.'],
    'a curve; curve + adverb; learning curve; the curve of. Everyday: bend. Trap: curb / carve. Maths, science, and news. A smooth bend or a graph line, not one dot.',
    []
  ),
  cyber: L(
    'Cyber means relating to computers, the internet, and online networks (usually in compounds): cyber attack; cyber security. Online is everyday; digital is broader. Quote the cyber-attack figure in the security brief. Mix-up: cyber as a standalone noun in careful exam prose (prefer a compound); Siberia. Do not write cyber for a paper letter.',
    ['Quote the cyber-attack figure in the security brief, not a film title.', 'Cyber bullying featured in the PSHE source, which is the online-harm sense.'],
    'cyber attack / security / crime / bullying. Everyday: online. Trap: using cyber alone without a noun. News, ICT, and citizenship. Of computers and the internet, in compounds.',
    []
  ),
  cyclone: L(
    'A cyclone is a large rotating storm system, especially in the tropics: a tropical cyclone; cyclone track. Hurricane and typhoon are regional names for intense tropical cyclones; anticyclone is high pressure (already related). Track the cyclone on the synoptic chart. Mix-up: cycle (already in the dictionary); clone. Do not write cyclone for a brief UK shower.',
    ['Track the cyclone on the synoptic chart, not a vacuum-cleaner brand.', 'A tropical cyclone needs wind-speed data, which is the hazard-case sense.'],
    'a tropical cyclone; cyclone track / season. Regional: hurricane / typhoon. Opposite pressure system: anticyclone. Trap: cycle. Geography and news. A large rotating storm, not a drizzle.',
    []
  ),
  cylinder: L(
    'A cylinder is a solid or hollow shape with straight sides and circular ends; also a tube in an engine: volume of a cylinder; a gas cylinder. Cube is square-ended; tube is everyday. Calculate the volume of the cylinder, showing π. Mix-up: cylindrical; silver. Do not write cylinder for a sphere.',
    ['Calculate the volume of the cylinder in the maths paper, showing π.', 'A gas cylinder featured in the H&S practical, which is the hollow-tank sense.'],
    'a cylinder; volume of a cylinder; gas / engine cylinder; cylindrical. Everyday: tube. Trap: sphere. Maths, physics, and D&T. A circular-ended prism, or an engine/gas tube.',
    []
  ),
  cynicism: L(
    'Cynicism is the belief that people are motivated only by self-interest; a cynical attitude (usually uncountable): public cynicism; cynicism about. Cynical is the adjective (already in the dictionary); sarcasm is a sharp tone, not the same. Cynicism about turnout still needs a named poll. Mix-up: sarcasm / stoicism. Do not write cynicism for a one-off joke.',
    ['Cynicism about turnout still needs a named poll, the citizenship source said.', 'Sarcasm is a tone; cynicism is a distrust of motives, which is the distinction in the language paper.'],
    'cynicism about / towards; public cynicism. Adjective: cynical. Trap: sarcasm. Citizenship, news, and literature. Distrust of people’s motives, not a punchline.',
    []
  ),
}
