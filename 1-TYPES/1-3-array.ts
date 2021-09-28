{
  //Array
  const fruits: string[] = ["apple", "banana"];
  const numbers: number[] = [1, 2, 3, 4, 5];
  const numbers2: Array<number> = [1, 2, 3, 4, 5, 6, 7];

  const printFruits = (fruits: readonly string[]) => {};

  //Tuple. 권장하지 않음 -> interface, type alias, class  대체 해서 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
