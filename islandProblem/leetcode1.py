1


        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],

for x in range(grid):
        for y in range(grid[x]):
                if grid[x][y] == 1:
                        count += 1
                        sink(x, y)