package BBC::GameOfLife::Cell;

use Moose;

has 'x' => ( is => 'rw', isa => 'Int' );
has 'y' => ( is => 'rw', isa => 'Int' );


1;
