import { SortOrder } from "../../util/SortOrder";

export type WebSocketConnectionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
