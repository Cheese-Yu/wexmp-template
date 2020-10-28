const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const helper = require('../configs/helper')

function copy (source, target) {
  const sourcePath = helper.resolve(source)
  const targetPath = helper.resolve(target)
  const baseName = path.basename(sourcePath)

  if (!fs.existsSync(sourcePath)) return

  if (fs.lstatSync(sourcePath).isFile()) {
    // 如果源文件是文件
    if (targetPath.split('.').length === 1) {
      // 如果地址是个目录
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath)
      }
      fs.copyFileSync(sourcePath, path.join(targetPath, baseName))
    } else {
      // 如果地址是个文件
      fs.copyFileSync(sourcePath, targetPath)
    }
  } else {
    // 如果源文件是文件夹
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath)
    }

    const files = fs.readdirSync(sourcePath)
    files.forEach(function (file) {
      copy(path.join(source, file), path.join(target, file))
    })
  }
}

function zip (files, target) {
  if (!files || files.length < 1) {
    console.log('[zip]no file need zip.')
    return
  }

  const name = target + '.zip'
  const output = fs.createWriteStream(name)
  const archive = archiver('zip', { zlib: { level: 9 } })
  archive.pipe(output)

  files.forEach(f => {
    if (fs.existsSync(f)) {
      const t = path.basename(f)
      if (fs.lstatSync(f).isFile()) {
        archive.file(f, {name: t})
      } else {
        archive.directory(f, t)
      }
    } else {
      console.log('[zip]not found', f)
    }
  })

  archive.finalize()

  return new Promise(function (resolve, reject) {

    output.on('close', function () {
      resolve(name)
      console.log('[zip]' + archive.pointer() + ' total bytes')
      console.log('[zip]archiver has been finalized and the output file descriptor has closed.')
    })

    archive.on('error', function (err) {
      reject(err)
      throw err
    })
  })
}

function date () {
  function full (it) {
    return it < 10 ? '0' + it : it
  }

  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()

  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return [year, month, day, hour, minute, second].map(it => full(it)).join('')
}

function _zip (paths, name, dir = 'dist') {
  name += date()
  dir = helper.resolve(dir)
  return zip(paths.map(it => path.join(dir, it)), path.join(dir, name))
}

module.exports = {
    copy,
    zip: _zip
}
