import type { Action } from "document-model";
import type {
  AddTextInput,
  AddTodoInput,
  EditNoteInput,
  EditTextInput,
  EditTodoInput,
  DeleteNoteInput,
} from "../types.js";

export type AddTextAction = Action & { type: "ADD_TEXT"; input: AddTextInput };
export type AddTodoAction = Action & { type: "ADD_TODO"; input: AddTodoInput };
export type EditNoteAction = Action & {
  type: "EDIT_NOTE";
  input: EditNoteInput;
};
export type EditTextAction = Action & {
  type: "EDIT_TEXT";
  input: EditTextInput;
};
export type EditTodoAction = Action & {
  type: "EDIT_TODO";
  input: EditTodoInput;
};
export type DeleteNoteAction = Action & {
  type: "DELETE_NOTE";
  input: DeleteNoteInput;
};

export type NotesNotesAction =
  | AddTextAction
  | AddTodoAction
  | EditNoteAction
  | EditTextAction
  | EditTodoAction
  | DeleteNoteAction;
