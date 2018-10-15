# Recruitment Day Katas

The following Katas are available for canidates:

| Language          | IDE / Editor           | Init Command                               | Test Command  |
| ----------------- | ---------------------- | ------------------------------------------ | ------------- |
| clojure           | Atom, Sublime, VS Code |                                            | `boot test`   |
| java              | IntelliJ, Eclipse      |                                            | `mvn test`    |
| javascript-modern | Atom, Sublime, VS Code | `npm install`                              | `npm test`    |
| javascript-node   | Atom, Sublime, VS Code | `npm install`, `npm install --global gulp` | `gulp`        |
| python            | Atom, Sublime, VS Code | `pip install nose mock`                    | `nosetests`   |
| ruby              | Atom, Sublime, VS Code | `gem install rspec`                        | `rspec -fd`   |
| scala             | IntelliJ, Eclipse      | .                                          | `sbt test`    |
| c#                | Visual Studio          | `dotnet restore`                           | `dotnet test` |

Deprecated ones we're trying not to use, but don't currently feel deleting entirely are in the `deprecated` folder:

| Language           | IDE / Editor           | Init Command                                       | Test Command      |
| ------------------ | ---------------------- | -------------------------------------------------- | ----------------- |
| javascript-jasmine | Atom, Sublime, VS Code |                                                    | `./grunt jasmine` |
| perl               | Atom, Sublime, VS Code | See `perl/README.md`, **involved** set up process. | `./run_tests.sh`  |

## Administering Kata

- Obtain current up to date katas:
  - Checkout git repository locally in a suitable workspace location.
    `git clone git@github.com:bbc/recruitment-katas.git`
  - Or reset from previous candidate and ensure up to date.
    `git reset --hard`, `git pull`
- Set up the language/kata as documented in its local README.md.
  - The above table is for quick reference.
- Verify the language of choice is by running their initialisation command and test command.
  - You should see the first underpopulation scenario fail.
- Load IDE and ensure that project is loaded, test any integrations such as the build/test system if available.
- Consider disabling any non standard customisations to the laptop for the length of the kata.
  - While the candidate is not being assesed on their ability to use the IDE or OS, keeping it standard may assist them.
