import { Box, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { useMutation } from "urql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useRegisterMutation } from "../generated/graphql";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          const res = await register(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="enter your username here"
            />
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="enter your password here"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              colorScheme="teal"
              mt={4}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
