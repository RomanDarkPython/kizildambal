document.addEventListener("DOMContentLoaded", function () {
    const rusButton = document.getElementById("rus-btn");
    const mainText = document.getElementById("main-text");
    const languageButtons = document.getElementById("language-buttons");
    const extraButtonsContainer = document.getElementById("extra-buttons");
  
    let selectedFirstIndex = null;
  
    // При выборе "Русский" — показываем первую форму с 5 качествами
    rusButton.addEventListener("click", function () {
      mainText.textContent = "Какая вы?";
      languageButtons.innerHTML = "";
      extraButtonsContainer.innerHTML = "";
  
      const qualities = [
        "Справедливая",
        "Решительная",
        "Отважная",
        "Бунтарка",
        "Нежная"
      ];
  
      qualities.forEach((text, index) => {
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
    });
  
    // Второй вопрос
    function showSecondQuestion() {
      mainText.textContent = "Что вам больше всего в себе нравится?";
      extraButtonsContainer.innerHTML = "";
  
      const traits = ["глаза", "улыбка", "характер", "волосы", "другое"];
  
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
  
    // Финальный экран
    function showFinalResult() {
      extraButtonsContainer.innerHTML = "";
  
      const finalMessages = [
        "Вы — Асель! Бесстрашная, справедливая и благородная. У вас горячее и храброе сердце.",
        "Вы — Динара! Решительная и сильная, готовая постоять за себя в любой ситуации.",
        "Вы как Бота! Отважная и смелая, с огромным чувством собственного достоинства! Вы всегда себя защитите!",
        "Вы — Макпал! Очаровательная бунтарка с красивыми глазами и горячим сердцем!",
        "Вы — Аниша! Нежный трепетный цветок. Ваша осторожность и робкость — ваше женское оружие!"
      ];
  
      const resultText = finalMessages[selectedFirstIndex] || "Спасибо за прохождение теста!";
      mainText.textContent = resultText;
  
      // Кнопка "Пройти заново"
      const restartBtn = document.createElement("button");
      restartBtn.className = "lang-btn fade-in";
      restartBtn.textContent = "Пройти заново";
      restartBtn.style.marginTop = "20px";
      restartBtn.addEventListener("click", function () {
        resetTest();
      });
      extraButtonsContainer.appendChild(restartBtn);
    }
  
    // Сброс теста к начальному виду
    function resetTest() {
      selectedFirstIndex = null;
      mainText.textContent = "Выберите язык";
  
      languageButtons.innerHTML = `
        <button class="lang-btn" id="rus-btn">Русский</button>
        <button class="lang-btn">Қазақша</button>
      `;
  
      extraButtonsContainer.innerHTML = "";
  
      // Повторно вешаем обработчик для "Русский"
      document.getElementById("rus-btn").addEventListener("click", function () {
        rusButton.click();
      });
    }
  });