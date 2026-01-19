/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */
/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect } from "vitest";
import {
  utils,
  initialGlobalState,
  initialLocalState,
  notesDocumentType,
  isNotesDocument,
  assertIsNotesDocument,
  isNotesState,
  assertIsNotesState,
} from "@powerhousedao/notes-demo-package/document-models/notes";
import { ZodError } from "zod";

describe("Notes Document Model", () => {
  it("should create a new Notes document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.header.documentType).toBe(notesDocumentType);
  });

  it("should create a new Notes document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
    expect(isNotesDocument(document)).toBe(true);
    expect(isNotesState(document.state)).toBe(true);
  });
  it("should reject a document that is not a Notes document", () => {
    const wrongDocumentType = utils.createDocument();
    wrongDocumentType.header.documentType = "the-wrong-thing-1234";
    try {
      expect(assertIsNotesDocument(wrongDocumentType)).toThrow();
      expect(isNotesDocument(wrongDocumentType)).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(ZodError);
    }
  });
  const wrongState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongState.state.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isNotesState(wrongState.state)).toBe(false);
    expect(assertIsNotesState(wrongState.state)).toThrow();
    expect(isNotesDocument(wrongState)).toBe(false);
    expect(assertIsNotesDocument(wrongState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const wrongInitialState = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  wrongInitialState.initialState.global = {
    ...{ notWhat: "you want" },
  };
  try {
    expect(isNotesState(wrongInitialState.state)).toBe(false);
    expect(assertIsNotesState(wrongInitialState.state)).toThrow();
    expect(isNotesDocument(wrongInitialState)).toBe(false);
    expect(assertIsNotesDocument(wrongInitialState)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingIdInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingIdInHeader.header.id;
  try {
    expect(isNotesDocument(missingIdInHeader)).toBe(false);
    expect(assertIsNotesDocument(missingIdInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingNameInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingNameInHeader.header.name;
  try {
    expect(isNotesDocument(missingNameInHeader)).toBe(false);
    expect(assertIsNotesDocument(missingNameInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingCreatedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingCreatedAtUtcIsoInHeader.header.createdAtUtcIso;
  try {
    expect(isNotesDocument(missingCreatedAtUtcIsoInHeader)).toBe(false);
    expect(assertIsNotesDocument(missingCreatedAtUtcIsoInHeader)).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }

  const missingLastModifiedAtUtcIsoInHeader = utils.createDocument();
  // @ts-expect-error - we are testing the error case
  delete missingLastModifiedAtUtcIsoInHeader.header.lastModifiedAtUtcIso;
  try {
    expect(isNotesDocument(missingLastModifiedAtUtcIsoInHeader)).toBe(false);
    expect(
      assertIsNotesDocument(missingLastModifiedAtUtcIsoInHeader),
    ).toThrow();
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});
