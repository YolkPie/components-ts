import React from 'react';
import css from './index.css';

interface SendToProps {
  addrText:string
}

const SendTo: React.FC<SendToProps> = ({
  addrText
}) => {
  return (
    <div className={css.sent_to}>
      <div className={css.contain}>
        <span className={css.title}>送至</span>
        <span className={css.address_info}>
          {addrText}
        </span>
        <span className={css.address_img}></span>
      </div>
    </div>
  );
};

export default SendTo