const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2Q = {
  satellite: L(
    'A satellite is a machine in orbit, a moon, or a country dominated by another: satellite images; a satellite state. Probe is a craft sent past a body; moon is the natural twin. The geography paper maps satellite images. Mix-up: salad is food. Do not call a drone a satellite.',
    ['The geography paper maps satellite images of coastal erosion, not holiday snaps.', 'A satellite state featured in the Cold War unit, which is the dependent-country sense.'],
    'a weather / spy satellite; satellite images; a satellite state. Natural twin: moon. Trap: salad. Geography and politics. Orbiting machine or dependent state.',
    []
  ),
  scatter: L(
    'To scatter is to spread things over a wide area, or to make a group move apart: scatter quotes; the crowd scattered. Spread is wider; sprinkle is gentler. Do not scatter quotes across the page. Mix-up: shatter means smash into pieces (already elsewhere). Do not write scatter for a neat ranked list.',
    ['Do not scatter quotes across the page: cluster them under one claim.', 'Protesters scattered when the rain started, which is the “move apart” sense.'],
    'scatter + objects; scatter over / across. Wider: spread. Trap: shatter. Essays and news. Spread, not smash.',
    ['spread']
  ),
  scratch: L(
    'To scratch is to mark a surface with something sharp; from scratch means starting with nothing; also to withdraw a candidate: build from scratch; scratch from a race. Scrape is heavier contact. Build the model from scratch. Mix-up: stretch is to pull longer (already in the dictionary). Do not write “from the scratch”.',
    ['Build the model from scratch; a kit from last year will not count.', 'She was scratched from the heat after the medical note, which is the withdraw sense.'],
    'scratch + surface; from scratch; scratch from a race. Trap: stretch. DT, sport, and news. Mark, start with nothing, or withdraw.',
    []
  ),
  sculpture: L(
    'A sculpture is art made by carving or shaping, or one piece of that art: a bronze sculpture; public sculpture. Statue is usually a person; carving is the process. Caption the sculpture in the booklet. Mix-up: scripture is sacred writing; sculptor is the artist. Do not call a 2-D print a sculpture.',
    ['Caption the sculpture in the source booklet, not just “statue in a park”.', 'The courtyard sculpture is not a climbing frame, which is the public-art sense.'],
    'a bronze / public sculpture; sculpture park. Person-shaped: statue. Artist: sculptor. Trap: scripture. Art and source work. 3-D art, not a painting.',
    []
  ),
  secure: L(
    'To secure is to obtain something after effort, to make a place safe, or to fasten it: secure a place; secure the lab. Get is everyday; obtain is formal (already in the dictionary). She secured a work-experience place. Adjective: safe and certain. Mix-up: secret is hidden (already in the dictionary); security is the noun (already elsewhere). Do not write secure for “secret”.',
    ['She secured a work-experience place after the second interview.', 'Secure the chemical store before you leave, which is the make-safe sense.'],
    'secure a place / deal; secure the + building. Everyday: get. Noun: security. Trap: secret. UCAS, news, and H&S. Obtain or make safe, not “hidden”.',
    ['obtain']
  ),
  segment: L(
    'A segment is one part of something divided, or a section of a market or public: a pie-chart segment; a market segment. Section is wider; slice is everyday. Label each segment of the pie chart. Verb: segment the sample. Mix-up: regiment is an army unit; fragment is a broken piece. Do not call a whole cohort a segment without a split.',
    ['Label each segment of the pie chart with a percentage, not a raw count.', 'A youth segment of the market featured in the business case, which is the customers sense.'],
    'a segment of + whole; a market segment. Wider: section. Trap: regiment / fragment. Graphs and business. A part, not the whole.',
    ['section']
  ),
  seize: L(
    'To seize is to take hold suddenly, or to take control or property by force or law: seize phones; seize power. Grab is informal; confiscate is official taking. Police seized the phones. Mix-up: cease means stop (already elsewhere); size is how big. Do not write seize for “stop doing”.',
    ['Police seized the phones before the mock, the behaviour log said.', 'Rebels seized the radio station, which is the take-control sense.'],
    'seize + object; seize power / control. Informal: grab. Trap: cease / size. News, law, and history. Take suddenly, not “stop”.',
    ['confiscate']
  ),
  senate: L(
    'The senate is the upper house of a parliament in some systems, especially the US Senate: a Senate vote; the Roman Senate. Commons / House is the lower UK chamber; congress is the US whole. How a bill reaches the Senate. Mix-up: senator is a member; senile is about old-age decline. Do not call the House of Lords “the Senate” in a UK answer.',
    ['The politics paper asks how a bill reaches the Senate after the House.', 'The Roman Senate featured in the classics source, which is the ancient sense.'],
    'the Senate; a Senate committee / vote. Member: senator. UK contrast: Lords / Commons. Trap: senile. Politics and classics. Upper chamber, not a person.',
    []
  ),
  senior: L(
    'Senior means higher in rank or older: a senior examiner; senior management. Opposite: junior. Noun: an older pupil or higher-ranking person. A senior examiner re-marked the script. Mix-up: señor is Spanish for Mr. Do not call a newly qualified teacher senior.',
    ['A senior examiner re-marked the script after the centre’s appeal.', 'Senior prefects staffed the open evening, which is the older-pupil sense.'],
    'a senior + role; senior to + person. Opposite: junior. Trap: señor. Exams, HR, and pastoral. Rank or age, not a Spanish title.',
    []
  ),
  sensation: L(
    'A sensation is a physical feeling, or great public excitement: a burning sensation; a media sensation. Feeling is everyday; scandal is damaging fame. A burning sensation featured in first aid. Mix-up: sensational means exaggerated and shocking; census is a population count. Do not write “a sensation” for a mild preference.',
    ['A burning sensation featured in the first-aid scenario, not a rumour.', 'The leak became a media sensation, which is the public-excitement sense.'],
    'a sensation of + feeling; a media sensation. Everyday: feeling. Trap: sensational / census. Biology and news. Feeling or public stir.',
    ['feeling']
  ),
  sensitive: L(
    'Sensitive means easily upset, needing careful handling, or able to measure small changes: a sensitive file; a sensitive instrument. Delicate is close for handling; sensible (already in the dictionary) means practical. Names in the sensitive file stay off the drive. Mix-up: sensible. Do not write sensitive for “making good decisions”.',
    ['Names in the sensitive file stay off the shared drive, safeguarding said.', 'A sensitive balance featured in the chemistry practical, which is the measuring sense.'],
    'sensitive to / about; a sensitive issue / file. Trap: sensible (practical). Safeguarding, news, and sciences. Careful or finely measuring, not “wise”.',
    []
  ),
  sequence: L(
    'A sequence is the order in which things follow, or a set of related events: a sequence of events; in sequence. Order is wider; series (already in the dictionary) can be looser. Give the sequence of events. Mix-up: consequence is a result; sequential is the adjective (already elsewhere). Do not jumble dates and call it a sequence.',
    ['Give the sequence of events in the source, not a jumble of dates.', 'A DNA sequence featured in the biology paper, which is the bases sense.'],
    'a sequence of; in sequence; sequence the + steps. Wider: order. Trap: consequence. History, methods, and biology. Order, not a result.',
    ['order']
  ),
  serial: L(
    'Serial means happening one after another in a series: serial testing; a serial offender. Consecutive stresses no gaps; series is the noun (already in the dictionary). Serial testing still needs new consent. Noun: a story in parts. Mix-up: cereal is breakfast food. Do not write serial for “serious”.',
    ['Serial testing of the same class still needs a new consent form.', 'A serial drama was the media case study, which is the episodes sense.'],
    'serial + noun; a serial offender / drama. Noun story: serial. Trap: cereal. Methods, crime, and media. In a series, not breakfast.',
    []
  ),
  session: L(
    'A session is a meeting or period of activity, or a sitting of a court or parliament: a revision session; a parliamentary session. Meeting is everyday; lesson is a taught period. The revision session is optional. Mix-up: cession is giving up territory (history). Do not call a whole term a session without a sitting or slot.',
    ['The revision session is optional; the mock is not, the bulletin said.', 'Parliament is in session until July, which is the sitting sense.'],
    'a training / revision / court session; in session. Everyday: meeting. Trap: cession. School, law, and politics. A sitting or timed slot.',
    ['meeting']
  ),
  severely: L(
    'Severely means very badly or strictly; to a serious degree: severely delayed; severely criticised. Seriously is close; extremely is wider. The storm severely delayed fieldwork. Adjective: severe (already in the dictionary). Mix-up: several means some (already in the dictionary). Do not write severely for “several times”.',
    ['The storm severely delayed the coastal fieldwork, the risk log noted.', 'She was severely reprimanded for the unsealed pack, which is the strictly sense.'],
    'severely + verb / adjective; severely limited. Adjective: severe. Trap: several. News, medicine, and discipline. Badly or strictly, not “a few”.',
    ['seriously']
  ),
  shallow: L(
    'Shallow means not deep, or not showing serious thought: a shallow sample; shallow water. Opposite: deep. Superficial is the essay twin for weak analysis. A shallow sample of five tweets. Mix-up: hollow means empty inside; shadow is shade (already in the dictionary). Do not call a 2-metre pool shallow in a risk assessment without a depth.',
    ['A shallow sample of five tweets is not a content analysis.', 'Stay out of the shallow creeks at low tide, which is the depth sense.'],
    'shallow water / soil / analysis; a shallow + noun. Opposite: deep. Essay twin: superficial. Trap: hollow / shadow. Methods and geography. Not deep, in water or thought.',
    []
  ),
  shed: L(
    'To shed is to lose or drop something, or to give out light: shed light on; shed jobs. Drop is everyday; cast light is the idiom twin. The data shed little light. Noun: a small store building. Mix-up: shade is shadow; she’d is she had. Do not write shed for “explain fully” without the light idiom.',
    ['The data shed little light on attendance, the inspector noted.', 'The firm shed 200 jobs, which is the lose sense; lock the PE shed after use.'],
    'shed light on; shed jobs / skin / tears. Noun: a garden / PE shed. Trap: shade / she’d. News and evaluations. Drop, illuminate, or a hut.',
    []
  ),
  shelter: L(
    'A shelter is a place that protects you, or protection itself: a night shelter; shelter from the storm. Refuge is close; housing is wider. The enquiry maps night-shelter beds. Verb: shelter someone. Mix-up: helper is a person who helps; shelve is to put off. Do not call a hotel a shelter unless it is emergency provision.',
    ['The geography enquiry maps night-shelter beds, not only rough-sleeping counts.', 'They sheltered from the squall in the hut, which is the verb sense.'],
    'a night / bomb / animal shelter; shelter from; take shelter. Close: refuge. Trap: helper / shelve. Geography, history, and news. Protection, not a holiday hotel.',
    ['refuge']
  ),
  shrink: L(
    'To shrink is to become or make smaller, or to hold back from something: the roll will shrink; shrink from a task. Contract is the science twin; reduce is more deliberate. The sixth-form roll will shrink. Mix-up: shrunk / shrank are inflections; wrinkle is a fold in skin. Do not write shrink for “hide”.',
    ['The sixth-form roll will shrink if the bus route is cut, governors heard.', 'Do not shrink from naming the limitation, which is the hold-back sense.'],
    'shrink by + amount; shrink from + gerund. Science: contract. Trap: wrinkle. Demography, fabrics, and orals. Get smaller, not disappear into hiding.',
    ['contract']
  ),
  shrug: L(
    'To shrug is to raise your shoulders to show you do not know or care; shrug off means treat as unimportant: shrug off a concern. Gesture is wider. Do not shrug off a safeguarding concern. Noun: a shrug. Mix-up: snug means tight and warm; shrug as a cardigan is fashion. Do not write shrug for “shake your head”.',
    ['Do not shrug off a safeguarding concern as “banter” in the log.', 'He shrugged when asked for a source, which is the “I do not know” sense.'],
    'shrug your shoulders; shrug off + noun. Trap: snug. Orals, news, and pastoral. A shoulder gesture, not a head-shake.',
    []
  ),
  sketch: L(
    'A sketch is a quick drawing, a short comic scene, or a brief outline: a field sketch; a sketch of the plan. Drawing is more finished; outline is the plan twin. A field sketch still needs a title. Verb: sketch the diagram. Mix-up: stretch is to pull; stretch also a period. Do not submit a scribble and call it a field sketch.',
    ['A field sketch still needs a title, scale, and north arrow.', 'Sketch your argument in three bullets first, which is the outline sense.'],
    'a field / pencil sketch; sketch + object. Wider: drawing. Trap: stretch. Geography, art, and planning. Quick drawing or outline, not a finished painting.',
    ['outline']
  ),
  slight: L(
    'Slight means small in amount or degree; as a noun/verb, an insult of being ignored: a slight increase; feel slighted. Small is everyday; minor is the formal twin. A slight increase is not a trend. Adverb: slightly (already in the dictionary). Mix-up: sleight (of hand) is trickery. Do not call a 40% rise slight.',
    ['A slight increase is not a trend until you have a second year of data.', 'She felt slighted when her name was omitted, which is the insult sense.'],
    'a slight + noun; slightly. Formal small: minor. Trap: sleight. Data and literature. Small, or an insult — specify.',
    ['minor']
  ),
  slip: L(
    'To slip is to slide accidentally, to decline gradually, or to make a small mistake: slip into anecdote; a slip of the pen. Slide is more deliberate; fall is heavier. Do not let the argument slip. Noun: a slip-up. Mix-up: sleep is rest (already in the dictionary); slippers are shoes. Do not write slip for a planned transition.',
    ['Do not let the argument slip into anecdote in the last paragraph.', 'Standards slipped after staffing cuts, which is the decline sense.'],
    'slip on / into; a slip; slip-up. Decline: slip. Trap: sleep. Essays, news, and H&S. Accident, decline, or small error.',
    []
  ),
  slope: L(
    'A slope is a surface higher at one end; as a verb, to have that angle: the slope of the line; a steep slope. Gradient is the maths/geography twin; incline is formal. Calculate the slope of the line. Mix-up: slop is spilled liquid; slope off is informal “leave”. Do not write slope for a vertical cliff.',
    ['Calculate the slope of the line, not just “it goes up”.', 'The ski slope closed after the thaw, which is the hillside sense.'],
    'the slope of; a steep / gentle slope; slope down. Maths twin: gradient. Trap: slop. Graphs and geography. An incline, not a vertical drop.',
    ['gradient']
  ),
  slot: L(
    'A slot is a narrow opening, or a time or place in a timetable: a clash slot; a time slot. Gap is wider; opening is the diary twin. Book a clash slot on the portal. Mix-up: plot is a storyline or conspiracy (already elsewhere); slat is a thin strip of wood. Do not call a whole week a slot.',
    ['Book a clash slot on the portal before Friday, exams office said.', 'Post the form through the slot, which is the opening sense.'],
    'a time / exam / parking slot; a letter slot. Diary twin: opening. Trap: plot / slat. Timetables and notices. A booked space or a narrow opening.',
    []
  ),
  soar: L(
    'To soar is to rise quickly — of prices, numbers, or a bird or aircraft: rents soared; soar above. Rise is everyday; rocket is more informal and sudden. Rents soared after the mill closed. Mix-up: sore means painful; saw is a tool or past of see. Do not write soar for a 0.1% tick.',
    ['Rents soared after the mill closed, the housing case study showed.', 'Gulls soared over the cliffs, which is the flight sense.'],
    'soar to / by + amount; prices / numbers soar. Everyday: rise. Trap: sore / saw. Economics, news, and geography. Rapid rise or high flight.',
    ['rise']
  ),
  socialist: L(
    'A socialist supports socialism; as an adjective, relating to that politics: a socialist claim; a socialist party. Labour is a UK party name; social (already in the dictionary) is much wider. Name the socialist claim, then test it. Mix-up: social / sociology (already in the dictionary). Do not call every tax rise socialist without a source.',
    ['Name the socialist claim in the source, then test it against the data.', 'A socialist party won the regional vote, which is the organisation sense.'],
    'a socialist + noun; socialist policy. Wider everyday: social. Trap: sociology. Politics and source work. A political stance, not “friendly”.',
    []
  ),
  sole: L(
    'Sole means only, not shared; also the underside of a foot or shoe: the sole carer; the sole of the boot. Only is everyday; only / single are close. She was the sole carer. Mix-up: soul is spirit (next entries); solely is the adverb (already elsewhere); a sole is also a fish. Do not write sole for “soulful”.',
    ['She was the sole carer in the household, the bursary form showed.', 'The sole of the boot tore on the field trip, which is the underside sense.'],
    'the sole + noun; sole responsibility. Everyday: only. Trap: soul / solely. Forms, law, and PE. Only, or a foot underside — not spirit.',
    ['only']
  ),
  solid: L(
    'Solid means firm and not liquid or gas, or reliable, or without a break: solid evidence; a solid hour. Firm is close; reliable is the people twin. Give a solid piece of evidence. Mix-up: solidarity is unity (already elsewhere); stolid is unemotional (already elsewhere). Do not call a slogan solid evidence.',
    ['Give a solid piece of evidence, not a slogan from the leaflet.', 'Ice is the solid state in the particle model, which is the science sense.'],
    'solid evidence / support; a solid hour; solid, liquid, gas. Trap: solidarity. Essays and chemistry. Firm, reliable, or not liquid.',
    ['firm']
  ),
  solo: L(
    'Solo means done by one person; as a noun, a piece for one performer: a solo performance; fly solo. Alone is everyday; unaccompanied is music. A solo performance still needs a score. Mix-up: so low as two words; solitary is lonelier. Do not call a duet solo.',
    ['A solo performance still needs a copy of the score for the examiner.', 'She flew solo on the EPQ after her partner withdrew, which is the alone sense.'],
    'a solo + noun; go / fly solo. Everyday: alone. Music: unaccompanied. Trap: so low. Music and independent work. One person, not a pair.',
    ['alone']
  ),
  somehow: L(
    'Somehow means in some way, although you do not know how; also for some unexplained reason: somehow unsealed; somehow manage. In some way is the plain twin. The script was somehow unsealed. Mix-up: somewhat means rather (next entry); anyhow is more informal. Do not use somehow as a substitute for a method in a write-up.',
    ['The script was somehow unsealed before midday, the incident form said.', 'They somehow finished the practical without the usual kit, which is the unknown-how sense.'],
    'somehow + verb; somehow or other. Contrast: somewhat (rather). Trap: anyhow. Incident logs and narrative. Unknown method, not “slightly”.',
    []
  ),
  somewhat: L(
    'Somewhat means to some degree; rather (slightly formal): somewhat small; somewhat surprising. Rather is the close twin; slightly is weaker. The sample is somewhat small. Mix-up: somehow is “in some unknown way” (previous entry). Do not stack somewhat with very.',
    ['The sample is somewhat small, so do not over-generalise the finding.', 'The tone is somewhat ironic, which is the literature sense.'],
    'somewhat + adjective / adverb. Close: rather. Contrast: somehow (unknown how). Methods and evaluations. Degree, not mystery.',
    ['rather']
  ),
  sought: L(
    'Sought is the past of seek: looked for or tried to obtain; sought-after means in demand: sought legal advice; a sought-after course. Looked for is everyday. The trust sought legal advice. Mix-up: sort is to arrange (already in the dictionary); sought is not “thought”. Do not write seeked.',
    ['The trust sought legal advice before the exclusion hearing, minutes show.', 'A sought-after language option closed at 20, which is the in-demand sense.'],
    'sought + noun; sought-after. Present: seek (already in the dictionary). Trap: sort / seeked. Minutes, news, and UCAS. Past of seek, not “arranged”.',
    []
  ),
  soul: L(
    'A soul is the spiritual part of a person, deep feeling, or a kind of music: a soul in torment; soul music. Spirit is close (already in the dictionary); mind is more cognitive. The speaker claims a soul in torment. Mix-up: sole means only (previous entries); sold is past of sell. Do not write soul for “only carer”.',
    ['The poem’s speaker claims a soul in torment: quote, do not paraphrase only.', 'A soul playlist featured in the music area of study, which is the genre sense.'],
    'heart and soul; a lost soul; soul music. Close: spirit. Trap: sole / sold. Literature, RS, and music. Spirit or genre, not “only”.',
    ['spirit']
  ),
  southern: L(
    'Southern means in or from the south of a country or area: southern catchments; Southern Rail. Opposite: northern. South is the noun/adverb (already in the dictionary). Southern catchments had longer bus times. Mix-up: southerly is a wind or direction; southern is the region adjective. Do not write southern for a single street south of the river without a regional claim.',
    ['Southern catchments had longer bus times in the inequality enquiry.', 'A southern hemisphere case study featured in the climate unit, which is the globe sense.'],
    'southern + region / England / hemisphere. Opposite: northern. Noun: south. Trap: southerly (wind). Geography and news. Of the south, not a compass point alone.',
    []
  ),
  sovereign: L(
    'Sovereign means having independent political power; as a noun, a monarch or an old gold coin: a sovereign parliament; a sovereign state. Independent is the everyday twin; sovereignty is the noun (already elsewhere). A sovereign parliament can repeal the Act. Mix-up: reign is a monarch’s period; souvenir is a keepsake. Do not call a school council sovereign.',
    ['A sovereign parliament can repeal the Act, the politics booklet said.', 'The exhibition labelled a gold sovereign, which is the coin sense.'],
    'a sovereign state / parliament; sovereign power. Noun: a monarch / coin. Noun idea: sovereignty. Trap: souvenir. Politics and history. Independent power, not a postcard.',
    ['independent']
  ),
  span: L(
    'To span is to last for a period or stretch across a space; as a noun, that period or distance: the study spanned three years; a life span. Last is everyday; cover is looser. The study spanned three year groups. Mix-up: spun is past of spin; spanner is a tool. Do not write span for a single lesson.',
    ['The study spanned three year groups, not a single tutor group.', 'A bridge span featured in the DT brief, which is the distance sense.'],
    'span + time / distance; a life / attention span. Everyday: last. Trap: spun / spanner. Methods and design. Across time or space, not a tool.',
    []
  ),
  spare: L(
    'Spare means extra and not in use; as a verb, to afford to give, or not to harm: a spare calculator; spare no expense. Extra is everyday; leftover is unused remainder. A spare calculator is allowed. Mix-up: spear is a weapon; spare as “lean” is a body sense. Do not write spare for “save someone a seat” without the extra object.',
    ['A spare calculator is allowed; a phone is not, the JCQ notice said.', 'Spare a minute for the consent form, which is the afford-to-give sense.'],
    'a spare + noun; spare time; spare + person + noun. Everyday: extra. Trap: spear. Exams and requests. Extra, or afford to give — not a weapon.',
    ['extra']
  ),
  spark: L(
    'A spark is a tiny bit of fire, a trace of a quality, or (as a verb) the cause of something starting: spark a debate; a spark of interest. Trigger is the cause twin; flicker is weaker light. One comment sparked the debate. Mix-up: spark vs spring (already in the dictionary); park is a green space. Do not write spark for a long planned campaign without a starting moment.',
    ['One comment sparked the debate, which is the “cause to start” sense.', 'A spark from the bunsen is still a fire risk, which is the flame sense.'],
    'spark a debate / protest; a spark of + noun. Cause twin: trigger. Trap: spring / park. News and sciences. Tiny fire or a starting cause.',
    ['trigger']
  ),
  species: L(
    'A species is a group of living things that can breed together; one kind of organism (same form singular and plural): an endangered species. Kind is everyday; breed is narrower. Name the species on the quadrat sheet. Mix-up: special is particular (already in the dictionary); specie is coin in old texts. Do not write “specie” for animals, or treat species as a count with “specie”.',
    ['Name the species on the quadrat sheet, not a vague “bird”.', 'Invasive species featured in the ecology case study, which is the kind-of-organism sense.'],
    'a species of; endangered / invasive species. Everyday: kind. Trap: special / specie. Biology and geography. A living kind; plural usually species.',
    []
  ),
  specifically: L(
    'Specifically means in a detailed, exact way, or for a particular purpose: asks specifically; specifically designed. Exactly is close; specially often means “for a special purpose” and is the common mix-up. The question asks specifically for a UK example. Adjective: specific (already in the dictionary). Do not write specifically for “especially” without the exact-detail sense.',
    ['The question asks specifically for a UK example, not a US headline.', 'The lab is specifically for A-level chemistry, which is the purpose sense.'],
    'specifically + verb; more specifically. Adjective: specific. Trap: specially / especially. Exam questions and design. Exact detail, not vague emphasis.',
    ['exactly']
  ),
  spectacular: L(
    'Spectacular means very impressive to look at; dramatic: a spectacular graph; a spectacular view. Impressive is cooler; dramatic stresses impact. A spectacular graph still needs labels. Mix-up: spectacle is a show or glasses in old use (already elsewhere); spectator is a watcher (next entry). Do not call a tidy bar chart spectacular without cause.',
    ['A spectacular graph still needs labelled axes and a source.', 'A spectacular sunset closed the fieldwork day, which is the view sense.'],
    'a spectacular + noun; spectacularly. Cooler: impressive. Trap: spectacle / spectator. News, art, and data. Impressive to see, not a person watching.',
    ['impressive']
  ),
  spectator: L(
    'A spectator watches a sport, show, or event and does not take part: spectator numbers; a spectator sport. Audience is more for seated arts; observer is cooler and scientific. Spectator numbers are not participation. Mix-up: spectacle / spectacular (previous entries); inspector is an official. Do not call a player a spectator.',
    ['Spectator numbers are not the same as participation in the PE audit.', 'Spectators were kept behind the barrier, which is the crowd-control sense.'],
    'a spectator; spectator sport / numbers. Arts twin: audience. Trap: spectacle. PE, news, and safety. Watcher, not participant.',
    ['audience']
  ),
  spill: L(
    'To spill is to pour liquid out by accident, or to reveal a secret: a chemical spill; spill the details. Pour is deliberate; leak is for secrets and pipes. A chemical spill voids the practical. Mix-up: spell is letters or a period (already in the dictionary); spoil is to ruin (later entry). Do not write spill for a planned pouring in a method.',
    ['A chemical spill voids the practical if it is not logged, the technician said.', 'Do not spill the paper contents in the corridor, which is the secret sense.'],
    'spill + liquid; a spill; spill a secret. Deliberate: pour. Trap: spell / spoil. Sciences and news. Accident or leak, not a planned pour.',
    []
  ),
  spine: L(
    'The spine is the backbone, the edge of a book, or (informal) courage: label the spine; the spine of the book. Backbone is the everyday body twin; vertebrae are the bones. Label the spine on the skeleton. Mix-up: spin is to turn (already elsewhere); spire is a church point. Do not write spine for a single rib.',
    ['Label the spine on the skeleton, not the ribcage, the biology paper said.', 'Write the title on the spine of the folder, which is the book-edge sense.'],
    'the spine; spinal (adjective); the spine of a book. Everyday body: backbone. Trap: spin / spire. Biology and libraries. Backbone or book edge.',
    ['backbone']
  ),
  spiritual: L(
    'Spiritual means connected with the human spirit or with religion, not material things: a spiritual reading; spiritual beliefs. Religious is more institutional; sacred is holier (already elsewhere). A spiritual reading is not close language analysis. Mix-up: spirit is the noun (already in the dictionary); spirited means lively. Do not write spiritual for “lively”.',
    ['A spiritual reading of the poem is not a substitute for close language analysis.', 'Spiritual care featured in the hospice case study, which is the pastoral-health sense.'],
    'spiritual beliefs / life / care; spiritually. Institutional: religious. Trap: spirited. RS, literature, and health. Spirit or faith, not “energetic”.',
    ['religious']
  ),
  spite: L(
    'Spite is a wish to hurt or annoy; in spite of means although: in spite of the snow; out of spite. Despite is the close twin (already elsewhere); although is the clause twin. In spite of the snow, the oral went ahead. Mix-up: spit is saliva; despite does not take “of”. Do not write “in despite of” or “in spite” without of.',
    ['In spite of the snow, the oral went ahead in the drama studio.', 'The leak looked like spite, not error, which is the malice sense.'],
    'in spite of; out of spite. Close: despite (no of). Trap: spit. Formal prose and news. Although, or a wish to hurt.',
    ['despite']
  ),
  split: L(
    'To split is to divide into parts; as a noun, a division in a group: split the sample; a split in the party. Divide is the close twin; share is more even and friendly. Split the sample by year group. Mix-up: spit; spilt / spilled is past of spill. Do not write split for a 50–50 “share fairly” without a cut.',
    ['Split the sample by year group before you compare means.', 'A split in the coalition featured in the politics source, which is the faction sense.'],
    'split into / between; a split. Close: divide. Trap: spill / spit. Methods, news, and politics. Cut apart, not a leak.',
    ['divide']
  ),
  spoil: L(
    'To spoil is to damage or ruin, to go bad (food), or to harm a child by giving too much: spoil the unseen; food spoils. Ruin is heavier; wreck is violent. Do not spoil the unseen in the corridor. Mix-up: spill is liquid (previous entry); spoils are stolen goods in old texts. Do not write spoil for a chemical spill.',
    ['Do not spoil the unseen by discussing it in the corridor before period five.', 'Milk spoils if the fridge fails, which is the go-bad sense.'],
    'spoil + noun; spoilt / spoiled; spoil a child. Heavier: ruin. Trap: spill. Exams, food, and parenting. Ruin or go bad, not a leak.',
    ['ruin']
  ),
  spokesman: L(
    'A spokesman is a man who speaks officially for a group; spokesperson is the gender-neutral twin: a trust spokesman. Speaker is wider (already in the dictionary); representative is elected or chosen more broadly. A trust spokesman denied the leak. Mix-up: spokesman vs speaker of the House (a role). Do not assume the speaker’s gender in a source that says spokesperson.',
    ['A trust spokesman denied the leak; name the role, not a rumour account.', 'A police spokesman confirmed the arrest, which is the official-statement sense.'],
    'a spokesman for; spokesperson (neutral); spokeswoman. Wider: speaker. News and press releases. Official voice, not any person talking.',
    ['spokesperson']
  ),
  sponsorship: L(
    'Sponsorship is money given to support a person, event, or organisation, usually for publicity: kit sponsorship; a sponsorship deal. Funding is wider; a grant often has no logo. Kit sponsorship is not a grant. Verb: sponsor (already in the dictionary). Mix-up: friendship; response. Do not hide a sponsor as a donation if a logo is required on the accounts.',
    ['Kit sponsorship is not a grant: declare it on the accounts line.', 'Exam-board sponsorship of a prize still needs a fairness note, which is the ethics sense.'],
    'sponsorship of / deal; under the sponsorship of. Wider: funding. Verb: sponsor. Trap: grant (often no advert). Business and sport. Money for publicity, not a silent gift.',
    []
  ),
  spontaneous: L(
    'Spontaneous means not planned; happening naturally or on impulse: a spontaneous answer; spontaneous combustion (science). Impulsive stresses little thought; unplanned is plain. A spontaneous oral answer still needs justification. Mix-up: simultaneous means at the same time (already elsewhere); instantaneous is instant. Do not call a rehearsed speech spontaneous.',
    ['A spontaneous answer in the oral still needs a justified opinion, not a shrug.', 'A spontaneous protest blocked the High Street, which is the unplanned-event sense.'],
    'a spontaneous + noun; spontaneously. Plain: unplanned. Trap: simultaneous. Orals, news, and chemistry. Unplanned, not “at the same time”.',
    ['unplanned']
  ),
  spotlight: L(
    'A spotlight is a strong lamp on one area, or public attention: in the spotlight; put X in the spotlight. Limelight is the fame twin; attention is wider. The report put access arrangements in the spotlight. Verb: spotlight an issue. Mix-up: highlight is to mark or emphasise (already elsewhere); streetlight is a lamp on a road. Do not write spotlight for a highlighter pen.',
    ['The report put exam access arrangements in the spotlight after the leak.', 'Dim the spotlight during the blackout scene, which is the stage-lamp sense.'],
    'in the spotlight; put + noun + in the spotlight. Fame twin: limelight. Trap: highlight / streetlight. News and drama. Attention or a stage lamp.',
    []
  ),
  spouse: L(
    'A spouse is a husband or wife (formal, often on forms): name the spouse; a surviving spouse. Partner is wider (includes unmarried); husband / wife are specific. Name the spouse as next of kin only if named. Mix-up: sauce is food (already in the dictionary); spouse vs partner on diversity forms. Do not write spouse for a boyfriend or girlfriend unless they are married.',
    ['Name the spouse as next of kin only if that is who they named, the trip form said.', 'A spouse visa featured in the migration case study, which is the legal sense.'],
    'a spouse; spouse visa. Wider: partner. Trap: sauce. Forms, law, and geography. Married partner, not a condiment.',
    ['partner']
  ),
  spy: L(
    'A spy secretly gathers information; as a verb, to watch secretly or to notice: a spy network; spy on. Agent is wider; intelligence officer is the official twin. How a spy network changed wartime intelligence. Mix-up: pie is food; spike is a sharp point. Do not call a journalist a spy without evidence of covert work.',
    ['The history paper asks how a spy network changed wartime intelligence.', 'Invigilators must not spy on scripts from the back row, which is the watch sense.'],
    'a spy; spy on / for; spy network. Official: intelligence officer. Trap: pie / spike. History and news. Secret gathering, not open reporting.',
    ['agent']
  ),
  squad: L(
    'A squad is a small group working or training together, especially police or sport: a bomb-disposal squad; the England squad. Team is wider; unit is military/organisational. Name the bomb-disposal squad. Mix-up: square is a shape (already in the dictionary); squid is an animal. Do not call a whole police force a squad.',
    ['Name the bomb-disposal squad in the source, not a generic “soldiers”.', 'She made the county hockey squad, which is the sport sense.'],
    'a bomb / drugs / football squad; squad car. Wider: team. Trap: square / squid. News, PE, and history. A small trained group, not a shape.',
    ['team']
  ),
  stack: L(
    'A stack is a neat pile; as a verb, to pile things, or (of evidence) to add up: the evidence stacks up; a stack of scripts. Pile is everyday; heap is messier. The evidence does not stack up if n is twelve. Mix-up: stake is a share or post (already elsewhere); stock is supply. Do not write stack for a random scatter of papers.',
    ['The evidence does not stack up if your n is twelve, the methods tutor said.', 'Stack the scripts in candidate-number order, which is the pile sense.'],
    'a stack of; stack + objects; stack up. Everyday: pile. Trap: stake / stock. Methods, exams, and IT (stack as a structure). A neat pile, or whether a claim holds.',
    ['pile']
  ),
  stain: L(
    'A stain is a dirty mark, or a mark on someone’s reputation; as a verb, to leave that mark: a stain on a reputation; blood stain. Mark is wider; blot is literary. A stain on the trust’s reputation. Mix-up: strain is stress or a variety (already elsewhere); stair is a step. Do not write stain for muscle strain.',
    ['A stain on the trust’s reputation featured in the editorial, not a coffee ring.', 'Stain the slide before you view it, which is the lab-dye sense.'],
    'a stain on + reputation; blood / coffee stain; stain + object. Trap: strain / stair. News, literature, and biology. A mark, literal or moral — not stress.',
    []
  ),
  standing: L(
    'Standing is reputation or status; of long standing means existing for a long time: the sixth form’s standing; a dispute of long standing. Status is close (already in the dictionary); reputation is public opinion (already elsewhere). The sixth form’s standing collapsed. Mix-up: stand is the verb (already in the dictionary); outstanding means excellent or unpaid. Do not write standing for “outstanding grade”.',
    ['The sixth form’s standing with the board collapsed after the unsealed pack.', 'A convention of long standing featured in the politics paper, which is the duration sense.'],
    'standing with / in; of long standing; standing ovation. Close: status. Trap: outstanding. News, politics, and sport (league standing). Reputation or duration, not “excellent”.',
    ['status']
  ),
  startle: L(
    'To startle is to surprise someone suddenly, often so they jump: a startle response; startle the audience. Surprise is wider and can be pleasant; shock is stronger. A startle response featured in psychology. Mix-up: start is to begin (already in the dictionary); stare is to look hard. Do not write startle for “start the lesson”.',
    ['A startle response featured in the psychology practical, not a long-term trait.', 'The alarm startled invigilators, which is the sudden-surprise sense.'],
    'startle + person; a startle response. Wider: surprise. Trap: start / stare. Psychology and narrative. Sudden jump-scare, not “begin”.',
    ['surprise']
  ),
  starve: L(
    'To starve is to suffer or die from lack of food, or to keep someone from something they need: starve of funding; starve of oxygen. Go hungry is everyday; famine is the disaster noun. The case study maps famine, not a Wi-Fi metaphor. Mix-up: staff are workers (already in the dictionary); starve vs crave. Do not write starve for missing a snack.',
    ['The case study maps famine, not a metaphor that pupils “starve” of Wi-Fi.', 'Labs were starved of funding, which is the deprive sense.'],
    'starve to death; starve of + noun; starving. Everyday: go hungry. Trap: staff. Geography, news, and biology. Lack of food or deprivation, not a missed lunch.',
    []
  ),
  static: L(
    'Static means not moving or changing; as a noun, crackling electrical noise: a static pie chart; static electricity. Stationary is “not moving” for vehicles; stable is “not likely to fall”. A static pie chart of one year is not a trend. Mix-up: statistic is a number (already in the dictionary); statue is sculpture (already in the dictionary). Do not write static for a statistic.',
    ['A static pie chart of one year is not a trend, the geography marker said.', 'Static electricity featured in the physics demo, which is the charge sense.'],
    'static + noun; statically; static electricity. Vehicle twin: stationary. Trap: statistic / statue. Data and physics. Unchanging, or electrical crackle — not a number.',
    []
  ),
  steadily: L(
    'Steadily means gradually and continuously, in an even way: rose steadily; work steadily. Gradually is close; constantly can mean “without stop” or “very often”. Attendance rose steadily. Adjective: steady. Mix-up: readily means willingly; steadily vs suddenly. Do not write steadily for a one-off jump.',
    ['Attendance rose steadily after the bus was restored, the dashboard showed.', 'Work steadily through the paper; do not rush the last question, which is the even-pace sense.'],
    'steadily + verb; rise / fall steadily. Adjective: steady. Close: gradually. Trap: readily. Data and exam technique. Even and continuous, not a jump.',
    ['gradually']
  ),
  steep: L(
    'Steep means rising or falling sharply, or (of a price or increase) unreasonably high: a steep rise; a steep hill. Sharp is close for change; expensive is the price twin. A steep rise in exclusions still needs a denominator. Mix-up: step is a stair or stage (already in the dictionary); cheap is low-cost. Do not call a 1% change steep without a scale.',
    ['A steep rise in exclusions still needs a denominator, the inspector said.', 'The path is steep after the stile, which is the hillside sense.'],
    'a steep hill / rise / drop; steeply; a steep price. Close (change): sharp. Trap: step. Geography, data, and news. Sharp incline or too-high price.',
    ['sharp']
  ),
  stiff: L(
    'Stiff means difficult to bend, severe (a stiff penalty), or not relaxed: a stiff penalty; stiff with cold. Rigid is the materials twin; severe is the punishment twin. A stiff penalty for malpractice is set by the board. Mix-up: staff are workers; still means not moving (already in the dictionary). Do not write stiff for “staff meeting”.',
    ['A stiff penalty for malpractice is set by the board, not by a head of year.', 'The hinge was stiff after the frost, which is the hard-to-bend sense.'],
    'a stiff + noun; stiffly; bored stiff (informal). Materials: rigid. Trap: staff / still. Law, DT, and news. Unbending, severe, or formal — not workers.',
    []
  ),
  stimulus: L(
    'A stimulus is something that causes a reaction or more activity (plural stimuli): name the stimulus; an economic stimulus. Trigger is close; incentive is a reward to act. Name the stimulus in the practical. Mix-up: stimulate is the verb (already elsewhere); stimulant is a drug. Do not write stimulus for the whole experiment.',
    ['Name the stimulus in the psychology practical, not “the thing we showed”.', 'A stimulus package featured in the economics booklet, which is the spending sense.'],
    'a stimulus; stimuli (plural); economic stimulus. Verb: stimulate. Trap: stimulant. Psychology, biology, and economics. The cause of a reaction, not the response.',
    ['trigger']
  ),
  stir: L(
    'To stir is to mix a liquid with a spoon, or to cause feeling or trouble: stir up rumours; stir the mixture. Mix is everyday; provoke is stronger for trouble. Do not stir up rumours about grades. Noun: a stir (public excitement). Mix-up: steer is to direct a vehicle (already elsewhere); stare is to look. Do not write stir for “steer the debate” as driving.',
    ['Do not stir up rumours about grades before the embargo lifts at midday.', 'Stir the solution until it dissolves, which is the mix sense.'],
    'stir + liquid; stir up + noun; cause a stir. Everyday: mix. Trap: steer / stare. Chemistry, news, and orals. Mix or provoke, not drive a car.',
    ['mix']
  ),
  storage: L(
    'Storage is the keeping of things for later, or the space used: cloud storage; storage of chemicals. Store is the verb/shop (already in the dictionary); warehouse is a building. Cloud storage of scripts needs an approved portal. Mix-up: story is a narrative (already in the dictionary); shortage is not enough (already in the dictionary). Do not write storage for a shop.',
    ['Cloud storage of scripts still needs a board-approved portal, IT said.', 'Chemical storage is locked, which is the H&S sense.'],
    'storage of / space; cloud / cold storage. Verb/shop: store. Trap: story / shortage. IT, sciences, and logistics. Keeping things, not a tale or a shop.',
    []
  ),
  straightforward: L(
    'Straightforward means simple and easy to understand, or honest and direct: a straightforward method; a straightforward answer. Simple is everyday; honest is the character twin. A straightforward method still needs a control. Mix-up: straight (already in the dictionary) plus forward as two ideas; forthright is bluntly honest. Do not call a multi-step proof straightforward without cause.',
    ['A straightforward method still needs a control, the sciences tutor said.', 'Give a straightforward apology, which is the honest sense.'],
    'a straightforward + noun; straightforwardly. Everyday: simple. Honest twin: direct. Trap: two-word “straight forward”. Methods and orals. Easy or candid, not “in a straight line”.',
    ['simple']
  ),
  strengthen: L(
    'To strengthen is to make or become stronger: strengthen a conclusion; strengthen a bridge. Reinforce is close; improve is wider. Strengthen the conclusion with a second source. Noun: strength (already in the dictionary). Mix-up: lengthen is to make longer; straighten is to make straight. Do not write strengthen for “make longer”.',
    ['Strengthen the conclusion with a second source, not a louder adjective.', 'Physio aimed to strengthen the joint, which is the body sense.'],
    'strengthen + noun; strengthen against. Noun: strength. Opposite: weaken. Trap: lengthen / straighten. Essays, DT, and PE. Make stronger, not longer or straighter.',
    ['reinforce']
  ),
  subordinate: L(
    'Subordinate means lower in rank or importance; as a noun, a person you manage; in grammar, a subordinate clause: a subordinate clause; subordinate to. Inferior stresses quality; junior stresses rank and age. A subordinate clause cannot stand as a sentence. Verb: subordinate /səˈbɔːdɪneɪt/. Mix-up: inordinate means excessive; coordinate is equal rank or to organise. Do not write subordinate for “unimportant idea” without rank or grammar.',
    ['A subordinate clause cannot stand as a sentence in the SPaG mark scheme.', 'She felt treated as a subordinate, which is the rank sense.'],
    'subordinate to; a subordinate clause / role. Grammar vs HR senses. Trap: coordinate / inordinate. SPaG and workplaces. Dependent or lower-ranking, not “too much”.',
    []
  ),
  subscribe: L(
    'To subscribe is to pay to receive a service, or to agree with an idea: subscribe to a claim; subscribe to a journal. Sign up is everyday; agree is the idea twin. Do not subscribe to the claim until it is repeated. Noun: subscriber (already elsewhere); subscription. Mix-up: ascribe is to attribute; describe is to say what something is like. Do not write subscribe for “describe”.',
    ['Do not subscribe to the claim until a second lab repeats it.', 'The library does not subscribe to that journal, which is the payment sense.'],
    'subscribe to + idea / service; a subscription. Everyday: sign up. Trap: ascribe / describe. Methods, media, and libraries. Pay or agree, not “attribute”.',
    []
  ),
  succession: L(
    'A succession is a number of people or things following one after another, or the process of taking over a title or job: a succession of pilots; succession to the throne. Series is looser; successive is the adjective (already elsewhere). A succession of one-off pilots is not a policy. Mix-up: success is winning (already in the dictionary); successor is the person who follows (already elsewhere). Do not write succession for a single success.',
    ['A succession of one-off pilots is not a policy, the committee minutes said.', 'The succession crisis featured in the history paper, which is the throne sense.'],
    'a succession of; in succession; succession to. Adjective: successive. Person: successor. Trap: success. History, news, and evaluations. One after another, or taking over — not a win.',
    []
  ),
  superior: L(
    'Superior means better in quality or higher in rank; as a noun, a person of higher rank: a superior graph; report to your superior. Better is everyday; excellent is absolute. A superior graph still needs a sample size. Opposite: inferior. Mix-up: supervisor is someone who watches work (next entries); super is informal. Do not write superior for “supervisor” as a job title unless rank is meant.',
    ['A superior graph still needs a sample size in the caption.', 'She reported the fault to her superior, which is the rank sense.'],
    'superior to; a superior + noun. Opposite: inferior. Trap: supervisor / super. Evaluations and workplaces. Better or higher-ranking, not the watching-job word.',
    ['better']
  ),
  supervise: L(
    'To supervise is to watch and direct work or behaviour so it is done properly: supervise a practical; supervised study. Oversee is close; invigilate is exam-specific. A cover supervisor cannot supervise a practical without a specialist. Noun: supervisor (already elsewhere); supervision. Mix-up: advise is to recommend; superior is better/higher. Do not write supervise for “give advice”.',
    ['A cover supervisor cannot supervise a practical without a science specialist, H&S said.', 'Homework club is supervised until 5 p.m., which is the watch-over sense.'],
    'supervise + work / person; under supervision. Person: supervisor. Exam twin: invigilate. Trap: advise / superior. H&S, exams, and workplaces. Direct and watch, not merely suggest.',
    ['oversee']
  ),
  supreme: L(
    'Supreme means highest in rank or importance; the Supreme Court is a country’s top court: supreme authority; the Supreme Court. Highest is plain; utmost is formal intensity. The Supreme Court ruling featured in the law unit. Mix-up: supreme vs sublime (beauty); supreme as a food label (informal). Do not call a head of year supreme.',
    ['The Supreme Court ruling featured in the law unit, not a local bench.', 'The board has supreme authority over malpractice, which is the highest-rank sense.'],
    'supreme + noun; the Supreme Court; supremely. Plain: highest. Trap: sublime / supervisor. Law and politics. Highest authority, not a tasty pizza.',
    ['highest']
  ),
  surgeon: L(
    'A surgeon is a doctor who performs operations: a consultant surgeon; heart surgeon. Doctor is wider; GP is a general practitioner. Name the consultant surgeon in the case study. Mix-up: surgery is the treatment, room, or MP’s advice session (already in the dictionary). Do not call a GP a surgeon without operative work.',
    ['Name the consultant surgeon in the case study, not a generic “hospital worker”.', 'A field surgeon featured in the war source, which is the military-medicine sense.'],
    'a heart / brain / consultant surgeon; surgical (adjective). Place/treatment: surgery. Trap: calling every doctor a surgeon. Health and history. Operates, not any clinician.',
    []
  ),
  surrender: L(
    'To surrender is to stop fighting and admit defeat, or to give something up to authority: Germany’s surrender; surrender a passport. Give in is everyday; capitulate is more formal. Germany’s surrender is a date in the timeline. Noun: surrender. Mix-up: surround is to encircle (already elsewhere); render is to make or give. Do not write surrender for “surround the building”.',
    ['Germany’s surrender is a date in the timeline, not a mood in the source.', 'Surrender the phone at the door, which is the hand-over sense.'],
    'surrender to; surrender + object; unconditional surrender. Everyday: give in. Trap: surround / render. History, news, and security. Give in or hand over, not encircle.',
    ['capitulate']
  ),
  survival: L(
    'Survival is the state of continuing to live or exist, often despite danger (usually uncountable): survival rates; survival of the fittest. Existence is wider; live is the verb. Survival rates after five years featured in the chart. Verb: survive (already in the dictionary). Mix-up: revival is coming back into fashion or consciousness; survey is a questionnaire (already in the dictionary). Do not write “a survival” for one person living.',
    ['Survival rates after five years featured in the health-inequality chart.', 'The survival of the language featured in the linguistics source, which is the continue-to-exist sense.'],
    'survival of; survival rates / kit. Verb: survive. Trap: revival / survey. Biology, health, and news. Continuing to exist, not a comeback tour.',
    []
  ),
  sustainable: L(
    'Sustainable means able to continue without damaging the environment or running out, or able to be kept going: sustainable transport; sustainable funding. Renewable is about energy sources; viable is “able to work”. A sustainable transport plan still needs a costed route. Verb: sustain (already elsewhere). Mix-up: obtainable means you can get it; unsustainable is the opposite. Do not call a one-off tree-planting day a sustainable policy by itself.',
    ['A sustainable transport plan still needs a costed bus route, not a slogan.', 'The club is not financially sustainable on cake sales, which is the keep-going sense.'],
    'sustainable + noun; sustainability; sustainably. Energy twin: renewable. Trap: obtainable. Geography, economics, and citizenship. Lasting without exhaustion, not merely available.',
    []
  ),
}
