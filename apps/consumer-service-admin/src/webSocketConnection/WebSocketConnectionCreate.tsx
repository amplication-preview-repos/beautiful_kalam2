import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const WebSocketConnectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
