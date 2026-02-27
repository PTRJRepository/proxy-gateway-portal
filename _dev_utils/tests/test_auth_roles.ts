import { authenticateUser } from '../../Dashboard_Utama/utils/auth-service'
import { userRepository } from '../../Dashboard_Utama/utils/user-repository'

async function testUserAndAuth() {
    console.log('--- STARTING USER AUTH & ROLE TEST ---')

    const testUsername = 'testvisitor'
    const testPassword = 'password123'

    try {
        // 1. Check if test user exists, if so delete
        const existing = await userRepository.findByEmail(testUsername)
        if (existing) {
            console.log('Cleaning up existing test user...')
            await userRepository.delete(existing.id)
        }

        // 2. Create User
        console.log('Creating test user with VISITOR role...')
        const newUser = await userRepository.create({
            name: 'Test Visitor',
            email: testUsername,
            password: testPassword,
            role: 'VISITOR',
            divisi: 'AL'
        })

        if (!newUser) throw new Error('Failed to create user')
        console.log('✅ User created:', { id: newUser.id, username: newUser.email, role: newUser.role, divisi: newUser.divisi })

        // 3. Authenticate User
        console.log('Authenticating test user...')
        const authResult = await authenticateUser(testUsername, testPassword)

        if (authResult.success) {
            console.log('✅ Auth successful! Token generated.')
            console.log('User info from token:', authResult.user)
        } else {
            console.error('❌ Auth failed:', authResult.error)
        }

        // 4. Cleanup
        console.log('Cleaning up test user...')
        await userRepository.delete(newUser.id)
        console.log('✅ Cleanup complete.')

    } catch (e) {
        console.error('TEST FAILED:', e)
    }
}

testUserAndAuth()
