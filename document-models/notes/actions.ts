import { baseActions } from "document-model";
import { notesActions } from "./gen/creators.js";

/** Actions for the Notes document model */

export const actions = { ...baseActions, ...notesActions };
