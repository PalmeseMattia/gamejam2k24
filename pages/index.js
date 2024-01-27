import { useAppContext } from '@/contexts/AppContext';
import Link from 'next/link';

export default function Home() {

  const { players, updateString, addPlayer, removePlayer } = useAppContext();

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    updateString(index, newValue);
  };

  return (
    <main className="text-5xl flex flex-col items-center justify-center w-screen h-screen">
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className=''>Iscrizione Giocatori</h1>
        {/*<ul className='space-y-2'>
          <li><input value={AppContext.player1} onChange={(e) => AppContext.setPlayer1(e.target.value)}/></li>
          <li><input value={AppContext.player2} onChange={(e) => AppContext.setPlayer2(e.target.value)}/></li>
          <li><input value={AppContext.player3} onChange={(e) => AppContext.setPlayer3(e.target.value)}/></li>
          <li><input value={AppContext.player4} onChange={(e) => AppContext.setPlayer4(e.target.value)}/></li>
          <li><input value={AppContext.player5} onChange={(e) => AppContext.setPlayer5(e.target.value)}/></li>
          <li><input value={AppContext.player6} onChange={(e) => AppContext.setPlayer6(e.target.value)}/></li>
  </ul>*/}
        {players.map((str, index) => (
        <div key={index}>
          <label>
            Player {index + 1}:
            <input
              type="text"
              value={str}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
        </div>
      ))}
        <button onClick={addPlayer}>+</button>
        <button onClick={removePlayer}>-</button>
        <Link
            className='mt-10' 
            href={{ pathname: '/rules'}}>
          Gioca
        </Link>
      </div>
    </main>
  );
}
