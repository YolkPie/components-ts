import * as React from "react";
import classnames from 'classnames'
import styles from './index.scss'
import classNames from "classnames";

interface Props {
  steps: string[];
  currentStep: number;
  customClass?: string;
}

function Step(props: Props) {
  const {
    steps,
    currentStep,
    customClass
  } = props
  return  steps && steps.length ? (
    <ul className={styles.step}>
      {
        steps.map((step, index) => {
          return (
            <li key={index} className={ classNames(
              styles[`fore${index}`],
              index < currentStep ? styles.active : {},
              customClass
            )} style={{
              width: `${1 / steps.length * 100}%`
            }}>
              <b>{index + 1}</b>
              <span>{step}</span>
            </li>
          )
        })
      }
    </ul>
  ) : '';
}

export default Step;
