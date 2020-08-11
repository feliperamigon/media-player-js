// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Felipe';
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Felipe', 'Emmanuel', 'Jennifer'];
// people.push('9000');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Felipe');
peopleAndNumbers.push(9001);

// Enum
enum Color { 
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Rojo;
console.log('Mi color favorito es: ', colorFavorito)

// any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: Object = { type: 'Wildcard' }

// Funciones
function add(a: number, b: number): number { 
    return a + b;
}

const suma = add(4, 5);

function createAdder(a: number): (number) => number { 
    return function (b: number) { 
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName: string = 'Ramirez'): string { 
    return `${firstName} ${lastName}`;
}

const felipe = fullName('Felipe');
console.log(felipe);

interface Rectangulo { 
    ancho: number;
    alto: number;
    color?: Color;
};

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Amarillo
};

function area(r: Rectangulo) { 
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

rect.toString = function () { 
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());

