const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2C = {
  cogent: L(
    'Cogent means an argument is clear, tightly reasoned, and actually persuasive — not merely fluent. Convincing is the everyday cousin; coherent means it hangs together, which is necessary but not sufficient. Writers praise a cogent case, cogent criticism. In speech it is rather donnish; say well argued or that actually persuades. Do not call a loud opinion cogent.',
    ['She made a cogent case for fewer, better assessments.', 'The reply was polite but not cogent: it ignored the dates.'],
    'cogent argument/case. Formal. Everyday: well argued / convincing. Stronger than merely coherent.',
    ['convincing']
  ),
  copious: L(
    'Copious means in large amounts, more than enough: copious notes, copious tears (a slightly old-fashioned pairing). Lots of is everyday; abundant is a close formal synonym. Copiously is the adverb (copiously illustrated), and the word is literary or playfully formal — fine in a review, odd over coffee. In speech, masses of or pages of will do; it praises quantity, not quality.',
    ['He took copious notes and then never read them.', 'The appendix offers copious examples, few of them necessary.'],
    'copious notes/examples. Formal/literary for a great deal. Everyday: lots of / abundant. Quantity, not quality.',
    ['abundant']
  ),
  denigrate: L(
    'To denigrate is to criticise unfairly so as to make someone or something seem worthless. Run down is everyday and informal; belittle is a close synonym; criticise can still be fair. Denigration is the noun, and the charge is serious and formal — reviews, ethics, politics. In speech, put them down or talk them down is more natural; do not use it for ordinary, justified criticism.',
    ['The column denigrated vocational courses as second-class.', 'She refused to denigrate colleagues in order to look sharp.'],
    'Unfairly make worthless. Formal. Everyday: belittle / run down. Fairer verb: criticise.',
    ['belittle']
  ),
  didactic: L(
    'Didactic means intended to teach — and in modern criticism it often sounds negative: preachy, too keen to instruct. Educational is the neutral everyday word; instructive can still be praise. A didactic novel may lecture the reader, while a didactic caption in a museum may simply explain — tone and context decide. In speech, a bit preachy or too teachy is the usual sting; if you mean usefully educational, say so, because didactic alone can curdle.',
    ['The fable is frankly didactic; that is the point of a fable.', 'I wanted a story, not a didactic pamphlet on resilience.'],
    'Intended to teach; often a criticism (preachy). Neutral: educational / instructive. Everyday: preachy.',
    ['preachy']
  ),
  disingenuous: L(
    'Disingenuous means insincere — pretending to be more innocent, surprised, or uninformed than you are. Dishonest is blunter and broader; insincere is everyday; naive is genuine innocence, the opposite pose. Disingenuously is the adverb, and the word is a sharp, formal accusation in argument. In speech, playing innocent or that is not as naive as it looks will do — do not use it for a simple mistake.',
    ['His “I had no idea” sounded disingenuous after the email trail.', 'Asking “what is a deadline?” in week ten was disingenuous.'],
    'Falsely innocent or under-informed. Everyday: insincere / playing innocent. Contrast: naive = genuinely unaware.',
    ['insincere']
  ),
  dogmatic: L(
    'Dogmatic means stating opinions as if they were unquestionable fact, with no room for doubt. Opinionated is everyday and milder; authoritarian is about power, not only tone. A dogma is a belief treated as settled; dogmatism is the noun. In speech, he will not be told or treats it as gospel is more natural. It is almost always a criticism in academic English.',
    ['A dogmatic reading list left no space for disagreement.', 'She is firm, not dogmatic: she can still change her mind on evidence.'],
    'Opinion as unquestionable fact. Noun: dogmatism. Everyday: opinionated / treats it as gospel. Usually critical.',
    ['opinionated']
  ),
  ebullient: L(
    'Ebullient means bubbling over with cheerful energy. Excited is everyday and shorter-lived; exuberant is a close synonym. Ebullience is the noun, and the word is literary or journalistic — a profile, a match report — not a text to a friend. In speech, on a high or full of beans (informal British) is more natural; do not use it for quiet, steady happiness.',
    ['The room was ebullient when the results went up.', 'His ebullient manner sat oddly with the grim agenda.'],
    'Bubbling cheerful energy. Formal/literary. Everyday: exuberant / on a high. Noun: ebullience.',
    ['exuberant']
  ),
  eclectic: L(
    'Eclectic means drawn from a wide, mixed range of styles or sources — a considered mix, not a random jumble. Varied is everyday; diverse often stresses people or types. An eclectic taste or an eclectic method can praise range or hint at a lack of focus — context decides. In speech, a bit of everything or mixed is enough; it is not a synonym for weird.',
    ['Her reading list is eclectic: sonnets, manuals, and crime fiction.', 'An eclectic playlist is a virtue in a café and a problem in an exam essay.'],
    'Drawn from many sources, on purpose. Everyday: varied / a mix. Not the same as random or merely odd.',
    ['varied']
  ),
  erudite: L(
    'Erudite means showing deep, learned knowledge from study. Knowledgeable is everyday and milder; scholarly is a close cousin. Erudition is the noun, and it belongs in reviews and academic praise — in a pub it can sound like showing off. In speech, very well read is the natural paraphrase; erudite need not mean obscure, because the best erudition still explains.',
    ['The lecture was erudite but never condescending.', 'An erudite footnote does not rescue a confused main argument.'],
    'Learned from study. Noun: erudition. Everyday: well read / scholarly. Formal praise, odd in casual chat.',
    ['scholarly']
  ),
  garrulous: L(
    'Garrulous means talking a great deal, especially about trifles — more critical than talkative. Chatty is everyday and often fond; loquacious is a rarer formal synonym. Garrulousness is the noun, and novelists use it for a character who will not stop. In speech, he goes on and on or very talkative is enough — do not use it for an eloquent, tightly argued speech.',
    ['A garrulous cab driver narrated every roundabout.', 'The memoir is garrulous where it needed selection.'],
    'Over-talkative, often about little. Critical. Everyday: chatty / goes on and on. Contrast: eloquent = well expressed.',
    ['talkative']
  ),
  implacable: L(
    'Implacable means unable to be calmed, satisfied, or talked round: implacable opposition, an implacable foe. Unyielding is close; stubborn is everyday and can be petty. Placate (to calm) is the related verb you cannot succeed at. In speech, they will not be moved or impossible to soften is clearer. Save it for deep, settled hostility or force, not a sulk.',
    ['She faced implacable hostility from the old committee.', 'The deadline was implacable; charm did not extend it.'],
    'Cannot be softened or satisfied. Everyday: unyielding / will not be moved. Related verb: placate.',
    ['unyielding']
  ),
  intransigent: L(
    'Intransigent means refusing to shift position or accept a compromise. Stubborn is everyday; inflexible is close; implacable stresses that nothing will soften feeling, while intransigent stresses negotiation that will not move. Intransigence is the noun, and news and diplomacy love it. In speech, will not budge is the paraphrase — it is almost always critical.',
    ['Both unions remained intransigent on the night-shift clause.', 'Intransigence on both sides turned a small dispute into a walkout.'],
    'Will not compromise. Noun: intransigence. Everyday: will not budge. Close: inflexible. Usually critical.',
    ['inflexible']
  ),
  irascible: L(
    'Irascible means easily made angry — a temper as a trait, not one bad afternoon. Bad-tempered is everyday; irritable is milder and often temporary (tired, hungry). Irascibility is a rarer noun, and character sketches and biographies use it. In speech, he has a short fuse is the natural line — do not use it for righteous, considered anger.',
    ['An irascible reply to a fair question damaged the interview.', 'The professor was irascible before coffee and generous after it.'],
    'Quick to anger as a trait. Everyday: bad-tempered / short fuse. Milder/temporary: irritable.',
    ['bad-tempered']
  ),
  magnanimous: L(
    'Magnanimous means generous and high-minded, especially towards a rival or someone you have beaten: a magnanimous speech, a magnanimous gesture. Generous is everyday and broader; gracious is close in victory. Magnanimity is the noun, and it is formal praise. In speech, big enough to be kind or generous in victory is enough — it is the opposite of petty or vindictive.',
    ['The winner was magnanimous, and named her opponent’s best point.', 'A magnanimous silence can be kinder than a clever retort.'],
    'Generous, especially in victory. Noun: magnanimity. Everyday: generous / gracious. Opposite: petty.',
    ['generous']
  ),
  mercurial: L(
    'Mercurial means mood or opinion changing quickly and unpredictably — literary, a little glamorous, not a clinical diagnosis. Moody is everyday and often negative; changeable is plainer; volatile is closer in news English. Writers use a mercurial talent, a mercurial temper. In speech, up and down or you never know which way they will go is safer. Do not use it as a polite word for unreliable work.',
    ['His mercurial enthusiasm meant a new plan every Monday.', 'The market was mercurial that week; overnight optimism vanished.'],
    'Quickly changeable (mood, talent, markets). Literary/formal. Everyday: moody / changeable. Close: volatile.',
    ['volatile']
  ),
  ostensible: L(
    'Ostensible means the reason or appearance that is stated — as opposed to the actual one. Apparent is a close cousin; alleged keeps a legal distance. Ostensibly is the common adverb (ostensibly a fact-finding trip), and you should always set it against what is actual, real, or underlying, or the word does no work. In speech, on the face of it or the stated reason is enough — never treat ostensible as a synonym for real.',
    ['The ostensible aim was consultation; the actual aim was delay.', 'Ostensibly a revision class, it became a quiet complaint session.'],
    'Stated/apparent, NOT actual. Adverb: ostensibly. Everyday: on the face of it / the stated reason. Contrast with actual/real.',
    ['apparent']
  ),
  ostentatious: L(
    'Ostentatious means showy on purpose, designed to impress: ostentatious wealth, an ostentatious display. Showy is everyday; flashy is informal and often of clothes or cars. Ostentation is the noun, and the adjective is almost always a criticism of taste or tact. In speech, a bit much or showing off is more natural; contrast it with discreet (quietly tasteful).',
    ['An ostentatious thank-you speech made the prize about him.', 'The lobby was ostentatious: marble, gold, and nothing to sit on.'],
    'Showy in order to impress. Critical. Noun: ostentation. Everyday: showy / flashy. Opposite tone: discreet.',
    ['showy']
  ),
  pedantic: L(
    'Pedantic means fussing over small rules and details in a way that irritates: a pedantic point about a comma. Fussy is everyday; nit-picking is informal. A pedant is the person, and the adjective is almost always unkind. Precise and meticulous can praise the same care when it serves the task; in speech, splitting hairs or hung up on a tiny point is enough.',
    ['A pedantic interruption about spacing halted a useful debate.', 'Be accurate, not pedantic: fix the date, then let the argument breathe.'],
    'Fussy about tiny rules (critical). Person: a pedant. Everyday: nit-picking. Praise instead: precise / meticulous.',
    ['fussy']
  ),
  perfunctory: L(
    'Perfunctory means done quickly, with little care, just to get it done: a perfunctory glance, a perfunctory apology. Cursory is a close synonym; hasty is everyday and may still be sincere. It is a cool, formal criticism of attention, not of speed alone. In speech, just going through the motions or a quick once-over is the paraphrase. A thorough check is the opposite idea.',
    ['He gave the risk assessment a perfunctory tick and left.', 'A perfunctory “sorry” without a change of plan convinced nobody.'],
    'Done just to tick a box. Formal. Close: cursory. Everyday: going through the motions. Opposite: thorough.',
    ['cursory']
  ),
  platitude: L(
    'A platitude is a remark so ordinary and obvious that it helps nobody: “just try harder” as a platitude. Cliché is a close cousin for stale phrasing; truism is a claim that is true but empty. Platitudinous is a rare adjective, and speeches and condolence cards are breeding grounds. In speech, a tired line or empty slogan is enough — do not confuse it with a proverb that still carries wisdom.',
    ['The circular offered platitudes about excellence, not a timetable.', 'She wanted a plan, not a platitude about believing in herself.'],
    'A stale, empty remark. Close: cliché / truism. Everyday: a tired line. Formal/critical.',
    ['cliché']
  ),
  prescient: L(
    'Prescient means showing that you grasped what would happen later: a prescient warning. Far-sighted is close; prophetic is stronger and more mystical. Prescience is the noun, and the adjective is usually praise after the fact. In speech, she saw it coming is the natural line — do not use it for a lucky guess with no reasoning, unless you are being wry.',
    ['His note on fragile supply lines proved prescient that winter.', 'The novel’s prescient jokes about surveillance read differently now.'],
    'Seeing it coming (often praised later). Noun: prescience. Everyday: far-sighted / saw it coming. Stronger: prophetic.',
    ['far-sighted']
  ),
  prodigious: L(
    'Prodigious means remarkably great in amount, scale, or ability: a prodigious memory, prodigious output. Huge is everyday; enormous is close; phenomenal is a looser spoken cousin. It is literary or journalistic praise (or awe). In speech, extraordinary or huge will do. A prodigy is a related noun for a startlingly gifted person, especially a child — not a required pair.',
    ['She made a prodigious effort to re-mark the scripts in a week.', 'The archive holds a prodigious number of uncatalogued letters.'],
    'Remarkably great. Formal/literary. Everyday: huge / extraordinary. Related: a prodigy (gifted person).',
    ['enormous']
  ),
  reticent: L(
    'Reticent means unwilling to speak about your thoughts or feelings — reserved on purpose. Quiet is everyday and may be temperament; shy is about social fear; taciturn (elsewhere in this dictionary) is habitually saying little. Reticence is the noun, and you are reticent about + topic. In speech, not forthcoming or she does not like to talk about it is enough — it is not a synonym for reluctant to act.',
    ['He was reticent about the inquiry, even with friends.', 'Reticence in a viva can look like not knowing; prepare a short answer.'],
    'reticent about + topic. Unwilling to talk. Noun: reticence. Everyday: not forthcoming. Contrast: taciturn = habitually quiet; shy = fearful.',
    ['reserved']
  ),
  salient: L(
    'Salient means the points that stand out as most noticeable or important in a set: the salient facts, salient features. Important is everyday and broader; striking is closer for what catches the eye. A salient (noun) is also a military bulge in a front line — rare outside history. In speech, the main points or what stands out is enough. Do not use it for every “important.”',
    ['List the salient objections, not every footnote.', 'Two salient dates make the timeline clear; the rest can wait.'],
    'salient point/feature. The ones that stand out. Formal. Everyday: main / striking. Not a fancy important.',
    ['striking']
  ),
  serendipity: L(
    'Serendipity is the luck of finding something useful or delightful by chance — happy accident with a gift attached. Luck is everyday and broader; chance is bleaker. Serendipitous is the adjective, and it is a cultured, slightly pleased word for essays, reviews, and talks. In speech, a lucky find or as it happened is enough — it is not fate, and it is not mere randomness without a good result.',
    ['By serendipity the lost letter was in the wrong archive box.', 'The collaboration began in serendipity: two cancelled trains and one café.'],
    'Lucky useful chance. Adjective: serendipitous. Everyday: a lucky find. Not fate, and not chance without a good result.',
    ['luck']
  ),
  strident: L(
    'Strident means loud and harsh, or aggressively forceful in opinion: a strident tone, strident demands. Loud is everyday and physical; shrill is a close, often gendered trap — use with care. Harsh and shouty are spoken cousins, and in argument strident often criticises manner, not substance. In speech, too harsh or coming on too strong is safer; a good point can still be ruined by a strident delivery.',
    ['A strident email made a fair complaint easy to ignore.', 'The brass was strident in that hall; the strings disappeared.'],
    'Harshly loud, or aggressively forceful. Everyday: harsh / shouty. Criticises tone. Use shrill with care.',
    ['harsh']
  ),
  succinct: L(
    'Succinct means clearly expressed in few words — praise for compression, not mere shortness. Brief can be incomplete; concise is the closest synonym. Succinctly is the adverb (to put it succinctly), and in speech short and clear or in a nutshell is enough. A succinct summary keeps the logic, while a curt one drops the manners — examiners love it, and rambling is the enemy.',
    ['Give a succinct account of the method, then stop.', 'Her succinct “no, because of cost” ended twenty minutes of drift.'],
    'Short and clear. Close: concise. Everyday: in a nutshell. Contrast: brief (maybe incomplete), curt (rude).',
    ['concise']
  ),
  surreptitious: L(
    'Surreptitious means done secretly because it is forbidden or would cause trouble: a surreptitious glance, surreptitious recording. Secret is everyday and broader; furtive is a close synonym, often of nervous manner; stealthy can be physical movement. Surreptitiously is the adverb. In speech, on the sly (informal) or hoping not to be seen is enough. It is not a synonym for private (which may be allowed).',
    ['He took a surreptitious photograph of the mark scheme.', 'A surreptitious snack during the recital drew a glare from the usher.'],
    'Secret because not allowed / awkward. Close: furtive. Everyday: on the sly / hoping not to be seen. Not merely private.',
    ['furtive']
  ),
  vacillate: L(
    'To vacillate is to keep changing your mind, swinging between options. Waver is a close synonym; hesitate can be a single pause; dither is informal British. Vacillation is the noun, and the verb is a formal criticism of indecision. In speech, I keep changing my mind or stop dithering is more natural — do not use it for a careful revision of a view in light of new evidence.',
    ['Do not vacillate between titles until the night before.', 'The board vacillated, and the contractor walked away.'],
    'Keep switching decisions. Formal. Noun: vacillation. Everyday: waver / dither. Contrast: hesitate (one pause).',
    ['waver']
  ),
  veracity: L(
    'Veracity is the quality of being true, or of telling the truth: the veracity of a claim, no one doubted her veracity. Truth is everyday; truthfulness is closer for a person’s habit; accuracy is about precision of detail. Veracious is a rare adjective, and the noun is legal, academic, and slightly stiff. In speech, whether it is true or honesty is enough — it is not a fancy word for voracity (greed).',
    ['The inquiry tested the veracity of the minutes against the recording.', 'I do not doubt his veracity, only his memory of the dates.'],
    'Truth / truthfulness (formal). Everyday: truth / honesty. Close: accuracy (detail). Not voracity (greed).',
    ['truthfulness']
  ),
}
