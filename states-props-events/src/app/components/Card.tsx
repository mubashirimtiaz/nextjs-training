interface ICardProps {
  heading?: string;
  paragraph: string;
  color?: string;
}

const Card = (props: ICardProps) => {
  const { heading = 'Heading 1', paragraph, color } = props;
  return (
    <div className={`${color} m-2 card`}>
      <div className='card-heading'>
        <h1>{heading}</h1>
      </div>
      <div className='card-body'>
        <p>{paragraph}</p>
      </div>
      <div className='card-footer'>
        <button>Click</button>
      </div>
    </div>
  );
};

export default Card;
