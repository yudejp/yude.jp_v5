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
    </>
  );
}
