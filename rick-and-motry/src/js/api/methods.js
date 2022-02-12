const METHOD = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
};

export const GET = { ...METHOD };
export const POST = { ...METHOD, method: 'POST' };
export const PUT = { ...METHOD, method: 'PUT' };
export const DELETE = { ...METHOD, method: 'DELETE' };