class MewlsController < ApiController
  def index 
    @mewls = Mewl.all
    render json: @mewls.to_json
  end

  def show
    @mewl = Mewl.find(params[:id])
    render json: @mewl.to_json
  end
end
