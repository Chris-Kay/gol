## Synopsis

This enables the standard Conway's Game of Life coding kata to be undertaken in Python. It should be functionally equivalent to the existing Game of Life katas.

## Installation

This project requires:
 * Python 2.6 and above.
 * nose (Unit test framework)
 * mock (mock object library)

The easiest way to install nose & mock is via the 'pip' package manager. See https://pypi.python.org/pypi/pip.
Mac Users: If you have any problems with 'pip', you might want to try 'easy_install' as sometimes this works better.

## Tests

The unit tests can be run from the project directory by running 'nosetests'. i.e.

    $ nosetests

Individual test files can be run using the following command:

    $ nosetests test/<TEST_FILE>.py
