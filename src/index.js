#! /usr/bin/env node

const { Command } = require('commander');
const { generateLips } = require('./modules/generateLips')

const program = new Command();

program
  .name('lipg')
  .description('CLI for generating random large igneous provinces')
  .version('0.0.1');


program.command('generate')
  .description('Set beginning and end time in Mega-annum "centuries" integers (10, 2) equals 1000 Ma and 200 Ma')
  .option('--begin <number>', 'beginning of time range', 10)
  .option('--end <number>', 'ending of time range', 0)
  .option('-sa, --surface-area <number>', 'surface area of the planet', 509_600_000)
  .option('-sl, --size-limit <number>', 'Size limit for LIPs listed', 100_000)
  .action((options) => {
    lipTimes = generateLips(options);
    console.log(JSON.stringify(lipTimes, undefined, 2))
  });

  program.command('log')
  .description('See all settings')
  .action(() => {
    console.log({beginTime}, {endTime})
  });

program.parse();