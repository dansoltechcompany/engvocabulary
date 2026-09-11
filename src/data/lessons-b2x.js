const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2X = {
  gala: L(
    'A gala is a special public entertainment, sports meeting, or celebration, often to raise money: a charity gala; a swimming gala. Festival is broader; fete is a close British twin for a local fundraising day. The charity gala still needs a ticket figure in the accounts. Mix-up: galaxy (already in the dictionary); gala as a brand. Do not write gala for an ordinary lesson with no special programme.',
    ['The charity gala still needs a ticket figure in the accounts, not a slogan.', 'A swimming gala featured in the PE fixture list, which is the sports-meeting sense.'],
    'a charity / swimming gala; gala dinner / evening. Close: festival / fete. Trap: galaxy. News, PE, and accounts. A special public event, not a routine class.',
    ['festival', 'celebration', 'fete']
  ),
  gallon: L(
    'A gallon is a unit of volume in the imperial system: a gallon of fuel; miles per gallon. A UK gallon is 4.546 litres; a US gallon is smaller — classic trap. Quote fuel in gallons only if the source uses imperial, then convert to litres. Mix-up: gallon vs gallon as a brand; galleon (a ship). Do not write gallon when the paper asks for SI litres.',
    ['Quote fuel in gallons only if the source uses imperial, then convert to litres.', 'Miles per gallon featured in the transport table, which is the imperial-economy sense.'],
    'a gallon of; miles per gallon; UK gallon = 4.546 L. Metric twin: litre. Trap: US gallon / galleon. Science, geography, and transport. An imperial volume unit, not a litre.',
    ['pint', 'quart']
  ),
  gasp: L(
    'To gasp is to take a sudden sharp breath, from shock, pain, or lack of air; as a noun, that breath: gasp for air; a gasp of disbelief. Pant is repeated breathing; gulp is swallowing. A gasp of disbelief featured in the witness transcript. Mix-up: grasp (already in the dictionary); gap. Do not write gasp for a calm full sentence with no shock in the source.',
    ['A gasp of disbelief featured in the witness transcript, not a cartoon caption.', 'Patients gasped for air in the case notes, which is the breathlessness sense.'],
    'gasp for air; a gasp of; gasp + adverb. Close: pant / gulp. Trap: grasp. Literature, news, and health. A sudden sharp breath, not a leisurely sigh.',
    ['pant', 'gulp']
  ),
  generator: L(
    'A generator is a machine that produces electricity: a backup generator; a diesel generator. Generate is the verb (already in the dictionary); dynamo and alternator are close technical twins. The backup generator featured in the outage log; still name the kW rating. Mix-up: generate / generation. Do not write generator for a person who merely “creates ideas” unless the source uses that metaphor.',
    ['The backup generator featured in the outage log; still name the kW rating.', 'A generator of inequality featured in the sociology extract, which is the “producer of a result” sense.'],
    'a backup / diesel generator; generator of + noun. Verb: generate. Close: dynamo / alternator. Trap: generation. Physics, geography, and news. A machine that produces electricity, or a producer of a result — specify.',
    ['dynamo', 'alternator']
  ),
  generously: L(
    'Generously means in a way that gives more money, help, or time than is usual, or in a large amount: give generously; generously sized. Generous is the adjective (already in the dictionary); liberally is a close twin for amount. The trust gave generously; still quote the £ figure. Mix-up: generally (already related); genius. Do not write generously for a mean, token gift with no extra in the source.',
    ['The trust gave generously, the minutes said; still quote the £ figure.', 'The portions were generously sized in the trial, which is the plentiful-amount sense.'],
    'give / donate generously; generously + adjective. Adjective: generous. Close: liberally. Trap: generally. Accounts, news, and food tests. In a giving or plentiful way, not “quite a lot” with no evidence.',
    ['liberally', 'kindly', 'ungrudgingly']
  ),
  genetics: L(
    'Genetics is the scientific study of genes, heredity, and variation (usually uncountable): human genetics; a genetics practical. Genetic is the adjective (already in the dictionary); heredity is the passing-on of traits. Genetics in the biology paper is not a synonym for personality. Mix-up: genesis; genetics vs eugenics (a different, loaded history topic). Do not write “a genetics” as a countable hobby.',
    ['Genetics in the biology paper is not a synonym for “personality”.', 'A genetics practical still needs a named gene or pedigree, which is the inheritance-science sense.'],
    'human / plant genetics; a genetics practical. Adjective: genetic. Close: heredity / inheritance. Trap: genesis. Biology. The science of genes, not a mood or a horoscope.',
    ['heredity', 'inheritance']
  ),
  gig: L(
    'A gig is a live performance by a musician or comedian: play a gig; a sold-out gig. Concert is a close twin, often larger; the gig economy is informal paid work by task. Name the gig in the arts review, then the venue. Mix-up: jig; gigabyte. Do not write gig for a full-time contract of employment unless the source means casual work.',
    ['Name the gig in the arts review, then the venue, not a streaming slogan.', 'A gig-economy shift still needs a contract source, which is the casual-work sense.'],
    'play / book a gig; a sold-out gig; the gig economy. Close: concert. Trap: jig / gigabyte. Arts, media, and economics. A live show, or casual paid work — specify.',
    ['concert', 'performance', 'show']
  ),
  glacier: L(
    'A glacier is a slow-moving mass of ice formed from compacted snow on land: a valley glacier; glacier retreat. Ice sheet is larger and broader; iceberg is floating ice (already related). Map the glacier retreat on the OS extract. Mix-up: glacier vs glazier (someone who fits glass); glaze. Do not call a winter puddle a glacier.',
    ['Map the glacier retreat on the OS extract, not a travel advert.', 'A valley glacier featured in the erosion case, which is the land-ice sense.'],
    'a valley / tidewater glacier; glacier retreat / snout. Larger: ice sheet. Floating: iceberg. Trap: glazier. Geography. Slow land ice, not a frozen pond.',
    ['ice sheet', 'ice cap']
  ),
  gleam: L(
    'A gleam is a small, often brief, bright light; as a verb, to shine that way: a gleam of light; gleam with. Glow is steadier; glint is a quick flash. A gleam of hope is a sudden small sign of something better. Mix-up: glean (to collect leftover grain or facts); cream. Do not write gleam for a floodlight that fills the whole pitch.',
    ['A gleam of light in the shaft featured in the mine inquiry, not a toothpaste slogan.', 'A gleam of hope featured in the rescue update, which is the figurative sense.'],
    'a gleam of light / hope; gleam with. Steadier: glow. Quick: glint. Trap: glean. Literature, news, and science. A small bright light, or a brief sign of a feeling.',
    ['glint', 'shimmer', 'twinkle']
  ),
  glide: L(
    'To glide is to move smoothly and quietly, with little apparent effort: glide across; a glider. Slide often needs a surface; soar is higher in the air. The model did not glide without lift data in the physics practical. Mix-up: slide / collide; glide vs glyde as a brand. Do not write glide for a clumsy stumble in the source.',
    ['The model did not glide without lift data in the physics practical.', 'Swans glide across the lake in the poem, which is the literature sense.'],
    'glide across / over / through; a glider; gliding. Close: slide / soar. Trap: collide. Physics, PE, and literature. Smooth low-effort movement, not a crash.',
    ['slide', 'soar', 'coast']
  ),
  gloom: L(
    'Gloom is near darkness, or a feeling of sadness and little hope (usually uncountable): in the gloom; economic gloom. Darkness is physical; despair is stronger misery. Post-war gloom in the source still needs a named shortage. Mix-up: groom; bloom (a backup headword elsewhere). Do not write “a gloom” as a countable party mood.',
    ['Post-war gloom in the source still needs a named shortage, not a mood caption.', 'They waited in the gloom of the underpass, which is the near-darkness sense.'],
    'in the gloom; economic / public gloom; gloomy. Physical twin: darkness. Stronger: despair. Trap: groom. History, news, and literature. Darkness, or a sad hopeless mood — specify.',
    ['darkness', 'despair', 'melancholy']
  ),
  glow: L(
    'A glow is a steady light without flames, or a warm colour in the face; as a verb, to give out that light: a warm glow; glow with. Gleam is briefer; blaze is stronger fire. A glow from the lava featured in the volcano case. Mix-up: grow (already in the dictionary); gloss. Do not write glow for a camera flash that lasts a fraction of a second.',
    ['A glow from the lava featured in the volcano case, not a skincare advert.', 'Cheeks glowed after the PE circuit, which is the warm-face sense.'],
    'a warm / dull glow; glow with; glowing. Briefer: gleam. Stronger: blaze. Trap: grow / gloss. Geography, science, and literature. Steady light without flames, or a warm colour.',
    ['radiance', 'gleam', 'shine']
  ),
  gorgeous: L(
    'Gorgeous means extremely beautiful or attractive, and (informal) very pleasant: a gorgeous view; gorgeous weather. Beautiful is the everyday twin; stunning is close. Calling the set gorgeous is not analysis; name the lighting choice. Mix-up: generous; gorge (a valley, already related). Do not use gorgeous as the whole evaluation in an art or design write-up.',
    ['Calling the set gorgeous is not analysis; name the lighting choice, the drama paper said.', 'Gorgeous weather still needs a temperature in the fieldwork log, which is the informal-pleasant sense.'],
    'gorgeous + noun; look gorgeous. Everyday: beautiful. Close: stunning. Trap: generous / gorge. Art, media, and orals. Extremely beautiful — still name a feature.',
    ['stunning', 'magnificent', 'beautiful']
  ),
  gospel: L(
    'Gospel is one of the biblical accounts of Jesus, or that teaching; also a style of Christian music: the Gospel of Mark; gospel music. Doctrine is broader teaching; the gospel truth means the complete truth (informal). Quote the gospel in the RS extract, then name the chapter. Mix-up: gossip (already related); gospel as a brand. Do not write gospel for a rumour with no text in the source.',
    ['Quote the gospel in the RS extract, then name the chapter, not a choir slogan.', 'Gospel music featured in the culture case, which is the music-style sense.'],
    'the Gospel of; gospel music; the gospel truth. Broader: doctrine / teaching. Trap: gossip. RS, music, and news. Biblical account, Christian teaching, or that music — specify.',
    ['doctrine', 'teaching']
  ),
  gram: L(
    'A gram is a metric unit of mass (symbol g; 1 000 g = 1 kg): mass in grams; a 5 g sample. Gramme is an older British spelling of the same unit. Record mass in grams on the balance, then convert if the paper asks for kilograms. Mix-up: graham; grammar (already in the dictionary). Do not write gram for a volume in millilitres.',
    ['Record mass in grams on the balance, then convert if the paper asks for kilograms.', 'A 5 g sample featured in the titration, which is the mass-unit sense.'],
    'mass in grams; a + number + g sample; 1 000 g = 1 kg. Older spelling: gramme. Trap: grammar. Science and food tables. A metric unit of mass, not a volume.',
    ['gramme', 'g']
  ),
  gratefully: L(
    'Gratefully means in a way that shows you are pleased and want to thank someone: accept gratefully; gratefully received. Grateful is the adjective; thankfully often comments on a lucky escape, not thanks to a person — classic trap. She accepted the grant gratefully; still name the awarding body. Mix-up: gratefully vs greatly; graceful. Do not write gratefully when nobody is being thanked.',
    ['She accepted the grant gratefully, the letter said; still name the awarding body.', 'Donations gratefully received featured on the notice, which is the thanks sense.'],
    'accept / receive gratefully; gratefully received. Adjective: grateful. Trap: thankfully / greatly / graceful. Letters, news, and orals. In a thankful way, not “luckily”.',
    ['thankfully', 'appreciatively']
  ),
  grieve: L(
    'To grieve is to feel great sadness, especially after a death: grieve for / over; a grieving family. Mourn is a close twin, often more public or ritual; sadness is milder. Families grieve in the disaster inquiry; do not invent a private quote. Mix-up: grievance (a complaint, already related); grease. Do not write grieve for mild disappointment about a mark.',
    ['Families grieve in the disaster inquiry; do not invent a private quote.', 'The village grieved over the pit disaster, which is the public-mourning sense.'],
    'grieve for / over; a grieving family. Close: mourn. Noun: grief. Trap: grievance. News, literature, and RS. Deep sadness after loss, not a sulk about homework.',
    ['mourn', 'lament']
  ),
  grin: L(
    'A grin is a wide smile; as a verb, to smile that way: a nervous grin; grin at. Smile is the everyday twin; beam is stronger warmth. A nervous grin in the photograph is not proof of guilt. Mix-up: grim (already related); grain. Do not treat a grin in a still photo as a full motive in a write-up.',
    ['A nervous grin in the photograph is not proof of guilt, the jury source said.', 'He grinned at the result, which is the wide-smile verb sense.'],
    'a nervous / wide grin; grin at / with. Everyday: smile. Stronger: beam. Trap: grim / grain. Literature, media, and news. A wide smile, not a verdict.',
    ['smile', 'beam']
  ),
  groan: L(
    'To groan is to make a deep sound of pain, despair, or disapproval; as a noun, that sound: groan with pain; a groan from the crowd. Moan is a close twin; sigh is lighter. A groan from the gallery featured in the hearing transcript. Mix-up: grown (past of grow); groan vs grown homophone. Do not write groan for a cheerful cheer in the source.',
    ['A groan from the gallery featured in the hearing transcript, not a comic-strip sound.', 'The class groaned at the extra paper, which is the disapproval sense.'],
    'groan with / at; a groan of. Close: moan. Lighter: sigh. Trap: grown. Literature, news, and orals. A deep sound of pain or disapproval, not applause.',
    ['moan', 'sigh']
  ),
  handicap: L(
    'A handicap is a disadvantage that makes success harder, or a sporting scoring system: a handicap to trade; a golf handicap. Obstacle and impediment are close twins. In modern UK English, do not use handicap for a disabled person — say disability. Treat a language handicap in the study as a disadvantage, not a medical label. Mix-up: handy; cap. Do not copy outdated “the handicapped” from an old source without comment.',
    ['Treat a language handicap in the study as a disadvantage, not a medical label.', 'A golf handicap featured in the sports source, which is the scoring-term sense.'],
    'a handicap to; golf handicap; handicapped (avoid for people). Close: disadvantage / obstacle. Trap: disability wording. Sport, economics, and PSHE. A disadvantage or a scoring term, not a label for a person.',
    ['disadvantage', 'obstacle', 'impediment']
  ),
  handshake: L(
    'A handshake is taking someone’s right hand and shaking it as a greeting or agreement: a firm handshake; handshake agreement. Greeting is broader; a contract is written. A handshake sealed nothing until the contract was signed. Mix-up: handsome; hands-on. Do not write handshake for a written treaty with no hands in the source.',
    ['A handshake sealed nothing until the contract was signed, the business source said.', 'A firm handshake featured in the etiquette extract, which is the greeting sense.'],
    'a firm / brief handshake; a handshake agreement. Broader: greeting. Stronger proof: contract. Trap: handsome. Business, citizenship, and orals. Greeting or informal agreement by shaking hands, not a statute.',
    ['greeting', 'clasp']
  ),
  hardy: L(
    'Hardy means able to survive cold, disease, or difficult conditions: hardy perennials; a hardy breed. Tough and robust are close twins; hard is not the same word. Hardy perennials featured in the allotment case. Mix-up: hardy vs hard; hearty (warm and cheerful). Do not write hardy for a fragile greenhouse plant in the source.',
    ['Hardy perennials featured in the allotment case, not a brand of boots.', 'A hardy breed featured in the upland farm study, which is the animal sense.'],
    'hardy perennials / annuals; a hardy breed / plant. Close: tough / robust. Trap: hard / hearty. Biology, geography, and D&T. Tough enough to survive hard conditions, not merely “difficult”.',
    ['resilient', 'robust', 'tough']
  ),
  hassle: L(
    'A hassle is trouble, annoyance, or extra effort; as a verb, to bother someone repeatedly: parking hassle; hassle someone for. Nuisance and inconvenience are close twins. Parking was a hassle; still quote the waiting time. Mix-up: hustle; castle. Do not write hassle for a named crime or injury — those need legal or medical wording.',
    ['Parking was a hassle, the survey said; still quote the waiting time.', 'Do not hassle witnesses for a quote, the reporting code said, which is the verb sense.'],
    'a hassle; hassle-free; hassle + someone + for. Close: nuisance / inconvenience. Trap: hustle. Surveys, news, and citizenship. An annoyance or extra bother, not a felony.',
    ['bother', 'nuisance', 'inconvenience']
  ),
  hatch: L(
    'To hatch is to come out of an egg, or to plan in secret (hatch a plan); as a noun, a small door or opening: eggs hatch; a hatch in the deck. Incubate is the warming process; a trapdoor is a close twin for the opening. Chicks hatch in the incubation practical. Mix-up: hitch; hutch. Do not write hatch for a mammal being born.',
    ['Chicks hatch in the incubation practical; a hatch in the bulkhead is the door sense.', 'They hatched a plan in the minutes, which is the secret-plot sense.'],
    'eggs / chicks hatch; hatch a plan; a hatch in / to. Close (door): opening / trapdoor. Trap: hitch / hutch. Biology, DT, and news. Come out of an egg, a small door, or plot in secret — specify.',
    ['emerge', 'incubate']
  ),
  heap: L(
    'A heap is an untidy pile; as a verb, to put things in a pile; a heap of (informal) means a lot of: a heap of rubble; heap praise on. Pile and mound are close twins; stack is tidier. A heap of rubble featured in the earthquake case. Mix-up: cheap; hip. Do not write heap for a carefully labelled store of samples.',
    ['A heap of rubble featured in the earthquake case, not a laundry caption.', 'The press heaped praise on the scheme, which is the “a lot of” verb sense — still name a figure.'],
    'a heap of; heap + noun + on; heaps of (informal). Close: pile / mound. Tidier: stack. Trap: cheap. Geography, news, and literature. An untidy pile, or a large amount — specify.',
    ['pile', 'mound', 'stack']
  ),
  heartfelt: L(
    'Heartfelt means sincere and strongly felt: a heartfelt apology; heartfelt thanks. Sincere and earnest are close twins; hearty is warmer and more cheerful, not the same. A heartfelt apology still needs the named error in the letter. Mix-up: hearty / heartless. Do not call a copied template letter heartfelt without evidence in the source.',
    ['A heartfelt apology still needs the named error in the letter.', 'Heartfelt thanks featured in the dedication, which is the sincere-thanks sense.'],
    'a heartfelt apology / thanks / tribute. Close: sincere / earnest. Trap: hearty / heartless. Letters, news, and literature. Sincere and strongly felt, not a slogan.',
    ['sincere', 'earnest', 'genuine']
  ),
  hesitant: L(
    'Hesitant means slow to speak or act because you are uncertain or unwilling: hesitant to sign; a hesitant start. Reluctant is a close twin (already in the dictionary); uncertain is broader. She was hesitant to sign; still record the abstention. Mix-up: heritage; hesitate (the verb). Do not write hesitant for a firm, timed refusal in the minutes.',
    ['She was hesitant to sign, the minutes said; still record the abstention.', 'A hesitant start featured in the race report, which is the slow-to-begin sense.'],
    'hesitant to + verb; a hesitant start / voice. Verb: hesitate. Close: reluctant / uncertain. Trap: heritage. News, orals, and citizenship. Uncertain and slow to act, not a final no.',
    ['uncertain', 'wavering', 'reluctant']
  ),
  hijack: L(
    'To hijack is to take control of a vehicle or aircraft illegally, often by force; also to take over a debate or event: hijack a plane; hijack the agenda. Seize and commandeer are close twins. Date the hijack in the news source; do not dramatise a film plot. Mix-up: highjack (non-standard spelling); hike. Do not write hijack for borrowing a bike with permission.',
    ['Date the hijack in the news source; do not dramatise a film plot.', 'Activists hijacked the Q&A, the minutes said, which is the take-over-an-event sense.'],
    'hijack a plane / lorry / debate; a hijack; hijacking. Close: seize / commandeer. Trap: highjack. News, citizenship, and media. Seize a vehicle illegally, or take over an event — specify.',
    ['seize', 'commandeer']
  ),
  hive: L(
    'A hive is a structure in which bees live; a hive of activity is a very busy place: a beehive; hive off (separate part of a firm). Colony and apiary are related; nest is broader. Count the hives in the pollination case if the n is given. Mix-up: have; dive. Do not write hive for a wasp nest unless the source says bees.',
    ['Count the hives in the pollination case if the n is given, not a “busy office” slogan.', 'The newsroom was a hive of activity, which is the figurative-busy sense.'],
    'a hive; a beehive; a hive of activity; hive off. Related: colony / apiary. Trap: have. Biology, geography, and news. A bee home, or a very busy place — specify.',
    ['colony', 'apiary']
  ),
  hollow: L(
    'Hollow means empty inside, or sounding empty; also a claim or victory without real worth; as a noun, a small valley: a hollow tree; a hollow victory. Empty is the everyday twin; void is more formal. A hollow tree featured in the habitat survey. Mix-up: hallo / hello; hallow (to make holy). Do not write hollow for a solid metal cylinder in the practical.',
    ['A hollow tree featured in the habitat survey; a hollow claim still needs a figure.', 'A hollow in the hillside featured on the OS map, which is the small-valley sense.'],
    'a hollow tree / sound / victory / claim; a hollow (noun). Everyday: empty. Trap: hello / hallow. Biology, geography, and evaluations. Empty inside, without real worth, or a small valley — specify.',
    ['empty', 'void', 'sunken']
  ),
  holy: L(
    'Holy means connected with God or religion and treated with respect: a holy site; Holy Communion. Sacred is a close twin; wholly (completely) is a homophone trap. A holy site in the RS paper still needs a named place. Mix-up: wholly / holey (full of holes). Do not write holy for a listed building with no religious role in the source.',
    ['A holy site in the RS paper still needs a named place, not a souvenir slogan.', 'Holy Communion featured in the liturgy extract, which is the worship sense.'],
    'a holy site / book / day; Holy Communion / Week. Close: sacred. Trap: wholly / holey. RS, history, and geography. Sacred and religious, not “very special” as a slogan.',
    ['sacred', 'divine', 'blessed']
  ),
  homeland: L(
    'A homeland is the country where a person was born and has a strong sense of belonging: return to the homeland; a homeland. Native country is a close twin; motherland and fatherland are more loaded, often political. Return to the homeland featured in the memoir; still name the country. Mix-up: hometown (a town, already related); homeless. Do not write homeland for a holiday let with no belonging in the source.',
    ['Return to the homeland featured in the memoir; still name the country in the source.', 'Homeland security featured in the US extract, which is the policy-compound sense — still name the agency.'],
    'return to the homeland; a homeland; homeland security (US compound). Close: native country. Trap: hometown / homeless. History, citizenship, and literature. The country you come from, not a hotel.',
    ['native country', 'motherland', 'fatherland']
  ),
  honestly: L(
    'Honestly means in a truthful way, and is also used to emphasise that you mean what you say: answer honestly; honestly, I checked. Honest is the adjective (already in the dictionary); truthfully is a close twin. Answer honestly in the interview; log consent. Mix-up: honestly vs honestly as filler with no truth-check; honourably. Do not use honestly to paper over a missing figure.',
    ['Answer honestly in the interview; log consent, the ethics brief said.', 'Honestly, the n is twelve, the methods tutor said, which is the emphasis sense — still show the working.'],
    'answer / admit honestly; honestly + clause. Adjective: honest. Close: truthfully / frankly. Trap: using it as empty filler. Ethics, orals, and methods. Truthfully, or to stress sincerity — still give evidence.',
    ['truthfully', 'frankly', 'candidly']
  ),
  horrific: L(
    'Horrific means extremely bad, shocking, or frightening: horrific injuries; a horrific crash. Appalling and dreadful are close twins; horrible is milder and more everyday. Horrific injuries featured in the inquiry; quote the medical source, not a headline. Mix-up: horrific vs horrific as a casual insult; honorific. Do not write horrific for a missed bus with no harm in the source.',
    ['Horrific injuries featured in the inquiry; quote the medical source, not a headline.', 'A horrific crash still needs the casualty figure, which is the news-report sense.'],
    'horrific injuries / crash / scene. Close: appalling / dreadful. Milder: horrible. Trap: honorific. News, history, and H&S. Extremely shocking, not everyday annoyance.',
    ['appalling', 'dreadful', 'gruesome']
  ),
  hospitable: L(
    'Hospitable means welcoming and generous to guests or strangers; also (of a climate or place) suitable to live in: a hospitable host; a hospitable climate. Welcoming is the everyday twin; hospital is a false friend. A hospitable welcome in the travel writing still needs a named host and place. Mix-up: hospital / hospitality (the industry). Do not write hospitable for a locked gate and a “keep out” sign.',
    ['A hospitable welcome in the travel writing still needs a named host and place.', 'A less hospitable climate featured in the biome study, which is the “hard to live in” sense.'],
    'a hospitable host / welcome / climate. Everyday: welcoming. Noun: hospitality. Trap: hospital. Geography, RS, and travel writing. Welcoming to guests, or suitable to live in — specify.',
    ['welcoming', 'sociable', 'generous']
  ),
  huddle: L(
    'To huddle is to crowd close together, often for warmth or safety; as a noun, a small close group: huddle together; a huddle of tents. Cluster and crowd are close twins; nestle is gentler. Protesters huddled from the rain; still quote the police crowd figure. Mix-up: huddle vs hurdle (next but one); cuddle. Do not write huddle for a spread-out queue with gaps in the photo.',
    ['Protesters huddled from the rain, the reporter noted; still quote the police crowd figure.', 'A huddle of tents featured on the OS extract, which is the noun sense.'],
    'huddle together / round; huddle from the rain; a huddle of. Close: cluster / crowd. Trap: hurdle / cuddle. News, geography, and literature. Crowd close together, or that small group.',
    ['cluster', 'crowd', 'nestle']
  ),
  humiliate: L(
    'To humiliate is to make someone feel ashamed or foolish, especially in front of others: humiliate a witness; a humiliating defeat. Embarrass is milder; shame and degrade are close twins. Do not humiliate a witness in the role-play; the paper still wants the statute named. Mix-up: humidity; humanity. Do not write humiliate for a private, kind correction with no audience.',
    ['Do not humiliate a witness in the role-play; the citizenship paper still wants the statute named.', 'A humiliating defeat still needs the score, which is the public-shame sense.'],
    'humiliate + person; a humiliating + noun; humiliation. Milder: embarrass. Close: shame / degrade. Trap: humidity. Citizenship, news, and literature. Public shame, not a quiet word.',
    ['embarrass', 'shame', 'degrade']
  ),
  hunch: L(
    'A hunch is a feeling that something is true, with little evidence; as a verb, to lean forward with the shoulders raised: a hunch that; hunch over the desk. Instinct and intuition are close twins; a hypothesis still needs a test. A hunch is not a sampling frame; still run the test. Mix-up: hunch vs haunch; lunch. Do not write hunch as the whole conclusion in a methods write-up.',
    ['A hunch is not a sampling frame; still run the test, the methods brief said.', 'He hunched over the micrograph, which is the stoop-forward sense.'],
    'a hunch that / about; on a hunch; hunch over. Close: instinct / intuition. Stronger: hypothesis. Trap: lunch / haunch. Methods, news, and literature. An instinct with little evidence, or to stoop — specify.',
    ['instinct', 'intuition', 'feeling']
  ),
  hurdle: L(
    'A hurdle is a frame to jump in athletics, or a difficulty you must deal with; as a verb, to jump that frame: the 110 m hurdles; the main hurdle. Obstacle and barrier are close twins; huddle is a different word. Cost is the main hurdle in the housing brief. Mix-up: huddle (previous); hurdle vs hurtle (to move very fast). Do not write hurdle for a help that made the task easier.',
    ['Cost is the main hurdle in the housing brief, not a sports-day caption unless the PE paper says so.', 'She hurdled the last barrier, which is the athletics-verb sense.'],
    'the main hurdle; 110 m hurdles; hurdle + obstacle. Close: obstacle / barrier. Trap: huddle / hurtle. Citizenship, business, and PE. An athletics frame, or an obstacle to progress — specify.',
    ['obstacle', 'barrier', 'difficulty']
  ),
  hydrogen: L(
    'Hydrogen is a colourless gas, the lightest chemical element (symbol H), that combines with oxygen to make water: hydrogen gas; a hydrogen fuel cell. H₂ is the molecule; the squeaky-pop test is the school practical. Write the hydrogen test in the practical, not a fuel-cell advert. Mix-up: nitrogen / oxygen (already related); hydrate. Do not write hydrogen for a hydrocarbon fuel unless the source names H₂.',
    ['Write the hydrogen test in the practical (the squeaky pop), not a fuel-cell advert.', 'A hydrogen fuel cell featured in the energy case, which is the technology sense — still name the efficiency if given.'],
    'hydrogen gas; H / H₂; hydrogen fuel cell; the squeaky-pop test. Trap: nitrogen / hydrocarbon. Chemistry and geography. The lightest element, a colourless gas — not a slogan.',
    ['H', 'H₂']
  ),
  hype: L(
    'Hype is exaggerated publicity that makes something seem more important than the evidence shows (usually uncountable): media hype; hyped up. Publicity and buzz are close twins; evidence still needs a figure. Media hype still needs a named circulation figure. Mix-up: hype vs hyper-; type. Do not write hype for a peer-reviewed result with a named n.',
    ['Media hype still needs a named circulation figure, the media paper said.', 'The launch was hyped up, the review said, which is the verb sense — still quote sales.'],
    'media hype; hype around / about; hyped (up). Close: publicity / buzz. Trap: hyper- / type. Media, business, and evaluations. Exaggerated publicity, not proof.',
    ['publicity', 'buzz', 'fanfare']
  ),
  keenly: L(
    'Keenly means in an intense, eager, or sharply felt way: feel keenly; keenly aware; watch keenly. Keen is the adjective (already related); intensely and acutely are close twins. Voters felt the cut keenly; still quote the £ amount. Mix-up: keenly vs kindly; kernel. Do not write keenly for a mild, passing interest in the source.',
    ['Voters felt the cut keenly, the source said; still quote the £ amount.', 'She watched the titration keenly, which is the eager-attention sense.'],
    'feel / sense keenly; keenly aware / contested; watch keenly. Adjective: keen. Close: intensely / acutely. Trap: kindly. News, methods, and literature. Intensely, eagerly, or sharply felt — specify.',
    ['intensely', 'acutely', 'eagerly']
  ),
  keeper: L(
    'A keeper is a person who looks after a place, animals, or a goal: zookeeper; wicket-keeper; goalkeeper. Guardian and custodian are close twins; keeper can also mean something worth keeping (informal). Name the wicket-keeper in the match report, or the zookeeper in the conservation case. Mix-up: keeper vs kipper; keep. Do not write keeper for a one-off volunteer with no role in the source.',
    ['Name the wicket-keeper in the match report, or the zookeeper in the conservation case — specify.', 'The lighthouse keeper featured in the local-history source, which is the place-guardian sense.'],
    'zoo / wicket / goal keeper; a keeper. Close: guardian / custodian. Trap: kipper. Sport, biology, and history. Someone who looks after a place, animals, or a goal — name the job.',
    ['guardian', 'custodian', 'warden']
  ),
  kin: L(
    'Kin means a person’s family and relations (usually uncountable): next of kin; kith and kin. Relatives and family are everyday twins; kinship is the relationship system. Next of kin featured on the consent form. Mix-up: kin vs king; ken. Do not write “a kin” as a countable cousin.',
    ['Next of kin featured on the consent form, not a family-tree hobby site.', 'Kith and kin featured in the memoir, which is the wider-relations sense.'],
    'next of kin; kith and kin; kinship. Everyday: family / relatives. Trap: king. Ethics, law, and literature. Family and relations, not a single named friend unless the form says so.',
    ['relatives', 'family', 'relations']
  ),
  kindergarten: L(
    'A kindergarten is a school or class for very young children, often before formal primary school: kindergarten enrolment; a kindergarten teacher. In UK sources nursery or Reception is often the twin; preschool is close. Enrolment at kindergarten featured in the early-years table. Mix-up: kindergarten vs garden; kindred. Do not write kindergarten for Year 6.',
    ['Enrolment at kindergarten featured in the early-years table; a UK source may say nursery or Reception.', 'A kindergarten teacher featured in the workforce survey, which is the job-title sense.'],
    'kindergarten enrolment / teacher / class. UK twins: nursery / Reception. Close: preschool. Trap: garden. Education and citizenship. A class or school for very young children, not KS2.',
    ['nursery', 'preschool', 'reception']
  ),
  accent: L(
    'An accent is a way of pronouncing a language that shows region or first language; also stress on a syllable, or a written mark: a regional accent; word accent; an acute accent. Pronunciation is broader; dialect includes vocabulary as well as sounds. Comment on the accent in the transcript, not a mock. Mix-up: ascent / assent; accent vs dialect. Do not parody an accent in a write-up.',
    ['Comment on the accent in the transcript, not a mock; word accent is the stress sense in the language paper.', 'An acute accent featured in the French extract, which is the written-mark sense.'],
    'a regional / strong accent; word accent; an acute / grave accent. Broader: pronunciation. Wider system: dialect. Trap: ascent / assent. Language, orals, and media. A way of speaking, syllable stress, or a written mark — specify.',
    ['pronunciation', 'intonation', 'brogue']
  ),
  accidentally: L(
    'Accidentally means by chance, without intending to: accidentally deleted; accidentally injured. Accidental is the adjective; inadvertently and unintentionally are close twins. The sample was accidentally heated; log the anomaly. Mix-up: accidentally vs accidentally as an excuse with no log; accidently (misspelling). Do not write accidentally for a planned independent variable.',
    ['The sample was accidentally heated; log the anomaly, the practical said.', 'Files were accidentally deleted, the inquiry said, which is the ICT sense — still name the backup.'],
    'accidentally + past participle; accidentally injured / deleted. Adjective: accidental. Close: inadvertently / unintentionally. Trap: accidently. Methods, H&S, and news. Without intending to, not a planned step.',
    ['inadvertently', 'unintentionally', 'by chance']
  ),
  actively: L(
    'Actively means in a way that involves effort, action, or participation, not passivity: listen actively; actively involved; actively discourage. Active is the adjective (already related); energetically is a close twin for effort. Pupils should listen actively; still name the oracy criterion. Mix-up: actually (already related); actively vs passively. Do not write actively for sitting in silence with no task in the source.',
    ['Pupils should listen actively, the handbook said; still name the oracy criterion.', 'The council actively discouraged fly-tipping, which is the “take steps against” sense.'],
    'listen / take part actively; actively involved / engaged; actively encourage / discourage. Adjective: active. Opposite: passively. Trap: actually. Education, citizenship, and news. With effort and participation, not sitting it out.',
    ['energetically', 'vigorously', 'purposefully']
  ),
  admiration: L(
    'Admiration is a feeling of respect and approval (usually uncountable): admiration for; in admiration. Respect and esteem are close twins; admire is the verb. Admiration for the inventor still needs the patent year. Mix-up: admiration vs admission; administration. Do not write “an admiration” as a countable medal.',
    ['Admiration for the inventor still needs the patent year, the history paper said.', 'They watched in admiration, which is the “while respecting” sense — still name the skill.'],
    'admiration for / of; in admiration; a grudging admiration. Verb: admire. Close: respect / esteem. Trap: admission. History, literature, and news. Respect and approval, not a slogan on a poster.',
    ['respect', 'esteem', 'regard']
  ),
  adventurous: L(
    'Adventurous means willing to take risks or try new things, or involving excitement and possible danger: an adventurous method; adventurous travellers. Daring and bold are close twins; adventure is the noun. An adventurous sampling method still needs ethics approval. Mix-up: adventurous vs advantageous; advent. Do not write adventurous for a copied textbook method with no risk.',
    ['An adventurous sampling method still needs ethics approval, the tutor said.', 'Adventurous travellers featured in the diary source, which is the risk-taking-person sense.'],
    'an adventurous + noun; adventurous travellers. Noun: adventure. Close: daring / bold. Trap: advantageous. Methods, geography, and literature. Willing to take risks, or involving excitement — still name the risk.',
    ['daring', 'bold', 'intrepid']
  ),
  aisle: L(
    'An aisle is a passage between rows of seats, shelves, or pews: a supermarket aisle; the aisle in a church; walk down the aisle (get married). Passage and corridor are close twins; island is a homophone trap in some accents, not in careful spelling. Map the supermarket aisle in the observation study. Mix-up: isle / island; I’ll. Do not write aisle for a main road.',
    ['Map the supermarket aisle in the observation study, not a wedding caption unless the source is a ceremony.', 'Walk down the aisle featured in the social-history extract, which is the marriage sense.'],
    'a supermarket / church aisle; down the aisle. Close: passage / corridor / gangway. Trap: isle / island. Geography, RE, and media. A passage between rows, not an island.',
    ['passage', 'corridor', 'gangway']
  ),
  alien: L(
    'Alien as an adjective means very different from what you know; as a noun, a being from another world, or a foreigner in legal English: an alien idea; an alien species; illegal alien (US legal phrasing — handle with care). Foreign and unfamiliar are close twins; extraterrestrial is the space sense. An alien species in the ecology case is non-native. Mix-up: alien vs align; alienate (to make unfriendly). Do not write UFO unless the source says so.',
    ['An alien species in the ecology case is non-native; do not write UFO unless the source says so.', 'The custom felt alien to the narrator, which is the “unfamiliar” sense.'],
    'an alien idea / species / landscape; an alien (noun). Close: foreign / unfamiliar. Space: extraterrestrial. Trap: align / alienate. Biology, literature, and law. Unfamiliar, non-native, or a being from another world — specify.',
    ['foreign', 'unfamiliar', 'extraterrestrial']
  ),
  amongst: L(
    'Amongst means in the middle of, or included in, a group: amongst the sources; amongst friends. Among is the more common UK twin in exam prose; amid and amidst are close. Amongst the sources, name the date. Mix-up: amongst vs amongst as old-fashioned filler; amount. Do not write amongst a single named person with no group.',
    ['Amongst the sources, name the date; among is the more common twin in exam prose.', 'She sat amongst the delegates, which is the in-the-middle-of-a-group sense.'],
    'amongst + plural / uncountable group; amongst friends. Common twin: among. Close: amid / amidst. Trap: amount. Essays, history, and literature. Among — a British variant, still needs a group.',
    ['among', 'amid', 'amidst']
  ),
  amuse: L(
    'To amuse is to make someone laugh or smile, or to keep them interested: amuse an audience; amuse yourself. Entertain and divert are close twins; amazing is a different word. The cartoon may amuse, but it is still a caricature to analyse. Mix-up: amaze / amazing; muse. Do not write amuse for a formal inquiry with no humour in the source.',
    ['The cartoon may amuse, but it is still a caricature to analyse, the media paper said.', 'Pupils amused themselves in the wet-break log, which is the occupy-yourself sense.'],
    'amuse + person; amuse yourself; amusing. Close: entertain / divert. Noun: amusement. Trap: amaze. Media, literature, and orals. Make someone laugh or stay interested, not “wow” them.',
    ['entertain', 'divert', 'delight']
  ),
  animation: L(
    'Animation is the technique of making drawings or models appear to move; also liveliness: stop-frame animation; full of animation. Cartoon is a close twin for the film sense; liveliness is the mood sense. Date the animation in the media source. Mix-up: animal; animosity. Do not write animation for a still photograph with no movement technique.',
    ['Date the animation in the media source, not a streaming slogan.', 'She spoke with animation, which is the liveliness sense — still quote a line.'],
    'stop-frame / computer animation; an animation; full of animation. Close (film): cartoon. Mood: liveliness. Trap: animal. Media, art, and literature. Moving drawings or models, or liveliness — specify.',
    ['cartoon', 'liveliness']
  ),
  appetite: L(
    'An appetite is a desire for food, or a strong wish for something: lose your appetite; an appetite for reform. Hunger is the food twin; craving is stronger and more specific (already related). An appetite for reform still needs a named bill. Mix-up: appetite vs apprentice; petite. Do not write appetite for a legal duty with no desire in the source.',
    ['An appetite for reform still needs a named bill, the politics extract said.', 'Patients lost their appetite in the case notes, which is the food-desire sense.'],
    'lose / spoil your appetite; an appetite for + noun. Food twin: hunger. Stronger: craving. Trap: apprentice. Health, politics, and news. Desire for food, or a strong wish — specify.',
    ['hunger', 'craving', 'desire']
  ),
  applaud: L(
    'To applaud is to clap in approval, or to praise an action or idea: applaud the motion; applaud a decision. Clap is the everyday twin; praise is the non-clapping sense. Delegates applauded the motion; still record the vote. Mix-up: applaud vs apples; explode. Do not treat applause as a majority unless the division is in the source.',
    ['Delegates applauded the motion; still record the vote, the minutes said.', 'Critics applauded the reform, which is the praise-without-clapping sense.'],
    'applaud + person / decision / motion; applauded. Everyday: clap. Noun: applause. Trap: treating clapping as a count of votes. Citizenship, media, and news. Clap in approval, or praise an action — specify.',
    ['clap', 'cheer', 'praise']
  ),
  applause: L(
    'Applause is clapping as a sign of approval (usually uncountable): a round of applause; loud applause. Clapping and ovation are close twins; an ovation is stronger and longer. Applause in the chamber is not a majority; quote the division. Mix-up: applause vs apples; pause. Do not write “an applause” as a countable vote.',
    ['Applause in the chamber is not a majority; quote the division, the source said.', 'A round of applause featured in the assembly log, which is the school sense.'],
    'a round of applause; loud / polite applause. Verb: applaud. Close: clapping / ovation. Trap: countable “an applause”. Citizenship, media, and drama. Clapping as approval, not a counted vote.',
    ['clapping', 'ovation', 'cheers']
  ),
  appropriately: L(
    'Appropriately means in a way that is suitable or right for the situation: dress appropriately; appropriately named. Appropriate is the adjective (already in the dictionary); suitably and properly are close twins. Dress appropriately for the site visit; PPE still has a named standard. Mix-up: appropriately vs apparently; appropriated (taken). Do not write appropriately for a banned item in the handbook.',
    ['Dress appropriately for the site visit, the H&S brief said; PPE still has a named standard.', 'The sample was appropriately labelled, which is the “right for the task” sense.'],
    'dress / behave / respond appropriately; appropriately named / labelled. Adjective: appropriate. Close: suitably / properly. Trap: apparently / appropriated. H&S, orals, and methods. In a suitable way, not a guess.',
    ['suitably', 'properly', 'fittingly']
  ),
  arithmetic: L(
    'Arithmetic is the branch of maths that deals with numbers and the four operations (usually uncountable): mental arithmetic; the arithmetic of the budget. Maths is broader; calculation is a close twin. Show the arithmetic in the working, not a calculator screenshot alone. Mix-up: arithmetic vs arthritic; logarithm. Do not write arithmetic for a geometry proof with no number work.',
    ['Show the arithmetic in the working, not a calculator screenshot alone.', 'The arithmetic of the budget still needs the £ totals, which is the number-work sense.'],
    'mental arithmetic; the arithmetic of; arithmetical. Broader: maths. Close: calculation / sums. Trap: arthritic. Maths, science, and accounts. Number work: add, subtract, multiply, divide — show it.',
    ['calculation', 'maths', 'sums']
  ),
  arouse: L(
    'To arouse is to cause a feeling or reaction, or to wake someone from sleep: arouse concern; arouse suspicion; arouse from sleep. Provoke and stir are close twins; arise (to happen) is a different verb — classic trap. The footage aroused concern; still name the regulator. Mix-up: arise / rose; a rouse. Do not write arouse for a feeling that was already listed with no cause in the source.',
    ['The footage aroused concern, the inquiry said; still name the regulator.', 'Noises aroused the camp, which is the wake-from-sleep sense.'],
    'arouse concern / suspicion / interest / anger; arouse from sleep. Close: provoke / stir / awaken. Trap: arise. News, history, and literature. Cause a feeling, or wake someone — specify.',
    ['provoke', 'stir', 'awaken']
  ),
  artistic: L(
    'Artistic means connected with art, or showing skill and imagination in an art form: artistic merit; an artistic director. Creative and imaginative are close twins; artiste is an old word for a performer. Artistic merit in the review still needs a named technique. Mix-up: artistic vs autistic (do not confuse); article. Do not write artistic for a copied worksheet with no invention in the source.',
    ['Artistic merit in the review still needs a named technique, the art paper said.', 'An artistic director featured in the theatre source, which is the job-title sense.'],
    'artistic merit / skill / director; artistically. Close: creative / aesthetic / imaginative. Trap: article / artiste. Art, drama, and media. Of art, or showing skill and imagination — name the technique.',
    ['creative', 'aesthetic', 'imaginative']
  ),
  astonish: L(
    'To astonish is to surprise someone very much: astonish the team; an astonishing result. Amaze and astound are close twins; astonish is slightly more formal than amaze. The result astonished the team; still quote the p-value. Mix-up: astonish vs establish; stone. Do not write astonish for a result that matched the prediction exactly.',
    ['The result astonished the team; still quote the p-value, the write-up said.', 'An astonishing turnout still needs the named poll, which is the adjective sense.'],
    'astonish + person; astonishing + noun; astonished at / by. Close: amaze / astound / stagger. Trap: establish. Science, news, and literature. Surprise someone very much — still give the figure.',
    ['amaze', 'astound', 'stagger']
  ),
  astronaut: L(
    'An astronaut is a person trained to travel in a spacecraft: a NASA astronaut; astronaut training. Cosmonaut is the Russian twin; spacefarer is rarer. Name the astronaut in the space source, then the mission year. Mix-up: astronomer (someone who studies space from Earth); astrology. Do not write astronaut for a drone operator on the ground.',
    ['Name the astronaut in the space source, then the mission year.', 'Astronaut training featured in the STEM case, which is the career-path sense.'],
    'an astronaut; astronaut training / crew. Russian twin: cosmonaut. Earth-based twin: astronomer. Trap: astrology. Physics, history, and news. A person trained to travel in space, not a stargazer on Earth.',
    ['cosmonaut', 'spacefarer']
  ),
  astronomy: L(
    'Astronomy is the scientific study of stars, planets, and other objects in space (usually uncountable): an astronomy module; radio astronomy. Astrophysics and cosmology are overlapping sciences; astrology is not science — classic trap. Astronomy in the physics paper is not astrology; plot the orbit from the table. Mix-up: astrology / gastronomy. Do not write astronomy for a horoscope column.',
    ['Astronomy in the physics paper is not astrology; plot the orbit from the table.', 'Radio astronomy featured in the observatory case, which is the instrument sense.'],
    'an astronomy module / evening; radio astronomy. Close: astrophysics / cosmology. Trap: astrology. Physics and geography. The science of stars and planets, not a horoscope.',
    ['astrophysics', 'cosmology']
  ),
  athletics: L(
    'Athletics is sports such as running, jumping, and throwing (usually uncountable; track and field): an athletics meeting; athletics results. Sport is broader; track and field is the close US/technical twin. Athletics results still need the time or distance. Mix-up: athletic (the adjective); maths. Do not write “an athletics” as a countable jog.',
    ['Athletics results still need the time or distance, the PE paper said.', 'An athletics meeting featured in the fixture list, which is the event sense.'],
    'an athletics meeting / track; athletics results. Adjective: athletic. Close: track and field. Broader: sport. Trap: countable “an athletics”. PE and news. Running, jumping, and throwing — quote the mark.',
    ['track and field', 'sport']
  ),
  atlas: L(
    'An atlas is a book of maps, or a collection of maps in one volume: a world atlas; an atlas of anatomy. Map book is the everyday twin; a gazetteer is a place-name index. Find the basin in the atlas, then copy the grid reference. Mix-up: Atlas the Titan (mythology); Atlantic. Do not write atlas for a single worksheet map with no bound collection.',
    ['Find the basin in the atlas, then copy the grid reference, the geography paper said.', 'An atlas of anatomy featured in the biology practical, which is the body-map sense.'],
    'a world / road atlas; an atlas of. Everyday: map book. Related: gazetteer. Trap: Atlantic / the Titan Atlas. Geography and biology. A book of maps, not one loose sheet.',
    ['map book', 'gazetteer']
  ),
  atomic: L(
    'Atomic means relating to atoms, or relating to nuclear weapons or energy: atomic number; atomic bomb; the atomic age. Nuclear is a close twin for weapons and power; molecular is about molecules, not atoms — trap. Atomic number featured in the periodic-table question. Mix-up: atomic vs anatomic; tonic. Do not write atomic for a classroom “huge” without atoms or nuclear policy in the source.',
    ['Atomic number featured in the periodic-table question, not a Cold-War slogan unless the history paper asks.', 'The atomic age featured in the history source, which is the nuclear-weapons sense.'],
    'atomic number / mass / bomb / energy / age. Close (weapons/power): nuclear. Trap: molecular / anatomic. Chemistry, physics, and history. Of atoms, or of nuclear weapons and energy — specify.',
    ['nuclear', 'atom-level']
  ),
  attorney: L(
    'An attorney is a lawyer, especially in US English; in UK sources the Attorney General is a law officer of the Crown: power of attorney; the Attorney General. Solicitor and barrister are the usual UK twins; counsel is a close formal twin. The Attorney General featured in the source. Mix-up: attorney vs a tourney; tour. Do not write attorney for a UK high-street solicitor unless the source uses that word.',
    ['The Attorney General featured in the source; a US attorney is a lawyer — UK twins are solicitor and barrister.', 'A power of attorney featured in the will extract, which is the legal-authority sense.'],
    'the Attorney General; a US attorney; power of attorney. UK twins: solicitor / barrister. Close: lawyer / counsel. Trap: using US attorney for every UK lawyer. Citizenship, law, and news. A lawyer (US), or the Attorney General — specify.',
    ['lawyer', 'solicitor', 'counsel']
  ),
  auditor: L(
    'An auditor is a person who officially examines accounts to check that they are correct: external auditor; auditor’s report. Examiner and inspector are close twins; accountant is broader. The auditor signed the accounts; still name the firm. Mix-up: auditor vs audience; editor. Do not write auditor for a classmate who merely looked at a spreadsheet.',
    ['The auditor signed the accounts; still name the firm, the business paper said.', 'An external auditor featured in the governance extract, which is the independent-check sense.'],
    'an external / internal auditor; auditor’s report; audit. Close: examiner / inspector. Broader: accountant. Trap: audience / editor. Business, citizenship, and accounts. A person who checks accounts officially, not a casual reader.',
    ['examiner', 'inspector', 'accountant']
  ),
  autobiography: L(
    'An autobiography is a book in which a person writes about their own life: a political autobiography; autobiography as a source. Memoir is a close twin, often more selective; a biography is written by someone else. Treat the autobiography as a source, then evaluate bias. Mix-up: autobiography vs autograph; bibliography. Do not treat every first-person blog post as a published autobiography unless the source says so.',
    ['Treat the autobiography as a source, then evaluate bias, the history paper said.', 'A political autobiography still needs a publication year, which is the book sense.'],
    'an autobiography; autobiographical. Close: memoir / life story. Written by another: biography. Trap: autograph / bibliography. History, literature, and media. A person’s own written life story — still evaluate bias.',
    ['memoir', 'life story']
  ),
  axis: L(
    'An axis is a fixed reference line on a graph, or a line about which something rotates; also an alliance: x-axis; axis of rotation; the Axis in 1939–45. Plural axes /ˈæksiːz/. Label the axis with units. Mix-up: axis vs access / axe; Axis as a brand. Do not write axis for a single plotted point.',
    ['Label the axis with units, the graph question said; a political axis still needs named parties.', 'The Axis powers featured in the history source, which is the 1939–45 alliance sense.'],
    'the x- / y-axis; axis of rotation; the Axis powers. Plural: axes. Trap: access / axe. Maths, science, and history. A graph line, a line of rotation, or an alliance — specify.',
    ['pivot', 'line']
  ),
  baffle: L(
    'To baffle is to confuse someone completely so that they cannot understand or explain something: baffle the class; a baffling anomaly. Puzzle, bewilder, and perplex are close twins. The anomaly baffled the class; still record it. Mix-up: baffle as a physical plate in a pipe (a specialised noun); buffalo. Do not write baffle for a sum you simply have not started.',
    ['The anomaly baffled the class; still record it, the methods brief said.', 'A baffling clause in the statute still needs a named section, which is the adjective sense.'],
    'baffle + person; baffling + noun; baffled by. Close: puzzle / bewilder / perplex. Trap: giving up with no log. Methods, news, and literature. Confuse someone completely — still show what you tried.',
    ['puzzle', 'bewilder', 'perplex']
  ),
  banquet: L(
    'A banquet is a large formal meal for many people, often to mark an event: a state banquet; a banquet in honour of. Feast and dinner are close twins; a buffet is less formal. Date the state banquet in the source, not a buffet slogan. Mix-up: banquet vs banquette (a bench); bankrupt. Do not write banquet for a packed lunch in the fieldwork log.',
    ['Date the state banquet in the source, not a buffet slogan.', 'A banquet in honour of the treaty featured in the history extract, which is the formal-meal sense.'],
    'a state banquet; a banquet in honour of; banquet hall. Close: feast / dinner / reception. Less formal: buffet. Trap: banquette / bankrupt. History, RS, and news. A large formal meal, not a snack.',
    ['feast', 'dinner', 'reception']
  ),
  barber: L(
    'A barber is a person whose job is to cut men’s hair and, often, to shave them: a barber’s shop; barber in the photograph. Hairdresser is the broader twin, often for all clients; haircutter is plain. The barber in the photograph is a source, not a brand. Mix-up: barber vs Barbara; harbour. Do not write barber for a surgeon in a modern hospital source (the old “barber-surgeon” is history).',
    ['The barber in the photograph is a source, not a brand; still name the street if given.', 'A barber-surgeon featured in the early-modern extract, which is the history sense.'],
    'a barber; a barber’s (shop); barber-surgeon (history). Broader: hairdresser. Trap: harbour. History, citizenship, and media. A person who cuts men’s hair — treat the photo as a source.',
    ['hairdresser', 'haircutter']
  ),
  bare: L(
    'Bare means not covered by clothes, plants, or decoration; also the smallest possible (the bare minimum); as a verb, to uncover: bare rock; bare feet; the bare facts. Naked and uncovered are close twins; bear (the animal / to carry) is a homophone trap. Bare rock on the OS map is geology. Mix-up: bear / beer; barely. Do not write bare for a fully furnished room in the source.',
    ['Bare rock on the OS map is geology, not a fashion caption.', 'The bare minimum still needs a named threshold, which is the smallest-possible sense.'],
    'bare rock / feet / walls; the bare minimum / facts; bare + noun (verb). Close: uncovered / naked. Trap: bear. Geography, science, and evaluations. Uncovered, or the smallest possible amount — specify.',
    ['uncovered', 'naked', 'empty']
  ),
  barn: L(
    'A barn is a large farm building for storing crops, hay, or housing animals: a barn conversion; a barn owl. Outbuilding and shed are related; a shed is usually smaller. Convert the barn in the rural-change case, then name the planning class. Mix-up: barn vs baron; born. Do not write barn for a high-street flat with no farm use in the source.',
    ['Convert the barn in the rural-change case, then name the planning class.', 'A barn owl featured in the habitat survey, which is the species-name sense.'],
    'a barn; a barn conversion; barn owl. Related: outbuilding / shed. Trap: baron / born. Geography, history, and biology. A large farm storage or animal building, not a slogan on a café.',
    ['outbuilding', 'shed', 'farm building']
  ),
  barrel: L(
    'A barrel is a round wooden or metal container with curved sides; also a unit of oil volume, or the tube of a gun: a barrel of oil; gun barrel. Cask, keg, and drum are close twins for the container. Quote oil in barrels only if the source uses that unit, then convert. Mix-up: barrel vs barren; burial (a backup headword). Do not write barrel for a litre bottle unless the source uses that unit.',
    ['Quote oil in barrels only if the source uses that unit, then convert.', 'A gun barrel featured in the forensics extract, which is the tube sense.'],
    'a barrel of; oil barrel; gun barrel; barrel-chested. Close: cask / keg / drum. Trap: barren. Geography, science, and history. A cask, an oil unit, or a gun tube — specify.',
    ['cask', 'keg', 'drum']
  ),
  battlefield: L(
    'A battlefield is a place where a battle is fought, or an area of conflict: the battlefield of the Somme; a political battlefield. Battleground is a close twin; front and theatre of war are related. Map the battlefield on the OS extract, then name the year. Mix-up: battlefield vs battle field as two words in old sources; battlefield as a game title. Do not write battlefield for a playground quarrel with no source of that weight.',
    ['Map the battlefield on the OS extract, then name the year.', 'A political battlefield featured in the citizenship source, which is the figurative sense — still name the bill.'],
    'the battlefield of; on the battlefield; a political battlefield. Close: battleground / front. Trap: a game title. History, geography, and citizenship. Where a battle is fought, or a field of conflict — specify.',
    ['battleground', 'front', 'theatre of war']
  ),
  biodegradable: L(
    'Biodegradable means able to be broken down by bacteria or other living organisms and so not remain as lasting waste: biodegradable packaging; a biodegradable claim. Compostable is a close twin, often stricter; degradable is weaker and vaguer. A biodegradable claim still needs a standard and a time. Mix-up: biodegradable vs biodegradable as a green slogan with no test; biodiversity (already related). Do not credit the claim without a named standard in the source.',
    ['A biodegradable claim still needs a standard and a time, the chemistry paper said.', 'Biodegradable packaging featured in the waste audit, which is the materials sense.'],
    'biodegradable packaging / plastic / waste; biodegrade (verb). Close: compostable / degradable. Trap: a slogan with no standard. Chemistry, geography, and citizenship. Able to break down naturally — quote the test and the time.',
    ['compostable', 'degradable']
  ),
}
