---
marp: true
theme: uncover
class: invert
paginate: true
footer: "© 2026 hott3"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+Mono:wght@400;700&display=swap');

  :root {
    /* ==========================================================================
       テーマトークン定義（ダークモード標準・WCAG AA 4.5:1 / 境界線 3:1 達成）
       ========================================================================== */
    --theme-bg: #1A1D20;
    --theme-surface: #24282C;
    --theme-surface-alt: #2F343A;
    --theme-text: #F8F9FA;              /* コントラスト比 15.2:1 */
    --theme-text-sub: #ADB5BD;          /* コントラスト比 6.2:1 */
    --theme-border: #ADB5BD;            /* コントラスト比 6.2:1（3:1クリア） */
    --theme-border-subtle: #495057;

    --theme-primary: #58A6FF;           /* 黒背景比 7.5:1 */
    --theme-primary-light: #162B45;
    --theme-accent: #79C0FF;

    --theme-success: #3FB950;           /* 黒背景比 6.8:1 */
    --theme-success-bg: #0D2619;
    --theme-success-border: #3FB950;
    --theme-error: #F85149;             /* 黒背景比 6.0:1 */
    --theme-error-bg: #301314;
    --theme-error-border: #F85149;
    --theme-warning: #F0883E;           /* 黒背景比 6.2:1 */
    --theme-warning-bg: #311C08;
    --theme-warning-border: #F0883E;
    --theme-info: #58A6FF;
    --theme-info-bg: #11253E;
    --theme-info-border: #58A6FF;

    --theme-mark-bg: #00363A;
    --theme-mark-text: #80DEEA;
    --theme-mark-border: #26C6DA;

    --theme-link: #58A6FF;
    --theme-link-visited: #D2A8FF;

    --font-main: 'Noto Sans JP', sans-serif;
    --font-mono: 'Noto Sans Mono', monospace;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-full: 9999px;
  }

  /* スライド基盤（16:9プロポーション・8pxグリッド・左揃え徹底） */
  section {
    font-family: var(--font-main);
    background-color: var(--theme-bg);
    color: var(--theme-text);
    padding: 48px 64px;               /* 8pxグリッド: 48px/64px */
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;                  /* 左揃え徹底（リバー現象防止） */
    letter-spacing: 0.01em;
    font-size: 22px;
    line-height: 1.65;
  }

  /* ==========================================================================
     ダークモード定義（class: invert）
     ========================================================================== */
  section.invert {
    --theme-bg: #1A1D20;
    --theme-surface: #24282C;
    --theme-surface-alt: #2F343A;
    --theme-text: #F8F9FA;
    --theme-text-sub: #ADB5BD;
    --theme-border: #ADB5BD;
    --theme-border-subtle: #495057;

    --theme-primary: #58A6FF;
    --theme-primary-light: #162B45;
    --theme-accent: #79C0FF;

    --theme-success: #3FB950;
    --theme-success-bg: #0D2619;
    --theme-success-border: #3FB950;
    --theme-error: #F85149;
    --theme-error-bg: #301314;
    --theme-error-border: #F85149;
    --theme-warning: #F0883E;
    --theme-warning-bg: #311C08;
    --theme-warning-border: #F0883E;
    --theme-info: #58A6FF;
    --theme-info-bg: #11253E;
    --theme-info-border: #58A6FF;

    --theme-mark-bg: #00363A;
    --theme-mark-text: #80DEEA;
    --theme-mark-border: #26C6DA;

    --theme-link: #58A6FF;
    --theme-link-visited: #D2A8FF;

    background-color: var(--theme-bg);
    color: var(--theme-text);
  }

  /* ==========================================================================
     ライトモード明示指定用（<!-- _class: light --> で白背景に切り替え可能）
     ========================================================================== */
  section.light {
    --theme-bg: #FFFFFF;
    --theme-surface: #F8F9FA;
    --theme-surface-alt: #EDF2F7;
    --theme-text: #1B1B1B;
    --theme-text-sub: #495057;
    --theme-border: #6C757D;
    --theme-border-subtle: #CED4DA;

    --theme-primary: #004098;
    --theme-primary-light: #EBF3FB;
    --theme-accent: #005BAC;

    --theme-success: #00754A;
    --theme-success-bg: #E6F5EE;
    --theme-success-border: #00754A;
    --theme-error: #C62828;
    --theme-error-bg: #FDE8E8;
    --theme-error-border: #C62828;
    --theme-warning: #944000;
    --theme-warning-bg: #FFF4E5;
    --theme-warning-border: #C95100;
    --theme-info: #004098;
    --theme-info-bg: #EBF3FB;
    --theme-info-border: #004098;

    --theme-mark-bg: #E0F7FA;
    --theme-mark-text: #006064;
    --theme-mark-border: #00838F;

    --theme-link: #005BAC;
    --theme-link-visited: #7B1FA2;

    background-color: var(--theme-bg);
    color: var(--theme-text);
  }

  /* ==========================================================================
     タイポグラフィ（Noto Sans JP）
     ========================================================================== */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-main);
    font-weight: 700;
    text-align: left;
    margin: 0 0 24px 0;
    line-height: 1.35;
    color: var(--theme-text);
  }

  h1 {
    font-size: 40px;
    line-height: 1.3;
    color: var(--theme-text);
    margin-bottom: 24px;
  }

  /* チップ付き見出し（セクション標準見出し） */
  h2, .heading-chip {
    font-size: 28px;
    line-height: 1.4;
    padding-left: 16px;
    border-left: 6px solid var(--theme-primary);
    margin-bottom: 24px;
  }

  /* 飾り罫付き見出し */
  .heading-line {
    font-size: 28px;
    line-height: 1.4;
    padding-bottom: 8px;
    border-bottom: 3px solid var(--theme-primary);
    margin-bottom: 24px;
    width: 100%;
  }

  h3 {
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 16px;
  }

  /* ショルダー ＆ サブタイトル */
  .shoulder {
    font-size: 16px;
    font-weight: 700;
    color: var(--theme-primary);
    letter-spacing: 0.05em;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 24px;
    color: var(--theme-text-sub);
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  p {
    font-size: 22px;
    line-height: 1.65;
    text-align: left;
    margin: 0 0 16px 0;
  }

  ul, ol {
    margin: 0 0 16px 0;
    padding-left: 24px;
  }
  li {
    font-size: 22px;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  li > ul, li > ol {
    margin-top: 8px;
    margin-bottom: 0;
  }

  /* 検索ハイライト仕様（mark） */
  mark {
    background-color: var(--theme-mark-bg);
    color: var(--theme-mark-text);
    border: 1px solid var(--theme-mark-border);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 700;
  }

  /* リンクスタイル */
  a {
    color: var(--theme-link);
    text-decoration: underline;
    font-weight: 700;
  }
  a:visited {
    color: var(--theme-link-visited);
  }

  /* ==========================================================================
     UIコンポーネント
     ========================================================================== */

  /* ノティフィケーションバナー */
  .banner {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 24px;
    border-radius: var(--radius-sm);
    border: 2px solid;
    margin: 16px 0 24px 0;
    font-size: 20px;
    line-height: 1.55;
    width: 100%;
    box-sizing: border-box;
  }
  .banner-icon {
    font-size: 24px;
    line-height: 1;
    flex-shrink: 0;
  }
  .banner-content {
    flex: 1;
  }
  .banner-title {
    font-weight: 700;
    margin-bottom: 4px;
  }
  .banner-info {
    background: var(--theme-info-bg);
    border-color: var(--theme-info-border);
    color: var(--theme-text);
  }
  .banner-success {
    background: var(--theme-success-bg);
    border-color: var(--theme-success-border);
    color: var(--theme-text);
  }
  .banner-warning {
    background: var(--theme-warning-bg);
    border-color: var(--theme-warning-border);
    color: var(--theme-text);
  }
  .banner-error {
    background: var(--theme-error-bg);
    border-color: var(--theme-error-border);
    color: var(--theme-text);
  }

  /* カード ＆ グリッドレイアウト（外周3:1ボーダー保証） */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: 100%;
    margin: 16px 0;
    box-sizing: border-box;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    width: 100%;
    margin: 16px 0;
    box-sizing: border-box;
  }
  .card {
    background: var(--theme-surface);
    border: 2px solid var(--theme-border);
    border-radius: var(--radius-sm);
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .card-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--theme-text);
  }

  /* チップラベル */
  .chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 12px;
    border-radius: var(--radius-full);
    font-size: 15px;
    font-weight: 700;
    border: 1.5px solid var(--theme-border);
    background: var(--theme-surface);
    color: var(--theme-text);
    margin-right: 8px;
    vertical-align: middle;
  }
  .chip-primary {
    border-color: var(--theme-primary);
    background: var(--theme-primary-light);
    color: var(--theme-primary);
  }
  .chip-success {
    border-color: var(--theme-success);
    background: var(--theme-success-bg);
    color: var(--theme-success);
  }
  .chip-warning {
    border-color: var(--theme-warning);
    background: var(--theme-warning-bg);
    color: var(--theme-warning);
  }
  .chip-error {
    border-color: var(--theme-error);
    background: var(--theme-error-bg);
    color: var(--theme-error);
  }

  /* ボタン（ターゲットサイズ44px・文字4.5:1 / 枠線3:1保証） */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 8px 24px;
    border-radius: var(--radius-sm);
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none !important;
    box-sizing: border-box;
  }
  .btn-primary {
    background-color: var(--theme-primary);
    color: #FFFFFF !important;
    border: 2px solid var(--theme-primary);
  }
  .btn-outline {
    background-color: transparent;
    color: var(--theme-text) !important;
    border: 2px solid var(--theme-border);
  }

  /* 項番テキスト用リスト（ol要素を使わずテキスト項番を保持） */
  ul.list-number {
    list-style: none;
    padding-left: 0;
    margin: 16px 0;
  }
  ul.list-number li {
    display: flex;
    gap: 12px;
    font-size: 22px;
    line-height: 1.6;
    margin-bottom: 8px;
  }
  .list-num {
    font-weight: 700;
    color: var(--theme-primary);
    min-width: 28px;
    flex-shrink: 0;
  }

  /* 注釈ブロック（補足・重要注意事項コンテナ） */
  .notice-block {
    background-color: var(--theme-surface);
    border: 2px solid var(--theme-border);
    border-left: 6px solid var(--theme-primary);
    border-radius: var(--radius-sm);
    padding: 16px 24px;
    margin: 16px 0 24px 0;
    box-sizing: border-box;
  }
  .notice-block-title {
    font-weight: 700;
    font-size: 18px;
    color: var(--theme-text);
    margin-bottom: 4px;
  }

  /* ストライプデータテーブル（上寄せ・コントラスト3:1ボーダー） */
  table {
    font-size: 18px;
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0 24px 0;
    border: 2px solid var(--theme-border);
  }
  th {
    background-color: var(--theme-surface-alt);
    color: var(--theme-text);
    font-weight: 700;
    border: 1px solid var(--theme-border);
    padding: 12px 16px;
    text-align: left;
    vertical-align: top;
  }
  td {
    border: 1px solid var(--theme-border);
    padding: 12px 16px;
    vertical-align: top;
    text-align: left;
  }
  tr:nth-child(even) td {
    background-color: var(--theme-surface);
  }

  /* 説明リスト（dl, dt, dd） */
  dl.desc-list {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px 24px;
    margin: 16px 0 24px 0;
    width: 100%;
    font-size: 20px;
    box-sizing: border-box;
  }
  dl.desc-list dt {
    font-weight: 700;
    color: var(--theme-primary);
    padding-top: 2px;
  }
  dl.desc-list dd {
    margin: 0;
    color: var(--theme-text);
    line-height: 1.6;
  }

  /* 引用ブロック（左太ボーダー＋背景コンテナ） */
  blockquote {
    border-left: 6px solid var(--theme-primary);
    background-color: var(--theme-surface);
    margin: 16px 0 24px 0;
    padding: 16px 24px;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    box-sizing: border-box;
  }
  blockquote p {
    font-size: 22px;
    line-height: 1.65;
    color: var(--theme-text);
    margin: 0;
  }

  /* ステップナビゲーション */
  .steps {
    display: flex;
    gap: 16px;
    width: 100%;
    margin: 16px 0 24px 0;
    box-sizing: border-box;
  }
  .step {
    flex: 1;
    padding: 16px;
    background: var(--theme-surface);
    border: 2px solid var(--theme-border);
    border-radius: var(--radius-sm);
    box-sizing: border-box;
  }
  .step.active {
    border-color: var(--theme-primary);
    background: var(--theme-primary-light);
  }
  .step.completed {
    border-color: var(--theme-success);
    background: var(--theme-success-bg);
  }
  .step-num {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: var(--theme-primary);
    margin-bottom: 4px;
  }
  .step-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.35;
    color: var(--theme-text);
  }

  /* 目次コンポーネント（TOC） */
  .toc {
    background: var(--theme-surface);
    border: 2px solid var(--theme-border);
    border-radius: var(--radius-sm);
    padding: 24px;
    margin: 16px 0;
    box-sizing: border-box;
  }
  .toc-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--theme-border);
    color: var(--theme-text);
  }

  /* ディバイダー（16px以上の余白確保） */
  hr {
    border: none;
    border-top: 2px solid var(--theme-border);
    margin: 24px 0;
    width: 100%;
  }

  /* 画像（レスポンシブ・縦はみ出し防止） */
  img {
    max-width: 100%;
    max-height: 460px;
    object-fit: contain;
  }

  /* 画像キャプション（近接余白8px） */
  .caption {
    font-size: 15px;
    color: var(--theme-text-sub);
    margin-top: 8px;
    line-height: 1.4;
  }

  /* コードブロック（等幅フォント・枠線・行間1.5） */
  pre {
    background-color: var(--theme-surface);
    border: 2px solid var(--theme-border);
    border-radius: var(--radius-sm);
    padding: 16px 24px;
    margin: 16px 0;
    box-sizing: border-box;
  }
  code {
    font-family: var(--font-mono);
    font-size: 18px;
    line-height: 1.5;
  }

  /* ヘッダー・フッター・ページ番号・注記 */
  header {
    font-size: 14px;
    color: var(--theme-text-sub);
    letter-spacing: 0.05em;
    top: 24px;
    left: 64px;
  }
  footer {
    font-size: 14px;
    color: var(--theme-text-sub);
    bottom: 24px;
    left: 64px;
  }
  section::after {
    font-size: 14px;
    color: var(--theme-text-sub);
    background: none !important;
    bottom: 24px;
    right: 64px;
  }
  small {
    font-size: 16px;
    color: var(--theme-text-sub);
  }
