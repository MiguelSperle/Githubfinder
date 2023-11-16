import * as Styled from '../app/styles'
import BoxTypography from './home/components/boxTypography/box-typography'
import ImageButton from './home/components/imageButton/image-button'

export default function Home() {
  return (
    <Styled.ContainerHome>
      <Styled.ContainerSecondHome>
        <BoxTypography />
        <ImageButton />
      </Styled.ContainerSecondHome>
    </Styled.ContainerHome>
  )
}
