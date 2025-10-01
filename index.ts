type Lugar= {
    id : number,
    nombre : string,
    tipo : string,
    peligro : number
}

type Personaje= {
    id : number,
    nombre : string,
    fuerza : number,
    aliado : boolean
}

type Objeto= {
    id : number,
    nombre : string,
    poder : number,
    categoria : string
}

type acc_aux ={
    arma : number,
    herramienta : number,
    magico : number
}


const lugares: Lugar[] = [
  { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
  { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
  { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];
 
const personajes: Personaje[] = [
  { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
  { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
  { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];
 
const objetos: Objeto[] = [
  { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
  { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
  { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
  { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];

const listarLugares = () : void =>{
    lugares.forEach((x) =>{
        console.log(x.nombre + x.id)
    })
};

const buscarPersonaje= (nombre_loc: string):void=> {
    const filtrados = personajes.filter((x)=>{
        if(x.nombre.includes(nombre_loc)){
            console.log(x.nombre + "   "+ x.fuerza + "   "+ x.aliado)
            return true
        }
        else{
            return false
        }
        
    })


const inventarioConFrases = (): string[] => {
  return objetos.map(x => x.nombre+"  "+x.poder);
};


const agruparObjetosPorCategoria = (): acc_aux => {
  return objetos.reduce((acc: acc_aux, x: Objeto) => {
    if (x.categoria == "arma") {
      acc.arma= acc.arma + x.poder;
    } else if (x.categoria == "herramienta") {
      acc.herramienta= acc.herramienta + x.poder;
    } else if (x.categoria == "mágico") {
      acc.magico= acc.magico + x.poder;
    }
    return acc;
  }, { arma: 0, herramienta: 0, magico: 0 });
};


const poderTotalInventario = (): number => {
  return objetos.reduce((acc, x) => {
        return acc + x.poder
  },0);
};

const main = (): void => {
  const opcion: number = 2; // Cambia este número para probar
 
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado = "Sabio"; // Cambia el nombre para probar
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases());
      break;
    case 4:
      console.log(agruparObjetosPorCategoria());
      break;
    case 5:
      console.log("Poder total:", poderTotalInventario());
      break;
    default:
      console.log("Opción no válida.");
  }
}

main();
}


