const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily:{
       brunoace: ['"Bruno Ace SC"', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
	  addVariant('firefox', ({ container, separator }) => {
		const isFirefoxRule = postcss.atRule({
		  name: '-moz-document',
		  params: 'url-prefix()',
		});
		isFirefoxRule.append(container.nodes);
		container.append(isFirefoxRule);
		isFirefoxRule.walkRules((rule) => {
		  rule.selector = `.${e(
			`firefox${separator}${rule.selector.slice(1)}`
		  )}`;
		});
	  });
	}),
  ],
}

