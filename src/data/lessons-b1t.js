const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1T = {
  colander: L(
    'A colander is a bowl with holes for draining water from pasta, vegetables, or similar food. A sieve has a finer mesh; a bowl holds liquid. Food tech: drain the pasta in the colander; the sink is not a strainer on its own.',
    ['Drain the pasta in the colander; the food-tech sink is not a strainer on its own.', 'A colander in boarding breakfast is for fruit wash; a mug is not a drain for berries.'],
    'a colander. Contrast: a sieve / a bowl. Food tech / boarding. Countable. Mix-up: to strain is the verb; the bowl with holes is a colander.',
    []
  ),
  'coat-hanger': L(
    'A coat hanger (id: coat-hanger) is a shaped frame for hanging a coat or shirt in a wardrobe (UK; also a hanger). A coat hook is fixed to a wall; a peg is often a simple knob. Uniform: put the blazer on a coat hanger; a chair back still creases the uniform.',
    ['Put the blazer on a coat hanger; a chair back still creases the uniform.', 'Wire coat hangers in halls still stay in the wardrobe; hanging a wet PE kit on one over a heater is a fire risk.'],
    'a coat hanger (UK). Close: a hanger. Contrast: a coat hook / a peg. Uniform / halls. Countable. Mix-up: to hang is the verb; the frame is a coat hanger.',
    ['hanger']
  ),
  'toast-rack': L(
    'A toast rack (id: toast-rack) is a small stand with slots that holds slices of toast upright. A plate is for serving; a cooling rack is for baking. Boarding: the toast rack is not a letter sorter; wet toast still goes in the food bin.',
    ['The boarding toast rack is not a letter sorter; wet toast still goes in the food bin.', 'A toast rack on the breakfast trolley is counted; stacking toast in a mug is not service.'],
    'a toast rack. Contrast: a plate / a cooling rack. Boarding / breakfast. Countable stands. Mix-up: a rack in a shop is a display; a toast rack is for toast.',
    []
  ),
  'swimming-costume': L(
    'A swimming costume (id: swimming-costume) is a garment worn for swimming (UK; also a costume; US swimsuit). Trunks are for boys; a wetsuit is thicker for cold water. PE: a swimming costume is pool kit; shorts from games are not allowed in the deep end.',
    ['A swimming costume is PE kit for the pool; shorts from games are not allowed in the deep end.', 'A named swimming costume goes in the PE bag; wearing it under uniform all day still fails the inspection.'],
    'a swimming costume (UK). Close: a costume. US: a swimsuit. Contrast: trunks / a wetsuit. PE / pool. Countable. Mix-up: a costume can also mean fancy dress.',
    ['swimsuit']
  ),
  'sun-cream': L(
    'Sun cream (id: sun-cream) protects skin from the sun (UK, often uncountable; also sunscreen or sun lotion). A sunhat shades the face; after-sun is for afterwards. Trips: sun cream is required on the field trip; a hoodie is not SPF.',
    ['Sun cream is required on the field trip; a hoodie is not SPF.', 'Sun-cream in the PE bag still needs a named bottle; sharing one is not first-aid stock.'],
    'sun cream (UK, often uncountable). Close: sunscreen / sun lotion. Contrast: a sunhat / after-sun. Trips / PE. Mix-up: cream in food tech is dairy, not SPF.',
    ['sunscreen']
  ),
  yearbook: L(
    'A yearbook is a book of photos and names for one school year, given out at the end of term. An exercise book is for classwork; a prospectus advertises the school. Exams: sign the yearbook after the last assembly; it is not an exercise book for the exam.',
    ['Sign the yearbook after the last assembly; it is not an exercise book for the exam.', 'A yearbook photo still needs the consent form; a phone snap in the corridor is not the official portrait.'],
    'a yearbook. Contrast: an exercise book / a prospectus. School / exams. Countable books. Mix-up: a year is the time; the yearbook is the album.',
    []
  ),
  'umbrella-stand': L(
    'An umbrella stand (id: umbrella-stand) is a tall container by a door for holding wet umbrellas. A coat hook is for coats; a porch is the space. Library: leave the brolly in the umbrella stand; dripping into the library is a slip risk.',
    ['Leave the brolly in the umbrella stand; dripping into the library is a slip risk.', 'The reception umbrella stand is not a walking-stick store; mobility aids still go with the pupil.'],
    'an umbrella stand. Contrast: a coat hook / a porch. Reception / library. Countable stands. Mix-up: a stand in sport is seating; this stand holds umbrellas.',
    []
  ),
  varnish: L(
    'Varnish is a liquid that dries to a hard, shiny coat on wood or nails (often uncountable). Paint adds colour; polish is often a paste or cream. DT: varnish is staff-supervised; a spray in the corridor is a ventilation fail. Extra: nail varnish is make-up on nails (UK).',
    ['Varnish in DT is staff-supervised; a spray in the corridor is a ventilation fail.', 'Nail varnish fails the uniform inspection; it is for after school, not the exam hall.'],
    'varnish (often uncountable). Contrast: paint / polish. Extra: nail varnish (UK). DT / uniform. Mix-up: to varnish is the verb; the liquid is the noun.',
    []
  ),
  'video-game': L(
    'A video game (id: video-game) is a game played on a computer, console, or phone. A board game uses a board and pieces; an app may not be a game. Common rooms: a video game still needs the age rating; an 18 certificate is not sixth-form kit.',
    ['A video game in the common room still needs the age rating; an 18 certificate is not sixth-form kit.', 'Video-game time in halls still ends at quiet hours; a headset in the corridor is a noise complaint.'],
    'a video game. Contrast: a board game / an app. Common rooms / halls. Countable games. Mix-up: a video can mean a film clip; a video game is played.',
    []
  ),
  'baseball-cap': L(
    'A baseball cap (id: baseball-cap) is a soft cap with a long stiff peak at the front. A school cap is uniform; a bobble hat is winter knit. Uniform: a baseball cap fails the check; the school cap is the only peak allowed.',
    ['A baseball cap fails the uniform check; the school cap is the only peak allowed.', 'A baseball cap on sports day is sun kit only if the handbook allows a peak; it is not indoor uniform.'],
    'a baseball cap. Contrast: a school cap / a bobble hat. Uniform / sports day. Countable caps. Mix-up: baseball is the sport; the cap is the hat, not the kit for rounders.',
    []
  ),
  'bin-liner': L(
    'A bin liner (id: bin-liner) is a plastic bag that lines a bin to keep it clean (UK). A bin bag may be the same idea; a recycle bag is for recycling. Caretakers: tie the bin liner; food waste still goes in the marked caddy.',
    ['Tie the bin liner for the caretaker; food waste still goes in the marked caddy.', 'Bin liners in halls are for the kitchen bin; a pillowcase is not a liner.'],
    'a bin liner (UK). Close: a bin bag. Contrast: a recycle bag. Caretaker / halls. Countable liners. Mix-up: a liner in other compounds can mean a lining or a ship.',
    ['bin bag']
  ),
  'bobble-hat': L(
    'A bobble hat (id: bobble-hat) is a knitted hat with a pom-pom on top (UK). A beanie may lack the bobble; a school hat is uniform. Coach: a bobble hat is fine on the journey; it is not uniform in the hall.',
    ['A bobble hat is fine on the coach; it is not uniform in the hall.', 'A bobble hat on the field trip is cold-weather kit; a hood is not enough on the coast path in January.'],
    'a bobble hat (UK). Contrast: a beanie / a school hat. Coach / trips. Countable hats. Mix-up: a bobble is the pom-pom; the hat is the whole item. Extra: to bobble a catch is sport slang.',
    []
  ),
  'bubble-bath': L(
    'Bubble bath (id: bubble-bath) is liquid soap that makes foam in a bath (often uncountable). Shower gel is for a shower; bath salts are crystals. Halls: bubble bath is fine; foam on the shared bathroom floor is still a slip report.',
    ['Bubble bath in halls is fine; foam on the shared bathroom floor is still a slip report.', 'Bubble-bath on a nursery placement is still staff-measured; filling the tub for a dare is a safeguarding fail.'],
    'bubble bath (often uncountable). Contrast: shower gel / bath salts. Halls / nursery. Mix-up: a bubble in science is gas in liquid; bubble bath is the product.',
    []
  ),
  'bus-pass': L(
    'A bus pass (id: bus-pass) is a card that lets you travel on buses without buying a ticket each time. A ticket is for one journey; a railcard is for trains. College: show the bus pass to the driver; a lanyard is not a fare.',
    ['Show the bus pass to the driver; a college lanyard is not a fare.', 'A bus-pass photo still needs to match; covering the face with a scarf is a refusal to travel.'],
    'a bus pass. Contrast: a ticket / a railcard. College / high street. Countable passes. Mix-up: to pass a bus is to go past it; a bus pass is the card.',
    []
  ),
  'car-boot': L(
    'A car boot (id: car-boot) is the storage space at the back of a car (UK; US trunk). The back seat is for people; a roof rack is on top. School run: put PE bags in the car boot; the back seat is not a kit store on the zigzag lines. Extra: a car-boot sale is a market from car boots.',
    ['Put the PE bags in the car boot; the back seat is not a kit store on the zigzag lines.', 'A car-boot sale on the rec is not the school fete; parking on the field still needs the caretaker’s say-so.'],
    'a car boot (UK). US: a trunk. Extra: a car-boot sale. Contrast: a back seat / a roof rack. School run. Countable. Mix-up: a boot can also mean a shoe; this boot is the car space.',
    []
  ),
  'cat-flap': L(
    'A cat flap (id: cat-flap) is a small swinging door in a larger door, for a cat to go in and out. A letter box is for post; a fire exit is a full door. Site: a cat flap in the caretaker’s lodge is not a fire exit; drills still use the marked door.',
    ['A cat flap in the caretaker’s lodge is not a fire exit; drills still use the marked door.', 'A cat flap on a halls ground-floor door still needs the landlord’s permission; cutting one is a tenancy breach.'],
    'a cat flap. Contrast: a letter box / a fire exit. Site / halls. Countable flaps. Mix-up: a flap can be a fuss or a piece of material; a cat flap is the pet door.',
    []
  ),
  cheesegrater: L(
    'A cheese grater (id: cheesegrater) is a grater used especially for shredding cheese. A knife cuts; a food processor is electric. Food tech: the cheese grater is washed separately; a knife is not a shortcut for the practical.',
    ['The cheese grater in food tech is washed separately; a knife is not a shortcut for the practical.', 'A cheese grater with food on the teeth still fails hygiene; rinsing it in the handwash sink is not enough.'],
    'a cheese grater (id: cheesegrater). Close: a grater. Contrast: a knife / a food processor. Food tech. Countable. Mix-up: grater is the general tool; a cheese grater is the cheese one.',
    ['grater']
  ),
  'christmas-card': L(
    'A Christmas card (id: christmas-card) is a greetings card sent at Christmas. A letter is longer; a postcard has no envelope. School: a Christmas card to form tutors is fine; posting one in the exam hall is still malpractice.',
    ['A Christmas card to form tutors is fine; posting one in the exam hall is still malpractice.', 'Christmas-card charity packs in tutor time are optional; a compulsory spend is not allowed.'],
    'a Christmas card. Contrast: a letter / a postcard. School / exams. Countable cards. Mix-up: Christmas is the festival; the card is the greeting, not a present.',
    []
  ),
  'coat-hook': L(
    'A coat hook (id: coat-hook) is a hook on a wall or door for hanging a coat. A coat hanger is a removable frame; a peg is often in a cloakroom row. Cloakroom: hang the blazer on the coat hook; a peg on the floor is a trip hazard.',
    ['Hang the blazer on the coat hook; a peg on the floor is a trip hazard.', 'A named coat hook in boarding is not a bag dump; rucksacks still go under the bed.'],
    'a coat hook. Contrast: a coat hanger / a peg. Cloakroom / boarding. Countable hooks. Mix-up: to hook can mean to catch; the coat hook is the fitting.',
    []
  ),
  'coffee-machine': L(
    'A coffee machine (id: coffee-machine) makes coffee from beans or pods. A kettle boils water; a vending machine may sell cans. Staff room: the coffee machine is not a sixth-form kettle; pupils use the canteen till.',
    ['The staff coffee machine is not a sixth-form kettle; pupils use the canteen till.', 'A coffee machine in the hospital waiting room is pay-as-you-go; it is not a free NHS drink.'],
    'a coffee machine. Contrast: a kettle / a vending machine. Staff room / NHS. Countable machines. Mix-up: coffee is the drink; the machine is the maker.',
    []
  ),
  'cotton-reel': L(
    'A cotton reel (id: cotton-reel) is a small spool that holds sewing thread (UK). Cotton wool is fluffy padding; a bobbin is the small spool inside a sewing machine. Textiles: a cotton reel is counted out and in; wrapping it round a chair is not storage.',
    ['A cotton reel in textiles is counted out and in; wrapping it round a chair is not storage.', 'Cotton-reel thread on the floor is a slip risk; it still goes in the accident book if someone trips.'],
    'a cotton reel (UK). Contrast: cotton wool / a bobbin. Textiles. Countable reels. Mix-up: cotton can mean cloth; a cotton reel is the thread spool.',
    []
  ),
  'debit-card': L(
    'A debit card (id: debit-card) pays from your bank account at once, not on credit. A credit card borrows; cash is notes and coins. Trips: a debit card still needs the teacher’s cash protocol; contactless in the gift shop is not a free spend.',
    ['A debit card on the trip still needs the teacher’s cash protocol; contactless in the gift shop is not a free spend.', 'A debit-card contactless tap in the canteen still needs the school account if that is the till rule.'],
    'a debit card. Contrast: a credit card / cash. Trips / canteen. Countable cards. Mix-up: debit means money leaving the account; a debit card is the plastic.',
    []
  ),
  'district-nurse': L(
    'A district nurse (id: district-nurse) is an NHS nurse who visits people at home in a local area (UK). A GP is a doctor in a surgery; a ward nurse works in hospital. Clinics: the district nurse’s home visit is not a GP walk-in; follow the appointment letter.',
    ['The district nurse’s home visit is not a GP walk-in; follow the appointment letter.', 'A district-nurse referral still goes through the GP; a form tutor cannot book the visit.'],
    'a district nurse (UK). Contrast: a GP / a ward nurse. NHS / home visits. Countable jobs. Mix-up: a district is an area; the nurse is the visitor, not a school nurse on site.',
    []
  ),
  draughts: L(
    'Draughts is a board game of moving discs and jumping to capture (UK, often plural; US checkers). Chess uses different pieces; a draught in a room is a cold air current (same spelling). Common room: draughts is fine; chess clocks are not required for that set.',
    ['Draughts in the common room is fine; chess clocks are not required for that set.', 'A draughts set from lost property still needs a name; pieces in a blazer pocket are not the full game.'],
    'draughts (UK game, often plural). US: checkers. Contrast: chess. Extra: a draught = cold air. Common room. Mix-up: draft in US spelling can mean a first version of writing.',
    []
  ),
  'dressing-table': L(
    'A dressing table (id: dressing-table) is a bedroom table with a mirror, used when you get ready (UK). A desk is for work; a bedside table is smaller by the bed. Halls: a dressing table is not a desk for the essay; the lamp still goes off at quiet hours.',
    ['A dressing table in halls is not a desk for the essay; the lamp still goes off at quiet hours.', 'A dressing-table stool is not extra seating for a party; guests still break the tenancy numbers.'],
    'a dressing table (UK). Contrast: a desk / a bedside table. Halls / boarding. Countable. Mix-up: dressing is getting dressed, or salad dressing; the table is the bedroom one.',
    []
  ),
  'e-book': L(
    'An e-book (id: e-book) is a book in digital form that you read on a screen. A textbook is often print; an audiobook is listened to. Exams: an e-book on the college tablet is fine in class; a phone in the exam hall is still banned.',
    ['An e-book on the college tablet is fine; a phone in the exam hall is still banned.', 'An e-book from the library app still needs the college login; a pirated file is not the reading list.'],
    'an e-book. Contrast: a textbook / an audiobook. College / exams. Countable books. Mix-up: e- as a prefix means electronic; an e-book is not an email.',
    []
  ),
  'felt-tip': L(
    'A felt tip (id: felt-tip) is a pen with a felt nib that makes a thick coloured line (UK; also a felt-tip pen). A biro is a ballpoint; a highlighter marks text. Art: felt tips stay in the art tray; they are not for the exam script.',
    ['Felt tips stay in the art tray; they are not for the exam script.', 'A felt-tip on uniform is a behaviour log; washable paint is still not for the blazer.'],
    'a felt tip; a felt-tip pen (UK). Contrast: a biro / a highlighter. Art / exams. Countable pens. Mix-up: felt is the cloth; the tip is the nib, not a gratuity.',
    []
  ),
  'fire-extinguisher': L(
    'A fire extinguisher (id: fire-extinguisher) is a cylinder of foam, powder, or CO₂ used to put out a small fire. A fire alarm warns; a fire blanket smothers. Labs: a fire extinguisher is staff-only; pulling it for a dare is a fire-alarm offence.',
    ['A fire extinguisher is staff-only in the lab; pulling it for a dare is a fire-alarm offence.', 'A fire-extinguisher check still goes on the caretaker’s log; blocking it with a bag is a fire-safety fail.'],
    'a fire extinguisher. Contrast: a fire alarm / a fire blanket. Labs / site. Countable cylinders. Mix-up: to extinguish is the verb; the cylinder is the extinguisher.',
    []
  ),
  'garden-centre': L(
    'A garden centre (id: garden-centre) is a large shop that sells plants, pots, and garden tools (UK). A florist is smaller and often high-street; a park is not a shop. Trips: the garden-centre visit still needs the EVOLVE form; a florist is not the same outing.',
    ['The garden-centre trip still needs the EVOLVE form; a high-street florist is not the same visit.', 'A garden-centre café is not the free-school-meal till; packed lunches stay on the coach unless the form says otherwise.'],
    'a garden centre (UK). Contrast: a florist / a park. Trips / high street. Countable centres. Mix-up: a centre in school can mean a sixth-form centre; this is the plant shop.',
    []
  ),
  'glue-stick': L(
    'A glue stick (id: glue-stick) is a solid stick of glue in a twist-up tube, used for paper. PVA is wet white glue; sellotape is tape. Art: a glue stick is for the sketchbook; PVA on the exam desk is not allowed.',
    ['A glue stick is for the sketchbook; PVA on the exam desk is not allowed.', 'Glue-stick lids go back on in the art tray; a dried stick still goes in the order book, not in a bag.'],
    'a glue stick. Contrast: PVA / sellotape. Art / exams. Countable sticks. Mix-up: glue is the substance; a glue stick is the tube form.',
    []
  ),
  'hair-slide': L(
    'A hair slide (id: hair-slide) is a clip that holds hair in place (UK; US barrette). A hairband goes round the head; a bobble (hair) ties a ponytail. Uniform: a plain hair slide may pass; a jewelled one still fails the inspection.',
    ['A plain hair slide may pass uniform; a jewelled one still fails the inspection.', 'A hair slide in PE still needs to be soft; a metal clip in hockey is a safety fail.'],
    'a hair slide (UK). US: a barrette. Contrast: a hairband / a hair bobble. Uniform / PE. Countable clips. Mix-up: to slide is to move smoothly; a hair slide is the clip.',
    []
  ),
  'ironing-board': L(
    'An ironing board (id: ironing-board) is a folding board with a padded top, used when you iron clothes. An iron is the hot tool; a table is not heatproof. Boarding: the ironing board is booked; an iron on a duvet is a fire risk.',
    ['The boarding ironing board is booked; an iron on a duvet is a fire risk.', 'An ironing board in halls still needs a cool-down; folding it hot is a burn in the accident book.'],
    'an ironing board. Contrast: an iron / a table. Boarding / halls. Countable boards. Mix-up: ironing is the job; the board is the stand, not the metal iron.',
    []
  ),
  'kitchen-roll': L(
    'Kitchen roll (id: kitchen-roll) is thick paper on a roll for wiping up spills (UK, often uncountable; US paper towels). Toilet roll is for the loo; a tea towel is cloth. Food tech: kitchen roll is for the spill; toilet roll is not a wipe for the hob.',
    ['Kitchen roll is for the food-tech spill; toilet roll is not a wipe for the hob.', 'Kitchen-roll in the science lab is for a small spill only if the sheet says so; a chemical still needs the spill kit.'],
    'kitchen roll (UK, often uncountable). US: paper towels. Contrast: toilet roll / a tea towel. Food tech / labs. Mix-up: a roll can mean bread; kitchen roll is the paper.',
    []
  ),
  'laundry-basket': L(
    'A laundry basket (id: laundry-basket) is a basket for dirty clothes waiting to be washed. A bin is for rubbish; a suitcase is for travel. Boarding: put PE kit in the laundry basket; a wet pile on the radiator is a fire risk.',
    ['Put PE kit in the laundry basket; a wet pile on the radiator is a fire risk.', 'A named laundry basket in the dorm is not a shared dump; taking someone else’s kit is still theft.'],
    'a laundry basket. Contrast: a bin / a suitcase. Boarding / PE. Countable baskets. Mix-up: laundry is the washing; the basket is the container.',
    []
  ),
  'letter-box': L(
    'A letter box (id: letter-box) is a slot in a door for posting letters into a house (UK; also letterbox). A post box is a public box in the street; a pigeonhole is staff mail. Office: do not put homework through the letter box after 4pm; use the late-work tray.',
    ['Do not put homework through the office letter box after 4pm; use the late-work tray.', 'A letter box on a halls door still needs the key; posting a spare is a security fail.'],
    'a letter box (UK). Close: letterbox. Contrast: a post box / a pigeonhole. Office / halls. Countable slots. Mix-up: a letter is the mail; the letter box is the slot.',
    ['letterbox']
  ),
  'lollipop-lady': L(
    'A lollipop lady (id: lollipop-lady) is a woman who stops traffic with a round sign so children can cross (UK). A lollipop man is the male job; traffic lights are signals. School run: wait for the lollipop lady; the zebra crossing is not a sprint.',
    ['Wait for the lollipop lady; the zebra crossing is not a sprint during the school run.', 'A lollipop lady’s sign is not a toy; grabbing it is a behaviour log and a road-safety fail.'],
    'a lollipop lady (UK). Close: a lollipop man. Contrast: traffic lights. School run. Countable jobs. Mix-up: a lollipop is a sweet; the lady is the crossing patrol.',
    []
  ),
  'lost-property': L(
    'Lost property (id: lost-property) is things people have lost, kept so owners can collect them (UK, often uncountable). A locker is named storage; a bin is rubbish. PE: blazers go to lost property; a nameless hoodie is not returned from the office.',
    ['Blazers go to lost property after PE; a nameless hoodie is not returned from the office.', 'Lost-property sales at the end of term still need a name check; taking a kit that is not yours is theft.'],
    'lost property (UK, often uncountable). Contrast: a locker / a bin. US: lost and found. PE / office. Mix-up: lost is the adjective; property here means belongings, not a house.',
    []
  ),
  'lunch-box': L(
    'A lunch box (id: lunch-box) is a box for a packed meal, especially for school. A canteen tray is for a hot dinner; a picnic basket is larger. Hall: a named lunch box is packed lunch; it is not a free-school-meal tray.',
    ['A named lunch box is packed lunch; it is not a free-school-meal tray in the hall.', 'A lunch-box allergen card still sits in the lid; swapping sandwiches is a risk for nut policies.'],
    'a lunch box. Contrast: a canteen tray / a picnic basket. School lunch. Countable boxes. Mix-up: lunch is the meal; the box is the container.',
    []
  ),
  'name-tag': L(
    'A name tag (id: name-tag) is a small label that shows a person’s name, often sewn into clothes or worn on a lanyard. A lanyard is the strap; a name badge is often pinned. PE: sew a name tag in the kit; a Sharpie on the collar still fades in the wash.',
    ['Sew a name tag in the PE kit; a Sharpie on the collar still fades in the wash.', 'A name tag on the work-experience placement is still ID; covering it is not optional in the shop.'],
    'a name tag. Contrast: a lanyard / a name badge. PE / work experience. Countable tags. Mix-up: a tag in online use can mean a label in a post; this tag is the name label.',
    []
  ),
  'oven-glove': L(
    'An oven glove (id: oven-glove) is a thick glove for holding hot dishes from an oven (UK; also oven gloves as a pair). A tea towel is for drying; a mitt is a close twin. Food tech: use the oven glove; a tea towel is not heatproof kit.',
    ['Use the oven glove in food tech; a tea towel is not heatproof kit.', 'Oven gloves hang on the named hook; using a wet one still conducts heat — that is a burn in the accident book.'],
    'an oven glove; oven gloves. Close: an oven mitt. Contrast: a tea towel. Food tech. Countable. Mix-up: a glove for winter is not heatproof; an oven glove is for hot dishes.',
    ['oven mitt']
  ),
  'paper-clip': L(
    'A paper clip (id: paper-clip) is a small bent-wire clip that holds sheets of paper together. A staple goes through the paper; a binder clip is stronger. Office: a paper clip holds the permission slip; staples are not for work you still need to sign.',
    ['A paper clip holds the permission slip; staples are not for work you still need to sign.', 'Paper clips stay off the exam desk if the invigilator says so; they are not fidget kit.'],
    'a paper clip. Contrast: a staple / a binder clip. Office / exams. Countable clips. Mix-up: a clip can mean a video clip; a paper clip is the wire fastener.',
    []
  ),
  'pencil-case': L(
    'A pencil case (id: pencil-case) is a small case for pens, pencils, and a rubber. A pencil is one tool; a rucksack is the big bag. Exams: a clear pencil case is for the hall; a bulky tin still goes in the bag at the front.',
    ['A clear pencil case is for the exam; a bulky tin still goes in the bag at the front.', 'A pencil case in Year 7 still needs a name; a tin of felt tips is art, not the English pen.'],
    'a pencil case. Contrast: a pencil / a rucksack. Exams / class. Countable cases. Mix-up: a case can mean a box or a legal case; a pencil case is the stationery pouch.',
    []
  ),
  'pepper-pot': L(
    'A pepper pot (id: pepper-pot) is a small pot with holes in the lid for shaking pepper (UK). A salt cellar is for salt; a mill grinds peppercorns. Dining hall: the pepper pot is not a science shaker; do not take it to the lab.',
    ['The pepper pot on the dining table is not a science shaker; do not take it to the lab.', 'A pepper-pot refill still uses the dining-hall stock; emptying it into a bag is theft.'],
    'a pepper pot (UK). Contrast: a salt cellar / a pepper mill. Dining hall. Countable pots. Mix-up: pepper is the spice; the pot is the shaker. US: a pepper shaker.',
    []
  ),
  'phone-box': L(
    'A phone box (id: phone-box) is a public booth with a payphone (UK; US phone booth). A mobile is a personal phone; a call box is a close twin. High street: the phone box is not a changing room; a mobile still goes in the bag on site.',
    ['The high-street phone box is not a changing room; a mobile still goes in the bag on site.', 'A phone-box 999 call is for emergencies; the attendance line is not in the kiosk.'],
    'a phone box (UK). Close: a call box. US: a phone booth. Contrast: a mobile. High street / emergencies. Countable boxes. Mix-up: a box can mean a carton; a phone box is the booth.',
    ['call box']
  ),
  'photo-frame': L(
    'A photo frame (id: photo-frame) is a border that holds and displays a photograph. A photo is the picture; an album stores many. Halls: a photo frame still needs the inventory check; nails in the plaster are a deposit fail.',
    ['A photo frame in halls still needs the inventory check; nails in the plaster are a deposit fail.', 'A photo-frame on the boarding locker is blu-tack only; a nail is a fire-safety and inventory fail.'],
    'a photo frame. Contrast: a photo / an album. Halls / boarding. Countable frames. Mix-up: a frame can mean a bicycle frame or a glasses frame; this frame holds a photo.',
    []
  ),
  'picnic-rug': L(
    'A picnic rug (id: picnic-rug) is a blanket spread on the ground for an outdoor meal. A tablecloth covers a table; a towel is for drying. Sports day: a picnic rug is for first-aid shade; pupils sit on the marked grass.',
    ['A picnic rug on sports day is for first-aid shade; pupils sit on the marked grass.', 'A picnic rug on the geography field trip still needs to come off the Site of Special Scientific Interest; trampling the dune grass is not allowed.'],
    'a picnic rug. Contrast: a tablecloth / a towel. Sports day / trips. Countable rugs. Mix-up: a rug indoors is decorative; a picnic rug is for sitting outside.',
    []
  ),
  pillowcase: L(
    'A pillowcase is a removable cloth cover for a pillow. A pillow is the cushion; a duvet cover is for the duvet. Boarding: a named pillowcase is kit; a PE hoodie is not a pillow cover.',
    ['A named pillowcase is boarding kit; a PE hoodie is not a pillow cover.', 'Pillowcases go in the laundry bag on the rota; hiding one as a sack is still a missing-kit note.'],
    'a pillowcase. Contrast: a pillow / a duvet cover. Boarding / laundry. Countable. Mix-up: a case can mean a box; a pillowcase is the cloth cover.',
    []
  ),
  'place-mat': L(
    'A place mat (id: place-mat) is a mat on a table under a person’s plate and cutlery. A tablecloth covers the whole table; a coaster is for a cup. Food tech: put the place mat down; a textbook is not a heatproof mat.',
    ['Put the place mat down in food tech; a textbook is not a heatproof mat.', 'Place mats in the dining hall are washed with the crockery; a PE bib is not a cover.'],
    'a place mat. Contrast: a tablecloth / a coaster. Food tech / dining hall. Countable mats. Mix-up: a place can mean a seat or a town; a place mat marks one setting.',
    []
  ),
  'plaster-cast': L(
    'A plaster cast (id: plaster-cast) is a hard plaster case that keeps a broken bone still while it heals (UK). A sticking plaster is a small adhesive strip; a sling supports an arm. NHS: a plaster cast still needs the lift pass; PE is adapted, not skipped without a sick note.',
    ['A plaster cast still needs the lift pass; PE is adapted, not skipped without a sick note.', 'A plaster-cast clinic letter still goes to attendance; a photo of the cast is not a sick note on its own.'],
    'a plaster cast (UK). Contrast: a sticking plaster / a sling. NHS / PE. Countable casts. Mix-up: plaster can mean the wall finish or a small plaster; a plaster cast is the hard bone case.',
    []
  ),
  'plug-hole': L(
    'A plug hole (id: plug-hole) is the hole in a sink or bath where water drains away (UK; also plughole). A plug stops the water; a drain is the pipe. Halls: hair in the plug hole still goes on the cleaning rota; a sock is not a filter.',
    ['Hair in the plug hole still goes on the halls cleaning rota; a sock is not a filter.', 'A blocked plug hole in the science prep sink still needs the technician; pouring paint down it is a pollution fail.'],
    'a plug hole (UK). Close: a plughole. Contrast: a plug / a drain. Halls / labs. Countable holes. Mix-up: a plug is also an electrical plug; this hole is in the sink.',
    ['plughole']
  ),
  'post-box': L(
    'A post box (id: post-box) is a public box in the street for posting letters (UK; also a pillar box; US mailbox). A letter box is the slot in a door; a post office handles counters. High street: the post box collection is 5.30pm; a parcel in the office pigeonhole is not Royal Mail.',
    ['The post box collection is 5.30pm; a parcel in the office pigeonhole is not Royal Mail.', 'A post-box on the corner is not a litter bin; a sandwich in the slot is still fly-tipping.'],
    'a post box (UK). Close: a pillar box. Contrast: a letter box / a post office. US: a mailbox. High street. Countable boxes. Mix-up: the post is the mail; a post box is the public container.',
    ['pillar box']
  ),
  'power-socket': L(
    'A power socket (id: power-socket) is a point in a wall that you plug an electrical lead into (UK; US outlet). A plug is on the lead; a fuse protects the circuit. Halls: do not overload the power socket; a daisy-chain extension is a fire-safety fail.',
    ['Do not overload the halls power socket; a daisy-chain extension is a fire-safety fail.', 'A power socket in the exam hall is not for phones; chargers still go in the bag at the front.'],
    'a power socket (UK). Contrast: a plug / a fuse. US: an outlet / a receptacle. Halls / exams. Countable sockets. Mix-up: a socket can also mean an eye socket; this one is electrical.',
    []
  ),
  pram: L(
    'A pram is a four-wheeled carriage for a baby lying down (UK; US baby carriage). A pushchair is usually for a sitting toddler; a buggy is a close twin of a pushchair. Clinics: fold the pram in the waiting room; it is still not allowed in the treatment cubicle.',
    ['Fold the pram in the clinic waiting room; it is still not allowed in the treatment cubicle.', 'A pram on the nursery placement still needs the brake on; a shopping trolley is not a seat.'],
    'a pram (UK). US: a baby carriage. Contrast: a pushchair / a buggy. NHS / nursery. Countable. Mix-up: to pram is not a verb in school English; the noun is the baby carriage.',
    []
  ),
  'rain-hat': L(
    'A rain hat (id: rain-hat) is a hat worn to keep rain off the head and face. An umbrella is held in the hand; a sunhat is for sun. Geography: a rain hat on the trip is kit; a hoodie hood is not waterproof on the coast path.',
    ['A rain hat on the geography trip is kit; a hoodie hood is not waterproof on the coast path.', 'A rain hat in the PE bag is still named; a baseball cap soaks through and is not the same kit.'],
    'a rain hat. Contrast: an umbrella / a sunhat. Trips / PE. Countable hats. Mix-up: rain is the weather; the hat is the covering, not a rain jacket.',
    []
  ),
  'rubber-band': L(
    'A rubber band (id: rubber-band) is a small elastic loop for holding things together (UK; also an elastic band). A hair bobble is for hair; sellotape sticks. Class: a rubber band is for the worksheet bundle; flicking one in the hall is a behaviour log.',
    ['A rubber band is for the worksheet bundle; flicking one in the hall is a behaviour log.', 'Rubber bands in the post room are for letters; wearing one as a bracelet still snaps and is a first-aid risk.'],
    'a rubber band (UK). Close: an elastic band. Contrast: a hair bobble / sellotape. Class / office. Countable bands. Mix-up: a rubber in UK English is also an eraser; a rubber band is the elastic loop.',
    ['elastic band']
  ),
  'safety-pin': L(
    'A safety pin (id: safety-pin) is a pin with a guard that covers the point, used to fasten cloth. A drawing pin is for boards; a sewing pin is longer and uncovered. Costume: a safety pin can hold a torn hem for the concert; a drawing pin is not for clothing.',
    ['A safety pin can hold a torn hem for the concert; a drawing pin is not for clothing.', 'Safety pins in the first-aid kit are for slings; they are not jewellery in the exam hall.'],
    'a safety pin. Contrast: a drawing pin / a sewing pin. Costume / first aid. Countable pins. Mix-up: safety is the idea of being safe; a safety pin is the fastener with a guard.',
    []
  ),
  'salt-cellar': L(
    'A salt cellar (id: salt-cellar) is a small pot for salt on a dining table (UK). A pepper pot is for pepper; a cellar under a house is a basement. Dining hall: the salt cellar is not a science sample; do not take it to chemistry.',
    ['The salt cellar in the dining hall is not a science sample; do not take it to chemistry.', 'A salt-cellar spill still gets wiped; pouring a heap on a mate’s chips is a behaviour log.'],
    'a salt cellar (UK). Contrast: a pepper pot / a cellar (basement). Dining hall. Countable pots. Mix-up: a cellar is usually an underground room; a salt cellar is the table pot. US: a salt shaker.',
    []
  ),
  sandpit: L(
    'A sandpit is a shallow box or pit of sand for children to play in (UK; US sandbox). A playground is the wider space; a bunker is golf sand. Nursery: the sandpit is for the placement; throwing sand still goes in the accident book.',
    ['The nursery sandpit is for the placement; throwing sand still goes in the accident book.', 'A sandpit lid still goes on after the session; leaving it open is a cat-fouling hygiene fail.'],
    'a sandpit (UK). US: a sandbox. Contrast: a playground / a bunker. Nursery. Countable pits. Mix-up: a pit can mean a hole or a seed; a sandpit is the play sand.',
    []
  ),
  'sat-nav': L(
    'A sat-nav (id: sat-nav) is a satellite navigation device or app that gives driving directions (UK). A map is paper; GPS is the satellite system behind it. Minibus: the sat-nav is not a phone in the driver’s hand; a printed route still goes on the trip form.',
    ['The minibus sat-nav is not a phone in the driver’s hand; a printed route still goes on the trip form.', 'A sat-nav diversion still needs the teacher’s check; following it through a bus lane is not a shortcut.'],
    'a sat-nav (UK). Contrast: a map / GPS (the system). Minibus / trips. Countable devices. Mix-up: sat can mean Saturday; sat-nav is satellite navigation.',
    []
  ),
  'school-run': L(
    'The school run (id: school-run) is the regular trip of taking children to or from school by car (UK). A bus pass is public transport; a drop-off is the place. Gates: park off-site on the school run; the zigzag lines are not a waiting bay.',
    ['Park off-site on the school run; the zigzag lines are not a waiting bay.', 'A school-run lift from a neighbour still needs the safeguarding list; an unknown car is not a pickup.'],
    'the school run (UK, often used with the). Contrast: a bus / a drop-off. Gates / safeguarding. Mix-up: a run can mean a jog or a cricket score; the school run is the car trip.',
    []
  ),
  sellotape: L(
    'Sellotape (id: sellotape) is clear sticky tape for paper and parcels (UK, often uncountable; originally a brand). Glue is wet; masking tape is duller and peels. Displays: sellotape is for the board; it is not a repair for a cracked phone in the exam.',
    ['Sellotape is for the display board; it is not a repair for a cracked phone in the exam.', 'Sellotape on halls paint still marks; blu-tack is the inventory rule for posters.'],
    'sellotape (UK, often uncountable). Close: sticky tape. Contrast: glue / masking tape. Displays / exams. Mix-up: a brand name used generally; US: Scotch tape. Extra: to sellotape is the verb.',
    ['sticky tape']
  ),
  'sewing-machine': L(
    'A sewing machine (id: sewing-machine) stitches cloth with a needle and thread. A needle is used by hand; an overlocker is a specialist machine. Textiles: the sewing machine is staff-inducted; a needle on the floor still goes in the accident book.',
    ['The sewing machine in textiles is staff-inducted; a needle on the floor still goes in the accident book.', 'A sewing-machine foot is not a toy; running it without fabric still snaps the needle.'],
    'a sewing machine. Contrast: a hand needle / an overlocker. Textiles. Countable machines. Mix-up: sewing is the craft; the machine is the powered stitcher.',
    []
  ),
  'shopping-bag': L(
    'A shopping bag (id: shopping-bag) is a bag for carrying shopping, often reusable cloth or strong plastic. A rucksack is for school; a trolley is on wheels. Trips: a shopping bag on the high street is fine; a rucksack still goes under the coach seat.',
    ['A shopping bag on the high-street trip is fine; a rucksack still goes under the coach seat.', 'A shopping-bag for life from the supermarket is not a PE bag; kit still goes in the named sports holdall.'],
    'a shopping bag. Contrast: a rucksack / a trolley. High street / trips. Countable bags. Mix-up: shopping is the activity or the goods; the bag is the carrier.',
    []
  ),
  'shower-gel': L(
    'Shower gel (id: shower-gel) is liquid soap used in the shower (often uncountable). A soap bar sits in a dish; bubble bath is for a tub. PE: shower gel in the changing room is fine; sharing a bottle is still an infection-control fail.',
    ['Shower gel in the PE changing room is fine; sharing a bottle is still an infection-control fail.', 'Shower-gel on the boarding rota is named; squeezing a housemate’s bottle empty is still theft.'],
    'shower gel (often uncountable). Contrast: a soap bar / bubble bath. PE / boarding. Mix-up: a gel in science can mean a thick colloid; shower gel is the wash product.',
    []
  ),
  'sick-note': L(
    'A sick note (id: sick-note) is a note from a doctor or parent explaining absence through illness (UK). An absence email may be extra; a prescription is for medicine. Attendance: a sick note still goes to the office; a text from a friend is not authorised absence.',
    ['A sick note still goes to attendance; a text from a friend is not authorised absence.', 'A sick-note for PE still needs the date; feeling tired is not a blanket excuse for the term.'],
    'a sick note (UK). Contrast: an absence email / a prescription. Attendance / PE. Countable notes. Mix-up: sick can mean ill or vomit; a sick note is the absence letter. Close: a fit note (GP).',
    []
  ),
  'soap-dish': L(
    'A soap dish (id: soap-dish) is a small dish that holds a bar of soap. A soap bar is the soap; a sponge is for washing. Halls: a soap dish still needs draining; a wet bar on the carpet is a mould report.',
    ['A soap dish in halls still needs draining; a wet bar on the carpet is a mould report.', 'A soap dish in the PE showers is not a shared sponge tray; bars still go in a named bag.'],
    'a soap dish. Contrast: a soap bar / a sponge. Halls / PE. Countable dishes. Mix-up: a dish can mean a meal or a bowl; a soap dish is the soap holder.',
    []
  ),
  'spice-rack': L(
    'A spice rack (id: spice-rack) is a small shelf or stand that holds jars of spices. A cupboard stores more food; a herb garden is plants. Food tech: the spice rack is labelled; a mystery jar is not a substitute for the recipe card.',
    ['The spice rack in food tech is labelled; a mystery jar is not a substitute for the recipe card.', 'A spice-rack chilli still needs the allergen note; a pinch from a mate’s jar is not the recipe.'],
    'a spice rack. Contrast: a cupboard / a herb garden. Food tech. Countable racks. Mix-up: spice is the seasoning; the rack is the stand, not a spice itself.',
    []
  ),
  stepladder: L(
    'A stepladder is a short folding ladder with flat steps and a top platform. A ladder is often longer and leans; a stool is for sitting. Drama: a stepladder is staff-only; standing on a chair is still a fall in the accident book.',
    ['A stepladder in drama is staff-only; standing on a chair is still a fall in the accident book.', 'A stepladder in the store still needs two feet on the floor; the top platform is not a seat for a dare.'],
    'a stepladder. Contrast: a ladder / a stool. Drama / site. Countable ladders. Mix-up: a step is one stair; a stepladder is the whole folding set.',
    []
  ),
  'sticky-tape': L(
    'Sticky tape (id: sticky-tape) is adhesive tape for sticking paper or light objects (often uncountable). Sellotape is a common UK brand used generally; glue is wet. Halls: sticky tape is for the poster; blu-tack is the inventory rule for walls.',
    ['Sticky tape is for the poster; blu-tack is the inventory rule for halls walls.', 'Sticky-tape on a display still needs scissors; tearing it with teeth in class is not the method.'],
    'sticky tape (often uncountable). Close: sellotape. Contrast: glue / blu-tack. Displays / halls. Mix-up: sticky means adhesive; the tape is the roll, not a video tape.',
    ['sellotape']
  ),
  stopwatch: L(
    'A stopwatch is a watch that you start and stop to measure a short time exactly. A wristwatch tells the time of day; a timer may be on a phone or oven. PE: a stopwatch is timing kit; a phone in the exam hall is not a timer.',
    ['A stopwatch is PE timing kit; a phone in the exam hall is not a timer.', 'A stopwatch in science still needs the practical sheet; starting it late is not a repeat without the teacher.'],
    'a stopwatch. Contrast: a wristwatch / a phone timer. PE / science / exams. Countable watches. Mix-up: to stop is the verb; a stopwatch is the timing watch.',
    []
  ),
  'sun-lounger': L(
    'A sun lounger (id: sun-lounger) is a long outdoor chair for lying in the sun (UK). A deckchair is a folding canvas seat; a bunk is a bed. Residential: a sun lounger is not a bunk; lights-out still means the dorm.',
    ['A sun lounger on the residential is not a bunk; lights-out still means the dorm.', 'A sun-lounger by the pool still needs the lifeguard’s zone; diving from it is a ban.'],
    'a sun lounger (UK). Contrast: a deckchair / a bunk. Residential / pool. Countable chairs. Mix-up: to lounge is to relax; a sun lounger is the long chair, not a living-room sofa.',
    []
  ),
  'swimming-goggles': L(
    'Swimming goggles (id: swimming-goggles) are close-fitting glasses that keep water out of the eyes when you swim (usually plural). Ordinary glasses are for seeing; a snorkel mask covers more of the face. Pool: swimming goggles are kit; ordinary glasses are not allowed in the deep end.',
    ['Swimming goggles are pool kit; ordinary glasses are not allowed in the deep end.', 'Swimming-goggles anti-fog still needs a named pair; sharing them is an infection-control fail.'],
    'swimming goggles (usually plural). Contrast: glasses / a mask. PE / pool. Mix-up: goggles can also mean safety goggles in DT; swimming goggles are the pool pair.',
    []
  ),
  'tea-towel': L(
    'A tea towel (id: tea-towel) is a cloth for drying washed dishes, glasses, and cutlery (UK). A bath towel is for people; kitchen roll is paper. Food tech: a tea towel dries the kit; a bath towel is not for the plates.',
    ['A tea towel dries the food-tech kit; a bath towel is not for the plates.', 'A tea towel is not an oven glove; grabbing a hot tin with one is a burn in the accident book.'],
    'a tea towel (UK). Contrast: a bath towel / kitchen roll. Food tech. Countable cloths. Mix-up: tea is the drink; a tea towel dries dishes, and is not only for teapots. US: a dish towel.',
    []
  ),
  'tennis-racket': L(
    'A tennis racket (id: tennis-racket) is a bat with strings, used for hitting a tennis ball (UK; also a racquet). A rounders bat is solid wood; a squash racket is smaller. PE: a tennis racket is kit; a rounders bat is not the same booking.',
    ['A tennis racket is PE kit; a rounders bat is not the same booking.', 'A tennis-racket cover still goes in the PE store; swinging one in the corridor is a trip hazard.'],
    'a tennis racket (UK). Also: a racquet. Contrast: a rounders bat / a squash racket. PE. Countable rackets. Mix-up: a racket can also mean a loud noise or a dishonest scheme.',
    ['racquet']
  ),
  'tin-foil': L(
    'Tin foil (id: tin-foil) is thin metal sheet for wrapping or covering food (UK, often uncountable; also foil; US aluminum foil). Cling film is plastic; greaseproof paper is for baking. Food tech: cover the tray in tin foil; cling film melts in a hot oven.',
    ['Cover the food-tech tray in tin foil; cling film melts in a hot oven.', 'Tin foil in the microwave is a spark risk; the sheet still says ceramic or glass only.'],
    'tin foil (UK, often uncountable). Close: foil. US: aluminum foil. Contrast: cling film / greaseproof paper. Food tech. Mix-up: a tin is a metal can; tin foil is the sheet wrap, usually aluminium.',
    ['foil']
  ),
  'tissue-box': L(
    'A tissue box (id: tissue-box) is a box of soft paper tissues for blowing your nose. Toilet roll is for the loo; a handkerchief is cloth. Nurse: the tissue box is single-use; sharing a tissue is an infection-control fail.',
    ['The tissue box in the nurse’s room is single-use; sharing a tissue is an infection-control fail.', 'A tissue box on the exam desk is allowed if the invigilator agrees; a phone in the box is still malpractice.'],
    'a tissue box. Contrast: toilet roll / a handkerchief. NHS / exams. Countable boxes. Mix-up: tissue can mean body tissue in science; a tissue box holds paper tissues.',
    []
  ),
  'toilet-roll': L(
    'A toilet roll (id: toilet-roll) is a roll of toilet paper (UK). Toilet paper is the paper, often uncountable; kitchen roll is for the kitchen. Boarding: a spare toilet roll is kit; wet wipes still block the school drains.',
    ['A spare toilet roll is boarding kit; wet wipes still block the school drains.', 'Toilet-roll in the cubicle is not a streamer for the common room; that still goes in the behaviour log.'],
    'a toilet roll (UK). Contrast: toilet paper (the paper) / kitchen roll. Boarding / site. Countable rolls. Mix-up: a roll can mean bread; a toilet roll is the loo paper.',
    []
  ),
  toolbox: L(
    'A toolbox is a box for storing and carrying tools. A tool is one item; a kit bag is often for sport. DT: the toolbox is counted out and in; a missing screwdriver still goes in the behaviour log.',
    ['The DT toolbox is counted out and in; a missing screwdriver still goes in the behaviour log.', 'A toolbox in drama is still staff-issued; taking a hammer for a prop without a risk assessment is a fail.'],
    'a toolbox. Contrast: a tool / a kit bag. DT / drama. Countable boxes. Mix-up: a box can mean a carton; a toolbox is the tool store. Extra: a toolbox talk is a short safety briefing at work.',
    []
  ),
  'towel-rail': L(
    'A towel rail (id: towel-rail) is a rail on a wall for hanging towels, sometimes heated. A hook holds one loop; a radiator is for room heat, not wet kit. Halls: hang the towel on the towel rail; a wet heap on the radiator is a fire risk.',
    ['Hang the towel on the towel rail; a wet heap on the halls radiator is a fire risk.', 'A heated towel rail still needs the landlord’s OK in halls; wiring one in is a tenancy and fire-safety fail.'],
    'a towel rail. Contrast: a hook / a radiator. Halls / bathrooms. Countable rails. Mix-up: a rail can mean a train rail; a towel rail is the bathroom bar.',
    []
  ),
  'toy-box': L(
    'A toy box (id: toy-box) is a box for storing children’s toys. A locker is for school bags; a treasure chest is play language. Nursery: put the toys in the toy box; a trip hazard on the placement still goes in the accident book.',
    ['Put the nursery toys in the toy box; a trip hazard on the placement still goes in the accident book.', 'A toy-box lid still needs to close softly; slamming it on fingers is a first-aid report.'],
    'a toy box. Contrast: a locker / a crate. Nursery / placements. Countable boxes. Mix-up: a toy is the plaything; the box is the store, not a toy itself unless it is a play chest.',
    []
  ),
}
