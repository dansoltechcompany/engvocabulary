const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2G = {
  exhort: L(
    'Exhort means urge someone strongly (formal): exhort members to vote. Encourage is milder; order is a command. Extort is force money from someone — extra t, criminal. An exhortation is the speech. Do not exhort a kettle; the object is people, and the pattern is exhort someone to + infinitive.',
    ['The chair exhorted the room to read the annex, not the headline.', 'Campaign leaflets exhorted voters to register before the cut-off.'],
    'exhort someone to + infinitive (formal urge). Milder: encourage. Mix-up: extort (extract money by threats). Noun: exhortation.',
    ['urge']
  ),
  expedient: L(
    'Expedient means convenient and practical, often at a cost to principle: an expedient delay, politically expedient. Practical is neutral; expedient can hint at a shortcut. Expeditious is speedy and efficient — related root, different judgement. An expedient as a noun is a handy device. Do not praise a policy as expedient if you mean it was right.',
    ['Quietly dropping the clause was expedient; it was not candid.', 'What is expedient in a crisis can look shabby in the inquiry.'],
    'Convenient, not necessarily principled. Mix-up: expeditious (prompt, efficient). Noun: an expedient (a device). Neutral cousin: practical.',
    []
  ),
  expeditious: L(
    'Expeditious means done with speed and efficiency (formal): an expeditious reply, expeditious handling. Quick can be careless; expeditious implies competence as well as haste. Expedite is the verb (hurry a process along). Expedient is “convenient”, not “fast”. Do not write expeditious for a rushed, messy job.',
    ['We asked for an expeditious correction, not another holding line.', 'An expeditious search of the register found the duplicate in minutes.'],
    'Prompt and efficient (formal). Verb: expedite. Mix-up: expedient (convenient/unprincipled). Contrast: merely quick (possibly careless).',
    ['prompt']
  ),
  expunge: L(
    'Expunge means remove completely, especially from a record (formal): expunge a remark from the minutes. Delete and erase are everyday; strike out is legal-ish. Expunge suggests it should not even remain as a trace. Expel is throw a person out. Do not expunge a stain in laundry English — that is remove or treat.',
    ['The chair asked to expunge the aside from the official note.', 'A spent conviction may be expunged; gossip is not a court record.'],
    'Wipe wholly from a record (formal). Everyday: delete/erase. Mix-up: expel (eject a person). Laundry: remove, not expunge.',
    ['erase']
  ),
  extol: L(
    'Extol means praise highly (formal): extol the virtues of, extol her patience. Praise is everyday; laud is a literary cousin. Exalt is raise in rank or idealise — related, not identical. Extol is about words of praise, not promotion. Do not extol a sandwich in a lab report.',
    ['The obituary extolled his patience and skipped the missed deadlines.', 'Ministers extolled “choice” while closing the only local option.'],
    'extol + qualities/person (formal praise). Everyday: praise. Mix-up: exalt (raise up / idealise). Noun rare: extolment.',
    ['praise']
  ),
  extraneous: L(
    'Extraneous means not relevant to the matter: extraneous detail, extraneous noise. Irrelevant is the plain cousin; extra can still belong (an extra copy). Extraneous is extra in a useless or intrusive way. External is merely “outside”. Cut extraneous material; do not call a necessary appendix extraneous.',
    ['The minutes buried the vote under extraneous anecdotes.', 'Extraneous light spoiled the exposure; that is physics, not rudeness.'],
    'Not relevant; intrusive extra. Plain: irrelevant. Contrast: extra (may still belong); external (outside).',
    ['irrelevant']
  ),
  extricate: L(
    'Extricate means free from a tangle or difficulty (formal): extricate the firm from a contract, extricate yourself from a conversation. Extract is pull something out (a tooth, a quote). Rescue is everyday and more dramatic. You extricate someone from a mess; you do not extricate a quote from a book — that is extract.',
    ['She extricated the department from the printer contract without a penalty.', 'He could not extricate his sleeve from the door, which is the literal tangle.'],
    'Free from a mess/tangle (formal). Mix-up: extract (pull out a piece). Everyday: get out of. From + difficulty.',
    []
  ),
  exude: L(
    'Exude means give off a quality as if it were leaking from you: exude calm, exude confidence. Show is everyday; radiate is a close cousin. Literal exude is oozing liquid. Exclude is keep out — different word. Do not write exude for a single polite smile unless the quality fills the room.',
    ['The consultant exuded calm while the numbers did not.', 'Pine resin exuded from the cut, which is the literal sense, not a personality.'],
    'Give off a quality strongly. Close: radiate. Literal: ooze. Mix-up: exclude (keep out). Not a fleeting smile.',
    ['radiate']
  ),
  facile: L(
    'Facile means too easy or glib to be a serious answer: a facile slogan, a facile comparison. Easy can be honest; facile sneers at the lack of depth. Facilitate (already in the dictionary) is help a process — related root, different use. Superficial is a close cousin. Do not call a clear explanation facile unless it dodged the hard part.',
    ['“Just be resilient” is a facile reply to chronic understaffing.', 'A facile contrast of “science versus art” collapsed on the first example.'],
    'Glib; too easy to count as thought. Mix-up: facilitate (make a process easier). Close: superficial. Not “clear and simple” if it is adequate.',
    ['glib']
  ),
  fatuous: L(
    'Fatuous means silly in a self-satisfied way (formal): a fatuous slogan, fatuous optimism. Stupid is rude and wide; fatuous stresses emptiness plus smugness. Fatuity is the rare noun. Famous is a lookalike only at a glance. Do not use fatuous for a genuine, humble mistake.',
    ['The fatuous promise of “excellence for all” named no staff and no hours.', 'A fatuous grin in the photograph did not match the redundancy notice.'],
    'Smugly silly (formal). Plain rude: stupid. Mix-up (lookalike): famous. Not an honest error.',
    ['silly']
  ),
  feign: L(
    'Feign means pretend a feeling or condition: feign surprise, feign illness. Pretend is everyday; fake as a verb is informal. Faint is lose consciousness — same vowel to some ears, different word. A feint (sport/military) is a dummy move. Do not feign a document; that is forge.',
    ['He feigned surprise though the result had sat in the shared drive overnight.', 'Pupils who feign illness still have to sit the paper later; the attendance code is not a cure.'],
    'Pretend a feeling/state. Everyday: pretend. Mix-up: faint (pass out); feint (dummy move). Documents: forge, not feign.',
    ['pretend']
  ),
  felicitous: L(
    'Felicitous means well chosen, happily suited (especially wording): a felicitous phrase, a felicitous example. Apt and well chosen are everyday; fortunate is luck, not fit. Felicity is happiness or aptness of expression. Infelicitous is clumsy wording. Do not call a lucky lottery win felicitous unless you are being literary about timing.',
    ['“Held over” was a felicitous label for a delay that still hoped to open.', 'An infelicitous metaphor mixed medicine with football and helped nobody.'],
    'Apt; well chosen (formal, often of words). Everyday: apt. Luck: fortunate. Opposite: infelicitous. Noun: felicity.',
    ['apt']
  ),
  flagrant: L(
    'Flagrant means shockingly obvious, of something wrong: a flagrant breach, flagrant disregard. Blatant is a close cousin; obvious is wider and can be neutral. Fragrant means nice-smelling — a classic mix-up. Flagrant is always negative. Do not write flagrant for a conspicuous success.',
    ['Ignoring the word limit was a flagrant breach, not a rounding error.', 'A fragrant garden is a smell; a flagrant foul is a referee’s problem.'],
    'Blatantly wrong; obvious (negative). Close: blatant. Mix-up: fragrant (scent). Not a conspicuous good deed.',
    ['blatant']
  ),
  flout: L(
    'Flout means ignore a rule openly and scornfully: flout the law, flout convention. Break is everyday; defy is a close cousin. Flaunt is show off (flaunt wealth) — the classic pair. You flout a rule; you flaunt a possession. Do not write flaunt the speed limit.',
    ['Drivers who flout the lights treat the crossing as optional.', 'She did not flaunt the prize; colleagues who flouted the embargo did the damage.'],
    'Openly scorn a rule. Mix-up: flaunt (show off). Close: defy. Everyday: break a rule (weaker on the scorn).',
    ['defy']
  ),
  foible: L(
    'A foible is a minor weakness of character, often slightly comic: a foible, harmless foibles. Fault and weakness are everyday and can be serious; vice is moral. Feeble means weak (strength) — different word. Do not call fraud a foible.',
    ['His foible was colour-coding emails; the work still arrived.', 'Treat a foible as colour; treat negligence as a fault.'],
    'A small, often comic, character weakness. Everyday serious: fault. Mix-up: feeble (weak). Not a crime.',
    ['quirk']
  ),
  foment: L(
    'Foment means stir up trouble or unrest (formal): foment unrest, foment a strike. Provoke and stir up are everyday; incite is a legal cousin. Ferment as a verb is chemical bubbling, or (metaphor) a state of agitation — related image, different usual collocation (ferment of ideas vs foment unrest). Do not foment a cake.',
    ['The pamphlet was accused of fomenting a walkout rather than describing one.', 'Heat ferments the mash; agitators foment a crowd — keep the collocations.'],
    'Stir up trouble (formal). Everyday: stir up. Legal cousin: incite. Mix-up: ferment (chemical / a ferment of ideas).',
    ['incite']
  ),
  forbearance: L(
    'Forbearance is patient self-control when you could insist or punish (formal): show forbearance, the lender’s forbearance. Patience is everyday; restraint is close. Forebear (or forbear as a noun) is an ancestor — spelling trap. Forbear the verb means refrain. Do not use forbearance for mere delay without self-control.',
    ['She showed forbearance when the draft arrived a week late, then named a final date.', 'Mortgage forbearance is a legal pause, not forgetfulness.'],
    'Patient restraint (formal). Everyday: patience. Mix-up: forebear (ancestor). Verb: forbear (refrain). Not mere lateness.',
    ['restraint']
  ),
  forestall: L(
    'Forestall means prevent by acting first: forestall rumours, forestall an objection. Prevent is everyday; pre-empt is a close cousin. Forest is trees — same letters at the start, different word. Stall as a verb is delay. You forestall an event, not a forest. Do not use it for stopping something after it has already happened.',
    ['A two-line briefing forestalled the usual leak.', 'Buying the domain forestalled a spoof site; deleting tweets did not.'],
    'Prevent by acting first. Close: pre-empt. Everyday: prevent. Mix-up: forest (trees); stall (delay). Not after the fact.',
    ['pre-empt']
  ),
  founder: L(
    'Founder as a verb means fail completely, or (of a ship) fill and sink: the plan foundered, the ship foundered. Found is set up (found a college). Flounder is struggle clumsily — the classic mix-up. A founder as a noun is a person who starts something. Do not write “the college foundered in 1890” if you mean it was founded.',
    ['The reform foundered on staffing, not on the principle.', 'Swimmers flounder; ships founder; committees do both if you mix the verbs.'],
    'Verb: fail / sink. Mix-up: flounder (struggle); found (set up). Noun: a founder (starter). Check the sentence before you write foundered.',
    []
  ),
  fulsome: L(
    'Fulsome, in careful English, means excessively flattering, so it seems insincere: fulsome praise. It is not a synonym of full or generous — that is a common slip. Lavish can be sincere; fulsome sneers. Full is the everyday quantity word. If you mean generous thanks, write generous or warm, not fulsome.',
    ['Fulsome thanks from the chair embarrassed the winner and delayed the next item.', 'A full report is complete; fulsome praise is overdone.'],
    'Over-the-top, insincere praise (careful use). Not a synonym of full/generous. Sincere plenty: warm / generous / lavish.',
    []
  ),
  gauche: L(
    'Gauche means socially awkward, lacking tact (from French): a gauche remark, feel gauche. Awkward is everyday; tactless is close. Gosh is an exclamation. Left in French is gauche — the English sense is clumsiness, not handedness. Do not call a shy silence gauche unless it actually jarred the room.',
    ['Asking about salary in the first minute felt gauche, not bold.', 'A gauche joke at a memorial is tactless; a quiet guest is not automatically gauche.'],
    'Socially clumsy. Everyday: awkward / tactless. Not French “left” in English prose. Not mere shyness.',
    ['awkward']
  ),
  gravitas: L(
    'Gravitas is serious dignity of manner that makes people attend: the role needs gravitas. Gravity is physical force, or seriousness of a situation (the gravity of the offence). Dignity (C1) is self-worth; gravitas is the weight you seem to carry in public. Do not write gravitas for a deep voice alone, or for gravity the physics word.',
    ['The inquiry needed gravitas, not another quip from the chair.', 'The gravity of the injury is medical; gravitas is how the spokesperson stood at the lectern.'],
    'Serious dignity of manner. Mix-up: gravity (physics / seriousness of a fact). Cousin: dignity. Not merely a low voice.',
    []
  ),
  guile: L(
    'Guile is clever, often dishonest, cunning: with guile, without guile (innocent). Cunning is close; deceit is blunter. Guilt is the fact of having done wrong — different word. Beguile is charm or trick. Do not praise exam technique as guile in a school report unless you mean trickery.',
    ['He steered the vote with charm and a little guile.', 'A child without guile still needs a witness; innocence is not evidence.'],
    'Cunning; sly intelligence. Close: cunning. Mix-up: guilt (blameworthiness). Charm/trick verb: beguile.',
    ['cunning']
  ),
  hackneyed: L(
    'Hackneyed means worn out by overuse: a hackneyed phrase, hackneyed imagery. Cliched (already in the dictionary as cliche) is a close cousin; old is wider. A hackney carriage is a historical taxi — the adjective for prose is hackneyed. Do not call a precise technical term hackneyed just because experts use it often.',
    ['“At the end of the day” is a hackneyed closer in speeches.', 'A hackneyed plot can still hide a fresh sentence; cut the plot, not the precision.'],
    'Worn out by overuse (phrases/images). Close: cliched. Contrast: a standard technical term. Historical: hackney cab.',
    ['cliched']
  ),
  harangue: L(
    'A harangue is a long, aggressive speech that lectures rather than persuades: launch into a harangue. Speech is everyday; rant is informal and close. Harangue as a verb is to address someone that way. Harass is keep attacking a person over time — different word. Do not call a tight five-minute briefing a harangue.',
    ['The item on punctuality became a harangue, and nobody asked about the buses.', 'She harangued the room for twenty minutes; a rant on social media is the informal cousin.'],
    'A long, scolding speech (noun/verb). Informal close: rant. Mix-up: harass (persecute over time). Not a short briefing.',
    ['rant']
  ),
  harbinger: L(
    'A harbinger is a sign that something (often important) is coming: a harbinger of winter, a harbinger of change (literary/formal). Omen and forerunner are cousins; sign is everyday. Harbour as a verb is hide a feeling or a fugitive — different word. Do not call a definite cause a harbinger; a harbinger precedes, it does not prove.',
    ['The first frost was a harbinger of a hard winter, not the winter itself.', 'A viral clip can be a harbinger of a scandal, or just a clip.'],
    'A forerunner; an omen (literary/formal). Everyday: sign. Mix-up: harbour (hide/shelter). Precedes; does not prove.',
    ['forerunner']
  ),
  hubris: L(
    'Hubris is dangerous overconfidence; pride that invites a fall (from Greek tragedy): an act of hubris. Pride can be healthy; arrogance is close but need not suggest punishment. Hybrid is a mix of two things — lookalike. Nemesis is the fall that follows in the old stories. Do not call ordinary ambition hubris.',
    ['Launching with no backup was hubris, not bravery.', 'The tragedy treats hubris as a flaw; a hybrid car is engineering.'],
    'Pride that goes too far (literary/formal). Close: arrogance. Mix-up: hybrid (a mix). Follow-up in myth: nemesis. Not ordinary ambition.',
    ['arrogance']
  ),
  immutable: L(
    'Immutable means unable to be changed (formal): an immutable law, treat as immutable. Unchangeable is the plain cousin; mute is silent — different. Invariable is “always the same”. In computing, immutable data cannot be altered in place. Do not call a stubborn person immutable unless you mean it as a joke; use obstinate.',
    ['They treated the timetable as immutable, which it was not.', 'An immutable string in code is a technical fact; an immutable prejudice is a moral problem.'],
    'Unchangeable (formal). Plain: unchangeable. Mix-up: mute (silent). People: obstinate, not immutable (except metaphor).',
    ['unchangeable']
  ),
  imperious: L(
    'Imperious means expecting to be obeyed; arrogantly commanding: an imperious tone, an imperious wave. Imperial is of an empire. Bossy is everyday and smaller. Peremptory (already in the dictionary) is close. Do not call a clear instruction imperious unless the manner is arrogant.',
    ['An imperious email is a poor substitute for a request with a reason.', 'Imperial policy is history; an imperious manner is the person in the room.'],
    'Arrogantly commanding. Mix-up: imperial (empire). Everyday: bossy. Close: peremptory. Not merely clear or firm.',
    ['bossy']
  ),
  impugn: L(
    'Impugn means call someone’s honesty, motives, or accuracy into question (formal): impugn her figures, impugn his motives. Question is everyday; attack is blunter. Impute is attribute a quality to someone — related, not the same. Punch is a fist. Do not impugn a person in print without evidence; the verb is already an accusation.',
    ['Do not impugn the counts unless you have recounted them.', 'She imputed kindness to him; she did not impugn his honesty — keep impute and impugn apart.'],
    'Attack the truth/honesty of (formal). Everyday: question. Mix-up: impute (attribute). Not a physical punch.',
    []
  ),
}
