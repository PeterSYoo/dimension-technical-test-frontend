import { Header } from '@/components/Header.components';
import { Board } from '@/components/kanban-board/Board.components';
import { NavBar } from '@/components/NavBar.components';

const Home = () => {
  return (
    <>
      <div className="h-full max-h-[982px] w-full max-w-[1165px] rounded-[10px] bg-white">
        <div className="grid h-full w-full grid-cols-[56px_1fr]">
          {/* Left Column */}
          <div className="flex w-full flex-col border-r border-[#EAEDF0]">
            {/* NavBar */}
            <NavBar />
            {/*  */}
          </div>
          {/*  */}
          {/* Right Column */}
          <div className="grid h-full w-full grid-rows-[53px_47px_1fr] rounded-r-[10px] bg-white">
            {/* Header */}
            <Header />
            {/*  */}
            {/* Kanban Board */}
            <Board />
            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Home;
