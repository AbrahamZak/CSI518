
## Sample Project for JUnit Assignment.
## Deadline : Dec 05, 2019 23:59

The Repository contains a maven project with queue extended from [Princeton's Intro to programming](https://introcs.cs.princeton.edu/java/43stack/)sample.

You are the developer who is supposed to write the unit test case for this class.
The client required a simple Java class which implements the Queue Data structure. As the developer you wrote the code and the same was pushed in this repository.

#### Create Passing test cases.
**Task 1**: Create Unit test cases for the code in this repository. The tests should have 100% instruction & branch coverage for both constructors, enqueue, dequeue, peek, length, isEmpty, removeAll methods.
**Upload Results** Copy the code coverage report and attach the same with your submission.


#### Create Test case that fails to reveal the underlying fault.
After you have done this, the code was shipped to the end user and a bug was found.
Bug : The class does not throw an exception when dequeue function is called on an empty queue. Remember the intended behaviour of the dequeue method in a queue data-structure is throw an exception if it is called on a queue is empty. You find the problem is that: someone commented a part of your code (Line 147 & 148) after you pushed the same.

**Task 2**: Write a test case which exercises the program to find the above mentioned fault.
> Note: after writing this test case, 
> mvn test
> will state that one of your test case is failing

Hint : Your test case would expect a NoSuchElementException, but that is not thrown hence this test case will make your mvn test fail, and this the expected behaviour.
**Upload Results** : Upload your code and test cases to the repository and the blackboard.

#### Instructions to run    

To Run tests and generate coverage reports :

> mvn jacoco:prepare-agent test jacoco:report

* Location of reports : *target/site/index.html*
* [Screenshot of a sample report](https://github.com/ninadpchaudhari/JUnit-Assignment/blob/master/jacoco-report-sample.png?raw=true) 

#### Requirements for assignment

* Have 100% instruction & branch coverage for both constructors, enqueue, dequeue, peek, length, isEmpty, removeAll methods.
* Order of test execution cannot be manually set. Tests can be run indepedenly of each other. Hint : use nested tests
* Annotations of JUnit are to be used.
* You should have atleast 1 failing test which reveals the bug in the dequeue method disclosed earlier.

#### Instructions for submission

* This repo should already exist as a base code in your particular Github Classroom repositories, push your changes to your respective repositories.
* Submit a compressed file of the entire project which contain the reports already generated.

#### References
* [JUnit 5 tests for *Stack*](https://github.com/junit-team/junit5/blob/master/documentation/src/test/java/example/TestingAStackDemo.java)
* [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide)
* [JUnit 5 Samples](https://github.com/junit-team/junit5-samples)
