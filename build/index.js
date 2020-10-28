const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const helper = require('../configs/helper');
const MODULES_ID = require('./config').MODULES_ID;
const zip =  require('./zip');
const upload = require('./upload');
const db = require('./db');

const argv = yargs(process.argv.slice(2)).argv;

function runBuild () {
  if (!argv.name) {
    console.log('[RunBuild] No Name!')
    return
  }
  build(argv.name)
}

function getFiles(dir, ext) {
  const dirPath = helper.resolve(dir)
  const result = []
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {   
      if (err) {
        console.log('[GetFiles] ', err)
        return resolve(result)
      }
      files.forEach((el) => {
        if (path.extname(el) === ext) {
          result.push(`${dirPath}/${el}`)
        }
      })
      return resolve(result)
    })
  })
}

async function build (page) {
  if (!page) return;
  const [ projectName, branch ] = page.split('/')
  const outPath = `pages/${projectName}/dist`
  const namePrefix = `e_${branch || projectName}_`

  // 删除dist目录下所有的zip文件
  const oldZip = await getFiles(outPath, '.zip')
  oldZip.forEach(el => {
    fs.unlinkSync(el)
  })

  if (projectName === 'video') {
    zip.copy(`pages/${projectName}/web/h`, `${outPath}/`)
  }

  zip.zip([
    'index.js',
    'video.mp4',
    'images'
  ], namePrefix, outPath).then(name => {
    if (argv.upload) {
      upload(name).then(({key, fsize}) => {
        if (argv.db) {
          db(MODULES_ID[projectName], key, fsize);
        }
      })
    }
  })
}

runBuild()
