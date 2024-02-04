import Link from 'next/link';
import RulesButton from '../../../components/RulesButton';
import { useEffect } from 'react';
import { Howl } from 'howler';
import CommonLayout from "@/components/commonLayout";
export default function Intro() {

  useEffect(() => {
    // Primo file audio
    const sound1 = new Howl({
      src: ['/musiche/Shape-Book-01.wav'],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });

    return () => {
      // Scarica entrambi i suoni quando il componente viene smontato
      sound1.unload();
    };
  }, []);

    return (
      <CommonLayout titleText='Into' imageComponent={null} mainText='antanisbirigudiloreipsum' buttonCTA='sfoglia'/>
    );
}
