exports.cli = {
  config: {
    description: '测试 Plugin 子命令', // 命令描述信息，显示在命令列表说明中
    name: 'mip2 template start', // 和 usage 一起组成 Usage 信息
    usage: '[name]',
    noArgs: true, // 不需要接受参数
    options: [
      ['-f, --force', '强制执行'],
      ['-p, --port <value>', '端口号']
    ],
    help: [
      '',
      '  Examples:',
      '    # 测试自定义 plugin 命令',
      '    $ mip2 template start [name] -f',
      '    # 测试自定义 plugin 命令',
      '    $ mip2 template start [name] -p 8888'
    ].join('\n')
  },
  main: function (args, opts) {
    // your own stuff
    console.log('args: ')
    console.log(args)
    console.log('opts: ')
    console.log('opts.force: ' + opts.force)
    console.log('opts.port: ' + opts.port)
  }
}
