#! /usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const surface = 509_600_0

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

  program.command('generate')
  .description('Set beginning and end time in Mega-annum "centuries" integers (10, 2) equals 1000 Ma and 200 Ma')
  .option('-b, --begin <number>', 'beginning of time range')
  .option('-e, --end <number>', 'ending of time range')
  .action((options) => {
    const {begin, end} = options;

    const start = Math.max(begin, end);
    const finish = Math.min(begin, end);

    const steps = (start - finish) * 2 + 1;
    const offset = finish * 100;
    const LIPs = [];

    for (let i = 0; i < steps; i ++) {
      const time = offset + (i * 50);
      const LipsPerStep = Math.round((Math.random() * 3 + Math.random() * 2 + Math.random())/2.5)

      new Array(LipsPerStep).fill(0).forEach(() => {
        const obj = {time}
        obj.location = [((Math.random() * 180) - 90).toFixed(2), ((Math.random() * 360) - 180).toFixed(2) ];
        obj.size = ((((Math.random() * 3) + (Math.random() * 1.5) + Math.random())/4) * surface).toFixed(2);
        LIPs.push(obj)
      })
    }
    
    console.log(JSON.stringify(LIPs, undefined, 2))
  });

  program.command('log')
  .description('See all settings')
  .action(() => {
    console.log({beginTime}, {endTime})
  });

program.parse();