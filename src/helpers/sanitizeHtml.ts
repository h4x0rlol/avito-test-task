import sanitizeHtml from 'sanitize-html';

const rules = {
	allowedTags: ['b', 'i', 'em', 'strong', 'a', 'pre', 'div', 'code', 'quote'],
	transformTags: {
		pre: 'p',
		a: sanitizeHtml.simpleTransform('a', {
			target: '_blank',
			rel: 'noopener noreferrer',
		}),
	},
};

const transofrmHTMLtoText = (text: string): string => {
	return sanitizeHtml(text, rules);
};

export default transofrmHTMLtoText;
