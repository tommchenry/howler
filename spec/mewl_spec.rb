require "rails_helper"

describe Mewl do
  it "has text" do
    expect(subject.attributes).to include("text")
  end

  context "validations" do
    context "length validation" do
      it "is valid if the text is of a reasonable length" do
        user = User.create
        mewl = Mewl.new(text: "This is my first mewl lololol", user: user)

        expect(mewl).to be_valid
      end

      it "is not valid if text is longer than 280" do
        user = User.create
        mewl = Mewl.new(text: "This is a very very very very very
                           very very very very very very very very
                           very very very very very very very very
                           very very very very very very very very
                           very very very very very very very very
                           very very very very very very very very
                           long block of text.",
                           user: user
                       )

        expect(mewl).not_to be_valid
      end
    end
  end
end
