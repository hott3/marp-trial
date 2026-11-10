/**
 * audit-theme.js
 * 
 * 20260922 ガイドライン（デジタル庁デザインシステム準拠規範）に基づく
 * スライドテーマ自動監査スクリプト
 * 
 * 監査観点:
 * 1. WCAG 2.2 / JIS X 8341-3 コントラスト比監査（テキスト 4.5:1以上、非テキスト境界線 3.0:1以上）
 * 2. アクセシビリティ・HTML/Markdown規約監査（<ol>禁止、斜体禁止、見出し階層、リンク下線等）
 * 3. 8pxグリッドスペーシング監査（レイアウト余白の一貫性）
 */

const fs = require('fs');
const path = require('path');

// 対象スライドファイルパス
const targetFile = path.resolve(__dirname, '../slide.md');
if (!fs.existsSync(targetFile)) {
  console.error(`Error: Target file not found at ${targetFile}`);
  process.exit(1);
}

const content = fs.readFileSync(targetFile, 'utf8');

// ============================================================================
// 1. カラーコントラスト比計算モジュール (WCAG 2.2)
// ============================================================================
function hexToRgb(hex) {
  hex = hex.replace('#', '').trim();
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16)
  ];
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function calculateContrast(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const bright = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (bright + 0.05) / (dark + 0.05);
}

// CSS変数パース
function extractTokens(cssBlock) {
  const tokens = {};
  const regex = /--([a-z0-9-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(cssBlock)) !== null) {
    tokens[match[1]] = match[2].trim();
  }
  return tokens;
}

// :root / section.invert と section.light のブロックを抽出
const rootBlockMatch = content.match(/:root\s*\{([\s\S]*?)\}/);
const lightBlockMatch = content.match(/section\.light\s*\{([\s\S]*?)\}/);

