#!/usr/bin/env node

const program = require('commander')
const colors = require('colors');
const users = require('../lib/users')

program
  .command('list')
  .alias('ls')
  .description('List registred users')
  .action(function(){

    const userList = users.list()

    console.log('')
    console.log('REGISTRED USERS')
    console.log('---------------')

    userList.forEach(function(user){
      console.log('%s %s', colors.bold(user.name), colors.green(`<${user.email}>`))
    })

    console.log('---------------')
    console.log(`${userList.length} registred users`)
    console.log('')

  })

program
  .command('find <param>')
  .alias('f')
  .description('Find registred users by term')
  .option('-e, --email', 'Find by email')
  .action(function(param, args){

    let userList

    if(args.email){
      userList = users.findByEmail(param)
    }else{
      userList = users.find(param)
    }

    console.log('')
    console.log('REGISTRED USERS')
    console.log('---------------')
    console.log(`${userList.length} users found`)
    console.log('---------------')

    userList.forEach(function(user){
      console.log('%s %s', colors.bold(user.name), colors.green(`<${user.email}>`))
    })

    console.log('---------------')
    console.log('')

  })

program
  .command('sort')
  .alias('s')
  .description('Sort registred users list')
  .option('-d, --desc', 'Descending')
  .action(function(args){

    const type = args.desc ? 'desc' : 'asc'
    const userList = users.sort(type)

    console.log('')
    console.log('REGISTRED USERS')
    console.log('---------------')
    console.log(`ORDERED LIST`)
    console.log('---------------')

    userList.forEach(function(user){
      console.log('%s %s', colors.bold(user.name), colors.green(`<${user.email}>`))
    })

    console.log('---------------')
    console.log('')

  })

program.parse(process.argv);