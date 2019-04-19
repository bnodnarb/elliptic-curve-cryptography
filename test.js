const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'text',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself'
  }
];

(async () => {
  const response = await prompts(questions);

  // => response => { username, age, about }
  initializeScript(response);
})();

function initializeScript(response) {
  console.log(response.username);
  console.log(response.age);
  console.log(response.about);
}
