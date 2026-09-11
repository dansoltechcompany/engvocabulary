const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2K = {
  fallacious: L(
    'Fallacious means based on a mistaken belief, or logically unsound: a fallacious argument, fallacious reasoning. False is everyday; fallacy (already in the dictionary) is the noun. Fallible (this batch) is “able to err” — a cousin, not a synonym. Do not call a rounding error fallacious as if it were a trick of logic.',
    ['A fallacious leap from one anecdote to “the cohort” failed review.', 'False is everyday. A fallacy is the named error (already in the dictionary). Facetious (already in the dictionary) is joking at the wrong time — a lookalike. An honest miscount is an error, not a fallacious syllogism.'],
    'Logically false; based on a fallacy. Everyday: false. Noun: fallacy. Cousin: fallible (can err). Mix-up: facetious. A slip is not a fallacy until it argues.',
    ['false']
  ),
  fallible: L(
    'Fallible means able to make mistakes; not perfect: fallible memory, fallible judges. Imperfect is everyday; infallible is the opposite (often sarcastic). Fallacious (this batch) is “logically unsound”. Do not call a fabricated n fallible as if it were an honest human slip.',
    ['A fallible chair still needs a second pair of eyes on the n.', 'Imperfect is everyday. Infallible is “cannot err”. Fallacious reasoning is a bad argument, not a modest person. Systems that assume one tired reader are designed as if someone were infallible.'],
    'Capable of error. Everyday: imperfect. Opposite: infallible. Contrast: fallacious (the argument is unsound). Fabrication is not fallibility.',
    ['imperfect']
  ),
  fathom: L(
    'To fathom is to understand something deep or puzzling after thought: cannot fathom why, hard to fathom. Understand and work out are everyday; a fathom is also a nautical depth (about 1.8 m). Unfathomable is the adjective. Do not write fathom for a missing file you have not looked for.',
    ['Nobody could fathom why the embargoed CSV was in a shared drive.', 'Understand is everyday. Grasp and plumb are cousins. Unfathomable mystery is the adjective. Six fathoms is depth. If the folder is still unopened, the problem is search, not metaphysics.'],
    'Work out; grasp (often cannot fathom). Everyday: understand. Also a nautical depth. Adjective: unfathomable. Look in the folder first.',
    ['understand']
  ),
  febrile: L(
    'Febrile means of fever medically, or, of a mood, nervously agitated and overheated: a febrile atmosphere, febrile speculation. Feverish is the everyday twin; frantic is stronger. February is a lookalike. Do not call a scheduled, dull board febrile to make minutes sound like a thriller.',
    ['A febrile press cycle is not a methods section.', 'Feverish is everyday. Frantic is panic in motion. Medical febrile is a temperature. February is a month. Calm, dated disagreement is not febrile.'],
    'Feverish; nervously overheated. Everyday: feverish. Medical: of a fever. Mix-up: February. Dull, minuted dissent is not a fever.',
    ['feverish']
  ),
  fervent: L(
    'Fervent means showing strong, sincere feeling: fervent hope, a fervent believer. Passionate and keen are everyday; fervour is the noun (British spelling). Fervid is a rarer twin. Do not award fervent to a logo loyalty that skips the fire door.',
    ['Fervent loyalty to a logo does not close a fire-door minute.', 'Passionate is everyday. Zealous (already in the dictionary) can overdo it. Fervour is the noun. Fever is illness. Sincerity without a date is still a gap in the minutes.'],
    'Intensely sincere. Everyday: passionate. Noun: fervour. Cousin: zealous (can overdo it). Feeling ≠ a completed action.',
    ['passionate']
  ),
  flaunt: L(
    'To flaunt is to show something off so as to be admired: flaunt wealth, flaunt a ranking. Show off is everyday; display is neutral. Flout (already in the dictionary) is break a rule with contempt — the classic mix-up. Do not flaunt a league table while flouting the embargo.',
    ['Do not flaunt a ranking while the night bus is still cut.', 'Show off is everyday. Parade can be similar. Flout a rule is defy it (already in C2). If you mean break the rule, flout; if you mean show off, flaunt. Mixing them is a C2 own-goal.'],
    'Show off. Everyday: show off. Contrast: flout (defy a rule) — already in this dictionary. Rankings are not a substitute for cover.',
    []
  ),
  florid: L(
    'Florid means over-decorated in style, or a red, flushed face: florid prose, a florid complexion. Ornate and flowery are cousins for writing; red-faced is everyday for the body. Florida is a lookalike. Do not call a required methods sentence florid because it contains a number.',
    ['Florid praise in the preface hid an empty results cell.', 'Flowery is the everyday writing insult. Ornate can be architecture. Ruddy is a complexion. Florida is a place. A sample-size sentence is not ornament; it is the paper.'],
    'Over-ornate (prose); also ruddy. Everyday (writing): flowery. Mix-up: Florida. A number in methods is not decoration.',
    ['flowery']
  ),
  foist: L(
    'To foist is to force someone to accept something they do not want: foist X on Y, a foisted timetable. Impose is a close cousin; force is everyday. Hoist is lift — a lookalike. Do not foist last year’s PDF on this year’s cohort and call it continuity.',
    ['They foisted last year’s timetable on this year’s cohort.', 'Impose is formal and close. Force on is everyday. Hoist a flag is lift. Foist implies the thing is unwanted or inferior. A published, consulted change is not foisting.'],
    'Impose something unwanted on someone. Everyday: force on. Close: impose. Mix-up: hoist (lift). Consultation is the opposite move.',
    ['impose']
  ),
  forlorn: L(
    'Forlorn means pitifully lonely or abandoned, or (a forlorn hope) almost certain to fail: a forlorn figure, a forlorn attempt. Lonely and hopeless are everyday; bereft (already in the dictionary) is stripped of something. Do not call a well-staffed, quiet archive forlorn because it is not on Instagram.',
    ['A forlorn “any questions?” at 21:40 is not consultation.', 'Lonely is everyday. A forlorn hope is a doomed attempt (historical military flavour). Bereft of staff is the C2 cousin. Abandoned is physical. A silent room with a posted hour is a service, not a tragedy.'],
    'Pitifully abandoned; a hopeless attempt. Everyday: lonely / hopeless. Phrase: a forlorn hope. Quiet and open is not forlorn.',
    ['lonely']
  ),
  fortitude: L(
    'Fortitude is calm courage in pain or difficulty (formal): with fortitude, moral fortitude. Courage and bravery are everyday; fortitude stresses endurance more than dash. Fortuitous (already in the dictionary) is by chance — a lookalike. Do not praise fortitude as a reason to leave a post unfilled.',
    ['Fortitude on the night shift is not a substitute for a second post.', 'Courage is everyday. Stoicism is a philosophical cousin. Fortuitous is lucky-by-chance (already in C2). A fortress is a building. Endurance still needs a rota.'],
    'Stoic courage. Everyday: courage. Mix-up: fortuitous (by chance). Not a staffing model.',
    ['courage']
  ),
  fraught: L(
    'Fraught means filled with something unpleasant (fraught with danger/problems) or, of a person or moment, very tense: a fraught meeting. Tense and full of are everyday; freight is cargo — a lookalike. Do not write fraught for a calm, complete risk register.',
    ['The handover was fraught with missing dates and one shared login.', 'Tense is everyday. Fraught with + noun is the formal pattern. Freight is goods on a lorry. Anxious is the feeling. A labelled risk that is owned is tense perhaps, not fraught, if the dates exist.'],
    'Loaded with trouble; very tense. Everyday: tense / full of. Pattern: fraught with. Mix-up: freight. Named, owned risks are not automatically fraught.',
    ['tense']
  ),
  fulminate: L(
    'To fulminate is to protest loudly and angrily (formal): fulminate against corruption, fulminating editorials. Rage and rant are everyday; fulsome (already in the dictionary) is overdone praise — a lookalike. Fulminant in medicine is sudden and severe. Do not fulminate against “culture” while skipping the CSV.',
    ['To fulminate against “culture” while skipping the CSV is theatre.', 'Rant is everyday. Thunder against is a metaphor cousin. Fulsome praise is excessive (already in C2). Lightning fulminated in old science writing. Anger in the minutes still needs a numbered fact.'],
    'Rage verbally (against). Everyday: rant. Mix-up: fulsome (overdone praise). Theatre without a fact is still theatre.',
    ['rant']
  ),
  furtive: L(
    'Furtive means secret and sly, as if ashamed to be seen: a furtive glance, furtive edits. Secret is everyday and can be legitimate; stealthy is close; covert (already in the dictionary) is more operational. Do not call a password-protected ethics folder furtive.',
    ['A furtive edit to the n in the abstract did not survive the appendix.', 'Secret can be allowed. Sly adds craft. Covert is planned concealment. A glance can be furtive; a protocol can be confidential without being furtive. Changing the n after sign-off is the problem.'],
    'Slyly secret. Everyday: secret (wider). Close: stealthy / covert. Confidential filing is not furtive; altering the n is.',
    ['secret']
  ),
  gainsay: L(
    'To gainsay is to deny or contradict (formal, often negative): cannot gainsay the evidence, none could gainsay it. Deny and contradict are everyday; gainsay is almost a fossil except in that cannot-gainsay pattern. Gain and say are the pieces, not “win a conversation”. Do not gainsay a badge log with a slogan.',
    ['Nobody could gainsay the badge log, however warm the speeches.', 'Deny is everyday. Contradict is direct opposition. Unsay is take back words. The surviving use is cannot/could not gainsay. A speech does not unsay a timestamp.'],
    'Deny (usually cannot gainsay). Everyday: deny / contradict. Almost only in the negative pattern. A slogan does not unsay a log.',
    ['deny']
  ),
  glib: L(
    'Glib means fluent and easy but shallow or insincere (disapproving): a glib reply, glib assurances. Smooth and slick are cousins; fluent is often praise. Do not call a short, accurate date glib because it is not a paragraph of feeling.',
    ['A glib “we hear you” did not restore the spare invigilator.', 'Fluent can be a compliment. Slick is close and also disapproving. Superficial is the content judgement. A one-line fact with a date is brevity, not glibness. An uncosted promise is glib.'],
    'Slick and shallow (disapproving). Contrast: fluent (often praise). Everyday: superficial. Brevity with a date is not glib; an empty promise is.',
    ['superficial']
  ),
  grandiloquent: L(
    'Grandiloquent means using long, pompous words to impress (formal / disapproving): grandiloquent speeches, a grandiloquent style. Pompous and long-winded are everyday cousins; grandiose (this batch) is over-ambitious in scale, not only in diction. Loquacious (already in the dictionary) is talkative. Do not call a precise legal term grandiloquent.',
    ['A grandiloquent preface is not a sample-size sentence.', 'Pompous is everyday. Grandiose is showy ambition (this batch). Eloquent is skilful and usually praise. Needed technical words are not grandiloquence. If a shorter word does the job, use it.'],
    'Pompously high-flown (speech). Everyday: pompous. Contrast: grandiose (scale); eloquent (praise). A needed legal term is not the target.',
    ['pompous']
  ),
  grandiose: L(
    'Grandiose means bigger or more impressive than is needed, often unrealistically: grandiose plans, a grandiose scheme. Grand can be praise; grandiose is usually a warning. Grandiloquent (this batch) is pompous language. Do not file a spreadsheet join as a grandiose “platform”.',
    ['A grandiose “world-leading” slide sat on a spreadsheet join.', 'Ambitious can be fair. Grandiloquent is diction. Grand is often positive (a grand piano; a grand old building). Unrealistic is the everyday judgement. A title slide is not an architecture.'],
    'Over-ambitious; showily huge. Everyday: unrealistic / over-ambitious. Contrast: grand (can praise); grandiloquent (words). A join is not a platform.',
    []
  ),
  gratuitous: L(
    'Gratuitous means done without good reason, uncalled-for: gratuitous violence, a gratuitous insult. Needless and unnecessary are everyday; free (gratis) is an older related sense still seen in “gratuitous advice”. Gratitude is thanks — a lookalike. Do not call a required safety film gratuitous.',
    ['A gratuitous joke about the intern ended the item.', 'Needless is everyday. Uncalled-for is a close twin. Gratis means free of charge. Gratitude is thanks. A mandated fire video is not gratuitous because someone is bored.'],
    'Unjustified; needless. Everyday: needless / uncalled-for. Related: gratis (free). Mix-up: gratitude. A required safety item is not gratuitous.',
    ['needless']
  ),
  gregarious: L(
    'Gregarious means fond of company; sociable: a gregarious colleague, gregarious animals (living in groups). Sociable and outgoing are everyday; garrulous (already in the dictionary) is talkative to a fault. Do not call a quiet professional unfriendly merely for not being gregarious.',
    ['A gregarious dean still had to sign a solitary fire report.', 'Sociable is everyday. Outgoing is similar. Garrulous is too talkative (already in C2). Solitary and aloof sit at the other end. Introversion is not a moral failing in a sign-off.'],
    'Outgoing; fond of company. Everyday: sociable. Contrast: garrulous (too talkative). Quiet competence is not rudeness.',
    ['sociable']
  ),
  grovel: L(
    'To grovel is to show humiliating deference, or to crawl low: grovel for forgiveness, grovel on the floor. Beg and crawl are everyday; kowtow (already in the dictionary) is a close formal cousin. Do not grovel in the minutes instead of naming the missing date.',
    ['Do not grovel in the minutes; name the missing date.', 'Beg is everyday. Kowtow is ritualised deference (already in C2). Crawl is physical. An apology with a correction is dignity; grovelling without a fact is theatre. You grovel to a person, not to a dataset.'],
    'Cringe; abase yourself. Everyday: beg / crawl. Close: kowtow. An apology plus a date is not grovelling.',
    []
  ),
  hallowed: L(
    'Hallowed means made holy or deeply respected by tradition: hallowed ground, hallowed traditions. Sacred and holy are cousins; Halloween is a lookalike. Hollow is empty — another lookalike. Do not let a hallowed logo bless an empty n.',
    ['A hallowed logo on the cover does not bless an empty n.', 'Sacred is the religious twin. Traditional is everyday and weaker. Halloween is 31 October. Hollow is empty. Respect for a name is not a methods paragraph.'],
    'Sacred by tradition. Close: sacred / holy. Mix-ups: Halloween; hollow (empty). A brand is not a sacrament.',
    ['sacred']
  ),
  hapless: L(
    'Hapless means unlucky, in a way that invites pity (literary): a hapless intern, hapless victims. Unlucky and unfortunate are everyday; hap is an old word for luck (in hapless / mishap / perhaps). Helpless is “without help” — a mix-up. Do not call a named decision-maker hapless to dodge their job title.',
    ['A hapless intern was cc’d on a draft that should never have left the folder.', 'Unlucky is everyday. Helpless is unable to act. Mishap is a small accident. Perhaps hides the same hap. The person who clicked send may be hapless; the person who designed the shared folder is responsible.'],
    'Unlucky; pitiable (literary). Everyday: unlucky. Mix-up: helpless. Old root: hap (luck). Pity is not a substitute for a named owner.',
    ['unlucky']
  ),
  harrowing: L(
    'Harrowing means extremely upsetting because it involves suffering: a harrowing account, harrowing footage. Upsetting and distressing are everyday; a harrow is a farm tool that tears the soil — the metaphor. Harrowing is not hurrying. Do not use a harrowing story as a keynote punchline.',
    ['A harrowing case study is not a punchline in a keynote.', 'Distressing is everyday. Traumatic is stronger and clinical. A harrow breaks ground. Hurrying is speed. If you show suffering, you owe care, not a laugh line.'],
    'Deeply distressing to witness. Everyday: upsetting / distressing. Metaphor: a harrow (farm). Not a joke, and not “hurrying”.',
    ['distressing']
  ),
  haughty: L(
    'Haughty means proud in a way that shows you think others are inferior: a haughty tone, haughty disregard. Proud can be neutral; arrogant is a close twin; aloof (already in the dictionary) is distant without necessarily scorning. Height is a lookalike in tired reading. Do not call a precise refusal haughty when the protocol is the reason.',
    ['A haughty “we do not discuss n” is still a methods failure.', 'Arrogant is the everyday twin. Proud of a craft can be fair. Aloof is cold distance (already in C2). High and mighty is the idiom. Citing a real embargo is procedure, not haughtiness.'],
    'Arrogantly superior. Everyday: arrogant. Contrast: aloof (distant); proud (can be fair). A real rule is not a sneer.',
    ['arrogant']
  ),
  hector: L(
    'To hector is to talk to someone in a bullying, lecturing way: hector the panel, a hectoring tone. Bully and lecture are everyday; harangue (already in the dictionary) is a long angry speech. Hector as a name is Homeric. Do not hector a junior for asking where the date went.',
    ['Do not hector a junior for asking where the date went.', 'Bully is everyday. Lecture can be fair teaching; hectoring is the aggressive version. A harangue is a speech (already in C2). A named Homeric hero is the source. A question about a date is diligence.'],
    'Bully with words; browbeat. Everyday: bully / lecture (aggressive). Close: harangue (a speech). Not a fair question about a missing date.',
    ['bully']
  ),
  heinous: L(
    'Heinous means extremely wicked, especially of a crime (formal): a heinous crime, heinous abuse. Wicked and evil are everyday; atrocious (atrocity is already in the dictionary) is a cousin. Heinous is not highness or hector. Do not call a late email heinous.',
    ['A heinous breach of consent is not “a communications issue”.', 'Evil is everyday. Atrocious can be very bad without being a crime. Hideous is ugly — a lookalike. Save heinous for grave wrongs; a sloppy slide is incompetence, not heinousness.'],
    'Utterly wicked (formal). Everyday: evil / wicked. Cousin: atrocious. Mix-up: hideous (ugly). Not a late email, and not a messy slide.',
    ['wicked']
  ),
  hermetic: L(
    'Hermetic means airtight, or, of a group or style, sealed against outsiders: a hermetic seal, a hermetic clique. Airtight is everyday for jars; closed and insular are cousins for groups. Hermes/hermetic tradition is esoteric history. Do not call a password policy hermetic as an insult when it is the point.',
    ['A hermetic clique wrote the minutes and skipped the fire door.', 'Airtight is everyday. Insular is inward-looking. Esoteric (already in the dictionary) is for the initiated. A sealed lab fridge can be correctly hermetic. A clique that hides a fire risk is the bad sense.'],
    'Sealed; closed to outsiders. Everyday: airtight / closed. Cousin: esoteric (insiders’ knowledge). A seal can be good; a clique skipping safety is not.',
    []
  ),
  hiatus: L(
    'A hiatus is a pause or gap in a process or series (formal): a brief hiatus, on hiatus (especially US media). Gap, break, and pause are everyday; hiatus hernia is medical. Do not call a cancelled clinic a “hiatus” to imply a planned return you have not funded.',
    ['After a hiatus of one term the night clinic still had no spare key.', 'Break and pause are everyday. A gap can be in a document. On hiatus is set phrasing for shows. A hernia is a different medical noun. If the post is deleted, it is a closure, not a hiatus.'],
    'A gap; an interruption. Everyday: break / pause. Phrase: on hiatus. Mix-up: hiatus hernia. An unfunded return is a closure.',
    ['pause']
  ),
  histrionic: L(
    'Histrionic means too theatrical or emotional, as if performing (disapproving): histrionic gestures, histrionic outrage. Dramatic is everyday and can be praise; melodramatic is a close twin. History is a lookalike. Histrionics (often plural noun) are the theatrics. Do not dismiss a numbered safety objection as histrionic.',
    ['A histrionic walkout does not replace a numbered objection.', 'Dramatic can be art. Melodramatic is overplayed emotion. Historic is important in history. An actor’s histrionic craft can be a skill on stage. In a boardroom, the n still has to be in the minute.'],
    'Over-theatrical; melodramatic. Everyday: melodramatic. Noun: histrionics. Mix-up: historic / history. A dated safety point is not acting.',
    ['melodramatic']
  ),
  hoary: L(
    'Hoary means very old and overused, or grey/white with age (literary): a hoary cliché, hoary old joke, hoary beard. Old and stale are everyday; ancient can praise. Hoard (a store of things) is a lookalike. Do not call a still-correct 1990s protocol hoary just because it is dated in style.',
    ['A hoary joke about “kids these days” is not a dropout analysis.', 'Stale is everyday for jokes. Ancient can be respectful. A hoard is a stockpile. Grey-haired is the literal sense. A replicable method can be old and still the right one.'],
    'Ancient and stale (or grey-haired). Everyday: stale / old. Mix-up: hoard (a store). Old and correct is not hoary; a recycled sneer is.',
    ['stale']
  ),
}
