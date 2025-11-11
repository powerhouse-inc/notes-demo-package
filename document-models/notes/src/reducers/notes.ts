import type { NotesNotesOperations } from "@powerhousedao/notes-demo-package/document-models/notes";

export const notesNotesOperations: NotesNotesOperations = {
  addTextOperation(state, action) {
    state.notes.push({
      id: action.input.id,
      title: action.input.title,
      date: action.input.date,
      content: action.input.content,
    });
  },
  addTodoOperation(state, action) {
    state.notes.push({
      id: action.input.id,
      title: action.input.title,
      date: action.input.date,
      done: action.input.done,
    });
  },
  editNoteOperation(state, action) {
    const note = state.notes.find((note) => note.id === action.input.id);
    if (!note) {
      throw new Error(`Note with id ${action.input.id} not found`);
    }
    if (typeof action.input.title === "string") {
      note.title = action.input.title;
    }
    if (typeof action.input.date === "string") {
      note.date = action.input.date;
    }
  },
  editTextOperation(state, action) {
    const note = state.notes.find((note) => note.id === action.input.id);
    if (!note) {
      throw new Error(`Note with id ${action.input.id} not found`);
    }

    if (!("content" in note)) {
      throw new Error(`Note with id ${action.input.id} is not a Text note`);
    }

    if (typeof action.input.title === "string") {
      note.title = action.input.title;
    }
    if (typeof action.input.date === "string") {
      note.date = action.input.date;
    }
    if (typeof action.input.content === "string") {
      note.content = action.input.content;
    }
  },
  editTodoOperation(state, action) {
    const note = state.notes.find((note) => note.id === action.input.id);
    if (!note) {
      throw new Error(`Note with id ${action.input.id} not found`);
    }

    if (!("done" in note)) {
      throw new Error(`Note with id ${action.input.id} is not a Todo note`);
    }

    if (typeof action.input.title === "string") {
      note.title = action.input.title;
    }
    if (typeof action.input.date === "string") {
      note.date = action.input.date;
    }
    if (typeof action.input.done === "boolean") {
      note.done = action.input.done;
    }
  },
  deleteNoteOperation(state, action) {
    state.notes.splice(
      state.notes.findIndex((note) => note.id === action.input.id),
      1,
    );
  },
};
