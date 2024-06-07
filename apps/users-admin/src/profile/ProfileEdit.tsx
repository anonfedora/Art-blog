import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="bio" multiline source="bio" />
        <div />
        <TextInput label="userBio" multiline source="userBio" />
        <TextInput label="website" source="website" />
        <TextInput label="webUrl" source="webUrl" />
      </SimpleForm>
    </Edit>
  );
};
