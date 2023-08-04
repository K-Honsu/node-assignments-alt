// os module
const os = require('os')

// userInformation
const userInfo = os.userInfo()
console.log({userInfo});

// platform
const platform = os.platform()
console.log({platform});