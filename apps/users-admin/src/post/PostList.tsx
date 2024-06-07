import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdDateAndTime" source="createdDateAndTime" />
        <TextField label="creationDateTime" source="creationDateTime" />
        <TextField label="ID" source="id" />
        <TextField label="imageURL" source="imageUrl" />
        <TextField label="postContent" source="postContent" />
        <TextField label="postContentBody" source="postContentBody" />
        <TextField label="postImageUri" source="postImageUri" />
        <TextField label="postImageURL" source="postImageUrl" />
        <TextField label="postTitle" source="postTitle" />
        <TextField label="postTitleText" source="postTitleText" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
