const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2AA = {
  absentee: L(
    'An absentee is a person who is not present when they are expected: an absentee from the roll; absenteeism. Absentee also describes ownership from a distance: an absentee landlord. Absence is the state (already related); truant is a pupil who stays away without leave. Quote the absentee rate in the attendance table, then the year. Mix-up: absentee vs absence; absent as the adjective; do not write absentee for a late arrival who is still on site.',
    ['Quote the absentee rate in the attendance table, then the year, not a slogan about “showing up”.', 'An absentee landlord featured in the housing case, which is the distant-owner sense — still name the Act if given.'],
    'an absentee from; absentee landlord / ballot; the absentee rate. Related: absence / absent. Close: truant (pupils). Trap: a latecomer who is present. Citizenship, housing, and education. Someone missing from a required place — quote the rate or name the landlord.',
    ['non-attender', 'truant', 'absentee landlord']
  ),
  acreage: L(
    'Acreage is an area of land measured in acres (often uncountable as a total): farm acreage; the acreage of. An acre is 4,047 m² (already useful as the unit); hectare is the metric twin (1 ha ≈ 2.47 acres). Give the acreage in the farm census, then convert to hectares if the paper asks. Mix-up: acreage vs average; acre as the unit; do not write acreage for a floor area in a building.',
    ['Give the acreage in the farm census, then convert to hectares if the paper asks.', 'Woodland acreage featured in the land-use map, which is still a named area — quote acres or hectares, not a countryside slogan.'],
    'farm / woodland acreage; the acreage of. Unit: acre. Metric twin: hectare. Trap: average / a floor plan. Geography and agriculture. Land area in acres — quote the figure and convert if asked.',
    ['area', 'hectarage', 'holding']
  ),
  activism: L(
    'Activism is the use of campaigning and public action to push for political or social change (usually uncountable): climate activism; political activism. An activist is the person; protest is a single action; lobbying is the parliamentary twin. Date the activism in the citizenship source, then the Act it sought. Mix-up: activism vs activity; active; do not write activism for a slogan with no named campaign or statute.',
    ['Date the activism in the citizenship source, then the Act it sought, not a protest slogan.', 'Student activism featured in the campus minutes, which is the organised-campaign sense — still name the motion.'],
    'climate / political / student activism; an activist. Close: campaigning / protest / lobbying. Trap: activity / a slogan with no Act. Citizenship, history, and news. Campaigning to change law or policy — name the statute or the motion.',
    ['campaigning', 'protest', 'advocacy']
  ),
  adaptability: L(
    'Adaptability is the ability to change so as to deal with new conditions (usually uncountable): adaptability to; show adaptability. Adapt is the verb (already in the dictionary); flexible is a close twin; resilience stresses recovery after stress. Adaptability in the job spec still needs a named task. Mix-up: adaptability vs adaptation (a change made); adopt; do not write adaptability for a copied method with no change in the source.',
    ['Adaptability in the job spec still needs a named task, the careers paper said.', 'Species adaptability featured in the biome case, which is the biology sense — still name the condition that changed.'],
    'adaptability to; show / demonstrate adaptability. Verb: adapt (already in B1). Noun twin: adaptation. Close: flexibility / resilience. Trap: adopt. Careers, biology, and geography. Ability to adjust — name the task or the condition.',
    ['flexibility', 'resilience', 'versatility']
  ),
  adjoining: L(
    'Adjoining means next to and joined or sharing a boundary with something: adjoining rooms; the adjoining parish. Adjacent is a close twin, not always physically joined; neighbouring is everyday. Map the adjoining parish on the OS extract, then the grid line. Mix-up: adjoining vs joining; enjoy; do not write adjoining for two sites separated by a named road unless the source says they share a boundary.',
    ['Map the adjoining parish on the OS extract, then the grid line, not a “next-door” caption.', 'Adjoining classrooms featured in the site plan, which is the shared-wall sense — still name the block.'],
    'adjoining + noun; the adjoining parish / field / room. Close: adjacent / neighbouring / attached. Trap: joining / a site across a road with no shared boundary. Geography, planning, and H&S. Next to and sharing a boundary — map it.',
    ['adjacent', 'neighbouring', 'attached']
  ),
  adolescence: L(
    'Adolescence is the period of life between childhood and adulthood (usually uncountable): in adolescence; adolescence and. An adolescent is the person; puberty is the physical change; teenage is informal. Quote the age band for adolescence in the NHS table, then the n. Mix-up: adolescence vs adults; obsolescence; do not write adolescence for a single birthday or for childhood.',
    ['Quote the age band for adolescence in the NHS table, then the n, not a teen-magazine caption.', 'Adolescence featured in the developmental-psychology extract, which is the life-stage sense — still name the years if given.'],
    'in / during adolescence; adolescence and adulthood. Person: adolescent. Close: puberty / teenage years. Trap: obsolescence / a single birthday. Biology, PSHE, and citizenship. The teenage years as a life stage — quote the age band.',
    ['teenage years', 'youth', 'puberty']
  ),
  advantageous: L(
    'Advantageous means likely to help or to put someone in a better position: advantageous to / for; an advantageous site. Advantage is the noun (already in the dictionary); beneficial is a close twin; profitable is the money twin. Calling a site advantageous is not analysis; name the criterion. Mix-up: advantageous vs adventurous (already in a B2 list); advantage; do not write advantageous for a slogan “win-win” with no named gain.',
    ['Calling a site advantageous is not analysis; name the criterion, the geography paper said.', 'An advantageous clause featured in the contract extract, which is the legal-gain sense — still name the clause number.'],
    'advantageous to / for; an advantageous + noun. Noun: advantage (already in B1). Close: beneficial / favourable. Trap: adventurous. Geography, economics, and citizenship. Helpful — name the criterion or the £.',
    ['beneficial', 'favourable', 'helpful']
  ),
  aerial: L(
    'Aerial means from the air: aerial photography; an aerial view. As a noun in British English, a metal rod that receives radio or TV signals (US antenna). Airborne is of things carried in the air; overhead is everyday. Date the aerial photograph in the enquiry, then the scale. Mix-up: aerial vs area; Ariel; do not write aerial for a ground-level snap labelled “from above” with no aircraft or drone in the source.',
    ['Date the aerial photograph in the enquiry, then the scale, not a holiday snap.', 'A TV aerial on the site plan still needs the height in metres, which is the British noun sense.'],
    'aerial photography / view / survey; a TV / radio aerial (UK noun). US twin for the noun: antenna. Trap: area / Ariel. Geography, media, and DT. From the air, or a UK signal rod — date the photo or quote the height.',
    ['airborne', 'overhead', 'antenna']
  ),
  agrarian: L(
    'Agrarian means connected with farming and the use of land for crops or livestock: an agrarian economy; agrarian reform. Agricultural is a close twin, often more technical; rural is of the countryside, not only farms; arable is crop land. An agrarian economy in the development case still needs the % in agriculture. Mix-up: agrarian vs aquarian; aggressive; do not write agrarian for a city park with no farmed land.',
    ['An agrarian economy in the development case still needs the % in agriculture, the geography paper said.', 'Agrarian reform featured in the history source, which is the land-law sense — still name the year and the Act.'],
    'an agrarian economy / society / reform. Close: agricultural / rural. Narrower: arable. Trap: a park with no farmed land. Geography, history, and citizenship. Of farming and farmed land — quote the % or the Act.',
    ['agricultural', 'farming', 'rural']
  ),
  ailment: L(
    'An ailment is an illness, especially one that is not thought to be very serious: a minor ailment; childhood ailments. Illness and disease are broader; complaint is a GP twin; condition can be long-term. Name the ailment in the GP notes, then the incidence. Mix-up: ailment vs aliment (food, rare); alignment; do not write ailment for a named emergency such as a stroke unless the source uses the word.',
    ['Name the ailment in the GP notes, then the incidence, not a wellness slogan.', 'Minor ailments featured in the pharmacy protocol, which is the non-emergency sense — still name the symptom.'],
    'a minor / common ailment; childhood ailments. Broader: illness / disease. Close: complaint. Trap: aliment / a named emergency. Biology and PSHE. A (usually milder) illness — name it and quote the incidence.',
    ['illness', 'complaint', 'condition']
  ),
  airborne: L(
    'Airborne means carried through the air: airborne particles; airborne transmission. It also describes troops dropped from aircraft: airborne forces. Aerial is from the air as a viewpoint; in-flight is of a journey. Airborne particles featured in the air-quality table, then the µg/m³. Mix-up: airborne vs airport; born; do not write airborne for a spill that stays on the bench.',
    ['Airborne particles featured in the air-quality table, then the µg/m³, not a perfume advert.', 'Airborne troops featured in the history source, which is the parachute sense — still name the operation and the year.'],
    'airborne particles / virus / transmission; airborne forces. Close: aerial / in-flight. Trap: airport / a liquid spill on the bench. Science, geography, and history. Carried in the air, or dropped from aircraft — quote µg/m³ or name the operation.',
    ['aerial', 'in-flight', 'wind-borne']
  ),
  airway: L(
    'An airway is the passage through which air reaches the lungs: a blocked airway; open the airway. It is also a route used by aircraft: a designated airway. Windpipe / trachea is the anatomical twin; corridor is the aviation twin. Keep the airway clear in the first-aid paper. Mix-up: airway vs runway; always; do not write airway for a corridor in a school with no breathing or flight sense.',
    ['Keep the airway clear in the first-aid paper; still name the manoeuvre if given.', 'An airway on the chart is a named flight corridor, which is the aviation sense — still quote the flight level if asked.'],
    'a blocked / clear airway; open the airway; an air-traffic airway. Anatomy twin: trachea. Aviation twin: corridor. Trap: runway. Biology, first aid, and geography. A breathing passage or an aircraft route — specify which.',
    ['trachea', 'windpipe', 'corridor']
  ),
  algebra: L(
    'Algebra is the branch of mathematics that uses letters to stand for numbers (usually uncountable): linear algebra; an algebra question. Arithmetic is number work without letters; equation is a statement that two sides are equal (already related). Show the algebra in the working, then the solution. Mix-up: algebra vs algae; Algeria; do not write algebra for a bar chart with no letters.',
    ['Show the algebra in the working, then the solution, the maths paper said.', 'An algebra identity featured in the proof question, which is the symbolic sense — still name the letters used.'],
    'linear / GCSE algebra; an algebra paper / question. Contrast: arithmetic. Related: equation / formula. Trap: algae / Algeria. Maths. Letters standing for numbers — show the working, not a slogan about “x”.',
    ['equations', 'symbolic maths', 'formulae']
  ),
  alkali: L(
    'An alkali is a soluble base that forms a solution with pH above 7: a strong alkali; alkali metals. A base is the broader class; acid sits opposite; alkaline is the adjective. Name the alkali in the titration, then the pH. Mix-up: alkali vs alcohol (already in the dictionary); algae; do not write alkali for a solid insoluble base unless the source says it dissolves.',
    ['Name the alkali in the titration, then the pH, not a cleaning slogan.', 'An alkali metal featured in Group 1 of the periodic table, which is the element sense — still name Li, Na, or K if given.'],
    'a strong / dilute alkali; alkali metals; alkaline solution. Broader: base. Opposite: acid. Adjective: alkaline. Trap: alcohol. Chemistry. A soluble base — quote the pH or name the Group 1 metal.',
    ['base', 'alkaline solution', 'lye']
  ),
  allergic: L(
    'Allergic means having an allergy: allergic to peanuts; an allergic reaction. Allergy is the noun (already in the dictionary); hypersensitive is a clinical twin; allergic to can be informal for “strongly opposed”. An allergic reaction in the medical notes still needs the named allergen. Mix-up: allergic vs algae; elegant; do not write allergic for a dislike with no immune response in the source.',
    ['An allergic reaction in the medical notes still needs the named allergen, the biology paper said.', 'Allergic to delay featured in the minutes, which is the informal-opposed sense — still keep the medical sense for science papers.'],
    'allergic to; an allergic reaction / rash. Noun: allergy (already in B1). Close: hypersensitive. Informal: allergic to + abstract noun. Trap: a dislike with no immune evidence. Biology and PSHE. Having an allergy — name the allergen.',
    ['hypersensitive', 'intolerant', 'reactive']
  ),
  alley: L(
    'An alley is a narrow passage between buildings: a back alley; alleyway. It is also a long lane for bowling: a bowling alley. A blind alley is a dead end, literal or figurative. Passage and lane are close twins. Map the alley on the crime extract, then the time. Mix-up: alley vs ally (a friend); allay; do not write alley for a dual carriageway.',
    ['Map the alley on the crime extract, then the time, not a tourist caption.', 'A bowling alley featured in the leisure accounts, which is the indoor-lane sense — still name the £ line.'],
    'a back alley; an alleyway; a bowling alley; a blind alley. Close: passage / lane. Trap: ally / allay / a main road. Geography, citizenship, and PE. A narrow passage, or a bowling lane — map it or quote the accounts.',
    ['passage', 'lane', 'alleyway']
  ),
  allotment: L(
    'An allotment is a small plot of public land rented for growing food: an allotment garden; on the allotment. It is also a share allocated to someone: an allotment of shares / funds. Plot and holding are land twins; allocation is the share twin. Map the allotment on the OS extract, then the plot number. Mix-up: allotment vs apartment; a lot of; do not write allotment for a private back garden unless the source says it is rented public land.',
    ['Map the allotment on the OS extract, then the plot number, not a seed slogan.', 'An allotment of funds featured in the minutes, which is the allocated-share sense — still quote the £ line.'],
    'an allotment garden / plot; on the allotment; an allotment of shares / time. Close: plot / allocation. Trap: apartment / a private garden. Geography, citizenship, and accounts. A rented food plot, or a share given out — map the plot or quote the £.',
    ['plot', 'holding', 'allocation']
  ),
  alloy: L(
    'An alloy is a metal made by mixing two or more metals, or a metal with a non-metal: a copper–tin alloy; alloy wheels. Bronze is copper and tin (already in a B2 list); brass is copper and zinc; steel is iron with carbon. Name the alloy in the materials table, then the % composition. Mix-up: alloy vs ally; allow (already in the dictionary); do not write alloy for a pure element in the data book.',
    ['Name the alloy in the materials table, then the % composition, not a jewellery slogan.', 'An alloy steel featured in the DT spec, which is the iron–carbon-plus sense — still name the extra metal if given.'],
    'a copper–tin alloy; an alloy of; alloy steel / wheels. Close: bronze / brass / steel. Trap: ally / allow / a pure metal. Chemistry and DT. A mixture of metals — quote the %.',
    ['mixture', 'blend', 'amalgam']
  ),
  almond: L(
    'An almond is an oval nut from the almond tree, eaten as food or pressed for oil: ground almonds; almond oil. It is a named allergen in labelling. Nut is the broader class; marzipan is the paste. Quote almond in the nutrition table, then the allergen warning. Mix-up: almond vs Almond (a place-name); diamond (already in a B2 list); do not write almond for a peanut unless the source names both.',
    ['Quote almond in the nutrition table, then the allergen warning, not a snack slogan.', 'Almond oil featured in the food-tech practical, which is the pressed-oil sense — still quote ml if given.'],
    'ground almonds; almond oil / essence; an almond allergen warning. Broader: nut. Trap: diamond / peanut unless named. Food science and PSHE. An oval edible nut — quote the allergen line.',
    ['nut', 'kernel', 'marzipan']
  ),
  alpine: L(
    'Alpine means of high mountains, especially the Alps: alpine climate; alpine plants. Montane is a close geography twin; upland is British everyday; altitude is the height (already in the dictionary). Alpine vegetation featured in the biome case; still quote the altitude in metres. Mix-up: alpine vs Alpine as a brand; Albania; do not write alpine for a lowland meadow in the source.',
    ['Alpine vegetation featured in the biome case; still quote the altitude in metres, not a ski slogan.', 'An alpine fold featured in the geology extract, which is the mountain-building sense — still name the range.'],
    'alpine climate / vegetation / pasture; the Alps. Close: montane / upland / high-altitude. Trap: a lowland field / a clothing brand. Geography and biology. Of high mountains — quote metres, not a slogan.',
    ['montane', 'upland', 'high-altitude']
  ),
  altar: L(
    'An altar is the table or raised structure in a place of worship where offerings or rites take place: the high altar; at the altar. A communion table is a Protestant twin in some churches; shrine is broader. Date the altar in the church plan, then the dedication. Mix-up: altar vs alter (to change — already in the dictionary; same IPA /ˈɔːltə/); do not write altar for a kitchen worktop.',
    ['Date the altar in the church plan, then the dedication, not a wedding slogan.', 'A side altar featured in the cathedral inventory, which is the secondary-table sense — still name the saint if given.'],
    'the high / side altar; at the altar; altar rail. Trap: alter (verb “to change”, already in B2; same sound). RS, history, and architecture. A raised table used in worship — date the plan, not a slogan.',
    ['communion table', 'shrine', 'sanctuary']
  ),
  amber: L(
    'Amber is a hard yellow-brown fossil resin: Baltic amber; an amber bead. It is also the middle UK traffic-light colour, and a mid-level weather warning: an amber warning. Yellow is everyday for the light (US); resin is the raw material. An amber warning still needs the Met Office time. Mix-up: amber vs ember; Ambrose; do not write amber for a red warning or for gold.',
    ['An amber warning still needs the Met Office time, not a jewellery slogan.', 'Amber in the geology case is fossil resin, which is the material sense — still name the period if given.'],
    'Baltic amber; an amber traffic light (UK); an amber weather warning. Contrast: red / green warnings. Trap: ember / gold. Geology, citizenship, and geography. Fossil resin, the middle light, or a mid-level warning — specify and date it.',
    ['resin', 'yellow-brown', 'mid-level warning']
  ),
  amino: L(
    'Amino refers to the chemical group —NH₂: an amino group; amino acids. Amino acids are the building units of proteins. Protein is the polymer; peptide is a short chain; base in DNA is a different chemistry. Name the amino acid in the biochemistry table, then the three-letter code. Mix-up: amino vs ammo; ammonia (related but not the same); do not write amino for a protein-shake slogan with no residue named.',
    ['Name the amino acid in the biochemistry table, then the three-letter code, not a protein-shake slogan.', 'An amino group featured in the structural formula, which is the —NH₂ sense — still count the atoms if asked.'],
    'an amino group / acid; amino acids in proteins. Related: peptide / protein. Trap: ammo / ammonia as the whole answer. Chemistry and biology. Of the —NH₂ group — name the residue or quote the code.',
    ['amino acid', 'peptide unit', 'NH₂ group']
  ),
  amp: L(
    'An amp is short for ampere, the SI unit of electric current: a 13-amp fuse; current in amps. It is also informal for an amplifier: a guitar amp. Current is the quantity; volt is potential difference; watt is power. Give the current in amps, showing the working. Mix-up: amp vs ampm (time); lamp; do not write amp for voltage unless the source converts with V = IR.',
    ['Give the current in amps, showing the working, the physics paper said.', 'A guitar amp featured in the DT inventory, which is the amplifier sense — still name the wattage if given.'],
    'current in amps; a 13-amp fuse; an amp (amplifier, informal). Full form: ampere. Related: volt / watt. Trap: voltage quoted as amps. Physics and DT. An ampere, or an amplifier — quote A or W.',
    ['ampere', 'ampère', 'amplifier']
  ),
  anatomy: L(
    'Anatomy is the study of the structure of bodies, or that structure itself: human anatomy; the anatomy of a leaf; the anatomy of a crisis (figurative). Physiology is how it works; morphology is form in biology more broadly. Label the anatomy on the diagram, then the organ. Mix-up: anatomy vs autonomy; atom (already in the dictionary); do not write anatomy for a fitness slogan with no named structure.',
    ['Label the anatomy on the diagram, then the organ, not a fitness slogan.', 'The anatomy of the Act featured in the citizenship paper, which is the figurative-structure sense — still name the clause.'],
    'human / plant anatomy; the anatomy of; anatomical. Contrast: physiology (function). Trap: autonomy / atom. Biology and RS. Body structure, or the study of it — label the organ, or name the clause in the metaphor.',
    ['structure', 'physiology', 'dissection']
  ),
  ancestry: L(
    'Ancestry is a person’s family origin over many generations (usually uncountable): of Irish ancestry; ancestry and descent. Ancestor is the person (already in the dictionary); descent is a close twin; lineage is more formal. Ancestry in the census still needs a named parish. Mix-up: ancestry vs ancestry.com as a brand; century; do not write ancestry for a single living parent.',
    ['Ancestry in the census still needs a named parish, the history paper said.', 'Genetic ancestry featured in the biology extract, which is the population-genetics sense — still name the marker if given.'],
    'of + adjective + ancestry; trace your ancestry; ancestry and descent. Person: ancestor (already in B2). Close: descent / lineage / heritage. Trap: a living parent only. History, biology, and citizenship. Family origin over generations — name the parish or the marker.',
    ['descent', 'lineage', 'heritage']
  ),
  anguish: L(
    'Anguish is severe mental or physical pain (usually uncountable): in anguish; cry of anguish. Agony is a close twin, often more physical; distress is milder; grief is for loss. Calling the source anguish is not analysis; name the event and the date. Mix-up: anguish vs language; angry; do not write anguish for mild annoyance in a survey.',
    ['Calling the source anguish is not analysis; name the event and the date, the history paper said.', 'Anguish in the poem still needs the named image, the literature paper said, which is the figurative sense.'],
    'in anguish; a cry / look of anguish. Close: agony / distress / torment. Trap: angry / mild annoyance. History, literature, and RS. Severe pain of mind or body — name the event, not a caption.',
    ['agony', 'torment', 'distress']
  ),
  annex: L(
    'An annex is an extra section at the end of a document: see Annex B; in the annex. As a verb /əˈneks/, to take land and add it to a state: annex territory. A building extension is often annexe in British English. Appendix is a close document twin; occupy is a military twin. Cite the annex, then the clause. Mix-up: annex vs an axe; index; do not write annex for the main body of the Act.',
    ['Cite the annex, then the clause, not a summary slide.', 'Annexed territory still needs the year and the treaty, which is the verb sense — name the states.'],
    'Annex A / B; in the annex; annex territory; a building annexe (UK). Close: appendix / addition. Stress: noun ˈæneks, verb əˈneks. Trap: the main Act / an axe. Methods, history, and citizenship. An extra document section, a land grab, or a wing — specify.',
    ['appendix', 'addition', 'takeover']
  ),
  anode: L(
    'The anode is the electrode at which oxidation occurs in a cell; in electrolysis it is the positive electrode: the anode; anode sludge. The cathode is the opposite electrode; electrode is the general term. Label the anode on the cell diagram, then the ion movement. Mix-up: anode vs anode as “a node”; cathode; do not write anode for a wire that is not an electrode in the circuit.',
    ['Label the anode on the cell diagram, then the ion movement, the chemistry paper said.', 'Anode mud featured in the copper-refining case, which is the industrial sense — still name the metal if given.'],
    'the anode; at the anode; anode sludge / mud. Opposite: cathode. Process: oxidation at the anode. Trap: a random wire / a node. Chemistry. The electrode where oxidation happens — label + or the ion flow as the paper requires.',
    ['positive electrode', 'electrode', 'oxidation site']
  ),
  antarctic: L(
    'Antarctic means of the region around the South Pole: the Antarctic; Antarctic ice. The Antarctic Circle is a line of latitude; the Arctic is the North Polar twin (this batch). Polar is broader. Give the latitude for the Antarctic station, then the ice-core year. Mix-up: antarctic vs Arctic; attic; do not write antarctic for a cold UK night with no polar source.',
    ['Give the latitude for the Antarctic station, then the ice-core year, not a penguin caption.', 'The Antarctic Treaty featured in the citizenship paper, which is the legal-region sense — still name the year (1959).'],
    'the Antarctic; Antarctic ice / Circle / Treaty. Twin: the Arctic (north). Broader: polar. Capitalise the region. Trap: attic / a cold night in Britain. Geography and science. The South Polar region — quote latitude or the treaty year.',
    ['South Polar', 'polar', 'the Antarctic']
  ),
  antenna: L(
    'An antenna is a feeler on an insect’s head (plural antennae) or a metal aerial for radio (plural antennas): insect antennae; a radio antenna. Aerial is the usual British word for the radio sense; feeler is everyday for insects. Count the antennae on the specimen. Mix-up: antenna vs anthem; Atenna; do not write antenna for a TV aerial in a UK source that already says aerial unless you are matching a science paper.',
    ['Count the antennae on the specimen; still name the order if given.', 'A radio antenna on the site plan still needs the height in metres, which is the signal sense — UK papers may say aerial.'],
    'insect antennae (plural); a radio / TV antenna (plural antennas). UK radio twin: aerial. Trap: anthem. Biology and physics. An insect feeler or a signal rod — count them or quote the height.',
    ['feeler', 'aerial', 'aerials']
  ),
  anthology: L(
    'An anthology is a published collection of poems, stories, or other pieces by various writers: a poetry anthology; an anthology of. A collection is broader (already in the dictionary); a collected works is usually one author; a reader is a teaching set. Name the poem in the anthology, then the page. Mix-up: anthology vs anthropology (this batch); apology (already in the dictionary); do not write anthology for a single worksheet poem.',
    ['Name the poem in the anthology, then the page, the literature paper said.', 'An anthology of folk song featured in the music source, which is the mixed-author sense — still name the editor.'],
    'a poetry / short-story anthology; an anthology of. Broader: collection (already in B1). Contrast: collected works (one author). Trap: anthropology / a single poem. Literature and music. A published mixed collection — name the piece and the page.',
    ['collection', 'selection', 'reader']
  ),
  anthropology: L(
    'Anthropology is the study of human societies, cultures, and physical development (usually uncountable): social anthropology; cultural anthropology. Sociology stresses modern industrial societies; ethnography is the fieldwork method; archaeology studies past material culture. Cite the anthropology paper, then the named group as the source names it. Mix-up: anthropology vs anthology (this batch); apology; do not write anthropology for a travel blog with no methods.',
    ['Cite the anthropology paper, then the named group as the source names it, the methods brief said.', 'Physical anthropology featured in the bones practical, which is the biological sense — still name the specimen.'],
    'social / cultural / physical anthropology; an anthropologist. Close: sociology / ethnography. Contrast: archaeology. Trap: anthology. Humanities and biology. The study of humans and cultures — cite the paper and name the group as the source does.',
    ['ethnography', 'sociology', 'human studies']
  ),
  antibody: L(
    'An antibody is a protein made by the immune system that binds to a particular antigen: monoclonal antibodies; antibody titre. Antigen is the matching target (this batch); immunoglobulin is the technical class; vaccine trains the system (already in the dictionary). Quote the antibody titre in the lab table, then the units. Mix-up: antibody vs antibiotic (already in the dictionary); anybody; do not write antibody for a vitamin tablet.',
    ['Quote the antibody titre in the lab table, then the units, not a vaccine slogan.', 'A monoclonal antibody featured in the treatment case, which is the medicine sense — still name the target antigen.'],
    'an antibody; antibody titre / test; monoclonal antibodies. Pair: antigen (this batch). Contrast: antibiotic (already in B1). Trap: anybody. Biology. An immune protein that binds an antigen — quote the titre.',
    ['immunoglobulin', 'immune protein', 'Ig']
  ),
  antigen: L(
    'An antigen is a substance that the immune system treats as foreign and may make antibodies against: a surface antigen; antigen test. Antibody is the matching protein (this batch); pathogen is a disease-causing organism, not every antigen; allergen is an antigen that triggers allergy. Name the antigen in the blood-group practical, then the reaction. Mix-up: antigen vs antique; again; do not write antigen for a named vitamin unless the source says it is immunogenic.',
    ['Name the antigen in the blood-group practical, then the reaction, the biology paper said.', 'An antigen test featured in the public-health table, which is the diagnostic sense — still quote the n and the date.'],
    'a surface / viral antigen; antigen test; blood-group antigens. Pair: antibody. Close: allergen / pathogen (related, not identical). Trap: antique. Biology and PSHE. A substance that triggers an immune response — name it and the reaction.',
    ['immunogen', 'surface marker', 'allergen']
  ),
  antonym: L(
    'An antonym is a word that means the opposite of another word: an antonym of hot is cold; antonym pairs. Synonym is the same-meaning twin; opposite is everyday. Give an antonym only if the mark scheme asks; still keep the source word. Mix-up: antonym vs antonym as “anti-name”; acronym; do not write antonym for a word that is merely different, not opposite.',
    ['Give an antonym only if the mark scheme asks; still keep the source word, the English paper said.', 'Gradable antonyms featured in the semantics question, which is the more/less sense — still name both poles.'],
    'an antonym of; antonym pairs; gradable antonyms. Opposite twin of: synonym. Everyday: opposite. Trap: acronym / a merely different word. English language. A word with the opposite meaning — pair it only when asked.',
    ['opposite', 'reverse', 'contrary']
  ),
  aorta: L(
    'The aorta is the main artery that carries blood from the left ventricle to the rest of the body: the aorta; aortic valve. An artery is any vessel from the heart (this batch); vena cava returns to the heart; atrium is a receiving chamber (this batch). Label the aorta on the heart diagram, then the oxygenated flow. Mix-up: aorta vs aura; ora; do not write aorta for a vein in the labelled figure.',
    ['Label the aorta on the heart diagram, then the oxygenated flow, the biology paper said.', 'Aortic stenosis featured in the medical notes, which is the valve sense — still name the chamber it leaves.'],
    'the aorta; aortic arch / valve; the descending aorta. Broader: artery (this batch). Contrast: vena cava / pulmonary artery (to the lungs). Trap: aura / a vein. Biology. The body’s main artery from the left ventricle — label the flow.',
    ['main artery', 'aortic vessel', 'great vessel']
  ),
  aperture: L(
    'An aperture is an opening, especially the adjustable opening in a camera lens that controls light: aperture f/8; a narrow aperture. An opening is everyday; f-number / f-stop is the photography measure; slit is a physics twin. Give the aperture (f-number) in the photography method, then the shutter time. Mix-up: aperture vs apartment; appetite; do not write aperture for a door unless the source uses the word.',
    ['Give the aperture (f-number) in the photography method, then the shutter time.', 'Aperture in the optics practical is a named slit width, which is the physics sense — still quote millimetres.'],
    'aperture f/8; a wide / narrow aperture; aperture priority. Close: opening / f-stop / slit. Trap: apartment / appetite. Media, DT, and physics. An opening that controls light — quote the f-number or the millimetres.',
    ['opening', 'f-stop', 'slit']
  ),
  apex: L(
    'The apex is the highest point of something: the apex of a triangle; the apex of the roof. It is also the most successful point: the apex of a career. Vertex is a maths twin; peak and summit are geography twins. Mark the apex of the triangle in the construction. Mix-up: apex vs appendix; ape; do not write apex for the midpoint of a side.',
    ['Mark the apex of the triangle in the construction; still name the equal sides if it is isosceles.', 'The apex of a career featured in the biography, which is the peak-success sense — still name the year.'],
    'the apex of a triangle / roof; at the apex; the apex of a career. Close: vertex / peak / summit. Trap: appendix / the midpoint. Maths, geography, and history. The highest or most successful point — mark it or date it.',
    ['peak', 'summit', 'vertex']
  ),
  apostrophe: L(
    'An apostrophe is the punctuation mark ’ used to show possession or missing letters: the pupil’s book; don’t. It is also a rhetorical remark addressed to someone absent: an apostrophe to the dead. Possessive and contraction are the two school uses. Correct the apostrophe in the title. Mix-up: apostrophe vs catastrophe; parenthesis; do not write apostrophe for a quotation mark “ ”.',
    ['Correct the apostrophe in the title; its vs it’s is still the classic trap, the English paper said.', 'A rhetorical apostrophe in the poem still needs the named addressee, which is the literary sense.'],
    'an apostrophe of possession / omission; it’s vs its. Rhetoric: an apostrophe to. Trap: quotation marks / catastrophe. English language and literature. The mark ’, or a remark to an absent person — correct the title or name the addressee.',
    ['possessive mark', 'omission mark', 'address']
  ),
  aquarium: L(
    'An aquarium is a tank of water for keeping fish or other water animals; also a building that displays them: a freshwater aquarium; the city aquarium. A tank is everyday; a vivarium is for land animals; aquatic is the adjective (this batch). Map the aquarium on the site plan, then the capacity in litres. Mix-up: aquarium vs aquatic; aqueduct; do not write aquarium for a garden pond with no tank walls in the source.',
    ['Map the aquarium on the site plan, then the capacity in litres, not a visitor slogan.', 'A public aquarium featured in the field-trip booklet, which is the building sense — still name the city if given.'],
    'a freshwater / marine aquarium; an aquarium tank / building. Adjective: aquatic (this batch). Close: tank / vivarium. Trap: aqueduct / a pond with no tank. Biology and geography. A tank or building for water animals — quote litres or name the site.',
    ['fish tank', 'marine tank', 'vivarium']
  ),
  aquatic: L(
    'Aquatic means living or happening in water: aquatic plants; aquatic sports. Marine is of the sea; freshwater is of rivers and lakes; terrestrial is of land. Name the aquatic species on the quadrat sheet, then the salinity if given. Mix-up: aquatic vs aquarium (this batch); aqua as a colour; do not write aquatic for a desert species in the source.',
    ['Name the aquatic species on the quadrat sheet, then the salinity if given.', 'Aquatic sports featured in the PE fixture list, which is the water-sport sense — still name the event and the time.'],
    'aquatic plants / animals / sports; an aquatic habitat. Close: marine / freshwater. Opposite flavour: terrestrial. Trap: aquarium as the adjective / a desert species. Biology, geography, and PE. Living or happening in water — name the species or the event.',
    ['marine', 'freshwater', 'water-dwelling']
  ),
  arable: L(
    'Arable means, of land, suitable for growing crops; also of farming that grows crops rather than livestock: arable land; arable farming. Pastoral is livestock farming; agrarian is of farming in general (this batch); crop is the plant (already in the dictionary). Map arable land on the OS extract, then the crop. Mix-up: arable vs able; Arabic; do not write arable for a steep crag with no ploughing in the source.',
    ['Map arable land on the OS extract, then the crop, not a farm slogan.', 'Arable output featured in the census, which is the production sense — still quote tonnes if given.'],
    'arable land / farming / crops. Contrast: pastoral / livestock. Broader: agrarian (this batch). Trap: Arabic / able. Geography and agriculture. Fit for growing crops — map the field and name the crop.',
    ['cultivable', 'farmable', 'crop-growing']
  ),
  archipelago: L(
    'An archipelago is a group of islands, or a sea with many islands: an island archipelago; the Malay Archipelago. An island is a single landmass; a chain or island group is a close twin; atoll is coral. Name the archipelago on the map, then the number of islands if given. Mix-up: archipelago vs architecture; pelagic; do not write archipelago for one named island.',
    ['Name the archipelago on the map, then the number of islands if given, the geography paper said.', 'An archipelago sea featured in the shipping case, which is the water-with-islands sense — still name the strait if given.'],
    'an archipelago; a volcanic archipelago; the + name + Archipelago. Close: island group / chain. Contrast: a single island. Trap: architecture. Geography. A group of islands — name it and count if the paper gives a figure.',
    ['island group', 'island chain', 'isles']
  ),
  arctic: L(
    'Arctic means of the region around the North Pole: the Arctic; Arctic sea ice. It is also informal for extremely cold. The Arctic Circle is a line of latitude; the Antarctic is the South Polar twin (this batch). Give the latitude for the Arctic station, then the sea-ice year. Mix-up: arctic vs Antarctic; article (already in the dictionary); do not write arctic for a mild frost in the UK climate table.',
    ['Give the latitude for the Arctic station, then the sea-ice year, not a polar-bear caption.', 'Arctic conditions in the fieldwork log still need the °C, which is the informal-cold sense — still quote the thermometer.'],
    'the Arctic; Arctic sea ice / Circle; arctic (informal: very cold). Twin: the Antarctic (south). Trap: article / a mild UK frost. Geography and science. The North Polar region — quote latitude, ice year, or °C.',
    ['North Polar', 'polar', 'the Arctic']
  ),
  aroma: L(
    'An aroma is a distinctive, usually pleasant smell, especially of food or drink: the aroma of coffee; a rich aroma. Smell is everyday (already in the dictionary); odour can be unpleasant; fragrance is often of perfume. Calling the sample an aroma is not a result; name the compound if the chromatogram gives it. Mix-up: aroma vs aroma as a brand; armour; do not write aroma for a gas leak named as a hazard in the H&S brief.',
    ['Calling the sample an aroma is not a result; name the compound if the chromatogram gives it.', 'Aroma in the sensory panel still needs the n and the scale, the food-tech paper said.'],
    'the aroma of; a rich / distinctive aroma. Everyday: smell (already in A2). Close: scent / fragrance. Contrast: odour (often unpleasant). Trap: a named gas hazard. Food science. A distinctive smell — name the compound or quote the panel score.',
    ['smell', 'scent', 'fragrance']
  ),
  artefact: L(
    'An artefact is an object made by a human, especially one of historical interest (British spelling; US artifact): a Bronze Age artefact; a museum artefact. In science, an artefact can be a false result caused by the method. Relic and find are close twins in archaeology; object is everyday. Date the artefact in the museum catalogue, then the material. Mix-up: artefact vs art fact as two words; article (already in the dictionary); do not write artefact for a natural fossil unless the source says it was worked.',
    ['Date the artefact in the museum catalogue, then the material, the history paper said.', 'A methodological artefact featured in the results, which is the false-signal sense — still name the control.'],
    'a museum / Bronze Age artefact; UK spelling artefact (US artifact). Close: relic / find. Science: a method artefact. Trap: article / a natural unworked fossil. History and science. A human-made object, or a false result — date the catalogue or name the control.',
    ['relic', 'find', 'object']
  ),
  artery: L(
    'An artery is a blood vessel that carries blood away from the heart: the pulmonary artery; a blocked artery. It is also a main road: a traffic artery. Vein returns blood (usually); capillary is the tiny twin; aorta is the main artery (this batch). Label the artery on the diagram, then oxygenated or deoxygenated. Mix-up: artery vs artistry; tree; do not write artery for a named vein in the figure.',
    ['Label the artery on the diagram, then oxygenated or deoxygenated, the biology paper said.', 'A transport artery still needs the A-road number, which is the route sense — map it on the OS extract.'],
    'a blocked / coronary artery; the pulmonary artery; a traffic artery. Contrast: vein / capillary. Related: aorta (this batch). Trap: artistry. Biology and geography. A vessel from the heart, or a main route — label the flow or the road number.',
    ['blood vessel', 'aorta', 'main road']
  ),
  arthritis: L(
    'Arthritis is a medical condition in which joints become painful, stiff, and often swollen (usually uncountable): rheumatoid arthritis; osteoarthritis. A joint is the place bones meet (already in the dictionary as shared); inflammation is the process; rheumatism is an older everyday word. Arthritis in the NHS table still needs the type and the age band. Mix-up: arthritis vs artist; arteritis; do not write arthritis for a one-off sprain unless the source names the condition.',
    ['Arthritis in the NHS table still needs the type and the age band, not a cream slogan.', 'Osteoarthritis featured in the ageing case, which is the wear-and-tear sense — still name the joint if given.'],
    'rheumatoid / osteo- arthritis; arthritis of the + joint. Related: inflammation / joint. Trap: artist / a sprain not named as arthritis. Biology and PSHE. Painful inflammation of the joints — quote the type and the age band.',
    ['joint inflammation', 'rheumatism', 'osteoarthritis']
  ),
  artisan: L(
    'An artisan is a skilled worker who makes things by hand, especially in a traditional trade: an artisan baker; artisan crafts. A craftsperson is a close twin; artist is of fine art (already in the dictionary); manufacturer is industrial. Name the artisan in the guild record, then the craft. Mix-up: artisan vs artist; artesian (a well); do not write artisan for a factory line with no named hand skill in the source.',
    ['Name the artisan in the guild record, then the craft, not a bakery slogan.', 'Artisan production featured in the economics case, which is the small-batch sense — still quote the n of workshops if given.'],
    'an artisan + trade; artisan crafts / production. Close: craftsperson / maker. Contrast: artist (fine art, already in A2); factory labour. Trap: artesian. History, DT, and economics. A skilled hand-maker — name the person and the craft.',
    ['craftsperson', 'maker', 'tradesperson']
  ),
  asbestos: L(
    'Asbestos is a fibrous mineral once used for insulation, now tightly controlled because of lung disease (usually uncountable): asbestos cement; asbestos survey. Mesothelioma is a related cancer in higher lists; insulation is the use; fibre is the form. Asbestos in the H&S brief still needs the survey date. Mix-up: asbestos vs asbestol; asbestus spelling; do not write asbestos for ordinary loft wool unless the survey names it.',
    ['Asbestos in the H&S brief still needs the survey date, not a DIY caption.', 'Asbestos fibres featured in the lung-disease case, which is the medical sense — still name the condition if given.'],
    'asbestos cement / insulation / survey; asbestos fibres. Related: mesothelioma / asbestosis. Trap: ordinary mineral wool unless named. Chemistry, geography, and citizenship. A hazardous fibrous mineral — quote the survey date, not a slogan.',
    ['fibrous mineral', 'insulation', 'amphibole']
  ),
  ascent: L(
    'An ascent is a climb or the act of going up: a steep ascent; the ascent of the peak. It is also a rise in status: the ascent of a party. Climb is the verb (already in the dictionary); descent is the opposite; gradient is the steepness. Time the ascent in the PE fixture, then the metres gained. Mix-up: ascent vs accent (speech); assent (agreement); do not write ascent for a downhill section.',
    ['Time the ascent in the PE fixture, then the metres gained, not a slogan.', 'The ascent of the party featured in the history source, which is the rise-in-power sense — still name the election year.'],
    'a steep / rapid ascent; the ascent of; make an ascent. Opposite: descent. Trap: accent / assent (classic trio). Geography, PE, and history. A climb, or a rise — quote metres or the year.',
    ['climb', 'rise', 'uphill']
  ),
  ascribe: L(
    'To ascribe is to say that something is caused by, or belongs to, a person or source: ascribe to; ascribed to. Attribute is a close twin; credit is for praise; blame is for fault (already in the dictionary). Ascribe the result to a named variable, then quote the r if given. Mix-up: ascribe vs describe; subscribe; do not write ascribe for a guess with no named source.',
    ['Ascribe the result to a named variable, then quote the r if given, the methods brief said.', 'A painting ascribed to a named artist featured in the catalogue, which is the authorship sense — still date the attribution.'],
    'ascribe something to; ascribed to. Close: attribute / put down to. Contrast: describe / subscribe. Trap: a guess with no source. Methods, history, and science. Attribute a cause or authorship — name the variable or the artist.',
    ['attribute', 'assign', 'put down to']
  ),
  assassin: L(
    'An assassin is a person who murders a political or public figure, often for pay or a cause: a paid assassin; assassination. Murder is the broader crime (already in the dictionary); killer is everyday; executioner is official. Name the assassin in the source only if the extract names them, then the year. Mix-up: assassin vs assign (already in the dictionary); assassination as the act; do not write assassin for a soldier in open battle unless the source uses the word.',
    ['Name the assassin in the source only if the extract names them, then the year, the history paper said.', 'Assassination featured in the citizenship case, which is the act — still name the office held, not a film caption.'],
    'an assassin; a paid assassin; assassination. Broader: murderer. Contrast: executioner (official). Trap: assign / a battle death not named as assassination. History and citizenship. Someone who murders a public figure — name them only if the extract does.',
    ['killer', 'murderer', 'hitman']
  ),
  asteroid: L(
    'An asteroid is a small rocky body orbiting the Sun, mainly in the belt between Mars and Jupiter: an asteroid belt; asteroid impact. A planet is much larger (already in the dictionary); a comet is icy; a meteor is the streak in the atmosphere; a meteorite reaches the ground. Name the asteroid in the data table, then the diameter in kilometres. Mix-up: asteroid vs steroid; astronomy as the subject; do not write asteroid for a named planet.',
    ['Name the asteroid in the data table, then the diameter in kilometres, the physics paper said.', 'An asteroid impact featured in the extinction case, which is the collision sense — still name the crater if given.'],
    'an asteroid; the asteroid belt; an asteroid impact. Contrast: planet / comet / meteor / meteorite. Trap: steroid. Physics and geography. A small rocky body orbiting the Sun — quote km, not a film caption.',
    ['minor planet', 'planetoid', 'rocky body']
  ),
  asthma: L(
    'Asthma is a condition that makes breathing difficult, with wheezing and tight airways (usually uncountable): an asthma attack; bronchial asthma. An inhaler is the device; allergy can be a trigger (already in the dictionary); airway is this batch. Asthma in the prevalence table still needs the year and the age band. Mix-up: asthma vs asma spelling; isthmus; do not write asthma for a one-off cough unless the source names the diagnosis.',
    ['Asthma in the prevalence table still needs the year and the age band, not an inhaler slogan.', 'An asthma attack featured in the first-aid paper, which is the acute sense — still name the trigger if given.'],
    'asthma; an asthma attack / inhaler; allergic asthma. Related: airway (this batch) / allergy (already in B1). Trap: a cough not diagnosed as asthma. Biology and PSHE. A long-term condition that tightens the airways — quote prevalence, not a slogan.',
    ['wheeze', 'bronchial spasm', 'respiratory condition']
  ),
  atrium: L(
    'An atrium is an upper chamber of the heart that receives blood: the left atrium; atrial. It is also a high open hall inside a building: a glass atrium. Ventricle is the pumping chamber; hall is everyday for the building. Label the left atrium on the heart diagram. Mix-up: atrium vs atrium as a brand; auditorium; do not write atrium for a corridor with a low ceiling unless the plan labels it.',
    ['Label the left atrium on the heart diagram; still name the vessel that enters it.', 'An atrium on the site plan still needs the capacity, which is the building sense — not a shopping slogan.'],
    'the left / right atrium; atrial fibrillation; a glass atrium (building). Contrast: ventricle. Trap: auditorium / a low corridor. Biology and architecture. A heart chamber, or a building’s open hall — label the vessel or quote capacity.',
    ['heart chamber', 'hall', 'forecourt']
  ),
  autopsy: L(
    'An autopsy is a medical examination of a dead body to find the cause of death: carry out an autopsy; autopsy report. Post-mortem is the usual British twin; inquest is the legal inquiry; dissection is broader. Date the autopsy in the coroner’s notes, then the cause if given. Mix-up: autopsy vs autocracy; audio; do not write autopsy for a living patient’s scan.',
    ['Date the autopsy in the coroner’s notes, then the cause if given, the citizenship paper said.', 'A psychological autopsy featured in the methods paper, which is the reconstructive sense — still name the source files.'],
    'an autopsy; carry out / perform an autopsy; autopsy report. UK twin: post-mortem. Related: inquest / coroner. Trap: a scan of a living patient. Citizenship, biology, and news. A post-mortem examination — date the notes and quote the cause if given.',
    ['post-mortem', 'PM', 'necropsy']
  ),
  auxiliary: L(
    'Auxiliary means giving extra help: auxiliary power; an auxiliary nurse. As a noun, a helper, or a verb such as be, have, or do that helps form a tense: an auxiliary verb. Spare and backup are everyday twins; modal is a type of auxiliary. An auxiliary generator still needs the kW rating. Mix-up: auxiliary vs luxury; axle; do not write auxiliary for the main power source in the spec.',
    ['An auxiliary generator still needs the kW rating, the DT paper said.', 'An auxiliary verb in the grammar paper is be, have, or do, which is the language sense — still name the tense formed.'],
    'auxiliary power / nurse / verb; an auxiliary. Grammar: be / have / do (and modals). Close: spare / backup / additional. Trap: luxury / the main supply. Physics, citizenship, and English. Extra help, a helper, or a helping verb — quote kW or name the tense.',
    ['additional', 'backup', 'helping verb']
  ),
  avalanche: L(
    'An avalanche is a large mass of snow, ice, and rock falling down a mountainside: an avalanche path; avalanche risk. It is also a sudden huge amount: an avalanche of complaints. Landslide is of soil and rock; blizzard is heavy snow in air. Map the avalanche path on the OS extract, then the volume if given. Mix-up: avalanche vs advance; lava; do not write avalanche for a light dusting of snow in the weather log.',
    ['Map the avalanche path on the OS extract, then the volume if given, not a ski slogan.', 'An avalanche of complaints featured in the minutes, which is the figurative-flood sense — still quote the n of letters.'],
    'an avalanche; avalanche path / risk / snow; an avalanche of + noun. Close: landslide / snowslide. Trap: a light snowfall / lava. Geography and news. A fall of snow and rock, or a sudden flood of things — map the path or quote the n.',
    ['snowslide', 'landslide', 'fall']
  ),
  avian: L(
    'Avian means of or relating to birds: avian influenza; avian species. Bird is everyday; ornithological is more technical; poultry is farmed birds. Name the avian species in the outbreak table, then the strain if given. Mix-up: avian vs avian as a brand; alien; do not write avian for a mammal in the source.',
    ['Name the avian species in the outbreak table, then the strain if given, the biology paper said.', 'Avian migration featured in the geography case, which is the bird-movement sense — still name the flyway if given.'],
    'avian influenza / flu / species; avian migration. Everyday: bird. Technical: ornithological. Trap: alien / a mammal. Biology and geography. Of birds — name the species or the strain, not a slogan.',
    ['bird', 'ornithological', 'fowl']
  ),
  axon: L(
    'An axon is the long fibre of a neurone that carries impulses away from the cell body: a myelinated axon; axon terminal. A dendrite carries signals towards the cell body; a nerve is a bundle (already in the dictionary); synapse is the gap. Label the axon on the neurone diagram, then the myelin if shown. Mix-up: axon vs axis (already in the dictionary); oxen; do not write axon for the whole nerve trunk unless the source says so.',
    ['Label the axon on the neurone diagram, then the myelin if shown, the biology paper said.', 'Axon speed featured in the practical, which is the conduction sense — still quote m/s if given.'],
    'an axon; myelinated axon; axon terminal. Contrast: dendrite. Related: neurone / synapse / nerve (already in B1). Trap: axis (already in B2). Biology. The long fibre that carries a nerve impulse away — label myelin or quote m/s.',
    ['nerve fibre', 'neurite', 'axis cylinder']
  ),
  eyewitness: L(
    'An eyewitness is a person who saw an event and can describe it: an eyewitness account; eyewitness testimony. As a verb, to see it happen. Witness is the broader legal twin (already in the dictionary); bystander may not have seen clearly; hearsay is second-hand. An eyewitness statement still needs a named time. Mix-up: eyewitness vs eyesight (a backup word, not this id); witness; do not write eyewitness for someone who only heard a rumour.',
    ['An eyewitness statement still needs a named time, the crime source said.', 'To eyewitness an event in the news extract is the verb sense — still name the place and the date.'],
    'an eyewitness; an eyewitness account / statement; to eyewitness. Broader: witness (already in B2). Contrast: hearsay / bystander. Trap: eyesight / a rumour. Citizenship and history. Someone who saw the event — quote the time, not a drama caption.',
    ['witness', 'observer', 'onlooker']
  ),
  explorer: L(
    'An explorer is a person who travels to little-known places in order to learn about them: a polar explorer; space explorer. Explore is the verb (already in the dictionary); traveller is broader; navigator stresses the route. Name the explorer in the source, then the year of the voyage. Mix-up: explorer vs explainer; explode (already in the dictionary); do not write explorer for a tourist on a named holiday with no enquiry.',
    ['Name the explorer in the source, then the year of the voyage, the geography paper said.', 'A data explorer in the ICT brief is the software sense — still name the file, not a travel slogan.'],
    'a polar / space explorer; an explorer of. Verb: explore (already in B1). Close: traveller / navigator / surveyor. Trap: explode / a holiday tourist. Geography and history. Someone who travels to unknown places to learn — name them and the year.',
    ['traveller', 'navigator', 'surveyor']
  ),
  excursion: L(
    'An excursion is a short journey or trip, especially one taken as a group for pleasure or study: a field excursion; on an excursion. A trip and a journey are broader (already in the dictionary); outing is everyday; expedition is longer and more serious. Log the excursion in the fieldwork booklet, then the grid reference. Mix-up: excursion vs excuse; explosion; do not write excursion for a full expedition of many months unless the source uses the word.',
    ['Log the excursion in the fieldwork booklet, then the grid reference, not a holiday slogan.', 'A fare excursion featured in the rail timetable, which is the cheap-return sense — still quote the £.'],
    'a field / school excursion; on an excursion; excursion fare. Close: outing / trip. Contrast: expedition (longer). Trap: excuse / explosion. Geography and citizenship. A short group trip — log the grid reference or the £.',
    ['outing', 'trip', 'jaunt']
  ),
  evergreen: L(
    'Evergreen means having green leaves all year: evergreen woodland; an evergreen tree. As a noun, such a tree or shrub. It also means remaining popular: an evergreen classic. Deciduous trees shed leaves; conifer is often evergreen but not always. Map the evergreen woodland on the OS extract, then the species. Mix-up: evergreen vs forever (already in the dictionary); green; do not write evergreen for a summer meadow that browns in winter.',
    ['Map the evergreen woodland on the OS extract, then the species, not a Christmas slogan.', 'An evergreen title featured in the media paper, which is the remaining-popular sense — still name the year of release.'],
    'evergreen woodland / tree / shrub; an evergreen (noun); an evergreen classic. Contrast: deciduous. Related: conifer. Trap: a seasonal meadow. Geography, biology, and media. Keeping leaves all year, or remaining popular — name the species or the year.',
    ['conifer', 'non-deciduous', 'perennial favourite']
  ),
  evict: L(
    'To evict is to force someone legally to leave a property: evict from; eviction. Eject is broader; expel is often from a school or country; rent is the payment (already in the dictionary). Date the eviction notice in the housing case, then the Act. Mix-up: evict vs convict; invert; do not write evict for a guest who leaves by choice.',
    ['Date the eviction notice in the housing case, then the Act, the citizenship paper said.', 'Tenants were evicted after the arrears figure, which is the rent-debt sense — still quote the £.'],
    'evict someone from; eviction notice / order. Noun: eviction. Close: eject / expel. Trap: convict / a voluntary move. Citizenship and housing. Force someone to leave a property by law — date the notice and name the Act.',
    ['eject', 'expel', 'turn out']
  ),
  etch: L(
    'To etch is to cut a design into a surface with acid or a sharp tool: etch on glass; an etched circuit. It also means to fix something clearly in the mind: etched in memory. Engrave is a close twin without acid (already in a B2 list); carve is in the round (already in a B2 list). Etch the board in the DT practical for the stated seconds. Mix-up: etch vs itch; fetch; do not write etch for a printed logo with no bite into the surface.',
    ['Etch the board in the DT practical for the stated seconds, not a craft slogan.', 'A memory etched in the source still needs the date, which is the figurative sense.'],
    'etch on / into; an etched plate / circuit; etched in memory. Close: engrave / carve (already in B2). Trap: itch / a printed sticker. DT, chemistry, and history. Cut a design with acid, or fix in the mind — quote seconds or the date.',
    ['engrave', 'incise', 'bite']
  ),
  eavesdrop: L(
    'To eavesdrop is to listen secretly to other people’s conversation: eavesdrop on; eavesdropping. Overhear can be accidental; spy is broader; bug is with a device. Eavesdrop is not a lawful methods tool; name the consent form if the source is an interview. Mix-up: eavesdrop vs eves; drop; do not write eavesdrop for a public speech that anyone may hear.',
    ['Eavesdrop is not a lawful methods tool; name the consent form if the source is an interview.', 'Eavesdropping featured in the crime extract, which is the secret-listening sense — still name the offence if the Act does.'],
    'eavesdrop on; eavesdropping. Close: overhear (may be accidental) / spy. Trap: a public speech / drop. Citizenship, methods, and news. Listen secretly to a conversation — name consent or the offence, not a drama caption.',
    ['overhear', 'listen in', 'spy']
  ),
  dynamite: L(
    'Dynamite is a powerful explosive used in blasting (usually uncountable as the substance): a stick of dynamite; dynamite charge. It is also informal for something very impressive: dynamite news. Explosive is the broader class (this batch); TNT is another named explosive; blast is the event. Dynamite in the quarry case still needs the charge mass. Mix-up: dynamite vs dynamic; dynamo; do not write dynamite for a firework unless the source names the substance.',
    ['Dynamite in the quarry case still needs the charge mass, the geology paper said, not a film caption.', 'Dynamite news in the media extract is the informal-impressive sense — still name the figure it reports.'],
    'a stick of dynamite; dynamite charge / blasting; dynamite (informal: impressive). Broader: explosive (this batch). Trap: dynamic / a firework not named as dynamite. Geography, chemistry, and news. A blasting explosive — quote the mass, not a slogan.',
    ['explosive', 'blasting gel', 'TNT']
  ),
  fable: L(
    'A fable is a short story, often with animals, that teaches a moral: Aesop’s fables; a moral fable. It is also a story that is not true: a mere fable. A parable is a moral tale, often religious; a myth is a traditional origin story; fiction is broader. Name the fable in the literature paper, then the moral. Mix-up: fable vs table; fabulous; do not write fable for a named historical source treated as fact in the extract.',
    ['Name the fable in the literature paper, then the moral, not a cartoon caption.', 'A fable in a news source is an untrue tale, which is the false-story sense — still quote the correction if given.'],
    'a moral fable; Aesop’s fables; a mere fable (untrue). Close: parable / allegory. Contrast: a factual chronicle. Trap: table / fabulous. Literature and media. A moral tale, or an untrue story — name the moral or the correction.',
    ['parable', 'allegory', 'tale']
  ),
  feast: L(
    'A feast is a large special meal: a wedding feast; feast on. It is also a religious festival: a movable feast. Banquet is a close formal twin; meal is everyday (already in the dictionary); festival is the holy-day twin. Date the feast in the parish record, then the occasion. Mix-up: feast vs feat (an achievement); least; do not write feast for a packed lunch in the fieldwork log.',
    ['Date the feast in the parish record, then the occasion, not a restaurant slogan.', 'A feast day featured in the RS calendar, which is the holy-day sense — still name the saint if given.'],
    'a wedding / harvest feast; feast on; a feast day. Close: banquet / festival. Trap: feat / a packed lunch. History, RS, and geography. A large special meal, or a holy day — date the record, not a slogan.',
    ['banquet', 'celebration', 'festival']
  ),
  explosive: L(
    'Explosive means able or likely to explode: an explosive gas; explosive decompression. As a noun, a substance that explodes. It also means sudden and intense: explosive growth. Explode is the verb (already in the dictionary); dynamite is a named type (this batch); volatile is of fumes. Name the explosive in the H&S brief, then the UN class. Mix-up: explosive vs explore (already in the dictionary); extensive; do not write explosive for a slow steady rise in the table.',
    ['Name the explosive in the H&S brief, then the UN class, not a film caption.', 'Explosive growth still needs the % and the years, which is the sudden-increase sense — quote both figures.'],
    'an explosive gas / device; an explosive (noun); explosive growth. Verb: explode (already in B1). Related: dynamite (this batch). Trap: explore / a slow rise. Chemistry, H&S, and economics. Likely to explode, a blasting substance, or sudden and intense — quote the class or the %.',
    ['volatile', 'blasting', 'sudden']
  ),
  extinction: L(
    'Extinction is the dying out of a species, or the state of no longer existing (usually uncountable): mass extinction; on the brink of extinction. Extinct is the adjective; endangered is not yet gone; extirpation is local loss. Quote the extinction date in the fossil table, then the species. Mix-up: extinction vs distinction; extinguish (already in a B2 list); do not write extinction for a fall in numbers that the table still lists as living.',
    ['Quote the extinction date in the fossil table, then the species, not a slogan.', 'Language extinction featured in the citizenship case, which is the dying-language sense — still name the language.'],
    'mass / species extinction; on the brink of extinction; extinct. Contrast: endangered / extant. Related: extinguish (put out — already in B2). Trap: distinction / a living population still in the table. Biology and geography. The dying out of a species — quote the date and the name.',
    ['dying out', 'disappearance', 'loss']
  ),
  entrant: L(
    'An entrant is a person who enters a competition, an organisation, or a country: a new entrant; competition entrants. Enter is the verb (already in the dictionary); candidate is for posts and exams; immigrant stresses moving country. Give the number of entrants in the results table, then the year. Mix-up: entrant vs entrance; intern; do not write entrant for a spectator who did not enter.',
    ['Give the number of entrants in the results table, then the year, the PE paper said.', 'A new entrant to the industry featured in the economics case, which is the market-entry sense — still name the firm.'],
    'a new / late entrant; competition entrants; an entrant to. Verb: enter (already in A2). Close: candidate / competitor / newcomer. Trap: entrance / a spectator. PE, economics, and citizenship. Someone who enters a contest, group, or country — quote the n.',
    ['competitor', 'candidate', 'newcomer']
  ),
  envious: L(
    'Envious means wanting what someone else has: envious of; an envious look. Envy is the noun and verb (this batch); jealous is a close twin, often about keeping what you have (already in the dictionary); resentful adds bitterness. Calling a character envious is not analysis; quote the line. Mix-up: envious vs famous; invoice; do not write envious for admiration with no wanting-to-have in the source.',
    ['Calling a character envious is not analysis; quote the line, the literature paper said.', 'Envious comparisons featured in the survey, which is the methods sense — still quote the n and the scale.'],
    'envious of; an envious look / glance. Noun/verb: envy (this batch). Close: jealous (already in A2) / resentful. Trap: famous / mere admiration. Literature, PSHE, and citizenship. Wanting what another person has — quote the line or the n.',
    ['jealous', 'covetous', 'resentful']
  ),
  envy: L(
    'Envy is the feeling of wanting what someone else has (usually uncountable as a feeling): green with envy; envy of. As a verb, to feel that way: envy someone. Envious is the adjective (this batch); jealousy often guards a relationship; covet is more formal. Envy in the ethics extract still needs the named example. Mix-up: envy vs envoy; end; do not write envy for a named budget line that is simply larger.',
    ['Envy in the ethics extract still needs the named example, not a caption about “wanting more”.', 'They envied the surplus in the accounts, which is the verb sense — still quote the £ figure.'],
    'envy of; green with envy; to envy someone. Adjective: envious (this batch). Close: jealousy / covetousness. Trap: envoy. Ethics, literature, and citizenship. Wanting what someone else has — name the example or quote the £.',
    ['jealousy', 'resentment', 'covetousness']
  ),
  excessive: L(
    'Excessive means more than is reasonable, allowed, or healthy: excessive noise; an excessive dose. Excess is the noun; too much is everyday; extreme is a close twin (already in the dictionary). Calling a dose excessive is not enough; quote the mg and the limit. Mix-up: excessive vs successive; access; do not write excessive for a figure that sits inside the named limit.',
    ['Calling a dose excessive is not enough; quote the mg and the limit, the science paper said.', 'Excessive rainfall featured in the flood case, which is the climate sense — still quote mm against the average.'],
    'excessive + noun; an excessive amount / dose. Noun: excess. Close: extreme (already in B1) / undue. Trap: successive / a value inside the limit. Science, geography, and citizenship. More than is reasonable — quote the figure and the limit.',
    ['undue', 'immoderate', 'too much']
  ),
  everlasting: L(
    'Everlasting means lasting for ever, or seeming to last for ever: everlasting peace; an everlasting flower. Eternal is a close twin (already in the dictionary); permanent stresses “not temporary”; endless is everyday. Calling a peace everlasting is not analysis; name the treaty and the year. Mix-up: everlasting vs everyday; forever (already in the dictionary); do not write everlasting for a one-year contract in the source.',
    ['Calling a peace everlasting is not analysis; name the treaty and the year, the history paper said.', 'Everlasting flowers featured in the biology case, which is the dried-bloom sense — still name the species.'],
    'everlasting peace / life / flower; an everlasting + noun. Close: eternal (already in B2) / permanent / endless. Trap: forever as a swap with no named term / a one-year contract. History, RS, and biology. Lasting for ever — name the treaty, the doctrine, or the species.',
    ['eternal', 'permanent', 'endless']
  ),
  exonerate: L(
    'To exonerate is to officially declare that someone is not to blame: exonerate from / of; exonerated by the inquiry. Acquit is the court twin; clear is everyday; absolve is often moral or religious. The inquiry exonerated the clerk; still name the report and the date. Mix-up: exonerate vs exaggerate; execute (already in a higher list); do not write exonerate for a person still named as responsible in the source.',
    ['The inquiry exonerated the clerk; still name the report and the date, the citizenship paper said.', 'Exonerated of the charge featured in the court list, which is the legal-clearing sense — still name the court.'],
    'exonerate someone from / of; exonerated by. Close: acquit / clear / absolve. Contrast: convict / accuse (already in B2). Trap: exaggerate / execute. Citizenship and history. Officially clear someone of blame — name the report and the date.',
    ['acquit', 'clear', 'absolve']
  ),
}
