const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2I = {
  kowtow: L(
    'To kowtow is to show excessive obedience to power, originally a Chinese full bow: kowtow to a donor, refuse to kowtow. Bow and scrape is the everyday idiom; fawn and obsequious (already in the dictionary) are cousins. Kowtow as a noun is the bow itself. Do not kowtow a biscuit — it is not “pick up”.',
    ['She would not kowtow to a funder who wanted the inconvenient n deleted.', 'A historic kowtow was forehead to floor; office English is metaphorical over-deference.'],
    'Bow and scrape; over-obey. Everyday idiom: bow and scrape. Close: fawn / obsequious. Original: a full bow. Not “pick up”.',
    ['fawn']
  ),
  knell: L(
    'A knell is a funeral bell; the set phrase is a death knell for something ending: the death knell of the night lab. Bell is everyday; omen and harbinger (already in the dictionary) are cousins of the figurative sense. Knell is not the same as knoll (a small hill). Do not write knell for a cheerful doorbell.',
    ['The second failed inspection was the death knell of the unstaffed night lab.', 'A knoll is a hill; a knell is a bell for the dead, or the metaphor of an ending.'],
    'A funeral bell; usually death knell (an ending sign). Mix-up: knoll (hill). Everyday: bell. Cousin: omen. Not a doorbell.',
    []
  ),
  kitsch: L(
    'Kitsch is cheaply sentimental or fake-tasteful art and objects: a foyer of kitsch, kitsch souvenirs. Tacky is everyday; camp can enjoy the excess on purpose. Kitsch as an adjective (kitsch décor) is common. Do not call a spare, exact diagram kitsch.',
    ['Gilt swans and a motto in the foyer were kitsch that undercut the lab’s brand.', 'Camp winks at excess; kitsch is the excess without the wink, or with a worse one.'],
    'Tacky pseudo-art / cheap sentiment. Everyday: tacky. Cousin: camp (knowing excess). Can be noun or adjective. Not a clean diagram.',
    ['tacky']
  ),
  kudos: L(
    'Kudos is praise and honour for an achievement, uncountable: kudos to the night team, deserve kudos. Credit and praise are everyday; accolade is a close cousin. It is not “a kudos” and not a countable “kudo” in careful British exam English. Do not send kudos in place of a pay rise in a serious minute.',
    ['Kudos went to the technicians; the press note still named the dean.', 'Give someone credit is everyday; kudos is the uncountable noun of that praise. Not “a kudos”.'],
    'Uncountable praise/honour. Everyday: credit / praise. Close: accolade. Not “a kudos” / “kudos-es”. Not a substitute for pay.',
    ['praise']
  ),
  kafkaesque: L(
    'Kafkaesque means nightmarishly illogical and trapping, like Kafka’s bureaucracy: a Kafkaesque form, Kafkaesque delay. Absurd and nightmarish are everyday cousins; byzantine is complex bureaucracy without the dream-logic. Capital K is usual. Do not call a merely long queue Kafkaesque.',
    ['The portal was Kafkaesque: you needed a password to request the password reset.', 'Byzantine rules are tangled; Kafkaesque ones also feel dreamlike and inescapable. A slow till is not the word.'],
    'Absurdist, oppressive complexity (from Kafka). Capital K usual. Close: nightmarish / byzantine (tangled rules). Not an ordinary queue.',
    ['nightmarish']
  ),
  lachrymose: L(
    'Lachrymose means tearful, or causing tears (literary / formal): a lachrymose tribute, lachrymose about the past. Tearful and weepy are everyday; maudlin (this batch) is self-pitying sentiment. Lacrimal is the anatomy of tears. Do not call a precise incident report lachrymose because someone died — tone is the issue, not the fact.',
    ['A lachrymose page of “we were a family” sat beside the missing fire paragraph.', 'Tearful is everyday; lachrymose is bookish. Maudlin adds self-pity, often with drink.'],
    'Tearful / weepy (formal). Everyday: tearful. Close (worse): maudlin. Anatomy cousin: lacrimal. Not “a sad fact told plainly”.',
    ['tearful']
  ),
  lampoon: L(
    'To lampoon is to mock a person or institution in public satire: lampoon a policy, a lampoon (noun) of the board. Satirise is a close verb; ridicule (already in the dictionary) can be crueller and less artful. Parody imitates a style. Do not lampoon a junior’s first draft in a staff meeting.',
    ['The revue lampooned the “listening exercise” that produced no minute.', 'Ridicule can be a sneer; a lampoon is shaped satire. Parody copies a style to mock it.'],
    'Satirise in public. Noun: a lampoon. Close: satirise. Crueller cousin: ridicule. Style-copy: parody. Not punching down in a briefing.',
    ['satirise']
  ),
  largesse: L(
    'Largesse (also largess) is generous giving by the powerful: departmental largesse, depend on largesse. Generosity is everyday and can be between equals; patronage is the political cousin. The French-looking spelling largesse is common in British formal prose. Do not call splitting a sandwich largesse.',
    ['The dean’s largesse paid for cake, not for a second statistician.', 'Generosity can be mutual; largesse often flows down from a patron and can be withdrawn.'],
    'Lordly / patron-like generosity. Everyday: generosity. Political cousin: patronage. Spelling: largesse (or largess). Not splitting a snack.',
    ['generosity']
  ),
  lassitude: L(
    'Lassitude is tiredness and lack of energy (formal / literary): a mood of lassitude, summer lassitude. Fatigue and tiredness are everyday; lethargy and torpor (already in the dictionary) are close. Latitude is distance from the equator — a lookalike. Do not diagnose a quiet, working room as lassitude.',
    ['August lassitude emptied the stacks until someone fixed the air-con.', 'Torpor is dull inactivity; lassitude is weariness. Latitude is geography. Laziness is a moralising everyday word.'],
    'Weariness (formal). Everyday: tiredness / fatigue. Close: lethargy / torpor. Mix-up: latitude (geography). Not a moral judgement.',
    ['fatigue']
  ),
  laudable: L(
    'Laudable means deserving praise, even if incomplete: a laudable aim, laudable honesty. Praiseworthy is the plain twin; laud (verb) and laudatory are the family. Audible is hearable — a lookalike. Do not call a finished, excellent paper merely laudable if you mean outstanding; laudable often hedges “good try / good aim”.',
    ['Open data is a laudable aim; without a budget line it stays a slogan.', 'Laudatory remarks praise; audible remarks can be heard. Laudable often praises the intention more than the result.'],
    'Praiseworthy (often of aims). Family: laud / laudatory. Plain: praiseworthy. Mix-up: audible. Can hedge “good intention, unfinished”.',
    ['praiseworthy']
  ),
  levity: L(
    'Levity is humour or lightness where seriousness is expected: a moment of levity, unseemly levity. Humour is everyday and wider; frivolity is more dismissive. Leverage is influence/gearing — a lookalike. Levitate is float. Do not accuse a precise, dry joke that actually helped a briefing of levity as if it were a crime.',
    ['A little levity steadied the fire-drill briefing; a gag in the condolence minute did not.', 'Frivolity is emptier; levity is lightness in a serious setting. Mix-up: leverage (influence).'],
    'Ill-timed or risky lightness. Everyday: humour. More dismissive: frivolity. Mix-up: leverage. Not every joke in a hard meeting.',
    ['humour']
  ),
  lionise: L(
    'To lionise (US lionize) is to treat someone as a celebrity: lionise a researcher, lionised by the press. Celebrate is everyday; idolise is stronger worship. A lion is the animal; the metaphor is society’s “lion” of the season. Do not lionise a first paper that has not been replicated.',
    ['The weekend supplements lionised a first author and skipped the failed replication.', 'Idolise is worship; lionise is fashionable fame. British spelling: lionise. The animal is not the exam point.'],
    'Treat as a star (British -ise). US: lionize. Everyday: celebrate. Stronger: idolise. Replication still required.',
    ['celebrate']
  ),
  litigious: L(
    'Litigious means too ready to sue, or of a culture dominated by lawsuits: a litigious clause, a litigious climate. Litigation is the noun of going to court; lawsuit (already in the dictionary) is everyday. Legitimate is lawful — a lookalike. Do not call a careful contract litigious; the people who rush to sue are.',
    ['A litigious sentence in the visiting-speaker contract emptied the diary.', 'Litigation is the process; litigious describes the itchy trigger-finger. Legitimate means lawful, not sue-happy.'],
    'Fond of lawsuits. Noun: litigation. Everyday: lawsuit. Mix-up: legitimate (lawful). A protective clause is not automatically litigious.',
    []
  ),
  lurid: L(
    'Lurid means shockingly vivid, especially of sensational or unpleasant colour and detail: lurid headlines, a lurid glow. Graphic can be vividly explicit; sensational is a close cousin. Lure is attract — a lookalike. Do not call a necessary clinical photograph lurid if it is simply clear.',
    ['Lurid splash headlines outran a modest, ugly little table.', 'Graphic detail can be necessary; lurid detail is painted for shock. Mix-up: lure (attract).'],
    'Gaudy; sensationally grim. Close: sensational / graphic (not always pejorative). Mix-up: lure. Necessary clinical clarity is not lurid.',
    ['sensational']
  ),
  machiavellian: L(
    'Machiavellian means cunning and unscrupulous in pursuit of power, after Niccolò Machiavelli: a Machiavellian leak, Machiavellian tactics. Cunning is everyday; unscrupulous is the moral charge. Capital M is usual. The historical book is more nuanced than the adjective. Do not call a clear, hard negotiation Machiavellian without deceit.',
    ['A Machiavellian timing of the leak framed a rival and saved the real author.', 'Cunning can be chess; Machiavellian implies power-play with few scruples. Capital M is the safe exam form.'],
    'Politically cunning and ruthless (usually capital M). Everyday: cunning. Moral: unscrupulous. Not every tough bargain. History ≠ the adjective.',
    ['cunning']
  ),
  maladroit: L(
    'Maladroit means clumsy and tactless; the opposite of adroit (already in the dictionary): a maladroit joke, maladroit handling. Clumsy and tactless are everyday; awkward is milder. Mal- is the “bad” prefix. Do not call a carefully blunt safety warning maladroit.',
    ['A maladroit aside in the equality briefing ended the item and started a complaint.', 'Adroit is deft; maladroit is the stumble, often social. Clumsy is the body; maladroit is often the room.'],
    'Clumsy / tactless (formal). Opposite: adroit. Everyday: clumsy, tactless. Prefix mal- (bad). A clear warning is not maladroit.',
    ['clumsy']
  ),
  malinger: L(
    'To malinger is to fake illness to avoid work (formal): accused of malingering, malinger at home. Skive is informal British; shirk is avoid duty more widely. Malingering is the noun. Linger is stay — a lookalike. Do not accuse a documented illness of malingering.',
    ['The badge log suggested malingering: a lunchtime match, not a clinic.', 'Skive is everyday BrE; malinger is the formal “fake sick”. Linger is remain. HR needs evidence, not a vibe.'],
    'Fake illness to dodge work (formal). Informal BrE: skive. Wider: shirk. Noun: malingering. Mix-up: linger. Do not weaponise it.',
    ['skive']
  ),
  martinet: L(
    'A martinet is a rigid disciplinarian, after a French drillmaster: a martinet about punctuality. Stickler is a close cousin (often of detail); tyrant is harsher. Martin is a name — not the point. Do not call a fair invigilator a martinet for enforcing the published rule.',
    ['A martinet on referencing saved the journal; a martinet on who may laugh did not.', 'A stickler loves a rule; a martinet loves obedience. Tyrant adds cruelty. Enforcing a posted exam rule is not the insult.'],
    'A rigid disciplinarian. Close: stickler (detail). Harsher: tyrant. Historical: French drill. Fair enforcement ≠ martinet.',
    ['stickler']
  ),
  maudlin: L(
    'Maudlin means weakly, self-pityingly sentimental, often after drink: a maudlin speech, maudlin tears. Sentimental is milder; lachrymose (this batch) is tearful without the self-pity. The word comes from Mary Magdalene in art. Do not call a controlled elegy maudlin.',
    ['A maudlin toast about “family” ignored three unpaid invoices on the table.', 'Lachrymose is weepy; maudlin is soggy self-pity. Sentimental can still be decent. Drink is a traditional collocation, not a requirement.'],
    'Tearfully self-pitying; soppy. Milder: sentimental. Tearful cousin: lachrymose. Often post-drink. Not a restrained lament.',
    ['sentimental']
  ),
  mendacious: L(
    'Mendacious means lying, of people or statements (formal): a mendacious claim, a mendacious brief. False and untrue are everyday; lying is blunter. Mendacity is the noun. Mend is repair — a lookalike. Do not call an honest mistake mendacious.',
    ['The mendacious note said “full consultation” after a two-line all-staff mail.', 'A false figure can be a slip; a mendacious figure was offered as true. Noun: mendacity. Mix-up: mend (repair).'],
    'Lying (formal). Noun: mendacity. Everyday: false / untrue. Mix-up: mend. An error is not automatically a lie.',
    ['untrue']
  ),
  meretricious: L(
    'Meretricious means showy and worthless, attractive on the surface (formal): meretricious glitter, meretricious rhetoric. Cheap and flashy are everyday; meretricious is the bookish charge. Merit is worth — a cruel lookalike. Historically it related to prostitution; modern exam use is “fake glitter”. Do not call a plain, solid table meretricious.',
    ['Meretricious dashboards sparkled; the join behind them was still one spreadsheet.', 'Merit is worth; meretricious is specious shine. Flashy is everyday. A dull, true graph is the opposite aesthetic.'],
    'Showy and worthless (formal). Everyday: flashy / cheap. Mix-up: merit (worth). Modern sense: fake glitter, not a history essay unless asked.',
    ['flashy']
  ),
  mettle: L(
    'Mettle is courage and staying power under a test: on one’s mettle, prove your mettle. Metal is the material — the famous homophone. Courage and spirit are everyday; backbone is informal. Do not write mettle for a metal shelf.',
    ['The storm put the night shift on their mettle; the wall slogan did not.', 'Show your mettle is the set phrase. Metal is iron and steel. Courage is the everyday cousin.'],
    'Spirit under test. Phrase: on one’s mettle / prove one’s mettle. Homophone: metal. Everyday: courage. Not a shelf.',
    ['courage']
  ),
  mien: L(
    'Mien is a person’s bearing or look as a sign of mood (literary): a calm mien, a severe mien. Manner and expression are everyday; demeanour (already in the dictionary) is the closest cousin. Mean is the lookalike verb/adjective. Mine is a pronoun or a pit. Do not use mien in a methods section.',
    ['His calm mien did not match the deleted shared folder.', 'Demeanour is the exam-friendly cousin; mien is more literary. Mix-ups: mean / mine. Keep it out of “procedure”.'],
    'Bearing; the look of a person (literary). Close: demeanour. Everyday: manner / expression. Mix-ups: mean, mine. Not methods prose.',
    ['demeanour']
  ),
  milieu: L(
    'A milieu is the social or professional environment someone inhabits (formal): a literary milieu, the consultancy milieu. Setting and environment are everyday; milieu is French and slightly sociological. Medium is a means or a size — a lookalike. Do not call a single room a milieu.',
    ['She left that consultancy milieu for a quieter public lab and worse coffee.', 'Environment is the everyday twin; a milieu is the set of people and codes. Mix-up: medium (means / size).'],
    'A social/professional setting (formal). Everyday: environment / setting. Mix-up: medium. Not one room or one lunch.',
    ['environment']
  ),
  misanthrope: L(
    'A misanthrope dislikes and distrusts people: a cheerful misanthrope (often ironic), misanthropic (adjective). Cynic doubts motives; hermit withdraws. Philanthropist is the etymological opposite. Do not call a shy introvert a misanthrope.',
    ['A misanthrope can still mark fairly; contempt in the margins is a different vice.', 'Misanthropic is the adjective. A hermit avoids company; a misanthrope resents humankind. Shy ≠ hostile.'],
    'A people-hater. Adjective: misanthropic. Contrast: hermit (withdraws); cynic (doubts motives). Opposite family: philanthropist. Not mere shyness.',
    []
  ),
  mollify: L(
    'To mollify is to make someone less angry (formal): mollify critics, a gesture meant to mollify. Calm and soothe are everyday; appease can mean buy off. Molten is melted metal — a lookalike. Do not mollify a dataset.',
    ['A partial refund mollified the cohort; the broken timetable stayed broken.', 'Soothe a child; mollify an angry committee. Appease can smell of surrender. Mix-up: molten (melted).'],
    'Soften someone’s anger (formal). Everyday: calm / soothe. Darker cousin: appease. Mix-up: molten. You mollify people, not spreadsheets.',
    ['soothe']
  ),
  moribund: L(
    'Moribund means dying, or of an institution almost finished (formal): a moribund custom, a moribund list. Dying is everyday; defunct (already in the dictionary) is already dead. Morbid is unhealthy interest in death — a lookalike. Do not call a quiet but working archive moribund.',
    ['The moribund mailing list had not posted since the merger, which was the evidence.', 'Defunct is over; moribund is almost over. Morbid curiosity is a different adjective. A silent, used archive is not moribund.'],
    'Dying; almost defunct (formal). Everyday: dying. Contrast: defunct (already dead). Mix-up: morbid. Needs evidence of stoppage, not quiet.',
    ['dying']
  ),
  morose: L(
    'Morose means sullen, unhappy, and silent: a morose silence, morose about the vote. Miserable is everyday and wider; sullen is a close cousin. Morose is mood, not a clinical diagnosis. Do not call a careful, quiet professional morose.',
    ['A morose hush after the vote was not minuted as agreement.', 'Sullen is close; miserable can still talk. A quiet marker is not morose. Keep it for bad-tempered gloom.'],
    'Sullenly gloomy. Close: sullen. Everyday: miserable (wider). Not professional quiet, and not a diagnosis.',
    ['sullen']
  ),
  zealous: L(
    'Zealous means showing great energy and eagerness, sometimes too much: a zealous intern, zealous in defence of. Enthusiastic is everyday and safer; zealot is the person (often fanatical). Jealous is envious — a classic mix-up. Zeal is the noun. Do not write zealous for “did the job”.',
    ['A zealous cc to the whole university turned a draft embargo into news.', 'Jealous is envy; zealous is fervour. A zealot is the noun at the fanatical end. Enthusiastic is the safer everyday twin.'],
    'Fervently eager (can overdo it). Noun: zeal. Person (strong): zealot. Mix-up: jealous. Everyday: enthusiastic. Not “competent”.',
    ['enthusiastic']
  ),
  zenith: L(
    'A zenith is the highest point of success, power, or the sky: at the zenith of, the sun’s zenith. Peak and height are everyday; apex and pinnacle are cousins. Nadir is the opposite (lowest point). Do not call a first draft a zenith.',
    ['At the zenith of the brand they still employed one statistician, which was the tell.', 'Peak is everyday; zenith is literary/formal. Nadir is the bottom. Astronomy: the point overhead.'],
    'The highest point (success or sky). Everyday: peak. Opposite: nadir. Cousins: apex / pinnacle. Not a first attempt.',
    ['peak']
  ),
}
