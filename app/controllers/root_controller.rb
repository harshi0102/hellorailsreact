class RootController < ApplicationController
  def index
    @random_greeting = Greeting.all.sample.text
  end

  def greeting
    random_greeting = Greeting.all.sample.text
    render json: { greeting: random_greeting }
  end
end
