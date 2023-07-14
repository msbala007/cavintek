import React from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Select from "@mui/material/Select";

import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      number: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
      languages: [],
      isMarried: "",
    },
  });
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  console.log(errors);
  const onSubmit = (data) => {
    console.log("values", data);
  };
  return (
    <>
      <div className="bg-pink-100 min-h-screen  ">
        <div className="text-center">
          <h1 className="capitalize font-bold text-2xl">
            FORM WITH VALIDATION
          </h1>
        </div>

        <section className="flex justify-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-4 w-96 "
          >
            <div>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="username"
                {...register("username", { required: "Name is required" })}
                className="w-full"
                helperText={
                  errors.username?.message && (
                    <h1 className="font-bold animate-pulse">
                      {errors.username?.message}!!
                    </h1>
                  )
                }
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                className="w-full"
                label="Mobile Number"
                variant="outlined"
                {...register("number", {
                  required: "Invalid mobile number",
                  pattern: {
                    value: /^([+]\d{2}[ ])?\d{10}$/,
                    message: "Invalid mobile number",
                  },
                })}
                helperText={
                  errors.number?.message && (
                    <h1 className="font-bold animate-pulse">
                      {errors.number?.message}!!
                    </h1>
                  )
                }
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                className="w-full"
                label="E mail"
                variant="outlined"
                {...register("email", {
                  required: "Invalid email address",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
                helperText={
                  errors.email?.message && (
                    <h1 className="font-bold animate-pulse">
                      {errors.email?.message}!!
                    </h1>
                  )
                }
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                className="w-full"
                label="Password"
                variant="outlined"
                {...register("password", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Password contain special char,number,Uppercase,small letter ",
                  },
                })}
                helperText={
                  errors.password?.message && (
                    <h1 className="font-bold animate-pulse">
                      {errors.password?.message}!!
                    </h1>
                  )
                }
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                type="password"
                className="w-full"
                label="Confirm Password"
                variant="outlined"
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "does not match";
                    }
                  },
                })}
                helperText={
                  errors.confirmPassword?.message && (
                    <h1 className="font-bold animate-pulse">
                      {errors.confirmPassword?.message}!!
                    </h1>
                  )
                }
              />
            </div>

            <div>
              <FormControl size="medium" className="w-full">
                <InputLabel id="demo-select-small-label">Gender</InputLabel>
                <Select
                  label="Gender"
                  {...register("gender", { required: "Select your gender" })}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            {errors.gender?.message && (
              <h1 className="font-bold text-xs animate-pulse">
                {errors.gender?.message}!!
              </h1>
            )}

            <div className="">
              <FormLabel id="">Languages</FormLabel>
              <div className="flex">
                {" "}
                <div>
                  {" "}
                  <Checkbox
                    label="Antoine Llorca"
                    value="English"
                    {...register("languages", {
                      required: "select at least one",
                    })}
                  />
                  <label>English</label>
                </div>
                <div>
                  {" "}
                  <Checkbox
                    label=""
                    value="Tamil"
                    {...register("languages", {
                      required: "select at least one",
                    })}
                  />
                  <label>Tamil</label>
                </div>
                <div>
                  {" "}
                  <Checkbox
                    label=""
                    value="Malayalam"
                    {...register("languages", {
                      required: "select at least one",
                    })}
                  />
                  <label>Malayalam</label>
                </div>
              </div>
            </div>
            {errors.languages?.message && (
              <h1 className="font-bold text-xs animate-pulse">
                {errors.languages?.message}!!
              </h1>
            )}

            {/* Radio Button */}

            <div className="">
              <FormLabel id="">Are you married?</FormLabel>{" "}
              <RadioGroup className="flex">
                <div className="flex">
                  <div className="">
                    {" "}
                    <Radio
                      label=""
                      value="Yes"
                      {...register("isMarried", {
                        required: "Must select one of these two",
                      })}
                    />
                    <label>Yes</label>
                  </div>
                  <div>
                    {" "}
                    <Radio
                      label=""
                      value="No"
                      {...register("isMarried", {
                        required: "Must select one of these two",
                      })}
                    />
                    <label>No</label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            {errors.isMarried?.message && (
              <h1 className="font-bold text-xs animate-pulse">
                {errors.isMarried?.message}!!
              </h1>
            )}

            <div>
              <button type="submit" className="bg-green-400 w-full py-2">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Form;
