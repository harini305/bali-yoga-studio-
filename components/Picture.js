// Serves the pre-sized WebP derivatives produced by scripts/optimize_images.py.
// The first width of each preset has no suffix; smaller ones are name-<w>.webp.
import sizesManifest from '@/data/image-sizes.json';

const presets = {
  hero: [1240, 720],
  card: [900, 560],
  arch: [1100, 640],
  tall: [1200, 700],
  gallery: [1400, 560],
};

export default function Picture({
  src,
  alt = '',
  preset,
  widths,
  width,
  height,
  sizes = '100vw',
  priority = false,
  className,
  style,
}) {
  const generated = presets[preset] || widths || [];
  const known = sizesManifest[src.replace(/^\/img\//, '')];
  // Smaller copies are only generated when the source is wider than them.
  const list = (widths || generated).filter((w, i) => i === 0 || !known || w < known[0]);
  const fileFor = (w) => {
    const idx = generated.indexOf(w);
    return `${src}${idx > 0 ? `-${w}` : ''}.webp`;
  };
  // The largest derivative is capped at the source width, so use the real size.
  const realWidth = (w) => (known && generated.indexOf(w) === 0 ? known[0] : w);

  const srcSet = list.length > 1 ? list.map((w) => `${fileFor(w)} ${realWidth(w)}w`).join(', ') : undefined;
  const w = known ? known[0] : width;
  const h = known ? known[1] : height;

  return (
    <img
      src={list.length ? fileFor(list[0]) : `${src}.webp`}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={style}
    />
  );
}
