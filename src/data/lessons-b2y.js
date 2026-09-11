const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2Y = {
  beverage: L(
    'A beverage is a drink, especially in formal, catering, or labelling English: a hot beverage; food and beverages. Drink is the everyday twin; water may be excluded on a menu that lists “beverages” as tea, coffee, and juice. Name the beverage in the nutrition table, then the sugar per 100 ml. Mix-up: beverage vs average; brew (a related headword); do not write beverage for a soup or a medicine unless the source labels it as a drink.',
    ['Name the beverage in the nutrition table, then the sugar per 100 ml, not a brand slogan.', 'Food and beverages featured as a line in the accounts, which is the catering-cost sense.'],
    'a hot / cold beverage; food and beverages. Everyday: drink. Trap: average. Nutrition, catering, and accounts. A drink in formal or label English, not a slogan.',
    ['drink', 'refreshment']
  ),
  biologist: L(
    'A biologist is a scientist who studies living things: a marine biologist; a wildlife biologist. Biology is the subject (already related); naturalist is a close twin, often less lab-based. Name the biologist in the paper, then the species. Mix-up: biologist vs botanist (plants only); zoologist (animals); do not write biologist for a TV presenter with no scientific source.',
    ['Name the biologist in the paper, then the species, not a TV presenter.', 'A marine biologist featured in the coastal case, which is the habitat-specialist sense.'],
    'a marine / wildlife / molecular biologist. Subject: biology. Close: naturalist / botanist / zoologist. Trap: a presenter with no paper. Science and geography. A scientist of living things — name the person and the organism.',
    ['scientist', 'naturalist', 'botanist']
  ),
  bloom: L(
    'To bloom is to produce flowers, or to be in a healthy, successful state; as a noun, the flowers on a plant: in bloom; bloom into. Flower and blossom are close twins; blossom often means fruit-tree flowers. Date when the crop bloomed in the phenology table. Mix-up: bloom vs gloom (already in the dictionary); boom; do not write bloom for a skincare glow with no plant or success in the source.',
    ['Date when the crop bloomed in the phenology table, not a skincare slogan.', 'The movement bloomed after the Act, which is the flourish sense — still name the year.'],
    'in bloom; bloom into; a midsummer bloom. Close: flower / blossom. Trap: gloom / boom. Biology, geography, and history. Produce flowers, or flourish — specify.',
    ['flower', 'blossom', 'flourish']
  ),
  blossom: L(
    'Blossom is the flowers of a fruit tree or similar plant; as a verb, to produce those flowers, or to develop well: apple blossom; blossom into. Bloom is a close twin, often for any flowering; flower is everyday. Map blossom in the orchard case, then the frost date. Mix-up: blossom vs bosom; bloom; do not write blossom for a perfume advert with no tree in the source.',
    ['Map blossom in the orchard case, then the frost date, not a perfume advert.', 'The scheme blossomed into a national programme, which is the develop-well sense — still name the Act.'],
    'apple / cherry blossom; in blossom; blossom into. Close: bloom / flower. Trap: bosom. Geography, biology, and evaluations. Fruit-tree flowers, or to develop well — specify.',
    ['bloom', 'flower', 'flourish']
  ),
  blush: L(
    'To blush is to go red in the face from embarrassment or shyness; as a noun, that redness: blush with; a blush of. Flush is a close twin, often from heat or anger; redden is plainer. A blush in the photograph is not proof of guilt. Mix-up: blush vs brush; flush; do not write blush for a make-up brand unless the source is a cosmetics label.',
    ['A blush in the photograph is not proof of guilt, the jury source said.', 'He blushed at the error in the minutes, which is the embarrassment sense.'],
    'blush with / at; a blush of. Close: flush / redden. Trap: brush. Literature, news, and citizenship. Face-redness from embarrassment, not a cosmetics slogan.',
    ['flush', 'redden', 'colour']
  ),
  bounce: L(
    'To bounce is to spring back from a surface, or to move that way; also (of a cheque) to be refused by a bank: bounce off; a bounce. Rebound is a close physics twin; a bounced cheque is a payments sense. Measure bounce height in the energy practical. Mix-up: bounce vs pounce; bound; do not write bounce for a slogan about “energy” with no collision or payment in the source.',
    ['Measure bounce height in the energy practical, not a trampoline advert.', 'The cheque bounced, the accounts said, which is the refused-payment sense — still name the £ figure.'],
    'bounce off / back; bounce height; a bounced cheque. Physics twin: rebound. Trap: pounce. Science, PE, and accounts. Spring back, or a refused cheque — specify.',
    ['rebound', 'spring', 'ricochet']
  ),
  boxing: L(
    'Boxing is the sport of fighting with the fists in gloves, following rules (usually uncountable): amateur boxing; a boxing bout. Pugilism is dated; sparring is training. Boxing in the PE source still needs a named bout or a safety rule. Mix-up: boxing vs box (the container); Boxing Day (a British public holiday, different sense); do not write boxing for a film fight with no sport source.',
    ['Boxing in the PE source still needs a named bout or a safety rule, not a film poster.', 'Boxing Day featured in the retail table, which is the 26 December holiday — not the sport unless the PE paper says so.'],
    'amateur / professional boxing; a boxing bout / ring. Related: sparring. Trap: box / Boxing Day. PE, news, and history. Gloved-fist sport, not a holiday caption unless dated 26 December.',
    ['pugilism', 'sparring']
  ),
  brew: L(
    'To brew is to make tea, coffee, or beer; also (of trouble) to develop; as a noun, a drink made that way: brew tea; a brew of. Infuse is a close twin for tea; ferment is the beer-science twin. Brew the infusion for the stated minutes in the practical. Mix-up: brew vs brood; brew as a brand; do not write brew for a café slogan with no method time.',
    ['Brew the infusion for the stated minutes in the practical, not a café slogan.', 'Trouble was brewing before the vote, the minutes said, which is the develop sense — still name the motion.'],
    'brew tea / coffee / beer; a home brew; trouble is brewing. Close: infuse / ferment. Trap: brood. Science, food tests, and news. Make a hot drink or beer, or trouble developing — specify.',
    ['infuse', 'ferment', 'steep']
  ),
  bride: L(
    'A bride is a woman on her wedding day, or just before or after it: the bride and groom; a bride-to-be. Groom is the male twin in that pair; spouse is the legal twin after marriage. Name the bride in the parish register, then the year. Mix-up: bride vs bribe; bridle; do not write bride for a magazine caption with no register or named ceremony in the source.',
    ['Name the bride in the parish register, then the year, not a magazine caption.', 'A child bride featured in the human-rights extract, which is the forced-marriage sense — still name the statute.'],
    'the bride and groom; a bride-to-be; bridal. Male twin in the pair: groom. Legal: spouse. Trap: bribe / bridle. History, RS, and citizenship. A woman at marriage — treat the register as a source.',
    ['wife-to-be', 'newly-wed']
  ),
  bronze: L(
    'Bronze is a metal made from copper and tin; also a third-place medal, or a brown colour: a bronze sculpture; a bronze medal. Brass is copper and zinc (a classic trap); copper is the unalloyed metal. Date the bronze in the museum catalogue, then the alloy if given. Mix-up: bronze vs brass; suntan “bronze”; do not write bronze for a paint colour with no Cu–Sn or medal in the source.',
    ['Date the bronze in the museum catalogue, then the alloy if given, not a suntan slogan.', 'A bronze medal featured in the PE results, which is the third-place sense — still name the time.'],
    'a bronze sculpture / Age; a bronze medal; bronze (colour). Alloy: copper + tin. Trap: brass (Cu + Zn). History, chemistry, and PE. A Cu–Sn alloy, a third-place medal, or a colour — specify.',
    ['brass', 'copper', 'medal']
  ),
  bruise: L(
    'A bruise is a dark mark on the skin from a blow; as a verb, to cause or get that mark: a bruise on; bruise easily. Contusion is the medical twin; bump is everyday. A bruise featured in the medical notes; quote the date. Mix-up: bruise vs breeze; cruise (already related); do not write bruise for a cartoon bump with no clinical source.',
    ['A bruise featured in the medical notes; quote the date, not a cartoon bump.', 'Fruit bruises in transit, the food-science practical said, which is the damage-to-produce sense.'],
    'a bruise on; bruise easily; bruising. Medical twin: contusion. Trap: breeze. Health, PE, and food science. A dark mark from a blow, not a comic-strip injury.',
    ['contusion', 'mark', 'injury']
  ),
  burial: L(
    'A burial is the act of placing a dead body in a grave: a burial site; burial at sea. Funeral is the ceremony; interment is a formal twin; cremation is the burning alternative. Date the burial in the parish record, then the plot if named. Mix-up: burial vs barrel (already in the dictionary); berry; do not write burial for a horror caption with no record.',
    ['Date the burial in the parish record, then the plot if named, not a horror caption.', 'A burial mound featured on the OS extract, which is the archaeology sense — still name the period.'],
    'a burial site / ground; burial at sea; burial mound. Ceremony: funeral. Alternative: cremation. Formal: interment. Trap: barrel. History, RS, and geography. Putting a body in a grave — quote the register.',
    ['interment', 'funeral', 'inhumation']
  ),
  giggle: L(
    'To giggle is to laugh in a silly or nervous way; as a noun, that laugh: giggle at; a fit of giggles. Chuckle is quieter amusement; snigger is unkind. A giggle in the transcript is not a finding; still code the turn. Mix-up: giggle vs gig (already in the dictionary); jiggle; do not treat a giggle as proof of an attitude without the named line.',
    ['A giggle in the transcript is not a finding; still code the turn, the methods brief said.', 'Nervous giggles featured in the interview notes, which is the unease sense — still quote the question.'],
    'giggle at; a fit of giggles; giggling. Close: chuckle / titter. Unkind: snigger. Trap: gig / jiggle. Methods, literature, and media. A silly or nervous laugh, not a cartoon sound.',
    ['chuckle', 'titter', 'snigger']
  ),
  grove: L(
    'A grove is a small group of trees, often of one kind: an olive grove; a beech grove. Wood and copse are close twins; a forest is larger. Map the olive grove on the OS extract, then the irrigation source. Mix-up: grove vs groove; grave; do not write grove for a single street tree or a supermarket aisle of plants.',
    ['Map the olive grove on the OS extract, then the irrigation source.', 'A sacred grove featured in the RS extract, which is the ritual-wood sense — still name the culture.'],
    'an olive / orange / beech grove; a sacred grove. Close: copse / wood. Larger: forest. Trap: groove / grave. Geography, biology, and RS. A small group of trees, often of one kind.',
    ['copse', 'wood', 'orchard']
  ),
  gaiety: L(
    'Gaiety is a lively, cheerful atmosphere (usually uncountable; rather formal or literary): public gaiety; a mood of gaiety. Cheerfulness and merriment are close twins; gay as “cheerful” is dated in this sense. Gaiety in the memoir still needs a named event. Mix-up: gaiety vs galaxy; gay as a modern identity word (different sense); do not write gaiety for a party slogan with no source event.',
    ['Gaiety in the memoir still needs a named event, not a party slogan.', 'Post-war gaiety in the source still needs a named shortage or a ration end-date, which is the history sense.'],
    'public / forced gaiety; a mood of gaiety. Close: cheerfulness / merriment. Trap: galaxy / modern gay. Literature, history, and news. Lively cheerfulness — name the occasion.',
    ['cheerfulness', 'merriment', 'festivity']
  ),
  gangster: L(
    'A gangster is a member of a violent organised-crime group: a gangster trial; gangster violence. Criminal is broader; mobster is a US twin. Name the gangster in the trial report, then the charge. Mix-up: gangster vs youngster; gang as a looser group; do not write gangster for a film plot with no court or named statute in the source.',
    ['Name the gangster in the trial report, then the charge, not a film plot.', 'Gangster violence featured in the inquiry, which is the organised-crime sense — still quote the year.'],
    'a gangster trial; organised-crime / gangster violence. Broader: criminal. US twin: mobster. Trap: a film title. Citizenship, history, and news. A member of a violent crime group — name the charge.',
    ['criminal', 'mobster', 'racketeer']
  ),
  caffeine: L(
    'Caffeine is a stimulant found in coffee, tea, and some soft drinks (usually uncountable): caffeine content; milligrams of caffeine. Stimulant is the class; theophylline is a related tea compound. Quote caffeine in milligrams on the label. Mix-up: caffeine vs caffine (misspelling); decaf as a marketing label with no mg figure; do not write caffeine for “energy” as a mood with no dose.',
    ['Quote caffeine in milligrams on the label, the nutrition paper said.', 'Caffeine in the sleep study still needs the dose and the time, which is the methods sense.'],
    'caffeine content / intake; mg of caffeine; caffeinated / decaffeinated. Class: stimulant. Trap: caffine. Nutrition, biology, and health. A stimulant in coffee and tea — quote the milligrams.',
    ['stimulant', 'coffee', 'theine']
  ),
  calf: L(
    'A calf is a young cow, or the back of the lower leg (plural calves): a newborn calf; a calf muscle. Cow and heifer are related farm terms; shin is the front of the lower leg. Weigh the calf in the livestock table. Mix-up: calf vs half; calve (the verb: to give birth to a calf); do not write calf for an adult cow in the source.',
    ['Weigh the calf in the livestock table; a calf strain featured in the PE case.', 'Icebergs calve from the glacier, the geography paper said, which is the verb sense for ice — not the farm animal unless the livestock table says so.'],
    'a newborn calf; calves (plural); calf muscle / strain. Verb: calve. Trap: half. Biology, geography, and PE. A young cow, or the back of the lower leg — specify.',
    ['heifer', 'young cow', 'gastrocnemius']
  ),
  cane: L(
    'A cane is the hollow stem of plants such as sugar cane or bamboo; also a walking stick: sugar cane; a white cane. Stick and staff are close twins for the walking sense; sugar beet is a different crop. Map sugar cane in the plantation case, then the export figure. Mix-up: cane vs Cain; candy; do not write cane for a sweet slogan with no crop or mobility aid in the source.',
    ['Map sugar cane in the plantation case, then the export figure, not a sweet slogan.', 'A white cane featured in the access audit, which is the mobility-aid sense — still name the standard.'],
    'sugar cane; a walking / white cane; cane sugar. Crop twin: sugar beet. Trap: Cain. Geography, history, and citizenship. A plant stem, or a walking stick — specify.',
    ['stick', 'staff', 'bamboo']
  ),
  cannon: L(
    'A cannon is a large, heavy gun, formerly on ships or in forts (plural often unchanged: cannon): a cannon ball; naval cannon. Gun and artillery are broader; a canon (one n) is a rule or a church post — same pronunciation, different spelling. Date the cannon in the fort inventory. Mix-up: cannon vs canon; canyon; do not write cannon for a firework or a sports “cannon” kick unless the source uses that metaphor.',
    ['Date the cannon in the fort inventory, not a fireworks caption.', 'The literary canon featured in the English paper, which is the one-n sense — not the gun.'],
    'a cannon; naval / field cannon; cannon ball (historic). Broader: artillery. Homophone: canon (rule / church post). Trap: canyon. History and English. A large heavy gun — do not confuse with canon.',
    ['artillery', 'gun', 'howitzer']
  ),
  canoe: L(
    'A canoe is a light, narrow boat, pointed at both ends, moved with a paddle: a canoe trip; canoeing. Kayak is a close twin, usually closed-deck; dinghy is a small open boat. Time the canoe in the PE fixture, then name the river. Mix-up: canoe vs canon; canal; do not write canoe for a holiday brochure with no named water or time.',
    ['Time the canoe in the PE fixture, then name the river, not a holiday brochure.', 'Canoe traffic featured in the waterways case, which is the geography sense — still map the lock.'],
    'a canoe; go canoeing; a canoe paddle. Close: kayak / dinghy. Trap: canon / canal. PE and geography. A light paddle boat, not a cruise slogan.',
    ['kayak', 'dinghy', 'paddle boat']
  ),
  cape: L(
    'A cape is a sleeveless cloak; also a piece of land jutting into the sea: Cape Town; a cape over the shoulders. Headland, promontory, and peninsula are geography twins; cloak and mantle are clothing twins. Map the cape on the OS extract, then the lighthouse. Mix-up: cape vs cap; Cape as a brand; do not write cape for a hat or for an inland hill with no coast in the source.',
    ['Map the cape on the OS extract, then the lighthouse; a cape in the costume plot is the cloak.', 'The Cape of Good Hope featured in the voyage source, which is the headland sense — still name the year.'],
    'Cape + place-name; a headland / cape; a sleeveless cape. Geography twins: headland / promontory. Clothing: cloak. Trap: cap. Geography, history, and drama. A headland, or a sleeveless cloak — specify.',
    ['headland', 'promontory', 'cloak']
  ),
  carbohydrate: L(
    'A carbohydrate is a compound of carbon, hydrogen, and oxygen that is a source of energy in food (often carbohydrates): carbohydrate per 100 g; complex carbohydrates. Sugar and starch are types; protein and fat are the other macronutrients. Quote carbohydrate per 100 g from the table. Mix-up: carbohydrate vs carbon hydrate as two words; calorie (already related); do not write carbohydrate for a diet slogan with no table figure.',
    ['Quote carbohydrate per 100 g from the table, not a diet slogan.', 'Starch is a carbohydrate in the digestion practical, which is the biochemistry sense — still name the test.'],
    'carbohydrate per 100 g; simple / complex carbohydrates; CHO. Types: sugar / starch. Other macros: protein / fat. Trap: a slogan with no figure. Nutrition, biology, and chemistry. A food-energy compound — quote the grams.',
    ['starch', 'sugar', 'saccharide']
  ),
  carnival: L(
    'A carnival is a public festival with music, processions, and often costumes: a street carnival; carnival season. Festival and parade are close twins; fete is a British local fundraising day. Date the carnival in the civic source, then the crowd figure. Mix-up: carnival vs carnal; caravan; do not write carnival for a fairground slogan with no civic date.',
    ['Date the carnival in the civic source, then the crowd figure, not a fairground slogan.', 'Notting Hill Carnival featured in the citizenship case, which is the named-festival sense — still quote the year.'],
    'a street carnival; carnival season / procession. Close: festival / parade / fete. Trap: carnal / caravan. Citizenship, geography, and media. A public festival with processions — name the place and the crowd figure.',
    ['festival', 'parade', 'fete']
  ),
  carpenter: L(
    'A carpenter is a person whose job is to make and repair wooden structures: a carpenter’s wage; carpenter in the census. Joiner is a close British twin, often finer indoor work; builder is broader. Name the carpenter in the wage table, then the trade. Mix-up: carpenter vs carpet; car park; do not write carpenter for a furniture brand with no named worker.',
    ['Name the carpenter in the wage table, then the trade, not a furniture brand.', 'A ship’s carpenter featured in the voyage log, which is the historic-trade sense.'],
    'a carpenter; carpenter’s wage / shop; carpentry. Close: joiner. Broader: builder. Trap: carpet. History, citizenship, and design. A wood-trade worker — treat the census as a source.',
    ['joiner', 'woodworker', 'builder']
  ),
  carve: L(
    'To carve is to cut a solid material into a shape, or to cut meat; also to create a role or career (carve out): carve a niche; carved in stone. Sculpt is a close twin for art; slice is everyday for meat. Date the carved inscription, then the stone type. Mix-up: carve vs crave (already in the dictionary); curve; do not write carve for a logo slogan with no material or named role.',
    ['Date the carved inscription, then the stone type, the history paper said.', 'She carved out a role on the committee, the minutes said, which is the career sense — still name the post.'],
    'carve a statue / inscription; carve meat; carve out a niche / role. Close: sculpt / engrave. Trap: crave / curve. History, art, and citizenship. Cut a shape, cut meat, or create a role — specify.',
    ['sculpt', 'engrave', 'cut']
  ),
  casino: L(
    'A casino is a building where people gamble on games of chance: a casino licence; casino revenue. Gambling house is plainer; betting shop is a British high-street twin for wagers, not usually tables. A casino in the planning case still needs a named licence. Mix-up: casino vs cassino (a card game); cassava; do not write casino for a travel slogan with no planning or tax figure.',
    ['A casino in the planning case still needs a named licence, not a travel slogan.', 'Casino revenue featured in the accounts extract, which is the tax-base sense — still quote the £ figure.'],
    'a casino licence / tax; casino revenue. Close: gambling house. Related: betting shop. Trap: cassino. Citizenship, geography, and accounts. A gambling building — name the licence and the figure.',
    ['gambling house', 'gaming club']
  ),
  cassette: L(
    'A cassette is a small plastic case of tape for recording sound or video: a cassette tape; a cassette recorder. Tape is the medium; CD and vinyl are other physical formats. Date the cassette in the archive catalogue. Mix-up: cassette vs casette (misspelling); closet; do not write cassette for a streaming slogan with no archive object.',
    ['Date the cassette in the archive catalogue, not a streaming slogan.', 'An oral-history cassette featured in the methods brief, which is the primary-source sense — still name the interviewee if given.'],
    'a cassette tape / recorder; compact cassette. Medium: tape. Later formats: CD / vinyl (different). Trap: casette. History, media, and methods. A small case of recording tape — date the object.',
    ['tape', 'cartridge', 'recording']
  ),
  champagne: L(
    'Champagne is a sparkling white wine from the Champagne region of France (often uncountable as a type): a glass of champagne; champagne in the accounts. Sparkling wine is the broader class; prosecco is another regional type. Champagne in the accounts is still a line item; name the £ figure. Mix-up: champagne vs campaign (already related); Champagne the place; do not write champagne for a toast slogan with no cost or origin in the source.',
    ['Champagne in the accounts is still a line item; name the £ figure, not a toast slogan.', 'The Champagne region featured in the AOC case, which is the geography-of-origin sense — still name the protected term.'],
    'a glass of champagne; champagne (uncountable type); Champagne (region). Broader: sparkling wine. Trap: campaign. Accounts, geography, and RS (celebration sources). Sparkling wine from that region — quote the £ or the AOC.',
    ['sparkling wine', 'prosecco', 'fizz']
  ),
  chapel: L(
    'A chapel is a small building or room for Christian worship, often in a school, hospital, or large church: a college chapel; a chapel of rest. Church is larger and often parish-based; oratory is a private prayer room. Map the chapel on the site plan, then the denomination if given. Mix-up: chapel vs chaplain (the person); couple; do not write chapel for a concert hall with no worship use in the source.',
    ['Map the chapel on the site plan, then the denomination if given, the RS paper said.', 'A chapel of rest featured in the funeral source, which is the mortuary sense — still name the provider.'],
    'a college / hospital chapel; a chapel of rest; chapel (adj.). Larger: church. Person: chaplain. Trap: couple. RS, history, and site plans. A small place of Christian worship — map it.',
    ['church', 'oratory', 'sanctuary']
  ),
  cheer: L(
    'To cheer is to shout in support or praise; as a noun, that shout, or a mood of happiness (often cheers): cheer for; three cheers. Applaud is a close twin for clapping; encourage is broader. The gallery cheered the verdict; still quote the vote. Mix-up: cheer vs chair; cheerful (already related); do not write cheer for a slogan with no named crowd or vote.',
    ['The gallery cheered the verdict; still quote the vote, the minutes said.', 'Christmas cheer in the memoir still needs a named shortage or a ration, which is the mood sense in history.'],
    'cheer for / on; three cheers; cheers (informal thanks / a toast). Close: applaud / encourage. Trap: chair. Citizenship, PE, and literature. A shout of support, or a happy mood — specify.',
    ['applaud', 'encourage', 'acclaim']
  ),
  chew: L(
    'To chew is to break food between the teeth; chew over means to think about something slowly: chew food; chew over the evidence. Masticate is the biology twin; ponder is the thinking twin. Chew over the conflicting sources, the history tutor said. Mix-up: chew vs eschew; cue; do not write chew for a gum advert with no digestion or evaluation in the source.',
    ['Chew over the conflicting sources, the history tutor said; still name the year.', 'Mastication featured in the digestion practical, which is the chew-food sense — still name the enzyme if asked.'],
    'chew food; chew over / on; chewing. Biology twin: masticate. Thinking twin: ponder. Trap: eschew. Biology, methods, and history. Break food with the teeth, or think something over — specify.',
    ['masticate', 'ponder', 'mull over']
  ),
  chord: L(
    'A chord is a group of notes played together; also (in maths) a straight line joining two points on a curve: a major chord; a chord of a circle. Harmony is related in music; a cord (no h) is string or wire — a classic spelling trap, often the same sound. Name the chord in the score. Mix-up: chord vs cord; cored; do not write chord for a headphone cable.',
    ['Name the chord in the score; a chord of the circle featured in the maths paper.', 'A power cord featured in the safety brief, which is the no-h electrical sense — not the music chord.'],
    'a major / minor chord; chord sequence; a chord of a circle. Music twin: harmony. Spelling trap: cord (string / flex). Maths and music. Notes together, or a line across a curve — specify; never cord for the music sense.',
    ['harmony', 'triad', 'interval']
  ),
  clasp: L(
    'To clasp is to hold tightly; as a noun, a fastener that holds two parts together: clasp hands; a gold clasp. Grip and clutch are close twins for the hold; buckle and catch are fastener twins. A gold clasp featured in the hoard catalogue. Mix-up: clasp vs class; gasp (already in the dictionary); do not write clasp for a slogan hug with no named object or witness line.',
    ['A gold clasp featured in the hoard catalogue; she clasped the rail in the witness statement.', 'Clasp the hands in the first-aid diagram only if the source shows that grip, which is the hold sense.'],
    'clasp hands / a rail; a gold / belt clasp. Hold twins: grip / clutch. Fastener: buckle / catch. Trap: class / gasp. History, archaeology, and first aid. Hold tightly, or a fastener — specify.',
    ['grip', 'clutch', 'fastener']
  ),
  claw: L(
    'A claw is a sharp curved nail on an animal’s foot; as a verb, to scratch with that; claw back means recover money: a claw mark; claw back tax. Talon is a bird-of-prey twin; nail is human. Label the claw on the classification diagram. Mix-up: claw vs clause; clay (a nearby headword); do not write claw for a horror caption with no taxonomy or accounts sense.',
    ['Label the claw on the classification diagram, not a horror caption.', 'The Treasury clawed back the overpay, the accounts said, which is the recover-money sense — still quote the £ figure.'],
    'a claw mark; claw at; claw back + noun. Bird twin: talon. Trap: clause / clay. Biology and accounts. A sharp animal nail, a scratch, or recovered money — specify.',
    ['talon', 'nail', 'pincer']
  ),
  clay: L(
    'Clay is a heavy, sticky soil that can be shaped when wet and hardened by heat (usually uncountable): clay soil; a clay pot. Loam and silt are other soil textures; ceramic is the fired-material twin. Test the clay content in the soil practical, then name the horizon. Mix-up: clay vs claw; claim; do not write clay for a spa slogan with no particle-size or firing in the source.',
    ['Test the clay content in the soil practical, then name the horizon.', 'Fired clay featured in the archaeology catalogue, which is the ceramic sense — still date the sherd.'],
    'clay soil / content; a clay pot / tablet; clayey. Textures: silt / loam / sand. Fired twin: ceramic. Trap: claw. Geography, chemistry, and history. Sticky soil for pottery and bricks — quote the test.',
    ['loam', 'silt', 'ceramic']
  ),
  clockwise: L(
    'Clockwise means in the same direction as the hands of a clock; as an adjective, moving that way: turn clockwise; a clockwise rotation. Anticlockwise (British) is the opposite; counterclockwise is the US twin. Turn the tap clockwise in the practical if the diagram says so. Mix-up: clockwise vs clack; wise as “sensible”; do not write clockwise for “later in the day” with no rotation.',
    ['Turn the tap clockwise in the practical if the diagram says so; anticlockwise is the opposite.', 'A clockwise depression featured on the synoptic chart in the southern hemisphere case, which is the rotation sense — still name the hemisphere.'],
    'turn / rotate clockwise; a clockwise arrow. Opposite (UK): anticlockwise. US: counterclockwise. Trap: “later”. Science, geography, and DT. In the direction of clock hands, not a time of day.',
    ['right-handed', 'rotary']
  ),
  collector: L(
    'A collector is a person who gathers objects as a hobby or job, or who collects money or tickets: a ticket collector; a tax collector. Curator is a museum twin; hobbyist is weaker. Name the collector in the museum gift, then the accession number. Mix-up: collector vs connector; collection (the set of objects); do not write collector for a brand of boxed sets with no named person.',
    ['Name the collector in the museum gift, then the accession number.', 'A ticket collector featured in the transport source, which is the fare sense — still name the operator.'],
    'a ticket / tax / art collector; collector of + noun. Museum twin: curator. Related: collection. Trap: connector. History, museums, and transport. Someone who gathers objects, money, or tickets — name the person.',
    ['curator', 'gatherer', 'hobbyist']
  ),
  complicate: L(
    'To complicate is to make something more difficult to understand or deal with: complicate matters; be complicated by. Complex is the adjective twin (already related); simplify is the opposite. Do not complicate the method; still log every step. Mix-up: complicate vs compliment; complete; do not write complicate for “make more interesting” when the source only means extra steps.',
    ['Do not complicate the method; still log every step, the practical said.', 'Flooding complicated the evacuation, the inquiry said, which is the extra-obstacle sense — still name the authority.'],
    'complicate matters; be complicated by; complication. Adjective: complicated / complex. Opposite: simplify. Trap: compliment. Methods, news, and citizenship. Make something more difficult, not “more exciting”.',
    ['confuse', 'entangle', 'muddy']
  ),
  composer: L(
    'A composer is a person who writes music: a composer of; name the composer. Songwriter is a close twin, often for popular song; arranger adapts existing music. Name the composer in the programme note, then the year of the work. Mix-up: composer vs compositor (a typesetter); composition (the work); do not write composer for a streaming slogan with no named work.',
    ['Name the composer in the programme note, then the year of the work.', 'A court composer featured in the history extract, which is the patronage sense — still name the monarch if given.'],
    'a composer of; name the composer; compositional. Close: songwriter / arranger. Trap: compositor. Music, history, and RS. A person who writes music — name the work and the year.',
    ['songwriter', 'musician', 'arranger']
  ),
  conception: L(
    'Conception is an idea of what something is or should be; also the start of pregnancy (formal): a conception of justice; at conception. Concept is a close twin for the idea; understanding is broader. A new conception of citizenship still needs a named statute. Mix-up: conception vs contraception; exception; do not write conception for a slogan “vision” with no named idea or biology in the source.',
    ['A new conception of citizenship still needs a named statute, the paper said.', 'Date of conception featured in the case notes, which is the pregnancy sense — quote the medical source, not a gossip column.'],
    'a conception of; beyond / at conception. Close (idea): concept / notion. Biology: start of pregnancy. Trap: contraception. Citizenship, philosophy, and biology. An idea, or the start of pregnancy — specify.',
    ['concept', 'notion', 'idea']
  ),
  conductor: L(
    'A conductor is a person who directs an orchestra, or a material that allows heat or electricity to pass; also a person who collects fares on a bus: a bus conductor; an electrical conductor. Insulator is the materials opposite; director is a looser music twin. Copper is a conductor in the circuit practical. Mix-up: conductor vs conduit; conductor vs compositor; do not write conductor for a playlist slogan with no named person or material.',
    ['Copper is a conductor in the circuit practical; name the conductor in the concert review — specify.', 'A bus conductor featured in the transport memoir, which is the fare-collector sense — still name the route if given.'],
    'an orchestra / bus conductor; an electrical / thermal conductor. Opposite (physics): insulator. Trap: conduit. Physics, music, and transport. A director of musicians, a fare collector, or a material that carries current — specify.',
    ['director', 'maestro', 'fare collector']
  ),
  confession: L(
    'A confession is a statement that you have done something wrong, or (in some churches) the act of admitting sins: a confession of; confession to the police. Admission and acknowledgement are close twins; a plea is the court twin. A confession in the police source still needs the caution named. Mix-up: confession vs confusion; concession; do not write confession for a celebrity interview with no caution or liturgy in the source.',
    ['A confession in the police source still needs the caution named, the citizenship paper said.', 'A confession in the RS extract is the sacrament sense — still name the denomination if given.'],
    'a confession of / to; make a confession; confession (church). Close: admission / plea. Trap: confusion / concession. Citizenship, RS, and history. Admitting a wrong, or a church rite — name the caution or the liturgy.',
    ['admission', 'acknowledgement', 'plea']
  ),
  congratulate: L(
    'To congratulate is to tell someone you are pleased about their success or good luck: congratulate on; congratulations. Praise is broader; felicitate is dated and formal. Congratulate the winner in the minutes; still record the vote. Mix-up: congratulate vs congregate; graduations; do not write congratulate for a slogan with no named success.',
    ['Congratulate the winner in the minutes; still record the vote, the clerk said.', 'The board sent congratulations on the award, the letter said, which is the noun sense — still name the body.'],
    'congratulate someone on; congratulations. Close: praise / commend. Trap: congregate. Citizenship, news, and letters. Tell someone you are pleased about a named success, not a greeting-card slogan.',
    ['praise', 'commend', 'felicitate']
  ),
  considerably: L(
    'Considerably means to a large degree; much: considerably more; vary considerably. Significantly is a close twin in data English; rather is weaker. Costs rose considerably; still quote the £ figure. Mix-up: considerably vs considerately (kindly); considerable (the adjective, already in the dictionary); do not write considerably for a tiny change with no evidence.',
    ['Costs rose considerably; still quote the £ figure, the accounts said.', 'Marks varied considerably across centres, the report said, which is the spread sense — still quote the range.'],
    'considerably more / less / better; vary considerably. Adjective: considerable. Close: significantly / substantially. Trap: considerately. Accounts, science, and evaluations. To a large degree — quote the figure.',
    ['significantly', 'substantially', 'markedly']
  ),
  constitutional: L(
    'Constitutional means relating to a constitution, or allowed by it; as an old-fashioned noun, a walk for health: a constitutional crisis; a constitutional monarch. Legal and statutory are related; unconstitutional is the opposite. A constitutional crisis still needs a named convention. Mix-up: constitutional vs constituent; conscription; do not write constitutional for a fitness slogan unless the source is that dated walk.',
    ['A constitutional crisis still needs a named convention, the citizenship paper said.', 'A constitutional monarch featured in the comparative source, which is the limited-monarchy sense — still name the state.'],
    'a constitutional crisis / right / monarch; unconstitutional. Related: statutory / legal. Dated noun: a walk. Trap: constituent. Citizenship and history. Of a constitution, or allowed by it — name the convention or the clause.',
    ['statutory', 'legal', 'chartered']
  ),
  continental: L(
    'Continental means relating to a continent, especially mainland Europe from a British viewpoint; also a style of breakfast: a continental climate; continental Europe. Insular is a contrast from Britain; intercontinental is between continents. A continental climate featured in the geography paper. Mix-up: continental vs complimentary; continent (the noun); do not write continental for a hotel breakfast slogan unless the catering source uses that menu term.',
    ['A continental climate featured in the geography paper, not a hotel breakfast slogan unless the source is catering.', 'Continental drift featured in the plate-tectonics topic, which is the earth-science sense — still name the evidence.'],
    'continental Europe / climate / crust; a continental breakfast (menu). Contrast: insular / maritime. Trap: complimentary. Geography and catering. Of a continent, or of mainland Europe — specify.',
    ['mainland', 'European', 'intercontinental']
  ),
  coordination: L(
    'Coordination is the organisation of people or parts so that they work together; also the control of muscles (usually uncountable): coordination of; hand–eye coordination. Co-operation is a close twin for willing help; organisation is broader. Coordination of the agencies still needs a named chair. Mix-up: coordination vs coincidence; subordination (grammar); do not write coordination for a PE slogan with no named body or test.',
    ['Coordination of the agencies still needs a named chair, the inquiry said.', 'Hand–eye coordination featured in the PE practical, which is the muscle-control sense — still name the test.'],
    'coordination of; poor / good coordination; hand–eye coordination. Close: co-operation / organisation. Grammar trap: subordination. Citizenship, PE, and methods. Organising parts to work together, or muscle control — specify.',
    ['organisation', 'co-operation', 'liaison']
  ),
  cop: L(
    'A cop is a police officer (informal); cop out means to avoid a duty: a traffic cop; cop out of. Officer and constable are the formal British twins; copper is a related informal twin (also the metal). A cop in the transcript is still a police officer; name the force. Mix-up: cop vs coppice; copy; do not write cop for a TV series title with no force named.',
    ['A cop in the transcript is still a police officer; name the force, not a TV series.', 'Ministers copped out of the vote, the sketch said, which is the avoid-duty sense — still name the division.'],
    'a traffic cop; cop out (of). Formal: police officer / constable. Related informal: copper. Trap: copy. Citizenship and media. Informal police officer, or to avoid a duty — specify; still name the force.',
    ['officer', 'constable', 'police']
  ),
  copper: L(
    'Copper is a reddish-brown metal (symbol Cu), used in wires and coins; also (informal) a police officer: copper wire; a copper. Bronze is copper and tin; brass is copper and zinc. Copper is a conductor in the circuit practical; quote the atomic number if the paper asks. Mix-up: copper vs cop (informal police); hopper; do not write copper for a hair-colour slogan with no Cu or force in the source.',
    ['Copper is a conductor in the circuit practical; quote the atomic number if the paper asks.', 'A copper in the memoir is the informal police sense — still name the force if given.'],
    'copper wire / ore; symbol Cu; a copper (informal officer). Alloys: bronze / brass. Trap: a hair dye. Chemistry, physics, and history. The metal Cu, or informal police — specify.',
    ['Cu', 'metal', 'officer']
  ),
  cord: L(
    'A cord is a thick string, or a flexible electrical wire; the spinal cord is the nerve bundle in the spine: an electrical cord; spinal cord. Rope is thicker; flex is a British twin for electrical cable; chord (with h) is music or maths. Label the spinal cord on the diagram. Mix-up: cord vs chord; cored; do not write cord for a music harmony.',
    ['Label the spinal cord on the diagram, not a headphone brand.', 'A chord in the score is the music sense (with h), which is not this headword.'],
    'an electrical cord / flex; spinal cord; a length of cord. Thicker: rope. Spelling trap: chord. Biology and DT. Thick string, an electrical flex, or the spinal cord — never the music chord.',
    ['flex', 'rope', 'string']
  ),
  cork: L(
    'Cork is a light, waterproof material from the bark of the cork oak; also a stopper made from it: a cork stopper; cork flooring. Bung and stopper are close twins for the plug; bark is the broader plant tissue. Cork in the materials test still needs density. Mix-up: cork vs pork; Cork (the Irish city/county); do not write cork for a wine slogan with no density or named oak.',
    ['Cork in the materials test still needs density, not a wine slogan.', 'Cork the city featured in the migration case, which is the place-name sense — still name the census year.'],
    'a cork stopper; cork oak / flooring; corked wine (fault). Close: bung / stopper. Place: Cork. Trap: pork. Science, geography, and food tests. Bark material or a bottle stopper — quote density or the place.',
    ['stopper', 'bung', 'bark']
  ),
  couch: L(
    'A couch is a long, soft seat for two or more people; as a verb (formal), to express in a particular way: on the couch; couched in. Sofa and settee are close British twins; phrase and express are verb twins. A couch in the waiting room is not a sampling frame. Mix-up: couch vs coach; cough; do not write couch for a furniture advert with no interview or wording in the source.',
    ['A couch in the waiting room is not a sampling frame; still log the interview time.', 'The warning was couched in legal language, the circular said, which is the express-in-a-style sense — still name the statute.'],
    'a couch; on the couch; couched in + noun. Close: sofa / settee. Verb: phrase / express. Trap: coach / cough. Methods and language. A sofa, or to word something in a stated way — specify.',
    ['sofa', 'settee', 'phrase']
  ),
  coupon: L(
    'A coupon is a printed or digital voucher that gives a discount or the right to something: a coupon code; a money-off coupon. Voucher and token are close twins; rebate is money back after purchase. A coupon in the spend diary still needs the £ value. Mix-up: coupon vs a bond-interest slip (finance); coupon vs couple; do not write coupon for a slogan with no value.',
    ['A coupon in the spend diary still needs the £ value, the survey said.', 'A gilt coupon featured in the economics extract, which is the bond-interest sense — still quote the rate.'],
    'a coupon code / book; a money-off coupon; coupon rate (bonds). Close: voucher / token. Trap: couple. Accounts, economics, and surveys. A discount voucher, or a bond-interest slip — quote the £ or the rate.',
    ['voucher', 'token', 'rebate']
  ),
  courageous: L(
    'Courageous means brave; showing courage: a courageous decision; courageous in. Brave and valiant are close twins; reckless is bravery without judgement. A courageous dissent in the judgment still needs the named ratio. Mix-up: courageous vs outrageous; encourage; do not write courageous for a sports slogan with no named risk in the source.',
    ['A courageous dissent in the judgment still needs the named ratio, the law extract said.', 'A courageous refusal to sign featured in the minutes, which is the civic-risk sense — still name the motion.'],
    'a courageous decision / dissent; courageous in + -ing. Close: brave / valiant. Contrast: reckless. Trap: outrageous. Citizenship, history, and law. Brave with a named risk, not a motto.',
    ['brave', 'valiant', 'plucky']
  ),
  courtyard: L(
    'A courtyard is an open area surrounded by walls or buildings, often inside a larger building: a school courtyard; courtyard housing. Quad is a close twin in colleges; yard is broader and often working. Map the courtyard on the site plan, then the access. Mix-up: courtyard vs court (the law or the monarch); backyard (more US/domestic); do not write courtyard for a hotel slogan with no plan.',
    ['Map the courtyard on the site plan, then the access, not a hotel slogan.', 'Courtyard housing featured in the density case, which is the urban-design sense — still quote dwellings per hectare if given.'],
    'a school / palace courtyard; courtyard housing. Close: quad / yard. Trap: law court. Geography, history, and design. An open area enclosed by buildings — map the access.',
    ['quad', 'yard', 'forecourt']
  ),
  coward: L(
    'A coward is a person who is too afraid to do something difficult or dangerous: call someone a coward; cowardice. Cowardly is the adjective; hero is a contrast, not a synonym. Calling a witness a coward is not analysis; quote the named fear. Mix-up: coward vs cowardice (the noun for the quality); cower; do not write coward as an insult in a write-up with no source line.',
    ['Calling a witness a coward is not analysis; quote the named fear in the source.', 'Cowardice in the dispatch still needs a named order, which is the history sense — evaluate the source bias.'],
    'a coward; cowardice; cowardly. Contrast: hero / brave. Trap: cower. History, literature, and citizenship. A person too afraid to act — quote the fear; do not use it as a slogan insult.',
    ['craven', 'faintheart', 'wretch']
  ),
  cradle: L(
    'A cradle is a small bed for a baby that can be rocked; also the place where something begins (a cradle of); as a verb, to hold gently: a cradle of industry; cradle to grave. Origin and birthplace are figurative twins; cot is a British baby-bed twin that does not rock. A cradle of industry featured in the geography case; still name the town. Mix-up: cradle vs ladle; crawl (a nearby headword); do not write cradle for a nursery advert with no origin or named town.',
    ['A cradle of industry featured in the geography case; still name the town.', 'Cradle-to-grave welfare featured in the citizenship source, which is the life-course policy sense — still name the Act.'],
    'a baby’s cradle; a cradle of + noun; cradle to grave; cradle (verb). Close: cot / origin / birthplace. Trap: ladle. Geography, history, and citizenship. A rocking baby bed, or a place of origin — name the town or the Act.',
    ['cot', 'birthplace', 'origin']
  ),
  crane: L(
    'A crane is a tall machine for lifting heavy objects; also a long-legged bird; as a verb, to stretch the neck to see: a tower crane; a crane fly is a different insect. Hoist and derrick are machine twins; heron is a bird twin. The crane on the skyline featured in the regeneration case; still name the site. Mix-up: crane vs crone; cranium; do not write crane for a construction slogan with no site.',
    ['The crane on the skyline featured in the regeneration case; still name the site.', 'A crane nested on the reserve, the ecology survey said, which is the bird sense — still name the species if given.'],
    'a tower / dock crane; crane one’s neck; a crane (bird). Machine twins: hoist / derrick. Bird twin: heron. Trap: crone. Geography, design, and biology. A lifting machine, a bird, or stretching the neck — specify.',
    ['hoist', 'derrick', 'heron']
  ),
  crawl: L(
    'To crawl is to move on hands and knees, or very slowly; the crawl is also a swimming stroke; a traffic crawl is very slow movement: crawl along; the front crawl. Creep is a close twin for slow quiet movement; inch is slower still. Traffic crawled on the A-road, the bulletin said; still quote the delay in minutes. Mix-up: crawl vs scrawl; crayfish; do not write crawl for a web “crawl” unless the computing source uses that term.',
    ['Traffic crawled on the A-road, the bulletin said; still quote the delay in minutes.', 'The front crawl featured in the PE assessment, which is the swimming-stroke sense — still name the time.'],
    'crawl along / with; a traffic crawl; the front crawl. Close: creep / inch. Trap: scrawl. Geography, PE, and news. Move on hands and knees, move very slowly, or a swimming stroke — specify.',
    ['creep', 'inch', 'clamber']
  ),
  creep: L(
    'To creep is to move slowly and quietly, often secretly; also to change gradually (prices creep up); as a noun, slow movement of soil (soil creep): creep in; creep up on. Crawl is a close twin; seepage is a water twin. Soil creep featured in the slope case. Mix-up: creep vs crepe; creek; do not write creep as an insult for a person unless the source uses that informal noun.',
    ['Soil creep featured in the slope case, the geography paper said.', 'Prices crept up after the levy, the accounts said, which is the gradual-change sense — still quote the £ figure.'],
    'creep in / up (on); soil creep; creeping + noun. Close: crawl / seepage. Informal noun: an unpleasant person (avoid unless quoted). Trap: crepe / creek. Geography, economics, and literature. Slow quiet movement, gradual change, or soil movement — specify.',
    ['crawl', 'steal', 'seepage']
  ),
  critically: L(
    'Critically means in a way that judges carefully, or to a dangerous degree (critically ill); also in a way that is very important: read critically; critically endangered. Critically also links to criticism as evaluation, not only complaint. Read the source critically, the mark scheme said. Mix-up: critically vs cynically; criticise as “be nasty”; do not write critically for a film-review slogan with no criterion.',
    ['Read the source critically, the mark scheme said; a critically endangered species still needs the IUCN category.', 'She was critically ill in the case notes, which is the dangerous-degree sense — quote the medical source.'],
    'read / think critically; critically ill / endangered / important. Adjective: critical. Trap: cynically / “be nasty”. Methods, biology, and health. In a judging way, or to a dangerous or crucial degree — name the criterion or the category.',
    ['analytically', 'severely', 'crucially']
  ),
  cube: L(
    'A cube is a solid with six equal square faces; as a verb, to multiply a number by itself twice (n cubed): cube the number; a cube of side 3 cm. Cuboid has rectangular faces; cubic (already related) is the adjective or the volume unit. Calculate the volume of the cube, showing the working. Mix-up: cube vs cubicle (already in the dictionary); ice-cube as a kitchen only; do not write cube for a brand of gadget with no geometry.',
    ['Calculate the volume of the cube, showing the working, the maths paper said.', 'Two cubed is 8 in the index laws question, which is the multiply-twice sense.'],
    'a cube of side; cube the number; n cubed / cube root. Related: cuboid / cubic. Trap: cubicle. Maths and science. A six-faced solid, or n × n × n — show the working.',
    ['cuboid', 'hexahedron', 'block']
  ),
  cult: L(
    'A cult is a small religious group, often with intense devotion to a leader; also intense popular admiration (a cult film): a cult following; cult of personality. Sect is a close twin, often within a larger faith; fandom is the media twin. A cult in the sociology extract still needs a named group. Mix-up: cult vs culture; occult; do not write cult for a film slogan unless the media paper uses that sense.',
    ['A cult in the sociology extract still needs a named group, not a film slogan unless the source is media.', 'A cult of personality featured in the history paper, which is the leader-worship sense — still name the figure.'],
    'a religious cult; a cult film / following; a cult of personality. Close: sect. Media twin: fandom. Trap: culture / occult. Sociology, RS, and media. A small intense group, or intense fandom — name the group or the title.',
    ['sect', 'following', 'fandom']
  ),
  curl: L(
    'To curl is to form into a curved or spiral shape; as a noun, a lock of hair in that shape, or that movement: curl up; smoke curled. Coil is a close twin for loops of wire; wave is a gentler hair twin. Smoke curled in the fire-test photograph; still name the material. Mix-up: curl vs curd; hurl; do not write curl for a hair advert with no named material or test.',
    ['Smoke curled in the fire-test photograph; still name the material, not a hair advert.', 'A curl of the lip featured in the character note, which is the literature sense — still quote the line.'],
    'curl up; a curl of hair / smoke / the lip; curly. Close: coil / wave. Trap: curd / hurl. Science, PE, and literature. Form a spiral, or a lock of curved hair — specify.',
    ['coil', 'spiral', 'wave']
  ),
  briefcase: L(
    'A briefcase is a flat case with a handle for carrying papers to work: a locked briefcase; briefcase in the photograph. Portfolio and attaché case are close twins; backpack is everyday. A briefcase in the photograph is a source, not a brand. Mix-up: briefcase vs brief (the legal papers inside); suitcase; do not write briefcase for a laptop-bag slogan with no hearing or papers in the source.',
    ['A briefcase in the photograph is a source, not a brand; still name the hearing if given.', 'The brief in the case file is the legal papers, which is not this headword unless the source names the case.'],
    'a briefcase; a locked briefcase. Close: portfolio / attaché case. Related: brief (legal papers). Trap: suitcase. Citizenship, history, and media. A case for work papers — treat the photo as a source.',
    ['portfolio', 'attaché case', 'document case']
  ),
  dashboard: L(
    'A dashboard is the panel of instruments in a vehicle; also a computer screen that summarises data: the dashboard display; a data dashboard. Instrument panel is a close twin; fascia is a British car-body twin. Read the speed from the dashboard in the driving source. Mix-up: dashboard vs dashboard as a brand; dash (a run or a punctuation mark); do not write dashboard for a slogan “control centre” with no named metric.',
    ['Read the speed from the dashboard in the driving source; a data dashboard still needs the named metric.', 'The data dashboard in the public-health brief still needs the n and the date, which is the summary-screen sense.'],
    'the car dashboard; a data dashboard; dashboard display. Close: instrument panel / fascia. Trap: dash. DT, computing, and citizenship. A vehicle instrument panel, or a data summary screen — name the reading.',
    ['instrument panel', 'fascia', 'console']
  ),
  daylight: L(
    'Daylight is the natural light of the day (usually uncountable); in broad daylight means openly, in the daytime: hours of daylight; daylight hours. Sunlight is a close twin; dawn is the start. Hours of daylight featured in the climate table. Mix-up: daylight vs day light as two words in old sources; twilight; do not write daylight for a lighting advert with no table of hours.',
    ['Hours of daylight featured in the climate table, not a lighting advert.', 'The theft was in broad daylight, the crime source said, which is the openly-in-daytime sense — still name the street if given.'],
    'hours of daylight; daylight hours; in broad daylight. Close: sunlight. Contrast: twilight / night. Trap: a lamp advert. Geography, science, and citizenship. Natural light during the day — quote the hours or the openness.',
    ['sunlight', 'daytime', 'dawn']
  ),
  debit: L(
    'A debit is a sum taken from a bank account; as a verb, to take that sum (opposite of credit): a direct debit; debit the account. Withdrawal is everyday; charge is related. A debit on the statement still needs the £ figure and the date. Mix-up: debit vs debt; credit (the opposite); do not write debit for a debt of honour with no account line.',
    ['A debit on the statement still needs the £ figure and the date, the accounts paper said.', 'A direct debit featured in the household-budget table, which is the regular-payment sense — still name the payee.'],
    'a debit / direct debit; debit the account; debit card. Opposite: credit. Close: withdrawal / charge. Trap: debt. Accounts and citizenship. Money taken from an account — quote the £ and the date.',
    ['withdrawal', 'charge', 'deduction']
  ),
  decimal: L(
    'A decimal is a number using tenths, hundredths, and so on, written with a decimal point; as an adjective, based on ten: a decimal fraction; the decimal system. Place value is the related skill; fraction is another form of the same amount. Give the answer as a decimal if the paper asks, then show the place value. Mix-up: decimal vs decibel; dozen (base twelve); do not write decimal for a “round number” with no point.',
    ['Give the answer as a decimal if the paper asks, then show the place value.', 'Decimal currency featured in the 1971 source, which is the base-ten money sense — still name the year.'],
    'a decimal; decimal point / place; the decimal system. Related: fraction / place value. Trap: decibel. Maths and history (decimalisation). A number with a decimal point, or based on ten — show the places.',
    ['fraction', 'tenth', 'place value']
  ),
  decorator: L(
    'A decorator is a person whose job is to paint and paper rooms; also someone who adds decoration: a painter and decorator; interior decorator. Painter is a close twin; designer is broader. Name the decorator in the invoice, then the £ labour line. Mix-up: decorator vs decoder; decoration (the result); do not write decorator for a paint slogan with no named worker.',
    ['Name the decorator in the invoice, then the £ labour line, not a paint slogan.', 'An interior decorator featured in the design brief, which is the styling sense — still name the client if given.'],
    'a painter and decorator; interior decorator; decorating. Close: painter. Broader: designer. Trap: decoder. Design, accounts, and DT. A person who paints and papers rooms — quote the invoice.',
    ['painter', 'paperer', 'designer']
  ),
  delightful: L(
    'Delightful means very pleasant or attractive: a delightful setting; delightful to. Pleasant and charming are close twins; gorgeous (already in the dictionary) is stronger and equally vague without detail. Calling the site delightful is not analysis; name the landform. Mix-up: delightful vs delightful as a review cliché; delight (the noun); do not leave delightful as the whole evaluation.',
    ['Calling the site delightful is not analysis; name the landform, the geography paper said.', 'A delightful irony in the satire still needs the named target, the media paper said.'],
    'a delightful + noun; delightful to + verb. Close: pleasant / charming. Trap: a cliché with no detail. Geography, literature, and reviews. Very pleasant — still name the feature; too vague alone in a write-up.',
    ['pleasant', 'charming', 'lovely']
  ),
  dependable: L(
    'Dependable means able to be trusted to do what is needed: a dependable source; dependable data. Reliable is the closest twin; trustworthy stresses honesty. A dependable source still needs a named author and date. Mix-up: dependable vs dependent (relying on); dependant (a person you support, British noun); do not write dependable for a brand slogan with no provenance.',
    ['A dependable source still needs a named author and date, the handbook said.', 'A dependable witness still needs corroboration, the citizenship paper said, which is the evidence sense.'],
    'a dependable source / witness / dataset. Close: reliable / trustworthy. Trap: dependent / dependant. Methods, citizenship, and science. Able to be trusted — name the author, the date, and the corroboration.',
    ['reliable', 'trustworthy', 'steady']
  ),
  deserted: L(
    'Deserted means empty of people; also left by someone who should have stayed: a deserted village; deserted by. Abandoned and uninhabited are close twins; desert (stress on the first syllable) is the dry biome — a classic stress trap. A deserted high street in the census still needs the year. Mix-up: deserted vs dessert (pudding); desert as a verb (to abandon, same family); do not write deserted for a quiet room that is still in use.',
    ['A deserted high street in the census still needs the year, the geography paper said.', 'A deserted village featured on the OS extract, which is the abandoned-settlement sense — still name the period.'],
    'a deserted street / village / island; deserted by. Close: abandoned / uninhabited. Stress trap: desert (biome). Spelling trap: dessert. Geography and history. Empty of people, or abandoned — quote the year.',
    ['abandoned', 'uninhabited', 'empty']
  ),
  desktop: L(
    'A desktop is the main screen of a computer, or a computer designed to stay on a desk: the desktop folder; a desktop computer. Laptop is the portable twin; wallpaper is the background image, not the machine. Save the file to the desktop only if the methods brief allows it. Mix-up: desktop vs desk top as furniture only; laptop; do not write desktop for a furniture catalogue with no computer in the source.',
    ['Save the file to the desktop only if the methods brief allows it; still name the folder.', 'A desktop computer featured in the ICT inventory, which is the hardware sense — still name the spec if given.'],
    'the desktop (screen); a desktop computer / PC; desktop folder. Portable twin: laptop. Trap: a writing desk only. Computing and methods. The main screen, or a desk computer — name the folder or the spec.',
    ['laptop', 'workstation', 'PC']
  ),
  detour: L(
    'A detour is a longer route used when the usual road is closed; as a verb, to take that route: a signed detour; detour around. Diversion is the close British road-sign twin; diversion can also mean entertainment — a classic trap. Map the detour on the OS extract, then the extra kilometres. Mix-up: detour vs tour; return; do not write detour for a scenic slogan with no closure.',
    ['Map the detour on the OS extract, then the extra kilometres, not a scenic slogan.', 'A diversion on the A-road featured in the bulletin, which is the British road-sign twin — still quote the delay.'],
    'a signed detour; detour around / via; make a detour. UK road twin: diversion. Trap: tour / entertainment “diversion”. Geography and news. A longer route around a closure — map the extra kilometres.',
    ['diversion', 'rerouting', 'bypass']
  ),
  devoted: L(
    'Devoted means giving a lot of time and love to someone or something: devoted to; a devoted following. Dedicated and loyal are close twins; obsessed is stronger and often negative. Hours devoted to revision still need a log. Mix-up: devoted vs devout (religious); divorced; do not write devoted for a fan slogan with no hours or named person.',
    ['Hours devoted to revision still need a log, the tutor said; a devoted following is the fandom sense.', 'A chapter devoted to the Act featured in the handbook, which is the “set aside for” sense — still name the statute.'],
    'devoted to; a devoted friend / following; hours devoted to. Close: dedicated / loyal. Trap: devout / divorced. Methods, media, and RS. Giving much time and loyalty — log the hours or name the person.',
    ['dedicated', 'loyal', 'faithful']
  ),
  diamond: L(
    'A diamond is a very hard precious stone made of carbon; also a shape with four equal sides: a diamond ring; diamond on the Mohs scale. Graphite is the same element, different structure; rhombus is the maths twin for the shape. A diamond in the geology case is carbon under pressure, not a slogan. Mix-up: diamond vs Damon; dimond (misspelling); do not write diamond for a jewellery advert with no Mohs rank or carbon in the source.',
    ['A diamond in the geology case is carbon under pressure, not a slogan; still name the Mohs rank if asked.', 'A diamond on the flag featured in the design brief, which is the four-sided-shape sense — still name the angles if the maths paper asks.'],
    'a diamond; diamond (Mohs 10); a diamond shape / rhombus. Same element: graphite. Trap: dimond. Geology, chemistry, and maths. A hard carbon gem, or a four-sided shape — specify.',
    ['gem', 'rhombus', 'graphite']
  ),
  encyclopedia: L(
    'An encyclopedia (British also encyclopaedia) is a book or website with articles on many subjects, or on one field: a science encyclopaedia; encyclopedic knowledge. Dictionary lists words; a monograph is a specialist book. Cite the encyclopaedia as a starting source, then find a named specialist text. Mix-up: encyclopedia vs cyclopaedia (old spelling); Wikipedia as the only source; do not stop at the encyclopaedia when the handbook asks for a specialist text.',
    ['Cite the encyclopaedia as a starting source, then find a named specialist text, the handbook said.', 'An encyclopedic footnote is still not a sampling frame, which is the “very wide knowledge” sense — still name the dataset.'],
    'an encyclopedia / encyclopaedia; encyclopedic. Close: reference work. Contrast: dictionary / monograph. Trap: stopping at a general article. Methods and RS. A wide reference work — start there, then name a specialist source.',
    ['encyclopaedia', 'reference work', 'compendium']
  ),
  extinguish: L(
    'To extinguish is to make a fire or light stop burning, or to end a feeling or right: extinguish a fire; extinguish a claim. Put out is the everyday twin; quench is a close science twin for flames or thirst. Extinguish the Bunsen in the practical; an extinguished right still needs the statute named. Mix-up: extinguish vs distinguish; extinct (of a species); do not write extinguish for a slogan “kill the mood” with no fire or legal right.',
    ['Extinguish the Bunsen in the practical; an extinguished right still needs the statute named.', 'An extinguisher featured in the H&S brief, which is the equipment sense — still name the class of fire.'],
    'extinguish a fire / light / claim; fire extinguisher; extinct (species — different word). Everyday: put out. Close: quench. Trap: distinguish. Science, H&S, and law. Put out a fire, or end a right — name the statute or the class of fire.',
    ['quench', 'put out', 'douse']
  ),
}
