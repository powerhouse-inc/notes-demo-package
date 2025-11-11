import {
  BaseDocumentHeaderSchema,
  BaseDocumentStateSchema,
} from "document-model";
import { z } from "zod";
import { notesDocumentType } from "./document-type.js";
import { NotesStateSchema } from "./schema/zod.js";
import type { NotesDocument, NotesPHState } from "./types.js";

/** Schema for validating the header object of a Notes document */
export const NotesDocumentHeaderSchema = BaseDocumentHeaderSchema.extend({
  documentType: z.literal(notesDocumentType),
});

/** Schema for validating the state object of a Notes document */
export const NotesPHStateSchema = BaseDocumentStateSchema.extend({
  global: NotesStateSchema(),
});

export const NotesDocumentSchema = z.object({
  header: NotesDocumentHeaderSchema,
  state: NotesPHStateSchema,
  initialState: NotesPHStateSchema,
});

/** Simple helper function to check if a state object is a Notes document state object */
export function isNotesState(state: unknown): state is NotesPHState {
  return NotesPHStateSchema.safeParse(state).success;
}

/** Simple helper function to assert that a document state object is a Notes document state object */
export function assertIsNotesState(
  state: unknown,
): asserts state is NotesPHState {
  NotesPHStateSchema.parse(state);
}

/** Simple helper function to check if a document is a Notes document */
export function isNotesDocument(document: unknown): document is NotesDocument {
  return NotesDocumentSchema.safeParse(document).success;
}

/** Simple helper function to assert that a document is a Notes document */
export function assertIsNotesDocument(
  document: unknown,
): asserts document is NotesDocument {
  NotesDocumentSchema.parse(document);
}
