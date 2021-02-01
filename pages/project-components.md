---
layout: two-column
title: Final Project Components
permalink: /project-components/

---
This page contains a list of potential interaction components you may choose to implement. Please don't limit yourselves to just the components listed. These examples are only intended to give you a sense of how to scope your interactions, and to get you thinking about other possibilities.

## <i class="fab fa-wpforms"></i> Data Collection Form 
You may want to explore ways of easy ways of gathering data from your users. If you go this route, you will need to consider how you would:
1. Design and implement a REST API endpoint for the data you're collecting.
2. Design and implement a web form.
3. Ensure that you're supporting data validation, error handling, and appropriate user feedback.

### Examples

{:.link-menu}
* <a href="https://www.google.com/forms/about/" target="_blank">Google Forms</a>
* <a href="https://www.typeform.com/" target="_blank">Typeform</a>

### Tutorials

{:.link-menu}
* <a href="https://www.w3schools.com/html/html_forms.asp" target="_blank">W3Schools Tutorial/W3Schools Validation Tutorial</a> 
* <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form" target="_blank">Mozilla Form Tutorial</a>
* <a href="https://medium.theuxblog.com/10-best-practices-for-designing-user-friendly-forms-fa0ba7c3e01f?gi=9d66b97dae07" target="_blank">10 Best Practices for Designing User Friendly Forms</a>


## <i class="far fa-chart-bar"></i> Data Visualization
Depending on the problem your project aims to solve, it may be appropriate for your website to communicate data to users through a data visualization. For example, you may want to display a line graph that shows how a user’s mood has changed over time using data that the user inputted through a form. Or you may way to display a map that shows the locations of community organizations in a given area. Data visualizations allow you to share information with users in an easy-to-understand format that highlights connects the users might not otherwise notice. Things to consider here:
* What kind of visualization will best convey the ideas you're hoping to communicate (e.g.table, chart, graph, map, or network graph)?
* What interactions should the visualization support (filtering, sorting, toggling between different views, etc.)?

### Examples

{:.link-menu}
* <a href="https://bl.ocks.org/" target="_blank">Bl.ocks</a>
* <a href="https://codepen.io/search/pens?q=d3&limit=all&type=type-pens" target="_blank">Codepens that use D3</a> (great for finding simple visualizations!)
* <a href="https://flowingdata.com/" target="_blank">Flowing Data</a>

### Tutorials 
(tables, charts, and graphs)

{:.link-menu}
* <a href="https://plot.ly/javascript/" target="_blank">Plot.ly</a>
* <a href="https://www.chartjs.org/" target="_blank">Chart.js</a>
* <a href="https://formidable.com/open-source/victory/" target="_blank">Victory</a>
* <a href="https://d3js.org/" target="_blank">D3</a>
* <a href="https://vega.github.io/vega/" target="_blank">Vega</a>
* <a href="https://www.highcharts.com/" target="_blank">HighCharts</a>
* <a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_blank">Google Maps</a>
* <a href="https://leafletjs.com/" target="_blank">Leaflet</a>


## <i class="fas fa-user"></i> User Profiles
By supporting user profiles, your interface can provide personalized content for each user. Profiles are sometimes utilized to allow users to store information, such as preferences or personal information like address and credit card number. Profiles can also be used to provide different classes of users with access to different features. For example, a website owner may want to add or edit content, but a website customer should not have access to these features. User profiles allow you to personalize your application to most effectively meet the needs of different users. If you go this route, please ensure that the following functionality is supported:
* Provide a login feature that allows a user to enter their credentials.
* Provide support for at least two users. The application should look different for each user (i.e. display personalized information such as name, stored data, etc). These profiles can be hard-coded (i.e. create a separate HTML page for each user that includes their personal information).
* The two (or more) user profiles should be personalized to the user, at a minimum by showing their personal information when logged in. If it makes sense for your application and tasks, the two user profiles should provide access to different features. For example, if you created user profiles to allow a website manager to have access to different features than a regular user, the two user profiles you create should support different features.

### Examples

{:.link-menu}
* <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
* <a href="https://www.facebook.com/" target="_blank">Facebook</a>

### Tutorials

