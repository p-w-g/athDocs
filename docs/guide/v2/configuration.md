# Configuration

The configuration options in **ATH** provide a flexible way to tailor the tool’s behavior, giving you greater control over where and how commands are executed.

By default, the configuration file is stored in your home directory under `~/.athconfig`

This configuration file lets you:

- Define the default working directory.
- Exclude certain directories (like `.git`, `.vscode`, `.idea`) from being processed.
- Configure timeouts to keep your workflows responsive and avoid stalled parallel tasks.

## Available `cfg` Commands

### 🛤️ `cfg path`

Prints the path to the current configuration file.

### 📄 `cfg file`

Prints the contents of the current configuration file.

### 📍 `cfg here`

Sets the **current working directory** as the default working directory for future `fep` commands, until it is changed or unset.

### 🛸 `cfg away`

Unsets the default working directory, allowing `fep` commands to run from the current working directory.

### 🚫 `cfg ignore [folders...]`

Adds specified folders to the permanently ignored list. These folders will be excluded from future `fep` operations.

### ✅ `cfg heed [folders...] | --all`

Removes specified folders from the permanently ignored list, or use `--all` to clear all ignored folders.

### ⏰ `cfg to [seconds]`

Sets the given amount of time as a timeout for execution of parallel tasks. This is useful for keeping your workflows snappy, avoiding situations where tasks get stuck indefinitely.

### ⏰ `cfg nto`

Disables the timeout for task execution. This ensures that tasks are allowed to run as long as they need, even if they take a significant amount of time.

## Examples

::: tabs

@tab Config File

Use `path` to print the path to the current configuration file.

```sh
ath cfg path
```

Or `file` to print the contents of the current configuration file.

```sh
ath cfg file
```

@tab Working Dir

Use `here` to set the **current working directory** as the default working directory for future `fep` commands, until it is changed or unset.

```sh
ath cfg here
```

Use `away` to unsets the default working directory, allowing `fep` commands to run from the current working directory.

```sh
ath cfg away
```

@tab Target dirs

`Ignore` followed by space separated folder list adds specified folders to the permanently ignored list. These folders will be excluded from future `fep` operations.

```sh
ath cfg ignore .git .idea .vscode
```

To remove specified folders from the permanently ignored list use `heed`.

```sh
ath cfg heed .git .idea .vscode
```

Or use `--all` to clear all ignored folders.

```sh
ath cfg heed --all
```

@tab Time Outs

Set the given amount of time as a timeout for execution of parallel tasks with `to`.

```sh
ath cfg to [sec]
```

Optionally, pass 0 to disable timeout.

```sh
ath cfg to 0
```

`nto` Disables timeout for task execution.

```sh
ath cfg nto
```

:::
