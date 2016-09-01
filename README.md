# Random product
Допустим, сервер по запросу присылает массив элементов в формате JSON
Необходимо сделать SPA-приложение на Angular.js, которое должно выводить в случайном порядке карточку товара с возможностью лайкнуть или дислайкнуть соответствующий товар. Также должна быть страница на которой пользователь может посмотреть список товаров, которые он лайкнул и дислайкнул, удалить из списка или изменить свое решение. После того, как пользователь просмотрел все товары, должно появиться уведомление о том, что товаров больше нет.
Желательно сделать приложение в node.js окружении.
Плюсом будет реализация бэкенда на node.js, который будет отдавать JSON с товарами и обрабатывать пользовательские лайки/дислайки: добавить в JSON товара поля likes, dislikes, где будут храниться суммарные значения числом.
