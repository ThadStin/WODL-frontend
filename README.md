# W.O.D.L. - log your wod

- github repo:
https://github.com/ThadStin/WODL-api
https://github.com/ThadStin/wodl-frontend

- live link:
https://wodl.herokuapp.com/


##  Overview
There are many apps out there that help a user track workouts.  Not many of them, though,
allow a user to track ANY workout that they want.  Most other apps force a user to choose
a pre-loaded workout.  W.O.D.L. allows the user total freedom in entering a workout.  If a users
wants to log a 12 oz. curl.... go right ahead.  What it is actually meant for, though, is for a user to log a personal or crossfit workout.  Many workouts are not simply defined from a predetermined list.  W.O.D.L. allows a user to log those varied and, sometimes, strange workouts.

##  Tech used
W.O.D.L. was built with a React front-end and Ruby on Rails backend API.  React-Strap
was downloaded as an npm package to allow for a searchable/filterable data table.  It is responsive
to allow a user to enter workouts on a phone right at the gym.

##  Issues
The React-Strap package allowed for occasional filtering/searching of data table.  It did not work
consistently and would usaully break the page when attempting to search/filter.  Many other
approaches were taken in order to search/filter the table, but without success.  An attempt was
made to hard code the search/filter, but after 3 days of you-tubing and fiddling with code, there
was no progress and the plan was scrapped.  I moved to using cdn's and a jQuery script tag in the html.
Honestly, as crazy as this idea sounds, it is the closest I've come to figuring this out.  It will
search/filter 1 out of every 25-ish times the page loads.  Jquery and React don't play nice together.
