
"use client";

import { useEffect, useState } from "react";

function ArrowIcon({ direction }: { direction: "down" | "down-right" | "up-right" }) {
  const paths = {
    down: "M12 4v16m-7-7 7 7 7-7",
    "down-right": "M5 5l14 14m-9 0h9v-9",
    "up-right": "M5 19 19 5m-9 0h9v9",
  };

  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}

const events = [
  {
    number: "I",
    name: "Carnival",
    date: "12 November 2026",
    time: "11:00 AM onwards",
    venue: "Golden Serene Farm House, Hyderabad",
    art: "carnival",
    symbol: "✺\uFE0E",
    image: "/artwork/carnival.webp",
    calendarStart: "20261112T053000Z",
    calendarEnd: "20261112T113000Z",
    mapUrl:
      "https://www.google.com/maps/place/Golden+Serene+Farm+House/@17.7414375,78.6089375,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcc7f0a543f0443:0xb90f4a940e49cee5!8m2!3d17.7414375!4d78.6089375!16s%2Fg%2F11w1b_sgsr?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    number: "II",
    name: "Sangeeth",
    date: "13 November 2026",
    time: "7:00 PM onwards",
    venue: "Advaya Convention, ORR Exit 6, Muneerabad",
    art: "sangeeth",
    symbol: "✳\uFE0E",
    image: "/artwork/sangeeth.webp",
    calendarStart: "20261113T133000Z",
    calendarEnd: "20261113T173000Z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Advaya+Convention+Munirabad+ORR+Exit+6",
  },
  {
    number: "III",
    name: "Mehandi",
    date: "14 November 2026",
    time: "3:00 PM onwards",
    venue: "Groom's and bride's residences",
    art: "mehandi",
    symbol: "❋\uFE0E",
    image: "/artwork/mehandi.webp",
    calendarStart: "20261114T093000Z",
    calendarEnd: "20261114T123000Z",
    mapUrl:
      "https://www.google.com/maps/place/The+Ananda/@17.4313625,78.648669,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9f54c270f3eb:0x31b49b00ab1703ff!8m2!3d17.4313625!4d78.6512439!16s%2Fg%2F11smgl8_5w?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    number: "IV",
    name: "Pelli",
    date: "15 November 2026",
    time: "Muhurtham: 9:15 PM · Dinner: 7:30 PM",
    venue: "Jenvi Convention, ORR Exit 6, Thumukunta",
    art: "pelli",
    symbol: "✺\uFE0E",
    image: "/artwork/pelli.webp",
    calendarStart: "20261115T140000Z",
    calendarEnd: "20261115T180000Z",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jenvi+Conventions+Thumukunta+Hyderabad",
  },
];

const escapeCalendarText = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

const foldCalendarLine = (line: string) => {
  const encoder = new TextEncoder();
  const folded: string[] = [];
  let currentLine = "";
  let currentBytes = 0;

  for (const character of line) {
    const characterBytes = encoder.encode(character).length;
    if (currentBytes + characterBytes > 75) {
      folded.push(currentLine);
      currentLine = ` ${character}`;
      currentBytes = 1 + characterBytes;
    } else {
      currentLine += character;
      currentBytes += characterBytes;
    }
  }

  folded.push(currentLine);
  return folded.join("\r\n");
};

const makeCalendarFile = (calendarEvents: typeof events) => {
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
  const entries = calendarEvents.map((event) => {
    const location = event.name === "Mehandi"
      ? "Location details will be shared by the hosts."
      : event.venue;
    const description = [
      `${event.date}, ${event.time} (India time).`,
      event.name === "Pelli" ? "Dinner at 7:30 PM; muhurtham at 9:15 PM." : "",
      "Calendar end time is an estimate; please adjust after adding if needed.",
    ].filter(Boolean).join(" ");

    return [
      "BEGIN:VEVENT",
      `UID:${event.name.toLowerCase()}-2026@bhavana-gowtham-wedding`,
      `DTSTAMP:${timestamp}`,
      `DTSTART:${event.calendarStart}`,
      `DTEND:${event.calendarEnd}`,
      `SUMMARY:${escapeCalendarText(`${event.name} | Bhavana & Gowtham`)}`,
      `DESCRIPTION:${escapeCalendarText(description)}`,
      `LOCATION:${escapeCalendarText(location)}`,
      ...(event.mapUrl ? [`URL:${event.mapUrl}`] : []),
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeCalendarText(`${event.name} is tomorrow`)}`,
      "END:VALARM",
      "BEGIN:VALARM",
      "TRIGGER:-PT2H",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeCalendarText(`${event.name} starts in 2 hours`)}`,
      "END:VALARM",
      "END:VEVENT",
    ].join("\r\n");
  });

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bhavana and Gowtham//Wedding Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Bhavana & Gowtham Wedding Events",
    "X-WR-TIMEZONE:Asia/Kolkata",
    ...entries,
    "END:VCALENDAR",
  ].join("\r\n").split("\r\n").map(foldCalendarLine).join("\r\n");
};

