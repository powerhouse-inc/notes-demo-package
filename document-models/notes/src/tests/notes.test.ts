/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect, beforeEach } from "vitest";
import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import { z, type AddTextInput, type AddTodoInput } from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/notes/creators.js";
import type { NotesDocument } from "../../gen/types.js";

describe("Notes Operations", () => {
  let document: NotesDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addText operation", () => {
    const input: AddTextInput = generateMock(z.AddTextInputSchema());

    const updatedDocument = reducer(document, creators.addText(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_TEXT",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle addTodo operation", () => {
    const input: AddTodoInput = generateMock(z.AddTodoInputSchema());

    const updatedDocument = reducer(document, creators.addTodo(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_TODO",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
