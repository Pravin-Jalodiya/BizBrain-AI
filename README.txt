Author : Pravin

--------------------------------------ChangeLog--------------------------------------

1. Created prompt.py which holds the prompts that yields desired output
2. Implemented dynamic formatting of the output and displayed it in the "results-container" div as required
3. Implemented throttling to prevent excess calls to the api in a very short period of time.
4. Modified and simplified the app.py file by Modularisation and making it easy to read and understand
5. Moved the API_KEY in .env file for secure storage of api key
6. Organised the whole project in clean way for easy navigation and grouping of similar files
7. Reduced the lines of code in index.html  from ~300 to <240 by shifting the java scripts in separate files for easy management and cleaner code
8. Improved the index.html in general with minor fixes
9. Made it compulsory to enter all the fields on the form to get better insights
10. Followed coding best practices like error handling and exception handling and separation of concerns where possible  
11. Fixed the startCountdown function to work as expected over multiple calls
12. Put route handlers in separate folder called controllers for better management and cleaner code of app.py
13. Changed vars to const wherever required
14. Gathered assets like missing images

Please go through the code and run the project for better understanding of the changes



