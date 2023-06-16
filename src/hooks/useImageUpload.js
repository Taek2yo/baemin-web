import { useState } from "react";

export default function useImageUpload() {
  const [src, setSrc] = useState("");

  const handleImageUpload = async (file) => {
    try {
      const filename = encodeURIComponent(file.name);
      let res = await fetch(`/api/imageUpload/image?file=${filename}`);
      res = await res.json();

      // S3 업로드
      const formData = new FormData();
      Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
      });

      let result = await fetch(res.url, {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        setSrc(`${result.url}/${filename}`);
      } else {
        window.alert('이미지 크기는는 1MB 이하여야 합니다.');
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { src, handleImageUpload };
}
