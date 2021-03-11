import React from 'react';
import css from './index.css';

interface FormatPriceProps {
  price: number | string,
  style: object
  integerStyle: object
  decimalDotStyle: object
  decimalStyle: object
}


/**
 * 价格格式化
 */
const formatPriceFunc = (num: number | string) => {
  if (num <= 0) { return 0 }
  let _num = (num || 0).toString(), result = '', integer = '', decimal = '';
  if (_num.indexOf('.') > 0) {
    integer = _num.split('.')[0]
    decimal = _num.split('.')[1]
  } else {
    integer = _num
  }

  while (integer.length > 3) {
    result = ',' + integer.slice(-3) + result;
    integer = integer.slice(0, integer.length - 3);
  }

  if (integer) { result = integer + result; }
  return [result, decimal];
};

const FormatPrice: React.FC<FormatPriceProps> = ({
  price,
  style
}) => {
  const [integer, decimal]: any = formatPriceFunc(price)
  return (
    <div
      style={style}
    >
      <span className={css.price_integer}>{integer}</span>
      {decimal > 0 &&
        <React.Fragment>
          <span className={css.price_decimal_dot}>.</span>
          <span className={css.price_decimal}>{decimal}</span>
        </React.Fragment>
      }
    </div>
  );
};

export default FormatPrice