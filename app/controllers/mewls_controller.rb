class MewlsController < ApiController
  def index 
    @mewls = Mewl.all.order('created_at DESC')
    render json: @mewls, :include => {:user => {:only => [:username, :name]}}
  end

  def show
    @mewl = Mewl.find(params[:id])
    render json: @mewl, :include => {:user => {:only => [:username, :name]}}
  end

  def create
    @mewl = Mewl.new(mewl_params)

    #Gotta remove this once we get a login setup
    @mewl.user = User.first if @mewl.user.blank?

    if @mewl.save
      render json: @mewl, :include => {:user => {:only => [:username, :name]}}, status: :created
    else
      render json: @mewl.errors, status: :unprocessable_entity
    end
  end

  private

  def mewl_params
    params.require(:mewl).permit(:text, :user)
  end
end
