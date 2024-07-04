import { Button, Input, Select } from "@westpac/ui";

const Transfer = () => {
  return (
    <>
      <div className="space-y-1">
        <div className="flex gap-3 mb-2">
          <p className="typography-brand-7 font-medium ">Pay</p>
          <Select className="w-full" value={"John Smith"}>
            <option>Select</option>
            <option value={"John Smith"}>John Smith</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </div>
        <p className="typography-body-9">+61 234 567 890</p>
        <p className="typography-body-8 font-medium">PayID name J Smith</p>
      </div>
      <div className="mt-6 space-y-1">
        <p className="typography-body-8 font-medium">From Westpac Choice</p>
        <p className="typography-body-9">$469.30</p>
      </div>
      <div className="mt-6 space-y-1">
        <p className="typography-body-8 font-medium">Amount</p>
        <Input size={"large"} value={"$40.32"}></Input>
      </div>
      <div className="mt-8">
        <Button look={"primary"} block={true}>
          Transfer
        </Button>
      </div>
    </>
  );
};

export default Transfer;
