import { InputJsonValue } from "../../types";

export type TaskCreateInput = {
  methodName?: string | null;
  parameters?: InputJsonValue;
  status?: "Option1" | null;
};
