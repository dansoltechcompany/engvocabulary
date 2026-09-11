const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1D = {
  analogous: L(
    'Analogous means similar in a way that makes comparison useful: analogous to training a muscle. Similar is everyday and looser; comparable is a close cousin. Analogy is the noun (draw an analogy). The pattern is analogous to / with. In speech, a bit like or comparable to is enough. An analogous case must share a structure, not a vague vibe — do not call two unlike problems analogous to sound clever.',
    ['The marking dispute is analogous to last year’s, not identical.', 'Learning stress patterns is analogous to learning a piece of music: repetition with attention.'],
    'analogous to / with. Usefully comparable. Noun: analogy. Everyday: similar / comparable. Needs a real structural likeness.',
    ['comparable']
  ),
  antagonism: L(
    'Antagonism is active dislike or opposition between people or groups — hotter than disagreement. Hostility is a close synonym; conflict can be the clash itself. Antagonistic is the adjective; antagonist is an opponent (and a literary rival). In speech, bad blood or they cannot stand each other is blunter. Do not use it for a polite academic disagreement; it implies heat and resistance.',
    ['Antagonism between the two departments stalled the shared timetable.', 'The interview revealed antagonism, not a simple difference of method.'],
    'Active hostility. Adjective: antagonistic. Everyday: hostility / bad blood. Stronger than disagreement. Related: antagonist.',
    ['hostility']
  ),
  appraise: L(
    'To appraise is to judge quality, value, or nature, often officially: staff appraisal, appraise a proposal. Assess is a close academic synonym; evaluate is similar; judge is everyday. Appraisal is the noun (an annual appraisal). In speech, judge or look at properly is enough. Do not confuse it with apprise (inform: apprise someone of) — a classic mix-up in formal letters.',
    ['Managers appraise teaching once a year against agreed criteria.', 'Appraise the sources before you build the literature review on them.'],
    'Officially judge worth. Noun: appraisal. Close: assess / evaluate. Everyday: judge. Contrast: apprise = inform.',
    ['assess']
  ),
  apprehension: L(
    'Apprehension is worry that something bad may happen: apprehension before an oral exam. Anxiety is a close everyday cousin; fear is stronger and more specific. Apprehensive is the adjective (apprehensive about). In legal English, apprehension can also mean arrest — rare at C1 unless you read crime reports. In speech, I am nervous about is enough. It is not a synonym for comprehension (understanding).',
    ['Her apprehension about the viva was worse than the viva.', 'There was widespread apprehension that fees would rise again.'],
    'Anxiety about what is coming. Adjective: apprehensive about. Everyday: nervous / worry. Legal: arrest. Not comprehension.',
    ['anxiety']
  ),
  archaic: L(
    'Archaic means very old-fashioned and no longer in ordinary use: an archaic pronoun, archaic laws. Old-fashioned is everyday and milder; obsolete means no longer used because something replaced it; ancient is simply very old. In speech, outdated or old-fashioned is enough. Use archaic for language, dress, or rules that feel stranded in an earlier age — not for last year’s phone.',
    ['“Thou” is archaic in modern prose; keep it for quotation.', 'The dress code felt archaic, as if nobody had left 1952.'],
    'Out of ordinary use; old language or customs. Everyday: old-fashioned / outdated. Close: obsolete (replaced). Not merely old.',
    ['outdated']
  ),
  arduous: L(
    'Arduous means involving a lot of effort over a long time: an arduous climb, arduous negotiations. Hard is everyday; exhausting stresses the effect on you; strenuous is close for physical work. In speech, a slog or really hard going is more natural. Arduous praises stamina, not a five-minute inconvenience — do not call an email arduous.',
    ['Marking two hundred scripts in a weekend is arduous, not “a quick look”.', 'The path is short on the map and arduous in the heat.'],
    'Long and demanding. Everyday: a slog / exhausting. Close: strenuous (often physical). Not a minor hassle.',
    ['strenuous']
  ),
  atrocity: L(
    'An atrocity is an extremely cruel and violent act, especially in war: wartime atrocities. Crime is everyday and far broader; massacre names a mass killing; horror is emotional. Atrocious as an adjective in casual British English often means merely very bad (atrocious weather) — that weakening does not apply to the noun atrocity. In speech, a horrific crime is clearer. Keep the noun for genuine barbarity; using it for a cancelled train is grotesque.',
    ['The report documented atrocities against civilians, not only damage to buildings.', 'Survivors asked that the atrocities be named, not buried in statistics.'],
    'A shockingly cruel act, especially in war. Everyday: horrific crime. Casual atrocious (weather) is weaker — do not dilute the noun.',
    ['outrage']
  ),
  attest: L(
    'To attest is to show or prove that something is true, often attest to + noun: her results attest to months of practice. Confirm is everyday; testify is closer in law (a person speaks); demonstrate is a close academic cousin. Attestation is a rarer noun (a formal statement). In speech, show or prove is enough. Do not use attest for a vague hunch — it claims evidence.',
    ['Three independent studies attest to the same pattern.', 'I can attest to his punctuality; I cannot attest to his method.'],
    'attest to + noun. Formal for show/prove. Everyday: confirm / show. Legal cousin: testify. Needs evidence, not a hunch.',
    ['confirm']
  ),
  authenticity: L(
    'Authenticity is the quality of being real, genuine, or true to a claimed origin: the authenticity of a painting, authentic materials in class. Genuineness is a close synonym; reality is broader and vaguer. Authentic is the adjective; authenticate is the verb (experts authenticate a document). In speech, whether it is the real thing is enough. In marketing, authenticity is overused — prefer specific proof (date, source, method).',
    ['Experts questioned the authenticity of the signature, not the frame.', 'Learners wanted authenticity in the listening: real speed, real accents.'],
    'Genuineness; being the real thing. Adjective: authentic. Verb: authenticate. Everyday: the real thing. Overused in advertising.',
    ['genuineness']
  ),
  authoritarian: L(
    'Authoritarian means demanding strict obedience and allowing little personal freedom: an authoritarian regime, an authoritarian management style. Strict is everyday and can still be fair; autocratic is a close synonym; totalitarian is stronger (the state seeks to control everything). Authority is legitimate power; authoritarian is a criticism of how power is used. In speech, controlling or heavy-handed is enough. Do not call a firm deadline authoritarian.',
    ['The new head’s style was authoritarian: questions were treated as disloyalty.', 'Authoritarian governments distrust independent universities.'],
    'Strict and controlling; little freedom. Close: autocratic. Stronger: totalitarian. Everyday: heavy-handed. Contrast: authority (can be legitimate).',
    ['autocratic']
  ),
  aversion: L(
    'An aversion is a strong dislike, usually aversion to: an aversion to public speaking. Dislike is everyday and milder; hatred is stronger and more personal; phobia is closer to a clinical fear. Averse to is the adjective pattern (risk-averse). In speech, I really cannot stand is blunter. Do not confuse averse with adverse (harmful conditions).',
    ['He has an aversion to group presentations, not to the subject.', 'Her aversion to last-minute changes made her a reliable organiser.'],
    'aversion to + noun/-ing. Strong dislike. Adjective: averse to. Everyday: cannot stand. Contrast: adverse = harmful. Stronger: hatred; clinical: phobia.',
    ['dislike']
  ),
  benevolent: L(
    'Benevolent means kind and wanting to help others: a benevolent donor, a benevolent smile. Kind is everyday; generous stresses giving; charitable can mean of a charity or merely “generous in interpretation.” Benevolence is the noun. In speech, kind or well-meaning is enough. The word can sound slightly Victorian; in criticism, a benevolent dictator is still a dictator — kindness does not cancel control.',
    ['A benevolent alumni fund paid for the language assistants.', 'His tone was benevolent, which made the refusal harder to challenge.'],
    'Kindly generous. Noun: benevolence. Everyday: kind / well-meaning. Close: generous. Can still describe unequal power.',
    ['kind']
  ),
  bewilder: L(
    'To bewilder is to confuse someone completely: the new rules bewildered the staff. Confuse is everyday and weaker; baffle is a close synonym; perplex is a little more literary. Bewildered and bewildering are the common adjective forms; bewilderment is the noun. In speech, completely lost or thrown is enough. Use it for genuine disorientation, not a single unclear sentence.',
    ['The overlapping timetables bewildered even the office that had written them.', 'She looked bewildered, not uninterested, when the graph appeared.'],
    'Utterly confuse. Adjectives: bewildered / bewildering. Noun: bewilderment. Everyday: confuse / throw. Close: baffle.',
    ['baffle']
  ),
  brevity: L(
    'Brevity is the quality of using few words or lasting a short time: the brevity of her speech. Shortness is everyday but can sound like a defect; conciseness is closer for writing that is short and clear. Brief is the adjective; brevity is the noun examiners like. In speech, keeping it short is enough. Brevity is praise when nothing needed is missing; if the argument is cut, that is mere shortness.',
    ['The brevity of the abstract made the method easy to scan.', 'Aim for brevity in the conclusion, not a new literature review.'],
    'Few words / short duration. Adjective: brief. Close: conciseness (short and clear). Everyday: keeping it short. Praise, not a stub.',
    ['conciseness']
  ),
  bureaucratic: L(
    'Bureaucratic means full of complicated official rules that slow things down: a bureaucratic visa process. Official is neutral; administrative is close and less insulting; red tape is the informal complaint. Bureaucracy is the noun (the system and the people). In speech, too much paperwork or boxed in by rules is enough. Use it as criticism of process, not as a synonym for any government office that works well.',
    ['A bureaucratic loop meant the same form was signed three times.', 'She is precise, not bureaucratic: the rules she wrote actually shorten the queue.'],
    'Full of slow official rules. Noun: bureaucracy. Informal: red tape. Neutral cousin: administrative. Everyday: too much paperwork.',
    ['administrative']
  ),
  calamity: L(
    'A calamity is a sudden event that causes great damage or distress: the flood was a calamity. Disaster is the everyday synonym; catastrophe is close and often larger in scale; tragedy stresses human suffering. Calamitous is the adjective. In speech, disaster is almost always enough. The word is slightly literary or journalistic — do not use it for a spilt coffee.',
    ['The factory closure was a calamity for a town with one employer.', 'They treated a missed bus as a calamity; the real calamity was the lost passport.'],
    'A sudden disaster. Everyday: disaster. Close: catastrophe. Adjective: calamitous. Literary/journalistic; not a minor mishap.',
    ['disaster']
  ),
  callous: L(
    'Callous means not caring about other people’s suffering: a callous remark. Unkind is everyday and weaker; cruel is stronger and often active; heartless is a close synonym. Callousness is the noun. In speech, cold or heartless is enough. A callus (one l in American spelling of the skin patch) is thickened skin — different word. Do not call a necessary firm decision callous unless indifference to harm is the point.',
    ['It was callous to joke about her failed resit in front of the class.', 'The policy looked efficient on paper and callous in its effects on carers.'],
    'Hard-hearted; indifferent to suffering. Everyday: heartless / cold. Stronger: cruel. Noun: callousness. Not a skin callus.',
    ['heartless']
  ),
  categorical: L(
    'Categorical means expressed clearly and without any doubt: a categorical denial, a categorical no. Absolute is a close synonym; definite is everyday and milder. Categorically is the adverb (deny categorically). It is not the adjective of category (that is categorical only in old logic; in modern English use category as the noun). In speech, flat / out-and-out is enough. A categorical claim still needs to be true.',
    ['She issued a categorical denial; later emails complicated the story.', 'I need a categorical answer: is the lab free on Thursday or not?'],
    'Absolute; no ifs. Adverb: categorically. Everyday: definite / flat. Not “of a category”. Close: absolute.',
    ['absolute']
  ),
  censor: L(
    'To censor is to remove or ban parts of a book, film, or letter that officials consider offensive or secret. Cut is everyday and can be artistic; ban is broader (the whole work); edit is neutral. Censor is also the noun (the person). Censorship is the practice. In speech, they cut it or they blocked it is enough. Do not confuse censor with censure (strong official criticism) — a frequent exam trap.',
    ['The film was censored before release; three scenes disappeared.', 'Do not censor your own argument into blandness before anyone else does.'],
    'Cut or ban for official reasons. Noun: a censor. Practice: censorship. Contrast: censure = official criticism. Everyday: cut / block.',
    ['cut']
  ),
  censorship: L(
    'Censorship is the official control of what may be published, shown, or said: wartime censorship, internet censorship. Control is everyday and broader; suppression is a close, more hostile cousin. Censor is the verb and the official. Self-censorship is holding back without a state order. In speech, they will not let it be shown is enough. Argue with examples: who decides, what is cut, and on what grounds.',
    ['Strict censorship meant the local paper printed rumours as weather.', 'Writers described a climate of self-censorship, not only a list of banned titles.'],
    'Official control of what is shown/said. Verb/person: censor. Related: self-censorship. Everyday: official blocking. Close: suppression.',
    ['suppression']
  ),
  circumvent: L(
    'To circumvent is to find a way around a rule or problem, often without breaking it openly: circumvent a paywall, circumvent a ban. Get round is the everyday British phrasal verb; avoid is weaker; evade can imply dishonesty. Circumvention is the noun. In speech, get round or dodge is more natural. The word can be neutral (a clever workaround) or critical (a dodge) — tone decides. It is not a synonym for solve.',
    ['They circumvented the booking limit by splitting the group across two names.', 'A footnote cannot circumvent the word count if the examiner reads it.'],
    'Get around a rule/problem. Everyday: get round / dodge. Close: evade (more dishonest). Noun: circumvention. Not “solve”.',
    ['get round']
  ),
  coalesce: L(
    'To coalesce is to come together to form one group or mass: protests coalesced into a movement. Merge is a close synonym, often of companies; unite is everyday and more intentional; combine can be looser. Coalescence is a rarer noun. In speech, come together or merge is enough. Use it when separate parts form a new whole, not when two people simply agree.',
    ['Several small complaints coalesced into a formal grievance.', 'The mist coalesced into rain before we reached the ridge.'],
    'Merge into one. Everyday: come together / merge. Close: unite (more willed). Of groups, ideas, or substances.',
    ['merge']
  ),
  coercion: L(
    'Coercion is the use of force or threats to make someone do something: a confession obtained by coercion. Pressure is everyday and milder; force is close; duress is the legal cousin (under duress). Coerce is the verb; coercive is the adjective. In speech, forcing someone or threats is enough. Consent under coercion is not free consent — a point that matters in law and ethics essays.',
    ['A confession obtained by coercion will not stand in court.', 'The “voluntary” extra hours looked like coercion once the rotas were public.'],
    'Force or threats to compel. Verb: coerce. Adjective: coercive. Everyday: force / threats. Legal: duress. Stronger than pressure.',
    ['force']
  ),
  cohesive: L(
    'Cohesive means united and working well as a whole: a cohesive team, cohesive writing (the sentences hold together). United is everyday; coherent is a close cousin for argument (clear logic) — cohesive is more about sticking together as a group or text. Cohesion is the noun (team cohesion; lexical cohesion in writing). In speech, they pull together or it hangs together is enough. A cohesive group can still be wrong.',
    ['The team became more cohesive after they shared the same brief.', 'Cohesive paragraphs use reference and linking, not only a list of facts.'],
    'Sticking together as one. Noun: cohesion. Everyday: united / hangs together. Contrast: coherent = logically clear. Writing and groups.',
    ['united']
  ),
  commemorate: L(
    'To commemorate is to remember and show respect for an important person or event: a plaque commemorates the founder. Remember is everyday and private; celebrate can be joyful (wrong for a tragedy); memorialise is a close synonym. Commemoration is the noun; commemorative is the adjective (a commemorative stamp). In speech, mark or remember publicly is enough. Match the tone to the event.',
    ['A small ceremony commemorates the students who did not come back.', 'The exhibition commemorates the strike, not the factory’s later branding.'],
    'Mark in public memory. Noun: commemoration. Everyday: remember / mark. Close: memorialise. Contrast: celebrate (often joyful).',
    ['memorialise']
  ),
  commend: L(
    'To commend is to praise someone or something formally: commended for honesty, highly commended (a prize band). Praise is everyday; recommend is a different verb (suggest as suitable) — do not mix them. Commendation is the noun. In speech, praise or well done is enough. Commend is at home in reports, ceremonies, and references, not in a text to a friend.',
    ['The principal commended her for reporting the error instead of hiding it.', 'The essay was highly commended; it did not win.'],
    'Officially praise. Noun: commendation. highly commended. Everyday: praise. Contrast: recommend = suggest as suitable.',
    ['praise']
  ),
  commensurate: L(
    'Commensurate means matching in size, quality, or degree: pay commensurate with experience. Proportional is a close synonym; fitting is everyday and looser. The set pattern is commensurate with. In speech, in line with or matching is enough. It is a favourite of job adverts and academic complaints about workload. Do not use it for two things that are merely both large.',
    ['The marking load was not commensurate with the hours in the contract.', 'Responsibility should be commensurate with training, not with enthusiasm alone.'],
    'commensurate with. In proportion to. Everyday: in line with / matching. Close: proportional. Official/HR and academic tone.',
    ['proportional']
  ),
  commonplace: L(
    'Commonplace means ordinary and unsurprising because it happens often: online classes are now commonplace. Common is everyday; ordinary is close; ubiquitous is stronger (everywhere). As a noun, a commonplace is a trite remark (rarer). In speech, normal now or nothing unusual is enough. It describes frequency and familiarity, not quality — a commonplace tool can still be excellent.',
    ['Cameras in classrooms were rare a decade ago and are now commonplace.', 'Treat the finding as noteworthy, not commonplace, until you have a comparison.'],
    'Ordinary because frequent. Everyday: common / nothing unusual. Stronger: ubiquitous. Noun (rarer): a trite remark.',
    ['ordinary']
  ),
  composure: L(
    'Composure is calm control of your feelings, especially under pressure: keep your composure, lose your composure. Calm is everyday; self-control is a close cousin; poise adds grace. Composed is the adjective. In speech, stay calm or keep it together is enough. Composure is what you keep; it is not the same as not caring (that can be callousness).',
    ['She kept her composure when the fire alarm cut the viva in half.', 'He lost his composure only when the results were read aloud.'],
    'keep / lose your composure. Calm self-control. Everyday: stay calm. Close: poise / self-control. Adjective: composed.',
    ['poise']
  ),
  concerted: L(
    'Concerted means done in a planned, combined way: a concerted effort, concerted action. Joint is everyday and weaker; coordinated is a close synonym; intensive is about energy, not teamwork. In speech, a proper joint effort is enough. A concerted campaign implies several people or moves at once — one person staying late is hard work, not a concerted effort.',
    ['It will take a concerted effort from tutors and students to cut plagiarism.', 'Concerted lobbying, not one email, changed the library hours.'],
    'concerted effort/action. Combined and deliberate. Everyday: joint / coordinated. Not one person’s solo slog.',
    ['coordinated']
  ),
  conclusive: L(
    'Conclusive means proving something beyond reasonable doubt: conclusive evidence, a conclusive result. Decisive is a close synonym; definite is everyday and milder; final can mean merely “last.” Inconclusively is the useful opposite (the trial was inconclusive). In speech, that settles it is enough. Do not call a single anecdote conclusive.',
    ['The DNA match was conclusive; the timeline was not.', 'We lack conclusive data, so the claim belongs in the discussion, not the abstract.'],
    'Settling the question. Close: decisive. Everyday: that settles it. Opposite: inconclusive. Stronger than definite.',
    ['decisive']
  ),
  conglomerate: L(
    'A conglomerate is a large company formed from several different businesses: a media conglomerate. Corporation is broader; group is everyday in business names (a publishing group); empire is metaphorical and critical. In speech, a huge company with lots of parts is enough. Use it when diversity of businesses is the point, not for a single-shop brand.',
    ['The conglomerate owns newspapers, radio, and a streaming platform.', 'Local bookshops cannot match a conglomerate on discounts, only on advice.'],
    'A huge multi-business company. Broader: corporation. Everyday: a huge company with many parts. Metaphor: empire (critical).',
    ['corporation']
  ),
  constituency: L(
    'A constituency is the area and the voters a politician represents: tour the constituency, a marginal constituency. Seat is close in Westminster talk; district is more American or administrative; electorate is the voters as a body. Constituent is a voter in that area. In speech, her area or the people she represents is enough. Do not use it for any fan base unless you are stretching a metaphor.',
    ['She held surgeries in every town in her constituency.', 'The policy pleased party members and alarmed the wider constituency.'],
    'A politician’s area and voters. Person: constituent. Close: seat / electorate. Everyday: the area she represents. UK politics.',
    ['electorate']
  ),
  construe: L(
    'To construe is to understand or interpret words or actions in a particular way: construe silence as agreement. Interpret is a close synonym; read is everyday (how should I read this?). Construe as is the usual pattern. In speech, take it as or interpret is enough. Construction in this sense is a formal noun (a possible construction of the clause). Do not confuse it with construct (build).',
    ['Silence should not be construed as consent to the extra hours.', 'The email can be construed as a threat or as a clumsy joke; ask.'],
    'construe X as Y. Interpret. Everyday: take it as / read. Close: interpret. Not construct (build).',
    ['interpret']
  ),
  contingent: L(
    'Contingent means depending on something else that may or may not happen: contingent on good weather. Dependent is everyday; conditional is a close synonym. Contingent on / upon is the pattern. As a noun, a contingent is a group (a small contingent of students) — a different sense. In speech, it depends on is enough. Contingency is a possible future event you plan for (a contingency fund).',
    ['The trip is contingent on enough people paying the deposit.', 'Funding is contingent upon a satisfactory audit, not upon goodwill.'],
    'contingent on / upon. Dependent on conditions. Everyday: it depends on. Close: conditional. Noun: a group; contingency = a backup plan.',
    ['conditional']
  ),
  corollary: L(
    'A corollary is a natural result or logical follow-on: a corollary of the new policy. Consequence is everyday and broader; by-product can be accidental; implication is often what follows in thought. Corollary of is the pattern. In speech, which means or a natural result is enough. It is academic and slightly dry — do not use it for a surprise accident that does not follow from the premise.',
    ['Higher fees were a corollary of shrinking the subsidy, not an accident.', 'A corollary of shorter terms is a steeper revision curve.'],
    'a corollary of. A logical follow-on. Everyday: a natural result. Close: consequence. Academic; not a random side-effect.',
    ['consequence']
  ),
  cosmopolitan: L(
    'Cosmopolitan means containing people and ideas from many countries, or worldly in outlook: a cosmopolitan city, a cosmopolitan education. International is everyday and more factual; multicultural stresses several cultures living together; worldly can mean experienced, not necessarily international. In speech, mixed and international is enough. The word can praise openness or, in older use, sneer at rootlessness — context decides.',
    ['The campus is cosmopolitan in intake, not only in the prospectus photographs.', 'A cosmopolitan reading list still needs local knowledge to land.'],
    'International in mix or outlook. Everyday: international / worldly. Close: multicultural (several cultures). Can praise or, rarely, sneer.',
    ['international']
  ),
  covert: L(
    'Covert means secret and not openly acknowledged: a covert meeting, covert surveillance. Secret is everyday; hidden is close; clandestine is a literary cousin; overt is the opposite (open). Covertly is the adverb. In speech, secret or on the quiet is enough. Covert rhymes with “lover” in British English (/ˈkəʊvɜːt/). Do not use it for a surprise party unless you want spy-novel comedy.',
    ['They held a covert meeting after the official minutes were signed.', 'Covert recording in tutorials is a disciplinary offence, not a study hack.'],
    'Hidden; not open. Opposite: overt. Everyday: secret. Close: clandestine. Adverb: covertly. British stress: first syllable.',
    ['secret']
  ),
  credible: L(
    'Credible means able to be believed or trusted: a credible explanation, a credible witness. Believable is everyday; plausible is close (it could be true) but can stop short of actually believing; reliable is about consistency over time. Credibility is the noun (lose credibility). In speech, believable or I can buy that is enough. Incredible in casual talk means “amazing,” which muddies the pair — keep credible for trust.',
    ['We need a credible timeline, not a colourful story.', 'The source is credible on budgets and weak on classroom practice.'],
    'Believable / trustworthy. Noun: credibility. Everyday: believable. Close: plausible (possible). Contrast: reliable (consistent). Casual incredible ≠ opposite.',
    ['believable']
  ),
  cumbersome: L(
    'Cumbersome means large, heavy, or complicated and therefore difficult to use: a cumbersome system, a cumbersome box. Awkward is everyday and close; unwieldy is a close synonym; clumsy often describes people. In speech, a faff or too bulky is enough. Use it for objects and procedures that get in the way — not for a difficult idea that is still elegant.',
    ['The old registration system was cumbersome: five screens for one address.', 'The folder is comprehensive and too cumbersome to carry to every class.'],
    'Awkwardly heavy or over-complicated. Everyday: bulky / a faff. Close: unwieldy. Of objects and systems, not of a subtle argument.',
    ['unwieldy']
  ),
}
