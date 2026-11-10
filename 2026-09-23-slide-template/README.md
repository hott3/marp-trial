# hott3 Marpスライドテンプレート（2026-09-23-slide-template）

hott3が技術カンファレンスや勉強会での登壇向けに設計・最適化したMarp用スライドテンプレートです。

登壇スライドの実践分析に基づき、**「部品カタログ（前半）」** と **「文脈・メッセージ別 実践レイアウトパターン集（後半）」** の二部構成に整理されています。
また、**全126件のデザインシステム・アクセシビリティ規範（20260922）への完全適合**を検証する自動監査スクリプト（`audit-theme.js`）を備えています。

---

## 1. 特徴

- **デフォルト：ダークモード（`class: invert`）**:
  - 技術登壇・薄暗いホール・プロジェクター投影・コード主体の発表に最適化された高視認性ダークテーマ。
  - 個別スライド単位で `<!-- _class: light -->` を付与することで、配布・印刷用の白背景ライトモードへ即時切替可能。
- **厳格なアクセシビリティ準拠（WCAG 2.2 / JIS X 8341-3）**:
  - テキストコントラスト比: **4.5:1以上**（ライト 16:1以上、ダーク 15:1以上、WCAG AA/AAA水準）
  - 非テキスト境界線コントラスト比: **3:1以上**（プロジェクター・暗所でも外周枠線を確実に保持）
  - 順序付きリスト: スクリーンリーダーや表示環境の依存を避けるため、`<ol>`要素を使わず `ul.list-number` とテキスト項番で記述。
  - 日本語の斜体（italic）を完全排除。リンクには視覚的な下線（underline）を常時付与。
- **8pxグリッド余白体系**:
  - margin, padding, gap はすべて 8, 16, 24, 32, 48, 64px の倍数ルールに準拠。
- **画像のレスポンシブ制限**:
  - 16:9スライド（1280x720）において、正方形や縦長画像が画面下部に突き抜けないよう `max-height: 460px; object-fit: contain;` を適用。
- **完全なUIコンポーネント体系**:
  - 見出し（飾り罫付き `.heading-line`、チップ付き、ショルダー `.shoulder`）
  - ノティフィケーションバナー（`.banner-info`, `.banner-success`, `.banner-warning`, `.banner-error`）
  - 注釈ブロック（`.notice-block`）
  - カードコンテナ（`.card`, 2カラム `.grid-2`・3カラム `.grid-3`）
  - チップラベル（`.chip-primary`, `.chip-success`, `.chip-warning`, `.chip-error`）
  - ボタン（`.btn`, `.btn-primary`, `.btn-outline`）
  - 項番リスト（`ul.list-number`）
  - ストライプデータテーブル（`table`）
  - 説明リスト（`dl.desc-list`）
  - 引用ブロック（`blockquote`）
  - ステップナビゲーション（`.steps > .step`）
  - 画像キャプション（`.caption`）
  - 目次ナビゲーション（`.toc`）
  - 検索ハイライト（`<mark>`）
  - コードブロック（`pre` / `code`）

---

## 2. 構成

### 前半: コンポーネントカタログ（P1〜P6）
全コンポーネントのデザイン・配色・サイズ感を一覧で確認できるカタログ。
- **P1**: 表紙
- **P2**: テンプレートの構成とワークフロー
- **P3**: 【カタログ 1/4】タイポグラフィ・見出し・装飾・ボタン（チップ付き見出し、飾り罫、ショルダー、mark、リンク下線、チップ、ボタン、ディバイダー）
- **P4**: 【カタログ 2/4】コンテナ・情報伝達パーツ（Info/Success/Warning/Errorバナー、注釈ブロック、引用ブロック）
- **P5**: 【カタログ 3/4】構造化パーツ（通常カード、強調枠カード、2/3カラムグリッド、ステップナビゲーション）
- **P6**: 【カタログ 4/4】データ・リスト・メディアパーツ（ストライプテーブル、説明リスト dl、項番リスト ul.list-number、pre/code、レスポンシブ画像、キャプション）

### 後半: 文脈・メッセージ別 実践レイアウトパターン集（P7〜P18）
登壇スライドの分析から導かれた、そのままコピペして使える10の定石構図。
- **P7**: パターン集 扉
- **P8**: 【パターン 01】表紙・扉（Title & Shoulder）
- **P9**: 【パターン 02】登壇者紹介（Speaker Profile / 2-Column Split）
- **P10**: 【パターン 03】1枚1メッセージ・問題提起（Single Message & Agitation / 引き算）
- **P11**: 【パターン 04】概念対比・2者比較（Comparison: A vs B / 2-Column Cards）
- **P12**: 【パターン 05】具体例・エビデンス提示（Case Study: Image + Insight / 2-Column Split）
- **P13**: 【パターン 06】思考プロセス・手順（Step-by-Step Flow）
- **P14**: 【パターン 07】多面的展開・3つの柱（3-Pillars Grid / 3-Column Cards）
- **P15**: 【パターン 08】技術実装・コード詳細（Code Walkthrough & Details）
- **P16**: 【パターン 09】多軸評価マトリクス（Evaluation Matrix Table）
- **P17**: 【パターン 10】まとめ・行動喚起（Summary & Call to Action）
- **P18**: 【ボーナス】ライトモード実例（Light Mode Demo: `<!-- _class: light -->`）

