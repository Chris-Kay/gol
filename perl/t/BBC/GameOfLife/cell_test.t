#!/usr/bin/env perl

use strict;
use warnings;

use Test::More;

require_ok('BBC::GameOfLife::Cell');

my $cell = BBC::GameOfLife::Cell->new(x => 2, y =>3);
is($cell->x, 2, 'Got x value');
is($cell->y, 3, 'Got y value');

done_testing();

