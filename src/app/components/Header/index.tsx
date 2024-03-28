'use client';

import { faBagShopping, faBarsStaggered, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { SelectUi } from '@/uiCore';
import NarBar from '../NarBar';
import SearchHeader from '../Search';

const cx = classNames.bind(styles);

export function Header(): JSX.Element {
  const [language, setLanguage] = useState('VI');
  const [money, setMoney] = useState('VND');
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const navbarElement = useRef<HTMLDivElement>(null);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  const toggleNavMobile = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navbarElement.current && !navbarElement.current.contains(event.target) && !event.target.closest('.header-menu-toggle') && !event.target.closest('.header-menu-toggle__icon')) {
        setIsNavMobileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={cx('header')}>
        <div className={cx('container flex justify-between max-sm:justify-around margin-left-right')}>
          <div className="hidden items-center max-sm:flex">
            <FontAwesomeIcon onClick={toggleNavMobile} icon={faBarsStaggered} className={cx('hidden max-sm:flex h-5', 'header-menu-toggle__icon')} />
          </div>
          <div className={cx('header-left', 'flex max-sm:justify-center justify-between')}>
            <Link href={'/'}>
              <Image alt="Logo" src={'/logo.webp'} width={120} height={60} className={cx('header__logo', 'max-sm:ml-12')} />
            </Link>
            <div className="max-sm:hidden ">
              <SearchHeader />
            </div>
          </div>
          <div className={cx('flex', 'header-right')}>
            <div className={cx('max-sm:hidden flex')}>
              <SelectUi
                data={[
                  { key: 'VI', value: language == 'VI' ? 'Việt Nam' : 'Vietnamese' },
                  { key: 'EN', value: language == 'VI' ? 'Tiếng Anh' : 'English' },
                ]}
                name="language"
                onChange={(value) => setLanguage(value)}
                valueDefault={language == 'VI' ? 'Việt Nam' : 'English'}
              />
              <SelectUi
                data={[
                  {
                    key: 'VND',
                    value: language == 'VI' ? 'Việt Nam đồng' : 'VND',
                  },
                  { key: 'USD', value: language == 'VI' ? 'Đô la Mỹ' : 'Dollar' },
                ]}
                name="money"
                onChange={(value) => setMoney(value)}
                valueDefault={money == 'VND' ? 'VND' : 'USD'}
              />
            </div>
            <div className={cx('header-cart')}>
              <FontAwesomeIcon icon={faBagShopping} className={cx('header-cart__icon')} />
              <span className={cx('header-cart__number', 'rounded-full text-sm max-sm:absolute max-sm:bottom-2')}>1</span>
            </div>

            <div className={cx('header-mobile__search', 'hidden max-sm:block')}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={cx('header-cart__icon')}
                onClick={() => {
                  if (!openSearchMobile) document.documentElement.style.setProperty('--height-header', `140px`);
                  else document.documentElement.style.setProperty('--height-header', `90px`);
                  setOpenSearchMobile((pre) => !pre);
                }}
              />
            </div>
          </div>
        </div>
        {openSearchMobile && (
          <div className={cx('mt-4 hidden max-sm:block', 'header-search__mobile')}>
            <SearchHeader />
          </div>
        )}
      </header>
      <div ref={navbarElement} className={cx('wrapper-navbar', { 'max-sm:wrapper-navbar__mobile': isNavMobileOpen })}>
        <NarBar />
      </div>
    </>
  );
}
