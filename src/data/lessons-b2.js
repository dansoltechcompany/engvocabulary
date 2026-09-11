const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2 = {
  assume: L(
    'To assume is to treat something as true without checking — weaker than know, which needs evidence. Common patterns are assume that + clause and assume someone to be + adjective; a second, more formal meaning is take on a role (assume responsibility). In conversation it can sound unfair if you assume someone\'s motives.',
    ['Do not assume the email arrived; check your spam folder.', 'We assumed the shop would still be open.'],
    'assume that + clause. Contrast: know (with evidence). Also: assume responsibility.',
    ['suppose']
  ),
  distinct: L(
    'Distinct means clearly different, or easy to notice as separate — more precise than a vague different. Keep it apart from distinctive, which means typical of one person or thing (a distinctive voice). You say distinct from, and a distinct possibility / advantage; distinctly is the adverb (I distinctly remember).',
    ['Her accent is distinct from the others in the class.', 'There is a distinct smell of smoke in the corridor.'],
    'distinct from + noun. distinctive = typical of someone/something.',
    ['separate']
  ),
  emerge: L(
    'To emerge is to come out into view, or to become known after being hidden. Appear can just mean become visible; emerge often suggests a process — from water, from a crowd, or from a crisis. News emerged that… and emerge as a leader are typical in reports; the noun is emergence.',
    ['Details of the deal emerged later in the week.', 'She emerged from the library after three hours.'],
    'emerge from + place/situation. emerge as + role. Stronger process than appear.',
    ['come out']
  ),
  emphasize: L(
    'To emphasize (British spelling: emphasise) is to give extra weight to a point so it is not missed. You emphasise the importance / need / fact that; stress is more informal and spoken, while highlight is close in essays. Emphasis is the noun: place emphasis on — it is about focus, not volume.',
    ['The article emphasises the risks of sitting all day.', 'I want to emphasise that this is only a draft.'],
    'British: emphasise. emphasise the importance of. Noun: emphasis (on).',
    ['stress', 'highlight']
  ),
  establish: L(
    'To establish is to start something so that it lasts — a company, a rule, a tradition — or to prove a fact so it is accepted; it is more formal than start or set up. Collocations include establish contact, establish a reputation, and it is established that. In academic writing, established often means already accepted.',
    ['The charity was established in 1998.', 'Scientists have not yet established the cause.'],
    'establish a company / a rule / the facts. More formal than start.',
    ['set up', 'found']
  ),
  expose: L(
    'To expose is to uncover something hidden, often something wrong, or to put someone in contact with a risk or experience. Contrast reveal, which is more neutral “make known”: a film reveals a twist; a journalist exposes corruption. Expose someone to language / danger is a second pattern; exposure is the noun, often serious or journalistic.',
    ['The documentary exposed how the money was spent.', 'Do not expose the plants to direct frost.'],
    'expose a problem / scandal. expose someone to + risk or experience.',
    ['uncover']
  ),
  generate: L(
    'To generate is to produce something, especially energy, data, money, or a reaction — more technical or formal than create or make. Typical collocations are generate electricity, generate income, and generate interest / discussion. Generate damage is possible, but cause is more natural for accidents.',
    ['The campaign generated a lot of public interest.', 'Solar panels generate power even on cloudy days.'],
    'generate electricity / income / interest. More formal than create.',
    ['produce']
  ),
  imply: L(
    'To imply is to suggest a meaning without stating it: the speaker or text implies, and the listener infers — a classic B2 mix-up. The pattern is imply that + clause; implication is the noun (the implication is that…). It is common in academic discussion and slightly formal in speech.',
    ['Silence can imply disagreement.', 'Are you implying that I copied the work?'],
    'Speaker implies; listener infers. imply that + clause. Noun: implication.',
    ['suggest']
  ),
  justify: L(
    'To justify is to show that an action or opinion is reasonable: you justify a decision / a delay, or justify + -ing. It is stronger than explain — an explanation tells how; a justification argues why it was right — while excuse often sounds weaker or more personal. Justification and justifiable are the related forms.',
    ['Nothing justifies shouting at the staff.', 'She justified the extra cost with new data.'],
    'justify a decision / justify + -ing. Noun: justification. Stronger than explain.',
    ['defend']
  ),
  neglect: L(
    'To neglect is to fail to give enough care or attention; ignore is often deliberate, while neglect can be careless or chronic. Patterns include neglect your health / duties and neglect to + verb (fail to do it). It is also a noun (child neglect), and negligent is the related adjective in formal and legal English.',
    ['The garden was neglected for years.', 'He neglected to mention the extra fee.'],
    'neglect + noun. neglect to + verb. Contrast: ignore (often on purpose).',
    ['overlook']
  ),
  obtain: L(
    'To obtain is to get something, usually by effort or through an official process: get is everyday, while obtain belongs in forms, reports, and academic English. You obtain a visa / permission / information from a source. Acquire often suggests gaining a skill or possession over time; obtain is more about securing a specific thing.',
    ['Students must obtain written consent from a parent.', 'Where did you obtain these figures?'],
    'Formal for get. obtain permission / a document from. Contrast: acquire (over time).',
    ['get']
  ),
  overcome: L(
    'To overcome is to succeed against a difficulty, fear, or disadvantage: you overcome obstacles / resistance / a habit, not usually a sports opponent (defeat or beat). It stresses the process of dealing with something in the way. Overcame / overcome are the past forms; in academic writing you also overcome limitations.',
    ['They overcame several technical problems.', 'It took months to overcome the injury.'],
    'overcome a fear / obstacle / difficulty. Past: overcame, overcome.',
    ['conquer']
  ),
  precise: L(
    'Precise means exact, with no unnecessary vagueness. Accurate is “correct”; precise is “finely specified” — a measurement can be precise but still wrong if the tool is biased — while exact is a close everyday synonym. Collocations include a precise figure / definition / moment and to be precise; precision is the noun.',
    ['We need a precise definition of the term.', 'The map is not precise enough for hiking.'],
    'precise figure / time / wording. accurate = correct; precise = exact in detail.',
    ['exact']
  ),
  reveal: L(
    'To reveal is to make known something that was secret, hidden, or not yet seen — more neutral than expose, which often implies wrongdoing. A study reveals that… is a standard academic opener, and reveal a secret / identity / result are common. Revelation is the noun; in everyday talk, show or tell is simpler.',
    ['The scan revealed a small crack in the bone.', 'She refused to reveal her sources.'],
    'reveal that + clause. Neutral; expose often suggests scandal.',
    ['disclose']
  ),
  significant: L(
    'Significant means large or meaningful enough to notice, especially in size, effect, or statistics. Important is about value or priority: a small detail can be important without being significant in scale. Collocations include a significant increase / difference / number and statistically significant; it is a favourite in reports, and can sound heavy in casual chat.',
    ['There was a significant drop in attendance after the fee rose.', 'The finding is interesting but not statistically significant.'],
    'significant increase / difference. Contrast: important (value), not always size.',
    ['notable']
  ),
  sufficient: L(
    'Sufficient means as much as is needed: enough is the everyday word and more flexible in position (enough time), while sufficient is more formal and usually comes before the noun (sufficient evidence / time / funds). The pattern is sufficient for + noun or -ing; adequate often hints “barely good enough,” and insufficient is the opposite.',
    ['The sample size was not sufficient for firm conclusions.', 'Is one example sufficient, or do we need more?'],
    'Formal enough. sufficient + noun; sufficient for. Opposite: insufficient.',
    ['enough']
  ),
  thorough: L(
    'Thorough means complete and done with care, so nothing important is missed: a thorough search / check / investigation is typical. Comprehensive stresses breadth (covering all areas); thorough stresses depth and care. Thoroughly is a common adverb (wash thoroughly), and it can also describe a person: a thorough worker.',
    ['The mechanic gave the engine a thorough inspection.', 'Please read the contract thoroughly before you sign.'],
    'a thorough check / investigation. comprehensive = wide; thorough = careful and complete.',
    ['careful']
  ),
  vast: L(
    'Vast means extremely large in area, number, or scale — bigger than large or big, and not usually used for a person\'s body. The vast majority is a set phrase (almost all), and vast amounts of data / a vast area are typical. Register is slightly literary or formal; huge is more informal.',
    ['A vast majority of voters supported the change.', 'They crossed a vast stretch of desert.'],
    'the vast majority = almost all. For scale, not usually for people.',
    ['huge']
  ),
  widespread: L(
    'Widespread means existing in many places or among many people. Common can mean “usual”; widespread stresses geographical or social spread, as in widespread support / concern / use / belief. It is frequent in news and reports; the opposite idea is limited or isolated, and it is not the same as wide (physical width).',
    ['There is widespread concern about air quality.', 'Online shopping is now widespread in the region.'],
    'widespread support / concern / use. Stresses how far something has spread.',
    ['extensive']
  ),
  acknowledge: L(
    'To acknowledge is to accept that something is true, or to show you have noticed a person or fact. Admit often implies guilt; acknowledge can be neutral (acknowledge a mistake / a problem / receipt of an email) and takes that + clause. In academic writing you acknowledge sources and limitations; it is more formal than say yes or notice.',
    ['The university acknowledged the delay and apologised.', 'I acknowledge that the first draft was weak.'],
    'acknowledge that / a problem. Neutral; admit often suggests wrongdoing.',
    ['recognise']
  ),
  acquire: L(
    'To acquire is to get something, often gradually — a skill, a language, a taste, or a company. Get is informal; obtain is more “secure a document”; acquire stresses coming into possession or ability, as in acquire a reputation / knowledge / a habit. Acquisition is the noun (also a business takeover) and a technical term in language learning.',
    ['She acquired a taste for classical music at university.', 'The firm acquired two smaller rivals last year.'],
    'acquire a skill / language / company. Gradual or formal get. Noun: acquisition.',
    ['gain']
  ),
  adequate: L(
    'Adequate means enough in amount or acceptable in quality — often “good enough,” not excellent. Sufficient is closer to “the right quantity”; adequate can judge quality too (adequate housing / lighting), while enough is everyday. Inadequate is a strong criticism, and in reviews adequate can sound faintly disappointing.',
    ['The heating is adequate in winter, but not generous.', 'One page of notes is not adequate preparation.'],
    'adequate + noun. Often “just enough,” not outstanding. Opposite: inadequate.',
    ['acceptable']
  ),
  alternative: L(
    'An alternative is another option instead of the usual one: alternative to + noun (a cheaper alternative to flying), or as an adjective (an alternative plan / method). Alternate in British English often means “every other” (alternate days); American English uses alternate for “instead.” Alternatively is the sentence adverb.',
    ['Is there a realistic alternative to extra homework?', 'We discussed several alternative routes.'],
    'alternative to + noun. Adjective: an alternative plan. Not the same as alternate (every other).',
    ['option']
  ),
  analyse: L(
    'To analyse (American spelling: analyze) is to examine something by looking at its parts so you can understand it — more methodical than a casual look at or study. You analyse data / results / a text; analysis is the noun (plural analyses), and analytical describes a way of thinking. It is common in academic English, and too heavy for “I analysed the menu.”',
    ['We need to analyse why the numbers fell in May.', 'The essay analyses both sides of the debate.'],
    'British: analyse. analyse data / a text. Noun: analysis (pl. analyses).',
    ['examine']
  ),
  anticipate: L(
    'To anticipate is to expect something and often prepare for it. Expect can be a simple belief about the future; anticipate often includes looking ahead (anticipate problems / demand / questions), and it can also mean do something before the other person does. Anticipation is the noun; the word is slightly more formal than expect.',
    ['The team anticipated a tough second half and trained for it.', 'Nobody anticipated how quickly prices would rise.'],
    'anticipate problems / demand. Stronger than expect when you prepare in advance.',
    ['foresee']
  ),
  appropriate: L(
    'Appropriate means suitable for a particular situation, audience, or age: suitable is the everyday synonym, while appropriate is more formal and common in rules (appropriate behaviour / clothing / language) with for or to. Inappropriate is a frequent opposite in schools and workplaces. It is not the verb appropriate (take for yourself), which has different stress.',
    ['Is this film appropriate for twelve-year-olds?', 'Please use an appropriate tone in the email.'],
    'appropriate for / to. Formal suitable. Adjective stress: a-PRO-priate.',
    ['suitable']
  ),
  assess: L(
    'To assess is to judge quality, amount, or risk in a structured way: teachers assess work, doctors assess a patient, and firms assess risk. Evaluate often asks how successful or worthwhile something is; assess is broader and includes measuring, while mark is narrower (give a score). Assessment is the noun (continuous assessment), in professional and academic register.',
    ['We need to assess the damage before we repair it.', 'The report assesses the impact on local shops.'],
    'assess risk / damage / a student. Noun: assessment. Related: evaluate (worth/success).',
    ['judge']
  ),
  bias: L(
    'Bias is an unfair lean towards or against a person, group, or idea: bias towards / against, and a biased report. Prejudice is often stronger and more personal; bias is common in media, research, and statistics (a biased sample), and unconscious bias is a modern collocation. The adjective is biased, not “bias” used as an adjective.',
    ['The hiring process was criticised for gender bias.', 'Try not to let personal bias shape the conclusion.'],
    'bias towards / against. Adjective: biased. Research: a biased sample.',
    ['prejudice']
  ),
  circumstance: L(
    'A circumstance is a fact or condition that surrounds a situation, and it is very often plural: under / in the circumstances, or due to circumstances beyond our control. Situation is more everyday; circumstances sounds formal or legal. In the circumstances they did well means “given what they faced.”',
    ['Under the circumstances, a delay was understandable.', 'Family circumstances made full-time study difficult.'],
    'Usually plural: in / under the circumstances. Formal for situation.',
    ['situation']
  ),
  comprehensive: L(
    'Comprehensive means covering almost everything that is needed — wide and complete, as in a comprehensive guide / review / list. Thorough stresses careful depth; comprehensive stresses range. In British English a comprehensive school is a non-selective secondary school, a specialised meaning; comprehensively is the adverb.',
    ['The handbook offers a comprehensive overview of the course.', 'We need a more comprehensive list of sources.'],
    'comprehensive guide / review. Breadth; thorough = depth. UK: comprehensive school.',
    ['complete']
  ),
  conflict: L(
    'Conflict is a serious disagreement or clash — between people, ideas, or countries: conflict between A and B, in conflict with, or a conflict of interest. The verb conflict (stress on the second syllable) means “be incompatible”: the two accounts conflict. Argument is smaller and more personal; war is the extreme.',
    ['The two studies are in conflict on this point.', 'A conflict of interest meant she could not vote.'],
    'Noun stress: CON-flict. Verb: con-FLICT. in conflict with; conflict of interest.',
    ['clash']
  ),
  considerable: L(
    'Considerable means fairly large in size, amount, or degree — more than some, less dramatic than vast or huge. Collocations include a considerable amount / number / difference and considerable progress / effort. Significant often hints that the size matters; considerable mainly measures scale, and considerably is a useful adverb (considerably cheaper).',
    ['The repairs will take a considerable amount of time.', 'Costs have fallen considerably since last year.'],
    'a considerable amount / number. Scale word; significant often adds “it matters.”',
    ['substantial']
  ),
  consistent: L(
    'Consistent means staying the same in quality or behaviour over time, or agreeing with something else (consistent with the evidence / with previous results). Constant means “not stopping” (constant noise); consistent means “not contradictory or erratic.” Consistently is a high-value adverb in essays, and inconsistency is the noun for a mismatch.',
    ['Her performance has been consistent all season.', 'The new data is consistent with the earlier study.'],
    'consistent with + noun. constant = unending; consistent = steady / not contradictory.',
    ['steady']
  ),
  controversy: L(
    'Controversy is public, often heated disagreement about an issue: controversy over / about a policy, or spark / cause controversy. Debate can be calmer and more organised; a row is informal British for a noisy quarrel. Controversial is the adjective; pronunciation varies, with CON-tro-ver-sy common in British English.',
    ['The building project remains a source of controversy.', 'Her comments sparked controversy on social media.'],
    'controversy over / about. Adjective: controversial. Public, not a private disagreement.',
    ['dispute']
  ),
  crucial: L(
    'Crucial means extremely important because the outcome depends on it. Important is general; essential means you cannot do without it; crucial stresses a turning point (a crucial moment / decision / factor), with crucial to / for success. It is a strong word — overusing it weakens it — and it is common in exams, sport, and reports.',
    ['Timing was crucial to the experiment.', 'The next two weeks will be crucial for the team.'],
    'crucial to / for. Stronger than important; like a turning point. Noun: a crucial factor.',
    ['vital']
  ),
  derive: L(
    'To derive is to get something from a source, or to come from it: derive from Latin / from experience, or derive benefit / pleasure from — more formal than come from or get. In science you derive a formula. Derivation is the noun in linguistics; derivative as an adjective can mean unoriginal.',
    ['A good deal of her confidence derives from preparation.', 'They derived little benefit from the extra meeting.'],
    'derive from + source. derive benefit / pleasure from. Formal come from.',
    ['come from']
  ),
  differentiate: L(
    'To differentiate is to see or show the difference between things: differentiate between A and B, or differentiate A from B. Distinguish is a close synonym; differ is what the things do themselves. In marketing, differentiate a product means make it stand out; the word is more formal than tell apart.',
    ['It is hard to differentiate the two brands by taste alone.', 'The rubric helps teachers differentiate strong essays from weak ones.'],
    'differentiate between A and B / A from B. Close to distinguish.',
    ['distinguish']
  ),
  diversity: L(
    'Diversity is the presence of many different types of people, ideas, or things: cultural / biological / linguistic diversity, or a diversity of opinions. Variety is everyday and often about things; diversity is frequent in social and academic discussion of people and ecosystems. Diverse is the adjective; inclusivity is related but not identical.',
    ['The panel lacked diversity of professional background.', 'A diversity of methods produced similar results.'],
    'cultural diversity; a diversity of + plural noun. Adjective: diverse.',
    ['variety']
  ),
  dramatic: L(
    'Dramatic means sudden and striking in scale, or connected with theatre. A dramatic increase / fall / change is a set collocation in news and data commentary — not “theatrical acting” — while significant is merely noticeable and dramatic is eye-catching, often sudden. Dramatically is very common (prices rose dramatically); do not overuse it in academic writing.',
    ['There has been a dramatic improvement in air quality.', 'The landscape changes dramatically after the pass.'],
    'a dramatic rise / fall / change. Often sudden and striking, not always theatrical.',
    ['striking']
  ),
  enable: L(
    'To enable is to make it possible for someone to do something: enable someone to + verb. Allow can be permission (“you may”); enable is capacity or means (“this tool makes it possible”), while facilitate is more “make the process easier.” Disable is the technical opposite for machines; enabling is also an adjective for technology.',
    ['The scholarship enabled him to stay on for a master\'s.', 'Captions enable more students to follow the lecture.'],
    'enable someone to + verb. Allow = permission; enable = make possible.',
    ['allow']
  ),
  enhance: L(
    'To enhance is to improve quality, value, or strength rather than fix something broken: enhance performance / flavour / a reputation / security. Improve is broader and more everyday; enhance is slightly more formal and often about making a good thing better. Enhancement is the noun; it is not usually used for repairing a fault.',
    ['Better lighting would enhance the photographs.', 'The course is designed to enhance critical thinking.'],
    'enhance performance / quality. Improve is general; enhance often “make stronger/better.”',
    ['improve']
  ),
  equivalent: L(
    'Equivalent means equal in value, amount, meaning, or effect, even if not identical: equivalent to, or the equivalent of two hours\' work. Equal is simpler (same number); equivalent allows a conversion or rough match. As a noun it appears in comparisons (a British equivalent of the SAT); equivalence is the related noun.',
    ['This diploma is equivalent to the first year of a degree.', 'She paid the equivalent of a week\'s wages for the ticket.'],
    'equivalent to; the equivalent of. Equal = same; equivalent = matching in worth/meaning.',
    ['equal']
  ),
  evaluate: L(
    'To evaluate is to judge how good, useful, or successful something is, often against criteria. Assess can include measuring size or risk; evaluate focuses on worth and effectiveness (evaluate a method / a policy / evidence). Evaluation is a standard academic noun; the word is too formal for “What did you think of the pizza?”',
    ['We will evaluate the pilot scheme after six months.', 'Students must evaluate the reliability of each source.'],
    'evaluate a method / policy. Worth and success; assess is broader. Noun: evaluation.',
    ['assess']
  ),
  evolve: L(
    'To evolve is to develop gradually, often without a single sudden decision: evolve into / from, or evolve over time. Develop can be planned (develop a product); evolve suggests organic change. In biology it is the technical term; in essays, ideas and systems evolve, and evolving is a common adjective (an evolving situation).',
    ['The app has evolved from a simple list into a full course.', 'Office culture evolved after remote work became normal.'],
    'evolve into / from. Gradual change; develop can be deliberate. Noun: evolution.',
    ['develop']
  ),
  exceed: L(
    'To exceed is to go beyond a limit, number, or expectation: exceed the speed limit / the budget / expectations — more formal than go over. Excess (noun/adjective) and in excess of are related; exceedingly means “very,” and is slightly old-fashioned. It is common on signs, in finance, and in reports; do not confuse it with succeed.',
    ['Demand exceeded supply within an hour.', 'If costs exceed £500, we will need approval.'],
    'exceed a limit / budget / expectations. Formal go over. Related: in excess of.',
    ['surpass']
  ),
  exclude: L(
    'To exclude is to leave someone or something out, or keep them out: exclude from a group / a price / a study, opposite include. Excluding is a useful preposition (the bill, excluding tax), and exclusive can mean “not shared” or “high-end.” Exclusion is the noun (social exclusion is a policy term); the verb is more formal than leave out.',
    ['The survey excluded anyone under eighteen.', 'Please do not exclude quieter students from the discussion.'],
    'exclude from. excluding + noun. Opposite: include. Noun: exclusion.',
    ['omit']
  ),
  explicit: L(
    'Explicit means stated clearly and in detail, so there is no need to guess — contrast implicit (suggested, not said). Make something explicit, and explicit instructions / criteria; explicitly is a high-value academic adverb, while clear is everyday. A second meaning is “sexually frank” (explicit content), so check the context.',
    ['The contract is explicit about overtime pay.', 'The teacher made the marking criteria explicit.'],
    'explicit vs implicit. explicitly state. Also: explicit content (adult material).',
    ['clear']
  ),
  facilitate: L(
    'To facilitate is to make a process easier or help it happen smoothly: facilitate discussion / learning / access. Help is everyday; enable is “make possible”; facilitate is process-focused and quite formal. A facilitator runs a workshop without dominating it; the word is too stiff for everyday favours.',
    ['Clear headings facilitate revision.', 'A round table can facilitate more open debate.'],
    'Formal make easier. facilitate a process / discussion. Person: facilitator.',
    ['ease']
  ),
  furthermore: L(
    'Furthermore adds a point, often a stronger or more formal one, in written argument: also and plus are informal, and moreover is a close synonym. It usually starts a sentence, followed by a comma (Furthermore, the cost is high). It does not contrast (that is however / nevertheless) and does not belong in casual speech.',
    ['The plan is expensive. Furthermore, it would delay the launch.', 'Furthermore, none of the witnesses agreed on the time.'],
    'Sentence adverb: Furthermore, + clause. Adds a point; does not contrast. Close: moreover.',
    ['moreover']
  ),
  illustrate: L(
    'To illustrate is to make an idea clearer with an example, diagram, or picture: illustrate a point / a problem, or this example illustrates that… Demonstrate often shows how something works; illustrate shows what you mean. Illustration is the noun (also a drawing); academic writing uses To illustrate,… and as a book verb it still means “add pictures.”',
    ['One case study will illustrate the risks involved.', 'The diagram illustrates how the three systems connect.'],
    'illustrate a point / argument. To illustrate, + example. Noun: illustration.',
    ['exemplify']
  ),
  implement: L(
    'To implement is to put a plan, policy, or system into operation: implement a policy / reform / timetable. Start is too vague; introduce can mean “bring in for the first time”; implement stresses carrying it out. Implementation is a standard business and public-policy noun; an implement (noun, different stress) is a tool — a trap for learners.',
    ['The council will implement the new parking rules in June.', 'It is easier to design a policy than to implement it.'],
    'implement a plan / policy. Noun: implementation. Tool meaning: an implement (IM-plement).',
    ['carry out']
  ),
  incentive: L(
    'An incentive is something that encourages a particular action, often external: money, grades, time off — an incentive to + verb, or a financial / tax incentive. Motivation can be internal; incentive is frequently the outside push, while motive is the reason for a crime or act. Incentivise is the related British verb.',
    ['Cheap fares are an incentive to leave the car at home.', 'Without a clear incentive, few people completed the survey.'],
    'an incentive to + verb. External encouragement; motivation may be internal.',
    ['motivation']
  ),
  infer: L(
    'To infer is to reach a conclusion from clues, not from a direct statement: you infer from evidence / from her tone that… The writer implies; the reader infers — do not swap them. Inference is the noun (draw an inference); deduce is close, often more logical, while guess is weaker and less reasoned.',
    ['From the empty chairs we inferred that the talk had been cancelled.', 'What can we infer about the author\'s attitude?'],
    'infer from + evidence. Listener/reader infers; speaker/writer implies. Noun: inference.',
    ['deduce']
  ),
  innovation: L(
    'An innovation is a new idea, method, or product that changes how something is done: innovation in technology / education, or a major innovation. Invention is often a specific new object; innovation can be a new way of working. Innovative is the adjective and innovate the verb; the word is common in business English and overused in marketing.',
    ['Contactless payment was a significant innovation in retail.', 'The school is known for innovation in assessment.'],
    'an innovation in + field. Adjective: innovative. Broader than a single invention.',
    ['novelty']
  ),
  integrate: L(
    'To integrate is to combine parts so they work as one, or to join a group so you belong: integrate A into B, or integrate with existing systems. Combine is simpler “put together”; integrate stresses a working whole. Integration is the noun (social / systems integration), common in tech, education, and sociology.',
    ['The new software integrates well with the old database.', 'Newly arrived students were slowly integrated into the year group.'],
    'integrate into / with. Combination that functions as one. Noun: integration.',
    ['combine']
  ),
  interpret: L(
    'To interpret is to explain the meaning of something, or to understand it in a particular way: interpret a graph / a law, or interpret something as criticism. Translate is for languages in a narrower sense; an interpreter converts speech in real time. Interpretation is the noun (also a musical or legal reading), common in academic tasks such as interpret the data.',
    ['Different critics interpret the ending in different ways.', 'It is easy to interpret silence as agreement when it is not.'],
    'interpret as; interpret data / a text. Person who translates speech: interpreter.',
    ['construe']
  ),
  nevertheless: L(
    'Nevertheless means in spite of that — a formal way to contrast. However is more common and flexible; still and even so are more spoken, and it often starts a sentence (It was risky. Nevertheless, they continued). It does not add a reason (therefore) or a similar point (furthermore); nonetheless is a close synonym.',
    ['The evidence is limited. Nevertheless, the pattern is clear.', 'He was inexperienced; nevertheless, the board appointed him.'],
    'In spite of that. More formal than however / even so. Close: nonetheless.',
    ['however']
  ),
  notion: L(
    'A notion is an idea or belief, often not fully proven or rather general: the notion that + clause, or a vague / outdated notion. Idea is everyday; concept is more academic and defined; notion can sound slightly sceptical (the notion that money buys happiness). It is common in essays when you discuss other people\'s beliefs.',
    ['She rejected the notion that talent cannot be trained.', 'He had only a vague notion of how the machine worked.'],
    'the notion that + clause. Idea, sometimes unproven. Related: concept (more defined).',
    ['idea']
  ),
  objective: L(
    'As a noun, an objective is a clear goal you are trying to achieve — more formal than aim or goal, common in business and project English (set / meet objectives). As an adjective, objective means not influenced by personal feelings, opposite subjective; keep the two uses distinct. Objectivity is the noun for the adjective sense.',
    ['The main objective of the visit was to gather feedback.', 'It is hard to stay objective when the issue is personal.'],
    'Noun: a goal (set / meet objectives). Adjective: unbiased. Opposite adjective: subjective.',
    ['aim']
  ),
  perceive: L(
    'To perceive is to notice something, or to understand it in a particular way: perceive a change, or perceive someone as rude / as a threat. See and notice are everyday; perceive is more formal and often about interpretation, not just eyesight. Perception is a high-frequency academic noun; perceptive describes a person who notices subtle things.',
    ['Younger users may perceive the advert as dishonest.', 'He perceived a slight hesitation in her answer.'],
    'perceive as + adjective/noun. Formal notice / see as. Noun: perception.',
    ['regard']
  ),
  perspective: L(
    'A perspective is a particular way of thinking about a situation: from a historical / scientific / student\'s perspective, or put something in perspective (see its true size). Opinion is what you think; perspective often includes position and background, while viewpoint and point of view are close. In art it also means drawing depth; essays often ask you to consider other perspectives.',
    ['From an employer\'s perspective, the rule is simply practical.', 'Travel can put daily worries into perspective.'],
    'from a … perspective. put something in(to) perspective. Close: point of view.',
    ['viewpoint']
  ),
  phenomenon: L(
    'A phenomenon is an observable fact or event, especially one that is striking or needs explanation: a natural / social / cultural phenomenon. The plural is phenomena (not phenomenons in academic English); event is everyday, while phenomenon is scientific or analytical. Phenomenal as an adjective often just means “excellent” in informal speech — a different flavour.',
    ['Urban heat islands are a well-documented phenomenon.', 'The same phenomenon appears in several unrelated languages.'],
    'Plural: phenomena. a natural / social phenomenon. Informal “phenomenal” = excellent.',
    ['occurrence']
  ),
  potential: L(
    'Potential as a noun is the ability to develop or succeed later: have the potential to + verb, or potential for growth. As an adjective it means possible but not yet actual (a potential problem / customer); possible is broader, while potential often hints at latent ability or risk. Potentially is a cautious academic adverb.',
    ['The site has potential for a small park.', 'There is a potential conflict between the two rules.'],
    'Noun: potential to / for. Adjective: a potential problem. Adverb: potentially.',
    ['possibility']
  ),
  prohibit: L(
    'To prohibit is to forbid something officially, by law or rule: prohibit + noun, or prohibit someone from + -ing. Ban is more journalistic; forbid is everyday (parents forbid); prohibit is legal and formal. Prohibition is the noun; prohibitive often describes a price that is too high, and signs read Smoking is prohibited.',
    ['The regulations prohibit the use of flash photography.', 'Visitors are prohibited from feeding the animals.'],
    'prohibit someone from + -ing. Formal/legal forbid. Noun: prohibition.',
    ['forbid', 'ban']
  ),
  proportion: L(
    'Proportion is the size of a part compared with the whole: a large / small / high proportion of + plural noun. In proportion to means matching in scale; out of proportion means exaggerated. Percentage is a number out of 100; proportion is more general, and share is more informal. It is common in data commentary and essays.',
    ['A high proportion of the budget goes on rent.', 'The punishment seemed out of proportion to the mistake.'],
    'a proportion of + plural. in / out of proportion. Related: percentage (out of 100).',
    ['share']
  ),
  reinforce: L(
    'To reinforce is to make an idea, feeling, behaviour, or structure stronger: reinforce a point / a stereotype / a wall. Strengthen is a close general synonym; reinforce is common in psychology, teaching, and engineering. It often means adding support to something already there, not creating it from nothing; reinforcement is the noun (positive reinforcement).',
    ['The second experiment reinforced the original conclusion.', 'Steel bars reinforce the concrete columns.'],
    'reinforce an idea / a structure. Noun: reinforcement. Close: strengthen.',
    ['strengthen']
  ),
  reluctant: L(
    'Reluctant means unwilling, or willing only with hesitation: reluctant to + verb. Unwilling is blunter; reluctant often suggests you could do it but do not want to, while hesitant is about uncertainty rather than resistance. Reluctance is the noun and reluctantly the adverb (she agreed reluctantly); reports often say ministers were reluctant to admit…',
    ['Banks have been reluctant to lend to small firms.', 'She was reluctant to criticise her colleagues in public.'],
    'reluctant to + verb. Noun: reluctance. Softer than unwilling; more resistant than hesitant.',
    ['unwilling']
  ),
  restore: L(
    'To restore is to bring something back to an earlier, better, or original state: restore a building / a painting / confidence / order, or restore to + state. Repair fixes damage; restore often implies returning character or function. Restoration is the noun; the verb is common in heritage, medicine (restore sight), and politics (restore calm).',
    ['The charity aims to restore trust after the scandal.', 'Engineers restored power later the same evening.'],
    'restore something to a state. repair = fix; restore = bring back. Noun: restoration.',
    ['reinstate']
  ),
  retain: L(
    'To retain is to keep something and not lose, drop, or give it away: retain control / information / staff / heat. Keep is everyday; retain is more formal and common in academic, legal, and business English. Retention is the noun (staff retention); retain does not mean “remember” by itself, though retain information is close to that idea.',
    ['The design retains several features of the original hall.', 'It is difficult to retain skilled workers without better pay.'],
    'Formal keep. retain control / staff / information. Noun: retention.',
    ['keep']
  ),
  scenario: L(
    'A scenario is a possible situation or a description of how events might develop: in this scenario, or a worst-case / best-case scenario. Situation is what is happening now; scenario is often hypothetical or planned, and in film it can mean the outline of the plot. It is common in business, climate, and risk language — do not use it for every ordinary situation.',
    ['In one scenario, demand doubles within a year.', 'We practised what to do in an emergency scenario.'],
    'worst-case scenario. A possible or hypothetical situation, not always the present one.',
    ['situation']
  ),
  scheme: L(
    'In British English a scheme is often an official organised plan: a pension / recycling / training scheme. In American English scheme can suggest a dishonest plot — a useful register warning. Colour scheme and rhyme scheme are other set uses; plan is more general, and programme (British) is close for public projects.',
    ['Staff can join the company\'s cycle-to-work scheme.', 'The colour scheme of the office is pale grey and blue.'],
    'UK: official plan (a housing scheme). US: can mean a dishonest plot. Also: colour scheme.',
    ['plan']
  ),
  scope: L(
    'Scope is the range of what something covers, or the opportunity for action: beyond / within the scope of this essay, limited / wide scope, or scope for improvement / expansion. Range is more physical or numerical; scope is abstract and academic. It is common when you define the limits of a discussion or project.',
    ['Privacy law is outside the scope of this module.', 'There is little scope for negotiation on the price.'],
    'within / beyond the scope of. scope for = opportunity. Academic limits of a topic.',
    ['range']
  ),
  specify: L(
    'To specify is to state something clearly and exactly, with the details named: specify a date / a size, or specify that + clause. Say is too general; specify demands precision. Specific is the adjective and specification the noun (technical specs); especially is not a synonym — a common learner mix-up. It is common in instructions, contracts, and methods sections.',
    ['The advert did not specify how much the course would cost.', 'Please specify whether you need a paper or digital copy.'],
    'specify a detail / that + clause. Adjective: specific. Not the same as especially.',
    ['state']
  ),
  substitute: L(
    'To substitute is to use one thing in place of another. The pattern that trips learners is substitute A for B (A replaces B): substitute honey for sugar; replace B with A is clearer for some speakers. As a noun, a substitute is the person or thing that stands in (a substitute teacher); substitution is the related noun.',
    ['You can substitute oat milk for dairy in this recipe.', 'A substitute came on after twenty minutes.'],
    'substitute A for B = A replaces B. Noun: a substitute. Related: replace B with A.',
    ['replace']
  ),
  transform: L(
    'To transform is to change something completely, in nature or appearance: transform into, or a transforming experience. Change can be small; transform is dramatic and total, while convert often means change form or currency for a purpose. Transformation is the noun; avoid it for minor edits.',
    ['Digitisation has transformed how libraries work.', 'The old factory was transformed into apartments.'],
    'transform into. Stronger and more complete than change. Noun: transformation.',
    ['convert']
  ),
  ultimately: L(
    'Ultimately means in the end, after everything else has been considered — the fundamental result or responsibility. Finally often marks the last step in a sequence; ultimately marks the decisive outcome (Ultimately, it is a political choice). Ultimate is the adjective (the ultimate aim); do not use the adverb three times in one paragraph.',
    ['Several factors played a part, but ultimately funding decided it.', 'Ultimately, parents remain responsible for the child\'s safety.'],
    'In the end / at the most basic level. finally = last in a sequence. Adjective: ultimate.',
    ['eventually']
  ),
  undergo: L(
    'To undergo is to experience a process, often one that is done to you or is demanding: undergo surgery / training / repairs / a change. The subject is the patient or object of the process, not the doctor; go through is more informal. Past forms are underwent and undergone; you do not “undergo a sandwich.”',
    ['The software is undergoing a major update this week.', 'She underwent a series of interviews before the offer.'],
    'undergo surgery / change / training. Past: underwent, undergone. Informal: go through.',
    []
  ),
  undertake: L(
    'To undertake is to agree to take on a task or piece of work, often a serious or official one: undertake a project / a review / research, or undertake to + verb (promise to do). Take on is more informal; do not confuse it with undergo (experience a process). Undertaking is the noun (a task, or a formal promise).',
    ['The department has undertaken a full review of the policy.', 'He undertook to deliver the report by Monday.'],
    'undertake a task / to + verb. Formal take on. Contrast: undergo (experience). Noun: undertaking.',
    ['take on']
  ),
  valid: L(
    'Valid means logically sound, or legally and officially acceptable: a valid argument / reason / ticket / passport. True is about facts; valid is about reasoning or official status — a ticket can be invalid even if it is real. Validity is the noun (research validity) and validate the verb; sound is a close synonym for arguments.',
    ['Your passport must be valid for six months after you arrive.', 'That is a valid criticism of the first draft.'],
    'valid ticket / argument. true = fact; valid = sound or officially acceptable. Noun: validity.',
    ['sound']
  ),
  whereas: L(
    'Whereas contrasts two facts in one sentence, mainly in formal and academic writing: She works at night, whereas he starts at dawn. While can do the same job but also means “during the time that”; whereas is only contrast, and but is more informal. Do not use whereas for time; it is typical when comparing data or two groups.',
    ['Coastal areas gained jobs, whereas inland towns lost them.', 'The first test was oral, whereas the second was written.'],
    'Contrast only, not time. More formal than but. while can mean time or contrast.',
    ['while']
  ),
}
