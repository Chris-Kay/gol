package BBC::GameOfLife::Life;

use Moose;
use BBC::GameOfLife::Cell;

has 'live_cells' => ( is => 'rw', isa => 'ArrayRef' );


sub cell_should_survive {
  my ($self, $num_neighbours) = @_;

  die "Unsupported operation.";
}


1;
