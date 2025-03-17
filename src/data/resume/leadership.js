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
    name: 'ACM@UIUC',
    position: 'Mentorship Team',
    url: 'https://www.acm.illinois.edu',
    startDate: '2025-02-12',
    highlights: [
      'Organized workshops, panel discussions, and networking events to facilitate knowledge sharing and career development among participants.',
    ],
  },
  {
    name: 'CS 124 (Introduction to Computer Science)',
    position: 'Assistant Tutor',
    url: 'https://www.cs124.org/people#assistant-tutors',
    startDate: '2025-01-01',
    highlights: [
      'Assisted in supporting students in mastering fundamental programming concepts in Java and helping them with their Machine Problems.',
    ],
  },
  {
    name: 'Academic Club',
    position: 'President',
    url: 'https://www.gemsmodernacademy-dubai.com/Why-Modern/Academic-Performance',
    startDate: '2022-04-04',
    endDate: '2024-03-12',
    highlights: [
      'Led initiatives to provide a mentorship platform for 900+ students, guiding them in exploring diverse career pathways and supporting them in their academic journeys',
    ],
  },
  {
    name: 'Game Development Club',
    position: 'Founder & President',
    startDate: '2022-04-14',
    endDate: '2024-03-10',
    highlights: [
      'Founded the inaugural 3D Game Development Club at my High School, engaging 50 members to design games using Unity.',
    ],
  },
];

export default work;
