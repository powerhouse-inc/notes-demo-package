import type { BaseSubgraph } from "@powerhousedao/reactor-api";
import { addFile } from "document-drive";
import { setName } from "document-model";
import {
  actions,
  notesDocumentType,
} from "@powerhousedao/notes-demo-package/document-models/notes";

import type {
  NotesDocument,
  AddTextInput,
  AddTodoInput,
  EditNoteInput,
  EditTextInput,
  EditTodoInput,
  DeleteNoteInput,
} from "@powerhousedao/notes-demo-package/document-models/notes";

export const getResolvers = (
  subgraph: BaseSubgraph,
): Record<string, unknown> => {
  const reactor = subgraph.reactor;

  return {
    Query: {
      Notes: async () => {
        return {
          getDocument: async (args: { docId: string; driveId: string }) => {
            const { docId, driveId } = args;

            if (!docId) {
              throw new Error("Document id is required");
            }

            if (driveId) {
              const docIds = await reactor.getDocuments(driveId);
              if (!docIds.includes(docId)) {
                throw new Error(
                  `Document with id ${docId} is not part of ${driveId}`,
                );
              }
            }

            const doc = await reactor.getDocument<NotesDocument>(docId);
            return {
              driveId: driveId,
              ...doc,
              ...doc.header,
              created: doc.header.createdAtUtcIso,
              lastModified: doc.header.lastModifiedAtUtcIso,
              state: doc.state.global,
              stateJSON: doc.state.global,
              revision: doc.header?.revision?.global ?? 0,
            };
          },
          getDocuments: async (args: { driveId: string }) => {
            const { driveId } = args;
            const docsIds = await reactor.getDocuments(driveId);
            const docs = await Promise.all(
              docsIds.map(async (docId) => {
                const doc = await reactor.getDocument<NotesDocument>(docId);
                return {
                  driveId: driveId,
                  ...doc,
                  ...doc.header,
                  created: doc.header.createdAtUtcIso,
                  lastModified: doc.header.lastModifiedAtUtcIso,
                  state: doc.state.global,
                  stateJSON: doc.state.global,
                  revision: doc.header?.revision?.global ?? 0,
                };
              }),
            );

            return docs.filter(
              (doc) => doc.header.documentType === notesDocumentType,
            );
          },
        };
      },
    },
    Mutation: {
      Notes_createDocument: async (
        _: unknown,
        args: { name: string; driveId?: string },
      ) => {
        const { driveId, name } = args;
        const document = await reactor.addDocument(notesDocumentType);

        if (driveId) {
          await reactor.addAction(
            driveId,
            addFile({
              name,
              id: document.header.id,
              documentType: notesDocumentType,
            }),
          );
        }

        if (name) {
          await reactor.addAction(document.header.id, setName(name));
        }

        return document.header.id;
      },

      Notes_addText: async (
        _: unknown,
        args: { docId: string; input: AddTextInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<NotesDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(docId, actions.addText(input));

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to addText");
        }

        return true;
      },

      Notes_addTodo: async (
        _: unknown,
        args: { docId: string; input: AddTodoInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<NotesDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(docId, actions.addTodo(input));

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to addTodo");
        }

        return true;
      },

      Notes_editNote: async (
        _: unknown,
        args: { docId: string; input: EditNoteInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<NotesDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(docId, actions.editNote(input));

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to editNote");
        }

        return true;
      },

      Notes_editText: async (
        _: unknown,
        args: { docId: string; input: EditTextInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<NotesDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(docId, actions.editText(input));

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to editText");
        }

        return true;
      },

      Notes_editTodo: async (
        _: unknown,
        args: { docId: string; input: EditTodoInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<NotesDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(docId, actions.editTodo(input));

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to editTodo");
        }

        return true;
      },

      Notes_deleteNote: async (
        _: unknown,
        args: { docId: string; input: DeleteNoteInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<NotesDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.deleteNote(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to deleteNote");
        }

        return true;
      },
    },
  };
};
