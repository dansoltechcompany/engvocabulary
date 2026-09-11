const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2K = {
  qualified: L(
    'Qualified means you have passed the exams or training for a job: a qualified teacher, a qualified electrician, fully qualified. Qualify is the verb; qualification is the certificate or exam. Experienced means you have done the job for a long time — you can be experienced without being qualified, or the opposite. Do not write quality (how good something is) for qualified.',
    ['Only a qualified instructor may teach this course.', 'He became a qualified chef after two years at college.'],
    'a qualified teacher / nurse. Verb: qualify. Paper: qualification. Mix-up: quality.',
    []
  ),
  quantity: L(
    'Quantity is an amount you can measure or count: a large quantity, in small quantities, the quantity of sugar. Quality (how good it is) is a different word — easy mix-up. Amount is a close cousin, often for uncountable things. Number is usual with countable things (a number of tickets). Uncountable in many uses (not “quantities” unless you mean several amounts). Do not write quality when you mean quantity.',
    ['Check the quantity on the packet before you buy it.', 'They ordered a large quantity of bottled water.'],
    'a large / small quantity. Contrast: quality (how good). Cousins: amount, number.',
    ['amount']
  ),
  quarrel: L(
    'A quarrel is an angry argument, usually between people who know each other: have a quarrel, a family quarrel, quarrel about money. Argument is a wider cousin (can be calmer or more formal). Fight can be physical; a quarrel is with words. Quarrel can also be a verb (they quarrelled). British past: quarrelled. Do not write squirrel (the animal) for quarrel.',
    ['The neighbours had a quarrel over the parking space.', 'Try not to start a quarrel at the dinner table.'],
    'have a quarrel / quarrel about. Cousin: argument. Physical: fight. Mix-up: squirrel.',
    ['argument']
  ),
  quietly: L(
    'Quietly means without much noise: speak quietly, close the door quietly, sit quietly. Quiet is the adjective (a quiet room); quietly is the adverb. Silently is stronger — no sound at all. Loudly is the opposite. Do not write quietly when you mean quite (fairly) — different word.',
    ['She quietly put the keys on the table.', 'The librarian asked us to talk quietly.'],
    'speak / close the door quietly. Adjective: quiet. Stronger: silently. Mix-up: quite.',
    []
  ),
  quilt: L(
    'A quilt is a thick, warm cover for a bed: pull the quilt up, a patchwork quilt, under the quilt. Duvet is the usual British word for a padded cover you put in a cover; blanket is thinner. Sheet goes under you. Do not write guilt (the feeling that you did wrong) for quilt — different sound.',
    ['Gran made a quilt from old pieces of cloth.', 'He hid under the quilt when the thunder started.'],
    'a patchwork quilt / under the quilt. British cousin: duvet. Thinner: blanket. Mix-up: guilt.',
    []
  ),
  railway: L(
    'A railway is the system of trains and tracks: the railway station, a railway line, work on the railway. Train is the vehicle; railway is the network. British English prefers railway; American English often says railroad. Underground is city trains under the street. Do not write airway (for planes) for railway.',
    ['The railway was closed after the flood.', 'She bought a railway timetable at the kiosk.'],
    'the railway station / a railway line (British). US cousin: railroad. Vehicle: train.',
    []
  ),
  rainbow: L(
    'A rainbow is a curve of colours in the sky when sun shines through rain: see a rainbow, a rainbow over the hills, the colours of the rainbow. Rain is the weather; a bow here is the curve, not a ribbon. Uncountable? No — you can say a rainbow. Do not write raincoat (the jacket) for rainbow.',
    ['The children ran outside to look at the rainbow.', 'A faint rainbow appeared above the harbour.'],
    'see a rainbow / colours of the rainbow. Needs sun and rain. Mix-up: raincoat.',
    []
  ),
  raise: L(
    'Raise means lift something up, or make it higher: raise your hand, raise prices, raise money for charity. Rise is intransitive (the sun rises — no object). Raise always takes an object. Past: raised. Do not write rise when you need an object, or rays (beams of light) for raise.',
    ['They raised the flag at the start of the match.', 'The school raised enough money for new books.'],
    'raise your hand / prices (needs an object). Contrast: rise (no object). Past: raised.',
    []
  ),
  rare: L(
    'Rare means not happening or found often: a rare bird, rare for this town, it is rare to see. Common is the opposite. Unusual is a close cousin. Rare steak means cooked very little — extra food sense. Do not write rear (the back) for rare, or raw (not cooked) unless you mean that food sense.',
    ['Clear skies in November are rare here.', 'The museum has a rare map from the eighteenth century.'],
    'a rare bird / it is rare to. Opposite: common. Food extra: rare steak. Mix-up: rear.',
    ['unusual']
  ),
  raw: L(
    'Raw means not cooked: raw vegetables, raw fish, eat it raw. Cooked is the opposite. Fresh means recently made or picked, not the same as uncooked. Raw can also mean not processed (raw data — later). Do not write roar (a loud animal sound) for raw, or rare (uncooked steak is rare, vegetables are raw).',
    ['The salad is just raw carrot and cucumber.', 'Wash raw meat separately from other food.'],
    'raw vegetables / fish. Opposite: cooked. Mix-ups: roar, rare (steak).',
    []
  ),
  realistic: L(
    'Realistic means possible in real life, or looking like real life: a realistic plan, be realistic, a realistic drawing. Real is the basic adjective; realistic adds “possible” or “true to life”. Unrealistic is the opposite. Ideal is what you wish, not always realistic. Do not write real when you mean a plan that can actually work.',
    ['Finishing four essays tonight is not realistic.', 'The model village looks very realistic from above.'],
    'a realistic plan / drawing. Opposite: unrealistic. Base word: real.',
    []
  ),
  reception: L(
    'Reception is the desk where visitors go first in a hotel or office: at reception, the reception desk, leave a key at reception. Receptionist is the person. A wedding reception is the party after the ceremony — extra sense. Uncountable for the desk (not “a reception” unless you mean a party). Do not write recipe (cooking) for reception.',
    ['Ask at reception for a map of the town.', 'The package is waiting for you at reception.'],
    'at reception / the reception desk. Person: receptionist. Party extra: wedding reception.',
    []
  ),
  receptionist: L(
    'A receptionist works at the front desk: ask the receptionist, a hotel receptionist, the receptionist called a taxi. Reception is the place; receptionist is the job. Secretary is office work that may not be at the front desk. Do not write reception when you mean the person.',
    ['The receptionist asked us to sign the visitors’ book.', 'A friendly receptionist showed us to the lift.'],
    'a hotel receptionist / ask the receptionist. Place: reception. Related job: secretary.',
    []
  ),
  recognise: L(
    'Recognise means know someone or something because you have seen them before: recognise a face, recognise a song, I recognised him. British spelling is recognise; American is recognize. Know is wider (facts and people); recognise is “I have seen this before”. Past: recognised. Do not write reckon (think, informal) for recognise.',
    ['Did you recognise the actor in that advert?', 'She recognised the street from the photo.'],
    'recognise a face / song (British -ise). US: recognize. Past: recognised.',
    []
  ),
  recycling: L(
    'Recycling is turning old materials into new things: put it in the recycling, a recycling bin, recycling collection. Recycle is the verb. Rubbish is what you throw away; recycling is the useful waste stream. Uncountable. Do not write recyling as a misspelling, or bicycle for recycling.',
    ['Glass goes in the recycling, not in the black bin.', 'The town started weekly recycling collections.'],
    'in the recycling / a recycling bin (uncountable). Verb: recycle. Contrast: rubbish.',
    []
  ),
  regular: L(
    'Regular means happening often at even times, or usual: a regular bus, a regular customer, regular hours. Regularly is the adverb. Occasional is the opposite idea (not often). Normal is a cousin for “usual”. Do not write regulate (control by rules — B2) for regular.',
    ['Is there a regular train after ten at night?', 'He is a regular at the café on the corner.'],
    'a regular bus / customer. Adverb: regularly. Cousin: normal. Opposite idea: occasional.',
    ['usual']
  ),
  regularly: L(
    'Regularly means often, on a fairly even timetable: visit regularly, exercise regularly, check regularly. Regular is the adjective. Often is a close cousin; regularly suggests a pattern. Rarely is the opposite. Do not write regularly when you mean really (very).',
    ['The nurse checks his blood pressure regularly.', 'We write to our grandparents regularly.'],
    'visit / exercise regularly. Adjective: regular. Cousin: often. Opposite: rarely.',
    ['often']
  ),
  reliable: L(
    'Reliable means you can trust it to work or to do the right thing: a reliable bus, a reliable friend, not very reliable. Rely is the verb (rely on). Unreliable is the opposite. Trustworthy is a cousin for people. Do not write relyable as one invented spelling.',
    ['Find a reliable website for the train times.', 'She is the most reliable person on the team.'],
    'a reliable friend / service. Verb: rely on. Opposite: unreliable. People cousin: trustworthy.',
    ['trustworthy']
  ),
  remote: L(
    'Remote means far from towns and other people: a remote village, remote from the city, a remote island. Far is simpler; remote adds “isolated”. Nearby is the opposite idea. A remote (control) is the TV gadget — extra noun. Do not write remove (take away) for remote.',
    ['There is no shop in that remote valley.', 'The cottage is beautiful but rather remote.'],
    'a remote village / island. Opposite idea: nearby. Extra noun: remote control. Mix-up: remove.',
    []
  ),
  rescue: L(
    'Rescue means save someone or something from danger: rescue a swimmer, a rescue team, rescue from a fire. Save is a close cousin; rescue is more dramatic (danger). Help is weaker. Noun: a rescue. Past: rescued. Do not write rescue when you only mean help with homework.',
    ['The RNLI rescued two people from the sea.', 'Walkers were rescued after they got lost in fog.'],
    'rescue someone from danger. Cousin: save. Team: rescue team. Past: rescued.',
    ['save']
  ),
  reservation: L(
    'A reservation is a booking for a table, room, or seat: make a reservation, a table reservation, cancel a reservation. Book is the everyday British verb (book a table); reservation is the noun. Ticket is what you hold for travel. Do not write preservation (keeping old things) for reservation.',
    ['Have you made a reservation at the restaurant?', 'The hotel needs a reservation number at check-in.'],
    'make / cancel a reservation. Verb cousin: book a table. Mix-up: preservation.',
    ['booking']
  ),
  review: L(
    'A review is a written opinion of a film, book, or product: a good review, write a review, read the reviews. Report is more factual; a review gives a judgement. Revise is study again (British exams) — different word. Review can also be a verb. Do not write revise when you mean an opinion of a film.',
    ['I never choose a hotel without reading the reviews.', 'Her book got mixed reviews in the papers.'],
    'a good / mixed review. Contrast: report (facts). Mix-up: revise (study again).',
    []
  ),
  reward: L(
    'A reward is something you get because you did well or helped: a reward for finding, deserve a reward, a cash reward. Prize is often for a competition; reward can be for help or good behaviour. Award is more formal (a ceremony). Do not write award when you mean money for a lost cat, or toward (direction).',
    ['The school offered a reward for the missing trophy.', 'A day off was her reward for finishing early.'],
    'a reward for finding / good work. Contrast: prize (competition). Formal cousin: award.',
    []
  ),
  robber: L(
    'A robber steals from a person or place, often with force: a bank robber, catch the robber, armed robber. Thief is a wider cousin (any stealing). Burglar breaks into a building. Robbery is the crime. Do not write rubber (eraser, British) for robber.',
    ['Witnesses described the robber to the police.', 'The robber ran off with a bag of cash.'],
    'a bank robber / catch the robber. Wider: thief. Building: burglar. Mix-up: rubber.',
    ['thief']
  ),
  robot: L(
    'A robot is a machine that can do jobs, often with a computer: a factory robot, a robot vacuum, programmed like a robot. Machine is general; a robot acts with some independence. Computer is the brain, not the moving machine. Do not write rowboat (a small boat) for robot.',
    ['The museum has a robot that greets visitors.', 'A robot on wheels delivered food to the table.'],
    'a factory robot / robot vacuum. General: machine. Mix-up: rowboat.',
    []
  ),
  rocket: L(
    'A rocket flies into space, or is a firework that shoots up: launch a rocket, a space rocket, rocket into the sky. Aeroplane stays in the air with wings; a rocket uses fuel to go straight up. Missile is a weapon — not the A2 space sense. Do not write socket (electrical) for rocket.',
    ['Children watched the model rocket in the park.', 'The film showed a rocket leaving the Earth.'],
    'launch a rocket / a space rocket. Contrast: aeroplane (wings). Mix-up: socket.',
    []
  ),
  roll: L(
    'Roll as a verb means turn over and over while moving: the ball rolled, roll the dice, roll up a poster. Slide is move without turning; spin is turn in one place. A roll as a noun is also bread — extra A2 sense. Past: rolled. Do not write role (a part in a play) for roll — same sound, different spelling.',
    ['The coin rolled under the fridge.', 'Roll the pastry thin on a clean surface.'],
    'the ball rolled / roll up. Noun extra: a bread roll. Homophone: role (play). Past: rolled.',
    []
  ),
  romantic: L(
    'Romantic means connected with love, or making you think of love: a romantic film, a romantic dinner, not very romantic. Love is the feeling; romantic describes the mood or style. Unromantic is the opposite. Romance can be the noun (a love story). Do not write Roman (from Rome) for romantic.',
    ['They chose a romantic walk along the canal.', 'The ending of the novel is too romantic for me.'],
    'a romantic film / dinner. Noun: romance. Mix-up: Roman (from Rome).',
    []
  ),
  rope: L(
    'Rope is very thick, strong string: a piece of rope, tie with rope, climbing rope. String is thinner; wire is metal. Uncountable when you mean the material (some rope); countable for a length (a rope). Do not write robe (a dressing gown) for rope.',
    ['Throw me a rope and I will pull the boat in.', 'The climber checked every metre of rope.'],
    'a piece of rope / tie with rope. Thinner: string. Metal: wire. Mix-up: robe.',
    []
  ),
  rose: L(
    'A rose is a sweet-smelling garden flower, often red: a bunch of roses, a rose garden, the smell of roses. Flower is the general word. Rise (go up) and rows (lines) sound similar in some accents — spelling differs. Plural: roses. Do not write rows when you mean the flower.',
    ['A single rose stood in a glass on the table.', 'The park is famous for its rose garden in June.'],
    'a bunch of roses / a rose garden. General: flower. Mix-ups: rise (go up), rows (lines).',
    []
  ),
  rough: L(
    'Rough means not smooth, not gentle, or not exact: a rough path, rough sea, a rough idea. Smooth is the opposite for surfaces. Gentle is the opposite for behaviour. Approximate is a cousin for “not exact”. Do not write ruff (an old collar) or tough (strong, difficult) unless you mean those.',
    ['The sea was too rough for a small boat.', 'I only have a rough idea of the cost.'],
    'a rough path / sea / idea. Opposites: smooth, gentle. Cousin for numbers: approximate.',
    []
  ),
  roundabout: L(
    'A roundabout is a circular road junction: at the roundabout, take the second exit, a busy roundabout. British English uses roundabout; American English often says traffic circle. Junction is any meeting of roads. A playground roundabout is the spinning ride — extra. Do not write round about as two words for the road.',
    ['Turn left at the next roundabout.', 'Lorries must slow down on the roundabout.'],
    'at the roundabout / take the second exit (British). US: traffic circle. One word.',
    []
  ),
  routine: L(
    'A routine is the usual order of things you do: morning routine, a daily routine, break the routine. Habit is one repeated action; a routine is a whole pattern. Regular describes how often. Uncountable in “as a routine”; countable for “a routine”. Do not write route (a way) for routine — related look, different meaning.',
    ['Gym and a shower are part of his evening routine.', 'The baby’s routine changed after the flight.'],
    'a morning / daily routine. One action: habit. Mix-up: route (a way).',
    []
  ),
  route: L(
    'A route is a way from one place to another: the fastest route, a bus route, plan your route. Road is the physical street; route is the path you choose (it may use several roads). Way is a simple cousin. British pronunciation is often /ruːt/. Do not write root (of a plant) for route — same sound in British English.',
    ['The satnav offered a quieter route through the villages.', 'Which route does the night bus take?'],
    'the fastest / bus route. Physical: road. Homophone: root (plant). British /ruːt/.',
    ['way']
  ),
  row: L(
    'A row /rəʊ/ is a line of people or things: the front row, a row of houses, in a row. Line is a close cousin. Row /raʊ/ as a noun can also mean an angry argument — extra pronunciation. Row as a verb can mean move a boat with oars. Do not write raw (not cooked) for row.',
    ['A row of trees hid the car park.', 'We booked seats in the back row of the cinema.'],
    'the front row / a row of houses (/rəʊ/). Extra: row a boat; a row /raʊ/ = argument.',
    ['line']
  ),
  rude: L(
    'Rude means not polite: a rude comment, it is rude to, don’t be rude. Polite is the opposite. Impolite is a close cousin. Rough can mean not gentle, not the same as rude. Do not write rood (old spelling) or crude (B2, vulgar or basic) unless you mean those.',
    ['It is rude to push in at the front of the queue.', 'She apologised for the rude email.'],
    'it is rude to / don’t be rude. Opposite: polite. Cousin: impolite. Mix-up: rough.',
    ['impolite']
  ),
  rugby: L(
    'Rugby is a team sport with an oval ball that you carry, kick, and pass: play rugby, a rugby match, rugby boots. Football (British) is mostly with the feet and a round ball. American football is a different game. Uncountable (not “a rugby” for the sport). Do not write rugged (rough landscape) for rugby.',
    ['The school rugby team trains on Thursday.', 'We watched rugby on television after lunch.'],
    'play rugby / a rugby match (uncountable sport). Contrast: football (round ball). Mix-up: rugged.',
    []
  ),
  ruin: L(
    'Ruin as a verb means spoil something completely: ruin the picnic, ruin your shoes, the rain ruined it. Spoil is a close cousin, often a little weaker. Destroy is stronger (break to pieces). Ruins as a noun are old broken buildings. Past: ruined. Do not write rune (old letters) for ruin.',
    ['Spilling coffee ruined the last page of her notes.', 'Don’t let one mistake ruin the whole trip.'],
    'ruin the picnic / shoes. Cousin: spoil. Stronger: destroy. Noun extra: ruins (old buildings).',
    ['spoil']
  ),
  safety: L(
    'Safety is the state of being safe from harm: for your own safety, a safety helmet, public safety. Safe is the adjective; safety is the noun. Security is more about guards and locks. Danger is the opposite idea. Uncountable. Do not write safely (adverb) when you need the noun.',
    ['Read the safety instructions before you light the cooker.', 'The guide talked about mountain safety in winter.'],
    'for your own safety / a safety helmet (uncountable). Adjective: safe. Related: security.',
    []
  ),
  sail: L(
    'Sail means travel on water, often with wind: sail across the lake, sail from Dover, a boat that sails. Drive is for cars; fly is for planes. A sail as a noun is the cloth that catches the wind. Past: sailed. Do not write sale (selling, low prices) for sail — same sound.',
    ['They sailed along the coast in the afternoon.', 'The ferry sails for France twice a day.'],
    'sail across / sail from. Noun extra: a sail (cloth). Homophone: sale (shop). Past: sailed.',
    []
  ),
  sailor: L(
    'A sailor works on a ship or sails boats: an experienced sailor, sailors on deck, train as a sailor. Sail is the verb; sailor is the person. Passenger is someone travelling, not working. Captain is the person in charge. Do not write tailor (clothes) for sailor.',
    ['The sailor climbed up to check the sail.', 'Young sailors learnt the knots in the harbour.'],
    'an experienced sailor / sailors on deck. Verb: sail. Mix-up: tailor (clothes).',
    []
  ),
  sand: L(
    'Sand is tiny grains of rock on beaches and in deserts: wet sand, a grain of sand, sand on the beach. Soil is earth in a garden; gravel is larger stones. Uncountable. Sands can mean a beach area in names. Do not write send (post something) for sand.',
    ['Take your shoes off — there is sand in them.', 'The wind blew sand into our sandwiches.'],
    'wet sand / on the beach (uncountable). Garden cousin: soil. Mix-up: send (post).',
    []
  ),
  satisfied: L(
    'Satisfied means pleased because something is good enough: satisfied with the result, a satisfied customer, not satisfied. Happy is wider; satisfied is about a result matching what you wanted. Dissatisfied is the opposite. Satisfy is the verb. Do not write saturdated or Saturday for satisfied.',
    ['Are you satisfied with your new timetable?', 'The manager asked if the guests were satisfied.'],
    'satisfied with / a satisfied customer. Verb: satisfy. Opposite: dissatisfied. Wider: happy.',
    ['pleased']
  ),
  scared: L(
    'Scared means frightened: scared of dogs, feel scared, scared to go out. Afraid is a close cousin (afraid of). Frightened is similar. Scary describes the thing that causes fear. Do not write scarred (with a scar) for scared — extra r, different meaning.',
    ['I get scared on high bridges.', 'The little boy was scared of the dark hallway.'],
    'scared of / feel scared. Cousins: afraid, frightened. Thing: scary. Mix-up: scarred.',
    ['afraid', 'frightened']
  ),
  scientist: L(
    'A scientist studies or works in science: a research scientist, scientists say, train as a scientist. Science is the subject; scientist is the person. Teacher may teach science without being a research scientist. Do not write science when you mean the person.',
    ['A scientist from the university visited our class.', 'The scientist wore a white coat in the lab.'],
    'a research scientist / scientists say. Subject: science. Place extra: lab.',
    []
  ),
  scream: L(
    'Scream means cry out loudly in a high voice: scream with fear, scream for help, people screamed. Shout is loud but not always high or frightened. Yell is similar to shout. Noun: a scream. Past: screamed. Do not write screen (TV, computer) for scream.',
    ['She screamed when the spider dropped onto the desk.', 'Fans screamed when the band came on stage.'],
    'scream with fear / for help. Cousins: shout, yell. Mix-up: screen (TV). Past: screamed.',
    []
  ),
  secretary: L(
    'A secretary does office work such as letters, calls, and bookings: the school secretary, leave a message with the secretary, a personal secretary. Receptionist is usually at the front desk; a secretary may work in an inner office. Assistant is a wider job word. British pronunciation often has three syllables /ˈsekrətri/. Do not write secret (something hidden) for secretary.',
    ['The secretary printed the letters for the meeting.', 'Call the secretary to change your appointment.'],
    'the school secretary / leave a message. Contrast: receptionist (front desk). Mix-up: secret.',
    []
  ),
  section: L(
    'A section is one part of a divided whole: the sports section, this section of the road, in the children’s section. Part is a simple cousin. Chapter is for books. Department is for shops or organisations. Do not write session (a period of activity) for section.',
    ['Please wait in the waiting section by the door.', 'I only read the travel section on Sundays.'],
    'the sports section / a section of the road. Cousin: part. Mix-up: session (a period).',
    ['part']
  ),
  separate: L(
    'Separate as an adjective means not together: separate rooms, keep them separate, a separate bill. Apart is a close cousin. Together is the opposite. The verb separate is /ˈsepəreɪt/; the adjective is /ˈseprət/. Do not write desperate (very worried) for separate.',
    ['Please use a separate notebook for maths.', 'The garage is separate from the house.'],
    'separate rooms / keep them separate (adj /ˈseprət/). Opposite: together. Mix-up: desperate.',
    ['apart']
  ),
  shade: L(
    'Shade is a cool, darker place out of the sun: in the shade, sit in the shade, the shade of a tree. Shadow is the dark shape of one object; shade is the area without strong sun. Uncountable in this sense. Do not write shadow when you mean a place to sit out of the heat, or fade (lose colour).',
    ['The dog lay in the shade behind the wall.', 'There is no shade on this beach at noon.'],
    'in the shade / the shade of a tree (uncountable). Contrast: shadow (a dark shape).',
    []
  ),
  shadow: L(
    'A shadow is a dark shape made when something blocks the light: a long shadow, my shadow on the wall, in shadow. Shade is the cool area; a shadow has a clear outline of an object. Cast a shadow is a common collocation. Do not write shade when you mean the shape of your body on the ground.',
    ['Our shadows stretched across the football pitch.', 'A moving shadow made the cat jump.'],
    'a long shadow / cast a shadow. Contrast: shade (cool area out of the sun).',
    []
  ),
  shake: L(
    'Shake means move quickly from side to side or up and down: shake the bottle, shake hands, shake your head (no). Nod is yes with the head; shake your head is no in many countries. Past: shook; past participle: shaken. Do not write shock (a sudden surprise) for shake.',
    ['Shake the carton well before you pour the juice.', 'They shook hands at the start of the match.'],
    'shake the bottle / shake hands. Head: shake = no, nod = yes. Past: shook / shaken.',
    []
  ),
  sharp: L(
    'Sharp means able to cut, or sudden and clear: a sharp knife, a sharp turn, a sharp pain. Blunt is the opposite for knives. Dull can mean not sharp or not interesting. Sharp at six means exactly six — extra time sense (British). Do not write sheep (the animal) for sharp.',
    ['Keep sharp scissors away from young children.', 'There was a sharp drop in temperature at night.'],
    'a sharp knife / pain / turn. Opposite (knives): blunt. Time extra: at six sharp.',
    []
  ),
  sheet: L(
    'A sheet is a large cloth for a bed, or a piece of paper: clean sheets, a sheet of paper, change the sheets. Blanket is warmer and thicker; duvet is padded (British). Page is one side in a book; a sheet of paper may be loose. Do not write cheat (not honest) for sheet.',
    ['There is a spare sheet in the airing cupboard.', 'Write your name at the top of the sheet.'],
    'clean sheets / a sheet of paper. Warmer: blanket. British bed cousin: duvet.',
    []
  ),
  shine: L(
    'Shine means give out light or look bright: the sun shines, shine a torch, shoes that shine. Glow is softer light. Past for the sun is often shone in British English; shined is used for polishing. Do not write shy (nervous) for shine, or sign (a notice).',
    ['A light shone from the cottage window.', 'He polished the table until it shone.'],
    'the sun shines / shine a torch. British past (sun): shone. Mix-ups: shy, sign.',
    []
  ),
  shy: L(
    'Shy means nervous with people you do not know well: a shy child, too shy to speak, shy at first. Quiet is not always shy — some quiet people are calm, not nervous. Confident is the opposite idea. Shyness is the noun. Do not write sly (cunning — B2) or shine for shy.',
    ['She is shy about singing in front of the class.', 'The puppy was shy of new visitors.'],
    'a shy child / too shy to. Contrast: quiet (not always nervous). Opposite idea: confident.',
    []
  ),
  signal: L(
    'A signal is a light, sound, or movement that sends a message: a turn signal, a smoke signal, give a signal. Sign is often written or fixed (a road sign); a signal is often for the moment. Wave can be a kind of signal. Do not write single (only one) for signal.',
    ['A red signal stopped the train at the bridge.', 'He waited for the referee’s signal to start.'],
    'give a signal / a red signal. Contrast: sign (written/fixed). Mix-up: single.',
    []
  ),
  silent: L(
    'Silent means with no sound: keep silent, a silent room, the silent letter in “knife”. Quiet can still have a little sound; silent is stronger. Noisy is the opposite. Silence is the noun. Do not write silence when you need the adjective, or siren (an alarm).',
    ['The street was silent after midnight.', 'Remain silent until the recording light goes off.'],
    'keep silent / a silent room. Weaker: quiet. Noun: silence. Opposite: noisy.',
    []
  ),
  skate: L(
    'Skate means move on ice or a smooth floor with skates: skate on the lake, ice-skate, skate in the park. Ski is on snow with long boards. Skates are the boots. Past: skated. Do not write skate when you mean ski, or scare (frighten).',
    ['We hired skates and skated round the rink.', 'She learnt to skate when she was six.'],
    'skate on ice / a rink. Contrast: ski (snow). Past: skated. Related: ice skates.',
    []
  ),
  ski: L(
    'Ski means move over snow on long boards: learn to ski, ski down the slope, a ski holiday. Skate is on ice. Skis are the boards; ski can also be a noun. Past: skied. British: go skiing is very common. Do not write sky (above you) for ski.',
    ['They skied all morning and drank hot chocolate after.', 'Can you ski, or is this your first time?'],
    'learn to ski / go skiing. Contrast: skate (ice). Mix-up: sky. Past: skied.',
    []
  ),
  slowly: L(
    'Slowly means at a low speed: speak slowly, drive slowly, walk slowly. Slow is the adjective; slowly is the adverb. Quickly is the opposite. Slow can be an adverb in some phrases (go slow) but slowly is the safe A2 form. Do not write slowly when you mean lowly (not A2).',
    ['The old tram moved slowly up the hill.', 'Read the contract slowly before you sign.'],
    'speak / drive slowly. Adjective: slow. Opposite: quickly.',
    []
  ),
  smart: L(
    'Smart in British English often means clean, tidy, and stylish: a smart jacket, look smart, smart clothes. Clever is the usual British word for intelligence; American English uses smart for clever. Casual is the opposite for clothes. Do not write smash (break) for smart.',
    ['Wear something smart for the wedding.', 'The hotel lobby looks very smart after the paint.'],
    'a smart jacket / look smart (British: well dressed). US extra: smart = clever. Opposite: casual.',
    []
  ),
  snake: L(
    'A snake is a long animal with no legs: a grass snake, scared of snakes, a snake in the grass. Worm is smaller and lives in soil. Lizard has legs. Uncountable? No — a snake, snakes. Do not write snack (a small meal) for snake.',
    ['The guide told us not to touch the snake.', 'A snake slid across the warm stones and disappeared.'],
    'a grass snake / scared of snakes. Smaller soil cousin: worm. Mix-up: snack (food).',
    []
  ),
  social: L(
    'Social means connected with meeting people and groups: a social event, social life, social media. Society is the noun for people as a whole. Party is one event; social describes the type. Shy people may still go to social events. Do not write socialist (politics) unless you mean that.',
    ['There is a social evening for new students on Friday.', 'He has a busy social life outside work.'],
    'a social event / social life. Noun: society. Mix-up: socialist (politics).',
    []
  ),
  solve: L(
    'Solve means find the answer to a problem or puzzle: solve a problem, solve a mystery, solve the equation. Solution is the noun (the answer). Fix is more for broken objects. Answer works for questions; solve is for problems. Past: solved. Do not write solution when you need the verb.',
    ['Together we solved the puzzle in twenty minutes.', 'The mechanic could not solve the noise in the engine.'],
    'solve a problem / puzzle. Noun: solution. Object cousin: fix. Past: solved.',
    []
  ),
  sort: L(
    'Sort as a noun means a type or kind: what sort of, this sort of thing, all sorts of. Kind and type are close cousins. Sort as a verb means put into groups (sort the washing) — extra A2 sense. Do not write short (not long) for sort.',
    ['What sort of ticket do you need — single or return?', 'I enjoy this sort of quiet café in the afternoon.'],
    'what sort of / this sort of. Cousins: kind, type. Verb extra: sort the washing. Mix-up: short.',
    ['kind', 'type']
  ),
  spider: L(
    'A spider is a small animal with eight legs that often makes a web: a spider’s web, scared of spiders, a garden spider. Insect usually has six legs; a spider is not an insect in school science. Web is what it builds. Do not write cider (the drink) for spider, or speaker.',
    ['She asked me to take the spider outside in a cup.', 'A spider waited in the corner of the bathroom.'],
    'a spider’s web / a garden spider. Six legs: insect. Mix-up: cider (drink).',
    []
  ),
  stage: L(
    'A stage is the raised floor in a theatre: on stage, walk onto the stage, a stage light. Platform is more general (station platform). Scene is part of a play, not the physical floor. Stage can also mean a step in a process — extra. Do not write stairs for stage.',
    ['The actors waited at the side of the stage.', 'He felt nervous before he walked on stage.'],
    'on stage / onto the stage. Station cousin: platform. Play part: scene. Mix-up: stairs.',
    []
  ),
  statue: L(
    'A statue is a stone or metal figure of a person or animal: a statue in the square, a famous statue, next to the statue. Sculpture is wider (any shaped art). Monument may be a statue or another memorial. Do not write status (your position — B1) for statue, or statute (a law — C1).',
    ['Pigeons sat on the bronze statue of the queen.', 'We met under the statue by the fountain.'],
    'a statue in the square / a bronze statue. Wider: sculpture. Mix-ups: status, statute.',
    []
  ),
  suddenly: L(
    'Suddenly means quickly and without warning: stop suddenly, suddenly the lights, it started suddenly. Sudden is the adjective (a sudden noise). Gradually is the opposite idea (slowly, step by step). All of a sudden is a cousin phrase. Do not write suddenly when you mean sadly.',
    ['The bus stopped suddenly and we all held on.', 'Suddenly it began to hail on the market.'],
    'stop suddenly / all of a sudden. Adjective: sudden. Opposite idea: gradually. Mix-up: sadly.',
    []
  ),
}
