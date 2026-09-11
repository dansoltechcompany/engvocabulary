const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B1H = {
  identical: L(
    'Identical means exactly the same, not merely similar: identical twins; identical results; identical to last year’s paper. Similar allows small differences; the same is everyday. Identical copies is common in exams and printing. Do not write “identical with” in modern British English — use identical to. If two things are close but not exact, say almost identical or very similar.',
    ['The two contracts were identical except for the start date.', 'Her answer was identical to the mark scheme, which worried the examiner.'],
    'identical to (not with). Stronger than similar. Everyday: the same. almost identical = tiny difference.',
    ['the same']
  ),
  illegal: L(
    'Illegal means against the law: illegal parking; it is illegal to + verb. Unlawful is more legal and formal; banned can be a school or club rule, not always the criminal law. Illegally is the adverb. Legal is the opposite. Do not use illegal for a rude but lawful opinion, and do not confuse it with illiterate (unable to read).',
    ['It is illegal to drive without insurance in the UK.', 'The council towed cars parked in an illegal bus lane.'],
    'it is illegal to + verb; illegal parking. Opposite: legal. Formal twin: unlawful. Adverb: illegally.',
    ['unlawful']
  ),
  immune: L(
    'Immune is protected against a disease: immune to measles; the immune system. It also means not affected: immune to criticism. Immunity is the noun (diplomatic immunity is a news sense). Resistant is close for drugs and pests. Do not write “immune from a cold” for ordinary health — doctors say you can still catch it. Immune to is the usual pattern, not immune from, except in a few legal phrases.',
    ['Most children are immune to measles after two doses of vaccine.', 'He seemed immune to the pressure of live radio, which is the “not affected” sense.'],
    'immune to + disease / criticism. Noun: immunity. Body: immune system. Pattern: immune to, not usually from.',
    ['resistant']
  ),
  impatient: L(
    'Impatient means annoyed at waiting, or eager for something now: impatient with the delay; impatient to start. Patient is the opposite (and also a noun for someone seeing a doctor). Impatience is the noun. Do not mix impatient with inpatients (people staying in hospital). Keen is eagerness without the irritation.',
    ['Shoppers grew impatient in the long pharmacy queue.', 'She was impatient to hear the exam results, not angry with the staff.'],
    'impatient with + situation; impatient to + verb. Opposite: patient. Mix-up: inpatients (hospital). Noun: impatience.',
    ['restless']
  ),
  import: L(
    'An import is a product brought in from another country: food imports; import controls. Export is the opposite direction. Import is also a verb (they import steel). The noun is usually /ˈɪmpɔːt/; the verb often /ɪmˈpɔːt/. Do not use import for bringing shopping in from the car — that is just bring. In news, imports and exports travel together in trade figures.',
    ['Fruit imports rose after the poor UK harvest.', 'The factory imports parts from Germany and assembles them here.'],
    'Noun: imports / an import. Verb: import goods. Opposite: export. Stress: noun ˈim-port, verb im-ˈport.',
    ['bring in']
  ),
  inadequate: L(
    'Inadequate means not enough or not good enough: inadequate funding; inadequate training. Insufficient is close for amounts; poor is everyday. Adequate is the opposite (already in the dictionary). Inadequacy is the noun. Do not use inadequate for a person you simply dislike — it sounds like a formal judgement of their skills or resources.',
    ['The lighting on the path was inadequate after dark.', 'Inspectors called the fire drills inadequate for a building of that size.'],
    'inadequate + noun (funding, training, lighting). Opposite: adequate. Amount twin: insufficient. Everyday: not enough / not good enough.',
    ['insufficient']
  ),
  inappropriate: L(
    'Inappropriate means not suitable for the situation or the people: inappropriate clothing; an inappropriate comment. Unsuitable is close; rude is stronger and about manners. Appropriate is the opposite. In exams and HR emails the word is common. Do not use it for food that is merely not your taste — that is not to my taste, not inappropriate, unless there is a rule (a nut-free school).',
    ['A joke about the accident was inappropriate in the briefing.', 'Trainers are inappropriate for the interview, even if they are expensive.'],
    'inappropriate for the situation / an inappropriate comment. Opposite: appropriate. Close: unsuitable. Stronger manners: rude.',
    ['unsuitable']
  ),
  industrial: L(
    'Industrial is about factories and making goods: an industrial area; industrial waste; the Industrial Revolution. Industry is the noun. Industrious means hard-working — a classic mix-up. Industrial action is a UK news phrase for strikes. Do not call a quiet office park industrial unless it really has factories or workshops.',
    ['Lorries are banned from the high street but allowed in the industrial estate.', 'Industrial action closed the ports for three days.'],
    'industrial estate / waste / action (strikes). Noun: industry. Mix-up: industrious = hard-working.',
    []
  ),
  inefficient: L(
    'Inefficient means wasting time, money, or energy: an inefficient boiler; an inefficient process. Efficient is the opposite. Ineffective means it does not work, even if it is busy; inefficient can still “work” but at a high cost. In business English, cut inefficient spending is common. Do not call a person inefficient in a reference unless you mean their methods waste time — it is a sharp word.',
    ['The old pumps were inefficient and pushed the energy bill up.', 'An inefficient rota left two people idle and everyone else rushed.'],
    'inefficient boiler / process / spending. Opposite: efficient. Contrast: ineffective (does not work). Sharp if used about people.',
    ['wasteful']
  ),
  infect: L(
    'To infect is to pass a disease to a person, animal, or plant: infect someone with a virus. Infection is the noun (already in the dictionary). Catch is everyday for the person who becomes ill. A computer virus can infect files — a common metaphor. Do not say “infect a cold to me”; say infect someone with, or everyday give someone a cold / catch a cold.',
    ['Close contact can infect the rest of the household within days.', 'The worm infected the office network, which is the computer sense.'],
    'infect someone with + disease. Noun: infection. Everyday: catch / give someone a cold. Also: infect files (computers).',
    []
  ),
  infectious: L(
    'Infectious means a disease can spread: highly infectious; an infectious illness. Contagious is a close twin in everyday talk. Infectious can also describe a mood (infectious laughter). Infection is the noun. Do not call every illness infectious — a broken arm is not. Catching is informal for the disease sense.',
    ['Chickenpox is infectious before the rash is obvious.', 'Her confidence was infectious in the revision group, which is the mood sense.'],
    'highly infectious. Close: contagious. Mood: infectious laughter. Not every illness. Informal: catching.',
    ['contagious']
  ),
  inflation: L(
    'Inflation is a general rise in prices: high inflation; inflation fell to two per cent. A price rise can be one product; inflation is the wider economy. Inflate is the verb (inflate a balloon; inflate prices). Deflation is falling prices. Uncountable: not “an inflation”. UK news talks of the inflation rate and the cost of living.',
    ['Inflation made the weekly shop noticeably dearer.', 'The Bank’s target is to keep inflation near two per cent.'],
    'Uncountable: inflation; the inflation rate. One product: a price rise. Opposite direction: deflation. Not “an inflation”.',
    []
  ),
  inhabitant: L(
    'An inhabitant lives in a place: inhabitants of the island; local inhabitants. Resident is the everyday twin for towns and flats; occupant is often temporary (the occupant of the room). Population is the total number. Inhabit is the verb. Do not use inhabitant for a hotel guest staying one night — that is a guest or visitor.',
    ['The village has 400 inhabitants, most of them over sixty.', 'Inhabitants complained that the new bypass cut the town in half.'],
    'inhabitants of + place. Everyday: resident. Total number: population. Verb: inhabit. Not a one-night guest.',
    ['resident']
  ),
  inherit: L(
    'To inherit is to receive money, property, or a title after someone’s death: inherit a house; inherit from her father. You can also inherit a problem or a system (inherit a backlog). Inheritance is the noun; heir is the person. Receive is everyday and wider. Do not say inherit a present while someone is alive — that is a gift.',
    ['He inherited the shop and the debts together.', 'The new head inherited a staffing shortage, which is the “problem from the past” sense.'],
    'inherit + property / inherit a problem. Noun: inheritance. Person: heir. Alive + present = gift, not inherit.',
    []
  ),
  injection: L(
    'An injection puts a drug in with a needle: have an injection; a flu injection. Jab is informal UK. Injection also means money put into a system (an injection of cash). Inject is the verb. Do not confuse it with ejection (being thrown out). At the chemist or GP, ask for a vaccination if that is the campaign word.',
    ['The nurse gave the injection in the upper arm.', 'The government promised an injection of funds for social care, which is the money sense.'],
    'have / give an injection. Informal UK: jab. Verb: inject. Also: an injection of cash. Mix-up: ejection.',
    ['jab']
  ),
  injure: L(
    'To injure is to hurt someone physically: injure your back; two people were injured. Hurt is everyday; wound often means a cut from a weapon. Injury is the noun (already in the dictionary). Injured is the adjective. Do not use injure for hurt feelings — that is upset or offend — and do not confuse it with insure (buy insurance).',
    ['A fallen branch injured a pedestrian on the pavement.', 'He injured his knee in training and missed the mock exam.'],
    'injure a person / a part of the body. Noun: injury. Everyday: hurt. Feelings: upset / offend. Mix-up: insure.',
    ['hurt']
  ),
  inquiry: L(
    'An inquiry is often an official investigation: a public inquiry; hold an inquiry into the crash. Enquiry is the usual UK spelling for an everyday question (make an enquiry about a bill). Both appear in the news. Inquire / enquire are the verbs. Do not write “an inquiry of the accident” — say an inquiry into. A survey collects answers; an inquiry looks for causes and blame.',
    ['MPs called for an independent inquiry into the hospital deaths.', 'For a simple question about your order, the shop asked customers to email an enquiry, which is the everyday spelling.'],
    'a public inquiry into + event. Everyday question (UK): enquiry. Verb: inquire / enquire. Not “inquiry of”.',
    ['investigation']
  ),
  inspector: L(
    'An inspector checks that rules are followed: a tax inspector; a health-and-safety inspector; Ofsted inspectors in schools. Inspect is the verb (already in the dictionary). Officer is wider. Inspector is also a police rank (Detective Inspector). Do not call a shop supervisor an inspector unless that is the real title.',
    ['An inspector closed the kitchen after finding mice.', 'The police inspector asked witnesses not to discuss the case online.'],
    'health-and-safety / Ofsted / tax inspector. Verb: inspect. Also a police rank. Not a shop supervisor’s ordinary title.',
    []
  ),
  insomnia: L(
    'Insomnia is finding it hard to sleep: suffer from insomnia; chronic insomnia. Sleeplessness is a plain twin. Insomniac is the person. Uncountable in this medical sense: not “an insomnia” for the condition (you can say a bout of insomnia). Do not use it for one late night before an exam unless it is a pattern.',
    ['Shift work left him with insomnia for months.', 'Cut caffeine if you have insomnia in exam week, not only on the night before.'],
    'suffer from insomnia (uncountable). Plain: sleeplessness. Person: insomniac. One late night ≠ the condition.',
    ['sleeplessness']
  ),
  instalment: L(
    'An instalment is one of several payments: pay in instalments; a monthly instalment. It is also one part of a serial story or podcast. UK spelling is instalment, not installment. Down payment is the first lump; the rest may be instalments. Do not use instalment for a single bill you pay in full.',
    ['The laptop can be paid for in twelve interest-free instalments.', 'The final instalment of the documentary airs on Sunday, which is the series sense.'],
    'pay in instalments; a monthly instalment. UK spelling: instalment. Series: an episode / instalment. Not a one-off full bill.',
    []
  ),
  instructor: L(
    'An instructor teaches a practical skill: a driving instructor; a fitness instructor; a ski instructor. A teacher is wider and often school-based; a lecturer is university; a trainer can be sport or workplace. Instruct is the verb. Instruction is already in the dictionary. Do not call a history lecturer an instructor unless the college uses that title.',
    ['Her driving instructor booked the test for a quiet Tuesday morning.', 'The gym instructor corrected his squat before he hurt his back.'],
    'driving / fitness / ski instructor. School: teacher. University: lecturer. Workplace/sport: trainer. Practical skills, not every teacher.',
    ['trainer']
  ),
  insult: L(
    'To insult is to offend with rude words or actions: insult someone; an insult (noun, stress on the first syllable). Offend is wider; abuse is stronger. Insulting is the adjective. Do not use insult for fair criticism in a review — that is criticise. The verb is /ɪnˈsʌlt/; the noun is /ˈɪnsʌlt/.',
    ['He insulted the waiter and was asked to leave.', 'Calling the report “homework” was an insult to the research team, which is the noun.'],
    'Verb: insult someone /ɪnˈsʌlt/. Noun: an insult /ˈɪnsʌlt/. Wider: offend. Stronger: abuse. Fair comment ≠ insult.',
    ['offend']
  ),
  insure: L(
    'To insure is to buy insurance: insure a car; insure against flood. Ensure means make sure — a classic mix-up. Assure means tell someone confidently. Insurance is already in the dictionary. Ensure the door is locked; insure the house. Do not write “insure that you arrive” when you mean ensure.',
    ['You must insure the van before any delivery shift.', 'The policy does not insure against wear and tear, only sudden damage.'],
    'insure a car / against flood. Noun: insurance. Mix-up: ensure = make sure; assure = tell someone firmly.',
    []
  ),
  intake: L(
    'Intake is what you take in: calorie intake; salt intake; alcohol intake. It is also the group accepted onto a course (this year’s intake). Take-in is not used this way. Uncountable for food and drink amounts. Do not use intake for a single mouthful — that is a sip or a bite.',
    ['The nurse asked him to reduce his sugar intake after the blood test.', 'The September intake of apprentices starts with a week of safety training.'],
    'salt / calorie intake (uncountable). Also: this year’s intake (new students/staff). Not a single sip. Not “take-in”.',
    []
  ),
  intense: L(
    'Intense means very strong: intense heat; intense pressure; intense competition. Intensive is about a lot of activity in a short time (an intensive course) — related but not the same. Strong is everyday. Intensity is the noun. Do not use intense for a slightly busy afternoon; keep it for something extreme.',
    ['Competition for the graduate posts was intense.', 'The intense heat closed outdoor markets by noon.'],
    'intense heat / pressure / competition. Contrast: intensive = concentrated activity (a course). Everyday: strong. Not a mildly busy day.',
    ['strong']
  ),
  intensive: L(
    'Intensive means a lot of effort or attention packed into a short time: an intensive course; intensive care (hospital). Intense is about strength of feeling or degree. Intensive farming uses land very heavily. Do not call a normal weekly class intensive unless extra hours are packed in. ICU is intensive care in hospital news.',
    ['She booked an intensive IELTS course for the two weeks before the test.', 'He spent a night in intensive care after the crash, which is the hospital sense.'],
    'an intensive course; intensive care. Contrast: intense = very strong. Farming: intensive. Not an ordinary weekly class.',
    []
  ),
  interfere: L(
    'To interfere is to get involved where you are not wanted, or to get in the way: interfere in someone’s life; interfere with a signal / an experiment. Interrupt is to stop someone speaking. Intervention (already below) can be official and planned. Do not use interfere for helping when you were asked — that is help. The pattern interfere with + thing is common for equipment.',
    ['Headphones will interfere with the listening test if you leave them on.', 'She asked her parents not to interfere in the job decision.'],
    'interfere in a situation / with a process. Contrast: interrupt (speech). Asked-for help ≠ interfere. Equipment: interfere with.',
    []
  ),
  internship: L(
    'An internship is a short placement to gain experience: an unpaid internship; a summer internship. Intern is the person (already in the dictionary). A work placement or work experience is everyday UK school language; an apprenticeship is longer and often paid as training for a trade. Do not call a permanent junior job an internship.',
    ['Her internship at the radio station led to a paid research shift.', 'Unpaid internships exclude students who cannot live in London for free.'],
    'a summer / unpaid internship. Person: intern. School UK: work experience. Trade training: apprenticeship. Not a permanent job.',
    ['placement']
  ),
  interpretation: L(
    'An interpretation is how you explain meaning: an interpretation of the data; alternative interpretations. Interpret is the verb (already in the dictionary). Translation is written; interpreting is spoken languages. In IELTS Task 1 you interpret a chart, you do not just copy numbers. Do not write “the interpretation says” — say the report / the author argues.',
    ['A second interpretation of the graph is that prices fell only in the north.', 'Live interpretation into British Sign Language was provided at the inquiry.'],
    'an interpretation of + data / text. Verb: interpret. Spoken languages: interpreting. Written: translation. Not “the interpretation says”.',
    ['explanation']
  ),
  interval: L(
    'An interval is a gap in time: at regular intervals; a ten-minute interval. In UK theatres it is the break (US intermission). Break is everyday; gap can be space or time. Do not use interval for a school holiday — that is a holiday or half-term. At intervals means repeatedly with gaps.',
    ['There is a fifteen-minute interval in the middle of the listening paper.', 'Buses run at twenty-minute intervals after 7 p.m.'],
    'at regular / twenty-minute intervals. Theatre UK: the interval (US intermission). Everyday: break. Not a school holiday.',
    ['break']
  ),
  intervention: L(
    'An intervention is action taken to change a situation: government intervention; early intervention; a medical intervention. Intervene is the verb (already in the dictionary). Interference sounds unwelcome; intervention can be planned and official. Do not use it for a short interruption in a meeting — that is an interruption.',
    ['Early intervention in schools can reduce later exclusions.', 'Military intervention was ruled out in the statement, which is the political sense.'],
    'early / government / medical intervention. Verb: intervene. Unwelcome twin: interference. Not a brief interruption in a meeting.',
    []
  ),
  invoice: L(
    'An invoice is a bill for goods or work: raise an invoice; pay an invoice; an unpaid invoice. A receipt proves you have paid; an invoice asks for payment. Bill is everyday (a restaurant bill). Invoice is also a verb. Do not call a till receipt an invoice. UK small businesses talk of 14-day or 30-day payment terms.',
    ['Accounts will not release the order until the invoice is paid.', 'She invoiced the client for two extra design hours, which is the verb.'],
    'pay / raise / issue an invoice. Everyday: bill. Proof of payment: receipt. Also a verb. Not a till receipt.',
    ['bill']
  ),
  isolation: L(
    'Isolation is being cut off from others: social isolation; in isolation; isolation after a positive test. Isolate is the verb (already in the dictionary). Loneliness is the feeling; isolation can be physical or medical. In isolation also means considering something alone (the figure looks good in isolation). Do not use isolation for a quiet evening you chose — that is time alone.',
    ['The charity runs calls to reduce isolation among older tenants.', 'The case looked serious in isolation, but the yearly trend was down.'],
    'social isolation; in isolation (alone / considered separately). Verb: isolate. Feeling: loneliness. Chosen quiet evening ≠ isolation.',
    ['loneliness']
  ),
  involvement: L(
    'Involvement is taking part or being connected: involvement in the project; deny involvement. Involve is the verb (already in the dictionary). Participation is close and often more positive or official. Do not write “involvement on the crime” — use in. News: alleged involvement; no evidence of involvement.',
    ['The inquiry examined the ministry’s involvement in the contract.', 'She denied any involvement in leaking the memo.'],
    'involvement in (not on). Verb: involve. Close: participation. News: deny / alleged involvement.',
    ['participation']
  ),
  junction: L(
    'A junction is where roads or railway lines meet: a busy junction; turn right at the junction; Junction 21 of the M1. A crossroads is a type of junction; a roundabout is another. Intersection is more US. Do not use junction for a meeting of people — that is a meeting or a gathering. Give way at a junction is a Highway Code phrase.',
    ['Accidents cluster at the junction outside the school gates.', 'Leave the motorway at junction 8 and follow signs for the hospital.'],
    'at the junction; motorway junction + number. Type: crossroads / roundabout. US: intersection. Not a meeting of people.',
    ['crossroads']
  ),
  jury: L(
    'A jury is the group in court that decides guilty or not guilty: the jury; a jury trial; jury service (UK duty). A judge decides the sentence in many cases; the jury decides the verdict. Jury also judges a competition. Do not write “the jury of the police” — police are not the jury. Unanimous jury is a news phrase.',
    ['The jury took a day to reach a verdict of not guilty.', 'She was called up for jury service at the Crown Court.'],
    'the jury; a jury trial; jury service (UK). Verdict: jury. Sentence: often the judge. Also a competition panel.',
    []
  ),
  junior: L(
    'Junior means lower in rank or younger: a junior doctor; a junior colleague; junior school. Senior is the opposite. Junior can be a noun (the juniors play on Saturday). Do not use junior as a rude way to say someone is inexperienced in a formal email — say early-career or give the real job title. In families, John Smith Junior is mainly US.',
    ['A junior reporter covered the council meeting, not the editor.', 'Junior doctors voted on industrial action, which is the NHS rank sense.'],
    'junior + job title; junior school. Opposite: senior. Noun: the juniors. Avoid as a casual insult in work email.',
    []
  ),
  journal: L(
    'A journal is a serious specialist magazine: a medical journal; an academic journal; a trade journal. A diary is personal; a magazine is wider and more popular; a newspaper is news. Journal is also a diary in some courses (keep a learning journal). Do not call a tabloid a journal. Journalist is the person (already in the dictionary).',
    ['The trial results appeared in a peer-reviewed journal, not in a press release only.', 'Keep a reflective journal during the placement, which is the diary sense.'],
    'a medical / academic journal. Popular: magazine. News: newspaper. Personal record: diary / learning journal. Not a tabloid.',
    ['periodical']
  ),
  judgement: L(
    'Judgement is an opinion after thinking: in my judgement; poor judgement; a judgement call. In UK law the spelling judgment (no e) is common for a court decision. Judge is the verb/person. Do not write “according to my judgement that” — say in my judgement. A verdict is the jury’s decision; a judgment can be the judge’s written ruling.',
    ['In my judgement, the evidence is still too weak for a ban.', 'The High Court’s judgment will be published on Friday, which is the legal spelling.'],
    'in my judgement; poor judgement. Legal UK often: judgment. Person/verb: judge. Jury decision: verdict.',
    ['opinion']
  ),
  joint: L(
    'Joint as an adjective means shared: a joint account; a joint statement; joint responsibility. Shared and combined are everyday. A joint is also a body part (knee joint) or a piece of roast meat. Do not use joint for a meeting you merely attend separately — both sides must share it. Jointly is the adverb.',
    ['The unions issued a joint statement after the talks.', 'Pain in the joint grew worse on the night shift, which is the body sense.'],
    'a joint statement / account / effort. Adverb: jointly. Also: body joint; roast joint. Must be actually shared.',
    ['shared']
  ),
  justification: L(
    'Justification is a good reason, especially when people might object: no justification for; economic justification. Justify is the verb (already in the dictionary). Excuse can sound weaker or more personal. Reason is everyday. Do not write “a justification of being late” — say justification for + -ing / a noun. In essays, give a justification, not only an opinion.',
    ['There is no justification for publishing the names of the children.', 'The business case offered little justification for another delay.'],
    'justification for + noun / -ing (not of being). Verb: justify. Everyday: reason. Weaker/personal: excuse.',
    ['reason']
  ),
  keen: L(
    'Keen means eager: keen to apply; keen on football; a keen interest. Enthusiastic is a close twin; eager is similar. Keen can also mean sharp (a keen sense of smell) or low prices (keen prices) in business. Do not say “I am keen for going” — use keen to + verb or keen on + noun. Not keen is a polite UK no.',
    ['She is keen to move into the research team.', 'He is not keen on night shifts, which is a polite refusal.'],
    'keen to + verb; keen on + noun. Close: eager / enthusiastic. Polite no: not keen. Also: keen prices (business).',
    ['eager']
  ),
  kidney: L(
    'A kidney is one of the two organs that clean the blood: kidney disease; a kidney transplant; kidney failure. Kidney beans are food — same spelling, different sense. Renal is the medical adjective. Do not confuse kidney with kiddy (informal child). News: dialysis, donor, waiting list.',
    ['The clinic monitors patients with chronic kidney disease.', 'Kidney beans are not related to the organ except by shape, which is the food sense.'],
    'kidney disease / transplant / failure. Medical adjective: renal. Food: kidney beans. Mix-up: kiddy (child).',
    []
  ),
  kit: L(
    'Kit is a set of equipment: a first-aid kit; a tool kit; football kit (UK sports clothes). Equipment is wider; gear is informal. Kit out is a phrasal verb (kit the team out). Uncountable when it means clothing for sport (in their home kit). Do not use kit for a single screwdriver — that is a tool.',
    ['Every lab bench has a spill kit within reach.', 'The away kit was yellow, which is the sports-clothes sense.'],
    'a first-aid / tool kit; football kit (UK). Wider: equipment. Informal: gear. One tool ≠ a kit.',
    ['equipment']
  ),
  labour: L(
    'Labour is work, especially physical: hard labour; skilled labour; a labour shortage. Labor is the US spelling. Labour (capital L) is the UK political party. A worker is a person; labour is often the work or the workforce as a whole. Do not confuse it with neighbour or with lab (laboratory). Childbirth labour is another sense.',
    ['The harvest still depends on seasonal labour.', 'Labour promised a review of social care in the manifesto, which is the party name.'],
    'hard / skilled labour (UK spelling). Workforce sense: a labour shortage. Party: Labour. US: labor. Mix-up: lab.',
    ['work']
  ),
  laboratory: L(
    'A laboratory is a room for scientific tests: a laboratory test; in the laboratory. Lab is the everyday short form. A clinic sees patients; a laboratory processes samples. Do not call a school classroom a laboratory unless it is fitted for experiments. Lab results is common in health news.',
    ['The samples went to an outside laboratory for DNA testing.', 'Lab staff worked overnight, which is the short form in speech.'],
    'in the laboratory; a laboratory test. Short: lab. Patients: clinic. Samples: laboratory. Not an ordinary classroom.',
    ['lab']
  ),
  'long-term': L(
    'Long-term means lasting or planned for a long time: a long-term contract; long-term effects; long-term unemployed. Short-term is the opposite. Lasting is everyday. Use a hyphen in the adjective (a long-term plan). In the long term is a phrase with an article. Do not write “long term plan” without the hyphen when it sits before a noun.',
    ['The drug’s long-term effects are still being monitored.', 'In the long term, moving the warehouse north will cut costs.'],
    'a long-term + noun (hyphen). Phrase: in the long term. Opposite: short-term. Before a noun, keep the hyphen.',
    []
  ),
  layout: L(
    'Layout is how parts are arranged: the layout of the page; a new office layout; the layout of the exam paper. Design is wider; format is about file or paper type. Lay out is the verb (two words). Do not write “the layout is designed of” — say the layout of. In exams, a confusing layout can cost marks even when the content is known.',
    ['The new layout put the mark boxes on every other line.', 'They changed the office layout so that the printers were not in the walkway.'],
    'the layout of + place/page. Verb: lay out (two words). Wider: design. File type: format.',
    ['arrangement']
  ),
  leaflet: L(
    'A leaflet is a small printed sheet: a leaflet on vaccinations; hand out leaflets. A brochure is usually glossier and for selling; a flyer is similar and often promotional; a booklet has more pages. Leaf is a plant part — related spelling, different word. Do not call a 40-page report a leaflet.',
    ['The pharmacy left a leaflet about blood-pressure checks at the till.', 'Campaigners handed out leaflets at the station at rush hour.'],
    'hand out / pick up a leaflet. Glossier selling: brochure. Promo: flyer. Longer: booklet. Not a full report.',
    ['flyer']
  ),
  leak: L(
    'A leak is liquid or gas escaping, or secret information reaching the press: a gas leak; a leak to the newspapers; leak a report (verb). Leakage is often the liquid sense. A spill is usually on a surface. Do not accuse someone of a leak unless you mean unauthorised disclosure — it is a serious news word. Drip is a slow liquid leak.',
    ['Engineers shut the street because of a water leak.', 'Someone leaked the salary list to a reporter, which is the news sense.'],
    'a gas / water leak; a leak to the press. Verb: leak a document. Surface: spill. Slow: drip. News sense is serious.',
    []
  ),
  leadership: L(
    'Leadership is the skill of leading, or the people at the top: strong leadership; a change of leadership; leadership skills. A leader is one person; leadership can be the whole senior group. Management is running systems; leadership is often about direction and people. Uncountable in the skill sense. Do not write “a leadership” for one manager.',
    ['Staff asked for a change of leadership after the third safety failure.', 'The course includes a module on leadership, not only on accounting.'],
    'leadership skills; a change of leadership. Person: leader. Systems: management. Uncountable for the skill. Not “a leadership”.',
    []
  ),
  legislation: L(
    'Legislation is law made by a government: new legislation; introduce legislation; health-and-safety legislation. A law can be one act; legislation is often the set of laws. Legislate is the verb. Legal is the adjective about the law. Do not use legislation for a company rule — that is a policy. Uncountable in this sense.',
    ['New legislation will cap agency fees for tenants.', 'Equalities legislation already bans that kind of advert.'],
    'new / introduce legislation (uncountable). One act: a law. Company rule: policy. Verb: legislate.',
    ['law']
  ),
  leisure: L(
    'Leisure is free time: leisure time; leisure facilities; a leisure centre (UK sports/pool building). Spare time is everyday. Uncountable. Leisurely is an adjective meaning unhurried. Do not confuse leisure with pleasure (enjoyment) or with laser. UK councils run leisure services.',
    ['The town’s leisure centre closed its pool for repairs.', 'She has little leisure during exam term, which is the free-time sense.'],
    'leisure time / facilities / centre (UK). Everyday: spare time. Uncountable. Adjective: leisurely. Mix-up: pleasure / laser.',
    ['free time']
  ),
  lengthy: L(
    'Lengthy means very long, often too long: a lengthy delay; a lengthy report; lengthy discussions. Long is everyday and neutral; lengthy often complains. Length is the noun. Do not use lengthy for a tall person — that is tall. A long-term plan is about duration of policy, not a lengthy document.',
    ['Passengers faced a lengthy wait on the platform with no explanation.', 'The contract was lengthy, but the important clause was on page two.'],
    'a lengthy delay / report. Everyday: long. Often negative (too long). People: tall, not lengthy. Noun: length.',
    ['long']
  ),
  liable: L(
    'Liable means legally responsible: liable for the damage; liable to pay. It also means likely (liable to flood). Responsible is everyday; likely is the second sense. Liability is the noun (already a cousin idea in business). Do not mix liable with libel (a false published statement). Pattern: liable for + noun; liable to + verb.',
    ['The contractor is liable for injuries on site.', 'The cellar is liable to flood after heavy rain, which is the “likely” sense.'],
    'liable for (responsible); liable to + verb (likely). Noun: liability. Mix-up: libel (false publication).',
    ['responsible']
  ),
  licence: L(
    'A licence is an official permit (UK noun): a driving licence; a TV licence; a licence to sell alcohol. License is the UK verb and the US noun spelling. Permit is a close cousin. Do not write “a driving license” in UK exams. Lose your licence is a court/news phrase. Licence fee appears with the BBC.',
    ['The job advert asked for a full UK driving licence.', 'The council licensed the venue until 1 a.m., which is the verb spelling.'],
    'UK noun: licence. UK verb / US noun: license. Close: permit. Exam trap: driving licence (UK).',
    ['permit']
  ),
  lifestyle: L(
    'Lifestyle is how you live: a healthy lifestyle; lifestyle changes; a sedentary lifestyle. Way of life is a longer twin. Uncountable when you mean the general idea; a lifestyle can mean a type. Do not use lifestyle for one evening’s plans — that is plans. Health texts pair lifestyle with diet and exercise.',
    ['The nurse talked about lifestyle changes, not only tablets.', 'A celebrity lifestyle is not the same as a healthy lifestyle in public-health advice.'],
    'a healthy / sedentary lifestyle; lifestyle changes. Twin: way of life. Not one evening’s plans. Health collocation: diet and exercise.',
    []
  ),
  limitation: L(
    'A limitation is a restriction or a weakness: a limitation on hours; the limitations of the study. Limit is the verb and a simpler noun (a time limit). Restriction is close. Do not confuse limitation with imitation (a copy). In research, limitations of the study is a set phrase.',
    ['There is a legal limitation on how long agency staff may stay.', 'Honesty about the limitations of the data made the essay stronger.'],
    'a limitation on + noun; limitations of a study. Simpler noun/verb: limit. Close: restriction. Mix-up: imitation.',
    ['restriction']
  ),
  literacy: L(
    'Literacy is the ability to read and write: adult literacy; literacy rates; computer literacy / financial literacy (skill in a field). Illiteracy is the opposite. Reading is the activity; literacy is the skill level. Uncountable. Do not use literacy for speaking a language fluently — that is fluency. UK schools talk of literacy and numeracy.',
    ['The library runs adult literacy classes on Wednesday evenings.', 'Computer literacy is now expected even in warehouse roles.'],
    'adult literacy; literacy rates. Extended: computer / financial literacy. Opposite: illiteracy. Pair: numeracy. Uncountable.',
    []
  ),
  loan: L(
    'A loan is money you borrow and repay: a student loan; take out a loan; a bank loan. Lend is what the bank does; borrow is what you do. A mortgage is a loan to buy a home. Do not say “loan me your pen” in careful UK English — say lend. Loan as a verb is more US or informal UK.',
    ['She took out a loan to cover the deposit on the flat.', 'Student loan repayments start when you earn over the threshold.'],
    'take out / repay a loan. Bank: lend. You: borrow. Home: mortgage. Careful UK: lend me, not loan me.',
    []
  ),
  lobby: L(
    'To lobby is to try to influence officials: lobby the council; a lobbying campaign. A lobby is also the entrance hall of a hotel or theatre. Pressure group and campaign are cousins. Do not use lobby for a private complaint to a shop — that is a complaint. News: the gun lobby, the farming lobby (groups that lobby).',
    ['Parents lobbied MPs for a safer crossing.', 'Wait in the hotel lobby, which is the entrance-hall sense, not politics.'],
    'lobby + official / for a change. Noun: a lobby group; also a hotel lobby. Close: campaign. Not a shop complaint.',
    ['campaign']
  ),
  location: L(
    'Location is a precise place: a convenient location; on location (filming away from a studio); the location of the hospital. Place is everyday; site is often a building site or website. Locate is the verb. Do not write “the location is at London” — say in London / the location is London. Estate agents talk of location, location, location.',
    ['The warehouse moved to a location nearer the motorway.', 'The drama was filmed on location in Hull, not on a backlot.'],
    'a + adjective + location; on location (film). Everyday: place. Verb: locate. in London, not “at London”.',
    ['place']
  ),
  lawsuit: L(
    'A lawsuit is a court case between two sides: file a lawsuit; bring a lawsuit against. A trial is the hearing; a lawsuit is the whole case. Sue is the everyday verb. Case is wider (a criminal case may not be a lawsuit between private parties). Do not use lawsuit for a police charge — that is a prosecution. US news uses lawsuit more than everyday UK speech (we often say taking them to court).',
    ['Workers brought a lawsuit over unpaid holiday pay.', 'The company settled the lawsuit before it reached trial.'],
    'bring / file a lawsuit against. Everyday: sue / take to court. Hearing: trial. Police charge: prosecution.',
    []
  ),
  learner: L(
    'A learner is someone learning: a language learner; a learner driver (UK L-plates). Student is often school/university; pupil is school; learner is skill or language focused. Beginner is the very start. Do not call a professor a learner unless you mean they are learning something new. Independent learner is a classroom phrase.',
    ['The course is for intermediate learners, not for beginners.', 'A learner driver must display L-plates and have a supervising driver.'],
    'a language learner; a learner driver (UK). School child: pupil. University: student. Start: beginner. Not a professor’s title.',
    ['student']
  ),
  manufacturing: L(
    'Manufacturing is making goods in factories: manufacturing jobs; the manufacturing sector. Manufacture is the verb; manufacturer is the company. Production is wider (including farming or energy). Industry can mean one sector. Uncountable. Do not use manufacturing for cooking a meal at home — that is cooking / making.',
    ['Manufacturing output fell when the chip shortage hit.', 'The town lost manufacturing jobs when the plant moved overseas.'],
    'manufacturing jobs / sector / output (uncountable). Verb: manufacture. Company: manufacturer. Wider: production. Not home cooking.',
    ['production']
  ),
  manufacturer: L(
    'A manufacturer is a company that makes goods: a car manufacturer; the manufacturer’s instructions. A maker is everyday and can be small; a factory is the building. Producer is often used for food, energy, or films. Do not call a shop a manufacturer if it only sells. Recall notices name the manufacturer.',
    ['The manufacturer recalled 40,000 chargers after a fire risk.', 'Always follow the manufacturer’s instructions on the bleach bottle.'],
    'a car / drug manufacturer; manufacturer’s instructions. Everyday: maker. Building: factory. Shop ≠ manufacturer.',
    ['maker']
  ),
  marketing: L(
    'Marketing is advertising and selling: a marketing campaign; work in marketing; digital marketing. Advertising is one part; sales is closing the deal; marketing is the wider plan. Market is the noun for where buying happens (already in the dictionary). Uncountable as a department or activity. Do not use marketing for a single handwritten poster unless you are joking.',
    ['She moved from journalism into marketing for a charity.', 'The marketing campaign overpromised what the app could do.'],
    'work in marketing; a marketing campaign (uncountable activity). Part: advertising. Closing deals: sales. Not one homemade poster.',
    ['advertising']
  ),
  maternity: L(
    'Maternity is about pregnancy and new mothers: maternity leave; a maternity ward; maternity pay. Paternity leave is for the other parent. Parental leave is wider. A maternity dress is clothing. Do not use maternity for any women’s health issue — it is specifically pregnancy and birth. NHS news: maternity services, maternity scandal.',
    ['She is on maternity leave until the new year.', 'The report criticised staffing on the maternity ward.'],
    'maternity leave / pay / ward. Other parent: paternity leave. Wider: parental leave. Specifically pregnancy and birth.',
    []
  ),
  mature: L(
    'Mature means fully grown, or sensible like an adult: a mature student (older than the typical undergraduate); mature behaviour; mature cheese. Immature is the opposite. Grown-up is informal. Mature is also a verb (the investment matures). Do not call a child mature as faint praise if you mean polite — it can sound like you are comparing them to adults unkindly.',
    ['The course welcomes mature students who are changing career.', 'The cheese is sold when it is mature, which is the food sense.'],
    'a mature student; mature behaviour. Opposite: immature. Verb: mature (investments, cheese). Informal: grown-up.',
    ['adult']
  ),
  maximum: L(
    'Maximum is the most allowed or possible: the maximum speed; a maximum of twenty; maximum mark. Minimum is the opposite. Max is informal. As a noun: a maximum of. Do not write “maximum twenty of people” — say a maximum of twenty people. Speed cameras use maximum speed limit.',
    ['The maximum score on the speaking paper is 30.', 'A maximum of four items can go in the cabin bag.'],
    'the maximum + noun; a maximum of + number. Opposite: minimum. Informal: max. Not “maximum twenty of people”.',
    []
  ),
  mayor: L(
    'A mayor is the elected head of a town or city: the Mayor of London; the mayor opened the clinic. A councillor is a member of the council; a leader of the council is another UK role. Mayor is not the same as major (army rank / important). Do not write “the mayor of the country” — that is a president or prime minister.',
    ['The mayor visited the flood-hit streets with the fire chief.', 'Sadiq Khan is Mayor of London, a directly elected post.'],
    'the mayor of + city; Mayor of London. Council member: councillor. Mix-up: major. Not a head of state.',
    []
  ),
  medical: L(
    'Medical is about doctors, illness, and treatment: medical advice; a medical certificate; medical research. Health is wider (including fitness and public health). A medical can be a noun (a check-up). Medicine is the field or the drug. Do not use medical for a gym workout — that is fitness. Sick note in UK speech often means a medical certificate.',
    ['Bring a medical certificate if you miss more than seven days of work.', 'She went to medical school, which is the training sense, not a tablet.'],
    'medical advice / certificate / research. Wider: health. Noun: a medical (check-up). Drug/field: medicine. Gym ≠ medical.',
    []
  ),
  medication: L(
    'Medication is a drug for an illness: on medication; prescribed medication; stop the medication. Medicine is a close twin; tablets or pills name the form. Uncountable in “on medication”. Do not use medication for vitamins you chose yourself unless a clinician does. Over-the-counter vs prescription is a useful contrast.',
    ['Do not mix this medication with alcohol.', 'He has been on medication for blood pressure since March.'],
    'on medication; prescribed medication (often uncountable). Close: medicine. Form: tablets. Contrast: over-the-counter / prescription.',
    ['medicine']
  ),
  membership: L(
    'Membership is belonging to a club or group: gym membership; membership fees; cancel your membership. Member is the person (already in the dictionary). Subscription is close for magazines and streaming. Uncountable for the state of belonging; a membership can mean one person’s place. Do not write “a membership of the union” — say membership of / union membership.',
    ['Union membership rose after the pay offer was rejected.', 'Gym membership includes two classes, but not personal training.'],
    'membership of; gym / union membership. Person: member. Streaming/magazine: subscription. Not “a membership of” + organisation without rewriting.',
    []
  ),
  mental: L(
    'Mental is about the mind: mental health; mental illness; a mental arithmetic test. Physical is the body pair. Psychiatric is more medical. Do not use mental as an informal insult — it is offensive. Mental health services is the UK public phrase. Mentally is the adverb.',
    ['The college improved its mental health support after the survey.', 'Mental arithmetic is done without a calculator, which is the “in the head” sense.'],
    'mental health / illness. Pair: physical. More medical: psychiatric. Do not use as an insult. Adverb: mentally.',
    []
  ),
  merge: L(
    'To merge is to join two things into one: merge two departments; the banks merged; lanes merge. Combine is everyday; amalgamate is more formal. Merger is the noun (a merger between). Do not use merge for putting two files next to each other without combining them — that is attach or include. Traffic: merge in turn.',
    ['The two trusts will merge next April.', 'Traffic merges into one lane at the bridge, which is the road sense.'],
    'merge with / merge two things. Noun: merger. Everyday: combine. Traffic: lanes merge. Not merely attaching a file.',
    ['combine']
  ),
  migrant: L(
    'A migrant moves from one country or region to another, often for work: migrant workers; a migrant camp. Immigrant emphasises arriving to settle; emigrant emphasises leaving; refugee is fleeing danger. Migration is the noun. Use the word factually in news English. Do not use migrant as an insult, and do not mix it with vagrant (a dated word for someone without a home).',
    ['Migrant workers keep many farms going through the harvest.', 'The report counted seasonal migrants, not people applying for asylum.'],
    'migrant worker; seasonal migrant. Settle: immigrant. Leave: emigrant. Danger: refugee. Noun: migration. Neutral news tone.',
    []
  ),
  minimum: L(
    'Minimum is the least allowed or possible: the minimum wage; a minimum of two years; minimum age. Maximum is the opposite. Min is informal. A minimum of + number. Do not write “minimum two of years”. National Minimum Wage / National Living Wage are UK news staples.',
    ['The job needs a minimum of six months’ experience.', 'Overnight staff must be paid at least the National Minimum Wage.'],
    'the minimum + noun; a minimum of + number. Opposite: maximum. UK: National Minimum Wage. Not “minimum two of years”.',
    []
  ),
  minister: L(
    'A minister is a senior government politician: the health minister; a cabinet minister; Prime Minister. Ministry is the department. A minister is also a church leader. Secretary of State is a UK title for some ministers. Do not call every MP a minister — only those with a government job. Mix-up: minster (a large church, York Minster).',
    ['The education minister answered questions on teacher shortages.', 'She spoke to the parish minister after the funeral, which is the church sense.'],
    'the health / foreign minister; Prime Minister. Department: ministry. Not every MP. Mix-up: minster (church building).',
    []
  ),
  ministry: L(
    'A ministry is a government department in many countries: the Ministry of Defence; the ministry issued guidance. In the UK, some departments are called ministries and some offices or departments. A minister heads it. Church ministry is another sense (work of a priest). Do not use ministry for a small office team. Uncountable in the church-work sense.',
    ['The ministry published new guidance on flood defences.', 'He left teaching for ministry in an inner-city parish, which is the church sense.'],
    'the Ministry of + area; ministry guidance. Head: minister. Also religious work. Not a small private office.',
    ['department']
  ),
  misleading: L(
    'Misleading gives the wrong idea: a misleading headline; misleading advertising. False can mean untrue; misleading can be technically true but still distort. Mislead is the verb. Deceptive is stronger. Advertising Standards action often uses misleading. Do not use it for a simple mistake in a date unless it could cause the wrong conclusion.',
    ['The headline was misleading: the “fall” in crime was within the margin of error.', 'Misleading adverts for loans were banned after complaints.'],
    'a misleading headline / advert. Verb: mislead. Stronger: deceptive / false. Can be “true but distorting”.',
    ['deceptive']
  ),
  mock: L(
    'A mock is a practice exam: sit a mock; mock results; mock interviews. As a verb, mock means make unkind fun of someone. Mock can also mean imitation (mock leather). Do not mock a classmate’s accent — that is the unkind verb. Schools run mocks in the spring before GCSEs or A-levels.',
    ['Her mock scores were lower than the real exam, which is common.', 'He mocked the way she spoke, which is the unkind verb, not a practice test.'],
    'sit / take a mock (exam); mock interview. Verb: make unkind fun. Imitation: mock leather. Keep the exam and insult senses apart.',
    []
  ),
  monitor: L(
    'To monitor is to watch and check over time: monitor progress; monitor blood pressure; monitor the situation. A monitor is also a screen or a person who checks. Check can be once; monitor is repeated. Surveillance is heavier and often secret. Do not use monitor for a single glance at a message. Noun: heart monitor.',
    ['Staff monitored the river levels through the night.', 'The exam hall had CCTV monitors, which is the screen sense.'],
    'monitor + noun over time. Once: check. Secret/heavy: surveillance. Also a screen / a person. Not a single glance.',
    ['watch']
  ),
  morale: L(
    'Morale is a group’s confidence and mood: staff morale; boost morale; low morale. Moral (next entry) is about right and wrong — a classic spelling trap. Mood is one person’s feeling; morale is often collective, especially at work. Uncountable. Do not write “a morale”. News: morale among troops / nurses.',
    ['Morale fell when the bonus was cancelled.', 'The win boosted morale in the dressing room.'],
    'staff / low / high morale (uncountable). Mix-up: moral = right and wrong. Personal feeling: mood. Not “a morale”.',
    []
  ),
  moreover: L(
    'Moreover adds a supporting point in formal writing: The plan is costly; moreover, it is slow. Furthermore and in addition are cousins; besides is a little more informal. Do not start every sentence with moreover — once per paragraph is plenty. Do not use it in casual chat (say also). It does not mean however (that is contrast).',
    ['The evidence is thin; moreover, the sample was too small.', 'Places are limited. Moreover, applications close on Friday.'],
    'Formal additive: moreover / furthermore / in addition. Informal: also / besides. Not contrast (however). Do not overuse.',
    ['furthermore']
  ),
  mortgage: L(
    'A mortgage is a loan to buy a home: take out a mortgage; a mortgage rate; mortgage payments. A loan is wider; rent is not buying. Lender and borrower are the two sides. Do not confuse mortgage with mirage. UK news: interest rates, fixed-rate mortgage, mortgage prisoners. Verb: mortgage the house (use it as security).',
    ['They remortgaged when rates fell, which is a common UK verb.', 'Mortgage payments took more than a third of their take-home pay.'],
    'take out / repay a mortgage; mortgage rate. Wider: loan. Not rent. Mix-up: mirage. Also a verb.',
    []
  ),
  motivate: L(
    'To motivate is to make someone want to act: motivate staff; motivated by money; a motivating speech. Motivation is already in the dictionary. Encourage is softer; force is stronger and against someone’s will. Demotivate is the opposite. Do not use motivate for making a machine start — that is start / power. Motivated is a common CV adjective — use it with evidence.',
    ['The deadline motivated the team more than the pep talk.', 'She is motivated by interesting work, not only by overtime pay.'],
    'motivate someone to + verb; motivated by. Noun: motivation. Softer: encourage. Opposite: demotivate. Not starting a machine.',
    ['encourage']
  ),
  module: L(
    'A module is one unit of a course: a core module; optional modules; this module is assessed by exam. A course is the whole programme; a lesson is one class; a unit is a close twin in some textbooks. Modular means built from modules. Do not call a single homework task a module. UK universities: 15- or 30-credit modules.',
    ['You must pass the research methods module before the dissertation.', 'The optional module on media law filled up in a day.'],
    'a core / optional module; pass a module. Whole programme: course. One class: lesson. Credits in UK HE.',
    ['unit']
  ),
  milestone: L(
    'A milestone is an important event in a process: a milestone in her career; reach a milestone; project milestones. A turning point can be more dramatic; a step is smaller. Milepost is a literal road marker. Do not call every email a milestone. Project managers put milestones on a timeline.',
    ['Passing the OSCE was a milestone in his medical training.', 'The first 1,000 users was a milestone for the start-up.'],
    'reach / mark a milestone; project milestones. Smaller: a step. More dramatic: turning point. Not every routine task.',
    []
  ),
  minutes: L(
    'Minutes are the official written record of a meeting: the minutes; take the minutes; approve the minutes. A minute is sixty seconds (already in the dictionary as minute). Minute-taker is the person. Notes are informal; minutes are the agreed record. Do not write “the minute of the meeting” for this sense — use minutes. Circulate the minutes after the meeting.',
    ['Any corrections to the minutes should be sent by Friday.', 'She was asked to take the minutes because the secretary was off sick.'],
    'the minutes of the meeting; take / approve / circulate the minutes. Informal: notes. Time unit: a minute. Plural for the record.',
    []
  ),
}
