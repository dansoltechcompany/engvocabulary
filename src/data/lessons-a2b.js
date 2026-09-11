const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2B = {
  adult: L(
    'When a person is fully grown, they are an adult — not a child. Adult is a noun (an adult) and an adjective (adult tickets, adult education). Grown-up is the friendly word you hear with children; adult sounds more official. Say adults, not “adults people.”',
    ['Only an adult can sign the form.', 'The film is for adult viewers.'],
    'Noun and adjective. Informal: grown-up. adult + noun (adult class).',
    ['grown-up']
  ),
  age: L(
    'Age is the number of years a person or thing has lived. How old are you? is more natural than What is your age? in everyday talk. At the age of 18 and under age are set phrases. An era or a period is a stretch of history, not a person’s years.',
    ['Children under the age of twelve go free.', 'He started driving at the age of seventeen.'],
    'at the age of + number. Everyday question: How old…?',
    []
  ),
  alone: L(
    'If nobody is with you, you are alone. He lives alone; she walked home alone. Lonely is the sad feeling — you can be alone and perfectly happy. On your own is a close everyday phrase. Put alone after the verb, not before the person: not “an alone man,” but a man on his own.',
    ['I do not like eating alone.', 'She finished the puzzle alone.'],
    'alone = without others. lonely = sad about it. on your own ≈ alone.',
    []
  ),
  both: L(
    'Use both when you mean the two things together, not three. Both doors were locked. The pattern both … and … joins a pair: both tea and coffee. All is for three or more; either is one of two. We say both of them, not “the both.”',
    ['Both of my brothers live abroad.', 'She speaks both Urdu and English.'],
    'both … and …. both of them. Three or more: all. One of two: either.',
    []
  ),
  building: L(
    'A house, a school, or an office block is a building: a structure with walls and a roof. House is only a home; building is the wider word. They are putting up a new building / a building site. The related verb is build.',
    ['The tallest building in town is a hotel.', 'Please wait outside the building.'],
    'Wider than house. Verb: build. a building site.',
    []
  ),
  crowd: L(
    'Picture a platform at rush hour: that mass of people is a crowd. A crowd of fans, push through the crowd. Group is smaller and calmer; crowd suggests numbers and often noise. Crowded is the adjective: a crowded bus. Avoid “a crowd people” — say a crowd of people.',
    ['Police asked the crowd to move back.', 'A crowd gathered outside the cinema.'],
    'a crowd of + people. Adjective: crowded. Smaller: group.',
    []
  ),
  culture: L(
    'Food, festivals, and everyday manners sit inside culture — the way of life of a group. British culture, a culture of reading at home. It is not only museums and art. Civilization is a bigger, more historical idea. Cultural is the adjective: cultural differences.',
    ['Learning a language also means learning the culture.', 'Music is a big part of youth culture.'],
    'culture of + group/habit. Adjective: cultural. Not only art galleries.',
    []
  ),
  customer: L(
    'In a shop or café, the person who buys is the customer. Look after customers, a regular customer. Client is more usual for a lawyer or designer. Guest is someone you invite, not someone paying at the till. Customer service is a set phrase.',
    ['The next customer, please.', 'Happy customers come back.'],
    'shop/café: customer. professional services: client. invited person: guest.',
    ['client']
  ),
  dictionary: L(
    'When spelling or meaning is unclear, you look the word up in a dictionary — a book or app that explains words. Bilingual dictionaries translate; monolingual ones explain in English. A vocabulary list is your own notes; a dictionary is the full reference. Do not say “search the dictionary” if you mean look up.',
    ['Keep a dictionary on your phone.', 'The dictionary shows the British spelling.'],
    'look a word up in a dictionary. App or paper book.',
    []
  ),
  education: L(
    'School, college, and courses together make education — teaching and learning over time. Get a good education, higher education, adult education. Teaching is what the teacher does in the room; education is the wider system and result. Educational is the adjective: an educational programme.',
    ['She went abroad for her education.', 'Public education should be free.'],
    'get / have an education. Adjective: educational. Teacher’s act: teaching.',
    ['schooling']
  ),
  either: L(
    'Faced with two options, either means one of them — it does not matter which. You can sit at either table. Pair it with or: either tea or coffee. Neither … nor … is the negative pair. With three or more choices, use any. Either of them is fine.',
    ['Either road will take you to the station.', 'I don’t like either colour.'],
    'either … or …. either of + two. Three or more: any. Negative pair: neither.',
    []
  ),
  except: L(
    'Except cuts one item out of a group: the shop is open every day except Monday. It is a preposition here: except + noun. Except for is common before a longer phrase. Besides can mean “as well as,” which is almost the opposite. Do not mix it with accept (to say yes).',
    ['The park is empty except for two runners.', 'I like all fruit except bananas.'],
    'except / except for + noun. Opposite idea: besides (= as well as). Not accept.',
    ['apart from']
  ),
  few: L(
    'Few is a small number, and without a it often sounds negative: few buses run at night (almost none). A few is more positive: a few friends (some). Use few with countable nouns. Little / a little go with uncountable nouns such as time or water.',
    ['Few shops were open after nine.', 'I have a few questions about the homework.'],
    'few = not many (negative). a few = some (positive). Uncountable: little / a little.',
    []
  ),
  forest: L(
    'Walk far enough among trees and you are in a forest — a large area of woodland. A wood (or the woods) is smaller. Jungle suggests hot, wild plants. In the forest / through the forest. The countryside is rural land in general, not only trees.',
    ['They camped at the edge of the forest.', 'Wild animals still live in that forest.'],
    'in the forest. Smaller: a wood. Wider rural area: countryside.',
    ['woodland']
  ),
  guest: L(
    'Invite someone to dinner or a wedding and they become your guest. Have guests, a guest list, guests of honour. A customer pays in a shop; a guest is welcomed. The host is the person who receives them. A guest house is a small hotel.',
    ['How many guests are coming on Saturday?', 'Please make our guests feel at home.'],
    'have / invite guests. Opposite role: host. Paying in a shop: customer.',
    ['visitor']
  ),
  health: L(
    'Doctors talk about health as the state of your body and mind. In good health, health problems, public health. Healthy is the adjective (healthy food); health is the noun. Do not say “I have a good health” — say I am in good health or I am healthy.',
    ['Fresh air is good for your health.', 'He returned to work in better health.'],
    'in good / poor health. Adjective: healthy. Not “a good health.”',
    []
  ),
  heavy: L(
    'If something is hard to lift, it is heavy. This box is heavy. English also likes heavy rain, heavy traffic, and a heavy meal. Weight is the noun; heavy is the adjective. Strong is about power, not kilos. Opposite: light.',
    ['Do not carry that — it is too heavy.', 'There was heavy traffic on the motorway.'],
    'heavy rain / traffic / bag. Opposite: light. Power: strong, not heavy.',
    []
  ),
  history: L(
    'The school subject that looks at real events in the past is history. A history lesson, the history of cricket, in history. A story can be invented; history aims at what happened. Historic describes an important event; historical just means “from the past.”',
    ['We are studying the history of the city.', 'That castle has a long history.'],
    'history of + topic. historic = important. historical = from the past. Not story.',
    []
  ),
  hobby: L(
    'After work or school, a hobby is what you do for pleasure, not for pay. My hobby is cooking; a hobby of mine. An interest can be only in your head; a hobby is something you actually do. Sport can be a hobby, but so can reading or collecting stamps.',
    ['Gardening is his main hobby.', 'She took up a new hobby last winter.'],
    'my hobby is + -ing. Wider feeling: interest. Not your job.',
    ['pastime']
  ),
  joke: L(
    'People tell a joke to make others laugh — a short funny story or line. Tell a joke, get the joke, a practical joke. Funny describes the feeling; the joke is the thing you say. Joke is also a verb: I’m only joking. Joy is happiness, a different word.',
    ['Nobody laughed at his joke.', 'She can tell a joke in two languages.'],
    'tell / get a joke. Verb: joke / be joking. Feeling: funny. Not joy.',
    []
  ),
  kind: L(
    'A kind person treats others well: be kind to animals. Kind is also a noun meaning type: a kind of soup. Nice is weaker and more general. Kindness is the noun for the quality. For the “type” meaning, sort of and type of are close.',
    ['It was kind of you to wait.', 'What kind of music do you like?'],
    'Adjective: kind to + person. Noun: a kind of + thing. Quality noun: kindness.',
    ['nice']
  ),
  last: L(
    'Last looks backwards in a line or in time: the last bus (final) and last Tuesday (most recent). Latest means the newest: the latest news. Last night and last year take no preposition. At last means “finally, after waiting,” which is a different use.',
    ['We missed the last train.', 'I saw her last Friday at the market.'],
    'last = final or most recent. Newest: latest. Finally: at last.',
    ['final']
  ),
  leave: L(
    'English uses leave in two everyday ways: go away from a place (leave home at seven) and not take something with you (leave your keys on the table). Leave for a city: we leave for Lahore in the morning. Forget is about memory; leave is about the object staying behind. Past: left.',
    ['What time does the coach leave?', 'Don’t leave your bag on the bus.'],
    'leave + place. leave for + destination. leave + object = not take it. Past: left.',
    ['depart']
  ),
  library: L(
    'You borrow books from a library; you buy them in a bookshop. A library card, study in the library, return a library book. In Britain people also go there to work quietly. The person who works there is a librarian. Watch the spelling: not “libary.”',
    ['The library closes at six on Saturdays.', 'I borrowed this novel from the library.'],
    'borrow from / return to the library. Sells books: bookshop. Worker: librarian.',
    []
  ),
  magazine: L(
    'A magazine arrives every week or month: a thin periodical with articles and photos. A fashion magazine, leaf through a magazine. A newspaper is mainly daily news on larger pages; a journal can be academic. At A2 you need the reading meaning, not the gun part.',
    ['She buys a cooking magazine every month.', 'There are travel magazines in the waiting room.'],
    'a weekly / monthly magazine. Daily news: newspaper. Academic: journal.',
    []
  ),
  matter: L(
    'When something matters, it is important: it doesn’t matter if you are late. What matters is the effort. As a noun, a matter is a subject or problem: a private matter. Mind is about thinking; matter is about importance. Never mind is a close everyday phrase.',
    ['Your opinion matters to the team.', 'This is a serious matter for the school.'],
    'it doesn’t matter. what matters is…. Noun: a matter. Close phrase: never mind.',
    []
  ),
  mean: L(
    'Ask What does this word mean? when you need a definition. Mean also covers intention: I didn’t mean to interrupt. Meaning is the noun. As an adjective, mean can be “unkind,” which surprises learners. Signify is formal; mean is the everyday verb.',
    ['What do you mean by that?', 'She meant to call you yesterday.'],
    'mean = have a meaning, or intend. Noun: meaning. Adjective mean = unkind.',
    []
  ),
  medicine: L(
    'When you are ill, medicine is what you take, and also the science of treating illness. Take your medicine, a medicine for coughs, study medicine. Drug can mean the same, but it also means illegal substances, so medicine is the safer A2 word. Medication is more formal.',
    ['The doctor gave her some medicine for her ear.', 'He wants to study medicine at university.'],
    'take medicine. a medicine for + illness. Formal: medication. Careful with drug.',
    ['medication']
  ),
  meeting: L(
    'People come together for a meeting to talk with a purpose — work, school, or a plan. Have a meeting, in a meeting, a meeting with the manager. A party is for fun; an appointment is usually one-to-one with a doctor or hairdresser. Cancel a meeting is a useful phrase.',
    ['Sorry, I am in a meeting until twelve.', 'We had a short meeting after class.'],
    'have / cancel a meeting. in a meeting. Fun gathering: party. One-to-one: appointment.',
    []
  ),
  mind: L(
    'Your mind is where thoughts live: keep it in mind, change your mind, make up your mind. The brain is the physical organ; the mind is more about thinking and feeling. As a verb, mind means “object”: Would you mind waiting? Never mind means “don’t worry.”',
    ['I’ve changed my mind about the colour.', 'Would you mind closing the window?'],
    'change / make up your mind. Verb: would you mind + -ing. Phrase: never mind.',
    []
  ),
  modern: L(
    'A modern kitchen uses the style of now, not an old-fashioned one. Modern art, modern life. New is about age (bought yesterday); modern is about era and design. Contemporary is a close, more formal synonym. Ancient and traditional sit at the other end.',
    ['They prefer modern furniture.', 'The museum has a modern wing.'],
    'modern = of the present style. Age only: new. Formal: contemporary.',
    ['contemporary']
  ),
  noise: L(
    'Not every sound is a noise — noise is the sound you often do not want. Traffic noise, make a noise, too much noise. Sound is neutral; noise leans negative. Noisy is the adjective. A voice is human speech. Keep the noise down is a polite request.',
    ['I can’t sleep because of the noise next door.', 'Please keep the noise down after ten.'],
    'make a noise / keep the noise down. Neutral: sound. Adjective: noisy.',
    []
  ),
  none: L(
    'None is the pronoun for not any and not one: none of the tickets were left. No sits before a noun (no tickets); none stands alone or with of. Neither is for two items only. In everyday British English, none of them are is very common.',
    ['None of my friends can come on Friday.', 'I wanted a biscuit, but there were none.'],
    'none of + noun/pronoun. Before a noun: no. Two items: neither.',
    []
  ),
  normal: L(
    'If something is normal, it is what you expect — a normal Tuesday, back to normal. Ordinary is close; normal often contrasts with strange or with medical problems. Regular can mean “habitual” (a regular bus). Normally is the adverb: I normally walk.',
    ['After the holiday, life felt normal again.', 'It is normal to make mistakes at the start.'],
    'back to normal. Adverb: normally. Close: ordinary. Habit: regular.',
    ['usual']
  ),
  notice: L(
    'You notice something when it catches your attention, even if you were not looking for it. Did you notice her new haircut? Watch and look at are more deliberate. A notice (noun) is a written sign on a wall. Take notice of and take no notice of are common phrases.',
    ['I didn’t notice the time.', 'Have you noticed how quiet the street is?'],
    'notice + noun. Deliberate looking: watch / look at. Noun: a notice (sign).',
    ['spot']
  ),
  order: L(
    'In a café you order food; a boss can also order someone to do something. Order a pizza, order drinks. As a noun, an order is the request, or the arrangement: put them in order. A command is stronger and more military. Out of order means broken, especially machines.',
    ['Are you ready to order?', 'The teacher ordered the class to be quiet.'],
    'order + food/goods. order someone to + verb. Broken machine: out of order.',
    []
  ),
  pair: L(
    'Shoes, socks, and scissors come as a pair — two matching things used together. A pair of glasses, a new pair of jeans. A couple often means two people in a relationship. This pair is new (one pair). In pairs is a classroom instruction.',
    ['I bought a pair of warm gloves.', 'Work in pairs and check your answers.'],
    'a pair of + plural noun. Classroom: in pairs. Two people: a couple.',
    []
  ),
  partner: L(
    'The person you do the activity with is your partner: a tennis partner, a business partner, a dance partner. Friend is wider and more social; colleague is for work. In British English, partner is also a usual word for a boyfriend or girlfriend, especially in adult life.',
    ['Find a partner and practise the dialogue.', 'She started the shop with her business partner.'],
    'partner in sport/work/life. Wider: friend. Work only: colleague.',
    []
  ),
  past: L(
    'Everything before this moment belongs to the past. In the past, people travelled more slowly. Passed is the verb (the bus passed us); past is the noun, adjective, or preposition (half past three, walk past the shop). History is the study of the past; the past is the time itself.',
    ['Let’s forget the past and start again.', 'She walked past the bakery without stopping.'],
    'in the past. Verb: passed. Clock: half past. Study of then: history.',
    []
  ),
  patient: L(
    'Waiting without getting angry is being patient. Be patient with children; a patient driver. A patient (noun) is a person seeing a doctor — same spelling, different job in the sentence. Calm is a general mood; patient is specifically about waiting. Patience is the noun.',
    ['You’ll need to be patient — the download is slow.', 'The nurse asked the next patient to come in.'],
    'be patient with + person. Noun: a patient (in hospital). Quality: patience.',
    []
  ),
  pay: L(
    'You pay when money leaves your pocket for goods or work. Pay for a ticket, pay a bill, pay someone £20. Cost is what the seller asks; pay is what you do. Past: paid (not “payed”). Pay attention is an idiom — nothing to do with money.',
    ['Can I pay by card?', 'They pay their rent on the first of the month.'],
    'pay for + thing. pay + person. Past: paid. Idiom: pay attention.',
    []
  ),
  perfect: L(
    'Call something perfect when nothing is wrong with it — as good as it can be. Perfect timing, a perfect copy. Ideal is close, often about the thing you would choose. Excellent is very good but still allows a tiny fault. Perfectly is the adverb: perfectly clear.',
    ['This is a perfect place for a picnic.', 'Her pronunciation is not perfect yet, but it is clear.'],
    'perfect + noun. Adverb: perfectly. Very good but not faultless: excellent.',
    ['ideal']
  ),
  plan: L(
    'Before a trip or a busy day, you need a plan — an organised idea of what you will do. Make a plan, a plan for Sunday. Plan is also a verb: we plan to leave early. An idea is smaller; a scheme can sound secret or negative. Go according to plan is a set phrase.',
    ['What’s the plan for tomorrow evening?', 'They plan to visit their grandparents in June.'],
    'make a plan / a plan for. Verb: plan to + verb. Smaller: idea.',
    []
  ),
  popular: L(
    'If many people like a café or a song, it is popular. Popular with students, a popular choice. Famous means many people know the name; they may not like it. Unpopular is the opposite. Popularity is the noun. Do not say “a popular person of everyone” — say popular with everyone.',
    ['Short videos are popular on that app.', 'He is popular with his classmates.'],
    'popular with + group. Known name: famous. Opposite: unpopular. Noun: popularity.',
    ['well-liked']
  ),
  pretty: L(
    'Pretty is a gentle word for nice to look at: a pretty garden, a pretty dress. Beautiful is stronger; handsome is more often used for men. As an adverb, pretty means “quite”: pretty good, pretty tired. Cute is more informal and often for children or small things.',
    ['What a pretty view from this window.', 'I’m pretty sure we met at the wedding.'],
    'Adjective: pleasant to look at. Adverb pretty = quite. Stronger: beautiful.',
    ['attractive']
  ),
  price: L(
    'The number on the tag is the price — how much you must pay. The price of petrol, a high price, half price. Cost is close; price is what is written or asked. Prize is an award, a common spelling mix-up. Priceless means extremely valuable, not “no price.”',
    ['Is the price the same online?', 'They reduced the price at the end of the day.'],
    'the price of + thing. half price. Award: prize. Very valuable: priceless.',
    ['cost']
  ),
  product: L(
    'Factories make a product to sell — a thing that is produced. Dairy products, a new product on the shelf. Goods is a general plural for things on sale. Produce as a noun often means fruit and vegetables in British shops. Production is the process of making it.',
    ['Always read the label on the product.', 'This company is famous for beauty products.'],
    'a product / products. Fruit and veg: produce. Process: production.',
    []
  ),
  protect: L(
    'A coat can protect you from the rain: keep someone or something safe from harm. Protect from / against danger. Defend is often about fighting back; protect is about keeping safe. Protection is the noun. Guard can mean watch over a place.',
    ['Sunscreen protects your skin.', 'Laws exist to protect children.'],
    'protect someone from / against. Noun: protection. Fighting back: defend.',
    ['guard']
  ),
  proud: L(
    'When a result makes you stand a little taller, you feel proud. Proud of her exam results, proud to represent the school. Pride is the noun. Arrogant is proud in a bad, superior way. Glad is a lighter, everyday happiness without the achievement flavour.',
    ['He was proud of the meal he had cooked.', 'We are proud to welcome you here.'],
    'proud of + person/thing. proud to + verb. Noun: pride. Negative: arrogant.',
    []
  ),
  public: L(
    'A public place is open to everyone, not private. Public transport, a public library, in public. The public (noun) means people in general. Publish is a related verb: make a book public. In Britain, a public school can mean a fee-paying school — a false friend for many learners.',
    ['Please do not talk about this in public.', 'There is little public parking near the hospital.'],
    'public + noun. in public. Opposite: private. People in general: the public.',
    []
  ),
  purpose: L(
    'Purpose answers the question why — the reason you do something. The purpose of this form, a sense of purpose. On purpose means deliberately; by accident is the opposite. Aim and goal are close; purpose often names the reason, not only the target. Purposeful is the adjective.',
    ['What is the purpose of this button?', 'She knocked the glass over, but not on purpose.'],
    'the purpose of. on purpose = deliberately. Opposite: by accident. Close: aim.',
    ['aim']
  ),
  recently: L(
    'If it happened not long ago, it happened recently. It often sits with the present perfect: I have recently moved. Lately is a close synonym. Put it before the main verb or at the end. Ago needs a number: two days ago, not “recently two days.”',
    ['Have you seen Ahmed recently?', 'She recently changed her phone number.'],
    'often with present perfect. Close: lately. Length of time + ago, not recently.',
    ['lately']
  ),
  remain: L(
    'Remain is a slightly formal way to say stay in the same place or condition. Remain calm, remain seated, remain open. Stay is the everyday verb for places. What is left can also “remain”: little time remains. The remainder is the noun for the leftover part.',
    ['Please remain quiet during the test.', 'The shop remained closed all afternoon.'],
    'remain + adjective. Everyday: stay. Leftover noun: remainder.',
    ['stay']
  ),
  rent: L(
    'You rent a flat when you pay to live in someone else’s home. Rent a car, pay the rent (noun). Borrow is free and usually short. In British English, hire is common for cars and tools for a short time; rent is the usual verb for housing.',
    ['How much do they rent the room for?', 'We might rent bikes for the weekend.'],
    'rent a flat / pay the rent. Free and short: borrow. Short hire of cars/tools: hire.',
    ['hire']
  ),
  repair: L(
    'When a phone or a bike stops working, you repair it — make the broken thing work again. Repair a window, under repair. Fix is more informal. Mend is common for clothes. Repair is also a noun: car repairs. You treat a person who is ill; you repair a thing.',
    ['The lift is being repaired this week.', 'It will cost more to repair than to replace.'],
    'repair a thing. Informal: fix. Clothes: mend. People: treat, not repair.',
    ['fix']
  ),
  repeat: L(
    'Teachers ask you to repeat so you hear or say the sentence again. Repeat after me, repeat the question. Repetition is the noun. Revise is study again before a test; repeat is do or say again. Repeat yourself can sound negative if you say the same thing too often.',
    ['Could you repeat that more slowly?', 'History seems to repeat itself.'],
    'repeat + words/action. Study again: revise. Noun: repetition.',
    []
  ),
  report: L(
    'A report sticks to facts — a spoken or written description of events. Write a report, a weather report, a school report. A story can be invented; a report should not be. Report is also a verb: report a problem to the manager. Account is a close formal synonym.',
    ['The news report started at six.', 'Please report any damage to the office.'],
    'write / a news report. Verb: report something to someone. Invented: story.',
    ['account']
  ),
  rest: L(
    'After hard work, rest lets your body recover: stop moving so you can relax. Rest for a while, get some rest (noun). Sleep is only when you are asleep; rest includes sitting quietly with your eyes open. The rest means the remaining part: the rest of the week.',
    ['Your legs need to rest after the climb.', 'Let’s rest here and drink some water.'],
    'rest / get some rest. Sleep is one kind of rest. Remaining part: the rest of.',
    ['relax']
  ),
  rich: L(
    'A rich person has a lot of money; a rich sauce has a lot of flavour or cream. A rich country, rich in oil. Wealthy is a close synonym for money. Poor is the opposite. Rich in vitamins is a useful pattern. Wealth is the usual noun; riches sounds old-fashioned.',
    ['The soil here is rich and good for farming.', 'She comes from a rich family, but she lives simply.'],
    'rich in + thing. Money synonym: wealthy. Opposite: poor. Noun: wealth.',
    ['wealthy']
  ),
  rise: L(
    'When prices rise, they go up by themselves. The sun rises in the east. Raise needs an object: raise your hand, raise prices. Arise is more formal (“a problem arose”). Rise also means get out of bed. Past: rose / risen.',
    ['The temperature will rise this afternoon.', 'She rises early during the week.'],
    'rise = go up (no object). raise + object. Past: rose, risen.',
    []
  ),
  rule: L(
    'A game does not work without a rule — an official line that says what you must or must not do. Follow the rules, break a rule, a school rule. A law comes from government; a rule can come from a class, a sport, or a family. As a verb, rule can mean govern, but at A2 the noun comes first.',
    ['One rule is “no phones in the exam.”', 'If you break the rules, you sit out.'],
    'follow / break a rule. Government: law. Classroom and games use rule.',
    []
  ),
  safe: L(
    'You ask if a place is safe before you swim: not in danger, and not likely to cause harm. Safe to drink, a safe password, keep it safe. Secure often stresses locked or protected. Safety is the noun: safety rules. Save is the verb (rescue or keep money).',
    ['Is this area safe at night?', 'Keep the tickets in a safe place.'],
    'safe to + verb. Noun: safety. Verb: save. Locked/protected: secure.',
    ['secure']
  ),
  same: L(
    'If two classes share one teacher, they have the same teacher — not different. The same as mine, at the same time. Similar means almost the same, not exact. Identical is exactly the same in every detail. Always use the before same. Opposite: different.',
    ['We arrived at the same moment.', 'This bag is the same as yours, but cheaper.'],
    'the same (as). Almost: similar. Exact in every way: identical. Opposite: different.',
    []
  ),
  save: L(
    'Save your coins, or save a person from danger — keep something for later, or rescue someone. Save up for a bike, save time, save electricity. Spend is the opposite of saving money. Rescue covers only the danger meaning. Safe is the adjective.',
    ['I’m saving for a new laptop.', 'The lifeguard saved the child in the pool.'],
    'save money / time / a life. Opposite (money): spend. Adjective: safe.',
    []
  ),
  science: L(
    'Tests, ideas, and the natural world sit under science. Study science, a science lesson, science and maths. Physics, chemistry, and biology are science subjects. A scientist does the work; scientific is the adjective. Science fiction is stories, not the school subject.',
    ['She wants to teach science at secondary school.', 'This programme explains climate science simply.'],
    'study science. Person: scientist. Adjective: scientific. Stories: science fiction.',
    []
  ),
  seem: L(
    'From the outside, a person can seem tired even if they say they are fine — appear to be a certain way. Seem + adjective, seem to be, it seems that. Look often describes appearance only; seem includes your impression. Appear is a little more formal.',
    ['The film seemed shorter than it was.', 'It seems to be a useful app.'],
    'seem + adjective / seem to + verb. Appearance only: look. Formal: appear.',
    ['appear']
  ),
  several: L(
    'Several sits between a couple and many — more than two, but not a huge number. Several times, several people in the queue. A few can be smaller; many is larger. Several takes a plural noun. Some is vaguer about the number.',
    ['She has lived in several cities.', 'We waited several minutes for the lift.'],
    'several + plural noun. Smaller: a few. Larger: many. Vague: some.',
    []
  ),
  share: L(
    'Two people share a meal when they use or divide it together. Share a room, share with a colleague, share the bill. Split often means divide into parts. Online, share means post something. A share (noun) is a part of a whole.',
    ['Can we share this dessert?', 'He shared his notes with the class.'],
    'share + thing with + person. Noun: a share. Online: share a post. Divide: split.',
    []
  ),
  since: L(
    'Since 2019 marks a starting point that still continues, often with the present perfect: I have worked here since May. For + a length of time (for three years). From can start a period that may already have finished. Since can also mean “because”: since you are here, sit down.',
    ['She has felt better since the holiday.', 'We haven’t spoken since the argument.'],
    'since + point in time (present perfect). Length: for. Also: since = because.',
    []
  ),
  smile: L(
    'A smile is the small movement of the mouth that shows you are happy or friendly — and it is a verb too. Smile at the baby, a warm smile. Laugh is louder and often follows a joke. Grin is a wide smile. Just smile is enough; “wear a smile” sounds poetic.',
    ['The shop assistant smiled as we came in.', 'He tried to smile, but he was still upset.'],
    'smile at + person. Noun: a smile. Louder: laugh. Wide: grin.',
    []
  ),
  sometimes: L(
    'Life is not always or never; sometimes sits in the middle — on some occasions. It can start the sentence or sit before the verb. Occasionally is close, a little less common. Sometime (no s) means at an unspecified time: let’s meet sometime. Frequency: always – often – sometimes – rarely – never.',
    ['Sometimes the bus is completely full.', 'He is sometimes late on Mondays.'],
    'sometimes = on some occasions. No s: sometime = at some point. Scale: often / rarely.',
    ['occasionally']
  ),
  special: L(
    'A birthday feels special because it is not an ordinary day — different from the usual, often in a good way. A special offer, special guests. Specific means exact and detailed, not “extra nice.” Especially is the adverb for “particularly.” A specialist is a person with special skill.',
    ['They cooked a special meal for Eid.', 'Is there anything special you want to do?'],
    'special + noun. Exact/detailed: specific. Adverb: especially. Expert: specialist.',
    []
  ),
  spend: L(
    'English lets you spend both money and time: spend £10 on a book, spend the afternoon cooking. Past: spent. Pay is handing money over in the moment; spend is using it. Waste is spend badly. You spend time doing something, not “spend time to do.”',
    ['Don’t spend all your cash on snacks.', 'We spent the morning at the market.'],
    'spend money on. spend time + -ing. Past: spent. Badly: waste. Hand over: pay.',
    []
  ),
  sport: L(
    'Football, tennis, and swimming are each a sport — a physical game or activity. Play sport, a team sport, do sport. In British English, sport can be uncountable; sports is common too. A game can be a board game as well. Exercise is activity for health, not always a match. An athlete is the person.',
    ['He does a lot of sport at the weekend.', 'Which sport do you watch on television?'],
    'play / do sport. Uncountable sport is common in BrE. Health activity: exercise.',
    []
  ),
  strange: L(
    'If a sound is not familiar, it may feel strange — unusual, surprising, or new to you. A strange smell, feel strange in a new city. Odd is a close synonym. A stranger is a person you do not know. Weird is more informal and stronger. Unusual is more neutral.',
    ['It felt strange to be back in my old classroom.', 'That’s strange — the lights are on, but nobody is in.'],
    'strange = unusual / unfamiliar. Person you don’t know: stranger. Informal: weird.',
    ['odd']
  ),
  success: L(
    'When a plan works, you can call it a success — a good result after effort. A big success, success in exams. The verb is succeed: succeed in + -ing. Successful is the adjective: a successful day. Failure is the opposite. Luck is chance; success is often earned. Not “a success person.”',
    ['The new café was an immediate success.', 'Hard work does not always bring success, but it helps.'],
    'a success. Verb: succeed in + -ing. Adjective: successful. Opposite: failure.',
    []
  ),
  sweet: L(
    'Sugar makes food sweet; a sweet person is kind in a pleasant way. Too sweet, a sweet smile. Savoury is the opposite taste (salt and spice). Sweets (noun, British) are confectionery. Cute overlaps with the “pleasant” meaning for people and small things.',
    ['These apples are naturally sweet.', 'That was a sweet thing to say.'],
    'sweet taste vs savoury. Kind person: sweet. BrE noun: sweets (candy).',
    []
  ),
  taste: L(
    'Food can taste salty, and you can taste a little before you buy — have a flavour, or try a small amount. Taste of lemon, taste like chicken. Flavour is the noun for the quality. Tasty means delicious. Taste can also mean a person’s style: a taste in music.',
    ['Can I taste a bit of the sauce?', 'The water tasted of metal from the old pipes.'],
    'taste + adjective. taste of / like. Noun for quality: flavour. Delicious: tasty.',
    []
  ),
  team: L(
    'A team shares one goal, on the pitch or at work. A football team, join a team, team spirit. Group is looser; a team has a shared aim. Crew is for a ship, plane, or film set. A teammate is a person on the same team. Teamwork is usually one word.',
    ['Our team plays on Saturday mornings.', 'She leads a small team in the office.'],
    'in / on a team. Looser: group. Ship/film: crew. Person: teammate.',
    []
  ),
  true: L(
    'A true story matches what really happened — based on fact, not invented. Come true is for wishes and dreams. Truth is the noun. Real is about existence (a real ticket, not a copy); true is about correctness. False and untrue are opposites. Truly is the adverb.',
    ['Is it true that the school is closing?', 'Her dream of living by the sea came true.'],
    'true story / come true. Noun: truth. Existence: real. Opposite: false.',
    []
  ),
  try: L(
    'To try is to make an effort, even if you might fail — or to test something. Try to + verb (effort), try + -ing (test an activity). Attempt is more formal. Try on is for clothes. Manage means you succeed; try does not promise that. Past: tried.',
    ['Try calling her after lunch.', 'He tried to lift the suitcase, but it was stuck.'],
    'try to + verb (effort). try + -ing (test). Clothes: try on. Past: tried.',
    ['attempt']
  ),
  until: L(
    'Until draws a line in time: the waiting or the state continues up to that point. Wait until Friday; the shop is open until eight. Till is the informal short form. By means “no later than” (finish by Friday — it can be earlier). Do not use until with a length: wait for ten minutes, not “until ten minutes.”',
    ['I’ll be at work until six.', 'Don’t open your books until I tell you.'],
    'until + time/event. Informal: till. No later than: by. Length of time: for.',
    ['till']
  ),
  village: L(
    'A handful of houses and a shop can make a village — a small country settlement, smaller than a town. In a village, a village hall. The countryside is the rural landscape; a village is the community. A hamlet is even smaller. A villager lives there.',
    ['There is only one bus from the village each morning.', 'They moved from the city to a quiet village.'],
    'in a village. Smaller than town/city. Landscape: countryside. Person: villager.',
    []
  ),
  voice: L(
    'When you speak or sing, the sound is your voice. A quiet voice, raise your voice, lose your voice (when you are ill). Sound is any noise; voice is human. In a loud voice / in a low voice are set phrases. Vote is a different word with a similar shape.',
    ['Please keep your voice down in the library.', 'I recognised her voice on the phone.'],
    'raise / lower / lose your voice. in a loud / quiet voice. Any noise: sound.',
    []
  ),
  wear: L(
    'In the morning you put clothes on; after that you wear them — have clothes, glasses, or jewellery on your body. Wear a coat, wear glasses. Carry is in your hands. Past: wore / worn. Wear out means become damaged from use: these shoes are worn out.',
    ['You should wear a helmet on the bike.', 'She wore her sister’s jacket to the party.'],
    'wear + clothes/glasses. Action of dressing: put on. Past: wore, worn.',
    []
  ),
  welcome: L(
    'When guests arrive, you welcome them at the door — greet them in a friendly way. Welcome to Manchester, a warm welcome (noun). You are welcome is the adjective after thanks. Invite is asking someone to come; welcome is how you receive them once they are there.',
    ['The school welcomed the new families on Monday.', 'Welcome to our home — come in.'],
    'welcome someone / welcome to + place. Noun: a welcome. Ask to come: invite.',
    ['greet']
  ),
  win: L(
    'The team that scores more will win — come first in a game, race, or competition. Win a match, win a prize. Beat takes the other team as the object: we beat them. Earn is money from work. Lose is the opposite. Past: won. A win is also a noun.',
    ['Did you win anything at the fair?', 'If we win tonight, we go through to the final.'],
    'win a game / a prize. beat + opponent. Opposite: lose. Past: won.',
    []
  ),
  wish: L(
    'Wish looks at a world that is not real yet: I wish I could drive. It often takes a past form after it. Hope is for things that may still happen: I hope you pass. Wish someone luck and best wishes are set phrases. A wish is also a noun: make a wish.',
    ['I wish the buses ran later.', 'We wish you a safe journey.'],
    'wish + past form (unreal). hope + present/future (possible). Noun: a wish / best wishes.',
    []
  ),
  yet: L(
    'In Have you eaten yet?, yet means up to this moment, in questions and negatives. I haven’t finished yet. Already belongs in positives: I have already finished. Still means the situation continues: I am still hungry. Yet can also mean “but” in careful writing: small yet strong.',
    ['Has the post arrived yet?', 'He hasn’t called yet, so wait a bit longer.'],
    'yet = questions and negatives (up to now). already = positives. continuing: still.',
    []
  ),
}