---

<div class="shoulder">HOTT3 MARP SLIDE THEME</div>

# 技術登壇用スライドひな型<br>プレゼンテーションテンプレート

<div class="subtitle">〜コンポーネントカタログ ＆ 実践レイアウトパターン集〜</div>

2026.09.23
🌻 堀田 誠 / hott3

---

<!-- _header: "テンプレートの構成" -->

## 本テンプレートの使い方と構成

本テンプレートは **「部品カタログ」** と **「実践レイアウト集」** の二部構成です。

<div class="steps">
  <div class="step active">
    <span class="step-num">PART 01</span>
    <div class="step-title">コンポーネントカタログ（P3-P6）</div>
  </div>
  <div class="step">
    <span class="step-num">PART 02</span>
    <div class="step-title">実践レイアウト集（P7-P18）</div>
  </div>
</div>

<div class="banner banner-info">
  <div class="banner-icon">💡</div>
  <div class="banner-content">
    <div class="banner-title">制作のワークフロー</div>
    スライドを作るときは、後半の「実践レイアウト集」から伝えたいメッセージに合う構図を選んで複製し、必要に応じて前半のコンポーネントを差し替えて活用してください。
  </div>
</div>

---

<!-- _header: "PART 01: コンポーネントカタログ" -->

## 【カタログ 1/4】タイポグラフィ・見出し・装飾・ボタン

