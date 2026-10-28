/**
 * Central content for the Helping Hand Foundation (HHF) demo site.
 *
 * Facts come from helpinghandf.org and press coverage linked in `press`.
 * Re-confirm all figures with the HHF team before launch. Anything marked
 * `demo` is illustrative placeholder content written for this concept.
 */

export const org = {
  name: 'Helping Hand Foundation',
  short: 'HHF',
  tagline: 'Uplifting individuals through healthcare & education',
  motto: 'A hand of help to all',
  founded: 2007,
  founder: 'Mujtaba Hasan Askari',
  regNo: 'Registered charitable trust · 80G',
  email: 'info@helpinghandf.org',
  phone: '+91 97047 64906',
  phoneHref: 'tel:+919704764906',
  phone2: '+91 81216 01990',
  whatsapp: 'https://wa.me/919704764906',
  cataractHelpline: '72075 38605',
  address: '#6-9-14/3/6/200/A, Opp. Pillar No. 270, PVNR Expressway, Indira Nagar Colony, Shivrampally, Rajendranagar, Hyderabad, Telangana 500052',
  mapsHref: 'https://maps.app.goo.gl/wTohkGZPwHpwivEu9',
  bloodDonorHref: 'https://hhf-erp.vercel.app/public/blood-bank/register',
  documentaryHref: 'https://www.youtube.com/watch?v=NqBbKxthMcc',
  reportsHref: 'https://helpinghandf.org/annual-reports/',
  bank: { name: 'ICICI Bank', branch: 'Mehdipatnam, Hyderabad', account: '024505004570', ifsc: 'ICIC0000245', pan: 'AAATH 8592E' },
  socials: [
    { label: 'Facebook', handle: '@helpinghandf.hyd', href: 'https://www.facebook.com/helpinghandf.hyd', blurb: 'Updates, events and appeals' },
    { label: 'Instagram', handle: '@helpinghandf_hyd', href: 'https://www.instagram.com/helpinghandf_hyd/', blurb: 'Stories and moments from the field' },
    { label: 'YouTube', handle: '@HelpingHandFoundationHyderabad', href: 'https://www.youtube.com/@HelpingHandFoundationHyderabad', blurb: 'Documentaries and patient stories' },
    { label: 'X', handle: '@HelpingHandHyd', href: 'https://twitter.com/HelpingHandHyd', blurb: 'News and quick updates' },
    { label: 'LinkedIn', handle: 'Helping Hand Foundation', href: 'https://www.linkedin.com/company/helping-hand-foundation-hyd', blurb: 'Partnerships, careers and impact' },
    { label: 'WhatsApp', handle: '+91 97047 64906', href: 'https://wa.me/919704764906', blurb: 'Chat with the HHF team' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Work', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
]

const img = (name: string) => `/images/${name}`

export const images = {
  heroFamily: img('hero-family.jpg'),
  heroMotherBaby: img('hero-mother-baby.jpg'),
  familyPortrait: img('family-portrait.jpg'),
  schoolgirls: img('schoolgirls.jpg'),
  classroomGirls: img('classroom-girls.jpg'),
  boysPortrait: img('boys-portrait.jpg'),
  boysLaughing: img('boys-laughing.jpg'),
  elderPortrait: img('elder-portrait.jpg'),
  eldersWard: img('elders-ward.jpg'),
  agedHome: img('aged-home.jpg'),
  agedWomen: img('aged-women.jpg'),
  palliative: img('palliative.jpg'),
  chc: img('chc.jpg'),
  chcLab: img('chc-lab.jpg'),
  eyeScreening: img('eye-screening.jpg'),
  childCheckup: img('child-checkup.jpg'),
  bpCheck: img('bp-check.jpg'),
  triage: img('triage.jpg'),
  reception: img('reception.jpg'),
  ncdScreening: img('ncd-screening.jpg'),
  ruralClinic: img('rural-clinic.jpg'),
  ruralCamp: img('rural-camp.jpg'),
  helpdeskTeam: img('helpdesk-team.jpg'),
  helpdeskPatient: img('helpdesk-patient.jpg'),
  helpdeskEye: img('helpdesk-eye.jpg'),
  patientCare: img('patient-care.jpg'),
  patientCare2: img('patient-care-2.jpg'),
  zeroCost: img('zero-cost.jpg'),
  dialysis: img('dialysis.jpg'),
  paediatric: img('paediatric.jpg'),
  telemedicine: img('telemedicine.jpg'),
  ambulance: img('ambulance.jpg'),
  ambulance2: img('ambulance-2.jpg'),
  prajaDarbar: img('praja-darbar.jpg'),
  commandCentre: img('command-centre.jpg'),
  schoolKids: img('school-kids.jpg'),
  bridgeSchool: img('bridge-school.jpg'),
  schoolBw: img('school-bw.jpg'),
  bhaskar: img('bhaskar.jpg'),
  nimsMou: img('nims-mou.jpg'),
  founder: img('founder.jpg'),
  rehabCentre: img('rehab-centre.jpg'),
}

/** "Achievements 2025" figures from the helpinghandf.org homepage. */
export const publishedStats = [
  { value: 1000000, suffix: '', label: 'Lives touched this year', display: '1 Million' },
  { value: 400, suffix: '+', label: 'Staff & volunteers' },
  { value: 20, suffix: '', label: 'Primary health care centres' },
  { value: 5172, suffix: '+', label: 'Free dialysis sessions this year' },
  { value: 17, suffix: '+', label: 'Help desks in government hospitals' },
] as { value: number; suffix: string; label: string; display?: string }[]

export const savings = [
  { value: '₹20 Cr', label: 'saved in out-of-pocket costs each year through hospital help desks', note: '1.5 lakh patients a year' },
  { value: '₹17 Cr', label: 'saved each year through free primary care', note: '4–5 lakh patients a year' },
  { value: '₹5.99 Cr', label: 'saved through 19,980 free dialysis sessions', note: 'HHF Free Dialysis Centre' },
  { value: '₹90 L', label: 'to be saved each year on 600 free cataract surgeries', note: 'With Akbar Eye Hospital' },
]

export const inclusivity = ['Cancer patients', 'TB survivors', 'People living with HIV', 'Polio survivors', 'Paraplegics', 'The blind', 'Widows', 'Orphans', 'The physically challenged']

export const hospitals = [
  'Osmania General Hospital',
  'Gandhi General Hospital',
  'Nizam’s Institute of Medical Sciences (NIMS)',
  'District Hospital, King Koti',
  'Govt. General & Chest Hospital',
  'MNJ Cancer Hospital',
  'Niloufer Women & Children Hospital',
  'Govt. ENT Hospital',
  'Modern Govt. Maternity Hospital',
  'Mamidipudi Nagarjuna Area Hospital',
  'Community Health Centre, Barkas',
  'Govt. Maternity Hospital',
  'Golconda Area Hospital',
  'Govt. General Hospital, Khammam',
  'Mahatma Gandhi Memorial Hospital',
  'Sarojini Devi Eye Hospital',
]

export type Program = {
  slug: string
  number: string
  title: string
  short: string
  summary: string
  stat: { value: string; label: string }
  image: string
  imageAlt: string
  gallery: { src: string; alt: string }[]
  body: { heading: string; text: string }[]
  highlights: string[]
}

export const programs: Program[] = [
  {
    slug: 'urban-primary-healthcare',
    number: '01',
    title: 'Community Health Centres',
    short: '20 neighbourhood health centres in Hyderabad’s most vulnerable slums — consultations, labs, pharmacy and specialists at no cost.',
    summary:
      'Located inside the neighbourhoods they serve, HHF’s Community Health Centres bring promotive, preventive, curative and rehabilitative care as close to the urban poor as possible — without financial hardship.',
    stat: { value: '20', label: 'centres in urban slums' },
    image: images.chc,
    imageAlt: 'Patients waiting at an HHF Community Health Centre',
    gallery: [
      { src: images.eyeScreening, alt: 'A doctor conducting an eye screening at a community health centre' },
      { src: images.childCheckup, alt: 'A doctor examining a young child' },
    ],
    body: [
      { heading: 'Care inside the community', text: 'With partners SEED-USA, AMPI-USA, Lean Foundation-USA, Child Aid International Canada and Wipro Cares, HHF promotes Universal Health Care as mandated by the WHO.' },
      { heading: 'More than a clinic', text: 'Outpatient consultations are backed by laboratory diagnostics, pharmacy services, routine screenings and prompt follow-up for early detection.' },
      { heading: 'Specialists close to home', text: 'General medicine, gynaecology, dental and ophthalmology services, X-ray facilities and physiotherapy units — with inpatient and day-care units at some centres.' },
    ],
    highlights: ['20 centres', '4–5 lakh patients a year', 'Labs & pharmacy', 'Specialist clinics'],
  },
  {
    slug: 'hospital-help-desks',
    number: '02',
    title: 'Help Desks in Government Hospitals',
    short: 'Trained counsellors at 17 state-run hospitals guide patients through registration, tests and treatment — for free.',
    summary:
      'For many families, a large public hospital is overwhelming. HHF’s help desks are the first point of support — helping patients navigate the system with ease and dignity, and steering them away from costly private care.',
    stat: { value: '1.5 lakh', label: 'patients helped each year' },
    image: images.helpdeskTeam,
    imageAlt: 'HHF help desk counsellors standing at their desk in a government hospital',
    gallery: [
      { src: images.patientCare, alt: 'HHF patient care coordinators with a family on a hospital ward' },
      { src: images.helpdeskEye, alt: 'The HHF help desk at Sarojini Devi Eye Hospital' },
    ],
    body: [
      { heading: 'From the moment patients arrive', text: 'Teams assist with outpatient registration, department navigation, mobility and consultation coordination — explaining documents and processes that can feel impossible to follow alone.' },
      { heading: 'Zero-cost treatment', text: 'The 17 help desks benefit around 1.5 lakh patients a year, saving families an estimated ₹20 crore in out-of-pocket expenses.' },
      { heading: 'Trusted by major hospitals', text: 'In 2025 HHF signed an MoU with NIMS for six help desks, and opened a desk at Sarojini Devi Eye Hospital that supports 200–300 patients daily.' },
    ],
    highlights: ['17 hospitals', '₹20 Cr saved yearly', '100+ counsellors', 'NIMS MoU'],
  },
  {
    slug: 'free-dialysis',
    number: '03',
    title: 'Free Dialysis Centre',
    short: 'A fully free, state-of-the-art hemodialysis centre with 10 machines — 19,980 sessions and counting.',
    summary:
      'For low-income families, kidney failure is a financial catastrophe as well as a health crisis. HHF’s dialysis centre gives patients — many of them young breadwinners — life-saving treatment at zero cost.',
    stat: { value: '19,980', label: 'free sessions so far' },
    image: images.dialysis,
    imageAlt: 'A patient receiving dialysis while a nurse checks the machine',
    gallery: [],
    body: [
      { heading: 'Corporate-quality care, at zero cost', text: 'A hygienic, well-equipped centre managed by a skilled medical team, with high infection-control standards.' },
      { heading: '₹5.99 crore saved', text: 'HHF has provided 19,980 free dialysis sessions, saving patients ₹5.99 crore in medical expenses — 5,172+ sessions in the last year alone.' },
      { heading: 'Dignity and support', text: 'Beyond treatment, patients receive emotional and social support so they can keep working and caring for their families.' },
    ],
    highlights: ['10 machines', '100% free', '5,172+ sessions this year', 'With SEED-USA'],
  },
  {
    slug: 'rehab-elder-care',
    number: '04',
    title: 'Rehab, Palliative & Elder Care',
    short: 'A 35-bed rehab and palliative centre, a free 55-bed home for the aged, and the city’s first free rehab facility.',
    summary:
      'Rehabilitation and long-term care have become prohibitively expensive. HHF runs free facilities for stroke survivors, the elderly and the destitute — with medical supervision, nutritious food and dignity.',
    stat: { value: '55', label: 'beds in a free home for the aged' },
    image: images.eldersWard,
    imageAlt: 'Elderly residents resting in the HHF home for the aged',
    gallery: [
      { src: images.agedWomen, alt: 'Elderly women in the women’s ward of the home for the aged' },
      { src: images.palliative, alt: 'A caregiver attending to an elderly patient' },
    ],
    body: [
      { heading: 'Home for the Aged', text: 'Established in 2022, HHF’s 55-bed home for the aged and destitute is free of cost, with monthly general, dental and eye screenings.' },
      { heading: 'Rehab & palliative care', text: 'A 35-bed rehab, palliative and geriatric care centre delivers nutritious food and care under medical supervision.' },
      { heading: 'City’s first free rehab facility', text: 'In 2026, the 20-bed Sivananda Physio Rehab Centre in Kukatpally opened with HHF as operations partner — free care for post-stroke, trauma and chronic disability patients.' },
    ],
    highlights: ['55-bed aged home', '35-bed rehab centre', '20-bed Sivananda rehab', 'Free of cost'],
  },
  {
    slug: 'rural-telemedicine',
    number: '05',
    title: 'Rural Clinics & Telemedicine',
    short: '11 village clinics with Wipro Cares, and 24×7 online doctors for about 2 lakh students in government residential schools.',
    summary:
      'Distance should not decide who gets care. HHF brings primary care to villages twice a week and supports government residential schools around the clock through a virtual health model.',
    stat: { value: '2 lakh', label: 'students covered by telemedicine' },
    image: images.ruralClinic,
    imageAlt: 'Villagers waiting at an HHF rural health clinic',
    gallery: [
      { src: images.telemedicine, alt: 'A doctor providing telemedicine consultation' },
      { src: images.ruralCamp, alt: 'A rural health camp with medicines laid out' },
    ],
    body: [
      { heading: '11 rural clinics', text: 'With Wipro Cares, HHF runs comprehensive primary-care clinics in 11 villages covering a population of 25,000. Every household was surveyed and the vulnerable linked to care.' },
      { heading: '24×7 virtual care', text: 'A team of 20+ doctors and counsellors provides round-the-clock online health support to 250–300 government residential schools with about 2 lakh students.' },
      { heading: 'Reaching the remotest corners', text: 'The virtual model has proven highly effective in medical emergencies; in 2022 online services reached over 3 lakh patients.' },
    ],
    highlights: ['11 villages', '25,000 people', '24×7 doctors', '250+ schools'],
  },
  {
    slug: 'medical-relief',
    number: '06',
    title: 'Medical Relief & Praja Darbar',
    short: 'A walk-in help centre for health emergencies, financial aid, free eye surgeries, ambulances and dignified last rites.',
    summary:
      'Since 2007, HHF’s Praja Darbar has been a lifeline for families facing medical emergencies with no money and nowhere to turn. Over 1 million people have sought help there.',
    stat: { value: '1 Million+', label: 'people helped at Praja Darbar' },
    image: images.prajaDarbar,
    imageAlt: 'HHF counsellors at the Praja Darbar help centre',
    gallery: [
      { src: images.ambulance, alt: 'An HHF patient transport ambulance' },
      { src: images.commandCentre, alt: 'HHF’s command and control centre' },
    ],
    body: [
      { heading: 'Praja Darbar', text: 'At HHF’s Rajendranagar office, counsellors meet 30–50 patients daily (Mon–Sat, 9–5), log every case in a health app, link patients to public or partner hospitals, and follow up until treatment is complete.' },
      { heading: 'Free eye surgeries', text: 'With Akbar Eye Hospital, HHF offers 50 free cataract surgeries a month for auto and cab drivers, gig workers and senior residents from BPL families.' },
      { heading: 'Ambulances, diagnostics & last rites', text: 'A fleet of ambulances, a non-profit pathology lab with NABL-level quality, and volunteers who have conducted funerals for homeless and destitute patients regardless of caste or creed.' },
    ],
    highlights: ['30–50 patients daily', '600 cataract surgeries/yr', 'Ambulance fleet', 'Non-profit lab'],
  },
  {
    slug: 'education',
    number: '07',
    title: 'HHF School & Education',
    short: 'A free school for migrant and dropout children, bridge courses, and help enrolling children in government schools.',
    summary:
      'An HHF survey across 15 Hyderabad slums found 27% of children had dropped out of school — mostly because families could not afford private-school fees. HHF set out to change that.',
    stat: { value: '400', label: 'students at the free HHF School' },
    image: images.schoolKids,
    imageAlt: 'Young students writing in their notebooks at the HHF School',
    gallery: [
      { src: images.classroomGirls, alt: 'Girls attentively studying in a classroom' },
      { src: images.bridgeSchool, alt: 'A bridge-school class in session' },
    ],
    body: [
      { heading: 'The free HHF School', text: 'A free primary and bridge school in Errakunta for first-generation learners from migrant and daily-wage families, with 14 classrooms, 12 teachers, free transport, uniforms, books and stationery.' },
      { heading: 'Bridge courses', text: 'Three 90-day modules — Foundation, Beginning and Senior Level — bring dropouts back up to speed in English, maths, science and social studies.' },
      { heading: 'Adopt a school, enrol a child', text: 'Through Rahnumai centres in mosques, HHF counsels parents and enrols children in government schools — and has adopted two government schools to improve facilities.' },
    ],
    highlights: ['₹15,000 per child/year', '400 students', '90-day bridge modules', '2 adopted schools'],
  },
  {
    slug: 'relief-rehabilitation',
    number: '08',
    title: 'Relief & Livelihoods',
    short: 'When a family’s only earner falls ill or is injured, HHF steps in with rent, rations, school fees — and a path back to work.',
    summary:
      'Daily-wage earners and migrants who suddenly can’t work often suffer silently. HHF’s Relief & Rehabilitation programme supports around 200 families every month.',
    stat: { value: '200', label: 'families supported each month' },
    image: images.heroFamily,
    imageAlt: 'A father with his baby, son and daughter at home',
    gallery: [
      { src: images.boysPortrait, alt: 'Two young brothers looking at the camera' },
      { src: images.paediatric, alt: 'A young child recovering in a hospital bed' },
    ],
    body: [
      { heading: 'Short-term relief', text: 'Financial aid for monthly needs — rations, rent and school fees — so a sudden illness doesn’t push a family into acute poverty.' },
      { heading: 'Rehabilitation', text: 'Free physiotherapy, psychotherapy and counselling help the earner recover.' },
      { heading: 'A new livelihood', text: 'HHF then empowers a family member or spouse with a small business or job, supported by a community of donors giving ₹1,000 a month.' },
    ],
    highlights: ['200 families/month', 'Rations & rent', 'Physio & counselling', 'Livelihood start-up'],
  },
]

export type Story = {
  slug: string
  category: 'Patient Stories' | 'Partnerships' | 'Education' | 'Our Work'
  date: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  readTime: string
  source: 'hhf' | 'press' | 'demo'
  sourceUrl?: string
  body: string[]
}

export const stories: Story[] = [
  {
    slug: 'bhaskar-eye-surgery-ib-job',
    category: 'Patient Stories',
    date: '2026-07-04',
    title: 'How an eye surgery helped young Bhaskar land a job with the Intelligence Bureau',
    excerpt: 'Severe myopia kept disqualifying him from the jobs he trained for. One HHF-sponsored laser procedure changed everything.',
    image: images.bhaskar,
    imageAlt: 'Bhaskar with the HHF team after his selection',
    readTime: '3 min read',
    source: 'hhf',
    body: [
      'Dharvath Bhaskar, 22, a student from Narayankhed in Sangareddy district and the son of an agricultural labourer, was living with –4.5 myopia.',
      'He made many attempts to qualify for police jobs through the state public service commission and UPSC — but his poor eyesight led to disqualification each time.',
      'A retired IPS officer, Shri A.K. Khan, asked HHF to help. With Akbar Eye Hospital, HHF arranged a Trans-PRK laser cornea procedure to correct his vision, fully sponsored by HHF.',
      'With his vision restored, Bhaskar was selected as an Assistant Central Intelligence Officer with the Intelligence Bureau — and came back to share the news with Team HHF.',
    ],
  },
  {
    slug: 'free-cataract-surgeries-gig-workers',
    category: 'Partnerships',
    date: '2026-01-19',
    title: 'Free cataract surgeries for auto drivers, gig workers and senior citizens',
    excerpt: '50 free surgeries every month with Akbar Eye Hospital — 600 a year, saving families around ₹90 lakh.',
    image: images.eyeScreening,
    imageAlt: 'A doctor conducting an eye examination',
    readTime: '2 min read',
    source: 'hhf',
    body: [
      'HHF and Akbar Multi-Speciality Eye Hospital have come together to offer 50 free cataract surgeries a month for auto and cab drivers, gig workers and senior residents from BPL families.',
      'That is 600 surgeries a year, saving patients about ₹90 lakh in out-of-pocket expenses.',
      'Patients from weaker sections can also access other eye procedures under the state Aarogyasri scheme. To begin, patients triage at the HHF office or call the helpline: 72075 38605.',
    ],
  },
  {
    slug: 'sivananda-free-rehab-centre',
    category: 'Partnerships',
    date: '2026-01-23',
    title: 'Hyderabad’s first free rehab care facility opens in Kukatpally',
    excerpt: 'A 20-bed physio rehab centre for stroke, trauma and chronic disability patients — with HHF as operations partner.',
    image: images.rehabCentre,
    imageAlt: 'Trustees and guests at the opening of the Sivananda rehab centre',
    readTime: '3 min read',
    source: 'hhf',
    body: [
      'Three out of four stroke patients need critical care, and rehabilitation after discharge has become prohibitively expensive.',
      'The new 20-bed Sivananda Physio Rehab Centre in Kukatpally makes rehab equitable and accessible — free of charge — for post-stroke, trauma and chronic disability patients, with preference for poor patients from government hospitals.',
      'The facility has separate male and female wards, a central oxygen line, monitors, and a team of doctors, nurses and physiotherapists. It was inaugurated in memory of the late Pramila Jagan Mohan Reddy, on the birth anniversary of philanthropist Rani Kumudini Devi.',
    ],
  },
  {
    slug: 'nims-mou-help-desks',
    category: 'Partnerships',
    date: '2025-09-22',
    title: 'HHF and NIMS sign MoU to strengthen patient support',
    excerpt: 'Six HHF help desks across the state’s largest multi-speciality hospital — which sees 3,000–4,000 outpatients a day.',
    image: images.nimsMou,
    imageAlt: 'HHF and NIMS representatives exchanging the MoU',
    readTime: '2 min read',
    source: 'hhf',
    body: [
      'The Nizam’s Institute of Medical Sciences, the state’s largest multi-speciality hospital, has signed an MoU with HHF to expand their collaboration on patient support services.',
      'HHF will run six help desks — two in the emergency department and one each in the Millennium Block, Speciality Block and OPD Block. NIMS sees 3,000–4,000 outpatients and 75–100 emergencies a day across 1,639 inpatient beds.',
      'The MoU was signed in the presence of NIMS Director Dr. N. Bherappa. HHF’s government help-desk programme is supported by the Basheer & Sarwar Babu Khan Human Development Trust.',
    ],
  },
  {
    slug: 'hhf-school-errakunta',
    category: 'Education',
    date: '2024-07-05',
    title: 'A free school for 400 children of migrant families',
    excerpt: 'After finding 27% of slum children had dropped out, HHF opened a free primary and bridge school in Errakunta.',
    image: images.schoolKids,
    imageAlt: 'Young students writing at the HHF School',
    readTime: '3 min read',
    source: 'press',
    sourceUrl: 'https://hyderabadmail.com/hyderabad-helping-hands-foundation/',
    body: [
      'An HHF survey across 15 major Hyderabad slums found that 27% of students had dropped out in the previous academic year — nearly half at primary level — and 4% of school-age children were entirely outside the system. 75% of parents cited the cost of private schools.',
      'HHF responded with a free primary and bridge school (Nursery to Class 5) in Errakunta for first-generation learners from migrant, daily-wage and single-mother families.',
      'The school has 14 classrooms, 12 qualified teachers, a headmistress, counsellors and a free shuttle service. With 400 students enrolled, it is estimated to save parents over ₹1 crore a year. It was inaugurated by Syed Mazharuddin Hussaini of SEED-USA, HHF’s main partner in India.',
    ],
  },
  {
    slug: 'sarojini-devi-help-desk',
    category: 'Our Work',
    date: '2025-01-01',
    title: 'A new help desk at Sarojini Devi Eye Hospital',
    excerpt: 'Two trained counsellors now guide 200–300 patients a day through the state’s eye hospital.',
    image: images.helpdeskEye,
    imageAlt: 'The HHF help desk at Sarojini Devi Eye Hospital',
    readTime: '2 min read',
    source: 'hhf',
    body: [
      'HHF has collaborated with the Government Sarojini Devi Eye Hospital to launch help desk services, starting 15 December 2024.',
      'HHF has run help desks in state-run hospitals for over a decade, with more than 100 volunteer counsellors deployed.',
      'Two trained counsellors, Sulakshana and Naresh, staff the OPD area — guiding the hundreds of patients with impaired vision who visit every day.',
    ],
  },
  {
    slug: 'apollo-aimsr-tie-up',
    category: 'Partnerships',
    date: '2024-12-21',
    title: 'HHF ties up with Apollo Institute of Medical Sciences',
    excerpt: 'Free OPD, free deliveries and C-sections, and subsidised neonatal care for HHF patients.',
    image: images.childCheckup,
    imageAlt: 'A doctor examining a young child',
    readTime: '2 min read',
    source: 'hhf',
    body: [
      'HHF signed an MoU with the Apollo Institute of Medical Sciences & Research — the medical college of Apollo Hospital, Jubilee Hills.',
      'Under the MoU, patients referred by HHF receive free OPD consultations, subsidised paediatric NICU/PICU care, free paediatric cardiac surgeries under Aarogyasri, and free normal deliveries and C-sections.',
    ],
  },
  {
    slug: 'covid-help-desks',
    category: 'Our Work',
    date: '2021-06-01',
    title: 'When COVID-19 hit, HHF counsellors were inside the hospitals',
    excerpt: 'Help desks at TIMS, Gandhi and other hospitals guided families through admissions, tests and grief.',
    image: images.patientCare2,
    imageAlt: 'HHF patient care coordinators on a hospital ward',
    readTime: '3 min read',
    source: 'press',
    sourceUrl: 'https://newsmeter.in/regional/hyderabad/hyderabad-hhf-sets-up-help-desk-at-tims-for-covid-care-678433',
    body: [
      'During the pandemic, HHF set up COVID help desks in government hospitals including Gandhi Hospital and the Telangana Institute of Medical Sciences (TIMS) in Gachibowli, alongside its existing desks at Osmania, King Koti and the Chest Hospital.',
      'At TIMS, working with Modern Architects for Rural India and funded by the Azim Premji Foundation, counsellors helped streamline admissions and follow-ups — and supported the families of patients who passed away.',
      'The desks also helped COVID-positive pregnant women reach maternity care when they needed it most.',
    ],
  },
]

export const press = [
  { outlet: 'Hyderabad Mail', title: 'Healing Hyderabad: How Helping Hand Foundation is bridging healthcare gaps for poor', href: 'https://hyderabadmail.com/helping-hand-foundation-hyderabad-healthcare/' },
  { outlet: 'Hyderabad Mail', title: 'Helping Hand Foundation opens free school to address high dropout rates', href: 'https://hyderabadmail.com/hyderabad-helping-hands-foundation/' },
  { outlet: 'NewsMeter', title: 'A helping hand at Hyderabad govt hospitals: HHF reports assisting 7.11 lakh patients', href: 'https://newsmeter.in/hyderabad/a-helping-hand-at-hyderabad-govt-hospitals-hhf-reports-assisting-711-lakh-patients-777810' },
  { outlet: 'NewsMeter', title: 'HHF sets up help desk at TIMS for COVID care', href: 'https://newsmeter.in/regional/hyderabad/hyderabad-hhf-sets-up-help-desk-at-tims-for-covid-care-678433' },
  { outlet: 'The Hans India', title: 'Helping Hand Foundation prez is Distinguished Citizen', href: 'https://www.thehansindia.com/posts/index/hans/2016-03-18/helping-hand-foundation-prezis-distinguished-citizen/214477' },
  { outlet: 'Telangana Today', title: 'Helping Hand Foundation sets up help desk at TIMS', href: 'https://telanganatoday.com/helping-hand-foundation-sets-up-help-desk-at-tims' },
]

export const recognitions = [
  { year: '2016', title: 'Distinguished Citizen Award', by: 'Rotary Club of Hyderabad, to founder Mujtaba Hasan Askari' },
  { year: '2015', title: 'Award of Appreciation', by: 'As listed on helpinghandf.org' },
  { year: 'COVID-19', title: 'Recognition for COVID-19 relief', by: 'As listed on helpinghandf.org' },
  { year: '—', title: 'Letters of appreciation', by: 'From partner institutions' },
]

export const steps = [
  { title: 'Reach out', text: 'Patients walk into a community centre, a hospital help desk or Praja Darbar — or call the helpline.' },
  { title: 'Triage & guide', text: 'Counsellors assess each case, log it in HHF’s health app and explain every option clearly.' },
  { title: 'Treat at zero cost', text: 'HHF links patients to free government care or partner hospitals — and funds what isn’t covered.' },
  { title: 'Follow up', text: 'Every case is tracked until treatment is complete, with rehab and livelihood support where needed.' },
]

export const documents = [
  { title: 'Annual Performance Report 2025', type: 'Annual report', size: 'Available on helpinghandf.org', href: 'https://helpinghandf.org/annual-reports/' },
  { title: 'Annual Audit Financial Report 2025', type: 'Audited accounts', size: 'Available on helpinghandf.org', href: 'https://helpinghandf.org/annual-reports/' },
  { title: 'Annual Performance Report 2024', type: 'Annual report', size: 'Available on helpinghandf.org', href: 'https://helpinghandf.org/annual-reports/' },
  { title: 'Annual Audit Financial Report 2024', type: 'Audited accounts', size: 'Available on helpinghandf.org', href: 'https://helpinghandf.org/annual-reports/' },
  { title: 'Annual Activity Report 2023–24', type: 'Activity report', size: 'Available on helpinghandf.org', href: 'https://helpinghandf.org/annual-reports/' },
  { title: 'Safeguarding & Privacy Policy', type: 'Policy', size: 'PDF · sample' },
] as { title: string; type: string; size: string; href?: string }[]

export const board = [
  { name: 'Mujtaba Hasan Askari', role: 'Founder & Trustee' },
  { name: 'Khurram Askari', role: 'Trustee' },
  { name: 'Faheem Sherza', role: 'Trustee' },
  { name: 'Mujahed Farooqui', role: 'Trustee' },
  { name: 'Murali Ramisetty', role: 'Trustee' },
  { name: 'Dr. Sriram Chandra Damaraju', role: 'Trustee' },
  { name: 'Bharadwaj Korni', role: 'Trustee' },
  { name: 'Prof. Vikas Singh', role: 'Trustee' },
]

export const advisors = [
  { name: 'Dr. Srinivas Mummadi', role: 'Advisor' },
  { name: 'J. Vikramdev Rao', role: 'Advisor' },
  { name: 'R. H. Khwaja', role: 'Advisor' },
  { name: 'Sadiq Askari', role: 'Advisor' },
]

export const staff = [
  { name: 'Imran Mohammed', role: 'Chief Manager' },
  { name: 'Dr. Anjana Surath', role: 'Palliative Care Consultant' },
  { name: 'Dr. Chithra Babu', role: 'Maternal & Child Health Specialist' },
  { name: 'Dr. Karthika Suresh', role: 'Community Health & Epidemiologist' },
  { name: 'Soumya Chiluka', role: 'Child Psychologist' },
  { name: 'Jaison Deborea', role: 'Project Manager' },
]

export const partners = ['SEED-USA', 'Wipro Cares', 'AMPI-USA', 'Lean Foundation-USA', 'Child Aid International Canada', 'Basheer & Sarwar Babu Khan HDT', 'NIMS', 'Apollo AIMSR', 'Akbar Eye Hospital', 'Azim Premji Foundation']

export const causes = [
  { title: 'Educate an underprivileged child', text: 'Free schooling with transport, uniforms, books and stationery at the HHF School.', image: images.schoolgirls, cost: '₹15,000 supports one child for a year', costSource: 'hhf', raised: 62, purpose: 'Education' },
  { title: 'Support dialysis patients', text: 'Keep the 10-machine free dialysis centre running for patients who can’t afford treatment.', image: images.dialysis, cost: '19,980 free sessions so far', costSource: 'hhf', raised: 74, purpose: 'Free dialysis' },
  { title: 'Hope for paediatric cancer patients', text: 'Help underprivileged children fighting cancer get a second chance at life.', image: images.paediatric, cost: 'Every gift funds treatment support', costSource: 'demo', raised: 41, purpose: 'Paediatric cancer' },
  { title: 'Help desks in government hospitals', text: 'Fund counsellors who guide patients to free, timely treatment.', image: images.helpdeskPatient, cost: '1.5 lakh patients helped a year', costSource: 'hhf', raised: 58, purpose: 'Hospital help desks' },
  { title: 'Livelihood support for families', text: 'Rent, rations and a path back to work when the earner falls ill.', image: images.familyPortrait, cost: 'Donor circle gives ₹1,000 a month', costSource: 'hhf', raised: 49, purpose: 'Relief & livelihoods' },
  { title: 'Orphan & vulnerable children', text: 'Give orphans and vulnerable children a dignified, secure life.', image: images.boysPortrait, cost: 'Every gift helps a child', costSource: 'demo', raised: 35, purpose: 'Where it’s needed most' },
]

export const oneTimeAmounts = [1000, 2500, 5000, 10000, 15000, 25000]
export const monthlyAmounts = [500, 1000, 2000, 5000, 10000, 15000]

/** ₹15,000 (a year of school) and ₹1,000/month (donor circle) are HHF figures; the rest are illustrative. */
export const amountImpact: Record<number, string> = {
  500: 'helps towards medicines for a patient at a community health centre',
  1000: 'is what each member of HHF’s livelihood donor circle gives monthly',
  2000: 'helps towards a free dialysis session',
  2500: 'helps towards a month of rations for a family in crisis',
  5000: 'helps towards help-desk counsellors for a week',
  10000: 'helps towards care at the free home for the aged',
  15000: 'supports one child at the HHF School for a full year',
  25000: 'helps towards a free cataract surgery drive',
}

export const values = [
  { title: 'Inclusivity', text: 'An equal-opportunity health NGO serving people of every faith, caste and background.' },
  { title: 'Collaboration', text: '400+ staff and volunteers working with government hospitals and partners as equals.' },
  { title: 'Dignity', text: 'Free care that matches the best private standards — and treats every patient with respect.' },
  { title: 'Impact', text: 'Every case logged, tracked and followed up until treatment is complete.' },
]

export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN')

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })

