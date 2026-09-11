const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2M = {
  nadir: L(
    'Nadir means the lowest point of a process, fortune, or mood (formal): the nadir of his career, hit a nadir. Bottom is everyday; zenith (already in the dictionary) is the opposite — the high point. Do not call a planned, minuted pause a nadir merely because it is quiet.',
    ['The clinic hit its nadir when the spare key was cut and not replaced.', 'Bottom is everyday. Zenith is the peak (already in C2). A trough in a chart is a cousin. One bad week with a named recovery date is a dip. Cutting the spare key and leaving the post empty is a nadir.'],
    'Lowest point (formal). Everyday: bottom. Opposite: zenith (already in this dictionary). A planned pause is not a collapse.',
    ['bottom']
  ),
  narcissism: L(
    'Narcissism is excessive love of oneself or of one’s image: institutional narcissism, a streak of narcissism. Vanity is the everyday cousin; confidence is ordinary self-belief and is not a synonym. Narcissus is the myth. Do not diagnose a required byline as narcissism.',
    ['Narcissism about the ranking is not a methods section.', 'Vanity is close and everyday. Ego is looser. Confidence with a dated n is professionalism. A logo on every slide is branding; a ranking used to skip the fire door is narcissism.'],
    'Extreme self-regard. Everyday: vanity. Contrast: confidence (ordinary). A byline is not a personality disorder.',
    ['vanity']
  ),
  nebulous: L(
    'Nebulous means vague and ill-defined, as if seen through cloud: a nebulous promise, nebulous aims. Vague is everyday; obscure (already in the dictionary) is hard to understand, not merely shapeless. A nebula is a cloud of gas in space — the image. Do not call a technical appendix nebulous because you have not opened it.',
    ['A nebulous “in due course” is not a return date for the key.', 'Vague is everyday. Cloudy is the metaphor (already in the dictionary). Obscure is hard to follow (already in C1). A long methods clause can be exact. “In due course” with no owner is nebulous.'],
    'Vague; ill-defined. Everyday: vague. Cousin: obscure (hard to grasp). Mix-up: a dense paper you have not read. Name a date.',
    ['vague']
  ),
  nemesis: L(
    'Nemesis is the rival or force that brings you down, or inescapable payback (literary): meet your nemesis, the nemesis of the scheme. Enemy (already in the dictionary) is everyday and wider; a rival is a competitor, not automatically your undoing. Nemesis was also a goddess of retribution. Do not call a fair audit a nemesis to make the minute sound like a myth.',
    ['The appendix was the slogan’s nemesis: the n was empty.', 'Enemy is everyday (already in the dictionary). A rival may lose to you next year. Retribution is the payback sense. An auditor with a checklist is not fate. An empty cell that kills the claim is nemesis enough.'],
    'Undoing; the rival who defeats you. Everyday: enemy / rival. Also: inescapable payback. A fair check is not a curse.',
    ['rival']
  ),
  neophyte: L(
    'A neophyte is a newcomer to a skill, post, or belief (formal): a neophyte in the lab, political neophytes. Beginner is everyday; novice is a close twin. Nascent (already in the dictionary) is of things just beginning, not of people. Do not call a junior a neophyte merely for asking where the date went.',
    ['A neophyte press officer still needs a lawyer on the embargo.', 'Beginner is everyday. Novice is close. Nascent is of a process (already in C2). Ingenuous (already in C2) is naively frank — a cousin of manner, not of rank. Newness does not license a leak. Name a supervisor.'],
    'Beginner (formal). Everyday: beginner. Close: novice. Contrast: nascent (of things, not people). Asking for the date is not inexperience.',
    ['beginner']
  ),
  nepotism: L(
    'Nepotism is unfair preferment of relatives, especially in appointments: accusations of nepotism, a nepotistic hire. Favouritism is the wider everyday word; cronyism is the friends-and-allies cousin. Nepot- is nephew in the Latin. Do not call a published, scored appointment nepotism because the successful candidate has a surname you recognise.',
    ['Nepotism on the rota is not “knowing the team”.', 'Favouritism is wider (already in the dictionary as favour). Cronyism is mates, not kin. A sycophant (already in C2) flatters; a relative is simply related. Kinship (already in the dictionary) is the fact of family, not the abuse. A scored, dated board is the defence; a quiet swap on the night rota is the problem.'],
    'Jobs for family. Everyday: favouritism. Cousin: cronyism (friends). Kinship is the fact; nepotism is the abuse. A scored board is not a plot.',
    ['favouritism']
  ),
  nether: L(
    'Nether means lower, usually in a literary or half-joking set phrase: the nether world, nether regions of the building. Lower, beneath, and underneath (all already in the dictionary) are everyday. Neither is a lookalike. Do not use nether regions as a smirk in minutes when you mean the basement archive.',
    ['The nether drawer still held last year’s CSV; the live folder did not.', 'Lower is everyday. Beneath / underneath are place words (already in the dictionary). Nether world is literary underworld. Neither is “not one nor the other” — a lookalike. A basement can be the right store. Last year’s file in the live path is the error.'],
    'Lower (literary). Everyday: lower / beneath. Mix-up: neither. Set phrases: nether world; nether regions. Say basement if you mean basement.',
    ['lower']
  ),
  nettle: L(
    'To nettle is to annoy or provoke (often be nettled): nettled by the slight, nettled into a reply. Annoy and irritate are everyday; the plant that stings is the other sense. Needle (already in the dictionary) is a lookalike, not a synonym. Do not write nettled for a numbered objection you simply dislike.',
    ['She was nettled by “noted” beside an open flame risk, and she was right.', 'Annoy is everyday. Irritate is close. A nettle stings. Needle is a pin or a verb “goad” (already in the dictionary) — related in feel, not the same word. Anger at a missing date can be justified. Sulking about biscuits is not being nettled; it is a sulk.'],
    'Annoy (usually be nettled). Everyday: annoy / irritate. Also the stinging plant. Mix-up: needle. A dated risk can fairly nettle.',
    ['annoy']
  ),
  nexus: L(
    'A nexus is a central connection or a linked cluster (formal): a nexus of interests, the nexus between X and Y. Connection and network (already in the dictionary) are everyday and wider. Hub is the centre of a wheel or a system. Do not call every meeting a nexus to make a diary look like a theory paper.',
    ['The nexus of the failure was one shared login and no spare key.', 'Connection is everyday (already in the dictionary). Network is a web (already in the dictionary). A hub is a centre. Two named causes that join are a nexus. A crowded inbox is not, by itself, a nexus of anything except delay.'],
    'A central link; a cluster of ties. Everyday: connection. Cousin: network / hub. A diary clash is not a theory of everything.',
    ['connection']
  ),
  nicety: L(
    'A nicety is a fine point of difference, or a refinement of manners: a nicety of law, diplomatic niceties. Nuance (already in the dictionary) is a close twin for shade of meaning; detail (already in the dictionary) is everyday and broader. Pedantic (already in the dictionary) is the vice of fussing the nicety and missing the n. Do not spend the hour on a nicety of tone while the date is blank.',
    ['A nicety of wording does not excuse a missing date in the n.', 'Detail is everyday. Nuance is a shade of meaning (already in C1). Pedantic fuss is the trap (already in C2). Nice is “pleasant” — a lookalike, not a synonym. Courtesy about titles can be a nicety; an empty cell cannot wait on the courtesy.'],
    'A fine distinction or refinement. Everyday: fine point. Close: nuance (already in this dictionary). Mix-up: nice. Tone ≠ a date.',
    ['nuance']
  ),
  nihilism: L(
    'Nihilism is the doctrine that life is meaningless, or that moral claims have no ground (formal): moral nihilism, a slide into nihilism. Cynicism (cynical is already in the dictionary) doubts motives; it does not always deny value. Negative (already in the dictionary) is a lookalike, not a school of thought. Do not brand a safety protocol as nihilism because it forbids a slogan.',
    ['Calling every protocol “nihilism” does not license an empty n.', 'Cynicism doubts people (cynical is already in C1). Anarchy is no ruler — a cousin in popular talk, not a twin. Negative is “no / minus” (already in the dictionary). Despair is a mood. A rule that names a fire door is not a denial of meaning. Skipping the n because “nothing matters” is the cheap version.'],
    'Rejection of meaning or morals (formal). Everyday gloss: “nothing matters”. Contrast: cynicism (doubts motives). Mix-up: negative. A protocol is not a void.',
    []
  ),
  noisome: L(
    'Noisome means disgusting, especially of a smell, and in older use harmful (literary): a noisome odour, noisome conditions. Smelly is everyday; noxious (this batch) is the harm cousin. Noisy (already in the dictionary) is the classic lookalike — noisome is not loud. Do not call a required extraction fan noisome to dodge the health minute.',
    ['A noisome store-cupboard is still a health item, not a joke in the minutes.', 'Smelly is everyday. Noxious is harmful (this batch). Innocuous is harmless (already in C2). Noisy is loud (already in A1) — a trap. A drain can be noisome and still be the right agenda item. A joke about the smell is not the inspection.'],
    'Foul-smelling; also harmful (literary). Everyday: smelly. Cousin: noxious (this batch). Mix-up: noisy. A smell can be a health finding.',
    ['smelly']
  ),
  nomadic: L(
    'Nomadic means moving from place to place rather than staying put: a nomadic life, nomadic work. Travelling is everyday; itinerant (already in the dictionary) is the close formal twin, especially of work. Migrant (already in the dictionary) is a wider labour and demographic word. Do not leave nomadic staff without a named local owner.',
    ['A nomadic marking team still needs a named local key-holder.', 'Travelling is everyday. Itinerant is the work cousin (already in C2). Migrant is wider (already in the dictionary). A visitor badge is not a fire procedure. Someone on site must hold the key. Wandering between rooms is not a risk register.'],
    'Wandering; not settled. Everyday: travelling. Close: itinerant (work). Cousin: migrant. A visitor still needs a local owner.',
    ['travelling']
  ),
  nomenclature: L(
    'Nomenclature is a system of names in a field (formal): chemical nomenclature, the nomenclature of posts. Terminology (already in the dictionary) is the set of terms; jargon (already in the dictionary) is insider language, often disapproving. A name is everyday. Do not let a rename stand in for a filled cell.',
    ['Elegant nomenclature does not invent a cell that is empty.', 'A naming system is the gloss. Terminology is the word-stock (already in C1). Jargon is shop-talk (already in the dictionary). Classification is grouping (already in the dictionary). Relabelling “cut” as “simplification” is still a cut. The label is not the n.'],
    'A naming system (formal). Everyday: names / naming. Close: terminology. Contrast: jargon (often disapproving). A rename is not a sample.',
    ['terminology']
  ),
  nonchalant: L(
    'Nonchalant means calmly unconcerned, sometimes too casually: a nonchalant wave, nonchalant about the risk. Casual (already in the dictionary) is everyday and wider; insouciant (already in the dictionary) is the close C2 twin. Unconcerned can be fair if the risk is closed. Do not perform nonchalance at an open fire door.',
    ['A nonchalant shrug is not a fire-door minute.', 'Casual is everyday (already in the dictionary). Insouciant is unworried (already in C2). Apathy is not caring at all (already in the dictionary). Calm after a dated fix is composure. A shrug instead of a name on the rota is nonchalance in the wrong place.'],
    'Casually unconcerned. Everyday: casual / unconcerned. Close: insouciant (already in C2). Composure after a fix ≠ a shrug at a flame.',
    ['casual']
  ),
  noncommittal: L(
    'Non-committal means refusing a clear yes, no, or preference: a non-committal answer, remain non-committal. Vague is everyday; equivocal (already in the dictionary) is ambiguous, often on purpose. Commitment is the thing being withheld. Do not file a legally required decision as non-committal to keep the peace.',
    ['A non-committal “we’ll see” left the clinic without a spare key.', 'Vague is everyday. Equivocal is two-faced unclear (already in C2). Diplomatic delay with a return date is a diary. “We’ll see” with no owner is how a post stays empty. A minute must name a yes, a no, or a dated return.'],
    'Refusing to take a side. Everyday: vague / non-committal. Close: equivocal (already in C2). Peacekeeping is not a missing key.',
    []
  ),
  nondescript: L(
    'Nondescript means lacking distinctive features; hard to describe because nothing stands out: a nondescript building, nondescript prose. Ordinary (already in the dictionary) is everyday and not always unkind; plain is close. Do not call a required fire notice nondescript because it spoils a photograph.',
    ['A nondescript cover slide still has to carry a date and an n.', 'Ordinary is everyday (already in the dictionary). Plain is close. Featureless is the gloss. A beige corridor can be nondescript and still have an exit sign. Decor is not a methods standard. The slide can be dull; the cell cannot be empty.'],
    'Featureless; hard to describe. Everyday: ordinary / plain. A dull cover is allowed; a missing date is not.',
    ['ordinary']
  ),
  nonentity: L(
    'A nonentity is a person or thing of no importance (disapproving): treat someone as a nonentity, a political nonentity. Nobody (already in the dictionary) is everyday; notable (already in the dictionary) is the opposite flavour. Entity is a being or organisation — the root. Do not call a night invigilator a nonentity in the minutes.',
    ['Treating the night invigilator as a nonentity is how the rota fails.', 'Nobody is everyday (already in the dictionary). A cipher is a nobody in older prose. Notable is worth noting (already in B2). Rank is not the same as the badge log. The person who holds the key is not a nonentity, however junior the grade.'],
    'A nobody (formal / unkind). Everyday: nobody. Opposite flavour: notable. Grade ≠ irrelevance on the night rota.',
    ['nobody']
  ),
  nonpareil: L(
    'Nonpareil means without equal (literary / formal, sometimes after the noun): a scholar nonpareil, nonpareil skill. Unique (already in the dictionary) is everyday and overused; paragon (already in the dictionary) is a perfect example. Peerless is a close twin. Do not award nonpareil to a keynote that never states the n.',
    ['A nonpareil keynote does not excuse an empty n.', 'Unique is everyday (already in the dictionary). A paragon is a model (already in C2). Peerless and unmatched are cousins. Praise the paper after the appendix. A logo is not a laureate. Unrivalled prose still owes a sample-size sentence.'],
    'Unrivalled (formal). Everyday: unique / unmatched. Close: paragon (already in C2). A name is not a sample size.',
    ['unmatched']
  ),
  nonplussed: L(
    'Nonplussed (UK) means so surprised or confused that you cannot react: look nonplussed, nonplussed by the figure. Confused (already in the dictionary) is everyday; at a loss is the gloss. In US informal use, nonplussed is sometimes wrongly used for “unperturbed” — ignore that in this dictionary. Do not write nonplussed for a person who has simply not opened the folder.',
    ['The auditor was nonplussed that the CSV lived in a shared drive.', 'Confused is everyday (already in the dictionary). Bewildered and at a loss are close. Plus in the Latin is “more”: non plus, no further. If the appendix is still unopened, the problem is search, not astonishment. Raise an eyebrow after you have looked.'],
    'Bewildered; at a loss (UK). Everyday: confused. US trap: “unperturbed”. Look in the folder first.',
    ['confused']
  ),
  nonsequitur: L(
    'A non sequitur is a remark or conclusion that does not follow (formal): a logical non sequitur, reply with a non sequitur. Fallacy (already in the dictionary) is the wider class of bad argument; fallacious (already in the dictionary) is the adjective. Sequence sits in the Latin. Do not call a numbered methods objection a non sequitur to shut it down.',
    ['“World-leading” after a missing n is a non sequitur, not a finding.', 'It does not follow is the gloss. A fallacy is a named error (already in the dictionary). Fallacious reasoning is unsound (already in C2). A sudden joke can be a conversational non sequitur. A leap from one anecdote to “the cohort” is the logical kind. Put the two sentences next to the cell.'],
    'A conclusion that does not follow. Everyday: that does not follow. Cousin: fallacy / fallacious (already in this dictionary). A dated comparison is not a leap.',
    []
  ),
  nostrum: L(
    'A nostrum is a pet remedy or scheme, often with little evidence (formal / disapproving): a political nostrum, patent nostrums. Cure (already in the dictionary) is everyday; panacea (already in the dictionary) is a cure-all, the close cousin. Quack medicine is the old literal sense. Do not sell a branding film as a staffing nostrum.',
    ['A branding nostrum is not a spare invigilator.', 'Cure is everyday (already in the dictionary). A panacea claims to fix everything (already in C2). A protocol with a date is a treatment. A slogan on the wall is a nostrum if it is meant to stand in for a post. Name the rota.'],
    'A quack cure or pet scheme. Everyday: pet remedy. Close: panacea (cure-all, already in C2). A film is not a post.',
    []
  ),
  notional: L(
    'Notional means existing as an idea or on paper, not in fact: a notional figure, notional agreement. Hypothetical and theoretical (already in the dictionary) are cousins; nominal (already in the dictionary) is “in name only” or “very small” — a close trap. Notion (already in the dictionary) is the everyday noun. Do not staff a clinic with a notional post.',
    ['A notional second post on the organogram did not staff the night clinic.', 'Hypothetical is “what if” (already in the dictionary). Theoretical is of theory (already in the dictionary). Nominal is in name / token (already in C1) — the classic mix-up. Imaginary is everyday (already in the dictionary). An organogram box is not a badge log. Count the people on the night, not the boxes.'],
    'On paper only; not actual. Everyday: hypothetical. Mix-up: nominal (in name / token — already in this dictionary). A box is not a post.',
    ['hypothetical']
  ),
  nous: L(
    'Nous in UK English is practical intelligence; gumption: political nous, no nous at all. Sense and intelligence (already in the dictionary) are everyday. In philosophy, nous (/nuːs/) is intellect — a different pronunciation and register. Do not praise nous that skips the embargo.',
    ['It took little nous to see that one CSV in a bin is not a backup.', 'Common sense is the gloss. Intelligence is wider (already in the dictionary). Gumption is informal grit-and-sense. Philosophy nous is /nuːs/. Clever copy is not nous if the only file is in the bin. Backup first; then the slogan.'],
    'Practical sense (UK, /naʊs/). Everyday: common sense. Philosophy: intellect (/nuːs/). Cleverness ≠ a backup.',
    ['sense']
  ),
  noxious: L(
    'Noxious means harmful or poisonous, of fumes, ideas, or influence (formal): noxious gas, noxious rhetoric. Harmful and toxic (already in the dictionary) are everyday; deleterious and pernicious (already in the dictionary) are close C2 twins. Innocuous (already in the dictionary) is the opposite flavour. Noisome (this batch) is often the smell. Do not call a required safety objection noxious to shut it down.',
    ['A noxious leak of draft grades is not “robust debate”.', 'Harmful is everyday (already in the dictionary). Toxic is close (already in the dictionary). Deleterious is gradually harmful (already in C2). Pernicious is destructively harmful (already in C2). Innocuous is harmless (already in C2). A dated risk in the minutes can sting and still be the right item. Theatre is not the same as naming a poison.'],
    'Harmful; poisonous. Everyday: harmful / toxic. Close: deleterious; pernicious. Contrast: innocuous; cousin: noisome (this batch). A safety point is not a toxin for being unwelcome.',
    ['harmful']
  ),
  nub: L(
    'The nub is the central point of a matter: the nub of the issue, get to the nub. Heart, core, gist, essence, and kernel (all already in the dictionary) are cousins; gist is the summary, nub is the sticking-point. A nub is also a small lump. Do not bury the nub under biscuits in the minutes.',
    ['The nub of the complaint was the missing date, not the biscuits.', 'Heart / core are everyday (already in the dictionary). Gist is the summary (already in the dictionary). Essence is the what-it-is (already in the dictionary). Kernel is the seed (already in the dictionary). The lump sense is physical. Name the date. Catering is not the finding.'],
    'The crux; the heart of it. Everyday: heart / core. Close: gist (summary). Biscuits are not the issue.',
    ['crux']
  ),
  nugatory: L(
    'Nugatory means of no real value, force, or effect (formal): a nugatory distinction, nugatory protection. Worthless is everyday; negligible (already in the dictionary) is so small it can be ignored — a cousin, not a twin (negligible is size; nugatory is force). Do not call a legally required clause nugatory because it is short.',
    ['A nugatory “noted” beside an open flame risk is not a decision.', 'Worthless is everyday. Negligible is tiny (already in C1). Trivial is slight. A one-line consent clause can still bind. “Noted” with no owner, no date, and no action is nugatory. Length is not force; an empty minute is.'],
    'Of no force or value (formal). Everyday: worthless. Contrast: negligible (tiny — already in this dictionary). A short clause can still bind.',
    ['worthless']
  ),
  nullify: L(
    'To nullify is to make something of no legal or practical effect: nullify a result, nullify the advantage. Cancel (already in the dictionary) is everyday; void and annul are legal cousins. Null is “having no value or effect”. Do not claim a refresh nullified an error if the only CSV is gone.',
    ['A missing consent clause nullifies the claim that the study was “cleared”.', 'Cancel is everyday (already in the dictionary). Void is empty of legal force. Negate is deny or cancel out. A dated correction can still stand. Deleting the sole file does not “nullify” the gap; it is the gap. Back up the CSV before you boast of a refresh.'],
    'Make void; cancel the effect. Everyday: cancel. Legal cousins: void / annul. A missing clause undoes the claim; a slogan does not restore it.',
    ['cancel']
  ),
  numinous: L(
    'Numinous means filled with a mysterious spiritual presence or awe (literary / formal): a numinous silence, the numinous in the landscape. Sacred and holy are everyday religious cousins; hallowed (already in the dictionary) is made holy by tradition. Do not let a numinous brand film stand in for a fire procedure.',
    ['A numinous logo on the cover does not bless an empty n.', 'Sacred / holy are the plain religious words. Hallowed is tradition-holy (already in C2). Awe is the feeling. A chapel can be numinous. A cover device is design. Atmosphere is not a methods sentence. The n still has to be a number.'],
    'Spiritually awe-inspiring. Everyday: sacred / holy. Close: hallowed (already in C2). Awe ≠ a sample size.',
    []
  ),
  nuptial: L(
    'Nuptial means of a wedding or of marriage (formal / literary): nuptial vows, nuptial leave. Wedding (already in the dictionary) is everyday; marital is of the married state more widely. Nuptials as a noun is the ceremony (often slightly jokey). Do not leave the rota unnamed because the leave is nuptial rather than sick.',
    ['Nuptial leave is still leave: name the cover on the rota.', 'Wedding is everyday (already in the dictionary). Marital is of marriage as a state. Bridal is of the bride. A ceremony can be nuptial. Cover on the night clinic is a staffing fact. The adjective does not fill the post. Write the deputy’s name.'],
    'Of a wedding (formal). Everyday: wedding / marital. Noun: nuptials (the ceremony). Leave still needs a named cover.',
    ['wedding']
  ),
}
