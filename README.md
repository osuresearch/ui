# ORIS UI Package

Frontend UI components built on [Bootstrap 4](http://v4-alpha.getbootstrap.com/) for use in PHP applications. Includes:
* SASS build with utilities for advanced usage
* Compiled `ui.css` and `ui.js` scripts
* View templates for use with [Symfony Forms](http://symfony.com/doc/current/forms.html)
* Commonly used "enhanced" form components, including lookups, date pickers, and multi-file uploaders

## Installation

This library requires PHP 5.6 or later. It's installable via Composer through `composer.json`, as long as you add UCR as a GitLab repository source:

```
{
    "repositories": [
        {
            "type": "gitlab",
            "url":  "git@code.osu.edu:ORIS/ui.git"
        }
    ],
    "config": {
        "gitlab-domains": [
            "code.osu.edu"
        ]
    },
    "require": {
        "oris/ui": "@dev"
    },
    ... etc ...
}
```

Chase will eventually update the ORIS Satis service to make this slightly easier to configure. :)

## Testing

TBD

## Contributing

TBD