---

## 3. ガイドライン自動監査スクリプト（`audit-theme.js`）

デザインシステム・アクセシビリティ仕様（20260922）の全規約に適合しているかを、Node.js 標準機能のみで数学的・静的に検証するスクリプトです。

### 監査観点
1. **WCAG 2.2 / JIS X 8341-3 カラーコントラスト比**:
   - 相対輝度（Relative Luminance）計算に基づき、ダーク・ライト両モードの全文字色（4.5:1以上）、境界線（3:1以上）を完全監査。
2. **HTML/Markdown規約 & アクセシビリティ**:
   - `<ol>`要素の禁止と `ul.list-number` 準拠チェック
   - 日本語の斜体（italic）禁止チェック
   - リンク下線（text-decoration: underline）チェック
   - 画像縦はみ出し防止（max-height）チェック
   - 見出し階層（h1〜h6）のスキップチェック
3. **8pxグリッド余白監査**:
   - テーマ定義内の主要な余白値（margin, padding, gap）が8の倍数であるかを検証。

### 実行方法

```powershell
node scripts/audit-theme.js
```

**実行結果（完全適合例）:**
```text
====================================================================
  HOTT3 SLIDE THEME GUIDELINE AUDIT (20260922 COMPLIANCE)
====================================================================
--- 1. WCAG 2.2 / JIS X 8341-3 カラーコントラスト比監査 ---
[ダークモード (Default / Invert)]: 全18項目 ✅ [PASS]
[ライトモード (Light Mode)]: 全17項目 ✅ [PASS]
--- 2. アクセシビリティ・HTML/Markdown規約監査 ---: 全5項目 ✅ [PASS]
--- 3. 8pxグリッド余白監査 ---: 全1項目 ✅ [PASS]
====================================================================
  監査サマリー: 合計 41 項目 | 合格: 41 | 失敗: 0
====================================================================
判定: 🏆 全てのガイドライン規範に完全適合しています！
```

---

## 4. スライド作成ワークフロー

1. 本ディレクトリ `2026-09-23-slide-template` をコピーし、`YYYY-MM-DD-<slug>` にリネームします。
2. 後半の「実践レイアウト集」から、伝えたいメッセージ（対比、手順、コード解説など）に合う構図を選んで複製します。
3. 必要に応じて、前半の「部品カタログ」からパーツ（バナー、チップ、カード等）を差し替えて活用します。
4. 以下のコマンドでPDFやPNGを出力します。

### Marp CLI 実行コマンド（必須: `--no-stdin`）
Marp CLI は標準入力待機でハングするのを防ぐため、必ず `--no-stdin` を付与して実行してください。

```powershell
# PDF 出力
npx @marp-team/marp-cli slide.md --pdf --allow-local-files --no-stdin

# HTML 出力
npx @marp-team/marp-cli slide.md --html --allow-local-files --no-stdin

# PNG キャプチャ一括出力（スライド画像確認用）
npx @marp-team/marp-cli slide.md --images png --allow-local-files --no-stdin
```

---

## 5. 主要コンポーネント マークアップ例

### 飾り罫付き見出し
```html
<h2 class="heading-line">飾り罫付き大見出し</h2>
```

### チップ & ボタン
```html
<span class="chip chip-primary">Primary</span>
<span class="chip chip-success">Success</span>
<a class="btn btn-primary">Primary Button</a>
<a class="btn btn-outline">Outline Button</a>
```

### バナー & 注釈ブロック
```html
<div class="banner banner-info">
  <div class="banner-icon">ℹ️</div>
  <div class="banner-content">補足情報や重要ポイントを明示します。</div>
</div>

<div class="notice-block">
  <strong>注記:</strong> 前提条件や留意事項を枠線付きでコンパクトに配置します。
</div>
```

### 項番リスト（アクセシビリティ準拠）
```html
<ul class="list-number">
  <li>1. 課題の発生・観察</li>
  <li>2. 「なぜ」の言語化（分解）</li>
  <li>3. 解決仮説の試行</li>
</ul>
```

### 2カラム / 3カラムカードレイアウト
```html
<div class="grid-2">
  <div class="card">
    <div class="card-title">左カラム</div>
    <p>説明テキスト</p>
  </div>
  <div class="card" style="border-color: var(--theme-primary);">
    <div class="card-title">右カラム（強調）</div>
    <p>注目させたい選択肢</p>
  </div>
</div>
```
