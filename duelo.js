class Carta {
    constructor(nombre, costo) {
      this.nombre = nombre;
      this.costo = costo;
    }
  }
  
  class Unidad extends Carta {
    constructor(nombre, costo, poder, res) {
      super(nombre, costo);
      this.poder = poder;
      this.res = res;
    }
  
    atacar(enemigo) {
      if (!(enemigo instanceof Unidad))
        throw Error("Sólo puedes atacar a otra Unidad");
  
      enemigo.res = enemigo.res - this.poder;
    }
  }
  
  class Efecto extends Carta {
    constructor(nombre, costo, texto, stat, magnitud) {
      super(nombre, costo);
      this.texto = texto;
      this.stat = stat;
      this.magnitud = magnitud;
    }
  
    aplicar(recipiente) {
      if (!(recipiente instanceof Unidad))
        throw Error("Sólo puedes aplicar a una Unidad");
      recipiente[this.stat] += this.magnitud;
    }
  }
  
  
  // Unidades
  const redBelt = new Unidad("Red Belt Ninja", 2, 3, 3);
  const yellowBelt = new Unidad("Yellow Belt Ninja", 2, 3, 3);
  

  const incrementarRes = new Efecto(
    "Elixir",
    2,
    `Incrementar resiliencia por 3`,
    "res",
    3
  );
  
  incrementarRes.aplicar(yellowBelt); 
  
  redBelt.atacar(yellowBelt); 
  
  console.table({ redBelt, yellowBelt }); 