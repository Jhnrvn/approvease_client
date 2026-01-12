import { redirect } from "next/navigation";

const page = () => {
  redirect(`/auth/sign-in`);
};

export default page;
