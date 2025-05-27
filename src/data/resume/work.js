/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'University of Illinois Urbana Champaign',
    position: 'Undergraduate Researcher',
    url: 'https://siebelschool.illinois.edu/research',
    startDate: '2025-01-31',
    summary: 'My research includes designing curricula and programs for K-12 students with the goal of broadening participation in computing.',
    highlights: [
      'Designed and implemented interactive, Python-based data science modules for K-12 students across Illinois under Dr. Yael Gertner, using Jupyter notebooks, pandas, matplotlib, seaborn and HTML widgets to support inquiry-based learning',
      'Developed educational tools focused on data analysis and visualization in domains such as financial literacy and public health, contributing to curriculum design aimed at broadening participation in computing',
    ],
  },
  {
    name: 'Veritas AI: CIFAR-10 Image Classification',
    position: 'Research Intern',
    url: 'https://www.veritasai.com',
    startDate: '2023-08-07',
    endDate: '2024-01-12',
    summary: 'Veritas AI provides ambitious high school and middle school students who are passionate about AI with a suitable environment to explore their interests.',
    highlights: [
      'Utilized Data Structures and Exploratory Data Analysis to conduct ML Simple, Polynomial Regression, Model Tuning using Python',
      'Created, published my research paper in the International Journal of Novel Research and Development (IJNRD) on using CIFAR-10 Image Classification using Deep Learning and Self Driving Cars with a CNN model of 92% accuracy using Conv2D, Data Augmentation, Transfer Learning, and Kernel_regularizers',
    ],
  },
  /*
  {
    name: 'Smile Identity',
    position: 'VP Engineering & Head of AI',
    url: 'https://smileidentity.com',
    startDate: '2022-01-01',
    endDate: '2024-07-01',
    summary: `Smile builds machine learning APIs to compare user submitted photos to ID.
    used by hundreds of thousands of people every day to access financial services.
    I provide technical leadership on high-impact projects, influence,
    and facilitate alignment and clarity across teams on goals, outcomes
    from Director of Engineering to VP of Engineering in April 2022, and then to VP of Engineering
    of AI in November 2022. I lead a 20+ person engineering org. I directly manage ~8
    >50% of my time writing code.`,
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups.',
      'Re-architected engineering hiring and onboarding processes. Recruited several engineers.',
      'Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines',
      'Developed, deployed, and maintain a fraud detection product based on 1-N facial recognition',
    ],
  },
  */
  {
    name: 'Al Habtoor Group',
    position: 'Software Engineer Intern',
    url: 'https://www.habtoor.com/en/',
    startDate: '2023-07-01',
    endDate: '2023-08-12',
    summary: 'The Al Habtoor Group has grown with the United Arab Emirates. What started out as a small engineering firm in 1970, is today one of the region\'s largest and most respected conglomerates with interests in the hospitality, automotive, car leasing, real estate, education, and publishing sectors.',
    highlights: [
      'Gained exposure to SQL, MySQL, ERPs for support, Microsoft Azure environment to track databases using modules',
      'Learned networking, hardware & delved into software as a part of the IT and Support Engineer Interns Team',
      'Added devices to the company domain and created Al Habtoor Motors login ids and passwords',
      'Configured Zebra handheld computers with SIM cards and introduced to API, VLAN, IP Address, networks, Ethernet',
    ],
  },
  /*
  {
    name: 'Arthena',
    position: 'Co-founder & C.T.O.',
    url: 'https://arthena.com',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    We develop quantitative strategies to predict the value.
    I ran a 20-person product and engineering org for 8 years. We were acquired by
    <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    highlights: [
      'Built production, online, end-to-end optimiz',
      "Set and communicated team priorities",
      "Set clear expectations with individuals based on",
      'Developed the long-term technical vision and roadmap within, and often beyond',
    ],
  },
  */
  {
    name: 'Dunecrest American School',
    position: 'Software Engineer Intern',
    url: 'https://www.dunecrest.ae',
    startDate: '2022-07-14',
    endDate: '2022-08-13',
    summary: 'Dunecrest American School is An exceptional US college prep school offering the IB Diploma in Dubai. World-class education with outstanding teachers and a warm, community feel.',
    highlights: [
      'Provided network support, troubleshooting Wi-Fi, SSIDs, and access point',
      'Deployed “InstaShare” to enable device interaction with smart BenQ boards',
      'Installed and managed Mosyle MDM across all school-provided Apple devices',
    ],
  },
  /*
  {
    name: 'Planet',
    position: 'Missions Intern',
    url: 'https://planet.com',
    startDate: '2014-06-01',
    endDate: '2015-01-01',
    highlights: [
      'Built models to improve image quality, signal to noise ratio, and dynamic range.',
      'Performed statistical analysis of image quality in Python.Developed flight software in C++.',
      'Organized first hackathon, prototy',
    ],
  },
  {
    name: 'Planetary Resources',
    position: 'Avionics Intern',
    startDate: '2014-01-01',
    endDate: '2014-05-01',
    url: 'http://planetaryresources.com',
    highlights: [
      'Developed simulations in Matlab for Attitude Determination and Control Subsystem.',
      'Developed processes for in lab testing and characterization of various subsystems.',
      'Assembled flight hardware in cleanroom.',
    ],
  },
  {
    name: 'Facebook',
    position: 'Software Engineer Intern',
    url: 'https://facebook.com',
    startDate: '2013-06-01',
    endDate: '2013-09-01',
    highlights: [
      'Developed software in python for automated testing of servers.',
      'Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.',
      "Worked with vendors and ODM's during triage to assist in risk mitigation.",
    ],
  },
  {
    name: 'SEDS-USA',
    position: 'At Large Board Member',
    url: 'http://seds.org',
    startDate: '2013-10-01',
    endDate: '2014-10-01',
    highlights: [
      "Elected to Board of Directors of the USA's largest student space advocacy grou",
      'Responsibilities included: organizational strategy, conference presentations, fundrais',
    ],
  },
  {
    name: 'UB Nanosatellite Program',
    position: 'Co-founder, Program Manager',
    url: 'https://ubnl.space/',
    startDate: '2010-10-01',
    endDate: '2012-06-01',
    highlights: [
      'Coauthored grant to build a multi-spectral imaging satellite as part of the',
      'Lead a team of 60 students through satellite development life cycle., acquired',
    ],
  },
  */
];

export default work;
