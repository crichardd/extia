import axios from "axios";
import { LoginDTO } from "../dto/Login.dto";

export class LoginService {
  private static instance?: LoginService;

  public static getInstance(): LoginService {
    if (LoginService.instance === undefined) {
      LoginService.instance = new LoginService();
    }
    return LoginService.instance;
  }

  private constructor() {}

  async email(email: any): Promise<LoginDTO | undefined> {
    const response = await axios.post(
      "http://63.33.61.128:3000/api/auth/login",
      email
    );
    console.log(response);
    if (response) {
      return email;
    }
    return undefined;
  }
}
