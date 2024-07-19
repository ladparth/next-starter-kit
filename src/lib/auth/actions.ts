"use server";

import {
  SigninFormValues,
  signinSchema,
  signupSchema,
  SignupFormValues,
  forgotPasswordSchema,
  ForgotPasswordFormValues,
  resetPasswordSchema,
  ResetPasswordFormValues,
  SettingsFormValues,
  SettingsFormSchema,
} from "./schema";

export async function SignIn(data: SigninFormValues) {
  const validatedFields = signinSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      status: "error",
      message: validatedFields.error.flatten(),
    };
  }

  return {
    status: "success",
    message: "Sign In successful",
  };
}

export async function SignUp(data: SignupFormValues) {
  const validatedFields = signupSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      status: "error",
      message: validatedFields.error.flatten(),
    };
  }

  return {
    status: "success",
    message: "Sign Up successful",
  };
}

export async function forgotPassword(data: ForgotPasswordFormValues) {
  const validatedFields = forgotPasswordSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      status: "error",
      message: validatedFields.error.flatten(),
    };
  }

  return {
    status: "success",
    message: "Link sent to email",
  };
}

export async function resetPassword(data: ResetPasswordFormValues) {
  const validatedFields = resetPasswordSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      status: "error",
      message: validatedFields.error.flatten(),
    };
  }

  return {
    status: "success",
    message: "Password reset successful",
  };
}

export async function signInwithGoogle() {
  return {
    status: "success",
    message: "Google",
  };
}

export async function signInwithFacebook() {
  return {
    status: "success",
    message: "Facebook",
  };
}

export async function updateProfile(data: SettingsFormValues) {
  const validatedFields = SettingsFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: validatedFields.error.flatten(),
    };
  }

  return {
    status: "success",
    message: "Profile updated",
  };
}
