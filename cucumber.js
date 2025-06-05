module.exports = {
  default: [
    '--require features/step_definitions/**/*.js',
    '--require features/support/hooks.js',
    '--publish-quiet'
  ].join(' ')
};
