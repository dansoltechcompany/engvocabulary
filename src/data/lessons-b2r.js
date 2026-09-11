const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2R = {
  lab: L(
    'A lab is a room for scientific tests and practicals (short for laboratory): the chemistry lab; lab book. Laboratory is the full formal twin (already in the dictionary). Write up the method from the lab, not from memory. Mix-up: a label is a sticker (already elsewhere). Do not call a computer room a lab unless science work happens there.',
    ['The chemistry lab was closed after the fume-cupboard alarm.', 'Keep the raw data in the lab book, which is the record sense.'],
    'in the lab; a lab book / coat / report. Full form: laboratory. Trap: label. Sciences and NEA practicals. The room, not a sticker.',
    ['laboratory']
  ),
  laden: L(
    'Laden means heavily loaded, often with something unwelcome: a tray laden with samples; debt-laden. Loaded is close; full is weaker. A debt-laden trust still printed a glossy prospectus. Mix-up: laid is the past of lay; Latin is the language. Do not write laden for a light backpack.',
    ['A debt-laden trust still published a glossy prospectus.', 'The tray was laden with ice-core samples, which is the physical sense.'],
    'laden with; debt-laden / grief-laden. Close: loaded. Trap: laid / Latin. Business, news, and labs. Heavy with X, not merely “busy”.',
    ['loaded']
  ),
  lag: L(
    'To lag is to fall behind in speed, progress, or development: lag behind; a time lag (noun). Trail is close; delay is wider. Rural broadband still lags in the case study. Mix-up: lack is “not have” (already in the dictionary). Do not write lag for a one-minute late bus without a trend.',
    ['Rural broadband still lags behind the urban average in the case study.', 'There is a time lag between the policy and the data, which is the noun.'],
    'lag behind; a time / jet lag. Close: trail. Trap: lack. Geography, economics, and methods. Falling behind, not a single late minute.',
    []
  ),
  landing: L(
    'A landing is an aircraft coming to the ground, or the floor at the top of a staircase: a crosswind landing; the first-floor landing. Touchdown is the aviation twin; hallway is not the stair platform. Time the landing against the wind data. Mix-up: laundry is washing. Do not call the whole airport a landing.',
    ['The geography clip times the plane’s landing against the crosswind data.', 'Bags sat on the landing because the loft hatch was jammed, which is the stair sense.'],
    'a smooth / emergency landing; a stair landing. Aviation twin: touchdown. Trap: laundry. Geography, physics, and housing. Descent or stair floor — specify.',
    []
  ),
  landlady: L(
    'A landlady is a woman who rents out a house or flat, or who runs a pub: the landlady’s inventory; a pub landlady. Landlord is the male or generic twin (already in the dictionary). She required a UK guarantor. Mix-up: landlady is not a female landowner of farmland (that is landowner). Do not assume the landlady lives on site.',
    ['The landlady required a UK guarantor before the first term’s rent.', 'The pub landlady refused ID-less sixth-formers, which is the licensed-premises sense.'],
    'a landlady; the landlady’s + noun. Twin: landlord. Contrast: landowner (farm/estate). Housing and citizenship. Rent or a pub, not a farm title.',
    []
  ),
  landfill: L(
    'A landfill is a site where waste is buried, or the waste put there: a landfill tax; landfill sites. Dump is informal; recycling sits opposite in policy. Map landfill downstream of the estate. Mix-up: landfall is when a storm reaches land. Do not call a bottle bank a landfill.',
    ['The geography enquiry maps landfill sites downstream of the estate.', 'Landfill tax featured in the economics data booklet, which is the policy sense.'],
    'a landfill site; landfill tax / waste. Informal: dump. Opposite stream: recycling. Trap: landfall (storms). Geography and news. Buried rubbish, not a storm.',
    []
  ),
  landowner: L(
    'A landowner is a person who owns a large area of land: a private landowner; landowner rights. Landlord rents housing (already elsewhere); farmer may only tenant the land. The enclosure source names the landowner. Mix-up: landscape is scenery (already in the dictionary). Do not call a renter a landowner.',
    ['The enclosure source names the landowner, not the tenants, as the petitioner.', 'Access crossed a landowner’s field, which is the rights-of-way sense.'],
    'a landowner; landowner rights. Housing twin: landlord. Trap: landscape. History, geography, and citizenship. Owns the land, not the tenancy.',
    []
  ),
  lash: L(
    'To lash is to hit hard (rain lashes; a whip) or to attack in words (lash out): rain lashed the path; lash out at critics. Beat is everyday for weather; criticise is cooler. Fieldwork was called off. Mix-up: leash is a dog lead (already in the dictionary). Do not write lash for a mild complaint.',
    ['Rain lashed the coastal path, so the fieldwork was called off.', 'He lashed out at the inspector in the minutes, which is the verbal sense.'],
    'rain / wind lashes; lash out at. Weather: beat. Trap: leash. Geography, news, and orals. Force or a verbal attack, not a dog lead.',
    []
  ),
  laser: L(
    'A laser is a device that produces a narrow, intense beam of light: a laser pointer; laser surgery. Beam is the light itself; torch is ordinary light. Explain why a laser is coherent. Mix-up: lazer is a misspelling; razor is for shaving. Do not call any bright LED a laser in physics.',
    ['The physics paper asks why a laser is coherent, not merely “bright”.', 'Laser surgery featured in the biology ethics item, which is the medical sense.'],
    'a laser beam / pointer / printer; laser surgery. Light: beam. Trap: lazer / razor. Physics and biology. Coherent light, not a torch.',
    []
  ),
  lately: L(
    'Lately means in the recent past; recently: improved lately; have you seen her lately? Recently is the close twin; later is a future or next time (already in the dictionary). Attendance improved after the bus change. Mix-up: latest is “most recent of a series”. Do not write lately for “at night” (that is late).',
    ['Attendance has improved lately after the bus timetable changed.', 'Have you revised the mark scheme lately, which is the “in recent weeks” sense.'],
    'lately; just lately. Close: recently. Contrast: later / latest / late. Pastoral and news. Recent past, not “after this”.',
    ['recently']
  ),
  lay: L(
    'To lay is to put something down carefully, to prepare (lay the table), or to dismiss staff (lay off). Past: laid. Lie is to recline or to not tell the truth (already elsewhere) — you lie down; you lay a book down. Lay the argument’s foundations in paragraph one. Mix-up: lie / lied. Do not write “she lay the book” in the present.',
    ['Lay the foundations of the argument in paragraph one, not in the conclusion.', 'The trust will lay off cover supervisors in July, which is the jobs sense.'],
    'lay + object (+ down); lay the table / foundations; lay off. Past: laid. Trap: lie / lied. Essays, DT, and news. Put down, not recline.',
    []
  ),
  legalise: L(
    'To legalise is to make something allowed by law (British -ise): legalise a substance; legalise a document. Decriminalise is weaker (no longer a crime, still unregulated). The citizenship paper asks who can legalise it. Mix-up: legal is the adjective (already in the dictionary); legalize is US spelling. Do not write legalise for “get a lawyer”.',
    ['The citizenship paper asks who can legalise a previously banned substance.', 'The embassy will not legalise an unsigned certificate, which is the paperwork sense.'],
    'legalise + noun; legalisation. US: legalize. Weaker: decriminalise. Adjective: legal. Trap: “legalise a lawyer”. Citizenship and news. Make lawful, not hire counsel.',
    []
  ),
  leisurely: L(
    'Leisurely means done slowly and without hurry: a leisurely pace; a leisurely breakfast. Unhurried is the twin; leisure is the noun for free time (already in the dictionary). A leisurely stroll is not timed orienteering. Mix-up: leisurely is not “of leisure centres”. Do not call a timed practical leisurely.',
    ['A leisurely stroll is not a timed orienteering assessment.', 'They took a leisurely look at the gallery before the oral, which is the unhurried sense.'],
    'a leisurely + noun; at a leisurely pace. Noun: leisure. Close: unhurried. PE write-ups and travel writing. Slow on purpose, not lazy in a rude sense.',
    ['unhurried']
  ),
  lessen: L(
    'To lessen is to make or become smaller in amount, importance, or intensity: lessen the risk; the pain lessened. Reduce is the close twin; lesson is a class (already in the dictionary). A larger n does not lessen bias if the frame is skewed. Mix-up: lesson / less. Do not write lessen for “teach a lesson”.',
    ['A larger sample does not lessen bias if the frame is still skewed.', 'The storm lessened after midnight, which is the intransitive sense.'],
    'lessen the + noun; lessen + in intensity. Close: reduce. Trap: lesson (a class). Methods, health, and news. Make less, not a taught period.',
    ['reduce']
  ),
  lesser: L(
    'Lesser means smaller or less important: a lesser-known poet; the lesser of two evils. Smaller is everyday; minor is close. “The lesser of two evils” is not a methods justification. Mix-up: lessor is a person who leases property; less is the determiner. Do not write lesser than (use less than).',
    ['“Choose the lesser of two evils” is not a methods justification.', 'A lesser-known source still needs a citation, which is the “not famous” sense.'],
    'a lesser + noun; lesser-known; the lesser of two evils. Trap: lessor / less than. Essays, RS, and literature. Smaller in rank, not a grammar “less”.',
    []
  ),
  liberation: L(
    'Liberation is the act of setting a person, group, or place free: the town’s liberation; liberation from poverty. Freedom is the state; independence is political self-rule. Date the liberation, not the armistice. Mix-up: liberal is a political adjective (already in the dictionary); liberty is the right (already elsewhere). Do not call a teacher-free lesson liberation in a history essay.',
    ['The history paper dates the town’s liberation, not the armistice.', 'Liberation from exam stress featured in the assembly, which is the metaphor sense.'],
    'the liberation of + place; liberation from. State: freedom. Trap: liberal / liberty. History and politics. Being freed, not a party label.',
    ['freedom']
  ),
  lifespan: L(
    'A lifespan is how long a person, animal, or product typically lives or lasts: median lifespan; battery lifespan. Life expectancy is a population statistic; lifetime is one person’s span (already in the dictionary). Compare median lifespan in the two cohorts. Mix-up: lifestyle is how you live (already elsewhere). Do not treat a slogan as a measured lifespan.',
    ['Compare median lifespan in the two cohorts, not only life expectancy slogans.', 'The probe’s lifespan is three years, which is the product sense.'],
    'a short / average / median lifespan; lifespan of + noun. Population: life expectancy. Trap: lifestyle. Biology and design. Typical duration, not a habit.',
    []
  ),
  lighten: L(
    'To lighten is to make brighter or less heavy, or to make a mood less serious: lighten the load; lighten up (informal). Ease is close for burden; brighten is for light. The union asked to lighten Year 11’s mock load. Mix-up: lightning is the flash (already in the dictionary); lighting is lamps. Do not write lighten for “turn on the lights” if you mean lighting.',
    ['Lighten the load on Year 11 by moving one mock, the union asked.', 'The skylight lightened the hall, which is the brightness sense.'],
    'lighten the load / mood; lighten up (informal). Close (burden): ease. Trap: lightning / lighting. Pastoral and design. Less heavy or brighter, not a storm.',
    []
  ),
  likelihood: L(
    'Likelihood is the chance that something will happen (often uncountable): the likelihood of error; in all likelihood. Probability is the maths twin; chance is everyday. State the likelihood of Type I error. Mix-up: likely is the adjective (already in the dictionary). Do not write “a likelihoods”.',
    ['State the likelihood of Type I error, not a gut feeling.', 'In all likelihood the clash will stand, which is the idiom.'],
    'the likelihood of + noun / -ing; in all likelihood. Maths: probability. Adjective: likely. Methods and news. Chance, not the adjective likely.',
    ['probability']
  ),
  limb: L(
    'A limb is an arm, a leg, or a bird’s wing; also a large tree branch: an injured limb; out on a limb (isolated, risky). Arm/leg are everyday; branch is the tree twin. Label the limb before you discuss shock. Mix-up: limp is to walk unevenly; limbo is an uncertain wait. Do not call a finger a limb in biology.',
    ['Label the injured limb on the first-aid diagram before you discuss shock.', 'The critic went out on a limb, which is the idiom for a risky stance.'],
    'an upper / lower limb; a tree limb; out on a limb. Trap: limp / limbo. Biology, first aid, and PE. Arm, leg, wing, or branch — not a finger.',
    []
  ),
  limestone: L(
    'Limestone is a sedimentary rock of calcium carbonate, used in buildings and in the carbon cycle: limestone pavement; limestone quarry. Chalk is a softer carbonate; granite is igneous. The Yorkshire case study used limestone pavement. Mix-up: lime is the fruit or the chemical (already in the dictionary); limewater is the test. Do not call any pale rock limestone without evidence.',
    ['The limestone pavement featured in the Yorkshire case study, not a granite cliff.', 'Heat limestone in the limewater practical, which is the chemistry sense.'],
    'limestone pavement / quarry / scenery; carboniferous limestone. Softer twin: chalk. Trap: lime / limewater. Geography and chemistry. CaCO₃ rock, not a fruit.',
    []
  ),
  linen: L(
    'Linen is cloth from flax, or household sheets and tablecloths (bed linen, often uncountable): hospital linen; Irish linen. Cotton is a different fibre; sheets is the everyday bed word. Ward linen is logged out. Mix-up: lining is an inner layer (next entries’ family); linseed is flax seed. Do not write “a linen” for one tea towel.',
    ['Hospital linen is logged out of the ward, the infection-control note said.', 'The costume was linen, not polyester, which is the fibre sense.'],
    'bed / table / hospital linen; Irish linen. Everyday bed: sheets. Trap: lining. Health, DT, and literature. Flax cloth or household textiles, usually uncountable.',
    []
  ),
  literal: L(
    'Literal means following the ordinary meaning of words, not a metaphor; also exact: the literal meaning; a literal translation. Figurative sits opposite; exact is close for numbers. Give the literal meaning of the metaphor first. Mix-up: literary is about literature (already in the dictionary); literally is the C1 adverb. Do not call a symbolic reading literal.',
    ['Give the literal meaning of the metaphor before you analyse it.', 'A literal translation of the idiom sounds wrong, which is the word-for-word sense.'],
    'the literal meaning / translation; a literal + noun. Opposite: figurative. Trap: literary / literally. Literature and MFL. Exact words, not a symbol.',
    ['exact']
  ),
  loaded: L(
    'Loaded means carrying a load, biased (a loaded question), or informally very rich: a loaded question; a loaded van. Biased is the research twin; laden is close for physical weight. A loaded survey item still leads the respondent. Mix-up: load is the noun/verb (already in the dictionary). Do not call a difficult question loaded unless it pushes an answer.',
    ['A loaded question in the survey still counts as leading the respondent.', 'The van was loaded with costumes, which is the physical sense.'],
    'a loaded question / dice; loaded with. Research: biased / leading. Trap: load. Methods, news, and DT. Weighted or unfair, not merely “hard”.',
    ['biased']
  ),
  lobbyist: L(
    'A lobbyist is paid to influence politicians or officials for a client: a fossil-fuel lobbyist; lobbyist register. Lobby is the verb/noun for that activity (already in the dictionary); activist is unpaid campaigning. Name the lobbyist’s client in the source. Mix-up: hobbyist is someone with a hobby. Do not call a student petition-writer a lobbyist.',
    ['Name the lobbyist’s client in the source, not only the slogan on the leaflet.', 'The register listed a lobbyist for the bus firms, which is the official-list sense.'],
    'a lobbyist for + group; a lobbyist register. Verb/noun: lobby. Contrast: activist. Trap: hobbyist. Politics, citizenship, and news. Paid influence, not a hobby.',
    []
  ),
  localise: L(
    'To localise is to keep something in one area, or to adapt it for a place (British -ise): localise an outbreak; localise a software build. Confine is close for spread; locate is only “find the place” (already in the dictionary). The outbreak was localised to one year group. Mix-up: local (adjective) / locate. US: localize. Do not write localise for “look up on a map” (that is locate).',
    ['The outbreak was localised to one year group, the trust reported.', 'Localise the interface for UK spelling, which is the adaptation sense.'],
    'localise + noun + to; localisation. US: localize. Trap: locate / local. Health, IT, and geography. Contain or adapt, not “find”.',
    []
  ),
  lodge: L(
    'To lodge is to make a formal complaint or claim, or to stay somewhere temporarily: lodge an appeal; lodge with a host. File is the paperwork twin; stay is everyday housing. Lodge the appeal within ten working days. Noun: a lodge can be a small house. Mix-up: log is a record; dislodge is to knock out of place. Do not write lodge for an informal moan in a corridor.',
    ['Lodge the appeal on the portal within ten working days.', 'She lodged with a host family in Lyon, which is the stay sense.'],
    'lodge a complaint / appeal / claim; lodge with. Everyday stay: stay. Trap: log / dislodge. Exams office and MFL trips. Official filing or temporary stay.',
    ['file']
  ),
  loft: L(
    'A loft is the space under a roof, used for storage or converted into a room: a loft conversion; loft insulation. Attic is the close twin; loft (verb, rare at B2) is to kick high. The survey counted a converted loft as a bedroom. Mix-up: lofty is high or proud (C1, already elsewhere). Do not call a garage a loft.',
    ['The housing survey counted a converted loft as an extra bedroom.', 'Loft insulation featured in the energy-efficiency practical, which is the physics sense.'],
    'a loft conversion / hatch; loft insulation. Close: attic. Trap: lofty. Geography, housing, and physics. Under the roof, not a proud tone.',
    ['attic']
  ),
  log: L(
    'A log is an official record of events; as a verb, to write them down. Also a piece of cut wood: an access log; log the incident. Record is the everyday twin; diary is personal. Log every access to the exam cupboard. Mix-up: logo is a brand mark (already in the dictionary); blog is a public diary. Do not treat a chat screenshot as a log unless it is the official record.',
    ['Log every access to the exam cupboard on the sheet, not in a chat.', 'A log of wood blocked the fire exit, which is the timber sense.'],
    'a log of; log + event; an access / error log. Everyday: record. Trap: logo / blog. Exams, IT, and DT. Official list or timber — specify.',
    ['record']
  ),
  longing: L(
    'Longing is a strong wish for something, especially something distant (often uncountable; a longing for): a longing for home; longing to return. Desire is wider; homesickness is narrower. Name the longing in the poem. Mix-up: belonging is membership; long is the adjective/verb. Do not use longing for a mild preference for tea.',
    ['Name the longing in the poem, then show the image that carries it.', 'She spoke of a longing to read medicine, which is the career-wish sense.'],
    'a longing for / to + verb. Wider: desire. Trap: belonging / long. Literature and orals. Strong yearning, not a casual like.',
    ['desire']
  ),
  'long-standing': L(
    'Long-standing means having existed for a long time: a long-standing agreement; a long-standing problem. Long-term looks forward (already in the dictionary); old is looser. A long-standing clash is not “unprecedented”. Mix-up: outstanding means excellent or unpaid. Do not write long-standing for a policy that started last week.',
    ['A long-standing clash with the bus company is not a new “unprecedented” crisis.', 'A long-standing partnership with the university featured in the prospectus, which is the positive sense.'],
    'a long-standing + noun. Forward-looking twin: long-term. Trap: outstanding. News, history, and business. Lasted a long time already, not merely “big”.',
    []
  ),
  longitude: L(
    'Longitude is distance east or west of the Greenwich meridian, in degrees: 2° W longitude; a longitude line. Latitude is north–south (C1, already elsewhere); meridian is the reference line. Plot longitude as well as latitude. Mix-up: length is how long something is; longitude is not “long attitude”. Do not swap longitude and latitude on a map question.',
    ['Plot longitude as well as latitude or the ship’s position is incomplete.', 'The prime meridian defines longitude 0°, which is the Greenwich sense.'],
    'degrees east / west; a line of longitude. Twin: latitude (N–S). Trap: length. Geography and navigation. East–west, not how long a river is.',
    []
  ),
  lookout: L(
    'A lookout is a person or place for watching; on the lookout for means watching for something: a lookout post; on the lookout for errors. Watch is everyday; sentry is military. Be on the lookout for leading questions. Mix-up: look out (two words) is a warning phrasal verb. Do not write lookout for a sightseeing trip (that is look around).',
    ['Be on the lookout for leading questions in the interview schedule.', 'The cliff lookout was closed in high winds, which is the viewpoint sense.'],
    'on the lookout for; a lookout post / tower. Everyday: watch. Trap: look out! (warning). Methods, geography, and history. Watching, not a holiday gaze.',
    []
  ),
  loom: L(
    'To loom is to appear large and often threatening, or (of a problem) to seem likely: deadlines loom; a figure loomed. Approach is weaker; threaten is more direct. A loom is also a weaving machine. Deadline day loomed, so the NEA went in unfinished. Mix-up: bloom is to flower; gloom is darkness. Do not use loom for a pleasant event arriving.',
    ['Deadline day loomed, so the NEA was submitted unfinished.', 'A hand loom featured in the industrial-revolution source, which is the machine sense.'],
    'loom over / ahead; a problem looms. Noun: a loom (weaving). Trap: bloom / gloom. News, history, and DT. Threatening approach or a weaving frame.',
    []
  ),
  loose: L(
    'Loose means not tight or not firmly fixed; also not precise: a loose cable; a loose argument. Slack is close for fit; vague is close for argument. Lose /luːz/ is the verb “not keep” (already in the dictionary). A loose cable tripped the practical. Mix-up: lose / lost. Do not write “loose the match”.',
    ['A loose cable tripped the practical, the incident form said.', 'A loose paraphrase is not a quotation, which is the precision sense.'],
    'a loose + noun; come loose; loosely. Verb trap: lose / lost. Close (argument): vague. DT, exams, and essays. Not tight — never the verb lose.',
    []
  ),
  loudspeaker: L(
    'A loudspeaker is equipment that makes sound louder for a crowd: the hall loudspeaker; loudspeaker announcement. Speaker can mean the person or the kit; tannoy is a brand used generically in the UK. The fire drill used the loudspeaker. Mix-up: speaker (person who talks). Do not call a pair of earbuds a loudspeaker in a physics paper.',
    ['The fire drill used the loudspeaker, not a staff WhatsApp ping.', 'Label the loudspeaker cone on the physics diagram, which is the device sense.'],
    'a loudspeaker announcement / system. Person: speaker. UK informal: tannoy. Trap: headphones. Safety drills and physics. Crowd amplification, not a person.',
    []
  ),
  loyalist: L(
    'A loyalist is someone who stays faithful to a government, party, or cause, especially in a conflict: a loyalist volunteer; unionist and loyalist in Irish history. Loyal is the adjective (already in the dictionary); supporter is weaker. Distinguish a loyalist from a government soldier in the source. Mix-up: royalist supports a monarch; loyalty is the noun quality. Do not call every government voter a loyalist in a Northern Ireland paper without the historical sense.',
    ['The source distinguishes a loyalist volunteer from a government soldier.', 'Party loyalists blocked the leadership challenge, which is the faction sense.'],
    'a loyalist; loyalist + noun. Adjective: loyal. Contrast: royalist. Trap: loyalty (the quality). History and politics. A side in a conflict, not mere fandom.',
    []
  ),
  lunar: L(
    'Lunar means connected with the moon: a lunar eclipse; the lunar cycle. Solar is of the sun; moon is the everyday noun. A lunar eclipse is not a solar one. Mix-up: linear is in a straight line (C1); lunatic is an offensive old word for mentally ill — avoid it. Do not write lunar for “at night”.',
    ['A lunar eclipse is not the same as a solar one on the physics paper.', 'Lunar soil featured in the sample-return article, which is the moon-surface sense.'],
    'a lunar eclipse / cycle / module. Opposite pair: solar. Trap: linear. Physics, astronomy, and geography. Of the moon, not “night-time”.',
    []
  ),
  lure: L(
    'To lure is to attract someone, often with a reward, sometimes dishonestly: lure participants; lure into a trap. Attract is neutral; tempt stresses desire. Do not lure participants with grade credit. Noun: a lure is bait. Mix-up: allure is attraction as a quality; lure is not “lure” misspelt as “luer”. Do not use lure for an open, fair invitation.',
    ['Do not lure participants with grade credit; that is coercion, ethics said.', 'The decoy lured the pest into the trap, which is the bait sense.'],
    'lure + someone + into / with; a lure. Neutral: attract. Trap: allure. Ethics, news, and biology. Attraction with bait, not a plain advert.',
    ['attract']
  ),
  lyric: L(
    'A lyric is the words of a song (often lyrics) or a short poem of feeling: quote a lyric; lyric poetry. Verse is wider; lyrics is the usual plural for songs. Quote a lyric as a primary text. Mix-up: lyre is an ancient instrument; lyric is not “the singer”. Do not cite a fan wiki as the lyric.',
    ['Quote a lyric as a primary text, not a fan-wiki paraphrase.', 'The paper asked whether the extract was lyric or narrative verse, which is the poetry sense.'],
    'a lyric; lyrics (song words); lyric poetry. Wider: verse. Trap: lyre. Music, English, and media. Words of a song or a personal poem, not the performer.',
    []
  ),
}
