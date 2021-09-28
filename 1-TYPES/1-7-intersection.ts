{
  /**
   * Intersection Types: & 다양한 타입을 하나로 묶어서 사용가능 개싱기
   */
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employId: number;
    work: () => void;
  };
  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employId, person.work());
  }
  internWork({
    name: "guiwoo",
    score: 23,
    employId: 123123,
    work: () => console.log("working"),
  });
}
