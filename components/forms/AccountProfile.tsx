"use client"; //because we will use forms

// define props as an interface
interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = () => {
  return <div>Account Profile</div>;
};

export default AccountProfile;
