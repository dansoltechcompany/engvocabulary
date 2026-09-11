const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1R = {
  unconscious: L(
    'Unconscious means not awake, or (of a process) not deliberate: knocked unconscious, unconscious bias. Conscious sits opposite; unaware is milder and already in the dictionary. A diversity slide is comms; a sampling frame is methods.',
    ['Unconscious bias is a methods risk; a diversity slide is not a sampling frame.', 'Knocked out is the medical sense. Unaware is already in this course and milder. A slide is branding. A named slice is a frame. Write the slice; keep the slide for the foyer.'],
    'Not awake, or not deliberate. Milder: unaware (already in the dictionary). A slide ≠ a frame.',
    ['unaware']
  ),
  understanding: L(
    'Understanding is knowledge of a subject, or an informal agreement: a clear understanding, come to an understanding. Understand (already in the dictionary) is the verb; a handshake in a corridor is not a signed minute. Exam-board rules live on paper.',
    ['An understanding in the corridor is not a signed embargo minute.', 'Comprehension is the knowledge twin. Agreement is the paper twin. A corridor is talk. A minute is a file. Write the time; then shake hands if you still want to.'],
    'Knowledge, or an informal agreement. Verb: understand (already in the dictionary). A corridor chat ≠ a minute.',
    ['comprehension']
  ),
  underway: L(
    'Underway means already started and in progress: work is underway, the sitting is underway. Under way as two words is the older form; imminent means not yet started. A launch film is comms; a signed spare is cover.',
    ['The sitting is underway only when the named spare has signed in.', 'In progress is everyday. Imminent is not yet. A film is branding. A signature is a log. Get the name; then roll the camera if you must.'],
    'Already in progress. Contrast: imminent (not yet). A film ≠ a signed spare.',
    ['in progress']
  ),
  undue: L(
    'Undue means more than is reasonable, legal, or necessary: undue delay, undue influence. Excessive is the close twin; due sits opposite. Midnight is a clock, not a mood of haste.',
    ['Undue haste before midnight is still an embargo breach.', 'Excessive is the close twin. Unwarranted is a cousin. Haste is a feeling of speed. A timestamp is the rule. Wait for the lift; then publish.'],
    'Excessive; more than is reasonable. Close: excessive. Haste ≠ a lifted embargo.',
    ['excessive']
  ),
  uneasy: L(
    'Uneasy means anxious or uncomfortable, or (of a peace) not securely settled: uneasy about a plan, an uneasy truce. Anxious is everyday; calm sits opposite. Quiet in a hall is a feeling; an occupancy check is a number.',
    ['An uneasy quiet in the hall is not a completed occupancy check.', 'Anxious is everyday. Restless is bodily. Quiet is an adjective. A cap is a certificate. Count the seats; then describe the mood if it still helps.'],
    'Anxious or not securely settled. Everyday: anxious. Quiet ≠ a completed check.',
    ['anxious']
  ),
  uneven: L(
    'Uneven means not level, equal, or consistent: uneven ground, uneven coverage. Unequal is the fairness twin; even sits opposite. Night holes are a rota finding, not a character caption.',
    ['Uneven night coverage is a rota finding, not “character”.', 'Unequal is the rights twin. Patchy is informal. Character is a story. A gap on the grid is evidence. Staff the night; keep the story for the yearbook.'],
    'Not level or not equal. Close: unequal. A night hole ≠ character.',
    ['unequal']
  ),
  unequivocal: L(
    'Unequivocal means leaving no doubt; clear and firm: an unequivocal refusal, unequivocal evidence. Ambiguous (already in the dictionary) sits opposite; clear is everyday and milder. Flexibility is a vibe; a cap is a figure.',
    ['The occupancy cap is unequivocal; a vibe of flexibility is not a waiver.', 'Clear is everyday. Categorical is the close twin. A vibe is a feeling. A number on a certificate is the rule. Keep the number; save flexibility for the catering.'],
    'Leaving no doubt. Close: categorical. Opposite: ambiguous (already in the dictionary). A vibe ≠ a waiver.',
    ['categorical']
  ),
  unfounded: L(
    'Unfounded means not based on evidence or fact: unfounded allegations, an unfounded rumour. Groundless is the close twin; well-founded sits opposite. A lobby story does not rewrite a cell.',
    ['An unfounded rumour in the lobby does not rewrite the n.', 'Groundless is the close twin. Baseless is a cousin. A rumour is talk. A count is a file. Open the file; archive the corridor.'],
    'Without evidence. Close: groundless. A rumour ≠ a rewritten n.',
    ['groundless']
  ),
  unilateral: L(
    'Unilateral means done by one person or group without the agreement of others: a unilateral decision, unilateral action. Bilateral is two-sided; multilateral is many. A cut bus is logistics, however solo the email.',
    ['A unilateral cut to the night bus still needs the exclusion named in the n.', 'One-sided is everyday. Bilateral is the two-party twin. An email is a channel. A route is a timetable. Name the exclusion, or reinstate the bus.'],
    'One-sided; without agreement. Contrast: bilateral. A solo email ≠ a silent cut.',
    ['one-sided']
  ),
  unit: L(
    'A unit is a single thing treated as a whole — of analysis, housing, or organisation: unit of analysis, a business unit, a housing unit. Item is everyday and smaller; a branding cluster is design, not a cell.',
    ['Name the unit of analysis; a branding cluster is not a cell.', 'Item is everyday. Team is people. A cluster is comms. A cell is methods. Write what you counted; keep the cluster for the cover.'],
    'A whole treated as one (analysis / organisation). Everyday: item. Branding ≠ a cell.',
    ['item']
  ),
  united: L(
    'United means joined as one group, nation, or purpose: a united board, the United Kingdom. Unite (already in the dictionary) is the verb; divided sits opposite. A single comms line is branding; an n is a number.',
    ['A united comms line does not fill an empty n.', 'Unite is already in this course (verb). Joint is a cousin. A line is a message. A count is methods. Put the number first; then speak with one voice.'],
    'Joined as one. Verb: unite (already in the dictionary). One voice ≠ a filled n.',
    ['joint']
  ),
  universe: L(
    'The universe is all of space and matter; in methods, the full set of cases you might study: the universe of applicants. Universal (already in the dictionary) is the adjective; a slogan is not a sampling frame.',
    ['Define the universe of cases before you sample; a slogan is not a frame.', 'Cosmos is the space twin. Population is the methods twin. A slogan is comms. A list with a date is a frame. Name the list; hang the slogan on the stairs.'],
    'The cosmos, or the full set of cases. Adjective: universal (already in the dictionary). A slogan ≠ a frame.',
    ['population']
  ),
  unjust: L(
    'Unjust means not fair or morally right, especially of a system or ruling: an unjust law, an unjust rota. Unfair (already in the dictionary) is milder and more everyday; just sits opposite. Resilience copy does not staff a night.',
    ['An unjust rota that skips nights is a staffing minute, not “resilience”.', 'Unfair is already in this course and milder. Inequitable is the policy twin. Resilience is a poster word. A skipped night is a hole. Write the name; keep resilience for the interview.'],
    'Unfair in a rights or systems sense. Milder: unfair (already in the dictionary). Resilience copy ≠ a staffed night.',
    ['inequitable']
  ),
  unlawful: L(
    'Unlawful means not allowed by law: unlawful access, unlawful obstruction. Illegal is everyday and close; legal sits opposite. A wedge in a fire door is a log, however pretty the paint.',
    ['An unlawful wedge in a fire door is a log, not a styling note.', 'Illegal is everyday. Illicit is secret-wrong. Styling is design. An exit must open. Pull the wedge; write the time.'],
    'Against the law. Everyday: illegal. Styling ≠ a clear exit.',
    ['illegal']
  ),
  unmistakable: L(
    'Unmistakable means so clear that it cannot be confused with anything else: an unmistakable gap, an unmistakable voice. Distinct is milder; ambiguous sits opposite. A muted palette is design, not a filled cell.',
    ['The gap in the n is unmistakable; a muted palette does not hide it.', 'Obvious is everyday. Distinct is milder. A palette is colour. A blank cell is methods. Fill the number; then choose the grey.'],
    'Impossible to mistake. Milder: distinct. A palette ≠ a hidden gap.',
    ['obvious']
  ),
  unseen: L(
    'Unseen means not seen or noticed; in exams, a paper candidates have not met before: an unseen paper, unseen damage. Visible sits opposite; a rehearsal is practice, not invigilation.',
    ['An unseen paper still needs a named invigilator in the room.', 'Hidden is a cousin. Invisible is stronger. A rehearsal is practice. A sitting is a room with a spare. Staff the room; save the rehearsal for the hall.'],
    'Not seen; also an unseen exam paper. A rehearsal ≠ invigilation.',
    ['hidden']
  ),
  unstable: L(
    'Unstable means likely to change, fail, or collapse: an unstable government, an unstable rota. Unsteady is milder and often physical; stable sits opposite. Agile is a culture word; a hole on the grid is cover.',
    ['An unstable night rota is a cover failure, not “agile culture”.', 'Unsteady is milder. Precarious is a close twin. Culture is a story. A name on a night cell is cover. Write the name; keep agile for the away-day.'],
    'Likely to fail or collapse. Close: precarious. Agile copy ≠ cover.',
    ['precarious']
  ),
  unused: L(
    'Unused means not being used (/ˌʌnˈjuːzd/); unused to means not accustomed (/ˌʌnˈjuːst/): unused stock, unused to nights. Idle is a cousin; a library photograph is not a sample.',
    ['Unused stock shots do not fill an n cell.', 'Idle is the unused-machine twin. Spare is a named extra person — different. A shot is design. A count is methods. Open the file; keep the library for the cover.'],
    'Not used (or not accustomed). Mix-up: unused to. Photos ≠ an n.',
    ['idle']
  ),
  upheaval: L(
    'Upheaval is a sudden, violent, or disruptive change: political upheaval, timetable upheaval. Disruption is milder; continuity sits opposite. A rebrand is comms; a fire plan is a statutory paper.',
    ['Timetable upheaval still needs a fire plan for the hall next door.', 'Disruption is milder. Turmoil is hotter. A rebrand is a logo. An exit is a certificate. Keep the plan; then reprint the crest.'],
    'Disruptive change. Milder: disruption. A rebrand ≠ a fire plan.',
    ['disruption']
  ),
  upheld: L(
    'Upheld means confirmed as valid by a court, board, or senior body (past of uphold, already in the dictionary): a ruling was upheld. Overturned sits opposite; a tweet is comms, not an appeal.',
    ['The exam-board ruling was upheld; a tweet is not an appeal.', 'Confirmed is everyday. Uphold is already in this course (verb). A timeline is comms. A determination is a paper. Cite the paper; archive the tweet.'],
    'Confirmed by a higher body. Verb: uphold (already in the dictionary). A tweet ≠ an appeal.',
    ['confirmed']
  ),
  upward: L(
    'Upward means moving or pointing towards a higher position, amount, or rank: an upward trend, an upward glance. Upwards (already in the dictionary) is chiefly the adverb; a slide arrow is design, not a night count.',
    ['An upward arrow on a slide is comms, not a count of the night cohort.', 'Upwards is already in this course (adverb). Rising is everyday. An arrow is a drawing. A slice with a date is methods. Name the slice; keep the arrow for the deck.'],
    'Towards a higher position or amount. Adverb cousin: upwards (already in the dictionary). An arrow ≠ a count.',
    ['rising']
  ),
  utmost: L(
    'Utmost means the greatest possible: of the utmost importance; also (noun) the most you can do: do your utmost. Maximum is the number twin; least sits opposite. Care is a duty; a staff-room table is not a seal.',
    ['Treat pack security with the utmost care; a staff-room table is not a seal.', 'Maximum is the figure twin. Greatest is everyday. Care is a procedure. A table is furniture. Seal the room; then make tea.'],
    'The greatest possible. Close: maximum. A table ≠ a sealed pack.',
    ['maximum']
  ),
  utter: L(
    'Utter as an adjective means complete: utter nonsense, utter confidence. As a verb it means to say (formal). Completely is the adverb twin; utterly (already in the dictionary) is the adverb. Confidence is a feeling; cover is a name.',
    ['Utter confidence in the film does not staff the sitting.', 'Complete is everyday. Utterly is already in this course (adverb). A film is comms. A spare is a rota cell. Write the name; clap the film later.'],
    'Complete (also: to say). Adverb: utterly (already in the dictionary). Confidence ≠ cover.',
    ['complete']
  ),
  waive: L(
    'To waive is to choose not to insist on a right, rule, or claim: waive a fee, waive a requirement. Mix-up: wave (the hand). Relinquish (already in the dictionary) is give up a hold. A smile is manner; a certificate is a date.',
    ['A smile at the door does not waive the fire certificate.', 'Relinquish is already in this course (give up a hold). Wave is a different word. Courtesy is manner. A date on a paper is the rule. Keep the date; smile after the check.'],
    'Give up a right or requirement. Mix-up: wave. Courtesy ≠ a waived certificate.',
    ['relinquish']
  ),
  warden: L(
    'A warden is a person in charge of a building, park, or group, or of enforcing a local rule: hall warden, traffic warden. Guard is security; a mascot is branding. Cover is a named officer.',
    ['The hall warden is a named officer; a mascot is not cover.', 'Guard is the security twin. Keeper is older. A mascot is a drawing. A name on a rota is the fact. Write the name; hang the costume in the cupboard.'],
    'Person in charge of a place or rule. Close: guard. A mascot ≠ cover.',
    ['guard']
  ),
  warfare: L(
    'Warfare is the activity of fighting a war, or intense conflict in another field: guerrilla warfare, price warfare. War (already in the dictionary) is the event or state; fighting is everyday. Occupancy is a certificate, not a marketing battle.',
    ['Price warfare in the prospectus is marketing; occupancy is a certificate.', 'War is already in this course. Combat is military. A prospectus is comms. A cap is a number. Keep the number; save the battle for the price page.'],
    'Organised fighting, or intense conflict. Event: war (already in the dictionary). Marketing ≠ a cap.',
    ['combat']
  ),
  warmth: L(
    'Warmth is heat, or a kind and friendly quality: the warmth of the hall, warmth of tone. Heat is physical; kindness is the feeling twin. A press note is comms; a boiler paper is a certificate.',
    ['Warmth of tone in the press note is not a heating certificate.', 'Heat is the physical twin. Kindness is the feeling twin. Tone is style. A date on a boiler paper is the fact. Keep the date; then polish the adjective.'],
    'Heat, or kind friendliness. Close (feeling): kindness. Tone ≠ a boiler paper.',
    ['kindness']
  ),
  warranty: L(
    'A warranty is a written promise that a product will be repaired or replaced if it fails: under warranty, a two-year warranty. Warrant (already in the dictionary) is a legal paper or justification — different word. Kit is a bag; fire is a date.',
    ['A warranty card in the kit bag is not a fire certificate.', 'Guarantee is the close twin. Warrant is already in this course and legal. A card is a product promise. An occupancy date is statutory. Keep the date; file the card with the printer.'],
    'A product-repair promise. Mix-up: warrant (already in the dictionary). A card ≠ a fire date.',
    ['guarantee']
  ),
  warrior: L(
    'A warrior is a person who fights in a battle; also, figuratively, a fierce campaigner: a warrior for reform. Soldier is the military twin; a poster slogan is branding, not a named spare.',
    ['Calling staff “warriors” on a poster does not name the spare.', 'Soldier is the service twin. Campaigner is the figurative twin. A poster is comms. A rota cell is cover. Write the name; keep the epithet for the match-day programme.'],
    'A fighter, or a fierce campaigner. Close: soldier. A slogan ≠ a named spare.',
    ['soldier']
  ),
  wary: L(
    'Wary means cautious because you think there may be danger or a problem (wary of): wary of claims, a wary pause. Cautious is everyday; reckless (already in the dictionary) sits opposite. Adjectives in an abstract are colour; an n is a count.',
    ['Be wary of an abstract with adjectives and no n.', 'Cautious is everyday. Suspicious is hotter. Reckless is already in this course (opposite). Colour is style. A number is methods. Ask for the n; then enjoy the adjectives.'],
    'Cautious of risk (of). Everyday: cautious. Opposite: reckless (already in the dictionary). Adjectives ≠ an n.',
    ['cautious']
  ),
  wastage: L(
    'Wastage is loss of people, material, or money through waste; natural wastage is staff leaving and not being replaced: reduce wastage, natural wastage. Waste (already in the dictionary) is the everyday noun/verb; a hole on nights is still a hole.',
    ['Natural wastage is not a staffing model if nights go unstaffed.', 'Waste is already in this course. Attrition is the HR twin. A model is a plan with names. An empty night is a finding. Name a replacement; do not caption the hole.'],
    'Loss through waste (including staff leaving). Everyday: waste (already in the dictionary). Attrition ≠ unstaffed nights.',
    ['attrition']
  ),
  watchdog: L(
    'A watchdog is a person or body whose job is to check that rules are kept: a consumer watchdog, an exam-board watchdog. Regulator is the close twin; a newsletter is comms, not a ratio.',
    ['The exam-board watchdog reads the ratio; a newsletter does not.', 'Regulator is the close twin. Monitor is milder. A newsletter is a channel. A ratio is a rule. Cite the rule; archive the round-up.'],
    'A regulator that checks the rules. Close: regulator. A newsletter ≠ a ratio.',
    ['regulator']
  ),
  watershed: L(
    'A watershed is a turning point; also a ridge dividing river systems, or (UK television) a time after which adult programmes may be shown: a political watershed, after the watershed. Turning point is everyday; a new crest is design, not a filled cell.',
    ['A new crest is not a watershed if the n is still empty.', 'Turning point is everyday. Landmark is a cousin. A crest is branding. A count is methods. Fill the n; then unveil the arms.'],
    'A turning point (also drainage / TV watershed). Everyday: turning point. A crest ≠ a filled n.',
    ['turning point']
  ),
  watertight: L(
    'Watertight means not letting water in; of an argument or contract, without holes: a watertight roof, a watertight case. Sound is the argument twin; leaky sits opposite. A slogan is comms; a named n is methods.',
    ['A watertight methods page names the n; a slogan does not.', 'Sound is the argument twin. Hermetic is technical. A slogan is a line. A cell is a number. Put the number in; then the tagline.'],
    'Sealed against leaks (roof or argument). Close (argument): sound. A slogan ≠ methods.',
    ['sound']
  ),
  wavelength: L(
    'Wavelength is the distance between wave peaks; informally, a way of thinking (on the same wavelength): a radio wavelength, on the same wavelength. Frequency is the physics cousin; agreement in a lobby is not a lifted embargo.',
    ['Being on the same wavelength in the lobby does not lift the embargo.', 'Frequency is the physics twin. Rapport is the social twin. A lobby is talk. A clock is the rule. Wait for midnight; then agree in public.'],
    'A wave measure, or a shared way of thinking. Social twin: rapport. Rapport ≠ a lifted embargo.',
    ['frequency']
  ),
  weaken: L(
    'To weaken is to make or become less strong or less effective: weaken a beam, weaken attendance. Strengthen sits opposite; undermine (already in the dictionary) is often secret or gradual. Character is a story; a bus is a timetable.',
    ['Cutting the night bus will weaken attendance; “character” is not a timetable.', 'Undermine is already in this course and often covert. Dilute is a cousin. Character is a caption. A route is logistics. Reinstate the bus, or name the exclusion in the n.'],
    'Make less strong. Covert cousin: undermine (already in the dictionary). Character ≠ a timetable.',
    ['dilute']
  ),
  weakness: L(
    'Weakness is a lack of strength, or a fault in a plan or argument: a structural weakness, a weakness in the design. Flaw is the close twin; strength sits opposite. A muted palette is colour; an unnamed spare is cover.',
    ['The weakness is an unnamed spare, not a muted palette.', 'Flaw is the close twin. Shortcoming is milder. Colour is design. A blank rota cell is a hole. Write the name; then pick the grey.'],
    'A fault or lack of strength. Close: flaw. A palette ≠ a named spare.',
    ['flaw']
  ),
  weary: L(
    'Weary means very tired, especially after long effort; weary of means tired of: weary staff, weary of slogans. Tired is everyday; exhausted is stronger. Dedication is a feeling; a relief hour is a name and a time.',
    ['Weary night staff still need a named relief hour; dedication is not a waiver.', 'Tired is everyday. Exhausted is stronger. Dedication is a story. A time on a rota is cover. Write the hour; keep dedication for the thank-you card.'],
    'Very tired (also weary of). Everyday: tired. Dedication ≠ a relief hour.',
    ['tired']
  ),
  weave: L(
    'To weave is to make cloth by crossing threads, or to construct a story or route by combining parts: weave a carpet, weave a narrative. Knit is a cousin; invent sits opposite for facts. Lifestyle copy is comms; an n is a number.',
    ['Do not weave lifestyle copy through an empty n.', 'Knit is the fabric cousin. Interweave is the close twin. Copy is colour. A cell is methods. Fill the cell; then braid the adjectives if you still need them.'],
    'Interlace threads, or construct a narrative. Close: interweave. Lifestyle copy ≠ an n.',
    ['interweave']
  ),
  wedge: L(
    'A wedge is a piece thick at one end and thin at the other, used to hold or split; as a verb, to force into a gap: a door wedge, wedge a chair. Removal (already in the dictionary) is taking it away. Styling is design; an exit must open.',
    ['A wedge in the fire door is a log, not a styling note.', 'Chock is the wheel twin. Removal is already in this course (the act of taking away). Paint is design. An exit is a statute. Pull the wedge; write the time.'],
    'A tapering block, or to force into a gap. Act of taking away: removal (already in the dictionary). Styling ≠ a clear exit.',
    ['chock']
  ),
  weep: L(
    'To weep is to cry; of a wound or pipe, to leak slowly: weep with relief, a weeping joint. Cry is everyday; a debrief can be human. The minute is still a file with a name.',
    ['Weep in the debrief if you must; the minute still needs the spare’s name.', 'Cry is everyday. Sob is noisier. A debrief is a feeling space. A minute is a record. Write the name; then pass the tissues.'],
    'Cry, or leak slowly. Everyday: cry. Tears ≠ a blank minute.',
    ['cry']
  ),
  weld: L(
    'To weld is to join metal by heat, or to unite people or parts firmly: weld a joint, weld a coalition. Fuse is a cousin; split sits opposite. An ethics minute is process; a logo lock-up is design.',
    ['Weld the coalition after the ethics minute, not instead of it.', 'Fuse is the close twin. Solder is finer metalwork. A lock-up is branding. A minute is a file. Pass the minute; then the photocall.'],
    'Join by heat, or unite firmly. Close: fuse. A logo ≠ an ethics minute.',
    ['fuse']
  ),
  'well-being': L(
    'Well-being (British hyphen) is a person’s health, happiness, and comfort: staff well-being, a well-being policy. Welfare (already in the dictionary) is often state support or animal care; wellbeing as one word is a branding spelling, not a rota.',
    ['Staff well-being is rest days on the rota, not a staircase poster.', 'Welfare is already in this course (often the state or animals). Health is a part. A poster is comms. A rest day is a cell. Put the day on the grid; hang the poster after.'],
    'Health, happiness, and comfort. Contrast: welfare (already in the dictionary). A poster ≠ rest days.',
    ['welfare']
  ),
  westward: L(
    'Westward means towards the west: move westward, a westward catchment. West (already in the dictionary) is the direction itself; a caption is comms, not a night bus.',
    ['A westward catchment still needs a night bus, not a caption.', 'West is already in this course. Westerly is the wind twin. A caption is a line. A route is a timetable. Keep the bus; then name the compass.'],
    'Towards the west. Base: west (already in the dictionary). A caption ≠ a night bus.',
    ['west']
  ),
  wetland: L(
    'Wetland is land covered or soaked with water, such as a marsh or bog: protect the wetland, a wetland survey. Marsh is the close twin; a car park is development. Planning is a constraint, not décor.',
    ['A wetland on the site plan is a planning constraint, not décor.', 'Marsh is the close twin. Bog is wetter. Décor is styling. A constraint is a condition of consent. Keep the marsh; move the tarmac.'],
    'Marsh or water-soaked land. Close: marsh. Décor ≠ a planning constraint.',
    ['marsh']
  ),
  wherein: L(
    'Wherein means in which (formal), or in what way: the clause wherein the duty is named. Where (already in the dictionary) is everyday location; whereby (already in the dictionary) is by which. A tweet is not a source.',
    ['The clause wherein the ratio is named is the source, not a tweet.', 'Whereby is already in this course (by which). In which is the plain twin. A tweet is comms. A clause is a paper. Cite the paper; archive the thread.'],
    'In which (formal). Cousin: whereby (already in the dictionary). A tweet ≠ a clause.',
    ['in which']
  ),
  whim: L(
    'A whim is a sudden wish or idea, often not reasonable: on a whim, a chair’s whim. Caprice is the close twin; a protocol is a named rule. Occupancy is a figure, not a mood.',
    ['A chair’s whim is not a fire-occupancy waiver.', 'Caprice is the close twin. Impulse is everyday. A mood is a feeling. A cap is a certificate. Keep the figure; save the whim for the biscuits.'],
    'A sudden, unreasoned wish. Close: caprice. A mood ≠ a waiver.',
    ['caprice']
  ),
  whip: L(
    'A whip is a party official who enforces voting discipline; as a verb, to move or stir very fast: the government whip, whip through a list. Discipline is the function; a mood of loyalty is not a vote log.',
    ['The party whip is a named role; a mood of loyalty is not a vote log.', 'Enforcer is informal. Lash is the physical tool — different sense. Loyalty is a feeling. A roll is a file. Record the vote; keep the feeling for the corridor.'],
    'A discipline official, or to move very fast. Mix-up: the physical lash. Loyalty ≠ a vote log.',
    ['enforcer']
  ),
  whirl: L(
    'To whirl is to spin round quickly; as a noun, a fast spin or a rush of activity: leaves whirl, a whirl of launches. Spin is everyday; a rush is not a badge log.',
    ['A whirl of launch activity does not replace the badge log.', 'Spin is everyday. Flurry is the noun twin. Activity is a blur. A swipe is a file. Record the swipe; then whirl through the photocall.'],
    'Spin fast, or a rush of activity. Close: flurry. A rush ≠ a badge log.',
    ['spin']
  ),
  whitewash: L(
    'A whitewash is an attempt to hide faults; as a verb, to cover them up, or to paint with lime: a whitewash of the findings, whitewash a wall. Cover-up is the close twin; an audit needs a number, not gloss.',
    ['A glossy pack is a whitewash if the n is still blank.', 'Cover-up is the close twin. Gloss is milder. A pack is comms. A cell is methods. Fill the cell; then polish the cover if you still want to.'],
    'A cover-up of faults. Close: cover-up. Gloss ≠ a filled n.',
    ['cover-up']
  ),
  wholesale: L(
    'Wholesale means sold in bulk to shops, or complete and affecting everything: wholesale prices, wholesale reform. Retail (already in the dictionary) sits opposite for trade; partial sits opposite for scale. Agility is a culture word; deleted rest days are a fact.',
    ['Wholesale deletion of rest days is a rota fact, not “agility”.', 'Retail is already in this course (to the public). Comprehensive is the complete twin. Agility is a poster. A rest day is a cell. Put the days back, or name the cut in the minute.'],
    'In bulk, or complete across the board. Trade opposite: retail (already in the dictionary). Agility ≠ deleted rest days.',
    ['comprehensive']
  ),
  widen: L(
    'To widen is to make or become wider, or (of a gap or sample) to increase in range: widen a road, widen the sample. Narrow sits opposite; extend is a cousin. Averaging a slice away is a cut, not courtesy.',
    ['Widen the sample to the night cohort; do not average it away.', 'Broaden is the close twin. Extend is already in this course as a cousin. Courtesy is manner. A slice is methods. Name the slice; keep manners for the email.'],
    'Make wider, or increase in range. Close: broaden. Averaging away a slice is a cut.',
    ['broaden']
  ),
  widow: L(
    'A widow is a woman whose husband or wife has died and who has not married again: a war widow, a widow’s pension. Widower is the man; a caption is comms, not an entitlement clause.',
    ['A widow’s pension clause is a named entitlement, not a caption.', 'Widower is the male counterpart. Bereaved is wider. A caption is a line. A clause is a right. Cite the clause; keep the caption for the memorial page.'],
    'A woman whose spouse has died. Male counterpart: widower. A caption ≠ an entitlement.',
    ['widower']
  ),
  width: L(
    'Width is the distance from one side of something to the other: the width of a door, in width. Wide (already in the dictionary) is the adjective; breadth is a close twin. A design preference is taste; a fire gap is a measurement.',
    ['The width of the fire gap is a measurement, not a design preference.', 'Breadth is the close twin. Wide is already in this course (adjective). Taste is styling. A gap is a statute. Measure the gap; then choose the paint.'],
    'How wide something is. Adjective: wide (already in the dictionary). Taste ≠ a fire measurement.',
    ['breadth']
  ),
  wield: L(
    'To wield is to hold and use a tool or weapon, or to use power or influence: wield a hammer, wield influence. Exercise (power) is the close twin; a title on a door is branding, not a decision right.',
    ['A title does not wield decision rights; the exams officer does.', 'Exercise is the power twin. Brandish is the weapon twin and showier. A plate is design. A named officer is the rule. Write the officer; then the brass if you must.'],
    'Hold and use (a tool or power). Close (power): exercise. A title plate ≠ decision rights.',
    ['exercise']
  ),
  wilful: L(
    'Wilful (British; not willful) means deliberate, especially of a wrong, or stubbornly determined: wilful neglect, a wilful child. Deliberate is everyday; accidental sits opposite. Midnight is a clock, not a mood.',
    ['Wilful publication before midnight is still an embargo breach.', 'Deliberate is everyday. Wanton is already in this course and colder. A clock is the rule. Intent is a finding. Wait for the lift; then publish.'],
    'Deliberate (wrong) or stubbornly set. British spelling. Everyday: deliberate. Intent ≠ a lifted embargo.',
    ['deliberate']
  ),
  willingness: L(
    'Willingness is the state of being ready to do something: willingness to travel, a willingness to wait. Willing (already in the dictionary) is the adjective; a poster is comms, not a named spare.',
    ['Willingness on a poster is not a named spare on the rota.', 'Ready is everyday. Willing is already in this course (adjective). A poster is branding. A cell is cover. Write the name; hang the poster on the stairs.'],
    'Readiness to do something. Adjective: willing (already in the dictionary). A poster ≠ a named spare.',
    ['readiness']
  ),
  windfall: L(
    'A windfall is an unexpected gain of money or advantage: a tax windfall, a windfall grant. Bonus is planned or contractual; a film crew is still an ethics question.',
    ['A windfall grant still needs an ethics minute before the film crew.', 'Bonus is often planned. Godsend is informal. A grant is money. A minute is process. Pass the minute; then unpack the cameras.'],
    'An unexpected gain. Contrast: bonus (often planned). Money ≠ a skipped ethics minute.',
    ['bonus']
  ),
  winding: L(
    'Winding means twisting and turning: a winding corridor; also, in law, winding-up — closing a company. Straight sits opposite; a maze is still an occupancy question. Mix-up: winding a clock (/ˈwaɪndɪŋ/ same spelling).',
    ['A winding corridor is still a fire-occupancy question.', 'Twisting is everyday. Circuitous is the formal twin. Winding-up is the company sense. A maze is a layout. A cap is a number. Count the people; then admire the turn.'],
    'Twisting (also: winding-up of a company). Formal twin: circuitous. A maze ≠ a waived cap.',
    ['circuitous']
  ),
  withdrawal: L(
    'Withdrawal is the act of taking something or someone back, leaving a place or scheme, or (medical) the effect of stopping a drug: withdrawal of a service, cash withdrawal. Withdraw (already in the dictionary) is the verb; character is a caption, not a bus.',
    ['Withdrawal of the night bus is a transport minute, not “character”.', 'Withdraw is already in this course (verb). Retreat is already in this course (pull back). Character is a story. A route is logistics. Reinstate the bus, or name the exclusion in the n.'],
    'Taking back, or leaving a scheme. Verb: withdraw (already in the dictionary). A bus cut ≠ character.',
    ['retreat']
  ),
  wither: L(
    'To wither is to dry up and die, or (of a feeling or project) to fade: plants wither, support withers. Fade is milder; flourish sits opposite. A cohort is a slice; averaging it away is a cut.',
    ['Do not let the night cohort wither out of the n.', 'Fade is milder. Shrivel is physical. A slice is methods. A caption is a story. Keep the slice; do not let it drop out of the cell.'],
    'Dry up, or fade away. Milder: fade. A dropped slice is a cut.',
    ['fade']
  ),
  withhold: L(
    'To withhold is to refuse to give something that is due or expected: withhold payment, withhold a pack. Hold back is everyday; release sits opposite. A lobby briefing before midnight is still a leak.',
    ['Withhold the pack from the lobby until the embargo lifts.', 'Hold back is everyday. Retain is keep, not refuse. A lobby is a room. A clock is the rule. Wait for midnight; then hand the pack over.'],
    'Refuse to give what is due. Everyday: hold back. Early pack is a leak.',
    ['retain']
  ),
  withstand: L(
    'To withstand is to resist something successfully; not to be damaged or defeated by it: withstand pressure, withstand audit. Resist is milder and may fail; a crest is branding, not methods.',
    ['The methods page must withstand audit; a crest will not.', 'Resist is milder. Endure is time and pain. A crest is a drawing. A count is a file. Put the n in; keep the arms for the cover.'],
    'Resist successfully. Milder: resist. A crest ≠ audit.',
    ['resist']
  ),
  witty: L(
    'Witty means cleverly and amusingly expressed: a witty remark, witty copy. Funny is everyday and broader; solemn sits opposite. A press line before midnight is still a leak, however sharp.',
    ['A witty press line is still a leak if it lands before midnight.', 'Funny is everyday. Wry (this batch) is drier. A line is comms. A clock is the rule. Wait for the lift; then be clever.'],
    'Cleverly funny. Everyday: funny. Drier twin: wry (this batch). Wit ≠ a lifted embargo.',
    ['funny']
  ),
  wording: L(
    'Wording is the exact words used in a text, law, or question: the wording of a clause, careful wording. Diction is literary; a vibe is a feeling, not a source.',
    ['The wording of the occupancy cap is the source; a vibe is not.', 'Diction is literary. Phrasing is a cousin. A vibe is a mood. A clause is a paper. Cite the paper; save the mood for the interview.'],
    'The exact choice of words. Close: phrasing. A vibe ≠ a clause.',
    ['phrasing']
  ),
  workable: L(
    'Workable means able to be used or done in practice: a workable plan, a workable rota. Practical is everyday; unworkable sits opposite. A vision slide is comms; a named spare is cover.',
    ['A workable rota names the spare; a vision slide does not.', 'Practical is everyday. Feasible is the close twin. A slide is a deck. A cell is a name. Write the name; then the vision if it still fits.'],
    'Usable in practice. Close: feasible. A vision slide ≠ a named spare.',
    ['feasible']
  ),
  workforce: L(
    'The workforce is all the people who work in a company, industry, or country: a night workforce, shrink the workforce. Staff is everyday; a smiling still is comms, not a headcount.',
    ['The night workforce is a headcount, not a smiling still.', 'Staff is everyday. Labour force is the economics twin. A still is a photograph. A number is HR. Count the nights; keep the smile for the prospectus.'],
    'All the workers in a group. Everyday: staff. A photograph ≠ a headcount.',
    ['staff']
  ),
  workstation: L(
    'A workstation is a desk with a computer, or a place where a particular task is done: a hot-desk workstation, a lab workstation. Desk is everyday; a sofa is furniture. Scripts need a sealed room, not an open bench.',
    ['Scripts at an open workstation are not in a sealed room.', 'Desk is everyday. Terminal is older IT. A sofa is comfort. A seal is a log. Move the scripts; then sit down.'],
    'A desk or task station. Everyday: desk. An open bench ≠ a sealed room.',
    ['desk']
  ),
  worldly: L(
    'Worldly means experienced in life, or concerned with money and possessions rather than spiritual things: worldly wisdom, worldly goods. Naive sits opposite; polish in a film is comms, not methods.',
    ['Worldly polish in the film is not a methods section.', 'Sophisticated is a cousin. Material is the possessions sense. A film is branding. An n is a number. Put the n first; then the polish.'],
    'Experienced, or concerned with material life. Close: sophisticated. Polish ≠ methods.',
    ['sophisticated']
  ),
  worn: L(
    'Worn means damaged by long use, or looking tired: worn steps, a worn face. New sits opposite; vintage is a style word, not a waiver for a broken log.',
    ['A worn badge printer still needs a log; “vintage” is not a waiver.', 'Shabby is ruder. Tired is the face sense. Vintage is styling. A swipe is a file. Fix the printer; keep vintage for the foyer chairs.'],
    'Damaged by use (or tired-looking). Styling word: vintage. Vintage ≠ a waived log.',
    ['shabby']
  ),
  worsen: L(
    'To worsen is to become, or make, worse: the weather worsened, worsen a shortage. Improve sits opposite; deteriorate is the close twin. A footer is comms; a blank cell is methods.',
    ['Delay will worsen the empty n; a disclaimer footer will not fill it.', 'Deteriorate is the close twin. Decline is milder. A footer is a line. A number is a cell. Fill the cell; then the small print.'],
    'Become or make worse. Close: deteriorate. A footer ≠ a filled n.',
    ['deteriorate']
  ),
  worship: L(
    'Worship is religious devotion; as a verb, to show that devotion, or to admire someone too much: a place of worship, worship a star. Revere (already in the dictionary) is deep respect without the cult. A famous PI is a person; an n is a number.',
    ['Do not worship a famous PI instead of filling the n.', 'Revere is already in this course (respect). Adore is warmer. A cult of personality is comms. A count is methods. Put the n in; then the profile if it still helps.'],
    'Religious devotion, or extreme admiration. Milder: revere (already in the dictionary). A profile ≠ a filled n.',
    ['revere']
  ),
  worthy: L(
    'Worthy means deserving respect, attention, or a specified thing (worthy of): a worthy winner, worthy of the name. Worth (already in the dictionary) is value; a prize with an invented n is still a methods failure.',
    ['A prize is not worthy of the name if the n is invented.', 'Deserving is everyday. Worth is already in this course (value). A prize is an award. A count is a file. Open the file; then engrave the cup.'],
    'Deserving (of). Noun cousin: worth (already in the dictionary). A cup ≠ an invented n.',
    ['deserving']
  ),
  wreck: L(
    'To wreck is to destroy or badly damage; as a noun, the remains of something destroyed: wreck a sitting, a wreck of a plan. Ruin is the close twin; a clash without a spare room is logistics, not décor.',
    ['A clash without a spare room will wreck the sitting.', 'Ruin is the close twin. Destroy is everyday. Décor is styling. A clash is a timetable fact. Keep the room; move the crew.'],
    'Destroy, or the remains of a destruction. Close: ruin. A clash without a room wrecks the sitting.',
    ['ruin']
  ),
  wrench: L(
    'A wrench is a sudden twist or pull, emotional pain, or (especially US) a spanner; as a verb, to twist suddenly: a wrench of the keys, an emotional wrench. Spanner is British for the tool; a handover is a named officer, not a tug.',
    ['A last-minute wrench of the keys still needs a named handover.', 'Spanner is the UK tool. Jerk is everyday. Pain is the feeling sense. A name is a log. Write the officer; then tug the bunch if you must.'],
    'A sudden twist, a tool, or emotional pain. UK tool: spanner. A tug ≠ a named handover.',
    ['spanner']
  ),
  wrestle: L(
    'To wrestle is to fight by holding and throwing, or to struggle with a problem (wrestle with): wrestle with a spreadsheet, wrestle with the raw file. Struggle is everyday; a rounded abstract is not a count.',
    ['Wrestle with the raw file; a rounded abstract is not a count.', 'Struggle is everyday. Grapple is the close twin. An abstract is a summary. A file is methods. Open the file; then round the sentence.'],
    'Struggle physically, or with a problem. Close: grapple. A rounded abstract ≠ a count.',
    ['grapple']
  ),
  wretched: L(
    'Wretched means very unhappy or ill, or of very poor quality: wretched conditions, a wretched pack. Miserable is everyday; excellent sits opposite. Sorry tone is manner; a blank n is methods.',
    ['A wretched pack with no n still fails methods, however sorry the tone.', 'Miserable is everyday. Woeful is a cousin. Tone is manner. A cell is a number. Fill the number; then apologise if you still need to.'],
    'Miserable, or of very poor quality. Everyday: miserable. Tone ≠ a filled n.',
    ['miserable']
  ),
  wrinkle: L(
    'A wrinkle is a small fold in skin or cloth, or a small problem in a plan: iron out the wrinkles, a wrinkle in the timetable. Hitch is the problem twin; a missing spare is a hole, not a crease.',
    ['Call a missing spare a methods hole, not a wrinkle.', 'Hitch is the problem twin. Crease is the cloth twin. A crease is small. An unnamed cell is cover. Write the name; then iron the cloth.'],
    'A small fold, or a small hitch. Problem twin: hitch. A missing spare is a hole, not a crease.',
    ['hitch']
  ),
  wrongdoing: L(
    'Wrongdoing is illegal or dishonest behaviour: alleged wrongdoing, corporate wrongdoing. Misconduct is the close twin; a tone issue is comms, not a pack breach.',
    ['Wrongdoing over pack security is a breach, not a “tone” issue.', 'Misconduct is the close twin. Crime is heavier. Tone is style. A seal is a log. Open the incident file; keep tone for the style guide.'],
    'Illegal or dishonest acts. Close: misconduct. Tone ≠ a pack breach.',
    ['misconduct']
  ),
  wry: L(
    'Wry means showing a dry, slightly mocking amusement; of a smile or face, twisted: a wry smile, wry humour. Witty (this batch) is cleverer and warmer; a caption does not repair a cell.',
    ['A wry caption does not repair an invented n.', 'Witty is this batch and brighter. Ironic is a cousin. A caption is a line. A count is a file. Put the real n in; then be dry if it still amuses.'],
    'Dryly mocking. Brighter twin: witty (this batch). A caption ≠ a repaired n.',
    ['ironic']
  ),
}