{:.link-menu}
* <a href="https://uxplanet.org/designing-ux-login-form-and-process-8b17167ed5b9" target="_blank">Designing Login Form</a> 
* <a href="https://www.designyourway.net/blog/inspiration/mobile-user-interface-login-form-design-inspiration-41-examples/" target="_blank">Login Form Design for Mobile</a> 
* <a href="https://www.w3schools.com/howto/howto_css_login_form.asp" target="_blank">W3schools: Creating a login form</a> 
* <a href="https://medium.theuxblog.com/10-best-practices-for-designing-user-friendly-forms-fa0ba7c3e01f" target="_blank">10 Best Practices for Designing User Friendly Forms</a> 


## <i class="fas fa-cloud-download-alt"></i> External Data Integration
Depending on the problem your project aims to solve, it may be appropriate for your website to allow users to interact with content from external providers. For example, you may want to view streams of relevant content that have been posted to sites like Twitter, Instagram, YouTube, etc. Many of these companies provide support for web developers to integrate their content into external websites in user-friendly ways. This would involve:

* Creating a custom UI / interaction with data accessed from another website. We have already seen many examples of this in class.
* Ensuring that the external data is integrated into your design in a seamless and usable way so that users can interact with the content as they would any other features.


## <i class="fas fa-filter"></i> Interactive Data Filter
Data filters provide a simple way for users to view a subset of a larger data set based on provided criteria. For example, when viewing a list of restaurants in a particular neighborhood, a user might want to filter the list to only view restaurants that are cheap or open right now. Data filters allow users to easily personalize their view of the data by providing access to criteria that they might care about, such as restaurant price or hours. Building a data filter would involve:

* Choosing a data set that your user would want to filter (i.e. it would be difficult for the user to find the data they’re interested in without filtering).
* Including at least two different criteria that the user can select to filter the data. These criteria should be helpful to the user given the user’s tasks and goals.
* Ensuring that data display (whether in list format, map format, or another format) updates to show only the relevant data when the user selects a given filtering criteria.

### Examples

{:.link-menu}
* <a href="https://www.yelp.com/" target="_blank">Yelp</a>
* <a href="https://www.airbnb.com/" target="_blank">Airbnb</a>
* <a href="https://foursquare.com/" target="_blank">Foursquare</a>
* <a href="https://flowingdata.com/2016/03/30/divorce-rates-for-different-groups/" target="_blank">Flowing Data: Divorce Rates</a>
* <a href="http://projects.flowingdata.com/life-expectancy/" target="_blank">Flowing Data: Life Expectancy</a> (data selection and data filter)

### Tutorials

{:.link-menu}
* <a href="https://codepen.io/vanwars/pen/abOdWpb?editors=0010" target="_blank">Table data filter</a>
* <a href="https://d3js.org/" target="_blank">D3 - Data Driven Documents</a>


## <i class="fas fa-user-friends"></i> Social Interactions
Web applications that support social interactions between users provide valuable connective and informational experiences that bring people back to their sites again and again. Social interaction can be provided through public comments on website content or private chat interfaces that allow two or more users to share messages. When appropriate, these types of social interactions deeply engage your users and help them build communities around your web application content. Building a social component would involve:

* Supporting at least one type of social interaction (either commenting publicly on website content of privately chatting with one or more other users). Users should be able to write social messages, post them, and immediately see their messages on either a comment board or chat interface.
* Selecting an appropriate level of anonymity for your users given the goals of your application. Users may be completely anonymous (no names or handles are displayed), partially anonymous (users choose a handle that is displayed with all content they post, but this handle can be different from their legal name), not anonymous (users’ legal names are displayed with the content they post). 
    * NOTE: if you choose to make users either partially anonymous or not anonymous, we recommend that you also implement the User Profiles component described earlier in this document to allow users to create identities as part of your web application.
* Displaying social messages in an intuitive manner given your application, for example in you may wish to display messages in chronological order. If your users are not completely anonymous it should be clear which user posted which content.

### Examples

{:.link-menu}
* <a href="https://www.facebook.com/" target="_blank">Facebook</a>
* <a href="https://www.youtube.com/" target="_blank">YouTube</a>
* <a href="https://drive.google.com/" target="_blank">Google Drive</a>
* <a href="https://www.slack.com/" target="_blank">Slack</a>

### Tutorials / Libraries

