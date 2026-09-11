const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2U = {
  impudent: L(
    'Impudent means rude and disrespectful in a cheeky, shameless way: an impudent remark, impudent towards the chair. Rude (already in the dictionary) is everyday; insolent (already in the dictionary) is insulting towards authority, the close twin, and brazen (already in the dictionary) is shamelessly bold, of nerve more than of cheek. Effrontery (already in the dictionary) is the noun of shameless insolence. Affable (already in the dictionary) is easy and pleasant — the contrast. A joke about cover is not a named post.',
    ['An impudent joke about the night cover is not a named warden.', 'Rude is everyday (already in A2). Insolent is insultingly rude to authority (already in C2). Brazen is shamelessly bold (already in C2). Effrontery is shameless insolence (already in C2). Affable is easy to talk to (already in C2) — the contrast. A sharp, dated objection can still be civil. Cheek that never names the night post is theatre. Write the rota; leave the heckle.'],
    'Cheekily disrespectful. Everyday: rude (already in this dictionary). Close: insolent / brazen (already in C2). Noun: effrontery (already in C2). Contrast: affable (already in C2). A joke ≠ a warden.',
    ['insolent', 'cheeky', 'brazen', 'impertinent']
  ),
  iniquity: L(
    'Iniquity is gross wickedness, or a grossly unjust act (formal / literary): the iniquity of the scheme, an iniquity in the books. Crime (already in the dictionary) is everyday illegality; vice (already in the dictionary) is immoral or criminal behaviour, and immoral (already in the dictionary) is the adjective of wrong. Decadence (already in the dictionary) is luxurious moral decline, a cousin of decay not of a named breach. A logo row is not a finding.',
    ['Do not file iniquity in procurement as a branding disagreement.', 'Crime is everyday illegality (already in A2). Vice is immoral or criminal behaviour (already in B2). Immoral is morally wrong (already in C1). Decadence is luxurious moral decline (already in C2). A dated finding can still be plain. A slogan that never names the breach is decoration. Write the clause; leave the organ swell.'],
    'Gross wickedness; a grave wrong. Everyday: crime (already in this dictionary). Close: vice (already in B2); immoral (already in C1). Contrast: decadence (decline — already in C2). A logo ≠ a breach.',
    ['wickedness', 'wrong', 'injustice', 'vice']
  ),
  internecine: L(
    'Internecine means destructive to both sides, especially of conflict inside a group: internecine warfare, internecine rows. War (already in the dictionary) is everyday fighting between countries; conflict (already in the dictionary) is a serious disagreement, and acrimony (already in the dictionary) is bitter feeling in a dispute — heat, not mutual ruin. Consonance (already in the dictionary) is agreement — the opposite flavour. Biscuits are not a flame-risk close-out.',
    ['Internecine war over biscuits is not a flame-risk close-out.', 'War is everyday fighting (already in A2). Conflict is a serious clash (already in B2). Acrimony is bitterness in a quarrel (already in C2). Consonance is agreement (already in C2) — the contrast. A dated flame-risk line can still be calm. A feud that never names the owner of the door is noise. Name the warden; leave the menu for the social.'],
    'Mutually destructive (within a group). Everyday: war / conflict (already in this dictionary). Close: acrimony (already in C2). Contrast: consonance (already in C2). Biscuits ≠ a flame.',
    ['internal', 'mutual', 'destructive', 'factional']
  ),
  inveigh: L(
    'To inveigh is to speak or write with bitter hostility against someone or something (formal; inveigh against): inveigh against delay, inveighed in print. To complain (already in the dictionary) is everyday unhappiness; to criticise (already in the dictionary) is to point out faults, and to fulminate (already in the dictionary) is to protest loudly — the close twin of rage. Invective (already in the dictionary) and a diatribe (already in the dictionary) are the abusive language and the bitter attack. This batch: lambaste is to rebuke a person harshly. A corridor rant is not a record.',
    ['Inveigh in the minutes; a corridor rant is not a record.', 'To complain is everyday (already in B1). To criticise is to point out faults (already in B2). To fulminate is to rage verbally (already in C2). Invective is abusive attack (already in C2). A diatribe is a bitter verbal assault (already in C1). Lambaste is to rebuke harshly (this batch). Heat after a sitting can be exact. Heat in the stairwell is theatre. Put the objection on paper; then the thunder.'],
    'Rail bitterly against (formal). Everyday: complain / criticise (already in this dictionary). Close: fulminate / invective / diatribe (already in this dictionary). This batch: lambaste. A rant ≠ a minute.',
    ['rail', 'fulminate', 'denounce', 'declaim']
  ),
  inveigle: L(
    'To inveigle is to persuade someone by deception or flattery (formal): inveigle into signing, inveigled a pass. To persuade (already in the dictionary) is everyday talking-into; to cajole (already in the dictionary) is sweet talk, and to coax (already in the dictionary) is gentle persuasion — cousins of tone, not of trick. To beguile (already in the dictionary) is to charm or deceive, literary. To importune (already in the dictionary) is to press persistently, nagging not necessarily lying. A stairwell signature is not consent.',
    ['Do not inveigle a wet-ink signature in the stairwell; put consent on the form.', 'To persuade is everyday talking-into (already in B1). To cajole is to sweet-talk (already in C2). To coax is to persuade gently (already in B2). To beguile is to charm or deceive (already in C2). To importune is to press persistently (already in C2) — nagging, not a trick. A dated form can still be short. Heat on the landing is not a record. Write the consent; then the charm.'],
    'Trick into agreeing (formal). Everyday: persuade (already in this dictionary). Close: cajole (already in C2); coax (already in B2); beguile (already in C2). Contrast: importune (pressing — already in C2). A stairwell ≠ a form.',
    ['cajole', 'wheedle', 'ensnare', 'lure']
  ),
  iridescent: L(
    'Iridescent means showing luminous colours that change with the angle of view: iridescent silk, an iridescent sheen. Colour (already in the dictionary) is everyday hue; colourful (already in the dictionary) is full of bright colours, and a rainbow (already in the dictionary) is the everyday curve of sky colour. Dull (already in the dictionary) is not bright — the opposite flavour. Flamboyant (already in the dictionary) is showy in style, of a person or a crest, not of a shimmer. Slide glitter is not a named first-aider.',
    ['Iridescent slides about “care” are not a named first-aider.', 'Colour is everyday hue (already in A1). Colourful is full of bright colours (already in A2). A rainbow is the sky curve (already in A2). Dull is not bright (already in A2) — the contrast. Flamboyant is showy in style (already in C1). Atmosphere on the night can be exact. Atmosphere instead of a named post is a hole. Write the rota; then the sheen.'],
    'Rainbow-shimmering. Everyday: colour / colourful / rainbow (already in this dictionary). Contrast: dull (already in A2). Mix-up: flamboyant (showy style — already in C1). A slide ≠ a first-aider.',
    ['shimmering', 'opalescent', 'pearly', 'lustrous']
  ),
  jocose: L(
    'Jocose means playful and given to joking (formal): a jocose manner, jocose about the delay. Funny (already in the dictionary) is everyday; a joke (already in the dictionary) is the everyday thing said to raise a laugh. Jovial (already in the dictionary) is warmly cheerful; witty (already in the dictionary) is cleverly amusing, and facetious (already in the dictionary) is joking when you should not. This batch: jocular is humorous of a person or a remark — the close twin. Brand playfulness does not unlock a chained door.',
    ['Jocose branding still left the fire door chained.', 'Funny is everyday (already in A1). A joke is the everyday laugh-line (already in A2). Jovial is warmly cheerful (already in C1). Witty is cleverly funny (already in C1). Facetious is joking at the wrong time (already in C2). Jocular is humorous in manner (this batch). Play after a sitting can be harmless. Play instead of an unlocked exit is a hole. Unlock first; then the jest.'],
    'Playfully joking (formal). Everyday: funny / joke (already in this dictionary). Close: jovial / witty (already in C1); facetious (already in C2). This batch: jocular. Branding ≠ an exit.',
    ['jocular', 'playful', 'witty', 'facetious']
  ),
  jocular: L(
    'Jocular means humorous; intended as a joke, of a person or a remark: a jocular tone, jocular asides. Funny (already in the dictionary) is everyday; witty (already in the dictionary) is cleverly amusing, and facetious (already in the dictionary) is joking when seriousness was due. This batch: jocose is playfully given to joking, a close formal twin. Doleful (already in the dictionary) is mournful of look — the opposite flavour. “Noted” is not a decision.',
    ['A jocular “noted” beside an open flame risk is not a decision.', 'Funny is everyday (already in A1). Witty is cleverly funny (already in C1). Facetious is joking at the wrong time (already in C2). Jocose is playfully joking (this batch). Doleful is mournful in look (already in C2) — the contrast. A short true minute can still be dry. A jest that never numbers the risk is theatre. Write the finding; leave the wink.'],
    'Humorous; joking in manner. Everyday: funny (already in this dictionary). Close: witty (already in C1); facetious (already in C2). This batch: jocose. Contrast: doleful (already in C2). A jest ≠ a minute.',
    ['humorous', 'jocose', 'witty', 'playful']
  ),
  kismet: L(
    'Kismet is destiny or fate, as if already decided (literary): it was kismet, kismet that they met. Luck (already in the dictionary) is everyday chance; fate (already in the dictionary) is how things turn out beyond control — the close twin. An auspicious (already in the dictionary) sign suggests a good start; a chimera (already in the dictionary) is an illusory hope. Destiny-talk does not date a form.',
    ['Kismet did not date the ethics form; a person did, or did not.', 'Luck is everyday chance (already in A2). Fate is how things turn out (already in B1). Auspicious is promising (already in C2). A chimera is an illusory hope (already in C2). A dated line can still be short. A motto that never states the date is decoration. Write the date; leave the stars.'],
    'Fate; appointed destiny (literary). Everyday: luck / fate (already in this dictionary). Close: auspicious (already in C2). Contrast: chimera (illusory — already in C2). Destiny ≠ a date.',
    ['fate', 'destiny', 'lot', 'providence']
  ),
  lambaste: L(
    'To lambaste is to criticise someone or something severely: lambaste the board, lambasted in the press. To criticise (already in the dictionary) is everyday fault-finding; to castigate and to excoriate (already in the dictionary) are formal severe rebukes — the close twins. This batch: to inveigh is to rail against a thing, of hostility more than of a dressing-down. Praise (already in the dictionary) and an encomium (already in the dictionary) are the opposite flavour. A corridor scolding is theatre.',
    ['Lambaste the empty cell in writing; a corridor scolding is theatre.', 'To criticise is everyday fault-finding (already in B2). To castigate is to rebuke harshly (already in C2). To excoriate is to criticise severely (already in C2). To inveigh is to rail against (this batch). Praise is approval (already in B2). An encomium is formal high praise (already in C2) — the contrast. A dated objection can still be sharp. Heat in the stairwell is not a record. Put the empty cell in the minutes; then the thunder.'],
    'Rebuke harshly. Everyday: criticise (already in this dictionary). Close: castigate / excoriate (already in C2). This batch: inveigh. Contrast: praise / encomium (already in this dictionary). A scolding ≠ a minute.',
    ['castigate', 'berate', 'excoriate', 'rebuke']
  ),
  legerdemain: L(
    'Legerdemain is skilful deception; sleight of hand (formal): political legerdemain, a feat of legerdemain. Magic (already in the dictionary) is everyday tricks that look impossible; a trick (already in the dictionary) is a cunning act, and to deceive (already in the dictionary) is to make someone believe a falsehood. To beguile (already in the dictionary) is to charm or trick, literary. A ranking slide is not an n.',
    ['Legerdemain on the ranking slide does not invent an n.', 'Magic is everyday impossible-looking tricks (already in A2). A trick is a cunning act (already in B2). To deceive is to plant a false belief (already in B2). To beguile is to charm or deceive (already in C2). A dated figure can still prop a paper. A flourish that never states the cell is branding. Write the number; then the scarf-trick.'],
    'Sleight of hand; skilful trickery. Everyday: magic / trick (already in this dictionary). Close: deceive (already in B2); beguile (already in C2). A flourish ≠ an n.',
    ['sleight of hand', 'trickery', 'conjuring', 'deception']
  ),
  leonine: L(
    'Leonine means like a lion in appearance or manner (literary): a leonine head, leonine courage. A lion (already in the dictionary) is the everyday animal; intrepid (already in the dictionary) is fearless, sometimes wry, and doughty (already in the dictionary) is brave and persistent. Craven (already in the dictionary) is contemptibly cowardly — the opposite flavour. A mane on the chart is not a named post.',
    ['A leonine silhouette on the organogram still has to name the fire warden.', 'A lion is the everyday animal (already in A1). Intrepid is fearless (already in C2). Doughty is brave and persistent (already in C2). Craven is cowardly (already in C2) — the contrast. A named post can still be held by anyone. A silhouette that never states the night cover is theatre. Write the rota; leave the mane.'],
    'Lion-like (literary). Everyday: lion (already in this dictionary). Close: intrepid / doughty (already in C2). Contrast: craven (already in C2). A mane ≠ a warden.',
    ['lion-like', 'regal', 'mane-like', 'imposing']
  ),
  libertine: L(
    'A libertine is a person, usually a man, who disregards moral restraint, especially in sexual conduct (disapproving): a notorious libertine, play the libertine. Immoral (already in the dictionary) is everyday-close moral wrong; wanton (already in the dictionary) is reckless and unprovoked, often of cruelty, and decadence (already in the dictionary) is luxurious moral decline. This batch: licentious is the adjective of sexual unrestraint. A reputation is not a spare key.',
    ['A libertine reputation is not a spare night-clinic key.', 'Immoral is morally wrong (already in C1). Wanton is needless and reckless (already in C2). Decadence is luxurious moral decline (already in C2). Licentious is sexually unrestrained (this batch) — the adjective. A dated rota can still be exact. Atmosphere instead of a named post is a hole. Write the key-holder; leave the gossip.'],
    'A morally unrestrained person (disapproving). Everyday-close: immoral (already in C1). Close: wanton / decadence (already in C2). This batch: licentious (the adjective). Gossip ≠ a key.',
    ['rake', 'profligate', 'debauchee', 'roué']
  ),
  licentious: L(
    'Licentious means disregarding sexual or moral restraint (formal / disapproving): licentious behaviour, a licentious age. Immoral (already in the dictionary) is morally unacceptable; wanton (already in the dictionary) is reckless, often of cruelty not of appetite, and decadence (already in the dictionary) is decline with self-indulgence. This batch: a libertine is the person. Moral (already in the dictionary) is the everyday opposite flavour. Gala copy is not a named warden.',
    ['Licentious copy on the gala card is not a named fire warden.', 'Immoral is morally wrong (already in C1). Wanton is needless and reckless (already in C2). Decadence is luxurious decline (already in C2). A libertine is the unrestrained person (this batch). Moral is to do with right and wrong (already in B1) — the contrast. Taste at a sitting can be exact. Taste instead of a rota is a hole. Write the name; leave the card for the social.'],
    'Sexually unrestrained (formal). Everyday-close: immoral (already in C1). Close: wanton / decadence (already in C2). This batch: libertine (the person). Contrast: moral (already in B1). A gala ≠ a warden.',
    ['wanton', 'dissolute', 'lewd', 'unrestrained']
  ),
  magniloquent: L(
    'Magniloquent means using lofty, pompous language to impress (formal / disapproving): magniloquent speeches, a magniloquent minute. Grandiloquent and bombastic (already in the dictionary) are the close twins of inflated speech; bombast (already in the dictionary) is the noun of empty swell, and turgid (already in the dictionary) is pompously overwritten prose. Eloquent (already in the dictionary) is fluent and moving — skill, not swell. This batch: orotund is full and imposing of voice. A swell of adjectives is not a date.',
    ['Magniloquent minutes are not a finding; name the date.', 'Grandiloquent is pompously high-flown (already in C2). Bombastic is inflated language (already in C2). Bombast is the empty swell (already in C2). Turgid is pompously overwritten (already in C2). Eloquent is fluent and moving (already in C1) — skill, not pomp. Orotund is full and imposing of voice (this batch). A short true sentence can still be presentable. A swell that never states the date is branding. Write the finding; then the organ.'],
    'Pompously high-flown (speech). Close: grandiloquent / bombastic / bombast / turgid (already in C2). Contrast: eloquent (already in C1). This batch: orotund. Rhetoric ≠ a date.',
    ['grandiloquent', 'bombastic', 'pompous', 'high-flown']
  ),
  malediction: L(
    'A malediction is a curse; an utterance intended to bring harm (literary / formal): utter a malediction, a malediction upon the scheme. Anathema (already in the dictionary) is something you hate and reject, a detested thing rather than a spoken curse. Praise (already in the dictionary) and an encomium (already in the dictionary) are the opposite flavour. Invective (already in the dictionary) is abusive attack, of insult not of a hex. A corridor curse is not a numbered objection.',
    ['A malediction in the corridor is not a numbered objection.', 'Anathema is a detested thing (already in C2) — hate, not a spoken curse. Praise is approval (already in B2). An encomium is formal high praise (already in C2) — the contrast. Invective is abusive verbal attack (already in C2). A dated finding can still be calm. Heat in the stairwell is theatre. Write the objection; leave the hex.'],
    'A curse (literary / formal). Mix-up: anathema (a detested thing — already in C2). Contrast: praise / encomium (already in this dictionary). Close: invective (abuse — already in C2). A curse ≠ a minute.',
    ['curse', 'imprecation', 'execration', 'hex']
  ),
  malfeasance: L(
    'Malfeasance is wrongdoing, especially by a public official (formal / legal): official malfeasance, an act of malfeasance. Crime (already in the dictionary) is everyday illegality; corruption (already in the dictionary) is dishonesty in power, often bribes, and fraud (already in the dictionary) is deception for gain. Malpractice (already in the dictionary) is careless or dishonest practice by a professional — the close twin of a named duty-breach. A logo row is not a finding.',
    ['Malfeasance is a named breach, not a disagreement about the logo.', 'Crime is everyday illegality (already in A2). Corruption is dishonesty in power (already in B2). Fraud is deception for gain (already in B1). Malpractice is professional negligence or abuse of a role (already in C1). A dated clause can still be short. A crest that never names the breach is decoration. Write the finding; leave the brand film.'],
    'Official wrongdoing (formal). Everyday: crime (already in this dictionary). Close: corruption (already in B2); fraud (already in B1); malpractice (already in C1). A logo ≠ a breach.',
    ['wrongdoing', 'misconduct', 'corruption', 'malpractice']
  ),
  mawkish: L(
    'Mawkish means sickly or weakly sentimental, so as to be embarrassing: a mawkish appeal, mawkish about “family”. Maudlin (already in the dictionary) is tearfully sentimental, often after drink — the close twin. Doleful and elegiac (already in the dictionary) are mournful of look, and wistful for something past. This batch: mordant is biting sarcasm — the opposite flavour. A story-board is not an n.',
    ['A mawkish appeal to “our story” does not fill the n.', 'Maudlin is tearfully sentimental (already in C2). Doleful is mournful in look (already in C2). Elegiac is wistfully mournful (already in C2). Mordant is bitingly sarcastic (this batch) — the contrast. Atmosphere on the night can be exact. Atmosphere instead of a dated cell is branding. Write the number; then the violin.'],
    'Sickly sentimental. Close: maudlin (already in C2). Contrast: doleful / elegiac (mournful — already in C2). This batch: mordant (the bite). A story ≠ an n.',
    ['maudlin', 'soppy', 'sentimental', 'cloying']
  ),
  mendicant: L(
    'A mendicant is a beggar; also a member of a religious order that lives by begging (formal): a mendicant friar, mendicant appeals. To beg (already in the dictionary) is everyday desperate asking; poor (already in the dictionary) is having little money, and impecunious (already in the dictionary) is formal pennilessness. To beseech (already in the dictionary) is to ask earnestly, literary; to importune (already in the dictionary) is to press persistently. Corridor emails are not a record.',
    ['Mendicant emails in the corridor are not a record; put the ask in the minutes.', 'To beg is to ask desperately (already in B1). Poor is everyday without money (already in A2). Impecunious is having little money (already in C2). To beseech is to ask earnestly (already in C2). To importune is to press persistently (already in C2). A dated ask can still be sharp. Heat in the stairwell is theatre. Put the request on paper; then the pathos.'],
    'A beggar; living by asking (formal). Everyday: beg / poor (already in this dictionary). Close: impecunious (already in C2); beseech / importune (already in C2). A corridor ≠ a minute.',
    ['beggar', 'supplicant', 'pauper', 'almsman']
  ),
  minatory: L(
    'Minatory means expressing or conveying a threat (formal / literary): a minatory tone, minatory silence. A threat (already in the dictionary) is everyday possible harm; to threaten (already in the dictionary) is the verb, and a menace (already in the dictionary) is a person or thing likely to cause harm. Ominous (already in the dictionary) suggests that something bad is coming — atmosphere, not an uttered threat. Talk of “consequences” is not a dated line.',
    ['Minatory talk about “consequences” is not a dated embargo line.', 'A threat is possible harm (already in B1). To threaten is to say you will harm (already in B2). A menace is a harmful person or thing (already in B2). Ominous is warning of trouble (already in C1) — atmosphere, not a threat uttered. A dated embargo can still be calm. Heat that never states the date is theatre. Write the embargo; leave the growl.'],
    'Threatening (formal / literary). Everyday: threat / threaten / menace (already in this dictionary). Close: ominous (atmosphere — already in C1). Heat ≠ a date.',
    ['threatening', 'menacing', 'ominous', 'intimidating']
  ),
  modicum: L(
    'A modicum is a small, limited amount of something (often a modicum of): a modicum of sense, not a modicum of evidence. A bit (already in the dictionary) is everyday a small amount; little and tiny (already in the dictionary) are everyday smallness. A scintilla (already in the dictionary) is the slightest trace; paucity and dearth (already in the dictionary) are too little, and a shortage. This batch: plenitude is fullness — the opposite flavour. Missing dates are none, not a small gap.',
    ['There was not a modicum of a date in the ethics log.', 'A bit is a small amount (already in A2). Little is small / not much (already in A1). Tiny is very small (already in A2). A scintilla is the slightest trace (already in C2). Paucity is too little (already in C2). Dearth is a shortage (already in C2). Plenitude is abundance (this batch) — the contrast. A short log can still be complete. Empty cells are not a small gap; they are none. Write the dates or write that they are missing.'],
    'A small amount. Everyday: bit / little / tiny (already in this dictionary). Close: scintilla / paucity / dearth (already in C2). This batch: plenitude (the contrast). Tiny ≠ blank.',
    ['bit', 'iota', 'shred', 'scintilla']
  ),
  mordant: L(
    'Mordant means sharply sarcastic; biting in a witty way (formal): mordant wit, a mordant aside. Bitter and sharp (already in the dictionary) are everyday taste and edge; caustic (already in the dictionary) is bitterly sarcastic, also chemically burning — the close twin. Sardonic (already in the dictionary) is grimly mocking; pungent (already in the dictionary) is strongly sharp in smell, taste, or remark. This batch: mawkish is sickly sentimental — the opposite flavour. Foyer wit is not a sitting close.',
    ['Mordant wit in the foyer is not a sitting close.', 'Bitter is a sharp unpleasant taste (already in A2). Sharp is able to cut, or very clear (already in A2). Caustic is bitterly sarcastic (already in C2). Sardonic is grimly mocking (already in C2). Pungent is strongly sharp (already in C1). Mawkish is sickly sentimental (this batch) — the contrast. A dated finding can still be dry. A jest that never closes the item is theatre. Write the minute; then the barb.'],
    'Bitingly sarcastic (formal). Everyday: bitter / sharp (already in this dictionary). Close: caustic / sardonic (already in C2); pungent (already in C1). This batch: mawkish (the contrast). Wit ≠ a close.',
    ['caustic', 'biting', 'acerbic', 'sardonic']
  ),
  multifarious: L(
    'Multifarious means of many different kinds; having great variety (formal): multifarious duties, a multifarious organisation. Many (already in the dictionary) is everyday a large number; various (already in the dictionary) is several and of different kinds. Manifold (already in the dictionary) is many and of different kinds — the close twin — and a myriad (already in the dictionary) is a very large number. One named holder still has to sit under the variety.',
    ['Multifarious workstreams still need one named key-holder.', 'Many is a large number (already in A1). Various is several different kinds (already in A2). Manifold is many and various (already in C1). A myriad is a great many (already in B2). Variety on the right object can still be exact. Variety instead of a named post is a hole. Write the key-holder; then the organogram may branch.'],
    'Many and various (formal). Everyday: many / various (already in this dictionary). Close: manifold (already in C1); myriad (already in B2). Variety ≠ a key.',
    ['various', 'manifold', 'diverse', 'myriad']
  ),
  natty: L(
    'Natty means smart, neat, and fashionable, especially of clothes or appearance (informal): a natty suit, natty about dress. Smart (already in the dictionary) is everyday well dressed (British) or clever; neat (already in the dictionary) is tidy and in order. Flamboyant (already in the dictionary) is showy and colourful — louder display. Ostentatious (already in the dictionary) is showy on purpose. A lapel is not a date.',
    ['A natty lapel on the organogram still has to date the embargo.', 'Smart is well dressed, or clever (already in A2). Neat is tidy (already in A2). Flamboyant is showy and colourful (already in C1). Ostentatious is showy on purpose (already in C2). Finish of a jacket can still be exact. Finish instead of a dated line is theatre. Write the embargo; leave the tailoring.'],
    'Smart and trim (of dress). Everyday: smart / neat (already in this dictionary). Contrast: flamboyant (already in C1); ostentatious (already in C2). A lapel ≠ a date.',
    ['smart', 'dapper', 'spruce', 'trim']
  ),
  oleaginous: L(
    'Oleaginous means oily; unpleasantly ingratiating and insincere (formal / disapproving): oleaginous compliments, an oleaginous manner. Unctuous (already in the dictionary) is too polite or full of false praise — the close twin. Obsequious (already in the dictionary) is too eager to please power. This batch: mordant is biting — the opposite flavour. Compliments do not date a form.',
    ['Oleaginous compliments did not date the ethics form.', 'Unctuous is oily and insincere (already in C2). Obsequious is fawningly obedient (already in C2). Mordant is bitingly sarcastic (this batch) — the contrast. Courtesy after a sitting can be exact. Courtesy instead of a dated line is decoration. Write the date; leave the oil.'],
    'Oily; falsely flattering. Close: unctuous / obsequious (already in C2). This batch: mordant (the contrast). Flattery ≠ a date.',
    ['unctuous', 'oily', 'smarmy', 'ingratiating']
  ),
  orotund: L(
    'Orotund means full, imposing, and often pompously resonant, of a voice or style (formal): an orotund delivery, orotund praise. Loud (already in the dictionary) is everyday volume; eloquent and eloquence (already in the dictionary) are fluent persuasive speech — skill, not swell. Bombast (already in the dictionary) is empty inflated language. This batch: magniloquent is lofty and pompous of wording. World-leading noise still has to show the cell.',
    ['Orotund praise of “world-leading methods” still has to show the n.', 'Loud is everyday volume (already in A1). Eloquent is fluent and moving (already in C1). Eloquence is fluent persuasive speech (already in C2). Bombast is pompous empty language (already in C2). Magniloquent is pompously high-flown (this batch). A short true sentence can still be presentable. A swell of vowels that never states the n is branding. Write the number; then the organ.'],
    'Full and pompous (of voice/style). Everyday: loud (already in this dictionary). Close: eloquent / eloquence (already in this dictionary); bombast (already in C2). This batch: magniloquent. Resonance ≠ an n.',
    ['sonorous', 'resonant', 'bombastic', 'magniloquent']
  ),
  ostentation: L(
    'Ostentation is pretentious display intended to impress others: vulgar ostentation, a show of ostentation. Ostentatious (already in the dictionary) is the adjective. To show (already in the dictionary) is everyday letting someone see; a display (already in the dictionary) is a showing, and to flaunt (already in the dictionary) is to show off. Flamboyant and grandiose (already in the dictionary) are showy style, and over-ambitious hugeness. A gala is not a named warden.',
    ['Ostentation at the gala is not a named fire warden.', 'Ostentatious is the adjective (already in C2). To show is everyday (already in A1). A display is a showing (already in B1). To flaunt is to show off (already in C2). Flamboyant is showy and colourful (already in C1). Grandiose is showily huge (already in C2). Taste at a sitting can be exact. Taste instead of a rota is a hole. Write the name; leave the ice sculpture.'],
    'Showy display to impress. Adjective: ostentatious (already in C2). Everyday: show / display (already in this dictionary). Close: flaunt (already in C2); flamboyant / grandiose (already in this dictionary). A gala ≠ a warden.',
    ['display', 'showiness', 'flamboyance', 'pageantry']
  ),
  parlous: L(
    'Parlous means full of danger or uncertainty (literary / formal): a parlous state, parlous finances. Dangerous (already in the dictionary) is everyday likely to harm; hazardous (already in the dictionary) is dangerous of work or chemicals, and precarious (already in the dictionary) is unstable and easily lost — the close twin of uncertainty. Safe (already in the dictionary) is the everyday opposite. “We’ll see” is not night cover.',
    ['A parlous night rota still has to name the warden; “we’ll see” is not cover.', 'Dangerous is everyday likely to harm (already in A2). Hazardous is dangerous of work or chemicals (already in B1). Precarious is unstable; easily lost (already in C1). Safe is not in danger (already in A2) — the contrast. Caution after a dated rota can be exact. Delay instead of a named post is a hole. Write the name; then the risk line.'],
    'Dangerously uncertain (literary). Everyday: dangerous / safe (already in this dictionary). Close: hazardous (already in B1); precarious (already in C1). Delay ≠ a warden.',
    ['perilous', 'precarious', 'risky', 'hazardous']
  ),
  paroxysm: L(
    'A paroxysm is a sudden, violent outburst of feeling or activity; also a sudden attack of a symptom: a paroxysm of rage, paroxysms of coughing. An outburst (already in the dictionary) is everyday a sudden explosion of feeling — the close twin. Acrimony (already in the dictionary) is bitter feeling in a dispute, of mood not of a spasm, and a conflagration (already in the dictionary) is a huge fire or outbreak of conflict. Corridor heat is not a numbered objection.',
    ['A paroxysm of blame in the corridor is not a numbered objection.', 'An outburst is a sudden explosion of feeling (already in B2). Acrimony is bitterness in a quarrel (already in C2). A conflagration is a huge destructive fire, or an outbreak of conflict (already in C2). A dated finding can still be calm. A spasm that never numbers the risk is theatre. Write the objection; leave the fit.'],
    'A sudden violent outburst. Everyday: outburst (already in this dictionary). Close: acrimony (mood — already in C2); conflagration (outbreak — already in C2). A spasm ≠ a minute.',
    ['outburst', 'fit', 'spasm', 'convulsion']
  ),
  peregrination: L(
    'A peregrination is a long journey, especially on foot or from place to place (literary / humorous): a weary peregrination, peregrinations of a scholar. A journey (already in the dictionary) is everyday travel from A to B; to travel (already in the dictionary) is to go far, and a trip (already in the dictionary) is a short journey and back. An itinerary (already in the dictionary) is the planned timetable. This batch: peripatetic is travelling about for work — the adjective. Campus walking is not a spare key.',
    ['A peregrination of the campus is not a spare key for the clinic.', 'A journey is travel from A to B (already in A2). To travel is to go from place to place (already in A2). A trip is a short journey (already in A1). An itinerary is a travel plan (already in B2). Peripatetic is travelling about for work (this batch). A walk can still be exact as a site check. A stroll that never names the key-holder is theatre. Write the key; then the tour.'],
    'A long wandering journey (literary). Everyday: journey / travel / trip (already in this dictionary). Close: itinerary (already in B2). This batch: peripatetic. A tour ≠ a key.',
    ['journey', 'wandering', 'odyssey', 'trek']
  ),
  perfidy: L(
    'Perfidy is deceitful betrayal of trust (literary / formal): an act of perfidy, the perfidy of an ally. Perfidious (already in the dictionary) is the adjective. Betrayal (already in the dictionary) is everyday breaking of trust; to betray (already in the dictionary) is the verb, and duplicity (already in the dictionary) is deceitful double-dealing. Loyal and faithful (already in the dictionary) are the opposite flavour. Tidying a raw file is not licence to drop the n.',
    ['Perfidy with the raw file is not “tidying”; keep the n.', 'Perfidious is the adjective (already in C2). Betrayal is breaking someone’s trust (already in B1). To betray is to be disloyal (already in B2). Duplicity is deceitful double-dealing (already in C2). Loyal is faithful and supportive (already in B1). Faithful is loyal, or true as a copy (already in B2) — the contrast. A dated archive can still be short. A wipe that never keeps the cell is a hole. Keep the number; then the adjectives.'],
    'Treacherous betrayal (formal). Adjective: perfidious (already in C2). Everyday: betrayal / betray (already in this dictionary). Close: duplicity (already in C2). Contrast: loyal / faithful (already in this dictionary). Tidying ≠ deleting an n.',
    ['treachery', 'betrayal', 'duplicity', 'deceit']
  ),
  peripatetic: L(
    'Peripatetic means travelling from place to place, especially to work in more than one location (formal): a peripatetic teacher, peripatetic covering. Itinerant (already in the dictionary) is travelling from place to place to work — the close twin — and nomadic (already in the dictionary) is not settled. To wander (already in the dictionary) is to walk without a clear route; to travel (already in the dictionary) is everyday going far. This batch: a peregrination is a long wandering journey. The road does not waive the date.',
    ['A peripatetic marking team still has to file the embargo date from the road.', 'Itinerant is travelling for work (already in C2). Nomadic is wandering; not settled (already in C2). To wander is to walk without a plan (already in B2). To travel is everyday (already in A2). A peregrination is a long wandering journey (this batch). Cover on the right object can still be exact. Motion instead of a dated line is a hole. File the embargo; then the timetable.'],
    'Travelling about for work (formal). Everyday: travel / wander (already in this dictionary). Close: itinerant / nomadic (already in C2). This batch: peregrination. The road ≠ a date.',
    ['itinerant', 'travelling', 'roving', 'nomadic']
  ),
  peroration: L(
    'A peroration is the concluding part of a speech, especially a rhetorical summing-up (formal): a soaring peroration, the peroration of the address. A speech (already in the dictionary) is everyday a formal talk; a conclusion (already in the dictionary) is the end or final judgement, and an ending (already in the dictionary) is the last part. Eloquence (already in the dictionary) is fluent persuasive speech; a harangue (already in the dictionary) is a long scolding speech. Talk of “care” is not a named first-aider.',
    ['A peroration about “care” is not a named first-aider.', 'A speech is a formal talk (already in B1). A conclusion is the final judgement or ending (already in B1). An ending is the last part (already in A2). Eloquence is fluent persuasive speech (already in C2). A harangue is a long scolding speech (already in C2). Finish of a method can still be exact. Finish instead of a named post is theatre. Write the rota; then the cadence.'],
    'A speech’s rhetorical close (formal). Everyday: speech / conclusion / ending (already in this dictionary). Close: eloquence (already in C2); harangue (already in C2). A close ≠ a first-aider.',
    ['summing-up', 'close', 'epilogue', 'finale']
  ),
  piquant: L(
    'Piquant means pleasantly sharp in taste; also interestingly provocative or stimulating: a piquant sauce, a piquant observation. Taste (already in the dictionary) is everyday flavour; sharp and bitter (already in the dictionary) are cutting, and unpleasantly sharp. Pungent (already in the dictionary) is strongly sharp in smell, taste, or remark — stronger, not always pleasant. This batch: mawkish is cloying — the opposite flavour. A slogan is not a sample-size sentence.',
    ['A piquant slogan is not a sample-size sentence.', 'Taste is flavour, or to try food (already in A2). Sharp is able to cut, or very clear (already in A2). Bitter is unpleasantly sharp in taste (already in A2). Pungent is strongly sharp (already in C1). Mawkish is sickly sentimental (this batch) — the contrast. A short true sentence can still be lively. Spice that never states the n is branding. Write the number; then the relish.'],
    'Pleasantly sharp; stimulating. Everyday: taste / sharp / bitter (already in this dictionary). Close: pungent (already in C1). This batch: mawkish (cloying). A slogan ≠ an n.',
    ['tangy', 'zesty', 'pungent', 'stimulating']
  ),
  plangent: L(
    'Plangent means loud, deep, and mournfully resonant (literary): a plangent cry, plangent music. Loud (already in the dictionary) is everyday volume; sad (already in the dictionary) is everyday unhappy. Plaintive (already in the dictionary) is sad and mournful in tone; doleful, elegiac, and dolorous (already in the dictionary) are mournful of look, wistful for the past, and sorrowful. This batch: jocular is humorous — the opposite flavour. Foyer music is not a sitting close.',
    ['Plangent music in the foyer is not a sitting close.', 'Loud is everyday volume (already in A1). Sad is everyday unhappy (already in A1). Plaintive is sad and mournful in tone (already in C1). Doleful is mournful in look (already in C2). Elegiac is wistfully mournful (already in C2). Dolorous is sorrowful (already in C2). Jocular is humorous (this batch) — the contrast. Atmosphere on the night can be exact. Atmosphere instead of a close is theatre. Write the minute; then the dirge.'],
    'Loud and mournfully resonant (literary). Everyday: loud / sad (already in this dictionary). Close: plaintive (already in C1); doleful / elegiac / dolorous (already in C2). This batch: jocular (the contrast). Music ≠ a close.',
    ['mournful', 'resonant', 'plaintive', 'dolorous']
  ),
  platitudinous: L(
    'Platitudinous means full of dull, overused remarks; speaking in platitudes (formal / disapproving): a platitudinous speech, platitudinous advice. A platitude (already in the dictionary) is the tired empty remark — the noun. Trite, hackneyed, and banal (already in the dictionary) are stale from overuse; a cliché (already in the dictionary) is an overused phrase. “Try harder” is not a sampling frame.',
    ['A platitudinous “just try harder” is not a sampling frame.', 'A platitude is a tired empty remark (already in C2). Trite is stale from overuse (already in C2). Hackneyed is worn out by overuse (already in C2). Banal is dull and overused (already in C1). A cliché is an overused phrase (already in C1). A short true sentence can still be plain. A motto that never states the frame is branding. Write the method; leave the proverb.'],
    'Full of tired empty remarks. Noun: platitude (already in C2). Close: trite / hackneyed (already in C2); banal / cliché (already in C1). A motto ≠ a frame.',
    ['trite', 'banal', 'hackneyed', 'clichéd']
  ),
  plebeian: L(
    'Plebeian means of the common people; also coarse or lacking refinement (often disapproving): plebeian tastes, a plebeian row. Common (already in the dictionary) is everyday usual or shared; ordinary (already in the dictionary) is normal, not special, and people (already in the dictionary) are humans. Boorish (already in the dictionary) is coarse and ill-mannered — the close twin of coarseness. This batch: ostentation and a plutocrat are showy display and power-through-wealth — the opposite social flavour. Biscuits are not a flame-risk close-out.',
    ['A plebeian biscuit row is not a flame-risk close-out.', 'Common is usual or shared (already in A2). Ordinary is normal; not special (already in A2). People are humans (already in A1). Boorish is coarse and ill-mannered (already in C2). Ostentation is showy display (this batch). A plutocrat is powerful through wealth (this batch). Taste at a gala can be exact. Taste instead of a dated flame-risk line is noise. Name the owner of the door; leave the menu for the social.'],
    'Common; lacking refinement (disapproving). Everyday: common / ordinary / people (already in this dictionary). Close: boorish (already in C2). This batch: ostentation / plutocrat (the contrast). Biscuits ≠ a flame.',
    ['common', 'ordinary', 'unrefined', 'lowbrow']
  ),
  plenitude: L(
    'Plenitude is a full amount; abundance (formal / literary): a plenitude of evidence, the plenitude of the harvest. Plenty (already in the dictionary) is everyday more than enough; abundance (already in the dictionary) is a very large quantity, and copious (already in the dictionary) is a great deal. Paucity and dearth (already in the dictionary) are too little — the opposite flavour. This batch: a modicum is a small amount. Logos are not a consent clause.',
    ['Plenitude of logos is not a consent clause.', 'Plenty is more than enough (already in B2). Abundance is a plentiful quantity (already in C1). Copious is a great deal (already in C2). Paucity is too little (already in C2). Dearth is a shortage (already in C2) — the contrast. A modicum is a small amount (this batch). Layers on the right object can still be exact. Layers instead of the clause are theatre. Write the consent; then the harvest.'],
    'Fullness; abundance (formal). Everyday: plenty (already in this dictionary). Close: abundance (already in C1); copious (already in C2). Contrast: paucity / dearth (already in C2). This batch: modicum. Logos ≠ consent.',
    ['abundance', 'plenty', 'profusion', 'fullness']
  ),
  plutocrat: L(
    'A plutocrat is a person whose power comes from their wealth (often disapproving): a city plutocrat, plutocrats on the board. Rich (already in the dictionary) is everyday having a lot of money; wealthy (already in the dictionary) is having money and resources, a millionaire (already in the dictionary) has a million or more, and wealth (already in the dictionary) is the noun of riches. Impecunious (already in the dictionary) is formal pennilessness; this batch: a mendicant lives by asking. A ranking film is not an ethics date.',
    ['A plutocrat’s ranking film does not date the ethics form.', 'Rich is having a lot of money (already in A2). Wealthy is rich in resources (already in B2). A millionaire has a million pounds or more (already in B1). Wealth is riches (already in B1). Impecunious is having little money (already in C2). A mendicant lives by asking (this batch) — the contrast. A dated form can still be cheap to file. A donor film that never states the date is decoration. Write the date; then the credits.'],
    'A person powerful through wealth. Everyday: rich / wealth (already in this dictionary). Close: wealthy (already in B2); millionaire (already in B1). Contrast: impecunious (already in C2). This batch: mendicant. A film ≠ a date.',
    ['magnate', 'tycoon', 'oligarch', 'nabob']
  ),
  polymath: L(
    'A polymath is a person of wide learning across many subjects (formal): a Victorian polymath, polymath range. An expert (already in the dictionary) is everyday high knowledge in one subject; a scholar (already in the dictionary) studies in depth, erudite (already in the dictionary) is learned from study, and a genius (already in the dictionary) has exceptional ability. Versatile (already in the dictionary) is able to do many things — skill, not necessarily learning. Knowledge (already in the dictionary) is what you know. Range does not fill an empty cell.',
    ['A polymath on the panel still has to fill the n.', 'An expert knows a subject very well (already in B1). A scholar is a serious academic researcher (already in C1). Erudite is learned and well read (already in C2). A genius has exceptional ability (already in B2). Versatile is able to do many things (already in C1). Knowledge is what you know (already in B1). Breadth on the right object can still be exact. Breadth instead of a dated n is theatre. Write the number; then the range.'],
    'A person learned in many fields. Everyday: expert / knowledge (already in this dictionary). Close: scholar (already in C1); erudite (already in C2); genius (already in B2). Mix-up: versatile (many skills — already in C1). Range ≠ an n.',
    ['erudite', 'savant', 'learned', 'renaissance person']
  ),
}
