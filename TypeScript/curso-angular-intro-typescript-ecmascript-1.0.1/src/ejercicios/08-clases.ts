/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
  constructor(public nombre: string, public direccion: String) {}
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
      super( nombreReal, 'tocoa' );
  }
}

const ironman = new Heroe("Ironman", 45, "tony");
console.log(ironman);