/* ------------------------------------------------------------------
   Content mirrored from the helpinghandf.org homepage
------------------------------------------------------------------- */

const im2 = (name: string) => `/images/${name}`

/** The helpinghandf.org homepage slider, in its original order. */
export const heroSlides = [
  { src: im2('slide-1.jpg'), caption: 'Indian Oil Corporation CSR initiative for Govt. ENT Hospital, facilitated through HHF', alt: 'Inaugural ceremony of advanced ENT medical equipment donated under Indian Oil Corporation’s CSR initiative' },
  { src: im2('slide-2.jpg'), caption: 'Partnering with government hospitals to strengthen patient support', alt: 'HHF and hospital leaders exchanging a memorandum of understanding' },
  { src: im2('slide-3.jpg'), caption: 'Bringing care to the community, together', alt: 'HHF team, doctors and community members at a health event' },
  { src: im2('slide-4.jpg'), caption: 'Sivananda Physio Rehab Centre — the city’s first free rehab facility', alt: 'Trustees unveiling the plaque of the Sivananda Physio Rehab Centre' },
  { src: im2('slide-5.jpg'), caption: 'HHF command & control centre tracking every patient case', alt: 'HHF staff working at the command and control centre' },
  { src: im2('slide-6.jpg'), caption: 'Free health screenings at the doorstep', alt: 'An HHF health worker checking an elderly man’s blood pressure' },
  { src: im2('slide-7.jpg'), caption: 'Comprehensive primary healthcare for rural communities', alt: 'Villagers and HHF health workers at a rural primary healthcare programme' },
  { src: im2('slide-8.jpg'), caption: 'HHF help desk counsellors inside government hospitals', alt: 'HHF help desk team standing at their desk in a government hospital' },
]

