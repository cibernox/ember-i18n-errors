# Ember-i18n-errors

This addon leverages [ember-i18n](https://github.com/jamesarosen/ember-i18n) but for the specific 
purpose of localize error messages. 

It adds to your app a handy helper `{{t-error error}}` for translating errors in the context of
the current route, but also takes advantage of Ember's route nesting to lookup translations in fallback on 
parent routes.

Using ember-intl?  See: [ember-intl-errors](https://github.com/Mifrill/ember-intl-errors)

## Installation

This addon requires Ember.js 1.13+ and [ember-i18n](https://github.com/jamesarosen/ember-i18n) 4.1+

* `ember install ember-i18n-errors`

## Usage

This is better explained with an example.

Let's say we have a validation error with the mandatory shape (`{ attribute: 'email', message: 'invalid' }`) and
some nested routes with this structure:

```
parent
└── child
    └── grandchild
```

If within the `grandchild.hbs` template we use the helper `{{t-error error}}` the helper will try to
find the most especific translation key for it based on the route hierarchy. 

It follows a set of conventions very similar to how [rails-i18n handles ActiveRecord errors](http://guides.rubyonrails.org/i18n.html#error-message-scopes).

The fallback chain for that error will be:

```
parent.child.grandchild.errors.email.invalid
parent.child.grandchild.errors.invalid
parent.child.errors.email.invalid
parent.child.errors.invalid
parent.errors.email.invalid
parent.errors.invalid
errors.email.invalid
errors.invalid
```

If none of those keys is defined in your translations the missing translation message will point you to the most
specific translation: `Missing translation: parent.child.grandchild.errors.email.invalid`.

