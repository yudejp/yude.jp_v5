import Doc from "../docs/links.mdx";

import { Helmet } from "react-helmet";

export default function Link() {
  return (
    <>
      <Helmet>
        <title>🔗 リンク | yude.jp</title>
      </Helmet>
      <p className="mt-5 text-2xl font-serif">🔗 リンク</p>
      <hr />

      <div className="prose prose-zinc mt-5 prose-headings:text-2xl prose-headings:text-center prose-headings:text-pink-100 prose-a:text-pink-100 max-w-2xl text-pink-100 prose-a:truncate">
        <Doc />
      </div>
    </>
  );
}
