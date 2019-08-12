# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string
#  username        :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_secure_password
end
