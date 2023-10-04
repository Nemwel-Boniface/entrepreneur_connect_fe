import React, { useState } from "react";
import Calendar from "react-calendar";

const FeedLeft = () => {
  const [ date, setDate ] = useState(new Date());
  return (
    <section className="feedLeft">
      <h2>The Feed left section</h2>
      
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </section>
  )
}

export default FeedLeft;