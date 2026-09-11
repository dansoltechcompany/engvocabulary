const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2V = {
  tackle: L(
    'To tackle is to deal with a difficult problem, or (sport) to stop a player with the ball: tackle overcrowding; tackle the question. Address is the essay twin; handle is everyday. The briefing asks how the council will tackle waiting lists. Mix-up: tackle as equipment (fishing tackle); tickle is a light touch. Do not write tackle for a tiny admin job with no difficulty.',
    ['The briefing asks how the council will tackle waiting lists, not reprint a slogan.', 'A late tackle in the PE source still went in the incident log, which is the sport sense.'],
    'tackle + problem / issue / question; tackle overcrowding. Essay twin: address. Sport: a tackle. Trap: fishing tackle / tickle. News, citizenship, and sport. Deal with something hard, not a trivial chore.',
    ['address']
  ),
  teamwork: L(
    'Teamwork is people working together to get a result (usually uncountable): effective teamwork; a teamwork task. Team is the group (already in the dictionary); cooperation is a close twin. Credit teamwork in the write-up, then name who did which role. Mix-up: teamwork vs team-building (an activity day). Do not write “a teamwork” as a countable event.',
    ['Credit teamwork in the write-up, then name who logged the n.', 'Poor teamwork, not a missing formula, sank the group practical, which is the process sense.'],
    'effective / poor teamwork; a teamwork task. Uncountable. Group: team. Close: cooperation. Trap: team-building. PE, projects, and orals. Working together, not a single star player.',
    ['cooperation']
  ),
  technological: L(
    'Technological means to do with scientific machines, systems, or methods: technological change; a technological fix. Technology is the noun (already in the dictionary); technical is about skill or specialist detail (already elsewhere). Map technological change in the industry case, not a gadget advert. Mix-up: technical / technician (already in the dictionary). Do not call a handwriting tip technological.',
    ['Map technological change in the industry case, not a gadget advert.', 'A technological fix still needs a cost line, which is the “machine as solution” sense.'],
    'technological change / advance / fix; technologically. Noun: technology. Trap: technical / technician. Geography, history, and news. Of machines and systems, not merely “skilled”.',
    []
  ),
  temper: L(
    'Temper is a tendency to become angry, or a short burst of anger: lose your temper; a quick temper. Temperament is someone’s usual mood (already in the dictionary); temperature is heat (already elsewhere). As a verb, temper a claim means make it less extreme. Mix-up: temperament / temperature / temple. Do not write temper for a long-term personality profile.',
    ['He lost his temper in the hearing; the minutes still recorded the vote.', 'Temper the conclusion; the n is twelve, which is the moderate-a-claim sense.'],
    'lose / keep your temper; a quick temper; temper a claim. Usual mood: temperament. Trap: temperature. News, orals, and evaluations. Anger, or make less extreme — specify.',
    []
  ),
  tempt: L(
    'To tempt is to make someone want to do something, often unwise: tempt someone to cheat; be tempted by. Temptation is the noun (already in the dictionary); attempt is to try (already elsewhere). Do not be tempted to pad the bibliography. Mix-up: attempt / contempt. Do not write tempt for a formal offer with no pull towards risk.',
    ['Do not be tempted to pad the bibliography with unread titles.', 'Low prices tempted shoppers into debt, the case study said, which is the lure sense.'],
    'tempt + someone + to; be tempted by / to. Noun: temptation. Trap: attempt. Exams, news, and PSHE. Make someone want the unwise option, not merely “ask”.',
    ['lure']
  ),
  tense: L(
    'Tense means nervous and unable to relax; as a noun, a verb form for time: a tense wait; the past tense. Tension is strain between people (already in the dictionary); tight is physical. A tense wait for results is not a grammar term. Mix-up: tense vs tent (camping, already elsewhere); tension. Do not call a relaxed chat tense without a sign in the source.',
    ['A tense wait for the recount featured in the news source, not a grammar drill.', 'Mark past-tense verbs in the extract, which is the language-paper sense.'],
    'a tense atmosphere / wait; feel tense; the past / present tense. Noun of strain: tension. Trap: tent. News, literature, and grammar. Nervous, or a verb form — specify.',
    ['nervous']
  ),
  terrify: L(
    'To terrify is to make someone extremely frightened: terrify the public; a terrifying delay. Terror is the feeling or a campaign of fear (next entries); fear is milder; terrify is stronger than scare. Flood footage terrified viewers, the media paper said. Mix-up: terrific means excellent (easy trap); terrorise is repeated intimidation. Do not write terrify for mild exam nerves.',
    ['Flood footage terrified viewers, the media paper said, not a jump-scare clip.', 'A terrifying near-miss still needs the near-miss log, which is the H&S sense.'],
    'terrify + person; terrifying + noun; terrified of. Milder: scare / frighten. Trap: terrific. News, literature, and H&S. Extreme fear, not “a bit worried”.',
    ['frighten']
  ),
  terror: L(
    'Terror is extreme fear, or violence used to create that fear: in terror; a campaign of terror. Terrorism is the political tactic (already in the dictionary); a terrorist is a person (next entry). Flee in terror featured in the witness statement. Mix-up: error; terrace. Do not write terror for ordinary worry, or as a casual insult.',
    ['Witnesses fled in terror, the inquiry transcript said.', 'A campaign of terror featured in the history source, which is the violence-to-frighten sense — not a film title.'],
    'in terror; a campaign / reign of terror; spread terror. Tactic: terrorism. Person: terrorist. Trap: error. History, news, and literature. Extreme fear, or violence meant to cause it.',
    []
  ),
  terrorist: L(
    'A terrorist is a person who uses violence for political aims to create fear: a terrorist attack; terrorist suspects. Terrorism is the activity (already in the dictionary); terror is the feeling. Name the charge in the source, not a tabloid label. Mix-up: tourist (already in the dictionary); terror. Do not use terrorist as a playground insult in a write-up.',
    ['Name the charge in the source, not a tabloid “terrorist” caption before the verdict.', 'The history paper dates the Emergency laws after the terrorist campaign, which is the political-violence sense.'],
    'a terrorist attack / group / suspect. Activity: terrorism. Feeling: terror. Trap: tourist. News, citizenship, and history. A person using political violence — use the source’s legal wording.',
    []
  ),
  textile: L(
    'A textile is a cloth or woven material, or the industry that makes it: the textile industry; technical textiles. Fabric is everyday; texture is how a surface feels (next entries). Map textile mills in the industrial-revolution enquiry. Mix-up: texture / test. Do not call a finished T-shirt a textile mill.',
    ['Map textile mills in the industrial-revolution enquiry, not a high-street brand.', 'Technical textiles featured in the materials table, which is the engineered-cloth sense.'],
    'the textile industry / mill; technical textiles. Everyday: fabric / cloth. Trap: texture. Geography, history, and design. Cloth or the cloth industry, not a single slogan on a tee.',
    ['fabric']
  ),
  texture: L(
    'Texture is how a surface feels or looks, or the quality of a piece of writing: soil texture; the texture of a poem. Textile is cloth (previous entry); text is written words (already in the dictionary). Describe soil texture in the geography practical, not “it looked nice”. Mix-up: textile / text. Do not write texture for the whole meaning of a poem.',
    ['Describe soil texture in the geography practical, not “it looked nice”.', 'The texture of the monologue is broken syntax, which is the literature sense.'],
    'soil / surface texture; the texture of + text. Cloth: textile. Trap: text. Geography, art, and literature. Feel or surface quality, not the whole argument.',
    []
  ),
  theft: L(
    'Theft is the crime of stealing (usually uncountable in reports): theft of data; a rise in theft. Steal is the verb; a thief is the person; robbery often implies force. Quote the theft figure from the table, not a drama. Mix-up: theft vs thefts (countable incidents); loft. Do not write theft for borrowing with permission.',
    ['Quote the theft figure from the crime table, not a TV plot.', 'Theft of coursework still needs a malpractice form, which is the school sense.'],
    'theft of; a rise / fall in theft; data / identity theft. Verb: steal. Person: thief. Close: robbery (force). News, citizenship, and exams. Stealing as a crime, not a metaphor for “took my idea” without evidence.',
    []
  ),
  thoroughly: L(
    'Thoroughly means completely and with great care: check thoroughly; thoroughly unconvincing. Thorough is the adjective (already in the dictionary); through is movement (already elsewhere). Check the references thoroughly before you submit. Mix-up: through / though / thought. Do not write thoroughly for “quite” or a quick skim.',
    ['Check the references thoroughly before you submit, the handbook said.', 'A thoroughly unconvincing alibi featured in the source, which is the “completely” sense.'],
    'check / wash / revise thoroughly; thoroughly + adjective. Adjective: thorough. Trap: through / though. Exams, science, and news. Completely and carefully, not a glance.',
    ['carefully']
  ),
  thoughtful: L(
    'Thoughtful means showing care for others, or showing careful thinking: a thoughtful gift; a thoughtful analysis. Thought is the noun (already in the dictionary); though is contrast (already elsewhere). A thoughtful analysis still needs a figure. Mix-up: though / through / thoroughly. Do not call a long but empty paragraph thoughtful.',
    ['A thoughtful analysis still needs a named figure, the marker wrote.', 'A thoughtful pause before the answer is not a failed oral, which is the considerate-careful sense.'],
    'a thoughtful + noun; thoughtful of someone. Noun: thought. Trap: though / thoroughly. Literature, orals, and PSHE. Careful thinking or kindness, not mere length.',
    ['considerate']
  ),
  thread: L(
    'A thread is a long thin strand of cotton or similar, or a line of argument / online posts: lose the thread; a discussion thread. Theme is a big idea (already in the dictionary); threat is danger (already elsewhere). Do not lose the thread of the argument in paragraph three. Mix-up: threat / tread. Do not call a whole novel a thread.',
    ['Do not lose the thread of the argument in paragraph three, the marker wrote.', 'A sewing thread featured in the textiles practical, which is the fibre sense.'],
    'lose / pick up the thread; a discussion / email thread; a thread of + argument. Trap: threat / tread. Essays, IT, and DT. A strand, or a line you follow — not the whole theme.',
    []
  ),
  thus: L(
    'Thus means “in this way” or “therefore” (formal): thus reducing waste; thus far. Therefore is a close twin (already in the dictionary); so is everyday. The sample was biased, thus the claim is weak. Mix-up: this / thus far vs so far. Do not start every sentence with thus in an informal oral.',
    ['The sample was biased, thus the claim is weak, the methods comment said.', 'Thus far the pilot has no control group, which is the “up to now” sense.'],
    'thus + -ing / clause; thus far. Close: therefore. Everyday: so. Trap: this. Essays, sciences, and reports. Formal “so / in this way”, not a filler.',
    ['therefore']
  ),
  tide: L(
    'The tide is the regular rise and fall of the sea, or a powerful trend: high tide; turn the tide. Tied is past of tie (already elsewhere); tight is close-fitting. Time the tide for the fieldwork, not a metaphor only. Mix-up: tied / tight / tidy. Do not write tide for a single wave.',
    ['Time high tide for the rocky-shore transect, the geography brief said.', 'A tide of applications crashed the portal, which is the surge-metaphor — still quote the n.'],
    'high / low / incoming tide; turn the tide; a tide of + noun. Trap: tied / tight. Geography, news, and history. Sea level cycle, or a powerful surge — specify.',
    []
  ),
  tighten: L(
    'To tighten is to make something tighter, stricter, or more secure: tighten a screw; tighten the rules. Tight is the adjective (already in the dictionary); taut is stretched tight. The regulator tightened the rules after the leak. Mix-up: titan; lighten is to make less heavy. Do not write tighten for “improve” with no stricter limit.',
    ['The regulator tightened the rules after the leak, the notice said.', 'Tighten the clamp before you heat the flask, which is the physical sense.'],
    'tighten the rules / security / a screw; tighten up. Adjective: tight. Opposite: loosen. Trap: lighten. News, H&S, and practicals. Make stricter or physically tighter, not a vague “boost”.',
    []
  ),
  timber: L(
    'Timber is wood prepared for building (British; often uncountable): a timber frame; timber exports. Wood is everyday; lumber is mainly US. Map timber as an export in the trade table, not a garden fence brand. Mix-up: timber vs timbre (sound quality); temper. Do not write timber for a single twig.',
    ['Map timber as an export in the trade table, not a garden-fence brand.', 'A timber-framed hall featured in the history source, which is the building-material sense.'],
    'timber exports / frame / industry. Everyday: wood. US often: lumber. Trap: timbre. Geography, DT, and history. Building wood (UK), not a stick on the path.',
    ['wood']
  ),
  timely: L(
    'Timely means happening at a suitable or useful moment: a timely warning; timely intervention. On time means not late; time is the noun (already in the dictionary); timetable is a schedule (already elsewhere). A timely reminder still needs a date. Mix-up: timely vs time-ly as two words; timid. Do not call a late essay timely.',
    ['A timely reminder still needs a date on the bulletin, exams said.', 'Timely intervention featured in the safeguarding source, which is the “soon enough to help” sense.'],
    'a timely + noun; timely intervention / reminder. Everyday: on time (not late). Trap: timetable / timid. News, H&S, and evaluations. At the right moment, not merely punctual.',
    []
  ),
  tissue: L(
    'Tissue is a group of similar cells, or thin paper: muscle tissue; a tissue sample. Organ is a body part made of tissues (already in the dictionary); tissues as paper handkerchiefs are everyday. Label the tissue on the slide, not the whole organ. Mix-up: issue; issue of tissues as a pack. Do not call a whole organ a tissue.',
    ['Label the tissue on the slide, not the whole organ, the biology paper said.', 'A box of tissues is not a histology sample, which is the paper sense — specify in the write-up.'],
    'muscle / plant / scar tissue; a tissue sample. Paper: a tissue. Wider unit: organ. Trap: issue. Biology and everyday. Cells of one type, or thin paper — specify.',
    []
  ),
  tone: L(
    'Tone is the mood of a voice or text, or a musical note: a formal tone; tone of voice. Tune is a melody (already in the dictionary); tonic is a drink or a medical term. Comment on the writer’s tone, not only the topic. Mix-up: tune / town / tonne. Do not write tone for the whole argument.',
    ['Comment on the writer’s tone, not only the topic, the language paper said.', 'A sharp tone in the email still went on the complaint file, which is the mood-of-voice sense.'],
    'tone of voice; a formal / ironic tone; set the tone. Trap: tune / tonne. Language papers, music, and emails. Mood of wording, not the whole plot.',
    []
  ),
  tonne: L(
    'A tonne is 1,000 kilograms (British spelling of the metric ton): a tonne of steel; carbon in tonnes. A UK ton (imperial) is different; ton is also informal for “a lot”. Quote tonnes in the emissions table, not “loads”. Mix-up: tone / town / tun. Do not mix tonne and imperial ton in one graph without a note.',
    ['Quote carbon in tonnes in the emissions table, not “loads”.', 'A tonne is 1,000 kg; do not swap it for an imperial ton on the same axis.'],
    'a tonne of; in tonnes; metric tonne. Informal “a lot”: a ton of. Trap: tone. Geography, science, and news. 1,000 kg (UK spelling), not a vague heap.',
    []
  ),
  torture: L(
    'Torture is the act of causing severe pain, often to punish or get information; also to cause great mental pain: allegations of torture; tortured syntax (metaphor). Torment is close for mental suffering; torture is the legal/news word for the crime. Name the treaty clause on torture in the source. Mix-up: tortuous (twisting, already elsewhere at a higher level); extra. Do not use torture as a joke for a hard exam.',
    ['Name the treaty clause on torture in the human-rights source, not a film scene.', 'The marker called the syntax tortured, which is the metaphor — still fix the clauses.'],
    'allegations / a ban on torture; torture + someone. Close: torment. Trap: tortuous / exam-as-joke. Citizenship, history, and news. Severe pain as a crime, not hyperbole for homework.',
    []
  ),
  tough: L(
    'Tough means difficult, strong, or strict: a tough question; tough new rules; tough material. Hard is everyday; difficult is the essay twin; rough is uneven or violent. A tough marking window is not an excuse to skip the n. Mix-up: though / thought / trough. Do not write tough for “chewy food” in an economics paper without the food sense.',
    ['A tough marking window is not an excuse to skip the n, the methods tutor said.', 'Tough new rules on lobbying featured in the bill, which is the strict sense.'],
    'a tough question / decision / material; tough on + crime; toughen. Everyday: hard. Trap: though / thought. News, exams, and science. Difficult, durable, or strict — specify.',
    ['difficult']
  ),
  tourism: L(
    'Tourism is the business of people visiting places for pleasure (usually uncountable): mass tourism; tourism revenue. A tourist is a person (already in the dictionary); a tour is a trip (already elsewhere). Quote tourism revenue in the case study, not a selfie. Mix-up: terrorism (already in the dictionary); tournament. Do not write “a tourism” as a single holiday.',
    ['Quote tourism revenue in the coastal case study, not a selfie caption.', 'Mass tourism strained the footpath, the geography paper said, which is the industry-impact sense.'],
    'mass / sustainable tourism; tourism revenue / jobs. Person: tourist. Trip: tour. Trap: terrorism. Geography and economics. The industry, not one visitor.',
    []
  ),
  trace: L(
    'To trace is to find the origin or path of something, or to copy by drawing over: trace the outbreak; a trace of a chemical. Track is often follow movement (already in the dictionary); trail is a path (next entries). Trace the source of the leak in the methods log. Noun: a trace (a very small amount). Mix-up: track / trait (already in the dictionary). Do not write trace for a full census.',
    ['Trace the source of the leak in the methods log, not a rumour.', 'A trace of lead still needs a units line, which is the tiny-amount sense.'],
    'trace + origin / outbreak / outline; a trace of. Close: track. Trap: trait. Sciences, news, and art. Find a path or a tiny amount, not a complete count.',
    []
  ),
  tragic: L(
    'Tragic means extremely sad, especially involving death or disaster: a tragic accident; a tragic flaw. Tragedy is the noun (already in the dictionary); comic is the opposite in drama. A tragic accident still needs a date in the source. Mix-up: magic; traffic (already elsewhere). Do not call a lost mark tragic in an exam comment.',
    ['A tragic accident still needs a date and a named inquiry in the source.', 'The tragic flaw in the protagonist featured in the set text, which is the literature sense.'],
    'a tragic + noun; tragically. Noun: tragedy. Drama opposite: comic. Trap: traffic / exam hyperbole. News, literature, and history. Disastrous and sad, not “annoying”.',
    []
  ),
  trail: L(
    'A trail is a path, a series of marks left behind, or a route for visitors: a nature trail; a paper trail. Track is rails or a sports path (already in the dictionary); trial is a test or court case (later entries). Follow the paper trail in the audit, not a slogan. Verb: trail (follow, or hang behind). Mix-up: trial / train. Do not write trail for a motorway.',
    ['Follow the paper trail in the audit, not a slogan on the leaflet.', 'A nature trail closed after the landslide, which is the path sense.'],
    'a paper / audit / nature trail; trail behind; trail + suspect. Close: track. Trap: trial / train. Geography, history, and news. A path or a sequence of clues, not a dual carriageway.',
    ['path']
  ),
  transit: L(
    'Transit is the process of moving people or goods through a place (often uncountable): in transit; public transit (US; UK often public transport). Transition is a change of state (already in the dictionary); transport is the system (already elsewhere). Goods in transit still need a customs note. Mix-up: transition / translation (already in the dictionary). Do not write transit for a permanent move of home (that is relocation).',
    ['Goods in transit still need a customs note, the case study said.', 'In transit between terminals the sample warmed, which is the movement-through sense.'],
    'in transit; transit of / through; a transit visa. Close (US): public transit. Trap: transition / translation. Geography, business, and news. Movement through, not a change of system.',
    []
  ),
  transplant: L(
    'A transplant is an operation to move an organ or tissue, or the organ itself; as a verb, to move a plant or an organ: a kidney transplant; transplant seedlings. Transfer is a wider move (already in the dictionary); implant is to put something in. Waiting times for a transplant featured in the health chart. Mix-up: transport; transpire. Do not write transplant for moving a file on a computer.',
    ['Waiting times for a kidney transplant featured in the health-inequality chart.', 'Transplant the seedlings after the frost date, which is the horticulture sense.'],
    'a heart / kidney / organ transplant; transplant + organ / plant. Wider move: transfer. Trap: transport. Biology, health, and gardening. Move living tissue, not a USB file.',
    []
  ),
  trap: L(
    'A trap is a device or plan to catch someone, or a mistake people fall into: a common trap; set a trap. Trick is deception (later entries); catch is everyday. A common trap is treating correlation as cause. Verb: trap (catch and hold). Mix-up: trip (already in the dictionary); tape. Do not call a fair exam question a trap without a wording issue.',
    ['A common trap is treating correlation as cause, the methods tutor said.', 'A speed trap featured in the road-safety source, which is the catching device.'],
    'a common / exam trap; set / fall into a trap; trap + someone. Close: trick (deceive). Trap: trip. Methods, news, and H&S. A catch, or a predictable mistake — specify.',
    []
  ),
  tremble: L(
    'To tremble is to shake slightly from fear, cold, or weakness: tremble with fear; a trembling hand. Shake is wider; shiver is often from cold; rumble is a low sound. Her hands trembled as she read the result. Mix-up: tumble (fall); assemble. Do not write tremble for a building collapsing (that is collapse / shake in an earthquake report).',
    ['Her hands trembled as she read the result, the narrative said.', 'The aftershock made the lamps tremble, which is the slight-shake sense, not a full collapse.'],
    'tremble with + fear / cold; a trembling + noun. Wider: shake. Cold: shiver. Trap: tumble. Literature, news, and orals. A slight shake, not a fall.',
    ['shake']
  ),
  trend: L(
    'A trend is a general direction of change: an upward trend; a trend towards. Tendency is a likelihood of behaviour (already in the dictionary); pattern is wider. Describe the trend in the graph, not a single outlier. Mix-up: tend (already elsewhere); trendy is fashion slang. Do not call one data point a trend.',
    ['Describe the trend in the graph, not a single outlier, the geography paper said.', 'A trend towards later leaving ages featured in the table, which is the direction-of-change sense.'],
    'an upward / downward trend; a trend towards / in. Close: pattern. Behaviour-likelihood: tendency. Trap: trendy / one point. Graphs, news, and economics. A direction over time, not a blip.',
    ['pattern']
  ),
  trial: L(
    'A trial is a court process to decide guilt, or a test of something new: a clinical trial; stand trial. Trail is a path (previous entries); try is the everyday verb (already in the dictionary). Quote the trial date, not a headline adjective. Mix-up: trail / try. Do not write trial for a final exam sitting.',
    ['Quote the trial date in the court report, not a headline adjective.', 'A clinical trial still needs a control group, which is the test-of-a-treatment sense.'],
    'stand trial; a clinical / field trial; on trial. Trap: trail / try. Law, science, and news. A court case or a structured test, not a school exam.',
    []
  ),
  tribal: L(
    'Tribal means to do with a tribe, or (disapproving) fiercely loyal to a group: tribal boundaries; tribal politics. Tribe is the noun (next entry); ethnic is a wider exam word. Map tribal boundaries only if the source uses that term. Mix-up: tribal vs triable (can be tried in court); trivial (later). Do not use tribal as a casual insult for a sports crowd in a serious paper unless the source does.',
    ['Map tribal boundaries only if the source uses that term, the history brief said.', 'Tribal loyalty in the party featured in the politics extract, which is the faction sense — still name the faction.'],
    'tribal boundaries / leaders / politics; tribally. Noun: tribe. Trap: trivial / triable. History, geography, and politics. Of a tribe, or partisan loyalty — handle with the source’s wording.',
    []
  ),
  tribe: L(
    'A tribe is a group of people who share ancestry, culture, or (looser) a common interest: a named tribe; a tribe of fans (informal). Ethnic group is often safer in modern exam writing; tribal is the adjective. Name the group as the source names it. Mix-up: tribe vs bribe; tribute (next). Do not use tribe as a joke for a friendship group in a geography paper.',
    ['Name the group as the source names it; do not write “a tribe” if the extract says nation or clan.', 'A tribe of regulars kept the club going, which is the informal-group sense — avoid it in formal geography.'],
    'a named tribe; tribe of (informal). Adjective: tribal. Often safer: ethnic group / nation (as the source). Trap: tribute. History and anthropology. A people with shared identity; match the source’s term.',
    []
  ),
  tribute: L(
    'A tribute is something done or said to show respect, or a payment to a stronger power: pay tribute; a tribute act. Tribe is a people (previous); contribution is money or help towards a shared cost. The obituary paid tribute to the campaigner. Mix-up: tribute vs tributary (a river branch); tribe. Do not write tribute for a tax you owe HMRC.',
    ['The obituary paid tribute to the campaigner, the source said.', 'Tribute paid to the empire featured in the history paper, which is the forced-payment sense.'],
    'pay tribute to; a tribute to + person; a tribute act. River: tributary. Trap: tribe / tax. News, history, and literature. Respect, or a historic payment to a ruler — specify.',
    []
  ),
  trick: L(
    'To trick is to deceive someone; as a noun, a cunning act or a skilled move: trick someone into; a trick question. Trap is a catching device or a predictable mistake (previous); cheat is breaking rules. Do not trick respondents with a leading item. Mix-up: track; treat (already elsewhere). Do not call a fair hard question a trick without biased wording.',
    ['Do not trick respondents with a leading item, the methods tutor said.', 'A magic trick in the assembly is not a sampling method, which is the entertainment sense.'],
    'trick + someone + into; a trick question; play a trick. Close: deceive / trap. Trap: track / treat. Methods, news, and orals. Deceive, or a clever move — not every difficult item.',
    ['deceive']
  ),
  tricky: L(
    'Tricky means difficult to deal with or likely to go wrong: a tricky question; a tricky junction. Difficult is the essay twin; trick is deceive (previous). A tricky junction featured in the driving source. Mix-up: sticky; track. Do not write tricky for “I did not revise”.',
    ['A tricky junction featured in the driving source, not a riddle.', 'A tricky clause in the contract still needs a quoted line, which is the legally-awkward sense.'],
    'a tricky + noun; tricky to + verb. Essay twin: difficult / awkward. Noun/verb: trick. Trap: sticky. Driving, law, and exams. Awkward to handle, not an excuse for a blank page.',
    ['awkward']
  ),
  trivial: L(
    'Trivial means too small or unimportant to matter: a trivial error; trivialise (verb). Trifle is a dessert or “a trifle” meaning slightly; tribal is of a tribe (previous). A missing n is not trivial. Mix-up: tribal / trivia (quiz facts). Do not call a safeguarding failure trivial.',
    ['A missing n is not trivial, the methods tutor said.', 'Trivia quiz facts are not a literature argument, which is the “unimportant details” warning.'],
    'a trivial + noun; trivialise. Opposite: significant / serious. Trap: tribal / trivia. Evaluations, news, and methods. Too small to matter — check it really is.',
    ['unimportant']
  ),
  troop: L(
    'A troop is a group of soldiers (often troops in the plural) or a group of scouts/monkeys: deploy troops; a troop of baboons. Troupe is a group of performers (note the u). Army is the whole force. The source counts troops deployed, not a video-game score. Mix-up: troupe / trip / troop vs troup. Do not write troop for one soldier (that is a soldier / a private).',
    ['The source counts troops deployed, not a video-game score.', 'A troop of scouts featured in the local-history extract, which is the organised-group sense.'],
    'troops; deploy / withdraw troops; a troop of. Performers: troupe. Trap: trip. News, history, and biology. Soldiers (usually plural) or a named group, not one person.',
    []
  ),
  trouble: L(
    'Trouble is problems, difficulty, or a cause of worry (often uncountable): in trouble; trouble with. Issue is more formal; problem is everyday. The plant is in trouble if the cooling fails. Mix-up: travel (already in the dictionary); troubled as adjective. Do not write “a trouble” for every small snag; prefer a problem / an issue when countable.',
    ['The plant is in trouble if the cooling fails, the case study said.', 'Trouble with the sampling frame, not the printer, sank the survey, which is the difficulty sense.'],
    'in trouble; trouble with; cause / spell trouble. Countable twin: a problem / an issue. Trap: travel. News, H&S, and orals. Difficulty or danger, not a holiday.',
    ['difficulty']
  ),
  tropical: L(
    'Tropical means of the tropics, the hot region near the equator: a tropical climate; tropical rainforest. Topic is a subject (already in the dictionary); topographic is about relief maps. Map a tropical rainforest biome, not a houseplant brand. Mix-up: topical (in the news); topic. Do not call a warm British summer tropical without the latitude.',
    ['Map a tropical rainforest biome, not a houseplant brand, the geography paper said.', 'Tropical storms featured in the hazard case, which is the climate-zone sense.'],
    'a tropical climate / rainforest / storm; the tropics. Trap: topic / topical. Geography and science. Of the equatorial belt, not merely “quite hot”.',
    []
  ),
  truly: L(
    'Truly means really, or in a truthful way: truly independent; yours truly (letter formula). True is the adjective (already in the dictionary); truth is the noun (next entries). A truly random sample still needs a method. Mix-up: truly vs truly as a filler “like, truly”. Do not use truly to replace a figure.',
    ['A truly random sample still needs a method, the tutor said.', 'Yours truly is a letter formula, which is not a methods comment.'],
    'truly + adjective; yours truly. Adjective: true. Noun: truth. Trap: filler “truly”. Essays and letters. Really / truthfully, not a substitute for data.',
    ['really']
  ),
  trustee: L(
    'A trustee is a person legally responsible for money or property held for others, or a board member of a charity/school: a trustee of the academy; board of trustees. Trust is belief or a legal arrangement (already in the dictionary); a trustee is the person. Name the trustee who signed, not “the school”. Mix-up: trusty (loyal); tuition (already elsewhere). Do not call every volunteer a trustee.',
    ['Name the trustee who signed the accounts, not “the school” as a blob.', 'A board of trustees featured in the governance source, which is the charity/school sense.'],
    'a trustee of; board of trustees; trustee meeting. Arrangement/belief: trust. Trap: trusty / tuition. Citizenship, news, and finance. A legal steward, not a fan or a donor only.',
    []
  ),
  truth: L(
    'Truth is what is true; the real facts (often uncountable): tell the truth; a grain of truth. True is the adjective (already in the dictionary); truly is the adverb (previous). Quote the truth as the source states it, then evaluate. Mix-up: trough; truce. Do not write “a truth” for every opinion.',
    ['Quote the truth as the source states it, then evaluate the bias.', 'A grain of truth in the rumour still needs a named document, which is the “partly true” sense.'],
    'the truth; tell / speak the truth; a grain of truth. Adjective: true. Adverb: truly. Trap: opinion-as-truth. News, RS, and orals. Facts that hold, not a slogan.',
    []
  ),
  tumour: L(
    'A tumour is a lump of extra cells, which may be benign or malignant (British spelling): a brain tumour; tumour size. Cancer is the disease name when malignant; growth is vaguer. Quote tumour size from the table, not a headline scare. Mix-up: rumour; humor/humour. US spelling: tumor. Do not diagnose a classmate in an essay.',
    ['Quote tumour size from the table, not a headline scare.', 'A benign tumour still needs the histology line, which is the non-cancerous sense.'],
    'a benign / malignant tumour; tumour size / cells. Disease name (malignant): cancer. US: tumor. Trap: rumour. Biology and health. Extra cell mass — use the source’s clinical wording.',
    []
  ),
  tyre: L(
    'A tyre is the rubber ring around a wheel (British spelling): a flat tyre; tyre pressure. Tire is US spelling, and also the verb “become tired” (already elsewhere as tired). Log tyre pressure in the practical, not a brand slogan. Mix-up: tired / tier (a level). Do not write tire for the car part in UK exam papers.',
    ['Log tyre pressure in the practical, not a brand slogan.', 'A blow-out tyre closed the outside lane, the traffic source said, which is the road-safety sense.'],
    'a flat / spare tyre; tyre pressure / tread. US spelling: tire. Verb “grow weary”: tire. Trap: tier / tired. Driving, physics, and news. The rubber ring (UK -yre).',
    []
  ),
  turnover: L(
    'Turnover is the value of goods a firm sells in a period, or the rate at which people leave a job: annual turnover; staff turnover. Turn over is a phrasal verb (pages, control); leftover is remaining food. Quote turnover in £, not a slogan. Mix-up: leftover / turn over / turnout (already at a higher level). Do not confuse turnover with profit (profit is after costs).',
    ['Quote annual turnover in £ in the accounts extract, not a slogan.', 'Staff turnover rose after the restructure, which is the people-leaving sense — still give the rate.'],
    'annual / sales turnover; staff turnover. Not the same as profit. Phrasal: turn over. Trap: leftover / turnout. Business and news. Sales value, or how fast staff leave — specify.',
    []
  ),
}
