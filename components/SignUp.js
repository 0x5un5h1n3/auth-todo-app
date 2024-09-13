import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        signUp(values.email, values.password, values.name);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="glassmorphism p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Sign Up</h2>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 mb-4 w-full"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />
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
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
