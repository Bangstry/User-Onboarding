import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
const FormComp = (props) => {
    console.log(props);
    const { values, touched, errors } = props;
    return (
        <Form>
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <Field type= "text" name="name" placeholder="name"/>
            {touched.email && errors.email && <p classEmail="error">{errors.email}</p>}
            <Field type= "email" name="email" placeholder="email"/>
            {touched.password && errors.password && <p classPassword="error">{errors.password}</p>}
            <Field type= "password" name="password" placeholder="password"/>
            {touched.tos && errors.tos && <p classTos="error">{errors.tos}</p>}
            <label>
                <Field type= "checkbox" name="tos" />
                Agree to TOS
            </label>
            <button type="submit">Submit</button>
        </Form>
    );
};

const FormikForm = withFormik({
    mapPropsToValues: ({ name, email, password, tos}) => {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
        };
    },
    validationSchema: yup.object().shape({
        name: yup.string()
            .required("A man has a name."),
        email:yup.string()
            .email("You need an email")
            .required("You absolutely need this"),
        password: yup.string()
            .min(4, "Password must be atleast 4 characters long")
            .required("Password is required"),
        tos: yup.boolean()
            .oneOf([true], "You must")
            .required()
    }),
    handleSubmit: (values, { resetForm }) => {
        
    }
})(FormComp);

export default FormikForm;