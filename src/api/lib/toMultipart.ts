export function toMultipart(data: Record<string, unknown>): FormData {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'string') {
            formData.append(key, value);
        }
    });

    return formData;
}
