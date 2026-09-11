const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2AB = {
  exporter: L(
    'An exporter is a person or firm that sells goods to another country: a leading exporter; an exporter of. Export is the verb and the trade (already in the dictionary); importer is the twin that buys in. Name the exporter in the trade table, then the £ value. Mix-up: exporter vs export; explorer (already in a B2 list); do not write exporter for a firm that only sells inside the UK in the source.',
    ['Name the exporter in the trade table, then the £ value, the economics paper said.', 'A car exporter featured in the balance-of-payments case, which is still named trade — quote the destination if given.'],
    'an exporter of; a leading / net exporter. Verb/noun twin: export (already in B1). Contrast: importer. Trap: explorer. Economics and geography. A firm or person that sells goods abroad — quote the £ and the market.',
    ['export firm', 'vendor abroad', 'overseas seller']
  ),
  exposition: L(
    'An exposition is a clear public explanation of an idea, theory, or argument: an exposition of; a clear exposition. It is also a large public exhibition in older or formal writing. Explain and explanatory (this batch) are close; account is everyday. The exposition in the essay still needs a named theory. Mix-up: exposition vs explosion; exposure (already related); do not write exposition for a one-line slogan with no argument.',
    ['The exposition in the essay still needs a named theory, the English paper said.', 'The Great Exhibition was an exposition in the history source, which is the fair sense — still name the year and the site.'],
    'an exposition of; a clear / systematic exposition. Close: explanation / account. Fair sense: exhibition. Trap: explosion. English, RS, and history. A clear setting-out of an idea — name the theory, or date the fair.',
    ['explanation', 'account', 'exhibition']
  ),
  expressive: L(
    'Expressive means showing thoughts or feelings clearly, especially in art, music, or the face: an expressive face; expressive of. Expression is the noun; eloquent is a speech twin; moving is everyday. Calling a performance expressive is not analysis; quote the dynamic or the line. Mix-up: expressive vs expensive; impressive; do not write expressive for a blank stage direction with no feeling named in the source.',
    ['Calling a performance expressive is not analysis; quote the dynamic or the line, the music paper said.', 'An expressive portrait featured in the gallery notes, which is the art sense — still name the sitter or the medium.'],
    'an expressive + noun; expressive of. Noun: expression. Close: eloquent / moving. Trap: expensive. Music, art, and literature. Showing feeling clearly — quote the line, the dynamic, or the medium.',
    ['eloquent', 'moving', 'demonstrative']
  ),
  exterior: L(
    'The exterior is the outside of a building or object: the exterior of; an exterior wall (adjective). Interior is the twin; facade is the front; outside is everyday. Photograph the exterior on the site plan, then the facing. Mix-up: exterior vs extra; interior; do not write exterior for a room that is only next to the street unless the source names the outside face.',
    ['Photograph the exterior on the site plan, then the facing, the DT paper said.', 'Exterior paint featured in the specification, which is the outside-surface sense — still name the product if given.'],
    'the exterior of; an exterior wall / shot. Twin: interior. Close: facade / outside. Trap: extra / a street-facing room with no outside face named. DT, geography, and media. The outside — map the facing or name the finish.',
    ['outside', 'facade', 'outer surface']
  ),
  expiry: L(
    'Expiry is the end of the time when something is valid (British; usually uncountable as a date label): expiry date; on expiry. Expire is the verb (already in B2); expiration is the US twin; best-before is food. Quote the expiry date on the ID, then the exam window. Mix-up: expiry vs expire; expression; do not write expiry for a food “use by” unless the source uses expiry.',
    ['Quote the expiry date on the ID, then the exam window, not a “use by” slogan.', 'Passport expiry featured in the citizenship case, which is the validity sense — still name the date.'],
    'expiry date; on expiry. Verb: expire (already in B2). US twin: expiration. Trap: a food use-by with no expiry wording. Citizenship, admin, and business. When something stops being valid — quote the date.',
    ['expiration', 'end date', 'lapse']
  ),
  explanatory: L(
    'Explanatory means giving a reason or making something clearer: explanatory notes; an explanatory leaflet. Explain is the verb (already in the dictionary); illustrative is a close twin; interpretative adds a reading. An explanatory note still needs the named variable. Mix-up: explanatory vs exploratory (this batch); extraordinary; do not write explanatory for a slogan that restates the title with no reason.',
    ['An explanatory note still needs the named variable, the methods brief said.', 'An explanatory diagram featured in the textbook extract, which is the teaching sense — still name the process it shows.'],
    'explanatory notes / leaflet / diagram. Verb: explain (already in A2). Close: illustrative. Trap: exploratory (this batch). Science, English, and citizenship. Giving a reason — name the variable or the process.',
    ['illustrative', 'clarifying', 'interpretative']
  ),
  exploratory: L(
    'Exploratory means done in order to find out more, not to give a final answer: exploratory talks; an exploratory borehole. Explore is the verb (already in the dictionary); preliminary is a close twin; experimental is the lab twin. An exploratory borehole still needs the depth in metres. Mix-up: exploratory vs explanatory (this batch); explosion; do not write exploratory for a final published result in the source.',
    ['An exploratory borehole still needs the depth in metres, the geology paper said.', 'Exploratory talks featured in the diplomacy source, which is the no-deal-yet sense — still name the parties and the year.'],
    'exploratory talks / surgery / borehole. Verb: explore (already in B1). Close: preliminary / fact-finding. Trap: explanatory / a final result. Geography, science, and citizenship. Done to find out more — quote the depth, the n, or the parties.',
    ['preliminary', 'fact-finding', 'investigative']
  ),
  exhale: L(
    'To exhale is to breathe air out of the lungs: exhale through; exhale slowly. Inhale is the twin; expire is a rare formal twin and also “come to an end” (already in B2); breathe out is everyday. Time the exhale in the PE test, then the litres. Mix-up: exhale vs inhale; hail; do not write exhale for air leaving a tyre (deflate, this batch).',
    ['Time the exhale in the PE test, then the litres, not a yoga caption.', 'Exhaled air featured in the respiration practical, which is still a named gas test — quote CO₂ if asked.'],
    'exhale through / slowly. Twin: inhale. Everyday: breathe out. Trap: expire / deflate. Biology and PE. Breathe out — quote litres or the gas test.',
    ['breathe out', 'expire', 'blow out']
  ),
  execution: L(
    'Execution here is the carrying out of a plan, order, or piece of work: in execution; the execution of. Execute is the verb (already in a higher list); performance is a close twin; implementation is the policy twin. Judge the execution of the method, then the error. Mix-up: execution vs exemption; the capital-punishment sense (put to death) — use that only if the source names a sentence or a scaffold; do not write execution for a plan that is only announced.',
    ['Judge the execution of the method, then the error, not a caption about capital punishment.', 'Poor execution featured in the project review, which is the carrying-out sense — still name the missed deadline.'],
    'the execution of a plan / method / order; in execution. Verb: execute. Close: performance / implementation. Trap: capital punishment unless the source names it; exemption. Business, computing, and science. Carrying a plan out — name the method or the miss.',
    ['implementation', 'performance', 'carrying-out']
  ),
  eyesight: L(
    'Eyesight is the ability to see (usually uncountable): poor eyesight; eyesight test. Vision is a close twin; sight is everyday; acuity is the clinical twin. Quote the eyesight score in the medicals table, then the units. Mix-up: eyesight vs insight; eyelash (this batch); do not write eyesight for a named disease such as glaucoma unless the source uses eyesight.',
    ['Quote the eyesight score in the medicals table, then the units, not an advert.', 'Failing eyesight featured in the occupational-health note, which is still a named test — quote the chart if given.'],
    'poor / good eyesight; an eyesight test. Close: vision / sight. Clinical: acuity. Trap: insight / a named eye disease with no sight score. Biology and PSHE. Ability to see — quote the score or the chart.',
    ['vision', 'sight', 'visual acuity']
  ),
  eyelash: L(
    'An eyelash is one of the short hairs along the edge of the eyelid: a false eyelash; an eyelash in. Eyelid (this batch) is the skin fold; brow is higher on the face; cilium is the biology twin. Label the eyelash on the eye diagram, then the function. Mix-up: eyelash vs eyelid; eyesight; do not write eyelash for eyebrow hair in the source.',
    ['Label the eyelash on the eye diagram, then the function, the biology paper said.', 'A trapped eyelash featured in the first-aid note, which is still a named irritant — not a mascara slogan.'],
    'an eyelash; false eyelashes. Neighbour: eyelid (this batch). Contrast: eyebrow. Trap: eyesight. Biology and PSHE. A hair on the lid edge — label it, do not swap with brow or lid.',
    ['lash', 'cilium', 'lid hair']
  ),
  eyelid: L(
    'An eyelid is the fold of skin that covers the eye when it is closed: upper / lower eyelid; the eyelid. Eyelash (this batch) grows on its edge; blink (this batch) is the movement. Label the eyelid on the diagram, then the blink reflex. Mix-up: eyelid vs eyelash; island; do not write eyelid for the whole eye or for a contact lens.',
    ['Label the eyelid on the diagram, then the blink reflex, the biology paper said.', 'A drooping eyelid featured in the neurology case, which is still a named sign — quote the side if given.'],
    'upper / lower eyelid; close the eyelid. Neighbour: eyelash. Movement: blink (this batch). Trap: eyelash / the whole eye. Biology and first aid. The skin fold over the eye — label upper or lower.',
    ['lid', 'palpebra', 'eye covering']
  ),
  exploitative: L(
    'Exploitative means using people or resources unfairly for your own gain: exploitative labour; an exploitative contract. Exploit is the verb; exploitation is the noun; unfair is everyday. Calling a contract exploitative is not analysis; name the clause and the Act. Mix-up: exploitative vs exploratory; explosive (already in B2); do not write exploitative for a profitable firm with no unfair practice named.',
    ['Calling a contract exploitative is not analysis; name the clause and the Act, the citizenship paper said.', 'Exploitative hours featured in the employment tribunal, which is still a named rota — quote the hours if given.'],
    'exploitative labour / contract / practice. Verb: exploit. Noun: exploitation. Close: unfair / predatory. Trap: exploratory / explosive / mere profit. Citizenship and economics. Unfair use of people or resources — name the clause or the hours.',
    ['predatory', 'unfair', 'abusive']
  ),
  exclaim: L(
    'To exclaim is to say something suddenly and loudly, often from surprise or anger: exclaim that; exclaim at. An exclamation is the noun; cry out is everyday; shout is louder and less specific. Quote what the character exclaimed, then the line number. Mix-up: exclaim vs explain; proclaim; do not write exclaim for a calm reported statement with no suddenness in the source.',
    ['Quote what the character exclaimed, then the line number, the literature paper said.', 'The crowd exclaimed at the result, which is the public-reaction sense — still name the score or the vote.'],
    'exclaim that / at; an exclamation. Close: cry out / shout. Trap: explain / proclaim / a calm report. Literature and news. A sudden loud remark — quote the words.',
    ['cry out', 'call out', 'blurt']
  ),
  fashionable: L(
    'Fashionable means popular in style at a particular time: fashionable clothes; a fashionable area. Fashion is the noun (already in the dictionary); stylish is a close twin; trendy is informal. Calling a look fashionable is not analysis; date the season and name the source. Mix-up: fashionable vs old-fashioned (already in the dictionary); passion; do not write fashionable for a uniform that is only required, not chosen for style.',
    ['Calling a look fashionable is not analysis; date the season and name the source, the media paper said.', 'A fashionable district featured in the census case, which is the area sense — still quote the % change if given.'],
    'fashionable clothes / area / idea; in fashionable + noun. Noun: fashion (already in A2). Close: stylish / trendy. Trap: old-fashioned / a required uniform. Media, geography, and citizenship. In style at a time — date it.',
    ['stylish', 'trendy', 'in vogue']
  ),
  fearful: L(
    'Fearful means afraid of something, or causing fear: fearful of; a fearful noise. Fear is the noun (already in the dictionary); afraid is everyday; fearsome stresses causing fear. Calling a character fearful is not analysis; quote the line. Mix-up: fearful vs fearless; cheerful; do not write fearful for ordinary caution with no fear named in the source.',
    ['Calling a character fearful is not analysis; quote the line, the literature paper said.', 'A fearful storm featured in the weather diary, which is the causing-fear sense — still quote the wind speed if given.'],
    'fearful of; a fearful + noun. Noun: fear (already in A2). Close: afraid / frightened / fearsome. Trap: fearless / mere caution. Literature, PSHE, and geography. Afraid or causing fear — quote the line or the figure.',
    ['afraid', 'frightened', 'apprehensive']
  ),
  frank: L(
    'Frank means honest and direct in what you say, even if it is uncomfortable: a frank discussion; frank about. Candid is a close twin; blunt can be ruder; honest is everyday. A frank discussion in the minutes still needs the named issue. Mix-up: frank vs Franc; frankly as a sentence adverb; do not write frank for a leaked document that is merely public.',
    ['A frank discussion in the minutes still needs the named issue, not a slogan about “straight talking”.', 'She was frank about the deficit, which is the candid-speech sense — still quote the £ figure.'],
    'a frank discussion / admission; frank about. Close: candid / blunt / honest. Trap: Franc / a leak with no spoken candour. Citizenship, business, and PSHE. Direct honesty in speech — name the issue.',
    ['candid', 'direct', 'blunt']
  ),
  frown: L(
    'To frown is to pull the eyebrows together to show worry, anger, or concentration: frown at; frown on (disapprove). As a noun, that look: a frown. Smile is the twin; scowl is stronger. Describe the frown in the still, then the line it follows. Mix-up: frown vs fawn; brown; do not write frown for a smile described as “tight” unless the source names a frown.',
    ['Describe the frown in the still, then the line it follows, the drama paper said.', 'The board frowned on the proposal, which is the disapprove sense — still name the motion.'],
    'frown at; frown on / upon (disapprove); a frown. Twin: smile. Stronger: scowl. Trap: fawn / a tight smile. Drama, literature, and citizenship. Brows together, or disapproval — quote the still or the motion.',
    ['scowl', 'glower', 'knit the brows']
  ),
  batter: L(
    'Batter here is a mixture of flour, egg, and milk or water used to coat food before frying: pancake batter; in batter. Dough is thicker and often yeasted; coating is broader. Give the batter ratios in the food-tech method, then the frying temperature. Mix-up: batter vs better; the hitting sense (to batter) and the baseball sense — use those only if the source names blows or a sport; do not write batter for a dry spice rub.',
    ['Give the batter ratios in the food-tech method, then the frying temperature.', 'Fish in batter featured in the nutrition table, which is still a named coating — quote kJ if asked.'],
    'pancake / fish batter; in batter. Contrast: dough. Trap: better / to hit repeatedly / baseball. Food tech. A flour-egg mix for frying — quote ratios and °C.',
    ['coating mix', 'fritter mix', 'pancake mix']
  ),
  beak: L(
    'A beak is the hard pointed mouth of a bird: a hooked beak; the beak of. Bill is a close twin in biology; snout is for mammals. Label the beak on the bird diagram, then the diet it matches. Mix-up: beak vs peak; beach; do not write beak for a mammal jaw or for a human mouth in informal slang unless the source uses it.',
    ['Label the beak on the bird diagram, then the diet it matches, the biology paper said.', 'Beak shape featured in the adaptation case, which is still a named species — quote the food if given.'],
    'a hooked / pointed beak; the beak of. Close: bill. Trap: peak / a mammal snout. Biology. A bird’s hard mouth — name the species and the diet.',
    ['bill', 'mandible', 'rostrum']
  ),
  beast: L(
    'A beast is an animal, especially a large or dangerous one: a wild beast; a beast of burden. Animal is broader; brute is a close twin; monster is mythical. Name the beast in the source only if the extract names the species. Mix-up: beast vs best; feast (already in a B2 list); do not write beast for a named pet cat unless the source uses the word.',
    ['Name the beast in the source only if the extract names the species, the literature paper said.', 'A beast of burden featured in the history extract, which is the working-animal sense — still name the animal if given.'],
    'a wild beast; a beast of burden. Broader: animal. Close: brute. Trap: best / feast / a pet unless so named. Literature, history, and RS. A large animal — name the species or the load.',
    ['animal', 'brute', 'creature']
  ),
  beloved: L(
    'Beloved means loved very much: beloved by / of; a beloved friend. As a noun, a dearly loved person: my beloved. Dear and cherished are close twins; favourite is weaker. Calling a character beloved is not analysis; quote who loves them. Mix-up: beloved vs believed; below; do not write beloved for a popular product with no person who loves it in the source.',
    ['Calling a character beloved is not analysis; quote who loves them, the literature paper said.', 'A beloved landscape featured in the poem, which is still a named place — quote the line.'],
    'beloved by / of; a beloved + noun; my beloved. Close: dear / cherished. Trap: believed / a popular brand with no lover named. Literature and RS. Loved very much — name who loves whom.',
    ['cherished', 'dear', 'adored']
  ),
  berry: L(
    'A berry is a small, juicy fruit without a stone: a wild berry; berry fruits. In strict biology a berry is a fleshy fruit with seeds in the flesh (a tomato can count); everyday English uses berry for strawberry and raspberry. Name the berry in the food web, then the season. Mix-up: berry vs bury; barley; do not write berry for a stone fruit such as a plum unless the source uses berry.',
    ['Name the berry in the food web, then the season, the biology paper said.', 'Berry yield featured in the farm table, which is still a named crop — quote kg if given.'],
    'a wild / forest berry; berry fruits. Everyday vs biology (tomato as berry). Trap: bury / a plum. Biology and food tech. A small juicy fruit — name the species and the season.',
    ['fruit', 'soft fruit', 'berry-fruit']
  ),
  beware: L(
    'Beware means be careful of something dangerous: beware of; beware + -ing. It is used especially on signs and in warnings, often without a full subject. Watch out is everyday; heed is formal. Beware of the named hazard on the H&S sign; still quote the control measure. Mix-up: beware vs aware; beware vs wear; do not write beware for a past event that already happened with no warning left.',
    ['Beware of the named hazard on the H&S sign; still quote the control measure.', 'Beware of overclaiming in the methods brief, which is the academic-warning sense — still name the limit.'],
    'beware of; beware + -ing. Everyday: watch out. Trap: aware / a past accident with no remaining warning. H&S and citizenship. A warning to be careful — name the hazard and the control.',
    ['watch out', 'look out', 'heed']
  ),
  blade: L(
    'A blade is the flat cutting part of a knife, sword, or tool: a steel blade; the blade of. It can also mean a long thin leaf of grass, but this entry is the cutting sense. Edge is a close twin; knife is the whole tool. Name the blade length in the DT spec, then the material. Mix-up: blade vs bland; the grass-leaf sense; do not write blade for a whole pair of scissors unless the source names a blade.',
    ['Name the blade length in the DT spec, then the material, not a grass-leaf caption.', 'A turbine blade featured in the physics case, which is the aerofoil sense — still quote the length if given.'],
    'a steel / razor blade; the blade of a knife. Close: edge / cutting edge. Trap: bland / a grass leaf unless the source uses it. DT and history. The cutting part — quote mm and the metal.',
    ['cutting edge', 'knife-edge', 'cutter']
  ),
  blink: L(
    'To blink is to shut and open the eyes quickly: blink at; without blinking. As a noun, that movement: a blink. Wink uses one eye on purpose; twitch is broader. Time the blink reflex in the practical, then the stimulus. Mix-up: blink vs blank; wink; do not write blink for a long sleep or for a camera flash unless the source uses blink.',
    ['Time the blink reflex in the practical, then the stimulus, the biology paper said.', 'In the blink of an eye in the source is the idiom for a very short time — still quote the measured seconds if given.'],
    'blink at; a blink; without blinking. Contrast: wink (one eye). Trap: blank / a long sleep. Biology and PE. Shut and open the eyes — time the reflex.',
    ['wink', 'bat an eyelid', 'nictitate']
  ),
  bolt: L(
    'A bolt here is a metal pin with a thread, used with a nut to fasten things together: a steel bolt; bolt and nut. Screw is a close twin, often wood; pin is unthreaded. Give the bolt size in the DT spec, then the torque if asked. Mix-up: bolt vs bold; the “run away” verb and the door-bolt sense — use those only if the source names flight or a lock; do not write bolt for a nail.',
    ['Give the bolt size in the DT spec, then the torque if asked, not a “run for it” caption.', 'A high-tensile bolt featured in the bridge spec, which is still a named fastener — quote the grade if given.'],
    'a steel bolt; bolt and nut; bolt size. Close: screw / pin. Trap: bold / run away / a door lock unless so named. DT and physics. A threaded pin with a nut — quote size and torque.',
    ['fastener', 'pin', 'machine screw']
  ),
  bore: L(
    'A bore here is a person or thing that is dull and uninteresting: a crashing bore; what a bore. As a verb, to make someone feel that way: bore someone. Boring is the adjective; dull is everyday. Calling a speech a bore is not analysis; quote the line. Mix-up: bore vs boar; the drilling sense (to bore a hole) — use that only if the source names a drill; do not write bore for a person who is merely quiet.',
    ['Calling a speech a bore is not analysis; quote the line, the English paper said.', 'The lecture bored the sample group, which is the verb sense — still quote the n and the scale if given.'],
    'a crashing bore; to bore someone. Adjective: boring. Trap: boar / drill a hole unless the source names it. English and PSHE. Dull person or thing — quote the line, not a mood slogan.',
    ['dull person', 'drag', 'tedium']
  ),
  bow: L(
    'To bow (/baʊ/) is to bend the head or upper body forwards as a sign of respect or greeting: bow to; take a bow. As a noun, that movement — not the /bəʊ/ weapon or ribbon. The envoy bowed in the source; still name the court and the year. Mix-up: bow vs bough; /bəʊ/ (arrow or knot); do not write bow for a handshake.',
    ['The envoy bowed in the source; still name the court and the year, the history paper said.', 'The cast took a bow, which is the theatre sense — still name the play if given.'],
    'bow to; take a bow; a bow (/baʊ/). Contrast: /bəʊ/ weapon or ribbon. Close: nod / curtsey. Trap: bough / a handshake. History, drama, and RS. Bend as respect — name the court or the play.',
    ['incline', 'nod', 'salaam']
  ),
  boxer: L(
    'A boxer is a person who fights in the sport of boxing: a heavyweight boxer; amateur boxers. Boxing is the sport; fighter is broader; pugilist is dated. Name the boxer in the fixture list, then the weight class. Mix-up: boxer vs boxes; the dog breed — use that only if the source names a dog; do not write boxer for a wrestler.',
    ['Name the boxer in the fixture list, then the weight class, the PE paper said.', 'An amateur boxer featured in the club minutes, which is still a named bout — quote the round if given.'],
    'a heavyweight / amateur boxer. Sport: boxing. Broader: fighter. Trap: the dog breed / a wrestler. PE and news. A person who boxes — name the class and the bout.',
    ['pugilist', 'fighter', 'prize-fighter']
  ),
  brace: L(
    'A brace is a device that holds something in position or supports a part of the body: a knee brace; dental braces. Support is broader; splint is for a break; bracket is a shelf twin. Name the brace in the physiotherapy notes, then the joint. Mix-up: brace vs brass (this batch); the verb brace yourself (prepare); do not write brace for a sling unless the source names a brace.',
    ['Name the brace in the physiotherapy notes, then the joint, not a “hold tight” slogan.', 'A timber brace featured in the roof spec, which is the structural sense — still name the member.'],
    'a knee / neck brace; dental braces; a timber brace. Close: support / splint. Trap: brass / brace yourself unless the source uses the verb. PE, DT, and biology. A support that holds something — name the joint or the member.',
    ['support', 'splint', 'strut']
  ),
  brass: L(
    'Brass is a yellow alloy of copper and zinc (usually uncountable): brass fittings; a brass plaque. As a group, wind instruments made from it: the brass section. Bronze is copper plus tin; copper is the element. Give the brass composition in the alloy table. Mix-up: brass vs brace (this batch); grass; do not write brass for gold or for a named steel part.',
    ['Give the brass composition in the alloy table, then the % zinc if given.', 'A brass section featured in the score, which is the music sense — still name the piece.'],
    'brass fittings / plaque; the brass section. Contrast: bronze / copper / steel. Trap: brace / grass / gold. DT, chemistry, and music. Copper–zinc alloy, or those instruments — quote % or the piece.',
    ['copper-zinc alloy', 'bronze (contrast)', 'horn section']
  ),
  dabble: L(
    'To dabble is to take a slight or casual interest in an activity: dabble in. It can also mean to splash hands or feet in water, but this entry is the interest sense. Specialise is the contrast; tinker is a close twin. Dabble in a method is not a controlled practical; name the hours if the source gives them. Mix-up: dabble vs dribble; double; do not write dabble for a named qualification or a full-time post.',
    ['Dabble in a method is not a controlled practical; name the hours if the source gives them.', 'She dabbled in coding, which is still a named hobby — quote the course hours if given.'],
    'dabble in. Contrast: specialise / train. Close: tinker. Trap: dribble / a qualification. Careers and English. A slight interest — name the hours, not a job title.',
    ['tinker', 'toy with', 'have a go']
  ),
  dagger: L(
    'A dagger is a short pointed knife used as a weapon: a ceremonial dagger; at daggers drawn (in bitter dispute). Knife is broader; sword is longer. Date the dagger in the museum catalogue, then the material. Mix-up: dagger vs stagger; the punctuation dagger (†); do not write dagger for a kitchen knife unless the source names a weapon.',
    ['Date the dagger in the museum catalogue, then the material, the history paper said.', 'The parties were at daggers drawn, which is the idiom — still name the dispute.'],
    'a ceremonial dagger; at daggers drawn. Broader: knife. Trap: stagger / a cook’s knife. History and literature. A short weapon — date it, or name the dispute in the idiom.',
    ['dirk', 'stiletto', 'short sword']
  ),
  dampen: L(
    'To dampen here is to make a feeling, sound, or activity less strong: dampen enthusiasm; dampen demand. Dampen can also mean make slightly wet; this entry is the weaker-feeling sense. Reduce is broader; mute is a sound twin. Dampen demand in the economics case still needs the % fall. Mix-up: dampen vs damper; damn; do not write dampen for a cloth-wetting step unless the method names water.',
    ['Dampen demand in the economics case still needs the % fall, not a wet-cloth caption.', 'Bad weather dampened turnout, which is the weaken sense — still quote the % if given.'],
    'dampen enthusiasm / demand / noise. Close: reduce / mute. Wet sense: make slightly damp. Trap: damper / a soaking. Economics, PE, and news. Make a feeling or activity weaker — quote the %.',
    ['lessen', 'mute', 'reduce']
  ),
  dandruff: L(
    'Dandruff is small white pieces of dead skin from the scalp (usually uncountable): a dandruff shampoo; dandruff on. Flakes is everyday; dermatitis is a clinical twin. Dandruff in the pharmacy protocol still needs the named treatment. Mix-up: dandruff vs dander; handcuff; do not write dandruff for dry skin on the arms unless the source names the scalp.',
    ['Dandruff in the pharmacy protocol still needs the named treatment, not a shampoo slogan.', 'Persistent dandruff featured in the GP notes, which is still a named scalp sign — quote the duration if given.'],
    'dandruff shampoo / flakes; dandruff on the collar. Close: flakes / seborrhoeic dermatitis. Trap: dander / dry skin elsewhere. Biology and PSHE. Scalp flakes — name the treatment, not a brand slogan.',
    ['scalp flakes', 'scurf', 'dry scalp']
  ),
  darkroom: L(
    'A darkroom is a room from which daylight is shut out so photographs can be developed: in the darkroom; a darkroom timer. Studio is broader; lab is the chemistry twin. Time the darkroom stage in the photography method, then the chemical. Mix-up: darkroom vs classroom; a dim hall used for storage; do not write darkroom for digital editing on a laptop.',
    ['Time the darkroom stage in the photography method, then the chemical, the media paper said.', 'A shared darkroom featured on the site plan, which is still a named room — quote the area if given.'],
    'in the darkroom; a darkroom timer / sink. Contrast: digital editing / a studio. Trap: a dim store cupboard. Media and DT. A light-tight room for film — name the chemical and the time.',
    ['developing room', 'print room', 'photographic lab']
  ),
  daybreak: L(
    'Daybreak is the time of day when light first appears; dawn (usually uncountable): at daybreak; before daybreak. Sunrise is when the sun appears; dusk is the evening twin. Give the time of daybreak in the fieldwork log, then the grid reference. Mix-up: daybreak vs outbreak; breakfast; do not write daybreak for 08:00 on a winter clock unless the source names first light.',
    ['Give the time of daybreak in the fieldwork log, then the grid reference.', 'A raid at daybreak featured in the history source, which is still a named hour — quote it if given.'],
    'at / before daybreak. Close: dawn / first light. Contrast: sunrise / dusk. Trap: breakfast / 08:00 with no first-light wording. Geography and history. First light — quote the time.',
    ['dawn', 'first light', 'sunrise']
  ),
  daydream: L(
    'A daydream is pleasant thoughts that take your attention away from what you are doing: in a daydream; daydream about. As a verb, to have those thoughts. Dream (at night) is the twin; fantasy is stronger. Calling a passage a daydream is not analysis; quote the line. Mix-up: daydream vs nightmare; daybreak (this batch); do not write daydream for a named plan with steps and a budget.',
    ['Calling a passage a daydream is not analysis; quote the line, the literature paper said.', 'She daydreamed in the last lesson, which is the verb sense — still name the missed task if given.'],
    'in a daydream; daydream about. Verb: to daydream. Contrast: night dream / a plan. Trap: daybreak / nightmare. Literature and PSHE. Distracting pleasant thoughts — quote the line or the missed task.',
    ['reverie', 'wool-gathering', 'fantasy']
  ),
  deafening: L(
    'Deafening means extremely loud: deafening noise; a deafening roar. It also describes a very clear lack of response: a deafening silence. Loud is weaker; ear-splitting is a close twin. Calling noise deafening is not enough; quote the dB. Mix-up: deafening vs deaf; defining; do not write deafening for a quiet room labelled “awkward” unless the source uses silence.',
    ['Calling noise deafening is not enough; quote the dB, the physics paper said.', 'A deafening silence followed the vote, which is the idiom — still name the motion.'],
    'deafening noise / roar / applause; a deafening silence. Close: ear-splitting / thunderous. Trap: deaf / defining. Physics, music, and citizenship. Extremely loud, or a pointed silence — quote dB or the motion.',
    ['ear-splitting', 'thunderous', 'piercing']
  ),
  dean: L(
    'A dean is a senior person in a university faculty, or a senior priest in a cathedral: the dean of; a faculty dean. Head of faculty is a close twin; rector and vice-chancellor are other posts. Name the dean in the minutes, then the faculty. Mix-up: dean vs den; bean; do not write dean for a form tutor or a parish vicar unless the source uses dean.',
    ['Name the dean in the minutes, then the faculty, not a campus slogan.', 'The cathedral dean featured in the diocese notes, which is the church sense — still name the cathedral.'],
    'the dean of; a faculty / cathedral dean. Close: head of faculty. Trap: den / a form tutor. Education and RS. A senior university or cathedral official — name the faculty or the church.',
    ['faculty head', 'provost', 'cathedral priest']
  ),
  debater: L(
    'A debater is a person who takes part in a formal discussion of a motion: a skilled debater; team debaters. Debate is the event; speaker is broader; advocate is the legal twin. Name the debater in the transcript, then the motion. Mix-up: debater vs debtor; debate; do not write debater for a heckler who did not take a side in the source.',
    ['Name the debater in the transcript, then the motion, the English paper said.', 'A school debater featured in the club minutes, which is still a named motion — quote for or against.'],
    'a skilled / lead debater; team debaters. Event: debate. Close: speaker / advocate. Trap: debtor / a heckler. English and citizenship. Someone who argues a motion — name the motion and the side.',
    ['speaker', 'advocate', 'arguer']
  ),
  debug: L(
    'To debug is to find and remove errors from a computer program: debug the code; a debugging tool. A bug is the error; test is broader; patch is a later fix. Debug the script in the computing practical, then name the error. Mix-up: debug vs bug; debut; do not write debug for restarting a machine with no named error.',
    ['Debug the script in the computing practical, then name the error, not a “it crashed” caption.', 'A debugging log featured in the coursework, which is still a named fault — quote the line number if given.'],
    'debug the code / script; a debugging tool. Noun: bug. Close: test / patch. Trap: debut / a restart with no error named. Computing. Find and remove program errors — name the fault.',
    ['troubleshoot', 'fix code', 'remove bugs']
  ),
  decaf: L(
    'Decaf is coffee or tea with most of the caffeine removed (informal): a decaf; decaf coffee (also as an adjective). Decaffeinated is the full form; caffeine-free is a close twin, not always accurate. Decaf in the nutrition table still needs the caffeine mg left. Mix-up: decaf vs decay; decal; do not write decaf for a drink that is only “weak” in the source.',
    ['Decaf in the nutrition table still needs the caffeine mg left, not a café slogan.', 'A decaf option featured in the canteen survey, which is still a named drink — quote the n if given.'],
    'a decaf; decaf coffee / tea. Full form: decaffeinated. Trap: decay / weak coffee with caffeine still in. Food tech and PSHE. Coffee or tea with little caffeine — quote mg left.',
    ['decaffeinated', 'caffeine-free', 'unleaded (informal)']
  ),
  decathlon: L(
    'A decathlon is an athletics contest of ten events for one competitor: the decathlon; decathlon points. A heptathlon is seven events (often women); triathlon is three. Give the decathlon points in the results table, then the year. Mix-up: decathlon vs marathon; decimal; do not write decathlon for a single 10,000 m race.',
    ['Give the decathlon points in the results table, then the year, the PE paper said.', 'A school decathlon featured in the fixture list, which is still ten named events — list them if asked.'],
    'the decathlon; decathlon points / champion. Close: heptathlon / triathlon. Trap: marathon / a single long race. PE. Ten events, one competitor — quote points and the year.',
    ['ten-event contest', 'combined events', 'multi-event']
  ),
  decelerate: L(
    'To decelerate is to reduce speed; to slow down: decelerate from; deceleration. Accelerate is the twin; brake is the everyday action. Quote the deceleration in m/s², then the stopping distance. Mix-up: decelerate vs accelerate; decent; do not write decelerate for a vehicle that is already stopped in the source.',
    ['Quote the deceleration in m/s², then the stopping distance, the physics paper said.', 'The train decelerated into the station, which is still a named speed change — quote m/s if given.'],
    'decelerate from / to; deceleration. Twin: accelerate. Everyday: slow down / brake. Trap: a stationary vehicle. Physics and PE. Slow down — quote m/s² and distance.',
    ['slow down', 'brake', 'lose speed']
  ),
  decoder: L(
    'A decoder is a device or program that turns coded data back into a usable form: a TV decoder; a decoder box. Encode is the opposite process; decrypt (this batch) is specifically of secret code. Name the decoder in the media spec, then the standard. Mix-up: decoder vs decoy (this batch); recorder; do not write decoder for a remote control.',
    ['Name the decoder in the media spec, then the standard, not a TV advert.', 'A barcode decoder featured in the logistics case, which is still a named scan — quote the error rate if given.'],
    'a TV / media decoder; decoder box / chip. Opposite: encoder. Close: decrypt (this batch). Trap: decoy / a remote. Media and computing. Turns code into a signal — name the standard.',
    ['encoder (contrast)', 'receiver', 'descrambler']
  ),
  decoy: L(
    'A decoy is a person or thing used to trick someone into a trap or away from the real target: a decoy duck; use as a decoy. Lure is a close twin; bait is often food. The decoy in the tactics source still needs the named target. Mix-up: decoy vs decode; toy; do not write decoy for an ordinary spare part with no trick in the source.',
    ['The decoy in the tactics source still needs the named target, the history paper said.', 'Police used a decoy vehicle, which is still a named diversion — quote the road if given.'],
    'a decoy duck / vehicle; use as a decoy. Close: lure / bait / diversion. Trap: decode / a spare with no trick. History, biology, and citizenship. Something used to mislead — name the real target.',
    ['lure', 'bait', 'diversion']
  ),
  decrypt: L(
    'To decrypt is to convert coded data back into readable form: decrypt a message; decrypted with. Encrypt is the twin; decode is broader and not always secret. Decrypt the sample in the computing practical, then name the key length. Mix-up: decrypt vs decoy; deduct; do not write decrypt for opening an unlocked file with no key in the source.',
    ['Decrypt the sample in the computing practical, then name the key length, not a spy caption.', 'Decrypted traffic featured in the case, which is still a named cipher — quote the standard if given.'],
    'decrypt a message / file; decrypted with a key. Twin: encrypt. Broader: decode. Trap: decoy / an unlocked file. Computing and citizenship. Turn secret code back — name the key length or the cipher.',
    ['decode', 'decipher', 'unlock']
  ),
  deductible: L(
    'Deductible means able to be taken away from a total, especially for tax: tax-deductible; a deductible expense. Deduct is the verb; allowance is a UK tax twin; excess is the UK insurance twin for the US noun deductible. A tax-deductible cost still needs the £ and the year. Mix-up: deductible vs dedicated; deductable (misspelling); do not write deductible for a cost the source says is not allowed against tax.',
    ['A tax-deductible cost still needs the £ and the year, the business paper said.', 'An insurance deductible featured in the US case, which is the excess sense — still quote the £ or $.'],
    'tax-deductible; a deductible expense. Verb: deduct. UK insurance twin: excess. Trap: dedicated / a disallowed cost. Business and citizenship. Able to be subtracted — quote the £ and the rule.',
    ['allowable', 'subtractable', 'excess (insurance)']
  ),
  'deep-fry': L(
    'To deep-fry is to cook food in a pan of hot oil that covers it: deep-fry the chips; deep-fried. Shallow-fry uses less oil; bake uses dry heat. Deep-fry the sample at the named °C, then the time. Mix-up: deep-fry vs freeze; stir-fry; do not write deep-fry for food only brushed with oil on a tray.',
    ['Deep-fry the sample at the named °C, then the time, the food-tech paper said.', 'Deep-fried portions featured in the nutrition table, which is still a named method — quote kJ if asked.'],
    'deep-fry + food; deep-fried. Contrast: shallow-fry / bake / grill. Trap: stir-fry / an oven tray with a little oil. Food tech. Cook fully covered in hot oil — quote °C and time. Hyphen: deep-fry.',
    ['fry in oil', 'French-fry (US)', 'immersion-fry']
  ),
  deface: L(
    'To deface is to spoil the appearance of something by writing on it or damaging its surface: deface a poster; defaced with. Vandalise is broader; graffiti is often the means. Date the defaced notice in the case, then the Act if given. Mix-up: deface vs face; defeat; do not write deface for a planned redesign in the source.',
    ['Date the defaced notice in the case, then the Act if given, the citizenship paper said.', 'A defaced statue featured in the news extract, which is still a named monument — quote the date.'],
    'deface a poster / statue / notice; defaced with. Close: vandalise. Trap: defeat / a planned redesign. Citizenship and history. Spoil a surface — date it and name the object.',
    ['vandalise', 'spoil', 'disfigure']
  ),
  defector: L(
    'A defector is a person who leaves a country, party, or cause to join an opposing one: a high-profile defector; defect to. Defect is the verb; deserter is a military twin; refugee stresses flight from danger, not always a switch of side. Name the defector in the source, then the year. Mix-up: defector vs detector (this batch); defect (a fault); do not write defector for an ordinary emigrant with no opposing side named.',
    ['Name the defector in the source, then the year, the history paper said.', 'A party defector featured in the whip’s list, which is the political sense — still name the new party.'],
    'a defector from / to; defect to. Military twin: deserter. Contrast: refugee / emigrant. Trap: detector / a product fault. History and citizenship. Someone who switches side — name the year and the new side.',
    ['deserter', 'turncoat', 'renegade']
  ),
  deferral: L(
    'A deferral is the act of delaying something until a later time: a deferral of; a fee deferral. Defer is the verb; postponement is a close twin; delay is everyday. Give the deferral date in the admissions letter, then the year. Mix-up: deferral vs referral; deferral vs denial; do not write deferral for a cancellation that will not happen later.',
    ['Give the deferral date in the admissions letter, then the year, not a “put it off” caption.', 'A tax deferral featured in the accounts, which is still a named year — quote the £ if given.'],
    'a deferral of; a fee / tax / place deferral. Verb: defer. Close: postponement / delay. Trap: referral / a cancellation. Education and business. A delay until later — quote the new date.',
    ['postponement', 'delay', 'adjournment']
  ),
  defibrillator: L(
    'A defibrillator is a machine that gives an electric shock to restore a normal heart rhythm: an automated defibrillator; a public defibrillator. AED is the common short form; pacemaker is a different implant. Map the defibrillator on the site plan, then the access time. Mix-up: defibrillator vs fibrillator; calculator; do not write defibrillator for a first-aid kit with no shock device.',
    ['Map the defibrillator on the site plan, then the access time, the first-aid paper said.', 'A public-access defibrillator featured in the minutes, which is still a named cabinet — quote the grid if given.'],
    'an automated / public-access defibrillator; AED. Contrast: pacemaker. Trap: a first-aid kit with no AED. Biology, PE, and H&S. A machine that shocks the heart — map it and quote access time.',
    ['AED', 'shock kit', 'resuscitator']
  ),
  deflate: L(
    'To deflate here is to let air or gas out of something so that it becomes smaller or softer: deflate a tyre; a deflated ball. Inflate is the twin; puncture is accidental damage. Deflate the tyre to the named psi in the method. Mix-up: deflate vs inflate; the “hurt feelings” sense and the prices sense — use those only if the source names morale or an index; do not write deflate for folding a solid object.',
    ['Deflate the tyre to the named psi in the method, not a caption about “hurt feelings”.', 'A deflated raft featured in the H&S case, which is still a named leak — quote the pressure if given.'],
    'deflate a tyre / ball / raft. Twin: inflate. Close: puncture. Trap: hurt feelings / falling prices unless the source uses those senses. DT and PE. Let the air out — quote psi.',
    ['let down', 'empty of air', 'collapse']
  ),
  deform: L(
    'To deform is to change the shape of something so that it is spoiled or no longer natural: deform under load; a deformed sample. Distortion is a close noun; warp is a wood twin; damage is broader. Measure the deformed sample, then the load in N. Mix-up: deform vs reform; form; do not write deform for a planned design change in CAD.',
    ['Measure the deformed sample, then the load in N, the physics paper said.', 'Heat deformed the plastic, which is still a named temperature — quote °C if given.'],
    'deform under load; a deformed sample. Noun: deformation. Close: distort / warp. Trap: reform / a planned CAD edit. Physics and DT. Shape spoiled by force or heat — quote N or °C.',
    ['distort', 'warp', 'misshape']
  ),
  deli: L(
    'A deli is a shop that sells cooked meats, cheeses, and salads (short for delicatessen, this batch): a high-street deli; at the deli. Cafe is broader; grocer is everyday food. Map the deli on the high-street transect, then the grid reference. Mix-up: deli vs delay; Delhi; do not write deli for a supermarket aisle with no named shop.',
    ['Map the deli on the high-street transect, then the grid reference, not a food slogan.', 'A station deli featured in the land-use map, which is still a named unit — quote the class if given.'],
    'a high-street deli; at the deli. Full form: delicatessen (this batch). Trap: delay / Delhi / a supermarket aisle. Geography and food tech. A cooked-meat and cheese shop — map it.',
    ['delicatessen', 'food shop', 'charcuterie']
  ),
  delicatessen: L(
    'A delicatessen is a shop that sells cooked meats, cheeses, and unusual or imported foods: a local delicatessen; delicatessen counter. Deli (this batch) is the short form; grocer is broader. Name the delicatessen in the land-use survey, then the class. Mix-up: delicatessen vs delicate; dessert; do not write delicatessen for a restaurant that only cooks meals to order with no counter sales.',
    ['Name the delicatessen in the land-use survey, then the class, the geography paper said.', 'An independent delicatessen featured in the high-street case, which is still a named unit — quote turnover if given.'],
    'a local delicatessen; delicatessen foods / counter. Short form: deli (this batch). Trap: delicate / a restaurant with no counter. Geography and business. A fine-food shop — name the unit and the class.',
    ['deli', 'fine-food shop', 'charcuterie']
  ),
  deliverable: L(
    'A deliverable is a piece of work that must be completed and handed over, especially in a project: a project deliverable; key deliverables. Delivery is the act or the goods; outcome is broader; milestone is a date twin. Name the deliverable in the project brief, then the deadline. Mix-up: deliverable vs delivery; delicious; do not write deliverable for a meeting with no named output.',
    ['Name the deliverable in the project brief, then the deadline, the business paper said.', 'A software deliverable featured in the sprint notes, which is still a named file or feature — quote the date.'],
    'a project / key deliverable; deliverables. Contrast: delivery (goods or the act). Close: output / milestone. Trap: a meeting with no output. Business and computing. Required work to hand over — name it and the date.',
    ['output', 'work package', 'product']
  ),
  delta: L(
    'A delta is a low area of land where a river splits into several streams as it meets the sea: a river delta; the Nile Delta. An estuary is a tidal river mouth, not always split; distributary is a branch. Map the delta on the OS extract, then the named distributary. Mix-up: delta vs data; the Greek letter Δ or a change in maths — use those only if the source is algebra; do not write delta for a single straight river mouth with no split.',
    ['Map the delta on the OS extract, then the named distributary, the geography paper said.', 'Delta sediment featured in the deposition case, which is still a named landform — quote the area if given.'],
    'a river delta; the Nile / Ganges Delta. Contrast: estuary. Maths sense: Δ. Trap: data / a straight mouth with no split. Geography. Land at a splitting river mouth — map the distributaries.',
    ['river mouth', 'alluvial fan (contrast)', 'distributary land']
  ),
  deluge: L(
    'A deluge is a sudden very heavy fall of rain: a deluge of rain; after the deluge. It is also a huge number of things arriving at once: a deluge of emails. Flood is a close twin; downpour is everyday. Quote the deluge in mm, then the return period. Mix-up: deluge vs deluxe; dilution; do not write deluge for drizzle in the table.',
    ['Quote the deluge in mm, then the return period, the geography paper said.', 'A deluge of complaints featured in the minutes, which is the huge-number sense — still quote the n.'],
    'a deluge of rain / water; a deluge of + noun. Close: flood / downpour. Trap: deluxe / drizzle. Geography and news. A sudden flood of rain or of things — quote mm or the n.',
    ['downpour', 'flood', 'torrent']
  ),
  demo: L(
    'A demo is informal for a demonstration: a protest demo, or a display of how a product works: a software demo; on a demo. Demonstration is the full form; protest is the politics twin; trial is a product twin. Date the demo in the news source, then the turnout. Mix-up: demo vs demo(lish); memo; do not write demo for a finished concert set unless the source uses demo for a sample recording.',
    ['Date the demo in the news source, then the turnout, not a slogan.', 'A product demo featured in the sales brief, which is the display sense — still name the model.'],
    'a protest demo; a software / product demo; a demo recording. Full form: demonstration. Trap: memo / demolish. Citizenship, computing, and music. A protest or a product display — date it or name the model.',
    ['demonstration', 'protest', 'trial run']
  ),
  democrat: L(
    'A democrat is a person who believes in or supports democracy (noun): a social democrat; democrats in. Democracy is the system; democratic is the adjective. US Democrat (capital D) is a party member — only if the source names that party. A democrat in the citizenship source still needs the named institution. Mix-up: democrat vs democratic; bureaucrat; do not write democrat for a monarchist in the extract.',
    ['A democrat in the citizenship source still needs the named institution, not a party slogan.', 'Social democrats featured in the manifesto, which is still a named programme — quote the policy if given.'],
    'a democrat; social democrats. System: democracy. Adjective: democratic. US party: Democrat. Trap: bureaucrat / a monarchist. Citizenship and history. A supporter of democracy — name the institution or the policy.',
    ['democratist', 'republican (contrast in UK sense)', 'popular-rule supporter']
  ),
  demon: L(
    'A demon is an evil spirit in stories and religion: a demon in; cast out demons. Devil is a close twin in some traditions; monster is broader. Name the demon only as the source names it, then the tradition. Mix-up: demon vs lemon; the informal “a demon for work” sense — use that only if the source names fierce skill; do not write demon for an ordinary villain with no spirit wording.',
    ['Name the demon only as the source names it, then the tradition, the RS paper said.', 'A demon in the poem still needs the quoted epithet, which is the literary sense — not a film caption.'],
    'a demon; cast out demons. Close: devil / evil spirit. Informal: a demon for work. Trap: lemon / an ordinary villain. RS and literature. An evil spirit — name the tradition or quote the line.',
    ['devil', 'fiend', 'evil spirit']
  ),
  dent: L(
    'A dent here is a hollow in a hard surface caused by a blow or pressure: a dent in; make a dent. As a verb, to make that hollow. Scratch is surface-only; hole goes through. Measure the dent in mm, then the impact energy if given. Mix-up: dent vs tent; the “make a dent in” idiom (reduce an amount) — still quote the £ if used; do not write dent for a painted scratch with no hollow.',
    ['Measure the dent in mm, then the impact energy if given, the physics paper said.', 'A dent in the budget featured in the accounts, which is the idiom — still quote the £ figure.'],
    'a dent in; make a dent; to dent. Contrast: scratch / hole. Idiom: make a dent in (reduce). Trap: tent / a flat scratch. Physics and DT. A hollow from a blow — quote mm.',
    ['hollow', 'indentation', 'dimple']
  ),
  dentures: L(
    'Dentures are false teeth; a set of artificial teeth (usually plural): a set of dentures; wear dentures. A plate is a close twin; implant is fixed in the jaw; braces (this batch) straighten natural teeth. Dentures in the NHS table still need the age band. Mix-up: dentures vs dents; adventure; do not write dentures for a single crown unless the source uses dentures.',
    ['Dentures in the NHS table still need the age band, not a toothpaste slogan.', 'Full dentures featured in the care plan, which is still a named appliance — quote the review date if given.'],
    'a set of dentures; wear / fit dentures. Close: plate / false teeth. Contrast: implant / braces. Trap: dents / a single crown. Biology and PSHE. False teeth — quote the age band or the review date.',
    ['false teeth', 'plate', 'dental prosthesis']
  ),
  deport: L(
    'To deport is to force a person who is not a citizen to leave a country: deport to / from; deported for. Deportation is the noun; expel is broader; extradite is to send someone for trial. Date the deportation order in the case, then the Act. Mix-up: deport vs report; port; do not write deport for a citizen sent to prison inside the UK.',
    ['Date the deportation order in the case, then the Act, the citizenship paper said.', 'A deported worker featured in the news extract, which is still a named destination — quote the country if given.'],
    'deport someone to / from; deported for. Noun: deportation. Close: expel / remove. Contrast: extradite. Trap: report / imprisoning a citizen. Citizenship and news. Force a non-citizen out — date the order and name the Act.',
    ['expel', 'remove', 'send back']
  ),
  deregulate: L(
    'To deregulate is to remove government rules that control a business or industry: deregulate the market; deregulated energy. Regulate is the twin; liberalise is a close policy twin. Deregulate in the economics case still needs the named industry and the year. Mix-up: deregulate vs regulate; irregular; do not write deregulate for a single fine against one firm.',
    ['Deregulate in the economics case still needs the named industry and the year, not a “free market” slogan.', 'Deregulated buses featured in the transport source, which is still a named Act — quote the year.'],
    'deregulate + industry / market; deregulated + noun. Twin: regulate. Close: liberalise. Trap: a single fine / irregular. Economics and citizenship. Remove official rules — name the industry and the Act.',
    ['liberalise', 'free up', 'remove controls']
  ),
  dermatology: L(
    'Dermatology is the branch of medicine that deals with the skin (usually uncountable): a dermatology clinic; dermatology referral. A dermatologist is the doctor; GP is general. A dermatology referral still needs the named condition. Mix-up: dermatology vs theology; dermis as the skin layer; do not write dermatology for a beauty salon with no clinician.',
    ['A dermatology referral still needs the named condition, the biology paper said.', 'Dermatology waiting times featured in the NHS table, which is still a named week-wait — quote it.'],
    'a dermatology clinic / referral; a dermatologist. Layer: dermis. Trap: theology / a beauty salon. Biology and PSHE. Skin medicine — name the condition or quote the wait.',
    ['skin medicine', 'cutaneous medicine', 'skin clinic']
  ),
  detachable: L(
    'Detachable means able to be removed and put back: a detachable hood; detachable strap. Detach is the verb; removable is a close twin; separate is broader. A detachable part in the DT spec still needs the fastening type. Mix-up: detachable vs attachable; detectable; do not write detachable for a part that is glued permanently in the source.',
    ['A detachable part in the DT spec still needs the fastening type, not a catalogue slogan.', 'A detachable cable featured in the kit list, which is still a named connector — quote the type if given.'],
    'a detachable hood / strap / lead. Verb: detach. Close: removable / separable. Trap: detectable / a glued part. DT and textiles. Able to come off and go back — name the fastening.',
    ['removable', 'separable', 'take-off']
  ),
  detector: L(
    'A detector is a device that finds or measures something, such as smoke, metal, or radiation: a smoke detector; a metal detector. Sensor is a close twin; alarm is the warning that may follow. Name the detector in the method, then the reading. Mix-up: detector vs defector (this batch); detective; do not write detector for a person searching a room with no device.',
    ['Name the detector in the method, then the reading, the science paper said.', 'A smoke detector featured on the site plan, which is still a named zone — quote the standard if given.'],
    'a smoke / metal / radiation detector. Close: sensor / alarm. Trap: defector / detective / a person with no device. Science and H&S. A device that finds something — name it and quote the reading.',
    ['sensor', 'probe', 'alarm']
  ),
  detonate: L(
    'To detonate is to explode, or to make a bomb or explosive explode: detonate a charge; detonated at. A detonator starts the explosion; explode is broader (already in the dictionary). Do not write detonate for a controlled burn; name the charge if the source gives it. Mix-up: detonate vs donate; denote; do not write detonate for a balloon pop unless the source names an explosive.',
    ['Do not write detonate for a controlled burn; name the charge if the source gives it, the H&S brief said.', 'The mine detonated in the history source, which is still a named device — quote the year.'],
    'detonate a charge / bomb / mine; a detonator. Broader: explode (already in B1). Trap: donate / denote / a balloon. History, H&S, and physics. Cause an explosive to go off — name the charge.',
    ['explode', 'blow up', 'set off']
  ),
  devolution: L(
    'Devolution is the transfer of power from a central government to a regional one (usually uncountable): devolution to; a devolution settlement. Devolve is the verb; decentralisation is a close twin; independence is a stronger break. Date devolution in the source, then the Act. Mix-up: devolution vs evolution; revolution; do not write devolution for a school passing a task to a prefect.',
    ['Date devolution in the source, then the Act, the citizenship paper said.', 'Health devolution featured in the White Paper, which is still a named power — quote the body if given.'],
    'devolution to Scotland / Wales / a mayor; a devolution settlement. Verb: devolve. Close: decentralisation. Contrast: independence. Trap: evolution / revolution. Citizenship and history. Passing power down — name the Act and the body.',
    ['decentralisation', 'home rule', 'power-sharing']
  ),
  diabetic: L(
    'Diabetic means having diabetes, or relating to that condition: a diabetic patient; diabetic diet. As a noun, a person with diabetes (some prefer person with diabetes). Diabetes is the noun of the illness. Diabetic prevalence in the NHS table still needs the year and the age band. Mix-up: diabetic vs dietetic; diabolic; do not write diabetic for a low-sugar snack with no clinical link in the source.',
    ['Diabetic prevalence in the NHS table still needs the year and the age band, not a food slogan.', 'A diabetic clinic featured in the care pathway, which is still a named caseload — quote the n if given.'],
    'a diabetic patient / clinic / diet; a diabetic (noun). Illness: diabetes. Trap: dietetic / a “diabetic” biscuit slogan with no diagnosis. Biology and PSHE. Of diabetes — quote prevalence or the caseload.',
    ['of diabetes', 'insulin-dependent (narrower)', 'person with diabetes']
  ),
  diagonal: L(
    'Diagonal means joining two opposite corners of a shape: a diagonal line; diagonally across. As a noun, that line: the diagonal of a square. Horizontal and vertical are the axis twins; oblique is a close twin. Draw the diagonal in the construction, then the length. Mix-up: diagonal vs diagram; diabolical; do not write diagonal for any slanted doodle that does not join opposite corners in the figure.',
    ['Draw the diagonal in the construction, then the length, the maths paper said.', 'A diagonal path featured on the site plan, which is still a named bearing — quote ° if given.'],
    'a diagonal line / stripe; the diagonal of; diagonally. Contrast: horizontal / vertical. Close: oblique. Trap: diagram / a random slant. Maths and DT. Corner to opposite corner — quote the length.',
    ['oblique', 'slanting', 'corner-to-corner']
  ),
  diarrhoea: L(
    'Diarrhoea is a condition in which waste from the body is watery and frequent (British spelling; usually uncountable): acute diarrhoea; a bout of diarrhoea. US spelling is diarrhea. Dysentery is a specific infection; loose stools is a clinical twin. Diarrhoea in the NHS table still needs the cause if given. Mix-up: diarrhoea vs diary; US diarrhea in a UK paper; do not write diarrhoea for ordinary constipation.',
    ['Diarrhoea in the NHS table still needs the cause if given, not a medicine slogan.', 'Travellers’ diarrhoea featured in the health brief, which is still a named setting — quote the advice if given.'],
    'acute / travellers’ diarrhoea (UK spelling). US: diarrhea. Close: loose stools. Trap: diary / constipation. Biology and PSHE. Watery frequent stools — UK spelling, name the cause if given.',
    ['loose stools', 'the runs (informal)', 'dysentery (narrower)']
  ),
  dice: L(
    'Dice are small cubes with numbered faces, used in games (one is a die; dice is usual as the plural): a pair of dice; roll the dice. This entry is the game sense, not the cooking verb “to dice”. Fair dice in the probability question still need the named sample space. Mix-up: dice vs dies; the food-cutting verb; do not write dice for a spinner with no cube in the source.',
    ['Fair dice in the probability question still need the named sample space, the maths paper said.', 'Loaded dice featured in the investigation, which is still a named bias — quote the frequencies if given.'],
    'a pair of dice; roll / throw the dice; a die (singular). Cooking verb: dice (cut into cubes) — not this sense. Trap: a spinner / dies. Maths and PE. Numbered cubes — name the sample space.',
    ['die', 'cubes', 'game cubes']
  ),
  diction: L(
    'Diction is the choice and use of words in speech or writing (usually uncountable): formal diction; poetic diction. It can also mean clarity of pronunciation. Vocabulary is the stock of words; style is broader; enunciation is the speech-clarity twin. Comment on diction only with a quoted word. Mix-up: diction vs dictionary; fiction; do not write diction for plot or for a silent stage picture.',
    ['Comment on diction only with a quoted word, the English paper said.', 'Clear diction featured in the speaking mark scheme, which is the pronunciation sense — still quote the criterion.'],
    'formal / poetic diction; clear diction. Close: wording / vocabulary / enunciation. Trap: dictionary / plot. English and drama. Word choice, or clear speech — quote the word or the criterion.',
    ['wording', 'phrasing', 'enunciation']
  ),
  dietician: L(
    'A dietician is a person trained to advise people on food and nutrition (also spelled dietitian): a registered dietician; see a dietician. Nutritionist is a close twin, not always the same protected title in UK law; chef cooks rather than advises. Name the dietician in the care plan, then the named condition. Mix-up: dietician vs physician; diabetic (this batch); do not write dietician for a food blogger with no qualification in the source.',
    ['Name the dietician in the care plan, then the named condition, not a diet slogan.', 'A hospital dietician featured in the multidisciplinary notes, which is still a named referral — quote the date.'],
    'a registered dietician; dietitian (variant spelling). Close: nutritionist (not always the same title). Trap: physician / a food blogger. Biology and PSHE. A specialist who advises on diet — name the condition and the referral.',
    ['dietitian', 'nutritionist', 'nutrition adviser']
  ),
}
