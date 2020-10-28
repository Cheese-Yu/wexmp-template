// Helper functions
const path = require('path');
const projectName = process.env.project_name || '';
const ROOT = path.resolve(__dirname, projectName ? `../pages/${projectName}` : '..');

const root = (args) => {
  return path.join(ROOT, 'src', args);
}
const rootNode = (args) => {
  return path.join(ROOT, args);
}

const resolve = (dir) => {
  return path.join(__dirname, projectName ? `../pages/${projectName}` : '..', dir)
}

module.exports = {
  root,
  rootNode,
  resolve
}