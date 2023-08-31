# TODOlist
TODO list, который позволяет создавать, отмечать сделанными и удалять задачи
реализован на HTML, CSS, чистом JS, данные хранятся в localstorage, можете не волноваться, что с ними что-то случится при закрытии страницы или выключении компьютера

реализован следующий функционал:
ввод данных либо при нажатии на кнопку "Добавить" либо при нажатии на enter
"Доп. кнопки" открывает 6 кнопок, работа которых визуально понятна, но всё же уточню
<ul>
  <li>"удалить последний" - удаляет последний элемент в списке</li>
  <li>"удалить первый" - удаляет первый элемент в списке</li>
  <li>"удалить сделанные" - определяет, какие элементы помечены, как сделанные и удаляет их</li>
  <li>"выделить четные" - выделяет все четные элементы в списке (отсчет начинается с 1)</li>
  <li>"выделить нечетные" - выделяет все нечетные элементы в списке (отсчет начинается с 1)</li>
  <li>"снять выделения" - убирает все выделения с четными\нечетными элементами</li>
</ul>
функцию с кнопки "Complete" перенес в само приложение с целью упрощения работы, при необходимости могу переделать, чтобы пользователь сначала выбирал нужные ему элементы, а затем они опускались в низ списка, но сейчас это работает таким образом, что при отметке о выполнении данного пункта, он автоматически опускается в конец списка
так же кнопка которая удаляет элемент (Х) автоматически создается напротив нового созданного элемента в списке
