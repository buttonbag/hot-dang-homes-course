export const relativeToAbsoluteUrls = (htmlString = "") => {
  return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join(""); //replace first element in url to make it relative
}