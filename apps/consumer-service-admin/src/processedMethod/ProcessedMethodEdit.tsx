import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedMethodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="methodName" source="methodName" />
        <DateTimeInput label="processedAt" source="processedAt" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
