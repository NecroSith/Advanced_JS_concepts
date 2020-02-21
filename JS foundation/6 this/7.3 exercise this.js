
const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  // this won't work
//   const giveMeTheCharacterNOW = character.getCharacter;

  const giveMeTheCharacterNOW = character.getCharacter.bind(character); // this will work because we explicitly pointed that character object should be bound as 'this' in giveMeTheCharacteNOW
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW());