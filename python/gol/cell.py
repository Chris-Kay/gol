class Cell(object):
    def __init__(self, x_pos = 0, y_pos = 0):
        self.x_pos = x_pos
        self.y_pos = y_pos

    def __eq__(self, other):
        return other.__hash__() == self.__hash__()

    def __hash__(self):
        return hash((self.x_pos, self.y_pos))
