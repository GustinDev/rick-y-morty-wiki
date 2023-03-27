import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardDemo(props) {
  return (
    <div className='flex-fill'>
      <Card className='m-4' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {props.species}
          </Card.Subtitle>
          <Card.Subtitle className='mb-2 text-muted'>
            {props.gender}
          </Card.Subtitle>
          <Card.Text>Lorem Ipsum</Card.Text>
          <Button variant='primary' onClick={props.onClose}>
            X
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
