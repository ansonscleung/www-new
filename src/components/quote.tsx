import React, { useEffect, useState } from "react";
import { quotes } from "../data/quotes";
import { quoteIndexForDate } from "../utils/quote-of-day";
import "./quote.scss";

const QuoteOfTheDay: React.FC = () => {
  // A stable server/client first render avoids a date-dependent hydration mismatch.
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [hasManualSelection, setHasManualSelection] = useState(false);

  useEffect(() => {
    setQuoteIndex(quoteIndexForDate(new Date(), quotes.length));
  }, []);

  const quote = quotes[quoteIndex];

  return (
    <section id="quote" className="section quote-of-the-day" aria-labelledby="quote-title">
      <div className="container">
        <article className="quote-card">
          <p className="quote-kicker">Quote of the day</p>
          <h2 id="quote-title" className="title is-3">A practical idea to carry forward</h2>
          <blockquote
            aria-live={hasManualSelection ? "polite" : "off"}
            aria-atomic="true"
          >
            <p className="quote-en">“{quote.text.en}”</p>
            <p className="quote-zh" lang="zh-Hant">「{quote.text.zhHant}」</p>
          </blockquote>
          <footer className="quote-attribution">
            <p>{quote.author.name.en} · <span lang="zh-Hant">{quote.author.name.zhHant}</span></p>
            <cite>{quote.work.title.en} · <span lang="zh-Hant">{quote.work.title.zhHant}</span></cite>
          </footer>
          <div className="quote-meta">
            <span className="tag is-primary is-light">{quote.category.replace("-", " ")}</span>
            <a href={quote.source.url} target="_blank" rel="noopener noreferrer">Read source</a>
          </div>
          <button
            className="button is-primary is-rounded"
            type="button"
            onClick={() => {
              setHasManualSelection(true);
              setQuoteIndex((index) => (index + 1) % quotes.length);
            }}
          >
            Another quote
          </button>
        </article>
      </div>
    </section>
  );
};

export default QuoteOfTheDay;
