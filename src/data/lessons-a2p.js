const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_A2P = {
  cabin: L(
    'A cabin is a small room on a ship or plane, or a simple wooden house: a ferry cabin, cabin crew, a log cabin in the hills. Room is the everyday cousin on land. Cabinet is furniture with doors — mix-up. Do not write cabin when you mean cabinet, or cabin vs cab (a taxi).',
    ['The cabin door stuck, so we called a member of the crew.', 'They rented a wooden cabin beside the lake for three nights.'],
    'a ferry / plane cabin; cabin crew. Land cousin: room. Mix-up: cabinet, cab.',
    ['room']
  ),
  coin: L(
    'A coin is metal money: a one-pound coin, pay in coins, toss a coin. Note or banknote is paper money. Change can mean mixed coins. Join means connect — same vowel family, different word. Do not write coin when you mean note, or join.',
    ['The ticket machine takes coins, not cards, after ten.', 'Keep a few coins for the trolley at the supermarket.'],
    'a pound coin / pay in coins. Paper cousin: note. Mix-up: join.',
    []
  ),
  collar: L(
    'A collar is the neck part of a shirt or coat: a shirt collar, turn up your collar, a dog collar. Neck is the body part. Colour is a hue — mix-up in spelling. Caller is someone who phones. Do not write collar when you mean colour, or caller.',
    ['His collar was wet from the rain on the walk to the station.', 'The shop sewed a spare button onto the coat collar.'],
    'a shirt / coat collar; turn up your collar. Mix-up: colour, caller.',
    []
  ),
  cent: L(
    'A cent is a small money unit: fifty cents, one hundred cents in a euro or dollar. Penny is the British cousin for small coins. Sent is the past of send — same sound. Scent is a smell. Do not write cent when you mean sent, or scent.',
    ['The locker needs two euros in cents, not a note.', 'She counted the cents on the café counter before tipping.'],
    'fifty cents / 100 cents = €1 or $1. British cousin: penny. Mix-up: sent, scent.',
    ['penny']
  ),
  interest: L(
    'Interest is wanting to know more, or extra money a bank pays or charges: an interest in art, lose interest, interest on a loan. Interesting describes a thing; people are interested in something. Do not write interest when you mean interesting, or intern.',
    ['His interest in maps started on a walking holiday.', 'The bank letter showed the interest on the student account.'],
    'an interest in + topic; bank interest. People: interested in. Things: interesting.',
    []
  ),
  involved: L(
    'Involved means taking part, or connected: involved in a project, get involved, parents involved in the trip. Involve is the verb. Evolved means changed over time — mix-up. Do not write involved when you mean evolved, or in love as if it were the same.',
    ['Was anyone else involved in booking the hostel rooms?', 'She got involved with the volunteer desk at the museum.'],
    'involved in + activity. Verb: involve. Mix-up: evolved.',
    []
  ),
  inch: L(
    'An inch is a small length unit: an inch of rain, six inches tall, every inch (completely). There are twelve inches in a foot. Centimetre is the metric cousin. Itch is a skin feeling — mix-up. Do not write inch when you mean itch, or foot as if it were the same size.',
    ['Move the suitcase an inch so the aisle is clear.', 'The photo needs to be two inches across for the visa form.'],
    'an inch / twelve inches = one foot. Metric cousin: centimetre. Mix-up: itch.',
    []
  ),
  including: L(
    'Including shows that something is part of a larger set: including breakfast, everyone including the driver, tax including VAT. Include is the verb. Excluding is the opposite. Inclusive is a related adjective. Do not write including when you mean excluding, or conclude.',
    ['All bags, including hand luggage, go through the scanner.', 'The price is £25, including a city map at the desk.'],
    'including breakfast / including tax. Verb: include. Opposite: excluding.',
    []
  ),
  indeed: L(
    'Indeed emphasises truth or strong agreement: very cold indeed, yes indeed, a good idea indeed. Really and certainly are cousins. In deed as two words is not the same. Need is a different word. Do not write indeed when you mean need, or in need.',
    ['The walk was steep indeed, so we stopped for water.', 'Yes indeed — platform four is the one for Brighton.'],
    'very + adjective + indeed; yes indeed. Cousin: really. Mix-up: need.',
    ['really']
  ),
  damp: L(
    'Damp means a little wet, often unpleasantly: a damp towel, damp weather, the walls feel damp. Wet is stronger. Dry is the opposite. Dump means throw away. Damn is a swear word — mix-up. Do not write damp when you mean dump, or damn.',
    ['Hang the coats up; they are still damp from the harbour wind.', 'The basement café smelled damp after the storm.'],
    'a damp towel / damp weather. Stronger: wet. Opposite: dry. Mix-up: dump, damn.',
    []
  ),
  dare: L(
    'Dare means be brave enough, or challenge someone: I dare not go, how dare you, dare to try. How dare you is strong and angry. Dear means loved or expensive. Deer is an animal. Do not write dare when you mean dear, or deer.',
    ['Would you dare to try the night bus on your own?', 'How dare they close the gate before the last visitor left.'],
    'dare to + verb; how dare you. Mix-up: dear, deer.',
    []
  ),
  dawn: L(
    'Dawn is the first light of the day: at dawn, dawn chorus, from dawn to dusk. Sunrise is a close cousin. Dusk is evening light — a useful opposite pair. Down is a direction. Do not write dawn when you mean down, or darn.',
    ['Taxis are cheaper if you reach the airport before dawn.', 'At dawn the square was empty except for street cleaners.'],
    'at dawn / from dawn to dusk. Cousin: sunrise. Opposite time: dusk. Mix-up: down.',
    ['sunrise']
  ),
  dial: L(
    'Dial means press numbers to phone, or (noun) a round face on a clock or old phone: dial 999, dial the hotel, a clock dial. Call is the everyday cousin. Deal means an agreement. Dual means two. Do not write dial when you mean deal, or dual.',
    ['Dial reception from the room phone if the heating fails.', 'She dialled the wrong code and reached another country.'],
    'dial a number / dial 999. Everyday: call. Mix-up: deal, dual.',
    ['call']
  ),
  dig: L(
    'Dig means move earth to make a hole: dig a hole, dig the garden, dig for treasure. Dug is the past. Fig is a fruit. Big is size. Do not write dig when you mean dug as if it were the present, or fig.',
    ['Please do not dig on the beach where the ropes are.', 'They had to dig snow away from the hostel door.'],
    'dig a hole / dig the garden. Past: dug. Mix-up: fig.',
    []
  ),
  dirt: L(
    'Dirt is earth or mud that makes things unclean: wipe off the dirt, a dirt track, covered in dirt. Dirty is the adjective. Soil is garden earth, often more neutral. Flirt is a different word. Do not write dirt when you mean dirty (the adjective), or earth as if every patch were “dirt”.',
    ['There was dirt on the carriage floor after the hike.', 'Brush the dirt from the tent before you pack it.'],
    'wipe off the dirt / a dirt track. Adjective: dirty. Mix-up: dirty as if it were the noun.',
    ['mud']
  ),
  dislike: L(
    'Dislike means not like: dislike crowds, dislike waiting, a strong dislike of. Like is the opposite. Unlike means “different from”, not “not like” as a feeling. Do not write dislike when you mean unlike, or disgust (much stronger).',
    ['I dislike seats with no window on long coach trips.', 'She dislikes spicy food, so we chose a plain omelette.'],
    'dislike + noun / -ing. Opposite: like. Mix-up: unlike (different from).',
    []
  ),
  dozen: L(
    'A dozen is twelve: a dozen eggs, half a dozen, dozens of tourists (informal = lots). Twelve is the number. Doze means sleep lightly — mix-up. Do not write dozen when you mean doze, or thousand as if it were the same size.',
    ['A dozen bottles will not fit in one small rucksack.', 'We asked for half a dozen stamps at the post office.'],
    'a dozen = 12; half a dozen = 6. Informal: dozens of. Mix-up: doze.',
    []
  ),
  embarrass: L(
    'Embarrass means make someone feel awkward: embarrass someone, don’t embarrass me, so embarrassed (adjective). Shame is stronger. Embrace means hug — mix-up. Spelling: double r, double s. Do not write embarrass when you mean embrace, or embassy.',
    ['A loud ringtone will embarrass you in the quiet carriage.', 'He did not mean to embarrass the waiter about the bill.'],
    'embarrass someone; feel embarrassed. Spelling: rr + ss. Mix-up: embrace, embassy.',
    []
  ),
  exact: L(
    'Exact means completely correct: the exact time, an exact copy, exact change. Precise is a cousin. Act is a different word. Extract means take out. Do not write exact when you mean act, or extract.',
    ['I need the exact platform number, not “somewhere over there”.', 'Keep exact change for the rural bus; the driver has no notes.'],
    'the exact time / exact change. Cousin: precise. Mix-up: act, extract.',
    ['precise']
  ),
  excitement: L(
    'Excitement is a happy, energetic feeling: a feeling of excitement, the excitement of take-off, hide your excitement. Exciting describes a thing; excited describes a person. Do not write excitement when you mean exciting, or exercise.',
    ['The children’s excitement grew as the castle came into view.', 'There was little excitement in the waiting room at dawn.'],
    'a feeling of excitement. People: excited. Things: exciting. Mix-up: exercise.',
    []
  ),
  excuse: L(
    'An excuse (noun, /ɪkˈskjuːs/) is a reason for a mistake or delay: a good excuse, no excuse, make an excuse. The verb excuse (/ɪkˈskjuːz/) means forgive, or let someone leave. Accuse means say someone did wrong. Do not write excuse when you mean accuse, or exercise.',
    ['Traffic is a weak excuse if you left the hotel at noon.', 'She made an excuse and stepped out of the noisy café.'],
    'a good excuse (noun /s/). Verb excuse /z/ = forgive / let leave. Mix-up: accuse.',
    []
  ),
  vacation: L(
    'Vacation is time off work or study: on vacation, the summer vacation, university vacation. Holiday is the usual British cousin for a trip away. Vocation is a job you feel called to — mix-up. Vacant means empty. Do not write vacation when you mean vocation, or vacant.',
    ['Campus flats are cheaper outside university vacation.', 'They spent the vacation with cousins near the coast.'],
    'on vacation / university vacation. British everyday: holiday. Mix-up: vocation, vacant.',
    ['holiday']
  ),
  handsome: L(
    'Handsome means good-looking, usually of a man; also large and pleasing: a handsome man, a handsome building, a handsome amount. Beautiful is more often used of women and things. Handy means useful. Hansom is an old cab. Do not write handsome when you mean handy, or beautiful as if the words were always interchangeable.',
    ['A handsome clock stood in the hotel lobby.', 'The guide was a handsome man in a dark coat by the river.'],
    'a handsome man / building. Everyday for women/things: beautiful. Mix-up: handy.',
    []
  ),
  elevator: L(
    'An elevator carries people up and down in a building (especially American English): take the elevator, elevator doors, out of order. Lift is the usual British word. Escalator is moving stairs — mix-up. Do not write elevator when you mean escalator, or lift as if Americans never say elevator.',
    ['The elevator was full, so we used the stairs with the cases.', 'Signs said “elevator” in the US airport, not “lift”.'],
    'take the elevator (US). British: lift. Mix-up: escalator (moving stairs).',
    ['lift']
  ),
  disk: L(
    'A disk is a flat round object, especially computer storage: a hard disk, save it to disk, a disk drive. Disc (c) is the usual British spelling for CDs and DVDs. Desk is furniture. Do not write disk when you mean desk, or disc if you mean a music CD in British English.',
    ['The internet café charged extra to copy files to a disk.', 'Back up the ticket PDF onto a disk before you travel.'],
    'a hard disk / save to disk (computers). British CDs: disc. Mix-up: desk.',
    []
  ),
}
