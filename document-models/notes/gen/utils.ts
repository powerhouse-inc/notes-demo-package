import type { DocumentModelUtils } from "document-model";
import {
  baseCreateDocument,
  baseSaveToFileHandle,
  baseLoadFromInput,
  defaultBaseState,
  generateId,
} from "document-model/core";
import type { NotesGlobalState, NotesLocalState } from "./types.js";
import type { NotesPHState } from "./types.js";
import { reducer } from "./reducer.js";
import { notesDocumentType } from "./document-type.js";
import {
  isNotesDocument,
  assertIsNotesDocument,
  isNotesState,
  assertIsNotesState,
} from "./document-schema.js";

export const initialGlobalState: NotesGlobalState = {
  notes: [],
};
export const initialLocalState: NotesLocalState = {};

export const utils: DocumentModelUtils<NotesPHState> = {
  fileExtension: ".note",
  createState(state) {
    return {
      ...defaultBaseState(),
      global: { ...initialGlobalState, ...state?.global },
      local: { ...initialLocalState, ...state?.local },
    };
  },
  createDocument(state) {
    const document = baseCreateDocument(utils.createState, state);

    document.header.documentType = notesDocumentType;

    // for backwards compatibility, but this is NOT a valid signed document id
    document.header.id = generateId();

    return document;
  },
  saveToFileHandle(document, input) {
    return baseSaveToFileHandle(document, input);
  },
  loadFromInput(input) {
    return baseLoadFromInput(input, reducer);
  },
  isStateOfType(state) {
    return isNotesState(state);
  },
  assertIsStateOfType(state) {
    return assertIsNotesState(state);
  },
  isDocumentOfType(document) {
    return isNotesDocument(document);
  },
  assertIsDocumentOfType(document) {
    return assertIsNotesDocument(document);
  },
};

export const createDocument = utils.createDocument;
export const createState = utils.createState;
export const saveToFileHandle = utils.saveToFileHandle;
export const loadFromInput = utils.loadFromInput;
export const isStateOfType = utils.isStateOfType;
export const assertIsStateOfType = utils.assertIsStateOfType;
export const isDocumentOfType = utils.isDocumentOfType;
export const assertIsDocumentOfType = utils.assertIsDocumentOfType;
