import React, {
  useRef,
  useEffect,
  useState,
} from 'react'
import classnames from 'classnames'
import DetailTitle from '../DetailTitle/index.tsx'
import styles from './index.scss'

interface IProps {
  title: string,
  customClass?: string,
  customTitleClass?: string,
  contentHeight?: number,
  needFold?: boolean,
  foldText?: string,
  children?: any,
}

const DetailSection: React.FC<IProps> = ({
  title,
  customClass,
  customTitleClass,
  children,
  needFold,
  foldText,
  contentHeight,
}) => {
  const [isFolding, setIsFolding] = useState<boolean>(false)
  const [unfoldClicked, setUnfoldClicked] = useState<boolean>(false)
  const content = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!needFold || unfoldClicked || isFolding) return
    if (content.current) {
      const {
        height
      } = content.current.getBoundingClientRect()
      if (height > contentHeight) {
        setIsFolding(true)
      }
    }
  }, [isFolding, unfoldClicked])

  const _unfoldHandle = () => {
    setUnfoldClicked(true)
    setIsFolding(false)
  }

  return (
    <div className={classnames(styles.detailSection, customClass? customClass : null)}>
      <div className={styles.detailSectionTitle}>
        <DetailTitle title={title} customClass={customTitleClass}/>
      </div>
      <div className={styles.detailSectionContentWrap} style={{
        height: isFolding && needFold && contentHeight ? contentHeight + 'px' : 'auto' 
      }}>
        <div className={styles.detailSectionContent} ref={content}>
          {children}
        </div>
        {
          isFolding && (
            <div className={styles.detailSectionShadow}></div>
          )
        }
      </div>
      {
        isFolding && (
          <div className={styles.detailSectionFold}>
            <button onClick={() => _unfoldHandle()} className={styles.detailSectionBtn}>{foldText || '展开全部'}<i className={styles.detailSectionArrow} /></button>
          </div>
        )
      }
    </div>
  )
}

export default DetailSection
