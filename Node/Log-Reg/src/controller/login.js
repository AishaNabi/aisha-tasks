import { getUser } from "../api/index.js"
import { createHash } from "../utils/createHash.js"
import { askInquirer } from "../utils/inquirer.js"

export async function onLogin() {
    const username = await askInquirer('input', 'username', 'Enter your username: ')
    const password = createHash(await askInquirer('password', 'password', 'Enter your password: '))

    const userByUsername = await getUser(username)
    if (userByUsername.password === password) {
        console.log("Welcome!")
    }
}
