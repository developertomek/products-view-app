import React, { useState } from "react";
import { IApiParams } from "../../../utils/intefraces";
import styles from "./Select.module.css";

type ISelectType = "categories" | "brands";
interface SelectProps {
  options: string[];
  type: ISelectType;
  setApiParams: React.Dispatch<React.SetStateAction<IApiParams>>;
  apiParams: IApiParams;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select = ({ options, type, setApiParams, apiParams }: SelectProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClearFilter = () => {
    const options: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      `[name=${type}]`
    );
    options.forEach((option) => (option.checked = false));
    setApiParams((prev: IApiParams) => ({
      ...prev,
      [type]: [],
      page: 1,
    }));
    handleShowOptions();
  };

  const handleChangeOption = (input: HTMLInputElement) => {
    if (input.checked) {
      setApiParams((prev: IApiParams) => ({
        ...prev,
        [type]: [...prev[type], input.value],
        page: 1,
      }));
    } else {
      setApiParams((prev: IApiParams) => ({
        ...prev,
        [type]: prev[type].filter((p) => p !== input.value),
        page: 1,
      }));
    }
  };

  return (
    <div className={styles.select}>
      <div
        className={`${styles.value} ${showOptions && styles.show}`}
        onClick={handleShowOptions}
        role="none"
        data-cy="value"
      >
        {apiParams[type].length > 0 && (
          <span>
            {type}: {apiParams[type].length} selected
          </span>
        )}
        {!apiParams[type].length && <span>select {type}</span>}

        <i
          className={`fa fa-caret-down ${showOptions && styles.show}`}
          aria-hidden="true"
        ></i>
      </div>
      <ul
        className={`${styles.options} ${showOptions && styles.show}`}
        data-cy="options-list"
      >
        {options.map((option) => (
          <li key={option}>
            <label className={styles.option} data-cy="option">
              <input
                type="checkbox"
                name={type}
                value={option}
                onChange={(e) => handleChangeOption(e.target)}
              />
              {option}
            </label>
          </li>
        ))}
        <button
          className={styles.clear}
          onClick={handleClearFilter}
          data-cy="clear"
        >
          <i className="fa fa-times"></i> clear
        </button>
      </ul>
    </div>
  );
};

export default Select;
