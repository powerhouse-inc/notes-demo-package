import type { Text, Todo } from "../../../document-models/notes/gen/types.js";
import { NoteListItem } from "./NoteListItem.js";

interface NoteListProps {
  notes: Array<Text | Todo>;
  selectedNoteId: string | null;
  onSelectNote: (noteId: string) => void;
  onAddText: () => void;
  onAddTodo: () => void;
}

export function NoteList({
  notes,
  selectedNoteId,
  onSelectNote,
  onAddText,
  onAddTodo,
}: NoteListProps) {
  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-gray-50">
      <div className="border-b border-gray-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Notes</h2>
        <div className="flex gap-2">
          <button
            onClick={onAddText}
            className="flex-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            + Text Note
          </button>
          <button
            onClick={onAddTodo}
            className="flex-1 rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
          >
            + Todo
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {notes.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>No notes yet.</p>
            <p className="text-sm mt-1">Create your first note above!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {notes.map((note) => (
              <NoteListItem
                key={note.id}
                note={note}
                isSelected={selectedNoteId === note.id}
                onClick={() => onSelectNote(note.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}