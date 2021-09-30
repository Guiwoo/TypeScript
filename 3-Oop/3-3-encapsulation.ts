{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public
  // private 어떤 누구라도 접근불가
  // protected 상속하는 다른 클래스에서는 접근가능 그렇지만 외부에서는 접근 불가!
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeansGram: number = 0; // instance

    private constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans;
    }

    fillCoffeeBeans = (beans: number) => {
      if (beans < 0) {
        throw new Error("Value for beans should be grater than 0!");
      }
      this.coffeeBeansGram += beans;
    };

    static makeMachine = (coffeeBeans: number): CoffeeMaker => {
      return new CoffeeMaker(coffeeBeans);
    };

    makeCoffee = (shots: number): CoffeeCup => {
      if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    };
  }

  const maker = CoffeeMaker.makeMachine(20);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "jobs");
  user.age = 6;
}
