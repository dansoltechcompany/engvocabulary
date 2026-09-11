const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2L = {
  nasty: L(
    'Nasty means unkind, unpleasant, or likely to hurt: a nasty comment, a nasty cold, a nasty fall. Unpleasant is a close cousin for smells and situations; nasty often feels stronger and more personal. Nice is the everyday opposite. Do not write nasty when you mean messy (untidy) — different word.',
    ['That was a nasty thing to say to a colleague.', 'She had a nasty cut on her knee after the match.'],
    'a nasty comment / cold / fall. Cousin: unpleasant. Opposite: nice. Mix-up: messy.',
    ['unpleasant']
  ),
  nation: L(
    'A nation is a country and its people: the whole nation, a poor nation, nations around the world. Country is the everyday cousin (often the land and government). State can mean a country or a region inside one. National is the adjective. Do not write nation when you mean national (the adjective), or notion (an idea).',
    ['The whole nation watched the final on television.', 'Trade between the two nations has grown this year.'],
    'the whole nation / nations around the world. Cousin: country. Adjective: national. Mix-up: notion.',
    ['country']
  ),
  nationality: L(
    'Nationality is the legal status of belonging to a country: British nationality, dual nationality, What is your nationality? Nation is the country itself; nationality is your official belonging. Passport shows nationality, but a passport is the document. Do not write nationality when you mean nation, or national (adjective).',
    ['Please write your nationality on the form.', 'She has Irish nationality but lives in Cardiff.'],
    'British nationality / What is your nationality? Contrast: nation (the country). Mix-up: national.',
    []
  ),
  native: L(
    'Native means connected with the place you were born: a native speaker, native language, native to this island. Local means from the area you are in now, which may not be where you were born. Foreign is a contrast. Native speaker is a common collocation. Do not write native when you mean naïve (too trusting — later level), or nation.',
    ['English is not his native language, but he is fluent.', 'These plants are native to the west of Scotland.'],
    'a native speaker / native language. Contrast: local (here now), foreign. Mix-up: nation.',
    []
  ),
  naturally: L(
    'Naturally means in a normal way, or by nature: naturally shy, come naturally, naturally blonde. Natural is the adjective; nature is the noun for the outdoor world. Of course is a cousin in some replies (Naturally I will help). Do not write naturally when you mean nationally, or nature when you need the adverb.',
    ['Languages come naturally to some learners.', 'The hair colour is naturally dark, not dyed.'],
    'come naturally / naturally shy. Adjective: natural. Mix-ups: nationally, nature.',
    []
  ),
  navy: L(
    'The navy is the sea part of a country’s armed forces: join the navy, the Royal Navy, a navy ship. Army is on land; air force is in the sky. Navy blue is a dark blue colour — extra A2 sense. Do not write navy when you mean knave (old card word) or neighbour.',
    ['She spent four years in the navy before university.', 'He bought a navy jumper, not a black one.'],
    'join the navy / the Royal Navy. Land contrast: army. Colour extra: navy blue.',
    []
  ),
  nearby: L(
    'Nearby means not far away: a shop nearby, live nearby, a nearby café. Near is a close cousin (near the station). Next door is even closer — the building beside you. Nearby can be an adverb or adjective. Do not write nearby when you mean nearly (almost).',
    ['Is there a cash machine nearby?', 'We stayed in a nearby village and walked to the lake.'],
    'a shop nearby / a nearby café. Cousin: near. Mix-up: nearly (almost).',
    ['near']
  ),
  neat: L(
    'Neat means tidy and carefully arranged: a neat desk, neat handwriting, keep it neat. Tidy is a close everyday cousin. Messy is the opposite. Neat can also mean clever (a neat trick) — extra. Do not write neat when you mean knit (make wool clothes), or need.',
    ['Her notes are always neat and easy to read.', 'Fold the towels in a neat pile in the cupboard.'],
    'neat handwriting / a neat desk. Cousin: tidy. Opposite: messy. Mix-up: knit.',
    ['tidy']
  ),
  needle: L(
    'A needle is a thin metal point for sewing or injections: a needle and thread, a knitting needle, a needle in a haystack. Pin is shorter and has a round head. Needle can also mean annoy someone — extra later. Do not write needle when you mean noodle (food) — easy mix-up.',
    ['She threaded the needle on the third try.', 'The nurse used a new needle for the injection.'],
    'a needle and thread / knitting needle. Shorter cousin: pin. Mix-up: noodle (food).',
    []
  ),
  nest: L(
    'A nest is a bird’s home for eggs and young: build a nest, a bird’s nest, leave the nest. Den or burrow is for some other animals. Nest can be a verb (birds nest here). Do not write nest when you mean next, or nestle (lie close — later).',
    ['Three eggs appeared in the nest this morning.', 'Do not touch a nest if the parent birds are nearby.'],
    'a bird’s nest / build a nest. Mix-up: next. Verb extra: birds nest here.',
    []
  ),
  newly: L(
    'Newly means recently: a newly opened shop, newly married, newly painted. New is the adjective; newly is the adverb before another adjective or a past participle. Recently is a close cousin. Do not write newly when you mean nearly, or new when you need the adverb.',
    ['The newly opened café is already full at lunchtime.', 'They are a newly married couple from Leeds.'],
    'newly opened / newly married. Adjective: new. Cousin: recently. Mix-up: nearly.',
    ['recently']
  ),
  nightmare: L(
    'A nightmare is a frightening dream, or a very bad experience: have a nightmare, a traffic nightmare, a nightmare journey. Dream is the general word; a nightmare is a bad one. Bad dream is a simpler cousin. Do not write nightmare when you mean night-time, or nightwear (pyjamas).',
    ['The delay at the airport was a nightmare.', 'He still has nightmares about the storm at sea.'],
    'have a nightmare / a nightmare journey. General: dream. Mix-up: night-time.',
    []
  ),
  nod: L(
    'Nod means move your head up and down to say yes or show you agree: nod your head, nod in agreement, give a nod. Shake your head means no. Wave uses your hand. Past: nodded. Do not write nod when you mean not, or node (a technical point).',
    ['The teacher nodded when the answer was right.', 'She gave a quick nod and opened the gate.'],
    'nod your head / nod in agreement. Contrast: shake your head (no). Past: nodded. Mix-up: not.',
    []
  ),
  nonsense: L(
    'Nonsense is silly or untrue talk: talk nonsense, complete nonsense, a load of nonsense. Rubbish can mean the same in British English for ideas. Sense is almost the opposite idea. Uncountable in this meaning (not “a nonsense” except in a few set phrases). Do not write nonsense when you mean nuisance (something annoying).',
    ['Ignore that rumour — it is complete nonsense.', 'He talks nonsense when he is tired.'],
    'talk nonsense / complete nonsense. British cousin: rubbish. Mix-up: nuisance.',
    []
  ),
  nor: L(
    'Nor adds another negative after neither, or after a negative clause: neither tea nor coffee, I cannot swim, nor can she. Or is for choices that are not both negative. Neither … nor is the pair to learn. Do not write nor when you mean or, or north.',
    ['He neither emailed nor left a note.', 'The room has no heating, nor does it have a fan.'],
    'neither … nor / not … nor. Contrast: or (not a double negative). Mix-up: north.',
    []
  ),
  normally: L(
    'Normally means usually, in the usual way: I normally finish at five, normally open, as normally. Usually is a close synonym. Normal is the adjective. Never and rarely are opposites in frequency. Do not write normally when you mean formally (in a formal way).',
    ['The library is normally quiet on Monday mornings.', 'Do you normally take milk in your tea?'],
    'I normally … / normally open. Synonym: usually. Adjective: normal. Mix-up: formally.',
    ['usually']
  ),
  northern: L(
    'Northern means in or from the north of a place: northern England, the northern coast, a northern accent. North is the noun or adverb (go north); northern is the adjective. Southern, eastern, and western are the other directions. Do not write northern when you mean Northen as a surname, or nothing.',
    ['The northern hills still had snow in April.', 'She has a strong northern accent.'],
    'northern England / the northern coast. Noun/adverb: north. Pair: southern. Mix-up: north (different form).',
    []
  ),
  novel: L(
    'A novel is a long fictional book: read a novel, a detective novel, her first novel. Story can be short; a novel is book-length. Fiction is the wider type. Novel as an adjective means new and unusual — extra later. Do not write novel when you mean a travel guide, or navel (the belly button).',
    ['This novel is set in a seaside town.', 'He borrowed three novels from the library.'],
    'read a novel / a detective novel. Shorter cousin: story. Mix-up: navel.',
    []
  ),
  novelist: L(
    'A novelist is a person who writes novels: a famous novelist, a crime novelist, the novelist’s latest book. Writer is wider (poems, articles too). Author is a close cousin. Poet writes poems. Do not write novelist when you mean novelty (something new and unusual).',
    ['The novelist grew up in this village.', 'A local novelist is speaking at the bookshop tonight.'],
    'a famous novelist / a crime novelist. Wider: writer, author. Mix-up: novelty.',
    ['author']
  ),
  nowadays: L(
    'Nowadays means at the present time, often compared with the past: nowadays people, these days is a cousin. Now is a shorter cousin but less “compared with then”. Then or in the past is the contrast. One word, not “now a days”. Do not write nowadays when you mean now and then (sometimes).',
    ['Nowadays most tickets are on your phone.', 'Children spend more time indoors nowadays than we did.'],
    'nowadays people … / these days (cousin). Contrast: in the past. One word. Mix-up: now and then.',
    []
  ),
  nowhere: L(
    'Nowhere means not in or to any place: nowhere to sit, go nowhere, nowhere near. Somewhere, anywhere, and everywhere are the related set. No one is for people, not places. Two ideas in one word. Do not write nowhere when you mean now here (two words), or know where.',
    ['The keys were nowhere in the flat.', 'We had nowhere to park near the theatre.'],
    'nowhere to sit / nowhere near. Set: somewhere, anywhere, everywhere. Mix-up: now here.',
    []
  ),
  nuclear: L(
    'Nuclear describes energy from atoms, or weapons that use that energy: a nuclear power station, nuclear energy, nuclear weapons. Electric is everyday power from sockets; nuclear is one way to make electricity. Atomic is a close scientific cousin. Do not write nuclear when you mean unclear, or new clear as two words.',
    ['There was a protest outside the nuclear plant.', 'The lesson explained how nuclear energy heats water.'],
    'a nuclear power station / nuclear weapons. Everyday contrast: electric. Mix-up: unclear.',
    []
  ),
  nursery: L(
    'A nursery is a place that looks after very young children, or a shop that sells plants: at the nursery, a nursery school, a garden nursery. Kindergarten and preschool are cousins for children. Hospital nursery is for newborn babies — extra. Do not write nursery when you mean nurse, or nursing.',
    ['The nursery closes at six in the evening.', 'We bought tomato plants at the garden nursery.'],
    'at the nursery / a garden nursery. Child cousins: preschool. Mix-up: nurse.',
    []
  ),
  nutrition: L(
    'Nutrition is the food your body needs, or the study of that food: good nutrition, a nutrition label, sports nutrition. Diet can mean what you usually eat, or eating less to lose weight. Food is the everyday word; nutrition stresses health. Uncountable. Do not write nutrition when you mean nutritious (the adjective).',
    ['The poster on the wall is about healthy nutrition.', 'A nurse gave a short talk on nutrition for teenagers.'],
    'good nutrition / a nutrition label. Everyday: food. Adjective: nutritious. Uncountable.',
    []
  ),
  nutritious: L(
    'Nutritious means containing what the body needs: a nutritious meal, nutritious snacks, more nutritious than crisps. Healthy is a close everyday cousin. Junk food is the opposite idea. Nutrition is the noun. Do not write nutritious when you mean delicious (tastes very good) — healthy food can be either.',
    ['Lentil soup is cheap and nutritious.', 'Pack a nutritious lunch, not only biscuits.'],
    'a nutritious meal / snack. Cousin: healthy. Noun: nutrition. Mix-up: delicious.',
    ['healthy']
  ),
  unable: L(
    'Unable means not able: be unable to, unable to come, unable to sleep. Cannot / can’t is the everyday verb form. Disabled is a different word about a long-term condition — do not mix them. Able is the opposite. Followed by to + verb. Do not write unable when you mean enable (make possible).',
    ['I am unable to attend the meeting on Friday.', 'She was unable to find her ticket at the gate.'],
    'be unable to + verb. Everyday: cannot. Opposite: able. Mix-up: enable, disabled.',
    []
  ),
  unacceptable: L(
    'Unacceptable means too bad or wrong to allow: unacceptable behaviour, completely unacceptable, an unacceptable delay. Acceptable is the opposite. Unpleasant is about comfort, not rules. Accept is the verb. Do not write unacceptable when you mean exceptable (not a real word) or exceptional.',
    ['Shouting at customers is unacceptable.', 'The hotel said the noise after midnight was unacceptable.'],
    'unacceptable behaviour / completely unacceptable. Opposite: acceptable. Mix-up: exceptional.',
    []
  ),
  unaware: L(
    'Unaware means not knowing about something: be unaware of, unaware that, completely unaware. Aware is the opposite. Unknown describes the thing, not the person. Unconscious is medical — much stronger. Do not write unaware when you mean underwear, or unaware of vs don’t care (unwilling).',
    ['I was unaware of the extra charge on the bill.', 'They walked on, unaware that the path was closed.'],
    'be unaware of / unaware that. Opposite: aware. Stronger mix-up: unconscious.',
    []
  ),
  uncertain: L(
    'Uncertain means not sure: I am uncertain, uncertain about, an uncertain future. Unsure is a close synonym. Certain and sure are opposites. Uncertainty is the noun (already a higher word in some lists). Do not write uncertain when you mean uncertainty, or uncle.',
    ['She is still uncertain which bus to take.', 'The weather for the picnic is uncertain.'],
    'uncertain about / an uncertain future. Synonym: unsure. Opposite: certain, sure.',
    ['unsure']
  ),
  uncomfortable: L(
    'Uncomfortable means not pleasant to wear, sit in, or feel: uncomfortable shoes, an uncomfortable silence, feel uncomfortable. Comfortable is the opposite. Awkward is a cousin for social situations. Painful is stronger and about hurt. Do not write uncomfortable when you mean uncomfortably (adverb).',
    ['The wooden bench was uncomfortable after an hour.', 'He felt uncomfortable talking about money.'],
    'uncomfortable shoes / feel uncomfortable. Opposite: comfortable. Social cousin: awkward.',
    []
  ),
  uncommon: L(
    'Uncommon means not happening or found often: uncommon in this area, not uncommon (a double negative meaning quite common). Rare is stronger. Common is the opposite. Unusual is a close cousin. Do not write uncommon when you mean uncommonly (adverb), or income.',
    ['Palm trees are uncommon in this part of Britain.', 'It is not uncommon to queue for the ferry in summer.'],
    'uncommon in … / not uncommon (= quite common). Stronger: rare. Opposite: common. Cousin: unusual.',
    ['unusual']
  ),
  underline: L(
    'Underline means draw a line under words, or show that something is important: underline the title, underline the risk. Highlight is a cousin (marker pen or stress). Understand is a different verb. Under is the short preposition. Do not write underline when you mean undermine (weaken — later) or understand.',
    ['Underline every adjective in the paragraph.', 'The report underlines the need for more buses.'],
    'underline the title / underline the need. Cousin: highlight. Mix-ups: understand, undermine.',
    []
  ),
  underneath: L(
    'Underneath means directly below: underneath the table, the label underneath, from underneath. Under is shorter and very common; underneath often feels more “right below / covered by”. Below can be more general. Do not write underneath when you mean underwear, or understand.',
    ['There is a spare key underneath the flowerpot.', 'The cable ran underneath the carpet.'],
    'underneath the table / from underneath. Shorter cousin: under. Mix-up: underwear.',
    ['under']
  ),
  underwear: L(
    'Underwear is clothes worn next to the skin: a change of underwear, winter underwear, pack your underwear. Uncountable in this general sense (not “an underwear”). Pants in British English often means underwear; in American English pants are trousers. Clothes is the wider word. Do not write underwear when you mean under wear as two words, or unaware.',
    ['Put the clean underwear in the top drawer.', 'You will need warm underwear for the ski trip.'],
    'a change of underwear (uncountable). British: pants often = underwear. Mix-up: unaware.',
    []
  ),
  undo: L(
    'Undo means unfasten something, or reverse a recent action: undo a button, undo a zip, undo a mistake. Redo is do again. Open is wider. On a computer, Undo reverses the last click. Past: undid; past participle: undone. Do not write undo when you mean under, or undue (too much — later).',
    ['Undo the top button if the collar is tight.', 'I undid the last change and typed the email again.'],
    'undo a button / zip. Computer: Undo. Past: undid / undone. Mix-up: under.',
    []
  ),
  unemployed: L(
    'Unemployed means without a paid job: be unemployed, unemployed workers, long-term unemployed. Unemployed is the adjective; unemployment is the noun. Retired means you have stopped work because of age. Student is not the same as unemployed. Do not write unemployed when you mean unemployment, or employed (the opposite).',
    ['Many people were unemployed after the shop closed.', 'She has been unemployed for three months and is looking for work.'],
    'be unemployed / unemployed workers. Noun: unemployment. Contrast: retired, employed.',
    []
  ),
  unexpected: L(
    'Unexpected means surprising because you did not think it would happen: an unexpected visitor, unexpected news, completely unexpected. Surprise is the noun or verb cousin. Expected is the opposite. Sudden stresses speed; unexpected stresses “not in the plan”. Do not write unexpected when you mean excepted, or inspected.',
    ['We had an unexpected day off because of the snow.', 'The bill was higher than expected — the extra fee was unexpected.'],
    'an unexpected visitor / news. Opposite: expected. Cousin idea: surprise. Mix-up: excepted.',
    []
  ),
  unfair: L(
    'Unfair means not treating people equally, or not right: unfair rules, it is unfair to, an unfair advantage. Fair is the opposite. Unkind is about feelings; unfair is about justice or equal treatment. Foul is for sport cheating — related idea. Do not write unfair when you mean unfairly (adverb), or airfare.',
    ['Sharing one prize among ten people feels unfair.', 'The referee’s decision was unfair, in our view.'],
    'it is unfair to / an unfair advantage. Opposite: fair. Contrast: unkind (feelings). Mix-up: airfare.',
    []
  ),
  unforgettable: L(
    'Unforgettable means so special you will always remember it: an unforgettable day, unforgettable views, an unforgettable meal. Memorable is a close cousin. Forgettable is rare; forget is the verb. Unforgotten is not the usual opposite form. Do not write unforgettable when you mean forgetful (you often forget things).',
    ['The night market was unforgettable.', 'Winning the cup made the season unforgettable for the team.'],
    'an unforgettable day / meal. Cousin: memorable. Mix-up: forgetful (person who forgets).',
    ['memorable']
  ),
  unfriendly: L(
    'Unfriendly means not kind or welcoming: an unfriendly look, unfriendly staff, seem unfriendly. Friendly is the opposite. Rude is stronger and about manners. Shy people can seem unfriendly without meaning to. Do not write unfriendly when you mean unfriend (remove on social media).',
    ['The dog is unfriendly with strangers.', 'An unfriendly email is a poor way to start a partnership.'],
    'unfriendly staff / seem unfriendly. Opposite: friendly. Stronger: rude. Mix-up: unfriend.',
    []
  ),
  unhealthy: L(
    'Unhealthy means bad for your health, or not in good health: an unhealthy diet, unhealthy air, look unhealthy. Healthy is the opposite. Ill / sick describe a person who is unwell now. Unhygienic is about dirt and germs — related. Do not write unhealthy when you mean unwell (feeling ill today).',
    ['Sitting all day with no walk is unhealthy.', 'The report said the river water was unhealthy to drink.'],
    'an unhealthy diet / look unhealthy. Opposite: healthy. Now-ill cousin: unwell. Mix-up: unwell.',
    []
  ),
  unimportant: L(
    'Unimportant means not worth much worry: an unimportant detail, relatively unimportant, seem unimportant. Important is the opposite. Minor is a close cousin. Trivial is stronger and later. Do not write unimportant when you mean unemployed, or import.',
    ['The colour of the folder is unimportant.', 'He treated the missing comma as unimportant, but the date mattered.'],
    'an unimportant detail / relatively unimportant. Opposite: important. Cousin: minor. Mix-up: import.',
    ['minor']
  ),
  unlike: L(
    'Unlike means different from: unlike her sister, unlike last year, unlike anything I have seen. Like is the opposite preposition. Unlikely is an adjective about probability — easy mix-up. Dislike is a verb (not like something). Do not write unlike when you mean unlikely.',
    ['Unlike the old model, this phone has a better camera.', 'Unlike me, he enjoys long meetings.'],
    'unlike her sister / unlike last year. Opposite: like. Mix-up: unlikely (probability), dislike (verb).',
    []
  ),
  unlikely: L(
    'Unlikely means probably not going to happen: it is unlikely that, unlikely to rain, an unlikely story. Likely is the opposite. Improbable is a more formal cousin. Unlike is a preposition (different from) — do not mix them. Do not write unlikely when you mean unlike, or unlucky (bad luck).',
    ['It is unlikely that the shop will still be open.', 'He is unlikely to arrive before eight.'],
    'unlikely to / it is unlikely that. Opposite: likely. Mix-ups: unlike, unlucky.',
    []
  ),
  unlimited: L(
    'Unlimited means with no limit: unlimited data, unlimited tea, unlimited access. Limited is the opposite. Endless is a stronger cousin. Infinite is more mathematical. Do not write unlimited when you mean unloaded, or limit as a noun.',
    ['The ticket gives you unlimited travel for one day.', 'Students get unlimited use of the library printers this week.'],
    'unlimited data / travel / tea. Opposite: limited. Mix-up: unloaded.',
    []
  ),
  unload: L(
    'Unload means take goods off a vehicle or ship: unload the van, unload the shopping, unload cargo. Load is the opposite. Unpack is take things out of a suitcase or box, not always off a vehicle. Download is computers. Past: unloaded. Do not write unload when you mean unlock, or download.',
    ['Please help me unload the boot of the car.', 'Workers unloaded boxes at the back of the supermarket.'],
    'unload the van / shopping. Opposite: load. Suitcase cousin: unpack. Mix-up: download.',
    []
  ),
  unlock: L(
    'Unlock means open a lock with a key or a code: unlock the door, unlock your phone, unlock a bike. Lock is the opposite. Open is wider (a door can be unlocked but still closed). Undo is unfasten, not usually a lock. Do not write unlock when you mean unload, or o’clock.',
    ['Unlock the side gate for the gardener.', 'I cannot unlock my phone — I have forgotten the PIN.'],
    'unlock the door / phone. Opposite: lock. Wider: open. Mix-up: unload.',
    []
  ),
  unmarried: L(
    'Unmarried means not married: an unmarried couple, still unmarried, unmarried name. Single is a close everyday cousin (not in a relationship, or not married — check context). Married is the opposite. Divorced and widowed are different situations. Do not write unmarried when you mean married, or unmarred (not damaged — rare).',
    ['The form asks if you are married or unmarried.', 'Her unmarried brother still lives with their parents.'],
    'an unmarried couple / still unmarried. Cousin: single. Opposite: married. Mix-up: divorced (different).',
    ['single']
  ),
  unnecessary: L(
    'Unnecessary means not needed: unnecessary worry, completely unnecessary, an unnecessary extra. Necessary is the opposite. Useless means it does not work; unnecessary means you do not need it even if it works. Extra can be a cousin. Do not write unnecessary when you mean necessarily (adverb of necessary).',
    ['A coat is unnecessary in this heat.', 'The long introduction felt unnecessary in a short email.'],
    'unnecessary worry / completely unnecessary. Opposite: necessary. Contrast: useless. Mix-up: necessarily.',
    []
  ),
  unpack: L(
    'Unpack means take things out of a suitcase, bag, or box: unpack your bag, unpack after the trip, unpack the shopping. Pack is the opposite. Unload is from a vehicle. Unwrap is take paper off a gift. Past: unpacked. Do not write unpack when you mean unpack as “explain in detail” (later), or unpaid.',
    ['We unpacked and then made a cup of tea.', 'Leave that box — I will unpack it tomorrow.'],
    'unpack your bag / after the trip. Opposite: pack. Vehicle: unload. Gift: unwrap.',
    []
  ),
  unpaid: L(
    'Unpaid means not paid, or work without money: unpaid bills, unpaid leave, unpaid work. Paid is the opposite. Free can mean without payment, but also “available”. Volunteer work is often unpaid. Do not write unpaid when you mean unpack, or underpaid (paid too little).',
    ['The invoice is still unpaid after two weeks.', 'He took a week of unpaid leave to help his parents.'],
    'unpaid bills / unpaid work / unpaid leave. Opposite: paid. Mix-up: underpaid, unpack.',
    []
  ),
  unpleasant: L(
    'Unpleasant means not enjoyable: an unpleasant smell, an unpleasant surprise, highly unpleasant. Nasty is often stronger or more personal. Pleasant is the opposite. Unfriendly is about people; unpleasant can be smells, weather, or people. Do not write unpleasant when you mean unpleased (not standard) or please.',
    ['There was an unpleasant draught under the door.', 'The meeting became unpleasant when people started shouting.'],
    'an unpleasant smell / surprise. Stronger cousin: nasty. Opposite: pleasant. Mix-up: unfriendly (people only).',
    ['nasty']
  ),
  unpopular: L(
    'Unpopular means not liked by many people: an unpopular decision, unpopular with, become unpopular. Popular is the opposite. Famous means well known, not always liked. Unknown is about fame, not likes. Do not write unpopular when you mean unpopular as “not populated” (wrong), or popular.',
    ['The new parking charge is unpopular with shoppers.', 'He was unpopular at school until he joined the choir.'],
    'unpopular with / an unpopular decision. Opposite: popular. Contrast: famous (known, not liked).',
    []
  ),
  unsafe: L(
    'Unsafe means not safe; dangerous: an unsafe building, unsafe to drink, feel unsafe. Dangerous is a close synonym, often a bit stronger. Safe is the opposite. Insecure is more about feelings or locks. Do not write unsafe when you mean unsaved (computer), or unsure.',
    ['The playground is unsafe until they fix the swing.', 'It is unsafe to cycle here without lights at night.'],
    'unsafe to + verb / an unsafe building. Cousin: dangerous. Opposite: safe. Mix-up: unsure.',
    ['dangerous']
  ),
  unsuccessful: L(
    'Unsuccessful means not achieving what you wanted: an unsuccessful attempt, unsuccessful in, an unsuccessful interview. Successful is the opposite. Failed is a stronger everyday cousin. Success is the noun. Do not write unsuccessful when you mean success, or unsuccessfully (adverb).',
    ['Our first bid for the flat was unsuccessful.', 'She made several unsuccessful calls to the helpline.'],
    'an unsuccessful attempt / interview. Opposite: successful. Stronger cousin: failed. Mix-up: success (noun).',
    []
  ),
  unsuitable: L(
    'Unsuitable means not right for a purpose or person: unsuitable shoes, unsuitable for children, an unsuitable time. Suitable is the opposite. Wrong is simpler but less precise. Unfit can mean not healthy enough, or not suitable in some formal uses. Do not write unsuitable when you mean unsuitably (adverb), or unsightly (ugly).',
    ['High heels are unsuitable for the farm visit.', 'The film is unsuitable for very young children.'],
    'unsuitable for / unsuitable shoes. Opposite: suitable. Mix-up: unsightly (ugly).',
    []
  ),
  unsure: L(
    'Unsure means not certain or not confident: I am unsure, unsure about, a little unsure. Uncertain is a close synonym. Sure is the opposite. Unsecure is not the usual word for this meaning. Do not write unsure when you mean insure (insurance), or unsafe.',
    ['I am unsure how to fill in this box on the form.', 'If you are unsure, ask at the information desk.'],
    'unsure about / I am unsure. Synonym: uncertain. Opposite: sure. Mix-ups: insure, unsafe.',
    ['uncertain']
  ),
  unusual: L(
    'Unusual means different from what is normal: unusual weather, nothing unusual, highly unusual. Usual is the opposite adjective. Rare is stronger. Strange can mean unusual or hard to understand. Do not write unusual when you mean unusually (adverb), or unused (not used).',
    ['It is unusual for him to be late.', 'An unusual bird was sitting on the garden fence.'],
    'unusual weather / nothing unusual. Opposite: usual. Stronger: rare. Mix-up: unused.',
    []
  ),
  unwilling: L(
    'Unwilling means not wanting to do something: unwilling to help, unwilling guests, seem unwilling. Willing is the opposite. Reluctant is a close cousin (often a little more formal). Unable is about skill or possibility, not want. Do not write unwilling when you mean unable, or unwell.',
    ['They were unwilling to change the booking.', 'An unwilling smile is not the same as a real one.'],
    'unwilling to + verb. Opposite: willing. Cousin: reluctant. Contrast: unable (cannot). Mix-up: unwell.',
    ['reluctant']
  ),
  unwrap: L(
    'Unwrap means take the paper or covering off: unwrap a present, unwrap the sandwiches, unwrap slowly. Wrap is the opposite. Unpack is from a bag or box. Open is wider. Past: unwrapped. Do not write unwrap when you mean unwrap as “rap” (music), or unwrap vs unwrap the wrong gift — mix-up: rapt.',
    ['Shall I unwrap the chocolates for the table?', 'He unwrapped the scarf and tried it on at once.'],
    'unwrap a present / packet. Opposite: wrap. Bag cousin: unpack. Past: unwrapped.',
    []
  ),
  upload: L(
    'Upload means send a file from your device to the internet: upload a photo, upload coursework, upload to the cloud. Download is the opposite direction (internet to your device). Send is wider. Load is put things on a vehicle. Do not write upload when you mean unload, or overload.',
    ['Upload your essay before midnight.', 'The app asked me to upload a copy of my passport.'],
    'upload a photo / to the website. Opposite: download. Mix-ups: unload, overload.',
    []
  ),
  upon: L(
    'Upon is a more formal word for on: upon arrival, once upon a time, depend upon. On is the everyday preposition. Once upon a time is the set fairy-tale opening. Onto is movement to a surface. Do not write upon when you mean up on (two words: sit up on the wall), or open.',
    ['Please report to reception upon arrival.', 'Once upon a time, the harbour was full of fishing boats.'],
    'once upon a time / upon arrival. Everyday cousin: on. Mix-up: up on (two words).',
    ['on']
  ),
  upper: L(
    'Upper means in a higher position: the upper floor, upper lip, upper limit. Lower is the opposite. Upstairs is about going up in a building (adverb/adjective of direction). Top is the very highest point. Do not write upper when you mean supper (evening meal), or upright.',
    ['The spare blankets are in the upper cupboard.', 'Tickets for the upper deck of the bus are cheaper.'],
    'the upper floor / upper limit. Opposite: lower. Mix-up: supper (meal).',
    []
  ),
  upright: L(
    'Upright means straight up, not lying down or leaning: sit upright, keep it upright, an upright piano. Vertical is a close cousin. Horizontal is lying flat. Right as in correct is a different word. Do not write upright when you mean uptight (tense — later), or upper.',
    ['Store the bottles upright so they do not leak.', 'Sit upright at the desk to help your back.'],
    'keep it upright / sit upright. Cousin: vertical. Flat contrast: horizontal. Mix-up: uptight.',
    []
  ),
  upset: L(
    'Upset as an adjective means unhappy, worried, or disappointed: be upset, look upset, upset about. Sad is a close cousin; upset often follows a specific event. Angry is hotter. Upset can also be a verb (upset someone) or a noun (a stomach upset). Stress on the second syllable for the adjective. Do not write upset when you mean set up (arrange), or upstairs.',
    ['He was upset about the cancelled match.', 'Try not to get upset — we can book another train.'],
    'be upset about / look upset. Cousin: sad. Verb extra: upset someone. Mix-up: set up.',
    ['sad']
  ),
  upwards: L(
    'Upwards means towards a higher place: climb upwards, look upwards, from £10 upwards. British English prefers upwards; American English often uses upward. Downwards is the opposite. Up is shorter and very common. Do not write upwards when you mean afterwards, or inward.',
    ['House prices have moved upwards this year.', 'The kite drifted upwards and disappeared into cloud.'],
    'climb / look upwards (British). US cousin: upward. Opposite: downwards. Mix-up: afterwards.',
    []
  ),
  urge: L(
    'Urge means strongly advise someone to do something: urge someone to, strongly urge, urge caution. Advise is a calmer cousin. Force is make someone; urge is still their choice. An urge as a noun is a strong wish — extra. Do not write urge when you mean urgent (needing speed now), or emerge.',
    ['We urge passengers to arrive an hour early.', 'Friends urged her to apply for the job.'],
    'urge someone to + verb. Calmer cousin: advise. Adjective mix-up: urgent.',
    ['advise']
  ),
  usage: L(
    'Usage is how something is used, or how much it is used: water usage, word usage, heavy usage. Use is the everyday noun and verb; usage is more about the pattern or amount, often technical or language. User is the person. Do not write usage when you mean use, or usable.',
    ['The app shows your data usage for the month.', 'This book explains common English usage at A2.'],
    'water / data usage. Everyday cousin: use. Person: user. Mix-up: usable.',
    []
  ),
  useless: L(
    'Useless means not helpful; not doing what you need: a useless tool, completely useless, it is useless to. Useful is the opposite. Unnecessary means you do not need it; useless means it does not work or help. Hopeless is about a person or situation with no chance. Do not write useless when you mean use less (two words), or uselessly.',
    ['Without the code, the card is useless.', 'It is useless to phone after the office has closed.'],
    'completely useless / it is useless to. Opposite: useful. Contrast: unnecessary. Mix-up: use less.',
    []
  ),
  user: L(
    'A user is a person who uses a product, service, or machine: a phone user, new users, user name. Customer often pays in a shop; a user may just use software. Use is the verb; usage is the amount or pattern. Do not write user when you mean usher (shows you to a seat), or useful.',
    ['The site is easier for new users this year.', 'Only registered users can leave a comment.'],
    'a new user / phone user. Shop cousin: customer. Verb: use. Mix-up: usher.',
    []
  ),
}
