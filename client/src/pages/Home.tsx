import { Button } from "@westpac/ui";
import AccountCard from "../components/AccountCard";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h1 className="typography-brand-7 font-medium">Accounts</h1>
        <Button className="text-primary font-medium no-underline" look={"link"}>
          New Account
        </Button>
      </div>
      <div className="mt-2 space-y-3">
        <AccountCard
          accountType="Westpac Choice"
          amount="$420.39"
        ></AccountCard>
        <AccountCard
          accountType="Westpac Live Savings"
          amount="$12,000"
        ></AccountCard>
      </div>
    </div>
  );
};

export default Home;
