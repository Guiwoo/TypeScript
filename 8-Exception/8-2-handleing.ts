{
  class NetworkClient {
    tryConnect(): void {
      throw new Error(`No Network`);
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      //login....
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        console.log("No network");
      }
    }
  }
  // 예상하지 못하는 에러가 발생할경우 어디서 처리를 해야 의미가 있을지 생각해볼것! 그리고 뭘해줄건지 생각해봅시다.
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
