{
  /**
   * Javascript
   * Primitive: number, stirng,boolean,bigint,symbol,null,undifined
   * Object: function, arrar.,....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let age: number | undefined; // | 는 또는 이라는 뜻  💛
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null;
  let person2: string | null; // 좋은 표현 💛

  //unknown  가능한 쓰지마세요;; 자바스크립트와 같이 사용할떄 정말 타입을 모를떄 사용용
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 가능한 쓰지마세요 최대한;
  let anything: any = 0;
  anything = "she";

  //  void 아무것도 함수에서 리턴하지않으면 이타입
  function print(): void {
    console.log("hello");
    return;
  }

  // never
  function throwError(message: string): never {
    // messaage -> server(log)
    throw new Error(message);
  }

  //object 똥타입 사용하지마세요 오브젝트도 어떤타입인지 명시해서 하는께 좋음
  let obj: object;
  function acceptSomeObj(obj: object) {}
}
