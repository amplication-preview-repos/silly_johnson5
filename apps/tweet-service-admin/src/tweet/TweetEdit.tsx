import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TweetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <div />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
