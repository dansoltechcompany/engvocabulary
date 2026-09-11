const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2 = {
  abject: L(
    'Abject means as low, hopeless, or humiliating as a situation can get — not merely “very bad.” A careful writer chooses it for total misery or grovelling (abject poverty, abject failure, an abject apology) when ordinary words feel too mild. In speech it sounds literary; say utterly hopeless or complete unless you want that high, almost Victorian tone.',
    ['The campaign ended in abject failure.', 'He issued an abject apology after the leak.'],
    'abject poverty / failure / apology. Everyday: utterly hopeless.',
    ['wretched']
  ),
  ephemeral: L(
    'Ephemeral means it lasts only a short time and then is gone. Use it instead of short-lived when you want a slightly elegant contrast with lasting or permanent — a fashion, a mood, a headline. In conversation short-lived or fleeting is plainer; ephemeral can sound like a book review.',
    ['The truce proved ephemeral.', 'Morning mist is beautiful and ephemeral.'],
    'Contrast with lasting / permanent. Everyday: short-lived.',
    ['fleeting']
  ),
  inexorable: L(
    'Inexorable means nothing will stop it — not argument, not feeling. Writers reach for it when a process grinds on (time, decline, logic, a deadline) and unstoppable sounds too cinematic. In speech it is rather grand; cannot be stopped or bound to happen will do.',
    ['The cuts followed an inexorable logic.', 'Public anger proved inexorable once the figures appeared.'],
    'Often of processes, not people. Everyday: unstoppable.',
    []
  ),
  laconic: L(
    'Laconic means using very few words, often dry rather than rude. Choose it instead of brief when the shortness is a habit or a style — a laconic email, a laconic witness. In everyday talk, a man of few words or blunt is more natural; laconic belongs in character sketches and reviews.',
    ['Her laconic emails never wasted a line.', 'The captain’s laconic “Carry on” ended the debate.'],
    'A style of speech, not just a short answer. Everyday: terse / brief.',
    ['terse']
  ),
  perspicacious: L(
    'Perspicacious means unusually quick to notice what others miss and to grasp what it means. Keep it honest: it belongs in serious reading and formal praise of a mind, not in daily chat. A careful writer may use it once in a review; in speech say sharp or perceptive, or you will sound as if you swallowed a thesaurus.',
    ['Only a perspicacious editor caught the false date.', 'The judge’s perspicacious questions exposed the gap.'],
    'Literary / formal. Everyday: perceptive, sharp.',
    ['perceptive']
  ),
  quiescent: L(
    'Quiescent means quiet and inactive for a time, with the hint that activity could return. Scientists, historians, and critics use it for a volcano, a market, or an illness that is still, not dead. In speech say dormant, quiet, or inactive; quiescent sounds technical.',
    ['The dispute went quiescent after the inquiry.', 'The infection is quiescent but not cured.'],
    'Inactive for now, not necessarily gone. Everyday: dormant.',
    ['dormant']
  ),
  recondite: L(
    'Recondite means little known and hard to understand — the sort of point that lives in footnotes. It is an honest word for obscure scholarship, not for daily chat; calling a café “recondite” would sound absurd. In speech say obscure or specialised.',
    ['The essay vanished into recondite legal history.', 'She has a taste for recondite medieval hymns.'],
    'Serious reading / academia. Everyday: obscure.',
    ['obscure']
  ),
  sanguine: L(
    'Sanguine means cheerfully confident that things will turn out well, even when the evidence is mixed. Use it instead of optimistic when you want a slightly old-fashioned, temperament sense — she is sanguine by nature. In speech optimistic is safer; sanguine can sound essay-like, and do not mix it with the old meaning “blood-red.”',
    ['Investors were surprisingly sanguine after the fall.', 'I am less sanguine than the minister about the timetable.'],
    'Cheerful confidence, not “bloody.” Everyday: optimistic.',
    ['optimistic']
  ),
  ubiquitous: L(
    'Ubiquitous means it seems to be everywhere you look. A careful writer prefers it to everywhere when describing a trend or a technology that has become ordinary. It is one of the more usable C2 words in essays; in casual speech still, you hear it a lot or they’re everywhere sounds less like coursework.',
    ['CCTV is ubiquitous in the city centre.', 'That slogan became ubiquitous during the campaign.'],
    'Seeming to be everywhere. Everyday: everywhere.',
    []
  ),
  vicissitude: L(
    'A vicissitude is a change of luck or circumstance, usually one of the hard swings of life. It is almost always plural in serious prose: the vicissitudes of war, of a career. Keep it in essays and novels; in daily chat say ups and downs. Using it over coffee will sound theatrical.',
    ['The firm survived the vicissitudes of the 1970s.', 'Memoirs dwell on the vicissitudes of exile.'],
    'Usually plural: vicissitudes of… Everyday: ups and downs.',
    []
  ),
  albeit: L(
    'Albeit means although, packed into a short concession: useful, albeit expensive. Writers choose it to tuck a contrast into a phrase without a full although-clause. In speech although or even if is more natural; albeit can sound stiff, and it does not start a sentence the way although does.',
    ['The reform passed, albeit by a single vote.', 'It is a solution, albeit an ugly one.'],
    'albeit + adjective/phrase. Not a sentence starter like although.',
    ['although']
  ),
  alacrity: L(
    'Alacrity is quick, cheerful willingness — not mere speed. Narrative and formal writing use with alacrity when someone jumps at a task. In speech say eagerly or at once; alacrity can sound Victorian if you drop it into a meeting.',
    ['Volunteers signed up with surprising alacrity.', 'He agreed with alacrity, then vanished.'],
    'with alacrity. Everyday: eagerly / at once.',
    ['eagerness']
  ),
  antithesis: L(
    'The antithesis of something is its exact opposite, or a sharp contrast set up on purpose. Use it instead of opposite when you want a clean intellectual clash (order as the antithesis of chaos). In conversation opposite is enough; antithesis belongs in essays and criticism.',
    ['Her plain style is the antithesis of the official jargon.', 'Chaos was the antithesis of everything he taught.'],
    'the antithesis of + noun. Everyday: opposite.',
    ['opposite']
  ),
  assiduous: L(
    'Assiduous means working with care and persistence over time, not a single burst of effort. Choose it instead of hard-working when the point is patient attention (assiduous research, an assiduous host). In speech diligent or thorough is less stiff.',
    ['Assiduous fact-checking saved the article.', 'He was an assiduous visitor to the archive.'],
    'Careful persistence. Everyday: diligent.',
    ['diligent']
  ),
  auspicious: L(
    'Auspicious means the start looks promising — a good omen, not a guarantee. Writers use it for openings (an auspicious debut) where lucky would sound childish. In speech a good sign or promising is plainer; auspicious can sound ceremonial.',
    ['It was not an auspicious moment to ask for funds.', 'Her first ruling was an auspicious start.'],
    'A promising start. Everyday: a good sign.',
    ['promising']
  ),
  circumspect: L(
    'Circumspect means you think before you act or speak because the risk is real — legal, political, or social. Use it instead of careful when the caution is about consequences, not merely accuracy. In speech cautious is the everyday word; circumspect sounds like a briefing note.',
    ['Ministers were circumspect about naming a date.', 'Be circumspect in emails that might be forwarded.'],
    'Cautious about risk and reputation. Everyday: cautious.',
    ['cautious']
  ),
  concomitant: L(
    'Concomitant means happening at the same time as something else, and tied to it. Academic and policy writing uses it for a linked side-effect (growth and its concomitant costs). In speech say along with or that goes with it; concomitant sounds pretentious in chat.',
    ['Fame brought concomitant loss of privacy.', 'Stress is a concomitant of the job, not a side issue.'],
    'Accompanying and connected. Everyday: along with.',
    []
  ),
  deleterious: L(
    'Deleterious means harmful, often gradually or in a way you might miss. Scientists and careful essayists prefer it to harmful when discussing effects on health, trust, or an ecosystem. In speech always say harmful; deleterious belongs on the page.',
    ['The policy had deleterious effects on small farms.', 'Even mild dehydration can be deleterious to concentration.'],
    'Often of effects, slightly clinical. Everyday: harmful.',
    ['harmful']
  ),
  dichotomy: L(
    'A dichotomy is a split into two opposite camps. Writers often name a dichotomy in order to question it: the dichotomy is too neat. Use split or divide in speech; dichotomy is seminar language, and overusing it makes ordinary contrasts sound grander than they are.',
    ['She rejected the dichotomy of art versus craft.', 'The rural–urban dichotomy hides a lot of mixed lives.'],
    'A two-way split, often too simple. Everyday: split.',
    ['split']
  ),
  disparate: L(
    'Disparate means different in kind, not merely different in degree — hard to put in one box. Choose it instead of different when the items barely belong together (disparate sources, disparate aims). Do not confuse it with desperate. In speech very different is enough.',
    ['The committee had disparate motives.', 'He tried to weld disparate careers into one story.'],
    'Different in type, not desperate. Everyday: very different.',
    []
  ),
  egregious: L(
    'Egregious means extremely bad in a way nobody can miss — a glaring fault. Use it instead of bad or awful for errors, abuses, or omissions that should have been obvious. It can appear in speech as strong criticism, but it still sounds formal; shocking or blatant is plainer.',
    ['Ignoring the safety check was an egregious lapse.', 'The translation contained egregious howlers.'],
    'Shockingly obvious and bad. Everyday: blatant.',
    ['blatant']
  ),
  elucidate: L(
    'To elucidate is to make something clear by explaining it, often a difficult point. Academic writers choose it instead of explain when the aim is to throw light on a knotty passage. In speech say explain or clarify; elucidate can sound as if you are giving a lecture.',
    ['The preface elucidates the author’s method.', 'Could you elucidate what “material” means here?'],
    'Formal: throw light on. Everyday: explain / clarify.',
    ['clarify']
  ),
  equivocal: L(
    'Equivocal means unclear because it can be read in more than one way, often on purpose. Use it instead of vague when the fog may be tactical (an equivocal statement). In speech say she sat on the fence or the answer was vague; equivocal is for analysis of language.',
    ['The communiqué was carefully equivocal.', 'His smile was equivocal — relief or mockery?'],
    'Ambiguous, often deliberate. Everyday: vague / ambiguous.',
    ['ambiguous']
  ),
  esoteric: L(
    'Esoteric means only a small circle with special knowledge is likely to follow it. Use it instead of difficult when the barrier is insider knowledge, not mere hardness. Close cousin of recondite; both belong in criticism, not in the pub. In speech say too specialist or for experts.',
    ['The jokes were esoteric even for regular listeners.', 'Cryptography can look esoteric until you need it.'],
    'For a small informed group. Everyday: specialist / obscure.',
    []
  ),
  extant: L(
    'Extant means it still exists — it was not lost, destroyed, or wiped out. Historians and scholars use it of manuscripts, buildings, species. Do not confuse it with extent (size). In speech say still surviving or still around; extant is catalogue language.',
    ['Only three extant letters describe the voyage.', 'The chapel is the oldest extant part of the house.'],
    'Still in existence. Not extent. Everyday: surviving.',
    ['surviving']
  ),
  facetious: L(
    'Facetious means you treat a serious matter as a joke, usually at the wrong moment. Use it instead of funny or joking when the humour is misplaced. It is usable in speech as a mild rebuke (Don’t be facetious); I was only joking is softer.',
    ['A facetious aside during the condolences fell flat.', 'I was being facetious — the deadline is real.'],
    'Joking when you should not. Not the same as witty.',
    []
  ),
  fastidious: L(
    'Fastidious means very fussy about detail, or easily put off by mess and impurity. Writers use it instead of fussy when they want a cooler, less mocking tone (a fastidious editor). In speech picky or fussy is normal; fastidious can sound faintly superior.',
    ['She is fastidious about how the table is set.', 'A fastidious reader will notice the inconsistent dates.'],
    'Fussy about detail, or easily disgusted. Everyday: picky.',
    ['fussy']
  ),
  fortuitous: L(
    'Fortuitous means it happened by chance, and the result is often lucky. Careful writers still hear the “by chance” core; casual writers treat it as a posh fortunate. In speech say by chance or lucky — fortuitous in conversation can sound like showing off.',
    ['A fortuitous delay meant they missed the crash.', 'The seating plan was fortuitous: rivals became allies.'],
    'By chance (often lucky). Not a fancy “fortunate.” Everyday: lucky.',
    []
  ),
  idiosyncratic: L(
    'Idiosyncratic means peculiar to one person — an odd personal habit or style, not a random insult. Use it instead of weird when the oddness is characteristic (an idiosyncratic filing system). In speech say that’s just her way; idiosyncratic is a critic’s word.',
    ['His idiosyncratic punctuation became a trademark.', 'The building has an idiosyncratic floor plan.'],
    'Odd in a personal way. Everyday: peculiar / his own way.',
    ['peculiar']
  ),
  incontrovertible: L(
    'Incontrovertible means the evidence is so strong that honest disagreement is unreasonable. Use it in argument instead of certain when you are staking a claim on proof. In speech undeniable is plainer; incontrovertible can sound like a courtroom speech.',
    ['The footage provided incontrovertible evidence.', 'That the bridge failed is incontrovertible; why it failed is not.'],
    'Cannot reasonably be denied. Everyday: undeniable.',
    ['undeniable']
  ),
  ineffable: L(
    'Ineffable means the feeling or quality is too great, or too strange, to put into words. It belongs in literary, spiritual, or highly emotional writing. In speech beyond words or I cannot describe it is honest; ineffable at the bus stop sounds pretentious.',
    ['The last movement has an ineffable sadness.', 'They spoke of ineffable joy after the rescue.'],
    'Beyond description. Literary. Everyday: beyond words.',
    []
  ),
  inimical: L(
    'Inimical means hostile or actively bad for something: a climate inimical to debate. Formal writers choose it instead of bad for when the relationship is one of opposition. In speech say hostile to or bad for; inimical is legal and literary.',
    ['Secrecy is inimical to public trust.', 'The soil is inimical to most crops.'],
    'inimical to + noun. Everyday: hostile to / bad for.',
    ['hostile']
  ),
  inscrutable: L(
    'Inscrutable means you cannot read it — a face, a motive, a text gives nothing away. Use it instead of mysterious when the point is that interpretation fails. In speech say I cannot tell what he is thinking; inscrutable is for portraits and plots.',
    ['The committee’s silence was inscrutable.', 'Her inscrutable calm unnerved the interviewer.'],
    'Cannot be interpreted. Everyday: unreadable.',
    []
  ),
  intractable: L(
    'Intractable means stubbornly hard to manage, control, or solve. Policy writers and doctors use it of problems that resist ordinary fixes. In speech say it will not go away or stubborn; intractable is the essay word for a knot that will not loosen.',
    ['Inflation proved more intractable than expected.', 'The two families were locked in an intractable feud.'],
    'Stubbornly difficult. Everyday: stubborn / unmanageable.',
    ['stubborn']
  ),
  inveterate: L(
    'Inveterate means the habit is old, settled, and unlikely to change. Use it instead of habitual for a deep-set trait (an inveterate letter-writer). In speech say lifelong or he cannot stop; inveterate is slightly bookish but still seen in journalism.',
    ['She is an inveterate note-taker in meetings.', 'Inveterate gossip did more harm than the facts.'],
    'A long-standing habit. Everyday: habitual / lifelong.',
    ['habitual']
  ),
  obviate: L(
    'To obviate is to remove a need or a problem so that it never arises. Formal writers prefer it to avoid when the design itself makes the extra step unnecessary. In speech say that makes it unnecessary or you will not need to; obviate is for papers and reports.',
    ['Online booking obviates the queue.', 'A footnote would obviate a long digression.'],
    'obviate the need to… Everyday: make unnecessary.',
    []
  ),
  onerous: L(
    'Onerous means the duty, cost, or task is heavy to bear. Use it instead of hard when you mean burden, often legal or financial (onerous terms). In speech a lot to take on or heavy is clearer; onerous sounds like a contract.',
    ['The reporting requirements were onerous for volunteers.', 'He inherited an onerous mortgage.'],
    'Burdensome duties/costs. Everyday: burdensome.',
    ['burdensome']
  ),
  paucity: L(
    'Paucity means there is too little of something — a thin supply. Academic writers use a paucity of evidence instead of a lack of when they want a cooler, more formal noun. In speech lack or too few; paucity in conversation sounds pretentious.',
    ['A paucity of witnesses weakened the case.', 'The town suffers from a paucity of affordable flats.'],
    'a paucity of + noun. Everyday: lack / shortage.',
    ['lack']
  ),
  pejorative: L(
    'Pejorative means the word itself puts someone or something down. It is useful metalanguage: a pejorative label. Educated speech can carry it; otherwise say that is an insult or a put-down. Do not use pejorative as a fancy synonym for negative in every sentence.',
    ['“Amateur” is not always pejorative.', 'He objected to the pejorative tone of the headline.'],
    'A word that criticises by its tone. Everyday: insulting.',
    ['derogatory']
  ),
  pernicious: L(
    'Pernicious means harmful in a slow, spreading, often quiet way — an idea, a rumour, a habit. Choose it instead of harmful when the damage creeps. In speech really damaging or poisonous (of ideas) is plainer; pernicious is for serious analysis.',
    ['A pernicious myth about “natural” ability still circulates.', 'Damp had a pernicious effect on the collection.'],
    'Slowly destructive. Everyday: damaging / poisonous (ideas).',
    []
  ),
  proclivity: L(
    'A proclivity is a natural leaning towards something you keep doing. Formal writing uses it instead of tendency, sometimes with a hint of vice (a proclivity for gossip). In speech he tends to…; proclivity can sound like a psychologist’s note.',
    ['The paper shows a proclivity for dramatic headlines.', 'She never hid her proclivity for night work.'],
    'a proclivity for + noun/-ing. Everyday: tendency.',
    ['tendency']
  ),
  prosaic: L(
    'Prosaic means ordinary and unimaginative — prose rather than poetry, in spirit. Use it instead of boring when the disappointment is a lack of lift or colour. In speech a bit dull or ordinary; prosaic is a critic’s shrug, slightly lofty in chat.',
    ['Monday’s agenda was relentlessly prosaic.', 'He gave a prosaic account of a remarkable journey.'],
    'Plain, unpoetic. Everyday: dull / ordinary.',
    ['mundane']
  ),
  recalcitrant: L(
    'Recalcitrant means stubbornly unwilling to obey or cooperate — a person, a department, even a machine. Use it instead of naughty or difficult when the resistance is wilful. In speech uncooperative or will not play ball; recalcitrant is official and journalistic.',
    ['A recalcitrant printer delayed the mailing.', 'The board grew tired of recalcitrant members.'],
    'Stubbornly uncooperative. Everyday: defiant / uncooperative.',
    ['defiant']
  ),
  scrupulous: L(
    'Scrupulous means extremely careful to be honest and exact — ethics plus precision. Use it instead of careful when fairness or accuracy of record is the point. In speech very careful about… or meticulous; scrupulous is still usable, but it is a serious compliment, not small talk.',
    ['He kept scrupulous minutes of every meeting.', 'Scrupulous honesty forbade her to guess the figures.'],
    'Honest and exact. Everyday: meticulous (less moral).',
    ['meticulous']
  ),
  spurious: L(
    'Spurious means false even if it looks genuine — a claim, a correlation, a document. Use it instead of fake or false when the appearance of validity is the danger. In speech made-up or not genuine; spurious is for argument and scholarship.',
    ['The chart invited a spurious sense of precision.', 'They dismissed the letter as spurious.'],
    'Looks real, is not. Everyday: false / bogus.',
    ['false']
  ),
  superfluous: L(
    'Superfluous means extra in a useless way — more than you need. Writers cut superfluous words; it is more precise than extra. In speech unnecessary is the everyday choice, though superfluous is one of the C2 words you may actually hear from careful speakers.',
    ['The second password check proved superfluous.', 'Strike out any superfluous plot twist.'],
    'Unnecessary extra. Everyday: unnecessary.',
    ['unnecessary']
  ),
  taciturn: L(
    'Taciturn means you say very little as a habit, not because you are shy this afternoon. Use it instead of quiet in a character note. In speech he does not say much; taciturn is for novels and obituaries more than for introducing a colleague.',
    ['The driver was taciturn until the last mile.', 'A taciturn witness still shook the jury with one sentence.'],
    'Habitually uncommunicative. Everyday: quiet / reserved.',
    ['reserved']
  ),
  tenuous: L(
    'Tenuous means thin, weak, and uncertain — a grip, a link, a claim. Use it instead of weak when you want the image of something that could snap. It is fairly usable in educated speech; shaky or thin still sounds less essay-like.',
    ['Their hold on the seat looks tenuous.', 'The chapter rests on a tenuous analogy.'],
    'Thin and shaky. Everyday: weak / shaky.',
    ['shaky']
  ),
  vociferous: L(
    'Vociferous means loud and insistent in expressing a view, often protest. Use it instead of loud when the noise is opinion, not volume alone. In speech very vocal or noisy; vociferous is newspaper language, a little theatrical in the office.',
    ['A vociferous minority dominated the comments.', 'She was vociferous in defence of the library.'],
    'Loud in opinion or protest. Everyday: vocal / outspoken.',
    ['outspoken']
  ),
  zeitgeist: L(
    'The zeitgeist is the typical mood and set of ideas of a period — “the spirit of the time.” Critics and journalists use it when a film or slogan seems to bottle an era. In speech the mood of the time is plainer; zeitgeist is a German loan that can sound try-hard if you force it into small talk.',
    ['The advert misread the zeitgeist and flopped.', 'Podcasts became part of the cultural zeitgeist that decade.'],
    'the zeitgeist of + period. Everyday: the mood of the time.',
    []
  ),
}
