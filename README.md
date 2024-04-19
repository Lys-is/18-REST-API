## Завсимости
Node.js

## Установка
1. Клонирование репозитория 

```git clone https://github.com/Lys-is/18-REST-API.git```

2. Переход в директорию

```cd 18-REST-API```

3. Установка зависимостей

```npm i```

4. Запуск

```node index.js```

## Эндпоинты
### GET
1. /users - Получить всех пользователей
2. /users/:id - Получить пользователя по id

### POST
1. /users - Создать пользователя
   
```
Body - application/json

{
   name: "Your name",
   email: "Your email"
}
```

### PUT
1. /users/:id - Изменить пользователя по id
 ```
Body - application/json

{
   name: "New name",
   email: "New email"
}
```

### DELETE
1. /users - Удалить всех пользователей
2. /users/:id - Удалить пользователя по id
