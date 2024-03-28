import classNames from 'classnames/bind';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const cx = classNames.bind(styles);

export default function NarBar(): JSX.Element {
  return (
    <nav className={cx('max-sm:wrapper-navbar__mobile', 'wrapper')}>
      {/* <nav className={cx('wrapper max-sm:h-full')}> */}
      <div className={cx('hidden', 'max-sm:navbar-logo max-sm:rounded-3xl')}>
        <Link href={'/'}>
          <Image alt="logo" src={'/logo_white.webp'} width={100} height={100} />
        </Link>
      </div>
      <ul className={cx('navbar-list', 'container flex text-white max-sm:text-black max-sm:block')}>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Trang Chủ
          </Link>
        </li>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 flex justify-center text-lg font-normal max-sm:justify-start')}>
          <Image alt="sale product " src={'/star-1454_512.gif'} width={20} height={20} className={cx('mr-1', 'navbar-item__image')} />
          <Link href={'/'} className={cx('navbar-item__link')}>
            Sản Phẩm
          </Link>
        </li>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            About Us
          </Link>
        </li>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Bí kíp sống khỏe
          </Link>
        </li>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Tuyển dụng
          </Link>
        </li>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Liên hệ
          </Link>
        </li>
        <li className={cx('navbar-item', 'max-sm:mb-4 max-sm:pb-3 border-b-0 max-sm:border-b-2 text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Chính sách
          </Link>
        </li>
      </ul>
    </nav>
  );
}
