export class AppUtils {
    // method sued to check empty or null string
    public static isNullOrWhitespace(input): boolean {
        if (typeof input === 'undefined' || input == null) {
            return true;
        }
        return input.replace(/\s/g, '').length < 1;
    }
}
