const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2S = {
  magnetic: L(
    'Magnetic means able to attract iron, or having a strong pull on people: a magnetic stripe; a magnetic performance. Magnet is the object (already in the dictionary). A magnetic stripe is not a paper pass. Mix-up: magic is tricks (already in the dictionary); magnificent is splendid (already elsewhere). Do not write magnetic for “magical”.',
    ['A magnetic stripe on the ID badge is not the same as a paper pass.', 'A magnetic speaker drew the hall, which is the attractive-quality sense.'],
    'a magnetic field / stripe / personality. Object: magnet. Trap: magic / magnificent. Physics, ID, and news. Attracts iron or people — not a trick.',
    []
  ),
  maker: L(
    'A maker is a person or company that produces something: the maker’s label; a policy maker. Manufacturer is the factory twin (already elsewhere); creator is wider. Name the maker before you log the fault. Mix-up: make is the verb (already in the dictionary); make-up is cosmetics (already elsewhere). Do not write maker for “make-up”.',
    ['Name the maker on the equipment label before you log the fault.', 'A film-maker featured in the media case study, which is the producer sense.'],
    'the maker of; a policy / film / car maker. Factory twin: manufacturer. Trap: make-up. DT, news, and complaints. Who produces it, not cosmetics.',
    ['manufacturer']
  ),
  malaria: L(
    'Malaria is a serious disease spread by mosquito bites, especially in some tropical regions: malaria risk; a malaria net. Fever is a symptom, not the disease. Map malaria against standing water. Mix-up: malaise is vague unease (already elsewhere); mall is a shopping centre (already in the dictionary). Do not call every tropical fever malaria without a named pathogen or source.',
    ['The geography paper maps malaria risk against standing water, not a slogan.', 'A malaria net featured in the development case study, which is the prevention sense.'],
    'malaria risk / net / vaccine. Vector: mosquito. Trap: malaise / mall. Geography and health. A named disease, not “feeling off”.',
    []
  ),
  mammal: L(
    'A mammal is a warm-blooded animal that feeds its young with milk: a marine mammal; mammal classification. Animal is wider; vertebrate includes birds and fish. A whale is a mammal, not a fish. Mix-up: human is one mammal; mammal vs reptile on the key. Do not call a penguin a mammal.',
    ['A whale is a mammal in the classification key, not a fish.', 'Bats are mammals, which is the milk-and-hair sense, not “flying mice” as a joke.'],
    'a mammal; marine / land mammals. Wider: animal. Trap: calling whales fish. Biology and geography. Milk-feeders, not a fish or bird.',
    []
  ),
  manifest: L(
    'To manifest is to show a quality clearly, or to appear: stress can manifest as; manifest itself. Show is everyday; display is cooler. Stress can manifest as missed practicals. Adjective: obvious. Mix-up: manifesto is a policy document (already elsewhere); manipulate is to control unfairly (already in the dictionary). Do not write manifest for “write a manifesto”.',
    ['Stress can manifest as missed practicals, the counsellor note said.', 'The problem manifested after the first freeze, which is the appear sense.'],
    'manifest as / itself; a manifest error (adjective). Noun document: manifesto. Trap: manipulate. Health, law, and news. Show or appear, not a party leaflet.',
    ['show']
  ),
  mankind: L(
    'Mankind means human beings as a group: the future of mankind; mankind’s impact. Humankind is the gender-neutral twin many markers prefer; humanity is close (already elsewhere). Flag gendered wording if you evaluate. Mix-up: mankind vs a kind man; mainland is a land mass (already elsewhere). Do not use mankind for one nation’s men only.',
    ['The source uses mankind for the species; flag the gendered wording if you evaluate.', 'Mankind’s carbon footprint featured in the climate unit, which is the species sense.'],
    'mankind; humankind (neutral twin). Close: humanity. Trap: mainland / a kind man. RS, geography, and source evaluation. The species, not one country.',
    ['humankind']
  ),
  marker: L(
    'A marker is a thick pen, a sign of a level, or an exam examiner: a board marker; a marker of status. Pen is everyday; examiner is the board twin. A board marker is not a fountain pen. Mix-up: mark is a score or spot (already in the dictionary); market is buying and selling (already in the dictionary). Do not write marker for “the mark scheme” as a whole.',
    ['A board marker is not a fountain pen on the stationery list.', 'A senior marker re-marked the script, which is the examiner sense.'],
    'a board / whiteboard marker; a marker of; a senior marker. Trap: mark / market. Stationery, sociology, and exams. Pen, sign, or examiner — specify.',
    []
  ),
  marvel: L(
    'To marvel is to feel great surprise or admiration (usually marvel at): marvel at the data; a marvel (noun). Admire is cooler; wonder is closer to curiosity. Do not only marvel at the graph. Mix-up: marble is stone; marvellous means wonderful. Do not write marvel for “marble sculpture”.',
    ['Do not only marvel at the graph; label the axes.', 'The Victorian ironwork was a marvel, which is the noun sense.'],
    'marvel at; a marvel of + noun. Cooler: admire. Trap: marble / marvellous. Evaluations and history. Be amazed, not a stone.',
    ['wonder']
  ),
  masculine: L(
    'Masculine means traditionally linked with men, or a grammar gender: masculine endings; a masculine stereotype. Male is biological/legal (already in the dictionary); manly is dated praise. Masculine endings are grammar, not a comment on the speaker. Mix-up: masculine vs feminist as politics; mass is a large amount (already elsewhere). Do not call every deep voice masculine as a value judgement in an essay.',
    ['Masculine endings in French are not a comment on the speaker.', 'A masculine stereotype featured in the media unit, which is the gender-role sense.'],
    'masculine noun / ending / stereotype. Biology/legal: male. Trap: mass. MFL, media, and sociology. Grammar gender or a stereotype, not “better”.',
    []
  ),
  massacre: L(
    'A massacre is the violent killing of many people at once: date the massacre; a massacre of civilians. Killing is wider; genocide is the destruction of a people. Date it in the source, not the later march. Verb: massacre. Mix-up: mass is a crowd or church service (already elsewhere); massage is rubbing muscles. Do not write massacre for a sports defeat except as informal metaphor, and not in a history answer.',
    ['Date the massacre in the source, not a later commemoration march.', 'The editorial called the cuts a massacre of services, which is the metaphor sense — still justify it.'],
    'a massacre of; date / site of the massacre. Wider: killing. Trap: mass / massage. History and news. Mass killing, not a spa treatment.',
    []
  ),
  masterpiece: L(
    'A masterpiece is an outstanding work of art, literature, or skill: a literary masterpiece; the painter’s masterpiece. Classic is a work of lasting value; masterpiece stresses excellence. Justify the judgement with technique. Mix-up: master is a skilled person (already elsewhere); piece is any part. Do not call a first draft a masterpiece.',
    ['Call it a masterpiece only after you justify the judgement with technique.', 'The restoration of the masterpiece featured in the art-history source, which is the object sense.'],
    'a masterpiece of; a literary / musical masterpiece. Lasting-value twin: classic. Trap: master / piece. Art, English, and music. Outstanding work, not any “master’s piece”.',
    []
  ),
  matrix: L(
    'A matrix is a grid of numbers or cells, or the environment something develops in: a risk matrix; a data matrix. Grid is everyday; table is looser. Complete the risk matrix before the trip. Mix-up: mattress is a bed; metre is a unit (already in the dictionary). Do not write matrix for a simple two-row table without cells.',
    ['Complete the risk matrix before the trip, H&S said.', 'A 2×2 matrix featured in the maths paper, which is the array sense.'],
    'a risk / data matrix; matrix of + cells. Everyday: grid. Trap: mattress / metre. H&S, maths, and sociology. A grid or setting, not a bed.',
    ['grid']
  ),
  maximise: L(
    'To maximise is to make something as large or as effective as possible (British -ise): maximise the sample; maximise attendance. Increase is weaker; optimise stresses best mix. Maximise the sample, not the adjective. Opposite: minimise (already elsewhere). Mix-up: maximum is the noun/adjective (already in the dictionary). Do not write maximize in a UK script unless the paper uses US spelling.',
    ['Maximise the sample, not the adjective in the abstract.', 'The club wanted to maximise attendance, which is the make-effective sense.'],
    'maximise + noun; maximisation. Opposite: minimise. Noun/adj: maximum. UK -ise. Methods, PE, and business. Make as large/effective as possible.',
    []
  ),
  meantime: L(
    'Meantime is the period between two events, almost always in the meantime: in the meantime, lock the cupboard. Meanwhile is the adverb twin (already in the dictionary). Use it for a holding action. Mix-up: meanwhile vs meantime — meanwhile often starts a sentence about something else happening. Do not write “in the meanwhile” in formal work.',
    ['In the meantime, lock the cupboard; the key audit is Friday.', 'The bus was late; in the meantime they revised the quote, which is the waiting-period sense.'],
    'in the meantime. Adverb twin: meanwhile. Trap: “in the meanwhile”. Notices, methods, and news. The gap between events, not a mood.',
    ['meanwhile']
  ),
  mediate: L(
    'To mediate is to help two sides reach an agreement: mediate a meeting; mediate between. Negotiate is the sides talking; arbitrate is a binding decision. A trained adult must mediate, not a prefect. Noun: mediation (already elsewhere). Mix-up: meditate is quiet focus (later in this set); immediate means at once (already elsewhere). Do not write mediate for “think quietly”.',
    ['A trained adult must mediate the exclusion meeting, not a prefect.', 'The union asked a third party to mediate, which is the go-between sense.'],
    'mediate between / a dispute; mediation. Contrast: negotiate / arbitrate. Trap: meditate / immediate. Pastoral, law, and news. Help both sides, not sit in silence.',
    []
  ),
  meditation: L(
    'Meditation is training attention, often in silence, for calm or focus: a meditation club; mindfulness meditation. Prayer is addressed to a deity; reflection is thinking. A club is not a counselling referral. Verb: meditate (later in this set). Mix-up: mediation is peace talks (already elsewhere); medication is medicine (already in the dictionary). Do not write meditation for a tablet.',
    ['A meditation club is not a substitute for a counselling referral.', 'The RS paper asked how meditation differs from petitionary prayer, which is the practice sense.'],
    'meditation; mindfulness meditation. Verb: meditate. Trap: mediation / medication. RS, PSHE, and health. Quiet focus, not a drug or a legal talk.',
    []
  ),
  melody: L(
    'A melody is a memorable sequence of notes; a tune: hum the melody; a folk melody. Tune is everyday; harmony is how notes sound together; rhythm is timing. Name the interval after you hum it. Mix-up: malady is an illness; comedy is funny drama. Do not call a drum pattern a melody.',
    ['Hum the melody, then name the interval on the score.', 'A folk melody featured in the area of study, which is the tune sense.'],
    'a melody; melodic (adjective). Everyday: tune. Contrast: harmony / rhythm. Trap: malady. Music exams. The tune, not the beat or an illness.',
    ['tune']
  ),
  memorise: L(
    'To memorise is to learn something so you can recall it exactly (British -ise): memorise a formula; memorise a quote. Learn is wider; revise is exam preparation. Show the working; the mark is not for the chant. Noun: memory (already in the dictionary). Mix-up: memorial is a monument (already elsewhere); memorable means worth remembering (already elsewhere). Do not write memorize in UK exams unless the paper does.',
    ['Memorise the formula, then show the working; the mark is not for the chant.', 'She had to memorise the cue lines, which is the script sense.'],
    'memorise + noun; memorisation. Wider: learn. Trap: memorial / memorable. UK -ise. Sciences, languages, and drama. Learn by heart, not a war monument.',
    []
  ),
  menace: L(
    'A menace is a person or thing likely to cause harm: a flood menace; a menace to. Threat is the close twin; danger is wider. Name it in the source, not a vibe. Verb: menace. Mix-up: menaces is also a legal word (demanding money); minus is subtraction (later in this set). Do not write menace for a mild nuisance.',
    ['Name the flood menace in the source, not a vibe about “danger”.', 'The editorial called the dog a menace, which is the harmful-person-or-thing sense.'],
    'a menace to; the + noun + menace. Close: threat. Trap: minus / mild nuisance. Geography, news, and law. A real threat, not a slight bother.',
    ['threat']
  ),
  mentality: L(
    'A mentality is a typical way of thinking in a person or group: a siege mentality; a growth mentality (rarer than mindset). Attitude is everyday; mindset is the school twin (later in this set). A siege mentality is not a policy. Mix-up: mentality vs mental health; metal is a material (already in the dictionary). Do not write mentality for an illness.',
    ['A siege mentality in the minutes is not a safeguarding policy.', 'A blame mentality featured in the inspection letter, which is the group-attitude sense.'],
    'a + adjective + mentality; the mentality of. Everyday: attitude. School twin: mindset. Trap: mental illness / metal. News and sociology. A way of thinking, not a diagnosis.',
    ['attitude']
  ),
  merchandise: L(
    'Merchandise is goods for sale, often branded: tour merchandise; stolen merchandise. Goods is the plain twin; stock is what a shop holds. Tour merch is not a grant. Verb: merchandise (promote goods). Mix-up: merchant is a trader (already elsewhere); mercy is compassion (already elsewhere). Do not write merchandise for a donation.',
    ['Tour merchandise is not a grant; log it on the accounts line.', 'Counterfeit merchandise was seized, which is the goods-for-sale sense.'],
    'merchandise; branded / tour merchandise. Plain: goods. Person: merchant. Trap: mercy. Business, media, and news. Sale goods, not kindness or a trader.',
    ['goods']
  ),
  metabolism: L(
    'Metabolism is the chemical processes that turn food into energy in a living thing: resting metabolism; metabolic rate. Digestion is breaking food down; energy is the outcome. Resting metabolism is not a diet advert. Adjective: metabolic. Mix-up: metaphor is a comparison (already elsewhere); metabolic vs metabolise (verb). Do not write metabolism for “how hungry you feel”.',
    ['Resting metabolism featured in the PE physiology paper, not a diet advert.', 'A metabolic pathway featured in the biology booklet, which is the chemistry-in-cells sense.'],
    'metabolism; metabolic rate / pathway. Contrast: digestion. Trap: metaphor. PE and biology. Cell chemistry, not a figure of speech.',
    []
  ),
  metro: L(
    'A metro is an underground urban railway: the Paris metro; a metro line. Underground / Tube are the London names; subway is often US. The Paris map is not a Tube diagram. Mix-up: metre is a length (already in the dictionary); metropolitan is of a big city (already elsewhere). Do not write metro for a suburban bus.',
    ['The Paris metro map is not a London Underground diagram.', 'A new metro station featured in the regeneration case study, which is the urban-rail sense.'],
    'the metro; a metro line / station. London twin: Underground / Tube. Trap: metre / metropolitan. Geography and travel. City rail, not a unit of length.',
    []
  ),
  microphone: L(
    'A microphone turns sound into an electrical signal: hold the microphone; a lapel microphone. Mic is the informal short form; speaker is the output. Do not tap it for emphasis in an oral. Mix-up: microscope is for tiny images (next entry); microwave is an oven (already in the dictionary). Do not write microphone for a camera.',
    ['Hold the microphone still in the oral; do not tap it for emphasis.', 'A radio microphone featured in the media practical, which is the recording sense.'],
    'a microphone; mic (informal); into the microphone. Output twin: speaker / loudspeaker. Trap: microscope / microwave. Orals, media, and music. Picks up sound, not a lens or an oven.',
    []
  ),
  microscope: L(
    'A microscope makes very small things look larger: calibrate the microscope; under the microscope (also idiom: closely examined). Magnifying glass is weaker and handheld. Calibrate before you count cells. Mix-up: microphone (previous entry); telescope is for distant objects. Do not write “under the microscope” for a telescope practical.',
    ['Calibrate the microscope before you count the cells.', 'The trust’s accounts were under the microscope, which is the idiom sense.'],
    'a microscope; under the microscope; microscopic. Contrast: telescope / magnifying glass. Trap: microphone. Biology and news idiom. Tiny things, or close scrutiny — not sound.',
    []
  ),
  militia: L(
    'A militia is an armed group of civilians, not a regular army: a local militia; militia fighters. Army is the state force (already in the dictionary); guerrilla stresses irregular tactics. Distinguish militia from the national army. Mix-up: military is the adjective/noun for armed forces (already elsewhere); militant is confrontational (already elsewhere). Do not call a police unit a militia.',
    ['The source distinguishes a militia from the national army.', 'A colonial militia featured in the history paper, which is the citizen-soldiers sense.'],
    'a militia; militia forces / fighters. State twin: army. Trap: military / militant. History and news. Civilian fighters, not the regular forces.',
    []
  ),
  mimic: L(
    'To mimic is to copy a voice, behaviour, or process: mimic an accent; mimic a reaction. Imitate is the close twin; copy is everyday. Do not mimic the examiner’s accent. Noun: a mimic. Mix-up: mime is silent acting; mini is small. Do not write mimic for “take notes from”.',
    ['Do not mimic the examiner’s accent in the oral; answer the question.', 'The model mimics coastal erosion, which is the process-copy sense.'],
    'mimic + person / process; a mimic. Close: imitate. Trap: mime / mini. Orals, biology, and geography models. Copy, not stay silent or shrink.',
    ['imitate']
  ),
  mindset: L(
    'A mindset is a set of attitudes that shapes thinking and action: a growth mindset; a fixed mindset. Attitude is everyday; mentality is the group twin (earlier in this set). A slogan is not a marked evaluation. Mix-up: mind is the thinking organ (already in the dictionary); mindset vs skillset. Do not write mindset for a single mood.',
    ['A growth mindset slogan is not a marked evaluation.', 'A risk-averse mindset featured in the business case, which is the attitude-set sense.'],
    'a growth / fixed / siege mindset. Everyday: attitude. Twin: mentality. Trap: mind / a mood. Education, business, and PSHE. A set of attitudes, not one feeling.',
    ['attitude']
  ),
  mingle: L(
    'To mingle is to mix, or to move around talking at a gathering: governors mingled; mingle with. Mix is everyday; socialise is the people twin. Mingling is not a recorded vote. Mix-up: mangle is to ruin; single is one. Do not write mingle for a formal vote or a written consultation.',
    ['Governors mingled after the presentation; that is not a recorded vote.', 'Smoke mingled with fog on the estuary, which is the blend sense.'],
    'mingle with; mingle + substances. Everyday: mix. Trap: mangle / single. News, citizenship, and description. Mix socially or physically, not a ballot.',
    ['mix']
  ),
  miniature: L(
    'Miniature means much smaller than usual: a miniature model; miniature versions. Tiny is everyday; scale model is the DT twin. A miniature still needs a scale. Noun: a miniature (a tiny portrait). Mix-up: minimum is the least (already in the dictionary); minister is a politician or cleric (already in the dictionary). Do not write miniature for “the minimum size”.',
    ['A miniature model still needs a scale on the DT sheet.', 'A miniature on ivory featured in the art source, which is the tiny-portrait sense.'],
    'a miniature + noun; in miniature. Everyday: tiny. Trap: minimum / minister. DT, art, and history. Very small version, not the least amount.',
    ['tiny']
  ),
  missionary: L(
    'A missionary is a person sent to promote a religion, often abroad: a missionary diary; missionary work. Priest / imam are local roles; explorer is secular. The diary is a source, not a census. Adjective: missionary (missionary zeal). Mix-up: mission is a task (already elsewhere); mercenary works for pay. Do not treat a missionary source as a neutral count.',
    ['The missionary diary is a source, not a neutral census.', 'Missionary schools featured in the empire unit, which is the institution sense.'],
    'a missionary; missionary work / zeal. Task noun: mission. Trap: mercenary. History, RS, and source work. Faith envoy, not a hired soldier.',
    []
  ),
  mistaken: L(
    'Mistaken means wrong in an opinion or identification: mistaken for; mistaken about. Wrong is everyday; incorrect is cooler. Log the ID check if someone is mistaken for a candidate. Noun: mistake (already in the dictionary). Mix-up: misunderstand is to get the meaning wrong (already elsewhere); missed is not attended. Do not write mistaken for a spelling slip without the wrong-identity or wrong-belief sense.',
    ['He was mistaken for a candidate; log the ID check.', 'She was mistaken about the date of the embargo, which is the wrong-belief sense.'],
    'mistaken for / about; a mistaken + noun. Everyday: wrong. Noun: mistake. Trap: misunderstand / missed. Exams, news, and orals. Wrong ID or belief, not merely late.',
    ['wrong']
  ),
  mistrust: L(
    'Mistrust is a feeling that you cannot trust someone or something: mistrust of; public mistrust. Distrust is a close twin; suspicion is sharper. Mistrust rose after the leak. Verb: mistrust. Mix-up: misunderstand (already elsewhere); trust is the opposite (already in the dictionary). Do not write mistrust for a single missed email.',
    ['Mistrust of the survey rose after the leaked draft.', 'Staff mistrusted the new portal, which is the verb sense.'],
    'mistrust of; public mistrust. Close: distrust. Opposite: trust. Trap: misunderstand. News, methods, and citizenship. Lasting doubt, not one missed message.',
    ['distrust']
  ),
  misuse: L(
    'To misuse is to use something wrongly or for the wrong purpose: misuse a fire exit; misuse of funds. Abuse is stronger and often cruel; use is neutral (already in the dictionary). Do not misuse the fire exit as a shortcut. Noun: misuse /ˌmɪsˈjuːs/. Mix-up: miss is to fail to catch (already in the dictionary); mice is the animal plural. Do not write misuse for “did not use”.',
    ['Do not misuse the fire exit as a shortcut to the bus park.', 'Misuse of bursary funds featured in the audit, which is the noun sense.'],
    'misuse + object; misuse of. Stronger: abuse. Noun IPA: /ˌmɪsˈjuːs/. Trap: miss / unused. H&S, finance, and news. Wrong use, not “forgot to use”.',
    []
  ),
  moist: L(
    'Moist means slightly wet; damp: keep the soil moist; a moist climate. Damp is the close twin; wet is wetter; humid is air. Not waterlogged. Mix-up: most is the superlative (already in the dictionary); mist is thin fog (later in this set). Do not write moist for soaking rain.',
    ['Keep the soil moist, not waterlogged, the biology practical said.', 'A moist onshore wind featured in the climate graph, which is the air sense.'],
    'moist soil / air / climate. Close: damp. Wetter: wet. Trap: most / mist. Biology and geography. Slightly wet, not soaked or “almost all”.',
    ['damp']
  ),
  moisture: L(
    'Moisture is very small amounts of water in air, soil, or on a surface: soil moisture; moisture in the air. Water is the everyday mass; humidity is air moisture as a measured idea. Record it at each quadrat. Mix-up: moist is the adjective (previous entry); mixture is a blend (already in the dictionary). Do not write moisture for a puddle.',
    ['Record soil moisture at each quadrat, not a guess of “damp”.', 'Trapped moisture rusted the hinges, which is the surface-water sense.'],
    'moisture in / content; soil moisture. Adjective: moist. Air twin: humidity. Trap: mixture / puddle. Geography and biology. Tiny water, not a blend or a pool.',
    []
  ),
  molecule: L(
    'A molecule is the smallest unit of a compound that can exist on its own: a water molecule; molecule of. Atom is a single element unit; compound is the substance. Draw it, then name the bond. Mix-up: mole is an amount in chemistry or an animal; modular is in modules. Do not call an ion a molecule without checking the paper’s wording.',
    ['Draw the water molecule, then name the bond type.', 'A polymer is a long molecule, which is the chain sense.'],
    'a molecule of; molecular (adjective). Contrast: atom / ion. Trap: mole. Chemistry and biology. Compound unit, not a garden animal or a mole of substance.',
    []
  ),
  momentous: L(
    'Momentous means very important because of its future effect: a momentous vote; a momentous decision. Important is everyday; historic stresses lasting fame. A momentous vote still needs turnout. Mix-up: moment is a short time (already in the dictionary); momentary means lasting a moment. Do not write momentous for a short delay.',
    ['A momentous vote still needs a recorded turnout.', 'The treaty was momentous for the border, which is the lasting-effect sense.'],
    'a momentous + noun; momentously. Everyday: important. Trap: moment / momentary. History, politics, and news. Huge in consequence, not “brief”.',
    ['historic']
  ),
  monarch: L(
    'A monarch is a king, queen, or similar hereditary ruler: name the monarch; a constitutional monarch. Sovereign is the formal twin (already elsewhere); monarchy is the system (already elsewhere). Do not write “the royal family” as a blob. Mix-up: monarch vs monarch butterfly; monastery is a monks’ house (later in this set). Do not call an elected president a monarch.',
    ['Name the monarch in the source, not “the royal family” as a blob.', 'A constitutional monarch featured in the politics booklet, which is the limited-power sense.'],
    'a monarch; constitutional monarch. System: monarchy. Formal twin: sovereign. Trap: monastery / butterfly. History and politics. The ruler, not the building or the insect.',
    ['sovereign']
  ),
  monetary: L(
    'Monetary means relating to money, especially a currency system: a monetary fine; monetary policy. Financial is wider (already elsewhere); fiscal often means government tax and spend. A fine is not a community order. Mix-up: monastic is of monks; momentary is brief. Do not write monetary for “a moment”.',
    ['A monetary fine is not the same as a community order.', 'Monetary policy featured in the economics paper, which is the interest-rate sense.'],
    'monetary policy / value / fine. Wider: financial. Tax/spend twin: fiscal. Trap: momentary / monastic. Economics, law, and news. Money systems, not “brief”.',
    []
  ),
  monk: L(
    'A monk is a man who lives in a religious community under vows: a Benedictine monk; a Buddhist monk. Nun is the female twin in many Christian orders; priest often serves a parish. The source names a monk, not a parish priest. Mix-up: monkey is an animal (already in the dictionary); monk vs friar (friars may travel). Do not write monk for any religious man.',
    ['The monastery source names a monk, not a parish priest.', 'A Buddhist monk featured in the RS video, which is the non-Christian sense.'],
    'a monk; monks’ + noun. Female twin (Christian): nun. Place: monastery. Trap: monkey. History and RS. Vowed community man, not an animal or any cleric.',
    []
  ),
  monotonous: L(
    'Monotonous means boring because it does not change: a monotonous recitation; monotonous work. Boring is everyday; repetitive stresses the repeat. A recitation of dates is not an argument. Noun: monotony. Mix-up: monotonic is a maths “always rising/falling”; mono is one channel. Do not write monotonous for a single low note unless the boredom sense is meant.',
    ['A monotonous recitation of dates is not an argument.', 'The night shift was monotonous, which is the unchanging-work sense.'],
    'monotonous + noun; monotony. Everyday: boring. Trap: monotonic (maths). Essays, PE logs, and news. Dull and unchanging, not a graph that only rises.',
    ['boring']
  ),
  motorist: L(
    'A motorist is a person who drives a car: target motorists; a motorist was fined. Driver is everyday; motor is the engine (already in the dictionary). The leaflet targets motorists, not bus passengers. Mix-up: motorway is a major road (already in the dictionary); pedestrian is a walker. Do not call a bus passenger a motorist.',
    ['The campaign targets motorists, not bus passengers, in the leaflet.', 'A motorist ignored the cycle lane, which is the driver sense.'],
    'a motorist; motorists. Everyday: driver. Contrast: pedestrian / passenger. Trap: motorway. Geography, citizenship, and news. Car driver, not the road.',
    ['driver']
  ),
  motto: L(
    'A motto is a short phrase stating a belief or aim: a school motto; the family motto. Slogan is more advertising; saying is wider. A motto is not a safeguarding policy. Mix-up: motor is an engine; motto vs logo (a picture). Do not treat a motto as a legal rule.',
    ['A school motto is not a safeguarding policy.', 'The regiment’s motto featured in the source, which is the official-phrase sense.'],
    'a motto; school / family / regimental motto. Ad-twin: slogan. Trap: motor / logo. Citizenship, history, and RS. A guiding phrase, not an engine or a picture.',
    ['slogan']
  ),
  mountainous: L(
    'Mountainous means having many mountains, or (of a problem or amount) huge: a mountainous region; a mountainous task. Hilly is gentler; mountainous as “huge” is slightly informal in essays. Name the range on the map. Mix-up: mountain is the noun (already in the dictionary); mountainous vs mountaineer (a climber). Do not call a single hill mountainous.',
    ['A mountainous region still needs a named range on the map.', 'A mountainous backlog of scripts featured in the minutes, which is the huge-amount sense.'],
    'a mountainous region / area; mountainous + task (huge). Noun: mountain. Gentler: hilly. Trap: mountaineer. Geography and news. Full of mountains, or huge — specify.',
    []
  ),
  mourn: L(
    'To mourn is to feel and show sadness for a death or a loss: mourn a person; mourn the passing of. Grieve is the close twin; miss is everyday (already in the dictionary). Name the person from the text. Noun: mourning. Mix-up: morning is the start of the day (already in the dictionary); moan is to complain. Do not write mourn for “complain about homework”.',
    ['The poem’s speaker mourns a person; name them from the text.', 'The town mourned the mill, which is the loss-of-a-thing sense.'],
    'mourn + person / loss; in mourning. Close: grieve. Trap: morning / moan. Literature, RS, and news. Grief, not 9 a.m. or a complaint.',
    ['grieve']
  ),
  multitude: L(
    'A multitude is a very large number of people or things: a multitude of tweets; a multitude. Lots is everyday; numerous is the adjective twin. Tweets are not a random sample. Mix-up: multiple means many (already elsewhere); multiply is the verb (already elsewhere). Do not write multitude for two or three items.',
    ['A multitude of tweets is not a random sample.', 'A multitude gathered in the square, which is the crowd sense.'],
    'a multitude of; the multitude. Everyday: lots. Trap: multiple / multiply. Methods, news, and literature. A huge number, not “more than one”.',
    []
  ),
  mundane: L(
    'Mundane means ordinary and uninteresting, or of this world rather than spiritual: a mundane check; mundane tasks. Ordinary is everyday; worldly is the RS twin. Log the badge check; drama is not a substitute. Mix-up: Monday is a day (already in the dictionary); municipal is of a town (already elsewhere). Do not write mundane for “on Monday”.',
    ['Log the mundane badge check; drama is not a substitute.', 'The sermon contrasted the sacred and the mundane, which is the this-world sense.'],
    'mundane + noun; the mundane. Everyday: ordinary. RS twin: worldly. Trap: Monday / municipal. Methods, news, and RS. Everyday or earthly, not a weekday.',
    ['ordinary']
  ),
  murderer: L(
    'A murderer is a person who has committed murder: the accused, not “the murderer”, before a verdict. Killer is wider; assassin is political. Name the legal status in the source. Noun: murder (already elsewhere). Mix-up: murmur is a quiet sound; martyr dies for a cause. Do not write murderer for a character who has not killed in the text.',
    ['The source names the accused, not “the murderer”, before the verdict.', 'The tragedy’s murderer is named in Act 5, which is the literary sense.'],
    'a murderer; convicted murderer. Crime noun: murder. Wider: killer. Trap: murmur / martyr. Law, news, and literature. Unlawful killer, not a whisper or a martyr.',
    []
  ),
  muscle: L(
    'A muscle is tissue that tightens to produce movement: label the muscle; pull a muscle. Tendon connects muscle to bone; bone is the hard tissue. Label it, not the bone beside it. Informal: muscle in (force your way in). Mix-up: mussel is a shellfish; musical is of music (next entries). Do not write muscle for a mussel in food tech.',
    ['Label the muscle on the diagram, not the bone beside it.', 'He pulled a muscle in the fixture, which is the injury sense.'],
    'a muscle; muscular (adjective); pull a muscle. Contrast: tendon / bone. Trap: mussel / musical. PE and biology. Body tissue, not a shellfish.',
    []
  ),
  musical: L(
    'Musical means connected with music; as a noun, a play with songs: a musical term; a West End musical. Music is the art (already in the dictionary); musician is the player (already in the dictionary). A term in the score is not a blog mood word. Mix-up: muscle (previous entry); magical means of magic. Do not write musical for “magical atmosphere” unless sound is meant.',
    ['A musical term in the score is not a mood word from a blog.', 'The drama group staged a musical, which is the show sense.'],
    'musical + noun; a musical. Art: music. Person: musician. Trap: muscle / magical. Music and drama. Of music, or a staged show — not a spell.',
    []
  ),
  mute: L(
    'Mute means silent, or (as a verb) to turn sound off: mute the clip; a mute button. Silent is everyday; speechless is from shock. Mute until the clip number is called. Noun: a mute (old: a person who does not speak — use person-first language now). Mix-up: moot means debatable; mute vs moat (a ditch). Do not write mute for “moot point”.',
    ['Mute the clip until the clip number is called, the invigilator said.', 'The film’s mute opening is a technique, which is the silent sense.'],
    'mute + device; mute button; remain mute. Everyday: silent. Trap: moot / moat. Exams, media, and literature. No sound, not “debatable”.',
    ['silent']
  ),
  myriad: L(
    'A myriad is a very large number: a myriad of anecdotes; myriads of. Lots is everyday; countless is the adjective twin. Anecdotes are not a sampling frame. Adjective: myriad reasons (no of). Mix-up: myriad vs million (already in the dictionary); myrrh is a resin in RS. Do not write myriad for five items.',
    ['A myriad of anecdotes is still not a sampling frame.', 'Myriad small errors sank the write-up, which is the adjective sense.'],
    'a myriad of; myriad + noun (adjective). Everyday: lots. Trap: million / myrrh. Methods and literature. A great many, not a named thousand or a gift resin.',
    []
  ),
  mystery: L(
    'A mystery is something unexplained, or a crime story: a methods mystery; a murder mystery. Puzzle is lighter; secret is hidden on purpose (already in the dictionary). The missing n is not a plot twist. Adjective: mysterious (already elsewhere). Mix-up: mystic is a spiritual person; myth is a traditional tale (already elsewhere). Do not write mystery for a myth.',
    ['The missing n is a methods mystery, not a plot twist.', 'A mystery novel featured in the genre unit, which is the crime-story sense.'],
    'a mystery; mystery novel / illness. Adjective: mysterious. Trap: mystic / myth. Methods, news, and English. Unexplained thing or a genre, not a god-story.',
    ['puzzle']
  ),
  mythology: L(
    'Mythology is a set of traditional stories about gods and heroes, or the study of them: Greek mythology; political mythology. Myth is one story (already elsewhere); legend is often more human. Name the set, then the later political use. Mix-up: methodology is research design (already elsewhere); mycology is fungi. Do not write mythology for your methods paragraph.',
    ['Name the mythology in the source, then the later political use.', 'Norse mythology featured in the literature paper, which is the god-stories sense.'],
    'mythology; Greek / Norse mythology. One story: myth. Trap: methodology. RS, literature, and politics. God-and-hero stories, not how you sampled.',
    []
  ),
  marketplace: L(
    'A marketplace is the world of buying and selling, or a physical market square: the jobs marketplace; a crowded marketplace. Market is the wider twin (already in the dictionary); shop is a single store. A crowd is not a sampling frame. Mix-up: marking is scoring; marketplace vs supermarket. Do not write marketplace for a single till.',
    ['A crowded marketplace is not a sampling frame for the survey.', 'An online marketplace featured in the business case, which is the platform sense.'],
    'the marketplace; an online / jobs marketplace. Wider: market. Trap: marking / a single shop. Business, geography, and methods. Trade arena or square, not one till.',
    ['market']
  ),
  measles: L(
    'Measles is a highly infectious disease that causes a red rash (usually uncountable): measles catch-up; measles cases. Rash is a symptom; vaccine is prevention. Map catch-up, not a cold. Mix-up: muscles (body); measly means tiny and mean (informal). Do not write “a measles” or treat it as a mild cold.',
    ['The public-health brief maps measles catch-up, not a cold.', 'Measles is uncountable in the write-up: cases of measles, not “two measles”.'],
    'measles; measles vaccine / cases. Usually uncountable. Trap: measly / muscles. Health and geography. A named infection, not “a bit measly”.',
    []
  ),
  meditate: L(
    'To meditate is to focus the mind quietly, or to think carefully: meditate on; meditate in silence. Think is everyday; reflect is cooler. The quiet room is not a detention. Noun: meditation (earlier in this set). Mix-up: mediate is to settle a dispute (earlier in this set); immediate means at once. Do not write meditate for “chair a peace talk”.',
    ['Pupils may meditate in the quiet room; it is not a detention.', 'Meditate on the ethical issue before you write, which is the think-carefully sense.'],
    'meditate on / in; meditation. Everyday: think. Trap: mediate / immediate. RS, PSHE, and essays. Quiet focus or deep thought, not brokering a deal.',
    []
  ),
  mercury: L(
    'Mercury is a liquid metal once common in thermometers, or the closest planet to the Sun: mercury in the barometer; the planet Mercury. Metal is the wider class; Hg is the symbol. On this paper the barometer is the metal. Mix-up: mercurial means changeable (already elsewhere); mercy is compassion (already elsewhere). Do not mix the planet and the metal in one unexplained sentence.',
    ['Mercury in the barometer is a metal, not the planet, on this paper.', 'A transit of Mercury featured in the physics clip, which is the planet sense.'],
    'mercury (metal); Mercury (planet). Symbol: Hg. Trap: mercurial / mercy. Chemistry, physics, and geography. Liquid metal or a planet — label which.',
    []
  ),
  millimetre: L(
    'A millimetre is one thousandth of a metre (British spelling): to the nearest millimetre; 5 mm. Centimetre is ten times larger; inch is imperial. Not “about a bit”. Mix-up: millilitre is volume (ml); millimetre vs millimeter (US). Do not write mm for millilitres.',
    ['Measure to the nearest millimetre, the practical says, not “about a bit”.', 'A two-millimetre error still matters on the engineering drawing, which is the tolerance sense.'],
    'a millimetre; mm. 10 mm = 1 cm. Volume twin: millilitre. US: millimeter. Sciences and DT. Length, not volume.',
    []
  ),
  minus: L(
    'Minus means less, or a disadvantage, or the − sign: score minus the penalty; a minus. Less is everyday; negative is the maths twin. Still show the raw total. Mix-up: minutes are time or notes (already in the dictionary); minas is not English. Do not write minus for “minutes of the meeting”.',
    ['Score minus the penalty still needs the raw total in the margin.', 'Cost was a minus in the evaluation, which is the disadvantage sense.'],
    'n minus n; a minus; minus sign. Everyday: less. Trap: minutes. Maths, PE scores, and evaluations. Subtract or a drawback, not a time note.',
    []
  ),
  mist: L(
    'Mist is a thin cloud of tiny water drops near the ground: coastal mist; mist rolled in. Fog is thicker; cloud is higher. The cliff path closed. Verb: mist (eyes mist; mist a plant). Mix-up: missed is past of miss; moist is slightly wet (earlier in this set). Do not write mist for a thunderstorm.',
    ['Coastal mist closed the cliff path, the risk assessment noted.', 'Her glasses misted in the lab, which is the verb sense.'],
    'mist; coastal / morning mist; mist over. Thicker: fog. Trap: missed / moist. Geography and H&S. Light low cloud, not “did not attend”.',
    ['fog']
  ),
  modification: L(
    'A modification is a small change to improve or adapt something: a modification to the method; access modifications. Change is everyday; amendment is often legal/text. A method change still needs a new risk line. Verb: modify (already in the dictionary). Mix-up: modest means not large or not boastful (already elsewhere); module is a course unit (already in the dictionary). Do not write modification for a whole new experiment without saying so.',
    ['A modification to the method still needs a new risk line.', 'Access modifications featured on the JCQ form, which is the exam-arrangements sense.'],
    'a modification to / of; modify (verb). Everyday: change. Trap: modest / module. Sciences, DT, and access arrangements. A small change, not a whole new course.',
    ['change']
  ),
  monastery: L(
    'A monastery is a building where monks live as a community: monastery ruins; a medieval monastery. Abbey may be larger or have a church; convent / nunnery is for nuns. Not a parish church on the site map. Mix-up: monarchy is royal rule (already elsewhere); minister is a politician. Do not call a cathedral a monastery unless monks lived there.',
    ['The ruins are a monastery, not a parish church, on the site map.', 'Dissolution of the monasteries featured in the history paper, which is the Tudor sense.'],
    'a monastery; monastic (adjective). Resident: monk. Contrast: parish church / convent. Trap: monarchy. History and RS. Monks’ house, not a kingship.',
    []
  ),
  monsoon: L(
    'A monsoon is a seasonal wind in South Asia, or the heavy rains it brings: date the monsoon; monsoon rainfall. Rainy season is everyday; a thunderstorm is one event. Date it in the case study. Mix-up: month is a calendar unit (already in the dictionary); monsoon vs typhoon (a storm). Do not write monsoon for a British August shower.',
    ['Date the monsoon in the case study, not a single thunderstorm.', 'A failed monsoon featured in the food-security unit, which is the rains sense.'],
    'the monsoon; monsoon rains / wind. Everyday: rainy season. Trap: month / typhoon. Geography and news. Seasonal wind and rains, not one UK shower.',
    []
  ),
  motionless: L(
    'Motionless means not moving at all: hold it motionless; lie motionless. Still is everyday; stationary is for vehicles. Hold the apparatus while you read. Mix-up: motion is movement (already elsewhere); emotion is feeling (already in the dictionary). Do not write motionless for “without a motion in a meeting”.',
    ['Hold the apparatus motionless while you take the reading.', 'The casualty lay motionless, which is the first-aid sense.'],
    'motionless; remain motionless. Everyday: still. Vehicle twin: stationary. Trap: motion / emotion. Sciences, PE, and first aid. No movement, not a committee proposal.',
    ['still']
  ),
  multicultural: L(
    'Multicultural means including people of many cultural backgrounds: a multicultural city; multicultural Britain. Diverse is wider (already elsewhere); multi-ethnic stresses ethnicity. Name groups in the enquiry, not a slogan. Mix-up: multiple means many (already elsewhere); cultural is of one culture. Do not write multicultural for “many events this week”.',
    ['A multicultural city still needs named groups in the enquiry, not a slogan.', 'A multicultural festival featured in the citizenship booklet, which is the event sense.'],
    'multicultural + noun; multiculturalism. Wider: diverse. Trap: multiple / merely “busy”. Geography, sociology, and citizenship. Many cultures, not many items.',
    ['diverse']
  ),
  multinational: L(
    'Multinational means operating in several countries; as a noun, such a company: a multinational sponsor; a multinational. International is wider; global stresses the whole world. A sponsor still needs a UK ethics note. Mix-up: multicultural (previous entry); national is of one country. Do not call a single UK chain multinational.',
    ['A multinational sponsor still needs a UK ethics note.', 'A multinational featured in the trade case study, which is the noun sense.'],
    'a multinational + noun; a multinational (company). Wider: international. Trap: multicultural / national. Business, geography, and news. Several countries, not several cultures as such.',
    []
  ),
  muscular: L(
    'Muscular means having well-developed muscles, or relating to the muscles: a muscular contraction; a muscular build. Strong is everyday; muscle is the noun (earlier in this set). Not a body-image caption. Mix-up: musical is of music; muscular Christianity is a history phrase. Do not write muscular for “musical”.',
    ['A muscular contraction featured in the PE paper, not a body-image caption.', 'A muscular defence of the method featured in the evaluation, which is the forceful-writing sense.'],
    'muscular + noun; muscular contraction / system. Noun: muscle. Trap: musical. PE, biology, and sometimes essays (forceful). Of muscles, not of music.',
    []
  ),
  mosaic: L(
    'A mosaic is a picture made from small pieces of stone or glass, or a mixed whole: a Roman mosaic; a mosaic of habitats. Collage is paper/photos; pattern is wider. A primary find, not a gift-shop replica. Mix-up: mosque is a place of worship (already in the dictionary); music is sound. Do not write mosaic for a mosque.',
    ['The Roman mosaic is a primary find, not a gift-shop replica.', 'A mosaic of land uses featured in the GIS enquiry, which is the mixed-whole sense.'],
    'a mosaic; mosaic of + parts. Art twin: tesserae / tessellation. Trap: mosque / music. Classics, art, and geography. Tiled picture or a mix, not a place of worship.',
    []
  ),
}
