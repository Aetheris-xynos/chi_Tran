import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [opened, setOpened] = useState(false);

  const handleStart = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.play().catch(() => { });
    }

    setFadeOut(true);
    setTimeout(() => setStarted(true), 800);
  };

  return (
    <div className="envelope-page">
      <audio
        id="bg-music"
        src="https://docs.google.com/uc?export=download&id=1ztix9pGZQd-exoMfgLeQ3HCKtVsNF0US"
        preload="auto"
      />
      {!started && (
        <div className={`page-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <div className="start-overlay">
            <button className="start-button" onClick={handleStart}>
              👉 Bấm vào đây để bắt đầu
            </button>
          </div>
        </div>
      )}

      {started && (
        <div
          className={`envelope ${started ? 'show' : ''} ${opened ? 'opened' : ''}`}
          onClick={() => {
            if (!opened) setOpened(true);
          }}
        >
          <div className="flap" />
          <div className="seal" />
          <div className="letter">
            <div className="location-date">
              Thành phố Hồ Chí Minh, ngày 31 tháng 7 năm 2025
            </div>
            <p>Đôi lời gửi đến chị Nguyễn Lê Nhã Trân,</p>
            <p>
              Cảm ơn chị thời gian qua đã đồng hành, nói chuyện với em lúc công ty.
              Em biết là có những lúc em có chọc và có những từ ngữ có phần tổn thương chị nên là cho em xin lỗi chị thật nhiều!
              Cảm ơn vì những lời khuyên của chị.
              Cám ơn vì món quà sinh nhật và những ly nước mà chị tặng em mấy hôm chở chị đi làm nha.
              Dù từ giờ không còn làm chung với nhau nữa nhưng mà thời gian làm việc, những kỉ niệm,
              những dịp đi chơi cùng nhau sẽ luôn là một kí ức thật sự tuyệt vời trong em.
              Vậy là từ giờ cũng hết được nghe chị bật lễ đường lên nghe nữa rồi.
              Cũng như là hết được ăn cơm chó của chị với anh Kiên vào giờ ăn trưa rồi (dù nhìn khá là cay), còn ngồi xà nẹo xà nẹo lúc làm việc nữa chứ?
            </p>
            <p>
              Cuộc đời vốn dĩ là vậy, em và chị vốn là những con người hoàn toàn xa lạ đến, gặp gỡ, đồng hành và chia sẻ cùng nhau trên một đoạn đường trên cuộc đời.
              Dù biết chia xa là việc phải có nhưng thật sự khi em viết mấy dòng này thì em thật sự rất là buồn khi phải tạm biệt một người đồng nghiệp, một người bạn như chị.
              Thôi thì lời cuối em xin chúc chị hiền của em luôn vững vàng trên con đường mà chị sẽ chọn.
              Luôn gặp nhiều may mắn, mạnh mẽ và luôn vững vàng trước sóng gió.
              Nếu có duyên gặp lại em mong tụi mình sẽ có cơ hội làm đồng nghiệp, làm bạn chung với nhau một lần nữa.
              Chúc chị thật nhiều sức khỏe, hạnh phúc và luôn vững tin với tương lai chị đã chọn.
              Cũng như chúc chị sẽ đồng hành với anh Kiên trên một đoạn đường thật dài và thật hạnh phúc nha.
            </p>
            <p>
              Nếu có cần gì giúp thì cứ nói, em sẵn sàng giúp cho nếu trong khả năng của em.
              Đến đây thôi em xin tạm biệt chị và hẹn gặp lại chị vào một ngày không xa!
            </p>
            <div className="signature">
              Trân trọng,
              <br />
              Nguyễn Gia Hy
            </div>
            <div className="slider">
              <div className="slide-track">
                <div className="slide"><img src="./picture/1.jpg" alt="Ảnh 1"/></div>
                <div className="slide"><img src="./picture/2.jpg" alt="Ảnh 1"/></div>
                <div className="slide"><img src="./picture/3.jpg" alt="Ảnh 1"/></div>
                <div className="slide"><img src="./picture/4.jpg" alt="Ảnh 1"/></div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
