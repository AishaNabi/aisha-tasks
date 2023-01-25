import { askInquirer } from "./utils/inquirer.js"
import { onRegister } from "./controller/register.js"
import { onLogin } from "./controller/login.js"

export async function entryPoint() {
    const operation = await askInquirer('list', 'operation', 'Please choice: ', ['Register', 'Login'])
    switch (operation) {
        case 'Register':
            return onRegister()
        case 'Login':
            return onLogin()
        default:
            throw new Error('You must select one of them')
    }
}
entryPoint()
