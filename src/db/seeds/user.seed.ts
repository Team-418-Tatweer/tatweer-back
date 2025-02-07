import { createUserFactory } from '@models/user'
export const seedUsers = async () => {
    try {
        const user = await createUserFactory({
            name: 'Vinos',
            email: process.env.USER_email || 'vinos.ben@gmail.com',

            password: process.env.USER_password || 'password',
            role: 'admin',
        })
        if (user) {
            console.log('🌱 seeding => users : user :', user)
            return user
        }
    } catch (err) {
        console.error(`🔥seeding failed  err : ${err}`)
    }
}
