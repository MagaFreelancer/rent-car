export enum AppErrors {
    PasswordDoNotMatch = 'У вас не совпадают пароли',
    InvalidEmail = 'Введите корректный email',
    RequiredField = 'Это поле обязательное',
    minLength = 'Минимальная длина 8 символов',
    InvalidPassword = 'Пароль должен содержать спецсимвол, одинь заглавный символ, одну цифру',
    minLengthName = 'Минимальная длина 4 символов',
    maxPhone = 'Максимальная длина 15 символов',
    minPhone = 'Минимальная длина 10 символов',
    phone = 'Введите корректный номер телефона',
}

export enum AppErrorsFetch {
    Exists = 'Пользователь уже существует',
    AuthLogin = 'Не верный логин или пароль',
    Server = 'Проблемы с сервером',
}
