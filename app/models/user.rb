class User < ApplicationRecord
    validates :number_class, numericality: { only_integer: true, greater_than_or_equal_to: 5, less_than_or_equal_to: 11 }
    validates :lesson, inclusion: { in: %w[Обществознание Математика Физика] }
    validates :record_date, presence: true
    validates :number_phone, format: { with: /\A\+7-\d{3}-\d{3}-\d{2}-\d{2}\z/ }
end
