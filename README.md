# Virtual Storefront

e-Commerce storefront using React with Redux, coupled with a live API server and Material UI.

![Storefront Screenshot](./public/images/virtual_storefront_screenshot.png "Storefront Screenshot")

## Deployment

[Browse Lies, Pies, and Spy Wares](https://rhea-virtual-storefront.netlify.app)

## Documentation

Development and testing

### UML

![Virtual Storefront](./public/images/virtual_storefront_UML.png "Virtual Storefront")

[Virtual Storefront Whiteboard](https://projects.invisionapp.com/freehand/document/jLBOQqZE5)

## Installation

To get started clone this repository:

> `git clone https://github.com/RheaMimiCarillo/storefront.git`

Navigate to your local directory and install dependencies:

> `npm i`

## Usage

Select from each `category` filter relevant `products`.
Change the theme from `light` to `dark` mode with a click of a button.

## Testing

My test suite uses [RTL](https://testing-library.com/docs/react-testing-library/intro/) to cover the following cases:

1. Display a list of all `categories` from the Redux Store
2. Display a list of all `products` within a selected category
3. Displays components using Material UI

- a test for if my custom theme is applying to a sample <Button>

## References

1. [target="_blank" rel="noopener noreferrer" safety](https://stackoverflow.com/a/50709724)
