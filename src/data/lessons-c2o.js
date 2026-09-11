const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2O = {
  sacrosanct: L(
    'Sacrosanct means too important or holy to be criticised or altered: a sacrosanct principle, treat as sacrosanct. Sacred (already in the dictionary) is holy or deeply valued; sacrosanct adds the freeze — you may not touch it. Sanctimonious (already in the dictionary) is a show of virtue, not protection. Do not treat a ranking as sacrosanct when the n is empty.',
    ['A ranking is not sacrosanct when the n is empty.', 'Sacred is everyday-holy (already in the dictionary). Inviolable is the legal twin. Untouchable is the gloss. A consent rule can fairly be sacrosanct. A league table used to skip the appendix is branding, not liturgy. Open the cell; holiness does not fill it.'],
    'Too important to criticise or change. Everyday: untouchable. Close: sacred (already in this dictionary). Mix-up: sanctimonious (preachy — already in C2). A ranking is not a relic.',
    ['sacred']
  ),
  salutary: L(
    'Salutary means beneficial, often as a sharp corrective (formal): a salutary reminder, a salutary shock. Healthy is everyday and wider; salubrious (already in the dictionary) is of a pleasant, healthy place, not of a lesson. Beneficial is the calm twin. Do not call a slogan salutary because it soothes the board.',
    ['A salutary audit named the missing date; the slogan did not.', 'Healthy is everyday. Salubrious is of air and streets (already in C2) — the mix-up. A warning that names the empty n can be salutary and still unkind. Comfort with no date is not a lesson. Write the finding; the benefit is the correction, not the mood.'],
    'Beneficial, often as an unpleasant lesson. Everyday: healthy / beneficial. Mix-up: salubrious (healthy place — already in C2). A slogan is not a correction.',
    ['beneficial']
  ),
  sartorial: L(
    'Sartorial means of clothes, tailoring, or how someone dresses (formal): sartorial elegance, a sartorial choice. Clothing is everyday; dress is the wider noun. Tailoring is the craft. Do not let sartorial polish stand in for a methods sentence.',
    ['Sartorial polish on the podium is not a methods section.', 'Clothing is everyday. Dress sense is informal. A well-cut jacket can be sartorial fact. A podium that never states the n is theatre. Appearances are allowed after the cell is filled. The suit does not hold the key.'],
    'Of clothes or tailoring. Everyday: clothing / dress. A jacket is not a sample size.',
    ['clothing']
  ),
  satiate: L(
    'To satiate is to satisfy fully, often past the point of comfort (formal): satiate an appetite, satiated with praise. Satisfy is everyday and milder; sate is the close literary twin. A surfeit (this batch) is the resulting excess. Do not satiate a board with logos while the clinic has no spare key.',
    ['Do not satiate the board with logos while the clinic has no spare key.', 'Satisfy is everyday. Sate is the short cousin. Fill is physical. Enough with a dated n is professionalism. A reel of branding that never names the deputy is how a night post dies. Feed the rota; then the compliments.'],
    'Fill to overflowing. Everyday: satisfy. Close: sate. Cousin noun: surfeit (this batch). Logos ≠ a spare key.',
    ['satisfy']
  ),
  saturnine: L(
    'Saturnine means gloomy, slow, and dark in look or temper (literary): a saturnine expression, saturnine humour. Gloomy is everyday; sullen is sulky. Sanguine (already in the dictionary) is the old opposite temperament — cheerfully confident. Do not file a numbered flame risk as saturnine mood.',
    ['A saturnine silence in the minutes is not a decision.', 'Gloomy is everyday. Sullen is sulky. Sanguine is hopeful (already in C2) — the humoral opposite. A dark joke can be saturnine. “Noted” with no owner is not a temperament; it is an empty minute. Name the date; leave the humour for the dinner.'],
    'Gloomy and heavy (literary). Everyday: gloomy. Opposite flavour: sanguine (already in C2). Mood ≠ a missing decision.',
    ['gloomy']
  ),
  scathing: L(
    'Scathing means severely, scornfully critical: a scathing review, scathing about the draft. Critical is everyday and calmer; trenchant (already in the dictionary) is sharp and effective, not necessarily contemptuous. Sardonic (already in the dictionary) is grimly mocking. Do not call a dated methods objection scathing to shut it down.',
    ['Scathing corridor talk is not a numbered objection.', 'Critical is everyday. Trenchant is cutting and useful (already in C2). A tirade is a long angry blast (already in C2). Heat in the corridor is theatre. Two figures on a slide can be calm and still fatal. Table the n; spare the scorched-earth aside.'],
    'Harshly critical. Everyday: harshly critical. Close: trenchant (sharp, effective — already in C2). Contrast: sardonic (mocking — already in C2). A date is not a scorched-earth review.',
    ['critical']
  ),
  scintilla: L(
    'A scintilla is a tiny amount, usually in the negative: not a scintilla of evidence, without a scintilla of doubt (formal / literary). Bit and trace are everyday; iota is the close twin. Do not claim a scintilla of compliance when the cell is blank.',
    ['There was not a scintilla of a date in the n.', 'Trace is everyday. Iota is the cousin. Hint is weaker. A footnote can be small and still exact. An empty cell is not a small amount; it is none. Do not dress zero as a spark. Write the number or write that it is missing.'],
    'The slightest trace. Everyday: trace / bit. Close: iota. Zero is not a spark.',
    ['trace']
  ),
  sedulous: L(
    'Sedulous means showing careful, persistent effort (formal): sedulous attention, a sedulous clerk. Hard-working is everyday; assiduous (already in the dictionary) is the close C2 twin. Scrupulous (already in the dictionary) is careful to be honest, not merely busy. Do not call logo-work sedulous if the fire door is still chained.',
    ['Sedulous branding still left the fire door chained.', 'Hard-working is everyday. Assiduous is the close twin (already in C2). Persistent is wider (already in the dictionary). Careful hours on the wrong object are still the wrong object. A dated check of the exit is the effort that counts. Polish after the lock.'],
    'Carefully persistent (formal). Everyday: hard-working. Close: assiduous (already in C2). Contrast: scrupulous (honest exactness — already in C2). Effort on the logo ≠ the exit.',
    ['assiduous']
  ),
  sepulchral: L(
    'Sepulchral means of a tomb, or gloomily deep, hollow, and quiet (literary): a sepulchral voice, sepulchral gloom. Gloomy is everyday; funereal is the close cousin. A sepulchre is a tomb. Do not skip the fire warden because the hall sounds sepulchral and grand.',
    ['A sepulchral hall still needs a named fire warden.', 'Gloomy is everyday. Hollow is of sound. Funereal is of a funeral. Saturnine (this batch) is of a person’s temper, not of a vault. Atmosphere is design. Cover on the night is a name. The echo does not hold the key.'],
    'Tomb-like; hollowly gloomy (literary). Everyday: gloomy / tomb-like. Contrast: saturnine (of temper — this batch). Grandeur ≠ a warden.',
    ['gloomy']
  ),
  servile: L(
    'Servile means too eager to obey, in a way that lacks self-respect: a servile manner, servile agreement. Obedient is everyday and not always unkind; a sycophant (already in the dictionary) is the person who flatters for gain. Submissive is the milder cousin. Do not file a servile chorus as a finding.',
    ['A servile “world-leading” chorus is not a finding.', 'Obedient is everyday. A sycophant is the flatterer (already in C2). Fawning is the manner. Agreement with a dated n is professionalism. Repeating the slogan so the empty cell is not named is servile. Say the number; rank will survive it or it will not.'],
    'Slavishly obedient. Everyday: too obedient. Close person: sycophant (already in C2). Chorus ≠ an n.',
    ['obedient']
  ),
  shibboleth: L(
    'A shibboleth is a phrase, custom, or belief used as a test of belonging, often stale or unexamined (formal): a party shibboleth, the old shibboleths. Slogan is everyday and thinner; dogma is the close cousin. In the biblical story it was a password. Do not hang a shibboleth on the wall and skip the named key-holder.',
    ['“Optional embargo” is a shibboleth, not a policy.', 'Slogan is everyday. Catchphrase is advertising. A precept is a guiding rule (already in C2). In-group talk can be exact. A phrase that lets you skip the embargo is a hole. Name a yes or a no. Belonging is not a waiver.'],
    'An in-group password or stale dogma. Everyday: slogan. Close: dogma. Contrast: precept (a real rule — already in C2). A password is not a policy.',
    ['slogan']
  ),
  sinecure: L(
    'A sinecure is a paid post with little or no real work (formal / often disapproving): a comfortable sinecure, treat the role as a sinecure. Easy job is everyday; a titular post (this batch) has the title without the power — a cousin, not a synonym. Notional (already in the dictionary) is on paper only. Do not staff a night clinic with a sinecure and call it cover.',
    ['A sinecure on the organogram did not staff the night clinic.', 'Easy job is everyday. Titular is in name only (this batch). Notional is hypothetical (already in C2). A light portfolio with a named deputy can still be honest. A salary with no night presence is how the rota fails. Pay for the hours that exist.'],
    'A paid job with almost no work. Everyday: easy job. Close: titular (title without power — this batch). Contrast: notional (on paper — already in C2). A box on the chart is not cover.',
    []
  ),
  sophistry: L(
    'Sophistry is clever but false or misleading reasoning (formal / disapproving): mere sophistry, a piece of sophistry. Argument is everyday and neutral; specious (this batch) is the adjective for a claim that looks sound. A fallacy is a faulty pattern of inference. Do not dress “lean” as sophistry that deletes the night bus.',
    ['Sophistry about “lean” does not restore the night bus.', 'Argument is everyday (already in the dictionary). Specious is apparently reasonable (this batch). Tendentious is partisan (already in C2). A numbered comparison can be sharp and still dated. Wordplay that hides an empty post is the vice. Name the bus; then argue the budget.'],
    'Clever, dishonest argument. Everyday: bad argument / spin. Close adjective: specious (this batch). Contrast: tendentious (partisan — already in C2). Lean ≠ an empty night bus.',
    ['argument']
  ),
  soporific: L(
    'Soporific means causing sleep, or of prose and talks, dull enough to send you under: a soporific lecture, soporific heat. Sleepy is everyday; tedious (already in the dictionary) is boring at length, the close cousin. A sedative is the medical relative. Do not call a required fire minute soporific because it is plain.',
    ['A soporific keynote is not a sample-size sentence.', 'Sleepy is everyday. Tedious is long and dull (already in the dictionary). Boring is the blunt gloss. A short, dated n can be dry and still right. A purple hour that never states the cell is soporific in the style sense. Cut the frosting; keep the number.'],
    'Sleep-inducing; tediously dull. Everyday: sleep-inducing / boring. Close: tedious (already in this dictionary). A plain date is not a lullaby.',
    ['tedious']
  ),
  specious: L(
    'Specious means looking true or reasonable, but actually false (formal): a specious argument, specious reasoning. False is everyday; spurious (already in the dictionary) is fake or not genuine — the close twin, often of data rather than of plausibility. Sophistry (this batch) is the clever method. Do not file a specious “noted” as a decision.',
    ['A specious “noted” beside an open flame risk is not a decision.', 'False is everyday. Spurious is not genuine (already in C2) — often of evidence, not of a smooth excuse. Plausible is “could be true”. A dated close-out is a minute. “Noted” with the door still chained is a gloss. Name the owner; appearance is not a lock.'],
    'Apparently sound; actually false. Everyday: false but plausible. Close: spurious (fake — already in C2). Cousin: sophistry (this batch). “Noted” ≠ a close-out.',
    ['false']
  ),
  stentorian: L(
    'Stentorian means very loud and powerful, especially of a voice (literary / often wry): a stentorian command, stentorian tones. Loud is everyday; strident (already in the dictionary) is harsh and grating, not merely booming. Stentor was a herald in Homer. Do not let volume unlock a chained fire door.',
    ['A stentorian announcement does not unlock the fire door.', 'Loud is everyday. Booming is the gloss. Strident is harsh (already in C2). Obstreperous is noisily unruly (already in C2). A PA test can be stentorian and still useful. A shout that never names the warden is theatre. Unlock first; then project.'],
    'Booming (of a voice). Everyday: very loud. Contrast: strident (harsh — already in C2). Volume ≠ an open exit.',
    ['loud']
  ),
  stolid: L(
    'Stolid means calm, dependable, and showing little emotion or imagination: a stolid manner, stolid resistance. Calm is everyday and kinder; impassive is the close twin. Phlegmatic is unexcitable. Do not read a required fire notice as stolid because it is plain.',
    ['A stolid shrug is not a fire-door minute.', 'Calm is everyday. Impassive is close. Taciturn is of few words (already in C2) — a different vice of silence. Saturnine (this batch) is gloomy, not merely unmoved. A dry signature can be right. A shrug that leaves the door chained is neglect. Write the owner; feeling can wait.'],
    'Unemotional; impassive. Everyday: unemotional / calm. Close: impassive. Contrast: taciturn (few words — already in C2); saturnine (gloomy — this batch). A shrug is not a minute.',
    ['calm']
  ),
  stultify: L(
    'To stultify is to make a person or process seem foolish, or to drain it of energy and use (formal): stultify debate, a stultifying routine. Stifle is everyday-ish; stymie (already in the dictionary) is to block progress, not to make it look absurd. Nullify (already in the dictionary) cancels legal or practical effect. Do not stultify an appendix with a slogan and no n.',
    ['Do not stultify the appendix with a slogan and no n.', 'Stifle is close. Stymie is to block (already in C2). Nullify is to void (already in C2). A long methods clause can still be exact. Decoration that empties the cell makes the paper look foolish. Fill the n; then the prose can live.'],
    'Make futile or look foolish. Everyday: stifle / make pointless. Contrast: stymie (block — already in C2); nullify (void — already in C2). A slogan is not a cell.',
    ['stifle']
  ),
  subjugate: L(
    'To subjugate is to bring a people, person, or impulse under complete control (formal): subjugate a territory, subjugate curiosity. Control is everyday and milder; suppress (already in the dictionary) is to keep down by force. Conquer is of winning a fight. Do not subjugate a methods query to a brand film.',
    ['Do not subjugate the methods query to the brand film.', 'Control is everyday. Suppress is keep down (already in the dictionary). Dominate is the power cousin. A diary that sequences the film after the n is order, not conquest. Parking the dated objection so the reel can run is the vice. Table the cell; then screen.'],
    'Bring under domination. Everyday: control / crush. Close: suppress (already in this dictionary). A brand film is not a methods veto.',
    ['control']
  ),
  succour: L(
    'Succour is help given to someone in difficulty (formal / literary; also a verb: succour the injured): give succour, a place of succour. Help is everyday; aid and relief are the close twins. British spelling keeps the -our. Do not offer a logo as succour when the spare key is missing.',
    ['A logo is not succour when the spare key is missing.', 'Help is everyday. Aid is close. Relief is of disaster. Support is wider (already in the dictionary). Kind words after a night shift are allowed. A brand mark that does not restore the key is advertising. Name the deputy; then the hymn.'],
    'Aid in distress (formal). Everyday: help. Close: aid / relief. US spelling: succor. A logo is not a key.',
    ['help']
  ),
  surfeit: L(
    'A surfeit is an excessive amount, more than is needed or healthy: a surfeit of choice, surfeit of praise. Too much is everyday; excess is the close noun. Superfluous (already in the dictionary) is extra and unused — a cousin of waste, not always of glut. Satiate (this batch) is the verb of filling past comfort. Do not treat a surfeit of logos as a spare invigilator.',
    ['A surfeit of logos is not a spare invigilator.', 'Too much is everyday. Excess is close. Superfluous is unnecessary extra (already in C2). Surplus is leftover stock (already in the dictionary). One dated post on the rota is cover. A reel of marks that never names the night person is glut. Cut the frosting; keep the deputy.'],
    'Too much; an excess. Everyday: too much. Close: excess. Contrast: superfluous (unused extra — already in C2). Cousin verb: satiate (this batch). Logos ≠ a night post.',
    ['excess']
  ),
  tangential: L(
    'Tangential means only slightly connected with the matter in hand; also of a tangent in geometry: a tangential remark, tangential to the brief. Irrelevant is everyday and stronger; a non sequitur (already in the dictionary) is a conclusion that does not follow. Tangible (already in the dictionary) is a lookalike — touchable, real. Do not file a methods comment as tangential to park it.',
    ['A tangential anecdote is not a methods comment.', 'Irrelevant is everyday and harsher. Peripheral is close. A non sequitur does not follow (already in C2). Tangible is real to the touch (already in the dictionary) — the mix-up. A dinner story can wait. An empty n is on the point. Table the cell; save the yarn.'],
    'Only marginally related. Everyday: off-topic / slightly related. Mix-up: tangible (real — already in this dictionary). Contrast: non sequitur (does not follow — already in C2). An anecdote is not an n.',
    ['irrelevant']
  ),
  tepid: L(
    'Tepid means only slightly warm, or of a reaction, unenthusiastic: tepid water, a tepid response. Lukewarm is the everyday twin; half-hearted is of effort. Tentative (already in the dictionary) is hesitant and provisional, not merely cool. Do not file tepid “noted” as a close-out of a flame risk.',
    ['Tepid “noted” beside an open flame risk is not a decision.', 'Lukewarm is everyday. Half-hearted is of will. Tentative is cautious and not yet fixed (already in the dictionary). Warm applause can wait. An owner and a date are the heat that counts. Cool wording is allowed; an open flame is not.'],
    'Lukewarm; half-hearted. Everyday: lukewarm. Contrast: tentative (provisional — already in this dictionary). Cool tone ≠ an open flame left unowned.',
    ['lukewarm']
  ),
  timorous: L(
    'Timorous means nervous and easily frightened (literary / formal): a timorous approach, timorous as a mouse. Timid is everyday; trepidation (already in the dictionary) is the noun of dread beforehand. Temerity (already in the dictionary) is the opposite flavour — rash boldness. Do not treat a dated request for the n as timorous fuss.',
    ['A timorous email does not restore the only CSV.', 'Timid is everyday. Fearful is close. Trepidation is the dread (already in C2). Temerity is cheeky boldness (already in C2). Feeling is not backup. A calm recovery of the file is the amendment. Asking for the date is not cowardice. Restore first; then soothe.'],
    'Fearful; timid (literary). Everyday: timid. Close noun: trepidation (already in C2). Opposite flavour: temerity (already in C2). Feeling ≠ a restored CSV.',
    ['timid']
  ),
  titular: L(
    'Titular means holding a title without the real power, or of a title itself: a titular head, the titular role in the play. In name only is the gloss; notional (already in the dictionary) is on paper, not necessarily titled. A sinecure (this batch) is paid ease, not always a grand name. Do not let a titular safety post skip the fire signature.',
    ['A titular director of safety still has to sign the fire report.', 'In name only is the gloss. Notional is hypothetical (already in C2). A sinecure is pay without work (this batch). Honorary is ceremonial. Rank on the door is design. The person who holds the key still signs. Title is not a waiver.'],
    'In name only; of a title. Everyday: in name only. Close: notional (already in C2). Contrast: sinecure (pay, little work — this batch). A title is not a signature.',
    []
  ),
  tractable: L(
    'Tractable means easy to control, persuade, or deal with (formal): a tractable problem, a tractable child. Manageable is everyday; docile is of people and animals, often unkind. Tenable (already in the dictionary) is defensible, a lookalike trap. Do not call a missing consent clause tractable because a slogan is handy.',
    ['A missing consent clause is not made tractable by a slogan.', 'Manageable is everyday. Docile is of temperament. Tenable is able to be defended (already in C2) — the mix-up. A dated waiver with an owner can be handled. An empty ethics cell cannot be sweet-talked into compliance. Name the clause; then call it easy.'],
    'Easily managed (formal). Everyday: manageable. Mix-up: tenable (defensible — already in C2). A slogan does not tidy consent.',
    ['manageable']
  ),
  traduce: L(
    'To traduce is to damage someone by unfair, often public, misrepresentation (formal / literary): traduce a reputation, traduced in the press. Slander is the everyday legal-ish cousin; defame is wider. Invective (already in the dictionary) is the abusive language itself. Innuendo (already in the dictionary) is the oblique hint. Do not traduce a junior for asking where the date went.',
    ['Do not traduce a junior for asking where the date went.', 'Slander is the close attack. Defame is wider. Invective is the insult-as-attack (already in C2). Innuendo is the sideways hint (already in C2). A dated finding can name a post without smearing a person. Asking for the n is not a character defect. Correct the cell; spare the corridor story.'],
    'Slander; misrepresent (formal). Everyday: slander / smear. Close: defame. Contrast: invective (abusive language — already in C2); innuendo (oblique hint — already in C2). Asking for a date is not a slur.',
    ['slander']
  ),
  transmute: L(
    'To transmute is to change something into a different form or kind (formal / literary): transmute grief into work, transmute lead into gold — the old alchemical dream. Change and transform (already in the dictionary) are everyday and wider. Convert is of function or faith. Do not pretend a slogan transmutes an empty cell into an n.',
    ['A slogan does not transmute an empty cell into an n.', 'Change is everyday. Transform is close (already in the dictionary). Convert is of use or belief. Alchemy is the myth. A rewrite can move a draft into a paper. A brand line that leaves the cell blank is still blank. Fill the number; metamorphosis is not a method.'],
    'Transform (especially in kind). Everyday: change / transform (already in this dictionary). A slogan is not alchemy.',
    ['transform']
  ),
  turgid: L(
    'Turgid means swollen, or of language, pompous and over-written (formal / disapproving): turgid prose, a turgid river. Pompous is everyday for style; overwrought (already in the dictionary) is over-emotional or over-elaborate. Portentous (already in the dictionary) is overly solemn. Pellucid (already in the dictionary) is the opposite flavour. Do not call a required fire notice turgid because it is plain.',
    ['Turgid prose does not invent a cell that is empty.', 'Pompous is everyday for manner. Overwrought is overworked (already in C2). Portentous is solemnly self-important (already in C2). Pellucid is crystal-clear (already in C2). A short dated sentence can be dry and enough. Swollen syntax with no n is decoration. Cut the adjectives; keep the cell.'],
    'Swollen; pompously overwritten. Everyday: pompous / swollen. Close: overwrought (already in C2). Opposite: pellucid (already in C2). Style ≠ a filled cell.',
    ['pompous']
  ),
  turpitude: L(
    'Turpitude is wickedness, especially in the set phrase moral turpitude (formal / legal): an act of turpitude, moral turpitude. Wickedness is everyday; heinous (already in the dictionary) is the adjective of extreme wickedness. A peccadillo (already in the dictionary) is the opposite scale — a minor fault. Do not file a leaked embargo as a branding slip.',
    ['Leaking draft grades is turpitude, not “robust debate”.', 'Wickedness is everyday. Vice is looser. Heinous is shockingly wicked (already in C2). A peccadillo is a small fault (already in C2). Biscuits in the wrong tin can be a peccadillo. A leak of drafts is not debate. Name the breach; do not shrink it for comfort.'],
    'Base wickedness (formal). Everyday: wickedness. Close adjective: heinous (already in C2). Opposite scale: peccadillo (already in C2). A leak is not a slip.',
    ['wickedness']
  ),
}
