export type StatusCode = 200 | 204 | 400 | 401 | 404 | 500;

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

export interface configConstants {
  ENV_SERVER: string;
  PORT: number;
  CORS_ORIGINS: string;
  METHODS_ALLOWED: string;
  DATABASE_URL: string;
  SINTAXIS: {
    TAB: string;
  };
}
