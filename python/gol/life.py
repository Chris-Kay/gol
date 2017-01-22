class Life(object):
    def __init__(self, live_cells = set()):
        self.live_cells = live_cells

    def cell_should_survive(self, neighbour_count):
        raise NotImplementedError("Abort: Function has not been implemented.")
