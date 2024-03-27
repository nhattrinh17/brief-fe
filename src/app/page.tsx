import { ComparePhotos, SliderShow } from '@/uiCore';
import { USP } from './components/USPProduct';

export default function Home() {
  return (
    <main className="">
      <SliderShow firstVideo firstVideoLinks={['https://www.w3schools.com/html/movie.mp4', 'https://www.w3schools.com/html/movie.mp4']} slides={['https://nhattrinh17.github.io/assets/img/slider/slider1.png', 'https://nhattrinh17.github.io/assets/img/slider/slider3.png']} />
      <USP />
      <ComparePhotos />
      <div>Okkk</div>
    </main>
  );
}
