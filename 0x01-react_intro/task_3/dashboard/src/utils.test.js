import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

test('returns correct year', () => {
    expect(getFullYear()).toBe(2023);
});

test('returns correct footer copy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School')
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
});

test('returns correct notifications', () => {
    expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
    );
});