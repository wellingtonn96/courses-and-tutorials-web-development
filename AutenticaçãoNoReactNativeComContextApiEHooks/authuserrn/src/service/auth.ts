interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fdsffsafdsfsdfdfhfdfsfi4ofjiodsjfke45wfsdfsdfd545sf',
        user: {
          name: 'wellington',
          email: 'wellington@gmail.com',
        },
      });
    }, 2000);
  });
}
