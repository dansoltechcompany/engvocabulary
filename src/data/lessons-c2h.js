const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2H = {
  tacit: L(
    'Tacit means understood without being said: tacit agreement, tacit approval. Implicit (already in the dictionary) is a close cousin; unspoken is everyday. Taciturn (already in the dictionary) is a quiet person — related root, different job. Explicit is the opposite. Do not call a signed contract tacit.',
    ['There was tacit agreement to skip the leaked draft in the open session.', 'Tacit consent is inferred; a signature is not tacit, it is recorded.'],
    'Unspoken but understood. Close: implicit. Everyday: unspoken. Mix-up: taciturn (a quiet person). Opposite: explicit.',
    ['unspoken']
  ),
  tenable: L(
    'Tenable means able to be defended, or (of a post) able to be held: a tenable claim, a three-year tenable fellowship. Untenable (this batch) is the opposite. Defensible is the plain cousin. Tenure is holding a post; tenacity (this batch) is not giving up. Do not call a pleasant office tenable.',
    ['The hypothesis was tenable until the second lab failed to replicate it.', 'A post tenable for two years is HR English; a tenable argument is logic.'],
    'Defensible; of a job, able to be held. Opposite: untenable. Mix-up: tenacity (grit); tenure (holding a post). Plain: defensible.',
    ['defensible']
  ),
  tenacity: L(
    'Tenacity is stubborn determination: the tenacity to finish, grip with tenacity. Tenacious is the adjective. Persistence is a close cousin; stubbornness can be stupid. Tenuous (already in the dictionary) is weak and thin — a cruel lookalike. Do not call a lucky sprint tenacity.',
    ['Tenacity, not a gifted first page, got the index done in August.', 'A tenacious stain is the adjective’s literal cousin; of people, it is grit.'],
    'Refusal to let go. Adjective: tenacious. Close: persistence. Mix-up: tenuous (thin, weak). Not a short burst of luck.',
    ['persistence']
  ),
  tendentious: L(
    'Tendentious means pushing a cause instead of being even-handed (formal): a tendentious summary, tendentious minutes. Biased is everyday; partisan is a close cousin. Contentious (see contention in C1) means likely to cause argument, not necessarily one-sided. Tendency is a leaning — related root, milder. Do not call a balanced literature review tendentious.',
    ['The press note was tendentious: it quoted one critic and three allies.', 'A contentious clause causes rows; a tendentious one already picked a side.'],
    'Partisan; not even-handed (formal). Everyday: biased. Mix-up: contentious (quarrel-prone). Noun root: tendency (milder).',
    ['partisan']
  ),
  terse: L(
    'Terse means very brief, often impatient: a terse reply, terse minutes. Laconic (already in the dictionary) is brief by habit, not necessarily rude; short is everyday. Curt is a close cousin of unfriendly brevity. Do not call a carefully short abstract terse unless the tone snaps.',
    ['His terse “Noted.” closed a thread that still needed a date.', 'Laconic style can be elegant; terse often lands as a slap.'],
    'Abruptly brief. Close: curt. Habitual brevity: laconic. Everyday: short. Not a tight but polite abstract.',
    ['curt']
  ),
  thwart: L(
    'To thwart is to block a plan (formal / literary): thwart an attempt, a hope thwarted. Prevent and stop are everyday; foil is a close literary cousin. Through is a preposition — same first letters to tired eyes, different word. Do not thwart a sandwich.',
    ['Fog thwarted the dawn shoot; the indoor backup saved the day.', 'A court order can thwart a publication; a mood cannot “thwart” a biscuit.'],
    'Block a plan (formal). Everyday: prevent / stop. Literary cousin: foil. Mix-up: through (preposition).',
    ['prevent']
  ),
  tirade: L(
    'A tirade is a long, angry blast of criticism: a tirade against, launch into a tirade. Harangue (already in the dictionary) is a scolding lecture; rant is everyday. Speech is neutral. Do not call a two-line complaint a tirade.',
    ['The item on parking became a tirade and never reached a vote.', 'A harangue lectures; a tirade mainly rages. Length plus anger is the test.'],
    'A long angry speech of criticism. Everyday: rant. Close: harangue (scolding lecture). Not a brief gripe.',
    ['rant']
  ),
  torpor: L(
    'Torpor is dull sluggishness of body or mind (formal): shake off the torpor, summer torpor. Lethargy is a close cousin; laziness is moralising. Torpid is the adjective. Stupor is nearer to stunned unconsciousness. Do not diagnose a quiet, working room as torpor.',
    ['August torpor emptied the stacks until the air-con was fixed.', 'Hibernating animals enter torpor, which is biology; office torpor is metaphor.'],
    'Dull inactivity (formal). Adjective: torpid. Close: lethargy. Stronger daze: stupor. Everyday moralising: laziness.',
    ['lethargy']
  ),
  tortuous: L(
    'Tortuous means twisting, or of an argument over-complicated: a tortuous path, a tortuous explanation. Torturous means painfully cruel — the mix-up examiners love. Winding is everyday for roads; convoluted is a close cousin for prose. Do not write tortuous for “very hard work” if you mean painful (torturous) or merely long.',
    ['A tortuous footnote trail hid the missing n, which is complexity, not pain.', 'A torturous wait is suffering; a tortuous sentence is too many bends.'],
    'Twisting / over-complicated. Mix-up: torturous (painful). Everyday roads: winding. Prose cousin: convoluted.',
    ['convoluted']
  ),
  transgression: L(
    'A transgression is a crossing of a moral or legal line (formal): a transgression of the code, minor transgressions. Transgress is the verb. Offence is everyday; sin is religious. Aggression is hostility — different word. Do not call a spelling slip a transgression unless you are being comic.',
    ['The panel called the leak a transgression of confidence, not a prank.', 'Literary “transgressive” art plays with rules; a workplace transgression still has minutes.'],
    'A breaking of a moral/legal rule (formal). Verb: transgress. Everyday: offence. Mix-up: aggression. Not a typo.',
    ['offence']
  ),
  transient: L(
    'Transient means lasting only a short time: a transient spike, transient workers (short-stay). Ephemeral (already in the dictionary) is a literary cousin; temporary is everyday. Transitory is a close synonym. Transition is the process of changing. Do not call a decade-long policy transient.',
    ['The search spike was transient; by Friday the graph was flat.', 'Transient staff are short-stay; a transient error in physics is a blip, not a culture.'],
    'Short-lived. Everyday: temporary. Literary cousin: ephemeral. Close: transitory. Mix-up: transition (a change process).',
    ['temporary']
  ),
  travesty: L(
    'A travesty is a hollow, mocking imitation of the real thing: a travesty of justice, a travesty of consultation. Mockery and sham are everyday cousins; parody is usually comic on purpose. Tragedy is a disaster or a dramatic genre — a disastrous mix-up. Do not call a genuine, clumsy first attempt a travesty.',
    ['A two-minute “consultation” was a travesty of the process in the handbook.', 'A tragedy kills; a travesty cheapens. Keep the spellings apart in exam prose.'],
    'A false, betraying imitation. Everyday: sham / mockery. Mix-up: tragedy (disaster / play). Comic cousin: parody.',
    ['sham']
  ),
  trepidation: L(
    'Trepidation is nervous dread of what is coming (formal): with trepidation, a certain trepidation. Fear is everyday; anxiety can be ongoing without a single event. Trepid is rare; intrepid is fearless — related root. Do not use trepidation for boredom.',
    ['She opened the brown envelope with trepidation and a spare pen.', 'Trepidation looks forward; regret looks back. Intrepid is the brave opposite family.'],
    'Nervous dread beforehand (formal). Everyday: fear. Opposite family: intrepid. Not boredom or post-hoc regret.',
    ['fear']
  ),
  trite: L(
    'Trite means stale from overuse: a trite slogan, trite wisdom. Hackneyed (already in the dictionary) is a close cousin; clichéd is everyday. Banal is empty as well as familiar. Do not call a precise technical term trite just because experts use it often.',
    ['“At the end of the day” is a trite closer for a serious incident report.', 'A proverb can be true and still trite in a methods paragraph.'],
    'Stale from overuse. Close: hackneyed / clichéd. Empty cousin: banal. Not “standard technical wording”.',
    ['hackneyed']
  ),
  tumultuous: L(
    'Tumultuous means noisy, chaotic, or violently changing: a tumultuous year, tumultuous applause. Tumult is the noun. Turbulent is a close cousin (also of fluids); rowdy is everyday. Tremendous is huge — a lookalike. Do not call a quiet landslide vote tumultuous unless the street was.',
    ['A tumultuous term of strikes left every room double-booked.', 'Tumultuous applause is loud praise; a turbulent market is the economics cousin.'],
    'Noisy, chaotic, upheaved. Noun: tumult. Close: turbulent. Everyday: rowdy. Mix-up: tremendous (huge).',
    ['turbulent']
  ),
  ulterior: L(
    'Ulterior, almost always of motive, means hidden behind the stated one: an ulterior motive. Hidden and secret are everyday; ultimate (see ultimately in the dictionary) is last or most important — a classic mix-up. Ulterior is not a fancy “further”. Do not write ulterior goal if you mean final goal (ultimate).',
    ['The free webinar had an ulterior motive: a sales list, not a public service.', 'An ultimate aim is the last one you want; an ulterior motive is the one you did not admit.'],
    'Hidden (almost always ulterior motive). Mix-up: ultimate (final / most important). Everyday: hidden. Not “further”.',
    []
  ),
  umbrage: L(
    'Umbrage is offence taken (formal): take umbrage at a remark. Offence is everyday; umbrage is slightly old-fashioned and often wry. Umbrella is rainwear — comic lookalike only. Shade is a literal cousin of the Latin. Do not take umbrage at a missing comma unless you are joking.',
    ['He took umbrage at the footnote and missed the main finding.', 'Take umbrage at + remark. Everyday: take offence. Mix-up: umbrella. Tone: often a little comic in modern prose.'],
    'take umbrage at (formal offence). Everyday: take offence. Lookalike: umbrella. Easy to overuse; keep it for real affronts or irony.',
    ['offence']
  ),
  unsavoury: L(
    'Unsavoury (US unsavory) means unpleasant, morally or physically: an unsavoury clause, unsavoury company. Unpleasant is everyday; shady is informal for moral doubt. Savoury is salty-spicy food or morally decent — the opposite pole. British spelling keeps -our. Do not call a dry biscuit unsavoury unless it is actually nasty.',
    ['An unsavoury subclause buried the refund in a footnote.', 'Unsavoury characters in a novel are morally off; unsavoury smells are the literal sense.'],
    'Unpleasant (moral or physical). British: unsavoury. US: unsavory. Everyday: unpleasant. Food opposite: savoury.',
    ['unpleasant']
  ),
  untenable: L(
    'Untenable means impossible to defend or to carry on with: an untenable claim, an untenable position. Tenable (this batch) is the positive. Indefensible is a close cousin; unsustainable is about resources or pace. Do not call a tight budget untenable if it is merely uncomfortable.',
    ['Once the emails were public, the official line was untenable.', 'An untenable timetable cannot be staffed; an unpopular one still runs.'],
    'Cannot be defended or continued. Opposite: tenable. Close: indefensible. Resources cousin: unsustainable. Not merely unpopular.',
    ['indefensible']
  ),
  unwitting: L(
    'Unwitting means not aware of what you are doing or causing: an unwitting accomplice, unwittingly (adverb). Unwilling is not wanting to; witty is funny — both mix-ups. Accidental is everyday. Do not call a planned leak unwitting.',
    ['An unwitting click sent the embargoed PDF to the whole list.', 'Unwilling staff refused; unwitting staff had already pressed send.'],
    'Unaware; not intending the effect. Adverb: unwittingly. Mix-up: unwilling (refusing); witty (funny). Everyday: accidental.',
    ['unaware']
  ),
  usurp: L(
    'To usurp is to seize a role or power without right: usurp the chair, usurp authority. Seize and take over are everyday; depose is throw a ruler out. Usurpation is the noun. User is a lookalike only at a glance. Do not usurp a biscuit from a plate in this register — that is take.',
    ['A working party must not usurp the elected board’s vote.', 'History books usurp thrones; offices usurp agendas. Both need the “no right” sense.'],
    'Seize a role/power without right. Noun: usurpation. Everyday: take over. Mix-up: user. Snacks: take, not usurp.',
    []
  ),
  vacuous: L(
    'Vacuous means empty of thought: a vacuous slogan, a vacuous smile. Empty-headed is everyday; inane is a close cousin. Vacuum is the physics/empty-space word; verbose (already in the dictionary) is wordy — opposite problem. Do not call a silent expert vacuous.',
    ['“Excellence for all” was vacuous without a staff line or an hour.', 'A vacuum is empty space; a vacuous remark is empty of mind.'],
    'Empty-headed; without thought. Close: inane. Mix-up: vacuum (empty space); verbose (too many words). Not quiet expertise.',
    ['inane']
  ),
  vehement: L(
    'Vehement means forcefully passionate, often angry: vehement denial, vehemently opposed. Strong is everyday; violent is physical harm — a serious mix-up. Vehemence is the noun. Do not call a mild preference vehement.',
    ['She was vehement that no date had been agreed, and the inbox backed her.', 'A vehement protest is intense speech; a violent one is a different, legal problem.'],
    'Forcefully passionate. Adverb: vehemently. Noun: vehemence. Mix-up: violent (physical). Everyday: strong. Not a mild dislike.',
    ['passionate']
  ),
  venerate: L(
    'To venerate is to respect almost as if sacred (formal): venerate a founder, venerated relic. Revere is a close cousin; respect is everyday. Venerable is the adjective (worthy of respect, or just old). Venom is poison — not a mix-up to attempt in a joke. Do not venerate a sandwich.',
    ['The department venerates the 1979 syllabus, missing pages and all.', 'A venerable chair is old and respected; to venerate is the verb of that awe.'],
    'Revere; treat as almost sacred (formal). Close: revere. Everyday: respect. Adjective: venerable. Not lunch.',
    ['revere']
  ),
  vicarious: L(
    'Vicarious means felt through someone else’s experience: vicarious pleasure, vicarious embarrassment. Indirect is everyday; vicissitude (already in the dictionary) is a change of fortune — related look, different meaning. Vicious is cruel. Do not call a first-hand injury vicarious.',
    ['Travel shows offer vicarious adventure from a wet Tuesday sofa.', 'Vicarious embarrassment is catching someone else’s shame; vicissitudes are life’s ups and downs.'],
    'Felt through another’s experience. Mix-up: vicissitude (ups and downs); vicious (cruel). Everyday: indirect. Not first-hand.',
    []
  ),
  vilify: L(
    'To vilify is to attack someone with harsh, unfair words (formal): vilify a union, a campaign to vilify. Smear and slander are cousins (slander has a legal life); criticise can be fair. Vilification is the noun. Villain is the bad character. Do not vilify a method if you only have a disagreement.',
    ['The column vilified staff without quoting one of them.', 'Fair critique names a clause; vilification names a monster.'],
    'Smear with harsh, unfair words (formal). Noun: vilification. Fair cousin: criticise. Legal-ish: slander. Mix-up: villain.',
    ['smear']
  ),
  vindicate: L(
    'To vindicate is to show that someone or a claim was right after doubt: vindicate a decision, feel vindicated. Justify is give reasons (can be beforehand); acquit is a court finding. Vindictive means spiteful — a vicious mix-up. Indicate is point to. Do not vindicate a plan that has not been tested.',
    ['The retest vindicated the original markers and annoyed the blog.', 'A vindictive email is revenge; a vindicated researcher was proved right.'],
    'Prove right after doubt. Mix-up: vindictive (spiteful); indicate (point to). Court cousin: acquit. Beforehand reasons: justify.',
    []
  ),
  volition: L(
    'Volition is the power to choose (formal): of one’s own volition, without volition. Will is everyday; volunteer (already in the dictionary) is offer help — related root. Voluble is talkative. Do not write volition for a reflex kick.',
    ['She resigned of her own volition; the alternative story was a quiet threat.', 'Of one’s own volition is the set phrase examiners want, not “with volition” as a stylish “willingly” every time.'],
    'Will; the power to choose. Set phrase: of one’s own volition. Mix-up: volunteer (offer help); voluble (talkative). Everyday: will.',
    ['will']
  ),
  wistful: L(
    'Wistful is sadly thoughtful, longing for what is past or out of reach: a wistful look, wistful about childhood. Wishful (wishful thinking) is hoping against the evidence — the mix-up. Nostalgic is a close cousin; sad is everyday and wider. Do not call furious regret wistful.',
    ['He gave the old lab a wistful look and then locked it without a speech.', 'Wishful thinking denies the numbers; a wistful sentence admits they will not come back.'],
    'Sadly longing (often for the past). Mix-up: wishful thinking (hope vs facts). Close: nostalgic. Everyday: sad. Not rage.',
    ['nostalgic']
  ),
  yearn: L(
    'To yearn is to want something, often out of reach, with feeling: yearn for peace, yearn to leave. Long for is the everyday cousin; want is plainer. Yarn is a story or wool — comic mix-up. Yearning is the noun. Do not yearn for a biscuit in a lab report.',
    ['The letters yearn for a quieter post, not a louder title.', 'Yearn for + noun; yearn to + infinitive. Everyday: long for. Mix-up: yarn (tale / wool).'],
    'Long for, often in vain. yearn for / yearn to. Everyday: long for. Noun: yearning. Mix-up: yarn. Not a casual snack wish in formal prose.',
    ['long']
  ),
}
