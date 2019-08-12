# == Schema Information
#
# Table name: mewls
#
#  id         :bigint           not null, primary key
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
# Indexes
#
#  index_mewls_on_user_id  (user_id)
#

class Mewl < ApplicationRecord
  belongs_to :user
end
