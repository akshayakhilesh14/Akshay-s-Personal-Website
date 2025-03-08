const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Programming/Applications'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Programming/Applications'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Programming/Applications'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Programming/Applications'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'Swift',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'HTML',
    competency: 4,
    category: ['Programming/Applications'],
  },
  {
    title: 'CSS',
    competency: 4,
    category: ['Programming/Applications'],
  },
  {
    title: 'VS Code',
    competency: 4,
    category: ['Programming/Applications'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'React Native',
    competency: 3,
    category: ['Programming/Applications'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Python'],
  },
  /*{
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Hindi',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'French',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Arabic',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Tamil',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Telugu',
    competency: 3,
    category: ['Languages'],
  },*/
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'OS X',
    competency: 2,
    category: ['Operating Systems'],
  },
  {
    title: 'Windows',
    competency: 2,
    category: ['Operating Systems'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
