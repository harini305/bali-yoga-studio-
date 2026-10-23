import Picture from './Picture';

export default function Teachers({ people, showBio = false }) {
  return (
    <ul className={`people${people.length % 3 === 0 ? ' people--three' : ''}`} data-stagger>
      {people.map((t) => (
        <li className="person" key={t.id}>
          <div className="person__photo">
            <Picture src={t.image.replace('.webp', '')} alt={`Portrait of ${t.name}`} width={440} height={440} />
          </div>
          <h3>{t.name}</h3>
          <p className="person__role">{t.role}</p>
          {showBio && (
            <details className="person__bio">
              <summary>Read biography</summary>
              <p>{t.bio}</p>
            </details>
          )}
        </li>
      ))}
    </ul>
  );
}
