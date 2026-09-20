export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: 'tint' | 'audio' | 'speaker' | 'equipment'
  featured?: boolean
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  readTime: string
  tag: string
  featured?: boolean
}

export const business = {
  name: 'Автозвук, Тонировка',
  displayName: 'Автозвук, Тонування',
  city: 'Шостка',
  address: 'вулиця Партизан, 4, Шостка, Сумська область, 41100',
  shortAddress: 'вул. Партизан, 4 · Шостка',
  phone: '+380 66 288 7331',
  phoneHref: 'tel:+380662887331',
  hours: 'Пн–Сб · 09:00–16:00',
  rating: '4,3',
  reviewCount: '20 відгуків',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Автозвук%2C%20Тонировка%20Шостка',
  routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=вулиця%20Партизан%2C%204%2C%20Шостка%2C%20Сумська%20область%2C%2041100',
  mapEmbed: 'https://www.google.com/maps?q=вулиця%20Партизан%2C%204%2C%20Шостка%2C%20Сумська%20область%2C%2041100&output=embed',
}

export const images = {
  hero: 'https://images.pexels.com/photos/37809544/pexels-photo-37809544.jpeg?auto=compress&cs=tinysrgb&w=1800',
  workshop: 'https://images.pexels.com/photos/15489247/pexels-photo-15489247.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tinting: 'https://images.pexels.com/photos/31154212/pexels-photo-31154212.jpeg?auto=compress&cs=tinysrgb&w=1400',
  audio: 'https://images.pexels.com/photos/12175732/pexels-photo-12175732.jpeg?auto=compress&cs=tinysrgb&w=1400',
  audioDetail: 'https://images.pexels.com/photos/12959477/pexels-photo-12959477.jpeg?auto=compress&cs=tinysrgb&w=1200',
}

export const services: Service[] = [
  {
    slug: 'tonuvannya-avto',
    title: 'Тонування авто',
    short: 'Акуратне тонування скла під задачу вашого авто.',
    description: 'Розберемо, який формат тонування потрібен саме вам, і пояснимо деталі до початку роботи.',
    icon: 'tint',
    featured: true,
  },
  {
    slug: 'avtozvuk',
    title: 'Автозвук',
    short: 'Встановлення автозвуку та додаткового обладнання.',
    description: 'Допоможемо підібрати та встановити обладнання без зайвих рішень.',
    icon: 'audio',
  },
  {
    slug: 'akustyka',
    title: 'Встановлення акустики',
    short: 'Динаміки, підключення та акуратна інтеграція в салон.',
    description: 'Окремо працюємо з динаміками та акустичними компонентами.',
    icon: 'speaker',
  },
  {
    slug: 'dodatkove-obladnannya',
    title: 'Додаткове обладнання',
    short: 'Рішення для комфорту та захисту автомобіля.',
    description: 'Зателефонуйте, щоб уточнити сумісність обладнання з вашим авто.',
    icon: 'equipment',
  },
]

export const articles: Article[] = [
  {
    slug: 'yak-obrati-tonuvannya',
    title: 'Як обрати тонування для авто: що запитати до початку роботи',
    excerpt: 'Короткий практичний список питань про скло, плівку, світлопропускання та догляд після монтажу.',
    readTime: '6 хв читання',
    tag: 'Тонування',
    featured: true,
  },
  {
    slug: 'akustyka-v-avto',
    title: 'Що перевірити перед встановленням акустики',
    excerpt: 'Які дані про авто варто підготувати до розмови з майстром.',
    readTime: '3 хв читання',
    tag: 'Автозвук',
  },
  {
    slug: 'dodatkove-obladnannya',
    title: 'Додаткове обладнання: як не помилитися із сумісністю',
    excerpt: 'Питання, які допоможуть швидше визначити реальний обсяг робіт.',
    readTime: '4 хв читання',
    tag: 'Поради',
  },
]

export const review = {
  author: 'Roman',
  source: 'Google Maps',
  quote: 'Отримав якісну роботу, сервіс та гарантію. Тонував задні стекла в авто. Встановив динаміки у багажник. Рекомендую.',
}

export const tintingFaq = [
  {
    question: 'З чого починається робота?',
    answer: 'Спочатку уточнюємо модель авто, стан скла та вашу задачу. Після цього погоджуємо формат роботи й час запису.',
  },
  {
    question: 'Чи можна записатися телефоном?',
    answer: 'Так. Основний канал зв’язку — телефон майстерні: +380 66 288 7331.',
  },
  {
    question: 'Що потрібно повідомити під час запису?',
    answer: 'Назвіть марку й модель авто, які саме стекла потрібно затонувати, та зручний день в межах графіка Пн–Сб, 09:00–16:00.',
  },
  {
    question: 'Чи є на сайті ціни?',
    answer: 'Ні. Вартість залежить від автомобіля та обсягу робіт, тому її коректно уточнити після короткої консультації.',
  },
]
