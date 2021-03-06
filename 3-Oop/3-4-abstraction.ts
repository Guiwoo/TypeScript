{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public
  // private 어떤 누구라도 접근불가
  // protected 상속하는 다른 클래스에서는 접근가능 그렇지만 외부에서는 접근 불가!

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeansGram: number = 0; // instance

    private constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be grater than 0!");
      }
      this.coffeeBeansGram += beans;
    }
    clean() {
      console.log("cleaning the machine");
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    private grindBeans = (shots: number) => {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`);
      }
      this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    };

    private preheat = (): void => console.log("Heating up.....");

    private extract = (shots: number): CoffeeCup => {
      console.log(`Pulling ${shots} shots.....`);
      return {
        shots,
        hasMilk: false,
      };
    };

    makeCoffee = (shots: number): CoffeeCup => {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    };
  }

  class AmaterUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(20);
  const amateur = new AmaterUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