<div class="heading-line">飾り罫付き見出し（.heading-line）</div>

<div class="shoulder">SHOULDER TEXT (.shoulder)</div>
<h3>中見出し（h3）とインライン装飾</h3>

<p>
  重要なキーワードは <mark>markタグ（シアン系・コントラスト保証）</mark> でハイライトします。<br>
  外部参照は <a href="https://github.com/hott3">リポジトリリンク（aタグ・下線付き）</a> を使用します。
</p>

<div style="display: flex; gap: 16px; align-items: center; margin: 16px 0; flex-wrap: wrap;">
  <span class="chip">Default</span>
  <span class="chip chip-primary">Primary</span>
  <span class="chip chip-success">Success</span>
  <span class="chip chip-warning">Warning</span>
  <span class="chip chip-error">Error</span>
  <a class="btn btn-primary" href="#">Primary Button</a>
  <a class="btn btn-outline" href="#">Outline Button</a>
</div>

<hr>
<small>※ 境界線3:1、文字4.5:1、ボタンターゲットサイズ44px以上を厳格にクリア。</small>

---

<!-- _header: "PART 01: コンポーネントカタログ" -->

## 【カタログ 2/4】コンテナ・情報伝達パーツ

<div class="grid-2">
  <div>
    <div class="banner banner-info" style="margin: 0 0 16px 0;">
      <div class="banner-icon">ℹ️</div>
      <div class="banner-content">
        <div class="banner-title">情報バナー（.banner-info）</div>
        補足情報や重要ポイント、気づきの共有に使用。
      </div>
    </div>
    <div class="banner banner-success" style="margin: 0 0 16px 0;">
      <div class="banner-icon">✅</div>
      <div class="banner-content">
        <div class="banner-title">成功バナー（.banner-success）</div>
        検証結果の合格判定、改善成果の強調に使用。
      </div>
    </div>
    <div class="banner banner-warning" style="margin: 0;">
      <div class="banner-icon">⚠️</div>
      <div class="banner-content">
        <div class="banner-title">注意バナー（.banner-warning）</div>
        前提条件や問いかけ、議論の焦点を提示。
      </div>
    </div>
  </div>

  <div>
    <div class="notice-block" style="margin: 0 0 16px 0;">
      <div class="notice-block-title">注釈ブロック（.notice-block）</div>
      バナーよりも控えめな強調で、前提事項や補足を構造化します。
    </div>
    <blockquote>
      <p>標準引用ブロック（blockquote）：左太ボーダーとコンテナ背景により、外部文献や発言を明瞭に区別します。</p>
    </blockquote>
  </div>
