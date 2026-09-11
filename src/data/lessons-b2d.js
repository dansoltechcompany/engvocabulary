const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2D = {
  adaptation: L(
    'An adaptation is a change made so something fits a new situation, or a film, play, or version based on a book. Change is everyday and broader; version is close for the arts sense. Adapt is the verb (adapt to a climate, adapt a novel). In speech, a film of the book is enough for the second meaning — do not use adaptation for a tiny tweak that is not really a new fit.',
    ['The course is an adaptation of last year’s syllabus for evening students.', 'The stage adaptation cut three chapters and kept the ending.'],
    'adaptation of + book/play. Verb: adapt (to). Everyday: change / a version of. Arts: film or play based on a book.',
    ['version']
  ),
  addiction: L(
    'Addiction is a strong need to keep doing or using something even when it harms you: addiction to smoking, gambling, screens. Habit is everyday and weaker; dependence is a closer medical cousin. Addicted to is the adjective pattern; addictive describes the thing. In speech, I cannot stop is blunter. Use it for a serious pull, not for a mild liking (not “addicted to tea” unless you are joking).',
    ['He sought help for an addiction to online betting.', 'The game is designed to be addictive; that is not the same as an addiction.'],
    'addiction to + noun. Adjective: addicted to. Of the thing: addictive. Everyday: a habit you cannot stop. Stronger than liking.',
    ['dependence']
  ),
  adolescent: L(
    'An adolescent is a young person developing into an adult — the more formal, slightly clinical word for a teenager. Teenager is the everyday noun; youth can mean a young man or young people as a group. Adolescence is the period. In speech, teenager is almost always better. Do not use adolescent as a lazy insult for childish adult behaviour unless you want that sting.',
    ['The clinic runs a weekly group for adolescents and their parents.', 'Adolescent sleep patterns often clash with an early school start.'],
    'Formal/clinical for teenager. Period: adolescence. Everyday: teenager. Adjective: adolescent (behaviour, years).',
    ['teenager']
  ),
  adoption: L(
    'Adoption has two B2 senses: taking a child as your own, and starting to use a new idea or method (the adoption of a timetable). Taking on is everyday for the second; fostering is related but not the same as legal adoption. Adopt is the verb for both. In news and policy, adoption of a policy is standard; in speech, they started using is enough. Keep the child sense for the legal, family meaning.',
    ['The adoption of the new marking scheme took a full term.', 'They waited two years for the adoption to be approved.'],
    'adoption of + policy/method. Also: taking a child as your own. Verb: adopt. Everyday: starting to use / taking on.',
    ['taking on']
  ),
  aftermath: L(
    'The aftermath is the period after a war, accident, or other bad event, when people deal with the results: in the aftermath of the storm. Aftermath is not a synonym for result in a neutral sense — it follows damage or shock. Aftermath of is the set pattern. In speech, after the disaster or what followed is plainer. Do not use it after a wedding or a success unless you are being darkly ironic.',
    ['In the aftermath of the flood, the school became a shelter.', 'The inquiry sat for months in the aftermath of the collapse.'],
    'in the aftermath of + disaster. What follows a bad event. Everyday: after the disaster / the fallout. Not a neutral “result”.',
    ['fallout']
  ),
  agricultural: L(
    'Agricultural means connected with farming: an agricultural economy, agricultural land. Farming is the everyday adjective and noun; rural is about the countryside, not only farms. Agriculture is the noun (the industry and science). In speech, farming is almost always enough. Do not stretch it to any food topic — a restaurant is not agricultural because it serves vegetables.',
    ['The college offers an agricultural course for people who will run farms.', 'Agricultural runoff can pollute rivers after heavy rain.'],
    'Of farming. Noun: agriculture. Everyday: farming. Contrast: rural = countryside, not only farms.',
    ['farming']
  ),
  algorithm: L(
    'An algorithm is a set of rules a computer (or a process) follows to complete a task: a search algorithm, a sorting algorithm. Formula is close but often mathematical; recipe is the everyday metaphor. In tech talk it is standard; in ordinary speech, the programme’s rules or how the site decides is clearer. Do not use it as a vague villain for “the internet” unless you mean a specific procedure.',
    ['The algorithm ranks posts by how long people stay on them.', 'She wrote a simple algorithm to shuffle the revision cards.'],
    'A step-by-step rule, usually for a computer. Everyday: the site’s rules / a procedure. Close: formula (maths).',
    ['procedure']
  ),
  allocation: L(
    'An allocation is an amount given for a purpose, or the act of giving it: an allocation of time, funding allocation. Share and allowance are everyday cousins; share is looser, allowance often money you are permitted. Allocate is the verb. The word is official — budgets, rotas, grants. In speech, how much we get or what we were given is enough.',
    ['Our allocation of lab time was cut to one hour a week.', 'The council published the allocation of grants by postcode.'],
    'an allocation of + time/money. Verb: allocate. Official. Everyday: share / what we were given.',
    ['share']
  ),
  allowance: L(
    'An allowance is money given regularly for a purpose, or an amount of something you are allowed: a travel allowance, a luggage allowance. Pocket money is the everyday word for a child’s cash; budget is a plan for spending, not a gift. Make allowance for means take something into account. In British English, allowance is standard for expenses at work; do not confuse it with allocation (a share set aside from a pool).',
    ['Staff claimed a small mileage allowance for the school trip.', 'The ticket includes a 20-kilo baggage allowance.'],
    'Money or an amount you are allowed. make allowance for = take into account. Everyday: pocket money (children) / expenses. Close: allocation (a share from a pool).',
    ['expenses']
  ),
  alongside: L(
    'Alongside means next to, or together with: a boat alongside the quay, working alongside two teachers. Beside is close for place; together with is the everyday paraphrase for people. It can be a preposition or an adverb (the nurse stood alongside). In speech, next to or with is usually enough. Do not use it as a fancy synonym for in addition to in every essay sentence.',
    ['She taught alongside a specialist for the first term.', 'The cycle lane runs alongside the canal for two miles.'],
    'Next to / together with. Everyday: next to / with. Place or people. Not a lazy “also”.',
    ['beside']
  ),
  ambassador: L(
    'An ambassador is a senior official who represents a country abroad. Diplomat is broader (many ranks); envoy is a close, slightly newsier cousin. Ambassador to + country is the pattern; ambassador for can mean a public face of a cause (a brand ambassador — marketing, less official). In speech, the country’s representative is clear. Do not call every spokesperson an ambassador.',
    ['The ambassador to France opened the new cultural centre.', 'She became an ambassador for adult literacy, not a diplomat.'],
    'ambassador to + country. A country’s senior representative abroad. Broader: diplomat. Marketing: brand ambassador.',
    ['diplomat']
  ),
  amount: L(
    'An amount is a quantity of something you do not count as separate items: a large amount of time, water, money. Number is for countable things (a number of students); quantity is a close formal cousin. Amount of + uncountable noun is the standard pattern. In speech, how much is enough. Do not write “amount of people” in careful English — that is number of people.',
    ['A huge amount of marking arrived on Monday morning.', 'Reduce the amount of sugar, not the number of spoons, if you want a fair comparison.'],
    'amount of + uncountable. Countable: number of. Everyday: how much. Formal close: quantity.',
    ['quantity']
  ),
  analyst: L(
    'An analyst is someone whose job is to examine information and explain it: a data analyst, a political analyst. Expert is broader; researcher is closer in universities. Analyse is the British verb; analysis is the noun. In speech, the person who looks at the figures is enough. Do not use analyst for anyone with an opinion — the job is to examine, not to cheer.',
    ['The analyst spotted that two columns had been swapped.', 'A policy analyst wrote a short brief for the committee.'],
    'Someone who studies data or a field. Verb: analyse (British). Noun: analysis. Everyday: the person who looks at the figures. Broader: expert.',
    ['researcher']
  ),
  anniversary: L(
    'An anniversary is a date on which something important happened in a previous year: a wedding anniversary, the school’s tenth anniversary. Birthday is only for a person (or, loosely, a project). Anniversary of + event is the pattern. In speech, the yearly date or how many years since is clear. Do not use it for a one-off commemoration that is not tied to a yearly date.',
    ['They marked the anniversary of the library’s opening with a reading.', 'The tenth anniversary fell in the middle of exams, so the party waited.'],
    'anniversary of + event. A yearly date of a past event. Birthday = a person. Everyday: how many years since.',
    ['yearly date']
  ),
  apparatus: L(
    'Apparatus is equipment designed for a particular purpose, often in a lab, gym, or official system: laboratory apparatus, the apparatus of government (the machinery of the state). Equipment is the everyday cover-all; gear is informal. The word is slightly formal and often uncountable in the lab sense. In speech, the equipment is enough. Do not use it for a single household gadget (that is an appliance).',
    ['The science block replaced the old gas apparatus last summer.', 'Critics said the legal apparatus was too slow to protect tenants.'],
    'Special equipment, or the machinery of a system. Everyday: equipment. Formal. Contrast: appliance = household machine.',
    ['equipment']
  ),
  appendix: L(
    'In academic English, an appendix is extra material at the end of a book or report — tables, questionnaires, long data — not the main argument. Plural: appendices (or appendixes). See the appendix / in Appendix B are standard. An appendix is also a small organ in the body (appendicitis is the inflammation); that medical sense is useful, but in essays the book sense is the one you need. Everyday: extra section at the back. Do not dump the real analysis into an appendix and hope nobody notices.',
    ['Put the raw scores in the appendix, not in chapter three.', 'She had her appendix removed years ago; the word in this essay still means the extra section at the back.'],
    'Academic: extra section at the end of a book/report (Appendix A/B). Plural: appendices. Also a body organ (appendicitis). Everyday: extra pages at the back.',
    ['addendum']
  ),
  appliance: L(
    'An appliance is a machine designed to do a job in the home: kitchen appliances, a gas appliance. Machine is everyday and broader; gadget is smaller and often gimmicky; apparatus is lab or official equipment. White goods is informal British for large kitchen machines. In speech, cooker, fridge, or washing machine is clearer than appliance unless you mean the category.',
    ['Unplug small appliances before you go away for the holidays.', 'The landlord must service gas appliances every year.'],
    'A household machine. Everyday: machine / the cooker, fridge, etc. Contrast: apparatus (lab/official), gadget (small, often trendy).',
    ['machine']
  ),
  appreciation: L(
    'Appreciation is understanding the value of something, or a feeling of thanks: show your appreciation, an appreciation of poetry. Thanks is everyday for gratitude; understanding is closer for the first sense. Appreciate is the verb (I appreciate your help; property can appreciate in value — a different, financial sense). In speech, thank you or I can see the value is enough. Do not use appreciation as a cold synonym for pay rise unless you mean the financial increase.',
    ['A short note of appreciation landed on every volunteer’s desk.', 'The course built an appreciation of how arguments are structured, not only of facts.'],
    'Thanks, or seeing the value. Verb: appreciate. Everyday: thanks / understanding. Also (finance): rise in value.',
    ['gratitude']
  ),
  approve: L(
    'To approve is to officially agree to a plan, or to think something is good. Approve a plan (no of) is the official sense; approve of a person or habit is the opinion sense. Allow is everyday for permission; agree is broader. Approval is the noun; approved is the adjective. In speech, say yes to or I am happy with is more natural. Do not drop of when you mean moral or personal liking (“I approve him” is wrong).',
    ['The board approved the new timetable on Tuesday.', 'Her parents did not approve of the gap year, but they did not block it.'],
    'approve a plan (official). approve of + person/habit (opinion). Noun: approval. Everyday: say yes / be happy with.',
    ['authorise']
  ),
  architect: L(
    'An architect designs buildings. Designer is broader (graphics, fashion, interiors); planner is closer to cities and land use. Architecture is the subject and the style of buildings. In speech, the person who designed the building is enough. Do not call yourself the architect of a group project unless you mean you designed the structure — it can sound self-important.',
    ['The architect kept the old façade and rebuilt the hall behind it.', 'She trained as an architect before she moved into conservation.'],
    'Designs buildings. Subject: architecture. Broader: designer. Metaphor: the architect of a plan (use sparingly).',
    ['designer']
  ),
  archive: L(
    'An archive is a collection of historical documents or records stored for future use: the university archive, digital archives. Records is everyday; library is for books you borrow, not usually unique papers. Archive can also be a verb (archive the emails). Archival is the adjective. In speech, the old records or the stored files is enough. Do not confuse it with a backup you might delete next week — archives are kept.',
    ['The letters are in the county archive, not on the open shelves.', 'Please archive last year’s minutes rather than leaving them in the shared inbox.'],
    'Stored historical records. Verb: archive. Adjective: archival. Everyday: old records. Contrast: library (borrowable books).',
    ['records']
  ),
  arena: L(
    'An arena is a place for sports or public events, or — more useful at B2 — an area of activity and competition: the political arena, a tough arena. Stadium is the everyday sports cousin; field and sphere are close for the figurative sense. In speech, world of or scene is often enough. Do not use arena for a quiet seminar unless you mean it is a contest.',
    ['She entered the political arena after ten years in teaching.', 'The indoor arena holds six thousand, but tonight it felt half empty.'],
    'Stadium, or a field of activity (the political arena). Everyday: stadium / the world of. Figurative: a competitive space.',
    ['stadium']
  ),
  articulate: L(
    'To articulate is to express thoughts clearly in words: articulate a problem, articulate a feeling. Explain is everyday; express is close; spell out is informal. Articulate is also an adjective for a person who speaks clearly. Articulation is the noun (and, in phonetics, how sounds are formed). In speech, put into words or say clearly is more natural. Do not use it for mere chatting.',
    ['She articulated the trade-off in one sentence: cheaper, or faster.', 'He is articulate in tutorials but still struggles to write the same point.'],
    'Put into clear words. Also adjective: a clear speaker. Everyday: say clearly / put into words. Noun: articulation.',
    ['express']
  ),
  aspiration: L(
    'An aspiration is a hope or ambition you aim for: her aspiration is to study medicine, career aspirations. Hope is everyday and can be vague; ambition is a close synonym, sometimes more hungry. Aspire to is the verb pattern. In speech, what I want to do or my aim is enough. The word is slightly formal and positive — it is not a synonym for a daydream you will not act on.',
    ['The college asked for a short paragraph on their aspirations, not a novel.', 'High aspirations without a timetable remain a wish.'],
    'aspiration to + verb / + noun. Verb: aspire to. Everyday: aim / hope. Close: ambition.',
    ['ambition']
  ),
  assault: L(
    'An assault is a violent physical attack, or a strong verbal attack: an assault on a person, an assault on a policy. Attack is the everyday cover-all; mugging is a street robbery. Assault can be a legal term in British English (a criminal offence). As a verb, to assault is physical and serious. In speech, attack is usually enough; keep assault for violence or a fierce public attack, not a mild criticism.',
    ['The paper launched an assault on the exam board’s marking.', 'He was charged with assault after the fight outside the club.'],
    'A violent attack, or a fierce verbal attack. Everyday: attack. Legal in UK. Verb: assault (physical, serious).',
    ['attack']
  ),
  assertion: L(
    'An assertion is a firm statement that something is true, often without proof yet: an assertion that the figures were wrong. Claim is the everyday cousin; statement is weaker and more neutral. Assert is the verb (assert that…). In academic writing, an assertion needs evidence. In speech, a claim or she said firmly is enough. Do not confuse it with insertion (putting something in).',
    ['His assertion was not supported by the survey data.', 'Make fewer assertions and more arguments with examples.'],
    'A firm claim. Verb: assert that. Everyday: claim. Academic: needs evidence. Not insertion.',
    ['claim']
  ),
  assistance: L(
    'Assistance is help or support, slightly more official than help: financial assistance, assistance with an application. Help is the everyday noun and verb; support can be emotional or practical. Assist is the verb (assist someone with). In speech, help is almost always better. The phrase can I be of assistance? is polite shop and hotel English, not a tutorial.',
    ['She needed assistance with the visa form, not with the essay idea.', 'Technical assistance arrived after the system froze.'],
    'Formal for help. assist someone with. Everyday: help. Close: support. Polite: can I be of assistance?',
    ['help']
  ),
  assistant: L(
    'An assistant is a person who helps someone in their job: a teaching assistant, a personal assistant (PA). Helper is everyday and less job-like; deputy is more official and can act in someone’s place. Assistant can also be an adjective (assistant manager). In speech, the person who helps or TA is enough in schools. Do not use it as a polite word for a machine (that is a tool or an app).',
    ['The teaching assistant ran the small-group reading while the teacher marked.', 'She started as an assistant and now manages the whole office.'],
    'A helper at work. Adjective: assistant manager. Everyday: helper. School: teaching assistant (TA). Stronger/official: deputy.',
    ['helper']
  ),
  asylum: L(
    'Asylum is protection given by a country to someone who has left their own country for safety: political asylum, apply for asylum. Refuge is a close cousin; shelter is everyday and physical. Asylum seeker is the person applying; refugee often means their claim has been recognised (usage varies in the news — be careful). In older English, asylum also meant a psychiatric hospital; that sense is dated and can sound offensive. In speech, protection as a refugee is clearer than a bare asylum.',
    ['They applied for asylum after the election violence.', 'The charity offers legal advice to people seeking asylum, not a tourist visa.'],
    'Protection for people fleeing danger. apply for asylum. Related: asylum seeker / refugee. Everyday: refuge / protection. Old “mental hospital” sense is dated.',
    ['refuge']
  ),
  athletic: L(
    'Athletic means physically strong and good at sports, or connected with athletics: an athletic build, an athletic scholarship. Sporty is the everyday British adjective; fit is about health and stamina, not necessarily skill. Athletics is the sport (track and field). In speech, sporty or fit is more natural. Do not use athletic for a chess champion unless you mean their body, not their brain.',
    ['Years of rowing gave her an athletic frame.', 'The school has an athletic programme as well as a music one.'],
    'Sporty / of athletics. Everyday: sporty / fit. Noun: athletics (track and field). Not a synonym for talented in general.',
    ['sporty']
  ),
  attachment: L(
    'Attachment has two common B2 senses: a file sent with an email, and a feeling of liking and connection: an attachment to a place. File is everyday for the first; bond is close for the second. Attach is the verb (attach a document; become attached to). In speech, the file or I am fond of is enough. Please see the attachment is standard email. Do not use attachment for a paper clip in careful writing (that is a fastener).',
    ['Please see the attachment for the revised timetable.', 'His attachment to the old building made the move harder than the maths.'],
    'Email file, or an emotional bond. Verb: attach. Everyday: file / fondness. Email: see the attachment.',
    ['bond']
  ),
  attraction: L(
    'An attraction is something that draws people to a place, or a feeling of liking: a tourist attraction, a mutual attraction. Draw is a close everyday noun for the first; appeal is close for both. Attract is the verb; attractive is the adjective. In speech, what brings people or I like them is enough. Do not use tourist attraction for a quiet local café unless it really pulls crowds.',
    ['The castle is the town’s main attraction in summer.', 'The attraction of evening classes is the quiet, not the coffee.'],
    'What draws people, or a feeling of liking. Verb: attract. Everyday: draw / appeal. Tourist attraction = a place people visit.',
    ['appeal']
  ),
  attractive: L(
    'Attractive means pleasant to look at, or interesting and worth considering: an attractive offer, an attractive idea. Good-looking is everyday for people; appealing is a close synonym for both looks and ideas. Attract is the verb. In speech, nice-looking or tempting is often enough. Use it for jobs, prices, and plans as well as faces — that second sense is very common at B2.',
    ['The hours made the job attractive, even though the pay was average.', 'The cover is attractive, but the argument inside is thin.'],
    'Good-looking, or worth considering (an attractive offer). Everyday: appealing / tempting. Verb: attract. Not only about faces.',
    ['appealing']
  ),
  auction: L(
    'An auction is a public sale in which goods go to the person who offers the most money: sold at auction, an online auction. Sale is everyday and broader; bidding is the activity. Auctioneer is the person in charge. At auction / up for auction are set phrases. In speech, a sale where people bid is enough. It is not a synonym for a charity jumble sale, where prices are usually fixed.',
    ['The painting went for far more at auction than the estimate.', 'School laptops were sold at auction after the upgrade.'],
    'sold at auction. A sale to the highest bidder. Everyday: a bidding sale. Person: auctioneer. Not a fixed-price jumble sale.',
    ['sale']
  ),
  audit: L(
    'An audit is an official examination of accounts or processes: a financial audit, an energy audit. Check is everyday and weaker; inspection is close for procedures. Audit can be a verb (audit the books). Auditor is the person. The word is official and slightly intimidating. In speech, an official check of the accounts is clearer. Do not use it for a quick glance at your own spending (that is a review).',
    ['The school had a financial audit at the end of the year.', 'They audited the marking process after three complaints.'],
    'An official check of accounts or processes. Verb: audit. Person: auditor. Everyday: official check. Stronger than a review.',
    ['inspection']
  ),
  authorise: L(
    'To authorise is to give official permission for something: authorise a refund, authorise access. Allow is everyday and weaker; permit is close; approve is a cousin (you can approve a plan and then authorise the spending). Authorisation is the British noun; authorised is the adjective. British spelling is authorise, not authorize, in this dictionary. In speech, give permission or sign off is more natural.',
    ['Only the head can authorise a trip that leaves before the bell.', 'The form is not valid until it is authorised in writing.'],
    'Give official permission. British: authorise / authorisation. Everyday: allow / sign off. Close: permit / approve.',
    ['permit']
  ),
  automatic: L(
    'Automatic means working by itself without a person controlling each step: automatic doors, an automatic payment. Automatic can also mean happening without thought (an automatic reply, an automatic assumption). Manual is the opposite for machines; deliberate is the opposite for thought. Automatically is the adverb. In speech, it does it by itself is enough. Do not use it as praise for a person (“she is automatic”) — that sounds odd.',
    ['The lights are automatic after dusk, so lock the side door yourself.', 'His automatic answer was yes, before he had read the cost.'],
    'Working by itself, or done without thinking. Opposite (machines): manual. Adverb: automatically. Everyday: by itself / without thinking.',
    ['mechanical']
  ),
  availability: L(
    'Availability is whether something is free to be used, obtained, or spoken to: ticket availability, her availability on Friday. Available is the adjective (available for a call). Supply is close for goods; free time is everyday for people. In speech, whether it is free or if they have any left is enough. Subject to availability is a booking phrase. Do not confuse it with ability (skill).',
    ['Check the availability of the lab before you promise a class there.', 'His availability this week is Tuesday morning only.'],
    'Whether it is free / obtainable. Adjective: available. Everyday: if it is free / if they have any. Contrast: ability = skill.',
    ['supply']
  ),
  await: L(
    'To await is a formal wait for, especially something that will happen: await the results, a surprise awaits you. Wait for is the everyday phrasal verb you should use in speech. Await takes a direct object (await the train, not “await for the train”). Awaited is the adjective (the long-awaited report). In notices and news it is standard; in conversation it sounds stiff.',
    ['We await the examiner’s report before we change the course.', 'Further details await students on the noticeboard.'],
    'Formal for wait for. await + noun (no for). Everyday: wait for. Adjective: long-awaited.',
    ['wait for']
  ),
  awkward: L(
    'Awkward means making you feel embarrassed, or difficult to deal with or use: an awkward silence, an awkward question, an awkward bag to carry. Embarrassing is close for the first; clumsy is close for movement; inconvenient is close for situations. Awkwardly is the adverb. In speech, a bit embarrassing or difficult is enough. Do not use it as a synonym for shy in every case — shy is a longer trait; awkward is the moment or the fit.',
    ['There was an awkward pause when both guests arrived at once.', 'The handle is awkward if you have small hands.'],
    'Embarrassing, clumsy, or hard to handle. Everyday: embarrassing / clumsy. Contrast: shy (a trait). Adverb: awkwardly.',
    ['embarrassing']
  ),
  ban: L(
    'To ban is to officially forbid something: ban phones in class, a smoking ban. Forbid is a close synonym; prohibit is more formal and legal. Ban is also a noun (a ban on + noun). Banned is the adjective. In speech, not allowed is everyday. You ban a thing or an activity, and you can ban someone from a place. Do not use ban for a teacher’s one-day “no talking” — that is a rule, not an official ban.',
    ['The school banned phones from classrooms, not from the playground.', 'A ban on overnight parking starts in June.'],
    'Officially forbid. Noun: a ban on. Everyday: not allowed. Close: forbid / prohibit. ban someone from + place.',
    ['forbid']
  ),
  capability: L(
    'Capability is the ability or power to do something: the capability to translate speech, military capability. Ability is the everyday cousin, often of people; capacity can mean the same but also “how much it can hold.” Capable of is the adjective pattern. In speech, what it can do or able to is enough. In tech and official English, capability is standard; do not stack it with ability (“capability ability”).',
    ['The software has the capability to subtitle live speech.', 'We do not yet have the capability to mark every script twice.'],
    'What it can do. Adjective: capable of. Everyday: ability / able to. Close: capacity (also “how much it holds”).',
    ['ability']
  ),
  capacity: L(
    'Capacity is how much something can hold or produce, or a person’s ability to do something: a hall with a capacity of two hundred, working at full capacity, her capacity for hard work. Size is everyday for space; ability is everyday for people. In a personal capacity means not as an official. In speech, how many it holds or what she can manage is enough. Contrast capability (what it can do) when both appear in a tech brief.',
    ['The hall was filled to capacity for the concert.', 'In his capacity as governor, he signed the letter; as a parent, he disagreed.'],
    'How much it can hold / produce, or a person’s ability. full capacity. in a personal/official capacity. Everyday: size / ability. Close: capability (what it can do).',
    ['volume']
  ),
  capture: L(
    'To capture is to catch a person or animal, or to record an image, sound, or feeling: capture a suspect, the photograph captures the mood. Catch is everyday for the first; record is close for the second. Capture can also be a noun (the capture of the town). In speech, catch or get on camera is enough. Captivating is an adjective meaning fascinating — related, but not the verb you need for a photo.',
    ['The recording captures the exact wording of the agreement.', 'Police captured the thief on the station cameras.'],
    'Catch, or record an image/feeling. Everyday: catch / record. Noun: capture. Related adjective: captivating (fascinating).',
    ['catch']
  ),
  carbon: L(
    'Carbon is a chemical element in all living things; in news and policy it often stands for carbon dioxide and climate: cut carbon emissions, a carbon footprint. CO₂ is more precise for the gas; pollution is broader. Carbon-neutral and low-carbon are set collocations. In speech, emissions or climate impact is often clearer than a bare carbon. Do not use carbon as a trendy synonym for dirt on your hands.',
    ['The college aims to cut its carbon emissions by travelling less.', 'A carbon footprint includes heating and flights, not only plastic bags.'],
    'An element; in public debate, often CO₂ / climate. carbon emissions / footprint. Everyday: emissions / climate impact. Broader: pollution.',
    ['CO₂']
  ),
  catalogue: L(
    'A catalogue is a complete list of items, often with descriptions: a library catalogue, a mail-order catalogue. List is everyday and can be rough; inventory is stock in a shop or warehouse. Catalogue is also a verb (catalogue the collection). British spelling is catalogue, not catalog, in this dictionary. In speech, the list of what they have is enough. Do not use it for a short shopping list of three items.',
    ['I found the title in the library catalogue, not on the open shelves.', 'She catalogued every photograph before the archive moved.'],
    'A full list of items. British: catalogue. Verb: catalogue. Everyday: list. Close: inventory (stock).',
    ['list']
  ),
  category: L(
    'A category is a group of people or things that share features: put the words into the correct category, age categories. Group is everyday and looser; class and type are close. Categorise is the British verb; categorical (absolute, no doubt) is a different adjective — do not mix them. In speech, type or group is enough. A category is a labelled box, not a random pile.',
    ['The prize has two categories: fiction and non-fiction.', 'Do not force every essay into the same category; some sit on the border.'],
    'A labelled group/type. Verb: categorise. Everyday: type / group. Contrast: categorical = absolute (different word).',
    ['type']
  ),
  cautious: L(
    'Cautious means careful to avoid problems or danger: a cautious driver, cautious about sharing data. Careful is the everyday cousin; careful can also mean thorough (a careful check), while cautious stresses risk. Caution is the noun; cautiously is the adverb. In speech, careful or wary is enough. Do not use cautious as a synonym for slow in every meeting — slow might be inefficiency, not sense.',
    ['Be cautious when you click links in unexpected emails.', 'The committee was cautious about promising a date it could not meet.'],
    'Careful to avoid risk. Noun: caution. Everyday: careful / wary. Contrast: careful can also mean thorough.',
    ['careful']
  ),
  celebration: L(
    'A celebration is a special event or activity to mark something good: a celebration at the end of term, a celebration of local writers. Party is everyday and more social; ceremony can be formal and solemn. Celebrate is the verb. In celebration of is a set phrase. In speech, a party or we marked it is enough. Do not use celebration for a grim commemoration of a disaster — that is a memorial.',
    ['There was a quiet celebration in the staffroom when the results arrived.', 'The festival is a celebration of the town’s music, not a trade fair.'],
    'An event to mark something good. Verb: celebrate. Everyday: party. Formal: ceremony. Contrast: memorial (solemn, often sad).',
    ['party']
  ),
  celebrity: L(
    'A celebrity is a famous person, especially in entertainment: a celebrity guest, celebrity culture. Famous person is the everyday paraphrase; star is close in film and music; public figure includes politicians and writers who may not be “celebrities.” Celebrity can also mean fame itself (a brief celebrity). In speech, a famous person or a star is enough. The word can sound slightly tabloid — use it when fame is the point, not when you mean an expert.',
    ['A celebrity opened the new wing and left before the questions.', 'The book is about celebrity, not about the craft of acting.'],
    'A famous person, especially in entertainment. Everyday: famous person / star. Broader: public figure. Also: fame itself.',
    ['star']
  ),
}
