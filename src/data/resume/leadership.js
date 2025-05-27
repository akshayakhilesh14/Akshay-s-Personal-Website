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
      'Organized workshops, panel discussions, and networking events to facilitate career development among participants and to connect peers and mentors',
    ],
  },
  {
    name: 'CS 124 (Introduction to Computer Science)',
    position: 'Assistant Tutor',
    url: 'https://www.cs124.org/people#assistant-tutors',
    startDate: '2025-01-01',
    highlights: [
      'Supported students in mastering fundamental programming concepts in Java and helping them with their Machine Problems',
    ],
  },
  {
    name: 'Academic Club',
    position: 'President',
    url: 'https://www.gemsmodernacademy-dubai.com/Why-Modern/Academic-Performance',
    startDate: '2022-04-04',
    endDate: '2024-03-12',
    highlights: [
      'Led a 90+ member mentorship club, offering academic and career guidance to high school students',
    ],
  },
  {
    name: 'Game Development Club',
    position: 'Founder & President',
    startDate: '2022-04-14',
    endDate: '2024-03-10',
    highlights: [
      'Founded a Unity-based 3D game development club with 50+ members; directed workshops and game design sessions',
    ],
  },
];

export default work;
