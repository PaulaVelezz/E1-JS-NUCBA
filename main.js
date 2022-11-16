const pizzas = [
    {
        nombre: "Margarita",
        ingredientes: "Salsa Roja, Mozzarella, Albaca Fresca, Aceitunas",
        precio: "$100",
        id: 1,
    },
    {
        nombre: "Fugazza",
        ingredientes: "Cebolla , Parmesano, Aceitunas",
        precio: "$150pe",
        id: 2,
    },
    {
        nombre: "Fugazzeta",
        ingredientes: "Cebolla, Mozzarella, Salsa Roja, Aceitunas",
        precio: "$180pe",
        id: 3,
    },
    {
        nombre: "Pasto",
        ingredientes: "Mozzarella, Salsa Roja, Pesto, Aceitunas",
        precio: "$100pe",
        id: 4,
    },
    {
        nombre: "Palmitos",
        ingredientes: "Palmitos, Mozzarella, Salsa Golf, Aceitunas",
        precio: "$200pe",
        id: 5,
    },
    {
        nombre: "Hawaiana",
        ingredientes: "Anana, Cerezas, Jamón, Mozzarella",
        precio: "$250pe",
        id: 6,
    }
]

/*a)  Las pizzas que tengan un id impar. b) ¿Hay alguna pizza que valga menos de $600? c) El nombre de cada pizza con su respectivo precio. 
d) Todos los ingredientes de cada pizza  (En cada iteración imprimir los ingredientes de la pizza actual). 
Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

Un ejemplo de lo que sería una repuesta "user-friendly": 
"La pizza X, tiene un valor de $XXXX”.*/ 