# Find which radio stations will cover the greatest amount of states with the lowest overlap

# List of states that need to be covered
statesNeeded = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]) # Array gets converted into a set

# List of stations to choose from
stations = {
  "kone" : set(["id", "nv", "ut"]),
  "ktwo" : set(["wa", "id", "mt"]),
  "kthree" : set(["or","nv","ca"]),
  "kfour" : set(["nv","ut"]),
  "kfive" : set(["ca","az"])
} 

# print(stations)

# Set to hold the final selection of stations
finalStations = set()

# Loop through the stations and compare them to see which one will cover the most uncovered states
while statesNeeded:
  bestStation = None 
  statesCovered = set()
  for station, states in stations.items():
    covered = statesNeeded & states # union between the states within the current station and the states that need to be covered.
    if len(covered) > len(statesCovered):
      bestStation = station
      statesCovered = covered
  
  statesNeeded -= statesCovered
  finalStations.add(bestStation)

print(finalStations)