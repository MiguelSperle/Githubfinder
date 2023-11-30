import * as Styled from './Styles'
import BoxTypography from './home/components/boxTypography/Box-Typography'
import ImageButton from './home/components/imageButton/Image-Button'

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
