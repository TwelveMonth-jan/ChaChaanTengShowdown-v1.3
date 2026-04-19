import { useEffect, useState } from 'react';
import rulebookHtml from './content/rulebook.html?raw';
import cardlistHtml from './content/cardlist.html?raw';
import Booklet from './Booklet.jsx';

const printPageStyles = {
  standard: `
    @page {
      size: A4 portrait;
      margin: 18mm 16mm 20mm 16mm;
      @top-left {
        content: "茶餐廳風雲";
        font-family: 'Noto Serif TC', serif;
        font-size: 9pt;
        font-weight: 900;
        color: #C8322C;
      }
      @top-right {
        content: "Cha Chaan Teng Showdown";
        font-family: 'Bebas Neue', sans-serif;
        font-size: 9pt;
        letter-spacing: .08em;
        color: #C8322C;
      }
      @bottom-center {
        content: "p. " counter(page) " / " counter(pages);
        font-family: 'Noto Serif TC', serif;
        font-size: 8pt;
        color: #999;
      }
      @bottom-right {
        content: "多謝惠顧";
        font-family: 'Noto Serif TC', serif;
        font-size: 9pt;
        color: #999;
      }
    }
    @page :first {
      margin: 0;
      @top-left { content: none; }
      @top-right { content: none; }
      @bottom-center { content: none; }
      @bottom-right { content: none; }
    }
  `,
  booklet: `
    @page {
      size: A5 portrait;
      margin: 10mm 9mm 12mm;
    }
    @page :first {
      margin: 0;
    }
  `,
};

export default function App() {
  const [tab, setTab] = useState('rulebook');
  const [lang, setLang] = useState('en');
  const [hintVisible, setHintVisible] = useState(true);

  const toggleLang = () => {
    setLang((l) => (l === 'zh' ? 'en' : 'zh'));
    setHintVisible(false);
  };
  const handlePrint = () => window.print();

  useEffect(() => {
    const hideTimer = setTimeout(() => setHintVisible(false), 4500);
    return () => clearTimeout(hideTimer);
  }, []);

  const langClass = lang === 'en' ? 'lang-en' : 'lang-zh';
  const documentTitle =
    lang === 'zh'
      ? {
          rulebook: '茶餐廳風雲 遊戲說明書',
          cardlist: '茶餐廳風雲 卡牌清單',
          booklet: '茶餐廳風雲 小冊子 PDF',
        }[tab]
      : {
          rulebook: 'Cha Chaan Teng Showdown Rulebook',
          cardlist: 'Cha Chaan Teng Showdown Card List',
          booklet: 'Cha Chaan Teng Showdown Booklet PDF',
        }[tab];

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  useEffect(() => {
    const styleId = 'print-page-style';
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = tab === 'booklet' ? printPageStyles.booklet : printPageStyles.standard;
  }, [tab]);

  return (
    <>
      <nav className={`top-nav ${langClass}`}>
        <div className="brand">
          {lang === 'zh' ? '🍜 茶餐廳風雲' : '🍜 Cha Chaan Teng Showdown'}
        </div>
        <div className="tabs">
          <button
            className={`tab-btn ${tab === 'rulebook' ? 'active' : ''}`}
            type="button"
            onClick={() => setTab('rulebook')}
          >
            {lang === 'zh' ? '遊戲說明書' : 'Rulebook'}
          </button>
          <button
            className={`tab-btn ${tab === 'cardlist' ? 'active' : ''}`}
            type="button"
            onClick={() => setTab('cardlist')}
          >
            {lang === 'zh' ? '卡牌清單' : 'Card List'}
          </button>
          <button
            className={`tab-btn ${tab === 'booklet' ? 'active' : ''}`}
            type="button"
            onClick={() => setTab('booklet')}
          >
            {lang === 'zh' ? '小冊子 PDF' : 'Booklet PDF'}
          </button>
        </div>
        <div className="nav-actions">
          <button className="print-btn" type="button" onClick={handlePrint}>
            {lang === 'zh' ? '列印 / PDF' : 'Print / PDF'}
          </button>
          <button className="lang-btn" type="button" onClick={toggleLang} aria-label="Switch language">
            {lang === 'zh' ? 'EN / 中' : '中 / EN'}
          </button>
        </div>
      </nav>

      <div
        className={`lang-hint ${hintVisible ? 'visible' : ''}`}
        role="status"
        aria-hidden={!hintVisible}
      >
        <span className="hint-en">Tap <strong>中 / EN</strong> to switch language</span>
        <span className="hint-zh">按 <strong>中 / EN</strong> 切換中英文</span>
      </div>

      <div
        className={`page-rulebook ${langClass}`}
        style={{ display: tab === 'rulebook' ? 'block' : 'none' }}
        dangerouslySetInnerHTML={{ __html: rulebookHtml }}
      />
      <div
        className={`page-cardlist ${langClass}`}
        style={{ display: tab === 'cardlist' ? 'block' : 'none' }}
        dangerouslySetInnerHTML={{ __html: cardlistHtml }}
      />
      <div style={{ display: tab === 'booklet' ? 'block' : 'none' }}>
        <Booklet langClass={langClass} rulebookHtml={rulebookHtml} cardlistHtml={cardlistHtml} />
      </div>
    </>
  );
}
