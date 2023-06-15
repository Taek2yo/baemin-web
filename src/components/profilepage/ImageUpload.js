"use client";

export default function ImageUpload() {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={ async (e) => {
        let file = e.target.files[0]
        let fileName =encodeURIComponent(file.name)
        let res = await fetch("/pages/api/imageUpload/image?file=" + fileName);
        res = await res.json()
        }}
      />
    </>
  );
}
