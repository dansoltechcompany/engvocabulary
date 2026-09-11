const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2U = {
  packaging: L(
    'Packaging is the materials used to wrap and protect goods (usually uncountable): plastic packaging; packaging waste. A package is one wrapped item (already in the dictionary); packing is putting things into bags. Quote the packaging waste figure in the case. Mix-up: packing / packet. Do not write “a packaging” as a countable box.',
    ['Quote the packaging waste figure, not a brand slogan, in the case study.', 'Excess packaging featured in the environmental audit, which is the materials sense.'],
    'packaging waste / materials; excess packaging. Countable twin: a package. Trap: packing / packet. Geography, business, and news. Wrapping materials, not one parcel.',
    []
  ),
  permanently: L(
    'Permanently means in a way that lasts for all time, or for the foreseeable future: permanently closed; permanently resident. Opposite: temporarily; permanent is the adjective (already in the dictionary). The lab was permanently closed after the inspection. Mix-up: permit is permission; personally. Do not write permanently for a one-term cover timetable.',
    ['The lab was permanently closed after the inspection, the notice said.', 'She is not permanently resident, which is the immigration-status sense in the source.'],
    'permanently + adjective / verb; permanently closed / resident. Adjective: permanent. Opposite: temporarily. Trap: permit. Notices, housing, and news. For good, not “for now”.',
    []
  ),
  persistence: L(
    'Persistence is continuing despite difficulty, or the fact that something lasts: persistence of the virus; persistence pays off. Persist is the verb (already in the dictionary); persistent is the adjective (already elsewhere). Credit persistence, then name the method. Mix-up: insistence (demanding); resistance. Do not write persistence for a one-off effort.',
    ['Credit persistence, then name the method that actually worked.', 'Persistence of the pollutant in the sediment featured in the lake study, which is the lasting sense.'],
    'persistence of; persistence pays off. Verb: persist. Adjective: persistent. Trap: insistence. Evaluations, sciences, and news. Keeping going, or lasting in the system.',
    []
  ),
  persuasion: L(
    'Persuasion is the act of making someone agree, or a belief / group of believers: powers of persuasion; of a different persuasion. Persuade is the verb (already in the dictionary); persuasive is the adjective. The leaflet is persuasion, not a sampling frame. Mix-up: perception (already elsewhere); persistence. Do not write persuasion for a legal order.',
    ['The leaflet is persuasion, not a sampling frame, the methods tutor said.', 'Voters of every persuasion featured in the turnout table, which is the belief-group sense.'],
    'powers of persuasion; of a different persuasion. Verb: persuade. Trap: perception. Media, RS, and citizenship. Getting agreement, or a camp of belief — specify.',
    []
  ),
  photography: L(
    'Photography is the skill, job, or process of taking photographs (usually uncountable): aerial photography; a photography module. A photograph / photo is one image (already in the dictionary); photographer is the person (already elsewhere). Date the aerial photography in the enquiry. Mix-up: photocopy (already in the dictionary). Do not write “a photography” for one snap.',
    ['Date the aerial photography in the enquiry, not a holiday snap.', 'The media paper asks how photography changed after cheaper film, which is the practice sense.'],
    'aerial / documentary photography; a photography course. Person: photographer. Image: photograph. Trap: photocopy. Geography, media, and art. The practice, not one picture.',
    []
  ),
  physically: L(
    'Physically means in a way that relates to the body, or to material things rather than ideas: physically demanding; physically present. Physical is the adjective (already in the dictionary); physics is the science (already elsewhere). The site is physically accessible. Mix-up: fiscally (money); psychologically. Do not write physically for “I really agree” (that is literally / actually).',
    ['The site is physically accessible; the form still needs a lift note.', 'The work is physically demanding, which is the body-effort sense in the PE paper.'],
    'physically + adjective; physically present / demanding / possible. Adjective: physical. Trap: actually / literally as a filler. H&S, PE, and access. Body or material world, not “very”.',
    []
  ),
  pile: L(
    'A pile is a heap of things on top of one another; as a verb, to put things in a heap: a pile of scripts; pile up. Heap is a close twin; stack is neater. A pile of unmarked scripts is not a sampling frame. Mix-up: pill is medicine; peer. Do not write pile for a carefully filed archive.',
    ['A pile of unmarked scripts is not a sampling frame.', 'Scree piled at the cliff foot, which is the geography sense.'],
    'a pile of; pile up / onto. Close: heap / stack. Trap: pill. Exams, news, and fieldwork. A heap, not a catalogue.',
    ['heap']
  ),
  pill: L(
    'A pill is a small round piece of medicine to be swallowed; the pill often means oral contraception: a sleeping pill; on the pill. Tablet is a close twin; capsule has a shell. Name the pill in the trial, not a brand from an advert. Mix-up: pile is a heap; peel. Do not write pill for a whole course of treatment without the dose.',
    ['Name the pill in the trial, not a brand from an advert.', 'Access to the pill featured in the health-rights source, which is the contraception sense.'],
    'a sleeping / vitamin pill; on the pill. Close: tablet. Trap: pile. Biology, PSHE, and news. A swallowed dose, not a heap.',
    ['tablet']
  ),
  pipe: L(
    'A pipe is a tube for carrying water, gas, or oil; also a musical instrument or a smoking tube: a burst pipe; pipework. Tube is wider; pipeline is a long industrial line. Map the burst pipe on the estate plan. Mix-up: piper; ripe. Do not call a river a pipe.',
    ['Map the burst pipe on the estate plan, not a metaphor.', 'A gas pipe featured in the risk assessment, which is the utility sense.'],
    'a burst / gas / water pipe; pipework. Close: tube / pipeline. Trap: ripe. Geography, H&S, and news. A tube for fluid, unless music or tobacco is meant.',
    []
  ),
  pity: L(
    'Pity is sympathy for someone’s suffering; what a pity / it is a pity means something is unfortunate: take pity on; a pity that. Sympathy is a close twin; mercy is sparing punishment. The speaker’s pity is not a policy. Mix-up: petty is small-minded; pit. Do not write pity for “I agree with their argument”.',
    ['The speaker’s pity is not the same as a policy, the literature paper said.', 'It is a pity the n is twelve, which is the unfortunate-fact sense — still report the limit.'],
    'take pity on; what a pity; it is a pity that. Close: sympathy. Trap: petty / pit. Literature, news, and orals. Sympathy, or “unfortunately” — not a plan.',
    ['sympathy']
  ),
  placement: L(
    'A placement is a job or training post arranged for someone, or the act of putting something in a place: a work placement; product placement. Place is the verb/noun (already in the dictionary); internship is a close twin in some firms. Log the work-experience placement. Mix-up: replacement; palace. Do not call an unpaid Saturday job a placement without an agreement.',
    ['Log the work-experience placement, not an informal Saturday job.', 'Product placement in the clip still needs a media comment, which is the advertising sense.'],
    'a work / year-long placement; product placement. Close: internship. Trap: replacement. Careers, media, and forms. An arranged post, or putting something in position.',
    []
  ),
  plain: L(
    'Plain means simple and not decorated, or clear; as a noun, a large flat area of land: plain English; a flood plain (often floodplain). Simple is everyday; obvious is “easy to see”. Give the answer in plain English, then the term. Mix-up: plane is an aircraft or a flat surface (already in the dictionary); plan. Do not call a mountain basin a plain.',
    ['Give the answer in plain English, then the technical term.', 'Map the flood plain, not the valley sides, the geography paper said.'],
    'plain English / paper / clothes; a flood plain; plainly. Trap: plane / plan. Language papers and geography. Simple, clear, or flat land — specify.',
    []
  ),
  planet: L(
    'A planet is a large round object in space that moves around a star: the planet Earth; a rocky planet. Star is a sun; moon orbits a planet. Name the planet in the data table. Mix-up: plant is a living thing or a factory (already in the dictionary); plane. Do not call the Sun a planet on this paper.',
    ['Name the planet in the data table, not “a star” from a caption.', 'A habitable planet featured in the physics extract, which is the orbiting-body sense.'],
    'the planet Earth; a rocky / gas planet. Trap: plant / star / moon. Physics, geography, and news. A world orbiting a star, not the star itself.',
    []
  ),
  planning: L(
    'Planning is the process of deciding how to do something, or official control of building (usually uncountable): lesson planning; planning permission. A plan is one scheme (already in the dictionary); planner is the person or diary. Quote the planning permission date. Mix-up: planing (smoothing wood); planting. Do not write “a planning” as a countable meeting.',
    ['Quote the planning permission date, not a campaign leaflet.', 'Exam planning still needs a timetable, which is the process sense.'],
    'planning permission / application; lesson / family planning. Person: planner. Trap: a plan (one scheme). Citizenship, geography, and exams. The process, or building control.',
    []
  ),
  pleasant: L(
    'Pleasant means enjoyable, attractive, or friendly in a mild way: a pleasant tone; pleasant weather. Nice is everyday; enjoyable is stronger for activities. A pleasant interview tone is not evidence. Mix-up: pleasure is the noun; peasant is a historical farmer. Do not call a rigorous proof pleasant as a substitute for valid.',
    ['A pleasant interview tone is not evidence in the write-up.', 'Pleasant weather still needs a temperature on the fieldwork sheet, which is the climate sense.'],
    'a pleasant + noun; pleasantly. Noun: pleasure. Trap: peasant. Orals, weather, and evaluations. Mildly nice, not a proof.',
    []
  ),
  pleasure: L(
    'Pleasure is a feeling of happiness or enjoyment, or something that causes it: with pleasure; a pleasure to read. Enjoyment is a close twin; please is the verb (already in the dictionary). Pleasure in the poem is not a mark-scheme heading. Mix-up: pleasant (adjective); pressure. Do not write “a pleasure” as a grade.',
    ['Pleasure in the poem is not a mark-scheme heading; quote the image.', 'It was a pleasure to host the inspectors, which is the courtesy sense in the letter.'],
    'with pleasure; take pleasure in; a pleasure to + verb. Adjective: pleasant. Verb: please. Trap: pressure. Literature, letters, and orals. Enjoyment, not a mark.',
    ['enjoyment']
  ),
  plead: L(
    'To plead is to ask in an emotional way, or in court to say you are guilty or not guilty: plead for time; plead not guilty. Beg is everyday; appeal is a formal challenge to a decision. The defendant pleaded not guilty. Mix-up: plea is the noun; please; bleed. Do not write plead for “argue an essay point” without the legal or begging sense.',
    ['The defendant pleaded not guilty, the court report said.', 'Heads pleaded for a delay to the inspection, which is the urgent-request sense.'],
    'plead guilty / not guilty; plead for / with. Noun: a plea. Trap: please / plea as the verb. Law, news, and letters. Court answer, or an emotional ask.',
    []
  ),
  plenty: L(
    'Plenty means a large amount; more than enough: plenty of time; in plenty. Enough is the minimum; abundant is more formal. Plenty of anecdotes is still not a random sample. Mix-up: empty; plenary is a whole-group session. Do not write plenty as a counted n without a figure.',
    ['Plenty of anecdotes is still not a random sample.', 'There was plenty of rainfall in June, which still needs millimetres on the graph.'],
    'plenty of + noun; in plenty. Formal twin: abundant. Trap: plenary / empty. Methods, news, and orals. More than enough, not a sample size.',
    []
  ),
  plus: L(
    'Plus means added to; as a noun, an advantage or a plus sign: six plus four; a plus for the town. Minus is the opposite (already in the dictionary); and is everyday. Score plus the oral still needs the raw written total. Mix-up: pulse; positive (already in the dictionary). Do not write plus for “but also” in a formal evaluation without a number or a listed advantage.',
    ['Score plus the oral still needs the raw written total in the margin.', 'A new hall is a plus, which is the advantage sense — still cost it.'],
    'n plus n; a plus / pluses; plus sign. Opposite: minus. Trap: pulse. Maths, accounts, and evaluations. Added to, or an advantage — specify.',
    []
  ),
  poet: L(
    'A poet is a person who writes poems: a Romantic poet; poet laureate. Poem is the text (already in the dictionary); poetry is the art (already elsewhere). Name the poet in the anthology. Mix-up: poem / poetry; potter. Do not call every narrator a poet.',
    ['Name the poet in the anthology, not “the writer” from a blog.', 'The poet laureate featured in the culture source, which is the official-role sense.'],
    'a Romantic / war poet; poet laureate. Text: poem. Art: poetry. Trap: calling the speaker “the poet” without a name. Literature and news. The writer of poems.',
    []
  ),
  poison: L(
    'Poison is a substance that can kill or harm if you eat, drink, or absorb it; as a verb, to put that in, or to spoil: rat poison; poison the debate. Toxin is more technical; venom is from a bite or sting. Name the poison in the case study. Mix-up: poisonous (adjective); prisoner. Do not write poison for “I disliked the film” without harm or spoiling.',
    ['Name the poison in the case study, not a metaphor for “a bad idea”.', 'Misinformation can poison trust, which is the spoil sense in the media paper.'],
    'a poison; poison + object; rat poison. Adjective: poisonous. Close: toxin / venom. Trap: casual dislike. Biology, history, and media. A harmful substance, or to spoil.',
    []
  ),
  poisonous: L(
    'Poisonous means containing poison, or extremely unpleasant and likely to cause harm: a poisonous species; a poisonous atmosphere. Venomous is for animals that inject venom; toxic is a close twin. Label the species poisonous on the sheet. Mix-up: poison (noun/verb); poisonous vs venomous in biology. Do not call a strict teacher poisonous.',
    ['Label the species poisonous on the fieldwork sheet, not “a bit nasty”.', 'A poisonous atmosphere in the chamber featured in the sketch, which is the hostile sense.'],
    'a poisonous + noun; highly poisonous. Twin: toxic. Biology trap: venomous (injects). Sciences, news, and language papers. Contains poison, or hostile — specify.',
    ['toxic']
  ),
  polar: L(
    'Polar means connected with the North or South Pole, or completely opposite: polar ice; polar opposites. Arctic / Antarctic name the regions; pole is the noun. Map polar sea ice, not a holiday iceberg photo. Mix-up: pole / polarise (already in the dictionary); solar. Do not write polar for “a bit cold”.',
    ['Map polar sea ice, not a holiday iceberg photo, the geography paper said.', 'They held polar views on fees, which is the opposite sense — still quote both.'],
    'polar ice / climate / bear; polar opposites / views. Noun: pole. Verb: polarise. Trap: solar. Geography and debates. Of the poles, or utterly opposed.',
    []
  ),
  pole: L(
    'A pole is a long thin stick of wood or metal, or the North or South Pole: a tent pole; magnetic pole. Polar is the adjective; poll is a survey (already in the dictionary). Plot distance from the pole on the climate graph. Mix-up: poll / polar / Poland (Polish). Do not write pole for a survey result.',
    ['Plot distance from the pole on the climate graph, not a tent-pole brand.', 'A flag pole featured in the site sketch, which is the stick sense.'],
    'the North / South / magnetic pole; a tent / flag pole. Adjective: polar. Trap: poll (survey). Geography, physics, and fieldwork. Stick, or end of the Earth’s axis.',
    []
  ),
  polish: L(
    'To polish is to make something smooth and shiny, or to improve a piece of work; as a noun, the substance or the shine: shoe polish; polish a draft. Shine is everyday; refine is more formal for writing. Polish the conclusion; do not add a new argument. Mix-up: Polish (capital P) means from Poland; polite (already in the dictionary). Do not write polish for “translate into Polish”.',
    ['Polish the conclusion; do not add a new argument in the last line.', 'Polish the brass on the memorial, which is the shine sense in the source.'],
    'polish + object; a polish; shoe polish. Trap: Polish (nationality) / polite. Exams, DT, and news. Make shiny, or improve a draft — not the language.',
    []
  ),
  pop: L(
    'Pop is popular music; also a short explosive sound, or to burst: a pop single; pop the balloon. Popular is the adjective (already in the dictionary); popular music is the full phrase. Date the pop single in the media source. Mix-up: pope; pop as dad (informal). Do not call a symphony pop without a genre argument.',
    ['Date the pop single in the media source, not a classical set work.', 'The cork popped, which is the sound sense — still not a music mark.'],
    'pop music / single / chart; a pop; pop + balloon. Adjective: popular. Trap: pope / informal dad. Media and orals. Popular music, a bang, or to burst — specify.',
    []
  ),
  port: L(
    'A port is a town with a harbour; also the left side of a ship, or a fortified wine: a container port; port and starboard. Harbour is the water area; airport is for planes. Map the container port in the globalisation unit. Mix-up: pot; report; portray (already in the dictionary). Do not call an inland warehouse a port.',
    ['Map the container port, not a high-street shop, in the globalisation unit.', 'Turn to port, which is the left-side sense in the seamanship source.'],
    'a container / ferry port; in port; port and starboard. Close: harbour. Trap: pot / airport. Geography, news, and travel. Harbour town, ship’s left, or the wine — specify.',
    []
  ),
  portion: L(
    'A portion is a part of a whole, or an amount of food for one person: a portion of income; a small portion. Part is everyday; share stresses who gets it. Quote the portion of household income spent on rent. Mix-up: proportion (already in the dictionary) is a comparative share; portrait. Do not write portion for a percentage without the whole.',
    ['Quote the portion of household income spent on rent, not a café serving.', 'A portion of the sample was retested, which is the part-of-whole sense.'],
    'a portion of; food portions. Close: part / share. Trap: proportion (relative size). Maths, health, and food tech. A piece of a whole, or a serving.',
    ['part']
  ),
  post: L(
    'Post is the official mail system; also a job, an online message, or the verb to send / publish: in the post; a teaching post; post a comment. Mail is a close twin for letters; job is everyday for work. The job post closed at noon. Mix-up: postpone (already in the dictionary); poster; past. Do not write post for “after” without a hyphen in after-post contexts — use after.',
    ['The job post closed at noon; a tweet is not an application.', 'Put the scripts in the internal post, which is the mail sense.'],
    'in the post; a vacant post; post + letter / comment. Trap: postpone / past / poster. Work, mail, and media. Mail, a job, or to publish — specify.',
    []
  ),
  pour: L(
    'To pour is to make a liquid flow from a container, or (of rain) to fall heavily: pour the filtrate; it is pouring. Tip is rougher; spill is accidental. Pour the filtrate into the flask. Mix-up: poor (already in the dictionary); pore (skin / study); paw. Do not write pour for “poor results”.',
    ['Pour the filtrate into the flask, the practical says, not “tip it roughly”.', 'It poured all afternoon, which is the rain sense on the fieldwork sheet.'],
    'pour + liquid; pour into / over; it is pouring. Trap: poor / pore. Sciences, geography, and cooking. Controlled flow, or heavy rain — not “bad”.',
    []
  ),
  praise: L(
    'To praise is to express approval or admiration; as a noun, that approval: praise the method; in praise of. Compliment is often personal; congratulate is for success. Praise in the report is not a grade. Mix-up: pray / prayer; price (already in the dictionary). Do not write praise for a numerical mark.',
    ['Praise in the report is not a grade; quote the criterion.', 'The inspector praised the fire drill, which is the approval sense.'],
    'praise + person / work; in praise of; praise for. Trap: pray / price. Evaluations, news, and RS. Approval in words, not a score.',
    []
  ),
  pray: L(
    'To pray is to speak to God, or to hope very much that something will happen: pray for peace; I pray this works. Prayer is the noun; prey is an animal hunted (already elsewhere as a different spelling). The source records who may pray in the chapel. Mix-up: prey / praise. Do not write pray for “please” in a formal letter.',
    ['The source records who may pray in the chapel, not a lucky wish in the corridor.', 'Analysts prayed for a turnout rise, which is the hope sense in the comment piece.'],
    'pray for / to; pray that. Noun: prayer. Trap: prey / praise. RS, history, and news. Speak to God, or hope hard — not “please”.',
    []
  ),
  prayer: L(
    'A prayer is words spoken to God, or the act of praying: a prayer for the dead; in prayer. Pray is the verb; hymn is a sung religious song. Religious prayer featured in the census table. Mix-up: pray; preacher; player. Do not write prayer for a school assembly notice unless worship is meant.',
    ['Religious prayer featured in the census table, which is the practice sense.', 'A minute of silent prayer opened the memorial, which is the act sense.'],
    'a prayer for; in prayer; morning prayer. Verb: pray. Trap: player / preacher. RS, history, and news. Words or time given to God.',
    []
  ),
  precisely: L(
    'Precisely means exactly; also used to agree strongly with a point: precisely 2.00 g; Precisely. Precise is the adjective (already in the dictionary); exactly is everyday. State the mass precisely to two decimal places. Mix-up: precious; previously (already in the dictionary). Do not write precisely for “I sort of agree”.',
    ['State the mass precisely to two decimal places, the practical says.', 'Precisely: the n is twelve, which is the agreeing-adverb sense in the oral.'],
    'precisely + figure; more precisely; Precisely. Adjective: precise. Everyday: exactly. Trap: previously / precious. Sciences and orals. Exact, or a firm yes.',
    ['exactly']
  ),
  pregnancy: L(
    'Pregnancy is the state of having a baby developing inside the body: teenage pregnancy; a healthy pregnancy. Pregnant is the adjective; maternity is wider (leave, care). Teenage pregnancy rates featured in the health chart. Mix-up: pregnant; expectancy. Do not use pregnancy as a playground joke in a write-up.',
    ['Teenage pregnancy rates featured in the health-inequality chart.', 'The midwife notes date the pregnancy in weeks, which is the clinical sense.'],
    'a pregnancy; teenage / unplanned pregnancy; pregnancy rates. Adjective: pregnant. Trap: flippant use. Biology, PSHE, and news. The period of being pregnant.',
    []
  ),
  pregnant: L(
    'Pregnant means having a baby or young animal developing inside; also full of meaning: sixteen weeks pregnant; a pregnant pause. Pregnancy is the noun; expectant is a milder twin. The health paper uses pregnant with a stated trimester. Mix-up: pregnancy; poignant. Do not use pregnant as gossip about a classmate.',
    ['The health paper uses pregnant with a stated trimester, not a rumour.', 'A pregnant pause in the speech still needs a quote, which is the meaning-full sense.'],
    'n weeks pregnant; get pregnant; a pregnant pause / silence. Noun: pregnancy. Trap: gossip. Biology, PSHE, and language papers. Expecting young, or charged with meaning.',
    []
  ),
  prepared: L(
    'Prepared means ready to do something, or willing: well prepared; prepared to wait. Prepare is the verb (already in the dictionary); preparation is the noun (already elsewhere). Be prepared to show the raw data. Mix-up: preferred; prepaid. Do not write prepared for “I wrote an essay last night” without readiness for the task now.',
    ['Be prepared to show the raw data, the methods tutor said.', 'A prepared statement featured in the press pack, which is the written-in-advance sense.'],
    'prepared for / to; well / ill prepared; a prepared statement. Verb: prepare. Trap: preferred. Exams, news, and H&S. Ready or willing, not merely “I did homework”.',
    ['ready']
  ),
  pretend: L(
    'To pretend is to behave as if something is true when it is not: pretend to be; there is no point pretending. Feign is more formal; act can be stage performance. Do not pretend a blog is a peer-reviewed source. Mix-up: pretentious (already in the dictionary) is showy; portend. Do not write pretend for “intend”.',
    ['Do not pretend a blog is a peer-reviewed source in the bibliography.', 'The extract asks why the narrator pretends not to know, which is the fiction sense.'],
    'pretend to + verb; pretend that; there is no pretending. Trap: pretentious / intend. Methods, literature, and orals. Act as if, not “plan to”.',
    []
  ),
  prevention: L(
    'Prevention is the act of stopping something from happening (usually uncountable): prevention of falls; crime prevention. Prevent is the verb (already in the dictionary); precaution is a step you take (already elsewhere). Prevention of falls featured in the inspection. Mix-up: intervention (stepping in after); prediction. Do not write “a prevention” as a countable gadget.',
    ['Prevention of falls featured in the care-home inspection, not a slogan only.', 'Flood prevention still needs a named scheme on the map, which is the planning sense.'],
    'prevention of + noun; crime / flood / disease prevention. Verb: prevent. Close: precaution. Uncountable. H&S, geography, and news. Stopping it beforehand, not a gadget.',
    []
  ),
  pride: L(
    'Pride is pleasure in something you have done, or too high an opinion of yourself: take pride in; swallowed her pride. Proud is the adjective (already in the dictionary); arrogance is the negative twin. Civic pride in the source is not a funding stream. Mix-up: prize (already in the dictionary); priest. Do not write pride for a cash grant.',
    ['Civic pride in the source is not a funding stream; quote the budget line.', 'He took pride in the results table, which is the satisfaction sense — still show the n.'],
    'take pride in; a source of pride; swallow your pride. Adjective: proud. Trap: prize. Citizenship, literature, and evaluations. Satisfaction, or arrogance — specify.',
    []
  ),
  priest: L(
    'A priest is a person who performs religious duties, especially in some Christian churches: a parish priest; ordained priest. Minister / vicar are related roles; preacher stresses sermons. Name the priest in the parish source. Mix-up: pride; pierce. Do not write priest for every faith leader (imam, rabbi, and others have their own titles).',
    ['Name the priest in the parish source, not “the Church” as a blob.', 'The priest gave evidence in the inquiry, which is the named-person sense.'],
    'a parish / Catholic priest; priestly. Close: vicar / minister (not always synonyms). Trap: every cleric. RS, history, and news. A named liturgical role.',
    []
  ),
  primarily: L(
    'Primarily means mainly; first of all: primarily for tutoring; primarily concerned with. Mainly is everyday; primary is the adjective (already in the dictionary). The grant is primarily for catch-up tutoring. Mix-up: primarily vs completely; primly. Do not write primarily when the source says the only aim.',
    ['The grant is primarily for catch-up tutoring, not a trip, the letter said.', 'The study is primarily qualitative, which is the methods sense.'],
    'primarily + adjective / preposition phrase; primarily concerned with. Adjective: primary. Everyday: mainly. Trap: “only”. Evaluations and funding letters. Mainly, not exclusively unless stated.',
    ['mainly']
  ),
  prime: L(
    'Prime means main or most important; also a prime number, or the best time (noun); as a verb, to prepare: prime farmland; prime minister; prime a pump. Primary is a close adjective (already in the dictionary); first is everyday. Prime farmland still needs a named soil type. Mix-up: primary / prize; primer. Do not write prime for “a good try”.',
    ['Prime farmland still needs a named soil type on the map.', '17 is prime, which is the number sense in the maths paper.'],
    'prime + noun; prime minister; a prime number; in your prime. Trap: primary / prize. Geography, maths, and news. Main, best, or only divisible by 1 and itself.',
    []
  ),
  princess: L(
    'A princess is a female member of a royal family, especially a king or queen’s daughter, or the wife of a prince: a crown princess. Prince is the male counterpart (already in the dictionary); queen is the sovereign. The history paper dates the princess’s tour. Mix-up: prince; princess vs princesses (plural). Do not call a celebrity a princess without the source’s wording.',
    ['The history paper dates the princess’s tour, not a celebrity caption.', 'The princess in the tale is a stock figure, which is the literature sense.'],
    'a princess; crown princess. Male twin: prince. Trap: informal celebrity use. History, literature, and news. A royal title, not a compliment.',
    []
  ),
  print: L(
    'To print is to produce words or pictures on paper; as a noun, printed letters or a newspaper: print the graph; in print; the print is tiny. Printer is the machine or firm (already in the dictionary); publish is to issue for sale (already elsewhere). Print the graph at 100 per cent scale. Mix-up: printer; sprint. Do not write print for “write by hand”.',
    ['Print the graph at 100 per cent scale, the practical says.', 'The story is still in print, which is the available-as-a-book sense.'],
    'print + object; in print / out of print; fine print. Machine: printer. Trap: handwriting. Exams, media, and DT. On paper, or published text.',
    []
  ),
  prisoner: L(
    'A prisoner is a person kept in prison, or someone captured: a prisoner of war; release a prisoner. Prison is the place (already in the dictionary); inmate is a close twin. The source counts prisoners of war. Mix-up: prison; person. Do not write prisoner for a detained interviewee without a legal basis in the source.',
    ['The source counts prisoners of war, not a playground nickname.', 'The prisoner gave a statement, which is the criminal-justice sense — use the source’s term.'],
    'a prisoner of war; political prisoners. Place: prison. Close: inmate. Trap: casual insult. History, citizenship, and news. Someone held, not a joke.',
    []
  ),
  probable: L(
    'Probable means likely to happen or to be true: a probable cause; highly probable. Probably is the adverb (already in the dictionary); possible is weaker (already elsewhere). A probable cause still needs a stated confidence level. Mix-up: provable; probable vs possible. Do not write probable for a proven result.',
    ['A probable cause still needs a stated confidence level, the methods tutor said.', 'Rain is probable this afternoon, which is the forecast sense — still not a measurement.'],
    'probable + noun; highly / most probable. Adverb: probably. Weaker: possible. Trap: proven. Methods, news, and weather. Likely, not certain.',
    ['likely']
  ),
  productive: L(
    'Productive means achieving a lot, or producing a large amount of goods, crops, or ideas: a productive meeting; productive land. Produce / product / production / productivity are related (several already in the dictionary). A productive meeting still needs minutes. Mix-up: reproductive; conductive. Do not call a long meeting productive without an outcome.',
    ['A productive meeting still needs minutes, the chair said.', 'More productive land featured in the yield table, which is the output sense.'],
    'a productive + noun; productive of. Related: production / productivity. Trap: long = productive. Business, geography, and evaluations. High output, not mere busyness.',
    []
  ),
  profile: L(
    'A profile is a short description of a person or group, a side view, or public attention: a high-profile visit; a demographic profile. Portrait is an image (already in the dictionary); reputation is wider. A high-profile visit is not a sampling frame. Mix-up: file; profit. Do not write profile for a full biography.',
    ['A high-profile visit is not a sampling frame for the survey.', 'Sketch the author’s profile, which is the side-view sense in the art paper.'],
    'a high / low profile; a demographic / risk profile; raise your profile. Trap: profit / full biography. Media, art, and methods. A short sketch, a side view, or visibility.',
    []
  ),
  profitable: L(
    'Profitable means making a profit, or useful because you gain something from it: a profitable line; a profitable discussion. Profit is the noun (already in the dictionary); lucrative is a close twin. A profitable line still needs the cost column. Mix-up: prophet; probable. Do not write profitable for “I enjoyed it” without gain.',
    ['A profitable line still needs the cost column in the accounts extract.', 'A profitable exchange of ideas featured in the minutes, which is the worthwhile sense.'],
    'a profitable + noun; highly profitable. Noun: profit. Close: lucrative. Trap: prophet / enjoyable. Business and evaluations. Makes money, or worthwhile — specify.',
    []
  ),
  progressive: L(
    'Progressive means in favour of new ideas and change, or happening / increasing gradually: a progressive tax; progressive symptoms. Progress is the noun/verb (already in the dictionary); conservative sits opposite in politics. A progressive tax featured in the economics paper. Mix-up: progressive vs successful; congress. Do not call any left-leaning slogan progressive without a definition.',
    ['A progressive tax featured in the economics paper, not a party slogan only.', 'The illness was progressive, which is the gradual-worsening sense in the case.'],
    'a progressive + noun; progressive tax / disease. Noun/verb: progress. Trap: “modern” as a compliment only. Economics, politics, and medicine. For reform, or gradual change — specify.',
    []
  ),
  promising: L(
    'Promising means showing signs that something or someone will be successful: a promising trial; a promising start. Promise is the verb/noun (already in the dictionary); hopeful is weaker. A promising trial still needs a larger n. Mix-up: promising vs promised (already agreed); premises. Do not write promising for a finished, published success.',
    ['A promising trial still needs a larger n, the methods tutor said.', 'A promising start in the first half still needs a second-half comment, which is the sport sense.'],
    'a promising + noun; look promising. Verb/noun: promise. Trap: promised / finished success. Sciences, sport, and news. Early signs, not a guarantee.',
    []
  ),
  prompt: L(
    'To prompt is to cause someone to do or say something; as an adjective, done without delay; as a noun, a cue: prompt an inquiry; a prompt reply; a prompt in the oral. Promptly is the adverb; cause is wider. The leak prompted an inquiry. Mix-up: promote (already in the dictionary); prompt vs immediately as a filler. Do not write prompt for “promote a product”.',
    ['The leak prompted an inquiry, the editorial said, not a rumour mill.', 'A prompt start is in the exam instructions, which is the on-time sense.'],
    'prompt + action; a prompt reply; a prompt (cue). Adverb: promptly. Trap: promote. News, exams, and orals. Cause to act, on time, or a cue — specify.',
    []
  ),
  promptly: L(
    'Promptly means without delay, or at the arranged time: arrive promptly; promptly at 4 p.m. Prompt is the adjective; immediately can be even faster. Scripts must be in promptly at 4 p.m. Mix-up: proudly; probably (already in the dictionary). Do not write promptly for “when you feel like it”.',
    ['Scripts must be in promptly at 4 p.m., exams said.', 'The firm replied promptly, which is the without-delay sense in the complaint log.'],
    'promptly at + time; reply / act promptly. Adjective: prompt. Trap: probably / proudly. Exams, business, and notices. On time, not “soon-ish”.',
    []
  ),
  protein: L(
    'Protein is a substance in food such as meat, eggs, and beans that the body needs to grow and repair: a protein source; protein in the diet. Nutrient is the wider class (already in the dictionary); vitamin is a different nutrient. Name the protein in the diet table. Mix-up: protest; proton (physics). Do not write protein for “a healthy meal” as a whole.',
    ['Name the protein in the diet table, not a smoothie brand.', 'Enzyme action depends on protein shape, which is the biology sense.'],
    'a protein; protein intake / source; high-protein. Wider: nutrient. Trap: proton / a whole meal. Biology and food tech. A named nutrient, not a brand.',
    []
  ),
  protester: L(
    'A protester is a person who shows that they disagree with something, often in public: climate protesters; peaceful protesters. Protest is the noun/verb (already in the dictionary); demonstrator is a close twin. Count named protester groups in the source. Mix-up: protestor (variant spelling); protector. Do not write protester for “anyone who complained by email”.',
    ['Count named protester groups in the source, not “the mob”.', 'A lone protester at the gate still went in the log, which is the individual sense.'],
    'a protester; peaceful / climate protesters. Verb/noun: protest. Close: demonstrator. Trap: “the mob”. News and citizenship. A person at a protest, not every critic.',
    ['demonstrator']
  ),
  province: L(
    'A province is a large area that is an official part of a country, or a field of knowledge or responsibility: a Canadian province; outside my province. Region is wider; county is a UK local unit. Name the province on the map. Mix-up: prove; provision (already in the dictionary). Do not call a UK county a province unless the source does.',
    ['Name the province on the map, not a neighbouring country.', 'Marking is not within my province, which is the responsibility sense in the memo.'],
    'a province of; in the provinces; outside someone’s province. Close: region. Trap: provision / UK county by default. Geography, history, and workplaces. An official region, or a remit.',
    []
  ),
  psychologist: L(
    'A psychologist is a person who studies the mind and behaviour, or who treats related problems: an educational psychologist; a research psychologist. Psychology is the subject; psychiatrist is a medical doctor who can prescribe (C1 trap). Cite the psychologist in the methods paper. Mix-up: psychiatrist / psychic. Do not call a form tutor a psychologist.',
    ['Cite the psychologist in the methods paper, not a lifestyle coach.', 'An educational psychologist featured in the SEND file, which is the school sense.'],
    'an educational / clinical / research psychologist. Subject: psychology. Trap: psychiatrist (medical) / psychic. Methods, PSHE, and news. A trained mind-and-behaviour specialist.',
    []
  ),
  psychology: L(
    'Psychology is the scientific study of the mind and behaviour: cognitive psychology; a psychology practical. Psychologist is the person; psychiatry is medical treatment of mental illness. The psychology practical needs observable measures. Mix-up: physiology; psychiatry. Do not write psychology for “common sense” or a horoscope.',
    ['The psychology practical needs observable measures, not guessed motives.', 'Social psychology featured in the crowding study, which is the field sense.'],
    'cognitive / social / developmental psychology; a psychology paper. Person: psychologist. Trap: psychiatry / horoscope. Sciences and methods. The academic subject, not folk wisdom.',
    []
  ),
  publicise: L(
    'To publicise is to make something widely known (British spelling -ise): publicise a clinic; widely publicised. Publicity is the noun; publish is to issue a text (already in the dictionary). Publicise the catch-up clinics. Mix-up: publish / public; American publicize. Do not write publicise for “print a journal article” (that is publish).',
    ['Publicise the catch-up clinics, the health brief said, not a rumour.', 'The inquiry was widely publicised, which is the made-known sense.'],
    'publicise + event / finding; widely publicised. Noun: publicity. US: publicize. Trap: publish. News, health, and campaigns. Make known, not issue a book.',
    []
  ),
  publicity: L(
    'Publicity is notice or attention from newspapers, television, or the public (usually uncountable): bad publicity; a publicity campaign. Publicise is the verb; fame is wider. Bad publicity is not a crime figure. Mix-up: publication (already in the dictionary); public. Do not write “a publicity” as a countable advert.',
    ['Bad publicity is not a crime figure; quote the court result.', 'A publicity campaign featured in the launch pack, which is the organised-attention sense.'],
    'bad / free publicity; a publicity campaign / stunt. Verb: publicise. Trap: publication / a countable advert. Media and business. Attention, not a book.',
    []
  ),
  pulse: L(
    'Pulse is the regular beat of blood in your arteries; also a single throb, or beans such as lentils: pulse rate; pulses in the diet. Heartbeat is everyday; plus is added to. Record pulse rate in the PE table. Mix-up: plus / impulse; pulse as lentils in food tech. Do not write pulse for a music beat unless the source uses it.',
    ['Record pulse rate in the PE table, not a fitness-app screenshot.', 'Pulses featured in the nutrition unit, which is the beans sense.'],
    'pulse rate; take someone’s pulse; pulses (lentils, beans). Trap: plus / a song’s beat. PE, biology, and food tech. Heartbeat in the wrist, a throb, or legumes — specify.',
    []
  ),
  pump: L(
    'A pump is a machine that forces liquid or gas to move; as a verb, to move something that way, or to try to get information: a water pump; pump out water. Pipe is the tube (see pipe); compressor is for gas under pressure. A failed pump closed the treatment works. Mix-up: plump; dump; punch. Do not call a tap a pump.',
    ['A failed pump closed the treatment works, the water-board notice said.', 'Pump the bike tyres before the field trip, which is the inflate sense.'],
    'a water / heat / bike pump; pump + liquid; pump out. Trap: tap / plump. Geography, PE, and news. A machine that moves fluid, or the verb.',
    []
  ),
  punch: L(
    'A punch is a hit with a closed hand; also a hole-making tool, a fruit drink, or the verb to hit / make a hole: a punch on the log; punch a hole. Blow is wider; slap is with an open hand. A punch on the incident log is assault, not a metaphor. Mix-up: punish; lunch; pinch. Do not write punch for a polite disagreement.',
    ['A punch on the incident log is assault, not a metaphor, the pastoral note said.', 'Punch a hole in the card for the string, which is the tool sense in DT.'],
    'a punch; punch + person / hole; punchline (comedy). Trap: punish / pinch. Pastoral, news, and DT. A fist hit, a hole, or a drink — specify.',
    []
  ),
  punctual: L(
    'Punctual means arriving or happening at the arranged time: a punctual start; punctual trains. On time is everyday; promptly is the adverb twin. A punctual start is in the exam instructions. Mix-up: punctuation; puncture. Do not write punctual for “quite soon”.',
    ['A punctual start is in the exam instructions, not a courtesy only.', 'Be punctual for the oral slot, which is the on-time sense.'],
    'punctual for; a punctual + noun. Adverb: punctually / promptly. Trap: punctuation. Exams, work, and travel. At the arranged time, not “soon”.',
    []
  ),
  punctuation: L(
    'Punctuation is marks such as commas, full stops, and question marks in writing (usually uncountable): punctuation error; punctuation changes meaning. Punctuate is the verb; punctual is about time. Faulty punctuation changed the legal meaning in the clause. Mix-up: punctual; puncture. Do not write “a punctuation” as a countable comma.',
    ['Faulty punctuation changed the legal meaning in the source clause.', 'Check punctuation in the data labels, which is the graph sense.'],
    'punctuation marks / error; a punctuation mark (countable). Verb: punctuate. Trap: punctual. Language papers and law. Commas and full stops, not arriving on time.',
    []
  ),
  punish: L(
    'To punish is to make someone suffer because they have done something wrong: punish an offence; be punished for. Punishment is the noun; penalty is often a set official price. The statute punishes the offence; name the section. Mix-up: punch; publish. Do not write punish for “the weather was bad”.',
    ['The statute punishes the offence; name the section in the paper.', 'Do not punish a whole year group for one incident, which is the fairness sense in the policy.'],
    'punish + person / offence; punish someone for. Noun: punishment. Close: penalise. Trap: punch. Law, history, and pastoral. Official or formal penalty, not a slapstick hit.',
    []
  ),
  punishment: L(
    'Punishment is the act of punishing someone, or a particular penalty: capital punishment; a fair punishment. Punish is the verb; sentence is the court’s decision. Capital punishment featured in the history debate. Mix-up: punch; publication. Do not call a homework reminder a punishment without a tariff.',
    ['Capital punishment featured in the history debate, not a playground sanction.', 'The punishment must match the policy tariff, which is the school-rules sense.'],
    'capital / corporal punishment; a punishment for. Verb: punish. Close: penalty / sentence. Trap: any telling-off. History, law, and pastoral. A stated penalty, not a mood.',
    ['penalty']
  ),
  purchase: L(
    'To purchase is to buy something, especially in a formal or business context; as a noun, something bought: purchase equipment; a major purchase. Buy is everyday; acquisition is more corporate. Log each equipment purchase with a receipt. Mix-up: purpose (already in the dictionary); chase. Do not write purchase for “borrow from the cupboard”.',
    ['Log each equipment purchase with a receipt, finance said.', 'Online purchases still need a returns policy, which is the noun sense.'],
    'purchase + goods; a purchase; hire-purchase. Everyday: buy. Trap: purpose. Accounts, business, and news. Formal buying, or the thing bought.',
    ['buy']
  ),
  pursuit: L(
    'Pursuit is the act of following or trying to achieve something; also a hobby: in pursuit of turnout; leisure pursuits. Pursue is the verb (already in the dictionary); chase is everyday for running after. In pursuit of turnout, the campaign still needs a sampling frame. Mix-up: purse; pursue as the noun. Do not write pursuit for a single finished prize.',
    ['In pursuit of turnout, the campaign still needs a sampling frame.', 'Outdoor pursuits featured in the PE options list, which is the hobby sense.'],
    'in pursuit of; a leisure / academic pursuit. Verb: pursue. Trap: purse / a finished trophy. News, PE, and evaluations. Chasing a goal, or a pastime — specify.',
    []
  ),
}
