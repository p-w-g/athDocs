# For Each

This function is a task runner that filters folders based on user-provided arguments and executes commands in parallel across the filtered folders. The flexibility is provided via --skip and --only flags to exclude or target specific folders

## Folder crawling

Retrieves a list of directories from either a configured default folder or the current directory.
If folders are specified in the configuration to be ignored, it excludes them from the directory list.

## Skip and Only flags

The --skip flag is used to exclude certain folders, while the --only flag limits operations to specified folders. If these flags are used without appropriate values, an error message is displayed.
It builds a list of folders to process based on these flags.

```sh
ath fep <<command>> --skip-this
ath fep <<command>> --only-that
```

## Sustain flag

The --sustain flag is used to prevent a command from timing out. By default, commands that take longer than 5 minutes will time out, but using this flag allows long-running processes to continue without interruption.

```sh
ath fep <<command>> --sustain
```

This is especially useful for tasks like server startups or extensive build processes that are expected to take longer than usual.

::: important Upcoming Changes:
A future refactor will change how timeouts are handled. Timeout behavior will become opt-in, allowing you to set custom timeout lengths via configuration.
:::

## Local flag

The --local flag allows you to bypass the configured default working directory for a one-off execution. This is useful when you typically work in a set folder but need to quickly run a command in a different location without altering your configuration.

```sh
ath fep <<command>> --local
```

This flag ensures that your command will run in the current working directory (or wherever you specify) without impacting your default settings.

## Examples

::: tabs

@tab Abstract

```sh
ath fep <<command>> [--skip-foo-bar-baz || --only-gris-gras-gräs]
```

@tab --only

Removes node_modules, dist, target, build and bin folders in apps 1, 2 and 3.

```sh
ath fep rm -rf node_modules dist target build bin --only-app1-app2-app3
```

@tab --skip

Installs node modules in all folders beside app 1,2 or 3.

```sh
ath fep npm i --skip-app1-app2-app3
```

@tab --sustain

Runs a long-running build process without timing out, keeping the process active beyond the 5-minute limit.

```sh
ath fep npm run build --sustain
```

@tab --local

Runs git pull in the current directory instead of the default configured working directory.

```sh
ath fep git pull --local
```

@tab chaining

Will fetch and pull all changes in all folders and once all tasks either are done or failed will echo 'done'.

```sh
ath fep "git fetch && git pull" && echo 'done'
```

@tab fallbacks

Will either run test:jest if exists or test as a fallback.

```sh
ath fep "npm run test:jest || npm run test"
```

:::

## Caveats

Be aware of some limitations of current implementation of the CLI.

### Timeouts

Currently, any process that runs longer than 5 minutes will time out and fail. This is intended to prevent indefinite hangs but can cause issues for long-running processes, such as server startups or large operations that take more time by design.

::: important
If a process times out, it may become orphaned, meaning it will continue running in the background without being tracked, which can lead to resource leakage or other unintended side effects.
:::

### Graceful fail

This tool may encounter certain failures that don't necessarily indicate a critical error, but rather an expected outcome requiring user intervention. For example, running a git merge command that results in a merge conflict will cause an exit code 1, but this is a normal part of the process and not a fatal error. The process may exit with a non-zero code even when user intervention is needed rather than an actual error.

::: tip
Consider reviewing logs or output. Known issues are missing access token, issues with npm feed or already mentioned merge conflict
:::

### git commit

The current implementation does not preserve quotes for arguments. When passing commands like `git commit -m "message content"`, the quotes are stripped, and the string is split into separate arguments (e.g., it will be interpreted it as `[ git, commit, -m, message, content ]` instead of keeping message content together).

### Resource limitations

On machines with limited resources (e.g., low memory or CPU), running tasks like npm ci in multiple folders concurrently (e.g., more than 5) can cause the system to run out of memory or otherwise degrade performance.

::: tip
Be mindful of your machine’s hardware limitations, especially when running resource-intensive tasks in parallel.
Running too many tasks at once may result in the machine becoming unresponsive or processes failing due to lack of available memory.
:::