export const extraImages = {
  fitcop1: im2('fitcop-1.jpg'),
  fitcop2: im2('fitcop-2.jpg'),
  aimsr: im2('aimsr.jpg'),
  healthBw: im2('health-bw.jpg'),
  healthCampBw: im2('health-camp-bw.jpg'),
}

/** "Our Work" services carousel from the helpinghandf.org homepage, with every photo it shows. */
export const services = [
  { title: 'Praja Darbar', text: 'A walk-in grievance desk at HHF’s Rajendranagar office since 2007 — 30–50 patients a day, every case logged, linked to care and followed up. Over 1 million people helped.', photos: [images.prajaDarbar, images.commandCentre], to: '/programs/medical-relief' },
  { title: 'Rural Primary Healthcare', text: 'With Wipro Cares, comprehensive primary-care clinics in 11 villages covering 25,000 people — every household surveyed, clinics twice a week.', photos: [images.ruralClinic, images.ruralCamp, images.ncdScreening, extraImages.healthCampBw], to: '/programs/rural-telemedicine' },
  { title: 'Urban Primary Healthcare', text: '20 community health centres in Hyderabad’s most vulnerable slums with labs, pharmacy, specialists, X-ray and physiotherapy.', photos: [images.chc, images.bpCheck, images.reception, images.triage], to: '/programs/urban-primary-healthcare' },
  { title: 'Help Desk Services', text: 'Counsellors in 17 government hospitals guide patients through registration, departments and consultations — with ease and dignity.', photos: [images.helpdeskPatient, images.patientCare, images.patientCare2], to: '/programs/hospital-help-desks' },
  { title: 'Free Dialysis Centre', text: '19,980 free dialysis sessions in a corporate-quality centre, saving patients ₹5.99 crore — with emotional and social support too.', photos: [images.dialysis], to: '/programs/free-dialysis' },
  { title: 'Rehab Care Centre', text: 'A 35-bed rehab, palliative and geriatric care centre offering nutritious food and care under medical supervision.', photos: [images.palliative], to: '/programs/rehab-elder-care' },
  { title: 'Home for the Aged', text: 'A free 55-bed home for the aged and destitute since 2022, with monthly general, dental and eye screenings.', photos: [images.elderPortrait, images.eldersWard, images.agedHome, images.agedWomen], to: '/programs/rehab-elder-care' },
  { title: 'Telemedical Services', text: '20+ doctors and counsellors give 24×7 online health support to government residential schools with about 2 lakh students.', photos: [images.telemedicine], to: '/programs/rural-telemedicine' },
  { title: 'Ambulance & Funeral Services', text: 'Ambulances carry patients from HHF centres to government hospitals; volunteers perform last rites for the homeless and destitute, regardless of caste or creed.', photos: [images.ambulance, images.ambulance2], to: '/programs/medical-relief' },
  { title: 'FitCop — Police Health & Fitness', text: 'A health and fitness programme for Hyderabad City Police personnel (for police staff, not open to the public).', photos: [extraImages.fitcop2, extraImages.fitcop1], to: '/programs' },
  { title: 'Diagnostic Services', text: 'A non-profit pathology, serology and biochemistry lab serving HHF clinics at the most competitive rates, with quality matching NABL standards.', photos: [images.chcLab], to: '/programs/medical-relief' },
  { title: 'Zero Cost Treatment', text: '17 help desks in state-run hospitals help around 1.5 lakh patients a year access free treatment — saving ₹20 crore in out-of-pocket costs.', photos: [images.zeroCost], to: '/programs/hospital-help-desks' },
]

