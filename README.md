# Feat It Healthy

An online food market demo app that allow placing and "Paying" orders using a test credit card account and some payment processor service used in the real world

The main idea of this project is to make a full system that resembles a food market, where you can buy ingredients but in this case they'll be healthy ingredients of premium brands that have responsible practices with the consumer. Healthy can mean a lot of things for different people so I'll not lean into any specific diet as I consider that a personal matter.

## Why another food market demo?

This is a fictional example that has a lot of room for features and technical challenges, its business domain can be as simple or as complex as needed so it may evolve a lot overtime, it is simple enough to be familiar and easy to understand and test for most people and allows to practice intermediate architecture and development conepts such as DDD, Hexagonal Architecture, Design Patterns and so on.

As I find backend technologies more interesting I am focusing on that aspect initially so the UI may not be very polished but the project's features should work fine nonetheless.

## Technical specification

### App Roles

Until now I have identified three essential roles for the application:

* **CUSTOMER:** The people that will search, pick, buy and track products and order in the market.
* **DELIVERYMAN:** The people that will send the order that the _customers_ ordered to them.
* **MANAGER:** The people that will manage the food market app, adding products, managing inventory, etc.

### App Features

* [ ] The CUSTOMER can place _orders_ of _products_ they selected in the market after putting them into a shopping cart.

* [ ] The CUSTOMER can notice when the order has been delivered, also has the ability of tracking that order.

* [ ] The CUSTOMER can see an historical log of their current delivery and all deliveries related to the orders he has made.

* [ ] The MANAGER can manage _products_ and their _inventory_ (CRUD operations) in the market via a manager's admin portal.

* [ ] The MANAGER, CUSTOMER and DELIVERYMAN can create accounts and login into the platform when they have succesfully created that account.

* [ ] Each role of the web app have their unique dashboard and both MANAGER and DELIVERYMAN accounts have to be approved by a manager before being able to login to the platform.

* [ ] The DELIVERYMAN may have their account suspended by a MANAGER, when that happens an historical log specific to that event is filled automatically by the app to track such activity and avoid arbitrary account suspending without consequences.

* [ ] The CUSTOMER must be able to track the delivery in near-real time via a MAP
