const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2P = {
  vanish: L(
    'To vanish is to disappear suddenly, or to stop existing: vanish from the freezer; vanish overnight. Disappear is the everyday twin; fade is slower. The sample vanished, so the practical was voided. Mix-up: varnish is a wood coating. Do not write “vanish away”.',
    ['The sample vanished from the freezer overnight, so the practical was voided.', 'Public support vanished after the leak, which is the “stop existing” sense.'],
    'vanish from / into; vanish overnight. Everyday: disappear. Trap: varnish. Sciences and news. Sudden loss, not a slow fade.',
    ['disappear']
  ),
  venture: L(
    'To venture is to dare to go or say something: venture an answer; venture out. As a noun: a business venture. Risk is wider; dare is more personal. Few candidates ventured an answer to the unseen. Mix-up: adventure is a trip or story (already elsewhere). Do not call a guaranteed grant a venture.',
    ['Few candidates ventured an answer to the last unseen poem.', 'The sixth-form café was a joint venture with the trust, which is the business sense.'],
    'venture an opinion / out; a business venture. Wider: risk. Trap: adventure. Orals, news, and business. Dare or risky project — specify which.',
    []
  ),
  verbal: L(
    'Verbal means spoken rather than written, or to do with words: a verbal warning; verbal reasoning. Oral is the exam twin for speaking; written sits opposite. A verbal warning is still logged. Mix-up: verbose (already elsewhere) means wordy. Non-verbal is body language. Do not write verbal for “angry”.',
    ['A verbal warning is still logged on the behaviour record.', 'Verbal reasoning is a separate paper, which is the words-and-logic sense.'],
    'a verbal warning / agreement; verbal reasoning; non-verbal. Spoken twin: oral. Trap: verbose. Pastoral and admissions. Spoken or word-based, not “rude”.',
    ['oral']
  ),
  verdict: L(
    'A verdict is a court’s official decision, or a judgement on quality: a guilty verdict; a verdict on the play. Sentence is the punishment that follows; ruling is the judge’s legal decision. The mock jury returned a verdict. Mix-up: predict is to forecast. Do not call a teacher’s comment a verdict without the legal or review sense.',
    ['The mock jury returned a verdict of not guilty after forty minutes.', 'Critics gave the production a mixed verdict, which is the review sense.'],
    'return / reach a verdict; a guilty / not-guilty verdict. Next step: sentence. Trap: predict. Law units and reviews. Decision, not the punishment.',
    ['judgement']
  ),
  versus: L(
    'Versus means against, used for two sides in a match, case, or comparison (often vs): phones versus notes; R v Smith in law. Against is everyday; compared with is the essay twin. The motion was phones versus handwritten notes. Mix-up: verses are lines of a poem (already elsewhere). Do not write versus for “and”.',
    ['The debate motion was phones versus handwritten notes in Year 12.', 'The fixture listed City versus United, which is the sport sense.'],
    'A versus B; vs (abbreviation). Everyday: against. Trap: verses. Debates, sport, and law. Two sides, not a list.',
    ['against']
  ),
  vertical: L(
    'Vertical means upright, going straight up and down: the vertical axis; a vertical drop. Horizontal is across; upright is the everyday twin. Label the vertical axis with units. Mix-up: vertex is a corner in maths. Do not call a steep slope vertical unless it is 90 degrees.',
    ['Label the vertical axis with units, not just “score”.', 'A vertical garden featured in the design brief, which is the architecture sense.'],
    'the vertical axis / line; vertically. Opposite: horizontal. Trap: vertex. Graphs and design. Up–down, not across.',
    ['upright']
  ),
  vessel: L(
    'A vessel is a ship or large boat, a tube in the body, or a container for liquid: cargo vessels; blood vessels. Ship is the everyday sea word; boat is smaller. The case study mapped cargo vessels. Mix-up: vassal is a feudal tenant (history). Do not call a dinghy a vessel in a biology paper.',
    ['The geography case study mapped cargo vessels in the Channel.', 'Label the blood vessel on the diagram, which is the biology sense.'],
    'a cargo / naval vessel; a blood vessel; a laboratory vessel. Everyday (sea): ship. Trap: vassal. Geography, biology, and chemistry. Ship, tube, or pot — specify.',
    ['ship']
  ),
  veteran: L(
    'A veteran is someone with long experience, especially a former member of the armed forces: a war veteran; a veteran teacher. Expert is about skill, not years. A war veteran spoke in the Remembrance assembly. Mix-up: vet is an animal doctor (already in the dictionary). Do not call a newly qualified teacher a veteran.',
    ['A war veteran spoke in the Remembrance assembly, not a celebrity guest.', 'A veteran head of year chaired the panel, which is the long-service sense.'],
    'a war / combat veteran; a veteran of + field. Trap: vet (animal doctor). History, news, and HR. Long experience, not a pet clinic.',
    []
  ),
  vice: L(
    'Vice is immoral or criminal behaviour, a bad habit, or a clamp for holding work: vice offences; a secret vice. Crime is wider; sin is religious. The booklet mapped vice offences separately from theft. Mix-up: visa is travel permission; vice versa means the other way round. Do not write vice for “almost” (that is virtually).',
    ['The crime unit mapped vice offences separately from theft in the booklet.', 'Tighten the vice before you saw the timber, which is the workshop sense.'],
    'vice offences; a vice of + gerund; a bench vice. Wider: crime. Trap: visa / vice versa. Citizenship and DT. Crime, habit, or clamp.',
    []
  ),
  violate: L(
    'To violate is to break a law, agreement, or right: violate an embargo; violate privacy. Break is everyday; breach is the legal twin. Do not violate the embargo by sharing grades. Mix-up: violent is the adjective for force (next entries). Do not use violate for a late homework without a rule or right.',
    ['Do not violate the exam-board embargo by sharing grades before midday.', 'The drone flight violated the no-fly zone, which is the airspace sense.'],
    'violate a rule / right / agreement. Everyday: break. Legal: breach. Noun: violation. Exam regs and law. A broken rule, not mere lateness.',
    ['breach']
  ),
  violence: L(
    'Violence is physical harm to people, or great destructive force (usually uncountable): street violence; a violence of the storm. Force is wider; assault is a crime. The source discusses structural violence in housing. Mix-up: violation is a broken rule (previous entry). Do not write “a violence” for one punch.',
    ['The source discusses structural violence in housing, not only street fights.', 'The violence of the blast cracked the windows, which is the force sense.'],
    'physical / domestic / structural violence. Uncountable in most exam uses. Crime: assault. Trap: violation. Sociology and news. Harm or force, not a single blow as a count.',
    []
  ),
  violent: L(
    'Violent means using physical force to hurt, or sudden and strong: a violent storm; a violent crime. Aggressive is wider (can be words); fierce is for intensity. A violent storm cancelled the fieldwork. Mix-up: violet is the colour and flower. Do not call a heated debate violent without evidence of force.',
    ['A violent storm cancelled the coastal fieldwork, the risk assessment noted.', 'Violent crime fell in the borough, which is the offence sense.'],
    'a violent storm / crime / film; violently. Wider: aggressive. Trap: violet. Geography, citizenship, and media. Force or sudden intensity, not mere shouting.',
    []
  ),
  virtual: L(
    'Virtual means done by computer rather than in person, or almost but not exactly: a virtual parents’ evening; a virtual monopoly. Online is the everyday twin; almost is the “nearly” sense. The evening was virtual after snow. Mix-up: virtuous means morally good (next entry’s family). Do not write virtual for “imaginary” without the computer or “almost” sense.',
    ['The parents’ evening was virtual after the snow closure.', 'One chain had a virtual monopoly on buses, which is the “almost complete” sense.'],
    'a virtual meeting / classroom; virtually. Everyday: online. Trap: virtuous. Remote learning and economics. Computer-based or almost, not “pretend”.',
    ['online']
  ),
  virtue: L(
    'A virtue is a good moral quality, or an advantage: name a virtue; by virtue of (because of). Value is wider; quality can be neutral. Name a virtue the speaker claims, then test it. Mix-up: virtual is computer-based (previous entry). Do not call a convenient timetable a virtue in an ethics essay.',
    ['Name a virtue the speaker claims, then test it against the extract.', 'By virtue of living in the catchment she had a place, which is the “because of” sense.'],
    'a virtue; by virtue of. Wider: value. Trap: virtual. RS, literature, and formal prose. Moral good or “because of”, not a gadget.',
    []
  ),
  vision: L(
    'Vision is sight, an idea of the future, or a mental picture: a vision statement; poor vision. Sight is the body sense; plan is more concrete. The trust’s vision statement is not a budget. Mix-up: version is a form of a text (already in the dictionary). Do not treat a slogan as a costed plan.',
    ['The trust’s vision statement is not a substitute for a budget line.', 'Blurred vision featured in the concussion protocol, which is the sight sense.'],
    'a vision of / for; a vision statement; 20/20 vision. Everyday (eyes): sight. Trap: version. Leadership copy and biology. Future idea or eyesight.',
    ['sight']
  ),
  visual: L(
    'Visual means connected with seeing or with pictures: visual evidence; visual literacy. Visible means able to be seen (already in the dictionary); pictorial is narrower. Caption visual evidence in the booklet. Mix-up: visor is a helmet shield. Do not write visual for “obvious” (that is evident).',
    ['Visual evidence in the source booklet is still evidence: caption it.', 'The visual arts option is a separate endorsement, which is the subject sense.'],
    'visual evidence / literacy / arts; visually. Able to be seen: visible. Trap: visor. Source work and art. Pictures and seeing, not “obvious”.',
    []
  ),
  vital: L(
    'Vital means absolutely necessary, or connected with keeping someone alive: vital consent; vital organs. Essential is the close twin; important is weaker. A signed consent form is vital. Mix-up: vitamin is a nutrient (already in the dictionary). Do not call a nice-to-have extra vital.',
    ['A signed consent form is vital before any interview is recorded.', 'Check vital signs in the first-aid station, which is the medical sense.'],
    'vital for / to; vital organs / signs. Close: essential. Weaker: important. Trap: vitamin. Ethics, methods, and biology. Necessary, not merely useful.',
    ['essential']
  ),
  vivid: L(
    'Vivid means very bright, clear, or detailed: a vivid image; a vivid memory. Bright is for colour; clear is weaker. Give a vivid image from the poem. Mix-up: livid means furious or a bruise colour. Do not call a pale sketch vivid.',
    ['Give a vivid image from the poem, not a plot summary.', 'She had a vivid memory of the alarm, which is the recollection sense.'],
    'a vivid colour / image / memory; vividly. Colour: bright. Trap: livid. Literature and orals. Sharp and intense, not faint.',
    []
  ),
  voluntary: L(
    'Voluntary means done by choice, not because you must, and often unpaid: voluntary work; a voluntary contribution. Optional is close; compulsory sits opposite. Volunteer is the person or verb (already in the dictionary). Voluntary work on UCAS still needs a referee. Mix-up: involuntary is not under conscious control. Do not call paid overtime voluntary.',
    ['Voluntary work on the UCAS form still needs a named referee.', 'Attendance at the revision clinic is voluntary, which is the optional sense.'],
    'voluntary work / contribution; voluntarily. Person/verb: volunteer. Opposite: compulsory. Trap: involuntary. UCAS and pastoral. Chosen, often unpaid.',
    ['optional']
  ),
  vow: L(
    'A vow is a serious promise, especially a formal or public one: a campaign vow; marriage vows. Promise is everyday; oath is legal or ceremonial. A campaign vow is not a funded policy. As a verb: vow to + verb. Mix-up: vowel is a, e, i, o, u (already in the dictionary); wow is informal surprise. Do not use vow for a casual “I’ll try”.',
    ['A campaign vow is not a funded policy until it is in the manifesto costings.', 'She vowed to resit in November, which is the verb sense.'],
    'make / break a vow; vow to + verb. Everyday: promise. Legal: oath. Trap: vowel / wow. Politics, RS, and news. A solemn promise, not a wish.',
    ['promise']
  ),
  vulnerable: L(
    'Vulnerable means easy to harm, attack, or criticise: vulnerable candidates; vulnerable to flooding. At risk is the everyday phrase; fragile stresses breakability. Vulnerable candidates sit in a smaller room. Mix-up: valuable means worth a lot (already in the dictionary). Do not call a confident prefect vulnerable without evidence.',
    ['Vulnerable candidates sit in a smaller room with a named invigilator.', 'The estuary is vulnerable to storm surges, which is the geography sense.'],
    'vulnerable to + noun; a vulnerable + noun. Everyday: at risk. Trap: valuable. Safeguarding and geography. Easily harmed, not “precious”.',
    []
  ),
  wander: L(
    'To wander is to walk without a clear route, or (of attention) to drift: wander off the question; wander the market. Stroll is leisurely walking; stray is more “go missing”. Do not let the argument wander. Mix-up: wonder is to be curious or amazed (already in the dictionary). Do not write wander for “ask yourself”.',
    ['Do not let your argument wander off the question in the last paragraph.', 'They wandered the old town after the oral, which is the walking sense.'],
    'wander off / around; wander the + place. Attention: wander. Trap: wonder. Essays and travel writing. Drift, not “be amazed”.',
    []
  ),
  ward: L(
    'A ward is a hospital room for patients, a local voting area, or a child in someone’s legal care: a children’s ward; a council ward. Room is too general; constituency is a larger electoral area. The case study compared waiting times on a ward. Verb: ward off (keep away). Mix-up: award is a prize (already elsewhere); word is a unit of language. Do not call a whole hospital a ward.',
    ['The health case study compared waiting times on a children’s ward.', 'Turnout was lowest in the riverside ward, which is the electoral sense.'],
    'a hospital ward; an electoral ward; a ward of court. Verb: ward off. Trap: award / word. Health, politics, and law. Room, district, or child in care.',
    []
  ),
  weapon: L(
    'A weapon is an object used to hurt or kill, or something used to gain an advantage: a new weapon; a legal weapon. Arms is the military plural; tool is neutral. The history paper asks how the weapon changed tactics. Mix-up: weather is climate (already in the dictionary). Do not write weapon for any sharp classroom object in a PE write-up.',
    ['The history paper asks how the new weapon changed trench tactics.', 'Debt was used as a political weapon, which is the metaphor sense.'],
    'a nuclear / chemical weapon; weaponise (verb). Military plural: arms. Trap: weather. History and news. Instrument of harm or advantage.',
    []
  ),
  welfare: L(
    'Welfare is health, happiness, and safety, or state money and services for people in need: animal welfare; a welfare state. Well-being is the personal twin; benefits is the payments sense. Animal welfare featured in the ethics question. Mix-up: farewell is goodbye; warfare is fighting. Do not write welfare for a one-off gift voucher.',
    ['Animal welfare featured in the biology ethics question, not only in farming news.', 'Welfare payments rose after the mill closed, which is the state-support sense.'],
    'animal / child welfare; the welfare state. Close: well-being. Trap: farewell / warfare. Ethics, politics, and biology. Safety or state support, not a goodbye.',
    ['well-being']
  ),
  widely: L(
    'Widely means by many people or in many places, or to a large degree: widely accepted; widely available. Broadly is close; everywhere is looser. The finding is not widely accepted until repeated. Mix-up: wide is the adjective (already in the dictionary). Do not write widely for “open your stance” (that is widen).',
    ['The finding is not widely accepted until a second lab repeats it.', 'The scheme is widely available in Year 12, which is the access sense.'],
    'widely accepted / known / available; vary widely. Adjective: wide. Close: broadly. Methods and news. By many, not “a wide gap”.',
    ['broadly']
  ),
  wisdom: L(
    'Wisdom is the ability to make good decisions from knowledge and experience (usually uncountable): conventional wisdom; the wisdom of waiting. Knowledge is facts; intelligence is processing power. Conventional wisdom said the course was full. Mix-up: wise is the adjective (next entry). Do not write “a wisdom” for one tip.',
    ['Conventional wisdom said the course was full; the portal still had places.', 'The proverb tests the wisdom of silence, which is the literature sense.'],
    'conventional wisdom; the wisdom of + gerund. Uncountable. Adjective: wise. Facts: knowledge. RS, essays, and news. Judgement, not a single fact.',
    []
  ),
  wise: L(
    'Wise means showing good judgement; sensible: a wise choice; wise to wait. Sensible is the everyday twin; clever is about speed of thought. It is not wise to cite a forum thread. Mix-up: otherwise means “if not”; vice is a bad habit. Do not call a lucky guess wise.',
    ['It is not wise to cite a forum thread as a primary source.', 'A wise head of year delayed the trip, which is the judgement sense.'],
    'a wise + noun; it is wise to + verb; wisely. Everyday: sensible. Noun: wisdom. Trap: otherwise. Advice and evaluations. Good judgement, not cleverness.',
    ['sensible']
  ),
  withdraw: L(
    'To withdraw is to take something back or out, or to leave an activity: withdraw from the oral; withdraw cash. Pull out is informal; retreat is military. She had to withdraw from the oral. Noun: withdrawal. Mix-up: wither means dry up and die. Do not write withdraw for “forget a word” (that is omit).',
    ['She had to withdraw from the oral after a medical note arrived.', 'Withdraw the allegation in writing, which is the “take back” sense.'],
    'withdraw from / to; withdraw cash / a remark. Noun: withdrawal. Informal: pull out. Trap: wither. Exams, banks, and law. Leave or take back, not shrink.',
    []
  ),
  within: L(
    'Within means inside a place, time, or limit: within an hour; within the grounds. Inside is the place twin; in is weaker on deadlines. Scripts must be packed within an hour. Mix-up: without is “not having” (already in the dictionary). Do not write within for “after” a deadline.',
    ['Scripts must be packed within an hour of the finish time.', 'Stay within the marked area on the field trip, which is the place sense.'],
    'within + time / limit / place; within reach. Opposite of without (possession). Deadlines, maps, and regs. Inside the limit, not beyond it.',
    ['inside']
  ),
  witness: L(
    'A witness is a person who sees an event and can describe it; as a verb, to see it happen: a witness statement; witness an incident. Observer is cooler; spectator is for sport. A witness statement is not a confession. Mix-up: wit is humour. Do not call a rumour-spreader a witness.',
    ['A witness statement is not the same as a signed confession in the law unit.', 'Staff witnessed the collision from the gate, which is the verb sense.'],
    'a witness to / statement; witness + event. Verb: witness. Trap: wit. Law, news, and history. Someone who saw it, not a gossip.',
    ['observer']
  ),
  wound: L(
    'A wound is an injury where skin or flesh is cut or torn; as a verb, to injure that way: dress the wound; a gunshot wound. Injury is wider; cut is smaller. Dress the wound before discussing infection. Pronunciation: /wuːnd/ for the injury; /waʊnd/ is the past of wind. Mix-up: would is the modal (already in the dictionary). Do not write wound for a bruise with no break in the skin.',
    ['Dress the wound before you discuss infection in the first-aid paper.', 'The headline wounded the trust’s reputation, which is the metaphorical sense.'],
    'a deep / open wound; wound + person. Injury IPA: /wuːnd/. Past of wind: /waʊnd/. Trap: would. First aid and news. A break in the flesh, not a bruise.',
    ['injury']
  ),
  whom: L(
    'Whom is the object form of who, used in formal English after a verb or preposition: to whom; whom we interviewed. Who is the subject (already in the dictionary); whose shows possession. Name the minister to whom the letter was addressed. In speech, who often replaces whom. Do not write whom as the subject (“whom arrived” is wrong).',
    ['Name the minister to whom the letter was addressed, not who sent it.', 'The people whom we interviewed stayed anonymous, which is the object sense.'],
    'to / for / with whom; whom + clause (object). Subject: who. Possession: whose. Formal letters and grammar papers. Object, not subject.',
    []
  ),
  works: L(
    'Works is a factory or industrial site, or an artist’s collected output: the steel works; the works of a poet. Factory is the everyday twin; workplace is any job site (already in the dictionary). The steel works closed after the outage. Mix-up: work is the uncountable job or effort; workshop is a training session. Do not write works for a single essay.',
    ['The steel works closed after the furnace outage, the business paper said.', 'Cite the collected works, not a blog summary, which is the literature sense.'],
    'a gas / steel / water works; the works of + name. Everyday plant: factory. Uncountable job: work. Trap: workshop. Industry and literature. Plant or collected output.',
    ['factory']
  ),
  wealthy: L(
    'Wealthy means having a lot of money, property, or resources: a wealthy catchment; wealthy nations. Rich is everyday; affluent is the sociology twin. A wealthy catchment is not a representative sample. Noun: wealth (already in the dictionary). Mix-up: healthy is about fitness. Do not call a single expensive coat proof that a family is wealthy.',
    ['A wealthy catchment is not a representative sample for the inequality enquiry.', 'A wealthy donor funded the bursary, which is the individual sense.'],
    'a wealthy + noun; wealthier / wealthiest. Everyday: rich. Noun: wealth. Trap: healthy. Geography and sociology. Rich, not merely well-dressed.',
    ['rich']
  ),
  whatsoever: L(
    'Whatsoever means at all, used after a negative for emphasis: no evidence whatsoever; none whatsoever. At all is the everyday twin; whatever is a different word (any / no matter what). There was no evidence whatsoever that the pack was resealed. Do not use whatsoever in a positive sentence (“some evidence whatsoever” is wrong).',
    ['There was no evidence whatsoever that the pack had been resealed.', 'He had no interest whatsoever in the resit, which is the emphasis sense.'],
    'no / none / nothing whatsoever. Everyday: at all. Trap: whatever. Formal denials and exam regs. After a negative only.',
    []
  ),
  whereby: L(
    'Whereby means by which, according to which (formal): a system whereby; an agreement whereby. By which is the plain twin; thereby means “by that means” (result). They set up a system whereby clashes are logged on the portal. Mix-up: whereby is not “where by” two words. Do not drop it into a text where “so that” would do.',
    ['They set up a system whereby clashes are logged on the portal, not on paper.', 'A clause whereby fees freeze for a year featured in the contract, which is the legal sense.'],
    'a system / process / agreement whereby. Plain: by which. Contrast: thereby (by that). Formal policy and law. “By which”, not a location.',
    []
  ),
  wholly: L(
    'Wholly means completely; in every way: not wholly to blame; wholly owned. Completely is the everyday twin; entirely is close. The centre is not wholly to blame if the portal was down. Mix-up: holy is sacred; whole is the adjective (already in the dictionary). Do not write wholly for “healthy”.',
    ['The centre is not wholly to blame if the board’s portal was down.', 'A wholly owned subsidiary featured in the accounts question, which is the business sense.'],
    'wholly + adjective / participle; not wholly. Everyday: completely. Trap: holy / whole. Evaluations and business. Completely, not sacred.',
    ['completely']
  ),
  whilst: L(
    'Whilst means during the time that, or is used to contrast two facts (British, slightly formal): whilst the lab was closed; whilst X, Y. While is the everyday twin (already in the dictionary); whereas is contrast only. Whilst the lab was closed, candidates sat in the hall. Mix-up: whist is a card game. Do not stack whilst with whereas in the same clause.',
    ['Whilst the lab was closed, candidates sat the paper in the hall.', 'Whilst the policy looks fair, the n is tiny, which is the contrast sense.'],
    'whilst + clause. Everyday: while. Contrast twin: whereas. Trap: whist. Formal UK prose. Same time or contrast, not a card game.',
    ['while']
  ),
  worthwhile: L(
    'Worthwhile means worth the time, money, or effort: a worthwhile EPQ; worthwhile to wait. Worth is the shorter cousin (worth it / worth doing, already in the dictionary); valuable stresses worth in itself. A worthwhile EPQ still needs a question. Mix-up: worthless means of no value. Do not write worthwhile of.',
    ['A worthwhile EPQ still needs a question, not a topic dumped from a video.', 'The extra clinic was worthwhile for borderline candidates, which is the effort-payoff sense.'],
    'a worthwhile + noun; it is worthwhile to + verb. Cousin: worth + -ing. Opposite: worthless. Trap: “worthwhile of”. Planning and evaluations. Worth the effort.',
    []
  ),
}
