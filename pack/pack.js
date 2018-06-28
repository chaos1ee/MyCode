const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const {
  transformFromAst
} = require('babel-core');

let ID = 0;

function createAsset(filename) {
  // 读取文件
  const content = fs.readFileSync(filename, 'utf-8');

  // 讲文件转化为ast
  const ast = babylon.parse(content, {
    sourceType: 'module'
  });

  const dependencies = [];

  // 遍历ast
  traverse(ast, {
    ImportDeclaration: ({
      node
    }) => {
      dependencies.push(node.source.value);
    }
  });

  const id = ID++;

  // 将ast转化为code
  const {
    code
  } = transformFromAst(ast, null, {
    presets: ['env']
  });

  return {
    id,
    filename,
    dependencies,
    code
  }
}

// 生成“依赖图”
function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const queue = [mainAsset];

  for (const asset of queue) {
    asset.mapping = {};
    const dirname = path.dirname(asset.filename);
    asset.dependencies.forEach(relativePath => {
      // 将依赖的路径转化绝对路径
      const absolutePath = path.join(dirname, relativePath);
      const child = createAsset(absolutePath);
      asset.mapping[relativePath] = child.id;
      queue.push(child);
    });
  }
  return queue;
}

function bundle(graph) {
  let modules = '';

  graph.forEach(mod => {
    modules += `${mod.id}: [
      function (require, module, exports) { ${mod.code} },
      ${JSON.stringify(mod.mapping)},
    ],`;
  });

  const result = `
    (function(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(name) {
          return require(mapping[name]);
        }

        const module = { exports: {} };

        fn(localRequire, module, module.exports);

        return module.exports;
      }
      require(0);
    })({${modules}})
  `;

  return result;
}

const graph = createGraph('./entry.js');
const result = bundle(graph);

console.log(result);