</div>

---

<!-- _header: "PART 01: コンポーネントカタログ" -->

## 【カタログ 3/4】構造化パーツ（カード・グリッド・ステップ）

<div class="steps">
  <div class="step completed">
    <span class="step-num">STEP 01</span>
    <div class="step-title">完了状態（.completed）</div>
  </div>
  <div class="step active">
    <span class="step-num">STEP 02</span>
    <div class="step-title">現在地（.active）</div>
  </div>
  <div class="step">
    <span class="step-num">STEP 03</span>
    <div class="step-title">未着手（通常）</div>
  </div>
</div>

<div class="grid-3">
  <div class="card">
    <div class="card-title">カード 1（.card）</div>
    外周ボーダー3:1を保証。影だけに頼らない堅牢な境界線。
  </div>
  <div class="card" style="border-color: var(--theme-primary);">
    <div class="card-title">カード 2（強調枠）</div>
    Primaryボーダーにより、注目させたい選択肢を目立たせます。
  </div>
  <div class="card">
    <div class="card-title">カード 3</div>
    2カラム（grid-2）や3カラム（grid-3）で均等配置。
  </div>
</div>

---

<!-- _header: "PART 01: コンポーネントカタログ" -->

## 【カタログ 4/4】データ・リスト・メディアパーツ

