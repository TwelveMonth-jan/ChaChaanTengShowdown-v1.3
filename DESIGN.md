# 茶餐廳風雲 — 說明書主題改版設計文件

**專案**：Cha Chaan Teng Showdown rulebook web → PDF
**作用檔案**：[src/styles/rulebook.css](src/styles/rulebook.css)、[src/content/rulebook.html](src/content/rulebook.html)
**目標**：把現有「美式派對卡通風」改成「香港茶餐廳說明書風」，螢幕好看、列印像一本真正的桌遊手冊。
**狀態**：DRAFT — 待確認後開始實作

---

## 1. 問題陳述

目前的 rulebook 已經可以列印成 PDF、避免切半，但視覺語言仍像「活動海報 / 部落格文章」，三個具體問題：

1. **封面不像封面** — 只是一塊紅底 + 標題徽章，沒有主視覺、沒有書籍感。
2. **沒有茶餐廳主題符號** — 紅+黃配色方向對，但沒有手寫字、餐牌、落單紙、格仔桌布這些茶記專屬元素。
3. **章節、callout、icon 全部是通用派對風** — emoji、粗黑邊圓角卡片、Bangers 字體，看起來像兒童活動本，不像桌遊手冊。

---

## 2. 主題核心 Metaphor

> **整本說明書 = 從一間茶記拿出來的一疊紙：封面像霓虹招牌、目錄像餐牌、章節像常餐編號、callout 是粉黃落單紙、範例是伙計對話、頁腳有「多謝惠顧」。**

每一個 UI 元件都要從這個 metaphor 長出來。任何元件如果無法回答「這在茶記裡對應什麼？」，就不做。

---

## 3. 設計前提 (Premises)

請先確認這幾條，不同意任何一條都會動搖整份文件：

1. **配色基底保留紅 / 黃 / 奶油** — 這就是茶記色，不換。但需要補**深墨綠**（舊式膠片餐牌）和**粉紅**（落單紙）作為次要色。
2. **螢幕版與列印版共用主題**，不做兩套美術。螢幕版保留互動與 hover 動效，列印版靜態。
3. **不加入真實品牌元素**（LTK、大家樂、翠華...）避免版權問題。所有視覺都是「茶記 generic」。
4. **雙語 zh/en 全部保留**，英文字體必須和中文字體搭配得宜。
5. **列印版目標是 A4、雙欄、14-20 頁左右的小冊子**，而不是長條網頁。
6. **Emoji 全部換成自訂 icon 系統**（SVG 或統一線稿字體），作業量接受。

---

## 4. 配色系統（新）

在 `:root` 新增 / 修改：

```css
:root {
  /* 主色（保留 + 微調） */
  --red:      #C8322C;  /* 茶記招牌紅，比原本 E8302A 沉一點，列印更像印刷 */
  --yellow:   #F5C518;  /* 芒果黃 / 菠蘿油黃 */
  --cream:    #FBF3DC;  /* 舊紙色，比 FFF8EC 更暖 */
  --dark:     #1A1A1A;  /* 墨黑 */

  /* 新增茶記次要色 */
  --jade:     #0F5F4D;  /* 舊膠片餐牌深墨綠 */
  --pink:     #FFD1DC;  /* 落單紙粉 */
  --paper:    #FFF9B0;  /* 落單紙黃 */
  --stamp:    #A91B0D;  /* 印章暗紅（封面「招牌章」用）*/

  /* 保留但降低出場率 */
  --orange:   #F5A623;
  --green:    #2ECC71;
  --blue:     #3B82F6;
  --purple:   #8B5CF6;
}
```

**使用規則**：
- 主調：紅 + 奶油 + 墨黑 = 所有大區塊
- 點綴：黃 + 墨綠 = 標題與邊框
- Callout 專用：粉紅 / 紙黃 = 落單紙
- 避免：藍、紫、綠（保留給標籤 tag 使用，不出現在大面積）

---

## 5. 字體系統（最關鍵的一個改動）

