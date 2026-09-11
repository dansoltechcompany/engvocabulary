const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C1T = {
  impartiality: L(
    'Impartiality is fairness that comes from not supporting one side: impartiality of a panel, a duty of impartiality. Impartial (already in the dictionary) is the adjective; fairness (already in the dictionary) is the everyday noun. A smile in the lobby is courtesy, not a chairing rule.',
    ['Impartiality of the remarks panel is a named independent chair, not a smile in the lobby.', 'Neutrality is the close twin. Bias sits opposite. A lobby is branding. A named chair is a minute. Appoint the chair; keep the smile for the foyer.'],
    'Fairness; not taking sides. Adjective: impartial (already in the dictionary). A smile ≠ a chair.',
    ['neutrality', 'even-handedness', 'fairness']
  ),
  impasse: L(
    'An impasse is a situation in which no further progress is possible: talks reached an impasse, break the impasse. Deadlock (already in the dictionary) is the close twin; a pause that still moves is not an impasse. A foyer banner is comms, not a settlement.',
    ['Talks reached an impasse on the night-cover clause; a foyer banner is not a settlement.', 'Deadlock is already in this course. Stalemate is the chess cousin. A banner is branding. A signed minute is the way out. Name the sticking point; then print the banner if you still must.'],
    'A deadlock; no way forward. Close: deadlock (already in the dictionary). A banner ≠ a settlement.',
    ['deadlock', 'stalemate', 'standstill']
  ),
  impediment: L(
    'An impediment is something that delays or blocks progress: a legal impediment, an impediment to opening. Obstacle (already in the dictionary) is the everyday twin; hindrance is milder. A styling delay is design talk, not a missing certificate.',
    ['A missing fire certificate is an impediment to opening, not a styling delay.', 'Obstacle is already in this course. Barrier is a cousin. Styling is a mood board. A certificate is a file. File the paper; then dress the foyer.'],
    'A block or hindrance. Everyday: obstacle (already in the dictionary). Styling ≠ a missing certificate.',
    ['obstacle', 'hindrance', 'barrier']
  ),
  impenetrable: L(
    'Impenetrable means impossible to get through, or impossible to understand: impenetrable woodland, an impenetrable clause. Opaque is the meaning twin; clear sits opposite. A summary slide is comms, not the annex.',
    ['An impenetrable legal annex still binds; a summary slide is not the clause.', 'Opaque is the sense twin. Dense is milder. A slide is branding. An annex is the source. Cite the annex; keep the slide for the stairs.'],
    'Impossible to pass through or understand. Close: opaque. A slide ≠ the annex.',
    ['opaque', 'inscrutable', 'dense']
  ),
  imperceptible: L(
    'Imperceptible means too slight, gradual, or faint to be noticed: an imperceptible change, an imperceptible difference. Gradual (already in the dictionary) can still be noticed; undetectable is the lab twin. Rounding “just a little” is still a methods fiction.',
    ['An imperceptible rounding in the abstract is still a methods fiction.', 'Undetectable is the lab twin. Tiny is everyday. A little is talk. A rounding rule is a codebook. Write the rule; do not hide the tenth.'],
    'Too small to notice. Close: undetectable. “Just a little” ≠ a methods rule.',
    ['undetectable', 'faint', 'minute']
  ),
  imperialist: L(
    'An imperialist is a person or policy that seeks to extend empire or domination: imperialist policy, an imperialist reading. Colonial is the history twin; occupy (already in the dictionary) is the verb of control. A preface is branding; named colony sources are methods.',
    ['An imperialist preface does not fill an n; name the colony sources in the frame.', 'Colonial is the archive twin. Expansionist is a cousin. A preface is colour. A source list is methods. Cite the holdings; then write the preface if it still helps.'],
    'Of empire-building or domination. Close: colonial. A preface ≠ named sources.',
    ['colonial', 'expansionist', 'dominating']
  ),
  imperil: L(
    'To imperil is to put someone or something in danger (formal): imperil a sitting, imperil lives. Endanger is the close twin; jeopardise is a cousin. A wreath is comms, not a fire-door log.',
    ['An unlocked fire door will imperil the sitting; a wreath is not a log.', 'Endanger is the close twin. Jeopardise is a cousin. A wreath is branding. A door check is a certificate. Log the lock; then lay the wreath if you still wish.'],
    'Put in danger (formal). Close: endanger. A wreath ≠ a fire-door log.',
    ['endanger', 'jeopardise', 'risk']
  ),
  implausible: L(
    'Implausible means not seeming reasonable or likely to be true: an implausible claim, an implausible alibi. Plausible (already in the dictionary) sits opposite; unlikely is milder. “The printer jammed” is still an audit fail if the n is missing.',
    ['An implausible alibi for the missing n — “the printer jammed” — still fails audit.', 'Unlikely is milder. Incredible is hotter. A jam is a story. A count is a file. Restore the n; keep the jam for the IT ticket.'],
    'Hard to believe; not convincing. Opposite: plausible (already in the dictionary). A jam story ≠ a filled n.',
    ['unlikely', 'unconvincing', 'incredible']
  ),
  implode: L(
    'To implode is to collapse inwards; of an organisation, to fail suddenly from within: a building implodes, a rota implodes. Collapse (already in the dictionary) is wider; explode is outwards. A slogan spare is branding, not cover.',
    ['The night rota will implode if the spare is a slogan.', 'Collapse is already in this course and wider. Fail is everyday. A slogan is comms. A named spare is cover. Write the name; then print the slogan if you must.'],
    'Collapse inwards, or fail from within. Wider: collapse (already in the dictionary). A slogan ≠ cover.',
    ['collapse', 'crumble', 'fail']
  ),
  imprecise: L(
    'Imprecise means not exact or accurately expressed: imprecise wording, an imprecise figure. Precise (already in the dictionary) sits opposite; vague (already in the dictionary) is the close twin. “About two hundred” is talk, not an occupancy cap.',
    ['An imprecise occupancy line is still not a cap; write the figure.', 'Vague is already in this course. Approximate is milder. About is a corridor. A cap is a certificate. Put the number on the paper; save about for the café.'],
    'Not exact. Opposite: precise (already in the dictionary). “About” ≠ a cap.',
    ['vague', 'inexact', 'approximate']
  ),
  imposition: L(
    'An imposition is an unwelcome demand or burden, or the act of imposing a rule or tax: a last-minute imposition, the imposition of a freeze. Impose (already in the dictionary) is the verb; burden (already in the dictionary) is the everyday noun. Agility is a slogan, not a 200-page dump.',
    ['A last-minute imposition of a 200-page annex is a burden, not “agility”.', 'Burden is already in this course. Demand is milder. Agility is branding. An annex is a file. Table the paper with notice; keep agility for the prospectus.'],
    'A burden placed on someone, or the act of imposing. Verb: impose (already in the dictionary). “Agility” ≠ a dump.',
    ['burden', 'demand', 'encumbrance']
  ),
  impromptu: L(
    'Impromptu means done without being planned or prepared: an impromptu speech, an impromptu spare. Unplanned is everyday; rehearsed sits opposite. A corridor name is still a log, not a vibe.',
    ['An impromptu spare named in the corridor is still a log, not a vibe.', 'Unplanned is everyday. Spontaneous is warmer. A vibe is a feeling. A signature is a rota. Write the name; then call it spontaneous if you still want to.'],
    'Unplanned; on the spot. Everyday: unplanned. A vibe ≠ a signed spare.',
    ['unplanned', 'spontaneous', 'unrehearsed']
  ),
  inadequacy: L(
    'Inadequacy is the state of not being enough, or not being good enough: inadequacy of a sample, a sense of inadequacy. Adequate (already in the dictionary) sits opposite; shortage is of quantity only. A printing delay is ops, not a missing frame.',
    ['Inadequacy of the sampling frame is a methods fail, not a printing delay.', 'Insufficiency is the quantity twin. Shortage is narrower. A printer is ops. A frame is a list. Name the slice; then fix the printer.'],
    'Not enough, or not good enough. Opposite: adequate (already in the dictionary). A print delay ≠ a missing frame.',
    ['insufficiency', 'shortcoming', 'deficit']
  ),
  inadvertent: L(
    'Inadvertent means not intentional; done by accident: an inadvertent leak, inadvertent omission. Unintentional is the close twin; deliberate sits opposite. A tweet before midnight is still an embargo breach.',
    ['An inadvertent tweet before midnight is still an embargo breach.', 'Unintentional is the close twin. Accidental is everyday. Intent is a feeling. A timestamp is the rule. Wait for the lift; then post.'],
    'Unintentional; accidental. Close: unintentional. A tweet ≠ a lifted embargo.',
    ['unintentional', 'accidental', 'unwitting']
  ),
  inaugurate: L(
    'To inaugurate is to mark the official beginning of a post, building, or era: inaugurate a hall, inaugurate a term of office. Official (already in the dictionary) is the adjective of the act; open is everyday. A ribbon is comms, not an occupancy certificate.',
    ['Inaugurate the hall after the occupancy certificate, not instead of it.', 'Open is everyday. Commission is the plant twin. A ribbon is branding. A certificate is a file. Sign the occupancy; then cut the ribbon.'],
    'Open or start officially. Everyday: open. A ribbon ≠ an occupancy certificate.',
    ['open', 'commission', 'initiate']
  ),
  incarcerate: L(
    'To incarcerate is to put someone in prison (formal): incarcerate an offender, risk of being incarcerated. Imprison (already in the dictionary) is the close twin; detain is shorter and not always a sentence. A film still is branding, not a defence.',
    ['The court may incarcerate a leak of unmarked scripts; a film still is not a defence.', 'Imprison is already in this course. Jail is informal. A still is branding. A script seal is a log. Keep the seal; archive the still.'],
    'Imprison (formal). Close: imprison (already in the dictionary). A film still ≠ a defence.',
    ['imprison', 'jail', 'detain']
  ),
  inception: L(
    'Inception is the beginning of an organisation, project, or process (formal): from inception, since its inception. Beginning (already in the dictionary) is everyday; origin is the source twin. A founding film does not count as an n.',
    ['From inception the study owed an n; a founding film does not count.', 'Beginning is already in this course. Origin is the source twin. A film is branding. A protocol is a file. Date the protocol; then shoot the film if you still must.'],
    'The formal start of something. Everyday: beginning (already in the dictionary). A founding film ≠ an n.',
    ['beginning', 'outset', 'origin']
  ),
  incidental: L(
    'Incidental means happening as a minor accompaniment, not as the main point: incidental music, incidental costs. Minor (already in the dictionary) is everyday; central sits opposite. Foyer music is not a sampling frame.',
    ['Incidental foyer music is not a sampling frame; name the slice.', 'Secondary is the close twin. Peripheral is a cousin. Music is décor. A named slice is methods. Write the slice; keep the playlist for the stairs.'],
    'Secondary; not the main thing. Close: secondary. Foyer music ≠ a frame.',
    ['secondary', 'peripheral', 'ancillary']
  ),
  incite: L(
    'To incite is to encourage people to act, especially in a violent or unlawful way: incite unrest, incite a walk-in. Provoke is wider; stir up is informal. Waiting for midnight is the embargo, not a lobby mood.',
    ['Do not incite a walk-in before the embargo lifts; wait for midnight.', 'Provoke is wider. Encourage is milder and often lawful. A lobby is talk. Midnight is a clock. Hold the door; then brief when the embargo lifts.'],
    'Stir people to (often unlawful) action. Wider: provoke. A lobby mood ≠ a lifted embargo.',
    ['provoke', 'instigate', 'stir up']
  ),
  incoherent: L(
    'Incoherent means not clear, logical, or well organised; hard to follow: an incoherent account, incoherent clauses. Coherent (already in the dictionary) sits opposite; muddled is milder. Wrong order is a methods fail, not a style.',
    ['An incoherent oral — clauses in the wrong order — is still a methods fail, not a style.', 'Muddled is milder. Confused is everyday. Style is a caption. Order is a codebook. Sequence the clauses; then polish the voice.'],
    'Unclear or illogical. Opposite: coherent (already in the dictionary). Wrong order ≠ a style.',
    ['muddled', 'confused', 'disjointed']
  ),
  incompetence: L(
    'Incompetence is lack of the skill or ability needed to do a job properly: professional incompetence, incompetence in a log. Competent (already in the dictionary) sits opposite; malpractice (already in the dictionary) is a named breach, not a learning caption. A seal miss is a file.',
    ['Incompetence in the seal log is a malpractice file, not “a learning moment”.', 'Inability is everyday. Malpractice is already in this course and hotter. A moment is a story. A seal is a log. Open the file; keep the story for the yearbook.'],
    'Inability to do the job. Opposite: competence. “A learning moment” ≠ a seal-log fail.',
    ['inability', 'ineptitude', 'incapacity']
  ),
  incompetent: L(
    'Incompetent means not having the skill or ability needed to do a job properly: an incompetent officer, declared incompetent. Incompetence (this batch) is the noun; capable sits opposite. Filming grit is branding, not a room list.',
    ['An incompetent invigilator still has to be named off the room, not filmed as grit.', 'Unskilled is milder. Inept (this batch) is clumsier. Grit is a caption. A room list is a rota. Take the name off; keep grit for the prospectus.'],
    'Not able to do the job. Noun: incompetence (this batch). Grit ≠ a named-off room.',
    ['unskilled', 'inept', 'incapable']
  ),
  inconsequential: L(
    'Inconsequential means not important; of no real consequence: an inconsequential remark, inconsequential variance. Unimportant (already in the dictionary) is everyday; trivial is a cousin. An empty n is not a caption you can retire.',
    ['An empty n is not inconsequential; a caption will not retire it.', 'Trivial is the close twin. Negligible is the quantity twin. A caption is branding. A cell is a count. Fill the cell; then write the caption if it still helps.'],
    'Too minor to matter. Everyday: unimportant (already in the dictionary). A caption ≠ a retired n.',
    ['trivial', 'negligible', 'unimportant']
  ),
  increment: L(
    'An increment is a regular, often small, increase in amount or value: a salary increment, budget in increments. Increase (already in the dictionary) is the everyday verb and noun; a jump is sudden. A crest price is comms, not a methods line.',
    ['Budget in increments on the methods line; a crest price is not a count.', 'Increase is already in this course. Step is everyday. A crest is a logo. A line is a number. Cost the fieldwork; then price the crest if you still must.'],
    'A small regular increase. Everyday: increase (already in the dictionary). A crest price ≠ a methods count.',
    ['increase', 'step', 'rise']
  ),
  incriminate: L(
    'To incriminate is to make someone appear guilty of a crime or fault: incriminate a colleague, self-incriminate. Guilt (already in the dictionary) is the noun; implicate is a close twin. A leaked draft is still an embargo risk.',
    ['A leaked draft may incriminate the officer who named the grade; keep the embargo.', 'Implicate is the close twin. Accuse is more direct. A draft is a file. Midnight is the rule. Hold the paper; then name the grade when the embargo lifts.'],
    'Make someone look guilty. Close: implicate. A leak ≠ a lifted embargo.',
    ['implicate', 'accuse', 'blame']
  ),
  indemnity: L(
    'Indemnity is protection against legal or financial loss, or a payment to cover that loss: professional indemnity, an indemnity clause. Indemnify (already in the dictionary) is the verb; insurance (already in the dictionary) is the everyday cousin. A crest on the wall is branding, not cover.',
    ['A crest on the wall is not indemnity; the insurer’s letter is.', 'Insurance is already in this course. Compensation is already in this course and is the payout twin. A crest is a logo. A letter is a file. File the letter; then hang the crest.'],
    'Protection against loss, or compensation. Verb: indemnify (already in the dictionary). A crest ≠ an insurer’s letter.',
    ['insurance', 'compensation', 'cover']
  ),
  indicative: L(
    'Indicative means showing that something is likely or true (indicative of); also a grammar mood: indicative of a trend, the indicative mood. Indicate (already in the dictionary) is the verb; suggestive is milder. A lobby cheer is not a filled n.',
    ['A lobby cheer is not indicative of a filled n.', 'Suggestive is milder. Symptomatic is the clinical twin. A cheer is branding. A count is methods. Write the n; then cheer if the figure holds.'],
    'Showing or suggesting (also: grammar mood). Verb: indicate (already in the dictionary). A cheer ≠ a filled n.',
    ['suggestive', 'symptomatic', 'pointing to']
  ),
  indoctrinate: L(
    'To indoctrinate is to teach a set of beliefs uncritically, especially political or religious ones: indoctrinate a cohort, resist being indoctrinated. Belief (already in the dictionary) is the content; instruct is neutral teaching. A creed is not a codebook.',
    ['Do not indoctrinate the cohort with a creed in place of a codebook.', 'Instruct is neutral. Brainwash is hotter and informal. A creed is a slogan. A codebook is methods. Name the variables; keep the creed off the briefing.'],
    'Teach a belief uncritically. Neutral twin: instruct. A creed ≠ a codebook.',
    ['brainwash', 'instruct', 'propagandise']
  ),
  induction: L(
    'Induction is a formal introduction to a job or organisation; also reasoning from cases, or the act of inducing: staff induction, induction of labour. Introduction (already in the dictionary) is everyday; a foyer film is comms, not a signed checklist.',
    ['Induction for new invigilators is a signed checklist, not a foyer film.', 'Orientation is the close twin. Introduction is already in this course. A film is branding. A checklist is a log. Get the signatures; then roll the film if you still want to.'],
    'A formal joining-in (also: reasoning / inducing). Close: orientation. A film ≠ a signed checklist.',
    ['orientation', 'introduction', 'initiation']
  ),
  industrious: L(
    'Industrious means hard-working and diligent: an industrious clerk, industrious revision. Diligent (already in the dictionary) is the close twin; lazy sits opposite. A film crew still waits for the ethics minute.',
    ['An industrious film crew still waits for the ethics minute.', 'Diligent is already in this course. Hard-working is everyday. A crew is branding. A signature is a file. Sign the minute; then shoot.'],
    'Hard-working. Close: diligent (already in the dictionary). Industry ≠ a skipped ethics minute.',
    ['diligent', 'hard-working', 'assiduous']
  ),
  inept: L(
    'Inept means clumsy, unskilful, or badly judged: an inept plan, inept handling. Clumsy is everyday; skilful sits opposite. A creative layout is still not an occupancy cap.',
    ['An inept seating plan still needs the occupancy cap, not a “creative layout”.', 'Clumsy is everyday. Bungling is harsher. Creative is a caption. A cap is a certificate. Keep the figure; save creative for the foyer art.'],
    'Clumsy or badly judged. Everyday: clumsy. “Creative layout” ≠ an occupancy cap.',
    ['clumsy', 'bungling', 'unskilful']
  ),
  inertia: L(
    'Inertia is unwillingness to change or act; in physics, resistance to a change in motion: institutional inertia, inertia of a body. Inaction is the everyday twin; momentum sits opposite. Stability is a slogan, not an empty spare list.',
    ['Inertia on the spare list is a cover failure, not “stability”.', 'Inaction is everyday. Sluggishness is milder. Stability is branding. A named spare is cover. Fill the cell; keep stability for the annual report.'],
    'Inaction, or resistance to change of motion. Everyday: inaction. “Stability” ≠ an empty spare list.',
    ['inaction', 'sluggishness', 'stagnation']
  ),
  inescapable: L(
    'Inescapable means impossible to avoid or deny: an inescapable conclusion, an inescapable cap. Avoid (already in the dictionary) sits opposite as a verb; inevitable is the close twin. A vibe of space is not a waiver.',
    ['The occupancy cap is inescapable; a vibe of space is not a waiver.', 'Inevitable is the close twin. Unavoidable is a cousin. A vibe is a feeling. A number on a certificate is the rule. Keep the number; save space for the catering.'],
    'Impossible to avoid. Close: inevitable. A vibe ≠ a waiver.',
    ['inevitable', 'unavoidable', 'ineluctable']
  ),
  inexplicable: L(
    'Inexplicable means impossible to explain: an inexplicable error, inexplicable delay. Unexplained is milder and may yet be explained; mysterious is colour. A silent drop of a night slice still belongs in the limitations.',
    ['An inexplicable drop of the night slice still belongs in the limitations.', 'Unexplained is milder. Mysterious is a story. A drop is a choice. A limitations box is methods. Name the exclusion, or put the nights back.'],
    'Unable to be explained. Milder: unexplained. A mystery caption ≠ a limitations line.',
    ['unexplained', 'mysterious', 'unaccountable']
  ),
  infallible: L(
    'Infallible means never wrong, or never failing: an infallible test, no one is infallible. Exception (already in the dictionary) is what you log when the claim fails; reliable is milder. Foyer copy is not a hidden exception.',
    ['No codebook is infallible; log the exception, do not hide it in the foyer copy.', 'Unerring is the close twin. Reliable is milder. Copy is branding. An exception is a file. Write the exception; then print the copy if it still holds.'],
    'Never wrong or never failing. Milder: reliable. Foyer copy ≠ a hidden exception.',
    ['unerring', 'unfailing', 'flawless']
  ),
  infamy: L(
    'Infamy is the state of being well known for something bad (usually uncountable): live in infamy, the infamy of a leak. Famous (already in the dictionary) is the good twin; notoriety is the close cousin. A brand story is not a corrections log.',
    ['Infamy of the wrong-year footnote is a corrections log, not a brand story.', 'Notoriety is the close twin. Shame is hotter. A story is branding. A footnote is a file. Open the corrections log; keep the story off the prospectus.'],
    'Fame for the wrong reason. Close: notoriety. A brand story ≠ a corrections log.',
    ['notoriety', 'disrepute', 'ignominy']
  ),
  infiltrate: L(
    'To infiltrate is to enter a place or group secretly in order to spy on it or undermine it: infiltrate a network, copy that infiltrates a file. Spy (already in the dictionary) is the person or the watch; penetrate is wider. Lifestyle copy is not an n.',
    ['Do not let lifestyle copy infiltrate an empty n.', 'Penetrate is wider. Insinuate is the wording twin. Copy is branding. A cell is a count. Fill the n; keep lifestyle for the magazine.'],
    'Enter secretly to spy or undermine. Wider: penetrate. Lifestyle copy ≠ a filled n.',
    ['penetrate', 'insinuate', 'slip into']
  ),
  inflame: L(
    'To inflame is to make a feeling, especially anger, more intense; also to make a body part red and swollen: inflame a dispute, inflame a wound. Anger (already in the dictionary) is the noun; inflammatory (this batch) is the adjective. A leaked boundary still waits for the embargo.',
    ['A leaked boundary will inflame the hall; wait for the embargo.', 'Aggravate is the close twin. Irritate is already in this course and milder. A leak is a file. Midnight is a clock. Hold the figure; then brief the hall.'],
    'Make anger worse (also: swell). Close: aggravate. A leak ≠ a lifted embargo.',
    ['aggravate', 'provoke', 'exacerbate']
  ),
  inflammatory: L(
    'Inflammatory means likely to stir anger or violence; also relating to swelling in the body: inflammatory language, an inflammatory condition. Inflame (this batch) is the verb; provocative is a cousin. Copy on the stairs is still a leak if it names the grade.',
    ['Inflammatory copy on the stairs is still a leak if it names the grade.', 'Provocative is the close twin. Incendiary is hotter. Stairs are a corridor. A grade is embargoed. Keep the number off the walls; then hang the art.'],
    'Likely to stir anger (also: of swelling). Verb: inflame (this batch). Stair copy ≠ a lifted embargo.',
    ['provocative', 'incendiary', 'seditious']
  ),
  infuriate: L(
    'To infuriate is to make someone extremely angry: infuriate staff, an infuriating delay. Anger (already in the dictionary) is the noun; enrage is the close twin. A resilience slide does not staff a night cell.',
    ['An unnamed night cell will infuriate the union; a resilience slide will not help.', 'Enrage is the close twin. Annoy is milder. A slide is branding. A cell is a rota. Name the spare; keep resilience for the foyer.'],
    'Make very angry. Close: enrage. A slide ≠ a named night cell.',
    ['enrage', 'incense', 'exasperate']
  ),
  infuse: L(
    'To infuse is to fill something with a quality or feeling; also to soak in liquid to extract flavour: infuse a briefing with a fact, infuse tea. Imbue is the close twin; scent is décor, not a log.',
    ['Infuse the debrief with the spare’s name; scent is not a log.', 'Imbue is the close twin. Steep is the tea sense. Scent is décor. A name is a rota. Write the name; then scent the room if you still wish.'],
    'Fill with a quality (also: soak for flavour). Close: imbue. Scent ≠ a named spare.',
    ['imbue', 'instil', 'steep']
  ),
  ingenuity: L(
    'Ingenuity is cleverness at inventing things or solving problems in an original way: technical ingenuity, show ingenuity. Ingenious (already in the dictionary) is the adjective; a workaround is not a patched system.',
    ['Ingenuity with a workaround is not a patched system.', 'Inventiveness is the close twin. Cleverness is everyday. A workaround is a corridor. A patch is a log. File the patch; keep ingenuity for the methods annex if it still holds.'],
    'Clever inventiveness. Adjective: ingenious (already in the dictionary). A workaround ≠ a patch.',
    ['inventiveness', 'cleverness', 'resourcefulness']
  ),
  ingrained: L(
    'Ingrained means firmly fixed and difficult to change, of a habit, attitude, or dirt: an ingrained habit, ingrained prejudice. Habit (already in the dictionary) is the everyday noun; habitual (already in the dictionary) is the cousin. Rounding the n is still a methods fiction.',
    ['An ingrained habit of rounding the n is still a methods fiction.', 'Deep-rooted is the close twin. Habitual is already in this course. A habit is talk. A rounding rule is a codebook. Write the rule; do not round in the abstract.'],
    'Deeply fixed and hard to change. Close: deep-rooted. A habit ≠ a codebook rule.',
    ['deep-rooted', 'entrenched', 'habitual']
  ),
  injunction: L(
    'An injunction is an official court order requiring someone to do, or not do, something: seek an injunction, an injunction against publication. Court (already in the dictionary) is the place; a stern tweet is not an order.',
    ['An injunction sits in the legal file; a stern tweet is not an order.', 'Order is everyday. Restraining order is a cousin. A tweet is comms. A sealed order is a file. Cite the order; archive the tweet.'],
    'A court order to act or refrain. Everyday: order. A tweet ≠ an injunction.',
    ['order', 'restraining order', 'prohibition']
  ),
  innovate: L(
    'To innovate is to introduce new methods, ideas, or products: innovate a process, pressure to innovate. Innovation (already in the dictionary) is the noun; an animation is not a badge swipe.',
    ['Innovate the portal after the badge log works; an animation is not a swipe.', 'Invent is the object twin. Modernise is wider. An animation is branding. A swipe is a log. Get the swipe; then animate if you still must.'],
    'Introduce something new. Noun: innovation (already in the dictionary). An animation ≠ a swipe.',
    ['invent', 'modernise', 'pioneer']
  ),
  inquisitive: L(
    'Inquisitive means eager to know things; sometimes too curious: an inquisitive mind, inquisitive questioning. Curious (already in the dictionary) is everyday and milder; a corridor chat is not an inquiry minute.',
    ['An inquisitive corridor chat is not an inquiry minute.', 'Curious is already in this course and milder. Nosy is informal and a fault. A chat is talk. A minute is a file. Write the time; then chat if you still want to.'],
    'Curious (sometimes overly). Everyday: curious (already in the dictionary). A chat ≠ a minute.',
    ['curious', 'probing', 'enquiring']
  ),
  inscription: L(
    'An inscription is words written or cut on a surface; also a dedication written in a book: a stone inscription, an inscription on a certificate. Dedication (already in the dictionary) can be the book twin; a vibe is not the occupancy figure.',
    ['The inscription on the certificate is the occupancy figure, not a vibe.', 'Legend is the map twin. Dedication is already in this course (book sense). A vibe is a feeling. A figure is a certificate. Keep the number; save the vibe for the plaque copy if it still fits.'],
    'Words cut or written on something. Book twin: dedication (already in the dictionary). A vibe ≠ the occupancy figure.',
    ['lettering', 'dedication', 'legend']
  ),
  insensitive: L(
    'Insensitive means not noticing or caring about other people’s feelings; also not affected by something: an insensitive remark, insensitive to cold. Sensitive (already in the dictionary) sits opposite; a character caption is not a timetable minute.',
    ['An insensitive cut of the night bus is a timetable minute, not “character”.', 'Thoughtless is milder. Callous is harsher. Character is a story. A bus cut is a file. Minute the cut; keep character for the yearbook.'],
    'Not noticing others’ feelings (also: unaffected). Opposite: sensitive (already in the dictionary). “Character” ≠ a bus-cut minute.',
    ['thoughtless', 'callous', 'tactless']
  ),
  insidious: L(
    'Insidious means spreading gradually in a harmful way that is hard to notice: an insidious leak, insidious bias. Gradual (already in the dictionary) is pace without the harm; stealthy is a cousin. A silent drop of the night cohort is still a methods choice.',
    ['An insidious drop of the night cohort from the n is still a methods choice.', 'Stealthy is the close twin. Subtle is milder. A drop is a decision. A limitations line is methods. Name the exclusion, or put the nights back.'],
    'Harmful in a gradual, hidden way. Close: stealthy. A silent drop ≠ an unnamed choice.',
    ['stealthy', 'subtle', 'creeping']
  ),
  insoluble: L(
    'Insoluble means impossible to solve; of a substance, that will not dissolve: an insoluble problem, an insoluble salt. Dissolve (already in the dictionary) is the chemistry opposite; a collage is design, not a cap.',
    ['An insoluble clash with the occupancy cap is not fixed by a collage.', 'Unsolvable is the puzzle twin. Insoluble (chemistry) will not dissolve. A collage is art. A cap is a certificate. Keep the figure; hang the collage on the stairs.'],
    'Unable to be solved (also: will not dissolve). Puzzle twin: unsolvable. A collage ≠ a cap.',
    ['unsolvable', 'irresolvable', 'intractable']
  ),
  insolvent: L(
    'Insolvent means unable to pay debts; bankrupt in effect: declared insolvent, an insolvent contractor. Bankrupt (already in the dictionary) is the close legal twin; a smiling stall is not a credit check.',
    ['An insolvent contractor is a named risk; a smiling stall is not a credit check.', 'Bankrupt is already in this course. Broke is informal. A stall is a photograph. A Companies House filing is a file. Name the risk; keep the smile for the prospectus.'],
    'Unable to pay what is owed. Close: bankrupt (already in the dictionary). A stall photo ≠ a credit check.',
    ['bankrupt', 'broke', 'failed']
  ),
  instantaneous: L(
    'Instantaneous means happening immediately, with no delay: an instantaneous response, instantaneous ignition. Instant (already in the dictionary) is everyday; immediate (already in the dictionary) is a cousin. A foyer cheer does not lift an embargo.',
    ['An instantaneous foyer cheer does not lift the embargo.', 'Immediate is already in this course. Instant is already in this course and milder. A cheer is branding. Midnight is a clock. Wait for the lift; then cheer.'],
    'Immediate; with no delay. Everyday: instant (already in the dictionary). A cheer ≠ a lifted embargo.',
    ['immediate', 'instant', 'split-second']
  ),
  instigate: L(
    'To instigate is to cause a process or event to start, especially something unwelcome: instigate an inquiry, instigate a reprint. Cause (already in the dictionary) is everyday; incite (this batch) is hotter and often unlawful. A lobby mood is not a minute.',
    ['Do not instigate a reprint from a lobby mood; wait for the minute.', 'Initiate is the neutral twin. Incite is this batch and hotter. A mood is talk. A minute is a file. Get the signature; then reprint.'],
    'Start (often something unwelcome). Neutral: initiate. A lobby mood ≠ a minute.',
    ['initiate', 'prompt', 'provoke']
  ),
  instil: L(
    'To instil is to gradually put an idea, feeling, or habit into someone’s mind (UK spelling): instil confidence, instil a number. Infuse (this batch) is a cousin; US spelling is instill. A vibe of space is not an occupancy cap.',
    ['Instil the occupancy number in the briefing; a vibe of space is not a cap.', 'Infuse is this batch and wider. Imbue is a cousin. A vibe is a feeling. A number is a certificate. Repeat the figure; save space for the catering note.'],
    'Gradually fix an idea in the mind (UK). Close: infuse (this batch). A vibe ≠ a cap.',
    ['infuse', 'imbue', 'implant']
  ),
  instrumental: L(
    'Instrumental means playing an important part in making something happen (instrumental in); also of music without words: instrumental in a change, instrumental music. Crucial is hotter; a vision slide is not cover.',
    ['A named spare is instrumental in cover; a vision slide is not.', 'Crucial is hotter. Pivotal is a cousin. A slide is branding. A name on a rota is cover. Write the name; keep the vision for the foyer.'],
    'Important in causing something (also: music without words). Close: pivotal. A slide ≠ cover.',
    ['pivotal', 'crucial', 'key']
  ),
  insulate: L(
    'To insulate is to protect from heat, cold, or noise; also to protect from unwelcome influence: insulate a hall, insulate a board from lobbying. Protect (already in the dictionary) is everyday; a scented candle is décor, not an air-change log.',
    ['Insulate the hall to the stated rate; a scented candle is not a log.', 'Protect is already in this course. Shield is a cousin. A candle is décor. A rate is a certificate. Meet the rate; then scent the foyer if you still wish.'],
    'Protect from heat, noise, or influence. Everyday: protect (already in the dictionary). A candle ≠ an air-change log.',
    ['protect', 'shield', 'lag']
  ),
  insurgent: L(
    'An insurgent is a person who fights against the government or occupying force: insurgent groups, an insurgent reading. Rebel (already in the dictionary) is the close twin; a vibe is not the source text.',
    ['An insurgent reading of the clause still needs the source text, not a vibe.', 'Rebel is already in this course. Guerrilla is a cousin. A vibe is a feeling. A clause is a file. Cite the clause; save the reading for the seminar.'],
    'A rebel against authority. Close: rebel (already in the dictionary). A vibe ≠ the source clause.',
    ['rebel', 'guerrilla', 'insurrectionist']
  ),
  intangible: L(
    'Intangible means not able to be touched; of a quality, real but not physical: intangible assets, intangible flair. Tangible (already in the dictionary) sits opposite; abstract (already in the dictionary) is the idea twin. Flair is not a sampling frame.',
    ['Intangible “flair” is not a sampling frame; name the slice.', 'Abstract is already in this course. Immaterial is the legal twin. Flair is a caption. A named slice is methods. Write the slice; keep flair for the prospectus.'],
    'Not physical, though real. Opposite: tangible (already in the dictionary). “Flair” ≠ a frame.',
    ['abstract', 'immaterial', 'incorporeal']
  ),
  intellect: L(
    'Intellect is the ability to think and understand, especially at a high level: a fine intellect, appeal to the intellect. Intelligence is the close twin; a clever debrief still needs the spare’s name on the log.',
    ['Intellect in the debrief does not replace the spare’s name on the log.', 'Intelligence is the close twin. Mind is everyday. A debrief is talk. A log is a file. Write the name; then argue if you still must.'],
    'The power of thought and understanding. Close: intelligence. A clever debrief ≠ a named spare.',
    ['intelligence', 'mind', 'reason']
  ),
  intelligible: L(
    'Intelligible means able to be understood: intelligible speech, an intelligible codebook. Understand (already in the dictionary) is the verb; coherent (already in the dictionary) is the organisation twin. A collage will not name the variables.',
    ['An intelligible codebook still needs each variable named; a collage will not.', 'Comprehensible is the close twin. Clear is everyday. A collage is art. A variable is a name. Write the names; hang the collage on the stairs.'],
    'Clear enough to understand. Close: comprehensible. A collage ≠ a named variable.',
    ['comprehensible', 'clear', 'understandable']
  ),
  intermediary: L(
    'An intermediary is a person or body that passes messages or arranges a deal between two sides: act as an intermediary, through an intermediary. Mediate (already in the dictionary) is the verb; a smiling stall is not a named channel.',
    ['The board’s intermediary is a named clerk; a smiling stall is not a channel.', 'Go-between is everyday. Mediator is the dispute twin. A stall is a photograph. A clerk is a minute. Name the clerk; keep the smile for the fair.'],
    'A go-between. Verb: mediate (already in the dictionary). A stall photo ≠ a named clerk.',
    ['go-between', 'mediator', 'broker']
  ),
  interrogate: L(
    'To interrogate is to ask someone many questions, especially officially or aggressively; also to query a system: interrogate a witness, interrogate a file. Question is everyday and milder; a crest does not validate an n.',
    ['Interrogate the raw file; a crest does not validate the n.', 'Question is everyday. Grill is informal. A crest is a logo. A raw file is methods. Open the file; then print the crest.'],
    'Question closely (also: query a system). Everyday: question. A crest ≠ a validated n.',
    ['question', 'cross-examine', 'query']
  ),
  intersect: L(
    'To intersect is to cross or cut across; of groups or ideas, to overlap: lines intersect, lists that intersect. Overlap (already in the dictionary) is the close twin; intersection (this batch) is the noun. Name both slices where they meet.',
    ['Where the night cohort and the bursary list intersect, name both slices.', 'Overlap is already in this course. Cross is everyday. A meeting is talk. Two named slices are methods. Write both; then draw the Venn if it still helps.'],
    'Cross, or overlap. Noun: intersection (this batch). A Venn ≠ unnamed slices.',
    ['overlap', 'cross', 'meet']
  ),
  intersection: L(
    'An intersection is a place or point where things cross; also overlap between groups or ideas: a road intersection, the intersection of catchments. Intersect (this batch) is the verb; overlap (already in the dictionary) is the cousin. Each hall still needs its own fire plan.',
    ['The intersection of catchments still needs each hall’s fire plan.', 'Junction is the road twin. Overlap is already in this course. A Venn is a diagram. A fire plan is a certificate. File each plan; then draw the overlap.'],
    'A crossing point, or an overlap. Verb: intersect (this batch). A Venn ≠ a missing fire plan.',
    ['junction', 'overlap', 'crossing']
  ),
  intimidation: L(
    'Intimidation is the act of frightening someone in order to make them do, or not do, something: alleged intimidation, a climate of intimidation. Intimidate (already in the dictionary) is the verb; robust invigilation is not a safeguarding log.',
    ['Intimidation at the door is a safeguarding log, not “robust invigilation”.', 'Bullying is the workplace twin. Threats are the content. Robust is a slogan. A door incident is a file. Open the log; keep robust for the handbook if it still fits.'],
    'Frightening someone to control them. Verb: intimidate (already in the dictionary). “Robust” ≠ a safeguarding log.',
    ['bullying', 'threats', 'coercion']
  ),
  intolerable: L(
    'Intolerable means too bad, painful, or unfair to be accepted: intolerable delay, an intolerable rota. Tolerate (already in the dictionary) is the verb; unbearable is the close twin. Resilience is a slide, not a missing relief hour.',
    ['An intolerable night rota with no relief hour is a staffing minute, not “resilience”.', 'Unbearable is the close twin. Unendurable is hotter. Resilience is branding. A relief hour is a rota. Staff the gap; keep resilience for the foyer.'],
    'Too bad to accept. Verb: tolerate (already in the dictionary). “Resilience” ≠ a missing relief hour.',
    ['unbearable', 'unendurable', 'insufferable']
  ),
  intonation: L(
    'Intonation is the rise and fall of the voice in speaking: rising intonation, warm intonation. Melody (already in the dictionary) is the music twin; a lobby tone does not rewrite a cap.',
    ['Warm intonation in the lobby does not rewrite the occupancy cap.', 'Melody is already in this course (music). Pitch is a cousin. Warmth is a feeling. A cap is a certificate. Keep the figure; save warmth for the welcome.'],
    'The melody of speech. Music twin: melody (already in the dictionary). Warmth ≠ a rewritten cap.',
    ['pitch', 'cadence', 'tone']
  ),
  introductory: L(
    'Introductory means serving as an introduction; intended for beginners: an introductory course, an introductory film. Introduction (already in the dictionary) is the noun; beginner (already in the dictionary) is the audience. A film still needs the ethics minute first.',
    ['An introductory film still needs the ethics minute signed first.', 'Preliminary is the close twin. Opening is everyday. A film is branding. A signature is a file. Sign the minute; then roll the camera.'],
    'Serving as an introduction. Noun: introduction (already in the dictionary). A film ≠ a signed ethics minute.',
    ['preliminary', 'opening', 'initial']
  ),
  introspective: L(
    'Introspective means tending to examine your own thoughts and feelings: an introspective essay, an introspective debrief. Inward (already in the dictionary) is a cousin; a feeling does not name a spare.',
    ['An introspective debrief does not name the spare.', 'Reflective is the close twin. Inward is already in this course. Reflection is talk. A log is a file. Write the name; then reflect if you still need to.'],
    'Inward-looking; examining oneself. Close: reflective. A debrief ≠ a named spare.',
    ['reflective', 'inward', 'contemplative']
  ),
  invalidate: L(
    'To invalidate is to make something legally or logically no longer valid: invalidate a sitting, invalidate a finding. Valid (already in the dictionary) sits opposite; validate (already in the dictionary) is the confirming twin. Glossy packs do not save an unnamed invigilator.',
    ['A sitting without a named invigilator will invalidate the paper, however glossy the pack.', 'Nullify is the legal twin. Void is a cousin. A pack is branding. A named seat is a rota. Name the invigilator; then print the pack.'],
    'Make no longer valid. Opposite: valid (already in the dictionary). Glossy packs ≠ a named invigilator.',
    ['nullify', 'void', 'annul']
  ),
  inverse: L(
    'Inverse means opposite in nature, direction, or effect (the inverse of): the inverse relationship, the inverse of a filled n. Opposite (already in the dictionary) is everyday; invert (this batch) is the verb. A warmer crest is not the other of a count.',
    ['The inverse of a filled n is not a warmer crest.', 'Opposite is already in this course. Reverse is already in this course (verb). A crest is a logo. A cell is a number. Fill the cell; then warm the crest if you still must.'],
    'Opposite in direction or effect. Verb: invert (this batch). A warmer crest ≠ an empty n.',
    ['opposite', 'reverse', 'contrary']
  ),
  invert: L(
    'To invert is to turn something upside down, or to reverse its order or meaning: invert a glass, invert a figure. Reverse (already in the dictionary) is the close twin; inverse (this batch) is the adjective. A film still does not rewrite occupancy.',
    ['Do not invert the occupancy figure to suit the film still.', 'Reverse is already in this course. Flip is informal. A still is branding. A figure is a certificate. Keep the number; recut the still if you must.'],
    'Turn upside down or reverse. Close: reverse (already in the dictionary). A film still ≠ a rewritten cap.',
    ['reverse', 'flip', 'upend']
  ),
  invigilate: L(
    'To invigilate is to watch candidates during an examination (UK): invigilate a sitting, trained to invigilate. Supervise is wider; a slogan on the door is not a named seat in the room.',
    ['Invigilate from a named seat in the room; a slogan on the door is not cover.', 'Supervise is wider. Proctor is US. A slogan is branding. A seat is a rota. Sit the name; hang the slogan in the foyer if you still wish.'],
    'Watch an exam (UK). Wider: supervise. US: proctor. A door slogan ≠ a named seat.',
    ['supervise', 'watch', 'proctor']
  ),
  involuntary: L(
    'Involuntary means done without conscious control or without a real choice: an involuntary movement, an involuntary leak. Automatic (already in the dictionary) is the machine twin; voluntary sits opposite. A live mic is still an embargo breach.',
    ['An involuntary leak from a live mic is still an embargo breach.', 'Automatic is already in this course. Unwitting is a cousin. A mic is kit. Midnight is a clock. Mute until the lift; then speak.'],
    'Not chosen; automatic or forced. Close: automatic (already in the dictionary). A live mic ≠ a lifted embargo.',
    ['automatic', 'unwitting', 'unintentional']
  ),
  irrefutable: L(
    'Irrefutable means impossible to deny or disprove: irrefutable evidence, an irrefutable certificate. Deny (already in the dictionary) is the verb you cannot succeed with; a vibe of space is not proof.',
    ['The occupancy certificate is irrefutable; a vibe of space is not.', 'Indisputable is the close twin. Conclusive is a cousin. A vibe is a feeling. A certificate is a file. Keep the paper; save the vibe for the tour.'],
    'Impossible to deny. Close: indisputable. A vibe ≠ a certificate.',
    ['indisputable', 'conclusive', 'incontrovertible']
  ),
  irregularity: L(
    'An irregularity is something that is not according to the rules; also unevenness: an irregularity in a paper, financial irregularities. Breach (already in the dictionary) is the close twin; a witty caption does not repair a voided script.',
    ['An irregularity in the candidate number voids the paper; a witty caption does not repair it.', 'Breach is already in this course. Anomaly is the data twin. A caption is branding. A candidate number is a log. Void the paper; keep the caption off the file.'],
    'A breach of the rules, or unevenness. Close: breach (already in the dictionary). A caption ≠ a repaired paper.',
    ['breach', 'anomaly', 'deviation']
  ),
  irreparable: L(
    'Irreparable means too badly damaged to be repaired: irreparable harm, irreparable cover. Damage (already in the dictionary) is the everyday noun; a foyer restyle does not reseal a script.',
    ['A broken seal is irreparable cover; restyle the foyer afterwards.', 'Irrecoverable is a cousin. Permanent is already in this course. A restyle is branding. A seal is a log. Log the break; then paint the foyer if you still must.'],
    'Unable to be repaired. Close: irrecoverable. A foyer restyle ≠ a resealed script.',
    ['irrecoverable', 'irreversible', 'beyond repair']
  ),
  irreplaceable: L(
    'Irreplaceable means too valuable, rare, or unique to be replaced if lost: irreplaceable data, an irreplaceable archive. Replace (already in the dictionary) sits opposite as a verb; unique (already in the dictionary) is a cousin. A crest backup is branding, not a dataset.',
    ['The raw file is irreplaceable; a crest backup is branding, not a dataset.', 'Unique is already in this course. Priceless is hotter. A crest is a logo. A raw file is methods. Back up the file; then archive the crest.'],
    'Unable to be replaced. Opposite verb: replace (already in the dictionary). A crest backup ≠ a dataset.',
    ['unique', 'priceless', 'invaluable']
  ),
  irreversible: L(
    'Irreversible means impossible to change back to a previous state: irreversible change, an irreversible leak. Reverse (already in the dictionary) sits opposite as a verb; undo (already in the dictionary) is everyday. Publishing before midnight is not a rehearsal.',
    ['Publishing before midnight is an irreversible leak, not a rehearsal.', 'Permanent is already in this course. Final is everyday. A rehearsal is a story. Midnight is a clock. Wait for the lift; then publish.'],
    'Unable to be undone. Verb opposite: reverse (already in the dictionary). A rehearsal ≠ an early publish.',
    ['permanent', 'irrevocable', 'final']
  ),
  irritation: L(
    'Irritation is the feeling of being annoyed; also slight redness or inflammation: a source of irritation, skin irritation. Irritate (already in the dictionary) is the verb; a lobby mood does not rewrite a cap.',
    ['Irritation in the lobby does not rewrite the occupancy cap.', 'Annoyance is the close twin. Inflammation is the body sense. A lobby is talk. A cap is a certificate. Keep the figure; minute the complaint if it is a rota issue.'],
    'Annoyance (also: slight inflammation). Verb: irritate (already in the dictionary). Lobby mood ≠ a rewritten cap.',
    ['annoyance', 'exasperation', 'inflammation']
  ),
}
