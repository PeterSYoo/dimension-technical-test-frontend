import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Card } from './Card.components';
import { initialData } from '@/data/initialData';
import { newCards } from '@/data/newCards';
import dynamic from 'next/dynamic';

interface IColumn {
  id: string;
  columnIcon: string;
  title: string;
  addGrayIcon: string;
  dotsIcon: string;
  addPurpleIcon: string;
  cards: ICard[];
}

interface ICard {
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
  numberOfChecks: {
    checked: string;
    total: string;
  };
  numberOfLinks: string;
  dateCreated: string;
  status: string;
}

interface IBoard {
  columns: IColumn[];
}

const DragDropContext = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.DragDropContext;
    }),
  { ssr: false }
);
const Droppable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Droppable;
    }),
  { ssr: false }
);

export const Board = () => {
  const [boardData, setBoardData] = useState(initialData);
  const [idCounter, setIdCounter] = useState(7);

  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) return;

    // Make a copy of boardData state
    let newBoardData: IBoard = { ...boardData };

    // Find the column that is the source of the drag event
    let columnSource = newBoardData.columns.find(
      (column) => column.id === source.droppableId
    );
    if (!columnSource) return;

    // Get the card that was dragged from the source column
    let dragItem = columnSource.cards[source.index];
    // Remove the card from the source column
    columnSource.cards.splice(source.index, 1);

    // Find the column that is the destination fo the drag event
    let columnDestination = newBoardData.columns.find(
      (column) => column.id === destination.droppableId
    );
    if (!columnDestination) return;

    // Insert the dragged card into the destination column
    columnDestination.cards.splice(destination.index, 0, dragItem);

    // Update the boardData with the new changes
    setBoardData({ ...newBoardData });
  };

  const addNewCard = (columnTitle: string) => {
    // Looks for the specific column for which the card should be added to.
    const column = boardData.columns.find(
      (column) => column.title === columnTitle
    );
    if (!column) return;

    // Gets a random card based on random index position from newCards object.
    const randomCard = newCards[Math.floor(Math.random() * newCards.length)];

    // Creates new board data by mapping over the existing columns, checking to see if any of the column title matches with columnTitle, and adds a random new card to the column.
    const newBoardData = {
      ...boardData,
      columns: boardData.columns.map((col) => {
        if (col.title === column.title) {
          return {
            ...col,
            cards: [
              ...col.cards,
              { ...randomCard, id: idCounter, status: columnTitle },
            ],
          };
        }
        return col;
      }),
    };

    // Sets the state to the new board data object with the newly added card.
    setBoardData(newBoardData);
    // Updates the counter state to be displayed in the card as part of `FLYTE-0`.
    setIdCounter(idCounter + 1);
  };

  return (
    <>
      <div className="flex w-[1109px] flex-grow gap-[36px] overflow-x-scroll p-[24px]">
        {/* Columns */}
        <DragDropContext onDragEnd={onDragEnd}>
          {boardData.columns.map((column) => (
            <Fragment key={column.id}>
              {/* Column */}
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex w-[244px] flex-col"
                  >
                    <div className="flex flex-col gap-[16px]">
                      <div className="flex w-[244px] items-center justify-between">
                        <div className="flex w-[244px] items-center gap-[12px]">
                          {/* Column Icon & Title */}
                          <div className="flex items-center gap-[8px]">
                            <Image
                              width={18}
                              height={18}
                              src={column.columnIcon}
                              alt={column.title}
                            />
                            <p className="text-sm font-bold">{column.title}</p>
                          </div>
                          {/*  */}
                          {/* # of Tasks */}
                          <div className="flex h-[20px] w-[26px] items-center justify-center rounded-lg border border-[#EAEDF0] bg-[#F7F9FA]">
                            <p className="text-xs font-bold">
                              {column.cards.length}
                            </p>
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
                      {column.title === 'FAKE COLUMN 1' ? (
                        <div className="w-full border-b-[2px] border-[#111118]"></div>
                      ) : null}
                      {column.title === 'FAKE COLUMN 2' ? (
                        <div className="w-full border-b-[2px] border-[#111118]"></div>
                      ) : null}
                      {column.title === 'FAKE COLUMN 3' ? (
                        <div className="w-full border-b-[2px] border-[#111118]"></div>
                      ) : null}
                      {/*  */}
                    </div>
                    {/* Cards */}
                    <div className="flex max-h-[700px] flex-col gap-[23px] overflow-auto scroll-smooth pt-[24px] scrollbar-hide">
                      {/* Card */}
                      {column.cards.map((card, index) => (
                        <Fragment key={card.id}>
                          <div
                            className={`${
                              snapshot.isDraggingOver &&
                              'h-full w-full rounded-lg bg-[#F7F9FA]'
                            }`}
                          >
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
                              index={index}
                            />
                          </div>
                        </Fragment>
                      ))}
                      {provided.placeholder}
                      {/*  */}
                      {/* Add a Card Button */}
                      <div className="h-[40px] w-full">
                        <button
                          onClick={() => addNewCard(column.title)}
                          className="flex h-[40px] w-full items-center justify-center gap-[8px] rounded-lg border border-[#F2F5F7]"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={column.addPurpleIcon}
                            alt="add-purple"
                          />
                          <span className="text-sm font-bold text-[#4734FE]">
                            Add a Card
                          </span>
                        </button>
                      </div>
                      {/*  */}
                    </div>
                    {/*  */}
                  </div>
                )}
              </Droppable>
              {/*  */}
            </Fragment>
          ))}
          {/*  */}
        </DragDropContext>
      </div>
    </>
  );
};
