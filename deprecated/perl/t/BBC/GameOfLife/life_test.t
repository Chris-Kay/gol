#!/usr/bin/env perl

use strict;
use warnings;

use Test::More;

require_ok('BBC::GameOfLife::Life');


my @cells;

push(@cells, BBC::GameOfLife::Cell->new('x'=>1, 'y'=>1));
push(@cells, BBC::GameOfLife::Cell->new('x'=>2, 'y'=>2));

my $life = BBC::GameOfLife::Life->new('live_cells' => \@cells);


# Test initialised OK
is(@{$life->live_cells}, 2);

# Test underpopulation
is($life->cell_should_survive(0), 0);
is($life->cell_should_survive(1), 0);


done_testing();

