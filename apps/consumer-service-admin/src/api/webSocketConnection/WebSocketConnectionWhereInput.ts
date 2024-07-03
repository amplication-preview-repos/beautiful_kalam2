import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WebSocketConnectionWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  url?: StringNullableFilter;
};
