# Get Started

Getting started with `ath` is simple! Below, you'll find the prerequisites, installation instructions, and some quick checks to ensure everything's set up correctly.

## Prerequisites

Before you begin, you'll need .NET installed.
It's available from Microsoft, and you can grab it [here][dotnet]

## Installation

There are two ways to install `ath`:

### Via NuGet

The latest stable release is available as a package on [NuGet][nuget]

To install globally, just run the following:

```sh
dotnet tool install --global ath
```

### Via GitHub

If you've cloned the project directly from the [GitHub repo][github], follow these steps in the project folder

```sh
dotnet pack ath.generated.sln
dotnet tool install --global --add-source ./nupkg ath
```

This will build the tool locally and install it from the generated package.

## Sanity check

To confirm that everything is working properly, run:

```sh
ath help
```

If you see the help menu, you’re good to go!

## Uninstall

If you need to uninstall `ath` for any reason, you can do so with:

```sh
dotnet tool uninstall ath -g
```

This will remove the global installation of ath.

[dotnet]: https://dotnet.microsoft.com/en-us/download
[nuget]: https://www.nuget.org/packages/ath/
[github]: https://github.com/p-w-g/ath
