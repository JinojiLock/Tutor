class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      send_message_to_telegram(@user)
      redirect_to root_path, notice: "Ваша заявка была успешно отправлена! В ближайшее время мы вам перезвоним."
    else
      puts @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :number_class, :lesson, :record_date, :lesson_type, :number_phone, :time_start, :time_end)
  end

  def send_message_to_telegram(user)
    bot_token = ENV["TELEGRAM_BOT_TOKEN"]
    chat_id = ENV["TELEGRAM_CHAT_ID"]
    message = <<~MESSAGE
      Новый пользователь:
      Имя: #{user.first_name}
      Фамилия: #{user.last_name}
      Класс: #{user.number_class}
      Урок: #{user.lesson}
      Дата записи: #{user.record_date}
      Время записи: C #{user.time_start} до #{user.time_end}
      Тип занятий: #{user.lesson_type}
      Номер телефона: #{user.number_phone}
    MESSAGE
    url = "https://api.telegram.org/bot#{bot_token}/sendMessage"
    body = {
      chat_id: chat_id,
      text: message
    }
    HTTParty.post(url, body: body)
  end
end
