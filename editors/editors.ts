import type { EditorModule } from "document-model";
import { NotesApp } from "./notes-app/module.js";
import { NotesEditor } from "./notes-editor/module.js";

export const editors: EditorModule[] = [NotesApp, NotesEditor];
