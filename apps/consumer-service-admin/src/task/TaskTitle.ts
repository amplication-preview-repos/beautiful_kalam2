import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "methodName";

export const TaskTitle = (record: TTask): string => {
  return record.methodName?.toString() || String(record.id);
};
