const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2D = {
  acquiesce: L(
    'To acquiesce is to accept something without protest, even if you are unhappy: acquiesce in a change of plan. Give in is everyday; comply is more about following a rule; consent can be warmer and more willing. Acquiescence is the noun. British English prefers acquiesce in (not always to). In speech, go along with it is enough. It is formal, and it can criticise passivity — silence here is not enthusiasm.',
    ['She acquiesced in the new rota rather than fight a battle she would lose.', 'Acquiescence in the cuts was read as agreement; it was exhaustion.'],
    'acquiesce in + noun. Quietly accept without protest. Formal. Everyday: go along with / give in. Noun: acquiescence. Not eager consent.',
    ['give in']
  ),
  adroit: L(
    'Adroit means clever and skilful, especially with people or a tricky situation: an adroit question, adroit handling of a complaint. Skilful is everyday; deft is a close synonym; cunning adds a hint of slyness that adroit need not have. Adroitness is the noun. In speech, neat or deft is enough. It praises tact and timing, not brute force or mere intelligence.',
    ['An adroit pause let the committee hear how thin the excuse was.', 'He was adroit with angry parents and clumsy with a spreadsheet.'],
    'Skilful and neat, especially socially. Everyday: deft / skilful. Close: deft. Formal/literary. Not sly by default (that is cunning).',
    ['deft']
  ),
  anachronism: L(
    'An anachronism is something that belongs to another time and therefore feels out of place: a smartphone in a Victorian drama. Throwback is informal and can be affectionate; relic is close when the thing survives from the past. Anachronistic is the adjective. In speech, out of its time is enough. Historians also use it for errors of dating. It is not a synonym for old-fashioned if the object still belongs in its own era.',
    ['A wristwatch on a medieval saint is an anachronism, not a symbol.', 'Compulsory hats in the dress code felt like an anachronism, even to the governors.'],
    'Out of its time. Adjective: anachronistic. Everyday: out of place in that period. Close: relic. Also: a dating error in a text.',
    ['relic']
  ),
  aphorism: L(
    'An aphorism is a short, memorable sentence that claims a general truth: “Less is more.” Saying is everyday; proverb is traditional and often folk; epigram adds wit and bite; slogan is advertising. Aphoristic is the adjective. In speech, a pithy saying is enough. A good aphorism compresses thought; a bad one is a platitude in fancy dress — do not collect them as a substitute for argument.',
    ['The handbook opened with an aphorism and never stooped to a method.', '“Show, do not tell” is a useful aphorism until you have nothing to show.'],
    'A pithy general saying. Everyday: saying. Close: epigram (wittier). Contrast: proverb (folk), platitude (empty), slogan (ad).',
    ['epigram']
  ),
  arcane: L(
    'Arcane means understood by only a few; mysteriously obscure: arcane rules, arcane symbolism. Obscure is everyday; esoteric is a close synonym; mysterious can be atmospheric without implying a guild of insiders. In speech, known only to insiders or impossibly obscure is enough. Use it when the difficulty is specialised knowledge, not when a text is merely badly written.',
    ['The appeals procedure was arcane even to the office that administered it.', 'She enjoyed arcane footnotes; the students needed the argument in the open.'],
    'Insider-obscure. Everyday: obscure. Close: esoteric. Of rules, lore, specialisms — not mere poor style.',
    ['esoteric']
  ),
  assuage: L(
    'To assuage is to make an unpleasant feeling less strong: assuage anxiety, assuage guilt. Ease is everyday; soothe is close for feelings and pain; alleviate is a close academic cousin, often of problems rather than emotions. Assuagement is rare. In speech, ease or take the edge off is enough. You assuage a feeling or hunger, not a broken machine. Formal, slightly literary.',
    ['A precise timetable assuaged her panic more than reassurance did.', 'Nothing in the letter assuaged the sense that the decision was already made.'],
    'Ease a feeling (formal/literary). Everyday: ease / soothe. Close: alleviate (often problems). Not a synonym for repair.',
    ['ease']
  ),
  circuitous: L(
    'Circuitous means long and indirect, of a route or an explanation: a circuitous path, a circuitous answer. Indirect is everyday; roundabout is the spoken cousin; rambling criticises disorder more than length. In speech, roundabout or the long way round is enough. A circuitous route may be chosen; a circuitous answer often evades. It is not a compliment for thoroughness.',
    ['He gave a circuitous answer instead of yes or no.', 'The circuitous bus route made a twenty-minute journey an hour.'],
    'Roundabout; not direct. Everyday: roundabout / the long way. Of routes and explanations. Often implies evasion in speech.',
    ['roundabout']
  ),
  duplicitous: L(
    'Duplicitous means dishonest because you say one thing and secretly do another: a duplicitous email. Two-faced is everyday and informal; deceitful is a close synonym; hypocritical stresses a gap between preached values and acts. Duplicity is the noun. In speech, two-faced or talking out of both sides of their mouth is enough. Formal, and a serious charge — not a synonym for merely tactful.',
    ['The notice was duplicitous: it promised “consultation” after the contract was signed.', 'Duplicitous dealing with both bidders collapsed when the emails were disclosed.'],
    'Two-faced; saying one thing, doing another. Noun: duplicity. Everyday: two-faced. Close: deceitful. Formal; a charge, not tact.',
    ['deceitful']
  ),
  hegemony: L(
    'Hegemony is leadership or dominance of one group over others, especially in politics or culture: cultural hegemony, hegemony in a market. Dominance is the everyday cousin; supremacy is stronger and more absolute; leadership can be legitimate. Hegemonic is the adjective. In speech, dominance or they set the terms is enough. Academic and political — using it for a popular café chain can sound overblown unless you mean structural power.',
    ['The platform’s hegemony over discovery made “independent” charts look ornamental.', 'Gramscian essays treat hegemony as consent as well as force, not as a synonym for army.'],
    'Dominance of one group (politics/culture). Adjective: hegemonic. Everyday: dominance. Close: supremacy (stronger). Academic/political.',
    ['dominance']
  ),
  ignominious: L(
    'Ignominious means shameful and embarrassing, especially after a public failure: an ignominious defeat. Shameful is everyday; humiliating is close; disgraceful stresses moral blame. Ignominy is the noun. In speech, humiliating or a public shaming is enough. Formal, slightly Victorian. Reserve it for public loss of face, not a quiet private mistake.',
    ['The campaign ended in an ignominious climb-down on the core promise.', 'An ignominious exit from the group stage is still better copy than a dignified third place.'],
    'Publicly shameful (formal). Noun: ignominy. Everyday: humiliating / shameful. Of public failure, not a private slip.',
    ['humiliating']
  ),
  insipid: L(
    'Insipid means lacking flavour, interest, or liveliness: an insipid plot, insipid soup. Bland is everyday; dull is close; flavourless is literal. In speech, bland or lifeless is enough. It is a critic’s word — of food, prose, and people. Do not use it for something you merely disagree with; insipid is absence of taste, not presence of error.',
    ['The second half was insipid: competent, forgettable, and oddly proud of both.', 'Insipid tea arrived in a pretentious pot; the problem was the brew, not the china.'],
    'Dull and flavourless. Everyday: bland. Of food, art, character. Absence of life, not a synonym for wrong.',
    ['bland']
  ),
  languid: L(
    'Languid means moving or speaking slowly, as if energy is low: a languid wave, a languid afternoon. Slow is everyday; listless is closer to no interest; lazy is moral and often unfair. Languor is the noun (a pleasant or heavy slowness). Literary. In speech, slow and sleepy is enough. It can be sensual or critical (too languid to finish). It is not a medical synonym for ill.',
    ['She gave a languid wave from the sofa, as if the doorbell were optional.', 'The prose is languid on purpose; do not confuse it with a missing argument.'],
    'Slow, low-energy (literary). Noun: languor. Everyday: slow and sleepy. Close: listless. Not merely lazy, and not a diagnosis.',
    ['listless']
  ),
  loquacious: L(
    'Loquacious means talking a great deal — a formal, slightly amused word for talkative. Talkative is everyday; chatty is informal and friendlier; garrulous is a close synonym, often more critical (tedious talk). Loquacity is the noun. In speech, talks a lot is enough. It describes quantity of speech, not wisdom; a loquacious witness can still be precise, or empty.',
    ['The loquacious guest turned a two-course dinner into a seminar.', 'Loquacious minutes are not the same as accurate ones; they are longer.'],
    'Very talkative (formal). Everyday: talkative / chatty. Close: garrulous (often tediously so). Noun: loquacity. Quantity, not quality.',
    ['talkative']
  ),
  mellifluous: L(
    'Mellifluous means pleasant and musical to listen to, of a voice or of language: a mellifluous voice. Sweet-sounding is everyday; tuneful is close for music; honeyed can imply flattery. Literary, slightly ornamental. In speech, lovely to listen to is enough. Use it for sound, not for a kind personality. Overused in reviews, it curdles — one well-placed use is plenty.',
    ['The narrator’s mellifluous delivery made a grim story easier to sit through.', 'Mellifluous phrasing cannot rescue a hollow brief.'],
    'Sweet-sounding (literary). Of voice/language. Everyday: lovely to listen to. Close: tuneful. Sound, not character. Easy to overdo.',
    ['tuneful']
  ),
  obdurate: L(
    'Obdurate means refusing to change your mind even when people try to persuade you: remain obdurate. Stubborn is everyday; obstinate is a close synonym; resolute can be praise for the same firmness. Obduracy is the noun. Formal, usually critical. In speech, stubborn as a mule or will not budge is enough. Evidence bounced off him is the picture — not a considered, reasoned no.',
    ['He remained obdurate despite the attendance figures.', 'Obdurate refusal to mark anonymously looked like pride, not principle.'],
    'Stubbornly unmoved (formal, often critical). Noun: obduracy. Everyday: stubborn. Close: obstinate. Contrast: resolute (can be praise).',
    ['obstinate']
  ),
  obfuscate: L(
    'To obfuscate is to make something unclear on purpose, often with complicated language: obfuscate the results with jargon. Confuse is everyday and may be accidental; obscure can be unintentional; muddy is informal. Obfuscation is the noun. In speech, bury it in jargon or make it unclear on purpose is enough. Formal, accusatory. Do not use it for honest difficulty.',
    ['The FAQ seemed designed to obfuscate eligibility, not explain it.', 'If you cannot state the finding in one sentence, you may be obfuscating, or you may not have one.'],
    'Deliberately make unclear. Noun: obfuscation. Everyday: muddy / bury in jargon. Accidental cousin: confuse. Formal criticism.',
    ['obscure']
  ),
  palimpsest: L(
    'A palimpsest is a surface on which earlier writing or layers can still be seen beneath later ones — originally a reused manuscript, now a favourite metaphor for cities, texts, and memory: a palimpsest of cultures. Layer is everyday; overlay is close. In speech, you can still see the earlier layer is enough. Academic and literary. Use the metaphor when traces remain, not as a fancy word for mixture.',
    ['The high street is a palimpsest: Georgian brick, a 1970s canopy, a delivery app banner.', 'Her notebook was a palimpsest of abandoned openings and one kept paragraph.'],
    'New marks over visible old traces (manuscript; extended to places/texts). Everyday: you can still see the earlier layer. Metaphor: do not mean a mere mix.',
    ['overlay']
  ),
  paragon: L(
    'A paragon is a person or thing that is a perfect example of a quality: a paragon of patience. Model is everyday; epitome is a close synonym; ideal can be abstract. Paragon of + quality is the pattern. In speech, a perfect example is enough. Slightly literary, and easy to overpraise — a paragon in one virtue can still fail in another. It is not a synonym for saint unless you mean moral perfection.',
    ['She is a paragon of patience in class and a terror in the staff email thread.', 'Treat the sample essay as a paragon of structure, not of originality.'],
    'paragon of + quality. A perfect model. Everyday: perfect example. Close: epitome. Literary; one virtue, not a whole halo.',
    ['epitome']
  ),
  penchant: L(
    'A penchant is a strong liking: a penchant for long sentences. Liking is everyday; fondness is close; taste can be more cultivated; weakness for is informal and slightly guilty. Penchant for is the set pattern. In speech, a liking for or a thing for is enough. Slightly French and formal. It is milder than obsession and stronger than a passing preference.',
    ['He has a penchant for footnotes that belong in the main text.', 'Her penchant for understatement made the praise land harder.'],
    'a penchant for. A strong liking. Everyday: a liking / a thing for. Close: fondness. Formal; not an obsession.',
    ['fondness']
  ),
  perfidious: L(
    'Perfidious means cannot be trusted; willing to betray: a perfidious ally. Treacherous is a close synonym; disloyal is everyday and milder; two-faced overlaps with duplicitous. Perfidy is the noun. Literary/formal, historically loaded (perfidious Albion). In speech, treacherous or they sold us out is enough. A grave insult — not a word for a cancelled coffee.',
    ['A perfidious leak from the steering group ended the confidential draft.', 'Perfidious in the essay means betrayal, not a plot twist you disliked.'],
    'Treacherous; betraying (literary/formal). Noun: perfidy. Everyday: disloyal / treacherous. Serious charge. Close: duplicitous (two-faced dealing).',
    ['treacherous']
  ),
  pretentious: L(
    'Pretentious means trying to appear more important, cultured, or clever than you are — showing off a status you have not earned. Proud is different: pride can be honest satisfaction in real work; pretentious is the fake display. Show-off is everyday and informal; pompous stresses self-importance in manner. Pretension is the noun. In speech, trying too hard or up itself (informal British) is the sting. A difficult word is not pretentious if it is the right word.',
    ['The menu was pretentious and hard to read; the food was pie.', 'Proud of a first is fair; pretentious is quoting Latin to order coffee.'],
    'Showing off culture/status you have not got. Contrast: proud = justified self-respect. Everyday: trying too hard. Noun: pretension. Not “difficult”.',
    ['pompous']
  ),
  prodigal: L(
    'Prodigal means wastefully generous with money or resources: prodigal spending. Wasteful is everyday; lavish can be praise or blame; extravagant is a close synonym. The prodigal son is the biblical story of waste and return — that association still colours the word. Prodigality is the noun. In speech, wastefully lavish is enough. It is not a synonym for prodigious (remarkably great).',
    ['Prodigal use of colour printing emptied the faculty budget by March.', 'She was prodigal with praise and mean with actual time.'],
    'Wastefully lavish. Everyday: wasteful. Close: extravagant. Noun: prodigality. Biblical echo: prodigal son. Not prodigious (huge/impressive).',
    ['extravagant']
  ),
  quotidian: L(
    'Quotidian means ordinary and happening every day: the quotidian details of office life. Everyday is the plain synonym; ordinary is close; mundane can sound duller; daily is factual. Formal, slightly showy — using quotidian too often becomes the joke. In speech, everyday or ordinary is almost always better. It describes routine reality, not trivia you should ignore.',
    ['She made the quotidian queue at the printer sound like a moral test.', 'Policy fails in quotidian practice: who unlocks the room, who has the key.'],
    'Everyday; routine (formal). Everyday word: everyday / ordinary. Close: mundane. Easy to sound pretentious; use sparingly.',
    ['everyday']
  ),
  sagacious: L(
    'Sagacious means showing good judgement and understanding: a sagacious editor. Wise is everyday; shrewd adds sharpness about advantage; astute is a close synonym. Sagacity is the noun. Formal, slightly old-fashioned. In speech, wise or shrewd is enough. It praises judgement, not mere knowledge, and not a lucky guess.',
    ['A sagacious cut removed the paragraph that flattered the author and bored the reader.', 'Sagacious in a reference means judgement; it is not a fancy synonym for clever.'],
    'Wise in judgement (formal). Noun: sagacity. Everyday: wise / shrewd. Close: astute. Judgement, not trivia or luck.',
    ['wise']
  ),
  sanctimonious: L(
    'Sanctimonious means making a show of being morally better than other people — preachy virtue, not virtue itself. Moral is different: a moral argument can be serious and unshowy; sanctimonious is the performance of superiority. Self-righteous is a close synonym; pious can be sincere or, in criticism, fake-holy. Sanctimony is the noun. In speech, preachy or holier-than-thou is the sting. Do not call a quiet ethical stand sanctimonious.',
    ['His sanctimonious lecture on phones came from the man who texts through meetings.', 'Moral seriousness can be spare; sanctimonious prose cannot stop pointing at itself.'],
    'Preachy about virtue; a show of being better. Contrast: moral = actually about right and wrong. Everyday: holier-than-thou. Close: self-righteous.',
    ['self-righteous']
  ),
  sardonic: L(
    'Sardonic means humorous in a grim, mocking way: a sardonic smile. Sarcastic is everyday and often sharper, aimed at a person; ironic can be milder and more situational; wry is drier and less cruel. In speech, bitterly mocking or a grim joke is enough. Tone word: a sardonic remark can puncture pomposity or merely sneer. It is not a synonym for funny.',
    ['She gave a sardonic smile at the “family-friendly” cut that removed the parents.', 'Sardonic asides kept the meeting awake and nobody quite trusted the minutes.'],
    'Grimly mocking humour. Everyday: bitterly mocking. Close: sarcastic (often more personal). Contrast: wry (drier). Not merely funny.',
    ['sarcastic']
  ),
  subterfuge: L(
    'Subterfuge is a trick or dishonest method used to achieve something: use subterfuge to skip a queue. Trick is everyday; deception is broader; ruse is a close synonym. Formal. In speech, a trick or a dodge is enough. It names the method, not a personality trait (that might be duplicitous). A white lie can be subterfuge; so can a fake identity — scale varies, dishonesty does not.',
    ['They used subterfuge to enter the closed stack: a borrowed staff badge.', 'Humour was not subterfuge; the missing data still had to be explained.'],
    'A deceptive trick (formal). Everyday: trick / dodge. Close: ruse. Method of deceit, not the adjective duplicitous.',
    ['ruse']
  ),
  supercilious: L(
    'Supercilious means behaving as if you are better than other people; disdainful: a supercilious tone. Scornful is close; arrogant is everyday and broader; condescending stresses talking down. In speech, looking down your nose is the picture. Formal, always unkind as a description. It is manner — a raised eyebrow, a drawl — not expertise itself.',
    ['His supercilious “if you had read the paper” did not hide that he had skimmed it.', 'Supercilious silence can be as loud as a put-down.'],
    'Looking down the nose; disdainful. Everyday: arrogant. Close: condescending. Manner of superiority, not proof of it.',
    ['disdainful']
  ),
  trenchant: L(
    'Trenchant means, of criticism or analysis, strong, clear, and effective: a trenchant critique. Sharp is everyday; incisive is a close synonym; cutting can be merely unkind. Formal, usually praise for argument. In speech, sharp and to the point is enough. A trenchant comment slices to the issue; a rude one only slices the person. Do not use it for a blunt insult.',
    ['She made a trenchant case against the metric: it measured speed, not learning.', 'Trenchant footnotes are a pleasure; trenchant abuse in the margin is not.'],
    'Sharp, effective criticism/analysis (formal, often praise). Everyday: incisive / to the point. Close: incisive. Not mere rudeness.',
    ['incisive']
  ),
  urbane: L(
    'Urbane means confident, polite, and comfortable in social situations, in a sophisticated way: an urbane host. Polite is everyday and thinner; suave can imply smoothness that hides something; sophisticated is close but can describe taste, not manners. Urban means of the city — a different word, despite the shared root. In speech, smooth and at ease is enough. Praise for social grace; in criticism, urbane can mean too smooth to be honest.',
    ['The chair was urbane enough to disagree without humiliating the speaker.', 'Urbane charm is not an argument; it is a manner that can carry one, or conceal the lack.'],
    'Smoothly sophisticated manners. Everyday: polished / at ease. Close: suave (sometimes suspicious). Contrast: urban = of the city.',
    ['suave']
  ),
}
