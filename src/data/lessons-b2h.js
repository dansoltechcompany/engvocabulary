const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_B2H = {
  negotiate: L(
    'To negotiate is to discuss in order to reach an agreement: negotiate a deal, negotiate with management, negotiate a ceasefire. Bargain is more about price in a market; discuss is wider and need not aim at a contract. Negotiation is the noun. In speech, talk it through / come to an agreement is enough. Do not use negotiate for a private chat with no deal at stake, and do not confuse it with navigate (find your way).',
    ['The union is negotiating a shorter week, not only a one-off bonus.', 'Hostages were released after officials negotiated with the captors, which is the crisis sense.'],
    'negotiate a deal / with someone. Noun: negotiation(s). Everyday: come to an agreement. Mix-up: navigate. There must be a deal at stake.',
    []
  ),
  notorious: L(
    'Notorious means famous for something bad: notorious for delays, a notorious fraudster. Famous is neutral or positive; infamous is a close twin, slightly more literary. Notoriety is the noun. In speech, well known for the wrong reasons is enough. Do not call a popular café notorious unless you mean a bad reputation, and do not use it as a compliment.',
    ['The roundabout is notorious for accidents in the rain.', 'He became notorious after the expenses story, not after a charity campaign.'],
    'notorious for + a bad thing. Neutral fame: famous. Close: infamous. Noun: notoriety. Not a compliment.',
    ['infamous']
  ),
  narrative: L(
    'A narrative is a connected account of events, or the way a story is framed: a first-person narrative, the official narrative, a competing narrative. Story is everyday; account is more factual; discourse is more academic. Narrative can be an adjective (narrative structure). In news analysis, control the narrative means shape how the public understands events. Do not call a shopping list a narrative, and do not use it as a long word for “lie” unless you mean a framed account.',
    ['The official narrative blamed weather; local reporting blamed maintenance.', 'Her dissertation compared narrative technique in two wartime diaries.'],
    'a narrative of events; the official / competing narrative. Everyday: story. Academic: narrative structure. Not a shopping list or a casual synonym for lie.',
    ['account']
  ),
  nationwide: L(
    'Nationwide means in every part of a country: a nationwide survey, nationwide coverage, a nationwide strike. National is close; countrywide is a twin; global is bigger. It can be an adverb (broadcast nationwide). In speech, across the country is enough. Do not use nationwide for one region, and do not confuse it with nationwide as a brand name in UK financial advertising.',
    ['A nationwide poll put the two parties level.', 'Trains were cancelled nationwide, not only on the Brighton line.'],
    'a nationwide + noun; also an adverb. Everyday: across the country. Close: national. Not one region. Bigger: global.',
    ['countrywide']
  ),
  necessity: L(
    'Necessity is need, or something you must have: of necessity, a necessity, there is no necessity to. Need is everyday; essential is a close adjective; luxury is the opposite idea. Necessities (plural) are basic things (food, shelter). In speech, you have to / you need to is enough. Do not write “a necessity of doing” — say the necessity of + -ing / no necessity to + verb — and do not confuse it with necessarily (adverb).',
    ['Warm housing is a necessity in this climate, not a lifestyle extra.', 'There is no necessity to repeat the blood test if the first result is clear.'],
    'a necessity; the necessity of + -ing; no necessity to + verb. Everyday: need. Opposite idea: luxury. Adverb cousin: necessarily.',
    ['need']
  ),
  negotiation: L(
    'Negotiation is formal discussion aimed at a deal: pay negotiations, enter into negotiation, a negotiation process. Talks is the news twin; discussion is wider. Negotiate is the verb. Often plural when they are a series (the negotiations). In speech, talks is enough. Do not use negotiation for a row with no offer on the table, and do not confuse it with negation (saying no / grammar).',
    ['Negotiations resumed after the weekend, then stalled on pensions.', 'A last-minute negotiation saved the contract, which is the singular process sense.'],
    'pay / peace negotiations (often plural). Verb: negotiate. News twin: talks. Mix-up: negation. Not a row with no deal.',
    ['talks']
  ),
  network: L(
    'A network is a system of connected people or things: a rail network, a professional network, network with clients (verb). Contacts is everyday for people; system is wider. Networking is the activity of meeting useful people. In speech, who you know / the system of lines is enough. Do not call one friend a network, and in IT do not mix network with internet (the internet is one kind of network).',
    ['She found the post through her professional network, not through a board advert.', 'Leaves on the line closed half the network, which is the rail sense.'],
    'a professional / rail / computer network. Verb: network. Activity: networking. Everyday people: contacts. One friend ≠ a network.',
    []
  ),
  neutral: L(
    'Neutral means not taking sides: remain neutral, a neutral chair, a neutral country. Impartial is close for referees and journalists; unbiased is a cousin. Neutral can also mean not strongly coloured (neutral tones) or a gear (in neutral). In speech, not taking sides is enough. Do not claim a newspaper is neutral if it clearly campaigns, and do not confuse it with natural.',
    ['The mediator stayed neutral while the two sides traded figures.', 'Paint the office in neutral colours, which is the design sense, not politics.'],
    'remain / stay neutral. Close: impartial / unbiased. Also: colours; car gear. Mix-up: natural. Tone: official and academic.',
    ['impartial']
  ),
  nominate: L(
    'To nominate is to officially put a name forward: nominate someone for an award, nominate a candidate. Suggest is everyday and weaker; appoint is the later step of giving the job. Nomination is the noun. In speech, put her name forward is enough. Do not nominate someone for a job you can simply offer, and do not confuse it with nominal (in name only / a very small amount).',
    ['Colleagues nominated him for the safety award after the drill.', 'Each party nominated a candidate before the ballot papers were printed.'],
    'nominate someone for + prize/post. Later step: appoint. Noun: nomination. Everyday: put someone’s name forward. Mix-up: nominal.',
    []
  ),
  norm: L(
    'A norm is the usual accepted standard: the norm, social norms, above the norm. Normal is the adjective; average is more statistical; custom is a traditional practice. In academic and news English, norms can be unwritten rules. In speech, what people usually do is enough. Do not use a norm for a written law (that is a law or a regulation), and do not confuse it with name.',
    ['Two days in the office is now the norm, not a special favour.', 'The paper examined gender norms in job adverts, which is the social-science sense.'],
    'the norm; social norms. Adjective: normal. Statistic: average. Written rule: law / regulation. Academic tone.',
    ['standard']
  ),
  notable: L(
    'Notable means worth noticing: a notable exception, a notable increase, notable for. Noticeable is more about being easy to see; famous is about being well known as a person. Notably is the adverb (already a cousin pattern). In speech, worth noting / striking is enough. Do not call a tiny change notable unless it really matters, and do not confuse it with noble (high-born or morally fine).',
    ['There was a notable drop in complaints after the redesign.', 'The scheme was notable for its cost, not for its results.'],
    'notable for; a notable + noun. Close: noticeable (easy to see). Person’s fame: famous. Mix-up: noble. Adverb: notably.',
    ['significant']
  ),
  numerous: L(
    'Numerous means very many, in a slightly formal register: numerous studies, numerous complaints. Many is everyday; countless is stronger and looser. Number is the related noun. In speech, lots of / many is enough. Do not use numerous for three items — keep it for a large number — and do not confuse it with numerical (to do with numbers).',
    ['The consultation drew numerous objections from the same postcode.', 'Numerous trials have failed to copy the first result, which is why the claim is weak.'],
    'numerous + plural noun. Everyday: many. Stronger/looser: countless. Not for two or three. Mix-up: numerical. Formal tone.',
    ['many']
  ),
  obligation: L(
    'An obligation is a duty you must fulfil: a legal obligation, under an obligation to, a moral obligation. Duty is a close twin; requirement is often a rule on paper; choice is the opposite idea. Oblige and obligatory are related. In speech, you have to is enough. Do not use obligation for a vague hope, and do not confuse it with obligation’s cousin oblation (a rare religious word). Pattern: obligation to + verb.',
    ['Employers have an obligation to consult before mass redundancies.', 'She felt a moral obligation to report the error, not only a legal one.'],
    'a legal / moral obligation; obligation to + verb; under an obligation. Everyday: you have to. Close: duty. Opposite idea: choice.',
    ['duty']
  ),
  occurrence: L(
    'An occurrence is something that happens, often unwelcome or noteworthy: a rare occurrence, a common occurrence, the occurrence of errors. Event is everyday; incident often implies trouble; frequency is how often. Occur is the verb (already in the dictionary). In speech, something that happens is enough. Do not use occurrence for a planned festival (that is an event), and mind the spelling (double c, double r).',
    ['Serious collisions are still a rare occurrence on this stretch.', 'The study tracked the occurrence of late submissions by faculty, not by rumour.'],
    'a rare / common occurrence; the occurrence of. Verb: occur. Everyday: event. Trouble twin: incident. Spelling: occurrence.',
    ['event']
  ),
  optimistic: L(
    'Optimistic means expecting a good outcome: cautiously optimistic, optimistic about, an optimistic forecast. Hopeful is everyday; sanguine is rarer and more literary; pessimistic is the opposite. Optimism is the noun. In speech, hopeful is enough. Do not call a guaranteed result optimistic — optimism is about belief, not proof — and do not confuse it with optional.',
    ['Analysts are cautiously optimistic, which still means the risk is real.', 'An optimistic timetable left no slack for the inquiry’s extra witnesses.'],
    'optimistic about; cautiously optimistic. Noun: optimism. Everyday: hopeful. Opposite: pessimistic. Belief, not proof. Mix-up: optional.',
    ['hopeful']
  ),
  obligatory: L(
    'Obligatory means required by a rule: obligatory training, it is obligatory to. Compulsory is a close twin (already in the dictionary); optional is the opposite; mandatory is a legal cousin. Obligation is the noun. In speech, you have to / it is required is enough. Do not use obligatory for a strong social habit unless you mean it has real force (the obligatory photo at a wedding is slightly ironic).',
    ['A hard hat is obligatory beyond this point, not “recommended”.', 'The course includes an obligatory placement, which you cannot swap for an essay.'],
    'obligatory + noun; it is obligatory to + verb. Close: compulsory / mandatory. Opposite: optional. Ironic social sense exists — keep it light.',
    ['compulsory']
  ),
  observation: L(
    'Observation is careful watching, or a remarked notice: under observation, observation of behaviour, a sharp observation. Watch is everyday; surveillance is heavier and often secret; comment is the remark sense. Observe is the verb (already in the dictionary). In academic methods, observation is a data type. Do not call a guess an observation, and do not confuse it with reservation (a booking / a doubt).',
    ['The child was kept under observation overnight, not sent straight home.', 'Her observation that the control group was older changed the discussion, which is the remark sense.'],
    'under observation; observation of. Verb: observe. Everyday: watch. Secret/heavy: surveillance. Remark: a comment. Methods word in research.',
    []
  ),
  observer: L(
    'An observer watches, often officially, without taking part: an election observer, a political observer, independent observers. Spectator watches sport for pleasure; witness saw an incident; reporter gathers news. Observe is the verb. In speech, someone watching officially is enough. Do not call a fan in the stand an observer in a news story unless they are there in an official role.',
    ['EU observers described the count as orderly but slow.', 'A climate observer on the panel was not the same as the minister answering questions.'],
    'election / independent observer. Sport for pleasure: spectator. Crime/accident: witness. Official watching, not a casual fan.',
    []
  ),
  obstacle: L(
    'An obstacle is something that blocks progress: an obstacle to growth, remove an obstacle, legal obstacles. Problem is everyday and wider; barrier is a close twin; hurdle is a metaphor from sport. In speech, something in the way is enough. Do not use obstacle for a mild inconvenience (a long queue), and do not confuse it with obsolete (out of date).',
    ['Childcare costs remain an obstacle to full-time work.', 'The inquiry found no legal obstacle to publishing the names, which surprised campaigners.'],
    'an obstacle to + noun. Everyday: something in the way. Close: barrier. Sport metaphor: hurdle. Mix-up: obsolete. Not a mild queue.',
    ['barrier']
  ),
  occupation: L(
    'Occupation is a job or profession on forms: state your occupation. It is also military control of a place (the occupation of the city) or living in a building (occupation of the flat). Job is everyday; career is longer-term. Occupy is the verb. In speech, job is enough for the work sense. Keep the job sense and the military sense apart, and do not use occupation for a hobby (that is a pastime).',
    ['Write “unemployed” if you have no occupation at the moment, not a blank.', 'The occupation of the square lasted ten days, which is the protest/military-control sense.'],
    'state your occupation (forms). Everyday: job. Verb: occupy. Also: control of a place / living in a building. Not a hobby.',
    ['job']
  ),
  occupy: L(
    'To occupy is to fill a space, time, or post, or to take control of a place: occupy a seat, occupy the role of chair, occupy a country. Fill and take up are everyday; seize is stronger for force. Occupation is the noun. In speech, take up / sit in is enough for space. Do not use occupy for a two-minute errand, and do not confuse it with occur.',
    ['Marking occupied the weekend, which is the time sense.', 'Protesters occupied the foyer until security arrived, which is the control-of-space sense.'],
    'occupy a place / a post / time. Everyday: fill / take up. Noun: occupation. Mix-up: occur. Forceful cousin: seize.',
    []
  ),
  offence: L(
    'Offence (UK) is a crime: a criminal offence, commit an offence, a driving offence. Crime is everyday; offense is the US spelling. Take offence is the insulted-feeling sense. Offend is the verb. In speech, a crime / being insulted covers the two senses. Do not mix the spelling with US offense in a UK exam, and do not use offence for a civil contract dispute (that may not be a crime).',
    ['Speeding is a motoring offence, even without a crash.', 'She took offence at the joke, which is the feeling, not a police matter.'],
    'UK: offence (US offense). a criminal offence; take offence. Verb: offend. Everyday: a crime. Keep crime and insulted-feeling apart.',
    ['crime']
  ),
  omit: L(
    'To omit is to leave out: omit a name, omit to mention (slightly formal). Leave out is everyday; skip is informal; exclude can mean keep out on purpose as a policy. Omission is the noun. In speech, leave out is enough. Do not omit a required field on a form, and do not confuse omit with emit (send out gas or light).',
    ['The minutes omitted the vote count, which caused a complaint.', 'Candidates who omit their student number lose time at marking.'],
    'omit + noun; omit to mention. Everyday: leave out. Noun: omission. Mix-up: emit (send out). Informal: skip.',
    ['leave out']
  ),
  ongoing: L(
    'Ongoing means still in progress: an ongoing investigation, ongoing talks, ongoing support. Continuing is a close twin; finished is the opposite. In news, ongoing is a stock adjective. In speech, still going on is enough. Do not use ongoing for a one-off meeting that has ended, and some editors dislike it as padding — pair it with a real noun (investigation, dispute), not “ongoing situation” if you can name the situation.',
    ['Police said the investigation was ongoing and named no suspects.', 'Ongoing maintenance will close one lane until March.'],
    'an ongoing + process noun. Everyday: still going on. Close: continuing. Avoid empty “ongoing situation” if you can be specific.',
    ['continuing']
  ),
  opponent: L(
    'An opponent is someone you compete or argue against: a political opponent, her opponent in the final, opponents of the bill. Rival is close in sport and business; enemy is stronger and more personal or military. Oppose is the verb. In speech, the other side is enough. Do not call a teammate an opponent, and do not use opponent for a problem (that is an obstacle).',
    ['Opponents of the runway published a rival set of noise figures.', 'She thanked her opponent after the debate, which is civil, not friendship.'],
    'an opponent of + plan; a political / sporting opponent. Close: rival. Stronger: enemy. Verb: oppose. Not a teammate or a thing in the way.',
    ['rival']
  ),
  oppose: L(
    'To oppose is to be against a plan and try to stop it: oppose a bill, be opposed to, strongly oppose. Disagree is weaker (you may not campaign); fight is more informal or military. Opposition is the noun. In speech, be against is enough. Pattern: oppose + noun, or be opposed to. Do not write oppose against, and do not confuse oppose with suppose.',
    ['Most residents oppose the night flights, and they have organised a petition.', 'The party is opposed to lifting the cap, which is the adjective pattern.'],
    'oppose + noun; be opposed to. Everyday: be against. Weaker: disagree. Noun: opposition. Not “oppose against”. Mix-up: suppose.',
    []
  ),
  opposition: L(
    'Opposition is strong disagreement: face opposition, in opposition to. In UK politics the Opposition (often capitalised) is the main party not in government. Opponent is a person; opposition can be a group or the abstract noun. In speech, people against it / the other party is enough. Do not use opposition for a sports opponent in careful writing (say opponent), and do not confuse it with apposition (grammar).',
    ['The bill ran into opposition in the Lords, not only in the press.', 'After the election they sat in opposition for five years, which is the parliamentary sense.'],
    'opposition to; face opposition. UK politics: the Opposition. Person: opponent. Sport: opponent, not opposition, in careful prose.',
    []
  ),
  outbreak: L(
    'An outbreak is a sudden start of something unwelcome: an outbreak of flu, an outbreak of violence, an outbreak of fire. Epidemic is larger and usually disease; incident is a single event; wave can be a later surge. Break out is the verb (war broke out). In speech, a sudden wave / it started suddenly is enough. Do not use outbreak for a planned festival, and do not confuse it with breakout (an escape).',
    ['An outbreak of norovirus closed the ward and the visitors’ café.', 'The report blamed an outbreak of looting on the blackout, which is the violence sense.'],
    'an outbreak of + disease/violence. Verb: break out. Larger disease: epidemic. Mix-up: breakout (escape). Not a planned event.',
    []
  ),
  outlook: L(
    'Outlook is the likely future, or a person’s attitude: the economic outlook, a positive outlook, outlook for jobs. Forecast is close for weather and numbers; attitude is the personal sense; view is everyday. In speech, how things look / her attitude is enough. Do not mix the two senses in one sentence without a cue, and do not confuse outlook with lookout (a person watching / a viewpoint on a hill).',
    ['The Bank’s outlook for inflation was revised up, not down.', 'Despite the diagnosis he kept a stubbornly hopeful outlook, which is the attitude sense.'],
    'the outlook for + topic; economic outlook. Close: forecast. Attitude sense: a positive outlook. Mix-up: lookout. Keep future vs attitude clear.',
    ['forecast']
  ),
  output: L(
    'Output is how much is produced: factory output, agricultural output, research output. Production is a close twin; input is what goes in; yield is often crops or returns. In speech, how much they produce is enough. Uncountable in many economic uses. Do not use output for a single handmade gift unless you are joking, and in computing output is what a program produces.',
    ['Industrial output shrank in the quarter after the strikes.', 'The unit’s research output is measured in papers, not in teaching hours.'],
    'factory / economic output (often uncountable). Close: production. Opposite direction: input. Computing: a program’s output. Crops: yield.',
    ['production']
  ),
  outstanding: L(
    'Outstanding means excellent, or not yet paid or done: outstanding work, an outstanding balance, outstanding warrants. Excellent is everyday for the first sense; unpaid / unfinished for the second. In speech, brilliant / still owing is enough. Do not let the two senses collide (an outstanding bill is rarely a compliment), and do not confuse it with standing out merely as “visible”.',
    ['She won a prize for outstanding teaching.', 'There is still an outstanding invoice from March, which is the unpaid sense, not praise.'],
    'excellent OR not yet paid/done. Everyday: brilliant / unpaid. Keep the two senses apart — context must make the meaning obvious.',
    ['excellent']
  ),
  overseas: L(
    'Overseas means across the sea: work overseas, overseas students, an overseas market. Abroad is everyday and includes other countries not over a sea; foreign is the adjective for things from another country. It is both adverb and adjective. In speech, abroad is enough. Do not use overseas for a trip from London to Manchester, and in UK higher education overseas fees is a set phrase.',
    ['The company shifted assembly overseas to cut costs.', 'Overseas students faced a longer visa wait than last year.'],
    'work / study overseas; overseas + noun. Everyday: abroad. Not domestic travel. UK HE: overseas fees. Adjective and adverb.',
    ['abroad']
  ),
  oversee: L(
    'To oversee is to supervise a process: oversee a project, oversee the count. Supervise is a close twin; manage can include hiring and budgets as well as watching. Oversight is the noun — but oversight also means a mistake (a regrettable double meaning). In speech, be in charge of / keep an eye on is enough. Do not confuse oversee with overlook (fail to notice / have a view over), a high-frequency exam trap.',
    ['A QC will oversee the inquiry so that parties cannot claim bias.', 'She oversees marking, but she does not write every script, which is supervision, not doing all the work.'],
    'oversee a process/project. Close: supervise. Noun: oversight (also = a mistake). Mix-up: overlook = fail to notice / look over a view.',
    ['supervise']
  ),
  overlap: L(
    'To overlap is to cover the same time, topic, or space in part: shifts overlap, our duties overlap, overlap with. Overlap is also a noun (an overlap between). Coincide is closer to happening at the same time by chance; clash can mean a problematic overlap of dates. In speech, they cover some of the same ground is enough. Stress: verb often /ˌəʊvəˈlæp/; noun /ˈəʊvəlæp/. Do not use overlap for a total duplicate (that is duplication).',
    ['The two modules overlap by a week of content, so skip the repeated reading.', 'Night and morning shifts overlap by thirty minutes for handover.'],
    'overlap with; an overlap between. Dates: clash if it is a problem. Chance timing: coincide. Total copy: duplication. Verb vs noun stress.',
    []
  ),
  parliament: L(
    'Parliament is the law-making assembly: sit in parliament, pass through parliament, the UK Parliament (Commons and Lords). Government runs the country day to day; parliament makes and scrutinises law. An MP sits in parliament. Parliamentary is the adjective. In speech, MPs / the Commons often stands in. Do not call a town council parliament, and do not confuse it with a building tour (the Palace of Westminster houses Parliament).',
    ['The bill returns to parliament after the Lords’ amendments.', 'Hung parliaments make coalitions more likely, which is the composition sense.'],
    'in parliament; pass a bill through parliament. Day-to-day executive: government. Person: MP. Adjective: parliamentary. Not a local council.',
    []
  ),
  prejudice: L(
    'Prejudice is an unfair opinion formed without enough knowledge: racial prejudice, prejudice against, without prejudice (a legal phrase meaning a offer cannot be used later as admission). Bias is a close twin, often about leaning; discrimination is action based on prejudice. Prejudiced is the adjective. In speech, unfair views is enough. It is a serious word — do not use it for a mild preference for tea, and without prejudice in law is a set phrase, not a moral claim.',
    ['The campaign challenged prejudice against people with a stammer.', 'Talks were held without prejudice, which is the legal sense, not “we have no bias”.'],
    'prejudice against; racial / religious prejudice. Close: bias. Action: discrimination. Legal: without prejudice. Serious tone; not a tea preference.',
    ['bias']
  ),
  prominent: L(
    'Prominent means important and well known, or physically sticking out: a prominent critic, a prominent role, a prominent nose. Famous is everyday for people; major is close for roles; noticeable is the physical sense. Prominence is the noun. In speech, well known / important is enough. Do not call every local councillor prominent on the national stage, and do not confuse it with promising (showing future potential).',
    ['A prominent economist called the forecast reckless.', 'The scar is on a prominent part of the face, which is the physical sense.'],
    'a prominent + person/role. Everyday: well known. Physical: sticking out / noticeable. Noun: prominence. Mix-up: promising.',
    ['well known']
  ),
  panel: L(
    'A panel is a small chosen group: an expert panel, a panel of judges, a discussion panel. Committee is often standing and official; jury is for court (or a competition). Panel can also mean a flat board (a solar panel). In speech, a group of experts is enough. Do not call a whole workforce a panel, and keep the experts sense and the board sense apart.',
    ['An independent panel reviewed the hospital’s mortality data.', 'Solar panels on the roof, which is the board sense, not a committee.'],
    'an expert / interview panel; a panel of judges. Standing body: committee. Court: jury. Also a flat board. Not the whole staff.',
    []
  ),
  participant: L(
    'A participant takes part: trial participants, participants in the study, a willing participant. Member is belonging to a group over time; attendee is present at an event; subject is older research language, now often avoided. Participate is the verb (already in the dictionary). In speech, people taking part is enough. Do not call a silent observer a participant, and in ethics forms consent of participants is a set phrase.',
    ['All participants signed a consent form before the first interview.', 'Viewers were not participants in the debate; they only watched.'],
    'a participant in. Verb: participate. Event presence: attendee. Lasting belonging: member. Research: prefer participant to subject.',
    []
  ),
  participation: L(
    'Participation is the act of taking part: participation in, public participation, labour-force participation. Involvement is close; attendance is being there, not always taking part. Participate is the verb. Uncountable in most academic uses. In speech, taking part is enough. Do not write “a participation” for one person showing up, and do not confuse it with partition (a dividing wall).',
    ['Voter participation rose among first-time voters.', 'The review criticised the lack of public participation in the planning stage.'],
    'participation in (uncountable). Verb: participate. Close: involvement. Being there: attendance. Mix-up: partition. Not “a participation”.',
    ['involvement']
  ),
  partnership: L(
    'A partnership is two sides working together: a partnership between, in partnership with, a business partnership (a legal firm structure). Collaboration is a close twin; alliance is often political or military. Partner is the person/organisation. In speech, working together is enough. Do not call a one-off purchase a partnership, and in UK law a partnership is a specific way of owning a firm (contrast limited company).',
    ['The university runs the clinic in partnership with the NHS trust.', 'They dissolved the partnership after the audit, which is the legal-firm sense.'],
    'in partnership with; a partnership between. Close: collaboration. Political/military: alliance. Legal UK: a type of firm. Not a one-off sale.',
    ['collaboration']
  ),
  perception: L(
    'Perception is how something is noticed or understood: public perception, perception of risk, a widespread perception that. View and impression are everyday; opinion is what someone states. Perceive is the verb (already in the dictionary). In academic and news English, perception may not match the facts. In speech, how people see it is enough. Do not treat perception as proof, and do not confuse it with reception (welcome / a desk / radio signal).',
    ['There is a perception that the waiting list is random; the data show a rule.', 'Depth perception is a medical/psychological sense, not a poll finding.'],
    'perception of; public perception. Verb: perceive. Everyday: impression / how people see it. Not proof. Mix-up: reception.',
    ['impression']
  ),
  permanent: L(
    'Permanent means lasting, not temporary: a permanent contract, permanent damage, a permanent post. Lasting is everyday; temporary and fixed-term are opposites in work. Permanently is the adverb. In speech, for good / lasting is enough. Do not call a two-year visa permanent, and in employment UK English permanent vs temporary is a core contrast (also: permanent secretary is a civil-service title).',
    ['She was made permanent after probation, which is the contract sense.', 'The flood left permanent staining on the archive boxes, which is the damage sense.'],
    'a permanent contract / post / change. Opposite: temporary / fixed-term. Everyday: lasting / for good. Not a two-year visa.',
    ['lasting']
  ),
  permit: L(
    'A permit is an official written allowance: a work permit, a parking permit, without a permit. Permission is the abstract noun (already in the dictionary); licence is a close UK twin for driving and TV. Permit is also a verb /pəˈmɪt/ (the rules permit it). Noun stress: /ˈpɜːmɪt/. In speech, official paper / you’re allowed is enough. Do not mix the verb and noun stress, and do not call a friendly nod a permit.',
    ['Street filming needs a permit from the station operator.', 'The regulations do not permit overnight parking, which is the verb.'],
    'a work / parking permit (noun /ˈpɜːmɪt/). Verb: permit /pəˈmɪt/. Abstract: permission. UK cousin: licence. Not a casual yes.',
    ['licence']
  ),
  personnel: L(
    'Personnel means the people who work for an organisation: military personnel, personnel files, personnel department (older name for HR). Staff is everyday; employees is a close twin; personnel is uncountable. In speech, staff is enough. Do not write “a personnel” for one worker, and do not confuse it with personal (private) — a high-frequency spelling trap.',
    ['Medical personnel were flown in after the quake.', 'Personnel records are locked; that is not the same as a personal diary.'],
    'Uncountable: personnel = staff. Everyday: staff. Older office name: personnel department (now often HR). Mix-up: personal. Not “a personnel”.',
    ['staff']
  ),
  petition: L(
    'A petition is a signed request to an authority: start a petition, sign a petition, a petition against. Protest can be a march; appeal is often legal; campaign is wider. Petition is also a verb. In speech, a signed list asking for change is enough. Do not call a single email a petition, and in law a petition can start certain court processes (a bankruptcy petition).',
    ['Ten thousand people signed a petition to keep the night A&E open.', 'Creditors filed a petition in court, which is the legal sense, not a Change.org page.'],
    'sign / start a petition; a petition against. Wider: campaign. Street action: protest. Also a legal filing. Not one email.',
    []
  ),
  phase: L(
    'A phase is a stage in a process: the first phase, phase two, a phase of growth. Stage is everyday; step can be smaller; period is time without the “designed stage” sense. Phase out / phase in are phrasal verbs for gradual change. In speech, stage is enough. Do not call a two-minute pause a phase, and do not confuse it with faze (unsettle someone) — same sound for some speakers, different word.',
    ['The trial is still in the recruitment phase.', 'Diesel vans will be phased out by 2030, which is the phrasal verb.'],
    'in the + adjective + phase; phase one / two. Everyday: stage. Phrasal: phase in / out. Mix-up: faze (unsettle). Not a tiny pause.',
    ['stage']
  ),
  policy: L(
    'A policy is an official plan: government policy, a school policy, foreign policy. It is also an insurance contract (an insurance policy). Rule can be one instruction; strategy is a broader method of winning. In speech, the official plan / the insurance papers covers the two senses. Do not mix them in one sentence without a cue, and do not use policy for a personal habit (that is a habit or a practice).',
    ['The college updated its late-work policy before the mocks.', 'Keep the policy number when you claim, which is the insurance sense.'],
    'a + organisation + policy; government policy. One instruction: rule. Insurance: an insurance policy. Not a personal habit. Keep senses apart.',
    []
  ),
  politician: L(
    'A politician’s job is politics, usually elected: a local politician, career politicians. MP is a specific UK post; minister is a government job; statesman is older and often complimentary. Politics is the field (already in the dictionary). In speech, an MP / a councillor is often more precise. The word can sound mildly critical (sleazy politicians) — in a careful essay, name the office.',
    ['The politician refused interviews until the vote.', 'Not every politician is an MP: some sit on councils and never go to Westminster.'],
    'a local / national politician. More precise: MP / councillor / minister. Field: politics. Can sound critical — name the office in formal prose.',
    []
  ),
  poll: L(
    'A poll is an opinion survey, or the vote itself: an opinion poll, a poll of 2,000 adults, go to the polls. Survey is a close twin; election is the real vote; ballot is the paper or the act of voting. Poll is also a verb (a party polled 35%). In speech, survey / the vote is enough. Do not treat a poll as an election result, and do not confuse it with pole (a stick / North Pole) or pool.',
    ['A poll put the two parties within the margin of error.', 'Voters go to the polls on Thursday, which is the election-day sense.'],
    'an opinion poll; go to the polls. Close: survey. Real contest: election. Mix-up: pole / pool. A poll is not a result until people vote.',
    ['survey']
  ),
  postpone: L(
    'To postpone is to put something to a later time: postpone a meeting, postpone until Friday, be postponed. Delay can be unplanned; cancel means it will not happen; adjourn is for meetings and courts. Postponement is the noun. In speech, put off is enough. Do not use postpone for cancelling, and do not confuse it with prepone (an Indian English coinage meaning bring forward — not standard UK exam English).',
    ['The inquiry was postponed pending the forensic report.', 'They postponed the fixture, they did not cancel it: a new date is coming.'],
    'postpone + event; postpone until. Everyday: put off. Unplanned wait: delay. Will not happen: cancel. Court/meeting: adjourn. Noun: postponement.',
    ['put off']
  ),
  poverty: L(
    'Poverty is the state of being very poor: in poverty, child poverty, poverty line. Poor is the adjective; hardship is wider suffering; deprivation is a social-science cousin. Uncountable. In speech, being very poor is enough. Do not write “a poverty”, and in UK news relative poverty vs absolute poverty is a technical debate — only use the labels if you can define them.',
    ['Child poverty rose in several English regions last year.', 'Fuel poverty means being unable to keep the home warm, which is a related official phrase.'],
    'in poverty; child poverty (uncountable). Adjective: poor. Wider: hardship. Not “a poverty”. Technical: relative / absolute / fuel poverty.',
    []
  ),
  practitioner: L(
    'A practitioner works in a profession, especially medicine or law: a general practitioner (GP), a nurse practitioner, a legal practitioner. Doctor is everyday for many medical roles; professional is wider. Practice is the workplace or the verb (UK practise for the verb). In speech, GP / a working professional is enough. Do not call a first-year student a practitioner, and do not confuse practitioner with preacher.',
    ['See a qualified practitioner before you change the dose.', 'Nurse practitioners ran the clinic, which is not the same as a student placement.'],
    'a general practitioner (GP); a legal practitioner. Everyday medical: doctor / GP. Workplace: practice. Not a student. Mix-up: preacher.',
    []
  ),
  precaution: L(
    'A precaution is a step to prevent harm: take precautions, as a precaution, safety precautions. Care is everyday; prevention is the wider goal; insurance is financial protection. Precautionary is the adjective (a precautionary recall). In speech, just in case is enough. Do not call a treatment after harm a precaution — that is a response — and take precautions against + noun is a common pattern.',
    ['As a precaution the flight waited while engineers checked a warning light.', 'Walkers are advised to take precautions against ticks in long grass.'],
    'take precautions; as a precaution; precautions against. Everyday: just in case. After harm: a response, not a precaution. Adjective: precautionary.',
    []
  ),
  prediction: L(
    'A prediction is a statement about the future: a prediction of growth, make a prediction, contrary to predictions. Forecast is close for weather and economics; guess is weaker and less methodical. Predict is the verb (already in the dictionary). In speech, what they think will happen is enough. Do not present a prediction as a fact, and in science a prediction should be testable, not a vague hope.',
    ['The bank’s prediction of a fall in inflation missed the winter spike.', 'The model’s predictions matched the new data, which is why the paper was taken seriously.'],
    'make a prediction; a prediction of. Verb: predict. Close: forecast. Weaker: guess. Not a fact until it happens. Science: should be testable.',
    ['forecast']
  ),
  privilege: L(
    'A privilege is a special right or advantage: a privilege of office, privileged access, privilege (legal: the right to withhold evidence). Honour can be ceremonial; right is something everyone may claim. Privileged is the adjective (a privileged background). In speech, a special advantage is enough. It can sound political in essays — define it — and do not use it for a basic legal right (that is a right), or confuse it with private.',
    ['Access to the archive is a privilege for visiting fellows, not an open right.', 'Parliamentary privilege protects some speeches, which is the legal sense.'],
    'a privilege of; privileged access. Contrast: a right (for everyone). Adjective: privileged. Legal sense exists. Not private. Serious/academic tone.',
    ['advantage']
  ),
  principle: L(
    'A principle is a basic moral rule or a general idea: a matter of principle, in principle, the principle of equality. Principal is a different word (main / a school head) — the classic B2 spelling trap. Rule can be specific; value is more personal. In principle means “as an idea, yes” (often with a but). In speech, basic rule / in theory is enough. Do not write “the principle reason” (that is principal).',
    ['The policy is fine in principle, but the budget is not.', 'She refused the gift on principle, which is the moral sense.'],
    'in principle; a matter of principle; the principle of. Mix-up: principal = main / school head. Everyday: basic rule / in theory.',
    ['rule']
  ),
  procedure: L(
    'A procedure is the official or usual way of doing something: follow the procedure, a complaints procedure, a medical procedure (an operation). Process is wider and can be natural; method is how you choose to do a task; rule is one instruction. In speech, the official way / an operation covers the two common senses. Do not skip the article when you mean one operation (a procedure), and do not confuse it with proceed (the verb to continue).',
    ['Follow the evacuation procedure; do not invent a shortcut.', 'She is having a minor procedure on Friday, which is the medical sense.'],
    'follow / a complaints procedure. Wider: process. One instruction: rule. Medical: a procedure = an operation. Mix-up: proceed (verb).',
    ['process']
  ),
  professional: L(
    'Professional is about a trained job, or high standards at work: professional advice, professional conduct, a professional athlete (paid). Amateur is the unpaid opposite in sport; unprofessional criticises behaviour. A professional is also a noun. Profession is already in the dictionary. In speech, proper / from a trained person is enough. Do not call a weekend hobby professional unless they are paid or qualified, and professional qualifications is a set HR phrase.',
    ['Get professional advice before you sign a deed, not a forum thread.', 'His tone in the email was unprofessional, which is the conduct sense, not his job title.'],
    'professional advice / conduct; a professional (noun). Sport opposite: amateur. Criticism: unprofessional. Paid/qualified, not a hobby. Noun: profession.',
    []
  ),
  proficiency: L(
    'Proficiency is a high level of skill: proficiency in English, a proficiency test, language proficiency. Skill is everyday; fluency is specifically smooth language use; competence is being adequate. Proficient is the adjective. In speech, really good at / a high level is enough. Pattern: proficiency in (not at, in careful academic English). Do not claim proficiency after one weekend course.',
    ['The post requires proficiency in written English and a second language.', 'A proficiency test is not the same as a short placement interview.'],
    'proficiency in + subject (not at). Adjective: proficient. Everyday: skill. Language smoothness: fluency. Adequate level: competence.',
    ['skill']
  ),
  proposal: L(
    'A proposal is a formal suggested plan: a proposal for, reject a proposal, a research proposal. Suggestion is everyday and lighter; bid is competitive (a bid for a contract); proposal is also a marriage offer. Propose is the verb (already in the dictionary). In speech, a formal plan is enough. Do not call a passing idea in the kitchen a proposal in a report, and a research proposal has a set academic shape (aims, methods, timeline).',
    ['The council rejected the proposal for a 24-hour licence.', 'Her PhD proposal was sent back for a clearer method, which is the academic sense.'],
    'a proposal for; reject / submit a proposal. Everyday: suggestion. Competitive: bid. Verb: propose. Also marriage. Academic: research proposal.',
    ['suggestion']
  ),
  protest: L(
    'A protest is a public show of disagreement: a protest against, hold a protest, in protest. Demonstration and rally are close; riot involves violence. Stress: noun /ˈprəʊtest/; verb /prəˈtest/ (they protested). In speech, a march / they spoke out is enough. Do not call a private email a protest in news English, and keep the noun/verb stress apart — a common B2 speaking mark issue.',
    ['Thousands joined a protest against the closure of the maternity unit.', 'Staff protested at the new rota, which is the verb /prəˈtest/.'],
    'a protest against; hold a protest. Noun stress ˈpro-test; verb pro-ˈtest. Close: demonstration. Violence: riot. Not a private email.',
    ['demonstration']
  ),
  quota: L(
    'A quota is an official limit or required share: an import quota, a quota of catches, meet a quota. Limit is everyday; target can be a goal rather than a cap; ration is scarcity at consumer level. In speech, an official share / cap is enough. Do not use quota for a personal to-do list, and in news quotas appear in fishing, immigration, and sales (a sales quota can be a required minimum, not only a maximum).',
    ['The fishery closed when the quota was exhausted.', 'Sales staff complained that the monthly quota ignored the quiet season.'],
    'an import / fishing / sales quota; meet a quota. Everyday: limit. Goal (not always a cap): target. Scarcity for consumers: ration. Official number.',
    ['limit']
  ),
  qualify: L(
    'To qualify is to meet a standard for a job, course, or next round: qualify as a solicitor, qualify for a grant, qualify for the final. Pass is everyday for an exam; graduate is from a course. Qualify also means limit a statement (I should qualify that). Qualification is the noun. In speech, get the papers / make it through is enough. Do not use qualify for a casual hobby badge unless a real standard exists.',
    ['She qualified as an architect after seven years of training.', 'I should qualify that claim: it holds only for the 18–24 group.'],
    'qualify as + profession; qualify for + competition/funding. Also: limit a statement. Noun: qualification. Everyday exam: pass. Not a hobby sticker.',
    []
  ),
  qualification: L(
    'A qualification is an official exam or training record: a teaching qualification, entry qualifications, gain a qualification. It is also a limit on a statement (with one qualification). Degree, diploma, and certificate are types. Qualify is the verb. In speech, the piece of paper / the course you passed is enough. Do not call work experience a qualification unless the advert does, and in UK English qualifications is a standard jobs-section heading.',
    ['A teaching qualification is essential; enthusiasm is not a substitute.', 'He accepted the figures with one qualification: the sample excluded Scotland.'],
    'gain / a teaching qualification; entry qualifications. Types: degree / diploma / certificate. Also: a limit on a claim. Verb: qualify. Not automatically “experience”.',
    []
  ),
  quantify: L(
    'To quantify is to express something as a number: quantify the risk, hard to quantify, quantify the cost. Measure is everyday; count is for discrete items; estimate allows a rough figure. Quantitative is the adjective. In speech, put a number on it is enough. Academic and policy English love this verb. Do not pretend you have quantified something if you only have an anecdote, and do not confuse it with qualify.',
    ['The review could not quantify the long-term harm, only the first-year cost.', 'If you cannot quantify the saving, do not put it in the business case as a fact.'],
    'quantify the + noun; hard to quantify. Everyday: put a number on it. Close: measure. Adjective: quantitative. Mix-up: qualify. Needs more than an anecdote.',
    ['measure']
  ),
  quantitative: L(
    'Quantitative is about amounts in numbers: quantitative data, a quantitative study, quantitative easing (a central-bank policy). Qualitative (already in the dictionary) is about meaning and experience, not counts. Quantity is the noun. In speech, number-based is enough. Methods courses pair the two. Do not call an interview study quantitative unless you coded it into numbers, and do not write “quantitive” (missing a).',
    ['The paper is quantitative: sample size, confidence intervals, no interviews.', 'Quantitative easing is a Bank of England tool, which is the policy sense, not a student survey.'],
    'quantitative data / research. Pair: qualitative. Noun: quantity. Everyday: number-based. Spelling: quantitative (not quantitive). Policy: quantitative easing.',
    []
  ),
  query: L(
    'A query is a question asking for information or raising a doubt: a query about the bill, raise a query, any queries. Question is everyday; enquiry is a close UK twin for asking; objection is stronger disagreement. Query is also a verb (they queried the figures) and an IT term (a database query). In speech, a question is enough. Do not use query for a long essay question (that is a question), and in customer service queries is a stock plural.',
    ['Send queries about special arrangements to the exams office, not to your tutor’s personal mail.', 'The auditor queried three invoices, which is the verb: she doubted them.'],
    'a query about; raise a query. Everyday: question. UK cousin: enquiry. Verb: query the figures. IT: a database query. Plural in service English: queries.',
    ['question']
  ),
  quotation: L(
    'A quotation is copied words, or a formal price: a quotation from the report, in quotation marks, a quotation for the work. Quote is the verb and an informal noun; citation points to the source; estimate is a rougher price. In speech, a quote / a price is enough. Academic English prefers quotation for the words and citation for the reference. Do not drop quotation marks around someone else’s exact words in an essay.',
    ['Every quotation needs a citation, not only inverted commas.', 'Get a written quotation before the builder starts, which is the price sense.'],
    'a quotation from; quotation marks. Informal noun/verb: quote. Source pointer: citation. Price: a quotation for. Two senses: words vs price.',
    ['quote']
  ),
  quote: L(
    'To quote is to repeat exact words, or to give a price: quote a source, quote someone as saying, quote for a job. Quotation is the fuller noun; paraphrase is same idea, different words (already in the dictionary at B1). In speech, say exactly / give a price is enough. Do not quote the IELTS question word for word in your introduction, and as a noun a quote is more informal than a quotation. Stock market quotes are prices.',
    ['Quote the minister accurately or do not use inverted commas.', 'Three firms quoted for the roof; the cheapest omitted the scaffolding.'],
    'quote a source / someone as saying; quote for a job. Noun informal: a quote. Fuller noun: quotation. Contrast: paraphrase. Exam trap: do not copy the question.',
    []
  ),
}
