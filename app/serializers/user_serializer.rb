class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :zipcode, :password_digest

  has_many :watchlists
  
end
