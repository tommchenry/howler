require "rails_helper"

describe User do
  it "has a username" do
    expect(subject.attributes).to include("username")
  end

  it "has a name" do
    expect(subject.attributes).to include("name")
  end

  it "has a password" do
    expect(subject.attributes).to include("password_digest")
  end
end
