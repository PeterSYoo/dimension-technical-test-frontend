import { Header } from '@/components/Header.components';
import { Board } from '@/components/kanban-board/Board.components';
import { NavBar } from '@/components/NavBar.components';

const Home = () => {
  return (
    <>
      <div className="w-full h-full max-w-[1165px] max-h-[982px] bg-white rounded-[10px]">
        <div className="grid grid-cols-[56px_1fr] w-full h-full">
          {/* Left Column */}
          <div className="w-full border-r border-[#EAEDF0] flex flex-col">
            {/* NavBar */}
            <NavBar />
            {/*  */}
          </div>
          {/*  */}
          {/* Right Column */}
          <div className="w-full h-full bg-white rounded-r-[10px] grid grid-rows-[53px_47px_1fr]">
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
