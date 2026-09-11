const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2E = {
  collaborate: L(
    'To collaborate is to work together with someone to produce something: collaborate on a project, collaborate with a school. Work together is everyday; cooperate is close but often means help rather than jointly create; team up is informal. Collaboration is the noun. In speech, work with is usually enough. Do not use it for a one-person job dressed up as teamwork — collaboration needs a real joint product.',
    ['The two departments collaborated on a shared reading list.', 'She collaborated with a musician to write songs for the play.'],
    'collaborate with + person; on + project. Jointly produce. Everyday: work together. Close: cooperate (help). Noun: collaboration.',
    ['work together']
  ),
  collaboration: L(
    'A collaboration is the act of working together, or the piece of work that results: a collaboration between two writers, in collaboration with. Teamwork is everyday and looser; partnership is close for organisations. Collaborate is the verb. In speech, working together is enough. The word is positive in arts and research; in wartime history, collaboration can mean working with an occupying power — a darker sense you will meet in news and history, not in school projects.',
    ['The exhibition was a collaboration between the college and the museum.', 'In collaboration with parents, the school rewrote the homework policy.'],
    'Working together, or the joint product. in collaboration with. Verb: collaborate. Everyday: teamwork. History: working with an occupier (negative).',
    ['partnership']
  ),
  commercial: L(
    'Commercial means connected with buying and selling, or intended to make a profit: a commercial success, commercial radio. Business is the everyday cousin; profitable is closer when money is the point. A commercial is also a noun for an advertisement on TV or radio. Commerce is the noun (trade). In speech, for profit or business is enough. Do not call a school play commercial just because tickets were sold — the word stresses a market purpose, not a one-off fundraiser.',
    ['The app was a commercial hit, even if critics disliked the design.', 'Commercial use of the photographs needs a separate licence.'],
    'Of business / profit. Noun: a commercial = TV/radio advert. Everyday: for profit / business. Contrast: non-profit.',
    ['business']
  ),
  commission: L(
    'A commission is an official group set up to investigate, a fee paid for a sale, or a piece of paid work: a royal commission, sales commission, a commission for a portrait. Committee is close for the group sense but is often standing, not one-off; fee is everyday for the money sense. Commission is also a verb (commission a report). In speech, the inquiry / a cut of the sale / paid work is clearer than one word covering three meanings. Keep the senses apart.',
    ['A commission was appointed to examine exam appeals.', 'Agents take a commission on each booking; the artist was commissioned to paint the hall.'],
    'Official inquiry group; a sales fee; paid work. Verb: commission a painting/report. Everyday: inquiry / fee / paid job. Close (group): committee.',
    ['inquiry']
  ),
  commitment: L(
    'A commitment is a promise to do something, or the dedicated effort you put in: a commitment of time, a commitment to fairness. Promise is everyday for the first sense; dedication is close for the second. Commit is the verb (commit to a plan; also commit a crime — a different sense). In speech, a promise or real effort is enough. Do not use commitment as a vague compliment (“great commitment”) when you mean they simply turned up.',
    ['Evening classes need a commitment of two nights a week.', 'His commitment to the team showed in extra training, not in slogans.'],
    'A promise, or dedicated effort. Verb: commit to. Everyday: promise / dedication. Also: commit a crime (different sense).',
    ['dedication']
  ),
  committee: L(
    'A committee is a small group chosen to make decisions or organise something: the exam committee, sit on a committee. Board is close for governors; panel is often for a one-off judging group; group is everyday and looser. In British English, committee takes a singular or plural verb (the committee meets / meet). In speech, the group that decides is enough. Do not use it for any gathering — a committee has a brief and, usually, minutes.',
    ['The committee meets on Friday to agree the calendar.', 'She sat on the complaints committee for a full year.'],
    'A small decision-making group. Everyday: the group that decides. Close: board / panel. British: singular or plural verb.',
    ['board']
  ),
  communicate: L(
    'To communicate is to share information, ideas, or feelings: communicate by email, communicate clearly. Talk and tell are everyday; convey is a close formal cousin for getting a message across. Communication is the noun. In speech, tell / get in touch is usually enough. You can communicate a result as well as communicate with a person. Do not use it as a stiff synonym for say in every sentence.',
    ['We communicate by email during the holidays, not by last-minute texts.', 'The graph communicates the trend more clearly than a paragraph of numbers.'],
    'Share information/feelings. communicate with + person; communicate a message. Everyday: tell / get in touch. Noun: communication.',
    ['convey']
  ),
  communication: L(
    'Communication is the act of sharing information, or a message itself: good communication, a communication from the office (formal). Talk and contact are everyday; correspondence is letters and emails. Communications (plural) can mean systems: radio communications. In speech, talking / keeping in touch is enough. Do not write “communications” when you mean one email — that is a message or an email.',
    ['Good communication between tutors saved the students a wasted journey.', 'The last communication from the board was a two-line notice, not a discussion.'],
    'Sharing information, or a message. Everyday: talking / contact. Formal: a communication from. Systems: communications.',
    ['contact']
  ),
  comparison: L(
    'A comparison is the act of looking at two things to see how they are similar or different: a comparison of two methods, in comparison with / to. Contrast stresses difference; analogy is a structured likeness. Compare is the verb. By comparison and in comparison with are set phrases. In speech, looking at both / compared with is enough. A useful comparison needs a shared basis — do not compare a marathon with a spelling test and call it analysis.',
    ['A comparison of the two mark schemes showed the second was kinder on drafts.', 'In comparison with last year, attendance has risen, not fallen.'],
    'comparison of + things. in / by comparison with. Verb: compare. Everyday: looking at both. Contrast: contrast (difference), analogy (likeness).',
    ['contrast']
  ),
  compensate: L(
    'To compensate is to give money or something else for a loss or injury, or to make up for a weakness: compensate them for the delay, compensate for a lack of experience. Make up for is everyday; repay is closer for money. Compensation is the noun. Compensate for + noun is the pattern. In speech, make up for it or pay them back is enough. Do not use it for a tiny courtesy (“a biscuit to compensate”) unless you are joking.',
    ['The airline compensated passengers for the cancelled flight.', 'Extra tutorials compensated for the missed week, but they did not replace it.'],
    'compensate someone for a loss; compensate for a weakness. Everyday: make up for / repay. Noun: compensation.',
    ['make up for']
  ),
  compensation: L(
    'Compensation is money or something else given because of a loss, injury, or extra work: compensation for a cancelled flight, a compensation payment. Payback is informal; damages is the legal word for money awarded by a court. Compensate is the verb. In speech, money for the loss is enough. In employment, compensation can also mean the whole pay package — a HR use, not everyday British for a salary.',
    ['She received compensation for the lost luggage, not an apology alone.', 'Time off in lieu was offered as compensation for the weekend duty.'],
    'Payment or a make-good for a loss. Verb: compensate. Everyday: money for the loss. Legal: damages. HR: total pay (US-tinged).',
    ['damages']
  ),
  competence: L(
    'Competence is the ability to do something well: competence in English, a level of competence. Ability is everyday and broader; skill is closer for a trained capacity; proficiency is a close exam-word cousin. Competent is the adjective; incompetence is the opposite. In speech, being able to do it well is enough. Competence is a solid standard, not brilliance — do not use it as faint praise for a genius or as a synonym for genius.',
    ['The job needs competence in British English, not a literature degree.', 'Her competence with the software saved the department a training bill.'],
    'Ability to do it well. Adjective: competent. Everyday: ability / skill. Close: proficiency. Opposite: incompetence. Not brilliance.',
    ['proficiency']
  ),
  competent: L(
    'Competent means able to do something well enough: a competent driver, competent in French. Capable is a close everyday cousin; skilled is stronger; able is broader. Competence is the noun. In speech, good enough / can do it is enough. Competent is often measured praise — solid, not dazzling. Do not use it as an insult (“merely competent”) unless you intend that sting, and do not confuse it with competitive (wanting to win).',
    ['He is a competent chair: meetings end on time, with a decision.', 'A competent summary is better than a flashy one that misses the point.'],
    'Able enough; solid. Noun: competence. Everyday: capable / good enough. Stronger: skilled. Contrast: competitive = wanting to win.',
    ['capable']
  ),
  competitor: L(
    'A competitor is a person or company trying to be more successful than others: a competitor in the race, a market competitor. Rival is a close synonym, often with more heat; opponent is for a contest or debate; contestant is someone in a game show. Compete is the verb; competition is the noun. In speech, rival is usually enough. Do not call a partner a competitor unless they are actually competing.',
    ['Two competitors finished with the same time; the photo decided it.', 'The new college is a competitor for the same sixth-form students.'],
    'A rival person or company. Verb: compete. Everyday: rival. Close: opponent (contest). Contrast: partner / ally.',
    ['rival']
  ),
  complexity: L(
    'Complexity is the state of having many parts and being difficult to understand: the complexity of the rules, a problem of some complexity. Difficulty is everyday and broader; complication is a problem that makes things harder, not the structure itself. Complex is the adjective. In speech, how complicated it is is enough. Complexity can be necessary (a legal system); do not use it as a compliment for muddy writing.',
    ['The complexity of the visa form delayed even careful applicants.', 'Cut the complexity: three steps, not twelve, for the same result.'],
    'How complicated something is. Adjective: complex. Everyday: how complicated it is. Contrast: a complication = an extra problem.',
    ['complication']
  ),
  comply: L(
    'To comply is to obey a rule or request: comply with the safety rules. Follow and obey are everyday; abide by is a close formal cousin. Compliance is the noun (compliance with the policy). The pattern is comply with, never comply to. In speech, follow the rules is enough. The word is official — health and safety, contracts. It does not mean agree in your heart; you can comply and still disagree.',
    ['All staff must comply with the fire drill, including visitors.', 'They complied with the request for documents, then appealed the decision.'],
    'comply with + rule/request. Official. Everyday: follow / obey. Noun: compliance. Not “comply to”. Not the same as agreeing.',
    ['obey']
  ),
  component: L(
    'A component is one of the parts that make up a whole: a key component of the plan, electronic components. Part is everyday; element is a close formal cousin; ingredient is for recipes and, loosely, plans. In speech, part is almost always enough. Component sounds technical or analytical. Do not call a whole person a component of a team unless you mean a role in a system — it can sound cold.',
    ['Trust is a key component of the mentoring scheme, not an extra.', 'One faulty component stopped the printer; the rest of the machine was fine.'],
    'A part of a whole. Everyday: part. Close: element. Technical or analytical tone. Contrast: the whole / the system.',
    ['element']
  ),
  compose: L(
    'To compose is to write music or a text, or to make up the parts of something: compose a piece for piano, be composed of three sections. Write is everyday for text and music; make up is everyday for the parts sense. Compose yourself means calm down. A composer writes music. In speech, write or made up of is enough. Do not confuse it with comprise (the whole comprises the parts) or with compost (garden waste).',
    ['She composed a short fanfare for the opening of the hall.', 'The panel is composed of two teachers and one governor.'],
    'Write music/text, or be made up of. Everyday: write / made up of. composed of. Calm down: compose yourself. Contrast: comprise; compost.',
    ['write']
  ),
  composition: L(
    'A composition is a piece of writing or music, or the way parts are arranged: write a composition, the composition of the team, chemical composition. Essay is everyday for school writing; piece is looser for music. Compose is the verb. In older school English, composition meant a set essay; that use now sounds dated. In speech, essay / piece / mix is clearer. Do not use composition for any paragraph you happen to have written.',
    ['The students wrote a composition about a local journey, not a copied summary.', 'The composition of the committee changed after the election.'],
    'A piece of writing/music, or how parts are arranged. Verb: compose. Everyday: essay / piece / mix. School “composition” can sound dated.',
    ['essay']
  ),
  compound: L(
    'A compound is something made of two or more parts, especially a chemical or a word: a chemical compound, a compound noun such as classroom. Mix and mixture are everyday; combination is close. Compound is also a verb (compound the problem = make it worse) and an adjective (compound interest). A compound can also be a fenced area of buildings. In speech, combination or mix is enough unless you mean chemistry or word-formation. Keep the senses apart.',
    ['“Classroom” is a compound noun; the stress pattern is worth teaching.', 'A new compound was tested in the lab; delays only compounded the shortage.'],
    'Made of two or more parts (chemistry, words). Verb: make worse. Also: fenced site. Everyday: combination / mix.',
    ['combination']
  ),
  compromise: L(
    'A compromise is an agreement in which each side gives up something: reach a compromise, a compromise solution. Deal is everyday and looser; trade-off is close when you name what is lost. Compromise is also a verb (compromise on price; compromise your principles — risk them). In speech, meet in the middle is the picture. A compromise is not a win; do not sell a climb-down as a compromise if only one side moved.',
    ['They reached a compromise: shorter lessons, but an extra week of term.', 'She would not compromise on safety, even to keep the timetable pretty.'],
    'A middle-way agreement. Verb: compromise on. Everyday: meet in the middle. Close: trade-off. Also: put principles at risk.',
    ['trade-off']
  ),
  concede: L(
    'To concede is to admit that something is true, often unwillingly, or to accept defeat: concede that the plan was weaker, concede the match. Admit is everyday; grant is a close formal cousin (I grant you that). Concession is the noun (a concession in talks). In speech, admit or I take your point is enough. Concede is slightly formal and often reluctant. Do not use it for a cheerful confession of a small mistake — that is just admit.',
    ['She conceded that the first draft had missed the question.', 'With ten minutes left, they conceded the fixture and shook hands.'],
    'Admit unwillingly, or accept defeat. Everyday: admit. Noun: concession. Formal/reluctant. Also: concede a match/point.',
    ['admit']
  ),
  concentration: L(
    'Concentration is the ability to give all your attention to something, or the amount of a substance in a mixture: full concentration, a high concentration of salt. Attention is everyday for the first sense; focus is a close cousin. Concentrate is the verb. In science, concentration is a measured amount, not “trying hard.” In speech, focus or paying attention is enough. Do not mix the two senses in one sentence without a cue.',
    ['The listening test needs full concentration; phones stay in bags.', 'A high concentration of chlorine made the water smell of the pool.'],
    'Full attention, or amount of a substance. Verb: concentrate. Everyday: focus / attention. Science: measured amount in a mixture.',
    ['focus']
  ),
  concrete: L(
    'Concrete as an adjective means clear and specific, not abstract: a concrete example, concrete evidence. Specific and definite are everyday cousins; tangible is close when you can point to it. Concrete is also the building material (a concrete floor) — a different, physical sense. In speech, a real example is enough. Use the adjective for something you can instance, not for a vague “practical vibe.” Do not write concrete when you only mean the building material unless the context is construction.',
    ['Give me a concrete example from last week’s lesson, not a theory of “engagement.”', 'The new lab has a concrete floor; that is the material, not a synonym for “specific.”'],
    'Adjective: specific, not abstract. Everyday: specific / a real example. Also the building material (noun/adjective). Keep the senses apart.',
    ['specific']
  ),
  condemn: L(
    'To condemn is to say strongly that something is wrong: condemn the delay, widely condemned. Criticise is milder and everyday; denounce is a close, more public cousin. Condemnation is the noun. A building can be condemned (declared unfit); a court can condemn someone (sentence them) — legal senses. In speech, say it is wrong / slam it is blunter. Condemn is strong: save it for serious wrongs, not a disappointing sandwich.',
    ['The report condemned the delay as unfair to candidates.', 'Parents condemned the late notice, then offered to help rewrite the letters.'],
    'Say strongly that it is wrong. Noun: condemnation. Everyday: criticise (milder). Close: denounce. Also: unfit building; legal sentence.',
    ['denounce']
  ),
  conduct: L(
    'To conduct is to organise and carry out an activity: conduct a survey, conduct a meeting, conduct an orchestra. Carry out and hold are everyday; run is informal. Conduct is also a noun (behaviour: a code of conduct) with stress on the first syllable. In speech, carry out or run is enough. The verb is slightly official. Do not use conduct a conversation for a chat — it sounds like an experiment.',
    ['They conducted a survey of fifty students in the canteen, not online only.', 'She conducted the rehearsal with a pencil for a baton.'],
    'Carry out/organise (survey, meeting, orchestra). Everyday: carry out / hold / run. Noun: behaviour (code of conduct). Official tone.',
    ['carry out']
  ),
  confess: L(
    'To confess is to admit that you have done something wrong, or to tell a priest: confess that you had not prepared, confess to a crime. Admit is everyday and broader (you can admit a fact without guilt); own up is informal. Confession is the noun. In speech, admit it or own up is enough. Confess is stronger and more moral than admit. Do not confess that you like tea — unless you are being comic.',
    ['He confessed that he had submitted the wrong file.', 'Nobody confessed to leaving the lab unlocked; the camera did.'],
    'Admit a wrong. confess to + noun/ing. Everyday: admit / own up. Noun: confession. Stronger and more moral than admit.',
    ['admit']
  ),
  confidential: L(
    'Confidential means meant to be kept secret: confidential information, strictly confidential. Secret is everyday; private is about personal life, not always official secrecy. Confidentiality is the noun; in confidence means privately. In speech, keep this to yourself is enough. Marks, medical notes, and references are often confidential. Do not stamp confidential on a lunch menu and expect the word to still mean something.',
    ['Please keep the shortlist confidential until Friday’s announcement.', 'Confidential feedback went to the candidate, not onto the staffroom table.'],
    'Meant to be kept secret. Noun: confidentiality. Everyday: secret / keep it to yourself. Contrast: private (personal). in confidence.',
    ['secret']
  ),
  confront: L(
    'To confront is to face a difficult person or problem directly: confront the mistakes, confront someone about a rumour. Face is everyday; tackle is close for a problem; challenge can be a debate. Confrontation is the noun (a heated confrontation). In speech, face up to or have it out is blunter. Confront is direct and can sound aggressive. Do not use it for a polite email raising a small query.',
    ['We need to confront the gaps in the data before the inspection.', 'She confronted him about the missed duty, then listened to the reason.'],
    'Face a person or problem directly. confront someone about. Everyday: face up to. Noun: confrontation. Direct; can sound aggressive.',
    ['face']
  ),
  confusion: L(
    'Confusion is a state of not understanding, or of being mixed up: cause confusion, in confusion. Mix-up is informal; chaos is stronger (disorder, not only unclear thinking). Confuse is the verb; confusing and confused are adjectives (a confusing map; a confused student). In speech, a mix-up or nobody knew is enough. Confusion is the state; do not write “a confusion” for every small misunderstanding unless you mean one muddled episode.',
    ['The new timetable caused confusion: two groups arrived for the same room.', 'In the confusion after the alarm, registers were still completed outside.'],
    'A mixed-up, unclear state. Verb: confuse. Everyday: mix-up. Adjectives: confusing (it) / confused (you). Stronger: chaos.',
    ['mix-up']
  ),
  conscience: L(
    'Conscience is the inner sense of right and wrong: a guilty conscience, a matter of conscience. It is a noun. Guilt is the feeling after a wrong; morals is the broader system. In speech, I could not live with myself is the picture. Do not confuse conscience with conscious (adjective: awake or aware). A conscience pricks; you are conscious of a noise. The pair is a classic spelling trap.',
    ['His conscience would not let him mark work he had not read.', 'She voted with her conscience, not with the loudest group in the room.'],
    'Noun: inner sense of right and wrong. Everyday: I could not live with it. Contrast: conscious = aware/awake (adjective). Classic mix-up.',
    ['guilt']
  ),
  conscious: L(
    'Conscious means aware of something, or awake: conscious of the noise, a conscious decision (deliberate), still conscious after the fall. Aware is the everyday cousin for the first sense; awake is the medical opposite of unconscious. Consciousness is the noun. In speech, aware or awake is enough. Do not confuse it with conscience (noun: sense of right and wrong). You are conscious of a mistake; your conscience tells you to put it right.',
    ['She was conscious of people waiting, so she kept the announcement short.', 'He made a conscious choice to switch off notifications during revision.'],
    'Aware or awake; also deliberate (a conscious effort). Everyday: aware / awake. Noun: consciousness. Contrast: conscience = moral sense (noun).',
    ['aware']
  ),
  conservation: L(
    'Conservation is the protection of nature, buildings, or resources: wildlife conservation, energy conservation, conservation of a listed church. Protection is everyday; preservation is a close cousin, often of keeping something unchanged; saving is informal for energy. Conserve is the verb. In speech, protecting wildlife / saving energy is enough. Conservation is not conversation (talk) — a spelling trap — and not conservatism (a political outlook).',
    ['The park is important for wildlife conservation, not only for picnics.', 'Energy conservation started with shutting the lab windows, not a new slogan.'],
    'Protecting nature, buildings, or resources. Verb: conserve. Everyday: protection / saving. Close: preservation. Contrast: conversation; conservatism.',
    ['preservation']
  ),
  conservative: L(
    'Conservative means not liking sudden change, traditional, or careful with money or estimates: a conservative approach, a conservative estimate (cautious, probably low). Traditional is everyday for taste and custom; cautious is close for estimates. Conservative with a capital C can mean the British political party. Conservatism is the noun. In speech, cautious / traditional is enough. Do not use conservative as a lazy insult for anyone who disagrees with you.',
    ['The school took a conservative approach: trial one class before a whole-year change.', 'A conservative estimate of the cost still shocked the governors.'],
    'Traditional, or cautious (especially estimates). Everyday: traditional / cautious. Capital C: British party. Noun: conservatism. Not an all-purpose insult.',
    ['cautious']
  ),
  consist: L(
    'To consist is to be made of particular parts: consist of three parts. The pattern is consist of, not consist in for this meaning (consist in is rare and formal: “happiness consists in…”). Be made of / be made up of are everyday. Comprise is a close official cousin (the test comprises three parts). In speech, is made up of is enough. Consist is not a synonym for exist, and there is no “consists with.”',
    ['The test consists of three parts: listening, reading, and a short oral.', 'The kit consisted of a booklet, a CD, and a mark scheme nobody could find.'],
    'consist of + parts. Everyday: be made up of. Close: comprise. Rare: consist in = lie in. Not exist. No “consist with”.',
    ['comprise']
  ),
  construct: L(
    'To construct is to build something, or to form an idea or sentence: construct a bridge, construct an argument, construct a sentence. Build is everyday for physical things; form and put together are everyday for ideas. Construction is the noun; constructive criticism is helpful, not merely negative. In speech, build or put together is enough. Construct is slightly formal. Do not use it for stacking two books on a desk.',
    ['They constructed a footbridge while the main road was closed.', 'Construct a sentence with the new verb; then construct a counter-argument.'],
    'Build, or form an idea/sentence. Everyday: build / put together. Noun: construction. Related: constructive = helpful. Formal for physical building.',
    ['build']
  ),
  consultant: L(
    'A consultant is a person paid to give expert advice: a management consultant, a consultant in the hospital (a senior specialist in British hospitals). Adviser is everyday and broader; expert is the skill, not the job title. Consult is the verb (consult a lawyer). In speech, an outside expert or a specialist is often clearer. Do not call every helpful colleague a consultant — the word implies a paid, specialist role.',
    ['They hired a consultant to redesign the timetable, then ignored the report.', 'In British hospitals, a consultant is a senior doctor, not a visiting coach.'],
    'A paid expert adviser. Verb: consult. Everyday: adviser / specialist. British hospitals: senior doctor. Not any helpful colleague.',
    ['adviser']
  ),
  consumption: L(
    'Consumption is the act of using fuel, food, or goods: energy consumption, consumption of sugar. Use is everyday; intake is close for food and drink. Consume is the verb. Consumer is the person who buys. In older English, consumption was also tuberculosis — you will meet that in literature, not in energy reports. In speech, how much we use is enough. Consumption is a measured total, not a synonym for shopping as a hobby.',
    ['Energy consumption rose in the cold snap, even with the new boilers.', 'Cut the consumption of single-use plastic in the canteen, not only in the policy.'],
    'How much is used (fuel, food, goods). Verb: consume. Everyday: use / intake (food). Related: consumer. Literature: old word for TB.',
    ['use']
  ),
  contaminate: L(
    'To contaminate is to make something dirty or unsafe by adding a harmful substance: contaminate the river, contaminated food. Pollute is close, often for air and water on a large scale; poison is stronger and more everyday; taint can be slight or metaphorical. Contamination is the noun. In speech, make it unsafe / pollute is enough. Contaminate is used in science, food safety, and labs. Do not use it for a mildly unpopular idea unless you mean a real stain on evidence.',
    ['The river was contaminated by runoff from the works.', 'One dirty pipette can contaminate a whole set of samples.'],
    'Make dirty or unsafe with a harmful substance. Noun: contamination. Everyday: pollute / poison. Science, food, water. Not a vague “spoil an idea” unless metaphorical on purpose.',
    ['pollute']
  ),
  contemplate: L(
    'To contemplate is to think about something carefully, often for a long time: contemplate a change of career, contemplate the view. Think about is everyday; consider is a close cousin, often shorter; meditate is more spiritual. Contemplation is the noun. In speech, think it over is enough. Contemplate can also mean look at thoughtfully. It is slightly formal. Do not use it for a two-second choice of sandwich.',
    ['She contemplated a change of career through a whole winter of evening classes.', 'He sat on the wall and contemplated the river, then went back to the marking.'],
    'Think over carefully; also look at thoughtfully. Everyday: think over / consider. Noun: contemplation. Formal; not a snap decision.',
    ['consider']
  ),
  content: L(
    'Content as a noun (/ˈkɒntent/) is the ideas or information in a book, film, or course: the content of the lesson, table of contents (the list at the front). Material and subject matter are close; stuff is informal. The adjective content (/kənˈtent/) means satisfied — a different word in stress and meaning. In speech, what is in it is enough for the noun. Do not mix the pair: you can be content with the content, but they are not the same word.',
    ['The content of the module was clear; the contents page was not.', 'She was content with a pass; that adjective is not the course material.'],
    'Noun (stress on first syllable): what is inside a text/course. contents = list or things inside. Adjective content (stress on second) = satisfied. Keep them apart.',
    ['material']
  ),
  continent: L(
    'A continent is one of the large land masses of the earth, such as Asia, Africa, or Europe. Mainland is the opposite of islands, not a synonym; landmass is a close technical cousin. Continental is the adjective (continental climate; in Britain, the Continent can mean mainland Europe). In speech, the huge land mass is the idea. Do not use continent for a country, and do not confuse it with content (what is inside a book) or incontinent (a medical word).',
    ['Europe is a continent; France is a country on it.', 'From Britain, “the Continent” often means mainland Europe, not Australia.'],
    'A huge land mass (Asia, Africa, Europe…). Adjective: continental. British: the Continent ≈ mainland Europe. Contrast: country; content; incontinent.',
    ['landmass']
  ),
  continuous: L(
    'Continuous means going on without a break: a continuous noise, continuous assessment. Constant is a close cousin (happening a lot, or not changing); continual often means repeated with pauses (continual interruptions). In grammar, the continuous aspect is be + -ing. Continuously is the adverb. In speech, non-stop or without a break is enough. In careful English, keep continuous (unbroken) distinct from continual (recurring).',
    ['There was a continuous hum from the projector through the whole film.', 'Continuous assessment replaced one brutal exam, but the workload never paused.'],
    'Without a break. Everyday: non-stop. Close: constant. Contrast: continual = repeated with gaps. Grammar: continuous aspect (be + -ing).',
    ['constant']
  ),
  contradiction: L(
    'A contradiction is a difference between two facts or statements that cannot both be true: a contradiction in the reports, in contradiction to. Conflict is broader (a clash); inconsistency is a close cousin; paradox is a seeming contradiction with a twist. Contradict is the verb. In speech, they cannot both be right is enough. A contradiction is logical, not merely a disagreement of taste. Do not call two different preferences a contradiction.',
    ['There is a contradiction in the two reports: one says the room was free, the other booked.', 'Her calm advice stood in contradiction to the panic in the group chat.'],
    'Two claims that cannot both be true. Verb: contradict. Everyday: they cannot both be right. Close: inconsistency. Contrast: disagreement of taste; paradox.',
    ['inconsistency']
  ),
  contrary: L(
    'Contrary means opposite in nature or meaning: contrary to popular belief, on the contrary. Opposite is everyday; opposing is close for sides in an argument. On the contrary corrects a claim (“You look tired.” — “On the contrary, I slept well.”). To the contrary means to the opposite effect. In speech, the opposite or no, the opposite is true is enough. Do not use on the contrary as a fancy however in the middle of a story — it answers a previous claim.',
    ['On the contrary, the results were better than the mock exams.', 'Contrary to the rumour, the library stayed open through the holidays.'],
    'Opposite. on the contrary = that claim is wrong. contrary to + noun. Everyday: the opposite. Not a lazy “however”.',
    ['opposite']
  ),
  controversial: L(
    'Controversial means causing public disagreement: a controversial rule, a controversial film. Disputed is close; divisive stresses that it splits people; sensitive means it needs careful handling. Controversy is the noun (British stress often on the second syllable in careful speech, though both are heard). In speech, it caused a row or people disagreed is enough. Controversial is not a synonym for interesting — save it for real public argument.',
    ['The new uniform rule was controversial; a petition followed within a day.', 'She chose a controversial example on purpose, then had to defend the choice.'],
    'Causing public disagreement. Noun: controversy. Everyday: it caused a row. Close: disputed / divisive. Not merely “interesting”.',
    ['divisive']
  ),
  conversion: L(
    'A conversion is the act of changing from one form, use, or belief to another: conversion of a factory into flats, currency conversion, a conversion to a new method. Change is everyday and broader; transformation is stronger. Convert is the verb (convert into / to). In speech, turning X into Y is enough. Conversion can also mean a change of religion. Do not use it for a tiny tweak of wording — that is an edit, not a conversion.',
    ['The conversion of the mill into studios took a year and a pile of listed-building forms.', 'Currency conversion ate a chunk of the trip budget at the airport desk.'],
    'A change of form, use, or belief. Verb: convert into / to. Everyday: turning X into Y. Also: change of religion. Not a tiny edit.',
    ['transformation']
  ),
  conviction: L(
    'A conviction is a strong belief, or a court’s decision that someone is guilty: speak with conviction, a previous conviction. Belief is everyday for the first sense; certainty is close; guilty verdict is the legal paraphrase. Convict is the verb (legal) and also a noun for a person found guilty. In speech, a strong belief or found guilty is enough. Keep the two senses apart: a conviction about fairness is not a criminal record.',
    ['She spoke with conviction, then showed the figures that justified it.', 'A spent conviction still had to be declared for that post; the other sense is belief, not the court.'],
    'Strong belief, or a guilty verdict. Everyday: strong belief / found guilty. Verb/noun (law): convict. Keep moral certainty distinct from a criminal record.',
    ['belief']
  ),
  cooperation: L(
    'Cooperation is the act of working together towards a shared goal: cooperation between teams, thank you for your cooperation (official). Help is everyday; teamwork is close; collaboration stresses a joint product. Cooperate is the verb (British also co-operate). In speech, working together / help is enough. Official letters love “your cooperation.” Cooperation is not the same as obedience: people can cooperate as equals. British spelling: cooperation or co-operation.',
    ['The project needs cooperation between science and PE, not two rival rotas.', 'Thank you for your cooperation during the fire drill — official, but they meant “please move.”'],
    'Working together towards a goal. Verb: cooperate. Everyday: help / teamwork. Close: collaboration (joint product). Official tone common. British: cooperation / co-operation.',
    ['teamwork']
  ),
  coordinate: L(
    'To coordinate is to organise people or parts so that they work well together: coordinate the trip, coordinate with another school. Organise is everyday and broader; arrange is close for events; liaise is a close workplace cousin. Coordination is the noun; a coordinator is the person. Coordinates are also map references (noun). In speech, organise so it fits / line it up is enough. Do not use coordinate as a fancy synonym for email everyone once.',
    ['She coordinated the school trip: coaches, permission slips, and a wet-weather plan.', 'The two labs coordinated their bookings so the technician was not in two places.'],
    'Organise so parts work together. coordinate with. Noun: coordination; person: coordinator. Everyday: organise / line up. Also (noun): map coordinates.',
    ['organise']
  ),
}
