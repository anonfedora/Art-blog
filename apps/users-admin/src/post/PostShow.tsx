import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="commentContent" source="commentContent" />
            <TextField label="commentCreatedAt" source="commentCreatedAt" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="relatedPost" source="relatedPost" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
