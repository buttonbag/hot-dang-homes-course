export const Columns = ({isStackedOnMobile, children, textColor, backgroundColor}) => {
  const textColorStyle = textColor ? {color: textColor} : {};
  const bgColorStyle = backgroundColor ? {backgroundColor} : {}
  return (
    <div className="my-10" style={{...textColorStyle, ...bgColorStyle}}>
      <div className={`max-w-5xl mx-auto ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
    </div>
  )
}