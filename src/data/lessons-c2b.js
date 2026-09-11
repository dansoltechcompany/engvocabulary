const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2B = {
  acrimonious: L(
    'Acrimonious means an argument has turned bitter — not just loud, but sour and personal. Angry is everyday; heated can still be fair. Writers use it for debates, divorces, and splits that leave a taste: an acrimonious meeting. In speech, say it turned nasty or bitter; acrimonious sounds like a news report. Save it for the tone of the exchange, not for one sharp sentence.',
    ['Talks ended in an acrimonious exchange of letters.', 'What began as a budget dispute grew acrimonious.'],
    'acrimonious debate/split. Bitter, not merely loud. Everyday: bitter / nasty. News and essays.',
    ['bitter']
  ),
  apocryphal: L(
    'Apocryphal means a story is probably not true, even though people keep repeating it as if it were. False is too blunt; legendary can still sound admiring. Use it for well-travelled anecdotes (the apocryphal exam story). In conversation, say that’s probably a myth or I doubt that happened; apocryphal is a reader’s word. It does not mean “old” or “religious” in everyday modern use, though the history is biblical.',
    ['The tale of the sleeping invigilator is almost certainly apocryphal.', 'An apocryphal quote keeps appearing under Churchill’s name.'],
    'A repeated story of doubtful truth. Everyday: probably a myth. Not a synonym for ancient.',
    ['mythical']
  ),
  belligerent: L(
    'Belligerent means looking for a fight — hostile in tone or manner, ready to argue. Aggressive is everyday; argumentative can mean you merely enjoy debate. A belligerent tone shuts a discussion down. In law and history it can also mean “warring (party).” In speech, spoiling for a fight or hostile is safer; belligerent can sound like a police report. Do not use it for firm but polite disagreement.',
    ['A belligerent email is a poor way to ask for an extension.', 'He grew belligerent when the figures were questioned.'],
    'Hostile, itching to fight. Everyday: aggressive / hostile. Also (formal): a warring side.',
    ['hostile']
  ),
  cacophony: L(
    'A cacophony is a mix of loud, clashing sounds — unpleasant as a blend, not one single bang. Noise is everyday; din is close and more British-informal. Writers like a cacophony of horns / voices when many sources collide. In speech, a racket or an awful mix of noise will do; cacophony is slightly literary. Do not use it for a quiet disagreement of opinions unless you want a metaphor, and even then once is enough.',
    ['A cacophony of alarms made the station unusable.', 'The soundtrack is a deliberate cacophony, not a mistake.'],
    'a cacophony of + sounds. Harsh mix. Everyday: racket / din. Slightly literary.',
    ['din']
  ),
  demagogue: L(
    'A demagogue is a speaker, usually political, who wins a crowd by inflaming feeling and prejudice rather than by argument. Leader is neutral; populist is related but not always an insult. Use demagogue when the method is manipulation of emotion. It is a charged word — in speech, say he plays on fear unless you are ready to defend the label. Demagoguery (or demagogy) names the style.',
    ['The broadcast was classic demagoguery: simple enemies, no costs.', 'She refused to answer a demagogue with another slogan.'],
    'A crowd-stirrer who skips reason. Strong criticism. Everyday: rabble-rouser (informal). Noun of style: demagoguery.',
    []
  ),
  ennui: L(
    'Ennui is a tired, empty boredom when nothing seems worth doing — more listless than “I’m bored this afternoon.” Boredom is the everyday word; restlessness still has energy. Ennui is a French loan that can sound essay-like or slightly precious in speech; use it in reviews and fiction, or say fed up and drained. It is not a medical diagnosis, and it is not simple sleepiness.',
    ['After the exams, ennui settled over the empty halls.', 'The novel captures suburban ennui without sneering at it.'],
    'Literary/formal for listless boredom. Everyday: boredom / fed up. Easy to sound affected in speech.',
    ['boredom']
  ),
  germane: L(
    'Germane means relevant to the matter in hand — on the point, not a side track. Relevant is the everyday and almost always better word. Germane to the question / to the issue is the pattern, common in meetings and legal English. In conversation, stick to the point; germane can sound like you are chairing a committee. Do not use it as a fancy “related.”',
    ['Keep your footnotes germane to the claim, not decorative.', 'His example was interesting but not germane to the motion.'],
    'germane to + topic. Formal for relevant. Everyday: relevant / on the point. Meeting/legal register.',
    ['relevant']
  ),
  iconoclast: L(
    'An iconoclast attacks cherished beliefs or established methods — originally a breaker of religious images, now anyone who knocks sacred cows. Critic is milder; rebel is broader. Iconoclastic is the adjective (iconoclastic teaching). It can be praise in the arts and a warning in institutions. In speech, she challenges the usual way is clearer; iconoclast is a profile-writer’s label. Do not use it for someone who is merely rude.',
    ['The book is iconoclastic about “natural” talent.', 'Every department claims to want iconoclasts until one arrives.'],
    'Attacker of established ideas. Adjective: iconoclastic. Everyday: someone who challenges sacred cows. Often journalistic.',
    []
  ),
  ineluctable: L(
    'Ineluctable means you cannot get out of it — inescapable, like a fact or a process. Inevitable is the usual, clearer cousin; unavoidable is everyday. Ineluctable is rare and rather grand: ageing as an ineluctable fact. In speech, always say inevitable or you cannot escape it, or you will sound as if you are translating from Latin for fun. Keep it for a deliberate, once-only effect on the page.',
    ['Loss is the ineluctable cost of attaching yourself to people.', 'The plot treats war as ineluctable, which is a political choice.'],
    'Very formal for inescapable. Prefer inevitable in almost all writing. Everyday: unavoidable.',
    ['inevitable']
  ),
  insouciant: L(
    'Insouciant means calmly unworried, sometimes so much so that it looks careless: an insouciant shrug. Casual is everyday; carefree is warmer and less critical. Writers use it for a manner that may charm or irritate. In speech, not bothered or too relaxed is safer; insouciant is a novelistic adjective. Do not confuse it with innocent.',
    ['She was insouciant about the deadline until Friday night.', 'His insouciant grin did not match the missing files.'],
    'Casually unconcerned (can seem careless). Everyday: carefree / not bothered. Literary register.',
    ['carefree']
  ),
  jettison: L(
    'To jettison is to throw something overboard so the rest can survive — now usually figurative: jettison a policy, jettison the old syllabus. Drop and scrap are everyday; abandon is close. The image is still of dumping weight in a crisis, so it is stronger than merely edit. In speech, get rid of or drop will do; jettison is journalistic and slightly dramatic. You jettison cargo or a plan, not a person you mildly dislike.',
    ['They jettisoned three optional modules to save the core course.', 'When the merger failed, he jettisoned the expansion slides.'],
    'Throw overboard (often figurative). Stronger than drop. Everyday: scrap / get rid of. Journalistic.',
    ['abandon']
  ),
  liminal: L(
    'Liminal means on a threshold, between two states — neither the old thing nor the new one yet. In-between is everyday; transitional is a plainer academic cousin. Anthropologists and critics like liminal space / a liminal period (university between school and work). In speech, say in-between or at a turning point; liminal has become fashionable and can sound like coursework if you overuse it. It is not a synonym for “vague.”',
    ['Airports are liminal: you have left, but you have not arrived.', 'The novel stays in a liminal season between war and peace.'],
    'On the threshold between two states. Everyday: in-between. Academic/critical; easy to overuse.',
    ['transitional']
  ),
  maelstrom: L(
    'A maelstrom is a violent whirlpool, and by metaphor a swirl of events or feeling you can hardly steer in: a maelstrom of rumours. Chaos is everyday; turmoil is close. Use the metaphor when motion and confusion mix, not for a quiet mess on a desk (that might be a welter). In speech, chaos or a storm of… is enough; maelstrom is dramatic and slightly literary. One per essay is plenty.',
    ['She stepped out of the press maelstrom into a side street.', 'The market fell into a maelstrom of panic selling.'],
    'Literal whirlpool; usually a metaphor for violent confusion. Everyday: chaos / turmoil. Literary/news.',
    ['turmoil']
  ),
  nascent: L(
    'Nascent means only just beginning to exist: a nascent industry, nascent opposition. New is everyday and broader; emerging is the common news synonym. Nascent stresses “not formed yet,” so it fits an early stage, not a finished product. In speech, just starting or in its early days is clearer. It is a useful essay adjective if you do not pair it with another showy word in the same sentence.',
    ['The city’s nascent cycling culture still lacks safe roads.', 'His nascent interest in Arabic faded after the first grammar book.'],
    'Just coming into being. Everyday: emerging / just starting. Formal/essay register.',
    ['emerging']
  ),
  nefarious: L(
    'Nefarious means wicked in a planned, almost storybook way — criminal or morally rotten. Bad and wrong are everyday; criminal is more precise for law. Writers (and journalists) reach for nefarious schemes / activities when they want a hiss of villainy. In speech it can sound comic-book unless the crime is real; say corrupt or criminal. Do not use it for a rude email.',
    ['Investigators traced a nefarious trade in fake certificates.', 'The plot’s nefarious twist is that the charity was the front.'],
    'Wicked, usually planned. Everyday: criminal / corrupt. Easy to sound theatrical. Schemes/activities.',
    ['wicked']
  ),
  obsequious: L(
    'Obsequious means too eager to please someone more powerful — fawning, not merely polite. Polite is everyday and positive; respectful can be genuine. Obsequious manner / obsequious smile names the excess that makes other people wince. In speech, smarmy or too eager to please is more natural; obsequious is a sharp written judgement. Close cousin of sycophantic, which stresses the hope of gain.',
    ['The waiter’s obsequious hovering made the table tense.', 'Obsequious agreement is not the same as loyalty.'],
    'Fawning towards power. Everyday: too eager to please / smarmy. Written criticism. Close: sycophantic.',
    ['fawning']
  ),
  opprobrium: L(
    'Opprobrium is strong public disapproval — blame with a stain of shame: attract opprobrium, widespread opprobrium. Criticism is everyday and can be fair comment; outrage is more emotional. The word is almost always for a public reaction, not a private telling-off. In speech, a storm of criticism or they were widely condemned; opprobrium is high formal style. Do not use it for a bad review of a restaurant.',
    ['The appointment attracted opprobrium from former colleagues.', 'He seemed surprised by the opprobrium, which made it worse.'],
    'Public shame and blame. Everyday: widespread condemnation. Very formal; usually public, not private.',
    ['condemnation']
  ),
  panacea: L(
    'A panacea is a supposed cure for all problems. Native writers nearly always use it in the negative: there is no panacea; not a panacea for…. Cure-all is the plain synonym. In speech, say it will not fix everything. Using panacea as a positive (“this policy is a panacea”) sounds naïve; the word works because it warns against magic solutions.',
    ['Tablets are no panacea for weak teaching.', 'Do not sell the app as a panacea; it only tracks hours.'],
    'Usually negative: no panacea / not a panacea for. Everyday: cure-all. Warns against one-shot solutions.',
    ['cure-all']
  ),
  parsimonious: L(
    'Parsimonious means extremely unwilling to spend money or resources — mean, in the British sense of stingy. Careful with money can be a virtue; parsimonious is too tight. Mean and stingy are everyday; frugal can still be praise. Writers also use it for explanations that use too few assumptions (a parsimonious model) in science. In speech about people, stingy or tight is clearer and less Latinate.',
    ['A parsimonious host offered water and one biscuit.', 'The model is parsimonious: three variables, no decoration.'],
    'Too sparing (money or means). Everyday: stingy / mean. Also (science): simplest adequate explanation.',
    ['stingy']
  ),
  quixotic: L(
    'Quixotic means noble, romantic, and hopelessly impractical — from Don Quixote tilting at windmills. Unrealistic is everyday and flatter; idealistic can still succeed. A quixotic plan has charm and no working budget. In speech, say brave but unrealistic or a lovely idea that will not work; quixotic is a critic’s compliment-insult. Use it when the motive is decent, not when the plan is merely stupid.',
    ['Funding a library with busking was a quixotic gesture.', 'Her quixotic campaign to reply to every troll lasted a week.'],
    'Nobly impractical. Everyday: unrealistic (but that misses the romance). Literary/critical.',
    ['idealistic']
  ),
  rapacious: L(
    'Rapacious means grabbing more than is fair — greedy in an aggressive, feeding way. Greedy is everyday; grasping is close. Writers use rapacious fees / a rapacious company when the taking feels predatory. In speech, greedy or ripping people off is plainer; rapacious is a moral hiss in journalism. It is too strong for someone who takes the last biscuit once.',
    ['Rapacious rents emptied the high street of ordinary shops.', 'The memoir describes a rapacious agent, not a tough one.'],
    'Aggressively greedy. Everyday: greedy / grasping. Journalistic moral tone. Fees/companies/landlords.',
    ['greedy']
  ),
  salubrious: L(
    'Salubrious means healthy and pleasant to live in or experience — often of a neighbourhood: a more salubrious part of town. Healthy is everyday; pleasant is weaker. Unsalubrious (or less salubrious) is the usual negative for a seedy area. In speech, nicer / healthier / more respectable is what people say; salubrious is slightly old-fashioned and wry, as if quoting an estate agent. It is not a medical term for a diet.',
    ['They left the basement flat for somewhere more salubrious.', 'Sea air was advertised as salubrious, which mostly meant cold.'],
    'Healthy and pleasant (often a place). Everyday: nicer / healthier. Slightly dated or ironic in speech.',
    ['healthy']
  ),
  sycophant: L(
    'A sycophant praises the powerful in order to gain advantage — a flatterer with a motive. Fan is innocent; yes-man is the informal cousin. Sycophantic is the adjective. Contrast obsequious (the manner of fawning) with sycophant (the person who hopes to profit). In speech, crawler or yes-man is more natural; sycophant is a cold, written insult. Do not use it for genuine respect.',
    ['The minister’s circle had no critics, only sycophants.', 'Sycophantic laughter met every weak joke from the chair.'],
    'Flatterer for gain. Adjective: sycophantic. Everyday: yes-man. Related manner: obsequious.',
    ['flatterer']
  ),
  truculent: L(
    'Truculent means aggressively defiant — quick to snap and unwilling to be managed. Rude is everyday and broader; belligerent is close but more “seeking a fight.” A truculent reply in an interview is a gift to the panel. In speech, chippy or spoiling for an argument is more British-informal; truculent is a precise written label. It is stronger than merely blunt.',
    ['Truculent emails from the supplier delayed the repair.', 'He mistook a truculent silence for strength.'],
    'Aggressively defiant. Everyday: hostile / chippy. Close: belligerent. Written register.',
    ['defiant']
  ),
  unctuous: L(
    'Unctuous means praise or politeness that feels oily and false — too smooth to trust. Polite is genuine; flattering may still be honest. Unctuous compliments / an unctuous voice. In speech, smarmy is the everyday British hit; unctuous is a critic’s word (and originally meant oily in a literal sense). Close to obsequious, but unctuous stresses the false texture of the words, not only the bowing.',
    ['The brochure’s unctuous tone made the course sound like a spa.', 'Unctuous sympathy from a stranger can feel worse than silence.'],
    'Oily, insincere smoothness. Everyday: smarmy. Related: obsequious (fawning to power). Literary/critical.',
    ['smarmy']
  ),
  verisimilitude: L(
    'Verisimilitude is the feeling that something could be real — lifelike truth in fiction, film, or a reconstruction. Realism is the broader art term; authenticity is everyday for “feels genuine.” Critics praise or doubt the verisimilitude of dialogue. In speech, it feels real or you can believe it; verisimilitude is a seminar word. Teach it as “the appearance of truth,” not as truth itself — a convincing lie can have verisimilitude.',
    ['The courtroom scenes have verisimilitude; the romance does not.', 'Too much slang, ironically, can damage verisimilitude if the date is 1950.'],
    'Appearance of being real. Everyday: lifelike / convincing. Academic/critical. Not the same as truth.',
    ['realism']
  ),
  vitiate: L(
    'To vitiate is to spoil something so that its quality or legal force is weakened: one false claim can vitiate the argument. Spoil and weaken are everyday; invalidate is the legal cousin (make void). It is a lawyers’ and philosophers’ verb. In speech, always say spoil, undermine, or make it invalid. If you use vitiate, keep the rest of the sentence simple so the reader is not fighting two rare words at once.',
    ['Bias in the sample vitiates the conclusion.', 'A forged signature would vitiate the contract.'],
    'Formal/legal: spoil or make legally unsound. Everyday: undermine / invalidate. Rare in speech.',
    ['invalidate']
  ),
  wanton: L(
    'Wanton, of cruelty or damage, means deliberate, unprovoked, and without need: wanton destruction. Reckless can be careless rather than chosen; cruel is everyday. Wanton disregard for the rules is a set legalish phrase. An older sense means sexually unrestrained — know it so you are not surprised, but modern news usually means needless harm. In speech, needless / mindless destruction is clearer.',
    ['The wanton smashing of the instruments was not an accident.', 'Wanton disregard for safety ended the contract.'],
    'Needless, deliberate harm (destruction/cruelty). Everyday: needless / mindless. Also older sexual sense.',
    ['needless']
  ),
  welter: L(
    'A welter is a large, confused mass: a welter of papers, a welter of claims. Mess is everyday; jumble is close. Writers use a welter of + plural when quantity and disorder arrive together. It is slightly literary; in speech, a heap or a mess of. Compare maelstrom, which is violent motion — a welter can just sit there being chaotic. Do not use it for a tidy large amount.',
    ['A welter of amendments made the bill unreadable.', 'She waded through a welter of overlapping advice.'],
    'a welter of + plural. Disordered mass. Everyday: mess / jumble. Slightly literary. Contrast: maelstrom = violent swirl.',
    ['jumble']
  ),
  xenophobia: L(
    'Xenophobia is a strong fear or hatred of people regarded as foreign. Racism is related but not identical (it centres on race); prejudice is the everyday umbrella. Xenophobic is the adjective. Use the word as a serious charge in analysis, not as a casual insult in a row. In speech, fear or hatred of foreigners is the plain gloss. Teach the collocation xenophobic rhetoric / attitudes, and keep the tone factual when you use it.',
    ['The leaflet was withdrawn for xenophobic stereotyping.', 'Xenophobia can hide in jokes that “are only banter.”'],
    'Fear/hatred of foreigners. Adjective: xenophobic. Related but not identical: racism. Serious register.',
    []
  ),
}
