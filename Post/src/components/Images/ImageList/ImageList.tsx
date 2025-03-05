import { useEffect, useState } from "react";
import styles from "./ImageList.module.css";
import { Image, IImgProps } from "../Image/Image";

export const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((result) => {
        setImages(result);
      });
  }, []);

  const OnClickImg = () => {};

  return (
    <div className={styles.imgList}>
      {images.map((item: IImgProps) => (
        <Image title={item.title} url={item.url} onClick={OnClickImg} />
      ))}
    </div>
  );
};
