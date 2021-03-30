import React, { RefObject, useEffect, useRef } from 'react'
import FrameStyled, {
  FrameContentWrapperStyled,
  FrameHeaderWrapperStyled,
} from './FrameStyled'
import Card from '../../atoms/Card/Card'
import FrameHeader from './FrameHeader/FrameHeader'
import FrameContent from './FrameContent/FrameContent'

interface IProps {
  title: string
  elements?: React.ReactNode
  children?: React.ReactNode
}

const Frame = (props: IProps) => {
  const frameRef = useRef<HTMLDivElement>(null)
  const frameHeaderWrapperRef = useRef<HTMLDivElement>(null)
  const frameContentWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeCallback = () => {
      const frameContentHeight = calcFrameContentHeight(
        frameRef,
        frameHeaderWrapperRef,
      )

      if (frameContentWrapperRef.current) {
        frameContentWrapperRef.current.style.height = `${frameContentHeight}px`
      }
    }
    window.addEventListener('resize', resizeCallback)

    resizeCallback()

    return () => {
      window.removeEventListener('resize', resizeCallback)
    }
  }, [])

  const calcFrameContentHeight = (
    frameRef: RefObject<HTMLDivElement>,
    frameHeaderWrapper: RefObject<HTMLDivElement>,
  ) => {
    const frameHeight = frameRef.current?.clientHeight
    const frameHeaderHeight = frameHeaderWrapper.current?.clientHeight

    if (frameHeight && frameHeaderHeight) {
      return frameHeight - frameHeaderHeight
    }

    return 0
  }

  return (
    <FrameStyled ref={frameRef}>
      <Card>
        <FrameHeaderWrapperStyled ref={frameHeaderWrapperRef}>
          <FrameHeader title={props.title} elements={props.elements} />
        </FrameHeaderWrapperStyled>
        <FrameContentWrapperStyled ref={frameContentWrapperRef}>
          <FrameContent>{props.children}</FrameContent>
        </FrameContentWrapperStyled>
      </Card>
    </FrameStyled>
  )
}

export default Frame
