const { db } = require('./utils/db');
const { serviceRepository } = require('./utils/service-repository');

async function testQuery() {
    try {
        console.log("Checking AccessControl table...");
        const users = await db.query('SELECT * FROM user_ptrj ORDER BY id DESC OFFSET 0 ROWS FETCH NEXT 5 ROWS ONLY');
        console.log("Recent users:", users);

        const access = await db.query('SELECT * FROM AccessControl');
        console.log("AccessControl entries:", access);

        // Test the new findByUser method on the last user
        if (users.length > 0) {
            const lastUser = users[0];
            console.log(`\nTesting findByUser for user ${lastUser.name} (Role: ${lastUser.role})...`);
            const services = await serviceRepository.findByUser(lastUser.id, lastUser.role);
            console.log("Services allowed:", services.map(s => s.serviceId));
        }

    } catch (e) {
        console.error("Error:", e);
    }
    process.exit(0);
}

testQuery();
