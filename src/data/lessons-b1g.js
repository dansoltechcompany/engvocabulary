const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1G = {
  allergy: L(
    'An allergy is a medical reaction: a nut allergy; a pollen allergy; an allergy to cats; hay fever is a common seasonal one. Allergic is the adjective: allergic to peanuts. Intolerance (for example lactose intolerance) is related but usually milder and not the same as a sudden allergic reaction. Do not write “an allergic” as a noun — the person has an allergy; the food makes them allergic. In restaurants, ask about allergens on the menu.',
    ['The school keeps a list of pupils with a severe nut allergy.', 'She is allergic to penicillin, so the doctor chose a different medicine.'],
    'a nut / pollen allergy; allergy to + noun. Adjective: allergic to. Menu word: allergen. Not the same as intolerance.',
    ['sensitivity']
  ),
  apprentice: L(
    'An apprentice learns a skilled trade while working: an apprentice electrician; an apprentice plumber; take on an apprentice. Apprenticeship is the training scheme. A trainee is wider and can be office-based; an intern is often a short, unpaid or low-paid placement, not a full trade course. UK news often pairs apprenticeships with skills shortages. Do not use apprentice for a university intern in an office unless the company really uses that title.',
    ['The garage took on two apprentices after the government grant.', 'She completed a four-year apprenticeship in carpentry.'],
    'apprentice + trade. Noun for the scheme: apprenticeship. Wider office learner: trainee. Short campus placement: intern.',
    ['trainee']
  ),
  breakdown: L(
    'A breakdown is often a vehicle that stops working: a breakdown on the motorway; call a breakdown service; breakdown cover on insurance. It can also mean a mental or physical collapse from stress (a nervous breakdown — handle this sense briefly and kindly). Breakdown of talks means negotiations have failed. Break down is the verb (two words). Do not write “the car made a breakdown” — we had a breakdown / the car broke down.',
    ['Breakdown cover paid for the recovery truck on the M6.', 'Talks between the union and management ended in a breakdown.'],
    'a breakdown on the motorway; breakdown cover / service. Verb: break down (two words). Also: a breakdown in talks.',
    ['failure']
  ),
  bulletin: L(
    'A bulletin is a short official news update: a news bulletin; a traffic bulletin; an hourly bulletin. It is shorter than a full programme, while a report can be long and a headline is only the title. Radio 4 still talks of the six o’clock bulletin. Bulletin board in US English is a noticeboard in UK English. Do not use bulletin for a long investigative article — that is a report or feature.',
    ['The lunchtime bulletin led with the rail strike.', 'A weather bulletin warned drivers of ice on high ground.'],
    'a news / traffic / weather bulletin. Short official update, not a long feature. US bulletin board = UK noticeboard.',
    ['update']
  ),
  commute: L(
    'You commute when you travel regularly between home and work: commute to London; a two-hour commute (noun). Commuter is the person; commuting is the activity. Travel is general; commute is the repeated work journey, often with a season ticket in the rush hour. Do not say “I commute to the shops once a month” — that is just travel. UK exams like IELTS often ask about commuting and public transport.',
    ['He commutes by train because parking in the centre is expensive.', 'Her daily commute takes forty minutes on the bus.'],
    'commute to + place. Noun: a long commute. Person: commuter. General movement: travel. Not a one-off trip.',
    ['travel']
  ),
  congestion: L(
    'Congestion is roads (or sometimes trains, A&E, or the internet) being too full: traffic congestion; congestion in the city centre; congestion charge (London). A traffic jam is a single blockage you can sit in; congestion is the wider problem. Congested is the adjective. Do not confuse it with digestion or with a blocked nose (congestion can mean that medically, but at B1 stick to traffic unless a health text forces it).',
    ['The mayor promised to cut congestion around the school gates.', 'London’s congestion charge is meant to keep extra cars out of the centre.'],
    'traffic congestion; congestion charge. Adjective: congested. One blockage: traffic jam. Health sense = blocked nose (later).',
    ['traffic jam']
  ),
  correspondent: L(
    'A correspondent is a journalist with a patch: a war correspondent; a political correspondent; our New York correspondent. Reporter is the everyday twin for someone covering an event; correspondent often sounds more specialist or based abroad. Correspondence (letters) is a different noun — a classic exam mix-up. Do not write “the correspondent of the accident” when you mean the reporter at the scene.',
    ['The economics correspondent questioned the inflation figures live on air.', 'She spent five years as a foreign correspondent in Cairo.'],
    'war / political / foreign correspondent. Everyday twin: reporter. Not correspondence (letters). Specialist patch, often abroad.',
    ['reporter']
  ),
  coverage: L(
    'News coverage is how fully an event is reported: live coverage; media coverage; blanket coverage. Coverage also means how much a service includes: insurance coverage; mobile coverage (signal). Report is one story; coverage is the overall attention. Uncountable in the news sense: not “a coverage”. Do not write “the coverage said” — say the report / the article said.',
    ['There was wall-to-wall coverage of the cup final all weekend.', 'The policy does not include coverage for flood damage.'],
    'live / media coverage (uncountable). Also: insurance / mobile coverage. One story: report. Not “a coverage”.',
    ['reporting']
  ),
  coursework: L(
    'Coursework is assessed work done during a course, not in the exam hall: hand in coursework; coursework deadline; a coursework mark. An assignment is one task; coursework can be several pieces. Homework is usually shorter and not always for a final grade. Uncountable in UK school English: not “a coursework”. GCSEs and A-levels still use the word even when most marks come from exams.',
    ['Late coursework loses ten per cent of the mark per day.', 'The art GCSE is mostly coursework, with a shorter timed exam.'],
    'Uncountable: coursework. hand in / submit coursework. One task: assignment. Everyday practice: homework. Not the final exam.',
    ['assignment']
  ),
  critic: L(
    'A critic writes professional judgements: a film critic; a food critic; a music critic. A reviewer is close; a journalist may report facts without judging. Criticise is the verb (UK spelling); criticism is the noun for the comments. Critic can also mean anyone who finds fault (critics of the plan). Do not confuse critic with critique (a noun/verb for a careful analysis) or with cricket.',
    ['Theatre critics praised the new production at the National.', 'Critics of the housing plan say it will increase rents.'],
    'film / food / music critic. Verb: criticise (UK). Noun: criticism. Everyday fault-finder: a critic of the plan. Not cricket.',
    ['reviewer']
  ),
  deadline: L(
    'A deadline is the last time something can be finished: miss a deadline; meet a deadline; a tight deadline; the deadline for applications. Due date is close for bills and library books; time limit can be the minutes in an exam. Work to a deadline is a common job phrase. Do not write “the deadline of Friday” — say the deadline is Friday / the Friday deadline.',
    ['If you miss the visa deadline, you have to start the form again.', 'The team worked late to meet a tight deadline on the report.'],
    'meet / miss a deadline. a tight deadline; the deadline for + noun. Bills: due date. Exam minutes: time limit.',
    ['time limit']
  ),
  debate: L(
    'A debate is a structured argument with more than one view: a public debate; a televised debate; debate whether + clause. Discussion can be informal; argument often sounds angry or personal. Debate is also a verb: they debated the new law. House of Commons debates are a UK news staple. Do not use debate for a private row at the dinner table — that is an argument.',
    ['The class held a debate on whether cities should ban diesel cars.', 'MPs will debate the bill in the Commons on Tuesday.'],
    'a public / televised debate; debate whether. Verb: debate the issue. Informal talk: discussion. Angry row: argument.',
    ['discussion']
  ),
  disagree: L(
    'You disagree when your opinion is different: disagree with someone; disagree with an idea; I disagree that… Agree is the opposite; argue can add heat. Disagree about / on a subject is also correct. Disagreement is the noun. Do not write “I am disagree” — the verb needs a subject doing the action. In exams, I partly disagree is a useful Task 2 opening.',
    ['I disagree with the proposal to cut the evening bus.', 'We disagree on the best way to revise vocabulary.'],
    'disagree with someone / an idea. Noun: disagreement. Opposite: agree. Stronger / hotter: argue. Not “I am disagree”.',
    ['differ']
  ),
  draft: L(
    'A draft is a first version of a text: a first draft; a rough draft; draft an email (verb). Outline is the skeleton of points; the draft is actual sentences. Draught (UK) is a cold air current or beer from a tap — spelling trap. In IELTS, plan, then write a draft, then check. Do not hand in the first draft as the final essay if you still have time to edit.',
    ['Keep the first draft; you may want a paragraph you cut later.', 'She drafted a complaint to the airline before she calmed down and shortened it.'],
    'a first / rough draft. Verb: draft a letter. Skeleton of points: outline. Spelling trap: draught (air / beer).',
    ['outline']
  ),
  editorial: L(
    'An editorial is the paper’s own opinion piece, not a news report: an editorial on housing; the editorial argues that… In some UK papers the same text is called a leader. Editorial as an adjective means relating to editing: editorial independence; editorial team. Do not call a reporter’s news story an editorial unless it is clearly the paper’s view. Editor is the person; editorial is the article or the process.',
    ['Yesterday’s editorial called for a national cycling strategy.', 'Editorial independence means the owner should not kill a story.'],
    'the editorial argues that… UK twin: a leader. Adjective: editorial team / independence. Person: editor. Not a straight news report.',
    ['leader']
  ),
  exhausted: L(
    'Exhausted means extremely tired: exhausted after a night shift; mentally exhausted. Tired is weaker; shattered is informal UK. Exhausting describes the thing that makes you tired (an exhausting day). Exhaust (noun) is car fumes — different word family in everyday talk. Do not write “I am exhausting” when you mean you have no energy — that says you make other people tired.',
    ['They were exhausted by the time the last patient left A&E.', 'Marking two hundred scripts in a weekend is exhausting.'],
    'Person: exhausted. Cause: exhausting. Weaker: tired. Informal UK: shattered. Not car exhaust unless you mean fumes.',
    ['tired', 'shattered']
  ),
  faulty: L(
    'Faulty describes goods that do not work as they should: a faulty charger; faulty wiring; a faulty smoke alarm. Broken often means in pieces or not working at all; defective is more technical or legal. Under UK consumer law you can often get a refund or repair for faulty goods. Fault is the noun (it is not my fault / an electrical fault). Do not use faulty for a bad idea — say flawed or wrong.',
    ['Return faulty goods with the receipt within thirty days.', 'Faulty wiring in the kitchen caused the lights to flicker.'],
    'a faulty charger / alarm / goods. Noun: fault. In pieces: broken. Legal twin: defective. Ideas: flawed, not faulty.',
    ['defective']
  ),
  footage: L(
    'Footage is video of a real event: CCTV footage; news footage; footage of the protest. Uncountable: not “a footage”. Film can mean a whole movie; clip is a short piece; footage stresses raw or news pictures. Foot as a body part is unrelated in meaning. Do not write “the footages show” — footage shows / the footage shows.',
    ['CCTV footage helped the police identify the stolen bicycle.', 'News channels repeated the same footage of the flood all evening.'],
    'CCTV / news footage (uncountable). Short piece: clip. Whole movie: film. Not “a footage” / “footages”.',
    ['clip']
  ),
  freelance: L(
    'Freelance describes work paid per job, not a permanent contract: a freelance journalist; work freelance; go freelance. Freelancer is the person. Self-employed is wider (you may run a whole business). A contractor often has a longer paid contract. Do not write “a freelance” without a noun in careful exam English — say a freelancer or a freelance designer.',
    ['After redundancy she went freelance and invoiced two magazines a month.', 'The BBC uses a mix of staff and freelance camera operators.'],
    'a freelance journalist / designer; work / go freelance. Person: freelancer. Wider: self-employed. Longer hire: contractor.',
    ['self-employed']
  ),
  headline: L(
    'A headline is the large title of a news story: a front-page headline; headline news; the headline claims that… Headlines often drop little words (PM IN TALKS). A title is more general (a book title). Make headlines means become news. Do not copy a dramatic headline as a fact in IELTS Task 1/2 — read the article or the chart. Headline as a verb (the story was headlined…) is journalese.',
    ['Do not believe the headline until you have read the third paragraph.', 'The resignation made headlines in every Sunday paper.'],
    'a front-page headline; headline news; make headlines. Book name: title. Headlines omit small words. Check facts below the title.',
    ['title']
  ),
  impartial: L(
    'Impartial means you do not take sides: an impartial chair; impartial reporting; remain impartial. Neutral is close; objective stresses facts over feelings; unbiased is a clear twin. BBC editorial guidelines talk of impartiality. Partial means biased, or incomplete — two meanings, so be careful. Do not say “impartial from the company” — say independent of / impartial towards both sides.',
    ['Exam markers are trained to be impartial even if they dislike the topic.', 'Listeners accused the phone-in of not being impartial during the strike.'],
    'an impartial chair / report; remain impartial. Twins: neutral / unbiased. Opposite: biased / partial. Noun: impartiality.',
    ['neutral', 'unbiased']
  ),
  intern: L(
    'An intern is usually a student or graduate on a short placement: an unpaid intern; a summer intern; intern at a charity. Internship is the placement. Apprentice is a longer skilled-trade path; work experience is the UK school-week version. UK news often debates unpaid internships. Stress the first syllable for the job noun (/ˈɪntɜːn/), and do not confuse it with the verb intern meaning imprison in wartime.',
    ['The intern prepared a briefing for the Monday editorial meeting.', 'She completed a six-week internship in the press office.'],
    'summer / unpaid intern. Scheme: internship. Trade path: apprentice. School week: work experience. Not the wartime verb intern.',
    ['trainee']
  ),
  journalist: L(
    'A journalist writes or broadcasts news: a newspaper journalist; an investigative journalist; train as a journalist. Reporter often gathers facts at the scene; journalist is the wider profession. Journalism is the uncountable field of work. Journal is a diary or academic magazine — not the person, and do not spell journalist as “jornalist”. A press officer works for an organisation, not as an independent reporter.',
    ['Investigative journalists spent months on the hospital files.', 'She left journalism for a job in corporate communications.'],
    'investigative / newspaper journalist. Field: journalism (uncountable). Scene gatherer: reporter. Not journal (diary / academic title).',
    ['reporter']
  ),
  landlord: L(
    'A landlord owns a property and rents it out: pay the landlord; a private landlord; the landlord’s agent. Landlady is still used for a woman, or for someone who runs a pub. Tenant is the person who lives there and pays rent; a letting agent may manage the property. Do not use landlord for the bank that gave a mortgage — that is a lender. UK news: section 21, deposits, and mould often appear with landlords.',
    ['The landlord has not repaired the boiler for three weeks.', 'Write to the letting agent if you cannot reach the landlord.'],
    'private landlord; pay the landlord. Renter: tenant. Woman / pub: landlady. Manager: letting agent. Mortgage bank: lender.',
    []
  ),
  lecturer: L(
    'A lecturer teaches in a university or college: a history lecturer; senior lecturer (a UK academic grade). A teacher is the school word; a professor is a higher title in the UK than in US English. Lecture is the large class; lecturer is the person. Tutor often means small-group or personal teaching. Do not call a secondary-school teacher a lecturer in UK English.',
    ['The lecturer posted the slides after the Monday lecture.', 'She was promoted from lecturer to senior lecturer last year.'],
    'a university lecturer; senior lecturer (UK grade). School: teacher. Higher UK title: professor. Large class: lecture. Small group: tutor.',
    ['tutor']
  ),
  majority: L(
    'The majority is more than half: the majority of students; a clear majority; a majority vote. Most is the everyday twin; minority is the opposite. Majority is usually followed by of + plural noun, and the verb often agrees with that noun (the majority of staff are…). An absolute majority means more than 50% of everyone who could vote. Do not write “majority people” — you need of.',
    ['The majority of commuters now buy tickets on an app.', 'A majority in the council voted against the late-night supermarket.'],
    'the majority of + plural. Everyday: most. Opposite: minority. Phrase: a majority vote. Not “majority people”.',
    ['most']
  ),
  minority: L(
    'A minority is less than half, or a smaller social group: a minority of passengers; ethnic minorities; in a minority of cases. Majority is the opposite. Minority groups and minority languages appear in news and IELTS social topics. A tiny minority stresses how few. Do not use minority as a polite word for “wrong” — it is about number or group size, not about being incorrect.',
    ['Only a minority of households still have no broadband.', 'The report looked at pay gaps for minority ethnic staff.'],
    'a minority of + plural; ethnic minorities. Opposite: majority. Stress: a tiny minority. About size / group, not “incorrect”.',
    ['few']
  ),
  motorway: L(
    'A motorway is a UK high-speed dual carriageway: the M1; motorway traffic; a motorway service station. Highway and freeway are US/other; dual carriageway may have roundabouts and is not always a motorway. Hard shoulder is the edge lane for emergencies. Do not cycle or walk on a motorway. In Task 1 maps, motorway is a useful label for a thick road.',
    ['Fog closed two lanes of the motorway near Manchester.', 'We stopped at a motorway service station for petrol and tea.'],
    'the M1 / M6; motorway services. US twins: highway / freeway. Emergency lane: hard shoulder. Not for bikes or pedestrians.',
    ['highway']
  ),
  objection: L(
    'An objection is a reason to oppose a plan: raise an objection; no objection; an objection to the proposal. Object (verb, stress on the second syllable) is to say you are against it. Complaint is often about poor service you already received; protest can be a public demonstration. Planning objections are a UK local-news staple. Do not write “I objection” — use I object / I have an objection.',
    ['The union raised no objection to the new safety boots.', 'Residents filed objections to the airport’s night flights.'],
    'raise / have an objection to. Verb: object (ob-JECT). After bad service: complaint. Street action: protest. Not “I objection”.',
    ['protest']
  ),
  outline: L(
    'An outline lists main points before the full text: a brief outline; outline the argument (verb); an outline of the talk. Overview is a general picture; a draft is written sentences. In IELTS Writing, spend a minute on an outline so Task 2 stays on question. Outline can also mean the edge of a shape. Do not confuse it with out of line (behaving badly).',
    ['Bullet-point your outline, then write the essay from it.', 'The minister gave only an outline of the tax changes, not the figures.'],
    'a brief outline; outline the plan (verb). General picture: overview. Full first version: draft. Not out of line (behaviour).',
    ['summary']
  ),
  overtime: L(
    'Overtime is extra hours, or the pay for them: work overtime; paid overtime; overtime rates (uncountable). Time and a half means 1.5 times the usual wage, and an overtime ban is a union tactic. Do not confuse it with extra time in sport (added minutes of a match). A shift is the planned block of hours; overtime sits on top of it.',
    ['Staff can refuse overtime unless their contract says they must work it.', 'Overtime payments pushed her wage up in December.'],
    'work overtime; paid overtime (uncountable). Sport extra minutes: extra time. Planned block: shift. Pay: time and a half.',
    []
  ),
  overview: L(
    'An overview is a general picture without detail: give an overview; an overview of the trends; a brief overview. Outline is often the skeleton you write first; overview is what the reader gets in a summary paragraph. IELTS Academic Task 1 needs an overview of the main trends, not every number. Do not copy every figure into the overview — select the biggest patterns.',
    ['Start Task 1 with an overview of the highest and lowest figures.', 'The handbook opens with an overview of the safety rules.'],
    'give / provide an overview of. IELTS Task 1: overview of main trends. Skeleton notes: outline. Not a list of every number.',
    ['summary']
  ),
  paraphrase: L(
    'You paraphrase when you keep the meaning but change the words: paraphrase the question; a close paraphrase. It is essential in IELTS Writing and Reading. Quote means copy the exact words (with marks); summarise means make it shorter. Paraphrase is also a noun: a paraphrase of the opening line. Do not change the meaning when you paraphrase — that is a new claim, not a paraphrase.',
    ['Good candidates paraphrase the task instead of copying the rubric.', 'Paraphrase “a significant increase” as “rose sharply”, not as “fell”. Keep the meaning.'],
    'paraphrase the question / sentence. Exact words: quote. Shorter: summarise. Noun: a paraphrase. Do not change the meaning.',
    ['reword']
  ),
  pavement: L(
    'In UK English the pavement is the raised path for walkers beside the road: walk on the pavement; a crowded pavement; pavement café. US English uses sidewalk for that path, and pavement for the road surface. Pedestrian is the person; kerb is the stone edge. Do not ride a motorbike on the pavement. IELTS and UK driving tests both use the British sense.',
    ['Leave space on the pavement for buggies and wheelchairs.', 'A pavement café table blocked the way to the crossing.'],
    'UK walking path: pavement. US walking path: sidewalk. Person: pedestrian. Edge stone: kerb. US pavement often = road surface.',
    ['sidewalk']
  ),
  pedestrian: L(
    'A pedestrian is a person on foot in the street: pedestrian crossing; pedestrian zone; hit a pedestrian. Walker is informal and not the road-safety word. Pavement is where they should walk. Pedestrian as an adjective can also mean dull (a pedestrian speech) — extra sense, not the B1 traffic meaning. Do not use pedestrian for a cyclist or e-scooter rider.',
    ['The new pedestrian zone keeps cars out of the old town on Saturdays.', 'Drivers must stop at a zebra crossing if a pedestrian is waiting.'],
    'pedestrian crossing / zone. Informal: walker. Path: pavement. Adjective extra sense: dull. Not a cyclist.',
    ['walker']
  ),
  pension: L(
    'A pension is regular money after you retire: a state pension; a workplace pension; live on a pension. Pensioner is the person. Retirement is the period or decision; pension is the payment. UK news: pension age, auto-enrolment, triple lock. Do not confuse it with compensation (money for a loss) or with a boarding house (US pension in some languages means a cheap hotel).',
    ['The state pension age is rising, which worries many workers in their fifties.', 'She paid into a workplace pension for thirty years.'],
    'state / workplace pension; live on a pension. Person: pensioner. The life stage: retirement. Not a hotel; not compensation.',
    []
  ),
  percentage: L(
    'A percentage is a part of 100: a high percentage of; the percentage of households; express it as a percentage. Per cent (UK, two words) sits after the number: 40 per cent; percent is the US spelling. Proportion and share are close. Do not write “percentage %” together. In Task 1, compare percentages, do not list every one.',
    ['A small percentage of trains arrived more than ten minutes late.', 'What percentage of your income goes on rent?'],
    'a percentage of + noun. Number: 40 per cent (UK). US: percent. Twins: proportion / share. Do not write “percentage %”.',
    ['proportion']
  ),
  petrol: L(
    'Petrol is UK car fuel for petrol engines: a petrol station; unleaded petrol; petrol prices. US English uses gasoline / gas; diesel is a different fuel. Do not pour petrol into a diesel car, and do not look for petrol on an electric vehicle (use a charge point). Petrolhead is informal for a car fan. IELTS transport essays often contrast petrol cars with public transport.',
    ['Petrol went up overnight after the pipeline news.', 'This hire car takes petrol, not diesel — check the cap.'],
    'petrol station / prices; unleaded petrol. US: gasoline / gas. Other fuel: diesel. EVs: charge point, not petrol.',
    ['gasoline']
  ),
  prescription: L(
    'A prescription is a doctor’s written order for medicine: a repeat prescription; on prescription; prescription-only. The chemist / pharmacy dispenses it; prescribe is the verb. A receipt is proof of payment, not medicine, and over-the-counter medicines do not need a prescription. Do not confuse it with a job description or with inscription (words carved on stone).',
    ['The GP sent the prescription electronically to the pharmacy.', 'Antibiotics are prescription-only in the UK for a reason.'],
    'a repeat prescription; on prescription. Verb: prescribe. Shop proof: receipt. No doctor needed: over the counter. Person: chemist / pharmacist.',
    []
  ),
  press: L(
    'The press means newspapers and journalists as a group: the national press; press conference; freedom of the press. Media is wider (TV, radio, online). Press as a verb means push, or iron clothes; a press release is an official statement sent to journalists. Do not write “a press” for one newspaper — say a paper / a title. The Press in headlines is often capitalised.',
    ['She refused to comment when the press gathered on her drive.', 'The department sent a press release at 4 p.m. to miss the evening bulletins.'],
    'the press; press conference / release; freedom of the press. Wider: media. One title: a paper. Verb press = push / iron.',
    ['media']
  ),
  questionnaire: L(
    'A questionnaire is a written list of questions for research: complete a questionnaire; a short questionnaire; anonymous questionnaire. A survey can be the whole study (including interviews); a poll is often a political snapshot; a form is more for applications than research. Spell it with double n and -aire; do not write “questionary”. In IELTS Speaking you may describe a questionnaire at work or university.',
    ['Staff filled in a questionnaire about stress and overtime.', 'Keep the questionnaire to one side of A4 or people will not finish it.'],
    'complete / fill in a questionnaire. Whole study: survey. Politics snapshot: poll. Spelling: questionnaire, not questionary.',
    ['survey']
  ),
  queue: L(
    'A queue is a UK waiting line: join the queue; jump the queue; a queue for tickets; queue up (verb). US English uses line; a queue-jumper is the rude person who pushes in. Traffic can queue on a slip road. Do not write “a line of queue”. Cue is a different word (a signal, or a snooker stick) — spelling trap in exams.',
    ['We queued for twenty minutes at passport control.', 'It is rude to jump the queue at the post office.'],
    'join / jump the queue; queue up. US: line. Spelling trap: cue (signal / snooker). Not “a line of queue”.',
    ['line']
  ),
  redundancy: L(
    'Redundancy is losing a job because the role is no longer needed: face redundancy; compulsory redundancy; redundancy pay. You are made redundant (UK); US English often says layoff. Fired / sacked means you are dismissed for conduct or performance — a different, blamer sense. Redundant as an adjective also means “not needed” for extra words in a sentence. Do not say “I was fired” if the factory simply closed.',
    ['Voluntary redundancy was offered before any compulsory cuts.', 'She used her redundancy pay to retrain as a plumber.'],
    'made redundant; redundancy pay. US: layoff. Conduct dismissal: sacked / fired. Extra unneeded words: redundant (adjective).',
    ['layoff']
  ),
  refund: L(
    'A refund is money back: a full refund; claim a refund; refund policy. Refund can be a verb: they refunded the ticket. A receipt helps you prove the purchase; exchange means a different item, not always money. Compensation can be extra money for trouble, not just the original price. Stress the noun /ˈriːfʌnd/ and the verb /rɪˈfʌnd/, and do not write “a return money”.',
    ['Keep the receipt if you want a refund on faulty headphones.', 'The airline refunded the fare after the overnight delay.'],
    'a full refund; claim / get a refund. Verb: refund the fare. Proof: receipt. Different item: exchange. Extra for trouble: compensation.',
    ['repayment']
  ),
  reporter: L(
    'A reporter gathers and tells news, often from the scene: a TV reporter; a court reporter; our reporter at the scene. Journalist is the wider job; correspondent often has a specialist patch. Report is the verb or the finished story. Do not confuse reporter with secretary (who may “report to” a manager). Live reporter pieces are common on rolling news.',
    ['A reporter waited outside the school after the Ofsted visit.', 'She began as a junior reporter on a local weekly paper.'],
    'TV / court / on-the-scene reporter. Wider job: journalist. Specialist patch: correspondent. Verb / story: report. Not “report to” a boss.',
    ['journalist']
  ),
  resign: L(
    'You resign when you officially leave a job: resign from the post; resign as manager; hand in your resignation. Quit is informal; retire is because of age; be sacked is when the employer ends it. Resignation is the noun (a letter of resignation). Do not confuse resign with re-sign (sign again) — hyphen and meaning differ. Ministers resign in UK political news.',
    ['He resigned from the board after the accounts were questioned.', 'If you resign without notice, you may lose some pay.'],
    'resign from / as. Noun: resignation. Informal: quit. Age: retire. Employer ends it: sack. Not re-sign (sign again).',
    ['quit']
  ),
  retire: L(
    'You retire when you stop work, usually because of age: retire at 66; retire from teaching; take early retirement. Resign is leaving a job at any age to do something else; pension is the money. Retired is the adjective, retirement is the period, and retiree is more US. Do not say “I retired from the meeting for five minutes” in UK English — that is I stepped out. A retiring person can also mean shy (extra sense).',
    ['She retired from the NHS after forty years on the ward.', 'They cannot afford to retire until both pensions start.'],
    'retire at + age; retire from a job. Noun: retirement. Money: pension. Leave a job earlier: resign. Adjective: retired.',
    []
  ),
  revise: L(
    'In UK school and exam English, revise means study again before a test: revise for finals; revise biology; a revise-and-check night. US English uses review for that sense. Revise can also mean change a text (revise the draft); revision is the noun. Do not confuse it with reverse (go backwards) or with visor. IELTS candidates revise vocabulary in short, repeated sessions.',
    ['Revise the bar chart language the night before Academic Task 1.', 'The committee revised the safety rules after the inspection.'],
    'UK exams: revise for / revise + subject. US exam twin: review. Also: revise a draft (change it). Noun: revision. Not reverse.',
    ['review']
  ),
  revision: L(
    'Revision is the work of studying again (UK): a revision timetable; last-minute revision; revision notes. It is also the act of changing a document (a revision of the policy). Homework is daily tasks; revision is exam-focused. Uncountable in the study sense: do some revision, not “a revision” unless you mean one updated version of a text. Do not spell it “revesion”.',
    ['Put your phone in another room during revision blocks of forty minutes.', 'The second revision of the handbook added a fire-drill map.'],
    'UK exams: revision timetable / notes (often uncountable). Document update: a revision of. Daily tasks: homework. US study word: review.',
    ['review']
  ),
  rumour: L(
    'A rumour is an unofficial story that may be false: a rumour that + clause; spread a rumour; rumours of a closure. UK spelling rumour; US rumor. Gossip is often personal and unkind; news should be checked. Rumour mill means lots of unofficial talk. Do not present a rumour as a fact in an essay — say According to rumour / unconfirmed reports.',
    ['Rumours of shop closures spread before any official statement.', 'Ignore rumours in the group chat until HR emails you.'],
    'UK spelling: rumour (US rumor). spread / deny a rumour. Personal talk: gossip. Essay: unconfirmed, not a fact.',
    ['gossip']
  ),
  scandal: L(
    'A scandal shocks the public because of dishonest or immoral behaviour: a political scandal; a financial scandal; scandal broke when… Controversy is public disagreement and may not involve wrongdoing. Gossip is smaller and more personal. Scandalous is the adjective. Tabloids love scandals; broadsheets may still lead with them. Do not call a simple mistake a scandal unless people see it as a serious abuse of trust.',
    ['The expenses scandal led to several MPs standing down.', 'It became a scandal when emails showed the test results had been changed.'],
    'a political / financial scandal; scandal broke. Public row without crime: controversy. Adjective: scandalous. Small personal talk: gossip.',
    ['controversy']
  ),
  seminar: L(
    'A seminar is a small university class for discussion: attend a seminar; a research seminar; seminar paper. A lecture is a large talk; a tutorial is often even smaller or one-to-one in some UK universities. Workshop is more practical and skills-based. Seminar can also mean a professional training meeting. Do not use seminar for a school lesson with thirty children — that is a class or lesson.',
    ['Read the article before the seminar or you will not follow the debate.', 'The department runs a weekly seminar for PhD students.'],
    'attend a seminar; seminar paper. Large talk: lecture. Very small / personal: tutorial. Practical skills: workshop. Not a school lesson.',
    ['tutorial']
  ),
  shift: L(
    'A shift is a set block of work time: the night shift; a twelve-hour shift; shift work; work in shifts. Overtime is extra on top. Shift as a verb means move (shift the blame; the wind shifted), and a gear shift is a car sense. Do not write “I have shift” — say I am on shift / I work the early shift. NHS and warehouse English use the word constantly.',
    ['She swapped her Friday shift so she could sit the evening exam.', 'Shift work can make sleep and family meals difficult.'],
    'night / early / late shift; on shift; shift work. Extra hours: overtime. Verb shift = move. Not “I have shift”.',
    []
  ),
  shortage: L(
    'A shortage means there is not enough: a shortage of staff; a housing shortage; water shortage. Lack of is a close twin; deficit is more for money or official figures. Short of (we are short of nurses) is the adjective pattern. Do not write “a short of dentists”. News English: skills shortage, food shortage, bed shortage in hospitals.',
    ['A shortage of HGV drivers delayed supermarket deliveries.', 'The town has a chronic shortage of affordable flats.'],
    'a shortage of + noun. Twin: lack of. Adjective pattern: short of. Money gap: deficit. Not “a short of”.',
    ['lack']
  ),
  standpoint: L(
    'A standpoint is the position you judge from: from a legal standpoint; from the consumer’s standpoint; a moral standpoint. Viewpoint and point of view are close everyday twins. Standpoint sounds a little more formal and is common in essays. Do not write “in my standpoint” — use from my standpoint / in my view. It is not a physical place to stand.',
    ['From an employer’s standpoint, unpaid internships look cheap; from a graduate’s, they look unfair.', 'The article examines the policy from an environmental standpoint.'],
    'from a … standpoint. Everyday twins: viewpoint / point of view. Formal essays like standpoint. Not “in my standpoint”.',
    ['viewpoint']
  ),
  statistic: L(
    'A statistic is one number from data: a worrying statistic; official statistics (usually plural for the field). Statistics as a subject is uncountable and takes a singular verb (Statistics is taught…). Figure and number are everyday twins; statistical is the adjective. Do not say “a statistics”. In Task 1, pick two or three statistics; do not dump the table.',
    ['One statistic does not prove the policy works; look at the trend.', 'Official statistics show fewer young drivers on the road at night.'],
    'a statistic (one number); official statistics. Subject: Statistics is… Everyday: figure. Adjective: statistical. Not “a statistics”.',
    ['figure']
  ),
  subjective: L(
    'Subjective means based on personal feeling: a subjective opinion; marking can be subjective; highly subjective. Objective is the opposite (based on facts). Subject as a noun is a school topic or a person in an experiment — different. IELTS Writing wants reasons and examples, not only “I feel”. Do not write “subjective facts” — facts are the objective side.',
    ['Taste in music is subjective, but noise at 2 a.m. is still a nuisance.', 'Use the band descriptors so that scoring is less subjective.'],
    'a subjective view / judgement. Opposite: objective. School topic: subject (noun). Not “subjective facts”. Noun: subjectivity.',
    ['personal']
  ),
  subscriber: L(
    'A subscriber pays for a regular service: a newspaper subscriber; subscribe to a podcast (verb); subscriber numbers. Reader is anyone who reads, paying or not; viewer watches TV. Subscription is the noun for the payment plan. Paywall sites distinguish subscribers from casual visitors. Do not confuse it with transcriber (someone who types speech).',
    ['Subscribers get the crossword app included in the monthly fee.', 'The magazine lost subscribers when it moved all cartoons online.'],
    'a subscriber to + service. Verb: subscribe to. Plan: subscription. Free reader ≠ subscriber. TV: viewer. Not transcriber.',
    ['member']
  ),
  supervisor: L(
    'A supervisor oversees workers or a student’s project: report to your supervisor; a shift supervisor; a PhD supervisor. Manager is often more senior or more about budgets; boss is informal. Supervise is the verb; supervision is the noun. Super visor as two words is wrong. Do not use supervisor for a school head teacher.',
    ['New cashiers must not open the till without a supervisor.', 'Email your dissertation supervisor a chapter outline this week.'],
    'shift / PhD supervisor; report to your supervisor. Verb: supervise. Informal: boss. Often more senior: manager.',
    ['manager']
  ),
  symptom: L(
    'A symptom is a change that suggests illness: symptoms of flu; show symptoms; a symptom of stress. A sign can be seen by others; a symptom is often what the patient feels. Syndrome is a set of symptoms with a name; symptomatic is a later adjective. Do not diagnose yourself in an exam essay from one symptom — doctors look at clusters. COVID texts made the collocation very common.',
    ['A persistent cough can be a symptom of several different problems.', 'Staff with symptoms were told to stay home and book a test.'],
    'symptoms of + illness; show / have symptoms. What others see: sign. Named cluster: syndrome. Not one-word self-diagnosis.',
    ['sign']
  ),
  tabloid: L(
    'A tabloid is a small-format popular paper: a tabloid headline; tabloid journalism; the tabloids (plural for that kind of press). A broadsheet is larger and traditionally more serious, though many UK “qualities” now use compact size. Tabloid as an adjective can mean sensational. Do not call the BBC a tabloid — it is a broadcaster. Celebrity and scandal stories are typical tabloid fare.',
    ['The tabloids splashed the footballer’s wedding on page one.', 'Tabloid headlines often use puns and miss out little words.'],
    'the tabloids; a tabloid headline. Traditional opposite: broadsheet / quality paper. Adjective: sensational. BBC ≠ tabloid.',
    []
  ),
  tenant: L(
    'A tenant rents a home: a private tenant; tenant’s rights; a sitting tenant. Landlord is the owner; a lodger often rents a room in the owner’s house. Tenancy is the agreement (an assured shorthold tenancy in England). Do not mix tenant with lieutenant (army rank) — they only look a little similar. UK problems: deposits, notice periods, damp.',
    ['Tenants should photograph the flat on moving-in day.', 'The charity advises tenants who are behind with the rent.'],
    'private tenant; tenancy agreement. Owner: landlord. Room in owner’s home: lodger. Not lieutenant. Photos + inventory protect both sides.',
    ['renter']
  ),
  tuition: L(
    'Tuition is teaching, especially paid extra lessons, or the course fee: private tuition; tuition fees; music tuition (uncountable). Tutor is the person; teaching is the general word, while tuition often implies you pay. UK news often focuses on university tuition fees. Do not write “a tuition” for one lesson — say a lesson / a tutorial. Intuition (a feeling) is a spelling trap.',
    ['Parents who can afford tuition may widen the gap in exam results.', 'International students pay higher tuition fees at many UK universities.'],
    'private / music tuition; tuition fees (uncountable). Person: tutor. One class: a lesson. Spelling trap: intuition.',
    ['lessons']
  ),
  tutor: L(
    'A tutor teaches one student or a small group: a personal tutor; a maths tutor; personal tutor at university (pastoral role in the UK). Teacher is the school-class word; lecturer is the large university class. Tutorial is the small session. Tutor can be a verb: she tutors at weekends. Do not use tutor for a driving instructor unless that is their real title.',
    ['Her tutor made her explain each wrong answer, not just tick the key.', 'Every first-year has a personal tutor to email about problems.'],
    'personal / maths tutor; personal tutor (UK university). School class: teacher. Big university class: lecturer. Session: tutorial.',
    ['teacher']
  ),
  vacancy: L(
    'A vacancy is an available job, or a free hotel room: fill a vacancy; a job vacancy; no vacancies. Opening is an informal twin for jobs; vacant is the adjective (a vacant post; a vacant expression is empty-faced). Holiday let signs still say VACANCIES. Do not write “a vacant” as a noun. Apply for a vacancy with a CV in UK English.',
    ['The council posted a vacancy for a bilingual receptionist.', 'The B&B had no vacancies in August, even midweek.'],
    'a job vacancy; fill / advertise a vacancy. Hotel: no vacancies. Adjective: vacant. Informal job twin: opening. UK apply with a CV.',
    ['opening']
  ),
  viewer: L(
    'A viewer watches television (or sometimes online video): viewers complained; viewer figures; a TV viewer. Listener is for radio; audience can be TV, theatre, or a lecture; a spectator watches sport live. View is what you see from a window — different. Do not use viewer for someone reading a newspaper. Complaints to Ofcom often come from viewers.',
    ['Viewers wanted an apology after the live debate turned into a shouting match.', 'Overnight viewer figures fell when the soap opera changed channel.'],
    'TV viewer; viewer figures. Radio: listener. Live sport: spectator. General: audience. Newspaper: reader. Not a window view.',
    ['audience']
  ),
  viewpoint: L(
    'A viewpoint is an opinion or angle: a different viewpoint; from my viewpoint; consider both viewpoints. Point of view is a longer twin; standpoint is slightly more formal; opinion is the everyday word. In discussion essays, state your viewpoint and support it. A viewpoint can also be a place to look at a landscape (a scenic viewpoint). Do not write “according to my viewpoint that” — say in my view / my viewpoint is that.',
    ['The discussion paper asks you to compare two viewpoints on working from home.', 'From a parent’s viewpoint, the later bus is not safe.'],
    'from my viewpoint; both viewpoints. Everyday: opinion. Formal: standpoint. Scenic extra sense: a viewing place. Not “according to my viewpoint that”.',
    ['opinion']
  ),
  wage: L(
    'A wage is pay, often weekly or hourly: the minimum wage; an hourly wage; wage rise. Salary is usually monthly professional pay; wages (plural) is common in speech (overdue wages). Pay is the general word. Do not mix wage with wedge (a triangle of wood or cheese). UK news: living wage, wage growth, frozen wages.',
    ['The National Living Wage rose again in April.', 'Factory wages were paid a week late after the systems crash.'],
    'minimum / hourly wage; a wage rise. Monthly professional pay: salary. General: pay. Plural speech: wages. Not wedge.',
    ['pay']
  ),
  workload: L(
    'Workload is how much work there is: a heavy workload; reduce staff workload; workload increased (uncountable). Workload is not the same as overtime (extra hours) though a heavy workload causes them. Caseload is for social workers, GPs, or lawyers and their number of cases. Do not write “work loads” for this idea. Union talks often start from unsafe workloads.',
    ['Teachers reported an unmanageable workload during exam season.', 'Software that logs tickets made the team’s workload visible at last.'],
    'a heavy / unmanageable workload (uncountable). Extra hours: overtime. Cases: caseload. Not “work loads”.',
    []
  ),
  workshop: L(
    'A workshop is a practical training session, or a room for making and repairing things: a writing workshop; attend a workshop; a car workshop. Seminar is more discussion; lecture is a talk. In the garage sense, garage or repair shop overlaps. Workshop can be a verb in business English (workshop an idea) — optional extra. Do not use workshop for a full university module.',
    ['The CV workshop included ten minutes of live editing.', 'The bike workshop on the high street mends punctures while you wait.'],
    'attend a writing / CV workshop. Discussion class: seminar. Talk: lecture. Repair room: workshop / garage. Not a whole university course.',
    ['seminar']
  ),
}
