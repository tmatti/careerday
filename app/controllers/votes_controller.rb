class VotesController < ApplicationController
  def index
    votes_by_career = Vote.all.group(:career).count

    # Group votes by career and gender for the horizontal grouped bar chart
    votes_by_career_and_gender = Vote.all
      .group(:career, :gender)
      .count
      .each_with_object(Hash.new { |h, k| h[k] = {} }) do |(career_gender, count), hash|
        career, gender = career_gender
        hash[career][gender] = count
      end
      .map do |career, genders|
        { career: career }.merge(genders)
      end

    render inertia: "Results", props: {
      votes_by_career: votes_by_career,
      votes_by_career_and_gender: votes_by_career_and_gender
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
      flash[:success] = "Vote submitted successfully!"
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
