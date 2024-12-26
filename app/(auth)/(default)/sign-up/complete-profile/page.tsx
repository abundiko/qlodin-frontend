import Form from "./Form";

const page = () => {
  // TODO: implement checking if user is logged in and if they have not setup their profile

  return (
    <>
      <h2 className="text-xl text-center text-black font-semibold leading-7 tracking-tight md:text-2xl mb-4">
        Creating your Profile
      </h2>
      <Form />
    </>
  );
};

export default page;
