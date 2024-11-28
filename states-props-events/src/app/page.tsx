import Card from './components/Card';

const data = [
  {
    id: 1,
    color: 'bg-green-600',
    heading: 'Heading 1',
    paragraph: ' Lorem ipsum dolor sit amet consectetur adipisicing',
  },
  {
    id: 1,
    color: 'bg-blue-600',
    heading: 'Heading 2',
    paragraph: ' Lorem ipsum dolor sit amet consectetur adipisicing',
  },

  {
    id: 4,
    heading: 'Heading 4',
    color: 'bg-red-500',
    paragraph: ' Lorem ipsum dolor sit amet consectetur adipisicing',
  },
  {
    id: 5,
    heading: 'Heading 5',
    color: 'bg-gray-300',
    paragraph: ' Lorem ipsum dolor sit amet consectetur adipisicing',
  },
];

export default function Home() {
  return (
    <div className=' bg-yellow-400 p-3'>
      <div className='bg-purple-500 flex'>
        {/* {data.map((elem, index) => {
          return (
            <Card
              key={index}
              heading={elem.heading}
              paragraph={elem.paragraph}
              color={elem.color}
            />
          );
        })} */}
        {data.map((elem) => {
          return (
            <Card
              key={elem.id}
              paragraph={elem.paragraph}
              color={elem.color}
              heading={elem.heading}
            />
          );
        })}
      </div>
    </div>
  );
}
