# Feed Reader Testing

**Directives given by Udacity:** In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

## Tests

1. Test that loops through each feed in the allFeeds object & ensures URL is defined & not empty
2. Test that loops through each feed in the allFeeds object & ensures it has a name defined and that the name is not empty. *Added functionality to ensure that the name is a string and that the string is not empty*
3. Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
4. Test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
5. Test that ensures when the loadFeed function is called & completes its work, there is at least a single .entry element within the .feed container. loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.
6. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes loadFeed() is asynchronous.


## To load
* Download zip file or clone repository
* Open index.html file in browser
* Scroll to see Jasmine tests passed!
