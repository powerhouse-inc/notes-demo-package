import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  author: {
    name: "",
    website: "",
  },
  description: "",
  extension: ".note",
  id: "powerhouse/notes",
  name: "Notes",
  specifications: [
    {
      changeLog: [],
      modules: [
        {
          description: "",
          id: "5a6c5352-0d6c-4472-8fee-2322a299125c",
          name: "notes",
          operations: [
            {
              description: "",
              errors: [],
              examples: [],
              id: "cf2f1107-9f55-45a9-b7df-ac4ec6078011",
              name: "ADD_TEXT",
              reducer: "",
              schema:
                "input AddTextInput {\n  id: OID!\n  title: String!\n  date: Date!\n  content: String!\n}",
              scope: "global",
              template: "",
            },
            {
              description: "",
              errors: [],
              examples: [],
              id: "e406bb6d-0a98-4b6a-a727-2a82859d89bc",
              name: "ADD_TODO",
              reducer: "",
              schema:
                "input AddTodoInput {\n  id: OID!\n  title: String!\n  date: Date!\n  done: Boolean!\n}",
              scope: "global",
              template: "",
            },
            {
              description: "",
              errors: [],
              examples: [],
              id: "576ea38a-fd5b-452c-aea8-5bddecaddc9d",
              name: "EDIT_NOTE",
              reducer: "",
              schema:
                "input EditNoteInput {\n  id: OID!\n  title: String\n  date: Date\n}",
              scope: "global",
              template: "",
            },
            {
              description: "",
              errors: [],
              examples: [],
              id: "bde848ad-30d7-49e4-a526-0d94dede4087",
              name: "EDIT_TEXT",
              reducer: "",
              schema:
                "input EditTextInput {\n  id: OID!\n  title: String\n  date: Date\n  content: String\n}",
              scope: "global",
              template: "",
            },
            {
              description: "",
              errors: [],
              examples: [],
              id: "5cb85969-0450-426e-9f50-14fb0139e89b",
              name: "EDIT_TODO",
              reducer: "",
              schema:
                "input EditTodoInput {\n  id: OID!\n  title: String\n  date: Date\n  done: Boolean\n}",
              scope: "global",
              template: "",
            },
            {
              description: "",
              errors: [],
              examples: [],
              id: "f0f46863-d036-4d95-8348-390dc81305b2",
              name: "DELETE_NOTE",
              reducer: "",
              schema: "input DeleteNoteInput {\n  id: OID!\n}",
              scope: "global",
              template: "",
            },
          ],
        },
      ],
      state: {
        global: {
          examples: [],
          initialValue: '"{\\n  \\"notes\\": []\\n}"',
          schema:
            "type NotesState {\n  notes: [Note!]!\n}\n\ninterface INote {\n  id: OID!\n  title: String!\n  date: Date!\n}\n\ntype Text implements INote {\n  id: OID!\n  title: String!\n  date: Date!\n  content: String!\n}\n\ntype Todo implements INote {\n  id: OID!\n  title: String!\n  date: Date!\n  done: Boolean!\n}\n\nunion Note = Text | Todo",
        },
        local: {
          examples: [],
          initialValue: '""',
          schema: "",
        },
      },
      version: 1,
    },
  ],
};
