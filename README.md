# mip-cli-plugin-foo

## mip2 cli 用户自定义命令插件 开发示例

```
├── cli
│   ├── foo
│   │   └── bar.js    // 子命令，mip2 foo bar
│   └── foo.js     // 主命令，mip2 foo
├── index.js
├── lib                 // 建议把业务逻辑写在 lib 目录
├── package.json
└── README.md

```

`cli` 目录是命令的入口，所有的命令都应该放在这里。
`mip2 foo` 会自动读取 `cli/foo.js` 对应的模块。同理：
`mip2 foo bar` 会自动读取 `cli/foo/bar.js` 对应的模块。