const AuthImage = () => {
  return (
    <div className="bg-[url(/images/pointing-contract.webp)] w-full bg-cover bg-center bg-no-repeat ">
      <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center p-10 gap-4">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-7xl font-semibold italic text-white  ">
            Approv<span className="text-green-500">Ease</span>
          </h1>
          <p className="text-white text-center text-xl">Streamline Your Workflow with Ease.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImage;