/** "Achievements 2025" cards from the helpinghandf.org homepage. */
export const achievements2025 = [
  { value: 103.66, prefix: '₹', suffix: ' Cr', decimals: 2, label: 'Net savings in out-of-pocket expenses', icon: 'wallet' },
  { value: 24.16, prefix: '₹', suffix: ' Cr', decimals: 2, label: 'Gross receipts & donations', icon: 'coins' },
  { value: 10.83, prefix: '', suffix: ' lakh', decimals: 2, label: 'Beneficiaries received free health care', icon: 'heart' },
  { value: 8.47, prefix: '', suffix: ' lakh', decimals: 2, label: 'Patients given non-monetised support at help desks', icon: 'hand' },
  { value: 5.88, prefix: '', suffix: ' lakh', decimals: 2, label: 'Urban poor given comprehensive primary healthcare', icon: 'user' },
  { value: 29021, prefix: '', suffix: '', decimals: 0, label: 'Inpatients assisted at government hospitals', icon: 'hospital' },
  { value: 22.3, prefix: '', suffix: 'k', decimals: 1, label: 'Patients reached by rural primary healthcare', icon: 'clinic' },
  { value: 8740, prefix: '', suffix: '', decimals: 0, label: 'Patients given free diagnostics & lab services', icon: 'lab' },
  { value: 5172, prefix: '', suffix: '', decimals: 0, label: 'Free dialysis sessions for the underprivileged', icon: 'droplet' },
  { value: 2940, prefix: '', suffix: '', decimals: 0, label: 'Emergency cases served by ambulance & funeral services', icon: 'ambulance' },
  { value: 2350, prefix: '', suffix: '', decimals: 0, label: 'Moderate to complex surgeries facilitated', icon: 'surgery' },
  { value: 2140, prefix: '', suffix: '', decimals: 0, label: 'Critically ill patients given financial aid', icon: 'bed' },
  { value: 390, prefix: '', suffix: '', decimals: 0, label: 'Gig-worker & daily-wager families given social support', icon: 'family' },
  { value: 228, prefix: '', suffix: '', decimals: 0, label: 'Elderly patients in rehabilitation & geriatric care', icon: 'elder' },
  { value: 3, prefix: '', suffix: '', decimals: 0, label: 'Bone marrow transplants facilitated', icon: 'bone' },
]

