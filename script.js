function showFunFact() {
    const funFacts = [
      "I can eat spicier food than most people! 🌶️",
      "I once binge-watched an entire show in one day! 🎥",
      "I love coding challenges and puzzles! 🧩",
      "I can lift twice my body weight! 🏋️‍♂️",
    ];
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('fun-fact').textContent = randomFact;
  }
  