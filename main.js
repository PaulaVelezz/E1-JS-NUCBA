const Pizzas = [
    {
        nombre: "Pizza Margarita",
        ingredientes: 
        [   
            "Prepizza",
            "Salsa Roja", 
            "Mozzarella",
            "Albaca Fresca", 
            "Aceitunas",
        ],
        precio: 350,
        id: 1,
    },
    {
        nombre: "Pizza Fugazza",
        ingredientes: 
        [   
            "Prepizza",
            "Cebolla", 
            "Parmesano",
            "Aceitunas",
        ],
        precio: 400,
        id: 2,
    },
    {
        nombre: "Pizza Fugazzeta",
        ingredientes:
        [   
            "Prepizza",
            "Salsa Roja",
            "Cebolla", 
            "Parmesano",
            "Mozzarella",
            "Aceitunas",
        ],
        precio: 450,
        id: 3,
    },
    {
        nombre: "Pizza Pasto",
        ingredientes: 
        [   
            "Prepizza",
            "Salsa Roja",
            "Pesto", 
            "Aceite de oliva",
            "Mozzarella",
            "Aceitunas",
        ],
        precio: 400,
        id: 4,
    },
    {
        nombre: "Pizza Palmitos",
        ingredientes: 
        [   
            "Prepizza",
            "Salsa Roja",
            "Salsa Golf", 
            "Palmitos",
            "Mozzarella",
            "Aceitunas",
        ],
        precio: 600,
        id: 5,
    },
    {
        nombre: "Pizza Hawaiana",
        ingredientes: 
        [   
            "Prepizza",
            "Salsa Roja",
            "Anana", 
            "Cerezas",
            "Mozzarella",
            "Jamón",
            "Aceitunas",
        ],
        precio: 650,
        id: 6,
    }
]

// a) imprimir en consola las pizzas que tengan un id impar.

const idImpar = Pizzas.filter( (pizza) => {
    return pizza.id % 2 !== 0;
});

console.log(idImpar);

idImpar.forEach( (pizza)=> {
    console.log(`La ${pizza.nombre} tienen un id impar`);
});

//b) ¿Hay alguna pizza que valga menos de $600?

const pizzaMinPrice = Pizzas.find( (pizza) => {
     return pizza.precio < 600
});

console.log(pizzaMinPrice);
   
//c) El nombre de cada pizza con su respectivo precio. 

const pizzaInfoData = Pizzas.map( (pizza) => {
    return {
      nombre: pizza.nombre,
      precio: pizza.precio
    }
  });

  console.log(pizzaInfoData);

  pizzaInfoData.forEach( (pizza)=> {
    console.log(`La ${pizza.nombre} cuesta $ ${pizza.precio}`);
});

//d) Todos los ingredientes de cada pizza.(En cada iteración imprimir los ingredientes de la pizza actual). 

const pizzaIngredientesData= Pizzas.map( (pizza) => {
    return {
      nombre: pizza.nombre,
      ingrediente: pizza.ingredientes
    }
  });

  console.log(pizzaIngredientesData);

  pizzaIngredientesData.forEach( (pizza)=> {
    console.log(`Los ingredientes de ${pizza.nombre} son los siguentes: ${pizza.ingredientes}`);
});