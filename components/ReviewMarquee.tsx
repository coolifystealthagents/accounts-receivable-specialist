import proof from '@/content/stealth-agents-proof.json';

export function ReviewMarquee() {
  const reviews = proof.reviews;
  return <section className="reviews" aria-labelledby="reviews-title">
    <div className="reviews-heading">
      <p className="eyebrow" id="reviews-title">StealthAgents reviews</p>
      <p>First party testimonials published on the official Stealth Agents website.</p>
    </div>
    <div className="review-window" tabIndex={0} aria-label="Stealth Agents client reviews. Focus or hover to pause.">
      <div className="review-track">
        {[...reviews, ...reviews].map((review, index) => <blockquote className="review" key={`${review.name}-${index}`} aria-hidden={index >= reviews.length}>
          <div className="stars" aria-label="Five out of five stars">★★★★★</div>
          <p>“{review.quote}”</p>
          <cite>{review.name}</cite>
        </blockquote>)}
      </div>
    </div>
    <p className="review-note">Source: <a href={proof.sourceUrl} rel="noopener noreferrer">Stealth Agents official website</a>. Testimonials are first party and have not been independently verified.</p>
  </section>;
}
