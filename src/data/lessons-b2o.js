const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2O = {
  particular: L(
    'Particular means specific, or fussy about detail: a particular clause; particular about timing. Special is warmer; specific is the academic twin. In particular = especially. Mix-up: particle is a tiny piece (science). Do not write “in particularly”.',
    ['Name the particular clause you are quoting in the source booklet.', 'She is particular about start times, which is the fussy-about-detail sense.'],
    'a particular + noun; in particular; particular about. Close: specific. Formal essays and briefs. Trap: particle. Not “in particularly”.',
    ['specific']
  ),
  particularly: L(
    'Particularly means especially, more than usual: particularly strict; particularly in May. Especially is the everyday twin; specially is for a purpose (a specially designed ramp). Use it to rank emphasis, not as a filler. Do not pair it with in particular in the same clause.',
    ['The examiner was particularly strict on bibliography format.', 'Absences rose particularly in Year 11, which is the “more than elsewhere” sense.'],
    'particularly + adjective / in + group. Everyday: especially. Trap: specially (for a purpose). Evaluations and news. Emphasis, not a sentence starter every time.',
    ['especially']
  ),
  philosopher: L(
    'A philosopher studies existence, knowledge, or ethics: an ancient philosopher; a moral philosopher. Thinker is wider; academic is a job rank. Name the philosopher the extract answers. Mix-up: philosophy is the subject (next entry). Do not call every opinionated columnist a philosopher.',
    ['The paper asked which philosopher the extract was answering.', 'A public philosopher wrote the op-ed, which is the media sense.'],
    'a moral / political philosopher; the philosopher argues. Wider: thinker. Subject: philosophy. RS and history of ideas. Countable.',
    ['thinker']
  ),
  philosophy: L(
    'Philosophy is the study of ideas, or a set of working beliefs: moral philosophy; a design philosophy. Theory is narrower; policy is what an institution actually does. Do not treat a behaviour policy as a philosophy essay. Uncountable for the subject; a philosophy of… for a stance.',
    ['Do not treat the school’s behaviour policy as a philosophy essay.', 'The lab’s philosophy of open data is a stance, which is the workplace sense.'],
    'moral / political philosophy; a philosophy of + noun. Stance: a philosophy. Subject is uncountable. RS and design briefs. Not a synonym of policy.',
    []
  ),
  phrase: L(
    'A phrase is a small group of words, or a way of putting something: a noun phrase; a set phrase. Clause has a verb; idiom has a non-literal meaning (already elsewhere). Underline the noun phrase, not the whole sentence. Verb: phrase a question. Do not call a full paragraph a phrase.',
    ['Underline the noun phrase, not the whole sentence, the grammar item said.', 'Phrase the complaint formally, which is the verb sense.'],
    'a noun / verb / set phrase; phrase a question. Bigger unit: clause. Set meaning: idiom. Grammar papers and emails. Group of words, not a paragraph.',
    []
  ),
  physics: L(
    'Physics is the science of matter, energy, and forces (usually uncountable): a physics practical; particle physics. Physical is the adjective for the body or real world (already in the dictionary). The practical needs error bars. Mix-up: physique is body shape. Do not write “a physics” for one lesson.',
    ['The physics practical needs the error bars, not just a neat graph.', 'Particle physics is a topic, which is the field-name sense.'],
    'a physics paper / practical; particle / nuclear physics. Uncountable as a subject. Adjective: physical. Trap: physique. Sciences. Not “a physics”.',
    []
  ),
  pioneer: L(
    'A pioneer is an early leader in a field: a pioneer of comprehensive schooling; space pioneers. Founder started an organisation; innovator is wider. As a verb: pioneer a method. She was a pioneer of the borough’s comprehensives. Do not call a late adopter a pioneer.',
    ['She was a pioneer of comprehensive schooling in the borough.', 'The lab pioneered the swab test, which is the verb sense.'],
    'a pioneer of + field; pioneer a method. Close: founder / innovator. News, history, and science. First in the field, not merely successful.',
    ['innovator']
  ),
  pitch: L(
    'Pitch is how high a sound is, a sports field, or a persuasive talk: keep your pitch; a football pitch; a sales pitch. Tone is wider for attitude. Keep your pitch steady in the oral. Verb: pitch an idea. Do not use pitch for a whole concert hall.',
    ['Keep your pitch steady in the oral; do not shout the last line.', 'The sales pitch overclaimed the sample, which is the persuasion sense.'],
    'keep / raise your pitch; a sports pitch; a sales / elevator pitch. Verb: pitch. Orals, sport, and business. Height of sound, field, or sell — not all three at once.',
    []
  ),
  plot: L(
    'Plot is the events of a story, a secret plan, or a piece of land: summarise the plot; a plot to leak papers; a garden plot. Story is wider; conspiracy is stronger for the secret-plan sense. Save analysis for after the plot summary. Mix-up: plaque is a commemorative plate.',
    ['Summarise the plot in one paragraph; save analysis for the next.', 'Police foiled a plot to leak the paper, which is the conspiracy sense.'],
    'the plot of a novel; a plot to + verb; a building plot. Wider: story. Literature, crime news, and planning. Events, not themes.',
    ['story']
  ),
  poetry: L(
    'Poetry is poems as a form (usually uncountable): war poetry; a poetry anthology. A poem is one text (already elsewhere); verse can mean poetry or a stanza. Comment on the poetry’s imagery. Mix-up: pottery is ceramics. Do not write “a poetry” for one poem.',
    ['Comment on the poetry’s imagery, not only on the poet’s life.', 'Performance poetry featured in the spoken-word workshop, which is the live sense.'],
    'war / lyric / performance poetry; a poetry anthology. Uncountable. One text: a poem. Trap: pottery. Literature papers. Form, not a single title.',
    []
  ),
  political: L(
    'Political means connected with government, parties, or power: a political broadcast; political will. Politician is the person (already in the dictionary); politics is the activity. A party political broadcast is not a neutral NEA source. Do not call every disagreement political without evidence.',
    ['A political broadcast is not a neutral source for the history NEA.', 'The strike became political once ministers intervened, which is the power sense.'],
    'a political + noun; politically motivated. Person: politician. Activity: politics. News, history, and source evaluation. Power and parties, not “any argument”.',
    []
  ),
  pollution: L(
    'Pollution is harmful waste in air, water, or land (often uncountable): river pollution; light pollution. Litter is visible rubbish; contamination often implies toxins in food or water. Graph pollution downstream of the mill. Mix-up: population is people (already elsewhere).',
    ['The geography paper graphs river pollution downstream of the mill.', 'Light pollution spoiled the astronomy fieldwork, which is the night-sky sense.'],
    'air / water / light / noise pollution. Uncountable in most exam uses. Close: contamination. Geography and environment. Harmful substances, not a crowd.',
    []
  ),
  popularity: L(
    'Popularity is being liked by many people: rising popularity; popularity with voters. Popular is the adjective (already in the dictionary). Do not confuse social-media popularity with a representative sample. Uncountable. Mix-up: population is how many people live there.',
    ['Do not confuse popularity on social media with a representative sample.', 'The mayor’s popularity fell after the bin strikes, which is the polling sense.'],
    'popularity with / among; gain / lose popularity. Adjective: popular. Uncountable. Methods and politics. Being liked, not being numerous.',
    []
  ),
  portrait: L(
    'A portrait is a picture or written description of a person: a oil portrait; a written portrait. Landscape is the scene format; photograph is any photo (photographer is already in the dictionary). Compare the portrait with the memoir. Mix-up: portray is the verb (already elsewhere).',
    ['Compare the portrait with the written memoir in the source booklet.', 'The profile was a portrait of the head, which is the prose sense.'],
    'a painted / photographic / written portrait; sit for a portrait. Verb: portray. Art and English papers. Picture of a person, not any landscape shot.',
    []
  ),
  position: L(
    'Position is a place, a job, or a stance: a defensive position; apply for a position; state your position. Location is physical place; opinion is the everyday stance word. State your position in the introduction. Verb: position the camera. Do not use position for a quick mood.',
    ['State your position in the introduction, then evidence it.', 'She applied for a pastoral position, which is the job sense.'],
    'state / take a position; a job position; in position. Everyday (view): opinion. Essays, HR, and sport. Place, post, or argument — specify which.',
    ['stance']
  ),
  possess: L(
    'To possess is to have or own, or to have a quality: possess a reader; possess the skills. Have is everyday; own stresses legal ownership. Candidates who possess a reader still sit the same paper. Formal register. Noun: possession. Do not use possess for a brief borrow.',
    ['Candidates who possess a reader must still sit the same paper.', 'The sample did not possess enough power, which is the quality sense.'],
    'possess + noun / a quality. Everyday: have. Legal: own. Noun: possession. Formal exam and legal English. Having, not borrowing.',
    ['have']
  ),
  possession: L(
    'Possession is the fact of having something, or a thing you own: in possession of; a banned possession. Belongings is the everyday plural. Phones are a banned possession in the hall. Law: possession of drugs. Mix-up: position is a place or stance.',
    ['Mobile phones in the hall are a banned possession during the paper.', 'In possession of the keys, she opened the store, which is the “having” sense.'],
    'in possession of; a personal / banned possession. Everyday: belongings. Law and exam halls. Trap: position. Having something, not a job title.',
    ['belongings']
  ),
  possibility: L(
    'A possibility is something that might happen or be true: a real possibility; the possibility of a clash. Chance is everyday; probability is more mathematical. There is a possibility of a clash. Opposite: impossibility. Do not treat a possibility as a finding.',
    ['There is a possibility of a clash; check both timetables tonight.', 'The possibility that the sensor failed needs a test, which is the hypothesis sense.'],
    'a possibility of + noun; there is a possibility that. Everyday: chance. Maths: probability. Planning and methods. Might, not did.',
    ['chance']
  ),
  possibly: L(
    'Possibly means perhaps: possibly caused by; could possibly. Maybe is informal; probably is stronger (already in the dictionary). The outage was possibly caused by firmware. Use it to hedge, then give evidence. Do not stack possibly with perhaps.',
    ['The outage was possibly caused by a firmware update, the trust said.', 'Could you possibly extend the deadline, which is the polite request.'],
    'possibly + verb / adjective; could possibly. Informal: maybe. Stronger: probably. News hedges and polite requests. Uncertain, not likely.',
    ['perhaps']
  ),
  powerful: L(
    'Powerful means having great strength, influence, or effect: a powerful lobby; a powerful argument. Strong is everyday; influential is the people-sense twin. A powerful lobby delayed the zone. Power is the noun (already elsewhere). Do not call a mildly useful app powerful.',
    ['A powerful lobby delayed the clean-air zone, the local paper claimed.', 'A powerful magnet featured in the physics practical, which is the force sense.'],
    'a powerful + noun; powerfully. Everyday: strong. People: influential. Noun: power. News, essays, and science. Extreme strength or influence.',
    ['influential']
  ),
  practical: L(
    'Practical means hands-on or sensible, and as a noun a assessed experiment: a practical solution; the chemistry practical. Theoretical is the opposite for ideas. The practical is a separate grade. Mix-up: practice is the noun for training (UK). Do not call a daydream practical.',
    ['The chemistry practical is a separate grade, the specification warns.', 'A practical timetable beat an elegant one that needed four rooms, which is the sensible sense.'],
    'a practical + noun; the science practical. Opposite (ideas): theoretical. Trap: practice / practise. Sciences and planning. Hands-on or workable.',
    []
  ),
  practice: L(
    'Practice is the UK noun: training, or the usual method: best practice; a medical practice. The verb is practise (already in the dictionary). Best practice is to seal the pack. US spelling uses practice for both. Mix-up: practical is an adjective or a science assessment.',
    ['Best practice is to seal the pack before candidates leave.', 'She opened a dental practice, which is the workplace sense.'],
    'best / common practice; in practice; a legal / medical practice. UK verb: practise. US: practice for both. Policies and training. Noun, not the verb.',
    []
  ),
  preference: L(
    'A preference is liking one option more: a stated preference; preference for the morning paper. Prefer is the verb (already in the dictionary). State a preference if you have a clash. Formal questionnaires use preference over like. Do not treat a preference as a requirement.',
    ['State a preference for the morning paper if you have a clash.', 'Revealed preference featured in the economics case, which is the theory sense.'],
    'a preference for; in order of preference. Verb: prefer. Surveys, exams, and economics. A liking, not a rule.',
    []
  ),
  preparation: L(
    'Preparation is the work of getting ready (often uncountable): exam preparation; in preparation for. Prepare is the verb (already in the dictionary). Oral preparation time is timed. A preparation can mean a medical mixture. Mix-up: preparation is not the same as the exam itself.',
    ['Preparation time for the oral is timed; notes stay in the room.', 'In preparation for the inspection, corridors were cleared, which is the planning sense.'],
    'in preparation for; exam / food preparation. Verb: prepare. Uncountable in most school uses. Orals and inspections. Getting ready, not the event.',
    []
  ),
  presence: L(
    'Presence is being there, or a noticeable manner: in the presence of; stage presence. Absence is the opposite. The presence of a reader must be logged. Mix-up: presents are gifts; present is now or a gift (already in the dictionary). Do not write “a presence of” for a crowd count.',
    ['The presence of a reader must be logged on the attendance register.', 'The speaker’s presence held the hall, which is the manner sense.'],
    'in the presence of; someone’s presence. Opposite: absence. Trap: present / presents. Registers, law, and performance. Being there, not a gift.',
    []
  ),
  presentation: L(
    'A presentation is a talk, the look of work, or a formal handing-over: a slide presentation; marks for presentation. Present is the verb. Marks for presentation are not analysis marks. Mix-up: representation is acting for a group (related entry later). Do not call a chat a presentation.',
    ['Marks for presentation are not marks for analysis, the rubric said.', 'The presentation of the prize was filmed, which is the ceremony sense.'],
    'give / deliver a presentation; marks for presentation. Verb: present. Rubrics, orals, and ceremonies. Talk or appearance, not the argument itself.',
    []
  ),
  preserve: L(
    'To preserve is to keep something undamaged or unchanged: preserve scripts; preserve a habitat. Save is everyday; conserve often means using less. The trust must preserve scripts until the enquiry window closes. Noun: a preserve (jam) or a wildlife preserve. Do not use preserve for a quick photocopy.',
    ['The trust must preserve scripts until the enquiry window closes.', 'Salt was used to preserve the sample, which is the science sense.'],
    'preserve evidence / a building / a species. Everyday: save. Close: conserve. Noun: preservation. Archives, ecology, and food science. Keep as it is.',
    ['conserve']
  ),
  president: L(
    'A president is the elected head of a republic, or of a club or company: the union president; a former president. Prime minister heads a parliamentary government; chair is smaller. The SU president issued a statement. Mix-up: precedent is a previous legal case (already elsewhere).',
    ['The student union president issued a statement on the rent strike.', 'The company president resigned after the accounts restatement, which is the corporate sense.'],
    'the president of; President + name (title). Contrast: prime minister. Trap: precedent. Politics, unions, and firms. Head of a republic or organisation.',
    []
  ),
  previously: L(
    'Previously means before the time you are talking about: previously used paper logs; previously unknown. Previous is the adjective (already in the dictionary). The centre had previously used paper logs. Formal than before. Do not pair previously with ago (“previously two years ago”).',
    ['The centre had previously used paper logs; the portal is new this series.', 'A previously unpublished letter featured in the anthology, which is the archive sense.'],
    'previously + verb / adjective. Adjective: previous. Everyday: before / used to. Methods, news, and archives. Before that, not “ago” twice.',
    ['before']
  ),
  primary: L(
    'Primary means most important, or to do with first-stage school: the primary source; a primary school. Main is everyday; principal (already elsewhere) is a trap for “main”. The primary source is the diary. Mix-up: prime is a similar adjective (prime minister). Do not call a textbook a primary source.',
    ['The primary source is the diary, not the textbook summary.', 'Primary pupils used the hall after lunch, which is the school-stage sense.'],
    'the primary + noun; primary school / care / source. Everyday: main. Trap: principal / prime. History, health, and education. First or most important.',
    ['main']
  ),
  prison: L(
    'A prison is a place of punishment after a sentence: in prison; a prison overcrowding crisis. Jail is close (often shorter-term in US usage); custody is the legal state. The case study compared prison overcrowding. Mix-up: poison is a toxin. Do not write “the prison” for a police cell before trial unless the source does.',
    ['The sociology case study compared prison overcrowding across regions.', 'He was released from prison on licence, which is the sentence sense.'],
    'in prison; a prison sentence / officer. Close: jail. Legal state: custody. Sociology and news. After sentence, not every detention.',
    ['jail']
  ),
  privacy: L(
    'Privacy is freedom from being watched or from others seeing your information: privacy notices; a right to privacy. Private is the adjective (already in the dictionary). Notices must cover how orals are stored. Mix-up: piracy is illegal copying. Uncountable. Do not confuse privacy with secrecy about public money.',
    ['Privacy notices must cover how oral recordings are stored.', 'A privacy screen hid the candidate number, which is the exam-hall sense.'],
    'a right to privacy; privacy notice / settings. Adjective: private. Uncountable. GDPR, safeguarding, and exam halls. Unseen personal data, not “keeping a scandal quiet”.',
    []
  ),
  producer: L(
    'A producer makes a film, programme, or goods: name the producer; a food producer. Director shapes the artistic side of a film; manufacturer is the factory twin. Name the producer in the bibliography. Mix-up: product is the thing made (already elsewhere). Do not credit the producer as the author of a novel.',
    ['Name the producer as well as the director in the film studies bibliography.', 'Dairy producers faced a price freeze, which is the agriculture sense.'],
    'a film / executive producer; a food producer. Contrast: director. Factory: manufacturer. Film studies and economics. Maker of a show or goods.',
    []
  ),
  production: L(
    'Production is making goods or a show, or a particular staging: steel production; a school production of Hamlet. Produce is the verb (already in the dictionary). Steel production fell after the outage. Uncountable for industry; a production for a staging. Mix-up: productivity is output per worker (already elsewhere).',
    ['Steel production fell after the furnace outage, the business paper said.', 'The school production of Hamlet sold out, which is the theatre sense.'],
    'in production; a theatre production; mass production. Verb: produce. Trap: productivity. Business and drama. Process or staging, not a single product on a shelf.',
    []
  ),
  professor: L(
    'A professor is a senior university academic (UK rank): a professor of law; Professor Khan. Teacher is school-level; lecturer is a common UK university post below professor. Cite the professor’s paper. Mix-up: professional is about doing a job for money (already elsewhere). Do not call a school head a professor.',
    ['Cite the professor’s paper, not a student’s blog, for the literature review.', 'She was appointed professor of public health, which is the rank sense.'],
    'Professor + surname; a professor of + subject. School: teacher. UK university: lecturer then professor. Citations and news. Rank, not any university teacher.',
    []
  ),
  profit: L(
    'Profit is money left after costs: make a profit; profit margins. Turnover is total sales; revenue is income (already in the dictionary). Do not report turnover as profit. Verb: profit from. Loss is the opposite. Mix-up: prophet is a religious messenger.',
    ['Do not report turnover as profit in the accounts question.', 'They profited from the shortage, which is the verb sense.'],
    'make / report a profit; profit from. Contrast: turnover / revenue. Opposite: loss. Trap: prophet. Accounts papers. What is left after costs.',
    []
  ),
  programme: L(
    'A programme is a planned series of events, broadcasts, or study (UK): a catch-up programme; a TV programme. Program is the US spelling and the usual computing word in UK English too. The catch-up programme starts after half-term. Mix-up: pogrom is a violent massacre (C2 elsewhere). Do not write programme for a short code file.',
    ['The catch-up programme starts after the May half-term, the trust said.', 'A computer program crashed the portal, which is the computing spelling.'],
    'a TV / training / degree programme (UK). Computing: program. US: program for both. Education and broadcasting. Planned series, not a single lesson.',
    []
  ),
  promotion: L(
    'Promotion is a better job, or advertising: promotion to head of year; a sales promotion. Promote is the verb (already in the dictionary). Promotion is not automatic after five years. Mix-up: motion is movement. Do not call a lateral move a promotion.',
    ['Promotion to head of year is not automatic after five years, HR wrote.', 'A two-for-one promotion featured in the business case, which is the marketing sense.'],
    'promotion to + job; a sales / health promotion. Verb: promote. HR and marketing. Upgrade or advertising, not any change of desk.',
    []
  ),
  pronunciation: L(
    'Pronunciation is how a word is spoken: pronunciation marks; a pronunciation guide. Pronounce is the verb. Marks for pronunciation are separate from grammar. Mix-up: punctuation is commas and full stops. Spell it -nun-, not “pronounciation”.',
    ['Pronunciation marks in the oral are separate from grammar, the board said.', 'A pronunciation guide sat beside the IPA, which is the reference sense.'],
    'pronunciation of + word; a pronunciation error. Verb: pronounce. Trap: punctuation / “pronounciation”. Orals and dictionaries. Sound, not spelling marks.',
    []
  ),
  proof: L(
    'Proof is evidence that something is true, or a trial print: proof of posting; a proof copy. Evidence is wider; prove is the verb (already in the dictionary). A cropped screenshot is not proof. Mix-up: proof as “resistant” in waterproof. Do not treat a rumour as proof.',
    ['A screenshot is not proof of posting if the timestamp is cropped.', 'The poet marked the proof copy, which is the printing sense.'],
    'proof of + noun; proof that. Verb: prove. Wider: evidence. Printing: a proof. Malpractice and science. Evidence, not a guess.',
    ['evidence']
  ),
  proper: L(
    'Proper means correct, suitable, or real: a proper citation; a proper meal. Correct is plainer; real contrasts with fake. Use a proper citation, not a dumped URL. Mix-up: property is buildings or belongings. Informal UK: a proper go. Do not use proper as a vague intensifier in essays.',
    ['Use a proper citation, not a URL dumped in a footnote.', 'She wanted a proper investigation, which is the “real, not token” sense.'],
    'a proper + noun; properly (adverb). Close: correct / genuine. Trap: property. Rubrics and news. Suitable or real, not “very”.',
    ['correct']
  ),
  properly: L(
    'Properly means in a correct or thorough way: properly sealed; not working properly. Correctly is close; thoroughly stresses completeness. Scripts were not properly sealed. Adjective: proper. Do not use properly as a filler (“I properly think”).',
    ['Scripts were not properly sealed, so the pack was voided.', 'The printer is not working properly, which is the “as it should” sense.'],
    'properly + verb; not working properly. Adjective: proper. Close: correctly / thoroughly. Notices and tech reports. The right way, not a hedge.',
    ['correctly']
  ),
  property: L(
    'Property is owned land or buildings, a belonging, or a scientific quality: school property; a chemical property. Possession is the legal “having”; belongings is everyday stuff. Asset-tag school property before the audit. Mix-up: properly is the adverb. Uncountable for land as a whole; a property for one building.',
    ['School property must be asset-tagged before the audit, the bursar said.', 'Solubility is a property of the salt, which is the science sense.'],
    'private / intellectual property; a chemical property. Everyday: belongings. Trap: properly. Audits, law, and science. Buildings, stuff, or a quality.',
    []
  ),
  prospect: L(
    'A prospect is a likely future, or a possible customer or candidate: the prospect of a resit; a job prospect. Prospective is the adjective (already in the dictionary). The prospect of a November resit changed her plan. Mix-up: perspective is a viewpoint (already elsewhere). Do not call a fantasy a prospect.',
    ['The prospect of a resit in November changed her revision plan.', 'Sales staff logged each prospect, which is the customer sense.'],
    'the prospect of + noun; job / career prospects. Adjective: prospective. Trap: perspective. Planning and sales. A realistic possible future.',
    []
  ),
  protection: L(
    'Protection is keeping someone or something safe: child protection; protection from flooding. Protect is the verb (already in the dictionary). Referrals go to the designated lead. Mix-up: protest is a demonstration (already elsewhere). Uncountable in policy English. Do not call a lucky charm protection in coursework.',
    ['Child-protection referrals go to the designated lead, not the group chat.', 'Flood protection featured in the geography decision-making paper, which is the engineering sense.'],
    'protection from / against; child / data / flood protection. Verb: protect. Trap: protest. Safeguarding and geography. The act of keeping safe.',
    []
  ),
  publication: L(
    'A publication is a published work, or the act of publishing: year of publication; a government publication. Publish is the verb (already in the dictionary). Give the year in every Harvard reference. Uncountable for the act; a publication for one title. Mix-up: publicity is advertising (next entries).',
    ['Give the year of publication in every Harvard reference.', 'Publication was delayed by the embargo, which is the act sense.'],
    'date / year of publication; a scientific publication. Verb: publish. Contrast: publicity. Bibliographies and news. The work or the act of issuing it.',
    []
  ),
  publisher: L(
    'A publisher issues books, journals, or software: name the publisher; a major publisher. Author writes; printer manufactures copies (already elsewhere). Name the publisher on the bibliography line. Mix-up: publican runs a pub. Do not list Amazon as publisher unless it is the imprint.',
    ['Name the publisher, not only the author, on the bibliography line.', 'The software publisher patched the portal, which is the computing sense.'],
    'a book / academic publisher; published by. Contrast: author / printer. Trap: publican. Harvard references. The company that issues the work.',
    []
  ),
  purely: L(
    'Purely means only, for no other reason: purely observational; purely coincidental. Only is everyday; solely is a formal twin. The visit was purely observational. Mix-up: pure is the adjective (pure water). Do not use purely to mean “very” (“purely huge”).',
    ['The visit was purely observational; no interviews were recorded.', 'The overlap was purely coincidental, which is the “no other cause” sense.'],
    'purely + adjective / for + noun. Everyday: only. Formal: solely. Methods and legal hedges. Sole reason, not an intensifier.',
    ['only']
  ),
  pursue: L(
    'To pursue is to follow a plan, career, or question, or to chase: pursue an EPQ; pursue a claim. Follow is everyday; chase is more physical. She will pursue an EPQ after the mocks. Noun: pursuit. Mix-up: persuade is to convince (already elsewhere). Do not use pursue for a casual hobby you barely start.',
    ['She will pursue an EPQ on housing after the mocks.', 'Officers pursued the leaked van, which is the chase sense.'],
    'pursue a career / claim / question. Everyday: follow. Noun: pursuit. Trap: persuade. Applications, law, and news. Go after with intent.',
    ['follow']
  ),
  racial: L(
    'Racial means connected with race or relations between racial groups: racial discrimination; racial inequality. Racist describes a person or act that shows racism (next entries). Discrimination is a reportable incident. Formal data and law. Do not use racial as a slur, and do not confuse it with cultural.',
    ['Racial discrimination is a reportable incident, the safeguarding policy said.', 'The census table used racial categories, which is the classification sense.'],
    'racial discrimination / inequality / group. Person/act: racist. Noun: racism. Safeguarding, sociology, and news. About race as a category, not an insult.',
    []
  ),
  racism: L(
    'Racism is unfair treatment, or a belief in racial superiority: structural racism; challenge racism. Racist is the adjective/noun for a person or remark. The assembly named racism in housing data. Uncountable. Mix-up: race as a contest (already in the dictionary). Do not reduce racism to one insult if the source is about systems.',
    ['The assembly named racism in housing data, not only in insults.', 'A racism complaint went to the designated lead, which is the procedure sense.'],
    'structural / casual racism; racism in + domain. Adjective/noun: racist. Uncountable. PHSE, sociology, and news. Prejudice or systems, not a sports race.',
    []
  ),
  radiation: L(
    'Radiation is energy travelling as waves or particles: ionising radiation; heat radiation. Radioactivity is the decay process; radioactive describes the material. The paper asks where radiation is absorbed. Uncountable in physics. Mix-up: radical is extreme (already elsewhere). Do not call visible light “not radiation”.',
    ['The physics paper asks where radiation is absorbed in the atmosphere.', 'Hospital radiation badges were logged, which is the safety sense.'],
    'ionising / solar / heat radiation; radiation dose. Close: radioactivity. Trap: radical. Physics and medicine. Energy on the move, not a political view.',
    []
  ),
  rapidly: L(
    'Rapidly means very quickly: rose rapidly; rapidly changing. Rapid is the adjective (already in the dictionary). Quickly is everyday; swiftly is close. Case numbers rose rapidly. Use it for speed of change in data. Do not use rapidly for a slightly faster walk.',
    ['Case numbers rose rapidly after the festival weekend, the trust reported.', 'Ice melted rapidly in the climate graph, which is the physical sense.'],
    'rise / change / spread rapidly. Adjective: rapid. Everyday: quickly. News and science graphs. Fast change, not “quite soon”.',
    ['quickly']
  ),
  ratio: L(
    'A ratio compares two amounts: a ratio of 3:1; the ratio of boys to girls. Fraction is part of a whole; rate is often per unit time (next pool). Give the ratio, not just the totals. Mix-up: ration is a limited allowance. Do not write ratio when you mean a percentage alone.',
    ['Give the ratio of boys to girls in the sample, not just the totals.', 'A gear ratio featured in the design paper, which is the engineering sense.'],
    'a ratio of A to B; in a ratio of. Contrast: percentage / rate. Trap: ration. Maths, methods, and design. Comparison of two quantities.',
    []
  ),
  reality: L(
    'Reality is how things actually are: in reality; a reality check. Real is the adjective (already in the dictionary); realism is an art/literature style. The prospectus is not the reality of contact hours. Uncountable in this sense. Mix-up: realty is US legal language for property.',
    ['The prospectus is not the reality of sixth-form contact hours.', 'In reality the sample was a volunteer group, which is the methods sense.'],
    'in reality; the reality of + noun; a reality check. Adjective: real. Uncountable. Evaluations and news. Actual situation, not a hope.',
    []
  ),
  reasonable: L(
    'Reasonable means fair and sensible, or not too expensive: a reasonable adjustment; a reasonable price. Reason is the noun (already in the dictionary). A reasonable adjustment must be agreed before the paper. Opposite: unreasonable / irrational (already elsewhere). Do not call a guess reasonable without grounds.',
    ['A reasonable adjustment must be agreed before the paper starts.', 'The quote was reasonable, which is the “not too dear” sense.'],
    'a reasonable + noun; reasonably. Law: reasonable adjustment / doubt. Opposite: unreasonable. Access arrangements and consumer news. Fair, not “average”.',
    ['fair']
  ),
  recall: L(
    'To recall is to remember, to call a product back, or to summon someone: recall a formula; a product recall. Remember is everyday; recollect is formal. Candidates could not recall the formula. Noun: recall. Mix-up: recap is a summary. Do not use recall for looking the answer up.',
    ['Candidates could not recall the formula under timed conditions.', 'The manufacturer recalled the batch, which is the safety sense.'],
    'recall + noun / that; a product recall. Everyday: remember. Formal: recollect. Exams, safety news, and parliament. From memory or call-back, not a search.',
    ['remember']
  ),
  recognition: L(
    'Recognition is knowing again, or official praise: facial recognition; in recognition of. Recognise is the verb (already in the dictionary). Facial recognition is banned in the hall. Uncountable in most uses. Mix-up: reconnaissance is military scouting. Do not treat likes as recognition of quality.',
    ['Facial recognition is banned in the hall, the invigilator briefing said.', 'She received an award in recognition of the archive work, which is the honour sense.'],
    'in recognition of; facial / mutual recognition. Verb: recognise. Uncountable. Security, law, and awards. Identifying or honouring, not a casual hello.',
    []
  ),
  recommendation: L(
    'A recommendation is advice on what to do, or a statement that someone is suitable: the inspector’s recommendation; a letter of recommendation. Recommend is the verb (already in the dictionary). The recommendation was to retimetable, not rebuild. Mix-up: commendation is praise. Do not treat a recommendation as a binding law.',
    ['The inspector’s recommendation was to retimetable the corridor, not to rebuild.', 'A recommendation letter sat in the UCAS reference, which is the suitability sense.'],
    'make / follow a recommendation; a letter of recommendation. Verb: recommend. Trap: commendation. Inspections, medicine, and applications. Advice, not a statute.',
    ['advice']
  ),
  recovery: L(
    'Recovery is a return to health, strength, or a better economy: exam recovery; economic recovery. Recover is the verb (already in the dictionary). Recovery sessions start after results day. Uncountable in many news uses. Mix-up: discovery is finding something new. Do not call a one-day rest a recovery plan.',
    ['Exam recovery sessions start the week after results day.', 'The recovery of the stolen papers was filmed, which is the “getting back” sense.'],
    'in recovery; economic / exam recovery. Verb: recover. Trap: discovery. Health, economics, and theft news. Getting back, not finding for the first time.',
    []
  ),
  recruit: L(
    'To recruit is to find new members: recruit participants; recruit staff. Hire is everyday for jobs; enlist is military. Do not recruit from your own tutor group without ethics approval. Noun: a recruit. Mix-up: recoup is to get money back. Do not use recruit for buying equipment.',
    ['Do not recruit participants from your own tutor group without ethics approval.', 'The army recruited at the careers fair, which is the military sense.'],
    'recruit staff / participants; a new recruit. Everyday (jobs): hire. Noun: recruitment. Ethics, HR, and armed forces. People, not kit.',
    ['hire']
  ),
  reduction: L(
    'A reduction is a decrease: a reduction in hours; a price reduction. Reduce is the verb (already in the dictionary). A reduction in bursary hours featured in the briefing. Cut is informal. Mix-up: deduction is taking away in logic or pay. Do not call a tiny rounding error a reduction in the claim.',
    ['A reduction in bursary hours featured in the union briefing.', 'A reduction in carbon featured in the geography aim, which is the environment sense.'],
    'a reduction in / of; price reduction. Verb: reduce. Informal: cut. Trap: deduction. Economics, environment, and retail. Making less, not a logical step.',
    ['decrease']
  ),
  reference: L(
    'A reference is a source mention, a referee letter, or an ID number: a hanging reference; a UCAS reference. Refer is the verb (already in the dictionary). A hanging reference still loses marks. Mix-up: preference is a liking. Do not list a URL with no author as a full reference if the style guide forbids it.',
    ['A hanging reference with no citation in the text still loses marks.', 'Her line manager wrote a reference, which is the employment sense.'],
    'a reference to; Harvard references; a job reference. Verb: refer. Trap: preference. Coursework and HR. Source, referee, or code.',
    []
  ),
  reflection: L(
    'Reflection is careful thought, a mirrored image, or bounced light: reflection on bias; a reflection in the glass. Reflect is the verb (already in the dictionary). Evaluation needs reflection on bias, not a feelings diary. Mix-up: refraction is light bending (physics). Do not call a plot summary a reflection.',
    ['The evaluation needs reflection on bias, not a diary of feelings.', 'A reflection on the lake spoiled the exposure, which is the optics sense.'],
    'reflection on / upon; a mirror reflection. Verb: reflect. Trap: refraction. Coursework evaluations and physics. Thought or an image, not a retelling.',
    []
  ),
  reform: L(
    'Reform is a change meant to improve a system: curriculum reform; reform of the Lords. Change is wider; revolution is a complete overthrow. Curriculum reform delayed first teaching. Verb: reform a law. Mix-up: form is a document. Do not call a logo refresh a reform.',
    ['Curriculum reform delayed the first teaching of the new specification.', 'They vowed to reform the appeals process, which is the verb sense.'],
    'reform of + system; education / welfare reform. Verb: reform. Wider: change. Stronger: revolution. Politics and education news. Improving a system, not a rebrand.',
    []
  ),
  refugee: L(
    'A refugee has been forced to leave their country by war or persecution: a refugee family; refugee housing. Asylum seeker is waiting for a decision; migrant is wider. Map refugee housing, not just arrivals. Mix-up: refuge is a place of safety. Do not use refugee as an insult.',
    ['The geography enquiry maps refugee housing, not just arrival numbers.', 'A refugee camp featured in the source booklet, which is the humanitarian sense.'],
    'a refugee from; refugee camp / status. Wider: migrant. Legal process: asylum seeker. Trap: refuge. Geography and news. Forced flight, not any move.',
    []
  ),
  regarding: L(
    'Regarding means about, in formal notices: regarding the clash; regarding your application. About is everyday; concerning is a close formal twin. Regarding the clash, sit the morning paper. Do not write “regarding to”. Mix-up: regardless (of) means despite (already as irrespective’s twin).',
    ['Regarding the clash, sit the morning paper and apply for the afternoon transfer.', 'A note regarding fees went to parents, which is the letter sense.'],
    'regarding + noun. Everyday: about. Close: concerning. Trap: regardless of / “regarding to”. Exam-office English. About, not despite.',
    ['about']
  ),
  regional: L(
    'Regional means of a region, not the whole country: regional pay; a regional accent. Region is the noun (already in the dictionary). National is the opposite scale; local is smaller. Regional pay featured in the data booklet. Mix-up: regular is usual (already elsewhere).',
    ['Regional pay differences featured in the economics data booklet.', 'A regional news opt-out covered the flood, which is the broadcasting sense.'],
    'regional + noun; regionally. Noun: region. Contrast: national / local. Economics, geography, and BBC regions. Area-level, not nationwide.',
    []
  ),
  register: L(
    'To register is to put a name on an official list; as a noun it is also formality in language: register the clash; a formal register. Enrol is close for courses; record is wider. Register the clash before Friday. Mix-up: registrar is the official. Do not confuse language register with a till.',
    ['Register the clash on the portal before Friday, exams office said.', 'The essay slipped into an informal register, which is the language sense.'],
    'register for / with; a class register; formal / informal register. Close (courses): enrol. Trap: registrar. Exams and English language. Official list or tone.',
    []
  ),
  regulation: L(
    'A regulation is an official rule, or the system of control: exam-board regulation; safety regulation. Rule is everyday; law is passed by parliament. Regulation forbids unsealed packs in the staffroom. Uncountable for the activity. Mix-up: regular is usual. Do not call a house style a regulation.',
    ['Exam-board regulation forbids unsealed packs in the staffroom.', 'Tighter regulation of tutorships featured in the briefing, which is the control sense.'],
    'a regulation; under regulation; health and safety regulation. Everyday: rule. Verb: regulate. Boards, Ofsted, and industry. Official rule or oversight.',
    ['rule']
  ),
  relatively: L(
    'Relatively means in comparison, or quite: relatively small; relatively speaking. Relative is the adjective/noun (already in the dictionary as family). The sample is relatively small. Mix-up: relevant means on-topic (already in the dictionary). Do not use relatively as empty padding.',
    ['The sample is relatively small, so do not over-generalise.', 'Costs were relatively low after the grant, which is the “quite, compared with before” sense.'],
    'relatively + adjective; relatively speaking. Adjective: relative. Trap: relevant. Methods and evaluations. Compared with something, not “on the topic”.',
    ['comparatively']
  ),
  release: L(
    'To release is to let go, or to make something public: release the papers; release a report. Publish is for print; free is everyday for people. The board will release grade boundaries after midday. Noun: a press release. Mix-up: relief is comfort after pain. Do not use release for a quiet leak.',
    ['Police will release the names after the family has been told.', 'The charity released the foxes, which is the animal sense.'],
    'release a report / film / person; a press release. Close (print): publish. Results day, media, and wildlife. Official making-public or letting go.',
    ['publish']
  ),
  remarkable: L(
    'Remarkable means striking and worth noticing: a remarkable improvement; remarkable restraint. A remark is a comment; remarkable is the adjective. Amazing is informal; notable is close. A remarkable improvement still needs a control. Do not call a tiny bump remarkable in a results table.',
    ['The recovery after the operation was remarkable, the consultant said.', 'The restraint in the editorial was remarkable, which is the tone sense.'],
    'remarkable + noun; remarkably. Informal: amazing. Close: notable. Methods and reviews. Worth comment, not merely “quite good”.',
    ['notable']
  ),
  representative: L(
    'A representative acts for others; as an adjective it means typical of a group: a union representative; a representative sample. Represent is the verb (already in the dictionary). A union representative sat in. Mix-up: representative is not the same as MP in every country (US Congress uses the word as a title). Do not call a convenience sample representative.',
    ['A union representative sat in on the disciplinary, the minutes show.', 'The panel was not representative of the year group, which is the sampling sense.'],
    'a union / elected representative; a representative sample. Verb: represent. Methods and industrial relations. Typical or acting for, not a random volunteer.',
    []
  ),
  reputation: L(
    'Reputation is what people think of you from the past: a reputation for punctuality; damage a reputation. Rumour is unverified talk (already in the dictionary); fame is being widely known. The sixth form’s reputation collapsed after the bus cuts. Mix-up: repetition is doing again. Do not treat one viral clip as a whole reputation.',
    ['The sixth form’s reputation for punctuality collapsed after the bus cuts.', 'A reputation for fair marking featured in the handbook, which is the quality sense.'],
    'a reputation for / as; damage / restore a reputation. Contrast: rumour / fame. Trap: repetition. News and school marketing. Earned public view, not a one-off post.',
    []
  ),
  requirement: L(
    'A requirement is something a rule needs: an entry requirement; meet the requirement. Require is the verb (already in the dictionary). A grade 6 is a requirement for physics A-level. Need is everyday. Mix-up: request is asking (already elsewhere). Do not call a wish a requirement.',
    ['A grade 6 in maths is a requirement for the physics A-level, the prospectus said.', 'Safety requirements closed the lab, which is the regulation sense.'],
    'meet / satisfy a requirement; entry requirements. Verb: require. Everyday: need. Trap: request. Prospectuses and law. A demanded condition, not a polite ask.',
    ['need']
  ),
  resistance: L(
    'Resistance is opposition, or the ability to withstand a force, current, or disease: staff resistance; antibiotic resistance. Resist is the verb. Staff resistance delayed the upload. Physics: measure resistance in ohms. Mix-up: residence is a home. Do not call mild grumbling resistance without evidence.',
    ['Staff resistance to the new portal delayed the mock upload.', 'Measure resistance in the circuit, which is the physics sense.'],
    'resistance to + noun; electrical / antibiotic resistance. Verb: resist. Trap: residence. Industrial news and science. Opposition or withstanding, not an address.',
    []
  ),
  responsible: L(
    'Responsible means in charge, to blame, or reliable: responsible for the keys; a responsible adult. Responsibility is the noun (already in the dictionary). The exams officer is responsible for the keys. Opposite: irresponsible (already elsewhere). Mix-up: responsive means reacting quickly. Do not write “responsible of”.',
    ['The exams officer is responsible for the keys, not the cover supervisor.', 'A responsible adult must collect the candidate, which is the safeguarding sense.'],
    'responsible for / to; a responsible + noun. Noun: responsibility. Opposite: irresponsible. Trap: responsive / “responsible of”. Duty, cause, or trustworthiness.',
    []
  ),
  rural: L(
    'Rural means of the countryside: rural broadband; a rural constituency. Urban is the town opposite (already in the dictionary). Countryside is the everyday noun. Rural broadband featured in the inequality case. Mix-up: royal is to do with the monarch. Do not call a city park rural.',
    ['Rural broadband featured in the geography inequality case study.', 'A rural bus service was cut, which is the transport-news sense.'],
    'rural + noun; rurally. Opposite: urban. Everyday noun: countryside. Trap: royal. Geography and politics. Countryside, not a monarch.',
    []
  ),
  union: L(
    'A union is a workers’ organisation, or a joining of things or countries: the teaching union; the European Union. Club is social; alliance is a looser pact. The union balloted on strike dates. Mix-up: unique means one of a kind (already in the dictionary). Do not write union for a single staff meeting.',
    ['The union balloted on strike dates after the pay offer stalled.', 'The Act of Union featured in the history paper, which is the political-joining sense.'],
    'a trade / students’ union; the European Union; in union with. Trap: unique / unity. Industrial news and history. Organisation or joining, not “special”.',
    []
  ),
}
