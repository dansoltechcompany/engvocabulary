const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2M = {
  obey: L(
    'Obey means do what a rule, sign, or person tells you: obey the law, obey the teacher, obey a sign. Follow is a close cousin for instructions (follow the instructions). Listen to is about hearing, not always doing. Disobey is the opposite. Do not write obey when you mean okay, or a bay (the sea).',
    ['You must obey the no-smoking sign on the platform.', 'The dog will sit if you teach it to obey.'],
    'obey the law / a sign. Cousin: follow (instructions). Opposite: disobey. Mix-up: okay.',
    ['follow']
  ),
  object: L(
    'An object is a thing you can see or touch: a sharp object, everyday objects, a metal object. Thing is the everyday cousin; object sounds a little more careful or official. Subject is a school topic, or the opposite of object in grammar. Stress on the first syllable for the noun. Do not write object when you mean objection (a complaint), or a verb object /əbˈdʒekt/ (disagree — later).',
    ['Put any sharp objects in your suitcase, not in your hand luggage.', 'The lost-property box is full of small objects from the train.'],
    'a sharp / everyday object. Everyday cousin: thing. Mix-ups: objection, subject.',
    ['thing']
  ),
  ocean: L(
    'An ocean is a huge area of salt water: the Atlantic Ocean, cross the ocean, ocean wildlife. Sea is the everyday cousin, often smaller or closer to land. Lake is fresh water inland. Ocean is countable with names (the Pacific Ocean). Do not write ocean when you mean notion (an idea), or lotion.',
    ['The ferry felt tiny on the ocean in that weather.', 'They flew over the ocean from London to New York.'],
    'the Atlantic Ocean / cross the ocean. Everyday cousin: sea. Inland: lake. Mix-up: notion.',
    ['sea']
  ),
  odd: L(
    'Odd means strange, or a number that is not even: an odd question, odd socks, odd numbers (1, 3, 5). Strange and unusual are cousins for the “not normal” sense. Even is the opposite for numbers. Odds (plural) means chances — a different word already in higher lists. Do not write odd when you mean old, or of.',
    ['He gave an odd answer and then left the room.', 'Circle the odd numbers in this list: 2, 7, 10, 15.'],
    'an odd question / odd numbers. Cousin: strange. Number opposite: even. Mix-up: old, odds.',
    ['strange']
  ),
  offend: L(
    'Offend means upset someone by what you say or do: offend someone, I did not mean to offend you, offend against a rule (more formal). Upset is a wider cousin (can be news, not only words). Offence is the noun (British spelling). Insult is stronger and usually on purpose. Do not write offend when you mean a friend, or offence as if it were the verb.',
    ['A rude joke can offend people on a mixed team.', 'She apologised because she did not want to offend the host.'],
    'offend someone / not mean to offend. Noun: offence (British). Stronger: insult. Mix-up: a friend.',
    []
  ),
  'old-fashioned': L(
    'Old-fashioned means not modern in style or ideas: old-fashioned clothes, an old-fashioned idea, old-fashioned manners. Traditional can be a cousin when the old way is still respected. Modern and fashionable are opposites. Hyphenated. Do not write old-fashioned when you mean old (only age), or fashion as a noun on its own.',
    ['My grandparents still use an old-fashioned alarm clock.', 'That rule feels old-fashioned in an open-plan office.'],
    'old-fashioned clothes / ideas. Cousin: traditional. Opposite: modern. Mix-up: old (age only).',
    []
  ),
  openly: L(
    'Openly means without hiding opinions or feelings: speak openly, openly admit, discuss it openly. Open is the adjective (an open person, an open door). Secretly is an opposite. Honestly is a cousin, but honestly is about truth, not always about being public. Do not write openly when you mean only (sounds similar in fast speech), or open as the verb.',
    ['He talked openly about missing his family abroad.', 'The manager openly disagreed with the new timetable.'],
    'speak / discuss openly. Adjective: open. Opposite: secretly. Mix-up: only.',
    []
  ),
  opera: L(
    'An opera is a stage story that is sung, usually with an orchestra: go to the opera, an opera singer, a comic opera. Musical is a cousin with speaking and popular songs. Play is spoken drama. Concert is music without a full acted story. Do not write opera when you mean operation, or opener.',
    ['We queued for returns outside the opera house.', 'The school trip included a short opera for beginners.'],
    'go to the opera / an opera singer. Cousins: musical, play. Mix-up: operation.',
    []
  ),
  operate: L(
    'Operate means control a machine, or cut a patient in hospital: operate a machine, operate on someone, operate from an office (a company works from there). Use is the everyday cousin for machines (use the printer). Run can mean manage a business. Operation is the noun. Do not write operate when you mean cooperate (work together), or opera.',
    ['Staff will show you how to operate the coffee machine.', 'The surgeon operated on his knee last spring.'],
    'operate a machine / operate on a patient. Everyday: use. Noun: operation. Mix-up: cooperate.',
    []
  ),
  operation: L(
    'An operation is a planned activity, or surgery: a rescue operation, a military operation, have an operation. Surgery is the medical cousin. Operate is the verb. Factory operations means day-to-day work — extra. Do not write operation when you mean opera, or cooperation.',
    ['She is at home after a small operation on her wrist.', 'The snow operation kept one runway open.'],
    'have an operation / a rescue operation. Verb: operate. Medical cousin: surgery. Mix-up: opera.',
    []
  ),
  operator: L(
    'An operator is a person who controls a machine or takes calls: a machine operator, a tour operator, press 9 for the operator. Driver is for vehicles; operator is often factory, lift, or phone. Operate is the verb. Do not write operator when you mean opera, or optician (eyes).',
    ['Call the operator if the line keeps dropping.', 'The ride operator checked every seatbelt.'],
    'a machine / tour / phone operator. Verb: operate. Mix-up: optician.',
    []
  ),
  option: L(
    'An option is a choice you can pick: another option, the cheapest option, have no option. Choice is a close everyday synonym. Alternative is a slightly more formal cousin. Opt (already in the lists) is the short verb. Do not write option when you mean opinion (what you think), or auction.',
    ['A later flight is one option if this one is full.', 'You have two options: cash or card.'],
    'another / cheapest option. Synonym: choice. Mix-up: opinion.',
    ['choice']
  ),
  oral: L(
    'Oral means spoken, not written: an oral exam, oral practice, oral questions. Spoken is the everyday cousin. Written is the contrast. Oral can also mean of the mouth (oral medicine) — extra. Do not write oral when you mean aural (listening — later), or moral.',
    ['The oral test is tomorrow morning in room 12.', 'We did ten minutes of oral practice in pairs.'],
    'an oral exam / practice. Everyday: spoken. Contrast: written. Mix-up: aural, moral.',
    ['spoken']
  ),
  orchestra: L(
    'An orchestra is a large group of classical musicians: a school orchestra, the city orchestra, play in an orchestra. Band is often smaller or pop/jazz. Choir is singers. Opera may use an orchestra in the pit. Do not write orchestra when you mean organiser, or extra.',
    ['The orchestra tuned up before the concert.', 'She plays the violin in the college orchestra.'],
    'a school / city orchestra. Smaller cousin: band. Singers: choir. Mix-up: organiser.',
    []
  ),
  organic: L(
    'Organic describes food grown without artificial chemicals: organic fruit, organic farming, organic cotton. Natural is a looser cousin (not always a legal food label). Ordinary is not the opposite — non-organic or conventional is. Organ is a body part or a keyboard instrument — different word. Do not write organic when you mean organised, or origin.',
    ['The café marks organic items with a green sticker.', 'Organic eggs cost a little more in this shop.'],
    'organic fruit / farming. Looser cousin: natural. Mix-ups: organised, organ.',
    []
  ),
  organiser: L(
    'An organiser is the person who plans an event (British -iser): the trip organiser, contact the organiser, a party organiser. Organise is the verb. Organisation is the group or the act of planning. Diary or planner can mean a book for dates — extra. Do not write organiser when you mean organist (plays the organ), or orchestra.',
    ['Ask the organiser about vegetarian meals on the coach.', 'She is the organiser for Saturday’s job fair.'],
    'the trip / event organiser (British -iser). Verb: organise. Mix-up: organist.',
    []
  ),
  origin: L(
    'Origin is where something begins: country of origin, the origin of a word, unknown origin. Source is a cousin for information or a river. Original is the adjective (the first one). Begin is the everyday verb. Do not write origin when you mean original, or orange.',
    ['Check the country of origin on the food label.', 'The guide explained the origin of the castle ruins.'],
    'country of origin / the origin of. Cousin: source. Adjective: original. Mix-up: orange.',
    []
  ),
  originally: L(
    'Originally means in the beginning, before changes: originally from, originally planned, originally a factory. Original is the adjective. First is a simpler cousin. Now or currently is the contrast. Do not write originally when you mean origin (the noun), or regionally.',
    ['He is originally from Belfast but works in Leeds.', 'The meeting was originally on Monday, then they moved it.'],
    'originally from / originally planned. Adjective: original. Contrast: now. Mix-up: origin (noun).',
    []
  ),
  ought: L(
    'Ought is used with to for advice or duty: you ought to, ought not to, we ought to leave. Should is the everyday synonym. Must is stronger (necessary). Ought always needs to in this A2 pattern (ought to go, not “ought go”). Do not write ought when you mean aught (old word), or out.',
    ['You ought to charge your phone before the journey.', 'We ought not to leave bags unattended.'],
    'ought to + verb. Synonym: should. Stronger: must. Always to. Mix-up: out.',
    ['should']
  ),
  ounce: L(
    'An ounce is a small weight, about 28 grams: two ounces of cheese, an ounce of gold. Gram is the metric cousin used on most British food labels. Pound (lb) is a larger old unit — and pound is also money. Abbreviation: oz. Do not write ounce when you mean once, or owns.',
    ['Add an ounce of chocolate to the sauce.', 'The tiny souvenir weighed only a few ounces.'],
    'two ounces / about 28 grams. Metric cousin: gram. Mix-up: once.',
    []
  ),
  outdoor: L(
    'Outdoor is an adjective before a noun: outdoor shoes, an outdoor pool, outdoor furniture. Outdoors is the adverb (play outdoors). Inside / indoor is the contrast. Outside can be adjective or adverb. Do not write outdoor when you need outdoors after a verb, or outdo (do better — later).',
    ['Hire outdoor chairs for the garden party.', 'The outdoor market is closed in high winds.'],
    'outdoor shoes / pool (adjective). Adverb: outdoors. Contrast: indoor. Mix-up: outdoors after a verb.',
    []
  ),
  outdoors: L(
    'Outdoors means in the open air: eat outdoors, stay outdoors, go outdoors. Outdoor is the adjective (an outdoor café). Inside and indoors are opposites. Outside is a close cousin. Do not write outdoors when you mean outdoor before a noun, or out doors as two words.',
    ['We had lunch outdoors behind the museum.', 'Take the dog outdoors after breakfast.'],
    'eat / play outdoors (adverb). Adjective: outdoor. Opposite: indoors. Mix-up: outdoor + noun.',
    ['outside']
  ),
  outer: L(
    'Outer means on the outside or further from the centre: the outer door, outer London, an outer layer. Inner is the opposite. Outside can be a preposition (outside the shop). Extra is not the same as outer. Do not write outer when you mean utter (complete — later), or other.',
    ['Leave wet umbrellas in the outer porch.', 'The outer islands have fewer buses in winter.'],
    'the outer door / layer. Opposite: inner. Mix-up: other, utter.',
    []
  ),
  outfit: L(
    'An outfit is a set of clothes worn together: a new outfit, a wedding outfit, pack an outfit. Clothes is the wider word. Uniform is a required work or school set. Costume is for the stage or a party character. Do not write outfit when you mean output, or fit as a verb only.',
    ['She bought a dark outfit for the interview.', 'That red scarf completes the whole outfit.'],
    'a new / wedding outfit. Wider: clothes. Work cousin: uniform. Mix-up: output.',
    []
  ),
  outing: L(
    'An outing is a short pleasure trip, often for a group: a school outing, a family outing, a day outing. Trip and excursion are cousins; excursion is a little more formal. Journey stresses travel time. Outing is not “being outed”. Do not write outing when you mean outgoing (friendly — later), or outing vs outings spelling.',
    ['The nursery outing to the farm was cancelled.', 'We planned a Sunday outing to the seaside.'],
    'a school / family outing. Cousins: trip, excursion. Mix-up: outgoing.',
    ['trip']
  ),
  outskirts: L(
    'The outskirts are the edge of a town, furthest from the centre: on the outskirts, the outskirts of Leeds. Centre / city centre is the contrast. Suburb is a cousin for a residential area on the edge. Always plural in this meaning (not “an outskirt”). Do not write outskirts when you mean outside, or skyline.',
    ['The factory is on the outskirts, next to the motorway.', 'Buses from the outskirts take forty minutes.'],
    'on the outskirts of … (plural). Contrast: city centre. Cousin: suburb. Mix-up: outside.',
    []
  ),
  outward: L(
    'Outward describes the going-away part of a trip: the outward journey, outward flight, outward bound. Return is the coming-back contrast (return ticket, return journey). Outwards is the adverb (move outwards). Inside is not the travel opposite. Do not write outward when you mean awkward, or outward as “looking confident” (later extra).',
    ['Keep the outward ticket until you board the return train.', 'The outward ferry was full; the evening boat was quieter.'],
    'the outward journey / flight. Contrast: return. Adverb: outwards. Mix-up: awkward.',
    []
  ),
  owe: L(
    'Owe means you must pay money back, or you should thank someone: owe someone £20, owe an apology, owe it to. Borrow is take; lend is give; owe is still unpaid. Own is a different verb (possess). Do not write owe when you mean own, or oh.',
    ['Do not forget you owe me for the cinema tickets.', 'I owe my neighbour a favour after she watered the plants.'],
    'owe someone money / an apology. Contrast: borrow, lend. Mix-up: own.',
    []
  ),
  owl: L(
    'An owl is a bird with large eyes, often active at night: a barn owl, an owl hooted, wise as an owl (idiom extra). Eagle and hawk are other birds of prey. Howl is the wolf sound — easy mix-up. Do not write owl when you mean howl, or old.',
    ['We heard an owl in the trees behind the campsite.', 'The nature park has a talk about owls at dusk.'],
    'a barn owl / an owl hooted. Mix-up: howl (wolves). Not: old.',
    []
  ),
  pace: L(
    'Pace is the speed of walking or working: a slow pace, at your own pace, keep pace with. Speed is a wider cousin (cars, internet). Step is one movement of the foot. Peace is a different word (no war / calm) — same sound in some accents? No: pace /peɪs/ vs peace /piːs/. Do not write pace when you mean peace, or pass.',
    ['Walk at a gentle pace on the hill path.', 'The course lets beginners learn at their own pace.'],
    'a slow pace / at your own pace. Wider: speed. Mix-up: peace (/piːs/).',
    []
  ),
  package: L(
    'A package is a wrapped parcel: a package in the post, a holiday package (a set deal), open the package. Parcel is a close British cousin. Packet is often smaller (a packet of biscuits). Pack is the verb. Do not write package when you mean packet, or packing (the activity).',
    ['Sign here when the package arrives.', 'They booked a package that included the hotel and coach.'],
    'a package in the post / a holiday package. Cousin: parcel. Smaller: packet. Mix-up: packet.',
    ['parcel']
  ),
  packed: L(
    'Packed means very full: a packed train, packed lunch (food you take), the hall was packed. Full is the everyday cousin; packed feels “no space left”. Empty is the opposite. Pack is the verb; packed is also the past of pack. Do not write packed when you mean packet, or parked.',
    ['The Saturday market was packed by ten o’clock.', 'Take a packed lunch if the café might be closed.'],
    'a packed train / packed lunch. Cousin: full. Verb: pack. Mix-up: parked, packet.',
    ['full']
  ),
  pad: L(
    'A pad is a block of writing paper, or a soft thick piece of material: a writing pad, a mouse pad, a cotton pad. Notebook is a cousin with a cover. Page is one sheet. Pad as a verb (walk softly) is extra later. Do not write pad when you mean paid, or pet.',
    ['There is a pad of forms at the post-office counter.', 'Write your number on the pad beside the till.'],
    'a writing pad / mouse pad. Cousin: notebook. Mix-up: paid.',
    []
  ),
  paddle: L(
    'A paddle is a short oar for a canoe or small boat: pick up a paddle, a kayak paddle. Oar is often longer, for a rowing boat. Paddle as a verb also means walk in shallow water (paddle in the sea) — extra A2 holiday sense. Pedal is for a bicycle — easy mix-up. Do not write paddle when you mean pedal, or puddle.',
    ['Each person in the canoe needs a paddle.', 'The children paddled at the edge of the lake.'],
    'a canoe paddle. Verb extra: paddle in the sea. Mix-ups: pedal (bike), puddle.',
    []
  ),
  painful: L(
    'Painful means causing pain in the body, or strong sadness: a painful knee, a painful memory, painfully slow (adverb extra). Sore is a close cousin for the body. Pain is the noun. Painkiller is medicine. Do not write painful when you mean careful, or pane (window glass).',
    ['The injection was quick but a little painful.', 'It was painful to say goodbye at the airport.'],
    'a painful knee / memory. Cousin: sore. Noun: pain. Mix-up: pane.',
    ['sore']
  ),
  painter: L(
    'A painter paints pictures, or paints rooms and doors: a house painter, a famous painter, the painter’s ladder. Artist is wider (drawing, sculpture too). Decorator is a British cousin for walls and woodwork. Painting is the picture or the activity. Do not write painter when you mean pointer, or printer.',
    ['The painter covered the carpet before he started.', 'Turner was a painter who loved the sea and sky.'],
    'a house painter / a famous painter. Wider: artist. Walls cousin: decorator. Mix-up: printer.',
    []
  ),
  painting: L(
    'A painting is a picture made with paint: a wall painting, an oil painting, painting as a hobby. Drawing uses pencil or pen. Photo is a camera picture. Painter is the person. Uncountable painting can mean the activity. Do not write painting when you mean panting (breathing hard), or pointing.',
    ['This painting shows the old harbour in winter.', 'She took up painting after she retired.'],
    'an oil painting / painting as a hobby. Pencil cousin: drawing. Person: painter. Mix-up: panting.',
    []
  ),
  palace: L(
    'A palace is a grand royal or official home: the royal palace, a palace garden, palace guards. Castle is built for defence, with thick walls; a palace is about splendour. Mansion is a large private house. Place is a different word. Do not write palace when you mean place, or please.',
    ['The tour of the palace includes the state rooms.', 'We had a picnic on the grass outside the palace gates.'],
    'the royal palace / palace gardens. Defence cousin: castle. Mix-up: place.',
    []
  ),
  pale: L(
    'Pale means light in colour, or white in the face from illness or fear: pale blue, look pale, a pale sky. Light is a cousin for colours. Dark is an opposite for colours. Pal is informal for friend — different word. Do not write pale when you mean pail (bucket), or peel.',
    ['You look pale — do you need some water?', 'The walls are pale green, not bright green.'],
    'pale blue / look pale. Colour opposite: dark. Mix-ups: pal, pail.',
    []
  ),
  panic: L(
    'Panic is sudden strong fear that blocks clear thought: in a panic, a moment of panic, don’t panic (also a verb). Fear is the wider feeling; panic is sharp and sudden. Calm down is the useful contrast phrase. Panic can be a verb (they panicked). Do not write panic when you mean picnic, or attic.',
    ['Don’t panic — we still have twenty minutes to the gate.', 'There was panic in the queue when the screens went blank.'],
    'in a panic / don’t panic. Wider: fear. Verb: panic / panicked. Mix-up: picnic.',
    []
  ),
  paperwork: L(
    'Paperwork is official forms and documents: visa paperwork, finish the paperwork, a pile of paperwork. Uncountable in this general sense. Form is one document; paperwork is the lot. Homework is school work. Paper is the material or a newspaper. Do not write paperwork when you mean newspaper, or password.',
    ['The embassy asked for extra paperwork.', 'I hate paperwork, but the insurance needs it.'],
    'visa / insurance paperwork (uncountable). One item: a form. Mix-up: homework, newspaper.',
    []
  ),
  parade: L(
    'A parade is a public line of people or vehicles in the street: a carnival parade, watch the parade, a victory parade. March can be a cousin (often more military). Procession is a more formal cousin. Park is a green space — different. Do not write parade when you mean prayed, or parrot.',
    ['Floats in the parade moved slowly past the town hall.', 'We stood on the pavement to watch the parade.'],
    'a carnival / victory parade. Formal cousin: procession. Mix-up: park, prayed.',
    []
  ),
  paragraph: L(
    'A paragraph is a group of sentences on one idea: the first paragraph, a new paragraph, write two paragraphs. Sentence is smaller; a text or essay is larger. Section can be a bigger part of a book. Graph is a chart — easy mix-up. Do not write paragraph when you mean photograph, or graph.',
    ['Leave a line before the next paragraph.', 'This paragraph explains how to change trains at Crewe.'],
    'the first paragraph / a new paragraph. Smaller: sentence. Mix-up: photograph, graph.',
    []
  ),
  pardon: L(
    'Pardon? is a polite way to ask someone to repeat, or to say a light sorry: Pardon? I beg your pardon. Sorry is the everyday cousin (wider). Excuse me is for getting past someone or starting a question. Forgive is stronger. Do not write pardon when you mean garden, or partner.',
    ['Pardon? This café is too noisy.', 'I beg your pardon — I thought this seat was free.'],
    'Pardon? / I beg your pardon. Cousin: sorry. Getting past: excuse me. Mix-up: garden.',
    ['sorry']
  ),
  parking: L(
    'Parking is leaving a vehicle, or the space for it: free parking, a parking fine, no parking. Park is the verb, or a green space. Car park is the British place. Parking is uncountable in “is there parking?”. Do not write parking when you mean packing, or barking.',
    ['Is parking included with the hotel room?', 'There is no parking on this side after six.'],
    'free parking / a parking fine. Verb: park. British place: car park. Mix-up: packing.',
    []
  ),
  partly: L(
    'Partly means not completely: partly cloudy, partly true, partly because. Partially is a close synonym, a little more formal. Completely and fully are opposites. Part is the noun. Party is a celebration — different word. Do not write partly when you mean party, or portly.',
    ['The museum is partly closed for repairs.', 'I was late partly because of the bus, and partly because I got lost.'],
    'partly cloudy / partly because. Synonym: partially. Opposite: completely. Mix-up: party.',
    ['partially']
  ),
  passage: L(
    'A passage is a narrow corridor, or a short piece of a book: down the passage, a secret passage, read the passage. Corridor is a close building cousin. Hall can be wider. Passenger is a traveller — easy mix-up. Do not write passage when you mean passenger, or message.',
    ['Your room is at the end of this passage.', 'Read the passage and answer questions 1 to 4.'],
    'down the passage / read the passage. Building cousin: corridor. Mix-up: passenger.',
    ['corridor']
  ),
  passion: L(
    'Passion is a very strong feeling of love, anger, or interest: a passion for music, with passion, hidden passion. Hobby is milder (you like it). Love is a cousin for people or activities. Passionate is the adjective. Do not write passion when you mean fashion, or pension.',
    ['Cooking is her passion, not just her job.', 'He argued with passion, then apologised.'],
    'a passion for … / with passion. Milder: hobby. Adjective: passionate. Mix-up: fashion, pension.',
    []
  ),
  passionate: L(
    'Passionate means full of strong feeling: a passionate speech, passionate about, a passionate fan. Keen and enthusiastic are milder cousins. Calm is a contrast. Passion is the noun. Do not write passionate when you mean compassionate (kind — later), or fashionable.',
    ['She is passionate about cycling to work.', 'The captain gave a passionate talk before the match.'],
    'passionate about / a passionate fan. Milder: keen. Noun: passion. Mix-up: compassionate.',
    ['enthusiastic']
  ),
  password: L(
    'A password is a secret code for an account or door: a strong password, forgot my password, change your password. PIN is usually numbers on a card. Username is who you are, not the secret. Pass is a ticket or to succeed — different. Do not write password when you mean passport, or crossword.',
    ['Do not type your password where other people can see.', 'The Wi-Fi password is on the back of the router.'],
    'a strong password / forgot my password. Card cousin: PIN. Mix-up: passport.',
    []
  ),
  paste: L(
    'Paste as a verb means put copied text or a picture into a document: copy and paste, paste the link. Stick is the glue cousin. Cut removes; copy keeps the original. Paste as a noun is thick soft food or glue (tomato paste) — extra. Do not write paste when you mean past, or pace.',
    ['Copy the booking number and paste it into the email.', 'Do not paste whole pages from the internet into your homework.'],
    'copy and paste / paste the link. Contrast: cut. Mix-up: past (time).',
    []
  ),
  pat: L(
    'Pat means touch lightly with a flat hand: pat a dog, pat someone on the back, a gentle pat (noun extra). Stroke is usually slower along the fur. Hit is hard and unkind. Pet can be the animal, or a verb (stroke). Do not write pat when you mean pet, path, or pot.',
    ['He patted his pockets, looking for the keys.', 'Pat the dough lightly — do not press hard.'],
    'pat a dog / pat someone on the back. Slower cousin: stroke. Mix-up: pet, path.',
    []
  ),
  patch: L(
    'A patch is a small different area, or material over a hole: a damp patch, a vegetable patch, sew a patch. Spot and area are cousins. Repair is the verb idea. Path is a walkway — mix-up. Do not write patch when you mean batch, or pitch (sports field).',
    ['There is an icy patch by the station steps.', 'She sewed a patch over the tear in her jeans.'],
    'a damp / icy patch; a vegetable patch. Cousin: spot. Mix-up: path, pitch.',
    []
  ),
  patience: L(
    'Patience is staying calm while you wait or keep trying: have patience, lose patience, it takes patience. Patient is the adjective, or a person in hospital. Impatience is the opposite idea. Patients (people) sounds the same as patience in many accents — spelling mix-up. Do not write patience when you mean patients, or patents.',
    ['Queueing for the ferry takes patience in August.', 'Thank you for your patience during the delay.'],
    'have / lose patience (uncountable). Adjective: patient. Mix-up: patients (hospital).',
    []
  ),
  pause: L(
    'Pause means stop for a short time: pause the video, a short pause (noun), pause for breath. Stop can be final; pause expects to continue. Break is often longer (a tea break). Paws are animal feet — same sound. Do not write pause when you mean paws, or pours.',
    ['Pause the satnav announcement — I need to think.', 'There was a pause before she answered the question.'],
    'pause the video / a short pause. Contrast: stop (maybe final). Mix-up: paws (animals).',
    []
  ),
  payment: L(
    'Payment is money you pay, or the act of paying: card payment, a monthly payment, late payment. Pay is the verb; price is how much something costs. Fee is often for a service. Bill is what you are asked to pay. Do not write payment when you mean pavement, or apartment.',
    ['Online payment is cheaper than paying at the station.', 'They missed a payment and got a reminder letter.'],
    'card / monthly payment. Verb: pay. Mix-up: pavement.',
    []
  ),
  peaceful: L(
    'Peaceful means calm and quiet: a peaceful village, a peaceful night, peaceful protest. Calm is a close cousin for people and weather. Quiet stresses little noise. Peace is the noun. Piece is a part of something — same sound. Do not write peaceful when you mean piece, or powerful.',
    ['The canal path is peaceful in the early morning.', 'We want a peaceful holiday, not a busy city break.'],
    'a peaceful village / night. Cousin: calm. Noun: peace. Mix-up: piece.',
    ['calm']
  ),
  peak: L(
    'A peak is a mountain top, or the busiest time: the mountain peak, peak time, peak season. Top is a simpler cousin. Off-peak is cheaper travel in Britain. Peek means look quickly — same sound. Do not write peak when you mean peek, or pick.',
    ['Avoid peak time on the Underground if you can.', 'Snow still covered the peak in May.'],
    'peak time / season; a mountain peak. British contrast: off-peak. Mix-up: peek (look).',
    []
  ),
  pedal: L(
    'A pedal is what you push with your foot on a bike or machine: a bicycle pedal, press the pedal, a piano pedal. Peddle (sell) is a different verb. Paddle is for a boat. Footrest is not the moving part. Do not write pedal when you mean paddle, or petal (flower).',
    ['The left pedal on my bike is loose.', 'Press the pedal to open the bin with your foot.'],
    'a bicycle / piano pedal. Mix-ups: paddle (boat), petal (flower), peddle (sell).',
    []
  ),
  peel: L(
    'Peel means take the skin off fruit or vegetables: peel an orange, potato peel (noun extra), peel off a sticker. Skin is the noun on the fruit; peel is often the verb or the bits you remove. Pill is medicine — mix-up. Do not write peel when you mean peal (bells), or pale.',
    ['Peel the apple before you put it in the pie.', 'Please put the orange peel in the food bin.'],
    'peel an orange / potato. Noun extra: peel (the skin you remove). Mix-up: pill, pale.',
    []
  ),
  penalty: L(
    'A penalty is a punishment for breaking a rule: a parking penalty, a penalty fee, a penalty in football (a kick). Fine is a cousin when the punishment is money. Punishment is the wider word. Punish is the verb. Do not write penalty when you mean plenty, or penalty vs penalties spelling.',
    ['There is a penalty for taking liquids through security.', 'He scored from the penalty in the last minute.'],
    'a parking penalty / a football penalty. Money cousin: fine. Mix-up: plenty.',
    ['fine']
  ),
  penguin: L(
    'A penguin is a black-and-white sea bird that swims and cannot fly: a penguin colony, penguin chicks. Puffin is another seabird that can fly. Penguin is not a toy brand in this lesson. Do not write penguin when you mean pecan, or pinguin (not the English spelling).',
    ['The zoo talk explained how penguins keep warm.', 'A penguin slid across the ice on its front.'],
    'a penguin colony / chicks. Flying cousin contrast: puffin. Mix-up: wrong spelling pingwin.',
    []
  ),
  percent: L(
    'Per cent means one part in every hundred (British: two words): 50 per cent, per cent of the class, a ten per cent discount. American English often writes percent as one word. Percentage is the noun for the amount (a high percentage). Symbol: %. Do not write per cent when you mean person, or scent.',
    ['Twenty per cent of the tickets are still available.', 'Add a ten per cent tip if the service was good.'],
    '50 per cent (British two words). US: percent. Related noun: percentage. Mix-up: person.',
    []
  ),
  perfectly: L(
    'Perfectly means in a perfect way, or completely: fit perfectly, perfectly clear, perfectly normal. Perfect is the adjective. Completely is a cousin in the “totally” sense. Well is weaker. Do not write perfectly when you mean prefect (a school role), or perfectly as if it were the adjective perfect.',
    ['The spare key fits the lock perfectly.', 'It is perfectly safe to drink the tap water here.'],
    'fit perfectly / perfectly clear. Adjective: perfect. Mix-up: prefect (school).',
    []
  ),
  performance: L(
    'A performance is a show for an audience, or how well someone works: a live performance, an evening performance, job performance. Show and concert are cousins for entertainment. Perform is the verb. Performer is the person. Do not write performance when you mean preference, or perfume.',
    ['The matinee performance is cheaper than the evening one.', 'Her performance at work improved after the training.'],
    'a live / evening performance. Verb: perform. Person: performer. Mix-up: preference.',
    []
  ),
  performer: L(
    'A performer entertains an audience: a street performer, a circus performer, a talented performer. Actor, singer, and dancer are more specific cousins. Audience watches. Performance is the show. Do not write performer when you mean reformer, or perfume.',
    ['A performer juggled in front of the station.', 'The festival pays local performers for the weekend.'],
    'a street / circus performer. Specific cousins: actor, singer. Show: performance. Mix-up: perfume.',
    []
  ),
  personality: L(
    'Personality is the kind of character you have: a friendly personality, a strong personality, personality clash. Character is a close cousin (also a person in a story). Mood is how you feel now, not your usual type. Personal is the adjective (personal letter). Do not write personality when you mean personal, or personnel (staff).',
    ['The form asks you to describe your personality in five words.', 'He has a quiet personality but he is a good leader.'],
    'a friendly / strong personality. Cousin: character. Mix-ups: personal, personnel.',
    ['character']
  ),
  personally: L(
    'Personally introduces your own view, or means you do it yourself: Personally, I think…, deal with it personally, take it personally (feel hurt). Personal is the adjective. In my opinion is a cousin phrase. Personnel is staff — mix-up. Do not write personally when you mean personality, or personally vs personably (later).',
    ['Personally, I would take the earlier coach.', 'The manager phoned me personally to apologise.'],
    'Personally, I… / deal with it personally. Adjective: personal. Mix-up: personnel.',
    []
  ),
  photocopy: L(
    'A photocopy is a paper copy from a machine: make a photocopy, a colour photocopy, photocopy of your passport (also a verb). Copy is the wider word. Print-out may come from a computer, not a copier. Photo is a camera picture. Do not write photocopy when you mean photograph, or photocopier (the machine).',
    ['Bring a photocopy of your ID, not the original card.', 'The library charges 10p a photocopy.'],
    'make a photocopy / of your passport. Wider: copy. Machine: photocopier. Mix-up: photograph.',
    ['copy']
  ),
  photographer: L(
    'A photographer takes photographs as a job or hobby: a wedding photographer, a press photographer, the photographer’s studio. Photography is the activity or art. Photograph / photo is the picture. Camera operator is more about film. Do not write photographer when you mean photocopier, or geography.',
    ['The photographer asked us not to look at the sun.', 'She works as a photographer for the local paper.'],
    'a wedding / press photographer. Picture: photo. Activity: photography. Mix-up: photocopier.',
    []
  ),
}
