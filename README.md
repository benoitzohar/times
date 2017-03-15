[![Travis](https://img.shields.io/travis/benoitzohar/times.svg)](https://travis-ci.org/benoitzohar/times)

# Times
[times.poi.lu](http://times.poi.lu)

*[WIP, do not use yet]*

Times is a simple web app that allows you to track time spent on some tasks.

It has a Ruby on Rails back-end which provides a REST API and a React (Redux) front-end.


There is no auth but a simple token is generated everytime someone goes to the root url.
This token allows the user to have it's own space on the app, however you should not consider the data you add in the app as private...

You can use the demo tool or install it yourself on heroku, it's ready for production!


* **Ruby version:**  
    2.4

* **Configuration:**  
    `rake db`
    `rake db:migrate`

* **Develop:**  
    `yarn dev`

* **Run the test suite:**  
    `yarn test`
