const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1J = {
  namely: L(
    'Namely introduces the exact names or details of what you have just mentioned: three causes, namely X, Y, and Z. That is and i.e. are cousins; especially picks a highlight rather than a full list. Name is the everyday verb. Do not use namely to start a vague list you cannot finish.',
    ['Two files were embargoed, namely the night-lab log and the raw CSV.', 'Especially names a star example; namely is supposed to specify the set. That is can paraphrase; namely points at labels.'],
    'That is to say; to name them. Close: that is / i.e. Contrast: especially (a highlight, not a full roll-call). Not a waffle starter.',
    ['specifically']
  ),
  negligible: L(
    'Negligible means so small you can ignore it: a negligible risk, negligible cost. Tiny and slight are everyday; insignificant is a close cousin. Neglect (already in the dictionary) is fail to care — related look. Negligent is careless in a blameworthy way. Do not call a missing n negligible.',
    ['Postage was negligible; the unpaid night marking was not.', 'Insignificant can be about importance; negligible is about size. Negligent staff are at fault; a negligible fee is just small.'],
    'Too small to matter. Everyday: tiny. Close: insignificant. Mix-ups: neglect (not care); negligent (careless). A missing count is not negligible.',
    ['tiny']
  ),
  niche: L(
    'A niche is a specialised gap in a market, or a role that fits you unusually well: a niche product, find your niche. Also a recess in a wall. Specialist is the adjective cousin; corner is everyday. Pronunciation: British often /niːʃ/, also /nɪtʃ/. Do not call a mass required module a niche course.',
    ['They occupied a niche in night-class workbooks the big lists ignored.', 'A wall niche holds a statue; exam English usually wants the market/role sense. A first-year core course is not niche.'],
    'A narrow specialised slot (market or role). Also a wall recess. British /niːʃ/ or /nɪtʃ/. Everyday: a corner of the market. Not a mass compulsory course.',
    []
  ),
  nominal: L(
    'Nominal means in name only, or very small beside the real cost: a nominal fee, nominal independence. Also a stated figure before inflation (nominal GDP). Tiny is everyday for the fee sense; so-called flags the “name only” sense. Nominate (already in the dictionary) is put someone forward — related look. Do not call a full commercial price nominal.',
    ['The registration fee was nominal; travel and unpaid marking were the bill.', 'Nominal GDP is the unadjusted figure; real GDP strips out prices. Nominate a candidate; a nominal chair has the title, not the power.'],
    'In name / tiny; also a face-value (unadjusted) figure. Contrast: real (prices adjusted). Mix-up: nominate. Not a full commercial charge.',
    []
  ),
  notably: L(
    'Notably means in a way worth mentioning, often “especially”: notably in the night cohort, most notably. Notable (already in the dictionary) is the adjective; noticeably is “in a way you can see”. Especially is everyday. Do not use notably for a buried, unimportant aside.',
    ['Several clauses failed, notably the one that still lacked a date.', 'Noticeably late is visible; notably late is worth naming in the minutes. Notable is the adjective. Especially is the everyday twin.'],
    'Especially; worth noting. Adjective: notable. Mix-up: noticeably (visibly). Everyday: especially. Not for trivia you then ignore.',
    ['especially']
  ),
  notify: L(
    'To notify is to tell someone officially: notify the office, notify of a change. Tell and inform are everyday; notice (already in the dictionary) is see, or a noun announcement. Notification is the noun. Do not notify a friend of a coffee order as if it were a statute.',
    ['You must notify the exam office within a day of the incident, not in a group chat.', 'Inform is everyday; notify is the official channel. A notice on a door is the noun. Notice the error is the verb “see”.'],
    'Inform officially. Noun: notification. Everyday: tell / inform. Mix-up: notice (see / a posted sign). Not a casual coffee message.',
    ['inform']
  ),
  notwithstanding: L(
    'Notwithstanding means in spite of (formal): notwithstanding the delay; the delay notwithstanding. Despite and in spite of are everyday; nevertheless (already in the dictionary) is an adverb (“even so”). Withstanding is resisting — a lookalike. Do not drop it into a text message where despite would do.',
    ['Notwithstanding the apology, the embargo still applied to the PDF.', 'Despite is everyday; notwithstanding can follow its noun (the rain notwithstanding). Nevertheless = even so (adverb), not a preposition here.'],
    'Despite (formal). Can follow the noun. Everyday: despite / in spite of. Contrast: nevertheless (adverb). Mix-up: withstand (resist).',
    ['despite']
  ),
  nourish: L(
    'To nourish is to feed what needs to grow: nourish a child, nourish a talent, nourish a grudge (keep it alive). Feed is everyday and more physical; nurture (this batch) is care-and-develop. Nutrition is the science/noun of food. Do not nourish a spreadsheet.',
    ['A weekly clinic nourished the cohort better than one pep talk in freshers’ week.', 'Feed a plant; nourish a skill or a rumour. Nurture stresses care over time. Nutrition is the food-science noun, not the verb.'],
    'Feed / keep alive (body, talent, or a feeling). Everyday: feed. Cousin: nurture. Noun family: nutrition. Not a file or a form.',
    ['feed']
  ),
  novelty: L(
    'Novelty is newness that still feels unusual: the novelty wore off; a novelty toy (cheap unusual gadget). Newness is everyday; innovation (already in the dictionary) is useful new method. Novel as an adjective is “new”; as a noun, a book. Do not call a replicated, boringly solid method a novelty as if that were praise.',
    ['The novelty of the portal died in week two, when the login failed at 9 a.m.', 'A novelty keyring is the gadget sense. Innovation claims usefulness; novelty can be a fad. A novel (book) is a different noun.'],
    'Newness, often short-lived; also a novelty gadget. Close: newness. Stronger/useful: innovation. Mix-up: novel (book / “new”). Not a compliment for a solid method.',
    []
  ),
  nurture: L(
    'To nurture is to care for something so that it can develop: nurture talent, a nurturing environment. Also a noun (nature versus nurture). Care for is everyday; nourish (this batch) is feed/keep alive. Nature is what you are born with. Do not nurture a virus in a methods joke unless you mean it.',
    ['The lab nurtured two postdocs who later ran clean, dull, replicable groups.', 'Nature vs nurture is the old pairing. Care for is everyday; nourish can be food or a grudge. A nurturing tone still needs a budget line.'],
    'Care for so it can grow. Noun: nurture (vs nature). Everyday: care for. Cousin: nourish. Not a substitute for pay and supervision.',
    []
  ),
  obscure: L(
    'Obscure means little-known or hard to understand, or hidden from view: an obscure paper, an obscure view. Unclear is everyday; recondite (already in the dictionary, C2) is harder and more bookish. The verb obscure is hide. Do not call a badly written required chapter obscure as if that were the reader’s fault.',
    ['An obscure footnote held the only honest n; the abstract did not.', 'Unclear writing is on the author; an obscure source is genuinely little-known. Obscure the view is the verb. Recondite is the rarer C2 twin.'],
    'Little-known / hard to grasp / hidden. Everyday: unclear (writing). Verb: obscure (hide). C2 cousin: recondite. Not an excuse for bad prose.',
    ['unclear']
  ),
  obsession: L(
    'An obsession is a thought or activity you cannot drop, often too much: an obsession with rankings, obsessed (adjective). Interest is everyday; passion can be positive. Obsessive is the harsher adjective. Do not diagnose a careful, complete check as an obsession.',
    ['An obsession with the league table crowded the dropout line off the page.', 'Passion can be healthy; obsession usually overdoes it. Obsessive checking of a fire door can still be the right amount. Interest is everyday.'],
    'A thought you cannot drop. Adjective: obsessed / obsessive. Everyday: interest. Can be too much. Not a thorough safety check.',
    []
  ),
  obsolete: L(
    'Obsolete means replaced by something newer: obsolete software, render a form obsolete. Old-fashioned can still be in use; outdated (cousin) is “behind the times”. Defunct (already in the dictionary) is no longer operating. Do not call a still-required wet-ink signature obsolete if the auditors still want it.',
    ['The paper carbon is obsolete; the portal still cannot export a CSV, which is the joke.', 'Outdated may still run; obsolete has been superseded. Defunct is dead as an institution. A legally required wet signature is not obsolete yet.'],
    'Out of date because replaced. Close: outdated. Contrast: old-fashioned (still usable); defunct (no longer running). Not “the auditors still want it”.',
    ['outdated']
  ),
  obstruct: L(
    'To obstruct is to block a path, view, or process: obstruct an exit, obstruct an inquiry. Block is everyday; hinder is milder; impede is a close cousin. Obstruction is the noun (also a sports foul). Do not write obstruct for a polite disagreement in a meeting.',
    ['A locked fire door obstructed the only marked exit on the plan.', 'Block a road; obstruct often adds blame or formality (obstructing justice). Hinder is slower-down, not always a blockage. Noun: obstruction.'],
    'Block / get in the way. Everyday: block. Milder: hinder. Noun: obstruction. A disagreement is not automatically obstruction.',
    ['block']
  ),
  odds: L(
    'Odds are the chances of something, often as a ratio: the odds of, long odds, against the odds. Also at odds (in conflict) and odds and ends. Chance and likelihood are everyday. Odd (adjective) is strange or not even. Do not write odds for a single sure fact.',
    ['The odds of a clean replication were poor with n = 11, which belonged in the abstract.', 'At odds with the protocol means in conflict. Odd one out is the adjective. Likelihood is everyday; odds often sound like betting or stats.'],
    'Chances (often a ratio). Phrase: at odds (in conflict); against the odds. Everyday: chance. Mix-up: odd (strange / not even). Not a certainty.',
    ['chance']
  ),
  offset: L(
    'To offset is to counterbalance an effect: offset the cost, carbon offset. Cancel out and make up for are everyday. Set off is start a trip or a bomb — different. As a noun, an offset is the balancing item. Do not claim a biscuit tin offsets a rent rise.',
    ['A small bursary did not offset the rent rise beside campus.', 'Make up for is everyday; offset is often money, carbon, or a formal balance. Set off at dawn is leave. A token gift is not an offset.'],
    'Balance out; cancel an effect. Everyday: make up for. Noun: an offset (e.g. carbon). Mix-up: set off (depart / trigger). Not a token biscuit.',
    []
  ),
  offspring: L(
    'Offspring are a person’s or animal’s young (formal or scientific): the offspring of, leave offspring. Child and children are everyday; descendant is longer-term. The plural is usually offspring, not offsprings. Do not use it of a spin-off company unless you are being jokey.',
    ['The cohort study followed the offspring of night-shift staff for ten years.', 'Children is everyday; offspring is the biology/formal noun. Descendants can be generations later. Plural: offspring. A subsidiary is not offspring in a paper.'],
    'Children / young (formal or scientific). Everyday: children. Plural usually unchanged. Cousin: descendant (later generations). Not a company spin-off in serious prose.',
    ['children']
  ),
  omission: L(
    'An omission is something left out, or the leaving-out: an omission from the table, sins of omission. Gap is everyday; oversight (this batch) is often accidental. Omit (already in the dictionary) is the verb. Do not call a rejected, discussed finding an omission.',
    ['The omission of the failed arm was worse than a weak but honest result.', 'Omit is the verb. An oversight is usually accidental; an omission can be a choice. A gap may be missing data, not a cut sentence. Discussed-and-dropped is not an omission.'],
    'A left-out part / leaving it out. Verb: omit. Close: gap. Cousin: oversight (often accidental). A rejected, reported finding is not an omission.',
    []
  ),
  onset: L(
    'Onset is the beginning, especially of something unwelcome: the onset of winter, onset of symptoms. Start and beginning are everyday; outset (this batch) is the start of a project or period (from the outset). Do not write onset for the opening of a party.',
    ['The onset of the outage was 02:11, logged, not “sometime overnight”.', 'Outset is “from the start we agreed”; onset is when trouble or a condition begins. Beginning is everyday. A festival opening is not an onset.'],
    'The start, often of illness, weather, or trouble. Everyday: start. Contrast: outset (start of a venture: at/from the outset). Not a party opening.',
    ['start']
  ),
  operational: L(
    'Operational means working and ready, or about day-to-day running: fully operational, operational reasons. Working is everyday; operative can mean “in force” (a rule). Operation is surgery or a mission. Do not stamp operational on a logo launch with no staffed phone.',
    ['The helpline was not operational on the morning of the exam, which was the finding.', 'Working is everyday; operational is systems and readiness. Operational reasons can be a vague stall — demand the fact. An operation in hospital is surgery.'],
    'Up and running / about day-to-day ops. Everyday: working. Cousin: operative (in force). Noun: operation (surgery / mission). A logo is not readiness.',
    ['working']
  ),
  opt: L(
    'To opt is to choose: opt for the hall exam, opt to stay, opt out of the mailing. Choose is everyday; option is the noun (already related). Adopt is take up a policy — a lookalike. Do not opt a sandwich; you opt for it or opt to eat it.',
    ['Half the year opted for the take-home; the rest sat the invigilated paper.', 'Choose is everyday. Opt out is leave a default. Option is the noun. Adopt a policy is different. Grammar: opt for + noun; opt to + verb.'],
    'Choose (opt for / to / out). Everyday: choose. Noun: option. Mix-up: adopt (take up a policy). Not “opt a thing” without for/to.',
    ['choose']
  ),
  optimism: L(
    'Optimism is the habit of expecting good outcomes: cautious optimism, optimism about the result. Hope is everyday and can be thinner; optimistic (already in the dictionary) is the adjective. Pessimism is the opposite. Do not write optimism where the table already shows a fall.',
    ['Optimism in the press note died at the second failed inspection.', 'Hope can be a wish; optimism is an expectation of good. Optimistic is the adjective. Pessimism is the antonym. A falling chart is not “optimism”.'],
    'Expecting a good outcome. Adjective: optimistic. Everyday: hope (thinner). Opposite: pessimism. Do not contradict your own table.',
    ['hope']
  ),
  orientation: L(
    'Orientation is a starter briefing in a new place, or the direction something faces, or a person’s stance: induction/orientation week, a southern orientation, political orientation. Introduction is everyday for the briefing. Origin (related) is where something begins. Do not call a two-day methods course a mere orientation if it is the whole training.',
    ['Monday’s orientation led with the brand film and omitted the fire exits.', 'Induction is a close workplace twin. Facing south is physical orientation. Sexual orientation is a set phrase — keep it accurate and respectful. Origin is the source, not the briefing.'],
    'A starter briefing / a facing or stance. Workplace cousin: induction. Mix-up: origin (source). A full methods course is more than orientation.',
    []
  ),
  originate: L(
    'To originate is to begin or first appear somewhere, or to create: originate in, originate from, originate a scheme. Start and come from are everyday; origin is the noun. Original (already in the dictionary) is first or new. Do not originate a rumour in the minutes as if that were sourcing.',
    ['The rumour originated in a mislabelled column, which the log still showed.', 'Come from is everyday. Origin is the noun. Original work is not the same as “where the file originated”. Create is for people making something new.'],
    'Start / come from. Noun: origin. Everyday: start / come from. Adjective cousin: original. Minutes should source, not originate gossip.',
    ['start']
  ),
  orthodox: L(
    'Orthodox means following the usual accepted line: the orthodox view, orthodox method. Also Orthodox as in Orthodox Church / Orthodox Judaism (capital O). Conventional is a close cousin; unorthodox is the opposite. Paradox (this batch) is a seeming contradiction — a lookalike. Do not call a required ethics form unorthodox because it is dull.',
    ['The orthodox test was a t-test; skipping it still needed a written reason.', 'Conventional is everyday-academic. Unorthodox can be praise or a warning. Capital Orthodox for the religious sense. Paradox is a different word.'],
    'Conventional; following the accepted line. Opposite: unorthodox. Religious: Orthodox (capital). Mix-up: paradox. Dull required process ≠ unorthodox.',
    ['conventional']
  ),
  outrage: L(
    'Outrage is shocked anger, or an act that causes it: public outrage, an outrage. Also a verb (outrage the committee). Anger is everyday; fury is stronger. Outrageous is the adjective (shocking). Do not call a late bus an outrage unless harm or a real scandal is in play.',
    ['Outrage followed the leaked scheme; the correction itself was dull and proper.', 'Anger is everyday; outrage adds shock at a wrong. Outrageous claims are the adjective. As a verb: the delay outraged parents. A late tram is seldom the noun.'],
    'Shocked anger / a shocking act. Also a verb. Adjective: outrageous. Everyday: anger. Save it for a real wrong, not a late tram.',
    ['anger']
  ),
  outset: L(
    'Outset is the beginning of a venture or period: at the outset, from the outset. Start is everyday; onset (this batch) is usually the start of something unwelcome. Set out is begin a journey or explain. Do not write outset for a medical symptom.',
    ['At the outset they promised open data; the zip file never appeared.', 'From the outset = from the start. Onset of pain is medical/trouble. Set out the reasons is explain. Beginning is everyday.'],
    'The beginning (at/from the outset). Everyday: start. Contrast: onset (trouble/illness beginning). Mix-up: set out (leave / explain). Not a symptom.',
    ['start']
  ),
  outweigh: L(
    'To outweigh is to be more important or beneficial than something else: the benefits outweigh the costs, outweighed by the risk. Outdo is perform better; weigh is measure mass. Do not use it for two numbers until you have said which scale (money, harm, time).',
    ['The leak risk outweighed the convenience of one shared inbox.', 'Benefits outweigh costs is the set academic pairing. Outdo a rival is beat them. Weigh the sample is physical. Name the scale you are using.'],
    'Be more important than. Set pairing: benefits outweigh costs. Mix-ups: outdo (beat); weigh (mass). Say which scale (harm, money, time).',
    []
  ),
  overhaul: L(
    'To overhaul is to take a system apart in order to repair or thoroughly revise it: overhaul the timetable, an engine overhaul (noun). Repair is smaller; reform is policy. Haul is drag — a lookalike. Do not call a new logo an overhaul of teaching.',
    ['They overhauled the timetable after three labs clashed in a single week.', 'Repair a hinge; overhaul a whole system. Noun: an overhaul. Reform the statute is law. A rebrand is not an overhaul of the night shift.'],
    'Strip down and rebuild / thoroughly revise. Noun: an overhaul. Smaller: repair. Policy cousin: reform. Mix-up: haul. A logo is not enough.',
    ['revise']
  ),
  overlook: L(
    'To overlook is to fail to notice, or to have a view over, or to let a small fault pass: overlook a clause, a room overlooking the yard, overlook a first slip. Miss is everyday; look over is inspect (the opposite trap). Oversee (already in the dictionary) is supervise. Do not overlook a fire door as a “view”.',
    ['Do not overlook the appendix: the honest n is only there.', 'Miss a typo is everyday. Look over the script is inspect it. Oversee the lab is supervise. A window overlooking the car park is the view sense. Forgive a slip is the third sense.'],
    'Miss / look out over / let a small fault pass. Everyday: miss. Trap: look over (inspect). Contrast: oversee (supervise). Three senses — pick one.',
    ['miss']
  ),
  oversight: L(
    'Oversight is a failure to notice, or official supervision: an oversight in the form; regulatory oversight. Mistake is everyday for the first; supervision for the second. Overlook (this batch) is the verb of the “miss” sense. Do not hide a policy choice as “just an oversight”.',
    ['Leaving the date off the consent form was an oversight; deleting the arm was a choice.', 'Two opposite-feeling senses: a miss, and watching over. Supervise is everyday for the second. An oversight committee is the supervision sense. A cut is not an oversight if someone signed it.'],
    'A miss; also watching over a process. Everyday: mistake / supervision. Verb cousin: overlook. Do not dress a decision as a slip.',
    []
  ),
  overt: L(
    'Overt means done openly, not hidden: overt racism, overt lobbying. Open is everyday; covert (already in the dictionary) is the opposite. Overture is a musical opening — a lookalike. Do not call a confidential ethics file overt.',
    ['Overt lobbying in the corridor still belongs in the register.', 'Open is everyday; overt is the formal adjective of “not concealed”. Covert is hidden. An overture is music (or a diplomatic opening). Secret minutes are not overt.'],
    'Open; not secret. Everyday: open. Opposite: covert. Mix-up: overture (music). Confidential process ≠ overt.',
    ['open']
  ),
  overwhelm: L(
    'To overwhelm is to swamp someone so they cannot cope, or to defeat utterly: overwhelmed by email, an overwhelming majority. Overpower is physical force; swamp is everyday metaphor. Overwhelming is the adjective. Do not use it for a mildly busy Tuesday.',
    ['A 400-page dump the night before overwhelmed a three-person panel.', 'Swamp is the everyday metaphor. Overpower a lock is force. Overwhelming evidence is the adjective. A normal inbox is not overwhelmed; a flood is.'],
    'Swamp; be too much to handle. Adjective: overwhelming. Everyday: swamp. Physical cousin: overpower. Save it for a real flood, not a busy day.',
    []
  ),
  paradox: L(
    'A paradox is a seeming contradiction that may still be true: a paradox of, paradoxical. Contradiction (already in the dictionary) is a clash that is not “true in a twisty way”. Irony is a different tone. Orthodox (this batch) is conventional — a lookalike. Do not label a simple error a paradox.',
    ['The paradox was a packed lecture and an empty office hour in the same week.', 'Contradiction is “these two claims cannot both stand”. A paradox claims a twist that can still be real. Ironic is tone. Orthodox is a different word. A wrong date is an error.'],
    'A true-seeming contradiction. Adjective: paradoxical. Contrast: contradiction (cannot both be true). Mix-up: orthodox. Not a simple mistake.',
    []
  ),
  parallel: L(
    'Parallel means similar and happening alongside, or of lines never meeting: a parallel process, parallel lines, in parallel. Similar is everyday; analogue is a cousin. Paradox is not the same. Do not call an opposite outcome parallel.',
    ['A parallel complaint from the night cohort landed the same afternoon.', 'In parallel = at the same time, alongside. Similar is everyday. Parallel lines is geometry. An opposite finding is a contrast, not a parallel.'],
    'Alongside / similar; also never-meeting lines. Phrase: in parallel. Everyday: similar. Opposite outcome ≠ parallel.',
    ['similar']
  ),
  parameter: L(
    'A parameter is a bounding rule, or in statistics a value that defines a model: within the parameters, a parameter of the model. Limit and boundary are everyday; perimeter is the outer edge of a shape — the classic mix-up. Do not write parameter for a vague “thing we care about”.',
    ['Stay inside the ethical parameters; a clever workaround is still a breach.', 'Limit is everyday. A statistical parameter is not a sample statistic (that is an estimate). Perimeter is the fence round a field. “A key parameter of success” is often just waffle for factor.'],
    'A bounding rule (or a model value). Everyday: limit. Mix-up: perimeter (outer edge). Stats: parameter ≠ sample statistic. Not a woolly “factor”.',
    ['limit']
  ),
  paramount: L(
    'Paramount means more important than anything else: of paramount importance, safety is paramount. Supreme and chief are cousins; important is everyday. Amount is a lookalike. Do not stamp paramount on a branding preference.',
    ['Consent is paramount; a tidy colour palette is not.', 'Of paramount importance is the set phrase. Important is everyday. Paramount as a studio name is not the exam point. Branding is not paramount beside a fire door.'],
    'Of first importance. Set phrase: of paramount importance. Everyday: most important. Mix-up: amount. Not a logo choice.',
    []
  ),
  partial: L(
    'Partial means incomplete, or biased towards one side: a partial list, a partial judge, partial to dark chocolate (fond of). Complete is an opposite; biased is the fairness sense. Partly is the adverb of “not completely”. Do not call a full, signed award partial.',
    ['A partial refund did not restart the cancelled night clinic.', 'Incomplete is the first sense; unfairly one-sided is the second; fond of is the third (partial to). Partly finished is the adverb. Impartial is the fairness opposite. A complete transcript is not partial.'],
    'Incomplete; also biased / fond of (partial to). Adverb: partly. Fairness opposite: impartial. Three senses — pick one. Not a finished award.',
    ['incomplete']
  ),
  partisan: L(
    'Partisan means strongly, often unfairly, for one side: a partisan report, partisan politics. Also a noun (a resistance fighter). Biased is everyday; one-sided is close. Partial (this batch) can mean biased too, but partisan is political/team. Do not call a methods disagreement partisan unless a camp is in play.',
    ['A partisan press note named rivals and skipped the shared computational error.', 'Biased is everyday. A partisan (noun) in history is a guerrilla. Partial to chocolate is fondness, not politics. A stats dispute can be technical, not partisan.'],
    'One-sided; party-line. Everyday: biased. Noun: a partisan (fighter). Contrast: partial (incomplete / fond of). Technical disagreement ≠ partisan.',
    ['biased']
  ),
  peripheral: L(
    'Peripheral means not central, or at the edge: a peripheral issue, peripheral vision. Also a computer peripheral (noun: mouse, drive). Minor and edge are everyday. Peril is danger — a lookalike. Do not call a fire exit peripheral.',
    ['Lanyard colour is peripheral; the blocked fire door is not.', 'Minor is everyday. Peripheral vision is the edge of sight. A USB drive is a peripheral (noun). Peril is danger. Safety kit is never “peripheral” in a report.'],
    'On the edge; not central. Everyday: minor. Noun (IT): a peripheral. Mix-up: peril (danger). A fire door is not peripheral.',
    ['minor']
  ),
  perpetuate: L(
    'To perpetuate is to make a problem, myth, or situation continue: perpetuate a stereotype, perpetuate inequality. Continue is everyday; prolong is make something last longer (often a process). Perpetual is endless. Do not congratulate yourself for perpetuating a harm.',
    ['Recycling that line in the prospectus perpetuates the stereotype it claims to fight.', 'Continue is everyday and neutral; perpetuate often flags a harm or myth you should stop. Prolong a meeting is stretch it. Perpetual noise is endless. Stopping it is the usual academic move.'],
    'Keep (a harm or myth) going. Everyday: continue (neutral). Cousin: prolong (stretch out). Adjective: perpetual. Usually a criticism, not a goal.',
    []
  ),
  pertinent: L(
    'Pertinent means directly relevant to the matter in hand: a pertinent question, pertinent to the brief. Relevant is everyday; impertinent is rude — the cruel mix-up. Perturb is disturb. Do not call a long autobiography pertinent to a methods query.',
    ['A pertinent question named the missing night-shift n; a speech about “journey” did not.', 'Relevant is everyday. Impertinent is cheeky, not “not pertinent”. Perturb the panel is upset them. Stay on the brief: pertinent to + noun.'],
    'Relevant to this point. Everyday: relevant. Mix-up: impertinent (rude). Not your life story in a methods slot.',
    ['relevant']
  ),
  plunge: L(
    'To plunge is to drop or push fast downwards or into a worse state: prices plunged, plunge into debt, plunge into the sea. Drop and dive are everyday. Plunge as a noun is a sudden fall. Do not write plunge for a 0.2% trim.',
    ['Enrolment plunged after the night bus was cut, which belonged on slide one.', 'Drop is everyday; plunge is steep and fast. Dive is sport or a drop too. A plunge (noun) in funding is a fall. A tiny trim is a decrease, not a plunge.'],
    'Drop sharply / dive in. Everyday: drop. Noun: a plunge. Keep it for a steep fall, not a rounding error.',
    ['drop']
  ),
  precarious: L(
    'Precarious means not safe or certain; likely to collapse: precarious work, a precarious pile. Unsafe and shaky are everyday; unstable is close. Precious is valued — a lookalike. Do not call a tenured, funded chair precarious without evidence.',
    ['Funding was precarious: one late invoice and the night lab went dark.', 'Shaky is everyday. Precarious employment is a set academic phrase. Precious data are valued, not unstable. A well-funded post is not precarious by fashion.'],
    'Unstable; easily lost. Everyday: shaky / unsafe. Set phrase: precarious work. Mix-up: precious (valued). Needs evidence of instability.',
    ['unstable']
  ),
  precedent: L(
    'A precedent is an earlier case used as a rule later: set a precedent, without precedent, a legal precedent. Example is everyday and weaker; precede (already in the dictionary) is come before. President is a lookalike. Do not invent a precedent from one unofficial favour.',
    ['Waiving the fee once set a precedent the board could not fund a second time.', 'Precede is the verb “come before”. A president is a person. Example is weaker: a precedent is treated as binding or hard to refuse. One quiet favour is not yet a precedent until others can cite it.'],
    'An earlier case used as a rule. Verb cousin: precede (come before). Mix-up: president. Everyday: example (weaker). One unofficial favour ≠ a precedent.',
    []
  ),
  predecessor: L(
    'A predecessor is the person or thing that came before in a job or line: her predecessor, a predecessor model. Successor (already in the dictionary) is the one after. Ancestor is family/deeper past. Do not call a rival in another university a predecessor.',
    ['Her predecessor left a clean archive and an inbox full of overdue replies.', 'Successor is the next holder. Ancestor is bloodline or deep origins. Previous boss is everyday. A peer at another site is a counterpart, not a predecessor.'],
    'The one who came before. Opposite: successor. Everyday: previous holder. Contrast: ancestor (lineage). A rival elsewhere is not a predecessor.',
    []
  ),
  predicate: L(
    'To predicate something on X is to base it on X (formal): the plan is predicated on funding. In grammar, the predicate is the part of the clause that says something about the subject (noun; stress often /ˈpredɪkət/). Predict (already in the dictionary) is forecast — the classic mix-up. Do not predicate a national claim on one clinic.',
    ['The expansion was predicated on a grant that had already lapsed, which was the finding.', 'Base on is everyday. Predict tomorrow’s rain is forecast. Grammar: subject + predicate. Predicament (already in the dictionary) is a mess. Stress the verb: PRED-i-cate.'],
    'Base on (predicate on). Grammar noun: the predicate (verb-part of a clause). Mix-up: predict (forecast); predicament (a mess). Everyday: base on.',
    []
  ),
  preliminary: L(
    'Preliminary means coming before the main or final thing: preliminary results, a preliminary hearing. First and initial are everyday; final is an opposite. Prelude is artistic/opening. Do not treat preliminary marks as the transcript.',
    ['Preliminary marks are a warning, not the board’s transcript.', 'Initial is everyday. A preliminary finding must be labelled so it is not cited as final. Prelude to a concert is art. The final award is the opposite pole.'],
    'Before the main / not yet final. Everyday: initial. Opposite: final. Label them so nobody cites them as the award.',
    ['initial']
  ),
  premise: L(
    'A premise is a starting claim you argue from: the premise of the paper, on the premise that. Premises (plural) are a building and land. Promise is a lookalike. Assumption is a cousin (can be unexamined). Do not hide a wish as a premise.',
    ['The premise that everyone had a laptop failed the access audit in week one.', 'Assumption can be untested; a premise is offered as a base for argument. Premises (building) take a plural verb. Promise is a different word. Check the premise against the audit.'],
    'A starting claim. Plural mix-up: premises (a building). Close: assumption. Mix-up: promise. A wish is not a premise until it is true.',
    []
  ),
  prestigious: L(
    'Prestigious means admired for high status: a prestigious journal, prestigious award. Prestige is the noun. Famous is everyday and can be infamous too; renowned (already in the dictionary) is high reputation. Do not call a paywalled logo prestigious if the methods are empty.',
    ['A prestigious badge on the cover does not replace a methods paragraph.', 'Prestige is the noun. Famous can be merely well-known. Renowned is a close cousin. Status without substance is the usual C1 warning in academic prose.'],
    'High-status; admired. Noun: prestige. Everyday: famous (wider). Close: renowned. A logo without methods is not the point.',
    ['renowned']
  ),
  presumably: L(
    'Presumably means “I take it that / it is likely that”: presumably the file is still in drafts. Probably is everyday and a bit stronger as a claim; I assume is plainer. Presume is the verb (this family); assume is everyday. Do not use presumably to smuggle a guess into the results table.',
    ['The CSV is missing; presumably it never left the draft folder, which still needs a check.', 'Probably is everyday. Presume (verb) can also mean take the liberty. Assume is the everyday verb. Results report measurements; presumably belongs in discussion or email, labelled as inference.'],
    'I assume; it is likely that. Everyday: probably / I assume. Verb: presume. Keep guesses out of the results table.',
    ['probably']
  ),
  prevail: L(
    'To prevail is to win out or be the most common after a struggle: reason prevailed, the prevailing view, prevail on someone (persuade, formal). Win and be common are everyday. Prevalent (already in the dictionary) is widespread — a cousin. Do not write prevail for a 51–49 vote as if it were destiny.',
    ['Caution prevailed, and they held the press note until the inspection closed.', 'Win is everyday. The prevailing wind/view is the dominant one. Prevail on the dean is persuade. Prevalent is “common in a place/time”. A coin-flip vote is a win, not a mythic prevailing.'],
    'Win out / prove more powerful. Phrase: prevailing view; prevail on (persuade). Everyday: win. Cousin: prevalent (widespread). Not destiny-talk for 51%.',
    ['win']
  ),
  principal: L(
    'Principal as an adjective means main: the principal reason, principal risk. As a noun, the head of a school or college (British). Principle (already in the dictionary) is a moral or scientific rule — the classic spelling trap; both sound /ˈprɪnsəpl/. Do not write principal for a moral rule.',
    ['The principal risk was the unstaffed night shift, not the choice of font.', 'Principle is a rule (a matter of principle). Principal is main, or the college head. US schools also use principal for the head teacher. Spell-check will not save you: say the meaning aloud.'],
    'Main (adj.); school/college head (noun). Mix-up: principle (a rule) — same pronunciation. Everyday: main. Not a moral “principal”.',
    ['main']
  ),
  proceed: L(
    'To proceed is to continue, often after a pause or permission: proceed with recruitment, proceed to the next item. Go on and continue are everyday; precede (already in the dictionary) is come before — a lookalike. Proceeds are the money from a sale. Do not proceed without the signature the protocol names.',
    ['Do not proceed to recruitment until ethics has signed the last page.', 'Continue is everyday. Precede is “come before”. The proceeds of the raffle are the takings. Procedure (already in the dictionary) is the set of steps. Process is the unfolding. Proceed = go ahead.'],
    'Go ahead; continue. Everyday: continue. Mix-up: precede (come before). Noun trap: proceeds (money). Related: procedure / process. Wait for the named sign-off.',
    ['continue']
  ),
  proficient: L(
    'Proficient means able to do something well: proficient in Spanish, proficient at coding. Skilled and good at are everyday; proficiency (already in the dictionary) is the noun. Professional is paid/occupational — a mix-up. Do not claim proficient after one workshop.',
    ['Proficient in R still needs a documented workflow another person can run.', 'Skilled is everyday. Proficiency is the noun. Professional is about occupation or paid standards. Fluent is language-specific. One workshop is familiar, not proficient.'],
    'Skilled; able to do it well (in / at). Noun: proficiency. Everyday: skilled / good at. Mix-up: professional (occupation). One workshop ≠ proficient.',
    ['skilled']
  ),
  prone: L(
    'Prone means likely to suffer or do something, usually unwelcome: prone to error, accident-prone. Also lying face down (prone position). Likely is everyday; susceptible is a close cousin. Prawn is a lookalike in speech if you are tired. Do not call a careful process “prone” without a pattern.',
    ['The old portal was prone to timeouts every Monday at nine.', 'Likely to is everyday. Prone to + noun/gerund. Supine is face up; prone is face down in first aid. A one-off crash is not a prone system until it repeats.'],
    'Liable to (prone to); also face-down. Everyday: likely to. First-aid contrast: supine (face up). Needs a pattern, not one incident.',
    ['likely']
  ),
  prospective: L(
    'Prospective means expected in the future, or of a person hoping to become one: prospective students, prospective study (looking forward). Future is everyday; perspective (already in the dictionary) is a viewpoint — the classic mix-up. Retrospective looks back. Do not file last year’s PDF as the prospective timetable.',
    ['Prospective students need this year’s timetable, not last year’s PDF.', 'Future is everyday. A prospective cohort is recruited and followed forward. Perspective is a viewpoint. Retrospective looks back. Prospect (noun) is a possibility or a view.'],
    'Future / would-be. Everyday: future. Mix-up: perspective (viewpoint). Contrast: retrospective (looking back). Last year’s file is not prospective.',
    ['future']
  ),
  provision: L(
    'Provision is the act of supplying, or a clause that provides for something: the provision of care, a provision in the contract; provisions (often plural) can be food supplies. Supply is everyday; provide is the verb. Vision is a lookalike. Do not call a slogan a provision.',
    ['There was no provision for a spare invigilator on storm days, which was the finding.', 'Provide is the verb. A contractual provision is a clause. Food provisions are supplies. Supply is everyday. A mission statement is not a provision until it funds a person or a thing.'],
    'A supply / a clause that provides for something. Verb: provide. Plural: food provisions; also contract clauses. Everyday: supply. A slogan is not a provision.',
    ['supply']
  ),
  provoke: L(
    'To provoke is to cause a strong reaction, often anger: provoke a protest, provoke debate. Cause is everyday and wider; stir up is informal. Provocative is the adjective. Do not boast of provoking a junior in a meeting.',
    ['A one-line fee email provoked a petition before lunch.', 'Cause is everyday. Provoke often implies irritation or a strong public reaction. A provocative claim is the adjective. Invoke a rule is call it into use — a lookalike. Do not bait people and call it “debate”.'],
    'Stir up (anger or a reaction). Everyday: cause. Adjective: provocative. Mix-up: invoke (call on a rule). Not punching down in a briefing.',
    ['cause']
  ),
  proximity: L(
    'Proximity is nearness in space, time, or relation (formal): in proximity to, close proximity (common but a bit redundant). Nearness and closeness are everyday. Approximate is “roughly” — a lookalike. Do not write proximity for a spiritual “connection”.',
    ['Proximity to the station, not the slogan, filled the evening class.', 'Nearness is everyday. In close proximity is common and slightly padded; next to is cleaner. Approximate figures are rough counts. A “proximity of ideas” needs a real link, not a vibe.'],
    'Nearness (formal). Everyday: nearness / closeness. Phrase: in proximity to. Mix-up: approximate (rough). Not a vague spiritual link.',
    ['nearness']
  ),
}
