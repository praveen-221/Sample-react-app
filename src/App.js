import React, { useState } from 'react';

const data = [
  {
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    person: 'John',
    age: 20,
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F48%2F35%2Fb5%2F4835b5f9c52fd733eb26fb2c2b47bdc7.jpg&f=1&nofb=1',
    person: 'Diane',
    age: 21,
  },
  {
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    person: 'Dhoni',
    age: 19,
  },
];

function App() {
  const [Name, setName] = useState(data);
  return (
    <>
      <section className='container'>
        <h1>{Name.length} Birthdays Today</h1>
        {Name.map((props) => {
          const { image, person, age } = props;
          return (
            <div className='item'>
              <img src={image} alt='' />
              <article>
                <h2>{person}</h2>
                <p>{age} years</p>
              </article>
            </div>
          );
        })}
        <button className='btn' onClick={() => setName([])}>
          Clear Items
        </button>
      </section>
    </>
  );
}

export default App;
