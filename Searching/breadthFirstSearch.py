# Breadth-first Search
# Used for graphs to find:
# 1) If there is a path between two nodes
# 2) the shortest path from two nodes.

# Utilizes a Queue to maintain the order of nodes to search by degree

graph = {}

graph["you"]= ['alice', 'bob', 'claire']

# print(graph) # -> {'you': ['alice', 'bob', 'claire']}

graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'johnny']
graph['anuj']= []
graph['peggy']= []
graph['thom']= []
graph['johnny']= []

# print(graph) # -> {'you': ['alice', 'bob', 'claire'], 'bob': ['anuj', 'peggy'], 'alice': ['peggy'], 'claire': ['thom', 'johnny'], 'anuj': [], 'peggy': [], 'thom': [], 'johnny': []}

# Creating a queue 
from collections import deque


def search(name):
  search_queue = deque() # Creates a new instance of deque
  search_queue += graph['you'] # Adds all first degree nodes to queue
  searched = []
  while search_queue:
    person = search_queue.popleft() # Grabs first person from queue
    if not person in searched:
      if person_is_seller(person):
        print(person + ' is a mango seller')
        return True
      else:
        search_queue += graph[person]
        searched.append(person)
  return False

def person_is_seller(name):
  return name[-1] == 'm'

search('you')