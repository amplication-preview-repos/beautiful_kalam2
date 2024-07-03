import { SortOrder } from "../../util/SortOrder";

export type ProcessedMethodOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  methodName?: SortOrder;
  processedAt?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
