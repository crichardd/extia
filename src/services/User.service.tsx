import axios, { Canceler, CancelToken } from "axios";
import { UserDTO } from "../dto/User.dto";
import "array-compact-map";

export class UserService {
  private static instance?: UserService;

  public static getInstance(): UserService {
    if (UserService.instance === undefined) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  private constructor() {}
  async getUser(cancelToken?: CancelToken, login?: string): Promise<UserDTO[]> {
    const response = await axios.get("http://localhost:3001/User");
    if (response.data && Array.isArray(response.data)) {
      return response.data.map((e) => e);
    } else {
      return [];
    }
  }
}
