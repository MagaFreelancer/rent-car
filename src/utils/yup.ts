import * as yup from 'yup';
import { AppErrors } from '@/common/errors.ts';
import { differenceInDays } from 'date-fns';

export const loginSchema = yup.object().shape({
    email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password: yup.string().min(8, AppErrors.minLength).required(AppErrors.RequiredField),
});

export const registerSchema = yup.object().shape({
    name: yup.string().min(4, AppErrors.minLengthName).required(AppErrors.RequiredField),
    email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password: yup
        .string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
        .matches(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
            AppErrors.InvalidPassword
        ),
    repeat: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли не совпадают') // Сравнение с полем password
        .required('Повторите пароль обязателен'),
});
// export const carRegistrationSchema = yup.object().shape({
//     name: yup.string().min(5, AppErrors.minLength).required(AppErrors.RequiredField),
//     email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
//     phone: yup.string().min(10, AppErrors.minLength).required(AppErrors.RequiredField),
//     address: yup.string().min(8, AppErrors.minLength).required(AppErrors.RequiredField),
//     dateOfBirth: yup.string().required(AppErrors.RequiredField),
// });
export const carRegistrationSchema = yup.object().shape({
    deliveryOption: yup.string().required("Выберите опцию доставки"),
    additionalInfo: yup.string().when("deliveryOption", {
        is: "delivery",
        then: (schema) => schema.required("Поле обязательно для заполнения").min(10, "Минимум 10 символов"),
        otherwise: (schema) => schema.notRequired(),
    }),
});