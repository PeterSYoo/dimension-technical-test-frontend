import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      <div className="w-full border-r border-[#EAEDF0] flex flex-col">
        {/* Logo */}
        <div className="flex justify-center my-[12px]">
          <Link href="/">
            <Image
              width={23}
              height={31}
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/Logo_uidxcg.png"
              alt="logo"
            />
          </Link>
        </div>
        {/* Line Border */}
        <div className="w-[32px] border-b border-[#E9EBEF] mx-auto"></div>
        {/* Icons */}
        <div className="w-full flex flex-col mt-[11px] gap-[16px]">
          {/* AppCircle Icon */}
          <Link
            href="/"
            className="w-full flex justify-center pr-[2px] items-center"
          >
            <div className="h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] relative right-[9px]"></div>

            <div className="w-[32px] h-[32px] rounded-lg border border-[#533BE5] bg-[#F5F5F5]">
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  width={24}
                  height={25}
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/appcircle_z6hfms.png"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
          {/* Dribble Icon */}
          <Link
            href="/"
            className="w-full flex justify-center pr-[2px] items-center group"
          >
            <div className="h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] relative right-[9px] invisible group-hover:visible"></div>
            <div className="w-[32px] h-[32px] rounded-lg group-hover:border group-hover:border-[#533BE5] bg-[#F5F5F5]">
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  width={24}
                  height={25}
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/dribbble_xwt53t.png"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
          {/* Buy Me a Coffee Icon */}
          <Link
            href="/"
            className="w-full flex justify-center pr-[2px] items-center group"
          >
            <div className="h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] relative right-[9px] invisible group-hover:visible"></div>
            <div className="w-[32px] h-[32px] rounded-lg group-hover:border group-hover:border-[#533BE5] bg-[#F5F5F5]">
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  width={24}
                  height={25}
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/buymeacoffee_meqw9e.png"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
          {/* Atlassian Icon */}
          <Link
            href="/"
            className="w-full flex justify-center pr-[2px] items-center group"
          >
            <div className="h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] relative right-[9px] invisible group-hover:visible"></div>
            <div className="w-[32px] h-[32px] rounded-lg group-hover:border group-hover:border-[#533BE5] bg-[#F5F5F5]">
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  width={24}
                  height={25}
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/atlassian_bwijxl.png"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
          {/* Add Icon */}
          <Link
            href="/"
            className="w-full flex justify-center pr-[2px] items-center group"
          >
            <div className="h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] relative right-[9px] invisible group-hover:visible"></div>
            <div className="w-[32px] h-[32px] rounded-lg group-hover:border group-hover:border-[#533BE5] bg-[#F5F5F5]">
              <div className="flex justify-center items-center h-full w-full">
                <Image
                  width={18}
                  height={19}
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/add-nav_b770on.png"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
