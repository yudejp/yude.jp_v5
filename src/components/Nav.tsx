import Logo from "../components/Logo";

export default function Nav() {
  return (
    <div className="text-xl mx-9 mt-5 flex flex-row font-serif">
      <div className="basis-1/4">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="basis-3/4 text-right underline mt-4">
        <a href="/about">
          <span className="text-3xl">A</span>bout
        </a>
        <a className="ml-4" href="https://yudejp.hatenablog.jp">
          <span className="text-3xl">B</span>log
        </a>
        <a className="ml-4" href="/links">
          <span className="text-3xl">L</span>inks
        </a>
      </div>
    </div>
  );
}
