# lisovyi.net

Personal website built with Jekyll and hosted on GitHub Pages.

## Development

### Prerequisites

- You need to have `rbenv` installed on your system.

- You need to run the following commands to install Ruby and dependencies:

```shell
# Get the Ruby version from .ruby-version
RUBY_VERSION=$(cat .ruby-version)

# Install and set the Ruby version
rbenv install $RUBY_VERSION
rbenv local $RUBY_VERSION

# Install dependencies
gem install bundler
bundle install
```

### Running locally

The site will be available at http://localhost:4000 after running the following command:

```shell
bundle exec jekyll serve
```
