import { InputJsonValue } from "../../types";

export type TaskUpdateInput = {
  methodName?: string | null;
  parameters?: InputJsonValue;
  status?: "Option1" | null;
};
