// преобразуем в верхний регистр
text.addEventListener('input', function () {
  this.value = this.value.toUpperCase();
}, false);

// шифрование строки
coding.addEventListener('click', () => {
  const value = text.value; // строка для шифрования
  let count = 1; // кол-во символов подряд
  let result = ''; // результат

  // перебираем строку
  for (let i = 0; i < value.length; i++) {
    if (value[i] === value[i + 1]) {
      count++;
    } else {
      count > 1 ? (result += count + value[i]) : (result += value[i]);
      count = 1;
    }
  }

  text.value = result; // результат шифрования выводим в <textarea>
});

// копирование шифра в буфер обмена
copy.addEventListener('click', () => {
  navigator.clipboard.writeText(text.value).then(() => {
    const success = document.querySelector('.success');
    success.style.opacity = '100%';
    success.style.height = '100%';
    success.style.transition = 'all .4s ease-in-out';
    setTimeout(() => {
      text.value = '';
    }, 3000);
  }).catch((error) => {
    console.error('Error copying text to clipboard:', error);
  });
});
