// functions annotation
const logger: (name: string) => void = (name: string) => {
  console.log(name)
}

// ikkinchi usul
const calc = (a: number, b: number): number => a + b;

// 

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = function (a: number, b: number): number {
  return a / b;
}

const sayError = (message: string): string | never => {
  if (message) {
    return message
  } else {
    throw new Error(message)
  }
}
