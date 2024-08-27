// преобразуем в верхний регистр
// text.oninput = function () {
//   this.value = this.value.toUpperCase();
// };

text.addEventListener('input', function () {
  this.value = this.value.toUpperCase();
}, false);


coding.addEventListener('tachstart', () => {
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
})

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
copy.addEventListener('tachstart', () => {
  navigator.clipboard.writeText(text.value);
  const success = document.querySelector('.success');

  if (text.value != '') {
    success.style.opacity = '100%';
    success.style.height = '100%';
    success.style.transition = 'all .4s ease-in-out';
    setTimeout(
      () => (
        (success.style.opacity = ''),
        (success.style.height = ''),
        (text.value = '')
      ),
      3000
    );
  }
})

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(text.value);
  const success = document.querySelector('.success');

  if (text.value != '') {
    success.style.opacity = '100%';
    success.style.height = '100%';
    success.style.transition = 'all .4s ease-in-out';
    setTimeout(
      () => (
        (success.style.opacity = ''),
        (success.style.height = ''),
        (text.value = '')
      ),
      3000
    );
  }
});
