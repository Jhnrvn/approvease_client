// components
import AuthImage from "@/components/authentication/authImage";
import { AuthModal } from "@/components/Modal";
import  TermsAndConditions  from "@/components/TermsAndConditions";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative flex min-h-screen">
      <TermsAndConditions />
      <AuthModal />
      <AuthImage />
      {children}
    </section>
  );
};

export default layout;
