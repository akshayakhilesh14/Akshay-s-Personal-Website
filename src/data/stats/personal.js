import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2006-08-14T12:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'Hometown',
    label: 'Hometown',
    value: 'Dubai, UAE',
  },
  {
    key: 'Language',
    label: 'Languages',
    value: 'English, Hindi, Tamil, French, Arabic, Telugu',
  },
  {
    key: 'Language',
    label: 'Programming Languages',
    value: 'Python, Java, C/C++, Javascript, React, SQL, Swift, HTML, CSS',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 15,
    link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Urbana, IL',
  },
];

export default data;
