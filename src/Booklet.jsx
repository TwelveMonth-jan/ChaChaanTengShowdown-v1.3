import { useMemo } from 'react';

const coverCharacters = [
  { src: 'card_prompts/images/34.png', zh: '新人伙計 阿志', en: 'Rookie Server — Chi' },
  { src: 'card_prompts/images/35.png', zh: '老練伙記 發哥', en: 'Veteran Server — Fat Gor' },
  { src: 'card_prompts/images/36.png', zh: '後廚大佬 肥威', en: 'Head Cook — Fei Wai' },
  { src: 'card_prompts/images/37.png', zh: '收銀阿姐 蓮姐', en: 'Cashier — Sister Lin' },
  { src: 'card_prompts/images/38.png', zh: '外賣仔 小強', en: 'Delivery Boy — Siu Keung' },
  { src: 'card_prompts/images/39.png', zh: '樓面花 阿May', en: 'Front-of-House — Ah May' },
];

const spotlightCards = [
  { src: 'card_prompts/images/29.png', zh: '強行帶位', en: 'Forced Seating' },
  { src: 'card_prompts/images/30.png', zh: '暗中加料', en: 'Secret Ingredient' },
  { src: 'card_prompts/images/31.png', zh: '老闆唔喺度', en: 'Boss is Away' },
];

function extractRuleSections(rawHtml, selectors) {
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
  return selectors.map((selector) => doc.querySelector(selector)?.outerHTML ?? '');
}

function extractCardSections(rawHtml, indices) {
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html');
  const sections = Array.from(doc.querySelectorAll('main > .section'));
  return indices.map((index) => sections[index]?.outerHTML ?? '');
}

