export const Columns = ({isStackedOnMobile, children, textColor, backgroundColor}) => {
  const textColorStyle = textColor ? {color: textColor} : {};
  const bgColorStyle = backgroundColor ? {backgroundColor} : {}
  return (
    <section className="my-10 md:p-5" style={{...textColorStyle, ...bgColorStyle}}>
      <div className={`max-w-5xl mx-auto ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
    </section>
  )
}