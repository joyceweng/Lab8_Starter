# Lab 8 - Starter
Joyce Weng

## Check Your Understanding
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why. \
 Within a Github action that runs whenever code is pushed. Since this process is in your local branch, if tests fail, you will fix them in local branch and push them locally. And after the pull request you will get code reviews and make sure all checks have passed before pushing to main.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no) \
No

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. \
No. Because to test the message feature it involves many components interacting with each other.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. \
Yes. Because it does not involve interaction with other components and it is simple to just test the input and output.

