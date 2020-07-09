const algorthmia = require("algorithmia");
const algorithmiaApiKey = require("../config/apiKey").apiKeyAlgorithmia;
const sentenceBoundaryDetection = require("sbd");

async function robot(content) {
  await fetchContentFromWikipedia(content);
  sanitizeContent(content);
  // breakContentIntoSetence(content)

  async function fetchContentFromWikipedia(content) {
    try {
      const algoritmiaAuthenticated = algorthmia(algorithmiaApiKey);
      const wikipediaAlgorithm = algoritmiaAuthenticated.algo(
        "web/WikipediaParser/0.1.2"
      );
      const wikipediaResponse = await wikipediaAlgorithm.pipe(
        content.searchTerm
      );
      const wikipediaContent = wikipediaResponse.get();

      content.sourceContentOriginal = wikipediaContent.content;
    } catch (error) {
      console.log(error);
    }
  }

  function sanitizeContent(content) {
    const withoutBlankLinesAndMarkdown = removeBlankLinesAndMarkdown(
      content.sourceContentOriginal
    );
    const withoutDatesInParentheses = removeDatesInParentheses(
      withoutBlankLinesAndMarkdown
    );

    content.sourceContentSanitized = withoutDatesInParentheses;

    function removeBlankLinesAndMarkdown(text) {
      const allLines = text.split("\n");

      const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
        if (line.trim().length === 0 || line.trim().startsWith("=")) {
          return false;
        }

        return true;
      });

      return withoutBlankLinesAndMarkdown.join(" ");
    }
  }

  function removeDatesInParentheses(text) {
    return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, "").replace(/  /g, " ");
  }

  function breakContentIntoSentences(content) {
    content.sentences = [];

    const sentences = sentenceBoundaryDetection.sentences(
      content.sourceContentSanitized
    );
    sentences.forEach((sentence) => {
      content.sentences.push({
        text: sentence,
        keywords: [],
        images: [],
      });
    });
  }
}

module.exports = robot;
