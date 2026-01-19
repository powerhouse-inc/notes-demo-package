import type { DocumentModelModule } from "document-model";
import { createState } from "document-model";
import { defaultBaseState } from "document-model/core";
import type { NotesPHState } from "@powerhousedao/notes-demo-package/document-models/notes";
import {
  actions,
  documentModel,
  reducer,
  utils,
} from "@powerhousedao/notes-demo-package/document-models/notes";

/** Document model module for the Todo List document type */
export const Notes: DocumentModelModule<NotesPHState> = {
  version: 1,
  reducer,
  actions,
  utils,
  documentModel: createState(defaultBaseState(), documentModel),
};
