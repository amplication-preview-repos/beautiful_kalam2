import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedMethodCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="methodName" source="methodName" />
        <DateTimeInput label="processedAt" source="processedAt" />
        <div />
      </SimpleForm>
    </Create>
  );
};