export const pillars = [
  { title: 'Inclusivity', text: 'An equal-opportunity NGO in the health sector, helping those with cancer, TB survivors, PLHIV, polio-afflicted individuals, paraplegics, the blind, widows, orphans and the physically challenged.' },
  { title: 'Collaboration', text: 'With the direct involvement of a dedicated team of 400+ staff and volunteers, we create a powerful force for positive change in the health sector.' },
  { title: 'Impact', text: 'Through our collective efforts, we make a difference in the lives of those in need and bring hope to communities across India.' },
]

/** Partner logos shown on the helpinghandf.org homepage. */
export const partnerLogos = [
  ['seed', 'SEED-USA'], ['wipro-cares', 'Wipro Cares'], ['azim-premji', 'Azim Premji Foundation'], ['indianoil-aarogyam', 'IndianOil Aarogyam'],
  ['apollo-aimsr', 'Apollo Institute of Medical Sciences & Research'], ['syngene', 'Syngene CSR'], ['ampi', 'American Muslim Physicians of Indian Origin'],
  ['lean-foundation', 'Lean Foundation USA'], ['child-aid', 'Child Aid International'], ['human-development-trust', 'Human Development Trust'],
  ['rotary', 'Rotary'], ['round-table', 'Round Table India'], ['basavatarakam', 'Basavatarakam Indo-American Cancer Hospital'], ['sivananda', 'Sivananda Rehabilitation Home'],
  ['iiph', 'Indian Institute of Public Health Hyderabad'], ['lepra', 'LEPRA'], ['prpcs', 'Pain Relief & Palliative Care Society'], ['ardsi', 'ARDSI Hyderabad Deccan'],
  ['renova', 'Renova Hospitals'], ['vijaya', 'Vijaya Diagnostic Centre'], ['trulife', 'Trulife Diagnostics'], ['sali', 'South Asian Liver Institute'],
  ['tgmreis', 'TGMREIS'], ['hyderabad-police', 'Hyderabad City Police'], ['telangana-forest', 'Telangana State Forest'], ['mari', 'MARI'],
  ['diabesties', 'Diabesties'], ['efficiently', 'efficiently'],
].map(([file, name]) => ({ src: `/images/partners/${file}.jpg`, name }))
