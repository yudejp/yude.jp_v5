import Doc from "../docs/profile.mdx";

import { Helmet } from "react-helmet";

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>👤 プロフィール | yude.jp</title>
      </Helmet>
      <p className="mt-5 text-2xl font-serif">👤 プロフィール</p>
      <hr />

      <div className="flex justify-center mt-5 text-center">
        <div>
          <img src="/assets/images/avatar.jpg" className="rounded-full w-48" />
          <h2 className="text-6xl font-extrabold">yude</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="prose prose-zinc mt-5 prose-headings:text-center prose-headings:underline prose-headings:text-pink-100 prose-a:text-pink-100 max-w-3xl text-pink-100 prose-code:text-blue-100">
          <Doc />
        </div>
      </div>
    </>
  );
}
