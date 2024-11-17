// script.js
const flashlight = document.getElementById('flashlight');
const content = document.getElementById('content');
const story = document.getElementById('story');
const ending = document.getElementById('ending');
const characterName = document.getElementById('character-name');
const characterStory = document.getElementById('character-story');
const continueButton = document.getElementById('continue-button');

// Character data
const characters = {
  'Emily Harper': "Emily Harper disappeared mysteriously one winter night. Some say her whispers guide the wind in search of her lost love.",
  "Samuel 'Iron Sam' Miller": "Iron Sam, the foreman, roams the mines eternally with his lantern, trying to save the men lost in the collapse.",
  'Molly Greene': "Little Molly's laughter still echoes by the creek. They say she plays her games unseen, leaving trails of pinecones."
};

// Flashlight effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  flashlight.style.backgroundPosition = `${x}px ${y}px`;
});

// Character selection
document.querySelectorAll('.character-button').forEach(button => {
  button.addEventListener('click', () => {
    const character = button.getAttribute('data-character');
    characterName.textContent = character;
    characterStory.textContent = characters[character];
    content.classList.add('hidden');
    story.classList.remove('hidden');
    continueButton.classList.remove('hidden');
  });
});

// Continue to spooky ending
continueButton.addEventListener('click', () => {
  story.classList.add('hidden');
  ending.classList.remove('hidden');
});