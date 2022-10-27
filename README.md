# generated_Elements
just a simple interview project

We have to create React app with the list of the 10 000 generated elements that are stored in Redux. Every single element should contain id field (from 1 000 to 11 000) and the value field with the random-generated value in range from 200 to 1500.

The visual appearance of the page should be divided into 2 parts: in the left part there sould be a block with the width of 300px and the height of 700px that will contain all the elements with the possibility of scrolling. Every element of that list should have 22px height and contain svg icon with size of 18px, id in the middle and on the right side value. In the right part of the page there should be the button with the "Refresh" caption. There should be the "Date of the last refresh: ${date}" sign below the button, where the date is the fixed date of saving values in redux store.

We should call an action that will change the value in 8 000 randomly selected elements to random by clicking the refresh button

generated_Elements
Необходимо создать React приложение, в котором на главной странице будет отображен список из 10000 сгенерированных элементов. Элементы должны хранится в redux store. Каждый элемент списка должен содержать поле id(значение которого от 1000 до 11000) и поле value, значение которого генерируется рандомно в диапазоне от 200 до 1500.

Визуальное представление страницы: В левой части должен быть блок шириной 300px и высотой 700px, в котором должны быть отображены все элементы, с возможностью их скролирования. Каждый элемент списка должен иметь высоту в 22px и содержать в себе контент: слева любая svg иконка размера 18px, по центру id, справа value. Справа этого списка должна быть кнопка с названием "Обновить". Под кнопкой должна быть надпись "Дата последнего обновления: ${date}". Где date - фискированная дата сохранения обновленных данных в redux хранилище.

Нажатие на кнопку "Обновить" должно вызывать action, который у 8000 рандомно выбранных элементов изменит значение value, на другое, рандомное.
