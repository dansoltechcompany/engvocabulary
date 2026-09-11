const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1O = {
  machinery: L(
    'Machinery is machines as a group, and also the official system that makes something work: the machinery of government. Machine is the countable twin (already in the dictionary). Equipment is wider. Often uncountable. Factories: the plant shut when the machinery failed a safety check.',
    ['The plant shut when the machinery failed a safety check.', 'The machinery of the complaints process is slow, which is the official-system sense.'],
    'Often uncountable. a piece of machinery. Wider: equipment. Countable twin: a machine. Factories / official process. Not “machineries” in exams.',
    ['equipment']
  ),
  magnificent: L(
    'Magnificent means extremely impressive and beautiful. Impressive is a close twin; magnificent is stronger and more visual. Great is everyday. Do not use it for a tiny pay rise. Civic day: the restored town hall looked magnificent.',
    ['The restored town hall looked magnificent on civic day.', 'A magnificent listed hall is still not a reason to skip the fire-safety check.'],
    'magnificent + building / view / performance. Close: impressive. Everyday: great. Heritage / tourism. Not for small improvements.',
    ['impressive']
  ),
  mainland: L(
    'The mainland is the main part of a country, not its islands. Island is the contrast; continent is larger. UK news: ferries to the mainland from the Isle of Wight or the Hebrides. Do not write mainland for the high street of the same town.',
    ['Ferries to the mainland were cancelled after the gale.', 'A mainland hospital may be hours away from an island GP.'],
    'the mainland. Contrast: an island. Travel / NHS access. Not a synonym for “the country” in every sentence.',
    []
  ),
  maintenance: L(
    'Maintenance is the work of keeping something in good repair (often uncountable). Maintain is the verb (already in the dictionary). Repair is for a break that has already happened. Housing: lift maintenance closed two floors.',
    ['Lift maintenance closed two floors of the tower block.', 'Under-floor heating needs annual maintenance, not only a call-out when it fails.'],
    'Often uncountable. Verb: maintain. Contrast: a repair (after a break). Housing / NHS estates. Not “a maintenance” for one job — a maintenance visit.',
    []
  ),
  management: L(
    'Management is the people who run an organisation, and also the skill of running it. Manager is one person (already in the dictionary). Leadership is wider. Often uncountable for the skill; the management can mean the bosses. Pay talks: management offered a one-year deal.',
    ['Management offered a one-year pay deal, not a two-year one.', 'Time management is a study skill; the management is the senior team.'],
    'Often uncountable. the management = the bosses. Person: a manager. Study: time management. Workplace news. Not “managements” for one firm.',
    []
  ),
  mandatory: L(
    'Mandatory means required by a rule or law. Compulsory is a close twin (already familiar in exams); optional is the opposite. Oblige is a related verb. NHS: the safeguarding module is mandatory before you start on the ward.',
    ['The safeguarding module is mandatory before you start on the ward.', 'A mandatory lanyard is not the same as a voluntary charity pin.'],
    'mandatory + training / check / module. Close: compulsory. Opposite: optional. NHS / exams / HSE. Not “mandatorily” in most B1 news.',
    ['compulsory']
  ),
  manoeuvre: L(
    'To manoeuvre (UK spelling) is to move skilfully, or to use a clever plan. Maneuver is US. A manoeuvre is also a noun. Manipulate is stronger and more negative (already in the dictionary). Rotas: the trust had to manoeuvre around weekend rules.',
    ['The trust had to manoeuvre around the weekend rota rules.', 'A three-point turn is a driving manoeuvre; a political manoeuvre is the planning sense.'],
    'UK: manoeuvre. US: maneuver. Noun or verb. Stronger: manipulate. Driving / workplace politics. Not “maneuver” in UK exams.',
    []
  ),
  mansion: L(
    'A mansion is a very large, impressive house. House is everyday; a manor is a historic estate house. Flat is the contrast. Planning: the listed mansion became a care home.',
    ['The listed mansion became a care home, not private flats.', 'Council tax on a mansion still follows the band, not a special “rich” rate in every borough.'],
    'a mansion. Everyday: a house. Historic twin: a manor. Planning / heritage. Countable buildings. Not a synonym for any detached house.',
    []
  ),
  manual: L(
    'A manual is a book of instructions; as an adjective, manual means done by hand: manual handling; manual labour. Handbook is a close twin for the book. Automatic is an opposite for machines. Fire drills: read the alarm manual first.',
    ['Read the fire-alarm manual before the drill, not after.', 'Manual handling training is mandatory; a manual gearbox is the car sense.'],
    'a manual (book). Adjective: manual + labour / handling. Opposite (machines): automatic. HSE / exams. Not “manuel”.',
    ['handbook']
  ),
  manufacture: L(
    'To manufacture is to make goods in large quantities, usually in a factory. Manufacturer and manufacturing are already in the dictionary. Produce is wider; make is everyday. Midlands: the firm still manufactures components.',
    ['The firm still manufactures components in the Midlands, not overseas.', 'To manufacture a claim is the rarer “invent” sense — avoid it unless the news means that.'],
    'manufacture + goods / parts. Person: manufacturer. Industry: manufacturing. Everyday: make. Factory news. Noun: manufacture (uncountable process).',
    ['make']
  ),
  manuscript: L(
    'A manuscript is a handwritten document, or a writer’s text before it is published. Script is for drama; a draft is an early version. Exams and journals: submit the manuscript as a PDF.',
    ['Submit the manuscript as a PDF, not a paper bundle.', 'A medieval manuscript in the archive is not the same as a coursework draft.'],
    'a manuscript. Drama: a script. Early version: a draft. Publishing / archives / A-level. Countable texts.',
    []
  ),
  marathon: L(
    'A marathon is a long race of about 42 km, and informally any very long tiring task: a marking marathon. Race is the everyday twin. Road closures affect ambulances. Do not write marathon for a 5 km fun run.',
    ['Road closures for the marathon delayed ambulances to A&E.', 'A marking marathon after results day is the informal long-task sense.'],
    'a marathon; run a marathon. Informal: a + noun + marathon (marking). Sport / local news. Not every long walk.',
    []
  ),
  marine: L(
    'Marine means connected with the sea: marine wildlife; marine litter. Maritime is a close twin for shipping and law. Naval is for the navy. Coastal councils: marine litter surveys after a storm.',
    ['Marine litter surveys closed the beach after the storm.', 'A marine biologist is not the same as a Royal Marine, which is the forces sense.'],
    'marine + wildlife / litter / engineer. Close: maritime (shipping). Navy: naval. Environment / coastal news. Not “the marine” for the sea (that is the sea / the ocean).',
    []
  ),
  martial: L(
    'Martial means connected with war, the armed forces, or fighting sports: martial law; martial arts. Military is a close twin (also in this set). Marshal is a different word (an official). Leaflets: martial law is not a parking power.',
    ['Martial law is not a council parking power, whatever the leaflet claimed.', 'Martial arts in the leisure centre are a sport, not a police power.'],
    'martial law; martial arts. Close: military. Mix-up: marshal (official). News / sport. Spelling: martial not “marshall”.',
    []
  ),
  mass: L(
    'Mass as a noun is a large amount; as an adjective it means involving many people: mass unemployment; a mass gathering. Massive is already in the dictionary and stresses size. A Mass (capital M) can be a church service — do not mix the senses.',
    ['Mass unemployment followed the plant closure on Teesside.', 'A mass gathering on the square still needs a licence, which is the crowd sense.'],
    'mass + unemployment / gathering / protest. Related: massive (size). Church: Mass. Labour-market / public-order news. Uncountable in physics (mass); countable a mass of + noun.',
    []
  ),
  master: L(
    'To master a skill is to learn it thoroughly. Learn is everyday; a master’s (degree) is a postgraduate course. Master as a noun can mean an expert. Apprenticeships: master safe lifting first.',
    ['Apprentices must master safe lifting before they work unsupervised.', 'A master’s in public health is the degree sense, not the verb.'],
    'master a skill / technique. Everyday: learn. Degree: a master’s. Workplace / college. Not “mastering” as a job title in UK news (that is a head teacher in some old uses).',
    ['learn']
  ),
  mathematical: L(
    'Mathematical means connected with mathematics. Maths is the school subject (already in the dictionary); numeric is narrower. Exam timetables: the mathematical methods paper is separate from English.',
    ['The mathematical methods paper is in the afternoon, not with English.', 'A mathematical error in the spreadsheet is not the same as a policy choice.'],
    'mathematical + methods / model / error. Subject: maths. Exams / research. Not “mathematic” as the usual UK adjective.',
    []
  ),
  meaningful: L(
    'Meaningful means serious, useful, or having a real purpose: meaningful work; a meaningful consultation. Meaning is the noun (already in the dictionary). Token is an opposite in politics (a token meeting). Residents: a meaningful consultation, not a leaflet drop.',
    ['Residents asked for a meaningful consultation, not a leaflet drop.', 'Meaningful feedback names one change; “well done” is not enough.'],
    'meaningful + consultation / work / feedback. Noun: meaning. Opposite in politics: token. Local government / exams. Not “meaningfull”.',
    []
  ),
  means: L(
    'Means is a method (a means of + noun) and also the money someone has: means-tested benefits. Mean and meaning are already in the dictionary. Way is everyday for method. Students: a railcard is a cheap means of travel.',
    ['A railcard is a cheap means of travel for students, not a season ticket.', 'Means-tested free school meals are not the same as universal free meals.'],
    'a means of + noun (singular with a). Money: means-tested. Everyday (method): a way. Benefits / travel. Plural in form; by means of = using.',
    ['way']
  ),
  measurement: L(
    'A measurement is a size or amount you measure, or the act of measuring. Measure is the verb (already in the dictionary). Figure is a close twin for a number. Clinics: blood-pressure measurement first.',
    ['Blood-pressure measurement is first, then the consultation.', 'Take two measurements and record the average, which is the lab sense.'],
    'a measurement; take a measurement. Verb: measure. Close: a figure / a reading. NHS / science exams. Countable readings.',
    []
  ),
  mechanical: L(
    'Mechanical means connected with machines, or done without thought: a mechanical fault; a mechanical reply. Mechanic is the person (already in the dictionary). Automatic is a close twin for machines. Trains: a mechanical fault grounded the last service.',
    ['A mechanical fault grounded the last train north.', 'A mechanical “thanks” in the complaints reply is not an apology.'],
    'a mechanical fault / engineer. Person: a mechanic. Thoughtless: a mechanical reply. Transport news. Not “mechanicle”.',
    []
  ),
  mechanism: L(
    'A mechanism is a system of parts that makes something work, or an official way of doing something: an appeal mechanism. Process is a close twin for the official sense. Machine is more physical. Ten-day windows: no mechanism to appeal late.',
    ['There is no mechanism to appeal after the ten-day window.', 'The lock mechanism jammed, which is the physical-parts sense.'],
    'a mechanism for / to + verb. Close (official): a process. Physical: parts of a machine. Exams / complaints / engineering.',
    ['process']
  ),
  medieval: L(
    'Medieval means connected with the Middle Ages (about 1000–1500). Historic is wider; ancient is earlier (Rome, Egypt). Planning: listed medieval walls block a cycle lane.',
    ['The medieval walls are listed, so the cycle lane cannot cut through.', 'A medieval history module is not the same as a modern British politics paper.'],
    'medieval + walls / history / town. Wider: historic. Earlier: ancient. Heritage / A-level. Spelling: medieval (also mediaeval, rarer now).',
    []
  ),
  memo: L(
    'A memo is a short official note inside an organisation. Email is everyday; a circular is a wider staff notice. Memorandum is the full formal twin. Wards: the memo banned personal phones.',
    ['The memo banned personal phones on the ward from Monday.', 'A memo is not a contract; it can still be used in a disciplinary.'],
    'a memo; send a memo. Formal: a memorandum. Everyday: an email. Workplace / NHS. Countable notes. Short for memorandum.',
    []
  ),
  memoir: L(
    'A memoir is a book about the writer’s own life. Autobiography is a close twin, often covering a whole life; a memoir may cover one period. Diary is more private. A-level: a memoir of the miners’ strike.',
    ['Her memoir of the miners’ strike is on the A-level reading list.', 'A memoir is still not a peer-reviewed history of the strike.'],
    'a memoir. Close: an autobiography. Private: a diary. Literature / history modules. Countable books. Not “memory” (already in the dictionary).',
    ['autobiography']
  ),
  memorable: L(
    'Memorable means worth remembering. Memory is the noun (already in the dictionary); unforgettable is stronger. Forgettable is an opposite. Passwords: memorable does not mean your date of birth.',
    ['The invigilator asked for a memorable password, not your date of birth.', 'A memorable assembly is fine; a memorable data breach is not praise.'],
    'memorable + day / password / performance. Noun: memory. Stronger: unforgettable. Exams / IT. Not “memoryable”.',
    []
  ),
  memorial: L(
    'A memorial is a statue, plaque, or event that honours people who have died. Monument is a close twin (also in this set). Memory is the mental twin. Planning: the war memorial stays on the green.',
    ['The war memorial stays on the green; the bus stop moves.', 'A memorial service is an event, not a listed stone.'],
    'a memorial; a memorial service. Close: a monument. Mental: a memory. Local news / Remembrance. Countable objects or events.',
    []
  ),
  mentor: L(
    'A mentor is an experienced person who advises someone less experienced. Tutor is more academic; a manager is a boss, not always a mentor. Verb: to mentor. Apprenticeships: each apprentice is assigned a mentor.',
    ['Each apprentice is assigned a mentor on the shop floor.', 'A mentor is not the line manager in every scheme, which matters for complaints.'],
    'a mentor; to mentor someone. Academic twin: a tutor. Workplace / college. Countable people. Related: mentorship (often uncountable).',
    []
  ),
  merchant: L(
    'A merchant buys and sells goods, especially in large amounts. Trader is a close twin; a shopkeeper is smaller and everyday. Historic: merchant navy. High street: city merchants backed Sunday trading.',
    ['City merchants backed the Sunday trading trial on the high street.', 'A merchant account for card payments is the banking sense, not a Victorian trader.'],
    'a merchant. Close: a trader. Smaller: a shopkeeper. High street / history. Countable firms or people.',
    ['trader']
  ),
  mercy: L(
    'Mercy is kindness and forgiveness when you could punish (often uncountable). Kindness is everyday; at the mercy of means unable to control something. Courts: the judge showed mercy with a community order.',
    ['The judge showed mercy and gave a community order, not custody.', 'Coastal towns were at the mercy of the tide, which is the idiom.'],
    'Often uncountable. show mercy; at the mercy of. Everyday: kindness. Courts / weather idiom. Not “a mercy” except in it’s a mercy that.',
    ['kindness']
  ),
  mere: L(
    'Mere emphasises how small or unimportant something is: a mere + noun. Only is everyday; merely is the adverb (also in this set). Exams: a mere two marks separated a pass from a resit.',
    ['A mere two marks separated a pass from a resit.', 'A mere leaflet drop is not a statutory consultation.'],
    'a mere + noun / number. Adverb: merely. Everyday: only. Exams / politics. Not used alone as a complement (it was mere — add a noun).',
    ['only']
  ),
  merely: L(
    'Merely means only, and nothing more. Mere is the adjective. Just and only are everyday. Mix-up: nearly. HR: the email was merely a reminder, not a warning.',
    ['The email was merely a reminder, not a formal warning.', 'She was merely the clerk, not the decision-maker, which is the “nothing more” sense.'],
    'merely + noun / verb phrase. Adjective: mere. Everyday: only / just. Mix-up: nearly. Workplace / exams.',
    ['only']
  ),
  metric: L(
    'Metric means using metres, litres, and kilograms. Imperial is the opposite system (miles, pints). Metre is already in the dictionary. Labs: reports must use metric units.',
    ['Lab reports must use metric units, not imperial.', 'A metric tonne is not a UK ton; the exam will specify.'],
    'metric units / system. Opposite: imperial. Related: a metre. Science / road signs (UK still mixes). Not “metrical” for units (that is poetry).',
    []
  ),
  metropolitan: L(
    'Metropolitan means connected with a large city; the Metropolitan Police (the Met) serve Greater London. Urban is a close twin; rural is the opposite. Exam day: Metropolitan line delays are not an excuse after 9.30.',
    ['Metropolitan line delays are not an excuse after 9.30 on exam day.', 'A metropolitan borough has different duties from a county council.'],
    'metropolitan + area / borough / police. Close: urban. Opposite: rural. London: the Met. Local government / TfL. Not a synonym for “fashionable”.',
    ['urban']
  ),
  midst: L(
    'Midst is the middle of an event: in the midst of. Middle is everyday; during is a preposition twin. Do not write midst without in the. Inspections: the trust was in the midst of a strike.',
    ['The trust was in the midst of a strike when the inspection began.', 'In the midst of marking, the grade-boundary email arrived.'],
    'in the midst of + noun / -ing. Everyday: in the middle of. Formal news / exams. Not “midst the” in modern UK (use amid / in the midst of).',
    []
  ),
  migrate: L(
    'To migrate is to move to another region or country to live or work; birds also migrate. Migrant is the person (already in the dictionary). Immigrate / emigrate mark direction. NHS: nurses migrate to trusts with cheaper housing.',
    ['Nurses migrate to NHS trusts that offer cheaper staff housing.', 'Geese migrate in autumn, which is the animal sense in biology papers.'],
    'migrate to / from. Person: a migrant. Direction pair: immigrate / emigrate. NHS staffing / biology. Not “migrant” as the verb.',
    []
  ),
  migration: L(
    'Migration is the movement of people or animals (often uncountable). Migrate is the verb; a migrant is the person. Immigration stresses coming in. Headlines: net migration figures.',
    ['Net migration figures dominated the morning news, not the by-election.', 'Bird migration is a biology topic; net migration is a politics one.'],
    'Often uncountable. net migration. Verb: migrate. Person: a migrant. News / biology. Countable for types (economic migration).',
    []
  ),
  military: L(
    'Military means connected with the army, navy, or air force. The military can mean the armed forces as a group. Militant is already in the dictionary and is more political. Floods: military helicopters used the airfield.',
    ['Military helicopters used the airfield during the flood rescue.', 'Military spending is not the same as a local TA centre’s open day.'],
    'military + aid / spending / helicopters. Group: the military. Mix-up: militant. Defence / emergency news. Not “the militarys”.',
    []
  ),
  millennium: L(
    'A millennium is a thousand years; the Millennium (capital M) often means the year 2000 and its buildings. Century is 100 years (already familiar). Planning: millennium flood defences that were never built.',
    ['The millennium flood defences were never built on this stretch.', 'The Millennium Dome is a landmark name, not a unit of time in the exam sentence.'],
    'a millennium; the Millennium (2000). Contrast: a century. London: Millennium Dome / Bridge. History / planning. Plural: millennia or millenniums.',
    []
  ),
  millionaire: L(
    'A millionaire has a million pounds or more. Million is the number (already in the dictionary). Billionaire is richer. Planning: a millionaire donor cannot skip consultation.',
    ['A millionaire donor cannot skip the planning consultation.', 'A millionaire on paper may still be cash-poor if the wealth is a house.'],
    'a millionaire. Number: a million. Richer: a billionaire. Politics / planning. Countable people. Not “millionair”.',
    []
  ),
  miner: L(
    'A miner works underground taking coal, metal, or stone. Mine is already in the dictionary (the place / the verb). Mining is the industry (also in this set). NHS: former miners at the chest clinic.',
    ['Former miners queued at the chest clinic after the screening letter.', 'A data miner is the computing sense — rare in B1 local news.'],
    'a miner. Place: a mine. Industry: mining. Health / industrial history. Countable workers. Mix-up: minor (small / under 18).',
    []
  ),
  mineral: L(
    'A mineral is a natural substance from the ground; mineral water comes from a spring. Mine / mining are related. Vitamin is a different nutrient. Boil notices: the lab tested mineral levels in tap water.',
    ['The lab tested mineral levels in the tap water after the boil notice.', 'Mineral rights under a farm are not always owned by the farmer.'],
    'a mineral; mineral water / rights. Related: mining. Contrast: a vitamin. Environment / science. Countable substances.',
    []
  ),
  minimal: L(
    'Minimal means very small in amount. Minimum and minimise are already in the dictionary. Small is everyday; negligible is even smaller (C1 twin). Transport: disruption was minimal once replacement buses ran.',
    ['Disruption was minimal once the replacement bus ran from the station.', 'Minimal disruption is not zero disruption — say so in the announcement.'],
    'minimal + disruption / risk / cost. Related: minimum / minimise. Everyday: very small. Travel / NHS. Not “minimally” for the idea in most headlines (that is the adverb).',
    []
  ),
  mining: L(
    'Mining is the industry of taking coal, metal, or stone from the ground (often uncountable). Miner is the worker; a mine is the place. Data mining is computing. Pits: mining jobs went when the last pit closed.',
    ['Mining jobs went when the last pit closed, not when the retail park opened.', 'Opencast mining is not underground mining, which matters in planning rows.'],
    'Often uncountable. Person: a miner. Place: a mine. Computing: data mining. Industrial / planning news.',
    []
  ),
  miracle: L(
    'A miracle is an extraordinary unexpected good event; it is a miracle that. Luck is everyday; a wonder is a close twin. Do not write miracle for ordinary good news. Coastal path: it was a miracle it reopened before the bank holiday.',
    ['It was a miracle that the coastal path reopened before the bank holiday.', 'A medical miracle in a headline is not a clinical term on the ward.'],
    'a miracle; it is a miracle that. Everyday: luck. News / informal relief. Countable events. Adjective: miraculous (a step up).',
    []
  ),
  misery: L(
    'Misery is great unhappiness or suffering (often uncountable). Miserable is the adjective (already in the dictionary). Unhappiness is everyday. Housing: damp flats caused misery all winter.',
    ['Damp flats caused misery for tenants all winter.', 'Put someone out of their misery can mean end uncertainty — informal, not for exams about euthanasia.'],
    'Often uncountable. Adjective: miserable. Everyday: unhappiness. Housing / NHS waiting. A misery can mean an unhappy person (informal).',
    []
  ),
  misfortune: L(
    'Misfortune is bad luck, or an unlucky event. Fortune is the opposite root; accident is more specific. Exam boards: misfortune on the day is not automatic extra time — you apply for special consideration.',
    ['His misfortune on the day of the exam is not automatic extra time.', 'A misfortune is not the same as malpractice; only one is a candidate’s fault.'],
    'misfortune; a misfortune. Everyday: bad luck. Exams: special consideration. Countable for one event. Not “misfortunate” (use unfortunate).',
    ['bad luck']
  ),
  mislead: L(
    'To mislead is to make someone believe something that is not true. Misleading is the adjective (already in the dictionary). Lie is stronger and more deliberate. NHS boards: do not mislead patients about waiting times.',
    ['Do not mislead patients about waiting times on the board.', 'A misleading graph can mislead the committee even if nobody intended it.'],
    'mislead someone (about). Adjective: misleading. Stronger: lie. Advertising / NHS / exams. Past: misled (not “misleaded”).',
    []
  ),
  missile: L(
    'A missile is a weapon fired through the air, or an object thrown in a crowd. Weapon is wider. Mix-up: missive (a letter, rare). Public order: police seized missiles after a pitch invasion.',
    ['Police seized missiles after the pitch invasion, not only flares.', 'A missile test in foreign news is the military sense, not a thrown bottle.'],
    'a missile; throw missiles. Wider: a weapon. Football / defence news. Countable objects. Mix-up: missive.',
    []
  ),
  mission: L(
    'A mission is an important official task, or an organisation’s stated purpose. Task is everyday; a vision is more about the future. NHS: the trust’s mission is safe care.',
    ['The trust’s mission is safe care, not a shorter ward round for its own sake.', 'A diplomatic mission is a posting; a mission statement is a paragraph on the website.'],
    'a mission; a mission statement. Everyday: a task. Workplace / charity / defence. Countable tasks. on a mission to + verb.',
    ['task']
  ),
  misunderstand: L(
    'To misunderstand is to fail to understand correctly. Understand is the base (already in the dictionary); a misunderstanding is the noun. Mix-up: misinterpret (already in the dictionary, often of meaning). Grade boundaries: do not misunderstand a 4.',
    ['Do not misunderstand the grade boundaries: 4 is a standard pass.', 'Staff misunderstood the memo and closed the desk at noon.'],
    'misunderstand + noun / clause. Noun: a misunderstanding. Close: misinterpret. Exams / workplace. Past: misunderstood.',
    []
  ),
  mobility: L(
    'Mobility is the ability to move, or the chance to change job or class: social mobility; a mobility scooter (often uncountable). Mobile is already in the dictionary. Access is a close twin for buildings. Clinics: a scooter still needs a dropped kerb.',
    ['A mobility scooter still needs a dropped kerb at the clinic.', 'Social mobility reports track who reaches university, which is the class sense.'],
    'Often uncountable. social / staff mobility; a mobility aid. Related: mobile. NHS / education. Not “a mobility” for one journey.',
    []
  ),
  mode: L(
    'A mode is a way of doing something: a mode of transport; exam mode. Method and way are close twins. Mood is a mix-up (already in the dictionary). Campus: the default mode of transport is the bus.',
    ['The default mode of transport to campus is the bus, not a taxi.', 'Switch the calculator to exam mode; a phone is still banned.'],
    'a mode of + noun. Close: a method / a way. Mix-up: mood. Travel / IT / exams. Countable ways of operating.',
    ['method']
  ),
  moderate: L(
    'Moderate (adjective, /ˈmɒdərət/) means average in amount, not extreme. Mild is weaker; extreme is the opposite. The verb moderate (/ˈmɒdəreɪt/) means to chair a debate or make something less strong. Care plans: moderate exercise, not a marathon.',
    ['Moderate exercise is in the care plan; a marathon is not.', 'A moderate Labour MP is the politics sense, not a gym instruction.'],
    'moderate + exercise / rainfall / views. Opposite: extreme. Verb: moderate a debate (different stress). NHS / politics. Noun: a moderate (a person).',
    []
  ),
  modest: L(
    'Modest means not large, or not wanting to boast. Small is everyday; humble is a close twin for character. Mix-up: moderate (amount, not pride). Pay: a modest rise still lagged inflation.',
    ['A modest pay rise still lagged inflation on the ward.', 'A modest candidate still needs a strong personal statement, which is the character sense.'],
    'a modest + rise / home / proposal. Character: not boastful. Everyday: small. Mix-up: moderate. Pay / housing. Not “modist”.',
    ['small']
  ),
  monarchy: L(
    'A monarchy is a system with a king or queen; the monarchy can mean the royal family as an institution. Monarch is the person. Republic is a contrast. News: the cost of the monarchy, not the bank holiday.',
    ['The debate was about the cost of the monarchy, not the bank holiday.', 'A constitutional monarchy is not the same as an absolute one in the textbook.'],
    'the monarchy; a constitutional monarchy. Person: a monarch. Contrast: a republic. UK politics / citizenship. Often with the.',
    []
  ),
  monument: L(
    'A monument is a statue or building that honours a person or event. Memorial is a close twin (also in this set). Listed status blocks tram tracks. Do not write monument for every old building — that may just be listed.',
    ['The listed monument cannot be moved for the tram tracks.', 'A monument to the miners is a memorial sense; a prehistoric monument is archaeology.'],
    'a monument to + noun. Close: a memorial. Heritage / planning. Countable structures. Adjective: monumental (huge — a step up).',
    []
  ),
  moral: L(
    'Moral means connected with right and wrong. Morale (already in the dictionary) is team spirit — a high-frequency mix-up. Ethical is a close twin. Safeguarding: a moral duty as well as a policy one.',
    ['There is a moral duty to report safeguarding concerns, not only a policy one.', 'Morale on the ward is mood; a moral duty is right and wrong.'],
    'a moral duty / issue / panic. Mix-up: morale (spirit). Close: ethical. Noun: morals (plural). Safeguarding / essays.',
    ['ethical']
  ),
  morality: L(
    'Morality is beliefs about right and wrong (often uncountable). Moral is the adjective. Ethics is a close twin, often more professional. Hiring: public morality arguments do not replace the Equality Act.',
    ['Public morality arguments do not replace the Equality Act in hiring.', 'A module on medical morality is not the same as the GMC code, but they overlap.'],
    'Often uncountable. Adjective: moral. Close: ethics. Law / RS / HR. Countable for systems (a morality) — rarer in B1 news.',
    ['ethics']
  ),
  motion: L(
    'Motion is movement, and also a formal proposal that a meeting votes on: pass a motion. Movement is already in the dictionary. Move is the everyday verb. Unions: passed a motion to reject the rota.',
    ['The union passed a motion to reject the weekend rota.', 'The patient was advised to keep the joint in motion, which is the physical sense.'],
    'a motion; pass / table a motion. Physical: in motion. Related: movement. Meetings / NHS physio. Countable proposals.',
    []
  ),
  motive: L(
    'A motive is a reason for doing something, especially hidden or criminal. Motivation is already in the dictionary and is more about drive to succeed. Reason is everyday. Police: no clear motive in the assault.',
    ['Police said there was no clear motive in the high-street assault.', 'Motivation to revise is not a motive for a crime in the exam sentence.'],
    'a motive for + noun. Everyday: a reason. Mix-up: motivation. Crime / news. Countable reasons. Adjective: motivated (already familiar).',
    ['reason']
  ),
  mould: L(
    'Mould (UK spelling) is fungus in damp places, and also a hollow shape for making things. Mold is US. Damp is related. Housing: tenants photograph mould for the council complaint.',
    ['Tenants photographed the mould behind the sofa for the council complaint.', 'A jelly mould is the kitchen sense; black mould is the housing one.'],
    'UK: mould. US: mold. Housing / NHS (respiratory). Uncountable fungus; a mould for shapes. Verb: mould something (shape).',
    []
  ),
  mount: L(
    'To mount is to organise and begin a campaign, attack, or exhibition, or to go up. Launch is a close twin for campaigns. Mountain is already in the dictionary. Residents: mount a campaign against night flights.',
    ['Residents will mount a campaign against the night flights.', 'Costs mounted after the delay, which is the “increase” sense.'],
    'mount a campaign / challenge / exhibition. Close: launch. Also: costs mount. Planning / sport (mount a horse). Not a mountain.',
    ['launch']
  ),
  moving: L(
    'Moving as an adjective means causing strong emotion, or in the process of changing home: moving house. Move and movement are already in the dictionary. Emotional is a close twin. Memorials: the service was moving.',
    ['The memorial service was moving, but it was not a political rally.', 'Moving house in term time still needs the school admissions form.'],
    'a moving + speech / service. Homes: moving house. Verb: move. Contrast: still. Local news / housing. Not the film sense movie (already in the dictionary).',
    []
  ),
  multiple: L(
    'Multiple means more than one: multiple injuries; multiple-choice. Many is everyday; several is a close twin. Multiply is the verb (also in this set). Exams: multiple-choice still needs working in the booklet.',
    ['Multiple-choice questions still need working shown in the booklet.', 'Multiple occupancy of a house can need a licence, which is the housing sense.'],
    'multiple + injuries / occupancy / choice. Everyday: many. Verb: multiply. Exams / NHS / housing. Hyphen: multiple-choice.',
    ['many']
  ),
  multiply: L(
    'To multiply is to do multiplication, or to increase a lot. Multiple is the adjective. Increase is everyday. Bin strikes: complaints multiplied in week three.',
    ['Complaints multiplied after the bin strike entered a third week.', 'Multiply the rate by the hours, which is the maths-paper sense.'],
    'multiply by (maths); problems multiply (increase). Adjective: multiple. Everyday: increase. News / exams. Not “multiplicate”.',
    ['increase']
  ),
  municipal: L(
    'Municipal means connected with the town or city council and its services. Local is everyday; civic is a close twin. National is the contrast. Pools: municipal concession prices for Universal Credit.',
    ['Municipal pools kept concession prices for Universal Credit claimants.', 'Municipal waste is the council bin round, not a private skip.'],
    'municipal + pool / waste / election. Everyday: local (council). Contrast: national. Local government. Not “municiple”.',
    ['civic']
  ),
  murder: L(
    'Murder is the crime of killing someone deliberately. Kill is wider; manslaughter is less deliberate in law. Verb: to murder. Courts: murder goes to the Crown Court.',
    ['Murder cases go to the Crown Court, not the magistrates’ court.', 'A murder inquiry is not opened for every sudden death on the ward.'],
    'a murder; commit murder. Wider: kill. Legal contrast: manslaughter. Court news. Countable crimes. Adjective: murderous (stronger, rarer at B1).',
    []
  ),
  mutual: L(
    'Mutual means felt or done by each towards the other: mutual agreement; mutual respect. A mutual is also a member-owned firm (a building society). Shared is a close twin. HR: the split was by mutual agreement.',
    ['The split was by mutual agreement, not a dismissal.', 'A mutual insurer is owned by members, which is the finance sense.'],
    'mutual + agreement / respect / friend. Close: shared. Finance: a mutual. Workplace / banking. Not “mutually exclusive” in every B1 sentence (that is a logic phrase).',
    ['shared']
  ),
  mysterious: L(
    'Mysterious means strange and not explained. Mystery is the noun (if present) / strange is everyday. Unexplained is a close twin. Schools: a mysterious odour closed the science block.',
    ['A mysterious odour closed the science block until the gas team arrived.', 'A mysterious benefactor in a novel is not a named donor in the accounts.'],
    'a mysterious + odour / disappearance / donor. Everyday: strange. News / fiction. Adverb: mysteriously. Not “mysteryous”.',
    ['strange']
  ),
  myth: L(
    'A myth is a traditional story, or a false idea many people believe. Legend is already in the dictionary (old story / famous person). Fact is the opposite of the false-idea sense. Exams: it is a myth that you cannot resit a 4.',
    ['It is a myth that you cannot resit if you already hold a 4.', 'A creation myth in RS is the traditional-story sense, not a lie.'],
    'a myth; it is a myth that. Close (story): a legend. Opposite (false idea): a fact. Exams / RS. Countable stories or claims.',
    []
  ),
  necessarily: L(
    'Necessarily means in a way that must be true; not necessarily means “not automatically”. Necessary and necessity are already in the dictionary. Automatically is a close twin of the idiom. Results day: a predicted grade is not necessarily the real one.',
    ['A high predicted grade is not necessarily the one on results day.', 'A degree does not necessarily lead to that job, which is the careers-advice sense.'],
    'not necessarily. Related: necessary. Close idiom: not automatically. Exams / careers. Avoid “necessarilly”.',
    []
  ),
  neighbourhood: L(
    'A neighbourhood is a district where people live, and the people there (UK spelling). Neighbour is already in the dictionary. Area is everyday; community is wider. US: neighborhood. Forums: opposed the late-night licence.',
    ['The neighbourhood forum opposed the late-night licence.', 'Neighbourhood policing is local; it is not the same as a national crime unit.'],
    'UK: neighbourhood. US: neighborhood. Everyday: an area. Related: a neighbour. Local news / policing. Countable districts.',
    ['area']
  ),
  nerve: L(
    'Nerve is courage in a difficult moment; a nerve is also a body fibre; nerves (plural) means anxiety. Nervous is already in the dictionary. Courage is the everyday twin for the bravery sense. Speaking tests: she lost her nerve.',
    ['She lost her nerve in the speaking test and went silent.', 'A trapped nerve is the medical sense; get on someone’s nerves is informal irritation.'],
    'lose / hold your nerve. Medical: a nerve. Anxiety: nerves. Informal: get on someone’s nerves. Exams / NHS. Uncountable courage; countable fibres.',
    ['courage']
  ),
  nomination: L(
    'A nomination is the act of officially naming someone as a candidate. Nominate is already in the dictionary. Application is for jobs you apply for yourself. Governors: nomination closes on Friday.',
    ['Her nomination for staff governor closes on Friday, not Monday.', 'An Oscar nomination is the prizes sense; a nomination paper is elections.'],
    'a nomination for + post / prize. Verb: nominate. Jobs you seek: an application. School governors / unions / awards. Countable acts.',
    []
  ),
  nursing: L(
    'Nursing is the job or study of caring for people who are ill (often uncountable). Nurse is the person (already in the dictionary). Care is wider. Staffing: nursing vacancies closed the night ward.',
    ['Nursing vacancies, not admin ones, closed the night ward.', 'A nursing degree is not a healthcare-assistant course, which matters on UCAS.'],
    'Often uncountable. Person: a nurse. Study: a nursing degree. NHS / UCAS. a nursing home is a place (countable homes).',
    []
  ),
  oblige: L(
    'To oblige is to force someone by a rule or duty: be obliged to. Obligation is already in the dictionary. Force is everyday; require is a close twin. Gender-pay: firms are obliged to publish figures.',
    ['Firms are obliged to publish gender-pay figures, not only a slogan.', 'Happy to oblige is the polite “willing to help” sense — lighter than the legal one.'],
    'be obliged to + infinitive. Noun: obligation. Close: require. Law / workplace. Polite: happy to oblige. Not “obligate” as the usual UK verb (US-leaning).',
    ['require']
  ),
  obsess: L(
    'To obsess is to fill someone’s mind so they cannot stop thinking: obsess about / over. Obsession is already in the dictionary. Worry is everyday. Mocks: do not obsess over one paper.',
    ['Do not obsess over one mock; the average still stands.', 'The press obsessed about the leak, which is the news-cycle sense.'],
    'obsess about / over. Noun: an obsession. Everyday: worry. Exams / media. Object: something obsesses someone (less common in B1).',
    []
  ),
  obviously: L(
    'Obviously means in a way that is easy to see. Obvious is already in the dictionary. Clearly is a close twin. Of course is more spoken. Invigilators: the paper was obviously a resit.',
    ['The paper was obviously a resit: the candidate number was from last series.', 'Obviously in a speech can sound rude if you mean “you should already know”.'],
    'obviously + clause. Adjective: obvious. Close: clearly. Spoken twin: of course. Exams / news. Tone: can sound impatient.',
    ['clearly']
  ),
  occasional: L(
    'Occasional means happening sometimes, not regularly. Occasion is already in the dictionary. Rare is less often; regular is the opposite. Contracts: occasional overtime is not a standing weekend rota.',
    ['Occasional overtime is in the contract; a standing weekend rota is not.', 'An occasional table is furniture — a different sense from occasional rain.'],
    'occasional + rain / overtime / visitor. Adverb: occasionally. Opposite: regular. Workplace / weather. Not “occational”.',
    []
  ),
  occasionally: L(
    'Occasionally means sometimes, not often. Occasional is the adjective. Sometimes is everyday; rarely is less often. Clinics: late on Thursdays, and occasionally on Saturdays.',
    ['The clinic is open late on Thursdays, and occasionally on Saturdays.', 'Save work occasionally is not a backup policy; use the auto-save drive.'],
    'occasionally + verb. Adjective: occasional. Everyday: sometimes. NHS hours / IT. Mid-position: staff occasionally stay late.',
    ['sometimes']
  ),
  offender: L(
    'An offender is a person who has committed a crime. Offend is already in the dictionary; offence is the crime. Criminal is a close twin, often stronger. Youth offending teams, not the Jobcentre.',
    ['Youth offenders report to the youth offending team, not the Jobcentre.', 'A first-time offender may get a caution, not automatically a prison term.'],
    'an offender; a first-time / persistent offender. Verb: offend. Crime: an offence. Courts / youth justice. Countable people.',
    ['criminal']
  ),
  offensive: L(
    'Offensive means rude and likely to upset people; in sport it can mean attacking play. Offence is the noun (already in the dictionary). Rude is everyday; insulting is a close twin. Football: the chant was offensive and brought a ban.',
    ['The chant was offensive and the club issued a ban, not a warning.', 'An offensive in a war report is an attack, which is the military sense.'],
    'offensive + language / chant. Noun: an offence. Everyday: rude. Sport / military: an offensive (attack). FA / workplace. Opposite: inoffensive.',
    ['rude']
  ),
  offline: L(
    'Offline means not connected to the internet, or done in person. Online is already in the dictionary. Paper is a close twin for forms. Civic centre: submit the form offline if the portal is down.',
    ['Submit the form offline at the civic centre if the portal is down.', 'Take the laptop offline before the exam, which is the device sense.'],
    'offline + form / meeting / device. Opposite: online. Council / exams. Hyphen optional (offline common). Adverb: work offline.',
    []
  ),
  opening: L(
    'An opening is a hole or gap, a job vacancy, or the start of an event. Open is already in the dictionary. Vacancy is the jobs twin; a gap is physical. Apprenticeships: one opening, not a rolling intake.',
    ['There is one opening on the apprenticeship, not a rolling intake.', 'The official opening of the wing is on Friday, which is the ceremony sense.'],
    'an opening (job / ceremony / gap). Jobs twin: a vacancy. Verb: open. College / civic events. Countable slots or ceremonies.',
    ['vacancy']
  ),
  organisation: L(
    'An organisation is a company, charity, or official group; also the way things are planned (UK spelling). Organise is already in the dictionary. Company is narrower; group is everyday. Accounts: the organisation published late.',
    ['The organisation published its accounts a month late.', 'Poor organisation of the hall, not the questions, caused the delay.'],
    'UK: organisation. US: organization. Verb: organise. Everyday: a group. Charity / company news. Countable groups; uncountable for planning skill.',
    ['group']
  ),
  outlet: L(
    'An outlet is a shop that sells a firm’s goods, often cheaper, or a way of expressing a feeling: an outlet for stress. Shop is everyday; a branch is a high-street twin. Returns: the factory outlet is not the same as the branch.',
    ['The factory outlet is not the same as the high-street branch for returns.', 'Sport was an outlet for stress in the sixth form, which is the feeling sense.'],
    'a factory outlet; an outlet for + noun. Everyday: a shop. High street: a branch. Retail / wellbeing. Countable shops or channels. US also: a power outlet (UK: a socket).',
    ['shop']
  ),
  overnight: L(
    'Overnight means during the night, or suddenly in a very short time. Over night as two words is rare. Suddenly is the everyday twin of the metaphor. Petitions: a decision cannot change overnight.',
    ['The decision cannot change overnight after one petition.', 'Leave the sample overnight in the fridge, which is the literal lab sense.'],
    'stay overnight; change overnight. Everyday (sudden): suddenly. Labs / politics. Adjective: an overnight stay. One word.',
    []
  ),
  ownership: L(
    'Ownership is the fact of owning something, or taking responsibility for a task (often uncountable). Owner is already in the dictionary. Possession is a close twin. Leaseholders: ownership of the freehold stayed with the council.',
    ['Ownership of the freehold stayed with the council, not the leaseholders.', 'Take ownership of the mistake in the minutes, which is the responsibility sense.'],
    'Often uncountable. public / private ownership. Person: an owner. Housing / workplace. take ownership of = accept responsibility.',
    []
  ),
  oxygen: L(
    'Oxygen is the gas we breathe (uncountable). Air is the mixture; oxygen is one part. O2 is informal. Wards: portable oxygen by the bed, not in the day room.',
    ['Portable oxygen is stored by the bed, not in the day room.', 'Oxygen masks dropped in the safety film; that is aviation, not an A&E protocol.'],
    'Uncountable. related: air. NHS / science. on oxygen = receiving oxygen therapy. Not “oxygene”. Formula O₂ in science papers.',
    []
  ),
}
