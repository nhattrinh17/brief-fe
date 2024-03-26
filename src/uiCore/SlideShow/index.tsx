'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Slider {
  firstVideo?: boolean;
  firstVideoLinks: string[];
  slides: string[];
}

const cx = classNames.bind(styles);

function SliderVideo({ videos }: { videos: string[] }): JSX.Element {
  const [showBtn, setShowBtn] = useState(false);
  const totalViewLoad = useRef(0);

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    const promises = Array.from(videos).map((video) => {
      return new Promise((resolve) => {
        totalViewLoad.current = totalViewLoad.current + 1;
        if (totalViewLoad.current == 2) {
          setShowBtn(true);
        }
        // video.addEventListener('loadeddata', resolve, { once: true });
      });
    });

    return () => {
      totalViewLoad.current = 0;
    };
  }, []);

  return (
    <div className="flex">
      {videos.map((video, index) => (
        <div key={index} className={cx('slide-video__item', 'basis-1/2')}>
          <video
            id={`video-${index}`}
            className={cx('slide-video__item--video')}
            onEnded={() => {
              const playBtnId = `playBtn-${index}`;
              const playBtn = document.getElementById(playBtnId);
              if (playBtn) {
                playBtn.style.display = 'block';
              }
            }}
            onLoadedMetadata={() => {
              totalViewLoad.current = totalViewLoad.current + 1;
              console.log('🚀 ~ file: index.tsx:34 ~ SliderVideo ~ totalViewLoad.current:', totalViewLoad.current);
              if (totalViewLoad.current == 2) {
                setShowBtn(true);
              }
            }}>
            <source src={'https://www.w3schools.com/html/movie.mp4'} type="video/mp4" />
            <source src={'https://www.w3schools.com/html/movie.ogg'} type="video/ogg" />
            {/* <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" /> */}
          </video>
          {showBtn && (
            <a
              id={`playBtn-${index}`}
              className={cx('slide-video__item--playBtn')}
              onClick={(e) => {
                e.preventDefault();
                const videoId = `video-${index}`;
                const video = document.getElementById(videoId) as HTMLVideoElement;
                const target = e.target as HTMLElement; // Ép kiểu e.target sang HTMLElement
                if (video && target) {
                  video.play();
                  target.style.display = 'none';
                }
              }}></a>
          )}
        </div>
      ))}
    </div>
  );
}

export function SliderShow(props: Slider): JSX.Element {
  const [indexSlide, setIndexSlide] = useState(0);
  console.log('🚀 ~ file: index.tsx:86 ~ SliderShow ', indexSlide);

  const slideContainerStyle = {
    transform: `translateX(-${indexSlide * 100}%)`, // Move container by the index times 100%
  };

  const totalSlides = props.slides.length + (props.firstVideo ? 1 : 0);

  return (
    <div className={cx('wrapper', 'relative')}>
      <div className={cx('slide-container')} style={slideContainerStyle}>
        {props.firstVideo && (
          <div className={cx('slide-item')}>
            <SliderVideo videos={props.firstVideoLinks} />
          </div>
        )}
        {props.slides.map((slide, index) => (
          <img className={cx('slide-item')} key={index} alt={`Slide ${'ok'}`} src={slide} />
        ))}
      </div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={cx('slide-btn__left')}
        onClick={() => {
          setIndexSlide((prevIndex) => (prevIndex == 0 ? totalSlides - 1 : prevIndex - 1)); // If at the beginning, go to the end
        }}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className={cx('slide-btn__right')}
        onClick={() => {
          setIndexSlide((prevIndex) => (prevIndex == totalSlides - 1 ? 0 : prevIndex + 1)); // If at the end, go to the beginning
        }}
      />
    </div>
  );
}
