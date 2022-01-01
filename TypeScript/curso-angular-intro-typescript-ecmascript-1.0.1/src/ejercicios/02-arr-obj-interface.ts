/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'counter', 'healing'];


interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'kirby',
    hp: 100,
    habilidades: ['Absorver', 'Martillo', 'piedra']
}

personaje.puebloNatal = 'paleta';


console.table(personaje)

