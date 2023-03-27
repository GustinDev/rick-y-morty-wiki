import CardDemo from './Card';

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className='d-flex flex-wrap'>
      {characters.map((character) => {
        return (
          <CardDemo
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
          />
        );
      })}
    </div>
  );
}
