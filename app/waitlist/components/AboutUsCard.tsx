import { IconType } from "react-icons";

export const AboutUsCard = ({
  icon: Icon,
  header,
  body,
}: {
  icon: IconType;
  header: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl lg:rounded-4xl p-6">
      <div className="text-sienna">
        <Icon size={30} color="sienna" />
      </div>
      <div className="font-garamond text-darkout text-2xl font-medium">
        {header}
      </div>
      <div className="font-sans font-medium text-sm text-espresso">{body}</div>
    </div>
  );
};
