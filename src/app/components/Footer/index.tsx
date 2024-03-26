import Image from 'next/image';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function Footer(): JSX.Element {
  return (
    <footer className={cx('footer')}>
      <div className="container margin-left-right">
        <div className={cx('flex flex-row', 'wrapper')}>
          <div className={cx('basis-1/4', 'footer__logo-confirm')}>
            <Image src={'/logo_white.webp'} className={cx('footer__image--logo')} alt="Logo" width={200} height={43} loading="lazy" />
            <Image src={'/logoSaleNoti.webp'} className={cx('footer__image--confirm')} alt="Bộ công thương xác nhận" width={200} height={75} loading="lazy" />
          </div>
          <div className={cx('flex-1', 'footer-company')}>
            <h3 className={cx('mb-5 uppercase text-base font-semibold')}>CÔNG TY TNHH DINH DƯỠNG 3A (VIỆT NAM)</h3>
            <p className={cx('mb-5 text-xs')}>Địa chỉ: Centec Tower, số 72-74 đường Nguyễn Thị Minh Khai, phường Võ Thị Sáu, Quận 3, Thành Phố Hồ Chí Minh</p>
            <p className={cx('mb-5 text-xs')}>
              Email:{' '}
              <a className={cx('underline-text__run', 'relative')} href="mailto:info@abbottnutrition.com.vn">
                info@abbottnutrition.com.vn
              </a>
            </p>
            <p className={cx('mb-5 text-xs')}>Số đăng ký: 0310139770/KD-0655</p>
            <p className={cx('mb-5 text-xs')}>Cấp ngày: 28/04/2021</p>
            <p className={cx('mb-5 text-xs')}>
              Hotline:{' '}
              <a className={cx('underline-text__run', 'relative')} href="tel:19001519">
                1900 1519
              </a>
            </p>
          </div>
          <div className={cx('basis-1/4')}>
            <ul className="text-xs">
              <li className="mb-4">
                <Link className={cx('underline-text__run', 'relative')} href={'/'}>
                  Chính sách về tính riêng tư
                </Link>
              </li>
              <li className="mb-4">
                <Link className={cx('underline-text__run', 'relative')} href={'/'}>
                  Chính sách về bảo mật
                </Link>
              </li>
              <li className="mb-4">
                <Link className={cx('underline-text__run', 'relative')} href={'/'}>
                  Chính sách về kiểm hàng và đổi / trả
                </Link>
              </li>
              <li className="mb-4">
                <Link className={cx('underline-text__run', 'relative')} href={'/'}>
                  Chính sách về giao nhận
                </Link>
              </li>
              <li className="mb-4">
                <Link className={cx('underline-text__run', 'relative')} href={'/'}>
                  Chính sách về thanh toán
                </Link>
              </li>
              <li className="mb-4">
                <Link className={cx('underline-text__run', 'relative')} href={'/'}>
                  Trang công bố mức giá kê khai
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('basis-1/12', 'footer-network')}>
            <Link href={'/'}>
              <Image className={cx('footer-network__icon', 'rounded-xl mb-3')} alt="Facebook" src={'/fb_icon_2.webp'} width={40} height={40} />
            </Link>
            <Link href={'/'}>
              <Image className={cx('footer-network__icon', 'rounded-xl mb-3')} alt="Zalo" src={'/zalo-chat.webp'} width={40} height={40} />
            </Link>
            <Link href={'/'}>
              <Image className={cx('footer-network__icon', 'rounded-xl mb-3')} alt="Youtube" src={'/youtube.webp'} width={40} height={40} />
            </Link>
          </div>
        </div>
        <p className="text-xs mt-5">© 2023 Abbott. Bảo lưu Mọi quyền.</p>
      </div>
    </footer>
  );
}
