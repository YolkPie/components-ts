export const getToUrl = (action, storeId) => {
  const Host = `https://${window.location.host}/`;
  if (action.urlType == "204") {
    // 邀请有礼
    if (action.toUrl) {
      action.toUrl = `${Host}inviteHasGifts.html`;
    }
  } else if (action.urlType == "205") {
    // 新人专享
    if (action.toUrl) {
      action.toUrl = `${Host}newGift.html`;
    }
  } else if (action.urlType == "206") {
    // 签到
    action.toUrl = "javascript:void(0);";
  } else if (action.urlType == "209") {
    // 试吃
    if (action.toUrl) {
      action.toUrl = Host + action.toUrl;
    }
  } else if (action.urlType == "202") {
    // 热销排行
    if (action.toUrl) {
      action.toUrl = `${Host}hot.html?storeId=${storeId}`;
    }
  } else if (action.urlType == "203") {
    // 新品上市
    if (action.toUrl) {
      action.toUrl = `${Host}new.html?storeId=${storeId}`;
    }
  } else if (action.urlType == "211") {
    // 砍价列表
    if (action.toUrl) {
      action.toUrl = `${Host}bargainList.html?storeId=${storeId}`;
    }
  } else if (action.urlType == "1") {
    // 商详
    if (action.toUrl) {
      if (action.toUrl.toLowerCase().indexOf("skuid") < 0) {
        action.toUrl = "javascript:void(0);";
      } else {
        const skuStr = action.toUrl;
        action.toUrl = `${Host}detail.html?storeId=${storeId}&skuId=${skuStr}`;
      }
    }
  } else if (action.urlType == "201") {
    // 秒杀列表
    if (action.toUrl) {
      action.toUrl = `${Host}miaosha.html`;
    }
  } else if (action.urlType == "2") {
    // 店铺
    if (action.toUrl) {
      const str = action.toUrl.split("/");
      storeId = storeId || str[1];
      action.toUrl = `${Host}index.html?storeId=${storeId}`;
    }
  } else if (action.urlType == "5") {
    // 分类
    if (action.toUrl && action.toUrl.toLowerCase() == "all") {
      action.toUrl = `${Host}category1.html?iconSource=1`;
    } else {
      action.toUrl = `${Host}category2.html?iconSource=1&cid=${action.toUrl}`;
    }
  } else if (action.urlType == "3" || action.urlType == "210") {
    // m
    if (action.toUrl) {
      action.toUrl = action.toUrl.replace(/^(https?:)?\/\//, "//");
      const isPintuan = action.toUrl.indexOf("groupon") != -1;
      if (isPintuan) {
        action.toUrl = `${Host +
          action.toUrl +
          (action.toUrl.indexOf("?") != -1 ? "&" : "?")}storeId=${storeId}`;
      }
    } else {
      action.toUrl = "javascript:void(0);";
    }
  } else {
    action.toUrl = "javascript:void(0);";
  }

  return action.toUrl;
};
