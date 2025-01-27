import React, { useState,useEffect } from "react";


const TypingSpeed = () => {
  // حفظ حالات التطبيق
  const [quotes, setQuotes] = useState([
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends."
  ]);
  const [quote, setQuote] = useState("");
  const [inputText, setInputText] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  // بدء الاختبار
  const startTest = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setInputText("");
    setTimeLeft(60);
    setWordsTyped(0);
    setTotalCharacters(0);
    setCorrectCharacters(0);
    setIsTestRunning(true);

    if (timer) clearInterval(timer); // تأكد من إيقاف أي مؤقت سابق
    startTimer();
  };

  // تشغيل المؤقت
  const startTimer = () => {
    const newTimer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(newTimer);
          setIsTestRunning(false);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    setTimer(newTimer);
  };

  // تحديث الإحصائيات أثناء الكتابة
  const updateResults = (text) => {
    setTotalCharacters(text.length);
    setCorrectCharacters(
      Array.from(text).filter((char, index) => char === quote[index]).length
    );
    setWordsTyped(text.trim().split(/\s+/).length);
  };

  // التعامل مع التغيير في النص المدخل
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    updateResults(text);
  };

  // حساب سرعة الكتابة والدقة
  const completeTest = () => {
    clearInterval(timer);
    setIsTestRunning(false);

    const wpm = Math.round((wordsTyped * 60) / (60 - timeLeft));
    const accuracy = totalCharacters
      ? Math.round((correctCharacters / totalCharacters) * 100)
      : 100;

    return { wpm, accuracy };
  };

  // استخدام التأثير لتشغيل الاختبار عند تحميل المكون
  useEffect(() => {
    startTest();
    // إيقاف المؤقت عند الخروج من المكون
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Typing Speed Test</h1>
      <p id="quote">{quote}</p>
      <textarea
        id="input-box"
        placeholder="Start typing here..."
        value={inputText}
        onChange={handleInputChange}
        disabled={!isTestRunning}
      ></textarea>
      <div className="stats">
        <p><strong>Time Left:</strong> <span id="time">{timeLeft}</span> seconds</p>
        <p><strong>Words Typed:</strong> <span id="words">{wordsTyped}</span></p>
        <p><strong>Accuracy:</strong> <span id="accuracy">{Math.round((correctCharacters / totalCharacters) * 100) || 0}</span>%</p>
      </div>
      <div className="buttons">
        <button onClick={startTest}>Restart</button>
        <button onClick={() => completeTest()} disabled={isTestRunning}>
          Complete
        </button>
      </div>
      {!isTestRunning && (
        <div id="results">
          <h3>Results:</h3>
          <p><strong>WPM:</strong> {completeTest().wpm}</p>
          <p><strong>Accuracy:</strong> {completeTest().accuracy}%</p>
        </div>
      )}
    </div>
  );
};

export default TypingSpeed;