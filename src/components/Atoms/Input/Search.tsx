import { ChangeEvent, useEffect, useState, forwardRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import { InputProps } from './Input';

import {
  StyleButtonSearch,
  StyleInput,
  StyleLabel,
  StyleWrapper
} from './style';

export interface SearchInputProps extends InputProps {
  onSearch?: (value: string) => void;
}

let timer: null | NodeJS.Timeout = null;

const Search = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value,
      isRequired,
      id,
      style,
      className,
      borderColor = 'transparent',
      onSearch,
      labelColor = 'text',
      bgColor = 'white',
      ...restInputProps
    },
    _ref
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
      if (typeof value === 'string') {
        setInputValue((prev) => {
          if (prev !== value) return value;
          return prev;
        });
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value: val } = e.target;
      setInputValue(val);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setSearchValue(val);
        if (onSearch) onSearch(val);
      }, 500);
    };

    const handleSearch = () => {
      if (onSearch) onSearch(searchValue);
    };

    return (
      <StyleWrapper
        $color={labelColor}
        $bgColor={bgColor}
        $borderColor={borderColor}
        id={id}
        style={style}
        className={className}
      >
        <StyleLabel>
          {/* @ts-ignore */}
          <StyleInput
            // @ts-ignore
            ref={_ref}
            value={inputValue}
            onChange={handleChange}
            // override props
            {...restInputProps}
          />
        </StyleLabel>

        <StyleButtonSearch
          onClick={handleSearch}
          variant="link"
          bgColor="warning"
          color="white"
        >
          {/* @ts-ignore */}
          Search <SearchOutlined />
        </StyleButtonSearch>
      </StyleWrapper>
    );
  }
);

Search.displayName = 'Search';

export default Search;
