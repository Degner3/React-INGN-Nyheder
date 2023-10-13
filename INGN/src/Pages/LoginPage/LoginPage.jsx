import { useForm } from "react-hook-form";
import style from "./LoginPage.module.scss"
import { useState } from "react";





export const LoginPage = () => {

    // const { user, setUser } = useContext(User)

    const { register, handleSubmit, formState: { errors } } = useForm()


    const [success, setSuccess] = useState("")

    const onSubmit = (data, event) => {
        console.log(data);
        setSuccess("Du er nu logget ind!") // Viser en succesmeddelelse
    
        // Nulstil formularfelterne
        event.target.reset();
    
    }




    return (
      <section className={style.login}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.loginwrapper}>
            <h2>Log ind</h2>
            <label htmlFor="">
              <p>Brugernavn:</p>
              <input
                type="text"
                id="id"
                {...register("Brugernavn", { required: true })}
              />
              {errors.username?.type === "required" && (
                <span>Du skal udfylde Brugernavn</span>
              )}
              {errors.username?.type === "minLengt" && (
                <span>Du skal have et brugernavn længere end 4 bogstaver</span>
              )}
            </label>

            <label htmlFor="">
              <p>Password:</p>
              <input
                type="password"
                id="password"
                {...register("Password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <span>Du skal udfylde Password</span>
              )}
              {errors.password?.type === "minLengt" && (
                <span>Du skal have et password længere end 4 bogstaver</span>
              )}
            </label>
            <input className={style.submit} type="submit" value="Login" />
            {success && (
              <p style={{ color: "green" }}>
                {success}
                <span><BsFillCheckCircleFill /></span>
              </p>
            )}
          </div>

        </form>
      </section>
    );
}