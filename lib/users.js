const users = require('../mock/users')

module.exports = {
  list: function(){
    return users
  },
  find: function(param){
    return users.filter(function(user){
      return (user.name.toLowerCase()).indexOf(param.toLowerCase()) !== -1
    })
  },
  findByEmail: function(param){
    return users.filter(function(user){
      return (user.email.toLowerCase()).indexOf(param.toLowerCase()) !== -1
    })
  },
  sort: function(type){

    const userList = users.sort(function(userA, userB){
      if(userA.name.toLowerCase() < userB.name.toLowerCase()) { return -1 }
      else if(userA.name.toLowerCase() > userB.name.toLowerCase()) { return 1 }
      else{ return 0 }
    })

    return type === 'desc' ? userList.reverse() : userList

  }
}