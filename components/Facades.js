'use client';

import { useState } from 'react';
import Picture from './Picture';
import { Play } from './Icons';

// Loads the YouTube player only after the visitor asks for it.
export function VideoFacade({ id, title, poster, posterAlt = '' }) {
  const [active, setActive] = useState(false);
  return (
    <div className="video">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Picture src={poster} alt={posterAlt} width={800} height={450} />
          <button type="button" className="video__play" onClick={() => setActive(true)} aria-label={`Play video: ${title}`}>
            <span>
              <Play /> Play video
            </span>
          </button>
        </>
      )}
    </div>
  );
}

// Loads the Google Map embed only on request.
export function MapFacade({ src, address, link }) {
  const [active, setActive] = useState(false);
  return (
    <div className="map-facade">
      {active ? (
        <iframe src={src} title="Map showing Bali Yoga Studio in Ubud" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="map-facade__inner">
          <p>{address}</p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn btn--saffron" onClick={() => setActive(true)}>
              Show map
            </button>
            <a className="btn btn--ghost" href={link} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
