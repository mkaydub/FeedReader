/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Test that loops through each feed in the allFeeds object &
     *  ensures URL is defined & not empty
     */
    it('has defined URL', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();
      };

    });

    /* Test that loops through each feed
     * in the allFeeds object & ensures it has a name defined
     * and that the name is not empty.
     */
    it('has defined name', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined(); //expect name to be defined
        expect(typeof feed.name).toBe('string'); //expect name to be a string
        expect(feed.name).not.toBe(''); //expect string not to be empty
      };
    });
  });


  /* New test suite named "The menu" */
  describe('The menu', function() {
    const menu = document.body;
    const menuIcon = $('.menu-icon-link');
    /* Test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    it('menu remains hidden', function() {
      expect(menu.classList.contains('menu-hidden')).toBe(true);
    });

    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * has two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('menu changes visibility on click', function() {

      menuIcon.click();
      expect(menu.classList.contains('menu-hidden')).toBe(false); //expect display when clicked

      menuIcon.click();
      expect(menu.classList.contains('menu-hidden')).toBe(true); //expect hide when clicked again
    });
  });

  /* New test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* Test that ensures when the loadFeed
     * function is called & completes its work, there is at least
     * a single .entry element within the .feed container.
     * loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('loadFeed function is called and completes with at least 1 entry', function() {
      const entries = $('.feed .entry');
      expect(entries.length).not.toBe(0);
    });

  });

  /* New test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * loadFeed() is asynchronous.
     */
    var feed, newFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        feed = $('.feed').html();
        done();
      });
    });

    it('content actually changes', function(done) {
      loadFeed(2, function() {
        newFeed = $('.feed').html();
        done();
      });
      expect(newFeed).not.toBe(feed); // expect newFeed to be different than feed
    });
  });
}());