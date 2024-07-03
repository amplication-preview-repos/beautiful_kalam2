import { JsonValue } from "type-fest";

export type ProcessedMethod = {
  createdAt: Date;
  id: string;
  methodName: string | null;
  processedAt: Date | null;
  result: JsonValue;
  updatedAt: Date;
};
