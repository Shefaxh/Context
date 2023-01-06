import React, {useContext} from "react";
import * as Yup from "yup";
import {Context} from './Context/TodoContext';
import uniqid from 'uniqid';
import {Formik, Field, Form} from 'formik';
const SignUpSchema = Yup.object().shape({
    todo: Yup.string().min(3,"This must be at least 3 characters").required("This is required")
})
function Todos() {
    const {todo,setTodo}= useContext(Context)
    return(
        <div>
            <Formik 
            initialValues={{
                todo:'',
                id:''
            }
            }
            validationSchema={SignUpSchema}
            onSubmit={(values, {resetForm })=> {
                let copy =[...todo, {todo:values.todo,id:uniqid()}]
                setTodo(copy)
                resetForm({values: ''});
            }}
            
            >
                {
                    ({values,errors,touched }) => (
                        <Form>
                           <div className="main">
                                <Field name="todo" /> <br/>
                                {errors.todo && touched.todo ? <div style={{color: 'red'}}>{errors.todo}</div>:null}
                           
                            <button type="submit">Send</button>
                            </div>
                        </Form>
                    )
                    }

            </Formik>
        </div>
    )
}
 export default Todos