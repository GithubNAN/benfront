import { ResponseError } from "../generated/graphql";

export const toErrorMap = (errors: ResponseError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
