type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// Type vs Interface

//object
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  z: number;
  x: number;
  y: number;
}

//Extends

interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// Only interface can be merged.
interface PositionInterface {
  z: number;
}

//Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // string 활용성 높은 타입설정 가능 호옹이

type NumberType = number;
type Direction = "left" | "right"; // Union Type
