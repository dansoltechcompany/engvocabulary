const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2L = {
  illustrious: L(
    'Illustrious means famous and highly respected for achievement (formal): an illustrious career, an illustrious predecessor. Famous is everyday and can be cheap; distinguished is a close twin. Infamous (already in the dictionary) is famous for the wrong reason — the classic trap. Do not call a well-branded keynote illustrious when the n is empty.',
    ['An illustrious keynote does not excuse an empty n.', 'Famous is everyday. Distinguished is close. Infamous is notorious (already in C1). Illustrious names still owe a methods sentence. A logo is not a laureate.'],
    'Famous and highly respected. Everyday: famous. Close: distinguished. Contrast: infamous (famous for harm). A name is not a sample size.',
    ['distinguished']
  ),
  imbue: L(
    'To imbue is to fill a person, place, or thing with a quality or idea: imbue with confidence, imbued with a sense of duty. Fill with is everyday; infuse is a cousin (often liquid or flavour). Imbibe is drink — a lookalike. Do not write imbue for a training video that never reached the rota.',
    ['A brand film cannot imbue a rota with a spare invigilator.', 'Fill with is everyday. Infuse tea, or infuse a team with energy, is a cousin. Imbibe is drink. You imbue X with Y. A slogan on the wall is not a quality in the staff.'],
    'Fill with a quality (imbue with). Everyday: fill with. Cousin: infuse. Mix-up: imbibe (drink). A film is not a post.',
    []
  ),
  immaculate: L(
    'Immaculate means perfectly clean, or without fault: an immaculate room, immaculate timing. Spotless is everyday for dirt; flawless is a cousin. Impeccable (this batch) is more about behaviour, taste, or performance than dust. The Immaculate Conception is a separate religious phrase. Do not call a tidy cover slide immaculate if the appendix is empty.',
    ['An immaculate slide deck still hid a missing date in the appendix.', 'Spotless is everyday. Impeccable manners (this batch) are social polish. Maculate is rare for stained. A clean room can be immaculate; a clean lie in the n cannot.'],
    'Spotless; faultless. Everyday: spotless. Cousin: impeccable (conduct/taste). A tidy slide is not a complete paper.',
    ['spotless']
  ),
  impeccable: L(
    'Impeccable means without fault, especially of manners, taste, English, or timing: impeccable judgement, impeccable French. Perfect is everyday; faultless is close. Immaculate (this batch) is often cleanliness. Peccadillo is a small fault — same Latin pecc- (sin). Do not award impeccable to courtesy that skips the fire door.',
    ['Impeccable manners at the board did not restore the night bus.', 'Perfect is everyday. Immaculate is spotless (this batch). Unimpeachable is a legal/moral cousin. Polish without a date is still a gap. You can have impeccable prose and a missing n.'],
    'Faultless (manners, taste, performance). Everyday: perfect. Contrast: immaculate (often clean). Courtesy ≠ cover.',
    ['faultless']
  ),
  impetuous: L(
    'Impetuous means acting in a rush, without thought: an impetuous decision, impetuous youth. Rash and hasty are everyday; impulsive (impulse is already in the dictionary) is a close twin. Imperious (already in the dictionary) is arrogantly commanding — a lookalike. Do not call a dated, minuted decision impetuous merely because someone dislikes it.',
    ['An impetuous tweet broke the embargo before the paper was live.', 'Hasty is everyday. Impulsive is a sudden urge. Imperious is bossy (already in C2). Impetus is a driving force (already in the dictionary). Speed with a protocol can be diligence; speed that skips the embargo is impetuous.'],
    'Rash; hasty. Everyday: rash / hasty. Close: impulsive. Mix-up: imperious (commanding). A logged decision is not automatically rash.',
    ['rash']
  ),
  impunity: L(
    'Impunity is freedom from punishment or from the usual cost: with impunity, act with impunity. Immunity (immune is already in the dictionary) is protection, often medical or legal; they are cousins, not twins. Punish is the everyday verb hiding in the word. Do not grant impunity to a shared login because “we have always done it”.',
    ['They edited the n with impunity until the appendix was opened.', 'Without punishment is the gloss. Immunity to measles is medical (already in the dictionary). Impugn (already in C2) is attack a claim — a lookalike. If the log is checked, there was never impunity, only delay.'],
    'No punishment (usually with impunity). Everyday: without punishment. Cousin: immunity (protection). Mix-up: impugn. A habit is not a defence.',
    []
  ),
  inane: L(
    'Inane means empty of sense; pointlessly silly: inane remarks, an inane grin. Silly and stupid are everyday; vacuous (already in the dictionary) is a close C2 twin. Inane is not insane. Do not call a short, accurate date inane because it is not a joke.',
    ['An inane ice-breaker wasted the only hour with the statistician.', 'Silly is everyday. Vacuous is empty-headed (already in C2). Insane is mad — a lookalike. A numbered fact can be dry without being inane. An ice-breaker that eats the methods slot is.'],
    'Pointlessly silly; empty. Everyday: silly. Close: vacuous. Mix-up: insane. Brevity with a date is not inanity.',
    ['silly']
  ),
  incendiary: L(
    'Incendiary means designed to start a fire, or, of speech, likely to inflame: an incendiary device, incendiary comments. Inflammatory is the close cousin for remarks; arson is the crime. Incense (make angry / a scent) is related. Do not call a numbered safety objection incendiary to shut it down.',
    ['An incendiary leak of draft grades is not “robust debate”.', 'Inflammatory is the speech cousin. A firebomb is the literal sense. Incense someone is anger them. A dated risk in the minutes can anger people and still be the right item. Theatre is not the same as naming a flame.'],
    'Fire-starting; inflammatory. Everyday (speech): inflammatory. Literal: causing fire. A required safety point is not incendiary for being unwelcome.',
    ['inflammatory']
  ),
  incisive: L(
    'Incisive means sharp and clear, cutting quickly to what matters: incisive criticism, an incisive mind. Sharp and penetrating are cousins; concise (already in the dictionary) is short and clear — related, not the same. Incise is cut; an incision is a surgical cut. Do not call a rude interruption incisive.',
    ['An incisive question about the n ended the slogan.', 'Sharp is everyday. Concise is brief (already in C1). Incisors cut food. A short insult is not incisive. A question that finds the missing cell is.'],
    'Sharply clear-minded. Everyday: sharp. Cousin: concise (brief). Mix-up: a cutting tone without a point. Rudeness is not insight.',
    ['sharp']
  ),
  incongruous: L(
    'Incongruous means out of place because it does not fit: look incongruous, an incongruous pairing. Odd and out of place are everyday; incongruity is the noun. Congruent is in agreement (maths and formal). Do not call a required fire notice incongruous because it spoils a photograph.',
    ['A balloon arch looked incongruous beside the fire-door minute.', 'Out of place is everyday. Incongruity is the noun. Congruent triangles match. A safety sign can clash with the bunting and still belong. Decor that hides an exit is the problem, not the minute.'],
    'Out of place; clashing. Everyday: out of place. Noun: incongruity. Opposite flavour: congruent. A needed notice is not a styling error.',
    []
  ),
  incredulous: L(
    'Incredulous means unwilling or unable to believe: an incredulous stare, incredulous that…. Incredible is “hard to believe / excellent” — the classic mix-up (you are incredulous; the story may be incredible). Credulous (already in the dictionary) is too ready to believe. Do not write incredulous for a person who simply has not read the appendix.',
    ['The auditor was incredulous that the CSV lived in a shared drive.', 'Incredible is the story, not the face. Credulous is gullible (already in C2). Incredulity is the noun. If the folder is still unopened, the problem is search, not belief. Raise an eyebrow after you have looked.'],
    'Unwilling to believe. Mix-up: incredible (the thing). Opposite: credulous (too ready to believe). Look in the folder first.',
    []
  ),
  indefatigable: L(
    'Indefatigable means seemingly unable to tire; persistent in a formal, often admiring way: indefatigable campaigner, indefatigable energy. Tireless is everyday; indomitable (this batch) is unconquerable in spirit, not merely unflagging. Fatigue is tiredness. Do not use indefatigable as a reason to leave a post unfilled.',
    ['An indefatigable intern still cannot be the whole night rota.', 'Tireless is everyday. Indomitable is unconquerable (this batch). Fatigable is rare; fatigue is common. Admiration for stamina is not a staffing model. Two names on the rota beat one legend.'],
    'Tireless (formal). Everyday: tireless. Contrast: indomitable (cannot be defeated). Stamina ≠ a second post.',
    ['tireless']
  ),
  indignant: L(
    'Indignant means angry because you think something is unfair or insulting: indignant at, an indignant reply. Angry is everyday; indignation is the noun. Dignified is composed — a lookalike, not a synonym. Do not call a numbered objection indignant as a way to dismiss it.',
    ['She was indignant that “noted” sat beside an open flame risk.', 'Angry is everyday. Outraged is stronger. Dignity is self-respect. Indignation can be justified. A date in the minute is still a date, however warm the tone. Sulking without a fact is not indignation; it is a sulk.'],
    'Angry at unfairness. Everyday: angry. Noun: indignation. Mix-up: dignified (composed). Tone does not unsay a risk.',
    ['angry']
  ),
  indolent: L(
    'Indolent means lazy, especially as a settled habit (formal / literary): an indolent afternoon, indolent management. Lazy is everyday; idle can be “not working” without blame (idle machinery). Do not call a waiting protocol indolent because it is paused on purpose.',
    ['An indolent “we’ll see” left the clinic without a spare key.', 'Lazy is everyday. Idle plant is unused kit. Languid is slow and unhurried, sometimes stylish. A minuted pause with a return date is not indolence. Leaving the key unowned is.'],
    'Habitually lazy (formal). Everyday: lazy. Contrast: idle (can be unused, not lazy). A planned pause is not indolence.',
    ['lazy']
  ),
  indomitable: L(
    'Indomitable means impossible to defeat or discourage: indomitable spirit, indomitable will. Unconquerable is the gloss; brave is everyday and weaker. Indefatigable (this batch) is tireless. Dominate sits in the root. Do not praise indomitable morale as a substitute for kit.',
    ['Indomitable goodwill is not a second invigilator.', 'Unconquerable is close. Indefatigable is tireless (this batch). Intrepid (this batch) is fearless, often of a person going somewhere. Spirit still needs a rota. A slogan about “resilience” is not a spare key.'],
    'Unconquerable in spirit. Everyday: unconquerable / unbeatable. Contrast: indefatigable (tireless); intrepid (fearless). Morale ≠ kit.',
    []
  ),
  ingenuous: L(
    'Ingenuous means innocent, frank, and often too trusting: an ingenuous question, ingenuously admitted. It is not ingenious (already in the dictionary) — that is cleverly inventive (/ɪnˈdʒiːniəs/ vs /ɪnˈdʒenjuəs/). Disingenuous is insincerely pretending to be naïve. Do not call a junior ingenuous merely for asking where the date went.',
    ['An ingenuous intern believed the embargo was optional.', 'Ingenious is clever (already in C1) — the classic C2 mix-up. Naive is everyday. Disingenuous is fake innocence. A fair question about a missing cell is diligence, not ingenuousness. Believing a slogan over a protocol is.'],
    'Naively frank. Everyday: naive / frank. Contrast: ingenious (clever) — already in this dictionary. Opposite flavour: disingenuous. Asking for the date is not naivety.',
    ['naive']
  ),
  ingratiate: L(
    'To ingratiate yourself is to win favour by pleasing, often insincerely: ingratiate yourself with the board. Flatter and suck up are everyday; sycophant (already in the dictionary) is the person. Gratia is favour — related to grateful, not automatic gratitude. Do not ingratiate by hiding the n.',
    ['Do not ingratiate yourself with the board by hiding the missing n.', 'Flatter is everyday. A sycophant is the noun (already in C2). Ingratiating is the adjective, usually disapproving. Courtesy with a correction is professionalism. Courtesy that buries a figure is the problem.'],
    'Curry favour (ingratiate yourself with). Everyday: flatter / suck up. Noun cousin: sycophant. Charm that hides the n is not diplomacy.',
    []
  ),
  innocuous: L(
    'Innocuous means not harmful and not likely to offend: an innocuous remark, look innocuous. Harmless is everyday; inoffensive is close. Inane (this batch) is silly, not merely harmless. Noxious is harmful — the opposite flavour. Do not call a missing consent clause innocuous.',
    ['The email looked innocuous; the attachment was last year’s grades.', 'Harmless is everyday. Inane is empty-headed (this batch). Noxious fumes are harmful. A typo in a name can be innocuous; a wrong year in a table is not. “It was only a joke” does not make a leak innocuous.'],
    'Harmless; inoffensive. Everyday: harmless. Contrast: inane (silly); noxious (harmful). Looking mild is not the same as being safe.',
    ['harmless']
  ),
  innuendo: L(
    'An innuendo is an indirect hint, usually unpleasant, sexual, or damaging: a campaign of innuendo, sexual innuendo. Hint and implication are everyday; insinuate (this batch) is the verb for slipping the hint in. Implicit (already in the dictionary) vs explicit (already in the dictionary) is the wider pair: innuendo stays implicit on purpose. Do not minute innuendo in place of a named fact.',
    ['Innuendo in the minutes is not a finding; name the date.', 'A hint can be innocent. Insinuate is the verb (this batch). Implicit is unspoken (already in C1); explicit is spelled out (already in B2). If you mean a charge, write it and own it. A smirk in the corridor is not evidence.'],
    'An oblique, often nasty, hint. Everyday: hint. Verb cousin: insinuate. Pair: implicit vs explicit. Minutes need a named fact, not a wink.',
    ['hint']
  ),
  inordinate: L(
    'Inordinate means unreasonably large: inordinate delay, inordinate amount of time. Excessive and huge are everyday; ordinary is a lookalike, not an opposite (the opposite flavour is moderate). Ordinate in maths is a different word. Do not call a legally required review inordinate because it is long.',
    ['Inordinate time on the logo left no hour for the fire door.', 'Excessive is everyday. Disproportionate is a cousin. Ordinary is “usual” — a lookalike. A long ethics appendix can be the job. Three weeks on a colour palette is inordinate if the exit is unsigned.'],
    'Excessive; unreasonably large. Everyday: excessive. Mix-up: ordinary (usual). Length required by a protocol is not inordinate.',
    ['excessive']
  ),
  insinuate: L(
    'To insinuate is to suggest something unpleasant without saying it straight: insinuate that…; also to slide yourself in (insinuate yourself into). Imply is wider and can be neutral; implicit (already in the dictionary) is the unspoken quality, explicit the spelled-out one. Innuendo (this batch) is often the noun. Do not insinuate a charge you will not table.',
    ['Do not insinuate fraud; table the two figures.', 'Imply can be any hint. Innuendo is the noun (this batch). Explicit is clear (already in B2). Insinuate yourself into a clique is the other sense. A comparison of two cells is evidence; a raised eyebrow is not.'],
    'Hint something nasty; also worm your way in. Everyday: hint / imply. Noun: innuendo. Contrast: explicit. Table the figure or do not hint it.',
    ['imply']
  ),
  insolent: L(
    'Insolent means insultingly rude, especially to someone with authority: an insolent tone, insolent disregard. Rude is everyday; impudent is a close twin. Insouciant (already in the dictionary) is casually unconcerned — a lookalike. Do not call a junior insolent for asking where the date went.',
    ['An insolent aside about the intern is still a conduct issue.', 'Rude is everyday. Impudent is cheeky-rude. Insouciant is unworried (already in C2). A precise refusal under a protocol is not insolence. A sneer at the person minuting the fire door is.'],
    'Insultingly rude. Everyday: rude. Close: impudent. Mix-up: insouciant (unconcerned). A fair question about a date is not insolence.',
    ['rude']
  ),
  insular: L(
    'Insular means inward-looking and unwilling to meet other views; also “of an island”: an insular clique, insular habits. Narrow-minded is everyday; hermetic (already in the dictionary) is sealed against outsiders. An island is the root (insula). Do not call a specialist lab insular merely for having a lock.',
    ['An insular clique wrote the timetable and skipped the night bus.', 'Narrow-minded is everyday. Hermetic is sealed (already in C2). Insulated is wrapped against heat — a cousin look. A locked fridge can be correct. A group that never reads another department’s risk register is insular.'],
    'Inward-looking; also of an island. Everyday: narrow-minded. Cousin: hermetic (sealed). A lock can be safety; a clique skipping the bus is not.',
    []
  ),
  intrepid: L(
    'Intrepid means very brave, not shrinking from danger or difficulty: intrepid traveller, intrepid reporter. Brave is everyday; fearless is close. Trepidation (already in the dictionary) is fear — the same Latin root. The word is sometimes slightly ironic in UK use. Do not call a press officer intrepid for sending a draft without legal.',
    ['An intrepid press officer still needs a lawyer on the embargo.', 'Brave is everyday. Indomitable is unconquerable (this batch). Trepidation is anxiety (already in C2). Irony: “our intrepid intern” can be fond or mocking. Courage without a protocol is still a leak risk.'],
    'Fearless (sometimes wry). Everyday: brave / fearless. Root cousin: trepidation (fear). Contrast: indomitable (cannot be beaten). Dash ≠ a clearance.',
    ['brave']
  ),
  inure: L(
    'To inure is to harden someone by habit so that an unpleasant thing no longer shocks: be inured to delay, inured to noise. Used to and hardened are everyday; enure is an older spelling, and enure to in law can mean “take effect for someone’s benefit”. Do not become inured to a missing n.',
    ['Do not become inured to a missing n because last year was worse.', 'Used to is everyday. Hardened is close. Immune to (already in the dictionary) is “not affected”, often medical. Endure is suffer through — a lookalike. Habit is not a methods standard. Last year’s mess does not license this year’s.'],
    'Harden by habit (usually be inured to). Everyday: used to / hardened. Mix-up: endure (suffer); immune (not affected). Custom is not a defence.',
    []
  ),
  invective: L(
    'Invective is angry, insulting language used as an attack (formal, often uncountable): a stream of invective, bitter invective. Abuse and insults are everyday; a tirade (already in the dictionary) is a long angry speech. Inveigh against is the rare verb cousin. Do not file a numbered methods objection as invective.',
    ['Invective in the corridor is not a methods comment.', 'Insults are everyday. A tirade is a long blast (already in C2). Vituperation is a rarer twin. Anger can be fair; names without a cell reference are invective. Put the two figures in the minute.'],
    'Abusive verbal attack (formal). Everyday: insults / abuse. Close: tirade (a speech). A dated comparison of n is not invective.',
    ['abuse']
  ),
  invidious: L(
    'Invidious means likely to cause resentment or to look unfair, especially of a choice or comparison: an invidious position, invidious comparisons. Unenviable is a cousin; envious / invidious is the classic mix-up — invidious is not “full of envy”. Odious is hateful. Do not call every budget cut invidious to avoid naming the criterion.',
    ['Choosing which clinic to cut is an invidious task, not a slogan.', 'Unenviable is close. Envious is the feeling of envy — not a synonym. Odious is disgusting. An invidious comparison ranks people so as to wound. A published, consistent rule can still hurt; it is not automatically invidious if the criterion is named.'],
    'Likely to cause resentment (of a choice or comparison). Mix-up: envious (feeling envy). Close: unenviable. Name the rule; do not hide behind the adjective.',
    []
  ),
  irreverent: L(
    'Irreverent means showing too little respect for something usually treated as serious: irreverent humour, irreverent about tradition. Cheeky is everyday and lighter; reverent is the opposite. Hallowed (already in the dictionary) is the sacred thing often being needled. Do not hide a consent breach behind “irreverent culture”.',
    ['Irreverent jokes about consent are still a breach.', 'Cheeky is everyday. Reverent is respectful. Hallowed ground (already in C2) is what irreverence needles. A joke about biscuits can be irreverent and harmless. A joke about a named patient is a breach.'],
    'Cheekily disrespectful. Everyday: cheeky. Opposite: reverent. Mix-up: irrelevant. Tone does not license a consent failure.',
    ['cheeky']
  ),
  irrevocable: L(
    'Irrevocable means impossible to reverse or take back: an irrevocable decision, irrevocable change. Final and permanent are everyday; immutable (already in the dictionary) is “cannot be changed” as a standing quality. Revoke is cancel. Do not call a timetable irrevocable when it is merely last year’s PDF.',
    ['Deleting the only CSV was an irrevocable error, not a “refresh”.', 'Permanent is everyday. Immutable is unchangeable (already in C2). Revocable licences can be pulled. A signed, dated, backed-up file can still be replaced. A sole copy in the bin cannot.'],
    'Cannot be undone. Everyday: permanent / final. Contrast: immutable (cannot be changed). Mix-up: a habit billed as fate. Back up the CSV.',
    ['permanent']
  ),
  itinerant: L(
    'Itinerant means travelling from place to place, especially for work: itinerant workers, an itinerant judge. Travelling is everyday; an itinerary is a planned route — related, not a synonym. Vagrant is homeless wandering and is not a synonym. Do not leave itinerant staff without a named local owner.',
    ['Itinerant examiners still need a named local key-holder.', 'Travelling is everyday. An itinerary is the plan (not in this batch as a headword, but the cousin). Migrant can be a wider labour word. A visitor badge is not a fire procedure. Someone on site must hold the key.'],
    'Travelling for work. Everyday: travelling. Cousin: itinerary (the route). Not vagrant. A visitor still needs a local owner.',
    ['travelling']
  ),
}
