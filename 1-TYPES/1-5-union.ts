{
  /**
   * Union Types: OR 이것저것 다닮고싶지만 이중에  하나만 나오라고 하고싶을떄
   *  활용도가 정말 높은 타입
   */

  type Direction = "left" | "rgiht" | "up" | "down";
  const move = (direction: Direction) => {
    console.log(direction);
  };
  move("down"); // auto complete

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success or fail
  type resultLogin = "sucesss" | "fail";
  //   나의 답
  //   const checkLogin = (id:string,password:string):resultLogin => {
  //       if(id&&password){
  //           return 'sucesss'
  //       }else{
  //           return 'fail'
  //       }
  //   }
  type SucessState = {
    response: {
      body: string;
    };
  };
  type FalseState = {
    reaosn: string;
  };
  type LoginState = SucessState | FalseState;

  async function loginCheck(
    id: string,
    password: string
  ): Promise<LoginState | undefined> {
    try {
      if (id && password) {
        return {
          response: {
            body: "Logged in",
          },
        };
      }
    } catch (e) {
      console.log(e);
      return {
        reaosn: `the error is ${e}`,
      };
    }
  }
  // printLoginState(state)
  // success -> ❤body
  // fail -> cry
  //   type LoginPrint = "Login clearly" | "Login False"
  //   const printLoginState = async (
  //     id: string,
  //     password: string
  //   ): Promise<LoginPrint> => {
  //       if(id&&password){
  //           return "Login clearly"
  //       }else{
  //           return "Login False"
  //       }
  //   };

  const printLoginState = (state: LoginState) => {
    if ("response" in state) {
      console.log(`❤ ${state.response.body}`);
    } else {
      console.log(`❌ ${state.reaosn}`);
    }
  };
}
