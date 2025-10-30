import type { Text, Todo } from "../../../document-models/notes/gen/types.js";

interface NoteListItemProps {
  note: Text | Todo;
  isSelected: boolean;
  onClick: () => void;
}

export function NoteListItem({ note, isSelected, onClick }: NoteListItemProps) {
  const isTodo = "done" in note;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border p-3 transition-all hover:shadow-md ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-start gap-3">
        {isTodo && (
          <input
            type="checkbox"
            checked={note.done}
            readOnly
            className="mt-1 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <div className="flex-1 overflow-hidden">
          <h3 className={`truncate font-medium ${isTodo && note.done ? "line-through text-gray-500" : "text-gray-900"}`}>
            {note.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            {new Date(note.date).toLocaleDateString()}
          </p>
        </div>
        <span className="text-xs font-medium text-gray-400">
          {isTodo ? "TODO" : "TEXT"}
        </span>
      </div>
    </div>
  );
}