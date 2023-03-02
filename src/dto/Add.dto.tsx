export interface InscriptionDTO {
  name: string;
  firstname: string;
  email: string;
  password: string;
}

export const InscriptionTransformer: (
  item: any
) => InscriptionDTO | undefined = (item: any) => {
  const properties = item.properties;
  if (
    properties &&
    typeof properties.email === "string" &&
    typeof properties.password === "string" &&
    typeof properties.name === "string" &&
    typeof properties.firstname === "string" 
  ) {
    return {
      email: properties.email,
      password: properties.password,
      name: properties.name,
      firstname: properties.firstname
    };
  }
  return undefined;
};
