const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1K = {
  data: L(
    'Data are facts and figures used for analysis. UK news and exams usually treat data as uncountable (the data is / the data shows), though some scientists still say the data are. Datum is the rare singular. Information is wider and not always numerical. Do not write “a data” or “datas”. Exam reports: data on remarks; census data.',
    ['The exam board published data on remark requests.', 'Handle patient data under GDPR, not on a personal laptop.'],
    'Usually uncountable in UK exams/news: the data shows. Rare singular: a datum. Wider: information. Not “datas”. Related: database.',
    ['information']
  ),
  database: L(
    'A database is an organised computer store of records you can search: a student database; update the database. Data is the information inside it. Spreadsheet is everyday for a simple table. Do not call a paper filing cabinet a database. Work and exams: the results database was down.',
    ['Staff could not log exam marks because the database was down.', 'Search the jobs database by postcode, not by keyword only.'],
    'a student / results database; update / search a database. Contents: data. Simple table: a spreadsheet. Not a paper cabinet. IT outages in schools.',
    []
  ),
  deadly: L(
    'Deadly means likely to cause death: a deadly virus; deadly force. It also means extremely serious or effective (deadly serious; a deadly accurate pass). Fatal is a close twin for accidents. Lethal is more technical. Do not call a boring lesson deadly in an essay unless you mean it kills — use dull. UK news: deadly stabbing; a deadly combination of heat and housing.',
    ['The report warned of a deadly mix of heat and poor housing.', 'The striker was deadly from the penalty spot, which is the “effective” sense.'],
    'a deadly virus / mix / weapon. Close (death): fatal / lethal. Informal: deadly dull. Not a mild inconvenience. News: deadly force.',
    ['fatal']
  ),
  dealer: L(
    'A dealer buys and sells: a car dealer; an art dealer; a drug dealer. Trader is close in finance; seller is everyday. Deal is already in the dictionary as the wider verb/noun. Do not call a shop assistant a dealer. Crime news uses dealer for illegal drugs without extra explanation.',
    ['The car dealer offered a twelve-month warranty.', 'Police arrested a dealer after the county-lines inquiry.'],
    'a car / art / drug dealer. Finance twin: trader. Everyday: seller. Related: deal. Not a till worker. Crime: drug dealer.',
    ['trader']
  ),
  death: L(
    'Death is the end of life (often uncountable; a death is also used in reports). Die is the verb; dead is the adjective. Fatality is more official for accidents. Do not write “a death of” for die of — say death from or die of. UK: a death in custody; death certificate.',
    ['The inquest recorded a death from industrial disease.', 'Road deaths fell after the new speed cameras, which is the plural news form.'],
    'death from; a death in custody. Verb: die. Adjective: dead. Official: a fatality. Certificate: a death certificate. Not “death of cancer” — death from.',
    []
  ),
  decent: L(
    'Decent means good enough, or kind and morally acceptable: a decent wage; decent housing; a decent person. Adequate is more about quantity; respectable is about social approval. Indecent is the opposite for behaviour and images. Do not use decent for “very good” in a formal essay — that is good or high-quality. Work: a decent break; decent notice.',
    ['Workers asked for a decent wage and safe hours.', 'The room was decent, not luxurious, which is the “good enough” sense.'],
    'a decent wage / home / chance. Close (enough): adequate. Opposite (behaviour): indecent. Not “excellent”. Work/housing news.',
    ['adequate']
  ),
  declare: L(
    'To declare is to say something officially: declare a strike; declare an interest; declare goods at customs. Announce is a close twin for public news. Declaration is the noun (already in the dictionary). Do not mix declare with decline (go down / refuse). Tax: declare income; customs: nothing to declare.',
    ['The union declared a strike after talks collapsed.', 'You must declare gifts above the limit on the register of interests.'],
    'declare a strike / an interest / income. Noun: declaration. Close: announce. Mix-up: decline. Customs: nothing to declare.',
    ['announce']
  ),
  dedicate: L(
    'To dedicate time or effort is to give it to a purpose: dedicate yourself to; dedicate evenings to revision. Devote is a close twin. Dedicated is the adjective (a dedicated team). It also means to name a book or building in honour of someone. Do not write “dedicate at doing” — use to + noun/-ing.',
    ['She dedicated evenings to the dissertation after the night shift.', 'The wing is dedicated to staff who died of Covid, which is the naming sense.'],
    'dedicate time / yourself to. Adjective: dedicated. Close: devote. Naming: dedicated to + person. Pattern: to + noun/-ing, not “at doing”.',
    ['devote']
  ),
  deeply: L(
    'Deeply means to a great degree, especially feelings or thought: deeply divided; deeply concerned; think deeply. Deep is the adjective (already in the dictionary). Extremely is wider. Do not use deeply with every adjective — deeply tall is wrong. News: a community deeply split by a bypass.',
    ['The community was deeply divided over the bypass.', 'She was deeply sorry, which is stronger than a routine apology.'],
    'deeply + feeling/thought adjective (concerned, divided, sorry). Adjective: deep. Not “deeply tall”. Collocation: deeply rooted.',
    []
  ),
  defeat: L(
    'To defeat is to win against someone: defeat a bill; defeat a team. As a noun it is a loss. Beat is more everyday; lose is from the other side. Victory is the opposite noun. Do not mix defeat with defect (a fault). Commons news: the amendment was defeated.',
    ['The amendment was defeated in the Commons by twelve votes.', 'A 3–0 defeat ended their unbeaten run, which is the noun.'],
    'defeat a bill / an opponent. Noun: a defeat. Everyday: beat. Opposite noun: victory. Mix-up: defect. Politics: a government defeat.',
    ['beat']
  ),
  defend: L(
    'To defend is to protect a person, place, or idea: defend a policy; defend yourself. Defence is the noun (UK spelling, already in the dictionary). Attack is a common opposite. Defend against / defend from both occur; against is safer in exams. Court: defend a client; sport: defend a title.',
    ['The minister had to defend the policy on live radio.', 'The back four defended well after the red card.'],
    'defend a policy / title / client. Noun: defence (UK). Opposite: attack. Pattern: defend against. Court/sport/politics.',
    []
  ),
  defensive: L(
    'Defensive means used for protection: a defensive wall; defensive driving. It also describes a person who treats questions as attacks (get defensive). Offensive is a common opposite in sport and war. Defence is the noun. Do not call a careful answer defensive unless the person is over-protecting themselves.',
    ['The club sat in a defensive shape after the red card.', 'He became defensive when the auditor asked about receipts.'],
    'a defensive strategy / wall. Person: get defensive. Opposite (sport/war): offensive. Noun: defence. Driving: defensive driving.',
    []
  ),
  define: L(
    'To define is to say exactly what a word or idea means: define your terms; a defined role. Definition is the noun (already in the dictionary). Explain is wider. Do not start every essay with a dictionary define unless the question asks. Maths: define x as…',
    ['Define your terms in the first paragraph of the essay.', 'The contract defines overtime as anything after 37 hours.'],
    'define a term / a role. Noun: definition. Wider: explain. Essay: define your terms. Maths: define x as.',
    []
  ),
  definite: L(
    'Definite means clear and certain: a definite date; a definite no. Definitely is the adverb (already in the dictionary). Definitive means the best or final version — not the same word. Vague is an opposite. Do not write “a definite of”. Exam boards: no definite date for the resit.',
    ['There is no definite date for the resit yet.', 'We need a definite answer by noon, not “maybe”.'],
    'a definite date / answer / plan. Adverb: definitely. Mix-up: definitive (final/best). Opposite: vague. Not “a definite of”.',
    ['certain']
  ),
  deliberately: L(
    'Deliberately means on purpose: deliberately ignore; deliberately misleading. Deliberate is the adjective (already in the dictionary). Accidentally is the opposite. Intentionally is a close twin. Do not spell it delibarately. Inquests and exams both ask whether harm was deliberate.',
    ['The witness said the driver had braked deliberately.', 'The graph was deliberately cropped to hide the drop.'],
    'deliberately + verb. Adjective: deliberate. Opposite: accidentally. Close: intentionally. Spelling: deliberately (two e’s in -ately).',
    ['intentionally']
  ),
  democratic: L(
    'Democratic means based on equal votes and public choice: a democratic vote; a democratic country. Democracy is the noun (already in the dictionary). Undemocratic is the opposite. It also means sharing decisions fairly at work. Do not call a staff chat democratic if only the manager decides. Unions: a democratic ballot.',
    ['The union held a democratic ballot before the strike.', 'Parents wanted a more democratic say in the uniform policy.'],
    'a democratic vote / process / country. Noun: democracy. Opposite: undemocratic. Workplace: a democratic decision. Not a private chat among managers.',
    []
  ),
  demonstration: L(
    'A demonstration is a public protest: a demonstration against cuts. It is also a practical showing of how something works (a product demonstration). Demonstrate is the verb (already in the dictionary). Protest and march are close for the street sense. Do not call a private meeting a demonstration. UK news: a demonstration outside the town hall.',
    ['A demonstration outside the town hall delayed traffic.', 'The teacher gave a demonstration of the titration, which is the classroom sense.'],
    'a demonstration against / outside. Classroom/work: a demonstration of + noun. Verb: demonstrate. Close (street): protest / march.',
    ['protest']
  ),
  dense: L(
    'Dense means packed tightly: dense housing; a dense crowd. Fog can be dense. It also means hard to understand (dense prose). Density is a more technical noun (often C1 in science). Thick is everyday for fog. Do not call a person dense in formal writing — it is an insult meaning stupid.',
    ['Dense housing near the station raised overcrowding concerns.', 'Dense fog closed the airport, which is the weather sense.'],
    'dense housing / fog / crowd. Prose: dense = hard to read. Insult (avoid in essays): a dense person. Technical noun: density.',
    ['thick']
  ),
  deposit: L(
    'A deposit is money paid in advance to reserve something, or money paid into a bank: a rent deposit; deposit a cheque. Down payment is close for buying. Refundable deposits should be returned if you meet the conditions. Do not confuse deposit with depot (a warehouse). Tenancy: five weeks as a deposit.',
    ['The landlord asked for five weeks of rent as a deposit.', 'Deposit the bursary into the account named on the form.'],
    'a rent / security deposit; pay a deposit. Bank: deposit money. Mix-up: depot. Tenancy deposit schemes in England.',
    []
  ),
  depress: L(
    'To depress can mean to make someone very sad, or to push a level down: depress demand; depress a button. Depression is the noun. Sad is everyday for mood. Do not diagnose a classmate as depressed in an essay without care — use the economic sense in business papers. Rates may depress high-street spending.',
    ['Higher rates may depress spending in the high street.', 'The news depressed her, which is the mood sense — keep it careful in exams.'],
    'depress demand / prices / a lever. Mood: make sad. Noun: depression. Business papers often use the “push down” sense. Button: depress = press.',
    []
  ),
  depression: L(
    'Depression is a medical condition of lasting low mood, and also a slump in trade: treat depression; the 1930s Depression. Depress is the verb. Recession is a related economics word. Uncountable in many medical uses; a depression is also used. Do not joke about depression in exam writing. NHS: talking therapies for depression.',
    ['The clinic offers support for depression after redundancy.', 'A trade depression followed the factory closures, which is the economic sense.'],
    'Medical (often uncountable): depression. Economic: a depression / slump. Related: recession. Verb: depress. Serious register; not a joke.',
    []
  ),
  depth: L(
    'Depth is how deep something is, or how thorough an analysis is: the depth of the river; lack depth; in depth. Deep is the adjective. Height and width are other dimensions. Do not write “a depth research” — say in-depth research. Inquiries criticised for a lack of depth.',
    ['The inquiry lacked depth because witnesses were rushed.', 'Study the graph in depth before you write the comparison.'],
    'the depth of; in depth; a lack of depth. Adjective: deep. Compound: in-depth (often hyphen before a noun). Not “a depth research”.',
    []
  ),
  designer: L(
    'A designer plans how things look or work: a graphic designer; a fashion designer. Design is the verb/noun (already in the dictionary). Designer clothes means expensive branded clothes. Architect designs buildings at a different scale. Job ads: UX designer; set designer.',
    ['The college needs a graphic designer for the prospectus.', 'Designer labels were stolen from the warehouse, which is the branded-clothes sense.'],
    'a graphic / fashion / UX designer. Verb/noun: design. Branded: designer clothes. Buildings: architect. Work: job titles.',
    []
  ),
  desire: L(
    'A desire is a strong wish: a desire for change; a desire to + verb. Want is everyday; wish can be weaker. As a verb, desire is slightly formal. Uncountable in some uses (show desire). Do not write “desire of doing” — use to-infinitive. Manifestos: a desire for decent housing.',
    ['There is a clear desire for longer library hours before exams.', 'She desired a transfer, which sounds formal — wanted is everyday.'],
    'a desire for + noun; a desire to + verb. Everyday: want. Formal verb: desire. Not “desire of doing”. Uncountable: little desire to.',
    ['wish']
  ),
  desperate: L(
    'Desperate means needing something very badly, or ready to take extreme risks: desperate for staff; a desperate situation. Desperately is the adverb. Urgent is close for time. Do not call a mild wish desperate. NHS and schools: desperate shortages.',
    ['Hospitals were desperate for extra night staff.', 'It was a desperate attempt to hit the word count, which is the “extreme” sense.'],
    'desperate for + noun; a desperate situation / attempt. Adverb: desperately. Close (time): urgent. Not a mild preference. News: desperate shortage.',
    []
  ),
  desperately: L(
    'Desperately means with urgent need, or extremely: desperately short of; desperately unhappy. Desperate is the adjective. Extremely is wider. Do not use it for a small problem. Rural services: desperately short of drivers.',
    ['Rural routes are desperately short of drivers.', 'She needed the remark desperately after missing the university offer.'],
    'desperately short of / needed. Adjective: desperate. Wider: extremely. Collocation: desperately try / hope. Not a minor delay.',
    []
  ),
  destruction: L(
    'Destruction is severe damage that ruins something (usually uncountable): destruction of habitats; widespread destruction. Destroy is the verb (already in the dictionary). Damage can be milder and repairable. Do not write “a destruction” for every event — a wave of destruction or the destruction of is neater. Storms and war reporting.',
    ['Storms caused widespread destruction along the coast.', 'The destruction of records made the inquiry slower.'],
    'Uncountable: destruction; the destruction of. Verb: destroy. Milder: damage. Not always “a destruction”. News: widespread destruction.',
    []
  ),
  detailed: L(
    'Detailed means including many facts: a detailed plan; detailed feedback. Detail is the noun (already in the dictionary). Thorough is a close twin. Vague is an opposite. Exam rubrics: a detailed comparison, not a list. Do not write “detailled” (one l in UK/US detailed).',
    ['The examiner asked for a detailed comparison, not a list.', 'Keep minutes detailed enough that a new member can follow.'],
    'a detailed plan / account / comparison. Noun: detail. Close: thorough. Opposite: vague. Spelling: detailed (one l). Rubrics love detailed.',
    ['thorough']
  ),
  detective: L(
    'A detective is a police officer who investigates crime: a detective inspector; detectives appealed for witnesses. Detect is the verb (already in the dictionary). Officer is wider. Do not call every police officer a detective. Crime news: detectives from CID.',
    ['Detectives appealed for dash-cam footage after the crash.', 'A detective inspector led the fraud inquiry.'],
    'a detective; detectives appealed. Verb: detect. Rank: detective inspector/constable. Wider: a police officer. Not a traffic warden.',
    []
  ),
  determination: L(
    'Determination is refusing to give up (usually uncountable): show determination; determination to + verb. Determined is the adjective. Stubborn can be negative. Decide/determine as verbs are already in the dictionary with a “find out / decide” sense — not the same as this noun. Exam comments: determination in the resit.',
    ['Her determination to finish the course survived two resits.', 'The team showed determination after going a goal down.'],
    'Uncountable: determination; determination to + verb. Adjective: determined. Negative twin: stubborn. Not “a determination” for willpower.',
    []
  ),
  determined: L(
    'Determined means firmly decided: determined to + verb; a determined effort. Determination is the noun. Stubborn is less positive. Do not mix with the verb determine (find out / officially decide). Job references: a determined candidate.',
    ['She is determined to complete the apprenticeship.', 'A determined effort in the last paper lifted the overall grade.'],
    'determined to + verb; a determined effort / campaign. Noun: determination. Negative: stubborn. Mix-up: determine (verb = decide/find out).',
    []
  ),
  developer: L(
    'A developer builds housing or writes software: a housing developer; a software developer. Develop is the verb (already in the dictionary). Builder is more hands-on for trades. Do not call a landlord a developer unless they are building. Planning news: the developer promised affordable units.',
    ['The housing developer promised more affordable units on the site.', 'A software developer fixed the results portal overnight.'],
    'a housing / property / software developer. Verb: develop. Trades: builder. Planning inquiries name the developer. Not every landlord.',
    []
  ),
  diagram: L(
    'A diagram is a simple drawing that shows how something works: label the diagram; a flow diagram. Picture and photo are more realistic. Graph and chart are for numbers. Exam papers: complete the diagram; there is a diagram below. Do not call a photograph a diagram.',
    ['Label the diagram of the water cycle in the science paper.', 'The fire-exit diagram by the lift was out of date.'],
    'a diagram of; label / complete the diagram. Numbers: graph / chart. Realistic image: photo. Science and manuals. Not a photograph.',
    []
  ),
  diplomat: L(
    'A diplomat represents a country abroad: a senior diplomat; diplomatic talks. Diplomatic is the adjective (already in the dictionary). Ambassador is a specific senior post. Do not call a tourist a diplomat. News: diplomats called for a ceasefire.',
    ['The diplomat called for a ceasefire after the border clash.', 'Several diplomats were expelled, which is a standard news verb with this noun.'],
    'a diplomat; diplomatic talks. Adjective: diplomatic. Senior post: ambassador. Embassy staff. Not a holiday-maker. News: expel diplomats.',
    []
  ),
  directly: L(
    'Directly means with nothing in between, or immediately, or frankly: write directly to; directly after; ask directly. Direct is the adjective/verb (already in the dictionary). Straight is everyday for direction. Do not mix with director. Complaints: contact the board directly.',
    ['Write directly to the exam board if the script is missing.', 'She asked directly whether the shift was unpaid, which is the frank sense.'],
    'directly to + person; directly after. Adjective: direct. Everyday: straight. Senses: no go-between / immediately / frankly. Mix-up: director.',
    []
  ),
  disabled: L(
    'Disabled describes a person with a condition that makes daily activities harder. Careful UK style prefers disabled people, not “the disabled” as a noun. Disability is the noun (already in the dictionary, often B2). Accessible is about places and services. Do not use outdated insults. Stations: step-free access for disabled passengers.',
    ['The station still lacks step-free access for disabled passengers.', 'Disabled staff asked for a workplace adjustment, not a pep talk.'],
    'disabled people / passengers / staff. Noun: disability. Places: accessible. Avoid “the disabled” in many style guides. Equality Act: reasonable adjustments.',
    []
  ),
  disappear: L(
    'To disappear is to become impossible to see or find, or to stop existing: funding may disappear; the file disappeared. Vanish is stronger and more sudden. Appearance is not a simple opposite. Do not write “disappear someone” in everyday English (that is a rare political sense). Budgets: a line of funding disappears.',
    ['Funding for the youth club may disappear in the next budget.', 'The witness disappeared before the trial, which is the “cannot be found” sense.'],
    'disappear from; funding / a file disappears. Stronger: vanish. Not usually a transitive verb in exams. Related: appearance (not a clean opposite).',
    ['vanish']
  ),
  disappointed: L(
    'Disappointed means sad because something was worse than hoped: disappointed with / at / that. Disappointing describes the thing; disappointment is the noun. Upset is wider. Do not write “disappointed of”. Results day: candidates were disappointed when the portal crashed.',
    ['Candidates were disappointed when the results portal crashed.', 'She was disappointed with the feedback, not with the teacher personally.'],
    'disappointed with / at / that. Thing: disappointing. Noun: disappointment. Not “disappointed of”. Pattern: disappointed to hear that.',
    []
  ),
  disappointing: L(
    'Disappointing describes a thing that is worse than hoped: a disappointing result; disappointing turnout. Disappointed describes the person. Poor is everyday. Do not call a tragedy merely disappointing — that is too weak. Elections: disappointing turnout on a wet day.',
    ['Turnout was disappointing after a wet polling day.', 'A disappointing mock is useful if the feedback is specific.'],
    'a disappointing result / performance / turnout. Person: disappointed. Everyday: poor. Too weak for a disaster. Mocks: disappointing but useful.',
    []
  ),
  disappointment: L(
    'A disappointment is a person or thing that disappoints, or the feeling itself: a disappointment; hide your disappointment. Disappointed/disappointing are the adjectives. Shame can be everyday in UK speech (a shame). Uncountable for the feeling in some uses. Do not write “disappointment of failing” — disappointment at / about is safer.',
    ['Missing the grade boundary was a disappointment after months of mocks.', 'There was disappointment at the delayed refunds, which is the feeling.'],
    'a disappointment; disappointment at / about. Adjectives: disappointed / disappointing. Informal UK: a shame. Not “disappointment of doing”.',
    []
  ),
  discourage: L(
    'To discourage is to make someone less willing: discourage someone from -ing. Encourage is the opposite (already in the dictionary). Put off is everyday. Do not write “discourage to do”. High rents discourage staff from taking city posts.',
    ['High rents discourage nurses from taking posts in the city.', 'Teachers should not discourage questions in the science practical.'],
    'discourage someone from -ing. Opposite: encourage. Everyday: put off. Not “discourage to do”. Policy: fees may discourage applicants.',
    []
  ),
  dishonest: L(
    'Dishonest means not truthful, ready to lie or cheat: a dishonest advert; dishonest conduct. Honest is the opposite (already in the dictionary). Fraudulent is stronger and more legal. Do not call a mistake dishonest unless there was intent. ASA: ads banned as dishonest.',
    ['The advert was banned as dishonest about the interest-free period.', 'Dishonest conduct in an exam can mean disqualification.'],
    'a dishonest claim / advert / person. Opposite: honest. Legal/stronger: fraudulent. Intent matters. Exams: dishonest conduct.',
    []
  ),
  distinction: L(
    'A distinction is a clear difference, or a very high grade: draw a distinction between; pass with distinction. Distinct is the adjective (already in the dictionary). Difference is everyday. Do not mix with extinction. Essays: a distinction between correlation and cause.',
    ['Draw a distinction between correlation and cause in the essay.', 'She passed the diploma with distinction, which is the grade sense.'],
    'a distinction between A and B; draw a distinction. Grade: a distinction. Adjective: distinct. Everyday: difference. Mix-up: extinction.',
    ['difference']
  ),
  disturb: L(
    'To disturb is to interrupt someone, or to upset a place or person: do not disturb; disturb the peace. Interrupting is everyday for people. Disturbing is the adjective. Do not mix with distribute. Exam halls: do not disturb candidates.',
    ['Please do not disturb candidates during the listening paper.', 'Works will disturb residents at night, which is why a licence was needed.'],
    'disturb someone / the peace / a habitat. Sign: Do not disturb. Adjective: disturbing. Mix-up: distribute. Noise: disturb residents.',
    ['interrupt']
  ),
  disturbing: L(
    'Disturbing means worrying or shocking: disturbing footage; a disturbing trend. Upset is weaker; shocking is stronger. Disturb is the verb. Do not use it for a slightly annoying noise — that is just noisy. Documentaries: disturbing images with a warning.',
    ['The documentary showed disturbing footage from the factory.', 'A disturbing rise in absences followed the bus cuts.'],
    'disturbing footage / findings / trend. Verb: disturb. Weaker: upsetting. Stronger: shocking. Content warnings. Not a squeaky chair.',
    ['shocking']
  ),
  divorce: L(
    'Divorce is the legal end of a marriage: file for divorce; after the divorce. Separate is living apart without that legal step. Marry is not a clean opposite (you marry a person). Do not use divorce for leaving a job — that is resign. Advice services: housing after divorce.',
    ['The charity advises parents on housing after divorce.', 'They divorced after ten years, which is the verb.'],
    'a divorce; file for / get a divorce. Verb: divorce. Related: separate. Job: resign, not divorce. Family courts and housing advice.',
    []
  ),
  dramatically: L(
    'Dramatically means suddenly and by a large amount: fall dramatically; change dramatically. Dramatic is the adjective (already in the dictionary). Sharply is a close twin for numbers. Do not use it for a tiny change. Waiting lists fell dramatically after extra clinics.',
    ['Waiting lists fell dramatically after the extra clinics opened.', 'Costs rose dramatically, which needs a figure in a serious essay.'],
    'rise / fall / change dramatically. Adjective: dramatic. Numbers twin: sharply. Give a figure in essays. Theatre sense is rarer in news.',
    ['sharply']
  ),
  eager: L(
    'Eager means wanting to do something very much: eager to + verb; eager for news. Keen is a close UK twin. Enthusiastic is already in this batch as a stronger display of interest. Do not write “eager of”. Trainees eager to start a placement.',
    ['Trainees were eager to start the paid placement.', 'Voters were eager for a date, not another slogan.'],
    'eager to + verb; eager for + noun. Close: keen. Related: enthusiastic. Not “eager of”. Positive in job references.',
    ['keen']
  ),
  earthquake: L(
    'An earthquake is a sudden shaking of the ground: a powerful earthquake; earthquake damage. Tremor is smaller. Tsunami may follow under the sea but is not the same word. Do not call a political shock an earthquake in a careful essay unless you mark it as metaphor. Aid and geology reports.',
    ['The earthquake damaged schools across the region.', 'A tremor is weaker than an earthquake, which is why the alert stayed yellow.'],
    'an earthquake; earthquake damage / risk. Smaller: a tremor. Related: tsunami (sea wave). Metaphor: a political earthquake (flag it).',
    []
  ),
  ease: L(
    'To ease is to make a problem less severe: ease tension; ease congestion. As a noun, ease is lack of difficulty (with ease). Easy is the adjective (already in the dictionary). Reduce is wider. Do not mix with ease as a brand-like misspelling of easy. Talks aimed to ease tension.',
    ['Talks aimed to ease tension before the ballot.', 'She passed the theory test with ease, which is the noun.'],
    'ease tension / pain / congestion. Noun: with ease. Adjective: easy. Wider: reduce. Particle: ease off (become less).',
    []
  ),
  economical: L(
    'Economical means not wasteful with money, time, or fuel: an economical boiler; economical use of space. Economic (already in the dictionary) means to do with the economy. Do not mix them — an economic policy is not always economical. School bills: an economical boiler.',
    ['An economical boiler cut the school’s gas bill.', 'The trip was not economical once you added the hotel, which is the waste sense.'],
    'economical with money / fuel. Mix-up: economic (the economy). Noun: economy. Phrase: economical with the truth (evasive). Exam trap: economic vs economical.',
    []
  ),
  edit: L(
    'To edit is to correct and cut text, film, or audio: edit an essay; edit a podcast. Edition is a published version. Editor is the job (already in the dictionary). Cut is everyday. Do not call spellcheck alone an edit if you have not checked meaning. Abstracts: edit to the word limit.',
    ['Edit the abstract so it fits the word limit.', 'The film was edited for a schools broadcast, which is the cutting sense.'],
    'edit a text / film / file. Person: editor. Version: edition. Everyday: cut / check. Word limits. Not only running a spellchecker.',
    []
  ),
  edition: L(
    'An edition is a particular version of a book, paper, or programme: the latest edition; a Sunday edition. Edit is the verb. Copy is one physical book. Do not call a reprint with no changes a new edition unless the publisher does. Style guides: use the latest edition.',
    ['Use the latest edition of the style guide for references.', 'The evening edition carried a correction, which is the newspaper sense.'],
    'the latest / first / revised edition. Verb: edit. One book: a copy. Academic: cite the edition. News: morning/evening edition.',
    []
  ),
  educate: L(
    'To educate is to teach over time, in school or in a campaign: educate the public; educate patients. Education is the noun (already in the dictionary). Teach is everyday and often more specific to a lesson. Do not write “educate to someone” — educate someone about. Public-health campaigns educate patients.',
    ['The trust wants to educate patients about antibiotic use.', 'Schools educate children; a one-hour briefing only informs them.'],
    'educate someone about / in. Noun: education. Everyday: teach. Pattern: educate the public. Not “educate to”. Campaigns vs single lessons.',
    ['teach']
  ),
  effectively: L(
    'Effectively means in a way that works, or in practice: work effectively; effectively a ban. Effective is the adjective (already in the dictionary). Efficient is about low waste, not the same. Do not mix with in effect. Rotas that deal more effectively with night demand.',
    ['The new rota dealt more effectively with night-time demand.', 'The rule is effectively a ban on phones, which is the “in practice” sense.'],
    'work / deal / communicate effectively. Adjective: effective. Mix-up: efficient (less waste). Discourse: effectively = in practice. Related: in effect.',
    []
  ),
  elder: L(
    'Elder means older, especially of two in a family: her elder sister. Elderly (already in the dictionary) is a polite word for old people as a group. Older is more general and safer for people outside the family. As a noun, an elder is a respected older person. Do not use elder for buildings — that is older.',
    ['The elder sibling signed the tenancy as guarantor.', 'Community elders spoke at the meeting, which is the noun.'],
    'elder brother / sister (of two). Group: elderly people. General: older. Noun: an elder. Not for objects. Mix-up: elderly vs elder.',
    ['older']
  ),
  elect: L(
    'To elect is to choose by voting: elect a chair; elect a government. Election is the noun (already in the dictionary). Vote is the everyday action. Select is wider and not always by ballot. AGMs: members elect a chair. Do not write “elect for president” in UK English — elect someone (as) chair.',
    ['Members will elect a new chair at the AGM.', 'Councillors are elected every four years in this authority.'],
    'elect someone (as) chair / leader. Noun: election. Everyday: vote. Wider: select. UK: elect a government, not “elect for”.',
    []
  ),
  electrical: L(
    'Electrical means to do with electricity: an electrical fault; electrical goods. Electric is often about things powered by electricity (an electric car). Electricity is the noun (already in the dictionary). Electronic is about circuits and chips. Exam halls close after an electrical fault. Do not mix electrical with electronic.',
    ['An electrical fault closed the exam hall for an hour.', 'Electrical goods need a different recycling point from general waste.'],
    'an electrical fault / engineer / fire. Powered device: often electric. Circuits: electronic. Noun: electricity. Exam trap: electric vs electrical vs electronic.',
    []
  ),
  embarrassment: L(
    'Embarrassment is awkward shame, or a thing that causes it: an embarrassment for the department; hide your embarrassment. Embarrassed/embarrassing are already in the dictionary. Shame can be stronger and moral. Uncountable for the feeling; a countable embarrassment for a public mess. Leaked emails as an embarrassment.',
    ['The leaked email was an embarrassment for the department.', 'She laughed to cover her embarrassment in the oral exam.'],
    'an embarrassment for; hide embarrassment. Adjectives: embarrassed / embarrassing. Stronger: shame. Countable: a public embarrassment. Orals: cover embarrassment.',
    []
  ),
  encouragement: L(
    'Encouragement is support that builds confidence (often uncountable): a word of encouragement; encouragement from staff. Encourage is the verb (already in the dictionary). Praise is about what went well. Do not write “an encouragements”. A short note of encouragement before an appeal.',
    ['A short note of encouragement helped her submit the appeal.', 'Pupils need encouragement, not only a mark out of 40.'],
    'Uncountable: encouragement; a word / note of encouragement. Verb: encourage. Related: praise. Opposite family: discourage. Not “encouragements” usually.',
    []
  ),
  enemy: L(
    'An enemy opposes you: an enemy of; public enemy. Opponent is for sport and debate; rival is for competition. Ally is a common opposite. Time is the enemy is an idiom. Do not call a classmate an enemy in a serious essay. Misinformation as an enemy of a fair election.',
    ['Misinformation is an enemy of a fair election.', 'They shook hands with opponents, not enemies, after the debate.'],
    'an enemy of; make an enemy of. Sport/debate: opponent. Opposite: ally. Idiom: time is the enemy. Stronger than rival. Not a mild critic.',
    ['opponent']
  ),
  engaged: L(
    'Engaged means busy, or involved, or promised to marry: the line is engaged; engaged in work; they got engaged. Engage is the verb (already in the dictionary). Busy is everyday for the phone/work sense. Do not mix with enraged (furious). Switchboards: the line was engaged.',
    ['The line was engaged, so she emailed the office instead.', 'Students stayed engaged in the seminar, which is the involved sense.'],
    'engaged in; the line is engaged; get engaged (marriage). Verb: engage. Everyday: busy. Mix-up: enraged. Three senses — pick one in the sentence.',
    []
  ),
  entertainment: L(
    'Entertainment is shows, films, and other amusements (often uncountable): live entertainment; the entertainment industry. Entertain is the verb. Fun is everyday. Do not write “an entertainment” for every gig — a piece of entertainment or entertainment is neater. Licensing: live entertainment past hours.',
    ['Live entertainment in the square ran past the licensed hours.', 'The budget for entertainment was cut, which is the industry sense.'],
    'Uncountable: entertainment; live entertainment. Verb: entertain. Everyday: fun. Industry: entertainment industry. Licensing and festivals.',
    []
  ),
  enthusiastic: L(
    'Enthusiastic means showing a lot of excitement and interest: enthusiastic about; an enthusiastic volunteer. Enthusiasm is the noun (already in the dictionary). Keen and eager are close. Do not be enthusiastic in an essay without a reason. Governors enthusiastic about extra tutoring.',
    ['Governors were enthusiastic about the extra tutoring hours.', 'An enthusiastic reference still needs examples, not only adjectives.'],
    'enthusiastic about / support. Noun: enthusiasm. Close: keen / eager. Give a reason in speaking tests. References: enthusiastic but evidenced.',
    ['keen']
  ),
  entry: L(
    'Entry is going in, or an item on a list: no entry; an entry in a diary; a competition entry. Enter is the verb (already in the dictionary). Entrance is the door/place. Access is the right or ability to use something. Exam halls: late entry is not allowed. Do not mix entry with entree (a meal).',
    ['Late entry to the hall is not allowed once the paper is open.', 'Check every entry in the expenses log before you submit.'],
    'no entry; an entry in / for. Verb: enter. Place: entrance. Right/ability: access. Mix-up: entrée. Exams: late entry.',
    []
  ),
  environmentally: L(
    'Environmentally relates to the natural world: environmentally friendly; environmentally damaging. Environmental is the adjective; environment is the noun (both already in the dictionary). Green is informal. Do not write environmentally for a social “work environment” — that is workplace. Fleets: environmentally friendly lorries.',
    ['The council chose an environmentally friendly fleet for bin lorries.', 'The project is environmentally damaging, which needs evidence in the report.'],
    'environmentally friendly / damaging / sustainable. Adjective: environmental. Noun: environment. Informal: green. Not the office atmosphere.',
    []
  ),
  equally: L(
    'Equally means to the same degree, or is used to add a balanced point: equally important; equally, we could wait. Equal is the adjective (already in the dictionary). Also is weaker as a linker. Do not use equally unique (disputed). Both papers equally important in the grade.',
    ['Both papers are equally important in the final grade.', 'The plan is cheap; equally, it is risky, which is the discourse sense.'],
    'equally + adjective; equally important. Adjective: equal. Discourse: equally, = on the other hand. Avoid equally unique. Two exam papers.',
    []
  ),
  equip: L(
    'To equip is to provide tools, skills, or furniture: equip the lab; equip someone with. Equipment is the noun (already in the dictionary, uncountable). Provide and furnish are related. Do not write “equipments”. Grants equip labs with microscopes.',
    ['The grant will equip the lab with new microscopes.', 'Training should equip staff to use the new system, which is the skills sense.'],
    'equip someone / a place with. Noun: equipment (uncountable). Related: provide. Not “equipments”. Skills: equip someone to + verb.',
    []
  ),
  era: L(
    'An era is a long historical period: the post-war era; the end of an era. Period and age are close; epoch is more technical. Do not call a weekend an era. Factory closures: the end of an era for a town.',
    ['The factory closed at the end of an era for the town.', 'Essays should define the era, not only name it.'],
    'an era; the end of an era; the … era. Close: period / age. Technical: epoch. Not a short week. History essays: define dates.',
    ['period']
  ),
  escape: L(
    'To escape is to get away from danger or a place: escape a fire; escape from prison. As a noun, an escape is that act or a way out. Flee is stronger and more literary. Do not mix with escapee (the person). Alarms gave staff time to escape.',
    ['Smoke alarms gave staff time to escape the workshop fire.', 'The film was light entertainment, an escape from the news, which is the metaphor.'],
    'escape from / a fire. Noun: an escape. Person: an escapee. Stronger: flee. Metaphor: an escape from. Health and safety: time to escape.',
    []
  ),
  estate: L(
    'An estate is a large housing area, or property left after death, or an estate car. Housing estate is a common UK compound. Will and inheritance relate to the legal sense. Do not mix with state (the government). Bus cuts hit the estate at night.',
    ['Bus cuts hit the estate hardest at night.', 'Probate valued the estate at £200,000, which is the will sense.'],
    'a housing estate; the family estate. Legal: an estate in a will. Car: an estate. Mix-up: state. UK news: the estate as a place.',
    []
  ),
  examine: L(
    'To examine is to look carefully, or to test a student: examine the evidence; examine candidates. Exam and examination are related nouns (already in the dictionary). Inspect is close for places. Do not write “examine about”. Markers examine how you use evidence.',
    ['Examiners will examine how you use evidence, not only facts.', 'Doctors examined the X-ray before the round, which is the medical sense.'],
    'examine evidence / a patient / a candidate. Nouns: exam / examination. Close (places): inspect. Not “examine about”. Rubrics: examine the writer’s methods.',
    ['inspect']
  ),
  exhibition: L(
    'An exhibition is a public display of art or objects: an exhibition of; a touring exhibition. Exhibit can be the verb or a noun for one object. Show is everyday. Gallery is the place. Do not call a shop window an exhibition in formal writing. Science exhibitions in school atriums.',
    ['The science exhibition in the atrium explained the flood data.', 'Tickets for the exhibition sold out, which is the art-show sense.'],
    'an exhibition of / at. Verb/noun: exhibit. Everyday: a show. Place: gallery / museum. School: a science exhibition. Not a shop display.',
    ['show']
  ),
  existence: L(
    'Existence is the fact of being real or alive (often uncountable): the existence of; come into existence. Exist is the verb (already in the dictionary). Life is everyday. Do not write “an existence of a fund” — the existence of. Inquiries: no evidence for the existence of an alleged fund.',
    ['There is no evidence for the existence of the alleged fund.', 'The charity came into existence after the flood, which is the origin sense.'],
    'the existence of; come into existence. Verb: exist. Everyday: life. Uncountable in many academic uses. Not “existences” for being real.',
    []
  ),
  expansion: L(
    'Expansion is becoming larger: airport expansion; expansion of the scheme. Expand is the verb (already in the dictionary). Growth is a close twin. Contraction is an opposite in economics. Planning rows: airport expansion delayed. Do not write “an expansion” for every small extra desk.',
    ['Airport expansion was delayed after the noise inquiry.', 'The expansion of free school meals needs a budget line.'],
    'expansion of; airport / business expansion. Verb: expand. Close: growth. Opposite: contraction. Planning inquiries. Not a tiny extra shelf.',
    ['growth']
  ),
  expectation: L(
    'An expectation is a belief about the future, or a standard people think you should meet: below expectation; against expectations; expectation that. Expect is the verb (already in the dictionary). Hope is weaker and more emotional. Results below the school’s usual expectation.',
    ['Results came in below the school’s usual expectation.', 'There is an expectation that coursework is your own work.'],
    'an expectation that; below / against expectations. Verb: expect. Weaker: hope. Work: meet expectations. Not “expectation of doing” — often that-clause.',
    []
  ),
  expense: L(
    'Expense is a cost: at great expense; travel expenses; at the expense of. Expensive is the adjective (already in the dictionary). Cost is everyday. Claim expenses with receipts. Do not mix with expanse (a wide area). Growth at the expense of staff rest is a useful essay pattern.',
    ['Travel expense claims need a receipt and a job code.', 'They cut waiting times at the expense of staff breaks, which is the trade-off sense.'],
    'an expense; expenses (plural for claims). Phrase: at the expense of. Adjective: expensive. Mix-up: expanse. Work: expense claims.',
    ['cost']
  ),
  experienced: L(
    'Experienced means skilled through long practice: an experienced nurse; experienced in. Experience is the noun/verb (already in the dictionary). Expert is stronger and more specialised. Inexperienced is the opposite. Job specs: experienced staff for the night shift. Do not call a one-week intern experienced.',
    ['The ward needs experienced nurses for the night shift.', 'She is experienced in appeals, which takes the preposition in.'],
    'an experienced + job noun; experienced in. Noun: experience. Stronger: expert. Opposite: inexperienced. Jobs: years experienced. Not a one-week placement.',
    []
  ),
  explanation: L(
    'An explanation makes something clear or gives a reason: a clear explanation; explanation of / for. Explain is the verb (already in the dictionary). Reason is everyday. Do not write “explanation about” in careful marking — of/for is safer. Weak explanations of graphs cost marks.',
    ['A weak explanation of the graph cost marks in paper two.', 'There was no explanation for the missing minutes.'],
    'an explanation of / for. Verb: explain. Everyday: a reason. Not usually “explanation about”. Exams: explain the graph in full sentences.',
    ['reason']
  ),
  explode: L(
    'To explode is to burst with force, or to increase suddenly: a pipe exploded; costs exploded. Explosion is the noun. Blow up is everyday. Do not mix with exploit (already in the dictionary). Gas pipes and sudden price rises both explode in news English.',
    ['A gas pipe exploded behind the high-street shops.', 'Enrolment exploded after the fee cut, which is the sudden-increase sense.'],
    'explode; costs / numbers explode. Noun: explosion. Everyday: blow up. Mix-up: exploit. News: gas explosion; prices explode.',
    []
  ),
  explore: L(
    'To explore is to travel to learn about a place, or to discuss an idea in depth: explore a cave; explore both sides. Exploration is the noun. Investigate is closer to official inquiry. Do not write “explore about”. Essay command words: explore the writer’s methods.',
    ['The essay should explore both sides of the housing argument.', 'They explored the coast path, which is the travel sense.'],
    'explore a place / an idea; explore both sides. Noun: exploration. Official: investigate. Not “explore about”. Exam: explore = discuss in depth.',
    []
  ),
  explosion: L(
    'An explosion is a blast, or a sudden surge: a gas explosion; an explosion of interest. Explode is the verb. Blast is a close noun for the physical sense. Boom can be economic. Plant explosions lead to evacuations. Do not call a small pop an explosion in a report without cause.',
    ['An explosion at the plant led to a full evacuation.', 'There was an explosion of complaints after the outage, which is the surge sense.'],
    'a gas / bomb explosion; an explosion of + noun. Verb: explode. Close (physical): blast. Economic: a boom. HSE and news. Not a balloon pop.',
    ['blast']
  ),
  export: L(
    'To export is to sell goods abroad. The noun export (stress on the first syllable) is those goods or that trade. Import is the opposite. Tariff (already in the dictionary) taxes exports and imports. Do not mix with extract. Factories export components to Germany.',
    ['The factory exports components to plants in Germany.', 'Oil is a major export, which is the noun.'],
    'export goods to. Noun: an export / exports. Opposite: import. Stress: verb ɪkˈspɔːt; noun ˈekspɔːt. Trade news. Mix-up: extract.',
    []
  ),
  express: L(
    'To express is to show a feeling or idea in words: express concern; express disagreement. Expression is the noun. Say is everyday. As an adjective, express means fast (an express train). Do not confuse with espresso (coffee). Debates: express disagreement politely.',
    ['Students may express disagreement if they stay polite in the debate.', 'The express service skips two stops, which is the fast-train sense.'],
    'express concern / thanks / disagreement. Noun: expression. Everyday: say. Adjective: an express train / delivery. Mix-up: espresso.',
    []
  ),
  expression: L(
    'An expression is a phrase, a look on a face, or the showing of an idea: a useful expression; a shocked expression; freedom of expression. Express is the verb. Phrase and idiom are related for language. Do not learn expressions as isolated translations. Vocabulary: learn the expression in context.',
    ['Learn the expression in context, not as a lonely translation.', 'Freedom of expression was the essay title, which is the rights sense.'],
    'an expression (phrase); facial expression; freedom of expression. Verb: express. Related: phrase / idiom. Context beats word lists. Rights: free expression.',
    ['phrase']
  ),
  extension: L(
    'An extension is extra time, or an added part of a building or phone system: an extension to the deadline; a home extension. Extend is the verb (already in the dictionary). Extra time is everyday. Apply for an extension before the deadline, not after. Do not mix with extent.',
    ['Apply for an extension before the dissertation deadline, not after.', 'The school built an extension for two extra classrooms.'],
    'an extension to a deadline / a building. Verb: extend. Phone: extension 204. Mix-up: extent (degree). Exams: extension requests need a reason.',
    []
  ),
  extent: L(
    'Extent is size or degree: the extent of the damage; to some extent; to a large extent. Extension is extra time or a building. Degree is a close twin. Do not write “to a big extent” — large/great is the collocation. Inspectors disagreed about the extent of mould.',
    ['Inspectors disagreed about the extent of the mould problem.', 'The plan works to some extent, which is a useful hedge in essays.'],
    'the extent of; to some / a large / a great extent. Mix-up: extension. Close: degree / scale. Hedge: to some extent. Not “to a big extent”.',
    ['degree']
  ),
  external: L(
    'External means from outside: an external examiner; external walls; external pressure. Internal is the opposite. Outside is everyday. Exam boards send external examiners to sample coursework. Do not call a visiting speaker internal.',
    ['An external examiner will sample the coursework this year.', 'External contractors ran the catering after the in-house team left.'],
    'an external examiner / review / wall. Opposite: internal. Everyday: outside. Universities: external examiner. Work: external contractors.',
    []
  ),
  extraordinary: L(
    'Extraordinary means very unusual or special: an extraordinary meeting; extraordinary circumstances. Ordinary is a common opposite. Strange can be negative. Councils call an extraordinary meeting after a flood. Do not use it for a mildly interesting day.',
    ['The council called an extraordinary meeting after the flood.', 'She showed extraordinary patience in the resit year.'],
    'an extraordinary meeting / event / effort. Opposite: ordinary. Legal: extraordinary circumstances. Not a mildly busy Tuesday. Stress: ɪkˈstrɔːdnri.',
    []
  ),
  extremely: L(
    'Extremely means to a very great degree: extremely important; extremely cold. Extreme is the adjective (already in the dictionary). Very is weaker; utterly (B2) is often negative. Listening papers can be extremely time-tight. Do not pair extremely with unique in careful style.',
    ['The listening paper is extremely time-tight, so practise with a clock.', 'Waiting times were extremely long after the outage.'],
    'extremely + adjective. Adjective: extreme. Weaker: very. Strong negative twin: utterly. Avoid extremely unique. Exams: extremely time-tight.',
    ['very']
  ),
}