const darkTokens = rootBlockMatch ? extractTokens(rootBlockMatch[1]) : {};
const lightTokens = lightBlockMatch ? extractTokens(lightBlockMatch[1]) : {};

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function checkContrast(modeName, role, fgHex, bgHex, minRatio, type = 'text') {
  totalChecks++;
  if (!fgHex || !bgHex || !fgHex.startsWith('#') || !bgHex.startsWith('#')) {
    failures.push(`[${modeName}] ${role}: 色コードの取得に失敗 (fg: ${fgHex}, bg: ${bgHex})`);
    failedChecks++;
    return;
  }
  const ratio = calculateContrast(fgHex, bgHex);
  const pass = ratio >= minRatio;
  if (pass) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${modeName} ${role}: ${ratio.toFixed(2)}:1 (基準: >= ${minRatio}:1)`);
  } else {
    failedChecks++;
    const msg = `❌ [FAIL] ${modeName} ${role}: ${ratio.toFixed(2)}:1 (基準: >= ${minRatio}:1) [fg: ${fgHex}, bg: ${bgHex}]`;
    failures.push(msg);
    console.log(`  ${msg}`);
  }
}

console.log('====================================================================');
console.log('  HOTT3 SLIDE THEME GUIDELINE AUDIT (20260922 COMPLIANCE)');
console.log('====================================================================\n');

console.log('--- 1. WCAG 2.2 / JIS X 8341-3 カラーコントラスト比監査 ---');

// ダークモード検証
console.log('\n[ダークモード (Default / Invert)]');
checkContrast('Dark', '本文テキスト (text on bg)', darkTokens['theme-text'], darkTokens['theme-bg'], 4.5);
checkContrast('Dark', '本文テキスト (text on surface)', darkTokens['theme-text'], darkTokens['theme-surface'], 4.5);
checkContrast('Dark', '補助テキスト (sub on bg)', darkTokens['theme-text-sub'], darkTokens['theme-bg'], 4.5);
checkContrast('Dark', '外周ボーダー (border on bg)', darkTokens['theme-border'], darkTokens['theme-bg'], 3.0, 'border');
checkContrast('Dark', 'プライマリー文字 (primary on bg)', darkTokens['theme-primary'], darkTokens['theme-bg'], 4.5);
checkContrast('Dark', 'プライマリー文字 (primary on surface)', darkTokens['theme-primary'], darkTokens['theme-surface'], 4.5);
checkContrast('Dark', 'リンクテキスト (link on bg)', darkTokens['theme-link'], darkTokens['theme-bg'], 4.5);
checkContrast('Dark', '訪問済リンク (visited on bg)', darkTokens['theme-link-visited'], darkTokens['theme-bg'], 4.5);
checkContrast('Dark', '検索ハイライト文字 (mark-text on mark-bg)', darkTokens['theme-mark-text'], darkTokens['theme-mark-bg'], 4.5);
checkContrast('Dark', '検索ハイライト枠線 (mark-border on mark-bg)', darkTokens['theme-mark-border'], darkTokens['theme-mark-bg'], 3.0, 'border');

// チップラベル文字 vs チップ背景
checkContrast('Dark', 'チップ Primary (primary on primary-light)', darkTokens['theme-primary'], darkTokens['theme-primary-light'], 4.5);
checkContrast('Dark', 'チップ Success (success on success-bg)', darkTokens['theme-success'], darkTokens['theme-success-bg'], 4.5);
checkContrast('Dark', 'チップ Warning (warning on warning-bg)', darkTokens['theme-warning'], darkTokens['theme-warning-bg'], 4.5);
checkContrast('Dark', 'チップ Error (error on error-bg)', darkTokens['theme-error'], darkTokens['theme-error-bg'], 4.5);

// バナー文字 vs バナー背景
checkContrast('Dark', 'バナー Info 文字 (text on info-bg)', darkTokens['theme-text'], darkTokens['theme-info-bg'], 4.5);
checkContrast('Dark', 'バナー Success 文字 (text on success-bg)', darkTokens['theme-text'], darkTokens['theme-success-bg'], 4.5);
checkContrast('Dark', 'バナー Warning 文字 (text on warning-bg)', darkTokens['theme-text'], darkTokens['theme-warning-bg'], 4.5);
checkContrast('Dark', 'バナー Error 文字 (text on error-bg)', darkTokens['theme-text'], darkTokens['theme-error-bg'], 4.5);

// ライトモード検証
console.log('\n[ライトモード (Light Mode)]');
checkContrast('Light', '本文テキスト (text on bg)', lightTokens['theme-text'], lightTokens['theme-bg'], 4.5);
checkContrast('Light', '本文テキスト (text on surface)', lightTokens['theme-text'], lightTokens['theme-surface'], 4.5);
checkContrast('Light', '補助テキスト (sub on bg)', lightTokens['theme-text-sub'], lightTokens['theme-bg'], 4.5);
checkContrast('Light', '外周ボーダー (border on bg)', lightTokens['theme-border'], lightTokens['theme-bg'], 3.0, 'border');
checkContrast('Light', 'プライマリー文字 (primary on bg)', lightTokens['theme-primary'], lightTokens['theme-bg'], 4.5);
checkContrast('Light', 'リンクテキスト (link on bg)', lightTokens['theme-link'], lightTokens['theme-bg'], 4.5);
checkContrast('Light', '訪問済リンク (visited on bg)', lightTokens['theme-link-visited'], lightTokens['theme-bg'], 4.5);
checkContrast('Light', '検索ハイライト文字 (mark-text on mark-bg)', lightTokens['theme-mark-text'], lightTokens['theme-mark-bg'], 4.5);
checkContrast('Light', '検索ハイライト枠線 (mark-border on mark-bg)', lightTokens['theme-mark-border'], lightTokens['theme-mark-bg'], 3.0, 'border');

// チップラベル文字 vs チップ背景
checkContrast('Light', 'チップ Primary (primary on primary-light)', lightTokens['theme-primary'], lightTokens['theme-primary-light'], 4.5);
checkContrast('Light', 'チップ Success (success on success-bg)', lightTokens['theme-success'], lightTokens['theme-success-bg'], 4.5);
checkContrast('Light', 'チップ Warning (warning on warning-bg)', lightTokens['theme-warning'], lightTokens['theme-warning-bg'], 4.5);
checkContrast('Light', 'チップ Error (error on error-bg)', lightTokens['theme-error'], lightTokens['theme-error-bg'], 4.5);

// バナー文字 vs バナー背景
checkContrast('Light', 'バナー Info 文字 (text on info-bg)', lightTokens['theme-text'], lightTokens['theme-info-bg'], 4.5);
checkContrast('Light', 'バナー Success 文字 (text on success-bg)', lightTokens['theme-text'], lightTokens['theme-success-bg'], 4.5);
checkContrast('Light', 'バナー Warning 文字 (text on warning-bg)', lightTokens['theme-text'], lightTokens['theme-warning-bg'], 4.5);
checkContrast('Light', 'バナー Error 文字 (text on error-bg)', lightTokens['theme-text'], lightTokens['theme-error-bg'], 4.5);

// ============================================================================
// 2. アクセシビリティ・HTML/Markdown規約監査
// ============================================================================
console.log('\n--- 2. アクセシビリティ・HTML/Markdown規約監査 ---');

// スライド本文（Frontmatter / CSS スタイルブロック除外）を抽出
const bodyContent = content.replace(/^---[\s\S]*?---\s*/, '');
// コメントを除去した本文
const bodyWithoutComments = bodyContent.replace(/<!--[\s\S]*?-->/g, '');

// (1) <ol> タグの使用禁止監査 (components/list/index.md)
totalChecks++;
const olMatches = bodyWithoutComments.match(/<ol[\s>]/gi);
const mdOlMatches = bodyWithoutComments.match(/^\s*\d+\.\s+[^\n]+/gm);
if (!olMatches && !mdOlMatches) {
  passedChecks++;
  console.log('  ✅ [PASS] 順序付きリスト: <ol>要素および自動番号付与なし (<ul>+テキスト項番準拠)');
} else {
  failedChecks++;
  const reason = [
    olMatches ? `<ol>タグ ${olMatches.length}箇所` : null,
    mdOlMatches ? `Markdown番号付きリスト ${mdOlMatches.length}箇所` : null
  ].filter(Boolean).join(', ');
  const msg = `❌ [FAIL] 順序付きリスト: <ol>要素が検出されました (${reason})。ガイドライン components/list に従い <ul> とテキスト項番へ改修してください。`;
  failures.push(msg);
  console.log(`  ${msg}`);
}

// (2) 日本語斜体（italic）の使用禁止監査 (foundations/typography/index.md)
totalChecks++;
const italicCssMatch = content.match(/font-style\s*:\s*(italic|oblique)/gi);
const mdItalicMatch = bodyWithoutComments.match(/(^|[^\*])\*[^\*\n]+\*([^\*]|$)/gm);
if (!italicCssMatch && !mdItalicMatch) {
  passedChecks++;
  console.log('  ✅ [PASS] 書体スタイル: 日本語の斜体（font-style: italic / *...*）なし');
} else {
  failedChecks++;
  const msg = '❌ [FAIL] 書体スタイル: 斜体（italic）が検出されました。日本語フォントでの斜体は可読性を損なうため避けてください。';
  failures.push(msg);
  console.log(`  ${msg}`);
}

// (3) リンク下線指定監査 (foundations/link-text/index.md)
totalChecks++;
const linkUnderlineMatch = content.match(/a\s*\{[^}]*text-decoration\s*:\s*underline/i);
if (linkUnderlineMatch) {
  passedChecks++;
  console.log('  ✅ [PASS] リンク装飾: <a>要素に下線（text-decoration: underline）指定あり');
} else {
  failedChecks++;
  const msg = '❌ [FAIL] リンク装飾: <a>要素に下線（text-decoration: underline）が指定されていません。色だけに頼らない識別を確保してください。';
  failures.push(msg);
  console.log(`  ${msg}`);
}

// (4) 画像の縦はみ出し防止監査 (components/image/index.md)
totalChecks++;
const imgMaxHeightMatch = content.match(/img\s*\{[^}]*max-height\s*:\s*\d+px/i);
if (imgMaxHeightMatch) {
  passedChecks++;
  console.log('  ✅ [PASS] 画像サイズ制約: <img>要素に max-height 制約あり (縦はみ出し防止)');
} else {
  failedChecks++;
  const msg = '❌ [FAIL] 画像サイズ制約: <img>要素に max-height が設定されていません。16:9スライドからはみ出す恐れがあります。';
  failures.push(msg);
  console.log(`  ${msg}`);
}

// (5) 見出しレベル構造監査 (components/heading/index.md)
totalChecks++;
const h4WithoutH3 = content.match(/##[^\n]+\n+####[^\n]+/g);
if (!h4WithoutH3) {
  passedChecks++;
  console.log('  ✅ [PASS] 見出し階層: 見出しレベルの不正スキップなし');
} else {
  failedChecks++;
  const msg = '❌ [FAIL] 見出し階層: 見出しレベルがスキップされている箇所があります。';
  failures.push(msg);
  console.log(`  ${msg}`);
}

// ============================================================================
// 3. 8pxグリッド余白監査 (foundations/spacing/index.md)
// ============================================================================
console.log('\n--- 3. 8pxグリッド余白監査 ---');
totalChecks++;

// 主要レイアウト要素の padding, margin, gap で 8の倍数でないものを検出
// ※ 4px刻み（4px, 12px）はインラインチップやテーブルセルの小スケール余白として許容
const non8pxSpacing = [];
const spacingRegex = /(?:margin|padding|gap)\s*:\s*([^;]+);/g;
let spMatch;
while ((spMatch = spacingRegex.exec(content)) !== null) {
  const val = spMatch[1];
  const pxValues = val.match(/\b\d+px\b/g);
  if (pxValues) {
    for (const px of pxValues) {
      const num = parseInt(px, 10);
      // 0〜4px、12px（小スケール）は許容。それ以外のレイアウト余白で8の倍数でないもの（10px, 14px, 20px, 28px等）を検出
      if (num > 4 && num !== 12 && num % 8 !== 0) {
        non8pxSpacing.push(`${spMatch[0].trim()} (${px})`);
      }
    }
  }
}

if (non8pxSpacing.length === 0) {
  passedChecks++;
  console.log('  ✅ [PASS] 8pxグリッド: 主要なレイアウト余白（margin, padding, gap）はすべて8の倍数に準拠');
} else {
  failedChecks++;
  const msg = `❌ [FAIL] 8pxグリッド: 8の倍数でないレイアウト余白指定が ${non8pxSpacing.length} 箇所検出されました:\n    - ${[...new Set(non8pxSpacing)].join('\n    - ')}`;
  failures.push(msg);
  console.log(`  ${msg}`);
}

// ============================================================================
// 総合判定
// ============================================================================
console.log('\n====================================================================');
console.log(`  監査サマリー: 合計 ${totalChecks} 項目 | 合格: ${passedChecks} | 失敗: ${failedChecks}`);
console.log('====================================================================');

if (failures.length > 0) {
  console.log('\n【検出された是正・改修対象項目】');
  failures.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));
  console.log('\n判定: ⚠️ 基準未達または改修推奨項目が存在します。ブラッシュアップを実施してください。\n');
  process.exit(1);
} else {
  console.log('\n判定: 🏆 全てのガイドライン規範に完全適合しています！\n');
  process.exit(0);
}
