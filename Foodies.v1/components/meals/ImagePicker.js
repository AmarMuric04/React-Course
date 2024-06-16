"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handleClick = () => imageInput.current.click();
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => setPickedImage(fileReader.result);

    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            "No image picked yet"
          ) : (
            <Image src={pickedImage} alt="Your image" fill />
          )}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png,image/jpg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
