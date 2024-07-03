import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProcessedMethodWhereInput = {
  id?: StringFilter;
  methodName?: StringNullableFilter;
  processedAt?: DateTimeNullableFilter;
  result?: JsonFilter;
};
