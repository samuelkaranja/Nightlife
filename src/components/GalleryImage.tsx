type GalleryImageProps = {
  src: string;
  alt?: string;
};

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt || "Gallery image"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
    </div>
  );
};

export default GalleryImage;
