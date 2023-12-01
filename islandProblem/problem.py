# graph problems 
# -DFS/Sinking solution
# or disjoint set problem or Union find

def countIslands(grid):
    count = 0
    for x in range(len(grid)):
        for y in range(len(grid[x])):
            if grid[x][y] == 1: 
                sinkingBoys(grid,x,y)
                count += 1
    return count

def sinkingBoys(grid, x, y):
    if x >= len(grid) or y >= len(grid[x]) or grid[x][y] == 0:
        return 
    grid[x][y] = 0
    sinkingBoys(grid, x+1, y)
    sinkingBoys(grid, x, y+1)

def testCase3():
    return [
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 0],
    ], 1
def testCase1():
    return [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ], 1

def testCase2():
    return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ], 2



def testCase4():
    return [
        [0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
    ], 4

def testCase5():
    return [
        [1, 1, 1, 0, 0],
    ], 1

def testCase6():
    return [
        [0, 0, 0, 0, 0],
    ], 0

def main():
    cases = [testCase1, testCase2, testCase3, testCase4, testCase5, testCase6]
    for idx, testCase in enumerate(cases):
        inpt, expected = testCase()
        if countIslands(inpt) == expected:
            print(idx+1, "Passed")
        else:
            print(idx+1, "Failed")

if __name__ == '__main__':
    main()