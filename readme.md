# Automated Git Commit Script

This project automates random git commits with unique timestamps for a specified number of times. The commit dates are randomly generated within the year **2023**. The script uses Node.js, Moment.js for date manipulation, and Simple-Git for git automation.

---

## Features
- Automatically generates **random dates** in 2023.
- Creates and commits a JSON file with the generated date.
- Pushes all commits to a remote Git repository.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or above)
- **Git** (latest version)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install the required packages:
   - `moment`
   - `simple-git`
   - `random-js`
   - `jsonfile`

3. **Setup Git**:
   Ensure your local repository is initialized and connected to a remote repository:
   ```bash
   git init
   git remote add origin <your-repo-url>
   ```

---

## Usage

Run the script by specifying the number of commits you want:

```bash
node index.js
```

The script will:
1. Generate random commit dates in 2023.
2. Update `data.json` with the generated date.
3. Commit the changes with the generated date as the commit message.
4. Push all changes to the remote repository.

---

## Example Output

Sample console output:

```
Value of x (weeks): 15
Value of y (days): 4
Commit Date: 2023-04-12T00:00:00+00:00
Value of x (weeks): 22
Value of y (days): 3
Commit Date: 2023-06-07T00:00:00+00:00
...
```

The commits will appear in your repository with accurate timestamps.

---

## Code Explanation

### Script Logic

1. **Dependencies**:
   - `moment`: Handles date manipulation.
   - `simple-git`: Automates git commands.
   - `random-js`: Generates random integers.
   - `jsonfile`: Reads/writes to `data.json`.

2. **Date Calculation**:
   The script randomly selects:
   - Weeks (`x`) → between 0 and 52.
   - Days (`y`) → between 0 and 6.
   The date is calculated starting from January 1, 2023.

3. **Commit Process**:
   - `data.json` is updated with the generated date.
   - A git commit is created using `simple-git`.
   - Commits are pushed to the remote repository.

---

## File Structure

```
project-folder/
│-- data.json          # JSON file to store commit dates
│-- index.js           # Main script
│-- package.json       # NPM configuration file
│-- README.md          # Project documentation
```

---

## Dependencies

- [moment](https://www.npmjs.com/package/moment)
- [simple-git](https://www.npmjs.com/package/simple-git)
- [random-js](https://www.npmjs.com/package/random-js)
- [jsonfile](https://www.npmjs.com/package/jsonfile)

---

## License

This project is licensed under the **MIT License**.

---

## Author

Madushan Ilangakoon  
LinkedIn: [madushan-ilangakoon](https://www.linkedin.com/in/madushan-ilangakoon/)
