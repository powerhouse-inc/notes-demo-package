import type { PHDocument, PHBaseState } from "document-model";
import type { NotesAction } from "./actions.js";
import type { NotesState as NotesGlobalState } from "./schema/types.js";

type NotesLocalState = Record<PropertyKey, never>;

type NotesPHState = PHBaseState & {
  global: NotesGlobalState;
  local: NotesLocalState;
};
type NotesDocument = PHDocument<NotesPHState>;

export * from "./schema/types.js";

export type {
  NotesGlobalState,
  NotesLocalState,
  NotesPHState,
  NotesAction,
  NotesDocument,
};
