interface IAccountProps {
  accountType: string;
  amount: string;
}

const AccountCard = (props: IAccountProps) => {
  return (
    <div className="p-4 shadow-md">
      <div className="flex justify-between">
        <p className="typography-brand-8 font-medium">{props.accountType}</p>
        <p className="typography-brand-8 font-bold">{props.amount}</p>
      </div>
    </div>
  );
};

export default AccountCard;
