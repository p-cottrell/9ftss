// Shows.jsx
import { useEffect } from "react";
import "./shows.css"

export default function Shows() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://widgetv3.bandsintown.com/main.min.js";
    s.async = true;
    document.body.appendChild(s);
    return () => document.body.removeChild(s);
  }, []);

  return (
    <div className="bit-wrap">
      <a
        className="bit-widget-initializer"
        data-artist-name="id_7374292"

        /* Layout / base */
        data-layout-breakpoint="768"
        data-background-color="rgba(0,0,0,0)"              /* --clr-dark */
        data-text-color="rgba(255,255,255,1)"              /* --clr-light */
        data-separator-color="rgba(34,34,34,1)"
        data-font="Orbitron, Helvetica, Arial, sans-serif"
        data-auto-style="false"
        data-bit-logo-position="hidden"

        /* Sections & visibility */
        data-display-local-dates="true"
        data-local-dates-position="tab"
        data-display-past-dates="false"
        data-display-details="false"
        data-display-lineup="true"
        data-display-start-time="false"
        data-display-limit="all"
        data-display-rsvp="false"

        /* Typography caps */
        data-button-label-capitalization="uppercase"
        data-header-capitalization="uppercase"
        data-location-capitalization="uppercase"
        data-venue-capitalization="uppercase"

        /* Date chip */
        data-date-format="MMM. D, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="#ffda5f"                   /* --accent-a */
        data-date-border-width="1px"
        data-date-border-radius="10px"
        data-date-capitalization="capitalize"

        /* Ticket CTA */
        data-event-ticket-cta-size="medium"
        data-event-ticket-text="TICKETS"
        data-event-ticket-cta-text-color="rgba(0,0,0,1)"
        data-event-ticket-cta-bg-color="#ffda5f"           /* gold */
        data-event-ticket-cta-border-color="#ffda5f"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="3px"

        /* Sold out */
        data-sold-out-button-text-color="rgba(0,0,0,1)"
        data-sold-out-button-background-color="#ff44a3"    /* magenta */
        data-sold-out-button-border-color="#ff44a3"
        data-sold-out-button-clickable="true"

        /* RSVP CTA (secondary) */
        data-event-rsvp-position="hidden"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-text="RSVP"
        data-event-rsvp-cta-text-color="rgba(0,0,0,1)"
        data-event-rsvp-cta-bg-color="#00e7ff"            /* cyan */
        data-event-rsvp-cta-border-color="#00e7ff"
        data-event-rsvp-cta-border-width="0px"
        data-event-rsvp-cta-border-radius="3px"

        /* Follow section */
        data-follow-section-position="top"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on upcoming shows here"
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-text-color="rgba(0,0,0,1)"
        data-follow-section-cta-bg-color="#ff44a3"        /* magenta */
        data-follow-section-cta-border-color="#ff44a3"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="3px"

        /* Play My City */
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="center"
        data-play-my-city-header-text=""
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-text-color="rgba(0,0,0,1)"
        data-play-my-city-cta-bg-color="#00e7ff"          /* cyan */
        data-play-my-city-cta-border-color="#00e7ff"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="3px"

        data-language="en"
      />
    </div>
  );
}
