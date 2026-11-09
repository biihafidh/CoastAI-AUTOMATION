import { redirect } from "next/navigation";

// Public registration is disabled. Existing authorized users sign in instead.
export default function SignupPage() {
  redirect("/login");
}
