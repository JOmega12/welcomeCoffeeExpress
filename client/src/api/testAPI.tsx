

import React, { useState, useEffect } from 'react';

const TestComponent = () => {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express.js API
    // !This gets the coffee information
    // fetch('http://localhost:4000/coffee')
    //   .then(response => {
    //     console.log(response, 'response')
    //     return response.json();
    //   }).then((data) => {
    //     console.log(data, 'DATA');
    //     setInfoData(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

      // !this grabs the userinformation and logsin
    
    // fetch("http://localhost:4000/auth/login").then((res) => {
    //   return res.json();
    // }).then((data) => {
    //   console.log(data);
    //   setInfoData(data);
    // })
  }, []);

  return (
    <div>
      <h1>This COMPONENT IS A TEST AND TRIES TO SHOW THE BACKEND DATA</h1>
      <div>
        <h2 className='font-bold'>TITLE
        </h2>
        {/* {infoData.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))} */}
      </div>
    </div>
  );
};

export default TestComponent;