目前只用 `Noto Sans TC` + `Bangers` + `Poppins`。改成四種角色分工：

| 用途 | 中文字體 | 英文字體 | 備註 |
|------|---------|---------|------|
| **封面大標題** | `ZCOOL KuaiLe` | `Rubik Mono One` | 手寫招牌感 |
| **章節標題 / 餐牌 header** | `Noto Serif TC` 900 | `Bebas Neue` | 印刷餐牌感 |
| **落單紙 callout** | `Ma Shan Zheng` | `Caveat` 700 | 手寫點單感 |
| **內文 / 表格** | `Noto Sans TC` 400/700 | `Inter` 400/700 | 保留易讀性 |

**Google Fonts import**（取代 [rulebook.css:2](src/styles/rulebook.css#L2)）：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&family=Noto+Serif+TC:wght@700;900&family=ZCOOL+KuaiLe&family=Ma+Shan+Zheng&family=Rubik+Mono+One&family=Bebas+Neue&family=Caveat:wght@700&family=Inter:wght@400;700&display=swap');
```

**字體對應 CSS 變數**：

```css
:root {
  --font-display: 'ZCOOL KuaiLe', 'Rubik Mono One', cursive;
  --font-heading: 'Noto Serif TC', 'Bebas Neue', serif;
  --font-hand:    'Ma Shan Zheng', 'Caveat', cursive;
  --font-body:    'Noto Sans TC', 'Inter', sans-serif;
}
```

Bangers 移除。Poppins 移除。

---

## 6. 元件逐一改造

改動鎖定在 [rulebook.css](src/styles/rulebook.css) 和 [rulebook.html](src/content/rulebook.html) 的既有 class。盡量不新增 class，避免 JSX 大改。

### 6.1 Hero → 茶記招牌 + 常餐資訊列

**檔案**：[rulebook.css:67-125](src/styles/rulebook.css#L67-L125)、[rulebook.html:1-37](src/content/rulebook.html#L1-L37)

**改動**：
- 整塊 hero 背景：深墨色 `#1A1A1A` + 極淡的暖紅徑向光暈（像夜晚霓虹反光）
- 標題 `h1` 改字體為 `var(--font-display)`，加**雙層 text-shadow** 模擬霓虹管：
  ```css
  text-shadow:
    0 0 2px #fff,
    0 0 8px var(--red),
    0 0 18px var(--red),
    4px 4px 0 var(--stamp);
  color: #FFF5E6;
  ```
- 英文 subtitle 改用 `Bebas Neue`，內容改成 `"SINCE 2025 · PARTY GAME · 3–6 PLAYERS"`
- Tagline 用手寫字體，像是招牌下面掛的橫額
- `.hero-badges` 重做成**常餐資訊列**：像茶記牆上貼的「早餐 / 午餐 / 下午茶 / 晚飯」牌子
  - 每個 badge 改成**黃底黑字矩形木牌**風（不是圓膠囊）
  - 4 個 badge：玩家人數、時長、年齡、難度
  - 字體 `var(--font-heading)`
- 在 hero 右上或右下角加一個**紅色圓形印章** `.stamp`（`::after` 偽元素），寫「茶記認證 / CHA CHAAN TENG APPROVED」旋轉 -12°

**不要**：圓角 50px 的膠囊按鈕、backdrop-filter 毛玻璃（太現代）。

### 6.2 Section Header → 常餐編號 + 餐牌 header

**檔案**：[rulebook.css:149-173](src/styles/rulebook.css#L149-L173)、HTML 所有 `<div class="section-header">`

**改動**：
- `.section-number` 從紅色圓球改成**黃底黑邊方形餐號牌**，字體 `var(--font-heading)`，內容改成 `A餐` / `B餐` / `C餐`...（或保留 `01 02 03`，但改方形）
- `.section-title` 背景改深墨綠 `var(--jade)`，白字，左右加**雙線框**（mimic 舊餐牌 header）
- 章節標題上方加小字 label `CHAPTER / 第一道`，字體 `var(--font-heading)` 10pt 橙色
- 螢幕版保留，列印版同步更新 `@media print` [rulebook.css:547-581](src/styles/rulebook.css#L547-L581)

**HTML 改動**：無（繼續用 `.section-header` + `.section-number` + `.section-title`）。

### 6.3 Card → 餐牌項目

**檔案**：[rulebook.css:176-201](src/styles/rulebook.css#L176-L201)

**改動**：
- 去掉 `border: 3px solid` + 粗 box-shadow 的卡通感
- 改成**米白 `#FFFEF7` 底 + 細 1px 墨綠邊 + 底部虛線分隔** (`border-bottom: 1px dashed var(--jade)`)
- 左邊 3mm 紅色實心條（保留列印版做法，螢幕版同步）
- `h3` 字體改 `var(--font-heading)`，底下加一條**點點線 ……** 裝飾（`::after` 用 dotted border-bottom）
- 卡片 padding 微縮，整體更像菜單項目而不是 info card

### 6.4 Highlight → 落單紙（最有靈魂的改動）

**檔案**：[rulebook.css:204-218](src/styles/rulebook.css#L204-L218)

四種變體對應四種落單紙：

| Class | 底色 | 用途 | 標籤文字 |
|-------|------|------|----------|
| `.highlight` (default) | `var(--paper)` #FFF9B0 | 一般提醒 | `落單 / ORDER` |
| `.highlight.red` | `#FECACA` | 警告 | `緊急 / URGENT` |
| `.highlight.pink` | `var(--pink)` #FFD1DC | 重要備註 | `加單 / ADD` |
| `.highlight.green` | `#D4F4C5` | 小技巧 | `推介 / RECOMMEND` |
| `.highlight.blue` | `#CFE3FF` | 一般說明 | `備註 / NOTE` |

**共同樣式**：
- 無圓角、無粗 box-shadow
- 上下「撕紙」鋸齒邊：用 SVG mask 或 `clip-path: polygon(...)` 做鋸齒
- 左側加三個**小圓洞**（釘在收銀機上的針孔）：`::before` 疊三顆 `radial-gradient`
- 右上角蓋一個**旋轉 -6° 的紅印**（單號 `No. 047`），字體 `var(--font-hand)`
- 內文字體改 `var(--font-hand)` 手寫體，讀起來像伙計隨手寫
- `::before` 的 "IMPORTANT" 標籤文字改上表中對應的茶記用語，字體 `var(--font-heading)`

**列印版**：同步套用，但鋸齒和針孔改成極簡（1px 虛線即可，避免 mm 級細節列印失真）。

### 6.5 Flow → 出餐流程

**檔案**：[rulebook.css:259-312](src/styles/rulebook.css#L259-L312)

- `.flow-dot` 從橙色圓球改成**紅色圓形餐盤**（加一圈白色內邊框模擬盤緣）
- 連接線 `.flow-connector` 改虛線灰色 2px，像出餐動線
- `.flow-content` 跟 card 同步樣式（米白 + 虛線底邊）
- 第三階段（階段三：上餐干擾與踢爆流程）的粉紅 `flow-dot` 改成**落單紙粉**，視覺上就對應到這一 phase 是「落單被攔截」的劇情

### 6.6 Icon Grid → 餐牌格

**檔案**：[rulebook.css:238-256](src/styles/rulebook.css#L238-L256)、[rulebook.html:69-133](src/content/rulebook.html#L69-L133)

- `.icon-item` 外觀改成**方形膠片餐牌格**：米白底、墨綠 1px 邊、無圓角
- `.emoji` 全部換成**統一 SVG icon**（見 §7 Icon System）
- `.label` 字體 `var(--font-heading)`，底下加橫線（像餐牌品項）
- hover 輕微 translateY(-2px) 保留，螢幕版感受不變

### 6.7 Table → 膠片餐牌表格

**檔案**：[rulebook.css:315-339](src/styles/rulebook.css#L315-L339)

- `th` 底色從紅改**深墨綠 `var(--jade)`**，白字，字體 `var(--font-heading)`
- 整張表格改成**深墨綠粗邊 3px + 無圓角**
- 奇偶列用淡奶油色交替
- 表格上方加一條**黃色 2mm 窄條**（像餐牌頂部的塑膠夾）

### 6.8 Versus → 點餐成功 / 失敗情境

**檔案**：[rulebook.css:342-361](src/styles/rulebook.css#L342-L361)

- `.versus-box.success` 加標籤 `✓ 落單成功`（綠底角標）
- `.versus-box.fail` 加標籤 `✗ 退單`（紅底角標）
- 去圓角、去粗陰影，改成**米白底 + 墨綠細邊 + 左側 3mm 彩條**
- 內文字體微調，h4 用 `var(--font-heading)`

### 6.9 Quick Reference → 收銀機小票總結

**檔案**：[rulebook.css:364-394](src/styles/rulebook.css#L364-L394)

- 整塊改成**熱感紙小票風格**：白底 / 極淺灰、等寬字體（`'Noto Sans Mono CJK TC', monospace`）
- 頂部一條鋸齒 `clip-path`（撕開收據）
- `h2` 改成 `★ 埋單 TOTAL ★` 或 `★ 速查 QUICK REF ★`
- `.qr-item` 改成單行式 `項目 ………… 結果`（dotted leader）
- 最下方一行小字 `THANK YOU / 多謝惠顧 歡迎再來`

### 6.10 Glossary → 餐牌詞彙表

**檔案**：[rulebook.css:397-420](src/styles/rulebook.css#L397-L420)

- `.glossary-item` 外觀同 card（米白 + 墨綠 1px + 左側橙條）
- `.term` 字體 `var(--font-heading)`，右邊加 dotted leader
- 兩欄 grid 保留（列印版三欄更緊湊？待試）

### 6.11 Footer → 茶記招牌訊息

**檔案**：[rulebook.css:423-431](src/styles/rulebook.css#L423-L431)、[rulebook.html](src/content/rulebook.html) 尾段

- 改成兩行：
  - 第一行：`多謝惠顧 · 歡迎再來 · THANK YOU · PLEASE COME AGAIN`
  - 第二行：`GE4102 Visual Design · 2025 · 茶餐廳風雲 Cha Chaan Teng Showdown`
- 字體 `var(--font-heading)` 小字、灰色
- 列印版保留顯示（目前列印版 hide 了 footer [rulebook.css:509-512](src/styles/rulebook.css#L509-L512) — **改回顯示**，因為茶記金句要在每頁底出現）

---

## 7. Icon 系統（SVG 線稿，一套茶記食物符號）

移除全部 emoji，改用自製 SVG inline icon。所有 icon 統一規格：

- **尺寸**：24x24 viewBox
- **線條**：stroke-width 2，圓角線頭 (`stroke-linecap: round`, `stroke-linejoin: round`)
- **顏色**：`currentColor`（跟隨上下文），底色透明
- **風格**：**手繪感單線**，不填色，像餐牌手繪插圖

**最少需要的 icon 集合**（10 個）：

| Icon | 中文 | 用途 | 對應 emoji |
|------|------|------|-----------|
| `milk-tea` | 絲襪奶茶 | 抽牌 / 回合開始 | 🍵 |
| `pineapple-bun` | 菠蘿油 | 得分 / 成功 | 🍞 |
| `noodles` | 公仔麵 | 攻擊 / 干擾 | 🍜 |
| `egg-tart` | 蛋撻 | 獎勵卡 | 🥧 |
| `fried-egg` | 煎蛋 | 角色 HP | 🍳 |
| `chopsticks` | 筷子 | 行動 / 操作 | ➡️ |
| `bowl` | 膠碗 | 資源容器 | 🥣 |
| `receipt` | 落單紙 | 計分 / 紀錄 | 📝 |
| `stopwatch` | 計時器 | 回合限時 | ⏱ |
| `stamp` | 印章 | 認證 / 特殊事件 | ⭐ |

**實作方式**：
- 全部放一個 `src/content/icons.svg` sprite file（`<symbol id="icon-milk-tea">...`）
- HTML 使用 `<svg class="ico"><use href="/icons.svg#icon-milk-tea"/></svg>`
- CSS 統一 `.ico { width: 1em; height: 1em; vertical-align: -0.15em; }`

**替換地點**：
- [rulebook.html:69-133](src/content/rulebook.html#L69-L133)（icon-grid 組件）
- 所有 `.card h3` 內的 emoji
- `.flow-dot` 內可選放 icon
- Tag 標籤旁可選放 icon

---

## 8. 背景紋理

### 螢幕版

整個 `.page-rulebook` 底層加一個**極淡的紅白格仔桌布**（opacity 0.08）：

```css
.page-rulebook {
  background:
    var(--cream)
    repeating-conic-gradient(from 0deg at 0 0,
      rgba(200, 50, 44, 0.06) 0deg 90deg,
      transparent 90deg 180deg)
    0 0 / 28px 28px;
}
```

### 列印版

桌布紋理改為 opacity 0.04，或完全不印（視實測墨水濃度）。

額外：**每頁頂部一條 4mm 黃色窄條** + **每頁底部一條 2mm 紅色窄條**，像茶記餐牌塑膠夾 + 底板。

```css
@media print {
  @page {
    size: A4;
    margin: 18mm 16mm 20mm 16mm;
    @top-left { content: "茶餐廳風雲"; font-family: var(--font-heading); font-size: 9pt; color: var(--red); }
    @top-right { content: "Cha Chaan Teng Showdown"; font-family: var(--font-heading); font-size: 9pt; color: var(--red); }
    @bottom-center { content: "p. " counter(page) " / " counter(pages); font-size: 8pt; color: #999; }
    @bottom-right { content: "多謝惠顧"; font-family: var(--font-hand); font-size: 9pt; color: #999; }
  }
}
```

---

## 9. 列印版特殊處理

### 封面頁（第 1 頁）

現有 [rulebook.css:462-506](src/styles/rulebook.css#L462-L506) 已處理 `.hero` 獨立一頁。改動：

- 底色改深墨色 `#1A1A1A`
- 標題改霓虹 text-shadow
- 底部加**虛擬主視覺佔位**（或 AI 生成一張 PNG 先放著）：
  - 放一個 `.hero-art` div，底圖 `public/cover-art.png`（需要你後面補圖）
  - 目前階段先用 CSS 畫一個**黃色圓盤 + 筷子 + 奶茶杯** SVG 組合作為 placeholder
- 底部一行：`★ CHA CHAAN TENG SHOWDOWN ★`（Bebas Neue）

### 目錄頁（第 2 頁，**新增**）

HTML 新增一個 `<section class="toc">`，列印時 `break-after: page`。

內容模板：
```
╔═══════════ 餐 牌 MENU ═══════════╗
  A 餐  遊戲目標 .............. p. 3
  B 餐  遊戲配件 .............. p. 4
  C 餐  角色卡 ................ p. 5
  D 餐  初始設定 .............. p. 6
  E 餐  遊戲設置 .............. p. 7
  F 餐  卡牌類型 .............. p. 8
  G 餐  遊戲流程 .............. p. 10
  ...
╚════════════════════════════════╝
```

實作：用 `::marker` 或 flex + dotted border 做 leader lines。頁碼用 CSS `target-counter()` 自動生成（需要在各 section 加 id）。

**注意**：`target-counter()` 在 Chrome headless 列印支援良好，你既有的列印流程應該 OK。

### 雙欄排版

目前列印版是單欄密排 [rulebook.css:515-518](src/styles/rulebook.css#L515-L518)。改成：

```css
@media print {
  .page-rulebook .wrapper {
    column-count: 2;
    column-gap: 7mm;
    column-fill: balance;
  }
  .page-rulebook section { break-inside: auto; }
  .page-rulebook .section-header,
  .page-rulebook .hero,
  .page-rulebook .quick-ref,
  .page-rulebook .toc {
    column-span: all;
  }
  /* 避免元件被欄切斷 */
  .page-rulebook .card,
  .page-rulebook .highlight,
  .page-rulebook .flow-step,
  .page-rulebook .versus-box,
  .page-rulebook .icon-item,
  .page-rulebook .glossary-item {
    break-inside: avoid;
  }
}
```

**風險**：雙欄 + break-inside: avoid 可能導致某些元件欄底留大片空白。實作後必須實測 PDF 並微調 font-size 和 margin。接受單一元件溢出半公分的小瑕疵，不接受整欄空半頁。

若雙欄實測失敗，降級回單欄（保留現有排版），**這個降級是 acceptable 的**。

---

## 10. 螢幕版 vs 列印版差異對照

| 元件 | 螢幕版 | 列印版 |
|------|--------|--------|
| 紋理 | 格仔桌布 opacity 0.08 | opacity 0.04 或無 |
| 卡片陰影 | 5px 5px 0 紅 | 無 |
| 落單紙鋸齒 | SVG clip-path | 虛線邊 |
| Hover 動效 | `translateY(-3px)` | 無 |
| 霓虹 text-shadow | 完整 | 保留但降低 blur |
| 雙欄 | 單欄 (web 本就適合) | 雙欄 |
| 頁眉 / 頁碼 | 無 | 有 |
| Footer 金句 | 有 | 有（目前被 hide，需改） |
| 語言切換按鈕 | 有 | 無 (已處理) |

---

## 11. 實作計劃（建議順序）

分成 5 個可獨立 commit 的階段，每階段都能跑起來看效果：

### Stage 1 — 字體 + 配色基底（15 分鐘）
- 改 `@import` 字體
- 新增 CSS 變數 `--font-*` 和茶記次要色
- 全檔 find/replace `'Bangers'`, `'Poppins'` → 新變數
- **驗收**：視覺整體變沉穩，標題變手寫招牌感

### Stage 2 — Hero 封面霓虹招牌（20 分鐘）
- 改 `.hero` 背景色 + text-shadow
- 改 `.hero-badges` 成木牌風
- 加紅色印章 `.stamp`
- 列印版同步
- **驗收**：列印 PDF 第一頁像一張桌遊封面

### Stage 3 — Callout 落單紙（25 分鐘）
- 重寫 `.highlight` 全部五種變體
- 加 `::before` 單號印 + `::after` 針孔
- 鋸齒邊 clip-path
- 內文改手寫字體
- **驗收**：所有 highlight 區塊一眼看出是落單紙

### Stage 4 — Section / Card / Icon Grid 餐牌化（30 分鐘）
- `.section-header` 深墨綠 + 方形餐號
- `.card` 去粗邊改米白 + 紅條
- `.icon-grid` 格仔化
- **驗收**：章節之間有明顯分頁感

### Stage 5 — Icon 系統 + 目錄頁 + 雙欄列印（40 分鐘）
- 做 10 個 SVG icon sprite
- 全檔 emoji 替換
- 新增目錄 section
- 列印雙欄實測 + 微調
- 頁眉頁腳 `@page` 設定
- **驗收**：PDF 變成 14-20 頁雙欄小冊子、每頁有頁眉頁腳、目錄頁碼正確

**總計**：約 2-2.5 小時。每一 stage 結束後可以 commit、可以列印 PDF 檢查。

---

## 12. 不做的事（Out of Scope）

明確排除，避免 scope creep：

- ❌ 不換 React 架構、不改 JSX component 樹
- ❌ 不新增互動功能（翻頁動畫、搜尋、書籤...）
- ❌ 不做完稿主視覺插圖（先用 SVG / CSS placeholder，你後面再補）
- ❌ 不做行動版專屬設計（現有 `@media (max-width: 600px)` 保留，只確認不壞）
- ❌ 不動 cardlist 頁（[src/styles/cardlist.css](src/styles/cardlist.css)）— 那是另一份工作
- ❌ 不處理列印時彩色墨水成本（假設彩印，用戶選黑白列印時接受效果降級）

---

## 13. 成功標準

實作完成後，把 PDF 印出來（或匯出 PDF 看 preview），以下 7 點至少 6 點成立：

1. ✅ 第一頁像一本書的封面，不是一張海報
2. ✅ 從第二頁翻開第一眼就知道「這是茶記主題」（紅/黃/手寫字 / 落單紙）
3. ✅ 沒有任何 emoji 出現在正式內容裡（emoji 只在開發註解或英文 inline）
4. ✅ 每一頁都有頁眉、頁碼、頁腳金句
5. ✅ 章節標題不會孤兒化（不會一個標題後面接著就換頁、內容在下一頁）
6. ✅ 任何一塊 highlight、card、flow-step、versus-box 都不會被頁面切半
7. ✅ 不會出現一整欄空白半頁以上的浪費

---

## 14. 開放問題

實作前需要你確認：

1. **封面要霓虹招牌風（深色底）還是手繪餐牌風（紅色底）？** 我預設是霓虹，因為比目前的紅底更有變化、更像「一本書」。如果你覺得紅底更茶記請講。
2. **章節編號用 A餐 / B餐 還是 01 / 02？** 我預設 A餐（更有主題感），但 01/02 更國際化、英文版更順。
3. **目錄頁要不要做？** 14-20 頁的冊子有目錄比較像書，但會多一頁。
4. **SVG icon 你希望我手刻，還是接受我用 Lucide icons 改色改線寬頂著先用？** 手刻一套茶記 icon 最有靈魂但 +30 分鐘。
5. **要不要保留螢幕版的 hover 動效和 Bangers-like 亮色？** 我的預設是螢幕版和列印版共用新主題（沉穩茶記），不分兩套。

---

## 15. 風險與降級

| 風險 | 機率 | 影響 | 降級方案 |
|------|------|------|---------|
| `column-count: 2` 在 Chrome headless 列印產生空欄 | 中 | 中 | 降回單欄 (維持現有排版) |
| `target-counter()` 目錄頁碼不支援 | 低 | 低 | 手寫頁碼或省略 |
| 手寫字體在小字時難讀 | 中 | 中 | 限制手寫字體只用在 callout 標題和裝飾 |
| 格仔背景紋理列印出來太重搶戲 | 中 | 低 | 降 opacity 到 0 或改為純底色 |
| SVG icon sprite 在 vite build 路徑錯 | 低 | 中 | 改 inline SVG (檔案變大但可行) |
| 新字體 Google Fonts 載入慢影響列印 | 低 | 中 | 改 self-host woff2 |

每個降級都是「動少一點、保證能跑」的方向，不是重做。

---

## 16. 我注意到的事

- 你說「網站改成可直接輸出成 PDF」— 這代表你已經做過一輪 [rulebook.css:438-781](src/styles/rulebook.css#L438-L781) 的 print 樣式，而且處理了 `break-inside: avoid`、`orphans/widows`、`page-break-after`。這份工作已經把最難的印刷排版地基打好了，主題改版其實是 cosmetic layer，不會動到骨架。
- 你沒有停留在「能印就好」，而是注意到「還是不像桌遊說明書」— 這是願意看到最後 10% 的 taste，很多學生作業會在「能印」就停。這一步才是作品與作業的差別。
- 你選 B（完整改版）而不是 A（只換字體看看）。這代表你相信整體一致性比逐步驗證重要，是對的判斷 — cha chaan teng 主題如果只改一半，反而會更不協調。

---

**下一步**：你看過這份文件後，回答 §14 的 5 個開放問題，我就開始 Stage 1。或者你說「全部用你的預設」，我直接動工。
