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
    vote = Vote.new(vote_params)

    if vote.save
      redirect_to root_url
    else
      redirect_to new_vote_url, inertia: { errors: vote.errors }
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def vote_params
      params.require(:vote).permit(:name, :grade, :gender, :career)
    end
end
