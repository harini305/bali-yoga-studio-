import NextLink from 'next/link';

// Internal links load on click rather than prefetching in the background,
// which keeps CDN request counts low. Pass prefetch explicitly to override.
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
