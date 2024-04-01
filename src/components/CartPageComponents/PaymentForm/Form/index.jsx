import React from 'react';

import { useForm } from 'react-hook-form';

import { dateNow, renderOptionMonths, renderOptionYears } from 'utils/formattingDate';

import usePaymentContext from '../hooks/usePaymentContext';

import cn from './styles.module.scss';

const Form = () => {
    let {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            cardNumber: '',
            name: '',
            ccv: '',
            cardValidityPeriod: {
                month: '',
                year: '',
            },
        },
    });

    const {
        numberCard,
        name,
        ccv,
        setCcv,
        setName,
        handleSetCardNumber,
        handleFocus,
        handleBlur,
        cardValidityPeriod,
        setCardValidityPeriod,
        setIsShowPaymentForm,
        setShowConfirmModal,
    } = usePaymentContext();

    const onSubmit = () => {
        setIsShowPaymentForm(false);
        setShowConfirmModal(true);
        reset();
    };

    const setNameField = (e) => {
        let value = e.target.value.replace(/[^a-zA-Z]+/g, '');
        setName(value);
    };

    const validDate = () => {
        const { year, month } = cardValidityPeriod;
        const [currentYear, currentMonth] = dateNow.split('-');
        if (year && month) {
            return (month && year > currentYear) || (month >= currentMonth && year >= currentYear);
        }
    };

    const getErrors = () => {
        if (validDate()) {
            const { month, year, ...rest } = errors;
            errors = { ...rest };
        }
        return errors;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn.form}>
            <label>
                <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    value={numberCard}
                    placeholder={'xxxx xxxx xxxx xxxx'}
                    {...register('cardNumber', {
                        required: 'The field is required',
                        onChange: handleSetCardNumber,
                        pattern: {
                            value: /[\d| ]{19}/,
                            message: 'The card number must contain 16 digits',
                        },
                    })}
                />
            </label>

            <div className={cn.error}>
                {errors?.cardNumber && (
                    <p>{errors?.cardNumber?.message || 'you have entered incorrect data'}</p>
                )}
            </div>

            <p className={cn['valid-title']}>valid thru</p>

            <div className={cn['selects-wrapper']}>
                <select
                    className={cn.select}
                    {...register('month', {
                        required: 'The fields is required',
                        onChange: (e) =>
                            setCardValidityPeriod({ ...cardValidityPeriod, month: e.target.value }),
                        validate: {
                            validateNumber: () => validDate(),
                        },
                    })}
                >
                    <option value="" disabled="">
                        month
                    </option>
                    {renderOptionMonths}
                </select>

                <select
                    className={cn.select}
                    {...register('year', {
                        required: 'The fields is required',
                        onChange: (e) =>
                            setCardValidityPeriod({ ...cardValidityPeriod, year: e.target.value }),
                        validate: {
                            validateNumber: () => validDate(),
                        },
                    })}
                >
                    <option value="" disabled="">
                        year
                    </option>
                    {renderOptionYears}
                </select>
            </div>

            <div className={cn.error}>
                {(getErrors()?.month || getErrors()?.year) && (
                    <p>
                        {errors?.month?.message ||
                            errors?.year?.message ||
                            'check and re-enter the month and year in both fields'}
                    </p>
                )}
            </div>

            <label>
                <input
                    type="text"
                    inputMode="text"
                    value={name}
                    placeholder="name"
                    {...register('name', {
                        required: 'The field is required',
                        onChange: setNameField,
                        minLength: {
                            value: 2,
                            message: 'The name field must contain more than 2 character',
                        },
                        pattern: {
                            value: /[a-zA-Z]/,
                            message: 'Only Latin characters are allowed',
                        },
                    })}
                />
            </label>

            <div className={cn.error}>
                {errors?.name && (
                    <p>{errors?.name?.message || 'you have entered incorrect data'}</p>
                )}
            </div>

            <label>
                <input
                    type="text"
                    className={cn.ccv}
                    inputMode="numeric"
                    placeholder="ccv"
                    value={ccv}
                    onFocus={handleFocus}
                    {...register('ccv', {
                        required: 'The field is required',
                        onChange: setCcv,
                        onBlur: handleBlur,
                        maxLength: {
                            value: 3,
                            message: 'The card number must contain 3 digits',
                        },
                        minLength: {
                            value: 3,
                            message: 'The card number must contain 3 digits',
                        },
                    })}
                />
            </label>

            <div className={cn.error}>
                {errors?.ccv && <p>{errors?.ccv?.message || 'you have entered incorrect data'}</p>}
            </div>

            <button
                title="Pay"
                onSubmit={handleSubmit(onSubmit)}
                className={cn['btn-submit']}
                type="submit"
                disabled={!isValid}
            >
                pay
            </button>
        </form>
    );
};

export default Form;
