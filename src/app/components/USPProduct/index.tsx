import { faArrowRight, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import styles from './usp.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const cx = classNames.bind(styles);

export function USP(): JSX.Element {
  const dataUsp = [
    {
      icon: faUserDoctor,
      image: 'https://medileaves.powersquall.com/skin-care/wp-content/uploads/sites/9/2023/10/skin-services-1.jpg',
      title: 'Bác sĩ được chứng nhận',
      desc: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    },
    {
      icon: faUserDoctor,
      image: 'https://medileaves.powersquall.com/skin-care/wp-content/uploads/sites/9/2023/10/skin-services-1.jpg',
      title: 'Bác sĩ được chứng nhận',
      desc: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    },
    {
      icon: faUserDoctor,
      image: 'https://medileaves.powersquall.com/skin-care/wp-content/uploads/sites/9/2023/10/skin-services-1.jpg',
      title: 'Bác sĩ được chứng nhận',
      desc: 'Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.',
    },
  ];

  return (
    <section className={cx('container', 'wrapper-usp')}>
      <div className="text-center">
        <span className={cx('sub-title', '')}>Tin tức và Blog</span>
        <h2 className={cx('main-title', 'text-2xl font-normal mt-4 mb-4')}>Dịch vụ Y tế & Chuẩn đoán</h2>
        <div>
          <p className={cx('desc-title')}>Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar Tellus egetmagna aliquet ultricies. nec eleifend sem convallis vitae.</p>
        </div>
      </div>
      <div className={cx('grid grid-cols-3 max-sm:grid-cols-1 gap-4', 'usp-list')}>
        {/* <div className="flex w-full"> */}
        {dataUsp.map((item, index) => (
          <div key={index} className={cx('usp-item', { 'mt-10': (index + 1) % 2 == 0 })}>
            <div className={cx('usp-item__image-container', 'rounded-xl')}>
              <img alt={item.title} src={item.image} className={cx('usp-item__image')} />
            </div>
            <div className={cx('usp-item__wrapper', 'text-center')}>
              <div className={cx('usp-item__body')}>
                <FontAwesomeIcon icon={item.icon} className={cx('usp-item__body--icon', 'text-2xl')} />
                <h6 className={cx('usp-item__body--title', 'text-lg font-normal')}>{item.title}</h6>
                <p className={cx('usp-item__body--desc', 'text-sm font-normal')}>{item.desc}</p>
                <div className={cx('usp-item__body--link', 'mt-6 mb-4 uppercase text-xs font-semibold')}>
                  <Link className={cx('usp-item__body--link__text')} href="#">
                    <span className="mr-2">Đọc thêm</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
