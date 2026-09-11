const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1X = {
  fresco: L(
    'A fresco is a painting done on wet plaster on a wall or ceiling: a foyer fresco, a ceiling fresco. Paint (already in the dictionary) is the everyday material; heritage décor is not an occupancy figure.',
    ['A fresco in the foyer is heritage décor, not an occupancy certificate.', 'Mural is the close twin. Paint is already in this course. Décor is branding. A number on a certificate is the rule. Count the seats; then light the plaster if the inspector still allows the sitting.'],
    'A wall painting on wet plaster. Close: mural. Heritage décor ≠ a cap.',
    ['mural', 'wall painting', 'plaster painting']
  ),
  furlough: L(
    'A furlough is a period of leave from duty, especially unpaid leave from work: on furlough, furlough the spare (also a verb). Leave (already in the dictionary) is everyday; sending the night officer home is still a cover hole, not a tidy saving.',
    ['A furlough of the night spare is a cover hole, not a saving.', 'Leave is already in this course. Lay-off is the harsher twin. A saving is a slogan. A name on the log is cover. Keep the spare, or name the exclusion; do not baptise the hole as prudence.'],
    'Official leave from duty. Everyday: leave (already in the dictionary). A saving ≠ cover.',
    ['leave', 'unpaid leave', 'lay-off']
  ),
  gaunt: L(
    'Gaunt means very thin, especially from illness, hunger, or strain, and looking grim: a gaunt face, a gaunt rota. Thin (already in the dictionary) is everyday; baptising empty night cells as lean culture does not staff them.',
    ['A gaunt rota with empty night cells is a cover failure, not “lean culture”.', 'Thin is already in this course. Haggard is the close twin. Lean is a slogan. A name on the log is cover. Write the name; then call it lean if the grid is still full.'],
    'Very thin and grim. Everyday: thin (already in the dictionary). “Lean culture” ≠ a named spare.',
    ['haggard', 'emaciated', 'drawn']
  ),
  genteel: L(
    'Genteel means polite and refined, or trying to appear so, often of a social class: genteel copy, a genteel manner. Gentle (already in the dictionary) is kind, not this class tone; polite prospectus talk does not staff a sitting.',
    ['Genteel copy in the prospectus does not staff the sitting.', 'Polite is everyday. Refined is the close twin. Gentle is already in this course and is not the same. Prospectus talk is comms. A name on the log is cover. Write the name; then keep the manners if the sitting still stands.'],
    'Refined, or trying to seem so. Related: gentle (already in the dictionary; different). Polite copy ≠ cover.',
    ['refined', 'polite', 'respectable']
  ),
  glacial: L(
    'Glacial means extremely slow, of ice, or very cold in manner: a glacial pace, a glacial reply. Glacier (already in the dictionary) is the noun of ice; a cold answer on the spare’s name still leaves the cell empty.',
    ['A glacial reply on the spare’s name still leaves the cell empty.', 'Icy is the manner twin. Slow is already in this course. Coldness is tone. A name on the log is cover. Write the name; then keep the frost if the sitting still stands.'],
    'Icy; extremely slow or cold. Noun: glacier (already in the dictionary). A cold reply ≠ a named spare.',
    ['icy', 'freezing', 'slow']
  ),
  goad: L(
    'To goad is to provoke or annoy someone so as to make them react: goad the inspector, goad into a reply. Provoke (already in the dictionary) is the close twin; a packed-hall caption will not replace a count.',
    ['Do not goad the inspector with a packed-hall caption; count the seats.', 'Provoke is already in this course. Needle is the close twin. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the caption if the cap still holds.'],
    'Provoke into a reaction. Close: provoke (already in the dictionary). Packed copy ≠ a count.',
    ['provoke', 'needle', 'spur']
  ),
  grapple: L(
    'To grapple is to struggle to hold or deal with something difficult: grapple with the n, grapple with a clause. Struggle (already in the dictionary) is everyday; a wreath will not fill a blank cell.',
    ['Grapple with the blank n in the methods cell; a wreath will not fill it.', 'Struggle is already in this course. Wrestle is the close twin. A wreath is ceremony. A cell is a count. Put the number in; then hang the wreath if the finding still stands.'],
    'Struggle to deal with. Everyday: struggle (already in the dictionary). A wreath ≠ a filled n.',
    ['struggle', 'wrestle', 'contend']
  ),
  grievous: L(
    'Grievous means very severe or serious, especially of harm or a fault: a grievous error, grievous harm. Grief (already in the dictionary) is the noun of sadness; inventing an n is still a methods fail, not a rounding.',
    ['An invented n is a grievous methods fail, not a rounding.', 'Severe is already in this course. Grave (already in this course) is the close twin. Rounding is a slogan. A raw count in the cell is methods. Put the number in; then polish the abstract if the codebook still allows it.'],
    'Very severe or serious. Noun: grief (already in the dictionary). Rounding ≠ a true n.',
    ['severe', 'grave', 'serious']
  ),
  festoon: L(
    'To festoon is to decorate with chains of flowers, lights, or fabric hanging in loops: festoon the foyer, a festoon of lights (also a noun). Decorate (already in the dictionary) is everyday; loops of fabric do not raise an occupancy figure.',
    ['Festoon the foyer if you must; it does not raise the occupancy cap.', 'Decorate is already in this course. Drape is the close twin. Loops are branding. A number on a certificate is the rule. Keep the number; hang the loops if the inspector still allows the sitting.'],
    'Hang decorations in loops. Everyday: decorate (already in the dictionary). Loops ≠ a cap.',
    ['drape', 'decorate', 'garland']
  ),
  fiduciary: L(
    'Fiduciary means relating to the legal duty to act in another’s financial interest: a fiduciary duty, a fiduciary (the trustee, also a noun). Trust (already in the dictionary) is everyday; a foyer toast is not a signed file.',
    ['A fiduciary duty is a signed file, not a foyer toast.', 'Trustee is the person twin. Trust is already in this course. A toast is ceremony. A signature and a date are a file. Sign the duty; then raise the glass if the minute still stands.'],
    'Of a trustee’s duty of care. Everyday: trust (already in the dictionary). A toast ≠ a signed file.',
    ['trustee', 'trust', 'custodial']
  ),
  filial: L(
    'Filial means of or due from a son or daughter: filial duty, filial thanks. Family, son, and daughter (already in the dictionary) are the everyday set; thanks in the programme do not name a spare.',
    ['Filial thanks in the programme do not name the spare.', 'Family is already in this course. Dutiful is the close twin. Thanks are ceremony. A name on the log is cover. Write the name; then print the thanks if the sitting still stands.'],
    'Of a son or daughter. Everyday: family (already in the dictionary). Thanks ≠ a named spare.',
    ['dutiful', 'devoted', 'daughterly']
  ),
  foolhardy: L(
    'Foolhardy means taking unnecessary risks; recklessly bold: a foolhardy sitting, foolhardy to cut the spare. Reckless (already in the dictionary) is the close twin; a crest is not cover.',
    ['It is foolhardy to sit without a named invigilator; a crest is not cover.', 'Reckless is already in this course. Rash is the close twin. A crest is branding. A name on the log is cover. Write the name; then hang the crest if the sitting still stands.'],
    'Recklessly bold. Close: reckless (already in the dictionary). A crest ≠ cover.',
    ['rash', 'reckless', 'imprudent']
  ),
  fracas: L(
    'A fracas is a noisy quarrel or brawl: a lobby fracas, a fracas at the door (same form in the plural). Fight and quarrel (already in the dictionary) are everyday; “atmosphere” is not an incident log.',
    ['A fracas in the lobby is an incident log, not “atmosphere”.', 'Row is everyday. Brawl is the close twin. Atmosphere is a slogan. A dated line is a file. Log the incident; save atmosphere for the heritage leaflet if the inspector still allows it.'],
    'A noisy fight or row. Everyday: row. “Atmosphere” ≠ an incident log.',
    ['brawl', 'row', 'melee']
  ),
  frailty: L(
    'Frailty is weakness of body or character: human frailty, frailty in the rota. Fragile (already in the dictionary) is the adjective; a vibe does not name a hole.',
    ['Frailty in the night rota is a named hole, not a vibe.', 'Weakness is everyday. Fragile is already in this course. A vibe is talk. A name on the log is cover. Name the hole; then keep the tone if the finding still stands.'],
    'Weakness of body or character. Adjective: fragile (already in the dictionary). A vibe ≠ a named hole.',
    ['weakness', 'infirmity', 'vulnerability']
  ),
  fraternise: L(
    'To fraternise is to be friendly with people you are not supposed to mix with: fraternise with the desk, accused of fraternising (UK spelling). Friend (already in the dictionary) is everyday; mixing with branding is not a filled methods cell.',
    ['To fraternise with the branding desk is not to fill the methods cell.', 'Mix is everyday. Associate is the close twin. Friend is already in this course. Branding is comms. A cell is a count. Put the number in; then mix if the ethics minute still allows it.'],
    'Mix socially (often against the rule) (UK). Everyday: mix. Branding chat ≠ a filled n.',
    ['mix', 'associate', 'socialise']
  ),
  fray: L(
    'A fray is a fight, noisy argument, or competing situation: join the fray, a fray at the door; also (verb) to wear at the edges. Fight (already in the dictionary) is everyday; a row at the door-check is still a fire log, not a styling note.',
    ['A fray at the door-check is a fire log, not a styling note.', 'Fight is already in this course. Skirmish is the close twin. Styling is a mood board. A dated check is a certificate. Log the door; then warm the lighting if the inspector still allows it.'],
    'A fight; or worn edges. Everyday: fight (already in the dictionary). Styling ≠ a fire log.',
    ['fight', 'skirmish', 'row']
  ),
  galling: L(
    'Galling means annoying because it is unfair or hard to accept: a galling mismatch, it is galling that. Annoy (already in the dictionary) is milder; hanging a packed caption on an empty cell is still a methods hole.',
    ['It is galling to hang a “full house” caption on an empty cell.', 'Annoying is everyday. Irksome is the close twin. Full house is a vibe. A cell is a count. Put the number in; then keep the caption if it still matches the file.'],
    'Annoyingly unfair. Everyday: annoying. “Full house” ≠ a filled n.',
    ['irksome', 'vexing', 'infuriating']
  ),
  gavel: L(
    'A gavel is a small hammer used by a chair or auctioneer to call order: bang the gavel, a ceremonial gavel. Hammer (already in the dictionary) is the everyday tool; a foyer prop is not a resolution.',
    ['A gavel in the foyer is ceremony, not a resolution; minute the vote.', 'Hammer is already in this course. Mallet is the close twin. Ceremony is a vibe. A named vote on paper is a file. Write the result; then brief the lobby if the minute still stands.'],
    'A chair’s small hammer. Everyday: hammer (already in the dictionary). Ceremony ≠ a minute.',
    ['mallet', 'hammer', 'chair’s hammer']
  ),
  gerrymander: L(
    'To gerrymander is to draw electoral or other boundaries so as to favour one side: gerrymander the map, a gerrymandered n. Boundary (already in the dictionary) is the everyday line; dropping a slice without a codebook note is still a methods cut, not clarity.',
    ['To drop the night slice without a codebook note is to gerrymander the n, not “clarity”.', 'Rig is everyday and cruder. Manipulate is the close twin. Clarity is a slogan. A named exclusion is methods. Write the rule; then call it clarity in the limitations if the ethics file still allows the cut.'],
    'Draw boundaries to favour one side. Everyday: rig. “Clarity” ≠ a named exclusion.',
    ['manipulate', 'rig', 'distort']
  ),
  gild: L(
    'To gild is to cover with a thin layer of gold, or to make something seem better than it is: gild the prospectus, gild the lily. Gold (already in the dictionary) is the metal; leaf on the cover does not raise an occupancy figure.',
    ['Gild the prospectus if you must; gold leaf does not raise the occupancy cap.', 'Gold is already in this course. Embellish is the close twin. Leaf is branding. A number on a certificate is the rule. Keep the number; hang the leaf in the foyer if the inspector still allows it.'],
    'Cover with gold; make it look better. Noun: gold (already in the dictionary). Leaf ≠ a cap.',
    ['embellish', 'varnish', 'coat']
  ),
  glower: L(
    'To glower is to look at someone in an angry or sullen way: glower at the door, a glowering check. Scowl is the close twin; a dry face at the fire door is still a log, not a styling note.',
    ['A glower at the door is still a fire log, not a styling note.', 'Scowl is the close twin. Glare is the sharper twin. Styling is a mood board. A dated check is a certificate. Log the door; then warm the lighting if the inspector still allows it.'],
    'Scowl angrily. Close: scowl. Styling ≠ a fire log.',
    ['scowl', 'glare', 'frown']
  ),
  glutton: L(
    'A glutton is a person who eats too much; also someone with a great appetite for a thing: a glutton for work, a glutton for adjectives. Greedy (already in the dictionary) is the everyday adjective; extra colour still needs an n in the cell.',
    ['A glutton for adjectives still needs an n in the methods cell.', 'Greedy is already in this course. Gourmand is the food twin. Adjectives are colour. A cell is a count. Put the number in; then keep the colour if the finding still stands.'],
    'Someone who overeats, or overdoes a thing. Everyday: greedy (already in the dictionary). Adjectives ≠ a filled n.',
    ['gourmand', 'overeater', 'enthusiast']
  ),
  headlong: L(
    'Headlong means with the head first, or in a rush without thought: rush headlong, a headlong cut (also an adjective). Head and rush (already in the dictionary) are everyday; a sudden cut to the night bus is still a catchment hole.',
    ['A headlong cut to the night bus is still a catchment hole.', 'Rashly is the manner twin. Head is already in this course. Speed is a vibe. A last-service time is a file. Keep the bus, or name the exclusion; do not baptise the hole as agility.'],
    'Head first; rashly hurried. Everyday: rush (already in the dictionary). Speed ≠ a night bus.',
    ['rashly', 'precipitately', 'hurriedly']
  ),
  heckle: L(
    'To heckle is to interrupt a speaker with rude or aggressive remarks: heckle the chair, heckle a blank cell. Interrupt (already in the dictionary) is everyday and milder; a witty caption is not a filled n.',
    ['Heckle the blank n in the minute; a witty caption is not a count.', 'Interrupt is already in this course. Barrack is the close twin. Wit is tone. A cell is a count. Put the number in; then keep the wit if the finding still stands.'],
    'Interrupt a speaker rudely. Everyday: interrupt (already in the dictionary). Wit ≠ a filled n.',
    ['barrack', 'interrupt', 'jeer']
  ),
  hedonist: L(
    'A hedonist is a person who believes that pleasure is the most important thing in life: a foyer hedonist, hedonist hours. Pleasure (already in the dictionary) is everyday; late music is not a fire certificate.',
    ['A hedonist foyer with music until late is not a fire certificate.', 'Pleasure-seeker is the plain twin. Pleasure is already in this course. Late music is a vibe. A dated inspection is a file. Stop the music at the hour; save pleasure for the heritage leaflet if the inspector still allows it.'],
    'Someone who lives for pleasure. Everyday: pleasure-seeker. Late music ≠ a fire certificate.',
    ['pleasure-seeker', 'sybarite', 'voluptuary']
  ),
  heresy: L(
    'Heresy is a belief that goes against official or accepted teaching: a methods heresy, treat as heresy. Belief (already in the dictionary) is everyday; treating the occupancy cap as optional is still a fire-file fail, not a vibe.',
    ['To treat the occupancy cap as optional is heresy in the fire file, not a vibe.', 'Unorthodoxy is the close twin. Belief is already in this course. A vibe is talk. A number on a certificate is the rule. Keep the number; then argue the teaching if the inspector still allows the sitting.'],
    'A banned or unofficial belief. Everyday: unorthodoxy. A vibe ≠ a cap.',
    ['unorthodoxy', 'dissent', 'heterodoxy']
  ),
  homily: L(
    'A homily is a short moralising talk or sermon, often tedious: a lobby homily, deliver a homily. Sermon is the close twin; a lecture in the lobby is not a handover log.',
    ['A homily in the lobby is not a handover log; name the keys.', 'Sermon is the close twin. Lecture is everyday. A lobby talk is ceremony. A named key on the log is a file. Write the keys; then keep the lecture if the sitting still stands.'],
    'A short moral lecture. Close: sermon. A lobby talk ≠ a handover.',
    ['sermon', 'lecture', 'moralising']
  ),
  eke: L(
    'To eke is to make a small supply last by using it sparingly, especially eke out: eke out cover, eke the spare. Stretch (already in the dictionary) is the everyday twin; spreading one name across two sittings is still a cover hole.',
    ['Eke the named spare across two sittings and you still have a cover hole.', 'Stretch is already in this course. Squeeze is the close twin. Spreading is a slogan. A name on each log is cover. Name a second spare; then call it thrift if both cells are still full.'],
    'Make a little last (eke out). Everyday: stretch (already in the dictionary). One name ≠ two sittings.',
    ['stretch', 'squeeze', 'scrape']
  ),
  ethereal: L(
    'Ethereal means extremely light, delicate, or otherworldly: an ethereal slide, ethereal copy. Delicate (already in the dictionary) is everyday; a vision deck does not name a spare.',
    ['An ethereal vision slide does not name the spare.', 'Delicate is already in this course. Airy is the close twin. A slide is comms. A name on the log is cover. Write the name; then screen the slide if the sitting still stands.'],
    'Light, delicate, unearthly. Everyday: airy. A vision slide ≠ a named spare.',
    ['airy', 'delicate', 'otherworldly']
  ),
  extemporise: L(
    'To extemporise is to speak or perform without preparation: extemporise the abstract, extemporise a reply (UK spelling). Improvise (already in the dictionary) is the close twin; do not invent the n on the night.',
    ['Do not extemporise the n in the abstract; write the raw count first.', 'Improvise is already in this course. Ad-lib is the close twin. A night guess is talk. A codebook line is methods. Write the raw number; then polish the abstract if the rule still allows it.'],
    'Speak or perform unprepared (UK). Close: improvise (already in the dictionary). A guess ≠ a count.',
    ['improvise', 'ad-lib', 'wing it']
  ),
  exult: L(
    'To exult is to show or feel great joy, especially at a success: exult in the foyer, exult at the result. Rejoice is the close twin; a packed caption still needs a count.',
    ['Exult in the foyer if you must; a packed caption still needs a count.', 'Rejoice is the close twin. Celebrate is everyday. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the cheer if the cap still holds.'],
    'Rejoice openly. Close: rejoice. Packed copy ≠ a count.',
    ['rejoice', 'glory', 'celebrate']
  ),
  fallow: L(
    'Fallow means, of land, left unplanted, or inactive for a period: fallow land, a fallow cell. Idle (already in the dictionary) is everyday and often critical; a pause for culture does not staff the night.',
    ['A fallow night cell is a cover hole, not a “pause for culture”.', 'Idle is already in this course. Unused is the plain twin. Culture is a slogan. A name on the log is cover. Write the name; then call it a pause if the grid is still full.'],
    'Unused for a time (land or activity). Everyday: unused. “Pause for culture” ≠ cover.',
    ['unused', 'idle', 'uncultivated']
  ),
  famished: L(
    'Famished means extremely hungry: a famished cohort, famished after the sitting. Hungry (already in the dictionary) is everyday; a caption does not name a night bus.',
    ['A famished night cohort still needs a named bus, not a caption.', 'Hungry is already in this course. Starving is the close twin. A caption is comms. A last-service time is a file. Publish the time; then write the caption if the bus still runs.'],
    'Extremely hungry. Everyday: hungry (already in the dictionary). A caption ≠ a night bus.',
    ['starving', 'ravenous', 'hungry']
  ),
  fetter: L(
    'To fetter is to restrict someone’s freedom; also a chain for the ankles (noun): fetter the n, in fetters. Chain (already in the dictionary) is everyday; a slogan will not free a missing codebook line.',
    ['A missing codebook line will fetter the n; a slogan will not free it.', 'Chain is already in this course. Shackle is the close twin. A slogan is talk. A named rule is methods. Write the line; then keep the slogan if the ethics file still allows the cut.'],
    'Chain; restrict freedom. Everyday: chain (already in the dictionary). A slogan ≠ a codebook line.',
    ['shackle', 'bind', 'restrain']
  ),
  fiat: L(
    'A fiat is an official order or decree: a board fiat, by fiat. Edict (already in the dictionary) is the close twin; a chair’s line does not replace a fire figure.',
    ['A board fiat is not an occupancy certificate; cite the number.', 'Edict is already in this course. Decree is the close twin. A line from the chair is talk. A number on a certificate is the rule. Cite the cap; then quote the fiat if the board still wants it in the minute.'],
    'An official decree. Close: edict (already in the dictionary). A chair’s line ≠ a cap.',
    ['decree', 'edict', 'order']
  ),
  finicky: L(
    'Finicky means too concerned with small details; fussy: finicky about the n, a finicky check. Fine (already in the dictionary) is a different word; a foyer vibe is not a count.',
    ['Be finicky about the n in the cell; a foyer vibe is not a count.', 'Fussy is everyday. Particular is the close twin. Fine is already in this course and is not the same. A vibe is talk. A cell is a count. Put the number in; then relax the tone if the finding still stands.'],
    'Fussy about small details. Everyday: fussy. Related: fine (already in the dictionary; different). A vibe ≠ a count.',
    ['fussy', 'particular', 'fastidious']
  ),
  fitful: L(
    'Fitful means happening in irregular bursts; stopping and starting: fitful cover, a fitful night. Fit (already in the dictionary) is size or health, not this adjective; cover after six still needs a named spare.',
    ['Fitful cover after six is still a rota hole; name the spare.', 'Irregular is already in this course. Patchy is the close twin. Fit is already in this course and is not the same. After six is a vibe. A name on the log is cover. Write the name; then call it a quiet night if the grid is still full.'],
    'Irregular; on and off. Related: fit (already in the dictionary; different). After six ≠ a named spare.',
    ['patchy', 'irregular', 'sporadic']
  ),
  machination: L(
    'A machination is a secret, often dishonest, scheme (often plural): corridor machinations, a machination. Machine (already in the dictionary) is equipment, not this plot; “strategy” is not an incident file.',
    ['Machination in the corridor is an incident file, not “strategy”.', 'Scheme is already in this course. Plot is the close twin. Machine is already in this course and is not the same. Strategy is a slogan. A dated line is a file. Log the remark; save strategy for the board paper if the ethics minute still allows it.'],
    'A secret scheme (often plural). Related: machine (already in the dictionary; different). “Strategy” ≠ an incident log.',
    ['plot', 'scheme', 'intrigue']
  ),
  malcontent: L(
    'A malcontent is a person who is dissatisfied and likely to complain or rebel: a lobby malcontent, malcontent staff (also an adjective). Rebel (already in the dictionary) is the action twin; heat in the lobby is still not a named risk.',
    ['A malcontent in the lobby is still not a named risk; write it on the register.', 'Complainer is everyday. Rebel is already in this course. Heat is a vibe. A named risk on the register is a file. Write the line; then brief the lobby if the finding still stands.'],
    'A chronically dissatisfied person. Close: complainer. Heat ≠ a named risk.',
    ['complainer', 'dissident', 'agitator']
  ),
  malign: L(
    'To malign is to say unpleasant and untrue things about someone: malign an officer, a malign rumour (also an adjective: evil). Defame (already in this course) is the close twin; “banter” is not an incident file.',
    ['Corridor talk that maligns a night officer is an incident file, not “banter”.', 'Slander is the spoken twin. Defame is already in this course. Banter is a slogan. A dated line is a file. Log the remark; save banter for the newsletter if the officer still consents.'],
    'Speak ill of; also evil. Close: defame (already in this course). “Banter” ≠ an incident log.',
    ['slander', 'defame', 'smear']
  ),
  malleable: L(
    'Malleable means easily shaped, or easily influenced: a malleable abstract, malleable metal. Flexible (already in the dictionary) is everyday; rounding the n is still a methods fail.',
    ['A malleable abstract is still a methods fail if the n is rounded.', 'Flexible is already in this course. Pliable is the close twin. Rounding is a slogan. A codebook line is methods. Write the raw number; then polish the abstract if the rule still allows it.'],
    'Easily shaped or influenced. Everyday: flexible (already in the dictionary). Rounding ≠ a true n.',
    ['pliable', 'flexible', 'impressionable']
  ),
  manifold: L(
    'Manifold means many and of different kinds: manifold adjectives, manifold duties. Many (already in the dictionary) is everyday; extra colour on a slide does not fill an empty n.',
    ['Manifold adjectives on the slide do not fill an empty n.', 'Many is already in this course. Various is the close twin. Colour is tone. A cell is a count. Put the number in; then keep the colour if the finding still stands.'],
    'Many and various. Everyday: many (already in the dictionary). Adjectives ≠ a filled n.',
    ['various', 'multiple', 'diverse']
  ),
  marginalise: L(
    'To marginalise is to treat a person or group as unimportant: marginalise the slice, a marginalised cohort (UK spelling). Margin (already in the dictionary) is the edge or spare amount; dropping a slice without a note is still a methods cut, not clarity.',
    ['To drop the night slice without a note is to marginalise it, not “clarity”.', 'Exclude is the close twin. Margin is already in this course. Clarity is a slogan. A named exclusion is methods. Write the rule; then call it clarity in the limitations if the ethics file still allows the cut.'],
    'Push to the edge (UK). Noun: margin (already in the dictionary). “Clarity” ≠ a named exclusion.',
    ['exclude', 'sideline', 'overlook']
  ),
  martyr: L(
    'A martyr is a person who suffers or dies for a cause: a civic martyr, make a martyr of (also a verb). Sufferer is everyday; a wreath is ceremony, not a named spare.',
    ['A wreath for a martyr is ceremony; it does not staff the sitting.', 'Sufferer is everyday. Sacrifice is the close twin. A wreath is branding. A name on the log is cover. Write the name; then hang the wreath if the sitting still stands.'],
    'Someone who suffers for a cause. Close: sufferer. A wreath ≠ cover.',
    ['sufferer', 'sacrifice', 'victim']
  ),
  masquerade: L(
    'A masquerade is a false show or pretence: a masquerade of a full house, masquerade as cover (also a verb). Mask and pretend (already in the dictionary) are the everyday set; a packed caption on an empty cell is still not a certificate.',
    ['“Full house” on an empty cell is a masquerade, not a certificate.', 'Pretence is the close twin. Mask is already in this course. Full house is a vibe. A number on a certificate is the rule. Count the seats; then keep the caption if the cap still holds.'],
    'A false show; a pretence. Everyday: pretence. Related: mask (already in the dictionary). “Full house” ≠ a cap.',
    ['pretence', 'façade', 'sham']
  ),
  matriculate: L(
    'To matriculate is to enrol at a college or university as a student: matriculate in October, newly matriculated. Enrol (already in the dictionary) is the everyday twin; a foyer film is not a registry file.',
    ['To matriculate is a registry file; a foyer film is not an enrolment.', 'Enrol is already in this course. Register is the close twin. A film is comms. A named line on the roll is a file. Write the enrolment; then screen the film if the sitting still stands.'],
    'Enrol at a university. Everyday: enrol (already in the dictionary). A film ≠ a registry line.',
    ['enrol', 'register', 'admit']
  ),
  maverick: L(
    'A maverick is an independent person who does not follow the group: a maverick chair, maverick methods (also an adjective). Independent (already in the dictionary) is everyday; a mood is not a resolution.',
    ['A maverick chair still needs a named vote; a mood is not a resolution.', 'Independent is already in this course. Nonconformist is the close twin. A mood is talk. A named vote on paper is a file. Write the result; then brief the lobby if the minute still stands.'],
    'An independent nonconformist. Everyday: independent (already in the dictionary). A mood ≠ a minute.',
    ['nonconformist', 'individualist', 'dissenter']
  ),
  maxim: L(
    'A maxim is a short statement of a general rule or truth: a board maxim, a working maxim. Dictum (already in the dictionary) is the close twin; a chair’s line does not replace a fire figure.',
    ['A board maxim is not an occupancy certificate; cite the number.', 'Saying is everyday. Dictum is already in this course. A line from the chair is talk. A number on a certificate is the rule. Cite the cap; then quote the maxim if the board still wants it in the minute.'],
    'A short general rule. Close: dictum (already in the dictionary). A chair’s line ≠ a cap.',
    ['saying', 'dictum', 'precept']
  ),
  meander: L(
    'To meander is to follow a winding course, or to wander without a clear purpose: meander in the abstract, a meandering clause. Wander (already in the dictionary) is everyday; put the raw n in the cell first.',
    ['Do not meander in the abstract; put the raw n in the cell.', 'Wander is already in this course. Drift is the close twin. A winding sentence is tone. A cell is a count. Put the number in; then keep the winding if the finding still stands.'],
    'Wind; wander without purpose. Everyday: wander (already in the dictionary). A winding abstract ≠ a count.',
    ['wander', 'wind', 'drift']
  ),
  mercenary: L(
    'Mercenary means interested only in money or personal gain; also a hired soldier (noun): a mercenary price, mercenary motives. Greedy (already in the dictionary) is everyday; a crest price is not a methods budget.',
    ['A mercenary crest price is not a methods budget.', 'Greedy is already in this course. Hired is the soldier twin. A crest is branding. A line in the budget is cover. Earmark the night-bus line; hang the crest if the sitting still stands.'],
    'Only in it for the money. Everyday: greedy (already in the dictionary). A crest price ≠ cover.',
    ['greedy', 'venal', 'hired']
  ),
  meritorious: L(
    'Meritorious means deserving reward or praise: meritorious copy, meritorious service. Merit and praise (already in the dictionary) are the everyday set; foyer copy is still comms, not a filled n.',
    ['Meritorious foyer copy is still comms, not a filled n.', 'Praiseworthy is the close twin. Merit is already in this course. Copy is branding. A cell is a count. Put the number in; then keep the copy if the finding still stands.'],
    'Deserving praise. Noun: merit (already in the dictionary). Foyer copy ≠ a filled n.',
    ['praiseworthy', 'commendable', 'laudable']
  ),
  metamorphosis: L(
    'A metamorphosis is a complete change of form or nature: a prospectus metamorphosis, undergo a metamorphosis. Change (already in the dictionary) is everyday; a new jacket is branding, not a new occupancy figure.',
    ['A metamorphosis of the prospectus is branding, not a new occupancy cap.', 'Change is already in this course. Transformation is the close twin. A jacket is comms. A number on a certificate is the rule. Keep the number; then recut the jacket if the inspector still allows the sitting.'],
    'A complete change of form. Everyday: change (already in the dictionary). A new jacket ≠ a cap.',
    ['transformation', 'change', 'conversion']
  ),
  metropolis: L(
    'A metropolis is a large, important city, often the capital of a region: a cover metropolis, the regional metropolis. Metro and city (already in the dictionary) are everyday; geography on the jacket is not a catchment bus time.',
    ['A metropolis on the cover is geography, not a catchment bus time.', 'City is already in this course. Capital is the close twin. A cover is comms. A last-service time is a file. Publish the time; then keep the skyline if the bus still runs.'],
    'A large important city. Everyday: city (already in the dictionary). A cover skyline ≠ a last bus.',
    ['city', 'capital', 'conurbation']
  ),
  microcosm: L(
    'A microcosm is a small thing, group, or place that has the features of a larger one: a foyer microcosm, a microcosm of the catchments. Sample is everyday; a lobby scene is not a sampling frame.',
    ['A foyer microcosm is not a sampling frame; name the slice.', 'Sample is everyday. Miniature is the close twin. A foyer scene is a vibe. A named list with a date is methods. Write the frame; then report the scene in the limitations if it still belongs there.'],
    'A small version of a larger whole. Close: miniature. A foyer scene ≠ a frame.',
    ['miniature', 'sample', 'cross-section']
  ),
  millennial: L(
    'Millennial means relating to a thousand-year period; also a person born in the 1980s–1990s (noun): millennial copy, a millennial cohort. Million and generation (already in the dictionary) are everyday; jacket tone is comms, not a codebook line.',
    ['Millennial copy on the jacket is comms, not a codebook line.', 'Generational is the people twin. Million is already in this course. A jacket is branding. A named slice is methods. Write the frame; then keep the jacket if the ethics minute still allows the cut.'],
    'Of a millennium; also that generation. Everyday: generational. Jacket copy ≠ a codebook line.',
    ['generational', 'thousand-year', 'epochal']
  ),
  minutiae: L(
    'Minutiae are small, precise, or trivial details (plural): the minutiae of the codebook, lost in minutiae. Minute and detail (already in the dictionary) are everyday; a vibe is not a named slice.',
    ['The minutiae of the codebook still need a named slice; a vibe is not a frame.', 'Details is everyday. Particulars is the close twin. Minute is already in this course. A vibe is talk. A named list with a date is methods. Write the frame; then keep the particulars if the clause still sits on a fact.'],
    'Tiny precise details (plural). Everyday: details. Related: minute (already in the dictionary). A vibe ≠ a frame.',
    ['details', 'particulars', 'niceties']
  ),
  misapprehension: L(
    'A misapprehension is a mistaken belief or understanding: under a misapprehension, a methods misapprehension. Mistake (already in the dictionary) is everyday; the idea that a crest fills a cell is still a methods hole.',
    ['The misapprehension that a crest fills a cell is a methods hole.', 'Mistake is already in this course. Misunderstanding is the close twin. A crest is branding. A cell is a count. Put the number in; then hang the crest if the abstract still matches the file.'],
    'A mistaken understanding. Everyday: mistake (already in the dictionary). A crest ≠ a filled n.',
    ['misunderstanding', 'mistake', 'misconception']
  ),
  misconstrue: L(
    'To misconstrue is to understand something in the wrong way: misconstrue a wreath, misconstrue the clause. Misunderstand (already in the dictionary) is everyday; a wreath is not invigilation.',
    ['Do not misconstrue a wreath as invigilation; name the spare.', 'Misunderstand is already in this course. Misread is the close twin. A wreath is ceremony. A name on the log is cover. Write the name; then hang the wreath if the sitting still stands.'],
    'Interpret wrongly. Everyday: misunderstand (already in the dictionary). A wreath ≠ cover.',
    ['misread', 'misinterpret', 'misunderstand']
  ),
  mince: L(
    'To mince is to cut into very small pieces; also to speak indirectly (mince one’s words): mince the n, not mince words. Cut (already in the dictionary) is everyday; do not soften the raw count in the minute.',
    ['Do not mince the n in the minute; put the raw count in the cell.', 'Cut is already in this course. Soft-pedal is the speech twin. Softening is a slogan. A codebook line is methods. Write the raw number; then polish the abstract if the rule still allows it.'],
    'Chop finely; speak indirectly. Everyday: cut (already in the dictionary). Softening ≠ a true n.',
    ['chop', 'soften', 'hedge']
  ),
  nostalgia: L(
    'Nostalgia is a sentimental longing for a past time: nostalgia for a packed hall, a nostalgia caption. Memory and longing (already in the dictionary) are everyday; a packed past is not an occupancy figure.',
    ['Nostalgia for a packed hall is not an occupancy figure; count the seats.', 'Longing is already in this course. Homesickness is the close twin. Packed is a vibe. A number on a certificate is the rule. Count the seats; then keep the caption if the cap still holds.'],
    'Longing for the past. Everyday: longing (already in the dictionary). A packed memory ≠ a count.',
    ['longing', 'homesickness', 'reminiscence']
  ),
}
