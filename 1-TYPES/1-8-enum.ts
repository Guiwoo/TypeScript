{
  /**
   * Enum 여러가지 관련된 상수값을 모아서 정의
   * 가능한 사용하지마세요옹
   * JavaScript 존재하지않음 */
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const DAYS_ENUM = Object.freeze({
    MODAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });

  //Type Script
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wedenseday, // 2
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Friday;
  day = 10; // 이넘 으로 정의 된 친구에게 숫자를 대입하면 숫가자 됨 타입이 없음
  console.log(day);
  // Just use Union type
  type DaysOfWeek = "Monday" | "Tuesday";
  let dayOfWeek: DaysOfWeek = "Monday";
  // 모바일 어플리케이션을 만들떄 안드로이드
  // 유니언 타입을 표현할수 없어 이넘타입을 사용 ;
  // 사용자를 json 으로 묶어서 보내야할떄 이걸 사용함 왜 ?
}
