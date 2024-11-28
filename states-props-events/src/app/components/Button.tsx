'use client';

import { useState } from 'react';

const Button = () => {
  //hook
  const [count, setCount] = useState(0);

  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className='bg-red-600 text-white p-2 rounded'
      >
        Click
      </button>
      <p>Count:{count}</p>
    </div>
  );
};

export default Button;
