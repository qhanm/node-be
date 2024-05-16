const RESPONSE_CONST: {
  [key: string]: { type: string; status: number };
} = {
  INVALID: {
    type: "INVALID",
    status: 400,
  },
  ALREADY_EXIST: {
    type: "ALREADY_EXIST",
    status: 409,
  },
  GET_SUCCESS: {
    type: "SUCCESS",
    status: 200,
  },
  ACTION_SUCCESS: {
    type: "SUCCESS",
    status: 201,
  },
  UNAUTHORIZED: {
    type: "UNAUTHORIZED",
    status: 401,
  },
  INTERNAL_ERROR: {
    type: "INTERNAL_SERVER_ERROR",
    status: 500,
  },
};

export { RESPONSE_CONST };
