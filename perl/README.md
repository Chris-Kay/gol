# Perl coding test

This enables the standard *Conway's Game of Life* coding test to be undertaken using Perl, should that be required.

## Prerequisites

On the host machine, there are two things that will need to be installed beforehand:
* [Vagrant](https://www.vagrantup.com/downloads.html)
* [Virtualbox](https://www.virtualbox.org/wiki/Downloads)

## Setup

Once those are installed, all that is required is to check out this section of the project, navigate to the `install` directory and run `vagrant.sh`.

This will do the following:
* Download (if necessary) a base VM image for Vagrant.
* Provision the Vagrant box, including setting up the necessary environment for the Perl tests.
* Log the user into the Vagrant host.

## Running the tests

After running setup, the system should be at a bash prompt.  This will be in the Vagrant box, which is an Ubuntu "Trusty" host.  It has the *vim* and *nano* editors pre-installed, along with a fairly up-to-date version of Perl and the *Moose* OO framework for Perl.

In keeping with the other tests no additional documentation has been provided, in particular the *perldoc* command won't be available.  If this is deemed a necessary item then it can be installed by manually running `sudo -E aptitude install perl-doc`.

The tests themselves can be run with
    $ cd ~/coding-test'
    $ ./run_tests.sh'


If the candidate accidentally presses CTRL-D or otherwise exits the Vagrant virtual host then they can be reconnected with a simple `vagrant ssh`.