<div class="grid-2">
  <div>
    <dl class="desc-list" style="margin: 0 0 16px 0;">
      <dt>説明リスト</dt>
      <dd>用語と解説をスマートに対比（dl.desc-list）</dd>
    </dl>
    <ul class="list-number" style="margin: 0 0 16px 0;">
      <li><span class="list-num">01</span> <span><strong>項番リスト（ul.list-number）</strong></span></li>
      <li><span class="list-num">02</span> <span>ol要素を使わずテキスト項番でアクセシビリティ確保</span></li>
    </ul>
    <pre style="margin-top: 8px;"><code>// pre / code ブロック（等幅・行間1.5）
final state = ref.watch(provider);</code></pre>
  </div>

  <div>
    <table>
      <thead>
        <tr>
          <th>手法</th>
          <th>コントラスト</th>
          <th>判定</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>改善前</td>
          <td>4.0:1（未達）</td>
          <td><span class="chip chip-error">NG</span></td>
        </tr>
        <tr>
          <td>改善後</td>
          <td>4.5:1以上達成</td>
          <td><span class="chip chip-success">適合</span></td>
        </tr>
      </tbody>
    </table>
    <div class="caption">※ 画像（img）は max-height: 460px により縦はみ出しを防止。キャプション（.caption）で解説を付与。</div>
  </div>
