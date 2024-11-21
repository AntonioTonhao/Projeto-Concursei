import { AuthData } from "../contexts/Auth";

const signIn = (usuario: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token: '',
          usuario: usuario,
          email: '',
        });
      } else {
        reject(new Error('credenciais incorretas'));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};

