const value =require('./data');
const crypto = require('crypto');
const os=require('os');
const {writeFileSync,appendFileSync}=require('fs')
const data=value('likith',2020,'MTECH')
console.log(data.name);
writeFileSync('message.txt','message.txt\nPrograd Details')
const user=os.userInfo();
console.log(user);
const password = crypto.createHmac('sha256', 'secret').update('Prograd').digest('hex');
appendFileSync('message.txt',`\nuserId->${user.uid}\nName->${data.name}\nYear->${data.Year}
Qualification->${data.Qualification}\nUserName->${user.username}\nPassword->${password}`)