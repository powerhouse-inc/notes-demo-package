import { createAction } from "document-model/core";
import {
  AddTextInputSchema,
  AddTodoInputSchema,
  EditNoteInputSchema,
  EditTextInputSchema,
  EditTodoInputSchema,
  DeleteNoteInputSchema,
} from "../schema/zod.js";
import type {
  AddTextInput,
  AddTodoInput,
  EditNoteInput,
  EditTextInput,
  EditTodoInput,
  DeleteNoteInput,
} from "../types.js";
import type {
  AddTextAction,
  AddTodoAction,
  EditNoteAction,
  EditTextAction,
  EditTodoAction,
  DeleteNoteAction,
} from "./actions.js";

export const addText = (input: AddTextInput) =>
  createAction<AddTextAction>(
    "ADD_TEXT",
    { ...input },
    undefined,
    AddTextInputSchema,
    "global",
  );

export const addTodo = (input: AddTodoInput) =>
  createAction<AddTodoAction>(
    "ADD_TODO",
    { ...input },
    undefined,
    AddTodoInputSchema,
    "global",
  );

export const editNote = (input: EditNoteInput) =>
  createAction<EditNoteAction>(
    "EDIT_NOTE",
    { ...input },
    undefined,
    EditNoteInputSchema,
    "global",
  );

export const editText = (input: EditTextInput) =>
  createAction<EditTextAction>(
    "EDIT_TEXT",
    { ...input },
    undefined,
    EditTextInputSchema,
    "global",
  );

export const editTodo = (input: EditTodoInput) =>
  createAction<EditTodoAction>(
    "EDIT_TODO",
    { ...input },
    undefined,
    EditTodoInputSchema,
    "global",
  );

export const deleteNote = (input: DeleteNoteInput) =>
  createAction<DeleteNoteAction>(
    "DELETE_NOTE",
    { ...input },
    undefined,
    DeleteNoteInputSchema,
    "global",
  );
