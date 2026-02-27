import db from '../../Dashboard_Utama/utils/db'

async function checkSchema() {
    try {
        console.log('Fetching schema for user_ptrj...')
        const columns = await db.query(`
            SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_NAME = 'user_ptrj'
        `)
        console.table(columns)
    } catch (e) {
        console.error(e)
    } finally {
        await db.close()
    }
}

checkSchema()
