import React from "react";
import PropTypes from "prop-types";
import { px2vw } from "../../utils";
import "./index.css";

const Confirm = props => {
  const {
    text1,
    text2,
    extText,
    background,
    onOk,
    onCancel,
    cancelText,
    okText,
    isShowCancel,
    isShowLayer,
    height,
    textAlign
  } = props;
  return (
    <div styleName={`${isShowLayer === true ? "layer" : ""}`}>
      <div
        styleName="Confirm"
        style={{
          background,
          height: `${height > 0 ? px2vw(height) : px2vw(420)}`,
          textAlign: textAlign || "left"
        }}
      >
        <div styleName="Confirm-txt">
          <span styleName="Confirm-txt1">{text1}</span>
          <span styleName="Confirm-txt2">{text2}</span>
        </div>
        <div styleName="Confirm-txt-ext">{extText}</div>
        <div styleName="Confirm-btn">
          {isShowCancel !== false && (
            <div styleName="Confirm-btn-left" onClick={onCancel}>
              {cancelText || "取消"}
            </div>
          )}
          <div styleName="Confirm-btn-right" onClick={onOk}>
            {okText || "确定"}
          </div>
        </div>
      </div>
    </div>
  );
};

Confirm.defaultProps = {
  text1: "",
  text2: "",
  cancelText: "",
  okText: "",
  extText: "",
  textAlign: "",
  height: 0,
  isShowCancel: true,
  isShowLayer: true,
  background: "#fff",
  onOk: () => {},
  onCancel: () => {}
};

Confirm.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  textAlign: PropTypes.string,
  height: PropTypes.string || PropTypes.number,
  extText: PropTypes.string,
  isShowCancel: PropTypes.bool,
  isShowLayer: PropTypes.bool,
  background: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
};

export default Confirm;
