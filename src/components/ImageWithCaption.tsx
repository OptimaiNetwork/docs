import React from 'react';

export default function ImageWithCaption({
  src,
  alt,
  caption,
  width = "100%",
}: {
  src: string;
  alt: string;
  caption: string;
  width?: string;
}) {
  return (
    <figure style={{ textAlign: 'center' }}>
      <img src={src} alt={alt} style={{ width }} />
      <figcaption style={{ fontSize: '1.5rem', color: '#999', marginTop: '0.5rem' }}>
        {caption}
      </figcaption>
    </figure>
  );
}
