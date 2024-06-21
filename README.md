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

## Deployment

I deployed everything using free services that can be stopped on demand so you can too!

Either manually or using containers, this application was made to be relatively easy to deploy.

### Requirements:

* **Docker** and **Docker Compose** installed (or optionally a Frontend and Backend platforms. For the public version of this app I used **Netlify** for hosting the frontend and **Render** for hosting the backend for free).

* A Firebase account

* **A Free (or paid) Postgres SQL host.** I recommend [Aiven](https://aiven.io/) as it is free, easy to use and offers a good trial tier. It can be stopped and restarted on demand or automatically. **NOTE:** I'll only explain the config using a remote host as that's what's configured in the docker-compose.yml file, but I think this can also be configured to use a local Postgres instance with the right configuration.

### How to deploy?

For convenience and better reproducibility of the steps I'll only explain the local deployment option using Docker Compose, for deploying on specific infrastructure is not too hard, just deploy the microservices independently and test them until they work together (it can take some time).

1. Connect to your _Firebase account_ and your _database host account_ to get the following environment variables.

**Firebase Account:**

```
FB_API_KEY (Firebase API Key)
...
Other Firebase Frontend variables (optional)
```

There'll be some warnings about undefined env variables if you don't define all the env variables for the frontend but just ignore them as this will work just fine without the other env variables.

**Database host account:** (see requirements section for a free option)

```
# REQUIRED:
PG_USER # Your Postgres username
PG_PASSWORD # Your Postgres password
PG_DB_NAME # The database you'll be using

# Optional
## Either define PG_CA_CERT with the CA certificate or activate the BYPASS_SSL_VERIFICATION option

PG_CA_CERT # The CA certificate. I recommend you to set it manually in a Linux/Mac system (WSL if you're on Windows) using cat command. (e.g: export PG_CA_CERT=$(cat /path/to/certificate-authority-file/))

BYPASS_SSL_VERIFICATION # Defaults to false. (optional, if you want to bypass the SSL, not recommended for production environments as this expose you to data security risks).
```

2. Export all the environment variables with adequate values and make sure they are available in your shell environment (if you have any doubt just see the .env.sample files for backend and frontend) [Tutorial for Linux, Mac or Windows with WSL](https://www.youtube.com/watch?v=Y6_7xaxkPik)

3. Build the images for frontend and backend

You can either provide the images built locally each time or keep a version of them in DockerHub and provide them to the Dockerfile using environment variables.

**Backend**

3.1 - Build the image

```
docker build -t feat-it-backend ./backend
```

Optionally you can provide the image name you want using the **BACKEND_IMAGE_FEAT_IT** environment variable.

**Frontend**

3.2 - Build the image

```
docker build -t feat-it-frontend ./frontend
```

Optionally you can provide the image name you want using the **FRONTEND_IMAGE_FEAT_IT** environment variable.

4. Run the docker compose command.

```
docker compose up -d
```

5. Verify your app is working on localhost:3000 (frontend) and localhost:5000 (backend)