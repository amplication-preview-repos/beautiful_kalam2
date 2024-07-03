import { JsonValue } from "type-fest";

export type Task = {
  createdAt: Date;
  id: string;
  methodName: string | null;
  parameters: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
