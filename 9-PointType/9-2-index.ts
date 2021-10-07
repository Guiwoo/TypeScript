{
  const obj = {
    name: "Guiwoo",
  };
  obj.name; // Guiwoo
  obj["name"]; // Guiwoo

  type Animal = {
    name: string;
    age: number;
    gender: `male` | `female`;
  };

  type Name = Animal["name"];

  type Gender = Animal["gender"]; // 'male' |'femail'j

  type Keys = keyof Animal; // 'name' 'age' 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const perosn: Person = {
    name: "guiwooo",
    gender: "male",
  };
}
