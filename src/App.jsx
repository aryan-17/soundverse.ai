import './App.css';
import "./index.css"
import Bar from './components/Bar';
import { useEffect, useState } from 'react';
import ProgressTab from './components/Progress';
import Prompt from './components/Prompt';
import Points from './components/Points';
import Task from './components/Task';

function App() {

  const [selected, setSelected] = useState("Progress");
  const [points, setPoints] = useState(4050);
  const [login, setLogin] = useState(false);
  const [days, setDays] = useState(1);
  const [task, setTask] = useState(false);

  const renderSelectedComponent = () => {
    switch (selected) {
      case 'Progress':
        return <ProgressTab days={days} />;
      case 'Prompt':
        return <Prompt setPoints={setPoints} setDays={setDays} task={task} setTask={setTask} />;
      case 'Task':
        return <Task task={task} />;
      default:
        return null;
    }
  };

  const date = new Date();
  const time = date.getTime();

  useEffect(() => {
    if(time === 0) setLogin(false);
    if (time === 0 && !task) {
      setDays(0);
    }
    if(time === 0 && task && days === 5){
      setPoints((prev)=>prev+500);
    }
    if(time === 0 && task && days === 7){
      setPoints((prev)=>prev+1000);
    }
  }, [time]);

  return (
    <div className="w-screen h-screen">

      <div className='w-full h-full text-white flex flex-col items-center mt-10 gap-y-10'>
        <div className='w-full grid justify-end mr-80'>
          <Points points={points} days={days} />
        </div>

        <div className='flex items-center w-full justify-center'>
          <Bar selected={selected} setSelected={setSelected} />
        </div>

        <div className='flex justify-center w-full h-full'>
          {renderSelectedComponent()}
        </div>
      </div>

    </div>
  );
}

export default App;
