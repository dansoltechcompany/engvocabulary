const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2E = {
  poem: L(
    'A poem is a piece of writing that uses rhythm, and often rhyme, to express ideas or feelings: write a poem, a love poem, a poem about the sea. Poetry is the uncountable art; a poem is one countable piece. Verse is a close word; a story in ordinary sentences is prose, not a poem. Do not write “a poetry” for one piece — say a poem.',
    ['He read a short poem at the wedding.', 'The class wrote poems about their hometowns.'],
    'write / read a poem. a poem about + topic. Uncountable art: poetry (not “a poetry”).',
    ['verse']
  ),
  point: L(
    'A point is an idea in a discussion: a good point, make a point, miss the point. It is also a mark in a game: score a point, three points, and the sharp end of something: the point of a pencil. Point can be a verb: point at / to something. Do not mix the discussion meaning with purpose — purpose is why you do it; a point is the idea you are making.',
    ['That is an interesting point; can you say more?', 'The team won by two points.'],
    'make / miss the point. score a point. Verb: point at / to. Contrast: purpose = the reason.',
    []
  ),
  polite: L(
    'Polite means behaving with respect for other people: a polite request, be polite to customers, it is polite to say please. Rude is the opposite; kind is about warmth, while polite is about manners. You are polite to someone, not “polite with” in careful English. Politeness is the noun. Do not use polite for food that tastes good — that is delicious.',
    ['Please be polite when you speak to the receptionist.', 'It is not polite to interrupt.'],
    'be polite to + person. it is polite to + verb. Opposite: rude. Noun: politeness.',
    ['courteous']
  ),
  poor: L(
    'Poor means having little money: a poor family, too poor to buy, grow up poor. It also means low quality: poor English, a poor result, in poor condition. Rich is the money opposite; bad or weak often fit the quality meaning better in careful writing. The poor can mean poor people as a group. Do not say “poor of money” — say poor, or short of money.',
    ['The village was too poor to build a new school.', 'That was a poor excuse for being late.'],
    'a poor family / too poor to + verb. Quality: a poor result. Opposite (money): rich.',
    []
  ),
  power: L(
    'Power is control over people or things: political power, in power, the power to decide. It is also energy that makes machines work: cut the power, a power cut, electric power — uncountable in both uses (some power, not “two powers” unless you mean countries). Strength is more about the body; powerful is the adjective. Do not say “the electricity power” — say the power or the electricity.',
    ['Who has the power to change this rule?', 'We had no power for most of the evening.'],
    'in power / the power to + verb. Electricity: cut the power / a power cut. Adjective: powerful.',
    []
  ),
  present: L(
    'Present as an adjective means now or current: at the present time, the present moment, present-day London — what is happening now, not in the past. Be present means be in the room: all students must be present. Present is also a noun meaning a gift: a birthday present, wrap a present; gift is the close twin, often a little more formal or shop-like. Do not use present for “a gift of talent” at A2. Stress changes with meaning: PRE-sent for the noun/adjective, pre-SENT for the verb “to give.”',
    ['She is not at the office at present.', 'He wrapped a birthday present — a gift for his sister.'],
    'at present / at the present time = now. be present = be there. Noun (gift): a present. Close noun: gift.',
    ['current']
  ),
  private: L(
    'Private means for one person or group, not for everyone: a private letter, a private conversation, private property. Public is the opposite. A private school charges fees; a state school is paid for by the government. In private means not in front of other people. Do not write “a private” for a soldier — that is a later army rank.',
    ['This is a private road; visitors cannot park here.', 'Can we talk in private after class?'],
    'a private letter / conversation. in private. Opposite: public. Contrast: a state school.',
    []
  ),
  prize: L(
    'A prize is something you win for being the best: first prize, win a prize, a prize for writing. Award is a close, often more formal word; a gift is given, not won. Prize is countable: two prizes. A prize-winner is the person. Do not mix prize with price — price is how much something costs.',
    ['He won a prize in the science competition.', 'The first prize was a set of books.'],
    'win / first prize. a prize for + noun / -ing. Not price (cost). Close: award.',
    ['award']
  ),
  produce: L(
    'To produce is to make or grow something: produce cars, produce electricity, a farm that produces wheat. Manufacture is more factory-like; create is more about something new and original. Produce as a noun (PROduce) means farm food — a later stress pattern. Product is the thing that is made. Do not say “produce a baby” in everyday A2 English; say have a baby.',
    ['This factory produces parts for bicycles.', 'The region produces a lot of rice.'],
    'produce + goods / food. Noun (thing made): product. Farm food noun: produce (different stress).',
    ['make']
  ),
  profession: L(
    'A profession is a type of job that needs special training: the teaching profession, join a profession, the medical profession. Job is the everyday word for any work; career is the path over years; occupation is a form-filling word. Professional is the adjective: professional advice. Do not call every job a profession — stacking shelves is a job, not usually a profession.',
    ['Law is a well-paid profession in many countries.', 'She entered the nursing profession at twenty-two.'],
    'a / the … profession. Adjective: professional. Contrast: job (any work), career (over years).',
    ['career']
  ),
  pull: L(
    'To pull is to hold something and move it towards you: pull the door, pull a chair closer, pull your socks up. Push is the opposite: away from you. Pull out means remove or leave; pull up can mean stop a car. Tug is a short, sharp pull. Do not say “pull the button” when you mean press or push it.',
    ['Pull the handle towards you to open the drawer.', 'She pulled her suitcase through the station.'],
    'pull + object towards you. Opposite: push. Phrasal: pull out / pull up.',
    []
  ),
  push: L(
    'To push is to use force to move something away from you: push the door, push a button, push the trolley. Pull is the opposite. Push in can mean join a queue unfairly — rude in British English. A push can be a noun: give it a push. Do not mix push with press for a small button; both occur, but press the button is very common.',
    ['Push the door open; it is heavy.', 'Please do not push in the queue.'],
    'push + object away from you. push a button. Opposite: pull. Noun: a push.',
    []
  ),
  race: L(
    'A race is a competition to see who is the fastest: a running race, win the race, a bicycle race. Race can be a verb: race to the station (hurry). Contest and competition are wider; a race is about speed. The other meaning — groups of people — is later and sensitive; at A2 stay with sport. Do not say “a race of cars” for a car race; say a car race.',
    ['She finished the race in under twenty minutes.', 'There is a boat race on the river every spring.'],
    'win / lose a race. a running / bike / boat race. Verb: race to + place = hurry.',
    []
  ),
  rather: L(
    'Rather means quite, to some degree: rather cold, rather difficult, rather a long way. It also shows preference: I would rather stay in, rather than walk. Fairly and quite are close for the “quite” meaning; prefer is the verb for liking one thing more. Would rather + infinitive without to. Do not write “I rather tea” — say I would rather have tea, or I prefer tea.',
    ['The film was rather long, but I enjoyed it.', 'I would rather take the train than drive.'],
    'rather + adjective = quite. would rather + verb (no to). rather than + noun / verb.',
    ['quite']
  ),
  reach: L(
    'To reach is to arrive at a place: reach the station, reach home, reach the top. Arrive is close, but you arrive at/in a place; you reach a place with no extra preposition. Reach also means stretch your arm: reach for the book, I cannot reach the shelf. Do not say “reach to London” — say reach London or arrive in London.',
    ['We reached the hotel after dark.', 'Can you reach the jar on the top shelf?'],
    'reach + place (no at/in). arrive at / in + place. Stretch: reach for + object.',
    ['arrive']
  ),
  real: L(
    'Real means true, not imagined, copied, or false: a real diamond, a real problem, in real life. Genuine and true are close; fake and false are opposites. Really is the adverb: really good. Realistic means like real life, not the same as real. Do not write “a real money” — money is uncountable: real money.',
    ['Is this a real photograph or computer-made?', 'She has a real talent for languages.'],
    'a real + noun. in real life. Adverb: really. Contrast: fake / false. Not “realistic” = real.',
    ['genuine', 'true']
  ),
  realise: L(
    'To realise is to understand something you did not know before: I realised I was late, realise that…, suddenly realise. British spelling is realise; American is realize. Notice is seeing with your eyes; realise is understanding in your mind. Realise is not the same as make real — that is later, achieve or make happen. Do not write “I realised about it” — say I realised it or I realised that…',
    ['He realised he had taken the wrong bag.', 'I did not realise the shop closed at five.'],
    'realise that… / realise + noun. British: realise. Contrast: notice = see.',
    ['understand']
  ),
  recipe: L(
    'A recipe is a set of instructions for cooking a dish: a cake recipe, follow the recipe, a recipe for soup. Receipt is the shop paper you get after you pay — a common mix-up. Recipe is countable: two recipes. Ingredients are what you put in. Do not say “a cooking receipt” for instructions; that is a recipe.',
    ['This recipe needs three eggs and some flour.', 'I found a simple recipe for lentil soup.'],
    'a recipe for + dish. follow a recipe. Not receipt (the shop paper).',
    []
  ),
  record: L(
    'To record is to store information by writing it down, or to save sound or video: record the meeting, record a song, record your score. The noun RECord is a best result or a stored file: break a record, a medical record. Stress: reCORD (verb), RECord (noun). Register is more official writing of names. Do not confuse record with remember — remember is in your mind; record is stored outside it.',
    ['Please record the new words in your notebook.', 'They recorded the concert for people who could not come.'],
    'Verb: record + noun (reCORD). Noun: a record / break a record (RECord). Contrast: remember.',
    []
  ),
  recycle: L(
    'To recycle is to treat used materials so they can be used again: recycle paper, recycle glass, a recycling bin. Reuse is using the same object again without processing; reduce means use less. Recyclable is the adjective. Rubbish is what you throw away if you do not recycle it. Do not say “recycle the rubbish” for everything — some waste cannot be recycled.',
    ['We recycle plastic bottles at the supermarket.', 'Is this cardboard recyclable?'],
    'recycle paper / glass / plastic. a recycling bin. Contrast: reuse / reduce. Adjective: recyclable.',
    []
  ),
  relationship: L(
    'A relationship is the way two people or groups feel and behave towards each other: a close relationship, a working relationship, a relationship with your sister. Relation can mean a family member; relationship is the connection. RelationSHIP is countable: two relationships. In a relationship often means a romantic couple. Do not say “a relation with” when you mean the connection — use relationship with.',
    ['A good relationship with your teacher helps you learn.', 'They have a difficult relationship at work.'],
    'a relationship with + person. close / working relationship. Family member: a relation.',
    []
  ),
  religion: L(
    'Religion is a system of belief in a god or gods: a religion, follow a religion, talk about religion with respect. Faith is close; belief is wider. Religious is the adjective: a religious festival. Religion can be uncountable for the topic, countable for one system: two religions. Do not mix religion with region — region is an area of land.',
    ['Islam and Christianity are two major religions.', 'Religion is a private matter for many people.'],
    'a religion / follow a religion. Adjective: religious. Not region (an area).',
    ['faith']
  ),
  reply: L(
    'To reply is to say or write something as an answer: reply to an email, reply that…, wait for a reply. Answer is the everyday twin; reply is common with letters, messages, and emails — you reply to someone or something. Reply is also a noun: a quick reply. Do not say “reply the email” — say reply to the email.',
    ['Has she replied to your message yet?', 'I sent a short reply this morning.'],
    'reply to + person / message. Noun: a reply. Close: answer. Not “reply the letter.”',
    ['answer']
  ),
  return: L(
    'To return is to go back to a place, or to give something back: return home, return to work, return a book to the library. Come back and go back are more informal. Return is also a noun: a return ticket (there and back in British English), on his return. Do not say “return back” — return already means back.',
    ['Please return this form by Friday.', 'They returned to the village after the holiday.'],
    'return to + place. return + object to + person/place. Not “return back.” Noun: a return ticket.',
    []
  ),
  ride: L(
    'To ride is to travel on a bicycle, horse, or motorcycle: ride a bike, ride a horse, ride to school. Drive is for a car; you do not “ride a car” in standard English. Ride is also a noun: go for a ride, a bus ride. Catch or take a bus is more common than ride a bus in British English, though ride the bus appears. Do not mix ride with drive.',
    ['She rides her bicycle to college.', 'We went for a ride along the canal.'],
    'ride a bike / horse / motorbike. drive a car. Noun: a ride / go for a ride.',
    []
  ),
  ring: L(
    'A ring is a piece of jewellery worn on a finger: a gold ring, a wedding ring, wear a ring. It is also a circular shape: a ring of people, a smoke ring. Ring is a verb: the phone is ringing, ring someone (British: phone them). Circle is the maths shape; ring is the object or a round band. Do not write “a fingerring” as one word — say a ring.',
    ['He bought her a silver ring for her birthday.', 'Please ring me when you arrive.'],
    'a wedding / gold ring. Verb (British): ring someone = phone. Shape: a ring of…',
    []
  ),
  rock: L(
    'Rock is a hard piece of stone: sit on a rock, a rock by the river, solid rock. It is also a type of loud popular music: rock music, a rock band, play rock. Stone is close for the material; a rock is often a larger piece outdoors. Uncountable for the material, countable for one piece. Do not call a pebble a rock unless it is fairly large.',
    ['The path was blocked by a fallen rock.', 'They listened to rock on the radio.'],
    'a rock / solid rock. Music: rock music / a rock band. Close material: stone.',
    ['stone']
  ),
  roof: L(
    'A roof is the covering on the top of a building: a flat roof, on the roof, a hole in the roof. Ceiling is inside the room, above your head; roof is outside. Roof is countable: two roofs (not “rooves” in modern British English). The roof of the mouth is a later set phrase. Do not say “the roof of the room” for the inside — that is the ceiling.',
    ['Birds were sitting on the roof of the shed.', 'They are repairing the school roof this week.'],
    'on the roof / a hole in the roof. Inside: ceiling. Plural: roofs.',
    []
  ),
  round: L(
    'Round means shaped like a circle or a ball: a round table, a round window, round eyes. Circular is a more formal twin for flat circles; spherical is for balls. Round is also a preposition: walk round the park (British; around is also fine). Around/round the clock means all day. Do not use round for a square shape.',
    ['Cut the pastry into round shapes.', 'We sat at a round table so everyone could talk.'],
    'a round table / window. Preposition (British): round the park. Close: circular.',
    ['circular']
  ),
  rubbish: L(
    'Rubbish is waste that you throw away: put the rubbish in the bin, a rubbish bag, household rubbish. It is uncountable: some rubbish, a pile of rubbish — not “two rubbishes.” American English often says garbage or trash; bin is the British container. Rubbish can also mean “nonsense” in speech: that is rubbish. Do not say “a rubbish” for one bag — say a bag of rubbish.',
    ['Please take the rubbish out before you leave.', 'The street was full of rubbish after the market.'],
    'put rubbish in the bin. Uncountable: some rubbish. US close: garbage / trash.',
    ['waste']
  ),
  rush: L(
    'To rush is to go or do something quickly because you do not have much time: do not rush, rush to the station, rush through the work. Hurry is a close synonym. A rush is a noun: the morning rush, in a rush. Rush hour is busy traffic time. Do not confuse rush with race — a race is a competition; rush is simply going fast.',
    ['We had to rush to catch the last bus.', 'She is always in a rush in the morning.'],
    'rush to + place. in a rush. rush hour. Close: hurry. Noun: a rush.',
    ['hurry']
  ),
  salad: L(
    'A salad is a cold dish of mixed vegetables, often with lettuce: a green salad, a side salad, salad dressing. It is countable for one serving: a salad, two salads; uncountable when you mean the food in general: I like salad. Soup is hot and wet; salad is usually cold and raw or lightly cooked. Do not write “a salad of fruits” as often as a fruit salad — that set phrase is fine.',
    ['Would you like a salad with your pizza?', 'She made a tomato and cucumber salad.'],
    'a green / side salad. salad dressing. Countable: a salad. fruit salad = set phrase.',
    []
  ),
  sale: L(
    'A sale is a time when a shop sells things at a lower price: in the sale, the January sales, on sale. On sale can mean available to buy, or reduced, depending on context; in the sale clearly means cheaper in British shops. Sale is also the act of selling: a house sale. Sail is a boat word — a common spelling mix-up. Do not confuse sale with sell (the verb).',
    ['These coats are cheaper in the sale.', 'The shop has a sale on winter boots.'],
    'in the sale / the sales. on sale. Verb: sell. Not sail (boats).',
    []
  ),
  sandwich: L(
    'A sandwich is two pieces of bread with food between them: a cheese sandwich, pack a sandwich, a sandwich shop. It is countable: two sandwiches. Filling is the food inside. British English often specifies the filling: a ham sandwich, a tuna sandwich. Do not write “a bread sandwich” — the bread is already part of a sandwich.',
    ['I bought a sandwich at the station.', 'Would you like a chicken sandwich or a salad?'],
    'a cheese / ham sandwich. pack a sandwich. Countable: two sandwiches. Filling = the inside.',
    []
  ),
  scene: L(
    'A scene is a part of a play or film: the first scene, a love scene, scene two. It is also the place where something happens: the scene of the accident, a street scene. Scenery is the view of land, uncountable. Seen is the past participle of see — spelling trap. Do not say “a scenery” for one view; say a view or the scenery.',
    ['The next scene takes place in a café.', 'Police arrived quickly at the scene.'],
    'scene one / the first scene. the scene of + event. Not seen (see). Uncountable view: scenery.',
    []
  ),
  score: L(
    'A score is the number of points in a game: the final score, a high score, keep score. Score is also a verb: score a goal, score twenty points. Result can mean the wider outcome; score is the numbers. Music score is a later meaning (written music). Do not say “the score is win” — give the numbers: three–one, or they won 3–1.',
    ['What was the score at half-time?', 'She scored twice in the second half.'],
    'the final score. Verb: score a goal / points. Keep score. Contrast: result = the outcome.',
    []
  ),
  search: L(
    'To search is to look carefully for something: search the house, search for your keys, a search on the internet. Look for is more everyday; search is stronger or more thorough. Search is also a noun: a search for, in search of. Seek is more formal. Do not say “search my keys” without a preposition when you mean look for them — search the bag for the keys, or search for the keys.',
    ['They searched the park for the missing dog.', 'I did a quick search online for the timetable.'],
    'search + place (for + thing). search for + object. Noun: a search. Close: look for.',
    ['look for']
  ),
  season: L(
    'A season is one of the four parts of the year: spring, summer, autumn, winter — the rainy season, in season (fruit that is available and good). Season is also a series of a TV programme: the new season. Weather is the daily condition, not the season. Do not use season for a single month; a season lasts longer. British autumn, not fall, at A2.',
    ['Mangoes are in season in the summer.', 'Which season do you like best?'],
    'spring / summer / autumn / winter. in season. Contrast: weather = day to day. Not US fall.',
    []
  ),
  seat: L(
    'A seat is a place where you can sit: a window seat, take a seat, is this seat free? Chair is a piece of furniture; seat is the place (on a bus, in a cinema, at a table). Sit is the verb. Book a seat means reserve it. Do not say “a sit” for the furniture — say a seat or a chair.',
    ['There are no seats left at the front.', 'Please take a seat; the doctor will see you soon.'],
    'take a seat / a window seat. is this seat free? Chair = the furniture. Verb: sit.',
    []
  ),
  second: L(
    'Second means coming immediately after the first in order: the second time, second place, the second chapter. First, second, third are ordinal numbers. A second is also a unit of time, but at A2 the main adjective meaning is after the first. Secondary school is the next stage after primary. Do not write “the two” when you mean the second one in a list.',
    ['This is the second letter I have sent.', 'She finished in second place in the race.'],
    'the second + noun. second place / the second time. After first, before third. Time unit: a second (later).',
    []
  ),
  secret: L(
    'A secret is something you do not tell other people: keep a secret, a family secret, tell someone a secret. Secret is also an adjective: a secret door, secret information. Private is “not for the public”; secret is “hidden on purpose.” Secrecy is the uncountable noun. Do not say “a secret to me” for something you do not know — say it is a secret from me, or I do not know the secret.',
    ['Can you keep a secret until her birthday?', 'They held a secret meeting after work.'],
    'keep / tell a secret. Adjective: a secret + noun. Contrast: private = not public.',
    []
  ),
  serve: L(
    'To serve is to give food or drink to someone: serve tea, serve dinner, served with rice. It also means do work for others: serve customers, serve in a shop. Service is the noun. Help is wider; serve is the set verb in restaurants and shops. Do not mix serve with service as the verb — you serve people; you do not “service tea.”',
    ['They serve breakfast until ten.', 'A young waiter served us at the window table.'],
    'serve food / drink. serve customers. Noun: service. Not “service the meal” as the verb.',
    []
  ),
  service: L(
    'Service is help or work that a person or company provides: hotel service, customer service, a bus service. It is often uncountable for the quality of help: the service was slow. A service can be countable for a system: a train service to the airport. Serve is the verb. Do not confuse service with serve as the noun — the noun is service.',
    ['The service in that café is always friendly.', 'Is there a regular bus service on Sundays?'],
    'customer / hotel service. a bus / train service. Verb: serve. Often uncountable for quality.',
    []
  ),
  shape: L(
    'A shape is the form of something: a round shape, the shape of a heart, change shape. Circle, square, and triangle are types of shape. Shape can be a verb: shape the dough. Figure is more about a person’s body or a number. Do not say “what shape is the colour” — colour is not a shape.',
    ['Draw any shape you like in the box.', 'The cloud had the shape of a horse.'],
    'a round / square shape. the shape of + noun. Verb: shape + object. Types: circle, square, triangle.',
    ['form']
  ),
  ship: L(
    'A ship is a large boat that carries people or goods across the sea: a passenger ship, the ship arrived, on board the ship. Boat is smaller and more general; a ferry is a ship or boat that goes back and forth. Ship can be a verb: ship goods (send them). Do not call a small river boat a ship.',
    ['The ship left the port at dawn.', 'Goods are shipped across the sea in large ships.'],
    'a passenger / cargo ship. on board. Smaller: boat. Verb: ship goods = send them.',
    ['boat']
  ),
  shock: L(
    'A shock is a sudden, strong feeling of surprise, often unpleasant: a nasty shock, come as a shock, in shock. Shock can be a verb: the news shocked us. Surprise can be pleasant; shock is stronger and often bad. Electric shock is a later, physical meaning. Do not say “I was shock” — say I was shocked or it was a shock.',
    ['Failing the exam came as a shock.', 'She was still in shock after the accident.'],
    'come as a shock. a nasty shock. Adjective: shocked. Contrast: surprise (can be pleasant).',
    []
  ),
  shout: L(
    'To shout is to speak very loudly: shout at someone, shout for help, do not shout. Yell is a close synonym, more informal; whisper is the opposite. A shout is a noun: a shout from the street. Shout at often sounds angry; shout to can mean call so someone hears you, and do not shout in a library is a typical rule.',
    ['There is no need to shout; I can hear you.', 'He shouted for help when he fell.'],
    'shout at (often angry) / shout to (call). shout for help. Noun: a shout. Opposite: whisper.',
    ['yell']
  ),
  shut: L(
    'To shut is to close something: shut the window, shut the door, the shop shuts at six. Close is the everyday twin; shut is very common in British speech. Shut is also an adjective: the door is shut. Shut up is rude (be quiet). Do not mix shut with shoot (a gun or a film).',
    ['Please shut the gate behind you.', 'The museum shuts on Mondays.'],
    'shut the door / window. the shop shuts at… Adjective: shut. Close = synonym. Not shoot.',
    ['close']
  ),
  side: L(
    'A side is one of the two parts of something, or a position next to something: the left side, by the side of the road, both sides. Side can mean a team: whose side are you on? Beside and next to are close for position. A side dish is extra food. Do not say “in the side of the road” — say at the side of the road or by the side of the road.',
    ['She waited at the side of the pitch.', 'There are windows on both sides of the room.'],
    'the left / right side. at / by the side of. a side dish. Team: whose side…?',
    []
  ),
  sign: L(
    'A sign is a board or notice that gives information: a road sign, follow the signs, a no-smoking sign. It is also a movement or fact that means something: a sign of rain, sign language. Sign is a verb: sign your name, sign a form. Signal is often a light or planned message. Do not confuse sign with sine (maths).',
    ['Follow the signs to the car park.', 'Dark clouds are a sign of rain.'],
    'a road / warning sign. a sign of + noun. Verb: sign your name. Close: signal.',
    ['notice']
  ),
  single: L(
    'Single means only one: a single ticket, a single room, every single word. It also means not married or not with a partner: he is still single. Double is a common opposite for rooms and tickets. A single in British trains is one way; a return is there and back. Do not mix single with only — only one ticket is about number; a single ticket is the one-way kind.',
    ['I need a single room for one night.', 'There is a single copy left in the shop.'],
    'a single ticket / room. not married: be single. Opposite (tickets/rooms): return / double.',
    []
  ),
  size: L(
    'Size is how big or small something is: what size, a large size, the size of the room. Size is often uncountable for the idea: size matters; countable for labels: two sizes. Measurement is more technical. A set British question is “What size shoes do you take?” — not “how size is it”; say what size is it or how big is it.',
    ['Do you have this jacket in a smaller size?', 'The two boxes are the same size.'],
    'what size…? in a large / small size. the size of + noun. Not “how size.”',
    []
  ),
  smell: L(
    'To smell is to notice something with your nose, or to have a smell: smell the bread, it smells good, smell of smoke. Smell is also a noun: a strong smell, the smell of coffee. Odour is more formal; scent is often pleasant. Stink is a strong, rude word for a bad smell. Do not say “smell to coffee” — say smell of coffee or the smell of coffee.',
    ['Can you smell gas in the kitchen?', 'The flowers smell lovely in the evening.'],
    'smell + noun / smell of + noun. it smells + adjective. Noun: a smell. Not “smell to.”',
    []
  ),
  smoke: L(
    'Smoke is the grey gas that comes from a fire: thick smoke, smoke from the kitchen, a cloud of smoke. It is uncountable: some smoke, a puff of smoke. Smoke is also a verb: smoke a cigarette. Steam is from hot water, usually white and cleaner-looking. Do not say “a smoke” for the gas from a fire — say some smoke (a smoke can mean a cigarette in informal speech).',
    ['Smoke poured out of the window.', 'I could smell smoke in the corridor.'],
    'thick smoke / a cloud of smoke. Uncountable. Verb: smoke a cigarette. Contrast: steam.',
    []
  ),
  sock: L(
    'A sock is a piece of clothing that covers your foot and ankle: a pair of socks, put on your socks, odd socks (not matching). Socks is the usual plural; we buy them in pairs. Stocking is longer; tights are one piece for both legs (British). Do not say “a socks” — say a sock or a pair of socks.',
    ['He cannot find a matching pair of socks.', 'Take your wet socks off at the door.'],
    'a pair of socks. one sock / two socks. Odd socks = not matching. Not “a socks.”',
    []
  ),
  sofa: L(
    'A sofa is a long, comfortable seat for two or more people: sit on the sofa, a leather sofa, sofa cushions. Settee and couch are close; sofa is the usual modern British word. A chair is for one person; an armchair is a padded chair with arms. Do not call a bed a sofa — a sofa bed folds out, but a sofa is for sitting.',
    ['They fell asleep on the sofa after dinner.', 'Move the sofa closer to the window.'],
    'sit on the sofa. Close: settee / couch. One person: chair / armchair.',
    ['settee', 'couch']
  ),
  soft: L(
    'Soft means not hard, and often pleasant to touch: a soft pillow, soft bread, soft skin. Hard is the opposite; gentle can describe a soft sound or a kind manner: a soft voice. Soften is the verb. Soft can also mean not strict: a soft teacher. Do not use soft for quiet lights — use dim or soft lighting (that collocation is fine).',
    ['This blanket feels soft and warm.', 'She spoke in a soft voice so the baby would not wake.'],
    'a soft pillow / voice. Opposite: hard. Verb: soften. Close for manner: gentle.',
    []
  ),
  soldier: L(
    'A soldier is a person who is a member of an army: a young soldier, soldiers on duty, become a soldier. Army is the group; soldier is one person. Officer is a higher rank. Sailor is in the navy; pilot is in the air. Do not use soldier for the police — that is a police officer.',
    ['The soldiers marched through the town.', 'Her brother trained as a soldier after college.'],
    'a soldier / soldiers. Group: the army. Contrast: sailor (navy), police officer.',
    []
  ),
  someone: L(
    'Someone means some person, not named: someone is at the door, someone left a bag, talk to someone. Somebody is the same in meaning; someone is a little more common in careful writing. Anyone is for questions and negatives: is anyone there? Do not use someone with a plural verb — someone is, not “someone are.”',
    ['Someone has taken my umbrella.', 'I need someone to help me with this box.'],
    'someone + singular verb. Close: somebody. Questions/negatives: anyone / anybody.',
    ['somebody']
  ),
  somewhere: L(
    'Somewhere means in or to a place that is not named: somewhere in the house, go somewhere quiet, somewhere else. Anywhere is for questions and negatives: I cannot find it anywhere. Nowhere means no place. Do not write “some where” as two words. Someplace is mainly American — prefer somewhere in British English.',
    ['Let’s sit somewhere near the window.', 'I must have left my keys somewhere at work.'],
    'somewhere + adjective / in + place. somewhere else. Questions/no: anywhere. Not “some where.”',
    []
  ),
  song: L(
    'A song is a piece of music with words that you sing: sing a song, a folk song, the words of the song. Music can be without words; a song has lyrics. Tune is the melody. Track is a recorded piece. Do not call a whole concert a song — a concert has many songs.',
    ['They taught us a simple song in class.', 'This song was popular last summer.'],
    'sing a song. a pop / folk song. Words: lyrics. Contrast: music (may have no words).',
    []
  ),
  space: L(
    'Space is an empty area: enough space, a parking space, make space for. It is also the area beyond the Earth: outer space, in space, a space station. Room is a close synonym for empty area (uncountable: not enough room). Space is often uncountable for area; a space can be one gap or parking bay. Do not say “a space” for outer space in general — say space.',
    ['Is there any space left at the table?', 'He wants to read about space and the planets.'],
    'enough space / a parking space. outer space / in space. Close (area): room. Uncountable for area.',
    ['room']
  ),
  speed: L(
    'Speed is how fast something moves: high speed, at a speed of, speed limit. It is usually uncountable: speed, not “a speed” unless you mean a particular rate: at a speed of 50 miles per hour. Fast is the adjective; quickly is the adverb. Velocity is a science word. Do not say “the speed is fast” — say the speed is high, or it is going fast.',
    ['The speed limit on this road is thirty.', 'Trains travel at high speed between the two cities.'],
    'at high speed / a speed of + number. speed limit. Adjective: fast. Not “the speed is fast.”',
    []
  ),
  square: L(
    'A square is a shape with four equal sides and four right angles: draw a square, a square table. It is also an open area in a town: the town square, the market square. Square is an adjective: a square room. A plaza is more foreign or American; British towns have a square. Do not mix square with circle.',
    ['Meet me in the main square at noon.', 'Cut the paper into small squares.'],
    'a town / market square. Shape: four equal sides. Adjective: a square table. Contrast: circle.',
    []
  ),
  staff: L(
    'Staff are the people who work for an organisation: hotel staff, teaching staff, a member of staff. In British English staff is often a plural group: the staff are helpful; American English may use a singular verb. A staff member is one person. Do not say “a staff” for one worker — say a member of staff or a staff member. Stuff is a different word meaning things.',
    ['The library staff can help you find a book.', 'All staff must wear a badge.'],
    'a member of staff / hotel staff. Often plural in British English. Not “a staff.” Not stuff.',
    []
  ),
  stairs: L(
    'Stairs are a set of steps in a building: up the stairs, down the stairs, a flight of stairs. Stair can appear in on the bottom stair, but the set is usually stairs. Steps can be outdoors; stairs are typically indoors. A lift (British) or elevator goes up without walking. Do not say “a stairs” — say the stairs or a flight of stairs.',
    ['Mind the stairs; they are steep.', 'She ran down the stairs to answer the door.'],
    'up / down the stairs. a flight of stairs. Outdoors: steps. British: lift (not elevator).',
    ['steps']
  ),
  star: L(
    'A star is a bright point of light in the night sky: the stars, a starry night, look at the stars. It is also a famous person: a film star, a football star. Star can be a verb: she stars in the film. Planet is different: planets orbit the sun; stars are suns. Do not write “a star of rain” — that is not English.',
    ['We could see thousands of stars from the hill.', 'He is a big star in Pakistani television.'],
    'look at the stars. a film / football star. Verb: star in. Contrast: planet.',
    []
  ),
  stay: L(
    'To stay is to remain in a place and not leave: stay at home, stay in a hotel, stay here. Remain is more formal. Stay can be a noun: a short stay. Live is about your home over time; stay is for a visit or for not leaving now. Do not say “stay to home” — say stay at home; stay up means not go to bed.',
    ['We stayed with friends in Manchester.', 'Please stay in your seats until the end.'],
    'stay at home / in a hotel. stay with + person. Noun: a stay. Contrast: live = your home.',
    ['remain']
  ),
  steal: L(
    'To steal is to take something that is not yours without permission: steal a bike, steal from a shop, something was stolen. The past tense is stole; the past participle is stolen. Rob is attack a person or place for money: rob a bank; steal the money. Thief is the person. Do not say “steal someone” for robbery of a person — say rob someone or steal someone’s bag.',
    ['Someone stole her phone on the bus.', 'It is wrong to steal, even a small thing.'],
    'steal + object. steal from + place. Past: stole / stolen. Contrast: rob a person / bank.',
    []
  ),
  step: L(
    'A step is a movement of the foot when you walk: take a step, one step forward, watch your step. It is also one of a set of stairs: the top step, a stone step. Step can be a verb: step over the bag, step outside. Stairs are the whole set; a step is one. Do not mix step with stop.',
    ['Mind the step at the front door.', 'Take a step back from the edge.'],
    'take a step. the top / bottom step. Verb: step over / outside. Set: stairs.',
    []
  ),
  still: L(
    'Still means continuing to happen or be true: it is still raining, still here, are you still awake. It shows that a situation has not stopped. Yet is typical in negatives and questions about up to now: not yet; already means sooner than expected. The adjective still (not moving) is a later use — at A2 keep the continuing meaning, and place still before the main verb or after be: she still lives here, she is still at work.',
    ['He still works at the same shop.', 'Are they still waiting for the bus?'],
    'still + verb = continuing. after be: is still. Contrast: yet (questions/negatives), already.',
    []
  ),
  stone: L(
    'Stone is a hard piece of rock, or the material used for buildings: a stone wall, made of stone, throw a stone. Rock is often a larger natural piece; stone is common for building and for smaller pieces. Uncountable for the material: some stone; countable for one piece: a stone. A stone in British English can also mean a unit of weight — skip that at A2. Do not call a brick a stone; a brick is made, a stone is natural or cut from rock.',
    ['The old church is built of stone.', 'She picked up a small stone from the path.'],
    'made of stone. a stone wall. Uncountable material / countable piece. Close: rock. Not brick.',
    ['rock']
  ),
  store: L(
    'A store is a shop, or a place where things are kept: a food store, a department store, in store (kept). Shop is the everyday British word for a small place to buy things; store is common for larger shops and for storage. Store is also a verb: store data, store food. Storage is uncountable. Do not use store for a tiny corner shop if shop sounds more natural — both are understood.',
    ['There is a large store on the high street.', 'We store the winter coats in this cupboard.'],
    'a food / department store. Verb: store + object. British everyday: shop. Uncountable: storage.',
    ['shop']
  ),
  storm: L(
    'A storm is very bad weather with strong wind, rain, or snow: a thunderstorm, a winter storm, after the storm. Stormy is the adjective. Rain is just water from the sky; a storm is stronger, with wind. A shower is short and light. Do not say “it is storm” — say there is a storm or it is stormy.',
    ['A storm damaged the roof last night.', 'We stayed inside during the storm.'],
    'a thunderstorm / winter storm. Adjective: stormy. Contrast: rain / a shower. Not “it is storm.”',
    []
  ),
  straight: L(
    'Straight means not bent or curved: a straight line, straight hair, go straight on. Direct is close for routes: a straight road, a direct train. Straight away means immediately in British English. The adverb can match the adjective: sit up straight. Do not use straight for “honest” as your first A2 meaning — keep to shape and direction.',
    ['Draw a straight line from A to B.', 'Go straight on until you see the station.'],
    'a straight line / hair. go straight on. British: straight away = immediately. Close: direct.',
    []
  ),
  stranger: L(
    'A stranger is a person you do not know: a complete stranger, do not talk to strangers, a stranger in town. Strange means unusual; a stranger is a person. Foreigner is someone from another country — they may not be a stranger if you know them. Guest is someone you invited. Do not say “a strange” for the person — that is not a noun in this sense.',
    ['A stranger asked for directions at the gate.', 'She felt nervous speaking to a room of strangers.'],
    'a stranger / complete stranger. Adjective: strange = unusual. Contrast: guest, foreigner.',
    []
  ),
  strength: L(
    'Strength is the quality of being strong: physical strength, strength of character, gain strength. It is usually uncountable: strength, not “a strength” unless you mean a good point: her greatest strength. Power can mean energy or control; force is physics or violence. Strong is the adjective. Do not write “strongness.”',
    ['You need strength in your legs for this hill.', 'Patience is her greatest strength as a teacher.'],
    'physical strength. a strength = a good point. Adjective: strong. Not “strongness.” Contrast: power.',
    []
  ),
  study: L(
    'To study is to spend time learning about a subject: study English, study for an exam, study at university. Learn is the result; study is the work you do. Study is also a noun: a study of, in a quiet study (a room). Read is not always study — you can read for fun. Do not say “study about English” — say study English.',
    ['He studies for two hours after dinner.', 'She wants to study medicine next year.'],
    'study + subject. study for an exam. Noun: a study. Contrast: learn = the result. Not “study about.”',
    []
  ),
  style: L(
    'Style is a way of doing, writing, or designing something: a writing style, in the style of, a style of jacket. Fashion is what is popular now; style can be personal and lasting. Stylish is the adjective. Hairstyle is how your hair is cut. Do not mix style with stile (a farm crossing) — different spelling.',
    ['I like the simple style of this poster.', 'Her style of teaching is calm and clear.'],
    'a style of + noun. in the style of. Adjective: stylish. Contrast: fashion = popular now.',
    []
  ),
  subject: L(
    'A subject is an area of knowledge you study at school: a school subject, favourite subject, the subject of history. Maths, English, and science are subjects. Topic is a piece inside a subject; theme is more literary. Subject can also mean the person or thing you are talking about: change the subject. Do not confuse subject with object in grammar until you need that later meaning.',
    ['What subjects are you taking this year?', 'Geography is a new subject for him.'],
    'a school subject. favourite subject. change the subject = talk about something else. Contrast: topic.',
    ['topic']
  ),
}
