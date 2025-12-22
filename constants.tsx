import { Service, PortfolioItem, Value, BlogPost } from './types';

export interface Benefit {
  id: string;
  title: { en: string; fr: string; ru: string };
  description: { en: string; fr: string; ru: string };
  icon: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: 'ben-1',
    title: { 
      en: 'Peace of Mind (Insured & Bonded)', 
      fr: 'Tranquillité d\'Esprit (Assuré et Garanti)',
      ru: 'Полное Спокойствие (Страхование и Гарантии)'
    },
    description: {
      en: 'We are fully bonded, licensed, and insured for your protection. This ensures that you, your property, and our staff are covered.',
      fr: 'Nous sommes entièrement garantis, licenciés et assurés pour votre protection. Cela garantit que vous, votre propriété et notre personnel êtes couverts.',
      ru: 'Мы полностью лицензированы и застрахованы. Это гарантирует защиту вас, вашего имущества и нашего персонала.'
    },
    icon: 'ShieldCheck'
  }
];

export const SERVICES: Service[] = [
  // SPECIALIZED (5)
  {
    id: 'spec-1',
    title: { en: 'Luxury Car Detailing', fr: 'Lavage Auto de Luxe', ru: 'Люксовый Детейлинг Авто' },
    description: { en: 'Premium mobile detailing and interior restoration for high-end vehicles.', fr: 'Détails mobiles haut de gamme et restauration intérieure.', ru: 'Премиальный мобильный детейлинг для люксовых автомобилей.' },
    detailedDescription: { en: 'Surgical-grade care for elite vehicles using pH-neutral chemicals and non-abrasive techniques.', fr: 'Soins de qualité chirurgicale pour véhicules d\'élite.', ru: 'Профессиональный уход за элитными авто с использованием pH-нейтральных средств.' },
    icon: 'Car',
    category: 'Specialized',
    includedTasks: { en: ['Ceramic Coating', 'Steam Sanitization'], fr: ['Revêtement céramique', 'Bio-stérilisation'], ru: ['Керамическое покрытие', 'Паровая дезинфекция'] },
    specifications: { en: ['Scratch-free guarantee'], fr: ['Garantie sans rayures'], ru: ['Гарантия отсутствия царапин'] }
  },
  {
    id: 'spec-2',
    title: { en: 'Private Jet Detailing', fr: 'Entretien de Jet Privé', ru: 'Детейлинг Частных Самолетов' },
    description: { en: 'Aviation-grade cabin sanitation and exterior polishing.', fr: 'Assainissement de cabine de qualité aéronautique.', ru: 'Авиационная санитария кабин и полировка фюзеляжа.' },
    detailedDescription: { en: 'Precision detailing for private aircraft, ensuring immaculate cabin environments and drag-reducing exterior finishes.', fr: 'Détails de précision pour les avions privés.', ru: 'Прецизионный детейлинг для частной авиации, обеспечивающий безупречную чистоту кабины.' },
    icon: 'Plane',
    category: 'Specialized',
    includedTasks: { en: ['Cabin Sterilization', 'Brightwork Polishing'], fr: ['Stérilisation cabine', 'Polissage métaux'], ru: ['Стерилизация кабины', 'Полировка металла'] },
    specifications: { en: ['FAA/EASA standards'], fr: ['Normes FAA/EASA'], ru: ['Стандарты FAA/EASA'] }
  },
  {
    id: 'spec-3',
    title: { en: 'Clinic Bio-Sanitation', fr: 'Bio-Assainissement Clinique', ru: 'Био-санитария Клиник' },
    description: { en: 'Hospital-grade disinfection for medical facilities.', fr: 'Désinfection de qualité hospitalière.', ru: 'Больничная дезинфекция для медицинских учреждений.' },
    detailedDescription: { en: 'Zero-tolerance pathogen control for surgical environments and diagnostic labs.', fr: 'Contrôle des agents pathogènes tolérance zéro.', ru: 'Нулевая терпимость к патогенам в операционных и лабораториях.' },
    icon: 'Activity',
    category: 'Specialized',
    includedTasks: { en: ['UV-C Sterilization', 'Terminal Cleaning'], fr: ['Stérilisation UV-C', 'Nettoyage terminal'], ru: ['УФ-стерилизация', 'Терминальная уборка'] },
    specifications: { en: ['ATP testing certified'], fr: ['Certifié tests ATP'], ru: ['Сертифицированные ATP-тесты'] }
  },
  {
    id: 'spec-4',
    title: { en: 'Data Center Sterilization', fr: 'Stérilisation de Data Center', ru: 'Стерилизация Дата-центров' },
    description: { en: 'Technical cleaning for server environments and cleanrooms.', fr: 'Nettoyage technique pour environnements serveurs.', ru: 'Техническая чистка серверных и чистых помещений.' },
    detailedDescription: { en: 'Removing micro-particulates that threaten high-availability hardware through specialized sub-floor vacuuming.', fr: 'Élimination des micro-particules pour le matériel.', ru: 'Удаление микрочастиц, угрожающих оборудованию, через вакуумацию подпола.' },
    icon: 'Server',
    category: 'Specialized',
    includedTasks: { en: ['Anti-static Cleaning', 'Sub-floor Vacuuming'], fr: ['Nettoyage antistatique', 'Aspiration faux plancher'], ru: ['Антистатическая чистка', 'Вакуумация подполья'] },
    specifications: { en: ['ISO 14644-1 compliant'], fr: ['Conforme ISO 14644-1'], ru: ['Соответствие ISO 14644-1'] }
  },
  {
    id: 'spec-5',
    title: { en: 'Event Venue Transformation', fr: 'Transformation de Lieux d\'Événement', ru: 'Подготовка Площадок' },
    description: { en: 'Rapid-response pre and post-event restoration.', fr: 'Restauration rapide avant et après événement.', ru: 'Быстрое восстановление площадок до и после мероприятий.' },
    detailedDescription: { en: 'Ensuring elite venues are returned to pristine condition within hours of large-scale corporate or private galas.', fr: 'Remise en état impeccable des lieux d\'élite.', ru: 'Возвращение элитных площадок в идеальное состояние после гала-концертов.' },
    icon: 'Sparkles',
    category: 'Specialized',
    includedTasks: { en: ['Odor Neutralization', 'Surface Buffing'], fr: ['Neutralisation d\'odeurs', 'Lustrage'], ru: ['Нейтрализация запахов', 'Полировка поверхностей'] },
    specifications: { en: ['24h Turnaround'], fr: ['Délai de 24h'], ru: ['Готовность за 24 часа'] }
  },

  // COMMERCIAL (5)
  {
    id: 'com-1',
    title: { en: 'Expert Office Cleaning', fr: 'Nettoyage de Bureau Expert', ru: 'Экспертная Уборка Офисов' },
    description: { en: 'Tailored sanitation for professional work environments.', fr: 'Assainissement sur mesure pour bureaux.', ru: 'Индивидуальная санитария для офисов.' },
    detailedDescription: { en: 'Ergonomic health focused cleaning that reduces employee sick leave and boosts productivity.', fr: 'Nettoyage axé sur la santé ergonomique.', ru: 'Уборка, ориентированная на здоровье сотрудников и продуктивность.' },
    icon: 'Briefcase',
    category: 'Commercial',
    includedTasks: { en: ['HEPA Vacuuming', 'Desk Sterilization'], fr: ['Aspiration HEPA', 'Stérilisation bureaux'], ru: ['HEPA-фильтрация', 'Стерилизация столов'] },
    specifications: { en: ['Non-toxic agents'], fr: ['Agents non toxiques'], ru: ['Нетоксичные средства'] }
  },
  {
    id: 'com-2',
    title: { en: 'Post-Construction Recovery', fr: 'Remise en état Après Chantier', ru: 'Послестроительная Уборка' },
    description: { en: 'Final detailing for luxury architectural projects.', fr: 'Détails finaux pour projets architecturaux.', ru: 'Финишная отделка люксовых архитектурных проектов.' },
    detailedDescription: { en: 'Removing construction debris, dust, and residue from all surfaces to reveal the intended architectural finish.', fr: 'Élimination des débris et de la poussière.', ru: 'Удаление строительного мусора и пыли для открытия финишной отделки.' },
    icon: 'HardHat',
    category: 'Commercial',
    includedTasks: { en: ['Adhesive Removal', 'Fine Dust Extraction'], fr: ['Retrait d\'adhésifs', 'Extraction poussière'], ru: ['Удаление клея', 'Удаление мелкодисперсной пыли'] },
    specifications: { en: ['Inspection Ready'], fr: ['Prêt pour inspection'], ru: ['Готовность к инспекции'] }
  },
  {
    id: 'com-3',
    title: { en: 'Facade & High-Rise Glazing', fr: 'Façade et Vitrage de Grande Hauteur', ru: 'Мойка Фасадов и Витражей' },
    description: { en: 'Pure water window cleaning for corporate towers.', fr: 'Nettoyage de vitres à l\'eau pure pour tours.', ru: 'Мойка окон чистой водой для бизнес-центров.' },
    detailedDescription: { en: 'High-access cleaning using specialized rope access and telescopic water-fed poles.', fr: 'Nettoyage en hauteur par accès sur corde.', ru: 'Высотная мойка с использованием промышленного альпинизма.' },
    icon: 'Building',
    category: 'Commercial',
    includedTasks: { en: ['Rope Access Cleaning', 'Mineral Deposit Removal'], fr: ['Nettoyage par cordes', 'Retrait dépôts'], ru: ['Промышленный альпинизм', 'Удаление отложений'] },
    specifications: { en: ['Safety Harness Certified'], fr: ['Certifié harnais sécurité'], ru: ['Сертифицированная страховка'] }
  },
  {
    id: 'com-4',
    title: { en: 'Luxury Boutique Polish', fr: 'Polissage de Boutique de Luxe', ru: 'Блеск Люксовых Бутиков' },
    description: { en: 'High-gloss maintenance for retail landmarks.', fr: 'Entretien brillant pour enseignes de luxe.', ru: 'Высокоглянцевый уход для флагманских бутиков.' },
    detailedDescription: { en: 'Preserving the mirror finish of marble floors and metallic accents in elite retail environments.', fr: 'Préservation du fini miroir du marbre.', ru: 'Сохранение зеркального блеска мраморных полов и металла в бутиках.' },
    icon: 'ShoppingBag',
    category: 'Commercial',
    includedTasks: { en: ['Glass Display Buffing', 'Brass Polishing'], fr: ['Lustrage vitrines', 'Polissage laiton'], ru: ['Полировка витрин', 'Полировка латуни'] },
    specifications: { en: ['After-hours service'], fr: ['Service après-vente'], ru: ['Обслуживание в нерабочие часы'] }
  },
  {
    id: 'com-5',
    title: { en: 'Kitchen & Grease Extraction', fr: 'Cuisine et Extraction de Graisse', ru: 'Кухонная Вытяжка и Жир' },
    description: { en: 'Deep sanitation for commercial culinary hubs.', fr: 'Assainissement profond pour centres culinaires.', ru: 'Глубокая санитария для ресторанных кухонь.' },
    detailedDescription: { en: 'Fire-safe degreasing of ductwork and surgical cleaning of food preparation surfaces.', fr: 'Dégraissage des conduits coupe-feu.', ru: 'Пожаробезопасное обезжиривание воздуховодов и чистка поверхностей.' },
    icon: 'ChefHat',
    category: 'Commercial',
    includedTasks: { en: ['Duct Degreasing', 'Tile Deep Scrub'], fr: ['Dégraissage conduits', 'Lavage carrelage'], ru: ['Обезжиривание вытяжки', 'Чистка плитки'] },
    specifications: { en: ['NFPA 96 Standards'], fr: ['Normes NFPA 96'], ru: ['Стандарты NFPA 96'] }
  },

  // INDUSTRIAL (4 including Sewage logic)
  {
    id: 'ind-1',
    title: { en: 'Industrial Decontamination', fr: 'Décontamination Industrielle', ru: 'Промышленная Дезактивация' },
    description: { en: 'Heavy-duty cleaning for factories and logistic hubs.', fr: 'Nettoyage intensif pour usines.', ru: 'Тяжелая уборка для заводов и складов.' },
    detailedDescription: { en: 'Engineered for safety and compliance. We handle heavy machinery degreasing and hazardous site restoration.', fr: 'Conçu pour la sécurité et la conformité.', ru: 'Обезжиривание тяжелого оборудования и восстановление участков.' },
    icon: 'Factory',
    category: 'Industrial',
    includedTasks: { en: ['Machine Degreasing', 'Floor Scrubbing'], fr: ['Dégraissage machine', 'Lavage sols'], ru: ['Обезжиривание машин', 'Скраббинг полов'] },
    specifications: { en: ['OSHA Compliant'], fr: ['Conforme OSHA'], ru: ['Соответствие OSHA'] }
  },
  {
    id: 'ind-2',
    title: { en: 'Solar Farm Maintenance', fr: 'Entretien de Parc Solaire', ru: 'Обслуживание Солнечных Ферм' },
    description: { en: 'Robotic cleaning for maximum energy efficiency.', fr: 'Nettoyage robotisé pour l\'efficacité énergétique.', ru: 'Роботизированная мойка для макс. эффективности.' },
    detailedDescription: { en: 'Removing Sahelian dust and organic buildup from PV panels to ensure optimal photon absorption.', fr: 'Retrait de la poussière sahélienne.', ru: 'Удаление пыли Сахеля с панелей для оптимального поглощения энергии.' },
    icon: 'Sun',
    category: 'Industrial',
    includedTasks: { en: ['Deionized Water Wash', 'Inspection Report'], fr: ['Lavage eau деionisée', 'Rapport d\'inspection'], ru: ['Мойка деионизированной водой', 'Инспекция'] },
    specifications: { en: ['Zero Residue Guarantee'], fr: ['Garantie zéro résidu'], ru: ['Гарантия отсутствия налета'] }
  },
  {
    id: 'ind-3',
    title: { en: 'Logistic Cold-Chain Hygiene', fr: 'Hygiène de la Chaîne du Froid', ru: 'Гигиена Холодовой Цепи' },
    description: { en: 'Sanitation for cold storage and warehouse facilities.', fr: 'Assainissement pour entrepôts frigorifiques.', ru: 'Санитария для холодильных складов.' },
    detailedDescription: { en: 'Sub-zero sanitation protocols to prevent microbial growth in temperature-controlled food storage.', fr: 'Protocoles d\'assainissement sous zéro.', ru: 'Санитарные протоколы для работы при отрицательных температурах.' },
    icon: 'Truck',
    category: 'Industrial',
    includedTasks: { en: ['Anti-freeze Cleaning', 'Mold Remediation'], fr: ['Nettoyage antigel', 'Traitement moisissure'], ru: ['Мойка незамерзайкой', 'Удаление плесени'] },
    specifications: { en: ['HACCP Compliant'], fr: ['Conforme HACCP'], ru: ['Соответствие HACCP'] }
  },
  {
    id: 'sew-1', 
    title: { en: 'Waste-to-Gas Management', fr: 'Gestion Déchets-en-Gaz', ru: 'Утилизация Отходов в Газ' },
    description: { en: 'Transforming sewage into renewable domestic energy.', fr: 'Transformer les eaux usées en énergie.', ru: 'Превращение сточных вод в энергию.' },
    detailedDescription: { en: 'Our signature circular economy service using anaerobic digestion to produce purified biogas.', fr: 'Service d\'économie circulaire signature.', ru: 'Наш флагманский сервис по производству биогаза.' },
    icon: 'Zap',
    category: 'Industrial',
    includedTasks: { en: ['Vacuum Extraction', 'Bio-Processing'], fr: ['Extraction sous vide', 'Bio-traitement'], ru: ['Вакуумная экстракция', 'Биообработка'] },
    specifications: { en: ['Certified Circularity'], fr: ['Circularité certifiée'], ru: ['Сертифицированная цикличность'] }
  },

  // RESIDENTIAL (3)
  {
    id: 'res-1',
    title: { en: 'Deep Home Sanctuary', fr: 'Sanctuaire Résidentiel', ru: 'Глубокая Уборка Дома' },
    description: { en: 'Comprehensive restoration of luxury living spaces.', fr: 'Restauration complète d\'espaces de luxe.', ru: 'Комплексное восстановление элитных домов.' },
    detailedDescription: { en: 'White-glove deep clean focusing on fine materials like marble, hardwood, and silk wall coverings.', fr: 'Nettoyage en gants blancs pour matériaux fins.', ru: 'Глубокая уборка элитных материалов: мрамора, дерева и шелка.' },
    icon: 'Home',
    category: 'Residential',
    includedTasks: { en: ['Marble Polishing', 'Intricate Dusting'], fr: ['Polissage marbre', 'Époussetage délicat'], ru: ['Полировка мрамора', 'Детальная чистка'] },
    specifications: { en: ['Pet-friendly chemicals'], fr: ['Produits pour animaux'], ru: ['Безопасно для питомцев'] }
  },
  {
    id: 'res-2',
    title: { en: 'Upholstery & Fine Fabric Care', fr: 'Soin des Tissus Fins', ru: 'Уход за Тканями и Мебелью' },
    description: { en: 'Specialized cleaning for designer furniture and carpets.', fr: 'Nettoyage spécialisé pour meubles design.', ru: 'Специальная чистка дизайнерской мебели и ковров.' },
    detailedDescription: { en: 'Steam and dry extraction methods that protect high-fashion textiles and natural fibers.', fr: 'Méthodes d\'extraction à la vapeur et à sec.', ru: 'Методы паровой и сухой экстракции для защиты натуральных волокон.' },
    icon: 'Wind',
    category: 'Residential',
    includedTasks: { en: ['Silk Rug Cleaning', 'Leather Treatment'], fr: ['Nettoyage tapis soie', 'Soin du cuir'], ru: ['Чистка шелковых ковров', 'Уход за кожей'] },
    specifications: { en: ['Zero shrinkage guarantee'], fr: ['Garantie zéro rétrécissement'], ru: ['Гарантия отсутствия усадки'] }
  },
  {
    id: 'res-3',
    title: { en: 'Estate Pool & Water Care', fr: 'Entretien Piscine et Eaux', ru: 'Уход за Бассейнами Усадьб' },
    description: { en: 'Chemical balance and structural sanitation for private pools.', fr: 'Équilibre chimique et assainissement piscine.', ru: 'Химический баланс и санитария частных бассейнов.' },
    detailedDescription: { en: 'Advanced water testing and structural scrubbing to maintain crystal clear architectural water features.', fr: 'Tests d\'eau avancés et récurage structurel.', ru: 'Тестирование воды и чистка чаш для кристальной чистоты.' },
    icon: 'Droplets',
    category: 'Residential',
    includedTasks: { en: ['Algae Remediation', 'pH Balancing'], fr: ['Traitement algues', 'Équilibre pH'], ru: ['Удаление водорослей', 'Баланс pH'] },
    specifications: { en: ['Weekly Health Report'], fr: ['Rapport santé hebdo'], ru: ['Еженедельный отчет'] }
  }
];

