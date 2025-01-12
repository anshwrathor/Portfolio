function showFunFact() {
  const funFacts = [
  "I may look calm, but I’ve mentally rehearsed every conversation I’ll ever have. Twice. 🤔💬",
  "I can survive without water for 3 days but not without Wi-Fi for 3 hours. 📶🚨",
  "I say 'literally' so much, I’ve convinced myself it's my second language. 📖😂",
  "The '5-minute break' I promised myself while studying turned into a 2-hour Netflix binge. 📺🍿",
  "I once Googled 'How to boil water' because I wanted to be absolutely sure. 🫠🔥",
  "I firmly believe that 90% of life’s problems can be solved by a good meme. 📸😂",
  "I speak fluent sarcasm; it's basically my native language. 🗨️😎",
  "I can do a full cardio session trying to untangle my headphones. 🎧💪",
  "I trust autocorrect with my life… until it embarrasses me in group chats. 😅✍️",
  "I set 10 alarms to wake up on time, and I snooze all 10. 🛌⏰",
  "I am currently in a committed relationship… with my bed. ❤️🛏️",
  "If procrastination were an Olympic sport, I’d have at least 10 gold medals. 🏅😴",
  "I’ve mastered the art of ‘looking busy’ while doing absolutely nothing. 🖥️👀",
  "Every time I delete my 'junk food’ app, I redownload it within 24 hours. 🍟🔄",
  "I laugh at my own jokes because, let’s be honest, someone has to. 🤣🤷‍♂️",
  "The only running I do is running out of patience. 🏃‍♂️😤",
  "I use my phone flashlight for everything—except finding my flashlight in the dark. 🔦🌀",
  "I constantly say ‘I have nothing to wear’ while staring at a closet full of clothes. 👗🫠",
  "I still don’t know what 50% of the emojis mean, but I use them anyway. 🤪🎉",
  "I thought adulting would be fun… turns out, it’s mostly emails and Googling 'What does APR mean?' 🧐📩",
  ];
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById('fun-fact').textContent = randomFact;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    // Toggle the "open" class on the menu
    menu.classList.toggle('open');
  });
} else {
  console.error('Menu button or menu element not found.');
}
});
