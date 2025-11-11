// TODO: remove eslint-disable rules once refactor is done
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model/core";
import type { NotesPHState } from "@powerhousedao/notes-demo-package/document-models/notes";

import { notesNotesOperations } from "../src/reducers/notes.js";

import {
  AddTextInputSchema,
  AddTodoInputSchema,
  EditNoteInputSchema,
  EditTextInputSchema,
  EditTodoInputSchema,
  DeleteNoteInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<NotesPHState> = (state, action, dispatch) => {
  if (isDocumentAction(action)) {
    return state;
  }

  switch (action.type) {
    case "ADD_TEXT":
      AddTextInputSchema().parse(action.input);
      notesNotesOperations.addTextOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "ADD_TODO":
      AddTodoInputSchema().parse(action.input);
      notesNotesOperations.addTodoOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "EDIT_NOTE":
      EditNoteInputSchema().parse(action.input);
      notesNotesOperations.editNoteOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "EDIT_TEXT":
      EditTextInputSchema().parse(action.input);
      notesNotesOperations.editTextOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "EDIT_TODO":
      EditTodoInputSchema().parse(action.input);
      notesNotesOperations.editTodoOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "DELETE_NOTE":
      DeleteNoteInputSchema().parse(action.input);
      notesNotesOperations.deleteNoteOperation(
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
