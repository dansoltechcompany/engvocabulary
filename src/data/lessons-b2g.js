const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2G = {
  clash: L(
    'A clash is a short fight or a sharp disagreement: a clash between unions, a clash with police. Fight is everyday and can last longer; conflict is wider. Clash is also a mismatch: colours that clash, a clash of dates in the diary, a clash of personalities. The verb is the same (the marches clashed). In speech, a row or they don’t go together is enough. Do not use clash for a mild difference of taste unless you mean they really jar.',
    ['The two protests were routed so they would not clash in the square.', 'A red tie clashed with the orange lanyard, which is the mismatch sense, not a fight.'],
    'A short fight / sharp disagreement; also a mismatch (colours, times, styles). Everyday: a row / they don’t go together. Verb: clash.',
    ['conflict']
  ),
  classify: L(
    'To classify is to put people or things into groups by type: classify waste as recycling, classify a document. Sort and group are everyday; categorise is a close cousin. Classification is the noun. In speech, put it in the right group is enough. The word is official and academic. Do not classify a person as a “type” in casual chat if you only mean describe — it can sound clinical or rude.',
    ['Staff must classify each complaint as urgent or routine before it reaches the desk.', 'The museum classified the finds by century, not by the field they came from.'],
    'Put into groups by type. Everyday: sort / group. Noun: classification. Close: categorise. Official/academic tone.',
    ['categorise']
  ),
  client: L(
    'A client uses a professional’s or company’s services: a law-firm client, a client meeting. Customer is everyday for shops; patient is for doctors; client sounds professional or businesslike. Client base is the whole set of clients. In speech, customer is often enough. Do not call a shopper in a supermarket a client unless you are joking, and do not mix client with the computer sense (a client machine) in a business essay unless that is the topic.',
    ['The architect met the client on site before changing the plans.', 'Losing one major client would wipe out the year’s surplus.'],
    'A professional’s customer. Shop: customer. Doctor: patient. Formal/business tone. Not a supermarket shopper.',
    ['customer']
  ),
  closure: L(
    'Closure is the act of shutting something, often for good: school closures, the closure of a factory. Close is the everyday verb; shutdown is a close news cousin. Closure can also mean a feeling that a painful event is finished (need closure). In speech, shutting down / an ending is enough. Do not use closure for locking a door for the night — that is closing, not a closure — and do not treat emotional closure as a legal term.',
    ['The library announced weekend closures during the roof repairs.', 'Families asked for an inquiry, not only “closure”, after the crash.'],
    'A shutting down (often permanent). Everyday: shutting. Also: a sense that something is finished. Not merely locking a door tonight.',
    ['shutdown']
  ),
  coincidence: L(
    'A coincidence is two things happening at the same time by chance: a coincidence that we met, pure coincidence. Accident is a mishap; luck is broader. Coincide is the verb (already in the dictionary). Coincidental is the adjective. In speech, by chance is enough. Do not call a planned meeting a coincidence, and do not use coincidence as proof in an essay — chance is not evidence of a cause.',
    ['It was no coincidence that both reports appeared the day before the vote.', 'Booking the same café was a coincidence; neither of us had texted.'],
    'Chance timing, not a plan. Verb: coincide. Everyday: by chance. Contrast: accident (mishap). Not evidence of cause.',
    ['chance']
  ),
  collective: L(
    'Collective means done or shared by a group: collective responsibility, a collective decision. Shared and joint are everyday cousins; individual is the opposite. A collective can also be a noun for a group that owns something together. Collect is the verb for gathering things — related root, different use. In speech, as a group is enough. Do not write collective when you only mean several people happened to agree separately.',
    ['The department issued a collective apology, not one signed by a single tutor.', 'Collective bargaining is the union talking as a body, not as fifty separate emails.'],
    'Shared by the group. Everyday: as a group / joint. Opposite: individual. Verb collect = gather things (different use).',
    ['joint']
  ),
  collision: L(
    'A collision is when two vehicles or objects hit: a collision on the motorway, a head-on collision. Crash is everyday; smash is more violent. Collision is also used for a serious clash of ideas (a collision of values). Collide is the verb. In speech, a crash is enough. Do not use collision for a mild disagreement — that is a clash or a disagreement — and keep the road sense and the ideas sense apart.',
    ['Fog caused a collision involving three lorries on the ring road.', 'The new timetable was a collision between exam dates and the sports day, which is the clash-of-plans sense.'],
    'A crash (vehicles/objects). Everyday: crash. Verb: collide. Also: a serious clash of ideas. Not a mild row.',
    ['crash']
  ),
  colony: L(
    'A colony is a territory ruled from another country: a former British colony, colonial rule (the adjective is already in the dictionary). Country is everyday and independent; overseas territory is a modern official cousin. Colony is also a group of animals living together (an ant colony). In speech, a territory ruled from abroad covers the history sense. Do not call a holiday resort a colony, and do not use colony as a casual synonym for neighbourhood.',
    ['Independence talks began twenty years after the island stopped being a colony.', 'A colony of gulls nested on the warehouse roof, which is the animal sense.'],
    'A territory ruled from abroad. Adjective: colonial. Also: animals living together. Not a holiday resort or a street.',
    []
  ),
  column: L(
    'A column is a regular newspaper or magazine article: an opinion column, a weekly column. Article is wider; editorial is the paper’s official view. Column is also a tall supporting post, or a vertical list in a table (add the numbers in the column). Columnist is the writer. In speech, a regular article / a pillar / a list down the page covers the three senses. Keep them apart: do not write “a column of the building” when you mean an opinion piece.',
    ['Her Saturday column is about housing, not celebrity gossip.', 'The figures in the right-hand column are percentages, not raw counts.'],
    'A regular newspaper article; also a pillar, or a vertical list. Writer: columnist. Keep the three senses apart.',
    ['article']
  ),
  commentator: L(
    'A commentator describes a sports event as it happens, or offers public opinions on news: a football commentator, a political commentator. Reporter gathers news; pundit is a close cousin for opinion. Commentary (already in the dictionary) is the talk itself. In speech, the person talking over the match / an opinion writer is enough. Do not call every journalist a commentator — many report without adding a running judgement.',
    ['The radio commentator went silent when the goal went in, which told listeners more than a shout.', 'A climate commentator on the panel was not the same as the reporter who had been at the talks.'],
    'Live sports describer, or a public opinion-giver. Contrast: reporter (gathers news). Noun: commentary. Not every journalist.',
    ['pundit']
  ),
  commerce: L(
    'Commerce is buying and selling on a large scale: overseas commerce, a chamber of commerce. Trade is the everyday cousin; business is wider (including non-trading work). Commercial is the adjective (already in the dictionary). E-commerce is online trade. In speech, trade is usually enough. Do not use commerce for a one-off stall at a school fair — that is selling, not commerce — and do not confuse it with commence (begin).',
    ['The river made inland commerce cheaper than the mountain road.', 'A chamber of commerce speaks for local firms, not for one shop’s till.'],
    'Large-scale trade. Everyday: trade. Adjective: commercial. Mix-up: commence (begin). Not a one-off stall.',
    ['trade']
  ),
  commissioner: L(
    'A commissioner is a senior official in charge of a public body, police force, or government role: a police commissioner, an EU commissioner. Commission (already in the dictionary) is the body, the task, or a fee. Officer is everyday and lower rank. In speech, a senior official is enough. Do not call a shop manager a commissioner, and do not confuse the person with a commission (a fee or an order to do work).',
    ['The information commissioner ruled on the data complaint.', 'The police commissioner faced questions the chief constable would once have taken.'],
    'A senior public official. Everyday: senior official. Mix-up: commission = body / fee / task. Not a shop manager.',
    []
  ),
  disrupt: L(
    'To disrupt is to interrupt a system so it cannot run as usual: disrupt trains, disrupt a meeting, disrupt the timetable. Interrupt is often a single break; disrupt suggests the whole process is thrown off. Disruption is the noun; disruptive is the adjective (a disruptive pupil). In speech, stop / throw off is enough. Do not use disrupt for a polite pause, and do not mix it with erupt (explode) or corrupt.',
    ['Fog disrupted flights, so the exam board moved the listening paper.', 'A short power cut disrupted the live stream, which is more than a pause.'],
    'Throw a process off course. Noun: disruption. Adjective: disruptive. Everyday: throw off / stop. Mix-up: erupt.',
    []
  ),
  compatible: L(
    'Compatible means able to exist or work together: compatible with the old printer, compatible software. Match and work with are everyday; incompatible is the opposite. Compatibility is the noun. In speech, it works with is enough. The pattern is compatible with, not compatible to. Do not use it only for people unless you mean they can live or work together without constant conflict — and even then, get on is more natural.',
    ['Check that the charger is compatible with this phone before you buy it.', 'The two databases were not compatible, so staff typed the same names twice.'],
    'compatible with (not “to”). Everyday: it works with. Opposite: incompatible. Noun: compatibility. People: usually get on.',
    []
  ),
  competitive: L(
    'Competitive means eager to win, or matching rivals on price or quality: a competitive player, a competitive salary, a competitive market. Ambitious is about goals; competitive is about comparison with others. Competition is the noun (already in the dictionary). In speech, they really want to win / as good as the others is enough. Do not write competitive for any busy workplace — rivalry or comparison has to be in the meaning.',
    ['Fees were competitive with the college down the road, which is the price sense.', 'A competitive streak helped in matches and hindered group projects.'],
    'Eager to win, or matching rivals (price/quality). Everyday: wants to win / as good as others. Noun: competition. Not merely “busy”.',
    []
  ),
  compliance: L(
    'Compliance is obeying a law, rule, or request: in compliance with the policy, a compliance check. Obeying and following the rules are everyday; comply is the verb (already in the dictionary). The pattern is compliance with, not compliance to. In speech, following the rules is enough. The word is official, often legal or safety-related. Do not use it for a polite yes to a cup of tea.',
    ['The lab failed a compliance audit over missing signatures, not over the science.', 'In compliance with fire rules, bags stayed under the desks during the drill.'],
    'Obeying a rule/law. compliance with (not “to”). Verb: comply. Everyday: following the rules. Official/legal tone.',
    []
  ),
  compulsory: L(
    'Compulsory means required by a rule or law: compulsory helmets, a compulsory module. Must and have to are everyday; optional and voluntary are opposites. Mandatory is a close formal cousin. In speech, you have to is enough. Do not use compulsory for something that is only strongly advised (a recommended vaccine is not automatically compulsory), and do not confuse it with compulsive (a hard-to-control habit).',
    ['Attendance at the safety briefing is compulsory; the social is not.', 'Latin is no longer compulsory, which is why the option still needs a minimum group size.'],
    'Required by rule/law. Everyday: you have to. Opposite: optional/voluntary. Close: mandatory. Mix-up: compulsive (habit).',
    ['mandatory']
  ),
  confirmation: L(
    'Confirmation is a statement or document that something is true or booked: a booking confirmation, confirmation of the result. Confirm is the verb (already in the dictionary). Proof is stronger and more legal; a reminder is weaker. Confirmation is also a Christian ceremony. In speech, they said yes / the booking email is enough. Do not treat a confirmation email as a contract on its own unless the small print says so, and do not confuse it with conformation (shape — a rare mix-up).',
    ['No confirmation arrived, so she rang the hotel before setting off.', 'Written confirmation of the grade was posted after the oral exam, not on the day.'],
    'Proof that it is true or booked. Verb: confirm. Everyday: they said yes / the booking email. Also a Christian ceremony.',
    []
  ),
  confrontation: L(
    'A confrontation is an angry face-to-face clash: avoid confrontation, a confrontation between managers. Argument is everyday and can stay verbal; fight is more physical. Confront is the verb (already in the dictionary). Confrontational is the adjective. In speech, a row / they faced each other is enough. Do not call a calm disagreement a confrontation, and do not write confrontation with a problem unless you mean facing it directly (confrontation with the truth).',
    ['Staff asked for mediation so the next meeting would not become a confrontation.', 'A confrontation at the gate delayed the coaches until stewards arrived.'],
    'An angry face-to-face clash. Verb: confront. Everyday: a row. Adjective: confrontational. Not a calm disagreement.',
    ['clash']
  ),
  drought: L(
    'A drought is a long stretch with little or no rain, so crops, rivers, and water supplies suffer: a severe drought, drought-resistant crops. Dry spell is milder and shorter; famine is about food running out, which a drought may cause but is not the same word. In speech, a long time with no rain is enough. Do not use drought for one hot afternoon, and do not mix it with draught (British: a current of air, or beer from a tap).',
    ['The drought emptied the reservoir before the summer peak.', 'Farmers stored water after last year’s drought, which is planning, not a weather forecast.'],
    'A long period with no useful rain. Everyday: a long time with no rain. Contrast: a dry spell (shorter); famine (food). Mix-up: draught.',
    []
  ),
  conspiracy: L(
    'A conspiracy is a secret plan by a group to do something illegal or harmful: a conspiracy to commit fraud, conspiracy theories. Plot is a close cousin; plan is everyday and can be honest. Conspire is the verb. In speech, a secret illegal plan is enough. Do not call every unofficial meeting a conspiracy, and remember a conspiracy theory is a claim, not proof.',
    ['They were charged with conspiracy, which is the plan, even though the theft never happened.', 'A conspiracy theory spread in the group chat faster than the official statement.'],
    'A secret illegal plan. Verb: conspire. Everyday: a secret plot. Contrast: an ordinary plan. A theory is a claim, not proof.',
    ['plot']
  ),
  constitution: L(
    'A constitution is a country’s basic law: the written constitution, unconstitutional. Charter (already in the dictionary) is a document of rights for a body; law is everyday and wider. Constitution is also a person’s physical health (a strong constitution). In speech, the country’s basic rules / someone’s health covers the two senses. Do not use constitution for a school behaviour poster, and keep the legal and health senses apart.',
    ['Amendments to the constitution need a supermajority, not a show of hands.', 'A winter swim is a test of constitution, which is the health sense, not the legal one.'],
    'A country’s basic law; also physical health. Everyday: basic rules / someone’s health. Contrast: charter (a body’s rights document).',
    []
  ),
  consultation: L(
    'A consultation is a meeting for advice, or a process of asking people before a decision: a public consultation, a GP consultation. Ask and meeting are everyday; consult and consultant are already in the dictionary. In speech, asking people first / an advice appointment is enough. The word is official. Do not call a one-way announcement a consultation — people must be able to respond — and do not confuse it with consolation (comfort after a loss).',
    ['The council ran a consultation on parking, then ignored the most common reply.', 'A twenty-minute consultation with the specialist was not the same as a diagnosis on the day.'],
    'Asking before deciding, or an advice meeting. Everyday: asking people first. Verb: consult. Mix-up: consolation (comfort). Not a one-way announcement.',
    []
  ),
  continuity: L(
    'Continuity is lasting without a break: continuity of care, a lack of continuity. Continuation is going on with the next part; continuity stresses sameness over time. Continue is the verb (already in the dictionary). In speech, it kept going without a break is enough. Film continuity is matching details between shots. Do not use continuity for a one-off sequel title unless you mean the unbroken line of a story or service.',
    ['Staff turnover broke the continuity of the mentoring scheme.', 'A continuity error put the cup on the wrong side of the table between shots.'],
    'Unbroken continuation / sameness over time. Everyday: without a break. Verb: continue. Film: matching details between shots.',
    []
  ),
  contractor: L(
    'A contractor is a person or company hired to do a job under a contract: an outside contractor, a building contractor. Employee is on the payroll; contractor is hired for a defined job. Contract is already in the dictionary. In speech, a hired company / a hired worker is enough. Do not call a permanent teacher a contractor, and do not confuse contractor with contractee (rare) or with the legal verb contract (catch an illness / make an agreement).',
    ['A contractor fitted the new boilers while the caretaker stayed on site.', 'Using a contractor saved a permanent post, and it also meant no one owned the aftercare.'],
    'A hired company/worker under a contract. Contrast: employee (on the payroll). Everyday: a hired firm. Not a permanent staff member.',
    []
  ),
  corporation: L(
    'A corporation is a large company, or a group treated in law as one body: a multinational corporation, a municipal corporation. Company is everyday and can be small; corporate is the adjective (already in the dictionary). In speech, a large company is enough. Do not use corporation for a family shop, and do not mix it with cooperation (working together) — extra o, different meaning.',
    ['The corporation moved its headquarters, which took the business rates with it.', 'A municipal corporation is the city as a legal body, not a private firm.'],
    'A large company / a legal body. Everyday: a large company. Adjective: corporate. Mix-up: cooperation (working together). Not a small shop.',
    ['company']
  ),
  correlation: L(
    'A correlation is a linked pattern between two things: a correlation between sleep and scores, a strong / weak correlation. Correlate is the verb (already in the dictionary). Cause is stronger: a correlation is not automatically a cause. Link and connection are everyday. In speech, they go together in the figures is enough. Academic writing should say correlation, not proof. Do not write “correlation therefore cause”.',
    ['There is a correlation between rainfall and delays, but the cause may be flooding, not the rain gauge.', 'A perfect correlation would be suspicious in messy human data.'],
    'A linked pattern (not automatically a cause). Verb: correlate. Everyday: they go together in the figures. Not proof of cause.',
    ['link']
  ),
  correspond: L(
    'To correspond is to match or be similar: correspond to last year’s figures, correspond with the description. Match is everyday; equivalent is a close cousin. Correspond also means to write letters (correspond with a friend). Correspondence is the noun. In speech, match / write to each other is enough. The usual pattern for “match” is correspond to; correspond with is common for letters. Do not use correspond for a spoken chat.',
    ['The witness statement did not correspond to the CCTV time stamp.', 'They corresponded for years after the exchange trip, which is the letter sense.'],
    'Match (correspond to) or write letters (correspond with). Everyday: match / write. Noun: correspondence. Not a spoken chat.',
    ['match']
  ),
  correspondence: L(
    'Correspondence is letters and emails exchanged: keep all correspondence, a correspondence course (study by post/email). Letters is everyday; correspondence is the official file. It can also mean a close similarity (a correspondence between the two accounts). Correspond is the verb. In speech, the letters and emails is enough. Do not call a single text a correspondence file, and keep the “letters” sense and the “match” sense apart.',
    ['Please file the correspondence in date order before the audit.', 'There is a close correspondence between the two translations, which is the similarity sense.'],
    'Letters and emails (official). Also: a close similarity. Verb: correspond. Everyday: the letters. Not one casual text.',
    []
  ),
  eligible: L(
    'Eligible means you meet the rules, so you may do or receive something: eligible for a grant, eligible to vote, eligible for free school meals. Allowed is everyday and wider; qualified often points to exams or training. Eligibility is the noun. In speech, allowed because you meet the rules is enough. The pattern is eligible for + noun, eligible to + verb. Do not write “eligible of”, and do not mix eligible with illegible (impossible to read).',
    ['Part-time staff are not eligible for the bonus this year.', 'You are eligible to apply at eighteen, which is the rule, not a promise you will get in.'],
    'eligible for + noun; eligible to + verb. Noun: eligibility. Everyday: allowed because you meet the rules. Mix-up: illegible.',
    []
  ),
  corrupt: L(
    'Corrupt means dishonest for money or power: a corrupt official, corrupt practices. Dishonest is everyday and wider; crooked is informal. Corrupt files are damaged so a computer cannot read them. Corruption is the noun. In speech, taking bribes / a damaged file covers the two senses. Do not call a rude person corrupt unless money or improper influence is involved, and keep the moral and the computer senses apart.',
    ['A corrupt licensing officer sold permits that should have been free.', 'The attachment was corrupt, so nobody could open the timetable — the computer sense.'],
    'Dishonest for gain; also a damaged file. Everyday: taking bribes / the file won’t open. Noun: corruption. Not merely rude.',
    ['dishonest']
  ),
  corruption: L(
    'Corruption is dishonest or illegal behaviour by people in power, especially bribes: fight corruption, a corruption scandal. Dishonesty is everyday; bribery is one form. Corrupt is the adjective/verb. In speech, taking bribes / abuse of power is enough. The word is news and official English. Do not use corruption for ordinary cheating in a card game unless power or office is involved, and do not confuse it with eruption (a volcano).',
    ['The inquiry found corruption in procurement, not in the classroom marking.', 'Anti-corruption rules banned gifts above a token value.'],
    'Dishonesty in power (often bribes). Adjective/verb: corrupt. Everyday: taking bribes / abuse of power. Contrast: ordinary cheating without office.',
    ['bribery']
  ),
  counterpart: L(
    'A counterpart is the person or thing with the same role elsewhere: her counterpart in Paris, a counterpart organisation. Equivalent is close; opposite number is a British idiom. Partner can mean someone you work with, not necessarily in the same role. In speech, the person doing the same job there is enough. Do not call a deputy a counterpart — a deputy is below you, a counterpart is beside you in another place.',
    ['The education secretary rang her counterpart before the joint statement.', 'Our counterpart school in Lyon follows a different exam calendar.'],
    'The same role in another place/organisation. Everyday: the person doing the same job there. BrE idiom: opposite number. Contrast: deputy (below you).',
    ['equivalent']
  ),
  dismissal: L(
    'Dismissal is the official end of someone’s job: unfair dismissal, dismissal for misconduct. Sack and firing are everyday and informal; redundancy is losing a job because the post disappears, not because of your fault. Dismissal is also brushing an idea aside: the dismissal of a claim. Dismiss is the verb. In speech, being sacked / brushing it aside covers the two senses. Keep them apart in writing.',
    ['She appealed against her dismissal and won her job back.', 'His dismissal of the safety report as “panic” was the attitude the inquiry later criticised.'],
    'Being sacked; also refusing to take an idea seriously. Verb: dismiss. Contrast: redundancy (the job goes). Everyday: sacked / brushed aside.',
    []
  ),
  emission: L(
    'An emission is gas, heat, or radiation sent out: carbon emissions, vehicle emissions, a radio emission. The plural is common in news and exams. Pollution is the harm; emissions are what comes out of the pipe or chimney. Emit is the verb. In speech, what is sent out / pollution from cars is enough. Do not use emission for a TV programme (that is an episode / a broadcast), and do not mix it with omission (something left out).',
    ['The city aims to cut emissions from buses by half.', 'The report measured emissions at the factory gate, not air quality in the park.'],
    'What is sent out, often pollution. Often plural: emissions. Verb: emit. Contrast: pollution (the harm); omission (left out). Not a TV episode.',
    []
  ),
  criticism: L(
    'Criticism is pointing out faults, or a serious judgement of a work: attract criticism, literary criticism. Complaint is everyday and often personal; criticism can be professional. Criticise is the verb (already in the dictionary). Constructive criticism aims to help. In speech, people saying what is wrong is enough. Do not treat all criticism as an insult, and do not confuse it with a crisis (an emergency).',
    ['The scheme drew criticism over cost, not over the aim.', 'She asked for criticism of the draft, meaning notes to improve it, not a personal attack.'],
    'Fault-finding, or a serious review. Verb: criticise. Everyday: people saying what is wrong. Helpful: constructive criticism. Mix-up: crisis.',
    []
  ),
  cultivate: L(
    'To cultivate is to grow crops or plants, or to develop a skill or relationship carefully: cultivate land, cultivate contacts. Grow and develop are everyday; foster is a close cousin for relationships. Cultivation is the noun. In speech, grow / build up carefully is enough. Do not use cultivate for a one-off hello, and do not mix it with culture (already in the dictionary) as a verb.',
    ['They cultivated the slope for vines after the drainage went in.', 'He cultivated a calm tone in emails, which is the “develop carefully” sense, not farming.'],
    'Grow plants, or develop a skill/relationship carefully. Everyday: grow / build up. Noun: cultivation. Not a one-off greeting.',
    ['foster']
  ),
  currency: L(
    'Currency is the money of a country: foreign currency, a weak currency. Money is everyday; cash is notes and coins. Currency also means widespread use (give currency to a rumour; the idea gained currency). In speech, the country’s money / becoming widely used covers the two senses. Do not use currency for a single coin in your pocket unless you mean which country’s money it is, and keep the money and the “widespread” senses apart.',
    ['Change some currency before you land; cards still fail in that town.', 'The claim gained currency online before anyone checked the minutes — the “widespread use” sense.'],
    'A country’s money; also widespread acceptance. Everyday: the money they use there. Contrast: cash (notes/coins). Keep the two senses apart.',
    ['money']
  ),
  curriculum: L(
    'A curriculum is the subjects a school or course officially teaches: the national curriculum, a packed curriculum. Syllabus is often one subject’s outline; timetable is when lessons happen. Curricula or curriculums are both used as plurals. In speech, what the course officially covers is enough. Do not call a reading list a whole curriculum, and do not confuse it with extracurricular (outside the official course).',
    ['Citizenship was added to the curriculum, which meant something else had to shrink.', 'The curriculum says “spoken assessment”; the syllabus for this class lists the topics week by week.'],
    'What a school/course officially teaches. Contrast: syllabus (one subject’s outline), timetable (when). Plural: curricula/curriculums. Not a reading list alone.',
    ['syllabus']
  ),
  custody: L(
    'Custody is the legal right to look after a child, or being held by the police: custody of the children, held in custody. Care is everyday for children; detention is a close cousin for police holding. In speech, who the child lives with / held by the police covers the two senses. Do not use custody for babysitting for an evening, and keep the family-law and the police senses apart in one sentence unless you mean both.',
    ['Joint custody meant weekdays with one parent and weekends with the other.', 'He spent a night in custody and was released without charge — the police sense.'],
    'Legal care of a child, or being held by police. Everyday: who the child lives with / held by the police. Not an evening’s babysitting. Keep the two senses apart.',
    []
  ),
  expertise: L(
    'Expertise is a high level of skill or knowledge in one field: legal expertise, expertise in tax, a lack of expertise. Expert is the person; expertise is the skill they have. Knowledge is wider and can be general; expertise is specialist. In speech, specialist skill is enough. The word is uncountable in this sense — an expertise is rare; say an area of expertise. Do not mix it with experience (time spent doing something) even though they often travel together.',
    ['The board hired her for her expertise in school funding, not for general management.', 'Experience on the till is useful; expertise in accounts is a different claim.'],
    'Specialist skill (usually uncountable). an area of expertise. Person: an expert. Contrast: experience (time doing it); general knowledge.',
    []
  ),
  delegate: L(
    'To delegate is to give part of your work or authority to someone else: delegate tasks, delegate responsibility. Pass on and give are everyday; a delegate as a noun is a person sent to a meeting (stress: /ˈdelɪɡət/). Delegation is the noun. In speech, give someone else the job is enough. Do not delegate blame without the authority, and do not use the verb for merely telling someone the news.',
    ['She delegated the bookings to a deputy and kept the budget herself.', 'A good chair delegates speaking time; a poor one dumps the minutes and disappears.'],
    'Pass work/authority to someone else. Everyday: give someone else the job. Noun: a delegate (person sent); delegation. Not merely telling news.',
    []
  ),
  deliberate: L(
    'Deliberate as an adjective means done on purpose, or slow and careful: a deliberate mistake, a deliberate pace. Accidental is the opposite of the “on purpose” sense. The verb /dɪˈlɪbəreɪt/ means to think carefully (the jury deliberated). In speech, on purpose / slow and careful is enough. Do not use deliberate as a stylish synonym for slow in every sentence, and keep the adjective stress (/dɪˈlɪbərət/) apart from the verb.',
    ['Leaving the name off the list was deliberate, not a typing slip.', 'A deliberate walk through the gallery is the “slow and careful” sense, not a plot.'],
    'On purpose, or slow and careful (adj.). Opposite of on purpose: accidental. Verb: think carefully (different vowel in the last syllable).',
    ['intentional']
  ),
  depict: L(
    'To depict is to show or describe in a picture, film, or words: depict life in a mining town, depicted as a hero. Show and describe are everyday; portray is a close cousin. Depiction is the noun. In speech, show / describe is enough. The word is common in reviews and history. Do not use depict for handing someone an object (that is give), and do not confuse it with deject (make sad — rare).',
    ['The mural depicts the 1984 strike, not a generic factory.', 'Newspapers depicted the mayor as indecisive, which is a description, not a photograph.'],
    'Show or describe (art/film/words). Everyday: show / describe. Close: portray. Noun: depiction. Not “hand over an object”.',
    ['portray']
  ),
  deploy: L(
    'To deploy is to send troops or resources into position, or to use something effectively: deploy staff, deploy a new system. Send and use are everyday; deployment is the noun. In speech, send into use / put to work is enough. The word is military, technical, and official. Do not deploy a sandwich (that is put or serve), and do not use it as a fancy synonym of use in every essay.',
    ['The trust deployed extra nurses to A&E on Friday nights.', 'They deployed the argument too early, and the committee had already moved on — the “use a tactic” sense.'],
    'Send resources into position, or use them effectively. Everyday: send / put to work. Noun: deployment. Official/military tone. Not a synonym of use for food or pencils.',
    []
  ),
  deprive: L(
    'To deprive is to take something necessary away: deprive someone of sleep, deprived of electricity. Take away is everyday; denial of is more legal. Deprivation is the noun. The pattern is deprive + person + of + thing, never deprive from. In speech, take away is enough. Do not use deprive for hiding a biscuit once — the loss should matter — and do not confuse it with derive (come from).',
    ['The outage deprived the village of heating as well as light.', 'Cutting the last bus deprived night-shift staff of a safe way home.'],
    'deprive someone of + thing (not “from”). Everyday: take away. Noun: deprivation. Mix-up: derive (come from). The loss should matter.',
    []
  ),
  deputy: L(
    'A deputy is second in rank and acts when the leader is away: a deputy head, deputy mayor. Assistant is everyday and can be lower; vice- is a title cousin (vice-chair). In speech, second-in-command is enough. The word is work and official English. Do not call every helper a deputy — a deputy has standing to act in the boss’s place — and do not confuse it with deputy as a US elected official (a different system).',
    ['The deputy signed the letters while the head was on a course.', 'A deputy chair can run the meeting; a minute-taker cannot.'],
    'Second-in-command; acts in the leader’s place. Everyday: second-in-command. Contrast: assistant (often lower). Not every helper.',
    []
  ),
  deteriorate: L(
    'To deteriorate is to become worse: health deteriorated, relations deteriorated. Get worse is everyday; worsen is a close cousin. Deterioration is the noun. In speech, get worse is enough. The word is slightly formal, common in news and medicine. Do not use deteriorate for a single bad day unless a decline is underway, and do not confuse it with detonate (explode).',
    ['Air quality deteriorated when the wind dropped and the traffic did not.', 'The truce deteriorated into sniping in the local paper, then into a walkout.'],
    'Become worse. Everyday: get worse. Noun: deterioration. Close: worsen. Formal/news/medical. Mix-up: detonate (explode).',
    ['worsen']
  ),
  devastate: L(
    'To devastate is to destroy a place or shock someone very badly: floods devastated the coast, she was devastated by the news. Destroy is everyday for places; devastate is stronger and also emotional. Devastating is the adjective; devastation is the noun. In speech, destroy / utterly shocked is enough. Do not use devastate for a small disappointment (a late bus), and do not confuse it with evaluate (judge).',
    ['The fire devastated the warehouse, which is why the stocktake became a write-off.', 'He was devastated by the rejection, which is the emotional sense, not a ruined building.'],
    'Destroy a place, or shock someone very badly. Everyday: destroy / utterly shocked. Adjective: devastating. Not a small disappointment.',
    ['destroy']
  ),
  diagnose: L(
    'To diagnose is to identify an illness or a problem from the signs: diagnose flu, diagnose a fault in the wiring. Identify and find out are everyday; diagnosis is the noun. In speech, work out what is wrong is enough. Doctors diagnose patients with a condition, or diagnose a condition in a patient — both patterns appear. Do not diagnose a person as “lazy” in serious writing, and do not confuse it with diagonal (a slanting line).',
    ['The garage diagnosed a sensor fault in ten minutes and a wait of three days for the part.', 'She was diagnosed with asthma after the third night-time attack, not after one cough.'],
    'Identify an illness/problem from signs. Noun: diagnosis. Everyday: work out what is wrong. Patterns: diagnose a condition / diagnose someone with. Mix-up: diagonal.',
    []
  ),
}
