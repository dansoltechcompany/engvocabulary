const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1U = {
  'tooth-mug': L(
    'A tooth mug (id: tooth-mug) is the little cup that lives by the bathroom sink for rinsing after you brush. A kitchen mug is for tea; a tooth mug is bathroom kit and often holds the toothbrush as well. US English is more likely to say a cup or a toothbrush holder. Countable: a tooth mug / two tooth mugs.',
    ['Leave the tooth mug on the shelf, not on the wet window sill.', 'We bought a new tooth mug when the old one cracked.'],
    'a tooth mug (UK bathroom). Contrast: a tea mug / a toothbrush holder. Countable.',
    []
  ),
  'train-set': L(
    'A train set (id: train-set) is a toy railway: engine, carriages, and track, often in a box as a gift. A model railway can be a hobby for adults; a train set is usually the children’s toy. Collocation: a wooden / electric train set. Countable: one set, even if there are many pieces inside.',
    ['He laid the train set out on the living-room floor.', 'The train set needs new batteries for the engine.'],
    'a train set. Contrast: a model railway / a toy car. Countable as a set.',
    []
  ),
  'sock-drawer': L(
    'A sock drawer (id: sock-drawer) is the drawer where socks are kept, usually in a chest of drawers. British homes talk about the sock drawer, the pants drawer, the cutlery drawer — the first noun says what belongs there. US dresser is a chest of drawers. Countable: the top sock drawer.',
    ['I found the missing glove in the sock drawer.', 'Keep spare bus tickets in the sock drawer so they do not get washed.'],
    'a sock drawer. Pattern: the X drawer (cutlery drawer, underwear drawer). Countable.',
    []
  ),
  'sink-plug': L(
    'A sink plug (id: sink-plug) is the stopper that fills the plughole so the sink can hold water. Pull the plug out to drain; leave the plug in to fill. A plug on a kettle is electrical — different meaning. UK also says put the plug in. Countable.',
    ['The sink plug has gone down the plughole; we need a new one from the shop.', 'Do not wash paint brushes with the sink plug in, or the water will stain the bowl.'],
    'a sink plug. Contrast: a plughole / an electrical plug. Verb: put the plug in / pull the plug out.',
    []
  ),
  'veg-box': L(
    'A veg box (id: veg-box) is a box of seasonal vegetables, often delivered from a farm or greengrocer (UK veg = vegetables). It is not a cardboard box you happen to keep potatoes in; the phrase names the delivery scheme. Collocation: a weekly veg box. Countable.',
    ['There is too much cabbage in this week’s veg box.', 'We share a veg box with the neighbours to save money.'],
    'a veg box (UK). veg = vegetables (informal). Contrast: a grocery delivery / a fruit bowl.',
    []
  ),
  'washing-line': L(
    'A washing line (id: washing-line) is a rope or wire outdoors for hanging wet clothes (UK). A tumble dryer is the machine; a clothes horse is an indoor folding frame. US clothesline is the usual word. Collocation: hang the washing on the line; bring the washing in if it rains.',
    ['The washing line in the yard is behind the shed.', 'Peg the shirts on the washing line so they do not blow onto the grass.'],
    'a washing line (UK). US: a clothesline. Contrast: a tumble dryer / a clothes horse.',
    ['clothesline']
  ),
  'wheelie-bin': L(
    'A wheelie bin (id: wheelie-bin) is a large outdoor bin on wheels that the council empties (UK). A dustbin can be smaller and un-wheeled; a recycling box is for paper and tins. US trash can / garbage can. Collocation: put the wheelie bin out; the bin men / refuse collectors.',
    ['The black wheelie bin is for rubbish; the green one is garden waste.', 'Do not leave the wheelie bin blocking the pavement after collection.'],
    'a wheelie bin (UK). Contrast: a dustbin / a recycling box. US: trash can.',
    []
  ),
  worktop: L(
    'A worktop is the flat kitchen surface you chop and put appliances on (UK). US countertop or counter. A workbench is for tools in a garage or shed, not food. Collocation: wipe the worktop; a granite / laminate worktop. Countable.',
    ['Do not put a hot pan straight on the worktop without a mat.', 'We ordered a new worktop when we had the kitchen done.'],
    'a worktop (UK). US: a countertop. Contrast: a workbench (tools). Wipe / clear the worktop.',
    ['countertop']
  ),
  'yoga-mat': L(
    'A yoga mat (id: yoga-mat) is a thin non-slip mat for yoga or stretching on the floor. A gym mat is thicker for rolls and jumps; a rug is not grip enough. Collocation: roll up / unroll a yoga mat; bring your own mat to class. Countable.',
    ['She keeps a yoga mat behind the sofa.', 'Wipe the yoga mat after class; sweat makes it slippery next time.'],
    'a yoga mat. Contrast: a gym mat / a rug. roll up / unroll.',
    []
  ),
  tupperware: L(
    'Tupperware began as a brand; in UK kitchens it often means any plastic food box with a lid (like hoover for vacuum). Lunchbox is usually what you take to school or work; tupperware is the family of boxes in the cupboard. Often used as uncountable or with a: some tupperware / a tupperware. Capital T is the brand.',
    ['Stack the tupperware by size or the cupboard will not close.', 'The soup is in a tupperware on the middle shelf.'],
    'tupperware (often generic in UK). Close: a plastic box / a lunchbox. Originally a brand.',
    ['plastic box']
  ),
  'dustbin-liner': L(
    'A dustbin liner (id: dustbin-liner) is the plastic bag that lines a dustbin so you can lift the rubbish out cleanly (UK). A bin liner is the same idea for any bin; a bin bag may be the bag you tie and carry. US trash bag. Tie the liner; do not confuse liner with the bin itself.',
    ['We have run out of dustbin liners, so the bin is messy.', 'Put a new dustbin liner in before the food waste starts to smell.'],
    'a dustbin liner (UK). Close: a bin liner / a bin bag. US: a trash bag.',
    ['bin liner', 'bin bag']
  ),
  'magic-marker': L(
    'A magic marker (id: magic-marker) is a thick felt-tip that writes on boxes, plastic, and paper; people use the brand name for the type of pen. A highlighter is pale and for text; a biro is an everyday ballpoint. US often says marker or Sharpie. Countable.',
    ['Use a magic marker on the cardboard, not a pencil.', 'The magic marker bled through the paper onto the table.'],
    'a magic marker. Contrast: a highlighter / a biro. US: a marker / a Sharpie.',
    ['marker']
  ),
  'trolley-bus': L(
    'A trolley bus (id: trolley-bus) is a bus powered from overhead electric wires, not a diesel bus and not a tram on rails. In everyday UK, trolley on its own is a shopping cart or a hospital cart — so trolley bus needs both words. A few British cities still run them. Countable.',
    ['The old trolley bus museum is open at the weekend.', 'A trolley bus is quieter than a diesel bus on the high street.'],
    'a trolley bus. Contrast: a bus / a tram. Mix-up: a trolley in a supermarket is a shopping cart.',
    []
  ),
  'zip-fastener': L(
    'A zip fastener (id: zip-fastener) is the zip that joins two edges of cloth (UK; usually just a zip). US zipper. Fastener is the general word for buttons, snaps, and zips. Collocation: the zip fastener is stuck / broken; do the zip up. Countable.',
    ['A tailor can replace a zip fastener on a winter coat.', 'The zip fastener on this bag needs a new pull.'],
    'a zip fastener (UK). Everyday: a zip. US: a zipper. Verb: zip up / unzip.',
    ['zip', 'zipper']
  ),
  'waiting-room': L(
    'A waiting room (id: waiting-room) is where you sit until a doctor, dentist, or clerk calls you. A lounge can be more comfortable (airport lounge); a reception is the desk. Collocation: in the waiting room; take a seat. Countable. Hyphen in the id; two words in ordinary spelling.',
    ['The GP waiting room was full of people with colds.', 'There are no plugs in the station waiting room, so charge your phone first.'],
    'a waiting room. Contrast: a lounge / reception. in the waiting room.',
    []
  ),
  'washing-up-liquid': L(
    'Washing-up liquid (id: washing-up-liquid) is the soap for plates and pans (UK, usually uncountable). Washing-up is the job; the liquid is the product. US dish soap / dishwashing liquid. Laundry detergent is for clothes — a common mix-up. A squirt / a drop of washing-up liquid.',
    ['Washing-up liquid in the dishwasher will fill the kitchen with bubbles.', 'We buy own-brand washing-up liquid at the supermarket.'],
    'washing-up liquid (UK, often uncountable). US: dish soap. Contrast: washing powder (clothes).',
    ['dish soap']
  ),
  'water-butt': L(
    'A water butt (id: water-butt) is a garden barrel that collects rain from a drainpipe (UK). A water tank can be indoors or on a roof; a bucket is small and portable. US rain barrel. Collocation: fill / empty the water butt; water the plants from the butt. Countable.',
    ['Connect the water butt to the drainpipe with a diverter kit.', 'The water butt froze solid in January, so we used tap water.'],
    'a water butt (UK). US: a rain barrel. Contrast: a tank / a bucket. Garden rainwater, not drinking water.',
    ['rain barrel']
  ),
  'weather-vane': L(
    'A weather vane (id: weather-vane) is a pointer on a roof that turns to show which way the wind is coming from. A weathercock is often a cockerel-shaped vane on a church. A windsock is the airport tube. Also written weathervane. Countable.',
    ['The weather vane squeaks when the wind changes.', 'They fitted a new weather vane when they had the roof repaired.'],
    'a weather vane. Close: a weathercock. Contrast: a windsock. Shows wind direction, not a forecast.',
    ['weathervane']
  ),
  'wedding-ring': L(
    'A wedding ring (id: wedding-ring) is the ring worn to show you are married, usually on the third finger of the left hand in the UK. An engagement ring is given when you get engaged; a wedding band is the plain hoop, often the same thing. Collocation: wear / take off a wedding ring. Countable.',
    ['He had his wedding ring resized after he lost weight.', 'Do not leave a wedding ring on the sink; it slips down the plughole easily.'],
    'a wedding ring. Close: a wedding band. Contrast: an engagement ring. wear a wedding ring.',
    ['wedding band']
  ),
  'window-sill': L(
    'A window sill (id: window-sill) is the flat shelf at the bottom of a window, inside or outside. Also written windowsill as one word. A window ledge is often the outside edge. Collocation: on the window sill; a plant on the sill. Countable.',
    ['Do not leave bread on the window sill or the birds will make a mess.', 'The indoor window sill is wide enough for two pots of herbs.'],
    'a window sill (also windowsill). Contrast: a window ledge. on the window sill.',
    ['windowsill']
  ),
  'wine-rack': L(
    'A wine rack (id: wine-rack) is a stand or shelf with slots that hold bottles on their sides. A wine cellar is a room; a fridge is colder and upright. Collocation: in the wine rack; a wooden wine rack. Countable as the piece of furniture, not each slot.',
    ['Lay the bottles in the wine rack, not on top of the fridge.', 'The wine rack in the dining room only holds twelve bottles.'],
    'a wine rack. Contrast: a cellar / a fridge. Bottles on their side. Countable stands.',
    []
  ),
  'usb-stick': L(
    'A USB stick (id: usb-stick) is a small memory device that plugs into a computer (UK; also a memory stick or USB flash drive). US flash drive / thumb drive. A hard drive is larger and usually stays in or beside the computer. Collocation: save it on a USB stick; plug the stick in. Countable.',
    ['Back up the coursework on a USB stick as well as in the cloud.', 'I left my USB stick in the library computer.'],
    'a USB stick (UK). Close: a memory stick. US: a flash drive. Contrast: a hard drive.',
    ['memory stick', 'flash drive']
  ),
  'wellington-boot': L(
    'A wellington boot (id: wellington-boot) is a tall rubber boot for mud and rain (UK; usually wellies in the plural). A wellington on its own can mean the same boot. US rubber boot / rain boot. Collocation: a pair of wellington boots; pull your wellies on. Countable.',
    ['Leave your wellington boots in the porch so you do not muddy the carpet.', 'Kids need wellington boots for the park after heavy rain.'],
    'a wellington boot (UK). Everyday: wellies. US: rubber boots. a pair of wellington boots.',
    ['welly']
  ),
  bap: L(
    'A bap is a soft, round bread roll, especially in the north of England and Scotland. A bun can be sweet (iced bun) or a burger bun; a roll is the general word. Collocation: a bacon bap / a breakfast bap — filling inside the bread. Countable.',
    ['Two cheese baps and a tea, please.', 'The bakery sells baps cheaper if you buy six.'],
    'a bap (UK, often northern). Contrast: a bun / a roll. a bacon bap.',
    ['roll']
  ),
  brolly: L(
    'A brolly is informal UK for an umbrella. You take a brolly, put a brolly up, and leave a brolly in the stand by the door. Umbrella is the neutral word at work or in writing. Countable. Not used in US English.',
    ['I always keep a folding brolly in my rucksack.', 'Someone took my brolly from the stand in the café.'],
    'a brolly (UK informal). Neutral: an umbrella. put a brolly up.',
    ['umbrella']
  ),
  butty: L(
    'A butty is a sandwich in informal northern UK English. A chip butty is chips in buttered bread — a well-known café order. Sarnie is another informal word, more southern or general. Sandwich is the standard word. Countable.',
    ['Do you want a jam butty for the train?', 'The café’s bacon butty is better than the toast.'],
    'a butty (UK informal, often northern). Close: a sarnie. Neutral: a sandwich. Extra: a chip butty.',
    ['sandwich', 'sarnie']
  ),
  chippy: L(
    'A chippy is an informal UK shop that sells fish and chips (also a chip shop). Fish and chips is the meal; the chippy is the place. In some regions chippy can also mean a carpenter, but the food shop is the B1 meaning. Collocation: go to the chippy; chippy chips (thick UK chips, not US fries).',
    ['The chippy closes at nine, so we should go now.', 'Friday night is chippy night in our house.'],
    'a chippy (UK informal). Neutral: a chip shop. Mix-up: chips in the UK are thick fried potatoes, not crisps.',
    ['chip shop']
  ),
  fiver: L(
    'A fiver is UK informal for five pounds, often a £5 note. A tenner is ten pounds. You can pay with a fiver or say it costs a fiver. Not used for dollars. Countable: a fiver / two fivers. Pair with quid for other amounts (three quid).',
    ['Can you change a fiver for the bus?', 'The charity shop books are a fiver for a bag.'],
    'a fiver = £5 (UK informal). Related: a tenner (£10), a quid (£1). Not US dollars.',
    []
  ),
  loo: L(
    'The loo is informal UK for a toilet or the room with a toilet. Toilet is more neutral; bathroom in UK often means a room with a bath, so visitors still ask for the loo. US restroom / bathroom. Collocation: go to the loo; the loo is upstairs. Countable.',
    ['The loo on the train is at the end of the carriage.', 'There is a queue for the loo in this pub.'],
    'the loo (UK informal). Neutral: the toilet. US: restroom. go to the loo.',
    ['toilet']
  ),
  nought: L(
    'Nought is the UK name for the number 0 in maths and scores (nought point five = 0.5). US zero is understood everywhere and is safer in science. Phone numbers usually use oh (oh seven…); football scores use nil. Noughts and crosses is the UK name for tic-tac-toe. Pos: number.',
    ['Nought is not the same as nil in a match report.', 'Put nought in the last column if nobody chose that option.'],
    'nought = 0 (UK maths). Phone: oh. Football: nil. US: zero. Game: noughts and crosses.',
    ['zero']
  ),
  'off-licence': L(
    'An off-licence (id: off-licence) is a shop that sells alcohol to take away (UK). The name comes from a licence to sell alcohol for drinking off the premises. A pub sells drinks to have there; a supermarket also sells alcohol but is not called an off-licence. US liquor store. Keep the hyphen in the spelling.',
    ['The off-licence will not sell alcohol to anyone who looks under 25 without ID.', 'We stopped at the off-licence for a bottle of wine on the way to theirs.'],
    'an off-licence (UK, hyphen). US: a liquor store. Contrast: a pub (drink in). Takeaway alcohol.',
    []
  ),
  peckish: L(
    'Peckish means a little hungry, not starving (UK informal). Hungry is the general word; starving is strong and often exaggerated. Collocation: a bit peckish; feel peckish. Not used as a noun. Adjective only here.',
    ['Are you peckish, or can you wait until we get home?', 'I always feel peckish after swimming.'],
    'peckish (UK informal) = a bit hungry. Stronger: starving. a bit peckish.',
    ['hungry']
  ),
  quid: L(
    'A quid is informal UK for one pound sterling. The plural stays quid: five quid, not five quids. A fiver and a tenner are notes; quid is the unit. Not used for dollars or euros. Uncountable in form but used with numbers: twenty quid.',
    ['It is only a few quid on the bus if we go together.', 'He still owes me ten quid from last week.'],
    'a quid = £1. Plural: five quid (not quids). Related: a fiver / a tenner.',
    ['pound']
  ),
  sarnie: L(
    'A sarnie is informal UK for a sandwich. Butty is more northern; sarnie is widely understood. Sandwich is the word for menus and writing. Countable: a cheese sarnie. Often packed for lunch or bought at a café.',
    ['I had a ham sarnie and a cup of tea at my desk.', 'They do a good breakfast sarnie at the station kiosk.'],
    'a sarnie (UK informal). Close: a butty. Neutral: a sandwich.',
    ['sandwich', 'butty']
  ),
  skint: L(
    'Skint means you have no money just now (UK informal). Broke is the closest everyday synonym and works in US English too. Hard up is similar. Collocation: I am skint; skint until payday. Adjective, not a noun (do not say “a skint”).',
    ['We are too skint for a takeaway this week.', 'I cannot lend you anything; I am skint myself.'],
    'skint (UK informal). Close: broke. I am skint (not “I have skint”).',
    ['broke']
  ),
  telly: L(
    'The telly is informal UK for a television. TV is neutral and international; television is more formal. Collocation: watch the telly; on the telly; turn the telly on / off / down. Countable: a new telly. Not used much in US English.',
    ['What is on the telly tonight?', 'We moved the telly so it does not face the window.'],
    'the telly (UK informal). Neutral: the TV. watch / on the telly.',
    ['TV', 'television']
  ),
  tenner: L(
    'A tenner is UK informal for ten pounds, often a £10 note. A fiver is five pounds. Collocation: it costs a tenner; lend me a tenner. Not for dollars. Countable: a tenner / a few tenners.',
    ['Keep a tenner in your coat for a taxi if the last bus has gone.', 'The market stall does three plants for a tenner.'],
    'a tenner = £10 (UK informal). Related: a fiver (£5), a quid (£1).',
    []
  ),
  uni: L(
    'Uni is informal UK for university (go to uni, at uni, start uni). College in the UK is often a sixth-form or further-education college, not university — a US mix-up. University is the full word for forms and essays. Uncountable as the institution in this informal use: at uni, not at a uni unless you mean a particular one.',
    ['She is home from uni for the Easter holidays.', 'He applied to three unis through UCAS.'],
    'uni (UK informal) = university. Mix-up: US college ≠ UK college. at uni / go to uni.',
    ['university']
  ),
  whinge: L(
    'To whinge is to complain in a weak, repeated way that annoys other people (UK informal). Complain is neutral; moan is close; whine is similar but also the sound. Collocation: whinge about the weather / the food. Noun: a whinge is less common than the verb.',
    ['He whinged about the queue the whole way round the shop.', 'Nobody likes a colleague who whinges all morning.'],
    'whinge about + noun (UK informal). Close: moan / complain. Stronger annoyance than complain.',
    ['moan', 'complain']
  ),
  wonky: L(
    'Wonky means not straight, not steady, or not working quite right (UK informal). Crooked is about shape; wobbly is about movement; broken is stronger. Collocation: a wonky table / a wonky picture / wonky Wi-Fi. Adjective.',
    ['The shelf looks wonky because one bracket is loose.', 'My bike wheel is wonky after I hit the kerb.'],
    'wonky (UK informal). Close: wobbly / crooked. Not as strong as broken.',
    ['wobbly']
  ),
  yonks: L(
    'Yonks means a very long time (UK informal). You almost always say for yonks, like for ages. Not used in the singular a yonk in careful speech. Ages and a long time are the neutral pairs. Noun, uncountable in this use.',
    ['I have had this coat for yonks and it still keeps me dry.', 'They moved away yonks ago.'],
    'for yonks (UK informal) = for ages. Neutral: for a long time. Not “a yonk”.',
    ['ages']
  ),
  daft: L(
    'Daft means silly or not sensible (UK informal). Stupid can sound ruder; silly is milder and fine with children. Collocation: a daft idea; do not be daft; a bit daft. Adjective. Daft as a brush is an old idiom meaning very silly.',
    ['It would be daft to leave your bag on the bus seat and walk off.', 'She asked a daft question, then laughed at herself.'],
    'daft (UK informal). Milder: silly. Ruder: stupid. a daft idea / do not be daft.',
    ['silly']
  ),
  dodgy: L(
    'Dodgy means probably dishonest, unsafe, or poor quality (UK informal). Sketchy is a close US informal pair; suspicious is more formal. Collocation: a dodgy character; dodgy wiring; the milk smells dodgy; a dodgy knee (it gives trouble). Adjective.',
    ['I would not eat fish from that dodgy van in the car park.', 'The website looked dodgy, so we paid in the shop instead.'],
    'dodgy (UK informal) = suspect, risky, or poor. Close US: sketchy. a dodgy + noun.',
    []
  ),
  chuffed: L(
    'Chuffed means very pleased (UK informal). Proud can be similar but is about dignity; glad is weaker; delighted is more formal. Collocation: chuffed with a gift / a result; chuffed to bits (very chuffed). Adjective, not a verb (do not say “it chuffed me” in learner English).',
    ['Mum was chuffed with the photo we framed for her.', 'I was chuffed to get a seat on the crowded train.'],
    'chuffed with + noun (UK informal). Stronger: chuffed to bits. Neutral: pleased.',
    ['pleased']
  ),
  gutted: L(
    'Gutted means extremely disappointed (UK informal), as if something has been taken out of you. Devastated is stronger and more formal; disappointed is the classroom word. Collocation: gutted about / that / when. Not the cooking sense (to gut a fish) in this informal use. Adjective.',
    ['We were gutted about the match; we lost in the last minute.', 'He was gutted that the cheap tickets had sold out.'],
    'gutted (UK informal) = very disappointed. gutted about / that / when. Neutral: disappointed.',
    ['disappointed']
  ),
  knackered: L(
    'Knackered means extremely tired, or (of a machine) worn out and useless (UK informal). Exhausted is the neutral pair for people; broken fits machines. Collocation: I am knackered; the washing machine is knackered. Quite informal — avoid in polite emails.',
    ['After the night shift she was completely knackered.', 'This old printer is knackered; we need a new one.'],
    'knackered (UK informal). People: exhausted. Machines: worn out / broken. Avoid in formal writing.',
    ['exhausted']
  ),
  miffed: L(
    'Miffed means slightly annoyed or offended, not furious (UK informal). Cross is a mild UK word; angry is stronger; put out is similar. Collocation: miffed about / that; look miffed. Adjective.',
    ['She was miffed about not being invited to the pub.', 'I felt a bit miffed that nobody replied to my text.'],
    'miffed (UK informal) = a bit annoyed. miffed about / that. Weaker than angry.',
    ['annoyed']
  ),
  naff: L(
    'Naff means unfashionable, cheap-looking, or in poor taste (UK informal). Tacky is a close synonym; uncool is similar for clothes. Collocation: a bit naff; naff souvenirs. Adjective. Not used much in US English.',
    ['The hotel wallpaper was naff, but the bed was comfortable.', 'He said my dancing was naff, which was a bit rude.'],
    'naff (UK informal). Close: tacky. a bit naff. Contrast: stylish / tasteful.',
    ['tacky']
  ),
  sorted: L(
    'Sorted as a UK informal adjective means organised, arranged, or no longer a problem. Get something sorted is the related verb phrase. Collocation: we are sorted; sorted for a lift / tickets / food. Not the classroom past participle of sort in this slang use, though it looks the same.',
    ['Once the boiler is sorted, the house will be warm again.', 'Are the kids sorted for packed lunches tomorrow?'],
    'sorted (UK informal) = ready / arranged. sorted for + noun. Verb phrase: get it sorted.',
    []
  ),
  titchy: L(
    'Titchy means very small (UK informal). Tiny is the general word; wee is Scottish informal. Collocation: a titchy kitchen / a titchy portion. Adjective. Not used in US English. Stronger than small, like tiny.',
    ['They served a titchy salad with the pizza.', 'My old phone had a titchy screen compared with this one.'],
    'titchy (UK informal) = tiny. Neutral: small / tiny. a titchy + noun.',
    ['tiny']
  ),
  clobber: L(
    'Clobber is informal UK for clothes or the gear you wear and carry, often uncountable: hang your clobber up. Kit is closer for sport; clothes is the neutral word. As a verb, clobber can mean hit hard — a different sense. Here the noun is the B1 household word.',
    ['Get your clobber off the stairs before someone trips.', 'I packed too much clobber for a weekend in Leeds.'],
    'clobber (UK informal, often uncountable) = clothes / gear. Neutral: clothes. Verb clobber = hit (separate sense).',
    ['clothes']
  ),
  faff: L(
    'To faff (often faff about / faff around) is to waste time on fiddly, unnecessary jobs (UK informal). Dither is about being unable to decide; delay is more formal. Noun: what a faff = what a bother. Collocation: stop faffing; a bit of a faff.',
    ['It is such a faff to change trains twice with a buggy.', 'We faffed about looking for the keys and missed the bus.'],
    'faff about / around (UK informal). Noun: a faff = a bother. Neutral: waste time / hassle.',
    []
  ),
  gobsmacked: L(
    'Gobsmacked means so surprised you cannot speak (UK informal; gob is mouth). Astonished and stunned are more formal; speechless is close. Collocation: absolutely gobsmacked; gobsmacked when / that. Adjective. Quite strong — not for small surprises.',
    ['We were gobsmacked at the price of a coffee in the station.', 'She was gobsmacked when her name was called as the winner.'],
    'gobsmacked (UK informal) = astonished. absolutely gobsmacked. Neutral: stunned / amazed.',
    ['astonished', 'stunned']
  ),
  nosh: L(
    'Nosh is informal UK for food, often a meal or snack, usually uncountable: some nosh, leftover nosh. Food is the neutral word; grub is similar slang. As a verb, to nosh is to eat — less common than the noun at B1. Not used in US English in this way.',
    ['Let’s get some nosh before the film starts.', 'That café does decent nosh for the price.'],
    'nosh (UK informal, often uncountable) = food. Close: grub. Neutral: food / a meal.',
    ['food', 'grub']
  ),
  rowdy: L(
    'Rowdy means noisy and rough in a way that can bother other people. Loud is only about volume; rowdy adds disorder. Collocation: a rowdy crowd / a rowdy pub / rowdy behaviour. Adjective. Noun a rowdy is rare at B1.',
    ['The football fans were rowdy on the bus back from the match.', 'It is a family hotel, so they do not want rowdy groups late at night.'],
    'rowdy = noisy and disorderly. Contrast: loud (volume only). a rowdy crowd / pub.',
    ['noisy']
  ),
  scoff: L(
    'Scoff has two useful senses. In informal UK, to scoff food is to eat it quickly and hungrily: scoff the biscuits. To scoff at an idea is to mock it as silly (more formal). At B1 the eating sense is the everyday one. Collocation: scoff down a sandwich.',
    ['He scoffed his breakfast and ran for the bus.', 'Do not scoff at her plan until you have heard it.'],
    'scoff (UK informal) = eat greedily. Also: scoff at = mock. Close (eat): wolf down.',
    []
  ),
  bathmat: L(
    'A bathmat is the small mat on the bathroom floor that soaks drips and stops you slipping. A bath towel dries your body; a place mat goes on a dining table. Also written bath mat as two words. Countable.',
    ['Wash the bathmat with the towels on a hot wash.', 'A wet bathmat on a tiled floor is still a slip risk if it folds over.'],
    'a bathmat (also bath mat). Contrast: a bath towel / a place mat. Bathroom floor, not the tub itself.',
    []
  ),
  bedsit: L(
    'A bedsit is a rented room that is both bedroom and sitting room, often with a tiny kitchen corner (UK). A studio flat is usually a self-contained one-room flat with its own bathroom; a bedsit may share a bathroom on the landing. US studio. Countable. Old-fashioned in some cities but still understood.',
    ['The bedsit came with a shared bathroom on the first floor.', 'He saved money by living in a bedsit near the bus route into town.'],
    'a bedsit (UK). Contrast: a studio flat / a flatshare. Often a shared bathroom.',
    []
  ),
  blackcurrant: L(
    'A blackcurrant is a small dark berry, very common in UK squash, jam, and puddings. A blackberry grows on brambles and looks different; a currant in a cake is a dried grape. Ribena is a famous blackcurrant drink brand. Countable berries; uncountable as a flavour: blackcurrant squash.',
    ['Blackcurrant jam goes well with toast and butter.', 'The crumble has apple and blackcurrant in it.'],
    'a blackcurrant. Contrast: a blackberry / a (dried) currant. Flavour: blackcurrant squash.',
    []
  ),
  bunkbed: L(
    'A bunkbed (also bunk bed) is two beds stacked, with a ladder to the top bunk. A single bed is one mattress; a sofa bed folds out. Collocation: the top bunk / the bottom bunk; sleep in a bunkbed. Countable as the piece of furniture.',
    ['She prefers the bottom bunk because she does not like the ladder.', 'We borrowed a bunkbed when the cousins stayed the night.'],
    'a bunkbed (also bunk bed). top bunk / bottom bunk. Contrast: a single bed.',
    ['bunk bed']
  ),
  cafetiere: L(
    'A cafetiere (also spelled cafetière) is a glass or metal coffee pot with a plunger that pushes the grounds down (UK). US French press. A filter coffee machine uses paper; instant is granules in a mug. Collocation: brew coffee in a cafetiere; press the plunger. Countable.',
    ['Rinse the cafetiere soon, or the grounds stick to the mesh.', 'A cafetiere on the table is nicer than mugs of instant for guests.'],
    'a cafetiere (UK; also cafetière). US: a French press. Contrast: a filter machine / instant coffee.',
    ['French press']
  ),
  catflap: L(
    'A catflap (also cat flap) is a small hinged door in a house door so a cat can go in and out. A pet door is a more general US term; a letterbox is for post. Collocation: fit a catflap; lock the catflap at night. Countable.',
    ['We lock the catflap after dark so foxes cannot come in.', 'The kitten was scared of the catflap at first.'],
    'a catflap (also cat flap). US: a pet door. Contrast: a letterbox. lock / fit a catflap.',
    ['cat flap']
  ),
  chapati: L(
    'A chapati is a thin round flatbread, often cooked on a dry hot pan and eaten with curry. Naan is usually thicker and baked in a tandoor; a tortilla is a different tradition. Also spelled chapatti. Countable: two chapatis. Common in UK shops and home cooking.',
    ['Stack the chapatis in a tea towel so they stay soft.', 'She used a chapati to scoop up the dhal.'],
    'a chapati (also chapatti). Contrast: naan / a tortilla. Often with curry. Countable.',
    []
  ),
  conker: L(
    'A conker is the shiny brown nut of a horse chestnut tree, used in the children’s game conkers (UK). A chestnut you eat is a sweet chestnut — different tree. Collocation: play conkers; a conker on a string. Countable. Very British autumn vocabulary.',
    ['Horse chestnut trees drop conkers all over the path in October.', 'He drilled a hole in the conker and threaded it with a shoelace.'],
    'a conker (UK). Game: conkers. Contrast: a sweet chestnut (food). Autumn playground word.',
    []
  ),
  'cooker-hood': L(
    'A cooker hood (id: cooker-hood) is the fan and cover above a cooker that takes away steam and smells (UK). US range hood. An extractor fan may be in a wall or bathroom; the cooker hood is the kitchen unit over the hob. Collocation: switch the cooker hood on. Countable.',
    ['Clean the cooker hood filter or it will stop sucking the steam.', 'The cooker hood light is useful when the kitchen overhead light is too dim.'],
    'a cooker hood (UK). US: a range hood. Contrast: an extractor fan (wall). Over the hob.',
    ['range hood']
  ),
  cornflour: L(
    'Cornflour is fine white flour from maize, used to thicken sauces and custard (UK, usually uncountable). US cornstarch — same product, different name. Plain flour is for baking and will not thicken in the same way. Mix cornflour with cold water first (a paste) before you add it to a hot pan.',
    ['A teaspoon of cornflour will thicken this gravy.', 'US recipes that say cornstarch mean cornflour in a UK shop.'],
    'cornflour (UK, uncountable). US: cornstarch. Contrast: plain flour. Mix with cold water first.',
    ['cornstarch']
  ),
  'cotton-bud': L(
    'A cotton bud (id: cotton-bud) is a short stick with cotton wool on the ends (UK). US cotton swab / Q-tip (brand). Health advice is not to push one deep into the ear. Collocation: a packet of cotton buds. Countable.',
    ['Use a cotton bud to clean the tiny gap round the phone camera.', 'The chemist sells cotton buds next to the plasters.'],
    'a cotton bud (UK). US: a cotton swab. Contrast: cotton wool (the soft pad). Do not push into the ear canal.',
    ['cotton swab']
  ),
  crumpet: L(
    'A crumpet is a thick, round, holey bread cooked on a griddle, then toasted and eaten with butter (UK). An English muffin is closer in shape but different texture; a pancake is fried batter. Collocation: toast a crumpet; butter a crumpet. Countable. Classic British breakfast or tea-time food.',
    ['Crumpets need a toaster or a grill; they are heavy if you eat them cold.', 'He put honey on his crumpet instead of butter.'],
    'a crumpet (UK). Contrast: an English muffin / a pancake. toast / butter a crumpet.',
    []
  ),
  'cul-de-sac': L(
    'A cul-de-sac (id: cul-de-sac) is a short street closed at one end, so cars cannot drive through. A dead end is the same idea in simpler English; a through-road has two exits. Keep the hyphens in British spelling. Countable. Often quiet for children to play.',
    ['Parking is easier in a cul-de-sac because there is no through traffic.', 'Their new house is on a leafy cul-de-sac near the school.'],
    'a cul-de-sac (hyphens). Close: a dead end. Contrast: a through-road. Quiet residential street.',
    ['dead end']
  ),
  custard: L(
    'Custard is a sweet yellow sauce of milk and eggs or powder, poured over puddings (often uncountable). Ice cream is frozen; cream is not cooked or yellow in the same way. Collocation: hot custard; a jug of custard; apple pie and custard. A custard tart is a baked pastry — countable there.',
    ['School dinners in the UK often mean sponge and custard.', 'Stir the custard so it does not go lumpy on the hob.'],
    'custard (often uncountable). Contrast: cream / ice cream. hot custard; pudding and custard.',
    []
  ),
  dandelion: L(
    'A dandelion is a common wild plant with a yellow flower; the seed head is a white clock that blows away. A daisy is smaller and white with a yellow centre. Collocation: a lawn full of dandelions; blow a dandelion clock. Countable. Children learn the word from parks and gardens.',
    ['Pick the dandelions before they turn to seed, or they spread everywhere.', 'She blew a dandelion and made a wish, as kids do.'],
    'a dandelion. Contrast: a daisy. Seed head: a dandelion clock. Countable weeds / wild flowers.',
    []
  ),
  doorstep: L(
    'A doorstep is the step immediately outside a front door: on the doorstep, leave it on the doorstep. Informally, a doorstep sandwich is a very thick one (UK). Doorstep as a verb can mean interview someone on their doorstep — a news sense, not needed at B1. Countable.',
    ['The milk used to be left on the doorstep in glass bottles.', 'He made a doorstep of bread with cheese because he was starving.'],
    'a doorstep. on the doorstep. Extra UK: a doorstep = a very thick sandwich.',
    []
  ),
  drainpipe: L(
    'A drainpipe is the vertical pipe on the outside of a house that takes rainwater down from the gutter. A gutter runs along the roof edge; a sewer is underground. Collocation: a blocked drainpipe; climb a drainpipe (old storybook idea — not a good plan). Countable.',
    ['Leaves have blocked the drainpipe, so water pours over the door.', 'The ladder was leaning against the drainpipe while they cleaned the gutter.'],
    'a drainpipe. Contrast: a gutter (roof edge) / a sewer (underground). Outside rainwater pipe.',
    []
  ),
  'duvet-cover': L(
    'A duvet cover (id: duvet-cover) is the washable case you put a duvet inside (UK). A sheet goes under you; a blanket is a separate layer. US comforter / duvet cover (comforter is the quilt). Collocation: change the duvet cover; put the duvet in the cover. Countable. British duvets are everyday bedding.',
    ['Inside-out the duvet cover first; it is easier to get the corners in.', 'We keep a spare duvet cover in the airing cupboard.'],
    'a duvet cover (UK). Contrast: a sheet / a blanket. US: often a comforter. change the duvet cover.',
    []
  ),
  'elastic-band': L(
    'An elastic band (id: elastic-band) is a small stretchy loop for bundling things (UK). Rubber band is also used in the UK and is the usual US term. A hair band holds hair; an elastic in clothes is sewn in. Collocation: put an elastic band round it. Countable.',
    ['An elastic band snapped and the letters went everywhere.', 'Keep a few elastic bands in the kitchen drawer with the string.'],
    'an elastic band (UK). Close / US: a rubber band. Contrast: a hair band. Countable loops.',
    ['rubber band']
  ),
  fairground: L(
    'A fairground is the outdoor site of a funfair: rides, stalls, and games. A theme park is permanent; a fairground may be temporary on a common or seafront. Collocation: at the fairground; fairground rides. Countable as the place.',
    ['The fairground lights were on until late, and we could hear the music from our street.', 'Do not take drinks on the fairground rides.'],
    'a fairground. Contrast: a theme park (permanent). at the fairground; fairground rides.',
    []
  ),
  fishfinger: L(
    'A fishfinger (also fish finger) is a finger-shaped piece of fish in breadcrumbs (UK). US fish stick. Collocation: fishfinger sandwich; oven-bake fishfingers. Countable. A classic UK children’s tea with peas and chips or bread.',
    ['Fishfingers are better from the oven than the frying pan in this kitchen.', 'He still likes a fishfinger sandwich on white bread.'],
    'a fishfinger (UK; also fish finger). US: a fish stick. Countable. Contrast: a fishcake (round).',
    ['fish finger']
  ),
  flannel: L(
    'A flannel in UK bathrooms is a small cloth for washing your face (US washcloth). Flannel is also a soft brushed fabric for shirts. A sponge is thicker and often synthetic; a towel dries you. Collocation: a face flannel; a warm flannel. Countable as the cloth.',
    ['Each person in the house has a different-coloured flannel.', 'Wring the flannel out so it does not go smelly on the radiator.'],
    'a flannel (UK) = a face cloth. US: a washcloth. Also: flannel fabric. Contrast: a sponge / a towel.',
    ['washcloth']
  ),
  flyover: L(
    'A flyover is a bridge that carries one road over another (UK). US overpass. A bridge over a river is just a bridge; a flyover is specifically road over road (or sometimes rail). Collocation: under the flyover; the ring-road flyover. Countable.',
    ['Graffiti under the flyover is a local landmark, like it or not.', 'Traffic queues on the flyover every morning into town.'],
    'a flyover (UK). US: an overpass. Contrast: a bridge (often over water). under / on the flyover.',
    ['overpass']
  ),
  hob: L(
    'A hob is the flat top of a cooker where pans sit — gas rings or electric zones (UK). US stovetop / cooktop. The oven is the box underneath; the cooker is the whole appliance. Collocation: on the hob; a gas hob / an induction hob; take it off the hob. Countable.',
    ['Do not leave tea towels hanging over a hot hob.', 'An induction hob only heats the pan, so the surface stays cooler.'],
    'a hob (UK). US: a stovetop. Contrast: an oven (inside) / a cooker (the whole unit). on the hob.',
    ['stovetop']
  ),
}
