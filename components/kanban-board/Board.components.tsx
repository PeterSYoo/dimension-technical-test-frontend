import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Card } from './Card.components';
import { initialData } from '@/data/initialData';

export const Board = () => {
  const [boardData, setBoardData] = useState(initialData);

  return (
    <>
      <div className="flex w-[1109px] gap-[36px] p-[24px] overflow-x-scroll flex-grow">
        {/* Columns */}
        {boardData.columns.map((column) => (
          <Fragment key={column.id}>
            {/* Column */}
            <div className="flex flex-col w-[244px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-[12px]">
                    {/* Column Icon & Title */}
                    <div className="flex items-center gap-[8px]">
                      <Image
                        width={18}
                        height={18}
                        src={column.columnIcon}
                        alt={column.title}
                      />
                      <p className="font-bold text-sm">{column.title}</p>
                    </div>
                    {/*  */}
                    {/* # of Tasks */}
                    <div className="w-[26px] h-[20px] bg-[#F7F9FA] flex justify-center items-center border border-[#EAEDF0] rounded-lg">
                      <p className="font-bold text-xs">{column.cards.length}</p>
                    </div>
                    {/*  */}
                  </div>
                  {/* Add & Dots Buttons */}
                  <div className="flex items-center gap-[4px]">
                    <button>
                      <Image
                        width={20}
                        height={20}
                        src={column.addGrayIcon}
                        alt="add-icon"
                      />
                    </button>
                    <button>
                      <Image
                        width={20}
                        height={20}
                        src={column.dotsIcon}
                        alt="dots-icon"
                      />
                    </button>
                  </div>
                  {/*  */}
                </div>
                {/* Line Border */}
                {column.title === 'TODO' ? (
                  <div className="w-full border-b-[2px] border-[#111118]"></div>
                ) : null}
                {column.title === 'IN PROGRESS' ? (
                  <div className="w-full border-b-[2px] border-[#4734FE]"></div>
                ) : null}
                {column.title === 'COMPLETED' ? (
                  <div className="w-full border-b-[2px] border-[#78C552]"></div>
                ) : null}
                {column.title === 'FAKE COLUMN' ? (
                  <div className="w-full border-b-[2px] border-[#111118]"></div>
                ) : null}
                {/*  */}
              </div>
              {/* Cards */}
              <div className="pt-[24px] flex flex-col gap-[23px] max-h-[680px] overflow-auto scrollbar-hide">
                {/* Card */}
                {column.cards.map((card) => (
                  <Fragment key={card.id}>
                    <Card
                      id={card.id}
                      title={card.title}
                      previewImage={card.previewImage}
                      imageWidth={card.imageWidth}
                      imageHeight={card.imageHeight}
                      description={card.description}
                      topic={card.topic}
                      users={card.users}
                      extraUsers={card.extraUsers}
                      numberOfComments={card.numberOfComments}
                      checked={card.numberOfChecks.checked}
                      totalChecked={card.numberOfChecks.total}
                      numberOfLinks={card.numberOfLinks}
                      dateCreated={card.dateCreated}
                      status={card.status}
                    />
                  </Fragment>
                ))}
                {/*  */}
                {/* Add a Card Button */}
                <div className="h-[40px] w-full">
                  <button className="flex justify-center items-center border border-[#F2F5F7] rounded-lg gap-[8px] w-full h-[40px]">
                    <Image
                      width={24}
                      height={24}
                      src={column.addPurpleIcon}
                      alt="add-purple"
                    />
                    <p className="font-bold text-sm text-[#4734FE]">
                      Add a Card
                    </p>
                  </button>
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
            {/*  */}
          </Fragment>
        ))}
        {/*  */}
      </div>
    </>
  );
};
