import { registerUsers } from "../api/index.js"
import { createHash } from "../utils/createHash.js"
import { askInquirer } from "../utils/inquirer.js"
import { User } from "../model/user.js"


export async function onRegister() {
    const name = await askInquirer('input', 'name', 'Enter your name: ')
    const username = await askInquirer('input', 'username', 'Enter your username: ')
    const password = createHash(await askInquirer('password', 'password', 'Enter your password: '))
    const user = new User(name, username, password)
    registerUsers(user)
}