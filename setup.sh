#!/bin/bash

# Установка зависимостей
echo "Установка зависимостей..."
npm install

# Создание базы данных
echo "Создание базы данных..."
createdb multipage_website || true

# Применение миграций Prisma
echo "Применение миграций базы данных..."
npx prisma migrate dev --name init

# Генерация клиента Prisma
echo "Генерация клиента Prisma..."
npx prisma generate

# Запуск сервера разработки
echo "Запуск сервера разработки..."
npm run dev 