const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2T = {
  complicity: L(
    'Complicity is involvement as a partner in wrongdoing, even if you did not start it: complicity in a leak, silent complicity. Complicit (already in the dictionary) is the adjective; collusion (already in the dictionary) is a secret dishonest deal between parties, and an accomplice (already in the dictionary) is a person who helps. Scrupulous (already in the dictionary) care with a figure is the opposite flavour. Rounding the n is still a methods issue.',
    ['Complicity in a rounded abstract is still a methods issue.', 'Complicit is the adjective (already in C1). Collusion is a secret dishonest deal (already in C1). An accomplice is a helper in a wrong (already in C1). Scrupulous is carefully honest (already in C2) — the contrast. A named residual risk can still be exact. Silence that never states the cell is a hole. Write the number; leave the collegial hush.'],
    'Shared blame in a wrong. Adjective: complicit (already in C1). Close: collusion / accomplice (already in C1). Contrast: scrupulous (already in C2). Silence ≠ an n.',
    ['collusion', 'involvement', 'connivance', 'partnership in wrong']
  ),
  conflagration: L(
    'A conflagration is a large, destructive fire, and, by extension, a sudden outbreak of fierce conflict: a warehouse conflagration, a conflagration of blame. Fire (already in the dictionary) is everyday and smaller; a maelstrom (already in the dictionary) is a violent swirl of emotion, not a blaze, and a blight (already in the dictionary) is a spoiling force, not flames. Corridor heat is not a numbered objection.',
    ['A conflagration of blame in the corridor is not a numbered objection.', 'Fire is everyday (already in A2). A maelstrom is a violent swirl (already in C2). A blight is a spoiling force (already in C2). A dated flame-risk line can still be calm. A storm that never names the warden is theatre. Write the finding; then the metaphor may burn.'],
    'A huge destructive fire. Everyday: fire (already in this dictionary). Close: maelstrom (already in C2). Contrast: blight (spoiling force — already in C2). Blame ≠ a minute.',
    ['blaze', 'inferno', 'firestorm', 'outbreak']
  ),
  consonance: L(
    'Consonance is agreement or harmony, of views or of sound: consonance of aims, pleasing consonance. Harmony (already in the dictionary) is everyday agreement or a musical blend; cadence (already in the dictionary) is a measured rise and fall of voice, and cacophony (already in the dictionary) is a harsh mix — the opposite flavour. A mission chorus is not a spare key.',
    ['Consonance in the mission statement is not a spare night-clinic key.', 'Harmony is everyday agreement or blend (already in B1). Cadence is a measured rise and fall (already in C2). Cacophony is a harsh noise mix (already in C2) — the contrast. Agreement on the right object can still be exact. Agreement instead of a named post is a hole. Write the rota; then the chord.'],
    'Agreement; harmonious sound. Everyday: harmony / agreement (already in this dictionary). Close: cadence (already in C2). Contrast: cacophony (already in C2). A motto ≠ a key.',
    ['harmony', 'accord', 'agreement', 'concord']
  ),
  consummate: L(
    'Consummate, as an adjective, means complete and of the highest skill or degree (formal): consummate skill, a consummate performance. Expert (already in the dictionary) is everyday high knowledge; fastidious (already in the dictionary) is fussy about details, and perfunctory (already in the dictionary) is done just to tick a box — the opposite flavour. Polish on a brand film does not unlock a chained door.',
    ['Consummate branding still left the fire door chained.', 'An expert is someone with high skill (already in B1). Fastidious is fussy about details (already in C2). Perfunctory is a box-tick glance (already in C2) — the contrast. Finish of a method can still be exact. Finish instead of a named post is theatre. Unlock first; then the craft.'],
    'Complete; of the highest skill. Everyday-close: expert (already in B1). Close: fastidious (already in C2). Contrast: perfunctory (already in C2). Craft ≠ an exit.',
    ['complete', 'supreme', 'accomplished', 'perfect']
  ),
  convivial: L(
    'Convivial means friendly, lively, and welcoming, especially of an atmosphere or gathering: a convivial evening, convivial company. Friendly (already in the dictionary) is everyday; affable (already in the dictionary) is easy to talk to, of a person not of a room. Churlish and boorish (already in the dictionary) are ungenerous and coarse — the opposite flavour. Warmth on the night is not a named warden.',
    ['A convivial gala is not a named fire warden.', 'Friendly is everyday (already in A1). Affable is easy to talk to (already in C2). Churlish is ungenerous when kindness was due (already in C2). Boorish is coarse (already in C2). Atmosphere after a sitting can be harmless. Atmosphere instead of a rota is a hole. Write the name; then the supper.'],
    'Warm and sociable (of a gathering). Everyday: friendly (already in this dictionary). Close: affable (of a person — already in C2). Contrast: churlish / boorish (already in C2). A gala ≠ a warden.',
    ['sociable', 'genial', 'festive', 'affable']
  ),
  corpulent: L(
    'Corpulent means fat; having a bulky body (formal): a corpulent figure, corpulent from years at a desk. Fat (already in the dictionary) is everyday; capacious (already in the dictionary) is roomy, of a bag or an appendix, not of a person. Listless (already in the dictionary) is without energy, a different judgement. Bulk on the organogram does not date an embargo.',
    ['A corpulent chair still has to date the embargo.', 'Fat is everyday (already in A1). Capacious is roomy of a container (already in C2) — the mix-up. Listless is without energy (already in C2). A named post can still be held by anyone. A silhouette that never states the date is theatre. Write the embargo; leave the physique.'],
    'Fat; bulky of body (formal). Everyday: fat (already in this dictionary). Mix-up: capacious (roomy — already in C2). Contrast: listless (no energy — already in C2). Bulk ≠ a date.',
    ['stout', 'portly', 'bulky', 'heavy']
  ),
  countenance: L(
    'To countenance is to admit as acceptable, to tolerate or give approval (formal): will not countenance, refuse to countenance a delay. To allow (already in the dictionary) is everyday permission; to brook (already in the dictionary) is to tolerate, usually in “brook no…”, and a sanction (already in the dictionary) is official permission — or a penalty. Recalcitrant (already in the dictionary) is stubbornly uncooperative — the opposite flavour. A ranking film is not a reason to bless an empty cell.',
    ['Do not countenance an empty cell because the ranking film is due.', 'To allow is everyday permission (already in A2). To brook is to tolerate, usually negatively (already in C2). A sanction is permission or a penalty (already in C1). Recalcitrant is stubbornly uncooperative (already in C2) — the contrast. A dated figure can still prop a paper. Approval that never states the n is decoration. Write the number; then the campaign.'],
    'Tolerate; give approval (formal). Everyday: allow (already in this dictionary). Close: brook (already in C2); sanction (already in C1). Contrast: recalcitrant (already in C2). A film is not an n.',
    ['tolerate', 'permit', 'endorse', 'sanction']
  ),
  craven: L(
    'Craven means contemptibly lacking in courage; cowardly (literary / formal): a craven silence, craven delay. A coward (already in the dictionary) is the everyday person; brave (already in the dictionary) is the everyday opposite. Intrepid (already in the dictionary) is fearless, sometimes wry; doughty (this batch) is brave and persistent. “We’ll see” is not a spare key.',
    ['A craven “we’ll see” left the clinic without a spare key.', 'A coward is the everyday noun (already in B2). Brave is everyday (already in A2). Intrepid is fearless (already in C2). Doughty is brave and persistent (this batch) — the contrast. Caution after a dated rota can be exact. Delay instead of a named post is a hole. Write the key-holder; leave the hush.'],
    'Cowardly (literary / formal). Everyday: coward / brave (already in this dictionary). Close: intrepid (already in C2). This batch: doughty (the contrast). Delay ≠ a key.',
    ['cowardly', 'spineless', 'fainthearted', 'timorous']
  ),
  cursory: L(
    'Cursory means hasty and not thorough, of a look or a check: a cursory glance, a cursory reading. Quick (already in the dictionary) is everyday speed; perfunctory (already in the dictionary) is done just to tick a box, the close twin of carelessness. Thorough (already in the dictionary) and scrupulous (already in the dictionary) are the opposite flavour. A skim of the appendix is not a filled n.',
    ['A cursory glance at the appendix still left the n empty.', 'Quick is everyday speed (already in A1). Perfunctory is a box-tick (already in C2). Thorough is careful and complete (already in B2). Scrupulous is carefully honest and exact (already in C2) — the contrast. A short methods line can still be complete. A skim that never states the cell is branding. Write the number or write that it is missing.'],
    'Hasty and not thorough. Everyday: quick (already in this dictionary). Close: perfunctory (already in C2). Contrast: thorough (already in B2); scrupulous (already in C2). A skim ≠ an n.',
    ['hasty', 'perfunctory', 'superficial', 'sketchy']
  ),
  dearth: L(
    'A dearth is a scarcity or lack of something: a dearth of evidence, a dearth of staff. Lack (already in the dictionary) is everyday; paucity (already in the dictionary) is too small an amount, the close twin, and scarce (already in the dictionary) is the adjective of short supply. Copious (already in the dictionary) is a great deal — the opposite flavour. Exiguous (this batch) is scanty of amount. Missing dates are a finding, not a layout choice.',
    ['A dearth of dates in the ethics log is not a formatting nicety.', 'Lack is everyday (already in B1). Paucity is too little (already in C2). Scarce is hard to find (already in C1). Copious is a great deal (already in C2) — the contrast. Exiguous is scanty (this batch). A short log can still be complete. Empty cells are not a small gap; they are none. Write the dates or write that they are missing.'],
    'A shortage; too little of it. Everyday: lack (already in this dictionary). Close: paucity (already in C2); scarce (already in C1). Contrast: copious (already in C2). This batch: exiguous. Layout ≠ a date.',
    ['scarcity', 'lack', 'shortage', 'paucity']
  ),
  decadence: L(
    'Decadence is moral or cultural decline, often with luxurious self-indulgence: a period of decadence, decadence of taste. Luxury (already in the dictionary) is great comfort you do not need; decay (already in the dictionary) is to rot or worsen, and a blight (already in the dictionary) is a spoiling force. Salubrious (already in the dictionary) is healthy and pleasant — the contrast. Canapés are not a named warden.',
    ['Decadence at the gala is not a named fire warden.', 'Luxury is extra comfort (already in B1). To decay is to worsen (already in B2). A blight is a spoiling force (already in C2). Salubrious is healthy and pleasant (already in C2) — the contrast. Taste at a sitting can be exact. Taste instead of a rota is a hole. Write the name; leave the menu for the social.'],
    'Moral decline; luxurious decay. Everyday-close: luxury / decay (already in this dictionary). Close: blight (already in C2). Contrast: salubrious (already in C2). A gala ≠ a warden.',
    ['decline', 'self-indulgence', 'degeneration', 'excess']
  ),
  decorum: L(
    'Decorum is behaviour that is correct, dignified, and socially fitting: parliamentary decorum, a breach of decorum. Courtesy (already in the dictionary) is polite respect; etiquette (already in the dictionary) is the rules of polite behaviour in a group, and protocol (already in the dictionary) is official procedure. Boorish and churlish (already in the dictionary) are coarse and ungenerous — the opposite flavour. Dignity in the chamber is not a dated finding.',
    ['Decorum in the chamber still requires a dated finding.', 'Courtesy is polite respect (already in B1). Etiquette is the polite-rule set (already in C1). Protocol is official procedure (already in C1). Boorish is coarse (already in C2). Churlish is ungenerous (already in C2). Civility after a sitting can be exact. Civility instead of a numbered minute is theatre. Write the finding; then the forms.'],
    'Dignified correct behaviour. Everyday: courtesy (already in this dictionary). Close: etiquette (already in C1); protocol (already in C1). Contrast: boorish / churlish (already in C2). Manners ≠ a minute.',
    ['propriety', 'etiquette', 'dignity', 'protocol']
  ),
  deference: L(
    'Deference is polite yielding to another’s wishes or judgement, out of respect: in deference to, show deference. Respect (already in the dictionary) is everyday high regard; courtesy (already in the dictionary) is polite behaviour. Obsequious (already in the dictionary) is too eager to please power — deference gone fawning — and insolent (already in the dictionary) is insultingly rude, the opposite flavour. Yielding to a brand film does not date an ethics form.',
    ['Deference to the brand film does not date the ethics form.', 'Respect is everyday high regard (already in B1). Courtesy is polite behaviour (already in B1). Obsequious is fawning (already in C2) — too much yielding. Insolent is insultingly rude (already in C2) — the contrast. Heat for a method can still be exact. Heat instead of a dated clause is theatre. Write the date; leave the bow.'],
    'Respectful yielding. Everyday: respect / courtesy (already in this dictionary). Contrast: obsequious (fawning — already in C2); insolent (rude — already in C2). A bow ≠ an ethics date.',
    ['respect', 'regard', 'yielding', 'courtesy']
  ),
  demur: L(
    'To demur is to raise an objection or show reluctance (formal): demur at the plan, without demur. To object in everyday talk is to disagree; dissent (already in the dictionary) is public disagreement, and to cavil (already in the dictionary) is to raise petty objections — a cousin of nitpicking, not of a real pause. To capitulate (already in the dictionary) is to surrender. Corridor hesitation is not a record.',
    ['Demur in the minutes; a corridor hesitation is not a record.', 'Dissent is public disagreement (already in C1). To cavil is to nitpick (already in C2). To capitulate is to surrender (already in C2) — the contrast. A dated objection can still be civil. A pause in the stairwell is theatre. Put the ask on paper; then the pathos.'],
    'Object mildly; hesitate (formal). Close: dissent (already in C1). Contrast: cavil (petty — already in C2); capitulate (surrender — already in C2). A corridor is not a minute.',
    ['object', 'protest', 'hesitate', 'dissent']
  ),
  denouement: L(
    'A denouement is the final unravelling of a plot or of a complicated situation: the novel’s denouement, wait for the denouement. An ending (already in the dictionary) is everyday last part; a finale (already in the dictionary) is the last part of a show or event. A maelstrom (already in the dictionary) is a violent swirl, not a close. Foyer theatre is not a sitting close-out.',
    ['A denouement in the foyer is not a sitting close.', 'An ending is the last part of a story (already in A2). A finale is the last part of a show (already in C1). A maelstrom is a violent swirl (already in C2). Quiet after a sitting can be harmless. Quiet instead of a named spare signing out is a hole. Close the sitting; then the plot may rest.'],
    'The final unravelling of a plot. Everyday: ending (already in this dictionary). Close: finale (already in C1). Contrast: maelstrom (a swirl — already in C2). A foyer is not a close.',
    ['ending', 'resolution', 'finale', 'unravelling']
  ),
  depredation: L(
    'Depredation is an act of attacking, plundering, or causing damage (often plural: depredations): the depredations of time, depredation of a file. Damage is everyday harm; rapacious (already in the dictionary) is aggressively greedy, of a taker, and wanton (already in the dictionary) is needless reckless destruction. Scrupulous (already in the dictionary) care with a figure is the contrast. “Tidying” the raw file is not a methods virtue.',
    ['Depredation of the raw file is not “tidying”; keep the n.', 'Rapacious is grabbing and greedy (already in C2). Wanton is needless destruction (already in C2). Scrupulous is carefully honest (already in C2) — the contrast. A named residual edit can still be exact. A clean-up that never states the cell is a hole. Keep the number; then the polish.'],
    'Plundering; damaging attack. Close: rapacious / wanton (already in C2). Contrast: scrupulous (already in C2). Tidying ≠ an n.',
    ['plunder', 'ravage', 'pillage', 'damage']
  ),
  derelict: L(
    'Derelict means abandoned and in poor condition, or neglectful of a duty: a derelict building, derelict in a duty. Dilapidated (already in the dictionary) is run-down from age or neglect, of condition not of a person; to neglect (already in the dictionary) is the everyday verb. Scrupulous (already in the dictionary) care is the opposite flavour. A pretty organogram does not name the night post.',
    ['Do not be derelict in naming the fire warden because the organogram is pretty.', 'Dilapidated is run-down from age (already in C1). To neglect is to fail in care (already in B2). Scrupulous is carefully honest (already in C2) — the contrast. A named residual risk can still be exact. A chart that never states the night post is a hole. Write the rota; then the architecture.'],
    'Abandoned; neglectful of duty. Close: dilapidated (already in C1); neglect (already in B2). Contrast: scrupulous (already in C2). A chart ≠ a warden.',
    ['abandoned', 'neglected', 'dilapidated', 'remiss']
  ),
  diaphanous: L(
    'Diaphanous means light, delicate, and almost transparent, of fabric; also, figuratively, insubstantial: diaphanous silk, a diaphanous argument. Thin (already in the dictionary) is everyday not-thick; opaque (already in the dictionary) is not see-through, or hard to understand — the opposite flavour. Sheer (already in the dictionary) is used for complete, unmixed emphasis, not for fabric. A see-through slogan is not a named first-aider.',
    ['A diaphanous slogan about “care” is not a named first-aider.', 'Thin is everyday (already in A1). Opaque is not see-through (already in C2) — the contrast. Sheer is complete, unmixed (already in C1) — the mix-up. Plain speech can still be exact. A gauze of adjectives that never names the post is branding. Write the rota; then the fabric.'],
    'Sheer; insubstantial. Everyday: thin (already in this dictionary). Contrast: opaque (already in C2). Mix-up: sheer (emphasis — already in C1). Gauze ≠ a first-aider.',
    ['sheer', 'gossamer', 'translucent', 'insubstantial']
  ),
  doleful: L(
    'Doleful means expressing sorrow; mournful in look or sound: a doleful look, a doleful tune. Sad (already in the dictionary) is everyday; to mourn (already in the dictionary) is to grieve. Lamentable (already in the dictionary) is regrettably poor — a judgement of quality, not of a face. Blithe (already in the dictionary) is carelessly cheerful — the contrast. Dolorous and elegiac (this batch) are literary sorrow. Mood is not a flame-risk decision.',
    ['A doleful “noted” beside an open flame risk is not a decision.', 'Sad is everyday (already in A1). To mourn is to grieve (already in B2). Lamentable is deplorably poor (already in C2) — the mix-up. Blithe is carelessly cheerful (already in C2) — the contrast. This batch: dolorous / elegiac. A quiet person can still own the door. “Noted” with no owner is an empty minute. Name the date; leave the hush for after the close-out.'],
    'Mournful; sorrowful in look. Everyday: sad (already in this dictionary). Mix-up: lamentable (poor — already in C2). Contrast: blithe (already in C2). This batch: dolorous / elegiac. Mood ≠ a flame.',
    ['mournful', 'sorrowful', 'woeful', 'melancholy']
  ),
  doughty: L(
    'Doughty means brave and persistent (literary; sometimes slightly old-fashioned): a doughty campaigner, doughty resistance. Brave (already in the dictionary) is everyday; intrepid (already in the dictionary) is fearless, sometimes wry. Craven (this batch) is contemptibly cowardly — the contrast. Nerve (already in the dictionary) is courage in a tight spot. Persistence on the organogram still has to fill the n.',
    ['A doughty intern still has to fill the n.', 'Brave is everyday (already in A2). Intrepid is fearless (already in C2). Nerve is courage in difficulty (already in B1). Craven is cowardly (this batch) — the contrast. Heat for a method can still be exact. Heat instead of a dated cell is theatre. Write the number; then the crusade.'],
    'Brave and persistent (literary). Everyday: brave (already in this dictionary). Close: intrepid (already in C2). This batch: craven (the contrast). Grit ≠ an n.',
    ['brave', 'intrepid', 'valiant', 'stout-hearted']
  ),
  dross: L(
    'Dross is waste matter; worthless leftover material: cut the dross, industrial dross. Rubbish (already in the dictionary) is everyday waste you throw away; superfluous (already in the dictionary) is extra in a useless way. Germane (already in the dictionary) is on the point — the contrast. To waste (already in the dictionary) is the everyday verb of using badly. Adjectives in the abstract are not a sample size.',
    ['Dross in the abstract is not a sample-size sentence.', 'Rubbish is everyday waste (already in A2). Superfluous is useless extra (already in C2). Germane is on the point (already in C2) — the contrast. A short true sentence can still be presentable. A swell of leftovers that never states the n is branding. Write the number; then the slag.'],
    'Worthless leftover; waste. Everyday: rubbish (already in this dictionary). Close: superfluous (already in C2). Contrast: germane (already in C2). Leftovers ≠ an n.',
    ['waste', 'rubbish', 'slag', 'refuse']
  ),
  efface: L(
    'To efface is to wipe out or make indistinct, or to make oneself inconspicuous: efface a mark, self-effacing. To erase (already in the dictionary) is everyday removal of marks or data; to delete (already in the dictionary) is especially digital, and to expunge (already in the dictionary) is to wipe from an official record. To bowdlerise (already in the dictionary) is to cut “improper” parts. Do not tidy the empty cell out of the appendix.',
    ['Do not efface the empty cell from the appendix.', 'To erase is to remove marks or data (already in B2). To delete is especially digital (already in A2). To expunge is to wipe from a record (already in C2). To bowdlerise is to make “proper” by cutting (already in C2). A named residual gap can still be exact. A clean page that never states the n is a hole. Write the number or write that it is missing.'],
    'Wipe out; make inconspicuous. Everyday: erase / delete (already in this dictionary). Close: expunge (already in C2). Contrast: bowdlerise (already in C2). This batch: emblazon (the display opposite). An appendix is not a hiding place.',
    ['erase', 'wipe', 'obliterate', 'expunge']
  ),
  effrontery: L(
    'Effrontery is shameless, insolent boldness: the effrontery to claim, sheer effrontery. Cheek (already in the dictionary) is everyday rudeness; insolent (already in the dictionary) is insultingly rude, of manner. Temerity (already in the dictionary) is foolish shocking boldness, often ironic; hubris (already in the dictionary) is pride that invites a fall. Deference (this batch) is respectful yielding — the contrast. Calling a drill ceremonial is not wit.',
    ['The effrontery of calling the drill “ceremonial” is not wit.', 'Cheek is everyday rudeness (already in B1). Insolent is insultingly rude (already in C2). Temerity is cheeky boldness (already in C2). Hubris is pride that goes too far (already in C2). Deference is respectful yielding (this batch) — the contrast. Wit after a named warden can wait. Wit instead of a named post is a hole. Keep the door clear; then the joke.'],
    'Shameless insolence. Everyday: cheek (already in this dictionary). Close: insolent / temerity / hubris (already in C2). This batch: deference (the contrast). A joke is not a warden.',
    ['insolence', 'nerve', 'audacity', 'temerity']
  ),
  elegiac: L(
    'Elegiac means expressing sorrow for something past, as of an elegy (literary): an elegiac tone, elegiac about a lost ward. Sad (already in the dictionary) is everyday; to mourn (already in the dictionary) is to grieve. Lamentable (already in the dictionary) is regrettably poor, a quality judgement — the mix-up. Blithe (already in the dictionary) is carelessly cheerful. Doleful and dolorous (this batch) are sorrow of look and of literary grief. A hymn about the clinic is not a spare key.',
    ['An elegiac note about the clinic is not a spare key.', 'Sad is everyday (already in A1). To mourn is to grieve (already in B2). Lamentable is deplorably poor (already in C2) — the mix-up. Blithe is carelessly cheerful (already in C2) — the contrast. This batch: doleful / dolorous. Atmosphere on the night can be exact. Atmosphere instead of a named spare is a hole. Write the key-holder; then the lament.'],
    'Wistfully mournful (literary). Everyday: sad / mourn (already in this dictionary). Mix-up: lamentable (poor — already in C2). Contrast: blithe (already in C2). This batch: doleful / dolorous. A lament ≠ a key.',
    ['mournful', 'plaintive', 'lamenting', 'wistful']
  ),
  eloquence: L(
    'Eloquence is fluent, persuasive, and graceful speech or writing: a speech of eloquence, natural eloquence. Speech (already in the dictionary) is everyday talk or a formal address; fluent (already in the dictionary) is smooth and accurate in a language. Rhetoric (already in the dictionary) is persuasion, sometimes empty; bombast (already in the dictionary) is pompous inflated language — the hollow cousin. Laconic and taciturn (already in the dictionary) are very brief, or quiet by habit. Grace about “care” is not a named first-aider.',
    ['Eloquence about “care” is not a named first-aider.', 'Speech is everyday talk or an address (already in B1). Fluent is smooth in a language (already in B1). Rhetoric is persuasion, sometimes empty (already in C1). Bombast is pompous empty language (already in C2). Laconic is very brief (already in C2). Taciturn is quiet by habit (already in C2). Heat for a method can still be exact. Heat instead of a named post is theatre. Write the rota; then the period.'],
    'Fluent persuasive speech. Everyday: speech / fluent (already in this dictionary). Close: rhetoric (already in C1). Contrast: bombast (already in C2); laconic / taciturn (already in C2). Oratory ≠ a first-aider.',
    ['fluency', 'rhetoric', 'oratory', 'expressiveness']
  ),
  emblazon: L(
    'To emblazon is to display a design or words prominently, as on a shield or banner: emblazon a crest, emblazoned with a motto. To display (already in the dictionary) is everyday showing; a banner (already in the dictionary) is a cloth message, and to brandish (already in the dictionary) is to wave showily or threateningly. To inscribe (already in the dictionary) is to write or cut words onto a surface. To efface (this batch) is to wipe out — the opposite flavour. A ranking slide does not invent an n.',
    ['Emblazoning a ranking slide does not invent an n.', 'To display is to show (already in B1). A banner is a cloth message (already in B2). To brandish is to wave showily (already in C2). To inscribe is to cut words on (already in C1). To efface is to wipe out (this batch) — the contrast. A well-kept badge can be exact. A gleam that never states the cell is theatre. Write the number; then the heraldry.'],
    'Display a design prominently. Everyday: display (already in this dictionary). Close: banner (already in B2); brandish / inscribe (already in this dictionary). This batch: efface (the contrast). A slide ≠ an n.',
    ['blazon', 'display', 'inscribe', 'adorn']
  ),
  encomium: L(
    'An encomium is a formal expression of high praise (literary / formal): an encomium on the dean, a glowing encomium. To praise (already in the dictionary) is everyday; a panegyric and a paean (already in the dictionary) are formal public praise and a hymn of praise. A eulogy (already in the dictionary) is praise especially of the dead; to laud (already in the dictionary) is the verb of high praise, and a plaudit (already in the dictionary) is a round of approval. To denigrate (already in the dictionary) is to run down unfairly. Praise in the minutes is not a finding.',
    ['An encomium in the minutes is not a finding; name the date.', 'To praise is everyday (already in B2). A panegyric is formal public praise (already in C2). A paean is a hymn of praise (already in C2). A eulogy is praise of the dead (already in C1). To laud is to praise highly (already in C2). To denigrate is to run down (already in C2) — the contrast. A dated figure can still be modest. A swell of adjectives that never states the date is branding. Write the date; leave the hymn.'],
    'Formal high praise (literary). Everyday: praise (already in this dictionary). Close: panegyric / paean / eulogy / laud (already in this dictionary). Contrast: denigrate (already in C2). A hymn ≠ a date.',
    ['tribute', 'eulogy', 'panegyric', 'paean']
  ),
  epigram: L(
    'An epigram is a short, witty, and memorable remark, often with a twist: a political epigram, speak in epigrams. A motto (already in the dictionary) is a short guiding phrase; an aphorism (already in the dictionary) is a pithy general truth, and a bromide (already in the dictionary) is a dull conventional remark — the tired cousin. Bombast (already in the dictionary) is pompous empty swell. Wit about “agile delivery” does not license unpublished exam times.',
    ['An epigram about “agile delivery” does not license unpublished exam times.', 'A motto is a short guiding phrase (already in B2). An aphorism is a pithy truth (already in C2). A bromide is a tired commonplace (already in C2). Bombast is pompous empty language (already in C2). A short true sentence can still be presentable. A twist that never states the embargo is theatre. Write the time; then the wit.'],
    'A short witty pointed remark. Everyday-close: motto (already in B2). Close: aphorism (already in C2). Contrast: bromide (already in C2); bombast (already in C2). Wit ≠ an embargo.',
    ['witticism', 'quip', 'aphorism', 'bon mot']
  ),
  euphony: L(
    'Euphony is a pleasant, harmonious quality of sound, especially in language: the euphony of a line, strive for euphony. A melody (already in the dictionary) is a tune; harmony (already in the dictionary) is agreement or a musical blend, and cadence (already in the dictionary) is a measured rise and fall. Cacophony (already in the dictionary) is a harsh mix — the opposite flavour. A pretty slogan is not a sample size.',
    ['Euphony in the slogan is not a sample-size sentence.', 'A melody is a tune (already in B2). Harmony is agreement or blend (already in B1). Cadence is a measured rise and fall (already in C2). Cacophony is a harsh noise mix (already in C2) — the contrast. Clear type can be exact. Clear sound that never states the n is branding. Write the number; then the vowels.'],
    'Pleasant sound, especially in words. Everyday: melody / harmony (already in this dictionary). Close: cadence (already in C2). Contrast: cacophony (already in C2). Sound ≠ an n.',
    ['harmony', 'melody', 'sweetness of sound', 'consonance']
  ),
  exigency: L(
    'An exigency is an urgent need or demand arising from a situation (formal): the exigencies of war, under the exigency of a deadline. Urgent (already in the dictionary) is everyday needing action now; an emergency (already in the dictionary) is a serious unexpected situation. Onerous (already in the dictionary) is burdensome to bear, of a duty; celerity (already in the dictionary) is swiftness, of pace not of need. A ranking film is not an ethics date.',
    ['The exigency of a ranking film does not date the ethics form.', 'Urgent is everyday (already in B1). An emergency needs action now (already in A2). Onerous is burdensome (already in C2). Celerity is swiftness (already in C2) — speed, not need. Heat for a method can still be exact. Heat instead of a dated clause is theatre. Write the date; leave the rush.'],
    'An urgent situational demand (formal). Everyday: urgent / emergency (already in this dictionary). Close: onerous (already in C2). Contrast: celerity (speed — already in C2). Rush ≠ an ethics date.',
    ['urgency', 'demand', 'necessity', 'pressure']
  ),
  expatiate: L(
    'To expatiate is to speak or write at length on a subject (formal): expatiate on a theme, expatiate at leisure. To expand (already in the dictionary) is everyday grow or make larger; to elucidate (already in the dictionary) is to make clear by explaining, of sense not of length. Laconic (already in the dictionary) is very brief — the opposite flavour. Copious (already in the dictionary) notes can still miss the n. Length on the brand is not a filled cell.',
    ['Do not expatiate on the brand while the n is empty.', 'To expand is to grow larger (already in B1). To elucidate is to clarify (already in C2). Laconic is very brief (already in C2) — the contrast. Copious is a great deal (already in C2). A short true sentence can still be complete. A swell of clauses that never states the cell is branding. Write the number; then the essay.'],
    'Speak or write at length (formal). Everyday: expand (already in this dictionary). Close: elucidate (clarify — already in C2). Contrast: laconic (already in C2). Length ≠ an n.',
    ['enlarge', 'dilate', 'expound', 'elaborate']
  ),
  idiosyncrasy: L(
    'An idiosyncrasy is a distinctive, often peculiar, habit or feature of one person or thing: an idiosyncrasy of style, filing idiosyncrasies. A habit (already in the dictionary) is everyday regular action; idiosyncratic (already in the dictionary) is the adjective of oddly personal manner. An axiom (already in the dictionary) is a starting truth taken as given, not a quirk. Nested folders are not a restore test.',
    ['An idiosyncrasy of filing is not a backup policy.', 'A habit is a regular action (already in A2). Idiosyncratic is the adjective (already in C2). An axiom is a starting truth (already in C2) — the contrast. One named live folder can be dull and still exact. A nest of copies with no restore test is a hole. Name the backup; then enjoy the quirk.'],
    'A distinctive personal peculiarity. Everyday: habit (already in this dictionary). Adjective: idiosyncratic (already in C2). Contrast: axiom (a given truth — already in C2). A quirk ≠ a backup.',
    ['peculiarity', 'quirk', 'mannerism', 'oddity']
  ),
  imbroglio: L(
    'An imbroglio is a complicated, confusing, and embarrassing situation: a diplomatic imbroglio, caught in an imbroglio. A mess (already in the dictionary) is everyday untidy trouble; a predicament (already in the dictionary) is a hard situation to get out of, and a fiasco (already in the dictionary) is a complete humiliating failure. A maelstrom (already in the dictionary) is a violent swirl. Biscuits are not a flame-risk close-out.',
    ['An imbroglio over biscuits is not a flame-risk close-out.', 'A mess is everyday trouble (already in A2). A predicament is a hard situation (already in C1). A fiasco is a complete failure (already in C1). A maelstrom is a violent swirl (already in C2). Taste at a gala can be exact. Taste instead of a dated flame-risk line is noise. Name the owner of the door; leave the menu for the social.'],
    'A tangled embarrassing mess. Everyday: mess (already in this dictionary). Close: predicament / fiasco (already in C1). Contrast: maelstrom (a swirl — already in C2). Biscuits ≠ a flame.',
    ['tangle', 'predicament', 'muddle', 'fiasco']
  ),
  impecunious: L(
    'Impecunious means having little or no money (formal): an impecunious student, impecunious years. Poor (already in the dictionary) is everyday; penurious (already in the dictionary) is extremely poor, or mean with money, and parsimonious (already in the dictionary) is stingy, of unwillingness to spend — not the same as having none. Luxury (already in the dictionary) is extra comfort. A thin budget still has to name the night post.',
    ['An impecunious budget still has to name the fire warden.', 'Poor is everyday (already in A2). Penurious is poverty-stricken or stingy (already in C2). Parsimonious is too sparing (already in C2) — stingy, not broke. Luxury is extra comfort (already in B1) — the contrast. A named post can still be cheap. A cut that never states the night cover is a hole. Write the rota; then the thrift.'],
    'Having little money (formal). Everyday: poor (already in this dictionary). Close: penurious (already in C2). Contrast: parsimonious (stingy — already in C2); luxury (already in B1). Thrift ≠ a warden.',
    ['penniless', 'poor', 'penurious', 'broke']
  ),
  imperturbable: L(
    'Imperturbable means remaining calm and not easily upset or excited: an imperturbable manner, imperturbable under fire. Calm (already in the dictionary) is everyday; phlegmatic (already in the dictionary) is calmly unemotional, the close twin. Circumspect (already in the dictionary) is careful before acting, of caution not of temper. Choleric and histrionic (already in the dictionary) are hot-tempered and over-theatrical — the opposite flavour. Unshakeable calm still has to date an embargo.',
    ['An imperturbable chair still has to date the embargo.', 'Calm is everyday (already in A2). Phlegmatic is calmly unemotional (already in C2). Circumspect is cautious (already in C2). Choleric is hot-tempered (already in C2). Histrionic is over-theatrical (already in C2) — the contrast. Quiet after a sitting can be harmless. Quiet instead of a dated line is a hole. Write the embargo; then the composure.'],
    'Unshakably calm. Everyday: calm (already in this dictionary). Close: phlegmatic (already in C2). Contrast: choleric / histrionic (already in C2). Composure ≠ a date.',
    ['unflappable', 'calm', 'phlegmatic', 'composed']
  ),
  impregnable: L(
    'Impregnable means impossible to capture, break into, or overcome: an impregnable fortress, impregnable to criticism. Strong (already in the dictionary) is everyday; a bastion and a bulwark (already in the dictionary) are a stronghold of a cause and a defensive safeguard. Tenuous (already in the dictionary) is thin and shaky — the opposite flavour. Implacable (already in the dictionary) is of a person who cannot be softened, not of a wall. A ranking is not proof against an empty cell.',
    ['Do not treat a ranking as impregnable while the n is empty.', 'Strong is everyday (already in A1). A bastion is a stronghold of a cause (already in C2). A bulwark is a safeguard (already in C2). Tenuous is thin and shaky (already in C2) — the contrast. Implacable is of a person (already in C2) — the mix-up. A dated figure can still prop a paper. A motto that never states the cell is decoration. Write the number; then the fortress.'],
    'Unable to be broken or taken. Everyday: strong (already in this dictionary). Close: bastion / bulwark (already in C2). Contrast: tenuous (already in C2). Mix-up: implacable (of a person — already in C2). A ranking ≠ an n.',
    ['unassailable', 'invincible', 'secure', 'unconquerable']
  ),
  dolorous: L(
    'Dolorous means feeling or expressing great sorrow (literary): a dolorous cry, dolorous news. Sad (already in the dictionary) is everyday; doleful (this batch) is mournful of look or sound, and elegiac (this batch) is wistful for something past. Lamentable (already in the dictionary) is regrettably poor — the mix-up of quality with grief. Ebullient (already in the dictionary) is bubbling with energy — the contrast. A hymn to “care” is not a named first-aider.',
    ['A dolorous hymn to “care” is not a named first-aider.', 'Sad is everyday (already in A1). Doleful is mournful in look (this batch). Elegiac is wistfully mournful (this batch). Lamentable is deplorably poor (already in C2) — the mix-up. Ebullient is bubbling with energy (already in C2) — the contrast. Atmosphere on the night can be exact. Atmosphere instead of a named post is a hole. Write the rota; then the dirge.'],
    'Sorrowful (literary). Everyday: sad (already in this dictionary). This batch: doleful / elegiac. Mix-up: lamentable (poor — already in C2). Contrast: ebullient (already in C2). A hymn ≠ a first-aider.',
    ['sorrowful', 'mournful', 'grievous', 'doleful']
  ),
  exegesis: L(
    'Exegesis is a critical explanation or interpretation of a text, especially a difficult one: biblical exegesis, exegesis of a clause. An explanation (already in the dictionary) is everyday making-clear; interpretation (already in the dictionary) is how you explain the meaning, and to elucidate (already in the dictionary) is to clarify by explaining. A commentary (already in the dictionary) is critical discussion; to gloss (already in the dictionary) is to smooth over, or to annotate briefly. Bombast (already in the dictionary) is empty swell. Reading the motto is not a methods paragraph.',
    ['Exegesis of the motto is not a methods paragraph.', 'An explanation makes something clear (already in B1). Interpretation is how you explain meaning (already in B1). To elucidate is to clarify (already in C2). A commentary is critical discussion (already in C1). To gloss is to smooth over or annotate (already in C1). Bombast is pompous empty language (already in C2). Scale on the right object can be exact. Scale instead of a dated n is theatre. Write the number; then the gloss.'],
    'Critical interpretation of a text. Everyday: explanation / interpretation (already in this dictionary). Close: elucidate / commentary / gloss (already in this dictionary). Contrast: bombast (already in C2). A motto ≠ an n.',
    ['interpretation', 'commentary', 'exposition', 'gloss']
  ),
  exiguous: L(
    'Exiguous means very small in amount; scanty (formal): an exiguous salary, exiguous evidence. Small (already in the dictionary) is everyday little; scarce (already in the dictionary) is hard to find, and paucity (already in the dictionary) is too little of something. Dearth (this batch) is a scarcity. Copious and capacious (already in the dictionary) are a great deal, and roomy — the opposite flavour. A tiny n is still a number; a blank cell is none.',
    ['An exiguous n is still a number; a blank cell is none.', 'Small is everyday (already in A1). Scarce is hard to find (already in C1). Paucity is too little (already in C2). Dearth is a shortage (this batch). Copious is a great deal (already in C2). Capacious is roomy (already in C2) — the contrast. A short methods line can still be complete. An empty cell is not a small gap; it is none. Write the number or write that it is missing.'],
    'Very small in amount (formal). Everyday: small (already in this dictionary). Close: scarce (already in C1); paucity (already in C2). This batch: dearth. Contrast: copious / capacious (already in C2). Tiny ≠ blank.',
    ['scanty', 'meagre', 'sparse', 'slight']
  ),
  importune: L(
    'To importune is to ask someone persistently and pressingly for something (formal): importune the board, importuned for a favour. To beg (already in the dictionary) is everyday desperate asking; to beseech (already in the dictionary) is to ask earnestly, literary, of tone more than of nagging. To demur (this batch) is to object or hesitate; to cavil (already in the dictionary) is to nitpick. Corridor pressure is not a record.',
    ['Do not importune the chair in the corridor; put the missing date in the minutes.', 'To beg is to ask desperately (already in B1). To beseech is to ask earnestly (already in C2). To demur is to object mildly (this batch). To cavil is to nitpick (already in C2). A dated ask can still be sharp. Heat in the stairwell is theatre. Put the date on paper; then the pathos.'],
    'Press with persistent requests (formal). Everyday: beg (already in this dictionary). Close: beseech (already in C2). This batch: demur. Contrast: cavil (petty — already in C2). A corridor is not a minute.',
    ['beseech', 'pester', 'press', 'solicit']
  ),
}
