import Image from 'next/image';

export const Header = () => {
  return (
    <>
      {/* Row 1 */}
      <div className="flex w-full justify-between border-b border-[#F4F4F4] px-[24px]">
        {/* Breadcrumbs NavBar */}
        <div className="flex items-center">
          <p className="text-sm font-medium">Projects</p>
          <div className="mt-[2px] flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675725898/dimension-technical-test-frontend/header/ei_chevron-right_e5ypaz.png"
              width={16}
              height={16}
              alt="chevron-right"
            />
          </div>
          <p className="text-sm font-medium text-[#6C6F75]">Cloud Platform</p>
          <span className="ml-[6px] rounded-[5px] bg-[#EEEEEE] px-[6px] py-[2px] text-xs text-[#6C6F75]">
            FLYTE
          </span>
        </div>
        {/*  */}
        {/* Search & SideBar Icon */}
        <div className="flex items-center gap-[12px]">
          {/* Search */}
          <div className="flex h-[32px] w-[175px] items-center gap-[8px] rounded-lg bg-[#EFEFEF] p-[8px]">
            <div>
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/akar-icons_search_pksmgx.png"
                width={16}
                height={16}
                alt="search"
              />
            </div>
            <div className="mb-[2px]">
              <input
                type="text"
                placeholder="Search"
                className="h-[20px] w-full bg-[#EFEFEF] text-xs placeholder:text-xs placeholder:font-medium placeholder:text-[#5C6066] focus:outline-none"
              />
            </div>
          </div>
          {/*  */}
          {/* SideBar Icon */}
          <button className="h-[32px] w-[32px] rounded-lg border border-[#DFE1E4]">
            <div className="flex h-full items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/bi_layout-sidebar-reverse_wpyibj.png"
                width={16}
                height={16}
                alt="sidebar"
              />
            </div>
          </button>
          {/*  */}
        </div>
        {/*  */}
      </div>
      {/*  */}
      {/* Row 2 */}
      <div className="flex w-full items-center justify-between border-b border-[#F4F4F4] px-[24px]">
        <div className="-mt-[3px] flex items-center gap-[6px]">
          {/* Cloud Button */}
          <button className="flex h-[30px] w-[68px] items-center gap-[6px] rounded-lg border border-[#DFE1E4] px-[8px] py-[6px] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:mt-[3px] hover:shadow-none">
            <div>
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/akar-icons_cloud_tin89x.png"
                width={18}
                height={18}
                alt="cloud"
              />
            </div>
            <span className="text-sm text-[#6C6F75]">25%</span>
          </button>
          {/*  */}
          {/* Filter Button */}
          <button className="h-[30px] w-[57px] rounded-lg border border-[#DFE1E4] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:mt-[3px] hover:shadow-none">
            <span className="text-sm text-[#6C6F75]">Filter</span>
          </button>
          {/*  */}
        </div>
        <div className="flex items-center gap-[16px]">
          {/* Current Users */}
          <div className="flex items-center gap-[4px]">
            <div>
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/avatar-girl_g5r4df.png"
                width={28}
                height={28}
                alt="avatar-girl"
              />
            </div>
            <div>
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/avatar-guy_zofxwt.png"
                width={28}
                height={28}
                alt="avatar-guy"
              />
            </div>
          </div>
          {/*  */}
          <div className="-mt-[3px] flex items-center gap-[6px]">
            {/* List or Grid Button */}
            <button className="h-[30px] w-[70px] rounded-lg border border-[#DFE1E4] pl-[6px] pr-[12px] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:mt-[3px] hover:shadow-none">
              <div className="flex w-full items-center">
                <div className="flex w-full max-w-[29px] items-center justify-between">
                  <span className="h-[20px] w-[22px] rounded bg-[#DFE1E4]">
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/bi_list_uvz7l5.png"
                        width={14}
                        height={14}
                        alt="list"
                      />
                    </div>
                  </span>
                  <span className="h-[10px] border-r border-[#DFE1E4]"></span>
                </div>
                <span className="flex w-full max-w-[22px] justify-end">
                  <div className="pt-[2px]">
                    <Image
                      src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/grid-board_kkuiq5.png"
                      width={12}
                      height={12}
                      alt="grid"
                    />
                  </div>
                </span>
              </div>
            </button>
            {/*  */}
            {/* Audio Button */}
            <button className="h-[28px] w-[38px] rounded-lg border border-[#DFE1E4] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:mt-[3px] hover:shadow-none">
              <div className="flex h-full items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/headphones_fxgztd.png"
                  width={14}
                  height={14}
                  alt="headphones"
                />
              </div>
            </button>
            {/*  */}
            {/* Share Button */}
            <button className="h-[28px] w-[74px] rounded-lg border border-[#DFE1E4] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:mt-[3px] hover:shadow-none">
              <div className="flex items-center justify-center gap-[6px]">
                <Image
                  src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/chain_ej1hsr.png"
                  width={12}
                  height={13}
                  alt="headphones"
                />

                <span className="mt-[2px] text-xs text-[#5C6066]">Share</span>
              </div>
            </button>
            {/*  */}
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};
