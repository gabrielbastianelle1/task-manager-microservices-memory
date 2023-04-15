export default function getSessionStorageValue(key: string) {
    return new Promise<string>((resolve, reject) => {
        try {
            const value = sessionStorage.getItem(key);
            if (value !== null) {
                resolve(value);
            } else {
                return reject(
                    `Value for key '${key}' not found in sessionStorage`
                );
            }
        } catch (error) {
            return reject(error);
        }
    });
}
