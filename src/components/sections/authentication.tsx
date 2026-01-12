// components
import AuthImage from "../authentication/authImage";
import SignIn from "../authentication/signIn";

const Authentication = () => {
  return (
    <section className="flex min-h-screen">
      <AuthImage />
      <div className="w-200 ">
        <SignIn />
      </div>
    </section>
  );
};

export default Authentication;
