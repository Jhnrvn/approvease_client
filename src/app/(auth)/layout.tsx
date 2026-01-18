// components
import AuthImage from "@/components/authentication/authImage";
import { AuthModal } from "@/components/Modal";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative flex min-h-screen">
      <AuthModal />
      <AuthImage />
      {children}
    </section>
  );
};

export default layout;
