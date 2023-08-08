export default function Footer() {
  return (
    <>
    <div className="ml-5 mr-5 mt-[50px] mb-5">
      <p className="font-mono">
        &copy; 2021 - 2023 yude /{" "}
        <a className="underline" href="https://github.com/yudejp/yude.jp">
          ソースコード (GitHub)
        </a>
      </p>
      <div>
        <img className="inline" src="https://moe-counter.yude.jp/get/@yude?theme=asoul" alt="表示カウンター" />
        <img className="inline align-bottom" src="/assets/images/busy_banner.png" alt="時間ねぇ〜" />
      </div>
    </div>
    
    </>
  );
}
