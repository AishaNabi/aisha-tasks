import bcrypt from 'bcrypt'
import chalk from 'chalk'

let name = 'alion'

let salt = await bcrypt.genSalt()
name =await  bcrypt.hash(name, salt)
console.log(chalk.red(name))

