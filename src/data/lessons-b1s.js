const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1S = {
  diesel: L(
    'Diesel is a heavy fuel used in some cars, buses, and trains. Petrol is a different fuel; putting the wrong one in wrecks the engine. A diesel can also mean a diesel car. Minibuses: diesel only goes in a diesel engine; petrol in the school minibus still wrecks it.',
    ['Put diesel only in a diesel engine; petrol in the school minibus still wrecks it.', 'The college minibus is diesel; the petrol-station pump marked unleaded is the wrong nozzle.'],
    'diesel (often uncountable fuel). Extra: a diesel = a diesel vehicle. Contrast: petrol. Minibuses / pumps. Mix-up: a nozzle colour is not a guess — read the label.',
    []
  ),
  doorbell: L(
    'A doorbell is a button by a door that rings to tell people you are there. A knocker is metal you hit; an intercom is a speaker. Clinics: ring the GP doorbell and wait; walking straight onto the ward is not allowed.',
    ['Ring the GP doorbell and wait; walking straight onto the ward is not allowed.', 'The college doorbell at reception is not a fire alarm; staff still sign visitors in.'],
    'a doorbell. Contrast: a knocker / an intercom. GP / reception. Countable buttons. Mix-up: a bell in school can also mean the lesson change.',
    []
  ),
  doormat: L(
    'A doormat is a mat by a door for wiping mud off your shoes. A rug is decorative inside; a welcome mat is a close twin. PE: wipe your feet on the doormat; muddy trainers still stay off the sports-hall floor. Extra sense: calling someone a doormat means they let others walk over them.',
    ['Wipe your feet on the doormat; muddy PE trainers still stay off the sports-hall floor.', 'A wet doormat at halls still needs a report to the caretaker; a towel on the tiles is a slip risk.'],
    'a doormat. Contrast: a rug. PE / halls. Countable mats. Extra: a doormat (person) = someone too meek. Mix-up: a mat in PE is for gymnastics, not shoes.',
    []
  ),
  'dressing-gown': L(
    'A dressing gown (id: dressing-gown) is a loose coat worn over night clothes at home (UK). A bathrobe is a close twin after a shower; a coat is outdoor clothing. Boarding: a dressing gown is nightwear; it is not a coat for the dining hall.',
    ['A dressing gown is boarding nightwear; it is not a coat for the dining hall.', 'Dressing gowns have a named hook in the dorm; a hoodie is not a substitute at lights-out.'],
    'a dressing gown (UK). Close: a bathrobe. Contrast: a coat. Boarding / dorms. Countable. Mix-up: dressing is also food on salad, or getting dressed.',
    ['bathrobe']
  ),
  driveway: L(
    'A driveway is a short private road from the street to a house, used by cars. A pavement is for walking (UK); the road is public. School run: do not park across a driveway; use the marked drop-off.',
    ['Do not park across a driveway on the walk in; use the marked drop-off.', 'A blocked driveway is still a neighbour complaint; the zigzag lines by the gates are not extra parking.'],
    'a driveway. Contrast: a pavement / a road / a drop-off. School run. Countable. Mix-up: a drive can also mean a journey in a car.',
    []
  ),
  fishmonger: L(
    'A fishmonger is a person or shop that sells fish, especially on a UK high street. A butcher sells meat; a greengrocer sells fruit and vegetables. Packed lunches: the fishmonger is not the canteen; fish still needs the allergen card.',
    ['The fishmonger is not the canteen; packed-lunch fish still needs the allergen card.', 'A fishmonger’s ice counter is not a science trip fridge; fieldwork fish still need the teacher’s plan.'],
    'a fishmonger (person or shop). Contrast: a butcher / a greengrocer. High street / allergens. Countable. Mix-up: fish and chips is the meal; the fishmonger is the shop.',
    []
  ),
  newsagent: L(
    'A newsagent is a shop that sells newspapers, magazines, sweets, and often tickets (UK). A post office handles mail; a supermarket is larger. Gates: the newsagent is not the school shop; phones still stay in bags on site.',
    ['The newsagent by the gates is not the school shop; phones still stay in bags on site.', 'A newsagent can sell bus tickets; it is not the college enrolment desk.'],
    'a newsagent (UK shop). Contrast: a post office / a supermarket. High street / gates. Countable shops. Mix-up: an agent in business is a representative, not a paper shop.',
    []
  ),
  pushchair: L(
    'A pushchair is a folding chair on wheels for a baby or toddler (UK; also a buggy; US stroller). A pram is usually flatter for a newborn lying down; a wheelchair is for someone who cannot walk far. Clinics: fold the pushchair in the waiting room; it is not allowed in the treatment cubicle.',
    ['Fold the pushchair in the clinic waiting room; it is not allowed in the treatment cubicle.', 'A pushchair on the nursery placement still needs the named harness done up; a shopping trolley is not a seat.'],
    'a pushchair (UK). Close: a buggy. US: a stroller. Contrast: a pram / a wheelchair. NHS / nursery. Countable. Mix-up: to push is the verb; the chair is a pushchair.',
    ['buggy']
  ),
  satchel: L(
    'A satchel is a school bag with a flap and a strap, often worn over the shoulder. A rucksack is worn on the back; a briefcase is more office than school. Exams: a satchel still goes in the cloakroom; it is not a laptop case at the desk.',
    ['A satchel still goes in the cloakroom; it is not a laptop case for the exam hall.', 'A leather satchel on mufti day is still a bag for the peg; valuables go in a locker.'],
    'a satchel. Contrast: a rucksack / a briefcase. School / exams. Countable bags. Mix-up: a sack is a large rough bag, not a school satchel.',
    []
  ),
  corkscrew: L(
    'A corkscrew is a tool with a spiral for pulling corks out of bottles. A bottle opener takes metal caps off; a tin opener is for tins. Licensed events: a corkscrew stays behind the bar; pupils do not collect drinks.',
    ['A corkscrew stays behind the licensed bar; pupils do not collect drinks.', 'A corkscrew on a staff cheese-and-wine evening is not kit for the Duke of Edinburgh stove.'],
    'a corkscrew. Contrast: a bottle opener / a tin opener. Licensing / staff events. Countable tools. Mix-up: a cork is the stopper; the tool is a corkscrew. Extra: corkscrew hair = very curly.',
    []
  ),
  'corner-shop': L(
    'A corner shop (id: corner-shop) is a small local shop, often on a street corner, selling everyday goods (UK). A supermarket is larger; a newsagent specialises in papers. Meals: the corner shop is not the free-school-meal till; use the canteen account.',
    ['The corner shop is not the free-school-meal till; use the canteen account.', 'Corner-shop milk after late club is fine; energy drinks still fail the school ban.'],
    'a corner shop (UK). Contrast: a supermarket / a newsagent. High street / canteen. Countable shops. Mix-up: a corner in football is a set piece, not a shop.',
    []
  ),
  cot: L(
    'A cot is a small bed with high sides for a baby (UK; US crib). A bed is for older children; a camp bed is a folding spare. NHS: the hospital cot is for the infant; a parent does not sleep in it overnight.',
    ['The hospital cot is for the infant; a parent does not sleep in it overnight.', 'A travel cot on the family room booking is extra; the ward chair is not a bed for siblings.'],
    'a cot (UK baby bed). US: a crib. Contrast: a bed / a camp bed. NHS / family rooms. Countable. Mix-up: a cot in some older UK use can also mean a narrow camp bed for an adult.',
    []
  ),
  'cotton-wool': L(
    'Cotton wool (id: cotton-wool) is soft, fluffy cotton used for cleaning skin or packing (UK, often uncountable; US cotton balls). Cotton is also cloth; wool is from sheep. First aid: cotton wool is for wounds; it is not for the science practical unless the sheet says so.',
    ['Cotton wool in the first-aid kit is for wounds; it is not for the science practical.', 'Cotton-wool pads in the nurse’s room are single-use; sharing one is an infection-control fail.'],
    'cotton wool (UK, often uncountable). US: cotton balls. Contrast: cotton cloth / wool. First aid / NHS. Mix-up: wool is from sheep; cotton wool is fluffy cotton.',
    []
  ),
  crutch: L(
    'A crutch is a support you put under your arm to help you walk with an injured leg. A walking stick is held in the hand; a wheelchair is for sitting. Corridors: a crutch still needs a lift pass; the stairs are not a shortcut.',
    ['A crutch on the corridor still needs a lift pass; the stairs are not a shortcut.', 'A spare crutch from the nurse is signed out; PE is adapted, not skipped without a note.'],
    'a crutch; a pair of crutches. Contrast: a walking stick / a wheelchair. Nurse / lifts. Countable. Mix-up: to crutch is not a common verb; the noun is the aid. Extra: a crutch can mean something you depend on too much.',
    []
  ),
  cuff: L(
    'A cuff is the end of a sleeve around the wrist; it can also be a fold at the bottom of trousers. A sleeve is the whole arm of the garment; handcuffs are police restraints. Uniform: shirt cuffs stay buttoned for the inspection; rolling them up is not allowed.',
    ['Shirt cuffs stay buttoned for the inspection; rolling them up is not uniform.', 'Cufflinks for the concert are kit; a rubber band round the cuff is not formal dress.'],
    'a cuff; cuffs. Contrast: a sleeve. Extra: trouser cuffs; handcuffs (police). Uniform / concerts. Countable. Mix-up: to cuff someone can mean to hit or to put in handcuffs.',
    []
  ),
  'cycle-lane': L(
    'A cycle lane (id: cycle-lane) is a part of the road marked for bicycles (UK). A pavement is for walking; a bus lane is for buses. School run: use the cycle lane; the pavement is not for bikes.',
    ['Use the cycle lane on the way in; the pavement is for walking, not for bikes.', 'A cycle-lane camera still fines pavement riding; a scooter is not a bike in that marking.'],
    'a cycle lane (UK). Contrast: a pavement / a bus lane. School run / cameras. Countable lanes. Mix-up: a lane in swimming is in the pool, not on the road.',
    []
  ),
  darts: L(
    'Darts is a game of throwing small pointed missiles at a circular board (often plural). An arrow is for a bow; to dart is to move quickly. Common rooms: darts are a pub game; they are not allowed without staff.',
    ['Darts are a pub game; they are not allowed in the common room without staff.', 'A darts evening for parents is licensed; pupils do not throw in the hall at lunch.'],
    'darts (the game, often plural). Contrast: an arrow / a bow. Extra: to dart = to move quickly. Staff / pubs. Mix-up: a dart in sewing is a fold in cloth.',
    []
  ),
  deckchair: L(
    'A deckchair is a folding canvas chair used outdoors, especially at the seaside. An armchair is indoor and padded; a bench is shared and usually wooden. Sports day: a deckchair is for first-aid staff; pupils sit on the marked grass.',
    ['A deckchair on sports day is for first-aid staff; pupils sit on the marked grass.', 'Hire a deckchair on the geography field trip to the pier; classroom chairs do not leave the coach.'],
    'a deckchair. Contrast: an armchair / a bench. Seaside / sports day. Countable chairs. Mix-up: a deck is also a pack of cards or the floor of a ship.',
    []
  ),
  denim: L(
    'Denim is strong cotton cloth used especially for jeans (often uncountable). Jeans are the garment; school trousers are usually not denim. Uniform: denim is not allowed; black school trousers are still required on a non-mufti day.',
    ['Denim is not uniform; black school trousers are still required on a non-mufti day.', 'A denim jacket on mufti day is fine; a ripped pair still fails if the handbook bans tears.'],
    'denim (often uncountable cloth). Contrast: jeans (the garment) / uniform trousers. School / mufti. Mix-up: denim is the cloth; jeans are the trousers made from it.',
    []
  ),
  deodorant: L(
    'Deodorant is a product that reduces body smell, often a spray, stick, or roll-on. Antiperspirant also reduces sweat; perfume is a scent, not a sweat product. PE: use deodorant after sport; aerosol sprays are banned in the changing rooms.',
    ['Use deodorant after PE; aerosol sprays are banned in the changing rooms.', 'A roll-on deodorant is allowed in the PE bag; sharing a spray is an asthma risk in a small room.'],
    'deodorant (often uncountable). Contrast: antiperspirant / perfume. PE / changing rooms. Mix-up: odour is the smell; deodorant is the product.',
    []
  ),
  'department-store': L(
    'A department store (id: department-store) is a large shop divided into sections that sell many kinds of goods. A shopping centre is a group of shops; a supermarket is mainly food. Uniform: the department-store counter is not the school shop; check the handbook list first.',
    ['The department-store uniform counter is not the school shop; check the handbook list first.', 'A department-store receipt is still needed for a refund; the college ID is not a loyalty card.'],
    'a department store. Contrast: a shopping centre / a supermarket. High street / uniform. Countable stores. Mix-up: a department in school is a subject team, not a shop.',
    []
  ),
  dialling: L(
    'Dialling is the act of calling a telephone number (UK spelling; US dialing). A dialling code is the area code; ringing is the sound. Emergencies: dialling 999 is for emergencies; the attendance line is for absence.',
    ['Dialling 999 is for emergencies; the attendance line is for absence.', 'The UK dialling code for the college still needs the 0; a mobile number is not an extension.'],
    'dialling (UK spelling, often uncountable as the act). Close: a dialling code. Contrast: ringing. NHS / attendance. Mix-up: a dial can also be a control on a radio or cooker.',
    []
  ),
  dimmer: L(
    'A dimmer is a control that makes lights brighter or darker (also a dimmer switch). An ordinary switch is only on or off; a fuse protects the circuit. Drama: the dimmer is staff-only; pupils do not reset the rig.',
    ['The dimmer in the drama studio is staff-only; pupils do not reset the rig.', 'A dimmer in halls is not a disco; after quiet hours the light still stays low, not off in a shared kitchen.'],
    'a dimmer; a dimmer switch. Contrast: a (on/off) switch / a fuse. Drama / halls. Countable controls. Mix-up: dim is the adjective (not bright); a dimmer is the device.',
    []
  ),
  'dining-room': L(
    'A dining room (id: dining-room) is a room in a house or boarding house where people eat meals. A canteen is a school or workplace dining space; a living room is for sitting. Boarding: the dining room is not a homework space; bags stay on the pegs.',
    ['The boarding dining room is not a homework space; bags stay on the pegs.', 'Dining-room duty still means clearing plates; a packed lunch does not skip the rota.'],
    'a dining room. Contrast: a canteen / a living room. Boarding / meals. Countable rooms. Mix-up: dinner in UK schools can mean the midday meal.',
    []
  ),
  'dinner-lady': L(
    'A dinner lady (id: dinner-lady) is a woman who serves school meals or supervises at lunchtime (UK). A cook prepares the food; a form tutor is a teacher. Lunch: a dinner lady can send you to the back of the queue; she is not your form tutor.',
    ['A dinner lady can send you to the back of the queue; she is not your form tutor.', 'Dinner-lady instructions in the hall still count as staff; arguing is a behaviour log.'],
    'a dinner lady (UK). Contrast: a cook / a teacher. School lunch. Countable jobs. Mix-up: dinner at school often means lunch; a lady is the woman, not the meal.',
    []
  ),
  diy: L(
    'DIY (id: diy) is making or repairing things yourself instead of paying a worker (UK, often uncountable; do-it-yourself). A caretaker repairs school buildings; a landlord’s contractor is the tenancy route. Halls: DIY still needs permission; a drill is a fire-safety fail without it.',
    ['DIY in halls still needs the landlord’s permission; a drill is a fire-safety fail without it.', 'A DIY shelf that damages the plaster still comes off the deposit; blu-tack is the inventory rule.'],
    'DIY (UK, often uncountable). Contrast: a caretaker / a paid repair. Halls / tenancy. Mix-up: to do it yourself is the idea; DIY is the usual label on shops and kits.',
    []
  ),
  'double-glazing': L(
    'Double glazing (id: double-glazing) is windows with two layers of glass to keep heat in and noise out (UK, often uncountable). Curtains block light; a single pane is older glass. Labs: double glazing is not an excuse to skip ventilation; open the sash if the practical needs it.',
    ['Double glazing in halls is not an excuse to skip lab ventilation; open the sash if the practical needs it.', 'A double-glazing leak still goes to the landlord; tape on the frame is not a repair.'],
    'double glazing (UK, often uncountable). Contrast: curtains / single glass. Halls / labs. Mix-up: glazing is the glass work; double glazing is the two-layer system.',
    []
  ),
  'drawing-pin': L(
    'A drawing pin (id: drawing-pin) is a short pin with a flat round head, used to fix paper to a board (UK; US thumbtack). A staple goes through with a stapler; a paperclip holds without piercing. Exams: drawing pins stay in the display-board tin; they are not on desks.',
    ['Drawing pins stay in the display-board tin; they are not on exam desks.', 'A drawing pin on the floor still goes in the accident book if someone treads on it.'],
    'a drawing pin (UK). US: a thumbtack. Contrast: a staple / a paperclip. Displays / exams. Countable pins. Mix-up: a pin in sewing is longer and has no big flat head.',
    []
  ),
  'drop-off': L(
    'A drop-off (id: drop-off) is a place or act of leaving someone or something, especially from a car. A pick-up is collecting someone; a car park is for leaving the vehicle. Gates: use the marked drop-off; stopping on the zigzag lines is a fine.',
    ['Use the marked drop-off; stopping on the zigzag lines is a fine.', 'A parcel drop-off at the student hub is not the same as a parent drop-off on the yellow lines.'],
    'a drop-off (place or act). Contrast: a pick-up / a car park. School run / parcels. Countable. Mix-up: to drop off can also mean to fall asleep.',
    []
  ),
  'egg-cup': L(
    'An egg cup (id: egg-cup) is a small cup that holds a boiled egg while you eat it. A cup is for drinks; an egg box stores raw eggs. Food tech: an egg cup is not a science beaker; wash it with the breakfast kit.',
    ['An egg cup in food tech is not a science beaker; wash it with the breakfast kit.', 'Egg cups on the boarding breakfast trolley are counted; a mug is not a stand for a boiled egg.'],
    'an egg cup. Contrast: a cup / an egg box. Food tech / boarding. Countable. Mix-up: a cup of egg in a recipe is a measure of beaten egg, not the little stand.',
    []
  ),
  'en-suite': L(
    'An en suite (id: en-suite) is a bathroom joined to a bedroom and used only with that room. A shared bathroom is down the corridor; a wet room is a walk-in shower space. Hotels: an en-suite is not a spare changing room for the whole group; staff still allocate showers.',
    ['An en-suite in the hotel is not a spare changing room for the whole group; staff still allocate showers.', 'An en-suite in halls is still cleaned on the rota; wet towels on the carpet are a mould report.'],
    'an en suite (noun). Also adjective: an en-suite bathroom. Contrast: a shared bathroom / a wet room. Hotels / halls. Countable. Mix-up: on site means at the place, not a private bathroom.',
    []
  ),
  'estate-agent': L(
    'An estate agent (id: estate-agent) sells or rents houses and flats (UK; US realtor). A landlord owns the property; a solicitor does the legal work. College: the estate agent’s inventory is not the halls list; report damp to the landlord’s portal.',
    ['The estate agent’s inventory is not the college halls list; report damp to the landlord’s portal.', 'An estate-agent viewing still needs an appointment; a student lanyard is not a key.'],
    'an estate agent (UK). US: a realtor. Contrast: a landlord / a solicitor. Renting / halls. Countable. Mix-up: an estate can also mean a housing estate or a large piece of land.',
    []
  ),
  'exercise-book': L(
    'An exercise book (id: exercise-book) is a book of lined or squared paper for schoolwork (UK). A textbook is printed to study from; an exam paper is the script they mark in the hall. Homework: write the title in the exercise book; scrap paper is not what they mark.',
    ['Write the title in the exercise book; scrap paper is not the homework they mark.', 'An exercise book stays in the subject tray; a sketchbook is art, not the English draft.'],
    'an exercise book (UK). Contrast: a textbook / an exam paper. Classwork / homework. Countable. Mix-up: exercise can also mean PE; the book is for writing, not for sit-ups.',
    []
  ),
  'eye-shadow': L(
    'Eye shadow (id: eye-shadow) is coloured powder or cream put on the eyelids as make-up (often uncountable). Eyeliner is a line; mascara is for lashes. Uniform: eye shadow fails the inspection; make-up is for after school.',
    ['Eye shadow fails the uniform inspection; make-up is for after school.', 'Eye-shadow palettes stay in the drama make-up kit; they are not for the exam hall.'],
    'eye shadow (often uncountable). Contrast: eyeliner / mascara. Uniform / drama. Mix-up: a shadow in English is shade from light, not the make-up.',
    []
  ),
  eyeliner: L(
    'Eyeliner is make-up drawn in a line along the edge of the eyelids. Eye shadow colours the lid; mascara is for lashes. PE: eyeliner comes off before sport; it is not allowed in the pool.',
    ['Eyeliner comes off before PE; it is not allowed in the pool.', 'Eyeliner in the concert is costume; a sharpener still stays in the make-up bag, not on the exam desk.'],
    'eyeliner (often uncountable). Contrast: eye shadow / mascara. PE / pool / costume. Mix-up: a liner in other compounds can mean a lining or a ship; eyeliner is make-up.',
    []
  ),
  'fast-food': L(
    'Fast food (id: fast-food) is hot food prepared and served quickly, often from a chain (often uncountable). A takeaway may be slower and local; the canteen is the school meal. High street: fast food is not a free-school-meal; use the canteen till.',
    ['Fast food on the high street is not a free-school-meal; use the canteen till.', 'A fast-food voucher on a trip still needs the teacher’s say-so; leaving the group is a safeguarding fail.'],
    'fast food (often uncountable). Contrast: a takeaway / the canteen. High street / trips. Mix-up: fast means quick; the food is the meal, not a speed limit.',
    []
  ),
  'fish-and-chips': L(
    'Fish and chips (id: fish-and-chips) is fried fish served with chips, a traditional UK takeaway meal. A chip shop sells it; fast food is the wider idea. Allergens: Friday fish and chips is a treat; it is not the gluten-free default — check the board.',
    ['Fish and chips on Friday is a treat; it is not the gluten-free default — check the allergen board.', 'Fish-and-chips on the trip is a sit-down meal only if the EVOLVE form says so; eating on the coach is still banned.'],
    'fish and chips (UK meal, often singular). Contrast: a chip shop / fast food. Allergens / trips. Mix-up: chips are thick fried potatoes (UK); US chips are crisps.',
    []
  ),
  'fitting-room': L(
    'A fitting room (id: fitting-room) is a small room in a shop where you try on clothes. A changing room is for PE or swimming; a cloakroom is for coats. Uniform shop: the fitting room is not the PE changing room; phones stay in bags.',
    ['The fitting room in the uniform shop is not the PE changing room; phones stay in bags.', 'A fitting-room limit of two garments still applies; leaving tags on is not a theft-prevention fail if you follow the shop rule.'],
    'a fitting room. Contrast: a changing room / a cloakroom. Uniform shops. Countable rooms. Mix-up: to fit can mean the right size; the room is where you try clothes on.',
    []
  ),
  'fizzy-drink': L(
    'A fizzy drink (id: fizzy-drink) is a drink with bubbles of gas, such as cola or lemonade (UK; US soda). Squash is concentrated fruit drink with water; water is still; juice may be still or sparkling. Sports day: a fizzy drink is not allowed on the field; water in a named bottle is.',
    ['A fizzy drink is not allowed on the sports-day field; water in a named bottle is.', 'Fizzy drinks in the vending machine still fail the packed-lunch sugar rule if the handbook bans them.'],
    'a fizzy drink (UK). US: soda. Contrast: squash / water. Sports / packed lunches. Countable cans or bottles. Mix-up: fizzy describes the bubbles; the drink is the noun.',
    []
  ),
  'food-processor': L(
    'A food processor (id: food-processor) is an electric machine that chops, slices, or mixes food. A blender is mainly for liquids; a mixer is often for cakes. Food tech: the food processor is staff-supervised; a knife is still required for the skills check.',
    ['The food processor in food tech is staff-supervised; a knife is still required for the skills check.', 'A food-processor blade is washed separately; it still goes in the accident book if it is left in the sink.'],
    'a food processor. Contrast: a blender / a mixer. Food tech. Countable machines. Mix-up: to process food in a factory is industrial; this is the kitchen machine.',
    []
  ),
  'full-stop': L(
    'A full stop (id: full-stop) is the dot at the end of a sentence (UK; US period). A comma pauses inside a sentence; a question mark ends a question. Literacy: a full stop ends the sentence; a comma is not enough in the mark scheme.',
    ['A full stop ends the sentence; a comma is not enough in the literacy mark scheme.', 'Full-stop errors on the mock still lose SPaG marks; an ellipsis is not a substitute in formal writing.'],
    'a full stop (UK). US: a period. Contrast: a comma / a question mark. Literacy / SPaG. Countable marks. Mix-up: to come to a full stop can also mean to halt completely.',
    []
  ),
  'ground-floor': L(
    'The ground floor (id: ground-floor) is the floor of a building at street level (UK). In US English that floor is often called the first floor; in the UK the first floor is the one above. Fire: the ground-floor assembly point is the playground; the lift is not for drills.',
    ['The ground-floor assembly point is the playground; the lift is not for fire drills.', 'Ground-floor rooms in halls are still not a party space; quiet hours apply on every floor.'],
    'the ground floor (UK). US: often the first floor. Contrast: the first floor (UK = one up). Fire / halls. Mix-up: ground is also earth or a reason (grounds for).',
    []
  ),
  handbrake: L(
    'A handbrake is a brake in a car that you pull on to keep the vehicle still (UK; also a parking brake; US emergency brake). The foot brake slows you while moving; gears do not hold the car on a hill by themselves. Drop-off: put the handbrake on in the lay-by; a running engine is not a parked stop.',
    ['Put the handbrake on in the lay-by; a running engine is not a parked drop-off.', 'A driving-lesson handbrake start is still the examiner’s test; rolling back is a fail.'],
    'a handbrake (UK). Close: a parking brake. Contrast: a foot brake. Driving / drop-off. Countable. Mix-up: a brake is the system; the handbrake is the parking control.',
    []
  ),
  headlights: L(
    'Headlights are the main lights at the front of a car, bus, or bike (usually plural). Sidelights are weaker; fog lights are for very poor visibility. Winter: switch the headlights on for the November run; sidelights are not enough in fog.',
    ['Switch the headlights on for the November run; sidelights are not enough in fog.', 'A cracked headlight on the minibus still fails the walk-round; tape is not an MOT fix.'],
    'headlights (usually plural); a headlight. Contrast: sidelights / fog lights. Minibus / winter. Mix-up: a headline is newspaper title text, not a lamp.',
    []
  ),
  'high-chair': L(
    'A high chair (id: high-chair) is a tall chair with a tray for a baby or toddler at mealtimes. A stool has no tray; a booster seat sits on an ordinary chair. Nursery: strap the child into the high chair; a sofa is not a feeding seat.',
    ['Strap the child into the high chair on the nursery placement; a sofa is not a feeding seat.', 'A high chair in the cafe is staff-cleaned; wiping it with a sleeve is not hygiene on placement.'],
    'a high chair. Contrast: a stool / a booster seat. Nursery / cafes. Countable. Mix-up: a high chair is for a toddler; a chair that is simply tall is not the same kit.',
    []
  ),
  'hot-dog': L(
    'A hot dog (id: hot-dog) is a sausage in a long bread roll, often with ketchup or mustard. A sausage roll is sausage in pastry; a burger is in a round bun. Fairs: a hot dog still needs the allergen card; a vegetarian option is marked separately.',
    ['A hot dog at the fair still needs the allergen card; a vegetarian option is marked separately.', 'Hot-dog onions on the stall still count as a filling; mustard is not a nut-free guarantee — check the board.'],
    'a hot dog. Contrast: a sausage roll / a burger. Fairs / allergens. Countable. Mix-up: a dog is the animal; a hot dog is the snack. Not a live animal.',
    []
  ),
  'litter-bin': L(
    'A litter bin (id: litter-bin) is a container in a public place for rubbish (UK). A recycle bin is for materials that can be recycled; a skip is a large builder’s container. Site: put wrappers in the litter bin; the recycle bin is for clean paper and bottles.',
    ['Put wrappers in the litter bin; the recycle bin is for clean paper and bottles.', 'A full litter bin still needs a caretaker report; stuffing crisp packets in a hedge is a detention.'],
    'a litter bin (UK). Contrast: a recycle bin / a skip. School site. Countable bins. Mix-up: litter is the rubbish; a bin is the container. Extra: a litter of puppies is a different sense.',
    []
  ),
  'living-room': L(
    'A living room (id: living-room) is the main room in a house for sitting and relaxing (UK; also a sitting room or lounge). A dining room is for meals; a bedroom is for sleeping. Halls: quiet hours in the shared living room start at 11pm; a party speaker is a tenancy breach.',
    ['Quiet hours in the shared living room start at 11pm; a party speaker is a tenancy breach.', 'Living-room furniture on the inventory is not for the balcony; a sofa outdoors still costs the deposit.'],
    'a living room (UK). Close: a sitting room / a lounge. Contrast: a dining room / a bedroom. Halls / tenancy. Countable rooms. Mix-up: living is also the fact of being alive, not the room.',
    ['sitting room']
  ),
  'lorry-driver': L(
    'A lorry driver (id: lorry-driver) drives a large goods vehicle (UK; US truck driver). A bus driver carries passengers; a courier often uses a van. Work experience: a lift in the cab is not a placement; the college still needs a risk assessment.',
    ['Work experience with a lorry driver still needs the college risk assessment; a lift in the cab is not a placement.', 'A lorry-driver talk in careers is not a licence; you still need the proper age and tests.'],
    'a lorry driver (UK). US: a truck driver. Contrast: a bus driver / a courier. Careers / college. Countable jobs. Mix-up: a lorry is the vehicle; the driver is the person.',
    []
  ),
  'mobile-phone': L(
    'A mobile phone (id: mobile-phone) is a portable telephone you can carry (UK; also a mobile; US cell phone). A landline is a home or office phone on a wire; a smartphone is a mobile with internet apps. Lessons: a mobile phone stays in the bag; calling home from class is not allowed.',
    ['A mobile phone stays in the bag in lessons; calling home from class is not allowed.', 'Mobile-phone use in the exam hall is malpractice; even a switched-off phone in a pocket still counts.'],
    'a mobile phone (UK). Close: a mobile. US: a cell phone. Contrast: a landline. Lessons / exams. Countable. Mix-up: mobile can also mean able to move, or a hanging toy.',
    ['mobile']
  ),
  'number-plate': L(
    'A number plate (id: number-plate) is the sign on a vehicle that shows its registration number (UK; US license plate). An MOT is the safety test; insurance is the policy. Trips: the minibus number plate goes on the form; a nickname on a private car is not an ID.',
    ['The minibus number plate goes on the trip form; a nickname on a private car is not an ID.', 'A dirty number plate still fails an ANPR car-park camera; wiping it is not vandalism — hiding it is.'],
    'a number plate (UK). US: a license plate. Contrast: an MOT / insurance. Trips / car parks. Countable plates. Mix-up: a plate in the canteen is for food.',
    []
  ),
  'petrol-station': L(
    'A petrol station (id: petrol-station) sells petrol and diesel for vehicles (UK; also a garage; US gas station). A car park stores cars; a garage can also mean a workshop. Pumps: fill petrol at the pump marked unleaded; diesel in a petrol engine is a recovery call.',
    ['Fill petrol at the petrol station marked unleaded; diesel in a petrol engine is a recovery call.', 'A petrol-station shop is not the college canteen; energy drinks still fail the school ban if you bring them in.'],
    'a petrol station (UK). Close: a garage (fuel). US: a gas station. Contrast: a car park. Driving / minibuses. Countable sites. Mix-up: petrol is the fuel; the station is the place.',
    ['garage']
  ),
  postwoman: L(
    'A postwoman delivers letters and parcels (UK). A postman is the male counterpart; a courier is usually a private parcel firm. Halls: the postwoman leaves parcels at the student hub; a note on the flat door is not a redirect.',
    ['The postwoman leaves parcels at the student hub; a note on the flat door is not a redirect.', 'A postwoman is not the exams officer; special-delivery scripts still go to the school office.'],
    'a postwoman (UK). Contrast: a postman / a courier. Halls / parcels. Countable jobs. Mix-up: the post is the mail, often uncountable; a postwoman is the person.',
    []
  ),
  'recycle-bin': L(
    'A recycle bin (id: recycle-bin) is a bin for paper, plastic, glass, or other materials that can be recycled. A litter bin is general rubbish; a food-waste caddy is for scraps. Site: clean bottles go in the recycle bin; food-stained pizza boxes go in general waste.',
    ['Clean bottles go in the recycle bin; food-stained pizza boxes go in general waste.', 'A recycle bin in halls still needs rinsing; a bag of raw chicken is a contamination fail.'],
    'a recycle bin. Contrast: a litter bin / a food-waste caddy. School / halls. Countable bins. Mix-up: to recycle is the verb; the bin is the container.',
    []
  ),
  rounders: L(
    'Rounders is a UK team game in which you hit a ball and run round bases (often uncountable). Cricket uses wickets and a different bat; baseball is the US cousin with different scoring. PE: rounders is on the rota; baseball rules are not the same scoring.',
    ['Rounders is on the PE rota; baseball rules are not the same scoring.', 'A rounders post is still a post, not a wicket; arguing the cricket rulebook is not PE.'],
    'rounders (UK game, often uncountable). Contrast: cricket / baseball. PE. Mix-up: rounder is not the usual word; the game is rounders. Extra: a rounder is a score in the game.',
    []
  ),
  screwdriver: L(
    'A screwdriver is a tool for turning screws. A hammer hits nails; a spanner turns nuts and bolts (UK). DT: a screwdriver is counted out and in; a missing tool still goes in the behaviour log.',
    ['A screwdriver in DT is counted out and in; a missing tool still goes in the behaviour log.', 'A screwdriver is not a chisel; forcing a lid still goes in the accident book if it slips.'],
    'a screwdriver. Contrast: a hammer / a spanner. DT / caretakers. Countable tools. Mix-up: a screw is the fastener; the driver is the tool. Extra: a screwdriver can also be a vodka-and-orange drink, not school kit.',
    []
  ),
  shoelace: L(
    'A shoelace is a cord used to fasten a shoe. A bootlace is the twin for boots; velcro is a fastener without a lace. PE: tie the shoelace before the cross-country; trailing laces still go in the accident book.',
    ['Tie the shoelace before the cross-country; trailing laces still go in the accident book.', 'A spare shoelace in the PE bag is kit; tape is not a lasting repair for an inspection.'],
    'a shoelace; a pair of shoelaces. Close: a bootlace. Contrast: velcro. PE. Countable laces. Mix-up: a lace can also mean delicate fabric.',
    ['bootlace']
  ),
  sideboard: L(
    'A sideboard is a long, low cupboard for plates and glasses, usually in a dining room. A wardrobe is for clothes; a dresser may have shelves above. Dining hall: the sideboard is for serving dishes; bags are not stored on it.',
    ['The sideboard in the dining hall is for serving dishes; bags are not stored on it.', 'A sideboard on the tenancy inventory is furniture; selling it with the house share is theft.'],
    'a sideboard. Contrast: a wardrobe / a dresser. Dining rooms / tenancy. Countable. Mix-up: a board can be a committee or a piece of wood; a sideboard is the cupboard.',
    []
  ),
  sunbathe: L(
    'To sunbathe is to sit or lie in the sun in order to brown your skin. Sunburn is the injury from too much sun; a tan is the colour. School field: do not sunbathe in lesson time; break is not a beach.',
    ['Do not sunbathe on the school field in lesson time; break is not a beach.', 'Sunbathing on the trip still needs SPF; a towel on the dunes is not a closed beach if the teacher says stay in sight.'],
    'to sunbathe (verb). Contrast: sunburn / a tan. School field / trips. Mix-up: a bath is washing in water; sunbathe is lying in the sun, no water needed.',
    []
  ),
  sunburn: L(
    'Sunburn is red, painful skin caused by too much sun (often uncountable). A suntan is browning without that burn; heatstroke is a more serious illness. Sports day: sunburn still goes to first aid; after-sun is not a substitute for SPF next time.',
    ['Sunburn after sports day still goes to first aid; after-sun is not a substitute for SPF next time.', 'Sunburn on the Duke of Edinburgh walk still needs the first-aider; covering up is the rule, not a midday lie-down.'],
    'sunburn (often uncountable). Contrast: a suntan / heatstroke. First aid / sports day. Mix-up: to burn can be fire or cooking; sunburn is from sunlight.',
    []
  ),
  sweatshirt: L(
    'A sweatshirt is a thick cotton top with long sleeves, often worn for sport. A hoodie has a hood; a jumper is usually knitted; a fleece is brushed fabric. PE: a navy sweatshirt is kit; a hoodie with a logo fails the uniform check.',
    ['A navy sweatshirt is PE kit; a hoodie with a logo fails the uniform check.', 'A sweatshirt in the lost-property bin still needs a name tape; the office is not a shop.'],
    'a sweatshirt. Contrast: a hoodie / a jumper / a fleece. PE / uniform. Countable. Mix-up: sweat is perspiration; a sweatshirt is the garment, not a towel.',
    []
  ),
  grater: L(
    'A grater is a kitchen tool with sharp holes, used to shred cheese or vegetables. A knife cuts in slices; a peeler takes skin off. Food tech: the grater is washed separately; a knife is not a shortcut for the cheese. Mix-up: greater means bigger, with an e.',
    ['The grater in food tech is washed separately; a knife is not a shortcut for the cheese.', 'A box grater still goes in the counted drawer; leaving cheese in the holes is a hygiene fail.'],
    'a grater. Contrast: a knife / a peeler. Food tech. Countable tools. Mix-up: greater (adjective) = bigger; a grater (noun) = the kitchen tool.',
    []
  ),
  sunhat: L(
    'A sunhat is a hat worn to protect the head and face from the sun. A cap has a peak; a beanie is knitted and brimless. Field trips: a sunhat is required; a hoodie is not sun protection.',
    ['A sunhat is required on the field trip; a hoodie is not sun protection.', 'A named sunhat stays in the PE bag in June; the lost-property bin is not a spare SPF hat.'],
    'a sunhat; also a sun hat. Contrast: a cap / a beanie. Trips / sports day. Countable hats. Mix-up: a hat is general; a sunhat is for sun, usually with a brim.',
    []
  ),
  tablecloth: L(
    'A tablecloth is a cloth spread over a table, especially for a meal. A napkin is for your lap or mouth; a place mat is a smaller mat per person. Parents’ evening: put the tablecloth on; a PE bib is not a cover.',
    ['Put the tablecloth on for parents’ evening; a PE bib is not a cover.', 'A stained tablecloth after the bake sale still goes in the hall laundry, not in a pupil’s bag.'],
    'a tablecloth. Contrast: a napkin / a place mat. Hall / parents’ evening. Countable cloths. Mix-up: a cloth can be any fabric; a tablecloth is the one for a table.',
    []
  ),
  teaspoon: L(
    'A teaspoon is a small spoon for tea or coffee; it is also a small measure in recipes and medicine. A tablespoon is larger; a dessert spoon sits between them. NHS: a teaspoon of medicine is the dose on the label; a kitchen tablespoon is not the same.',
    ['A teaspoon of medicine is the NHS dose on the label; a kitchen tablespoon is not the same.', 'A teaspoon in food tech is 5 ml; guessing with a mug is not a recipe measure.'],
    'a teaspoon; also tsp in recipes (about 5 ml). Contrast: a tablespoon / a dessert spoon. NHS / food tech. Countable. Mix-up: tea is the drink; a teaspoon is the small spoon.',
    []
  ),
  thermos: L(
    'A thermos is a container that keeps drinks hot or cold for hours (also a flask; originally a brand name). An ordinary bottle does not insulate as well; a glass bottle may be banned on trips. Kit lists: a thermos is allowed; a glass bottle is not.',
    ['A thermos on the trip is allowed; a glass bottle is not on the kit list.', 'A thermos of soup in the packed lunch is fine; heating it in the science lab is not.'],
    'a thermos; also a flask. Contrast: a (plain) bottle / a glass bottle. Trips / packed lunches. Countable. Mix-up: thermal means to do with heat; a thermos is the flask.',
    ['flask']
  ),
  'tin-opener': L(
    'A tin opener (id: tin-opener) is a tool for opening tins of food (UK; also a can opener). A bottle opener takes caps off; a corkscrew is for wine corks. Food tech: use the tin opener on the bench; a ring-pull key is not a tool for every tin.',
    ['Use the tin opener on the food-tech bench; a ring-pull key is not a tool for every tin.', 'A tin opener is counted with the knives; taking one home in a lunchbox is still theft.'],
    'a tin opener (UK). Close: a can opener. Contrast: a bottle opener / a corkscrew. Food tech. Countable tools. Mix-up: a tin is the can; the opener is the tool.',
    ['can opener']
  ),
  'toilet-paper': L(
    'Toilet paper (id: toilet-paper) is thin paper used in a toilet (often uncountable). A tissue is for noses; a paper towel is for drying hands. Drains: toilet paper goes in the pan; wet wipes block the school drains.',
    ['Toilet paper goes in the pan; wet wipes block the school drains.', 'Toilet-paper shortages still go to the caretaker; taking a whole roll from the cubicle is a behaviour log.'],
    'toilet paper (often uncountable). Contrast: a tissue / a paper towel. Toilets / drains. Mix-up: a toilet is the room or the pan; toilet paper is the roll.',
    []
  ),
  treadmill: L(
    'A treadmill is an exercise machine with a moving belt that you walk or run on. A running track is outdoors or in a hall; an exercise bike is pedals, not a belt. Sports centre: book the treadmill after induction; muddy trainers are not allowed on the belt.',
    ['Book the treadmill after the sports-centre induction; muddy trainers are not allowed on the belt.', 'A treadmill session is not PE unless it is on the register; skipping games for the gym still needs staff.'],
    'a treadmill. Contrast: a running track / an exercise bike. Sports centre. Countable machines. Mix-up: extra: a treadmill can also mean a dull routine of work.',
    []
  ),
  underpass: L(
    'An underpass is a path or road that goes underneath another road or a railway. A bridge goes over; in UK English a subway can also mean a pedestrian underpass (not only an underground train). Late club: use the lit underpass; crossing the dual carriageway is not a shortcut.',
    ['Use the lit underpass after late club; crossing the dual carriageway is not a shortcut.', 'An underpass on the geography trail is still a path; cycling through a pedestrian subway may be banned.'],
    'an underpass. Contrast: a bridge. UK extra: a subway (pedestrian). Walking to school. Countable. Mix-up: US subway often means underground trains; UK underpass is the path under a road.',
    []
  ),
  waistcoat: L(
    'A waistcoat is a sleeveless jacket worn over a shirt, often as part of formal or uniform dress (UK). In US English vest often means this garment; in UK English a vest is usually an undershirt. Concerts: a waistcoat is kit; a hoodie is not the same layer.',
    ['A waistcoat for the concert is kit; a hoodie is not the same layer.', 'A waistcoat in the uniform shop still needs the school badge; a fashion one is not the inspection layer.'],
    'a waistcoat (UK). US: often a vest. Contrast: a UK vest (undershirt) / a hoodie. Concerts / uniform. Countable. Mix-up: waist is the body; a waistcoat is the garment.',
    []
  ),
  'walking-stick': L(
    'A walking stick (id: walking-stick) is a stick you hold to help you walk, especially if you are unsteady. A crutch goes under the arm; a cane is a close word, often slimmer. Trips: a walking stick is mobility kit; a joke prop is not allowed on the coach.',
    ['A walking stick on the trip is mobility kit; a joke prop is not allowed on the coach.', 'A walking stick from the nurse is signed out; using it as a sword still goes in the behaviour log.'],
    'a walking stick. Contrast: a crutch / a cane. Trips / nurse. Countable. Mix-up: walking is the verb; the stick is the aid. Not a magic wand.',
    []
  ),
  wallpaper: L(
    'Wallpaper is paper, usually patterned, stuck on indoor walls (often uncountable). Paint is liquid colour; a poster is a single sheet you pin up. Halls: do not put up wallpaper; blu-tack still needs the inventory check.',
    ['Do not put up wallpaper in halls; blu-tack still needs the inventory check.', 'Wallpaper peeling in a rented room still goes on the inventory photo; ripping it off is damage.'],
    'wallpaper (often uncountable). Contrast: paint / a poster. Halls / tenancy. Mix-up: a wall is the structure; wallpaper is the covering. Extra: to wallpaper is the verb.',
    []
  ),
  wheelbarrow: L(
    'A wheelbarrow is a small cart with one wheel and two handles, used for moving loads in a garden. A trolley has four wheels; a cart may be larger. Site: the caretaker’s wheelbarrow is not a ride for a dare; that still goes in the accident book.',
    ['The caretaker’s wheelbarrow is not a ride for a dare; that still goes in the accident book.', 'A wheelbarrow on the allotment club is for soil, not for a classmate; that is still a behaviour log.'],
    'a wheelbarrow. Contrast: a trolley / a cart. Caretaker / allotment. Countable. Mix-up: a barrow can also mean a burial mound in geography; a wheelbarrow is the garden cart.',
    []
  ),
  'windscreen-wiper': L(
    'A windscreen wiper (id: windscreen-wiper) is a moving arm with a rubber blade that clears rain from a car’s front window (UK; US windshield wiper). The windscreen is the glass; the bonnet is the front lid (UK). Minibus: check the wipers before the trip; cracked rubber still fails the walk-round.',
    ['Check the windscreen wipers on the minibus before the trip; cracked rubber still fails the walk-round.', 'A windscreen-wiper blade is a spare in the glove box, not a tool for DT.'],
    'a windscreen wiper (UK). US: a windshield wiper. Contrast: a windscreen / a bonnet. Minibus / MOT. Countable blades. Mix-up: to wipe is the verb; the wiper is the arm on the glass.',
    []
  ),
  'wine-glass': L(
    'A wine glass (id: wine-glass) is a glass with a stem, used for drinking wine. A tumbler has no stem; a pint glass is for beer. Licensed dinners: a wine glass is staff-poured; pupils do not fetch bottles.',
    ['A wine glass at the licensed sixth-form dinner is staff-poured; pupils do not fetch bottles.', 'Wine glasses in food tech are for a tasting diagram, not for alcohol; juice still goes in a tumbler unless the recipe says otherwise.'],
    'a wine glass. Contrast: a tumbler / a pint glass. Licensed events / food tech. Countable glasses. Mix-up: glasses can also mean spectacles; a wine glass is the drinking glass.',
    []
  ),
  wristwatch: L(
    'A wristwatch is a watch worn on a strap round the wrist. A clock is on a wall or desk; a smartwatch connects like a phone. Exams: an ordinary wristwatch may be allowed; a smartwatch still goes in the phone bag.',
    ['An ordinary wristwatch may be allowed in the exam; a smartwatch still goes in the phone bag.', 'A wristwatch with a calculator still counts as a device if the exam board bans stored text.'],
    'a wristwatch; also a watch. Contrast: a clock / a smartwatch. Exams. Countable. Mix-up: a wrist is the body part; the watch is the timepiece.',
    []
  ),
  'skipping-rope': L(
    'A skipping rope (id: skipping-rope) is a rope used for jumping over, as exercise or a game (UK; US jump rope). To skip a lesson is to miss it, which is a different sense. PE: a skipping rope is kit; using it in the corridor is a trip hazard.',
    ['A skipping rope is PE kit; using it in the corridor is a trip hazard.', 'Skipping-rope rounds in the bleep-test warm-up are still PE; a fashion skipping in the quad is not the lesson.'],
    'a skipping rope (UK). US: a jump rope. Contrast: to skip a lesson (miss it). PE. Countable ropes. Mix-up: skip as a verb can mean miss school; the rope is the PE item. Extra: a skip is also a large rubbish container.',
    []
  ),
  clingfilm: L(
    'Cling film (id: clingfilm) is thin plastic film that sticks to itself, used to cover food (UK, often uncountable; US plastic wrap). Foil is metal; greaseproof paper is for baking. Food tech: cover the sample in cling film; a tea towel is not an airtight lid.',
    ['Cover the food-tech sample in cling film; a tea towel is not an airtight lid.', 'Cling film in the fridge still needs a date label; wrapping a bun in a blazer pocket is not food hygiene.'],
    'cling film (UK, often uncountable). US: plastic wrap. Contrast: foil / greaseproof paper. Food tech. Mix-up: to cling means to stick; the film is the wrap.',
    []
  ),
  'clothes-peg': L(
    'A clothes peg (id: clothes-peg) is a small clip for fastening wet clothes to a washing line (UK; US clothespin). A paperclip holds paper; a hair clip holds hair. Art: a clothes peg on the drying line is fine; clipping one on someone’s skin is a behaviour log.',
    ['A clothes peg on the art drying line is fine; clipping one on someone’s skin is a behaviour log.', 'Clothes pegs in the boarding laundry are named; taking the last six off a housemate’s shirt is still theft.'],
    'a clothes peg (UK). US: a clothespin. Contrast: a paperclip / a hair clip. Laundry / art. Countable pegs. Mix-up: a peg can also be a hook or a marker; a clothes peg is the washing clip.',
    []
  ),
}
