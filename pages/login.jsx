//! Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import Head from "next/head";
import { useState } from "react";

//! Icons
import { BsPhoneVibrateFill, BsChatLeftTextFill } from "react-icons/bs";
import Link from "next/link";

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

//! Code

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
const Login = () => {
    const [active, setActive] = useState(false);
    //Phone
    const SUBMIT_PHONE = (values) => {
        console.log(values.phone_number);
        setActive(true);
    };
    //Code
    const SUBMIT_CODE = (values) => {
        console.log(values.valid_code);
    };
    return (
        <>
            <Head>
                <title>ورود به اکانت | پروفایل، صفحه کاربری | روغنی کار</title>
            </Head>
            <main className="bg-linear-background flex min-h-screen min-w-full flex-col items-center justify-start px-4 pt-5 sm:pt-28">
                <p className="mb-5 text-xl font-extralight text-white sm:text-3xl">
                    ورود به <span className="font-normal">سادگــــــــی</span> یک{" "}
                    <span className="font-normal">شمـــاره موبایــــل</span>
                </p>
                <article className="login-form-neu w-full max-w-sm overflow-hidden rounded-3xl bg-white sm:max-w-[32.5rem]">
                    {/* Phone Form */}
                    <hgroup
                        className="
                        grid w-full grid-cols-2 items-center justify-items-center 
                        bg-white py-3 shadow-xl shadow-black/25"
                    >
                        <h1 className={!active ? "font-extrabold text-orange-500" : "font-bold text-stone-400"}>
                            1. شماره موبایل من
                        </h1>
                        <h2 className={active ? "font-extrabold text-orange-500" : "font-bold text-stone-400"}>
                            2. کد پیامک شده
                        </h2>
                    </hgroup>
                    {!active && (
                        // phone_number
                        <Formik
                            initialValues={INITIAL_PHONE}
                            validationSchema={VALIDATE_PHONE}
                            onSubmit={SUBMIT_PHONE}
                            validateOnMount
                        >
                            {(formProps) => {
                                return (
                                    <Form className="mt-4 flex flex-col items-center justify-center p-4">
                                        <section
                                            className="
                                            grid w-full grid-cols-[90%_10%] items-center justify-items-center 
                                            rounded-full bg-stone-100 py-1.5 px-2"
                                        >
                                            <Field
                                                name="phone_number"
                                                id="phone_number"
                                                placeholder="مثلا: 6789 345 0912"
                                                type="number"
                                                dir="ltr"
                                                className="
                                                border-none bg-transparent text-center font-bold tracking-[2px] 
                                                text-stone-500 outline-none placeholder:text-stone-300"
                                            />
                                            <BsPhoneVibrateFill className="text-xl text-stone-300" />
                                        </section>
                                        <p className="mt-2">
                                            <ErrorMessage name="phone_number" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={!formProps.isValid || formProps.isSubmitting}
                                            className="
                                            mt-2 w-full rounded-full bg-orange-100 py-1.5 font-bold text-orange-500 
                                            disabled:bg-stone-100 disabled:text-stone-300 sm:w-1/2 sm:self-end"
                                        >
                                            ارسال کد تایید
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                    {active && (
                        // valid_code
                        <Formik
                            initialValues={INITIAL_CODE}
                            validationSchema={VALIDATE_CODE}
                            onSubmit={SUBMIT_CODE}
                            validateOnMount
                        >
                            {(formProps) => {
                                return (
                                    <Form className="mt-4 flex flex-col items-center justify-center p-4">
                                        <section
                                            className="
                                            grid w-full grid-cols-[90%_10%] items-center justify-items-center 
                                            rounded-full bg-stone-100 py-1.5 px-2"
                                        >
                                            <Field
                                                name="valid_code"
                                                id="valid_code"
                                                placeholder="1234"
                                                type="number"
                                                dir="ltr"
                                                className="
                                                border-none bg-transparent text-center font-bold tracking-[5px] 
                                                text-stone-500 outline-none placeholder:text-stone-300"
                                            />
                                            <BsChatLeftTextFill className="text-xl text-stone-300" />
                                        </section>
                                        <p className="mt-2">
                                            <ErrorMessage name="valid_code" />
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={!formProps.isValid || formProps.isSubmitting}
                                            className="
                                            mt-2 w-full rounded-full bg-orange-100 py-1.5 font-bold text-orange-500 
                                            disabled:bg-stone-100 disabled:text-stone-300 sm:w-1/2 sm:self-end"
                                        >
                                            ورود به سایت
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                </article>
                <p className="mt-8 leading-7 w-full max-w-sm px-4 text-sm font-normal text-white sm:max-w-md">
                    <span className="text-lg font-bold">توجه:</span>
                    <br /> با ورود به سایت، تایید میکنم تمامی{" "}
                    <Link href="قوانین-سایت">
                        <a className="italic underline">قوانین و شرایط</a>
                    </Link>{" "}
                    استفاده از سایت را مطالعه و با آن موافقم.
                </p>
            </main>
        </>
    );
};

export default Login;
