'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { widthScreenEnum } from '@/contains';

interface Slider {
  firstVideo?: boolean;
  firstVideoLinks: string[];
  slides: string[];
}

const cx = classNames.bind(styles);

function SliderVideo({ videos, handlePlayVideo }: { videos: string[]; handlePlayVideo: () => void }): JSX.Element {
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
            }}>
            <source src={video} type="video/mp4" />
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
                  handlePlayVideo();
                  target.style.display = 'none';
                }
              }}></a>
          )}
        </div>
      ))}
    </div>
  );
}

export function SliderShow(props: Slider) {
  const [indexSlide, setIndexSlide] = useState(0);
  // const [playVideo, setPlayVideo] = useState(false);
  const playVideo = useRef(false);
  // const totalSlides =useRef()
  let totalSlides = props.slides.length + (props.firstVideo ? 1 : 0);

  if (typeof window !== 'undefined') {
    // Client-side-only code
    const widthScreen = screen.width;
    if (widthScreen < widthScreenEnum.maxWidthScreen) totalSlides++;
  }

  const slideContainerStyle = {
    transform: `translateX(-${indexSlide * 100}%)`, // Move container by the index times 100%
  };

  const nextSlide = () => {
    if (playVideo.current) playVideo.current = false;
    setIndexSlide((prevIndex) => (prevIndex == totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const preSlide = () => {
    if (playVideo.current) playVideo.current = false;
    setIndexSlide((prevIndex) => (prevIndex == 0 ? totalSlides - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const autoNextSlide = setInterval(() => {
      if (!playVideo.current) nextSlide();
    }, 3000);

    return () => {
      clearInterval(autoNextSlide);
    };
  }, [indexSlide]);

  return (
    <div className={cx('wrapper', 'relative')}>
      <div className={cx('slide-container')} style={slideContainerStyle}>
        {props.firstVideo && (
          <>
            <div className={cx('slide-item', 'max-sm:hidden')}>
              <SliderVideo videos={props.firstVideoLinks} handlePlayVideo={() => (playVideo.current = true)} />
            </div>
            {props.firstVideoLinks.map((video, index) => (
              <div key={index} className={cx('hidden max-sm:block', 'slide-item')}>
                <SliderVideo videos={[video]} handlePlayVideo={() => (playVideo.current = true)} />
              </div>
            ))}
          </>
        )}
        {props.slides.map((slide, index) => (
          <img className={cx('slide-item')} key={index} alt={`Slide ${'ok'}`} src={slide} />
        ))}
      </div>
      <FontAwesomeIcon icon={faArrowLeft} className={cx('slide-btn__left')} onClick={preSlide} />
      <FontAwesomeIcon icon={faArrowRight} className={cx('slide-btn__right')} onClick={nextSlide} />
    </div>
  );
}
