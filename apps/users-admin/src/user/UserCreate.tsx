import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="userEmail" source="userEmail" type="email" />
        <TextInput label="userFirstName" source="userFirstName" />
        <TextInput label="userLastName" source="userLastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="userPasswordHash" source="userPasswordHash" />
      </SimpleForm>
    </Create>
  );
};
