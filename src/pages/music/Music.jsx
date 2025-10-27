import React, { useMemo, useState, useCallback } from "react";
import "./music.css";
import seven from "../../img/7odd.jpg";
import party from "../../img/party.jpg";
import cheap from "../../img/cheap.jpg";

/**
 * Music — one big with detail + two small next-in-line (responsive)
 * - Desktop/Tablet: BIG | small | small
 * - Phone: BIG | small (third hides)
 */
export default function Music({ slides = [] }) {
  const initial = useMemo(() => (slides.length ? slides : DEFAULT_SLIDES), [slides]);
  const [order, setOrder] = useState(initial);

  const next = useCallback(() => {
    setOrder((arr) => (arr.length ? [...arr.slice(1), arr[0]] : arr));
  }, []);

  const prev = useCallback(() => {
    setOrder((arr) => (arr.length ? [arr[arr.length - 1], ...arr.slice(0, -1)] : arr));
  }, []);

  // We only ever render the first 3 (CSS will hide the 3rd on phones)
  const visible = order.slice(0, 3);

  return (
    <section className="music">
      <div className="music-wrapper">
        <div className="slider-grid" role="region" aria-label="Music carousel">
          {visible.map((s, i) => (
            <article
              key={s.id}
              className={`card ${i === 0 ? "card-active" : i === 1 ? "card-next1" : "card-next2"}`}
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="content">
                <h2 className="name">{s.name}</h2>
                <p className="des">{s.description}</p>
                {s.href && (
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <button>See More</button>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        
      </div>
      <div className="nav">
          <button className="prev" onClick={prev} aria-label="Previous">◁</button>
          <button className="next" onClick={next} aria-label="Next">▷</button>
        </div>
    </section>
  );
}

const DEFAULT_SLIDES = [
  {
    id: "7odd",
    name: "7 ODD INCHES OF PARTY",
    description: "Lorem ipsum dolor sit amet",
    img: seven,
    href: "#",
  },
  {
    id: "partyviolence",
    name: "PARTYVIOLENCE",
    description: "Lorem ipsum dolor sit amet",
    img: party,
    href: "#",
  },
  {
    id: "cheap",
    name: "CHEAP BEER AND $2 THONGS",
    description: "Lorem ipsum dolor sit amet.",
    img: cheap,
    href: "#",
  },
];
