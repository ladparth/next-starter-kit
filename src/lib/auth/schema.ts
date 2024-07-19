import { z } from "zod";
export const signinSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Please enter your password" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type SigninFormValues = z.infer<typeof signinSchema>;

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email address" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Please enter a password" })
    .min(8, { message: "Password must be at least 8 characters long" }),
  firstName: z.string().min(1, { message: "Enter your first name" }),
  lastName: z.string().min(1, { message: "Enter your last name" }),
});

export type SignupFormValues = z.infer<typeof signupSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email address" })
    .email({ message: "Invalid email address" }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(1, { message: "Please enter a password" }),
    confirmPassword: z.string().min(1, { message: "Please enter a password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export const SettingsFormSchema = z.object({
  profilePicture: z
    .instanceof(File)
    .refine((file) => file.size < 5000000, {
      message: "Your image must be less than 5MB.",
    })
    .optional(),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  bio: z.string().max(160).min(4),
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export type SettingsFormValues = z.infer<typeof SettingsFormSchema>;
