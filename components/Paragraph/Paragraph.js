import { getTextAlign } from "utils/fonts"
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls"

export const Paragraph = ({ textAlign, content, textColor }) => {
  return (
    <p
    className={`my-5 max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
    style={{ color: textColor }}
    dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  )
}