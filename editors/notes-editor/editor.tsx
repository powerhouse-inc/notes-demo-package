import { useState } from "react";
import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import {
  setSelectedNode,
  useParentFolderForSelectedNode,
} from "@powerhousedao/reactor-browser";
import { generateId } from "document-model/core";
import { useSelectedNotesDocument } from "../hooks/useNotesDocument.js";
import {
  addText,
  addTodo,
  editText,
  editTodo,
  deleteNote,
} from "../../document-models/notes/gen/notes/creators.js";
import { NoteList } from "./components/NoteList.js";
import { TextNoteEditor } from "./components/TextNoteEditor.js";
import { TodoNoteEditor } from "./components/TodoNoteEditor.js";

export default function Editor() {
  const [document, dispatch] = useSelectedNotesDocument();
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  // Get the parent folder node for the currently selected node
  const parentFolder = useParentFolderForSelectedNode();

  // Set the selected node to the parent folder node (close the editor)
  function handleClose() {
    setSelectedNode(parentFolder?.id);
  }

  function handleAddText() {
    const id = generateId();
    const now = new Date().toISOString();
    dispatch(
      addText({
        id,
        title: "New Text Note",
        date: now,
        content: "",
      }),
    );
    setSelectedNoteId(id);
  }

  function handleAddTodo() {
    const id = generateId();
    const now = new Date().toISOString();
    dispatch(
      addTodo({
        id,
        title: "New Todo",
        date: now,
        done: false,
      })
    );
    setSelectedNoteId(id);
  }

  function handleUpdateText(
    noteId: string,
    updates: { title?: string; content?: string; date?: string },
  ) {
    dispatch(
      editText({
        id: noteId,
        ...updates,
      }),
    );
  }

  function handleUpdateTodo(
    noteId: string,
    updates: { title?: string; done?: boolean; date?: string },
  ) {
    dispatch(
      editTodo({
        id: noteId,
        ...updates,
      })
    );
  }

  function handleDeleteNote(noteId: string) {
    dispatch(deleteNote({ id: noteId }));
    setSelectedNoteId(null);
  }

  const notes = document.state.global.notes || [];
  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <div className="flex h-screen flex-col">
      <DocumentToolbar document={document} onClose={handleClose} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with note list */}
        <div className="w-80">
          <NoteList
            notes={notes}
            selectedNoteId={selectedNoteId}
            onSelectNote={setSelectedNoteId}
            onAddText={handleAddText}
            onAddTodo={handleAddTodo}
          />
        </div>

        {/* Main content area */}
        <div className="flex-1 bg-white">
          {selectedNote ? (
            "content" in selectedNote ? (
              <TextNoteEditor
                key={selectedNote.id}
                note={selectedNote}
                onUpdate={(updates) => handleUpdateText(selectedNote.id, updates)}
                onDelete={() => handleDeleteNote(selectedNote.id)}
              />
            ) : (
              <TodoNoteEditor
                key={selectedNote.id}
                note={selectedNote}
                onUpdate={(updates) => handleUpdateTodo(selectedNote.id, updates)}
                onDelete={() => handleDeleteNote(selectedNote.id)}
              />
            )
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No note selected
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Select a note from the list or create a new one
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
