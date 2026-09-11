const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2I = {
  dilemma: L(
    'A dilemma is a choice between two difficult options: face a dilemma; an ethical dilemma. Problem is wider; quandary is a close formal twin. Dilemma originally stressed two paths, though everyday use sometimes stretches. Do not call a missing pen a dilemma. On the horns of a dilemma is an idiom. In news, policymakers are “caught in a dilemma” between cost and safety.',
    ['The board faced a dilemma: cut staff or close the branch.', 'An ethical dilemma in the trial was whether to continue after side effects appeared.'],
    'face / pose a dilemma; an ethical dilemma. Wider: problem. Formal: quandary. Not a minor inconvenience. Idiom: on the horns of a dilemma.',
    ['quandary']
  ),
  disclose: L(
    'To disclose is to make secret or private information known: disclose donations; disclose that. Disclosure is the noun (later in this set). Reveal is close; leak implies unofficial. Confess is about guilt. Do not disclose medical details without consent. UK politics: MPs must disclose interests. Do not mix disclose with close (shut).',
    ['Candidates must disclose any conflict of interest before the vote.', 'The trust refused to disclose patient names, which is the privacy sense.'],
    'disclose information / that + clause. Noun: disclosure. Close: reveal. Unofficial: leak. Interests and donations in UK public life.',
    ['reveal']
  ),
  discriminate: L(
    'To discriminate against someone is to treat them unfairly because of a protected characteristic. Discriminate can also mean to see a fine difference (discriminate between). Discrimination is the noun. Distinguish is the neutral “tell apart” twin. UK law: Equality Act. Do not write “discriminate someone” — use discriminate against. Positive discrimination is a contested phrase; UK official language often prefers positive action.',
    ['It is illegal to discriminate against staff because of disability.', 'Trained listeners can discriminate between the two vowel sounds, which is the “tell apart” sense.'],
    'discriminate against + group. Tell apart: discriminate between. Noun: discrimination. Neutral twin: distinguish. Not “discriminate someone”.',
    []
  ),
  discrimination: L(
    'Discrimination is unfair treatment based on group identity: racial discrimination; discrimination on the grounds of age. It can also mean fine judgement (a critic of discrimination and taste). Prejudice is an attitude; discrimination is often the act or system. Uncountable in the legal sense. Do not use it for any disappointment (“the referee’s discrimination”).',
    ['The tribunal found discrimination in the shortlisting process.', 'Age discrimination in job adverts is a recurring UK news story.'],
    'Uncountable (law): discrimination; discrimination against / on the grounds of. Attitude: prejudice. Taste sense is rarer and formal.',
    []
  ),
  dissertation: L(
    'A dissertation is a long researched essay for a degree: a 10,000-word dissertation; dissertation supervisor. Thesis is often used for a doctorate in the UK, though practice varies. Essay is shorter; paper can be a journal article. Do not call a 1,500-word module essay a dissertation. UK undergraduates often write a final-year dissertation.',
    ['Her dissertation compared housing waiting lists in two cities.', 'You cannot change the dissertation title after the faculty deadline without permission.'],
    'a BA/BSc dissertation; supervisor / proposal. Doctorate: often thesis. Shorter: essay. Not a weekly assignment.',
    []
  ),
  distinguish: L(
    'To distinguish is to see or show a difference: distinguish A from B; distinguish between. Distinct and distinctive are already in the dictionary. Discriminate between is a close twin (without the unfair-treatment sense). Distinguish yourself means become noticeable for quality. Do not write “distinguish A to B”.',
    ['The paper asks you to distinguish fact from opinion.', 'She distinguished herself in the internship, which is the “stand out” sense.'],
    'distinguish A from B; distinguish between. Close: tell apart. Stand out: distinguish yourself. Related adjectives: distinct / distinctive.',
    ['differentiate']
  ),
  distract: L(
    'To distract is to pull attention away: distract someone from work; a distracting noise. Distraction is the noun. Attract is almost an opposite direction. Do not mix distract with extract (pull out) or detract (take away from value). In exams, phones distract candidates — a common invigilator warning.',
    ['Notifications distract candidates during the listening paper.', 'The brightly coloured sidebar distracted readers from the main claim.'],
    'distract someone from + noun/-ing. Noun: distraction. Mix-ups: extract, detract, attract. Exam halls: no distracting devices.',
    []
  ),
  distribution: L(
    'Distribution is how something is shared or spread: income distribution; distribution of resources. It is also the logistics of delivering goods (a distribution centre). Distribute is already in the dictionary. Allocation is a close policy twin. Uncountable in many economic uses. Do not call one parcel a distribution.',
    ['The report mapped the distribution of GP posts across rural counties.', 'A distribution centre on the ring road delayed supermarket restocking, which is the logistics sense.'],
    'income / geographical distribution; a distribution centre. Verb: distribute. Policy twin: allocation. Not one delivery.',
    []
  ),
  diverse: L(
    'Diverse means including many types: a diverse workforce; diverse views. Diversity is already in the dictionary. Varied is close; mixed can be looser. Do not call two similar items diverse. UK organisations publish diversity and inclusion reports. Diverse from is wrong — use different from; diverse as an adjective stands before the noun or after be.',
    ['The city has a diverse population and several community languages.', 'A diverse shortlist was a condition of the funding, not an optional extra.'],
    'a diverse + noun; be diverse. Noun: diversity. Close: varied. Not for two similar things. Pattern: different from, not diverse from.',
    ['varied']
  ),
  dividend: L(
    'A dividend is a share of profits paid to shareholders: pay a dividend; dividend cut. It also appears in pay dividends (bring later benefits). Yield is related in investment English. Do not mix dividend with divide (the verb) or divine. Company results in UK news often lead on the dividend.',
    ['The firm cut its dividend after a weak quarter.', 'Early language support paid dividends in later exam scores, which is the idiom.'],
    'pay / cut / raise a dividend. Idiom: pay dividends. Mix-up: divide, divine. Investors vs employees (wages).',
    []
  ),
  division: L(
    'Division is a split, a disagreement, or a section of an organisation: a division of opinion; the sales division; long division in maths. Divide is the verb (already in the dictionary). Unit and department are close organisational twins. Do not use division for a friendly difference of taste in a formal report unless there is a real split.',
    ['There was a sharp division of opinion on expanding the airport.', 'She moved to the research division after the merger.'],
    'division of opinion / labour; a company division. Verb: divide. Maths: long division. Organisational twins: department / unit.',
    []
  ),
  documentary: L(
    'A documentary is a factual film or radio programme: a documentary about housing; a documentary maker. Feature film is fiction; news report is shorter. Documentary can be an adjective (documentary evidence). Do not call a two-minute clip a documentary. UK broadcasting: BBC documentaries as a genre.',
    ['The documentary followed three families on the waiting list.', 'Lawyers asked for documentary evidence, which is the adjective sense.'],
    'a documentary on/about. Adjective: documentary evidence. Fiction: feature film. Short news: a report. Not a brief clip.',
    []
  ),
  documentation: L(
    'Documentation is official papers or written instructions: bring documentation; software documentation. Document is already in the dictionary as one file or to record. Paperwork is everyday. Uncountable. Do not write “a documentation”. Visa and HR processes list required documentation.',
    ['Bring original documentation to the biometric appointment.', 'The app’s documentation omitted the privacy settings, which is the software sense.'],
    'Uncountable: documentation; required / supporting documentation. One file: a document. Everyday: paperwork. Not “a documentation”.',
    ['paperwork']
  ),
  dominance: L(
    'Dominance is the fact of being more powerful or common: market dominance; dominance of a language. Dominant is the adjective (next). Domination is close but can sound more political or sporting. Dominate is already in the dictionary. Uncountable. Do not use dominance for a one-off win without a pattern of power.',
    ['Regulators examined one chain’s dominance of local groceries.', 'The dominance of English in the journals worries some researchers.'],
    'Uncountable: dominance; market / linguistic dominance. Adjective: dominant. Verb: dominate. Close: domination.',
    []
  ),
  dominant: L(
    'Dominant means most powerful, common, or noticeable: the dominant firm; a dominant narrative. Predominant is close; prevailing is a cousin. Recessive is a genetics opposite, not for essays on markets. Do not call a minority view dominant. In academic writing, the dominant explanation is the one most widely accepted for now.',
    ['English is the dominant language of the conference proceedings.', 'A dominant retailer can squeeze suppliers, which is the market sense.'],
    'a dominant + noun; be dominant. Noun: dominance. Close: predominant. Not a fringe view. Verb: dominate.',
    ['predominant']
  ),
  donate: L(
    'To donate is to give money, goods, or blood to help: donate to a charity; donate blood. Donation and donor follow in this set. Give is everyday; contribute can be money or ideas. Do not donate data in a privacy policy without reading it — companies also use donate loosely. Organs can be donated after death under UK rules.',
    ['Staff donated a day’s pay to the appeal.', 'She donates blood three times a year, which is the medical sense.'],
    'donate money / blood / goods to. Nouns: donation, donor. Everyday: give. Not a forced payment (that is a tax or a fine).',
    ['give']
  ),
  donation: L(
    'A donation is a gift of money or goods to help: make a donation; donations of equipment. Donate is the verb. Grant is usually from an official body with conditions. Uncountable when you mean donated goods in bulk. Do not call a compulsory levy a donation. UK: Gift Aid on charitable donations.',
    ['The hospital thanked the public for donations of monitors.', 'A large donation from an anonymous trust funded the scholarships.'],
    'make / receive a donation; donations of + goods. Verb: donate. Official funds: grant. Compulsory: tax / levy, not donation.',
    []
  ),
  donor: L(
    'A donor gives money, goods, or an organ: an anonymous donor; a blood donor; donor countries in aid. Recipient is the other side. Sponsor often expects branding. Do not call a customer a donor. UK news: organ-donor register, political donors and transparency.',
    ['Anonymous donors funded the lab for two years.', 'He joined the organ-donor register after the campaign, which is the medical sense.'],
    'a blood / organ / political donor; donor countries. Other side: recipient. Branding expected: sponsor. Verb: donate.',
    []
  ),
  dose: L(
    'A dose is a measured amount of medicine: a daily dose; do not exceed the dose. Dosage is the system of how much and how often. Overdose is dangerous excess. Do not self-increase a dose. A dose of can be metaphorical (a dose of realism) — keep metaphors out of clinical instructions.',
    ['Do not increase the dose without advice from a pharmacist.', 'The trial compared two doses, which is why the groups were randomised.'],
    'a daily / recommended dose; exceed the dose. System: dosage. Danger: overdose. Metaphor: a dose of realism (not in medical leaflets).',
    []
  ),
  downside: L(
    'A downside is the negative side of something that also has benefits: the downside of remote work; every plan has a downside. Disadvantage is close; drawback is already in the dictionary. Upside is the opposite informal twin. Do not use downside for a disaster with no benefits. In evaluations, weigh upside and downside.',
    ['The downside of the cheaper contract was weaker after-sales support.', 'There is a downside to publishing fast: errors reach a bigger audience.'],
    'the downside of + noun/-ing. Close: disadvantage / drawback. Opposite informal: upside. Mixed situations, not pure harm.',
    ['drawback']
  ),
  drastic: L(
    'Drastic means extreme and sudden in effect: drastic cuts; drastic action. Dramatic is already in the dictionary and stresses striking change, not always severity. Severe is close. Drastically is the adverb. Do not call a 1% tweak drastic. News editors like drastic measures — check if the evidence is really extreme.',
    ['Drastic cuts left villages without an evening bus.', 'The regulator called for drastic action on sewage spills, not another voluntary code.'],
    'drastic cuts / action / measures. Adverb: drastically. Close: severe. Mix-up: dramatic (striking). Not a tiny change.',
    ['severe']
  ),
  dual: L(
    'Dual means two-part: dual nationality; dual controls in a learner car; a dual mandate. Double can be two of the same thing; twin stresses matching pair. Do not write dual when you mean duel (a fight). Dual-use goods in news are civilian products with military potential.',
    ['She holds dual nationality and can work in either state.', 'The driving-school car has dual controls, which is the training sense.'],
    'dual nationality / controls / purpose. Mix-up: duel (fight). Close: double (not always interchangeable). News: dual-use technology.',
    []
  ),
  durable: L(
    'Durable means lasting and not easily damaged: durable materials; durable goods (economics). Lasting and robust are close; robust is already in the dictionary. Fragile is an opposite. Durability is the noun. Do not call a paper cup durable. Exam essays on consumption contrast durable goods with perishables.',
    ['The specification required a more durable roof membrane.', 'Sales of durable goods fell when credit tightened, which is the economics sense.'],
    'durable materials / goods. Noun: durability. Close: lasting / robust. Opposite: fragile. Economics: durable vs perishable goods.',
    ['lasting']
  ),
  dynamic: L(
    'Dynamic means energetic and changing: a dynamic market; a dynamic leader. Dynamics (often plural) are the forces in a system. Static is a contrast. Do not overuse dynamic in CVs — give evidence. In science, dynamics has a technical sense. Dynamism is the noun for energy.',
    ['The labour market is more dynamic than the simple model allows.', 'Group dynamics in the seminar silenced quieter students, which is the systems sense.'],
    'a dynamic + noun. Nouns: dynamism; dynamics (forces in a system). Contrast: static. CV caution: show evidence, not the adjective alone.',
    []
  ),
  diagnosis: L(
    'A diagnosis names an illness or problem: an early diagnosis; diagnosis of the fault. Diagnose is already in the dictionary. Prognosis is the likely future course — a classic mix-up. Plural: diagnoses. Do not self-diagnose from a headline. In policy, a diagnosis of the problem precedes the remedy.',
    ['Early diagnosis improved survival in the screening programme.', 'Engineers published a diagnosis of the signal failure, which is the technical sense.'],
    'a diagnosis of; early / misdiagnosis. Verb: diagnose. Mix-up: prognosis (outlook). Plural: diagnoses.',
    []
  ),
  dialogue: L(
    'Dialogue is conversation in a text, or formal talks between groups: a constructive dialogue; dialogue between unions and ministers. Discussion is wider; negotiation aims at a deal (already in related B2 material). US spelling dialog in computing. Do not call a shouted row a dialogue. Interfaith dialogue is a common news collocation.',
    ['The union called for dialogue rather than an immediate strike.', 'The novel’s dialogue sounds spoken, which is the literary sense.'],
    'dialogue between A and B; a dialogue with. Literary: written speech. Computing US: dialog. Not a row. Close: talks / discussion.',
    ['talks']
  ),
  diplomatic: L(
    'Diplomatic means to do with relations between states: a diplomatic source; diplomatic immunity. It also means tactful. Diplomat is the person. Undiplomatic is blunt. Do not call a private apology diplomatic immunity. UK news: diplomatic tensions, embassy staff.',
    ['A diplomatic source said the talks were close to collapse.', 'A diplomatic email would have thanked the host before listing complaints, which is the tact sense.'],
    'diplomatic talks / sources / immunity. Person: diplomat. Tactful: a diplomatic remark. Opposite: undiplomatic.',
    ['tactful']
  ),
  disability: L(
    'Disability is a condition that limits activities: people with disabilities; disability access; disability benefits. Disabled is the adjective; language preferences vary — follow the community or style guide you are given. Inability is simply not being able, without this social/legal sense. UK: Equality Act, reasonable adjustments. Do not use disability as an insult.',
    ['The station still fails on disability access.', 'Disability benefits were delayed, which is why the advice charity’s queue grew.'],
    'people with disabilities / disabled people (check style). Access / benefits / discrimination. Law: reasonable adjustments. Not an insult or a joke.',
    []
  ),
  disadvantage: L(
    'A disadvantage makes a situation harder or less fair: at a disadvantage; social disadvantage. Advantage is the opposite (already in the dictionary). Drawback and downside are close for a mixed plan. Disadvantaged as an adjective describes people or areas with fewer resources. Do not write “disadvantage to do” — use at a disadvantage / a disadvantage of -ing.',
    ['A late start puts candidates at a disadvantage in a timed paper.', 'The essay discussed educational disadvantage, not only individual effort.'],
    'at a disadvantage; a disadvantage of. Opposite: advantage. Adjective: disadvantaged. Close: drawback. Pattern: not “disadvantage to do”.',
    ['drawback']
  ),
  discharge: L(
    'To discharge can mean officially let someone leave hospital, the army, or bankruptcy; or to release a substance: discharge a patient; discharge into the river. Discharge is also a noun. Release is close for leaving; emit is close for gases (later in this set). Do not mix discharge with discard (throw away). NHS: discharge summaries.',
    ['She was discharged from hospital the same afternoon.', 'The works were fined for illegal discharge into the river, which is the pollution sense.'],
    'discharge a patient / from hospital; a discharge summary. Pollution: discharge into water. Mix-up: discard. Noun and verb.',
    []
  ),
  disclosure: L(
    'Disclosure is the act of making hidden information public, or the information itself: full disclosure; disclosure of interests. Disclose is the verb. Leak is unofficial. Transparency is the policy goal. Uncountable in full disclosure. Do not treat a partial leak as full disclosure. UK: freedom of information vs required disclosure in courts.',
    ['Full disclosure of shareholdings is required before the vote.', 'The delayed disclosure of the report damaged trust, which is why journalists persisted.'],
    'full / public disclosure; disclosure of + noun. Verb: disclose. Unofficial: leak. Policy twin: transparency.',
    []
  ),
  dismiss: L(
    'To dismiss is to sack someone, or to reject an idea: dismiss a worker; dismiss a claim; dismiss the figures as unreliable. Dismissal is already in the dictionary. Fire is informal for the job sense; reject is close for ideas. Do not dismiss evidence in an essay without argument. A case can be dismissed in court.',
    ['The minister dismissed the leaked figures as incomplete.', 'The claim was dismissed in court, which is the legal sense.'],
    'dismiss someone (sack); dismiss an idea as. Informal job: fire. Court: dismiss a case. Noun: dismissal.',
    ['reject']
  ),
  disposal: L(
    'Disposal is getting rid of something: waste disposal; disposal of assets. At your disposal means available for you to use. Dispose of is the verb (not dispose something). Dump is informal and often illegal. Do not write “disposal to the bin” — use disposal of. UK: fly-tipping vs legal disposal.',
    ['Safe disposal of clinical waste is tightly regulated.', 'A car was placed at their disposal during the visit, which is the “available” idiom.'],
    'disposal of waste / assets; waste disposal. Verb: dispose of (not dispose + object). Idiom: at your disposal. Informal illegal: dump.',
    []
  ),
  dispute: L(
    'A dispute is a serious, often public disagreement: a pay dispute; dispute over borders. Dispute is also a verb (they dispute the figures). Argument is everyday; conflict is already in the dictionary and can be stronger. In dispute means not agreed. Do not call a mild preference a dispute.',
    ['A pay dispute closed the terminal for a week.', 'Historians still dispute the size of the crowd, which is the verb.'],
    'a pay / legal / industrial dispute; in dispute. Verb: dispute the claim. Everyday: argument. Stronger: conflict.',
    ['argument']
  ),
  disruption: L(
    'Disruption is a break in normal activity: travel disruption; disruption to lessons. Disrupt is already in the dictionary. Interruption is often shorter; chaos is looser. In business speak, disruption can mean upsetting a market with a new model — define it. UK rail: disruption expected. Do not celebrate “disruption” in a public-service essay without saying who loses.',
    ['Signal failure caused disruption across the commuter network.', 'The tech firm’s so-called disruption of taxis left drivers without sick pay, which is the critical business sense.'],
    'disruption to + noun; travel disruption. Verb: disrupt. Shorter: interruption. Business buzzword: market disruption (define).',
    []
  ),
  distortion: L(
    'A distortion is a twisted or inaccurate version: a distortion of the facts; price distortions. Distort is already in the dictionary. Misrepresentation is a close legal twin. Bias is already in the dictionary and is a leaning; distortion is the warped output. Do not call a rounding error a distortion unless it changes the meaning.',
    ['The headline was a distortion of the study’s cautious conclusion.', 'Tax rules created distortions in the housing market, which is the economics sense.'],
    'a distortion of the facts / data. Verb: distort. Close: misrepresentation. Related: bias. Economics: price distortions.',
    []
  ),
  debt: L(
    'Debt is money owed: in debt; national debt; student debt. Loan is the money lent (already related in B1); deficit is a gap in a budget (already in the dictionary). Uncountable in much economic writing; a debt can be countable. Do not confuse debt with doubt (silent b in debt: /det/). UK news: household debt, debt relief.',
    ['Student debt shaped her choice of first job.', 'The chancellor warned that national debt would rise if the tax cut went ahead.'],
    'in debt; household / national / student debt. Pronunciation: /det/. Related: loan, deficit. Countable: a debt of £X.',
    []
  ),
  declaration: L(
    'A declaration is an official public statement: a declaration of interests; a customs declaration. Declare is the verb. Announcement is close; manifesto is a party programme. Uncountable in declaration of war as a set phrase. Do not call a tweet a declaration unless it is clearly official. Exam papers: declaration of authenticity on coursework.',
    ['The company issued a declaration of its emissions targets.', 'A customs declaration must list the goods, which is the form sense.'],
    'a declaration of + noun; customs / tax declaration. Verb: declare. Close: announcement. Coursework: authenticity declaration.',
    ['announcement']
  ),
  decrease: L(
    'To decrease is to become smaller or fewer: decrease by 10%; decrease in demand. Decrease is also a noun (a decrease in). Increase is the opposite. Decline is already in the dictionary and often sounds more formal or negative. Reduce is usually a transitive verb (reduce something). Do not write “decrease down”.',
    ['Waiting times decreased after the Saturday clinics opened.', 'There was a decrease in applications, which is the noun.'],
    'decrease by / to; a decrease in. Opposite: increase. Transitive twin: reduce. Formal cousin: decline. Not “decrease down”.',
    ['reduce']
  ),
  defence: L(
    'Defence is protection against attack, or the accused person’s case in court (UK spelling): defence spending; in her defence. Defense is US. Defend is the verb. Offence can be the opposite in sport or law. Ministry of Defence is the UK department. Do not mix defence with deficit. Self-defence is a legal phrase.',
    ['The Budget raised defence spending.', 'The lawyer spoke in her defence, which is the court sense.'],
    'UK: defence. US: defense. spending / in someone’s defence / self-defence. Verb: defend. Department: Ministry of Defence.',
    []
  ),
  equilibrium: L(
    'Equilibrium is a balanced state between opposing forces: market equilibrium; restore equilibrium. Balance is everyday; stability is close. Equilibria is a plural in technical writing. Uncountable in many uses. Do not call a pause in an argument equilibrium unless forces are genuinely balanced. Economics and science share the word with different models.',
    ['The market found a new equilibrium after the subsidy ended.', 'The therapist spoke of emotional equilibrium, which is a transferred sense — keep it precise in science papers.'],
    'market / chemical equilibrium; in equilibrium. Everyday: balance. Plural (technical): equilibria. Not a vague calm.',
    ['balance']
  ),
  earnings: L(
    'Earnings are money received from work or business, usually plural: average earnings; earnings growth. Income is wider (can include benefits); wage is often hourly/weekly (B1); salary is annual professional pay. Profit is for firms after costs. Do not write “an earning” for pay. UK: Office for National Statistics earnings releases.',
    ['Average earnings rose more slowly than rents.', 'The company’s earnings fell in the second quarter, which is the corporate sense.'],
    'Usually plural: earnings; average / weekly earnings. Wider: income. After costs (firm): profit. Not “an earning”.',
    ['income']
  ),
  economically: L(
    'Economically means in relation to the economy, or without waste: economically dependent; economically viable; live economically. Economic is the adjective for the economy; economical means thrifty — a classic mix-up. Economy is already in the dictionary. Do not write economically when you mean merely cheap if you need economical.',
    ['The town is economically dependent on one employer.', 'An economically viable route still needs political support, which is the policy sense.'],
    'economically dependent / viable / inactive. Thrifty adjective: economical (not economic). Noun: economy. Adverb of thrift: also economically.',
    []
  ),
  economist: L(
    'An economist studies or advises on the economy: a government economist; economists warned. Economy and economic are related. Accountant looks at an organisation’s books; economist looks at systems. Do not call a business journalist an economist without the training. Schools of thought (Keynesian etc.) appear in B2 essays.',
    ['An economist warned that the tax cut could raise inflation.', 'University economists disagreed on the size of the multiplier, which is why the report showed a range.'],
    'a chief / academic economist. Field: economics. Mix-up: accountant. Related: economy, economic, economical (thrifty).',
    []
  ),
  educational: L(
    'Educational means connected with education, or useful for learning: educational policy; an educational visit. Education is already in the dictionary. Academic can mean scholarly or school-and-university. Educative is rarer. Do not call a violent video educational ironically in a formal paper without making the irony clear.',
    ['The charity produces educational materials for GCSE revision.', 'An educational visit to the court is not a holiday, which is why risk assessments were required.'],
    'educational policy / materials / visit. Noun: education. Scholarly: academic. Rarer twin: educative.',
    []
  ),
  effectiveness: L(
    'Effectiveness is how well something produces the intended result: measure effectiveness; the effectiveness of a policy. Effective is the adjective (already in the dictionary). Efficiency is about low waste (next). Efficacy is a formal/medical twin. Uncountable. Do not confuse with effect (the result itself).',
    ['The review questioned the effectiveness of the one-day training.', 'Effectiveness is not the same as popularity; a campaign can be liked and still fail.'],
    'Uncountable: effectiveness of + policy/drug. Adjective: effective. Low waste: efficiency. Medical formal: efficacy. Mix-up: effect.',
    []
  ),
  efficiency: L(
    'Efficiency is working well with little waste: energy efficiency; efficiency savings. Efficient is already in the dictionary. Effectiveness is about achieving the goal; you can be efficient at the wrong task. Uncountable. Do not write “an efficiency” for one gadget — that is an efficient device. UK government: efficiency reviews.',
    ['New boilers improved the energy efficiency of the block.', 'Efficiency savings closed the Saturday counter, which is why queues moved online.'],
    'Uncountable: efficiency; energy / fuel efficiency. Adjective: efficient. Goal achievement: effectiveness. You can be efficiently wrong.',
    []
  ),
  electoral: L(
    'Electoral means connected with elections: electoral system; electoral register; electoral fraud. Election is already in the dictionary. Electorate is the body of voters. Electric is a mix-up. Do not call a party’s internal ballot national unless it is. UK: first-past-the-post as an electoral system.',
    ['The party revised its electoral strategy after the locals.', 'Your name must be on the electoral register to vote, which is the administrative sense.'],
    'electoral system / register / commission. Noun: election. Voters as a body: electorate. Mix-up: electric.',
    []
  ),
  electronics: L(
    'Electronics is the technology of electronic devices, or the devices as a field (uncountable): an electronics factory; consumer electronics. Electronic is the adjective (already in the dictionary). Electrical is about electricity in wiring and power. Electricity is the energy. Do not write “an electronic” for a gadget in formal work — name the device.',
    ['The plant switched from textiles to electronics.', 'Consumer electronics sales fell when households delayed upgrades.'],
    'Uncountable field: electronics; consumer electronics. Adjective: electronic. Wiring/power: electrical. Energy: electricity.',
    []
  ),
  elevate: L(
    'To elevate is to raise to a higher level or rank (formal): elevate the debate; elevated to the board. Lift and raise are everyday. Elevation is the noun (also height above sea level). Do not use elevate for putting a box on a shelf in an exam story — too grand. Elevated risk is a medical/policy collocation.',
    ['The appointment elevated her to the senior team.', 'The guidance warned of an elevated risk of flooding, which is the “raised” adjective sense.'],
    'elevate someone to a post; elevate the discussion. Everyday: raise / lift. Noun: elevation. Medical: elevated risk / temperature.',
    ['raise']
  ),
  elimination: L(
    'Elimination is complete removal: elimination of waste; disease elimination. Eliminate is already in the dictionary. Reduction is partial. In competitions, elimination rounds knock people out. Uncountable in many policy uses. Do not promise elimination if you only mean a small cut.',
    ['The campaign aims at elimination of avoidable infections.', 'An elimination round cut the field from sixteen to eight, which is the contest sense.'],
    'elimination of + problem; disease elimination. Verb: eliminate. Partial: reduction. Sport/quiz: elimination round.',
    []
  ),
  emergence: L(
    'Emergence is the process of appearing or becoming known: the emergence of a trend; emergence from lockdown. Emerge is already in the dictionary. Appearance can be a look or an arrival; rise is close for power. Emergency is a different word (a crisis). Uncountable. Do not mix emergence with emergency.',
    ['The emergence of remote work changed demand for offices.', 'Her emergence as a negotiator surprised colleagues who knew her only as a researcher.'],
    'the emergence of + noun. Verb: emerge. Mix-up: emergency. Close: rise / appearance (arrival sense). Uncountable.',
    []
  ),
  emit: L(
    'To emit is to send out gas, heat, light, or sound: emit carbon; emit a signal. Emission is already in the dictionary. Discharge can overlap for liquids; radiate is for energy. Do not say emit an opinion — that is express. UK climate policy: emitters, emissions trading.',
    ['The plant still emits more carbon than the target allows.', 'The device emits a beep if the seal is broken, which is the sound sense.'],
    'emit gas / light / sound / a signal. Noun: emission. Opinions: express, not emit. Climate: carbon emitters.',
    []
  ),
  emotional: L(
    'Emotional means connected with feelings, or showing strong feelings: emotional support; an emotional speech. Emotion is already in the dictionary. Emotive describes language designed to stir feeling (an emotive issue). Sentimental can sound overly sweet. Do not call a dry data table emotional. UK: emotional wellbeing in school policies.',
    ['The documentary gave an emotional account of the inquiry.', 'Emotional language in the leaflet was criticised as emotive, which is the fine distinction.'],
    'emotional support / impact / speech. Noun: emotion. Language that stirs: emotive. Over-sweet: sentimental. Wellbeing policies.',
    []
  ),
  emphasis: L(
    'Emphasis is special importance placed on something: place / put / lay emphasis on; emphasis on skills. Emphasize is already in the dictionary (US spelling of the verb). Stress is a close twin. Emphases is a rare plural. Do not write “emphasis on to do” — use emphasis on + noun/-ing. In speech, emphasis is also extra force on a word.',
    ['The new syllabus places more emphasis on speaking.', 'Wrong emphasis in the quote changed the witness’s meaning, which is the stress-in-speech sense.'],
    'place / put emphasis on + noun/-ing. Verb: emphasise (UK) / emphasize (US, already listed). Close: stress. Plural rare: emphases.',
    ['stress']
  ),
  enact: L(
    'To enact is to make a bill into law: enact legislation; enact a ban. It also means to perform a scene. Pass a law is everyday; legislate is a close verb. Enactment is the noun. Do not use enact for a private New Year promise. UK: Parliament enacts statutes; statutory instruments are a related but distinct process.',
    ['Parliament enacted the smoking ban after a free vote.', 'Students enacted the scene from the play, which is the performance sense.'],
    'enact a law / ban. Everyday: pass a law. Noun: enactment. Theatre: enact a scene. Not a personal resolution.',
    []
  ),
  encounter: L(
    'To encounter is to come across a problem or meet someone, often unexpectedly: encounter delays; encounter resistance. Meet is everyday; face is close for problems. Encounter is also a noun (a brief encounter). Do not use encounter for a planned weekly tutorial. Academic papers: the difficulties encountered.',
    ['Applicants still encounter delays in the visa system.', 'Their first encounter was at a conference, which is the noun.'],
    'encounter a problem / resistance; an encounter with. Everyday: meet / come across. Planned meeting: appointment. Academic: difficulties encountered.',
    ['meet']
  ),
  endorsement: L(
    'An endorsement is public support or approval: union endorsement; celebrity endorsement. Endorse is already in the dictionary. Recommendation is close; sponsorship usually involves money and branding. On a driving licence, an endorsement is a penalty record — a UK-specific sense. Do not treat a like on social media as a formal endorsement.',
    ['The union’s endorsement changed the campaign’s tone.', 'Celebrity endorsement of the drink drew a complaint to the advertising regulator.'],
    'an endorsement of / from; celebrity / political endorsement. Verb: endorse. UK driving licence: penalty endorsement. Money+brand: sponsorship.',
    ['backing']
  ),
  enforcement: L(
    'Enforcement is making people obey a law or rule: law enforcement; parking enforcement; enforcement action. Enforce is already in the dictionary. Implementation is putting a policy into practice, not always with penalties. Police is a specific agency. Uncountable. Do not call a poster campaign enforcement.',
    ['Parking enforcement increased after residents complained.', 'Without enforcement, the smoking ban would have been a slogan.'],
    'Uncountable: enforcement; law / parking enforcement; enforcement action. Verb: enforce. Putting into practice: implementation. Poster ≠ enforcement.',
    []
  ),
  engagement: L(
    'Engagement is involvement: public engagement; engagement with the consultation. It also means an agreement to marry, or a formal appointment. Engage is already in the dictionary. Participation is close for taking part. Uncountable in the civic sense. Do not use engagement as a buzzword without saying who is involved. Staff engagement surveys are a HR collocation.',
    ['The consultation showed weak public engagement in poorer wards.', 'They announced their engagement in the local paper, which is the marriage sense.'],
    'public / civic / staff engagement; engagement with. Marriage: an engagement. Appointment: a previous engagement. Verb: engage.',
    ['involvement']
  ),
  engineering: L(
    'Engineering is designing and building machines, structures, or systems: civil engineering; software engineering. Engineer is already in the dictionary. Science is wider; technology is the application. Uncountable as a field. Do not call changing a plug engineering. UK: chartered engineer as a professional status.',
    ['She studied civil engineering and now works on flood defences.', 'Software engineering standards were part of the audit, not only the design sketches.'],
    'Uncountable field: engineering; civil / mechanical / software engineering. Person: engineer. DIY ≠ engineering. Professional: chartered engineer.',
    []
  ),
  enterprise: L(
    'An enterprise is a business, especially one involving initiative or risk: a small enterprise; social enterprise. It also means the quality of being enterprising. Company and firm are everyday. Free enterprise is a political phrase. Do not call a lemonade stand a multinational enterprise. UK: small and medium-sized enterprises (SMEs).',
    ['Tax relief was aimed at small enterprise in the region.', 'The school prize for enterprise went to a repair café, which is the initiative sense.'],
    'a small / social enterprise; SMEs. Quality: enterprise / enterprising. Everyday: company / firm. Political: free enterprise.',
    ['business']
  ),
  enthusiasm: L(
    'Enthusiasm is keen interest: enthusiasm for; curb your enthusiasm. Enthusiastic is the adjective (next). Interest is weaker; passion is stronger and more personal. Uncountable. Do not write “an enthusiasm” for a hobby unless you mean a particular enthusiasm of hers (possible but marked). Lack of enthusiasm is a common appraisal comment.',
    ['Her enthusiasm for the methods module surprised the tutor.', 'Enthusiasm alone did not pass the practical; accuracy still counted.'],
    'Uncountable: enthusiasm for + noun/-ing. Adjective: enthusiastic. Weaker: interest. Stronger: passion. Appraisal: lack of enthusiasm.',
    ['keenness']
  ),
  entirely: L(
    'Entirely means completely: not entirely fair; entirely different. Entire is already in the dictionary. Completely and wholly are close; wholly is more formal. Do not use entirely with a comparative (*entirely bigger). Not entirely is a polite hedge in academic disagreement.',
    ['The delay was not entirely the contractor’s fault.', 'The two datasets are entirely separate, which is why you cannot merge them casually.'],
    'entirely + adjective; not entirely. Adjective: entire. Close: completely / wholly. No entirely + comparative. Hedge: not entirely convinced.',
    ['completely']
  ),
  entitle: L(
    'To entitle is to give a legal or official right: be entitled to leave; entitle someone to a refund. Entitlement is the noun (next). Allow is weaker; qualify for is close. Title as a book name is a different verb (the book is entitled X) — same spelling, different meaning. Do not write “entitle to do” without be entitled to.',
    ['A full-time contract entitles staff to paid sick leave.', 'The novel is entitled after a local river, which is the “named” sense.'],
    'be entitled to + noun/-ing. Noun: entitlement. Book name: be entitled X. Close: qualify for. Weaker: allow.',
    []
  ),
  entitlement: L(
    'Entitlement is an official right: holiday entitlement; benefit entitlement. It can also criticise an attitude of expecting privilege (a sense of entitlement). Entitle is the verb. Right is everyday; benefit is a specific payment. Uncountable in HR. Do not confuse with title (Mr, Dr, a book title).',
    ['Check your holiday entitlement in the handbook.', 'A sense of entitlement in the email offended the volunteers, which is the critical sense.'],
    'holiday / pension / benefit entitlement. Verb: entitle. Critical: a sense of entitlement. Mix-up: title. HR uncountable.',
    ['right']
  ),
  environmental: L(
    'Environmental means connected with the natural environment and human impact: environmental policy; environmental impact assessment. Environment is already in the dictionary. Ecological is already in the dictionary and is more about ecosystems. Green is informal/political. Do not call office “environment” (workplace mood) environmental in the climate sense without care.',
    ['The plant must publish an environmental impact assessment.', 'Environmental regulations delayed the runway, which is why the inquiry sat for months.'],
    'environmental policy / impact / regulations. Noun: environment. Ecosystem-focused: ecological. Informal: green. Workplace “environment” is a different sense.',
    []
  ),
  equality: L(
    'Equality is having the same rights and opportunities: equality before the law; equality of opportunity. Equal is already in the dictionary. Equity in policy English often means fairness that may treat groups differently to reach a fair outcome — a debated distinction. Inequality is the opposite. Uncountable. UK: Equality Act 2010.',
    ['The Act requires equality of treatment in recruitment.', 'Pay equality was still not achieved in the senior grades.'],
    'Uncountable: equality; equality of opportunity / before the law. Adjective: equal. Opposite: inequality. Policy cousin: equity (define).',
    []
  ),
  equation: L(
    'An equation is a mathematical statement of equality, or the set of factors in a situation: solve the equation; cost is only one part of the equation. Formula is related but not identical. Do not call a recipe an equation. In essays, the political equation means the balance of factors. Equate is the verb (equate X with Y).',
    ['Cost is only one part of the equation when families choose a school.', 'Rearrange the equation before you substitute the values, which is the maths sense.'],
    'solve / rearrange an equation; part of the equation. Verb: equate X with Y. Related: formula. Not a cooking recipe.',
    []
  ),
  ethical: L(
    'Ethical means to do with right and wrong, or morally acceptable: ethical issues; ethical investment. Ethics is the noun (next). Moral is close; legal is about the law — something can be legal but unethical. Unethical is the opposite. Do not use ethical as a marketing sticker without criteria. Research: ethical approval.',
    ['The committee raised ethical questions about consent.', 'Ethical investment funds still need scrutiny, which is why the essay defined the term.'],
    'ethical issues / approval / investment. Noun: ethics. Close: moral. Contrast: legal. Opposite: unethical. Research ethics boards.',
    ['moral']
  ),
  ethics: L(
    'Ethics are moral principles, especially professional: medical ethics; a code of ethics. Ethic is already in the dictionary as a countable “ethic of”. Ethical is the adjective. Morals is everyday. Usually plural in this professional sense. Do not mix ethics with ethnics. Journalism ethics cover source protection.',
    ['Medical ethics require that patients can refuse treatment.', 'The code of ethics banned undeclared gifts, which is why the dinner was logged.'],
    'Usually plural: ethics; medical / journalistic ethics; a code of ethics. Adjective: ethical. Everyday: morals. Mix-up: ethnic.',
    ['morals']
  ),
  evaluation: L(
    'An evaluation is a judgement of worth or success: an evaluation of the pilot; performance evaluation. Evaluate is already in the dictionary. Assessment is close (already in the dictionary); appraisal is often HR. Uncountable in evaluation research. Do not call a one-word “good” an evaluation. UK public services: process and outcome evaluation.',
    ['The evaluation of the pilot will be published in June.', 'Self-evaluation in the portfolio must cite evidence, not only feelings.'],
    'an evaluation of; process / outcome evaluation. Verb: evaluate. Close: assessment. HR: appraisal. Needs criteria and evidence.',
    ['assessment']
  ),
  evolution: L(
    'Evolution is gradual development: the theory of evolution; evolution of policy. Evolve is already in the dictionary. Revolution is sudden and sweeping — a useful contrast. Uncountable in biology. Do not use evolution for a one-week rebrand. Scientific essays: natural selection is a mechanism, not a synonym of evolution.',
    ['The paper traces the evolution of remote-work rules since 2020.', 'Evolution by natural selection is a biological theory, which is the science sense.'],
    'Uncountable: evolution of + noun; theory of evolution. Verb: evolve. Sudden change: revolution. Not a one-week tweak.',
    []
  ),
  examination: L(
    'Examination is a formal word for a test, or a close look: on closer examination; a medical examination. Exam is already in the dictionary as the short form. Inspect is a close verb. Uncountable in under examination. Do not write examination when you mean the everyday exam in informal notes — but academic papers prefer examination of the evidence.',
    ['On closer examination, the graph did not support the headline.', 'A medical examination was required before the diving course, which is the health sense.'],
    'on closer examination; an examination of the evidence. Short: exam. Health: medical examination. Verb: examine.',
    ['exam']
  ),
  exception: L(
    'An exception is a case a rule does not cover: an exception to the rule; without exception; make an exception. Except is already in the dictionary. Exceptional (next-but-one in spirit) means unusually good or unusual. Do not write “exception of” when you mean exception to. Legal: exception clauses in contracts.',
    ['Part-time staff are the exception to the bonus scheme.', 'The chair would not make an exception, which is why the deadline stood.'],
    'an exception to; make / without exception. Preposition: to, not of. Adjective: exceptional (unusual / outstanding). Verb/preposition: except.',
    []
  ),
  exclusive: L(
    'Exclusive means limited to a particular group, or a story one outlet has: an exclusive interview; an exclusive club; exclusive of tax (not including). Include is not a clean opposite; inclusive is the policy twin. Exclude is already in the dictionary. Do not call a public park exclusive. Journalism: a world exclusive.',
    ['The paper ran an exclusive interview with the whistleblower.', 'Prices are exclusive of VAT, which is the “not including” sense.'],
    'an exclusive + noun; exclusive of (not including). News: an exclusive. Opposite policy tone: inclusive. Verb: exclude.',
    []
  ),
  executive: L(
    'An executive is a senior manager: chief executive; executives. It also names the branch of government that runs the state (the executive). Execute is already in the dictionary and can mean carry out or kill — a sharp mix-up. Administrative is more about process. Do not call every office worker an executive. UK companies: executive pay as a news topic.',
    ['The chief executive resigned after the profits warning.', 'Tension grew between the legislature and the executive, which is the government sense.'],
    'chief / senior executive; executive pay. Government: the executive. Mix-up: execute. Not every employee. Adjective: executive decision / lounge.',
    []
  ),
  expenditure: L(
    'Expenditure is spending, or the amount spent (formal): public expenditure; expenditure on health. Spend is everyday; expense and expenses are related. Uncountable in much policy writing; expenditures appears in US accounts. Do not mix expenditure with expander. UK Budgets: current vs capital expenditure.',
    ['Public expenditure on adult social care rose last year.', 'Capital expenditure was delayed, which is why the roof was patched, not replaced.'],
    'Uncountable (UK policy): expenditure on; public / capital expenditure. Everyday: spending. Related: expense. Formal tone.',
    ['spending']
  ),
  extensive: L(
    'Extensive means covering a large area, amount, or range: extensive damage; extensive research; extensive experience. Large is everyday; comprehensive is already in the dictionary and stresses completeness. Intensive (B1) means concentrated effort in a short time — a classic mix-up. Extensively is the adverb. Do not call a paragraph extensive research.',
    ['The storm caused extensive damage to coastal lines.', 'She has extensive experience of inquiry work, not a single placement.'],
    'extensive damage / research / experience. Adverb: extensively. Mix-up: intensive (concentrated). Close: comprehensive (complete).',
    ['wide-ranging']
  ),
  extract: L(
    'To extract is to pull something out, often with effort, or to take a passage from a text: extract a tooth; extract data; an extract from the novel (noun, stress on EX-). Abstract is a summary of a paper; excerpt is already in the dictionary for a taken passage. Do not extract a quote without citation. Mining and chemistry also extract substances.',
    ['The task is to extract the writer’s claim from the paragraph.', 'An extract from the diary was printed in the appendix, which is the noun.'],
    'Verb /ɪkˈstrækt/: extract data / a tooth. Noun /ˈekstrækt/: an extract from. Close: excerpt. Summary of a paper: abstract. Always cite.',
    ['excerpt']
  ),
}