export const VALUES: Value[] = [
  {
    title: { en: 'Radical Transparency', fr: 'Transparence Radicale', ru: 'Радикальная Прозрачность' },
    description: { en: 'Open pricing and live visual proof of work via our app.', fr: 'Tarification ouverte et preuve visuelle via notre application.', ru: 'Открытое ценообразование и визуальное подтверждение работы.' },
    icon: 'Eye'
  },
  {
    title: { en: 'Surgical Precision', fr: 'Précision Chirurgicale', ru: 'Хирургическая Точность' },
    description: { en: 'Every movement is calculated to ensure zero trace of contaminants.', fr: 'Chaque mouvement est calculé pour garantir zéro trace de contaminants.', ru: 'Кажвое движение рассчитано для обеспечения нулевого следа загрязнений.' },
    icon: 'Target'
  },
  {
    title: { en: 'Eco-Luxe Technology', fr: 'Technologie Éco-Luxe', ru: 'Эко-Люкс Технологии' },
    description: { en: 'We use premium biodegradable agents that protect both surfaces and the planet.', fr: 'Nous utilisons des agents biodégradables de qualité supérieure.', ru: 'Мы используем биоразлагаемые средства премиум-класса.' },
    icon: 'Leaf'
  },
  {
    title: { en: 'Absolute Reliability', fr: 'Fiabilité Absolue', ru: 'Абсолютная Надежность' },
    description: { en: '24/7 dedicated response teams for West Africa\'s most prestigious landmarks.', fr: 'Équipes d\'intervention dédiées 24h/24 et 7j/7.', ru: 'Круглосуточные группы реагирования для самых престижных объектов.' },
    icon: 'ShieldCheck'
  },
  {
    title: { en: 'Artisanal Heritage', fr: 'Héritage Artisanal', ru: 'Ремесленное Наследие' },
    description: { en: 'Combining traditional care techniques with modern chemical engineering.', fr: 'Alliant techniques de soins traditionnelles et génie chimique moderne.', ru: 'Сочетание традиционных методов ухода с современной химией.' },
    icon: 'Award'
  },
  {
    title: { en: 'Digital Traceability', fr: 'Traçabilité Numérique', ru: 'Цифровая Прослеживаемость' },
    description: { en: 'Full digital audit trail of every sanitation cycle for compliance.', fr: 'Piste d\'audit numérique complète de chaque cycle d\'assainissement.', ru: 'Полный цифровой аудит каждого цикла санитарной обработки.' },
    icon: 'Fingerprint'
  },
  {
    title: { en: 'Biological Integrity', fr: 'Intégrité Биологическая', ru: 'Биологическая Целостность' },
    description: { en: 'Restoring surfaces to their original biological state without wear.', fr: 'Restaurer les surfaces à leur état biologique d\'origine sans usure.', ru: 'Восстановление поверхностей до их первоначального состояния.' },
    icon: 'Zap'
  }
];

