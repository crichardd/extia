import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserDTO } from "./dto/User.dto";
import Login from "./Login";

interface stateType {
  email: string;
}

function Users() {
  const [Users, setUsers] = useState<UserDTO[]>();
  const location = useLocation().state as stateType;
  const email = JSON.parse(JSON.stringify(location.email));
  console.log(email.email);

  return (
    <div>
      <h1>Mon compte</h1>
      <h4 className="text-center">Mail : {email.email}</h4>
    </div>
  );
}
export default Users;
