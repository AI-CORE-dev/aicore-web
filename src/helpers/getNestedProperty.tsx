import type { PathInto } from '@/types/utility-types.type';

function get(object: Record<string, unknown>, path: string[], index = 0): string {
    const key = path[index];

    if (!key) {
        return '';
    }

    const result = object[key];

    if (result === undefined) {
        return '';
    }

    if (typeof result === 'string') {
        return result;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return get(Object(result), path, index + 1);
}

function getNestedProperty<Obj extends Record<string, unknown>>(
    dictionary: Obj,
    key: PathInto<Obj>,
): string {
    return get(dictionary, String(key).split('.'));
}

export { getNestedProperty };
