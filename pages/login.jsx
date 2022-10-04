//! Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import Head from "next/head";
import { useState } from "react";

//! Icons
import { BsPhoneVibrateFill, BsChatLeftTextFill } from "react-icons/bs";
import Link from "next/link";

//! Formik
const INITIAL_VALUES = {
    phone_number: "",
};

const VALIDATE_PHONE = object().shape({
    phone_number: string()
        .min(10, "خطا: شماره وارد شده اشتباه است")
        .max(10, "خطا: شماره وارد شده اشتباه است")
        .required("خطا: لطفا شماره خود را وارد کنید"),
});

const SUBMIT_PHONE = (values) => {
    console.log(values);
};

const INITIAL_CODE = {
    validate_code: "",
};

const VALIDATE_CODE = object().shape({
    validate_code: string()
        .min(4, "خطا: کد وارد شده اشتباه است")
        .max(4, "خطا: کد وارد شده اشتباه است")
        .required("خطا: لطفا کد پیامک شده را وارد کنید"),
});

const SUBMIT_CODE = (values) => {
    console.log(values);
};

const Login = () => {
    const [active, setActive] = useState(false);
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
                <article className="login-form-neu w-full max-w-sm rounded-3xl bg-white p-4 sm:max-w-[32.5rem]">
                    {/* Phone Form */}
                    <Formik
                        initialValues={INITIAL_VALUES}
                        validationSchema={VALIDATE_PHONE}
                        onSubmit={SUBMIT_PHONE}
                        validateOnMount
                    >
                        {(formik) => {
                            return (
                                <Form className="flex w-full flex-col items-center justify-start">
                                    <label
                                        htmlFor="phone_number"
                                        className="self-start text-lg font-extrabold text-orange-500"
                                    >
                                        1. تایید شماره موبایل
                                    </label>
                                    <section
                                        className="
                                        mt-4 grid w-full grid-cols-[90%_10%] items-center 
                                        justify-items-center rounded-full bg-stone-100 px-2 py-2"
                                    >
                                        <Field
                                            name="phone_number"
                                            id="phone_number"
                                            placeholder="مثلا: 6789 345 0912"
                                            type="number"
                                            className="
                                            w-full border-none bg-transparent text-center font-bold tracking-[3px] 
                                            text-stone-400 outline-none placeholder:text-stone-300/90"
                                        />
                                        <BsPhoneVibrateFill className="rotate-[30deg] text-2xl text-stone-400/70" />
                                    </section>
                                    {/* if ErrorMessage = true render this jsx  */}
                                    {ErrorMessage && (
                                        <p className="mt-2 text-sm font-bold text-red-500 shadow-red-400">
                                            <ErrorMessage name="phone_number" />
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={formik.isSubmitting || !formik.isValid}
                                        className="mt-2 w-full self-end rounded-full bg-orange-100 py-1.5 text-base font-bold text-orange-500 disabled:bg-stone-100 disabled:text-stone-300 sm:w-1/2"
                                        onClick={() => setActive(true)}
                                    >
                                        ارسال کد تایید
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                    {/* Code Form */}
                    <div className="mx-auto mt-8 w-1/2 border-b-4 border-dotted border-orange-500/40" />
                    <Formik
                        initialValues={INITIAL_CODE}
                        validationSchema={VALIDATE_CODE}
                        onSubmit={SUBMIT_CODE}
                        validateOnMount
                    >
                        {(formik) => {
                            return (
                                <Form className="mt-6 flex w-full flex-col items-center justify-start">
                                    <label
                                        htmlFor="validate_code"
                                        className="self-start text-lg font-extrabold text-orange-500"
                                    >
                                        2. ورود کد پیامک شده
                                    </label>
                                    <section
                                        className="
                                        mt-4 grid w-full grid-cols-[90%_10%] items-center 
                                        justify-items-center rounded-full bg-stone-100 px-2 py-2"
                                    >
                                        <Field
                                            disabled={active == false ? true : false}
                                            name="validate_code"
                                            id="validate_code"
                                            placeholder="1234"
                                            type="number"
                                            className="
                                            w-full border-none bg-transparent text-center font-bold tracking-[7px] 
                                            text-stone-400 outline-none placeholder:text-stone-300/90"
                                        />
                                        <BsChatLeftTextFill className="text-xl text-stone-400/70" />
                                    </section>
                                    {/* if ErrorMessage = true render this jsx  */}
                                    {ErrorMessage && (
                                        <p className="mt-2 text-sm font-bold text-red-500 shadow-red-400">
                                            <ErrorMessage name="validate_code" />
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={formik.isSubmitting || !formik.isValid}
                                        className="mt-2 w-full self-end rounded-full bg-orange-100 py-1.5 text-base font-bold text-orange-500 disabled:bg-stone-100 disabled:text-stone-300 sm:w-1/2"
                                    >
                                        اعتبار سنجی
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                    <p className="mt-4 w-full text-xs font-normal text-stone-500">
                        توجه:
                        <br /> با ورود به سایت، تایید میکنم تمامی{" "}
                        <Link href="قوانین-سایت">
                            <a className="italic underline">قوانین و شرایط</a>
                        </Link>{" "}
                        استفاده از سایت را مطالعه و با آن موافقم.
                    </p>
                </article>
            </main>
        </>
    );
};

export default Login;
