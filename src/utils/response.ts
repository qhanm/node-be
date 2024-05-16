import { Response as ExpressResponse } from "express";

const response = (
  r: ExpressResponse,
  resConst: { type: string; status: number },
  data: any = null,
  errors: any = null
) => {
  return r.status(resConst.status).json({
    timestamps: new Date(),
    code: resConst.type,
    data: data,
    errors: errors,
  });
};

export { response };
