const output = document.getElementById("output");

function log(msg) {
  // Replace instead of append
  output.textContent = msg;
  output.scrollTop = output.scrollHeight;
}

// Regex Tasks
function validateEmail() {
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const test = "hello@gmail.com";
  log(
    `Checking email: "${test}" -> ${
      emailRegex.test(test) ? "Valid" : "Invalid"
    }`
  );
}

function extractNumbers() {
  const str = "Order ID: 12345, Amount: $678";
  const nums = str.match(/\d+/g);
  log(`Extracted numbers from text: "${str}" → [${nums.join(", ")}]`);
}

function findCapitalWords() {
  const str = "Hello World, this Is Regex";
  const words = str.match(/\b[A-Z][a-z]*\b/g);
  log(`Words starting with capital letters: ${words.join(", ")}`);
}

function validatePassword() {
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const pass = "Test1234";
  log(
    `Checking password "${pass}" → ${
      passRegex.test(pass) ? "Strong enough!" : "Too weak!"
    }`
  );
}

//  Callback Tasks
function simpleCallback() {
  function doTask(task, callback) {
    log("Working on: " + task);
    callback();
  }
  doTask("Learn Regex", () => log("Task finished successfully!"));
}

function callbackHell() {
  log("Starting process...");
  setTimeout(() => {
    log("1. Logging in...");
    setTimeout(() => {
      log("2. Fetching user data...");
      setTimeout(() => {
        log("3. Fetching posts...");
        setTimeout(() => {
          log("All done! Posts loaded and ready.");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

//  Async/Await Tasks
async function fetchPost() {
  log("Fetching a post from API...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  log("Got the post:\n" + JSON.stringify(data, null, 2));
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitExample() {
  log("Please wait...");
  await wait(2000);
  log("Done waiting! 2 seconds later...");
}

async function fetchEmails() {
  log("Fetching emails...");
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  const emails = data.map((c) => c.email);
  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = emails.filter((e) => emailRegex.test(e));
  log(
    "First 5 valid emails:\n" +
      valid.slice(0, 5).join("\n") +
      "\n...(more hidden)"
  );
}

async function errorHandling() {
  log("Trying to fetch from a wrong URL...");
  try {
    const res = await fetch("https://wrongurl.typicode.com/404");
    const data = await res.json();
    log("Data: " + JSON.stringify(data));
  } catch (err) {
    log("Error caught: " + err.message);
  }
}

function clearOutput() {
  output.textContent = "Output cleared. Click a button to see results.";
}
