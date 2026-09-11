const L = (explainer, extraExamples = [], note = '', synonyms = []) => ({
  explainer,
  extraExamples,
  note,
  synonyms,
})

export const LESSONS_C2S = {
  boorish: L(
    'Boorish means rude, coarse, and ill-mannered, with no sense of what is fitting: boorish heckling, a boorish remark. Rude (already in the dictionary) is everyday; churlish (already in the dictionary) is mean-spirited when thanks or generosity was due, a cousin of tone rather than of coarse manners. Obstreperous (already in the dictionary) is noisy and hard to control; affable (already in the dictionary) is the easy opposite. Senate noise is not a dated finding.',
    ['Boorish heckling at Senate does not close a flame-risk minute.', 'Rude is everyday (already in A2). Churlish is ungenerous when kindness was due (already in C2). Obstreperous is unruly noise (already in C2). Affable is easy and pleasant (already in C2) — the contrast. A sharp, dated objection can still be civil. A jeer that never numbers the risk is theatre. Write the finding; leave the heckle.'],
    'Coarse and ill-mannered. Everyday: rude (already in this dictionary). Close: churlish (already in C2). Contrast: affable (already in C2); obstreperous (unruly — already in C2). A jeer is not a minute.',
    ['rude', 'coarse', 'churlish', 'uncouth']
  ),
  brackish: L(
    'Brackish means slightly salty, as of water mixed from river and sea; figuratively, stale and unpleasant: brackish water, a brackish tone. Fresh (already in the dictionary) is the everyday opposite of the water sense; salubrious (already in the dictionary) is healthy and pleasant to inhabit — the contrast of a good climate, not of salt. Opaque (already in the dictionary) is hard to see through, of prose. Do not file a cloudy slogan as a filled cell.',
    ['Brackish “transparency” talk still left the n empty.', 'Fresh is everyday (already in A1) — the water opposite. Salubrious is healthy and pleasant (already in C2). Opaque is hard to see through (already in C2). A short true sentence can still be plain. A stale slogan that never states the n is a hole. Write the number; leave the estuary metaphor.'],
    'Slightly salty; stale (figurative). Everyday opposite: fresh (already in this dictionary). Contrast: salubrious (healthy — already in C2); opaque (obscure — already in C2). Talk ≠ an n.',
    ['salty', 'briny', 'stale', 'unpalatable']
  ),
  zephyr: L(
    'A zephyr is a soft, gentle breeze (literary): a zephyr of air, a summer zephyr. Wind (already in the dictionary) is everyday and stronger; a lull (already in the dictionary) is a pause in noise, not a light current. A maelstrom (already in the dictionary) is a violent swirl — the opposite flavour. Light applause is not a named post on the night.',
    ['A zephyr of applause is not a named fire warden.', 'Wind is everyday (already in A1). A lull is a brief calm (already in C2). A maelstrom is a violent swirl (already in C2) — the contrast. Quiet after a sitting can be harmless. Quiet instead of a rota is a hole. Write the name; then the air may move as it likes.'],
    'A soft breeze (literary). Everyday: breeze / wind (already in this dictionary). Close: lull (a pause — already in C2). Contrast: maelstrom (violent swirl — already in C2). Applause ≠ a warden.',
    ['breeze', 'puff', 'draught', 'waft']
  ),
  zestful: L(
    'Zestful means full of lively enjoyment and energy: a zestful welcome, zestful about the work. Enthusiasm (already in the dictionary) is the everyday noun of interest; ardour (already in the dictionary) is passionate heat, and alacrity (already in the dictionary) is cheerful quickness. Listless (already in the dictionary) is the drained opposite. Brand energy does not unlock a chained door.',
    ['Zestful branding still left the fire door chained.', 'Enthusiasm is everyday (already in B2). Ardour is passionate heat (already in C2). Alacrity is eager speed (already in C2). Listless is without energy (already in C2) — the contrast. Heat for a night of talks can be exact. Heat instead of a named post is a hole. Unlock first; then the zest.'],
    'Lively and keen. Everyday: enthusiastic (already in this dictionary). Close: ardour / alacrity (already in C2). Contrast: listless (already in C2). Branding ≠ an exit.',
    ['enthusiastic', 'spirited', 'keen', 'animated']
  ),
  accretion: L(
    'Accretion is gradual growth by the adding of layers or parts: accretion of silt, an accretion of clauses. Growth (already in the dictionary) is everyday and wider; accumulation (already in the dictionary) is a build-up over time, and an increment (already in the dictionary) is a regular small rise. Superfluous (already in the dictionary) extra is mass you do not need. A pile of logos is not a dated consent line.',
    ['An accretion of logos is not a consent clause.', 'Growth is everyday (already in B1). Accumulation is a build-up (already in C1). An increment is a regular small rise (already in C1). Superfluous is useless extra (already in C2). Layers on the right object can still be exact. Layers instead of the clause are theatre. Write the consent; then the sediment.'],
    'Gradual layered growth. Everyday: growth (already in this dictionary). Close: accumulation / increment (already in C1). Contrast: superfluous (useless extra — already in C2). Logos ≠ consent.',
    ['build-up', 'accumulation', 'deposit', 'layering']
  ),
  braggart: L(
    'A braggart is a person who boasts too much (disapproving): a tiresome braggart, play the braggart. To boast (already in the dictionary) is the everyday verb; bravado (already in the dictionary) is a show of boldness that may hide fear, of the act not of the person. Bombast and braggadocio (this batch) are inflated language and empty swagger. Ranking talk does not invent a cell.',
    ['A braggart about ranking still has to fill the n.', 'To boast is everyday (already in B2). Bravado is a show of boldness (already in C2). Bombast is pompous language (this batch). Braggadocio is empty swagger (this batch). A dated figure can still be said plainly. A boast that never states the cell is theatre. Write the number; then the fanfare.'],
    'A boastful person. Everyday verb: boast (already in this dictionary). Close: bravado (already in C2). This batch: bombast / braggadocio. A boast is not an n.',
    ['boaster', 'brag', 'show-off', 'blowhard']
  ),
  bombast: L(
    'Bombast is pompous, inflated language with little real meaning: empty bombast, a speech of bombast. Bombastic (already in the dictionary) is the adjective; turgid (already in the dictionary) is pompously swollen prose, and bluster (already in the dictionary) is loud empty swagger of talk. A ranking chorus is not a methods line. Write the n; leave the organ swell.',
    ['Bombast about “world-leading” is not a sample-size sentence.', 'Bombastic is the adjective (already in C2). Turgid is pompously overwritten (already in C2). Bluster is loud empty swagger (already in C2). A short true sentence can still be presentable. A swell of adjectives that never states the n is branding. Write the number; then the rhetoric.'],
    'Pompous empty language. Adjective: bombastic (already in C2). Close: turgid / bluster (already in C2). This batch: braggart / braggadocio. Rhetoric ≠ an n.',
    ['rant', 'rhetoric', 'hot air', 'fustian']
  ),
  besmirch: L(
    'To besmirch is to damage a reputation, or to soil and stain (literary / formal): besmirch a name, besmirched by rumour. To defame (already in the dictionary) is to harm by a false statement; to traduce (already in the dictionary) is to slander unfairly, and calumny (already in the dictionary) is the false damaging claim itself. Asking where the date went is a finding, not a smear.',
    ['Do not besmirch a junior for asking where the date went.', 'To defame is to harm by a false claim (already in C1). To traduce is to slander (already in C2). Calumny is the false claim (already in C2). A dated objection can be sharp and still fair. Corridor heat is theatre. Table the empty cell; spare the junior.'],
    'Stain a reputation (literary). Everyday-close: smear / soil. Close: defame (already in C1); traduce / calumny (already in C2). A date is not a personal attack.',
    ['sully', 'tarnish', 'smear', 'stain']
  ),
  abjure: L(
    'To abjure is to reject a former belief, claim, or practice formally and publicly (formal): abjure a doctrine, abjure violence. To recant (already in the dictionary) is to withdraw a stated belief — the close twin of taking it back; to disavow (already in the dictionary) is to deny any connection. To avow (already in the dictionary) is to declare openly — the opposite flavour. A rounded abstract is not a record of the n.',
    ['Abjure the rounded abstract in the minutes; put the raw n in the cell.', 'To recant is to withdraw a claim (already in C2). To disavow is to deny connection (already in C1). To avow is to declare openly (already in C2) — the contrast. An awkward true sentence can still be exact. An anecdote that never states the cell is a hole. Put the number on the table; then the wine.'],
    'Formally reject (a claim). Close: recant (already in C2); disavow (already in C1). Contrast: avow (declare openly — already in C2). A rounding is not an n.',
    ['renounce', 'reject', 'forswear', 'recant']
  ),
  abnegation: L(
    'Abnegation is self-denial, the rejection of one’s own interests (formal): an act of abnegation, self-abnegation. Altruism (already in the dictionary) is unselfish concern for others — the motive cousin; ascetic (already in the dictionary) is of a severely simple life. Cupidity (already in the dictionary) is greed for possessions — the contrast. A mission sentence is not a spare key on the night.',
    ['Abnegation in the mission statement is not a spare night-clinic key.', 'Altruism is unselfish concern (already in C2). Ascetic is severely simple (already in C2). Cupidity is greed (already in C2) — the contrast. A named night post can be a quiet good. A motto that never cuts the key is decoration. Write the rota; then the thanks.'],
    'Self-denial (formal). Close: altruism / ascetic (already in C2). Contrast: cupidity (greed — already in C2). A motto is not a spare key.',
    ['self-denial', 'renunciation', 'selflessness', 'abstinence']
  ),
  abrogate: L(
    'To abrogate is to repeal or cancel a law, right, or agreement formally: abrogate a treaty, abrogated overnight. To repeal (already in the dictionary) is to cancel a law; to revoke (already in the dictionary) is to cancel a right or document, and to nullify (already in the dictionary) is to make something of no effect. A gala is not a licence to drop the embargo.',
    ['Do not abrogate the embargo because the gala is tonight.', 'To repeal is to cancel a law (already in C1). To revoke is to cancel a right (already in C1). To nullify is to make void (already in C2). A dated yes-or-no on circulation can still be exact. Warmth in the room instead of the rule is a hole. Name the embargo; manner is optional after that.'],
    'Formally repeal or cancel. Everyday-close: cancel. Close: repeal / revoke (already in C1). Contrast: nullify (make void — already in C2). A gala is not a repeal.',
    ['repeal', 'revoke', 'rescind', 'annul']
  ),
  abstemious: L(
    'Abstemious means not self-indulgent, especially in food and drink, or sparing in use (formal): an abstemious diet, abstemious with funds. Austere (already in the dictionary) is plain and strict of setting or life; ascetic (already in the dictionary) is severely simple by choice. Frugal (already in the dictionary) is careful not to waste; parsimonious (already in the dictionary) is meanly sparing — the harsher cousin. A tight budget still names the warden.',
    ['An abstemious budget still has to name the fire warden.', 'Austere is plain and strict (already in C1). Ascetic is severely simple (already in C2). Frugal is careful not to waste (already in C1). Parsimonious is stingy (already in C2). A short rota can still be complete. A cut that never names the night post is a hole. Write the name; then the fast.'],
    'Sparing; not self-indulgent (formal). Close: austere / frugal (already in C1); ascetic (already in C2). Contrast: parsimonious (stingy — already in C2). Thrift ≠ a warden.',
    ['sparing', 'temperate', 'austere', 'frugal']
  ),
  adumbrate: L(
    'To adumbrate is to outline faintly, or to foreshadow (formal): adumbrate a plan, the risks were adumbrated. An outline (already in the dictionary) is the everyday noun of main points; to augur (already in the dictionary) is to be a sign of what will happen, not to sketch it. Opaque (already in the dictionary) is hard to see through. A slogan is not a faint drawing of the n.',
    ['Adumbrate the n in the abstract; a slogan is not a sketch.', 'An outline is a short description of main points (already in B1). To augur is to be a sign (already in C2). Opaque is hard to see through (already in C2). A faint but dated figure can still be exact. A motto that never states the cell is branding. Write the number; then the shadow-play.'],
    'Outline faintly; foreshadow (formal). Everyday: outline / sketch (already in this dictionary). Close: augur (already in C2). Contrast: opaque (obscure — already in C2). A slogan is not an n.',
    ['outline', 'sketch', 'foreshadow', 'hint']
  ),
  aesthete: L(
    'An aesthete is a person who has, or claims, a special love of art and beauty (UK spelling): a refined aesthete, aesthete of design. Aesthetic (already in the dictionary) is the adjective of beauty as art; prosaic (already in the dictionary) is plain and unimaginative — the opposite flavour. Fastidious (already in the dictionary) is fussy about details, not about beauty as a creed. Taste in the film still dates the ethics form.',
    ['An aesthete of the brand film still has to date the ethics form.', 'Aesthetic is of beauty as art (already in C1). Prosaic is plain and dull (already in C2) — the contrast. Fastidious is fussy about details (already in C2). Feeling on the screen can be exact. Feeling instead of a dated clause is theatre. Write the date; then the vision.'],
    'A devotee of beauty (UK spelling). Adjective: aesthetic (already in C1). Contrast: prosaic (plain — already in C2); fastidious (fussy — already in C2). Taste ≠ an ethics date.',
    ['connoisseur', 'lover of beauty', 'stylist', 'dilettante']
  ),
  antediluvian: L(
    'Antediluvian means extremely old-fashioned, or of the time before the Flood (literary / humorous): antediluvian kit, an antediluvian rule. Ancient (already in the dictionary) is everyday very old; archaic (already in the dictionary) is no longer in ordinary use, of language or custom, and obsolete (already in the dictionary) is replaced by something newer. Nested folders are not a restore test.',
    ['An antediluvian shared-drive is not a backup policy.', 'Ancient is very old (already in A2). Archaic is out of ordinary use (already in C1). Obsolete is replaced by something newer (already in C1). One named live folder can be dull and still exact. A nest of copies with no restore test is a hole. Name the backup; then enjoy the archaeology.'],
    'Hopelessly old-fashioned. Everyday: ancient (already in this dictionary). Close: archaic / obsolete (already in C1). Folders ≠ a backup.',
    ['old-fashioned', 'archaic', 'outmoded', 'prehistoric']
  ),
  arrant: L(
    'Arrant means complete and unmitigated, used of something bad: arrant nonsense, arrant folly. Utter (already in the dictionary) is complete, of degree; sheer (already in the dictionary) stresses how unmixed something is, and absolute (already in the dictionary) is total and unlimited. Egregious (already in the dictionary) is shockingly bad in a glaring way. “We’ll see” is not a spare key.',
    ['Arrant “we’ll see” left the clinic without a spare key.', 'Utter is complete (already in C1). Sheer is unmixed completeness (already in C1). Absolute is total (already in B1). Egregious is glaringly bad (already in C2). A slow week can still cut a second key. Calling the gap “calm” is how a night post dies. Cut the key; then rest.'],
    'Downright (of something bad). Everyday-close: complete / utter (already in this dictionary). Close: sheer (already in C1). Contrast: egregious (glaringly bad — already in C2). Mood ≠ a spare key.',
    ['utter', 'downright', 'sheer', 'complete']
  ),
  atavistic: L(
    'Atavistic means recurring as if from a distant ancestor; a throwback (formal): an atavistic fear, atavistic rivalry. Hereditary (already in the dictionary) is passed down the family line, of a title or trait, not of a sudden reversion. Nascent (already in the dictionary) is newly forming — the opposite flavour of time. Ancient (already in the dictionary) is simply very old. Canapés are not a health close-out.',
    ['An atavistic fuss about the canapés is not a health item.', 'Hereditary is passed down the line (already in C1). Nascent is newly forming (already in C2) — the contrast. Ancient is very old (already in A2). Taste at a gala can be exact. Taste instead of a dated flame-risk line is noise. Name the owner of the door; leave the menu for the social.'],
    'Ancestral throwback (formal). Close: hereditary (already in C1). Contrast: nascent (newly forming — already in C2). Canapés ≠ a flame.',
    ['throwback', 'ancestral', 'primitive', 'reversionary']
  ),
  auspice: L(
    'An auspice is a sign or omen; more often you meet the plural in under the auspices of, meaning patronage or sponsorship: a favourable auspice, under the auspices of the college. Auspicious (already in the dictionary) is the adjective of a promising omen; to augur (already in the dictionary) is to be a sign of what will happen. A benefactor (already in the dictionary) is the donor, not the banner. A brand is not a consent clause.',
    ['Under the auspices of the brand is not a consent clause.', 'Auspicious is a promising sign (already in C2). To augur is to foretell (already in C2). A benefactor is the donor (already in C2). Ceremony after a dated form can be exact. Ceremony instead of the clause is theatre. Write the consent; then the patronage.'],
    'Omen; patronage (under the auspices of). Adjective: auspicious (already in C2). Close: augur (already in C2). Contrast: benefactor (the donor — already in C2). A brand is not consent.',
    ['patronage', 'sponsorship', 'omen', 'aegis']
  ),
  aver: L(
    'To aver is to state something firmly as a fact (formal / legal): aver that, it was averred in evidence. To declare (already in the dictionary) is official announcement; to assert (already in the dictionary) is to state firmly, and to avow (already in the dictionary) is to declare openly — the close twin of public admission. To recant (already in the dictionary) is to withdraw a former claim. Corridor heat is not a minute.',
    ['Aver the missing date in the minutes; corridor heat is not a record.', 'Declare is official announcement (already in B1). Assert is to state firmly (already in C1). Avow is to declare openly (already in C2). Recant is to withdraw a claim (already in C2) — the contrast. An awkward sentence in the minutes can still be exact. An anecdote that never states the cell is a hole. Put the number on the table; then the wine.'],
    'State firmly as fact (formal / legal). Everyday: declare (already in this dictionary). Close: assert (already in C1); avow (already in C2). Contrast: recant (withdraw — already in C2). Heat ≠ a minute.',
    ['assert', 'affirm', 'declare', 'maintain']
  ),
  beatitude: L(
    'Beatitude is supreme blessedness or happiness (literary / theological): a state of beatitude, the Beatitudes. Beatific (already in the dictionary) is the adjective of a saintly, blissful look; happy (already in the dictionary) is everyday. Ineffable (already in the dictionary) is too great to put in words. Do not file a gala glow as cover. A named warden is still required.',
    ['Beatitude at the gala is not a named fire warden.', 'Beatific is the blissful look (already in C2). Happy is everyday (already in A1). Ineffable is beyond words (already in C2). Atmosphere on the night can be exact. Atmosphere instead of a rota is a hole. Write the name; then the vision may rest.'],
    'Supreme blessedness (literary). Adjective: beatific (already in C2). Everyday: happy (already in this dictionary). Contrast: ineffable (beyond words — already in C2). A glow is not a warden.',
    ['blessedness', 'bliss', 'felicity', 'rapture']
  ),
  bilious: L(
    'Bilious means bad-tempered and irritable, or of bile and a nauseous look: a bilious remark, a bilious green. Irascible (already in the dictionary) is easily made angry; querulous (already in the dictionary) is peevishly complaining, of tone. Choleric (this batch) is hot-tempered as a humour. Do not file a flame risk as bile.',
    ['A bilious “noted” beside an open flame risk is not a decision.', 'Irascible is quick to anger (already in C2). Querulous is peevish complaint (already in C2). Choleric is hot-tempered (this batch). A quiet person can still own the door. “Noted” with no owner is an empty minute. Name the date; leave the humour theory for after the close-out.'],
    'Irritable; bile-sick. Close: irascible / querulous (already in C2). This batch: choleric. Mood ≠ a flame.',
    ['irritable', 'peevish', 'liverish', 'nauseous']
  ),
  blandishment: L(
    'A blandishment is flattering or coaxing speech used to persuade (often plural: blandishments): resist blandishments, a blandishment of praise. To cajole (already in the dictionary) is to persuade by sweet talk — the verb cousin. Unctuous (already in the dictionary) is oily and insincere, of manner; a sycophant (already in the dictionary) is the person who flatters for gain. Copy about care is not a named medic.',
    ['Blandishments about “care” are not a named first-aider.', 'To cajole is to persuade by sweet talk (already in C2). Unctuous is oily praise (already in C2). A sycophant flatters for gain (already in C2). Feeling on the page can be exact. Feeling instead of a rota is a hole. Write the name; then the verse.'],
    'Flattering coaxing (often plural). Verb cousin: cajole (already in C2). Contrast: unctuous (already in C2); sycophant (already in C2). Copy ≠ a first-aider.',
    ['flattery', 'coaxing', 'wheedling', 'sweet talk']
  ),
  braggadocio: L(
    'Braggadocio is empty, swaggering boastfulness: full of braggadocio, a display of braggadocio. Bravado (already in the dictionary) is a show of boldness that may hide fear — the close twin of the act; a braggart (this batch) is the person, and bombast (this batch) is the inflated language. Unpublished times are not licensed by swagger.',
    ['Braggadocio about “agile delivery” does not license unpublished exam times.', 'Bravado is a show of boldness (already in C2). A braggart is the boastful person (this batch). Bombast is pompous language (this batch). A dated timetable can still be said plainly. A swagger that never names the hour is a hole. Publish the sitting; then the talk.'],
    'Empty swaggering boastfulness. Close: bravado (already in C2). This batch: braggart / bombast. Swagger ≠ a timetable.',
    ['swagger', 'boasting', 'bravado', 'bluster']
  ),
  bromide: L(
    'A bromide is a dull, conventional remark, or an old sedative chemical: a comforting bromide, the usual bromide. A platitude (already in the dictionary) is a tired empty remark — the close twin; banality (already in the dictionary) is dull ordinariness, and a cliché (already in the dictionary) is a phrase worn out by use. “World-leading” is not a methods comment.',
    ['A bromide about “world-leading” is not a methods comment.', 'A platitude is a tired empty remark (already in C2). Banality is dull ordinariness (already in C2). A cliché is a worn phrase (already in C1). A short true sentence can still be exact. A motto that never states the n is branding. Write the number; leave the sedative.'],
    'A tired, soothing commonplace. Close: platitude / banality (already in C2); cliché (already in C1). A motto is not an n.',
    ['platitude', 'cliché', 'truism', 'commonplace']
  ),
  bumptious: L(
    'Bumptious means offensively self-assertive and conceited: a bumptious intern, bumptious about rank. Arrogant (already in the dictionary) is everyday self-importance; haughty (already in the dictionary) is proud superiority of manner, and peremptory (already in the dictionary) is of a tone that allows no discussion. Affable (already in the dictionary) is the easy opposite. A pleasant or pushy chair still dates the embargo.',
    ['A bumptious chair still has to date the embargo.', 'Arrogant is everyday self-importance (already in B2). Haughty is arrogantly superior (already in C2). Peremptory is “no argument” (already in C2). Affable is easy and pleasant (already in C2) — the contrast. Warmth in the room can be exact. Warmth instead of a yes-or-no on circulation is a hole. Name the rule; manner is optional after that.'],
    'Offensively self-assertive. Everyday: arrogant (already in this dictionary). Close: haughty / peremptory (already in C2). Contrast: affable (already in C2). Pushiness ≠ an embargo date.',
    ['arrogant', 'pushy', 'conceited', 'overbearing']
  ),
  cadence: L(
    'Cadence is the rise and fall of the voice, or a measured rhythm in sound or movement: a falling cadence, the cadence of footsteps. Pace (already in the dictionary) is everyday speed of walking or work; lyrical (already in the dictionary) is song-like expressiveness, of style. A liturgy (already in the dictionary) is a set ceremonial order, not a rhythm of speech. A run of slogans is not a sample size.',
    ['A cadence of slogans is not a sample-size sentence.', 'Pace is everyday speed (already in A2). Lyrical is song-like (already in C2). A liturgy is a set form of worship (already in C2). Rhythm on the right object can be exact. Rhythm instead of the n is branding. Write the number; then the music.'],
    'A measured rise and fall. Everyday: rhythm / pace (already in this dictionary). Close: lyrical (already in C2). Contrast: liturgy (a set rite — already in C2). A slogan-run is not an n.',
    ['rhythm', 'intonation', 'beat', 'modulation']
  ),
  canard: L(
    'A canard is a false or unfounded story, often spread on purpose: a media canard, the old canard that. A rumour (already in the dictionary) is everyday and may be idle; a hoax (already in the dictionary) is a deliberate false trick, and calumny (already in the dictionary) is a false damaging claim about a person. Apocryphal (already in the dictionary) is of a tale probably untrue though often repeated. “Cleared” is not an ethics date.',
    ['A canard about “cleared” is not an ethics date.', 'A rumour may be idle talk (already in B1). A hoax is a deliberate false trick (already in C1). Calumny is a false damaging claim (already in C2). Apocryphal is a doubtful legend (already in C2). A dated filing can still be exact. A corridor story that never shows the form is theatre. Write the date; leave the legend.'],
    'A false planted story. Everyday: rumour (already in this dictionary). Close: hoax (already in C1); apocryphal (already in C2). Contrast: calumny (a smear — already in C2). A story is not an ethics date.',
    ['falsehood', 'rumour', 'fabrication', 'hoax']
  ),
  capacious: L(
    'Capacious means having a lot of space; roomy: a capacious bag, a capacious memory. Enormous (already in the dictionary) is everyday huge; a behemoth (already in the dictionary) is something vast, especially an organisation. Paucity (already in the dictionary) is too little of something — the opposite flavour. A wide appendix still needs a filled n.',
    ['A capacious appendix still needs a filled n.', 'Enormous is everyday huge (already in B1). A behemoth is something vast (already in C2). Paucity is too little (already in C2) — the contrast. A short methods line can still be complete. An empty cell is not a small gap; it is none. Write the number or write that it is missing.'],
    'Roomy; holding a lot. Everyday: large / roomy. Close: enormous (already in B1); behemoth (already in C2). Contrast: paucity (too little — already in C2). Width ≠ an n.',
    ['roomy', 'spacious', 'ample', 'voluminous']
  ),
  capitulate: L(
    'To capitulate is to cease to resist, to surrender, often after terms: capitulate to pressure, refuse to capitulate. To surrender (already in the dictionary) is everyday stop-fighting; to concede (already in the dictionary) is to admit, often unwillingly, and to submit (already in the dictionary) is to hand in, or to yield to authority. Recalcitrant (already in the dictionary) is stubbornly uncooperative — the opposite flavour. A ranking film is not a reason to drop the n.',
    ['Do not capitulate on the n because the ranking film is due.', 'To surrender is to stop fighting (already in B2). To concede is to admit unwillingly (already in B2). To submit is to hand in or yield (already in C1). Recalcitrant is stubbornly uncooperative (already in C2) — the contrast. A dated figure can still prop a paper. A motto that never states the cell is decoration. Write the number; then the campaign.'],
    'Surrender; give in. Everyday: surrender / give in (already in this dictionary). Close: concede / submit (already in this dictionary). Contrast: recalcitrant (uncooperative — already in C2). A film is not an n.',
    ['surrender', 'yield', 'give in', 'relent']
  ),
  catharsis: L(
    'Catharsis is the release of strong feeling, with a sense of relief (literary / psychological): a moment of catharsis, tragic catharsis. Relief (already in the dictionary) is everyday lessening of pressure; an outlet (already in the dictionary) is a way of expressing a feeling. A maelstrom (already in the dictionary) is a violent swirl of emotion, not a purge of it. Do not let the hush after a gala stand in for a named warden.',
    ['Catharsis after the gala is not cover for an unnamed fire warden.', 'Relief is a lessening of pressure (already in C1). An outlet is a way to express feeling (already in B1). A maelstrom is a violent swirl (already in C2). Quiet after a sitting can be harmless. Quiet instead of a rota is a hole. Write the name; then the hush may be earned.'],
    'A releasing purge of feeling. Everyday: relief / release (already in this dictionary). Close: outlet (already in B1). Contrast: maelstrom (a swirl — already in C2). A hush is not a warden.',
    ['release', 'purgation', 'relief', 'cleansing']
  ),
  caustic: L(
    'Caustic means bitterly sarcastic, or able to burn by chemical action: a caustic remark, caustic soda. Scathing (already in the dictionary) is severely critical; sardonic (already in the dictionary) is grimly mocking, and facetious (already in the dictionary) is joking at the wrong time. A drill is not a decorative rite. Wit after a named warden can wait.',
    ['A caustic joke about the drill is not a named warden.', 'Scathing is harshly critical (already in C2). Sardonic is bitterly mocking (already in C2). Facetious is ill-timed joking (already in C2). Wit after a dated drill can be exact. Wit instead of a named post is a hole. Keep the door clear; then the joke.'],
    'Bitterly sarcastic; chemically burning. Close: scathing / sardonic (already in C2). Contrast: facetious (wrong-time joking — already in C2). A drill is not décor.',
    ['sarcastic', 'scathing', 'biting', 'corrosive']
  ),
  cavil: L(
    'To cavil is to make petty objections (cavil at); as a noun, a quibble: cavil at the wording, without cavil. To quibble (already in the dictionary) is the close twin of nitpicking a small point; to bicker (already in the dictionary) is to quarrel over petty things, and querulous (already in the dictionary) is peevishly complaining, of tone. The font is not the n.',
    ['Do not cavil at the font while the n is empty.', 'To quibble is to nitpick (already in C2). To bicker is to quarrel over petty points (already in C2). Querulous is peevish complaint (already in C2). Type can be exact. Type that never states the n is branding. Write the number; then the font.'],
    'Nitpick; raise petty objections. Close: quibble (already in C2). Contrast: bicker (petty quarrel — already in C2); querulous (peevish tone — already in C2). Type ≠ an n.',
    ['quibble', 'nitpick', 'carp', 'niggle']
  ),
  celerity: L(
    'Celerity is swiftness of movement or action (formal / literary): with celerity, surprising celerity. Alacrity (already in the dictionary) is cheerful willingness and speed — the close twin of eager pace; haste (already in the dictionary) is speed that is often too much, and rapid (already in the dictionary) is everyday very fast. A fast brand film does not date the ethics form.',
    ['Celerity in the brand film does not date the ethics form.', 'Alacrity is eager speed (already in C2). Haste is often too much speed (already in B2). Rapid is everyday very fast (already in B1). Heat for a method can still be exact. Heat instead of a dated clause is theatre. Write the date; leave the rush.'],
    'Swiftness (formal). Close: alacrity (already in C2). Contrast: haste (too much speed — already in B2); rapid (already in B1). Speed ≠ an ethics date.',
    ['swiftness', 'speed', 'rapidity', 'dispatch']
  ),
  censure: L(
    'Censure is strong official criticism (also a verb: to censure): a vote of censure, censure a member. To criticise (already in the dictionary) is everyday; to condemn (already in the dictionary) is to say strongly that something is wrong. Opprobrium (already in the dictionary) is public shame and blame, of the storm not of the formal act; scathing (already in the dictionary) is of a harshly critical tone. Corridor heat is not a numbered objection.',
    ['Censure in the corridor is not a numbered objection.', 'To criticise is everyday (already in B2). To condemn is to say it is wrong (already in B2). Opprobrium is public shame (already in C2). Scathing is harshly critical (already in C2). A dated finding can still be sharp. Heat in the stairwell is theatre. Put the ask on paper; then the pathos.'],
    'Official strong criticism (also a verb). Everyday: criticise / condemn (already in this dictionary). Close: opprobrium (already in C2). Contrast: scathing (of tone — already in C2). A corridor is not a minute.',
    ['rebuke', 'reprimand', 'condemnation', 'reproof']
  ),
  charlatan: L(
    'A charlatan is a person who claims skill or knowledge they do not have: exposed as a charlatan, a medical charlatan. Fraud (already in the dictionary) is the crime of deceit, often for money; a sycophant (already in the dictionary) flatters power rather than faking expertise. A demagogue (already in the dictionary) stirs a crowd by prejudice, not by a false trade. “World-leading methods” still have to show the n.',
    ['A charlatan of “world-leading methods” still has to show the n.', 'Fraud is deceit for gain (already in B1). A sycophant flatters for advantage (already in C2). A demagogue stirs a crowd (already in C2). A dated figure can still be modest. A title that never states the cell is branding. Write the number; leave the miracle.'],
    'A false expert; a quack. Everyday: fraud / fake (already in this dictionary). Contrast: sycophant (flatterer — already in C2); demagogue (crowd-stirrer — already in C2). A title is not an n.',
    ['quack', 'impostor', 'fraud', 'mountebank']
  ),
  chimera: L(
    'A chimera is a hoped-for thing that is illusory, and also a mythological monster: a chimera of reform, chase a chimera. An illusion (already in the dictionary) is a false appearance; a panacea (already in the dictionary) is a supposed cure-all, often equally unreal, and quixotic (already in the dictionary) is nobly unrealistic, of a plan. A ranking vision is not a methods paragraph.',
    ['A chimera of a ranking is not a methods paragraph.', 'An illusion is a false appearance (already in C1). A panacea is a supposed cure-all (already in C2). Quixotic is nobly unrealistic (already in C2). Scale on the right object can be exact. Scale instead of a dated n is theatre. Write the number; then the epic.'],
    'An illusory hope; a phantom. Everyday-close: illusion / fantasy (already in this dictionary). Close: panacea (already in C2). Contrast: quixotic (nobly unrealistic — already in C2). A ranking is not an n.',
    ['illusion', 'fantasy', 'pipe dream', 'mirage']
  ),
  choleric: L(
    'Choleric means easily made angry; hot-tempered (formal / literary): a choleric outburst, choleric by habit. Irascible (already in the dictionary) is the close twin of a short fuse; bilious (this batch) is irritable or bile-sick, and livid (already in the dictionary) is furiously angry, of a moment more than a humour. Belligerent (already in the dictionary) is eager to fight. A walkout is not a dated finding.',
    ['A choleric walkout does not replace a dated finding.', 'Irascible is easily made angry (already in C2). Bilious is irritable or bile-sick (this batch). Livid is furiously angry (already in C2). Belligerent is looking for a fight (already in C2). A sharp, dated objection can still be civil. A storm that never numbers the risk is theatre. Write the finding; leave the humour.'],
    'Hot-tempered (formal). Close: irascible (already in C2). This batch: bilious. Contrast: livid (furious — already in C2); belligerent (eager to fight — already in C2). A storm is not a minute.',
    ['irascible', 'hot-tempered', 'testy', 'quick-tempered']
  ),
  clandestine: L(
    'Clandestine means secret, especially because illicit or unofficial: a clandestine meeting, clandestine changes. Covert (already in the dictionary) is secret and not openly acknowledged; surreptitious (already in the dictionary) is done secretly to avoid trouble, and furtive (already in the dictionary) is slyly secret, of a look or a small act. An edit to the n must survive the appendix.',
    ['A clandestine edit to the n did not survive the appendix.', 'Covert is secret, not openly acknowledged (already in C1). Surreptitious is secret to avoid trouble (already in C2). Furtive is slyly secret (already in C2). A named residual risk can still be exact. A threat that never reaches the minute is a hole. Put it on the table; then the dark may keep its poetry.'],
    'Secret because illicit. Everyday: secret (already in this dictionary). Close: covert (already in C1); surreptitious / furtive (already in C2). An appendix is not a hiding place for a risk.',
    ['secret', 'covert', 'furtive', 'surreptitious']
  ),
  clemency: L(
    'Clemency is mercy, especially in reducing a punishment (formal): grant clemency, a plea for clemency. Mercy (already in the dictionary) is everyday kindness when you could punish; lenient (already in the dictionary) is the adjective of mild judgement. Onerous (already in the dictionary) is burdensome to bear, of a duty — the opposite flavour of weight. A late filing is not a missing consent clause.',
    ['Clemency for a late filing is not a missing consent clause.', 'Mercy is everyday kindness in punishment (already in B1). Lenient is not as strict as expected (already in C1). Onerous is burdensome (already in C2) — the contrast. Ceremony after a dated form can be exact. Ceremony instead of the clause is theatre. Write the consent; then the pardon.'],
    'Mercy in punishment (formal). Everyday: mercy (already in this dictionary). Close adjective: lenient (already in C1). Contrast: onerous (burdensome — already in C2). Pardon ≠ a missing clause.',
    ['mercy', 'leniency', 'pardon', 'forbearance']
  ),
  colloquy: L(
    'A colloquy is a formal conversation or conference (literary / formal): a private colloquy, enter into colloquy. Conversation (already in the dictionary) is everyday talk; dialogue (already in the dictionary) is conversation in a book or film, or formal discussion between groups, and discourse (already in the dictionary) is serious communication of ideas. Banter (already in the dictionary) is playful teasing. Biscuits are not a flame-risk close-out.',
    ['A colloquy about biscuits is not a flame-risk close-out.', 'Conversation is everyday talk (already in A2). Dialogue is discussion between groups (already in B2). Discourse is serious communication (already in C1). Banter is playful teasing (already in C2). Taste at a gala can be exact. Taste instead of a dated flame-risk line is noise. Name the owner of the door; leave the menu for the social.'],
    'A formal conversation. Everyday: conversation / talk (already in this dictionary). Close: dialogue (already in B2); discourse (already in C1). Contrast: banter (playful teasing — already in C2). Biscuits ≠ a flame.',
    ['conversation', 'conference', 'dialogue', 'discussion']
  ),
}
