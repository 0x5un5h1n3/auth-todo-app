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
          router.push("/");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="glassmorphism p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Login</h2>
          {message && <div className="text-green-500 mb-4">{message}</div>}
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 mb-4 w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 mb-4 w-full"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
