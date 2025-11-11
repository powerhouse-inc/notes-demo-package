import type { EditorModule } from "document-model";
import { lazy } from "react";

export const NotesEditor: EditorModule = {
  Component: lazy(() => import("./editor.js")),
  documentTypes: ["powerhouse/notes"],
  config: {
    id: "notes-editor",
    name: "Notes Editor",
  },
};
