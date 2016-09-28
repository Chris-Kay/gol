module GameOfLife

    #Represents a live cell
  class Cell
    attr_accessor :x
    attr_accessor :y
    
    def initialize( x, y )
      @x = x
      @y = y
    end
    
    def ==( other )
      @x == other.x && @y == other.y
    end
    
  end

end