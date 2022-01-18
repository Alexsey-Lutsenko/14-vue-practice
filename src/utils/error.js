const ERRORS_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден',
    INVALID_PASSWORD: 'Пароль не верный',
    auth: 'Пожалуйста войдите в систему'
}

export function error(code) {
    return ERRORS_CODES[code] ? ERRORS_CODES[code] : 'Неизвестная ошибка'
}
