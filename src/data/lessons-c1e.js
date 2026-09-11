const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1E = {
  cliche: L(
    'A cliché is a phrase or idea used so often that it has gone stale: “time is money” as a cliché, a clichéd plot. Saying and phrase are everyday and neutral; platitude is a close cousin for an empty moral remark; stereotype is a tired idea about people. Clichéd is the adjective (British spelling with the accent in the noun is usual: cliché). In speech, a tired phrase or overused line is enough. A cliché is overused, not merely familiar — a proverb can still be useful; a cliché is the one you reach for instead of thought.',
    ['“Think outside the box” is a cliché in every briefing; the plan still needed a date.', 'The ending was clichéd: a sudden storm, a last-minute letter, no new idea.'],
    'An overused, stale phrase or idea. Adjective: clichéd. Everyday: a tired phrase. Close: platitude (empty moral). Contrast: proverb (can still work); a merely familiar line.',
    ['platitude']
  ),
  cognizant: L(
    'Cognizant means aware of something, in formal or legal English: cognizant of the risks. Aware is the everyday word; conscious of is close; mindful is a slightly warmer cousin. British spelling is often cognisant; the -z- form is common in US and in some official British texts. Cognizance is the noun (rare). In speech, aware of is almost always better. Use cognizant when the register is minutes, law, or policy — not a text to a friend.',
    ['The board was cognizant of the risks and minuted them, then voted anyway.', 'Staff were asked to be cognizant of the new data rules; “please remember” would have done.'],
    'cognizant of. Formal/legal for aware. Everyday: aware. Close: conscious of. British also: cognisant. Too stiff for casual speech.',
    ['aware']
  ),
  collusion: L(
    'Collusion is a secret agreement to deceive or cheat: collusion between two firms, in collusion with. Cooperation is open and often positive; conspiracy is a close, heavier cousin; a stitch-up is informal British. Collude is the verb. In speech, a secret deal to cheat is enough. Collusion implies dishonesty, not ordinary teamwork — do not call a joint lesson collusion unless there is deceit.',
    ['Investigators found collusion between the two bidders on the contract.', 'They were not cooperating; they were in collusion, and the marks showed it.'],
    'Secret dishonest agreement. Verb: collude. in collusion with. Everyday: a secret deal to cheat. Close: conspiracy. Contrast: open cooperation.',
    ['conspiracy']
  ),
  complicit: L(
    'Complicit means involved in something wrong, even if you did not start it: complicit in the silence, complicit in fraud. Involved is everyday and weaker; guilty is stronger and more legal; accessory is a legal role. Complicity is the noun. In speech, sharing the blame or in on it is blunter. Complicit often criticises bystanders. Do not use it for a minor mix-up with no moral stain.',
    ['Silence in the meeting made several people complicit in the unfair vote.', 'She was not the author of the leak, but the court held her complicit.'],
    'Sharing blame for a wrong. complicit in. Noun: complicity. Everyday: in on it / sharing the blame. Stronger/legal: guilty / accessory.',
    ['implicated']
  ),
  demeanour: L(
    'Demeanour is the way a person looks and behaves: a calm demeanour, professional demeanour. Manner and behaviour are everyday; bearing is a close, slightly literary cousin. American spelling is demeanor. In speech, manner or how they come across is enough. Demeanour is outward — it can hide feeling. Do not confuse it with demean (verb: to lower someone’s dignity).',
    ['Her calm demeanour steadied the class after the alarm.', 'His demeanour in the interview was open; the references told a colder story.'],
    'Outward manner/behaviour. British spelling: demeanour. Everyday: manner / how they come across. Close: bearing. Contrast: demean = belittle.',
    ['manner']
  ),
  demographic: L(
    'Demographic means connected with the numbers and types of people in a population: demographic data, a demographic shift. Population is everyday; statistical is broader. A demographic is also a noun for a market or age group (the 18–25 demographic). Demography is the study. In speech, who lives there / age groups is enough. Use it for population structure, not as a trendy synonym for “people.”',
    ['Demographic data showed more young learners in the evening cohort.', 'The campaign ignored a whole demographic: parents who work nights.'],
    'Of population groups and numbers. Noun: a demographic = a slice of the population. Study: demography. Everyday: age groups / who lives there.',
    ['population']
  ),
  denounce: L(
    'To denounce is to criticise someone or something publicly and strongly: denounce a contract, denounce a colleague as disloyal. Condemn is a close synonym; criticise is milder and everyday; slam is informal. Denunciation is the noun. In speech, come out against or slam is blunter. Denounce is public and often political. Do not use it for a private complaint to a manager — that is raise or report.',
    ['The union denounced the new contract at a packed meeting.', 'He denounced the rumour in an open letter, which only spread it further.'],
    'Publicly and strongly condemn. Noun: denunciation. Everyday: criticise (milder). Close: condemn. Public/political; not a private grumble.',
    ['condemn']
  ),
  deplore: L(
    'To deplore is to say that you strongly disapprove of something: deplore violence, deplore the delay. Disapprove is everyday and weaker; lament is closer when there is sorrow; condemn is hotter and more public. Deplorable is the adjective. Formal, often in statements and editorials. In speech, I think it is awful is enough. Deplore judges the thing; it does not by itself stop it. Do not deplore a mild inconvenience.',
    ['We deplore the late notice to families; an apology is the least required.', 'The editorial deplored the tone of the debate without naming a remedy.'],
    'Strongly disapprove (formal). Adjective: deplorable. Everyday: think it awful. Close: lament (sadder), condemn (hotter). Not for minor annoyances.',
    ['disapprove']
  ),
  derogatory: L(
    'Derogatory means showing a low opinion; insulting: derogatory remarks, a derogatory term. Insulting is everyday; pejorative is a close academic cousin (a pejorative label); abusive is stronger. Derogatory about / towards are the patterns. In speech, rude or insulting is enough. Use it for language that puts people down, not for a tough but fair critique of an argument.',
    ['Do not use derogatory names for learners, even as a “joke.”', 'The footnote was sharp; it was not derogatory — it attacked the method, not the person.'],
    'Insulting in tone. Everyday: insulting / rude. Close: pejorative. Pattern: derogatory about / towards. Critique of ideas ≠ derogatory by default.',
    ['pejorative']
  ),
  designate: L(
    'To designate is to choose someone or something for a particular role or name: designate a quiet room, designate a successor. Appoint is close for people; name and set aside are everyday; earmark is close for money or space. Designated is the adjective (a designated smoking area). In speech, set aside as / name as is enough. Official tone. Do not use it for a casual nickname.',
    ['The room was designated a quiet study space and the posters came down.', 'She was designated the fire warden, with a yellow tabard and a list.'],
    'Officially name or set aside. Everyday: name as / set aside. Close: appoint (people). Adjective: designated. Official, not a nickname.',
    ['appoint']
  ),
  deviate: L(
    'To deviate is to go in a different direction from the usual or expected path: deviate from the instructions, deviate from the mean (statistics). Depart from is a close formal cousin; stray and go off-piste are more informal. Deviation is the noun. The pattern is deviate from. In speech, leave the path / not follow is enough. Neutral in science; in rules, it can sound like a fault. Do not use it for a planned alternative route you announced.',
    ['Do not deviate from the exam rubric; the extra paragraph will not be marked.', 'Results that deviate from the mean need a second look, not a shrug.'],
    'deviate from + path/rule. Everyday: leave the expected path. Noun: deviation. Close: depart from. Science: from the mean. Can imply a fault.',
    ['depart from']
  ),
  dialect: L(
    'A dialect is a form of a language spoken in a particular area, with its own words, grammar, and sounds: a northern dialect, regional dialect. Accent is only pronunciation; slang is informal vocabulary, often urban or group-based; language is the whole system. Dialectal is the adjective. In speech, the way people speak there / regional English is often enough. A dialect is not “bad English.” Do not call a different language a dialect to belittle it.',
    ['She speaks a northern dialect at home and a more standard register in tutorials.', 'The play kept the dialect in the dialogue; the stage directions stayed in standard spelling.'],
    'A regional form of a language (words + grammar + sounds). Contrast: accent (pronunciation only), slang, a separate language. Not “incorrect English”.',
    ['variety']
  ),
  discretion: L(
    'Discretion is the freedom to decide, or the quality of being careful with secrets: at the manager’s discretion, handle it with discretion. Choice is everyday for the first sense; tact and secrecy are close for the second. Discrete (separate, distinct) is a different word — a classic mix-up. Discretionary is the adjective (discretionary leave). In speech, up to you / keep it quiet is enough. At your discretion is official.',
    ['Overtime is at the manager’s discretion, not an automatic right.', 'The counsellor treated the notes with discretion; gossip would have ended the work.'],
    'Freedom to decide, or tact with secrets. at X’s discretion. Everyday: up to you / keep it quiet. Contrast: discrete = separate. Adjective: discretionary.',
    ['tact']
  ),
  disillusion: L(
    'To disillusion is to make someone see that a belief was false: disillusioned with politics, the results disillusioned the staff. Disappointment is everyday and milder; disenchant is a close cousin. Disillusionment is the noun; disillusioned is the usual adjective. In speech, it shattered the idea or they saw through it is enough. You disillusion a person, not a policy. The process is often painful; do not use it for a tiny unmet preference.',
    ['The results disillusioned even the optimistic staff: the gap had widened.', 'Travel did not disillusion her about the city; the bureaucracy did.'],
    'Destroy a false hope. Adjective: disillusioned (with). Noun: disillusionment. Everyday: it shattered the idea. Close: disenchant. Stronger than disappoint.',
    ['disenchant']
  ),
  dismantle: L(
    'To dismantle is to take something apart, or to end a system piece by piece: dismantle a machine, dismantle a timetable, dismantle an argument. Take apart is everyday for objects; scrap and abolish are stronger for systems. Dismantling is the noun. In speech, take it apart / take it down is enough. Physical or institutional. Do not use it for deleting one bullet point.',
    ['They dismantled the old rota and rebuilt it around the bus times.', 'She dismantled the opposing case claim by claim, without raising her voice.'],
    'Take apart, or take down a system bit by bit. Everyday: take apart / take down. Stronger for systems: abolish. Physical or institutional.',
    ['take apart']
  ),
  dissent: L(
    'Dissent is disagreement with an official opinion or decision: little dissent in the meeting, a dissenting voice. Disagreement is everyday and broader; protest is more public and active; opposition can be organised. Dissent is also a verb. A dissenting judgment is a legal opinion that disagrees with the majority. In speech, disagreement is enough. Dissent can be loyal — it is not automatically rebellion. Do not call a preference for tea dissent.',
    ['There was little dissent in the meeting until the budget line was read aloud.', 'Two governors recorded their dissent in the minutes and still voted to proceed.'],
    'Disagreement with an official line. Also a verb. Everyday: disagreement. Close: protest (more active). Legal: dissenting judgment. Not mere taste.',
    ['disagreement']
  ),
  distinctive: L(
    'Distinctive means easy to recognise because it is different from others: a distinctive way of teaching, a distinctive voice. Distinct means clearly separate (two distinct types); typical is almost the opposite. Characteristic is a close cousin; unique is stronger (the only one). In speech, easy to recognise / typical of them is enough. Distinctive is a recognisable signature, not merely “quite good.” Do not confuse it with distinct.',
    ['She has a distinctive pause before the key point; you would know the recording.', 'The building’s distinctive chimney made it a landmark, not a pretty extra.'],
    'Clearly characteristic; easy to recognise. Everyday: easy to recognise. Close: characteristic. Contrast: distinct = clearly separate; unique = one of a kind.',
    ['characteristic']
  ),
  doctrine: L(
    'A doctrine is a set of beliefs taught by a church, party, or school of thought: party doctrine, a legal doctrine, military doctrine. Belief is everyday and looser; dogma is a close, often critical cousin (beliefs treated as beyond question); policy is what you do, not the creed. Doctrinal is the adjective. In speech, official beliefs or the party line is enough. Doctrine is taught as a system. Do not use it for one passing opinion.',
    ['The doctrine shaped the party’s education policy for a decade.', 'Stare decisis is a legal doctrine, not a slogan on a poster.'],
    'An official set of beliefs (church, party, law, military). Everyday: official beliefs / the party line. Close: dogma (more rigid, often critical). Adjective: doctrinal.',
    ['dogma']
  ),
  drawback: L(
    'A drawback is a disadvantage that makes something less attractive: the only drawback is the price, a major drawback. Disadvantage is the everyday cover-all; downside is a close informal cousin; snag is a small practical problem. In speech, the catch or the downside is enough. Drawback is measured and fairly neutral. It is not a disaster. Do not use drawback for a fatal flaw you should have called a fatal flaw.',
    ['The only drawback is the 7 a.m. start; the teaching itself is strong.', 'A serious drawback of the app is that it needs a signal the hall does not have.'],
    'A downside / disadvantage. Everyday: the catch / downside. Close: disadvantage. Neutral, not a catastrophe. Contrast: fatal flaw.',
    ['downside']
  ),
  dwindle: L(
    'To dwindle is to become gradually smaller or weaker: savings dwindled, numbers dwindled. Shrink is everyday; decline is a close formal cousin; peter out stresses coming to a feeble end. Dwindling is a common adjective (dwindling stocks). In speech, shrink little by little or fade is enough. Dwindle is gradual — not a sudden collapse. Do not use it for a planned cut you announced on Monday.',
    ['Savings dwindled over the winter as the heating bills arrived.', 'Attendance dwindled after half-term; the remaining six still deserved a lesson.'],
    'Shrink gradually. Everyday: shrink / fade. Close: decline. Adjective: dwindling. Gradual, not a sudden crash. Contrast: slash / collapse.',
    ['shrink']
  ),
  ecological: L(
    'Ecological means connected with the relationship between living things and their environment: an ecological effect, ecological damage. Environmental is everyday and broader (can include noise, waste policy, human systems); green is informal and political. Ecology is the noun (the study and the web of relations). In speech, to do with nature and habitats is enough. Ecological is scientific in tone. Do not use it as a vague badge for any “nice” product.',
    ['The dam had a serious ecological effect on fish migration.', 'An ecological survey of the field delayed the building by a term.'],
    'Of living things and their habitats. Noun: ecology. Everyday: environmental (broader). Scientific tone. Not a marketing synonym for “green”.',
    ['environmental']
  ),
  ecosystem: L(
    'An ecosystem is a community of living things and their environment, working as a system: a forest ecosystem, a marine ecosystem. Habitat is the place a species lives; environment is broader and looser. The word is also used as a metaphor (a media ecosystem). In speech, the living system of a place is enough. Keep the scientific sense for nature unless you signal the metaphor. Do not call a staffroom an ecosystem without irony or a clear analogy.',
    ['The forest is a rich ecosystem: soil, insects, birds, and the canopy as one system.', 'Destroying one wetland can unravel an ecosystem far beyond the fence line.'],
    'Living things plus their environment as a system. Everyday: the living system of a place. Contrast: habitat (a species’ place). Also a metaphor for networks.',
    ['habitat']
  ),
  elite: L(
    'An elite is a small group with unusual power, money, or skill: a political elite, an elite squad. Top group is the everyday paraphrase; establishment is close for those who already hold power; cream is informal. Elite is also an adjective (elite training). Elitism and elitist are usually critical. In speech, a small top group is enough. The noun can be descriptive or hostile depending on tone. Do not call any good team an elite unless the exclusivity is the point.',
    ['The club is open only to an elite; talent alone does not unlock the door.', 'Elite coaching helped the squad; elitist admissions talk alienated the town.'],
    'A small top group (power, money, or skill). Also an adjective. Everyday: a small top group. Close: establishment (power already held). Related: elitist (critical).',
    ['establishment']
  ),
  empathy: L(
    'Empathy is the ability to understand another person’s feelings: show empathy, empathy with / for a student. Sympathy is feeling sorry for someone (often from outside); compassion is a wish to help; pity can condescend. Empathetic (or empathic) is the adjective; empathise is the verb (British spelling). In speech, understanding how they feel is enough. Empathy is understanding, not agreement. Do not confuse it with sympathy, and do not claim empathy as a substitute for fair procedure.',
    ['Good teachers show empathy without dropping the standard.', 'Empathy with the angry parent did not mean rewriting the mark; it meant listening first.'],
    'Understanding another’s feelings. Verb: empathise. Adjective: empathetic. Everyday: understanding how they feel. Contrast: sympathy (sorry for), pity.',
    ['compassion']
  ),
  empower: L(
    'To empower is to give someone the power, confidence, or right to do something: empower learners to speak, legally empowered to act. Enable is a close cousin (make it possible); authorise is official permission; allow is everyday and weaker. Empowerment is the noun — common in policy, sometimes mocked as jargon. In speech, give them the confidence / the right is enough. Empower should name a real shift in power or skill. Do not use it as a poster verb for a two-hour workshop that changes nothing.',
    ['The course empowers learners to speak by giving them phrases they can actually use.', 'Governors are empowered by the articles to suspend a policy; a slogan is not a power.'],
    'Give power, confidence, or a right. Everyday: enable / give the right. Close: authorise (official). Noun: empowerment (policy tone; can sound like jargon).',
    ['enable']
  ),
  enrich: L(
    'To enrich is to improve the quality of something by adding to it: enrich your vocabulary, soil enriched with compost. Improve is everyday and broader; enhance is a close formal cousin; supplement is add extra. Enrichment is the noun (an enrichment programme). In chemistry, enriched uranium is a technical sense. In speech, make it richer / better is enough. Enrich implies added value, not a complete rebuild. Do not use it for gilding a bad essay with one fancy word.',
    ['Reading widely will enrich your vocabulary more than a list of rare adjectives.', 'The visit enriched the history unit; it did not replace the textbook chapter.'],
    'Make richer or better by adding. Everyday: improve / make richer. Close: enhance. Noun: enrichment. Also technical (enriched fuel). Not a rebuild.',
    ['enhance']
  ),
  entity: L(
    'An entity is something that exists as a separate unit, especially in law or organisation: a legal entity, a separate entity. Organisation and body are everyday in institutions; thing is too loose. In speech, a separate organisation / a separate unit is enough. Entity is official and abstract. It is not a synonym for person in ordinary talk (a legal person can be an entity). Do not call a feeling an entity unless you are doing philosophy on purpose.',
    ['The academy is a separate legal entity from the old local-authority school.', 'Treat the charity and the trading arm as two entities, with two sets of books.'],
    'A separate existing unit (often legal). Everyday: a separate organisation / unit. Official/abstract. Contrast: a person in ordinary talk; a mere idea.',
    ['organisation']
  ),
  epidemic: L(
    'An epidemic is a large number of cases of a disease in a community at one time: a flu epidemic, epidemic levels of measles. Outbreak is everyday and can be smaller; pandemic is worldwide; plague is historical or rhetorical. Epidemic is also an adjective (epidemic proportions). In speech, a widespread outbreak is enough. Metaphor (an epidemic of theft) is common in journalism. Keep the disease sense clear unless you signal the metaphor; do not use epidemic for a handful of cases.',
    ['The city faced a flu epidemic in January; the school switched to staggered breaks.', 'Calling three late essays an epidemic is rhetoric, not public health.'],
    'A widespread outbreak of disease in a community. Everyday: outbreak (can be smaller). Contrast: pandemic (worldwide). Also a journalistic metaphor.',
    ['outbreak']
  ),
  episode: L(
    'An episode is one part of a series, or a single event in a longer story: the first episode, an episode of illness. Part and instalment are close for TV; incident is close for a one-off event. Episodic is the adjective (episodic memory; an episodic plot). In speech, one part / one incident is enough. Keep series and medical/life-event senses apart. Do not call every lesson an episode unless you mean a series.',
    ['I watched the first episode last night; the cliffhanger was shameless.', 'After a brief episode of migraines, she went back to full days, with a plan.'],
    'One part of a series, or one event in a longer stretch. Everyday: part / incident. Adjective: episodic. TV, illness, or a chapter of events.',
    ['instalment']
  ),
  eradicate: L(
    'To eradicate is to destroy or remove something completely: eradicate a disease, eradicate poverty (often aspirational). Wipe out is everyday and blunter; eliminate is a close cousin; destroy is broader. Eradication is the noun. In speech, wipe out or get rid of completely is enough. Eradicate is strong and often public-health or policy. Do not use it for deleting a typo.',
    ['The campaign aims to eradicate the disease from the valley within five years.', 'You cannot eradicate disagreement from a staff meeting; you can chair it.'],
    'Wipe out completely. Everyday: wipe out / get rid of. Close: eliminate. Noun: eradication. Strong; policy and health. Not a small deletion.',
    ['eliminate']
  ),
  essence: L(
    'Essence is the most important quality of something: the essence of the argument, in essence. Heart and core are everyday; gist is the main idea of a text; substance can mean the solid content. Essential is the adjective (necessary) — related but not identical. In speech, the heart of it or basically is enough. In essence means basically. Do not pad essays with “the very essence of” when you mean the main point.',
    ['The essence of the argument is fairness, not novelty.', 'In essence, the policy shifts cost from the centre to families.'],
    'The heart / most important quality. in essence = basically. Everyday: the heart of it / gist. Adjective related: essential (necessary). Avoid padding.',
    ['core']
  ),
  ethnic: L(
    'Ethnic means connected with a group that shares a culture, language, or origin: ethnic communities, ethnic minority. Cultural is broader; racial refers to race categories (sensitive, often less precise for culture). Ethnicity is the noun. In speech, of a cultural or origin group is the idea. Use the word carefully and specifically. Do not use ethnic as a vague synonym for “foreign” or as a food-aisle label that others a cuisine.',
    ['The city has several ethnic communities, each with Saturday language schools.', 'Ethnic monitoring in the survey was optional and explained; it was not a guess from a name.'],
    'Of a group sharing culture, language, or origin. Noun: ethnicity. Contrast: racial; cultural (broader). Precise and respectful; not “foreign” as a catch-all.',
    ['cultural']
  ),
  etiquette: L(
    'Etiquette is the rules of polite behaviour in a particular group or place: email etiquette, table etiquette. Manners is everyday; protocol is official procedure (diplomacy, ceremonies); politeness is the quality, not the code. In speech, the polite rules or how it is done here is enough. Etiquette is local: what is right in a seminar may be wrong in a pub. Do not confuse it with ethics (moral principles).',
    ['Email etiquette on the course: no whole-class replies to a private query.', 'Wedding etiquette baffled him; kindness did not, which was the better guide.'],
    'A code of polite behaviour in a setting. Everyday: manners / the done thing. Close: protocol (official). Contrast: ethics (morals). Local to the group.',
    ['manners']
  ),
  evacuate: L(
    'To evacuate is to move people from a dangerous place to a safer one: evacuate the school, evacuate the area. Leave and get out are everyday; clear is close for a building. Evacuation is the noun. You evacuate people (or, in some uses, a place is evacuated). In speech, get everyone out is enough. Official emergency language. Do not use evacuate for popping out to the shops.',
    ['The school was evacuated after the alarm; registers were taken on the field.', 'Residents were evacuated overnight while the gas leak was traced.'],
    'Move people out to safety. Noun: evacuation. Everyday: get everyone out. Official/emergency. Evacuate people / a building is evacuated. Not a casual exit.',
    ['clear']
  ),
  evade: L(
    'To evade is to avoid something you should face: evade a question, evade tax, evade capture. Avoid is everyday and not always dishonest; dodge is informal; shirk is avoiding duty. Evasion is the noun (tax evasion). Elusive is the adjective for something hard to catch. In speech, dodge or avoid answering is enough. Evade often implies slipping out of an obligation. Do not confuse it with invade (enter by force).',
    ['He evaded the question with a joke, then another joke.', 'Tax evasion is a crime; tax avoidance, in the legal sense, is a different, colder word.'],
    'Avoid facing a duty, question, or capture. Noun: evasion. Everyday: dodge / avoid answering. Often dishonest or slippery. Contrast: avoid (neutral); invade.',
    ['dodge']
  ),
  excel: L(
    'To excel is to be very good at something: excel at public speaking, excel in science. Shine is informal; outstanding is the adjective idea; be good at is everyday and weaker. Excellence is the noun; excellent is the adjective (weaker and more common than excel). The pattern is excel at / in. In speech, be outstanding at is enough. Excel is stronger than “quite good.” Do not confuse the verb with the spreadsheet program (capital E in that name).',
    ['She excels at public speaking and still scripts the first minute.', 'Pupils who excel in one paper can still need support in another; talent is not a blanket.'],
    'excel at / in. Be outstanding. Everyday: be very good at. Noun: excellence. Adjective: excellent (commoner, often weaker). Not the software unless named.',
    ['shine']
  ),
  excerpt: L(
    'An excerpt is a short piece taken from a longer text, film, or piece of music: an excerpt from chapter two, film excerpts. Extract is a close synonym (also a verb: extract a passage); quotation is usually shorter and attributed; clip is informal for film and audio. Excerpt can also be a verb. In speech, a short extract or a clip is enough. An excerpt is a sample, not the whole work. Do not call a paraphrase an excerpt.',
    ['Read this excerpt from chapter two; the rest stays for homework.', 'The documentary used excerpts of interviews, cut to a length that flattened the argument.'],
    'A short taken piece of a longer work. Close: extract. Everyday: a short extract / clip. Also a verb. Contrast: quotation (usually briefer); paraphrase (not an excerpt).',
    ['extract']
  ),
  execute: L(
    'To execute is to carry out a plan or order: execute a plan, execute a command. Carry out is everyday; implement is a close formal cousin. In law, execute also means to kill someone as a punishment — a different, grave sense. Execution is the noun for both (the execution of a strategy; an execution). In speech, carry out is enough for the first sense. Keep the two meanings apart: in a classroom, execute the plan should never be heard as the legal sense. Context and tone do the work; do not be casual with the death-penalty meaning.',
    ['The team executed the plan well: roles, times, and a fallback if the bus failed.', 'In legal history, execute can mean put to death; that is not how you “execute” a lesson plan.'],
    'Carry out a plan/order. Everyday: carry out. Close: implement. Noun: execution. Legal: put to death (keep this sense clearly separate).',
    ['implement']
  ),
  exempt: L(
    'Exempt means free from a duty, payment, or rule that applies to others: exempt from the fee, tax-exempt. Free from is everyday; excused is close for a person let off a requirement. Exempt is also a verb (exempt someone from). Exemption is the noun. The pattern is exempt from. In speech, do not have to pay / not required is enough. Official. An exemption is a rule, not a favour you invent on the spot.',
    ['Students are exempt from the fee if they receive the bursary.', 'The clinic is exempt from the parking charge; visitors are not.'],
    'exempt from + duty/rule. Also a verb. Noun: exemption. Everyday: not required / let off. Official. Contrast: a one-off favour with no rule.',
    ['excused']
  ),
  exert: L(
    'To exert is to use power, influence, or effort: exert pressure, exert influence, exert yourself. Use and put pressure on are everyday; apply is close for force. Exertion is the noun (physical effort). In speech, use / put pressure on is enough. Slightly formal. You exert a force or an influence; you do not “exert a meeting.” Do not confuse it with excerpt (a short extract).',
    ['Do not exert too much pressure on the class in the week of mocks.', 'She exerted herself in the last kilometre and still finished smiling.'],
    'Use power, influence, or effort. exert pressure / influence; exert yourself. Everyday: use / put pressure on. Noun: exertion. Contrast: excerpt.',
    ['apply']
  ),
}
