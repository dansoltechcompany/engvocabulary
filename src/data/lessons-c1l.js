const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1L = {
  malaise: L(
    'Malaise is a general unease, weakness, or sense of decline — in a person or in an institution: economic malaise, a mood of malaise. Illness names a disease; mood is everyday and thinner. Do not call a named injury malaise, and do not use it as a polite word for a missing night rota.',
    ['Staff malaise after the unpaid night rotas showed in the survey, not in the slogan.', 'Illness is a diagnosis. Unhappiness is everyday. Malaise is diffuse: something is wrong, but not yet a named fracture. A broken fire door is a defect, not malaise.'],
    'Diffuse unease / decline. Everyday: unhappiness. Contrast: a named illness or a named defect. Not a slogan for understaffing.',
    ['mood']
  ),
  malice: L(
    'Malice is the intention to do harm: with malice, malice aforethought (legal). Harm is the result; spite is smaller and personal; accident is the opposite. Malicious is the adjective. Do not write malice for a clumsy leak if the minute shows no intent.',
    ['The leak was error, not malice; the minute still had to name the account.', 'Harm is what happened. Intent is the inner part. Spite is petty. Negligence can wound without malice. A missing n is usually incompetence, not a plot.'],
    'Intent to harm. Contrast: accident / negligence. Adjective: malicious. A bungled CSV is not automatically malice.',
    ['harm']
  ),
  malpractice: L(
    'Malpractice is careless or dishonest practice by someone in a professional role: medical malpractice, professional malpractice. A mistake is everyday and may be small; misconduct is wider; negligence is the legal cousin. Do not call a disputed grade malpractice without a duty and a breach.',
    ['Malpractice is a named breach of duty, not a branding disagreement.', 'A slip is everyday. Negligence is the legal frame. Misconduct can be personal. Malpractice sits in a profession with standards (clinic, law, audit). A rude email is not malpractice.'],
    'Professional negligence / abuse of a role. Everyday: a serious mistake at work. Legal cousin: negligence. A branding row is not malpractice.',
    ['error']
  ),
  manifesto: L(
    'A manifesto is a public written statement of aims and policies: an election manifesto, a party manifesto. A policy is the content; a slogan is thinner; a protocol is operational. Do not treat a manifesto line as a funded rota.',
    ['The manifesto promised spare invigilators; the budget did not.', 'A brochure sells. A protocol tells you how. A manifesto declares what a group says it will do. A tweet is not a manifesto. Promises still need a line in the accounts.'],
    'A public policy declaration. Contrast: slogan (thin); protocol (how). A manifesto line is not a staffed shift.',
    ['policy']
  ),
  manipulation: L(
    'Manipulation is unfair control of people or of figures, or (neutral) skilled handling of an object: data manipulation, manipulation of a joint. Manipulate (already in the dictionary) is the verb. Influence can be fair; coercion is force. Do not call a published correction “manipulation” to dodge the original error.',
    ['Manipulation of the n in the abstract is still a methods failure.', 'Influence can be legitimate. Coercion is open force. Data handling is neutral until it misleads. Massage the figures is informal. A transparent recode with a log is not manipulation.'],
    'Unfair control (or skilled handling). Verb: manipulate (already in the dictionary). Contrast: fair influence. Recoding with an audit trail is not manipulation.',
    ['manipulate']
  ),
  margin: L(
    'A margin is an edge (page, area) or a spare amount: margin of error, profit margin, on the margins. Edge is everyday for the physical sense; difference is wider. Marginal (this batch) is the adjective. Do not round a sample to look neater and call that “within the margin”.',
    ['Leave a margin of error in the night count; do not round the n for the press note.', 'Edge is everyday. A profit margin is money left after costs. A close election is won by a margin of votes. The white space on a page is a margin. A made-up n is not a margin of error.'],
    'An edge; also spare difference (error, profit, votes). Everyday (place): edge. Adjective: marginal. Rounding for the press is not a margin.',
    ['edge']
  ),
  marginal: L(
    'Marginal means small and not central, or relating to an edge / a close result: a marginal improvement, a marginal seat. Slight and minor are everyday; margin (this batch) is the noun. Do not call a fire-cover gap marginal because the poster looked fine.',
    ['A marginal gain in the slogan is not a staffed fire door.', 'Slight is everyday. Peripheral is a cousin. A marginal constituency is won by a handful of votes. Central and core sit opposite. Safety staffing is not a marginal item.'],
    'Slight / on the edge; not the main thing. Everyday: slight / minor. Noun: margin. A fire door is not a marginal extra.',
    []
  ),
  marshal: L(
    'To marshal is to gather and arrange people or facts in order: marshal arguments, marshal volunteers. Organise is everyday and wider; assemble is gather without the arranging. Martial (of war) is a cruel lookalike. Do not marshal a corridor crowd against a fire door.',
    ['Marshal the night-shift logs before you brief the board.', 'Organise is everyday. Assemble is collect. A marshal (noun) can be an official at an event. Martial law is military. A scrum at the exit is not marshalling.'],
    'Assemble and organise. Everyday: organise. Mix-up: martial (of war). Noun: a marshal (official). Not a fire-exit scrum.',
    ['assemble']
  ),
  materialise: L(
    'To materialise (US materialize) is to become real, or to appear: the funding never materialised, a figure materialised in the doorway. Happen and appear are everyday; emerge is a cousin. Material (already in the dictionary) is “stuff” or “relevant”. Do not say a legally required invigilator “failed to materialise” as if it were weather.',
    ['The spare marker never materialised, so the sitting was split.', 'Appear is everyday. Happen is wider. Materialise often marks a hoped-for thing that does or does not arrive. British spelling keeps -ise. A cancelled shift is a decision, not fog.'],
    'Come into being / turn up. Everyday: appear / happen. British: materialise. A rota gap is a decision, not weather.',
    ['appear']
  ),
  mediation: L(
    'Mediation is a structured process in which a third person helps two sides agree: workplace mediation, mediation talks. Negotiation is direct between the parties; arbitration imposes a decision. A chat in the corridor is not mediation. Do not skip the date and call it mediation.',
    ['Mediation is not a finding; it is a process with a date in the minute.', 'Negotiate is the everyday verb between sides. Reconcile is restore a relationship. Arbitration binds. A mediator does not replace ethics. An informal moan is not mediation.'],
    'Helped negotiation via a third party. Contrast: negotiation (direct); arbitration (imposed). Needs a process and a date.',
    ['negotiate']
  ),
  mediocre: L(
    'Mediocre means not very good — only average, with disappointment built in: a mediocre paper, mediocre cover. Average is the neutral twin; poor is worse; excellent sits opposite. Do not call a complete, quiet methods section mediocre because it is not flashy.',
    ['A mediocre methods paragraph will sink a glossy abstract.', 'Average can be a statistic. Mediocre is a judgement. Adequate means good enough. Outstanding is the other end. A replicable write-up can look plain and still be strong.'],
    'Disappointingly average. Neutral: average. Worse: poor. Flash is not quality; a quiet, complete n is not mediocre.',
    ['average']
  ),
  merger: L(
    'A merger is two organisations becoming one: a merger of trusts, a merger of boards. Merge (already in the dictionary) is the verb. An acquisition is a buy-out (one side remains on top). Do not assume a merger of logos merges legal duties.',
    ['A merger of the two boards does not merge the fire certificates.', 'Join is everyday. An acquisition is a purchase. A coalition can split again. Merge files is IT. Two letterheads on one PDF is branding, not a merger of liabilities.'],
    'Two bodies becoming one. Verb: merge (already in the dictionary). Contrast: acquisition (a buy-out). Logos ≠ legal cover.',
    ['merge']
  ),
  merit: L(
    'Merit is worth — the quality of deserving something: on merit, the merits of a case. Worth is everyday; a merit can also be a good point. Demerit is the old opposite. Do not call a quiet favouritism “merit” because nobody minuted the criterion.',
    ['Promotion on merit still needs a recorded criterion, not a vibe.', 'Worth is everyday. Deserve is the verb cousin. Merit pay is a scheme. The merits of an argument are its strengths. A vibe in the chair’s office is not merit.'],
    'Worth; a deserving quality. Everyday: worth. Verb cousin: deserve. A criterion must be written down.',
    ['worth']
  ),
  metaphor: L(
    'A metaphor describes one thing as another without like or as: a mountain of marking, the embargo is a lock. A simile uses like/as; an analogy (already in the dictionary) teaches a parallel; literal is the opposite. Do not let a metaphor replace a certificate, an n, or a named hazard.',
    ['“The embargo is a fire door” is a metaphor; the real door still needs a certificate.', 'A simile says like. An analogy argues a mapping. Cliché is a dead metaphor. Mixed metaphor is two images colliding. Safety English stays literal in the audit.'],
    'An implied comparison (no like/as). Contrast: simile; analogy (already in the dictionary). Opposite: literal. Not a substitute for a spec.',
    ['analogy']
  ),
  methodical: L(
    'Methodical means done in a careful, ordered, systematic way: a methodical search, a methodical worker. Careful is everyday; meticulous (this batch) is fussier about tiny details; chaotic is opposite. Do not call a random shuffle methodical because it took a long time.',
    ['A methodical badge log beat a charismatic chair.', 'Careful is everyday. Systematic is a close twin. Meticulous sweats commas. Method (already in the dictionary) is the noun family. Slow is not automatically methodical.'],
    'Systematic and ordered. Everyday: careful. This batch: meticulous (micro-detail). Time spent ≠ method.',
    ['careful']
  ),
  meticulous: L(
    'Meticulous means extremely careful about small details: meticulous notes, a meticulous check. Methodical (this batch) is ordered process; precise is exact; fussy can be the insult twin. Do not hide an empty n behind meticulous fonts.',
    ['Meticulous footnotes do not excuse an empty n cell.', 'Careful is everyday. Precise hits the number. Pedantic (already in the dictionary) is the disapproving cousin. Methodical is the sequence. Detail on the cover is not a sample.'],
    'Extremely careful with detail. Everyday: careful. Cousin: methodical (order). Mix-up: pedantic (nit-picking). Fonts ≠ n.',
    ['precise']
  ),
  militant: L(
    'Militant means using or favouring confrontational, often extreme, methods for a cause: militant activists, a militant tone. Keen and committed are milder; aggressive is wider; military is of the army — a lookalike. Do not call a polite, complete complaint militant to dismiss it.',
    ['A militant email is still not a submitted ethics form.', 'Committed is everyday and calmer. Aggressive can be any domain. A militant (noun) is a person. Military is armed forces. Volume in the inbox is not a filing.'],
    'Confrontational in a cause. Milder: committed. Wider: aggressive. Mix-up: military. A complete form is not “militant”.',
    ['aggressive']
  ),
  minimise: L(
    'To minimise (US minimize) is to make as small as possible, or to treat something as less important than it is: minimise risk, minimise the harm. Reduce and diminish (already in the dictionary) are cousins; maximise is opposite. Do not minimise a missing n as “style”.',
    ['Minimise delay, not the sample; the n stays in the minute.', 'Reduce is everyday. Diminish is a C1 cousin already in this course. Play down is the informal “treat as small”. British spelling keeps -ise. Shrink the wait; do not shrink the count.'],
    'Make smaller / play down. Everyday: reduce. Cousin: diminish. Opposite: maximise. British: minimise. The n is not optional décor.',
    ['reduce']
  ),
  misinterpret: L(
    'To misinterpret is to take the meaning wrongly: misinterpret a clause, misinterpret silence. Misunderstand is everyday; interpret (already in the dictionary) is the base verb; distort is wilful. Do not misinterpret “pending” as yes.',
    ['Do not misinterpret “pending” as permission to recruit.', 'Misunderstand is everyday. Interpret is the clean verb. Mistranslate is language-to-language. A generous reading is not a licence. Ambiguous text still needs a check, not a guess dressed as policy.'],
    'Read it wrong. Everyday: misunderstand. Base: interpret (already in the dictionary). Pending ≠ permission.',
    ['interpret']
  ),
  mobilise: L(
    'To mobilise (US mobilize) is to organise people or resources for action: mobilise volunteers, mobilise support. Organise is everyday; recruit is hire or enlist; military mobilisation is the army sense. Do not mobilise a press note before the embargo lifts.',
    ['Mobilise the night porters before you publish the sitting times.', 'Organise is everyday. Gather is weaker. Deploy is send into position. British spelling keeps -ise. A poster is not mobilisation if nobody is on the rota.'],
    'Call up / organise for action. Everyday: organise. British: mobilise. A poster without names is not mobilisation.',
    ['organise']
  ),
  momentum: L(
    'Momentum is the force a process gains as it keeps moving: lose momentum, political momentum. Speed is everyday and thinner; impetus is a cousin; inertia is the opposite family. Do not treat a viral thread as momentum that replaces a legal review.',
    ['Momentum in the petition did not replace a legal review.', 'Speed is everyday. Growth can be the everyday twin in numbers. In physics, mass times velocity. A spike of emails can fade. Force of habit is not momentum.'],
    'Forward force that builds. Everyday: speed / growth. Opposite family: inertia. Noise in the inbox ≠ a completed review.',
    ['force']
  ),
  monopoly: L(
    'A monopoly is exclusive control of a supply or market: a monopoly on bookings, break up a monopoly. Exclusive is the adjective cousin; a cartel is several firms acting as one. Monopoly the board game is a lookalike. Do not call a single-supplier contract a convenience if it is a silent monopoly.',
    ['A monopoly on invigilation bookings is a risk, not a convenience.', 'Control is everyday and wider. A sole supplier may be a monopoly in practice. Competition is the policy opposite. A brand name on a game is not the C1 noun. One inbox for all sittings needs an audit, not a shrug.'],
    'Sole control; no real competitors. Wider: control. Contrast: competition. A game title is a lookalike. Convenience can hide a monopoly.',
    ['exclusive']
  ),
  oath: L(
    'An oath is a solemn promise, often legal or ceremonial: take an oath, under oath. Promise is everyday; a pledge (this batch) is serious but not always sworn; a vow is often personal or religious. Do not print an oath on a prospectus as décor.',
    ['An oath in the hearing is not a branding line on the prospectus.', 'Promise is everyday. Under oath means lying is perjury. Oath of office is a public duty. A casual “I swear” is register-wrong in a minute. Swearing in anger is a different sense (oaths as bad language).'],
    'A solemn sworn promise. Everyday: promise. Close: pledge (this batch). Legal: under oath. Not prospectus décor.',
    ['promise']
  ),
  objectivity: L(
    'Objectivity is judging from facts without personal feeling or bias: scientific objectivity, a claim to objectivity. Objective (already in the dictionary) is the adjective (and also a noun meaning “aim”). Neutrality is a cousin; subjectivity is the opposite. Do not claim objectivity in a bio paragraph and skip the methods.',
    ['Objectivity is a method, not a personality claim in the chair’s bio.', 'Fair is everyday. Neutral is a cousin. Bias is the enemy. An objective (noun) is a goal — a classic mix-up. A calm tone is not objectivity if the n is missing.'],
    'Judging without personal bias. Adjective: objective (already in the dictionary). Opposite: subjectivity. Mix-up: an objective (a goal). Tone ≠ method.',
    ['objective']
  ),
  oblivious: L(
    'Oblivious means not noticing (oblivious to / of): oblivious to the alarm, oblivious of the time. Unaware is everyday; ignorant can be harsher (lacking knowledge); ignore is the verb you choose. Do not be oblivious to a fire alarm and call it focus.',
    ['Oblivious to the fire alarm is not a methods stance.', 'Unaware is everyday. Ignore is wilful. Obscure (already in the dictionary) is “unclear / little known” — not a synonym. Oblivion is the noun for being forgotten or unconscious. Concentration on a screen is not a defence in a fire drill.'],
    'Unaware; not noticing. Everyday: unaware. Contrast: ignore (chosen). Mix-up: obscure. A drill is not optional focus.',
    []
  ),
  occupational: L(
    'Occupational means of a job or profession: occupational hazard, occupational health. Occupation (already in the dictionary) is the noun (job, or military control). Work and job are everyday. Do not file a night-shift hazard as a metaphor.',
    ['Occupational risk on the night shift is a logged hazard, not a metaphor.', 'Job is everyday. Professional can mean high-status work. Vocational is of training for a trade. An occupying army is the other sense of occupation. A logged hazard needs a control, not a poster.'],
    'Of a job / workplace. Noun: occupation (already in the dictionary). Everyday: job / work. A hazard is a log line, not a figure of speech.',
    ['occupation']
  ),
  ominous: L(
    'Ominous means suggesting trouble ahead: ominous silence, ominous clouds. Threatening is everyday; an omen is the noun cousin; promising is opposite. Do not call a missing n ominous if you have simply not opened the CSV.',
    ['An ominous silence after the n query is still a query.', 'Threatening is everyday. Dark can be literal weather. Auspicious (already in the dictionary) is a good omen. An omen is a sign. Silence in a thread is a prompt to chase, not a gothic mood board.'],
    'Warning of trouble ahead. Everyday: threatening. Noun cousin: omen. Opposite flavour: auspicious. Chase the query; do not aestheticise it.',
    ['threat']
  ),
  oppression: L(
    'Oppression is prolonged cruel or unjust control of a people or group: political oppression, racial oppression. Cruelty is a quality; repression can be political clamping-down; a strict rule is not automatically oppression. Do not use oppression for a published exam rubric you dislike.',
    ['Oppression is a human-rights claim, not a synonym for a strict rubric.', 'Cruel is the everyday adjective. Control is wider and can be legitimate. Repression is a political cousin. A tight deadline is inconvenience. Reserve the word for systematic unjust power, then evidence it.'],
    'Sustained unjust control. Everyday: cruelty / control. Cousin: repression. A strict rubric is not oppression.',
    ['cruel']
  ),
  ordeal: L(
    'An ordeal is a very difficult, painful, or exhausting experience: an ordeal at the border, survive the ordeal. Hardship is a cousin; a test or exam is everyday and milder; trial can mean court or a hard test. Do not call a routine sitting an ordeal to dodge the timetable.',
    ['An exam is a test; an unstaffed sitting in a heatwave is an ordeal.', 'Difficult is everyday. Hardship can be ongoing poverty or strain. A trial in court is legal. Ordeal by fire is historical. Discomfort is not automatically an ordeal; unstaffed heat with no water may be.'],
    'A grim, draining experience. Everyday: a very hard time. Cousin: hardship. A normal exam is a test, not an ordeal by default.',
    ['hardship']
  ),
  outright: L(
    'Outright means complete and total, or done openly rather than by stages: an outright ban, an outright lie; as an adverb, refuse outright. Complete is everyday; gradual and partial sit opposite. Do not call a “strong steer” an outright ban.',
    ['An outright ban needs a date; a “strong steer” is not a ban.', 'Complete is everyday. Absolute is a cousin. Partial is the opposite amount. Outright can be adjective or adverb. A hint in a corridor is not an outright decision and cannot be minuted as one.'],
    'Total / open (not piecemeal). Everyday: complete. Opposite: partial / gradual. A steer is not a ban.',
    ['absolute']
  ),
  outspoken: L(
    'Outspoken means saying your views plainly, even if they shock: an outspoken critic, outspoken remarks. Frank and blunt (already in the dictionary) are cousins; rude is the insult if manners fail. Do not call an accurate minute outspoken as a way to bury it.',
    ['An outspoken minute still has to be accurate about the n.', 'Frank is everyday. Blunt is harsher. Tactful sits opposite. Vocal can mean simply loud. Honesty about the count is a duty, not a personality type to be managed away.'],
    'Frank, even blunt, in speech. Everyday: frank. Cousin: blunt (already in the dictionary). Accuracy is not a tone problem.',
    ['blunt']
  ),
  overrule: L(
    'To overrule is to reject a decision from higher official power: the chair was overruled, a court overrules a precedent. Overturn is a cousin; cancel is everyday and wider; override can be systems or authority. Do not let a slogan overrule ethics.',
    ['Ethics can overrule a keen chair; a slogan cannot.', 'Cancel is everyday. Overturn a verdict is legal. Override a setting is technical. Oversight (already in the dictionary) is watching, or a mistake — not the verb. Higher authority must be real, named, and minuted.'],
    'Overturn from above. Everyday: cancel (wider). Cousin: override. Mix-up: oversight (watch / mistake). A slogan has no standing.',
    ['cancel']
  ),
  overstate: L(
    'To overstate is to claim more than the evidence holds: overstate a finding, overstate the risk. Exaggerate is the everyday twin; understate is opposite; overestimate (already in the dictionary) is usually about size or number. Do not overstate n = 12 as a national result.',
    ['Do not overstate a pilot n of twelve as a national finding.', 'Exaggerate is everyday. Overestimate is often quantitative. Boast is personal. A cautious claim names the sample. Hype in a press note is still an overstatement if the appendix disagrees.'],
    'Exaggerate; claim too much. Everyday: exaggerate. Cousin: overestimate (size/number). Opposite: understate. Pilots are not nations.',
    ['claim']
  ),
  overthrow: L(
    'To overthrow is to remove a leader or government from power, usually by force: overthrow a regime. Remove is everyday and calmer; oust can be political without tanks; a coup is the event. Do not use overthrow as campus slang for a committee vote.',
    ['To overthrow a government is not a campus governance metaphor.', 'Remove is everyday. Topple is a news cousin. Overrule (this batch) is a higher body rejecting a decision — not a revolution. A board resignation is not an overthrow. Keep the word for real power, not a timetable row.'],
    'Force from power (serious, political). Everyday: remove. Contrast: overrule (this batch, official rejection). Not a committee metaphor.',
    ['remove']
  ),
  pamphlet: L(
    'A pamphlet is a thin booklet of information or argument, often campaigning: a campaign pamphlet, a health pamphlet. A brochure (already in the dictionary) usually sells; a leaflet is even thinner; a protocol is operational. Do not staple a pamphlet and call it peer review.',
    ['A pamphlet is not a peer-reviewed protocol, however neat the fold.', 'A leaflet is a single sheet more often. A brochure markets a place or course. A tract is older religious/political. Binding and a logo do not make a methods section. Public information still has to be true.'],
    'A small booklet of argument or information. Close: leaflet / brochure (already in the dictionary). Contrast: protocol. Folded paper ≠ review.',
    ['brochure']
  ),
  pending: L(
    'Pending means not yet decided or completed: pending approval, a pending case. Waiting is everyday; forthcoming is “coming soon”; complete is opposite. As a preposition, pending can mean “until” (pending confirmation). Do not recruit while ethics is pending.',
    ['Pending ethics is not a green light for recruitment.', 'Waiting is everyday. Awaiting is formal. Imminent is “about to happen”. Pending in a tracker is a status, not a yes. Silence is not consent, and pending is not permission.'],
    'Not yet decided / still waiting. Everyday: waiting. Formal twin: awaiting. Pending ≠ yes.',
    ['wait']
  ),
  pinpoint: L(
    'To pinpoint is to find or state the exact place, time, or cause: pinpoint the fault, pinpoint the date. Identify is everyday; specify (already in the dictionary) is name precisely; approximate is opposite. Do not write “around then” when the badge log has a timestamp.',
    ['Pinpoint which night the badge log failed, not “around then”.', 'Identify is everyday. Locate is place. Precise is the adjective cousin. A pin on a map is the image. Vague wording in a serious incident log is a second failure.'],
    'Locate or identify exactly. Everyday: identify. Cousin: specify (already in the dictionary). Opposite: approximate. Timestamps exist for a reason.',
    ['identify']
  ),
  pitfall: L(
    'A pitfall is a hidden danger or likely mistake in a process: pitfalls of self-report, avoid the usual pitfalls. Danger and risk are everyday; a trap is more deliberate; a snag is smaller. Do not call an obvious unstaffed door a pitfall as if nobody could have seen it.',
    ['The pitfall was a shared password, not the font.', 'Risk is everyday. A hazard can be physical. A catch is informal. Pitfalls are typically foreseeable once named. A known shared login is a failure mode, not a surprise ravine.'],
    'A trap you can fall into. Everyday: risk / danger. Smaller: snag. A known, visible failure is not a hidden pitfall.',
    ['danger']
  ),
  plaintiff: L(
    'The plaintiff is the party that brings a civil case: the plaintiff sued, for the plaintiff. The defendant is the other side; a prosecutor (criminal) is a different system. Complainant is sometimes used in other hearings. Do not call a student complaint panel a plaintiff in Crown Court English.',
    ['The plaintiff is not the defendant; name both in the minute.', 'Sue is the everyday verb (not always in this course’s list). Civil ≠ criminal. A claimant is used in some UK civil procedure. A campus complainant is not automatically a plaintiff. Jurisdiction still matters.'],
    'The party who sues (civil). Opposite role: defendant. Contrast: prosecutor (criminal). A campus complaint is not automatically a civil claim.',
    []
  ),
  plateau: L(
    'A plateau is a period of little change after a rise — or a high flat landform: marks reached a plateau, a mountain plateau. Level off is the everyday verb; peak is the high point before a fall; growth is the thing that stalled. Do not keep spending on posters if the n has plateaued and the methods are empty.',
    ['Marks hit a plateau; extra posters did not move the n.', 'Flat is everyday. A peak is a summit. To plateau can be a verb. Geography: a tableland. A stalled metric needs a methods look, not a louder slogan.'],
    'A flat stretch after a rise (or high flat land). Everyday: level off. Contrast: peak. More posters ≠ more n.',
    ['flat']
  ),
  pledge: L(
    'A pledge is a serious promise to do or give something: a pledge of funding, honour a pledge. Promise is everyday; an oath (this batch) is sworn; a commitment is wider. As a verb, pledge means promise. Do not treat a pledge as a named rota.',
    ['A pledge of cover is not a rota with names.', 'Promise is everyday. Commitment can be vaguer. A donation pledge is money promised. An oath is ceremonial/legal. Names, dates, and a budget line turn a pledge into cover.'],
    'A formal promise. Everyday: promise. This batch: oath (sworn). Verb: to pledge. A pledge without names is still a gap.',
    ['promise']
  ),
  ploy: L(
    'A ploy is a cunning plan to gain an advantage: a marketing ploy, a delaying ploy. Plan is everyday and neutral; tactic (already in the dictionary) is a planned move; a trick is more openly dishonest. Do not relabel a leak as a “soft launch” ploy in the minute.',
    ['Calling the leak a “soft launch” was a ploy, not a protocol.', 'Plan is everyday. Tactic is close and often legitimate. A ruse is literary. Strategy is the larger map. If the embargo was broken, the name you give it afterwards does not unbreak it.'],
    'A tactical trick. Everyday: plan. Close: tactic (already in the dictionary). Relabelling a leak is still a leak.',
    ['tactic']
  ),
  portray: L(
    'To portray is to show or describe in a particular way: portrayed as a success, portray a character. Depict (already in the dictionary) is a close twin; describe is everyday; misrepresent is the dishonest cousin. Do not portray an empty methods cell as streamlined.',
    ['Do not portray an empty methods cell as “streamlined”.', 'Describe is everyday. Depict is visual or literary. Represent (already in the dictionary) can be official. Portrayal is the noun. Spin in a press note is still a portrayal — and still checkable against the appendix.'],
    'Depict (often with a slant). Everyday: describe. Close: depict / represent (already in the dictionary). Spin still meets the CSV.',
    ['depict']
  ),
  potent: L(
    'Potent means powerful and effective: a potent argument, a potent drug. Strong is everyday; potential (already in the dictionary) is “possible in the future” — a classic mix-up. Impotent is opposite. Do not call a vague vibe potent.',
    ['A potent reminder is a named date; a vibe is not.', 'Strong is everyday. Effective is a cousin. Potential is unrealised capacity. A potentate is a ruler — a lookalike. Force in a sentence comes from a fact, not from adjectives piled on the slogan.'],
    'Strong in effect. Everyday: strong. Mix-up: potential (not yet real). A date beats a mood.',
    ['effective']
  ),
  precision: L(
    'Precision is exactness: precision of measurement, surgical precision. Precise (already in the dictionary) is the adjective; accuracy is closeness to the true value (a technical cousin); vagueness is opposite. Do not swap poetry in the abstract for a missing n.',
    ['Precision in the n beats poetry in the abstract.', 'Exact is everyday. Accuracy is a methods cousin (rightness vs tightness). Precise is the adjective already in this course. Approximate is the opposite family. A rounded press figure is a precision failure if the paper had a count.'],
    'Exactness. Adjective: precise (already in the dictionary). Cousin: accuracy. Poetry ≠ a sample size.',
    ['precise']
  ),
  predominantly: L(
    'Predominantly means mainly; for the most part: predominantly female, predominantly night-shift. Mainly is everyday; predominantly names the larger share without saying “only”. Do not write predominantly if you mean the whole cohort and you have not counted.',
    ['The cohort was predominantly night-shift; the daytime FAQ missed them.', 'Mainly is everyday. Largely is a cousin. Predominant is the adjective. Exclusively means only. If the FAQ assumes day hours, the adverb in the paper is a finding that should change the FAQ.'],
    'Mainly; mostly. Everyday: mainly. Adjective: predominant. Not the same as exclusively. Count, then write the adverb.',
    ['majority']
  ),
  premature: L(
    'Premature means too early — before the right or ready time: a premature announcement, premature conclusions. Early is everyday and not always a fault; timely is the good twin. Do not issue a press note before the embargo and call it keen.',
    ['A premature press note before the embargo is still a leak.', 'Early can be neutral. Hasty is about speed of thought. Mature (already in the dictionary) sits in the opposite family. A baby born premature is the medical sense. Keenness does not lift an embargo.'],
    'Too early. Everyday: early (not always bad). Opposite flavour: timely / mature. A leak is not keen communications.',
    ['early']
  ),
  prestige: L(
    'Prestige is respect from status, quality, or success: the prestige of the board, a prestige brand. Prestigious (already in the dictionary) is the adjective; fame can be empty; respect is everyday and wider. Do not staff a fire door with letterhead prestige.',
    ['Prestige on the letterhead does not staff the fire door.', 'Respect is everyday. Status is a cousin. Prestigious is already in this course. A famous logo is not a certificate. Rank in a league table is not a spare invigilator.'],
    'High standing; admired status. Adjective: prestigious (already in the dictionary). Everyday: respect. Letterhead ≠ cover.',
    ['prestigious']
  ),
  presume: L(
    'To presume is to suppose without proof, or to be too bold: I presume that…; presume upon someone’s kindness. Assume (already in the dictionary) is the close twin; presumably (already in the dictionary) is the adverb. Do not presume consent from silence.',
    ['Do not presume consent from silence in the night cohort.', 'Assume is everyday/academic. Suppose is milder. Presumably flags an inference. Presumptuous is the adjective for cheek. Silence in a consent process is not a yes, however tidy the spreadsheet.'],
    'Assume (sometimes too boldly). Close: assume / suppose. Adverb: presumably (already in the dictionary). Silence ≠ consent.',
    ['assume']
  ),
  probe: L(
    'To probe is to investigate closely: probe the accounts, a police probe (noun). Investigate and examine (already in the dictionary) are cousins; a probe can also be a physical instrument. Do not brief the press office before you have probed the missing n.',
    ['Probe the missing n before you brief the press office.', 'Investigate is the everyday formal twin. Scrutinise (already in the dictionary) is close. A probe (noun) is an inquiry or a device. Poke is informal and physical. A press holding line is not a finding.'],
    'Investigate in depth. Close: investigate / scrutinise (already in the dictionary). Noun: an inquiry or a device. Briefing ≠ probing.',
    ['investigate']
  ),
  problematic: L(
    'Problematic means causing difficulties, or unsatisfactory / not cleanly true: a problematic dataset, a problematic claim. Problem (already in the dictionary) is the noun; difficult is everyday; contentious is “argued over”. Do not footnote a broken join and carry on.',
    ['A problematic join in the CSV is a halt, not a footnote.', 'Difficult is everyday. Troublesome is a cousin. Problem is the noun already in this course. Problematic can also flag ethics or wording. A known broken join is a stop, not a vibe in the limitations paragraph.'],
    'Causing problems; unsatisfactory. Noun: problem (already in the dictionary). Everyday: difficult. A broken join is a halt.',
    ['problem']
  ),
  proceedings: L(
    'Proceedings are the official events of a meeting, hearing, or court: legal proceedings, the proceedings of the board. Proceed (already in the dictionary) is the verb “go ahead”; minutes are the written record; a ceremony is milder. Do not start “proceedings” with biscuits and no named chair.',
    ['Proceedings start when the chair is named, not when the biscuits arrive.', 'A meeting is everyday. A hearing is more formal. Court proceedings are litigation. Proceed is the verb already in this course. Minutes record proceedings; they are not the same word. Catering is not a quorum.'],
    'Official business of a meeting or court. Verb: proceed (already in the dictionary). Record: minutes. Biscuits ≠ a chair.',
    ['proceed']
  ),
  proclaim: L(
    'To proclaim is to announce publicly, often officially or loudly: proclaim a result, proclaim success. Announce (already in the dictionary) is the everyday twin; declare is close; whisper is opposite. Do not proclaim full consultation after a two-line email.',
    ['Proclaiming “full consultation” after a two-line email is still a claim.', 'Announce is everyday. Declare can be legal or customs. A proclamation is the noun (often royal or state). Volume does not create a process. Check the inbox count before the verb.'],
    'Announce publicly / officially. Everyday: announce (already in the dictionary). Noun: proclamation. A two-line email is not consultation.',
    ['announce']
  ),
  productivity: L(
    'Productivity is the rate of output relative to input: productivity per hour, falling productivity. Output (already in the dictionary) is what is produced; efficiency is a cousin; busyness is not the same. Do not count productivity while ignoring night cover and then call the metric complete.',
    ['Productivity metrics that ignore night cover are not a full account.', 'Output is the everyday/formal twin already in this course. Efficiency is output versus waste. Production is making things. A busy office can have low productivity. Unpaid overtime inflates a figure you should not trust.'],
    'Output relative to input. Close: output / efficiency. Busyness ≠ productivity. Cover still belongs in the account.',
    ['output']
  ),
  projection: L(
    'A projection is an estimate of the future, or an image thrown onto a surface: enrolment projections, a slide projection. A forecast and a prediction (already in the dictionary) are cousins; a count is what you already have. Project (already in the dictionary) is the verb/noun mix-up. Do not label a projection as a count.',
    ['A projection is not a count; label it as such in the paper.', 'Estimate is everyday. Forecast is often weather or finance. Prediction is already in this course. A projector is the machine. A future figure in a press note still needs the word projection, and an n for the past.'],
    'A forecast (or a displayed image). Close: prediction / estimate. Mix-up: project (already in the dictionary). Label forecasts as forecasts.',
    ['prediction']
  ),
  proliferate: L(
    'To proliferate is to increase rapidly in number: rumours proliferated, weapons proliferate. Increase is everyday; proliferation (already in the dictionary) is the noun; dwindle is opposite. Do not let draft PDFs proliferate with no owner and no n.',
    ['Draft PDFs proliferated; none named the n.', 'Increase is everyday. Multiply is a cousin. Spread is often for news or disease. Proliferation is already in this course. Many files is not version control. Name an owner before the folder blooms.'],
    'Multiply fast. Everyday: increase. Noun: proliferation (already in the dictionary). Many drafts ≠ a controlled set.',
    ['proliferation']
  ),
  prolong: L(
    'To prolong is to make something last longer: prolong a sitting, prolong the uncertainty. Extend (already in the dictionary) is the close twin; shorten is opposite; delay is wait before start. Do not prolong an unstaffed sitting as kindness.',
    ['Do not prolong an unstaffed sitting “to be kind”.', 'Extend is everyday/formal and already in this course. Lengthen is physical. Prolong often marks something already difficult. A scheduled extra hour with cover is an extension; without cover it is a risk.'],
    'Make it last longer. Close: extend (already in the dictionary). Contrast: delay (before it starts). Kindness still needs staff.',
    ['extend']
  ),
  propaganda: L(
    'Propaganda is information shaped — often biased or misleading — to promote a cause: political propaganda, propaganda film. Rhetoric (already in the dictionary) is persuasive language; advertising sells; journalism aspires to report. Do not call every campaign video propaganda, and do not excuse a fabricated n as “comms”.',
    ['A campaign video is not automatically propaganda; a fabricated n is.', 'Bias is the everyday/academic cousin. Rhetoric is already in this course. Public information can be straight. Spin is informal. If the number is invented, the genre name will not save the paper.'],
    'Persuasion dressed as information (often biased). Close: rhetoric / bias. Not every video is propaganda; a fake n is.',
    ['rhetoric']
  ),
  prosecute: L(
    'To prosecute is to bring a criminal charge and try it in court: prosecute an offender, the Crown prosecutes. Accuse (already in the dictionary) is wider and can be informal; sue is civil (plaintiff, this batch). Do not call a campus panel a prosecution.',
    ['To prosecute is a legal act; a campus panel is not a Crown Court.', 'Accuse is everyday/formal and already in this course. Charge is the legal step. A prosecutor is the lawyer. Civil claims have a plaintiff (this batch). Jurisdiction and the criminal standard still apply. A disciplinary hearing is not a prosecution unless it is.'],
    'Take someone to court (criminal). Wider: accuse (already in the dictionary). Contrast: sue / plaintiff (civil). A campus panel is not Crown Court.',
    ['accuse']
  ),
  prudent: L(
    'Prudent means careful and showing good judgement about risk or money: a prudent delay, prudent use of funds. Careful and cautious (already in the dictionary) are everyday cousins; judicious (already in the dictionary) is “wisely judged”; reckless is opposite. Do not call a lucky rush prudent after it worked.',
    ['A prudent delay beat a noisy note with no date.', 'Cautious is everyday and already in this course. Careful is wider. Judicious is the close C1 twin. Prudence is the noun (and a lookalike in jurisprudence). A coin-flip that landed well is luck, not prudence. Wait for the date.'],
    'Cautiously wise about risk. Everyday: careful / cautious. Close: judicious (already in the dictionary). Luck after the fact is not prudence.',
    ['cautious']
  ),
}
