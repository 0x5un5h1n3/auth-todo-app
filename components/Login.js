import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { login } = useContext(AuthContext);

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
        login(values.email, values.password);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="glassmorphism p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Login</h2>
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
