// components/Login.js
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Login = () => {
  const { login, message, error } = useContext(AuthContext);
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const success = login(values.email, values.password);
        if (success) {
          router.push("/todos"); // Redirect to the todo list page
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
          {message && (
            <div className="text-green-500 mb-4 text-center">{message}</div>
          )}
          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 p-2 w-full rounded"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-300 p-2 w-full rounded"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
