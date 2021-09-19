interface Iprops {
  user?: string;
}

export const Container2: React.FC<Iprops> = ({ user }) => {
  return (
    <div className="min-h-screen grid grid-rows-1 md:grid-cols-12 justify-items-center items-center">
      <div className=" col-span-12 md:col-span-6">
        This is an image object/ text
      </div>
      <div className="col-span-12 md:col-span-6">
        This is an image object text
      </div>
      <div>{user}</div>
    </div>
  );
};
