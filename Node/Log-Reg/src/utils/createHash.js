import crypto from 'node:crypto'

export function createHash(password) {
    return crypto.createHash("sha256", password).digest('hex')
}