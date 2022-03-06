// functions annotation
const logger: (name: string) => void = (name: string) => {
  console.log(name);
};

// ikkinchi usul
const calc = (a: number, b: number): number => a + b;

//

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = function (a: number, b: number): number {
  return a / b;
};

const sayError = (message: string): string | never => {
  if (message) {
    return message;
  } else {
    throw new Error(message);
  }
};

// Objectlarni distruktsiya qilish

const zulfizar = {
  name: "Zulfizar",
  age: 20,
};

const sayName = (person: { name: string; age: number }): void => {
  console.log(`My name is ${person.name}`);
};

// ikkinci usul
const sayname = ({ name, age }: { name: string; age: number }): void => {
  console.log(`My anme is ${name}, and I am ${age}`);
};

const fullInfo = {
  name: 'Zulfizar',
  age: 20,
  location: {
    country: 'Uzbekistan',
    city: 'Termez',
  },
  setLocation(location: { country: string, city: string }): void {
    this.location = location;
  }
}

const { name: string } = fullInfo;
const {
  location: { country, city } }:
  {
    location: {
      country: string, city: string
    }
} = fullInfo

