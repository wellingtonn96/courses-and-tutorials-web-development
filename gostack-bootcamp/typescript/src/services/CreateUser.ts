/***
 * Para criar: name, email, senha
 */

interface TechObject {
  title: string;
  experience: number;
}

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: ICreateUser) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
