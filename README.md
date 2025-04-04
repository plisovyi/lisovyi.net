# lisovyi.net

Personal website built with Jekyll and hosted on GitHub Pages.

## Development

### Prerequisites

- Ruby 3.3.4
- Bundler 2.3.26 or newer

### Setup

#### Option 1: Using rbenv

```shell
rbenv install 3.3.4
rbenv local 3.3.4
```

#### Option 2: Using asdf

```shell
asdf plugin add ruby
asdf install ruby 3.3.4
asdf local ruby 3.3.4
```

#### Install dependencies

```shell
gem install bundler
bundle install
```

### Running locally

```shell
bundle exec jekyll serve
```

The site will be available at http://localhost:4000
