const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2L = {
  defect: L(
    'A defect is a fault in a product, system, or argument: a software defect; a defect in the reasoning. Fault is everyday; flaw is close in essays. The verb /dɪˈfekt/ means to leave a group for the other side — rarer at B2. Do not call a preference a defect. Results-day portals: a defect delayed grades.',
    ['A software defect delayed results day for two hours.', 'Counsel pointed to a defect in the sampling frame, which is the argument sense.'],
    'a defect in; a manufacturing / software defect. Everyday: a fault. Essay: a flaw. Verb (leave a side): /dɪˈfekt/. Not a mere dislike. Product recalls and methods sections.',
    ['fault']
  ),
  delicate: L(
    'Delicate means easy to damage, or needing tact: delicate equipment; a delicate issue; delicate negotiations. Fragile is close for objects; sensitive is close for topics. Do not call a blunt Ofsted letter delicate. Pay talks at a delicate stage. Mix-up: delicious is about taste.',
    ['Pay talks are at a delicate stage after the walkout.', 'Handle the archive maps; they are delicate, which is the physical sense.'],
    'a delicate issue / stage / balance. Objects: fragile. Topics: sensitive. Mix-up: delicious. Diplomacy and labs. Not a synonym of weak in every sentence.',
    ['fragile']
  ),
  despair: L(
    'Despair is the feeling that there is no hope (often uncountable): in despair; a look of despair. The verb is despair of. Desperate is the adjective (already in the dictionary) and is not a drop-in noun. Hopelessness is a close twin. Do not use despair for mild annoyance at a late bus. Appeals: parents wrote in despair.',
    ['Parents wrote in despair after the third cancellation of paper two.', 'Staff began to despair of a date, which is the verb.'],
    'in despair; despair of + -ing. Adjective: desperate (not the noun). Close: hopelessness. Strong register — not a delayed train. Letters and comment pieces.',
    ['hopelessness']
  ),
  detach: L(
    'To detach is to separate something from what it was joined to: detach the form; a detached house (adjective: not joined). Unfasten is everyday for clips. Attach is an opposite. Exam booklets: detach the answer sheet. Do not mix with detect (find) or detain (hold).',
    ['Detach the answer sheet before you post the booklet.', 'A detached observer is the academic tone, which is the figurative adjective.'],
    'detach something from. Opposite: attach. Housing: a detached house. Academic: a detached tone. Mix-up: detect / detain. Instructions and science (detach a sample).',
    ['unfasten']
  ),
  dictate: L(
    'To dictate is to say words for someone to write, or to control what happens: dictate a letter; circumstances dictate that. A dictator is the noun for a ruler (separate headword). Prescribe is close in formal policy. Do not let the word limit dictate a thin argument. Mix-up: dictation is the classroom activity.',
    ['Do not let the word limit dictate a thin argument.', 'She dictated the statement to a clerk, which is the speech-to-text sense.'],
    'dictate that / what; dictate a letter. Noun (ruler): dictator. Classroom: dictation. Close (rules): determine / prescribe. Essays: do not let X dictate Y.',
    []
  ),
  dilute: L(
    'To dilute is to make a liquid weaker with water, or to weaken an effect: dilute the sample; dilute the brand / offer. Water down is the informal twin. Concentrate is an opposite in the lab. Heads warned extra options would dilute A-level. Do not use it for simply adding staff.',
    ['Extra options will dilute the core A-level offer, heads warned.', 'Dilute the reagent as the protocol states, which is the chemistry sense.'],
    'dilute with water; dilute the impact / brand. Informal: water down. Lab opposite: concentrate. Policy: a diluted offer. Not “dilute the building”.',
    []
  ),
  dimension: L(
    'A dimension is a measurement (length, width, height), or an aspect of a problem: three dimensions; a political dimension. Aspect and angle are close in essays. Size is everyday for objects. The report added an ethical dimension. Do not write “a dimension of 3 metres” if you mean length — say length unless you mean the full set of measurements.',
    ['The report adds an ethical dimension the board had ignored.', 'Check the crate’s dimensions before you book the van, which is the measurement sense.'],
    'a social / ethical / political dimension; in two / three dimensions. Close (essays): aspect. Objects: measurements / dimensions. Maths: a dimension of a space.',
    ['aspect']
  ),
  disastrous: L(
    'Disastrous means causing serious damage or failure: a disastrous launch; disastrous consequences. Disaster is the noun (already in the dictionary). Catastrophic is stronger; unfortunate is weaker. Results-day IT can be disastrous. Do not call a B grade disastrous in a calm report.',
    ['A disastrous IT cutover left thousands without grades on results day.', 'The weather made the field trip disastrous, which is still about real harm, not a dull day.'],
    'a disastrous result / decision; disastrous for. Noun: disaster. Stronger: catastrophic. Weaker: unfortunate. News and exam commentary. Not a mild inconvenience.',
    ['catastrophic']
  ),
  discard: L(
    'To discard is to throw something away because you no longer want it: discard the draft; discarded packaging. Throw away is everyday; reject is closer for ideas. Keep and retain are opposites. Markers: discard a draft that ignores the command word. Do not mix with discard as a playing-card term unless the context is games.',
    ['Discard the first draft if it ignores the command word.', 'The lab discarded contaminated swabs, which is the physical sense.'],
    'discard + noun; discarded + noun. Everyday: throw away. Ideas: reject. Opposite: keep / retain. Labs, recycling, drafting. Not a synonym of discuss.',
    ['reject']
  ),
  disguise: L(
    'To disguise is to change how something looks, or to hide its true nature: disguise yourself as; barely disguised contempt. Hide is wider; conceal is a close formal twin. A polite letter may not disguise a fail. As a noun: in disguise. Do not use it for a simple typo cover-up — that is conceal or omit.',
    ['Polite wording did not disguise the fail on the inspection.', 'The inspector arrived in disguise, which is the noun phrase.'],
    'disguise something as; in disguise; a thinly / barely disguised. Close: conceal. Wider: hide. Reports and reviews. Noun and verb — same spelling.',
    ['conceal']
  ),
  disgust: L(
    'Disgust is a strong dislike at something unpleasant or wrong (often uncountable): in disgust; to my disgust. The verb is disgust someone. Revulsion is stronger; dislike is weaker. Undercover ward films: viewers expressed disgust. Do not use it for a boring lesson.',
    ['Viewers expressed disgust at the undercover footage of the ward.', 'She left in disgust, which is a common news collocation.'],
    'in disgust; to someone’s disgust. Verb: disgust. Weaker: dislike. Stronger: revulsion. Moral and physical senses. Serious register.',
    []
  ),
  disorder: L(
    'Disorder is a lack of order, or a medical condition: public disorder; a blood disorder. Chaos is informal for the first sense; disease is wider than the medical sense. Order is an opposite. Football: disorder outside the ground. Do not call untidy handwriting a disorder.',
    ['Public-order officers were called after disorder outside the ground.', 'The clinic treats eating disorders, which is the medical sense — handle with care.'],
    'public disorder; a mental / genetic disorder. Opposite: order. Informal (chaos sense): chaos. Medical register is sensitive. News vs clinical essays — keep the sense clear.',
    []
  ),
  displace: L(
    'To displace is to force people or things out of their usual place: displaced families; displace a volume of water. Replace is “put something else there”; they overlap but displace stresses the one pushed out. Floods displaced households. Do not use it for moving a mug across a desk.',
    ['Floods displaced hundreds of households along the estuary.', 'The new scheme may displace smaller providers, which is the policy sense.'],
    'displace people / a community; displaced by. Physics: displace water. Close but not identical: replace. Humanitarian and housing news. Not a synonym of misplace.',
    []
  ),
  dispose: L(
    'Dispose almost always needs of in the “get rid of” sense: dispose of waste; disposal is the noun (already in the dictionary). Throw away is everyday. Arrange is an older second sense (troops were disposed). Labs must dispose of samples under licence. Do not write “dispose the rubbish” — dispose of.',
    ['Labs must dispose of samples according to the licence.', 'The board is disposed to delay, which is a formal “inclined” sense — rare in exams.'],
    'dispose of + waste / assets. Noun: disposal. Everyday: throw away / get rid of. Trap: not “dispose the files”. Legal: dispose of an estate.',
    []
  ),
  dissolve: L(
    'To dissolve is to mix into a liquid until it disappears, or to officially end a parliament, company, or marriage: sugar dissolves; dissolve Parliament. Melt is for solids becoming liquid by heat (ice melts; salt dissolves in water). Snap elections: Parliament was dissolved. Do not mix with solve (find an answer).',
    ['Parliament was dissolved before the snap election.', 'The tablet dissolves in water, which is the chemistry sense.'],
    'dissolve in; dissolve a marriage / parliament / company. Mix-up: melt (heat) vs dissolve (in liquid); solve (a problem). Chemistry and constitutional news.',
    []
  ),
  distant: L(
    'Distant means far in space or time, or emotionally cold: a distant relative; a distant memory; a distant manner. Distance is the noun (already in the dictionary). Far is everyday; remote is close for places. A distant relative left a bursary. Do not write “distant of 10 km” — 10 km away / a distance of.',
    ['A distant relative left the bursary in her will.', 'His tone was distant in the hearing, which is the unfriendly sense.'],
    'a distant relative / past / possibility. Noun: distance. Everyday: far. Places: remote. Manner: cold / distant. Trap: not “distant from 10 km”.',
    ['remote']
  ),
  dwell: L(
    'To dwell is formal for live: dwell in; a dwelling (noun). In exams the useful sense is dwell on / upon = keep thinking or talking about. Live is everyday. Markers: do not dwell on one bad question. Do not mix with swell or well.',
    ['Markers told candidates not to dwell on one bad question.', 'Few still dwell in the old mill cottages, which is the formal “live” sense.'],
    'dwell on / upon a topic. Formal: dwell in a place. Noun: a dwelling. Everyday: live. Advice: don’t dwell on mistakes. Not a synonym of stay overnight.',
    []
  ),
  ecology: L(
    'Ecology is how living things relate to their environment, and the study of that: marine ecology; the ecology of the estuary. Ecological is the adjective (already in the dictionary); ecosystem is a related noun (already in the dictionary). Environment is wider. A barrage changed the estuary’s ecology. Do not use ecology as a trendy synonym of “being green” in a methods paragraph — be specific.',
    ['The estuary’s ecology changed after the new barrage.', 'She took ecology as an A-level option, which is the subject sense.'],
    'marine / urban ecology; the ecology of. Adjective: ecological. Related: ecosystem / environment. Science papers and conservation news. Not a vague “eco” label.',
    []
  ),
  elegant: L(
    'Elegant means graceful in looks, or neatly simple and effective: an elegant solution; elegant prose. Stylish is close for clothes; neat is weaker for proofs. Elaborate (already in the dictionary) can be the opposite of a simple elegant proof. Markers like an elegant argument, not padding. Do not call a messy lab write-up elegant.',
    ['An elegant proof is short; padding will not impress the marker.', 'The foyer was elegant after the refit, which is the appearance sense.'],
    'an elegant solution / proof / design. Clothes: stylish. Opposite tone (prose): clumsy / elaborate padding. Maths and architecture. Not a synonym of expensive.',
    ['stylish']
  ),
  embed: L(
    'To embed is to fix something firmly inside something else: embed a video; embedded journalists. Insert is weaker (it may not stay). Implant is medical. Reports: embed the chart; do not send a dead link. Do not mix with embark (start a journey).',
    ['Embed the chart in the report; do not attach a broken link.', 'An embedded journalist travelled with the unit, which is the news sense.'],
    'embed something in; an embedded + noun. Weaker: insert. Computing: embedded systems. News: embedded reporters. Mix-up: embark. Coursework portals.',
    []
  ),
  embrace: L(
    'To embrace is to hug, or — in academic and policy English — to accept an idea willingly: embrace change; embrace a method. Adopt is a close policy twin. Hug is the physical everyday word. Sixth forms asked to embrace mixed-ability grouping. Do not use it for reluctantly following a rule — that is comply.',
    ['Sixth forms were asked to embrace mixed-ability grouping.', 'She embraced her daughter at arrivals, which is the physical sense.'],
    'embrace an idea / change / diversity. Physical: hug. Policy close: adopt / welcome. Opposite tone: resist / reject. Speeches and editorials. Not “embrace with” for the idea sense.',
    ['adopt']
  ),
  eminent: L(
    'Eminent means famous and respected in a field: an eminent historian; eminently qualified (adverb). Imminent means about to happen — a classic spelling trap. Famous is wider and less formal. An eminent statistician queried the sample. Do not call a local celebrity eminent unless the field respects them.',
    ['An eminent statistician queried the sampling frame in a letter.', 'The collapse is imminent, not eminent, which is the spelling trap.'],
    'an eminent + profession. Adverb: eminently. Trap: imminent (soon). Wider: famous. Academic letters and obituaries. Not a TV presenter by default.',
    ['renowned']
  ),
  empire: L(
    'An empire is a group of countries under one ruler, or a large business group: the British Empire; a media empire. Emperor is the person. Kingdom is usually one country. A media empire sold regional titles. History papers vs business pages — keep the sense clear. Do not call a corner shop an empire except as a joke.',
    ['The media empire sold the regional titles after the inquiry.', 'The module covers how the empire was administered, which is the historical sense.'],
    'a media / business empire; the Roman / British Empire. Person: emperor. History vs commerce. Metaphor is common in newspapers. Not a single high street store.',
    []
  ),
  enclose: L(
    'To enclose is to put something in the same envelope, or to surround land: enclose a cheque; an enclosed garden. Include is wider (it need not be in an envelope). Attach is for emails. Appeals: enclose a stamped envelope. Mix-up: envelope is the noun (already in the dictionary).',
    ['Please enclose a stamped envelope with the appeal form.', 'A fence encloses the site, which is the surround sense.'],
    'enclose something with a letter; enclosed please find (old-fashioned). Email: attach. Land: enclosed by. Noun mix-up: envelope. Forms and land law.',
    []
  ),
  endless: L(
    'Endless means having no end, or seeming not to: endless delays; an endless supply. Infinite is stronger and more mathematical. Continual is close for repeated events. Staff described endless password resets. Do not use endless for a two-hour wait in a careful report — lengthy is safer.',
    ['Staff described endless password resets after the outage.', 'The coastline is not endless; the map shows a finite path, which is the literal check.'],
    'endless + noun (delays, meetings). Stronger/maths: infinite. Close: continual. Informal complaint register. Essays: often hyperbolic — use with care.',
    ['infinite']
  ),
  endow: L(
    'To endow is to give a lasting gift of money to an institution, or to provide a quality: endow a scholarship; endowed with talent. Donate (already in the dictionary) is the everyday giving verb. Fund is close. A former pupil endowed a bursary. Do not use endow for handing over a fiver.',
    ['A former pupil endowed a scholarship for care leavers.', 'The role is endowed with few real powers, which is the “given a quality” sense.'],
    'endow a chair / scholarship; endowed with. Everyday: donate. Close: fund. Universities and wills. Formal register. Not a one-off collection tin.',
    ['fund']
  ),
  enrol: L(
    'To enrol (UK) is to put your name on an official list: enrol on a course; enrol in a scheme. US spelling is enroll. Register is a close twin; join is everyday. Enrol online before Friday. Noun: enrolment. Do not mix with unroll (open a roll of paper).',
    ['Enrol online before Friday or the module will be full.', 'US sites write enroll; UK handbooks keep enrol, which is an exam spelling point.'],
    'enrol on a course (UK); enrol in. US: enroll. Noun: enrolment. Close: register. Everyday: join. Trap: unroll. Admissions and evening classes.',
    ['register']
  ),
  ensue: L(
    'To ensue is to happen afterwards, often as a result (formal): a debate ensued; in the ensuing weeks. Follow is everyday; result is a close verb. Ensure means make sure — a spelling trap. A row ensued when unmarked scripts were published. Do not use ensue for “we ensured the doors were locked”.',
    ['A row ensued when the board published the unmarked scripts.', 'In the ensuing days the portal stayed down, which is the adjective ensuing.'],
    'X ensued; the ensuing + noun. Everyday: follow. Trap: ensure (make sure). Formal news and narratives. Not a planning verb.',
    ['follow']
  ),
  erode: L(
    'To erode is to wear something away slowly, or to weaken trust, rights, or value: cliffs erode; erode confidence. Corrode is chemical (metal + rust). Undermine is close for trust. Coastal paths erode after storms. Do not use erode for a single explosion of damage — that is destroy.',
    ['Coastal paths continue to erode after each winter storm.', 'Real wages have eroded, which is the economic sense.'],
    'erode confidence / rights / value; soil erosion (noun). Mix-up: corrode (metal). Close (trust): undermine. Geography and pay news. Gradual, not sudden.',
    ['undermine']
  ),
  eternal: L(
    'Eternal means lasting for ever, or seeming to: eternal life; an eternal problem. Everlasting is close; endless is more about tedium. Temporary is an opposite. Invigilators’ “pens down” treated as eternal. Do not use eternal for a three-year contract.',
    ['Candidates treated the invigilator’s “pens down” as an eternal rule.', 'The statue was billed as an eternal memorial, which is the literal “for ever” sense.'],
    'eternal + noun; the eternal + problem. Close: everlasting / endless. Opposite: temporary. Religion, rhetoric, and irony. Hyperbole in complaints.',
    ['everlasting']
  ),
  evaporate: L(
    'To evaporate is to change from liquid to vapour, or to disappear: water evaporates; support evaporated. Vanish is everyday for the second sense; boil is not the same (boiling is rapid). Merger support evaporated after leaks. Do not mix with evacuate (empty a place).',
    ['Support for the merger evaporated after the leaked emails.', 'Leave the dish so the solvent can evaporate, which is the science sense.'],
    'evaporate from; support / funding evaporated. Science: liquid → vapour. Everyday twin (second sense): vanish. Mix-up: evacuate. Chemistry and politics.',
    ['vanish']
  ),
  eventual: L(
    'Eventual describes what happens at the end of a process: the eventual winner; eventual collapse. Eventually is the adverb (already in the dictionary). Final is close; possible is not a synonym. The eventual winner had few appeals. Trap: eventual is not “possible” (that is potential).',
    ['The eventual winner had the lowest appeal rate in the cohort.', 'Eventually is the adverb; write eventual costs in the report, which is the adjective.'],
    'the eventual + noun (outcome, winner, cost). Adverb: eventually. Close: final. Trap: not “eventual” for “possible”. Project writing and sports news.',
    ['final']
  ),
  exaggerate: L(
    'To exaggerate is to make something seem bigger, better, or worse than it is: exaggerate the risk; highly exaggerated. Overstate is a close academic twin; lie is stronger and moral. Do not exaggerate n = 12. Opposite: play down / understate. Mix-up: exacerbate (make worse) is already in the dictionary.',
    ['Do not exaggerate the sample; the marker can see n = 12.', 'The threat was exaggerated in the headline, which is a typical news complaint.'],
    'exaggerate + noun; grossly / highly exaggerated. Academic: overstate. Opposite: understate. Trap: exacerbate. Speaking exams: don’t exaggerate for effect in a graph description.',
    ['overstate']
  ),
  excess: L(
    'Excess is more than is needed or allowed (often uncountable): in excess of; excess baggage; an excess of. Excess as an adjective: excess water. Access is a different word (entry). Surplus is close in economics. Luggage in excess of 23 kg. Do not mix with exceed (the verb, already in the dictionary).',
    ['Luggage in excess of 23 kg is charged at the desk.', 'An excess of salt in the canteen meals was flagged, which is the “too much” sense.'],
    'in excess of + number; excess baggage / weight. Verb: exceed. Trap: access. Adjective: excess + noun. Health: excess deaths. Formal and travel English.',
    ['surplus']
  ),
  exemplify: L(
    'To exemplify is to be a typical example, or to show by example: this case exemplifies; exemplified by. Illustrate is close; example is the noun. The case exemplifies why anonymous marking matters. Do not write “exemplify an example”.',
    ['The case exemplifies why anonymous marking matters.', 'Her career exemplifies social mobility, which is the “is a typical case of” sense.'],
    'exemplify + noun; exemplified by. Noun: example. Close: illustrate. Academic conclusions. Not “for exemplify” — for example.',
    ['illustrate']
  ),
  exile: L(
    'Exile is being forced to live outside your country, or a person in that state: in exile; a political exile. The verb is exile someone. Expat is voluntary. Refugee overlaps but stresses flight from danger. A journalist lived in exile in Manchester. Do not call a year abroad exile.',
    ['The journalist lived in exile in Manchester after the threats.', 'The regime exiled opponents, which is the verb.'],
    'in exile; live in exile; a tax exile (journalism). Verb: exile someone. Voluntary twin: expat. Related: refugee. Politics and history. Serious register.',
    []
  ),
  exotic: L(
    'Exotic means unusual and interesting because it seems foreign: exotic species; exotic fruit. Foreign is neutral; alien is for species in ecology. Native is an opposite for wildlife. Greenhouse trials of exotic species. Do not call a supermarket banana exotic in 2020s Britain unless you are being ironic.',
    ['The greenhouse trial used exotic species not listed as native.', 'An exotic setting in the novel is not the same as accurate geography, which is a literature point.'],
    'exotic species / food / location. Neutral: foreign. Ecology opposite: native. Can sound dated or othering — use with care in essays. Travel writing vs science.',
    ['foreign']
  ),
  expedition: L(
    'An expedition is an organised journey with a purpose: a research expedition; a shopping expedition (lighter, slightly humorous). Trip is everyday; voyage is by sea. Schools cancelled an Arctic expedition. Do not call a bus ride to town an expedition in a formal report.',
    ['The school cancelled the Arctic expedition after the insurance rose.', 'A fact-finding expedition to the site is the official sense in minutes.'],
    'a scientific / military / Arctic expedition. Everyday: a trip. Sea: a voyage. Humorous: a shopping expedition. Geography and news. Purpose matters.',
    []
  ),
  expel: L(
    'To expel is to force someone to leave a school, country, or club: expel a pupil; expel a diplomat. Exclude is close in schools (often shorter-term); deport is for sending a non-citizen out of a country. Colleges may expel impersonators. Do not use expel for asking someone to step outside for a minute.',
    ['The college may expel students who sit the paper for someone else.', 'The ambassador was expelled, which is the diplomatic sense.'],
    'expel someone from. Schools: exclude (related). Borders: deport / expel a diplomat. Noun: expulsion. Serious official register. Not a casual “get out”.',
    ['exclude']
  ),
  expire: L(
    'To expire is to reach the end of validity: a passport expires; the offer expires at noon. Run out is everyday; lapse is close for memberships. Sit the test only if ID will not expire in the window. Formal/old: expire = die. Do not mix with exhale or with expert.',
    ['Do not sit the test if your ID will expire during the window.', 'The truce expired at midnight, which is the agreement sense.'],
    'expire on + date; an expired ticket. Everyday: run out. Close: lapse. Formal: expire = die. Visas, IDs, offers. Mix-up: expert / exhale.',
    []
  ),
  exposure: L(
    'Exposure is contact with something harmful, or being seen in public: exposure to asbestos; media exposure. Expose is the verb (already in the dictionary). Contact is weaker. A solvent spill meant exposure closed the lab. Photography: exposure is light on the sensor. Do not write “an expose” for the noun unless you mean a scandal story (exposé).',
    ['Prolonged exposure to the solvent closed the lab for a week.', 'The charity wanted exposure, not a quiet donation, which is the publicity sense.'],
    'exposure to + hazard; public / media exposure. Verb: expose. Photo: a long exposure. Scandal story: exposé. Health-and-safety and media studies.',
    []
  ),
  exquisite: L(
    'Exquisite means extremely fine or beautiful, or (of pain) intense: exquisite craftsmanship; exquisite pain. Beautiful is weaker; fine is everyday. Restoration showed exquisite detail. Can sound over-the-top in a lab report. Do not use it as a synonym of expensive.',
    ['The restoration showed exquisite detail on the chapel ceiling.', 'Patients described exquisite pain, which is the medical sense — not “lovely”.'],
    'exquisite + craftsmanship / timing / pain. Weaker: beautiful / fine. Register: arts writing; ironic in reviews. Not “exquisite fees”. Two senses — keep them apart.',
    []
  ),
  debut: L(
    'A debut is a first public appearance: make one’s debut; a debut album / novel. As a verb, to debut. Premiere is often for a work’s first show, not a person’s first night. Her Commons debut was a question on waiting lists. Do not call a third album a debut.',
    ['Her debut in the Commons was a question on waiting lists.', 'The app debuted in schools in March, which is the verb.'],
    'make a debut; a debut single / novel. Verb: debut. Related: premiere (the work). Sport and arts pages. First time only.',
    []
  ),
  decay: L(
    'To decay is to rot or become gradually worse: tooth decay (noun); radioactive decay; institutions decay. Rot is everyday for food; decline is close for standards. Tooth decay rose in the catchment. Noun and verb share the spelling. Do not use decay for a sudden crash.',
    ['Tooth decay rose in the catchment after the sugar-tax delay.', 'Moral decay is a comment-page phrase, which is figurative — use sparingly in exams.'],
    'tooth / urban / radioactive decay. Verb: decay. Everyday (food): rot. Close (standards): decline. Science and public health. Gradual process.',
    ['rot']
  ),
  deceive: L(
    'To deceive is to make someone believe what is not true: deceive the public; deceive yourself. Deceit and deception are related nouns. Lie is blunter; mislead is slightly softer. Portals must not deceive applicants about deadlines. Do not use deceive for an honest mistake.',
    ['The portal must not deceive applicants about the closing time.', 'She was deceived by a cloned site, which is a common fraud sense.'],
    'deceive someone into -ing; deceive yourself. Nouns: deceit / deception. Blunter: lie. Softer: mislead. Consumer and exam-integrity English. Intent matters.',
    ['mislead']
  ),
  deduct: L(
    'To deduct is to take an amount from a total: deduct tax; deduct marks. Subtract is the maths twin; take off is everyday. Deduction is the noun (already in the dictionary) and also means a logical conclusion — two senses. Invigilators deduct marks for a missing number. Do not mix with deduce (reason out).',
    ['Invigilators will deduct two marks for a missing candidate number.', 'Tax is deducted at source, which is the payroll sense.'],
    'deduct X from Y; tax deducted. Maths: subtract. Noun: deduction (money or logic). Trap: deduce. Pay slips and mark schemes.',
    ['subtract']
  ),
  deficient: L(
    'Deficient means not having enough of something needed: deficient in iron; a deficient process. Deficiency is the noun (already in the dictionary). Insufficient is close; poor is vaguer. A diet deficient in iron. Opposite: sufficient (already in the dictionary). Do not call a person deficient in a casual insult — it is dated and rude.',
    ['The diet was deficient in iron, the school nurse reported.', 'Safeguarding training was deficient, which is the systems sense in inspections.'],
    'deficient in + nutrient; a deficient service. Noun: deficiency. Close: insufficient / lacking. Opposite: sufficient. Health and inspection reports. Avoid as a personal slur.',
    ['insufficient']
  ),
  deflect: L(
    'To deflect is to make something change path, or to avoid a question: deflect the ball; deflect criticism. Divert (already in the dictionary) is close for traffic; evade is stronger for questions. Ministers deflected questions about scripts. Do not mix with deflate (let air out) or reflect (bounce back as image).',
    ['Ministers tried to deflect questions about the unmarked scripts.', 'The barrier deflected debris from the track, which is the physical sense.'],
    'deflect a question / criticism / the ball. Close (roads): divert. Stronger (questions): evade. Mix-up: reflect / deflate. Politics and sport.',
    []
  ),
  demolish: L(
    'To demolish is to pull a building down, or to destroy an argument: demolish a wing; demolish a claim. Destroy is wider; knock down is everyday for buildings. The trust will demolish the 1960s block. Do not use demolish for gently revising a paragraph.',
    ['The trust will demolish the 1960s wing in the Easter break.', 'Counsel demolished the alibi, which is the argument sense.'],
    'demolish a building / argument. Everyday: knock down. Wider: destroy. Planning notices and courtroom reporting. Noun: demolition.',
    ['destroy']
  ),
  denial: L(
    'Denial is saying something is not true, or refusing to accept a fact: issue a denial; in denial. Deny is the verb (already in the dictionary). Refusal is closer to not giving something. The trust’s denial collapsed when emails appeared. Do not mix with denim.',
    ['The trust’s denial collapsed when the emails were disclosed.', 'He is in denial about the grade, which is the psychology sense.'],
    'a flat / categorical denial; in denial; denial of service (IT). Verb: deny. Close: refusal (of a request). News and mental-health writing. Two senses.',
    []
  ),
  descend: L(
    'To descend is to go down, or to come from ancestors: the plane descended; descend from. Descent is the noun. Ascend / ascent are opposites. Fog descended on the runway. Descend on a place can mean arrive in numbers. Do not mix with decent (good enough).',
    ['Fog descended on the runway and diverted the speaking tests.', 'She descends from a family of miners, which is the ancestry sense.'],
    'descend from / into / on. Noun: descent. Opposite: ascend. Trap: decent. Weather, aviation, genealogy. Phrasal: descend into chaos.',
    []
  ),
  desolate: L(
    'Desolate means empty and bleak, or extremely lonely: a desolate high street; feel desolate. Deserted is close for empty places (desert the verb vs dessert the sweet — already taught elsewhere). Bleak is close. The closed high street looked desolate. Do not call a busy station desolate.',
    ['The closed high street looked desolate after the last bank left.', 'He felt desolate after the rejection, which is the emotional sense.'],
    'a desolate landscape / town; feel desolate. Close (places): deserted / bleak. Mix-up: desert / dessert. Features and novels. Stronger than quiet.',
    ['bleak']
  ),
  despise: L(
    'To despise is to dislike someone or something strongly because you think they have no worth: despise hypocrisy; despised by. Hate is everyday; despite is a preposition (already in the dictionary) — spelling trap. She despised Friday fire-and-rehire notices. Do not use despise for a mild preference against broccoli.',
    ['She despised the fire-and-rehire notices posted on a Friday.', 'Despite looks similar but is a preposition, which is a classic trap.'],
    'despise someone / something for. Everyday: hate. Trap: despite. Formal and moral tone. Not a food quirk. Comment pieces.',
    ['hate']
  ),
  destined: L(
    'Destined means certain to happen or to become: destined to fail; destined for the bar. Destination is the place you are going (already in the dictionary). Bound to is a close informal twin. The bill was destined to fail without devolved votes. Do not mix with destiny as a mystical essay filler.',
    ['The bill was destined to fail without the devolved votes.', 'The shipment is destined for Hull, which is the “headed for” sense.'],
    'destined to + verb; destined for. Noun mix-up: destination / destiny. Close: bound to. Politics and careers. Not a horoscope in a methods section.',
    []
  ),
  dictator: L(
    'A dictator is a ruler with total power, usually by force: a military dictator; a dictatorship (system). Dictate is the related verb (orders / speaking). Authoritarian is wider. Documentaries on how a dictator shut papers. Do not call a strict teacher a dictator in a serious paper.',
    ['The documentary traced how the dictator shut independent papers.', 'Dictate a letter is the office verb, not the same as dictator, which is the person.'],
    'a dictator; under a dictator. System: dictatorship. Verb: dictate. Wider: authoritarian. History and foreign news. Metaphor is informal.',
    []
  ),
  digest: L(
    'To digest is to break food down, or to take in information: digest a meal; digest the findings. A digest /ˈdaɪdʒest/ is a summary (noun, different stress). Understand is wider; absorb is close for reading. Give a week to digest new boundaries. Do not mix with ingest (take in as food) unless you mean that precisely.',
    ['Give the cohort a week to digest the new grade boundaries.', 'A weekly digest of papers is the noun, stressed on the first syllable.'],
    'digest food / information. Noun: a digest /ˈdaɪdʒest/. Close (reading): absorb. Mix-up: ingest. Biology and academic advice. Stress changes with POS.',
    ['absorb']
  ),
  dire: L(
    'Dire means extremely serious or urgent: dire staffing; dire consequences; in dire need. Terrible is everyday; serious is weaker. Ofsted warned of dire staffing on a ward. Informal: dire can mean “very bad quality” (a dire film). Do not use dire for a slightly dull lesson in a formal report.',
    ['Ofsted warned of dire staffing levels on the children’s ward.', 'The play was dire, which is informal “rubbish” — avoid in inspection English.'],
    'dire need / warning / consequences; in dire straits. Everyday: terrible. Formal news vs informal “poor quality”. Strong adjective — match the evidence.',
    ['terrible']
  ),
  discern: L(
    'To discern is to notice or understand something unclear: discern a pattern; discern whether. Notice is everyday; detect is close for instruments. Hard to discern bias if the sample is hidden. Rather formal. Do not mix with discerning (having good taste) without checking the grammar.',
    ['It is hard to discern bias if the sample is unpublished.', 'A discerning reader is the adjective, which is about judgement, not just seeing.'],
    'discern a difference / pattern. Everyday: notice. Close: detect. Formal academic register. Adjective: discerning. Not a synonym of decide.',
    ['notice']
  ),
  disconnect: L(
    'To disconnect is to break a connection: disconnect the device; feel disconnected from. Connect is the opposite. Unplug is everyday for cables. Disconnect phones before listening papers. Noun: a disconnect (journalism: a disconnect between policy and reality). Do not mix with discontent.',
    ['Disconnect the device before the listening paper or it is malpractice.', 'There is a disconnect between the pledge and the budget, which is the noun.'],
    'disconnect from; disconnect a device. Opposite: connect. Everyday: unplug. Noun: a disconnect. Exam-hall rules and commentary. Mix-up: discontent.',
    []
  ),
  disgrace: L(
    'Disgrace is the loss of respect after shameful behaviour: in disgrace; a disgrace to. Shame is close; embarrassment is weaker. Expenses findings called a disgrace in the chamber. As a verb: disgrace yourself. Do not use it for a spelling slip.',
    ['The expenses findings were called a disgrace in the chamber.', 'He left in disgrace, which is a common news collocation.'],
    'in disgrace; a disgrace to + group. Verb: disgrace someone. Close: shame. Weaker: embarrassment. Parliamentary and sports reporting. Strong moral word.',
    ['shame']
  ),
  dismay: L(
    'Dismay is shock mixed with disappointment (often uncountable): to someone’s dismay; express dismay. Alarm is closer to fear; disappointment is weaker. Unions expressed dismay at an overnight rewrite. As a verb: dismay someone. Do not use dismay for mild surprise at rain.',
    ['Unions expressed dismay at the overnight contract rewrite.', 'To the dismay of parents, the bus was cut, which is a typical news frame.'],
    'to someone’s dismay; in dismay. Verb: dismay. Weaker: disappointment. Close: alarm (more fear). Formal news register. Uncountable in many uses.',
    []
  ),
  dispatch: L(
    'To dispatch is to send someone or something quickly: dispatch a crew; dispatch the goods. Send is everyday; despatch is an older UK spelling of the same word. The Met Office dispatched crews. As a noun: a dispatch from a correspondent. Do not mix with dispatch meaning “kill” in old-fashioned narratives unless the text is literary.',
    ['The Met Office dispatched extra crews before the amber warning.', 'A dispatch from Westminster, which is the noun in journalism.'],
    'dispatch someone / something to. Everyday: send. Variant spelling: despatch. Noun: a dispatch. Logistics and newsrooms. Secondary literary sense: kill.',
    ['send']
  ),
  dispel: L(
    'To dispel is to drive away a feeling, doubt, or myth: dispel rumours; dispel fears. Dismiss is close but can mean “reject as unworthy”; expel is force a person out. A worked example dispels the myth that evaluate means describe. Do not mix with disperse (scatter a crowd).',
    ['A worked example will dispel the myth that evaluate means describe.', 'The briefing failed to dispel rumours, which is a common news line.'],
    'dispel rumours / fears / a myth. Close: dismiss (a claim). Mix-up: disperse / expel. Teaching and press offices. Not used for physical objects much.',
    []
  ),
  disperse: L(
    'To disperse is to spread out, or to make a crowd break up: the crowd dispersed; disperse the gas. Scatter is close; dispel is for ideas. Police dispersed the crowd after the match. Chemistry: a dispersed sample. Do not use disperse for firing one person.',
    ['Police moved in to disperse the crowd after the final.', 'Seeds disperse on the wind, which is the biology sense.'],
    'disperse a crowd; the crowd dispersed. Close: scatter. Mix-up: dispel (myths). Public-order news and science. Opposite: gather / assemble.',
    ['scatter']
  ),
  disqualify: L(
    'To disqualify is to bar someone for breaking a rule: disqualify a candidate; disqualified from. Ban is wider; exclude overlaps in schools. A smartwatch can disqualify a candidate. Noun: disqualification. Do not use it for failing a paper on merit — that is a fail, not a disqualification.',
    ['A smartwatch can disqualify a candidate on the listening paper.', 'The club was disqualified from the cup, which is the sport sense.'],
    'disqualify someone from. Noun: disqualification. Wider: ban. Exams, sport, public office. Rule-breaking, not low marks. Formal official register.',
    ['ban']
  ),
  disregard: L(
    'To disregard is to ignore something or treat it as unimportant: disregard the instruction; in complete disregard of. Ignore is everyday; overlook can be accidental. Do not disregard the command word. As a noun: a disregard for safety. Do not mix with regard (consider / respect).',
    ['Do not disregard the command word; it decides the marks.', 'A reckless disregard for safety, which is a legal-news collocation.'],
    'disregard + noun; disregard for / of. Everyday: ignore. Noun: a disregard for. Opposite: heed / follow. Mark schemes and H&S. Mix-up: regard.',
    ['ignore']
  ),
  distress: L(
    'Distress is great pain, sadness, or difficulty, or a danger state: in distress; a ship in distress; distress call. Stress (already in the dictionary) is pressure; distress is the suffering. Counsellors for students in distress. Adjective: distressed. Do not use distress for a mildly busy week.',
    ['A counsellor is on site for students in distress after results.', 'The lifeboat answered a distress call, which is the maritime sense.'],
    'in distress; a distress signal / call. Related: stress (pressure). Adjective: distressed. Care and emergency register. Uncountable in many emotional uses.',
    []
  ),
  diverge: L(
    'To diverge is to go in different directions from one point, or to become unlike: paths diverge; figures diverge. Converge is the opposite. Differ is a close twin for opinions. Official and leaked figures diverged. Do not mix with diverse (varied; already in the dictionary).',
    ['Official and leaked figures began to diverge in March.', 'The two mark schemes diverge on AO3, which is the exam-board sense.'],
    'diverge from; paths / opinions / figures diverge. Opposite: converge. Close: differ. Mix-up: diverse / divert. Data journalism and maps.',
    []
  ),
  dormant: L(
    'Dormant means inactive now but able to start again: a dormant volcano; a dormant account; dormant genes. Inactive is wider; extinct (separate headword) means gone for good, of species or volcanoes. The volcano was dormant, not extinct. Do not call a demolished factory dormant.',
    ['The volcano was classed as dormant, not extinct, after the survey.', 'A dormant company still exists on paper, which is the Companies House sense.'],
    'a dormant volcano / account / cell. Opposite: active. Species/volcanoes: extinct = gone. Finance: a dormant account. Science and business pages.',
    ['inactive']
  ),
  duplicate: L(
    'To duplicate is to copy exactly, or to do the same work twice: duplicate a key; duplicate effort. Copy is everyday; replicate is close in science. Stress: verb /ˈdjuːplɪkeɪt/; adjective/noun /ˈdjuːplɪkət/ a duplicate. Do not duplicate the appendix in the word count. Mix-up: duplicity (deceit) is already in the dictionary.',
    ['Do not duplicate the appendix in the word count.', 'A duplicate certificate can be issued, which is the noun /ˈdjuːplɪkət/.'],
    'duplicate a file / effort. Noun/adj: a duplicate. Everyday: copy. Science: replicate. Trap: duplicity. Admin and labs. Stress shifts with POS.',
    ['copy']
  ),
  eclipse: L(
    'An eclipse is when one space object blocks another’s light: a solar / lunar eclipse. As a verb, to eclipse is to make something seem less important: eclipsed by. Overshadow is a close verb twin. A lunar eclipse closed the rooftop session. Do not use the noun for a power cut.',
    ['A lunar eclipse closed the rooftop observing session.', 'The scandal eclipsed the policy launch, which is the verb.'],
    'a solar / lunar eclipse; in eclipse. Verb: eclipse someone / something. Close verb: overshadow. Astronomy vs political reporting. Not a blackout.',
    ['overshadow']
  ),
  emigrate: L(
    'To emigrate is to leave your country to live in another: emigrate from the UK; emigrate to Canada. Immigrate is arrive; migrate is wider (including animals). Emigrant / emigration are related. Nurses emigrate, colleges told MPs. Trap: immigrant is the person arriving.',
    ['Nurses continue to emigrate, the royal college told MPs.', 'They emigrated from Wales in the 1980s, which needs from + country of origin.'],
    'emigrate from / to. Opposite direction: immigrate. Wider: migrate. Person leaving: emigrant. Person arriving: immigrant. News and demography.',
    []
  ),
  endanger: L(
    'To endanger is to put someone or something at risk of harm: endanger lives; endangered species (adjective). Risk is a close verb; threaten can be close. Phone use can endanger paper integrity. Danger is the noun (already in the dictionary). Do not mix with engender (produce a feeling), already in the dictionary.',
    ['Phone use in the hall can endanger the integrity of the paper.', 'The development could endanger nesting birds, which is the wildlife sense.'],
    'endanger lives / a species; an endangered species. Noun: danger. Close: risk / threaten. Trap: engender. Conservation, H&S, exam regulations.',
    ['threaten']
  ),
  endurance: L(
    'Endurance is the ability to keep going through pain or effort (uncountable): endurance training; a test of endurance. Endure is the verb (already in the dictionary). Stamina is a close twin in sport; patience is more about waiting. The trip is an endurance test. Do not use endurance for a five-minute wait.',
    ['The expedition is an endurance test as much as a geography trip.', 'He endured three hours of delay; endurance is the noun, which is the grammar pair.'],
    'endurance training / test; a feat of endurance. Verb: endure. Close: stamina. Uncountable. Sport, medicine, travel features. Not a short inconvenience.',
    ['stamina']
  ),
  enquire: L(
    'To enquire (UK) is to ask for information: enquire about; enquire whether. US spelling is inquire. Enquiry is the noun (already in the dictionary); a public inquiry is a formal investigation (often inquiry even in UK). Enquire at the exams office. Do not mix with acquire (get).',
    ['Enquire at the exams office, not the head’s PA, about clash tickets.', 'US forms use inquire; UK customer service still prefers enquire, which is a spelling point.'],
    'enquire about / whether. US: inquire. Noun: enquiry (question) vs inquiry (investigation, often). Everyday: ask. Offices and helplines. Trap: acquire.',
    ['ask']
  ),
  equate: L(
    'To equate is to treat one thing as equal to another: equate X with Y; be equated with. Equal is the adjective (already in the dictionary); equate is the verb. Compare is weaker. Do not equate a mock with the final award. Mathematical: equate two expressions. Do not write “equate to” if you mean “result in” — that is lead to.',
    ['Do not equate a mock grade with the final award.', 'The two sides of the equation are equated, which is the maths sense.'],
    'equate X with Y; equated with. Adjective: equal. Weaker: compare. Maths: equate expressions. Essays: do not equate correlation with cause.',
    []
  ),
  erupt: L(
    'To erupt is what a volcano does, or how violence and feeling burst out: the volcano erupted; fighting erupted. Explode is close for bombs; break out is close for violence. Violence erupted after the late goal. Noun: eruption. Do not use erupt for a slow leak.',
    ['Violence erupted outside the ground after the late goal.', 'Ash closed the airport after the volcano erupted, which is the geological sense.'],
    'a volcano erupts; violence / applause erupted. Noun: eruption. Close (fighting): break out. Close (bombs): explode. Geology and news. Sudden.',
    []
  ),
  escalate: L(
    'To escalate is to become, or make something, more serious or intense: the dispute escalated; escalate the complaint (send it up). Increase is weaker and more general; intensify is close. A parking row escalated into a formal complaint. Noun: escalation. Do not use escalate for a tiny price rise unless you mean it became a crisis.',
    ['A parking row escalated into a formal complaint to the trust.', 'Please escalate the ticket to tier two, which is the helpdesk sense.'],
    'escalate into; escalate a complaint. Noun: escalation. Close: intensify. Weaker: increase. Opposite: de-escalate. IR, NHS complaints, and conflict reporting.',
    ['intensify']
  ),
  exhaust: L(
    'To exhaust is to tire someone out, or to use something up: exhaust the options; exhausted (adjective, already in the dictionary). As a noun, exhaust is waste gas from an engine. Use up is everyday; tire is weaker. Do not exhaust the word limit on bullet one. Mix-up: exhaustive means complete, not tiring.',
    ['Do not exhaust the word limit on the first bullet.', 'Exhaust fumes closed the underpass, which is the noun.'],
    'exhaust someone; exhaust a supply / options. Adjective: exhausted. Noun: exhaust (fumes). Trap: exhaustive (complete). Essays, engines, and sport.',
    ['deplete']
  ),
  extinct: L(
    'Extinct means a species no longer exists, or a volcano is no longer active: go extinct; an extinct language. Endangered means still here but at risk (related to endanger). Dormant (separate headword) means sleeping, of volcanoes. The red squirrel is not extinct locally, the trust said. Do not call a cancelled bus route extinct except as a joke.',
    ['The local red squirrel is not extinct, the wildlife trust said.', 'An extinct volcano is not the same as a dormant one, which is a geography trap.'],
    'become / go extinct; an extinct species / volcano / language. Contrast: endangered; dormant (volcanoes). Noun: extinction. Conservation and geology. Absolute — not “almost extinct” in careful science (say critically endangered).',
    []
  ),
}
