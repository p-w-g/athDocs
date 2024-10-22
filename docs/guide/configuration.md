# Configuration

The configuration options in ath provide a way to tailor the tool’s behavior, offering users greater control over how and where commands are run.

By default, the configuration file is stored in the user’s home directory under `~/.athconfig`,

With these settings, you can:

- Define which folders the tool operates on by default.
- Exclude certain directories (like .git or .vscode) to avoid unintended changes.

## Available commands

### pcp

Prints out the configuration file’s path.

### pcf

Prints out the configuration file’s content.

### swd

Sets the current working directory as the default for future use with fep, until a new directory is set or it’s unset.

### uwd

Unsets the default working directory, allowing fep to run in the current directory.

### ignore

Adds folders to the permanently ignored list.
Example: ath ignore .git .idea .vscode

### unignore

Removes folders from the permanently ignored list.
Example: ath unignore .git .idea .vscode

## Future improvements

The command notation will be updated in the future to something more harmonized, like ath config --set-folder, for consistency with other commands, such as for-each. This will make the syntax more intuitive and uniform across the tool.

::: info
In the future, a sustain flag will be introduced, which will prevent processes from timing out during long-running tasks. This could be coupled with a permanent sustain config feature, giving users even more flexibility to keep processes alive when necessary.
:::
