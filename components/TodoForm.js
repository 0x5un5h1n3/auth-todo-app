import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addTodo(values.title, values.description);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="glassmorphism p-6 rounded-lg mb-4">
          <h2 className="text-2xl mb-4">Add Todo</h2>
          <Field
            type="text"
            name="title"
            placeholder="Title"
            className="border p-2 mb-4 w-full"
          />
          <ErrorMessage name="title" component="div" className="text-red-500" />
          <Field
            as="textarea"
            name="description"
            placeholder="Description"
            className="border p-2 mb-4 w-full"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Todo
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
