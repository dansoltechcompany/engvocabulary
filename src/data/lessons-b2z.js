const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2Z = {
  dairy: L(
    'Dairy is food made from milk — cheese, butter, yoghurt — or a farm or firm that produces it: dairy products; a dairy farm. Milk is the raw liquid; lactose is the sugar in it. Quote dairy in the nutrition table, then the fat per 100 g. Mix-up: dairy vs diary (already in many lower-level lists); daily; do not write dairy for a plant drink unless the source labels it as a dairy alternative.',
    ['Quote dairy in the nutrition table, then the fat per 100 g, not a farm slogan.', 'A dairy farm featured in the land-use map, which is the producer sense — still name the herd size if given.'],
    'dairy products / farm / cattle; a dairy (firm). Contrast: plant-based alternatives. Trap: diary / daily. Nutrition, geography, and food science. Milk products, or the farm that makes them — quote the table.',
    ['milk products', 'creamery', 'butter']
  ),
  dam: L(
    'A dam is a wall built across a river to hold back water, often for a reservoir or hydroelectric power: a hydroelectric dam; dam the river. Barrage is a close twin, often tidal; weir is lower. Map the dam on the OS extract, then the reservoir volume. Mix-up: dam vs damn (a swear word); damp; do not write dam for a garden pond with no barrier in the source.',
    ['Map the dam on the OS extract, then the reservoir volume, not a holiday-lake slogan.', 'A beaver dam featured in the ecology case, which is the animal-built sense — still name the watercourse.'],
    'a hydroelectric / concrete dam; dam the river; reservoir behind a dam. Close: barrage / weir. Trap: damn / damp. Geography and physics. A barrier holding back a river — name the volume or the power output.',
    ['barrage', 'weir', 'embankment']
  ),
  daring: L(
    'Daring means brave enough to take risks; as a noun, that willingness: a daring rescue; the daring of. Bold and audacious are close twins; reckless is the negative twin. Calling the rescue daring is not analysis; name the risk and the outcome. Mix-up: daring vs darling; staring; do not write daring for a mild preference with no risk in the source.',
    ['Calling the rescue daring is not analysis; name the risk and the outcome, the news extract said.', 'A daring reform featured in the Act, which is the policy-risk sense — still name the clause.'],
    'a daring + noun; the daring of; daring to + verb. Close: bold / audacious. Negative: reckless. Trap: darling. News, history, and literature. Willing to take risks — specify the risk.',
    ['bold', 'audacious', 'adventurous']
  ),
  darkness: L(
    'Darkness is the state of having little or no light (usually uncountable); also evil or ignorance in formal writing: hours of darkness; in darkness. Dark is the adjective (already in the dictionary); night is a time, not the absence of light itself. Hours of darkness featured in the climate table. Mix-up: darkness vs dark ness as two words; gloom; do not write darkness for a horror caption with no measured hours or a named metaphor in the source.',
    ['Hours of darkness featured in the climate table, not a horror caption.', 'A darkness in the poem still needs the named image, the literature paper said, which is the figurative sense.'],
    'hours of darkness; in / into darkness; darkness fell. Adjective: dark. Contrast: daylight / daytime. Trap: a film caption with no data. Geography, science, and literature. Absence of light — quote the hours, or name the metaphor.',
    ['gloom', 'night', 'shadow']
  ),
  darling: L(
    'A darling is a person who is loved; also a favourite of a group: my darling; a darling of the critics. Dear is a close twin in letters; favourite is the plainer twin for the critics sense. A darling of the critics still needs a named review. Mix-up: darling vs daring; Darwin; do not write darling for a brand slogan with no named person or review.',
    ['A darling of the critics still needs a named review, the media paper said.', 'Darling as a term of address featured in the letter, which is the loved-person sense — still name the writer.'],
    'my darling; a darling of + group. Close: dear / favourite. Trap: daring / Darwin. Media, literature, and letters. A loved person, or a favourite — name the review or the writer.',
    ['dear', 'favourite', 'beloved']
  ),
  daytime: L(
    'Daytime is the hours of the day when there is light, as opposed to night (usually uncountable): daytime temperature; in the daytime. Daylight is the light itself (already in the dictionary); night-time is the opposite. Daytime temperature featured in the climate table. Mix-up: daytime vs day time as two words in old sources; daylight; do not write daytime for a TV schedule slogan with no clock hours.',
    ['Daytime temperature featured in the climate table, not a soap-opera slogan.', 'A daytime ban featured in the by-law, which is the hours-of-daylight sense — still quote the clock times.'],
    'in the daytime; daytime hours / temperature / television. Close: daylight. Opposite: night / night-time. Trap: a schedule slogan. Geography, science, and citizenship. The light hours of the day — quote the temperature or the clock times.',
    ['daylight', 'day', 'morning']
  ),
  dearly: L(
    'Dearly means very much, or at a great cost: love dearly; pay dearly. Expensive is about price as an adjective; costly is a close twin for the cost sense. The council paid dearly for the delay; still quote the £ figure. Mix-up: dearly vs nearly; dear as the adjective (expensive or loved); do not write dearly for a cheap, reversible cost with no evidence.',
    ['The council paid dearly for the delay; still quote the £ figure, the inquiry said.', 'She loved the place dearly in the letter, which is the affection sense — still name the writer.'],
    'love / miss dearly; pay dearly for. Close (cost): costly. Adjective: dear. Trap: nearly. History, citizenship, and literature. Very much, or at great cost — quote the £ or name the person.',
    ['greatly', 'costly', 'fondly']
  ),
  deck: L(
    'A deck is a floor of a ship, a wooden platform, or a set of playing cards: the lower deck; a deck of cards. Pack is the usual British twin for cards; terrace is a close twin for a platform. Map the lower deck on the ship plan, then the passenger figure. Mix-up: deck vs desk; dock; do not write deck for a cruise slogan with no named deck or capacity.',
    ['Map the lower deck on the ship plan, then the passenger figure, not a cruise slogan.', 'A deck of cards featured in the probability practical, which is the pack sense — still name the sample space.'],
    'the upper / lower / flight deck; on deck; a deck of cards; decking. UK cards twin: pack. Trap: desk / dock. DT, maths, and geography. A ship floor, a platform, or a set of cards — specify.',
    ['pack', 'platform', 'level']
  ),
  deed: L(
    'A deed is an action, especially a notable one; also a legal document proving ownership: a good deed; a title deed. Act is a close twin for action; document and title are twins for the legal sense. Date the title deed in the archive, then the plot. Mix-up: deed vs need; dead; do not write deed for a slogan about kindness with no named act or register.',
    ['Date the title deed in the archive, then the plot, not a slogan about good deeds.', 'A heroic deed featured in the chronicle, which is the notable-action sense — still name the year.'],
    'a good / heroic deed; title / title deeds; in deed (contrast indeed). Close: act / title. Trap: need / dead. History, law, and RS. An action, or a legal ownership document — date the source.',
    ['act', 'title', 'document']
  ),
  deepen: L(
    'To deepen is to become or make deeper, stronger, or more serious: deepen a channel; a deepening crisis. Deep is the adjective (already in the dictionary); intensify is a close twin for a crisis. The deficit deepened; still quote the £ figure. Mix-up: deepen vs depend; deepen as a wellness slogan; do not write deepen for a one-off blip with no trend.',
    ['The deficit deepened; still quote the £ figure, the accounts said.', 'Deepen the trench in the fieldwork, which is the make-deeper sense — still record the centimetres.'],
    'deepen a + noun; a deepening crisis / recession. Adjective: deep. Noun: depth. Close: intensify. Trap: depend. Accounts, geography, and news. Make or become deeper or more serious — quote the figure.',
    ['intensify', 'worsen', 'strengthen']
  ),
  defender: L(
    'A defender is a person who protects a place, idea, or person; also a player whose job is to stop the other side scoring: a defender of the Act; a central defender. Defend and defence are already in the dictionary; advocate is a close twin for ideas. Name the defender in the PE report, then the foul. Mix-up: defender vs offender; defendant (the accused); do not write defender for a brand ambassador with no statute or match.',
    ['Name the defender in the PE report, then the foul; a defender of the Act still needs the statute.', 'A human-rights defender featured in the extract, which is the advocate sense — still name the organisation.'],
    'a defender of; a central / last defender. Verb: defend. Noun: defence. Legal trap: defendant. PE, citizenship, and news. Someone who protects, or a defensive player — name the Act or the match.',
    ['advocate', 'guard', 'back']
  ),
  defrost: L(
    'To defrost is to remove ice from a freezer or windscreen, or to thaw frozen food: defrost the freezer; defrost overnight. Thaw is the close food twin; de-ice is the windscreen twin. Defrost the sample in the food-science practical for the stated time. Mix-up: defrost vs frost (already related); deforest; do not write defrost for a cooker advert with no time or mass.',
    ['Defrost the sample in the food-science practical for the stated time, not a cooker advert.', 'Defrost the windscreen before the journey, the driving source said, which is the de-ice sense.'],
    'defrost the freezer / windscreen / chicken; leave to defrost. Close: thaw / de-ice. Trap: deforest / frost. Food science, H&S, and DT. Remove ice, or thaw food — state the time.',
    ['thaw', 'de-ice', 'unfreeze']
  ),
  dehydrate: L(
    'To dehydrate is to lose or remove water from a body or a substance: dehydrate the sample; become dehydrated. Dry is everyday; desiccate is the lab twin; rehydrate is the reverse. Dehydrate the sample in the practical, then record the mass loss. Mix-up: dehydrate vs hydrate; hydrogen; do not write dehydrate for a sports-drink slogan with no mass or urine-colour scale in the source.',
    ['Dehydrate the sample in the practical, then record the mass loss, not a sports-drink slogan.', 'The casualty was dehydrated in the first-aid paper, which is the body-water sense — still name the signs.'],
    'dehydrate a sample; become dehydrated; dehydration. Reverse: rehydrate. Lab twin: desiccate. Trap: hydrate. Biology, food science, and PE. Remove or lose water — record the mass or the clinical signs.',
    ['desiccate', 'dry', 'evaporate']
  ),
  delight: L(
    'Delight is a feeling of great pleasure; as a verb, to give that pleasure, or to take it (delight in): a delight to; delight in. Delightful is the adjective (already in the dictionary); pleasure is the everyday twin. Delight in the source is still not analysis; name the finding. Mix-up: delight vs daylight; light; do not leave delight as the whole evaluation with no named feature.',
    ['Delight in the source is still not analysis; name the finding, the paper said.', 'The garden was a delight in the letter, which is the noun sense — still name the plant if the biology paper asks.'],
    'a delight to + verb; delight in; take delight in. Adjective: delightful / delighted. Close: pleasure / joy. Trap: daylight. Literature, RS, and reviews. Great pleasure — still name the object; too vague alone in a write-up.',
    ['pleasure', 'joy', 'enjoyment']
  ),
  delighted: L(
    'Delighted means very pleased: delighted with; delighted to. Glad and pleased are milder twins; thrilled is stronger. The board was delighted with the surplus; still quote the £ figure. Mix-up: delighted vs delightful (about the thing, not the person); daylight; do not write delighted for a polite formula with no named result.',
    ['The board was delighted with the surplus; still quote the £ figure, the minutes said.', 'Delighted to accept featured in the letter, which is the formal-pleased sense — still name the post.'],
    'delighted with / at / to. Milder: pleased / glad. Stronger: thrilled. Trap: delightful (the thing). Citizenship, letters, and news. Very pleased — name the result or the post.',
    ['pleased', 'glad', 'thrilled']
  ),
  depot: L(
    'A depot is a place where vehicles, goods, or supplies are stored; also a small bus or train station: a bus depot; an ammunition depot. Warehouse is a close twin for goods; garage is everyday for vehicles; station is the passenger twin. Map the bus depot on the site plan, then the fleet size. Mix-up: depot vs deposit; deeper; US pronunciation /ˈdiːpəʊ/ is not the British exam form; do not write depot for a high-street shop with no fleet or stores.',
    ['Map the bus depot on the site plan, then the fleet size, not a warehouse slogan.', 'A rail depot featured in the freight case, which is the goods-yard sense — still name the cargo.'],
    'a bus / rail / goods depot; depot for + stores. Close: warehouse / yard. Trap: deposit. BrE /ˈdepəʊ/. Geography, DT, and transport. A store for vehicles or goods, or a small station — map it.',
    ['warehouse', 'yard', 'terminus']
  ),
  desirable: L(
    'Desirable means wanted because it is useful, attractive, or worth having: a desirable outcome; desirable to. Attractive is a close twin for places; advantageous is a close twin for policy. A desirable outcome still needs a named criterion. Mix-up: desirable vs desired; desire as a noun; do not write desirable for a slogan “must-have” with no criterion.',
    ['A desirable outcome still needs a named criterion, the evaluation said.', 'A desirable residence in the census is still not a sampling frame, which is the housing sense — still name the ward.'],
    'a desirable + noun; desirable to + verb; highly desirable. Close: attractive / advantageous. Trap: a slogan with no criterion. Evaluations, geography, and citizenship. Worth wanting — name the criterion.',
    ['attractive', 'advantageous', 'sought-after']
  ),
  dew: L(
    'Dew is small drops of water that form on cool surfaces at night (usually uncountable): dew point; morning dew. Condensation is the science twin; frost is frozen. Record dew in the microclimate practical, then the temperature. Mix-up: dew vs due; do; US /duː/ is not the British exam form; do not write dew for a skincare slogan with no temperature.',
    ['Record dew in the microclimate practical, then the temperature, not a skincare slogan.', 'Dew point featured in the weather table, which is the saturation-temperature sense — still quote °C.'],
    'morning dew; dew point; heavy with dew. Close: condensation. Contrast: frost. Trap: due. BrE /djuː/. Geography and physics. Night-time water drops — quote the temperature or the dew point.',
    ['condensation', 'moisture', 'mist']
  ),
  diameter: L(
    'A diameter is a straight line through the centre of a circle or sphere, or the length of that line: the diameter of; diameter in millimetres. Radius is half of it (a classic twin); circumference is the distance around. Give the diameter in millimetres, showing the working. Mix-up: diameter vs perimeter; diagram; do not write diameter for any width that does not pass through the centre.',
    ['Give the diameter in millimetres, showing the working, the maths paper said.', 'The pipe diameter featured in the DT spec, which is the engineering sense — still name the millimetres.'],
    'the diameter of a circle / sphere / pipe; diameter = 2 × radius. Twin: radius. Related: circumference. Trap: perimeter / diagram. Maths, physics, and DT. A line through the centre — show the working.',
    ['radius', 'width', 'calibre']
  ),
  differ: L(
    'To differ is to be unlike, or to disagree: differ from; differ on. Different is the adjective; disagree is the opinion twin; vary (already in the dictionary) is change within a range. The two datasets differ; still quote both means. Mix-up: differ vs defer (to postpone or yield); different; do not write differ for a single figure with no comparison.',
    ['The two datasets differ; still quote both means, the methods brief said.', 'The ministers differed on the clause, which is the disagree sense — still name the Act.'],
    'differ from / in / on; opinions differ. Adjective: different. Close: vary / disagree. Trap: defer. Methods, science, and citizenship. Be unlike, or disagree — quote both sides or both means.',
    ['vary', 'disagree', 'contrast']
  ),
  digestive: L(
    'Digestive means connected with digesting food; also a type of plain British biscuit: the digestive system; a digestive biscuit. Digestion is the process; alimentary is a close biology twin. Label the digestive system on the diagram. Mix-up: digestive vs suggestive; digest as a verb or a summary; do not write digestive for a biscuit slogan unless the source is food science or a shopping list in the extract.',
    ['Label the digestive system on the diagram, not a biscuit slogan unless the source is food science.', 'Digestive enzymes featured in the practical, which is the chemistry-of-digestion sense — still name the substrate.'],
    'the digestive system / tract / enzymes; a digestive biscuit (UK). Process: digestion. Trap: digest (summary) / suggestive. Biology and food. Of digestion, or a plain biscuit — specify.',
    ['alimentary', 'gastric', 'biscuit']
  ),
  dine: L(
    'To dine is to eat dinner, especially formally: dine on; dine out; dining in hall. Eat is everyday; dinner is the meal (already in the dictionary). They dined in hall; still name the college. Mix-up: dine vs din (a loud noise); diner; do not write dine for a snack in a corridor with no meal in the source.',
    ['They dined in hall; still name the college, the history source said, not a restaurant advert.', 'Dine out featured in the household survey, which is the restaurant sense — still quote the £ spend.'],
    'dine on / out / in hall; dining. Everyday: eat. Meal: dinner. Trap: din / diner. History, RS, and accounts. Eat a formal meal — name the hall or the £ spend.',
    ['eat', 'feast', 'sup']
  ),
  diner: L(
    'A diner is a person who is eating a meal, especially in a restaurant: diners at the table; a diner in the case. Guest and customer are close twins; dinner is the meal (already in the dictionary). Name the diner in the food-poisoning case, then the meal time. Mix-up: diner vs dinner (stress and spelling); dine; the US roadside café called a diner is not the British exam headword unless the source is American; do not write diner for that café as a default.',
    ['Name the diner in the food-poisoning case, then the meal time, not a US café slogan.', 'Covers (diners) featured in the catering accounts, which is the customer-count sense — still quote the n.'],
    'a diner; diners at. Close: guest / customer / cover. Trap: dinner / US roadside café. Health, catering, and accounts. A person eating a meal — name the time or the n, not an American café by default.',
    ['guest', 'customer', 'cover']
  ),
  dining: L(
    'Dining is the activity of eating a meal, especially a formal one: a dining hall; fine dining; dining room. Dine is the verb; dinner is the meal. Map the dining hall on the site plan, then the capacity. Mix-up: dining vs dinning (from din); dying; do not write dining for a canteen queue with no meal space in the source unless the plan labels it.',
    ['Map the dining hall on the site plan, then the capacity, not a restaurant slogan.', 'Fine dining featured in the tourism table, which is the high-cost meal sense — still quote the £ spend.'],
    'dining hall / room / table; fine dining; dining out. Verb: dine. Meal: dinner. Trap: dinning / dying. Geography, DT, and accounts. Eating a meal, especially formally — map the room or quote the spend.',
    ['eating', 'meal', 'banquet']
  ),
  dip: L(
    'To dip is to put something briefly into a liquid, or to fall a little; as a noun, a savoury sauce or a small fall: dip in; a dip in sales. Duck is a close twin for a quick movement; decline is stronger for a fall. Dip the sample in the reagent for the stated seconds. Mix-up: dip vs deep; drip; do not write dip for a collapse with no small, brief change in the source.',
    ['Dip the sample in the reagent for the stated seconds, the practical said.', 'A dip in the graph featured after 2019, which is the small-fall sense — still quote the units.'],
    'dip in / into; a dip in + noun; a savoury dip. Close: duck / decline (stronger). Trap: deep / drip. Science, economics, and food. Put briefly in liquid, a small fall, or a sauce — specify.',
    ['immerse', 'drop', 'fall']
  ),
  disable: L(
    'To disable is to stop a machine or function working, or to cause a lasting injury that limits activity: disable a feature; disabled by. Enable is the opposite (already in the dictionary); deactivate is the machine twin; injure is broader. Disable the alarm only if the H&S brief allows it. Mix-up: disable vs unable; disabled as a person-first term needs the source’s wording; do not write disable for a brief pause with no loss of function.',
    ['Disable the alarm only if the H&S brief allows it; still log the time.', 'A disabled access route featured on the site plan, which is the access sense — still name the gradient if given.'],
    'disable a function / alarm; disabled by; disablement. Opposite: enable. Close: deactivate. Trap: unable. Computing, H&S, and citizenship. Stop something working, or cause a lasting injury — log the time or name the access.',
    ['deactivate', 'incapacitate', 'immobilise']
  ),
  disagreement: L(
    'A disagreement is a situation in which people have different opinions, or the fact of not matching: a disagreement over; in disagreement. Conflict is stronger (already in the dictionary); dispute is a close twin; difference of opinion is plainer. A disagreement in the minutes still needs the named motion. Mix-up: disagreement vs agreement; disagree as the verb; do not write disagreement for a violent clash unless the source uses that scale.',
    ['A disagreement in the minutes still needs the named motion, the clerk said.', 'A disagreement between the two datasets featured in the methods, which is the mismatch sense — still quote both figures.'],
    'a disagreement over / about / with; in disagreement. Verb: disagree. Close: dispute / difference. Stronger: conflict. Citizenship, methods, and news. A clash of opinions, or a mismatch — name the motion or quote both figures.',
    ['dispute', 'conflict', 'difference']
  ),
  disc: L(
    'A disc is a flat round object; also a compact disc or a spinal disc (British spelling): a slipped disc; a compact disc. Disk (already in the dictionary) is the usual computing spelling; circle is the 2-D shape. A slipped disc featured in the medical notes. Mix-up: disc vs desk; dusk; do not write disc for a computer hard disk unless the source uses that spelling.',
    ['A slipped disc featured in the medical notes; a compact disc in the archive still needs the catalogue number.', 'An identity disc featured in the war source, which is the metal-tag sense — still name the regiment if given.'],
    'a compact / spinal / slipped disc; disc-shaped. Computing twin: disk. Trap: desk. Health, music archive, and history. A flat round object, a CD, or a spinal disc — UK spelling; specify.',
    ['disk', 'circle', 'CD']
  ),
  disco: L(
    'A disco is a place or event with recorded dance music; also that 1970s style: a school disco; disco music. Nightclub is broader; dance is the activity. Date the disco in the youth-club accounts, then the ticket figure. Mix-up: disco vs disc; discovery; do not write disco for a live orchestra concert with no recorded dance set.',
    ['Date the disco in the youth-club accounts, then the ticket figure, not a playlist slogan.', 'Disco as a genre featured in the music paper, which is the 1970s-style sense — still name the track if asked.'],
    'a school / youth disco; disco music / era. Close: nightclub / dance. Trap: disc / discovery. Media, PE, and accounts. A dance event or club, or 1970s dance music — quote the tickets or the track.',
    ['nightclub', 'dance', 'club']
  ),
  disobey: L(
    'To disobey is to refuse to do what a person, rule, or law tells you: disobey an order; disobey the rules. Obey is the opposite; defy is stronger; break is everyday for a rule. Pupils who disobey the fire drill still need the named sanction. Mix-up: disobey vs disagree; obey; do not write disobey for a debate with no order in the source.',
    ['Pupils who disobey the fire drill still need the named sanction, the H&S brief said.', 'Soldiers who disobey an order featured in the court martial source, which is the military sense — still name the charge.'],
    'disobey an order / a rule / the law. Opposite: obey. Close: defy / flout. Noun: disobedience. H&S, citizenship, and history. Refuse to follow a rule or order — name the sanction or the charge.',
    ['defy', 'flout', 'ignore']
  ),
  distinctly: L(
    'Distinctly means in a way that is clear and easy to notice, or definitely: distinctly different; I distinctly remember. Distinct is the adjective (already in the dictionary); clearly is the everyday twin. The two peaks are distinctly separate on the chromatogram. Mix-up: distinctly vs instinctively; extinctly (not a word); do not write distinctly for a vague impression with no named difference.',
    ['The two peaks are distinctly separate on the chromatogram, the practical said.', 'She distinctly remembered the clause, the witness said, which is the definitely sense — still quote the wording.'],
    'distinctly + adjective; distinctly remember. Adjective: distinct. Close: clearly / definitely. Trap: instinctively. Science, methods, and citizenship. Clearly, or definitely — name the difference or quote the wording.',
    ['clearly', 'definitely', 'markedly']
  ),
  ditch: L(
    'A ditch is a long narrow channel dug at the side of a field or road; as a verb (informal), to abandon: a drainage ditch; ditch the plan. Trench is deeper; drain is related. Map the drainage ditch on the OS extract, then the flood risk. Mix-up: ditch vs pitch; which; do not write ditch as slang in a formal write-up unless the source is informal.',
    ['Map the drainage ditch on the OS extract, then the flood risk, not a slang caption.', 'The party ditched the clause, the minutes said, which is the informal-abandon sense — still name the motion.'],
    'a drainage / roadside ditch; last-ditch; ditch + noun (informal). Close: trench / drain. Trap: pitch. Geography and news. A drainage channel, or (informal) to abandon — map the channel; keep slang out of formal prose.',
    ['trench', 'gully', 'abandon']
  ),
  diver: L(
    'A diver is a person who swims underwater with breathing equipment, or who dives as a sport: a scuba diver; a high diver. Dive is the verb; swimmer is broader; frogman is dated military. Name the diver in the PE result, then the depth. Mix-up: diver vs driver; river; do not write diver for a holiday brochure with no depth or named bout.',
    ['Name the diver in the PE result, then the depth, not a holiday brochure.', 'A salvage diver featured in the harbour case, which is the working-underwater sense — still name the wreck if given.'],
    'a scuba / pearl / salvage diver; high diving. Verb: dive. Trap: driver. PE, geography, and news. A person who goes underwater — name the depth or the wreck.',
    ['swimmer', 'frogman', 'scuba diver']
  ),
  dock: L(
    'A dock is a place in a port where ships load and unload; also the enclosed place in court for the accused: in dock; dry dock. Harbour is the wider water; quay and berth are close twins; the dock in court is not a harbour. Map the dock on the harbour plan, then the cargo. Mix-up: dock vs deck; doctor; do not write dock for a garden pond with no port in the source.',
    ['Map the dock on the harbour plan, then the cargo; the dock in court is the stand for the accused.', 'Wages were docked in the accounts, which is the deduct-pay sense of the verb — still quote the £ figure.'],
    'in dock; a dry / wet dock; the dock (court); dock wages (verb). Close: quay / berth. Trap: deck. Geography, history, and citizenship. A ship berth, the accused person’s stand, or to deduct — specify.',
    ['quay', 'berth', 'harbour']
  ),
  dome: L(
    'A dome is a round roof like half a sphere; also a rounded natural shape: a glass dome; the dome of. Cupola is a small dome; vault is a related roof; hemisphere is the solid. Map the dome on the site plan, then the span. Mix-up: dome vs home; doom; do not write dome for a slogan skyline with no span or named building.',
    ['Map the dome on the site plan, then the span, not a skyline slogan.', 'A granite dome featured in the geology case, which is the landform sense — still name the rock.'],
    'a glass / cathedral dome; domed. Close: cupola / vault. Trap: home / doom. DT, history, and geography. A hemispherical roof, or a rounded landform — name the span or the rock.',
    ['cupola', 'vault', 'hemisphere']
  ),
  doorway: L(
    'A doorway is the opening where a door sits; the space you walk through: in the doorway; a doorway into. Threshold and entrance are close twins; door is the moving panel. A witness in the doorway still needs a named time. Mix-up: doorway vs hallway; do not treat a doorway caption as a full site plan.',
    ['A witness in the doorway still needs a named time, the crime source said.', 'A doorway into the trade featured in the history extract, which is the figurative-entrance sense — still name the year.'],
    'in the doorway; a doorway into. Close: threshold / entrance. Related: door / doorstep. Trap: hallway. Citizenship, DT, and history. The opening of a door — name the time, or the figurative entrance.',
    ['threshold', 'entrance', 'portal']
  ),
  dot: L(
    'A dot is a small round mark; as a verb, to mark with dots: a dot on the map; dotted with. Point and spot are close twins; pixel is digital. Plot each data point as a dot on the scatter graph, showing the scale. Mix-up: dot vs tot; dote; the dot in an email address; do not write dot for a large shaded region on a choropleth.',
    ['Plot each data point as a dot on the scatter graph, showing the scale.', 'Villages dotted the valley on the OS extract, which is the verb sense — still name the grid squares.'],
    'a dot on; dotted with / along; the year of our Lord (not this headword). Close: point / spot. Trap: tot / dote. Maths, geography, and ICT. A small round mark, or to scatter like marks — show the scale.',
    ['point', 'spot', 'speck']
  ),
  doubtful: L(
    'Doubtful means not certain, or probably not true or not likely: doubtful about; it is doubtful whether. Doubt is the noun (already in the dictionary); uncertain is a close twin; unlikely is the probability twin. A doubtful claim still needs a named source. Mix-up: doubtful vs undoubted; doubtless; do not write doubtful for a proven figure in the table.',
    ['A doubtful claim still needs a named source, the handbook said.', 'It is doubtful whether the sample is large enough, the methods brief said, which is the unlikely sense — still quote the n.'],
    'doubtful about / of / whether; a doubtful claim. Noun: doubt. Close: uncertain / unlikely. Trap: doubtless. Methods, citizenship, and science. Uncertain or unlikely — name the source or quote the n.',
    ['uncertain', 'unlikely', 'questionable']
  ),
  downhill: L(
    'Downhill means towards the bottom of a slope; go downhill also means to get worse: ski downhill; go downhill. Downward is a close twin for direction without the slope; uphill is the opposite. Time the downhill section in the PE fixture, then the gradient. Mix-up: downhill vs down hill as two words; downfall; do not write downhill for a mild dip with no slope or decline in the source.',
    ['Time the downhill section in the PE fixture, then the gradient, not a ski advert.', 'Services went downhill after the cut, the inquiry said, which is the get-worse sense — still quote the £ figure.'],
    'go downhill; a downhill slope / race. Opposite: uphill. Close: downward. Trap: downfall. PE, geography, and evaluations. Down a slope, or getting worse — name the gradient or the cut.',
    ['downward', 'declining', 'sloping']
  ),
  downward: L(
    'Downward means moving or pointing towards a lower place or level; downwards is the usual British adverb: a downward trend; downwards. Downhill stresses a slope; decline is the noun/verb twin. A downward trend still needs the years and the units. Mix-up: downward vs forward; downward as a brand; do not write downward for a flat line.',
    ['A downward trend still needs the years and the units, the graph paper said.', 'Force the lever downward in the practical if the diagram says so, which is the direction sense.'],
    'a downward trend / spiral / force; downwards (adverb, UK). Close: downhill / declining. Opposite: upward. Maths, science, and economics. Towards a lower level — quote the years and the units.',
    ['declining', 'descending', 'falling']
  ),
  drain: L(
    'To drain is to remove liquid; as a noun, a pipe that takes liquid away; a drain on means a heavy use of money or energy: drain the filtrate; a blocked drain. Sewer is the larger waste system; exhaust is a close twin for energy. Drain the filtrate in the practical; a drain on the budget still needs the £ figure. Mix-up: drain vs grain; rain; do not write drain for a slogan “energy” with no pipe or cost.',
    ['Drain the filtrate in the practical; a drain on the budget still needs the £ figure.', 'A storm drain featured on the site plan, which is the pipe sense — still name the flood risk.'],
    'drain away / off; a drain on; down the drain; storm drain. Close: sewer / exhaust. Trap: grain. Science, geography, and accounts. Remove liquid, a waste pipe, or a heavy cost — specify.',
    ['empty', 'sewer', 'exhaust']
  ),
  dreadful: L(
    'Dreadful means extremely bad or unpleasant: a dreadful mistake; dreadful weather. Terrible and awful are close twins; all three are too vague alone in a write-up. Calling the flood dreadful is not analysis; quote the peak flow. Mix-up: dreadful vs dreadful as a review cliché; dread as a noun; do not leave dreadful as the whole evaluation.',
    ['Calling the flood dreadful is not analysis; quote the peak flow, the geography paper said.', 'A dreadful warning in the minutes still needs the named risk, the H&S brief said.'],
    'a dreadful + noun; dreadfully. Close: terrible / awful. Trap: a cliché with no figure. Geography, news, and H&S. Extremely bad — still quote the figure; too vague alone in a write-up.',
    ['terrible', 'awful', 'appalling']
  ),
  dressing: L(
    'A dressing is a covering for a wound, or a sauce for salad: a wound dressing; salad dressing. Bandage is a close medical twin; sauce is the food twin; dress is already in the dictionary. Change the dressing in the first-aid paper. Mix-up: dressing vs dressing-up; dresser; do not write dressing for clothes in general unless the source is getting dressed as a process.',
    ['Change the dressing in the first-aid paper; salad dressing in the nutrition table still needs the fat figure.', 'A dressing room featured in the theatre plan, which is the costume-space sense — still name the wing if given.'],
    'a wound / sterile dressing; salad dressing; dressing room. Close: bandage / sauce. Related: dress. Trap: clothes in general. Health, food science, and DT. A wound cover or a salad sauce — specify.',
    ['bandage', 'sauce', 'vinaigrette']
  ),
  dresser: L(
    'A dresser is a piece of furniture with cupboards and shelves (a kitchen or Welsh dresser); also a person who helps actors with costumes: a pine dresser; a theatre dresser. Sideboard is a close furniture twin; the US chest-of-drawers sense is not the first British exam meaning. A Welsh dresser featured in the inventory; name the wood. Mix-up: dresser vs dressing; dress; do not write dresser for a US bedroom chest unless the source is American.',
    ['A Welsh dresser featured in the inventory; name the wood, not a furniture slogan.', 'The dresser in the prompt book is the costume assistant, which is the theatre sense — still name the production.'],
    'a kitchen / Welsh dresser; a theatre dresser. Close: sideboard. US trap: chest of drawers. DT, history, and drama. A cupboard-and-shelf unit, or a costume assistant — specify; not a US chest by default.',
    ['sideboard', 'cupboard', 'costumer']
  ),
  drill: L(
    'A drill is a tool for making holes, or a repeated training exercise; as a verb, to make holes or to train that way: a fire drill; an electric drill. Practice is the PE twin; bore is a close verb twin. Time the fire drill in the H&S log; a drill in DT still needs the bit size. Mix-up: drill vs thrill; grill; do not write drill for a one-off talk with no repetition or no bit.',
    ['Time the fire drill in the H&S log; a drill in DT still needs the bit size.', 'Vocabulary drills featured in the scheme of work, which is the repeated-practice sense — still name the list.'],
    'a fire / electric drill; drill a hole; drill into. Close: practice / bore. Trap: thrill / grill. H&S, DT, and PE. A boring tool or a training exercise — log the time or the bit size.',
    ['practice', 'exercise', 'bore']
  ),
  drip: L(
    'To drip is to fall in drops; as a noun, a drop or a medical device that puts liquid into a vein: a dripping tap; on a drip. Drop is the everyday twin; leak is related; infusion is the medical twin. A drip in the medical notes still needs the rate. Mix-up: drip vs drop; trip; do not write drip for a flood with no drops in the source.',
    ['A drip in the medical notes still needs the rate; dripping taps featured in the water audit.', 'Paint dripped in the DT practical, which is the fall-in-drops sense — still name the material.'],
    'drip from; a dripping tap; on a drip (IV). Close: drop / leak / infusion. Trap: trip. Health, DT, and geography. Fall in drops, or a medical IV device — quote the rate or the audit.',
    ['drop', 'leak', 'trickle']
  ),
  drizzle: L(
    'Drizzle is very light rain; as a verb, to rain that way, or to pour a thin stream of liquid over food: light drizzle; drizzle oil. Rain is broader (already related); shower is heavier and shorter; mist is suspended droplets. Drizzle featured in the weather log. Mix-up: drizzle vs dribble; puzzle; do not write drizzle for a salad advert unless the source is food tech.',
    ['Drizzle featured in the weather log, not a salad advert unless the source is food tech.', 'Drizzle the oil in the food-tech method, which is the thin-stream sense — still name the millilitres.'],
    'light / fine drizzle; drizzle oil over. Close: rain / shower / mist. Trap: dribble. Geography and food tech. Light rain, or a thin stream of liquid — quote the log or the millilitres.',
    ['rain', 'spit', 'spray']
  ),
  dropout: L(
    'A dropout is a person who leaves school or university before finishing; also that rate: a university dropout; the dropout rate. Withdrawal is a close administrative twin; early leaver is plainer. The dropout rate still needs the year and the n. Mix-up: dropout vs drop out (the verb, two words); drop-off; do not write dropout as an insult with no figure.',
    ['The dropout rate still needs the year and the n, the education paper said.', 'A dropout from the trial featured in the methods, which is the lost-to-follow-up sense — still quote the n.'],
    'a school / university dropout; dropout rate; drop out (verb). Close: withdrawal / early leaver. Trap: drop-off. Education and methods. Someone who leaves a course early, or that rate — quote the year and the n.',
    ['withdrawal', 'leaver', 'non-completer']
  ),
  drown: L(
    'To drown is to die in water because you cannot breathe, or to kill that way; also to overwhelm with sound or liquid: drown out; drowned in. Suffocate is broader; flood is water on land (already in the dictionary). Drown in the safety brief is a named risk; still quote the RNLI figure if given. Mix-up: drown vs down; drone; do not write drown for a drama caption with no safety source.',
    ['Drown in the safety brief is a named risk; still quote the RNLI figure if given, not a drama caption.', 'The speech was drowned out by the protest, which is the overwhelm-with-sound sense — still name the motion.'],
    'drown in / out; drowned. Close: suffocate. Related: flood. Trap: down / drone. H&S, geography, and news. Die in water, or overwhelm — quote the safety figure, not a film caption.',
    ['suffocate', 'submerge', 'overwhelm']
  ),
  dryer: L(
    'A dryer is a machine that dries clothes (a tumble dryer) or hair (a hairdryer): a tumble dryer; dryer cycle. Drier is a spelling variant and also the comparative of dry; airer is a British non-electric twin. A tumble dryer in the energy table still needs the kWh figure. Mix-up: dryer vs drier (comparative); diary; do not write dryer for a brand slogan with no kWh.',
    ['A tumble dryer in the energy table still needs the kWh figure, not a brand slogan.', 'A hairdryer featured in the electrical-safety practical, which is the small-appliance sense — still name the wattage.'],
    'a tumble / spin dryer; a hairdryer; dryer than (comparative spelling drier). Close: airer. Trap: drier as only “more dry”. DT and physics. A machine for drying clothes or hair — quote kWh or watts.',
    ['airer', 'hairdryer', 'tumble dryer']
  ),
  dusk: L(
    'Dusk is the time of day when it is getting dark, just before night (usually uncountable): at dusk; dusk till dawn. Twilight and sunset are close twins; dawn is the morning opposite. Civil dusk featured in the fieldwork log, then the clock time. Mix-up: dusk vs dust; disc; do not write dusk for a postcard caption with no clock time.',
    ['Civil dusk featured in the fieldwork log, then the clock time, not a postcard caption.', 'A dusk curfew featured in the by-law, which is the clock-time sense — still quote the hour.'],
    'at dusk; from dusk till dawn; dusk falls. Close: twilight / sunset. Opposite: dawn. Trap: dust. Geography, science, and citizenship. The fading light before night — quote the clock time.',
    ['twilight', 'sunset', 'nightfall']
  ),
  dusty: L(
    'Dusty means covered with dust, or dry and powdery: a dusty shelf; a dusty track. Dust is the noun (already in the dictionary); dirty is broader; arid is the climate twin for dry land. A dusty archive still needs a named box number. Mix-up: dusty vs dusty as a cliché for old ideas; dusk; do not write dusty for a wet, muddy path.',
    ['A dusty archive still needs a named box number, the methods brief said.', 'A dusty track featured on the OS extract, which is the dry-surface sense — still name the grid square.'],
    'a dusty + noun; dusty pink (colour). Noun: dust. Close: dirty / powdery. Trap: dusk / a cliché “dusty ideas” with no source. Methods, geography, and history. Covered with dust, or dry and powdery — name the box or the grid.',
    ['dirty', 'powdery', 'grimy']
  ),
  dye: L(
    'Dye is a substance used to change the colour of something; as a verb, to colour that way: hair dye; dye the fabric. Colour is everyday; stain is often unwanted; pigment is a close science twin. Name the dye in the textile practical, then the fastness test. Mix-up: dye vs die (to stop living — a classic spelling trap); day; do not write dye for a hair advert with no fastness or named compound.',
    ['Name the dye in the textile practical, then the fastness test, not a hair advert.', 'A natural dye featured in the history source, which is the plant-colourant sense — still name the plant.'],
    'hair / fabric dye; dye + object; dyed. Science twin: pigment. Spelling trap: die. DT, chemistry, and history. A colouring substance, or to colour with it — name the compound or the plant.',
    ['colourant', 'pigment', 'stain']
  ),
  echo: L(
    'An echo is a sound reflected back; as a verb, to send that sound, or to repeat an idea: an echo of; echo the findings. Reverberation is a close physics twin; repeat is everyday. Measure the echo time in the physics practical; an echo of the Act still needs the clause. Mix-up: echo vs eco; ache; do not write echo for a slogan “your voice” with no reflection or named source.',
    ['Measure the echo time in the physics practical; an echo of the Act still needs the clause.', 'The later statute echoed the 1911 wording, which is the repeat-an-idea sense — still quote both clauses.'],
    'an echo of; echo back / the findings; echo time. Close: reverberation / repeat. Trap: eco. Physics, history, and media. A reflected sound, or a repeated idea — measure the time or quote the clause.',
    ['reverberation', 'reflection', 'repeat']
  ),
  ecologist: L(
    'An ecologist is a scientist who studies the relationships between living things and their environment: a marine ecologist; a plant ecologist. Ecology is the subject (already in the dictionary); biologist is broader; conservationist is often campaigning rather than lab-based. Name the ecologist in the paper, then the habitat. Mix-up: ecologist vs economist; ecologist as a TV presenter with no paper; do not write ecologist for a volunteer litter-pick unless the source names the science.',
    ['Name the ecologist in the paper, then the habitat, not a TV presenter.', 'A landscape ecologist featured in the EIA, which is the habitat-specialist sense — still name the site.'],
    'a marine / plant / landscape ecologist. Subject: ecology. Broader: biologist. Close: conservationist. Trap: economist / a presenter with no paper. Science and geography. A scientist of ecosystems — name the person and the habitat.',
    ['biologist', 'conservationist', 'naturalist']
  ),
  edible: L(
    'Edible means safe or suitable to eat: edible fungi; barely edible. Eatable is a close twin; palatable means pleasant to eat; inedible is the opposite; poisonous is a stronger warning. Mark the species edible only if the field guide says so. Mix-up: edible vs incredible; edible as a brand; do not write edible for a restaurant slogan with no species or safety test.',
    ['Mark the species edible only if the field guide says so, the biology practical said.', 'Edible oil featured in the nutrition table, which is the food-use sense — still quote the fat per 100 g.'],
    'edible fungi / plants / oil; barely edible. Opposite: inedible. Close: eatable / palatable. Trap: incredible. Biology and food science. Safe to eat — cite the field guide or the table, not a slogan.',
    ['eatable', 'palatable', 'safe to eat']
  ),
  educator: L(
    'An educator is a person whose job is to teach, or who designs teaching (formal): a teacher educator; health educators. Teacher is everyday; lecturer is HE; educate and education are already in the dictionary. Name the educator in the policy extract, then the role. Mix-up: educator vs equator; education as the system, not the person; do not write educator for a brand coach with no school or policy source.',
    ['Name the educator in the policy extract, then the role, not a brand coach.', 'A museum educator featured in the visit brief, which is the informal-learning sense — still name the gallery.'],
    'an educator; teacher educator; health educator. Everyday: teacher. Related: educate / education. Trap: equator. Education policy and RS. A teacher or education professional — name the role; formal, not a slogan.',
    ['teacher', 'tutor', 'lecturer']
  ),
  elastic: L(
    'Elastic means able to stretch and return to shape; as a noun, a strip of that material; demand can be elastic in economics: elastic band; elastic demand. Flexible is broader; stretchy is everyday; inelastic is the economics opposite. Plot elastic demand in the economics paper; elastic in the materials test still needs the extension. Mix-up: elastic vs plastic; electricity; do not write elastic for a slogan “flexible working” with no stretch or price-response in the source.',
    ['Plot elastic demand in the economics paper; elastic in the materials test still needs the extension.', 'An elastic band featured in the energy practical, which is the materials sense — still record the extension.'],
    'elastic band / demand; elasticity. Opposite (economics): inelastic. Close: flexible / stretchy. Trap: plastic. Physics and economics. Able to stretch back, a stretchy band, or responsive demand — specify.',
    ['stretchy', 'flexible', 'springy']
  ),
  elegance: L(
    'Elegance is the quality of being graceful and stylish, or of a solution that is simple and neat (usually uncountable): simple elegance; mathematical elegance. Style is broader; grace is a close twin; elegant is the adjective. Mathematical elegance is still not a proof; show the working. Mix-up: elegance vs elephant; eloquence; do not write elegance for a fashion slogan with no named design or proof.',
    ['Mathematical elegance is still not a proof; show the working, the paper said.', 'The façade’s elegance featured in the listing, which is the style sense — still name the period.'],
    'simple / classical elegance; mathematical elegance; elegant. Close: grace / style. Trap: elephant / eloquence. Maths, DT, and history. Graceful style, or neat simplicity — still show the working or name the period.',
    ['grace', 'style', 'refinement']
  ),
  elementary: L(
    'Elementary means very simple and basic, or of the first stages of a subject: an elementary error; elementary particles. Basic and simple are close twins; primary school is the usual British term — elementary school is American. An elementary error in the working still needs the named step. Mix-up: elementary vs element (already in the dictionary); alimentary; do not write elementary as a synonym for a British primary school unless the source is US.',
    ['An elementary error in the working still needs the named step, the mark scheme said.', 'Elementary particles featured in the physics paper, which is the first-principles sense — still name the particle.'],
    'an elementary error / particle / course. Close: basic / simple. US trap: elementary school = primary school. Related: element. Maths, physics, and education. Basic, or first-stage — not the usual UK word for primary school.',
    ['basic', 'simple', 'rudimentary']
  ),
  elsewhere: L(
    'Elsewhere means in, at, or to another place: look elsewhere; elsewhere in the extract. Somewhere is less definite; here and there are opposites of a named elsewhere. If the figure is not in Table 1, look elsewhere in the extract. Mix-up: elsewhere vs everywhere; nowhere; do not write elsewhere when the paper asks you to name the place.',
    ['If the figure is not in Table 1, look elsewhere in the extract, the paper said.', 'Jobs moved elsewhere after the closure, the geography case said, which is the another-place sense — still name the region if given.'],
    'look / live / move elsewhere; elsewhere in + noun. Close: somewhere else. Trap: everywhere. Methods, geography, and citizenship. In or to another place — still name it if the source does.',
    ['somewhere else', 'abroad', 'otherwise']
  ),
  emblem: L(
    'An emblem is a design or object that represents a country, organisation, or idea: a national emblem; emblem of. Symbol is the closest twin; logo is commercial; badge is worn. Name the emblem on the flag, then the statute if it is protected. Mix-up: emblem vs problem; emblazon; do not write emblem for a brand logo with no official status unless the source is marketing.',
    ['Name the emblem on the flag, then the statute if it is protected, the citizenship paper said.', 'A dove as an emblem of peace featured in the RS source, which is the idea-symbol sense — still name the tradition.'],
    'a national / royal emblem; emblem of. Close: symbol / badge. Commercial twin: logo. Trap: problem. Citizenship, history, and RS. A symbol of a group or idea — name the statute or the tradition.',
    ['symbol', 'badge', 'insignia']
  ),
  embroidery: L(
    'Embroidery is the art of sewing patterns with thread, or those sewn patterns: gold embroidery; an embroidery sampler. Sewing is broader; tapestry is woven; stitch is the unit. Date the embroidery in the museum catalogue, then the stitch type. Mix-up: embroidery vs embroider as a verb meaning to exaggerate a story; do not write embroidery for a printed pattern with no thread.',
    ['Date the embroidery in the museum catalogue, then the stitch type, not a fashion slogan.', 'Embroidery of the facts featured in the inquiry, which is the exaggerate-a-story sense of embroider — still quote the minutes.'],
    'gold / silk embroidery; an embroidery hoop / sampler. Verb: embroider (also “exaggerate”). Close: sewing / needlework. Trap: a print with no thread. History, DT, and literature. Sewn thread decoration — date the stitch; the story sense is the verb.',
    ['needlework', 'sewing', 'stitching']
  ),
  emerald: L(
    'An emerald is a bright green precious stone; also that colour: an emerald; emerald green. Beryl is the mineral family; jade is another green stone. An emerald in the geology case still needs the mineral name (beryl). Mix-up: emerald vs herald; enamel; do not write emerald for a jewellery slogan with no hardness or formula.',
    ['An emerald in the geology case still needs the mineral name (beryl), not a jewellery slogan.', 'Emerald green featured in the design brief, which is the colour sense — still name the code if given.'],
    'an emerald; emerald green; emerald (beryl). Close: jade / beryl. Trap: herald / enamel. Geology, chemistry, and DT. A green gem, or that colour — name the mineral or the colour code.',
    ['beryl', 'jade', 'green']
  ),
  emperor: L(
    'An emperor is the male ruler of an empire: the Roman emperor; emperor of. Empire is already in the dictionary; empress is the female twin; king rules a kingdom, usually smaller in rank in the sources. Name the emperor in the source, then the dates of rule. Mix-up: emperor vs empire; empower; do not write emperor for a film caption with no dates.',
    ['Name the emperor in the source, then the dates of rule, not a film caption.', 'The penguin called an emperor featured in the biology paper, which is the species sense — still name the Antarctic site.'],
    'the emperor of; Roman / Mughal emperor; empress (female). Related: empire. Trap: empower. History and biology (emperor penguin). The male ruler of an empire — name the dates, or the species if the paper is biology.',
    ['ruler', 'sovereign', 'monarch']
  ),
  emptiness: L(
    'Emptiness is the state of being empty, or a feeling of having no meaning or purpose (usually uncountable): a sense of emptiness; the emptiness of. Empty is the adjective (already in the dictionary); vacancy is a close twin for a place; void is more formal. Emptiness of the high street in the census still needs the year. Mix-up: emptiness vs emptiness as a poetry cliché; emptiness vs emptiness of calories in a slogan; do not leave emptiness as the whole evaluation with no year or n.',
    ['Emptiness of the high street in the census still needs the year, the geography paper said.', 'A spiritual emptiness in the poem still needs the named image, the literature paper said.'],
    'the emptiness of; a sense of emptiness. Adjective: empty. Close: vacancy / void. Trap: a cliché with no data. Geography, literature, and RS. Being empty, or a sense of no purpose — quote the year or name the image.',
    ['vacancy', 'void', 'blankness']
  ),
  enclosure: L(
    'An enclosure is an area surrounded by a fence or wall; also something put in the same envelope; Enclosure of common land is a history topic: an animal enclosure; please find enclosed. Enclose is the verb (already in the dictionary); paddock and compound are close twins for land; attachment is the email twin. Map the enclosure on the site plan, then the use. Mix-up: enclosure vs closure; disclosure; do not write enclosure for an open field with no barrier.',
    ['Map the enclosure on the site plan, then the use; an enclosure with the letter still needs the date.', 'Parliamentary enclosure featured in the history paper, which is the common-land sense — still name the Act.'],
    'an animal / show enclosure; an enclosure with a letter; Enclosure (history). Verb: enclose. Close: paddock / compound. Trap: closure. Geography, history, and letters. A fenced area, an included document, or historic fencing of land — specify.',
    ['paddock', 'compound', 'attachment']
  ),
  engrave: L(
    'To engrave is to cut words or a design into a hard surface: engrave on; an engraved inscription. Carve is a close twin, often in wood or stone in the round; etch uses acid; inscribe is a formal twin. Date the engraved inscription, then the metal. Mix-up: engrave vs grave (a burial); engage; do not write engrave for a printed logo with no cut surface.',
    ['Date the engraved inscription, then the metal, the history paper said.', 'An engraved plate featured in the print case, which is the printmaking sense — still name the artist if given.'],
    'engrave on / with; an engraved inscription / plate. Close: carve / etch / inscribe. Trap: grave / engage. History, DT, and art. Cut a design into a hard surface — date the metal or name the plate.',
    ['inscribe', 'etch', 'carve']
  ),
  enjoyable: L(
    'Enjoyable means giving pleasure: an enjoyable visit; enjoyable to. Enjoy is the verb (already in the dictionary); pleasant and fun are close twins; enjoyable is too vague alone in a write-up. Calling the trip enjoyable is not analysis; name the landform. Mix-up: enjoyable vs enjoyable as a review cliché; unenjoyable is rare — use unpleasant; do not leave enjoyable as the whole evaluation.',
    ['Calling the trip enjoyable is not analysis; name the landform, the geography paper said.', 'An enjoyable irony in the satire still needs the named target, the media paper said.'],
    'an enjoyable + noun; enjoyable to + verb. Verb: enjoy. Noun: enjoyment. Close: pleasant / fun. Trap: a cliché with no feature. Geography, media, and PE. Giving pleasure — still name the feature; too vague alone in a write-up.',
    ['pleasant', 'fun', 'agreeable']
  ),
  enjoyment: L(
    'Enjoyment is pleasure that you get from an activity (often uncountable): enjoyment of; for enjoyment. Enjoy and enjoyable are related; pleasure and fun are close twins. Enjoyment in the survey still needs the n and the scale. Mix-up: enjoyment vs employment; enjoyments as a rare countable; do not write enjoyment for a slogan with no instrument or n.',
    ['Enjoyment in the survey still needs the n and the scale, the methods brief said.', 'Public enjoyment of the path featured in the right-of-way case, which is the legal-access sense — still name the path.'],
    'enjoyment of; for enjoyment; public enjoyment. Verb: enjoy. Close: pleasure / fun. Trap: employment. Methods, PE, and citizenship. Pleasure from doing something — quote the n, or name the path in the legal sense.',
    ['pleasure', 'fun', 'satisfaction']
  ),
  enrolment: L(
    'Enrolment is the act of enrolling, or the number of people enrolled (UK spelling): enrolment on a course; falling enrolment. Enrol is the verb (already in the dictionary); registration is a close twin; US enrollment has two l’s — a classic spelling trap. Quote enrolment in the college table, then the year. Mix-up: enrolment vs employment; unroll; do not write enrolment for a slogan “join us” with no n.',
    ['Quote enrolment in the college table, then the year, not a prospectus slogan.', 'Enrolment on the electoral register featured in the citizenship paper, which is the official-list sense — still name the ward.'],
    'enrolment on / in; enrolment figures. Verb: enrol (UK). US spelling: enrollment. Close: registration. Trap: employment. Education and citizenship. Signing on, or the number signed on — UK spelling; quote the year and the n.',
    ['registration', 'intake', 'admission']
  ),
  enthusiast: L(
    'An enthusiast is a person who is very interested in a subject or activity: a railway enthusiast; an enthusiast for. Fan is everyday; amateur can be close; devotee is stronger. An enthusiast in the source is not a sampling frame; still name the club if given. Mix-up: enthusiast vs enthusiastic (the adjective); euthanasia; do not write enthusiast for a paid expert unless the source says so.',
    ['An enthusiast in the source is not a sampling frame; still name the club if given.', 'A keen enthusiast featured in the oral history, which is the amateur-expert sense — still name the collection.'],
    'a + noun + enthusiast; an enthusiast for. Adjective: enthusiastic. Close: fan / amateur / devotee. Trap: a sampling frame. History, media, and methods. A keen amateur of a subject — name the club; not a random sample.',
    ['fan', 'devotee', 'amateur']
  ),
  epic: L(
    'An epic is a long poem about heroes; as an adjective, very long or impressive: an epic poem; an epic journey. Saga is a close twin; heroic is related; Homeric names a tradition. Name the epic in the literature paper, then the hero; calling a match epic is not analysis without the score. Mix-up: epic vs epoch; epidemic; do not write epic for a slogan “huge” with no poem or measured scale.',
    ['Name the epic in the literature paper, then the hero; calling a match epic is not analysis without the score.', 'An epic fail in the informal source is slang — still recast it for a formal write-up.'],
    'an epic poem / journey; epic (adjective). Close: saga / heroic. Trap: epoch / informal “epic fail”. Literature, history, and media. A long heroic poem, or huge in scale — name the hero or the score; avoid slang in formal prose.',
    ['saga', 'heroic poem', 'legend']
  ),
  equalise: L(
    'To equalise is to make things equal; in sport, to score and make the score the same (UK spelling): equalise the concentrations; equalise in the 89th minute. Equal and equality are already in the dictionary; level is a close sport twin; US equalize has a z. Equalise the concentrations in the practical; a late equaliser still needs the minute. Mix-up: equalise vs equalise as a slogan; equation; do not write equalise for a one-sided score with no levelling goal.',
    ['Equalise the concentrations in the practical; a late equaliser still needs the minute, the PE report said.', 'A policy to equalise funding featured in the Act, which is the make-equal sense — still quote the £ per pupil.'],
    'equalise + noun; equalise (sport); an equaliser. US spelling: equalize. Related: equal / equality. Trap: equation. Science, PE, and citizenship. Make equal, or score to level a match — UK -ise; quote the minute or the £.',
    ['level', 'balance', 'even up']
  ),
  equator: L(
    'The equator is the imaginary line around the Earth at 0° latitude, halfway between the poles: the Equator; north of the equator. Latitude is the distance from it (already related in higher lists); tropics lie near it; meridian is longitude. Give the latitude relative to the equator, then the climate zone. Mix-up: equator vs equation; educator; do not write equator for a “hot country” with no latitude.',
    ['Give the latitude relative to the equator, then the climate zone, the geography paper said.', 'Equatorial rainforest featured in the biome case, which is the climate-belt sense — still name the degrees if asked.'],
    'the equator / Equator; north / south of the equator; equatorial. Related: latitude / tropics. Trap: equation / educator. Geography and science. The 0° latitude line — quote the degrees, not merely “hot”.',
    ['latitude', 'tropics', '0°']
  ),
  equity: L(
    'Equity is fairness in the way people are treated; also the value of shares, or of a house minus the mortgage (often uncountable): equity of treatment; negative equity. Equality is sameness of rights (already in the dictionary); fairness is the everyday twin; shares are the finance twin. Equity in the Act is fairness of treatment; negative equity still needs the £ figures. Mix-up: equity vs equality; equation; do not write equity for a slogan “fair” with no statute or £.',
    ['Equity in the Act is fairness of treatment; negative equity still needs the £ figures, the economics paper said.', 'Shareholders’ equity featured in the accounts, which is the finance sense — still quote the £ line.'],
    'equity of treatment; private equity; negative equity; shareholders’ equity. Close: fairness / equality (related, not identical). Trap: equation. Citizenship, economics, and accounts. Fairness, share value, or house value minus debt — specify and quote the £ or the Act.',
    ['fairness', 'shares', 'justice']
  ),
  erase: L(
    'To erase is to remove marks, data, or a recording so that they cannot be seen or heard: erase a file; erase from memory. Rub out is everyday British for pencil; delete is the computing twin; wipe is informal. Do not erase the raw data; keep the backup. Mix-up: erase vs ease; eraser (the rubber); do not write erase for a light edit that still leaves the original.',
    ['Do not erase the raw data; keep the backup, the methods brief said.', 'A name erased from the register featured in the archive, which is the historical-removal sense — still date the revision.'],
    'erase a file / mark / recording; erase from. Close: delete / rub out / wipe. Trap: ease. Methods, ICT, and history. Remove marks or data completely — keep the backup; date any register change.',
    ['delete', 'rub out', 'wipe']
  ),
  errand: L(
    'An errand is a short trip to do a small job, such as posting a letter or buying something: run an errand; on an errand. Task is broader; chore is household; message is dated. An errand in the time-use diary still needs the minutes. Mix-up: errand vs error (already in the dictionary); errant; do not write errand for a long journey or a full-time job.',
    ['An errand in the time-use diary still needs the minutes, the survey said.', 'A royal errand featured in the chronicle, which is the messenger sense — still name the year.'],
    'run / go on an errand; on an errand for. Close: task / chore. Trap: error / errant. Methods, history, and citizenship. A short trip to do a small job — quote the minutes, not a career.',
    ['task', 'chore', 'message']
  ),
  escort: L(
    'An escort is a person or group who goes with someone to protect or honour them; as a verb, to go with them that way: a police escort; escort to. Accompany is the everyday twin; convoy is for vehicles; guard stresses protection. Police escort featured in the court list; still name the hearing. Mix-up: escort vs effort; the noun /ˈeskɔːt/ vs the verb /ɪˈskɔːt/; do not write escort for a film caption with no named duty.',
    ['Police escort featured in the court list; still name the hearing, not a film caption.', 'Pupils were escorted to the bus, the H&S brief said, which is the accompany sense — still name the ratio.'],
    'a police / motorcycle escort; escort someone to. Close: accompany / convoy / guard. Stress: noun ˈeskɔːt, verb ɪˈskɔːt. Citizenship, H&S, and news. A protective companion, or to accompany for safety — name the hearing or the ratio.',
    ['accompany', 'convoy', 'guard']
  ),
  espresso: L(
    'Espresso is strong coffee made by forcing steam through ground beans (often uncountable as a type): an espresso; a double espresso. Coffee is the broader drink; cappuccino adds steamed milk. Espresso in the catering accounts is still a line item; name the £ figure. Mix-up: espresso vs express; expose; do not write espresso for a café slogan with no accounts line or caffeine measure.',
    ['Espresso in the catering accounts is still a line item; name the £ figure, not a café slogan.', 'Caffeine from espresso featured in the nutrition table, which is the stimulant sense — still quote mg per serving.'],
    'an espresso; a double espresso; espresso machine. Broader: coffee. Trap: express. Accounts, food science, and catering. Strong coffee made with steam under pressure — quote the £ or the mg, not a slogan.',
    ['coffee', 'cappuccino', 'shot']
  ),
}
