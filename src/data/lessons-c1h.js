const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1H = {
  rationale: L(
    'A rationale is the set of reasons behind a decision or method: the rationale for the sample, a clear rationale. Reason is everyday and can be one motive; a rationale is the worked-out case. Rational is the adjective (reasonable); ration is a fixed allowance — different word. Do not write rationale for a feeling with no argument attached.',
    ['The ethics board asked for the rationale, not another adjective of “importance”.', 'A budget cut still needs a rationale if the minutes are going to survive an audit.'],
    'the rationale for/behind + decision. Adjective: rational. Mix-up: ration (an allowance). Not a vague hunch.',
    ['reasoning']
  ),
  recipient: L(
    'A recipient receives something: a grant recipient, the recipient of an email. Receiver is everyday and also a phone or radio part; addressee is the person a letter is sent to. Receipt is the slip of paper; recipe is cooking. Do not call the sender the recipient.',
    ['Each recipient had to countersign, which is how they knew the list was complete.', 'A blind-copy recipient still received the file; they were not named in the to-line.'],
    'The one who receives it. Mix-up: receipt (proof of payment); recipe (cooking). Everyday: receiver. Opposite role: sender.',
    ['receiver']
  ),
  reciprocal: L(
    'Reciprocal means both sides give and receive equally: reciprocal trust, a reciprocal arrangement. Mutual is a close cousin; two-way is everyday. Reciprocate is the verb (reciprocate a favour). Reciprocity is the noun. Do not call a one-sided discount reciprocal.',
    ['Mentoring only works if the curiosity is reciprocal, not a lecture in disguise.', 'A reciprocal visa deal cuts fees both ways; a unilateral cut is not reciprocal.'],
    'Both ways; mutual. Verb: reciprocate. Noun: reciprocity. Everyday: two-way. Not a one-sided gift.',
    ['mutual']
  ),
  redundant: L(
    'Redundant means no longer needed: a redundant paragraph. In British English, to be made redundant is to lose a job because the post has gone, not because you were sacked for fault. Redundancy is the noun (already in the dictionary). Repeat is everyday for saying it again; superfluous (C2) is extra in a useless way. Do not write redundant for “very important”.',
    ['Cut the redundant example; the first one already proved the rule.', 'She was made redundant when the night desk closed, which is the British job sense.'],
    'Unnecessary; UK jobs: made redundant (post gone). Noun: redundancy. Contrast: sacked (fault). Not “vital”.',
    ['unnecessary']
  ),
  referendum: L(
    'A referendum is a public vote on one political question: call a referendum, a referendum on the charge. Election chooses people; a plebiscite is a close cousin, often more formal or historical. Referenda and referendums are both used as plurals in British news English. Do not call a staff ballot a referendum unless the whole electorate is voting.',
    ['The referendum question had to fit on one line, which is harder than a manifesto.', 'Turnout, not the slogan, decided the referendum.'],
    'A public yes/no (or options) vote on one issue. People: election. Close: plebiscite. Plural: referendums/referenda.',
    []
  ),
  refute: L(
    'To refute is to prove a claim wrong: refute an allegation with data. Deny is to say it is not true, without proof; rebut is to argue against, often in a formal reply. Refutation is the noun. Journalists sometimes use refute as a stylish deny — examiners still prefer the “prove wrong” sense. Do not write refute for a shrug.',
    ['A timestamped log refuted the claim that the file was never sent.', 'Denying a rumour is not refuting it; you still need the counter-evidence.'],
    'Prove wrong (stronger than deny). Close: rebut (argue back). Noun: refutation. Casual press sometimes weakens it to “deny”.',
    []
  ),
  regime: L(
    'A regime is a system of government, often with a critical tone, or a strict system of rules: an exercise regime, a visa regime. Government is the neutral political word; regimen is the older spelling for a diet or training plan — still seen in medicine. Regime change is politics, not a new timetable. Do not call a friendly sports club a regime.',
    ['The new marking regime banned extra-time notes unless a form was filed.', 'Regime in a news headline usually means the government you disapprove of; in sport it still means a strict plan.'],
    'A system of rule, or a strict routine. Neutral politics: government. Diet/training cousin: regimen. Not a casual club.',
    []
  ),
  reimburse: L(
    'To reimburse is to pay back money spent on someone else’s behalf: reimburse travel, reimbursed for the fare. Refund is money back to a customer; repay is settle a debt. Reimbursement is the noun. You reimburse a person (or their account), not a feeling. Do not use it for a gift.',
    ['Keep the PDFs if you want the department to reimburse the rail fare.', 'A grant can reimburse receipts; it does not “reimburse” lost time.'],
    'Pay someone back for outlay. Noun: reimbursement. Customer money-back: refund. Loan: repay. Not a present.',
    ['repay']
  ),
  reinstate: L(
    'To reinstate is to put someone or something back in a former post or state: reinstate a worker, reinstate a rule. Restore is a close cousin (buildings, confidence); rehire is everyday for jobs. Reinstate implies it existed before and was taken away. Do not reinstate a brand-new policy that never stood.',
    ['The inquiry reinstated the editor and rewrote the social-media clause.', 'A cancelled module was reinstated after the petition, which is restore-to-the-list, not invent.'],
    'Put back in a former role/state. Close: restore. Jobs everyday: rehire. It must have existed before.',
    ['restore']
  ),
  reiterate: L(
    'To reiterate is to say something again for emphasis: reiterate the deadline, reiterate that. Repeat is everyday; restate is a close cousin. Iterate in computing means loop; reiterate in essays is not a fancy synonym of mention once. Do not reiterate a secret you have not said yet.',
    ['The invigilator reiterated the no-phone rule after the first buzz.', 'Reiterating a weak claim does not make it data; it only makes it louder.'],
    'Say again, on purpose. Everyday: repeat. Computing cousin: iterate (loop). Not a first mention.',
    ['repeat']
  ),
  relentless: L(
    'Relentless means it does not ease off: relentless rain, relentless questioning. Persistent (already in the dictionary) can be admirable; relentless often stresses no mercy or no pause. Relent is the verb (the rain relented). Constant is everyday. Do not call a single loud hour relentless.',
    ['Relentless drip from the roof wrecked the archive boxes, not one storm.', 'A relentless inbox is volume plus no let-up; a busy Tuesday is not the word.'],
    'Does not ease off. Verb: relent. Close: persistent (can be praise). Everyday: constant. Not a brief burst.',
    ['unceasing']
  ),
  renowned: L(
    'Renowned means famous and respected for a quality: renowned for patience, a renowned clinic. Famous is everyday and can be empty celebrity; well known is weaker. Renown is the rare noun. Do not write renowned for a local café nobody outside the street has heard of unless you are being wry.',
    ['The lab is renowned for dull, reproducible methods, which is the point.', 'Renowned as a speaker is reputation; notorious would be fame for the wrong reason.'],
    'Famous and respected for + quality. Everyday: famous / well known. Contrast: notorious (bad fame). Noun: renown.',
    ['famous']
  ),
  repertoire: L(
    'A repertoire is the set of works or skills you can actually perform: a pianist’s repertoire, a repertoire of excuses. Collection is everyday and can sit on a shelf unused; repertoire implies ready to use. Repertory theatre is a related company sense. Do not call a single party piece a repertoire.',
    ['Her teaching repertoire included three ways to start a paragraph, not fifty slogans.', 'A choir’s repertoire is what it can sing next week, not the CDs in the cupboard.'],
    'The set you can perform/use. Everyday: range / collection (weaker). Theatre: repertory. Not one item.',
    ['range']
  ),
  resemblance: L(
    'Resemblance is likeness: a close resemblance, any resemblance is coincidental. Resemble is the verb. Similarity is a close cousin; look like is everyday. Resentment is bitter anger — extra n, different word. Do not write resemblance for a legal copy (that is replica or plagiarism).',
    ['The resemblance to last year’s paper was the shared dataset, not copied prose.', 'Family resemblance is a likeness; a carbon copy is a different accusation.'],
    'A likeness. Verb: resemble. Everyday: look like. Mix-up: resentment (bitterness). Not “identical stolen text”.',
    ['likeness']
  ),
  resentment: L(
    'Resentment is bitter anger at unfair treatment: breed resentment, resentment towards. Resent is the verb. Anger is everyday and can be brief; resentment lingers. Resemblance is likeness — mix-up above. Do not use resentment for mild annoyance at a late bus.',
    ['Unequal marking windows bred resentment between the two sites.', 'Resentment sat in the corridor talk; the minutes still said “content”.',],
    'Lingering bitterness at unfairness. Verb: resent. Everyday brief: anger / annoyance. Mix-up: resemblance.',
    ['bitterness']
  ),
  resilient: L(
    'Resilient means able to recover after a shock: a resilient system, resilient communities. Tough is everyday; robust (also in this batch) is strong against attack, not necessarily quick to bounce back. Resilience is the noun. Do not use resilient as a polite way to tell understaffed people to cope without resources.',
    ['A resilient timetable had a spare room; a “resilient workforce” slide with no cover staff is rhetoric.', 'Crops can be resilient to drought; that is biology, not a personality slogan.'],
    'Bounces back. Noun: resilience. Close: robust (hard to damage). Everyday: tough. Not a substitute for resources.',
    ['tough']
  ),
  respective: L(
    'Respective means each one’s own, after a list: their respective offices, in their respective fields. Respectful is polite; respectable is socially approved — extra syllables, different words. Respectively matches list A to list B in order (red and blue respectively). Do not write respective for “very respectful”.',
    ['The two authors listed their respective grants, which stopped a messy joint thank-you.', 'Smith and Jones scored 12 and 9 respectively, which is the adverb of matching order.'],
    'Each one’s own (after a pair/list). Mix-up: respectful (polite); respectable (decent). Adverb: respectively (in that order).',
    []
  ),
  restrain: L(
    'To restrain is to hold back a person, feeling, or action: restrain a laugh, restrained by the rules. Restrict (already in the dictionary) is limit what is allowed; constraint is the limiting factor. Restraint is the noun (show restraint). Strain is tension — different word. Do not restrain a budget in this sense; that is cut or freeze.',
    ['Marshals restrained the crowd at the gate, which is the physical sense.', 'She restrained the sarcastic PS; the report stayed on the figures.'],
    'Hold back. Noun: restraint. Cousin: restrict (limit by rule). Mix-up: strain (tension). Money: cut/freeze, not restrain.',
    ['hold back']
  ),
  retaliation: L(
    'Retaliation is hitting back after harm: in retaliation for, fear of retaliation. Retaliate is the verb. Revenge is everyday and more personal; reprisal is a close formal cousin. Defence is not the same as hitting back. Do not call a first strike retaliation.',
    ['The surcharge was read as retaliation for the leaked memo, whether or not that was the motive.', 'Whistle-blowers need a rule against retaliation, not a poster about “openness”.'],
    'Hitting back after harm. Verb: retaliate. Everyday: revenge. Formal cousin: reprisal. Not the first blow.',
    ['reprisal']
  ),
  retrieve: L(
    'To retrieve is to get something back, or to fetch stored information: retrieve a file, retrieve a bag. Recover is a close cousin (also “get well”); get back is everyday. Retrieval is the noun (information retrieval). Retriever is a dog. Do not retrieve a new idea you never stored.',
    ['IT could retrieve the draft from the backup, which is why version names matter.', 'A lost scarf can be retrieved from lost property; a forgotten argument cannot.'],
    'Get back / fetch stored data. Noun: retrieval. Close: recover. Everyday: get back. Mix-up: retriever (dog).',
    ['recover']
  ),
  retrospective: L(
    'Retrospective looks back, or applies a rule to the past: a retrospective review, retrospective legislation. Retroactive is a close legal cousin for laws. A retrospective as a noun is an exhibition of past work. Prospective looks forward. Do not call a plan for next year retrospective.',
    ['A retrospective audit found the same missed zero in three years of sheets.', 'Art students visited a Picasso retrospective, which is the exhibition sense.'],
    'Looking back; of laws, applying to the past. Close: retroactive. Forward: prospective. Noun: an art retrospective.',
    []
  ),
  revenue: L(
    'Revenue is income, especially official or business: tax revenue, ticket revenue. Income is everyday; turnover is sales before costs; profit is what remains. Revenues as a plural is common in finance. Do not call a birthday gift revenue.',
    ['Course revenue rose; costs rose faster, so the surplus did not.', 'Local-tax revenue is not the same as a one-off grant.'],
    'Income (state/firm). Everyday: income. Sales: turnover. After costs: profit. Not a present.',
    ['income']
  ),
  revival: L(
    'A revival is a return to activity or popularity: a revival of vinyl, economic revival. Revive is the verb; survival is staying alive — different. Renaissance is a grander historical cousin. Do not call a first launch a revival.',
    ['The street’s café revival lasted two summers and one rent rise.', 'A medical team revived the patient; a fashion revival is the cultural sense.'],
    'A coming back to life/fashion. Verb: revive. Mix-up: survival (staying alive). First-time launch: not a revival.',
    []
  ),
  rhetoric: L(
    'Rhetoric is the craft of persuasion, or (often dismissive) impressive empty language: campaign rhetoric, a course in rhetoric. Rhetorical questions are asked for effect, not information. Oratory is speech-making; spin is everyday political distrust. Do not call a data table rhetoric.',
    ['The rhetoric of “choice” sat beside a map with one remaining clinic.', 'Rhetorical skill can still tell the truth; empty rhetoric is the insult sense.'],
    'Persuasive craft; also empty impressive talk. rhetorical question. Everyday distrust: spin. Not a spreadsheet.',
    []
  ),
  ridicule: L(
    'To ridicule is to make someone or something look stupid: ridicule an idea, an object of ridicule. Mock and laugh at are everyday; satire is a crafted public form. Ridiculous is the adjective (absurd). Do not ridicule a factual correction in a methods section.',
    ['The sketch ridiculed the slogan, not the patients in the waiting room.', 'Fear of ridicule keeps bad slides alive; a closed review is kinder and sharper.'],
    'Mock; make it look silly. Everyday: laugh at. Adjective: ridiculous. Crafted public cousin: satire. Noun: an object of ridicule.',
    ['mock']
  ),
  rigorous: L(
    'Rigorous means extremely thorough or strict: rigorous marking, a rigorous test. Strict is everyday; rigid is stiff and unable to adapt — a common mix-up. Rigour (US rigor) is the noun. Do not call a nasty tone rigorous if the method is sloppy.',
    ['Rigorous sampling beat a glamorous chart with twelve respondents.', 'A rigid rule never bends; a rigorous one is demanding but can still be fair.'],
    'Thorough and strict. Noun: rigour (British). Mix-up: rigid (inflexible). Everyday: strict. Not “rude”.',
    ['thorough']
  ),
  rivalry: L(
    'Rivalry is long-running competition: sibling rivalry, rivalry between labs. Rival is the person or the verb. Competition is everyday and can be a one-off contest. Jealousy is about fear of loss. Do not call a friendly kickabout a rivalry unless it has history.',
    ['The rivalry produced better papers and worse corridor manners.', 'A one-day contest is competition; rivalry is the longer weather.'],
    'Long-running competition. Person/verb: rival. Everyday: competition. Feeling cousin: jealousy. Not a single match without history.',
    ['competition']
  ),
  robust: L(
    'Robust means strong and hard to damage: a robust case, robust health. Of results, a robust finding still stands if you tweak the method. Sturdy is everyday for objects; resilient (this batch) stresses bouncing back. Do not call a fragile argument robust because the font is bold.',
    ['Drop one outlier and see whether the conclusion is still robust.', 'A robust laptop survived the field trip; a robust claim survives a rival spreadsheet.'],
    'Strong; of findings, still true after a tweak. Everyday objects: sturdy. Cousin: resilient (recovers). Not “loud”.',
    ['strong']
  ),
  sabotage: L(
    'To sabotage is to wreck or block on purpose: sabotage a deal, an act of sabotage (noun too). Undermine is quieter and slower; vandalise is damage to property. Saboteur is the person. Do not call an honest mistake sabotage.',
    ['Hiding the only dongle sabotaged the presentation without a smashed window.', 'Wartime sabotage is the original sense; office sabotage is still intent, not a typo.'],
    'Deliberately wreck/block. Noun same spelling. Person: saboteur. Quiet cousin: undermine. Accident: not sabotage.',
    []
  ),
  sanction: L(
    'Sanction is a famous double word: official permission (without official sanction) and a penalty (sanctions against a state, impose sanctions). Context has to show which. Permission and penalty are the everyday poles. Do not write one sentence that could mean both.',
    ['The trip went ahead without the dean’s sanction, which here is permission.', 'Trade sanctions followed the vote, which here is punishment, not a blessing.'],
    'Permission or a penalty — flag the sense. impose/lift sanctions (penalty). official sanction (permission). Never leave it ambiguous.',
    []
  ),
  scarce: L(
    'Scarce means not enough, hard to find: scarce resources, jobs were scarce. Rare is uncommon even when not needed; scarce is about shortage relative to demand. Scarcity is the noun. Barely and scarcely are adverbs (“scarcely had we sat”). Do not call a unique painting scarce when you mean rare.',
    ['Quiet rooms are scarce in week 12; they are not rare like a comet.', 'A scarce skill still has a market; a rare stamp may have no classroom use.'],
    'In short supply (need vs stock). Noun: scarcity. Contrast: rare (uncommon). Adverb cousin: scarcely (hardly).',
    ['short']
  ),
  sceptical: L(
    'Sceptical (US skeptical) means not easily convinced: sceptical of the claim, a sceptical reader. Cynical assumes bad motives; doubtful is everyday. A sceptic is the person; scepticism is the noun. British academic spelling keeps the c. Do not call someone sceptical for asking one extra date.',
    ['She was sceptical of the app until the trial had a control group.', 'Cynical staff assumed a trick; sceptical staff asked for the annex.'],
    'Doubtful; wants evidence. British: sceptical / sceptic / scepticism. US: sk-. Contrast: cynical (assumes bad faith).',
    ['doubtful']
  ),
  scrutinise: L(
    'To scrutinise (US scrutinize) is to examine in detail: scrutinise the accounts. Scrutiny is the noun (already in the dictionary). Scan can be quick; inspect is a close cousin. British -ise matches the rest of this dictionary. Do not scrutinise a sunset in a poem unless you mean a very close look.',
    ['Examiners scrutinised every borderline script, which is why the night ran long.', 'Press scrutiny is the noun; to scrutinise is the verb of that look.'],
    'Examine closely (British -ise). Noun: scrutiny. Close: inspect. Quick look: scan. US: scrutinize.',
    ['inspect']
  ),
  secular: L(
    'Secular means not religious: a secular state, secular music. Civil can mean non-military; lay means not clergy in a church setting. Sectarian is about hostile religious groups — a nasty mix-up. Do not call a quiet person secular.',
    ['A secular timetable still leaves room for a faith society after hours.', 'Secular courts are not anti-religious by definition; they are not church courts.'],
    'Not religious / of the civil sphere. Contrast: religious; sectarian (hostile group identity). Church vs lay is a related pair.',
    []
  ),
  selective: L(
    'Selective means choosing some and not others: a selective quotation, a selective school. Select is the verb; selection is the noun. Partial can mean biased or incomplete; choosy is everyday and personal. Do not call a full census selective.',
    ['A selective extract cut the caveat and kept the slogan.', 'Selective memory is psychology; a selective school is an admissions policy.'],
    'Choosing some, not all. Verb: select. Close: partial (biased/incomplete). Everyday: choosy. Not a complete set.',
    []
  ),
  sentiment: L(
    'Sentiment is a feeling or a public mood: public sentiment, the sentiment of the room. Opinion is more thought-out; feeling is everyday. Sentimentality is cheap, excessive emotion — a useful contrast. A market sentiment is finance jargon for mood. Do not call a regression table a sentiment.',
    ['Public sentiment shifted when the receipts went online.', 'Keep sentiment out of the methods; put it in a quoted interview if you must.'],
    'A feeling / public mood. Contrast: sentimentality (cheap emotion). Everyday: feeling. Thought-out cousin: opinion.',
    ['feeling']
  ),
  sequential: L(
    'Sequential means in a fixed order, one after another: sequential tasks, sequential numbering. Consecutive is next to each other in time or a list; successive is a close cousin. Simultaneous (this batch, adverb simultaneously) is at the same time — opposite timing. Do not call a jumble sequential.',
    ['The lab steps are sequential; reversing two of them spoils the sample.', 'Consecutive Sundays are a diary fact; sequential chapters are an order you must follow.'],
    'In a set order. Close: consecutive / successive. Opposite timing: simultaneous. Noun: sequence.',
    []
  ),
  severity: L(
    'Severity is how serious or harsh something is: the severity of the injury, severity of the penalty. Severe is the adjective; seriousness is everyday. Gravity can mean seriousness in formal prose. Do not use severity for a mild delay.',
    ['The severity of the flooding, not the headline count of “incidents”, drove the closure.', 'A severe cold is illness; severity of a sentence is legal harshness.'],
    'How serious/harsh it is. Adjective: severe. Everyday: seriousness. Formal cousin: gravity. Not a slight hitch.',
    ['seriousness']
  ),
  shrewd: L(
    'Shrewd means sharply practical in judgement: a shrewd question, shrewd with money. Clever can be showy; cunning hints at dishonesty; astute is a close formal cousin. Shrew is an old insult — ignore it in modern essays. Do not call a lucky guess shrewd.',
    ['A shrewd chair put the budget last, when people still had the facts.', 'Shrewd is praise for judgement; sly is a darker cousin.'],
    'Sharply practical judgement. Close: astute. Everyday: clever (wider). Darker: cunning / sly. Not luck.',
    ['astute']
  ),
  simulate: L(
    'To simulate is to imitate real conditions: simulate a fire drill, a flight simulator. Stimulate (this batch) is encourage activity — a classic mix-up. Pretend is everyday and often playful; model can be the academic cousin. Dissimulate is hide your feelings (C2-ish). Do not simulate a genuine signature (that is forge).',
    ['The software simulates queueing at the desk, not the smell of the hall.', 'Do not write stimulate when you mean simulate: one wakes something up; the other copies conditions.'],
    'Imitate real conditions. Mix-up: stimulate (encourage). Everyday: pretend. Crime: forge a signature, not simulate.',
    ['imitate']
  ),
  simultaneously: L(
    'Simultaneously means at the same moment: published simultaneously, happen simultaneously. Simultaneous is the adjective. At the same time is everyday; concurrent is a close formal cousin. Sequential (this batch) is one after another. Do not use it for “in the same year” if the days differ and the point is exact timing.',
    ['The embargo broke when two sites posted simultaneously.', 'Simultaneous interpretation is the adjective; simultaneously is how the two booths work.'],
    'At the same moment. Adjective: simultaneous. Everyday: at the same time. Contrast: sequential. Formal cousin: concurrent.',
    []
  ),
  solidarity: L(
    'Solidarity is standing together, especially in difficulty: show solidarity, solidarity with strikers. Unity is a close cousin; support is everyday and can be one-way. Solitary is alone — a lookalike. Do not call a like on social media solidarity unless something real was shared or risked.',
    ['Covering the night shift together was solidarity; a logo change was not.', 'Solidarity with is the usual pattern; unity is the looser everyday cousin.'],
    'Mutual support in a group, especially under pressure. Pattern: solidarity with. Close: unity. Mix-up: solitary (alone).',
    ['unity']
  ),
  sophisticated: L(
    'Sophisticated means complex and advanced, or socially polished: a sophisticated model, a sophisticated audience. Complex is the plain cousin; fancy is everyday and can be empty. Sophistry is dishonest clever argument — related root, bad sense. Do not call a glittery slide sophisticated if the method is crude.',
    ['The dashboard looked sophisticated; the underlying join was still a spreadsheet.', 'A sophisticated palate is culture; a sophisticated algorithm should still be explainable.'],
    'Advanced / socially polished. Plain: complex. Empty everyday: fancy. Bad cousin: sophistry (clever but dishonest argument).',
    ['complex']
  ),
  sovereignty: L(
    'Sovereignty is a state’s power to govern itself: national sovereignty, pooled sovereignty. Independence is everyday; autonomy (already in the dictionary) can be an institution’s self-rule. Sovereign is the adjective or a monarch. Do not use sovereignty for a teenager’s bedroom rules.',
    ['The treaty was sold as pooled sovereignty, which still needs a plain gloss in an essay.', 'A sovereign state claims sovereignty; a campus’s autonomy is a smaller, different scale.'],
    'A state’s right to rule itself. Adjective/monarch: sovereign. Everyday: independence. Institution cousin: autonomy. Not household rules.',
    []
  ),
  speculate: L(
    'To speculate is to guess without firm evidence, or to trade hoping for profit: speculate about motive, speculate on shares. Guess is everyday; hypothesise is more scientific. Speculation is the noun (often dismissive). Speculative is the adjective. Do not put speculation in the results section as if it were a finding.',
    ['We can speculate in the discussion; the table only shows counts.', 'Property speculation is the money sense, not a hunch about a colleague.'],
    'Guess without proof; also gamble on a market. Noun: speculation. Science cousin: hypothesise. Everyday: guess. Keep it out of “results”.',
    ['guess']
  ),
  spectrum: L(
    'A spectrum is a range of related qualities or colours: a spectrum of opinion, the visible spectrum. Range is everyday; scale can be a measuring cousin. Spectre (US specter) is a ghost — different spelling and meaning. Do not write spectrum for a single category.',
    ['Views on the fee sat across a spectrum, not in two cartoon camps.', 'A light spectrum is physics; a political spectrum is the metaphor examiners expect you to control.'],
    'A range (opinions, colours, conditions). Everyday: range. Mix-up: spectre (ghost). Not one box.',
    ['range']
  ),
  stereotype: L(
    'A stereotype is a fixed, oversimple label for a type: a stereotype of students, challenge a stereotype. Stereotypical is the adjective. Cliché is an overused phrase; archetype is a deeper original pattern. Do not treat a stereotype as evidence.',
    ['The night-class numbers broke the stereotype of the “lazy undergraduate”.', 'A cliché is tired wording; a stereotype is a tired idea about people.'],
    'A lazy, fixed label for a group. Adjective: stereotypical. Phrase cousin: cliché. Deeper pattern: archetype. Not data.',
    []
  ),
  stimulate: L(
    'To stimulate is to encourage activity or interest: stimulate demand, stimulate discussion. Excite is stronger and more emotional; encourage is everyday. Stimulus is the noun (plural stimuli). Mix-up: simulate (copy conditions). Do not stimulate a forged passport.',
    ['Lower fares stimulated evening attendance without a new slogan.', 'A stimulus package is economics; a stimulus in psychology is what the subject responds to.'],
    'Encourage activity/growth. Noun: stimulus (stimuli). Mix-up: simulate (imitate). Everyday: encourage. Stronger: excite.',
    ['encourage']
  ),
  subsidy: L(
    'A subsidy is money given to keep a price or service going: a farm subsidy, subsidise (verb, British -ise). Grant is a close cousin, often for a project; donation is private. Subscribe is pay for a magazine — subscriber is already in the dictionary. Do not call a salary a subsidy.',
    ['The night-bus subsidy was cheaper than laying on emergency taxis.', 'To subsidise tickets is the verb; to subscribe to a journal is a different payment.'],
    'Public/organisational money to keep something going. Verb: subsidise. Close: grant. Mix-up: subscribe (pay to receive). Not wages.',
    ['grant']
  ),
  successor: L(
    'A successor is the person or thing that comes next in a role: her successor, a successor model. Predecessor is the one before. Success is doing well — a painful lookalike. Succession is the process of following (a succession of chairs). Do not call a deputy a successor while the post is still filled.',
    ['The successor inherited the archive and the complaint log.', 'A succession of interns is a series; a successor is the one named to the seat.'],
    'The one who comes next. Opposite: predecessor. Process: succession. Mix-up: success (doing well). Not the still-serving deputy.',
    []
  ),
}
