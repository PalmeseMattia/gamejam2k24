import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppContext } from '@/contexts/AppContext';


export default function SelectPg(){

    const router = useRouter();
    const { query } = router;
    const { players } = useAppContext();
    let step = query["step"];

    console.log(query);
    return(
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            <p>Select PG: Adesso giocano {players[(parseInt(step) - 1) % players.length]} e {players[(parseInt(step)) % players.length]}</p>
            <p>{query["step"]}</p>
            <Link
                className='mt-10' 
                href={{ pathname: `/step${query["step"]}`}}>
                    {"--->"}
            </Link>
        </main>
    )
}