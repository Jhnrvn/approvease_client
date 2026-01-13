import AuthImage from "@/components/authentication/authImage";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen">
      <AuthImage />
      {children}
    </section>
  );
};

export default layout;
