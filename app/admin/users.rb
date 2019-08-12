ActiveAdmin.register User do
  permit_params :id, :name, :username
end
