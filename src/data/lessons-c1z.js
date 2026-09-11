const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1Z = {
  pompous: L(
    'Pompous means self-important in speech or manner, as if rank itself were the argument: pompous crest copy, a pompous tone. Arrogant (already in the dictionary) is the close twin; a badge does not waive a cap.',
    ['Pompous crest copy does not waive the occupancy cap.', 'Arrogant is already in this course. Grandiose is the close twin. A crest is branding. A number on a certificate is the rule. Cite the number; then hang the crest if the inspector still allows the sitting.'],
    'Self-important; showing off. Close: arrogant (already in the dictionary). A crest ≠ a waived cap.',
    ['arrogant', 'grandiose', 'self-important']
  ),
  ponderous: L(
    'Ponderous means slow and clumsy because of weight, or dull and laboured in style: a ponderous minute, ponderous prose. Heavy (already in the dictionary) is everyday; length is not a filled cell.',
    ['A ponderous minute will not fill an empty n.', 'Heavy is already in this course. Laboured is the close twin. Length is a vibe. A cell is a count. Put the number in; then keep the length if the finding still stands.'],
    'Heavy, slow, or laboured. Everyday: heavy (already in the dictionary). Length ≠ a filled n.',
    ['heavy', 'laboured', 'clumsy']
  ),
  pontificate: L(
    'To pontificate is to speak at length as if you were the sole authority: pontificate in the lobby, pontificate on cover. Lecture (already in the dictionary) is everyday; a speech is not a named chair.',
    ['Do not pontificate in the lobby; minute a named chair.', 'Lecture is already in this course. Preach is the close twin. A speech is ceremony. A named vote is a file. Minute the name; then keep the speech if the resolution still stands.'],
    'Speak as if you were the expert. Everyday: lecture (already in the dictionary). A speech ≠ a named chair.',
    ['preach', 'hold forth', 'lay down the law']
  ),
  populist: L(
    'Populist (also a noun) means claiming to speak for ordinary people against elites; it is not merely “liked”: populist packed-hall copy, a populist cut. Popular (already in the dictionary) is everyday; a crowd vibe is not a count.',
    ['Populist packed-hall copy is still not an occupancy figure; count the seats.', 'Popular is already in this course. Demotic is the close twin. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the copy if the cap still holds.'],
    'Claiming to speak for “the people”. Everyday: popular (already in the dictionary). Packed copy ≠ a count.',
    ['anti-elite', 'demotic', 'grass-roots']
  ),
  portent: L(
    'A portent is a sign that something important, often bad, will happen: a portent in the foyer, a portent of a fail. Sign (already in the dictionary) is everyday; atmosphere is not a named risk.',
    ['A portent in the foyer is a named risk, not “atmosphere”.', 'Sign is already in this course. Omen is the close twin. Atmosphere is a vibe. A line on the register is a file. Write the risk; then keep the atmosphere if the clause still sits on a fact.'],
    'An omen, usually of trouble. Everyday: sign (already in the dictionary). Atmosphere ≠ a named risk.',
    ['omen', 'harbinger', 'sign']
  ),
  posthumous: L(
    'Posthumous means happening, awarded, or published after the person’s death: a posthumous dedication, a posthumous paper. Death (already in the dictionary) is everyday; ceremony is not a named spare.',
    ['A posthumous dedication is ceremony, not a named spare on the rota.', 'Death is already in this course. After-death is the close twin. A dedication is ceremony. A name on the log is cover. Write the name; then keep the dedication if the sitting still stands.'],
    'After the person’s death. Everyday: death (already in the dictionary). A dedication ≠ cover.',
    ['after-death', 'post-mortem', 'commemorative']
  ),
  postulate: L(
    'To postulate is to put something forward as a starting claim, without yet proving it: postulate an n, a postulated spare. Assume (already in the dictionary) is everyday; a guess is not a cell.',
    ['Do not postulate an n; put the raw count in the cell.', 'Assume is already in this course. Posit is the close twin. A guess is a slogan. A codebook line is methods. Write the raw number; then mark it postulated if the rule still allows it.'],
    'Put forward as a starting claim. Everyday: assume (already in the dictionary). A guess ≠ a filled n.',
    ['posit', 'assume', 'hypothesise']
  ),
  potable: L(
    'Potable means safe to drink: potable water, a potable tap. Drink (already in the dictionary) is everyday; a slogan is not a tap test.',
    ['Potable water is a tap test on the log, not a prospectus slogan.', 'Drink is already in this course. Drinkable is the close twin. A slogan is comms. A log is a file. Write the test; then keep the slogan if the inspector still allows the tap.'],
    'Safe to drink. Everyday: drink (already in the dictionary). A slogan ≠ a tap test.',
    ['drinkable', 'fit to drink', 'safe']
  ),
  plenary: L(
    'Plenary means attended by all members of a body, or full and complete: a plenary sitting, plenary powers. Full (already in the dictionary) is everyday; a packed vibe is not a named roll.',
    ['A plenary needs a named roll, not a packed vibe.', 'Full is already in this course. Whole-membership is the close twin. Packed is a vibe. A named list with a date is the file. Write the roll; then call it plenary if every seat still has a name.'],
    'For the whole membership; complete. Everyday: full (already in the dictionary). A packed vibe ≠ a roll.',
    ['full', 'whole', 'complete']
  ),
  pliable: L(
    'Pliable means easy to bend, or easily influenced: a pliable codebook, pliable hours. Flexible (already in the dictionary) is everyday; a vibe is not a named slice.',
    ['A pliable codebook still needs a named slice; a vibe is not a frame.', 'Flexible is already in this course. Malleable is the close twin. A vibe is talk. A named list with a date is methods. Write the frame; then keep the flex if the ethics minute still allows the cut.'],
    'Easily bent or influenced. Everyday: flexible (already in the dictionary). A vibe ≠ a frame.',
    ['flexible', 'malleable', 'yielding']
  ),
  poise: L(
    'Poise is calm self-control, or a balanced way of holding the body: poise in the lobby, keep your poise. Balance (already in the dictionary) is everyday; composure is not invigilation.',
    ['Poise in the lobby is not a named invigilator.', 'Balance is already in this course. Composure is the close twin. A lobby scene is a vibe. A name on the log is cover. Write the name; then keep the poise if the sitting still stands.'],
    'Calm composure; balanced bearing. Everyday: balance (already in the dictionary). Composure ≠ cover.',
    ['composure', 'balance', 'self-possession']
  ),
  polemical: L(
    'Polemical means written or spoken as a strong attack on an opposing view: polemical copy, a polemical minute. Argument (already in the dictionary) is everyday; attack-copy is not a finding.',
    ['Polemical copy is not a finding; put the raw n in the cell.', 'Argument is already in this course. Combative is the close twin. Attack-copy is comms. A codebook line is methods. Write the raw number; then keep the polemic if the clause still sits on a fact.'],
    'Strongly attacking a view. Everyday: argument (already in the dictionary). Attack-copy ≠ a finding.',
    ['combative', 'contentious', 'argumentative']
  ),
  politic: L(
    'Politic means prudent and likely to be advantageous; it is not the same as political (already in the dictionary): a politic citation, politic silence. Wise (already in the dictionary) is the everyday twin; a slogan will not save overflow.',
    ['It is politic to cite the occupancy cap; a slogan will not save overflow.', 'Wise is already in this course. Political is already in this course and is the trap, not the twin. Prudent is the close twin. A slogan is comms. A number on a certificate is the rule. Cite the number; then keep the slogan if the cap still holds.'],
    'Prudent; wisely judged. Everyday: wise (already in the dictionary). Not the same as political. A slogan ≠ a cap.',
    ['prudent', 'wise', 'judicious']
  ),
  plucky: L(
    'Plucky means brave and determined, especially when the odds are poor: plucky cover talk, a plucky spare. Brave (already in the dictionary) is everyday; courage-talk does not name a spare.',
    ['Plucky cover talk still needs a named spare on the rota.', 'Brave is already in this course. Spirited is the close twin. Courage-talk is a slogan. A name on the log is cover. Write the name; then keep the pluck if the sitting still stands.'],
    'Brave despite the odds. Everyday: brave (already in the dictionary). Courage-talk ≠ a named spare.',
    ['brave', 'spirited', 'gutsy']
  ),
  plumb: L(
    'To plumb is to measure depth or understand something fully; as an adverb it means exactly (not plumbing): plumb the empty cell, plumb in the middle. Exact (already in the dictionary) is everyday; a slogan will not fill a cell.',
    ['Plumb the empty cell; a slogan will not fill it.', 'Exact is already in this course. Fathom is the close twin. A slogan is comms. A cell is a count. Put the number in; then keep the slogan if the finding still stands.'],
    'Measure fully; exactly. Everyday: exact (already in the dictionary). A slogan ≠ a filled n.',
    ['fathom', 'sound', 'exactly']
  ),
  plunder: L(
    'To plunder is to steal goods using force, especially in war (also the stolen goods): plunder of the night-bus line, plunder a budget. Steal (already in the dictionary) is everyday; “character” is not a budget line.',
    ['Plunder of the night-bus line is a budget hole, not “character”.', 'Steal is already in this course. Loot is the close twin. Character is a slogan. A line in the budget is cover. Earmark the night-bus line; then keep the character if the bus still runs.'],
    'Steal goods by force; loot. Everyday: steal (already in the dictionary). “Character” ≠ a budget line.',
    ['loot', 'sack', 'steal']
  ),
  pore: L(
    'To pore over something is to study it with close, sustained attention (not a skin pore): pore over the codebook, pore over a log. Study (already in the dictionary) is everyday; a vibe is not a frame.',
    ['Pore over the codebook; a vibe is not a sampling frame.', 'Study is already in this course. Scrutinise is the close twin. A vibe is talk. A named list with a date is methods. Write the frame; then keep the vibe if the clause still sits on a fact.'],
    'Study something very closely. Everyday: study (already in the dictionary). A vibe ≠ a frame.',
    ['scrutinise', 'study', 'examine']
  ),
  pillage: L(
    'To pillage is to rob a place using violence, especially in war — the place is sacked, not merely the goods taken: pillage the n, pillage a slice. Steal (already in the dictionary) is everyday; dropping a slice without a note is not clarity.',
    ['To drop the night slice without a note is to pillage the n, not “clarity”.', 'Steal is already in this course. Sack is the close twin. Clarity is a slogan. A named list with a date is methods. Write the frame; then drop the slice if the ethics minute still allows the cut.'],
    'Violently rob a place. Everyday: steal (already in the dictionary). “Clarity” ≠ a codebook note.',
    ['sack', 'ransack', 'loot']
  ),
  pittance: L(
    'A pittance is a very small amount of money, especially as pay: a pittance for the night, paid a pittance. Small (already in the dictionary) is everyday; tiny pay still leaves a cover hole if the cell is unpaid.',
    ['A pittance for the night is still a cover hole if the cell is unpaid.', 'Small is already in this course. Peanuts is the close twin. A pittance is a slogan if it is unpaid. A name and a rate on the log are cover. Write the rate; then keep the sitting if the grid is still full.'],
    'Tiny, inadequate pay. Everyday: small (already in the dictionary). Unpaid ≠ cover.',
    ['peanuts', 'trifle', 'scrap']
  ),
  pith: L(
    'Pith is the most important part of a speech, argument, or idea: the pith of the abstract, the pith of the minute. Essence (already in the dictionary) is the close twin; adjectives will not fill a cell.',
    ['The pith of the abstract is the raw n, not the adjectives.', 'Essence is already in this course. Core is already in this course. Adjectives are branding. A cell is a count. Put the number in; then keep the adjectives if the finding still stands.'],
    'The essential core. Close: essence (already in the dictionary). Adjectives ≠ a filled n.',
    ['essence', 'core', 'nub']
  ),
  primordial: L(
    'Primordial means existing from the beginning of time, or original and basic: primordial copy, a primordial claim. Ancient (already in the dictionary) is everyday; “always” is not a count.',
    ['Primordial “we have always been full” copy is still not a count.', 'Ancient is already in this course. Primeval is the close twin. Always is a slogan. A number on a certificate is the rule. Count the seats; then keep the always if the cap still holds.'],
    'From the earliest beginning. Everyday: ancient (already in the dictionary). “Always” ≠ a count.',
    ['primeval', 'original', 'ancient']
  ),
  prodigy: L(
    'A prodigy is a young person with exceptional skill or talent: prodigy copy, a night prodigy. Talent (already in the dictionary) is everyday; a poster is not a named spare.',
    ['Prodigy copy on a poster is not a named spare on the rota.', 'Talent is already in this course. Whizz is the close twin. A poster is branding. A name on the log is cover. Write the name; then keep the poster if the sitting still stands.'],
    'A strikingly gifted young person. Everyday: talent (already in the dictionary). A poster ≠ cover.',
    ['whizz', 'genius', 'talent']
  ),
  profane: L(
    'Profane (also a verb) means not respectful of religion or of what a group treats as sacred: profane the ethics minute, profane copy. Rude (already in the dictionary) is everyday; a slogan is not a signature.',
    ['Do not profane the ethics minute with a slogan; keep the signature.', 'Rude is already in this course. Irreverent is the close twin. A slogan is comms. A signature is a file. Keep the signature; then keep the slogan if the clause still sits on consent.'],
    'Irreverent; treat as not sacred. Everyday: rude (already in the dictionary). A slogan ≠ an ethics signature.',
    ['irreverent', 'sacrilegious', 'impious']
  ),
  proffer: L(
    'To proffer is to offer something, especially by holding it out for acceptance: proffer a named spare, proffer a figure. Offer (already in the dictionary) is everyday; a wreath will not staff a night.',
    ['Proffer a named spare, not a wreath, if the night cell is empty.', 'Offer is already in this course. Tender is the close twin. A wreath is ceremony. A name on the log is cover. Write the name; then hang the wreath if the sitting still stands.'],
    'Hold out; offer. Everyday: offer (already in the dictionary). A wreath ≠ a named spare.',
    ['offer', 'tender', 'hold out']
  ),
  prognosis: L(
    'A prognosis is a forecast of how an illness or situation is likely to develop: the prognosis for an empty n, a grim prognosis. Forecast (already in the dictionary) is everyday; a caption will not save a methods fail.',
    ['The prognosis for an empty n is a methods fail; a caption will not save it.', 'Forecast is already in this course. Outlook is the close twin. A caption is comms. A codebook line is methods. Write the raw number; then keep the caption if the finding still stands.'],
    'Likely course of an illness or situation. Everyday: forecast (already in the dictionary). A caption ≠ a saved n.',
    ['outlook', 'forecast', 'prospect']
  ),
  promulgate: L(
    'To promulgate is to announce a law, doctrine, or official decision so that it takes effect: promulgate the occupancy number, promulgate a rule. Announce (already in the dictionary) is everyday; a slogan is not a certificate.',
    ['Promulgate the occupancy number; a slogan is not a certificate.', 'Announce is already in this course. Publish is the close twin. A slogan is comms. A number on a certificate is the rule. Cite the number; then keep the slogan if the cap still holds.'],
    'Announce officially, as a rule. Everyday: announce (already in the dictionary). A slogan ≠ a certificate.',
    ['publish', 'announce', 'issue']
  ),
  propagate: L(
    'To propagate is to spread an idea, or to breed plants or animals: propagate packed-hall copy, propagate a rumour. Spread (already in the dictionary) is everyday; a vibe is not a count.',
    ['Do not propagate packed-hall copy; count the seats.', 'Spread is already in this course. Disseminate is the close twin. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the copy if the cap still holds.'],
    'Spread an idea; breed. Everyday: spread (already in the dictionary). Packed copy ≠ a count.',
    ['spread', 'disseminate', 'circulate']
  ),
  propitiate: L(
    'To propitiate is to win back someone’s favour, often with a gift or concession: propitiate the inspector, propitiate a board. Calm (already in the dictionary) is everyday; a wreath will not move a cap.',
    ['A wreath will not propitiate the inspector; cite the occupancy cap.', 'Calm is already in this course. Appease is the close twin. A wreath is ceremony. A number on a certificate is the rule. Cite the number; then hang the wreath if the inspector still allows the sitting.'],
    'Appease; win back favour. Everyday: calm (already in the dictionary). A wreath ≠ a cap.',
    ['appease', 'placate', 'mollify']
  ),
  propitious: L(
    'Propitious means giving a good chance of success; well timed and favourable: a propitious foyer, a propitious hour. Favourable (already in the dictionary) is the close twin; décor is not a fire certificate.',
    ['A propitious foyer is décor, not a fire certificate; check the door.', 'Favourable is already in this course. Auspicious is the close twin. Décor is branding. A log is a file. Check the door; then keep the polish if the inspector still allows the sitting.'],
    'Favourable; well timed. Close: favourable (already in the dictionary). Décor ≠ a fire certificate.',
    ['favourable', 'auspicious', 'timely']
  ),
  propound: L(
    'To propound is to put forward an idea or theory for people to consider: propound a filled n, propound a frame. Propose (already in the dictionary) is everyday; a vibe is not a finding.',
    ['Propound a filled n, not a vibe, if you want a finding.', 'Propose is already in this course. Advance is the close twin. A vibe is talk. A codebook line is methods. Write the raw number; then keep the theory if the clause still sits on a fact.'],
    'Put forward for consideration. Everyday: propose (already in the dictionary). A vibe ≠ a finding.',
    ['propose', 'advance', 'put forward']
  ),
  proscribe: L(
    'To proscribe is to forbid something officially, especially by law (the trap is prescribe, which means recommend): the cap proscribes overflow, proscribe a cut. Ban (already in the dictionary) is everyday; a slogan cannot waive a cap.',
    ['The cap proscribes overflow; a slogan cannot waive it.', 'Ban is already in this course. Forbid is already in this course. A slogan is comms. A number on a certificate is the rule. Keep the number; then keep the slogan if the cap still holds.'],
    'Officially forbid. Everyday: ban (already in the dictionary). Opposite of recommend. A slogan ≠ a waived cap.',
    ['forbid', 'ban', 'outlaw']
  ),
  prostrate: L(
    'Prostrate means lying face down, or completely exhausted and overcome: a prostrate unnamed spare, prostrate with fatigue. Exhausted (already in the dictionary) is the close twin; dedication-talk does not staff a night.',
    ['A prostrate unnamed spare is still a cover hole, not “dedication”.', 'Exhausted is already in this course. Laid low is the close twin. Dedication is a slogan. A name on the log is cover. Write the name; then call it dedication if the grid is still full.'],
    'Face down; utterly exhausted. Close: exhausted (already in the dictionary). “Dedication” ≠ a named spare.',
    ['prone', 'laid low', 'exhausted']
  ),
  protean: L(
    'Protean means able to change often or take many forms: protean foyer copy, a protean frame. Change (already in the dictionary) is everyday; shifting copy is not a sampling frame.',
    ['Protean foyer copy is not a sampling frame; name the slice.', 'Change is already in this course. Variable is already in this course. A foyer scene is a vibe. A named list with a date is methods. Write the frame; then report the scene in the limitations if it still belongs there.'],
    'Changeable; many-formed. Everyday: change (already in the dictionary). Foyer copy ≠ a frame.',
    ['changeable', 'versatile', 'mutable']
  ),
  protract: L(
    'To protract is to make something last longer than is necessary: protract an unstaffed sitting, protract a gap. Prolong (already in the dictionary) is the close twin; kindness-talk does not name a spare.',
    ['Do not protract an unstaffed sitting “to be kind”; name the spare.', 'Prolong is already in this course. Extend is already in this course. Kind is a slogan. A name on the log is cover. Write the name; then keep the kindness if the sitting still stands.'],
    'Draw out; make it last longer. Close: prolong (already in the dictionary). “Kind” ≠ a named spare.',
    ['prolong', 'extend', 'draw out']
  ),
  prowess: L(
    'Prowess is great skill or ability, especially shown in action: prowess in the prospectus, sporting prowess. Skill (already in the dictionary) is everyday; style copy is not an occupancy figure.',
    ['Prowess in the prospectus is comms, not an occupancy figure.', 'Skill is already in this course. Expertise is the close twin. A prospectus is branding. A number on a certificate is the rule. Count the seats; then keep the prowess if the cap still holds.'],
    'Outstanding skill. Everyday: skill (already in the dictionary). Prospectus style ≠ a count.',
    ['skill', 'expertise', 'ability']
  ),
  proxy: L(
    'A proxy is a person or thing authorised to act for another: a proxy for a certificate, vote by proxy. Substitute (already in the dictionary) is everyday; a crest is not a fire number.',
    ['A crest is not a proxy for a fire certificate; cite the number.', 'Substitute is already in this course. Stand-in is the close twin. A crest is branding. A number on a certificate is the rule. Cite the number; then hang the crest if the inspector still allows the sitting.'],
    'Someone acting in another’s place. Everyday: substitute (already in the dictionary). A crest ≠ a certificate.',
    ['stand-in', 'deputy', 'substitute']
  ),
  puerile: L(
    'Puerile means childish and silly in a way that is irritating in an adult: puerile “full house” copy, a puerile caption. Child (already in the dictionary) is the everyday root; packed talk is not a count.',
    ['It is puerile to hang “full house” on an empty cell.', 'Child is already in this course. Juvenile is the close twin. Packed is a vibe. A number on a certificate is the rule. Count the seats; then hang the caption if the cap still holds.'],
    'Childishly silly. Everyday: child (already in the dictionary). Packed copy ≠ a count.',
    ['childish', 'juvenile', 'infantile']
  ),
  punctilious: L(
    'Punctilious means very careful to behave correctly or to get every detail right: a punctilious minute, punctilious about the codebook. Careful (already in the dictionary) is everyday; fuss about form still needs a raw n.',
    ['A punctilious minute still needs the raw n in the cell.', 'Careful is already in this course. Precise is already in this course. Form is a vibe. A codebook line is methods. Write the raw number; then keep the form if the rule still allows it.'],
    'Fussy about correct detail. Everyday: careful (already in the dictionary). Form ≠ a filled n.',
    ['meticulous', 'scrupulous', 'precise']
  ),
  pundit: L(
    'A pundit is a person who gives opinions as an expert, especially in the media: a pundit in the lobby, a board pundit. Expert (already in the dictionary) is everyday; commentary is not invigilation.',
    ['A pundit in the lobby is not a named invigilator.', 'Expert is already in this course. Commentator is the close twin. A speech is ceremony. A name on the log is cover. Write the name; then keep the commentary if the sitting still stands.'],
    'A public expert-commentator. Everyday: expert (already in the dictionary). Commentary ≠ cover.',
    ['commentator', 'authority', 'expert']
  ),
  puritanical: L(
    'Puritanical means very strict in moral or religious matters, often more than the situation needs: a puritanical handbook, puritanical hours. Strict (already in the dictionary) is everyday; supposed virtue is not consent.',
    ['A puritanical handbook is not consent; keep the ethics signature.', 'Strict is already in this course. Austere is the close twin. A handbook line is talk. A signature is a file. Keep the signature; then keep the austerity if the clause still sits on consent.'],
    'Morally austere; severely strict. Everyday: strict (already in the dictionary). A handbook ≠ an ethics signature.',
    ['austere', 'strait-laced', 'strict']
  ),
  purloin: L(
    'To purloin is to steal, often sneakily rather than by open force: purloin the night slice, purloin a line. Steal (already in the dictionary) is everyday; dropping a slice without a note is still a methods fail.',
    ['Do not purloin the night slice from the n without a codebook note.', 'Steal is already in this course. Filch is the close twin. Clarity is a slogan. A named list with a date is methods. Write the frame; then drop the slice if the ethics minute still allows the cut.'],
    'Steal, especially sneakily. Everyday: steal (already in the dictionary). “Clarity” ≠ a codebook note.',
    ['filch', 'pinch', 'steal']
  ),
  purvey: L(
    'To purvey is to supply goods, services, or information, especially as a regular trade: purvey a last-bus time, purvey copy. Supply (already in the dictionary) is everyday; prospectus talk is not a published time.',
    ['Prospectus copy does not purvey a last-bus time; publish the time.', 'Supply is already in this course. Provide is already in this course. A prospectus is branding. A last-service time is a file. Publish the time; then keep the skyline if the bus still runs.'],
    'Supply, especially as a trade. Everyday: supply (already in the dictionary). Prospectus copy ≠ a last bus.',
    ['supply', 'provide', 'furnish']
  ),
  putative: L(
    'Putative means generally thought to be, without the fact yet being settled: a putative n, the putative spare. Assume (already in the dictionary) is everyday; “supposed” is not a cell.',
    ['A putative n is still a methods hole until the raw count is in the cell.', 'Assume is already in this course. Allege is already in this course. Supposed is a slogan. A codebook line is methods. Write the raw number; then mark it putative if the rule still allows it.'],
    'Supposed; generally taken to be. Everyday: assume (already in the dictionary). “Supposed” ≠ a filled n.',
    ['supposed', 'reputed', 'presumed']
  ),
  pyrrhic: L(
    'A pyrrhic victory is won at so great a cost that it is hardly worth winning: a pyrrhic cut, a pyrrhic save. Victory (already in the dictionary) is everyday; a saving is still a catchment hole if the bus dies.',
    ['A pyrrhic cut to the night bus is still a catchment hole.', 'Victory is already in this course. Costly is the close twin. A saving is a slogan. A last-service time is a file. Publish the time; then keep the saving if the bus still runs.'],
    'Won at too high a cost. Everyday: victory (already in the dictionary). A saving ≠ a last bus.',
    ['costly', 'hollow', 'ruinous']
  ),
  precursor: L(
    'A precursor is something that comes before another thing and leads towards it: a precursor slide, a precursor sitting. Before (already in the dictionary) is everyday; a teaser is not a filled cell.',
    ['A precursor slide is branding, not a filled methods cell.', 'Before is already in this course. Forerunner is the close twin. A slide is comms. A cell is a count. Put the number in; then keep the teaser if the finding still stands.'],
    'A forerunner. Everyday: before (already in the dictionary). A teaser slide ≠ a filled n.',
    ['forerunner', 'harbinger', 'predecessor']
  ),
  predilection: L(
    'A predilection is a preference for something, often a standing liking: a predilection for packed-hall copy, a predilection for night hours. Preference (already in the dictionary) is the close twin; a liking is not a count.',
    ['A predilection for packed-hall copy still needs a count.', 'Preference is already in this course. Prefer is already in this course. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the liking if the cap still holds.'],
    'A standing preference. Close: preference (already in the dictionary). Packed copy ≠ a count.',
    ['preference', 'liking', 'penchant']
  ),
  'pre-eminent': L(
    'Pre-eminent means more distinguished or outstanding than all others in a field: a pre-eminent crest, a pre-eminent chair. Outstanding (already in the dictionary) is everyday; rank does not waive a cap.',
    ['A pre-eminent crest does not waive the occupancy cap.', 'Outstanding is already in this course. Foremost is the close twin. A crest is branding. A number on a certificate is the rule. Keep the number; then hang the crest if the inspector still allows the sitting.'],
    'Surpassing all others. Everyday: outstanding (already in the dictionary). A crest ≠ a waived cap.',
    ['outstanding', 'foremost', 'unrivalled']
  ),
  'pre-empt': L(
    'To pre-empt is to act first so as to prevent something or take its place: pre-empt overflow, pre-empt a cut. Prevent (already in the dictionary) is everyday; hanging a slogan is not forestalling a breach.',
    ['Pre-empt overflow by citing the occupancy cap, not by hanging a slogan.', 'Prevent is already in this course. Forestall is the close twin. A slogan is comms. A number on a certificate is the rule. Cite the number; then keep the slogan if the cap still holds.'],
    'Act first to forestall. Everyday: prevent (already in the dictionary). A slogan ≠ a cap.',
    ['forestall', 'anticipate', 'prevent']
  ),
  prerogative: L(
    'A prerogative is a right or privilege that belongs only to a particular person or office: a chair’s prerogative, the board’s prerogative. Privilege (already in the dictionary) is the close twin; office is not a waived cap.',
    ['A chair’s prerogative is not to waive the occupancy cap.', 'Privilege is already in this course. Right is already in this course. Office is a vibe. A number on a certificate is the rule. Keep the number; then keep the chair if the inspector still allows the sitting.'],
    'An exclusive right. Close: privilege (already in the dictionary). Office ≠ a waived cap.',
    ['privilege', 'right', 'entitlement']
  ),
  presage: L(
    'To presage (also a noun) is to be a sign that something, often bad, will happen: an empty cell presages a fail, a presage of trouble. Predict (already in the dictionary) is everyday; a caption will not save a methods hole.',
    ['An empty cell presages a methods fail; a caption will not save it.', 'Predict is already in this course. Foretell is the close twin. A caption is comms. A codebook line is methods. Write the raw number; then keep the caption if the finding still stands.'],
    'Foretell; be an omen of. Everyday: predict (already in the dictionary). A caption ≠ a saved n.',
    ['foretell', 'portend', 'predict']
  ),
  preside: L(
    'To preside is to be in charge of a meeting or formal event: preside in the minute, preside over a sitting. Lead (already in the dictionary) is everyday; a mood is not a resolution.',
    ['Preside in the minute with a named vote; a mood is not a resolution.', 'Lead is already in this course. Chair (the verb sense) is the close twin. A mood is a vibe. A named vote is a file. Minute the vote; then keep the mood if the sitting still stands.'],
    'Be in charge of a meeting. Everyday: lead (already in the dictionary). A mood ≠ a resolution.',
    ['chair', 'conduct', 'lead']
  ),
  pretence: L(
    'A pretence is a false display intended to deceive (British spelling; US pretense): a pretence of a full house, under a pretence. Fake (already in the dictionary) is everyday; packed talk is not a count.',
    ['“Full house” is a pretence if the cell is empty; count the seats.', 'Fake is already in this course. Show is already in this course. Packed is a vibe. A number on a certificate is the rule. Count the seats; then hang the caption if the cap still holds.'],
    'A false show (UK spelling). Everyday: fake (already in the dictionary). Packed copy ≠ a count.',
    ['show', 'sham', 'facade']
  ),
  primacy: L(
    'Primacy is the state of being first in importance: primacy of the raw n, the primacy of cover. First (already in the dictionary) is everyday; adjectives will not fill a cell.',
    ['Give primacy to the raw n; adjectives will not fill the cell.', 'First is already in this course. Main is already in this course. Adjectives are branding. A cell is a count. Put the number in; then keep the adjectives if the finding still stands.'],
    'First place; greatest importance. Everyday: first (already in the dictionary). Adjectives ≠ a filled n.',
    ['priority', 'pre-eminence', 'first place']
  ),
  primal: L(
    'Primal means relating to an early stage of development, or basic and important: primal custom, a primal claim. Basic (already in the dictionary) is everyday; “always done this way” is not a codebook.',
    ['Primal “we have always done it this way” is not a codebook.', 'Basic is already in this course. Primitive is the close twin. Always is a slogan. A codebook line is methods. Write the rule; then keep the custom if the inspector still allows the sitting.'],
    'Original; fundamental. Everyday: basic (already in the dictionary). “Always” ≠ a codebook.',
    ['primitive', 'fundamental', 'original']
  ),
  propriety: L(
    'Propriety is correct or socially acceptable behaviour: propriety in the foyer, a sense of propriety. Polite (already in the dictionary) is everyday; manners are not an ethics signature.',
    ['Propriety in the foyer is not an ethics signature; keep the line.', 'Polite is already in this course. Decorum is the close twin. Manners are ceremony. A signature is a file. Keep the signature; then keep the manners if the clause still sits on consent.'],
    'Correct, accepted behaviour. Everyday: polite (already in the dictionary). Manners ≠ an ethics signature.',
    ['decorum', 'etiquette', 'correctness']
  ),
  quirk: L(
    'A quirk is a peculiar habit, or an unexpected twist in something: a quirk in the n, a quirk of the rota. Odd (already in the dictionary) is everyday; a peculiarity belongs in limitations, not in a slogan.',
    ['A quirk in the n belongs in the limitations, not in a slogan.', 'Odd is already in this course. Habit is already in this course. A slogan is comms. A limitations line is methods. Write the quirk; then keep the slogan if the clause still sits on a fact.'],
    'A peculiar habit or twist. Everyday: odd (already in the dictionary). A slogan ≠ a limitations line.',
    ['peculiarity', 'idiosyncrasy', 'twist']
  ),
  rebut: L(
    'To rebut is to argue that a claim is false, using evidence rather than mere denial: rebut the invented n, rebut a rumour. Contradict (already in the dictionary) is everyday; rounding is still a methods fail.',
    ['Rebut the invented n in the minute; put the raw count in the cell.', 'Contradict is already in this course. Deny is already in this course. Rounding is a slogan. A codebook line is methods. Write the raw number; then polish the abstract if the rule still allows it.'],
    'Argue against with evidence. Everyday: contradict (already in the dictionary). Rounding ≠ a true n.',
    ['refute', 'counter', 'disprove']
  ),
  redress: L(
    'Redress is something that puts a wrong right (also a verb: to redress it): the redress for an empty n, seek redress. Remedy (already in the dictionary) is the close twin; a footer will not fill a cell.',
    ['The redress for an empty n is a number, not a disclaimer footer.', 'Remedy is already in this course. Repair is already in this course. A footer is comms. A cell is a count. Put the number in; then keep the footer if the finding still stands.'],
    'A setting-right of a wrong. Close: remedy (already in the dictionary). A footer ≠ a filled n.',
    ['remedy', 'reparation', 'correction']
  ),
  remuneration: L(
    'Remuneration is money paid for work: remuneration on the night rota, fair remuneration. Payment (already in the dictionary) is everyday; a slogan is not a staffing minute.',
    ['Remuneration on the night rota is a staffing minute, not a slogan.', 'Payment is already in this course. Salary is already in this course. A slogan is comms. A name and a rate on the log are cover. Write the rate; then keep the slogan if the grid is still full.'],
    'Pay for work done. Everyday: payment (already in the dictionary). A slogan ≠ a staffing minute.',
    ['pay', 'salary', 'payment']
  ),
  replete: L(
    'Replete means filled or well supplied with something: a hall replete with slogans, replete with adjectives. Full (already in the dictionary) is everyday; packed talk is not an occupancy figure.',
    ['A hall replete with slogans is still not an occupancy figure.', 'Full is already in this course. Packed is already in this course. A slogan is comms. A number on a certificate is the rule. Count the seats; then keep the slogans if the cap still holds.'],
    'Filled; well supplied. Everyday: full (already in the dictionary). Slogans ≠ a count.',
    ['full', 'filled', 'teeming']
  ),
  reprehensible: L(
    'Reprehensible means deserving strong criticism: a reprehensible cut, reprehensible silence. Wrong (already in the dictionary) is everyday; dropping a slice without a note is not clarity.',
    ['Dropping the night slice without a note is reprehensible, not “clarity”.', 'Wrong is already in this course. Blameworthy is the close twin. Clarity is a slogan. A named list with a date is methods. Write the frame; then drop the slice if the ethics minute still allows the cut.'],
    'Deserving blame. Everyday: wrong (already in the dictionary). “Clarity” ≠ a codebook note.',
    ['blameworthy', 'indefensible', 'shameful']
  ),
  reprieve: L(
    'A reprieve is a delay or cancellation of punishment, or a short period of relief: a reprieve for an empty n, a brief reprieve. Delay (already in the dictionary) is everyday; a caption will not save a cell.',
    ['A caption is not a reprieve for an empty n; put the number in.', 'Delay is already in this course. Mercy is already in this course. A caption is comms. A codebook line is methods. Write the raw number; then keep the caption if the finding still stands.'],
    'A delay of punishment; brief relief. Everyday: delay (already in the dictionary). A caption ≠ a saved n.',
    ['stay', 'remission', 'relief']
  ),
  repudiate: L(
    'To repudiate is to refuse to accept, or to disown, something: repudiate the rounded abstract, repudiate a claim. Reject (already in the dictionary) is everyday; rounding is still a methods fail.',
    ['Repudiate the rounded abstract; put the raw count in the cell.', 'Reject is already in this course. Refuse is already in this course. Rounding is a slogan. A codebook line is methods. Write the raw number; then polish the abstract if the rule still allows it.'],
    'Reject; refuse to be bound by. Everyday: reject (already in the dictionary). Rounding ≠ a true n.',
    ['reject', 'disown', 'renounce']
  ),
  requisite: L(
    'Requisite (also a noun) means required for a particular purpose: a named spare is requisite, the requisite n. Necessary (already in the dictionary) is everyday; a slogan is not cover.',
    ['A named spare is requisite; a slogan is not cover.', 'Necessary is already in this course. Need is already in this course. A slogan is comms. A name on the log is cover. Write the name; then keep the slogan if the sitting still stands.'],
    'Required; a necessary thing. Everyday: necessary (already in the dictionary). A slogan ≠ cover.',
    ['necessary', 'required', 'essential']
  ),
  rescind: L(
    'To rescind is to officially cancel a law, order, or agreement: rescind the invented n, rescind a cut. Cancel (already in the dictionary) is everyday; rounding is still a methods fail.',
    ['Rescind the invented n in the minute; put the raw count in the cell.', 'Cancel is already in this course. Withdraw is already in this course. Rounding is a slogan. A codebook line is methods. Write the raw number; then polish the abstract if the rule still allows it.'],
    'Officially revoke. Everyday: cancel (already in the dictionary). Rounding ≠ a true n.',
    ['revoke', 'repeal', 'cancel']
  ),
  respite: L(
    'A respite is a short period of rest from something difficult: respite in the foyer, a respite from the night. Rest (already in the dictionary) is everyday; a pause in the lobby is not a named spare.',
    ['Respite in the foyer is not a named spare on the rota.', 'Rest is already in this course. Break is already in this course. A foyer pause is a vibe. A name on the log is cover. Write the name; then keep the pause if the sitting still stands.'],
    'A short break from strain. Everyday: rest (already in the dictionary). A foyer pause ≠ cover.',
    ['break', 'relief', 'pause']
  ),
  restive: L(
    'Restive means restless and impatient of control — not restful: a restive foyer, a restive cohort. Impatient (already in the dictionary) is the close twin; unease in the lobby is still an incident file.',
    ['A restive foyer is an incident file, not “banter”.', 'Impatient is already in this course. Restless is the close twin. Banter is talk. A log is a file. Write the incident; then keep the banter if the clause still sits on a fact.'],
    'Impatient and hard to control. Close: impatient (already in the dictionary). Not restful. Banter ≠ an incident file.',
    ['restless', 'impatient', 'unruly']
  ),
  retribution: L(
    'Retribution is severe punishment believed to be deserved in return for a wrong: retribution for a tone, seek retribution. Revenge (already in the dictionary) is the close twin; a leak is still a breach.',
    ['A leaked n is not retribution for a disliked tone; it is a breach.', 'Revenge is already in this course. Punishment is already in this course. Payback is a slogan. An embargo line is a file. Keep the embargo; then keep the tone if the clause still sits on a fact.'],
    'Deserved punishment in return. Close: revenge (already in the dictionary). Payback ≠ a lawful file.',
    ['revenge', 'vengeance', 'punishment']
  ),
  rife: L(
    'Rife means very common, especially of something unpleasant: rife “full house” copy, rife with gaps. Prevalent (already in the dictionary) is the close twin; packed talk is not a count.',
    ['Rife “full house” copy is still not an occupancy figure; count the seats.', 'Prevalent is already in this course. Widespread is already in this course. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the copy if the cap still holds.'],
    'Widespread (often of something bad). Close: prevalent (already in the dictionary). Packed copy ≠ a count.',
    ['widespread', 'prevalent', 'endemic']
  ),
  rigour: L(
    'Rigour is the quality of being strict, thorough, or severe (British spelling; US rigor): methods rigour, the rigour of a codebook. Strict (already in the dictionary) is everyday; jacket colour is not a methods rule.',
    ['Methods rigour is a codebook line, not the jacket colour.', 'Strict is already in this course. Precise is already in this course. A jacket is branding. A codebook line is methods. Write the raw number; then recut the jacket if the inspector still allows the sitting.'],
    'Strict thoroughness (UK spelling). Everyday: strict (already in the dictionary). A jacket ≠ a codebook.',
    ['thoroughness', 'strictness', 'precision']
  ),
}