export const TESTIMONIALS = [
  { 
    id: 1, 
    name: "Mamadou Traoré", 
    role: "Property Manager", 
    text: { en: "Unmatched precision. Their attention to architectural detail is surgical.", fr: "Précision inégalée. Leur attention aux détails architecturaux est chirurgicale.", ru: "Несравненная точность. Их внимание к архитектурным деталям просто хирургическое." } 
  },
  { 
    id: 2, 
    name: "Sarah Kone", 
    role: "Luxury Retail Director", 
    text: { en: "The only service in Abidjan that understands high-fashion requirements.", fr: "Le seul service à Abidjan qui comprend les exigences de la haute couture.", ru: "Единственный сервис в Абиджане, который понимает требования высокой моды." } 
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: { en: 'Corporate Tower - Plateau', fr: 'Tour d\'Affaires - Plateau', ru: 'Бизнес-центр - Плато' },
    location: 'Plateau, Abidjan',
    description: { en: 'Full-scale janitorial management for a 25-story landmark.', fr: 'Gestion complète d\'un repère de 25 étages.', ru: 'Полное управление чистотой 25-этажного здания.' },
    results: { en: 'Gold Certified Hygiene', fr: 'Certifié Hygiène Or', ru: 'Сертификат гигиены Gold' },
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    category: 'Commercial'
  },
  {
    id: 'p2',
    title: { en: 'Luxury Estate Cocody', fr: 'Domaine de Luxe Cocody', ru: 'Люксовое Поместье Кокоди' },
    location: 'Cocody, Abidjan',
    description: { en: 'Detailed restoration of artisanal marble and imported wood finishes.', fr: 'Restauration détaillée du marbre et du bois importé.', ru: 'Восстановление мрамора и импортной отделки из дерева.' },
    results: { en: 'Pristine Heritage Preservation', fr: 'Préservation du Patrimoine', ru: 'Сохранение первозданного вида' },
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    category: 'Residential'
  },
  {
    id: 'p3',
    title: { en: 'International Airport Hub', fr: 'Hub Aéroportuaire International', ru: 'Международный Аэропорт' },
    location: 'Abidjan Airport (ABJ)',
    description: { en: 'High-traffic sanitation and specialized terminal restoration.', fr: 'Assainissement à haut trafic et restauration de terminal.', ru: 'Санитария зон высокой проходимости и реставрация терминалов.' },
    results: { en: 'International Aviation Standard', fr: 'Norme Aviation Internationale', ru: 'Стандарт международной авиации' },
    imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800',
    category: 'Specialized'
  },
  {
    id: 'p4',
    title: { en: 'Logistics Warehouse Delta', fr: 'Entrepôt Logistique Delta', ru: 'Логистический Склад Дельта' },
    location: 'Vridi Industrial Zone',
    description: { en: 'Industrial-grade deep clean for a 10,000m2 cold storage facility.', fr: 'Nettoyage intensif pour entrepôt frigorifique de 10 000 m2.', ru: 'Промышленная уборка холодильного склада площадью 10 000 м2.' },
    results: { en: 'Full Compliance Audit Pass', fr: 'Audit de Conformité Réussi', ru: 'Успешный аудит соответствия' },
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    category: 'Industrial'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: { en: 'Hygiene & Productivity', fr: 'Hygiène et Productivité', ru: 'Гигиена и Продуктивность' },
    excerpt: { en: 'Clean offices win.', fr: 'Les bureaux propres gagnent.', ru: 'Чистые офисы побеждают.' },
    date: 'Mar 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    author: 'Admin'
  }
];