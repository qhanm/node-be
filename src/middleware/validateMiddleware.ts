import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { RESPONSE_CONST } from "../constants/status-code.const";
import { response } from "../utils/response";

function validateMiddleware(dtoClass: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToInstance(dtoClass, req.body);

    validate(dtoObj).then((errors) => {
      const e: { [key: string]: any } = {};
      errors.forEach((err) => {
        e[err.property] = Object.values(err?.constraints ?? {});
      });

      if (errors.length > 0) {
        return response(
          res,
          RESPONSE_CONST.INVALID,
          null,
          Object.assign({}, e)
        );
      }

      next();
    });
  };
}

export default validateMiddleware;
