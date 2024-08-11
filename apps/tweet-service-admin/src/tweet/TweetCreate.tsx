import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <div />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
