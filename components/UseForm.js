import {useState, useEffect} from 'react';

const UseForm =(callback, validate)=>{
    const [values, setValues] = useState(
        {
            first_name :"",
            
            email:"",
            phone_no:""
        }
    );
    
    const [errors,setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e =>
     {
         const {name,value} = e.target;
         setValues({
             ...values,
             [name]:value
         });
         
    };

    const handleSubmit = e =>
    {
        // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        e.preventDefault();

        setErrors(validate(values));
        console.log(validate(values));
        setIsSubmitting(true);
       !Object.keys(validate(values)).length &&  callback();
        
    };

    useEffect( ()=>
    {
        if(Object.keys(errors).length === 0 && isSubmitting)
        {
            callback();
        }
    }, [errors]);

    return { handleChange,isSubmitting, values, handleSubmit, errors};
};


export default UseForm;