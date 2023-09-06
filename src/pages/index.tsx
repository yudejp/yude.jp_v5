import QuotesWithLogo from "../components/QuotesWithLogo";

import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>🏠 ホーム | yude.jp</title>
      </Helmet>
      <div className="flex justify-center">
        <QuotesWithLogo />
      </div>
      <div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/0oNsHVXi4UTVudTtvrCrKm?utm_source=generator&theme=0"
          width="100%"
          height="420"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