{:.link-menu}
* <a href="https://www.smashingmagazine.com/2012/05/building-real-time-commenting-system/" target="_blank">Building a Real-Time Commenting System</a> (you don’t have to save the comments) 
* <a href="https://www.brianshim.com/webtricks/add-a-comment-wall-to-your-website/" target="_blank">Add comments to your website</a> (compares multiple approaches)
* <a href="https://www.webfx.com/blog/web-design/10-free-website-chat-widgets-to-make-your-site-interactive/" target="_blank">Free Website Chat Widgets</a> (compares multiple approaches)
* <a href="https://support.zendesk.com/hc/en-us/articles/360022182054" target="_blank">Zendesk Chat</a>

> Note: You don’t have to use an existing widget or library for implementing commenting or chat!  You can write commenting functionality in HTML and JavaScript relatively easily, and will then have full control over the design and interactions. However, these libraries and widgets may be helpful depending on your design.


## <i class="fas fa-gamepad"></i> Gamification / Rewards
Rewards can be a way to encourage users to interact on your system in particular ways. In web and mobile applications, rewards are often given in the form of points and badges which are given out in response to specific user actions of behaviors.  Since points and badges are elements that have been adopted from video games, including these types of rewards in an application is often called “gamification”. However, rewards can take other forms as well; users could be rewarded with money or coupons, or could even set their own goals. For example, a user could decide that if she exercises every day this week, she will reward herself by going out to dinner. Building a gamification / rewards component would involve:

* Choosing at least one type of reward (points, badge, coupon, user-defined reward).
* Designing a set of rules for when the user should receive this award (e.g. if the user records that she exercised every day this week).
* Designing an interaction that communicates to the user when a reward has been earned. If your rewards are points or badges, you may design an icon that you display when that point/badge is earned. If your rewards is user-defined, you may display a message with information about the reward when it is earned.

### Examples

{:.link-menu}
* <a href="https://www.developgoodhabits.com/fitbit-badge-list/" target="_blank">Fitbit badges</a> 
* <a href="https://trophylist.com/trophies/" target="_blank">Snapchat trophies</a>
* <a href="https://wiki.waze.com/wiki/Your_Rank_and_Points" target="_blank">Waze rewards</a>

### Tutorials / Libraries
For tutorials on implementing rewards / gamification, see:

{:.link-menu}
* <a href="https://www.quicksprout.com/how-to-easily-add-gamification-techniques-to-your-content/" target="_blank">How to add gamification techniques to your content</a>
* <a href="https://www.td.org/insights/10-best-practices-for-implementing-gamification" target="_blank">Best Practices for Gamification</a>
* <a href="https://www.sitepoint.com/3-ways-implement-embeddable-custom-badges/" target="_blank">3 Ways to Implement Custom Badges</a>
* <a href="http://rileyh.com/treehouse-badges-widget" target="_blank">Treehouse Badges Widget</a> (links to Codepen)

## <i class="fas fa-calendar-alt"></i> Custom Calendar
A custom calendar could provide a way for users to visualize temporal data in an interesting way, or to communicate upcoming events in a community. Your custom calendar could adapt either how events are created, or the way in which they are displayed to users.  Building a custom calendar would involve:

* Design one or more views for your calendar that make sense given your users’ needs (daily view, weekly view, monthly view, events view).
* Your calendar should have good visibility; important information should be easy to find and clearly displayed.
* Design an interaction that allows users to add events to your calendar.

### Examples

{:.link-menu}
* <a href="https://serif.nu/" target="_blank">Serif</a>
* <a href="https://courses.cs.washington.edu/courses/cse440/17au/calendar.html" target="_blank">UW CSE 440</a>
* <a href="https://www.evanstonspace.com/" target="_blank">SPACE Evanston</a>

### Tutorials
For tutorials on implementing custom calendars, see:

{:.link-menu}
* <a href="https://www.w3schools.com/howto/howto_css_calendar.asp" target="_blank">HTML/CSS of a Calendar</a>
* <a href="https://code.tutsplus.com/tutorials/how-to-build-a-beautiful-calendar-widget--net-12538" target="_blank">Some calendar JS</a>
* <a href="https://envato.com/blog/calendars-web-user-interface-design-trends-live-examples/" target="_blank">Calendars on the Web</a> (design)