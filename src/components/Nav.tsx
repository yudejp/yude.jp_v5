import Logo from "../components/Logo";

export default function Nav() {
  return (
    <div>
      <div className="mx-9 mt-5 font-serif flex">
        <div className="flex-none">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="flex-grow"></div>
        <div className="flex-none text-right mt-4 text-xl">
          <a href="/profile" className="block">
            <span className="text-3xl">👤</span>
            <span className="underline">プロフィール</span>
          </a>
          <a href="/links" className="block">
            <span className="text-3xl">🔗</span>
            <span className="underline">リンク</span>
          </a>
          <a href="https://yudejp.hatenablog.jp" className="block">
            <span className="text-3xl">📔</span>
            <span className="underline">ブログ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
