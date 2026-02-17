const exeDir = Deno.execPath().replace(/[^/\\]+$/, "");
const theaterFixDir = exeDir + "..\\TheaterFix\\";
const realExe = theaterFixDir + "yt-dlp-real.exe";
const cookiesPath = theaterFixDir + "cookies.txt";
const denoPath = exeDir + "deno.exe";

let args = Deno.args.filter(a => a !== "--ignore-config");

if (!args.some(a => a.startsWith("--js-runtimes"))) {
  args = args.concat(["--js-runtimes", `deno:${denoPath}`]);
}

args = args.concat(["--cookies", cookiesPath]);

const cmd = new Deno.Command(realExe, {
  args,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});
const { code } = await cmd.output();
Deno.exit(code);
