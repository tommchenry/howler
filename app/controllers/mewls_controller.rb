class MewlsController < ApiController
  def index 
    @mewls = Mewl.all.order('created_at DESC')
    render json: @mewls, :include => {:user => {:only => [:username, :name]}}
  end

  def show
    @mewl = Mewl.find(params[:id])
    render json: @mewl, :include => {:user => {:only => [:username, :name]}}
  end
end
