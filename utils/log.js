const chalk = require("chalk");

module.exports = (message, type) => {
  switch (type) {
    case "warn":
      console.log(chalk.bold.hex("#FF0000")("[ âš ï¸ Error ] Â» ") + chalk.white(message));
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")("[ âŒ Error ] Â» ") + chalk.white(message));
      break;
    default:
      const colors = ['#FFA500', '#FFFF00', "#00FF00", '#0000FF', "#4B0082", "#A020F0"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      console.log(chalk.bold.hex(randomColor)("ðŸ¤– UZAIR SIR [BOT] Â» ") + chalk.white(message));
      break;
  }
};

module.exports.loader = (message, type) => {
  switch (type) {
    case "success":
      console.log(chalk.bold.hex("#00FF00")("âœ… UZAIR SIR [BOT] â¯ ") + chalk.white(message));
      break;
    case "warn":
    case "error":
      console.log(chalk.bold.hex("#FF0000")("â— UZAIR SIR [BOT] â¯ ") + chalk.white(message));
      break;
    default:
      const loaderColors = ['#FFA500', '#FFFF00', "#00FF00", "#0000FF", "#4B0082", "#A020F0"];
      const color = loaderColors[Math.floor(Math.random() * loaderColors.length)];
      console.log(chalk.bold.hex(color)("âš™ï¸ UZAIR SIR [BOT] â¯ ") + chalk.white(message));
      break;
  }
};
