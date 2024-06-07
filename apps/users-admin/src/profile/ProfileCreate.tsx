import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="bio" multiline source="bio" />
        <div />
        <TextInput label="userBio" multiline source="userBio" />
        <TextInput label="website" source="website" />
        <TextInput label="webUrl" source="webUrl" />
      </SimpleForm>
    </Create>
  );
};
