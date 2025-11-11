import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  id: "powerhouse/notes",
  name: "Notes",
  extension: ".note",
  description: "",
  author: {
    name: "",
    website: "",
  },
  specifications: [
    {
      version: 1,
      changeLog: [],
      state: {
        global: {
          schema:
            "type NotesState {\n  notes: [Note!]!\n}\n\ninterface INote {\n  id: OID!\n  title: String!\n  date: Date!\n}\n\ntype Text implements INote {\n  id: OID!\n  title: String!\n  date: Date!\n  content: String!\n}\n\ntype Todo implements INote {\n  id: OID!\n  title: String!\n  date: Date!\n  done: Boolean!\n}\n\nunion Note = Text | Todo",
          initialValue: '"{\\n  \\"notes\\": []\\n}"',
          examples: [],
        },
        local: {
          schema: "",
          initialValue: '""',
          examples: [],
        },
      },
      modules: [
        {
          id: "33ffb48a-b125-43e5-88af-abd00f30903e",
          name: "notes",
          description: "",
          operations: [
            {
              id: "bb127d06-630f-40ec-8ad3-84e982e4e8aa",
              name: "ADD_TEXT",
              description: "",
              schema:
                "input AddTextInput {\n  id: OID!\n  title: String!\n  date: Date!\n  content: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "6e0290c9-2025-4a2d-a4fa-5c96e2ed85a8",
              name: "ADD_TODO",
              description: "",
              schema:
                "input AddTodoInput {\n  id: OID!\n  title: String!\n  date: Date!\n  done: Boolean!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "ac832d86-a95b-4a2c-8bd0-7a99b3e90770",
              name: "EDIT_NOTE",
              description: "",
              schema:
                "input EditNoteInput {\n  id: OID!\n  title: String\n  date: Date\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "1c5e8e97-3d05-48ff-9174-d4aa80e7bfe9",
              name: "EDIT_TEXT",
              description: "",
              schema:
                "input EditTextInput {\n  id: OID!\n  title: String\n  date: Date\n  content: String\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "e3508664-77b4-45bc-8223-d097d00fb147",
              name: "EDIT_TODO",
              description: "",
              schema:
                "input EditTodoInput {\n  id: OID!\n  title: String\n  date: Date\n  done: Boolean\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "22eecab3-9b9a-4420-abce-eb355d7563f0",
              name: "DELETE_NOTE",
              description: "",
              schema: "input DeleteNoteInput {\n  id: OID!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
          ],
        },
      ],
    },
  ],
};
