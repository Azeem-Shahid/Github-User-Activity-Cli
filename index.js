const https = require("https");

// Helper function to display user activity
function displayActivity(events, username) {
  if (Array.isArray(events) && events.length > 0) {
    console.log(`Recent activity for GitHub user: ${username}`);
    events.forEach((event) => {
      if (event.type === "PushEvent") {
        console.log(
          `Pushed ${event.payload.size} commit(s) to ${event.repo.name}`
        );
      } else if (event.type === "IssuesEvent") {
        console.log(`Opened a new issue in ${event.repo.name}`);
      } else if (event.type === "WatchEvent") {
        console.log(`Starred ${event.repo.name}`);
      }
    });
  } else {
    console.log(`No recent activity found for user: ${username}`);
  }
}

// Function to fetch user activity from GitHub API
function fetchUserActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  https
    .get(url, { headers: { "User-Agent": "Node.js" } }, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const events = JSON.parse(data);
        displayActivity(events, username);
      });
    })
    .on("error", (err) => {
      console.error("Error fetching data:", err.message);
    });
}

// Function to display help/usage information
function printHelp() {
  console.log(`
    GitHub User Activity CLI:
    Usage:
      - Fetch recent activity: node index.js <GitHub username>

    Commands:
      - help : Display help information
      - <GitHub username> : Fetch recent activity of the specified GitHub user

    Example:
      node index.js octocat
  `);
}

// Main function to handle input and execute the program
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  // If no arguments or help command, display help by default
  if (!command || command === "help") {
    printHelp();
    return;
  }

  // Otherwise, treat the command as a GitHub username
  const username = command;
  fetchUserActivity(username);
}

main();
