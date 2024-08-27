import './style.css';

// преобразуем в верхний регистр
text.oninput = function () {
  this.value = this.value.toUpperCase();
};

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
  const success = document.querySelector('.success');

  navigator.clipboard.writeText(text.value);
  success.style.opacity = '100%';
  setTimeout(() => (success.style.opacity = ''), 3000);
});

// let result = value.split('')
//     .map(function(item, index, arr) {
//         //console.log(item, arr[index+1], item == arr[index+1])
//         let count = 1
//         for(let key of arr){
//             if(key === arr[index+1]){
//                 count++
//             } else {
//                 return count == 1 ? `${key}` : `${count}${item}`
//             }
//             count = 1
//         }
//     }).join('')

// console.log(result)
//console.log('R' === undefined)

// for(let key of result) {
//     console.log(key)
// }
