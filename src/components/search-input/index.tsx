import React from 'react';
import css from './index.css';

interface SearchInputProps {
  isHasBtn:boolean,
  placeholder:string
}

const SearchInput: React.FC<SearchInputProps> = ({
  isHasBtn,
  placeholder
}) => {
  return (
    <div className={css.search_container}>
      <div className={css.search_input_wrap}>
        <div className={css.search_input_icon}></div>
        <input type='text' placeholder={placeholder || '请输入搜索关键字'} className={[css.search_input,isHasBtn?css.has_btn:''].join(' ')} />
        {isHasBtn && 
          <div className={css.search_btn}>搜索</div>
        }    
      </div>
    </div>
  );
};

export default SearchInput