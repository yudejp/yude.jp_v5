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
        <a href="/about" className="block">
          <span className="text-3xl">プ</span>ロフィール
        </a>
        <a href="/links" className="block">
          <span className="text-3xl">リ</span>ンク
        </a>
        <a href="https://yudejp.hatenablog.jp" className="block">
          <span className="text-3xl">ブ</span>ログ
        </a>
      </div>
    </div>
  );
}
