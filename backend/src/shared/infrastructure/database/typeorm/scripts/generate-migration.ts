import { exec } from 'child_process';
import * as path from 'path';

/**
 * This is a script to automate TypeORM migrations in a cross-platform way, it was the best
 * way I found to do it after trial and error, it aims to simplify the usage and not having
 * to always manually type the full path or copy&pasting a README instruction.
 * 
 * Currently the NPM support for parameters is not ideal for cross-platform solutions
 * as the handling of env variables differs greatly between Windows,Linux,Mac.
 */

// Extract the argument passed and get migration index
const args = process.argv.slice(2);
let migrationsIndex: number = -1

args.forEach((arg: string, i: number) => {
    if (arg.startsWith('--migration=')) 
      migrationsIndex = i;
});

if (migrationsIndex === -1) {
  console.error('Error: Argument --migration is required.');
  process.exit(1);
}

// Process paths, and generate migration by executing the shell command with Node 
const typeormMigrationsPath = process.env.MIGRATION_PATH || "src/shared/infrastructure/database/typeorm/migrations"
const typeormConfigPath = process.env.MIGRATION_PATH || "src/shared/infrastructure/database/typeorm/config.ts"
const migrationName = args[migrationsIndex].split('=')[1];
const migrationPath = path.join(...typeormMigrationsPath.split('/'), migrationName);
const configPath = path.join(...typeormConfigPath.split('/'));

const command = `npx ts-node ./node_modules/typeorm/cli migration:generate ${migrationPath} -d ${configPath}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    console.log(stdout)
    process.exit(1);
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
  console.log(`Migration ${migrationName} generated successfully.`);
});