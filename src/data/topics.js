import { LEVELS, WORD_BY_ID } from './words.js'

export const TOPICS = [
  {
    slug: 'weather',
    title: 'Weather vocabulary',
    h1: 'Weather vocabulary in English',
    blurb: 'Sky, rain, heat, and cold — the words you need for the forecast and everyday talk.',
    description:
      'Learn English weather vocabulary from A1 to C2: rain, storm, forecast, humidity, and more, with short meanings and examples.',
    groups: [
      {
        heading: 'Sky and the forecast',
        ids: ['weather', 'climate', 'forecast', 'temperature', 'degree', 'season', 'spring', 'summer', 'autumn', 'winter', 'sky', 'sun', 'sunny', 'cloud', 'cloudy', 'overcast', 'atmosphere', 'air', 'oxygen'],
      },
      {
        heading: 'Rain, wind, and storms',
        ids: ['rain', 'rainy', 'drizzle', 'shower', 'storm', 'lightning', 'flood', 'wind', 'windy', 'gale', 'hurricane', 'monsoon', 'umbrella', 'raincoat', 'waterproof', 'wellington-boot', 'pour', 'bucket', 'rainbow'],
      },
      {
        heading: 'Heat, cold, and ice',
        ids: ['heat', 'hot', 'cold', 'warm', 'cool', 'mild', 'heatwave', 'tropical', 'arctic', 'pole', 'equator', 'ice', 'frost', 'freeze', 'frozen', 'melt', 'snow', 'fog', 'foggy', 'mist', 'hail', 'drought', 'damp', 'dry', 'wet', 'humidity', 'shade', 'sunburn', 'extreme', 'severe', 'harsh', 'gentle', 'calm', 'rough', 'tide', 'sea', 'ocean', 'current', 'dew', 'flash', 'pollution'],
      },
    ],
  },
  {
    slug: 'family',
    title: 'Family vocabulary',
    h1: 'Family vocabulary in English',
    blurb: 'Parents, children, relatives, and the words for weddings, birthdays, and home life.',
    description:
      'Learn English family vocabulary: mother, cousin, wedding, adopt, and more, with clear meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Parents and children',
        ids: ['family', 'mother', 'father', 'parent', 'mum', 'dad', 'brother', 'sister', 'son', 'daughter', 'child', 'children', 'baby', 'infant', 'teenager', 'adult', 'twin', 'raise', 'care', 'love', 'hug', 'kiss', 'nanny', 'babysitter', 'nursery', 'school-run', 'allowance', 'household', 'home'],
      },
      {
        heading: 'Relatives',
        ids: ['relative', 'cousin', 'uncle', 'aunt', 'nephew', 'niece', 'grandmother', 'grandfather', 'grandparent', 'grandma', 'grandpa', 'grandchild', 'ancestor', 'descendant', 'generation', 'kin', 'clan', 'tribe', 'surname', 'heir', 'inherit', 'orphan', 'widow'],
      },
      {
        heading: 'Partnership and life events',
        ids: ['husband', 'wife', 'married', 'marriage', 'wedding', 'wedding-ring', 'boyfriend', 'girlfriend', 'partner', 'engaged', 'engagement', 'pregnant', 'pregnancy', 'birth', 'birthday', 'born', 'adopt', 'adoption', 'foster', 'divorce', 'single', 'middle'],
      },
    ],
  },
  {
    slug: 'home',
    title: 'Home and furniture vocabulary',
    h1: 'Home and furniture vocabulary in English',
    blurb: 'Rooms, furniture, and the kitchen and bathroom words you use every day.',
    description:
      'Learn English home and furniture vocabulary: flat, sofa, hob, landlord, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Houses and rooms',
        ids: ['home', 'house', 'flat', 'apartment', 'cottage', 'villa', 'semi', 'terrace', 'building', 'block', 'upstairs', 'downstairs', 'attic', 'loft', 'basement', 'cellar', 'garage', 'garden', 'yard', 'fence', 'gate', 'roof', 'ceiling', 'wall', 'floor', 'door', 'window', 'window-sill', 'chimney', 'stairs', 'corridor', 'room', 'bedroom', 'bathroom', 'kitchen', 'living-room', 'dining-room', 'office', 'balcony', 'driveway'],
      },
      {
        heading: 'Furniture and furnishings',
        ids: ['furniture', 'table', 'chair', 'armchair', 'sofa', 'sofa-bed', 'bed', 'pillow', 'pillowcase', 'blanket', 'duvet', 'duvet-cover', 'sheet', 'wardrobe', 'cupboard', 'drawer', 'sock-drawer', 'shelf', 'bookcase', 'desk', 'stool', 'bench', 'carpet', 'rug', 'curtain', 'blinds', 'rollerblind', 'lamp', 'light', 'bulb', 'clock', 'picture', 'photo-frame', 'vase', 'plant', 'cushion', 'throw'],
      },
      {
        heading: 'Kitchen, bathroom, and bills',
        ids: ['plug', 'power-socket', 'socket', 'tap', 'sink', 'sink-plug', 'bath', 'shower', 'toilet', 'loo', 'towel', 'towel-rail', 'soap', 'soap-dish', 'mirror', 'fridge', 'freezer', 'fridge-freezer', 'cooker', 'hob', 'oven', 'microwave', 'kettle', 'toaster', 'dishwasher', 'washing-machine', 'tumble-drier', 'hoover', 'vacuum', 'worktop', 'cutlery', 'plate', 'side-plate', 'bowl', 'cup', 'mug', 'glass', 'saucepan', 'frying-pan', 'bin', 'wheelie-bin', 'recycling', 'radiator', 'heating', 'air-conditioning', 'fireplace', 'key', 'lock', 'doorbell', 'neighbour', 'neighbourhood', 'rent', 'landlord', 'tenant', 'mortgage', 'electricity', 'gas', 'water', 'leak', 'decorate', 'paint', 'wallpaper'],
      },
    ],
  },
  {
    slug: 'sports',
    title: 'Sports vocabulary',
    h1: 'Sports vocabulary in English',
    blurb: 'Football, tennis, training, and the language of matches, scores, and kit.',
    description:
      'Learn English sports vocabulary: match, stadium, marathon, wicket, and more, with short meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Games and matches',
        ids: ['sport', 'game', 'play', 'team', 'club', 'win', 'lose', 'score', 'goal', 'match', 'competition', 'championship', 'football', 'cricket', 'tennis', 'rugby', 'hockey', 'golf', 'basketball', 'volleyball', 'baseball', 'rounders', 'snooker', 'darts', 'boxing', 'wrestle', 'martial', 'swim', 'swimming', 'cycling', 'cycle', 'bike', 'bicycle', 'skate', 'ski', 'skiing', 'snowboard', 'hiking', 'yoga', 'opponent', 'compete', 'victory', 'defeat', 'spectator', 'athletics'],
      },
      {
        heading: 'People and places',
        ids: ['athlete', 'coach', 'trainer', 'fan', 'crowd', 'champion', 'captain', 'substitute', 'goalkeeper', 'stadium', 'court', 'field', 'track', 'pool', 'gym', 'bench', 'league', 'fixture', 'arena', 'changing-room', 'commentator', 'jersey'],
      },
      {
        heading: 'Actions and kit',
        ids: ['training', 'exercise', 'fitness', 'workout', 'race', 'run', 'marathon', 'jog', 'jump', 'throw', 'catch', 'kick', 'hit', 'tackle', 'dive', 'stretch', 'medal', 'injury', 'bruise', 'kit', 'uniform', 'boots', 'trainers', 'helmet', 'goggles', 'swimming-goggles', 'whistle', 'ball', 'wicket', 'racket', 'tennis-racket', 'defence', 'penalty', 'amateur', 'professional', 'qualify', 'equalise', 'disqualify', 'net', 'hurdle', 'relay', 'defender'],
      },
    ],
  },
  {
    slug: 'travel',
    title: 'Travel vocabulary',
    h1: 'Travel vocabulary in English',
    blurb: 'Airports, trains, hotels, and asking for directions — words for trips and holidays.',
    description:
      'Learn English travel vocabulary: airport, passport, hotel, roundabout, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Airport and flying',
        ids: ['travel', 'trip', 'journey', 'voyage', 'tour', 'tourist', 'tourism', 'holiday', 'vacation', 'break', 'destination', 'itinerary', 'passport', 'visa', 'border', 'customs', 'immigration', 'airport', 'aeroplane', 'plane', 'aircraft', 'flight', 'fly', 'pilot', 'cabin', 'crew', 'boarding', 'gate', 'landing', 'delay', 'luggage', 'suitcase', 'rucksack', 'backpack', 'baggage', 'check-in', 'security', 'terminal', 'airline', 'ticket', 'booking', 'reservation', 'return', 'one-way', 'fare', 'departure', 'arrival', 'aisle', 'seat'],
      },
      {
        heading: 'Getting around',
        ids: ['platform', 'station', 'train', 'railway', 'carriage', 'compartment', 'tram', 'underground', 'tube', 'metro', 'bus', 'bus-stop', 'minibus', 'taxi', 'car', 'hire-car', 'drive', 'driver', 'motorway', 'roundabout', 'junction', 'traffic', 'congestion', 'petrol', 'diesel', 'fuel', 'map', 'sat-nav', 'timetable', 'direction', 'left', 'right', 'straight', 'north', 'south', 'east', 'west', 'road', 'street', 'lane', 'path', 'pavement', 'crossing', 'pelican-crossing', 'bridge', 'ferry', 'ship', 'boat', 'port', 'harbour', 'cruise'],
      },
      {
        heading: 'Staying somewhere',
        ids: ['hotel', 'hostel', 'room', 'reception', 'receptionist', 'lift', 'floor', 'double', 'en-suite', 'balcony', 'breakfast', 'campsite', 'tent', 'caravan', 'guidebook', 'postcard', 'currency', 'exchange', 'embassy', 'lost-property', 'insurance', 'homesick', 'abroad', 'overseas', 'local', 'translate'],
      },
    ],
  },
  {
    slug: 'food',
    title: 'Food vocabulary',
    h1: 'Food and cooking vocabulary in English',
    blurb: 'Meals, restaurants, recipes, and the words for taste, ingredients, and cooking.',
    description:
      'Learn English food vocabulary: restaurant, recipe, spicy flavours, fruit, and cooking verbs, with examples from A1 to C2.',
    groups: [
      {
        heading: 'Meals and eating out',
        ids: ['food', 'eat', 'meal', 'breakfast', 'lunch', 'dinner', 'snack', 'hungry', 'thirsty', 'drink', 'water', 'menu', 'restaurant', 'cafe', 'cafeteria', 'takeaway', 'fast-food', 'waiter', 'waitress', 'chef', 'dish', 'dessert', 'pudding', 'bill', 'tip', 'order', 'serve', 'portion', 'diet', 'vegetarian', 'vegan', 'picnic', 'barbecue'],
      },
      {
        heading: 'Cooking',
        ids: ['cook', 'cooking', 'kitchen', 'recipe', 'ingredient', 'boil', 'fry', 'grill', 'bake', 'microwave', 'chop', 'slice', 'peel', 'mix', 'stir', 'oven', 'hob', 'pan', 'saucepan', 'frying-pan', 'pot', 'bowl', 'plate', 'knife', 'fork', 'spoon', 'napkin', 'tablecloth', 'organic', 'fresh', 'frozen', 'raw', 'healthy', 'unhealthy', 'calorie', 'allergy', 'nut'],
      },
      {
        heading: 'Taste and ingredients',
        ids: ['taste', 'flavour', 'delicious', 'hot', 'sweet', 'bitter', 'crisp', 'bread', 'toast', 'butter', 'jam', 'honey', 'cheese', 'egg', 'milk', 'yoghurt', 'cream', 'oil', 'vinegar', 'salt', 'pepper', 'sugar', 'flour', 'rice', 'pasta', 'potato', 'chips', 'crisps', 'meat', 'beef', 'lamb', 'chicken', 'turkey', 'fish', 'salmon', 'vegetable', 'salad', 'soup', 'sauce', 'gravy', 'curry', 'pizza', 'burger', 'sandwich', 'sarnie', 'pie', 'cake', 'biscuit', 'chocolate', 'ice-cream', 'fruit', 'apple', 'banana', 'orange', 'grape', 'strawberry', 'lemon', 'tomato', 'onion', 'garlic', 'carrot', 'pea', 'bean', 'cabbage', 'lettuce', 'cucumber', 'mushroom', 'herb', 'coffee', 'tea', 'juice', 'wine', 'beer', 'fizzy'],
      },
    ],
  },
  {
    slug: 'academic',
    title: 'Academic vocabulary',
    h1: 'Academic English vocabulary',
    blurb: 'Essays, lectures, and the words you need for research, argument, and university work.',
    description:
      'Learn academic English vocabulary: essay, evidence, hypothesis, citation, and more, with short meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Essays and writing',
        ids: ['academic', 'essay', 'paragraph', 'sentence', 'word', 'vocabulary', 'grammar', 'punctuation', 'spell', 'draft', 'revise', 'outline', 'summary', 'summarise', 'introduction', 'conclusion', 'abstract', 'heading', 'bullet', 'footnote', 'appendix', 'glossary', 'paraphrase', 'cite', 'citation', 'quote', 'quotation', 'reference', 'source', 'evidence', 'argument', 'claim', 'point', 'reason', 'example', 'highlight', 'submit', 'deadline', 'extension', 'presentation', 'slide'],
      },
      {
        heading: 'Study skills and research',
        ids: ['lecture', 'seminar', 'module', 'assignment', 'coursework', 'dissertation', 'thesis', 'research', 'analyse', 'analysis', 'evaluate', 'discuss', 'compare', 'contrast', 'define', 'explain', 'describe', 'illustrate', 'interpret', 'critical', 'theory', 'hypothesis', 'method', 'methodology', 'data', 'result', 'journal', 'article', 'literature', 'scholar', 'review', 'statistic', 'percentage', 'chart', 'graph', 'table', 'figure', 'concept', 'context', 'issue', 'topic', 'theme', 'structure'],
      },
      {
        heading: 'University and assessment',
        ids: ['university', 'undergraduate', 'professor', 'tutor', 'lecturer', 'faculty', 'campus', 'library', 'degree', 'bachelor', 'master', 'doctorate', 'criterion', 'criteria', 'assessment', 'feedback', 'mark', 'grade', 'pass', 'fail', 'distinction', 'curriculum', 'term', 'register', 'significant', 'relevant', 'accurate', 'objective', 'subjective', 'bias', 'valid', 'reliable', 'coherent', 'concise', 'formal', 'informal', 'optional', 'compulsory'],
      },
    ],
  },
  {
    slug: 'emotions',
    title: 'Emotions vocabulary',
    h1: 'Emotions and feelings vocabulary in English',
    blurb: 'Happy, anxious, proud, and the words for how we feel and how we treat other people.',
    description:
      'Learn English emotions vocabulary: happy, anxious, proud, empathy, and more, with clear meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Everyday feelings',
        ids: ['happy', 'unhappy', 'sad', 'glad', 'cheerful', 'excited', 'bored', 'lonely', 'calm', 'worried', 'nervous', 'afraid', 'scared', 'angry', 'upset', 'proud', 'shy', 'confident', 'love', 'hate', 'like', 'enjoy', 'prefer', 'miss', 'care', 'cry', 'laugh', 'smile', 'frown', 'mood', 'feeling', 'emotion'],
      },
      {
        heading: 'Stronger states',
        ids: ['anxious', 'stress', 'panic', 'shock', 'furious', 'miserable', 'ashamed', 'embarrassed', 'guilty', 'disappointed', 'hopeful', 'grateful', 'satisfied', 'content', 'jealous', 'envy', 'envious', 'grief', 'loss', 'hurt', 'pain', 'fear', 'anger', 'depression', 'anxiety', 'insecure', 'coward', 'brave', 'relief', 'amazed', 'confused', 'curious', 'hope', 'delight', 'joy', 'pleasure'],
      },
      {
        heading: 'How we treat people',
        ids: ['kind', 'cruel', 'gentle', 'patient', 'impatient', 'empathy', 'compassion', 'comfort', 'console', 'encourage', 'support', 'trust', 'doubt', 'offend', 'insult', 'regret', 'sorry', 'pride', 'embarrassment', 'jealousy', 'resentment', 'resent', 'guilt', 'boredom', 'excitement', 'happiness', 'temper', 'outburst', 'optimistic', 'positive', 'negative', 'sensitive', 'insensitive', 'emotional', 'enthusiastic', 'passionate', 'interested'],
      },
    ],
  },
  {
    slug: 'work',
    title: 'Work and business vocabulary',
    h1: 'Work and business vocabulary in English',
    blurb: 'Jobs, offices, pay, and the language of meetings, contracts, and companies.',
    description:
      'Learn English work and business vocabulary: interview, salary, deadline, colleague, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Jobs and people',
        ids: ['work', 'job', 'career', 'occupation', 'profession', 'office', 'workplace', 'company', 'firm', 'business', 'employer', 'employee', 'staff', 'colleague', 'boss', 'manager', 'director', 'supervisor', 'team', 'department', 'intern', 'internship', 'apprentice', 'freelance', 'entrepreneur', 'secretary', 'receptionist', 'assistant', 'administrator', 'executive', 'nurse', 'teacher', 'engineer', 'lawyer', 'accountant'],
      },
      {
        heading: 'Getting work and pay',
        ids: ['interview', 'application', 'apply', 'candidate', 'recruit', 'hire', 'appoint', 'contract', 'permanent', 'temporary', 'full-time', 'part-time', 'shift', 'overtime', 'remote', 'commute', 'desk', 'salary', 'wage', 'pay', 'bonus', 'pension', 'benefit', 'holiday', 'maternity', 'resign', 'retire', 'redundancy', 'redundant', 'unemployed', 'unemployment', 'promotion', 'promote', 'qualification', 'skill', 'experience', 'training'],
      },
      {
        heading: 'The office and the market',
        ids: ['deadline', 'meeting', 'agenda', 'minutes', 'email', 'memo', 'report', 'project', 'client', 'customer', 'invoice', 'budget', 'target', 'performance', 'review', 'industry', 'sector', 'market', 'profit', 'loss', 'revenue', 'product', 'service', 'brand', 'marketing', 'advertising', 'negotiate', 'union', 'workload', 'stress', 'burnout', 'board', 'shareholder', 'policy', 'procedure', 'factory', 'warehouse', 'retail', 'corporate'],
      },
    ],
  },
  {
    slug: 'shopping',
    title: 'Shopping vocabulary',
    h1: 'Shopping vocabulary in English',
    blurb: 'Shops, prices, receipts, and the words for bargains, refunds, and paying at the till.',
    description:
      'Learn English shopping vocabulary: supermarket, discount, receipt, queue, and more, with short meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Places and paying',
        ids: ['shop', 'shopping', 'store', 'supermarket', 'market', 'mall', 'high-street', 'department-store', 'bookshop', 'corner-shop', 'chip-shop', 'shopping-centre', 'buy', 'sell', 'purchase', 'order', 'pay', 'spend', 'cash', 'card', 'coin', 'wallet', 'pound', 'tip', 'till', 'checkout', 'cashier', 'queue', 'basket', 'trolley', 'bag', 'carrier-bag', 'shopping-bag'],
      },
      {
        heading: 'Price and offers',
        ids: ['price', 'cost', 'cheap', 'expensive', 'afford', 'bargain', 'discount', 'sale', 'offer', 'voucher', 'coupon', 'half-price', 'bulk', 'wholesale', 'retail', 'receipt', 'refund', 'exchange', 'return', 'guarantee', 'warranty'],
      },
      {
        heading: 'In the shop',
        ids: ['aisle', 'shelf', 'size', 'fit', 'fitting-room', 'brand', 'label', 'quality', 'fake', 'counterfeit', 'customer', 'complaint', 'delivery', 'online', 'website', 'browse', 'window', 'display', 'advert', 'advertisement', 'poster', 'leaflet', 'catalogue', 'stall', 'vendor', 'buyer', 'manager', 'security', 'alarm', 'scan', 'service', 'open', 'closed'],
      },
    ],
  },
  {
    slug: 'technology',
    title: 'Technology vocabulary',
    h1: 'Technology vocabulary in English',
    blurb: 'Phones, computers, and the words for the internet, apps, and digital life.',
    description:
      'Learn English technology vocabulary: laptop, wifi, download, password, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Devices',
        ids: ['computer', 'laptop', 'desktop', 'tablet', 'phone', 'mobile', 'device', 'screen', 'keyboard', 'mouse', 'printer', 'camera', 'webcam', 'microphone', 'speaker', 'headphones', 'charger', 'battery', 'cable', 'plug', 'bluetooth', 'gadget', 'technology', 'technical', 'technician', 'technological', 'electronic', 'wireless', 'satellite'],
      },
      {
        heading: 'The internet',
        ids: ['wifi', 'internet', 'web', 'website', 'browser', 'search', 'email', 'voicemail', 'password', 'account', 'profile', 'software', 'hardware', 'file', 'folder', 'document', 'download', 'upload', 'save', 'delete', 'copy', 'paste', 'click', 'link', 'icon', 'update', 'install', 'online', 'offline', 'broadband', 'network', 'signal', 'connection', 'data', 'database'],
      },
      {
        heading: 'Digital life',
        ids: ['code', 'coding', 'developer', 'virus', 'cyber', 'digital', 'virtual', 'robot', 'algorithm', 'post', 'share', 'like', 'comment', 'follow', 'viral', 'blog', 'video', 'photo', 'call', 'text', 'message', 'chat', 'emoji', 'privacy', 'cookie', 'innovation', 'storage'],
      },
    ],
  },
  {
    slug: 'money',
    title: 'Money and banking vocabulary',
    h1: 'Money and banking vocabulary in English',
    blurb: 'Cash, cards, bills, and the words for banks, loans, tax, and what things cost.',
    description:
      'Learn English money and banking vocabulary: cashpoint, mortgage, budget, overdraft, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Cash and banks',
        ids: ['money', 'cash', 'coin', 'currency', 'pound', 'dollar', 'euro', 'bank', 'account', 'save', 'deposit', 'withdraw', 'transfer', 'balance', 'statement', 'cashpoint', 'cash-machine', 'card', 'credit-card', 'debit-card', 'wallet', 'cheque', 'pay', 'payment', 'spend'],
      },
      {
        heading: 'Bills and borrowing',
        ids: ['bill', 'invoice', 'fee', 'charge', 'cost', 'price', 'afford', 'budget', 'income', 'salary', 'wage', 'bonus', 'tax', 'vat', 'loan', 'debt', 'credit', 'debit', 'overdraft', 'interest', 'mortgage', 'rent', 'refund', 'discount', 'instalment', 'owe', 'lend', 'borrow', 'borrower', 'penalty'],
      },
      {
        heading: 'Wealth and the economy',
        ids: ['cheap', 'expensive', 'rich', 'poor', 'wealth', 'wealthy', 'poverty', 'bankrupt', 'bankruptcy', 'inflation', 'economy', 'economic', 'finance', 'financial', 'banker', 'accountant', 'audit', 'invest', 'investment', 'investor', 'profit', 'loss', 'pension', 'insurance', 'exchange', 'tip', 'donation', 'charity', 'grant', 'scholarship', 'allowance', 'waste'],
      },
    ],
  },
  {
    slug: 'school',
    title: 'School vocabulary',
    h1: 'School and education vocabulary in English',
    blurb: 'Classrooms, homework, exams, and the words for subjects, teachers, and school life.',
    description:
      'Learn English school vocabulary: homework, exam, timetable, classroom, and more, with short meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'People and the day',
        ids: ['school', 'nursery', 'primary', 'secondary', 'college', 'university', 'academy', 'campus', 'classroom', 'teacher', 'headteacher', 'tutor', 'pupil', 'student', 'classmate', 'friend', 'parent', 'lesson', 'class', 'timetable', 'bell', 'break', 'lunchtime', 'assembly', 'term', 'holiday', 'year', 'form'],
      },
      {
        heading: 'Subjects and kit',
        ids: ['subject', 'english', 'maths', 'science', 'biology', 'chemistry', 'physics', 'history', 'geography', 'art', 'music', 'drama', 'sport', 'language', 'uniform', 'tie', 'workbook', 'exercise-book', 'notebook', 'pen', 'pencil', 'rubber', 'ruler', 'highlighter', 'whiteboard', 'blackboard', 'chalk', 'desk', 'chair', 'bag', 'rucksack', 'library', 'canteen', 'playground', 'field', 'gym', 'hall', 'office'],
      },
      {
        heading: 'Tests and behaviour',
        ids: ['homework', 'coursework', 'assignment', 'project', 'exam', 'test', 'quiz', 'mark', 'grade', 'result', 'pass', 'fail', 'revision', 'revise', 'report', 'degree', 'diploma', 'curriculum', 'register', 'attendance', 'absent', 'late', 'detention', 'bully', 'bullying'],
      },
    ],
  },
  {
    slug: 'health',
    title: 'Health vocabulary',
    h1: 'Health vocabulary in English',
    blurb: 'Doctors, hospitals, and the words for illness, the body, fitness, and getting better.',
    description:
      'Learn English health vocabulary: doctor, symptom, prescription, fitness, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Being well and unwell',
        ids: ['health', 'healthy', 'unhealthy', 'ill', 'sick', 'well', 'fit', 'fitness', 'exercise', 'diet', 'sleep', 'tired', 'exhausted', 'energy', 'calorie', 'obese', 'pain', 'ache', 'headache', 'stomachache', 'throat', 'cough', 'flu', 'fever', 'temperature', 'symptom', 'disease', 'illness', 'infection', 'virus', 'bacteria', 'germ'],
      },
      {
        heading: 'People and places',
        ids: ['doctor', 'nurse', 'hospital', 'clinic', 'surgery', 'ward', 'ambulance', 'emergency', 'chemist', 'prescription', 'medicine', 'pill', 'tablet', 'dose', 'appointment', 'waiting-room', 'dentist', 'counsellor', 'psychologist', 'surgeon', 'wheelchair', 'disabled', 'disability'],
      },
      {
        heading: 'Body and treatment',
        ids: ['heart', 'lung', 'brain', 'stomach', 'liver', 'kidney', 'bone', 'muscle', 'skin', 'blood', 'bleed', 'wound', 'cut', 'bruise', 'injury', 'broken', 'fracture', 'burn', 'allergy', 'asthma', 'cancer', 'mental', 'depression', 'anxiety', 'stress', 'therapy', 'vaccine', 'injection', 'operation', 'x-ray', 'scan', 'test', 'treatment', 'cure', 'heal', 'recover', 'recovery', 'hygiene', 'wash', 'soap', 'alcohol', 'drug', 'addiction', 'first-aid', 'bandage', 'plaster', 'plaster-cast'],
      },
    ],
  },
  {
    slug: 'environment',
    title: 'Environment vocabulary',
    h1: 'Environment and nature vocabulary in English',
    blurb: 'Climate, wildlife, and the words for pollution, recycling, and the natural world.',
    description:
      'Learn English environment vocabulary: climate, pollution, recycle, wildlife, and more, with meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Planet and climate',
        ids: ['environment', 'environmental', 'nature', 'natural', 'planet', 'earth', 'world', 'climate', 'greenhouse', 'carbon', 'emission', 'pollution', 'energy', 'solar', 'wind', 'nuclear', 'power', 'electricity', 'fuel', 'oil', 'coal', 'gas', 'sustainable', 'sustain', 'conservation', 'conserve', 'glacier', 'ice', 'melt', 'heatwave', 'storm', 'hurricane', 'flood', 'drought'],
      },
      {
        heading: 'Waste and energy',
        ids: ['waste', 'rubbish', 'litter', 'bin', 'recycle', 'recycling', 'recycle-bin', 'reduce', 'plastic', 'packaging', 'landfill', 'toxic', 'chemical', 'activist', 'protest', 'charity', 'campaign', 'policy', 'ban', 'tax', 'cycle', 'hybrid', 'offset', 'organic'],
      },
      {
        heading: 'Wildlife and landscapes',
        ids: ['wildlife', 'species', 'extinct', 'extinction', 'habitat', 'ecosystem', 'biodiversity', 'forest', 'deforestation', 'tree', 'wood', 'plant', 'flower', 'river', 'lake', 'ocean', 'sea', 'coast', 'beach', 'mountain', 'valley', 'desert', 'island', 'park', 'allotment', 'protect', 'animal', 'bird', 'insect', 'fish', 'mammal'],
      },
    ],
  },
  {
    slug: 'hobbies',
    title: 'Hobbies vocabulary',
    h1: 'Hobbies and free-time vocabulary in English',
    blurb: 'Music, films, games, and the words for clubs, crafts, and what people do after work.',
    description:
      'Learn English hobbies vocabulary: guitar, cinema, chess, gardening, and more, with short meanings and examples from A1 to C2.',
    groups: [
      {
        heading: 'Arts and going out',
        ids: ['hobby', 'leisure', 'interest', 'club', 'member', 'join', 'music', 'song', 'sing', 'singer', 'band', 'concert', 'festival', 'guitar', 'piano', 'violin', 'drum', 'instrument', 'orchestra', 'choir', 'listen', 'album', 'film', 'movie', 'cinema', 'actor', 'actress', 'director', 'scene', 'theatre', 'play', 'drama', 'ballet', 'opera', 'museum', 'gallery'],
      },
      {
        heading: 'Making and collecting',
        ids: ['art', 'artist', 'paint', 'painting', 'draw', 'drawing', 'sketch', 'photo', 'camera', 'book', 'read', 'novel', 'poem', 'poetry', 'story', 'author', 'writer', 'library', 'knit', 'knitting', 'craft', 'diy', 'collect', 'collection', 'stamp', 'coin', 'cook', 'bake', 'garden', 'garden-centre', 'allotment', 'plant', 'model', 'train-set', 'jigsaw', 'comic'],
      },
      {
        heading: 'Games and being active',
        ids: ['game', 'board-game', 'chess', 'video-game', 'console', 'crossword', 'dance', 'dancer', 'yoga', 'run', 'jog', 'cycle', 'cycling', 'swim', 'swimming', 'walk', 'hiking', 'hike', 'camp', 'camping', 'fish', 'fishing', 'volunteer', 'blog', 'television', 'series', 'radio', 'newspaper', 'magazine', 'kite', 'picnic', 'barbecue', 'party', 'celebrate'],
      },
    ],
  },
]

export function topicBySlug(slug) {
  return TOPICS.find((topic) => topic.slug === slug)
}

export function topicIds(topic) {
  return [...new Set(topic.groups.flatMap((group) => group.ids))]
}

export function topicWords(topic, level = 'all') {
  return topicIds(topic)
    .map((id) => WORD_BY_ID[id])
    .filter(Boolean)
    .filter((word) => level === 'all' || word.level === level)
}

export function topicsForWord(id) {
  return TOPICS.filter((topic) => topic.groups.some((group) => group.ids.includes(id)))
}

export function topicLabel(topic) {
  return topic.title.replace(/ vocabulary$/i, '')
}

export function topicLevelRange(topic) {
  const words = topicWords(topic)
  const present = LEVELS.filter((item) => words.some((word) => word.level === item))
  if (present.length > 1) return `${present[0]}–${present[present.length - 1]}`
  return present[0] || ''
}
