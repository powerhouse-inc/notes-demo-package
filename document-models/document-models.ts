import type { DocumentModelModule } from "document-model";
import { Notes } from "./notes/module.js";

export const documentModels: DocumentModelModule<any>[] = [
  Notes,
];
