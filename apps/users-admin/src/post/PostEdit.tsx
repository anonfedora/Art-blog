import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="createdDateAndTime" source="createdDateAndTime" />
        <DateTimeInput label="creationDateTime" source="creationDateTime" />
        <TextInput label="imageURL" source="imageUrl" />
        <TextInput label="postContent" multiline source="postContent" />
        <TextInput label="postContentBody" multiline source="postContentBody" />
        <TextInput label="postImageUri" source="postImageUri" />
        <TextInput label="postImageURL" source="postImageUrl" />
        <TextInput label="postTitle" source="postTitle" />
        <TextInput label="postTitleText" source="postTitleText" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
