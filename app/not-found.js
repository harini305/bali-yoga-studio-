import Link from '@/components/Link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h1>This path leads nowhere</h1>
        <p>The page you were looking for doesn’t exist or has moved. Let’s get you back to the studio.</p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <Link href="/" className="btn btn--saffron">
            Back to home
          </Link>
          <Link href="/teacher-training" className="btn btn--ghost">
            Teacher training
          </Link>
        </div>
      </div>
    </section>
  );
}
