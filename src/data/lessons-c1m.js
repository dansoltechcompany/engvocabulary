const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1M = {
  sacred: L(
    'Sacred means connected with religion, or treated as too important to interfere with: a sacred text, a sacred duty, nothing is sacred. Holy is the religious twin; precious is everyday and thinner. Secular (already in the dictionary) sits opposite the religious sense. Do not call a branding colour sacred, and do not treat an embargo as optional décor.',
    ['The embargo date is treated as sacred; a courtesy leak is still a leak.', 'Holy is of religion. Untouchable is informal. A duty can be solemn without being sacred. A fire certificate is law, not liturgy. A leak dressed as courtesy is still a leak.'],
    'Holy; or too important to touch. Everyday: precious. Opposite (religion): secular (already in the dictionary). An embargo is a date, not décor.',
    ['holy']
  ),
  sacrifice: L(
    'To sacrifice is to give up something valuable for a more important aim: sacrifice sleep, sacrifice accuracy. Give up is everyday; forgo is a formal cousin. A sacrifice (noun) is the thing given up, or a religious offering. Do not sacrifice the n to tidy an abstract, and do not call a cut “efficiency” if it removes cover.',
    ['Do not sacrifice the night-shift n to keep the abstract tidy.', 'Give up is everyday. Trade off names both sides. A martyr is a person, not a methods choice. Losing cover is a risk register line. Tidiness in a PDF is not a higher aim than the count.'],
    'Give up something of value. Everyday: give up. Noun: a sacrifice. The n is not optional décor for a tidy abstract.',
    ['forgo']
  ),
  safeguard: L(
    'A safeguard is a rule or measure that protects: a legal safeguard, safeguards for data. Protect is the verb cousin; a precaution (already in the dictionary) is a step taken in advance; a slogan is not a safeguard. The verb to safeguard means to protect with such a measure. Do not file a poster as a safeguard if nobody is named on the rota.',
    ['A named invigilator is a safeguard; a poster about “vigilance” is not.', 'Protect is everyday. A precaution is already in this course. A lock, a named person, a dated clause — those can be safeguards. Vigilance as a vibe is not. Write the name; then it is a measure.'],
    'A protective measure. Verb: to safeguard. Close: precaution (already in the dictionary). A poster without a name is not a safeguard.',
    ['protect']
  ),
  satire: L(
    'Satire is humour, irony, or exaggeration used to criticise: political satire, a satire of bureaucracy. A parody copies a style to mock; sarcasm is a sharp remark; comedy is wider and need not criticise. Satirical is the adjective. Do not treat a skit as a methods correction, and do not use satire to lift an embargo.',
    ['Satire of the board is not a methods correction, and it does not lift an embargo.', 'Comedy entertains. Irony can be quieter. A lampoon is a harsh cousin. Ridicule (already in the dictionary) is scorn. A joke in the canteen is not a filed erratum. Dates still bind.'],
    'Mocking criticism through humour. Contrast: parody (style-copy); sarcasm (a remark). Not a substitute for a correction or a date.',
    ['irony']
  ),
  scholar: L(
    'A scholar is someone who studies a subject in depth, usually at a high academic level: a legal scholar, an independent scholar. A student is everyday and wider; an academic is often employed by a university; a pundit comments in public. Scholarly is the adjective. Do not let a title replace a declared interest in the minute.',
    ['A scholar on the panel still has to declare the funding source in the minute.', 'Student is everyday. Researcher is a close twin. A pundit is media. Scholarship (this batch) is the work or the grant. A biography line is not a conflict-of-interest form. Name the funder.'],
    'A serious academic researcher. Everyday: student (wider). Close: academic / researcher. A title does not waive a declaration.',
    ['academic']
  ),
  scholarship: L(
    'Scholarship is serious academic study, or money awarded to help someone study: a body of scholarship, a scholarship to Oxford. Research is the everyday/academic twin; a grant is money without the “study” flavour; a compliment is not scholarship. Scholar (this batch) is the person. Do not call a flattering covering letter scholarship.',
    ['Scholarship is the cited method, not a compliment in the chair’s covering letter.', 'Research is the close twin. A bursary is money, often need-based. A prize is an award after the fact. Cite the method and the n. Praise in a letterhead is publicity, not a literature.'],
    'Academic work; also a study grant. Person: scholar (this batch). Close: research. A compliment is not a citation.',
    ['research']
  ),
  seamless: L(
    'Seamless means smooth, with no joins, interruptions, or obvious gaps: a seamless transition, seamless cover. Smooth is everyday; fluent can describe speech; patchy sits opposite. A seam is the join you are claiming not to see. Do not call a PDF seamless if the night cohort is missing from the n.',
    ['A seamless PDF is not a seamless join if the night cohort is missing from the n.', 'Smooth is everyday. Unbroken is a cousin. A gap in the sample is a methods hole. Design software can hide a join that the CSV still shows. Check the n, not the kerning.'],
    'No joins or awkward gaps. Everyday: smooth. Opposite flavour: patchy. A pretty file is not a complete sample.',
    ['smooth']
  ),
  sector: L(
    'A sector is a part of the economy, society, or a field of activity: the public sector, the health sector, a sector of the city. Area and field are everyday; industry is often commercial; a department is one organisation. Do not rebrand a sector and skip the fire certificate.',
    ['The further-education sector still needs a fire certificate, not only a branding refresh.', 'Area is everyday. Industry often means business. A segment is marketing-speak. Public / private / third sector are policy labels. A new logo does not rewrite statutory duties. Name the duty, then the paint.'],
    'A part of the economy or field. Everyday: area / field. Contrast: one department. Branding ≠ a certificate.',
    ['industry']
  ),
  shareholder: L(
    'A shareholder owns shares in a company: a majority shareholder, shareholder value. An investor is wider (bonds, funds); an owner of a private firm may not issue shares; the public is not automatically a shareholder. Stake (this batch) is the interest at risk. Do not treat a glossy deck as ethics approval.',
    ['A shareholder briefing is not an ethics approval, however glossy the deck.', 'Investor is wider. A stakeholder can be staff, students, or neighbours — not only capital. A share is the unit. A slide pack is comms. Ethics still wants a dated form and a named n.'],
    'Someone who owns a slice of a firm. Wider: investor. Contrast: stakeholder (not only capital). A deck is not ethics.',
    ['investor']
  ),
  sheer: L(
    'Sheer emphasises completeness, steepness, or size with nothing mixed in: sheer luck, sheer volume, a sheer drop. Complete and pure are cousins; mere means “only this, and not much”. Sheer fabric is thin and see-through — a second sense. Do not hide understaffing as a “complex landscape”.',
    ['The delay was sheer understaffing, not a “complex landscape”.', 'Complete is everyday. Utter is a close intensifier. Mere downplays. A sheer cliff is geography. Complexity is a real methods word; it is not a fog machine for a missing rota. Name the gap.'],
    'Complete / unmixed (emphasis). Close: utter / complete. Contrast: mere (only, small). Not a fog word for a missing rota.',
    ['utter']
  ),
  siege: L(
    'A siege is a military or police operation that surrounds a place to force surrender: under siege, lay siege to. A blockade stops supplies; an attack can be brief; under siege is also used figuratively for intense pressure. Do not call a busy inbox a siege, and do not confuse a locked hall with no fire exit with metaphor.',
    ['A week of leaked emails is not a siege; a locked hall with no fire exit is an emergency.', 'Attack is everyday and shorter. A blockade is about supply. Besiege is the verb. Figurative “under siege” is journalism. A fire-exit failure is a named hazard, not colour writing. Unlock the door; then write the prose.'],
    'A surrounding attack; also prolonged pressure. Contrast: a brief attack; a blockade. An inbox spike is not a siege. A locked fire door is an emergency.',
    ['blockade']
  ),
  significance: L(
    'Significance is importance, or (in research) a statistical result unlikely to be chance: political significance, statistical significance. Importance is everyday; meaning is wider; significant (already in the dictionary) is the adjective. Do not treat p < 0.05 with n = 12 as a national finding.',
    ['Statistical significance with n = 12 is still a small sitting, not a national finding.', 'Importance is everyday. Meaning is broader. A significant other is a different idiom. Effect size still matters. A tiny sample can star in a table and still not travel. Report the n beside the star.'],
    'Importance; also a statistical result. Everyday: importance. Adjective: significant (already in the dictionary). A star in a table ≠ a census.',
    ['important']
  ),
  sociology: L(
    'Sociology is the academic study of society and how groups are organised: a sociology degree, the sociology of work. Society is the object of study; social is the everyday adjective; anthropology neighbours it (culture, kinship). A sociologist is the person. Do not file a module title as an ethics approval.',
    ['A sociology module is not a substitute for a completed ethics form on the same corridor.', 'Society is everyday as the thing studied. Social science is the wider umbrella. Psychology looks at the mind. A reading list is not a consent trail. Complete the form; then theorise the corridor.'],
    'The academic study of society. Wider: social science. Neighbour: anthropology. A module title is not an ethics filing.',
    ['society']
  ),
  solely: L(
    'Solely means only — not involving anyone or anything else: solely responsible, used solely for research. Only is everyday; exclusively is a close twin; partly sits opposite. Sole (adjective) means single. Do not stretch a purpose-limited badge into a photo call.',
    ['Access was granted solely for invigilation, not for a press photo in the hall.', 'Only is everyday. Exclusively is formal and close. Merely downplays. A purpose clause in a permit is a limit. A camera in the hall is a different purpose. Write the purpose; stay inside it.'],
    'Only; exclusively. Everyday: only. Adjective cousin: sole. A purpose limit is a fence, not a vibe.',
    ['only']
  ),
  solicitor: L(
    'A solicitor, in England and Wales, is a lawyer who advises clients, prepares documents, and often instructs a barrister for court: instruct a solicitor, a duty solicitor. A lawyer is the everyday umbrella; a barrister is the court advocate; an attorney is chiefly US. Do not publish a “full admission” before legal advice.',
    ['Instruct a solicitor before you publish a “full admission” on the intranet.', 'Lawyer is everyday and wider. A barrister appears in higher courts. Counsel is advice or the advocate. An intranet post is a publication. Privilege and wording still matter. Get the letter before the leak-as-honesty.'],
    'A UK lawyer who advises and prepares cases. Everyday: lawyer. Contrast: barrister (court advocate). US cousin: attorney. Advice before a public admission.',
    ['lawyer']
  ),
  spatial: L(
    'Spatial means relating to space and the position of things: spatial planning, spatial awareness. Space is the noun; physical is wider; temporal (of time) is the usual pairing. Do not rename overcrowding as atmosphere.',
    ['Spatial crowding in the hall is a fire issue, not a “vibrant atmosphere”.', 'Physical is everyday and wider. Geographic can be maps. Temporal is time. Occupancy is a number on a certificate. A mood board is not a capacity figure. Count the bodies; then write the adjective.'],
    'About space and position. Pair: temporal (time). Everyday: physical (wider). Occupancy is a number, not a vibe.',
    ['space']
  ),
  specialise: L(
    'To specialise (US specialize) is to focus on one subject, skill, or type of work: specialise in tax, a specialised unit. Focus is everyday; concentrate (already in the dictionary) can be attention or a lab process; generalise sits opposite. Specialist is the person or adjective. Do not treat a scope line as a boast that waives methods.',
    ['The lab specialised in night-shift sampling; that is a scope, not a boast.', 'Focus is everyday. Major in is US campus. A specialty (also speciality, UK) is the field. British spelling keeps -ise. A niche without an n is still empty. Name the scope and the count.'],
    'Focus on one field. Everyday: focus. Opposite flavour: generalise. British: specialise. Scope ≠ a methods holiday.',
    ['focus']
  ),
  specimen: L(
    'A specimen is an example or sample taken to represent a larger set, often for testing: a specimen signature, a laboratory specimen. A sample (everyday/research) is the close twin; an example can be invented; a prototype is built to test a design. Do not offer a blank form as a specimen of good practice.',
    ['A specimen consent form with a blank n is not a specimen of good practice.', 'Sample is the close twin. Example is everyday and can be made up. A biopsy is medical. A template with empty fields is a blank, not a model filing. Fill the n; then exhibit it.'],
    'A sample taken as an example. Close: sample. Contrast: an invented example. A blank is not a model of practice.',
    ['sample']
  ),
  spectacle: L(
    'A spectacle is an unusual or impressive public sight, sometimes a foolish display: a spectacle of lights, make a spectacle of yourself. A display and a show are everyday; a spectator watches; spectacular (adjective) means very impressive. Do not confuse a press scrum with consultation.',
    ['A press scrum at the fire door is a spectacle, not a consultation.', 'Show is everyday. Display can be shop windows. A spectator is the watcher. Spectacles (glasses) are a lookalike plural. Consultation has a list and a date. Cameras at an exit are a hazard and a circus.'],
    'A striking public display (sometimes foolish). Everyday: show. Mix-up: spectacles (glasses). A scrum is not a consultation.',
    ['display']
  ),
  sphere: L(
    'A sphere is an area of activity, interest, or influence, or a ball-shaped object: sphere of influence, public sphere, a glass sphere. Field and area are everyday; domain is a cousin; a ball is the physical twin. Do not claim a chair’s vibe as a procurement sphere.',
    ['Procurement is not in the chair’s sphere; the tender log is.', 'Area is everyday. Field is academic/work. Hemisphere is half a globe. Influence is the politics sense. Informal chats do not move a tender. Write the log; stay in lane.'],
    'A field of activity; also a globe. Everyday: area / field. Close: domain. A vibe is not a procurement power.',
    ['domain']
  ),
  spiral: L(
    'To spiral is to rise or fall continuously, usually faster and faster: costs spiral, spiral out of control. Rise and fall are everyday; escalate is a cousin for conflict or cost; a spiral (noun) is the shape or the process. Do not write off repeated unstaffed sittings as one-offs while the bill climbs.',
    ['Costs spiralled after the unstaffed sittings were written off as “one-offs”.', 'Rise is everyday. Escalate is a close cousin. A vicious circle is related. A spiral staircase is physical. One-off is a claim that needs a date and a last time. Repeat the sitting without cover and the curve is the story.'],
    'Keep rising or falling faster. Everyday: rise / fall. Close: escalate. Noun: a spiral. Repeated gaps are not one-offs.',
    ['escalate']
  ),
  stability: L(
    'Stability is the state of being steady and unlikely to change suddenly: political stability, financial stability, stability of staffing. Stable is the adjective (and also an animal shelter — a lookalike). Change and volatility sit opposite. Do not buy a homepage slogan instead of a night rota.',
    ['Staffing stability on the night rota beats a new slogan on the homepage.', 'Steadiness is everyday. Continuity is a cousin. Instability is the opposite. A stable (horses) is a different noun. Branding can move weekly; cover should not. Name the shift before the banner.'],
    'Steadiness; not sudden change. Adjective: stable (lookalike: a horse stable). Opposite: volatility. A slogan is not a rota.',
    ['stable']
  ),
  stake: L(
    'A stake is an interest risked on an outcome, or what you stand to lose: a stake in the company, at stake, raise the stakes. Risk is everyday; a share can be the ownership twin; shareholder (this batch) owns shares. A wooden stake is a post — a second sense. Do not chat out a sample and shrug that the embargo was never “really” at stake.',
    ['The embargo is at stake if the sample goes out in a private chat.', 'Risk is everyday. Interest can mean a share. Stakes (plural) often means how much hangs on it. A steak is meat — a cruel lookalike. Private chat is still a leak path. If the date binds, the sample stays in.'],
    'What is risked; a share in an outcome. Everyday: risk. Idiom: at stake. Mix-up: steak. A private chat can still spend the embargo.',
    ['risk']
  ),
  stall: L(
    'To stall is to stop making progress, or to delay on purpose: talks stall, stall for time. Pause is everyday and may be planned; delay can be waiting; a stall (noun) is a stand in a market or a cubicle. An engine can stall. Do not leave the n unnamed and call the silence process.',
    ['Talks stalled when nobody would name the n in the minute.', 'Pause is everyday. Delay is wider. Stonewall is wilful blocking. A market stall is a lookalike noun. A blank in the minute is not momentum. Put the number in, or minute the refusal.'],
    'Stop progressing; delay. Everyday: pause / delay. Noun lookalike: a market stall. Silence on the n is not process.',
    ['delay']
  ),
  stance: L(
    'A stance is a publicly stated position on an issue: a stance on fees, take a stance. Opinion is everyday and can be private; a position is a close twin; a pose is physical or fake. Stance is also how you stand (sport). Do not leave open data as a corridor vibe.',
    ['A stance on open data is a dated policy, not a vibe in the corridor.', 'Opinion is everyday. Position is the close twin. Attitude is inner. Policy is what you can audit. A posture can be for show. Write the date and the rule. Then it is a stance.'],
    'A stated position on an issue. Everyday: opinion. Close: position. Also physical (how you stand). A vibe is not a policy.',
    ['position']
  ),
  staple: L(
    'A staple is a basic, regular element of a diet, diet of news, or practice; also a metal paper fastener: a staple crop, a staple of the timetable. Basic and regular are everyday; a fixture is a cousin; a luxury sits opposite. Do not call named cover optional.',
    ['Named cover is a staple of a lawful sitting, not an optional extra.', 'Basic is everyday. A fixture is regular in a calendar. A paper staple joins pages — the office sense. Rice as a staple is food. Optional extras are paint. Cover is the condition of sitting, not a nice-to-have.'],
    'A basic regular element (or a paper fastener). Everyday: basic / regular. Contrast: optional extra. Cover is not décor.',
    ['basic']
  ),
  statute: L(
    'A statute is a written law passed by a parliament or similar body: statute law, a statute of limitations. A law is everyday and wider (includes case law); an act is often the same document; a rule can be internal. Statutory is the adjective. Do not let an informal email outrank fire safety.',
    ['A statute on fire safety outranks a “keep it informal” email.', 'Law is everyday and wider. An Act of Parliament is the usual UK name for the text. Regulation can be secondary. Case law is judges. Informal culture is not a repeal. The certificate still binds.'],
    'A written Act of law. Everyday: law (wider). Adjective: statutory. Contrast: an internal email. Informality does not repeal fire safety.',
    ['law']
  ),
  steer: L(
    'To steer is to guide the direction of a vehicle, discussion, or organisation: steer a debate, steer clear of. Guide and direct are everyday; a steer (noun, informal UK) is a hint; a steering group advises. Do not steer an inquiry toward the font and away from the badge log.',
    ['Steer the inquiry toward the badge log, not the font on the poster.', 'Guide is everyday. Direct can be stronger. Navigate is a cousin. A bullock is a steer — a lookalike noun. A hint in a corridor is not a finding. Follow the log; the typeface can wait.'],
    'Guide the direction of. Everyday: guide. Informal noun: a steer (a hint). Mix-up: a steer (animal). Fonts are not the inquiry.',
    ['guide']
  ),
  stem: L(
    'To stem from is to come from a source; to stem something is to stop it spreading: stem from a decision, stem the flow. Come from is everyday; originate is formal; a stem (noun) is a plant stalk or a word base. Do not blame “tone” for an unstaffed door.',
    ['The complaint stemmed from an unstaffed fire door, not from “tone”.', 'Come from is everyday. Originate is a cousin. Stem the tide is a set phrase. A word stem is linguistics. Tone is a comms word. A missing person on the rota is a cause. Name the cause; then the style guide.'],
    'Come from; or stop a flow. Everyday: come from. Noun: a plant/word stem. Tone is not a root cause for a missing door-keeper.',
    ['originate']
  ),
  stern: L(
    'Stern means serious and strict, often showing disapproval: a stern warning, a stern look. Strict is everyday; severe (already in this course as severity) is harsher; lenient sits opposite. The stern of a ship is the back — a lookalike noun. Do not mistake a stern footnote for a completed n.',
    ['A stern footnote is still not a completed n cell.', 'Strict is everyday. Severe is stronger. A telling-off is informal. Austere (already in the dictionary) is bleak or morally spare. The back of a boat is the stern. Disapproval in eight-point type is not a sample size.'],
    'Strict and severe in manner. Everyday: strict. Mix-up: the stern of a ship. A warning tone ≠ a filled n.',
    ['strict']
  ),
  strain: L(
    'A strain is pressure that tests strength or capacity: a strain on services, under strain; also a pulled muscle, or a variety of a virus. Pressure and stress are everyday; burden is a cousin. The verb to strain is to stretch or to make a great effort. Do not put the gap in a slogan.',
    ['The strain on night invigilation showed in the incident log, not in the slogan.', 'Pressure is everyday. Stress can be psychological. A burden is what you carry. A viral strain is biology. Resilience copy is branding. Logs show load. Staff the shift; then write the poster if you must.'],
    'Pressure / stress on a system. Everyday: pressure. Also: muscle injury; virus variant. A slogan is not a load figure.',
    ['pressure']
  ),
  strand: L(
    'A strand is one thread or element in a story, plan, or argument; also a single fibre or a shore: a strand of the inquiry, strands of hair, stranded (left unable to leave). A thread is everyday; an aspect is wider; the whole cloth is the set. Do not drop the embargo strand from the press note.',
    ['One strand of the protocol named the embargo; the press note ignored it.', 'Thread is everyday. Element is a cousin. A beach can be a strand (literary). Stranded passengers are stuck. A protocol with three strands still needs all three in public. Cut one and you have a different document.'],
    'One thread of a larger whole. Everyday: thread. Also: fibre; shore; stranded (stuck). Dropping a strand is rewriting the protocol.',
    ['thread']
  ),
  strategic: L(
    'Strategic means done as part of a long-term plan to achieve an aim: a strategic review, strategic importance. Tactical is shorter-term; strategy (already in the dictionary) is the noun; accidental sits opposite. Do not call a review strategic if it skips the fire door.',
    ['A strategic review that skips the fire door is not a strategy.', 'Tactical is the short-term twin. Planned is everyday. Strategy is already in this course. A away-day with sticky notes is not automatically strategy. If statutory kit is off the agenda, the word is decoration.'],
    'Of a long-term plan. Noun: strategy (already in the dictionary). Contrast: tactical (short-term). Skipping a fire door is not strategy.',
    ['strategy']
  ),
  striking: L(
    'Striking means very noticeable or unusual: a striking contrast, striking results. Noticeable is everyday; remarkable is a cousin; striking workers are on strike — a second sense. Do not let a cover photograph outshine an empty n.',
    ['The striking gap was an empty n, not the cover photograph.', 'Noticeable is everyday. Dramatic can be inflated. A strike (noun/verb) is industrial action. Eye-catching is design-speak. The number that is missing is the finding. Crop the hero image; keep the cell.'],
    'Very noticeable. Everyday: noticeable. Close: remarkable. Other sense: on strike. A photo is not the gap.',
    ['noticeable']
  ),
  strive: L(
    'To strive is to make a great effort to achieve something: strive for accuracy, strive to improve. Try is everyday; endeavour is a formal twin; coast sits opposite. Do not strive to rephrase a gap as “lean”.',
    ['Strive to staff the sitting; do not strive to phrase the gap as “lean”.', 'Try is everyday. Attempt is a cousin. Endeavour is formal. Struggle (already in the dictionary) often marks difficulty without success. Copy that hides a hole is still a hole. Put a name on the rota.'],
    'Try hard to achieve. Everyday: try. Formal twin: endeavour. Rephrasing a gap is not striving for quality.',
    ['endeavour']
  ),
  structural: L(
    'Structural means of the way something is built or organised, not only surface detail: structural change, a structural fault, structural inequality. Structure (already in the dictionary) is the noun; cosmetic and superficial sit opposite. Do not fix a staffing hole with a logo.',
    ['A structural shortage of night markers will not be fixed by a new logo.', 'Organisational is a cousin. Deep-seated is informal. A beam is physical structure. Cosmetic is surface. Inequality can be structural — built in. Paint is not a post. Fund the shift.'],
    'Of the underlying organisation or build. Noun: structure (already in the dictionary). Opposite: cosmetic. A logo is not a post.',
    ['structure']
  ),
  submit: L(
    'To submit is to send a document for a decision, or to accept a higher authority: submit an essay, submit to inspection. Send in is everyday; file is a close twin; withdraw sits opposite. A submission is the noun. Do not treat a hallway yes as a filing.',
    ['Submit the ethics form before you recruit; a hallway yes is not a filing.', 'Send is everyday. Hand in is school register. File is administrative. Yield / give in is the authority sense. Oral permission in a corridor has no timestamp. The portal has a clock. Use it.'],
    'Hand in for a decision; also yield. Everyday: send in / hand in. Noun: submission. A corridor yes is not a filing.',
    ['file']
  ),
  successive: L(
    'Successive means following one after another without a break: on three successive nights, successive governments. Consecutive (already in the dictionary) is the close twin; sequential (already in the dictionary) stresses order; successive is the chain of things. Successor is the person who follows. Do not call a repeated failure luck.',
    ['Three successive unstaffed sittings are a pattern, not a run of bad luck.', 'Consecutive is already in this course and very close. Next is everyday. Sequential is already in this course (order). A successor is a person. One gap can be an incident. Three is a system. Minute the pattern.'],
    'One after another. Close: consecutive / sequential (already in the dictionary). Person: successor. Repeat is a pattern.',
    ['consecutive']
  ),
  summarise: L(
    'To summarise (US summarize) is to give the main points briefly: summarise the findings, a summarised minute. Sum up is everyday; a summary is the noun (already a close cousin in many courses); omit is leave out. British spelling keeps -ise. Do not summarise the n out of existence.',
    ['Summarise the n in the abstract; do not summarise it away.', 'Sum up is everyday. Outline is a cousin. Condense can lose necessary detail. A précis is a school/formal short version. An abstract still owes the count. Short is not the same as silent on methods.'],
    'Give the main points briefly. Everyday: sum up. British: summarise. Noun: summary. Short ≠ silent on the n.',
    ['outline']
  ),
  summit: L(
    'A summit is a meeting of leaders, or the highest point: a climate summit, the summit of a career, a mountain summit. A meeting is everyday; a peak is the height twin; a photo call is not a summit. Do not skip the minute and keep the word.',
    ['A campus “summit” with no minute is a photo call, not diplomacy.', 'Meeting is everyday. Conference is larger. Peak and top are height. Diplomacy produces a communiqué or a minute. A banner and a buffet are hospitality. If nothing is written, nothing was agreed.'],
    'A leaders’ meeting; also a peak. Everyday: meeting / peak. A photo call without a minute is not a summit.',
    ['meeting']
  ),
  supplement: L(
    'To supplement is to add something extra to improve or complete: supplement income, supplement the data. Add is everyday; complement (already in the dictionary) is “go well with”; replace sits opposite. A supplement (noun) is the extra item or a magazine insert. Do not swap a caption for a cohort.',
    ['Supplement the daytime sample with the night cohort; do not replace it with a caption.', 'Add is everyday. Complement is already in this course (completes by matching). A vitamin supplement is the consumer sense. Extra is not instead. A caption is comms. The night names still belong in the n.'],
    'Add extra to complete. Everyday: add. Contrast: replace; complement (already in the dictionary) = go well with. Extra ≠ instead.',
    ['add']
  ),
  suppress: L(
    'To suppress is to stop something being seen, published, felt, or expressed: suppress a report, suppress a cough, suppress dissent. Hide is everyday; censor (already in the dictionary) is official cutting; publish sits opposite. Do not bury an incident log to save a slogan.',
    ['Do not suppress the incident log to protect a slogan.', 'Hide is everyday. Censor is already in this course. Quash is legal/strong. Repress is political/psychological. A slogan is a line of copy. A log is evidence. Evidence belongs in the file, not in a drawer.'],
    'Hold down or hide from view. Everyday: hide. Close: censor (already in the dictionary). A slogan is not a reason to bury a log.',
    ['censor']
  ),
  surplus: L(
    'A surplus is an amount left over when need has been met: a budget surplus, a surplus of stock. Extra and leftover are everyday; a deficit is the opposite; excess can sound wasteful. Surplus to requirements means not needed. Do not count posters as invigilators.',
    ['A surplus of posters is not a surplus of invigilators.', 'Extra is everyday. Leftover is informal. Deficit is the hole. Profit is not the same (revenue minus cost). Stationery is not cover. Count people on the rota, not reams in the cupboard.'],
    'Amount left over. Everyday: extra. Opposite: deficit. Posters ≠ people on a rota.',
    ['excess']
  ),
  suspend: L(
    'To suspend is to stop something officially for a time, or to hang something: suspend a sitting, suspend a student, a lamp suspended from the ceiling. Pause is everyday; cancel ends it; resume sits opposite the pause. Suspension (this batch) is the noun. Do not wait for a headline to cool instead of dating ethics.',
    ['Suspend recruitment until ethics is dated, not until the headline cools.', 'Pause is everyday. Halt is stronger. Cancel is the end. Hang is the physical sense. A headline is weather in the press. A dated form is a condition. Stop the recruitment clock until the date exists.'],
    'Pause officially for a time. Everyday: pause. Contrast: cancel (end it). Noun: suspension (this batch). Headlines are not ethics dates.',
    ['pause']
  ),
  suspension: L(
    'A suspension is an official pause (of a person, a sitting, a rule); also a vehicle’s shock-absorbing system: under suspension, suspension of disbelief. Suspend (this batch) is the verb; a break is everyday; dismissal is the end of the job. Do not delete a calendar slot and skip the reason.',
    ['Suspension of the sitting needs a recorded reason, not a deleted calendar slot.', 'A break is everyday. A ban can be longer or vaguer. Dismissal ends employment. Car suspension is engineering. Disbelief in fiction is an idiom. Records need a why and a who. Empty calendars are not minutes.'],
    'An official pause (or vehicle shock-absorbers). Verb: suspend (this batch). Contrast: dismissal (the end). A deleted slot is not a reason.',
    ['suspend']
  ),
  taxation: L(
    'Taxation is the system of charging tax, or tax considered as a whole: taxation policy, a change in taxation. Tax is the everyday/shorter noun; a levy is a named charge; taxpayer (this batch) is the person who pays. Do not hide a liability in a prospectus footnote.',
    ['Taxation of the summer school is a finance minute, not a footnote in the prospectus.', 'Tax is everyday. Revenue can mean the take. Duty is often on goods. A prospectus sells a course. Finance minutes name the liability. Small print under a smiling photograph is not a tax treatment.'],
    'The charging of tax / tax as a system. Everyday: tax. Person: taxpayer (this batch). A prospectus footnote is not a finance minute.',
    ['tax']
  ),
  taxpayer: L(
    'A taxpayer is a person or organisation that pays tax, often invoked as the public who fund a service: taxpayer money, value for the taxpayer. Citizen is wider; the Treasury (already in the dictionary) is the department; tax (everyday) is the charge. Do not swap a ribbon-cutting for a fire certificate.',
    ['Taxpayer funding still requires a fire certificate, not only a ribbon-cutting.', 'Citizen is wider. Voter is civic but not fiscal. Public money is the plain twin. A ceremony is comms. Statutory kit is a condition of opening. Cut the ribbon after the certificate, not instead of it.'],
    'Someone who pays tax. Wider: citizen. Close: public money. A photocall is not a certificate.',
    ['tax']
  ),
  tedious: L(
    'Tedious means too long, slow, or dull, in a way that wears patience: a tedious process, tedious detail. Boring is everyday; dull is a cousin; gripping sits opposite. Do not call a complete methods paragraph tedious because it is not sparkling.',
    ['A tedious methods paragraph that names the n beats a sparkling abstract that does not.', 'Boring is everyday. Dull is close. Monotonous stresses sameness. Exciting is the opposite flavour. Peer review reads for completeness. Sparkle without a count is advertising. Keep the dull sentence that names the n.'],
    'Boringly long or slow. Everyday: boring. Opposite flavour: gripping. Completeness is not a style fault.',
    ['boring']
  ),
  tender: L(
    'To tender is to make a formal offer to supply goods or work at a stated price: tender for a contract, tender a resignation. Bid is the close twin; offer is everyday; a handshake is not a tender. Tender (adjective) means gentle or painful — a different family. Legal tender is money that must be accepted.',
    ['Tender the invigilation contract in the log; a handshake in the car park is not a tender.', 'Bid is the close twin. Offer is everyday. A tender (noun) is the document. Gentle and sore are adjective lookalikes. Procurement has a log and a deadline. Car parks do not. Write the offer where it can be audited.'],
    'Make a formal offer to supply work. Close: bid. Noun: a tender. Lookalike adjective: gentle / sore. A handshake is not the log.',
    ['bid']
  ),
  tenure: L(
    'Tenure is the holding of an office or academic post, often with job security, or the period of that holding: academic tenure, during her tenure as chair. Term of office is a cousin; a contract can be fixed-term without tenure. Do not treat long service as a waiver of the embargo or the n.',
    ['Tenure on the board does not waive the embargo or the n.', 'A post is everyday. Incumbency is formal. A fixed-term contract is not tenure. Security of post is the academic sense. Length of stay is not a methods holiday. Dates and counts still bind the longest-serving chair.'],
    'Period / security of holding a post. Close: term of office. Contrast: a fixed-term contract. Long service ≠ a waiver.',
    ['term']
  ),
  theoretically: L(
    'Theoretically means according to theory, not necessarily in practice: theoretically possible, theoretically the limit is two hundred. In theory is the everyday twin; theoretical (already in the dictionary) is the adjective; practically / in practice sit opposite. Do not quote the brochure capacity against a tighter certificate.',
    ['Theoretically the hall holds two hundred; the fire certificate names ninety.', 'In theory is everyday. Hypothetically flags an if. Theoretical is already in this course. Practice is the test. Occupancy is the lower, named figure. Brochure numbers are marketing. The certificate wins.'],
    'In theory; not always in practice. Everyday: in theory. Adjective: theoretical (already in the dictionary). The certificate beats the brochure.',
    ['theoretical']
  ),
  thrust: L(
    'The thrust of something is its main point or direction: the thrust of the argument, a policy thrust; also a forceful push. Point and gist are everyday; emphasis is a cousin; the verb to thrust is to push. Do not let a colour palette outrank a missing cohort.',
    ['The thrust of the paper was a missing night cohort, not the colour palette.', 'Point is everyday. Gist is informal. Emphasis is a cousin. A jet engine has thrust — physics. Design is presentation. The claim still sits in the sample. Lead with the hole; the palette can follow.'],
    'The main force or point of something. Everyday: point / gist. Also a physical push. Design is not the argument.',
    ['gist']
  ),
  token: L(
    'Token as an adjective means done as a symbol, without real effect: a token gesture, token consultation. Symbolic is a close twin; genuine and substantial (already in the dictionary) sit opposite. A token (noun) is a sign, a voucher, or a small piece. Do not file two lines as consultation.',
    ['A token consultation of two lines is not consultation.', 'Symbolic is the close twin. Superficial is a cousin. Substantial is already in this course. A gift token is a voucher. Process needs a list, a date, and a response. Two lines in an email are a gesture. Name them as such, or do the work.'],
    'Symbolic only; not real commitment. Close: symbolic. Opposite: genuine / substantial (already in the dictionary). Two lines ≠ consultation.',
    ['symbolic']
  ),
  toll: L(
    'A toll is harm counted (a death toll) or suffered over time (take its toll); also a charge to use a road: the death toll, the heat took its toll, a toll road. Cost and damage are everyday; a fee is a charge without the harm sense. Do not rename unstaffed heat as resilience.',
    ['The heatwave took its toll on an unstaffed sitting; the minute must name that, not “resilience”.', 'Cost is everyday. Damage is a cousin. A charge on a bridge is a toll. A death toll is a count. Resilience is a slogan. Conditions in the hall are a log. Write the harm; then the brand word if you still want it.'],
    'Death/harm count; also a road charge; harm over time. Everyday: cost / damage. Resilience copy is not the log.',
    ['cost']
  ),
  topple: L(
    'To topple is to become unsteady and fall, or to remove a leader from power: topple over, topple a government. Fall is everyday; overthrow (already in the dictionary) is the political cousin, often forceful; wobble is weaker. Do not inflate a leaked n into a coup, and do not ignore it as nothing.',
    ['A leaked n will not topple a government; it can still halt a sitting.', 'Fall is everyday. Overthrow is already in this course and heavier. Oust is remove from post. A vase topples. A cabinet falls in politics. Scale the claim to the institution. Halt the sitting; leave the state alone.'],
    'Fall over; or force a leader out. Everyday: fall. Close: overthrow (already in the dictionary). A leak can halt a sitting without being a coup.',
    ['overthrow']
  ),
  transcribe: L(
    'To transcribe is to write spoken words down exactly, or to copy into another form: transcribe a hearing, transcribe an interview. Write down is everyday; copy is wider; a paraphrase is not a transcription. Transcript (this batch) is the noun. Do not let a chair’s summary replace the record.',
    ['Transcribe the hearing; a chair’s paraphrase is not the record.', 'Write down is everyday. Record can be audio. Translate is language-to-language. A transcript is this batch’s noun. Paraphrase changes wording. Minutes can be summary by agreement. A hearing record is not a vibe of what was meant.'],
    'Write speech down exactly / copy across. Everyday: write down. Noun: transcript (this batch). A paraphrase is not the record.',
    ['record']
  ),
  transcript: L(
    'A transcript is a written record of speech, or an official record of courses and grades: a hearing transcript, an academic transcript. A record is everyday; minutes can be a summary; transcribe (this batch) is the verb. Do not treat a press note as the hearing.',
    ['The transcript of the hearing is the record; the press note is not.', 'Record is everyday. Minutes may be agreed summary. A script is what actors read — a lookalike. Grades on a transcript are registry. Comms language is for the outside. The inside record is the words as spoken, filed.'],
    'A written record of speech (or of grades). Verb: transcribe (this batch). Contrast: minutes (often summary); a press note. Lookalike: a script.',
    ['transcribe']
  ),
  transpire: L(
    'To transpire is to become known (formal), or, in journalism, to happen: it transpired that the figures were rounded; what transpired at the meeting. Emerge and come out are everyday; happen is the looser journalistic sense — some editors dislike it. Do not leave a rounded n as a rumour cycle.',
    ['It transpired that the n had been rounded; that is a methods fact, not a rumour cycle.', 'Emerge is a close twin. Come to light is everyday. Happen is the disputed journalistic use. Transpiration in plants is water loss — a biology lookalike. Rounding is a methods line. File it as fact; do not wait for folklore.'],
    'Come to light / happen (formal). Close: emerge. Journalism also uses happen (disputed). A rounded n is a fact, not gossip.',
    ['emerge']
  ),
  turmoil: L(
    'Turmoil is a state of great noise, confusion, or uncertainty: political turmoil, inner turmoil. Chaos (already in the dictionary) is a close twin; confusion is everyday; calm sits opposite. Do not mistake an inbox spike for a finding.',
    ['Turmoil in the inbox is not a finding; the empty n cell is.', 'Chaos is already in this course. Confusion is everyday. Upheaval is a cousin. Noise is informal. A finding is a dated claim with a method. Volume of mail is weather. Open the CSV; that is the still point.'],
    'Great confusion or upheaval. Everyday: confusion. Close: chaos (already in the dictionary). Inbox volume ≠ a finding.',
    ['chaos']
  ),
  turnout: L(
    'Turnout is the number of people who vote or attend: voter turnout, a low turnout. Attendance is the everyday twin for events; a crowd is looser; turnout (clothing) can mean dress — rarer. Do not write “the community spoke” for twelve people.',
    ['Turnout at the “open meeting” was twelve; do not write “the community spoke”.', 'Attendance is everyday for events. Crowd is impressionistic. A quorum is the minimum to do business. Participation is wider. Twelve is a number. Community is a claim. Put the number in the minute before the we.'],
    'How many people voted or came. Everyday: attendance. Contrast: a crowd (impression); quorum (minimum). Twelve ≠ the community.',
    ['attendance']
  ),
}
