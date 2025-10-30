/**
 * Factory methods for creating NotesDocument instances
 */
import type { PHAuthState, PHDocumentState, PHBaseState } from "document-model";
import { createBaseState, defaultBaseState } from "document-model/core";
import type {
  NotesDocument,
  NotesLocalState,
  NotesGlobalState,
  NotesPHState,
} from "./types.js";
import { createDocument } from "./utils.js";

export function defaultGlobalState(): NotesGlobalState {
  return {
    notes: [],
  };
}

export function defaultLocalState(): NotesLocalState {
  return {};
}

export function defaultPHState(): NotesPHState {
  return {
    ...defaultBaseState(),
    global: defaultGlobalState(),
    local: defaultLocalState(),
  };
}

export function createGlobalState(
  state?: Partial<NotesGlobalState>,
): NotesGlobalState {
  return {
    ...defaultGlobalState(),
    ...(state || {}),
  } as NotesGlobalState;
}

export function createLocalState(
  state?: Partial<NotesLocalState>,
): NotesLocalState {
  return {
    ...defaultLocalState(),
    ...(state || {}),
  } as NotesLocalState;
}

export function createState(
  baseState?: Partial<PHBaseState>,
  globalState?: Partial<NotesGlobalState>,
  localState?: Partial<NotesLocalState>,
): NotesPHState {
  return {
    ...createBaseState(baseState?.auth, baseState?.document),
    global: createGlobalState(globalState),
    local: createLocalState(localState),
  };
}

/**
 * Creates a NotesDocument with custom global and local state
 * This properly handles the PHBaseState requirements while allowing
 * document-specific state to be set.
 */
export function createNotesDocument(
  state?: Partial<{
    auth?: Partial<PHAuthState>;
    document?: Partial<PHDocumentState>;
    global?: Partial<NotesGlobalState>;
    local?: Partial<NotesLocalState>;
  }>,
): NotesDocument {
  const document = createDocument(
    state
      ? createState(
          createBaseState(state.auth, state.document),
          state.global,
          state.local,
        )
      : undefined,
  );

  return document;
}
