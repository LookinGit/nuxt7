const path = require('path')

module.exports = {
  prompts () {
    return [
      {
        name: 'name',
        message: 'Project name',
        default: '{outFolder}'
      },
      {
        name: 'description',
        message: 'Project description',
        default: 'My PWA App'
      },
      {
        name: 'npmClient',
        type: 'list',
        message: 'Package manager',
        default: 'npm',
        choices: ['npm', 'yarn']
      }
    ]
  },

  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore'
      }
    }
  ],

  async completed () {
    // this.gitInit()
    // const pkgPath = path.join(this.outDir, 'package.json')
    // if (await this.fs.pathExists(pkgPath)) {
    //   await this.npmInstall()
    // }
    this.showProjectTips()
  }
}
