# Learn HTML Forms

Forms are the building blocks of interactivity on the web. They allow websites to send requests to servers without requiring any client-side JavaScript.

## How forms work

You create a form with the `<form>` element. This is a container for all the different types of inputs your users will interact with.

### Inputs

The humble `<input>` element can be used to render many different types of input:

- `<input type="text">`
- `<input type="email">`
- `<input type="password">`
- `<input type="checkbox">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="number">`
- `<input type="tel">`

There is also a `<select>` element that allows the user to choose between multiple `<option>`s.

### Form submission

Forms can also contain button elements. By default a button has an implicit `type="submit"`. This means that clicking it will submit the form. It's generally a good idea to explicitly add this type to your submit button.

#### Controlling the request

##### The `action` attribute

When submitted a form will send a request to the URL in its `action` attribute. This can be a relative URl to a route within the same site (`/submit`) or an external URL to some other API (`https://pokeapi.co/submit`).

##### The `method` attribute

You can control the method the form sends the request with using the `method` attribute. For example: `<form method="POST" action="/submit">`.

##### Submitting user data

All inputs with a `name` attribute within your form will be submitted as the "search" part of the URL (often called the querystring; it's the bit following a `"?"`). It will be structured like `"url.com?inputName=userValue"`.

## Workshop

## Part One: basic GET request

1. Open `workshop/index.html` in your editor
1. Add a form to the page containing
1. It should send a `GET` request to `"https://learn-forms.netlify.com/submit/part1"`
1. The response will tell you whether you successfully submitted a name

## Part Two: different input types

1. Change your form to submit to `"https://learn-forms.netlify.com/submit/part2"`
1. Add fields for:
   - an email address
   - a telephone number
   - a group of radios to choose your preferred method of contact (email or telephone)
   - a textarea for a message
   - a marketing-consent checkbox
1. The data submitted should look something like this:
   ```
   name=Oli
   email=hello@oliverjam.es
   telephone=0123455678
   contact=email
   message=Hello this is a message!
   marketingConsent=on
   ```
