/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}
interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Arcangel",
    anio: 2005,
  },
};

const {
  volumen,
  segundo,
  cancion,
  detalles: { autor },
} = reproductor;
// const { autor } = detalles;

// console.log("EL volumen actual es: ", volumen);
// console.log("EL segundo actual es: ", segundo);
// console.log("La cancion actual es: ", cancion);
// console.log("EL autor  es: ", autor);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

// console.log('Personaje 1: ',dbz[0])
// console.log('Personaje 1: ',dbz[1])
console.log('Personaje 3: ', p3)



