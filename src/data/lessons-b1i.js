const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1I = {
  affordable: L(
    'Affordable means cheap enough for ordinary people: affordable housing; affordable childcare. Cheap can sound low quality; reasonable is a close twin for prices. Unaffordable is the opposite. UK news pairs affordable homes with nurses, teachers, and first-time buyers. Do not call a luxury watch affordable just because it is on sale — the word is about typical incomes, not a discount.',
    ['The council promised more affordable homes near the hospital.', 'Train fares are no longer affordable for many commuters on the minimum wage.'],
    'affordable housing / childcare / fares. Close: reasonable. Opposite: unaffordable. Cheap can sound low quality.',
    ['reasonable']
  ),
  aviation: L(
    'Aviation is the industry and activity of flying aircraft: civil aviation; aviation fuel; the aviation sector. Flying is everyday for passengers; aerospace is wider and includes spacecraft. Uncountable: not “an aviation”. UK news talks of aviation emissions and airport expansion. Do not use aviation for one holiday flight — that is a flight or air travel.',
    ['Fog disrupted aviation across the south-east, not only one airport.', 'Unions in aviation voted on a new shift pattern.'],
    'Uncountable: aviation; civil / commercial aviation. Everyday: flying. Wider: aerospace. Not one passenger flight.',
    []
  ),
  accountant: L(
    'An accountant keeps or checks financial records: a chartered accountant; the company accountant. Accounting is the work; an auditor is more about independent checking of the books. Bookkeeper is a related but often more junior title. Do not call a bank cashier an accountant. In UK small firms, the accountant often files the tax return.',
    ['The charity hired an accountant before the deadline for the annual return.', 'Speak to an accountant before you register as self-employed.'],
    'a chartered accountant; company accountant. The work: accounting. Independent check: auditor. Not a shop cashier.',
    []
  ),
  accounting: L(
    'Accounting is the work of recording and checking money: accounting standards; a degree in accounting. Accountancy is a close UK twin for the profession. Bookkeeping is the day-to-day recording. Uncountable. Do not write “an accounting” for one invoice — that is an account or a bill. Creative accounting is a news phrase for bending the rules.',
    ['She studied accounting and now works in the NHS finance team.', 'Poor accounting hid the true cost of the project.'],
    'Uncountable: accounting; accounting standards. Profession twin: accountancy. Day-to-day: bookkeeping. Not one bill.',
    ['accountancy']
  ),
  achievement: L(
    'An achievement is a success you worked for: a real achievement; academic achievement. Success is wider; accomplishment is a close formal twin. Achieve is the verb (already in the dictionary). Do not call luck an achievement, and do not write “achievement of passing” — say the achievement of + -ing or passing was an achievement.',
    ['Passing the exam at the first attempt was a genuine achievement.', 'The report praised the school’s achievement in maths, not only in sport.'],
    'a real / academic achievement. Verb: achieve. Close: accomplishment. Not luck. Pattern: passing was an achievement.',
    ['accomplishment']
  ),
  additionally: L(
    'Additionally adds a further point in formal writing: The course is free. Additionally, travel is paid. In addition and also are close; furthermore is a bit stronger. Moreover is already in the dictionary. Do not start every sentence with additionally — once per paragraph is enough — and do not use it in casual chat (use also / and).',
    ['The app stores your notes; additionally, it records pronunciation.', 'Funding was cut. Additionally, two posts were frozen, which is why the waiting list grew.'],
    'Formal linker: additionally / in addition. Everyday: also. Stronger: furthermore. Do not overuse.',
    ['in addition']
  ),
  addictive: L(
    'Addictive means hard to stop: an addictive game; highly addictive. Addiction is already in the dictionary; addict is the person. Habit-forming is a close twin, often on medicine labels. Do not call broccoli addictive as a joke in an exam essay — keep the word for genuine dependence or a strong pull. Addicted to is the person pattern.',
    ['The game is addictive, so set a timer before you start.', 'Some painkillers are addictive if the dose is increased without advice.'],
    'highly addictive; addictive + noun. Person: addicted to; an addict. Noun: addiction. Label twin: habit-forming.',
    ['habit-forming']
  ),
  adjustment: L(
    'An adjustment is a small change: make an adjustment; a price adjustment; a period of adjustment. Adjust is the verb. Alteration can be a clothing change; change is everyday and wider. Do not call a complete new policy an adjustment — that is a reform or a U-turn. In exams, remarking may lead to a mark adjustment.',
    ['The examiner made an adjustment after the clerical check.', 'The first term is a period of adjustment for international students.'],
    'make an adjustment; a period of adjustment. Verb: adjust. Bigger change: reform. Everyday: a small change.',
    ['change']
  ),
  advertisement: L(
    'An advertisement is a public notice that sells or informs: a job advertisement; a television advertisement. Advert and ad are the everyday UK shorts. Advertising is the industry (already in the dictionary). British stress is on -vert-: /ədˈvɜːtɪsmənt/, not the US -tise- ending. Do not write “an advertising” for one notice.',
    ['The job advertisement closed on Friday at noon.', 'The advertisement for the sale ran on local radio, not in a national paper.'],
    'a job / newspaper advertisement. Everyday UK: advert / ad. Industry: advertising. Stress: ad-VERT-iss-ment.',
    ['advert']
  ),
  adviser: L(
    'An adviser gives official or professional advice: a careers adviser; a financial adviser. Advisor is a common US spelling; both appear in UK, but adviser is the traditional British form. Advice is the uncountable noun; advise is the verb (already in the dictionary). Do not write “an advice”. A consultant is often hired for a short project.',
    ['Speak to a careers adviser before you lock in your A-level choices.', 'The minister’s special adviser drafted the briefing.'],
    'careers / financial adviser. UK spelling: adviser (advisor also seen). Noun: advice (uncountable). Verb: advise.',
    ['consultant']
  ),
  afterwards: L(
    'Afterwards means later, after the event just mentioned: we ate and afterwards walked home. After is a preposition (after the exam); afterwards is an adverb and needs no object. Later is everyday. Afterward is US. Do not write “afterwards the exam” — say after the exam or afterwards, we left.',
    ['They sat the listening paper and compared answers afterwards.', 'The vote was close; afterwards both sides claimed a moral victory.'],
    'Adverb: afterwards (no object). Preposition: after + noun. US: afterward. Everyday: later.',
    ['later']
  ),
  ageing: L(
    'Ageing means growing older: an ageing population; ageing infrastructure. Aging is US spelling. Elderly is about people; old is everyday. UK news uses ageing population with social care and pensions. Do not call a child ageing, and do not mix it with ageism (prejudice against older people).',
    ['An ageing population will increase demand for GP appointments.', 'The ageing rolling stock broke down again in the heat.'],
    'UK: ageing. US: aging. News: ageing population / infrastructure. Mix-up: ageism. People: elderly.',
    []
  ),
  aggressive: L(
    'Aggressive means ready to attack or argue: aggressive driving; an aggressive dog. It can also mean very forceful in business (an aggressive sales target). Violent is stronger and physical; assertive is confident without hostility. Aggression is the noun. Do not praise a colleague as aggressive in a UK reference — it usually sounds like a warning.',
    ['The report criticised aggressive driving outside the school gates.', 'An aggressive pricing strategy undercut the smaller shops, which is the business sense.'],
    'aggressive driving / behaviour. Business: aggressive targets. Noun: aggression. Confident without hostility: assertive. Stronger: violent.',
    []
  ),
  agreement: L(
    'An agreement is a deal both sides accept: reach an agreement; a pay agreement; in agreement with. Agree is the verb. Contract is more legal and written; deal is everyday. Uncountable when it means the state of agreeing (there is little agreement). Do not write “an agree”.',
    ['The union reached an agreement on overtime after three days of talks.', 'There is little agreement on the best date for the exam.'],
    'reach / sign an agreement; in agreement with. Verb: agree. Legal twin: contract. Everyday: deal.',
    ['deal']
  ),
  airline: L(
    'An airline is a company that flies passengers or goods: a budget airline; the national airline. Aviation is the whole industry; a flight is one journey; an airport is the place. Do not call the plane itself an airline. UK news pairs airlines with strikes, delays, and compensation claims.',
    ['The airline cancelled the last flight and put passengers in a hotel.', 'A low-cost airline added a route from Leeds to Belfast.'],
    'a budget / national airline. One journey: a flight. Industry: aviation. Place: airport. Not the aircraft.',
    []
  ),
  alcoholic: L(
    'Alcoholic as an adjective means containing alcohol: alcoholic drinks; non-alcoholic beer. As a noun it means a person with alcohol dependence — use it carefully; person with alcohol dependence is more sensitive in health writing. Alcohol is the substance (already in the dictionary). Do not call orange juice alcoholic.',
    ['Alcoholic drinks are not sold to anyone under eighteen in the UK.', 'The menu marks non-alcoholic cocktails clearly, which is the adjective sense.'],
    'alcoholic drinks; non-alcoholic. Noun (sensitive): an alcoholic. Substance: alcohol. Legal age in UK: 18 for purchase.',
    []
  ),
  allegation: L(
    'An allegation is a claim of wrongdoing that is not yet proved: deny an allegation; allegations of fraud. Allege is the verb (already in the dictionary). Accusation is close; a finding or a conviction is after proof. News writing often says alleged to avoid libel. Do not treat an allegation as a fact in an exam essay.',
    ['The minister denied the allegation and promised a full statement.', 'Allegations of exam leakage led to a police inquiry, not an automatic cancellation.'],
    'deny / face an allegation; allegations of + noun. Verb: allege. After proof: finding / conviction. Not a proven fact.',
    ['claim']
  ),
  amateur: L(
    'Amateur means unpaid or not professional: an amateur orchestra; amateur dramatics. It can also mean unskilful (an amateur mistake). Professional is the opposite in sport and work. Amateurish is only the critical sense. Do not call a paid intern amateur, and do not use it as an insult in a formal reference without care.',
    ['She plays in an amateur orchestra at the town hall.', 'The wiring was an amateur job and failed the inspection, which is the critical sense.'],
    'amateur + sport/arts (unpaid). Opposite: professional. Critical: amateurish / an amateur mistake. Stress: AM-uh-tuh (UK).',
    []
  ),
  analysis: L(
    'Analysis is a detailed study: data analysis; in the final analysis. Analyse is the UK verb (already in the dictionary). An analysis can be countable; analysis is also uncountable as a field. Summary is shorter; opinion is not analysis. Plural: analyses. Do not write “an analyse”.',
    ['The analysis of the survey showed a fall in patient satisfaction.', 'Your essay needs more analysis and fewer copied statistics.'],
    'data / statistical analysis; an analysis of. Verb: analyse (UK). Plural: analyses. Shorter: summary. Not mere opinion.',
    []
  ),
  announce: L(
    'To announce is to tell people something officially: announce a date; announce that. Announcement is already in the dictionary. Tell is everyday; declare is more formal or legal. Do not announce a private secret to one friend — that is tell — and do not mix it with denounce (publicly condemn).',
    ['The head will announce the mock timetable on Monday.', 'The airline announced that the route would close in March.'],
    'announce a decision / that + clause. Noun: announcement. Everyday: tell. Mix-up: denounce. Public and official.',
    []
  ),
  annually: L(
    'Annually means once a year: tested annually; paid annually. Annual is the adjective (already in the dictionary). Yearly is a close twin; every year is everyday. Per annum is the Latin formal twin on contracts. Do not use annually for something that happens twice a year — that is twice a year / biannually (careful: biannual is ambiguous).',
    ['Smoke alarms in the block are tested annually.', 'The prize is awarded annually, not every term.'],
    'tested / reviewed / paid annually. Adjective: annual. Everyday: every year. Formal: per annum. Not twice a year.',
    ['yearly']
  ),
  antibiotic: L(
    'An antibiotic is a medicine against bacterial infection: a course of antibiotics; antibiotic resistance. It does not treat viruses such as colds. Painkiller is a different class. Uncountable when you mean the type of drug in general. Do not ask for antibiotics “just in case” in an exam health essay without the bacterial point — UK GPs often refuse them for colds.',
    ['The GP said antibiotics would not help a viral sore throat.', 'Antibiotic resistance is a growing public-health warning.'],
    'a course of antibiotics; antibiotic resistance. Not for viruses. Different: painkiller. Follow the full course if prescribed.',
    []
  ),
  antisocial: L(
    'Antisocial in UK news often means behaviour that harms or annoys the community: antisocial behaviour; an antisocial behaviour order (historical ASBO). It can also mean avoiding other people. Unsocial hours are evening/night work — a different word. Social is not a clean opposite. Do not call a quiet student antisocial unless you mean they avoid people or cause harm.',
    ['Neighbours reported antisocial behaviour after midnight.', 'She felt antisocial after the night shift and skipped the party, which is the “avoiding people” sense.'],
    'antisocial behaviour (UK news/law). Avoiding people: also antisocial. Mix-up: unsocial hours (shift work). Not merely shy.',
    []
  ),
  apologise: L(
    'To apologise is to say sorry (UK spelling): apologise for the delay; apologise to the customer. Apologize is US. Apology is the noun (already in the dictionary). Sorry is everyday. Do not write “apologise the mistake” — use apologise for. An apology is not always an admission of legal guilt, but in customer service it is expected.',
    ['The company apologised for the missed delivery and issued a refund.', 'He apologised to the chair for interrupting the briefing.'],
    'UK: apologise for / to. US: apologize. Noun: apology. Everyday: say sorry. Not “apologise the mistake”.',
    []
  ),
  bankruptcy: L(
    'Bankruptcy is the legal state of being unable to pay debts: file for bankruptcy; go into bankruptcy. Bankrupt is the adjective/person. Insolvency is a close legal twin. Broke is informal. Uncountable in this legal sense. Do not use bankruptcy for a failed exam — that is fail / be unsuccessful. UK news: bankruptcy petitions, company collapse.',
    ['The shop went into bankruptcy after three bad quarters.', 'Personal bankruptcy left him unable to be a company director for a period.'],
    'go into / file for bankruptcy. Adjective: bankrupt. Informal: broke. Legal twin: insolvency. Not a failed test.',
    ['insolvency']
  ),
  briefing: L(
    'A briefing is a short official update: a press briefing; a staff briefing; a briefing note. Brief as an adjective means short (already in the dictionary); to brief is the verb. A meeting can be long; a bulletin is often broadcast. Do not call a two-hour workshop a briefing. In news, off-the-record briefings are a political sense.',
    ['Nurses attended a briefing before the inspection team arrived.', 'The minister’s briefing lasted ten minutes and took no questions.'],
    'a press / staff briefing; briefing note. Verb: brief someone. Adjective: brief = short. Not a long workshop.',
    []
  ),
  banker: L(
    'A banker is a senior bank employee, not every cashier: an investment banker; a central banker. Banking is the industry. Bank clerk / cashier is the counter job. The word can sound critical in UK political debate (the bankers). Do not call a customer a banker.',
    ['The banker turned down the loan because cash flow was weak.', 'Central bankers signalled that rates would stay high, which is the policy sense.'],
    'investment / central banker. Industry: banking. Counter staff: cashier / clerk. Can sound political in UK news.',
    []
  ),
  banking: L(
    'Banking is the business of banks: retail banking; online banking; the banking sector. A bank is the institution. Uncountable. Do not write “a banking” for one payment. High-street banking is the UK phrase for ordinary branches. Investment banking is the corporate deal side.',
    ['Online banking let her pay the rent without a branch visit.', 'The inquiry examined risk in retail banking, not only in trading.'],
    'Uncountable: banking; online / retail / investment banking. Institution: a bank. UK: high-street banking.',
    []
  ),
  behalf: L(
    'Behalf appears in on behalf of: representing someone else. On my behalf; speak on behalf of the residents. Do not write “in behalf of” in modern UK English. For my part is a different idea (as for me). Do not use on behalf of when you mean for the benefit of in a vague way — keep it for representation. On behalf of the company is common in emails.',
    ['She spoke on behalf of the tenants at the planning meeting.', 'I am writing on behalf of the head teacher to confirm the date.'],
    'on behalf of + person/group; on my behalf. Not “in behalf of”. Means representing, not merely “for”.',
    []
  ),
  behavioural: L(
    'Behavioural means connected with behaviour (UK spelling): behavioural problems; behavioural science. Behavioral is US. Behaviour is the noun (already in the dictionary). Behavioural is common in schools, psychology, and economics (behavioural economics). Do not use it for a broken machine — that is mechanical / technical.',
    ['The school appointed a behavioural specialist for the younger years.', 'Behavioural economics studies how people actually choose, not only how textbooks say they should.'],
    'UK: behavioural. US: behavioral. Noun: behaviour. Fields: schools, psychology, behavioural economics.',
    []
  ),
  bilingual: L(
    'Bilingual means using two languages well: bilingual staff; a bilingual sign; bilingual in English and Urdu. Monolingual is one language; multilingual is more than two. Fluent is about skill, not the number of languages. Do not call a two-week beginner course bilingual. In UK public services, bilingual posts are advertised with the languages named.',
    ['The clinic advertised for bilingual nurses (English and Polish).', 'A bilingual caption under the graph helps parents who do not read English.'],
    'bilingual in A and B; bilingual staff / signs. One language: monolingual. More than two: multilingual.',
    []
  ),
  billion: L(
    'A billion is a thousand million (1,000,000,000) in modern UK and US use: £2 billion; billions of pounds. Million is a thousand thousand. Bn is the news abbreviation. Do not mix billion and million in a data description — examiners watch the noughts. Older UK “billion” once meant a million million; that meaning is obsolete in news.',
    ['The rail project is expected to cost two billion pounds.', 'The charity said billions of litres of water were lost through leaks.'],
    '1 billion = 1,000,000,000. Abbreviation: bn. Do not confuse with million. Modern UK = US meaning.',
    []
  ),
  biography: L(
    'A biography is someone’s life written by another person: a biography of the scientist; an authorised biography. Autobiography is written by the subject. A memoir can be partial. Biographical is the adjective. Do not call a two-line exam profile a biography. A-level and university reading lists often include a biography as a source.',
    ['The biography on the reading list covers her years in Parliament.', 'An authorised biography had access to the letters; an unauthorised one did not.'],
    'a biography of + person. By the subject: autobiography. Adjective: biographical. Not a short profile.',
    []
  ),
  boarding: L(
    'Boarding is getting on a plane, ship, or train: boarding begins at 18:20; a boarding pass. It is also living at school in term time (a boarding school; weekly boarding). Board as a verb is get on. Do not mix boarding with boredom. At airports, last boarding call is the final invitation to the gate.',
    ['Boarding was delayed because a previous flight was late inbound.', 'Weekly boarding meant she travelled home on Fridays, which is the school sense.'],
    'boarding pass / gate / begins. School: boarding school / weekly boarding. Verb: board the plane. Mix-up: boredom.',
    []
  ),
  boredom: L(
    'Boredom is the uncountable feeling of being bored: die of boredom; boredom in the waiting room. Bored is the adjective for the person; boring describes the thing. Do not write “a boredom” or “boredoms”. Tedium is a formal twin. Do not confuse boredom with boarding (planes/schools).',
    ['Boredom in the four-hour delay made small arguments more likely.', 'The lecture’s repetition produced boredom, not extra learning.'],
    'Uncountable: boredom. Person: bored. Thing: boring. Mix-up: boarding. Formal: tedium. Not “a boredom”.',
    ['tedium']
  ),
  boundary: L(
    'A boundary is an edge or limit: a county boundary; set boundaries; the boundary of the syllabus. Border is often between countries; limit is more about a maximum. Bound is a different word (bound to). In sport, a cricket boundary is a four or six. Do not call a word limit a boundary in an exam rubric — that is a word limit.',
    ['The river is the boundary between the two counties.', 'Tutors asked students to stay within the boundary of the set question.'],
    'a county / national boundary; set boundaries. Country line: often border. Mix-up: bound to. Cricket: a boundary score.',
    ['limit']
  ),
  branding: L(
    'Branding is how a company presents its name and image: rebranding; brand identity. Brand is already in the dictionary as the name/product. Marketing is wider (already in the dictionary). Logo is only the symbol. Uncountable. Do not call one advert branding. UK firms talk of employer branding when they recruit.',
    ['The rebranding dropped the old logo and simplified the website.', 'Employer branding mattered because graduates compared values, not only pay.'],
    'Uncountable: branding; rebranding. Wider: marketing. Symbol: logo. Product name: brand. Not one advert.',
    []
  ),
  breakthrough: L(
    'A breakthrough is an important success after difficulty: a scientific breakthrough; a breakthrough in talks. Advance and discovery are close; a step is smaller. Breakthrough can also describe a first big hit (a breakthrough album). Do not call a routine software patch a breakthrough. Hyphen: breakthrough as a noun is one word.',
    ['Researchers announced a breakthrough in the vaccine trial.', 'A breakthrough in the pay talks came after the weekend, not during the walkout.'],
    'a breakthrough in + field/talks. Smaller: a step. Close: discovery / advance. One word as a noun.',
    ['advance']
  ),
  bribery: L(
    'Bribery is the crime of giving or taking bribes (uncountable): bribery and corruption; a bribery charge. Bribe is the noun/verb for the payment (already in the dictionary). Corruption is wider. Do not write “a bribery” for one payment — that is a bribe. UK law: the Bribery Act is a common news reference.',
    ['The inquiry found bribery in the awarding of contracts.', 'Staff must complete anti-bribery training before they deal with suppliers.'],
    'Uncountable: bribery; bribery and corruption. One payment: a bribe. Verb: bribe. Wider: corruption. Not “a bribery”.',
    []
  ),
  broadband: L(
    'Broadband is a fast, always-on internet connection: rural broadband; broadband speeds. Wi-Fi is the wireless link in a building; the internet is the wider network. Uncountable. Do not call mobile data broadband unless the provider does. UK politics often debates a broadband rollout to villages.',
    ['Villages still wait for reliable broadband for homework and GP bookings.', 'The contract promised faster broadband but not a lower monthly price.'],
    'Uncountable: broadband; broadband speeds / rollout. In-building wireless: Wi-Fi. Wider: the internet. Not one website.',
    []
  ),
  brochure: L(
    'A brochure is a thin illustrated booklet that advertises: a holiday brochure; a course brochure. A leaflet is usually one sheet (already in the dictionary); a catalogue lists many items. Prospectus is the formal college twin. Do not call a single webpage a brochure unless it is designed as one.',
    ['The college brochure lists every optional module for next year.', 'A holiday brochure still arrived in the post, which surprised the family who book online.'],
    'a holiday / course brochure. One sheet: leaflet. Formal college: prospectus. Many items: catalogue.',
    ['prospectus']
  ),
  browse: L(
    'To browse is to look without a firm plan to buy: browse the shelves; browse a website. Search is more targeted; skim is for fast reading. A browser is the software (next entry). Do not say browse when you mean research a specific fact — that is look up / search. Window-shopping is the high-street twin.',
    ['You can browse the catalogue before you create an account.', 'She browsed the library stacks and then chose two titles for the essay.'],
    'browse a shop / website / catalogue. Targeted: search / look up. Fast reading: skim. Software: browser.',
    []
  ),
  browser: L(
    'A browser is software for viewing websites: a web browser; an outdated browser. Browse is the verb. Search engine (Google etc.) finds pages; the browser displays them. Do not call the website itself a browser. Exam platforms often name supported browsers in the instructions.',
    ['The mock exam platform failed in an outdated browser.', 'Candidates were told to use a standard browser with JavaScript enabled.'],
    'a web browser; update your browser. Verb: browse. Finds pages: search engine. Not the website itself.',
    []
  ),
  bullying: L(
    'Bullying is repeated cruel or threatening behaviour: a bullying policy; online bullying. Bully can be the person or the verb. Teasing can be milder; harassment is a close legal twin at work. Uncountable. UK schools must have an anti-bullying policy. Do not call a single rude remark bullying unless it is part of a pattern — check the school’s definition.',
    ['The inspection asked how the school records bullying, not only how it talks about kindness.', 'Online bullying continued after the weekend, which is why parents were called in.'],
    'Uncountable: bullying; anti-bullying policy. Person/verb: bully. Work twin: harassment. Usually a repeated pattern.',
    []
  ),
  buyer: L(
    'A buyer purchases something: a first-time buyer; a buyer for a supermarket chain (the job). Seller is the other side; customer is everyday. Purchaser is more formal. UK housing news: first-time buyers, stamp duty. Do not call a window shopper a buyer.',
    ['First-time buyers struggled when mortgage rates rose.', 'She works as a buyer, negotiating prices with clothing suppliers.'],
    'first-time buyer; a buyer (purchasing job). Other side: seller. Everyday: customer. Formal: purchaser.',
    ['purchaser']
  ),
  bidding: L(
    'Bidding is the offering of prices in an auction or for a contract: competitive bidding; enter the bidding. Bid is the verb/noun for one offer. Tender is a close UK public-contract twin. Do not use bidding for a casual “I hope” (that’s I wish / I’m hoping). At auction, bidding war is a news phrase.',
    ['Four firms entered the bidding for the waste contract.', 'A bidding war pushed the house price above the asking price.'],
    'enter the bidding; competitive bidding. One offer: a bid. Public contracts: tender. News: bidding war.',
    []
  ),
  blast: L(
    'A blast in news is often an explosion: a gas blast; a bomb blast. It can also mean a sudden strong wind, or informal a great time (we had a blast). Explosion is a close twin for the news sense. Do not use we had a blast in a formal report. Blast can also be a verb meaning to criticise strongly.',
    ['A gas blast damaged three shops on the high street.', 'The paper blasted the delay, which is the “criticise” verb sense.'],
    'a gas / bomb blast. Close: explosion. Informal fun: have a blast (not in reports). Verb: blast = criticise hard.',
    ['explosion']
  ),
  blueprint: L(
    'A blueprint is a detailed plan: a blueprint for reform; the blueprint for the building. Plan and roadmap are close; a sketch is rougher. Originally it was a blue technical drawing. Do not call a vague wish a blueprint. UK think-tanks often publish a blueprint for policy.',
    ['The report is a blueprint for reforming adult social care.', 'Architects still talk of a blueprint even when the files are digital.'],
    'a blueprint for + change. Close: plan / roadmap. Rougher: sketch. Not a vague wish. Policy and building senses.',
    ['plan']
  ),
  bold: L(
    'Bold means brave and confident: a bold decision; in bold type (thick dark letters). Brave is close for people; daring can sound risky. Timid is an opposite. In documents, print the heading in bold. Do not call a reckless policy bold as praise in a balanced essay without evidence — examiners notice spin.',
    ['Changing exam board mid-year was a bold decision.', 'Put the key words in bold so the marker can see the structure.'],
    'a bold decision / move. Type: in bold. Close: brave. Opposite: timid. Reckless is not automatically bold.',
    ['brave']
  ),
  bombing: L(
    'A bombing is an attack with bombs: a bombing campaign; the anniversary of the bombing. Blast is the explosion; bomb is the device (already in the dictionary). Uncountable when you mean the tactic (aerial bombing). Handle the topic factually in exams. Do not use bombing for a poor performance in sport (that slang is informal and US-leaning).',
    ['The city held a silence on the anniversary of the bombing.', 'Historians compared the bombing of the docks with later raids.'],
    'a bombing; a bombing campaign. Device: bomb. Explosion: blast. Sport slang “bombing” = fail: avoid in formal work.',
    []
  ),
  boom: L(
    'A boom is a period of sudden growth: a housing boom; a boom in tourism. Bust or slump is the opposite in economics. Boost is a smaller lift (already in the dictionary). Uncountable in a boom in + noun. Do not call a one-week sales spike a boom. Baby boom is a demographic sense.',
    ['A tourism boom followed the new rail link.', 'The housing boom left young buyers priced out, which is the economic sense.'],
    'a boom in + noun; housing / tourism boom. Opposite: slump / bust. Smaller: boost. Demographic: baby boom.',
    []
  ),
  bound: L(
    'Bound to means certain to happen: you are bound to make mistakes at first. Bound for means heading towards (a train bound for Leeds). Boundary is the edge (previous entry). Bind / bound as a verb is tie. Do not write “bound of” for certain. Out of bounds is a separate sports/school phrase.',
    ['Without revision you are bound to drop marks on Paper 2.', 'The ferry was bound for Belfast when the weather warning was issued.'],
    'bound to + verb (certain). bound for + place (heading). Mix-up: boundary. School: out of bounds.',
    ['certain']
  ),
  campaigner: L(
    'A campaigner works to change a law or opinion: a climate campaigner; local campaigners. Campaign is already in the dictionary. Activist is a close twin, sometimes more confrontational. Lobbyist is more about paid influence. Do not call a one-day petitioner a lifelong campaigner without evidence.',
    ['Local campaigners collected signatures against night flights.', 'A health campaigner criticised the delay in publishing the data.'],
    'a climate / local campaigner. Noun/verb: campaign. Close: activist. Paid influence: lobbyist.',
    ['activist']
  ),
  calculation: L(
    'A calculation is working out a number: a rough calculation; check your calculation. It can also mean a cool judgement of risk (a political calculation). Calculate is the verb (already in the dictionary). Estimate is less precise. Do not leave a calculation in an exam without units if the paper asks for them.',
    ['Double-check the calculation before you transfer the answer.', 'Delaying the vote was a political calculation, which is the “judgement” sense.'],
    'check / a rough calculation. Verb: calculate. Less precise: estimate. Also: a political calculation.',
    []
  ),
  canteen: L(
    'A canteen is a dining room at a school, hospital, or workplace: the staff canteen; canteen food. Café is more public; restaurant is more formal. Refectory appears in some universities. Do not call a high-street sandwich shop a canteen. UK hospitals still talk of the canteen for night-shift meals.',
    ['The hospital canteen stays open for the night shift.', 'Prices in the school canteen rose after the catering contract changed.'],
    'staff / school / hospital canteen. Public: café. University twin: refectory. Not a high-street restaurant.',
    []
  ),
  capitalism: L(
    'Capitalism is an economic system based mainly on private ownership and markets. Capitalist can be the adjective or a person. A mixed economy combines markets and public services — a common UK essay point. Socialism / communism appear as contrasts in exams. Uncountable. Do not use capitalism as a vague insult; define it.',
    ['The essay compared capitalism with a mixed economy.', 'Critics argued that capitalism had delivered growth but not affordable housing.'],
    'Uncountable: capitalism. Person/adjective: capitalist. UK essays: mixed economy. Contrast systems if the question asks.',
    []
  ),
  caption: L(
    'A caption is the text under a picture, graph, or cartoon: a photo caption; read the caption. Title is for the whole work; label is often a one-word tag. In IELTS-style tasks, the caption tells you what the axes mean. Do not ignore the caption and invent the topic. Subtitle is usually under a heading, not under a figure.',
    ['Read the caption before you describe the trend in the graph.', 'The cartoon’s caption was sharper than the drawing itself.'],
    'a caption under a photo/graph. Whole work: title. One-word tag: label. Exam tip: the caption defines the data.',
    []
  ),
  carriage: L(
    'A carriage is one section of a UK train: the rear carriage; a first-class carriage. Car is US for this sense. Carriage can also mean the cost of delivering goods (carriage paid). Coach is another UK train word, not identical in every company. Do not call a whole train a carriage.',
    ['Bicycles are allowed only in the rear carriage.', 'The ticket said carriage was included, which is the delivery-cost sense.'],
    'a train carriage (UK). US: car. Delivery: carriage / carriage paid. Whole train ≠ one carriage. Also: horse-drawn carriage (historical).',
    []
  ),
  carrier: L(
    'A carrier transports people or goods: a rail carrier; a mobile carrier (phone company). It also means a person who can pass on a disease without being ill. Airline is a specific flying company. Do not mix carrier with career. In health texts, a carrier may need different advice from a patient with symptoms.',
    ['The mobile carrier raised line rental in April.', 'A carrier of the infection can still attend school if public-health rules allow, which is the medical sense.'],
    'a mobile / freight carrier. Medical: a carrier of a disease. Mix-up: career. Flying company: airline (more specific).',
    []
  ),
  catering: L(
    'Catering is providing food for organisations or events: school catering; a catering contract. Cater is the verb (cater for a wedding; cater for different needs). Hospitality is wider (hotels too). Uncountable. Do not call home cooking catering. UK inspections often mention catering hygiene in schools and hospitals.',
    ['The school outsourced catering after the hygiene inspection.', 'The venue’s catering could not meet the nut-free requirement.'],
    'Uncountable: catering; catering contract / staff. Verb: cater for. Wider: hospitality. Not ordinary home cooking.',
    []
  ),
  chairman: L(
    'A chairman leads a board or meeting. Modern UK organisations often prefer chair or chairperson. Chairwoman exists but chair is common for any gender. Do not assume chairman is the only acceptable form in an exam discussion of inclusive language — mention chair. The chairman of the board is still frequent in company news.',
    ['The chairman opened the AGM and invited questions on the accounts.', 'Minutes now say the chair, not the chairman, which is the inclusive style.'],
    'chairman of the board / meeting. Inclusive: chair / chairperson. Company news still uses chairman widely.',
    ['chair']
  ),
  chancellor: L(
    'In UK politics the Chancellor is usually the Chancellor of the Exchequer, the finance minister who delivers the Budget. Some universities have a ceremonial chancellor. A vice-chancellor is the day-to-day university chief. Do not mix chancellor with counsellor (talking support) or councillor (local elected member). Prime minister is a different post.',
    ['The chancellor raised the threshold for income tax in the Budget.', 'She met the university chancellor at graduation, which is the ceremonial sense.'],
    'UK: Chancellor of the Exchequer (Budget). University: ceremonial chancellor vs vice-chancellor. Mix-ups: counsellor / councillor.',
    []
  ),
  characteristic: L(
    'A characteristic is a typical feature: a characteristic of the system; key characteristics. Characteristic can also be an adjective (a characteristic error). Feature and trait (people) are close. Character is the person in a story or someone’s personality — a common mix-up. Do not write “characteristic for” in this sense; use of or the adjective pattern.',
    ['Clear referencing is a characteristic of strong academic work.', 'Long waiting times are characteristic of the current system, which is the adjective.'],
    'a characteristic of; key characteristics. Adjective: characteristic of. Mix-up: character. People: trait.',
    ['feature']
  ),
  characterise: L(
    'To characterise is to describe typical features (UK -ise): characterise the policy as short-term. Characterize is US. Characteristic is the noun/adjective. Portray and describe are close. Do not mix it with caricature (an exaggerated drawing). In essays, critics characterised X as Y is a useful pattern.',
    ['Inspectors characterised the leadership as energetic but poorly organised.', 'Do not characterise all tabloids as identical; styles differ.'],
    'UK: characterise as. US: characterize. Noun: characteristic. Mix-up: caricature. Pattern: characterise X as Y.',
    ['describe']
  ),
  charitable: L(
    'Charitable means connected with a charity: a charitable organisation; charitable status. It also means kind in judgement (a charitable reading). Charity is already in the dictionary. Generous is wider. Do not call a profitable company charitable because it made one donation. UK: registered charity, Gift Aid.',
    ['Donations to charitable organisations may qualify for tax relief.', 'A charitable reading of the speech ignored the missing figures, which is the “kind judgement” sense.'],
    'charitable organisation / status / donation. Kind judgement: a charitable reading. Noun: charity. Not one small gift from a firm.',
    []
  ),
  cheat: L(
    'To cheat is to gain an unfair advantage: cheat in an exam; cheat at cards. Cheat can also be a noun (a cheat). Dishonest is the adjective. Plagiarism is a specific academic form. Do not write “cheat the exam” — use cheat in the exam. UK boards cancel papers and may ban candidates.',
    ['Anyone who cheats in the exam risks cancellation of all papers.', 'The software flagged copied code, a form of cheating in coursework.'],
    'cheat in an exam / at a game. Noun: a cheat. Academic: plagiarism. Not “cheat the exam”. Boards can cancel papers.',
    []
  ),
  checklist: L(
    'A checklist is a list of items to tick: a safety checklist; the examiner’s checklist. List is wider; rubric is the official marking guide. Check is the verb. Do not treat a checklist as optional decoration in practical exams — missing a step can cost marks. Aviation and medicine use checklists to reduce error.',
    ['Use a checklist before you upload the coursework files.', 'The lab checklist required goggles, which is why the student was turned away.'],
    'a safety / examiner’s checklist. Wider: a list. Marking guide: rubric. Verb: check. Used to reduce missed steps.',
    []
  ),
  chemistry: L(
    'Chemistry is the science of substances: a chemistry paper; organic chemistry. It also means how two people get on (the chemistry between them). Chemical is already in the dictionary; chemist in UK is also a pharmacy. Do not spell it “chemestry”. Uncountable as the subject.',
    ['She dropped chemistry after the mock because the maths load was high.', 'The chemistry between the two presenters made the debate watchable, which is the people sense.'],
    'Uncountable subject: chemistry. UK shop: chemist = pharmacy. People: chemistry between them. Adjective: chemical.',
    []
  ),
  chief: L(
    'Chief as an adjective means main: the chief reason; chief executive (job title). As a noun it means a leader. Main and principal are close; principal is also a school head (spelling mix-up with principle). Do not write “chiefest”. In UK companies, chief executive is more common than CEO in some reports, though both appear.',
    ['The chief reason for the delay was a shortage of drivers.', 'The chief executive resigned after the profits warning.'],
    'the chief + noun (main). Job: chief executive. Close: main. Mix-up: principle vs principal. No “chiefest”.',
    ['main']
  ),
  citizenship: L(
    'Citizenship is legal membership of a country: British citizenship; apply for citizenship. It also means the duties of a citizen (citizenship education). Citizen is already in the dictionary. Nationality is close but not always identical in law. Uncountable in the legal sense. Do not confuse it with a tourist visa.',
    ['She applied for British citizenship after five years of residence.', 'Citizenship education covers voting and the justice system, which is the school sense.'],
    'apply for / dual citizenship. Person: citizen. Close: nationality. School: citizenship education. Not a holiday visa.',
    []
  ),
  civilisation: L(
    'Civilisation is a complex society with cities, laws, and culture (UK -isation): ancient civilisations; Western civilisation. Civilization is US. Culture is narrower or everyday; society is wider. The word can sound loaded in essays — define what you mean. Do not use it to insult a group as “uncivilised” in academic work.',
    ['The module compared two river-valley civilisations through their legal codes.', 'Museums now question older stories of civilisation versus “wilderness”, which is a debate point.'],
    'UK: civilisation. US: civilization. Countable: a civilisation. Everyday: culture / society. Avoid as an insult.',
    []
  ),
  civil: L(
    'Civil means to do with ordinary citizens, not the army or Church: civil law; a civil case; civil aviation. It also means polite (keep a civil tongue). Criminal is the contrast in court. Civic is about local citizenship duties. Do not mix civil with civilian (a non-military person — already in the dictionary). Civil servant is a UK government employee.',
    ['Unpaid rent was a civil case, not a criminal trial.', 'Please keep the email civil, even if you disagree, which is the politeness sense.'],
    'civil law / case vs criminal. civil aviation. Polite: civil. Mix-up: civic; civilian. UK: civil servant.',
    []
  ),
  classic: L(
    'Classic means typical, or of lasting high quality: a classic example; a classic novel. Classical often means ancient Greek/Roman or a music style — a common mix-up. Typical is the everyday twin for “classic example”. Do not call last week’s meme a classic unless you mean it is a typical case. Classic can also be a noun (a classic of English literature).',
    ['This is a classic example of a headline that overclaims.', 'She prefers classical music, which is not the same as a classic novel.'],
    'a classic example / mistake. Lasting work: a classic. Mix-up: classical (Greece/Rome or music). Everyday: typical.',
    ['typical']
  ),
  clinical: L(
    'Clinical means connected with treating patients: clinical trials; clinical staff. It can also mean coldly practical, without emotion (a clinical assessment of the risks). Medical is close; clinic is the place (already in the dictionary). Do not call a friendly GP clinical as an insult in the “cold” sense without cause. Clinical negligence is a UK legal phrase.',
    ['The drug must pass clinical trials before prescription.', 'Her clinical summary of the budget ignored the human cost, which is the “cold” sense.'],
    'clinical trials / staff / negligence. Place: clinic. Coldly practical: a clinical analysis. Close: medical.',
    []
  ),
  clothing: L(
    'Clothing is clothes as an uncountable, slightly formal word: warm clothing; clothing industry. Clothes is the everyday plural. A cloth is a piece of fabric — a mix-up. Garment is one item in industry English. Do not write “a clothing” for a jumper. UK weather warnings still say suitable clothing.',
    ['Warm clothing is required for the outdoor night shift.', 'The clothing industry lost orders when the high street slowed.'],
    'Uncountable: clothing. Everyday: clothes. One item: a garment. Mix-up: a cloth (fabric). Not “a clothing”.',
    ['clothes']
  ),
  coastal: L(
    'Coastal means on or near the coast: coastal towns; coastal flooding; coastal erosion. Coast is the noun (already in the dictionary). Inland is a contrast. Seaside often sounds like holidays. Do not call Birmingham coastal. UK news: coastal communities and storm damage.',
    ['Coastal towns prepared for another winter of flooding.', 'Coastal erosion forced the road to close north of the village.'],
    'coastal towns / flooding / erosion. Noun: coast. Contrast: inland. Holiday tone: seaside.',
    []
  ),
  collide: L(
    'To collide is to crash into something: two vans collided; collide with. Collision is already in the dictionary. Crash is everyday. Ideas and groups can collide (conflict). Do not write “collide to the wall” — use collide with. Head-on collision is a news collocation.',
    ['Two vans collided at the junction in thick fog.', 'Their accounts of the meeting collided, which is the “conflict” sense.'],
    'collide with (not to). Noun: collision. Everyday: crash. Also: ideas collide. News: head-on collision.',
    ['crash']
  ),
  columnist: L(
    'A columnist writes a regular opinion column: a newspaper columnist; a guest columnist. Journalist is wider; correspondent often reports from a beat or place. Column is the piece. Do not call a news reporter a columnist unless they write opinion. UK papers still sell weekend columns as a brand.',
    ['The columnist argued that the ban would not cut emissions.', 'A guest columnist from the university wrote on exam stress.'],
    'a newspaper / opinion columnist. Wider: journalist. The piece: a column. Reporter ≠ automatically columnist.',
    []
  ),
  combination: L(
    'A combination is two or more things together: a combination of factors; in combination with. Combine is the verb (already in the dictionary). Mix is everyday; mixture can be physical. Do not write “a combination between A to B” — use of and and. Combination lock is a literal sense.',
    ['A combination of revision and sleep beat last-minute cramming.', 'The drugs are not used in combination because of side effects.'],
    'a combination of A and B; in combination with. Verb: combine. Everyday: mix. Not “combination between”.',
    ['mix']
  ),
  commonly: L(
    'Commonly means often or by most people: commonly used; commonly known as. Common is the adjective (already in the dictionary). Usually and often are everyday. Rarely is an opposite. Do not use commonly for a thing that happened once. Commonly confused words is a typical exam heading.',
    ['This spelling error is commonly made in the listening transfer.', 'The bird is commonly known as a robin, which is the “by most people” sense.'],
    'commonly used / known as / confused. Adjective: common. Everyday: often / usually. Not for a one-off event.',
    ['often']
  ),
  commuter: L(
    'A commuter travels regularly to work: commuters; the commuter belt. Commute is the verb/noun for the journey (already in the dictionary). Passenger is anyone on the service. Do not call a once-a-year festival visitor a commuter. UK news: commuter chaos, season tickets, London Bridge delays.',
    ['Commuters faced hour-long delays after the signal failure.', 'She left the commuter belt and rented nearer the hospital.'],
    'a commuter; commuter belt / chaos. Verb/noun: commute. Anyone on a train: passenger. Regular work travel.',
    []
  ),
  complicated: L(
    'Complicated means difficult because of many parts: a complicated form; more complicated than. Complex is already in the dictionary and is close; complex can also be a noun (a sports complex). Simple is the opposite. Complicate is the verb. Do not call a short yes/no question complicated. Complication is a resulting problem (medical or general).',
    ['The visa form is more complicated than the website admits.', 'Keep the explanation simple; a complicated diagram lost the examiner.'],
    'a complicated process / form. Close: complex. Verb: complicate. Opposite: simple. Resulting problem: a complication.',
    ['complex']
  ),
  copyright: L(
    'Copyright is the legal right to control copies of a work: protected by copyright; copyright infringement. Copy is everyday; a patent protects inventions; a trademark protects a brand. Uncountable. Do not paste a full article into an essay. UK exams and universities treat copyright and plagiarism as linked but not identical.',
    ['You must not copy the article in full because of copyright.', 'The image was labelled copyright-free, which still needs a check of the licence.'],
    'Uncountable: copyright; breach / infringement of copyright. Inventions: patent. Brands: trademark. Not the same as plagiarism, but related in coursework.',
    []
  ),
  councillor: L(
    'A councillor is an elected member of a UK local council. Counselor is US; counsellor is a talking therapist (next-but-related mix-up). Council is the body (already in the dictionary). MP is national. Do not write councillor for a council employee who was not elected — that is an officer. Ward is the local area they represent.',
    ['Residents emailed their councillor about the uncollected bins.', 'The councillor sits on the planning committee, which is why the meeting was packed.'],
    'UK elected: councillor. Therapist: counsellor. US therapist spelling: counselor. Body: council. National: MP.',
    []
  ),
  counselling: L(
    'Counselling is professional talking support (UK double l): bereavement counselling; student counselling. Counseling is US. Counsellor is the person. Advice is wider and not always therapeutic. Do not mix it with council / councillor. UK universities often advertise free counselling in exam term.',
    ['The university offers counselling during the exam period.', 'She was referred for counselling after the accident, not only for painkillers.'],
    'UK: counselling / counsellor. US: counseling. Wider: advice. Mix-ups: council, councillor. Not a casual chat.',
    []
  ),
  courtesy: L(
    'Courtesy is polite respect: have the courtesy to; a courtesy bus (provided free). Courteous is the adjective. Manners is everyday. Courtesy of in picture credits means provided by. Do not call a legal duty a courtesy. A courtesy call can be a polite phone call or a sales ring — check context.',
    ['Have the courtesy to warn the team if you will miss the briefing.', 'A courtesy bus runs from the car park to the terminal, which is the free-service sense.'],
    'have the courtesy to + verb; courteous. Free service: a courtesy bus / car. Credits: courtesy of. Everyday: manners.',
    ['manners']
  ),
  costly: L(
    'Costly means expensive, or causing serious loss: a costly delay; a costly mistake. Cost is already in the dictionary. Expensive is the everyday twin for price; costly often stresses consequences. Cheap is an opposite for price. Do not use costly for a small extra 20p in a formal report unless you are being ironic.',
    ['Delaying the repair proved costly when the pipe burst.', 'A costly legal fight used up the campaign’s donations.'],
    'a costly mistake / delay. Everyday price: expensive. Noun: cost. Stresses money or damage. Opposite (price): cheap.',
    ['expensive']
  ),
  convenience: L(
    'Convenience is ease of use or nearby access: at your convenience; a convenience store (small local shop). Convenient is already in the dictionary. Convenience food is ready-made. Inconvenience is the opposite. Do not write “a convenience” for a public toilet unless you mean the old UK sense (a public convenience).',
    ['Online banking is a convenience, but you should still check fees.', 'A convenience store on the corner stayed open after the supermarket closed.'],
    'at your convenience; convenience store / food. Adjective: convenient. Opposite: inconvenience. Old UK: public conveniences = toilets.',
    []
  ),
  crisis: L(
    'A crisis is a serious turning-point that needs action: a cost-of-living crisis; a winter crisis in hospitals. Plural: crises. Emergency is close and more sudden; problem is weaker. Uncountable in crisis talks. Do not call a missed bus a crisis in an exam essay. UK news: energy crisis, housing crisis.',
    ['Hospitals warned of a winter crisis in emergency care.', 'Crisis talks ran overnight before the strike was suspended.'],
    'a crisis in + area; crisis talks. Plural: crises. Stronger/sudden: emergency. Weaker: problem. Not a small inconvenience.',
    ['emergency']
  ),
  cultural: L(
    'Cultural means connected with arts, customs, or a group’s way of life: cultural diversity; cultural heritage. Culture is the noun (already in the dictionary). Multicultural describes a place with many cultures. Do not use cultural as a vague synonym for interesting. Cultural appropriation is a debate phrase — define it if you use it in an essay.',
    ['The festival celebrates the city’s cultural diversity.', 'Cultural heritage funding saved the library’s local-history collection.'],
    'cultural diversity / heritage / differences. Noun: culture. Place with many cultures: multicultural. Not a filler for “interesting”.',
    []
  ),
}