</div>

---

<!-- 
====================================================================
 PART 02: 文脈・メッセージ別 実践レイアウトパターン集
====================================================================
-->

<div class="shoulder">PART 02: PRODUCTION LAYOUT PATTERNS</div>

# 実践レイアウトパターン集

<div class="subtitle">〜過去登壇スライドの分析から導かれた10の定石構図〜</div>

- 発表の目的やメッセージの性質に応じて、最適な構図を選択してください
- 各スライドはそのままコピー＆ペーストして再利用できます

---

<!-- _header: "パターン 01: 表紙・扉" -->

<div class="shoulder">技術カンファレンス登壇 2026</div>

# 【Pattern 01: 表紙・扉】<br>メインタイトルをここに記述

<div class="subtitle">〜聴衆に持ち帰ってほしいコアメッセージをサブタイトルに〜</div>

2026.09.23
🌻 登壇者名 / @username
<span class="chip chip-primary">Flutter</span>
<span class="chip chip-success">Design System</span>

<!--
【構図のポイント】
- ショルダーでイベント名やシリーズを明示
- メインタイトル（h1）は40pxで強い視認性
- サブタイトルで「問い」や「解決策」を予告
-->

---

<!-- _header: "パターン 02: 登壇者紹介" -->

## 自己紹介（Speaker Profile）

<div class="grid-2" style="align-items: center;">
  <div class="card">
    <div class="card-title">堀田 誠 / hott3</div>
    <p>
      <span class="chip chip-primary">Mobile</span>
      <span class="chip chip-success">Design</span>
      <span class="chip">Flutter</span>
    </p>
    <ul>
      <li>モバイルエンジニア / ドコドア株式会社</li>
      <li>デザインシステム、宣言的UI、AI協働開発</li>
      <li>関心：人が作るもの、ネコ🐈️、スノーボード🏂</li>
    </ul>
  </div>

  <div class="card" style="border-color: var(--theme-primary);">
    <div class="card-title">登壇・発信テーマ</div>
    <ul>
      <li><strong>Figma × Flutter</strong>：デザインと実装の境界解消</li>
      <li><strong>スライド標準化</strong>：アクセシブルな発表資料デザイン</li>
      <li><strong>Cognitive Models</strong>：人間の認知モデルとAI協働</li>
    </ul>
  </div>
</div>

<!--
【構図のポイント】
- 2カラム分割で「個人の属性」と「活動・登壇テーマ」を並列提示
- 画像を配置する場合は右カラムを <img src="..." /> に置き換え可能
-->

---

<!-- _header: "パターン 03: 1枚1メッセージ" -->

<div class="shoulder">Core Message</div>

# 「Figmaでデザインデータを作って<br>満足するのをやめましょう」🔥

<div class="banner banner-warning" style="margin-top: 32px;">
  <div class="banner-icon">⚠️</div>
  <div class="banner-content">
    <div class="banner-title">デザインデータ作成は目的ではない</div>
    目的は、ユーザーにとって真に価値あるアプリケーションを素早く届けることです。
  </div>
</div>

<!--
【構図のポイント】
- 強いアジテーションや問題提起を中央に単体配置（引き算のスライド）
- 警告バナーで「なぜダメなのか」の核心を即座に伝える
-->

---

<!-- _header: "パターン 04: 概念対比・2者比較" -->

## 宣言的UI vs 命令的UI（Comparison: A vs B）

<div class="grid-2">
  <div class="card">
    <div class="card-title">命令的UI（How）</div>
    <p>「どう動かすか」を都度指示する</p>
    <ul>
      <li>画面の状態が変わるたび手動でDOM/Widgetを操作</li>
      <li>状態遷移の管理が複雑化しやすい</li>
      <li><span class="chip chip-warning">タクシー: 「次の角を右に...」</span></li>
    </ul>
  </div>

  <div class="card" style="border-color: var(--theme-primary);">
    <div class="card-title">宣言的UI（What）✅</div>
    <p>状態に応じた「あるべき姿」を宣言する</p>
    <ul>
      <li>UIは状態の関数 <code>UI = f(state)</code></li>
      <li>再描画はフレームワークが自動管理</li>
      <li><span class="chip chip-success">タクシー: 「東京駅へ行って」</span></li>
    </ul>
  </div>
</div>

