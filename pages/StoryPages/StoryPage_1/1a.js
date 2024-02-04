// import Link from 'next/link';
// import RulesButton from '../../../components/RulesButton';
// import { useEffect } from 'react';
// import { Howl } from 'howler';

export default function Intro() {

  // useEffect(() => {
  //   // Primo file audio
  //   const sound1 = new Howl({
  //     src: {music},
  //     autoplay: true,
  //     loop: true,
  //     volume: 0.5,
  //   });

  //   return () => {
  //     // Scarica entrambi i suoni quando il componente viene smontato
  //     sound1.unload();
  //   };
  // }, []);

    return (
      <CommonLayout titleText='Into' imageComponent={null} mainText='antanisbirigudiloreipsum' buttonCTA='sfoglia'/>
    );
}
