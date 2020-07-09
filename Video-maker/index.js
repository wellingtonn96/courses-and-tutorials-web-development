const readline = require("readline-sync");

const robots = {
  text: require("./robots/text"),
};

async function start() {
  const content = {};

  content.searchTerm = askReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  const results = await robots.text(content);

  function askReturnSearchTerm() {
    return readline.question("Type a Wikipedia search term: ");
  }

  function askAndReturnPrefix() {
    const prefixes = ["who is", "What is", "The history of"];
    const selectedPrefixIndex = readline.keyInSelect(prefixes);
    const selectedPrefixText = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  }
}

start();
