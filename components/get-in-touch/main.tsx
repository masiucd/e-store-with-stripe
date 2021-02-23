import styled from "@emotion/styled"
import socialData from "@data/social-data.json"
import Box from "./box"

const MainWrapper = styled.section``

export const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      {socialData.map(({ name, url, image }) => (
        <Box key={url} name={name} url={url} image={image} />
      ))}
    </MainWrapper>
  )
}
