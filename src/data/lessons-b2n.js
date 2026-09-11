const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2N = {
  icon: L(
    'An icon is a small picture on a screen, or a famous person or emblem: a lock icon; a cultural icon. Symbol is wider; logo is a brand mark. The portal used a lock icon beside malpractice warnings. Mix-up: iconoclast (already elsewhere) attacks icons. Do not call every celebrity an icon.',
    ['The board used a lock icon beside every malpractice warning on the portal.', 'She became an icon of the suffrage movement, which is the people sense.'],
    'a lock / save icon; a cultural / fashion icon. Computing and profiles. Wider: symbol. Brand: logo. Countable.',
    ['symbol']
  ),
  ideal: L(
    'Ideal means perfect, or the best you can imagine: an ideal sample; ideal conditions. Perfect is stronger and rarer in methods. As a noun: an ideal of fairness. An ideal sample would be random. Mix-up: idea is a thought (already in the dictionary). Do not call a messy compromise ideal.',
    ['An ideal sample would be random; ours is a volunteer cohort.', 'The site was not ideal in rain, which still needs stating in limitations.'],
    'an ideal + noun; ideal for. Noun: an ideal. Close: perfect. Methods and planning. Trap: idea.',
    ['perfect']
  ),
  ideally: L(
    'Ideally means in a perfect situation: ideally we would…; ideally in March. Preferably is close but weaker. Ideally the fieldwork is in March. Use it to mark a hope, then state what actually happened. Do not start every paragraph with ideally.',
    ['Ideally the fieldwork is in March, but the tide tables slipped.', 'Ideally every script is scanned; this centre still uses paper, which is the contrast.'],
    'ideally + clause. Close: preferably. Signals a preferred world, then reality. Planning, methods, and itineraries.',
    ['preferably']
  ),
  idle: L(
    'Idle means not working or not being used: sit idle; idle machinery. Lazy is a criticism of people; idle can be either unused or lazy. The printers sat idle. As a verb: idle away an afternoon (informal). Do not call a quiet, working student idle.',
    ['The lab printers sat idle during the outage, so scripts were handwritten.', 'An idle rumour reached the group chat, which is the “baseless” sense.'],
    'sit idle; idle plant / time. People (critical): lazy. Verb: idle. Engineering and news. Unused, not always lazy.',
    []
  ),
  idiom: L(
    'An idiom is a set phrase whose meaning is not the sum of the words: kick the bucket; a sporting idiom. Phrase is wider; proverb is a moral saying. Do not translate the idiom word for word. Idiomatic English is a listening trap. Do not call any long sentence an idiom.',
    ['Do not translate the idiom word for word in the reading paper.', 'The commentary asked whether the dialect was idiom or idiolect, which is the language sense.'],
    'an idiom; idiomatic English. Wider: phrase. Moral saying: proverb. Reading and translation papers. Set meaning, not a proverb every time.',
    ['phrase']
  ),
  ignorant: L(
    'Ignorant means not knowing facts, or rude through lack of awareness: ignorant of the rules; an ignorant remark. Unaware is milder; stupid is an insult and not a synonym. The tweet was called ignorant of safeguarding. Noun: ignorance (already in the dictionary). Do not use it as a casual insult in coursework.',
    ['The briefing called the tweet ignorant of the safeguarding rules.', 'Ignorant of the embargo, a parent posted the grades, which is the “not knowing” sense.'],
    'ignorant of + noun. Milder: unaware. Noun: ignorance. Loaded if aimed at a person. News and ethics. Not a synonym of stupid.',
    ['unaware']
  ),
  illuminate: L(
    'To illuminate is to light something, or to make an idea clearer: illuminate a path; a comment that illuminates the text. Light is everyday; clarify is the idea-sense twin. Street lights will illuminate the cycle path. Formal register in essays. Do not use it for a desk lamp in casual speech.',
    ['Street lights will illuminate the cycle path after the inquest.', 'A footnote can illuminate an obscure allusion, which is the criticism sense.'],
    'illuminate a street / text / debate. Everyday (light): light up. Ideas: clarify. Formal. Planning inquiries and literature.',
    ['clarify']
  ),
  imagery: L(
    'Imagery is language that creates pictures (usually uncountable): vivid imagery; war imagery. Image is a single picture or public impression (already in the dictionary). Comment on the imagery in stanza two. Do not write “an imagery”. Mix-up: imagination is the faculty of inventing.',
    ['Comment on the imagery in stanza two, not just the plot.', 'Religious imagery runs through the speech, which is the rhetoric sense.'],
    'vivid / religious / visual imagery. Uncountable. Single picture: image. Literature papers. Not imagination.',
    []
  ),
  imbalance: L(
    'An imbalance is an unequal or unfair proportion: a gender imbalance; an imbalance of power. Balance is the opposite noun (already in the dictionary). An imbalance skewed the comparison. Trade imbalance is economics. Do not use it for a slightly wobbly table.',
    ['An imbalance in the sample skewed the gender comparison.', 'A trade imbalance widened after the harvest failed, which is the economics sense.'],
    'an imbalance of / in; a gender / power / trade imbalance. Opposite: balance. Methods and economics. Unequal weights, not a wobbly desk.',
    []
  ),
  imitate: L(
    'To imitate is to copy speech, looks, or behaviour: imitate a voice; imitate a method. Copy is everyday; mimic is close and sometimes comic. Do not imitate another candidate’s phrasing. Noun: imitation. Do not use imitate for downloading a file.',
    ['Do not imitate another candidate’s phrasing; that is malpractice.', 'The chick imitated the parent call, which is the biology sense.'],
    'imitate + noun / a person. Everyday: copy. Close: mimic. Noun: imitation. Malpractice and biology. Copying manner, not “save as”.',
    ['copy']
  ),
  imitation: L(
    'An imitation is a copy, often cheaper or less authentic: imitation leather; in imitation of. Fake is blunter and more moral. The stall sold imitation certificates. Uncountable: imitation as a process. Mix-up: limitation is a restriction.',
    ['The street stall sold imitation certificates that failed the hologram check.', 'In imitation of the original, the pastiche kept the rhyme, which is the literary sense.'],
    'imitation leather / goods; in imitation of. Blunter: fake. Process (uncountable): imitation. Trap: limitation. Consumer and literature papers.',
    ['copy']
  ),
  immense: L(
    'Immense means extremely large or great: immense pressure; an immense task. Huge is everyday; vast is close for space. The backlog created immense pressure. Register is slightly formal. Do not use immense for a slightly large sandwich.',
    ['The backlog of remarks created immense pressure on exams officers.', 'The canyon is immense, which is the physical-scale sense.'],
    'immense pressure / scale / relief. Everyday: huge. Close: vast. Formal. News and evaluations. Extreme size, not “quite big”.',
    ['huge']
  ),
  immunity: L(
    'Immunity is protection from disease, or from legal penalty: herd immunity; diplomatic immunity. Immune is the adjective (already in the dictionary). Herd immunity was misquoted. Uncountable in most uses. Handle the legal sense precisely — it is not “getting away with it” in slang.',
    ['Herd immunity was misquoted in the public-health essay, the examiner noted.', 'Diplomatic immunity featured in the case study, which is the legal sense.'],
    'herd / diplomatic immunity; immunity from prosecution. Adjective: immune. Public health and law. Usually uncountable. Not a joke about chores.',
    []
  ),
  immunise: L(
    'To immunise (UK) is to protect against disease by vaccination: immunise staff; immunise a population. US spelling is immunize. Vaccinate is the everyday twin. The trust will immunise staff. Noun: immunisation. Do not write immunise for “make someone immune to criticism”.',
    ['The trust will immunise staff before the winter ward rotation.', 'US papers prefer immunize; UK boards still use immunise, which is a spelling point.'],
    'immunise against; immunise a cohort. US: immunize. Everyday: vaccinate. Noun: immunisation. NHS and biology. Literal disease sense in exams.',
    ['vaccinate']
  ),
  imperial: L(
    'Imperial relates to an empire, or to UK non-metric units: imperial policy; imperial pints. Metric is the contrast for units. Convert imperial units before you plot. History: the imperial court. Do not call a county council imperial.',
    ['Convert imperial units before you plot the fieldwork graph.', 'Imperial preference is a staple of the empire paper, which is the history sense.'],
    'imperial units / pints; imperial power / court. Contrast (units): metric. History and geography. Not a local council.',
    []
  ),
  implementation: L(
    'Implementation is putting a plan or law into action (often uncountable): implementation of the rubric; delayed implementation. Implement is the verb (already in the dictionary). Implementation slipped a term. Policy English. Do not use it for assembling a shelf.',
    ['Implementation of the new rubric slipped a term after the strike.', 'Poor implementation, not the idea, sank the pilot, which is the evaluation sense.'],
    'implementation of; delayed / phased implementation. Verb: implement. Policy, IT, and exam boards. Uncountable in many uses. Action, not furniture.',
    []
  ),
  imprison: L(
    'To imprison is to put someone in prison: imprison offenders; imprisoned without trial. Jail (verb) is more informal; detain can be shorter and not always a prison. The court may imprison offenders. Sensitive legal register. Do not use it for a weekend detention.',
    ['The court may imprison offenders who leak unmarked scripts, counsel warned.', 'Campaigners said the journalist should not be imprisoned, which is the rights sense.'],
    'imprison someone for / without trial. Informal: jail. Noun: imprisonment. Courts and human-rights news. Not school detention.',
    ['jail']
  ),
  imprisonment: L(
    'Imprisonment is being in prison, or a prison sentence: a term of imprisonment; false imprisonment. Prison is the place; imprisonment is the state or the sentence. Sentencing remarks mentioned imprisonment. Legal and news. Do not use it for being stuck in a lift.',
    ['The sentencing remarks mentioned imprisonment as a last resort.', 'False imprisonment is a civil claim, which is the legal-sense trap.'],
    'a term of imprisonment; life imprisonment; false imprisonment. Place: prison. Legal register. Countable as a sentence in some uses. Not a metaphor for boredom.',
    []
  ),
  improvise: L(
    'To improvise is to invent or provide something without a plan, using what you have: improvise seating; improvise a solo. Make do is informal; prepare is an opposite. Invigilators had to improvise seating. Jazz and emergencies. Do not call a fully rehearsed speech improvised.',
    ['Invigilators had to improvise seating when the west hall flooded.', 'The drama paper asked how actors improvise from a prompt, which is the performance sense.'],
    'improvise a + noun; improvise on. Informal: make do. Noun: improvisation. Exams, jazz, and fieldwork. Unplanned, not rehearsed.',
    []
  ),
  impulsive: L(
    'Impulsive means acting suddenly without thinking: an impulsive click; an impulsive buy. Spontaneous can be positive; reckless is harsher. An impulsive click submitted the empty script. Impulse is the noun (already in the dictionary). Do not praise an impulsive methods change in a lab write-up.',
    ['An impulsive click submitted the empty script before the clock stopped.', 'An impulsive purchase is a staple of the consumer-behaviour case, which is the economics sense.'],
    'an impulsive decision / buy / click. Noun: impulse. Positive twin: spontaneous. Harsher: reckless. Portals and consumer studies.',
    []
  ),
  inability: L(
    'Inability is not being able to do something (usually uncountable): inability to upload; inability to pay. Ability is the opposite (already in the dictionary). Inability to upload is not automatic special consideration. Formal. Do not use it for “I forgot”.',
    ['Inability to upload the file is not, by itself, grounds for special consideration.', 'Inability to pay the fare is not a defence, the notice said, which is the legal sense.'],
    'inability to + verb. Opposite: ability. Formal noun. Appeals, law, and medicine. Uncountable. Not a synonym of refusal.',
    []
  ),
  incidentally: L(
    'Incidentally adds a side point: incidentally, the source is a blog. By the way is the informal twin. Incident is a noun for an event (already in the dictionary). Use incidentally sparingly in essays — it can sound chatty. Do not use it to hide a key argument.',
    ['Incidentally, the source is a blog, which weakens the citation.', 'Incidentally is too chatty for a methods paragraph, which is a register warning.'],
    'incidentally, + clause. Informal: by the way. Noun cousin: incident. Side remarks, not the thesis. Essays: use sparingly.',
    []
  ),
  incoming: L(
    'Incoming means arriving or about to take office: incoming Year 12s; incoming tide; incoming government. Outgoing is an opposite for a person leaving office. Incoming students sat a diagnostic. News and schools. Do not use incoming for a parcel you already opened last week.',
    ['Incoming Year 12s sat a diagnostic before option blocks closed.', 'The incoming tide covered the quadrat, which is the geography sense.'],
    'incoming students / government / tide / fire. Opposite (office): outgoing. Schools, politics, and coasts. Arriving, not already here.',
    []
  ),
  inconsistent: L(
    'Inconsistent means not staying the same, or containing contradictions: inconsistent statements; inconsistent with the data. Consistent is the opposite (already in the dictionary). Witness statements were inconsistent. Evaluation word. Do not call one typing error inconsistent.',
    ['The witness statements were inconsistent on the time of the alarm.', 'Results were inconsistent with the hypothesis, which is the science sense.'],
    'inconsistent with; inconsistent statements / quality. Opposite: consistent. Noun: inconsistency. Methods, law, and sport. Pattern, not one slip.',
    []
  ),
  incorrectly: L(
    'Incorrectly means in a wrong way: spelled incorrectly; incorrectly labelled. Wrongly is close; falsely can mean dishonest. Candidates who bubbled incorrectly lost a paper. Correctly is the opposite. Do not use incorrectly if you mean unfairly.',
    ['Candidates who bubbled the candidate number incorrectly lost a paper.', 'The axis was labelled incorrectly, which is the graph sense.'],
    'spell / label / answer incorrectly. Close: wrongly. Opposite: correctly. Papers and labs. Error, not injustice.',
    ['wrongly']
  ),
  increasing: L(
    'Increasing means becoming larger: increasing concern; an increasing number. Increase is the verb/noun (already in the dictionary). Increasingly is the adverb (already in the dictionary). There is increasing concern about AI coursework. Do not write “increasingly number”.',
    ['There is increasing concern about AI-written coursework, boards said.', 'An increasing share of scripts is scanned, which is the trend sense.'],
    'increasing concern / numbers / pressure. Verb/noun: increase. Adverb: increasingly. News and reports. Participle adjective.',
    []
  ),
  incredible: L(
    'Incredible means amazingly good or large, or hard to believe: an incredible recovery; an incredible claim. Unbelievable is close; incredulous describes a person who cannot believe (already elsewhere). Cite the table even if turnout looks incredible. Informal praise — careful in methods. Mix-up: incredulous ≠ incredible.',
    ['The recovery in turnout was incredible, but still cite the ONS table.', 'The alibi was incredible, which is the “hard to believe” sense.'],
    'incredible + noun; pretty incredible (informal). Close: unbelievable. Trap: incredulous (a person). Reviews vs methods: tone down in labs.',
    ['unbelievable']
  ),
  indefinite: L(
    'Indefinite means not fixed, or with no set end: an indefinite walkout; an indefinite article (grammar: a/an). Definite is an opposite. The walkout was indefinite. Grammar: the indefinite article. Do not use it for “I have not decided my argument yet” in a vague way.',
    ['The walkout was indefinite until the pay offer was published.', 'Use the indefinite article before a singular countable, which is the grammar sense.'],
    'an indefinite strike / delay / period; the indefinite article. Opposite: definite. Unions, visas, and grammar. No fixed end — not merely vague prose.',
    []
  ),
  indoor: L(
    'Indoor describes things used or happening inside a building: indoor athletics; an indoor market. Indoors is the adverb (already in the dictionary): stay indoors. The indoor trials moved to the sports hall. Outdoor is the opposite adjective. Do not write “go indoor”.',
    ['The indoor athletics trials moved to the sports hall after the frost.', 'An indoor market replaced the stalls, which is the retail sense.'],
    'indoor + noun (pool / sport / plant). Adverb: indoors. Opposite: outdoor / outdoors. Sport and buildings. Adjective, not “go indoor”.',
    []
  ),
  industrialise: L(
    'To industrialise (UK) is to develop factories and industry on a large scale: industrialise a region; Britain industrialised early. US spelling is industrialize. Industrial is the adjective (already in the dictionary). The essay asked how Britain industrialised. Noun: industrialisation. Do not use it for decorating a classroom with posters.',
    ['The essay asked how Britain industrialised before its European rivals.', 'US style guides prefer industrialize; UK boards still use industrialise, which is a spelling point.'],
    'industrialise a country / economy. US: industrialize. Noun: industrialisation. Adjective: industrial. History and development geography.',
    []
  ),
  ineffective: L(
    'Ineffective means not producing the result you want: ineffective notice; an ineffective treatment. Useless is blunter; inefficient means wasting effort even if something partly works. A last-minute email was ineffective as notice. Effective is the opposite (already in the dictionary). Do not mix with inefficient.',
    ['A last-minute email was ineffective as notice of the venue change.', 'The drug proved ineffective in the trial, which is the medical sense.'],
    'ineffective as / in; an ineffective policy. Opposite: effective. Trap: inefficient (waste). Evaluations, medicine, and management.',
    []
  ),
  inexpensive: L(
    'Inexpensive means low in price, more neutral than cheap: an inexpensive drive; inexpensive housing. Cheap can suggest poor quality. An inexpensive USB drive is still better than emailing coursework. Formal shopping and economics. Do not call a luxury brand inexpensive ironically unless you mark the tone.',
    ['An inexpensive USB drive is still better than emailing coursework.', 'Inexpensive options were listed for the trip, which is the finance-letter sense.'],
    'inexpensive + noun. Blunter: cheap (quality risk). Opposite: expensive. Neutral register. Letters, consumer, and fieldwork budgets.',
    ['cheap']
  ),
  inexperienced: L(
    'Inexperienced means having little practice: inexperienced invigilators; inexperienced drivers. Inexperience is the noun. New is wider and less about skill. Inexperienced staff must not open the packet. Neutral or mildly critical. Do not use it as a sneer at a strong candidate who is simply young.',
    ['Inexperienced invigilators must not open the packet before the hour.', 'An inexperienced driver still sat the theory, which is the DVSA sense.'],
    'inexperienced + staff / driver / teacher. Noun: inexperience. Wider: new. Training and safety notices. Skill gap, not an insult.',
    []
  ),
  inference: L(
    'An inference is a conclusion from evidence, not from a direct statement: draw an inference; an inference from the data. Infer is the verb (already in the dictionary). The reading paper rewards inference. Implication is what a speaker suggests. Do not write “the inference says” if the text states it outright.',
    ['The reading paper rewards inference, not copying a line of the text.', 'State the inference, then the evidence, which is the science write-up pattern.'],
    'draw / make an inference; an inference from. Verb: infer. Contrast: a stated fact; implication (speaker’s hint). Reading and labs.',
    ['conclusion']
  ),
  infinite: L(
    'Infinite means without limit or end: infinite patience; an infinite set. Finite is the opposite (already in the dictionary). Do not claim a tweet corpus is infinite if n = 200. Maths: infinite series. Endless is everyday. Do not use infinite for “quite a lot”.',
    ['Do not claim the universe of tweets is infinite; your sample is 200.', 'Treat infinity as a concept, not a number you can measure, which is the maths sense.'],
    'infinite + noun; an infinite set / loop. Opposite: finite. Everyday: endless. Maths and rhetoric. Not a synonym of large.',
    ['endless']
  ),
  inflict: L(
    'To inflict is to make someone suffer something: inflict delays on; inflict damage. Cause is wider and milder. The outage inflicted delays. Pattern: inflict something on someone. Formal and often negative. Do not inflict a “nice surprise” — the verb expects harm.',
    ['The outage inflicted delays on every results-day login in the trust.', 'The storm inflicted damage on the coastal path, which is the disaster sense.'],
    'inflict something on someone; inflict damage / casualties / a penalty. Wider: cause. Formal, negative. News and history. Harm, not gifts.',
    []
  ),
  influx: L(
    'An influx is a large arrival of people or things: an influx of requests; an influx of tourists. Inflow is close for money or water. An influx of remark requests crashed the portal. Usually singular with of. Do not use influx for one visitor.',
    ['An influx of remark requests crashed the portal on Friday afternoon.', 'An influx of meltwater raised the river, which is the geography sense.'],
    'an influx of + plural noun. Close (money/water): inflow. News, tourism, and hydrology. Large arrival, not a trickle.',
    []
  ),
  informant: L(
    'An informant is someone who supplies information, especially to police or researchers: a police informant; an ethnographic informant. Informer can sound like a snitch; source is looser in journalism. Anonymise each informant. Ethics and crime news. Do not call a cited textbook an informant.',
    ['The ethnography must anonymise each informant in the methods annex.', 'A police informant was relocated, which is the crime-news sense.'],
    'a police / research informant. Journalism: source. Loaded twin: informer / snitch. Methods ethics. A person, not a book.',
    ['source']
  ),
  inhabit: L(
    'To inhabit is to live in a place: inhabit an island; species that inhabit spoil heaps. Live is everyday; occupy can mean take over. Few species inhabit the heaps. Inhabitant is the person noun (already in the dictionary). Formal/science. Do not inhabit a seat for five minutes and call it inhabiting.',
    ['Few species inhabit the spoil heaps, the ecology paper noted.', 'Communities that inhabit the floodplain were mapped, which is the human-geography sense.'],
    'inhabit a place / habitat. Everyday: live in. Person: inhabitant. Ecology and geography. Formal. Residence, not a short visit.',
    ['live']
  ),
  inheritance: L(
    'Inheritance is money or property from someone who has died, or a genetic trait: an inheritance; inheritance tax; genetic inheritance. Inherit is the verb (already in the dictionary). Inheritance tax featured in the case study. Uncountable in the tax/genetic senses; countable as a legacy. Mix-up: heritage is culture passed down.',
    ['Inheritance tax featured in the economics case study on family firms.', 'Genetic inheritance explained the pedigree chart, which is the biology sense.'],
    'an inheritance; inheritance tax; genetic inheritance. Verb: inherit. Close (culture): heritage. Economics, law, and biology.',
    []
  ),
  injustice: L(
    'Injustice is unfair treatment, or an unfair event: a grave injustice; injustice in sentencing. Justice is the opposite noun (already in the dictionary). Unfairness is everyday. The editorial overclaimed an injustice. Formal and moral. Do not use it for a late bus unless you argue a rights point.',
    ['The editorial called the late bus an injustice, which overclaimed the evidence.', 'The report documented injustice in housing allocations, which is the policy sense.'],
    'an injustice; a sense of injustice. Opposite: justice. Everyday: unfairness. Editorials and law. Stronger than a inconvenience.',
    ['unfairness']
  ),
  inquest: L(
    'An inquest is a UK coroner’s official inquiry, usually into a sudden death: open an inquest; an inquest jury. Inquiry is wider; trial is criminal. The inquest will hear why the lights failed. News register. Do not call a school complaint an inquest.',
    ['The inquest will hear why the crossing lights failed in fog.', 'The coroner opened an inquest, which is the set legal phrase.'],
    'open / hold an inquest; an inquest into. Wider: inquiry. Criminal: trial. UK coroners and news. Death investigations, not staff meetings.',
    []
  ),
  input: L(
    'Input is ideas, work, or data put into a system (often uncountable): staff input; data input. As a verb: input the scores. Output is the opposite in computing. Staff input was invited too late. Computing and meetings. Do not use input for a witty remark unless you mean a contribution.',
    ['Staff input was invited, but the timetable had already gone to print.', 'Input the marks twice to check, which is the data-entry sense.'],
    'staff / user / data input; input into. Verb: input. Opposite (IT): output. Meetings and computing. Contribution or data, not a punchline.',
    []
  ),
  insecure: L(
    'Insecure means not confident, or not safe/fixed: feel insecure; an insecure lock; insecure work. Secure is the opposite (already in the dictionary). Candidates felt insecure about oral grades. Psychology and safety. Mix-up: insurance is the policy (already in the dictionary).',
    ['Candidates felt insecure about oral grades after the recording failed.', 'An insecure fastening failed in the wind-tunnel test, which is the physical sense.'],
    'feel insecure about; insecure work / housing / lock. Opposite: secure. Noun: insecurity. Pastoral, labour, and engineering.',
    []
  ),
  insecurity: L(
    'Insecurity is lack of confidence, or lack of safety: job insecurity; food insecurity. Insecure is the adjective. Uncountable in policy English. Job insecurity featured in the union briefing. Do not use it only for teenage shyness if the text is about contracts.',
    ['Job insecurity among hourly invigilators featured in the union briefing.', 'Food insecurity rose after the benefit change, which is the policy sense.'],
    'job / food / housing insecurity; a sense of insecurity. Adjective: insecure. Uncountable in reports. Labour and welfare. Not only shyness.',
    []
  ),
  insert: L(
    'To insert is to put something into something else: insert a sheet; insert a clause. Put in is everyday; implant is medical/tech. Insert the candidate number. As a noun: a magazine insert. Formal instructions. Mix-up: desert / dessert are unrelated.',
    ['Insert the candidate number on every extra sheet before you seal the pack.', 'Insert a control in the experiment, which is the methods sense.'],
    'insert something into / on; insert a clause / card. Everyday: put in. Noun: an insert. Rubrics and publishing. Placement, not desert.',
    []
  ),
  insider: L(
    'An insider belongs to a group and knows its private information: an industry insider; insider dealing. Outsider is the opposite. An insider leaked the boundaries. News and finance (insider trading). Do not call a year-7 who knows the canteen menu an insider in a serious story.',
    ['An insider leaked the grade boundaries before the embargo lifted.', 'Insider dealing is a criminal offence, which is the City sense.'],
    'an insider; insider dealing / trading / knowledge. Opposite: outsider. News and FCA English. Privileged access, not a casual fan.',
    []
  ),
  insignificant: L(
    'Insignificant means too small or unimportant to count: an insignificant difference; statistically insignificant. Significant is the opposite (already in the dictionary). Do not dismiss an outlier as insignificant without a test. Science and evaluation. Mix-up: insignificant ≠ invisible.',
    ['Do not dismiss an outlier as insignificant without a test.', 'The extra cost was insignificant beside the grant, which is the money sense.'],
    'statistically insignificant; an insignificant + noun. Opposite: significant. Labs and evaluations. Small effect, not “cannot be seen”.',
    []
  ),
  inspiration: L(
    'Inspiration is a person or thing that sparks ideas, or a burst of creative energy (often uncountable): a source of inspiration; inspiration for the poem. Inspire is the verb (already in the dictionary). Evidence the mill chimney as inspiration. Science also: breathing in (specialist). Do not write “an inspiration” for every mildly helpful teacher unless you mean it.',
    ['The poet cited the mill chimney as inspiration, which the commentary must evidence.', 'A moment of inspiration is not a methods section, which is the exam warning.'],
    'inspiration for / from; a source of inspiration. Verb: inspire. Uncountable in many uses. Literature and speeches. Ideas, not inhalation in English papers.',
    []
  ),
  installation: L(
    'An installation is putting equipment in place, or an artwork in a space: installation of scanners; a video installation. Install is the verb (already in the dictionary). Installation slipped, so packs were logged by hand. IT, art, and military (a base). Mix-up: instalment is a payment (already in the dictionary).',
    ['Installation of the scanners slipped, so packs were logged by hand.', 'The Turbine Hall installation is a set trip, which is the art sense.'],
    'installation of equipment; an art installation. Verb: install. Trap: instalment (payment). IT, galleries, and engineering.',
    []
  ),
  instantly: L(
    'Instantly means at once: flagged instantly; instantly recognisable. Immediately is close (already in the dictionary); instant is the adjective/noun. The portal flagged the duplicate instantly. Slightly stronger/snappier than soon. Do not use instantly for a process that took a week.',
    ['The portal flagged the duplicate upload instantly.', 'The motif is instantly recognisable, which is the literature sense.'],
    'instantly + verb; instantly recognisable. Close: immediately. Adjective: instant. Tech and description. No delay — not “later that term”.',
    ['immediately']
  ),
  instinct: L(
    'Instinct is a natural tendency to act without thinking: herd instinct; on instinct. Intuition is close but more about a felt judgement. Herd instinct is not a sampling method. Biology and psychology. Do not call a revised essay plan instinct if it was taught.',
    ['Herd instinct is not a method; justify the sampling frame.', 'The goalkeeper dived on instinct, which is the sport sense.'],
    'on instinct; herd / survival instinct. Close: intuition. Adjective: instinctive. Biology, sport, and essays on behaviour. Innate, not trained.',
    []
  ),
  instinctive: L(
    'Instinctive means automatic, without conscious thought: an instinctive reaction; instinctive distrust. Instinctual is rarer. An instinctive guess is not evaluation. Instinct is the noun. Do not label a rehearsed technique instinctive.',
    ['An instinctive guess is not evaluation; show the working.', 'An instinctive flinch delayed the catch, which is the physical sense.'],
    'an instinctive reaction / grasp. Noun: instinct. Adverb: instinctively. Exams and sport. Automatic — not a taught method.',
    []
  ),
  intact: L(
    'Intact means complete and undamaged: keep the seal intact; the facade is intact. Whole is close; unbroken is physical. Keep the seal intact until the start time. Archaeology and exam security. Do not use intact for a file you have already edited.',
    ['Keep the seal intact until the scheduled start time.', 'The nave survived the fire largely intact, which is the heritage sense.'],
    'remain / keep intact; largely intact. Close: undamaged / whole. Packets, buildings, and bones. Unbroken completeness.',
    ['undamaged']
  ),
  intensify: L(
    'To intensify is to become or make something stronger: protests intensified; intensify the search. Increase is wider; escalate is close for conflict. Protests intensified after the bursary freeze. News and weather (intensify into a gale). Do not intensify a polite email into a rant in the same sentence without evidence.',
    ['Protests intensified after the sixth-form bursary was frozen.', 'The low will intensify overnight, which is the Met Office sense.'],
    'intensify into; intensify a campaign / search. Wider: increase. Conflict: escalate. Noun: intensification. News and weather.',
    []
  ),
  intensity: L(
    'Intensity is the strength of a feeling, light, effort, or process: rainfall intensity; the intensity of the debate. Intense is the adjective (already in the dictionary). Plot intensity, not just totals. Science and sport. Mix-up: intensive means concentrated in time (already in the dictionary).',
    ['Plot rainfall intensity, not just daily totals, the geography mark scheme said.', 'Training intensity rose before the trials, which is the sport sense.'],
    'rainfall / light / training intensity; the intensity of. Adjective: intense. Trap: intensive. Geography, physics, and PE.',
    []
  ),
  intent: L(
    'Intent is purpose — what someone means to do: with intent; intent to cheat; intent on finishing. Intention is close (already in the dictionary) and often more everyday. The email showed no intent to cheat. Legal: with intent. As an adjective: intent on. Mix-up: intense is strong feeling.',
    ['The email showed no intent to cheat, the malpractice panel found.', 'She was intent on finishing the practical, which is the adjective.'],
    'with intent; intent to + verb; intent on. Close noun: intention. Legal and panels. Trap: intense. Purpose, not volume of feeling.',
    ['intention']
  ),
  interactive: L(
    'Interactive means two-way, or allowing the user to control it: an interactive exhibit; interactive whiteboard. Interact is the verb (already in the dictionary). The museum’s interactive exhibit crashed. Computing and teaching. Do not call a printed worksheet interactive.',
    ['The museum’s interactive exhibit crashed during the history trip.', 'Interactive tasks scored higher on engagement, which is the pedagogy sense.'],
    'an interactive exhibit / whiteboard / map. Verb: interact. Noun: interaction. Museums, ICT, and teaching. Two-way, not a poster.',
    []
  ),
  intercept: L(
    'To intercept is to stop someone or something before they arrive: intercept a pass; intercept a leak. Stop is wider; ambush is military/hostile. Officers intercepted the leaked paper. Sport and security. Noun: interception. Do not intercept a parcel that was delivered to you normally.',
    ['Officers intercepted the leaked paper before it reached social media.', 'The full-back intercepted the cross, which is the sport sense.'],
    'intercept a pass / message / shipment. Noun: interception. Wider: stop. Sport, police, and signals. Cut off in transit.',
    []
  ),
  interference: L(
    'Interference is unwanted involvement, or noise that spoils a signal: political interference; radio interference. Interfere is the verb (already in the dictionary). Political interference in marking is denied. Uncountable in most uses. Sport: interference in a race. Do not use it for helpful advice you asked for.',
    ['Political interference in marking is denied in every board statement.', 'Radio interference spoiled the listening file, which is the technical sense.'],
    'political / outside interference; interference in / with. Verb: interfere. Uncountable. Boards, sport, and physics (waves). Unwanted, not invited help.',
    []
  ),
  intermediate: L(
    'Intermediate means between two levels or stages: intermediate Spanish; an intermediate station. Medium is looser; advanced and beginner are the poles. Intermediate is not an A-level equivalent. Education, chemistry (intermediate product), and transport. Do not call a final draft intermediate.',
    ['Intermediate Spanish is not an A-level equivalent, the admissions note said.', 'An intermediate product appears in the reaction scheme, which is the chemistry sense.'],
    'intermediate level / course / station. Poles: beginner / advanced. Chemistry: an intermediate. Admissions and science. Mid-stage, not finished.',
    []
  ),
  interruption: L(
    'An interruption is something that stops an activity for a time: an interruption to the file; without interruption. Interrupt is the verb (already in the dictionary). An interruption to the listening file is reportable. Countable. Mix-up: eruption is a volcano.',
    ['An interruption to the listening file is grounds for a report, not a guess.', 'Work without interruption in the last half hour, which is the exam-hall sense.'],
    'an interruption to / in; without interruption. Verb: interrupt. Countable. Exams, broadcasts, and meetings. A break in flow. Trap: eruption.',
    ['break']
  ),
  intimidate: L(
    'To intimidate is to frighten someone into doing what you want: intimidate witnesses; feel intimidated. Threaten is close; bully is more schoolyard. Do not intimidate interviewees. Noun: intimidation. Ethics and law. Do not use it for ordinary nerves before an oral.',
    ['Do not intimidate witnesses in the fieldwork interviews, the ethics form warned.', 'A packed hall can intimidate first-time speakers, which is the weaker “daunt” sense.'],
    'intimidate someone into + -ing; feel intimidated. Noun: intimidation. Close: threaten. Ethics, sport, and courts. Fear used as pressure.',
    ['threaten']
  ),
  invaluable: L(
    'Invaluable means extremely useful — so useful it is beyond price. It does not mean “not valuable”. Valuable is weaker; worthless is an opposite of valuable, not of invaluable. The archivist’s notes were invaluable. Classic exam trap. Do not write invaluable if you mean cheap or useless.',
    ['The archivist’s notes were invaluable for the coursework appendix.', 'An invaluable contact at the records office, which is the people sense.'],
    'invaluable for / to; invaluable + noun. Trap: not the opposite of valuable. Weaker: useful / valuable. Acknowledgements and evaluations. Priceless help.',
    ['useful']
  ),
  invasion: L(
    'An invasion is armed entry into a country, or an unwelcome intrusion: the invasion of; a privacy invasion. Invade is the verb (already in the dictionary). Date the invasion, then use civilian sources. History and news. Do not call a busy café an invasion unless you mean the metaphor clearly.',
    ['The module dates the invasion and then asks about civilian sources.', 'An invasion of privacy was alleged after the leak, which is the legal metaphor.'],
    'the invasion of + place; an invasion of privacy. Verb: invade. History, news, and law. Armed or metaphorical intrusion. Not a queue.',
    []
  ),
  inventory: L(
    'An inventory is a complete list of items, or the stock a firm holds: stock inventory; take an inventory. List is everyday; catalogue is for libraries/museums. The chemical inventory must match the cupboard. Business and labs. US also stresses the stock-value sense. Do not call a shopping list an inventory unless you are joking.',
    ['The inventory of chemicals must match the cupboard before the practical.', 'Inventory rose after the cancelled tour, which is the business-stock sense.'],
    'take / hold an inventory; inventory of stock. Everyday: list. Business and labs. Full official list or stock level. Not a casual memo.',
    ['list']
  ),
  investigator: L(
    'An investigator examines a crime, accident, complaint, or research question: a police investigator; a private investigator. Investigate is the verb (already in the dictionary). The investigator asked who held the keys. News and science (principal investigator). Detective is more crime-fiction. Do not call a nosy neighbour an investigator.',
    ['The investigator asked who had the keys to the papers store.', 'The principal investigator signed the ethics form, which is the research sense.'],
    'a police / private / principal investigator. Verb: investigate. Noun: investigation. News, labs, and complaints. Official examiner of facts.',
    ['detective']
  ),
  investor: L(
    'An investor puts money in to make a profit: a private investor; investor confidence. Invest is the verb (already in the dictionary). A private investor backed the studio. Finance pages. Spender is not a synonym. Do not call a student buying a bus pass an investor.',
    ['A private investor backed the studio after the arts grant was cut.', 'Investor confidence fell after the profit warning, which is the City sense.'],
    'a private / foreign investor; investor confidence. Verb: invest. Noun: investment. Business pages. Profit-seeking capital, not a shopper.',
    []
  ),
  invisible: L(
    'Invisible means impossible to see, or ignored in official counts: invisible ink; invisible homelessness. Visible is the opposite. Invisible homelessness is still in the brief. Science (infrared) and social policy. Do not use invisible for a small font you simply dislike.',
    ['Invisible homelessness is still in the housing brief, the charity said.', 'The gas is invisible, which is the chemistry hazard sense.'],
    'invisible to; invisible homelessness / earnings. Opposite: visible. Policy and science. Unseen or uncounted — not “I ignored it”.',
    []
  ),
  ironic: L(
    'Ironic means using words that reverse your real meaning, or a situation that contradicts expectation: an ironic comment; it is ironic that… Sarcastic is harsher and more personal; coincidence is not irony. It is ironic that the punctuality lecture was late. Literature and speech. Do not label every unlucky event ironic (a common complaint in mark schemes).',
    ['It is ironic that the punctuality lecture started twenty minutes late.', 'The ironic narrator undercuts the patriotic hymn, which is the literature sense.'],
    'it is ironic that; an ironic + noun. Harsher: sarcastic. Noun: irony. Literature and comment. Situational clash, not any misfortune.',
    []
  ),
  ironically: L(
    'Ironically flags a clash with expectation: ironically, the assembly used an unsourced slide. Ironically is the adverb of ironic. Use it when the contrast is real, not as a sentence adverb meaning “by the way”. Register: comment and reviews. Do not start every paragraph with ironically.',
    ['Ironically, the anti-plagiarism assembly used an unsourced slide.', 'The policy, ironically, hit the pupils it claimed to help, which is the comment-page sense.'],
    'ironically, + clause. Adjective: ironic. Noun: irony. Comment and literature. True reversal of expectation — not a filler adverb.',
    []
  ),
  irony: L(
    'Irony is a contrast between expectation and reality, or saying the opposite of what you mean: dramatic irony; the irony is that… Sarcasm is a biting tone; satire is a genre. Explain the irony; do not just stamp the word. Literature papers. Mix-up: iron is the metal (already in the dictionary).',
    ['Explain the irony in the final couplet; do not just label it sarcasm.', 'Dramatic irony puts the audience ahead of the character, which is the drama sense.'],
    'the irony is that; dramatic / situational irony. Close (tone): sarcasm. Genre: satire. Trap: iron. Literature — analyse, do not just name.',
    []
  ),
  irrational: L(
    'Irrational means not based on reason: an irrational fear; irrational numbers (maths). Rational is the opposite. An irrational fear of the oral still needs a plan. Psychology and maths (√2). Do not call a feeling you disagree with irrational without argument.',
    ['An irrational fear of the oral still needs a study plan, tutors said.', 'Show that √2 is irrational, which is the number-theory sense.'],
    'an irrational fear / decision; an irrational number. Opposite: rational. Psychology and maths. Unreasoned — not merely unusual.',
    []
  ),
  irregular: L(
    'Irregular means not regular in time, shape, or rules: irregular verbs; irregular hours; an irregular coastline. Regular is the opposite. Irregular verbs still appear in the gap-fill. News also: irregular migration (loaded — use the paper’s term carefully). Do not call a slightly late bus irregular if the timetable always slips by two minutes.',
    ['Irregular verbs still appear in the grammar gap-fill, the examiner warned.', 'An irregular coastline increased the erosion risk, which is the geography sense.'],
    'irregular verbs / hours / shape. Opposite: regular. Grammar, work, and coasts. Uneven or not by the rule. Migration sense is politically loaded.',
    []
  ),
  irrelevant: L(
    'Irrelevant means not related to the subject: irrelevant detail; irrelevant to the question. Relevant is the opposite (already in the dictionary). A biography is irrelevant if the question is on structure. Exam command: stay relevant. Mix-up: irreverent means disrespectful (already elsewhere).',
    ['A biography of the author is irrelevant if the question is on structure.', 'Strike through irrelevant working, which is the maths-paper sense.'],
    'irrelevant to; irrelevant detail / evidence. Opposite: relevant. Trap: irreverent. Exams and law. Off-question, not “slightly boring”.',
    []
  ),
  irresistible: L(
    'Irresistible means too strong or attractive to refuse: an irresistible offer; irresistible force. Resist is the verb. The extra-marks offer proved irresistible and crashed the server. Often slightly humorous in news. Do not use it for a mildly nice biscuit unless you are being playful.',
    ['The offer of extra marks for early submission proved irresistible, and the server crashed.', 'The last chapter is irresistible, which is the review sense.'],
    'an irresistible + noun; find something irresistible. Verb: resist. Reviews, marketing, and physics metaphors. Overpowering pull.',
    []
  ),
  irrespective: L(
    'Irrespective is used in irrespective of = without considering; regardless of: irrespective of the centre. Regardless is the everyday twin; despite needs a noun phrase differently. Access arrangements apply irrespective of the school. Formal policy English. Do not write “irrespective from”.',
    ['Access arrangements apply irrespective of the school you sit in.', 'Marks are awarded irrespective of handwriting, which is the rubric sense.'],
    'irrespective of + noun. Everyday: regardless of. Formal policies and rubrics. Not “irrespective from”. Ignoring a factor, not despite + -ing.',
    ['regardless']
  ),
  irresponsible: L(
    'Irresponsible means not showing care for the effects of your actions: irresponsible reporting; it is irresponsible to… Responsible is the opposite (already in the dictionary). Leaving scripts on a train is irresponsible. Reckless is stronger. Noun: irresponsibility. Do not call a calculated risk irresponsible without argument.',
    ['Leaving scripts on a train is irresponsible, the board’s notice said.', 'Irresponsible borrowing featured in the personal-finance case, which is the economics sense.'],
    'irresponsible + noun; it is irresponsible to. Opposite: responsible. Stronger: reckless. Notices and editorials. Duty of care, not a joke.',
    ['reckless']
  ),
  irritate: L(
    'To irritate is to annoy, or to make skin/eyes sore: irritate heads; an irritant. Annoy is everyday; infuriate is stronger. Late boundaries irritate heads. Irritating is the adjective. Medical: an irritant chemical. Do not use irritate for a life-changing injury.',
    ['Late grade boundaries irritate heads trying to set sixth-form offers.', 'The chlorine can irritate the eyes, which is the lab-safety sense.'],
    'irritate someone; irritate the skin / eyes. Everyday: annoy. Stronger: infuriate. Noun: irritation / irritant. News and COSHH. Mild harm or annoyance.',
    ['annoy']
  ),
  itinerary: L(
    'An itinerary is a planned route or timetable for a journey: a detailed itinerary; change the itinerary. Schedule is wider; timetable is often transport. The field-trip itinerary must list tide times. Travel and exams (trips). Mix-up: itinerant means travelling from place to place (already elsewhere).',
    ['The field-trip itinerary must list the tide times, not just the café.', 'A missed connection wrecked the itinerary, which is the travel-news sense.'],
    'a detailed / draft itinerary; on the itinerary. Wider: schedule. Trap: itinerant. Trips, exchanges, and tour desks. Planned route, not a wish list.',
    ['schedule']
  ),
}
