const API_VERSION = '/api/';

const ApiEndPoint = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/register',
} as const;

const configApi = () => {
  const apiOb: Record<string, string> = {};

  Object.keys(ApiEndPoint).forEach(x => {
    const valueApi = ApiEndPoint[x as keyof typeof ApiEndPoint];

    apiOb[x] = API_VERSION + valueApi;
  });

  return apiOb;
};

type ApiConstantsType<T> = {
  [a in keyof T]: string;
};

export const ApiConstants = configApi() as ApiConstantsType<typeof ApiEndPoint>;
