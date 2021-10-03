{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
  // public
  // private 어떤 누구라도 접근불가
  // protected 상속하는 다른 클래스에서는 접근가능 그렇지만 외부에서는 접근 불가!

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeansGram: number = 0; // instance

    public constructor(coffeeBeans: number) {
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

    private grindBeans = (shots: number) => {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`);
      }
      this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    };

    private preheat = (): void => console.log("Heating up.....");

    protected abstract extract(shots: number): CoffeeCup {}

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("steaming some milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private addSugar() {
      console.log("Adding Sugar");
    }
    makeCoffee(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, "Guiwoo1212"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((m) => {
    console.log(`----------------------------------------------`);
    m.makeCoffee(2);
  });
}
