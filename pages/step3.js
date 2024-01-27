import { useAppContext } from '../contexts/AppContext';

export default function Step3() {

    const AppContext = useAppContext();
    console.log(AppContext.player1);
    console.log(AppContext.player2);
    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            Step3
        </main>
    )
}