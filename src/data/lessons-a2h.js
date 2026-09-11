const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2H = {
  fare: L(
    'A fare is the money you pay to travel: a bus fare, the train fare, a cheap fare, pay the fare. Price is more general (the price of a coat). A ticket is the paper or code you show; the fare is what it costs. Taxi fare is what the meter shows. Do not mix with fair (just, or a fun event) — same sound, different spelling.',
    ['The return fare to Manchester is cheaper after nine.', 'Ask at the window how much the fare is.'],
    'a bus/train/taxi fare. Contrast: ticket (what you show), fair (just / a fête).',
    []
  ),
  fear: L(
    'Fear is the feeling that something bad may happen: a fear of flying, in fear, without fear. Afraid and frightened describe how you feel (I am afraid). Fear is usually the noun; the verb fear (I fear we are late) is a little more formal. Scare is often the cause. Do not write fear when you mean fair or fare.',
    ['His only fear was missing the last bus.', 'A lot of learners have a fear of speaking in class.'],
    'a fear of + -ing. Adjectives: afraid / frightened. Formal verb: I fear that…',
    []
  ),
  fever: L(
    'A fever is a high temperature when you are ill: have a fever, a slight fever, feverish. Temperature can mean the same in everyday talk (I’ve got a temperature). Flu is a whole illness; fever is one symptom. Heat from the weather is not a fever. See a doctor if a fever lasts.',
    ['The nurse checked him for a fever.', 'She stayed off school with a fever and a headache.'],
    'have / a slight fever. Everyday cousin: a temperature. Illness: flu (wider).',
    []
  ),
  field: L(
    'A field is open land for farming or sport: a football field, a field of wheat, play in the field. Pitch is common in British English for a sports surface (a football pitch). Field can also mean a subject: the field of science. Do not use field for a small garden — that is a garden or a pitch.',
    ['The school field was too wet for hockey.', 'She wants to work in the field of travel later.'],
    'a football field / in the field. Sport (British): pitch. Subject: a field of study.',
    ['pitch']
  ),
  fill: L(
    'Fill means make something full: fill a bottle, fill the kettle, fill a suitcase. Fill in (British) a form means write the answers; American English often says fill out. Fill up is for a tank or a plate. Full is the adjective (the bag is full). Do not write feel when you mean fill.',
    ['Fill in your name at the top of the form.', 'The waiting room filled with passengers.'],
    'fill a bottle. British: fill in a form (US: fill out). Adjective: full.',
    []
  ),
  final: L(
    'Final means last in a series: the final lesson, a final exam, the final stop. Last is a close everyday cousin. Final as a noun can mean the last match or last exam (the finals). Finally is the adverb. Do not use final for “previous” — that is last in some contexts, but previous is clearer for the one before.',
    ['The final train leaves at midnight.', 'Monday is our final day of term.'],
    'the final exam / stop / lesson. Adverb: finally. Noun: the finals (sport or exams).',
    ['last']
  ),
  finally: L(
    'Finally means after a long wait, or as the last point: we finally arrived; finally, do not forget your passport. At last is a close cousin for relief after waiting. At the end describes position, not the wait. Last is not an adverb here — not “we last found the gate”. Firstly / secondly pair with finally in lists.',
    ['She finally found a half-price ticket.', 'Finally, turn off your phone in the exam room.'],
    'after a wait: finally / at last. In a list: finally = last point. Not “lastly” required at A2, but it exists.',
    ['at last']
  ),
  fire: L(
    'Fire is heat and flames: a kitchen fire, start a fire, the fire is out. A fire alarm and a fire exit are school and hotel safety words. Catch fire means start burning. On fire describes something burning now. Firework is a separate word for the colourful explosion. Do not write fir (a tree) for fire.',
    ['Please keep the fire exit clear.', 'The cooker caught fire, so we called 999.'],
    'on fire / catch fire / a fire exit. Mix-up: firework (celebration), fir (tree).',
    []
  ),
  fitness: L(
    'Fitness is how healthy and strong your body is: improve your fitness, a fitness test, a fitness class. Fit is the adjective (I feel fit). Exercise is the activity; fitness is the result. Health is wider (mind and body, not only sport). Do not say “my fit” for the noun.',
    ['Swimming twice a week helped his fitness.', 'The school offers a fitness class after lessons.'],
    'improve / a fitness class. Adjective: fit. Wider idea: health. Activity: exercise.',
    []
  ),
  flavour: L(
    'Flavour is the taste of food or drink: a chocolate flavour, a strong flavour, lose its flavour. British spelling is flavour; American is flavor. Taste can be the verb (taste this) or a close noun. Smell is for the nose. Do not write flower when you mean flavour.',
    ['They asked for a lemon flavour at the ice-cream shop.', 'This tea has a mild flavour.'],
    'British: flavour. American: flavor. Cousin: taste. Mix-up: flower.',
    ['taste']
  ),
  florist: L(
    'A florist sells flowers: at the florist’s, a florist on the High Street, order from a florist. Flower is the plant; florist is the person or shop. A greengrocer sells fruit and vegetables, not usually bunches of roses. Florist’s with a possessive often means the shop. Do not write forest for florist.',
    ['The florist wrapped the bunch in paper.', 'I rang the florist about flowers for the hospital visit.'],
    'at the florist’s. Person/shop: florist. Contrast: flower (the plant), greengrocer (fruit and veg).',
    []
  ),
  flu: L(
    'Flu (influenza) is an illness with fever, aches, and a heavy-cold feeling: have (the) flu, catch the flu, off school with flu. A cold is usually milder. Virus is the cause, not the everyday name. Spell it flu, not flew (past of fly) or flue (a chimney pipe). Take advice if it gets worse.',
    ['Half the class was away with flu.', 'He caught the flu on the long flight.'],
    'have / catch (the) flu. Milder: a cold. Mix-ups: flew (fly), flue (chimney).',
    []
  ),
  fog: L(
    'Fog is thick cloud near the ground: thick fog, in the fog, fog delays. Mist is thinner and often lighter. Smog is dirty city air. Foggy is the adjective. Forecasts talk of fog patches. Do not use fog for steam in a bathroom (that is steam) or for smoke.',
    ['We waited at the harbour until the fog lifted.', 'Fog made the footpath hard to see.'],
    'thick fog / in the fog. Thinner: mist. Adjective: foggy. Not steam or smoke.',
    []
  ),
  foggy: L(
    'Foggy means full of fog: a foggy morning, foggy weather, it looks foggy. Fog is the noun. Cloudy is about clouds in the sky, not always low fog. Misty is milder. A foggy idea (unclear thought) is informal. Drive slowly is common advice in foggy conditions.',
    ['It was too foggy to see the gate of the field.', 'Foggy roads delayed the school bus.'],
    'a foggy morning / foggy weather. Noun: fog. Cousin: misty. Contrast: cloudy (sky).',
    []
  ),
  folder: L(
    'A folder holds papers, or files on a computer: a cardboard folder, save it in a folder, a homework folder. File can mean one document or a box of papers. Binder is often metal rings. Fold is the verb (fold the letter). Do not write boulder (a rock) for folder.',
    ['Keep your worksheets in the same folder.', 'She created a new folder for geography notes.'],
    'a homework/computer folder. Verb: fold. Cousin: file (one document or a set).',
    []
  ),
  fond: L(
    'Fond of means you like someone or something: fond of tea, fond of her grandparents, grow fond of. Like is the simple verb; fond is warmer and a little softer. Fancy can mean “want” (I fancy a sandwich). Fond is not the past of find (that is found). Do not say “I am fond to” — it is fond of.',
    ['I am still fond of that old guidebook.', 'The teacher was fond of a quiet classroom.'],
    'fond of + noun/-ing. Contrast: like (simpler), found (past of find).',
    []
  ),
  footpath: L(
    'A footpath is a path for walkers, not cars: a public footpath, follow the footpath, a coastal footpath. Pavement (British) is the raised path beside a road; sidewalk is American. A trail or track can be rougher. Path is the general word. Do not walk in the cycle lane if signs say footpath only.',
    ['The footpath to the harbour starts behind the shop.', 'Keep to the footpath — the field is private.'],
    'a public footpath / follow the footpath. Beside a road (British): pavement. US: sidewalk.',
    ['path']
  ),
  forehead: L(
    'The forehead is the face above the eyes: a high forehead, put your hand on your forehead, a cut on the forehead. Forehead is one word. Forward is a direction, not a body part. Temple is the side of the head. A plaster on the forehead is common after a fall.',
    ['She felt her forehead to check for a fever.', 'He wore a helmet that covered his forehead.'],
    'on / a high forehead. Mix-up: forward (direction). Side of the head: temple.',
    []
  ),
  foreigner: L(
    'A foreigner is a person from another country: a foreigner in the city, treat foreigners kindly. Foreign is the adjective (a foreign language). Tourist is someone visiting, who may still be a foreigner. Immigrant is a more specific, often official word. Use the word carefully — visitor or guest can sound kinder in speech.',
    ['The hostel was full of foreigners and local students.', 'A foreigner asked us the way to the gallery.'],
    'a foreigner / foreigners. Adjective: foreign. Visiting: tourist. Official: immigrant.',
    []
  ),
  forgive: L(
    'Forgive means stop being angry with someone: forgive me, forgive someone for being late, hard to forgive. Sorry is what the other person says; forgive is what you do. Excuse me is for small interruptions, not deep hurt. Forgiveness is the noun. Past: forgave; participle: forgiven.',
    ['Please forgive me for missing your call.', 'She forgave her classmate after the argument.'],
    'forgive someone for + -ing. Past: forgave. Noun: forgiveness. Contrast: Excuse me (small interruption).',
    []
  ),
  form: L(
    'A form is a paper with gaps to complete: fill in a form, an application form, a visa form. In British schools, form can also mean a class year (Year 9, or an old-fashioned third form). Shape is the outline of an object. From is a preposition — do not mix the spelling. Fill in is the usual British collocation.',
    ['Please return the form to the school office.', 'There was a long form to fill in at the embassy.'],
    'fill in a form (British). School: a form (class). Mix-up: from. Shape: shape, not form, at A2 for objects.',
    []
  ),
  fortunately: L(
    'Fortunately means luckily: fortunately the shop was open; fortunately nobody was hurt. Unfortunately is the opposite. Fortunate is the adjective (we were fortunate). Lucky is a simpler cousin. Do not use fortunately as an adjective before a noun (not “a fortunately day”).',
    ['Fortunately, the next bus came in five minutes.', 'Fortunately she had packed her heater for the cold hostel.'],
    'fortunately = luckily. Opposite: unfortunately. Adjective: fortunate. Cousin: lucky.',
    ['luckily']
  ),
  forward: L(
    'Forward means towards the front: move forward, step forward, look forward to (be pleased about a future event). Forwards is a British variant with -s in some uses (move forwards). Backward(s) is the opposite. Foreword is a short text at the front of a book — different spelling. Look forward to + -ing is a set phrase.',
    ['The queue moved forward slowly.', 'I look forward to hiking this weekend.'],
    'move/step forward. Phrase: look forward to + -ing. Mix-up: foreword (in a book).',
    []
  ),
  freezer: L(
    'A freezer keeps food frozen: in the freezer, a chest freezer, freezer bag. A fridge (refrigerator) is cold but not usually icy; frozen food lives in the freezer. Freeze is the verb. Ice cream belongs in the freezer, milk usually in the fridge. Do not write freezer for the whole fridge.',
    ['There are frozen peas in the freezer.', 'She labelled the soup and put it in the freezer.'],
    'in the freezer. Colder than a fridge. Verb: freeze. Ice cream: freezer, not fridge.',
    []
  ),
  frightened: L(
    'Frightened describes how you feel: I am frightened, frightened of dogs, look frightened. Frightening describes the thing that causes fear (a frightening film). Afraid is a close synonym. Scared is informal. Frighten is the verb. Use frightened of, not frightened from.',
    ['He felt frightened on the foggy footpath.', 'I am not frightened of flying, but I dislike long queues.'],
    'I am frightened (of). The cause: frightening. Verb: frighten. Cousins: afraid, scared.',
    ['afraid', 'scared']
  ),
  frightening: L(
    'Frightening means it makes you afraid: a frightening noise, a frightening storm, it looks frightening. Frightened is how a person feels. Scary is a more informal cousin. Horrible is “very bad”, not always about fear. Do not say “I am frightening” unless you mean you scare other people.',
    ['The hospital waiting room was quiet and a little frightening at night.', 'A frightening headline made her ring home.'],
    'a frightening film/noise. Person’s feeling: frightened. Informal: scary.',
    ['scary']
  ),
  front: L(
    'The front is the forward part: the front of the queue, at the front of the class, the shop front. Back is the opposite. In front of means before something in space (in front of the gate). Facade is a formal word for a building’s face. Front can also mean a seafront (the road by the sea).',
    ['Please wait at the front of the bus.', 'There was a florist at the front of the shopping street.'],
    'at the front of. Phrase: in front of. Opposite: back. Mix-up: in the front of vs in front of.',
    []
  ),
  frozen: L(
    'Frozen means turned to ice or kept icy: frozen food, a frozen lake, frozen fingers. Freeze is the verb; froze / frozen are past forms. Freezing can describe very cold weather (it’s freezing). A frozen person in stories cannot move from fear or cold. Do not write frozen for fridge-cold milk that is still liquid.',
    ['We bought frozen berries because they were half-price.', 'Her hands were frozen after the hike.'],
    'frozen food / frozen fingers. Verb: freeze. Weather: freezing. Fridge ≠ always frozen.',
    []
  ),
  further: L(
    'Further means more or extra: further information, further education, until further notice. Farther is sometimes used only for physical distance; further is safe for distance and for “more”. Far is the basic word. Furthermore is a formal linking word. Do not write father when you mean further.',
    ['For further details, see the student handbook.', 'The hostel is a bit further down the hill.'],
    'further information / education. Distance cousin: farther (optional). Mix-up: father.',
    []
  ),
  gadget: L(
    'A gadget is a small useful device: a kitchen gadget, a travel gadget, the latest gadget. Device is a wider, slightly more formal cousin. Machine is often larger. Appliance is usually a fridge or washing machine. Tool can be a hammer, not always electronic. Do not call a whole computer “a gadget” in careful speech — phone accessories fit better.',
    ['This little gadget charges your phone on the train.', 'She bought a gadget for slicing vegetables.'],
    'a kitchen/travel gadget. Wider: device. Large home machines: appliance.',
    ['device']
  ),
  gallery: L(
    'A gallery shows art: an art gallery, a photo gallery, visit a gallery. Museum often has history or science as well as art. Shop is for buying; a gallery may sell work but is mainly for looking. Corridor is not a gallery. Online, a gallery can be a set of photos. Capital letters for names: the National Gallery.',
    ['The class visited a gallery in the city centre.', 'There is a small gallery above the harbour.'],
    'an art gallery / visit a gallery. Contrast: museum (wider), shop (buying).',
    []
  ),
  gas: L(
    'Gas in British English is often the fuel for cookers and heating: a gas cooker, turn the gas off, a gas bill. Petrol is what British cars use; American English calls that gas / gasoline. Natural gas is the household fuel. Air is what we breathe, not “gas” in everyday A2 talk. Do not write gasp (a sudden breath) for gas.',
    ['She cooked the soup on the gas hob.', 'If you smell gas, open a window and call for help.'],
    'gas cooker / turn the gas off. Cars (British): petrol, not gas. US car fuel: gas.',
    []
  ),
  gate: L(
    'A gate is a door in a fence, or an airport boarding point: the garden gate, close the gate, gate 14. Door is usually in a building. Entrance is the way in, which may have a gate. Boarding gate is the airport sense. Do not mix with gait (a way of walking). Check the screens for your gate.',
    ['Please shut the gate so the dog stays in the field.', 'Passengers for Glasgow should go to gate nine.'],
    'a garden/airport gate. Building: door. Mix-up: gait (walk). Phrase: boarding gate.',
    []
  ),
  gentle: L(
    'Gentle means kind and not rough: a gentle voice, a gentle hill, be gentle. Soft can describe material; gentle describes manner or a mild slope. Kind is about goodness; gentle is about a soft way of doing things. Gently is the adverb. Gentleman is a polite man — a different word.',
    ['The nurse was gentle when she cleaned the cut.', 'A gentle walk along the footpath helped her headache.'],
    'a gentle voice / be gentle. Adverb: gently. Mix-up: gentleman. Contrast: rough.',
    ['kind']
  ),
  geography: L(
    'Geography is the school subject about the earth, maps, and places: a geography lesson, study geography, a geography field trip. Geometry is maths about shapes — a common mix-up. Country is one place; geography is the subject. Geographer is the person. Capital G for the subject name is optional in notes; keep it clear in headings.',
    ['Our geography homework is about harbours.', 'She used a guidebook as well as her geography textbook.'],
    'a geography lesson / field trip. Mix-up: geometry (shapes). Person: geographer.',
    []
  ),
  germ: L(
    'A germ is a tiny living thing that can make you ill: kill germs, spread germs, germs on your hands. Bacteria and virus are more scientific. Dirt you can see; germs you usually cannot. Hygiene is how you keep germs down. Do not write gem (a jewel) for germ.',
    ['Soap and water wash germs off your hands.', 'Cough into a tissue so germs do not spread.'],
    'kill / spread germs. Wider science: bacteria, virus. Mix-up: gem (jewel).',
    []
  ),
  gloomy: L(
    'Gloomy means dark or cheerless: a gloomy room, gloomy weather, feel gloomy. Sad is the simple feeling word; gloomy often includes the look of a place. Cheerful is a useful opposite. Cloudy is only about clouds. Do not use gloomy for “a little tired” — that is tired.',
    ['The hostel lounge was gloomy until someone turned the heater on.', 'He felt gloomy after a week of foggy mornings.'],
    'a gloomy room / feel gloomy. Opposite: cheerful. Contrast: sad (feeling only), cloudy (sky).',
    []
  ),
  goods: L(
    'Goods are things made to be sold: household goods, damaged goods, goods train (a train for products). Good without s is the adjective (a good shop). Shopping is the activity; goods are the items. Stuff is informal. Luggage is what you travel with, not shop stock. Goods takes a plural verb: the goods are cheap.',
    ['The greengrocer’s goods looked fresh.', 'This supermarket sells electrical goods on the first floor.'],
    'household/electrical goods. Adjective: good. Informal: stuff. Plural verb: goods are…',
    []
  ),
  grammar: L(
    'Grammar is the system of language rules: grammar practice, a grammar mistake, English grammar. Vocabulary is words; spelling is letters; pronunciation is sounds. Grammatical is the adjective. A grammarian is rare at A2. Do not write glamour when you mean grammar.',
    ['Check the grammar before you send the form.', 'The teacher explained the grammar of “look forward to”.'],
    'a grammar mistake / practise grammar. Contrast: vocabulary, spelling, pronunciation.',
    []
  ),
  greedy: L(
    'Greedy means wanting too much food or money: a greedy child, don’t be greedy, greedy for snacks. Hungry is needing food; greedy is taking more than a fair share. Generous is a useful opposite with money or time. Greed is the noun. Do not use greedy for “eager to learn” — that is keen or eager.',
    ['Share the groceries and don’t be greedy with the biscuits.', 'The greedy seagull stole a sandwich on the harbour wall.'],
    'don’t be greedy. Need food: hungry. Opposite (sharing): generous. Noun: greed.',
    []
  ),
  greengrocer: L(
    'A greengrocer sells fruit and vegetables: at the greengrocer’s, a local greengrocer. Grocer is a wider food shop; greengrocer is specifically fresh produce. Supermarket is larger and sells more than fruit. Florist sells flowers. The shop is often called the greengrocer’s. British word; Americans may just say produce store or supermarket.',
    ['I bought apples and a lettuce at the greengrocer’s.', 'The greengrocer opens before the florist next door.'],
    'at the greengrocer’s. Wider food shop: grocer. Flowers: florist. Large shop: supermarket.',
    []
  ),
  greet: L(
    'Greet means say hello or welcome someone: greet the guests, greet a friend, greet someone with a smile. Greeting is the noun. Meet can mean see someone for the first time or by arrangement; greet is the hello itself. Wave or hug can be ways to greet. Do not write great when you mean greet.',
    ['Please greet visitors at the school gate.', 'She greeted us in the hostel lobby.'],
    'greet someone (with a smile). Noun: greeting. Mix-up: great. Contrast: meet (arrange to see).',
    []
  ),
  greeting: L(
    'A greeting is a hello or a short welcome message: a birthday greeting, send greetings, a warm greeting. Greet is the verb. Greeting card is often birthday or holiday card. Salutation is a formal letter word (Dear…). Goodbye is a farewell, not a greeting in. Plural greetings appears on cards.',
    ['The email started with a friendly greeting.', 'They exchanged greetings and then queued for the bus.'],
    'a birthday/warm greeting. Verb: greet. Cards: greetings. Contrast: goodbye (leaving).',
    []
  ),
  groceries: L(
    'Groceries are everyday food and household shopping: buy groceries, a bag of groceries, grocery shopping. Grocery as a singular is more American for the shop. Food is the wider idea; groceries are what you carry home from the supermarket. Goods can be any products. Do not use grocery for a single apple — say groceries for the lot, or name the item.',
    ['He ordered the groceries online because he had a fever.', 'We split the cost of the groceries after the shop.'],
    'buy / a bag of groceries. American shop: grocery store. Contrast: goods (any products).',
    []
  ),
  guidebook: L(
    'A guidebook helps visitors: a city guidebook, according to the guidebook, a hiking guidebook. Guide can be a person or a short booklet. Map shows streets; a guidebook adds tips on hostels and galleries. Handbook is more for rules (a student handbook). Do not write guard book.',
    ['The guidebook listed a half-price museum day.', 'I packed a thin guidebook instead of a heavy atlas.'],
    'a city/hiking guidebook. Person: a guide. Rules at school: handbook. Streets: map.',
    []
  ),
  haircut: L(
    'A haircut is when someone cuts your hair, or the style you have: get a haircut, a short haircut, need a haircut. Hairdresser is the person. Cut is the general verb. Hairstyle is the look (curly, straight). Do not write hair cut as two words for the noun in careful writing — haircut is one word.',
    ['He got a haircut before the school photos.', 'That haircut is easy to wash when you travel.'],
    'get / need a haircut. Person: hairdresser. Look: hairstyle. One word: haircut.',
    []
  ),
  hairdresser: L(
    'A hairdresser cuts and styles hair: at the hairdresser’s, a hairdresser appointment, train as a hairdresser. Barber traditionally cuts men’s hair; hairdresser is the wider British shop. Haircut is what you get. Chemist is for medicine, not hair. The shop is often the hairdresser’s with a possessive.',
    ['The hairdresser recommended a fringe for her forehead.', 'I booked the hairdresser for Saturday morning.'],
    'at the hairdresser’s. Men’s shop (traditional): barber. Service: a haircut.',
    ['barber']
  ),
  'half-price': L(
    'Half-price means fifty per cent off: half-price tickets, a half-price sale, go half-price. Discount is any price cut. Cheap is a looser word. Fifty per cent off is the same idea in numbers. Hyphenate half-price before a noun. Do not write half prize (a prize is an award).',
    ['The greengrocer put the ripe fruit on a half-price tray.', 'Students travel half-price on this fare after nine.'],
    'half-price tickets / a half-price sale. Cousin: discount. Mix-up: prize (award).',
    []
  ),
  handbag: L(
    'A handbag is a bag, often for a woman, for keys, a purse, and a phone: in her handbag, a leather handbag. Bag is general; backpack / rucksack sits on your back. Purse in British English is often for coins; in American English purse can mean a handbag. Wallet is usually flatter, for cards. Do not write hangbag.',
    ['She kept her passport in her handbag at the airport gate.', 'I left my handbag under the café table and ran back.'],
    'in a handbag. General: bag. Back: rucksack. British purse ≈ coin purse; US purse ≈ handbag.',
    []
  ),
  handbook: L(
    'A handbook is a small book of facts or rules: a student handbook, the staff handbook, according to the handbook. Textbook teaches a subject; a handbook is for using a place or system. Guidebook is for travel. Manual can be for a machine. Do not mix with handy book as two casual words.',
    ['The handbook explains how to fill in the form.', 'Further rules are in the school handbook.'],
    'a student/staff handbook. Travel: guidebook. Subject teaching: textbook. Machines: manual.',
    []
  ),
  handwriting: L(
    'Handwriting is writing done by hand: neat handwriting, read someone’s handwriting, handwriting practice. Handwriting is uncountable in this sense (not “a handwriting”). Typing is on a keyboard. Spelling is letters in the right order, even in print. Script can mean joined-up letters. Improve handwriting with slower, larger letters.',
    ['Please write the heading in clear handwriting.', 'The chemist could not read the doctor’s handwriting.'],
    'neat / clear handwriting (uncountable). Contrast: typing, spelling. Joined-up: script.',
    []
  ),
  hanger: L(
    'A hanger is for hanging clothes: a coat hanger, put it on a hanger, a wire hanger. Hang is the verb (hang your coat up). Hook is a simple peg on a wall. Hangar (different spelling) is a building for aircraft — a famous mix-up. Hanger is not a person who hangs around; that is informal hang around.',
    ['There were no free hangers in the hostel wardrobe.', 'Put the wet jacket on a hanger near the heating, not on a chair.'],
    'a coat hanger / on a hanger. Verb: hang. Mix-up: hangar (for planes). Wall peg: hook.',
    []
  ),
  happily: L(
    'Happily means in a happy way, or luckily: smile happily, live happily, happily the shop was open. Happy is the adjective. Fortunately is a close cousin for the “luckily” sense. Unhappily is the opposite. Do not use happily as an adjective (not “a happily child”).',
    ['The children queued happily for half-price ice cream.', 'Happily, her fever had gone by Monday.'],
    'verb + happily. Adjective: happy. Luckily sense: fortunately. Opposite: unhappily.',
    ['fortunately']
  ),
  happiness: L(
    'Happiness is the state of being happy: find happiness, a moment of happiness, wish you happiness. Happy is the adjective; happily is the adverb. Joy is stronger and often shorter. Fun is enjoyment of an activity, not the deep state. Happiness is uncountable here (not “many happinesses” in everyday A2).',
    ['A long hike in the hills gave him a quiet happiness.', 'She wished them happiness in their new flat.'],
    'find / a moment of happiness. Adjective: happy. Stronger: joy. Activity: fun.',
    []
  ),
  harbour: L(
    'A harbour is safe water for boats: in the harbour, a busy harbour, harbour wall. British spelling is harbour; American is harbor. Port often means a whole town for ships and cargo. Beach is sand by the sea, not a boat park. Dock can be a single platform. Do not write harper.',
    ['We watched the fishing boats come into the harbour.', 'The guidebook starts with a map of the harbour.'],
    'in / a busy harbour. British: harbour. American: harbor. Town for ships: port. Sand: beach.',
    []
  ),
  hardware: L(
    'Hardware is tools and household fittings, or computer machines: a hardware shop, computer hardware. Software is programs. A tool is one item (a hammer). Ironmonger is an older British shop name. Do not use hardware for clothes. In computing, hardware is the physical parts you can touch.',
    ['We bought a new lock at the hardware shop.', 'The school’s hardware is old, but the software still works.'],
    'a hardware shop. Computing contrast: software. One item: a tool. Older British: ironmonger.',
    []
  ),
  headache: L(
    'A headache is a pain in the head: have a headache, a bad headache, give someone a headache (also informal for a problem). Head is the body part; ache is a dull pain. Migraine is a stronger, often one-sided attack. Take advice if headaches are frequent. Do not write head ache as two words for the noun.',
    ['Bright lights in the gallery gave her a headache.', 'He took a rest and drank water for his headache.'],
    'have / a bad headache. One word. Stronger: migraine. Informal: a headache = a problem.',
    []
  ),
  heading: L(
    'A heading is a title at the top of writing: a clear heading, under the heading, essay heading. Headline is for newspapers. Title can be the name of a book. Header in computing is a zone at the top of a page. Do not mix with heating (warm air). Use a heading so the teacher can see the topic.',
    ['Put your name under the heading, not in the margin.', 'Each geography paragraph needs a short heading.'],
    'a clear heading / under the heading. News: headline. Book: title. Mix-up: heating.',
    []
  ),
  headteacher: L(
    'A headteacher is the teacher in charge of a British school: the headteacher’s office, speak to the headteacher. Head is a short informal form. Principal is common in American English and in some colleges. Teacher is any classroom teacher. Headmaster / headmistress are older gendered words. Write headteacher as one word.',
    ['The headteacher greeted parents at the gate.', 'Ask the headteacher before you leave school early.'],
    'the headteacher / headteacher’s office. Informal: the head. US: principal. One word.',
    ['principal']
  ),
  heal: L(
    'Heal means a wound or illness gets better: the cut will heal, heal quickly, time to heal. Cure often means make a disease go away with treatment. Treat is what doctors do. Heel is the back of the foot — a classic spelling mix-up. Health is the noun for being well. Past: healed.',
    ['Keep the plaster on until the cut starts to heal.', 'Her hip took weeks to heal after the fall.'],
    'a cut/wound will heal. Doctors: treat / cure. Mix-up: heel (foot). Noun: health.',
    []
  ),
  hearing: L(
    'Hearing is the ability to hear: good hearing, hearing loss, a hearing test. Hear is the verb. Deaf describes someone who cannot hear, or cannot hear well. Listening is paying attention, not the sense itself. A hearing aid is a small device. Do not write here-ing.',
    ['The nurse checked his hearing after the loud concert.', 'Poor hearing made the grammar lesson hard to follow.'],
    'good hearing / a hearing test. Verb: hear. Contrast: listen (pay attention). Device: hearing aid.',
    []
  ),
  heater: L(
    'A heater is a machine that warms a room or water: an electric heater, turn the heater on, a water heater. Heating is often the whole building system. Radiator is a panel on the wall in many British homes. Cooker heats food. Do not leave a heater too close to hanging clothes.',
    ['The hostel room had a small heater under the window.', 'She bought a heater because the heating was broken.'],
    'turn the heater on. Whole-building system: heating. Wall panel: radiator.',
    []
  ),
  heating: L(
    'Heating is the system that warms a building: central heating, the heating is on, turn the heating down. Heater can be one portable machine. Heat is the general noun or verb. Air conditioning cools. British homes often say the heating rather than “the furnace”. Heading is a title — different word.',
    ['Please do not open the windows while the heating is on.', 'The classroom heating failed on a foggy Monday.'],
    'central heating / the heating is on. One machine: a heater. Mix-up: heading (title).',
    []
  ),
  helicopter: L(
    'A helicopter is an aircraft with spinning blades: a rescue helicopter, travel by helicopter, a helicopter landing. Plane / aeroplane needs a runway; a helicopter can go straight up. Chopper is informal. Pilot can fly both. Helipad is the landing spot. Do not write helicoptor — the ending is -ter.',
    ['A helicopter took the climber off the hill.', 'We heard a helicopter above the harbour.'],
    'a rescue helicopter / by helicopter. Needs no runway (unlike a plane). Informal: chopper.',
    []
  ),
  helmet: L(
    'A helmet is a hard hat for safety: a bike helmet, wear a helmet, a motorbike helmet. Hat is ordinary clothing. Cap is soft. Headgear is a general word. In hockey and on scooters, helmets are often required. Do not write helmet for a hairnet in a kitchen.',
    ['School rules say you must wear a helmet on a bike.', 'The helmet saved him when he slipped on the ice.'],
    'wear / a bike helmet. Ordinary: hat. Sport/road safety, not a fashion hat.',
    []
  ),
  helpful: L(
    'Helpful means giving useful help: a helpful assistant, that was helpful, helpful advice. Help is the verb or noun. Useless is a strong opposite; unhelpful is milder. Kind is about warmth; helpful is about usefulness. Helpfully is the adverb. Do not write helpfull with two l’s at the end.',
    ['A helpful passenger showed us the right gate.', 'Your notes on hygiene were really helpful.'],
    'a helpful person / that is helpful. Verb/noun: help. Opposite: unhelpful. Spelling: one l in the middle of -ful.',
    ['useful']
  ),
  herb: L(
    'A herb is a plant used in cooking or simple medicine: fresh herbs, a herb garden, add herbs. Spice is often dried seed or bark with a stronger taste (pepper, cinnamon). Vegetable is food like carrots. British English usually pronounces the h in herb; American English often drops it. Do not write herb for a large tree.',
    ['The greengrocer sells fresh herbs next to the salad.', 'Mint is a herb that goes well with yoghurt.'],
    'fresh herbs / a herb garden. Stronger dried taste: spice. British: pronounce the h.',
    []
  ),
  highlighter: L(
    'A highlighter is a bright pen for marking text: a yellow highlighter, use a highlighter, highlighter pen. Highlight is the verb (highlight the new words) or an important part. Marker can be any coloured pen. Pen is general. Do not highlight a whole page — only key words.',
    ['She packed a highlighter in her pencil case.', 'Use a highlighter on the grammar rules, not on every line.'],
    'a yellow highlighter / highlighter pen. Verb: highlight. General: pen / marker.',
    []
  ),
  hike: L(
    'Hike means walk a long way in the country: hike to the lake, hike for hours, go hiking. Walk is the general verb; hike suggests distance and countryside. Trek can mean a harder, longer journey. Hitchhike is getting lifts from cars — different. Past: hiked.',
    ['We hiked along the footpath above the harbour.', 'They hiked until their hips ached, then took the bus back.'],
    'hike to / go hiking. General: walk. Mix-up: hitchhike (car lifts). Noun activity: hiking.',
    []
  ),
  hiking: L(
    'Hiking is the activity of long country walks: go hiking, a hiking holiday, hiking boots. Hike is the verb or one trip. Walking is everyday; hiking is usually hills, paths, and a packed lunch. Trekking sounds harder. Wear a helmet only for climbing or bikes, not for ordinary hiking — wear boots and a map instead.',
    ['Hiking kept her fitness up in the holidays.', 'The guidebook has a short hiking route for beginners.'],
    'go hiking / hiking boots. Verb: hike. Everyday: walking. Harder: trekking.',
    []
  ),
  hip: L(
    'The hip is the joint at the side between waist and leg: hurt your hip, hands on hips, a hip operation. Waist is the middle of the body. Thigh is the upper leg. Hope is a feeling — different vowel. Informal hip can mean fashionable, but at A2 keep the body meaning first.',
    ['He sat down because his hip hurt after hockey.', 'Put your hands on your hips and stretch gently.'],
    'hurt your hip / hands on hips. Contrast: waist, thigh. Mix-up: hope (feeling).',
    []
  ),
  hockey: L(
    'Hockey is a team sport with sticks: play hockey, a hockey match, hockey practice. In Britain, hockey often means the game on grass; ice hockey is the game on ice. Football uses feet; hockey uses sticks. Field hockey is another name. Do not write hookey (old slang for missing school).',
    ['Hockey is on the school field every Thursday.', 'She forgot her hockey stick and had to borrow one.'],
    'play hockey / a hockey match. UK default: grass hockey. On ice: ice hockey. Mix-up: hookey.',
    []
  ),
  homesick: L(
    'Homesick means sad because you are away from home: feel homesick, get homesick, homesick in the first week. Home is the place; sick alone means ill. Missing home is the same idea. Nostalgic is more about the past. Homesickness is the noun. Do not write home sick as two words for the adjective.',
    ['The quiet hostel made him homesick for family noise.', 'A phone call from mum helped when she felt homesick.'],
    'feel / get homesick. Noun: homesickness. Ill: sick. One word.',
    []
  ),
  hopeful: L(
    'Hopeful means you think something good may happen: hopeful about the results, a hopeful smile, stay hopeful. Hope is the noun or verb. Hopeless is the opposite. Optimistic is a more formal cousin. Hopefully as a sentence adverb (hopefully it will not rain) is common in speech. Do not confuse with helpful.',
    ['She was hopeful that the half-price fare would still be available.', 'He gave a hopeful look when the teacher marked the test.'],
    'hopeful about. Opposite: hopeless. Noun/verb: hope. Mix-up: helpful.',
    ['optimistic']
  ),
  hopeless: L(
    'Hopeless means without hope, or very bad at something: a hopeless situation, hopeless at cooking, feel hopeless. Hopeful is the opposite of the first sense. Useless is close to “very bad at”. Terrible is a strong everyday cousin. Hopeless at + -ing is a common pattern. Do not use hopeless for a person you dislike — it comments on skill or the future.',
    ['I am hopeless at filling in long visa forms.', 'Without a map, finding the footpath felt hopeless.'],
    'hopeless at + -ing. Opposite (feeling): hopeful. Cousin (skill): useless / terrible.',
    []
  ),
  hostel: L(
    'A hostel is cheap lodgings, often with shared rooms: a youth hostel, stay in a hostel, hostel kitchen. Hotel is usually more private and expensive. Homestay is a room in a family house. Hospital is for ill people — a serious mix-up. Book a hostel in advance in busy cities.',
    ['We cooked groceries in the hostel kitchen.', 'The hostel near the station was noisy but clean.'],
    'a youth hostel / stay in a hostel. Contrast: hotel (more private). Mix-up: hospital.',
    []
  ),
  housework: L(
    'Housework is cleaning and jobs in the home: do the housework, share the housework, housework on Saturday. Homework is school work — a classic mix-up. Chores is a close cousin. Housework is uncountable (not “a housework”). Cleaning, washing, and tidying all count.',
    ['He did the housework before his hiking trip.', 'Housework and homework both needed time that evening.'],
    'do the housework (uncountable). Mix-up: homework (school). Cousin: chores.',
    ['chores']
  ),
  hug: L(
    'Hug means put your arms around someone: hug a friend, give someone a hug, hug goodbye. The noun is often give a hug. Kiss is on the face; handshake is more formal. Cuddle is softer, often with children. Ask before hugging if you are not sure. Past: hugged.',
    ['They hugged at the airport gate after the long flight.', 'She hugged her mum and felt less homesick.'],
    'hug someone / give a hug. Formal: handshake. Face: kiss. Past: hugged.',
    []
  ),
  humour: L(
    'Humour is being funny, or seeing the funny side: a sense of humour, good humour, British humour. British spelling is humour; American is humor. Joke is one funny story; humour is the wider quality. Comedy is a funny film or show. Mood is how you feel; good humour can mean a cheerful mood. Do not write humerus (a bone) for humour.',
    ['Her humour kept the class going during the gloomy, foggy week.', 'You need a sense of humour when trains are late.'],
    'a sense of humour. British: humour. American: humor. One funny story: a joke. Show: comedy.',
    []
  ),
  hygiene: L(
    'Hygiene is keeping clean to stay healthy: good hygiene, personal hygiene, food hygiene. Clean is the adjective; hygiene is the practice. Germs are what hygiene fights. Health is the wider result. Hygiene is uncountable. Wash hands, cover coughs, and keep kitchens clean are basic hygiene rules.',
    ['The handbook has a page on food hygiene in the hostel kitchen.', 'Good hygiene helps when flu is going round the school.'],
    'good / personal / food hygiene (uncountable). Adjective: clean. Related: germs, health.',
    []
  ),
}
