const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1C = {
  alleviate: L(
    'To alleviate is to make pain, pressure, or a problem less severe — not to remove it entirely. Ease and relieve are everyday cousins; mitigate is a close academic synonym, often for risk and harm. You alleviate poverty, congestion, anxiety. Alleviation is a rarer noun. In speech, take the edge off or ease is more natural; alleviate belongs in reports and careful essays.',
    ['A second marker helped alleviate the backlog, not clear it.', 'The grant will not fix housing, but it may alleviate the worst overcrowding.'],
    'alleviate pain/poverty/pressure. Less severe, not gone. Everyday: ease / relieve. Close: mitigate.',
    ['ease']
  ),
  ambivalent: L(
    'Ambivalent means pulled in two directions — mixed feelings, not apathy. Unsure is everyday and weaker; torn is the spoken cousin. You are ambivalent about a choice, or ambivalent towards a person, and ambivalence is the noun. Do not use it for simple dislike, and do not confuse it with ambiguous (unclear meaning) — in conversation, I have mixed feelings is the natural line.',
    ['She is ambivalent about promotion: more pay, less teaching.', 'Voters were ambivalent towards the reform, not openly hostile.'],
    'ambivalent about / towards. Mixed feelings, not indifference. Contrast: ambiguous = unclear. Everyday: torn / mixed feelings.',
    ['torn']
  ),
  anecdote: L(
    'An anecdote is a short, interesting story about a real incident, used to illustrate a point. Story is everyday and can be fiction; example is drier. Anecdotal evidence is a set academic warning — vivid, not proof — and anecdotal is the adjective. In a talk, one anecdote can open a door, but a string of them can replace an argument; in speech, a little story is enough.',
    ['He used an anecdote from his first year to show why feedback matters.', 'Anecdotal reports of progress are not the same as a trial.'],
    'an anecdote about + event. Adjective: anecdotal (often “not hard evidence”). Everyday: a little true story.',
    ['story']
  ),
  apathy: L(
    'Apathy is a lack of interest, energy, or concern — not calm, and not mere tiredness. Indifference is a close synonym; boredom is narrower (you want stimulation). Apathetic is the adjective, and writers use voter apathy or public apathy when people cannot be bothered to act. In speech, they just do not care is blunter; the opposite ideas are engagement and enthusiasm.',
    ['Apathy, not anger, was the real threat to the campaign.', 'After the third delay, even keen students slid into apathy.'],
    'a lack of concern. Adjective: apathetic. Close: indifference. Everyday: not caring. Not the same as calm.',
    ['indifference']
  ),
  austere: L(
    'Austere means severely plain, without comfort or decoration, and often strict: an austere room, an austere diet, austere public spending. Plain is everyday and milder; harsh is more cruel. Austerity is the noun, especially in politics (years of austerity). The word can praise discipline or criticise coldness — tone decides. In speech, very plain and strict is safer.',
    ['The chapel was austere: white walls and a single bench.', 'An austere budget left no money for field trips.'],
    'Plain and strict, often without comfort. Noun: austerity. Everyday: very plain / strict. Can praise or criticise.',
    ['plain']
  ),
  banal: L(
    'Banal means boring because it is stale and overused — a thought that has lost its edge. Ordinary is milder and not always an insult; clichéd is a close cousin for phrases. Banality is the noun. Critics reach for banal when advice, dialogue, or a plot is tired. In speech, nothing new or same old lines will do; banal can sound like a review.',
    ['The manifesto was a string of banal pledges.', 'I wanted a sharp ending, not a banal moral about trying hard.'],
    'Stale and overused. Close: clichéd. Noun: banality. Everyday: nothing new. Stronger insult than ordinary.',
    ['clichéd']
  ),
  blatant: L(
    'Blatant means obvious in a shameless, often offensive way: a blatant lie, blatant favouritism. Obvious is everyday and neutral; flagrant is a close formal synonym. Blatantly is the adverb (blatantly unfair). Use it when the wrongness is on display, not for a merely clear fact. In speech, obvious and shameless or out in the open is enough.',
    ['That was a blatant attempt to skip the queue.', 'The advert made a blatant appeal to fear, not to evidence.'],
    'blatant lie / disregard. Shamelessly obvious. Everyday: obvious (neutral). Close: flagrant.',
    ['flagrant']
  ),
  bleak: L(
    'Bleak means offering little hope, or a landscape that is cold, empty, and exposed: a bleak forecast, a bleak hillside. Hopeless is stronger and more final; grim is a close mood cousin. Writers like a bleak outlook, bleak midwinter. In speech, not looking good or grim is more natural. Do not use bleak for a mildly dull afternoon.',
    ['Without funding, the outlook for the choir is bleak.', 'They walked a bleak stretch of coast with no shelter.'],
    'bleak forecast / landscape. Little hope, or cold and empty. Everyday: grim / not looking good. Stronger: hopeless.',
    ['grim']
  ),
  candid: L(
    'Candid means honest and direct, even when the truth is awkward: a candid account, candid feedback. Honest is everyday; frank is a close synonym, sometimes blunter. A candid photograph is unposed, and candour is the British noun. In speech, I will be honest is the natural opener — candid belongs in profiles and careful praise, and it is usually a compliment, unlike blunt, which can sting.',
    ['She was candid about the gaps in the data.', 'We need a candid discussion, not another cheerful summary.'],
    'candid about + topic. Noun: candour. Everyday: honest / frank. Unposed photo: a candid.',
    ['frank']
  ),
  catalyst: L(
    'A catalyst is something that speeds a change without being the whole cause — originally chemistry, now journalism and essays. Trigger is close but often a single spark; stimulus is more technical. A catalyst for reform, a catalyst for her writing. In speech, what got it moving or the thing that sped it up is clearer. Do not call every cause a catalyst.',
    ['The leak was a catalyst for the inquiry, not the only reason.', 'A small grant became the catalyst for a full redesign of the course.'],
    'a catalyst for + change. Speeds a process. Everyday: trigger / what got it moving. Originally chemistry.',
    ['trigger']
  ),
  coerce: L(
    'To coerce is to force someone by threats or unfair pressure: coerce someone into + -ing. Force is everyday; pressure can be milder. Coercion is the noun and coercive the adjective (coercive tactics) — it is a serious legal, political, and ethical word. In speech, push someone into it or force is more natural; do not use coerce for ordinary persuasion.',
    ['No student should be coerced into unpaid overtime for a grade.', 'The contract looked voluntary, but the timeline was coercive.'],
    'coerce someone into + -ing. Noun: coercion. Everyday: force / pressure. Stronger and more official than persuade.',
    ['force']
  ),
  cohesion: L(
    'Cohesion is the quality of parts holding together as one — a class, a text, a society. Unity is a close everyday cousin; coherence is about logic and sense (a coherent argument), a different word. Cohesive is the adjective. In writing classes, cohesion often means linking devices; in sociology it means social bonds. In speech, hanging together is enough.',
    ['Clear pronouns improved the cohesion of the paragraph.', 'Shared meals did more for team cohesion than another slide deck.'],
    'Social/textual sticking-together. Adjective: cohesive. Contrast: coherence = logical sense. Everyday: unity.',
    ['unity']
  ),
  complacent: L(
    'Complacent means too satisfied with yourself to notice a risk or a need to improve — not a synonym for happy. Happy and pleased are ordinary contentment; smug is a close insult, while complacent adds dangerous ease. Grow complacent and a complacent attitude are the usual patterns, and complacency is the noun. In speech, too comfortable or resting on your laurels is the warning — never write “I feel complacent” when you mean “I feel happy.”',
    ['One good mock is not a reason to grow complacent.', 'A complacent board ignored the early complaints.'],
    'Too unworried to improve. NOT happy/pleased. Noun: complacency. Everyday: too comfortable / smug.',
    ['smug']
  ),
  condone: L(
    'To condone is to treat wrong behaviour as acceptable, often by ignoring it: the school does not condone cheating. Allow is everyday and broader; forgive can be personal and moral, while overlook is close when you let something pass. Condone is common in official warnings. In speech, we do not accept that or we will not look the other way is clearer — you condone a practice, not a sandwich.',
    ['Silence can condone bullying even when nobody intends to.', 'The regulator refused to condone the late filing.'],
    'condone + noun/-ing. Treat wrong as acceptable. Everyday: allow / overlook. Official register.',
    ['overlook']
  ),
  conducive: L(
    'Conducive to means likely to produce a result: silence is conducive to reading. Helpful is everyday; favourable is a close cousin. The pattern is almost always conducive to + noun / -ing, not “conducive for.” It is slightly formal — reports, education, health. In speech, good for or helps you is enough. The opposite is not conducive to.',
    ['Late nights are not conducive to accurate proofreading.', 'Smaller groups were more conducive to honest discussion.'],
    'conducive to + noun/-ing (not “for”). Formal. Everyday: good for / helpful towards. Opposite: not conducive to.',
    ['favourable']
  ),
  conscientious: L(
    'Conscientious means careful to do your duty well and thoroughly — a habit of care, not a single burst of effort. Careful is everyday; diligent is a close synonym (hard work over time). A conscientious objector is a specialised historical and legal sense, and conscientiously is the adverb. In speech, thorough and reliable is more natural, and the word is almost always praise, unlike fussy.',
    ['A conscientious marker checked every citation.', 'She is conscientious rather than flashy: work in on time, notes complete.'],
    'Careful and thorough as a habit. Close: diligent. Everyday: thorough / reliable. Almost always positive.',
    ['diligent']
  ),
  consolidate: L(
    'To consolidate is to make something firmer, often by combining parts or by practising until it holds: consolidate learning, consolidate two departments. Strengthen is broader; merge is closer when organisations join. Consolidation is the noun. In education, consolidate what you have learnt is a set phrase. In speech, firm it up or put it together is plainer.',
    ['This week is for consolidating tenses, not adding new ones.', 'The two offices were consolidated to cut duplicate paperwork.'],
    'consolidate learning / departments. Make firmer or combine. Everyday: firm up / merge. Noun: consolidation.',
    ['strengthen']
  ),
  conspicuous: L(
    'Conspicuous means easy to notice, sometimes uncomfortably so: a conspicuous error, conspicuous by their absence (an idiom). Obvious is everyday and more neutral; noticeable is milder. Inconspicuous is the opposite (what you want when you hope not to be seen). Conspicuously is the adverb. In speech, stands out or you could not miss it is enough.',
    ['A conspicuous logo on the slides undermined the “neutral” tone.', 'He felt conspicuous in a suit among weekend shoppers.'],
    'Easy to notice, sometimes unwanted. Opposite: inconspicuous. Idiom: conspicuous by their absence. Everyday: stands out.',
    ['noticeable']
  ),
  culminate: L(
    'To culminate is to reach a high or final point, usually culminate in + noun: the course culminates in a presentation. End is everyday and flatter; peak is closer for a high point. Culmination is the noun, and the verb is slightly literary or journalistic. In speech, it all leads up to or it ends with is more natural — do not use it for a random last event with no build-up.',
    ['Talks culminated in a narrow vote, not a consensus.', 'Years of small studies culminated in one clear guideline.'],
    'culminate in + noun. Final high point after a build-up. Noun: culmination. Everyday: end in / lead up to.',
    ['peak']
  ),
  cynical: L(
    'Cynical means you assume selfish motives and distrust fine words: cynical about promises. Sceptical (British spelling) is milder — you want evidence, not that you assume the worst — while pessimistic is about outcomes, not motives. A cynic is the person and cynicism the noun; in speech, I do not buy it is blunter. A cynical move can also mean a calculated, unprincipled tactic.',
    ['He is cynical about slogans, but he still votes.', 'Dropping the fee the week before inspections looked cynical.'],
    'Distrust of motives. Milder: sceptical (want evidence). Noun: cynicism. Everyday: I do not buy it.',
    ['sceptical']
  ),
  daunting: L(
    'Daunting means it looks difficult enough to frighten you before you start: a daunting word count, a daunting list. Intimidating is a close synonym; scary is everyday and more emotional. Daunt is a rarer verb (nothing daunted her), and undaunted is the opposite adjective. In speech, it looks like a lot or a bit scary is enough — the task can be daunting without being impossible.',
    ['A blank page is more daunting than a bad first sentence.', 'The form looks daunting, but half the boxes do not apply.'],
    'Frightening because it looks hard. Close: intimidating. Everyday: scary / a lot to face. Opposite: undaunted.',
    ['intimidating']
  ),
  deem: L(
    'To deem is a formal consider or judge: deemed necessary, deemed too expensive. Think and consider are everyday; judge can sound legal. Deem is common in rules, minutes, and news (deemed to have consented). It rarely takes a that-clause in modern prose: they deemed the plan risky, not “deemed that.” In speech, we think or we consider is the natural choice.',
    ['The committee deemed the evidence insufficient.', 'Any work submitted late is deemed incomplete unless you have an extension.'],
    'Formal for consider/judge. deemed + adjective / deemed to + verb. Everyday: think / consider.',
    ['consider']
  ),
  deplete: L(
    'To deplete is to reduce a stock by using too much of it: deplete savings, deplete energy, deplete fish stocks. Use up is everyday; drain is a close metaphor. Depletion is the noun (ozone depletion), and the verb is slightly technical and environmental. In speech, run down or use up is enough; the opposite idea is replenish.',
    ['Overtime depleted the team’s goodwill as well as the budget.', 'Intensive farming has depleted the soil in that valley.'],
    'deplete stocks/energy/savings. Noun: depletion. Everyday: use up / drain. Opposite: replenish.',
    ['drain']
  ),
  deter: L(
    'To deter is to discourage someone from acting, often by making the cost or risk higher: deter crime, deter applicants. Put off is the everyday phrasal verb; discourage is a close synonym. Deterrent is the noun (a deterrent to cheating) and deterrence the policy word. In speech, put people off is more natural; the pattern is deter someone from + -ing.',
    ['Higher deposits may deter casual bookings, not serious students.', 'Cameras did little to deter the graffiti.'],
    'deter someone from + -ing. Noun: deterrent. Everyday: put off / discourage.',
    ['discourage']
  ),
  detrimental: L(
    'Detrimental means causing harm, usually detrimental to + noun: detrimental to health. Harmful is everyday; damaging is close. Detriment is the noun (to the detriment of), and the adjective belongs in reports and essays. In speech, bad for is enough — do not use it for a mildly annoying habit unless you mean real harm.',
    ['Skipping breakfast proved detrimental to her concentration.', 'The delay was detrimental to small suppliers, not to the chain.'],
    'detrimental to + noun. Noun: detriment. Everyday: harmful / bad for. Formal register.',
    ['harmful']
  ),
  diligent: L(
    'Diligent means working hard and with care over time — a steady habit. Hard-working is everyday; conscientious stresses duty and thoroughness. Diligence is the noun (due diligence is a specialised business sense), and in speech she puts the hours in is more natural. It is praise, not a synonym for clever; a diligent search is also a set phrase for a careful hunt.',
    ['Diligent note-taking showed in the final paper.', 'After a diligent search, they still could not find the missing file.'],
    'Hard-working and careful over time. Noun: diligence. Everyday: hard-working. Close: conscientious.',
    ['hard-working']
  ),
  discreet: L(
    'Discreet means careful not to attract attention or cause embarrassment — tactful and quiet about private facts. Tactful is everyday; confidential describes the information, not the person. Discrete (already in this dictionary) means separate, distinct units — a different word with a different spelling. Discretion is the noun (at your discretion; show discretion). In speech, keep it to yourself or be tactful is enough.',
    ['Please be discreet: the shortlist is not public yet.', 'A discreet side door let guests leave without a fuss.'],
    'Tactful; not obvious. NOT discrete (= separate). Noun: discretion. Everyday: tactful / keep it quiet.',
    ['tactful']
  ),
  disdain: L(
    'Disdain is a feeling that someone or something is beneath respect: speak with disdain, treat an idea with disdain. Contempt is stronger; looking down on is the everyday paraphrase. As a verb, to disdain something is slightly literary (she disdained small talk), and disdainful is the adjective. In speech, they looked down on it is more natural — do not use disdain for mild dislike.',
    ['He mentioned group work with open disdain.', 'Her disdain for marketing slogans made the meeting short.'],
    'with disdain. Stronger: contempt. Verb: disdain (literary). Everyday: looking down on. Adjective: disdainful.',
    ['contempt']
  ),
  divert: L(
    'To divert is to change the direction of traffic, money, or attention: divert traffic, divert funds, divert attention from. Redirect is a close official synonym; distract is the everyday verb for attention. Diversion is the noun (a diversion on the ring road; also an amusement). In speech, send another way or take attention away is clearer. You divert something from A to B.',
    ['Police diverted buses away from the flooded underpass.', 'A joke at the start diverted attention from the weak data.'],
    'divert traffic/funds/attention. Noun: diversion. Everyday: redirect / distract. from… to…',
    ['redirect']
  ),
  dubious: L(
    'Dubious means doubtful, or probably not honest or of good quality: a dubious claim, a dubious website. Doubtful is everyday and often about the speaker’s feeling; suspicious is closer for people and deals. Dubiously is the adverb. In speech, a bit iffy (informal British) or I doubt it is more natural. Use it when you smell a problem, not for a simple unknown.',
    ['The statistics looked dubious once you saw the sample size.', 'I am dubious about finishing both essays tonight.'],
    'Doubtful or shady. Everyday: doubtful / iffy (informal). Close: suspicious (of people/deals).',
    ['doubtful']
  ),
  elaborate: L(
    'To elaborate is to add detail to an explanation: elaborate on that point. Explain is everyday and may still be brief; expand (on) is a close synonym. As an adjective, elaborate means complicated and detailed — a different use — and elaboration is the noun. In seminars, could you elaborate is a polite prompt; in speech, say more is enough.',
    ['Could you elaborate on the third criterion?', 'The footnote elaborates the exception, which the main text skips.'],
    'elaborate on + noun. Add detail. Everyday: say more / expand on. Adjective elaborate = detailed, ornate.',
    ['expand']
  ),
  eloquent: L(
    'Eloquent means expressing ideas fluently and with feeling, in speech or writing. Fluent is about ease and flow, not necessarily moving; persuasive is about effect. Eloquence is the noun and eloquently the adverb; an eloquent silence is a slightly literary set phrase. In speech, she put it beautifully is more natural — it is praise, not a synonym for talkative.',
    ['His closing remarks were eloquent without being long.', 'The letter was an eloquent defence of the library, not a rant.'],
    'Fluent and moving. Noun: eloquence. Close: persuasive / fluent. Everyday: put it beautifully. Not merely talkative.',
    ['articulate']
  ),
  elusive: L(
    'Elusive means hard to find, catch, or pin down in words: an elusive definition, an elusive suspect. Hard to pin down is the everyday paraphrase; slippery is informal. Elude is the verb (the name eluded me). In academic writing, a simple account of X remains elusive is a common modest claim. In speech, I cannot quite catch it is enough.',
    ['A stable Wi-Fi signal was elusive in that corner of the hall.', 'The author remains elusive: few interviews, no memoir.'],
    'Hard to catch or define. Verb: elude. Everyday: hard to pin down. Not the same as exclusive (select).',
    ['slippery']
  ),
  embark: L(
    'To embark on is to start a substantial project or journey: embark on a degree, embark on reforms. Start and begin are everyday; set out on is closer for journeys. Originally you embarked on a ship (still used), and embarkation is the travel noun. In speech, take on or start is enough — use it when the undertaking is large, not for making tea.',
    ['They embarked on a rewrite of the whole syllabus.', 'She embarked on the trip with one backpack and a spare battery.'],
    'embark on a project/journey. Formal/written. Everyday: start / set out. Originally: board a ship.',
    ['begin']
  ),
  embody: L(
    'To embody is to be a living or concrete example of an idea or quality: embody fairness, a building that embodies the brief. Represent is broader; personify is a close cousin for people. Embodiment is the noun (the embodiment of patience). In speech, she is a walking example of… is the paraphrase. Do not use embody for simply including items (that is include or encompass).',
    ['The coach embodies the calm he asks of the team.', 'Those two pages embody the argument; the rest is illustration.'],
    'embody a quality/idea. Noun: embodiment. Close: personify. Everyday: be a living example of.',
    ['personify']
  ),
  encompass: L(
    'To encompass is to include a wide range within one boundary: the course encompasses grammar and literature. Include is everyday; cover is a close teaching synonym. Encompass suggests a complete sweep, not one extra item, and it is slightly formal. In speech, take in or cover is enough — do not confuse it with compass (the tool) despite the shared letters.',
    ['Her brief encompasses recruitment, training, and review.', 'The park encompasses woodland, a lake, and two playing fields.'],
    'encompass a range of + nouns. Formal for include widely. Everyday: cover / take in.',
    ['include']
  ),
  endeavour: L(
    'To endeavour is a formal try hard: we endeavour to reply within a week. Try is the everyday verb you should prefer in almost all speech; attempt is a close cousin. As a noun, an endeavour is an undertaking (a scientific endeavour), and the British spelling is endeavour, not endeavor. In notices it can sound polite; in conversation it sounds stiff — the pattern is endeavour to + verb.',
    ['We endeavour to keep class sizes under twenty.', 'The restoration was a long endeavour, not a weekend job.'],
    'Formal for try. endeavour to + verb. Noun: an endeavour. British spelling -our. Everyday: try / attempt.',
    ['attempt']
  ),
  entail: L(
    'To entail is to involve something as a necessary part or result: the job entails evenings. Involve is everyday and slightly looser; require is close when it is a condition. Entail is common in academic and official English. In speech, it means you have to or it involves is enough. An entail in old property law is a rare specialised noun; ignore it at C1 unless you read history.',
    ['Taking the option entails an extra exam in June.', 'True independence entails dull tasks as well as freedom.'],
    'entail + noun/-ing. Necessary part or result. Everyday: involve / mean you have to.',
    ['involve']
  ),
  entrepreneur: L(
    'An entrepreneur is someone who starts a business and takes on the risk in hope of profit. Business owner is everyday and can include people who bought an existing shop; founder is close for the starter. Entrepreneurial is the adjective; entrepreneurship is the activity. The word can praise initiative or, in critical writing, a certain economic ideology. In speech, she started her own business is plainer.',
    ['The entrepreneur hired two tutors before she had a logo.', 'Entrepreneurial energy is not a substitute for a solvent cash flow.'],
    'Starts a business and takes the risk. Adjective: entrepreneurial. Everyday: business founder / owner.',
    ['founder']
  ),
  envisage: L(
    'To envisage is to picture a future situation as possible — you might envisage studying abroad. Imagine is everyday and can be fantasy; foresee is closer to prediction; envision is a common US variant. Envisage is standard British, and the patterns are envisage + noun / + -ing / that. In speech, see yourself or imagine is more natural — it is not a synonym for hope.',
    ['The architects envisaged a library that stayed open in the evening.', 'I do not envisage finishing the corpus work before Easter.'],
    'envisage + noun/-ing/that. British: picture as possible. Everyday: imagine / see (it happening). US cousin: envision.',
    ['imagine']
  ),
}
