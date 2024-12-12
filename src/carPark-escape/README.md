# carPark

## Scenarios

### No car scenario

Given our car park has no car
When we call the escape
Then we will receive an empty array

### No stairs scenario

Given our car park has a floor without stairs
When we call the escape
Then we will receive an error as follows [ERR]

### Car is on ground floor scenario

Given our car is parked on the ground floor and the escape is 4 spots to the right
When we call the escape
Then we will receive the the following escape route ["R4"]

### Car is on escape spot scenario

Given our car is parked on the escape spot
When we call the escape
Then we will receive the following escape route ["R0"]

### The car is parked on the second floor scenario

Given our car is parked on the seconde floor and the stairs are 4 spots to the left
When we call the escape
Then we will receive the the following escape route ["L4", "D1", "R4"]
