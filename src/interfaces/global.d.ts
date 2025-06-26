export type StatusCode = 200 | 204 | 400 | 401 | 404 | 500;

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

export interface configConstants {
  ENV_SERVER: string;
  API_PORT: number;
  CORS_ORIGINS: string;
  METHODS_ALLOWED: string;
  DB: {
    USERNAME: string;
    PASSWORD: string;
    HOST: string;
    DATABASE: string;
    DEV_DATABASE: string;
  };
  SINTAXIS: {
    TAB: string;
  };
}
