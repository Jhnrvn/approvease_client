import Image from "next/image";
// image
import AppLogo from "../../../public/images/approvease-logo.webp";

const Logo = ({ headerText }: { headerText: string }) => {
  return (
    <div className="mb-10 flex flex-col items-center gap-5">
      <Image src={AppLogo} alt="ApprovEase Logo" width={80} height={80} />
      <h1 className="text-2xl font-semibold">{headerText}</h1>
    </div>
  );
};

export default Logo;
