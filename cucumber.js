module.exports = {
  default:[
    `--format-options '{"snippetInterface": "synchronous"}'`,
    '--require features/step_definitions/**/*.js', // Load step definitions
  ].join(' ')
}