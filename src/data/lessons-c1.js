const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1 = {
  ambiguous: L(
    'Ambiguous means a word, sentence, or situation can reasonably be read in more than one way. Native writers use it when the uncertainty is in the language itself, not merely because someone is confused. Vague is looser: the meaning is fuzzy. Unclear is everyday. Ambiguous is the precise term when two interpretations both fit.',
    ['The contract was ambiguous about who paid for repairs.', 'Her smile was ambiguous: relief or disappointment?'],
    'ambiguous = two (or more) readings both fit. vaguer: unclear / vague. Noun: ambiguity.',
    ['unclear']
  ),
  coherent: L(
    'Coherent describes writing or speech that hangs together: the parts follow logically and the reader can track the whole. Native markers use it for argument and explanation, not only for “easy to understand.” Clear is simpler; cohesive is more about how sentences link with connectors. An incoherent draft jumps, repeats, or contradicts itself.',
    ['The report is detailed but not coherent.', 'After the shock he could barely give a coherent account.'],
    'coherent = logical as a whole. cohesive = well linked. Opposite: incoherent.',
    ['logical']
  ),
  compile: L(
    'To compile is to gather material from different sources and put it into one organised whole: a list, a report, a dataset. Collect is the everyday verb; compile stresses the assembling and arranging. In computing it also means turn source code into a program, but academic English usually means “put together.”',
    ['The researchers compiled figures from three ministries.', 'She compiled an anthology of short essays.'],
    'compile + list/report/data. Everyday: collect. Noun: compilation.',
    ['assemble']
  ),
  constitute: L(
    'Constitute means “make up” or “amount to”: the parts form the whole, or an act counts as something in law or policy. Native writers prefer it when they want a formal, exact verb instead of are or make up. Consist of looks at the whole and names its parts (the team consists of six people). Constitute looks at the parts and says what they form.',
    ['Women constitute a majority of the applicants.', 'Such delays constitute a breach of the agreement.'],
    'A, B and C constitute X. consist of = X is made of A, B, C. Formal for “count as.”',
    ['make up']
  ),
  criteria: L(
    'Criteria are the standards you use to judge something. The word is already plural; the singular is criterion. Native academic writers never write “a criteria” or “this criteria.” Marks, rules, and requirements can be informal substitutes, but criteria is the exact word for a set of tests something must meet.',
    ['One criterion is originality; the other criteria are clarity and evidence.', 'The shortlist was drawn up against published criteria.'],
    'Plural: criteria. Singular: criterion. Not “a criteria.”',
    ['standards']
  ),
  diminish: L(
    'Diminish means become, or make, smaller in size, strength, or importance. Native writers often use it for status, influence, or a feeling that fades, not only for numbers. Reduce usually takes an object (reduce costs). Decrease is more neutral for quantities. Diminish can be intransitive: the noise diminished.',
    ['His influence diminished after the scandal.', 'Do not diminish her contribution; she designed the study.'],
    'diminish = grow/make smaller (often importance). reduce + object. decrease = numbers.',
    ['lessen']
  ),
  empirical: L(
    'Empirical means based on observation, experiment, or data rather than on theory alone. Native researchers contrast empirical evidence with theoretical claims or speculation. Experimental is narrower (a controlled test). Anecdotal is the weak cousin: a story, not a systematic result.',
    ['The model is elegant, but the empirical support is thin.', 'They collected empirical data from classroom recordings.'],
    'empirical = from real-world evidence. Opposite flavour: theoretical / speculative.',
    ['evidence-based']
  ),
  inherent: L(
    'Inherent means a quality belongs to something by its nature; you cannot strip it away without changing what the thing is. Native writers use inherent risk, inherent limitation, inherent in. Intrinsic is very close; inherent often stresses “comes with the activity,” while intrinsic stresses “belongs to its inner nature.” Built-in is the informal version.',
    ['Uncertainty is inherent in weather forecasting.', 'The method has an inherent bias towards large samples.'],
    'inherent in + noun. Close: intrinsic. Informal: built-in.',
    ['intrinsic']
  ),
  mitigate: L(
    'Mitigate means make something less harmful, severe, or painful — you do not remove it, you soften its effects. Native policy and academic writing prefers mitigate risk, mitigate harm, mitigate the impact. Reduce is broader (make smaller in amount). Alleviate is common with pain or hardship. You mitigate a problem; you do not usually “mitigate a number.”',
    ['Better insulation can mitigate the effects of cold weather.', 'The firm took steps to mitigate legal risk.'],
    'mitigate = lessen harm/severity. reduce = make smaller. Not a synonym for solve.',
    ['lessen']
  ),
  nuance: L(
    'A nuance is a small, precise difference in meaning, tone, or feeling that careful readers notice. Native writers praise nuance when a claim is not black and white. Subtlety is close; a shade of meaning is the everyday paraphrase. Nuanced is the adjective: a nuanced view. Do not use nuance for any difference — only a fine one.',
    ['The translation missed a nuance in the original joke.', 'Her review was full of nuance rather than simple praise.'],
    'a nuance / nuances. adjective: nuanced. Broader: difference. Close: subtlety.',
    ['subtlety']
  ),
  pragmatic: L(
    'Pragmatic means you choose what will work in the real situation, even if it is not the neatest or most ideal solution. Native writers contrast a pragmatic decision with a principled or ideological one. Practical is the everyday cousin (useful, workable); pragmatic stresses attitude: compromise, results, constraints. A pragmatic person is not necessarily unprincipled — they rank what is feasible.',
    ['A pragmatic fix is to share one lab rather than build two.', 'He is pragmatic about deadlines: good enough, on time.'],
    'pragmatic = results-first, given constraints. practical = useful/workable. Noun: pragmatism.',
    ['practical']
  ),
  prevalent: L(
    'Prevalent means common in a particular place, group, or period — widespread enough to notice. Native writers use it in social science and medicine: a prevalent belief, a prevalent disease. Common is everyday; widespread stresses geography. Dominant means it leads, not only that it occurs a lot. Prevalent among / in / at the time.',
    ['Cash payments are still prevalent in some markets.', 'That misconception is prevalent among first-year students.'],
    'prevalent in/among. Everyday: common. Stronger “in charge”: dominant.',
    ['widespread']
  ),
  subsequent: L(
    'Subsequent means happening later than something already mentioned. Native academic style uses subsequent chapters, subsequent events, subsequent to. Later and following are everyday; subsequent is more formal and usually looks back to a stated point in time. Consequent means “as a result,” not merely “after.”',
    ['The first trial failed; subsequent trials used a larger sample.', 'Subsequent to the merger, the brand disappeared.'],
    'subsequent = later (formal). consequent = resulting from. subsequent to = after.',
    ['later']
  ),
  sustain: L(
    'Sustain means keep something going over time, or bear a weight: sustain a habit, sustain growth, sustain an injury (formal for “suffer”). Native writers contrast sustain with start or boost — the hard part is continuation. Maintain is close for keeping a state; sustain often stresses energy, resources, or duration. Sustainable is the adjective for what can last.',
    ['The charity cannot sustain that level of spending.', 'A single good week will not sustain motivation.'],
    'sustain = keep going / bear. maintain = keep in the same state. adjective: sustainable.',
    ['maintain']
  ),
  thesis: L(
    'In British universities a thesis is a long, original research paper for a degree, especially a doctorate; a master’s dissertation is the usual UK name at that level, though thesis is also heard. An essay is a short course assignment. Native writers also use thesis for the central claim of an argument: her thesis is that…. Do not call a 2,000-word essay a thesis.',
    ['He defended his doctoral thesis in June.', 'The thesis of the article is that timing matters more than talent.'],
    'UK: PhD thesis; master’s often dissertation. essay = short assignment. also: central claim.',
    ['dissertation']
  ),
  abstract: L(
    'As an adjective, abstract means existing as an idea rather than as a physical object: abstract concepts such as justice. Concrete is the opposite. Native writers also use abstract as a noun for a short summary at the start of a paper — a different sense. Abstract art is non-representational, another specialised use.',
    ['Freedom is abstract until you lose it.', 'Avoid abstract claims that no example can test.'],
    'adjective: not physical. Opposite: concrete. noun (journals): a summary.',
    []
  ),
  accommodate: L(
    'Accommodate has two C1 uses: provide space or lodging, and adapt your plans or behaviour to help someone. Native writers use accommodate a request, accommodate differences. Contain is only about capacity. Adapt is close to the second meaning but does not cover housing. Accommodation is the noun for a place to stay (uncountable in British English: some accommodation).',
    ['The hotel could not accommodate our group at short notice.', 'The schedule was altered to accommodate students who work.'],
    '1) provide space. 2) adapt to help. UK noun: accommodation (usually uncountable).',
    []
  ),
  accumulate: L(
    'Accumulate means gather or increase gradually over time, often without a single dramatic moment. Native writers use it for debt, evidence, experience, and unwanted stuff. Collect can be deliberate (collect stamps); accumulate often happens as a by-product. Amass is stronger and more intentional. Accumulation is the noun.',
    ['Evidence accumulated against the original theory.', 'Small fees accumulate if you ignore them.'],
    'accumulate = build up over time. collect = often on purpose. Noun: accumulation.',
    ['build up']
  ),
  aesthetic: L(
    'Aesthetic (British spelling) refers to beauty, taste, and how something looks or feels as a designed object — not merely whether it is “pretty.” Native writers talk about aesthetic value, aesthetic judgement, an aesthetic. Beautiful describes a result; aesthetic names the dimension you are judging. Aesthetics is the noun for the philosophy or the look of a work.',
    ['They chose the font for aesthetic reasons, not speed.', 'The redesign improved function but spoiled the aesthetic.'],
    'UK: aesthetic. About beauty/taste as a category. Noun: aesthetics / an aesthetic.',
    []
  ),
  analogy: L(
    'An analogy is a comparison that maps one situation onto another so the reader understands a relationship: A is to B as C is to D. Native teachers use analogies as tools, then warn where they break. A metaphor says X is Y; an analogy usually keeps “like” or “as” and teaches a structure. Analogous is the adjective.',
    ['She used an analogy with traffic to explain bandwidth.', 'The analogy with a thermostat only goes so far.'],
    'an analogy between/with. adjective: analogous. metaphor = “X is Y.”',
    ['comparison']
  ),
  arbitrary: L(
    'Arbitrary means a decision rests on personal whim or chance, not on a stated rule, reason, or principle. Native writers use it as criticism: arbitrary cuts, an arbitrary deadline. Random is closer to chance in statistics; arbitrary stresses the lack of justification. Capricious is more about changing mood.',
    ['The word limit felt arbitrary until they explained the marking grid.', 'Power is dangerous when penalties are arbitrary.'],
    'arbitrary = not justified by a rule. random = by chance. Opposite flavour: principled.',
    []
  ),
  assert: L(
    'To assert is to state something as true with firmness, often without proving it in the same breath. Native academic style notes that a writer asserts a claim, then must support it. Claim is close but can sound more tentative; declare is more public. Assert yourself means insist on your rights — a different, interpersonal sense.',
    ['The authors assert a causal link they have not yet shown.', 'She asserted her right to see the file.'],
    'assert that + clause. Close: claim. assert yourself = insist on your rights.',
    ['claim']
  ),
  autonomy: L(
    'Autonomy is the right or capacity to decide for yourself — of a person, a team, or an institution. Native writers contrast autonomy with control, supervision, or dependence. Independence is broader (not relying on others); autonomy stresses decision-making authority. Autonomous is the adjective: an autonomous region / learner.',
    ['Junior doctors want more clinical autonomy.', 'The unit was given autonomy over its budget.'],
    'autonomy = freedom to decide. independence = not relying on others. adjective: autonomous.',
    ['independence']
  ),
  complement: L(
    'To complement (with an e) is to complete or improve something by adding what it lacks: the two things go well together. Native writers contrast it with supplement (add extra) and with compliment (with an i: praise). Complementary skills, complementary colours. The noun complement is “the thing that completes.”',
    ['A short glossary would complement the chapter.', 'Their skills complement each other: she writes, he designs.'],
    'complement (e) = go well with. compliment (i) = praise. similar: supplement = add extra.',
    []
  ),
  constraint: L(
    'A constraint is a real limit on what you can do: time, money, law, space. Native planners write under tight constraints, budget constraints. A limitation can be a weakness in a study; a restriction is often a rule someone imposes. Constraint names the binding condition you must work within.',
    ['Legal constraints ruled out a full copy of the text.', 'They redesigned the study within ethical constraints.'],
    'a constraint / constraints. under constraint. limitation = often a weakness. restriction = a rule.',
    ['limitation']
  ),
  contemporary: L(
    'Contemporary as an adjective means of the present day, or existing at the same period as someone or something else. Native writers say contemporary art (modern now) and Shakespeare’s contemporaries (people of his time). Modern overlaps the first sense; simultaneous is only “at the same time,” without the cultural flavour. As a noun, a contemporary is a person of the same period.',
    ['The course mixes classical theory with contemporary case studies.', 'Austen and her contemporaries wrote for a growing middle-class readership.'],
    '1) of today. 2) of the same period. noun: a contemporary.',
    ['modern']
  ),
  contradict: L(
    'To contradict is to say the opposite, or for two pieces of evidence not to match. Native writers use the findings contradict earlier work, or she contradicted him in the meeting. Deny is refuse to accept a charge (“I didn’t do it”); refute is prove a claim false. A contradiction is the noun.',
    ['His later email contradicted the minutes of the meeting.', 'Nothing in the data contradicts the main hypothesis.'],
    'contradict a person / a claim. deny = reject an accusation. refute = disprove. Noun: contradiction.',
    []
  ),
  convention: L(
    'A convention is an accepted way of doing something in a community: academic, social, or artistic. Native writers mark a convention when they follow or break it on purpose. A custom is often cultural and older; a rule is more official; a conference is another meaning of convention (a large meeting). Conventional is the adjective: the usual way.',
    ['By convention, we italicise book titles.', 'Breaking the convention of a happy ending shocked readers.'],
    'convention = accepted practice. also: a conference. adjective: conventional.',
    ['custom']
  ),
  credibility: L(
    'Credibility is the extent to which people are willing to believe you or your account. Native writers say undermine / damage / restore credibility. Reputation is broader (what people think of you over time); reliability is about consistent performance. Credible is the adjective: a credible witness. Credulous means too ready to believe — a trap word.',
    ['Without sources, the blog has little credibility.', 'One exaggeration can cost a journalist her credibility.'],
    'credibility of a person/claim. adjective: credible. Not credulous (gullible).',
    []
  ),
  deficit: L(
    'A deficit is the amount by which something falls short of what is needed or expected, especially money: a budget deficit. Native economists contrast deficit with surplus. Shortage is everyday for goods; shortfall is a close synonym. In education you may hear an attention deficit (a specialised medical phrase).',
    ['The department closed the year with a small deficit.', 'There is a deficit of trained supervisors in the region.'],
    'a deficit (countable). Opposite (money): surplus. Everyday: shortage / shortfall.',
    ['shortfall']
  ),
  discourse: L(
    'Discourse is language in use as a social practice — talk or writing that belongs to a field: political discourse, scientific discourse. Native academics use it for patterns of argument, not for a single chat. Discussion is one conversation; a text is one document. Discourse analysis studies how meaning is built in context.',
    ['Public discourse on climate has shifted in a decade.', 'The seminar trains students in the discourse of peer review.'],
    'discourse = serious/systemic communication in a field. Everyday: discussion. related: discourse analysis.',
    []
  ),
  disparity: L(
    'A disparity is a large, often unfair gap between groups or figures. Native social-science writing prefers income disparity, health disparities. Difference is neutral and can be tiny; inequality stresses injustice; gap is more informal. Disparate is the adjective for things that are strikingly unlike.',
    ['The study highlights a disparity in exam access between rural and urban schools.', 'Pay disparity widened after the reform.'],
    'a disparity in/between. Neutral: difference. Unfair gap: inequality. adjective: disparate.',
    ['gap']
  ),
  elicit: L(
    'To elicit is to draw out a response, fact, or feeling, usually by a question, task, or stimulus. Native researchers elicit judgements, elicit examples. Extract can sound forceful (extract a confession); obtain is general. Elicit is not illicit (illegal) — a common spelling confusion.',
    ['The prompt was designed to elicit disagreement, not consensus.', 'A follow-up question elicited the missing date.'],
    'elicit a response/answer. Not illicit (illegal). Stronger/forceful: extract.',
    ['draw out']
  ),
  endorse: L(
    'To endorse is to give public, often official, support: endorse a candidate, endorse a product, endorse a report’s recommendations. Native writers treat it as stronger than like and more public than agree with. Approve can be private; recommend is advice. An endorsement is the noun. In banking, endorse a cheque is a specialised sense.',
    ['Several unions endorsed the revised pay deal.', 'The charity refused to endorse the supplement.'],
    'endorse = publicly support. Noun: endorsement. Weaker: agree with. Private: approve.',
    ['support']
  ),
  ethic: L(
    'Ethic often appears in the phrase a work ethic (a habit of taking work seriously). Ethics (usually plural) are moral principles about right and wrong, or the academic subject. Native writers say professional ethics, ethical guidelines. Ethic as a countable noun can also mean a moral system: a care ethic. Ethical is the adjective. Ethnic (people and culture) is a different word.',
    ['The lab’s ethic is to share data as soon as it is clean.', 'Business ethics require them to declare the conflict of interest.'],
    'a work ethic. ethics = moral principles (usually plural). adjective: ethical. Not ethnic.',
    []
  ),
  evoke: L(
    'To evoke is to bring a feeling, memory, or image into the mind — often of art, place, or language. Native critics say the poem evokes loss. Provoke means stir a reaction, often anger; invoke means call upon a law, principle, or aid. Evocative is the adjective.',
    ['The photograph evokes a winter afternoon in the old town.', 'Certain verbs evoke formality even in a short email.'],
    'evoke a feeling/memory. provoke = stir (often anger). invoke = call upon. adjective: evocative.',
    []
  ),
  exploit: L(
    'Exploit as a verb has two C1 readings: use a resource fully and skilfully, and use a person or situation unfairly for gain. Native writers rely on context: exploit a market opportunity versus exploit workers. Take advantage of has the same split. The noun exploit (stress on the first syllable) means a bold deed — rarer.',
    ['The team exploited a loophole in the marking scheme.', 'Campaigners argued that the contract exploited unpaid interns.'],
    '1) use fully. 2) use unfairly. Noun stress: EXploit = a daring act.',
    []
  ),
  fluctuate: L(
    'Fluctuate means rise and fall irregularly, not in a single direction. Native writers use it for prices, mood, temperature, and scores. Change is too general; vary can be planned (the menu varies); oscillate is more technical. Fluctuation is the noun: fluctuations in demand.',
    ['Enrolment fluctuates from term to term.', 'Her confidence fluctuated as the results came in.'],
    'fluctuate = go up and down. Noun: fluctuation(s). steadier opposite: remain stable.',
    ['vary']
  ),
  formulate: L(
    'To formulate is to shape a plan, question, or argument carefully in words. Native academic English uses formulate a hypothesis, formulate a policy. Create is broader; express is only about wording; draft is a first version. Formulation is the noun (also a chemical mixture in other fields).',
    ['They formulated a research question narrow enough to test.', 'Can you formulate the objection in one sentence?'],
    'formulate a plan/argument/hypothesis. Broader: create. Noun: formulation.',
    ['draft']
  ),
  ideology: L(
    'An ideology is a fairly systematic set of beliefs that guides a group’s politics or worldview. Native writers use it when ideas come as a package, not as one opinion. A belief can be personal; a doctrine is more official; propaganda is persuasion, often dishonest. Ideological is the adjective. The word can be descriptive or critical, depending on tone.',
    ['Market ideology shaped how the university priced its courses.', 'She rejected the ideology that success is only individual.'],
    'an ideology. adjective: ideological. weaker: belief. official: doctrine.',
    ['worldview']
  ),
  implicit: L(
    'Implicit means suggested or understood without being stated in so many words. Native writers contrast implicit with explicit (spelt out). An implicit assumption is dangerous in argument because readers may not share it. Implied is the everyday verb form (the letter implied…); implicit is the adjective. Implicit in can mean “contained in.”',
    ['The instruction was implicit: late work would simply be ignored.', 'There is an implicit contrast between the two case studies.'],
    'implicit = not stated directly. Opposite: explicit. verb: imply. implicit in = contained in.',
    []
  ),
  indigenous: L(
    'Indigenous means originating in a place, especially of peoples, languages, and species. Native writers capitalise Indigenous in many style guides when referring to peoples, and they prefer it to older colonial phrasing. Native overlaps but is also used for languages (a native speaker) in a different sense. Local only means “of the area now.”',
    ['The museum collaborated with indigenous historians on the labels.', 'Several indigenous languages of the valley are now endangered.'],
    'indigenous to + place. Of peoples: often Indigenous (capital I) in modern style. Not only “local.”',
    ['native']
  ),
  infrastructure: L(
    'Infrastructure is the underlying systems a society or organisation needs in order to function: transport, energy, water, digital networks. Native policy writing treats it as a mass of systems, not one building. Facilities are individual buildings or services; utilities are often power and water companies. Infrastructural is a rarer adjective.',
    ['Without digital infrastructure, remote exams collapse.', 'Investment in rail infrastructure lagged behind housing growth.'],
    'infrastructure = basic systems (often uncountable). narrower: facilities / utilities.',
    []
  ),
  integrity: L(
    'Integrity is honesty and moral consistency you can trust — doing the right thing when it costs you. Native writers also use it in a technical sense: the integrity of the data (wholeness, not corrupted). Honesty is the everyday moral word; integrity adds coherence between values and actions. Integral (essential) is a different word.',
    ['She kept her integrity and declined the gift.', 'Backups protect the integrity of the archive.'],
    '1) moral consistency. 2) wholeness of data/systems. Not integral (essential).',
    ['honesty']
  ),
  intrinsic: L(
    'Intrinsic means belonging to the essential nature of a thing, not added from outside. Native education writing contrasts intrinsic motivation (interest in the task) with extrinsic motivation (grades, pay). Inherent is a close synonym; intrinsic often pairs with value, property, worth. Extrinsic is the usual opposite.',
    ['Curiosity is an intrinsic reason to read, unlike extra marks.', 'Colour is not an intrinsic property of the object in that theory.'],
    'intrinsic vs extrinsic. Close: inherent. intrinsic motivation = interest in the thing itself.',
    ['inherent']
  ),
  methodology: L(
    'Methodology is the system of methods and the reasoning behind them — why you chose interviews, a corpus, or an experiment. Native markers penalise using methodology as a fancy word for method (a single procedure). Methods (plural) lists what you did; methodology discusses the approach. Methodological is the adjective.',
    ['Their methodology combines diary studies with interviews.', 'A weak methodology can sink an otherwise interesting question.'],
    'methodology = the approach and its justification. method(s) = the procedures used.',
    []
  ),
  nonetheless: L(
    'Nonetheless means “in spite of that” — a formal contrast after a concession. Native writers often put it after a full stop or semicolon: The sample was small. Nonetheless, the pattern was clear. However is more common; nevertheless is a close synonym. Although / even though start a clause with a subject and verb. Nonetheless does not join two clauses by itself without punctuation.',
    ['The software is dated. Nonetheless, it meets the brief.', 'She had little training; she led the session nonetheless.'],
    'nonetheless = even so (formal). Close: nevertheless. however is commoner. although + clause.',
    ['nevertheless']
  ),
  paradigm: L(
    'A paradigm is a widely shared model of how something works, or a typical example of a pattern. Native academic English uses paradigm shift for a deep change in that model (after Kuhn). A model can be smaller and more local; a framework is a set of concepts you apply; an example is one instance. Do not use paradigm for every “example.”',
    ['Randomised trials became the dominant paradigm in that field.', 'Her career is a paradigm of slow, careful scholarship.'],
    'paradigm = shared model / typical example. paradigm shift = deep change of model. smaller: example.',
    ['model']
  ),
  persistent: L(
    'Persistent means continuing for a long time, or a person who will not give up. Native writers use it for symptoms (a persistent headache) and for behaviour (persistent questioning). Continuous stresses no break; continual often means repeated with pauses. Persistent can be praise (effort) or complaint (a persistent rumour). Persistence is the noun.',
    ['A persistent error in the script crashed every build.', 'He was persistent, and the editor finally replied.'],
    'persistent = lasting or not giving up. continuous = without a break. Noun: persistence.',
    []
  ),
  plausible: L(
    'Plausible means it sounds reasonable and might well be true — you could believe it, even if it is unproven. Native writers contrast a plausible account with a convincing one (which actually persuades) and with possible (which may still be unlikely). Implausible is the opposite. Plausibility is the noun.',
    ['It is a plausible reading of the last paragraph, not the only one.', 'The alibi was plausible until the timestamps appeared.'],
    'plausible = believable. possible = can happen (maybe rare). stronger: convincing. Opposite: implausible.',
    ['believable']
  ),
  profound: L(
    'Profound means very great in degree, or showing deep insight. Native writers use a profound effect, profound change, a profound remark. Deep is the everyday word; profound is more formal and often intellectual or emotional. Superficial is a useful opposite. Profoundly is the adverb.',
    ['The closure had a profound impact on local shops.', 'It is a short book, but the argument is profound.'],
    'profound = very great or intellectually deep. Everyday: deep. Opposite: superficial.',
    ['deep']
  ),
  protocol: L(
    'A protocol is an official, agreed procedure for how something must be done: safety protocol, research protocol, diplomatic protocol. Native institutions treat a protocol as binding, not optional advice. A procedure can be any set of steps; etiquette is social manners; a rule may be a single requirement. In computing, a protocol is a communication standard (HTTPS).',
    ['The ethics protocol required written consent.', 'Staff broke protocol by sharing logins.'],
    'protocol = official procedure / standard. looser: procedure. social: etiquette.',
    ['procedure']
  ),
  qualitative: L(
    'Qualitative research deals with meaning, experience, and kind — interviews, observation, texts — rather than counts. Native writers pair it with quantitative (numbers, statistics). Quality in everyday English means “how good”; qualitative does not automatically mean “high quality.” A qualitative difference is a difference in type, not merely in amount.',
    ['They added a qualitative stage to explain the survey scores.', 'The two policies differ in a qualitative way, not only in cost.'],
    'qualitative vs quantitative. Not automatically “better quality.” qualitative difference = difference in kind.',
    []
  ),
  radical: L(
    'Radical means going to the root, hence very new, thorough, or extreme compared with what is usual. Native writers use radical reform (deep change) and a radical proposal. Extreme stresses distance from the centre and often sounds more negative; fundamental can mean basic rather than shocking. A radical (noun) is a person with radical views.',
    ['They called for a radical rewrite, not another patch.', 'In that decade, votes for women still counted as a radical idea.'],
    'radical = thorough / far from usual. extreme = often more negative. noun: a radical.',
    []
  ),
  reconcile: L(
    'To reconcile is to bring two conflicting things — people, aims, or accounts — into a workable agreement. Native writers reconcile A with B: reconcile family life with shift work. Make up is informal for people; resolve a conflict can mean end it. In finance, reconcile the books means make the figures match. Reconciliation is the noun.',
    ['I cannot reconcile those two paragraphs; one must go.', 'After the row they were slow to reconcile.'],
    'reconcile A with B. people: make up (informal). accounts: make figures match. Noun: reconciliation.',
    []
  ),
  refine: L(
    'To refine is to improve by small, careful adjustments, not by starting again. Native writers refine a question, refine a method, refine a draft. Improve is broader; polish is close for style; revise can be larger. Refined as an adjective can also mean elegant (a refined taste). Refinement is the noun.',
    ['They refined the rubric after the first marking trial.', 'One more example would refine the definition.'],
    'refine = improve in small steps. broader: improve. larger: revise. Noun: refinement.',
    ['polish']
  ),
  substantial: L(
    'Substantial means large in amount, value, or importance — more than slight, less theatrical than huge. Native academic writers prefer a substantial difference, substantial evidence. Significant often implies statistical or meaningful importance; considerable is a close synonym. Substantive (on the substance of an issue) is a different, easily confused word.',
    ['There is now substantial evidence for the smaller effect.', 'She inherited a substantial library, not just a few novels.'],
    'substantial = fairly large/important. significant = often “meaningful.” Not substantive (about substance).',
    ['considerable']
  ),
  subtle: L(
    'Subtle means fine, not obvious, easy to miss — of a difference, a flavour, a hint, or a strategy. Native writers praise a subtle argument and warn that subtle is not the same as weak. Obvious is the opposite. Subtlety is the noun (close to nuance). Note the spelling: subtle, with a silent b; not “suttle.”',
    ['The advert makes a subtle appeal to guilt.', 'Only a subtle change in word order alters the emphasis.'],
    'subtle = fine, easy to miss. Noun: subtlety. Close idea: nuance. Silent b.',
    []
  ),
  unprecedented: L(
    'Unprecedented means never known or done before in the relevant history. Native journalists and academics use it for scale or novelty: unprecedented demand. Unique means one of a kind (and traditionally not “very unique”). Record-breaking is more sporting and numerical. Unexampled is rare and literary.',
    ['The archive received an unprecedented number of requests in a week.', 'Such cooperation between the two faculties was unprecedented.'],
    'unprecedented = never before (in that context). unique = one of a kind. weaker: unusual.',
    []
  ),
  viable: L(
    'Viable means able to work successfully in practice — a plan, a product, a pregnancy in medical English. Native writers contrast viable with possible (thinkable) and with feasible (doable given constraints; very close). A viable alternative must actually function, not merely exist on paper. Viability is the noun. Non-viable is the opposite.',
    ['Without a translator, the interview design is not viable.', 'They dropped two ideas that were interesting but not viable.'],
    'viable = workable in practice. possible = can be imagined. Close: feasible. Noun: viability.',
    ['feasible']
  ),
}
