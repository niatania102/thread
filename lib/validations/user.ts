import * as z from "zod";

// ensure that profile_photo is a string of a type url and mustn't be empty
// name is string  with min 3 characters and max 30, you can set the error message as well
export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Username must be at least 2 characters." })
    .max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
