import { useState, useEffect } from "react";
import type { Todo } from "../../../document-models/notes/gen/types.js";

interface TodoNoteEditorProps {
  note: Todo;
  onUpdate: (updates: { title?: string; done?: boolean; date?: string }) => void;
  onDelete: () => void;
}

export function TodoNoteEditor({ note, onUpdate, onDelete }: TodoNoteEditorProps) {
  const [title, setTitle] = useState(note.title);
  const [done, setDone] = useState(note.done);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setTitle(note.title);
    setDone(note.done);
    setHasChanges(false);
  }, [note.id, note.title, note.done]);

  useEffect(() => {
    const isDifferent = title !== note.title || done !== note.done;
    setHasChanges(isDifferent);
  }, [title, done, note.title, note.done]);

  const handleSave = () => {
    const updates: { title?: string; done?: boolean; date?: string } = {};
    if (title !== note.title) updates.title = title;
    if (done !== note.done) updates.done = done;

    if (Object.keys(updates).length > 0) {
      updates.date = new Date().toISOString();
      onUpdate(updates);
      setHasChanges(false);
    }
  };

  const handleToggleDone = () => {
    setDone(!done);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            TODO
          </span>
          <div className="flex gap-2">
            {hasChanges && (
              <button
                onClick={handleSave}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            )}
            <button
              onClick={onDelete}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <input
              type="checkbox"
              checked={done}
              onChange={handleToggleDone}
              className="mt-1 h-6 w-6 cursor-pointer rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
            />
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Todo Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full rounded-md border border-gray-300 px-4 py-2 text-lg font-semibold focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 ${
                  done ? "line-through text-gray-500" : ""
                }`}
                placeholder="Enter todo title..."
              />
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Status</p>
                <p className="mt-1 text-lg font-semibold">
                  {done ? (
                    <span className="text-green-600">✓ Completed</span>
                  ) : (
                    <span className="text-orange-600">○ Pending</span>
                  )}
                </p>
              </div>
              <button
                onClick={handleToggleDone}
                className={`rounded-md px-4 py-2 text-sm font-medium text-white transition-colors ${
                  done
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {done ? "Mark as Pending" : "Mark as Complete"}
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <span className="font-medium">Last modified:</span>{" "}
            {new Date(note.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}