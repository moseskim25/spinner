const dash = function(x, timeout) {
  setTimeout(() => {
    process.stdout.write(`\r${x}`);
  }, timeout);
}
dash('|   ', 100);
dash('/   ', 300);
dash('-   ', 500);
dash('\\   ', 700);
dash('|   \n', 1000);