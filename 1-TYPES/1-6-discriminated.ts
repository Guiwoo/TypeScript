{
  type SucessState = {
    result: "Success ;";
    response: {
      body: string;
    };
  };
  type FalseState = {
    result: "fail ;";
    reaosn: string;
  };
  type LoginState = SucessState | FalseState;

  async function login(
    id: string,
    password: string
  ): Promise<LoginState | undefined> {
    try {
      if (id && password) {
        return {
          result: "Success ;",
          response: {
            body: "Logged in",
          },
        };
      }
    } catch (e) {
      console.log(e);
      return {
        result: "fail ;",
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
    if (state.result === "Success ;") {
      console.log(`❤ ${state.response.body}`);
    } else {
      console.log(`❌ ${state.reaosn}`);
    }
  };
}
