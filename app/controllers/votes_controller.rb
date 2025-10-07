class VotesController < ApplicationController
  def index
    votes = Vote.all
    render inertia: "Results", props: {
      votes: votes
    }
  end

  def new
    @vote = Vote.new
    render inertia: "Vote", props: {
      vote: @vote
    }
  end

  # POST /votes or /votes.json
  def create
    @vote = Vote.new(vote_params)

    respond_to do |format|
      if @vote.save
        format.html { redirect_to @vote, notice: "Vote was successfully created." }
        format.json { render :show, status: :created, location: @vote }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @vote.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def vote_params
      params.fetch(:vote, {})
    end
end
