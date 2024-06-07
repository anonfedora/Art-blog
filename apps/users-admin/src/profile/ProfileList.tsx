import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="avatar" source="avatar" />
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="profileAvatar" source="profileAvatar" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userBio" source="userBio" />
        <TextField label="website" source="website" />
        <TextField label="webUrl" source="webUrl" />
      </Datagrid>
    </List>
  );
};
