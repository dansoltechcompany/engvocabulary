const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2T = {
  natural: L(
    'Natural means existing in nature, not made by people, or happening as you would expect: natural floodplains; a natural talent. Man-made / artificial sit opposite; nature is the noun (already in the dictionary). Map natural flood defences, not only walls. Mix-up: naturally is the adverb (already elsewhere). Do not call a planted conifer plantation “natural woodland” without a caveat.',
    ['Map natural flood defences, not only concrete walls, the geography paper said.', 'A natural pause in the oral is not a failed answer, which is the expected-behaviour sense.'],
    'natural + noun; a natural talent / disaster. Opposite: artificial / man-made. Noun: nature. Trap: naturally. Geography and orals. In nature, or unsurprising.',
    []
  ),
  nutrient: L(
    'A nutrient is a substance in food that a plant or animal needs to live and grow: a limiting nutrient; nutrient levels. Nutrition is the wider study or diet quality (already in the dictionary); nutritious describes food. Name the limiting nutrient in the lake study. Mix-up: nutritious / nutrition. Do not write nutrient for “a healthy meal” as a whole.',
    ['Name the limiting nutrient in the lake study, not a brand of cereal.', 'Iron is a nutrient the biology paper tests for in the blood-data table.'],
    'a limiting / key nutrient; nutrient levels / cycle. Wider study: nutrition. Adjective: nutritious. Biology and food tech. A needed substance, not the whole diet.',
    []
  ),
  notation: L(
    'Notation is a system of written symbols for numbers, music, or ideas: chemical notation; musical notation. Note is a short written remark (already in the dictionary); a notion is an idea (already elsewhere). Use standard notation in the working. Mix-up: notion / annotation (a comment on a text). Do not call a paragraph of prose “notation”.',
    ['Use standard chemical notation in the working, not a sentence in words.', 'The extract asks how musical notation changed after the printing press, which is the symbols sense.'],
    'chemical / musical / scientific notation; in notation. Trap: notion / note. Maths, chemistry, and music. A symbol system, not a belief.',
    []
  ),
  notch: L(
    'A notch is a V-shaped cut, or a level on a scale: a notch above; cut a notch. Grade is more formal for exam ranks; nick is a small cut. Results sat a notch above last year. Mix-up: note is writing; nought is zero (UK). Do not write notch for a whole grade boundary without a comparison.',
    ['Results sat a notch above last year’s cohort, the dashboard showed.', 'Cut a notch in the sample stick so the tide line is visible, which is the physical sense.'],
    'a notch above / below; cut a notch. Formal twin: grade / level. Trap: note / nought. Data comments and fieldwork. A step up, or a small cut.',
    []
  ),
  nourishment: L(
    'Nourishment is food or other things needed for health and growth (usually uncountable): nourishment from a diet; intellectual nourishment (metaphor). Food is everyday; nourish is the verb (already elsewhere). The case study maps nourishment, not snack brands. Mix-up: nourishment vs nutrition (the science / quality of diet). Do not write “a nourishment” as a countable snack.',
    ['The case study maps nourishment in the famine source, not supermarket brands.', 'The critic called the anthology thin intellectual nourishment, which is the metaphor.'],
    'nourishment from; little / adequate nourishment. Verb: nourish. Close: nutrition. Uncountable. Health, history, and reviews. What sustains growth, not a single biscuit.',
    []
  ),
  novice: L(
    'A novice is a beginner at a skill, job, or activity: a novice driver; novice users. Beginner is everyday; amateur is unpaid rather than new. A novice still needs the protocol in writing. Mix-up: novel is a book or “new” (already in the dictionary); novice is not “nervous”. Do not call an experienced cover supervisor a novice.',
    ['A novice still needs the fire-exit protocol in writing, H&S said.', 'Novice drivers featured in the road-safety unit, which is the learner sense.'],
    'a novice + noun; novice users / drivers. Everyday: beginner. Trap: novel / nervous. Training, news, and H&S. New to the task, not merely unpaid.',
    ['beginner']
  ),
  nucleus: L(
    'The nucleus is the central part of an atom or a cell, or the core of a group: the nucleus of the cell; a nucleus of volunteers. Core is the essay twin; nuclear is the adjective for energy or weapons (already in the dictionary). Label the nucleus on the diagram. Mix-up: nuclear / uncle. Plural: nuclei. Do not call the whole cell a nucleus.',
    ['Label the nucleus on the diagram, not the cytoplasm, the biology paper said.', 'A nucleus of regulars kept the club going, which is the core-group sense.'],
    'the nucleus of; cell / atomic nucleus; nuclei (plural). Adjective (weapons/energy): nuclear. Trap: uncle. Biology, physics, and organisations. The centre, not the whole.',
    ['core']
  ),
  nudge: L(
    'To nudge is to push gently, or to influence behaviour with a small prompt: nudge the sample; a policy nudge. Push is stronger; prompt is the exam twin. A nudge towards the salad bar featured in the case. Noun: a nudge. Mix-up: nurse is a job (already in the dictionary). Do not write nudge for a ban or a fine.',
    ['A nudge towards the salad bar featured in the public-health case, not a ban.', 'Nudge the slide until the meniscus is level, which is the gentle-push sense.'],
    'nudge + object; a nudge towards / into. Stronger: push / ban. Noun: a nudge. Psychology, policy, and practicals. A gentle prompt, not a punishment.',
    ['prompt']
  ),
  null: L(
    'Null means having no legal or statistical force, or containing nothing: a null result; null and void. Empty is everyday for containers; invalid is close for documents. State the null hypothesis before you collect data. Mix-up: nullify is the verb (already elsewhere); dull is boring. Do not write null for “a low but real score”.',
    ['State the null hypothesis before you collect data, the methods tutor said.', 'The unsigned form is null and void, which is the legal sense.'],
    'a null hypothesis / result; null and void. Verb: nullify. Everyday empty: empty. Trap: dull. Statistics and law. No effect or no force, not “a bit weak”.',
    []
  ),
  numerical: L(
    'Numerical means to do with numbers rather than words: numerical data; a numerical majority. Numeric is a close twin; numerous means very many (already in the dictionary). Give numerical data, not only adjectives. Mix-up: numerous / number (already in the dictionary). Do not call a bar chart “numerical” if it has no scale.',
    ['Give numerical data in the results table, not only “quite a lot”.', 'A numerical majority in the chamber still needs a turnout figure, which is the count sense.'],
    'numerical data / value / majority; numerically. Trap: numerous (many). Maths, sciences, and politics. Made of numbers, not “lots of”.',
    []
  ),
  officer: L(
    'An officer is a person with authority in the police, armed forces, or an organisation: a police officer; a returning officer. Official is the adjective or a civil-service noun (already in the dictionary); office is the building. Name the officer in the source, not “the authorities”. Mix-up: official / office. Do not call every employee an officer.',
    ['Name the police officer in the source, not a generic “the authorities”.', 'The returning officer published the count, which is the elections sense.'],
    'a police / army / press officer; returning officer. Adjective twin: official. Building: office. News, citizenship, and history. A named role with authority.',
    []
  ),
  orbit: L(
    'An orbit is the curved path of a planet, moon, or satellite, or a sphere of influence: in orbit; in the orbit of a party. Path is wider; satellite is the object (already elsewhere). Calculate the orbit time in the physics paper. Verb: orbit the Earth. Mix-up: habit is a routine; arbiter is a judge. Do not call a flight path an orbit unless it is around a body.',
    ['Calculate the orbit time in the physics paper, not a holiday flight path.', 'A think-tank in the minister’s orbit featured in the source, which is the influence sense.'],
    'in orbit; an orbit of; orbit + planet. Object: satellite. Trap: habit. Physics, geography, and politics. A path around a body, or a circle of influence.',
    []
  ),
  organ: L(
    'An organ is a body part with a function, a large church keyboard instrument, or a newspaper as a mouthpiece: a vital organ; a party organ. Organic is about farming or carbon chemistry (already in the dictionary); organisation is a group. Label the organ on the dissection sheet. Mix-up: organic / organisation. Do not call a tissue an organ without a function as a unit.',
    ['Label the organ on the dissection sheet, not a single tissue layer.', 'The paper was an organ of the party, which is the mouthpiece sense; the chapel organ featured in the music unit.'],
    'a vital / donor organ; a church organ; an organ of + group. Trap: organic / organisation. Biology, music, and media. A body part, instrument, or mouthpiece — specify.',
    []
  ),
  obedient: L(
    'Obedient means doing what a person, rule, or order tells you: an obedient cohort; obedient to the brief. Opposite: disobedient; obey is the verb (already in the dictionary). An obedient reading of the rubric still needs an argument. Mix-up: obese is about weight; obeisance is formal respect. Do not praise “obedient” copying as analysis.',
    ['An obedient reading of the rubric still needs an argument, the marker wrote.', 'The source contrasts obedient troops with a mutiny, which is the orders sense.'],
    'obedient to; an obedient + noun. Verb: obey. Opposite: disobedient. Trap: obese. Exams, history, and pastoral. Follows orders, not “well behaved” as a vague compliment.',
    []
  ),
  obese: L(
    'Obese means very overweight in a medical sense, not merely “a bit heavy”: obese (clinical); childhood obesity. Overweight is milder; fat is informal and often rude. The health paper uses obese with BMI criteria. Noun: obesity. Mix-up: obedient; obscene is shocking. Do not use obese as playground insult in a write-up.',
    ['The health paper uses obese with stated BMI criteria, not a photo caption.', 'Childhood obesity featured in the inequality chart, which is the noun obesity.'],
    'obese (clinical); obesity; morbidly obese (technical). Milder: overweight. Trap: obedient / obscene. Biology and PSHE. A medical category, not a taunt.',
    []
  ),
  oblique: L(
    'Oblique means not straight or not said directly: an oblique line; an oblique reference. Indirect is the essay twin; slanted is more physical. An oblique reference to the leak still needs a source. Mix-up: oblong is a rectangle; opaque is hard to see through (already elsewhere). Do not call a clear topic sentence oblique.',
    ['An oblique reference to the leak still needs a named source.', 'Draw the oblique line at 45 degrees, which is the geometry sense.'],
    'an oblique + noun; obliquely. Essay twin: indirect. Trap: oblong / opaque. Language papers and maths. Not straight, in line or in wording.',
    ['indirect']
  ),
  observable: L(
    'Observable means able to be seen or measured: an observable change; observable behaviour. Visible is everyday; observation is the noun (already in the dictionary); observe is the verb. Report only observable behaviour in the practical. Mix-up: observant means good at noticing; observation. Do not call a feeling observable without a measure.',
    ['Report only observable behaviour in the psychology practical, not guessed motives.', 'An observable change in pH still needs a recorded value, which is the measure sense.'],
    'observable + noun; empirically observable. Noun: observation. Person: observant. Trap: feeling-as-data. Sciences and methods. Can be seen or measured.',
    ['visible']
  ),
  observance: L(
    'Observance is the practice of following a law, custom, or religious rite (often uncountable): observance of the rule; religious observance. Observation is watching (already in the dictionary); observe can mean watch or follow a custom. Observance of the embargo is not optional. Mix-up: observation / observer. Do not write observance for “what you saw in the lesson”.',
    ['Observance of the embargo is not optional, the board email said.', 'Religious observance featured in the census table, which is the custom sense.'],
    'observance of + rule / rite; religious observance. Trap: observation (watching). Law, RS, and news. Following a custom, not looking at data.',
    []
  ),
  obsessive: L(
    'Obsessive means thinking or doing something too much, in a way that is hard to stop: an obsessive focus; obsessive checking. Obsession is the noun (already elsewhere); obsess is the verb. An obsessive focus on the league table crowded out drop-out figures. Mix-up: obsessive vs possessed (ghosts); excessive is “too much” without the mental loop. Do not diagnose a classmate in an essay.',
    ['An obsessive focus on the league table crowded out the drop-out figures.', 'Obsessive checking of the portal still needs a log-off, which is the behaviour sense.'],
    'obsessive + noun; obsessive about. Noun: obsession. Verb: obsess. Trap: excessive / possessed. Evaluations and news. A hard-to-stop loop, not a medical label for peers.',
    []
  ),
  obstruction: L(
    'An obstruction is something that blocks a path, view, or process, or the act of blocking: an obstruction of the corridor; obstruction of justice. Obstacle is a difficulty in the way (already in the dictionary); obstruct is the verb (already elsewhere). A bag is an obstruction if it blocks the fire route. Mix-up: obstacle (a difficulty) vs obstruction (a blockage, often physical or legal). Do not call a hard question an obstruction.',
    ['A bag is an obstruction if it blocks the fire route, H&S said.', 'Obstruction of justice featured in the law unit, which is the legal sense.'],
    'an obstruction of; obstruction of justice. Verb: obstruct. Close: obstacle (difficulty). Trap: using it for a tricky exam item. H&S, news, and law. A blockage, not a hard task.',
    ['blockage']
  ),
  occupancy: L(
    'Occupancy is the fact of a building being used, or how full it is: occupancy rates; maximum occupancy. Occupation is a job or military control (already in the dictionary); occupy is the verb. Quote occupancy rates, not a photo of empty desks. Mix-up: occupation / occupant (a person). Do not write occupancy for “what job they do”.',
    ['Quote occupancy rates in the housing study, not a photo of empty desks.', 'Maximum occupancy is posted by the fire door, which is the safety-limit sense.'],
    'occupancy rates; maximum occupancy; hotel occupancy. Job/control: occupation. Person: occupant. Housing, geography, and H&S. How full a place is, not a profession.',
    []
  ),
  odour: L(
    'An odour is a smell, often one people notice or complain about (British spelling): an odour complaint; odourless. Smell is everyday; scent is often pleasant. Log the odour complaint as a health item. Mix-up: odious means hateful (already elsewhere); American odor. Do not write odour for a perfume review unless the source uses it.',
    ['Log the odour complaint as a health item, not a joke in the minutes.', 'A chemical odour voided the practical until the lab was cleared, which is the H&S sense.'],
    'an odour of; an odour complaint; odourless. Everyday: smell. US spelling: odor. Trap: odious. H&S and news. A noticed smell (UK -our).',
    ['smell']
  ),
  offhand: L(
    'Offhand means without checking, or (disapproving) casual to the point of rudeness: offhand remark; I cannot say offhand. Casual is milder; rude is stronger. An offhand remark in the corridor still went in the log. Mix-up: off-hand as a hyphen; firsthand is from experience. Do not write offhand for a sourced, checked figure.',
    ['I cannot give the n offhand; it is in the appendix, the chair said.', 'An offhand remark in the corridor still went in the log, which is the rude-casual sense.'],
    'cannot say offhand; an offhand remark / manner. Milder: casual. Trap: firsthand. Meetings, news, and orals. Unchecked or brusque, not “informal but careful”.',
    []
  ),
  onwards: L(
    'Onwards means from a time or place continuing forward (British; often from 2020 onwards): from May onwards; onwards and upwards (idiom). Onward is a close adjective/adverb twin; forward is everyday. Data from 2019 onwards still needs a break in the axis. Mix-up: onwards vs afterwards (later, not “from then on”). Do not write “onwards 2019” without from.',
    ['Plot data from 2019 onwards with a marked break in the axis.', 'From the station onwards the sample sites are every 200 metres, which is the place sense.'],
    'from + date / place + onwards. US often: onward. Trap: afterwards. Graphs, history, and itineraries. From that point forward (UK -s).',
    []
  ),
  operative: L(
    'Operative means working or in force, or (noun) a worker or agent: the rule is operative; a factory operative. Operational is about day-to-day running (already elsewhere); operate is the verb. The new tariff is operative from Monday. Mix-up: operation (surgery or a planned job). Do not call a broken printer operative.',
    ['The new tariff is operative from Monday, the notice said.', 'A factory operative featured in the source, which is the worker sense.'],
    'operative from + date; the operative word; a factory / intelligence operative. Close: operational. Verb: operate. Law, news, and workplaces. In force, or a named worker/agent.',
    []
  ),
  oppress: L(
    'To oppress is to treat a group cruelly or unfairly, especially with power: oppress a minority; an oppressed group. Persecute stresses targeting for identity; repress can mean hold down feelings or protest. The history paper asks who was oppressed, and by which law. Noun: oppression (already elsewhere). Mix-up: oppose is to disagree (already in the dictionary). Do not write oppress for “I opposed the plan”.',
    ['The history paper asks who was oppressed, and by which statute.', 'A tax can oppress small firms, which is the burden sense, if the source uses that verb.'],
    'oppress + group; an oppressed + noun. Noun: oppression. Trap: oppose. History, RS, and news. Cruel control, not mere disagreement.',
    []
  ),
  optimum: L(
    'Optimum means best or most favourable for a purpose: optimum temperature; an optimum sample size. Optimal is a close twin; optimistic means expecting a good outcome (already in the dictionary). State the optimum pH, not a vibe. Mix-up: optimism / optional. Do not call a lucky result optimum without a criterion.',
    ['State the optimum pH for the enzyme, not “it seemed happy”.', 'An optimum sample size still needs a power calculation, which is the methods sense.'],
    'the optimum + noun; at an optimum. Twin: optimal. Trap: optimistic / optional. Sciences and planning. Best for a stated purpose, not “cheerful”.',
    ['optimal']
  ),
  optional: L(
    'Optional means you can choose to do it or not: optional extras; an optional unit. Opposite: compulsory / obligatory (already in the dictionary); option is the noun (already elsewhere). The revision session is optional; the mock is not. Mix-up: optimum; optical is about eyes or light. Do not mark a required paper optional on the timetable.',
    ['The revision session is optional; the mock is not, the bulletin said.', 'Optional extras on the trip form still need a price, which is the paid-choice sense.'],
    'optional + noun; optional for. Opposite: compulsory / obligatory. Noun: option. Trap: optimum / optical. Timetables, exams, and forms. Not required.',
    []
  ),
  ordinance: L(
    'An ordinance is an official rule or local law: a city ordinance; a religious ordinance. Regulation is wider; ordnance (with no i) is military weapons and ammunition. Quote the ordinance number, not a slogan. Mix-up: ordnance / ordinary. Do not write ordinance for a tank or a shell.',
    ['Quote the city ordinance number in the planning source, not a slogan.', 'A religious ordinance featured in the RS paper, which is the rite-or-rule sense.'],
    'a city / local ordinance; ordinance no. Trap: ordnance (weapons). Close: regulation. Citizenship, planning, and RS. A local law, not artillery.',
    ['regulation']
  ),
  orient: L(
    'To orient is to find your position, or to direct something towards a purpose: orient the map; a policy oriented towards inclusion. Orientation is the noun (already elsewhere); origin is a starting point. Orient the map to north before you pace. Mix-up: oriental is dated and often offensive for people; origin. British also uses orientate. Do not write orient for “invent a history”.',
    ['Orient the map to north before you pace the transect.', 'A course oriented towards resits still needs a new paper, which is the directed-towards sense.'],
    'orient + object; oriented towards. Noun: orientation. Twin (UK): orientate. Trap: oriental / origin. Fieldwork and policy. Find bearings or set a direction.',
    []
  ),
  orphan: L(
    'An orphan is a child whose parents have died; as a verb, to leave someone without parents: war orphans; orphaned by the famine. Foundling is an abandoned infant (historical). Name orphans as a group in the source, not a sentimental caption. Mix-up: often; organ. Do not use orphan as a joke for a file with no folder.',
    ['The history source counts war orphans, not a sentimental caption.', 'An orphaned dataset with no metadata still cannot be reused, which is the technical metaphor — use it only if the mark scheme allows.'],
    'an orphan; war orphans; orphaned by. Trap: often / organ. History, literature, and news. A child without parents; avoid flippant IT jokes in exams.',
    []
  ),
  outburst: L(
    'An outburst is a sudden expression of strong feeling, or a sudden start of something: an outburst of anger; an outburst of violence. Outcry is public protest (next entries); outbreak is disease or war (already in the dictionary). An outburst in the hearing still went on the record. Mix-up: outbreak / outcry. Do not call a planned speech an outburst.',
    ['An outburst in the hearing still went on the record, the minutes said.', 'An outburst of applause after the verdict featured in the report, which is the sudden-show sense.'],
    'an outburst of + feeling / violence / applause. Close: outcry (public protest). Trap: outbreak. News, history, and orals. Sudden and unplanned, not a scheduled address.',
    []
  ),
  outcry: L(
    'An outcry is a strong public expression of anger or protest: a public outcry; an outcry over fees. Protest is wider; outrage is the feeling or a shocking act (already elsewhere). A public outcry followed the leaked paper. Mix-up: outburst (a personal explosion); cry. Do not write outcry for one private email.',
    ['A public outcry followed the leaked paper, the editorial said.', 'There was little outcry over the quiet cut, which is the “missing protest” sense.'],
    'a public outcry; an outcry over / at. Wider: protest. Trap: outburst. News and citizenship. Many voices at once, not one person’s snap.',
    ['protest']
  ),
  outdated: L(
    'Outdated means no longer useful or fashionable because something newer exists: outdated guidance; an outdated textbook. Obsolete is stronger (no longer used at all, already elsewhere); old-fashioned is about style (already in the dictionary). Outdated guidance still on the portal is a safeguarding risk. Mix-up: outdated vs out-of-date (close twin, often hyphenated). Do not call last week’s bulletin outdated without a replacement date.',
    ['Outdated guidance still on the portal is a safeguarding risk, the inspector said.', 'An outdated textbook missed the 2019 boundary change, which is the syllabus sense.'],
    'outdated + noun; hopelessly outdated. Stronger: obsolete. Twin: out of date. Trap: old-fashioned (style). Policy, IT, and textbooks. Superseded, not merely vintage.',
    []
  ),
  outlaw: L(
    'To outlaw is to make something illegal; as a noun, a person living outside the law: outlaw a practice; an outlaw in the ballad. Ban is everyday; prohibit is formal. The act outlawed child labour in the mills. Mix-up: outline is a summary (already in the dictionary); law. Do not write outlaw for a school detention rule.',
    ['The act outlawed child labour in the mills, the history paper dates.', 'The ballad’s outlaw is not a modern CEO, which is the folk-hero sense.'],
    'outlaw + practice; an outlaw. Everyday: ban. Trap: outline. History, law, and literature. Make illegal, or a person outside the law.',
    ['ban']
  ),
  outlive: L(
    'To outlive is to live longer than someone or something, or to survive past a use: outlive a rival; outlive its usefulness. Survive is wider; outlast is a close twin. The clause outlived the project it funded. Mix-up: outline; live out (to experience). Do not write outlive for “live outside the city”.',
    ['The clause outlived the project it funded, the audit noted.', 'She outlived the other witnesses, which is the lifespan sense in the source.'],
    'outlive + person / thing; outlive its usefulness. Close: outlast / survive. Trap: outline / live out. History, evaluations, and news. Last longer than, not “dwell outdoors”.',
    ['outlast']
  ),
  outnumber: L(
    'To outnumber is to be greater in number than someone or something: outnumber the staff; far outnumbered. Exceed is wider (amount, not only count). Protestors outnumbered stewards at the gate. Mix-up: number / numerous. Do not write outnumber for a higher percentage without counts.',
    ['Protestors outnumbered stewards at the gate, the log said.', 'Absences outnumbered sittings in that option group, which is the headcount sense.'],
    'outnumber + group; far / easily outnumbered. Wider: exceed. Trap: numerous. News, history, and registers. More people (or items), not a bigger share without n.',
    []
  ),
  outpatient: L(
    'An outpatient is a person who gets hospital treatment without staying overnight: an outpatient clinic; outpatient waiting times. Inpatient stays in; GP is community care. Outpatient waiting times featured in the health chart. Mix-up: outlier is a data point; patient (already in the dictionary). Do not call a boarding pupil an outpatient.',
    ['Outpatient waiting times featured in the health-inequality chart.', 'The clinic is outpatient only after 5 p.m., which is the no-bed sense.'],
    'an outpatient; an outpatient clinic / appointment. Opposite: inpatient. Trap: outlier. Health and citizenship. Treated and sent home the same day.',
    []
  ),
  outpost: L(
    'An outpost is a small military, trading, or organisational base far from the centre: a remote outpost; an outpost of the empire. Branch is a civilian twin; colony is larger and political. The source maps a frontier outpost, not the capital. Mix-up: outpost vs out-of-office; post is mail or a job. Do not call a city campus an outpost without distance from HQ.',
    ['The source maps a frontier outpost, not the capital, the history paper said.', 'A research outpost on the estuary logged salinity hourly, which is the field-station sense.'],
    'a remote / military outpost; an outpost of + organisation. Civilian twin: branch. Trap: post / campus-as-default. History, geography, and news. Far from the centre.',
    []
  ),
  overboard: L(
    'Overboard means over the side of a ship into the water; go overboard means do something to excess: man overboard; go overboard on decoration. Excessive is the essay twin for the idiom. Do not go overboard on adjectives in the conclusion. Mix-up: onboard (on the ship / staffed); board (the exam board). Do not write overboard for “on the agenda”.',
    ['Do not go overboard on adjectives in the conclusion, the marker wrote.', 'A man-overboard drill featured in the seamanship source, which is the literal sense.'],
    'go overboard (idiom); throw + noun + overboard; man overboard. Trap: onboard. Essays and news. Excess, or literally off the ship — specify.',
    []
  ),
  overcast: L(
    'Overcast means the sky is covered with cloud, dull and grey: an overcast sky; overcast conditions. Cloudy is everyday; dull can be light or boring. An overcast sky still needs a light-meter reading for the photos. Mix-up: forecast is a prediction; overcast vs overcoat. Do not write overcast for “the exam is cancelled”.',
    ['An overcast sky still needs a light-meter reading for the field photos.', 'Overcast conditions delayed the solar practical, which is the cloud-cover sense.'],
    'an overcast sky / day; overcast conditions. Everyday: cloudy. Trap: forecast / overcoat. Geography and photography. Cloud covering the sky, not a cancelled event.',
    ['cloudy']
  ),
  overdue: L(
    'Overdue means not done or paid by the expected time: overdue library books; overdue reform. Late is everyday; outstanding can mean unpaid (already in the dictionary). Overdue scripts still need a date in the log. Mix-up: overcome (already in the dictionary); overdo is to do too much. Do not write overdue for a task that has no deadline.',
    ['Overdue scripts still need a date in the log, exams said.', 'Overdue reform of the rota featured in the inspection letter, which is the long-waited sense.'],
    'overdue + noun; long overdue. Everyday: late. Trap: overcome / overdo. Exams, libraries, and news. Past the due point, not merely “soon”.',
    ['late']
  ),
  overestimate: L(
    'To overestimate is to guess a size, number, or ability as larger than it is: overestimate demand; overestimate a risk. Opposite: underestimate; estimate is the base verb. Do not overestimate a sample of twelve. Noun: an overestimate. Mix-up: overstate (already elsewhere) is to say too strongly; overdo. Do not write overestimate for “praise too much” without a quantity.',
    ['Do not overestimate a sample of twelve, the methods tutor said.', 'The bid overestimated demand for the evening class, which is the numbers sense.'],
    'overestimate + noun; an overestimate of. Opposite: underestimate. Trap: overstate / overdo. Methods, economics, and planning. Too high a guess, not mere enthusiasm.',
    []
  ),
  overflow: L(
    'To overflow is to spill over a limit, or (of a place) to be too full: the river overflowed; overflow parking. Spill is accidental liquid; excess is the noun. Overflow parking is not in the fire plan. Noun: an overflow. Mix-up: overlook (already elsewhere); overrule. Do not write overflow for a small drip without a limit being passed.',
    ['Overflow parking is not in the fire plan, the risk assessment said.', 'The river overflowed the gauging station, which is the physical sense.'],
    'overflow with; an overflow of; overflow parking / pipe. Close: spill. Trap: overlook. Geography, H&S, and events. Past the brim or capacity, not a leaky tap.',
    []
  ),
  overly: L(
    'Overly means too much; more than is reasonable: overly long; overly optimistic. Too is everyday; excessively is heavier. An overly long quote still needs a comment. Mix-up: overall (already in the dictionary); overlay is to cover. Do not pair overly with too in the same phrase.',
    ['An overly long quote still needs a comment of your own.', 'The forecast was overly optimistic, which is the “too cheerful” sense.'],
    'overly + adjective / adverb. Everyday: too. Trap: overall / overlay. Evaluations and news. Excessively, not “in general”.',
    ['too']
  ),
  overpower: L(
    'To overpower is to defeat by greater strength, or to be too strong to bear: overpower the smell; overpowered by fumes. Overwhelm is more about being unable to cope (already elsewhere); overrule is a decision. Fumes overpowered the first-aiders. Mix-up: overpower vs empower; overtake. Do not write overpower for “win a debate on points” without force or intensity.',
    ['Fumes overpowered the first-aiders until the lab was cleared, H&S said.', 'A stronger side overpowered the opposition in extra time, which is the sport sense.'],
    'overpower + person / smell; be overpowered by. Close: overwhelm (coping). Trap: empower / overtake. News, sport, and H&S. Greater force, not a polite win.',
    []
  ),
  override: L(
    'To override is to use authority to cancel a decision or automatic setting: override a veto; override the lock. Overrule is a close legal/meeting twin (already elsewhere); overwrite is to replace a file. Staff cannot override the fire lock. Noun: an override. Mix-up: overrule / overwrite / overlook. Do not write override for “have a different opinion” without power to cancel.',
    ['Staff cannot override the fire lock, the drill note said.', 'Governors overrode the committee vote, which is the authority sense.'],
    'override + decision / setting; an override. Close: overrule. Trap: overwrite / overlook. Law, IT, and meetings. Cancel by higher authority, not merely disagree.',
    ['overrule']
  ),
  overtake: L(
    'To overtake is to go past a moving vehicle or person, or to catch up and become bigger: overtake on the left; demand overtook supply. Pass is everyday; overcome is to beat a difficulty (already in the dictionary). Demand overtook supply in the case study. Mix-up: overtake vs undertake (to promise to do); overrun. Do not write overtake for “take over a company” (that is take over).',
    ['Demand overtook supply in the housing case study, the graph showed.', 'Do not overtake on the blind bend in the driving source, which is the road sense.'],
    'overtake + vehicle / person; be overtaken by. Trap: undertake / take over / overcome. Economics, news, and driving. Go past, or become larger than — not “acquire a firm”.',
    ['pass']
  ),
  overturn: L(
    'To overturn is to turn something upside down, or to reverse a decision: overturn a conviction; the boat overturned. Reverse is the legal twin; overthrow is to remove a government by force (already elsewhere). The appeal overturned the exclusion. Mix-up: overthrow / overtake / turn over (pages). Do not write overturn for a coup without a court or official reversal.',
    ['The appeal overturned the exclusion, the letter said.', 'The dinghy overturned in the squall, which is the physical sense.'],
    'overturn a decision / verdict / ban; overturn a boat. Legal twin: reverse. Trap: overthrow. Law, news, and geography. Reverse officially, or capsize — specify.',
    ['reverse']
  ),
  owing: L(
    'Owing means still to be paid; owing to means because of: fees owing; owing to the strike. Due is a close twin for money; because of is everyday for the phrase. Owing to the strike, the oral moved online. Mix-up: owe is the verb (already in the dictionary); own. Do not write “owing the rain” without to.',
    ['Owing to the strike, the oral moved online, the bulletin said.', 'Library fines still owing block the next loan, which is the unpaid sense.'],
    'owing to + noun; money / fees owing. Everyday cause: because of. Verb: owe. Trap: own / “owing the rain”. Forms, news, and exams. Unpaid, or because of (with to).',
    []
  ),
}
