import inquirer from 'inquirer'

export async function askInquirer(type, name, message, choices) {
    const obj = await inquirer.prompt({ type, name, message, choices })
    return obj[name]
}