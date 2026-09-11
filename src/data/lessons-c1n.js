const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1N = {
  factional: L(
    'Factional means of a faction: a subgroup fighting for control inside a party, board, or union. A faction (already in the dictionary) is the group; partisan is a cousin; united sits opposite. Internal disagreement can be minuted without being factional war. Do not rebrand two recorded votes as “vibrant debate” and skip the names.',
    ['A factional split on the board is still minuted as two votes, not “vibrant debate”.', 'A wing is informal politics. A clique is smaller and social. Dissent can be one person. Two blocs with Whip counts are factional. Write who voted which way. Atmosphere copy is not a division list.'],
    'Of rival groups inside one body. Noun: faction (already in the dictionary). Contrast: ordinary dissent. Minutes need votes, not vibes.',
    ['partisan']
  ),
  facilitation: L(
    'Facilitation is the work of making a process easier, often by structuring a meeting, workshop, or sitting. Facilitate (already in the dictionary) is the verb; a facilitator (this batch) is the person; catering is not facilitation. The word can also mean easing a legal or medical process. Do not file biscuits as the intervention.',
    ['Facilitation of the sitting is a named role, not a tray of biscuits.', 'Help is everyday. Chairing includes decisions; facilitation often does not. A venue hire is logistics. A named person, a timed agenda, a parking lot — that can be facilitation. Pastry is hospitality. Write the role on the rota.'],
    'Making a process run (the work). Verb: facilitate (already in the dictionary). Person: facilitator (this batch). Biscuits ≠ the role.',
    ['enable']
  ),
  facilitator: L(
    'A facilitator guides a discussion or process so others can decide or complete a task; they are not usually the decision-maker. A chair has authority; a trainer teaches content; a host does hospitality. Facilitation (this batch) is the work. Do not let the parking-lot notes replace the n in the minute.',
    ['The facilitator writes the parking-lot items; the n still has to be in the minute.', 'Chair is stronger and often votes. Moderator is media/online. A scribe only records. Sticky notes are tools. Sample size is a methods fact. Tools do not waive the count. Put the n in the minute, then the parking lot.'],
    'The person who guides a process. Work: facilitation (this batch). Contrast: chair (decides); host (hospitality). Notes ≠ the n.',
    ['moderator']
  ),
  faithfully: L(
    'Faithfully means accurately and loyally, without distorting the original: copy faithfully, serve faithfully. Accurate is the close twin for records; loyal is the duty twin; roughly sits opposite. Yours faithfully is a letter formula (UK, unknown addressee). Do not round an n “for the press” and call the table faithful.',
    ['Reproduce the n faithfully; rounding it “for the press” is still a change.', 'Accurately is the record sense. Loyally is people and posts. Approximately is a different claim. Faithful (already in the dictionary) is the adjective. A press-friendly table is still a new table. Label a rounded figure as rounded, or keep the count.'],
    'Accurately / loyally. Adjective: faithful (already in the dictionary). Contrast: approximately. Rounding for comms is a change.',
    ['accurately']
  ),
  falsify: L(
    'To falsify is to change a record, figure, or document so that it is no longer true: falsify accounts, falsify an n. Fake is everyday and wider; forge (this batch) can mean fake a signature, or build something; fraudulent (this batch) is the adjective. Do not call an invented count formatting.',
    ['To falsify an n is misconduct, not a formatting choice.', 'Lie is everyday speech. Fabricate (already in the dictionary) is to invent. Amend is a legitimate correction with a trail. A methods cell is evidence. A prettier PDF is not a reason. File the true n, or file a dated correction.'],
    'Make a record untrue. Everyday: fake. Close: fabricate (already in the dictionary). Adjective: fraudulent (this batch). Formatting ≠ a new n.',
    ['fabricate']
  ),
  falter: L(
    'To falter is to lose strength, confidence, or a steady rhythm: talks falter, a voice falters, a sitting falters. Hesitate (already in the dictionary) is a pause before acting; fail is the end; stall (already in the dictionary) is progress stopping, often on purpose. Do not treat a missing spare as a mysterious loss of “momentum”.',
    ['The sitting faltered when the spare invigilator did not arrive.', 'Hesitate is already in this course (before you start). Stumble is physical or verbal. Collapse is stronger. Momentum is a slogan. A blank on the rota is a cause. Name the person who did not arrive; then the verb.'],
    'Weaken / hesitate. Close: hesitate (already in the dictionary); stall (already in the dictionary). A missing spare is a cause, not a vibe.',
    ['waver']
  ),
  familiarity: L(
    'Familiarity is knowing something well from repeated contact: familiarity with a protocol, familiarity breeds contempt. Knowledge can be bookish; experience is doing; a certificate is evidence other people can audit. Familiar (already in the dictionary) is the adjective. Do not treat knowing the corridor as a fire inspection.',
    ['Familiarity with the corridor is not a fire certificate.', 'Knowledge is wider. Acquaintance is thinner. Intimacy is personal. A walk-through in week one is not a dated inspection. Statutory kit wants a name and a date. Walk the route; still file the certificate.'],
    'Knowing it well (from use). Adjective: familiar (already in the dictionary). Contrast: a certificate (auditable). Local knowledge ≠ inspection.',
    ['acquaintance']
  ),
  fanatic: L(
    'A fanatic is a person with extreme, uncritical zeal: a political fanatic, a fitness fanatic (looser, informal). An enthusiast is milder; an extremist is usually political or violent; a devotee can be religious without the insult. Fanatical is the adjective. Do not let zeal for methods replace an ethics date.',
    ['A methods fanatic who names the n is still not a substitute for ethics.', 'Enthusiast is everyday and kinder. Zealot is a close insult. Buff is informal hobby-talk. Naming the n is good practice. A dated ethics form is still the gate. Keenness does not open the gate.'],
    'Someone extreme in their zeal. Milder: enthusiast. Adjective: fanatical. Keen methods ≠ an ethics filing.',
    ['zealot']
  ),
  farce: L(
    'A farce is a ridiculous, chaotic situation that fails its own rules; also a comic play built on absurd mix-ups. A mess is everyday; a shambles is a close twin; satire (already in the dictionary) criticises through humour on purpose. Do not rebrand an unstaffed sitting as lean delivery.',
    ['An unstaffed sitting is a farce, not a “lean delivery model”.', 'Mess is everyday. Fiasco stresses collapse after hype. Comedy is the theatre sense. Lean is an operations claim that needs a rota. No named invigilator is a failed sitting. Keep the word; drop the slogan.'],
    'An absurd mess (or an absurd comedy). Everyday: mess. Close: fiasco. Contrast: satire (already in the dictionary). Unstaffed ≠ lean.',
    ['fiasco']
  ),
  fascination: L(
    'Fascination is a strong, holding interest: fascination with a method, a morbid fascination. Interest is everyday and thinner; obsession is stronger and often unhealthy; fascinating (already in the dictionary) is the adjective. Do not let a cover photograph outrank an empty n cell.',
    ['Fascination with the cover photograph does not fill the n cell.', 'Interest is everyday. Curiosity is lighter. Obsession crowds out duty. Design is presentation. The count is the finding. Look at the picture after the cell is filled, not instead.'],
    'Intense interest. Everyday: interest. Adjective: fascinating (already in the dictionary). Stronger: obsession. A photo is not an n.',
    ['interest']
  ),
  feasibility: L(
    'Feasibility is how possible and practical a plan is, given cost, law, staffing, and time: a feasibility study, technical feasibility. Feasible (already in the dictionary) is the adjective; possibility is thinner and more abstract; a wish is not a study. Do not skip the night-shift line and keep the word.',
    ['A feasibility note without a night-shift cost is not a feasibility note.', 'Possibility is everyday and looser. Viability stresses whether it can survive. A pitch deck is sales. Cost, cover, and the fire certificate are the test. If the night line is blank, the study is unfinished.'],
    'How doable a plan is. Adjective: feasible (already in the dictionary). Contrast: a wish / a pitch. Night cost belongs in the note.',
    ['viability']
  ),
  feminism: L(
    'Feminism is the movement and analysis arguing for women’s rights and gender equality. A feminist (already in the dictionary) is a person who supports it; sexism is a related wrong; a prospectus slogan is not the movement. Do not treat a night-bus cut as unrelated décor if the claim is equality.',
    ['Feminism in the prospectus is a claim; the night-bus cut is the evidence.', 'Equality is the wider aim. Women’s studies is a campus field. A brand colour is not a policy. Travel after a late sitting is a conditions fact. Match the claim to the bus, or drop the claim.'],
    'The movement for women’s equality. Person: feminist (already in the dictionary). A slogan is not evidence. Service cuts are evidence.',
    ['equality']
  ),
  fidelity: L(
    'Fidelity is faithfulness to a person, duty, or original text, or the accuracy of a copy or recording: marital fidelity, fidelity to a protocol, high-fidelity audio. Loyalty is the everyday cousin; accuracy is the copy twin; infidelity is the usual opposite in relationships. Do not “improve” a quote and claim fidelity to the protocol.',
    ['Fidelity to the protocol means keeping the embargo, not “improving” the quote.', 'Loyalty is everyday. Accuracy is the technical twin. Faithfulness is close. A tidier sentence is still an edit. Embargo text is the original. Quote it; do not upgrade it for tone.'],
    'Faithfulness / accuracy of a copy. Everyday: loyalty. Contrast: a tidied quote. The embargo is the original, not a draft for polish.',
    ['loyalty']
  ),
  fieldwork: L(
    'Fieldwork is research done in real settings, not only at a desk or in a lab: ethnographic fieldwork, geological fieldwork. A field trip is often teaching; a survey can be remote; desk research sits opposite. Do not treat after-dark collection as bravery instead of a lone-worker procedure.',
    ['Fieldwork after dark still needs a lone-worker procedure, not a vibe of bravery.', 'Research is the umbrella. Observation can be in a lab. Placement is a job. Risk assessment is the condition of going out. Courage copy is branding. File the procedure; then go to the site.'],
    'Research done on site, not at the desk. Contrast: desk research; a teaching field trip. Bravery ≠ a lone-worker form.',
    ['research']
  ),
  fixture: L(
    'A fixture is a scheduled match or a regular event in a calendar; also an object fixed in a building (lights, a sink, a door closer): a home fixture, a plumbing fixture. A date is everyday; a fitting is the object twin; an ad-hoc email is not a timetable. Do not move a sitting by a late-night message and keep the word fixture.',
    ['The January sitting is a fixture; an email the night before is not a timetable.', 'Match is sport. Appointment is one person. A fire-door closer is a fixture in the building sense. Calendars are published. Last-minute mail is a change request. Publish the date; then the reminder.'],
    'A regular date (or a fitted object). Everyday: date / match. Contrast: an ad-hoc email. Lookalike: a bathroom fitting.',
    ['match']
  ),
  flagship: L(
    'A flagship is the most important product, course, or site used to represent an organisation: a flagship campus, a flagship degree. A showcase is a cousin; a pilot is new and unproven; the original sense is a naval command ship. Do not let a film crew stand in for a fire door that opens.',
    ['A flagship course still needs a fire door that opens, not only a film crew.', 'Showcase is marketing. Lead is informal. A prototype is not yet the flagship. Prestige is a feeling. Statutory kit is a condition of opening. Shoot the film after the door works.'],
    'The lead offering of a body. Close: showcase. Contrast: a pilot. Original: a command ship. A crew ≠ a certificate.',
    ['showcase']
  ),
  flaw: L(
    'A flaw is a fault or weakness that spoils a thing, argument, or person: a flaw in the design, a tragic flaw. A defect is a close twin, often physical; a mistake can be a single act; perfection sits opposite. Flawed (this batch) is the adjective. Do not treat kerning as the finding when the n is empty.',
    ['The flaw was an empty n, not the kerning on the title page.', 'Fault is everyday. Weakness is a cousin. A typo is smaller unless it changes a dose. Design is presentation. The empty cell is the substance. Fix the count; then the typeface.'],
    'A defect; a weak point. Everyday: fault. Adjective: flawed (this batch). Contrast: a cosmetic typo. Empty n is the finding.',
    ['defect']
  ),
  flawed: L(
    'Flawed means having faults that weaken the whole: a flawed method, flawed logic. Imperfect is milder and almost always true; defective often means the object does not work; a flaw (this batch) is the noun. Do not file a broken join as a “known quirk” and proceed.',
    ['A flawed join in the CSV is a halt, not a “known quirk”.', 'Imperfect is everyday and softer. Faulty is a close twin. Invalid is stronger in methods. A quirk is a story. A join that drops the night rows is a methods failure. Halt; repair; then resume.'],
    'Faulty; damaged by a defect. Noun: flaw (this batch). Milder: imperfect. A “quirk” that drops rows is still a halt.',
    ['faulty']
  ),
  fledgling: L(
    'Fledgling as an adjective means new and not yet established: a fledgling charity, a fledgling industry. The noun is a young bird just able to fly. New is everyday; embryonic is even earlier; mature sits opposite. Do not treat novelty as a waiver of ethics.',
    ['A fledgling centre still files ethics; novelty is not a waiver.', 'New is everyday. Nascent is a formal twin. Start-up is commercial. Age of the letterhead is not a methods holiday. Small and new still means a dated form. File it; then grow.'],
    'Young; not yet established. Everyday: new. Noun: a young bird. Novelty ≠ an ethics waiver.',
    ['nascent']
  ),
  flicker: L(
    'To flicker is to shine unsteadily, or of a feeling or expression to appear briefly: lights flicker, hope flickered, a smile flickered. Flash (already in the dictionary) is brighter and shorter; glow is steadier; a power cut is the end of the light. Do not treat a hopeful text as a filled rota.',
    ['Hope flickered when a spare marker texted; the rota still had a blank.', 'Blink is eyes or LEDs. Flare is stronger. Appear is everyday and longer-lasting. A text is a maybe. A name on the rota is cover. Keep the maybe in the chat; put the name in the grid.'],
    'Shine/appear unsteadily or briefly. Close: flash (already in the dictionary). Contrast: a steady glow; a filled rota. A text ≠ a name.',
    ['glimmer']
  ),
  flinch: L(
    'To flinch is to draw back suddenly from pain, fear, or an unwelcome fact: flinch from the truth, without flinching. Wince is a close twin (often pain); recoil is stronger; face up to sits opposite. Do not leave the night cohort out of the abstract because the gap is awkward.',
    ['Do not flinch from naming the missing night cohort in the abstract.', 'Wince is often physical. Recoil is bigger. Hesitate (already in the dictionary) is delay, not a jerk away. Awkwardness is a feeling. An abstract is a public claim. Name the hole; the feeling can follow.'],
    'Draw back; avoid facing it. Close: wince / recoil. Contrast: hesitate (already in the dictionary). Awkward ≠ omit the night n.',
    ['wince']
  ),
  foil: L(
    'To foil a plan is to stop it succeeding: foil a leak, foil a robbery. Prevent is everyday and wider; thwart is a close formal twin; a foil (noun) is also thin metal, or a contrast that makes another person clearer. Do not treat a poster as the intervention that stopped the leak.',
    ['A named invigilator foiled the leak; a poster about “integrity” did not.', 'Stop is everyday. Thwart is the close twin. Block is physical. Aluminium foil is the kitchen lookalike. A person on the door is a measure. A slogan is paper. Put a name on the door.'],
    'Stop a plan from working. Everyday: prevent. Close: thwart. Lookalike noun: kitchen foil; a literary contrast. A poster ≠ a person.',
    ['thwart']
  ),
  foliage: L(
    'Foliage is leaves considered as a mass: dense foliage, autumn foliage. Leaves is the everyday plural; greenery is informal; a single leaf is not foliage. Do not caption a blocked fire door as a green campus win.',
    ['Foliage blocking the fire door is a hazard, not a “green campus” caption.', 'Leaves is everyday. Canopy is trees from above. Undergrowth is low. Planting can be policy. An exit must stay clear. Cut the ivy; keep the caption for the courtyard, not the door.'],
    'Leaves as a mass. Everyday: leaves. Contrast: a single leaf; undergrowth. Green copy ≠ a clear exit.',
    ['leaves']
  ),
  folklore: L(
    'Folklore is a community’s traditional stories, customs, and beliefs; in institutions it also means unofficial “what everyone knows”. Myth is a cousin (often untrue); a regulation is written and binding; an anecdote is one story. Do not let corridor custom outrank the board’s sitting rules.',
    ['Corridor folklore about “we always start late” is not the board’s regulation.', 'Tradition is everyday and wider. Legend is a tale. Policy is written. Custom in a corridor is not an amendment. Start times sit in the timetable. Teach the story at lunch; start on the published minute.'],
    'Tradition; also unofficial myth. Everyday: tradition. Contrast: a regulation. “We always…” is not an amendment.',
    ['tradition']
  ),
  footing: L(
    'A footing is a secure basis for standing, a relationship, or an argument: on an equal footing, lose your footing, a legal footing. Basis and standing are cousins; a foundation (already in the dictionary) is often larger and more structural. Do not redraft the slogan and claim the inquiry is now on firm ground.',
    ['The inquiry found its footing when the badge log was opened, not when the slogan was redrafted.', 'Basis is everyday. Footing can also be how you plant your feet. A foundation is already in this course. Branding is paint. A log is evidence. Open the file; then the slogan if you still want it.'],
    'A secure basis / standing. Everyday: basis. Close: foundation (already in the dictionary). Also physical (not falling). A slogan is not ground.',
    ['basis']
  ),
  forbidding: L(
    'Forbidding means looking unfriendly, stern, or likely to stop you: a forbidding notice, a forbidding cliff. Stern (already in the dictionary) is manner; hostile (already in the dictionary) is opposition; welcoming sits opposite. Forbid (already in the dictionary) is the verb. A blunt sign can still be better than a silent locked exit.',
    ['A forbidding notice on the fire door is still better than a locked exit with no notice.', 'Stern is already in this course. Bleak is atmosphere. A ban is the rule. Tone of the sign is style. A locked fire door is an emergency. Write the notice; unlock the door; then worry about warmth of wording.'],
    'Stern / off-putting in look. Verb: forbid (already in the dictionary). Close: stern / hostile (already in the dictionary). A locked exit is worse than a blunt sign.',
    ['stern']
  ),
  forefront: L(
    'The forefront is the leading or most visible position: at the forefront of research, bring to the forefront. Front is everyday; vanguard is a close twin, often movements; background sits opposite. Do not lead the abstract with a stock photograph while the n is buried.',
    ['Put the n at the forefront of the abstract, not a stock photograph of a lab coat.', 'Front is everyday. Foreground is visual layout. Cutting edge is informal. A hero image is design. The count is the claim. Lead with the number; the coat can sit in the margin.'],
    'The leading position. Everyday: front. Close: vanguard. Opposite flavour: background. A stock photo is not the lead finding.',
    ['vanguard']
  ),
  forensic: L(
    'Forensic means using scientific methods to investigate crime or, by extension, a rigorously detailed examination: forensic evidence, a forensic audit, a forensic reading of a CSV. Scientific is wider; legal is the court setting; casual sits opposite. Do not let charisma replace opening the file.',
    ['A forensic read of the CSV beat a charismatic chair.', 'Scientific is everyday-academic and wider. Pathological in forensics is the mortuary sense. A vibe in the room is not a method. Rows that fail to join are the evidence. Open the sheet; then the speeches.'],
    'Scientific / rigorously detailed investigation. Wider: scientific. Contrast: a casual glance; charisma. Open the CSV.',
    ['scientific']
  ),
  foresight: L(
    'Foresight is seeing what is likely to happen and preparing: show foresight, a lack of foresight. Planning is everyday; hindsight (this batch) is understanding after the event; luck is not a plan. Do not hope that nobody is ill and call it a staffing model.',
    ['Foresight is a spare invigilator on the rota, not a hope that nobody is ill.', 'Planning is everyday. Prudence (already in the dictionary as prudent) is caution. Hindsight is this batch’s after-the-fact twin. Hope is a feeling. A named spare is a measure. Write the name before the sitting, not after the absence.'],
    'Planning ahead for what may happen. Everyday: planning. Opposite time: hindsight (this batch). Hope ≠ a spare on the rota.',
    ['planning']
  ),
  forge: L(
    'To forge can mean to build something strong through effort (forge an alliance, forge a career) or to fake a document or signature (forge a cheque). Build is everyday for the first sense; falsify (this batch) is the record-altering cousin of the second. A forge (noun) is a smith’s fire. Do not treat a car-park handshake as a written agreement on cover.',
    ['Forge a written agreement on cover; a handshake in the car park is not one.', 'Build is everyday. Counterfeit is the crime twin of the fake sense. Falsify (this batch) alters a true record; forging a signature invents authority. A handshake is not the log. Put the cover agreement on paper with a date.'],
    'Build with effort (or fake a document). Everyday: build. Crime cousin: counterfeit. Falsify (this batch) alters records. A handshake is not the agreement.',
    ['build']
  ),
  formality: L(
    'A formality is an official procedure; it can also mean a step done only because the rules require it (a mere formality). Formal (already in the dictionary) is the adjective; formally (this batch) is the adverb; informality is the opposite flavour. Skipping a “mere” sign-in still wipes the badge log.',
    ['Signing in is a formality that still creates the badge log; skipping it is a gap.', 'Procedure is everyday. Red tape is the insult. A ceremony is public show. Mere means you think it does not matter. The log still needs the swipe. Do the step; then call it mere if you must.'],
    'An official step (sometimes “only for show”). Adjective: formal (already in the dictionary). Adverb: formally (this batch). A “mere” sign-in still makes the log.',
    ['procedure']
  ),
  formally: L(
    'Formally means in an official way, according to rules or ceremony: formally adopt, formally dressed. Officially is the close twin; formerly (already in the dictionary) means previously — a cruel lookalike. Informal sits opposite. A corridor nod is not adoption of an embargo.',
    ['Formally adopt the embargo in the minute; a nod in the corridor is not adoption.', 'Officially is the close twin. Ceremonially stresses ritual. Formerly is already in this course and means before. A nod has no timestamp. The minute has a date. Write the adoption; leave the corridor for greetings.'],
    'Officially (not formerly). Close: officially. Lookalike: formerly (already in the dictionary) = previously. A nod is not a minute.',
    ['officially']
  ),
  formative: L(
    'Formative means having a strong influence on how someone or something develops; in assessment it means feedback for learning, not the final grade: formative years, formative assessment. Influential is a cousin; summative is the final-mark opposite in education; format (already in the dictionary) is layout — a lookalike. A smiley is not feedback that names the clause.',
    ['Formative feedback names the clause; a smiley face is not formative.', 'Influential is a cousin. Summative is the exam/final mark. Formation (already in the dictionary) is the noun of forming. A sticker is morale. A clause is the work. Name the clause; keep the sticker for the fridge.'],
    'Shaping development (also: not the final mark). Contrast: summative. Lookalike: format (already in the dictionary). A smiley ≠ a named clause.',
    ['influential']
  ),
  fortify: L(
    'To fortify is to strengthen a place, system, food, or person against attack, failure, or deficiency: fortify a town, fortify a rota, fortified flour. Strengthen is everyday; reinforce is a close twin; weaken sits opposite. Do not treat a wellbeing poster as the spare invigilator.',
    ['Fortify the night rota with a named spare, not with a wellbeing poster.', 'Strengthen is everyday. Reinforce is the close twin. Enrich is the food sense. A poster is comms. A name on the night grid is capacity. Print the poster after the name exists.'],
    'Strengthen against failure. Everyday: strengthen. Close: reinforce. Also: add nutrients to food. A poster is not a spare.',
    ['strengthen']
  ),
  fraudulent: L(
    'Fraudulent means intended to deceive, usually for money, status, or unfair advantage: fraudulent claims, a fraudulent n. Dishonest is everyday and wider; fraud (already in the dictionary) is the noun; falsify (this batch) is the verb of altering a record. Rounding for a headline is still a misconduct file if the n is invented.',
    ['A fraudulent n in the abstract is a misconduct file, not a “rounding convention”.', 'Dishonest is everyday. Criminal is stronger and legal. Fraud is already in this course. A convention is an agreed rule with a note. An invented count is not a convention. File the true n or file the case.'],
    'Dishonest and intended to deceive. Noun: fraud (already in the dictionary). Verb cousin: falsify (this batch). Invented n ≠ rounding.',
    ['dishonest']
  ),
  fruitful: L(
    'Fruitful means producing good, useful results: a fruitful meeting, fruitful collaboration. Productive is the close twin; fertile (already in the dictionary) is often land or biology; fruitless sits opposite. A long lunch is not a result.',
    ['A fruitful review names the fire-door fault; a long lunch is not fruitfulness.', 'Productive is the close twin. Successful is wider. Fertile is already in this course. Hospitality is the sandwiches. A named fault is an output. Minute the door; enjoy the lunch after.'],
    'Producing useful results. Close: productive. Contrast: fruitless; fertile (already in the dictionary) is often biological. Lunch ≠ a finding.',
    ['productive']
  ),
  fulfilment: L(
    'Fulfilment (US fulfillment) is carrying out a promise, contract, or requirement; also a personal sense of satisfaction: fulfilment of a duty, a sense of fulfilment. Fulfil (already in the dictionary) is the verb; completion is a cousin; a branded mug is not performance of the contract. British spelling keeps -ment after fulfil.',
    ['Fulfilment of the contract is a staffed sitting, not a branded mug.', 'Completion is a cousin. Delivery is logistics/commerce. Satisfaction is the inner sense. Merchandise is comms. Names on the rota are performance. Hand out mugs after the sitting is staffed.'],
    'Carrying out a promise / requirement. Verb: fulfil (already in the dictionary). Also inner satisfaction. British: fulfilment. A mug is not performance.',
    ['completion']
  ),
  gait: L(
    'Gait is a person’s manner of walking: an unsteady gait, gait analysis. Walk is the everyday verb/noun; stride is longer steps; gate is a lookalike spelling (an opening). In occupational health it is an observation, not prose colour. Do not write it as atmosphere and skip the incident form.',
    ['A changed gait after twelve-hour invigilation is an occupational-health note, not colour writing.', 'Walk is everyday. Pace is speed. A gate is a barrier — different word. Style in a novel can use gait. A night sitting is work. Log the hours and the observation; leave the adjectives for the novel.'],
    'How someone walks. Everyday: walk. Mix-up: gate. In work settings it is a health note, not décor.',
    ['walk']
  ),
  galvanise: L(
    'To galvanise (US galvanize) is to shock or stir people into action; also to coat iron with zinc. Spur and jolt are cousins; soothe sits opposite. British spelling keeps -ise. A new logo is not the jolt; an incident log can be.',
    ['The incident log galvanised the board; the new logo did not.', 'Spur is a close twin. Motivate is milder and everyday. Zinc-coating is the factory sense. Branding is paint. A dated incident is a fact. Table the log; then the rebrand if you still need it.'],
    'Spur into action (British -ise). Close: spur. Also: zinc-coat metal. A logo is not the jolt; a log can be.',
    ['spur']
  ),
  generosity: L(
    'Generosity is giving more than is strictly required — money, time, attention, or judgement: generosity of spirit, an act of generosity. Generous (already in the dictionary) is the adjective; kindness is wider; meanness sits opposite. Biscuits are not night cover.',
    ['Generosity with biscuits is not generosity with cover on the night shift.', 'Kindness is everyday and wider. Charity can be organised giving. Generous is already in this course. Catering is hospitality. A named spare is resource. Fund the shift; keep the biscuits as extras.'],
    'Giving more than the minimum. Adjective: generous (already in the dictionary). Contrast: meanness. Catering ≠ night cover.',
    ['kindness']
  ),
  genetically: L(
    'Genetically means in a way that concerns genes or DNA: genetically modified, genetically related. Genetic (already in the dictionary) is the adjective; biologically is wider; socially and culturally are different explanations. Do not slide a methods line into a lifestyle caption.',
    ['Genetically modified is a methods line; do not smuggle it into a lifestyle caption.', 'Biologically is wider. Hereditary (this batch) is family-line, not only DNA tests. A caption is comms. Modification status is a protocol fact. Keep the phrase in methods; keep the picnic out of the cell.'],
    'In terms of genes / DNA. Adjective: genetic (already in the dictionary). Wider: biologically. A lifestyle caption is not a methods line.',
    ['biologically']
  ),
  genocide: L(
    'Genocide is the crime of intent to destroy, in whole or in part, a national, ethnic, racial, or religious group. Massacre is mass killing without that legal definition; ethnic cleansing is a related, not identical, term; a hard exam is not genocide. Do not use the word as campus slang.',
    ['Genocide is a legal finding by a competent body, not a campus metaphor for a strict rubric.', 'Massacre is mass killing. War crime is a wider legal umbrella. Atrocity is moral language. A rubric is an assessment tool. Scale and law matter. Keep the word for the crime; keep the module in the handbook.'],
    'Intent to destroy a protected group (law). Contrast: massacre; war crime (wider). Not a metaphor for a strict test.',
    ['massacre']
  ),
  globalise: L(
    'To globalise (US globalize) is to make a product, brand, or system operate worldwide. Globalisation (already in the dictionary) is the noun; internationalise is a cousin; local sits opposite. British spelling keeps -ise. A worldwide logo does not move a local fire certificate.',
    ['To globalise the brand is marketing; the fire certificate stays local.', 'Expand is everyday. Globalisation is already in this course. Offshore is a different, often labour, story. Branding can travel. Occupancy law is the building you are in. File the local certificate; then the global deck.'],
    'Make worldwide (British -ise). Noun: globalisation (already in the dictionary). Contrast: local statutory kit. A brand tour ≠ a certificate.',
    ['internationalise']
  ),
  gloss: L(
    'To gloss (often gloss over) is to treat a problem as smoother or smaller than it is; a gloss is also a short explanation of a word. Hide is everyday; spin is media; a glossary (this batch) is a list of such notes. Do not rename an empty n as streamlined methods.',
    ['Do not gloss a missing n as “streamlined methods”.', 'Hide is everyday. Downplay is a cousin. Annotate is the honest short-note sense. Streamlined is a process claim. A blank cell is a hole. Either fill the n or say it is missing; do not polish the hole.'],
    'Smooth over; also annotate briefly. Everyday: hide / downplay. List of notes: glossary (this batch). Streamlined ≠ a blank n.',
    ['downplay']
  ),
  glossary: L(
    'A glossary is an alphabetical list of specialist terms with short definitions, usually at the end of a book or handbook. A dictionary is general; a gloss (this batch) can be one short note; an index lists where words appear. A list of terms is not a worked example of the n.',
    ['A glossary in the handbook is not a substitute for a worked example of the n.', 'Dictionary is the general book. Index is locations. A key on a map is a cousin. Definitions help readers. A sample-size calculation is a method. Define the word; still show the count.'],
    'A mini-dictionary of terms in a text. One note: a gloss (this batch). Contrast: index; a worked example. Terms ≠ the n.',
    ['dictionary']
  ),
  gratify: L(
    'To gratify is to please someone or to satisfy a wish or feeling: gratify curiosity, a gratifying result. Please is everyday; satisfy is a close twin; gratitude (already in the dictionary) is the noun of thankfulness. A pleasing headline does not lift an embargo.',
    ['A gratifying headline does not license an embargo breach.', 'Please is everyday. Satisfy is the close twin. Indulge can be too much. Gratitude is already in this course. Comms like a bounce. A date on an embargo still binds. Keep the date; enjoy the headline after it lifts.'],
    'Please / satisfy a wish. Everyday: please. Noun cousin: gratitude (already in the dictionary). A bounce ≠ a lifted date.',
    ['please']
  ),
  gridlock: L(
    'Gridlock is traffic that cannot move, or decision-making that cannot move: city-centre gridlock, political gridlock. A jam is everyday; a backlog is a queue of work; progress sits opposite. Do not boast “robust scrutiny” of a queue that never clears.',
    ['Gridlock in the approvals queue is a dated backlog, not “robust scrutiny” as a boast.', 'Jam is everyday roads. Deadlock is two sides stuck. Scrutiny is a real duty with dates. A queue that ages is delay. Put timestamps on the pile. Clear it, or minute why it cannot move.'],
    'Total jam (roads or decisions). Everyday: jam. Close: deadlock / backlog. Scrutiny has dates; a freeze is not a boast.',
    ['deadlock']
  ),
  harmonious: L(
    'Harmonious means friendly and without conflict, or pleasant because the parts fit: a harmonious meeting, harmonious colours. Harmony (already in the dictionary) is the noun; peaceful is everyday; discord sits opposite. A smiling photograph is not a consultation record.',
    ['A harmonious photo call is not evidence that the night cohort was consulted.', 'Peaceful is everyday. Compatible is a cousin for people/systems. Harmony is already in this course. A photocall is comms. Consultation is a list, a date, a response. Take the photo after the night names are on the list.'],
    'Peaceful / well matched. Noun: harmony (already in the dictionary). Contrast: discord. A photo is not a consultation log.',
    ['peaceful']
  ),
  hereditary: L(
    'Hereditary means passed from parent to child — a title, office, disease, or trait: a hereditary peer, hereditary risk. Inherited is a close twin; genetic / genetically (this batch) stress DNA; elected sits opposite for posts. A title on the letterhead does not waive methods.',
    ['A hereditary title on the letterhead does not waive the n or the embargo.', 'Inherited is the close twin. Genetic is DNA-focused. Ancestral is older-family. Stationery is branding. Sample size is a methods fact. Rank does not fill the cell. Count the n; leave the title in the signature block.'],
    'Passed down the family line. Close: inherited. DNA adverb: genetically (this batch). A title ≠ a methods waiver.',
    ['inherited']
  ),
  heterogeneous: L(
    'Heterogeneous means made of different kinds, not uniform: a heterogeneous sample, heterogeneous data. Mixed is everyday; homogeneous (not necessarily in this course) sits opposite; diverse often stresses social mix. Do not average away the night slice and call the cohort one thing.',
    ['A heterogeneous cohort still needs the night slice named in the n, not averaged away.', 'Mixed is everyday. Varied is a cousin. Homogeneous means all alike. Diversity can be a policy word. A mean that hides a shift is a methods trick. Report the slices; then the mean if it still helps.'],
    'Mixed; not all the same. Everyday: mixed. Opposite: homogeneous. A mean that hides the night slice is not the n.',
    ['mixed']
  ),
  hindsight: L(
    'Hindsight is understanding after the event: in hindsight, with the benefit of hindsight. Foresight (this batch) is the before twin; memory is wider; a completed risk assessment is a document before the sitting. Do not file “we know now” as the form you never filled.',
    ['Hindsight about the jammed door is not a completed risk assessment.', 'Looking back is everyday. Foresight is this batch’s forward twin. A debrief is useful. A risk form is dated in advance. Wisdom after a jam is still late. Write the assessment before the door fails.'],
    'Wisdom after the fact. Everyday: looking back. Opposite time: foresight (this batch). After-the-fact insight ≠ a prior form.',
    ['retrospect']
  ),
  hinge: L(
    'To hinge on something is to depend entirely on it: the case hinged on one witness; also a door hinges on its hardware. Depend is everyday; rest on is a cousin; a hinge (noun) is the metal joint. Do not treat a film crew as the condition of a lawful sitting.',
    ['The sitting hinged on a second invigilator; the film crew was optional.', 'Depend is everyday. Turn on is a close idiom. The hardware sense is the door. Optional is extra. Cover is the condition. Book the second name; the cameras can wait in the corridor — not in the doorway.'],
    'Depend entirely on (hinge on). Everyday: depend. Noun: the metal joint on a door. A film crew is not the condition of sitting.',
    ['depend']
  ),
  hitherto: L(
    'Hitherto means until now, or until the time you mean, in formal prose: hitherto unpublished, hitherto neglected. Previously and until now are everyday; henceforth (not necessarily in this course) points forward; already can overlap. Do not honour a long-standing gap as tradition.',
    ['Hitherto the night shift had no spare; that is a gap, not a tradition to honour.', 'Until now is everyday. Previously is a close twin. Formerly (already in the dictionary) is also “before”. Tradition is a claim. A blank on the night rota is a risk. Name it as a gap; then staff it.'],
    'Until now (formal). Everyday: until now / previously. Contrast: a tradition (a claim). A long gap is still a gap.',
    ['previously']
  ),
  hoard: L(
    'To hoard is to collect and hide a store of something, often more than needed: hoard supplies, hoard data. Store is everyday and neutral; stockpile can be official; share and publish sit opposite. A private drive full of incident logs is not transparency.',
    ['Do not hoard the incident log in a private drive while the press note claims “full transparency”.', 'Store is everyday. Stockpile can be planned reserves. A hoard (noun) is the stash. Treasure is storybook. Transparency is a public file path. Comms copy is a sentence. Put the log where the policy said it would sit.'],
    'Stockpile and hide away. Everyday: store. Noun: a hoard. Opposite flavour: publish / share. A private drive ≠ transparency.',
    ['stockpile']
  ),
  holistic: L(
    'Holistic means dealing with the whole person or system, not one fragment: holistic care, a holistic review. Whole is everyday; comprehensive is a cousin; piecemeal sits opposite. Skipping the fire door is not a whole-system review.',
    ['A holistic review that skips the fire door is not holistic.', 'Whole is everyday. Comprehensive is a close twin. Joined-up is UK policy-speak. A chapter on wellbeing is a part. An exit is a statutory part. Include the door, or drop the adjective.'],
    'Of the whole, not one fragment. Everyday: whole. Close: comprehensive. Opposite: piecemeal. Skipping a fire door voids the adjective.',
    ['comprehensive']
  ),
  homage: L(
    'Homage is public respect or tribute: pay homage, an homage to a designer. Tribute is the close twin; respect is everyday; a citation is how you credit a method. Do not file last year’s layout as a methods source.',
    ['An homage to last year’s design is not a methods citation.', 'Tribute is the close twin. Honour (already in the dictionary) is wider. Imitation can be silent. Design history is acknowledgements. A method needs a source you can recover. Thank the designer; cite the protocol.'],
    'A public tribute of respect. Close: tribute. Everyday: respect. Contrast: a methods citation. Layout history ≠ a source.',
    ['tribute']
  ),
  horrify: L(
    'To horrify is to shock someone with something very unpleasant or morally wrong: horrified by the figures, a horrifying lapse. Shock is everyday; appal is a close twin; horror (already in the dictionary) is the noun. A plain cover is not the scandal; an empty n can be.',
    ['The empty n cell should horrify a reviewer more than a plain cover.', 'Shock is everyday. Appal is the close twin. Disgust is thicker. Design is taste. A missing count is a methods failure. Be shocked by the cell; leave the cover for the art meeting.'],
    'Shock with something awful. Everyday: shock. Close: appal. Noun: horror (already in the dictionary). A plain cover is not the outrage.',
    ['appal']
  ),
  hover: L(
    'To hover is to stay in one place in the air, or to wait close by (often unhelpfully): a helicopter hovered, hover over a decision, hover at someone’s shoulder. Wait is everyday; linger (already in the dictionary) is stay on; land and decide sit opposite. A camera at the fire door is a hazard, not colour.',
    ['Do not hover at the fire door with a camera during invigilation.', 'Wait is everyday. Loiter is suspicious lingering. A cursor can hover on a screen. Invigilation needs a clear exit. Press is a different purpose. Stand back from the door; shoot after the sitting, elsewhere.'],
    'Hang in the air / wait nearby. Everyday: wait. Close: linger (already in the dictionary). A camera at an exit is a hazard.',
    ['linger']
  ),
  humidity: L(
    'Humidity is the amount of water vapour in the air: high humidity, relative humidity. Damp is everyday and often about surfaces; moisture is the water itself; dryness sits opposite. Curled scripts are a conditions log, not “atmosphere”.',
    ['Humidity in the hall that curled the scripts is a conditions log, not “atmosphere”.', 'Damp is everyday. Moisture is the water. Heat is temperature — a different axis. Atmosphere is a vibe word. Paper that will not stack is a fact. Log the reading; then the poetry if you still want it.'],
    'How damp the air is. Everyday: damp. Contrast: heat (temperature); atmosphere (vibe). Curled scripts belong in the log.',
    ['dampness']
  ),
  hymn: L(
    'A hymn is a religious song of praise; by extension, a text that praises something strongly: a hymn of praise, a hymn to excellence. Song is everyday; anthem is a public or national cousin; a policy is a rule you can audit. UK offices also say sing from the same hymn sheet (agree in public). A homepage ode does not staff a sitting.',
    ['A hymn to “excellence” on the homepage does not staff the sitting.', 'Song is everyday. Anthem is civic/brand. Psalm is scripture. Excellence is a slogan until there is a rota. Cover is names and times. Write the rota; keep the hymn for the choir, or for the footer after the names exist.'],
    'A song/text of praise. Everyday: song. Close: anthem. Idiom: the same hymn sheet. A homepage ode ≠ a staffed sitting.',
    ['anthem']
  ),
}
