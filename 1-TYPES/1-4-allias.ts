{
  //TypeScript 가 멋진이유
  type Text = string;
  const address: Text = "abcab@abc.com";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "guiwoo",
    age: 44,
  };

  // String Literal Types  왜씀 ? 1-5에  있음
  //
  type Name = "name";
  let guiwooname: Name;
  guiwooname = "name";

  type Boal = true;
  const amICat: Boal = true;
}
