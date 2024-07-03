import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  methodName?: SortOrder;
  parameters?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
