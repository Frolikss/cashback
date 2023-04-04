export interface ResponseError {
  response: {
    data: {
      statusCode: number;
      description: string;
    };
  };
}

export interface InviteResponse {
  statusCode: number;
  message: string;
}
