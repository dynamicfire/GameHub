import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string, width: number, height: number) => {
  if (!url) return noImage;

  const index = url.indexOf("media/") + "media/".length;
  return (
    url.slice(0, index) +
    "crop/" +
    width +
    "/" +
    height +
    "/" +
    url.slice(index)
  );
};

export default getCroppedImageUrl;
