import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <>
      {/* Logo */}
      <div className="flex h-[52px] items-center justify-center">
        <Link href="/">
          <Image
            width={23}
            height={31}
            src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/Logo_uidxcg.png"
            alt="logo"
          />
        </Link>
      </div>
      {/*  */}
      {/* Line Border */}
      <div className="mx-auto w-[32px] border-b border-[#E9EBEF]"></div>
      {/*  */}
      {/* Icons */}
      <div className="mt-[11px] flex w-full flex-col gap-[16px]">
        {/* AppCircle Icon */}
        <Link
          href="/"
          className="flex w-full items-center justify-center pr-[2px]"
        >
          <div className="relative right-[9px] h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5]"></div>
          <button className="h-[32px] w-[32px] rounded-lg border border-[#533BE5] bg-[#F5F5F5]">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                width={24}
                height={25}
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/appcircle_z6hfms.png"
                alt="logo"
              />
            </div>
          </button>
        </Link>
        {/*  */}
        {/* Dribble Icon */}
        <Link
          href="/"
          className="group flex w-full items-center justify-center pr-[2px]"
        >
          <div className="invisible relative right-[9px] h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] group-hover:visible"></div>
          <button className="h-[32px] w-[32px] rounded-lg bg-[#F5F5F5] group-hover:border group-hover:border-[#533BE5]">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                width={24}
                height={25}
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/dribbble_xwt53t.png"
                alt="logo"
              />
            </div>
          </button>
        </Link>
        {/*  */}
        {/* Buy Me a Coffee Icon */}
        <Link
          href="/"
          className="group flex w-full items-center justify-center pr-[2px]"
        >
          <div className="invisible relative right-[9px] h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] group-hover:visible"></div>
          <button className="h-[32px] w-[32px] rounded-lg bg-[#F5F5F5] group-hover:border group-hover:border-[#533BE5]">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                width={24}
                height={25}
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/buymeacoffee_meqw9e.png"
                alt="logo"
              />
            </div>
          </button>
        </Link>
        {/*  */}
        {/* Atlassian Icon */}
        <Link
          href="/"
          className="group flex w-full items-center justify-center pr-[2px]"
        >
          <div className="invisible relative right-[9px] h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] group-hover:visible"></div>
          <button className="h-[32px] w-[32px] rounded-lg bg-[#F5F5F5] group-hover:border group-hover:border-[#533BE5]">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                width={24}
                height={25}
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/atlassian_bwijxl.png"
                alt="logo"
              />
            </div>
          </button>
        </Link>
        {/*  */}
        {/* Add Icon */}
        <Link
          href="/"
          className="group flex w-full items-center justify-center pr-[2px]"
        >
          <div className="invisible relative right-[9px] h-[23px] w-[2px] rounded-r-3xl bg-[#533BE5] group-hover:visible"></div>
          <button className="h-[32px] w-[32px] rounded-lg bg-[#F5F5F5] group-hover:border group-hover:border-[#533BE5]">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                width={18}
                height={19}
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640382/dimension-technical-test-frontend/navbar/add-nav_b770on.png"
                alt="logo"
              />
            </div>
          </button>
        </Link>
        {/*  */}
      </div>
      {/*  */}
    </>
  );
};
