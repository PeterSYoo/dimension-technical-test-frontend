import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Row 1 */}
        <div className="flex justify-between h-[53px] border-b border-[#F4F4F4] w-full px-[24px]">
          {/* Breadcrumbs NavBar */}
          <div className="flex items-center">
            <p className="font-medium text-sm">Projects</p>
            <div className="flex justify-center items-center mt-[2px]">
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675725898/dimension-technical-test-frontend/header/ei_chevron-right_e5ypaz.png"
                width={16}
                height={16}
                alt="chevron-right"
              />
            </div>
            <p className="font-medium text-sm text-[#6C6F75]">Cloud Platform</p>
            <span className="ml-[6px] text-xs bg-[#EEEEEE] px-[6px] text-[#6C6F75] py-[2px] rounded-md">
              FLYTE
            </span>
          </div>
          {/*  */}
          {/* Search & SideBar Icon */}
          <div className="flex items-center gap-[12px]">
            {/* Search */}
            <div className="w-[175px] h-[32px] bg-[#EFEFEF] rounded-md p-[8px] flex gap-[8px] items-center">
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
                  className="w-full h-[20px] bg-[#EFEFEF] focus:outline-none placeholder:text-xs placeholder:font-medium placeholder:text-[#5C6066] text-xs"
                />
              </div>
            </div>
            {/*  */}
            {/* SideBar Icon */}
            <button className="w-[32px] h-[32px] border border-[#DFE1E4] rounded-md">
              <div className="flex justify-center items-center h-full">
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
        <div className="w-full h-[47px] border-b border-[#F4F4F4] px-[24px] flex justify-between items-center">
          <div className="flex items-center gap-[6px] -mt-[3px]">
            {/* Cloud Button */}
            <button className="w-[68px] h-[30px] border border-[#DFE1E4] rounded-md px-[8px] py-[6px] gap-[6px] flex items-center shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:shadow-none hover:mt-[3px]">
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
            <button className="w-[57px] h-[30px] border border-[#DFE1E4] rounded-md shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:shadow-none hover:mt-[3px]">
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
            <div className="flex items-center gap-[6px] -mt-[3px]">
              {/* List or Grid Button */}
              <button className="w-[70px] h-[30px] border border-[#DFE1E4] rounded-md pl-[6px] pr-[12px] shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:shadow-none hover:mt-[3px]">
                <div className="flex items-center w-full">
                  <div className="flex justify-between w-full max-w-[29px] items-center">
                    <span className="w-[22px] h-[20px] bg-[#DFE1E4] rounded">
                      <div className="flex justify-center items-center h-full">
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
                  <span className="flex justify-end w-full max-w-[22px]">
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
              <button className="w-[38px] h-[28px] border border-[#DFE1E4] rounded-md shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:shadow-none hover:mt-[3px]">
                <div className="flex justify-center items-center h-full">
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
              <button className="w-[74px] h-[28px] border border-[#DFE1E4] rounded-md shadow-[0_3px_0px_0px_rgba(223,225,228,1)] hover:shadow-none hover:mt-[3px]">
                <div className="flex items-center gap-[6px] justify-center">
                  <Image
                    src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640411/dimension-technical-test-frontend/header/chain_ej1hsr.png"
                    width={12}
                    height={13}
                    alt="headphones"
                  />

                  <span className="text-xs text-[#5C6066] mt-[2px]">Share</span>
                </div>
              </button>
              {/*  */}
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};
