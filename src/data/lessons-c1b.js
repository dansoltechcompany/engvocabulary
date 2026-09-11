const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1B = {
  advocate: L(
    'To advocate is to argue in public for a person, policy, or change — stronger and more formal than support. You advocate reform, or advocate + -ing; an advocate (noun) is the person who speaks for a cause, and in Scotland a type of lawyer. Recommend is milder and more private; campaign for is more activist. In conversation, back or speak up for is more natural.',
    ['Several unions advocate a four-day week.', 'She has long advocated teaching phonics alongside wide reading.'],
    'advocate + noun / + -ing. Noun: an advocate of/for. Everyday: support / speak up for.',
    ['support']
  ),
  anomaly: L(
    'An anomaly is a result or case that does not fit the usual pattern — not merely “something odd.” Researchers flag an anomaly so they can check the instrument or the rule. Exception is everyday; outlier is the statistics cousin. Abnormal sounds medical or judgemental. Anomalous is the adjective. In speech, that one does not fit is enough.',
    ['One anomalous reading does not wreck the study, but you must explain it.', 'The quiet June was an anomaly in an otherwise wet summer.'],
    'an anomaly in + data/pattern. Adjective: anomalous. Everyday: odd exception. Close: outlier.',
    ['exception']
  ),
  ascertain: L(
    'To ascertain is to find out so that you are sure — a formal establish the facts. You ascertain the number, the cause, whether + clause. Find out is everyday; check is smaller. Determine is close in academic English. Ascertain belongs in reports, inquiries, and careful emails, not in “I’ll ascertain if the café is open.”',
    ['The inquiry could not ascertain who signed the form.', 'Please ascertain whether the room is free on Friday.'],
    'Formal for find out for certain. ascertain whether/that. Everyday: find out / check.',
    ['establish']
  ),
  assimilate: L(
    'To assimilate is to take information in until it becomes usable, or to become part of a group without remaining a permanent outsider. Absorb is close for facts; understand can be shallow. Integrate is a common policy cousin for people joining a society. Assimilation is the noun, sometimes controversial in politics. In class, let it sink in is the everyday paraphrase.',
    ['New staff need months to assimilate the unwritten rules.', 'She had read the chapter but not yet assimilated the argument.'],
    'assimilate information / into a group. Close: absorb (facts), integrate (people). Formal.',
    ['absorb']
  ),
  bolster: L(
    'To bolster is to prop something up so it is stronger: bolster confidence, bolster an argument, bolster the case. Strengthen is the general verb; support can be merely moral. Bolster suggests a boost that was needed, not a foundation from scratch (that is underpin). It is common in journalism and essays; in speech, boost or back up is plainer.',
    ['Fresh data bolstered the original claim.', 'A short win can bolster a team that has been sliding.'],
    'bolster confidence/an argument. Boost that was needed. Everyday: boost / back up. Contrast: underpin = basis.',
    ['boost']
  ),
  bureaucracy: L(
    'Bureaucracy is the system of offices, forms, and official rules — usually with a sigh: slow, complicated, impersonal. Administration is more neutral; red tape is the everyday complaint. A bureaucrat is the official; bureaucratic is the adjective (bureaucratic delay). Use it for systems, not for one rude receptionist. In careful writing it need not be an insult, but readers often hear one.',
    ['Housing applications disappeared into bureaucracy for months.', 'The reform was meant to cut bureaucracy, not add another form.'],
    'Often critical. Everyday: red tape. Adjective: bureaucratic. Neutral cousin: administration.',
    ['red tape']
  ),
  caveat: L(
    'A caveat is a stated warning that the claim is not true in every case: useful results, with one caveat. Warning is everyday; proviso is a close legal cousin. Native academic writers put a caveat after a bold sentence so they are not overclaiming. With the caveat that… is a set pattern. In speech, but bear in mind is enough; caveat can sound like a seminar.',
    ['The app is fast, with the caveat that it needs a constant signal.', 'I recommend the book, with one caveat: the last chapter is thin.'],
    'a caveat / with the caveat that…. Formal/academic. Everyday: warning / but note that….',
    ['proviso']
  ),
  conjecture: L(
    'Conjecture is an opinion formed without enough evidence — a respectable guess, not a wild one. Guess is everyday and can sound childish; speculation is close but often more public rumour. Hypothesis is what you design a test for. As a verb, to conjecture is rare and very formal. In essays, mark conjecture as conjecture; do not dress it up as fact.',
    ['Any claim about motive is still conjecture.', 'Historians can only conjecture what the missing letter said.'],
    'Noun (usual): conjecture, not fact. Stronger method: hypothesis. Everyday: guess / speculation.',
    ['speculation']
  ),
  consensus: L(
    'Consensus is general agreement in a group, not a unanimous vote and not a compromise that nobody likes. Agreement is everyday; consensus stresses a shared view after discussion (a growing consensus that…). Unanimity is everyone; majority is more than half. There is a consensus that + clause. In meetings, people still say we all agree.',
    ['No consensus emerged on the start date.', 'There is a broad consensus that feedback should be quicker.'],
    'a consensus that…. Not the same as majority or unanimity. Everyday: general agreement.',
    ['agreement']
  ),
  contention: L(
    'Contention has two C1 lives: a point someone argues is true (her main contention is that…), and disagreement (a bone of contention; a matter of some contention). Claim is the everyday cousin for the first sense; argument or dispute for the second. Contentious is the adjective (a contentious issue). Do not use contention for a mild preference.',
    ['His contention is that the sample was biased, not small.', 'Pay has been a bone of contention since the merger.'],
    '1) a claim in an argument. 2) conflict. a bone of contention. Adjective: contentious.',
    ['claim']
  ),
  corroborate: L(
    'To corroborate is to give independent support to someone else’s account: a second witness corroborated the story. Confirm is everyday and can be the same person repeating themselves; corroborate wants a separate source. Back up is the spoken paraphrase. Corroboration is the noun. It is a court-and-research word; in a café, say that matches what I heard.',
    ['Email logs corroborated her timeline.', 'Nothing in the archive corroborates the official version.'],
    'Independent support, not mere repetition. Everyday: back up / confirm. Noun: corroboration.',
    ['confirm']
  ),
  discrepancy: L(
    'A discrepancy is a mismatch between two things that ought to agree: two totals, a story and a receipt. Difference is broader and neutral; discrepancy hints that someone should explain the gap. Inconsistency is close when one account wobbles. Discrepancy between A and B is the pattern. In speech, they do not add up is the plain version.',
    ['There is a discrepancy between the invoice and the delivery note.', 'Staff noticed a discrepancy in the attendance figures.'],
    'a discrepancy between A and B. Stronger than a simple difference. Everyday: mismatch.',
    ['mismatch']
  ),
  disseminate: L(
    'To disseminate is to spread information widely on purpose: disseminate findings, disseminate a warning. Spread is everyday and can be accidental (spread a rumour); circulate is close for documents. Publish is one channel, not the whole process. Dissemination is a favourite noun in research reports. In speech, send round or get the word out is more natural.',
    ['The ministry disseminated guidance to every clinic.', 'Good research still fails if nobody disseminates it.'],
    'disseminate findings/information. Deliberate wide spread. Everyday: spread / send round.',
    ['circulate']
  ),
  engender: L(
    'To engender is to cause a feeling or a climate to exist: engender confidence, engender distrust. Cause is everyday and mechanical; create is broader. Engender is a formal essay verb for social and emotional results, not for “engender a sandwich.” Give rise to is the plain academic cousin. Do not overuse it; one engender per page is plenty.',
    ['Vague marking criteria engender anxiety, not effort.', 'Open archives can engender trust in the process.'],
    'engender + feeling/situation. Formal for cause (usually social). Everyday: cause / create / lead to.',
    ['give rise to']
  ),
  epitome: L(
    'The epitome of X is a perfect, concentrated example of that quality: the epitome of patience. Example is everyday and weaker; embodiment is a close formal cousin. Pattern: the epitome of + noun. Epitomise is the verb (she epitomises calm). It is slightly stylish in speech; a perfect example of is safer in conversation. Do not use it for a merely typical case.',
    ['That email is the epitome of a polite refusal.', 'The building was once the epitome of modern design.'],
    'the epitome of + quality. Verb: epitomise. Stronger than a typical example. Everyday: a perfect example.',
    ['embodiment']
  ),
  equitable: L(
    'Equitable means fair in the share or the process, treating parties even-handedly. Fair is everyday; equal means the same amount, which is not always fair. Just is more moral or legal. Equitable distribution / an equitable solution. Equity (fairness, or a finance sense) is related. In speech, fair is almost always better unless you are writing policy.',
    ['They sought a more equitable split of marking, not an equal one.', 'An equitable process still has to be explained to the losing side.'],
    'equitable = fair shares/process. equal = the same amount. Everyday: fair. Noun: equity (careful: also finance).',
    ['fair']
  ),
  exacerbate: L(
    'To exacerbate is to make a bad situation worse: missing sleep will exacerbate the problem. Worsen is plain; aggravate is a close synonym (and in informal British English also means annoy a person — avoid that mix-up in essays). Improve is the opposite. You exacerbate a problem, tension, or inequality, not a success. It is a standard academic verb; in speech, make it worse.',
    ['Cutting the bus route exacerbated rural isolation.', 'Damp will exacerbate the mould if you only paint over it.'],
    'exacerbate a problem/tension. Formal for make worse. Contrast informal aggravate = annoy.',
    ['worsen']
  ),
  fallacy: L(
    'A fallacy is a false belief or a flaw in reasoning: the fallacy that you can learn a language in a week. Mistake is everyday and can be a slip; fallacy names the bad logic or the popular myth. Fallacious is the adjective. Writers often label a named fallacy (a false dichotomy). In speech, that does not follow or that’s a myth is enough.',
    ['It is a fallacy to treat correlation as proof of cause.', 'The article dismantles the fallacy that grammar drills kill fluency.'],
    'a fallacy that…. Adjective: fallacious. Stronger than a simple mistake. Everyday: myth / bad logic.',
    ['myth']
  ),
  impetus: L(
    'Impetus is a push that makes a process start or speed up: the prize gave her the impetus to finish. Momentum is what keeps something going once it is moving; motivation is more internal and everyday. Give impetus to / the impetus for change. It is a little formal; in speech, the push or what got me started is plainer.',
    ['The scandal gave fresh impetus to the reform bill.', 'Without a deadline, the project lacked impetus.'],
    'the impetus for / give impetus to. A push to start or accelerate. Everyday: push / motivation. Contrast: momentum = keep going.',
    ['momentum']
  ),
  implication: L(
    'An implication is what follows from a fact, or what is suggested without being said: the implication of the data; the implication that she was lying. Consequence is more about real-world results; hint is everyday for the unsaid. Implications (often plural) of a policy is a set academic collocation. Imply is the verb (the writer implies; you infer).',
    ['Have you thought through the implications for part-time staff?', 'I resent the implication that we did not try.'],
    'implications of + noun. Also: an unstated suggestion. Verb: imply. Everyday: consequence / hint.',
    ['consequence']
  ),
  juxtaposition: L(
    'Juxtaposition is the placing of two things side by side, often to make a contrast visible: wealth next to poverty. Contrast can be the difference itself; juxtaposition is the act of putting them together. Contrast / combination are everyday. Juxtapose is the verb. It is a critic’s and academic word; in speech, side by side or next to each other will do.',
    ['The film’s juxtaposition of home video and news footage is deliberate.', 'Her essay rests on a juxtaposition of two case studies, not a survey.'],
    'the juxtaposition of A and B. Verb: juxtapose. Everyday: placing side by side (for contrast).',
    ['contrast']
  ),
  legitimacy: L(
    'Legitimacy is the quality of being accepted as rightful — legal, fair, or properly authorised: the election’s legitimacy. Legality is only “is it lawful?”; legitimacy includes public acceptance. Validity is closer for arguments and tickets. Legitimate is the adjective; the authorities is a different word. In speech, whether people accept it as fair is the paraphrase.',
    ['Winning the vote did not automatically confer legitimacy.', 'Critics questioned the legitimacy of a rule made without consultation.'],
    'legitimacy of a decision/election. Broader than legality. Adjective: legitimate. Everyday: rightful / accepted as fair.',
    ['validity']
  ),
  magnitude: L(
    'Magnitude is how large or important something is, especially when the scale is easy to miss: the magnitude of the task. Size is physical and everyday; importance is narrower. Scale is a close cousin. Collocations: the magnitude of the problem, an earthquake’s magnitude. In speech, how big it really is is enough; magnitude sounds like a briefing.',
    ['Few voters grasped the magnitude of the debt.', 'Errors of this magnitude cannot be called slips.'],
    'the magnitude of + problem/task. Scale and importance. Everyday: how big / how serious.',
    ['scale']
  ),
  mandate: L(
    'A mandate is official authority to act, often from voters, a law, or a parent body: a mandate to review the rules. Permission is weaker and everyday; authority is broader. A government claims a mandate after an election. As a verb, to mandate a procedure is to require it (more US-influenced). Mandatory is the adjective (mandatory training).',
    ['The board has no mandate to sell the building.', 'Voters gave her a clear mandate for tax reform.'],
    'a mandate to + verb. Official authority, often from an election. Adjective: mandatory. Everyday: authority / permission.',
    ['authority']
  ),
  plethora: L(
    'A plethora is a very large amount, often more than you need. Native writers still use it, but it is a tired “clever” word — a lot of, too many, or an abundance usually sound cleaner. Pattern: a plethora of + plural noun. If you use it, use it once, and prefer it when the quantity is a problem, not a compliment. In speech, skip it.',
    ['A plethora of guidelines left teachers unsure which to follow.', 'There is a plethora of similar titles; this one is at least short.'],
    'a plethora of…. Often overused in essays — prefer many / too many / an abundance. Slightly showy.',
    ['abundance']
  ),
  polarise: L(
    'To polarise (British spelling; US polarize) is to split people into two opposing camps, with little middle ground: the debate polarised the class. Divide is everyday and milder; split can be physical. Polarisation is the noun (political polarisation). Polar opposite is a related idiom. Use it when the gap is ideological, not when people merely disagree over a restaurant.',
    ['Coverage of the strike polarised the town.', 'The issue has become so polarised that compromise sounds like betrayal.'],
    'British: polarise. polarise opinion/a community. Noun: polarisation. Stronger than divide.',
    ['divide']
  ),
  predicament: L(
    'A predicament is a messy situation that is hard to get out of — awkward, not merely sad. Problem is everyday and broader; dilemma is a choice between two unwelcome options. Plight is more pitiful. In a predicament is the set phrase. It can be slightly wry in speech; crisis is heavier. Do not use it for a minor inconvenience.',
    ['Losing both keys left him in a predicament at midnight.', 'The company is in a financial predicament of its own making.'],
    'in a predicament. Awkward trap, not a simple problem. Contrast: dilemma = two bad choices.',
    ['dilemma']
  ),
  prerequisite: L(
    'A prerequisite is something that must be in place before the next step is possible: grammar is a prerequisite for this course. Requirement is everyday and can be simultaneous; precondition is a close formal cousin. Pattern: a prerequisite for / of. As an adjective: prerequisite knowledge. In speech, you need X first is enough.',
    ['Trust is a prerequisite of any honest review.', 'The visa lists vaccination as a prerequisite, not a suggestion.'],
    'a prerequisite for/of. Must come first. Everyday: requirement / you need X first. Adjective possible.',
    ['requirement']
  ),
  proliferation: L(
    'Proliferation is a rapid increase in number, often with a hint that it may be hard to control: the proliferation of fake news. Increase is everyday and calmer; spread can be geographic. Nuclear proliferation is a set political collocation. Proliferate is the verb. Use it when things multiply quickly, not for a slow rise in prices.',
    ['The proliferation of small rules made the handbook unreadable.', 'Start-ups proliferated, then most vanished within a year.'],
    'the proliferation of + noun. Rapid, sometimes unwelcome increase. Verb: proliferate. Everyday: rapid spread.',
    ['spread']
  ),
  propensity: L(
    'A propensity is a natural tendency to behave in a particular way: a propensity to interrupt. Tendency is the everyday cousin; habit can be learned. Pattern: a propensity to + verb / for + noun. It is slightly formal and often mildly critical. In speech, he tends to is almost always better. Do not use it for a one-off action.',
    ['The software has a propensity to freeze when the file is large.', 'She has a propensity for last-minute changes.'],
    'a propensity to + verb / for + noun. Formal for tendency. Everyday: tend to. Often slightly critical.',
    ['tendency']
  ),
  ramification: L(
    'A ramification is a knock-on consequence, often complicated and not obvious at first: the ramifications of the change. Consequence is everyday; implication can be more logical than practical. Almost always plural in this sense: ramifications. It belongs in policy and essays; in speech, knock-on effects or what it leads to is clearer.',
    ['They celebrated the cut without seeing the ramifications for safety.', 'Legal ramifications kept the film in the archive for years.'],
    'Usually plural: ramifications of…. Knock-on, not always obvious. Everyday: consequences / knock-on effects.',
    ['consequence']
  ),
  rudimentary: L(
    'Rudimentary means basic and not far developed: a rudimentary knowledge of French, rudimentary tools. Basic is everyday; primitive can sound insulting. Elementary is close for knowledge. It often implies “enough to start, not enough to rely on.” In speech, very basic or rough-and-ready is more natural. Do not use it as a fancy “simple” for a well-made object.',
    ['His map-reading was rudimentary, so we used the app.', 'They built a rudimentary shelter from tarpaulin and rope.'],
    'rudimentary knowledge/skills. Very basic, underdeveloped. Everyday: very basic. Stronger than simple.',
    ['basic']
  ),
  scrutiny: L(
    'Scrutiny is close, careful examination, often by critics or officials: under close scrutiny. Examination can be a test; inspection is more physical. Look at is everyday. Collocations: come under scrutiny, public scrutiny, subject to scrutiny. Scrutinise is the verb. The word is common in news and academic English; in speech, a close look will do.',
    ['The figures will not survive scrutiny.', 'Her expenses came under intense scrutiny after the leak.'],
    'under scrutiny / come under scrutiny. Verb: scrutinise. Everyday: a close look. Formal/news register.',
    ['inspection']
  ),
  seminal: L(
    'Seminal means a work that later people keep building on — founding and influential, not merely “very good.” Important is everyday; influential is close but can describe a trend. Collocations: a seminal paper / book / study. Use it sparingly, for things that actually changed a field. In speech, a founding study or it started a lot of later work is clearer and less grand.',
    ['Chomsky’s early work was seminal for a generation of linguists.', 'It is a useful article, but calling it seminal is a stretch.'],
    'a seminal paper/study. Foundational and influential. Do not use for merely good work. Everyday: founding / highly influential.',
    ['influential']
  ),
  stringent: L(
    'Stringent means very strict and tightly enforced: stringent limits, stringent standards. Strict is everyday; harsh can mean cruel rather than precise. Tight is informal. Typical with rules, criteria, and controls, not with a strict teacher’s personality. In speech, very strict is enough; stringent sounds like a regulator’s press release.',
    ['Entry to the lab requires stringent safety checks.', 'The bank applied more stringent tests after the scandal.'],
    'stringent rules/standards/limits. Tight and must be obeyed. Everyday: very strict. Official register.',
    ['strict']
  ),
  substantiate: L(
    'To substantiate is to back a claim with facts that could prove it: substantiate that with a source. Prove is stronger (often final); support is everyday and milder. Back up is the spoken version. Unsubstantiated is a common adjective for rumours. It is a research and legal verb; in a tutorial, give evidence is enough.',
    ['The paper does not substantiate its opening claim.', 'Can you substantiate the dates from an independent record?'],
    'substantiate a claim with evidence. Stronger than support, short of courtroom prove. Everyday: back up.',
    ['support']
  ),
  synthesis: L(
    'A synthesis is a new whole made by combining different ideas or sources: a synthesis of three articles. Summary repeats; synthesis reorganises and connects. Combination is everyday and looser. Synthesise is the verb (a key exam skill). In chemistry it has a technical sense. In speech, pulling it together is the plain paraphrase.',
    ['The last chapter is a synthesis, not another case study.', 'Good essays synthesise sources instead of stacking quotations.'],
    'a synthesis of + sources. Verb: synthesise. Not a mere summary. Everyday: combining into one view.',
    ['combination']
  ),
  underpin: L(
    'To underpin is to hold an idea or system up from below: examples underpin an explanation; trust underpins the deal. Support is everyday and can be a side prop; underpin is the foundation. Bolster is a later boost. Underpinning is the noun. Common in academic and policy English; in speech, that’s what it rests on is clearer.',
    ['Two assumptions underpin the whole model.', 'Clear rights underpin a free press; slogans do not.'],
    'underpin an argument/system. Foundation, not a later boost (bolster). Everyday: rest on / support.',
    ['support']
  ),
  vernacular: L(
    'The vernacular is the everyday language ordinary people speak in a place, as opposed to a formal, literary, or official variety. Dialect can include pronunciation and grammar of a region; slang is more informal vocabulary. In the vernacular, the local vernacular. It is a critics’ and linguists’ word; in speech, everyday language or how people actually talk.',
    ['The play switches from legal English into the vernacular for jokes.', 'She writes criticism in the vernacular, not in jargon.'],
    'the vernacular / in the vernacular. Everyday local speech vs formal variety. Contrast: slang, dialect.',
    ['everyday language']
  ),
  warrant: L(
    'As a verb, warrant means be a good enough reason for: the delay does not warrant a full refund. Justify is close; deserve is more moral and everyday. Warrant attention / further study are academic collocations. As a noun, a warrant is a legal document (a search warrant) — a different sense. In speech, does not call for or is not worth is plainer.',
    ['One complaint does not warrant closing the whole site.', 'The new figures warrant a second look, not a panic.'],
    'warrant + noun (a response). Formal for justify / call for. Noun: legal warrant — different sense.',
    ['justify']
  ),
}
