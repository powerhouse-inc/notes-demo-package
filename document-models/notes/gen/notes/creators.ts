import { createAction } from "document-model/core";
import {
  z,
  type AddTextInput,
  type AddTodoInput,
  type EditNoteInput,
  type EditTextInput,
  type EditTodoInput,
  type DeleteNoteInput,
} from "../types.js";
import {
  type AddTextAction,
  type AddTodoAction,
  type EditNoteAction,
  type EditTextAction,
  type EditTodoAction,
  type DeleteNoteAction,
} from "./actions.js";

export const addText = (input: AddTextInput) =>
  createAction<AddTextAction>(
    "ADD_TEXT",
    { ...input },
    undefined,
    z.AddTextInputSchema,
    "global",
  );

export const addTodo = (input: AddTodoInput) =>
  createAction<AddTodoAction>(
    "ADD_TODO",
    { ...input },
    undefined,
    z.AddTodoInputSchema,
    "global",
  );

export const editNote = (input: EditNoteInput) =>
  createAction<EditNoteAction>(
    "EDIT_NOTE",
    { ...input },
    undefined,
    z.EditNoteInputSchema,
    "global",
  );

export const editText = (input: EditTextInput) =>
  createAction<EditTextAction>(
    "EDIT_TEXT",
    { ...input },
    undefined,
    z.EditTextInputSchema,
    "global",
  );

export const editTodo = (input: EditTodoInput) =>
  createAction<EditTodoAction>(
    "EDIT_TODO",
    { ...input },
    undefined,
    z.EditTodoInputSchema,
    "global",
  );

export const deleteNote = (input: DeleteNoteInput) =>
  createAction<DeleteNoteAction>(
    "DELETE_NOTE",
    { ...input },
    undefined,
    z.DeleteNoteInputSchema,
    "global",
  );
