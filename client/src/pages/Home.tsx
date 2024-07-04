import { Button } from "@westpac/ui";
import { useNavigate } from "react-router-dom";
import AccountCard from "../components/AccountCard";

const Home = () => {
  const navigate = useNavigate();
  const processVoiceInput = () => {
    //call to AI wrapper
    //redirect to transfer page after processing
    navigate("/transfer");
  };
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h1 className="typography-brand-7 font-medium">Accounts</h1>
        <Button className="text-primary font-medium no-underline" look={"link"}>
          New Account
        </Button>
      </div>
      <div className="mt-2 space-y-3">
        <AccountCard></AccountCard>
        <AccountCard></AccountCard>
      </div>
    </div>
  );
};

export default Home;
