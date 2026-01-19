import { generateMock } from "@powerhousedao/codegen";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isNotesDocument,
  addText,
  addTodo,
  editNote,
  editText,
  editTodo,
  deleteNote,
  AddTextInputSchema,
  AddTodoInputSchema,
  EditNoteInputSchema,
  EditTextInputSchema,
  EditTodoInputSchema,
  DeleteNoteInputSchema,
} from "@powerhousedao/notes-demo-package/document-models/notes";

describe("NotesOperations", () => {
  it("should handle addText operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddTextInputSchema());

    const updatedDocument = reducer(document, addText(input));

    expect(isNotesDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("ADD_TEXT");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addTodo operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddTodoInputSchema());

    const updatedDocument = reducer(document, addTodo(input));

    expect(isNotesDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("ADD_TODO");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle editNote operation", () => {
    const document = utils.createDocument();
    const input = generateMock(EditNoteInputSchema());

    const updatedDocument = reducer(document, editNote(input));

    expect(isNotesDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("EDIT_NOTE");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle editText operation", () => {
    const document = utils.createDocument();
    const input = generateMock(EditTextInputSchema());

    const updatedDocument = reducer(document, editText(input));

    expect(isNotesDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("EDIT_TEXT");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle editTodo operation", () => {
    const document = utils.createDocument();
    const input = generateMock(EditTodoInputSchema());

    const updatedDocument = reducer(document, editTodo(input));

    expect(isNotesDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("EDIT_TODO");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle deleteNote operation", () => {
    const document = utils.createDocument();
    const input = generateMock(DeleteNoteInputSchema());

    const updatedDocument = reducer(document, deleteNote(input));

    expect(isNotesDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "DELETE_NOTE",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
