/* eslint-disable import/no-extraneous-dependencies */
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {
	getDateFromTimestamp,
	getFetchIndicesArray,
	getStartIndexByPage,
	getTimeDifference,
	isPageNotInrange,
} from '../helpers';
import transofrmHTMLtoText from '../helpers/sanitizeHtml';

describe('Helpers tests', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	test('getFetchIndicesArray() test', () => {
		const mockNewsIds = Array.from(Array(100).keys());

		const firstPage = getFetchIndicesArray(mockNewsIds, 1);
		const lastPage = getFetchIndicesArray(mockNewsIds, 5);

		expect(firstPage).toStrictEqual(Array.from(Array(20).keys()));
		expect(lastPage).toStrictEqual(
			Array.from({ length: 20 }, (_, i) => i + 80)
		);
		expect([1, 2]).toStrictEqual([1, 2]);
		expect([]).toStrictEqual([]);

		expect(firstPage[0]).toBe(0);
		expect(lastPage[0]).toBe(80);
	});

	test('isPageNotInrange() test', () => {
		expect(isPageNotInrange(NaN)).toBe(true);
		expect(isPageNotInrange(1)).toBe(false);
		expect(isPageNotInrange(5)).toBe(false);
		expect(isPageNotInrange(0)).toBe(true);
		expect(isPageNotInrange(6)).toBe(true);
	});

	test('getStartIndexByPage() test', () => {
		expect(getStartIndexByPage(100)).toBe(1);
		expect(getStartIndexByPage(1)).toBe(1);
		expect(getStartIndexByPage(5)).toBe(81);
	});

	test('getTimeDifference() test', () => {
		const mockNow = 1667391050982;
		vi.setSystemTime(mockNow);

		expect(getTimeDifference(1667390419)).toBe('11 minutes ago');
		expect(getTimeDifference(1667386819)).toBe('1 hours ago');
		expect(getTimeDifference(1667300419)).toBe('approximately 1 days ago');
		expect(getTimeDifference(1664622019)).toBe(
			'approximately 1 months ago'
		);
		expect(getTimeDifference(1443697219)).toBe('approximately 7 years ago');
	});

	test('getDateFromTimestamp() test', () => {
		expect(getDateFromTimestamp(1667391226)).toBe('11/2/2022');
	});

	test('transofrmHTMLtoText() test', () => {
		const html = "<div> <a href='#' /> <pre>text</pre> </div>";

		expect(transofrmHTMLtoText(html)).toBe(
			'<div> <a href="#" target="_blank"> text </a></div>'
		);
	});
});
