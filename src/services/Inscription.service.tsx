import axios from "axios";
import { InscriptionDTO } from "../dto/Add.dto";

export class InscriptionService {
  private static instance?: InscriptionService;

  public static getInstance(): InscriptionService {
    if (InscriptionService.instance === undefined) {
      InscriptionService.instance = new InscriptionService();
    }
    return InscriptionService.instance;
  }

  private constructor() {}

  async inscription(inscription: any): Promise<InscriptionDTO | undefined> {
    const email = await axios.post(
      "https://b352-94-228-190-38.eu.ngrok.io/api/auth/signup",
      inscription
    );

    if (email) {
      console.log(email);
      return inscription;
    }
    return undefined;
  }
}
