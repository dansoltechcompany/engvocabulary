const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2F = {
  ameliorate: L(
    'Ameliorate is a formal verb for making a bad situation better: ameliorate conditions, ameliorate poverty. Alleviate is the usual partner for pain or symptoms; improve is the everyday cousin. You do not ameliorate a person. Amelioration is the noun.',
    ['The grant did little to ameliorate overcrowding in the halls.', 'Better drainage would ameliorate flooding after storms.'],
    'ameliorate a situation/conditions (formal). Pain: alleviate. Everyday: improve.',
    ['improve']
  ),
  anodyne: L(
    'Anodyne describes a remark that is so careful it becomes bland: an anodyne statement, anodyne reassurance. It will upset nobody, and often says nothing. Bland is close; anodyne is more about inoffensive public language. Anodyne as “painkiller” is older medical English — use the bland-statement sense here.',
    ['Interviewers were tired of anodyne answers about “learning journeys”.', 'The leaflet was anodyne: cheerful, vague, and empty.'],
    'an anodyne statement/answer. Close: bland. Not the old medical sense here.',
    ['bland']
  ),
  apotheosis: L(
    'Apotheosis is the peak or perfect example of something, or the raising of a person to godlike status: the apotheosis of her method; a career’s apotheosis. Climax is the high point of a story; epitome is a typical perfect example (already in the dictionary). Do not use it for a mild “best bit”.',
    ['Critics called the last aria the apotheosis of the composer’s late style.', 'The statue treats the general as an apotheosis, not a man.'],
    'the apotheosis of + noun (peak / perfect instance). Cousin: epitome. Story high point: climax.',
    ['epitome']
  ),
  asperity: L(
    'Asperity is harshness of tone or manner: answer with asperity, the asperity of the reply. Severity can be about rules or weather; asperity is specifically sharp speech. Austerity is economic tightness — different word. Soften asperity with please and a reason, or you sound rude.',
    ['There was asperity in his voice when the deadline slipped again.', 'She disliked the asperity of the examiner’s comments, though they were fair.'],
    'with asperity / the asperity of a remark. Mix-up: austerity (economy).',
    []
  ),
  attenuate: L(
    'Attenuate means make thinner or weaker: an attenuated signal, attenuate the impact. Weaken is the plain cousin; dilute is for liquids and arguments. Attenuated can describe a vaccine (weakened virus) in science. Do not use it for “make shorter” — that is shorten or abridge.',
    ['Trees attenuated the wind before it reached the house.', 'The reform was attenuated until almost nothing remained.'],
    'attenuate a signal/impact (formal). Plain: weaken. Liquids/arguments: dilute.',
    ['weaken']
  ),
  baleful: L(
    'A baleful look threatens harm: a baleful stare, baleful influence. Baneful is a rarer cousin meaning harmful. Malevolent is about wishing ill; baleful is the look or atmosphere of threat. Do not confuse with bashful (shy).',
    ['The dog fixed a baleful eye on the postman.', 'A baleful silence followed the accusation.'],
    'a baleful look/stare. Mix-up: bashful (shy). Harmful cousin: baneful.',
    []
  ),
  bellicose: L(
    'Bellicose means eager to fight, of tone or policy: a bellicose speech, bellicose rhetoric. Belligerent is close; militant suggests organised struggle. Bellicose is about aggression of manner, not necessarily troops already fighting. Peaceable is a useful opposite.',
    ['Bellicose headlines made negotiation harder.', 'The minister dropped the bellicose language after the talks.'],
    'bellicose speech/rhetoric. Close: belligerent. Opposite flavour: peaceable.',
    ['belligerent']
  ),
  bombastic: L(
    'Bombastic language is inflated and pompous: a bombastic introduction, bombastic claims. Verbose (already in the dictionary) means too many words; bombastic means the words are puffed up. Grandiloquent is a rarer synonym. Cut bombast; keep the point.',
    ['The manifesto was bombastic and short on numbers.', 'Bombastic praise from the chair embarrassed the winner.'],
    'bombastic + speech/writing. Too many words: verbose. Puffed-up: bombastic.',
    ['grandiloquent']
  ),
  bucolic: L(
    'Bucolic is literary for pleasant countryside: a bucolic scene, bucolic calm. Rural is the neutral word; rustic can mean simple or crude. Pastoral is the literary cousin. Bucolic is not for industrial farmland in a report — keep it for atmosphere.',
    ['The postcard sold a bucolic fantasy of the village.', 'After the city, the bucolic quiet felt unreal.'],
    'bucolic scene/calm (literary). Neutral: rural. Cousin: pastoral.',
    ['pastoral']
  ),
  calumny: L(
    'Calumny is a false, damaging statement: spread calumny, a calumny against her name. Slander is spoken defamation; libel is written. Calumny is the formal, slightly old-fashioned umbrella. Do not use it for a fair, harsh review.',
    ['He spent years fighting calumny on social media.', 'The memoir repeats a calumny that was later withdrawn.'],
    'a calumny / spread calumny (formal). Spoken: slander. Written: libel.',
    ['slander']
  ),
  capricious: L(
    'Capricious means changing mood or mind without a good reason: a capricious decision, capricious weather. Arbitrary is closer to “no rule”; fickle is everyday for people. A caprice is a sudden whim. Unpredictable is wider and less judgemental.',
    ['Funding was too capricious for long experiments.', 'A capricious boss kept rewriting the brief overnight.'],
    'a capricious decision/mood. Everyday: fickle. Whim noun: caprice.',
    ['fickle']
  ),
  churlish: L(
    'Churlish is rude or mean-spirited when thanks or generosity was expected: it would be churlish to refuse. Rude is the plain word; churlish adds the failure of courtesy. Churl originally meant a peasant — ignore that in modern use. Gracious is a useful opposite.',
    ['It seemed churlish not to applaud.', 'A churlish email after the gift surprised the hosts.'],
    'churlish to refuse / a churlish remark. Plain: rude. Opposite flavour: gracious.',
    ['rude']
  ),
  circumlocution: L(
    'Circumlocution is talking round the point: drop the circumlocution; a masterpiece of circumlocution. Evasion hides; waffle is informal British for empty talk. Periphrasis is the technical cousin. Answer directly if the examiner asks a yes/no.',
    ['Politicians hid behind circumlocution rather than a figure.', 'Cut the circumlocution: what do you want us to do?'],
    'drop/avoid circumlocution. Informal empty talk: waffle. Direct answer is the cure.',
    ['waffle']
  ),
  cloying: L(
    'Cloying is too sweet or sentimental, so it sickens: a cloying ending, cloying perfume. Sentimental can be warm; cloying has gone too far. Saccharine is a close adjective for fake sweetness. Bitter is a taste opposite, not a tone opposite.',
    ['The charity film was sincere but cloying.', 'A cloying soundtrack made the scene comic by accident.'],
    'cloying sweetness/sentiment. Close: saccharine. Warm but not sickly: sentimental.',
    ['saccharine']
  ),
  complaisant: L(
    'Complaisant means willing to please and go along: a complaisant assistant. Complacent (already in the dictionary) means smugly unworried — the classic mix-up. Compliant is about following rules; complaisant is about pleasing people. Spell the middle -ais-.',
    ['A too complaisant board never challenged the numbers.', 'She was complaisant in meetings and fierce on the page.'],
    'complaisant = eager to please. Mix-up: complacent (smug). Rules: compliant.',
    []
  ),
  consternation: L(
    'Consternation is shocked dismay: cause consternation, to my consternation. Alarm is sharper fear; dismay is sad disappointment; consternation mixes surprise and worry. Do not use it for mild annoyance.',
    ['The missing files caused consternation in the registry.', 'To our consternation, the guest of honour had the wrong date.'],
    'cause consternation / to my consternation. Milder: dismay. Sharper: alarm.',
    ['dismay']
  ),
  credulous: L(
    'Credulous means too ready to believe: a credulous reader, credulous of rumours. Gullible is the everyday cousin. Credible means believable (of a story); credulous is of the person. Incredulous means unwilling to believe — almost the opposite.',
    ['Only a credulous buyer would skip the small print.', 'The hoax spread among credulous groups online.'],
    'a credulous person. Story: credible. Opposite flavour: incredulous. Everyday: gullible.',
    ['gullible']
  ),
  cupidity: L(
    'Cupidity is greed for money or possessions (formal): driven by cupidity. Avarice (already in the dictionary) is a close synonym. Cupid the love god is a false friend — cupidity is not romance. Greed is the plain word.',
    ['The fraud case was a study in cupidity.', 'Cupidity, not ideology, explained the vote.'],
    'cupidity (formal greed). Close: avarice. Not Cupid/romance. Plain: greed.',
    ['avarice', 'greed']
  ),
  desultory: L(
    'Desultory means lacking a plan, jumping about: a desultory search, desultory conversation. Casual can be relaxed on purpose; desultory is aimless. Discursive wanders in an essay; desultory is weaker and less intellectual. Methodical is a useful opposite.',
    ['After a desultory glance at the data, they guessed.', 'The meeting became desultory once the chair left.'],
    'a desultory search/chat (formal). Opposite flavour: methodical. Essay wandering: discursive.',
    []
  ),
  diffident: L(
    'Diffident means lacking confidence about asserting yourself: too diffident to ask, a diffident smile. Shy is broader; timid is more fearful; modest can be a virtue. Diffidence is the noun. Confident is the opposite, not arrogant necessarily.',
    ['A diffident candidate still had the best answers.', 'Diffidence kept him from applying for the promotion.'],
    'diffident about + -ing / too diffident to. Noun: diffidence. Broader: shy.',
    ['shy']
  ),
  dilatory: L(
    'Dilatory means slow and given to delay: dilatory replies, a dilatory ministry. Slow can be careful; dilatory often blames stalling. Procrastinating is the everyday verb idea. Prompt is a useful opposite.',
    ['Dilatory invoicing wrecked their cash flow.', 'The inquiry criticised dilatory safety checks.'],
    'dilatory replies/action (formal). Everyday: slow to act / stalling. Opposite: prompt.',
    []
  ),
  disabuse: L(
    'Disabuse means free someone from a false idea: disabuse someone of a notion. The of is required. Undeceive is rarer; correct is plainer. You disabuse a person, not a fact. Do not write disabuse from.',
    ['Colleagues soon disabused him of the idea that marking was light.', 'Let me disabuse readers of the myth that C2 is only Latin.'],
    'disabuse someone of + idea. Not disabuse from. Plain: correct a false belief.',
    []
  ),
  discursive: L(
    'Discursive writing wanders from topic to topic: a discursive essay, too discursive for a timed paper. Discussion is the noun for talk; discursive is the adjective for rambling structure. Focused and linear are useful opposites. In some exam boards discursive essay means “discuss both sides” — check the rubric.',
    ['Keep the report tight; the draft is still discursive.', 'Her emails are witty and hopelessly discursive.'],
    'discursive = rambling from topic to topic. Exam rubric may mean “discuss”. Opposite: focused.',
    []
  ),
  dissemble: L(
    'Dissemble means hide true feelings or intentions: he was dissembling; do not dissemble. Lie is blunter; feign is pretend a feeling. Dissemble is formal and often about a polite mask. Reveal is the opposite move.',
    ['She did not dissemble her boredom after the third hour.', 'Diplomats are trained to dissemble without looking shifty.'],
    'dissemble (formal) = mask feeling/intent. Blunter: lie. Pretend a feeling: feign.',
    []
  ),
  doctrinaire: L(
    'Doctrinaire means applying theory rigidly and ignoring facts: a doctrinaire timetable, doctrinaire cuts. Dogmatic (already in the dictionary) is close; ideological is wider. Pragmatic is the usual opposite. A doctrine is the belief system; doctrinaire is the inflexible person/policy.',
    ['Doctrinaire hiring rules blocked the best candidate.', 'A doctrinaire reading of the theory ignored the data.'],
    'a doctrinaire policy/approach. Close: dogmatic. Opposite flavour: pragmatic.',
    ['dogmatic']
  ),
  duplicity: L(
    'Duplicity is deceitful double-dealing: an act of duplicity, guilty of duplicity. Hypocrisy is pretending virtue; duplicity is the two-faced dealing itself. Duplicate is a copy — related root, different word. Honesty and good faith are opposites.',
    ['Voters punished the duplicity of the leaked deal.', 'She accused the agent of duplicity, not mere error.'],
    'duplicity (uncountable, formal). Mix-up: duplicate (a copy). Close: deceit.',
    ['deceit']
  ),
  equanimity: L(
    'Equanimity is calm self-control under stress: receive news with equanimity, disturb someone’s equanimity. Calmness is the plain noun; composure (already in the dictionary) is close. Equality is fairness — different word. Equable describes a steady temperament.',
    ['He lost his equanimity only when the files vanished.', 'Meditation did not give her equanimity overnight.'],
    'with equanimity. Close: composure. Mix-up: equality.',
    ['composure']
  ),
  ersatz: L(
    'Ersatz (from German) means a fake, usually inferior substitute: ersatz coffee, ersatz cheer. Fake and imitation are plainer; ersatz often sneers at the substitute. Synthetic can be neutral (synthetic fabric). Use it before a noun.',
    ['Wartime recipes were full of ersatz ingredients.', 'The film offered ersatz nostalgia, all style and no memory.'],
    'ersatz + noun (inferior substitute). Plain: fake/imitation. Neutral materials: synthetic.',
    ['imitation']
  ),
  excoriate: L(
    'Excoriate means criticise severely (formal): the review excoriated the research. Literally it can mean strip skin — keep the criticise sense in academic English. Castigate and lambast are cousins; criticise is the plain verb. Praise is the opposite.',
    ['The committee excoriated the delay as negligent.', 'Columnists excoriated the speech without quoting it.'],
    'excoriate + person/work (formal attack). Plain: criticise fiercely. Literal skin sense is rare here.',
    ['castigate']
  ),
  exculpate: L(
    'Exculpate means free from blame or declare not guilty: evidence exculpated the accused. Inculpate is the rare opposite (blame). Exonerate is a close synonym; acquit is the court verdict. Excuse can mean forgive a small fault — weaker.',
    ['The footage helped to exculpate the driver.', 'Nothing in the emails exculpates the board.'],
    'exculpate someone (formal). Court: acquit. Close: exonerate. Opposite rare: inculpate.',
    ['exonerate']
  ),
}
