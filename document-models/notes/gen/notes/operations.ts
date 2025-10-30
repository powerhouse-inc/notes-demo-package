import { type SignalDispatch } from "document-model";
import {
  type AddTextAction,
  type AddTodoAction,
  type EditNoteAction,
  type EditTextAction,
  type EditTodoAction,
  type DeleteNoteAction,
} from "./actions.js";
import { type NotesState } from "../types.js";

export interface NotesNotesOperations {
  addTextOperation: (
    state: NotesState,
    action: AddTextAction,
    dispatch?: SignalDispatch,
  ) => void;
  addTodoOperation: (
    state: NotesState,
    action: AddTodoAction,
    dispatch?: SignalDispatch,
  ) => void;
  editNoteOperation: (
    state: NotesState,
    action: EditNoteAction,
    dispatch?: SignalDispatch,
  ) => void;
  editTextOperation: (
    state: NotesState,
    action: EditTextAction,
    dispatch?: SignalDispatch,
  ) => void;
  editTodoOperation: (
    state: NotesState,
    action: EditTodoAction,
    dispatch?: SignalDispatch,
  ) => void;
  deleteNoteOperation: (
    state: NotesState,
    action: DeleteNoteAction,
    dispatch?: SignalDispatch,
  ) => void;
}
