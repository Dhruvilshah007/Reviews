import React from 'react';

// we are calling the review component here
import Review from './Review';
import {} from 'react-icons/fa'




function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>

    </main>
  );
}

export default App;
