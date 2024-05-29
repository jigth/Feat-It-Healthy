import "reflect-metadata";

import appDataSource from "./config";

appDataSource.initialize()
    .then(() => {
        console.log('Database have been initialized succesfully');
    })
    .catch((error: any) => {
        console.log(error);
    });

export { appDataSource };