{
  /**
   * Type Assertions Shit
   * 자바스크립트 내에서 리턴하는 함수를 알고있는데
   */

  function jsStrFunc(): any {
    return 23;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // casting
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers?.push(); // bullshit

  const button = document.querySelector("something")!;
  button?.nodeValue;
}