export default function Booklet({ langClass, rulebookHtml, cardlistHtml }) {
  const ruleSections = useMemo(
    () => extractRuleSections(rulebookHtml, [
      '#sec-objective', '#sec-components', '#sec-characters',
      '#sec-initial', '#sec-setup', '#sec-cards',
      '#sec-flow', '#sec-bluff', '#sec-rush', '#sec-glossary',
    ]),
    [rulebookHtml],
  );

  const cardSections = useMemo(
    () => extractCardSections(cardlistHtml, [0, 1, 2, 3, 4, 5, 6, 7]),
    [cardlistHtml],
  );

  return (
    <div className={`page-booklet ${langClass}`}>
      <section className="booklet-print-note" aria-label="booklet print note">
        <div className="booklet-note-pill">
          <span className="zh">小冊子模式已設定為 A5 PDF 輸出，先存成 PDF，再用印表機的 booklet / 小冊子裝訂列印最順手。</span>
          <span className="en">Booklet mode is tuned for A5 PDF export. Save as PDF first, then print with your printer's booklet setting for folding.</span>
        </div>
      </section>

      <section className="booklet-page booklet-cover">
        <div className="booklet-cover-topline">
          <span className="zh">CHA CHAAN TENG SURVIVAL KIT</span>
          <span className="en">CHA CHAAN TENG SURVIVAL KIT</span>
        </div>

        <div className="booklet-cover-hero">
          <div className="booklet-cover-copy">
            <div className="booklet-seal">
              <span className="zh">午市<br />開工</span>
              <span className="en">RUSH<br />HOUR</span>
            </div>
            <h1>
              <span className="zh">茶餐廳風雲</span>
              <span className="en">Cha Chaan Teng Showdown</span>
            </h1>
            <p className="booklet-cover-subtitle">
              <span className="zh">遊戲說明書與卡牌名錄</span>
              <span className="en">Rulebook & Card Atlas</span>
            </p>
            <p className="booklet-cover-tagline">
              <span className="zh">
                帶位、執單、上餐、吹牛、踢爆、反檯。
                <br />
                茶餐廳午市最亂的一刻，正是這款遊戲最好玩的時候。
              </span>
              <span className="en">
                Seat customers, sling orders, bluff shamelessly, and try not to get fired.
                <br />
                The lunch rush is exactly where this game becomes deliciously chaotic.
              </span>
            </p>
            <div className="booklet-fact-row">
              <span>3–5 Players</span>
              <span>20–30 min</span>
              <span>Age 8+</span>
              <span>V1.3</span>
            </div>
          </div>

          <div className="booklet-cover-art">
            <img
              className="booklet-board-image"
              src="card_prompts/images/中央板 (Central Board).png"
              alt="Cha Chaan Teng Showdown board"
            />
            <div className="booklet-board-caption">
              <span className="zh">中央板、客人、奧客與垃圾卡，全都為午市混亂服務。</span>
              <span className="en">Board, customers, Karens and trash cards all exist to feed the lunch-rush chaos.</span>
            </div>
          </div>
        </div>

        <div className="booklet-cast-strip">
          {coverCharacters.map((character) => (
            <figure className="booklet-cast-card" key={character.zh}>
              <img src={character.src} alt={langClass === 'lang-en' ? character.en : character.zh} />
              <figcaption>
                <span className="zh">{character.zh}</span>
                <span className="en">{character.en}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="booklet-page booklet-overview">
        <div className="booklet-section-kicker">
          <span className="zh">先看這頁，再開打</span>
          <span className="en">Read This Before You Play</span>
        </div>

        <div className="booklet-overview-grid">
          <article className="booklet-overview-panel">
            <h2>
              <span className="zh">這本小冊子有甚麼</span>
              <span className="en">What's Inside</span>
            </h2>
            <ul className="booklet-bullets">
              <li>
                <span className="zh">前半本是規則與回合流程，讓玩家 5 分鐘內上手。</span>
                <span className="en">The first half covers rules and turn flow so new players can learn in five minutes.</span>
              </li>
              <li>
                <span className="zh">後半本是卡牌名錄，方便開局前快速查牌型與張數。</span>
                <span className="en">The second half is a card atlas for quick setup checks and card lookup.</span>
              </li>
              <li>
                <span className="zh">整體版面改成更像成品冊子的閱讀節奏，不再只是網頁列印。</span>
                <span className="en">The whole layout now reads like a finished booklet instead of a printed website.</span>
              </li>
            </ul>
          </article>

          <article className="booklet-overview-panel booklet-overview-panel-strong">
            <h2>
              <span className="zh">這局遊戲的核心感覺</span>
              <span className="en">The Core Feel</span>
            </h2>
            <p>
              <span className="zh">
                這不是安靜算分的桌遊。它更像一場茶餐廳災難喜劇：
                一邊經營桌面，一邊防隊友陷害，一邊盤算甚麼時候要吹牛，甚麼時候要踢爆。
              </span>
              <span className="en">
                This is not a quiet point salad. It is a chaotic Cha Chaan Teng disaster comedy where you manage your tables,
                dodge sabotage, decide when to bluff, and choose the perfect moment to call someone out.
              </span>
            </p>

            <div className="booklet-spotlight-row">
              {spotlightCards.map((card) => (
                <div className="booklet-spotlight-card" key={card.zh}>
                  <img src={card.src} alt={langClass === 'lang-en' ? card.en : card.zh} />
                  <div>
                    <span className="zh">{card.zh}</span>
                    <span className="en">{card.en}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="booklet-page booklet-divider">
        <div className="booklet-divider-label">
          <span className="zh">Part 01</span>
          <span className="en">Part 01</span>
        </div>
        <h2>
          <span className="zh">遊戲規則</span>
          <span className="en">Rulebook</span>
        </h2>
        <p>
          <span className="zh">從遊戲目標、配件到整個回合流程，這一段就是上桌前的開工 briefing。</span>
          <span className="en">Objective, components and turn structure. Think of this as the pre-shift briefing before the lunch rush hits.</span>
        </p>
      </section>

      <section className="booklet-page booklet-fragment">
        <div className={`page-rulebook booklet-rulebook-fragment ${langClass}`}>
          <div className="wrapper" dangerouslySetInnerHTML={{ __html: ruleSections.filter(Boolean).join('') }} />
        </div>
      </section>

      <section className="booklet-page booklet-divider booklet-divider-alt">
        <div className="booklet-divider-label">
          <span className="zh">Part 02</span>
          <span className="en">Part 02</span>
        </div>
        <h2>
          <span className="zh">卡牌名錄</span>
          <span className="en">Card Atlas</span>
        </h2>
        <p>
          <span className="zh">這一段是給開局檢查、列印整理和測試平衡時快速翻閱的完整卡牌清單。</span>
          <span className="en">This section is built for setup checks, print organization and quick balance review when you need the full card catalog.</span>
        </p>
      </section>

      <section className="booklet-page booklet-fragment">
        <div className={`page-cardlist booklet-cardlist-fragment ${langClass}`}>
          <div className="wrapper" dangerouslySetInnerHTML={{ __html: cardSections.filter(Boolean).join('') }} />
        </div>
      </section>

      <section className="booklet-page booklet-back-cover">
        <div className="booklet-back-card">
          <div className="booklet-back-copy">
            <div className="booklet-section-kicker">
              <span className="zh">收工前最後一頁</span>
              <span className="en">One Last Page Before Clock-Out</span>
            </div>
            <h2>
              <span className="zh">撐到最後，先算真正落場。</span>
              <span className="en">Survive the rush. Then you can say you really worked the floor.</span>
            </h2>
            <p>
              <span className="zh">
                這份 PDF 現在已經是獨立的小冊子版面，適合直接存檔、分享、雙面列印與實體測試。
                下一步最有價值的是補一張封面主視覺和兩三張跨頁插圖，整本冊子的完成感會再往前一步。
              </span>
              <span className="en">
                This PDF now stands as a self-contained booklet that is ready to save, share, duplex print and bring into playtesting.
                The next high-impact improvement would be a dedicated cover illustration plus two or three spread illustrations to push it even closer to a finished retail booklet.
              </span>
            </p>
          </div>

          <div className="booklet-back-visual">
            <img src="card_prompts/images/Cardback01.png" alt="Card back" />
          </div>
        </div>
      </section>
    </div>
  );
}
