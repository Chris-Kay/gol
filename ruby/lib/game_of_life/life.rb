require 'set'

module GameOfLife
  
  class Life

    attr_accessor :live_cells

    #Initialize with an array of Cell objects
    def initialize(initial_live_cells)
      @live_cells = initial_live_cells.to_set
    end

    def self.cell_should_survive(num_neighbours)
      raise "Not Implemented"
    end  
    
  end
  
end
