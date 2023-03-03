export interface LoginDTO {
  email: string;
  password: string;
}

export const LoginTransformer: (item: any) => LoginDTO | undefined = (
  item: any
) => {
  const properties = item.properties;
  if (
    properties &&
    typeof properties.email === "string" &&
    typeof properties.password === "string"
  ) {
    return {
      email: properties.email,
      password: properties.password
    };
  }
  return undefined;
};
