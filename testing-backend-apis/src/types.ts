export interface CustomError extends Error {
  message: string;
  statusCode?: number;
  data?: any;
}

export interface UrlParams {
  longUrl: string;
}

export interface CodeParams {
  shortUrl: string;
}
