+++
+++

<style>
    .text-marquee__container {
        overflow: hidden;
    }

    .text-marquee__text {
        transform: translateX(100%);
        animation: marquee 8s linear infinite;
    }

    .per-egg {
        animation: rotate-egg 2s linear infinite;
        display: inline-block;
        font-size: 300%;
    }
    
    @keyframes rotate-egg {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes marquee {
        0% {
            -moz-transform: translateX(100%);
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
        }
        100% {
            -moz-transform: translateX(-100%);
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
        }
    }
</style>

<div class="text-marquee__container">
    <div class="text-marquee__text">
        <p class="per-egg">🥚</p><p class="per-egg">🐣</p><p class="per-egg">🍳</p><p class="per-egg">🐣</p><p class="per-egg">🥚</p><p class="per-egg">🐣</p><p class="per-egg">🍳</p><p class="per-egg">🐣</p><p class="per-egg">🥚</p>
    </div>

</div>

こんにちは、yude のページへようこそ。ご案内します。

- [👤 yude のプロフィール](/profile)\
    yude のプロフィール、連絡先など
- [🔗 リンク](/links)\
    `yude.jp` / `soine.site` に関連する Web ページや提供中のサービスについて
- [💓 相互リンク](/mutual-links)\
    `yude.jp` と相互リンクを結んでいる Web サイトなどについて
- [📓 コンテンツ](/contents)\
    yude による、Web 上に存在するコンテンツ
- [💽 制作物](/works)\
    インターネットに放流したソフトウェアなどについての情報
- [💻 インフラストラクチャ](/infra)\
    `yude.jp` を構成する計算資源についての情報
- [🔖 `yude.jp` と記載のある端末等を見つけた方へ](/found)\
    それは yude の所有物であるかもしれません ...
- [🖼️ 美術館](/museum)\
    描いていただいたイラストなど
- [🎵 草薙寧々](https://pjsekai.sega.jp/character/unite04/nene/index.html)\
    かわいい

<img alt="Spotify Recently Played" src="https://spotify-recently-played-readme.vercel.app/api?user=yude1119&width=400" width="563" height="495" >\

---

この Web サイトは [Zola](https://www.getzola.org/) で生成されており、ソースコードは [GitHub リポジトリ](https://github.com/yudejp/yude.jp) から閲覧できます。

&copy; 2023 yude<br>
このウェブサイトのコンテンツは [Creative Commons BY-SA 3.0 DEED](https://creativecommons.org/licenses/by-sa/3.0/deed.ja)、ソースコードは [The MIT License](https://opensource.org/license/mit/) のもとでそれぞれ利用できます。しかし、[yude](https://www.yude.jp) <code><span><</span>i@yude.jp<span>></span></code> 以外によって作成されたデータについてはこの限りではありません。

<img alt="Moe Counter" src="https://moe-counter.yude.jp/get/@:yude" width="315" height="100" >
<img alt="happybusy" src="/images/busy_banner.webp" width="200" height="40" >
