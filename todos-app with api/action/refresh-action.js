export const refresh = () => {
    return {
        type: 'refresh'
    }
}

export const add = () => {
    return {
        type: 'add'
    }
}

export const sub = () => {
    return {
        type: 'sub'
    }
}

export const set = (counter) => {
    return {
        type: 'set',
        counter: counter
    }
}