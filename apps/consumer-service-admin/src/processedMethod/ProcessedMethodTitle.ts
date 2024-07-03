import { ProcessedMethod as TProcessedMethod } from "../api/processedMethod/ProcessedMethod";

export const PROCESSEDMETHOD_TITLE_FIELD = "methodName";

export const ProcessedMethodTitle = (record: TProcessedMethod): string => {
  return record.methodName?.toString() || String(record.id);
};
