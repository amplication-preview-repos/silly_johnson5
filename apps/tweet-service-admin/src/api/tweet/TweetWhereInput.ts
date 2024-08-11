import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
  user?: StringNullableFilter;
};
