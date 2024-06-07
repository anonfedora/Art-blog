import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="avatar" source="avatar" />
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="profileAvatar" source="profileAvatar" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userBio" source="userBio" />
        <TextField label="website" source="website" />
        <TextField label="webUrl" source="webUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
