import { gql } from "graphql-tag";
import type { DocumentNode } from "graphql";

export const schema: DocumentNode = gql`
  """
  Queries: Notes Document
  """
  type NotesQueries {
    getDocument(docId: PHID!, driveId: PHID): Notes
    getDocuments(driveId: String!): [Notes!]
  }

  type Query {
    Notes: NotesQueries
  }

  """
  Mutations: Notes
  """
  type Mutation {
    Notes_createDocument(name: String!, driveId: String): String

    Notes_addText(driveId: String, docId: PHID, input: Notes_AddTextInput): Int
    Notes_addTodo(driveId: String, docId: PHID, input: Notes_AddTodoInput): Int
    Notes_editNote(
      driveId: String
      docId: PHID
      input: Notes_EditNoteInput
    ): Int
    Notes_editText(
      driveId: String
      docId: PHID
      input: Notes_EditTextInput
    ): Int
    Notes_editTodo(
      driveId: String
      docId: PHID
      input: Notes_EditTodoInput
    ): Int
    Notes_deleteNote(
      driveId: String
      docId: PHID
      input: Notes_DeleteNoteInput
    ): Int
  }

  """
  Module: Notes
  """
  input Notes_AddTextInput {
    id: OID!
    title: String!
    date: Date!
    content: String!
  }
  input Notes_AddTodoInput {
    id: OID!
    title: String!
    date: Date!
    done: Boolean!
  }
  input Notes_EditNoteInput {
    id: OID!
    title: String
    date: Date
  }
  input Notes_EditTextInput {
    id: OID!
    title: String
    date: Date
    content: String
  }
  input Notes_EditTodoInput {
    id: OID!
    title: String
    date: Date
    done: Boolean
  }
  input Notes_DeleteNoteInput {
    id: OID!
  }
`;
