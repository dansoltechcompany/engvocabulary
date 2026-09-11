const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2O = {
  able: L(
    'Able means you can do something: able to swim, able to help, perfectly able. Can is the everyday cousin (I can book it). Unable is the opposite. Enable means make it possible — later, and not the same. Do not write able when you mean Abel (a name), or table.',
    ['Are you able to collect the keys after six?', 'She was able to change the ticket at the machine.'],
    'able to + verb. Everyday cousin: can. Opposite: unable. Mix-up: Abel, table.',
    ['can']
  ),
  absent: L(
    'Absent means not in the place where people expect you: absent from work, absent from class, two people absent. Away and off are everyday cousins. Present is a useful opposite (everyone present). Absence is the noun. Do not write absent when you mean absence, or absorb.',
    ['The manager was absent, so we waited at reception.', 'Mark the box if your child will be absent on Friday.'],
    'absent from work / class. Opposite: present. Noun: absence. Mix-up: absence (the noun).',
    ['away']
  ),
  according: L(
    'According is used in according to: according to the map, according to the weather report, according to the rules. It means “as that person or source says”. Following is a cousin for rules. Accordion is a musical instrument — mix-up. Do not write according when you mean accordion, or recording.',
    ['According to this app, the tram stops here for the market.', 'According to the sign, dogs are not allowed on the beach.'],
    'according to + source. Mix-up: accordion (instrument).',
    []
  ),
  ache: L(
    'An ache is a continuous, dull pain: a headache, a toothache, my legs ache (also a verb). Pain is the wider cousin; a sharp pain is usually not called an ache. Each is a different word. Oak is a tree. Do not write ache when you mean each, or oak.',
    ['I had an ache in my shoulder after carrying the case.', 'If the ache gets worse, ask at the chemist.'],
    'a headache / toothache; legs ache. Wider: pain. Mix-up: each, oak.',
    ['pain']
  ),
  act: L(
    'Act means do something, or perform: act quickly, act in a play, act as a guide. Action is the noun. Actor and actress are people. Exact means precise — mix-up. Do not write act when you mean exact, or fact.',
    ['Please act now if you want the last window seat.', 'She acts in a small theatre near the harbour.'],
    'act quickly / act in a play. Noun: action. Mix-up: exact, fact.',
    []
  ),
  action: L(
    'Action is doing something, or a thing done: take action, a plan of action, out of action (not working). Act is the verb. Activity is often a hobby or organised event. Auction is a sale with bids — mix-up. Do not write action when you mean auction, or actor.',
    ['We need action on the broken heating, not another form.', 'The lift is out of action, so use the stairs.'],
    'take action / out of action. Verb: act. Mix-up: auction.',
    []
  ),
  active: L(
    'Active means busy and energetic: an active holiday, stay active, active in the club. Energetic is a cousin. Lazy and inactive are opposites. Activist is a person who campaigns — mix-up. Do not write active when you mean activist, or activity.',
    ['This tour is quite active: lots of walking between museums.', 'She is still active in the parents’ group at school.'],
    'stay active / an active holiday. Opposite: inactive. Mix-up: activist.',
    ['energetic']
  ),
  actress: L(
    'An actress is a woman who acts: a famous actress, a film actress, the actress on stage. Actor is used for men, and often for any performer. Actress is still common in everyday British English. Address is where you live. Do not write actress when you mean actor only, or address.',
    ['The actress waited in the rain for a taxi after the show.', 'An actress from the local company signed our programmes.'],
    'a film / stage actress. Wider person: actor. Mix-up: address.',
    []
  ),
  ad: L(
    'An ad is a short advertisement (informal): a job ad, click the ad, a newspaper ad. Advert is the British cousin; advertisement is the full word. Add is the verb for numbers — same sound. Do not write ad when you mean add, or aid.',
    ['There is an ad for a room to let in the café window.', 'I ignored the pop-up ad and opened the booking page.'],
    'a job ad / newspaper ad. British cousin: advert. Mix-up: add (numbers).',
    ['advert']
  ),
  addition: L(
    'Addition is adding, or something extra: in addition, an addition to the team, simple addition (maths). Extra and also are everyday cousins. Edition is a version of a book or paper — mix-up. Do not write addition when you mean edition, or addiction.',
    ['In addition to the ticket, you need a printed hotel voucher.', 'The new café is a useful addition to the station.'],
    'in addition / an addition to. Maths extra: addition. Mix-up: edition.',
    []
  ),
  adventure: L(
    'An adventure is an exciting, unusual experience: an adventure holiday, a sense of adventure, go on an adventure. Trip is everyday and calmer. Danger is stronger and less fun. Venture as a noun is more business — later. Do not write adventure when you mean venture, or advertisement.',
    ['Camping in the hills was a real adventure in the wind.', 'The children’s museum has an adventure trail in the garden.'],
    'an adventure holiday / go on an adventure. Calmer cousin: trip. Mix-up: venture.',
    []
  ),
  advert: L(
    'An advert is a notice or film that sells something (British): a TV advert, a job advert, skip the advert. Ad is the short informal cousin. Advertisement is the full form. Avert means turn away — later mix-up. Do not write advert when you mean invert, or avert.',
    ['The advert promised free Wi-Fi, but it did not work.', 'A job advert is in the window of the bookshop.'],
    'a TV / job advert (British). Short cousin: ad. Mix-up: avert.',
    ['ad']
  ),
  aeroplane: L(
    'An aeroplane is a flying vehicle with wings (British): by aeroplane, aeroplane tickets, a model aeroplane. Plane is the everyday short form. Aircraft is a wider, more formal cousin. Airport is the place. Airplane is the usual US spelling. Do not write aeroplane when you mean airport, or aeroplane vs helicopter.',
    ['The aeroplane was full, so we had no spare seats together.', 'Children waved at the aeroplane as it came in to land.'],
    'by aeroplane (British). Everyday: plane. US: airplane. Mix-up: airport.',
    ['plane']
  ),
  aged: L(
    'Aged means of the age given: aged 12, children aged under five, a man aged about forty. Age is the noun. Old describes a long life without a number. Agreed is the past of agree — mix-up. Do not write aged when you mean agreed, or age on its own.',
    ['The museum is free for visitors aged 16 and under.', 'A woman aged about thirty asked for the platform number.'],
    'aged 12 / children aged under… Noun: age. Mix-up: agreed.',
    []
  ),
  ahead: L(
    'Ahead means in front, or in the future: straight ahead, go ahead, plan ahead, ahead of us. Behind is a useful opposite. A head (two words) is a body part. Head as a verb means go towards. Do not write ahead when you mean a head, or heard.',
    ['The toilets are straight ahead, past the ticket gates.', 'If we leave now, we stay ahead of the rush hour.'],
    'straight ahead / plan ahead / go ahead. Opposite: behind. Mix-up: a head.',
    []
  ),
  album: L(
    'An album is a set of songs, or a book for photos: a new album, a photo album, stamp album. Record and CD are older cousins for music. Album is not the same as alum (a chemical). Do not write album when you mean album vs column, or album vs autumn.',
    ['I downloaded the album for the long flight.', 'She showed a photo album of last year’s trip.'],
    'a music album / a photo album. Mix-up: autumn, column.',
    []
  ),
  alike: L(
    'Alike means similar: look alike, think alike, they are very alike. Similar is a close synonym. Like as a preposition (like her brother) is related but not the same pattern. Alive means living. Do not write alike when you mean alive, or a like (two words).',
    ['The twin cafés look alike, but only one has Wi-Fi.', 'We think alike about cheap lunch places near the office.'],
    'look alike / they are alike. Synonym: similar. Mix-up: alive.',
    ['similar']
  ),
  alive: L(
    'Alive means living, not dead: still alive, the city comes alive at night (extra, figurative). Living is a cousin. Dead is the opposite. Alike means similar. A live concert uses live as an adjective with a different pattern. Do not write alive when you mean alike, or a live.',
    ['The lost cat was alive and waiting by the bins.', 'The old town comes alive when the market opens.'],
    'still alive / come alive. Opposite: dead. Mix-up: alike, a live.',
    ['living']
  ),
  aloud: L(
    'Aloud means so other people can hear: read aloud, think aloud, laugh aloud. Out loud is a close synonym. Allowed (permitted) sounds the same in many accents — classic mix-up. Loud is the adjective. Do not write aloud when you mean allowed, or a loud (two words).',
    ['The guard read the platform change aloud twice.', 'Please do not think aloud in the exam room.'],
    'read aloud / out loud. Mix-up: allowed (permitted) — same sound.',
    []
  ),
  alright: L(
    'Alright means OK, fine, or unhurt: Are you alright?, I’m alright, that’s alright. All right (two words) is the careful spelling many teachers prefer. Already means before now. All ready means completely prepared. Do not write alright when you mean already, or all ready.',
    ['Are you alright to walk from the station with that case?', 'It’s alright — we can take the next ferry.'],
    'Are you alright? Careful spelling: all right. Mix-up: already.',
    ['ok']
  ),
  amazed: L(
    'Amazed means very surprised: amazed at the view, amazed that, look amazed. Surprised is milder. Amazing describes the thing; amazed describes the person. Amused means finding something funny. Do not write amazed when you mean amused, or amazing (the thing).',
    ['We were amazed at how fast the Metro was.', 'I am amazed that the hostel still had a free bed.'],
    'amazed at / amazed that. Person: amazed. Thing: amazing. Mix-up: amused.',
    ['surprised']
  ),
  amused: L(
    'Amused means finding something funny: look amused, amused by the story, not amused (a little angry — extra). Funny describes the thing. Amazed is surprise, not humour. Amusing is the adjective for the thing. Do not write amused when you mean amazed, or used.',
    ['The driver looked amused when we got on the wrong bus.', 'She was amused by the talking parrot in the market.'],
    'amused by / look amused. Thing: amusing. Mix-up: amazed (surprise).',
    []
  ),
  amusing: L(
    'Amusing means gently funny: an amusing film, an amusing mistake, hardly amusing. Funny can be stronger. Amazing means surprising and impressive. Amusing is not the same as musing (thinking). Do not write amusing when you mean amazing, or amusing vs a musing.',
    ['He told an amusing story about the wrong suitcase.', 'The children’s menu has an amusing map of the zoo.'],
    'an amusing story / film. Stronger cousin: funny. Mix-up: amazing.',
    ['funny']
  ),
  ancient: L(
    'Ancient means very old, from long ago: ancient ruins, an ancient city, ancient history. Old is milder and everyday. Modern is a useful opposite. Antique is an old object you might buy. Accent is how you speak. Do not write ancient when you mean accent, or anxious.',
    ['We queued for photos by the ancient stone gate.', 'The museum explains ancient tools in simple English.'],
    'ancient ruins / city. Milder: old. Opposite: modern. Mix-up: accent.',
    ['old']
  ),
  ankle: L(
    'The ankle is the joint above the foot: twist your ankle, ankle socks, a swollen ankle. Wrist is the joint above the hand. Uncle is a family word — mix-up. Angle is a maths corner. Do not write ankle when you mean uncle, or angle.',
    ['Ice your ankle if it swells after the hill walk.', 'These boots support the ankle better than trainers.'],
    'twist your ankle / ankle socks. Arm cousin: wrist. Mix-up: uncle, angle.',
    []
  ),
  annoy: L(
    'Annoy means make someone a little angry: annoy the neighbours, it annoys me, stop annoying. Irritate is a close cousin. Angry describes the feeling; annoy is the verb that causes it. Enjoy is almost the opposite idea. Do not write annoy when you mean enjoy, or annoy vs any.',
    ['Please do not annoy other guests in the quiet carriage.', 'The constant adverts annoy me on this free Wi-Fi.'],
    'it annoys me / stop annoying. Feeling: angry. Mix-up: enjoy.',
    ['irritate']
  ),
  ant: L(
    'An ant is a small insect that lives in groups: an ants’ nest, picnic ants, a line of ants. Insect is the wider group. Aunt is a parent’s sister — different sound in much of Britain (/ɑːnt/). And is a joining word. Do not write ant when you mean aunt, or and.',
    ['Cover the sandwiches or ants will find them.', 'The nature trail has a board about ants in the wood.'],
    'picnic ants / a line of ants. Mix-up: aunt, and.',
    []
  ),
  antique: L(
    'An antique is a valuable old object: antique furniture, an antique shop, antique jewellery. Ancient describes very old times or ruins, not usually a chair you buy. Unique means one of a kind. Do not write antique when you mean unique, or antic (a silly act).',
    ['We window-shopped in the antique street near the cathedral.', 'This map is antique, so do not fold it roughly.'],
    'an antique shop / furniture. Time cousin: ancient (ruins). Mix-up: unique.',
    []
  ),
  anymore: L(
    'Any more (British, usually two words) means no longer: not any more, do not live here any more. Anymore as one word is common in US English. Any more can also mean extra amounts (any more tea?). Anyone is a person. Do not write any more when you mean anyone, or any less.',
    ['This kiosk does not sell stamps any more.', 'We do not take cash any more — card only.'],
    'not any more (British two words). US often: anymore. Mix-up: anyone.',
    []
  ),
  arms: L(
    'Arms are the two long parts from shoulder to hand: fold your arms, in her arms, arm in arm. Arm is one; arms are two. Hands are at the ends. Army is a military group. Alms is old money for the poor. Do not write arms when you mean army, or alms.',
    ['Keep your arms by your sides on the crowded escalator.', 'He carried the child in his arms through the puddles.'],
    'fold your arms / in her arms. Singular: arm. Mix-up: army.',
    []
  ),
  art: L(
    'Art is paintings, drawings, and creative work: an art gallery, a work of art, art class. Painting is more specific. Heart is the body organ — mix-up. Artist is the person. Do not write art when you mean heart, or cart.',
    ['The free art museum is closed on Mondays.', 'She bought a small work of art in the market.'],
    'an art gallery / art class. Person: artist. Mix-up: heart.',
    []
  ),
  asleep: L(
    'Asleep means sleeping: fall asleep, fast asleep, half asleep. Sleep is the noun or verb. Awake is the opposite. A sleep (two words) is not the usual pattern. Do not write asleep when you mean a sleep, or asleep vs a sheep.',
    ['He fell asleep before the plane even took off.', 'The cabin was quiet; everyone was already asleep.'],
    'fall asleep / fast asleep. Opposite: awake. Mix-up: a sleep (two words).',
    []
  ),
  awake: L(
    'Awake means not sleeping: stay awake, wide awake, still awake. Asleep is the opposite. Wake up is the verb for starting to be awake. Await means wait for — mix-up. Do not write awake when you mean await, or a wake (two words).',
    ['I was still awake when the night train crossed the border.', 'Drink water and walk if you must stay awake on the coach.'],
    'stay awake / wide awake. Opposite: asleep. Verb: wake up. Mix-up: await.',
    []
  ),
  awesome: L(
    'Awesome means very impressive or very good (informal): an awesome view, awesome food, that is awesome. Great and brilliant are cousins. Awful means very bad — easy mix-up because both start with aw-. Do not write awesome when you mean awful, or fearsome.',
    ['The waterfall was awesome after the rain.', 'Thanks — that spare charger is awesome.'],
    'an awesome view (informal). Cousins: great, brilliant. Mix-up: awful (very bad).',
    ['great']
  ),
  backpack: L(
    'A backpack is a bag on your back: pack a backpack, backpack straps, a school backpack. Rucksack is a close British cousin, especially for walking. Suitcase has a handle and often wheels. Paperback is a book. Do not write backpack when you mean paperback, or backpack vs back pack as two ideas.',
    ['Leave your backpack in the locker before the gallery.', 'A light backpack is easier than a suitcase on cobbles.'],
    'pack a backpack / straps. British cousin: rucksack. Mix-up: paperback.',
    ['rucksack']
  ),
  backwards: L(
    'Backwards means towards the back (British usually with -s): step backwards, go backwards, know it backwards (very well — extra). Forwards is the opposite. Backward without -s is also used, especially as an adjective. Back words as two words is different. Do not write backwards when you mean forwards, or backwards vs backwoods.',
    ['Please move backwards to make space in the lift.', 'The film played backwards as a joke on the coach screen.'],
    'step backwards (British -s). Opposite: forwards. Mix-up: backward (adjective).',
    []
  ),
  bake: L(
    'Bake means cook in an oven: bake bread, bake a cake, baking tray. Roast is often for meat; fry uses oil in a pan. Baker is the person. Back is the rear. Bacon is meat. Do not write bake when you mean back, or bacon.',
    ['We can bake the frozen pizza in the hostel oven.', 'Do not bake fish if the kitchen has no extractor — it smells.'],
    'bake bread / a cake. Person: baker. Mix-up: back, bacon.',
    []
  ),
  baker: L(
    'A baker makes bread and cakes, often as a job: the baker on the corner, a baker’s shop, ask the baker. Bakery is the shop. Banker works in a bank — mix-up. Do not write baker when you mean banker, or bakery as if it were the person.',
    ['The baker saved us the last brown loaf.', 'Ask the baker what time the croissants come out.'],
    'the baker / a baker’s shop. Shop: bakery. Mix-up: banker.',
    []
  ),
  bald: L(
    'Bald means little or no hair on the head: go bald, a bald tyre (worn smooth — extra), a bald patch. Hairless is wider. Bold means brave or strong in colour. Ball is a round object. Do not write bald when you mean bold, or ball.',
    ['The bald cyclist wore a hat in the cold wind.', 'Check the tyres — a bald tyre is not safe in the rain.'],
    'go bald / a bald patch. Extra: bald tyre. Mix-up: bold, ball.',
    []
  ),
  ballet: L(
    'Ballet is a story dance with music, or that kind of show: a ballet dancer, go to the ballet, ballet shoes. Dance is the wider word. Ballot is a vote — mix-up. Belly is the stomach. Do not write ballet when you mean ballot, or belly.',
    ['Student tickets for the ballet are cheaper on Wednesday.', 'She packed ballet shoes for the class in the town hall.'],
    'go to the ballet / ballet shoes. Wider: dance. Mix-up: ballot, belly.',
    []
  ),
  band: L(
    'A band is a group of musicians, or a strip of material: a jazz band, a rubber band, a wrist band. Group is a wider cousin. Banned means not allowed — same sound. Bond is a different word. Do not write band when you mean banned, or bend.',
    ['A live band played outside the station at rush hour.', 'Put a rubber band round the postcards so they do not fly off.'],
    'a jazz band / a rubber band. Mix-up: banned (not allowed).',
    []
  ),
  basin: L(
    'A basin is a bowl for washing or holding water: a washbasin, a pudding basin, fill the basin. Sink is a close cousin in the kitchen or bathroom. Bison is an animal. Basement is a floor underground. Do not write basin when you mean bison, or basement.',
    ['The hostel basin was cracked, so we used the other bathroom.', 'Mix the pancake batter in a large basin.'],
    'a washbasin / fill the basin. Cousin: sink. Mix-up: bison, basement.',
    ['sink']
  ),
  bay: L(
    'A bay is a wide curve of coast: a sandy bay, harbour bay, the hotel on the bay. Beach is the sand; a bay is the shape of the land and sea. Buy means purchase — same sound. By is a preposition. Do not write bay when you mean buy, or by.',
    ['We swam in the bay before the wind got up.', 'The map marks a viewpoint above the bay.'],
    'a sandy bay / on the bay. Mix-up: buy, by — same sound as buy.',
    []
  ),
  bee: L(
    'A bee is a flying insect that makes honey: a honey bee, bee sting, busy as a bee. Wasp looks similar but does not make honey. Be is the verb. Bea can be a name. Do not write bee when you mean be, or pea.',
    ['A bee was stuck on the train window in the heat.', 'If you get a bee sting, the chemist can advise you.'],
    'a honey bee / bee sting. Similar insect: wasp. Mix-up: be (the verb).',
    []
  ),
  beginner: L(
    'A beginner has just started to learn: a beginner’s class, complete beginner, beginner’s luck (extra). Learner is a cousin, often for drivers. Expert is an opposite idea. Beginning is the start of something, not the person. Do not write beginner when you mean beginning, or beginner vs winner.',
    ['This ski slope is for beginners, not for races.', 'I am a beginner at Italian, so speak slowly please.'],
    'a beginner’s class / complete beginner. Contrast: expert. Mix-up: beginning (the start).',
    ['learner']
  ),
  beginning: L(
    'The beginning is the start: at the beginning, the beginning of term, from beginning to end. Start and opening are cousins. End is the opposite. Beginner is a person. Begin is the verb. Do not write beginning when you mean beginner, or beginning vs winning.',
    ['At the beginning of the queue they check passports.', 'The film is slow at the beginning, then it improves.'],
    'at the beginning / from beginning to end. Opposite: end. Mix-up: beginner.',
    ['start']
  ),
  bleed: L(
    'Bleed means lose blood: start to bleed, a bleeding cut, my gums bleed. Blood is the noun. Bled is the past tense. Breed means produce young animals. Lead can mean go first. Do not write bleed when you mean breed, or bled as if it were the present.',
    ['If your finger starts to bleed, use the first-aid kit.', 'The cut did not bleed much, but it still needed a plaster.'],
    'start to bleed / a bleeding cut. Noun: blood. Past: bled. Mix-up: breed.',
    []
  ),
  boot: L(
    'A boot is a strong shoe covering the ankle; in British English the boot is also the back of a car for bags: walking boots, winter boots, put it in the boot. Shoe is lower. Boat is for water. Suitcase is luggage. Do not write boot when you mean boat, or booth.',
    ['Wear boots on the muddy path to the fort.', 'The spare tyre is in the boot under the bags.'],
    'walking boots / in the boot (British car). Mix-up: boat, booth.',
    []
  ),
  bullet: L(
    'A bullet is a small metal object fired from a gun: a bullet hole, bullet-proof (extra), museum bullets. Gun is the weapon. Bulletin is a news update — mix-up. Bull is an animal. Do not write bullet when you mean bulletin, or bull.',
    ['The castle museum shows bullets from the old battle.', 'The film warning mentioned guns and bullets.'],
    'a bullet hole / museum bullets. Weapon: gun. Mix-up: bulletin (news).',
    []
  ),
  feeling: L(
    'A feeling is an emotion or a body sensation: a feeling of fear, hurt someone’s feelings, a strange feeling in my knee. Emotion is a more formal cousin. Feel is the verb. Filling is food inside a sandwich — mix-up. Do not write feeling when you mean filling, or falling.',
    ['I had a feeling we were on the wrong platform.', 'Sorry if I hurt your feelings about the shared bill.'],
    'a feeling of / hurt someone’s feelings. Verb: feel. Mix-up: filling.',
    ['emotion']
  ),
  fetch: L(
    'Fetch means go and bring something back: fetch the keys, fetch help, play fetch (with a dog). Bring can be from where you already are; fetch usually includes going. Catch means take something moving. Fetching as “attractive” is old-fashioned. Do not write fetch when you mean catch, or fetch vs stretch.',
    ['Could you fetch a trolley from the rank outside?', 'I will fetch the manager if the card machine fails again.'],
    'fetch the keys / fetch help. Cousin: bring. Mix-up: catch.',
    []
  ),
  fix: L(
    'Fix means repair, or arrange: fix the tap, fix a time, a quick fix. Repair is a close synonym for the first sense. Arrange is the cousin for times. Fox is an animal. Six is a number. Do not write fix when you mean fox, or six.',
    ['Can you fix the Wi-Fi before the video call?', 'Let’s fix a time to meet under the station clock.'],
    'fix the tap / fix a time. Cousins: repair, arrange. Mix-up: fox, six.',
    ['repair']
  ),
  fortnight: L(
    'A fortnight is two weeks (British): a fortnight’s holiday, in a fortnight, every fortnight. Two weeks is the everyday explanation. Fortune means luck or money. Fourteen is a number. Do not write fortnight when you mean fortune, or fourteen.',
    ['The language course lasts a fortnight in July.', 'We will be back in a fortnight, on the same train.'],
    'a fortnight’s holiday / in a fortnight (British = two weeks). Mix-up: fortune, fourteen.',
    []
  ),
  found: L(
    'Found is the past of find: we found the gate, found a seat, found out (learned — extra). Find is the present. Fond means liking someone. Fund is money. Founded means started an organisation — a different verb. Do not write found when you mean fond, or fund.',
    ['I found my passport in the other jacket.', 'We found a quieter café two streets back from the square.'],
    'we found / found a seat. Present: find. Mix-up: fond, fund, founded.',
    []
  ),
  friendship: L(
    'Friendship is the relationship between friends: a close friendship, friendship group, make a friendship. Friend is the person. Relationship is wider (family, work, romance). Friend ship as two words would mean a ship — mix-up. Do not write friendship when you mean friendship vs membership, or friendly (the adjective).',
    ['Their friendship survived three different cities.', 'The club is about sport and friendship, not prizes.'],
    'a close friendship / make friends. Person: friend. Mix-up: friendly, membership.',
    []
  ),
  frighten: L(
    'Frighten means make someone afraid: frighten the birds, don’t frighten her, a frightening noise. Scare is a close synonym. Afraid describes the person. Frozen means icy. Fright is the noun. Do not write frighten when you mean frozen, or freight (goods).',
    ['The thunder will frighten the dog in the waiting room.', 'Do not jump out; you might frighten other hikers.'],
    'don’t frighten / a frightening noise. Synonym: scare. Mix-up: frozen, freight.',
    ['scare']
  ),
  gentleman: L(
    'Gentleman is a polite word for a man: ladies and gentlemen, a gentleman at the desk, gentleman’s agreement (extra). Man is the everyday noun. Lady is the usual pair. Generally means usually. Do not write gentleman when you mean generally, or gentlemen as if it were singular.',
    ['A gentleman returned my wallet at the tram stop.', 'Ladies and gentlemen, the ferry is now boarding.'],
    'ladies and gentlemen / a gentleman. Everyday: man. Mix-up: generally.',
    ['man']
  ),
  gently: L(
    'Gently means in a kind, careful, or soft way: close it gently, speak gently, boil gently. Gentle is the adjective. Softly is a cousin for sound and touch. Gentleman is a person. Do not write gently when you mean gentleman, or gently vs generally.',
    ['Put the eggs in gently so they do not crack.', 'The nurse spoke gently to the tired child.'],
    'close it gently / speak gently. Adjective: gentle. Mix-up: gentleman, generally.',
    ['softly']
  ),
  glove: L(
    'A glove covers the hand with parts for each finger: a pair of gloves, leather gloves, glove compartment (in a car — extra). Mitten has no separate fingers. Globe is the world. Love is the feeling. Do not write glove when you mean globe, or love.',
    ['I dropped a glove on the icy steps by the bank.', 'Wear gloves if you cycle to work in January.'],
    'a pair of gloves / leather gloves. Contrast: mitten. Mix-up: globe, love.',
    []
  ),
  god: L(
    'A god is a being people worship; God with a capital G is the one creator in some religions: thank God, a Greek god, gods and goddesses. Goddess is female in many stories. Good is the adjective. Dog is an animal. Do not write god when you mean good, or dog.',
    ['The museum room is full of statues of old gods.', 'Some passengers whispered a short prayer to God before take-off.'],
    'a Greek god / thank God. Contrast: goddess. Mix-up: good, dog.',
    []
  ),
  golden: L(
    'Golden means made of gold, gold in colour, or excellent: a golden ring, golden light, a golden opportunity (extra). Gold is the metal and colour noun. Garden is outdoor plants. Do not write golden when you mean garden, or golden vs gilded only as a later synonym.',
    ['The golden dome shone above the old town.', 'We arrived in the golden evening light over the river.'],
    'a golden ring / golden light. Noun: gold. Mix-up: garden.',
    []
  ),
  golf: L(
    'Golf is a sport with clubs and a small ball: play golf, a golf course, golf clubs. Course is the grassy place. Gulf is a large sea inlet. Goof is a silly mistake (informal). Do not write golf when you mean gulf, or goof.',
    ['The hotel has a small golf course behind the dunes.', 'He left his golf clubs at the airport desk by mistake.'],
    'play golf / a golf course. Mix-up: gulf (sea), goof.',
    []
  ),
  goodness: L(
    'Goodness is kindness, or the good quality of something; also My goodness! as surprise: the goodness of people, for goodness’ sake, My goodness, it’s late. Good is the adjective. Greatness is being great. Do not write goodness when you mean greatness, or goods (things to sell).',
    ['My goodness — we nearly missed the last tram.', 'She showed goodness by sharing her umbrella in the queue.'],
    'My goodness! / the goodness of. Adjective: good. Mix-up: greatness, goods.',
    []
  ),
  gown: L(
    'A gown is a long dress for a special event, or a loose hospital coat: an evening gown, a hospital gown, a graduation gown. Dress is the everyday cousin. Grown is the past of grow. Down is a direction. Do not write gown when you mean grown, or down.',
    ['She hired a gown for the charity dinner at the hall.', 'Put on the hospital gown and wait behind the curtain.'],
    'an evening / hospital gown. Everyday: dress. Mix-up: grown, down.',
    []
  ),
  grandchild: L(
    'A grandchild is your child’s child: my grandchild, grandchildren (plural), grandchild’s birthday. Grandson and granddaughter are more specific. Grandparent is the other direction in the family. Child is wider. Do not write grandchild when you mean grandparent, or grandchild vs grand child as two words only.',
    ['Their grandchild starts school in September.', 'We bought a toy for our grandchild in the airport shop.'],
    'my grandchild / grandchildren. Specific: grandson, granddaughter. Mix-up: grandparent.',
    []
  ),
  grandparent: L(
    'A grandparent is a parent of your mother or father: visit a grandparent, grandparents’ house, both grandparents. Grandmother and grandfather are more specific. Grandchild is the other direction. Parent is one generation closer. Do not write grandparent when you mean grandchild, or grandparent vs great-parent.',
    ['I stay with a grandparent when I have a Monday exam.', 'Both grandparents came to the station to say goodbye.'],
    'visit a grandparent / grandparents’ house. Specific: grandmother, grandfather. Mix-up: grandchild.',
    []
  ),
  grocery: L(
    'A grocery is a food shop, or food from that kind of shop: a grocery store, grocery shopping, a grocery bag. Groceries (usually plural) means the food items. Greasy means oily. Gross can mean 144 or “disgusting”. Do not write grocery when you mean greasy, or groceries as if it were the shop only.',
    ['The grocery on the corner sells milk after ten.', 'We did a quick grocery shop before the self-catering flat.'],
    'a grocery shop / grocery shopping. Items: groceries. Mix-up: greasy.',
    []
  ),
  gun: L(
    'A gun is a weapon that fires bullets: a toy gun, gun laws, no guns allowed. Weapon is wider. Gum is chewing gum or part of the mouth. Gone is the past participle of go. Do not write gun when you mean gum, or gone.',
    ['Signs at security say no gun or knife in your bag.', 'The history film showed soldiers with old guns.'],
    'no guns allowed / a toy gun. Wider: weapon. Mix-up: gum, gone.',
    []
  ),
  guy: L(
    'A guy is a man in informal English: a guy from work, you guys (sometimes a mixed group), that guy at the desk. Bloke is a British informal cousin. Man is the neutral word. Guide is a person who shows the way. Do not write guy when you mean guide, or gay as if it were the same.',
    ['Ask the guy in the high-vis jacket about the platform.', 'A guy in the queue lent us a phone charger.'],
    'a guy from work (informal). Neutral: man. British cousin: bloke. Mix-up: guide.',
    ['man']
  ),
  fasten: L(
    'Fasten means close or join something so it stays: fasten your seatbelt, fasten the gate, fasten a button. Do up is an everyday British cousin. Unfasten and undo are opposites. Fast means quick — mix-up. Fashion is clothes. Do not write fasten when you mean fast, or fashion.',
    ['Fasten the rucksack straps so they do not swing on the stairs.', 'The cabin crew asked everyone to fasten seatbelts during the storm.'],
    'fasten your seatbelt / a button. Everyday: do up. Opposite: unfasten. Mix-up: fast, fashion.',
    []
  ),
}
