import type { DocumentDispatch } from "@powerhousedao/reactor-browser";
import {
  useDocumentById,
  useDocumentsInSelectedDrive,
  useDocumentsInSelectedFolder,
  useSelectedDocument,
} from "@powerhousedao/reactor-browser";
import type {
  NotesAction,
  NotesDocument,
} from "@powerhousedao/notes-demo-package/document-models/notes";
import {
  assertIsNotesDocument,
  isNotesDocument,
} from "./gen/document-schema.js";

/** Hook to get a Notes document by its id */
export function useNotesDocumentById(
  documentId: string | null | undefined,
): [NotesDocument, DocumentDispatch<NotesAction>] | [undefined, undefined] {
  const [document, dispatch] = useDocumentById(documentId);
  if (!isNotesDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get the selected Notes document */
export function useSelectedNotesDocument(): [
  NotesDocument,
  DocumentDispatch<NotesAction>,
] {
  const [document, dispatch] = useSelectedDocument();

  assertIsNotesDocument(document);
  return [document, dispatch] as const;
}

/** Hook to get all Notes documents in the selected drive */
export function useNotesDocumentsInSelectedDrive() {
  const documentsInSelectedDrive = useDocumentsInSelectedDrive();
  return documentsInSelectedDrive?.filter(isNotesDocument);
}

/** Hook to get all Notes documents in the selected folder */
export function useNotesDocumentsInSelectedFolder() {
  const documentsInSelectedFolder = useDocumentsInSelectedFolder();
  return documentsInSelectedFolder?.filter(isNotesDocument);
}