const downloadCalendar = (calendarEvents: typeof events, filename: string) => {
  const file = new Blob([makeCalendarFile(calendarEvents)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const copy = {
  top: "THE WEDDING CELEBRATION",
  location: "HYDERABAD · 2026",
  invitation: "TOGETHER WITH THEIR FAMILIES,",
  subtitle: "Joyfully invite you to celebrate their union.",
  button: "DISCOVER THE CELEBRATION",
  kicker: "FOUR EVENTS · A LIFETIME OF MEMORIES",
  heading: "A celebration in chapters.",
  description:
    "Every gathering has a story. We would be delighted to share these beautiful moments with you.",
  footer: "With love,",
  made: "MADE WITH LOVE",
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date(
      "2026-11-15T21:15:00+05:30"
    ).getTime();

    const updateCountdown = () => {
      const remaining = Math.max(0, weddingDate - Date.now());

      setCountdown({
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((remaining / (1000 * 60)) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));
    requestAnimationFrame(() => {
      document.documentElement.classList.add("reveal-ready");
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            <span>BHAVANA</span>
            <small>&</small>
            <span>GOWTHAM</span>
          </a>

          <div
            className={`nav-links ${isMobileMenuOpen ? "is-open" : ""}`}
            id="site-navigation-links"
          >
            <a href="#our-story" onClick={() => setIsMobileMenuOpen(false)}>
              Our Story
            </a>
            <a href="#celebration" onClick={() => setIsMobileMenuOpen(false)}>
              Celebrations
            </a>
            <a
              href="#celebration-timeline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Timeline
            </a>
          </div>

          <button
            className="nav-menu-toggle"
            type="button"
            aria-controls="site-navigation-links"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <main id="top" lang="en">
      <section className="hero">
        <div className="topline">
          <span>{copy.top}</span>
          <span>{copy.location}</span>
        </div>

        <div className="hero-art" aria-label="Wedding artwork" data-reveal="photo">
          <div className="hero-painting">
            <img
              src="/artwork/wedding-couple1.webp"
              alt="Traditional wedding-inspired illustration"
            />
            </div>
        </div>

        <p className="invitation-label" data-reveal>{copy.invitation}</p>

        <h1 className="couple-names" data-reveal>
          Bhavana
          <span className="ampersand">&</span>
          Gowtham
        </h1>

        <p className="hero-subtitle" data-reveal>{copy.subtitle}</p>

        <div className="hero-date" data-reveal>
          <span>12</span>
          <span className="date-divider" />
          <span>15</span>
          <span className="date-month">NOVEMBER 2026</span>
        </div>

        <a className="enter-button" href="#celebration" data-reveal>
          {copy.button} <ArrowIcon direction="down-right" />
        </a>

        <div className="hero-footer">
          <span>{copy.made}</span>
          <span>WITH BLESSINGS</span>
          <span>BHAVANA ♡ GOWTHAM</span>
        </div>
      </section>

      <section className="celebration" id="celebration">
        <p className="section-kicker" data-reveal>{copy.kicker}</p>
        <h2 data-reveal>{copy.heading}</h2>
        <p className="section-description" data-reveal>{copy.description}</p>

        <button
          className="calendar-download-all"
          type="button"
          data-reveal
          onClick={() => downloadCalendar(events, "bhavana-gowtham-events.ics")}
        >
          Add all events to calendar <ArrowIcon direction="down" />
        </button>

        <div className="event-list">
          {events.map((event) => (
            <article
              className={`event-row event-${event.art}`}
              key={event.number}
              data-reveal="card"
            >
              <div className="event-art">
                <img
                  className="event-art-image"
                  src={event.image}
                alt={`${event.name} illustration`}/>
              </div>

              <div className="event-information">
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p className="event-venue">
                  {event.venue}
                </p>
                <button
                  className="event-calendar-link"
                  type="button"
                  onClick={() =>
                    downloadCalendar([event], `${event.name.toLowerCase()}-2026.ics`)
                  }
                >
                  Add to calendar <ArrowIcon direction="down" />
                </button>
              </div>

              <span className="event-flower" aria-hidden="true">
                {event.symbol}
              </span>
            </article>
          ))}
        </div>

        <p className="closing-note">
          {copy.footer}
          <br />
          <span>Bhavana & Gowtham</span>
        </p>
      </section>
      <section className="love-story" id="our-story">
        <div className="story-heading">
          <p className="section-kicker" data-reveal>A NEW CHAPTER BEGINS</p>
          <h2 data-reveal>
            A little story, <em>forever.</em>
          </h2>
          <p data-reveal>
            Two hearts, two families, and a beautiful journey
            that brings everyone together.
          </p>
        </div>
        <div className="story-gallery">
          {/* Main couple photograph */}
          <div className="story-photo story-photo-large" data-reveal="photo">
            <img
            src="/images/couple-01.webp"
            alt="Bhavana and Gowtham together"
            className="story-photo-image"
            />
            <span className="photo-caption">THE BEGINNING</span>
          </div>
          {/* Second couple photograph */}
          <div className="story-photo story-photo-small" data-reveal="photo">
            <img
            src="/images/couple-02.webp"
            alt="A special moment of Bhavana and Gowtham"
            className="story-photo-image"
            />
            <span className="photo-caption">LITTLE MOMENTS</span>
          </div>
          {/* Editorial note */}
          <div className="story-note" data-reveal>
            <span className="story-flower">{"❋\uFE0E"}</span>
            <p>Some stories are written in the stars.</p>
            <span className="story-note-bottom">
              THEIRS IS JUST BEGINNING
            </span>
          </div>
        </div>
      </section>
    <section className="celebration-timeline" id="celebration-timeline">
      <div className="timeline-heading">
        <p className="section-kicker" data-reveal>THE DAYS WE&apos;LL REMEMBER</p>
        <h2 data-reveal>Every moment, <em>leading to forever.</em></h2>
        <p data-reveal>
          The celebrations begin with family and end with a promise
          for a lifetime.
        </p>
      </div>
      <div className="countdown-panel" data-reveal>
        <p className="countdown-label">UNTIL THE WEDDING DAY</p>
        <div className="countdown-values">
          <div className="countdown-unit">
            <span>{String(countdown.days).padStart(2, "0")}</span>
            <small>DAYS</small>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-unit">
            <span>{String(countdown.hours).padStart(2, "0")}</span>
            <small>HOURS</small>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-unit">
            <span>{String(countdown.minutes).padStart(2, "0")}</span>
            <small>MINUTES</small>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-unit">
            <span>{String(countdown.seconds).padStart(2, "0")}</span>
            <small>SECONDS</small>
          </div>
        </div>
        <p className="countdown-date">15 · 11 · 2026</p>
      </div>
      <div className="timeline-list">
        {events.map((event, index) => (
          <article
            key={event.number}
            className={`timeline-item ${
              event.name === "Pelli" ? "timeline-item-wedding" : ""
            }`}
            data-reveal="timeline"
          >
            <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-content">
              <p className="timeline-date">{event.date} · {event.time}</p>
              <h3>{event.name}</h3>
              <p className="timeline-venue">{event.venue}</p>
              {event.mapUrl && (
                <a
                  className="timeline-venue-link"
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions <ArrowIcon direction="up-right" />
                </a>
              )}
            </div>
            <span className="timeline-flower" aria-hidden="true">
              {event.symbol}
            </span>
          </article>
        ))}
      </div>
      <p className="timeline-footer">
        Four celebrations. Two families. One beautiful beginning.
      </p>
    </section>
    <section className="invitation-closing" id="invitation-closing">
      <div className="closing-ornament" aria-hidden="true">
        {"❋\uFE0E ───────── ✦\uFE0E ───────── ❋\uFE0E"}
      </div>
      <p className="closing-kicker" data-reveal>WITH LOVE & BLESSINGS</p>
      <h2 data-reveal>
        A new chapter,
        <br />
        <em>an everlasting promise.</em>
      </h2>
      <p className="closing-message" data-reveal>
        Your presence will make our celebrations more meaningful
        and our memories more beautiful. We look forward to
        celebrating these precious moments with you.
      </p>
      <section className="general-contacts" aria-labelledby="general-contacts-heading" data-reveal>
        <h3 id="general-contacts-heading">Questions?</h3>
        <p className="general-contacts-label">GENERAL ENQUIRIES</p>
        <div className="general-contact-list">
          <article className="general-contact">
            <h4>Contact 1</h4>
            <p>Keertana Pochiraju</p>
            <a
              className="general-contact-phone"
              href="tel:+919392641578"
              dir="ltr"
              aria-label="Call Keertana Pochiraju at plus 91, 93926, 41578"
            >
              +91 93926 41578
            </a>
          </article>
          <article className="general-contact">
            <h4>Contact 2</h4>
            <p>Raghunath Pochiraju</p>
            <a
              className="general-contact-phone"
              href="tel:+917207293153"
              dir="ltr"
              aria-label="Call Raghunath Pochiraju at plus 91, 72072, 93153"
            >
              +91 72072 93153
            </a>
          </article>
        </div>
      </section>
      <div className="closing-names" data-reveal>
        <span>Bhavana</span>
        <span className="closing-ampersand">&</span>
        <span>Gowtham</span>
      </div>
      <p className="closing-blessing" data-reveal>
        TWO FAMILIES · ONE BEAUTIFUL BEGINNING
      </p>
      <div className="closing-bottom-ornament" aria-hidden="true">
        {"❧\uFE0E"}
      </div>
    </section>
      </main>
    </>
  );
}



