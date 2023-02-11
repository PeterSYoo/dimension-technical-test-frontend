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
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="-mb-[74px] flex w-[244px] flex-col"
          >
            <div
              className={`${
                snapshot.isDragging && 'rotate-3'
              } z-10 grid grid-rows-[1fr_40px] rounded-lg border border-[#EAEDF0] bg-white`}
            >
              {/* Row 1 */}
              <div className="flex w-full flex-col gap-[12px] py-[14px] px-[17px]">
                <div className="flex w-full flex-col gap-[6px]">
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
                <div className="flex items-center justify-between">
                  {/* Topic */}
                  {topic === 'UI Design' ? (
                    <div className="flex h-[24px] items-center justify-center rounded-[4px] bg-[#EAF0FF] px-[8px] text-xs font-bold text-[#2F6BFE]">
                      {topic}
                    </div>
                  ) : null}
                  {topic === 'Research' ? (
                    <div className="flex h-[24px] items-center justify-center rounded-[4px] bg-[#EDEBFF] px-[8px] text-xs font-bold text-[#8478FE]">
                      {topic}
                    </div>
                  ) : null}
                  {topic === 'Planning' ? (
                    <div className="flex h-[24px] items-center justify-center rounded-[4px] bg-[#F1F9EE] px-[8px] text-xs font-bold text-[#78C552]">
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
                        <div className="-ml-[12px] flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white bg-[#CBD2D9]">
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
              <div className="flex w-full items-center justify-between border-t border-[#EAEDF0] px-[17px]">
                <div className="flex h-full items-center gap-[8px]">
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
            <div
              className={`${
                snapshot.isDragging && 'mr-[100px] w-full rotate-3'
              } relative bottom-[70px] z-0 mx-auto h-[74px] w-[236px] rounded-lg border border-[#EAEDF0]`}
            ></div>
          </div>
        )}
      </Draggable>
    </>
  );
};
