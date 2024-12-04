'use client';

import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';

//WITHOUT TYPING

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const inputReference = useRef(null);

  const handleAddTask = () => {
    const inputValue = inputReference?.current?.value as string;
    setTasks([{ title: inputValue, id: nanoid() }, ...tasks]);
  };

  return (
    <div>
      <div className='flex gap-2'>
        <input
          ref={inputReference}
          className='border-2 border-gray-700 rounded'
        />
        <button
          onClick={handleAddTask}
          className='bg-blue-600 text-white rounded px-3'
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((elem) => {
          return <li key={elem.id}>{elem.title}</li>;
        })}
      </ul>
    </div>
  );
}

// WITH TYPING

// export default function Home() {
//   const [tasks, setTasks] = useState<{ title: string; id: string }[]>([]);

//   const inputReference = useRef<HTMLInputElement>(null);

//   const handleAddTask = () => {
//     const inputValue = inputReference?.current?.value as string;
//     setTasks([{ title: inputValue, id: nanoid() }, ...tasks]);
//   };

//   return (
//     <div>
//       <div className='flex gap-2'>
//         <input
//           ref={inputReference}
//           className='border-2 border-gray-700 rounded'
//         />
//         <button
//           onClick={handleAddTask}
//           className='bg-blue-600 text-white rounded px-3'
//         >
//           Add Task
//         </button>
//       </div>
//       <ul>
//         {tasks.map((elem) => {
//           return <li key={elem.id}>{elem.title}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
