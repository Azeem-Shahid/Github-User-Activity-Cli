
# GitHub User Activity CLI

This project is a simple command-line interface (CLI) tool that fetches and displays the recent activity for a specified GitHub user. By using the GitHub API, it retrieves the latest events (like pushes, issues, stars, etc.) and displays them in the terminal. This tool is great for practicing API consumption and building a CLI app using Node.js.

## Features

- Fetch recent GitHub user activity.
- Display various event types:
  - Push events (commits)
  - Issues created
  - Repository starred
- Display help commands by default if no input is provided.
- Gracefully handle invalid usernames or API failures.

## Usage

### Fetch Recent Activity

To fetch a GitHub user's activity, run:

```bash
node index.js <GitHub username>
```

Example:

```bash
node index.js octocat
```

### Help Command

If no arguments are passed or if you type `help`, it will display the usage and available commands.

```bash
node index.js help
```

### Commands

- `help`: Display help information.
- `<GitHub username>`: Fetch the recent activity for the specified GitHub user.

### Example Output

```bash
Recent activity for GitHub user: octocat
- Pushed 3 commits to octocat/Hello-World
- Starred octocat/Spoon-Knife
- Opened a new issue in octocat/Hello-World
```

## Project Roadmap

This project is part of the [GitHub User Activity project on roadmap.sh](https://roadmap.sh/projects/github-user-activity).

## Requirements

- Node.js (v12+)
- No external libraries are required to install (uses Node.js built-in modules).

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd github-user-activity
   ```

3. Run the script:
   ```bash
   node index.js <GitHub username>
   ```

## License

This project is licensed under the MIT License.
```

### Steps to Create the README File:

1. Open your project folder.
2. Create a new file named `README.md`.
3. Copy and paste the content above into the `README.md` file.
4. Save the file.

This `README.md` file will help guide anyone who uses or contributes to your project, providing clear instructions for installation, usage, and an overview of the project's purpose.
