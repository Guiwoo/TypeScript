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

  class CoffeeMachine {
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

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(20);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(20);
  maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);
}
