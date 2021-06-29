import React, {
  Component
} from 'react'
import classnames from 'classnames'
import styles from './index.scss'
import LoadingImg from './assets/loading.png'
import ErrorImg from './assets/error.png'

interface IProps {
  src: string,
  loadingImg?: string,
  errorImg?: string,
  hideIfError?: boolean,
  customClass?: string,
  [propName: string]: string | number | boolean
}

interface IState {
  showError: boolean,
  isLoading: boolean,
  isHide: boolean
}

class Image extends Component<IProps, IState> {

  state: IState = {
    showError: false,
    isLoading: true,
    isHide: false
  }

  componentDidMount () {
    const {
      src,
      hideIfError
    } =  this.props
    if (src && src.length) {
      const img = new window.Image()
      img.src = src
      img.onerror = () => {
        if (hideIfError) {
          this.setState({
            isHide: true
          })
        } else {
          this._onError()
        }
      }
      img.onload = () => {
        this._onLoad()
      }
    } else {
      this.setState({
        showError: true
      })
    }
  }

  _onError = () => {
    this.setState({
      isLoading: false,
      showError: true
    })
  } 

  _onLoad = () => {
    this.setState({
      isLoading: false
    })
  }

  _getDisplayImage = () => {
    const {
      src,
      loadingImg,
      errorImg
    } = this.props

    const {
      isLoading,
      showError
    } = this.state

    if (isLoading) {
      return loadingImg || LoadingImg
    } else if (showError) {
      return errorImg || ErrorImg
    } else {
      return src
    }
  }

  render () {
    const {
      src,
      customClass,
      loadingImg,
      errorImg,
      ...params
    } = this.props
    
    const {
      isHide
    } = this.state

    const backgroundImage = this._getDisplayImage()

    return (
      <>
        {
          !isHide && (
            <img
              className={classnames(styles.image, {
                customClass
              })}
              src={backgroundImage}
              {...params}
              onError={this._onError}
            />
          )
        }
      </>
    )
  }
}

export default Image
