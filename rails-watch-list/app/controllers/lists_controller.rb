class ListsController < ApplicationController
  def index
    # get all the lists from the DB
    @lists = List.all
  end
end
