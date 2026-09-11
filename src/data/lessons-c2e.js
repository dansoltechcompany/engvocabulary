const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2E = {
  aberration: L(
    'An aberration is something that is not typical, usually a one-off mistake or oddity: a statistical aberration, an aberration from her usual standard. Oddity and blip are everyday; anomaly is a close technical cousin; deviation is cooler and more measured. Aberrant is the adjective. Formal. In speech, a one-off or a blip is enough. An aberration is untypical, not a new trend. Do not rebrand a pattern of failure as an aberration to protect a reputation.',
    ['The low score was an aberration, not the trend: the next three papers recovered.', 'Calling the outburst an aberration convinced nobody who had sat through the term.'],
    'A one-off oddity; not the rule. Formal. Everyday: blip / one-off. Close: anomaly. Adjective: aberrant. Contrast: a trend or habit you are pretending is unique.',
    ['anomaly']
  ),
  abhor: L(
    'To abhor is to hate something because you think it is morally wrong: abhor cruelty, abhor hypocrisy. Hate is everyday; loathe is a close synonym, often more personal; detest is strong but not always moral. Abhorrence is the noun; abhorrent is the adjective (abhorrent to). Formal, almost biblical in tone. In speech, cannot stand or find it morally disgusting is enough. Abhor judges the thing as wicked, not merely annoying. Do not abhor a mild delay.',
    ['She abhors cruelty to animals and will not fund the circus trip.', 'The committee found the proposal abhorrent, not merely impractical.'],
    'Hate on moral grounds (formal). Everyday: hate / cannot stand. Close: loathe. Noun: abhorrence. Adjective: abhorrent (to). Not a synonym for dislike.',
    ['loathe']
  ),
  avarice: L(
    'Avarice is extreme greed for money or possessions: a study of avarice, avarice of the landlords. Greed is the everyday word; cupidity is a close, even more literary cousin; miserliness stresses not spending. Avaricious is the adjective. Formal and disapproving — almost always a vice in the telling. In speech, greed is enough. Avarice is hunger for more, not mere careful budgeting. Do not use it for a sensible saving habit you happen to dislike.',
    ['The novel is a study of avarice: every kindness is priced.', 'Avarice, not need, explained the fees: the books still came from a photocopier.'],
    'Extreme greed (formal, disapproving). Everyday: greed. Close: cupidity. Adjective: avaricious. A vice, not thrift. Literary/moralising tone.',
    ['greed']
  ),
  cajole: L(
    'To cajole is to persuade someone by pleasant talk or flattery: cajole him into staying, cajole a favour. Persuade is everyday and broader; coax is a close synonym, often gentler; sweet-talk is informal; wheedle can sound more manipulative. Cajolery is the rare noun. In speech, talk someone into it / sweet-talk is enough. Cajole uses charm, not force. It can be affectionate or sly depending on the motive. Do not call a clear order cajoling.',
    ['They cajoled him into staying an extra hour with coffee and a fair share of the credit.', 'You cannot cajole a deadline; you can only cajole the person who owns it.'],
    'cajole someone into + -ing. Persuade by charm/flattery. Everyday: talk into / sweet-talk. Close: coax. Contrast: order; threaten. Tone: warm or sly.',
    ['coax']
  ),
  conciliate: L(
    'To conciliate is to end a disagreement by making people less angry: conciliate both sides, conciliate a critic. Calm down is everyday for feelings; reconcile is close when the relationship is restored; appease can mean give in to keep the peace (often critical); mediate is the go-between’s job. Conciliation is the noun (ACAS-style conciliation in British employment). Formal. In speech, calm things down / make peace is enough. Conciliate the people, not the abstract “issue” alone.',
    ['The chair tried to conciliate both sides without emptying the motion of meaning.', 'Conciliation talks stalled: neither side would concede the timetable.'],
    'Calm a dispute; win people round. Formal. Noun: conciliation. Everyday: make peace / calm things down. Close: reconcile. Contrast: appease (often pejorative).',
    ['reconcile']
  ),
  enervate: L(
    'To enervate is to take away energy or strength: the heat enervated the team, an enervating routine. Exhaust and drain are everyday; weaken is broader; debilitate is a close medical cousin. Enervating is the common adjective. Formal, slightly literary. A famous trap: enervate looks as if it might mean energise — it means the opposite. In speech, drain of energy is enough. Use it for a draining effect, not a single busy hour you enjoyed.',
    ['The heat enervated the whole team; the match became a walk in slow motion.', 'An enervating round of meetings left no wit for the actual teaching.'],
    'Drain of energy (formal). Everyday: exhaust / drain. Close: debilitate. Adjective: enervating. False friend: it does not mean energise.',
    ['drain']
  ),
  evanescent: L(
    'Evanescent means lasting only a very short time; quickly fading: evanescent fame, an evanescent smile. Short-lived is everyday; fleeting is a close synonym; ephemeral is a close literary cousin; transient is cooler and more technical. Literary. In speech, gone in a moment or short-lived is enough. Evanescent praises or mourns fragility — a scent, a mood, a trend. Do not use it for a two-year contract you simply dislike.',
    ['Fame on the app felt evanescent: a day of noise, then silence.', 'The evanescent light on the wet playground was beautiful and useless for the photograph.'],
    'Quickly fading (literary). Everyday: short-lived / fleeting. Close: ephemeral. Of moods, fame, light, trends — not a sturdy timetable.',
    ['ephemeral']
  ),
  feckless: L(
    'Feckless means lacking purpose, effort, or a sense of responsibility: a feckless plan, a feckless heir. Irresponsible is everyday; inept stresses lack of skill; lazy is narrower. Strongly disapproving, slightly old-fashioned British. In speech, useless and irresponsible is the charge. Feckless attacks character or a plan’s will, not a single honest mistake. Do not call a tired beginner feckless.',
    ['A feckless plan with no dates will fail, however kind the intention.', 'Feckless leadership left the volunteers to invent a rota at midnight.'],
    'Weak, aimless, irresponsible (disapproving). Everyday: irresponsible. Close: inept (skill), lazy (effort). Character or will, not one error. Slightly dated British sting.',
    ['irresponsible']
  ),
  fractious: L(
    'Fractious means easily annoyed and hard to control; quarrelsome: a fractious meeting, a fractious class. Irritable is everyday; quarrelsome is a close cousin; unruly stresses not obeying. Often of groups, children, or debates that start to splinter. In speech, tetchy and hard to manage is enough. Fractious is mood and manageability, not a principled dissent. Do not use it for a calm, organised protest.',
    ['The meeting grew fractious after lunch; two people talked over the chair.', 'A fractious class on a wet Friday still needs a plan, not a sermon about gratitude.'],
    'Irritable and hard to manage. Everyday: tetchy / quarrelsome. Close: unruly (behaviour). Groups, children, debates. Contrast: principled, orderly disagreement.',
    ['quarrelsome']
  ),
  inchoate: L(
    'Inchoate means just beginning and not yet fully formed: an inchoate idea, inchoate anger. Unformed and embryonic are close; nascent is a cousin that can already be a little more real; vague is everyday and looser. Formal. In speech, not yet formed is enough. Inchoate can be promising or merely messy. Do not call a finished but bad essay inchoate — that is weak, not unformed. In law, inchoate offences are incomplete crimes (a technical sense).',
    ['The idea was still inchoate: a title, a hunch, no method.', 'Inchoate resentment in the staffroom became a motion once someone wrote it down.'],
    'Not yet fully formed (formal). Everyday: unformed. Close: nascent / embryonic. Contrast: finished but poor. Legal: inchoate offences (incomplete crimes).',
    ['unformed']
  ),
  jejune: L(
    'Jejune means naive, dull, or too thin for the subject: a jejune analysis, jejune remarks. Simplistic is everyday and milder; immature and thin are close; vapid stresses emptiness. Formal, and typically pejorative — a put-down of someone’s thought, not a neutral “beginner.” In speech, thin and naive or intellectually undernourished is the charge. Use it knowing it sounds unkind and donnish. Do not reach for jejune as a clever synonym for simple when simple was adequate; the word sneers.',
    ['The analysis was jejune and skipped the data; simplicity was not the problem, shallowness was.', 'A jejune “be kind” slide is not an ethics module — and jejune is itself a sneer, so use it sparingly.'],
    'Naive, dull, or intellectually thin (formal, pejorative). Everyday: simplistic / thin. A donnish insult, not a neutral “simple.” Do not use it as stylish scorn for beginners.',
    ['simplistic']
  ),
  lugubrious: L(
    'Lugubrious means looking or sounding very sad, often in an exaggerated way: a lugubrious sigh, a lugubrious voice. Sad is everyday; mournful is close; gloomy is broader; sepulchral is even more funereal. Slightly comic in modern use — the sadness is performed or overdone. In speech, exaggeratedly mournful is enough. Lugubrious describes manner, not a clinical depression. Do not use it as a solemn medical word.',
    ['He gave a lugubrious sigh at the homework as if it were a funeral programme.', 'The lugubrious soundtrack fought the comedy; the jokes never recovered.'],
    'Exaggeratedly mournful (often slightly comic). Everyday: gloomy / mournful. Manner and tone, not diagnosis. Literary/humorous more than clinical.',
    ['mournful']
  ),
  munificent: L(
    'Munificent means very generous with money or gifts: a munificent donor, a munificent gift. Generous is everyday; lavish is close; bountiful is a literary cousin. Munificence is the noun. Formal, slightly old-fashioned praise. In speech, extremely generous is enough. Munificent is scale — a library wing, not a biscuit. Do not use it ironically for a tiny concession unless you want the irony to show.',
    ['A munificent donor paid for the library and asked for no brass plaque.', 'Munificent in public, he was exacting about every line of the accounts.'],
    'Extremely generous (formal). Everyday: extremely generous. Close: lavish. Noun: munificence. Scale of gifts, not a small courtesy. Slightly old-fashioned.',
    ['lavish']
  ),
  myopic: L(
    'Myopic means unable to see far (the medical sense), and more often, lacking long-term thinking: a myopic policy, myopic leadership. Short-sighted is the everyday British equivalent for both senses; narrow is looser. Myopia is the noun. In speech, short-sighted is almost always better. The figurative sense is critical: cheap now, costly later. Do not call a carefully limited brief myopic if the limit was the point.',
    ['The policy was myopic: cheap now, costly later, and nobody owned the later.', 'Myopic focus on one metric starved the rest of the curriculum.'],
    'Short-sighted (eyes, or planning). Everyday: short-sighted. Noun: myopia. Figurative = critical of missing the long term. Contrast: a deliberately narrow brief.',
    ['short-sighted']
  ),
  neologism: L(
    'A neologism is a newly invented word or expression: a journalistic neologism, coin a neologism. New word is everyday; coinage is a close synonym; slang may be new but is not always a crafted invention. Neologistic is rare as an adjective. In speech, a newly coined word is enough. Some neologisms stick; most die. Do not call an old word used in a new sentence a neologism, and do not sneer at every useful new term as a neologism in the insulting sense.',
    ['“Staycation” was once a neologism; now it is merely a word some people dislike.', 'The report’s neologisms (“learnings,” “cascade the vision”) did not hide the missing budget line.'],
    'A newly coined word or phrase. Everyday: a new word. Close: coinage. Contrast: slang (groupy, not always invented); an old word in a new sentence.',
    ['coinage']
  ),
  odious: L(
    'Odious means extremely unpleasant and deserving hatred: odious remarks, an odious policy. Hateful is everyday; repulsive and loathsome are close; nasty is far weaker. Formal, moral heat. In speech, hateful or disgusting is enough. Odious judges character or conduct, not a mildly ugly building. Do not sprinkle it on ordinary annoyances; the word is a moral sledgehammer.',
    ['The odious remarks had no place in class, joke or not.', 'An odious clause in the contract shifted all risk to the intern.'],
    'Hateful; morally disgusting (formal, strong). Everyday: hateful. Close: loathsome. Of conduct, speech, or policy. Not a mild dislike.',
    ['loathsome']
  ),
  officious: L(
    'Officious means too eager to tell people what to do, in an annoying official way: an officious clerk, officious interference. Bossy is everyday; bureaucratic can be cold without being personally interfering; self-important is close. Strongly unkind as a description. In speech, bossy in a petty official way is the picture. Officious is not official (authorised). The mix-up is common and disastrous in tone: official is neutral-to-formal; officious sneers.',
    ['An officious clerk blocked the simple request and quoted a rule that did not exist.', 'Officious emails “just checking you saw my earlier email” are not the same as being official.'],
    'Petty, interfering, self-important (disapproving). Everyday: bossy. Contrast: official = authorised (neutral). A classic false friend.',
    ['bossy']
  ),
  palliate: L(
    'To palliate is to make a disease or problem less severe without curing it: palliate the shortage, palliative care. Ease is everyday; alleviate is a close academic cousin; soothe is milder. Palliation and palliative are the related forms (palliative measures). Formal, medical and political. In speech, ease without fixing is enough. Palliate can also mean disguise the seriousness of a fault (palliate an offence). Do not call a real cure palliation.',
    ['The measures only palliate the shortage; they do not recruit the missing teachers.', 'Palliative care eased the pain; nobody pretended it was a cure.'],
    'Ease without curing (formal). Everyday: ease / take the edge off. Close: alleviate. Related: palliative. Also: gloss over a fault. Contrast: cure / remedy.',
    ['alleviate']
  ),
  peremptory: L(
    'Peremptory means expecting to be obeyed at once and allowing no discussion: a peremptory email, a peremptory tone. Bossy is everyday; blunt is milder; imperious is a close, more aristocratic cousin. Formal, and usually rude as a description of manner. In law, a peremptory challenge has a technical sense. In speech, allowing no argument is enough. A peremptory order may be necessary in a fire drill; in a request for help it is a fault of tone. Do not confuse it with pre-emptory (not the usual word) or with preempt (forestall).',
    ['A peremptory email is a poor way to ask for help from volunteers.', 'His peremptory “just do it” ended the discussion and the goodwill.'],
    'Admitting no refusal or debate (formal; often rude). Everyday: bossy / no argument. Close: imperious. Contrast: a necessary emergency order. Not preempt.',
    ['imperious']
  ),
  petulant: L(
    'Petulant means childishly sulky or bad-tempered when you do not get your way: a petulant reply, petulant complaints. Sulky is everyday; peevish is a close cousin; childish is broader. Disapproving, of adults more stingingly than of children. In speech, sulky and childish is enough. Petulance is the noun. It is small-scale bad temper, not a principled stand. Do not call firm disagreement petulant to win the room.',
    ['A petulant reply will not help in an interview; nor will it help in a seminar.', 'Petulant sighs at the rota change impressed nobody who already worked the unsocial hours.'],
    'Childishly sulky when thwarted. Everyday: sulky. Close: peevish. Noun: petulance. Small-scale temper, not principled dissent. Harsher of adults.',
    ['sulky']
  ),
  phlegmatic: L(
    'Phlegmatic means calm and not easily excited or upset: a phlegmatic manner, phlegmatic under pressure. Calm is everyday; unflappable is a close informal cousin; stoical adds endurance of pain; impassive can mean no visible feeling at all. In speech, unflappable is enough. Phlegmatic can be praise (steady) or a slight (too cool, under-reacting). From the old humour “phlegm.” Do not use it for someone who is merely silent from fear.',
    ['Her phlegmatic manner steadied the team when the lights failed.', 'A phlegmatic shrug is not a plan; it is a temperament, sometimes a useful one.'],
    'Calmly unemotional; unflappable. Everyday: calm / unflappable. Close: stoical (endurance). Praise or slight (too cool). Contrast: frozen by fear.',
    ['unflappable']
  ),
  prevaricate: L(
    'To prevaricate is to avoid telling the truth by speaking unclearly or stalling: stop prevaricating, prevaricate about the figures. Lie is everyday and blunter; equivocate is a close cousin (ambiguous on purpose); stall and hedge are more informal. Prevarication is the noun. Formal, accusatory. In speech, stop dodging the question is enough. Prevaricate is evasion, not a pause to think. Do not accuse a careful qualifier of prevarication without cause.',
    ['Stop prevaricating and answer the question: yes, or no, with a date.', 'He prevaricated about the missing funds until the minutes named the amount.'],
    'Dodge the truth by stalling or fog (formal). Everyday: dodge / hedge. Close: equivocate. Noun: prevarication. Accusatory. Contrast: a genuine pause to think.',
    ['equivocate']
  ),
  profligate: L(
    'Profligate means recklessly wasteful with money or resources: profligate spending, a profligate use of paper. Wasteful is everyday; extravagant is close; spendthrift is a noun/adjective for a person. Profligacy is the noun. Formal, disapproving. Older English also used profligate of a dissolute life. In speech, recklessly wasteful is enough. Profligate is scale and carelessness, not a treat you planned and could afford. Do not use it for a well-costed investment you happen to oppose.',
    ['Profligate spending emptied the budget before Easter.', 'A profligate print run of unread booklets is not “visibility”; it is waste.'],
    'Recklessly wasteful (formal, disapproving). Everyday: wasteful. Close: extravagant. Noun: profligacy. Also (older): dissolute. Contrast: a planned, affordable outlay.',
    ['wasteful']
  ),
  pugnacious: L(
    'Pugnacious means eager to argue or fight: a pugnacious style, pugnacious in debate. Aggressive is everyday and broader; combative is a close cousin; belligerent is hotter. Slightly literary or journalistic. In speech, spoiling for a fight is the picture. Pugnacious can be faint praise for a debater or a warning in a seminar. It is temperament, not a single firm rebuttal. Do not call a quiet, precise disagreement pugnacious.',
    ['His pugnacious style does not suit a seminar that is trying to read a page together.', 'A pugnacious opening won the floor and lost the committee.'],
    'Eager to fight or argue. Everyday: aggressive / spoiling for a fight. Close: combative. Journalistic/literary. Temperament, not one firm point.',
    ['combative']
  ),
  quagmire: L(
    'A quagmire is a soft wet area of land, and more often a complicated, messy situation you sink into: a legal quagmire, a political quagmire. Mess is everyday; swamp is a close metaphor; morass is a literary cousin. In speech, a messy trap is enough. The metaphor implies struggle and suction — the more you move, the deeper you go. Do not call a simple delay a quagmire.',
    ['The project became a legal quagmire of overlapping contracts.', 'Without a map, the real bog was a quagmire; the metaphor, for once, was also mud.'],
    'A bog; more often a messy, sucking predicament. Everyday: a mess you cannot step out of. Close: morass / swamp. Metaphor of sinking. Not a minor snag.',
    ['morass']
  ),
  sententious: L(
    'Sententious means trying to sound wise with moral remarks, in a pompous way: a sententious speech, sententious advice. Preachy is everyday; moralising is a close cousin; pompous is broader. Strongly unkind. In speech, pompously preachy is enough. A sententious person deals in maxims instead of argument. Do not confuse it with sentence (grammar) or with succinct (brief and good). The word sneers at fake wisdom.',
    ['A sententious speech bored the graduates; they had wanted a method, not a proverb.', 'Sententious footnotes (“as life teaches us”) are not a literature review.'],
    'Pompously moralising (disapproving). Everyday: preachy. Close: moralising. Contrast: succinct (praise); a genuine moral argument. Not “about sentences”.',
    ['preachy']
  ),
  stymie: L(
    'To stymie is to prevent progress; to block a plan: stymied by missing data, stymie the reform. Block is everyday; thwart and foil are close; hamper is milder. Informal-to-neutral, originally from golf. In speech, block or stop in its tracks is enough. Stymie is an obstacle, often unexpected. Do not use it for a refusal you simply dislike — the word is the blockage of progress, not mere disagreement.',
    ['Missing data stymied the analysis until the archive reopened.', 'A single missing signature stymied the trip; the coach sat in the car park.'],
    'Block / thwart progress. Everyday: block. Close: thwart. Milder: hamper. An obstacle to getting on, not a difference of opinion alone.',
    ['thwart']
  ),
  tantamount: L(
    'Tantamount means equal in effect to something, usually something worse or more serious: tantamount to agreement, tantamount to a refusal. Equivalent is everyday and cooler; as good as is informal. The pattern is tantamount to + noun/-ing. Formal. In speech, as good as or amounts to is enough. Tantamount does not mean identical in form — it means the practical upshot is the same. Do not use it for a mild likeness.',
    ['Silence was tantamount to agreement, and the minutes recorded it as such.', 'Cutting the bus was tantamount to excluding the outlying villages.'],
    'tantamount to. Equal in effect (often to something graver). Formal. Everyday: as good as / amounts to. Close: equivalent (cooler). Effect, not identical form.',
    ['equivalent']
  ),
  temerity: L(
    'Temerity is foolish or shocking boldness, often ironic: have the temerity to argue, the temerity to ask. Cheek and nerve are everyday British; audacity is a close cousin (can be admiring); rashness is less ironic. Formal, frequently sarcastic: the speaker is offended that you dared. In speech, the nerve to is enough. Temerity is the daring judged as impudent, not courage praised. Do not use it as a compliment for bravery.',
    ['He had the temerity to argue with the examiner — and, as it happened, he was right.', 'She had the temerity to invoice for the extra weekend; the tone of “temerity” was the board’s, not a fact.'],
    'have the temerity to + infinitive. Shocking boldness, often ironic. Everyday: nerve / cheek. Close: audacity. Usually a sneer, not praise for courage.',
    ['audacity']
  ),
  verbose: L(
    'Verbose means using more words than are needed: a verbose introduction, verbose instructions. Wordy is everyday; long-winded is a close cousin; prolix is a rarer literary synonym. Verbosity is the noun. Disapproving, of style. In speech, too wordy is enough. Verbose is quantity without payoff, not merely long. A long, tight chapter is not verbose. Do not confuse it with verbal (of words or spoken, not “too many words”).',
    ['Cut the verbose introduction; the argument starts on page three.', 'Verbose feedback buried the one mark that would have helped: “check agreement.”'],
    'Wordy; more words than needed (disapproving). Everyday: wordy / long-winded. Noun: verbosity. Contrast: long but tight; verbal = of words/speech, not “too long”.',
    ['wordy']
  ),
}
