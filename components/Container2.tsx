import Stream from "./Stream";

interface Iprops {
  user?: string;
}

export const Container2: React.FC<Iprops> = ({ user }) => {
  return (
    <div className="w-11/12 mx-auto grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-20">
      <Stream />
      <Stream />
      <Stream />
      <Stream />
      <Stream />
      <Stream />
    </div>
  );
};
