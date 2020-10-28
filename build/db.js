/**
 * @description 修改素材模块的文件名和时间
 * @Date 2020-10-21
 * @Last modified time: 2020-10-21
 */

let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectId;
const config = require('./config').MONGODB;

module.exports = function(moduleId, file, size) {
    if (!moduleId || !moduleId.length) return;
    const client = new MongoClient(config.dbUrl, { useUnifiedTopology: true });
    client.connect(async (err, client) => {
        console.log("[db]Connected successfully to server");

        const db = client.db(config.dbName);

        try {
            const insert = await db.collection('materials').insertOne({
                "_isDeleted": false,
                "tags": [],
                "typeId": "4",
                "groupId": "5ea7a8ed7cfe9d00399e71e0",
                "file": file,
                "name": file,
                "size": size,
                "fileType": "application/zip",
                "updateDate": new Date(),
                "__v": 0.0
            })
            console.log('[db] insert materials, _id:', insert.insertedId);
        } catch (e) {
            console.log('[db] insert materials failed, ', e.toString());
        }

        try {
            if (Array.isArray(moduleId)) {
                const promises = moduleId.map(async (id) => {
                    const appmodule = await db.collection('appmodules').findOne({_id : ObjectId(id)})
                    const last = appmodule&&appmodule.file || '';
                    await db.collection('appmodules').updateOne({_id : ObjectId(id)}, {$set: {last: last, file: file, updateDate: new Date()}});
                    return id;
                });
                const update = await Promise.all(promises);
                console.log('[db] update appmodules, modifiedCount=', update.length, ',_id: ' + JSON.stringify(moduleId));
            } else {
                const appmodule = await db.collection('appmodules').findOne({_id : ObjectId(moduleId)})
                const last = appmodule&&appmodule.file || '';
                const update = await db.collection('appmodules').updateOne({_id : ObjectId(moduleId)}, {$set: {last: last, file: file, updateDate: new Date()}});
                console.log('[db] update appmodules, modifiedCount=', update.modifiedCount, ',_id: ' + moduleId);
            }
        } catch (e) {
            console.log('[db] update appmodules failed, ', e.toString());
        }

        client.close();
    });
};
