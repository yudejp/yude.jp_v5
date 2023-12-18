+++
title = "💻 インフラストラクチャ"
description = "yude.jp を構成する計算資源について"

[extra]
ogp_image = "https://og-image.eyemono.moe/インフラストラクチャ.png?pattern=none&md=1&fontSize=75px&textColor=%23404040&textStrongColor=%238340BB&overlay=https%3A%2F%2Fimages.microcms-assets.io%252Fassets%252Ff1f77e2dbfee45faa90eb70c5b4445f3%252Feaeec4b7b07641d183ca90c4b070e5fe%252FOGP%2525E7%252594%2525BB%2525E5%252583%25258F%2528W1200xH630%2529.png"

extra.in_header = false
+++

# 利用中の技術

すべてのサービスに共通して関係している技術は、主に次の通りです。

- ソフトウェア
    - [Cloudflare](https://www.cloudflare.com/): CDN, DNS, トンネリング (Cloudflare Tunnel), ゼロトラスト
    - [Proxmox VE](https://pve.proxmox.com/wiki/Main_Page): ハイパーバイザー
    - [Ubuntu Server (LTS)](https://jp.ubuntu.com/): オペレーティング・システム
    - [Tailscale](https://tailscale.com): インフラ内部の通信, 管理用アクセス
    - [Uptime (formerly Better Uptime)](https://betterstack.com/uptime): 公開用障害情報ページ
    - [Mackerel](https://mackerel.io/), [Datadog](https://www.datadoghq.com/ja/): サーバー監視
    - [Docker Compose](https://docs.docker.jp/compose/toc.html): 仮想化基盤, Infrastructure as a Code
    - [GitHub](https://github.com/yudejp): IaaC 用リポジトリのホスティング, CI/CD
    - [compose-cd](https://github.com/sksat/compose-cd): Docker Compose の CD
- ハードウェア
    - [YAMAHA RTX](https://network.yamaha.com/products/routers): ルーター
    - [NEC UNIVERGE IX](https://jpn.nec.com/univerge/ix/index.html): ルーター
    - [Schneider Electric APC UPS](https://www.apc.com/jp/ja/product-category/88972-%E7%84%A1%E5%81%9C%E9%9B%BB%E9%9B%BB%E6%BA%90%E8%A3%85%E7%BD%AEups/): 無停電電源装置

# 関連リンク

- [yude.jp Load averages 1-5-15 ダッシュボード](https://p.datadoghq.com/sb/itx9gobm2tj17qjx-25c40e62040b0958ab3aad7ce773803b?refresh_mode=sliding&theme=light&from_ts=1702880892848&to_ts=1702884492848&live=true)
