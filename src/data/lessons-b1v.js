const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1V = {
  hoover: L(
    'A hoover is a vacuum cleaner in everyday UK English. Hoover began as a brand, like tupperware for food boxes, and now names the machine in many homes. It is also a verb: hoover the carpet / hoover up the crumbs. US English usually keeps vacuum (cleaner) as both noun and verb. Countable as a machine: a hoover / two hoovers.',
    ['Give the stairs a quick hoover before people take their shoes off.', 'The hoover bag is full, so it has stopped picking up cat hair.'],
    'a hoover (UK, often genericised brand). Verb: hoover the carpet. US: a vacuum / to vacuum.',
    ['vacuum cleaner']
  ),
  hosepipe: L(
    'A hosepipe is the long garden tube you unroll to water plants or wash the car (UK). US speakers usually say a hose or a garden hose. A tap is where it connects; a sprinkler is the spinning head. In a dry summer the news may mention a hosepipe ban — you must not use one. Countable.',
    ['Turn the tap off at the wall or the hosepipe will drip all night.', 'A hosepipe ban started in July, so we used washing-up water on the pots.'],
    'a hosepipe (UK). US: a (garden) hose. Collocation: a hosepipe ban.',
    ['hose', 'garden hose']
  ),
  'icing-sugar': L(
    'Icing sugar (id: icing-sugar) is sugar ground so fine it feels like powder, used to make icing and to dust cakes (UK). US powdered sugar or confectioners’ sugar. Caster sugar is still crystalline and finer than granulated, but it is not powder. Sift it or it will lump. Often uncountable.',
    ['The recipe needs 200 grams of icing sugar and a squeeze of lemon.', 'Do not swap granulated sugar for icing sugar in buttercream; it will be gritty.'],
    'icing sugar (UK, often uncountable). US: powdered sugar. Contrast: caster sugar (not powder).',
    ['powdered sugar']
  ),
  ironmonger: L(
    'An ironmonger is a UK hardware shop, or the person who runs it, selling screws, hinges, paint, and tap washers. A DIY superstore is the big out-of-town version; an ironmonger is often still on the high street. US hardware store. Countable: an ironmonger; at the ironmonger’s.',
    ['Ask the ironmonger for wall plugs that match these screws.', 'The ironmonger had a spare key cut while we waited.'],
    'an ironmonger (UK). US: a hardware store. Contrast: a supermarket DIY aisle.',
    ['hardware shop']
  ),
  lamppost: L(
    'A lamppost is a tall street light on a post. A torch is handheld; a headlamp may be on a car or on your forehead. People use lampposts as meeting points and as places to lock a bike (not always allowed). Also written lamp-post. Countable.',
    ['The bus stop is the one after the last lamppost on this side.', 'A poster on the lamppost advertised the jumble sale in the village hall.'],
    'a lamppost (also lamp-post). Contrast: a torch / a headlamp. Countable street furniture.',
    ['street light']
  ),
  'lay-by': L(
    'A lay-by (id: lay-by) is a short extra strip beside a UK main road where you can pull off and stop. It is not a car park and not a motorway service station. US English has no exact everyday match; a turnout or rest area is only roughly similar. Hyphenated. Countable: a lay-by / two lay-bys.',
    ['Do not leave valuables on the seat if you nap in a lay-by.', 'The food van parks in the lay-by on the A-road every Friday.'],
    'a lay-by (UK, hyphenated). Contrast: a car park / a service station. Pull into a lay-by.',
    []
  ),
  'lie-in': L(
    'A lie-in (id: lie-in) is extra time in bed in the morning (UK noun): have a lie-in; a Sunday lie-in. US English prefers the verb sleep in (I slept in). It is not lie down (recline at any time) and not a sleepover (a night at someone else’s house). The word is hyphenated and countable.',
    ['The builders start at eight, so a lie-in is impossible this week.', 'After the night shift she needed a proper lie-in, not just ten extra minutes.'],
    'a lie-in (UK noun). US: to sleep in. Contrast: a sleepover / to lie down. Hyphenated.',
    []
  ),
  muesli: L(
    'Muesli is a cold breakfast of oats mixed with nuts and dried fruit, usually with milk or yoghurt. Granola is similar but typically sweeter and baked into clusters; porridge is hot. Often uncountable: some muesli / a bowl of muesli. British pronunciation is usually /ˈmjuːzli/.',
    ['There is muesli in the cupboard if the bread has gone stale.', 'A sachet of muesli is lighter in a rucksack than a box of cereal.'],
    'muesli (often uncountable). Contrast: granola (baked clusters) / porridge (hot). a bowl of muesli.',
    []
  ),
  'multi-storey': L(
    'Multi-storey (id: multi-storey) means having several floors (UK spelling storey). The usual collocation is a multi-storey car park; people also say the multi-storey for short. US multistory / parking garage. A high-rise is a tall block of flats, not a car park. Hyphenated adjective.',
    ['The multi-storey is cheaper after six, but take a photo of your floor.', 'A lift in the multi-storey car park was out of order, so we used the stairs.'],
    'multi-storey (UK). US: multistory. Typical: a multi-storey car park. Contrast: a high-rise (homes).',
    ['multistory']
  ),
  naan: L(
    'Naan is a soft, slightly puffy flatbread, often cooked in a tandoor and served with curry. Chapati is thinner and usually unoiled; a poppadom is crisp and thin. You tear naan rather than cut it, and use it to scoop. Countable: a naan / garlic naan. Also written nan.',
    ['Garlic naan and a mild korma is our usual Friday takeaway.', 'Warm the naan in the oven, not the toaster, or it will go hard.'],
    'a naan (also nan). Contrast: a chapati (thinner) / a poppadom (crisp). tear / scoop.',
    ['nan']
  ),
  'off-peak': L(
    'Off-peak (id: off-peak) describes the cheaper, quieter time outside the rush: off-peak tickets, off-peak electricity, an off-peak gym session. Peak is the busy, expensive time (the morning commute). US English uses off-peak too, especially for travel and power. Hyphenated adjective (and sometimes adverb: travel off-peak).',
    ['Off-peak electricity is cheaper overnight, which is why we run the tumble drier then.', 'An off-peak return to Manchester saved us about fifteen quid.'],
    'off-peak (hyphenated). Contrast: peak / rush hour. off-peak tickets / travel off-peak.',
    []
  ),
  pantomime: L(
    'A pantomime (often panto) is a noisy UK Christmas theatre show for families: songs, jokes, and shouts of “he’s behind you”. In US English pantomime usually means mime — acting without words — so the mix-up is important. Collocation: go to the pantomime; a panto dame. Countable.',
    ['The pantomime at the civic hall always sells out in November.', 'Kids are expected to shout during a pantomime; it is part of the show.'],
    'a pantomime / a panto (UK Christmas show). US pantomime often = mime. Contrast: a musical / a play.',
    ['panto']
  ),
  paracetamol: L(
    'Paracetamol is the everyday UK name for a common pain and fever tablet (often uncountable as the drug, countable as a tablet). US acetaminophen (often sold as Tylenol). Ibuprofen is a different medicine. Follow the packet: you do not take more than the stated dose. A paracetamol / two paracetamol.',
    ['The corner shop sells paracetamol behind the counter with the other medicines.', 'I took a paracetamol with a glass of water and went to lie down.'],
    'paracetamol (UK). US: acetaminophen. Contrast: ibuprofen (different drug). Dose is on the packet.',
    ['acetaminophen']
  ),
  'pelican-crossing': L(
    'A pelican crossing (id: pelican-crossing) is a UK pedestrian crossing with traffic lights that change when you press the button. A zebra crossing has black-and-white stripes and no lights; drivers should stop if you are waiting. The name comes from pelicon (pedestrian light controlled). Countable.',
    ['Wait for the green man at the pelican crossing; do not step out on amber.', 'The pelican crossing beeps for people who cannot see the lights clearly.'],
    'a pelican crossing (UK). Contrast: a zebra crossing (stripes, no lights). Press the button; wait for the green man.',
    []
  ),
  postcode: L(
    'A postcode is the UK mix of letters and numbers that pinpoints an address for the Royal Mail (for example M1 1AE). US zip code is digits only. You need a postcode for deliveries, satnav, and many online forms. It is also written post code, and you give a full postcode.',
    ['Type the postcode into the satnav, not just the street name.', 'The shop asked for a postcode even though we were paying cash at the till.'],
    'a postcode (UK). US: a zip code. Contrast: a house number / a street name. Letters and numbers.',
    ['zip code']
  ),
  quiche: L(
    'A quiche is a baked pastry case filled with beaten egg, milk or cream, and a savoury filling such as cheese, onion, or bacon. A pie usually has a pastry lid; a frittata has no pastry. Sold cold in UK shops for lunch. Countable: a slice of quiche / a whole quiche.',
    ['Quiche and salad is an easy packed lunch if you do not want a sarnie.', 'Reheat leftover quiche in the oven; the microwave makes the pastry soggy.'],
    'a quiche. Contrast: a pie (often lidded) / a frittata (no pastry). Countable; often sold by the slice.',
    []
  ),
  'ring-road': L(
    'A ring road (id: ring-road) is a road that circles a town so through-traffic can skip the centre (UK). US beltway or loop. A bypass usually skips one town on a longer route; a ring road goes round. Collocation: take the ring road; the inner / outer ring road. Countable.',
    ['Satnav wanted the high street, but the ring road was faster at five o’clock.', 'New houses are going up just outside the ring road, near the retail park.'],
    'a ring road (UK). US: a beltway. Contrast: a bypass. take the ring road.',
    ['beltway']
  ),
  roadworks: L(
    'Roadworks are repairs or building work on a road (UK; usually treated as plural). They cause cones, temporary lights, and delays. US often says road work or construction. You see roadworks as a sign word. Not countable as a roadwork in everyday speech: there are roadworks ahead.',
    ['Allow extra time; there are roadworks on the bridge all month.', 'The diversion for the roadworks sent us through three villages.'],
    'roadworks (UK, usually plural). US: road work / construction. there are roadworks ahead.',
    []
  ),
  satsuma: L(
    'A satsuma is a small, loose-skinned orange that peels easily, common in UK fruit bowls and lunchboxes in winter. A clementine and a mandarin are close relatives; a satsuma is usually seedless and a bit flatter. Countable. Not a generic word for any orange.',
    ['Satsumas were on offer: a net of ten for a pound.', 'Peel a satsuma over a plate; the pith goes everywhere.'],
    'a satsuma. Close: a clementine / a mandarin. Contrast: an orange (larger, tighter skin). Countable.',
    []
  ),
  scaffolding: L(
    'Scaffolding is the temporary metal frame and boards around a building so workers can reach the walls and roof (often uncountable). A ladder is for a short job; scaffolding stays up for days or weeks. You walk under scaffolding on the pavement. Put up / take down scaffolding.',
    ['Mind your head; the scaffolding sticks out over the pavement.', 'They put scaffolding up to replace the guttering, not to paint.'],
    'scaffolding (often uncountable). Contrast: a ladder (short job). put up / take down scaffolding.',
    []
  ),
  'scotch-egg': L(
    'A Scotch egg (id: scotch-egg) is a UK picnic and garage-shop classic: a boiled egg wrapped in sausage meat, coated in breadcrumbs, and fried or baked. Capital S on Scotch. It is not Scottish breakfast and not scrambled egg. Countable: a Scotch egg / half a Scotch egg.',
    ['Scotch eggs from the bakery are nicer cold on a bench than from the fridge at home.', 'Cut the Scotch egg in half so you can see whether the yolk is still soft.'],
    'a Scotch egg (capital S). Contrast: a pork pie / a sausage roll. Picnic and shop food (UK).',
    []
  ),
  seafront: L(
    'The seafront is the road, pavement, and buildings that face the sea in a coastal town: hotels, arcades, chip shops, and a promenade. The beach is the sand or pebbles; the seafront is the built strip. Collocation: on the seafront; a seafront hotel. Often the seafront as a place.',
    ['We could not park on the seafront in August, so we used the multi-storey.', 'A row of guest houses lines the seafront above the pebble beach.'],
    'the seafront. Contrast: the beach / the promenade. on the seafront.',
    []
  ),
  semi: L(
    'A semi in UK housing talk is a semi-detached house: joined to one neighbour, free on the other side. A terrace is joined in a row; a detached house stands alone. In US English a semi is usually an articulated lorry, so do not mix the meanings. Informal countable: a three-bed semi.',
    ['Their semi shares a driveway with next door, which can be awkward on bin day.', 'We looked at a semi near the station because a detached house was too expensive.'],
    'a semi (UK) = a semi-detached house. Contrast: a terrace / a detached house. US semi often = a lorry.',
    ['semi-detached house']
  ),
  shandy: L(
    'A shandy is beer mixed with lemonade (UK), lighter and sweeter than a straight pint. Lager shandy is the usual pub order. It is not a cocktail with spirits and not non-alcoholic beer on its own. Countable: a shandy. Informal and everyday, not fancy.',
    ['Two shandies came in pint glasses with a packet of crisps.', 'She drinks shandy at the beer garden because full-strength lager gives her a headache.'],
    'a shandy (UK) = beer + lemonade. Contrast: a lager / a cider. Order: a lager shandy.',
    []
  ),
  sitcom: L(
    'A sitcom is a situation comedy: a funny TV series with the same characters and a familiar setting (a flat, an office, a pub). A soap is ongoing drama; a sketch show is short separate scenes. From situation comedy. Countable: a sitcom / an old sitcom on the telly.',
    ['That sitcom is set in a Peckham flat, and people still quote it at work.', 'We put a sitcom on in the background while we folded the washing.'],
    'a sitcom (situation comedy). Contrast: a soap / a sketch show. on the telly; a classic sitcom.',
    ['situation comedy']
  ),
  skirting: L(
    'Skirting (often skirting board) is the narrow board along the bottom of a UK wall, covering the join with the floor. US baseboard. It is not a skirt and not skirting round a problem (avoiding it) except as a different verb. Painters tape the skirting. Often uncountable as the feature; countable as lengths.',
    ['Vacuum along the skirting; dust collects there behind the sofa.', 'The new laminate is a bit short, so you can see a gap above the skirting.'],
    'skirting / a skirting board (UK). US: a baseboard. Contrast: a dado rail (higher on the wall).',
    ['skirting board', 'baseboard']
  ),
  sleepover: L(
    'A sleepover is a night when children (or sometimes teens) stay at a friend’s house and sleep there. A lie-in is extra time in your own bed in the morning; a sleepover is about whose house you are in. Have a sleepover; go to a sleepover. Countable.',
    ['No sleepover on a school night; they will be exhausted at breakfast.', 'She packed a toothbrush and a teddy for the sleepover.'],
    'a sleepover. Contrast: a lie-in (late morning in your own bed). have / go to a sleepover.',
    []
  ),
  'slip-road': L(
    'A slip road (id: slip-road) is the short road that joins or leaves a motorway (UK). US on-ramp and off-ramp. You merge from a slip road; you do not stop on it. A lay-by is for stopping on an ordinary road, not on a motorway. Countable.',
    ['Indicate early on the slip road so people let you in.', 'The services are signposted from the slip road, not from the middle lane.'],
    'a slip road (UK). US: an on-ramp / off-ramp. Contrast: a lay-by (stopping place). merge / leave via the slip road.',
    ['on-ramp', 'off-ramp']
  ),
  smoothie: L(
    'A smoothie is a thick cold drink of fruit blended until smooth, often with yoghurt, milk, or juice. A milkshake is ice cream and milk and is sweeter; juice is thinner and not blended from whole fruit in the same way. Countable: a smoothie. High-street shops sell them in bottles.',
    ['A leftover banana makes a smoothie if you add milk and freeze the rest in chunks.', 'The café smoothie was mostly apple juice, so I make them at home now.'],
    'a smoothie. Contrast: a milkshake (ice cream) / juice (thinner). blend; a fruit smoothie.',
    []
  ),
  snooker: L(
    'Snooker is a cue sport on a large table with 15 red balls and several coloured balls. Pool is usually a smaller table and different balls, often in a pub; billiards is another table game. Often uncountable as the game: play snooker / watch snooker. A frame is one game within a match.',
    ['The snooker club is above the shops, and you pay by the hour for a table.', 'He watches snooker on the telly when the darts has finished.'],
    'snooker (the game, often uncountable). Contrast: pool / billiards. play snooker; a frame of snooker.',
    []
  ),
  'sofa-bed': L(
    'A sofa bed (id: sofa-bed) is a sofa whose seat pulls or folds out into a bed for guests. A futon is a different style; a camp bed is a folding bed on its own. Pull the sofa bed out; make up the sofa bed. Countable. Hyphen optional in writing; this course uses sofa bed.',
    ['There are spare sheets in the ottoman for the sofa bed.', 'The sofa bed is lumpy, but it is better than the floor when cousins visit.'],
    'a sofa bed. Contrast: a futon / a camp bed. pull out / make up the sofa bed.',
    []
  ),
  'speed-bump': L(
    'A speed bump (id: speed-bump) is a raised ridge across the road that forces cars to slow down, often near schools and on estates. UK informal sleeping policeman. A speed camera photographs you; a bump is physical. Countable. Drive slowly over them or you will scrape the underside.',
    ['There are three speed bumps between the shops and the school gate.', 'The speed bump is faded, but you still feel it if you go over thirty.'],
    'a speed bump. Informal UK: a sleeping policeman. Contrast: a speed camera (photographs, does not bump).',
    ['sleeping policeman']
  ),
  'speed-camera': L(
    'A speed camera (id: speed-camera) is a roadside camera that photographs vehicles over the limit (UK). It does not physically slow you like a speed bump. Average-speed cameras work in pairs over a stretch. Collocation: a speed camera; flashed by a speed camera. Countable.',
    ['Yellow speed cameras are easy to spot; the grey ones on the gantry are not.', 'He got a fine from a speed camera on the dual carriageway, not from a warden.'],
    'a speed camera (UK). Contrast: a speed bump / a traffic warden. flashed by a speed camera.',
    []
  ),
  sultana: L(
    'A sultana is a small dried pale grape (UK), used in tea bread, porridge, and trail mix. A raisin is usually darker; US English often calls sultanas golden raisins. Currants are smaller and darker still. Countable as the little fruits (a handful of sultanas), and not a royal title here.',
    ['This fruit cake is mostly sultanas, not glacé cherries.', 'Pick the sultanas out of the muesli if you do not like them.'],
    'a sultana (UK dried grape). US: a golden raisin. Contrast: a raisin (darker) / a currant (smaller).',
    ['golden raisin']
  ),
  swede: L(
    'A swede is a large round root vegetable with purple-brown skin and yellow flesh (UK; US rutabaga). A turnip is smaller and usually white inside, so do not mix them in recipes. It is often mashed with carrot for a roast dinner. Countable (a swede), and not a person from Sweden in this kitchen sense.',
    ['Peel the swede thickly; the skin is tough.', 'Swede in a stew holds its shape better than potato.'],
    'a swede (UK vegetable). US: rutabaga. Contrast: a turnip (usually white flesh). Not “a Swede” (nationality) in this sense.',
    ['rutabaga']
  ),
  tannoy: L(
    'A tannoy is a loudspeaker system that makes announcements in stations, schools, and shops (UK). Tannoy began as a brand and is often used generically, like hoover. US public address system or PA. Over the tannoy / the tannoy announced. Countable as a system; often the tannoy.',
    ['We missed the platform change because the tannoy was muffled.', 'A tannoy in the supermarket called a cleaner to aisle four.'],
    'a tannoy (UK, often genericised brand). US: a PA / public address system. over the tannoy.',
    ['PA system']
  ),
  tarmac: L(
    'Tarmac is the black tar-and-stone surface of many UK roads, playgrounds, and airport aprons (often uncountable; originally a brand, Tarmac). US often asphalt. The tarmac at an airport is where planes stand. Contrast: a gravel drive; grass. On the tarmac.',
    ['The playground tarmac gets sticky in a heatwave.', 'Passengers waited on the tarmac because the air bridge was broken.'],
    'tarmac (often uncountable). US: asphalt. on the tarmac (road or airport). Originally a brand.',
    ['asphalt']
  ),
  'tea-cosy': L(
    'A tea cosy (id: tea-cosy) is a padded or knitted cover that sits over a teapot to keep the tea hot (UK spelling cosy). US cozy. It is not a mug warmer and not a tea towel (for drying up). Put the tea cosy on; take the tea cosy off to pour. Countable.',
    ['Gran knitted a tea cosy with a pompom on top.', 'Without a tea cosy, the second cup from the pot is lukewarm.'],
    'a tea cosy (UK). US spelling: tea cozy. Contrast: a tea towel / a mug. put the tea cosy on.',
    []
  ),
  terrace: L(
    'A terrace can be a row of joined houses (a terraced house is one of them) or a paved outdoor sitting area behind a house or café. US row house is close to the housing sense. A semi is joined on one side only. Collocation: a Victorian terrace; sit on the terrace. Countable.',
    ['Parking is tight on that terrace because everyone has a wheelie bin out.', 'We had coffee on the terrace at the back, away from the main road.'],
    'a terrace: joined houses in a row, or a paved outdoor space. Contrast: a semi / a detached house. US housing: a row house.',
    []
  ),
  till: L(
    'A till is the shop cash register: drawer, screen, and card reader (UK; US cash register). You queue at the till, or use the self-service tills, with cash in the till. It is not the preposition till meaning until (wait till Friday). Countable as a machine.',
    ['Self-service tills were down, so everyone queued at one staffed till.', 'She works on the till on Saturdays in the corner shop.'],
    'a till (UK) = a cash register. US: a cash register. Contrast: till / until (time). queue at the till.',
    ['cash register']
  ),
  'traffic-warden': L(
    'A traffic warden (id: traffic-warden) is a UK official who checks parking and can issue tickets. Many councils now say civil enforcement officer, but traffic warden is still widely understood. A speed camera is a machine; a police officer deals with moving traffic too. Countable.',
    ['The traffic warden had already started writing when we ran back with the ticket.', 'You will not see a traffic warden on the private supermarket car park; that is a private firm.'],
    'a traffic warden (UK). Close: a civil enforcement officer. Contrast: a speed camera / a police officer.',
    []
  ),
  turnip: L(
    'A turnip is a round root vegetable, usually white or pale inside, cooked in stews and mash. In England a swede is the larger yellow-fleshed root; in parts of Scotland turnip can mean that yellow one — a regional mix-up worth learning. Countable: a turnip. Peel and chop.',
    ['Turnip and potato mash goes well with sausages.', 'Raw turnip in a lunchbox is unusual; most people cook it.'],
    'a turnip (usually white flesh in England). Contrast: a swede (yellow; US rutabaga). Regional: Scotland may use turnip for swede.',
    []
  ),
  vat: L(
    'VAT (value added tax) is the UK tax added to most goods and services, included in the shelf price in shops. US sales tax is often added at the till instead. Say the letters V-A-T, and look for prices including VAT, excluding VAT, or a VAT receipt. It is uncountable as the tax, and not a large tub (a vat of something) in this money sense.',
    ['The plumber quoted two hundred pounds plus VAT.', 'Ask for a VAT receipt if you need to claim the tax back at work.'],
    'VAT (UK). US close: sales tax (often added at the till). including / excluding / plus VAT. Not a tub.',
    ['value added tax']
  ),
  velcro: L(
    'Velcro is a fastening of two strips — hooks and loops — that stick when you press them (often uncountable; originally a brand). Shoes, coats, and wristbands use velcro. A zip and laces are different fastenings. Do up / undo the velcro. Capital V is the brand; everyday UK often writes velcro.',
    ['The velcro on his coat is full of fluff and will not stick.', 'Replace the button with velcro if the toddler cannot manage it yet.'],
    'velcro (often uncountable, genericised brand). Contrast: a zip / laces. do up / undo the velcro.',
    []
  ),
  voicemail: L(
    'Voicemail is the recorded message you leave when a phone is not answered, or the system that stores those messages (often uncountable). Leave a voicemail; check your voicemail; a voicemail from work. A text is typed; a missed call has no message. US uses voicemail too.',
    ['Her voicemail is full, so just send a text.', 'I heard the voicemail on the bus and had to ring back from the street.'],
    'voicemail (often uncountable). leave / check voicemail. Contrast: a text / a missed call.',
    []
  ),
  'walkie-talkie': L(
    'A walkie-talkie (id: walkie-talkie) is a small handheld radio for talking over a short distance, used by security, festivals, and children at play. Keep the hyphen. It is not a mobile phone and not an earpiece on its own. Over the walkie-talkie. Countable.',
    ['Staff on the till called the stockroom on a walkie-talkie for a price check.', 'The batteries in the walkie-talkie died halfway through the school trip.'],
    'a walkie-talkie (hyphenated). Contrast: a mobile / a headset. over the walkie-talkie.',
    ['two-way radio']
  ),
  wholemeal: L(
    'Wholemeal describes flour or bread made from the whole grain, so it is browner and denser (UK). US whole wheat. White bread has the bran removed. Collocation: wholemeal bread / flour / toast. Adjective, sometimes noun: a wholemeal (meaning a wholemeal loaf) in shops.',
    ['Wholemeal toast with Marmite is his usual breakfast.', 'The packet says wholemeal flour, so the biscuits will be darker than last time.'],
    'wholemeal (UK). US: whole wheat. Contrast: white bread / white flour. wholemeal bread / toast.',
    ['whole wheat']
  ),
  wicket: L(
    'A wicket in cricket is the set of three stumps (with bails) that the batter defends, and also the event of a batter getting out: take a wicket / lose a wicket. It is not a gate in this sporting sense (though wicket-gate is a small gate elsewhere). Countable. A sticky wicket is also an idiom for a difficult situation.',
    ['The next batter walked out after the wicket fell.', 'Kids had chalked a wicket on the playground wall and were using a tennis ball.'],
    'a wicket (cricket): the stumps, or a batter out. take / lose a wicket. Contrast: a goal (football).',
    []
  ),
  'yorkshire-pudding': L(
    'Yorkshire pudding (id: yorkshire-pudding) is a baked batter pudding eaten with roast meat and gravy, especially a UK Sunday roast. Capital Y. It is savoury, not a sweet dessert pudding, though the word pudding can mean dessert in the UK. Toad-in-the-hole bakes sausages in similar batter. Countable: a Yorkshire pudding / Yorkshires.',
    ['The Yorkshire puddings rose in the tin because the oil was smoking hot.', 'Some people eat Yorkshire pudding with jam, but in this house it stays with the roast.'],
    'a Yorkshire pudding (capital Y). Savoury with a roast. Contrast: sponge pudding (sweet). US has no everyday equivalent.',
    []
  ),
  'youth-club': L(
    'A youth club (id: youth-club) is a local UK club where young people meet for games, music, and a safe evening out, often in a village hall or community centre. A sports club is for one sport; a youth club is social. Go to youth club (the article is often dropped). Countable as an organisation.',
    ['Youth club is cancelled when the village hall is used for a wedding.', 'They put a pool table in the youth club and the evenings got busier.'],
    'a youth club (UK). Often: go to youth club. Contrast: a sports club / a nightclub (adults).',
    []
  ),
  'high-vis': L(
    'High-vis (id: high-vis) is informal UK for high-visibility: bright fluorescent yellow or orange clothing, often with reflective strips. A high-vis jacket / vest / trousers. US often says high-visibility vest or safety vest. Worn by cyclists, bin men, and anyone working near traffic. Adjective, also a noun: wear a high-vis.',
    ['The school crossing person always wears high-vis, rain or shine.', 'Borrow a high-vis from the site office before you walk across the yard.'],
    'high-vis (UK informal). Full: high-visibility. Contrast: ordinary dark coat (hard to see). a high-vis jacket / vest.',
    ['high-visibility']
  ),
  'ready-meal': L(
    'A ready meal (id: ready-meal) is a cooked supermarket meal you only heat, usually from the chilled or freezer aisle (UK). US TV dinner or prepared meal. A takeaway is cooked in a restaurant; a ready meal is packaged from a shop. Countable: a ready meal for one.',
    ['The ready meal says oven ten minutes, not microwave, if you want crisp pastry.', 'We keep a couple of ready meals for nights when the shops are shut.'],
    'a ready meal (UK). US: a TV dinner / prepared meal. Contrast: a takeaway / cooking from scratch.',
    ['TV dinner']
  ),
  'sell-by-date': L(
    'A sell-by date (id: sell-by-date) is the last date a UK shop should sell a food item. A use-by date is about safety (do not eat after it); a best-before date is about quality. Check the sell-by date on milk and meat. Hyphenated. Countable.',
    ['The reduced sticky labels are on sandwiches close to their sell-by date.', 'A sell-by date is for the shop; smell the milk anyway when you get home.'],
    'a sell-by date (UK, for shops). Contrast: a use-by date (safety) / a best-before date (quality).',
    []
  ),
  'tumble-drier': L(
    'A tumble drier (id: tumble-drier) is a machine that dries washing in hot tumbling air (UK; also tumble dryer; US dryer). A washing line is outdoors and a clothes horse is an indoor frame, so empty the lint filter on the machine. Drier and dryer are both seen; this course uses tumble drier. Countable.',
    ['The tumble drier is in the kitchen because we have no utility room.', 'Do not tumble-dry the wool jumper; use the clothes horse.'],
    'a tumble drier (UK; also tumble dryer). US: a dryer. Contrast: a washing line / a clothes horse.',
    ['tumble dryer', 'dryer']
  ),
  'wet-wipe': L(
    'A wet wipe (id: wet-wipe) is a moist disposable cloth from a plastic pack, for hands, surfaces, or babies. A flannel is a washable face cloth; kitchen roll is dry paper. Pack of wet wipes. Countable: a wet wipe. Do not flush them; they block pipes.',
    ['There is a wet wipe in the changing bag for ice-cream hands.', 'Use a wet wipe on the table, then a dry tea towel, or it stays sticky.'],
    'a wet wipe. Contrast: a flannel (washable) / kitchen roll (dry). a pack of wet wipes; do not flush.',
    []
  ),
  'wheel-clamp': L(
    'A wheel clamp (id: wheel-clamp) is a heavy lock fitted to a wheel so you cannot drive the vehicle away (UK). US boot or Denver boot. You get a wheel clamp for illegal parking, then pay to have it removed. Countable. Not the same as a parking ticket alone.',
    ['A sign in the car park warned that unauthorised vehicles would get a wheel clamp.', 'They would not take the wheel clamp off until we paid at the kiosk.'],
    'a wheel clamp (UK). US: a boot. Contrast: a parking ticket (paper fine only). fit / remove a wheel clamp.',
    ['boot']
  ),
  'loo-roll': L(
    'Loo roll (id: loo-roll) is informal UK for a roll of toilet paper. Loo is informal for toilet; toilet roll is a little more neutral. US toilet paper. A loo roll / a spare loo roll in the cupboard. Countable as rolls.',
    ['Put loo roll on the list; we are on the last roll.', 'Hotels still fold the loo roll into a point, which feels a bit much for a Travelodge.'],
    'loo roll (UK informal). Close: toilet roll. US: toilet paper. Contrast: kitchen roll (for spills).',
    ['toilet roll', 'toilet paper']
  ),
  'mince-pie': L(
    'A mince pie (id: mince-pie) is a small sweet UK pie filled with dried fruit (mincemeat), eaten at Christmas. The filling is not minced beef; that mix-up is famous. Savoury minced meat is mince. Countable: a mince pie / a tin of mince pies. Warm, often with cream or brandy butter.',
    ['Office tins of mince pies appear in December and last about a day.', 'She does not like mince pies because the filling tastes of mixed peel.'],
    'a mince pie (UK Christmas; sweet dried fruit). Not minced beef. Contrast: mince (savoury meat).',
    []
  ),
  oatcake: L(
    'An oatcake is a thin, dry biscuit made from oats, especially associated with Scotland, often eaten with cheese. A crumpet is thick and toasted with butter; a rice cake is puffed and lighter. Countable. Not a bowl of porridge baked into a cake.',
    ['Oatcakes and cheddar are in the cupboard if you want something savoury with tea.', 'These oatcakes are from the Scottish aisle, next to the shortbread.'],
    'an oatcake. Contrast: a crumpet / a rice cake / porridge. Often with cheese (Scotland).',
    []
  ),
  poppadom: L(
    'A poppadom is a thin, crisp disc of spiced dough, served with Indian meals in UK restaurants, often with dips. UK spelling varies: poppadom, poppadum, papadum. It is not naan (soft) and not a cracker from a cheese board. Countable: a basket of poppadoms.',
    ['The poppadoms arrived before the mains, with mango chutney and raita.', 'Poppadoms shatter if you try to wrap curry in them; use naan for that.'],
    'a poppadom (UK spelling; also poppadum). Contrast: naan (soft) / chapati. with chutney.',
    ['poppadum']
  ),
  rollerblind: L(
    'A rollerblind (also roller blind) is a window covering that rolls up around a bar at the top. Curtains hang in folds; a Venetian blind has horizontal slats. Pull the rollerblind down / up. Countable. Good for darkening a room quickly.',
    ['The rollerblind in the bathroom went crooked and will not roll straight.', 'Blackout rollerblinds help if you work nights and sleep in the day.'],
    'a rollerblind (also roller blind). Contrast: curtains / a Venetian blind. pull down / roll up.',
    ['roller blind']
  ),
  'roof-rack': L(
    'A roof rack (id: roof-rack) is a frame on top of a car for luggage, bikes, or a roof box. A boot is inside the back of the car; a roof rack is outside on top. Strap things down. Countable. Wind noise is normal on the motorway.',
    ['We borrowed a roof rack for the camping chairs and the cool box.', 'Take the roof rack off in winter if you do not need it; it uses extra fuel.'],
    'a roof rack. Contrast: the boot (inside) / a roof box (a closed container on the rack).',
    []
  ),
  'side-plate': L(
    'A side plate (id: side-plate) is a small plate for bread, butter, or salad beside the main dinner plate. A dinner plate is larger; a saucer belongs under a cup. Set a side plate to the left in a formal place setting. Countable.',
    ['There are not enough side plates, so use saucers for the bread.', 'Crumbs on the side plate are better than crumbs on the tablecloth.'],
    'a side plate. Contrast: a dinner plate / a saucer. bread and butter on the side plate.',
    []
  ),
  'sponge-pudding': L(
    'A sponge pudding (id: sponge-pudding) is a hot, light sponge served as a UK pudding (dessert), often with custard or syrup. Yorkshire pudding is savoury batter with a roast; sponge pudding is sweet. Steamed or baked. Countable: a sponge pudding. School-dinner classic: syrup sponge.',
    ['Treacle sponge pudding was on the specials board next to apple crumble.', 'A microwave sponge pudding in a plastic basin is a two-minute pud for one.'],
    'a sponge pudding (UK sweet). Contrast: Yorkshire pudding (savoury) / a cold sponge cake. often with custard.',
    []
  ),
  'tea-urn': L(
    'A tea urn (id: tea-urn) is a large heated tank for making tea for a crowd at jumble sales, village halls, and matches (UK). A teapot is for a table; a kettle boils a little water. Fill / plug in the tea urn. Countable. The tea can taste stewed if it sits too long.',
    ['The tea urn takes twenty minutes to heat, so switch it on before people arrive.', 'Bring your own mug; the tea urn comes with a stack of plastic cups.'],
    'a tea urn (UK, for crowds). Contrast: a teapot / a kettle. at the village hall / jumble sale.',
    []
  ),
  toastie: L(
    'A toastie is a toasted sandwich, often sealed in a sandwich press, with a hot filling (UK informal). A sarnie is any sandwich; a toastie is specifically toasted. Cheese toastie is the classic. Countable. Café and home word, not fancy.',
    ['A ham toastie from the van by the market is two quid.', 'Butter the outside of the bread or the toastie will stick to the grill.'],
    'a toastie (UK informal). Close: a toasted sandwich. Contrast: a sarnie (not necessarily toasted).',
    ['toasted sandwich']
  ),
  towpath: L(
    'A towpath is the path beside a canal or river, originally for horses towing boats. People now walk and cycle there. It is not a tow truck (US recovery vehicle). Along the towpath. Countable as a stretch of path.',
    ['Cyclists should ring a bell on the towpath; it is narrow by the lock.', 'We followed the towpath as far as the old mill, then cut up to the high street.'],
    'a towpath (beside a canal). Contrast: a pavement (beside a road) / a tow truck (vehicle). along the towpath.',
    []
  ),
  'village-hall': L(
    'A village hall (id: village-hall) is a public building in a UK village for meetings, jumble sales, yoga, and parties. A town hall is the council building; a village hall is community space. In the village hall. Countable. Often has a tea urn and a small kitchen.',
    ['Voting takes place in the village hall, next to the noticeboard.', 'Book the village hall early if you want a Saturday birthday party.'],
    'a village hall (UK). Contrast: a town hall (council) / a church hall. jumble sales, clubs, voting.',
    []
  ),
  'window-box': L(
    'A window box (id: window-box) is a long planter of flowers or herbs that sits on an outside window sill. A hanging basket hangs from a bracket; a flowerbed is in the ground. Water a window box often; it dries out. Countable.',
    ['The window box fell off in the wind, so we screwed it down this time.', 'Herbs in the kitchen window box mean you do not buy a whole bag of parsley.'],
    'a window box. Contrast: a hanging basket / a flowerbed. on the window sill; water often.',
    []
  ),
  workbench: L(
    'A workbench is a strong table for tools, sawing, and repairs, usually in a shed, garage, or workshop. A worktop is the kitchen food surface (UK); do not mix them. At the workbench; a folding workbench. Countable.',
    ['Clamp the shelf to the workbench before you saw it.', 'His workbench is covered in screws, so there is no space to actually work.'],
    'a workbench (tools). Contrast: a worktop (UK kitchen; US countertop). in the shed / garage.',
    []
  ),
  wristband: L(
    'A wristband is a paper, plastic, or fabric band on the wrist: festival entry, a hospital ID, or a charity fundraiser. A watch sits on the wrist too but tells the time. Keep your wristband on. Countable. Colour often shows what you have paid for.',
    ['The hospital wristband had her date of birth printed on it.', 'A cloth wristband from the charity run went in the wash and shrank.'],
    'a wristband. Contrast: a watch / a bracelet (jewellery). festival / hospital / charity wristbands.',
    []
  ),
  'yellow-lines': L(
    'Yellow lines (id: yellow-lines) are yellow road markings that control parking in the UK. Double yellow lines usually mean no parking at any time; single yellow lines mean no parking at certain times (see the sign). Red lines are a stronger urban rule. Always plural as a system; a stretch of yellow lines.',
    ['Loading is sometimes allowed on yellow lines, but sitting in the car may still get you a ticket.', 'The map app sent us to a space that was all double yellow lines.'],
    'yellow lines (UK parking). double yellow = usually no parking; single yellow = time limits. Contrast: red routes.',
    []
  ),
  'hash-brown': L(
    'A hash brown (id: hash-brown) is a fried patty of grated potato, often on a cooked breakfast. Countable: a hash brown / two hash browns. It is not mashed potato and not chips (UK chips = fries). Café and freezer-aisle food.',
    ['The café puts a hash brown on the full English without asking, which is fine by me.', 'Oven hash browns from a bag are crisper than the ones from the frying pan in this kitchen.'],
    'a hash brown. Contrast: chips / mash / a potato waffle. cooked breakfast; countable patties.',
    []
  ),
  headlamp: L(
    'A headlamp can be a light on the front of a car (also headlight) or a light you wear on your forehead (a head torch in many UK shops). Check the context: dip your headlamps on a dark road; wear a headlamp in a tent. Countable. A lamppost is a street light, not on a vehicle.',
    ['The MOT failed because one headlamp was out of line.', 'Pack a headlamp for the towpath; it is unlit after the lock.'],
    'a headlamp: a car front light, or a light on your head. Close: a headlight / a head torch. Contrast: a lamppost.',
    ['headlight']
  ),
  'hire-car': L(
    'A hire car (id: hire-car) is a car you pay to use for a short time (UK). US rental car. Collect / pick up a hire car; drop it off. Hire is the usual UK verb (hire a car); rent is understood and more US. Countable.',
    ['The hire car was a smaller model than we booked, but it was easier to park.', 'Insurance on the hire car cost extra at the desk, which was annoying.'],
    'a hire car (UK). US: a rental car. UK verb: hire a car. pick up / drop off a hire car.',
    ['rental car']
  ),
  kerbstone: L(
    'A kerbstone is one of the stones that make the kerb, the edge between pavement and road (UK). US curbstone / curb. You can trip on a kerbstone; drop a key down the gap. Countable. The kerb is the whole edge; a kerbstone is one block.',
    ['He chipped a kerbstone when he reversed too close to the pavement.', 'Paint on the kerbstones marks a disabled bay outside the library.'],
    'a kerbstone (UK). US: a curbstone. Contrast: the kerb (the whole edge) / the pavement. UK kerb, US curb.',
    ['curbstone']
  ),
  kitchenette: L(
    'A kitchenette is a very small kitchen squeezed along a wall: hob, sink, maybe a microwave, typical of a bedsit, studio, or hotel room. A kitchen is a full room; a kitchenette is compact. Countable. Not a toy kitchen.',
    ['The kitchenette has no oven, only a hob and a kettle.', 'We cooked pasta in the kitchenette and ate it on the sofa bed.'],
    'a kitchenette. Contrast: a kitchen (full room) / a hob (just the cooker top). bedsits, studios, hotels.',
    []
  ),
  litterbug: L(
    'A litterbug is an informal word for a person who drops rubbish in the street instead of using a bin. Litter is the rubbish; a litterbug is the person. A fly-tipper dumps larger waste; a litterbug drops a wrapper. Countable. Signs and campaigns use the word.',
    ['The park notice said litterbugs would be fined, but the bins were already full.', 'She called him a litterbug when he dropped the wet-wipe on the pavement.'],
    'a litterbug (informal). Contrast: litter (the rubbish) / a fly-tipper (larger dumping). use a bin.',
    []
  ),
  manhole: L(
    'A manhole is a covered hole in a road or pavement that workers lift to reach sewers, pipes, or cables. The lid is a manhole cover. Not a hole for a person to live in — it is an access point. Countable. Cones often mark an open manhole.',
    ['A loose manhole cover rattles every time a bus goes over it.', 'Do not walk on an open manhole; wait for the workers to replace the cover.'],
    'a manhole / a manhole cover. Contrast: a pothole (damage, not an access point). council / utility workers.',
    []
  ),
  numberplate: L(
    'A numberplate (also number plate) is the UK plate that shows a vehicle’s registration number (US license plate). Cars have front and rear numberplates, and cameras and car parks read them. A personalised numberplate is bought as a show-off plate. Countable.',
    ['The front numberplate fell off on the speed bump, so we tied it on with a cable tie.', 'She ordered a new numberplate online after the old one cracked in the frost.'],
    'a numberplate (UK; also number plate). US: a license plate. Contrast: a tax disc (old UK windscreen disc, now abolished).',
    ['number plate', 'license plate']
  ),
}
