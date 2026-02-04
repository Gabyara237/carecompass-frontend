import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signIn } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from "@/components/ui/input";
import { Button } from '../ui/button';

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const signedInUser = await signIn(formData);
      setUser(signedInUser);
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <Card className="w-full max-w-sm rounded-sm">
      <CardHeader className="flex border-b-4 border-black-100 w-full font-[Poppins]">Care Compass</CardHeader>
      <CardHeader>
        <CardTitle className = "flex justify-center">Sign In</CardTitle>
        <CardDescription>
          Access Clinics, medical translations, and health resources in your language
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>
          {message && <p className="text-red-500">{message}</p>}
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex gap-3">
          <Button variant="outline" className="w-full">Sign in with Google</Button>
          <Button variant="outline" className="w-full">Sign in with Facebook</Button>
        </div>
        <div className="flex gap-3">
          <Button className="bg-[#246ECB]" onClick={handleSubmit}>Sign In</Button>
          <span>Or</span>
          <Button className="bg-[#246ECB]" onClick={() => navigate("/sign-up")}>Create Account</Button>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
};

export default SignInForm;
