import telebot
from telebot import types
import webbrowser


bot = telebot.TeleBot('6535370472:AAFjVJZ-3lej9rfuV37nyqIk7mFutNH69AQ')


@bot.message_handler(commands=['start'])
def main(message):
    bot.send_message(message.chat.id,f'Привет {message.from_user.first_name}') #retern first name

@bot.message_handler(commands=['help'])
def help(message):
    bot.send_message(message.chat.id,'Написать о помощи!') #standart

@bot.message_handler(commands=['main'])
def general(message):
    bot.send_message(message.chat.id,'Главное меню енотов')

@bot.message_handler(commands=['site','website'])
def site(message):
    webbrowser.open('https://www.love-live-life.com')


# @bot.message_handler(commands=['info']) # command info
# def main(message):
#     bot.send_message(message.chat.id,message)


@bot.message_handler(content_types=['photo', 'audio', 'video'])
def get_photo(message):
    markup = types.InlineKeyboardMarkup()
    bt1 = types.InlineKeyboardButton('Можете перейти на сайт', url='https://www.love-live-life.com')
    markup.row(bt1)
    bt2 = types.InlineKeyboardButton('Удалить фото', callback_data='delite')
    bt3 = types.InlineKeyboardButton('Изменить фото', callback_data='edit')
    markup.row(bt2,bt3)
    bot.reply_to(message, 'Спасибо за данные если хотите узнать о нас больше', reply_markup=markup) #  data and bottom

@bot.callback_query_handler(func=lambda callback: True )
def callback_massage(callback):
    if callback.data == 'delite':
        bot.delete_message(callback.message.chat.id, callback.message.message_id)# delite data
    elif callback.data == 'edit':
        bot.edit_message_text('Edit text', callback.message.chat.id, callback.message.message_id)#edit data


@bot.message_handler()
def info(message):
    if message.text.lower() == 'привет':
        bot.send_message(message.chat.id,f'Имя твое, {message.from_user.first_name}')#retern id
    elif message.text.lower() == 'id':
        bot.reply_to(message,f'ID: {message.from_user.id}')#send id


bot.polling(none_stop=True)

