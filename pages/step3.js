import { useAppContext } from '../contexts/AppContext';
import Webcam from 'react-webcam';
import Link from 'next/link';

export default function Step3() {

    const AppContext = useAppContext();
    const videoConstraints = {
        facingMode: "user"
      };
    
    return (
        <main className='text-5xl flex flex-col items-center justify-center w-screen h-screen'>
            Step3
            <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            >
    {({ getScreenshot }) => (
      <button
        onClick={() => {
          AppContext.setImgSrc(getScreenshot());
          console.log(AppContext.imgSrc);
        }}
      >
        CHEESE!
      </button>
    )}
  </Webcam>
  <Link
            className='mt-10' 
            href={{ pathname: '/selectpg', query: {step : 4}}}>
        {"--->"}
        </Link>
        </main>
    )
}