const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2J = {
  tactic: L(
    'A tactic is a planned method for a particular goal: a delaying tactic; campaign tactics. Strategy is the wider plan; a tactic is one move inside it. Technique is more about skill than politics. Do not call a long-term vision a tactic. UK news: opposition tactics in the Commons; union tactics in a dispute.',
    ['Delaying the vote was a tactic to weaken the opposing amendment.', 'The campaign changed tactics after the first poll, not its whole strategy.'],
    'a delaying / campaign tactic; change tactics. Wider plan: strategy. Skill: technique. Not a long-term vision. Commons/union news.',
    []
  ),
  tangible: L(
    'Tangible means clear enough to see, touch, or measure: tangible results; tangible evidence; a tangible asset. Concrete is a close twin; real is everyday. Intangible is the opposite (brands, morale). Do not call a vague hope tangible. Finance: tangible assets versus goodwill.',
    ['Staff wanted tangible improvements in staffing, not another slogan.', 'There was no tangible evidence of fraud, only rumour.'],
    'tangible results / evidence / benefits. Opposite: intangible. Close: concrete. Finance: tangible assets. Not a slogan or a hope.',
    ['concrete']
  ),
  tariff: L(
    'A tariff is a tax on imports or exports: raise a tariff; tariff barriers. It is also a price list for a service (an energy tariff). Duty and levy are related tax words. Do not mix tariff with terriff (not a word) or terrific. UK news: energy tariffs; trade tariffs after deals change.',
    ['A new tariff on steel raised costs for manufacturers.', 'She switched energy tariff when the cap rose, which is the price-list sense.'],
    'a trade / import tariff; raise / cut tariffs. Energy: an energy tariff. Related: duty / levy. Mix-up: terrific. Not a supermarket sticker price.',
    []
  ),
  technician: L(
    'A technician does skilled practical work with equipment or in a lab: a lab technician; an IT technician. Engineer is often a protected or higher-status title; scientist designs the study. Do not call a receptionist a technician. NHS and universities advertise technician posts for labs and theatres.',
    ['The lab technician calibrated the machines before the practical exam.', 'An IT technician restored the exam platform after the outage.'],
    'a lab / IT / theatre technician. Related: engineer (often different status). Not front-of-house staff. NHS/university job ads.',
    []
  ),
  technique: L(
    'A technique is a particular skilled way of doing something: a breathing technique; research techniques. Method is wider; tactic is more political. Technology is machines and systems, not the same word. Do not write “a technic”. Art, sport, and lab reports all use technique.',
    ['The essay improved once she learned a technique for planning paragraphs.', 'The paper compares two laboratory techniques for measuring pollution.'],
    'a technique for + -ing; research / painting technique. Wider: method. Not technology. Spelling: technique (not technic). Sport/art/lab.',
    ['method']
  ),
  temperament: L(
    'Temperament is a person’s usual mood and way of reacting: a calm temperament; temperament for the role. Personality is wider; temper is a short burst of anger (lose your temper). Do not mix temperament with temperature. Job specs sometimes ask for the right temperament under pressure — a B2 interview word.',
    ['The role needs a calm temperament under live-broadcast pressure.', 'The breeds differ in temperament, which is the animal-behaviour sense.'],
    'a calm / nervous temperament; temperament for. Wider: personality. Burst of anger: temper. Mix-up: temperature. Interviews: temperament under pressure.',
    ['disposition']
  ),
  temporarily: L(
    'Temporarily means for a limited time: temporarily closed; temporarily unavailable. Temporary is the adjective. Permanently is the opposite. Briefly can be even shorter. Do not use temporarily for a change that is clearly permanent. UK notices: footpath temporarily closed.',
    ['The ward was temporarily closed after the outbreak.', 'Files are temporarily unavailable during the overnight backup.'],
    'temporarily + adjective/verb. Adjective: temporary. Opposite: permanently. Shorter: briefly. Notices: temporarily closed.',
    []
  ),
  temporary: L(
    'Temporary means not permanent: a temporary contract; temporary accommodation; a temporary classroom. Temporarily is the adverb. Permanent is the opposite; provisional is close for arrangements still being confirmed. Do not call a ten-year post temporary. UK employment: temp work; temporary contracts in the NHS.',
    ['Temporary classrooms were still in use two years later.', 'She accepted a temporary contract while the permanent round was advertised.'],
    'a temporary contract / measure / classroom. Adverb: temporarily. Opposite: permanent. Close: provisional. Work: a temp / temporary staff.',
    []
  ),
  temptation: L(
    'Temptation is a strong wish to do something unwise: resist temptation; the temptation to + verb. Tempt is the verb. Desire is wider and not always unwise. Uncountable in resist temptation; a temptation is also used. Do not call a duty a temptation. Exam halls: the temptation to check a phone.',
    ['The temptation to check a phone in the exam hall is a disciplinary risk.', 'She resisted the temptation to guess without reading the graph.'],
    'resist temptation; the temptation to + verb. Verb: tempt. Wider: desire. Uncountable and countable. Not a professional duty.',
    []
  ),
  tendency: L(
    'A tendency is a likelihood of behaving in a certain way: a tendency to + verb; a growing tendency. Trend is closer to social or market change; habit is more personal and repeated. Tend is already in the dictionary. Do not write “tendency of doing” — use to-infinitive. Academic: there is a tendency in the literature to…',
    ['There is a tendency to overstate small survey samples.', 'He has a tendency to interrupt, which is why the chair timed turns.'],
    'a tendency to + verb; a growing tendency. Related: tend. Social change: trend. Personal repetition: habit. Not “tendency of doing”.',
    []
  ),
  tension: L(
    'Tension is strain or conflict: political tension; tension between groups; ease the tension. Stress can be personal; conflict is more open. Uncountable in many news uses; tensions (plural) is also common. Do not call a friendly debate tension. Physics also has surface tension — a different field.',
    ['Tension grew between the board and the unions before the ballot.', 'Talks were meant to ease tensions, which is the plural news form.'],
    'tension between; political / racial tension; ease tension(s). Personal: stress. Open fight: conflict. Physics: surface tension. News often uses plural tensions.',
    []
  ),
  tentative: L(
    'Tentative means not yet definite or fully confident: a tentative date; a tentative conclusion; tentative steps. Provisional is a close twin for arrangements; hesitant describes a person. Definitely is an opposite tone. Do not present a tentative finding as proof. Lab and policy papers flag tentative results.',
    ['The date is tentative until the venue confirms capacity.', 'The authors offer only a tentative explanation for the anomaly.'],
    'a tentative date / conclusion / agreement. Close: provisional. Person: hesitant. Opposite tone: definite. Flag uncertainty in academic writing.',
    ['provisional']
  ),
  terminal: L(
    'A terminal is a building where journeys start and end: an airport terminal; a bus terminal. As an adjective, a terminal illness will cause death. Station is everyday for trains; terminus is a line’s end. Do not mix terminal with termly (each term). Computing: a terminal is also a text interface — rare in general B2.',
    ['Passengers were held in the terminal after the security alert.', 'The diagnosis was a terminal illness, which is the medical adjective.'],
    'airport / ferry terminal. Medical adjective: terminal illness. Train everyday: station. Mix-up: termly. Computing sense is specialist.',
    []
  ),
  terminate: L(
    'To terminate is to bring something to an official end: terminate a contract; terminate a process (formal). End is everyday; cancel often means call off before it starts. Dismissal is a related HR noun. Do not use terminate for finishing a sandwich. UK HR: terminate employment — blunt and legal.',
    ['The trust terminated the contract after repeated missed targets.', 'The program terminated with an error, which is the computing sense.'],
    'terminate a contract / agreement / process. Everyday: end. Before it starts: cancel. HR: terminate employment. Formal/legal tone. Noun: termination.',
    ['end']
  ),
  terminology: L(
    'Terminology is the special vocabulary of a subject (uncountable): legal terminology; inconsistent terminology. Term is one word; jargon is terminology that shuts people out. Do not write “a terminology”. Academic advice: define terminology at the first use.',
    ['Learn the terminology before you write the literature review.', 'The two papers used different terminology for the same test, which confused markers.'],
    'Uncountable: terminology; legal / medical terminology. One item: a term. Negative twin: jargon. Not “a terminology”. Define at first use.',
    ['jargon']
  ),
  terrain: L(
    'Terrain is land considered for its physical character: difficult terrain; mountainous terrain (often uncountable). Landscape is more visual; territory is political control. Do not call a city centre terrain unless you mean ground conditions. Military and geography texts use terrain.',
    ['Flooded terrain delayed the repair crews.', 'The pipeline crosses difficult terrain, which is why costs rose.'],
    'difficult / mountainous / unknown terrain. Often uncountable. Visual: landscape. Political: territory. Geography/military register. Not a high street.',
    []
  ),
  territory: L(
    'Territory is land under a country’s or group’s control: disputed territory; on British territory. It is also a professional area (unfamiliar territory). Terrain is physical ground; land is everyday. Do not call a rented flat your territory in a legal essay. Animals mark territory — a biology sense.',
    ['The dispute is over fishing territory, not only trade.', 'Statistics was unfamiliar territory for the history cohort, which is the metaphor.'],
    'disputed / sovereign territory; on someone’s territory. Physical ground: terrain. Metaphor: unfamiliar territory. Biology: animal territory. Not a private tenancy.',
    []
  ),
  terrorism: L(
    'Terrorism is political violence intended to create fear (uncountable): counter-terrorism; an act of terrorism. Terrorist is the person; terror is the feeling or a period of fear. Do not use terrorism for ordinary crime. UK law and news treat the word with legal precision — avoid hyperbole in exams.',
    ['New powers on terrorism were debated after the inquiry.', 'Counter-terrorism officers appealed for witnesses, which is the policing sense.'],
    'Uncountable: terrorism; counter-terrorism; an act of terrorism. Person: terrorist. Feeling: terror. Not ordinary crime. Use precisely in essays.',
    []
  ),
  testify: L(
    'To testify is to give formal evidence, especially in court: testify that; testify against; testify to (also “be evidence of”). Testimony is the noun. Witness is related. Do not use testify for a casual opinion in the pub. Inquiries and trials: witnesses testify under oath.',
    ['Witnesses will testify on the first day of the inquiry.', 'The figures testify to a long-term decline, which is the “are evidence of” sense.'],
    'testify that / against; testify to = be evidence of. Noun: testimony. Related: witness. Formal/legal. Not a casual opinion.',
    []
  ),
  testimony: L(
    'Testimony is a formal statement of evidence: witness testimony; testimony to the inquiry. It also means something that shows a fact (testimony to her skill). Evidence is wider; statement is everyday. Uncountable in much legal use. Do not call a tweet testimony. US spelling testimony is the same; British courts still say evidence in many contexts.',
    ['Her testimony contradicted the official minutes.', 'The restored roof is testimony to the fundraising, which is the “proof of” sense.'],
    'witness testimony; testimony to the inquiry. Proof sense: testimony to. Wider: evidence. Everyday: statement. Often uncountable in law.',
    ['evidence']
  ),
  theorem: L(
    'A theorem is a statement proved from accepted mathematical ideas: prove a theorem; a theorem in geometry. Theory is wider and not always proved. Formula is a rule in symbols, not a proof. Do not call an untested claim a theorem. Maths papers: state and prove the theorem.',
    ['The exam asked for a proof of the theorem, not only the formula.', 'The theorem assumes a right angle, which is why the diagram matters.'],
    'prove / state a theorem. Wider unproved ideas: theory. Symbols: formula. Maths register. Not a hunch or a slogan.',
    []
  ),
  theoretical: L(
    'Theoretical means based on ideas and models rather than practice: theoretical physics; a theoretical risk; in theoretical terms. Practical is a common opposite; empirical means based on data. Theory is the noun. Do not dismiss all theoretical work as useless in an essay — show you know the contrast.',
    ['The saving is theoretical until the pilot is evaluated.', 'The module is more theoretical than the placement year.'],
    'theoretical + noun; in theoretical terms. Opposite: practical. Data-based: empirical. Noun: theory. Flag “theoretical” when results are not yet tested.',
    []
  ),
  therapist: L(
    'A therapist treats a condition through therapy: a speech therapist; a physical therapist (US; UK often physiotherapist); a psychotherapist. Doctor is a wider medical title; counsellor overlaps with talking therapy. Do not call a friend a therapist. NHS waiting lists for therapists are a news staple.',
    ['The waiting list to see a therapist grew after the pandemic.', 'A speech therapist visited the school, which is the paediatric sense.'],
    'a speech / occupational / psycho- therapist. UK physio ≈ US physical therapist. Related: counsellor. Not an unqualified friend. NHS waiting lists.',
    []
  ),
  therapy: L(
    'Therapy is treatment for a physical or mental condition: speech therapy; therapy session; in therapy. Treatment is wider; counselling is talking support (already in B1). Uncountable in much use; a therapy can mean a type. Do not call a hobby therapy unless you mean it metaphorically and say so.',
    ['Speech therapy was offered after the stroke.', 'She has been in therapy for six months, which is the mental-health sense.'],
    'speech / physical / gene therapy; in therapy. Wider: treatment. Talking: counselling. Uncountable and countable. Metaphor: shopping as therapy (informal).',
    ['treatment']
  ),
  thereafter: L(
    'Thereafter means after that time (formal): from 2019 thereafter; shortly thereafter. Afterwards is already in the dictionary and is less legalistic. Then is everyday. Do not use thereafter in casual chat. Contracts and minutes: payment, and thereafter monthly.',
    ['Enrolment closes on Friday; thereafter late applications are refused.', 'The factory closed in June and was demolished shortly thereafter.'],
    'Formal adverb: thereafter. Everyday: afterwards / then. Legal/minutes style. Not informal speech. Pattern: event, thereafter + clause.',
    ['afterwards']
  ),
  thermal: L(
    'Thermal means connected with heat: thermal insulation; thermal energy; thermal imaging. Heat is the everyday noun; hot is a simple adjective. Do not mix thermal with terminal. Outdoor clothing: thermals (underwear). Physics and building-regs texts use thermal.',
    ['Thermal insulation cut the school’s heating bill.', 'Police used thermal cameras in the search, which is the imaging sense.'],
    'thermal insulation / energy / imaging. Everyday: heat / hot. Clothing: thermals. Mix-up: terminal. Building regs and physics register.',
    []
  ),
  threaten: L(
    'To threaten is to say you will cause harm, or to be likely to harm: threaten to + verb; threaten someone with; flooding threatens the line. Threat is already in the dictionary. Warn is not the same (a warning can be protective). Do not write “threaten someone to do”. Climate and crime news both use threaten.',
    ['Flooding still threatens the coastal line in winter.', 'He was accused of threatening a witness, which is the criminal sense.'],
    'threaten to; threaten someone with; something threatens + noun. Noun: threat. Not “threaten someone to”. Protective: warn. Crime and climate news.',
    []
  ),
  threshold: L(
    'A threshold is a level at which something starts: an income threshold; pain threshold; on the threshold of. It is also the floor at a doorway. Limit and limit are close; limit is already in the dictionary as a cap. Do not call every target a threshold. Tax and benefits: income thresholds.',
    ['Income above the threshold is taxed at a higher rate.', 'The industry is on the threshold of a merger wave, which is the metaphor.'],
    'an income / tax threshold; pain threshold; on the threshold of. Doorway: the threshold. Close: limit. Policy: benefit thresholds.',
    []
  ),
  thrive: L(
    'To thrive is to grow or succeed: thrive in; thrive on; plants thrive. Flourish is a close twin (in B1). Survive is weaker (only not die). Do not use thrive for a business that is merely breaking even. Ecology and business features both like thrive.',
    ['Small publishers thrive when libraries still buy local titles.', 'Some plants thrive on poor soil, which is the biological sense.'],
    'thrive in / on; businesses / children / plants thrive. Close: flourish. Weaker: survive. Not mere break-even. Ecology and business register.',
    ['flourish']
  ),
  throughout: L(
    'Throughout means in every part or during the whole time: throughout the country; throughout the paper; throughout history. During is only time; all over is everyday place. Through is already in the dictionary and is not always the same. Do not write “throughout of”. Rubrics: silence throughout the examination.',
    ['Noise continued throughout the listening paper.', 'The same pattern appears throughout the dataset, not in one year only.'],
    'throughout + noun (place or time). Time-only: during. Place everyday: all over. Not “throughout of”. Exam rubrics: throughout the test.',
    []
  ),
  tolerance: L(
    'Tolerance is willingness to accept difference, or the amount of variation allowed: religious tolerance; tolerance of error; zero tolerance. Tolerate is the verb. Acceptance is close; patience is about waiting. Intolerance is the opposite. Engineering: manufacturing tolerance. Do not call a legal duty mere tolerance.',
    ['Workplace policy requires tolerance of religious dress.', 'The part was outside tolerance, which is why the batch failed the test.'],
    'tolerance of / for; religious / zero tolerance. Verb: tolerate. Engineering: manufacturing tolerance. Opposite: intolerance. Not a statutory right.',
    ['acceptance']
  ),
  tolerate: L(
    'To tolerate is to accept something unpleasant, or to allow what you dislike: tolerate delays; will not tolerate abuse. Endurance is physical; put up with is everyday. Tolerance is the noun. Do not write “tolerate someone to do”. Regulators: will not tolerate misleading adverts.',
    ['The regulator will not tolerate misleading fee adverts.', 'Some crops tolerate drought better, which is the biological sense.'],
    'tolerate + noun/-ing; will not tolerate. Everyday: put up with. Noun: tolerance. Not “tolerate someone to”. Biology: tolerate drought. Formal bans.',
    ['endure']
  ),
  toxic: L(
    'Toxic means poisonous, or very harmful to people and culture: toxic waste; a toxic culture; toxic debate. Poisonous is the everyday twin for substances; noxious is formal. Toxicity is the noun. Do not call a mild disagreement toxic. Health and HR both use toxic in UK news.',
    ['The dump was fenced after toxic waste was found.', 'Staff described a toxic culture of blame, which is the workplace metaphor.'],
    'toxic waste / chemicals / culture. Everyday substance: poisonous. Noun: toxicity. Metaphor: toxic debate / culture. Not a mild row.',
    ['poisonous']
  ),
  trademark: L(
    'A trademark is a legally protected name or symbol: register a trademark; trademark infringement. Brand is wider; logo is the picture. TM and ® are symbols. Do not call a generic word your trademark in an essay without the legal sense. IP law: trademarks, patents, copyright (copyright is already in B1).',
    ['Using another firm’s trademark in the logo led to a legal letter.', 'They registered the trademark before the product launched.'],
    'register / infringe a trademark; a registered trademark. Wider: brand. Picture: logo. Related IP: patent / copyright. Symbols: TM / ®.',
    ['brand']
  ),
  traditional: L(
    'Traditional means following long-established customs or methods: traditional dress; a traditional approach; traditional industries. Tradition is already in the dictionary. Conventional is close; old-fashioned can be negative. Do not call last year’s app traditional. Sociology: traditional gender roles — define if you use it.',
    ['The traditional lecture was replaced by shorter seminars.', 'Traditional industries declined after the docks closed.'],
    'traditional + noun; a traditional approach. Noun: tradition. Close: conventional. Negative twin: old-fashioned. Not last season’s fashion. Roles: traditional gender roles.',
    ['conventional']
  ),
  tragedy: L(
    'A tragedy is a disastrous sad event, especially with death, or a serious play with a sad ending: a national tragedy; Greek tragedy. Disaster stresses scale; accident may be smaller. Tragic is the adjective. Do not call a missed train a tragedy. Inquiries follow public tragedies.',
    ['The inquiry followed the stadium tragedy.', 'The module includes a Greek tragedy, which is the literary sense.'],
    'a tragedy; a national / personal tragedy. Adjective: tragic. Literature: a tragedy. Weaker: accident. Not a minor inconvenience. News: follow a tragedy.',
    ['disaster']
  ),
  trainee: L(
    'A trainee is someone learning a job: a trainee teacher; a trainee solicitor; graduate trainee. Apprentice is a close twin, often with a formal scheme. Intern can be shorter and sometimes unpaid. Trainer is the person who trains (trainers as shoes is already in the dictionary). Do not call a qualified consultant a trainee.',
    ['Each trainee teacher is assigned a mentor in the first term.', 'The bank still runs a graduate trainee scheme.'],
    'a trainee + job; graduate trainee. Close: apprentice. Short/unpaid: intern. Person who trains: trainer. Not a fully qualified professional.',
    ['apprentice']
  ),
  trait: L(
    'A trait is a characteristic quality: a personality trait; genetic traits; a trait of the species. Characteristic is already in B1 as a noun; quality is everyday. Habit is learned behaviour. Do not call a one-off action a trait. Psychology and biology both use trait.',
    ['Curiosity is a useful trait in a research assistant.', 'The breed was selected for that trait, which is the genetic sense.'],
    'a personality / genetic trait; traits of. Close: characteristic. Everyday: quality. Learned repetition: habit. Not a single incident. Psych/bio register.',
    ['characteristic']
  ),
  transaction: L(
    'A transaction is an act of buying, selling, or moving money: a card transaction; financial transactions; complete a transaction. Deal is wider; purchase is the buy. Transact is the rarer verb. Do not call a hug a transaction unless you are using economic metaphor. Audits sample transactions.',
    ['Every card transaction left a digital record for the audit.', 'Property transactions slowed when rates rose.'],
    'a card / financial / property transaction; complete a transaction. Wider: deal. Verb: transact. Audit trail. Not a non-money social act (unless metaphor).',
    ['deal']
  ),
  transformation: L(
    'A transformation is a complete change: digital transformation; a transformation of the market. Transform is already in the dictionary. Change is weaker; revolution is stronger and more political. Do not call a new logo a transformation without evidence. Business and urban studies overuse the word — make it earn its place.',
    ['Remote work led to a transformation of the city-centre office market.', 'The transformation of the old mill into flats took three years.'],
    'a transformation of / in; digital / urban transformation. Verb: transform. Weaker: change. Stronger: revolution. Do not hype a rebrand.',
    []
  ),
  transition: L(
    'A transition is a change from one state to another: a transition to; in transition; energy transition. Change is everyday; shift can be smaller. Transitional is the adjective. Do not write “transition into” for every career move if move or change will do. Policy: just transition (climate and jobs).',
    ['The transition from GCSEs to A-levels surprises many students.', 'The energy transition requires grid upgrades, which is the climate-policy sense.'],
    'a transition to / from; in transition; energy transition. Adjective: transitional. Everyday: change. Policy phrase: a just transition. Not every small move.',
    ['shift']
  ),
  translation: L(
    'A translation is a text, or the process, of changing language: a translation of the report; lost in translation. Translate is the verb. Interpretation is spoken (and also “way of understanding”). Do not submit machine translation unedited in assessed work. Legal trials need certified translation.',
    ['A poor translation of the consent form delayed the trial.', 'Lost in translation is an idiom, not only a film title.'],
    'a translation of; in translation. Verb: translate. Spoken: interpretation. Assessed work: do not paste raw machine output. Legal: certified translation.',
    []
  ),
  transmission: L(
    'Transmission is sending out signals, disease, or power: transmission of the virus; a live transmission; power transmission. Transmit is already in the dictionary. Spread is everyday for disease; broadcast is for media. Uncountable in many scientific uses. Do not call one email a transmission.',
    ['Masks reduced transmission on crowded wards.', 'A live transmission of the inquiry was delayed, which is the broadcast sense.'],
    'transmission of disease / signals / power; a radio transmission. Verb: transmit. Everyday disease: spread. Media: broadcast. Often uncountable in science.',
    []
  ),
  transparency: L(
    'Transparency is openness about information (uncountable in public life): transparency over fees; a lack of transparency. Transparent is the adjective. Openness is a close twin; accountability is related but about being answerable. Do not call a glass window transparency in a politics essay. Campaigners demand transparency over lobbying.',
    ['Campaigners demanded more transparency over lobbying.', 'Fee transparency was a condition of the licence.'],
    'Uncountable: transparency; transparency over / in. Adjective: transparent. Close: openness. Related: accountability. Politics/business, not a window pane.',
    ['openness']
  ),
  transparent: L(
    'Transparent means easy to see through, or open and not hiding information: transparent glass; a transparent process; transparent fees. Opaque is an opposite. Clarity is a related noun. Do not call a secret deal transparent. Procurement and university fees: transparent pricing.',
    ['Fee structures should be transparent before students enrol.', 'The panel was transparent about the scoring, which is the process sense.'],
    'transparent fees / process / government. Literal: transparent glass. Opposite: opaque / secretive. Noun: transparency. Public-life register.',
    []
  ),
  trauma: L(
    'Trauma is severe shock or injury (often uncountable): trauma care; childhood trauma; a trauma unit. Traumatic is the adjective. Shock is everyday and shorter-term; injury is the physical fact. Do not use trauma for missing a bus. NHS: major trauma centres.',
    ['The unit treats trauma after serious road collisions.', 'The film was criticised for exploiting trauma, which is the psychological sense.'],
    'Uncountable (many medical uses): trauma; a trauma unit / centre. Adjective: traumatic. Everyday: shock. Physical: injury. Not a minor upset. NHS trauma centres.',
    []
  ),
  treasury: L(
    'The Treasury is the UK government department that controls public money. A treasury can also be a store of funds or valuable objects. Chancellor (B1) sits at the Treasury. Finance ministry is the international twin. Do not mix Treasury with treasure (gold). UK news: Treasury forecasts; Treasury sources.',
    ['The Treasury delayed the spending review until after the election.', 'The cathedral treasury displays medieval silver, which is the collection sense.'],
    'the Treasury (UK); Treasury forecasts / sources. International: finance ministry. Related: chancellor. Mix-up: treasure. Museum: a treasury of objects.',
    []
  ),
  treaty: L(
    'A treaty is a formal written agreement between countries: sign a treaty; a peace treaty; treaty obligations. Deal is informal; convention can be a treaty-like agreement. Do not call a shop contract a treaty. International law and history papers turn on treaties.',
    ['The treaty set limits on fishing in shared waters.', 'Parliament voted on the treaty before ratification.'],
    'sign / ratify / breach a treaty; a peace / trade treaty. Informal: deal. Related: convention. Not a private contract. International law register.',
    []
  ),
  tremendous: L(
    'Tremendous means very great in amount or intensity: tremendous pressure; a tremendous amount; tremendous support. Huge and enormous are close (enormous is in B1). Tremendous can sound slightly informal or enthusiastic in academic prose — great or considerable may be safer. Do not use it for a tiny difference.',
    ['There has been tremendous pressure on A&E this winter.', 'She made tremendous progress after the extra tutorials.'],
    'tremendous pressure / amount / support. Close: huge / enormous. Academic caution: may sound informal; consider considerable. Not a tiny gap.',
    ['enormous']
  ),
  tribunal: L(
    'A tribunal is a specialist panel that judges a type of case: an employment tribunal; a war-crimes tribunal. Court is the general word; committee is political, not judicial. Do not call a student complaint panel a tribunal unless it truly is one. UK: employment tribunals for unfair dismissal.',
    ['She took the dismissal to an employment tribunal.', 'The inquiry was not a criminal court but a public tribunal.'],
    'an employment / military / international tribunal. General: court. Not a casual committee. UK work law: employment tribunal. Formal legal register.',
    []
  ),
  trigger: L(
    'To trigger is to cause something serious or sudden to start: trigger an inquiry; trigger a reaction. As a noun, the trigger is that cause. Cause is wider; spark is a close metaphor. Do not mix trigger with bigger. Health: a trigger for asthma. Policy: trigger a referendum clause.',
    ['The leak triggered an urgent inquiry.', 'Pollen is a common trigger for asthma, which is the noun.'],
    'trigger + noun; a trigger for. Wider: cause. Metaphor: spark. Health: allergy triggers. Mix-up: bigger. Noun and verb.',
    ['spark']
  ),
  triumph: L(
    'A triumph is a great success after struggle: a triumph for; triumph over. As a verb, to triumph. Victory is close, often in sport or war; success is weaker. Triumphant is the adjective. Do not call a routine pass a triumph. Headlines: a legal triumph for campaigners.',
    ['Winning the appeal was a triumph for the residents’ group.', 'She triumphed over a long injury, which is the verb.'],
    'a triumph for / over; triumph over. Verb: triumph. Close: victory. Weaker: success. Adjective: triumphant. Not a routine result.',
    ['victory']
  ),
  ultimate: L(
    'Ultimate means final, or the most extreme or best of its kind: the ultimate decision; the ultimate goal; the ultimate insult. Ultimately is already in the dictionary as the adverb. Final is close; best is everyday for the “greatest” sense. Do not use ultimate in every advert (ultimate experience). Legal: ultimate responsibility.',
    ['The ultimate decision rests with the exam board, not the school.', 'Cost was the ultimate barrier, which is the “final / most important” sense.'],
    'the ultimate + noun (final or greatest). Adverb: ultimately (already in the dictionary). Close: final. Ad-speak overuse. Law: ultimate responsibility.',
    ['final']
  ),
  unanimous: L(
    'Unanimous means agreed by everyone involved: a unanimous decision; unanimous in; unanimously (adverb). Majority is not the same — that can be 51%. Consensus is close but can be softer. Do not call a 12–1 vote unanimous. Boards and juries: unanimous verdicts.',
    ['The committee reached a unanimous decision to delay the bill.', 'Governors were unanimous in opposing the closure.'],
    'a unanimous decision / verdict; unanimous in. Adverb: unanimously. Not a mere majority. Close: consensus (softer). Juries/boards.',
    []
  ),
  unbiased: L(
    'Unbiased means fair and not leaning to one side: unbiased advice; an unbiased sample. Bias is already in the dictionary. Impartial and neutral are close twins. Biased is the opposite. Do not claim you are unbiased without a method. Marking and journalism: unbiased reporting as an ideal.',
    ['Markers are trained to give unbiased scores across centres.', 'The sample was not unbiased: it omitted night-shift staff.'],
    'unbiased advice / reporting / sample. Noun: bias. Close: impartial / neutral. Opposite: biased. Method matters more than the claim.',
    ['impartial']
  ),
  uncertainty: L(
    'Uncertainty is not knowing what will happen (often uncountable): policy uncertainty; a period of uncertainty; uncertainty about. Uncertain is the adjective. Doubt can be more personal; risk is more about measured chance. Do not write “an uncertainty” for every unknown — an area of uncertainty is neater. Economics: uncertainty delays investment.',
    ['Policy uncertainty delayed hiring in the public sector.', 'There is still uncertainty about the sample size, which is why they reran the test.'],
    'Uncountable: uncertainty; uncertainty about / over. Adjective: uncertain. Personal: doubt. Measured: risk. Pattern: a period / area of uncertainty.',
    []
  ),
  undergraduate: L(
    'An undergraduate is a student on a first degree: undergraduate course; undergraduate dissertation. Postgraduate is the next stage; student is wider. Do not call a PhD researcher an undergraduate. UK: undergraduate tuition fees; undergrad is informal.',
    ['Undergraduates must submit the dissertation by noon on Friday.', 'The lab prefers postgraduate assistants, not first-year undergraduates.'],
    'an undergraduate; undergraduate + noun (course / fees). Next stage: postgraduate. Wider: student. Informal: undergrad. Not a doctoral candidate.',
    []
  ),
  undercover: L(
    'Undercover means working secretly to gather information: an undercover officer; go undercover; an undercover investigation. Covert is a close formal twin; secret is everyday. Do not call ordinary remote work undercover. Journalism and policing: undercover reporting has ethical rules.',
    ['An undercover investigation exposed the fake-degree mill.', 'She went undercover in the warehouse, which is the verb-like phrase.'],
    'undercover officer / investigation; go undercover. Formal: covert. Everyday: secret. Police/journalism. Not working from home. Ethics apply.',
    ['covert']
  ),
  underestimate: L(
    'To underestimate is to guess too low, or take something too lightly: underestimate the cost; underestimate how long. Overestimate is the opposite. Underrate is close for quality. Do not mix underestimate with understate (say less than the truth). Exam advice: do not underestimate timings.',
    ['Do not underestimate how long the reading paper takes.', 'The Treasury had underestimated inflation, which is why forecasts slipped.'],
    'underestimate + noun / how. Opposite: overestimate. Quality: underrate. Mix-up: understate. Exam timings and project costs.',
    []
  ),
  underlying: L(
    'Underlying means real but not immediately obvious: the underlying cause; underlying assumptions; underlying health conditions. Root is a close metaphor; basic is everyday and shallower. Underlie is the verb. Do not call a surface symptom the underlying cause without argument. Medicine and research methods both need the word.',
    ['The underlying cause was understaffing, not one missed shift.', 'State your underlying assumptions before you model the data.'],
    'the underlying cause / problem / assumption. Verb: underlie. Metaphor: root. Medicine: underlying conditions. Not the surface symptom.',
    []
  ),
  undermine: L(
    'To undermine is to weaken something gradually or secretly: undermine trust; undermine an argument. Weaken is everyday; sabotage is more deliberate destruction. Underpin (already in the dictionary) is almost an opposite direction (support). Do not mix them. Politics: leaks undermine a consultation.',
    ['Leaked emails undermined trust in the consultation.', 'A weak sample undermines the claim, which is the academic sense.'],
    'undermine trust / authority / an argument. Everyday: weaken. Stronger: sabotage. Opposite direction: underpin. Mix-up with underpin is common.',
    ['weaken']
  ),
  undoubtedly: L(
    'Undoubtedly emphasises that something is certainly true: will undoubtedly; undoubtedly the best. Doubt is the related noun; no doubt is a close phrase. Certainly is everyday. Do not use undoubtedly when you still need evidence — it can sound dogmatic in essays. One use per paragraph is enough.',
    ['The reform will undoubtedly face legal challenges.', 'She is undoubtedly the strongest candidate on paper, but the interview remains.'],
    'undoubtedly + verb/adjective. Close: certainly / no doubt. Related: doubt. Essay caution: still give evidence. Do not overuse.',
    ['certainly']
  ),
  unemployment: L(
    'Unemployment is the state or rate of people without jobs (uncountable): unemployment rate; youth unemployment; rise in unemployment. Unemployed is the adjective/person. Joblessness is a twin. Do not write “an unemployment” — say a period of unemployment. ONS figures in UK news.',
    ['Youth unemployment rose after the factory closed.', 'The unemployment rate hid a rise in insecure work.'],
    'Uncountable: unemployment; unemployment rate / benefit. Adjective: unemployed. Twin: joblessness. Not “an unemployment”. UK: ONS figures.',
    []
  ),
  unfold: L(
    'To unfold is to happen or develop, or to open something folded: as events unfold; unfold a map. Develop is close for stories; happen is everyday. Do not use unfold for a one-second click unless you mean a literal fold. News: the scandal unfolded over days of hearings.',
    ['The scandal unfolded over three days of hearings.', 'Unfold the map of the catchment, which is the literal sense.'],
    'events / a story unfold; unfold a map / letter. Close: develop. Everyday: happen. News: as the crisis unfolds. Literal fold versus metaphor.',
    ['develop']
  ),
  unfortunate: L(
    'Unfortunate means unlucky or regrettable: an unfortunate error; it is unfortunate that. Unfortunately is already in the dictionary. Lucky/fortunate are opposites (fortunate is in B1). Sad is more emotional. Do not call a crime merely unfortunate if you mean unjust. Formal apologies: an unfortunate incident — sometimes criticised as vague.',
    ['It is unfortunate that the sample omitted rural schools.', 'An unfortunate clash of dates forced a resit.'],
    'an unfortunate + noun; it is unfortunate that. Adverb: unfortunately. Opposite: fortunate / lucky. Vague PR: an unfortunate incident. Stronger: unjust / tragic.',
    ['unlucky']
  ),
  unify: L(
    'To unify is to join separate parts into one: unify the system; unify the party. Unite is close (next entries) and often about people and purpose; merge is corporate. Unification is the noun. Do not call a loose alliance unified. IT and politics: unify platforms / unify the message.',
    ['The merger will unify the two exam boards’ marking systems.', 'A single brand was meant to unify the trusts, which staff doubted.'],
    'unify + noun (systems, parties, standards). Close: unite (people/purpose). Corporate: merge. Noun: unification. Not a loose alliance.',
    ['unite']
  ),
  unite: L(
    'To unite is to come or bring together for a shared purpose: unite against; unite behind; the United Kingdom. Unify is closer to making systems one. Join is everyday. Do not mix United as a football club with the verb. Politics: unite the party; unions unite against a bill.',
    ['Unions united against the proposed fire-and-rehire contracts.', 'The speech failed to unite colleagues behind the timetable.'],
    'unite against / behind / in. Close: unify (make into one system). Everyday: join. Politics/labour. Country name: United. Not a football result.',
    ['unify']
  ),
  unity: L(
    'Unity is the state of being one or in agreement (uncountable): party unity; national unity; unity of purpose. Union is an organisation or a joining; unit is one piece. Disunity is the opposite. Do not call a 51–49 vote unity. Headlines: party unity collapses.',
    ['Party unity collapsed after the leadership contest.', 'The report called for unity of purpose across agencies.'],
    'Uncountable: unity; party / national unity; unity of purpose. Related: union / unit (different). Opposite: disunity. Not a narrow majority.',
    []
  ),
  universal: L(
    'Universal means for everyone or true in every case: universal credit; a universal right; almost universal agreement. General is weaker; global is about the world. Universe is the noun for space. Do not claim a small sample is universal. UK policy: Universal Credit (capitalised as the benefit name).',
    ['Universal credit rules were tightened in the spring statement.', 'There is no universal definition of the term in the papers.'],
    'universal + noun; almost universal. Weaker: general. World: global. Space: universe. UK benefit: Universal Credit. Do not over-claim from a sample.',
    []
  ),
  unknown: L(
    'Unknown means not known: unknown number; cause unknown; an unknown quantity. Famous is not a clean opposite (that is well-known). Unidentified is close for people and bodies. Do not write “unknow” as the verb — that is not know. Science: unknown unknowns (jargon — explain if you use it).',
    ['The long-term effects are still unknown.', 'An unknown caller rang the ward, which is why security was alerted.'],
    'unknown + noun; still unknown; an unknown quantity. Close: unidentified. Verb: do not know (not “unknow”). Opposite of well-known, not of famous in every case.',
    []
  ),
  unpredictable: L(
    'Unpredictable means hard to guess or plan for: unpredictable weather; an unpredictable market; unpredictable results. Predict is related; erratic is closer to irregular behaviour. Reliable is an opposite for systems. Do not call a clearly seasonal pattern unpredictable. Speaking tests and outdoor work suffer from unpredictable weather.',
    ['Unpredictable weather disrupted the outdoor speaking tests.', 'Demand proved unpredictable after the price cap changed.'],
    'unpredictable weather / results / behaviour. Related: predict. Irregular: erratic. Opposite (systems): reliable / predictable. Not a known seasonal pattern.',
    ['erratic']
  ),
  unreliable: L(
    'Unreliable means not to be trusted or depended on: unreliable narrator; unreliable data; an unreliable bus. Reliable is the opposite. Untrustworthy stresses character; inaccurate stresses facts. Do not call a one-off delay proof that a whole system is unreliable without evidence. Academic: unreliable sources.',
    ['An unreliable citation weakened the literature review.', 'The last train is unreliable on Sundays, which is why they booked a hotel.'],
    'unreliable data / witness / service. Opposite: reliable. Character: untrustworthy. Facts: inaccurate. Academic: unreliable sources. Need a pattern, not one incident.',
    []
  ),
  unrest: L(
    'Unrest is public protest or disorder (uncountable): civil unrest; political unrest; unrest over prices. Protest is more specific and often lawful; riot is stronger and more violent. Do not call a quiet petition unrest. UK and international news: unrest after a verdict or a price shock.',
    ['Civil unrest followed the sudden rise in fuel prices.', 'The capital saw a night of unrest after the result.'],
    'Uncountable: unrest; civil / political unrest. Lawful action: protest. Stronger: riot. Not a quiet petition. News register.',
    []
  ),
  unveil: L(
    'To unveil is to show or announce something officially, or to remove a covering: unveil a policy; unveil a statue. Announce is everyday; reveal is already in the dictionary. Launch is close for products. Do not unveil a secret you are leaking — that is leak or disclose. Ministers unveil white papers.',
    ['The minister will unveil the housing white paper on Tuesday.', 'They unveiled a plaque at the new wing, which is the literal sense.'],
    'unveil a policy / plan / statue. Everyday: announce. Close: reveal / launch. Unofficial: leak. Politics: unveil a white paper. Literal covering.',
    ['announce']
  ),
  upgrade: L(
    'To upgrade is to improve to a better standard: upgrade software; upgrade a ticket; an upgrade (noun). Update (already in the dictionary) can be smaller; improve is everyday. Downgrade is the opposite. Stress: verb often /ʌpˈɡreɪd/, noun often /ˈʌpɡreɪd/. Do not call a bug-fix a major upgrade if it is only a patch.',
    ['The trust will upgrade the scanning equipment this year.', 'Passengers paid for an upgrade, which is the travel-noun sense.'],
    'upgrade equipment / software; an upgrade. Smaller: update / patch. Everyday: improve. Opposite: downgrade. Stress may differ for noun vs verb.',
    ['improve']
  ),
  uphold: L(
    'To uphold is to support a decision, law, or principle and keep it in force: uphold a ban; uphold a conviction; uphold standards. Confirm is weaker; overturn is an opposite in appeals. Hold up means delay — a mix-up. Appeal courts uphold or quash.',
    ['The appeal court upheld the original sentence.', 'Inspectors said the school had failed to uphold safeguarding standards.'],
    'uphold a decision / conviction / standards. Appeals: uphold vs overturn / quash. Mix-up: hold up (delay). Weaker: confirm. Legal/professional register.',
    []
  ),
  uprising: L(
    'An uprising is a revolt against those in power: an armed uprising; crush an uprising. Rebellion and revolt are close; protest can be peaceful and smaller. Do not call a one-day strike an uprising. History papers: date and cause of the uprising.',
    ['The uprising was followed by a curfew in the capital.', 'Historians still debate whether it was an uprising or a riot.'],
    'an uprising; an armed / popular uprising. Close: revolt / rebellion. Smaller/peaceful: protest. Not a one-day strike. History register.',
    ['revolt']
  ),
  urban: L(
    'Urban means connected with a town or city: urban areas; urban planning; urban wildlife. Rural is the common opposite; suburban is the edge. City is the noun. Do not call a village urban. Geography and policy: urban air quality; urban regeneration.',
    ['Urban air quality improved after the clean-air zone.', 'Urban foxes are now a familiar planning complaint.'],
    'urban areas / planning / regeneration. Opposite: rural. Edge: suburban. Noun: city. Geography/policy. Not a village. Collocation: urban wildlife.',
    []
  ),
  utility: L(
    'A utility is a public service such as water, gas, or electricity: utility bills; a utility company. Utility also means usefulness (formal): of little utility. Useful is the everyday adjective. Do not mix utility with utilise (already in the dictionary). UK: energy utilities; Ofwat/Ofgem as regulators.',
    ['Utility bills rose faster than wages last winter.', 'The extra module was of little utility for the exam, which is the usefulness sense.'],
    'utility bills / company; a public utility. Formal: of little utility = not useful. Mix-up: utilise. UK regulators: Ofgem / Ofwat. Not a gadget’s brand name.',
    []
  ),
  utterly: L(
    'Utterly means completely, often with a negative idea: utterly wrong; utterly unconvincing; utterly exhausted. Completely and entirely are close; totally is more informal. Utter as an adjective means complete (utter nonsense). Do not use utterly unique (disputed). Oral exams: utterly unconvincing as a critique.',
    ['The explanation was utterly unconvincing in the oral exam.', 'The plan is utterly dependent on one grant, which is why auditors worried.'],
    'utterly + adjective (often negative). Close: completely / entirely. Informal: totally. Adjective: utter + noun (utter chaos). Avoid utterly unique.',
    ['completely']
  ),
}
