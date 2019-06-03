# Install

https://hub.docker.com/_/mongo/

```
docker pull mongo
```

The MongoDB server in the image listens on the standard MongoDB port, 27017

```
docker run --name virtual-mongo -p 27017:27017 -d mongo
```

That's all it takes to get Mongo running! But if you want to use the command line client (`mongo`) to talk to your mongo instance, you have 2 options:

## Option 1: Shell into the virtual-mongo Container:

```
docker exec -ti virtual-mongo /bin/bash
```

Then run the mongo client:

```
mongo
```

Then you're in the mongo CLI (command line interface) on your virtual-mongo container.

## Option 2: Download and install the Mongo CLI locally

Follow the installation instructions on https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition

On Mac OS:
```
brew tap mongodb/brew
brew install mongodb-community@4.0
```

At this point, you can type `mongo` and it will connect to your Docker `virtual-mongo` instance if it is running.

If you prefer to run Mongo natively on your OS, you must start the server process (`mongod`) in one Terminal window:

```
mongod --config /usr/local/etc/mongod.conf
```

And then you can log into it in another: `mongo`


FYI:
MONGO_INITDB_ROOT_USERNAME: root
MONGO_INITDB_ROOT_PASSWORD: root