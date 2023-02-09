import { Fragment } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Draggable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Draggable;
    }),
  { ssr: false }
);

interface ICardProps {
  id: number;
  title: string;
  previewImage: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  topic: string;
  users: string[];
  extraUsers: string | null;
  numberOfComments: string;
  checked: string;
  totalChecked: string;
  numberOfLinks: string;
  dateCreated: string;
  status: string;
  index: number;
}

export const Card = ({
  id,
  title,
  previewImage,
  imageWidth,
  imageHeight,
  description,
  topic,
  users,
  extraUsers,
  numberOfComments,
  checked,
  totalChecked,
  numberOfLinks,
  dateCreated,
  status,
  index,
}: ICardProps) => {
  return (
    <>
      <Draggable key={id} index={index} draggableId={id.toString()}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="flex flex-col -mb-[74px] w-[244px]"
          >
            <div className="border border-[#EAEDF0] rounded-lg bg-white z-10 grid grid-rows-[1fr_40px]">
              {/* Row 1 */}
              <div className="flex flex-col w-full py-[14px] px-[17px] gap-[12px]">
                <div className="flex flex-col w-full gap-[6px]">
                  {/* FLYTE Id */}
                  <p className="text-[10px] text-[#7F8995]">FLYTE-{id}</p>
                  {/*  */}
                  {/* Card Title */}
                  <h1 className="font-bold">{title}</h1>
                  {/*  */}
                  {/* Previe Image */}
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt={title}
                      width={imageWidth}
                      height={imageHeight}
                    />
                  ) : null}
                  {/*  */}
                  {/* Card Description */}
                  <p className="text-[12px] text-[#7F8995]">{description}</p>
                  {/*  */}
                </div>
                <div className="flex justify-between items-center">
                  {/* Topic */}
                  {topic === 'UI Design' ? (
                    <div className="flex justify-center items-center h-[24px] px-[8px] rounded-[4px] bg-[#EAF0FF] text-xs font-bold text-[#2F6BFE]">
                      {topic}
                    </div>
                  ) : null}
                  {topic === 'Research' ? (
                    <div className="flex justify-center items-center h-[24px] px-[8px] rounded-[4px] bg-[#EDEBFF] text-xs font-bold text-[#8478FE]">
                      {topic}
                    </div>
                  ) : null}
                  {topic === 'Planning' ? (
                    <div className="flex justify-center items-center h-[24px] px-[8px] rounded-[4px] bg-[#F1F9EE] text-xs font-bold text-[#78C552]">
                      {topic}
                    </div>
                  ) : null}
                  {/*  */}
                  {/* Users */}
                  <div className="flex items-center">
                    {users.map((user, index) => (
                      <Fragment key={index}>
                        <div className="-ml-[12px]">
                          <Image
                            src={user}
                            alt="user-avatar"
                            width={30}
                            height={30}
                          />
                        </div>
                      </Fragment>
                    ))}
                    {extraUsers !== null ? (
                      <>
                        <div className="w-[30px] h-[30px] bg-[#CBD2D9] rounded-full border border-white -ml-[12px] flex justify-center items-center">
                          <p className="text-sm text-[#656E77]">
                            {extraUsers}+
                          </p>
                        </div>
                      </>
                    ) : null}
                  </div>
                  {/*  */}
                </div>
              </div>
              {/*  */}
              {/* Row 2 */}
              <div className="w-full border-t border-[#EAEDF0] px-[17px] flex justify-between items-center">
                <div className="flex items-center gap-[8px] h-full">
                  {/* Comments */}
                  {numberOfComments !== '0' ? (
                    <div className="flex h-full items-center gap-[4px]">
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/message_akcgi3.png"
                          alt="comments"
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="text-xs text-[#98A5B3]">
                        {numberOfComments}
                      </p>
                    </div>
                  ) : null}
                  {/*  */}
                  {/* Checks */}
                  {checked !== '0' ? (
                    <div className="flex items-center gap-[4px]">
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/tick-circle_wjwbyn.png"
                          alt="checked"
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="text-xs text-[#98A5B3]">
                        {checked}/{totalChecked}
                      </p>
                    </div>
                  ) : null}
                  {/*  */}
                  {/* Links */}
                  {numberOfLinks !== '0' ? (
                    <div className="flex items-center gap-[4px]">
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/link_fwspnh.png"
                          alt="links"
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="text-xs text-[#98A5B3]">{numberOfLinks}</p>
                    </div>
                  ) : null}
                  {/*  */}
                </div>
                {/* Date Created || Done */}
                <div className="flex items-center gap-[4px]">
                  {dateCreated !== '' && status !== 'COMPLETED' ? (
                    <>
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640425/dimension-technical-test-frontend/kanban-columns/in-progress/dashboard-design/calendar_go80pu.png"
                          alt="calendar"
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="text-xs text-[#98A5B3]">{dateCreated}</p>
                    </>
                  ) : null}
                  {status === 'COMPLETED' ? (
                    <>
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1675640424/dimension-technical-test-frontend/kanban-columns/completed/presentation/tick-circle_cu4kw9.png"
                          alt="calendar"
                          width={16}
                          height={16}
                        />
                      </div>
                      <p className="text-xs font-bold text-[#78C552]">Done</p>
                    </>
                  ) : null}
                </div>
              </div>
              {/*  */}
            </div>
            <div className="border border-[#EAEDF0] w-[236px] h-[74px] mx-auto rounded-lg relative bottom-[70px] z-0"></div>
          </div>
        )}
      </Draggable>
    </>
  );
};
