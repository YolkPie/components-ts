import notificationDOM from "./notification";
import "./index.css";

let notification;
const notice = (type, content, duration = 2000, top, onClose) => {
  if (!notification) notification = notificationDOM;
  return notification.addNotice({ type, content, duration, top, onClose });
};

export default {
  info(content, duration, top, onClose) {
    return notice("info", content, duration, top, onClose);
  },
  success(content, duration, top, onClose) {
    return notice("success", content, duration, top, onClose);
  },
  warning(content, duration, top, onClose) {
    return notice("warning", content, duration, top, onClose);
  },
  error(content, duration, top, onClose) {
    return notice("error", content, duration, top, onClose);
  },
  loading(content, duration = 0, top, onClose) {
    return notice("loading", content, duration, top, onClose);
  }
};
