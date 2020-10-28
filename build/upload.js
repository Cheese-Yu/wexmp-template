/**
 * @description 压缩包上传至七牛云
 * @Date 2020-10-21
 * @Last modified time: 2020-10-21
 */

const qiniu = require('qiniu');
const path = require('path');
const config = require('./config').QINIU;

function genToken() {
    const { accessKey, secretKey, bucket } = config;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    const options = {
        scope: bucket,
        returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const token = putPolicy.uploadToken(mac);

    console.log('[upload] get token ok.');
    return token;
}

function upload2Qiniu(token, file) {
    const config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z2;
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    const key = path.basename(file);

    console.log('[upload] will be upload file=', file, ', key=', key, ' to qiniu.');

    return new Promise(function(resolve, reject) {
        formUploader.putFile(token, key, file, putExtra, function(respErr, respBody, respInfo) {
            if (respErr) {
                console.log('[upload] error, ', respErr);
                reject(respErr);
            } else {
                console.log('[upload] ok, key=',JSON.stringify(respBody));
                resolve(respBody);
            }
        });
    });
}

module.exports = function(file) {
    const token = genToken();
    return upload2Qiniu(token, file);
};