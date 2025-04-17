document.addEventListener("DOMContentLoaded", function () {
  const rusButton = document.getElementById("rus-btn");
  const kazButton = document.getElementById("kaz-btn");
  const mainText = document.getElementById("main-text");
  const languageButtons = document.getElementById("language-buttons");
  const extraButtonsContainer = document.getElementById("extra-buttons");

  let selectedFirstIndex = null;
  let currentLang = null; // 'ru' или 'kz'

  // Общая функция запуска
  function startTest(lang) {
    currentLang = lang;
    selectedFirstIndex = null;
    languageButtons.innerHTML = "";
    extraButtonsContainer.innerHTML = "";

    const qualities = {
      ru: ["Справедливая", "Решительная", "Отважная", "Бунтарка", "Нежная"],
      kz: ["Әділ", "Қайсар", "Батыл", "Бұзық", "Нәзік"]
    };

    const texts = qualities[lang];

    mainText.textContent = lang === "ru" ? "Какая вы?" : "Сіз қандайсыз?";

    texts.forEach((text, index) => {
      const btn = document.createElement("button");
      btn.className = "lang-btn fade-in";
      btn.textContent = text;
      btn.style.animationDelay = `${index * 0.1}s`;
      btn.addEventListener("click", function () {
        selectedFirstIndex = index;
        showSecondQuestion();
      });
      extraButtonsContainer.appendChild(btn);
    });
  }

  // Второй вопрос
  function showSecondQuestion() {
    mainText.textContent =
      currentLang === "ru"
        ? "Что вам больше всего в себе нравится?"
        : "Өзіңізге ең ұнайтын қасиетіңіз қандай?";

    extraButtonsContainer.innerHTML = "";

    const traits = currentLang === "ru"
      ? ["глаза", "улыбка", "характер", "волосы", "другое"]
      : ["көздер", "жымию", "мінез", "шаш", "басқа"];

    traits.forEach((text, index) => {
      const btn = document.createElement("button");
      btn.className = "lang-btn fade-in";
      btn.textContent = text;
      btn.style.animationDelay = `${index * 0.1}s`;
      btn.addEventListener("click", function () {
        showFinalResult();
      });
      extraButtonsContainer.appendChild(btn);
    });
  }

  // Финальный результат
  function showFinalResult() {
    extraButtonsContainer.innerHTML = "";

    const results = {
      ru: [
        "Вы — Асель! Бесстрашная, справедливая и благородная. У вас горячее и храброе сердце.",
        "Вы — Динара! Решительная и сильная, готовая постоять за себя в любой ситуации.",
        "Вы как Бота! Отважная и смелая, с огромным чувством собственного достоинства! Вы всегда себя защитите!",
        "Вы — Макпал! Очаровательная бунтарка с красивыми глазами и горячим сердцем!",
        "Вы — Аниша! Нежный трепетный цветок. Ваша осторожность и робкость — ваше женское оружие!"
      ],
      kz: [
        "Сіз — Әселсіз! Арыстан мінезді, әділ, абыройлы. Сіз жалындаған батыр жүректің иесісіз.",
        "Сіз — Динарасыз! Батыл және күшті. Өзін әрқашан қорғауға дайын.",
        "Сіз — Ботагөзсіз!Айбынды, батыл және қадір-қасиеті мол! Сіз өзіңізді қай кезде болса да қорғауға дайынсыз",
        "Сіз — Мақпалсыз! Тартымды да қырсық қыз. Сұлу көзі мен ержүрек мінезі бір-біріне үйлесіп тұр!",
        "Сіз — Анишасыз! Нәзік жайқалған гүл сияқты. Ұялшақтық пен сақ болу — сіздің қаруыңыз."
      ]
    };

    const finalMessage = results[currentLang][selectedFirstIndex];
    mainText.textContent = finalMessage;

    const restartBtn = document.createElement("button");
    restartBtn.className = "lang-btn fade-in";
    restartBtn.textContent = currentLang === "ru" ? "Пройти заново" : "Қайта өту";
    restartBtn.style.marginTop = "20px";
    restartBtn.addEventListener("click", function () {
      resetTest();
    });
    extraButtonsContainer.appendChild(restartBtn);
  }

  // Сброс
  function resetTest() {
    selectedFirstIndex = null;
    currentLang = null;
    mainText.textContent = "Выберите язык";

    languageButtons.innerHTML = `
      <button class="lang-btn" id="rus-btn">Русский</button>
      <button class="lang-btn" id="kaz-btn">Қазақша</button>
    `;

    extraButtonsContainer.innerHTML = "";

    document.getElementById("rus-btn").addEventListener("click", () => startTest("ru"));
    document.getElementById("kaz-btn").addEventListener("click", () => startTest("kz"));
  }

  // Первичная инициализация
  rusButton.addEventListener("click", () => startTest("ru"));
  kazButton.addEventListener("click", () => startTest("kz"));
});