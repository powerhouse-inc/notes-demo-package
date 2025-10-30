import {
  useDocumentOfType,
  useSelectedDocumentOfType,
} from "@powerhousedao/reactor-browser";
import type {
  NotesAction,
  NotesDocument,
} from "../../document-models/notes/index.js";

export function useNotesDocument(documentId: string | null | undefined) {
  return useDocumentOfType<NotesDocument, NotesAction>(
    documentId,
    "powerhouse/notes",
  );
}

export function useSelectedNotesDocument() {
  return useSelectedDocumentOfType<NotesDocument, NotesAction>(
    "powerhouse/notes",
  );
}
