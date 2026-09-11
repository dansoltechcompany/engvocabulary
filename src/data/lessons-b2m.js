const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2M = {
  fabricate: L(
    'To fabricate is to invent false information, or to manufacture something: fabricate evidence; a fabricated quote. Make up is the informal twin for lies. Manufacture is the factory sense. Coursework: do not fabricate quotes — that is malpractice. Mix-up: fabric is cloth (already in the dictionary).',
    ['Do not fabricate quotes in the coursework; that is malpractice.', 'The plant fabricates the panels on site, which is the industrial sense.'],
    'fabricate evidence / data / a quote. Informal (lies): make up. Factory: manufacture. Noun: fabrication. Exam boards treat fabricated sources as malpractice.',
    ['invent']
  ),
  facade: L(
    'A facade is the front of a building, or a false appearance: a Georgian facade; a facade of consultation. Front is everyday for the building; pretence is close for the false-show sense. The consultation was a facade. Spelling: façade with a cedilla is also seen. Do not call a polite smile a facade unless it hides something serious.',
    ['The consultation was a facade: the timetable had already been printed.', 'Scaffolding hid the facade during the listed-building repair, which is the architecture sense.'],
    'a facade of + noun; behind the facade. Buildings: the front elevation. Figurative: a false show. Formal register. Planning and politics.',
    ['front']
  ),
  faction: L(
    'A faction is a small group inside a larger organisation that disagrees with the rest: a faction of the board; factional fighting. Group is wider; party is a whole political organisation. A faction blocked the merger. Do not call two friends who prefer tea a faction.',
    ['A faction on the board blocked the merger until the vote.', 'Factional briefings leaked to the Sunday papers, which is the news sense.'],
    'a faction of / within; factional + noun. Wider: group / wing. Politics, unions, boards. Not a casual preference. Often negative in headlines.',
    ['wing']
  ),
  factual: L(
    'Factual means based on facts, not opinion or fiction: a factual account; factual accuracy. Fact is the noun (already in the dictionary). Fictional is an opposite for stories. Keep methods factual. Mix-up: actual means real/current, not “full of facts”.',
    ['Keep the methods paragraph factual; save argument for the discussion.', 'The documentary claimed to be factual, which markers still check against sources.'],
    'a factual error / account / question. Noun: fact. Opposite (stories): fictional. Trap: actual ≠ factual. Exam papers: factual recall vs evaluation.',
    []
  ),
  fairness: L(
    'Fairness is equal, reasonable treatment (usually uncountable): fairness of the process; in fairness. Fair is the adjective (already in the dictionary). Justice is heavier and more legal. Appeals cited fairness after the audio cut out. Do not use fairness for “being quite nice”.',
    ['Appeals cited fairness after the listening file cut out in hall B.', 'In fairness, the rubric had been published, which is a set phrase.'],
    'fairness of; in fairness; a sense of fairness. Adjective: fair. Heavier: justice. Uncountable. Appeals, sport, and workplace policies.',
    ['justice']
  ),
  faithful: L(
    'Faithful means loyal, or true to an original: a faithful friend; a faithful translation. Loyal is close for people; accurate is close for copies. The minutes were not a faithful record. Faith is the noun (already in the dictionary). Do not mix with fateful (deciding the future).',
    ['The minutes were not a faithful record of what the chair said.', 'A faithful adaptation kept the novel’s ending, which is the copy sense.'],
    'faithful to; a faithful record / copy / friend. People: loyal. Texts: accurate / true to. Trap: fateful. Reviews and minutes.',
    ['loyal']
  ),
  fancy: L(
    'Fancy is a very British verb: fancy a tea; fancy doing something = would like to. It also means imagine, or find someone attractive. As an adjective: fancy dress; a fancy hotel (decorated / expensive). Want is the plain twin. Few candidates fancy a January resit. Do not write “I fancy that” in a formal essay if you mean “I think”.',
    ['Few candidates fancy a January resit after the winter mocks.', 'Fancy dress is banned in the hall, which is the costume adjective.'],
    'fancy + -ing; fancy a + noun (UK). Adjective: fancy dress / a fancy hotel. Formal essays: prefer think / wish. Informal UK speech.',
    ['want']
  ),
  fatality: L(
    'A fatality is a death caused by an accident, conflict, or disaster: road fatalities; no fatalities were reported. Death is the everyday word; fatality is news and official. Fatal is the adjective (already in the dictionary). Inquests record fatalities. Do not use it for a failed exam.',
    ['The inquest recorded two fatalities on the school run that week.', 'The crash caused injuries but no fatalities, which is a typical bulletin line.'],
    'road / civilian fatalities; no fatalities. Adjective: fatal. Everyday: death. Official and news register. Countable. Not a metaphor for a bad grade.',
    ['death']
  ),
  fatigue: L(
    'Fatigue is extreme tiredness (often uncountable), or metal weakening from repeated stress: consultant fatigue; metal fatigue. Tiredness is everyday and weaker. Exhaustion is close. Night shifts: fatigue was cited. Do not use it for ordinary sleepiness after one late bus.',
    ['Consultant fatigue was cited after the twelfth night shift.', 'Investigators pointed to metal fatigue in the rail, which is the engineering sense.'],
    'fatigue among staff; metal / combat fatigue. Uncountable in the tiredness sense. Everyday: tiredness. Stronger: exhaustion. NHS, aviation, materials science.',
    ['exhaustion']
  ),
  feat: L(
    'A feat is an impressive, difficult achievement: a feat of engineering; no mean feat. Achievement is wider; stunt can sound cheap. Publishing the scripts was a feat of document control. Mix-up: feet is the body part / unit. Do not call handing in on time a feat unless it truly was hard.',
    ['Publishing the unmarked scripts was a feat of document control.', 'Completing the paper in ink with a broken wrist was no mean feat, which is an idiom.'],
    'a feat of + noun; no mean feat. Wider: achievement. Informal cheap twin: stunt. Trap: feet. News features and citations.',
    ['achievement']
  ),
  federal: L(
    'Federal describes a system with a central government and states or regions: federal spending; a federal republic. Central is looser. In UK essays, contrast federal systems with the UK’s devolved (not fully federal) model. The paper compared federal spending with devolved NHS budgets. Do not call a county council federal.',
    ['The paper compared federal spending with devolved NHS budgets.', 'Federal agents is US news English, which UK papers still use for US stories.'],
    'federal government / spending / law. Contrast: unitary / devolved. US and EU politics papers. Not an English county. Noun cousin: federation.',
    []
  ),
  federation: L(
    'A federation is a group of states or organisations under one centre: a federation of unions; the Russian Federation. Alliance is looser; union can mean something else in industrial English. The teachers’ federation balloted. Mix-up: federal is the adjective. Do not call a school club a federation.',
    ['The teachers’ federation balloted on a further strike day.', 'The module maps how a federation differs from a confederation, which is the politics sense.'],
    'a federation of; the X Federation. Adjective: federal. Looser: alliance. Politics and trade unions. Formal names keep a capital.',
    []
  ),
  feeble: L(
    'Feeble means very weak, or unconvincing: a feeble pulse; a feeble excuse. Weak is the everyday twin; lame is informal for excuses. Examiners: a feeble evaluation. Do not call a quiet student feeble. Register is often critical.',
    ['A feeble evaluation will not reach the top band, the examiner wrote.', 'The signal was too feeble to plot, which is the physical sense.'],
    'a feeble excuse / attempt / argument. Everyday: weak. Informal (excuses): lame. Critical tone. Health: a feeble pulse (clinical).',
    ['weak']
  ),
  fellowship: L(
    'A fellowship is a funded academic post or grant, or a sense of friendly association: a research fellowship; a sense of fellowship. Scholarship is usually for students; a fellowship is often postdoctoral or honorary. She took a research fellowship in Leeds. Do not use it for a group chat.',
    ['She turned down a City job for a research fellowship in Leeds.', 'The chaplaincy stressed fellowship after the hall closed, which is the community sense.'],
    'a research / visiting fellowship. Student awards: scholarship. Community: fellowship (uncountable). Universities and churches. Formal.',
    []
  ),
  feminist: L(
    'A feminist is someone who supports equal rights for women; the word is also an adjective: a feminist reading; feminist theory. Feminism is the noun for the movement. A critic called the staging feminist. Use it as analysis, not as an insult. Do not reduce it to “about women” in every sentence.',
    ['The critic called the staging feminist without flattening the verse.', 'Feminist theory is a set option on the literature specification, which is the academic adjective.'],
    'a feminist critic / reading; feminist theory. Movement noun: feminism. Literary and politics papers. Neutral academic register — not a taunt.',
    []
  ),
  fertility: L(
    'Fertility is the ability to produce children or good crops (usually uncountable): fertility rate; soil fertility. Fertile is the adjective (already in the dictionary). Birth rate is related but not identical. ONS: fertility below replacement. Handle the human sense with care; it is not a joke word.',
    ['ONS figures showed fertility falling below the replacement rate.', 'Soil fertility fell after the flood, which is the agricultural sense.'],
    'fertility rate; soil fertility. Adjective: fertile. Related: birth rate. Uncountable. Demography and geography. Sensitive in human contexts.',
    []
  ),
  fictional: L(
    'Fictional means invented for a story: a fictional town; a fictional narrator. Fiction is the noun (already in the dictionary). Factual is an opposite. Do not treat the narrator as the author. Mix-up: fictitious can mean invented to deceive (a fictitious address).',
    ['Do not treat the narrator as the author; the I is fictional.', 'The village is fictional, which still needs a map key in the coursework.'],
    'a fictional character / setting. Noun: fiction. Opposite: factual / real. Close but sharper (deceit): fictitious. Literature papers.',
    []
  ),
  finalise: L(
    'To finalise (UK) is to complete the last details: finalise the draft; finalise arrangements. US spelling is finalize. Finish is everyday and wider. Final is the adjective (already in the dictionary). Finalise the bibliography before submit. Do not write “finalise the whole A-level” if you mean finish the course.',
    ['Finalise the bibliography before you hit submit on the portal.', 'US style guides prefer finalize; UK boards still use finalise, which is a spelling point.'],
    'finalise a plan / deal / draft. US: finalize. Everyday: finish. Noun: finalisation. Portals, contracts, and itineraries. Last-stage verb.',
    ['complete']
  ),
  finding: L(
    'A finding is a result of research or an official inquiry: key findings; a finding of fact. Find is the verb (already in the dictionary). Result is everyday; conclusion is what you argue. The inquiry’s central finding… Often plural in science write-ups. Do not use finding for a lost pencil.',
    ['The inquiry’s central finding was that the sample was unpublished.', 'List three findings, then evaluate, which is the methods-section pattern.'],
    'key / main findings; a finding that. Verb: find. Everyday: result. Legal: a finding of fact. Reports and labs — usually plural.',
    ['result']
  ),
  finite: L(
    'Finite means having a limit; not infinite: finite resources; a finite number. Limited is close; infinite is the opposite. Marking time is finite. Maths: a finite set. Do not write “finite small” — finite already means bounded.',
    ['Marking time is finite; do not spend it all on question one.', 'Treat the sample as finite, which is the statistics sense.'],
    'finite resources / time / set. Opposite: infinite. Close: limited. Maths and economics. Not a synonym of tiny.',
    ['limited']
  ),
  firearm: L(
    'A firearm is a gun you can carry and fire: firearm offences; in possession of a firearm. Gun is everyday; firearm is legal and news English. The commissioner reported a fall in firearm offences. Do not use it for a water pistol. Sensitive, factual register.',
    ['Firearm offences fell in the force area, the commissioner said.', 'Licensed firearms must be stored as the certificate requires, which is the legal sense.'],
    'firearm offences / possession; a licensed firearm. Everyday: gun. Legal and Home Office English. Countable. Not toys or metaphor.',
    ['gun']
  ),
  firm: L(
    'A firm is a company, especially professional services: a law firm; a City firm. As an adjective (related to firmly, already in the dictionary): a firm offer; firm ground. Company is wider. A City law firm funded the clinic. Do not call a stall a firm.',
    ['A City law firm funded the pro bono clinic at the university.', 'The offer is firm until Friday, which is the adjective.'],
    'a law / accountancy firm; a City firm. Adjective: firm evidence / a firm no. Wider: company. Business pages. Not a market stall.',
    ['company']
  ),
  flash: L(
    'A flash is a sudden bright light, or a very short time: a flash of lightning; in a flash. Flash flooding is a set UK weather phrase. As a verb: cameras flash. Glow is slower and steadier. Flash flooding closed the A-road. Do not use flash for a week-long heatwave.',
    ['Flash flooding closed the A-road before the speaking tests.', 'The camera flash was banned in the gallery, which is the light sense.'],
    'a flash of; in a flash; flash flooding / a news flash. Verb: flash. Weather and photography. Sudden — not a long event.',
    []
  ),
  float: L(
    'To float is to rest on a liquid without sinking, or to offer shares for sale: wood floats; float a company. Sink is an opposite in water. Launch is looser for a business. The trust will not float. As a noun: a milk float; a carnival float. Do not mix with fleet (ships).',
    ['The trust will not float on the stock market, the board confirmed.', 'The density practical asks which solids float, which is the science sense.'],
    'float on water; float a company / shares. Opposite (water): sink. Finance: an IPO / flotation. Noun: a carnival float. Science and City pages.',
    []
  ),
  flow: L(
    'Flow is a steady movement of liquid, traffic, money, or ideas (often uncountable): cash flow; the flow of traffic; the argument does not flow. Stream is more poetic for water. Cash flow closed the sports hall. As a verb: traffic flows. Do not use flow for a single drip.',
    ['Cash flow, not profit, closed the academy’s sports hall project.', 'Make the paragraphs flow, which is the writing-advice sense.'],
    'cash flow; a flow of + noun; flow of traffic. Verb: flow. Uncountable in many uses. Business, geography, and essay structure.',
    []
  ),
  fold: L(
    'To fold is to bend so one part covers another, or — of a business — to close: fold the letter; the company folded. Collapse is close for businesses. The regional title folded. As a noun: a fold in the map; the fold (a group). Mix-up: folder is the file holder (already in the dictionary).',
    ['The regional title folded after the advertising slump.', 'Fold the map to the grid square, which is the physical sense.'],
    'fold something in half; a business folded. Noun: a fold; back in the fold. Object: folder. News: papers and shops fold. Not a synonym of fail in every sentence.',
    []
  ),
  foremost: L(
    'Foremost means most important or most respected: foremost among them; one of the foremost experts. Leading and chief are close. First is about order in a list, not always prestige. A foremost climate scientist. Do not write “the foremost page” if you mean the first page.',
    ['She is among the foremost climate scientists advising the Met Office.', 'Foremost among the risks is sampling bias, which is the “chief” sense.'],
    'the foremost + expert / reason; foremost among. Close: leading / chief. Trap: first (sequence). Academic and news profiles.',
    ['leading']
  ),
  forever: L(
    'Forever means for all time, or (informal) for a very long time: gone forever; it took forever. For ever as two words is also used in UK English. Always is not identical (every time, not all time). A finding is not forever. Do not use forever in a methods paragraph if you mean “until the next census”.',
    ['A malpractice finding is not forever, but it follows the next sitting.', 'The portal took forever to load, which is the informal exaggeration.'],
    'gone forever; forever + adjective. Informal: it took forever. UK also: for ever. Stronger than a long time in careful prose — or jokingly weaker.',
    []
  ),
  formation: L(
    'Formation is the process of forming, or an arrangement: cloud formation; formation of a government; in formation (aircraft). Form is the verb/noun already in the dictionary. Shape is everyday for objects. Cloud formation delayed the paper. Do not use formation for a single cloud.',
    ['Cloud formation over the Pennines delayed the afternoon paper.', 'Talks on the formation of a coalition ran overnight, which is the politics sense.'],
    'cloud / rock formation; the formation of a government; in formation. Verb: form. Geography, chemistry, and politics. Process or pattern.',
    []
  ),
  formidable: L(
    'Formidable means impressive and hard to deal with because of size, skill, or power: a formidable opponent; formidable obstacles. Scary is informal; impressive is weaker and more positive. The incumbent is formidable. Do not use it as a compliment for a pretty poster.',
    ['The incumbent is a formidable opponent on education questions.', 'A formidable reading list met the new cohort, which is still about difficulty.'],
    'a formidable opponent / challenge / reputation. Weaker: impressive. Informal: scary. Respect plus difficulty. Politics, sport, and academia.',
    []
  ),
  fracture: L(
    'A fracture is a break in bone or hard material, or a split in a group: a fracture of the wrist; a fracture in the coalition. Break is everyday; split is close for politics. As a verb: the bone fractured. A coalition fracture delayed the bill. Do not call a disagreement over biscuits a fracture.',
    ['A fracture in the coalition delayed the schools bill.', 'The A&E letter confirmed a fracture, which is the medical sense.'],
    'a hairline / compound fracture; a fracture in + group. Verb: fracture. Everyday: break. Politics and medicine. Serious split, not a mild row.',
    ['break']
  ),
  franchise: L(
    'A franchise is the right to sell a company’s goods under its name, or the right to vote: a rail franchise; extend the franchise. Licence is close for business; suffrage is the historical voting word. The rail franchise will not be renewed. Keep the two senses distinct in essays.',
    ['The rail franchise will not be renewed after the punctuality data.', 'Reformers fought to extend the franchise, which is the voting sense.'],
    'a rail / fast-food franchise; the franchise (vote). Business close: licence. History: suffrage / the vote. Two exam-ready senses — label which.',
    []
  ),
  freely: L(
    'Freely means without restriction, or openly: move freely; admit freely; freely available. Free is the adjective (already in the dictionary). Openly is close for speech. Calculators may be used freely. Do not write “freely expensive” — that is a different free (without charge).',
    ['Candidates may use a calculator freely in paper two, the rubric said.', 'She freely admitted the sample was small, which is the “openly” sense.'],
    'freely available; admit / speak freely; roam freely. Adjective: free. Charge sense is another word family. Rubrics and rights language.',
    ['openly']
  ),
  freeze: L(
    'To freeze is to become ice, or to hold pay, prices, or assets still: freeze the sample; a pay freeze. As a noun: a freeze on recruitment. Melt is an opposite for ice. Unions rejected a pay freeze. Mix-up: freezer / frozen (already in the dictionary) are related, not drop-in verbs.',
    ['Unions rejected a two-year pay freeze after inflation stayed high.', 'Freeze the reagent, which is the lab sense.'],
    'a pay / price / hiring freeze; freeze assets. Ice: freeze / melt. Noun and verb. Industrial news and biology. Not “freeze the building” for lock it.',
    []
  ),
  friction: L(
    'Friction is resistance when surfaces rub, or disagreement: friction between teams; reduce friction. Conflict is wider; rubbing is the physical everyday idea. Physics: calculate friction. Workplace: friction delayed INSET. Do not use it for a single rude email unless tension is ongoing.',
    ['Friction between the trust and the union delayed the INSET day.', 'The practical measures friction on the ramp, which is the physics sense.'],
    'friction between A and B; reduce friction. Physics: force of friction. Close (people): tension / conflict. Labs and industrial relations.',
    ['tension']
  ),
  fringe: L(
    'A fringe is an outer edge, hair over the forehead, or an unofficial/extreme margin: on the fringe of the city; a fringe festival; fringe candidates. Edge is everyday for places. Fringe benefits are extras in a job. Fringe candidates pushed climate. Do not call the main party a fringe.',
    ['Fringe candidates still pushed climate onto the hustings, reporters said.', 'On the urban fringe, buses thin out, which is the geography sense.'],
    'on the fringe of; the lunatic fringe (loaded); a fringe festival / benefit. Hair: a fringe (UK; US bangs). Politics, geography, HR. Margin, not the centre.',
    ['edge']
  ),
  frontier: L(
    'A frontier is a border, or the outer limit of knowledge: the frontier of physics; a land frontier. Border is the everyday twin for countries; boundary is close. History modules: the empire’s frontier. Mix-up: front is the forward side (already in the dictionary). Do not call a garden fence a frontier.',
    ['The module asks where the frontier of the empire actually ran.', 'Gene editing sits on the frontier of the specification, which is the knowledge sense.'],
    'a frontier with / between; the frontier of science. Everyday (countries): border. Academic metaphor: the next frontier. History, IR, and science features.',
    ['border']
  ),
  frustrate: L(
    'To frustrate is to annoy someone by blocking them, or to prevent a plan: frustrated by delays; frustrate an attack. Frustrating and frustration are already in the dictionary as related forms — this is the verb. Late boundaries frustrate schools. Do not mix with fluster (make nervous).',
    ['Late grade boundaries frustrate schools trying to set sixth-form offers.', 'Better locks frustrate burglars, which is the “thwart” sense.'],
    'frustrate a plan / an attempt; frustrated by. Related: frustrating / frustration. Close (thwart): prevent. Schools and crime reporting. Verb headword.',
    ['thwart']
  ),
  fumes: L(
    'Fumes are strong, often harmful gas or smoke (usually plural): exhaust fumes; paint fumes. Smoke is wider; gas is the chemical word. Exhaust fumes closed the underpass. Uncountable-style: the fumes were thick. Do not use fumes for steam from a kettle unless it is chemical.',
    ['Exhaust fumes closed the underpass beside the exam hall.', 'Open a window; the varnish fumes are not a joke, which is the health-and-safety sense.'],
    'exhaust / chemical fumes. Usually plural. Wider: smoke. Labs, traffic, and HSE notices. Not ordinary water vapour.',
    []
  ),
  furnish: L(
    'To furnish is to put furniture in a room, or — formal — to supply evidence: a furnished flat; furnish the committee with papers. Provide and supply are the plain twins for the formal sense. Counsel asked the trust to furnish scripts. Do not write “furnish the homework” in casual class talk.',
    ['Counsel asked the trust to furnish the unmarked scripts by Friday.', 'The flat is let furnished, which is the housing sense.'],
    'furnish a room; furnish someone with information. Housing: furnished / unfurnished. Formal legal: furnish evidence. Not everyday “give”.',
    ['provide']
  ),
  fusion: L(
    'Fusion is joining two things into one; in physics, nuclei combining: nuclear fusion; fusion cuisine. Fission is splitting (a classic contrast). Mix is looser. The lab tour covered fusion, not fission. Music: jazz fusion. Do not call a staple in a booklet fusion.',
    ['The lab tour covered fusion research, not fission, the physicist stressed.', 'The menu is a fusion of Gujarati and Mancunian cooking, which is the culture sense.'],
    'nuclear fusion (vs fission); fusion cuisine / jazz fusion. Looser: mix / blend. Physics papers and reviews. Joining, not splitting.',
    []
  ),
  futile: L(
    'Futile means having no chance of success: a futile attempt; it is futile to + verb. Pointless is the everyday twin; hopeless is closer to despair. It is futile to appeal after the deadline. Do not use futile for a merely boring lesson.',
    ['It is futile to appeal a clerical error after the deadline, the board wrote.', 'A futile gesture still went on the record, which is the politics sense.'],
    'a futile attempt / gesture; it is futile to. Everyday: pointless. Stronger mood: hopeless. Formal complaints and editorials. Not “a bit useless”.',
    ['pointless']
  ),
  gale: L(
    'A gale is a very strong wind: a gale warning; gales overnight. Wind is the general word; storm often includes rain. Met Office: gale warning cancelled fieldwork. Beaufort scale: a gale is a defined force. Do not call a breeze a gale.',
    ['A gale warning cancelled the geography fieldwork on the headland.', 'Overnight gales brought trees down on the line, which is a typical bulletin.'],
    'a gale warning; gale-force winds. General: wind. Wider/worse: storm / hurricane. Met Office and travel news. Strength, not drizzle.',
    ['storm']
  ),
  galaxy: L(
    'A galaxy is a huge system of stars: the Milky Way galaxy; a distant galaxy. Universe is everything; solar system is one star plus planets — a classic exam trap. Informal: a galaxy of stars (celebrities). The galaxy module moved online. Do not call the solar system a galaxy.',
    ['The observatory night was clouded out, so the galaxy module moved online.', 'A galaxy of experts sat on the panel, which is the glittering-group metaphor.'],
    'a spiral / distant galaxy; the Milky Way. Trap: universe / solar system. Informal: a galaxy of + people. Physics and arts pages.',
    []
  ),
  garment: L(
    'A garment is a piece of clothing (slightly formal or technical): a woollen garment; garment workers. Clothes and clothing are everyday. The textiles paper asked about the garment’s hem. Do not use garment for a single sock in casual talk unless you are in design class.',
    ['The textiles paper asked how the garment was finished at the hem.', 'Garment factories were named in the supply-chain report, which is the industry sense.'],
    'a garment; the garment industry. Everyday: clothes / an item of clothing. Design, customs, and labour news. Countable. Formal/technical.',
    ['clothes']
  ),
  gateway: L(
    'A gateway is an entrance, or something that gives access: a gateway city; a gateway qualification; a security gateway. Entrance is everyday for doors. Manchester as a gateway for students. Computing: a default gateway. Do not call a classroom door a gateway except as metaphor.',
    ['Manchester is often called a gateway city for international students.', 'GCSE is still treated as a gateway qualification, which is the education sense.'],
    'a gateway to / city / qualification. Everyday: entrance. IT: a gateway. Education and travel features. Access, not just a door.',
    ['entrance']
  ),
  gaze: L(
    'To gaze is to look for a long time: gaze at; gaze out of the window. Stare can be ruder; look is neutral and short. As a noun: her gaze. Do not gaze at another screen in the hall. Softer than glare. Do not use gaze for a quick glance (already in the dictionary).',
    ['Do not gaze at another candidate’s screen; that is malpractice.', 'The poem’s speaker holds the reader’s gaze, which is the noun.'],
    'gaze at / out of. Noun: a gaze. Neutral long look. Ruder: stare. Quick: glance. Exam halls and literature. Not a peek.',
    ['stare']
  ),
  generalisation: L(
    'A generalisation (UK) is a broad statement from limited cases: a sweeping generalisation; generalise is the verb (already in the dictionary). US spelling is generalization. Avoid a generalisation from n = 12. Stereotype is a loaded cousin. Do not call a theorem a generalisation unless you mean the maths sense.',
    ['Avoid a sweeping generalisation from a sample of twelve.', 'US journals use generalization; UK A-level still prefers generalisation, which is spelling.'],
    'a sweeping / unfair generalisation. Verb: generalise. US: generalization. Close (people): stereotype. Methods and essays. UK spelling.',
    []
  ),
  genius: L(
    'Genius is exceptional ability, or a person who has it: a genius for + noun; a mathematical genius. Uncountable for the quality; countable for the person. Bright is weaker. Tutors warned against calling every pupil a genius. Mix-up: genus is biology. Do not use it as casual slang in a reference.',
    ['Calling every bright pupil a genius weakens a reference, tutors warned.', 'She has a genius for pacing a paper, which is the uncountable quality.'],
    'a genius for; a literary genius. Quality (uncountable) vs person (countable). Weaker: talent / bright. Formal references: use sparingly.',
    ['talent']
  ),
  geology: L(
    'Geology is the study of rocks and Earth’s structure, and the rock make-up of a place: the geology of the coast; a geology A-level. Geography is wider (people and places too). Geographical is already in the dictionary. Jurassic Coast geology. Do not use geology as a trendy synonym of “the ground”.',
    ['The geology of the Jurassic Coast is a staple of the A-level field trip.', 'She swapped geography for geology, which is the subject sense.'],
    'the geology of; igneous / sedimentary geology. Wider: geography. Related: geographical. Field trips and Earth-science papers. Rocks, not maps of shops.',
    []
  ),
  geometry: L(
    'Geometry is the maths of shapes, lines, and angles: Euclidean geometry; a geometry paper. Shape work at primary is informal; geometry is the subject name. Show constructions; marks go on the arcs. Mix-up: geography. Do not write “the geometry of the story” unless you mean structure metaphorically.',
    ['Show the construction; geometry marks are lost if the arcs are missing.', 'Coordinate geometry is on paper two, which is the specification sense.'],
    'plane / coordinate geometry; a geometry set. Subject vs everyday: shapes. Trap: geography. GCSE/A-level. Constructions and proofs.',
    []
  ),
  gigantic: L(
    'Gigantic means extremely large: a gigantic backlog; a gigantic statue. Huge and enormous are close; giant is the noun/adjective already in the dictionary. A gigantic appeals backlog. Slightly dramatic — fine in news, heavy in a calm methods line. Do not use it for a slightly long queue.',
    ['A gigantic backlog of appeals sat unopened after results day.', 'A gigantic sculpture blocked the quad, which is the physical sense.'],
    'a gigantic + noun. Close: huge / enormous. Related: giant. Emphatic, slightly informal for reports. Scale, not a mild increase.',
    ['enormous']
  ),
  glare: L(
    'Glare is harsh light, or an angry stare: the glare of publicity; a glare of headlights. As a verb: she glared. Gaze is longer and calmer; stare is closer. The glare of publicity followed the leak. Do not use glare for a friendly look.',
    ['The glare of publicity followed the leaked grade boundaries.', 'Sun glare on the whiteboard hid the worked example, which is the light sense.'],
    'the glare of publicity / headlights; glare at. Verb: glare. Calmer long look: gaze. News and driving. Harsh light or hostility.',
    []
  ),
  glorious: L(
    'Glorious means deserving great praise, or (of weather) beautifully bright: a glorious victory; glorious sunshine. Glory is the noun (separate headword). Wonderful is weaker and wider. A glorious failure is an ironic set phrase. Do not call a pass-mark script glorious.',
    ['It was a glorious failure: the method was elegant, the data were not.', 'A glorious Saturday ruined the revision timetable, which is the weather sense.'],
    'a glorious victory / day / failure (ironic). Noun: glory. Weather: glorious sunshine. Emphatic praise. Reviews and forecasts.',
    []
  ),
  glory: L(
    'Glory is great fame and honour, or great beauty (often uncountable): in all its glory; glory days. Fame is wider and can be empty; honour is already in the dictionary. Do not chase glory in the introduction. Religious: glory to. Do not use glory for a small house point.',
    ['Do not chase glory with a flashy introduction; answer the command word.', 'The restored ceiling was photographed in all its glory, which is the beauty sense.'],
    'in all its glory; glory days; a blaze of glory. Wider: fame. Related adjective: glorious. Speeches, sport, and art. Uncountable in many uses.',
    ['fame']
  ),
  grace: L(
    'Grace is elegant movement, extra time (a period of grace), or polite goodwill: with good grace; a week’s grace. Graceful is the movement adjective (separate headword). Mercy is heavier. A week’s grace after the portal crash. Do not mix with grease. Religious: say grace.',
    ['A week’s grace was given after the portal crashed on the deadline.', 'She accepted the recount with good grace, which is the manner sense.'],
    'a period / week’s grace; with (good) grace; say grace. Adjective: graceful. Admin: extra time. Manners and liturgy. Not grease.',
    []
  ),
  graceful: L(
    'Graceful means elegant in movement, or polite even in refusal: a graceful athlete; a graceful concession. Elegant is close; clumsy is an opposite. Grace is the noun (separate headword). A graceful concession in debate. Do not call a blunt Ofsted letter graceful.',
    ['A graceful concession in the debate scored more than a sneer.', 'The crane’s movement looked graceful on the time-lapse, which is physical.'],
    'a graceful movement / concession / exit. Noun: grace. Close: elegant. Opposite: clumsy / abrupt. Sport, dance, and diplomacy.',
    ['elegant']
  ),
  gradient: L(
    'A gradient is a slope, or in maths the steepness of a line: a steep gradient; calculate the gradient. Slope is everyday; incline is formal. Show the gradient, do not just say “steep”. Geography: hill gradients. Do not mix with gradual (already in the dictionary).',
    ['Calculate the gradient of the line; do not just describe it as steep.', 'Cyclists complained about the gradient out of the valley, which is geography.'],
    'a steep gradient; the gradient of a line (rise/run). Everyday: slope. Maths and geography. Trap: gradual. Show working.',
    ['slope']
  ),
  grand: L(
    'Grand means impressive in scale or style: a grand plan; a grand staircase. Informal UK: a grand = £1,000. Grandeur is the noun (separate headword); grandiose (already in the dictionary) is impressive in a puffed-up way. The grand strategy collapsed. Do not call a pencil case grand.',
    ['The grand strategy collapsed when the devolved votes were lost.', 'The repair cost two grand, which is the informal money sense.'],
    'a grand plan / scale / staircase. Informal: a grand (£1,000). Noun: grandeur. Critical cousin: grandiose. News, architecture, and chat.',
    []
  ),
  grandeur: L(
    'Grandeur is impressive magnificence, often of buildings or landscape (usually uncountable): faded grandeur; the grandeur of the view. Grand is the adjective (separate headword). Splendour is close. The chapel’s grandeur. Do not use grandeur for a tidy classroom.',
    ['The chapel’s grandeur survived the Victorian restoration, the guide said.', 'Faded grandeur is a review cliché for seaside hotels, which is the travel sense.'],
    'the grandeur of; faded grandeur. Adjective: grand. Close: splendour / magnificence. Uncountable. Architecture and landscape writing.',
    ['splendour']
  ),
  groundwork: L(
    'Groundwork is preparatory work: lay the groundwork; the groundwork for reform. Preparation is the everyday twin; foundation (already in the dictionary) is often more structural. The literature review is the groundwork. Usually uncountable. Do not use it for digging a literal hole unless the context is building.',
    ['The literature review is the groundwork; the experiment comes after.', 'Talks laid the groundwork for the pay deal, which is the politics sense.'],
    'lay / do the groundwork; the groundwork for. Everyday: preparation. Related: foundation. Uncountable. Essays, diplomacy, and projects.',
    ['preparation']
  ),
  guerrilla: L(
    'A guerrilla is a member of a small unofficial armed group; the word also describes surprise unofficial tactics: guerrilla warfare; guerrilla marketing. Soldier is the regular army word. Spelling: guerrilla (two r’s, two l’s); guerilla is a common variant. Handle the conflict sense carefully. Not a synonym of gorilla (the animal).',
    ['The documentary followed a guerrilla campaign in the border hills.', 'Guerrilla marketing stickers appeared on the campus gates, which is the figurative sense.'],
    'guerrilla warfare / campaign; a guerrilla. Figurative: guerrilla marketing / gardening. Trap: gorilla. News and history. Irregular, not regular army.',
    []
  ),
  habitual: L(
    'Habitual means done regularly as a habit: a habitual latecomer; habitual use. Habit is the noun (already in the dictionary). Regular is close; chronic is stronger and often medical. Habitual late submission. Do not call one late bus habitual.',
    ['Habitual late submission lost the cohort the draft-feedback window.', 'Habitual offenders faced a different tariff, which is the legal sense.'],
    'habitual late / use / offender. Noun: habit. Close: regular. Stronger: chronic. Legal and school reports. Repeated, not once.',
    ['regular']
  ),
  hallmark: L(
    'A hallmark is a typical quality, or the official stamp on gold or silver: a hallmark of good research; a silver hallmark. Sign and feature are looser. Anonymous marking as a hallmark of fairness. Do not call a one-off event a hallmark.',
    ['Anonymous marking is a hallmark of the board’s fairness policy.', 'The assay office hallmark was worn but readable, which is the metal sense.'],
    'a hallmark of; bear the hallmark of. Metals: a hallmark. Looser: sign / feature. Policy and antiques. Typical quality, not a logo on a hoodie.',
    ['sign']
  ),
  hang: L(
    'To hang is to fix something from above, or to remain in the air: hang a picture; smoke hung over the pitch; a question hangs over the data. As hang on = wait (informal). Hang the labels at eye level. Past: hung for pictures; hanged is the old legal verb for execution — a sensitive spelling trap. Do not mix with hanger (already in the dictionary).',
    ['Hang the exhibition labels at eye level before the parents’ evening.', 'A question hangs over the sampling frame, which is the figurative sense.'],
    'hang a picture / an exhibition; hang over (a problem). Informal: hang on. Past: hung vs hanged (legal, sensitive). Object: hanger. Art and news.',
    []
  ),
  haphazard: L(
    'Haphazard means not organised; done without a plan: a haphazard approach; haphazard sampling. Random in statistics is a technical method; haphazard is a criticism. Chaotic is stronger. A haphazard frame will fail the viva. Do not call a stratified sample haphazard.',
    ['A haphazard sampling frame will not survive the methods viva.', 'Storage in the prep room looked haphazard, which is still a criticism.'],
    'a haphazard + noun; in a haphazard way. Contrast: random (stats) vs haphazard (unplanned). Opposite tone: systematic. Methods sections.',
    ['random']
  ),
  haste: L(
    'Haste is speed, often too much (usually uncountable): in their haste; more haste, less speed. Hurry is the everyday verb/noun (already in the dictionary). Hasty is the adjective (separate headword). In their haste they released the wrong file. Do not use haste for a well-planned sprint.',
    ['In their haste to publish, the trust released the wrong grade file.', 'More haste, less speed, the invigilator muttered, which is the proverb.'],
    'in someone’s haste to; haste makes waste. Adjective: hasty. Everyday: hurry. Uncountable. Often critical. Admin errors and proverbs.',
    ['hurry']
  ),
  hasty: L(
    'Hasty means done too quickly and often badly: a hasty conclusion; a hasty exit. Quick is neutral; rushed is close. Haste is the noun (separate headword). Do not jump to a hasty conclusion. Hastily is already in the dictionary as the adverb. Do not call a timed paper hasty just because it is timed.',
    ['Do not jump to a hasty conclusion from one anomalous result.', 'A hasty press line made the correction worse, which is the news sense.'],
    'a hasty conclusion / decision / retreat. Noun: haste. Adverb: hastily. Neutral twin: quick. Critical of quality. Essays and statements.',
    ['rushed']
  ),
  haul: L(
    'A haul is a quantity seized or caught, or a hard journey: a drugs haul; a long haul. As a verb: haul a net; haul someone in. Catch is everyday for fish. Officers displayed a haul of fake certificates. Long-haul flights. Do not use haul for a single stolen pen.',
    ['Officers displayed a record haul of fake certificates at the briefing.', 'Marking 400 scripts is a long haul, which is the journey metaphor.'],
    'a record / drugs haul; a long haul. Verb: haul in / up. Everyday (fish): catch. Police bulletins and travel. Quantity or endurance.',
    []
  ),
  haven: L(
    'A haven is a safe or peaceful place, or a place with handy rules: a safe haven; a tax haven. Shelter is close for safety; refuge too. The library became a haven. Mix-up: heaven. Do not call a noisy corridor a haven.',
    ['The library became a haven in the exam season after the hall closed.', 'The inquiry listed overseas tax havens, which is the finance sense.'],
    'a safe haven; a tax haven; a haven for + people. Close: refuge / shelter. Trap: heaven. Features and finance. Safety or advantageous rules.',
    ['refuge']
  ),
  havoc: L(
    'Havoc is widespread damage or confusion (uncountable): wreak havoc; play havoc with. Chaos is a close twin, slightly more everyday. The outage wreaked havoc on logins. Do not use havoc for a missing stapler. Collocation: wreak havoc (not “make havoc” in careful news English).',
    ['The outage wreaked havoc on results-day logins across the trust.', 'Pollen played havoc with the ventilation sensors, which is a common collocation.'],
    'wreak havoc; play havoc with. Close: chaos. Uncountable. Weather, IT, and strikes. Set verbs: wreak / play — not “do havoc”.',
    ['chaos']
  ),
  healing: L(
    'Healing is the process of becoming healthy again, physical or emotional (often uncountable): a healing process; healing time. Heal is the verb (already in the dictionary). Recovery is close. Healing after the scandal. Medical and metaphorical. Do not use it for a patched PDF.',
    ['Healing after the ward scandal will take more than a press line, unions said.', 'The dressing protects the wound during healing, which is the clinical sense.'],
    'a healing process; healing of a wound / divide. Verb: heal. Close: recovery. Uncountable in many uses. Medicine and comment pieces.',
    ['recovery']
  ),
  heartland: L(
    'A heartland is the core region of an industry, party, or culture: the manufacturing heartland; a party’s heartland. Centre is looser; stronghold is close in politics. A swing in the heartland decided the vote. Do not call a single street a heartland.',
    ['A swing in the manufacturing heartland decided the education vote.', 'The sport’s heartland is still the north, which is the culture sense.'],
    'the heartland of; a political / industrial heartland. Close: stronghold / core. Geography and elections. A region, not a building.',
    ['stronghold']
  ),
  heir: L(
    'An heir is the person who will inherit money, property, or a title: heir to the estate; heir apparent. Successor is wider (jobs too). Heir to the estate endowed a bursary. Pronunciation: /eə/ (sounds like air). Mix-up: hair. Feminine heir is still heir in modern legal English; heiress is dated in many style guides.',
    ['The heir to the estate endowed a bursary for care leavers.', 'She is heir apparent to the leadership, which is the political metaphor.'],
    'heir to; heir apparent. Wider: successor. Trap: hair (pronunciation /eə/). Wills, monarchy, and metaphors. Legal register.',
    ['successor']
  ),
  herd: L(
    'A herd is a group of animals of one kind, or people acting as a crowd: a herd of cattle; herd immunity; herd behaviour. Flock is for birds/sheep in many uses. Do not follow the herd on the case study. Heard is the past of hear — a spelling trap. Do not call two cats a herd.',
    ['Do not follow the herd on the case study; the question has a twist.', 'A herd of cattle blocked the B-road, which is the livestock sense.'],
    'a herd of; herd behaviour / immunity. Birds: flock. Trap: heard. Biology, farming, and essays on conformity. Crowd metaphor is often critical.',
    []
  ),
  hilarious: L(
    'Hilarious means extremely funny: a hilarious sketch; it was hilarious. Funny is weaker; hysterical can mean out of control (and is also medical). Fine in reviews; too chatty for a history methods paragraph. The sketch is not a source. Do not use hilarious for a serious mishap unless you mean gallows humour.',
    ['The sketch was hilarious, but it is not a source for the history paper.', 'Candidates found the invigilator’s deadpan hilarious, which is still informal.'],
    'a hilarious + noun; absolutely hilarious. Weaker: funny. Register: reviews and speech, not methods. Extreme amusement.',
    ['funny']
  ),
  hook: L(
    'To hook is to catch with a curved object, or to capture attention: hook a fish; hook the reader. As a noun: a coat hook; a hook in the first line. Catch is wider. Off the hook = no longer in trouble. Hook the reader in sentence one. Mix-up: hoodie (already in the dictionary).',
    ['Hook the reader in the first sentence; do not save the thesis for page three.', 'He is not off the hook until the appeal lands, which is the idiom.'],
    'hook the reader / audience; a hook. Idiom: off the hook. Object: a hook. Writing advice and fishing. Attention, not a hoodie.',
    ['catch']
  ),
  hormone: L(
    'A hormone is a chemical messenger made in the body: a growth hormone; hormone levels. Drug is wider; medicine is not a synonym. The biology paper asked how a hormone travels. Related: hormonal. Do not use hormone as slang for mood in a scientific write-up — name the hormone if you can.',
    ['The biology paper asked how a hormone travels in the blood.', 'Hormone levels were plotted over the month, which is the data sense.'],
    'a hormone; hormone levels / therapy. Adjective: hormonal. Science papers. Specific chemical, not a vague “mood juice”.',
    []
  ),
  humble: L(
    'Humble means not proud, or simple in status: humble origins; a humble apology. Modest is close; arrogant is an opposite. Stay humble in the evaluation. As a verb: the result humbled them. Do not fake humility in a boastful paragraph. Mix-up: humiliate (separate academic word elsewhere).',
    ['Stay humble in the evaluation: admit the sample is small.', 'He spoke of humble origins, which is the status sense in profiles.'],
    'humble origins; a humble apology; in my humble opinion (set, often ironic). Close: modest. Verb: humble. Evaluations and biographies.',
    ['modest']
  ),
  hunt: L(
    'To hunt is to chase animals for food or sport, or to search hard: hunt for a leak; a talent hunt. Search is the plain twin; hunt is more determined. As a noun: a hunt; a witch-hunt (loaded). Editors hunt for the spreadsheet. Hunting as sport is contested in UK news — keep tone factual in exams.',
    ['Editors still hunt for the leaked spreadsheet the trust denies exists.', 'A fox hunt met protesters on the lane, which is the countryside-news sense.'],
    'hunt for / down; a talent hunt; a witch-hunt (loaded). Everyday: search. Noun and verb. Newsrooms and rural politics. Determined search.',
    ['search']
  ),
}
