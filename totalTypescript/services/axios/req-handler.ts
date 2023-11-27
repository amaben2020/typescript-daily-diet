import { AxiosError, AxiosResponse } from "axios";

type TBaseRequest<T, U> = (params?: T) => Promise<AxiosResponse<U>>;
type TSuccessResponse<T> = {
  code: "success";
  data: T;
};
type TErrorResponse<E = AxiosError> = {
  code: "error";
  error: string | E;
};
type TBaseResponse<T, E> = TSuccessResponse<T> | TErrorResponse<E>;

export const reqHandler = async <T, V, E = AxiosError>(
  request: TBaseRequest<V, T>,
  params: V,
) => {
  try {
    const response = await request(params);
    return {
      code: "success",
      data: response.data,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        code: "error",
        error: error.message as E,
      };
    }
  }
};
