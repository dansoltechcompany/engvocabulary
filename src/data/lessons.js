const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS = {
  apple: L(
    'An apple is one of the first food words English learners meet because you can see it, hold it, and eat it. It is a round fruit, usually red, green, or yellow, eaten raw or cooked. In English it is countable: one apple, two apples — and we say “an apple,” not “a apple,” because the sound starts with a vowel.',
    ['Red apples are often sweeter than green ones.', 'She put an apple in her bag for school.'],
    'Use “an” before apple. The plural is apples.',
    ['fruit']
  ),
  answer: L(
    'An answer is what you give after a question — spoken or written. In class, the answer is the correct response; in life, it can simply be a reply. English uses answer as both a noun (“the answer”) and a verb (“to answer”), so listen for which one you need.',
    ['Write your answer on the line.', 'She did not answer the phone.'],
    'Noun: an answer. Verb: answer me / answer the question.',
    ['reply', 'response']
  ),
  ask: L(
    'To ask is to say something because you want information, help, or a favour. Beginners mix it up with “say” and “tell.” You ask a question, you ask someone for something, and you ask someone to do something. You do not “ask a story” — you tell a story.',
    ['Ask the teacher if you do not understand.', 'He asked me for a pen.'],
    'ask + person + for + thing. ask + question.',
    ['enquire', 'request']
  ),
  baby: L(
    'A baby is a very young child, usually before they can walk and talk well. English speakers also use baby as a gentle or loving name, but at A1 you mainly need the literal meaning: a tiny human who needs care. The plural is babies, with -ies.',
    ['The baby is crying.', 'They have a three-month-old baby.'],
    'Plural: babies (y → ies).',
    ['infant']
  ),
  bad: L(
    'Bad is the simple opposite of good. It can describe quality (“bad food”), behaviour (“a bad idea”), or how you feel (“I feel bad”). At A1, keep it concrete. Later you will learn stronger words such as terrible or awful — those are more emotional than bad.',
    ['This milk tastes bad.', 'It was a bad day at school.'],
    'Comparative: worse. Superlative: worst. Not “badder.”',
    ['poor', 'wrong']
  ),
  bag: L(
    'A bag is a container you carry things in — school bag, shopping bag, handbag. It is one of those object words that make daily English possible: put it in your bag, take it out of the bag. In shops, “Would you like a bag?” is a set phrase.',
    ['My books are in my bag.', 'She bought a bag of rice.'],
    'in the bag / into the bag. A bag of + food is common.',
    ['sack']
  ),
  beautiful: L(
    'Beautiful means very nice to look at — a place, a person, or a thing. It is stronger than nice and more emotional than pretty. Learners sometimes overuse it for everything; save it for things that really catch the eye, and use nice or good for ordinary praise.',
    ['The mountains look beautiful at sunset.', 'She has a beautiful voice.'],
    'Beautiful can describe people, places, sounds, and ideas — not only faces.',
    ['lovely', 'pretty']
  ),
  bed: L(
    'A bed is the furniture you sleep on. English loves set phrases with bed: go to bed (start sleeping), in bed (lying there), make the bed (tidy the covers). “Go to the bed” sounds like you are walking toward a piece of furniture; “go to bed” means sleep.',
    ['I go to bed at ten.', 'The cat is on the bed.'],
    'go to bed = sleep. in bed = lying in bed.',
    []
  ),
  big: L(
    'Big means large in size. It is the everyday word; large sounds a little more formal, and huge means very big. At A1, big is enough for houses, bags, problems, and cities. Pair it with small so the contrast is clear in your mind.',
    ['This room is not very big.', 'They have a big family.'],
    'Comparative: bigger. Superlative: biggest.',
    ['large', 'huge']
  ),
  book: L(
    'A book is pages bound together with a story or information. You read a book, open a book, and borrow a book. Later, book is also a verb (“to book a ticket”), but at A1 stay with the noun: something you read.',
    ['This book is easy to read.', 'There are many books on the shelf.'],
    'read a book / a book about + topic.',
    []
  ),
  boy: L(
    'A boy is a male child. Use man for an adult male. In some regions people still say “the boys” for a group of male friends, but in careful A1 English, boy = young male. Pair it with girl so the pair is automatic.',
    ['The boy is ten years old.', 'Boys and girls play in the park.'],
    'boy (child) vs man (adult).',
    []
  ),
  bread: L(
    'Bread is a baked food made from flour, eaten at breakfast and with meals in many countries. In English, bread is usually uncountable: some bread, a piece of bread, a loaf of bread — not “two breads” unless you mean types. That grammar point is as useful as the meaning.',
    ['I eat bread with eggs.', 'Can I have some bread, please?'],
    'Uncountable: some bread. A loaf of bread / a slice of bread.',
    []
  ),
  breakfast: L(
    'Breakfast is the first meal of the day. English names meals clearly: breakfast, lunch, dinner. You have breakfast or eat breakfast. “Break-fast” historically meant ending the night without food — you do not need that to use the word, but it explains the spelling.',
    ['What do you eat for breakfast?', 'Breakfast is ready.'],
    'have breakfast (not usually “take breakfast” in modern English).',
    []
  ),
  brother: L(
    'A brother is a boy or man who has the same parents as you. Family words are core A1: mother, father, sister, brother. Older brother / younger brother is how you show age. The female pair is sister.',
    ['I have two brothers.', 'Her brother lives in another city.'],
    'older brother / younger brother.',
    ['sibling']
  ),
  bus: L(
    'A bus is a large vehicle that carries many people along a route. Learners need the set phrases: by bus, take the bus, wait for the bus, get on / get off the bus. “By bus” describes how you travel; “on the bus” describes where you are.',
    ['I go to school by bus.', 'The bus is late today.'],
    'take the bus / by bus / get on the bus.',
    []
  ),
  buy: L(
    'To buy is to get something by paying money. The opposite is sell. You buy something from a shop, and you buy something for someone. The past tense is bought — not “buyed.” That irregular form is worth drilling early.',
    ['I want to buy some fruit.', 'She bought a new phone yesterday.'],
    'Past: bought. buy + thing + for + person.',
    ['purchase']
  ),
  car: L(
    'A car is a four-wheeled vehicle for people. Travel phrases: by car, in the car, drive a car. You sit in a car, not “on a car” (on is for bikes and buses in some dialects, but standard A1 is in the car).',
    ['They came by car.', 'The car is outside.'],
    'by car / in the car / drive a car.',
    ['automobile']
  ),
  chair: L(
    'A chair is a seat for one person, with a back. A stool often has no back; a sofa seats more than one. Classroom English: sit on the chair / take a chair. You sit on a chair, even though you sit in an armchair.',
    ['Please sit on this chair.', 'There are not enough chairs.'],
    'sit on a chair. An armchair is bigger and softer.',
    ['seat']
  ),
  child: L(
    'A child is a young person, not yet an adult. The irregular plural is children — never “childs.” That one spelling mistake is extremely common, so learn children as a block. Pair with adult and with baby (a baby is a very young child).',
    ['Every child needs care.', 'The children are in the park.'],
    'Plural: children. Not childs.',
    ['kid']
  ),
  city: L(
    'A city is a large town with many people, jobs, and buildings. A town is smaller; a village is smaller still. You live in a city. Names are capitals: Karachi is a city. At A1 this word helps you talk about where you are from.',
    ['Lahore is a big city.', 'They moved to the city for work.'],
    'in the city. city vs town vs village.',
    []
  ),
  class: L(
    'A class is a group of students who learn together, or the lesson itself. “I have English class at nine” and “There are thirty students in my class” are both natural. Classroom is the room; class is the group or the period.',
    ['Our class starts at nine.', 'She is the best student in the class.'],
    'in class = during the lesson. classroom = the room.',
    ['lesson']
  ),
  clean: L(
    'Clean means not dirty. It is also a verb: to clean the room. At A1, the adjective is enough for daily talk: keep it clean, a clean shirt. The opposite is dirty. Cleaner / cleanest follow normal spelling rules.',
    ['Keep your hands clean.', 'This kitchen is very clean.'],
    'Adjective: a clean room. Verb: clean the room.',
    ['tidy']
  ),
  close: L(
    'To close is to shut something so it is not open: close the door, close the window, close your book. The opposite is open. Spelling trap: close (verb, /kləʊz/) vs close (adjective “near,” /kləʊs/). At A1, learn the verb first.',
    ['Please close the window.', 'The shop closes at eight.'],
    'Opposite of open. Past: closed.',
    ['shut']
  ),
  coffee: L(
    'Coffee is a hot brown drink made from coffee beans. Like tea and water, it is usually uncountable: some coffee, a cup of coffee. “A coffee” in a café means one serving. Pair it with tea so you can order both.',
    ['I drink coffee in the morning.', 'Would you like a cup of coffee?'],
    'some coffee / a cup of coffee. Uncountable in general.',
    []
  ),
  cold: L(
    'Cold means at a low temperature — weather, drinks, or how you feel. Opposite: hot. You can say “I am cold” (your body) and “It is cold” (the weather). A cold is also an illness (“I have a cold”), which is a different noun meaning you will meet soon.',
    ['It is cold in January.', 'The water is too cold.'],
    'I am cold vs it is cold. Noun: a cold (illness).',
    ['chilly']
  ),
  colour: L(
    'Colour (US spelling: color) is red, blue, green, and the rest. The A1 question is “What colour is it?” You answer with the colour word as an adjective: It is blue. British English uses colour in this course; both spellings are correct in the world.',
    ['What colour is your bag?', 'I like bright colours.'],
    'What colour is + noun? US spelling: color.',
    []
  ),
  come: L(
    'To come is to move toward the speaker or toward a place we are talking about as “here.” Go is movement away. “Come here” vs “Go there” is the pair to lock in. Come also builds phrases: come in, come back, come from.',
    ['Please come in.', 'They come from Peshawar.'],
    'come here / go there. come from + place.',
    []
  ),
  cook: L(
    'To cook is to make food ready by heating it. A cook (noun) is a person who cooks; a cooker in British English is the oven/stove. At A1, the verb is the priority: cook rice, cook dinner. You cook food; you do not “cook a kitchen.”',
    ['He can cook very well.', 'I cook dinner at seven.'],
    'cook + food. Noun: a cook (person).',
    ['prepare']
  ),
  country: L(
    'A country is a land with its own government — Pakistan, Japan, Brazil. Do not mix it with countryside (rural land). “In my country” is a high-frequency phrase for learners talking about home. The plural is countries.',
    ['Which country are you from?', 'This country has a long history.'],
    'in my country. Plural: countries. countryside = rural area.',
    ['nation']
  ),
  day: L(
    'A day is 24 hours, or the hours when it is light. Core phrases: today, all day, have a good day, one day. Night is the opposite for the dark hours. Days of the week (Monday…) sit on top of this word.',
    ['Have a good day.', 'I work five days a week.'],
    'today / all day / every day (two words) vs everyday (ordinary).',
    []
  ),
  dinner: L(
    'Dinner is the main meal, often in the evening. In some families the midday meal is dinner; in most learner English, dinner = evening meal, lunch = midday. You have dinner. It is a social word as much as a food word.',
    ['Dinner is at eight.', 'We had fish for dinner.'],
    'have dinner. lunch = midday; dinner = main/evening meal in this course.',
    ['supper']
  ),
  dirty: L(
    'Dirty means not clean — clothes, hands, floors, or even a “dirty trick” later on. At A1, keep it physical. Opposite: clean. If something is dirty, you wash it or clean it.',
    ['Your shoes are dirty.', 'Do not sit on the dirty floor.'],
    'Opposite of clean. wash dirty clothes.',
    ['filthy']
  ),
  door: L(
    'A door is what you open to enter a room or building. Phrases: open the door, close the door, at the door, next door (the neighbouring house). Knock on the door is a set action. You go through a door.',
    ['Please open the door.', 'Someone is at the door.'],
    'open/close the door. next door = the neighbour.',
    []
  ),
  drink: L(
    'To drink is to take liquid into your mouth and swallow it. The noun a drink is the thing you drink. Past tense: drank. You drink water, tea, coffee. “Drink” without an object often means alcohol in adult English — at A1, add the liquid: drink water.',
    ['Drink some water.', 'She drinks tea every morning.'],
    'Past: drank. Noun: a drink.',
    []
  ),
  early: L(
    'Early means before the usual or expected time. Opposite: late. You can be early for class, or it can be early in the morning. “Early” is about time position, not about speed (that is fast).',
    ['I woke up early.', 'She is early for the meeting.'],
    'early vs late. early in the morning.',
    []
  ),
  easy: L(
    'Easy means not difficult. Opposite: hard or difficult. An easy question, an easy book. Easier / easiest. Learners overuse easy for people (“an easy person”); for personality, kind or friendly is clearer at A1.',
    ['This exercise is easy.', 'English is not always easy.'],
    'Comparative: easier. Opposite: hard / difficult.',
    ['simple']
  ),
  eat: L(
    'To eat is to put food in your mouth and swallow it. Past: ate. You eat breakfast, eat rice, eat with your family. “Have” also works for meals (have lunch), but eat is the basic action verb.',
    ['Let’s eat now.', 'They eat together at night.'],
    'Past: ate. eat + food. have breakfast/lunch/dinner is also natural.',
    []
  ),
  egg: L(
    'An egg is an oval food from a bird, usually a hen. At breakfast it is boiled, fried, or scrambled. Countable: an egg, two eggs. “Egg” is also a useful classroom object word for a/an practice.',
    ['I had an egg for breakfast.', 'There are six eggs in the box.'],
    'an egg / two eggs. a boiled egg.',
    []
  ),
  english: L(
    'English is the language you are learning, and also the people/culture of England in some uses. At A1, treat it as the language: learn English, speak English, in English. Capital E. “The English” can mean people from England — you do not need that yet.',
    ['She is learning English.', 'Please say it in English.'],
    'Capital E. speak English / in English. Not “the English language” every time — English is enough.',
    []
  ),
  evening: L(
    'Evening is the part of the day after afternoon and before night — roughly when work or school ends and dinner happens. Greetings: good evening (hello at that time), good night (when someone is leaving to sleep). That pair confuses many learners.',
    ['We walk in the evening.', 'Good evening, everyone.'],
    'good evening = hello. good night = goodbye at bedtime.',
    []
  ),
  eye: L(
    'An eye is the body part you see with. Two eyes. Related: eyebrow, glasses. Phrases you will meet later include keep an eye on (watch). At A1, the body meaning is enough: brown eyes, close your eyes.',
    ['She has brown eyes.', 'Close your eyes.'],
    'Plural: eyes. an eye / my eyes.',
    []
  ),
  face: L(
    'Your face is the front of your head: eyes, nose, mouth. Wash your face is daily English. Face is also a verb later (“face a problem”), but A1 needs the body noun. A smile is on your face.',
    ['Wash your face.', 'He has a kind face.'],
    'on your face. wash your face.',
    []
  ),
  family: L(
    'A family is people related to you — often parents and children, sometimes a wider group. My family, a big family. Family is usually a singular group in British English (“My family is…”). It is one of the first topics in any beginner course.',
    ['I love my family.', 'There are five people in my family.'],
    'my family is… (group as one). a family of four.',
    []
  ),
  fast: L(
    'Fast means moving or happening quickly. Opposite: slow. A fast train, a fast runner. Do not confuse fast with early (time on the clock) or with hard (effort). Fast is speed.',
    ['This is a fast car.', 'Don’t speak so fast, please.'],
    'Opposite: slow. Comparative: faster.',
    ['quick']
  ),
  father: L(
    'Father is the more formal word for dad — a male parent. At home many families say dad; forms and school writing often use father. Pair: mother. Possessive: my father’s name.',
    ['My father is a teacher.', 'His father works in a bank.'],
    'dad = informal. father = neutral/formal.',
    ['dad']
  ),
  find: L(
    'To find is to see or get something after looking, or to discover it. Opposite idea: lose. Past: found. You find your keys, find a job, find the answer. “Find out” (learn information) comes a little later; at A1, find + object is the core.',
    ['I cannot find my phone.', 'She found a good book.'],
    'Past: found. lose vs find.',
    ['locate']
  ),
  food: L(
    'Food is what people and animals eat. It is usually uncountable: some food, a lot of food — not “many foods” unless you mean types of cuisine. “The food is good” in a restaurant is a high-frequency line.',
    ['The food smells good.', 'We need to buy food.'],
    'Uncountable in general: some food. foods = types of food.',
    []
  ),
  foot: L(
    'A foot is the body part at the end of the leg. Irregular plural: feet, not foots. You walk on your feet. A foot is also a unit of length later; at A1, stay with the body.',
    ['My left foot hurts.', 'Wash your feet.'],
    'Plural: feet. on foot = walking (travel).',
    []
  ),
  friend: L(
    'A friend is someone you like and enjoy being with, not only family. Best friend, make friends, with a friend. Friendly is the adjective (a friendly person). Friendship is the noun for the relationship — save that for later.',
    ['She is my best friend.', 'I met a new friend at school.'],
    'make friends. a friend of mine (not “a friend of me”).',
    []
  ),
  fruit: L(
    'Fruit is the sweet part of a plant you can eat — apples, mangoes, bananas. Like bread, it is often uncountable: some fruit, a piece of fruit. “Fruits” appears when you mean many kinds. Eat more fruit is health English.',
    ['Eat more fruit.', 'There is fresh fruit on the table.'],
    'some fruit / a piece of fruit. fruits = different kinds.',
    []
  ),
  girl: L(
    'A girl is a female child. Woman is the adult. Pair with boy. In careful English, use woman for adult females; calling an adult a girl can sound rude.',
    ['The girl is reading.', 'The girls are in class.'],
    'girl (child) vs woman (adult).',
    []
  ),
  give: L(
    'To give is to put something in someone’s hand or let them have it. Pattern: give someone something, or give something to someone. Past: gave. Opposite idea: take. Give me the book is basic classroom English.',
    ['Please give me the book.', 'She gave him a pen.'],
    'Past: gave. give + person + thing.',
    ['hand']
  ),
  go: L(
    'To go is to move or travel to a place. Past: went. go to school, go home (no “to” before home), go to bed. Come is toward the speaker; go is away or toward another place. This is one of the most used verbs in English.',
    ['I go to school by bus.', 'Let’s go home.'],
    'Past: went. go home (not go to home). go to + place.',
    []
  ),
  good: L(
    'Good means high quality or what you want — the everyday opposite of bad. A good book, good food, a good idea. Better / best are the irregular comparative forms. “Good” describes nouns; “well” describes verbs (She sings well).',
    ['This is a good film.', 'He is a good friend.'],
    'Comparative: better. Superlative: best. good + noun; well + verb.',
    ['great']
  ),
  hair: L(
    'Hair on the head is usually uncountable in English: long hair, dark hair — not “hairs” unless you mean individual strands. This surprises learners whose language counts hair. She has long hair is the model sentence.',
    ['She has long hair.', 'I need to wash my hair.'],
    'Uncountable for the mass on your head: hair, not hairs.',
    []
  ),
  hand: L(
    'A hand is the body part at the end of the arm. You hold things with your hands. Phrases: wash your hands, raise your hand, in your hand. Later, give me a hand means help me — a useful idiom, but A1 can wait.',
    ['Wash your hands before dinner.', 'The keys are in my hand.'],
    'in my hand / with my hands. raise your hand in class.',
    []
  ),
  happy: L(
    'Happy means pleased and glad. Opposite: sad. You can be happy about something or happy with something. Happier / happiest. At A1 it is a feelings word, not a fancy synonym hunt — glad is close, excited is stronger.',
    ['The children look happy.', 'I am happy to see you.'],
    'happy about / happy with. Opposite: sad.',
    ['glad']
  ),
  hard: L(
    'Hard has two beginner meanings: difficult to do, and firm to touch (not soft). “The test was hard” vs “The chair is hard.” Context tells you which one. Opposite of difficult: easy. Opposite of firm: soft.',
    ['The test was hard.', 'This bread is hard.'],
    'hard = difficult OR firm. Use the sentence to choose.',
    ['difficult']
  ),
  head: L(
    'Your head is the top of the body — brain, eyes, mouth. A headache is pain in the head. Head of the class later means the leader; at A1, body first. Phrases: shake your head (no), nod your head (yes).',
    ['He has a pain in his head.', 'Put this hat on your head.'],
    'a headache. on your head.',
    []
  ),
  help: L(
    'To help is to make something easier for someone. Can you help me, please? is one of the most useful A1 sentences. Help + person + (to) verb: help me carry this. The noun is also help: I need help.',
    ['Can you help me, please?', 'She helped her brother with homework.'],
    'help me + verb. Noun: need help.',
    ['assist']
  ),
  home: L(
    'Home is the place where you live — more about belonging than the building (that is house). go home, at home, come home. No “to” in go home. “House” is the structure; “home” is where your life is.',
    ['Let’s go home.', 'Is your mother at home?'],
    'go home / at home. house = building; home = where you live.',
    []
  ),
  hospital: L(
    'A hospital is where sick or injured people are treated. British English: in hospital (as a patient). American English often uses in the hospital. Doctors and nurses work in a hospital. It is a place word, not a person.',
    ['She works in a hospital.', 'He is in hospital now.'],
    'in hospital (UK, as a patient) vs at the hospital (visiting/working).',
    []
  ),
  hot: L(
    'Hot means high temperature — weather, food, drinks. Opposite: cold. “Hot” food can mean spicy in some English, but at A1 teach temperature first: the tea is hot. Hotter / hottest.',
    ['The tea is too hot.', 'It is hot in June.'],
    'Opposite: cold. I am hot = my body feels heat.',
    ['warm']
  ),
  hotel: L(
    'A hotel is a building where you pay to sleep when you travel. You stay in a hotel, book a hotel, a hotel room. It is not your home. Hostel is cheaper and more shared — a later word.',
    ['We stayed in a small hotel.', 'The hotel is near the station.'],
    'stay in a hotel / at a hotel. book a room.',
    []
  ),
  house: L(
    'A house is a building people live in, often for one family. A flat/apartment is a home inside a larger building. You live in a house. Remember: house = building, home = the feeling/place you belong.',
    ['Their house has a garden.', 'This house is very old.'],
    'in a house. house vs home vs flat.',
    []
  ),
  important: L(
    'Important means you must take it seriously — it matters. Sleep is important. This is an important day. It is stronger than “nice to have.” At A1 it helps you talk about priorities without advanced verbs such as matter or count.',
    ['Sleep is important.', 'This is an important question.'],
    'important for + person. it is important to + verb.',
    ['serious']
  ),
  job: L(
    'A job is paid work. Find a job, a new job, a full-time job. Work can be uncountable (“a lot of work”); a job is countable (“two jobs”). That difference is a classic learner error.',
    ['He has a new job.', 'She is looking for a job.'],
    'a job (countable) vs work (often uncountable).',
    ['work']
  ),
  kitchen: L(
    'A kitchen is the room where you cook. Other rooms: bedroom, bathroom, living room. In the kitchen is the location phrase. You do not “cook a kitchen”; you cook in the kitchen.',
    ['Mum is in the kitchen.', 'Our kitchen is small but clean.'],
    'in the kitchen. cook in the kitchen.',
    []
  ),
  know: L(
    'To know is to have information in your mind. Past: knew. I know the answer. Know a person (be familiar with them) vs know a fact. Meet is for the first time; know is ongoing familiarity.',
    ['I know the answer.', 'Do you know her name?'],
    'Past: knew. know how to + verb.',
    []
  ),
  language: L(
    'A language is the system of words a group of people uses — English, Urdu, Arabic. Learn a language, a first language, in simple language. Language is countable when you mean types: two languages.',
    ['English is an international language.', 'She speaks two languages.'],
    'learn a language / speak a language.',
    []
  ),
  late: L(
    'Late means after the expected time. Opposite: early. Sorry I am late is a survival phrase. The train is late. Late at night means toward the end of the night, not “after the appointment.”',
    ['Sorry I am late.', 'The bus is late today.'],
    'be late for class. Opposite: early.',
    []
  ),
  learn: L(
    'To learn is to get knowledge or a skill. You learn English, learn to swim. Teach is what the teacher does; learn is what the student does. That pair is constantly mixed up. Past: learned (US) or learnt (UK).',
    ['I want to learn English.', 'Children learn by playing.'],
    'learn vs teach. learn to + verb.',
    ['study']
  ),
  like: L(
    'To like is to enjoy something or find it nice. I like tea. Like + -ing: I like reading. Would like is more polite for wants: I would like some water. Don’t confuse like (enjoy) with want (need/wish to have).',
    ['I like tea.', 'She likes her new school.'],
    'like + noun / like + -ing. would like = polite want.',
    ['enjoy']
  ),
  listen: L(
    'To listen is to pay attention to sound on purpose. Hear is when sound reaches your ears without effort. Listen to the teacher / listen to music — the “to” is required. This is a high-frequency grammar trap.',
    ['Please listen to the teacher.', 'I listen to music in the evening.'],
    'listen to + person/thing. hear = notice sound.',
    []
  ),
  live: L(
    'To live means to have your home in a place, or to be alive. They live in Karachi. Pronunciation: /lɪv/ (not like “alive” /laɪv/ the adjective). live with my family. A live concert is a different word with a different vowel.',
    ['They live in Karachi.', 'I live with my parents.'],
    'live in + city. Pronunciation /lɪv/ for the verb.',
    []
  ),
  long: L(
    'Long measures distance or time: long hair, a long road, a long time. Opposite: short. How long…? asks about duration. Do not use long for height of a person (that is tall).',
    ['She has long hair.', 'The film is very long.'],
    'how long does it take? tall for people; long for hair, time, roads.',
    []
  ),
  lunch: L(
    'Lunch is the midday meal. have lunch, lunchtime. Between breakfast and dinner in standard learner English. Packed lunch is food you take to school or work.',
    ['We have lunch at one.', 'I don’t eat a big lunch.'],
    'have lunch. at lunchtime.',
    []
  ),
  make: L(
    'To make is to create or produce something. make a cake, make a mistake, make a plan. Do vs make is a long project; at A1, make = create or cause something to exist. Past: made.',
    ['She can make a cake.', 'Don’t make a noise.'],
    'Past: made. make a mistake / make dinner.',
    ['create']
  ),
  man: L(
    'A man is an adult male. Irregular plural: men. Boy is the child. “Man” in old texts can mean people in general; modern A1 English uses people for mixed groups.',
    ['The man is waiting.', 'Two men are at the door.'],
    'Plural: men. boy → man.',
    []
  ),
  milk: L(
    'Milk is the white liquid from cows (or other animals) used as a drink. Uncountable: some milk, a glass of milk — not “a milk” unless you mean a carton in shop talk. Pair with water, tea, coffee.',
    ['Would you like some milk?', 'There is no milk in the fridge.'],
    'Uncountable: some milk / a glass of milk.',
    []
  ),
  money: L(
    'Money is coins and notes you use to buy things. Uncountable: much money, some money — not “moneys” in everyday English. How much money…? Spend money, save money, pay money for something.',
    ['I do not have much money.', 'This costs a lot of money.'],
    'Uncountable. how much money. pay for + thing.',
    []
  ),
  morning: L(
    'Morning is the early part of the day. Good morning is the greeting. in the morning is the time phrase. It lasts until about noon, then afternoon begins.',
    ['See you in the morning.', 'I drink tea every morning.'],
    'in the morning. good morning.',
    []
  ),
  mother: L(
    'Mother is a female parent. Mum/mom is informal. Pair with father. Possessive: my mother’s bag. One of the first family words, and one of the most emotional.',
    ['My mother is at home.', 'Her mother is a doctor.'],
    'mum/mom = informal. mother = neutral.',
    ['mum', 'mom']
  ),
  music: L(
    'Music is sound organised as songs or pieces — uncountable in English. listen to music, a piece of music. Not “a music” for one song (that is a song). This uncountable rule is the main A1 lesson.',
    ['She loves music.', 'I listen to music when I study.'],
    'Uncountable: music. a song = one piece.',
    []
  ),
  name: L(
    'A name is what someone or something is called. My name is… What’s your name? first name / family name. Call someone by their name. Spell your name is common in offices and hotels.',
    ['My name is Ali.', 'What is the name of this street?'],
    'My name is… What’s your name? first name / last name.',
    []
  ),
  need: L(
    'To need is to require something because it is necessary — stronger than want. I need water. You need to + verb: You need to sleep. Need is about necessity; like is about pleasure.',
    ['I need some water.', 'You need to rest.'],
    'need + noun. need to + verb.',
    ['require']
  ),
  new: L(
    'New means not used or known before. Opposite: old. a new phone, a new student. Newer / newest. Brand-new means completely new. At A1, new vs old is the pair.',
    ['I have a new phone.', 'This is a new word for me.'],
    'Opposite: old. a new + noun.',
    []
  ),
  nice: L(
    'Nice is a friendly, general word for pleasant or kind — a nice person, a nice day, a nice meal. It is weaker than beautiful and less precise than kind, but it is safe A1 praise. Don’t let it replace every adjective forever.',
    ['She is a nice person.', 'Have a nice day.'],
    'a nice + noun. Have a nice day = set goodbye.',
    ['pleasant', 'kind']
  ),
  night: L(
    'Night is the dark time when most people sleep. Opposite of day for light vs dark. at night, last night, good night. Good evening is hello; good night is when you leave to sleep.',
    ['Good night.', 'I don’t go out at night.'],
    'at night. last night. good night ≠ good evening.',
    []
  ),
  number: L(
    'A number is a symbol or word for an amount: 1, 2, 3. phone number, a number of (some). What’s your number? in shops and offices. Countable: two numbers.',
    ['What is your phone number?', 'Write the number on the page.'],
    'phone number. a number of + plural noun = some.',
    []
  ),
  old: L(
    'Old means having lived or existed a long time. Opposite: new (things) or young (people). an old building, an old friend. For people, how old are you? — not “how many years you have.”',
    ['This is an old building.', 'How old are you?'],
    'how old are you? old vs young (people); old vs new (things).',
    []
  ),
  open: L(
    'To open is to move something so it is not shut. Opposite: close. open the door, open your book, the shop is open (adjective). The same spelling works as verb and adjective; the sentence shows which.',
    ['Please open the window.', 'The shop is open now.'],
    'Verb: open the door. Adjective: the shop is open.',
    []
  ),
  park: L(
    'A park is public green land for walking and play. in the park. A car park is where you leave cars (US: parking lot). At A1, the green place is the core meaning. Play in the park.',
    ['The children play in the park.', 'Let’s walk in the park.'],
    'in the park. car park = place for cars.',
    []
  ),
  pen: L(
    'A pen is a tool that writes with ink. A pencil writes with graphite and can be erased. Can I borrow your pen? is classroom survival English. Countable: a pen, two pens.',
    ['Can I borrow your pen?', 'This pen does not work.'],
    'a pen vs a pencil. write with a pen.',
    []
  ),
  people: L(
    'People is the usual plural of person — men, women, and children together. Irregular: one person, two people (not “peoples” unless you mean nations). Many people live here.',
    ['Many people live in this city.', 'The people in my class are kind.'],
    'person → people. Not “peoples” for a group of humans.',
    []
  ),
  phone: L(
    'A phone is the device you use to call or message. on the phone, by phone, my phone is in my bag. Mobile phone / cell phone are longer names; phone is enough at A1. Answer the phone.',
    ['My phone is in my bag.', 'I’ll call you on the phone.'],
    'on the phone. answer the phone. a phone number.',
    ['mobile']
  ),
  play: L(
    'To play is to do something for fun or to take part in a game. play football, play a game. Play the piano uses “the” for instruments. Play with a friend. Noun: a play (theatre) is a later meaning.',
    ['The children play after school.', 'He plays cricket.'],
    'play + sport (no “the”). play the + instrument.',
    []
  ),
  please: L(
    'Please makes a request polite. Sit down, please. Please help me. It does not mean “please” as in “give pleasure” at A1 — it is a politeness marker. Pair with thank you.',
    ['Sit down, please.', 'Can I have some water, please?'],
    'Put please at the start or end of a request.',
    []
  ),
  problem: L(
    'A problem is something difficult or wrong that needs a solution. We have a problem. no problem is a friendly reply to thank you. Solve a problem comes soon after A1. It is more serious than a small question.',
    ['We have a problem with the car.', 'What’s the problem?'],
    'a problem with + noun. no problem = you’re welcome.',
    ['issue']
  ),
  question: L(
    'A question is what you ask to get information. Ask a question, answer a question, a question about English. Question mark (?) ends it in writing. Pair with answer.',
    ['Do you have a question?', 'That is a good question.'],
    'ask a question / answer a question. about + topic.',
    []
  ),
  rain: L(
    'Rain is water that falls from the sky. Uncountable: some rain, in the rain. It is raining is the weather pattern. A rainy day uses the adjective. Don’t say “a rain” for weather.',
    ['I don’t like rain.', 'It is raining now.'],
    'it is raining. in the rain. Uncountable.',
    []
  ),
  read: L(
    'To read is to look at words and understand them. Present: /riːd/. Past: read, spelled the same, pronounced /red/. read a book, read about a topic. It is a core school verb.',
    ['I read every evening.', 'She is reading a story.'],
    'Past spelled read, pronounced /red/. read a book.',
    []
  ),
  remember: L(
    'To remember is to keep something in your mind, or bring it back. Opposite: forget. remember + noun, remember to + verb (don’t forget the action), remember + -ing (a memory). At A1, remember my name is enough.',
    ['Do you remember her name?', 'Remember to lock the door.'],
    'remember vs forget. remember to + verb = don’t forget to do it.',
    []
  ),
  rice: L(
    'Rice is small grains cooked and eaten as a staple food. Uncountable: some rice, a bowl of rice — not “a rice” or “two rices.” This matches bread, water, and fruit in beginner grammar.',
    ['We eat rice with vegetables.', 'The rice is ready.'],
    'Uncountable: some rice / a bowl of rice.',
    []
  ),
  right: L(
    'Right means correct, and also the side opposite left. That is the right answer. Turn right. Two meanings share one spelling; the sentence tells you which. Opposite of correct: wrong. Opposite of right-side: left.',
    ['That is the right answer.', 'The shop is on the right.'],
    'right = correct OR the right-hand side.',
    ['correct']
  ),
  room: L(
    'A room is a space in a building with its own walls. bedroom, living room, my room. There is room for… can also mean space, even without walls. At A1, start with the enclosed space.',
    ['This is my room.', 'The next room is the kitchen.'],
    'in my room. living room / bedroom.',
    []
  ),
  run: L(
    'To run is to move quickly on your feet — faster than walk. Past: ran. Don’t run in the corridor. Run can later mean manage (“run a shop”); A1 is physical movement.',
    ['Don’t run in the corridor.', 'She runs every morning.'],
    'Past: ran. run vs walk.',
    []
  ),
  sad: L(
    'Sad means unhappy. Opposite: happy. look sad, a sad story. Sadder / saddest. It is a basic feeling word; later you will add upset, miserable, depressed with more care.',
    ['He looks sad today.', 'Why are you sad?'],
    'Opposite: happy. feel sad / look sad.',
    ['unhappy']
  ),
  school: L(
    'A school is where children go to learn. go to school (as a student, often no “the” in British English), at school, after school. A university is for older students. Teacher and student live in this word family.',
    ['My school is near my house.', 'She is at school now.'],
    'go to school / at school. after school.',
    []
  ),
  see: L(
    'To see is to notice with your eyes. Past: saw. See vs look vs watch: see = notice; look = point your eyes on purpose; watch = look for some time (a film). Can you see the bus?',
    ['Can you see the bus?', 'I saw my friend yesterday.'],
    'Past: saw. see vs look at vs watch.',
    []
  ),
  sell: L(
    'To sell is to give something to someone for money. Opposite of buy. Past: sold. They sell fruit in the market. A shop sells things. You sell something to someone.',
    ['They sell fruit in the market.', 'He sold his old phone.'],
    'Past: sold. sell vs buy.',
    []
  ),
  shop: L(
    'A shop is a place where you buy things (US: store). at the shop, a food shop. Shop is also a verb: go shopping. At A1, the place noun is the core. The person is a shop assistant.',
    ['There is a shop on the corner.', 'This shop sells books.'],
    'at the shop. go shopping (verb phrase).',
    ['store']
  ),
  short: L(
    'Short is small in length or time. Opposite of long. short hair, a short film, a short time. For people, short describes height (not long). How long is the film? A short one.',
    ['He has short hair.', 'Let’s take a short walk.'],
    'short vs long. short people (height) vs short hair (length).',
    []
  ),
  sister: L(
    'A sister is a girl or woman with the same parents as you. Pair: brother. older sister / younger sister. One of the core family nouns.',
    ['My sister lives in Islamabad.', 'She has three sisters.'],
    'older / younger sister.',
    ['sibling']
  ),
  sit: L(
    'To sit is to rest with your bottom on a chair or the ground. Opposite idea: stand. sit down is the polite classroom command. Past: sat. sit on a chair / sit in an armchair.',
    ['Please sit down.', 'They sat under the tree.'],
    'Past: sat. sit down. sit on a chair.',
    []
  ),
  sleep: L(
    'To sleep is to rest with your eyes closed, usually at night. Past: slept. go to sleep, sleep well. Sleep as a noun: need more sleep. It is both a health word and a daily-routine word.',
    ['I sleep eight hours.', 'The baby is sleeping.'],
    'Past: slept. go to sleep. Noun: sleep.',
    []
  ),
  slow: L(
    'Slow means not fast. a slow bus, speak slowly (adverb). Opposite: fast. Slow down is the phrasal verb you will hear in traffic and in class.',
    ['The internet is slow today.', 'Please speak slowly.'],
    'slow (adjective) vs slowly (adverb). Opposite: fast.',
    []
  ),
  small: L(
    'Small means little in size. Opposite of big. a small room, a small child. Smaller / smallest. Tiny is even smaller. Use small for objects and rooms; for people, young or little child may be kinder than small adult.',
    ['This is a small room.', 'I have a small bag.'],
    'Opposite: big. Comparative: smaller.',
    ['little']
  ),
  speak: L(
    'To speak is to say words; to talk. speak English, speak to someone, speak loudly. Talk is more informal and often about conversation; speak is also used for languages. Past: spoke.',
    ['She can speak English.', 'Please speak more slowly.'],
    'Past: spoke. speak + language. speak to + person.',
    ['talk']
  ),
  stand: L(
    'To stand is to be on your feet, not sitting. stand up is the movement. Past: stood. Please stand up. You stand in a queue. Opposite posture: sit.',
    ['Please stand up.', 'We stood at the door.'],
    'Past: stood. stand up vs sit down.',
    []
  ),
  start: L(
    'To start is to begin. Opposite: stop. The class starts at nine. start + -ing / start to + verb. Begin is a close synonym, a little more formal.',
    ['The class starts at nine.', 'Let’s start now.'],
    'start at + time. Opposite: stop / finish.',
    ['begin']
  ),
  station: L(
    'A station is where trains or buses stop — train station, bus station. Meet me at the station. A police station is a different kind of station; the travel meaning is A1 core.',
    ['Meet me at the station.', 'The train station is not far.'],
    'at the station. train station / bus station.',
    []
  ),
  stop: L(
    'To stop is to not continue. Please stop talking. The bus stopped. Opposite of start. a bus stop is the place. Stop + -ing: stop talking means end the action.',
    ['Please stop talking.', 'The rain stopped.'],
    'stop + -ing. a bus stop (place).',
    []
  ),
  story: L(
    'A story is a description of events, real or imagined. tell a story, read a story, a short story. Story and store (shop) look similar — different words. History is the real past of the world; a story can be invented.',
    ['Tell me a story.', 'This story is for children.'],
    'tell a story. story vs history vs store.',
    ['tale']
  ),
  street: L(
    'A street is a road in a town with buildings along it. live on this street, across the street. A road can be between towns; a street is typically in a city. Street names are proper nouns: Mall Road.',
    ['They live on this street.', 'Cross the street carefully.'],
    'on + street name. street vs road.',
    ['road']
  ),
  student: L(
    'A student is a person who is studying. a university student, a good student. Pupil is sometimes used for schoolchildren in British English. Teacher is the pair.',
    ['She is a university student.', 'The students are in class.'],
    'a student of English. school/university student.',
    ['pupil']
  ),
  sun: L(
    'The sun is the star that gives light and heat to the Earth. the sun (usually with the). sunshine, sunny. Don’t look at the sun. It is a weather and nature word at A1.',
    ['The sun is bright today.', 'The sun comes up in the morning.'],
    'the sun. sunny (adjective).',
    []
  ),
  table: L(
    'A table is furniture with a flat top and legs. on the table, at the table (for meals). You eat at the table; you put keys on the table. A desk is for work and study.',
    ['The keys are on the table.', 'Dinner is on the table.'],
    'on the table vs at the table. table vs desk.',
    []
  ),
  take: L(
    'To take is to move something with you, or to accept it. take an umbrella, take the bus, take a photo. Past: took. It has many uses; at A1 learn take + object and take the bus.',
    ['Take an umbrella.', 'I take the bus to school.'],
    'Past: took. take the bus. take a photo.',
    []
  ),
  tea: L(
    'Tea is a hot drink made from tea leaves — uncountable: some tea, a cup of tea. In many cultures it is social, not only a drink. Pair with coffee. “Tea” can also mean a light afternoon meal in British English; A1 can ignore that.',
    ['Would you like a cup of tea?', 'I drink tea in the evening.'],
    'a cup of tea / some tea. Uncountable.',
    []
  ),
  teacher: L(
    'A teacher is a person whose job is to help students learn. my English teacher, a teacher at my school. Teach is the verb. The classroom triangle is teacher, student, class.',
    ['Our teacher is kind.', 'She wants to be a teacher.'],
    'a teacher of English / an English teacher.',
    []
  ),
  think: L(
    'To think is to use your mind. I think this is right. think about a problem. Past: thought. I think is how you give an opinion at A1. Don’t confuse think (mind) with remember (memory).',
    ['I think this is right.', 'Let me think.'],
    'Past: thought. think about + topic. I think = opinion.',
    []
  ),
  time: L(
    'Time is minutes and hours, or a moment on the clock. What time is it? on time (not late), have time, a long time. Uncountable when it means the resource; a time can mean an occasion.',
    ['What time is it?', 'I don’t have much time.'],
    'What time is it? on time = not late. Uncountable in “much time.”',
    []
  ),
  today: L(
    'Today is this day — not yesterday, not tomorrow. today morning is wrong; say this morning. Today is Monday. It is a time word that does not need “on” (on today is incorrect).',
    ['Today is Monday.', 'I am busy today.'],
    'this morning (not today morning). no “on today.”',
    []
  ),
  train: L(
    'A train is carriages on a railway. by train, catch a train, train station. Get on / get off the train. It is public transport, like bus, but on rails.',
    ['The train is late.', 'We went by train.'],
    'by train / on the train. catch a train.',
    []
  ),
  use: L(
    'To use is to do something with a thing for a purpose. use a pen, use your phone. Useful is the adjective. You can use my pen. Pronunciation: /juːz/ (verb) vs /juːs/ (noun “the use”).',
    ['You can use my pen.', 'We use English in class.'],
    'use + object. useful (adjective).',
    []
  ),
  wait: L(
    'To wait is to stay until something happens or someone comes. wait for the bus, wait a minute. The “for” is required before the thing you wait for. Don’t wait me — wait for me.',
    ['Please wait a minute.', 'We waited for the bus.'],
    'wait for + person/thing. wait a minute.',
    []
  ),
  walk: L(
    'To walk is to move on your feet at a normal speed — not run. go for a walk (noun). Past: walked (regular). I walk to school. on foot describes the same idea as a travel method.',
    ['I walk to school.', 'Let’s go for a walk.'],
    'walk vs run. go for a walk. on foot.',
    []
  ),
  want: L(
    'To want is to wish to have or do something. I want some water. want to + verb: I want to sleep. Stronger than like for desire; need is about necessity. Would like is more polite than want in requests.',
    ['I want some water.', 'They want to go home.'],
    'want + noun. want to + verb. would like = polite.',
    []
  ),
  watch: L(
    'To watch is to look at something for a period of time — a film, a game, TV. watch vs see vs look: watch = look with attention over time. A watch (noun) is the thing on your wrist; two meanings, same spelling.',
    ['We watch TV in the evening.', 'They watched a football match.'],
    'watch TV / watch a film. Noun: a watch (clock on your wrist).',
    []
  ),
  water: L(
    'Water is the clear liquid we drink and that falls as rain. Uncountable: some water, a glass of water. Drink water. You cannot say “two waters” except as café shorthand for two bottles/glasses.',
    ['Please drink more water.', 'The water is cold.'],
    'Uncountable: some water / a glass of water.',
    []
  ),
  weather: L(
    'Weather is the conditions outside: sun, rain, wind, heat. Uncountable: the weather is nice — not “a weather.” What’s the weather like? is the set question. Weather vs whether (if) is a spelling trap later.',
    ['The weather is nice today.', 'I don’t like cold weather.'],
    'What’s the weather like? Uncountable.',
    []
  ),
  week: L(
    'A week is seven days. this week, last week, next week, twice a week. Weekend is Saturday and Sunday in many countries. A week has a clear count; don’t confuse with weak (not strong).',
    ['I work five days a week.', 'See you next week.'],
    'last week / this week / next week. week vs weak.',
    []
  ),
  window: L(
    'A window is an opening in a wall, usually with glass, that lets in light and air. open the window, look out of the window. You look through a window. It is a classroom object word as much as a home word.',
    ['Open the window, please.', 'She sat by the window.'],
    'open/close the window. look out of the window.',
    []
  ),
  woman: L(
    'A woman is an adult female. Irregular plural: women (/ˈwɪmɪn/). Girl is the child. Using girl for an adult woman can sound disrespectful.',
    ['The woman is a doctor.', 'Two women are waiting.'],
    'Plural: women (spelling and pronunciation change). girl → woman.',
    []
  ),
  work: L(
    'To work is to do a job or make an effort. I work in an office. Noun: work (often uncountable) vs a job (countable). at work, go to work. The machine doesn’t work = it is broken.',
    ['I work in an office.', 'This phone does not work.'],
    'work vs a job. at work. it doesn’t work = it’s broken.',
    []
  ),
  write: L(
    'To write is to make letters and words. Past: wrote. write your name, write an email. Write vs right (correct / the side) is a spelling pair. You write with a pen.',
    ['Please write your name.', 'She wrote a letter.'],
    'Past: wrote. write vs right. write with a pen.',
    []
  ),
  wrong: L(
    'Wrong means not correct. Opposite of right (correct). the wrong answer, the wrong bus. Go wrong = stop working well. At A1, “that’s wrong” in class is the core.',
    ['That is the wrong answer.', 'We took the wrong bus.'],
    'Opposite: right. the wrong + noun.',
    ['incorrect']
  ),
  year: L(
    'A year is twelve months. years old for age: She is ten years old — not “ten years” alone for age. this year, last year, next year. A year has seasons.',
    ['She is ten years old.', 'See you next year.'],
    '… years old (age). this year / last year.',
    []
  ),
  young: L(
    'Young means not old — having lived a short time. a young child, young people. Opposite of old for living things. Younger / youngest. For objects, we usually say new, not young.',
    ['They have a young child.', 'She looks young.'],
    'young vs old (people). new vs old (things).',
    []
  ),
}
