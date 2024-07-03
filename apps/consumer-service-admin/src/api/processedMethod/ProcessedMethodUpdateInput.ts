import { InputJsonValue } from "../../types";

export type ProcessedMethodUpdateInput = {
  methodName?: string | null;
  processedAt?: Date | null;
  result?: InputJsonValue;
};
