"use client";

import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { SelectUi } from "@/uiCore";

const cx = classNames.bind(styles);

export function Header(): JSX.Element {
  const [language, setLanguage] = useState("VI");
  const [money, setMoney] = useState("VND");

  return (
    <header className={cx("container flex", "header")}>
      <div className={cx("header-left", "flex")}>
        <Link href={"/"}>
          <Image
            alt="Logo Brief"
            src={"/logo.webp"}
            width={120}
            height={60}
            className={cx("header__logo")}
          />
        </Link>
        <form className={cx("header-search", "flex")}>
          <input
            type="search"
            placeholder="Bạn chọn chế độ dinh dưỡng nào?"
            className={cx(
              "header-search__input",
              "outline-none rounded-2xl text-base"
            )}
          />
          <button
            className={cx(
              "flex rounded-2xl text-sm font-medium",
              "header-search__submit"
            )}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx("header-search__icon")}
            />
            Tìm kiếm
          </button>
        </form>
      </div>

      <div className={cx("flex", "header-right")}>
        <SelectUi
          data={[
            { key: "VI", value: language == "VI" ? "Việt Nam" : "Vietnamese" },
            { key: "EN", value: language == "VI" ? "Tiếng Anh" : "English" },
          ]}
          name="language"
          onChange={(value) => setLanguage(value)}
          valueDefault={language == "VI" ? "Việt Nam" : "English"}
        />

        <SelectUi
          data={[
            {
              key: "VND",
              value: language == "VI" ? "Việt Nam đồng" : "VND",
            },
            { key: "USD", value: language == "VI" ? "Đô la Mỹ" : "Dollar" },
          ]}
          name="money"
          onChange={(value) => setMoney(value)}
          valueDefault={money == "VND" ? "VND" : "USD"}
        />
      </div>
    </header>
  );
}
// {language == "VI" ? "Việt Nam" : "English"}
// {language == "VI" ? "Việt Nam" : "English"}
// {language == "VI" ? "Tiếng Anh" : "Vietnamese"}