<!--
【構図のポイント】
- 2カラムカードで対照的な概念を左右に配置
- 推奨側カードのボーダーをPrimary色（青）にして視線を誘導
-->

---

<!-- _header: "パターン 05: 具体例・エビデンス提示" -->

## 具体例・エビデンス提示（Image + Insight）

<div class="grid-2" style="align-items: center;">
  <div style="text-align: center;">
    <div class="card" style="padding: 32px; height: 360px; justify-content: center; align-items: center; border-style: dashed;">
      <div style="font-size: 48px; margin-bottom: 12px;">📊 / 🖼️</div>
      <strong>キャプチャ画像・図解エリア</strong><br>
      <small>（ここに img タグを配置）</small>
    </div>
  </div>

  <div>
    <div class="card">
      <div class="card-title">上達・検証のサイクル</div>
      <ul class="list-number" style="margin-bottom: 0;">
        <li>1. 課題の発生・観察</li>
        <li>2. <mark>「なぜ」の言語化（分解）</mark></li>
        <li>3. 解決仮説の試行</li>
        <li>4. 規則・パターンの抽出</li>
      </ul>
    </div>
    <div class="banner banner-info" style="margin-top: 16px;">
      <div class="banner-icon">💡</div>
      <div class="banner-content">
        画像で事実を示し、カードで考察・抽象化を言語化する
      </div>
    </div>
  </div>
</div>

<!--
【構図のポイント】
- 16:9横長画面で、左に画像・右に解説カードを配する黄金比レイアウト
- 画像の縦はみ出しを防ぎ、テキストとのバランスを保つ
-->

---

<!-- _header: "パターン 06: 思考プロセス・手順" -->

## チームを強くするプロセス（Step-by-Step Flow）

<div class="steps">
  <div class="step completed">
    <span class="step-num">STEP 01</span>
    <div class="step-title">観察・試行</div>
  </div>
  <div class="step active">
    <span class="step-num">STEP 02</span>
    <div class="step-title">規則化（共有）</div>
  </div>
  <div class="step">
    <span class="step-num">STEP 03</span>
    <div class="step-title">身体化（反復）</div>
  </div>
</div>

<ul class="list-number">
  <li>1. <strong>観察する・言語化する</strong>：属人的な気づきを言葉にする</li>
  <li>2. <strong>パターン化して規則（Rule）にする</strong>：<mark>チームの共通言語として手渡す</mark></li>
  <li>3. <strong>個人の反復で身体化（Skill）する</strong>：無意識に実行できるレベルまで習熟</li>
</ul>

<div class="banner banner-info">
  <div class="banner-icon">🎯</div>
  <div class="banner-content">
    技能そのものは移植できなくても、<strong>規則ならチームへ手渡すことができる</strong>。
  </div>
</div>

---

<!-- _header: "パターン 07: 多面的展開・3つの柱" -->

## いろんな領域に応用できる（3-Pillars Grid）

<div class="grid-3">
  <div class="card">
    <div class="card-title">🙆‍♂️ 仕事（Work）</div>
    <p><strong>業務効率化・設計・コード</strong></p>
    <ul>
      <li>設計ルールの共通化</li>
      <li>コードレビューの標準化</li>
      <li>チームへのナレッジ展開</li>
    </ul>
  </div>

  <div class="card" style="border-color: var(--theme-primary);">
    <div class="card-title">🙆‍♂️ 趣味（Hobby）</div>
    <p><strong>スノーボード・スポーツ</strong></p>
    <ul>
      <li>転倒原因のフォーム言語化</li>
      <li>成功条件のパターン抽出</li>
      <li>身体化するまでの反復</li>
    </ul>
  </div>

  <div class="card">
    <div class="card-title">🙆‍♂️ 生活（Life）</div>
    <p><strong>家事・習慣・対話</strong></p>
    <ul>
      <li>ルーティンの仕組み化</li>
      <li>家族間ルールの合意形成</li>
      <li>生活の認知的負荷低減</li>
    </ul>
  </div>
</div>

---

<!-- _header: "パターン 08: 技術実装・コード詳細" -->

## Flutter状態管理の実装例（Code Walkthrough）

