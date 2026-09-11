const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2J = {
  abstruse: L(
    'Abstruse means hard to understand because it is theoretical or hidden: an abstruse argument, abstruse metaphysics. Obscure (C1 in this project) can be little-known; recondite (already in the dictionary) is a close C2 twin. Abstract (already in the dictionary) is “not concrete” — a cousin, not a synonym. Do not call a badly explained core method abstruse as if the reader were at fault.',
    ['An abstruse footnote on indexes did not excuse the missing n in the abstract.', 'Recondite and abstruse both mean “for the few”; obscure can simply be unknown. Abstract art is not-concrete. Clear methods can be hard without being abstruse. A foggy required chapter is usually just poor writing.'],
    'Obscurely difficult; theoretical. Close: recondite. Cousin: obscure (little-known). Mix-up: abstract (not concrete). Not an excuse for bad prose.',
    ['recondite']
  ),
  acrimony: L(
    'Acrimony is bitterness in a dispute (formal): end in acrimony, acrimonious (already in the dictionary) is the adjective. Bitterness and hostility are everyday. Acrid is a sharp smell — a lookalike. Do not write acrimony for a calm, minuted disagreement.',
    ['The merger closed in acrimony: two rival minutes of one vote.', 'Acrimonious talks are the adjective. Bitterness is everyday. Acrid smoke is a smell. Antipathy (this batch) is dislike without the quarrel. A polite dissent in the minutes is not acrimony.'],
    'Bitterness in a quarrel. Adjective: acrimonious. Everyday: bitterness. Mix-up: acrid (smell). Not a calm, recorded disagreement.',
    ['bitterness']
  ),
  acumen: L(
    'Acumen is the ability to judge well and quickly, especially in business or politics: business acumen, political acumen. Judgement and shrewdness (shrewd is already in the dictionary) are cousins. Acute is sharp (pain or mind) — related look. Do not award acumen for a lucky tweet.',
    ['Political acumen kept the night lab staffed; a slogan would not have.', 'Shrewd is the adjective cousin. Judgement is everyday. Acute pain is medical; an acute mind is sharp. One viral post is luck or timing, not acumen.'],
    'Sharp practical judgement. Close: shrewdness / judgement. Look: acute (sharp). Not a lucky tweet.',
    ['judgement']
  ),
  admonish: L(
    'To admonish is to warn or rebuke firmly but not savagely (formal): admonish someone for, an admonition (noun). Tell off is everyday; castigate (this batch) is harsher. Admonitory is the rare adjective. Do not admonish a dataset.',
    ['The chair admonished the panel for leaking a draft grade, then closed the item.', 'Tell off is everyday. Reprimand is official. Castigate is severe. Admonish is a warning with some care left in it. You admonish people, not spreadsheets.'],
    'Reprove; warn firmly (formal). Everyday: tell off. Harsher: castigate. Noun: admonition. People, not files.',
    []
  ),
  allay: L(
    'To allay is to make fear, doubt, or pain less strong (formal): allay fears, allay suspicion. Calm and ease are everyday; assuage (already in the dictionary) is a close C2 twin (often feelings/hunger). Ally is a partner — a lookalike. Do not allay a deficit with a slogan.',
    ['A dated FAQ did not allay panic once the portal went dark at 9 a.m.', 'Ease fears is everyday. Assuage grief is a cousin. Ally (noun) is a friend. Alley is a lane. You allay an emotion or a suspicion, not a budget hole.'],
    'Calm (fear or doubt). Everyday: ease / calm. Close: assuage. Mix-up: ally (partner). Feelings, not a deficit.',
    ['assuage']
  ),
  aloof: L(
    'Aloof means emotionally distant, not joining in: remain aloof, an aloof manner. Distant and reserved are everyday; haughty adds pride. A roof is a lookalike in tired reading. Do not call a quiet, working professional aloof without the coldness.',
    ['An aloof dean still had to sign the fire report; distance was not a defence.', 'Reserved can be shy; aloof is cold distance. Haughty is proud. Stand aloof from a quarrel can be wise. Professional quiet is not automatically aloof.'],
    'Distant; holding back. Everyday: distant / reserved. Proud cousin: haughty. Not mere professional quiet.',
    ['distant']
  ),
  anathema: L(
    'Something is anathema to you if you hate and reject it completely: be anathema to, anathema to auditors. Originally a religious curse. Hate is everyday; taboo is a social ban. Anatomy is a lookalike. Do not use it for a mild dislike of coffee.',
    ['A shared password was anathema to the auditor, brand film or not.', 'Hate is everyday. Taboo is what a group forbids. The old sense is a curse. Anatomy is body-science. Grammar: X is anathema to Y (often uncountable in this use).'],
    'A detested thing (be anathema to). Everyday: hate. Cousin: taboo (social ban). Mix-up: anatomy. Not a mild preference.',
    []
  ),
  antipathy: L(
    'Antipathy is a strong dislike (formal): antipathy to / towards, mutual antipathy. Dislike is everyday; apathy (already in the dictionary) is not caring — a cruel mix-up. Antithesis (already in the dictionary) is the opposite thing. Do not diagnose a methods disagreement as antipathy.',
    ['Antipathy to night teaching is a staffing problem, not a methods section.', 'Dislike is everyday. Apathy is indifference. Antithesis is the opposite. Sympathy is the feeling-with opposite family. A stats dispute can be technical, not personal antipathy.'],
    'Deep dislike (formal). Everyday: dislike. Mix-ups: apathy (indifference); antithesis (the opposite). Not every technical disagreement.',
    ['dislike']
  ),
  aplomb: L(
    'Aplomb is calm, confident self-possession in a tight spot: with aplomb, handle it with aplomb. Composure (already in the dictionary) is a close cousin; confidence is everyday and wider. A plum is fruit — a lookalike. Do not award aplomb for ignoring a fire alarm.',
    ['She met the hostile question with aplomb and a date, not a slogan.', 'Composure is calm; aplomb adds a touch of style under pressure. Confidence can still be loud. Plumb (plumbing / “exactly”) is another lookalike. Reckless calm is not aplomb.'],
    'Cool composure under pressure. Close: composure. Everyday: confidence (wider). Mix-ups: plum; plumb. Not ignoring an alarm.',
    ['composure']
  ),
  apposite: L(
    'Apposite means exactly fitting the occasion or argument (formal): an apposite remark, apposite to the brief. Apt and suitable are everyday cousins; opposite is the cruel lookalike. Apposition is a grammar term. Do not call a long, loosely related quotation apposite.',
    ['An apposite line from the protocol ended the speech about “journey”.', 'Apt is the everyday twin. Opposite is contrary. An opposite example is a contrast, not an apposite one. A decorative quote from a novel is seldom apposite in a methods row.'],
    'Apt; exactly fitting (formal). Everyday: apt / suitable. Mix-up: opposite. Grammar cousin: apposition. A loose quotation is not apposite.',
    ['apt']
  ),
  approbation: L(
    'Approbation is official or public approval (formal): win approbation, a murmur of approbation. Approval (already in the dictionary) is everyday; probation is a trial period — a lookalike. Disapprobation is the rare opposite. Do not confuse board approbation of a slogan with ethics approval.',
    ['Board approbation of the motto is not the ethics committee’s signature.', 'Approval is everyday. Probation is a trial (job or criminal). Praise can be unofficial; approbation often sounds institutional. A like on social media is not approbation in a paper.'],
    'Formal approval / praise. Everyday: approval. Mix-up: probation (a trial period). Not a like, and not ethics sign-off.',
    ['approval']
  ),
  archetype: L(
    'An archetype is the original model of a type, or a very typical example: the archetype of, archetypal (adjective). Prototype (already related in C1 lists) is an early working model; stereotype (already in the dictionary) is a lazy fixed label. Architecture is buildings — a lookalike. Do not call one noisy colleague the archetype of a profession.',
    ['He was the archetype of the grandee who never opened the CSV.', 'Prototype is a first working version. Stereotype flattens people. Archetypal is the adjective. Architecture is buildings. One person is an example; an archetype claims a pattern — use with care.'],
    'The original / typical model. Adjective: archetypal. Contrast: prototype (first build); stereotype (lazy label). Mix-up: architecture. Careful with people.',
    []
  ),
  ascetic: L(
    'Ascetic means choosing a severely plain life without comfort: an ascetic existence, ascetic discipline. Austere (already in the dictionary) is a close cousin (can be style or economics). Aesthetic (already in the dictionary) is about beauty — the classic mix-up. Do not call a budget cut “ascetic” if it only hits other people.',
    ['An ascetic line on cake still has to fund the night bus, or it is just theatre.', 'Austere can describe a room or a chancellor. Aesthetic is art/beauty (note the spelling). An ascetic (noun) is a person who lives that way. Cutting someone else’s overtime is not your asceticism.'],
    'Austere; self-denying. Close: austere. Mix-up: aesthetic (beauty). Noun: an ascetic. Not a cut that only hurts others.',
    ['austere']
  ),
  aspersion: L(
    'An aspersion is a damaging remark, almost always in cast aspersions on: cast aspersions on her honesty. Slander and smear are everyday cousins; asperity (already in the dictionary) is harshness of tone — a lookalike. Do not cast aspersions in a public minute without evidence.',
    ['Do not cast aspersions on a junior’s first draft in a public minute.', 'The set phrase is cast aspersions (usually plural). Smear is everyday. Asperity is sharpness of manner. Dispersion is scatter. If you have evidence, name the fact; if you do not, do not cast.'],
    'A smear; usually cast aspersions on. Everyday: smear. Mix-up: asperity (harsh tone). Evidence or silence — not a public hint.',
    []
  ),
  audacious: L(
    'Audacious means surprisingly bold, sometimes shockingly so: an audacious plan, audacious fraud. Bold is everyday; daring is close; brazen (this batch) is shameless rather than brave. Audible is hearable — a lookalike. Do not call a protocol breach audacious as praise.',
    ['An audacious embargo-break tweet was still a breach, clever or not.', 'Bold is everyday. Brazen is shameless. Audacity is the noun (can be blame). Audible is sound. Reckless is the safety warning. Praise audacity only where the risk was legitimate.'],
    'Bold to the point of daring. Everyday: bold. Noun: audacity. Cousin: brazen (shameless). Mix-up: audible. A breach is not a compliment.',
    ['bold']
  ),
  bathos: L(
    'Bathos is a sudden drop from the elevated to the trivial, often comic by accident: slide into bathos, a moment of bathos. Anticlimax is the everyday cousin; pathos is pity/sadness — the classic mix-up. Do not write bathos for a planned joke that actually landed.',
    ['The tribute fell into bathos with a gag about the biscuits beside an unminuted death.', 'Anticlimax is the plain twin. Pathos is moving sadness (note the p). Bathos is the thud from high style to cheap detail. A good, timed joke in a hard briefing can be levity, not bathos.'],
    'A ludicrous anticlimax. Everyday: anticlimax. Mix-up: pathos (pity). Planned, useful humour is not bathos.',
    []
  ),
  beguile: L(
    'To beguile is to charm or trick someone, or (literary) to make time pass pleasantly: beguile investors, beguile the hours. Charm and deceive are the two everyday poles; guile is cunning. Do not beguile a committee with a dashboard and no join.',
    ['A beguiling dashboard hid a join that was still one spreadsheet.', 'Charm is the lighter sense; deceive is the darker. Guile is the noun of cunning. Beguiling is the adjective. Time beguiled is literary “passed pleasantly”. A graph without a join is the exam warning.'],
    'Charm / deceive (literary). Everyday: charm or trick. Noun family: guile. Adjective: beguiling. Not a substitute for a real join.',
    ['charm']
  ),
  bereft: L(
    'Bereft means stripped of something needed (bereft of), and in older or literary use, grieving a death. Without and lacking are everyday. Bereaved is the family-grief adjective. Do not call a well-stocked lab bereft because the biscuits ran out.',
    ['The night lab was bereft of a second invigilator on the storm date.', 'Without is everyday. Bereaved names grief after a death; bereft of staff is the “lacking” sense. Theft is unrelated. A missing biscuit tin is not bereft.'],
    'Stripped of; without (bereft of). Everyday: without. Grief cousin: bereaved. Not a snack shortage.',
    ['without']
  ),
  blithe: L(
    'Blithe means casually cheerful, often too casually: blithe disregard, a blithe assumption. Cheerful is everyday and safer; careless is the warning inside blithe. Lithe is flexible — a lookalike. Do not call a careful, kind tone blithe.',
    ['A blithe “it will be fine” ignored the failed fire door on the plan.', 'Cheerful is everyday. Blithe disregard is the set damning phrase. Lithe is supple. Blythe as a name is unrelated. Documented caution is the opposite of blithe.'],
    'Carelessly cheerful. Set phrase: blithe disregard. Everyday: cheerful (safer). Mix-up: lithe (supple). Not careful kindness.',
    []
  ),
  brazen: L(
    'Brazen means openly shameless: a brazen lie, brazen it out (idiom: face it without shame). Shameless is everyday; audacious (this batch) can be brave rather than shameless. Bronze is the metal — a lookalike. Do not call an honest correction brazen.',
    ['A brazen rewrite of the n in the abstract died when the appendix was opened.', 'Shameless is everyday. Brazen it out is the idiom. Audacious can be daring without the smear. Bronze is metal. An erratum is the opposite of brazen.'],
    'Shamelessly bold. Everyday: shameless. Idiom: brazen it out. Cousin: audacious (daring). Mix-up: bronze. An honest correction is not brazen.',
    ['shameless']
  ),
  brook: L(
    'To brook is to tolerate (formal), almost always in negatives: brook no dissent, brook no delay. The noun brook is a small stream — same spelling. Tolerate and allow are everyday. Do not brook a biscuit; it is not “eat”.',
    ['The protocol brooks no shared logins, however friendly the night lab.', 'Tolerate is everyday. Brook no + noun is the set pattern. A brook (noun) is a stream. Break is smash. In exams, expect the “not tolerate” sense unless water is in the sentence.'],
    'Tolerate (usually brook no…). Everyday: tolerate. Noun homonym: a stream. Mix-up: break. Not “eat” or “carry”.',
    ['tolerate']
  ),
  burgeon: L(
    'To burgeon is to grow or increase fast (formal / literary): burgeoning demand, a burgeoning field. Grow and boom are everyday; flourish is a cousin. Burden is a load — a lookalike. Do not use burgeon for a 1% wobble.',
    ['Burgeoning enrolments did not burgeon the marking budget, which was the squeeze.', 'Grow is everyday. Boom is economic slang. Flourish can be thrive rather than just swell. A burden is a load. Keep burgeon for rapid growth, and check what is not growing with it.'],
    'Grow or flourish rapidly. Everyday: grow. Close: flourish / boom. Mix-up: burden. Not a tiny wobble; check what failed to grow.',
    ['grow']
  ),
  byzantine: L(
    'Byzantine (often capital B) means excessively complicated, especially of rules, after late Byzantine politics: Byzantine procedures. Complicated is everyday; Kafkaesque (already in the dictionary) adds dreamlike oppression. The Byzantine Empire is the historical sense. Do not call a merely long form Byzantine.',
    ['A Byzantine reset path needed the password in order to request the password.', 'Complicated is everyday. Kafkaesque is nightmarish as well as tangled. Capital B is usual in careful British prose. A three-page form is long; Byzantine means labyrinthine on purpose or by accretion.'],
    'Impossibly intricate (rules); often capital B. Everyday: complicated. Cousin: Kafkaesque (also oppressive). Not merely long.',
    ['complicated']
  ),
  callow: L(
    'Callow means young and inexperienced, and showing it (literary / disapproving): a callow intern, callow optimism. Naive is everyday; immature is close. Callous (already in the dictionary) is cruelly unfeeling — the classic mix-up. Do not call a careful new starter callow for asking a basic question.',
    ['A callow press note promised “world-leading” before the first n existed.', 'Naive is everyday. Callous is unfeeling (note the u). Callow youth is the set literary pairing. A first good question is inexperience, not callowness. Green is informal.'],
    'Immature; green (disapproving). Everyday: naive / immature. Mix-up: callous (cruel). Asking a basic question is not callow.',
    ['naive']
  ),
  cantankerous: L(
    'Cantankerous means bad-tempered and argumentative, often of an old stubborn person: a cantankerous neighbour, cantankerous about the minutes. Grumpy is everyday; irascible is a close formal cousin. Canker is a disease — a lookalike. Do not call a precise, evidence-based objection cantankerous.',
    ['A cantankerous objection still named the missing date; a sulk named nobody.', 'Grumpy is everyday. Argumentative is wider. Irascible is quick to anger. A dated, sour manner is the extra flavour of cantankerous. A correct safety point is not cantankerous because it is inconvenient.'],
    'Quarrelsome; crabby. Everyday: grumpy. Close: irascible. Mix-up: canker. A well-evidenced objection is not a mood.',
    ['grumpy']
  ),
  captious: L(
    'Captious means always finding trivial faults (formal / disapproving): a captious critic, captious objections. Nitpicking is everyday; carping (this batch) is persistent complaining. Captious is not captive. Do not dismiss a safety paragraph as captious.',
    ['A captious war on commas delayed the fire paragraph by a week.', 'Nitpicking is everyday. Carping nags; captious is legally or logically picky about trifles. A captive audience is trapped. If the “trifle” is a missing date on consent, it is not captious.'],
    'Nitpicking; fault-finding (formal). Everyday: nitpicking. Cousin: carping (nagging complaints). Mix-up: captive. Safety-critical points are not captious.',
    []
  ),
  carping: L(
    'Carping means continually complaining about small faults: carping criticism, a carping tone. Complaining is everyday; captious (this batch) is more “clever-picky”. Carp as a verb is this sense; as a noun, a fish. Do not call a repeated, unanswered fire risk “carping”.',
    ['Carping about the biscuits is not a fire-safety minute.', 'Complain is everyday. Captious is fault-finding with a legal/logical flavour; carping is the nag. A carp (fish) is the other noun. If the same risk is still open, repeating it is diligence, not carping.'],
    'Naggingly critical. Everyday: complaining. Cousin: captious (nitpicky). Noun homonym: a carp (fish). An open safety risk is not carping.',
    []
  ),
  castigate: L(
    'To castigate is to criticise severely (formal): castigate the board, castigated for delay. Criticise is everyday; reprimand is official; admonish (this batch) is milder. Caste is social class — a lookalike. Do not castigate a junior in public for a first draft.',
    ['The report castigated the board for minuting “noted” beside an open flame risk.', 'Criticise is everyday. Admonish warns; castigate lashes. A caste system is social rank. Cast a vote is different. Punching down is not “rigour”.'],
    'Rebuke harshly (formal). Everyday: criticise. Milder: admonish. Mix-up: caste (class). Not a public thrashing of a junior draft.',
    ['criticise']
  ),
  chagrin: L(
    'Chagrin is annoyance or disappointment at failure or humiliation (formal): to her chagrin, much to his chagrin. Embarrassment and annoyance are everyday. A grin is a lookalike. Do not write chagrin for grief at a death.',
    ['To her chagrin, the “unique” figure was already in last year’s appendix.', 'Annoyance is everyday; chagrin adds the sting of being shown up. Shame can be moral; chagrin is often professional. A grin is a smile. Grief is a different register.'],
    'Mortified annoyance (formal). Everyday: embarrassment / annoyance. Mix-up: grin. Not grief, and not moral shame.',
    ['embarrassment']
  ),
  chicanery: L(
    'Chicanery is clever dishonest trickery, especially legal or political (formal): financial chicanery, a piece of chicanery. Trickery and sharp practice are everyday cousins; chicane is a racing bend — a lookalike. Do not call an honest rounding error chicanery.',
    ['Relabelling a cut as “simplification” was chicanery, not reform.', 'Trickery is everyday. Fraud is a legal finding; chicanery is the craft of the dodge. A chicane slows cars. If the number was a mistake and corrected, it is an error, not chicanery.'],
    'Trickery; legal/political sharp practice. Everyday: trickery. Mix-up: chicane (racing). An honest, corrected error is not chicanery.',
    ['trickery']
  ),
}
