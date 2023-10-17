import z from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  phone: z.string(),
  courseId: z.string().nullish(),
  registration_date: z.date(),
});

export type User = z.infer<typeof userSchema>;
export type UserId = User["id"];
export type CreateUser = Omit<User, "id" | "registrationDate">;
export type UpdateUser = Omit<User, "id" | "registrationDate">;
