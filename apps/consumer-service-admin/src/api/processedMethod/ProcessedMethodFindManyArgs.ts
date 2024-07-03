import { ProcessedMethodWhereInput } from "./ProcessedMethodWhereInput";
import { ProcessedMethodOrderByInput } from "./ProcessedMethodOrderByInput";

export type ProcessedMethodFindManyArgs = {
  where?: ProcessedMethodWhereInput;
  orderBy?: Array<ProcessedMethodOrderByInput>;
  skip?: number;
  take?: number;
};
