{
  // JavaScript ❌
  function jsAdd(num1: any, num2: any) {
    return num1 + num2;
  }

  // TypeScript 💛
  function jsAdd2(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ❌
  const jsFetchNum = () => {
    //code..
    //code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };

  // TypeScript 💛
  const jsFetchNumTs = (id: string): Promise<number> => {
    //code..
    //code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };

  //Optional parameter
  const printName = (firstName: string, lastName?: string) => {
    console.log(firstName, lastName);
  };
  printName("Steve", `jobs`);
  printName("guiwoo");

  // Default parameter
  const printMessage = (message: string = "I am default") =>
    console.log(message);
  printMessage();

  // Rest parameter
  const addMulti = (...numbers: number[]): number => {
    return numbers.reduce((prev, curr) => prev + curr);
  };
}
