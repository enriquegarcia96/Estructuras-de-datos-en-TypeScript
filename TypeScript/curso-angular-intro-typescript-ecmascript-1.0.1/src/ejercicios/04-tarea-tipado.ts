/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: DireccionHeroe;
  mostrarDireccion: () => string;
}

interface DireccionHeroe {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: "Lugui",
  edad: 26,
  direccion: {
    calle: "Hongo",
    pais: "Hongo Landia",
    ciudad: "Torbellino",
  },
  mostrarDireccion() {
    return (
      this.nombre + ",  " + this.direccion.ciudad + ", " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);