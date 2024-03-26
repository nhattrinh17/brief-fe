'use client';
import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';

interface SelectUiParams {
  name: string;
  valueDefault: string;
  data: { value: string; key: string }[];
  separatingBrick?: boolean;
  onChange: (value: string) => void;
}

const cx = classNames.bind(styles);

export function SelectUi(props: SelectUiParams): JSX.Element {
  const [openOption, setOpenOption] = useState(false);

  const handleClick = (event: any) => {
    const target: any = event.target;
    // Kiểm tra xem sự kiện click có xảy ra trên phần tử boxSelectLanguage hoặc các phần tử con của nó không
    if (target.id !== `${props.name}-result` && target.id !== `${props.name}-options`) {
      setOpenOption(false); // Đóng phần tùy chọn nếu click bên ngoài
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={cx('header-select__language', 'text-sm ')}>
      <span id={`${props.name}-result`} className={cx('header-select__language--result', 'rounded-2xl')} onClick={() => setOpenOption(true)}>
        {props.valueDefault}
        <FontAwesomeIcon icon={faChevronDown} className={cx('header-select__icon')} />
      </span>
      {openOption && (
        <div className={cx('header-select__language--option', 'rounded-xl')} id={`${props.name}-options`}>
          {props.data.map((item, index) => {
            return (
              <span onClick={() => props.onChange(item.key)} key={index}>
                {item.value}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
