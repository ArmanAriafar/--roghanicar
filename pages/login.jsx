//! Required
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

//! Icons
import { BsPhoneVibrateFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

//! Formik
const INITIAL_PHONE = {
    phone_number: "",
};

const VALIDATE_PHONE = object().shape({
    phone_number: string()
        .min(10, "خطا: شماره وارد شده اشتباه است")
        .max(10, "خطا: شماره وارد شده اشتباه است")
        .required("خطا: لطفا شماره خود را وارد کنید"),
});
const INITIAL_CODE = {
    valid_code: "",
};

const VALIDATE_CODE = object().shape({
    valid_code: string()
        .min(4, "خطا: کد وارد شده اشتباه است")
        .max(4, "خطا: کد وارد شده اشتباه است")
        .required("خطا: لطفا کد پیامک شده را وارد کنید"),
});

//! Comp
const LoginPage = () => {
    //* Submit Phone
    const SUBMIT_PHONE = (values) => {
        console.log(values.phoneNumber);
        setActive((prev) => !prev);
    };
    const SUBMIT_CODE = (values) => {
        console.log(values.valid_code);
    };
    const [active, setActive] = useState(false);
    return (
        <main dir="ltr" className="grid min-h-screen w-full grid-cols-6 items-center justify-items-center">
            <section className="col-span-2 h-full w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/static/images/برندها-تولیدکنندها.webp"
                    alt="برندها-تولیدکنندها"
                    className="max-h-screen h-full w-full object-cover"
                />
            </section>
            <section
                className="login-form-box-shadow col-span-4 flex h-full w-full items-center justify-center bg-stone-50"
                dir="rtl"
            >
                <article className="w-full max-w-md rounded-3xl border border-orange-500">
                    <hgroup className="grid w-full grid-cols-2 items-center justify-items-center rounded-t-3xl bg-white py-4 shadow-xl shadow-black/20">
                        <h1
                            className={
                                !active ? "text-sm font-black text-orange-500" : "text-sm font-bold text-stone-400"
                            }
                        >
                            1. ورود شماره موبایل
                        </h1>
                        <h2
                            className={
                                active ? "text-sm font-black text-orange-500" : "text-sm font-bold text-stone-400"
                            }
                        >
                            2. تایید کد پیامک شده
                        </h2>
                    </hgroup>
                    {/* Phone Form */}
                    {!active && (
                        <Formik
                            initialValues={INITIAL_PHONE}
                            validationSchema={VALIDATE_PHONE}
                            onSubmit={SUBMIT_PHONE}
                            validateOnMount
                        >
                            {(formProps) => {
                                return (
                                    <Form className="flex flex-col items-center justify-start p-4">
                                        <label htmlFor="phone_number" className="mt-4 text-sm font-bold text-stone-600">
                                            لطفا شماره موبایل خود را وارد نمایید:
                                        </label>
                                        <section
                                            className="
                                            mt-8 grid w-full grid-cols-[90%_10%] items-center justify-items-center rounded-full
                                            bg-stone-100 px-2 py-2.5"
                                        >
                                            <Field
                                                name="phone_number"
                                                type="number"
                                                id="phone_number"
                                                placeholder="مثلا: 6789 345 0912"
                                                className="
                                                w-full border-none bg-transparent text-center text-sm font-bold 
                                                tracking-[2px] text-stone-400 outline-none placeholder:text-stone-400"
                                            />
                                            <BsPhoneVibrateFill className="rotate-12 text-2xl text-stone-400" />
                                        </section>
                                        <p className="mt-4 text-sm font-bold text-red-500 underline underline-offset-4">
                                            <ErrorMessage name="phone_number" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={formProps.isSubmitting || !formProps.isValid}
                                            className="
                                            login-btn mt-4 mb-2 w-full rounded-full py-2 text-sm font-bold"
                                        >
                                            ارسالد کد تایید
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                    {/* validate code */}
                    {active && (
                        <Formik
                            initialValues={INITIAL_CODE}
                            validationSchema={VALIDATE_CODE}
                            onSubmit={SUBMIT_CODE}
                            validateOnMount
                        >
                            {(formProps) => {
                                return (
                                    <Form className="flex flex-col items-center justify-start p-4">
                                        <label htmlFor="valid_code" className="mt-4 text-sm font-bold text-stone-600">
                                            لطفا کد پیامک شده را وارد کنید:
                                        </label>
                                        <section
                                            className="
                                            mt-8 grid w-full grid-cols-[90%_10%] items-center justify-items-center rounded-full
                                            bg-stone-100 px-2 py-2.5"
                                        >
                                            <Field
                                                name="valid_code"
                                                type="number"
                                                id="valid_code"
                                                placeholder="1234"
                                                className="
                                                w-full border-none bg-transparent text-center text-sm font-bold 
                                                tracking-[20px] text-stone-400 outline-none placeholder:text-stone-400"
                                            />
                                            <BiMessageDetail className="text-2xl text-stone-400" />
                                        </section>
                                        <p className="mt-4 text-sm font-bold text-red-500 underline underline-offset-4">
                                            <ErrorMessage name="valid_code" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={formProps.isSubmitting || !formProps.isValid}
                                            className="
                                            login-btn mt-4 mb-2 w-full rounded-full py-2 text-sm font-bold"
                                        >
                                            ورود به سایت
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                </article>
            </section>
        </main>
    );
};

export default LoginPage;
