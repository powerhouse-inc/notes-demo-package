import type { EditorModule } from "document-model";
import { Editor } from "./editor.js";

export const module: EditorModule = {
  Component: Editor,
  documentTypes: ["powerhouse/notes"],
  config: {
    id: "notes-editor",
    name: "Notes Editor",
  },
};
