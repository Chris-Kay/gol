require 'spec_helper'

include GameOfLife

describe Life do
  
  it "can be initialized with an array of cells" do
    initial_state = [Cell.new(1, 1), Cell.new(2, 2)]
    life = Life.new(initial_state)
    expect(initial_state).to eq(life.live_cells.to_a)
  end

  it "can test underpopulation" do
    expect(Life.cell_should_survive(0)).to be false
    expect(Life.cell_should_survive(1)).to be false
  end
end
