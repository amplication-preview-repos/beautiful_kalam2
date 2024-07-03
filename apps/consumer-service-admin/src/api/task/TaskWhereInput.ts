import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  methodName?: StringNullableFilter;
  parameters?: JsonFilter;
  status?: "Option1";
};