```dart
class MyWidgetState extends State<MyWidget> {
  bool _isActive = false; // 1. 単一の信頼できる情報源（State）

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(backgroundColor: _isActive ? Colors.blue : Colors.grey),
      onPressed: () => setState(() => _isActive = !_isActive), // 2. 状態の更新通知
      child: Text(_isActive ? 'ACTIVE' : 'INACTIVE'),
    );
  }
}
```

<dl class="desc-list">
  <dt>setState()</dt>
  <dd>状態の変更をフレームワークに通知し、差分のみを効率的に再描画するトリガー。</dd>
  <dt>Declarative</dt>
  <dd>ボタンの見た目（色・文言）を命令するのではなく、状態とUIの対応関係を宣言する。</dd>
</dl>

---

<!-- _header: "パターン 09: 多軸評価マトリクス" -->

## 構造レベルとAI出力の検証結果（Evaluation Matrix）

| 構造レベル | コンポーネント機能 | オートレイアウト | Widget選定結果 | 再現度判定 |
| :---: | :---: | :---: | :---: | :---: |
| **高** | 維持 | 維持 | `SearchBar` 選定 ✅ | <span class="chip chip-success">完璧</span> |
| **中** | ❌ 解除 | 維持 | `SearchBar` 選定 ✅ | <span class="chip chip-success">良好</span> |
| **低** | ❌ 解除 | ❌ 削除 | `SearchBar` 選定 ✅ | <span class="chip chip-success">良好</span> |
| **0** | ❌ 解除 | ❌ 削除 | `SearchBar` 選定 ✅ | <span class="chip chip-primary">許容</span> |

<div class="banner banner-success" style="margin-top: 20px;">
  <div class="banner-icon">💡</div>
  <div class="banner-content">
    <strong>発見ファクト</strong>：AIは視覚情報（マルチモーダル）からUIを推論できるため、レイヤー構造が崩れていても適切なWidgetを選定可能。
  </div>
</div>

---

<!-- _header: "パターン 10: まとめ・行動喚起" -->

## まとめとネクストアクション（Call to Action）

<div class="steps">
  <div class="step completed">
    <span class="step-num">STEP 01</span>
    <div class="step-title">課題の特定</div>
  </div>
  <div class="step completed">
    <span class="step-num">STEP 02</span>
    <div class="step-title">規則ベース化</div>
  </div>
  <div class="step completed">
    <span class="step-num">STEP 03</span>
    <div class="step-title">チーム共有・AI協働</div>
  </div>
</div>

- **結論 1**：属人的な感覚を「規則（Rule）」へ昇華させることが、強いチームの基盤になる
- **結論 2**：人に伝わる規則は、そのままAI（Agent Skills）にもレバレッジできる
- **結論 3**：デザイン原則を取り入れ、迷いなく高品質なスライドを届けよう

<div class="banner banner-success">
  <div class="banner-icon">🚀</div>
  <div class="banner-content">
    <strong>Action: 次の登壇スライドから、このテンプレートを活用してみましょう！</strong>
  </div>
</div>

---

<!-- _class: light -->
<!-- _header: "ボーナス: ライトモード実例" -->

## ライトモードでの表示実例（Light Mode Demo）

<!-- _class: light --> を指定することで、個別スライドのみ白背景へ切り替え可能です。

<div class="grid-2">
  <div class="card">
    <div class="card-title">ライトモード仕様</div>
    <ul>
      <li>背景色: <code>#FFFFFF</code> / 文字色: <code>#1B1B1B</code></li>
      <li>文字コントラスト比: <strong>16.1:1</strong>（WCAG AAA）</li>
      <li>外周ボーダー: <strong>3.6:1</strong>（3:1基準クリア）</li>
    </ul>
    <p>
      <span class="chip chip-primary">Primary</span>
      <span class="chip chip-success">Success</span>
    </p>
  </div>

  <div class="card" style="border-color: var(--theme-primary);">
    <div class="card-title">使い分けの指針</div>
    <ul>
      <li><strong>ダーク（標準）</strong>：技術登壇・薄暗いホール・コード主体の発表</li>
      <li><strong>ライト</strong>：配布資料・印刷用途・自然光の入る明るい会議室</li>
    </ul>
    <div class="banner banner-info" style="margin: 8px 0 0 0;">
      <div class="banner-icon">☀️</div>
      <div class="banner-content">
        どちらのモードでも視認性とアクセシビリティを100%保証します。
      </div>
    </div>
  </div>
</div>
