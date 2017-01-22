from gol import Life
from gol import Cell

import mock
import unittest

class LifeTests(unittest.TestCase):
    def setUp(self):
        self.live_cells = set()
        self.life = Life(self.live_cells)

    def test_underpopulation(self):
        self.assertFalse(self.life.cell_should_survive(0), "Should have returned false as 0 results in cell death.")
        self.assertFalse(self.life.cell_should_survive(1), "Should have returned false as 1 results in cell death.")
