import Doc from "../docs/links.mdx";

export default function Link() {
  return (
    <>
      <p className="mt-5 text-2xl font-serif">Links</p>
      <hr />

      <div className="flex justify-center">
        <div className="prose prose-zinc mt-5 prose-headings:text-center prose-headings:underline prose-headings:text-pink-100 prose-a:text-pink-100 max-w-3xl text-pink-100">
          <Doc />
        </div>
      </div>
    </>
  );
}
