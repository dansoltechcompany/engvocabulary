const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1I = {
  gauge: L(
    'To gauge is to measure or judge a level: gauge interest, gauge how much. Measure is everyday and often uses a tool; gauge is frequently an estimate of mood, risk, or understanding. A gauge (noun) is also a measuring instrument or a scale (a pressure gauge, narrow gauge). Do not write gauge for a wild guess with no look at the evidence.',
    ['A two-item quiz gauged whether the new notation had landed.', 'You can gauge the room from the silence; you still need the numbers for the minutes.'],
    'Judge/measure a level. Noun: a gauge (instrument / scale). Everyday: measure. Not a guess with eyes closed.',
    ['measure']
  ),
  generalise: L(
    'To generalise (US generalize) is to draw a broad claim from particular cases: generalise from a sample, a sweeping generalisation. General is the adjective (already in the dictionary); generally is the adverb. Specify is a useful opposite move. Do not generalise from one anecdote in a results section.',
    ['You cannot generalise from one angry email to “staff morale”.', 'A cautious paper says where it will not generalise: one clinic, one year.'],
    'Draw a broad rule (British -ise). Noun: generalisation. US: generalize. Opposite move: specify. Not one story → a nation.',
    []
  ),
  generic: L(
    'Generic means typical of a whole class, not of one named thing: generic feedback, a generic painkiller (non-brand). General is looser; specific and particular are opposites. A generic is also a non-brand drug. Do not call a tightly specified protocol generic.',
    ['“Well done” is generic; name the paragraph that actually worked.', 'A generic tablet is the non-brand twin, not a vague one.'],
    'Not specific / non-brand. Opposite: specific. Looser cousin: general. Pharmacy: a generic (noun).',
    ['nonspecific']
  ),
  gist: L(
    'The gist is the main point: get the gist, the gist of the argument. Summary can list the parts; gist is the core meaning you could retell in one breath. Jest is a joke — a lookalike. Do not write gist for a full paraphrase you still need in an exam answer.',
    ['She got the gist of the ruling from the first page and skipped the annex.', 'Listening for gist is a skill; quoting the gist as if it were a citation is not.'],
    'The main point. Close: essence. Everyday: the main idea. Mix-up: jest (a joke). Not a complete paraphrase.',
    ['essence']
  ),
  glean: L(
    'To glean is to collect information in small amounts, often the hard way: glean from footnotes, glean who paid. Gather (already in the dictionary) is everyday and can be one sweep; glean implies scraps. Originally it was leftover grain. Do not glean a fact that was in the title in bold.',
    ['From three annual reports they gleaned the real headcount.', 'Gleaning takes patience; a press release is gathering in one go.'],
    'Pick up information bit by bit. Everyday: gather (faster, fuller). Old sense: leftover grain. Not “read the headline”.',
    ['gather']
  ),
  globalisation: L(
    'Globalisation (US globalization) is the process of trade, culture, and systems becoming worldwide: economic globalisation, resistance to globalisation. Global (already in the dictionary) is the adjective. International is between nations; globalisation is the thickening of those links. Do not use it as a fancy word for “abroad”.',
    ['Globalisation cheapened the parts and complicated the night-shift contracts.', 'A global brand is the adjective; globalisation is the historical process examiners want named.'],
    'Worldwide integration of trade/culture (British -s-). US: globalization. Adjective: global. Not a synonym of “foreign”.',
    []
  ),
  governance: L(
    'Governance is how an organisation or country is directed and held to account: corporate governance, poor governance. Government is the people/institutions that rule a state; management is day-to-day running. A governance review looks at boards, audits, and rules. Do not call a missing stapler a governance crisis.',
    ['The charity failed on governance: no independent chair, no conflict log.', 'Government sets statute; governance is whether your board actually checks the books.'],
    'How a body is run and scrutinised. Contrast: government (the state). Day-to-day: management. Not a stationery shortage.',
    []
  ),
  gradual: L(
    'Gradual means happening slowly, in stages: a gradual rise, gradual improvement. Gradually (already in the dictionary) is the adverb. Sudden is the opposite; cumulative (already in the dictionary) is about adding up, which may or may not be slow. Do not call a one-night crash gradual.',
    ['Progress was gradual: five marks a term, which is still progress.', 'A gradual slope is geography; a gradual policy change should still have dates.'],
    'Slow and stepwise. Adverb: gradually. Opposite: sudden. Cousin: cumulative (by addition, not necessarily slow).',
    ['slow']
  ),
  granular: L(
    'Granular, of data or description, means broken into fine useful pieces: granular costs, a granular breakdown. Detailed is everyday; fine-grained is a close cousin. Grainy is how a photo looks. A granule is a small grain. Do not call a one-line total granular.',
    ['Finance wanted granular spend per module, not “staffing” as one lump.', 'Granular sand is literal; examiners mainly want the data sense.'],
    'Fine-grained (especially data). Everyday: detailed. Photo mix-up: grainy. Opposite: a lump sum / a vague whole.',
    ['detailed']
  ),
  grasp: L(
    'To grasp is to understand fully, or to take and hold: grasp a point, grasp the rail. Understand is everyday; grip (this batch’s neighbour as a noun in other lists) is hold. Grasp as a noun is understanding (a firm grasp of statistics). Do not write grasp for a vague familiarity.',
    ['Once she grasped the sampling rule, the rest of the chapter was arithmetic.', 'A grasp of the safety brief is the noun; grasping a handle is the physical twin.'],
    'Understand fully / hold firmly. Noun: a grasp of + subject. Everyday: understand. Physical: hold. Not “have heard of”.',
    ['understand']
  ),
  gratitude: L(
    'Gratitude is thankfulness: express gratitude, gratitude for the cover. Grateful (already in the dictionary) is the adjective. Thanks is everyday. Ingratitude is the rare opposite. An acknowledgement is the academic slot for it. Do not paste a paragraph of gratitude where a methods sentence belongs.',
    ['A sentence of gratitude in the acknowledgements is plenty; the table still needs n.', 'Gratitude for unpaid overtime is not a pay policy.'],
    'Thankfulness. Adjective: grateful. Everyday: thanks. Academic home: acknowledgements. Not a methods substitute.',
    ['thanks']
  ),
  grave: L(
    'Grave as an adjective means very serious: a grave error, grave concern. The noun grave is a burial place — same spelling, different job. Serious is everyday; solemn is ceremonially serious. Gravity (next) is the noun of this sense. Do not call a late bus a grave matter unless people were harmed.',
    ['A grave error in the dosage column stopped the trial the same afternoon.', 'A grave in a churchyard is the noun; keep the adjective for real seriousness.'],
    'Very serious (adj.). Noun homonym: a burial place. Everyday: serious. Noun of the adj.: gravity. Not a minor delay.',
    ['serious']
  ),
  gravity: L(
    'Gravity is seriousness, or the physical force: the gravity of the leak, the law of gravity. Grave (above) is the adjective. Gravitas (already in the dictionary) is dignified presence — related root, different job. Do not write gravity for “the vibe was heavy” in a lab report.',
    ['They had not grasped the gravity of publishing a named minor’s address.', 'Physics gravity pulls; metaphorical gravity is how serious the breach is. Keep both readable.'],
    'Seriousness; also the physics force. Adjective: grave. Mix-up: gravitas (dignified manner). Not a mood word in methods.',
    ['seriousness']
  ),
  grievance: L(
    'A grievance is a real cause for complaint, or the formal complaint itself: file a grievance, a legitimate grievance. Grieve is to mourn; grief is the feeling. Complaint is everyday; grievance is often workplace or legal procedure. Do not call a preference for tea a grievance.',
    ['The union’s grievance named unpaid invigilation, not the colour of the chairs.', 'A grievance procedure is the formal track; a moan in the kitchen is not yet one.'],
    'A formal complaint / a justified hurt. Verb of mourning: grieve. Everyday: complaint. Not a trivial preference.',
    ['complaint']
  ),
  groundbreaking: L(
    'Groundbreaking means introducing important new methods or ideas: groundbreaking research. Innovative (this batch) is a close cousin; original is milder. Ground-breaking as two words still appears. It is a strong claim — examiners notice hype. Do not call a new font groundbreaking.',
    ['Call it groundbreaking only if the paper measured what nobody had measured.', 'A groundbreaking ceremony is the literal first spade; academic use is the metaphor.'],
    'Genuinely new and important. Close: innovative. Milder: original. Strong claim: evidence required. Literal: first spade in soil.',
    ['innovative']
  ),
  gruelling: L(
    'Gruelling (US grueling) means extremely tiring and demanding: a gruelling shift, gruelling heat. Exhausting is everyday; arduous (already in the dictionary) is a formal cousin. Gruel is thin porridge — the grim historical joke. Do not call a single steep stairs gruelling.',
    ['A gruelling double marking weekend still needed a second pair of eyes.', 'Arduous stresses difficulty; gruelling stresses what it does to the body and patience.'],
    'Exhaustingly hard (British -ll-). US: grueling. Everyday: exhausting. Formal cousin: arduous. Not one flight of stairs.',
    ['exhausting']
  ),
  guise: L(
    'A guise is an outward show that hides the reality: in the guise of reform, under the guise of safety. Disguise is the everyday cousin and the verb; pretence is a close noun. Guys is informal people — a comic lookalike. Do not write guise for a uniform you are honestly wearing.',
    ['The cut arrived in the guise of a “simplification” of the handbook.', 'Under the guise of consultation they sent a form that could not say no.'],
    'in/under the guise of. Everyday: disguise / pretence. Mix-up: guys (people). Not an honest uniform.',
    ['disguise']
  ),
  gulf: L(
    'A gulf is a wide gap between groups, amounts, or views; also a large sea inlet: a gulf in pay, the Gulf. Gap (already in the dictionary) is everyday and smaller; chasm is more dramatic. Do not call a one-mark difference a gulf.',
    ['A gulf in night-pay between the two sites wrecked any talk of “one team”.', 'The geographical gulf is water; the exam sense is the unbridgeable gap in outcomes.'],
    'A wide gap (figurative); also a sea inlet. Everyday smaller: gap. Dramatic: chasm. Not a tiny difference.',
    ['gap']
  ),
  habitat: L(
    'A habitat is the natural environment of a plant or animal: destroy a habitat, a woodland habitat. Habit (already in the dictionary) is a usual behaviour — a classic mix-up. Home is everyday for people; habitat is ecology. Do not call a student flat a habitat unless you are being wry.',
    ['Draining the marsh destroyed the wader’s last habitat on that coast.', 'A habit is what you do; a habitat is where a species lives. Keep them apart in biology papers.'],
    'Where a species naturally lives. Mix-up: habit (a usual act). People everyday: home. Ecology word, not student housing.',
    []
  ),
  halt: L(
    'To halt is to stop, often suddenly or by order: halt a trial, come to a halt (noun). Stop is everyday; pause is temporary by design. Halt as a noun is the stop itself. Do not halt a sentence in this register — that is stop or break off.',
    ['The regulator halted recruitment after the second serious incident.', 'A halt in the data feed is the noun; a pause in a concert is planned.'],
    'Stop (often abruptly / by order). Noun: a halt / come to a halt. Everyday: stop. Planned short stop: pause.',
    ['stop']
  ),
  harassment: L(
    'Harassment is unwanted behaviour that intimidates, offends, or humiliates: sexual harassment, a harassment policy. Harass is the verb. Teasing can be milder and mutual; abuse is broader. British stress is often on the first syllable. Do not use harassment for a single blunt but professional refusal.',
    ['The code defines harassment; a pattern of comments is logged even if each one “was a joke”.', 'To harass is the verb; a deadline reminder is not harassment because it is the job.'],
    'Unwanted intimidating behaviour. Verb: harass. Milder/mutual: teasing. Policy word: take the definition seriously.',
    []
  ),
  hardship: L(
    'Hardship is severe difficulty, especially poverty or want: financial hardship, hardship funding. Difficulty is everyday and milder; suffering is broader. Hard is the adjective. Do not call a busy Tuesday hardship.',
    ['Travel hardship, not “low motivation”, explained the night-class drop-out.', 'A hardship fund is for rent and fares; it is not a prize for a late essay.'],
    'Severe difficulty / want. Everyday milder: difficulty. Adjective root: hard. Not ordinary busyness.',
    ['difficulty']
  ),
  harness: L(
    'To harness is to control and use a force or resource: harness energy, harness talent. Use is everyday; exploit (already in the dictionary) can mean use fully or use unfairly. A harness (noun) is straps that hold. Do not harness a stapler.',
    ['The scheme harnessed waste heat from the servers instead of dumping it.', 'A climbing harness is the noun; the verb in essays is capture-and-use, not “wear”.',],
    'Capture and use (a force/resource). Noun: straps. Everyday: use. Darker cousin: exploit. Not office stationery.',
    ['use']
  ),
  hazard: L(
    'A hazard is a source of danger: a trip hazard, fire hazard, a health hazard. Risk is the chance of harm; a hazard is the thing that can cause it. Dangerous is the adjective everyday. Haphazard is random — related look, different word. Do not call a mild inconvenience a hazard.',
    ['Loose cables were a trip hazard under the exam desks.', 'Risk assessors name the hazard (the wet floor) and then the likelihood of a fall.'],
    'A source of danger. Contrast: risk (chance of harm). Mix-up: haphazard (random). Everyday adj.: dangerous.',
    ['danger']
  ),
  heed: L(
    'To heed is to take careful notice of a warning or advice (formal): heed a warning, pay heed to. Listen is everyday and can be empty; follow is do what it says. Heedless is the adjective of not caring. Do not heed a biscuit.',
    ['Had they heeded the first audit, the fine would have been a letter, not a ban.', 'Pay heed to + advice is the noun pattern; everyday: take notice of.'],
    'Take notice of (formal). Noun: pay heed to. Everyday: listen / take notice. Opposite adj.: heedless. Not food.',
    ['notice']
  ),
  hence: L(
    'Hence means for this reason (formal), or from now: hence the delay, a week hence. Therefore and so are everyday cousins. Thence is from that place — a rare cousin. Henceforth is from this time on. Do not sprinkle hence into every sentence as decoration.',
    ['The sample was tiny; hence the interval was too wide to publish as fact.', 'Three weeks hence is diary English; hence as “therefore” is the essay sense.'],
    'Therefore (formal); also “from now”. Everyday: so / therefore. Cousin: thence (from there). From now on: henceforth.',
    ['therefore']
  ),
  heritage: L(
    'Heritage is the historic buildings, traditions, and stories passed down: industrial heritage, heritage site. Inheritance is money or property left in a will; heredity is genes. Tradition is everyday and can be living practice. Do not call last year’s logo heritage.',
    ['Listed status saved the mill as industrial heritage, rust and all.', 'An inheritance is a will; heritage is the shared past you cannot put in a bank.'],
    'Inherited culture / historic fabric. Mix-up: inheritance (a will); heredity (genes). Everyday: tradition. Not a new brand.',
    []
  ),
  hierarchy: L(
    'A hierarchy is a ranking of people or things: a hierarchy of needs, organisational hierarchy. Hierarchical is the adjective. Rank is everyday; pecking order is informal. Anarchy is no ruler — not a precise opposite. Do not deny a hierarchy exists because the organogram says “flat”.',
    ['When the budget was signed, the “flat” team still had a hierarchy.', 'A hierarchy of evidence in medicine is a ranking of study types, not of people.'],
    'A ranked order. Adjective: hierarchical. Everyday: rank. Informal: pecking order. “Flat” teams still have one at money-time.',
    ['ranking']
  ),
  hospitality: L(
    'Hospitality is generous care of guests, or the hotel and catering industry: conference hospitality, hospitality management. Hospital (already in the dictionary) treats the sick — related root, different job. Welcome is everyday. Do not bill rewriting a paper as hospitality.',
    ['Hospitality meant a room and a meal, not a ghost-writer for the keynote.', 'The hospitality sector is hotels and catering; a hospital is medicine.'],
    'Care of guests; also the hotel/catering trade. Mix-up: hospital. Everyday: welcome. Not writing someone else’s essay.',
    []
  ),
  hostage: L(
    'A hostage is a person held to force someone else to act; also, figuratively, something trapped (a hostage to fortune): hold hostage, a hostage to the password list. Prisoner is everyday and wider. Host (already in the dictionary) welcomes guests — a vicious lookalike. Do not call a delayed train a hostage situation.',
    ['The spare admin password was a hostage to whoever photocopied the cupboard list.', 'A hostage to fortune is a promise that can be used against you later.'],
    'A person held to force a deal; figurative: trapped / a hostage to fortune. Mix-up: host (welcomes guests). Not a late train.',
    []
  ),
  hostile: L(
    'Hostile means unfriendly, aggressive, or strongly opposed: a hostile question, hostile to the plan. Unfriendly is everyday; hostility (below in spirit) is the noun. Hostel (already in the dictionary) is cheap lodging. Hostile takeover is business English. Do not call a fair hard question hostile just because it stung.',
    ['A hostile amendment tried to kill the night-bus subsidy in one vote.', 'Unfriendly is milder; hostile is opposition with an edge. Mix-up: hostel (lodging).'],
    'Unfriendly / opposed. Noun: hostility. Everyday: unfriendly. Mix-up: hostel. A hard fair question is not automatically hostile.',
    ['unfriendly']
  ),
  humanitarian: L(
    'Humanitarian means concerned with reducing suffering and protecting dignity: humanitarian aid, a humanitarian crisis. Humane is kind; human (already in the dictionary) is the species. A humanitarian (noun) is a person in that work. Do not rebrand a trade corridor as humanitarian without the protection mandate.',
    ['A humanitarian corridor is a protected route for civilians, not a cheaper freight lane.', 'Humane killing of an animal is kindness; humanitarian work is organised relief for people.'],
    'Aimed at relieving human suffering. Close adj.: humane (kind). Noun: a humanitarian. Mix-up: human. Not a marketing sticker on trade.',
    []
  ),
  humanity: L(
    'Humanity is people as a whole, or the quality of being kind and humane: a crime against humanity, show humanity. Humankind is a close cousin of the “people” sense; kindness is everyday for the virtue. Humanities are the academic subjects (history, literature). Do not write humanity where you mean one clinic’s patients.',
    ['The report is about one ward’s logs, not a sermon on humanity.', 'The humanities (plural) are subjects; humanity (singular) is the species or the kindness.'],
    'The human species; also kindness. Academic plural: the humanities. Everyday virtue: kindness. Not a substitute for your actual sample.',
    []
  ),
  hybrid: L(
    'Hybrid means combining two types: a hybrid exam, a hybrid vehicle. Mixed is everyday; blend is a close cousin. A hybrid (noun) is the thing itself. Cross-breed is biology. Do not call a document with two fonts a hybrid system.',
    ['A hybrid paper (online task plus invigilated hall) split the cohort’s IT luck.', 'A hybrid car is two power sources; a hybrid course is two modes, and both need a plan.'],
    'Combining two types. Noun: a hybrid. Everyday: mixed. Biology cousin: cross-breed. Not two fonts on a slide.',
    ['mixed']
  ),
  hypocrisy: L(
    'Hypocrisy is claiming moral standards your behaviour does not match: accuse someone of hypocrisy, rank hypocrisy. Hypocrite is the person; hypocritical is the adjective. Inconsistency can be non-moral. Irony (later lists) is a twist of meaning, not the same. Do not cry hypocrisy at every change of mind after new evidence.',
    ['A wellbeing slide beside deleted rest days was hypocrisy, not a branding error.', 'A hypocrite preaches what they will not do; a person who updates a view after data is not one.'],
    'Moral double standard. Person: hypocrite. Adjective: hypocritical. Contrast: changing your mind with evidence. Not mere inconsistency.',
    []
  ),
  hypothetical: L(
    'Hypothetical means imagined for argument, not established: a hypothetical case, hypothetically. Hypothesis (already in the dictionary) is the proposed explanation; hypothetical is the adjective of “what if”. Theoretical can mean not yet applied. Do not put a hypothetical in the results table.',
    ['Keep the hypothetical in the discussion; the table only has counts.', 'A hypothesis is what you test; a hypothetical example is a teaching what-if.'],
    'Imagined for the sake of argument. Noun cousin: hypothesis. Adverb: hypothetically. Keep out of “results”. Everyday: imaginary.',
    ['imaginary']
  ),
  ignorance: L(
    'Ignorance is not knowing: ignorance of the rule, wilful ignorance. Ignorant is the adjective (can sound insulting). Stupidity is a different accusation. Ignore (already in the dictionary) is refuse to notice. Do not write ignorance as a polite synonym of “they are stupid”.',
    ['Ignorance of the embargo is still a breach if the PDF said EMBARGO on the cover.', 'Wilful ignorance is choosing not to know; a first-day gap is just newness.'],
    'Lack of knowledge (not stupidity). Adjective: ignorant (tone-careful). Verb cousin: ignore (pay no attention). Legal: ignorance of the rule may not excuse.',
    []
  ),
  illicit: L(
    'Illicit means forbidden by law or rules: illicit trade, illicit sharing. Elicit (already in the dictionary) is draw out a response — same-sounding exam trap. Illegal is against the law; illicit also covers professional or moral bans. Elicit / illicit mix-up is famous. Do not call an ugly shirt illicit.',
    ['Illicit circulation of the paper broke the embargo; elicit a comment is a different verb.', 'Illegal is statute; illicit can be a handbook ban with no criminal charge.'],
    'Forbidden by law or rule. Mix-up: elicit (draw out). Close: illegal (statute). Not a fashion insult.',
    ['illegal']
  ),
  illusion: L(
    'An illusion is a false appearance or idea: an optical illusion, under the illusion that. Delusion (already in the dictionary) is a false belief, often stronger or clinical. Allusion is a hint at another text — a classic mix-up. Do not call a proven finding an illusion because you dislike it.',
    ['Cheap fares created an illusion of travel without carbon or queues.', 'An allusion is a reference; an illusion is a false appearance. Delusion is a gripped false belief.'],
    'A false appearance/idea. Mix-up: allusion (a reference); delusion (a false belief). Optical illusion is the literal cousin.',
    []
  ),
  immerse: L(
    'To immerse is to put completely in liquid, or to involve yourself deeply: immerse in work, immersed in the archive. Dip is lighter; drown is fatal. Immersion is the noun (language immersion). Do not immerse a phone on purpose unless it is the test.',
    ['She immersed herself in the 1998 box files until the finding was boringly clear.', 'Language immersion is the noun; a lab immersion heater is the literal device.'],
    'Plunge into liquid or into work. Noun: immersion. Lighter: dip. Language: immersion course. Not a damaged phone as a writing flex.',
    []
  ),
  imminent: L(
    'Imminent means about to happen, usually of something important or threatening: imminent closure, an imminent storm. Immediate (related look) is without delay, not necessarily soon-to-arrive. Eminent is distinguished; immanent is philosophical “dwelling within” — a triple trap. Do not call a conference next year imminent.',
    ['Closure was imminent once the second lab failed the unannounced visit.', 'An eminent professor is distinguished; an imminent deadline is about to hit. Immanent is philosophy.'],
    'About to happen. Mix-ups: immediate (now); eminent (distinguished); immanent (in philosophy). Not “sometime next year”.',
    []
  ),
  impair: L(
    'To impair is to weaken a function or quality: impair judgement, visually impaired. Damage is everyday and can be a smash; impair is often of sight, hearing, or performance. Impairment is the noun. Repair is the lookalike opposite. Do not impair a biscuit.',
    ['A sleepless night impaired her marking more than the noisy hall did.', 'Visually impaired is the set phrase; “impaired the biscuit” is not English you want.'],
    'Weaken a function. Noun: impairment. Everyday: damage. Mix-up: repair. Set phrase: visually/hearing impaired.',
    ['weaken']
  ),
  impose: L(
    'To impose is to force a rule, tax, or burden onto people: impose a freeze, impose on someone’s time. Force is everyday; introduce can be neutral. Imposing is the adjective (impressive in size). Do not impose a suggestion that people may refuse — that is offer.',
    ['The board imposed a hiring freeze without asking the night rotas.', 'To impose on a colleague is to take unfair advantage of their time; to impose a tax is official.'],
    'Force a rule/burden on people; also impose on (take advantage). Adjective: imposing (impressive). Everyday: force. Not a voluntary offer.',
    []
  ),
  impulse: L(
    'An impulse is a sudden urge to act, or a short physical/electrical push: on impulse, an impulse purchase, a nerve impulse. Instinct (often taught nearby) is a deeper built-in tendency. Impulsive is the adjective. Do not write impulse for a year’s planned campaign.',
    ['On impulse she hit send; the version that survived had waited a night.', 'A nerve impulse is physiology; an impulse buy is the shop sense examiners also know.'],
    'A sudden urge; also a short pulse. Adjective: impulsive. Phrase: on impulse. Deeper cousin: instinct. Not a year-long plan.',
    ['urge']
  ),
  incidence: L(
    'Incidence is how often something (usually unwelcome) occurs in a population or period: the incidence of fraud, a high incidence. Incident (already in the dictionary) is one event. Prevalence is how common it is at a snapshot. Coincidence is chance alignment. Do not write incidence for one accident.',
    ['The incidence of late scripts rose after the portal’s weekend crash.', 'One incident is a single event; incidence is the rate. Prevalence is “how common now”.'],
    'The rate of occurrence. Mix-up: incident (one event); coincidence (chance). Epidemiology cousin: prevalence. Not one accident.',
    ['rate']
  ),
  inclination: L(
    'An inclination is a tendency or a wish to do something: have no inclination to, an inclination towards. Incline is the verb (I incline to agree) or a slope. Preference is everyday; bias can be unfair. Do not call a legally binding duty an inclination.',
    ['She had no inclination to put corridor gossip in the minutes.', 'An incline is a slope; an inclination is a leaning of will. I am inclined to… is the verb phrase.'],
    'A tendency / a wish. Verb: incline / be inclined to. Everyday: preference. Slope noun: incline. Not a legal duty.',
    ['tendency']
  ),
  inclusive: L(
    'Inclusive means including all that is mentioned, or (of a price) with charges in: Monday to Friday inclusive, inclusive of VAT, an inclusive policy (not shutting people out). Include is the verb; inclusion is the noun. Exclusive is the opposite pole. Do not write inclusive for “nicely worded” with no who-is-in test.',
    ['The fee is inclusive of printing; travel is extra, which should be on the poster.', 'An inclusive shortlist is who got through the door, not a slogan on a mug.'],
    'Including all mentioned; of prices, all charges in. Noun: inclusion. Opposite: exclusive. Policy sense needs a real who-is-in test.',
    []
  ),
  incompatible: L(
    'Incompatible means unable to work or exist together: incompatible software, incompatible with the protocol. Compatible (already in the dictionary) is the positive. Clashing is everyday. Incompatibility is the noun. Do not call two people incompatible in a lab book unless you mean methods or data, not gossip.',
    ['The two builds were incompatible, so the shared spreadsheet died on Friday.', 'A finding incompatible with the model is science; “incompatible personalities” is a different register.'],
    'Cannot work together. Opposite: compatible. Noun: incompatibility. Everyday: clashing. Keep gossip out of methods.',
    []
  ),
  incorporate: L(
    'To incorporate is to include something as part of a whole: incorporate feedback, incorporate an erratum. Include is everyday; integrate (already in the dictionary) stresses making it work as one. A corporation is a company; incorporated (Inc.) is a legal status. Do not incorporate a biscuit.',
    ['The second edition incorporated the page-12 correction instead of hiding it.', 'Integrate often means systems working as one; incorporate is “build this piece in”.'],
    'Build in as a part. Everyday: include. Cousin: integrate (make into one system). Legal: incorporated company. Not food.',
    ['include']
  ),
  incur: L(
    'To incur is to bring a cost, debt, or penalty on yourself through what you do: incur costs, incur a fine. Occur (already in the dictionary) is happen — a lookalike. Pay is everyday and later in the story. Incurred is the usual past form. Do not incur a compliment.',
    ['Weekend overtime will incur a cost the grant line cannot meet.', 'A delay occurred (happened); a penalty was incurred (brought on by the delay). Keep the verbs apart.'],
    'Bring a cost/penalty on yourself. Mix-up: occur (happen). Everyday later: pay. Pattern: incur costs/charges/a fine. Not praise.',
    []
  ),
  indifference: L(
    'Indifference is not caring: indifference to suffering, met with indifference. Indifferent is the adjective; it can also mean mediocre (an indifferent meal). Apathy (already in the dictionary) is a close cousin. Difference is the lookalike. Do not praise “professional indifference” if you mean impartial (already in the dictionary).',
    ['Indifference to the leak — no log, no call — was worse than the leak.', 'An indifferent paper is mediocre; indifference to a safety brief is not caring. Impartial is fair, not uncaring.'],
    'Not caring; also “mediocre” (an indifferent meal). Close: apathy. Mix-up: impartial (fair). Lookalike: difference.',
    ['apathy']
  ),
  indispensable: L(
    'Indispensable means you cannot do without it: an indispensable spare, indispensable to the rota. Essential and necessary are everyday cousins. Dispensable is the rare opposite (can be done without). Do not call a favourite mug indispensable in a risk assessment.',
    ['A spare invigilator is indispensable on a storm Monday; a third logo is not.', 'Essential is the everyday twin; indispensable is the “remove it and the system fails” test.'],
    'Cannot be done without. Everyday: essential / necessary. Opposite: dispensable. Test: remove it and the job fails.',
    ['essential']
  ),
  induce: L(
    'To induce is to cause or persuade something to happen: induce a change, induce labour (medicine). Deduce (already in the dictionary) is reason from evidence — a famous pair. Cause is everyday; persuade is the people sense. Induction is the noun (also a welcome week). Do not induce a footnote.',
    ['A lower evening fee induced enrolments the slogan had not.', 'Deduce the thief from the badge log; induce vomiting is medicine. Keep the pair in exam muscle memory.'],
    'Bring about / persuade. Mix-up: deduce (infer). Noun: induction (also staff induction). Everyday: cause. Medicine: induce labour.',
    ['cause']
  ),
  infamous: L(
    'Infamous means well known for something bad: an infamous error, infamous for delay. Famous is everyday and can be positive; notorious (already in the dictionary) is a close cousin. Infamy is the rare noun. The stress is on the first syllable. Do not call a quiet local failure infamous.',
    ['The infamous footnote printed 2019 in every reprint of a 2021 study.', 'Famous can be admiration; infamous is fame for the wrong reason. Notorious is the close cousin.'],
    'Famous for something bad. Close: notorious. Everyday positive: famous. Noun: infamy. Stress: IN-fə-məs. Not a private mishap.',
    ['notorious']
  ),
  inferior: L(
    'Inferior means lower in quality or rank: inferior to the original, an inferior copy. Worse is everyday; superior is the opposite. Infer (already in the dictionary) is conclude from evidence — related look. Inferiority is the noun. Do not call a person inferior in academic prose; talk about the work.',
    ['A photocopy is inferior to the wet-ink original when the auditors come.', 'Infer the cause from the log; inferior describes rank or quality. Superior is the opposite pole.'],
    'Worse / lower in rank (inferior to). Opposite: superior. Mix-up: infer (conclude). Everyday: worse. Prefer “inferior work”, not “inferior people”.',
    ['worse']
  ),
  influential: L(
    'Influential means able to shape what others think or do: an influential paper, influential in the field. Influence (already in the dictionary) is the noun/verb. Powerful can be force; influential can be quiet. Do not call a viral meme influential in a literature review without a citation trail.',
    ['An influential blog still needs a peer-reviewed source beside it in the essay.', 'She was influential in the rewrite without being loud in the meeting.'],
    'Able to shape views or events. Noun/verb: influence. Close: powerful (can be force). Viral ≠ automatically citable.',
    []
  ),
  ingenious: L(
    'Ingenious means cleverly inventive: an ingenious fix, ingenious design. Genius is extraordinary ability — related root. Ingenuous means innocent and frank (disingenuous is already in the dictionary) — the cruel mix-up. Clever is everyday. Do not call a patched-together mess ingenious unless it actually solves the constraint.',
    ['An ingenious air-gap stopped the leak; a pile of tape would not have been the word.', 'Ingenuous is frank/naive; ingenious is clever. Disingenuous is dishonestly pretending.'],
    'Cleverly inventive. Mix-up: ingenuous (frank/naive); genius (rare ability). Everyday: clever. The fix must actually work.',
    ['clever']
  ),
  inhibit: L(
    'To inhibit is to hold a process or person back: inhibit growth, inhibit sleep. Prohibit (already in the dictionary) is forbid by rule. Hinder is a close cousin; prevent is stronger. Inhibition is the noun (also psychology). Do not inhibit a sandwich.',
    ['Street lighting inhibited some crime and displaced the rest to the side road.', 'Prohibit is a ban; inhibit is make less likely. A shy inhibition is the psychology noun.'],
    'Hold back / make less likely. Noun: inhibition. Contrast: prohibit (forbid). Close: hinder. Everyday: hold back. Not food.',
    ['hinder']
  ),
  initiate: L(
    'To initiate is to start something, often official: initiate an inquiry, initiate a recall. Start and begin are everyday; launch is public. Initiative (already in the dictionary) is a plan or the quality of acting first. An initiate (noun) is a new member of a group. Do not initiate a cup of tea.',
    ['Only legal can initiate the product recall; a tweet is not the start.', 'Take the initiative is the noun of daring; initiate the procedure is the verb of starting it.'],
    'Begin (often formally). Noun mix-up: initiative (a scheme / get-up-and-go). Everyday: start. New member: an initiate. Not tea.',
    ['begin']
  ),
  innovative: L(
    'Innovative means using new ideas or methods: an innovative design, innovative teaching. Innovation (already in the dictionary) is the noun. Novel is new; groundbreaking (this batch) is stronger hype. Do not stamp innovative on a recolour of last year’s form.',
    ['The sampling was innovative; the write-up still needed a plain n and a date.', 'Innovation is the noun; an innovative method should still be replicable, not just new-looking.'],
    'New in a useful way. Noun: innovation. Stronger hype: groundbreaking. Everyday: new. Recolouring a form is not enough.',
    ['new']
  ),
}
