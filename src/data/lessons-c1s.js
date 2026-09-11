const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1S = {
  vacant: L(
    'Vacant means empty and not in use: a vacant seat, a vacant post, a vacant stare. Empty is everyday; occupied sits opposite. A design pause is styling; an unnamed night cell is cover.',
    ['A vacant night cell on the rota is a cover hole, not a design pause.', 'Empty is everyday. Unoccupied is the room twin. A pause is a mood. A cell is a name. Write the spare; keep the pause for the foyer art.'],
    'Empty, or an unfilled post. Everyday: empty. A design pause ≠ cover.',
    ['unoccupied']
  ),
  vaccinate: L(
    'To vaccinate is to give a vaccine so as to protect against disease: vaccinate against measles, vaccinate staff with the autumn jab. Immunise (already in the dictionary) is the close UK twin; a poster is comms, not a jab log.',
    ['Vaccinate the field team before the visit; a foyer poster is not a jab log.', 'Immunise is already in this course (UK). Inoculate is older. A poster is branding. A batch number is a file. Log the dose; hang the poster on the stairs.'],
    'Give a protective vaccine. Close: immunise (already in the dictionary). A poster ≠ a jab log.',
    ['immunise']
  ),
  vague: L(
    'Vague means not clearly expressed, known, or remembered: a vague answer, a vague memory. Precise sits opposite; about two hundred is talk, not a count.',
    ['A vague n is still an empty cell; “about two hundred” is not a count.', 'Imprecise is the close twin. Hazy is milder. Talk is a corridor. A cell is a number. Write the figure; save about for the café.'],
    'Unclear or imprecise. Close: imprecise. “About two hundred” ≠ a count.',
    ['imprecise']
  ),
  validate: L(
    'To validate is to prove that something is true, accurate, or acceptable: validate a finding, validate a ticket. Valid (already in the dictionary) is the adjective; a crest is branding, not a check.',
    ['Validate the n against the raw file; a crest does not.', 'Confirm is everyday. Valid is already in this course (adjective). A crest is a logo. A file is methods. Open the file; then print the crest.'],
    'Confirm as true or acceptable. Adjective: valid (already in the dictionary). A crest ≠ a check.',
    ['confirm']
  ),
  validity: L(
    'Validity is the state of being logically or legally sound, or of measuring what it claims to measure: the validity of a test, legal validity. Valid (already in the dictionary) is the adjective; dropping a night slice silently is a methods hole.',
    ['Validity collapses if the night cohort is silently dropped from the n.', 'Soundness is the close twin. Reliability is consistency, not the same. A drop is a choice. A frame is a list. Name the exclusion, or put the nights back.'],
    'Soundness (logic, law, or measurement). Adjective: valid (already in the dictionary). A silent drop ≠ a valid n.',
    ['soundness']
  ),
  valuation: L(
    'A valuation is a formal judgement of how much something is worth: a property valuation, a brand valuation. Value (already in the dictionary) is everyday worth; a crest price is comms, not a methods budget.',
    ['A branding valuation of the crest is not a methods budget.', 'Value is already in this course. Appraisal is the close twin. A crest is a logo. A line in a budget is a number. Cost the fieldwork; then value the brand if you still must.'],
    'A formal estimate of worth. Everyday cousin: value (already in the dictionary). Branding ≠ a methods budget.',
    ['appraisal']
  ),
  vandalism: L(
    'Vandalism is deliberate damage to property, especially public property (usually uncountable): graffiti vandalism, criminal damage. Damage is milder and wider; youthful energy is a caption, not an incident file.',
    ['Vandalism of the badge printer is an incident log, not “youthful energy”.', 'Damage is milder. Sabotage is targeted. Energy is a story. A smashed reader is a log. Open the incident file; keep energy for the yearbook.'],
    'Deliberate damage to property. Milder: damage. “Energy” ≠ an incident log.',
    ['damage']
  ),
  vanity: L(
    'Vanity is too much pride in appearance or achievements, or the futility of something: vanity project, the vanity of fame. Pride is milder and not always a fault; a film still does not fill a cell.',
    ['Vanity about the film still does not fill an n.', 'Pride is milder. Conceit is harsher. A film is branding. A count is methods. Put the n in; then admire the lighting if it still helps.'],
    'Excessive pride, or futility. Milder: pride. A film ≠ a filled n.',
    ['conceit']
  ),
  variable: L(
    'A variable is a factor that can take different values in a study; as an adjective, likely to change: independent variable, variable weather. Vary (already in the dictionary) is the verb; a mood board is design, not a codebook.',
    ['Name each variable in the methods page; a mood board is not a codebook.', 'Vary is already in this course (verb). Factor is everyday. A board is colour. A name in a list is methods. Write the names; keep the board for the cover.'],
    'A changing factor (also: likely to change). Verb: vary (already in the dictionary). A mood board ≠ a codebook.',
    ['factor']
  ),
  variance: L(
    'Variance is the amount by which things differ; in statistics, a measure of spread; in UK planning, permission to depart from a rule: high variance, a planning variance. Variation (already in the dictionary) is the everyday twin; averaging a night out is not analysis.',
    ['Report the variance; averaging the night out is not analysis.', 'Variation is already in this course. Spread is everyday. An average can hide a slice. A night is a cohort. Show the spread; then average if the test allows it.'],
    'Difference, statistical spread, or a permitted departure. Close: variation (already in the dictionary). Averaging away a night ≠ analysis.',
    ['spread']
  ),
  variant: L(
    'A variant is a form that differs slightly from the main type: a spelling variant, a variant wording. Version (already in the dictionary) is wider; a vibe is not source text.',
    ['A variant wording on the occupancy cap is still the source text, not a vibe.', 'Version is already in this course and wider. Alternative is everyday. A vibe is a feeling. A clause is a file. Cite the clause; save the vibe for the foyer.'],
    'A slightly different form. Wider: version (already in the dictionary). A vibe ≠ the source wording.',
    ['version']
  ),
  varied: L(
    'Varied means including many different types, or changing often: a varied diet, a varied sample. Various (already in the dictionary) lists several items; a collage is design, not a frame.',
    ['A varied sample still needs each slice named; a collage is not a frame.', 'Various is already in this course (several). Diverse is the people twin. A collage is art. A named slice is methods. Write the slices; hang the collage on the stairs.'],
    'Made up of many different types. Cousin: various (already in the dictionary). A collage ≠ a frame.',
    ['diverse']
  ),
  vault: L(
    'A vault is a secure room for valuables or archives; also an arched roof, or (verb) to jump over: a strong-room vault, a vaulted ceiling. Safe is everyday and smaller; an unlocked cupboard is not a sealed room.',
    ['Scripts in an unlocked vault are not in a sealed room.', 'Strong room is the close twin. Safe is smaller. A cupboard is furniture. A seal is a log. Lock the door; then archive.'],
    'A secure archive room (also: arched roof / jump). Close: strong room. Unlocked ≠ sealed.',
    ['strong room']
  ),
  vegetation: L(
    'Vegetation is plants in general in a particular area (usually uncountable): dense vegetation, site vegetation. Plants is everyday; décor is styling, not a planning constraint.',
    ['Site vegetation is a planning constraint, not foyer décor.', 'Plants is everyday. Flora is the biology twin. Décor is a vase. A constraint is a drawing. Keep the trees on the plan; then dress the foyer.'],
    'Plant cover in an area. Everyday: plants. Décor ≠ a planning constraint.',
    ['flora']
  ),
  velocity: L(
    'Velocity is speed in a particular direction; in commentary, how fast something is moving: escape velocity, the velocity of a campaign. Speed is everyday and has no direction; a press pack is comms, not a lifted embargo.',
    ['Velocity of the press pack does not lift the embargo.', 'Speed is everyday. Pace is a cousin. A pack is a mailing. Midnight is a clock. Wait for the lift; then send.'],
    'Speed in a given direction. Everyday: speed. A fast pack ≠ a lifted embargo.',
    ['speed']
  ),
  vendor: L(
    'A vendor is a person or firm that sells something, especially to an organisation: a software vendor, a street vendor. Seller is everyday; a smiling stall is branding, not a contract.',
    ['The badge vendor is a named contractor; a smiling stall is not a contract.', 'Seller is everyday. Supplier is the close twin. A stall is a photograph. A purchase order is a file. Name the firm; keep the smile for the prospectus.'],
    'A seller (especially to an organisation). Close: supplier. A stall photo ≠ a contract.',
    ['supplier']
  ),
  veneer: L(
    'A veneer is a thin covering of better material, or a superficial appearance that hides something worse: oak veneer, a veneer of calm. Surface is everyday; a consultation film is comms, not a signed minute.',
    ['A veneer of consultation is not a signed ethics minute.', 'Facade is the close twin. Surface is everyday. A film is branding. A signature is a log. Get the name; then shoot the film if you still want to.'],
    'A thin covering, or a false appearance. Close: facade. A film ≠ a signed minute.',
    ['facade']
  ),
  vent: L(
    'To vent is to express a strong feeling; as a noun, an opening for air or gas: vent anger, a steam vent. Express is milder; a debrief is talk, a spare’s name is a log.',
    ['Vent frustration in the debrief; the minute still needs the spare’s name.', 'Express is milder. Let off steam is informal. A debrief is talk. A cell is a name. Write the name; then vent if you must.'],
    'Let out feeling (also: an air opening). Milder: express. A debrief ≠ a named spare.',
    ['express']
  ),
  ventilate: L(
    'To ventilate is to let fresh air into a room, or (formal) to discuss an issue openly: ventilate a hall, ventilate a grievance. Air is everyday; a scented candle is styling, not an air-change log.',
    ['Ventilate the hall to the stated rate; a scented candle is not a log.', 'Air is everyday. Discuss is the debate twin. A candle is décor. A rate is a certificate. Meet the rate; then scent the foyer if you still wish.'],
    'Air a room, or air an issue. Everyday: air. A candle ≠ an air-change log.',
    ['air']
  ),
  verge: L(
    'A verge is the edge of a road or path; on the verge of means very close to happening: a grass verge, on the verge of collapse. Brink is the close twin; a launch film is still before midnight.',
    ['On the verge of a launch is still before midnight; the embargo holds.', 'Brink is the close twin. Edge is everyday. A launch is comms. A clock is the rule. Wait for the lift; then roll the film.'],
    'An edge, or very close to (on the verge of). Close: brink. Almost launching ≠ a lifted embargo.',
    ['brink']
  ),
  verify: L(
    'To verify is to check that something is true or accurate: verify a figure, verify identity. Check is everyday; a vibe of space is not an occupancy cap.',
    ['Verify the occupancy against the certificate; a vibe of space is not a cap.', 'Check is everyday. Confirm is a cousin. A vibe is a feeling. A certificate is a number. Keep the number; save the vibe for the tour.'],
    'Check that it is true. Everyday: check. A vibe ≠ a cap.',
    ['check']
  ),
  versatile: L(
    'Versatile means able to be used in many ways, or able to do many different things: a versatile tool, a versatile colleague. Flexible is milder; a multi-skilled spare still needs a name on the night cell.',
    ['A versatile spare still has to be named on the night cell.', 'Flexible is milder. Adaptable is a cousin. Multi-skilled is a CV word. A cell is a log. Write the name; then praise the range.'],
    'Able to do or be used in many ways. Milder: flexible. Range ≠ an unnamed cell.',
    ['adaptable']
  ),
  veto: L(
    'A veto is an official refusal to allow a decision; as a verb, to refuse in that way: a presidential veto, veto a motion. Refusal is everyday; a mood in the lobby is not a minute.',
    ['A chair’s veto is a minute; a mood in the lobby is not.', 'Refusal is everyday. Block is informal. A mood is a feeling. A determination is a paper. Minute the block; archive the corridor.'],
    'An official block on a decision. Everyday: refusal. A lobby mood ≠ a minute.',
    ['refusal']
  ),
  vicinity: L(
    'Vicinity is the area around a place (in the vicinity of): in the vicinity of the hall. Neighbourhood is everyday; a campus map is wayfinding, not a fire plan for the hall next door.',
    ['Halls in the vicinity still need their own fire plan; a campus map is not cover.', 'Neighbourhood is everyday. Surroundings is a cousin. A map is wayfinding. An exit is a certificate. Plan each hall; then print the map.'],
    'The surrounding area. Everyday: neighbourhood. A campus map ≠ cover for the next hall.',
    ['neighbourhood']
  ),
  vicious: L(
    'Vicious means violent and cruel; a vicious circle is a process that causes its own worsening: a vicious attack, a vicious circle of debt. Cruel is everyday; grit is a poster word, not a paid night.',
    ['A vicious circle of unpaid nights is a rota fact, not “grit”.', 'Cruel is everyday. Brutal is hotter. Grit is comms. An unpaid cell is HR. Staff the night; keep grit for the interview.'],
    'Cruel, or self-worsening (vicious circle). Everyday: cruel. Grit copy ≠ a paid night.',
    ['cruel']
  ),
  victor: L(
    'A victor is the person or side that wins a contest, election, or war (formal): the election victor. Winner is everyday; a victory film is comms, not a filled n.',
    ['The victor in the ballot still owes the n, not a victory film.', 'Winner is everyday. Champion is sport. A film is branding. A count is methods. Put the n in; then cut the film.'],
    'The winner (formal). Everyday: winner. A victory film ≠ a filled n.',
    ['winner']
  ),
  vigilant: L(
    'Vigilant means watching carefully for possible danger or problems: remain vigilant, a vigilant officer. Alert is everyday; a slogan is comms, not a named invigilator.',
    ['Vigilant invigilation is a named officer in the room, not a slogan.', 'Alert is everyday. Watchful is a cousin. A slogan is a line. A name on a door list is cover. Staff the room; hang the slogan in the foyer.'],
    'Watchfully alert. Everyday: alert. A slogan ≠ a named officer.',
    ['watchful']
  ),
  vigorous: L(
    'Vigorous means strong, energetic, and determined: vigorous exercise, a vigorous defence. Energetic is everyday; loud comms are branding, not a named spare.',
    ['Vigorous comms do not replace a named spare.', 'Energetic is everyday. Robust is the policy twin. Comms is a channel. A cell is a name. Write the name; then raise the volume if you must.'],
    'Strong and energetic. Everyday: energetic. Loud comms ≠ a named spare.',
    ['energetic']
  ),
  viral: L(
    'Viral means caused by a virus, or (of content) spreading very fast online: a viral infection, a viral clip. Contagious is the disease cousin; a clip before midnight is still a leak.',
    ['A viral clip before midnight is still an embargo breach.', 'Infectious is the disease twin. Popular is milder. A clip is a file. Midnight is the rule. Wait for the lift; then post.'],
    'Of a virus, or spreading fast online. A clip before midnight ≠ a lifted embargo.',
    ['infectious']
  ),
  vocal: L(
    'Vocal means expressing opinions strongly and openly; also of the voice: a vocal critic, vocal cords. Outspoken is the close twin; lobby noise does not rewrite a cap.',
    ['Vocal support in the lobby does not rewrite the occupancy cap.', 'Outspoken is the close twin. Loud is cruder. Support is a feeling. A cap is a certificate. Keep the number; then cheer if it still helps.'],
    'Outspoken (also: of the voice). Close: outspoken. Lobby noise ≠ a rewritten cap.',
    ['outspoken']
  ),
  vocation: L(
    'A vocation is work you feel strongly suited to, often with a sense of calling: a vocation for teaching, miss one’s vocation. Career is everyday and cooler; a calling slide is comms, not a rest-day.',
    ['A vocation slide is not a rest-day on the rota.', 'Career is everyday. Calling is the close twin. A slide is a deck. A rest-day is a cell. Write the day; keep vocation for the prospectus.'],
    'Work felt as a calling. Everyday: career. A slide ≠ a rest-day.',
    ['calling']
  ),
  void: L(
    'Void means not legally valid, or empty; as a noun, a gap: a contract is void, a void in the record. Invalid is the close twin; a glossy pack does not staff a room.',
    ['A sitting without a named invigilator is void, however glossy the pack.', 'Invalid is the close twin. Empty is everyday. Gloss is design. A name is a log. Staff the room; then print the pack.'],
    'Not valid, or empty / a gap. Close: invalid. Gloss ≠ a staffed sitting.',
    ['invalid']
  ),
  volatile: L(
    'Volatile means likely to change suddenly and unpredictably; of a substance, easily becoming vapour: a volatile market, a volatile solvent. Unstable (already in the dictionary) is close; agile is a culture word, not cover.',
    ['A volatile night rota is a cover failure, not “agile culture”.', 'Unstable is already in this course. Erratic is a cousin. Culture is a story. A hole on the grid is cover. Write the name; keep agile for the away-day.'],
    'Unpredictably changeable (also: easily vapourised). Close: unstable (already in the dictionary). Agile copy ≠ cover.',
    ['unstable']
  ),
  ideological: L(
    'Ideological means relating to a system of political or social beliefs: an ideological split, ideological opposition. Ideology (already in the dictionary) is the noun; a preface is opinion, not a count.',
    ['An ideological preface does not fill an n.', 'Ideology is already in this course (noun). Political is wider. A preface is a stance. A cell is a number. Put the n first; then argue the creed.'],
    'Of a belief system. Noun: ideology (already in the dictionary). A preface ≠ a filled n.',
    ['doctrinal']
  ),
  ignite: L(
    'To ignite is to start burning, or to cause strong feeling or conflict to start: ignite a fuel, ignite debate. Light is everyday; spark is the metaphor twin. Debate after the minute; not instead of it.',
    ['Ignite debate after the ethics minute, not instead of it.', 'Light is everyday. Spark is the close twin. Debate is talk. A minute is a file. Sign first; then strike the match.'],
    'Set alight, or spark strong feeling. Close: spark. Debate ≠ a skipped minute.',
    ['spark']
  ),
  illegitimate: L(
    'Illegitimate means not allowed by law or rules; formerly, of a child, born to unmarried parents: illegitimate authority, an illegitimate waiver. Illegal is everyday and close; a napkin scrawl is not a certificate.',
    ['An illegitimate waiver scrawled on a napkin is not a fire certificate.', 'Illegal is everyday. Unlawful is already in this course. A napkin is paper from lunch. A certificate is a number. Keep the certificate; bin the napkin.'],
    'Not lawful or not properly authorised. Everyday: illegal. A napkin ≠ a fire certificate.',
    ['unlawful']
  ),
  illiterate: L(
    'Illiterate means unable to read or write; also ignorant in a particular field: computer-illiterate, statistically illiterate. Literate sits opposite; a page with no n still fails audit.',
    ['An illiterate methods page — no n, no frame — still fails audit.', 'Uneducated is wider and ruder. Literate sits opposite. A page is a file. A frame is a list. Name the list; then decorate the prose.'],
    'Unable to read, or ignorant in a field. Opposite: literate. No n ≠ a methods page.',
    ['unlettered']
  ),
  immature: L(
    'Immature means not fully developed, or childish for the person’s age: an immature crop, immature behaviour. Childish is everyday and ruder; joking does not unseal a pack.',
    ['Immature joking in the hall is still a pack-security breach if a seal is broken.', 'Childish is everyday. Juvenile is a cousin. Joking is manner. A seal is a log. Keep the seal; save the joke for after the hour.'],
    'Not fully grown, or childish. Everyday: childish. A joke ≠ a broken seal.',
    ['childish']
  ),
  immoral: L(
    'Immoral means not considered morally acceptable: immoral conduct, an immoral trade-off. Unethical is the professional twin; character copy does not replace a night bus.',
    ['Immoral to cut the night bus and call it “character”.', 'Unethical is the workplace twin. Wrong is everyday. Character is a poster word. A route is a timetable. Reinstate the bus; keep character for the assembly.'],
    'Morally wrong. Close: unethical. “Character” ≠ a cut night bus.',
    ['unethical']
  ),
  immortal: L(
    'Immortal means living or lasting forever, or (of fame) never forgotten: immortal souls, an immortal line. Eternal is the close twin; a prospectus line does not freeze a fire plan.',
    ['An immortal line in the prospectus does not freeze a fire plan.', 'Eternal is the close twin. Lasting is milder. A line is comms. An exit is a certificate. Keep the plan dated; then quote the line.'],
    'Lasting forever (life or fame). Close: eternal. A prospectus line ≠ a frozen fire plan.',
    ['eternal']
  ),
  impede: L(
    'To impede is to delay or block the progress of something: impede traffic, impede escape. Hinder is the close twin; a wedge is a log, not a styling note.',
    ['A wedge in the fire door will impede escape; styling is not a log.', 'Hinder is the close twin. Block is stronger. Styling is paint. An exit must open. Pull the wedge; write the time.'],
    'Slow or block progress. Close: hinder. Styling ≠ a clear exit.',
    ['hinder']
  ),
  impending: L(
    'Impending means about to happen, usually something unpleasant (formal): impending cuts, impending publication. Imminent (already in the dictionary) is the close twin; almost midnight is still before the lift.',
    ['Impending publication is still before midnight; wait for the lift.', 'Imminent is already in this course. Upcoming is milder and not gloomy. A clock is the rule. A lift is a timestamp. Wait; then publish.'],
    'About to happen (usually unwelcome). Close: imminent (already in the dictionary). Almost midnight ≠ a lift.',
    ['imminent']
  ),
  imperative: L(
    'Imperative means extremely important and needing immediate action; also a grammar mood, or (noun) a vital duty: it is imperative that, the categorical imperative. Essential is everyday; a vision slide is not cover.',
    ['It is imperative to name the spare; a vision slide is not cover.', 'Essential is everyday. Vital is already in this course (B2) and close. A slide is a deck. A cell is a name. Write the name; then the vision if it still fits.'],
    'Vital and urgent (also: grammar mood). Everyday: essential. A vision slide ≠ cover.',
    ['essential']
  ),
  impersonal: L(
    'Impersonal means not showing personal feeling, or not linked to a particular person: an impersonal letter, impersonal forces. Personal sits opposite; a vibe of welcome is not a cap.',
    ['An impersonal occupancy cap is still a number, not a vibe of welcome.', 'Detached is a cousin. Cold is ruder. Welcome is a feeling. A cap is a certificate. Keep the number; smile at the door if you still wish.'],
    'Without personal feeling (also: not person-specific). Opposite: personal. Welcome ≠ a cap.',
    ['detached']
  ),
  implant: L(
    'To implant is to put something into the body in a medical procedure, or to fix an idea in someone’s mind: implant a device, implant an idea. Insert (already in the dictionary) is everyday and physical; a rounded n in an abstract is still a methods fiction.',
    ['Do not implant a rounded n in the abstract before the file is counted.', 'Insert is already in this course (put inside). Inculcate is the idea twin. An abstract is a summary. A file is a count. Count first; then round the sentence.'],
    'Insert in the body, or fix an idea in the mind. Physical cousin: insert (already in the dictionary). A rounded abstract ≠ a count.',
    ['insert']
  ),
  implicate: L(
    'To implicate is to show that someone is involved in a crime or fault (implicate in); also to suggest as a consequence. Implication (already in the dictionary) is the noun; low motivation is a story, the rota is a file.',
    ['Do not implicate the night cohort in “low motivation” without the rota in the annex.', 'Implication is already in this course (noun). Involve is already in this course and milder. Motivation is a caption. A rota is a grid. Attach the grid; then write the sentence.'],
    'Show involvement in a fault (also: entail). Noun: implication (already in the dictionary). A caption ≠ an annex.',
    ['incriminate']
  ),
  imposing: L(
    'Imposing means large and impressive in appearance: an imposing building, an imposing crest. Impose (already in the dictionary) is the verb (force something on someone) — different family in use. A crest is branding; a cap is a number.',
    ['An imposing crest does not waive the occupancy cap.', 'Impressive is milder. Grand is a cousin. Impose is already in this course (verb: force). A crest is a logo. A cap is a certificate. Keep the number; then hang the crest.'],
    'Large and impressive to look at. Mix-up: impose (already in the dictionary, verb). A crest ≠ a waived cap.',
    ['impressive']
  ),
  imprint: L(
    'An imprint is a mark left by pressure, a lasting effect, or a publisher’s brand name: a muddy imprint, leave an imprint, a university imprint. Mark is everyday; a foyer campaign is comms, not a sampling frame.',
    ['A foyer imprint of the campaign is not a sampling frame.', 'Mark is everyday. Impression is a cousin. A campaign is branding. A list with a date is a frame. Name the list; hang the banner on the stairs.'],
    'A lasting mark, effect, or publisher’s brand. Everyday: mark. A foyer campaign ≠ a frame.',
    ['impression']
  ),
  improbable: L(
    'Improbable means not likely to be true or to happen: an improbable story, highly improbable. Unlikely is everyday; a warm film does not pass an empty n.',
    ['It is improbable that an empty n will pass audit, however warm the film.', 'Unlikely is everyday. Implausible is the story twin. A film is branding. A cell is a number. Fill the cell; then warm the lighting.'],
    'Unlikely. Everyday: unlikely. A warm film ≠ a passing audit.',
    ['unlikely']
  ),
  improper: L(
    'Improper means not suitable, honest, or in accordance with rules: improper use, improper access. Inappropriate (already in the dictionary) is milder and more social; a styling note is design, not a pack hour.',
    ['Improper access to packs before the hour is a breach, not a styling note.', 'Inappropriate is already in this course and milder. Unseemly is older. Styling is paint. An hour is a clock. Wait for the hour; then open the pack.'],
    'Against rules or not suitable. Milder: inappropriate (already in the dictionary). Styling ≠ a pack hour.',
    ['inappropriate']
  ),
  inaccessible: L(
    'Inaccessible means impossible or very hard to reach, obtain, or understand: inaccessible terrain, inaccessible jargon. Accessible sits opposite; a caption does not restore a night bus.',
    ['An inaccessible night bus is a catchment exclusion, not a caption.', 'Unreachable is the place twin. Obscure is the meaning twin. A caption is a line. A route is a timetable. Name the exclusion, or restore the bus.'],
    'Hard or impossible to reach or obtain. Opposite: accessible. A caption ≠ a night bus.',
    ['unreachable']
  ),
  inaugural: L(
    'Inaugural means marking the beginning of an important job, event, or institution: an inaugural lecture, an inaugural sitting. First is everyday; a launch film is comms, not an ethics signature.',
    ['An inaugural film still needs the ethics minute signed first.', 'First is everyday. Opening is a cousin. A film is branding. A minute is a file. Sign first; then roll the camera.'],
    'Marking a formal beginning. Everyday: first. A film ≠ a signed minute.',
    ['opening']
  ),
  incapable: L(
    'Incapable means not able to do something (incapable of): incapable of deceit, incapable of covering a night. Unable is everyday; a slogan does not staff a cell.',
    ['A slogan is incapable of staffing a night cell.', 'Unable is everyday. Incompetent is a skills judgement. A slogan is a line. A cell is a name. Write the name; hang the slogan in the foyer.'],
    'Not able (incapable of). Everyday: unable. A slogan ≠ a staffed cell.',
    ['unable']
  ),
  incline: L(
    'To incline is to lean or slope, or to tend to think or behave in a particular way (incline to / towards): the land inclines, incline towards caution. Inclination (already in the dictionary) is the noun; a rounded abstract is not a count.',
    ['Incline towards the raw file; a rounded abstract is not a count.', 'Inclination is already in this course (noun). Tend is everyday. An abstract is a summary. A file is methods. Open the file; then round the sentence.'],
    'Lean, or tend towards a view. Noun: inclination (already in the dictionary). A rounded abstract ≠ a count.',
    ['tend']
  ),
  incomprehensible: L(
    'Incomprehensible means impossible or extremely difficult to understand: incomprehensible jargon, incomprehensible to outsiders. Unintelligible is the close twin; a collage will not decode a codebook.',
    ['An incomprehensible codebook is still a methods fail; a collage will not decode it.', 'Unintelligible is the close twin. Opaque is a cousin. A collage is art. A codebook is a list. Write the labels; hang the collage on the stairs.'],
    'Impossible to understand. Close: unintelligible. A collage ≠ a codebook.',
    ['unintelligible']
  ),
  inconceivable: L(
    'Inconceivable means impossible to imagine or believe: it is inconceivable that. Unthinkable is the close twin; a rehearsal is practice, not a lifted embargo.',
    ['It is inconceivable to publish before midnight and call it a rehearsal.', 'Unthinkable is the close twin. Unimaginable is a cousin. A rehearsal is practice. Midnight is a clock. Wait for the lift; then rehearse the hall if you must.'],
    'Impossible to imagine. Close: unthinkable. A rehearsal ≠ a lifted embargo.',
    ['unthinkable']
  ),
  inconclusive: L(
    'Inconclusive means not leading to a clear decision or result: inconclusive evidence, inconclusive talks. Decisive sits opposite; thin night data still belong in the n.',
    ['Inconclusive night data still belong in the n; do not average them away.', 'Indecisive is of people. Tentative is milder. A night is a slice. An average can hide it. Show the slice; then average if the test allows it.'],
    'Not producing a clear result. Opposite: conclusive. Averaging away nights ≠ analysis.',
    ['indecisive']
  ),
  inconsistency: L(
    'Inconsistency is the fact of not matching or not staying the same, or a specific mismatch: inconsistency in the accounts, a glaring inconsistency. Inconsistent (already in the dictionary) is the adjective; a lobby story does not rewrite a cell.',
    ['Inconsistency between the lobby story and the cell is a methods hole.', 'Inconsistent is already in this course (adjective). Contradiction is hotter. A story is talk. A cell is a number. Open the file; archive the corridor.'],
    'A mismatch, or lack of steadiness. Adjective: inconsistent (already in the dictionary). A lobby story ≠ a cell.',
    ['contradiction']
  ),
  incorrect: L(
    'Incorrect means wrong; not accurate or true: an incorrect figure, an incorrect answer. Incorrectly (already in the dictionary) is the adverb; a witty caption does not repair a void paper.',
    ['An incorrect candidate number voids the paper; a witty caption does not repair it.', 'Incorrectly is already in this course (adverb). Wrong is everyday. A caption is a line. A number is a bubble. Fill the bubble; then be witty if it still amuses.'],
    'Wrong; not accurate. Adverb: incorrectly (already in the dictionary). A caption ≠ a repaired paper.',
    ['wrong']
  ),
  incumbent: L(
    'An incumbent is the person who currently holds a particular official position; incumbent on means required of: the incumbent mayor, it is incumbent on us. Holder is everyday; a title on a door is not a signature.',
    ['The incumbent exams officer signs the log; a title on a door is not a signature.', 'Office-holder is the close twin. Current is milder. A plate is furniture. A swipe is a file. Sign the log; then hang the plate.'],
    'The current office-holder (also: required of). Everyday: office-holder. A door plate ≠ a signature.',
    ['office-holder']
  ),
  indecent: L(
    'Indecent means offensive in a sexual way, or (indecent haste) unreasonably quick and improper: indecent images, indecent haste. Improper (this batch) is wider; midnight is a clock, not a mood of hurry.',
    ['Indecent haste before midnight is still an embargo breach.', 'Improper is this batch and wider. Obscene is stronger. Haste is a feeling of speed. A timestamp is the rule. Wait for the lift; then publish.'],
    'Sexually offensive, or improperly hasty. Wider: improper (this batch). Haste ≠ a lifted embargo.',
    ['improper']
  ),
  indictment: L(
    'An indictment is a formal accusation of a serious crime, or a sign that a system is badly at fault (an indictment of): a criminal indictment, an indictment of the process. Charge is everyday; printer colour is design, not methods.',
    ['An empty n is an indictment of the methods page, not of the printer’s colour.', 'Charge is everyday. Accusation is wider. Colour is design. A blank cell is methods. Fill the cell; then choose the ink.'],
    'A formal charge, or a damning sign. Everyday: charge. Printer colour ≠ methods.',
    ['accusation']
  ),
  indignation: L(
    'Indignation is anger at something considered unfair or wrong: public indignation, righteous indignation. Indignant (already in the dictionary, C2) is the adjective; lobby anger does not rewrite a cap.',
    ['Indignation in the lobby does not rewrite the occupancy cap.', 'Anger is everyday. Outrage is hotter. A lobby is talk. A cap is a certificate. Keep the number; minute the protest if it still matters.'],
    'Anger at perceived unfairness. Adjective (C2): indignant. Lobby anger ≠ a rewritten cap.',
    ['outrage']
  ),
  indirect: L(
    'Indirect means not done or said in a straight or obvious way, or not taking the shortest route: an indirect remark, an indirect route. Direct sits opposite; a tweet that names a grade is still a leak.',
    ['Indirect praise in a tweet is still a leak if it names the grade before midnight.', 'Oblique is the close twin. Roundabout is informal. Praise is a feeling. A grade is an embargo. Wait for the lift; then praise in public.'],
    'Not straight or not obvious. Close: oblique. Soft praise ≠ a lifted embargo.',
    ['oblique']
  ),
  indulge: L(
    'To indulge is to allow yourself or someone else to have something enjoyable: indulge in chocolate, indulge a child. Treat is everyday; a film crew is comms, not a filled n.',
    ['Indulge the film crew after the n is in, not instead of it.', 'Treat is everyday. Spoil is ruder. A crew is branding. A cell is a number. Fill the cell; then roll the camera.'],
    'Allow a pleasure, or give in to someone. Everyday: treat. A film crew ≠ a filled n.',
    ['treat']
  ),
  inhuman: L(
    'Inhuman means extremely cruel, or lacking human warmth: inhuman conditions, an inhuman rota. Cruel is everyday; resilience is a poster word, not a relief hour.',
    ['An inhuman night rota with no relief hour is a staffing minute, not “resilience”.', 'Cruel is everyday. Brutal is hotter. Resilience is comms. A relief hour is a cell. Write the hour; keep resilience for the interview.'],
    'Cruelly lacking human care. Everyday: cruel. Resilience copy ≠ a relief hour.',
    ['cruel']
  ),
  innate: L(
    'Innate means existing from birth; natural rather than learned: innate ability, innate caution. Inborn is the close twin; flair is a story, a slice is a frame.',
    ['Innate “flair” is not a sampling frame; name the slice.', 'Inborn is the close twin. Inherent is already in this course (built in). Flair is a caption. A slice is a list. Write the list; keep flair for the profile.'],
    'Inborn; not learned. Close: inborn. Cousin: inherent (already in the dictionary). Flair ≠ a frame.',
    ['inborn']
  ),
  inquire: L(
    'To inquire is to ask for information, especially formally. UK also uses enquire for ordinary asking; inquire often marks an official investigation. Inquiry (already in the dictionary) is the noun; a corridor chat is not a minute.',
    ['Inquire in writing; a corridor chat is not an inquiry minute.', 'Enquiry / inquire: UK spelling split (enquire everyday; inquire official). Inquiry is already in this course (noun). A corridor is talk. A minute is a file. Write the request; then chat if you still need to.'],
    'Ask, especially formally or officially. Noun: inquiry (already in the dictionary). A corridor chat ≠ a minute.',
    ['enquire']
  ),
  insane: L(
    'Insane means seriously mentally ill (use with care; dated or clinical), or informal: extremely unreasonable: an insane risk. Mad is informal; a rebrand is comms, not a licence to invent an n.',
    ['Publishing an invented n is an insane methods choice, not a bold rebrand.', 'Unreasonable is safer in academic prose. Mad is informal. A rebrand is a logo. A count is a file. Put the real n in; then rebrand if it still helps.'],
    'Mentally ill, or wildly unreasonable. Safer academic: unreasonable. A rebrand ≠ an invented n.',
    ['unreasonable']
  ),
  inscribe: L(
    'To inscribe is to write or cut words on a surface, or to dedicate a book to someone: inscribe a name, inscribe a volume. Write is everyday; a vibe is not a certificate figure.',
    ['Inscribe the occupancy figure on the certificate; do not leave it as a vibe.', 'Write is everyday. Engrave is the cut twin. A vibe is a feeling. A figure is a number. Cut the number; save the vibe for the tour.'],
    'Write or cut words onto something. Everyday: write. A vibe ≠ a certificate figure.',
    ['engrave']
  ),
  interface: L(
    'An interface is a point where two systems meet, or the layout through which a user controls software: a user interface, the interface between teams. Interact (already in the dictionary) is the verb; a friendly animation is not a badge swipe.',
    ['The portal interface still needs a badge log; a friendly animation is not a swipe.', 'Interact is already in this course (verb). Screen is everyday. An animation is design. A swipe is a file. Log the swipe; then animate if it still helps.'],
    'A meeting-point of systems, or a software screen. Verb cousin: interact (already in the dictionary). An animation ≠ a swipe log.',
    ['junction']
  ),
  interim: L(
    'Interim means temporary, until a final arrangement; as a noun, the intervening period (in the interim): an interim report, an interim chair. Temporary is everyday; soon is talk, not a named cell.',
    ['An interim spare still has to be named; “soon” is not a cell.', 'Temporary is everyday. Provisional is a cousin. Soon is a promise. A cell is a name. Write the name; then hire the permanent if the board agrees.'],
    'Temporary, until the final arrangement. Everyday: temporary. “Soon” ≠ a named cell.',
    ['temporary']
  ),
  intimate: L(
    'Intimate (/ˈɪntɪmət/) means private and personal, or having very close knowledge; the verb (/ˈɪntɪmeɪt/) means to hint: intimate details, intimate knowledge of, intimate that. Personal is everyday; knowing the hall is not the same as a number on paper.',
    ['Intimate knowledge of the hall still needs the occupancy number on paper.', 'Personal is everyday. Close is milder. Intimidate is already in this course and different (frighten). Knowledge is a claim. A number is a certificate. Write the number; then describe the hall.'],
    'Private, or closely knowing (verb: hint). Mix-up: intimidate (already in the dictionary). Knowledge ≠ a certificate number.',
    ['personal']
  ),
  intolerant: L(
    'Intolerant means not willing to accept behaviour, beliefs, or people you disagree with; also unable to take a food or drug: intolerant of dissent, lactose-intolerant. Tolerant sits opposite; clarity is a caption, not a dropped cohort.',
    ['An intolerant cut of the night cohort from the n is a methods choice, not “clarity”.', 'Bigoted is hotter. Allergic is the medical twin. Clarity is a slogan. A cohort is a slice. Name the exclusion, or put the nights back.'],
    'Unwilling to accept difference (also: physically unable to tolerate). Opposite: tolerant. “Clarity” ≠ a dropped cohort.',
    ['bigoted']
  ),
  intricate: L(
    'Intricate means having many small parts or details put together in a complicated way: an intricate pattern, an intricate argument. Complicated is everyday; a palette is colour, not a filled cell.',
    ['An intricate palette does not hide a blank n.', 'Complicated is everyday. Elaborate is a cousin. A palette is design. A cell is a number. Fill the number; then choose the grey.'],
    'Complicated in its small parts. Everyday: complicated. A palette ≠ a hidden n.',
    ['complicated']
  ),
  intrigue: L(
    'Intrigue (/ˈɪntriːɡ/) is secret plotting; the verb (/ɪnˈtriːɡ/) means to interest someone a great deal: political intrigue, intrigue the reader. Plot is everyday; a corridor scheme is not an ethics minute.',
    ['Corridor intrigue is not an ethics minute.', 'Plot is everyday. Fascinate is the verb twin. A corridor is talk. A minute is a file. Sign the paper; then gossip if you still must.'],
    'Secret plotting (verb: fascinate). Everyday: plot. A corridor ≠ a minute.',
    ['plot']
  ),
  intrude: L(
    'To intrude is to enter a place or situation where you are not wanted (intrude on / upon): intrude on a meeting, lifestyle copy that intrudes. Interrupt (already in the dictionary) is of speech; lifestyle copy is comms, not a filled n.',
    ['Do not let lifestyle copy intrude on an empty n.', 'Interrupt is already in this course (speech). Invade is stronger. Copy is branding. A cell is a number. Fill the cell; then run the lifestyle page.'],
    'Enter where you are not wanted. Speech cousin: interrupt (already in the dictionary). Lifestyle copy ≠ a filled n.',
    ['encroach']
  ),
  intuition: L(
    'Intuition is the ability to know something without conscious reasoning: trust your intuition, intuition about a result. Instinct (already in the dictionary) is more bodily; a hunch is not a codebook.',
    ['Intuition is not a codebook; name the variable.', 'Instinct is already in this course and more bodily. Hunch is informal. A feeling is talk. A variable is a name. Write the name; then admit the hunch in the limitations.'],
    'Knowing without conscious reasoning. Close: instinct (already in the dictionary). A hunch ≠ a codebook.',
    ['instinct']
  ),
  invoke: L(
    'To invoke is to use a law, right, or reason in support of something; also to call on a higher power, or cause a program to run: invoke a clause, invoke a procedure. Cite is milder; a sad caption is not an application form.',
    ['Invoke special consideration on the form; a sad caption is not an application.', 'Cite is milder. Appeal to is a cousin. A caption is a line. A form is a file. Submit the form; then write the caption if it still helps.'],
    'Call a rule or right into use. Milder: cite. A caption ≠ an application.',
    ['cite']
  ),
  inward: L(
    'Inward means towards the inside, or (of thoughts) private rather than shown: inward mail, inward reflection. Inner (already in the dictionary) is close; a debrief feeling does not name a spare.',
    ['Inward reflection in the debrief does not replace the spare’s name on the log.', 'Inner is already in this course. Internal is already in this course and more organisational. Reflection is talk. A log is a file. Write the name; then reflect if you still need to.'],
    'Towards the inside, or private (of thought). Close: inner (already in the dictionary). Reflection ≠ a named spare.',
    ['inner']
  ),
}
