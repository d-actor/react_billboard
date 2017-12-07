class Api::SongsController < ApplicationController
  before_action :set_song, only: [:update, :destroy]

  def index
    render json: Song.all
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
      render json: { errors: song.errors }, status: 418
    end
  end

  def update
    song.update(:title)
    render json: song
  end

  def destroy
    song.destroy
  end

  private

  def song_params
    params.require(:song).permit(:title)
  end

  def set_song
    song = Song.find(params[:id])
  end
end
