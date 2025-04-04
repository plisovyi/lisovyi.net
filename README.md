# lisovyi.net

Personal website built with Jekyll and hosted on GitHub Pages.

## Development

### Prerequisites

- Ruby (version specified in `.ruby-version`)
- Bundler

### Setup

#### Ensure you are using correct Ruby version with rbenv

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

```shell
bundle exec jekyll serve
```

The site will be available at http://localhost:4000
