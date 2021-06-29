import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import styles from './index.scss'

import AddressPanel from "./index.tsx";


storiesOf("地址选择组件|Address_A_B_C", module)
  .addDecorator(withKnobs)
  .add("地址组件-三级字母导航", () => {
    let showAddress = true
    const addressObj = {
      provinceId: '',
      cityId: '',
      countyId: '',
      provinceName: '',
      cityName: '',
      countyName: ''
    }
    const handlePanelClose = (res:any) => {
       console.log(addressObj)
       console.log(res)
       showAddress = false
    }
    return <div className={styles.address__box}>
      <div  className={styles.address__boxfixed}>
            <AddressPanel 
              visible={showAddress}
              ids={[addressObj.provinceId, addressObj.cityId, addressObj.countyId]}
              names={[addressObj.provinceName, addressObj.cityName, addressObj.countyName]}
              onClose={handlePanelClose} 
            />
      </div>
    </div>
    ;
  });
