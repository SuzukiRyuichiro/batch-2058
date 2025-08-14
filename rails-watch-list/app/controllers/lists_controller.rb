class ListsController < ApplicationController
  def index
    # get all the lists from the DB
    @lists = List.all
  end

  def show
    # find the list we want to display
    @list = List.find(params[:id])
  end
end
