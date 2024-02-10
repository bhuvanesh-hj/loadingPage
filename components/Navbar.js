import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-200 py-4 px-14">
      <div className="bg-black h-16 w-16 md:block hidden" />
      <div>
        <Image
          src="/images/Group 10.png"
          alt="hamburger"
          width={25}
          height={25}
          className="md:hidden block"
        />
      </div>
      <div
        className="gap-12 p-2 rounded-[50px] pr-9 md:flex hidden"
        style={{
          background:
            "linear-gradient(270deg, rgba(230, 143, 80, 0.10) 0%, rgba(10, 86, 241, 0.10) 100%)",
          boxShadow: "0px 4px 10px 0px rgba(101, 101, 101, 0.25)",
        }}
      >
        <button className="rounded-3xl font-bold shadow-lg bg-white py-2 px-5 text-black">
          Home
        </button>
        <button className="font-bold text-gray-700">About Us</button>
        <button className="font-bold text-gray-700">Work</button>
        <button className="font-bold text-gray-700">Services</button>
        <button className="font-bold text-gray-700">Clients</button>
        <button className="font-bold text-gray-700">Team</button>
        <button className="font-bold text-gray-700">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;