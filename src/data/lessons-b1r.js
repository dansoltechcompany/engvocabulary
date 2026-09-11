const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1R = {
  settee: L(
    'A settee is a sofa: a long, soft seat for two or more people (UK). Couch is more informal or US; an armchair is for one. NHS waiting rooms: the settee is for patients, not an overnight bed for relatives.',
    ['The waiting-room settee is for patients; relatives do not sleep on it overnight.', 'A leather settee in the staff room is still furniture, not a listed antique for insurance.'],
    'a settee (UK). Close: a sofa. Informal/US: a couch. Homes / waiting rooms. Countable seats. Mix-up: a settle is an old wooden bench.',
    ['sofa', 'couch']
  ),
  wifi: L(
    'Wifi (often written Wi-Fi) is a wireless system that connects computers and phones to the internet. Broadband is the home or campus connection; a hotspot is a phone’s share. Exam halls: campus wifi still needs the college login; a personal hotspot is not allowed.',
    ['Campus wifi needs the college login; a personal hotspot is not allowed in the exam hall.', 'Guest wifi in the GP surgery is not the NHS clinical network.'],
    'wifi / Wi-Fi (often uncountable). Close: a hotspot (phone share). Contrast: broadband / ethernet. College / exams. Mix-up: hi-fi is sound equipment.',
    []
  ),
  'washing-machine': L(
    'A washing machine (id: washing-machine) washes clothes, sheets, and similar items. A tumble dryer dries them; a dishwasher is for plates. Halls: the washing machine is token-only; a balcony spin-dry is not allowed.',
    ['The halls washing machine is token-only; a balcony spin-dry is not allowed.', 'A washing machine on the tenancy inventory still needs the landlord’s service, not a housemate’s repair.'],
    'a washing machine. Contrast: a tumble dryer / a dishwasher. Halls / tenancy. Countable machines. US: a washer. Mix-up: washing is the dirty clothes or the job.',
    []
  ),
  'post-office': L(
    'A post office (id: post-office) handles letters, parcels, and some government services in the UK. A courier is a private parcel firm; a letter box is only for posting. Passports: the post office still does the check; a supermarket kiosk is not a full substitute.',
    ['The post office still does the passport check; a supermarket kiosk is not a full substitute.', 'Post-office hours on the high street are not the same as the 24-hour parcel locker.'],
    'a / the post office. Modifier: post-office + hours / counter. Contrast: a courier / a letter box. High street / ID. Countable branches. Mix-up: the post is the mail, often uncountable.',
    []
  ),
  'power-cut': L(
    'A power cut (id: power-cut) is a period when the electricity supply stops (UK). A blackout is a close twin; a fuse trip is often only one circuit. Exams: a power cut still stops the clock; phones are not a light in the hall.',
    ['A power cut during the exam still stops the clock; phones are not a light in the hall.', 'A planned power cut for the substation is on the council notice, not a rumour in the staff room.'],
    'a power cut (UK). Close: a blackout. Contrast: a fuse / a trip. Exams / NHS wards. Countable events. US: a power outage. Mix-up: a shortcut is a quicker route.',
    ['blackout', 'outage']
  ),
  'right-handed': L(
    'Right-handed means using the right hand more than the left for writing and most tasks. Left-handed is the opposite; ambidextrous is both (a step up). Mocks: right-handed desks are the default; left-handed seats still need booking.',
    ['Right-handed desks are the default; left-handed seats still need booking for the mock.', 'A right-handed pair of scissors in DT is not inclusive kit on its own.'],
    'right-handed (hyphen). Opposite: left-handed. Noun: a right-hander. Exams / DT. Mix-up: right-wing is politics.',
    []
  ),
  'shopping-centre': L(
    'A shopping centre (id: shopping-centre) is a group of shops in one building or area, often with parking (UK; US mall). The high street is the town’s main row of shops; a precinct is often pedestrian. Trips: the shopping-centre bus is not the school coach; put it on the EVOLVE form.',
    ['The shopping-centre bus is not the school coach; put the trip on the EVOLVE form.', 'A shopping centre is not the high street; banks closing a branch still send people to the post office.'],
    'a shopping centre (UK). US: a mall. Contrast: the high street. Modifier: shopping-centre + bus / car park. Countable centres. Mix-up: shopping is the activity, uncountable.',
    []
  ),
  tracksuit: L(
    'A tracksuit is a loose jacket and trousers worn for sport or as casual kit. PE kit is the school’s required sports clothing; a hoodie is not the same as the jacket. Uniform: a tracksuit is PE kit, not uniform on a non-PE day.',
    ['A tracksuit is PE kit, not uniform on a non-PE day.', 'A club tracksuit on the minibus still needs the school logo rule in the handbook.'],
    'a tracksuit; tracksuit bottoms. Close: PE kit. Contrast: uniform / a hoodie. Sport / school. Countable outfits. Mix-up: a track is a running path or a school pathway.',
    []
  ),
  'vending-machine': L(
    'A vending machine (id: vending-machine) sells snacks, drinks, or tickets when you put money in. A cafeteria serves hot meals; a kiosk has a person. Wards: the vending machine is not a hot meal when the hospital cafeteria has closed.',
    ['The ward vending machine is not a hot meal; the hospital cafeteria closes at 7pm.', 'A vending machine in the common room still needs the school food-standards list, not chocolate only.'],
    'a vending machine. Contrast: a cafeteria / a kiosk. NHS / college. Countable machines. Mix-up: vending is the selling, not the machine.',
    []
  ),
  workmate: L(
    'A workmate is a person you work with (informal UK). A colleague is the more formal twin; a classmate is school. HR: a workmate is not your line manager; a grievance still goes through the proper route.',
    ['A workmate is not your line manager; the grievance still goes through HR.', 'A workmate on the rota can swap a shift; they cannot sign off your holiday form.'],
    'a workmate (informal UK). Close: a colleague. Contrast: a classmate / a line manager. Work / rota. Countable people. Mix-up: a housemate shares a house, not a job.',
    ['colleague']
  ),
  'tumble-dryer': L(
    'A tumble dryer (id: tumble-dryer) dries wet clothes by turning them in hot air (UK). A washing machine washes; a radiator is not a dryer. Halls: the tumble dryer is extra; wet kit on the radiator is a fire risk.',
    ['The tumble dryer in halls is extra; wet kit on the radiator is a fire risk.', 'A tumble dryer on the inventory still needs the lint filter cleaned; that is a fire-safety note, not optional.'],
    'a tumble dryer (UK). US: a dryer. Contrast: a washing machine / a washing line. Halls / fire safety. Countable machines. Mix-up: tumble alone can mean fall.',
    ['dryer']
  ),
  'sleeping-bag': L(
    'A sleeping bag (id: sleeping-bag) is a warm padded bag that you sleep in outdoors or on a floor. A duvet is for a bed; a bunk is a hostel bed. Duke of Edinburgh: a sleeping bag is kit, not a substitute for an assigned hostel bunk.',
    ['A sleeping bag on the Duke of Edinburgh expedition is kit, not a substitute for the hostel bunk.', 'A sleeping bag in the sports hall for a charity sleep-out still needs the safeguarding staffing ratio.'],
    'a sleeping bag. Contrast: a duvet / a bunk. DofE / hostels. Countable bags. Mix-up: sleep is the verb or uncountable noun.',
    []
  ),
  photocopier: L(
    'A photocopier is a machine that makes paper copies of documents. A printer puts a file onto paper; a scanner turns paper into a file. Coursework: staff photocopier codes are not for reprints; use the library credit.',
    ['Staff photocopier codes are not for coursework reprints; use the library credit.', 'A photocopier jam still goes to the technician; do not pull hot paper from the fuser.'],
    'a photocopier; photocopy (verb / a photocopy). Close: a copier. Contrast: a printer / a scanner. School / office. Countable machines. Mix-up: a photograph is a picture, not a copy of a worksheet.',
    ['copier']
  ),
  'out-of-date': L(
    'Out-of-date means no longer valid, current, or safe to use. Expired is close for food, medicine, and cards; outdated is more about style or ideas. College gates: out-of-date ID is not accepted; renew it at the student desk.',
    ['Out-of-date ID is not accepted at the college gate; renew it at the student desk.', 'Out-of-date medicine in the first-aid box still goes in the pharmacy returns, not the bin.'],
    'out-of-date (hyphens as adjective before a noun). Close: expired. Style: outdated. ID / NHS / food. Mix-up: up to date is the opposite (often with spaces).',
    ['expired', 'outdated']
  ),
  sticker: L(
    'A sticker is a small piece of paper or plastic with a sticky back, for putting on things. A label is often for names or prices; a stamp is for post. Exams: a name sticker is not the candidate number; copy that from the desk card.',
    ['A name sticker on the test paper is not the candidate number; copy it from the desk card.', 'A parking sticker on the windscreen is the permit; a handwritten note is not.'],
    'a sticker; stick a sticker on. Close: a label. Contrast: a stamp. School / cars. Countable items. Mix-up: sticky is the adjective.',
    ['label']
  ),
  'tea-bag': L(
    'A tea bag (id: tea-bag) is a small bag of tea leaves that you put in a cup or pot. Loose tea is leaves without a bag; a teabag is the same item written as one word. Staff rooms: tea bags are for tea, not for a science practical.',
    ['Tea bags in the staff room are for tea; they are not for the science practical.', 'A used tea bag goes in food waste if the council collects it, not in the sink.'],
    'a tea bag (also teabag). Contrast: loose tea. Staff rooms / canteens. Countable bags. Mix-up: a bag of tea in a supermarket is a packet of bags.',
    []
  ),
  'term-time': L(
    'Term time (id: term-time) is the weeks when school or college is open for teaching (UK). Holidays and half-term are the breaks; INSET is staff training. Absence: term-time holidays still need the head’s permission; a cheap flight is not a reason.',
    ['Term-time holidays still need the head’s permission; a cheap flight is not a reason.', 'Term-time only contracts for support staff still need the same DBS as year-round posts.'],
    'in term time; term-time + holiday / contract (hyphen as modifier). Contrast: the holidays / half-term. School / college. Often uncountable as a period. Mix-up: a term is one block of the year.',
    []
  ),
  'text-message': L(
    'A text message (id: text-message) is a written message sent from one mobile to another (also a text or SMS). Email is longer and usually on a computer; a call is spoken. Attendance: a text message is not official absence; call the attendance line.',
    ['A text message is not official absence; call the attendance line.', 'A text message from the school is the official closure; a parent WhatsApp is not.'],
    'a text message; send a text. Close: a text / an SMS. Contrast: an email / a call. Attendance / phones. Countable messages. Mix-up: a textbook is a school book.',
    ['text', 'SMS']
  ),
  tights: L(
    'Tights are a close-fitting garment covering the feet, legs, and hips, worn under a skirt (UK; usually plural). Stockings stop at the thigh; leggings are thicker and often outerwear. Uniform: black tights are required; patterned ones fail the inspection.',
    ['Black tights are uniform; patterned ones fail the inspection.', 'Laddered tights still need a spare pair in the bag; PE kit is not a substitute in lessons.'],
    'tights (UK, plural). US: pantyhose. Contrast: stockings / leggings. Uniform. Pair of tights. Mix-up: tight is the adjective (clothes that fit closely).',
    []
  ),
  tweezers: L(
    'Tweezers are a small metal tool with two arms, used for pulling out hairs or splinters (plural). Forceps in a lab or hospital are a related tool; scissors cut. First aid: tweezers are for splinters, not a science tool from the kit.',
    ['Tweezers in the first-aid kit are for splinters; they are not a science tool.', 'A pair of tweezers on the DT bench is still counted in; they are not jewellery kit.'],
    'tweezers (plural); a pair of tweezers. Contrast: scissors / forceps. First aid. Mix-up: tweeze is a rare verb; use pull out with tweezers.',
    []
  ),
  'water-bottle': L(
    'A water bottle (id: water-bottle) is a bottle for carrying drinking water. A flask is for hot drinks; a can is usually fizzy. Exam halls: a water bottle is allowed; a fizzy can is not.',
    ['A water bottle is allowed in the exam hall; a fizzy can is not.', 'A named water bottle on the trip is kit; sharing one bottle is not the hygiene rule.'],
    'a water bottle. Contrast: a flask / a can. Exams / PE. Countable bottles. Mix-up: a bottle of water from a shop is the same object, often disposable.',
    []
  ),
  'wrapping-paper': L(
    'Wrapping paper (id: wrapping-paper) is decorated paper used to wrap presents (often uncountable). Tissue paper is thinner; brown paper is plain. Recycling: wrapping paper goes in if the glitter-free sign is up.',
    ['Wrapping paper goes in the recycling if the glitter-free sign is up.', 'Wrapping paper for the Christmas post still needs a named parcel, not only a tag.'],
    'wrapping paper (often uncountable). Contrast: tissue paper / brown paper. Presents / recycling. Mix-up: wrapping is the job or the covering.',
    []
  ),
  'pay-rise': L(
    'A pay rise (id: pay-rise) is an increase in the money you earn (UK; US pay raise). Overtime is extra hours, not a higher rate as of right; a bonus is a one-off. NHS: a pay rise on the band is not automatic; it follows the appraisal.',
    ['A pay rise on the NHS band is not automatic; it follows the appraisal.', 'A pay rise in the offer letter is not the same as unsocial-hours enhancements on the rota.'],
    'a pay rise (UK). US: a pay raise. Contrast: overtime / a bonus. HR / NHS. Countable rises. Mix-up: raise as a verb means lift; the UK noun for wages is rise.',
    []
  ),
  'light-bulb': L(
    'A light bulb (id: light-bulb) is the glass part of an electric light that produces light. A lamp is the whole fitting or a portable light; a tube is often fluorescent. Labs: a blown bulb still goes in the accident book if glass is on the bench.',
    ['A blown light bulb in the lab still goes in the accident book if glass is on the bench.', 'LED light bulbs in halls are the landlord’s fittings; do not swap them for a colour-change strip.'],
    'a light bulb (also bulb). Contrast: a lamp / a tube. Labs / halls. Countable bulbs. Mix-up: light is uncountable as illumination.',
    ['bulb']
  ),
  'fridge-freezer': L(
    'A fridge freezer (id: fridge-freezer) is a combined fridge and freezer in one unit. A fridge keeps food cold; a freezer keeps it frozen. Wards: the fridge freezer marked refrigerate is for medicines; staff lunches have their own.',
    ['The ward fridge freezer is for medicines marked refrigerate; staff lunches have their own.', 'A fridge freezer on the tenancy inventory still needs a temperature log in a food-tech kitchen.'],
    'a fridge freezer (also fridge-freezer). Contrast: a fridge / a freezer as separate units. NHS / halls. Countable appliances. Mix-up: a cool box is portable and not mains-powered.',
    []
  ),
  'evening-class': L(
    'An evening class (id: evening-class) is a lesson for adults or extra study held in the evening, often at a college. Daytime courses are the main timetable; a club is usually unpaid and social. Enrolment: turning up is not a place on the class.',
    ['An evening class at the college still needs enrolment; turning up is not a place.', 'An evening class does not replace missed coursework contact time unless the tutor logs it.'],
    'an evening class. Contrast: a daytime course / a club. College / adult learning. Countable classes. Mix-up: evening is the time of day, uncountable as a period.',
    []
  ),
  'chewing-gum': L(
    'Chewing gum (id: chewing-gum) is a sweet you chew for a long time but do not swallow (often uncountable). A mint can be swallowed; a sweet is wider. Exam halls: chewing gum is banned; a mint is not a substitute for the bin rule.',
    ['Chewing gum is banned in the exam hall; a mint is not a substitute for the bin rule.', 'Chewing gum under a desk still fails a room inspection; that is a cleaning charge in halls.'],
    'chewing gum (often uncountable). a piece of gum. Contrast: a mint / a sweet. Exams / uniform. Mix-up: gum can also mean the flesh around the teeth (already a different sense).',
    ['gum']
  ),
  buggy: L(
    'A buggy is a light folding chair on wheels for a baby (UK; also a pushchair). A pram is often flatter for newborns; a wheelchair is for a person who cannot walk far. Wards: park the buggy in the designated bay, not down the corridor. A golf buggy is a small open vehicle — a different sense.',
    ['Park the buggy in the designated bay; it is not allowed down the ward corridor.', 'A golf buggy on the academy grounds is staff only; pupils do not ride it.'],
    'a buggy (UK baby sense). Close: a pushchair. Contrast: a pram / a wheelchair. NHS / shops. Countable. Mix-up: buggy as an adjective means full of insects — not this noun.',
    ['pushchair']
  ),
  bunk: L(
    'A bunk is a narrow bed, often one of two stacked (a bunk bed), or a sleeping place on a ship or in a hostel. A cot is for a baby; a camp bed is a folding extra. Hostels: a bunk is assigned; swapping without telling staff breaks the fire list. Bunk off is informal UK for skipping school — a different phrase.',
    ['A bunk in the hostel is assigned; swapping without telling staff breaks the fire list.', 'A bunk bed in boarding still needs the named duvet; swapping mattresses is not allowed.'],
    'a bunk; a bunk bed. Contrast: a cot / a camp bed. Hostels / boarding. Countable beds. Phrase: bunk off (skip school). Mix-up: bunk as nonsense is informal and rare in exams.',
    []
  ),
  quit: L(
    'Quit means to stop doing a job or a habit, or to leave a place or activity. Resign is the formal twin for a job; give up is close for a habit. Saturday jobs: quitting still needs notice on the rota; mocks are not an instant walk-out.',
    ['He quit the Saturday job when mocks started; the rota still needed two weeks of notice.', 'Quit-smoking support is through the GP, not a vape from the high street as a plan.'],
    'quit a job / quit smoking. Close (job): resign. Close (habit): give up / stop. Past: quit (not quitted in UK exams). Work / NHS. Mix-up: quiet means not noisy.',
    ['stop', 'resign', 'give up']
  ),
  skip: L(
    'Skip as a verb means to not do something you should do, or to move with little jumps, often with a rope. Miss is close for a lesson; omit is more formal for leaving something out. Mocks: do not skip them; a GP letter is the authorised absence. A skip as a noun is a large open container for rubbish — a different word class.',
    ['Do not skip the mock; a GP letter is the only authorised absence.', 'Skip with a rope in PE is the jump sense, not missing the lesson.'],
    'skip a lesson / a meal; skip with a rope. Close (absence): miss. Noun: a skip (rubbish). School / PE. Mix-up: a skip as a container is countable; the verb is skip.',
    ['miss']
  ),
  straw: L(
    'Straw is dried stems of wheat or similar, used as bedding or fodder; a straw is also a thin tube for drinking. Hay is dried grass for feed; a stirrer is a thin stick for drinks. Canteens: a plastic straw is not the default; ask at the till if you need one.',
    ['A plastic straw is not default in the canteen; ask at the till if you need one.', 'Straw bales on the farm visit are not a climbing frame; that is a health-and-safety briefing.'],
    'straw (uncountable as crop stems); a straw (countable drinking tube). Contrast: hay. Canteens / farms. Mix-up: strawberry is the fruit.',
    []
  ),
  'sports-centre': L(
    'A sports centre (id: sports-centre) is a building with facilities for sport, such as a pool, gym, and courts (UK). A leisure centre is a close twin, often council-run; PE is the school lesson. Membership is not the same as PE; after-school clubs still need the consent form.',
    ['The sports centre membership is not PE; after-school clubs still need the consent form.', 'A sports-centre booking for the fixture still needs two staff, not only a minibus driver.'],
    'a sports centre (UK). Close: a leisure centre. Contrast: PE / a gym (often just weights). School / council. Countable buildings. Mix-up: a sports hall is usually one big indoor space.',
    ['leisure centre']
  ),
  snowboard: L(
    'A snowboard is a board for sliding over snow, with both feet attached. Skis are a pair, one for each foot; a sledge is sat on. Trips: a snowboard is extra insurance; the skiing policy does not cover it automatically.',
    ['A snowboard on the trip is extra insurance; the skiing policy does not cover it automatically.', 'A snowboard in the kit list is the board; snowboarding is the activity (already in this dictionary).'],
    'a snowboard. Activity: snowboarding. Contrast: skis / a sledge. Trips / insurance. Countable boards. Mix-up: a skateboard is for pavement, not snow.',
    []
  ),
  suncream: L(
    'Suncream is cream that protects the skin from the sun (UK; often uncountable). Sunscreen and sunblock are close twins; moisturiser is not SPF on its own. Sports day: suncream is required on the field; a hat is not a substitute for SPF.',
    ['Suncream is required on the sports-day field; a hat is not a substitute for SPF.', 'Suncream in the first-aid bag is still named for the pupil; sharing a bottle is not the allergy rule.'],
    'suncream (UK, often uncountable). Close: sunscreen / sunblock. Contrast: moisturiser. PE / trips. Mix-up: suncream is not the same as after-sun.',
    ['sunscreen', 'sunblock']
  ),
  'swimming-pool': L(
    'A swimming pool (id: swimming-pool) is a large structure filled with water for swimming. A leisure pool may have slides; a pond is not for PE. Changing rooms: the pool still has a goggle rule; the phone ban still applies.',
    ['The swimming pool needs a goggle rule; the changing-room phone ban still applies.', 'A swimming-pool closure after a water test still moves PE to the sports hall, not a cancelled afternoon.'],
    'a swimming pool; in the pool. Close: a pool. Contrast: a pond / the sea. PE / leisure centres. Countable pools. Mix-up: swimming is the activity (already in this dictionary).',
    ['pool']
  ),
  trainer: L(
    'A trainer is a sports shoe in UK English (usually trainers in the plural). It is also a person who trains people or animals. Plimsolls are thinner school PE shoes; school shoes are formal. Uniform: trainers are PE only; black school shoes are still required in lessons.',
    ['Trainers are PE only; black school shoes are still required in lessons.', 'A football trainer in the academy is the coach sense, not the shoe.'],
    'a trainer; a pair of trainers (UK shoes). US: sneakers. Person: a trainer / a coach. Uniform / PE. Mix-up: training is the activity, uncountable.',
    []
  ),
  apron: L(
    'An apron is a piece of clothing worn over the front of your clothes to keep them clean, especially when cooking. A tabard is a school or care-home twin; PPE is the wider safety kit. Food tech: tie the apron; a hoodie is not PPE.',
    ['Tie the apron for food tech; a hoodie is not PPE.', 'A disposable apron on the ward is single-use; it is not a food-tech cloth apron.'],
    'an apron; tie an apron. Close (care/school): a tabard. Contrast: PPE as a wider set. Food tech / NHS. Countable. Mix-up: an apron stage is theatre, not clothes.',
    []
  ),
  aubergine: L(
    'An aubergine is a shiny purple vegetable (UK; US eggplant). A courgette is green and narrower; a pepper is a different vegetable. Canteens: aubergine on the vegetarian option still needs the allergen card.',
    ['Aubergine is on the vegetarian option; mark the allergen card.', 'Aubergine in food tech is the vegetable; it is not a colour name on the paint chart.'],
    'an aubergine (UK). US: an eggplant. Contrast: a courgette. Canteens / food tech. Countable vegetables. Mix-up: orange is a colour and a fruit; aubergine as a colour is rarer in B1.',
    []
  ),
  babysitter: L(
    'A babysitter looks after children for a short time while the parents are out. A childminder is registered and often daytime; a nanny is more regular live-in or daily work. On-site events: a babysitter still needs a DBS check.',
    ['A babysitter for the staff event still needs a DBS check if it is on site.', 'A babysitter is not a childminder; Ofsted registration is a different job.'],
    'a babysitter; babysit (verb). Contrast: a childminder / a nanny. DBS / safeguarding. Countable people. Mix-up: a baby-sitter with a hyphen is the same word; keep one form in exams.',
    []
  ),
  ballpoint: L(
    'A ballpoint is a pen that writes with a tiny ball at the end (also a ballpoint pen; UK also a biro). A fountain pen uses liquid ink; a gel pen can smudge. Exams: a ballpoint is allowed; gel pens may smudge on the script.',
    ['A ballpoint is allowed in the exam; gel pens may smudge on the script.', 'A ballpoint on the stationery list is black or blue; green is for teacher marking.'],
    'a ballpoint; a ballpoint pen. Close (UK): a biro. Contrast: a fountain pen / a gel pen. Exams. Countable pens. Mix-up: a bullet point is a layout mark, not a pen.',
    ['biro']
  ),
  bangle: L(
    'A bangle is a stiff band of jewellery worn round the wrist or arm. A bracelet is often more flexible or chained; a watch is for time. PE: a bangle comes off; jewellery goes in the pouch, not a pocket.',
    ['A bangle comes off for PE; jewellery is in the pouch, not in a pocket.', 'A bangle on the DT lathe is a jewellery ban, not a fashion choice.'],
    'a bangle. Close: a bracelet. Contrast: a watch. PE / DT / uniform. Countable. Mix-up: bang is a loud noise or a haircut.',
    ['bracelet']
  ),
  bathrobe: L(
    'A bathrobe is a loose coat worn before or after a bath or shower. A dressing gown is the usual UK home twin; a towel is not a coat. Boarding: a bathrobe is not uniform; dressing gowns have a named hook.',
    ['A bathrobe is not boarding uniform; dressing gowns have a named hook.', 'A hotel bathrobe on a trip still stays in the room; it is not a souvenir.'],
    'a bathrobe. Close (UK): a dressing gown. Contrast: a towel / a coat. Boarding / hotels. Countable. Mix-up: a bath is the tub or the wash.',
    ['dressing gown']
  ),
  beanie: L(
    'A beanie is a close-fitting knitted hat without a brim. A beret is flat and round; a cap has a peak. Lessons: a beanie comes off; it is not a uniform hat.',
    ['A beanie comes off in lessons; it is not a uniform hat.', 'A beanie on the field in January is kit; it still comes off for the ID photo.'],
    'a beanie. Contrast: a beret / a cap. Uniform / PE. Countable hats. Mix-up: bean is the vegetable; beanie is the hat.',
    []
  ),
  beret: L(
    'A beret is a round, flat, soft hat, often of wool. A beanie is knitted and close-fitting; a cap has a peak. Drama: a beret is costume; it is not allowed in the exam hall.',
    ['A beret in drama is costume; it is not allowed in the exam hall.', 'A beret in the cadet uniform is kit; a fashion beret is not the same badge.'],
    'a beret. Contrast: a beanie / a cap. Drama / uniform. Countable hats. Mix-up: berry is the fruit.',
    []
  ),
  biro: L(
    'A biro is a ballpoint pen in informal UK English (originally a brand name). A fountain pen is different ink; a pencil is for sketches and maths working. Exams: a black biro is specified on the front; a pencil is not for the written paper.',
    ['A black biro is specified on the exam front; a pencil is not for the written paper.', 'A biro in the stationery shop is still a ballpoint; it is not a fountain pen for SPaG presentation marks.'],
    'a biro (UK informal). Close: a ballpoint. Contrast: a fountain pen / a pencil. Exams. Countable pens. Mix-up: borrow is the verb to take and return.',
    ['ballpoint']
  ),
  blinds: L(
    'Blinds are a covering for a window made of strips or fabric that you pull down or across (usually plural). Curtains hang in fabric panels; a shutter is often wooden and outside or hinged. Classrooms: close the blinds for the projector; they are not blackout for a fire-drill.',
    ['Close the blinds for the projector; they are not blackout for a fire-drill.', 'Office blinds still need a clear fire-exit pane; do not tape paper over the glass.'],
    'blinds (usually plural); a blind. Contrast: curtains / shutters. Classrooms / offices. Mix-up: blind as an adjective means unable to see (already in many dictionaries).',
    []
  ),
  bluetooth: L(
    'Bluetooth is a wireless system for connecting phones, headphones, and other devices over a short distance (often uncountable). Wifi is for internet; a cable is physical. Exam halls: bluetooth is off; a watch still counts as a device.',
    ['Bluetooth is off in the exam hall; a watch still counts as a device.', 'Bluetooth headphones in the library still need the one-ear rule; they are not a full ban on wifi laptops.'],
    'Bluetooth (often uncountable; often capital B in adverts). Contrast: wifi / a cable. Exams / phones. Mix-up: blue tooth as two words is not the technology.',
    []
  ),
  'board-game': L(
    'A board game (id: board-game) is a game played on a board, often with pieces or cards, such as chess or Monopoly. A card game uses only cards; a video game is on a screen. Common rooms: a board game is fine; gambling apps are not.',
    ['A board game in the common room is fine; gambling apps are not.', 'A board-game club still needs a staff volunteer; it is not an unsupervised lunchtime.'],
    'a board game. Contrast: a card game / a video game. Common rooms / clubs. Countable games. Mix-up: a whiteboard is for writing, not playing.',
    []
  ),
  boiler: L(
    'A boiler heats water for radiators and taps in a building. An immersion heater is often a tank in a cupboard; a portable heater is a fire-risk extra. Landlords: the boiler service is an annual duty; a portable heater is not a fix in halls.',
    ['The boiler service is an annual landlord duty; a portable heater is not a fix in halls.', 'A boiler breakdown still goes through the out-of-hours number; a kettle is not hot water for a ward.'],
    'a boiler; the boiler service. Contrast: an immersion heater / a portable heater. Halls / NHS. Countable appliances. Mix-up: to boil is the verb for heating liquid.',
    []
  ),
  'bow-tie': L(
    'A bow tie (id: bow-tie) is a tie tied in a bow, worn at the neck with formal clothes. A tie is the long standard school or office tie; a cravat is more old-fashioned. Concerts: a bow tie is kit; a clip-on is allowed if the handbook says so.',
    ['A bow tie for the concert is kit; a clip-on is allowed if the handbook says so.', 'A bow tie in the uniform photo is not a clip-on unless the policy allows it.'],
    'a bow tie. Contrast: a tie / a cravat. Concerts / formal uniform. Countable. Mix-up: a bow in the hair is a ribbon, not neckwear.',
    []
  ),
  breadbin: L(
    'A breadbin is a container for keeping bread fresh in a kitchen (UK; also a bread bin). A bread board is for cutting; a cupboard is wider storage. Shared kitchens: the breadbin is labelled; other people’s food is not a snack.',
    ['The breadbin in the shared kitchen is labelled; other people’s food is not a snack.', 'A breadbin is not a bread board; chopping on the lid still fails a food-tech hygiene check.'],
    'a breadbin (also a bread bin). Contrast: a bread board / a cupboard. Halls / food tech. Countable. Mix-up: a bin in UK English is also a rubbish container.',
    []
  ),
  'bus-stop': L(
    'A bus stop (id: bus-stop) is a place at the side of the road where buses stop for passengers. A station is for trains or a major bus interchange; a lay-by is for cars to pull off. Gates: wait at the bus stop, not on the zigzag lines.',
    ['Wait at the bus stop, not on the zigzag lines outside the gates.', 'A bus-stop closure for roadworks still needs the rail-replacement note, not a rumour in the year group chat.'],
    'a bus stop; at the bus stop. Contrast: a station / a lay-by. School run / Highway Code. Countable stops. Mix-up: a bus is the vehicle.',
    []
  ),
  cagoule: L(
    'A cagoule is a thin, lightweight waterproof jacket (UK). An anorak is often thicker and hooded; a fashion jacket may not be waterproof. Duke of Edinburgh: a cagoule is on the kit list; a fashion jacket is not waterproof enough.',
    ['A cagoule is on the Duke of Edinburgh kit list; a fashion jacket is not waterproof enough.', 'A packed cagoule in the trip bag is kit; an umbrella is not allowed on the ridge walk.'],
    'a cagoule (UK). Close: a raincoat. Contrast: an anorak / a coat. DofE / PE. Countable jackets. Mix-up: a googol is a number, not a coat.',
    ['raincoat']
  ),
  campsite: L(
    'A campsite is a place where people stay in tents or caravans, often with toilets and showers. A camp is wider (including activity camps); a caravan park may not allow tents. Quiet hours: a festival speaker is not allowed.',
    ['The campsite has a quiet-hours rule; a festival speaker is not allowed.', 'A campsite booking for DofE still needs the leader’s contact on the form, not only a pupil mobile.'],
    'a campsite. Contrast: a camp / a caravan park / a hostel. DofE / holidays. Countable sites. Mix-up: camping is the activity, uncountable.',
    []
  ),
  'can-opener': L(
    'A can opener (id: can-opener) is a tool for opening tins of food (UK also a tin opener). A bottle opener is for bottle caps; a knife is not the KS3 substitute. Food tech: the can opener stays in the drawer.',
    ['The can opener stays in the food-tech drawer; a knife is not a substitute in Key Stage 3.', 'A ring-pull tin still does not replace the can opener on the equipment list for the practical.'],
    'a can opener (UK also a tin opener). Contrast: a bottle opener. Food tech. Countable tools. Mix-up: a can in UK English is often a drink can; food is often a tin.',
    ['tin opener']
  ),
  'car-park': L(
    'A car park (id: car-park) is an area or building where cars can be left (UK; US parking lot). A lay-by is a roadside pull-in; a driveway is private. Permits: staff car-park permits are not transferable; parent drop-off is the lay-by.',
    ['Staff car-park permits are not transferable; a parent drop-off is the lay-by.', 'A car park barrier at the hospital still needs the NHS visitor ticket; a staff fob is not for families.'],
    'a car park (UK). US: a parking lot. Contrast: a lay-by / a driveway. School / NHS. Countable parks. Mix-up: a park is also public green space.',
    []
  ),
  caravan: L(
    'A caravan is a vehicle that you can live in on holiday, towed behind a car (UK; US camper / trailer). A camper van is driven, not towed; a tent is fabric. Planning: a caravan on the field is not a classroom; consent still sits with the council.',
    ['A caravan on the field is not a classroom; planning still sits with the council.', 'A static caravan on a holiday park is not the same insurance as a touring caravan on a trip.'],
    'a caravan. Contrast: a camper van / a tent. Holidays / planning. Countable vehicles. Mix-up: a convoy of camels is an old sense of caravan, rare in B1 exams.',
    []
  ),
  cardigan: L(
    'A cardigan is a knitted jacket that opens at the front and is fastened with buttons or a zip. A jumper is pulled over the head; a hoodie has a hood and is often not uniform. Uniform: a navy cardigan is required; a hoodie is not the same layer.',
    ['A navy cardigan is uniform; a hoodie is not the same layer.', 'A staff cardigan in the NHS is still a knitted layer; it is not a clinical tunic.'],
    'a cardigan. Contrast: a jumper / a hoodie / a jacket. Uniform. Countable. Mix-up: cardboard is the packing material (already in this dictionary).',
    []
  ),
  'carrier-bag': L(
    'A carrier bag (id: carrier-bag) is a plastic or paper bag from a shop, used to carry shopping (UK). A rucksack is worn on the back; a tote is a stronger reusable bag. High street: a carrier-bag charge still applies; a rucksack is the school rule.',
    ['A carrier-bag charge still applies on the high street; a rucksack is the school rule.', 'A carrier bag is not a specimen bag on the ward; labs use the labelled pouch.'],
    'a carrier bag (UK). Contrast: a rucksack / a tote. High street / bag charge. Countable bags. Mix-up: a carrier can also mean an airline or a person who carries a gene — different senses.',
    []
  ),
  'cash-machine': L(
    'A cash machine (id: cash-machine) gives you money from your bank account (UK; also a cashpoint or ATM). A counter is a person in a bank or post office; cashback is at a till. High street: if the cash machine is out of order, the post office counter may still do cashback.',
    ['The high-street cash machine is out of order; the post office counter still does cashback.', 'A cash machine fee after 8pm is not the same as a campus cashpoint that is free in the day.'],
    'a cash machine (UK). Close: a cashpoint / an ATM. Contrast: a bank counter / cashback at a till. High street. Countable machines. Mix-up: cash is the money, uncountable.',
    ['cashpoint', 'ATM']
  ),
  charger: L(
    'A charger puts electricity into a battery, especially for a phone. A cable is only the lead; a socket is the wall point. Exam desks: a phone charger is not allowed; leave it in the bag at the front.',
    ['A phone charger is not allowed at the exam desk; leave it in the bag at the front.', 'A charger in halls still needs a fused UK plug; a travel adaptor is not a daisy-chain.'],
    'a charger; a phone charger. Contrast: a cable / a socket. Exams / halls. Countable devices. Mix-up: charge as a verb also means ask for money or accuse someone.',
    []
  ),
  'chip-shop': L(
    'A chip shop (id: chip-shop) sells fish and chips and similar takeaway food (UK). A takeaway is wider; a canteen is on site at school or work. Free school meals: the chip shop is not a provider; use the canteen till.',
    ['The chip shop is not a free-school-meal provider; use the canteen till.', 'A chip-shop tea after fixtures is not a school dinner; allergens still need asking at the counter.'],
    'a chip shop (UK). Close: a fish-and-chip shop. Contrast: a takeaway / a canteen. High street / FSM. Countable shops. Mix-up: a chip in UK English is a hot fried potato, not a US crisp.',
    []
  ),
  chopsticks: L(
    'Chopsticks are a pair of thin sticks used for eating, especially East Asian food (plural). A fork is the usual UK canteen default; cutlery is the set. Canteens: chopsticks are optional; a fork is still on the station.',
    ['Chopsticks in the canteen are optional; a fork is still on the cutlery station.', 'A pair of chopsticks in food tech is equipment; snapping them as a joke still goes in the behaviour log.'],
    'chopsticks (plural); a pair of chopsticks. Contrast: a fork / cutlery. Canteens / food tech. Mix-up: chopsticks are not drumsticks (food or music).',
    []
  ),
  clipboard: L(
    'A clipboard is a small board with a clip at the top for holding papers while you write. A tablet is a screen; a folder holds papers without a writing surface. Lesson observations: a clipboard is not a phone; notes stay on paper.',
    ['A clipboard for the lesson observation is not a phone; notes stay on paper.', 'A clipboard on the ward round still holds paper notes; it is not the electronic patient record.'],
    'a clipboard. Contrast: a tablet / a folder. Observations / NHS. Countable boards. Mix-up: a clipboard on a computer is copy-and-paste, a different tech sense.',
    []
  ),
  camcorder: L(
    'A camcorder is a portable camera that records moving pictures and sound. A camera may still mean still photos; a phone films too but is not automatically allowed. Trips: a camcorder still needs consent forms.',
    ['A camcorder on the trip still needs consent forms; a phone is not automatically allowed.', 'A camcorder in media studies is kit from the office; a personal phone is not the exam-board camera.'],
    'a camcorder. Contrast: a (still) camera / a phone. Trips / media / consent. Countable devices. Mix-up: to record is the verb; the machine is a camcorder.',
    []
  ),
  'cake-tin': L(
    'A cake tin (id: cake-tin) is a metal container for baking or storing a cake (UK). A baking tray is flatter; a cake stand is for display. Bake sales: return the cake tin; the hall kitchen is not lost property.',
    ['Return the cake tin after the bake sale; the hall kitchen is not lost property.', 'A cake tin in food tech is greased as the recipe says; a cardboard box is not a baking tin.'],
    'a cake tin (UK). Contrast: a baking tray / a cake stand. Food tech / bake sales. Countable tins. Mix-up: a tin of cake in a shop is packaged food, not the baking tin.',
    []
  ),
  'bottle-opener': L(
    'A bottle opener (id: bottle-opener) takes the metal caps off bottles. A corkscrew is for wine corks; a can opener is for tins. Licensed bars: pupils do not fetch the bottle opener.',
    ['A bottle opener is behind the licensed bar; pupils do not fetch it.', 'A bottle opener on the Duke of Edinburgh camping list is for squash bottles, not a bar kit.'],
    'a bottle opener. Contrast: a corkscrew / a can opener. Licensing / trips. Countable tools. Mix-up: open a bottle can also mean unscrew a lid, with no tool.',
    []
  ),
  bootlace: L(
    'A bootlace is a cord or string used to fasten a boot. A shoelace is the twin for shoes; velcro is a fastener without a lace. DT: tie the bootlace; trailing laces still go in the accident book.',
    ['Tie the bootlace before DT; trailing laces still go in the accident book.', 'A spare bootlace in the PE bag is kit; tape is not a lasting repair for an inspection.'],
    'a bootlace; a pair of bootlaces. Close: a shoelace. Contrast: velcro. PE / DT. Countable laces. Mix-up: a boot in UK English is also the back of a car.',
    ['shoelace']
  ),
  bumper: L(
    'A bumper is the bar at the front or back of a car that lessens damage in a knock. A bonnet is the front lid (UK); a boot is the rear storage. Car parks: a scraped bumper still goes on the incident form; a note on the windscreen is not enough.',
    ['A scraped bumper in the car park still goes on the incident form; a note on the windscreen is not enough.', 'A bumper pack in the supermarket is a large pack, which is the extra sense, not a car part.'],
    'a bumper (car). Contrast: a bonnet / a boot (UK car parts). Incidents / car parks. Countable. Extra: a bumper pack = a large pack. Mix-up: bump is the knock or the verb.',
    []
  ),
  'plug-socket': L(
    'A plug socket (id: plug-socket) is the hole in a wall that you push a plug into for electricity (UK; also a socket). An extension lead is extra; an adaptor changes plug shape. Halls: do not daisy-chain the plug socket; that is a fire-safety fail.',
    ['Do not daisy-chain the plug socket in halls; that is a fire-safety fail.', 'A plug socket in the exam hall is for the clock, not for candidate chargers.'],
    'a plug socket (UK). Close: a socket. US: an outlet. Contrast: a plug / an extension lead. Halls / fire safety. Countable points. Mix-up: a plug is the thing on the cable, not the hole in the wall.',
    ['socket']
  ),
  doorman: L(
    'A doorman stands at the door of a hotel, block of flats, or club. A receptionist is behind a desk; security may search bags. Trips: the hotel doorman is not school security; staff still take the register.',
    ['The hotel doorman is not security for the school trip; staff still take the register.', 'A nightclub doorman checking ID is 18; a sixth-form lanyard is not a pass.'],
    'a doorman. Close: a door attendant. Contrast: a receptionist / security. Hotels / clubs. Countable jobs. Mix-up: a door is the entrance, not the person.',
    []
  ),
  churchyard: L(
    'A churchyard is the land around a church, often used as a burial ground. A cemetery is usually a larger burial ground not always next to a church; a graveyard is a close twin. Fieldwork: a churchyard survey still needs the vicar’s permission, not only a class list.',
    ['A churchyard survey for geography still needs the vicar’s permission, not only a class list.', 'A churchyard is not a shortcut after dark; the gates may close at dusk like a cemetery.'],
    'a churchyard. Close: a graveyard. Contrast: a cemetery / a church. Geography / local history. Countable grounds. Mix-up: a yard in UK English can also mean a paved area at a school.',
    ['graveyard']
  ),
  cistern: L(
    'A cistern is a tank that holds water, especially the one that fills a toilet. A tank may be a larger hot-water cylinder; a tap is the outlet. Caretakers: a leaking cistern still needs a proper repair; a bucket in the cubicle is not enough.',
    ['A leaking cistern still goes to the caretaker; a bucket in the cubicle is not a repair.', 'A cistern in the loft can be the cold-water tank, which is the plumbing sense, not only a toilet.'],
    'a cistern. Contrast: a tank / a tap / a toilet. Caretakers / halls. Countable tanks. Mix-up: a system is an organised set, not a water tank.',
    []
  ),
  'central-heating': L(
    'Central heating (id: central-heating) is a system that heats a whole building from one boiler (often uncountable). A portable heater is a single room and often banned; a fire is a flame or an electric bar. Halls: heating runs on the timetable; a personal heater is a fire-risk ban.',
    ['Central heating in halls runs on the timetable; a personal heater is a fire-risk ban.', 'A central-heating breakdown still goes to the landlord’s out-of-hours line, not a tweet to the college.'],
    'central heating (often uncountable). Contrast: a portable heater / a fire. Halls / tenancy. Mix-up: heating is the wider idea; central heating is the whole-building system.',
    []
  ),
  cloakroom: L(
    'A cloakroom is a room where coats and bags are left; in some public places it is also a polite UK word for toilets. A changing room is for PE kit; a locker is an individual box. PE: phones stay out of the cloakroom; that is safeguarding, not a preference.',
    ['Phones stay out of the PE cloakroom; that is a safeguarding rule, not a preference.', 'A theatre cloakroom ticket is for coats; it is not a polite word for toilets in that building.'],
    'a cloakroom. Contrast: a changing room / a locker. Extra UK: toilets (polite). School / theatres. Countable rooms. Mix-up: a cloak is a long coat, rare as school uniform.',
    []
  ),
  courgette: L(
    'A courgette is a long green vegetable of the marrow family (UK; US zucchini). An aubergine is purple; a cucumber is eaten cold as a salad vegetable. Canteens: courgette on the vegetarian pasta still needs the allergen card if you add cheese.',
    ['Courgette is on the vegetarian pasta; mark the allergen card if you add cheese.', 'A courgette in food tech is cooked as the recipe says; a raw stick is a crudité, not the same dish.'],
    'a courgette (UK). US: a zucchini. Contrast: an aubergine / a cucumber. Canteens / food tech. Countable vegetables. Mix-up: a marrow is larger and often stuffed.',
    []
  ),
  'credit-card': L(
    'A credit card (id: credit-card) is a plastic card from a bank that lets you buy now and pay later. A debit card takes money you already have; cash is notes and coins. Canteens: a credit card is not accepted; use the cashless fob.',
    ['A credit card is not accepted for the canteen; use the cashless fob.', 'A credit-card payment on UCAS is not the same as a student-loan payment on the portal.'],
    'a credit card. Contrast: a debit card / cash. Canteens / UCAS. Countable cards. Mix-up: credit in exams can also mean praise or a unit of study.',
    []
  ),
  crossword: L(
    'A crossword is a word puzzle with numbered clues, filled into a grid of squares. A wordsearch hides words in a grid; a quiz is questions without a grid. Tutor time: the crossword is optional; the literacy booklet is not.',
    ['The crossword in tutor time is optional; the literacy booklet is not.', 'A crossword is not an unseen text for the English paper; it is a puzzle.'],
    'a crossword; a crossword puzzle. Contrast: a wordsearch / a quiz. Tutor time / papers. Countable puzzles. Mix-up: cross is the adjective or the mark, not the puzzle.',
    []
  ),
  cutlery: L(
    'Cutlery is knives, forks, and spoons used for eating (UK, often uncountable; US silverware / flatware). Chopsticks are a different eating tool; crockery is plates and cups. Canteens: put the cutlery in the correct tub; a plastic fork is not the default for a hot meal.',
    ['Put the cutlery in the correct tub; a plastic fork is not the default for a hot meal.', 'Cutlery in food tech is counted out and in; a missing knife still goes in the behaviour log.'],
    'cutlery (UK, often uncountable). Contrast: chopsticks / crockery. Canteens / food tech. Mix-up: a cut is a wound or a reduction; cutlery is the tools.',
    []
  ),
}
