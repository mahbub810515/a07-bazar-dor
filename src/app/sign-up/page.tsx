'use client'
import { authClient } from '@/lib/auth-client';
import { Form, Button, TextField, Label, Input, FieldError, Description, Checkbox } from '@heroui/react';

const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString().trim() ?? "";
        const email = formData.get("email")?.toString().trim() ?? "";
        const password = formData.get("password")?.toString() ?? "";

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
        });

        if (error) {
            alert(error.message);
            return;
        }
        
        alert("Account created successfully!");
    };

    return (
        <div className='min-h-screen flex justify-center items-center bg-green-50'>
            <Form className="flex flex-col gap-4 rounded-2xl border-2 bg-white p-10 " onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(value)) {
                            return "Please enter a valid name";
                        }

                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="enter your name" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Checkbox />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    )
}
export default SignUpPage