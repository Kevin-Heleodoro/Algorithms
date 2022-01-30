# Searching through weighted graphs. 
# Will find the "cheapest" way to get to the final node.

# Steps for the algo
# 1. While there are nodes to process
# 2. Grab closest node to start
# 3. Update costs for the neighbors
# 4. If neighbor costs were updated, update parents too
# 5. Mark the node as processed

# Hash table for nodes
graph = {} # Initiate graph

graph["start"] = {} # Starting node
# Neighbor nodes with distance to each
graph["start"]["a"] = 6 
graph["start"]["b"] = 2

# print(graph["start"].keys()) # dict_keys(['a', 'b'])

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5

graph["fin"] = {} # Ending node

# print(graph) #{'start': {'a': 6, 'b': 2}, 'a': {'fin': 1}, 'b': {'a': 3, 'fin': 5}, 'fin': {}}

# Hash table for costs
infinity = float("inf")
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

# Hash table for parents
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

# array to store nodes that have been processed
processed = []

# Function to find the next lowest cost node that has not been processed
def findLowestCostNode(costs):
  lowestCost = float("inf")
  lowestCostNode = None
  for node in costs: # Goes through every node in costs hash table
    cost = costs[node]
    if cost < lowestCost and node not in processed: # If its the next lowest costs which has NOT been processed ...
      lowestCost = cost # ...set as new lowest
      lowestCostNode = node
  return lowestCostNode


node = findLowestCostNode(costs)
while node is not None:
  cost = costs[node]
  neighbors = graph[node]
  for n in neighbors.keys():
    newCost = cost + neighbors[n]
    if costs[n] > newCost:
      costs[n] = newCost
      parents[n] = node
  processed.append(node)
  node = findLowestCostNode(costs)


# print(dijkstrasAlgo(graph))
# print(findLowestCostNode(costs))

print(costs["fin"]) # lowest cost to get to "fin" is 6 
print(parents) # parents have been updated to show the fastest progression