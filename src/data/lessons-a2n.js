const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2N = {
  mad: L(
    'Mad means very angry, or not sensible: mad about the delay, a mad idea, drive someone mad. Angry is the everyday cousin for the feeling; mad is stronger and more informal in British English. Crazy is a cousin for the “not sensible” sense. Calm is a useful opposite. Do not write mad when you mean made (past of make), or mud.',
    ['Mum was mad when we missed the last bus on purpose.', 'It is a mad plan to walk to the airport with that case.'],
    'mad about / a mad idea. Cousin: angry. Mix-up: made.',
    ['angry']
  ),
  magic: L(
    'Magic is a special power or clever tricks that look impossible: a magic show, magic tricks, as if by magic. Magician is the person. Trick is a cousin for a single act. Science explains the real world; magic is for stories and stage. Do not write magic when you mean tragic, or maggot.',
    ['The street show used simple magic with cards and coins.', 'The fog lifted as if by magic after breakfast.'],
    'a magic show / tricks. Person: magician. Mix-up: tragic.',
    []
  ),
  mail: L(
    'Mail is letters and parcels, or electronic messages: the morning mail, junk mail, check your mail. Post is the close British cousin for letters. Email is the computer cousin. Male (a man) sounds the same — easy mix-up. Do not write mail when you mean male, or meal.',
    ['Is there any mail for room 12 at reception?', 'I sent the tickets by mail, not as a text.'],
    'the morning mail / check your mail. British cousin: post. Mix-up: male.',
    ['post']
  ),
  mainly: L(
    'Mainly means for the most part: mainly students, used mainly for, mainly because. Mostly is a close synonym. Main is the adjective (the main entrance). Only means nothing else — stronger and narrower. Do not write mainly when you mean manly, or namely (that is to say — later).',
    ['This train is mainly empty after eight in the evening.', 'We chose the hotel mainly because it is near the station.'],
    'mainly students / mainly because. Synonym: mostly. Adjective: main. Mix-up: manly.',
    ['mostly']
  ),
  'make-up': L(
    'Make-up is coloured cream and powder for the face: put on make-up, waterproof make-up, make-up bag. Cosmetics is a more formal cousin. Make up (two words) as a verb means invent a story, or become friends again — different. Hyphenated as a noun. Do not write make-up when you mean make up a story, or wake-up.',
    ['The theatre shop sells stage make-up near the door.', 'I forgot my make-up in the hotel bathroom.'],
    'put on make-up (hyphen noun). Verb extra: make up a story. Mix-up: make up (two words).',
    []
  ),
  male: L(
    'Male describes men or boys, or male animals: a male passenger, male or female, a male voice. Man is the everyday noun. Female is the contrast. Mail (post) sounds the same. Do not write male when you mean mail, or meal.',
    ['The changing rooms are marked male and female.', 'A male nurse helped us at the clinic.'],
    'male or female / a male voice. Noun cousin: man. Mix-up: mail (post).',
    []
  ),
  mall: L(
    'A mall is a large indoor shopping centre: a shopping mall, the food court in the mall, mall opening hours. Shopping centre is the British cousin (often with the same meaning). Market is usually outdoor stalls. Maul is a different word (attack). Do not write mall when you mean mill, or small.',
    ['The mall has a chemist and a phone shop on the ground floor.', 'We waited in the mall until the rain stopped.'],
    'a shopping mall / mall hours. British cousin: shopping centre. Mix-up: mill.',
    []
  ),
  manner: L(
    'Manner is the way you behave or do something: in a polite manner, a calm manner, table manners (plural extra). Way is the everyday cousin. Manners (usually plural) means polite behaviour. Manor is a large country house — mix-up. Do not write manner when you mean manor, or miner.',
    ['She answered the customer in a friendly manner.', 'Good manners help in a job interview.'],
    'in a polite manner / table manners. Everyday: way. Mix-up: manor (a house).',
    ['way']
  ),
  mark: L(
    'A mark is a test score, or a spot on a surface: a high mark, a dirty mark, mark the answer (also a verb). Score is a cousin in sport. Stain is a cousin for a dirty spot. Grade is often used for school levels. Do not write mark when you mean market, or make.',
    ['There is a coffee mark on the ticket — it is still valid.', 'The teacher will mark the tests tonight.'],
    'a high mark / a dirty mark. Verb: mark a test. Mix-up: market.',
    []
  ),
  marriage: L(
    'Marriage is the legal relationship of being married: a long marriage, marriage certificate, same-sex marriage. Wedding is the ceremony day; marriage is the relationship after. Married is the adjective. Divorce is a legal ending. Do not write marriage when you mean mirage, or merry.',
    ['They celebrated twenty years of marriage with a trip.', 'You may need a marriage certificate for the visa form.'],
    'a long marriage / marriage certificate. Day: wedding. Adjective: married. Mix-up: mirage.',
    []
  ),
  massive: L(
    'Massive means very large, heavy, or serious: a massive suitcase, a massive problem, massive queues. Huge and enormous are close cousins. Tiny is an opposite. Mass is a different noun (a large amount, or a church service). Do not write massive when you mean massive vs passive, or message.',
    ['There was a massive storm on the night ferry.', 'The new station roof is a massive glass roof.'],
    'a massive queue / problem. Cousins: huge, enormous. Opposite: tiny. Mix-up: message.',
    ['huge']
  ),
  mate: L(
    'A mate is a friend in informal British English: a mate from work, Cheers, mate, my mates. Friend is the neutral cousin. Colleague is work-only. Partner can mean a boyfriend, girlfriend, or husband/wife — not the same as mate. Do not write mate when you mean meat, or made.',
    ['Ask your mate to save us a seat on the coach.', 'He went climbing with a mate from college.'],
    'a mate from work / my mates (informal British). Neutral: friend. Mix-up: meat.',
    ['friend']
  ),
  maths: L(
    'Maths is mathematics in British English: a maths lesson, maths homework, mental maths. Math is the usual American short form. Arithmetic is the number-work cousin. Physics and chemistry are other school subjects. Do not write maths when you mean moths, or paths.',
    ['I need a calculator for the maths paper.', 'She teaches maths at the college in town.'],
    'a maths lesson / homework (British). American: math. Mix-up: moths.',
    []
  ),
  meaning: L(
    'Meaning is what a word, sign, or action represents: the meaning of, a double meaning, What’s the meaning of this? Sense is a cousin (in the sense of). Mean is the verb (What do you mean?). Mean as an adjective (unkind) is different. Do not write meaning when you mean moaning, or mining.',
    ['The sign’s meaning is “no cycling on the path”.', 'Check the meaning in a learner dictionary, not a translator only.'],
    'the meaning of / What’s the meaning? Verb: mean. Mix-up: mean (unkind).',
    []
  ),
  mechanic: L(
    'A mechanic repairs machines, especially vehicles: a car mechanic, a bike mechanic, the garage mechanic. Engineer is often more trained or designs things. Technician is a cousin in workshops. Machine is the thing, not the person. Do not write mechanic when you mean mechanic vs organic, or mechanic vs magician.',
    ['The mechanic changed the tyre in twenty minutes.', 'Call a mechanic if the warning light stays on.'],
    'a car / garage mechanic. Wider cousin: technician. Mix-up: machine (the thing).',
    []
  ),
  medal: L(
    'A medal is a metal disc given as a prize or honour: a gold medal, win a medal, a war medal. Prize and trophy are cousins; a trophy is often a cup. Metal is the material — easy mix-up. Meddle means interfere — later. Do not write medal when you mean metal, or middle.',
    ['The team collected a bronze medal at the sports day.', 'Her grandmother kept a medal in a small box.'],
    'a gold / silver medal. Cousins: prize, trophy. Mix-up: metal.',
    []
  ),
  medium: L(
    'Medium means in the middle size: medium, large, or small; a medium coffee; medium heat. Average is a cousin for “typical”, not always size. Large and small are the size contrasts. Media (news) is a different word. Do not write medium when you mean medium vs median, or media.',
    ['Is there a medium T-shirt in blue?', 'Cook the onions on a medium heat so they do not burn.'],
    'medium coffee / medium heat. Size set: small–medium–large. Mix-up: media.',
    []
  ),
  melt: L(
    'Melt means become liquid because of heat: ice melts, melt butter, melting snow. Freeze is a useful opposite. Soften can happen without becoming liquid. Smelt is a different verb (past of smell, or metalwork). Do not write melt when you mean smelt, or malt.',
    ['The chocolate melted in her bag on the hot train.', 'Melt a little butter in the pan before the eggs.'],
    'ice melts / melt butter. Opposite: freeze. Mix-up: smelt.',
    []
  ),
  mess: L(
    'A mess is an untidy or dirty state, or a difficult situation: a terrible mess, leave a mess, in a mess. Untidy describes the room; a mess is the result. Tidy is the opposite idea. Mass is a large amount — different. Do not write mess when you mean mass, or miss.',
    ['The kitchen was a mess after we cooked for six.', 'I am in a mess with this online form — can you help?'],
    'leave a mess / in a mess. Opposite idea: tidy. Mix-up: mass, miss.',
    []
  ),
  metal: L(
    'Metal is a hard material such as iron, steel, or gold: a metal chair, scrap metal, metal detector. Wooden and plastic are material contrasts. Medal is a prize disc made of metal — mix-up. Steal is a verb. Do not write metal when you mean medal, or mettle (later).',
    ['Do not put metal in this microwave.', 'The old metal steps were slippery in the rain.'],
    'a metal chair / detector. Contrasts: wood, plastic. Mix-up: medal.',
    []
  ),
  midday: L(
    'Midday is twelve o’clock in the day: at midday, before midday, the midday sun. Noon is a close synonym. Midnight is twelve at night — easy mix-up. Afternoon starts after midday. Do not write midday when you mean midnight, or midweek.',
    ['The bank closes at midday on Saturday.', 'We will meet at midday under the station clock.'],
    'at midday / the midday sun. Synonym: noon. Contrast: midnight. Mix-up: midnight.',
    ['noon']
  ),
  mild: L(
    'Mild means not strong or extreme: mild weather, mild curry, a mild cold. Gentle is a cousin for people and weather. Hot and spicy contrast for food; severe contrasts for illness. Wild is a different word. Do not write mild when you mean wild, or mile.',
    ['Pack a jumper — the evenings are mild, not hot.', 'Ask for a mild sauce if you do not like chilli.'],
    'mild weather / curry / cold. Food contrast: hot, spicy. Mix-up: wild, mile.',
    []
  ),
  minor: L(
    'Minor means not very important or serious: a minor problem, minor injuries, a minor change. Small and slight are cousins. Major is the opposite. Miner works in a mine — same sound. Do not write minor when you mean miner, or minus.',
    ['There was a minor accident; nobody needed hospital.', 'We made a minor change to the booking times.'],
    'a minor problem / injury. Opposite: major. Mix-up: miner (job).',
    []
  ),
  miserable: L(
    'Miserable means very unhappy, or making you unhappy: feel miserable, miserable weather, a miserable day. Unhappy is milder; sad is a cousin. Cheerful is an opposite. Misery is the noun. Do not write miserable when you mean measurable, or miserable vs visitable.',
    ['I felt miserable with a cold on the long flight.', 'It was miserable rain, so we stayed in the museum.'],
    'feel miserable / miserable weather. Milder: unhappy. Mix-up: measurable.',
    ['unhappy']
  ),
  missing: L(
    'Missing means lost or not in the right place: a missing bag, missing person, something is missing. Lost is a close cousin. Found is a useful opposite. Miss as a verb means fail to catch, or feel sad without someone. Do not write missing when you mean mission, or messing.',
    ['Two seats are missing from this booking — can you check?', 'A child was missing for ten minutes in the market crowd.'],
    'a missing bag / something is missing. Cousin: lost. Verb: miss. Mix-up: mission.',
    ['lost']
  ),
  mixture: L(
    'A mixture is things put together: a mixture of, cake mixture, a strange mixture. Mix is the verb. Blend is a cousin, often smoother. Mix-up as a noun means a confusion. Do not write mixture when you mean fixture, or moisture.',
    ['The crowd was a mixture of tourists and local shoppers.', 'Stir the mixture until there are no dry bits of flour.'],
    'a mixture of / cake mixture. Verb: mix. Mix-up: moisture, fixture.',
    []
  ),
  model: L(
    'A model is a small copy, or a person who wears clothes in photos: a model of the castle, a fashion model, a model student (well-behaved extra). Copy is wider. Role model is a person you copy. Modal is a grammar word — mix-up. Do not write model when you mean modal, or motel.',
    ['Kids crowded round a model of the new stadium.', 'She works as a model at weekends and studies in the week.'],
    'a model of / a fashion model. Mix-ups: modal (grammar), motel.',
    []
  ),
  monthly: L(
    'Monthly means once a month: a monthly ticket, monthly pay, a monthly meeting. Weekly and daily are the time cousins. Month is the noun. Annual means once a year. Do not write monthly when you mean mouthy, or monthly vs annually.',
    ['Buy a monthly pass if you commute every weekday.', 'The rent is paid monthly, on the first.'],
    'a monthly ticket / paid monthly. Cousins: weekly, daily. Mix-up: mouthy.',
    []
  ),
  mosquito: L(
    'A mosquito is a small insect that bites: mosquito bite, mosquito net, mosquitoes at dusk. Fly and wasp are other insects. Bite is what it does. Mosquitoes is the usual plural. Do not write mosquito when you mean mosquito vs motel, or mosquito vs musket.',
    ['Sleep under a mosquito net near the lake.', 'The bites from a mosquito itched all night on the balcony.'],
    'a mosquito bite / net. Plural: mosquitoes. Mix-up: fly (another insect).',
    []
  ),
  mostly: L(
    'Mostly means almost all, in most cases: mostly empty, mostly because, we mostly eat. Mainly is a close synonym; mostly often feels like “almost all of it”. Most is the adjective/determiner (most people). Must is a modal verb — mix-up. Do not write mostly when you mean must, or modestly.',
    ['The hostel guests are mostly students in summer.', 'We mostly walk to work when the weather is dry.'],
    'mostly empty / we mostly… Synonym: mainly. Mix-up: must.',
    ['mainly']
  ),
  motor: L(
    'A motor is an engine that makes a machine move: an electric motor, the motor failed, motor oil. Engine is a close cousin, especially in cars. Motorway is a fast road — related but a different word. Motto is a slogan. Do not write motor when you mean motto, or motor vs metre.',
    ['The washing-machine motor made a loud noise.', 'Switch off the motor before you open the bonnet.'],
    'an electric motor / the motor failed. Cousin: engine. Mix-up: motto.',
    ['engine']
  ),
  motorcycle: L(
    'A motorcycle is a two-wheel vehicle with an engine: ride a motorcycle, motorcycle helmet, motorcycle park. Motorbike is the everyday British cousin. Bicycle has no engine. Scooter is usually smaller. Do not write motorcycle when you mean motorway, or cycle on its own.',
    ['You need a helmet on a motorcycle in this country.', 'A motorcycle is easier to park than a car in the old town.'],
    'ride a motorcycle / helmet. Everyday cousin: motorbike. Mix-up: motorway.',
    ['motorbike']
  ),
  mouse: L(
    'A mouse is a small animal, or a computer device: a field mouse, click the mouse, mouse mat. Rat is larger. Keyboard is another computer part. Mice is the animal plural; computer mouse often stays mouse. Do not write mouse when you mean mouth, or moose.',
    ['The computer mouse is not working — try the pad.', 'A mouse ran behind the bins at the campsite.'],
    'click the mouse / a field mouse. Plural animals: mice. Mix-up: mouth.',
    []
  ),
  movement: L(
    'Movement is the act of moving, or a group with a shared aim: a sudden movement, freedom of movement, a political movement. Motion is a more formal cousin. Move is the verb. Moment is a short time — mix-up. Do not write movement when you mean moment, or monument.',
    ['Any movement on the ice path can make you slip.', 'There was a lot of movement in the queue when extra staff arrived.'],
    'a sudden movement / a movement of people. Verb: move. Mix-up: moment.',
    []
  ),
  movie: L(
    'A movie is a film: watch a movie, a movie ticket, a movie night. Film is the usual British cousin. Play is live theatre. Series is several episodes on TV. Do not write movie when you mean moving, or movie vs groovy.',
    ['The in-flight movie list is on the screen in front of you.', 'We booked movie tickets for the evening show.'],
    'watch a movie / movie night. British cousin: film. Mix-up: moving.',
    ['film']
  ),
  musician: L(
    'A musician plays music, often as a job: a street musician, a jazz musician, train as a musician. Singer and pianist are more specific. Musical can be the adjective, or a stage show with songs. Music is the art. Do not write musician when you mean magician, or physician.',
    ['A musician played the guitar in the underground passage.', 'The festival hires local musicians for the Saturday market.'],
    'a street / jazz musician. Show cousin: musical. Mix-up: magician.',
    []
  ),
  tail: L(
    'A tail is the long part at the back of an animal: a cat’s tail, wag its tail, the tail of a kite (extra). Tale is a story — same sound. Queue can be a line of people, not a tail. Tale and tail are a classic mix-up. Do not write tail when you mean tale, or tile.',
    ['Hold the dog’s lead so it does not catch its tail in the door.', 'The peacock opened its tail in the palace garden.'],
    'a cat’s tail / wag its tail. Mix-up: tale (a story) — same sound.',
    []
  ),
  takeaway: L(
    'A takeaway is hot food you buy and eat somewhere else (British): order a takeaway, a Chinese takeaway, takeaway coffee. Take out is a US cousin. Restaurant is sit-in. Delivery comes to your door. Do not write takeaway when you mean take away as a verb only, or takeaway vs holiday.',
    ['There is a 24-hour takeaway opposite the station.', 'We got a takeaway because the hotel kitchen was closed.'],
    'order a takeaway (British). Sit-in contrast: restaurant. Mix-up: take away (verb).',
    []
  ),
  tale: L(
    'A tale is a story, often exciting or not strictly true: a fairy tale, a traveller’s tale, tell a tale. Story is the everyday cousin. Tail is the animal part — same sound. Tall describes height. Do not write tale when you mean tail, or tall.',
    ['The guide told a tale about smugglers on this coast.', 'Read the children a short tale before lights out.'],
    'a fairy tale / tell a tale. Everyday: story. Mix-up: tail (animal) — same sound.',
    ['story']
  ),
  talent: L(
    'Talent is a natural skill: a talent for, a talented singer, talent show. Skill can be learned; talent often feels natural. Gift is a cousin. Tallent is not a word. Do not write talent when you mean talon (a claw — later), or gallon.',
    ['He has a talent for remembering new words.', 'The school talent show is in the hall on Friday.'],
    'a talent for / talent show. Learned cousin: skill. Mix-up: gallon.',
    []
  ),
  tax: L(
    'Tax is money paid to the government: pay tax, a tax form, price including tax. Fee is often for a service (a visa fee). Fine is a punishment payment. Taxi is a car for hire — mix-up. Do not write tax when you mean taxi, or tacks.',
    ['The ticket price includes tax, so this is the total.', 'You may need a tax number on the work contract.'],
    'pay tax / including tax. Service cousin: fee. Mix-up: taxi.',
    []
  ),
  tear: L(
    'A tear /tɪə/ is a drop from the eye when you cry: in tears, wipe a tear, tears of joy. Cry is the verb. The verb tear /teə/ means pull something so it rips — a different word with different sound. Tire is American for tyre. Do not write tear when you mean the verb tear /teə/, or tier (a level).',
    ['She wiped a tear away before she boarded.', 'There were tears in the waiting room when the delay was announced.'],
    'a tear / in tears (/tɪə/). Verb mix-up: tear /teə/ (rip). Not: tier.',
    []
  ),
  teen: L(
    'A teen is a person aged about 13 to 19: a teen ticket, teens and adults, a teen magazine. Teenager is the fuller cousin. Child is younger; adult is older. Ten is the number. Do not write teen when you mean ten, or team.',
    ['Teens pay a lower fare on this city pass.', 'The library has a quiet study room for teens after school.'],
    'a teen ticket / teens and adults. Fuller: teenager. Mix-up: ten, team.',
    ['teenager']
  ),
  teeth: L(
    'Teeth is the plural of tooth: brush your teeth, a set of teeth, toothache (from tooth). Tooth is one; teeth are many. Teethe is what babies do — later. Teas is drinks. Do not write teeth when you mean tooth (singular), or teens.',
    ['I forgot my toothbrush, so my teeth feel awful.', 'The dentist checked her teeth before the long trip.'],
    'brush your teeth (plural of tooth). Singular: tooth. Mix-up: teens.',
    []
  ),
  temperature: L(
    'Temperature is how hot or cold something is: room temperature, a high temperature (fever), check the temperature. Heat is related but not a number. Weather report uses temperature in degrees. Temper is a mood — mix-up. Do not write temperature when you mean temper, or temporary.',
    ['The temperature dropped at night on the mountain path.', 'If you have a high temperature, stay in the hostel and rest.'],
    'room temperature / a high temperature. Mix-ups: temper, temporary.',
    []
  ),
  temple: L(
    'A temple is a building for worship in some religions: a Hindu temple, temple steps, visit a temple. Church, mosque, and synagogue are other religious buildings. Palace is royal, not always religious. Tempt is a verb. Do not write temple when you mean tempt, or tempo.',
    ['Shoes off, please, before you enter the temple.', 'The map marks a small temple beside the river.'],
    'visit a temple / temple steps. Cousins: church, mosque. Mix-up: tempt.',
    []
  ),
  term: L(
    'A term is part of the school year, or a word with a special meaning: the autumn term, a medical term, short-term (adjective extra). Semester is a cousin in some colleges. Word is wider. Team is a group. Do not write term when you mean team, or turn.',
    ['School starts again at the beginning of term.', '“Platform” is the usual term for where you wait for a train.'],
    'the autumn term / a medical term. Mix-up: team, turn.',
    []
  ),
  terrible: L(
    'Terrible means very bad: terrible weather, a terrible mistake, feel terrible. Awful and dreadful are cousins. Terrific used to mean terrible, but now often means great — mix-up. Horrible is a close cousin. Do not write terrible when you mean terrific, or terrify as the verb.',
    ['The delay was terrible — four hours with no information.', 'I feel terrible about losing your umbrella.'],
    'terrible weather / a terrible mistake. Cousins: awful, horrible. Mix-up: terrific (often “great”).',
    ['awful']
  ),
  thought: L(
    'A thought is an idea in your mind: a sudden thought, my first thought, lost in thought. Idea is a close cousin. Think is the verb; thought is also the past of think. Though means although. Do not write thought when you mean though, or taught.',
    ['My first thought was to take a taxi, then I saw the bus.', 'She sat lost in thought by the window of the train.'],
    'a sudden thought / lost in thought. Verb: think. Mix-ups: though, taught.',
    ['idea']
  ),
  tie: L(
    'A tie is cloth worn at the neck with a shirt: a silk tie, wear a tie, a tie pin. Also a verb: tie your laces. Draw is a cousin when a match has the same score (a tie). Tight is the adjective. Do not write tie when you mean tight, or tyre.',
    ['Office dress is a shirt and tie on meeting days.', 'Tie the label onto your suitcase before you check in.'],
    'wear a tie / tie your laces. Score cousin: a tie (draw). Mix-up: tight, tyre.',
    []
  ),
  tiger: L(
    'A tiger is a large wild cat with stripes: a Bengal tiger, tiger enclosure, as brave as a tiger (idiom extra). Lion and leopard are other big cats. Tight is an adjective. Do not write tiger when you mean tighter, or tigger as a name.',
    ['We queued to see the tiger at feeding time.', 'The poster shows a tiger in the national park.'],
    'a tiger enclosure / a striped tiger. Other cats: lion, leopard. Mix-up: tighter.',
    []
  ),
  tight: L(
    'Tight means fitting closely, not loose: tight shoes, a tight lid, hold tight. Loose is the opposite. Tie is the noun/verb. Tightly is the adverb. Do not write tight when you mean tie, or taut only as a later synonym.',
    ['These jeans are too tight to sit in for a long flight.', 'Keep a tight hold of the child’s hand in the crowd.'],
    'tight shoes / hold tight. Opposite: loose. Mix-up: tie.',
    []
  ),
  tin: L(
    'A tin is a metal food container, or the metal: a tin of beans, biscuit tin, tin opener (British). Can is a close cousin (a can of cola). Thin describes width. Tiny means very small. Do not write tin when you mean thin, or ten.',
    ['Pack a tin of tuna if the hostel kitchen is basic.', 'The biscuits are in a round tin on the shelf.'],
    'a tin of beans / biscuit tin (British). Cousin: can. Mix-up: thin, ten.',
    ['can']
  ),
  tiny: L(
    'Tiny means very small: a tiny room, tiny writing, a tiny mistake. Small is milder. Huge and massive are opposites. Tin is a container. Shiny describes light. Do not write tiny when you mean tinny (thin metal sound), or tidy.',
    ['We slept in a tiny cabin with two bunks.', 'There is a tiny café behind the museum, easy to miss.'],
    'a tiny room / a tiny mistake. Milder: small. Opposite: huge. Mix-up: tinny, tidy.',
    ['small']
  ),
  tip: L(
    'A tip is extra money for service, or a useful piece of advice: leave a tip, a travel tip, the tip of the iceberg (idiom extra). Hint is a cousin for advice. Top is the highest part. Pit is a hole. Do not write tip when you mean top, or trip.',
    ['Ten per cent is a usual tip in this restaurant if service is not included.', 'Here is a tip: book the early train; it is quieter.'],
    'leave a tip / a travel tip. Advice cousin: hint. Mix-up: top, trip.',
    []
  ),
  title: L(
    'A title is the name of a book, film, or job: the film title, job title, title page. Name is wider. Headline is for news. Turtle is an animal. Do not write title when you mean total, or turtle.',
    ['Check the title of the book before you order it online.', 'Her job title is assistant manager, not receptionist.'],
    'film title / job title. Wider: name. Mix-up: total, turtle.',
    []
  ),
  tool: L(
    'A tool is an object you hold to do a practical job: garden tools, a tool kit, the right tool. Instrument is often for music or science. Machine is larger and often powered. Tall describes height. Do not write tool when you mean tall, or stool.',
    ['The hostel has a tool for opening stubborn windows.', 'He keeps his tools in a bag under the van seat.'],
    'a tool kit / garden tools. Larger cousin: machine. Mix-up: tall, stool.',
    []
  ),
  top: L(
    'The top is the highest part; also clothing for the upper body: at the top, mountain top, a summer top. Bottom is the opposite for position. Peak is a mountain cousin. Tip can mean the very end point. Do not write top when you mean tap, or stop.',
    ['The viewpoint is at the top of the stairs in the tower.', 'Pack a warm top for the evening deck of the ferry.'],
    'at the top / a summer top. Opposite: bottom. Mix-up: tap, stop.',
    []
  ),
  torch: L(
    'A torch is a small electric light you hold (British): a pocket torch, switch on the torch, torch battery. Flashlight is the usual US word. Lamp is often larger or on a table. Touch is the verb. Do not write torch when you mean touch, or porch.',
    ['Take a torch; the campsite path has no lights.', 'My phone torch helped us read the platform sign.'],
    'a pocket torch (British). US cousin: flashlight. Mix-up: touch, porch.',
    []
  ),
  total: L(
    'A total is the complete amount after adding: the total, a total of, total cost. Also an adjective: the total number. Sum is a maths cousin. Title is a name. Turtle is an animal. Do not write total when you mean title, or turtle.',
    ['The total for the two rooms is £180 a night.', 'Add the drinks and the total comes to twenty pounds.'],
    'the total / total cost. Maths cousin: sum. Mix-up: title.',
    ['sum']
  ),
  touch: L(
    'Touch means put your hand on something: don’t touch, touch the screen, keep in touch (stay in contact — extra). Feel can be a cousin. Torch is a light. Tough means strong or difficult. Do not write touch when you mean torch, or tough.',
    ['Please do not touch the wet paint on the rail.', 'Touch the icon to open your boarding pass.'],
    'don’t touch / touch the screen. Phrase: keep in touch. Mix-up: torch, tough.',
    []
  ),
  tower: L(
    'A tower is a tall narrow building or part of one: a church tower, the Eiffel Tower, control tower. Skyscraper is a very tall modern building. Town is a place. Tour is a trip. Do not write tower when you mean town, or tour.',
    ['Lift tickets include the view from the tower.', 'The airport control tower is on the far side of the runway.'],
    'a church tower / control tower. Mix-ups: town, tour.',
    []
  ),
  track: L(
    'A track is railway rails, or a path: a railway track, keep off the track, a running track, a forest track. Path is a walking cousin. Road is for cars. Truck is a vehicle. Do not write track when you mean truck, or tract.',
    ['Do not cross the track — use the footbridge.', 'We followed a muddy track to the youth hostel.'],
    'a railway track / running track / forest track. Mix-up: truck.',
    []
  ),
  trade: L(
    'Trade is buying and selling, or a skilled practical job: international trade, learn a trade, trade as a verb (swap). Business is a wider cousin. Job is wider still. Trail is a path. Do not write trade when you mean trail, or tread.',
    ['The old port grew rich on trade with other cities.', 'She learned a trade as an electrician after college.'],
    'international trade / learn a trade. Wider: business. Mix-up: trail.',
    []
  ),
  translate: L(
    'Translate means change words from one language into another: translate into English, translate a menu, a translated sign. Interpret is often spoken, in the moment. Translator is the person. Transport is travel. Do not write translate when you mean transport, or transplant.',
    ['The app can translate the station announcements quite well.', 'Please translate this sentence, not the whole paragraph.'],
    'translate into / a menu. Spoken cousin: interpret. Person: translator. Mix-up: transport.',
    []
  ),
  transport: L(
    'Transport is systems and vehicles that move people or goods (British; stress on the first syllable as a noun): public transport, transport links, air transport. Travel is the activity; transport is the system. Translate is language. Passport is an ID document. Do not write transport when you mean translate, or passport.',
    ['Public transport runs until midnight on Saturdays.', 'Goods transport uses the ring road, not the old high street.'],
    'public transport / transport links (British noun stress). Activity cousin: travel. Mix-up: translate.',
    []
  ),
  truck: L(
    'A truck is a large vehicle for goods: a delivery truck, a truck driver, truck park. Lorry is the everyday British cousin. Van is smaller. Track is rails or a path. Do not write truck when you mean track, or trunk.',
    ['A truck was unloading boxes at the back of the supermarket.', 'Cyclists should leave extra space when a truck turns.'],
    'a delivery truck / truck driver. British cousin: lorry. Mix-up: track, trunk.',
    ['lorry']
  ),
  tube: L(
    'A tube is a long hollow pipe; also the London Underground: a tube of toothpaste, the Tube, Tube map. Pipe is a cousin for water or gas. Underground and metro are travel cousins. Tune is music. Do not write tube when you mean tune, or cube.',
    ['Buy a tube of sun cream at the chemist before the beach.', 'Take the Tube to Leicester Square — it is quicker than the bus.'],
    'a tube of / the Tube (London). Travel cousins: underground, metro. Mix-up: tune, cube.',
    []
  ),
  tune: L(
    'A tune is a short melody: hum a tune, a catchy tune, out of tune. Song often has words; a tune can be music only. Tone is quality of sound or voice — later mix-up. Tube is a pipe or the Underground. Do not write tune when you mean tone, or tube.',
    ['The ice-cream van played the same tune all afternoon.', 'Can you whistle that tune from the advert?'],
    'hum a tune / out of tune. Words cousin: song. Mix-up: tone, tube.',
    []
  ),
  type: L(
    'Type as a verb means write with a keyboard: type your password, type slowly, typing error. As a noun it means a kind: a type of ticket. Kind and sort are noun cousins. Typo is a typing mistake. Tape is sticky material. Do not write type when you mean tape, or typo as if it were the verb.',
    ['Type the booking code exactly as it appears on the email.', 'This type of seat does not recline on short flights.'],
    'type your name / a type of. Noun cousins: kind, sort. Mix-up: tape.',
    []
  ),
}
