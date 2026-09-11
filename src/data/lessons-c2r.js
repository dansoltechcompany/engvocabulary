const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2R = {
  beatific: L(
    'Beatific means showing complete, blissful happiness, as of a saint or a vision (literary): a beatific smile, beatific calm. Happy (already in the dictionary) is everyday; resplendent (already in the dictionary) is dazzling in appearance, not serene in the face. Beatitude is the noun of blessedness; do not file a gala glow as cover. A named warden is still required.',
    ['A beatific smile at the gala is not a named fire warden.', 'Happy is everyday (already in A1). Resplendent is dazzling (already in C2). Blissful is the close twin. Atmosphere on the night can be exact. Atmosphere instead of a rota is a hole. Write the name; then the vision may rest.'],
    'Blissfully serene (literary). Everyday: happy (already in this dictionary). Close: blissful. Contrast: resplendent (dazzling — already in C2). A smile is not a warden.',
    ['blissful', 'serene', 'radiant', 'ecstatic']
  ),
  bedlam: L(
    'Bedlam is a scene of noisy uproar and confusion: bedlam in the hall, absolute bedlam. Chaos (already in the dictionary) is everyday and wider; a cacophony and a maelstrom (already in the dictionary) are a harsh mix of sound and a violent swirl. Obstreperous (already in the dictionary) is of people who will not be quiet. Corridor noise is not a numbered objection.',
    ['Bedlam in the corridor is not a numbered objection.', 'Chaos is everyday (already in B1). A cacophony is a harsh noise mix (already in C2). A maelstrom is a violent swirl (already in C2). Noise after a sitting can be harmless. Noise instead of a dated minute is a hole. Write the finding; then the din may pass.'],
    'Noisy chaos; uproar. Everyday: chaos (already in this dictionary). Close: cacophony / maelstrom (already in C2). Contrast: obstreperous (unruly people — already in C2). Uproar ≠ a minute.',
    ['chaos', 'uproar', 'pandemonium', 'tumult']
  ),
  burnish: L(
    'To burnish is to polish a surface until it shines, or to enhance a reputation: burnish the silver, burnish a name. Polish (already in the dictionary) is everyday; lustre (already in the dictionary) is the sheen or the glory, not the verb. Sedulous (already in the dictionary) branding still leaves a chained door; shine the ranking after the n is a number.',
    ['Burnish the ranking after you fill the n.', 'Polish is everyday (already in B2). Lustre is the sheen (already in C2). Resplendent is dazzling (already in C2). A well-kept badge can be exact. A gleam that never states the cell is theatre. Write the number; then the metal may shine.'],
    'Polish; enhance a reputation. Everyday: polish (already in this dictionary). Close noun: lustre (already in C2). Contrast: sedulous (persistent effort — already in C2). Sheen ≠ an n.',
    ['polish', 'shine', 'buff', 'enhance']
  ),
  buttress: L(
    'A buttress is a projecting support for a wall, or something that reinforces an argument (also a verb: to buttress): a flying buttress, buttress a claim. Support (already in the dictionary) is everyday; a bulwark and a bastion (already in the dictionary) are a defensive wall and a stronghold of a cause. A slogan does not hold up an empty cell.',
    ['A slogan does not buttress an empty cell.', 'Support is everyday (already in B1). A bulwark is a safeguard (already in C2). A bastion is a stronghold (already in C2). A dated figure can still prop a paper. A motto that never states the n is decoration. Write the number; then the architecture.'],
    'A prop; something that reinforces (also a verb). Everyday: support (already in this dictionary). Close: bulwark / bastion (already in C2). A slogan is not a prop.',
    ['support', 'prop', 'reinforce', 'bolster']
  ),
  zealot: L(
    'A zealot is a person fanatical and uncompromising in a cause: a religious zealot, a zealot for reform. A fanatic (already in the dictionary) is the close twin; doctrinaire (already in the dictionary) is rigidly theoretical, of a method not a person. An iconoclast (already in the dictionary) attacks sacred ideas rather than clinging to them. Brand-film zeal does not date the ethics form.',
    ['A zealot for the brand film still has to name the ethics date.', 'A fanatic is the close twin (already in C1). Doctrinaire is rigid theory (already in C2). An iconoclast breaks sacred ideas (already in C2) — the contrast. Heat for a method can still be exact. Heat instead of a dated clause is theatre. Write the date; leave the crusade.'],
    'A fanatical adherent. Everyday-close: fanatic (already in C1). Contrast: iconoclast (breaker of sacred ideas — already in C2); doctrinaire (rigid theory — already in C2). Zeal ≠ an ethics date.',
    ['fanatic', 'extremist', 'partisan', 'true believer']
  ),
  listless: L(
    'Listless means without energy, interest, or enthusiasm: a listless afternoon, listless about the rota. Tired is everyday; lethargic and languid (already in the dictionary) are sluggish inactivity and graceful slowness. Lackadaisical (already in the dictionary) is lazily half-hearted about duty, a cousin not a twin. Do not file a flame risk as low mood.',
    ['A listless “noted” beside an open flame risk is not a decision.', 'Tired is everyday. Lethargic is sluggish (already in C2). Languid is unhurried (already in C2). Lackadaisical is slack about the job (already in C2). A quiet person can still own the door. “Noted” with no owner is an empty minute. Name the date; leave the hush for after the close-out.'],
    'Without energy or interest. Everyday: tired / apathetic. Close: lethargic / languid (already in C2). Contrast: lackadaisical (slack about duty — already in C2). Mood ≠ a flame.',
    ['lethargic', 'languid', 'apathetic', 'sluggish']
  ),
  lurk: L(
    'To lurk is to wait or remain hidden, often with a hint of harm, or to persist unnoticed: lurk in the doorway, a doubt that lurks. Hide (already in the dictionary) is everyday; skulk is the close twin of sneaking. Opaque (already in the dictionary) is hard to see through, of prose or glass, not of a person waiting. Do not leave an unnamed risk in the appendix.',
    ['Do not let an unnamed risk lurk in the appendix.', 'Hide is everyday (already in A2). Skulk is sneaking concealment. Opaque is hard to see through (already in C2). A named residual risk can still be exact. A threat that never reaches the minute is a hole. Put it on the table; then the dark may keep its poetry.'],
    'Hide and wait; persist unseen. Everyday: hide (already in this dictionary). Close: skulk. Contrast: opaque (hard to see through — already in C2). An appendix is not a hiding place for a risk.',
    ['skulk', 'hide', 'prowl', 'linger']
  ),
  labyrinthine: L(
    'Labyrinthine means like a labyrinth: intricate and confusing: labyrinthine corridors, labyrinthine rules. A labyrinth (already in the dictionary) is the noun — maze or tangled system. Circuitous and tortuous (already in the dictionary) describe a roundabout or twisting route, not the whole warren; opaque is hard to see through. Nested folders are not a restore test.',
    ['A labyrinthine shared-drive is not a backup policy.', 'A labyrinth is the noun (already in C2). Maze is everyday. Circuitous is of a route (already in C2). Tortuous is twisting (already in C2). One named live folder can be dull and still exact. A nest of copies with no restore test is a hole. Name the backup; then enjoy the architecture.'],
    'Maze-like; bewilderingly complex. Noun: labyrinth (already in C2). Everyday: maze. Contrast: circuitous / tortuous (of a route — already in C2). Folders ≠ a backup.',
    ['maze-like', 'intricate', 'tangled', 'convoluted']
  ),
  laity: L(
    'The laity are ordinary people as distinct from the clergy, and, by extension, non-specialists in a field: the laity of the parish, explain it to the laity. Clergy (already in the dictionary) is the ordained group; a layman (this batch) is one non-expert. Parochial (already in the dictionary) is of a parish, or narrow in outlook — the mix-up of church words. Senate still needs a named warden.',
    ['The laity on Senate still have to name the fire warden.', 'Clergy is the ordained group (already in B2). A layman is one non-expert (this batch). Parochial is of a parish or narrow (already in C2). Plain speech to non-specialists can be exact. A committee that never names the night post is a hole. Write the rota; then the pews.'],
    'Lay people; non-clergy. Everyday: ordinary members. Close: layman (this batch). Contrast: clergy (already in B2); parochial (parish / narrow — already in C2). A committee is not a warden.',
    ['lay people', 'congregation', 'non-specialists', 'parishioners']
  ),
  lamentable: L(
    'Lamentable means regrettably poor or deplorable (formal): a lamentable failure, lamentable taste. Bad and poor are everyday; egregious (already in the dictionary) is shockingly bad in a glaring way. A blight (already in the dictionary) is the spoiling force itself, not the judgement. An empty n is a finding, not a layout choice.',
    ['An empty n is lamentable, not a formatting nicety.', 'Poor is everyday. Egregious is glaringly bad (already in C2). A blight is the spoiling force (already in C2). A short appendix can still be complete. An empty cell is not a small gap; it is none. Write the number or write that it is missing.'],
    'Deplorably regrettable (formal). Everyday: poor / regrettable. Close: egregious (already in C2). Contrast: blight (the spoiling force — already in C2). Layout ≠ an n.',
    ['deplorable', 'regrettable', 'woeful', 'pitiful']
  ),
  layman: L(
    'A layman is a person without specialised knowledge, or a non-cleric: in layman’s terms, a layman on the board. Amateur (already in the dictionary) is unpaid or unskilful — not the same as non-expert. The laity (this batch) is the group; jargon that hides the n is a cloak, not professionalism.',
    ['Write the methods so a layman can see the n; jargon is not a cloak.', 'Amateur is unpaid or unskilful (already in B1) — the mix-up. The laity is the group (this batch). Plain (already in B2) is simple and clear. Precise terms can still be exact. A slogan-lexicon that never states the n is branding. Write the number; then the glossary.'],
    'A non-expert; a non-cleric. Everyday: non-specialist. Mix-up: amateur (unpaid / unskilful — already in B1). Group: laity (this batch). Jargon ≠ an n.',
    ['non-expert', 'non-specialist', 'outsider', 'amateur']
  ),
  legible: L(
    'Legible means clear enough to be read: legible handwriting, barely legible. Readable is everyday and wider (of style as well as script); handwriting (already in the dictionary) is the thing being judged. Opaque (already in the dictionary) is the opposite flavour of prose you cannot see through. A clear slogan is still not a sample size.',
    ['A legible slogan is still not a sample-size sentence.', 'Readable is everyday-wider. Handwriting is the script (already in A2). Opaque is hard to see through (already in C2) — the contrast. Clear type can be exact. Clear type that never states the n is branding. Write the number; then the font.'],
    'Clear enough to read. Everyday: readable. Close: handwriting (already in A2). Contrast: opaque (obscure — already in C2). Type ≠ an n.',
    ['readable', 'clear', 'decipherable', 'intelligible']
  ),
  litigant: L(
    'A litigant is a person or organisation involved in a lawsuit: the litigants, a litigant in person. A lawsuit (already in the dictionary) is the case; the plaintiff (already in the dictionary) is the party who sues, not always both sides. An arbiter (this batch) decides; “the other side” is not a name in the minutes.',
    ['Name the litigant in the minute; “the other side” is not a record.', 'A lawsuit is the case (already in B1). The plaintiff is the party who sues (already in C1). An arbiter decides (this batch). A dated name can still be exact. A smear that never names the party is theatre. Write who is in court; then the commentary.'],
    'A party to a lawsuit. Everyday: party to a case. Close: plaintiff (already in C1). Contrast: lawsuit (the case — already in B1); arbiter (the decider — this batch). A nickname is not a record.',
    ['party', 'plaintiff', 'claimant', 'suitor']
  ),
  liturgy: L(
    'A liturgy is a prescribed form of public worship, or a set ceremonial order: the liturgy of the hours, a civic liturgy. Ritual and worship (already in the dictionary) are the close twins of a fixed procedure and of devotion. A shibboleth (already in the dictionary) is an in-group test phrase, not a service. A procession of logos is not a consent clause.',
    ['A liturgy of logos is not a consent clause.', 'Ritual is a fixed procedure (already in C1). Worship is devotion (already in C1). A shibboleth is an in-group password (already in C2). Ceremony after a dated form can be exact. Ceremony instead of the clause is theatre. Write the consent; then the rite.'],
    'A set form of worship. Everyday: service / ceremony. Close: ritual / worship (already in C1). Contrast: shibboleth (an in-group test — already in C2). Logos ≠ consent.',
    ['rite', 'ritual', 'service', 'ceremony']
  ),
  lull: L(
    'A lull is a temporary pause of calm (also a verb: to soothe): a lull in the storm, lull a child to sleep. Pause (already in the dictionary) is everyday; a hiatus (already in the dictionary) is a gap in a series. Languor (already in the dictionary) is dreamy tiredness, not a break in the noise. Do not let the hush after a gala stand in for a named warden.',
    ['A lull after the gala is not cover for an unnamed fire warden.', 'Pause is everyday (already in A2). A hiatus is a gap in a series (already in C1). Languor is dreamy tiredness (already in C2). Quiet after a sitting can be harmless. Quiet instead of a rota is a hole. Write the name; then the hush may be earned.'],
    'A brief calm; also to soothe. Everyday: pause (already in this dictionary). Close: hiatus (already in C1). Contrast: languor (dreamy tiredness — already in C2). A hush is not a warden.',
    ['pause', 'respite', 'hiatus', 'calm']
  ),
  lush: L(
    'Lush means growing thickly and richly, or luxurious in a rich, abundant way: lush grass, a lush interior. Luxuriant (already in the dictionary) is the close twin of thick growth and ornate style; luxurious is of costly comfort — the mix-up. Turgid (already in the dictionary) is pompously swollen. Thick branding does not unlock a chained door.',
    ['Lush branding still left the fire door chained.', 'Luxuriant is thick growth or ornate style (already in C2). Abundant is everyday-wider (already in B2). Luxurious is of comfort and cost — the mix-up. Turgid is pompously overwritten (already in C2). Growth on the right object can be exact. A thick logo-field that never names the warden is theatre. Unlock first; then the foliage.'],
    'Thickly rich; luxuriant. Everyday: rich / abundant (already in this dictionary). Close: luxuriant (already in C2). Mix-up: luxurious (costly comfort). Contrast: turgid (pompous — already in C2). Branding ≠ an exit.',
    ['luxuriant', 'abundant', 'rich', 'opulent']
  ),
  lyricism: L(
    'Lyricism is an emotional, song-like quality in writing, music, or speech: the lyricism of the close, a passage of lyricism. Lyrical (already in the dictionary) is the adjective; a lyric (already in the dictionary) is song words or a short poem. Prosaic (already in the dictionary) is the dull opposite. Copy about care is not a named medic.',
    ['Lyricism about “care” is not a named first-aider.', 'Lyrical is the adjective (already in C2). A lyric is song words (already in B2). Prosaic is plain and dull (already in C2) — the contrast. Feeling on the page can be exact. Feeling instead of a rota is a hole. Write the name; then the verse.'],
    'Song-like expressiveness. Everyday: poetry / feeling. Adjective: lyrical (already in C2). Contrast: prosaic (plain — already in C2). Copy ≠ a first-aider.',
    ['poetry', 'expressiveness', 'melody', 'rhapsody']
  ),
  balk: L(
    'To balk (UK also baulk) is to refuse to proceed, or to hesitate (balk at): balk at the cost, the horse balked. Refuse (already in the dictionary) is everyday; hesitate (already in the dictionary) is a pause from doubt. To renege (already in the dictionary) is to go back on a promise already made — later, and worse. A pretty organogram does not license an unnamed chair.',
    ['Do not balk at naming the invigilator because the organogram is pretty.', 'Refuse is everyday (already in A2). Hesitate is a pause from doubt (already in B1). To renege is to break a promise (already in C2). A late but dated name is still a name. An empty chair as the candidates enter is neglect. Write the warden tonight; the chart can wait.'],
    'Refuse to proceed (balk at; UK also baulk). Everyday: refuse / hesitate (already in this dictionary). Contrast: renege (break a promise — already in C2). A chart is not a seated invigilator.',
    ['refuse', 'recoil', 'hesitate', 'shrink']
  ),
  ballast: L(
    'Ballast is heavy material that steadies a ship, or anything that gives stability: take on ballast, intellectual ballast. Weight is everyday; a bulwark (already in the dictionary) is a defensive wall, a cousin of protection rather than of balance. Superfluous (already in the dictionary) extra is the opposite flavour — mass you do not need. A ranking chorus is not the thing that steadies a paper.',
    ['A dated n is ballast; a ranking chorus is not.', 'Weight is everyday. A bulwark is a safeguard (already in C2). Superfluous is useless extra (already in C2) — the contrast. A short methods line can still steady the whole. A motto that never states the cell is decoration. Write the number; then the voyage.'],
    'Steadying weight; a stabiliser. Everyday: weight / balance. Close: bulwark (already in C2). Contrast: superfluous (useless extra — already in C2). A chorus is not an n.',
    ['weight', 'stabiliser', 'counterweight', 'anchor']
  ),
  beseech: L(
    'To beseech is to ask someone earnestly and urgently (literary / formal): I beseech you, beseeched in writing. Plead (already in the dictionary) is everyday-wider and also of court; exhort (already in the dictionary) is to urge strongly, not to beg. Remonstrate (already in the dictionary) is a formal protest. A corridor plea is not a minute.',
    ['Beseech the board in writing; a corridor plea is not a record.', 'Plead is everyday-wider (already in B2). Exhort is to urge strongly (already in C2). Remonstrate is a formal protest (already in C2). An earnest letter can still be exact. Heat in the stairwell is theatre. Put the ask on paper; then the pathos.'],
    'Beg earnestly (literary). Everyday: plead / beg (already in this dictionary). Close: exhort (urge — already in C2). Contrast: remonstrate (protest — already in C2). A plea in the corridor is not a record.',
    ['implore', 'entreat', 'plead', 'beg']
  ),
  bicker: L(
    'To bicker is to argue about petty things in a bad-tempered way: bicker over the bill, bickering in the kitchen. A quarrel (already in the dictionary) is everyday and larger; to quibble (already in the dictionary) is to nitpick a small point, often of wording. Querulous (already in the dictionary) is peevishly complaining, of tone. Canapés are not a flame-risk close-out.',
    ['Do not bicker over the canapés while the flame risk is open.', 'A quarrel is an angry argument (already in A2). To quibble is to nitpick (already in C2). Querulous is peevish complaint (already in C2). Taste at a gala can be exact. Taste instead of a dated flame-risk line is noise. Name the owner of the door; leave the menu for the social.'],
    'Quarrel over petty points. Everyday: quarrel / squabble (already in this dictionary). Close: quibble (already in C2). Contrast: querulous (peevish tone — already in C2). Canapés ≠ a flame.',
    ['squabble', 'quarrel', 'wrangle', 'spar']
  ),
  blasphemy: L(
    'Blasphemy is speech or action showing irreverence towards something treated as sacred: accused of blasphemy, a blasphemy against the rule. Odious (already in the dictionary) is hateful; facetious (already in the dictionary) is joking at the wrong time, a cousin of tone not of the sacred. A drill is not a decorative rite.',
    ['Calling the fire drill “ceremonial” is blasphemy against the protocol, not wit.', 'Odious is hateful (already in C2). Facetious is ill-timed joking (already in C2). A shibboleth is an in-group test (already in C2). Wit after a dated drill can be exact. Wit instead of a named warden is a hole. Keep the door clear; then the joke.'],
    'Irreverence towards the sacred. Everyday: irreverence / profanity. Close: facetious (wrong-time joking — already in C2). Contrast: shibboleth (an in-group test — already in C2). A drill is not décor.',
    ['irreverence', 'sacrilege', 'profanity', 'desecration']
  ),
  bowdlerise: L(
    'To bowdlerise (UK spelling) is to cut parts of a text thought improper, often weakening it: a bowdlerised edition, bowdlerise the report. To censor (already in the dictionary) is official banning; to expunge (already in the dictionary) is to wipe something from a record, not to make it polite. Do not tidy an empty cell out of the appendix.',
    ['Do not bowdlerise the empty cell from the appendix.', 'To censor is official cutting (already in C1). To expunge is to wipe from a record (already in C2). Anodyne is bland and inoffensive (already in C2). A short true sentence can still be presentable. A cleaned appendix that never states the n is a hole. Write the number; leave the varnish.'],
    'Expurgate to make “proper” (UK spelling). Everyday: cut / sanitise. Close: censor (already in C1). Contrast: expunge (wipe from a record — already in C2). Politeness ≠ a missing n.',
    ['expurgate', 'censor', 'sanitise', 'cut']
  ),
  brandish: L(
    'To brandish is to wave something, especially a weapon, in a threatening or showy way: brandish a letter, brandish a sword. Wave (already in the dictionary) is everyday; flourish (already in the dictionary) is to grow well, or to wave with a flourish. Bluster (already in the dictionary) is loud empty swagger, of talk not of an object. A ranking slide is not a finding.',
    ['Brandishing a ranking slide does not invent an n.', 'Wave is everyday (already in A2). Flourish is to thrive or to wave (already in B1). Bluster is empty swagger (already in C2). A dated figure on a slide can be exact. A flourish that never states the cell is theatre. Write the number; then the gesture.'],
    'Wave showily or threateningly. Everyday: wave (already in this dictionary). Close: flourish (already in B1). Contrast: bluster (empty talk — already in C2). A slide is not an n.',
    ['flourish', 'wave', 'wield', 'flaunt']
  ),
  browbeat: L(
    'To browbeat is to intimidate someone with stern or overbearing words (browbeat into): browbeat the clerk, browbeaten into silence. To bully and to intimidate (already in the dictionary) are everyday and wider; to belittle (already in the dictionary) is to make a person seem unimportant, not to cow them. Peremptory (already in the dictionary) is of a tone that allows no discussion. Do not cow a junior for asking where the date went.',
    ['Do not browbeat a junior for asking where the date went.', 'To bully is everyday (already in B1). To intimidate is to frighten into obedience (already in B2). To belittle is to make seem small (already in C2). Peremptory is “no argument” (already in C2). A dated objection can be sharp and still fair. Corridor heat is theatre. Table the empty cell; spare the junior.'],
    'Bully with stern words. Everyday: bully / intimidate (already in this dictionary). Close: belittle (already in C2). Contrast: peremptory (no discussion — already in C2). A date is not a personal attack.',
    ['intimidate', 'bully', 'cow', 'hector']
  ),
  buffoon: L(
    'A buffoon is a person who behaves in a ridiculous, clownish way (often disapproving): play the buffoon, a complete buffoon. A clown (already in the dictionary) is everyday and often professional; facetious (already in the dictionary) is joking at the wrong time, of a remark. A raconteur (already in the dictionary) is a skilled storyteller — the contrast. Senate clowning does not close a flame-risk minute.',
    ['Playing the buffoon at Senate does not close a flame-risk minute.', 'A clown is everyday (already in A1). Facetious is ill-timed joking (already in C2). A raconteur tells stories well (already in C2) — the contrast. Wit after a dated finding can be exact. Wit instead of a numbered line is a hole. Write the minute; then the turn.'],
    'A ridiculous clownish person. Everyday: clown / fool (already in this dictionary). Close: facetious (already in C2). Contrast: raconteur (a skilled storyteller — already in C2). A turn is not a close-out.',
    ['clown', 'fool', 'jester', 'idiot']
  ),
  affable: L(
    'Affable means friendly, pleasant, and easy to talk to: an affable host, affable with strangers. Friendly (already in the dictionary) is everyday; churlish (already in the dictionary) is rude when kindness was due — the opposite flavour. Obsequious and officious (already in the dictionary) are fawning and petty-bossy, not the same as ease. A pleasant chair still dates the embargo.',
    ['An affable chair still has to date the embargo.', 'Friendly is everyday (already in A1). Churlish is rude when kindness was due (already in C2) — the contrast. Obsequious is fawning (already in C2). Officious is petty-bossy (already in C2). Warmth in the room can be exact. Warmth instead of a yes-or-no on circulation is a hole. Name the rule; manner is optional after that.'],
    'Friendly and easy to talk to. Everyday: friendly (already in this dictionary). Contrast: churlish (rude — already in C2); obsequious (fawning — already in C2). Warmth ≠ an embargo date.',
    ['friendly', 'amiable', 'genial', 'cordial']
  ),
  altruism: L(
    'Altruism is unselfish concern for the welfare of others: an act of altruism, altruism in the brief. Benevolent and charitable (already in the dictionary) are kindly generous and of charity; cupidity (already in the dictionary) is greed for possessions — the contrast. A mission sentence is not a spare key on the night.',
    ['Altruism in the mission statement is not a spare night-clinic key.', 'Benevolent is kindly generous (already in C1). Charitable is of charity or kind judgement (already in B1). Cupidity is greed (already in C2) — the contrast. A named night post can be a quiet good. A motto that never cuts the key is decoration. Write the rota; then the thanks.'],
    'Unselfish concern for others. Everyday: unselfishness. Close: benevolent / charitable (already in this dictionary). Contrast: cupidity (greed — already in C2). A motto is not a spare key.',
    ['unselfishness', 'selflessness', 'philanthropy', 'generosity']
  ),
  amalgamate: L(
    'To amalgamate is to combine organisations, groups, or substances into one: amalgamate the trusts, amalgamated boards. Merge and combine (already in the dictionary) are everyday. Jettison (already in the dictionary) is to throw something away, not to join it. Fold the files after a restore test, not instead of one.',
    ['Amalgamate the CSVs after you have a restore test, not instead of one.', 'Merge is everyday (already in B1). Combine is join together (already in B1). Jettison is to abandon (already in C2) — the contrast. One named live folder can be dull and still exact. A nest of copies with no restore test is a hole. Name the backup; then enjoy the merger.'],
    'Merge into one. Everyday: merge / combine (already in this dictionary). Contrast: jettison (throw away — already in C2). A merger is not a restore test.',
    ['merge', 'combine', 'unite', 'fuse']
  ),
  apostate: L(
    'An apostate is a person who abandons a former belief, party, or cause (formal / often a hostile label): branded an apostate, an apostate from the movement. To recant (already in the dictionary) is to withdraw a stated belief — the verb cousin. A zealot (this batch) clings; an iconoclast (already in the dictionary) attacks sacred ideas. Naming an empty cell is a finding, not a defection.',
    ['Do not treat the person who names the empty cell as an apostate from the brand.', 'To recant is to withdraw a claim (already in C2). A zealot clings (this batch). An iconoclast breaks sacred ideas (already in C2). A dated correction can still be loyal to the methods. A smear that never fills the n is theatre. Write the number; leave the excommunication.'],
    'One who abandons a former faith. Everyday: defector / turncoat. Close verb: recant (already in C2). Contrast: zealot (this batch); iconoclast (already in C2). A finding is not a defection.',
    ['defector', 'renegade', 'turncoat', 'deserter']
  ),
  arbiter: L(
    'An arbiter is a person with authority to settle a dispute or decide what is accepted: the arbiter of taste, arbiter of the dispute. To judge (already in the dictionary) is everyday and wider; a litigant (this batch) is a party to a case, not the decider. Peremptory (already in the dictionary) is of a tone that allows no discussion, not of the office. The marketing film does not mark the n.',
    ['The examiner is the arbiter of the n, not the marketing film.', 'To judge is everyday (already in B1). A litigant is a party to a lawsuit (this batch). Peremptory is “no argument” (already in C2). A dated ruling can still be exact. A slogan that never states the cell is branding. Write the number; then the campaign.'],
    'A deciding authority. Everyday: judge / umpire (already in this dictionary). Close: litigant (a party — this batch). Contrast: peremptory (of tone — already in C2). A film is not an n.',
    ['judge', 'umpire', 'adjudicator', 'referee']
  ),
  ardour: L(
    'Ardour is great enthusiasm, passion, or intensity of feeling (UK spelling): youthful ardour, ardour for the cause. Enthusiasm and passion (already in the dictionary) are everyday; fervent (already in the dictionary) is the adjective of intense sincerity. Alacrity (already in the dictionary) is cheerful quickness, not heat. Gala feeling does not staff the night clinic.',
    ['Ardour for the gala does not staff the night clinic.', 'Enthusiasm is everyday (already in B2). Passion is strong feeling (already in A2). Fervent is intensely sincere (already in C2). Alacrity is eager speed (already in C2). Heat for a night of talks can be exact. Heat instead of a named post is a hole. Fill the rota; then the fire.'],
    'Passionate enthusiasm (UK spelling). Everyday: enthusiasm / passion (already in this dictionary). Close adjective: fervent (already in C2). Contrast: alacrity (eager speed — already in C2). Feeling ≠ night cover.',
    ['passion', 'fervour', 'zeal', 'enthusiasm']
  ),
  artifice: L(
    'Artifice is clever trickery, or a skilful device used to deceive (formal): a work of artifice, without artifice. Guile and cunning (already in the dictionary) are sly intelligence and tricky cleverness; duplicity (already in the dictionary) is deceitful double-dealing. Specious (already in the dictionary) is of an argument that looks sound. An elegant abstract does not invent a cell.',
    ['Artifice in the abstract does not fill an empty cell.', 'Guile is sly cunning (already in C2). Cunning is tricky cleverness (already in B2). Duplicity is double-dealing (already in C2). Specious looks sound and is not (already in C2). A neat device can still be honest. A trick that never states the n is a hole. Write the number; then the craft.'],
    'Clever trickery; a device. Everyday: trick / device. Close: guile / cunning (already in this dictionary). Contrast: duplicity (double-dealing — already in C2); specious (apparently sound — already in C2). Craft ≠ an n.',
    ['trickery', 'guile', 'cunning', 'device']
  ),
  augur: L(
    'To augur is to be a sign of what will happen (augur well / ill); as a noun, a soothsayer: it augurs well, the signs augur ill. Auspicious (already in the dictionary) is the adjective of a promising omen. Redolent (already in the dictionary) is evocative of a smell or a time, not a forecast. A ranking is not a substitute for the n.',
    ['A ranking does not augur well while the n is empty.', 'Auspicious is a promising sign (already in C2). An omen is the everyday-adjacent noun. Redolent is evocative (already in C2). A dated figure can still be a good sign. Applause instead of the cell is theatre. Fill the n; then read the weather.'],
    'Foretell; be a sign of (also a soothsayer). Everyday: bode / foretell. Close adjective: auspicious (already in C2). Contrast: redolent (evocative — already in C2). A ranking is not an n.',
    ['bode', 'foretell', 'portend', 'herald']
  ),
  autodidact: L(
    'An autodidact is a person who is self-taught: a brilliant autodidact, autodidact in statistics. Amateur (already in the dictionary) is unpaid or unskilful — the mix-up. Sedulous (already in the dictionary) is carefully persistent effort, of the work not of how it was learned. A self-made expert on the chart still needs a named warden.',
    ['An autodidact on the organogram still needs a named fire warden.', 'Amateur is unpaid or unskilful (already in B1) — the mix-up. Sedulous is carefully persistent (already in C2). A layman is a non-expert (this batch) — the contrast. Self-teaching can still be exact. A title that never names the night post is a hole. Write the rota; then the biography.'],
    'A self-taught person. Everyday: self-taught. Mix-up: amateur (unpaid / unskilful — already in B1). Contrast: layman (non-expert — this batch). A chart is not a warden.',
    ['self-taught', 'self-educated', 'self-instructed', 'autodidactic']
  ),
  avow: L(
    'To avow is to declare something openly and firmly (formal): avow an error, openly avowed. To declare and to assert (already in the dictionary) are everyday and firm statement; to recant (already in the dictionary) is to withdraw a former claim — the contrast. To dissemble (already in the dictionary) is to hide true feeling. Corridor heat is not a record.',
    ['Avow the missing date in the minutes; corridor heat is not a record.', 'Declare is official announcement (already in B1). Assert is to state firmly (already in C1). Recant is to withdraw a claim (already in C2) — the contrast. Dissemble is to hide feeling (already in C2). An awkward sentence in the minutes can still be exact. An anecdote that never states the cell is a hole. Put the number on the table; then the wine.'],
    'Declare openly (formal). Everyday: declare / admit (already in this dictionary). Close: assert (already in C1). Contrast: recant (withdraw — already in C2); dissemble (hide — already in C2). Heat ≠ a minute.',
    ['declare', 'affirm', 'assert', 'profess']
  ),
  axiom: L(
    'An axiom is a statement accepted as true without proof, as a starting point: a mathematical axiom, it is an axiom that. A principle (already in the dictionary) is a moral or organising rule; a shibboleth (already in the dictionary) is an in-group test phrase, often stale. Sententious (already in the dictionary) is pompously moralising, of tone. A blank cell is not a philosophy.',
    ['“The n is a number” is an axiom; a blank cell is not a worldview.', 'A principle is a basic rule (already in B2). A shibboleth is an in-group password (already in C2). Sententious is pompously moralising (already in C2). A short true starting-point can still be exact. A motto that never states the cell is branding. Write the number; leave the worldview.'],
    'A starting truth taken as given. Everyday: first principle. Close: principle (already in B2). Contrast: shibboleth (stale in-group test — already in C2). A blank cell is not a theory.',
    ['principle', 'maxim', 'postulate', 'truism']
  ),
  behemoth: L(
    'A behemoth is something enormous, especially a huge organisation or machine: a corporate behemoth, a behemoth of a report. Giant (already in the dictionary) is everyday; onerous (already in the dictionary) is burdensome to bear, of a duty not of bulk. A vast brand film is not a methods paragraph.',
    ['A behemoth of a brand film is not a methods paragraph.', 'Giant is everyday (already in B1). Onerous is burdensome (already in C2). Superfluous is useless extra (already in C2). Scale on the right object can be exact. Scale instead of a dated n is theatre. Write the number; then the epic.'],
    'Something enormous. Everyday: giant / monster (already in this dictionary). Contrast: onerous (burdensome — already in C2); superfluous (useless extra — already in C2). A film is not a methods line.',
    ['giant', 'colossus', 'monster', 'leviathan']
  ),
  beneficent: L(
    'Beneficent means doing good, or generously kind in action (formal): a beneficent patron, beneficent reform. Benevolent (already in the dictionary) is kindly disposed — the close twin of character rather than of deeds. A benefactor (already in the dictionary) is the donor noun; altruism (this batch) is the unselfish motive. A logo is not a spare invigilator.',
    ['A beneficent donor’s logo is not a spare invigilator.', 'Benevolent is kindly disposed (already in C1). A benefactor is the donor (already in C2). Altruism is the unselfish motive (this batch). A named extra chair can be a quiet good. A ribbon that never fills the rota is theatre. Staff the sitting; then the plaque.'],
    'Doing good; kindly generous (formal). Everyday: kind / generous. Close: benevolent (already in C1). Noun: benefactor (already in C2). Motive: altruism (this batch). A logo is not cover.',
    ['benevolent', 'charitable', 'generous', 'kindly']
  ),
  benighted: L(
    'Benighted means intellectually or morally in the dark (literary / formal), and also overtaken by night: a benighted policy, benighted travellers. Ignorant (already in the dictionary) is everyday not-knowing; credulous (already in the dictionary) is too ready to believe. Opaque (already in the dictionary) is hard to see through, of prose. “We’ll see” is not a spare key.',
    ['A benighted “we’ll see” left the clinic without a spare key.', 'Ignorant is not knowing (already in B2). Credulous is too ready to believe (already in C2). Opaque is hard to see through (already in C2). A slow week can still cut a second key. Calling the gap “calm” is how a night post dies. Cut the key; then rest.'],
    'Intellectually unenlightened (literary). Everyday: ignorant (already in this dictionary). Close: credulous (already in C2). Contrast: opaque (obscure — already in C2). Mood ≠ a spare key.',
    ['unenlightened', 'ignorant', 'backward', 'dark']
  ),
}
