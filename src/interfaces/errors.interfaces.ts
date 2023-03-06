export interface ResponseError {
  response: {
    data: {
      statusCode: number;
      description: string;
    };
  };
}
