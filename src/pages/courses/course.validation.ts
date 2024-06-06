import { object, string, boolean } from "yup";
const REQUIRED_ERROR_MESSAGE = "این فیلد اجباری است.";

export const courseScheme = object({
  title: string().test({
    name: "alaki",
    test(value, ctx) {
      if (value) {
        if (value.length > ctx.options?.context?.max) {
          ctx.createError({ message: "چه خبره!" });
        }
        if (value.length < ctx.options?.context?.min) {
          ctx.createError({ message: "این که کمه" });
        }
      } else {
        ctx.createError({ message: REQUIRED_ERROR_MESSAGE });
      }
    },
  }),
  description: string().required(REQUIRED_ERROR_MESSAGE),
  information: string().required(REQUIRED_ERROR_MESSAGE),
  isOpen: boolean().default(() => true),
});
