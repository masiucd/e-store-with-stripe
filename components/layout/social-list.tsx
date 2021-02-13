import { css, cx } from "@emotion/css"
import React from "react"
import socialData from "@data/social-data.json"
import { SocialData } from "@utils/types"
import { below } from "@utils/media-query"

const SocialListStyles = css`
  display: flex;
  align-items: center;
  flex-basis: 60%;
  justify-content: space-evenly;

  @media ${below.tablet} {
    width: 100%;
  }
`

export const SocialList = (): JSX.Element => (
  <ul className={cx(SocialListStyles, "social-list")}>
    {(socialData as SocialData[]).map(s => (
      <li key={s.name}>
        <a target="_blank" rel="noreferrer" href={s.url}>
          {s.name}
        </a>
      </li>
    ))}
  </ul>
)
