const exeDir = Deno.execPath().replace(/[^/\\]+$/, "");
const theaterFixDir = exeDir + "..\\TheaterFix\\";
const realExe = theaterFixDir + "yt-dlp-real.exe";
const cookiesPath = theaterFixDir + "cookies.txt";

const args = Deno.args
  .filter(a => a !== "--ignore-config")
  .concat(["--cookies", cookiesPath]);

const cmd = new Deno.Command(realExe, {
  args,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});
const { code } = await cmd.output();
Deno.exit(code);