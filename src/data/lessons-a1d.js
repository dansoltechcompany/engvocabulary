const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A1D = {
  after: L(
    'Dinner finishes, then tea: that order is after. Put a time or an event after the word: after six, after school, after dinner. Before is the opposite on the clock. After does not need “of” in this pattern.',
    ['Call me after work.', 'We went home after the match.'],
    'after + time / event. Opposite: before.',
    []
  ),
  all: L(
    'Every person or the whole amount: all. All the students means not one is missing. All of us / all day are common. Every often sits before a singular noun (every student); all likes a plural or “the” + noun.',
    ['We waited all morning.', 'All of the lights are on.'],
    'all the + plural / all day. Similar: every (every + singular).',
    ['every']
  ),
  another: L(
    'You already have one; you want one more, or a different one: another. Another + singular noun: another cup, another bus. Other needs a plural or “the”: the other bag. An other as two words is not the usual spelling.',
    ['Can I have another biscuit?', 'Let\'s try another restaurant.'],
    'another + singular noun. One more, or a different one.',
    []
  ),
  april: L(
    'Month four on the calendar is April. English says in April, not “on April” and not “at April.” Write it with a capital A. Spring is often in April in Britain, with rain and new leaves. March comes before; May comes after.',
    ['We moved house in April.', 'The garden looks green in April.'],
    'in April. Capital A. Month 4 (after March).',
    []
  ),
  august: L(
    'Month eight is August, often the hottest stretch of the British summer. Say in August. Capital A. Many families go on holiday in August. July is before; September is after, when school often starts again.',
    ['The shop is closed in August.', 'They got married in August.'],
    'in August. Capital A. Month 8 (summer holiday month).',
    []
  ),
  ball: L(
    'A round object you throw, kick, or hit is a ball. Play with a ball / kick the ball / catch the ball. Football, tennis, and basketball all need a ball. Bowl is a dish for soup — different word, similar sound.',
    ['Kick the ball to your sister.', 'The dog ran after the ball.'],
    'a ball. kick / throw / catch the ball. Not bowl (a dish).',
    []
  ),
  bedroom: L(
    'The room where you sleep is the bedroom: bed + room in one word. Go to bed happens there; a living room is for sitting. In the bedroom / my bedroom. Bathroom is for washing, not sleeping.',
    ['There are two beds in this bedroom.', 'Please tidy your bedroom.'],
    'the bedroom / in the bedroom. For sleeping. Contrast: bathroom.',
    []
  ),
  best: L(
    'Good, better, best: best is number one, better than all the others. Say the best café and my best friend. Better is one step up and best is the top, so do not say “more best.”',
    ['She is my best friend.', 'That was the best film this year.'],
    'the best + noun. Scale: good → better → best.',
    []
  ),
  better: L(
    'Better means more good, or less ill than yesterday. I feel better / a better idea. After good comes better; after better comes best. Gooder is not English. Get better is the usual health phrase.',
    ['This bag is better than that one.', 'I hope you get better soon.'],
    'feel better / get better. Scale: good → better → best.',
    []
  ),
  bill: L(
    'In a British restaurant, the paper that shows the price is the bill. Can we have the bill, please? is the polite request. Pay the bill before you leave. American English often says check for the same paper — learn bill first in Britain.',
    ['The bill is on the table.', 'We split the bill three ways.'],
    'the bill (restaurant). pay the bill. Not a bird\'s beak at A1.',
    []
  ),
  boat: L(
    'A small vehicle on water is a boat. Travel by boat / on a boat. A ship is usually larger. Boot is what you wear on your foot — one letter different. River, lake, and sea all take boats.',
    ['We hired a boat on the lake.', 'The boat leaves at nine.'],
    'by boat / on a boat. Larger: a ship. Mix-up: boot (footwear).',
    []
  ),
  bye: L(
    'A short, informal goodbye is bye, often paired with See you later. Goodbye is a little more careful, and bye-bye is extra informal with children. Hi pairs with hello; bye pairs with leaving.',
    ['Bye — call me later.', 'She waved and said bye.'],
    'Informal goodbye. More careful: goodbye. Pair: see you…',
    ['goodbye']
  ),
  carrot: L(
    'A long orange vegetable from the ground is a carrot. Countable: a carrot, some carrots. Carrot soup and carrot cake are British favourites. A potato is brown and rounder; a carrot is orange and long. Rabbits are famous for liking them.',
    ['Cut the carrots for the stew.', 'This salad has grated carrot in it.'],
    'a carrot / carrots. Orange vegetable. Uncountable in cake names sometimes.',
    []
  ),
  children: L(
    'One young person is a child; more than one are children — not “childs.” The children are (plural verb). Child\'s is belonging to one child. Kids is the informal cousin. Adults are the opposite age group.',
    ['How many children have they got?', 'The children walked to school together.'],
    'child → children (irregular). Not childs. Informal: kids.',
    ['kids']
  ),
  classroom: L(
    'Lessons happen in a classroom: desks, a board, and a teacher. Wait in the classroom / go to your classroom. Class can mean the group of students; classroom is the room. Capital C only at the start of a sentence.',
    ['The classroom is on the first floor.', 'Open your books, please, in the classroom.'],
    'in the classroom. Room vs class (the group).',
    []
  ),
  cloud: L(
    'A white or grey shape of water in the sky is a cloud. Dark clouds often mean rain. In the clouds / a cloudy day (adjective). The sky holds the sun, the moon, and clouds. Clown is a circus person — different word.',
    ['A small cloud passed over the sun.', 'Look at those white clouds.'],
    'a cloud / clouds. Adjective: cloudy. Place: in the sky.',
    []
  ),
  dad: L(
    'Dad is the informal word for father. My dad works… is family talk at home. Father is more formal or written. Mum is the matching informal word for mother. Capital D in names: Dad, can you help?',
    ['Dad is in the kitchen.', 'His dad taught him to swim.'],
    'Informal father. Formal: father. Pair: mum.',
    ['father']
  ),
  date: L(
    'The day on the calendar is the date: 9 September, for example. What is the date today? Day is Monday or Tuesday; date is the number in the month. Write the date at the top of a letter. Data is information — a different word.',
    ['Please write today\'s date here.', 'My date of birth is 3 March.'],
    'What is the date? Contrast: day (Monday…). date of birth.',
    []
  ),
  december: L(
    'The twelfth and last month is December: say in December, with a capital D. Christmas falls in December in many countries, and winter is the British season then. November comes before; January starts the next year.',
    ['We visit family in December.', 'The nights are long in December.'],
    'in December. Capital D. Month 12 (Christmas month).',
    []
  ),
  dry: L(
    'Not wet: dry clothes, dry hair, or dry weather with little rain. The opposite is wet, and dry your hands is the verb use. A desert is dry; fry is cooking in oil — different vowel.',
    ['Keep the books dry.', 'The weather will stay dry tomorrow.'],
    'dry vs wet. dry your hands (verb). Weather: a dry day.',
    []
  ),
  east: L(
    'The sun comes up in the east. In the east / to the east. West is the opposite direction. North and south complete the four. East London is a place name; a capital E starts the compass word in many maps, but in a sentence you often use a small e: in the east.',
    ['They drove east towards the coast.', 'Our window faces east.'],
    'in the east. Opposite: west. The sun rises here.',
    []
  ),
  eight: L(
    'The number 8 is eight. Eight o\'clock / eight years old / eight students. Ate is the past of eat and sounds the same — spelling shows the meaning. After seven; before nine. Eight and night rhyme.',
    ['Breakfast is at eight o\'clock.', 'She has eight cousins.'],
    'eight o\'clock / eight years old. Homophone: ate (eat).',
    []
  ),
  eleven: L(
    'The number 11 is eleven. The shop opens at eleven / eleven students. After ten; before twelve. Eleven o\'clock is late morning. Do not write “11th” when you mean the number eleven as a quantity.',
    ['Meet me at eleven.', 'There are eleven players in a football team.'],
    'at eleven / eleven o\'clock. Number 11.',
    []
  ),
  end: L(
    'The last part is the end. At the end of the film / at the end of the street. In the end means “finally,” which is a later phrase. Start and beginning are the opposite. Ending is common for stories; end is the short A1 noun.',
    ['Wait for me at the end of the road.', 'The lesson comes to an end at four.'],
    'at the end of + noun. Opposite: start / beginning.',
    []
  ),
  everybody: L(
    'Every person in the group: everybody. It takes a singular verb: everybody is here. Everyone means the same. Nobody is the opposite. Body at the end does not mean a person\'s body here — it is one word for all the people.',
    ['Everybody was quiet.', 'Is everybody ready?'],
    'everybody is (singular verb). Same: everyone. Opposite: nobody.',
    ['everyone']
  ),
  everyone: L(
    'Everyone is every person, the same idea as everybody. Everyone needs a ticket (singular verb). Use it in questions: Is everyone here? One word, not “every one” unless you mean each separate thing. Anyone is the question/no partner in some sentences.',
    ['Everyone sat down.', 'Good night, everyone.'],
    'everyone is. Same: everybody. Not two words at A1.',
    ['everybody']
  ),
  far: L(
    'A long way is far, and not far from here is the useful negative. How far is the station asks about distance; far away stresses it. Near is the opposite; for is a different short word for purpose.',
    ['How far is the airport?', 'We do not live far from school.'],
    'How far…? not far from. Opposite: near.',
    []
  ),
  february: L(
    'Month two is February — remember the r after the b. Say in February, with a capital F; it is the short month and often cold in Britain. January comes before and March comes after.',
    ['Her exam is in February.', 'We stayed inside a lot in February.'],
    'in February. Capital F. Month 2. Spelling: Feb-ru-ary.',
    []
  ),
  fifteen: L(
    'The number 15 is fifteen. She is fifteen years old — years old after the number for age. Fifty is 50; the -teen / -ty pair is easy to mix. After fourteen; before sixteen. Fifteen minutes is a quarter of an hour.',
    ['He is fifteen years old.', 'The film starts in fifteen minutes.'],
    'fifteen years old. Mix-up: fifty (50). Number 15.',
    []
  ),
  fifty: L(
    'The number 50 is fifty. Fifty pounds / fifty years old. Fifteen is 15 — listen for -ty versus -teen. Forty, sixty, and seventy are the same family. A fifty-pound note is money talk.',
    ['The ticket is fifty pounds.', 'My uncle is fifty years old.'],
    'fifty pounds / fifty years old. Mix-up: fifteen (15).',
    []
  ),
  fine: L(
    'Fine often means “OK” or “good enough”: I am fine, thank you after How are you? Fine weather is pleasant, not raining. Find is the verb “to look and get” — different word. Fine as a money penalty is later English.',
    ['How are you? — I\'m fine.', 'It is a fine day for a walk.'],
    'I am fine. fine weather = pleasant. Mix-up: find (verb).',
    []
  ),
  five: L(
    'The number 5 is five. Five o\'clock / five minutes / five books. After four; before six. High five is a hand greeting some learners meet later. Fifth is the ordinal (5th).',
    ['We finish at five o\'clock.', 'There are five people in the queue.'],
    'five o\'clock / five minutes. Number 5. Ordinal: fifth.',
    []
  ),
  forty: L(
    'The number 40 is forty — no u, even though four has one. Use forty years old or forty minutes, and spell it forty, not “fourty.” Fourteen is 14; fifty comes next in the tens.',
    ['The journey takes forty minutes.', 'She is forty years old this year.'],
    'forty (not fourty). Mix-up: fourteen (14). Number 40.',
    []
  ),
  four: L(
    'The number 4 is four: four chairs or four o\'clock, after three and before five. For is a different word, as in This is for you, and fourth is 4th. A table often has four legs.',
    ['The café opens at four.', 'We need four tickets, please.'],
    'four o\'clock. Homophone mix-up: for (preposition). Number 4.',
    []
  ),
  from: L(
    'Where something starts, or where you were born: from. I am from Lahore / a letter from my sister / from Monday to Friday. To often shows the other end of the line. Form is a paper to fill in — extra r.',
    ['This bus is from the station.', 'She works from nine to five.'],
    'I am from + place. from A to B. Mix-up: form (paper).',
    []
  ),
  furniture: L(
    'Tables, chairs, and beds together are furniture. It is uncountable: some furniture, not “a furniture” and not “furnitures.” A piece of furniture names one item. Move the furniture / buy new furniture. Furnish is the verb (later).',
    ['The furniture in this room is old.', 'We need a piece of furniture for the hall.'],
    'Uncountable: furniture (not furnitures). One item: a piece of furniture.',
    []
  ),
  goodbye: L(
    'When you leave, goodbye is the careful word, often with Have a nice day. Bye is shorter and more informal; hello is the arriving pair. Write it as one word, goodbye.',
    ['She said goodbye at the door.', 'Goodbye — thank you for coming.'],
    'Said when you leave. Informal: bye. Pair: hello.',
    ['bye']
  ),
  grey: L(
    'Between black and white sits grey — the British spelling (American: gray). Grey clouds, a grey coat, grey hair. Colour words go before the noun: a grey sky. Gay is a different word. Elephant-grey is a typical picture in children\'s books.',
    ['The sky looks grey this morning.', 'I need a grey jumper.'],
    'British: grey. a grey + noun. Colour of clouds / elephants.',
    []
  ),
  here: L(
    'This place, near the speaker: here. Come here / sit here / here is your bag. There is the far pair. Hear is the verb for ears — same sound, different spelling. Here you are when you hand something over.',
    ['I live here.', 'Here is the menu.'],
    'here = this place. Opposite: there. Homophone: hear (ears).',
    []
  ),
  how: L(
    'Ask about the way or the amount with how: How do you spell that, How old are you, and How much is this. How are you is a greeting. Who is for people; how is for manner, age, price, and health.',
    ['How old is your brother?', 'How do you get to school?'],
    'How old…? How much…? How do you…? Greeting: How are you?',
    []
  ),
  hundred: L(
    'The number 100 is a hundred — English likes a (or one) before it: a hundred pages, not usually “hundred pages.” Two hundred has no s. Hundreds of means a very large number, later grammar. After ninety-nine.',
    ['A hundred people waited outside.', 'The book has two hundred pages.'],
    'a hundred / one hundred. two hundred (no s). Number 100.',
    []
  ),
  island: L(
    'Land with water all around it is an island. Live on an island, not “in an island.” Ireland and Iceland are country names; island is the general word. The s is silent in some accents\' careful speech notes, but spell i-s-l-a-n-d. A peninsula is joined to land — later word.',
    ['We spent a week on the island.', 'There is no airport on this island.'],
    'on an island. Water all around. Silent s in the spelling cluster.',
    []
  ),
  january: L(
    'The first month of the year is January: say in January, with a capital J. New Year sits at the start, and school often begins then too. February is next, while winter is still the British season.',
    ['He starts the new job in January.', 'It snowed in January last year.'],
    'in January. Capital J. Month 1 (New Year).',
    []
  ),
  july: L(
    'Month seven is July, often warm in Britain: say in July, with a capital J. June is before and August is after; school summer holidays often include July.',
    ['They travel in July.', 'The park is busy in July.'],
    'in July. Capital J. Month 7 (summer).',
    []
  ),
  june: L(
    'Month six is June: say in June, with a capital J. Exams and long evenings are typical; May is before and July is after. June and July both start with Ju-, so check the ending: -ne versus -ly.',
    ['The wedding is in June.', 'Days are long in June.'],
    'in June. Capital J. Month 6. Mix-up: July (month 7).',
    []
  ),
  kids: L(
    'Kids is informal for children. The kids are playing… is home and playground talk. Children is the neutral classroom word. Kid in the singular can mean one child, still informal. Goats also have kids — at A1, think children.',
    ['Are the kids in bed?', 'We need a table for two adults and three kids.'],
    'Informal children. Neutral: children. Plural verb: the kids are.',
    ['children']
  ),
  march: L(
    'Month three is March: say in March, with a capital M, when the weather often improves after winter. February is before and April is after. The verb march (soldiers walk) is a different use — this entry is the month.',
    ['My birthday is in March.', 'We plant seeds in March.'],
    'in March. Capital M. Month 3. This lesson: the month, not the verb.',
    []
  ),
  may: L(
    'This May is month five, not the modal verb “you may sit down.” Write a capital M for the month. Say in May, like the other months. April is before; June is after. Spring flowers and holidays often sit in May in Britain.',
    ['School half-term is in May.', 'It was warm in May this year.'],
    'in May (month 5). Capital M. Not the modal may (= allowed).',
    []
  ),
  menu: L(
    'The list of food in a restaurant is the menu. Can I see the menu, please? On the menu / choose from the menu. A man-you pronunciation helps: MEN-you. Mean is the verb “signify”; menu is the card.',
    ['The lunch menu is on the board.', 'There is no fish on the menu today.'],
    'the menu. on the menu. Restaurant food list.',
    []
  ),
  most: L(
    'The largest part of a group: most. Most students walk — no “the” in this pattern. Most of the class needs of the when the group is named. More is the comparative; most is the top amount. Almost means “nearly” — extra l.',
    ['Most shops close at six.', 'Most of my friends live nearby.'],
    'most + plural noun. most of the + noun. Contrast: more.',
    []
  ),
  mum: L(
    'Mum is the informal British word for mother. My mum is… at home; mother is more formal. Mom is typical American spelling. Dad is the informal father. Capital M when you speak to her: Mum, I\'m home.',
    ['Mum made soup.', 'I phoned my mum after class.'],
    'Informal British mother. Formal: mother. American: mom. Pair: dad.',
    ['mother']
  ),
  newspaper: L(
    'Large printed pages of news: a newspaper. Read the newspaper / in the newspaper. Paper alone can mean the material or a newspaper in short talk. News is uncountable; a newspaper is countable. Online news is later language; this word is the printed set.',
    ['She bought a newspaper at the station.', 'The story is in today\'s newspaper.'],
    'a newspaper / the newspaper. read the newspaper. Countable.',
    []
  ),
  nine: L(
    'The number 9 is nine: nine o\'clock or nine years old, after eight and before ten. Ninth is 9th; night is the dark time with an extra t. Work from nine to five is a classic hours phrase.',
    ['Lessons start at nine o\'clock.', 'They have nine chairs, not ten.'],
    'nine o\'clock / from nine to five. Mix-up: night (dark). Number 9.',
    []
  ),
  north: L(
    'Towards the top of most maps: north. In the north of the country / go north. South is the opposite. North wind and the North Star appear in stories. Capital N in place names: North Wales.',
    ['They moved north last year.', 'It is colder in the north.'],
    'in the north / go north. Opposite: south.',
    []
  ),
  october: L(
    'Month ten is October: say in October, with a capital O, when school often starts a new term. September is before and November is after. Autumn is the British season then.',
    ['The conference is in October.', 'Leaves turn brown in October.'],
    'in October. Capital O. Month 10 (autumn).',
    []
  ),
  off: L(
    'Away from a surface, or not on: off. Take your shoes off / the light is off / a day off work. On is the opposite for lights and clothes in many phrases. Of is a different short word (a cup of tea).',
    ['Turn the television off, please.', 'The cover came off the book.'],
    'take + noun + off. lights off. Opposite: on. Mix-up: of.',
    []
  ),
  one: L(
    'The number 1 is one. One brother / one o\'clock / one more. A and an also mean “one,” but one stresses the number. Won is the past of win and sounds the same. First is the ordinal (1st).',
    ['I only need one ticket.', 'One of the windows is open.'],
    'one + noun. Homophone: won (win). Ordinal: first.',
    []
  ),
  our: L(
    'Belonging to us: our. Our house / our teacher. Are is the verb “to be”; hour is 60 minutes — both can sound close. Ours stands alone: this bag is ours. Your is the listener\'s pair.',
    ['Our bus is late.', 'This is our classroom.'],
    'our + noun (belonging to us). Mix-ups: are / hour. Alone: ours.',
    []
  ),
  out: L(
    'Not inside: go out, the children are out, or look out (be careful). Out of the room names the movement from in to out, and in is the opposite. Our is the determiner belonging to us.',
    ['Shall we eat out tonight?', 'He took the letters out of the bag.'],
    'go out / eat out. out of + place. Opposite: in.',
    []
  ),
  passport: L(
    'The official book you show to enter another country is a passport. Don\'t forget your passport / show your passport. Password is for computers — extra w. At passport control you wait in a queue. Keep it with your tickets when you fly.',
    ['My passport is in my bag.', 'You need a passport for this trip.'],
    'a passport / your passport. Mix-up: password (computers).',
    []
  ),
  plate: L(
    'A flat dish you eat from is a plate. Put the rice on the plate / a clean plate. A bowl is deeper, for soup. Place is a location — extra c sound in the middle. A plate of sandwiches is a quantity phrase.',
    ['Wash the plates after dinner.', 'There is a plate on the shelf.'],
    'on the plate. Contrast: bowl (deeper, soup). Mix-up: place.',
    []
  ),
  radio: L(
    'A device that plays music and news from stations is the radio. Listen to the radio / on the radio. Turn the radio on. Television has pictures; radio is sound. Radius is a maths word — later.',
    ['Turn on the radio, please.', 'I heard it on the radio this morning.'],
    'listen to the radio / on the radio. Sound, not pictures.',
    []
  ),
  september: L(
    'Month nine is September: say in September, with a capital S, when a new school term often starts. August holidays end and October follows. Autumn begins around this time in Britain.',
    ['Term starts in September.', 'We met in September last year.'],
    'in September. Capital S. Month 9 (back to school).',
    []
  ),
  seven: L(
    'The number 7 is seven, and seven days in a week is the classic fact. Use seven o\'clock or seven years old, after six and before eight. Seventh is 7th; even is a different word meaning flat or equal.',
    ['Dinner is at seven o\'clock.', 'There are seven chairs at the table.'],
    'seven days in a week. seven o\'clock. Number 7.',
    []
  ),
  shower: L(
    'Water sprays from a shower so you can wash; British English says have a shower. A shower can also be a short fall of rain. Bath is sitting in a tub; shower is standing under water. Show is the verb “to let someone see.”',
    ['There is no hot water in the shower.', 'We had a shower of rain at lunch.'],
    'have a shower (British). Also: a shower of rain. Contrast: a bath.',
    []
  ),
  six: L(
    'The number 6 is six: six o\'clock or six minutes, after five and before seven. Sixth is 6th; keep the vowel i so the spelling stays clear. Half past six is 6:30.',
    ['The alarm is set for six o\'clock.', 'We need six cups, please.'],
    'six o\'clock / half past six. Number 6.',
    []
  ),
  sky: L(
    'Above the earth, where the sun and clouds sit: the sky. The sky is blue / in the sky. Skies plural appears in writing. Ski is a winter sport — different word. Sky and high often rhyme in songs.',
    ['There are no planes in the sky.', 'The night sky is full of stars.'],
    'the sky / in the sky. Holds sun, moon, clouds. Mix-up: ski.',
    []
  ),
  snow: L(
    'Soft white frozen rain is snow. Uncountable: some snow, in the snow. Snow falls; snowy is the adjective. Rain is liquid; snow is frozen. Show is the verb “to let someone see” — extra w in snow.',
    ['There is snow on the cars.', 'It might snow tonight.'],
    'in the snow. Uncountable. Verb: it snows. Contrast: rain.',
    []
  ),
  some: L(
    'An amount you do not count exactly: some. Some water / some friends. Yes sentences and polite offers like some: Would you like some tea? Any is the usual partner in questions and “no” sentences. Same is “not different” — extra a.',
    ['I bought some apples.', 'There is some milk in the fridge.'],
    'some in yes sentences and offers. Questions/no: any.',
    []
  ),
  soup: L(
    'A liquid food, often from vegetables: soup. Uncountable: some soup, a bowl of soup. Tomato soup / chicken soup. Soap is for washing — different vowels. Eat soup with a spoon from a bowl, not usually from a flat plate.',
    ['Would you like some soup?', 'The soup is too hot to eat.'],
    'some soup / a bowl of soup. Uncountable. Mix-up: soap (wash).',
    []
  ),
  south: L(
    'Towards the bottom of most maps: south. In the south / drive south. North is the opposite. South-facing windows get more sun in Britain. Mouth is the body part — different first letter.',
    ['They live in the south of Spain.', 'Birds fly south in winter.'],
    'in the south / go south. Opposite: north.',
    []
  ),
  spring: L(
    'The season after winter is spring, when plants start to grow. In spring / this spring. Summer follows; winter is behind you. A metal spring (in a bed) is another meaning — this A1 entry is the season. Spell it; do not write “sprig” for the season.',
    ['We clean the house in spring.', 'The days get longer in spring.'],
    'in spring. Season after winter, before summer. Not the metal coil at A1.',
    []
  ),
  supermarket: L(
    'A large shop for food and home things is a supermarket. At the supermarket / go to the supermarket. Super + market in one word. A small shop is not a supermarket. Trolley and basket are what you carry food in there.',
    ['I forgot the list at the supermarket.', 'The supermarket opens at eight.'],
    'at the supermarket / go to the supermarket. Large food shop.',
    []
  ),
  television: L(
    'A screen for programmes is a television, often shortened to TV. Watch television / on television / turn the television on. Radio is sound only. Tele- hints “far”; vision hints “see.” British English still uses television in careful talk.',
    ['Turn the television down, please.', 'The news is on television at ten.'],
    'watch television / on television. Short: TV.',
    ['TV']
  ),
  ten: L(
    'The number 10 is ten: ten minutes, ten o\'clock, or ten years old, after nine and before eleven. Tenth is 10th; a tent is a camping house with an extra t. Count to ten is a classroom phrase.',
    ['Count from one to ten.', 'The bus comes at ten o\'clock.'],
    'ten minutes / ten o\'clock. Number 10. Mix-up: tent (camping).',
    []
  ),
  tennis: L(
    'Two or four people hit a ball over a net: tennis. Play tennis / a tennis ball / a tennis court. Uncountable as the sport name: I like tennis, not “a tennis” for the game. Table tennis is the indoor cousin. On Saturday is a typical time phrase with this sport.',
    ['Do you play tennis?', 'We booked a tennis court for Sunday.'],
    'play tennis. Uncountable sport. Court / racket / ball.',
    []
  ),
  test: L(
    'A short exam is a test. Have a test / an English test. Exam is often longer or more official; test is the everyday classroom word. Text is a message — extra x. Pass a test / fail a test come next.',
    ['The test is on Friday.', 'I need to revise for the test.'],
    'a test / have a test. Similar: exam (often bigger). Mix-up: text.',
    []
  ),
  thank: L(
    'Tell someone you are pleased they helped: thank. Thank you is the set phrase — you after thank in this greeting. Thank you for the book. Thanks is the informal cousin. Think is the verb in your head — i versus a.',
    ['I want to thank you for your help.', 'Thank her for the invitation.'],
    'thank you / thank you for + noun. Informal: thanks. Mix-up: think.',
    []
  ),
  thanks: L(
    'An informal thank you is thanks. Thanks for your help. Many thanks is a little warmer. Thank is the verb; thanks is the short reply. No question mark: it is not a question.',
    ['Thanks, that is kind.', 'Thanks for the lift.'],
    'Informal thank you. thanks for + noun. Verb form: thank.',
    ['thank you']
  ),
  there: L(
    'That place, not here: there. The keys are there / over there / there is a café. Here is near you. Their means belonging to them; they\'re means they are — same sound, different jobs. There is / there are introduce existence.',
    ['Put the bag there.', 'There are two buses this morning.'],
    'there = that place. there is / there are. Homophones: their / they\'re.',
    []
  ),
  thirteen: L(
    'The number 13 is thirteen: thirteen years old or thirteen students, after twelve and before fourteen. Thirty is 30, so listen for -teen versus -ty. Thirteen is a teen number, like fifteen and sixteen.',
    ['He turned thirteen last week.', 'Turn to page thirteen.'],
    'thirteen years old. Mix-up: thirty (30). Number 13.',
    []
  ),
  thirty: L(
    'The number 30 is thirty. Thirty students / thirty minutes / thirty years old. Thirteen is 13. Forty follows in the tens. Half an hour is thirty minutes — a useful clock fact.',
    ['The class lasts thirty minutes.', 'He is thirty years old.'],
    'thirty minutes / thirty years old. Mix-up: thirteen (13). Number 30.',
    []
  ),
  thousand: L(
    'The number 1,000 is a thousand. A thousand people / two thousand (no s on thousand). Thousands of means a huge number, later. Hundred is 100; thousand is ten hundreds. After nine hundred and ninety-nine.',
    ['The hall holds a thousand seats.', 'Two thousand fans waited at the gate.'],
    'a thousand / one thousand. two thousand (no s). Number 1,000.',
    []
  ),
  three: L(
    'The number 3 is three: three sisters or three o\'clock, after two and before four. Third is 3rd; a tree grows in the garden — do not mix the spellings. A triangle has three sides in later maths.',
    ['We need three plates.', 'The film starts at three o\'clock.'],
    'three o\'clock / three + noun. Mix-up: tree. Number 3.',
    []
  ),
  thursday: L(
    'After Wednesday and before Friday comes Thursday: say on Thursday, with a capital T, not in Thursday. Many British towns have a market on Thursday. Spell Thurs- with u; do not write Tursday.',
    ['I work late on Thursday.', 'See you on Thursday morning.'],
    'on Thursday. Capital T. Day after Wednesday.',
    []
  ),
  toilet: L(
    'The bowl, or the room with it: the toilet. Where is the toilet, please? is polite in a café. Bathroom and loo are other British options; toilet is clear and standard. Tile is a wall square — different word.',
    ['The toilet is upstairs.', 'Is there a public toilet near here?'],
    'the toilet / Where is the toilet? Similar: bathroom, loo (informal).',
    []
  ),
  tuesday: L(
    'After Monday and before Wednesday comes Tuesday: say on Tuesday, with a capital T. A typical timetable line is English on Tuesday afternoon. Spell Tues- and keep the e; two is only the number.',
    ['The shop is closed on Tuesday.', 'We have a meeting on Tuesday afternoon.'],
    'on Tuesday. Capital T. Day after Monday.',
    []
  ),
  twelve: L(
    'The number 12 is twelve. Twelve months in a year / twelve o\'clock. Midday is twelve o\'clock; midnight is twelve at night. After eleven; before thirteen. Twelfth is 12th (note the f).',
    ['Lunch is at twelve o\'clock.', 'A year has twelve months.'],
    'twelve o\'clock / twelve months. Number 12. Ordinal: twelfth.',
    []
  ),
  twenty: L(
    'The number 20 is twenty. Twenty years old / twenty minutes. After nineteen; before twenty-one. Twelfth is 12th; twenty is 20 — easy mix at speed. A twenty-pound note is common British money.',
    ['She is twenty years old.', 'The walk takes twenty minutes.'],
    'twenty years old / twenty minutes. Number 20.',
    []
  ),
  two: L(
    'The number 2 is two: two tickets or two o\'clock, after one and before three. To (direction) and too (also) sound the same; second is 2nd. Both often pairs with two people.',
    ['Two coffees, please.', 'The train leaves at two o\'clock.'],
    'two + noun. Homophones: to / too. Number 2.',
    []
  ),
  under: L(
    'In a lower position: under. Under the table / under the bed. On is the top surface; over can mean above (sometimes moving). Below is a close cousin. Understand is a different longer verb.',
    ['Your shoes are under the chair.', 'We sat under a tree.'],
    'under + noun. Opposite idea: on / over. Mix-up: understand.',
    []
  ),
  up: L(
    'Towards a higher place: up. Stand up / go up the stairs / pick it up. Down is the opposite. Upper is an adjective (the upper floor). Wake up and get up are morning pair verbs.',
    ['She looked up at the board.', 'Walk up the hill slowly.'],
    'stand up / get up / pick + noun + up. Opposite: down.',
    []
  ),
  wall: L(
    'The side of a room or building is a wall. On the wall (pictures, clocks). Well is “in a good way” or a water hole — different word. Ceiling is above you; floor is below; walls stand around you.',
    ['Do not lean on that wall.', 'They painted the walls white.'],
    'on the wall. Mix-up: well. Contrast: floor / ceiling.',
    []
  ),
  wednesday: L(
    'After Tuesday and before Thursday comes Wednesday: say on Wednesday, with a capital W. Spell the d even if you barely hear it: Wed-nes-day. It is midweek for many workers, and sports clubs often meet then.',
    ['The library is open on Wednesday.', 'I work from home on Wednesday.'],
    'on Wednesday. Capital W. Spell the d: Wed-nes-day.',
    []
  ),
  well: L(
    'In a good way, or in good health: well. She speaks English well (adverb after the verb). I don\'t feel well (health). Good is the adjective: a good student; well is usually the adverb. Wall is the side of a room.',
    ['Did the team play well?', 'Get well soon.'],
    'verb + well. feel well (health). Adjective pair: good. Mix-up: wall.',
    []
  ),
  what: L(
    'Ask about a thing with what: What is your name, What time is it, and What do you want are the simple patterns. Which often chooses from a small set; what is more open. That is a pointing word, not a question word.',
    ['What is this in English?', 'What do you do at the weekend?'],
    'What is…? What time…? What do you…? Thing, not person (who).',
    []
  ),
  when: L(
    'Ask or talk about time with when: When does the train leave and When is your birthday. The answer is a time or a day; if is for conditions. Went is the past of go, with an extra t.',
    ['When do you have lunch?', 'When is the next holiday?'],
    'When does…? When is…? Time question. Mix-up: went (go).',
    []
  ),
  where: L(
    'Ask or talk about place with where. Where do you live? Where is the station? Wear is the verb for clothes; were is the past of are — both sound close. Here and there answer many where questions.',
    ['Where do you work?', 'Where are my glasses?'],
    'Where do you live? Where is…? Place. Mix-ups: wear / were.',
    []
  ),
  who: L(
    'Ask about a person with who: Who is that man and Who are you. Whom is rare at A1, so use who; how is for manner and amount. Whose asks about belonging, which comes later.',
    ['Who is your teacher?', 'Who lives in that house?'],
    'Who is…? Who are you? Person, not thing (what).',
    []
  ),
  wind: L(
    'Air that moves quickly is the wind: the wind is strong, or stand in the wind. Windy is the adjective; a window lets you see out. Rain and wind often travel together in British weather talk.',
    ['The wind closed the door.', 'Do not stand in the wind without a coat.'],
    'the wind / in the wind. Adjective: windy. Mix-up: window.',
    []
  ),
}
