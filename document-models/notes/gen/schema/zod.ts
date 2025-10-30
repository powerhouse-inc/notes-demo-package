import { z } from "zod";
import type {
  AddTextInput,
  AddTodoInput,
  DeleteNoteInput,
  EditNoteInput,
  EditTextInput,
  EditTodoInput,
  NotesState,
  Text,
  Todo,
} from "./types.js";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export function AddTextInputSchema(): z.ZodObject<Properties<AddTextInput>> {
  return z.object({
    content: z.string(),
    date: z.string().datetime(),
    id: z.string(),
    title: z.string(),
  });
}

export function AddTodoInputSchema(): z.ZodObject<Properties<AddTodoInput>> {
  return z.object({
    date: z.string().datetime(),
    done: z.boolean(),
    id: z.string(),
    title: z.string(),
  });
}

export function DeleteNoteInputSchema(): z.ZodObject<
  Properties<DeleteNoteInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function EditNoteInputSchema(): z.ZodObject<Properties<EditNoteInput>> {
  return z.object({
    date: z.string().datetime().nullish(),
    id: z.string(),
    title: z.string().nullish(),
  });
}

export function EditTextInputSchema(): z.ZodObject<Properties<EditTextInput>> {
  return z.object({
    content: z.string().nullish(),
    date: z.string().datetime().nullish(),
    id: z.string(),
    title: z.string().nullish(),
  });
}

export function EditTodoInputSchema(): z.ZodObject<Properties<EditTodoInput>> {
  return z.object({
    date: z.string().datetime().nullish(),
    done: z.boolean().nullish(),
    id: z.string(),
    title: z.string().nullish(),
  });
}

export function NoteSchema() {
  return z.union([TextSchema(), TodoSchema()]);
}

export function NotesStateSchema(): z.ZodObject<Properties<NotesState>> {
  return z.object({
    __typename: z.literal("NotesState").optional(),
    notes: z.array(NoteSchema()),
  });
}

export function TextSchema(): z.ZodObject<Properties<Text>> {
  return z.object({
    __typename: z.literal("Text").optional(),
    content: z.string(),
    date: z.string().datetime(),
    id: z.string(),
    title: z.string(),
  });
}

export function TodoSchema(): z.ZodObject<Properties<Todo>> {
  return z.object({
    __typename: z.literal("Todo").optional(),
    date: z.string().datetime(),
    done: z.boolean(),
    id: z.string(),
    title: z.string(),
  });
}
