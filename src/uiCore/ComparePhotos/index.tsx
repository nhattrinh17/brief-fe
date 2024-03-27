'use client';

import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export function ComparePhotos(): JSX.Element {
  const [ranger, setRanger] = useState(50);

  const handleChangeRanger = (e: any) => {
    setRanger(+e.target.value);
  };

  return (
    <section className={cx('wrapper-compare')}>
      <div className="container margin-left-right">
        <div className={cx('content', 'text-white flex flex-row')}>
          <div className={cx('content-left')}>
            <span className={cx('sub-title', 'uppercase text-sm')}>BEFORE AND AFTER</span>
            <h2 className={cx('main-title', 'text-2xl font-normal mt-4 mb-4')}>Dịch vụ Y tế & Chuẩn đoán</h2>
          </div>
          <p className={cx('content-right')}>Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar Tellus egetmagna aliquet ultricies. nec eleifend sem convallis vitae.</p>
        </div>

        <div className={cx('wrapper-image')}>
          <input className={cx('wrapper-image__ranger')} type="range" value={ranger} min={0} max={100} onChange={handleChangeRanger} data-image-comparison-range />
          <div className={cx('image-comparison-slider')} style={{ left: `${ranger}%` }}>
            <div className={cx('image-comparison-slider__icons', 'rounded-full')}>
              <FontAwesomeIcon icon={faCaretLeft} className={cx('image-comparison-slider__icon')} />
              <FontAwesomeIcon icon={faCaretRight} className={cx('image-comparison-slider__icon')} />
            </div>
          </div>

          <div className={cx('flex', 'image-list')}>
            <div className={cx('image-before')} style={{ backgroundImage: 'url("https://medileaves.powersquall.com/skin-care/wp-content/uploads/sites/9/2023/10/before.jpg")', width: `${ranger}%` }}>
              <span>Before</span>
            </div>
            <div className={cx('image-after')} style={{ backgroundImage: 'url("https://medileaves.powersquall.com/skin-care/wp-content/uploads/sites/9/2023/10/after.jpg")', width: `${100 - ranger}%` }}>
              <span>After</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
