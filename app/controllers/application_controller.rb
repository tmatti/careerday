class ApplicationController < ActionController::Base
  inertia_share do
    {
      flash: {
        success: flash[:success],
        error: flash[:error],
        notice: flash[:notice]
      }
    }
  end
end
