const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2N = {
  objurgate: L(
    'To objurgate is to rebuke someone harshly (formal / literary): objurgate a colleague, objurgated for slackness. Scold is everyday; hector (already in the dictionary) is to browbeat, not merely to reprove. A numbered methods objection is not a scolding. Do not objurgate a junior for asking where the date went.',
    ['Do not objurgate a junior for asking where the date went.', 'Scold is everyday. Rebuke and reprimand are the close cousins. Hector is bullying lecture (already in C2). Invective is the abusive noun (already in C2). A dated risk can fairly be named. Volume in the corridor is not a minute. Write the cell; spare the theatre.'],
    'Rebuke harshly (formal). Everyday: scold. Close: reprimand. Contrast: hector (browbeat — already in C2). Asking for the date is not insolence.',
    ['scold']
  ),
  obloquy: L(
    'Obloquy is strong public criticism, or the disgrace that follows it (formal): heap obloquy on, public obloquy. Criticism (already in the dictionary) is everyday and wider; opprobrium (already in the dictionary) is the close twin for shame after a scandal. A logo does not buy silence. Do not treat a fair audit as obloquy to dodge the appendix.',
    ['Obloquy over the empty n is not repaired by a logo.', 'Criticism is everyday (already in the dictionary). Opprobrium is public shame (already in C2). Infamy is lasting bad fame. A finding in the minutes is not a mob. A brand film does not cancel an empty cell. Name the n; the headlines will follow or they will not.'],
    'Public disgrace; violent criticism. Everyday: criticism. Close: opprobrium (already in C2). A logo is not a defence.',
    ['criticism']
  ),
  obstreperous: L(
    'Obstreperous means noisy, unruly, and hard to control (formal): an obstreperous crowd, obstreperous children. Noisy (already in the dictionary) is everyday and thinner; pugnacious (already in the dictionary) is spoiling for a fight, not merely loud. A walkout can be theatre. Do not file a numbered objection as obstreperous to shut it down.',
    ['An obstreperous walkout does not replace a numbered objection.', 'Noisy is everyday (already in A1). Unruly is close. Boisterous is high spirits. Pugnacious is combative (already in C2). A corridor scene is not a methods comment. A quiet, dated challenge can be the right item. Volume is not a finding; the empty n is.'],
    'Noisily unruly. Everyday: noisy / unruly. Contrast: pugnacious (itching for a fight — already in C2). Theatre ≠ a numbered point.',
    ['unruly']
  ),
  obtuse: L(
    'Obtuse means slow to understand, or wilfully insensitive: an obtuse remark, too obtuse to see it. Stupid is everyday and cruder; dense is the informal cousin. An obtuse angle is greater than 90° and less than 180° — the geometry sense. Acute is the opposite in both wit and angles. Do not call a required fire minute obtuse because it spoils the mood.',
    ['It is obtuse to treat a missing date as “tone”.', 'Stupid is everyday. Dense is informal. Dim is unkind and thin. Acute is sharp (angle and mind). A person who has not opened the folder is uninformed, not obtuse. Refusing the n because it is awkward is obtuse in the moral sense. Geometry is the other door: say the angle if you mean the angle.'],
    'Slow-witted or insensitive; also a blunt angle. Everyday: slow / dense. Opposite flavour: acute. Mix-up: uninformed (has not looked). Tone ≠ a date.',
    ['dense']
  ),
  occlude: L(
    'To occlude is to block or close a passage, opening, or view (formal / technical): occlude an artery, occlude the light. Block and obstruct (already in the dictionary) are everyday and wider. Occlusion is the noun, also of teeth meeting. Do not occlude the only marked exit and call it security.',
    ['A locked fire door occludes the only marked exit.', 'Block is everyday. Obstruct is close (already in the dictionary). Clog is of pipes. Occlude is the tighter clinical and formal verb: a vessel, a window, a path. A chained exit is a finding, not a metaphor. Unlock the door; then write the risk.'],
    'Block; shut off (formal / technical). Everyday: block. Close: obstruct (already in this dictionary). A fire door is not a lockable exhibit.',
    ['block']
  ),
  olfactory: L(
    'Olfactory means of the sense of smell (technical / formal): olfactory nerve, olfactory cue. Smell (already in the dictionary) is the everyday noun and verb; aroma and odour are the things smelled. Noisome (already in the dictionary) is foul-smelling. Do not joke an olfactory complaint out of the health minute.',
    ['An olfactory complaint about the cupboard is still a health item.', 'Smell is everyday (already in the dictionary). Odour is the thing detected. Aromatic is of a pleasant smell. Noisome is foul (already in C2). Olfactory is the faculty, not the stink. A drain can be a health finding. Extraction is the action; the adjective is not a punchline.'],
    'Of the sense of smell (technical). Everyday: smell. Cousin: odour (the thing smelled). Noisome is foul (already in C2). A smell can be a health item.',
    ['smell']
  ),
  omniscient: L(
    'Omniscient means knowing everything (formal / literary): an omniscient narrator, omniscient about the brief. Knowledgeable is everyday and modest; perspicacious (already in the dictionary) is sharp, not all-seeing. Omniscience is the noun, often of God or of a narrator. Do not perform omniscience from an unopened appendix.',
    ['An omniscient chair still has to open the appendix.', 'Knowledgeable is everyday. All-knowing is the gloss. Perspicacious is quick to notice (already in C2). A narrator who sees every mind is a technique. A chair who has not opened the CSV is guessing. Rank is not a substitute for the file. Look, then speak.'],
    'All-knowing. Everyday: all-knowing / knowledgeable. Close: perspicacious (sharp — already in C2). A title is not a search of the folder.',
    []
  ),
  opaque: L(
    'Opaque means not letting light through, or hard to understand: opaque glass, an opaque clause. Unclear is everyday; obscure (already in the dictionary) is hard to grasp, a close twin. Transparent and pellucid (this batch) are the opposite flavour. Do not leave a methods sentence opaque and call it discretion.',
    ['An opaque methods clause is not a finding.', 'Unclear is everyday. Obscure is hard to follow (already in the dictionary). Cloudy is the metaphor. Pellucid is crystal-clear (this batch). Frosted glass is the physical sense. A long appendix can still be exact. “In due course” with no owner is opaque. Name the n in plain type.'],
    'Not see-through; obscure. Everyday: unclear. Close: obscure (already in this dictionary). Opposite: pellucid (this batch). Discretion ≠ an empty cell.',
    ['unclear']
  ),
  ossify: L(
    'To ossify is to harden into bone, or of a habit or institution, to become rigid and unable to change: ossified rules, let a practice ossify. Harden is everyday; fossilise is the close metaphor. Rigid (already in the dictionary) is the resulting state. Do not let last year’s workaround ossify into the only protocol.',
    ['Do not let last year’s workaround ossify into the protocol.', 'Harden is everyday. Fossilise is the cousin metaphor. Calcify is the clinical twin. Flexible is the opposite flavour. A dated rule can still be right. A one-year patch that nobody reviews is how a clinic loses the spare key. Review the protocol; do not worship it.'],
    'Harden; become inflexible. Everyday: harden. Close: fossilise. A workaround that is never reviewed becomes the problem.',
    ['harden']
  ),
  overweening: L(
    'Overweening means showing too much pride or self-confidence (literary / formal): overweening ambition, overweening pride. Arrogant (already in the dictionary) is everyday and wider; haughty (already in the dictionary) is looking down. Ostentatious (already in the dictionary) is showy display, not quite the same vice. Do not let overweening confidence in a ranking skip the fire door.',
    ['Overweening confidence in the ranking is not a methods section.', 'Arrogant is everyday (already in the dictionary). Haughty is superior (already in C2). Hubris is the tragic excess. Ostentatious is showy (already in C2). Confidence with a dated n is professionalism. A ranking used to skip the appendix is overweening. The table still has to add up.'],
    'Excessively proud or confident. Everyday: arrogant. Close: haughty (already in C2). Contrast: ostentatious (showy — already in C2). Rank ≠ a sample size.',
    ['arrogant']
  ),
  overwrought: L(
    'Overwrought means extremely nervous or upset, or of style, too elaborate: overwrought with worry, overwrought prose. Upset is everyday; histrionic (already in the dictionary) is theatrical emotion. Wrought is worked (as metal) — the image is something worked past the point of use. Do not dismiss a numbered flame risk as overwrought.',
    ['An overwrought preface is not a sample-size sentence.', 'Upset is everyday. Agitated is close. Histrionic is acting emotion (already in C2). Ornate is decorated. A short, dated objection can be calm and still be right. A purple preface that never states the n is overwrought in the style sense. Cut the adjectives; keep the cell.'],
    'Over-emotional; of style, overworked. Everyday: upset / overdone. Close: histrionic (already in C2). A dated risk is not hysteria.',
    ['upset']
  ),
  oxymoron: L(
    'An oxymoron is a phrase that joins contradictory terms (rhetoric): a famous oxymoron, “deafening silence”. Contradiction (already in the dictionary) is everyday and wider; paradox (already in the dictionary) is a seeming contradiction that may still be true — the classic mix-up. Do not dress a broken rule as a witty oxymoron.',
    ['“Optional embargo” is an oxymoron, not a policy.', 'Contradiction is everyday (already in the dictionary). A paradox may be true on a second look (already in C2). Irony is a different figure. “Bittersweet” is a textbook oxymoron. “Optional embargo” is a hole in the protocol. Name a yes or a no. Wordplay is not a waiver.'],
    'A contradiction in terms. Everyday: contradiction. Mix-up: paradox (may be true — already in C2). A joke pairing is not a policy.',
    []
  ),
  paean: L(
    'A paean is a song, speech, or text of enthusiastic praise (literary): a paean to liberty, sing a paean. Praise (already in the dictionary) is everyday; panegyric (this batch) is the more formal public oration. A hymn of praise is the old sense. Do not let a paean to the brand stand in for a post on the rota.',
    ['A paean to the brand is not a spare invigilator.', 'Praise is everyday (already in the dictionary). A panegyric is a formal public eulogy (this batch). A tribute is close. Invective is the attack cousin (already in C2). Applause after a paper is allowed. A hymn that never names the n is advertising. Staff the clinic; then write the ode.'],
    'A hymn of praise (literary). Everyday: praise. Close: panegyric (this batch, more formal). A slogan is not a post.',
    ['praise']
  ),
  palatable: L(
    'Palatable means pleasant to taste, or of a plan, acceptable enough to be swallowed: a palatable meal, make the cuts palatable. Tasty is everyday for food; acceptable (already in the dictionary) is the wider cousin for proposals. Unpalatable is the opposite. Do not make a missing key palatable with a slogan.',
    ['A palatable slogan does not restore the night bus.', 'Tasty is everyday (food). Acceptable is the proposal cousin (already in the dictionary). Edible is merely not poisonous. A compromise with a named date can be palatable and still honest. Sugar on a cut that leaves the clinic empty is not palatable; it is a gloss. Name the bus.'],
    'Acceptable; pleasant to taste. Everyday: tasty (food) / acceptable (plans). Opposite: unpalatable. A slogan does not sweeten an empty rota.',
    ['acceptable']
  ),
  pallid: L(
    'Pallid means unhealthily pale, or of writing and performance, weak and lifeless: a pallid complexion, pallid prose. Pale (already in the dictionary) is everyday and not always unkind; wan is the close literary twin. Anaemic is the blood-and-style cousin. Do not call a required fire notice pallid because it is plain.',
    ['Pallid minutes still have to name the missing date.', 'Pale is everyday (already in the dictionary). Wan is literary and close. Colourless is the gloss. A face can be pallid after a night shift. Dull minutes can still be exact. Decor is not a methods standard. The cover may be wan; the cell cannot be empty.'],
    'Unhealthily pale; wan. Everyday: pale (already in this dictionary). Close: wan. A plain notice can still be the right item.',
    ['pale']
  ),
  panegyric: L(
    'A panegyric is a public speech or text of formal praise (formal): deliver a panegyric, a panegyric upon the founder. Praise is everyday; paean (this batch) is the more lyrical hymn. Eulogy is often of the dead. Invective (already in the dictionary) is the attack opposite. Do not file a panegyric where a finding belongs.',
    ['A panegyric in the minutes is not a finding; name the date.', 'Praise is everyday. A paean is a song of praise (this batch). A eulogy is typically funeral. Plaudits are the round of applause (this batch). Minutes record decisions. A hymn to the dean does not fill an n. Save the oration for the dinner; keep the cell for the appendix.'],
    'Formal public praise. Everyday: praise. Close: paean (this batch, more lyric). Contrast: invective (already in C2). Oration ≠ a date.',
    ['praise']
  ),
  parochial: L(
    'Parochial means narrow in outlook, as if only the local parish mattered; also, of a church parish: parochial concerns, a parochial school. Narrow is everyday; insular (already in the dictionary) is the close C2 twin. Provincial is the regions cousin, sometimes unkind. Do not let a parochial clique write a timetable that forgets the night bus.',
    ['A parochial clique wrote the timetable and skipped the night bus.', 'Narrow is everyday. Insular is inward-looking (already in C2). Provincial is of the regions. Parish is the literal church unit. Local knowledge can be exact. A rota that only serves the people in the room is parochial. Name the last bus; the parish is larger than the clique.'],
    'Narrow-minded; also of a parish. Everyday: narrow. Close: insular (already in C2). Local fact ≠ a clique that skips the bus.',
    ['narrow']
  ),
  peccadillo: L(
    'A peccadillo is a small, relatively unimportant fault or sin: a youthful peccadillo, mere peccadilloes. Fault is everyday; misdemeanour is the legal-ish cousin. Heinous (already in the dictionary) is the opposite scale. Do not file a missing consent clause as a peccadillo.',
    ['A missing consent clause is not a peccadillo.', 'Fault is everyday. A foible is a harmless quirk. A misdemeanour is a lesser offence. Heinous is utterly wicked (already in C2). Biscuits in the wrong tin can be a peccadillo. An empty ethics cell cannot. Scale the wrong; do not shrink it for comfort.'],
    'A minor fault. Everyday: small fault / slip. Contrast: heinous (already in C2). Consent is not a foible.',
    ['fault']
  ),
  pedagogue: L(
    'A pedagogue is a teacher, especially a strict, dry, or pedantic one (formal / often unkind): a dreary pedagogue, more pedagogue than scholar. Teacher (already in the dictionary) is everyday and neutral; pedantic (already in the dictionary) is the vice of fussing detail. Pedagogy is the method of teaching. Do not skip the fire report because the panel is full of pedagogues.',
    ['A pedagogue on the panel still has to sign the fire report.', 'Teacher is everyday (already in the dictionary). Tutor is closer and kinder. Pedantic is fussy about niceties (already in C2). A schoolmaster is older UK colour. Rank in the seminar is not a waiver. The person who holds the key is not excused by a lecture style. Sign the report.'],
    'Teacher (often dry or strict). Everyday: teacher. Close vice: pedantic (already in C2). A title is not a fire signature.',
    ['teacher']
  ),
  pellucid: L(
    'Pellucid means transparently clear, of water, glass, prose, or argument (literary / formal): pellucid water, pellucid reasoning. Clear is everyday; lucid is the close twin for thought. Opaque (this batch) is the opposite. Do not call a sentence pellucid if the n is still a blank.',
    ['Pellucid prose does not invent a cell that is empty.', 'Clear is everyday. Lucid is close for argument. Crystal-clear is the gloss. Opaque is not see-through (this batch). A mountain lake can be pellucid. Elegant syntax is not a sample size. If the cell is empty, the prose is decoration. Fill the n; then admire the style.'],
    'Crystal-clear. Everyday: clear. Close: lucid. Opposite: opaque (this batch). Style ≠ a filled cell.',
    ['clear']
  ),
  penitent: L(
    'Penitent means feeling or showing sincere sorrow for having done wrong: a penitent letter, look penitent. Sorry is everyday; remorseful and contrite are close. Penitence is the noun; a penitent can also be a person who repents. Do not treat a penitent email as a restored file.',
    ['A penitent email does not restore the only CSV.', 'Sorry is everyday. Remorseful is close. Contrite is the church-and-formal twin. Apology is the speech act. Feeling is not backup. A dated recovery of the file is the amendment. Tears in the corridor do not rebuild the spreadsheet. Restore first; then be sorry.'],
    'Sorry and wanting to make amends. Everyday: sorry. Close: remorseful / contrite. Feeling ≠ a restored CSV.',
    ['sorry']
  ),
  penurious: L(
    'Penurious means extremely poor, or mean with money (formal): a penurious existence, a penurious grant. Poor (already in the dictionary) is everyday; parsimonious (already in the dictionary) is stingy with resources, the close vice. Impoverished is the state. Do not brand a required second post as luxury when the rota is penurious.',
    ['A penurious rota is not “lean”; name the second invigilator.', 'Poor is everyday (already in the dictionary). Penniless is informal. Parsimonious is stingy (already in C2) — the money-vice cousin, not always destitution. Austere is severe simplicity. One person on a night clinic is a risk, not a virtue. Lean is a slogan; a named deputy is the staffing fact.'],
    'Poverty-stricken; also stingy (formal). Everyday: poor. Close vice: parsimonious (already in C2). Lean ≠ an empty night post.',
    ['poor']
  ),
  pertinacious: L(
    'Pertinacious means stubbornly persistent, especially in a demand or opinion (formal): pertinacious questioning, a pertinacious litigant. Persistent (already in the dictionary) is everyday and not always unkind; tenacious is the close twin. Obstinate is stubborn as a vice. Do not call a dated request for the n pertinacious merely because it is repeated.',
    ['She was pertinacious about the empty n, and she was right.', 'Persistent is everyday (already in the dictionary). Tenacious is close. Obstinate is stubborn (unkind). Petulant is sulky (already in C2) — a different vice. Repeating a missing date is not a personality defect. Chasing biscuits is pertinacity in the wrong place. Name the cell; the repetition will stop.'],
    'Stubbornly persistent. Everyday: persistent. Close: tenacious. Contrast: obstinate (vice) / petulant (sulk — already in C2). Repeating a date can be right.',
    ['persistent']
  ),
  picaresque: L(
    'Picaresque describes a story of episodic adventures of a likeable rogue (literary): a picaresque novel, picaresque wanderings. Adventurous is everyday and wider; episodic is the structure cousin. A picaro is the rogue hero. Do not deliver a methods paper as a picaresque anecdote.',
    ['A picaresque keynote is not a methods section.', 'Adventurous is everyday. Episodic is loosely plotted. A rogue’s tale can be literature. A travelogue is a cousin. An n is not an episode. Charming mishaps do not replace a sample-size sentence. Tell the story at dinner; table the appendix in the hall.'],
    'Of a rogue’s episodic adventures (literary). Everyday: rambling adventure story. A yarn is not a methods section.',
    []
  ),
  pithy: L(
    'Pithy means short, clear, and full of meaning: a pithy remark, pithy asides. Brief is everyday; concise is the close twin. Laconic (already in the dictionary) is few words, not necessarily packed. Pith is the essential part (and the white of an orange). Do not pad a pithy “n = 12” into a slogan.',
    ['A pithy “n = 12” is still a methods sentence.', 'Brief is everyday. Concise is close. Terse can be blunt. Laconic is sparingly spoken (already in C2). A one-line date can be enough. A proverb is often pithy. “World-leading” is short and empty. Keep the number; cut the frosting.'],
    'Concise and pointed. Everyday: concise. Close: terse. Contrast: laconic (few words — already in C2). Short ≠ empty.',
    ['concise']
  ),
  plaudit: L(
    'A plaudit is an expression of praise or approval, usually in the plural: win plaudits, the plaudits of the crowd. Praise is everyday; applause is the physical cousin. Acclaim is the close noun. Obloquy (this batch) is the disgrace opposite. Do not let plaudits for a keynote excuse an empty n.',
    ['Plaudits for the keynote do not excuse an empty n.', 'Praise is everyday. Applause is the sound. Acclaim is close. A panegyric is a formal speech of praise (this batch). A dinner can clap. The appendix cannot clap. Warmth in the hall is not a sample size. Take the bow after the cell is filled.'],
    'Praise; a round of applause (usually plaudits). Everyday: praise / applause. Contrast: obloquy (this batch). Clapping ≠ an n.',
    ['praise']
  ),
  polemic: L(
    'A polemic is a strong written or spoken attack on a person, idea, or policy: a fierce polemic, launch a polemic. Argument (already in the dictionary) is everyday and calmer; invective (already in the dictionary) is abusive language. Polemical is the adjective. Do not call a numbered methods objection a polemic to shut it down.',
    ['A polemic in the corridor is not a methods comment.', 'Argument is everyday (already in the dictionary). A diatribe is a bitter rant. Invective is insult as attack (already in C2). Debate can be sharp and still dated. Heat in the corridor is not a finding. Table the two figures. Rhetoric is allowed after the cell is named.'],
    'A fierce argumentative attack. Everyday: attack / rant. Close: invective (already in C2). A dated comparison is not a corridor scene.',
    ['attack']
  ),
  portentous: L(
    'Portentous means as if of an omen, or overly solemn and self-important (often disapproving): a portentous silence, portentous claims. Ominous (already in the dictionary) is threatening; pretentious (already in the dictionary) is trying to impress — a close trap. A portent is a sign of something to come. Do not let a portentous “world-leading” slide stand in for a join that fails.',
    ['A portentous “world-leading” slide sat on a spreadsheet join.', 'Ominous is of a bad omen (already in the dictionary). Solemn is serious. Pretentious is showy learning (already in the dictionary) — the mix-up. A storm can be portentous. A title card is design. Gravity in the voice is not a methods sentence. Fix the join; spare the thunder.'],
    'Ominously significant; also pompously solemn. Everyday: ominous / pompous. Mix-up: pretentious (already in this dictionary). Thunder ≠ a working join.',
    ['ominous']
  ),
  precept: L(
    'A precept is a rule or principle that guides behaviour (formal): a moral precept, the precepts of the craft. Rule and principle (already in the dictionary) are everyday and wider. A maxim is a short pithy rule. Do not hang a precept on the wall and skip the named key-holder.',
    ['A precept on the wall is not a named key-holder.', 'Rule is everyday. Principle is close (already in the dictionary). A maxim is a short saying. Protocol is the local procedure. Ethics on a poster is allowed. Cover on the night clinic is a staffing fact. The motto does not hold the key. Write the deputy’s name.'],
    'A guiding rule of conduct. Everyday: rule / principle (already in this dictionary). Close: maxim. A poster is not a rota.',
    ['principle']
  ),
  precipitate: L(
    'To precipitate (verb, /prɪˈsɪpɪteɪt/) is to make something happen suddenly, often too soon: precipitate a crisis, precipitate a row. Cause and trigger are everyday; hasten is to speed up. The adjective precipitate (/prɪˈsɪpɪtət/) means hasty — a different stress and a trap. Impetuous (already in the dictionary) is of people who rush. Do not precipitate a leak by circulating draft grades.',
    ['Do not precipitate a leak by circulating draft grades.', 'Cause is everyday. Trigger is close. Hasten is speed up. The chemistry sense is to fall as rain or as a solid from a solution. Impetuous is rash of a person (already in C2). The adjective precipitate is hasty — check the stress. A dated release is a diary. A cc of drafts is how an embargo dies.'],
    'Bring on suddenly (verb). Everyday: trigger / hasten. Trap: adjective precipitate (hasty). Cousin: impetuous (of people — already in C2). A cc can be the leak.',
    ['trigger']
  ),
}
