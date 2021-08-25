const db = require("../settings.js");
const sql = require('mssql');

async function addUIBJson(Message_ID, Message_Json, saveToFile) {
    try {
        let pool = await sql.connect(db);
        let insertData = await pool.request()
            .input('Message_ID', sql.NVarChar, Message_ID)
            .input('Message_Json', sql.NVarChar, Message_Json)
            .input('Message_Body', sql.NVarChar, saveToFile)
            .execute('insertData')
        return insertData.recordsets;
    }
    catch (err) {
        return false;
    }
}

async function addJson(saveToFile) {
    try {
        let pool = await sql.connect(db);
        let insertJson = await pool.request()
            .input('Message_Body', sql.NVarChar, saveToFile)
            .execute('insertJson')
        return insertJson.recordsets;
    }
    catch (err) {
        return false;
    }
}

module.exports = {
    addJson : addJson,
    addUIBJson : addUIBJson
}