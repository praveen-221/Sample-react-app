import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const arr = [
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL604_SR604,400_.jpg',
    bookname: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg',
    bookname: 'Reminders of Him: A Novel',
    author: 'Colleen Hoover',
  },
];
function App() {
  return (
    <>
      <section className='booklist '>
        {arr.map((book) => {
          return <Book {...book}></Book>;
        })}
      </section>
    </>
  );
}

function Book(props) {
  const { image, bookname, author } = props;
  // console.log(props);
  return (
    <article>
      <img src={image} alt='' />
      <h2>{bookname}</h2>
      <h1>{author}</h1>
      {/* <p>{title}</p> */}
    </article>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
