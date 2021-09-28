{
  /**
   * Type Inference
   */
  let text = "hello";
  function print(message: string) {
    console.log(message);
  }
  function add(x: number, y: number): number {
    return x + y;
  }
  const result: number = add(1, 2);
}
