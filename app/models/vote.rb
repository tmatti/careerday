# == Schema Information
#
# Table name: votes
#
#  id         :integer          not null, primary key
#  career     :string
#  name       :string
#  gender     :string
#  grade      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Vote < ApplicationRecord
end
