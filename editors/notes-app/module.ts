import type { EditorModule } from "document-model";
import { lazy } from "react";

export const NotesApp: EditorModule = {
  Component: lazy(() => import("./editor.js")),
  documentTypes: ["powerhouse/document-drive"],
  config: {
    id: "notes-app",
    name: "Notes App",
  },
};
