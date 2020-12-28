import {
  px2vw
  // webpSupport,
  // getImageAspect,
  // filterImg,
  // getRealValue,
  // getCssValue
} from "../index";

describe("[Function]px2vw", () => {
  test("【px2vw】转换 px 为 vw", () => {
    // const mockPx2vw = jest.fn(x => x)
    expect(px2vw(750)).toBe("100vw");
    expect(px2vw(0)).toBe("0vw");
  });
});
