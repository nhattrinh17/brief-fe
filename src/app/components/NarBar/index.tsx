import classNames from 'classnames/bind';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const cx = classNames.bind(styles);

export default function NarBar(): JSX.Element {
  return (
    <nav className={cx('wrapper')}>
      <div className={cx('navbar-logo', 'hidden max-sm:block')}>
        <Link href={'/'}>
          <Image alt="logo" src={'/logo.png'} width={100} height={100} />
        </Link>
      </div>
      <ul className={cx('navbar-list', 'container')}>
        <li className={cx('navbar-item', 'text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Trang Chủ
          </Link>
        </li>
        <li className={cx('navbar-item', 'flex justify-center text-lg font-normal')}>
          <Image alt="sale product " src={'/star-1454_512.gif'} width={20} height={20} className={cx('mr-1', 'navbar-item__image')} />
          <Link href={'/'} className={cx('navbar-item__link')}>
            Sản Phẩm
          </Link>
        </li>
        <li className={cx('navbar-item', 'text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            About Us
          </Link>
        </li>
        <li className={cx('navbar-item', 'text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Bí kíp sống khỏe
          </Link>
        </li>
        <li className={cx('navbar-item', 'text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Tuyển dụng
          </Link>
        </li>
        <li className={cx('navbar-item', 'text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Liên hệ
          </Link>
        </li>
        <li className={cx('navbar-item', 'text-lg font-normal')}>
          <Link href={'/'} className={cx('navbar-item__link')}>
            Chính sách
          </Link>
        </li>
      </ul>
    </nav>
  );
}
