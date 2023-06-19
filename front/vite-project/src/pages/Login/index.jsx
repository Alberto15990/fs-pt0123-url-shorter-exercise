
import { useForm } from 'react-hook-form'

const templates = {
    login: {
        email: {
            validation: {
                required: true,
            },
        },
        username: {
            required: true,
        },

        password: {
            validation :{
            required: true,
            minLength: 4,
            }
        },

        errors :{
            validation: {
            required : "This fields are mandatory",
            minLength: "4 lentgh are required"
            }
        } 
    }
}
    


const Login = () => {

    const { register, formState, handleSubmit } = useForm()

    const handleForm = (data) => {
        console.info('>form data:', data)
    }

    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">Email</label><br />
                <input id="email" placeholder="your email" {...register("email", { required: true })}></input>
                <p></p>

                <label htmlFor="username">Username</label><br />
                <input id="username" placeholder="your username" {...register("username", { required: true })}></input>
                <p></p>


                <label htmlFor="password">Password</label><br />
                <input id="password" type="password" placeholder="*************" {...register("password", { required: true, minLength: 4 })}></input>
                <p></p>

                <input type="submit" />
            </form>
        </section>
    )

}

export default Login