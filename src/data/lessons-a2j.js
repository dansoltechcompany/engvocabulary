const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2J = {
  wagon: L(
    'A wagon is a four-wheeled vehicle for carrying loads, often pulled by a horse: a farm wagon, a hay wagon, climb onto the wagon. Lorry is a motor vehicle for goods; cart is often smaller, with two wheels. Wagon can also mean a railway goods vehicle in British English. Do not write dragon (a story animal) for wagon.',
    ['The wagon rattled along the country lane.', 'They loaded sacks of grain onto the wagon.'],
    'a farm / hay wagon. Motor cousin: lorry. Smaller: cart. Mix-up: dragon.',
    ['cart']
  ),
  waist: L(
    'Your waist is the middle of the body above the hips: around the waist, a slim waist, waist size. Belt sits on the waist. Hip is lower, where the leg joins. Waste (rubbish, or use badly) sounds similar — different spelling. Measure a waist for trousers or a skirt. Do not write wrist (the joint at the hand) for waist.',
    ['The coat was too tight at the waist.', 'She tied a scarf around her waist on the walk.'],
    'around the waist / waist size. Lower: hip. Mix-ups: waste (rubbish), wrist (hand).',
    []
  ),
  war: L(
    'War is fighting between countries or large groups: in the war, a war museum, go to war. Battle is one fight; war is the longer period. Peace is the opposite. Uncountable in many uses (not “a war” except for a named conflict). Do not write wore (past of wear) for war — different sound.',
    ['Her grandfather talked little about the war.', 'The class visited a war memorial in the park.'],
    'in the war / a war museum. One fight: battle. Opposite: peace. Mix-up: wore (wear).',
    []
  ),
  warehouse: L(
    'A warehouse is a large building for storing goods: in a warehouse, a warehouse job, goods leave the warehouse. Shop is where customers buy; factory is where things are made. Store can mean a shop (US) or a place you keep things. Do not write warhouse as one invented word, or greenhouse (for plants).',
    ['Parcels waited in the warehouse before delivery.', 'He started nights at a warehouse near the motorway.'],
    'in a warehouse / warehouse stock. Contrast: shop (sells), factory (makes). Mix-up: greenhouse.',
    []
  ),
  warning: L(
    'A warning tells you about danger or a problem: a storm warning, a warning sign, give someone a warning. Warn is the verb; warning is the noun. Notice can be a written message; alarm is often louder or sudden. Ignore a warning at your own risk. Do not write warming (getting hotter) for warning.',
    ['The phone sent a flood warning for the river.', 'She gave him a warning about the late bus.'],
    'a storm / flood warning. Verb: warn. Mix-up: warming (heat). Related: warning sign.',
    []
  ),
  washing: L(
    'Washing is clothes that need washing or have just been washed: hang the washing out, a pile of washing, do the washing. Laundry is a close cousin, often the room or the service. Washing machine is the appliance. Uncountable. Do not write wishing (hoping) for washing.',
    ['The washing dried quickly in the wind.', 'He forgot the washing in the machine overnight.'],
    'hang the washing out / do the washing (uncountable). Cousin: laundry. Mix-up: wishing.',
    ['laundry']
  ),
  'washing-up': L(
    'Washing-up is cleaning plates and pans after a meal: do the washing-up, washing-up liquid, leave the washing-up. British English prefers washing-up; American English often says do the dishes. Dry is the next job with a tea towel. Uncountable. Do not write washing up as two loose words when you mean the chore noun — hyphenate the noun.',
    ['There was a week of washing-up after the party.', 'She put on gloves for the washing-up.'],
    'do the washing-up (British). US cousin: do the dishes. Related: washing-up liquid.',
    []
  ),
  waterfall: L(
    'A waterfall is a river falling over high rock: a famous waterfall, at the waterfall, a waterfall path. Fountain is built in a town square; a waterfall is natural. Rapids are fast water, not a drop. Take care on wet rocks. Do not write water fall as two words in this sense.',
    ['Spray from the waterfall wet our jackets.', 'The guidebook marked a short walk to the waterfall.'],
    'at the waterfall / a famous waterfall. Town cousin: fountain. One word, not water fall.',
    []
  ),
  waterproof: L(
    'Waterproof means water cannot get through: a waterproof jacket, waterproof shoes, waterproof material. Water-resistant is weaker (some water, not a storm). Umbrella keeps rain off from above; waterproof clothes cover you. Noun waterproofs means rain clothes. Do not write water proof as two words.',
    ['Pack a waterproof bag for the boat trip.', 'The watch is waterproof, so swimming is fine.'],
    'a waterproof jacket / shoes. Weaker: water-resistant. Related noun: waterproofs.',
    []
  ),
  wave: L(
    'Wave as a verb means move your hand to greet someone: wave goodbye, wave at a friend, wave from a window. Nod uses the head; shake hands is a greeting with palms. A wave as a noun is also water on the sea — extra A2 sense. Past: waved. Do not write waive (give up a right — B2) or waive when you mean wave.',
    ['The children waved as the coach pulled away.', 'He waved at the neighbour across the street.'],
    'wave goodbye / wave at someone. Past: waved. Noun extra: a wave (sea). Mix-up: waive (formal).',
    []
  ),
  weak: L(
    'Weak means not strong: feel weak, a weak signal, weak tea. Strong is the opposite. Week (seven days) sounds the same in many accents — spelling differs. Illness can leave you weak. Weak tea has too much water. Do not write week when you mean weak.',
    ['The Wi-Fi is weak at the back of the hostel.', 'She felt weak after giving blood at the clinic.'],
    'feel weak / a weak signal. Opposite: strong. Homophone: week (seven days).',
    []
  ),
  web: L(
    'The web often means the internet: on the web, search the web, a web page. Internet is the wider system; website is one place on it. A spider’s web is the other A2 picture. Uncountable in “on the web”. Do not write wed (get married) for web.',
    ['She found the opening times on the web.', 'A spider had built a web in the garden shed.'],
    'on the web / a web page. Wider: internet. Place: website. Other sense: spider’s web.',
    ['internet']
  ),
  webcam: L(
    'A webcam is a small camera for live pictures on a computer: turn on the webcam, a laptop webcam, webcam class. Camera is general (including phones). Microphone is for sound, not picture. Cover the webcam when you are not on a call. Do not write webcast (a live internet show) unless you mean that.',
    ['His webcam was off, so we only heard his voice.', 'The teacher asked everyone to test the webcam.'],
    'turn the webcam on/off. Sound cousin: microphone. General: camera.',
    []
  ),
  wedding: L(
    'A wedding is the marriage ceremony: a wedding guest, wedding photos, go to a wedding. Marriage is the relationship after; wedding is the day and event. Bride and groom are the couple in traditional talk. Invitation comes before. Do not write weeding (pulling plants) for wedding.',
    ['They booked a hall for the wedding reception.', 'I need a new shirt for Saturday’s wedding.'],
    'go to a wedding / wedding photos. After: marriage. Mix-up: weeding (garden).',
    []
  ),
  weekday: L(
    'A weekday is Monday to Friday: on weekdays, a weekday morning, weekday trains. Weekend is Saturday and Sunday. Working day often matches a weekday, but shops may open at weekends too. Plural weekdays is common. Do not write weak day as two words.',
    ['Parking is cheaper on weekdays after six.', 'The café is quiet on a weekday afternoon.'],
    'on weekdays / a weekday morning. Contrast: weekend. Related: working day.',
    []
  ),
  weekly: L(
    'Weekly means once a week: a weekly class, weekly shopping, a weekly magazine. Daily is every day; monthly is once a month. Weekly can also be an adverb (we meet weekly). Do not write weakly (in a weak way) — same sound in some accents, different spelling.',
    ['The weekly market sells cheese and bread.', 'She writes a weekly email to her parents.'],
    'a weekly class / magazine. Daily = every day; monthly = once a month. Mix-up: weakly.',
    []
  ),
  weigh: L(
    'Weigh means find how heavy something is, or have that heaviness: weigh the bag, weigh 70 kilos, weigh yourself. Weight is the noun. Scales are the machine. Way (a road or method) sounds similar — spelling differs. Past: weighed. Do not write way when you mean weigh.',
    ['They weigh hand luggage at the gate.', 'The puppy weighed two kilos at six weeks.'],
    'weigh the bag / weigh + kilos. Noun: weight. Machine: scales. Mix-up: way. Past: weighed.',
    []
  ),
  weight: L(
    'Weight is how heavy someone or something is: over the weight limit, lose weight, a weight of five kilos. Weigh is the verb. Heavy describes the feeling; weight is the amount. Wait (stay) is a different word. Do not write wait or way for weight.',
    ['Check the weight of the parcel before you post it.', 'The doctor asked about her weight and height.'],
    'weight limit / lose weight. Verb: weigh. Mix-ups: wait (stay), way (road).',
    []
  ),
  'well-known': L(
    'Well-known means many people know the person or thing: a well-known actor, well-known in the town, a well-known brand. Famous is a close cousin, often stronger. Unknown is the opposite. Hyphenate well-known before a noun. Do not write well known without the hyphen in this adjective use.',
    ['It is a well-known fact that the bridge closes in storms.', 'A well-known chef opened a café by the harbour.'],
    'a well-known actor / brand (hyphen before a noun). Cousin: famous. Opposite: unknown.',
    ['famous']
  ),
  western: L(
    'Western means of or from the west: the western side, western Europe, a western accent. West is the direction; western is the adjective. Eastern is the opposite side. A western can also mean a cowboy film — extra. Do not write western for west when you only need the compass noun.',
    ['Clouds were building on the western hills.', 'They took the western exit off the motorway.'],
    'the western side / western Europe. Noun direction: west. Opposite side: eastern.',
    []
  ),
  whale: L(
    'A whale is a huge sea animal that breathes air: a whale watching trip, a blue whale, the whale surfaced. Dolphin is smaller and often jumps near boats. Fish is the wrong group — whales are mammals. Plural: whales. Do not write wail (a long cry) for whale — similar sound.',
    ['Binoculars helped us spot the whale from the cliff.', 'The museum showed the skeleton of a whale.'],
    'whale watching / a blue whale. Smaller cousin: dolphin. Mix-up: wail (cry). Plural: whales.',
    []
  ),
  wheat: L(
    'Wheat is a grain used for flour and bread: a field of wheat, wheat bread, whole wheat. Corn in British English often means maize; wheat is a different crop. Flour is the powder after milling. Uncountable. Do not write wet when you mean wheat, or wait.',
    ['Golden wheat covered the fields in July.', 'This pasta is made from wheat flour.'],
    'a field of wheat / wheat flour (uncountable). Related: bread, flour. Contrast: maize/corn.',
    []
  ),
  wheel: L(
    'A wheel is the round part that turns on a bike or car: a flat wheel, the front wheel, change a wheel. Tyre is the rubber on the outside (British spelling). Steering wheel is what you hold in a car. Circular describes the shape. Do not write we’ll (we will) for wheel.',
    ['Mud covered the wheels after the farm track.', 'He locked the front wheel of his bike to the rail.'],
    'front / back wheel. Rubber: tyre (British). Car: steering wheel. Mix-up: we’ll.',
    []
  ),
  wheelchair: L(
    'A wheelchair is a chair with wheels for someone who cannot walk easily: wheelchair access, a wheelchair user, in a wheelchair. Ramp helps a wheelchair into a building. Pushchair is for a baby. One word. Do not write wheel chair as two words, or wheelchair for a desk chair with wheels (swivel chair).',
    ['The station has a lift for wheelchair users.', 'She pushed her grandfather’s wheelchair to the café.'],
    'in a wheelchair / wheelchair access. Baby cousin: pushchair. Related: ramp.',
    []
  ),
  whenever: L(
    'Whenever means at any time, or every time that: call whenever you like, whenever it rains, whenever she visits. When is a single time; whenever is “any/every time”. Always is a looser cousin. Do not write whenever for wherever (place).',
    ['Whenever the bus is late, I text my boss.', 'You can borrow the key whenever you need it.'],
    'whenever you like / whenever + clause. Contrast: when (one time). Mix-up: wherever (place).',
    []
  ),
  wherever: L(
    'Wherever means in or to any place: sit wherever you like, wherever he goes, wherever it is cheaper. Where asks for one place; wherever is “any place”. Everywhere is a related idea. Do not write wherever for whenever (time).',
    ['Take a jumper wherever you travel in April.', 'Wherever she sat, the dog followed.'],
    'sit wherever you like / wherever + clause. Contrast: where (one place). Mix-up: whenever (time).',
    []
  ),
  whisper: L(
    'Whisper means speak very quietly: whisper in class, a whisper, whisper the answer. Shout is the opposite volume. Speak is the general verb. Past: whispered. Do not write whisker (hair on a cat’s face) for whisper.',
    ['They whispered during the film so nobody complained.', 'The librarian asked us to whisper near the desks.'],
    'whisper in class / whisper the answer. Opposite: shout. Mix-up: whisker (cat). Past: whispered.',
    []
  ),
  whistle: L(
    'A whistle is a high sound or the small device that makes it: blow a whistle, a referee’s whistle, a train whistle. Whistle can also be a verb (whistle a tune). Shout uses the voice, not a device. Do not write whistle for thistle (a plant) or for whisper.',
    ['A whistle marked the start of the race.', 'He wore a whistle on a string at the pool.'],
    'blow a whistle / a referee’s whistle. Also a verb: whistle a tune. Mix-up: thistle (plant).',
    []
  ),
  wild: L(
    'Wild means living in nature, not kept as a pet or on a farm: wild animals, wild flowers, in the wild. Tame is the opposite for animals. Wildlife is the noun for animals and plants together. Wild can also mean uncontrolled (wild weather) — extra. Do not write while (during) for wild.',
    ['It is illegal to pick some wild plants here.', 'A wild fox crossed the lane at dusk.'],
    'wild animals / in the wild. Opposite (animals): tame. Noun group: wildlife. Mix-up: while.',
    []
  ),
  wildlife: L(
    'Wildlife is animals and plants in nature: protect wildlife, wildlife park, local wildlife. Uncountable (not “a wildlife”). Animal is one creature; wildlife is the group. Zoo keeps animals in enclosures. Do not write wild life as two words in this sense.',
    ['The island is rich in wildlife in spring.', 'A wildlife camera caught a badger at night.'],
    'protect wildlife / a wildlife park (uncountable). One creature: animal. Contrast: zoo.',
    []
  ),
  windmill: L(
    'A windmill is a building with sails turned by the wind, once used to mill grain: an old windmill, windmill sails, visit a windmill. Wind turbine is the modern machine for electricity. Mill can also mean a factory. Do not write wind mill as two words, or window.',
    ['Tourists climbed the hill to the windmill.', 'The windmill no longer grinds flour, but the sails still turn.'],
    'an old windmill / windmill sails. Modern cousin: wind turbine. One word.',
    []
  ),
  windscreen: L(
    'The windscreen is the front window of a car: a cracked windscreen, windscreen wipers, look through the windscreen. British spelling is windscreen; American is windshield. Window is general; the windscreen is the front one. Wipers clear rain. Do not write windscreen for a screen on a computer.',
    ['Ice covered the windscreen on Monday morning.', 'The mechanic replaced a stone-chipped windscreen.'],
    'windscreen wipers / a cracked windscreen. British: windscreen. American: windshield.',
    []
  ),
  wing: L(
    'A wing is the part a bird or aeroplane uses to fly: spread its wings, the left wing, a broken wing. Arm is for people; fin is for fish. Wing can also mean a side of a building — extra. Do not write ring (jewellery or phone) for wing.',
    ['The swan tucked its wing in by the lake.', 'Passengers sat over the wing of the plane.'],
    'a bird’s / plane’s wing. People: arm. Extra: a wing of a building. Mix-up: ring.',
    []
  ),
  winner: L(
    'A winner is the person or team that wins: the winner of the cup, a prize for the winner, announce the winner. Win is the verb; winner is the person. Loser is the opposite in sport talk. Champion is a stronger cousin after many wins. Do not write winter (the season) for winner.',
    ['The winner received a book token.', 'Both winners had to share the trophy.'],
    'the winner of + event. Verb: win. Opposite in sport: loser. Mix-up: winter (season).',
    ['champion']
  ),
  wipe: L(
    'Wipe means clean or dry a surface with a cloth: wipe the table, wipe your hands, wipe the board. Wash uses water more fully; wipe is often a quick pass. Cloth or tissue is the tool. Past: wiped. Do not write swipe (move a card or finger) unless you mean that.',
    ['Please wipe your shoes on the mat.', 'She wiped the whiteboard after the lesson.'],
    'wipe the table / wipe your hands. Fuller clean: wash. Past: wiped. Mix-up: swipe (card).',
    []
  ),
  wire: L(
    'Wire is thin metal for electricity or for tying: a broken wire, copper wire, a wire fence. Cable is often thicker. Cable and lead can mean the whole flex on a kettle. Uncountable when you mean the material. Do not write why’re as a joke spelling, or wear.',
    ['The lamp did not work because of a loose wire.', 'They tied the roses to a wire along the wall.'],
    'a broken / copper wire. Thicker cousin: cable. Mix-up: wear (clothes).',
    ['cable']
  ),
  wireless: L(
    'Wireless means working without cables: wireless internet, a wireless mouse, wireless headphones. Wi-Fi is the everyday cousin for internet. Wired is the opposite (with a cable). Old British wireless also meant a radio — extra history. Do not write wireless for tireless (never tired).',
    ['The library has free wireless access.', 'He lost the wireless mouse behind the sofa.'],
    'wireless internet / headphones. Everyday cousin: Wi-Fi. Opposite: wired.',
    ['Wi-Fi']
  ),
  wolf: L(
    'A wolf is a wild animal like a large dog: a wolf in the forest, a pack of wolves, a wolf howled. Dog is the tame cousin. Fox is smaller and often lives nearer towns. Plural: wolves (not wolfs). Do not write wool (sheep’s hair) for wolf.',
    ['The nature park had a talk about wolves.', 'A lone wolf appeared in the snow in the documentary.'],
    'a pack of wolves. Plural: wolves. Tame cousin: dog. Smaller wild cousin: fox. Mix-up: wool.',
    []
  ),
  wonder: L(
    'Wonder means want to know, or think with curiosity: I wonder if…, wonder what happened, no wonder. Ask is more direct to a person. Surprise is a feeling; wonder is the thinking. Past: wondered. Do not write wander (walk without a plan) — a common mix-up.',
    ['I wonder whether the chemist is still open.', 'She wondered why the classroom was locked.'],
    'I wonder if / whether. Mix-up: wander (walk). Past: wondered. Phrase: no wonder.',
    []
  ),
  wonderful: L(
    'Wonderful means extremely good: a wonderful day, wonderful news, taste wonderful. Great and brilliant are everyday cousins. Awful is an opposite. Wonder is the verb or noun; wonderful is the adjective. Do not write wonderfull with two l’s.',
    ['The volunteers did a wonderful job at the fête.', 'It was wonderful to see my grandparents again.'],
    'a wonderful day / news. Cousins: great, brilliant. Opposite: awful. Spelling: one l in -ful.',
    ['great', 'brilliant']
  ),
  wood: L(
    'Wood is the hard material from trees, or a small forest: made of wood, a piece of wood, walk in the wood. Wooden is the adjective. Forest is larger than a wood. Timber is wood for building. Uncountable as a material. Do not write would (the modal) for wood — same sound.',
    ['They burnt wood in the stove on cold nights.', 'A path ran through the wood behind the school.'],
    'made of wood / in the wood. Adjective: wooden. Larger: forest. Homophone: would.',
    ['timber']
  ),
  wooden: L(
    'Wooden means made of wood: a wooden chair, wooden floor, wooden spoon. Wood is the noun. Plastic and metal are other materials. Wooden can also mean stiff acting — extra, not the first A2 sense. Do not write wooden for woolen without checking British woollen.',
    ['The wooden stairs creaked at night.', 'She stirred the soup with a wooden spoon.'],
    'a wooden chair / floor / spoon. Noun: wood. Other materials: plastic, metal.',
    []
  ),
  wool: L(
    'Wool is the soft hair of sheep used for clothes: a ball of wool, pure wool, allergic to wool. Woollen is the British adjective. Cotton is a plant fibre; silk is from silkworms. Uncountable. Do not write wolf (the animal) for wool.',
    ['She bought navy wool for a scarf.', 'This blanket is thick sheep’s wool.'],
    'a ball of wool / pure wool (uncountable). Adjective: woollen (British). Mix-up: wolf.',
    []
  ),
  woollen: L(
    'Woollen means made of wool: a woollen jumper, woollen socks, woollen blanket. British spelling is woollen; American is often woolen (one l). Wool is the noun. Cotton is a different fabric. Do not write swollen (puffed up) for woollen.',
    ['Pack woollen gloves for the hill walk.', 'The stall sold woollen hats in bright colours.'],
    'a woollen jumper / socks. British: woollen. American: woolen. Noun: wool. Mix-up: swollen.',
    []
  ),
  workbook: L(
    'A workbook is a book of exercises to write in: complete the workbook, page ten of the workbook, an English workbook. Textbook explains the lesson; a workbook is for practice. Notebook is blank for your own notes. Worksheet is usually one page. Do not write work book as two words.',
    ['Bring your workbook to every class.', 'The answers are at the back of the workbook.'],
    'complete the workbook. Contrast: textbook (explains), notebook (blank), worksheet (one page).',
    []
  ),
  working: L(
    'Working as an adjective relates to a job, or means functioning: working hours, a working day, a working lift. Work is the noun or verb. Broken is an opposite for machines. Working class is a social term — extra. Do not write working for walking.',
    ['Working from home saved her a long commute.', 'The working parts of the clock needed oil.'],
    'working hours / a working day. Verb/noun: work. Machine opposite: broken. Mix-up: walking.',
    []
  ),
  workout: L(
    'A workout is a session of exercise: a gym workout, a short workout, after a workout. Exercise is the general idea; a workout is one planned session. Training can be longer or for sport. One word. Do not write work out as two words when you mean the noun — the verb work out also means solve or go to the gym.',
    ['His morning workout is twenty minutes of stretching.', 'They filmed a home workout during the holidays.'],
    'a gym / short workout (one word). Wider: exercise. Verb extra: work out (solve / go to the gym).',
    []
  ),
  workplace: L(
    'A workplace is where you do your job: in the workplace, workplace rules, a noisy workplace. Office is one type; factory is another. Work is the activity; workplace is the place. One word. Do not write work place as two words in this sense.',
    ['Food is not allowed at desks in this workplace.', 'They ran a first-aid course for the whole workplace.'],
    'in the workplace / workplace rules. Types: office, factory. Activity: work. One word.',
    []
  ),
  worksheet: L(
    'A worksheet is a page of questions or tasks: a grammar worksheet, hand in the worksheet, a worksheet on verbs. Workbook is a whole book of exercises. Handout is any paper the teacher gives. One word. Do not write work sheet as two words.',
    ['Pair up and finish the worksheet in ten minutes.', 'There is a worksheet for homework on page two.'],
    'a grammar worksheet / hand in the worksheet. Book: workbook. Any paper: handout.',
    []
  ),
  worldwide: L(
    'Worldwide means across the whole world: a worldwide audience, worldwide news, used worldwide. International is a close cousin. Local is the opposite scale. Worldwide can also be an adverb (sold worldwide). One word. Do not write world wide as two words, or world-weary (tired of life — far higher level).',
    ['The charity has a worldwide network of volunteers.', 'The app became popular worldwide in a month.'],
    'a worldwide audience / news. Cousin: international. Opposite scale: local. One word.',
    ['international']
  ),
  worm: L(
    'A worm is a small, long, soft animal in soil: an earthworm, a worm in the apple, birds eat worms. Snake is much larger and has a backbone. Insect has legs; a worm does not. Plural: worms. Do not write warm (not cold) for worm — similar letters.',
    ['After the rain, worms came up on the path.', 'The fishing shop sold a box of worms.'],
    'an earthworm / birds eat worms. Contrast: snake (larger). Mix-up: warm (temperature).',
    []
  ),
  worried: L(
    'Worried means unhappy because you fear a problem: worried about the exam, look worried, get worried. Worry is the verb or noun; worried is the adjective. Anxious is a close cousin. Relaxed is an opposite mood. Pattern: worried about + noun. Do not write worried for hurried (done too fast).',
    ['Dad was worried about the icy roads.', 'She felt worried until the results arrived.'],
    'worried about + noun. Verb/noun: worry. Cousin: anxious. Mix-up: hurried (too fast).',
    ['anxious']
  ),
  worse: L(
    'Worse is the comparative of bad: worse than yesterday, get worse, even worse. Worst is the superlative (the most bad). Better is the comparative of good. Bad is the base adjective. Do not write worst when you compare two things — use worse.',
    ['The delay made a bad day worse.', 'His cold was worse in the evening.'],
    'worse than / get worse. Base: bad. Superlative: worst. Opposite comparative: better.',
    []
  ),
  worst: L(
    'Worst is the superlative of bad: the worst day, the worst of it, my worst mark. Worse compares two; worst is the bottom of three or more, or “the most bad”. Best is the opposite superlative. Do not write worse when you mean the extreme (the worst film ever).',
    ['That was the worst storm of the year.', 'In the worst case, the match will be cancelled.'],
    'the worst + noun / the worst case. Comparative: worse. Opposite superlative: best.',
    []
  ),
  wow: L(
    'Wow is an informal exclamation when you are surprised or impressed: Wow!, Wow, look at that, a wow moment (extra). Informal cousins: gosh, oh. Formal English uses little of wow in essays. Stress it strongly. Do not write vow (a serious promise) for wow.',
    ['Wow, you finished the puzzle already!', 'The fireworks made the children shout wow.'],
    'Wow! / Wow, + clause. Informal surprise. Mix-up: vow (promise). Rare in formal writing.',
    []
  ),
  wrap: L(
    'Wrap means cover something by folding paper or cloth around it: wrap a present, wrap up warm, wrap the sandwiches. Unwrap is the opposite. Pack is put into a bag; wrap is the covering step. Past: wrapped. The w is silent — it sounds like rap. Do not write rap (music or knock) when you mean wrap.',
    ['Please wrap the glasses in newspaper.', 'Wrap up before you cycle — it is freezing.'],
    'wrap a present / wrap up warm. Opposite: unwrap. Silent w. Mix-up: rap. Past: wrapped.',
    []
  ),
  writer: L(
    'A writer is a person who writes books or articles as work: a famous writer, the writer of the play, become a writer. Author is a close cousin, often for books. Write is the verb; writer is the person. Journalist writes news. Do not write rider (on a bike or horse) for writer.',
    ['The writer visited our school library.', 'She wants to be a travel writer after college.'],
    'a famous writer / the writer of + work. Cousin: author. Verb: write. Mix-up: rider.',
    ['author']
  ),
  writing: L(
    'Writing is written words, or the skill of producing them: improve your writing, in writing, a piece of writing. Write is the verb; writing is the noun. Handwriting is the look of letters by hand. Uncountable in “her writing”. Do not write riding (on a bike) for writing.',
    ['Keep a diary to practise writing.', 'The contract must be in writing, not only a phone call.'],
    'in writing / a piece of writing. Verb: write. Related: handwriting. Mix-up: riding.',
    []
  ),
  written: L(
    'Written means done in writing, not spoken: a written test, written English, written instructions. Spoke/spoken is the oral side. Write is the verb; written is the past participle used as an adjective. Oral exam is the spoken opposite in school. Do not write ridden (past of ride) for written.',
    ['There is a written paper and a speaking test.', 'Follow the written rules on the lab door.'],
    'a written test / written instructions. Verb: write. Contrast: spoken / oral. Mix-up: ridden.',
    []
  ),
  'x-ray': L(
    'An x-ray is a hospital photograph of the inside of the body: have an x-ray, an x-ray of the chest, x-ray results. Scan can mean a different machine picture (CT, MRI). Photograph is of the outside. Hyphenate x-ray. Do not write xray as one word in careful British English, or x-ray for a holiday photo.',
    ['The nurse took an x-ray of his ankle after the fall.', 'She waited an hour for the x-ray department.'],
    'have an x-ray / an x-ray of + body part. Other pictures: scan. Hyphen: x-ray.',
    []
  ),
  yacht: L(
    'A yacht is a pleasure boat, often with sails: on a yacht, a sailing yacht, yacht harbour. Boat is general; ship is much larger. Ferry carries paying passengers on a route. The spelling is yacht but it sounds like yot. Do not write yatch — a common misspelling.',
    ['They hired a small yacht for the afternoon.', 'Flags flew on the yachts in the marina.'],
    'on a yacht / a sailing yacht. General: boat. Larger: ship. Spelling: yacht (not yatch).',
    []
  ),
  yard: L(
    'A yard is hard ground by a building, or a unit of length (about 91 cm): the school yard, a back yard, three yards of cloth. Garden is usually grass and plants (British); yard is often paved. Metre is the metric cousin. Do not write yarn (wool thread) for yard.',
    ['Footballs bounced off the wall in the yard.', 'The fabric shop sold cloth by the yard.'],
    'school / back yard. British garden ≈ plants and grass. Length: about 91 cm. Mix-up: yarn.',
    []
  ),
  yawn: L(
    'Yawn means open your mouth wide because you are tired or bored: yawn in class, a huge yawn, try not to yawn. Tired is the usual cause. Stretch often happens with a yawn after sleep. Past: yawned. Do not write yarn (wool) or yawn for dawn (sunrise).',
    ['A yawn went round the hot classroom.', 'He yawned and reached for another coffee.'],
    'yawn in class / a huge yawn. Cause: tired or bored. Mix-ups: yarn (wool), dawn (sunrise). Past: yawned.',
    []
  ),
  yeah: L(
    'Yeah is an informal yes: Yeah, sure, Yeah, I know, Yeah, coming. Yes is the standard word for classwork and formal talk. Ok / okay can agree in a similar informal way. Avoid yeah in essays and job emails. Do not write year (365 days) for yeah.',
    ['Yeah, the 14:10 train is fine for me.', 'She answered yeah without looking up from her phone.'],
    'Yeah, + informal agreement. Standard: yes. Avoid in formal writing. Mix-up: year.',
    ['yes']
  ),
  yearly: L(
    'Yearly means once a year: a yearly visit, yearly fee, yearly meeting. Annual is a close, slightly more formal cousin. Weekly and monthly are other frequencies. Yearly can also be an adverb (checked yearly). Do not write yearly for early (before the usual time).',
    ['The museum pass needs a yearly renewal.', 'They make a yearly trip to the same seaside town.'],
    'a yearly visit / fee. Formal cousin: annual. Other: weekly, monthly. Mix-up: early.',
    ['annual']
  ),
  yell: L(
    'Yell means shout loudly: yell at someone, yell for help, don’t yell. Shout is a close synonym. Whisper is the opposite volume. Past: yelled. Rude in libraries and classrooms. Do not write yell for yellow (the colour) or for gel.',
    ['Fans yelled when the ball hit the net.', 'She yelled for help when she slipped on the ice.'],
    'yell at / yell for help. Cousin: shout. Opposite volume: whisper. Mix-up: yellow. Past: yelled.',
    ['shout']
  ),
  yoga: L(
    'Yoga is exercise for stretching and breathing, often on a mat: a yoga class, do yoga, yoga mat. Gym is wider fitness with machines. Pilates is a related studio class. Uncountable (not “a yoga” — say a yoga class). Do not write yogurt when you mean yoga — yoghurt is the food (already a different headword).',
    ['Beginners’ yoga is on Monday at seven.', 'He packed a yoga mat for the hostel gym.'],
    'a yoga class / do yoga (uncountable). Wider: gym. Related: pilates. Mix-up: yoghurt (food).',
    []
  ),
  yolk: L(
    'The yolk is the yellow middle of an egg: egg yolk, beat the yolk, a runny yolk. White (or albumen in science) is the clear part. Shell is the outside. Plural: yolks. Do not write yoke (a wooden bar for oxen) — same sound, different spelling.',
    ['Separate the yolk from the white for the meringue.', 'He likes a yolk that is still soft on toast.'],
    'egg yolk / beat the yolk. Other parts: white, shell. Homophone: yoke (oxen bar).',
    []
  ),
  youngster: L(
    'A youngster is a child or young person: the youngsters, a youngster of ten, local youngsters. Child is more standard; kid is informal. Youth can mean young people as a group or the time of being young. Plural: youngsters. Do not write youngster for gangster (criminal — wrong word).',
    ['The youngsters ran ahead on the beach path.', 'A youngster asked if the museum had a quiz.'],
    'the youngsters / a youngster of + age. Standard: child. Informal: kid. Group/time: youth.',
    ['child']
  ),
  youth: L(
    'Youth is the time of being young, or young people as a group: in his youth, youth club, the youth of today. Child is one young person; youth is often uncountable as a period. Young is the adjective. Youth hostel is cheap lodgings. Do not write youth for use or for you.',
    ['She travelled a lot in her youth.', 'The youth club meets on Friday in the hall.'],
    'in his/her youth / youth club. Adjective: young. Related: youth hostel. Person: youngster/child.',
    []
  ),
}
