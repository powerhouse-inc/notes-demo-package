import { useState, useEffect } from "react";
import type { Text } from "../../../document-models/notes/gen/types.js";

interface TextNoteEditorProps {
  note: Text;
  onUpdate: (updates: { title?: string; content?: string; date?: string }) => void;
  onDelete: () => void;
}

export function TextNoteEditor({ note, onUpdate, onDelete }: TextNoteEditorProps) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setHasChanges(false);
  }, [note.id, note.title, note.content]);

  useEffect(() => {
    const isDifferent = title !== note.title || content !== note.content;
    setHasChanges(isDifferent);
  }, [title, content, note.title, note.content]);

  const handleSave = () => {
    const updates: { title?: string; content?: string; date?: string } = {};
    if (title !== note.title) updates.title = title;
    if (content !== note.content) updates.content = content;

    if (Object.keys(updates).length > 0) {
      updates.date = new Date().toISOString();
      onUpdate(updates);
      setHasChanges(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            TEXT NOTE
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
        <div className="mx-auto max-w-3xl space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-lg font-semibold focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter note title..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Write your note content here..."
              rows={15}
            />
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