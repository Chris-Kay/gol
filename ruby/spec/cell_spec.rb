require 'spec_helper'

include GameOfLife

describe Cell do
  
  describe "equality" do
    
    it "can identify two identical cells" do
      c1 = Cell.new(1,2)
      c2 = Cell.new(1,2)
      expect(c1).to eq(c2)
    end
    
    it "can identify 2 different cells" do
      c1 = Cell.new(1,2)
      c2 = Cell.new(1,3)
      expect(c1).not_to eq(c2)
    end
 
    it "can identify 2 different cells" do
      c1 = Cell.new(0,2)
      c2 = Cell.new(1,2)
      expect(c1).not_to eq(c2)
    end
     
  end
 
end
