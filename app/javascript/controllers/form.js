// Получаем поле ввода телефона
const phoneInput = document.querySelector('input[type="tel"]');
// Добавляем обработчик событий ввода на поле ввода телефона
phoneInput.addEventListener('input', function() {
  // Получаем значение поля ввода телефона
  let value = this.value.replace(/\D/g, '');
  // Добавляем +7 в начало значения, если его там нет
  if (!value.startsWith('7')) {
    value = '7' + value;
  }
  // Форматируем значение в соответствии с требуемым форматом
  let formattedValue = '';
  if (value.length > 0) {
    formattedValue += '+' + value.slice(0, 1);
    if (value.length > 1) {
      formattedValue += '-' + value.slice(1, 4);
      if (value.length > 4) {
        formattedValue += '-' + value.slice(4, 7);
        if (value.length > 7) {
          formattedValue += '-' + value.slice(7, 9);
          if (value.length > 9) {
            formattedValue += '-' + value.slice(9, 11);
          }
        }
      }
    }
  }
  // Устанавливаем отформатированное значение в поле ввода телефона
  this.value = formattedValue;
  // Устанавливаем курсор в конец поля ввода телефона
  this.setSelectionRange(this.value.length, this.value.length);
});
