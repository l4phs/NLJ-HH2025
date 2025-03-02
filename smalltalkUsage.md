Smalltalk Information:

**Overall**

Smalltalk was used in this application via Pharo and was used to process data regarding how much steps a user walked. 
Calling the following method in VSCode with the command (& "C:\Users\natha\Documents\Pharo\vms\130-x64\Pharo.exe" "C:\Users\natha\Documents\Pharo\images\Pharo 13.0 
64bit (development version, latest)\Working.image" eval "PandaList new exportDataToCSV: 'C:\\Users\\natha\\Downloads\\Export.csv'.") updates the CSV. This data is then used 
for our average page to supply the statistics and the backend of our program.

![image](https://github.com/user-attachments/assets/bca5e92b-138c-4e9b-8302-90fb6454b419)

The updated csv sheet looks like: 
![image](https://github.com/user-attachments/assets/3adf3968-cea4-4314-af61-dec4a6166acd)

The Pharo image was too big to be published on Github (even when compressed) but can be emailed if needed.

**Smalltalk In The Application**

Two classes were used to process all the data, Panda and PandaList:

![image](https://github.com/user-attachments/assets/6dcffb92-5dea-4a1b-8636-2853aab1d23c)

PandaList is initialized from aPath to a csv file:

![image](https://github.com/user-attachments/assets/77b1d210-12c5-43b0-b311-e17ae3bee343) 

and calls helper function retrieveData: 
![image](https://github.com/user-attachments/assets/a38b66bc-a02b-4ef5-ac74-86471b94c7da) 

which gives the PandaList class method all the data to create a list of "Pandas". The panda class has 5
variables (all with getters and setters): 
![image](https://github.com/user-attachments/assets/a4c341e9-70e1-411a-a67d-c665b013b95a).

A panda is created when given an OrderedCollection from a PandaList:
![image](https://github.com/user-attachments/assets/f0d05423-a7e8-438f-8dbc-2c1796e676d1).

After all the pandas are created, the PandaList will be an OrderedCollection filled with every piece of data in the form of a panda: 
![image](https://github.com/user-attachments/assets/2f3f9934-c097-48cd-b807-9f06c55ca250). 

From there it will then do all the methods that process the data for our application.

**Data Processing Methods**

Our function uses _ methods including averageAllTime (gets average steps for all data) averagePerDay (gets average per day of the week) averagePerDay2025 (gets average per day of the week in 2025) 
averageStepsPerMileAllTime (gets average amount of steps to reach a mile) listingAllDays lists all days in the orderedCollection with steps) 
longestStreak (gets the longest streak of reaching 10,000 steps) percentAboveGoal(calculates he percent of days above 10,000 steps) 
stepsNeeded (calculates steps needed to reach 10,000 of the current day) todayAboveAverage returns if the user was above their average steps for the current day) 
![image](https://github.com/user-attachments/assets/a5dfc9cb-19a5-4c1c-aa49-c46c51491780)
![image](https://github.com/user-attachments/assets/8906103a-6051-4cf4-86c6-226c509c7292)
![image](https://github.com/user-attachments/assets/720eecf9-61d4-483c-98b6-0a401ab628f6)
![image](https://github.com/user-attachments/assets/182d3d92-16f6-4b54-9ba5-74fb2f07e905)
![image](https://github.com/user-attachments/assets/25cdf84b-af37-4836-9352-65c9a21d2413)
![image](https://github.com/user-attachments/assets/97837651-f062-47bb-b9c3-5eb0f9b6e8eb)
![image](https://github.com/user-attachments/assets/93b9e9c2-f896-4704-9013-34bf917b3b26)
![image](https://github.com/user-attachments/assets/a427ca29-472e-4028-933a-fbef0b01d24e)
![image](https://github.com/user-attachments/assets/19d3f5cb-9dd5-40fb-b318-03212556063c)

**Exporting to CSV**

Lastly, all the methods were called and stored in a string:
![image](https://github.com/user-attachments/assets/b501e609-23f4-4d6d-9d4e-b4c8fd519040)

and then exported to a CSV via a function that calls the previous one to get all the data to allow VSCode to only have to call one method on Pharo:
![image](https://github.com/user-attachments/assets/51d06498-ad92-49de-a93c-0c74b093b607)


















