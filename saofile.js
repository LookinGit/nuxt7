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
        default: `My PWA App`
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
        'gitignore': '.gitignore'
      }
    }
  ],

  async completed () {
    this.gitInit()
    await this.npmInstall()
    this.showCompleteTips()
  }
}
