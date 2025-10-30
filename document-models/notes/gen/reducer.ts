// TODO: remove eslint-disable rules once refactor is done
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model/core";
import type { NotesPHState } from "./types.js";
import { z } from "./types.js";

import { reducer as NotesReducer } from "../src/reducers/notes.js";

export const stateReducer: StateReducer<NotesPHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }

  switch (action.type) {
    case "ADD_TEXT":
      z.AddTextInputSchema().parse(action.input);
      NotesReducer.addTextOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "ADD_TODO":
      z.AddTodoInputSchema().parse(action.input);
      NotesReducer.addTodoOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "EDIT_NOTE":
      z.EditNoteInputSchema().parse(action.input);
      NotesReducer.editNoteOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "EDIT_TEXT":
      z.EditTextInputSchema().parse(action.input);
      NotesReducer.editTextOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "EDIT_TODO":
      z.EditTodoInputSchema().parse(action.input);
      NotesReducer.editTodoOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "DELETE_NOTE":
      z.DeleteNoteInputSchema().parse(action.input);
      NotesReducer.deleteNoteOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    default:
      return state;
  }
};

export const reducer = createReducer<NotesPHState>(stateReducer);
