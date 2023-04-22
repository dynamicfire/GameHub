const getCroppedImageUrl = (url: string, width: number, height: number) => {
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
