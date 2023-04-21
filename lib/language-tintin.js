'use babel'

export default {
  changeUseTintinComments: null,

  config: {
    useTintinComments: {
      type: 'boolean',
      default: true,
      description: 'Use Tintin comments by default when toggling line comments'
    }
  },

  activate () {
    this.changeUseTintinComments = atom.config.observe('language-tintin.useTintinComments', enabled => {
      const opts = {scopeSelector: ['.text.html.php.tintin']}
      if (enabled) {
        atom.config.set('editor.commentStart', '{{-- ', opts)
        atom.config.set('editor.commentEnd', ' --}}', opts)
      } else {
        atom.config.unset('editor.commentStart', opts)
        atom.config.unset('editor.commentEnd', opts)
      }
    })
  },

  deactivate () {
    this.changeUseTintinComments.dispose()
  }
}
