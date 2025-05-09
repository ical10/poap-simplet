export default {};

declare global {
  /** Response */
  type GeneralResponse<T> = {
    data: T;
    id: string;
    status: number;
  };
  type GeneralItemsResponse<T> = {
    data: {
      items: Array<T>;
      total: number;
    };
    id: string;
    status: number;
  };
  type SuccessResponse = GeneralResponse<{ success: boolean }>;
  type TokenResponse = GeneralResponse<{ token: string }>;

  interface FetchParams {
    page?: number;
    limit?: number;
    search?: string;
    orderBy?: string;
    order?: string;
    loader?: boolean;
  }

  type KeyValue = {
    key: string | number;
    value: string | number;
  };

  type LoginInterface = {
    jwt: string;
  };
  type LoginResponse = GeneralResponse<LoginInterface>;
}
