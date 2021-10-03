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

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeansGram: number = 0; // instance

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrotehr,
      private sugar: SugarProvider
    ) {
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots.....`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrotehr {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유거품기
  class CheapMilkSteeamer implements MilkFrotehr {
    private steamMilk(): void {
      console.log("steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteeamer implements MilkFrotehr {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteeamer implements MilkFrotehr {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrotehr {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class SugarMix implements SugarProvider {
    private getSugar() {
      console.log("gettting some sugar from sugar");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class JarMix implements SugarProvider {
    private getSugar() {
      console.log("gettting some sugar from Jar");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //Milk
  const CheapMilkMaker = new CheapMilkSteeamer();
  const fancyMilkMaker = new FancyMilkSteeamer();
  const coldMilkMaker = new ColdMilkSteeamer();
  const noMilk = new NoMilk();

  //Sugar
  const candySugar = new SugarMix();
  const jarSugar = new JarMix();
  const noSugar = new NoSugar();

  //
  const sweetMachine = new CoffeeMachine(12, noMilk, noSugar);
  const lateemahcine = new CoffeeMachine(12, noMilk, candySugar);
  const coldLateemahcine = new CoffeeMachine(12, CheapMilkMaker, noSugar);
  const sweetLatteMahcine = new CoffeeMachine(12, fancyMilkMaker, jarSugar);
}
