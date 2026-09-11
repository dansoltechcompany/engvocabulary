const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2Q = {
  labyrinth: L(
    'A labyrinth is a maze of paths, or any system so tangled that you lose your way: a labyrinth of corridors, a labyrinth of rules. Maze is everyday; circuitous and tortuous (already in the dictionary) describe a roundabout route, not the whole warren. Opaque (already in the dictionary) is hard to see through, of prose or glass. Do not file a maze of shared folders as a backup.',
    ['A labyrinth of shared folders is not a backup policy.', 'Maze is everyday. Warren is the animal cousin. Circuitous is of a route (already in C2). Tortuous is twisting (already in C2). One named live folder can be dull and still exact. A nest of copies with no restore test is a hole. Name the backup; then enjoy the architecture.'],
    'A maze; a confusing system. Everyday: maze. Close: warren. Contrast: circuitous / tortuous (of a route — already in C2). Folders ≠ a backup.',
    ['maze', 'warren', 'tangle', 'morass']
  ),
  lacerate: L(
    'To lacerate is to tear flesh in a jagged way, or, of language, to wound someone severely: lacerate the skin, a lacerating review. Wound (already in the dictionary) is everyday; scathing (already in the dictionary) is harshly critical without the flesh image. Traduce (already in the dictionary) is to slander, not to cut. Do not lacerate a junior for asking where the date went.',
    ['Do not lacerate a junior for asking where the date went.', 'Wound is everyday (already in B2). Scathing is scornfully critical (already in C2). Traduce is slander (already in C2). A dated objection can be sharp and still fair. Corridor flesh-cutting is theatre. Table the empty cell; spare the junior.'],
    'Tear jaggedly; also of wounding words. Everyday: wound (already in this dictionary). Close: scathing (already in C2). Contrast: traduce (slander — already in C2). A date is not a personal attack.',
    ['tear', 'gash', 'wound', 'cut']
  ),
  lackadaisical: L(
    'Lackadaisical means lazily half-hearted, without energy or care for the job: a lackadaisical attitude, lackadaisical about the rota. Lazy (already in the dictionary) is everyday; indolent (already in the dictionary) is habitually idle. Lacklustre (already in the dictionary) is dull, not slack about duty; languid (already in the dictionary) is gracefully slow. Do not file a chained door as a shrug.',
    ['A lackadaisical shrug is not a fire-door minute.', 'Lazy is everyday (already in A2). Indolent is idle by habit (already in C2). Lacklustre is dull (already in C1) — the mix-up. Languid is unhurried (already in C2). A calm check can still be thorough. “It will be fine” with no named warden is neglect. Write the minute; enthusiasm is optional.'],
    'Lazily half-hearted. Everyday: lazy (already in this dictionary). Close: indolent (already in C2). Mix-up: lacklustre (dull — already in C1). A shrug is not a fire door.',
    ['lazy', 'indolent', 'careless', 'slack']
  ),
  lacuna: L(
    'A lacuna is a gap where something is missing in a text, record, or argument (formal): a lacuna in the manuscript, fill a lacuna. Gap (already in the dictionary) is everyday; hiatus and void (already in the dictionary) are the close twins of a break and an emptiness. Paucity (already in the dictionary) is too little of a thing, not a hole in a page. Do not treat a blank n as a nicety of layout.',
    ['The lacuna in the n is a finding, not a formatting nicety.', 'Gap is everyday (already in B1). Hiatus is a pause (already in C1). Void is emptiness (already in C1). Paucity is scarcity (already in C2). A short appendix can still be complete. An empty cell is not a small gap; it is none. Write the number or write that it is missing.'],
    'A gap in a text or argument (formal). Everyday: gap (already in this dictionary). Close: hiatus / void (already in C1). Contrast: paucity (too little — already in C2). Layout ≠ an n.',
    ['gap', 'hiatus', 'void', 'omission']
  ),
  lambast: L(
    'To lambast (also lambaste) is to criticise someone or something with force: lambast the report, lambasted in the press. Criticise (already in the dictionary) is everyday and calmer; castigate and excoriate (already in the dictionary) are the close literary twins. Objurgate (already in the dictionary) is a harsh personal rebuke; scathing (already in the dictionary) is the adjective of tone. Put the missing date in the minutes, not in a corridor blast.',
    ['Lambast the missing date in the minutes; corridor heat is not a record.', 'Criticise is everyday (already in B2). Castigate and excoriate are severe (already in C2). Objurgate is a scolding (already in C2). Heat in the corridor is theatre. Two figures on a slide can be calm and still fatal. Table the n; spare the scorched-earth aside.'],
    'Attack with harsh criticism (also lambaste). Everyday: criticise (already in this dictionary). Close: castigate / excoriate (already in C2). Contrast: objurgate (rebuke a person — already in C2). A date belongs in the minutes.',
    ['criticise', 'castigate', 'excoriate', 'rebuke']
  ),
  languor: L(
    'Languor is a dreamy or weary lack of energy, often faintly pleasant (literary): summer languor, a languor in the hall. Tiredness is everyday; languid (already in the dictionary) is the adjective. Lassitude and ennui (already in the dictionary) are heavier fatigue and bored emptiness; lethargy (this batch) is dull inactivity, not the soft hush. Do not let post-gala languor stand in for a named warden.',
    ['Languor after the gala is not cover for an unnamed fire warden.', 'Tiredness is everyday. Languid is the adjective (already in C2). Lassitude is weary fatigue (already in C2). Ennui is bored emptiness (already in C2). Lethargy is sluggish inactivity (this batch). Atmosphere is design. Cover on the night is a name. The hush does not hold the key.'],
    'Dreamy tiredness (literary). Everyday: tiredness. Close adjective: languid (already in C2). Contrast: lethargy (dull inactivity — this batch); ennui (bored emptiness — already in C2). A gala is not a warden.',
    ['lassitude', 'languidness', 'weariness', 'listlessness']
  ),
  laud: L(
    'To laud is to praise highly (formal): laud a decision, widely lauded. Praise and commend (already in the dictionary) are everyday and milder; laudable (already in the dictionary) means worthy of praise, not the act. Laudatory (this batch) is the adjective of the speech; a paean (already in the dictionary) is a hymn of praise. Do not laud a ranking while the n is empty.',
    ['Do not laud a ranking while the n is empty.', 'Praise is everyday (already in A2). Commend is slightly formal (already in C1). Laudable is “worthy of praise” (already in C1) — the mix-up. A paean is a hymn of praise (already in C2). Applause after a dated n is professionalism. Applause instead of the n is theatre. Fill the cell; then the tribute.'],
    'Praise highly (formal). Everyday: praise (already in this dictionary). Close: commend (already in C1). Mix-up: laudable (worthy of praise — already in C1). Cousin: laudatory (this batch). A ranking is not an n.',
    ['praise', 'commend', 'extol', 'acclaim']
  ),
  laudatory: L(
    'Laudatory means expressing praise (formal): a laudatory review, laudatory remarks. Complimentary is everyday; laud (this batch) is the verb. A panegyric and a plaudit (already in the dictionary) are the set-piece and the round of applause. Do not file a hymn in the minutes as a sample-size sentence.',
    ['A laudatory minute is not a sample-size sentence.', 'Complimentary is everyday. Laud is the verb (this batch). A panegyric is formal public praise (already in C2). Plaudits are applause (already in C2). Kind words after a dated n can be exact. Kind words instead of the n are branding. Write the number; then the bouquet.'],
    'Full of praise (formal). Everyday: complimentary / praising. Close verb: laud (this batch). Contrast: panegyric / plaudit (already in C2). Praise ≠ a sample size.',
    ['complimentary', 'flattering', 'eulogistic', 'praising']
  ),
  lax: L(
    'Lax means not strict or careful enough: lax security, lax about deadlines. Careless (already in the dictionary) is everyday; lenient (already in the dictionary) is mild in punishment, a cousin not a synonym. Scrupulous (already in the dictionary) is the opposite flavour — carefully honest and exact. Do not call loose control of draft grades “trust”.',
    ['Lax handling of draft grades is not “trust”.', 'Careless is everyday (already in B1). Lenient is mild in judgement (already in C1). Scrupulous is exact and honest (already in C2) — the contrast. An embargo can be strict and still kind. A shared inbox of unpublished marks is a leak waiting. Name the owner; looseness is not culture.'],
    'Too slack; not strict enough. Everyday: careless / slack (already in this dictionary). Close: lenient (mild — already in C1). Opposite flavour: scrupulous (already in C2). Trust ≠ an unpublished mark-sheet.',
    ['slack', 'careless', 'negligent', 'remiss']
  ),
  lethargic: L(
    'Lethargic means sluggish and without energy: feel lethargic, a lethargic response. Tired is everyday; languid (already in the dictionary) is unhurried, while indolent (already in the dictionary) is idle by habit. Soporific (already in the dictionary) causes sleep; lethargy (this batch) is the noun. Do not file a flame risk as tired mood.',
    ['A lethargic “noted” beside an open flame risk is not a decision.', 'Tired is everyday. Languid is slow and often elegant (already in C2). Indolent is work-shy (already in C2). Soporific sends you to sleep (already in C2). A quiet person can still own the door. “Noted” with no owner is an empty minute. Name the date; leave the nap for after the close-out.'],
    'Sluggish; without energy. Everyday: tired / sluggish. Close noun: lethargy (this batch). Contrast: languid (gracefully slow — already in C2); indolent (idle — already in C2). Mood ≠ a flame.',
    ['sluggish', 'listless', 'torpid', 'drowsy']
  ),
  lethargy: L(
    'Lethargy is a state of tired inactivity and low energy: sink into lethargy, shake off lethargy. Tiredness is everyday; torpor and lassitude (already in the dictionary) are the close twins of dormant stillness and weary fatigue. Fatigue (already in the dictionary) is the bodily drain; lethargic (this batch) is the adjective. Do not brand delay over a spare key as lean.',
    ['Lethargy over the spare key is not “lean staffing”.', 'Tiredness is everyday. Torpor is dormant stillness (already in C2). Lassitude is weary fatigue (already in C2). Fatigue is the drain (already in B2). Languor is dreamier (this batch). A slow week can still cut a second key. Calling the gap “calm” is how a night post dies. Cut the key; then rest.'],
    'Tired inactivity. Everyday: tiredness. Close: torpor / lassitude (already in C2). Adjective: lethargic (this batch). Contrast: languor (dreamy hush — this batch). Lean ≠ no spare key.',
    ['torpor', 'lassitude', 'fatigue', 'listlessness']
  ),
  lexicon: L(
    'A lexicon is the stock of words of a language, field, or person, and also a dictionary: the medical lexicon, expand your lexicon. Dictionary and vocabulary (already in the dictionary) are everyday; a glossary (already in the dictionary) is a short list of terms. Nomenclature (already in the dictionary) is a naming system. Elegant words on a cover do not fill a cell.',
    ['An elegant lexicon on the cover does not invent a cell that is empty.', 'Dictionary is the book (already in A1). Vocabulary is the stock (already in A2). Glossary is a short key (already in C1). Nomenclature is a naming scheme (already in C2). Precise terms can be exact. A slogan-lexicon that never states the n is branding. Write the number; then the glossary.'],
    'A vocabulary; a word-stock. Everyday: vocabulary / dictionary (already in this dictionary). Close: glossary (already in C1). Contrast: nomenclature (a naming system — already in C2). Cover copy ≠ an n.',
    ['vocabulary', 'dictionary', 'glossary', 'word-stock']
  ),
  lithe: L(
    'Lithe means thin, supple, and graceful in movement: a lithe dancer, lithe as a cat. Agile (already in the dictionary) is quick and neat; nimble is of hands and feet. Languid (already in the dictionary) is the slow opposite flavour; graceful is everyday and wider. Do not let a supple keynote staff an empty chair.',
    ['A lithe keynote does not excuse an empty invigilator chair.', 'Agile is quick (already in C1). Graceful is everyday. Languid is unhurried (already in C2) — the contrast. A well-timed talk can be lithe and still honest. A performance that never names the night person is theatre. Fill the rota; then the movement may gleam.'],
    'Supple and graceful. Everyday: graceful / supple. Close: agile (already in C1). Contrast: languid (slow — already in C2). Movement ≠ a seated invigilator.',
    ['supple', 'agile', 'nimble', 'graceful']
  ),
  livid: L(
    'Livid means extremely angry, or dark bluish as a bruise: livid with rage, a livid mark. Furious and angry (already in the dictionary) are everyday; scathing (already in the dictionary) is of the criticism, not of the face. Saturnine (already in the dictionary) is gloomy, not white-hot. Do not file a numbered methods objection as mere temper.',
    ['She was livid about the empty n, and she was right.', 'Angry is everyday (already in A1). Furious is stronger (already in B2). Scathing is of the review (already in C2). A calm letter can still be right. Heat without a date is theatre. Name the cell; colour in the face is optional.'],
    'Furiously angry; also bruise-dark. Everyday: furious (already in this dictionary). Close: enraged. Contrast: scathing (of criticism — already in C2). Temper ≠ a missing n.',
    ['furious', 'enraged', 'incensed', 'infuriated']
  ),
  loath: L(
    'Loath means unwilling (loath to do something): loath to admit it, loath to sign. Reluctant and unwilling (already in the dictionary) are everyday. Loathe (already in the dictionary) is the verb “hate” — the lookalike trap, with a different final consonant; averse is the close twin of distaste. Be loath to circulate draft grades; that is policy, not mood.',
    ['Be loath to circulate draft grades; that is the embargo, not a mood.', 'Reluctant is everyday (already in B2). Unwilling is plain. Loathe is to hate (already in C1) — the mix-up. A dated embargo is a yes or a no. Hesitation dressed as “culture” is how a leak starts. Keep the grades in; then discuss tone.'],
    'Unwilling (loath to). Everyday: reluctant / unwilling (already in this dictionary). Mix-up: loathe (to hate — already in C1). An embargo is not a feeling.',
    ['reluctant', 'unwilling', 'averse', 'disinclined']
  ),
  ludicrous: L(
    'Ludicrous means so unreasonable that it is laughable: a ludicrous claim, ludicrously late. Absurd (already in the dictionary) is the close twin; ridiculous is everyday. Facetious (already in the dictionary) is joking at the wrong time, not the claim itself. Do not dress a bin as a backup and keep a straight face.',
    ['It is ludicrous to call one CSV in a bin a backup.', 'Absurd is the close twin (already in B2). Ridiculous is everyday. Facetious is ill-timed joking (already in C2). A cheap drive can still be a real backup if it restores. A deleted original in Recycle Bin is not a strategy. Restore the file; then argue the architecture.'],
    'Ridiculously absurd. Everyday: ridiculous. Close: absurd (already in B2). Contrast: facetious (joking at the wrong time — already in C2). A bin is not a backup.',
    ['absurd', 'ridiculous', 'preposterous', 'farcical']
  ),
  lustre: L(
    'Lustre (UK spelling) is a soft shine, and also glory or distinction: the lustre of silk, add lustre to a name. Shine and gloss (already in the dictionary) are everyday; resplendent (already in the dictionary) is dazzlingly splendid. Lacklustre (already in the dictionary) is the opposite adjective — dull. Do not staff a night clinic with sheen.',
    ['Lustre on the lanyards does not staff the night clinic.', 'Shine is everyday (already in A2). Gloss as a verb is to smooth over (already in C1). Resplendent is dazzling (already in C2). Lacklustre is dull (already in C1). A well-made badge can be exact. A ribbon that never names the night person is theatre. Fill the rota; then the fabric may gleam.'],
    'Sheen; also glory (UK spelling). Everyday: shine (already in this dictionary). Close: sheen. Contrast: resplendent (dazzling — already in C2); lacklustre (dull — already in C1). Sheen ≠ night cover.',
    ['sheen', 'shine', 'gloss', 'radiance']
  ),
  luxuriant: L(
    'Luxuriant means growing thickly and richly, or, of style, richly elaborate: luxuriant hair, luxuriant prose. Abundant (already in the dictionary) is everyday and wider; florid (already in the dictionary) is flushed or over-decorated. Luxurious is of costly comfort — the mix-up; turgid (already in the dictionary) is pompously swollen. Do not let thick branding hide a chained door.',
    ['Luxuriant branding still left the fire door chained.', 'Abundant is everyday (already in B2). Florid is over-ornate (already in C2). Luxurious is of comfort and cost — the mix-up. Turgid is pompously overwritten (already in C2). Growth on the right object can be exact. A thick logo-field that never names the warden is theatre. Unlock first; then the foliage.'],
    'Thickly abundant (growth or style). Everyday: lush / abundant (already in this dictionary). Close: florid (already in C2). Mix-up: luxurious (costly comfort). Contrast: turgid (pompous — already in C2). Branding ≠ an exit.',
    ['lush', 'abundant', 'profuse', 'teeming']
  ),
  lyrical: L(
    'Lyrical means song-like and emotionally expressive, or enthusiastically poetic: a lyrical passage, wax lyrical about. Lyric (already in the dictionary) is of song words, or a lyric poem. Prosaic (already in the dictionary) is the dull opposite; pellucid (already in the dictionary) is crystal-clear, not tuneful. Do not let copy about care skip the named medic.',
    ['Lyrical copy about “care” is not a named first-aider.', 'Poetic is everyday-adjacent. Lyric is of song or a lyric poem (already in C1). Prosaic is plain and dull (already in C2) — the contrast. Pellucid is clear (already in C2). Feeling on the page can be exact. Feeling instead of a rota is a hole. Write the name; then the verse.'],
    'Song-like; poetically expressive. Everyday: poetic. Close: lyric (already in C1). Opposite flavour: prosaic (already in C2). Copy ≠ a first-aider.',
    ['poetic', 'song-like', 'expressive', 'rhapsodic']
  ),
  banality: L(
    'A banality is a trite, obvious remark, or the quality of being dull and unoriginal: a banality about teamwork, sink into banality. Banal (already in the dictionary) is the adjective. Platitude, cliché, trite, and hackneyed (already in the dictionary) are the close family of stale phrases; commonplace (already in the dictionary) is ordinary, not always stale. Do not file a slogan as a methods comment.',
    ['A banality about “world-leading” is not a methods comment.', 'Banal is the adjective (already in C1). A platitude is a stale moral (already in C1). Cliché and trite are the tired phrase and its flavour (already in C1). Hackneyed is overused (already in C1). A short true sentence can still be fresh. A ranking chorus that never states the n is noise. Write the number; leave the motto.'],
    'A trite remark; dull ordinariness. Everyday: cliché / platitude (already in this dictionary). Adjective: banal (already in C1). Contrast: commonplace (ordinary — already in C1). A slogan is not a finding.',
    ['platitude', 'cliché', 'triteness', 'commonplace']
  ),
  bane: L(
    'A bane is a cause of lasting harm or annoyance (the bane of): the bane of her life, the bane of the project. Nuisance is everyday and weaker; blight (this batch) is the spoiling itself, or a plant disease. Ruin (already in the dictionary) is the end-state. Do not park an empty n as a footnote and keep the ranking.',
    ['An empty n is the bane of the ranking, not a skippable footnote.', 'Nuisance is everyday. Blight is the spoiling force (this batch). Ruin is destruction (already in B2). A small recurring fault can still be the bane. A blank cell used to protect a league table is the fault that counts. Fill the n; the ranking can wait.'],
    'A persistent cause of harm. Everyday: nuisance / curse. Close: blight (this batch). Contrast: ruin (the end-state — already in this dictionary). A ranking is not a sample size.',
    ['curse', 'scourge', 'affliction', 'plague']
  ),
  banter: L(
    'Banter is friendly, teasing talk (also a verb: banter with): office banter, light banter. Chat is everyday; teasing is the manner. Facetious (already in the dictionary) is joking when you should not; a quibble (already in the dictionary) is a small pedantic point, not play. Do not close a flame risk as biscuit talk.',
    ['Banter about the biscuits is not a flame-risk close-out.', 'Chat is everyday. Tease is the verb. Facetious is ill-timed joking (already in C2). A dated health item can be calm and still urgent. A thread about biscuits is noise. Name the owner of the door; leave the menu for the social.'],
    'Playful teasing talk (also a verb). Everyday: teasing / chat. Contrast: facetious (joking at the wrong time — already in C2); quibble (a nitpick — already in C2). Catering ≠ a flame.',
    ['teasing', 'raillery', 'repartee', 'joshing']
  ),
  baroque: L(
    'Baroque is the ornate 17th-century style, and, of writing or design, extravagantly elaborate: baroque architecture, baroque syntax. Ornate is decorated; florid (already in the dictionary) is over-decorated. Turgid and overwrought (already in the dictionary) are pompously swollen and overworked. Ornament does not invent an n.',
    ['Baroque prose does not invent a cell that is empty.', 'Ornate is decorated. Florid is flushed or overdone (already in C2). Turgid is pompously overwritten (already in C2). Overwrought is overworked (already in C2). A short clause can still be exact. A curling sentence that never states the n is theatre. Write the number; then the volute.'],
    'Ornate; extravagantly elaborate. Everyday: ornate. Close: florid (already in C2). Contrast: turgid / overwrought (already in C2). Prose ≠ an n.',
    ['ornate', 'elaborate', 'florid', 'rococo']
  ),
  bastion: L(
    'A bastion is a projecting part of a fort, or an institution that strongly defends a principle: a bastion of free speech, the last bastion. Stronghold is the close twin; defence and safeguard (already in the dictionary) are wider. Bulwark (this batch) is a defensive wall or protecting force — the cousin. Do not hang branding on the gate and skip the named key-holder.',
    ['A bastion of branding is not a named key-holder.', 'Stronghold is the close twin. Defence is everyday-wider (already in B1). Safeguard is a protection (already in C1). Bulwark is a wall or shield (this batch). A real ethics clause can be a bastion. A slogan that lets you skip the night key is a hole. Name the holder; the fortress can wait.'],
    'A stronghold of a cause. Everyday: stronghold. Close: bulwark (this batch). Contrast: defence / safeguard (already in this dictionary). Branding ≠ a key-holder.',
    ['stronghold', 'citadel', 'bulwark', 'rampart']
  ),
  belie: L(
    'To belie is to give a false impression of something, or to fail to show its true nature: her calm belied her fear, a title that belies the contents. Contradict (already in the dictionary) is to say the opposite; disguise (already in the dictionary) is to hide on purpose. Specious (already in the dictionary) is apparently sound but false. Do not let a ranking slide stand in for a filled n.',
    ['A “world-leading” slide belies an empty n.', 'Contradict is to say the opposite (already in B2). Disguise is to hide (already in B1). Specious is seemingly true (already in C2). A modest title over a dated appendix can be honest. A hymn over a blank cell is the lie the slide tells. Open the spreadsheet; the adjective can wait.'],
    'Give a false impression of. Everyday: hide / contradict (already in this dictionary). Close: mask. Contrast: specious (apparently sound — already in C2). A slide is not an n.',
    ['contradict', 'mask', 'misrepresent', 'disguise']
  ),
  belittle: L(
    'To belittle is to make a person or achievement seem unimportant: belittle her work, belittle the risk. Diminish (already in the dictionary) is to make smaller; denigrate (already in the dictionary) is to blacken a reputation. Traduce (already in the dictionary) is to slander. Do not shrink a junior for asking where the date went.',
    ['Do not belittle a junior for asking where the date went.', 'Diminish is to reduce (already in C1). Denigrate is to blacken (already in C2). Traduce is to slander (already in C2). A small question about a blank cell can still be the right one. Calling it “tone” is how the n stays empty. Answer the date; leave the status games.'],
    'Make seem unimportant. Everyday: put down. Close: diminish (already in C1). Contrast: denigrate / traduce (blacken or slander — already in C2). A date is not a status point.',
    ['diminish', 'disparage', 'denigrate', 'minimise']
  ),
  benefactor: L(
    'A benefactor is someone who gives money or help to a person or cause: a generous benefactor, thank the benefactor. Donor (already in the dictionary) is everyday and often of blood or a gift; endow (already in the dictionary) is to give a lasting fund. A sycophant (already in the dictionary) flatters for gain — the opposite flavour of motive. A logo on the wall is not a spare invigilator.',
    ['A benefactor’s logo is not a spare invigilator.', 'Donor is everyday (already in B2). Endow is to fund lastingly (already in C2). A sycophant is a flatterer (already in C2). A named gift can be exact and still welcome. A plate that never staffs the night chair is decoration. Fill the rota; then the plaque.'],
    'A generous donor. Everyday: donor (already in this dictionary). Close: patron. Contrast: sycophant (flatterer — already in C2). A logo is not cover.',
    ['donor', 'patron', 'philanthropist', 'sponsor']
  ),
  bequeath: L(
    'To bequeath is to leave property in a will, or to pass something on to those who follow: bequeath a house, bequeath a habit. Will (already in the dictionary) is the document; a legacy (already in the dictionary) is what is left. Confer (already in the dictionary) is to grant an honour, not an inheritance. Do not hand last year’s workaround down as the protocol.',
    ['Do not bequeath last year’s workaround as the protocol.', 'Leave is everyday. A will is the instrument (already in B1). A legacy is what is passed on (already in C1). Confer is of honours (already in B2). A dated amendment, named in the minutes, is a change. Silence that keeps the bin-as-backup is an inheritance nobody asked for. Write the restore test; then the succession.'],
    'Leave in a will; hand down. Everyday: leave. Close noun: legacy (already in C1). Contrast: confer (grant an honour — already in B2). A workaround is not a protocol.',
    ['leave', 'pass on', 'hand down', 'will']
  ),
  bespoke: L(
    'Bespoke means made to a particular customer’s specification (UK): a bespoke suit, bespoke software. Custom-made is the gloss; custom (already in the dictionary) is also habit or tradition — a lookalike. Sartorial (already in the dictionary) is of clothes and tailoring, not of a one-off build; tailored is the close twin. Shine on a lanyard does not open a fire door.',
    ['Bespoke lanyards do not unlock the fire door.', 'Custom-made is the gloss. Custom is also a habit (already in B1) — the mix-up. Sartorial is of dress (already in C2). A well-cut badge can be exact. A ribbon that never names the night person is theatre. Fill the rota; then the stitching may gleam.'],
    'Custom-made (UK). Everyday: custom-made / tailored. Mix-up: custom (habit — already in this dictionary). Contrast: sartorial (of tailoring — already in C2). A lanyard is not an exit.',
    ['custom-made', 'tailored', 'made-to-measure', 'commissioned']
  ),
  bestow: L(
    'To bestow is to give something formally, especially an honour or gift (bestow on): bestow an award, bestow a title. Give is everyday; confer, grant, and award (already in the dictionary) are the close twins of honours and permissions. Do not stamp “cleared” on a study with no consent clause.',
    ['Do not bestow “cleared” on a study with no consent clause.', 'Give is everyday (already in A1). Confer is of honours (already in B2). Grant is of permission (already in B2). Award is of a prize (already in B1). A dated ethics letter can fairly be bestowed. A slogan in lieu of consent is a hole. Write the clause; then the compliment.'],
    'Give formally (bestow on). Everyday: give (already in this dictionary). Close: confer / grant / award (already in this dictionary). A stamp is not consent.',
    ['confer', 'grant', 'award', 'accord']
  ),
  blight: L(
    'A blight is something that spoils a place, plan, or name; also a plant disease (and a verb: blight a career): urban blight, blight on the landscape. Spoil and ruin (already in the dictionary) are everyday; bane (this batch) is the cause of the harm. Pernicious (already in the dictionary) is slowly destructive. Do not call a blank methods cell a design choice.',
    ['An empty cell is a blight on the methods, not a design choice.', 'Spoil is everyday (already in B2). Ruin is destruction (already in B2). Bane is the cause of harm (this batch). Pernicious is slowly destructive (already in C2). A small stain can still be named. A blank n used to protect a ranking is the spoiling that counts. Fill the cell; the layout can wait.'],
    'A spoiling force; also a plant disease. Everyday: spoil / ruin (already in this dictionary). Close: bane (this batch). Contrast: pernicious (slowly destructive — already in C2). Design ≠ an n.',
    ['scourge', 'curse', 'plague', 'affliction']
  ),
  bluster: L(
    'Bluster is loud, aggressive talk that achieves little (also a verb): empty bluster, bluster through a question. Boast (already in the dictionary) is of one’s own merit; bravado (this batch) is a show of boldness, often to hide fear. Stentorian (already in the dictionary) is of a booming voice, not of the emptiness. A numbered objection is not corridor weather.',
    ['Bluster in the corridor is not a numbered objection.', 'Boast is of self-praise (already in B2). Bravado is a show of nerve (this batch). Stentorian is booming (already in C2). Heat in the corridor is theatre. Two figures on a slide can be calm and still fatal. Table the n; spare the gale.'],
    'Loud empty swagger (also a verb). Everyday: hot air. Close: bravado (this batch). Contrast: boast (self-praise — already in B2); stentorian (of volume — already in C2). Weather ≠ a finding.',
    ['hot air', 'bravado', 'swagger', 'bombast']
  ),
  boisterous: L(
    'Boisterous means noisy, energetic, and roughly high-spirited: a boisterous crowd, boisterous laughter. Noisy (already in the dictionary) is everyday; obstreperous (already in the dictionary) is noisily unruly and hard to control. Vociferous (already in the dictionary) is loud in protest. Do not let a walkout replace a dated finding.',
    ['A boisterous walkout does not replace a dated finding.', 'Noisy is everyday (already in A2). Obstreperous is unruly (already in C2). Vociferous is loud in opinion (already in C2). High spirits after a sitting can be harmless. High spirits instead of a numbered minute are a hole. Write the date; then the noise.'],
    'Roughly noisy and high-spirited. Everyday: noisy (already in this dictionary). Close: obstreperous (already in C2). Contrast: vociferous (loud in protest — already in C2). A walkout is not a minute.',
    ['rowdy', 'unruly', 'uproarious', 'rambunctious']
  ),
  boon: L(
    'A boon is something helpful; a blessing: a boon to students, a mixed boon. Benefit and windfall (already in the dictionary) are the close twins of gain and unexpected luck. Bane (this batch) is the opposite flavour — the lasting harm. Do not file a slogan as the thing that helps.',
    ['A named fire warden is a boon; a slogan is not.', 'Benefit is everyday-wider (already in B1). Windfall is unexpected gain (already in C1). Bane is the curse (this batch) — the contrast. A spare key can be a quiet boon. A motto that never names the night post is decoration. Write the rota; then the thanks.'],
    'A helpful blessing. Everyday: blessing / help. Close: benefit / windfall (already in this dictionary). Opposite: bane (this batch). A slogan is not cover.',
    ['blessing', 'benefit', 'godsend', 'windfall']
  ),
  bourgeois: L(
    'Bourgeois means of the middle class, especially when conventional or materialistic (often disapproving): bourgeois values, a bourgeois suburb. Conventional (already in the dictionary) is everyday and wider; parochial (already in the dictionary) is narrow in outlook. Pejorative (already in the dictionary) names the tone many uses carry. Do not file canapé-chat as a health item.',
    ['A bourgeois fuss about the canapés is not a health item.', 'Middle-class is the plain gloss. Conventional is everyday (already in B2). Parochial is narrow (already in C2). Pejorative is insulting in tone (already in C2). Taste at a gala can be exact. Taste instead of a dated flame-risk line is noise. Name the owner of the door; leave the menu for the social.'],
    'Middle-class; conventionally respectable (often disapproving). Everyday: middle-class. Close: conventional (already in B2). Contrast: parochial (narrow — already in C2). Canapés ≠ a flame.',
    ['middle-class', 'conventional', 'respectable', 'suburban']
  ),
  bravado: L(
    'Bravado is a display of boldness meant to impress or to hide fear: a show of bravado, full of bravado. Brave (already in the dictionary) is the real quality; bluster (this batch) is loud empty talk. Overweening (already in the dictionary) is excessive pride; boast (already in the dictionary) is of one’s merits. Do not license unpublished exam times as agility.',
    ['Bravado about “agile delivery” does not license unpublished exam times.', 'Brave is the real quality (already in A2). Bluster is empty noise (this batch). Overweening is excessive pride (already in C2). A dated amendment, notified in writing, is a change. Silence the night before is a broken undertaking. Keep the clock you printed; then argue the diary.'],
    'A show of boldness. Everyday: swagger. Close: bluster (this batch). Contrast: brave (the real quality — already in A2); overweening (excessive pride — already in C2). Agile ≠ an unpublished start time.',
    ['bluster', 'swagger', 'boldness', 'show']
  ),
  brink: L(
    'The brink is the edge of a drop, or the point just before a change (on the brink of): the brink of the cliff, on the brink of collapse. Edge, threshold, and verge (already in the dictionary) are the close twins. Precipitate (already in the dictionary) is to bring something on suddenly — a cousin verb, not the place. Do not wait until the drop to name the invigilator.',
    ['Do not wait until the brink of the sitting to name the invigilator.', 'Edge is everyday (already in B1). Threshold is a doorway and a start (already in C1). Verge is the brink-cousin (already in C1). A late but dated name is still a name. An empty chair as the candidates enter is neglect. Write the warden tonight; the drama can wait.'],
    'The very edge; the verge. Everyday: edge (already in this dictionary). Close: threshold / verge (already in C1). Contrast: precipitate (bring on suddenly — already in C2). Timing ≠ an unnamed post.',
    ['edge', 'verge', 'threshold', 'precipice']
  ),
  broach: L(
    'To broach a subject is to raise it for discussion, often when it is awkward: broach the topic, broach the question of pay. Raise, introduce, and mention (already in the dictionary) are everyday and milder. A tap in a barrel is the old physical sense. Do not save the empty n for the drinks.',
    ['Broach the empty n in the meeting; do not save it for the drinks.', 'Raise is everyday (already in A2). Introduce is of a topic or a person (already in B1). Mention is lighter (already in A2). An awkward sentence in the minutes can still be exact. An anecdote that never states the cell is a hole. Put the number on the table; then the wine.'],
    'Raise (a difficult subject). Everyday: raise / mention (already in this dictionary). Close: introduce (already in B1). Also: tap a cask. Drinks ≠ a methods sentence.',
    ['raise', 'introduce', 'mention', 'moot']
  ),
  brusque: L(
    'Brusque means abrupt and blunt, often rudely so: a brusque reply, brusque with the clerk. Abrupt, terse, and blunt (already in the dictionary) are the close twins of manner and of few words. Laconic (already in the dictionary) is very brief, not necessarily rude. Do not file a flame risk as a curt “noted”.',
    ['A brusque “noted” beside an open flame risk is not a decision.', 'Abrupt is sudden (already in C1). Terse is tightly brief (already in C1). Blunt is plain to the point of roughness (already in B2). Laconic is few words (already in C2) — not the same as rude. A short yes with an owner can be exact. A snap with no name is an empty minute. Own the door; brevity is allowed after that.'],
    'Curt and blunt. Everyday: abrupt / blunt (already in this dictionary). Close: terse (already in C1). Contrast: laconic (brief, not necessarily rude — already in C2). “Noted” ≠ a close-out.',
    ['abrupt', 'terse', 'blunt', 'curt']
  ),
  bulwark: L(
    'A bulwark is a defensive wall, or a person or thing that protects against harm: a bulwark against leaks, the last bulwark. Bastion (this batch) is a stronghold of a cause — the cousin. Defence and safeguard (already in the dictionary) are wider; a rampart is the physical wall. An embargo is not an optional flourish.',
    ['An embargo is a bulwark, not an optional flourish.', 'Defence is everyday-wider (already in B1). Safeguard is a protection (already in C1). Bastion is a stronghold (this batch). A yes-or-no on circulation can be exact. A phrase that lets you skip the embargo is a hole. Name the rule; belonging is not a waiver.'],
    'A defensive wall; a safeguard. Everyday: defence / safeguard (already in this dictionary). Close: bastion (this batch). Contrast: shibboleth (a stale in-group test — already in C2). A flourish is not a policy.',
    ['safeguard', 'defence', 'bastion', 'rampart']
  ),
}
