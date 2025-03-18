/*
03/17/25
Building Arrays - 3: Practice: Mixed-Type Arrays

Instructions
Create a program to store and display user profiles for a basic application. Your
program should store and display one profile that contains the following:
● User name
● Age
● Subscription status
● User’s location
● User’s hobbies (at least two)
Complete the following tasks in order to create the program:

Task 1: Create the Profile. Write code to create a profile array containing the
required elements. Fill the array with data for one fictional user profile. Remember
to include all the elements (user name, age, subscription status, user’s location,
user’s hobbies).
Task 2: Access and Log Profile Details. Use console.log() to access and display
the following:
● The user’s name.
● The second hobby from the hobbies array.
Task 3: Modify the Profile. Make the following updates:
● Update the user’s age to a new value.
● Add a new hobby to the hobbies array.
Task 4: Display the Updated Profile. Log the entire updated profile to verify the
changes.
*/

// Task 1 Create
let userProfile = ["Jill Albano", 23, false, { city: "Montgomery" }, ["fishing", "pilates"]];

// Task 2 Access and Log
console.log(userProfile[0]); // user's name - Jill Albano
console.log(userProfile[4][1]); // second hobby - pilates

//Task 3 Modify
userProfile[1] = 37; // update user's age to a new value - 37
userProfile[4].push("knitting"); // add a new hobby - knitting

// Task 4 Display
console.log(userProfile);
