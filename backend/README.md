# Feat it Healthy Backend

Backend of the app, to see its description visit [Feat It Healthy repo root](https://github.com/jigth/Feat-It-Healthy)


## Requirements

* **NPM:** For running npx in some scripts.
* **Yarn:** For package management (you may use a different package manager if you wish but compatibility is not guaranteed 100%).

## Running commands:

From now on, any command that is listed here should be run from the root of the backend project.


## Basics of the project

### How to install

```shell
$ yarn
```

### How to run 

```shell
$ yarn dev
```

## TypeORM Basics

### How to run TypeORM CLI tool

```shell
$ yarn typeorm:cli
```

### Run migrations

This command is usually run to prepare the database before using it, it will create all the tables and alter field as needed to match the current version of the database being used in production environment (or any other environment being set up).

The following command will apply all migrations within the TypeORM migrations folder. _Be careful in production environment to avoid lose of data._

```shell
$ yarn typeorm:migration:run
```

### Generate migrations

This process has been automated using a custom NodeJS script for cross compatibility because env variables run differently on different operating systems (Windows, Linux, Mac).

You can always run the script directly if you prefer:

Using the automated way:

```shell
$ yarn typeorm:migration:generate --migration=your_migration_name
# Or
$ npm run typeorm:migration:generate -- --migration=your-migration-name
```

Using the TypeORM script directly:

```shell
$ ts-node ./node_modules/typeorm/cli migration:generate ${TypeORM migrations path in the project} -d ${TypeORM configPath in the project}
```

### Create, delete, do other TypeORM operations

You can either run use the instructions in ***"How to run TypeORM CLI tool"*** section or the ***"Using the script directly"*** instructions