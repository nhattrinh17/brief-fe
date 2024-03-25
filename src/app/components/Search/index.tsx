import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

export default function SearchHeader(): JSX.Element {
  return (
    <form className={cx('header-search', 'flex')}>
      <input type="search" placeholder="Bạn chọn chế độ dinh dưỡng nào?" className={cx('header-search__input', 'outline-none rounded-2xl text-base')} />
      <button className={cx('flex rounded-2xl text-sm font-medium', 'header-search__submit')}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('header-search__icon')} />
        Tìm kiếm
      </button>
    </form>
  );
}
