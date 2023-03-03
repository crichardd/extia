export interface UserDTO {
  lastname: string;
  firstname: string;
  email: string;
}

export const UserTransformer: (item: any) => UserDTO | undefined = (
  item: any
) => {
  const properties = item.properties;
  if (
    properties &&
    typeof properties.email === "string" &&
    typeof properties.lastname === "string" &&
    typeof properties.firstname === "string"
  ) {
    return {
      email: properties.email,
      lastname: properties.lastname,
      firstname: properties.firstname,
    };
  }
  return undefined;
};
