# Overview

The `ath` CLI currently consists of two main components: a task helper and a configuration file. These components allow you to run commands across multiple folders and customize how the tool behaves in your environment.

## Task helper

The task helper allows you to execute commands across multiple nested folders in your current working directory (CWD). You can optionally specify folders to skip or include when running the command.

::: tabs

@tab Abstract Example

```sh
ath fep <<command>> [--skip-foo-bar-baz || --only-gris-gras-gräs]
```

@tab Practical Example

Imagine you want to remove node_modules folders in several projects: hello_world, calculatorApp, and any folder with "todo" in its name (like yet-another-todo or my-newest-vue-todo-app). You could run:

```sh
ath fep rm -rf node_modules --only-hello_world-calculatorApp-todo
```

This runs the command only in the specified folders.
:::

## Help

Need a quick guide? The ath CLI comes with built-in help. Just run:

```sh
ath help
```
